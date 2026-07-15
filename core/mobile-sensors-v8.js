/* FramePro Mobile Sensors V9 — recenter único, yaw suave e nível pouco sensível */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);
if(!mobile)return;
const html=document.documentElement;

function applyLook(dx,dy){
  if(!Number.isFinite(dx)||!Number.isFinite(dy))return;
  if(typeof window.__fpApplyLook==='function'){window.__fpApplyLook(dx,dy);return;}
  const target=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;
  const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,view:window});
  try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy},mozMovementX:{value:dx},mozMovementY:{value:dy},webkitMovementX:{value:dx},webkitMovementY:{value:dy}});}catch(_){ }
  target.dispatchEvent(ev);document.dispatchEvent(ev);window.dispatchEvent(ev);
}
function wheel(delta){
  const target=document.querySelector('#gameShell canvas')||document.body;
  target.dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));
}
function normalize(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function toast(text){
  let t=document.getElementById('fpSensorToastV9');
  if(!t){t=document.createElement('div');t.id='fpSensorToastV9';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.92)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}
  t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1300);
}
function releaseMovement(){
  [['KeyW','w',87],['KeyA','a',65],['KeyS','s',83],['KeyD','d',68]].forEach(([code,key,keyCode])=>{
    const ev=new KeyboardEvent('keyup',{code,key,bubbles:true,cancelable:true});
    try{Object.defineProperties(ev,{keyCode:{value:keyCode},which:{value:keyCode}});}catch(_){}
    window.dispatchEvent(ev);document.dispatchEvent(ev);
  });
}
function resetJoysticks(){
  ['fpMoveV4','fpLookV4'].forEach(id=>{const joy=document.getElementById(id),knob=joy&&joy.querySelector('.fpKnobV4');if(knob)knob.style.transform='translate(0px,0px)';});
  releaseMovement();
}

function install(){
  const oldButton=document.getElementById('fpSensorV4');
  const oldCenter=document.getElementById('fpCenterV4');
  if(!oldButton||!oldCenter||oldButton.dataset.v9)return false;
  const button=oldButton.cloneNode(true);oldButton.replaceWith(button);button.dataset.v9='1';
  const center=oldCenter.cloneNode(true);oldCenter.replaceWith(center);center.dataset.v9='1';center.textContent='⟳ CENTRALIZAR TUDO';

  let enabled=false,current=null,baseline=null,last=null;
  let yawFiltered=0,pitchFiltered=0,rollApplied=0,samples=0,recentering=false;

  function mapOrientation(e){
    const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;
    const alpha=e.alpha==null?0:e.alpha,beta=e.beta==null?0:e.beta,gamma=e.gamma==null?0:e.gamma;
    if(angle===90)return{yaw:alpha,pitch:gamma,roll:beta};
    if(angle===270)return{yaw:alpha,pitch:-gamma,roll:-beta};
    if(angle===180)return{yaw:alpha,pitch:-beta,roll:-gamma};
    return{yaw:alpha,pitch:beta,roll:gamma};
  }

  function onOrientation(e){
    if(!enabled||recentering)return;
    current=mapOrientation(e);samples++;
    if(!baseline){baseline={...current};last={...current};return;}
    if(!last){last={...current};return;}

    let dyaw=normalize(current.yaw-last.yaw);
    let dpitch=current.pitch-last.pitch;
    last={...current};
    if(Math.abs(dyaw)>8||Math.abs(dpitch)>8)return;

    if(Math.abs(dyaw)<0.18)dyaw=0;
    if(Math.abs(dpitch)<0.16)dpitch=0;
    yawFiltered=yawFiltered*0.78+dyaw*0.22;
    pitchFiltered=pitchFiltered*0.80+dpitch*0.20;

    if(Math.abs(yawFiltered)>0.015)applyLook(yawFiltered*0.72,0);
    if(Math.abs(pitchFiltered)>0.015)applyLook(0,pitchFiltered*0.62);

    /* nível muito menos sensível: 1 passo a cada 6 graus, com zona morta de 3 graus */
    const relativeRoll=current.roll-baseline.roll;
    const wanted=Math.abs(relativeRoll)<3?0:Math.max(-5,Math.min(5,Math.round(relativeRoll/6)));
    if(wanted!==rollApplied){wheel(wanted>rollApplied?18:-18);rollApplied+=Math.sign(wanted-rollApplied);}
  }

  async function permission(){
    if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){
      const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');
    }
  }

  function undoRoll(done){
    const count=Math.abs(rollApplied),direction=rollApplied>0?-18:18;
    if(!count){done();return;}
    let i=0;const timer=setInterval(()=>{wheel(direction);i++;if(i>=count){clearInterval(timer);done();}},35);
  }

  function recenter(){
    if(recentering)return;
    recentering=true;
    yawFiltered=pitchFiltered=0;
    resetJoysticks();
    undoRoll(()=>{
      rollApplied=0;
      baseline=current?{...current}:null;
      last=current?{...current}:null;
      const slider=document.getElementById('heightSlider');
      if(slider){slider.value='1.40';slider.dispatchEvent(new Event('input',{bubbles:true}));slider.dispatchEvent(new Event('change',{bubbles:true}));}
      const ideal=document.getElementById('idealHeightBtn');if(ideal)ideal.click();
      recentring=false;
      toast('Centralizado: posição atual virou o novo centro');
    });
  }

  button.addEventListener('pointerup',async e=>{
    e.preventDefault();e.stopPropagation();
    try{
      if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');
      await permission();enabled=!enabled;samples=0;current=baseline=last=null;yawFiltered=pitchFiltered=0;rollApplied=0;
      if(enabled){
        window.addEventListener('deviceorientation',onOrientation,true);
        html.classList.add('fp-sensor-on');button.textContent='📱 SENSORES ON';center.style.display='grid';
        setTimeout(()=>{if(enabled&&samples===0)button.textContent='⚠️ SEM DADOS';},2200);
      }else{
        window.removeEventListener('deviceorientation',onOrientation,true);
        html.classList.remove('fp-sensor-on');button.textContent='📱 ATIVAR SENSORES';center.style.display='none';resetJoysticks();
      }
    }catch(_){button.textContent='⚠️ SENSOR INDISPONÍVEL';}
  },{passive:false});

  center.addEventListener('pointerup',e=>{e.preventDefault();e.stopPropagation();recenter();},{passive:false});
  window.__fpRecenterMobile=recenter;
  return true;
}

let tries=0;const timer=setInterval(()=>{tries++;if(install()||tries>100)clearInterval(timer);},100);
if(document.readyState!=='loading')install();else document.addEventListener('DOMContentLoaded',install,{once:true});
})();