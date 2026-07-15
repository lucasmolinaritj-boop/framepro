/* FramePro Mobile Sensors V8 — yaw estável e centralização real */
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
function pulseKey(code,key,keyCode){
  const down=new KeyboardEvent('keydown',{code,key,bubbles:true,cancelable:true});
  const up=new KeyboardEvent('keyup',{code,key,bubbles:true,cancelable:true});
  try{Object.defineProperties(down,{keyCode:{value:keyCode},which:{value:keyCode}});Object.defineProperties(up,{keyCode:{value:keyCode},which:{value:keyCode}});}catch(_){ }
  window.dispatchEvent(down);document.dispatchEvent(down);setTimeout(()=>{window.dispatchEvent(up);document.dispatchEvent(up);},40);
}
function toast(text){
  let t=document.getElementById('fpSensorToastV8');
  if(!t){t=document.createElement('div');t.id='fpSensorToastV8';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.9)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}
  t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1200);
}

function install(){
  const oldButton=document.getElementById('fpSensorV4');
  const oldCenter=document.getElementById('fpCenterV4');
  if(!oldButton||!oldCenter||oldButton.dataset.v8)return false;

  const button=oldButton.cloneNode(true);oldButton.replaceWith(button);button.dataset.v8='1';
  const center=oldCenter.cloneNode(true);oldCenter.replaceWith(center);center.dataset.v8='1';
  center.textContent='⟳ CENTRALIZAR TUDO';

  let enabled=false;
  let last=null;
  let current=null;
  let yawVelocity=0,pitchVelocity=0;
  let rollBase=null,rollSteps=0;
  let samples=0;

  function mapOrientation(e){
    const angle=((screen.orientation&&screen.orientation.angle)||window.orientation||0+360)%360;
    const alpha=e.alpha==null?0:e.alpha;
    const beta=e.beta==null?0:e.beta;
    const gamma=e.gamma==null?0:e.gamma;
    if(angle===90)return{yaw:alpha,pitch:gamma,roll:beta};
    if(angle===270)return{yaw:alpha,pitch:-gamma,roll:-beta};
    if(angle===180)return{yaw:alpha,pitch:-beta,roll:-gamma};
    return{yaw:alpha,pitch:beta,roll:gamma};
  }

  function onOrientation(e){
    if(!enabled)return;
    current=mapOrientation(e);samples++;
    if(!last){last={...current};if(rollBase===null)rollBase=current.roll;return;}
    let dyaw=normalize(current.yaw-last.yaw);
    let dpitch=current.pitch-last.pitch;
    last={...current};
    if(Math.abs(dyaw)>20||Math.abs(dpitch)>20)return;
    if(Math.abs(dyaw)<.08)dyaw=0;
    if(Math.abs(dpitch)<.08)dpitch=0;
    yawVelocity=yawVelocity*.45+dyaw*.55;
    pitchVelocity=pitchVelocity*.48+dpitch*.52;

    const relativeRoll=current.roll-(rollBase||0);
    const desiredSteps=Math.max(-18,Math.min(18,Math.round(relativeRoll/1.8)));
    const diff=desiredSteps-rollSteps;
    if(diff!==0){wheel(diff>0?24:-24);rollSteps+=Math.sign(diff);}
  }

  function frame(){
    if(enabled){
      if(Math.abs(yawVelocity)>.002||Math.abs(pitchVelocity)>.002){
        applyLook(yawVelocity*2.0,pitchVelocity*1.65);
        yawVelocity*=.54;pitchVelocity*=.56;
      }
    }
    requestAnimationFrame(frame);
  }
  frame();

  async function permission(){
    if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){
      const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');
    }
    if(typeof DeviceMotionEvent!=='undefined'&&typeof DeviceMotionEvent.requestPermission==='function'){
      const p=await DeviceMotionEvent.requestPermission();if(p!=='granted')throw new Error('negado');
    }
  }

  function resetJoysticks(){
    ['fpMoveV4','fpLookV4'].forEach(id=>{const joy=document.getElementById(id);const knob=joy&&joy.querySelector('.fpKnobV4');if(knob)knob.style.transform='translate(0px,0px)';});
    [['KeyW','w',87],['KeyA','a',65],['KeyS','s',83],['KeyD','d',68]].forEach(([code,key,keyCode])=>{
      const ev=new KeyboardEvent('keyup',{code,key,bubbles:true,cancelable:true});
      try{Object.defineProperties(ev,{keyCode:{value:keyCode},which:{value:keyCode}});}catch(_){ }
      window.dispatchEvent(ev);document.dispatchEvent(ev);
    });
  }

  function recenter(){
    if(current)last={...current};else last=null;
    yawVelocity=pitchVelocity=0;
    if(rollSteps!==0){
      const direction=rollSteps>0?-24:24;
      for(let i=0;i<Math.abs(rollSteps);i++)setTimeout(()=>wheel(direction),i*14);
    }
    rollSteps=0;
    rollBase=current?current.roll:null;
    resetJoysticks();
    pulseKey('KeyX','x',88);
    const slider=document.getElementById('heightSlider');
    if(slider){slider.value='1.40';slider.dispatchEvent(new Event('input',{bubbles:true}));slider.dispatchEvent(new Event('change',{bubbles:true}));}
    const ideal=document.getElementById('idealHeightBtn');if(ideal)ideal.click();
    toast('Câmera, nível e controles centralizados');
  }

  button.onclick=async()=>{
    try{
      if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');
      await permission();
      enabled=!enabled;samples=0;last=null;current=null;yawVelocity=pitchVelocity=0;rollBase=null;rollSteps=0;
      if(enabled){
        window.addEventListener('deviceorientationabsolute',onOrientation,true);
        window.addEventListener('deviceorientation',onOrientation,true);
        html.classList.add('fp-sensor-on');button.textContent='📱 SENSORES ON';center.style.display='grid';
        setTimeout(()=>{if(enabled&&samples===0){button.textContent='⚠️ SEM DADOS';}},2200);
      }else{
        window.removeEventListener('deviceorientationabsolute',onOrientation,true);
        window.removeEventListener('deviceorientation',onOrientation,true);
        html.classList.remove('fp-sensor-on');button.textContent='📱 ATIVAR SENSORES';center.style.display='none';
        resetJoysticks();
      }
    }catch(_){button.textContent='⚠️ SENSOR INDISPONÍVEL';}
  };
  center.onclick=recenter;
  center.addEventListener('touchend',e=>{e.preventDefault();recenter();},{passive:false});
  window.__fpRecenterMobile=recenter;
  return true;
}

let tries=0;const timer=setInterval(()=>{tries++;if(install()||tries>100)clearInterval(timer);},100);
if(document.readyState!=='loading')install();else document.addEventListener('DOMContentLoaded',install,{once:true});
})();