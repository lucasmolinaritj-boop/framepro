/* FramePro Mobile Sensors V12 — anti-gimbal definitivo, nivel responsivo e centralizacao */
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
  let t=document.getElementById('fpSensorToastV12');
  if(!t){t=document.createElement('div');t.id='fpSensorToastV12';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.92)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}
  t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1300);
}
function releaseControls(){
  ['fpMoveV4','fpLookV4'].forEach(id=>{const k=document.querySelector('#'+id+' .fpKnobV4');if(k)k.style.transform='translate(0px,0px)';});
  [['KeyW','w',87],['KeyA','a',65],['KeyS','s',83],['KeyD','d',68]].forEach(([code,key,keyCode])=>{const ev=new KeyboardEvent('keyup',{code,key,bubbles:true,cancelable:true});try{Object.defineProperties(ev,{keyCode:{value:keyCode},which:{value:keyCode}});}catch(_){}window.dispatchEvent(ev);document.dispatchEvent(ev);});
}
function install(){
  const oldBtn=document.getElementById('fpSensorV4'),oldCenter=document.getElementById('fpCenterV4');
  if(!oldBtn||!oldCenter||oldBtn.dataset.v12)return false;
  const btn=oldBtn.cloneNode(true);oldBtn.replaceWith(btn);btn.dataset.v12='1';
  const center=oldCenter.cloneNode(true);oldCenter.replaceWith(center);center.dataset.v12='1';center.textContent='⟳ CENTRALIZAR VISÃO';
  let enabled=false,current=null,base=null,samples=0;
  let appliedYaw=0,appliedPitch=0,appliedRoll=0;
  let stablePitch=0,lastRawPitch=0,lockedHigh=false;
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
    if(!base){base={...current};stablePitch=0;lastRawPitch=0;appliedYaw=appliedPitch=appliedRoll=0;return;}
    let rawPitch=norm(current.pitch-base.pitch);
    if(Math.abs(rawPitch-lastRawPitch)>24)rawPitch=lastRawPitch;
    lastRawPitch=rawPitch;
    rawPitch=Math.max(-30,Math.min(30,rawPitch));
    stablePitch=stablePitch*.72+rawPitch*.28;
    const absPitch=Math.abs(stablePitch);
    lockedHigh=absPitch>=25;
    let relYaw=-norm(current.yaw-base.yaw);
    if(Math.abs(relYaw)<.5)relYaw=0;
    if(lockedHigh)relYaw=0;
    else if(absPitch>20)relYaw*=Math.max(0,1-(absPitch-20)/5);
    relYaw=Math.max(-52,Math.min(52,relYaw));
    const desiredYaw=relYaw*1.42;
    const desiredPitch=stablePitch*.90;
    const dy=(desiredYaw-appliedYaw)*.24;
    const dp=(desiredPitch-appliedPitch)*.20;
    if(Math.abs(dy)>.018){applyLook(dy,0);appliedYaw+=dy;}
    if(Math.abs(dp)>.018){applyLook(0,dp);appliedPitch+=dp;}
    const relRoll=current.roll-base.roll;
    const wanted=Math.abs(relRoll)<1.6?0:Math.max(-6,Math.min(6,Math.round(relRoll/3.2)));
    if(wanted!==appliedRoll){wheel(wanted>appliedRoll?12:-12);appliedRoll+=Math.sign(wanted-appliedRoll);}
  }
  async function permission(){if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
  function recenter(){
    if(!enabled||!current){toast('Mova o celular e tente novamente');return;}
    if(Math.abs(appliedYaw)>.01||Math.abs(appliedPitch)>.01)applyLook(-appliedYaw,-appliedPitch);
    if(appliedRoll!==0){const dir=appliedRoll>0?-12:12;for(let i=0;i<Math.abs(appliedRoll);i++)setTimeout(()=>wheel(dir),i*18);}
    appliedYaw=appliedPitch=appliedRoll=0;stablePitch=lastRawPitch=0;lockedHigh=false;
    base={...current};releaseControls();
    const slider=document.getElementById('heightSlider');if(slider){slider.value='1.40';slider.dispatchEvent(new Event('input',{bubbles:true}));slider.dispatchEvent(new Event('change',{bubbles:true}));}
    const ideal=document.getElementById('idealHeightBtn');if(ideal)ideal.click();
    toast('Visão centralizada e sensor recalibrado');
  }
  btn.addEventListener('click',async e=>{
    e.preventDefault();e.stopPropagation();
    try{
      if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');
      await permission();enabled=!enabled;samples=0;current=base=null;appliedYaw=appliedPitch=appliedRoll=0;stablePitch=lastRawPitch=0;lockedHigh=false;
      if(enabled){window.addEventListener('deviceorientation',onOrientation,true);html.classList.add('fp-sensor-on');btn.textContent='📱 SENSORES ON';center.style.display='grid';setTimeout(()=>{if(enabled&&samples===0)btn.textContent='⚠️ SEM DADOS';},2200);}
      else{window.removeEventListener('deviceorientation',onOrientation,true);html.classList.remove('fp-sensor-on');btn.textContent='📱 ATIVAR SENSORES';center.style.display='none';releaseControls();}
    }catch(_){btn.textContent='⚠️ SENSOR INDISPONÍVEL';}
  },{passive:false});
  center.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();recenter();},{passive:false});
  window.__fpRecenterMobile=recenter;
  return true;
}
let tries=0;const timer=setInterval(()=>{tries++;if(install()||tries>100)clearInterval(timer);},100);
if(document.readyState!=='loading')install();else document.addEventListener('DOMContentLoaded',install,{once:true});
})();