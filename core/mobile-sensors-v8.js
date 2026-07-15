/* FramePro Mobile Sensors V17 — incremental, pitch seguro e centralização vertical */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);if(!mobile)return;
const html=document.documentElement;
const cameraOffset=window.__fpMobileCameraOffset=window.__fpMobileCameraOffset||{x:0,y:0,roll:0};
const style=document.createElement('style');style.id='fp-sensor-v17-style';style.textContent=`#fpCenterV4{display:grid!important}html.fp-sensor-on #fpLookV4,#fpLookV4{pointer-events:auto!important;opacity:1!important;visibility:visible!important;filter:none!important;z-index:220005!important}`;document.head.appendChild(style);
function rawLook(dx,dy){if(typeof window.__fpMobileRawLook==='function'){window.__fpMobileRawLook(dx,dy);return;}if(typeof window.__fpApplyLook==='function'){window.__fpApplyLook(dx,dy);return;}const target=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,view:window});try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy}});}catch(_){}target.dispatchEvent(ev);document.dispatchEvent(ev);window.dispatchEvent(ev);}
function trackedLook(dx,dy){if(!Number.isFinite(dx)||!Number.isFinite(dy))return;if(typeof window.__fpMobileTrackedLook==='function'){window.__fpMobileTrackedLook(dx,dy);return;}rawLook(dx,dy);cameraOffset.x+=dx;cameraOffset.y+=dy;}
function wheel(delta){(document.querySelector('#gameShell canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));}
function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function toast(text){let t=document.getElementById('fpSensorToastV17');if(!t){t=document.createElement('div');t.id='fpSensorToastV17';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.92)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1300);}
function install(){
 const oldBtn=document.getElementById('fpSensorV4'),oldCenter=document.getElementById('fpCenterV4');if(!oldBtn||!oldCenter||oldBtn.dataset.v17)return false;
 const btn=oldBtn.cloneNode(true);oldBtn.replaceWith(btn);btn.dataset.v17='1';
 const center=oldCenter.cloneNode(true);oldCenter.replaceWith(center);center.dataset.v17='1';center.textContent='⟳ CENTRALIZAR VISÃO';center.style.setProperty('display','grid','important');
 let enabled=false,last=null,current=null,samples=0,paused=false,rollBase=null,rollStep=0;
 function map(e){const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;const a=e.alpha??0,b=e.beta??0,g=e.gamma??0;if(angle===90)return{yaw:a,pitch:g,roll:b};if(angle===270)return{yaw:a,pitch:-g,roll:-b};if(angle===180)return{yaw:a,pitch:-b,roll:-g};return{yaw:a,pitch:b,roll:g};}
 function recalibrate(){last=current?{...current}:null;rollBase=current?current.roll:null;rollStep=0;}
 function onOrientation(e){
  if(!enabled)return;current=map(e);samples++;
  if(paused||document.hidden||window.__fpJoystickLookActive){last={...current};return;}
  if(!last){recalibrate();return;}
  let dyaw=norm(current.yaw-last.yaw),dpitch=current.pitch-last.pitch;last={...current};
  if(Math.abs(dyaw)>8||Math.abs(dpitch)>8)return;
  const absolutePitch=Math.abs(current.pitch);
  if(absolutePitch>74)dyaw=0;else if(absolutePitch>62)dyaw*=Math.max(0,1-(absolutePitch-62)/12);
  if(Math.abs(dyaw)>.07)trackedLook(-dyaw*2.05,0);
  if(Math.abs(dpitch)>.07)trackedLook(0,dpitch*1.45);
  if(rollBase===null)rollBase=current.roll;
  const rel=current.roll-rollBase,wanted=Math.abs(rel)<1.6?0:Math.max(-5,Math.min(5,Math.round(rel/3.0)));
  if(wanted!==rollStep){wheel(wanted>rollStep?10:-10);rollStep+=Math.sign(wanted-rollStep);}
 }
 async function permission(){if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
 function centerVertical(){
  if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();
  const amount=Number(cameraOffset.y)||0;if(Math.abs(amount)>.01){const frames=10;let done=0;function step(){const remaining=amount-done,delta=-remaining/(frames-Math.round(Math.abs(done/amount)*frames)||1);rawLook(0,delta);done-=delta;if(Math.abs(amount-done)>.03)requestAnimationFrame(step);else{rawLook(0,-(amount-done));cameraOffset.y=0;recalibrate();toast('Eixo vertical centralizado');}}requestAnimationFrame(step);}else{cameraOffset.y=0;recalibrate();toast('Eixo vertical já centralizado');}
 }
 btn.addEventListener('click',async e=>{e.preventDefault();e.stopPropagation();try{if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');await permission();enabled=!enabled;samples=0;last=current=null;rollBase=null;rollStep=0;if(enabled){window.addEventListener('deviceorientation',onOrientation,true);html.classList.add('fp-sensor-on');btn.textContent='📱 SENSORES ON';setTimeout(()=>{if(enabled&&samples===0)btn.textContent='⚠️ SEM DADOS';},2200);}else{window.removeEventListener('deviceorientation',onOrientation,true);html.classList.remove('fp-sensor-on');btn.textContent='📱 ATIVAR SENSORES';}}catch(_){btn.textContent='⚠️ SENSOR INDISPONÍVEL';}},{passive:false});
 center.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();centerVertical();},{passive:false});
 function suspend(){paused=true;last=null;if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();}
 function resume(){paused=false;last=current=null;rollBase=null;rollStep=0;setTimeout(()=>{last=current?{...current}:null;},220);}
 ['pagehide','blur'].forEach(ev=>window.addEventListener(ev,suspend,true));document.addEventListener('visibilitychange',()=>document.hidden?suspend():resume(),true);window.addEventListener('pageshow',resume,true);window.addEventListener('fp-mobile-resume',resume,true);
 window.__fpRecenterMobile=centerVertical;window.__fpRecalibrateSensorsOnly=recalibrate;window.__fpSensorState={get enabled(){return enabled;},toast,recalibrateOnly:recalibrate,setCentering(v){paused=!!v;if(!paused)recalibrate();}};
 return true;
}
let tries=0;const timer=setInterval(()=>{tries++;if(install()||tries>100)clearInterval(timer);},100);if(document.readyState!=='loading')install();else document.addEventListener('DOMContentLoaded',install,{once:true});
})();