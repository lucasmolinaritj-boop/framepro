/* FramePro Mobile Sensors V10 — calibração relativa estável */
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
  try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy},mozMovementX:{value:dx},mozMovementY:{value:dy},webkitMovementX:{value:dx},webkitMovementY:{value:dy}});}catch(_){}
  target.dispatchEvent(ev);document.dispatchEvent(ev);window.dispatchEvent(ev);
}
function wheel(delta){(document.querySelector('#gameShell canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));}
function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function toast(text){
  let t=document.getElementById('fpSensorToastV10');
  if(!t){t=document.createElement('div');t.id='fpSensorToastV10';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.92)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}
  t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1300);
}
function releaseControls(){
  ['fpMoveV4','fpLookV4'].forEach(id=>{const k=document.querySelector('#'+id+' .fpKnobV4');if(k)k.style.transform='translate(0px,0px)';});
  [['KeyW','w',87],['KeyA','a',65],['KeyS','s',83],['KeyD','d',68]].forEach(([code,key,keyCode])=>{const ev=new KeyboardEvent('keyup',{code,key,bubbles:true,cancelable:true});try{Object.defineProperties(ev,{keyCode:{value:keyCode},which:{value:keyCode}});}catch(_){}window.dispatchEvent(ev);document.dispatchEvent(ev);});
}

function install(){
  const oldBtn=document.getElementById('fpSensorV4'),oldCenter=document.getElementById('fpCenterV4');
  if(!oldBtn||!oldCenter||oldBtn.dataset.v10)return false;
  const btn=oldBtn.cloneNode(true);oldBtn.replaceWith(btn);btn.dataset.v10='1';
  const center=oldCenter.cloneNode(true);oldCenter.replaceWith(center);center.dataset.v10='1';center.textContent='⟳ CENTRALIZAR TUDO';

  let enabled=false,current=null,base=null;
  let appliedYaw=0,appliedPitch=0,appliedRoll=0,samples=0;

  function map(e){
    const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;
    const a=e.alpha??0,b=e.beta??0,g=e.gamma??0;
    if(angle===90)return{yaw:a,pitch:g,roll:b};
    if(angle===270)return{yaw:a,pitch:-g,roll:-b};
    if(angle===180)return{yaw:a,pitch:-b,roll:-g};
    return{yaw:a,pitch:b,roll:g};
  }

  function onOrientation(e){
    if(!enabled)return;
    current=map(e);samples++;
    if(!base){base={...current};appliedYaw=appliedPitch=appliedRoll=0;return;}

    /* esquerda/direita invertido e mais sensível */
    let relYaw=-norm(current.yaw-base.yaw);
    let relPitch=current.pitch-base.pitch;
    if(Math.abs(relYaw)<0.7)relYaw=0;
    if(Math.abs(relPitch)<0.8)relPitch=0;
    relYaw=Math.max(-55,Math.min(55,relYaw));
    relPitch=Math.max(-35,Math.min(35,relPitch));

    const desiredYaw=relYaw*1.55;
    const desiredPitch=relPitch*0.95;
    const dy=(desiredYaw-appliedYaw)*0.28;
    const dp=(desiredPitch-appliedPitch)*0.24;
    if(Math.abs(dy)>0.025){applyLook(dy,0);appliedYaw+=dy;}
    if(Math.abs(dp)>0.025){applyLook(0,dp);appliedPitch+=dp;}

    /* nível bem menos sensível */
    const relRoll=current.roll-base.roll;
    const wanted=Math.abs(relRoll)<5?0:Math.max(-3,Math.min(3,Math.round(relRoll/10)));
    if(wanted!==appliedRoll){wheel(wanted>appliedRoll?14:-14);appliedRoll+=Math.sign(wanted-appliedRoll);}
  }

  async function permission(){
    if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){
      const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');
    }
  }

  function recenter(){
    if(!enabled||!current){toast('Mova o celular e tente novamente');return;}
    base={...current};
    appliedYaw=0;appliedPitch=0;
    if(appliedRoll!==0){const dir=appliedRoll>0?-14:14;for(let i=0;i<Math.abs(appliedRoll);i++)setTimeout(()=>wheel(dir),i*22);}
    appliedRoll=0;
    releaseControls();
    const slider=document.getElementById('heightSlider');
    if(slider){slider.value='1.40';slider.dispatchEvent(new Event('input',{bubbles:true}));slider.dispatchEvent(new Event('change',{bubbles:true}));}
    const ideal=document.getElementById('idealHeightBtn');if(ideal)ideal.click();
    toast('Centralizado na posição atual');
  }

  btn.addEventListener('click',async e=>{
    e.preventDefault();e.stopPropagation();
    try{
      if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');
      await permission();enabled=!enabled;samples=0;current=base=null;appliedYaw=appliedPitch=appliedRoll=0;
      if(enabled){
        window.addEventListener('deviceorientation',onOrientation,true);
        html.classList.add('fp-sensor-on');btn.textContent='📱 SENSORES ON';center.style.display='grid';
        setTimeout(()=>{if(enabled&&samples===0)btn.textContent='⚠️ SEM DADOS';},2200);
      }else{
        window.removeEventListener('deviceorientation',onOrientation,true);
        html.classList.remove('fp-sensor-on');btn.textContent='📱 ATIVAR SENSORES';center.style.display='none';releaseControls();
      }
    }catch(_){btn.textContent='⚠️ SENSOR INDISPONÍVEL';}
  },{passive:false});

  center.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();recenter();},{passive:false});
  window.__fpRecenterMobile=recenter;
  return true;
}

let tries=0;const timer=setInterval(()=>{tries++;if(install()||tries>100)clearInterval(timer);},100);
if(document.readyState!=='loading')install();else document.addEventListener('DOMContentLoaded',install,{once:true});
})();