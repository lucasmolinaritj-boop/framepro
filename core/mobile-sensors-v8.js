/* FramePro Mobile Sensors V19 — Android robusto, rebind duplo e retomada após minimizar */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);if(!mobile)return;
const html=document.documentElement;
const cameraOffset=window.__fpMobileCameraOffset=window.__fpMobileCameraOffset||{x:0,y:0,roll:0};
const state=window.__fpSensorRuntimeV19=window.__fpSensorRuntimeV19||{enabled:false,last:null,current:null,samples:0,paused:false,rollBase:null,rollStep:0,centering:false,btn:null,center:null,resuming:false};
if(!document.getElementById('fp-sensor-v19-style')){const style=document.createElement('style');style.id='fp-sensor-v19-style';style.textContent=`#fpCenterV4{display:grid!important;pointer-events:auto!important}#fpSensorV4{pointer-events:auto!important}html.fp-sensor-on #fpLookV4,#fpLookV4{pointer-events:auto!important;opacity:1!important;visibility:visible!important;filter:none!important;z-index:220005!important}`;document.head.appendChild(style);}
function rawLook(dx,dy){if(typeof window.__fpMobileRawLook==='function'){window.__fpMobileRawLook(dx,dy);return;}if(typeof window.__fpApplyLook==='function'){window.__fpApplyLook(dx,dy);return;}const target=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,view:window});try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy}});}catch(_){}target.dispatchEvent(ev);document.dispatchEvent(ev);window.dispatchEvent(ev);}
function trackedLook(dx,dy){if(!Number.isFinite(dx)||!Number.isFinite(dy))return;if(typeof window.__fpMobileTrackedLook==='function'){window.__fpMobileTrackedLook(dx,dy);return;}rawLook(dx,dy);cameraOffset.x+=dx;cameraOffset.y+=dy;}
function wheel(delta){(document.querySelector('#gameShell canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));}
function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function toast(text){let t=document.getElementById('fpSensorToastV19');if(!t){t=document.createElement('div');t.id='fpSensorToastV19';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.92)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1400);}
function map(e){const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;const a=Number(e.alpha)||0,b=Number(e.beta)||0,g=Number(e.gamma)||0;if(angle===90)return{yaw:a,pitch:g,roll:b};if(angle===270)return{yaw:a,pitch:-g,roll:-b};if(angle===180)return{yaw:a,pitch:-b,roll:-g};return{yaw:a,pitch:b,roll:g};}
function recalibrate(){state.last=state.current?{...state.current}:null;state.rollBase=state.current?state.current.roll:null;state.rollStep=0;cameraOffset.roll=0;}
function onOrientation(e){
 if(!state.enabled||state.paused||document.hidden)return;const next=map(e);if(!Number.isFinite(next.yaw)||!Number.isFinite(next.pitch))return;state.current=next;state.samples++;
 if(state.centering||window.__fpJoystickLookActive){state.last={...state.current};return;}
 if(!state.last){recalibrate();return;}
 let dyaw=norm(state.current.yaw-state.last.yaw),dpitch=state.current.pitch-state.last.pitch;state.last={...state.current};
 if(Math.abs(dyaw)>12||Math.abs(dpitch)>12)return;
 const absolutePitch=Math.abs(state.current.pitch);if(absolutePitch>74)dyaw=0;else if(absolutePitch>62)dyaw*=Math.max(0,1-(absolutePitch-62)/12);
 if(Math.abs(dyaw)>.06)trackedLook(-dyaw*2.05,0);if(Math.abs(dpitch)>.06)trackedLook(0,dpitch*1.45);
 if(state.rollBase===null)state.rollBase=state.current.roll;const rel=state.current.roll-state.rollBase,wanted=Math.abs(rel)<1.6?0:Math.max(-5,Math.min(5,Math.round(rel/3)));
 if(wanted!==state.rollStep){const direction=Math.sign(wanted-state.rollStep);wheel(direction>0?10:-10);state.rollStep+=direction;cameraOffset.roll=state.rollStep;}
}
async function permission(){if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
function unbindOrientation(){window.removeEventListener('deviceorientation',onOrientation,true);window.removeEventListener('deviceorientationabsolute',onOrientation,true);}
function bindOrientation(){unbindOrientation();if(!state.enabled)return;window.addEventListener('deviceorientation',onOrientation,true);window.addEventListener('deviceorientationabsolute',onOrientation,true);}
function refreshButton(){if(!state.btn)return;state.btn.textContent=state.enabled?'📱 SENSORES ON':'📱 ATIVAR SENSORES';html.classList.toggle('fp-sensor-on',state.enabled);}
function centerLevel(){
 if(state.centering)return;state.centering=true;if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();
 const pitchAmount=Number(cameraOffset.y)||0,rollAmount=Number(state.rollStep)||0,pitchSteps=Math.abs(pitchAmount)>.01?10:0,rollSteps=Math.abs(rollAmount),total=Math.max(pitchSteps,rollSteps,1);let i=0;
 function finish(){cameraOffset.y=0;cameraOffset.roll=0;state.rollStep=0;state.rollBase=state.current?state.current.roll:null;state.last=state.current?{...state.current}:null;state.centering=false;toast((Math.abs(pitchAmount)>.01||rollSteps)?'Visão e nível horizontal centralizados':'Visão já centralizada e nivelada');}
 function tick(){if(pitchSteps&&i<pitchSteps)rawLook(0,-pitchAmount/pitchSteps);if(i<rollSteps)wheel(rollAmount>0?-10:10);i++;if(i<total)requestAnimationFrame(tick);else finish();}requestAnimationFrame(tick);
}
function wireButtons(force){
 const oldBtn=document.getElementById('fpSensorV4'),oldCenter=document.getElementById('fpCenterV4');if(!oldBtn||!oldCenter)return false;
 if(force||state.btn!==oldBtn){const btn=oldBtn.cloneNode(true);oldBtn.replaceWith(btn);state.btn=btn;btn.addEventListener('click',async e=>{e.preventDefault();e.stopImmediatePropagation();try{if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');await permission();state.enabled=!state.enabled;state.samples=0;state.last=state.current=null;state.rollBase=null;state.rollStep=0;cameraOffset.roll=0;bindOrientation();refreshButton();if(state.enabled)setTimeout(()=>{if(state.enabled&&state.samples===0){bindOrientation();if(state.btn)state.btn.textContent='⚠️ SEM DADOS — TOQUE NOVAMENTE';}},2600);}catch(_){state.enabled=false;unbindOrientation();refreshButton();if(state.btn)state.btn.textContent='⚠️ SENSOR INDISPONÍVEL';}},{passive:false,capture:true});}
 const currentCenter=document.getElementById('fpCenterV4');if(force||state.center!==currentCenter){const center=currentCenter.cloneNode(true);currentCenter.replaceWith(center);state.center=center;center.textContent='⟳ CENTRALIZAR VISÃO';center.style.setProperty('display','grid','important');center.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();centerLevel();},{passive:false,capture:true});}
 refreshButton();return true;
}
function suspend(){state.paused=true;state.last=null;unbindOrientation();if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();}
function resume(){if(state.resuming)return;state.resuming=true;state.paused=false;state.last=state.current=null;state.rollBase=null;state.rollStep=0;cameraOffset.roll=0;const passes=[100,320,800,1500];passes.forEach((delay,index)=>setTimeout(()=>{wireButtons(index===0);bindOrientation();refreshButton();if(index===passes.length-1)state.resuming=false;},delay));}
window.addEventListener('pagehide',suspend,true);window.addEventListener('blur',suspend,true);document.addEventListener('visibilitychange',()=>document.hidden?suspend():resume(),true);window.addEventListener('pageshow',resume,true);window.addEventListener('focus',()=>{if(!document.hidden)resume();},true);window.addEventListener('fp-mobile-resume',resume,true);window.addEventListener('orientationchange',resume,true);screen.orientation&&screen.orientation.addEventListener&&screen.orientation.addEventListener('change',resume);
window.__fpRecenterMobile=centerLevel;window.__fpRecalibrateSensorsOnly=recalibrate;window.__fpReinstallSensors=()=>{wireButtons(true);bindOrientation();};window.__fpSensorState={get enabled(){return state.enabled;},toast,recalibrateOnly:recalibrate,setCentering(v){state.paused=!!v;if(!state.paused)recalibrate();}};
wireButtons(true);bindOrientation();setInterval(()=>{wireButtons(false);if(state.enabled&&!document.hidden)bindOrientation();},700);
})();