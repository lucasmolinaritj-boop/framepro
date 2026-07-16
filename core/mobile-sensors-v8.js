/* FramePro Mobile Sensors V20 — núcleo V14 restaurado, sensor relativo e retomada segura */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);if(!mobile)return;
const html=document.documentElement;
const state=window.__fpSensorRuntimeV20=window.__fpSensorRuntimeV20||{enabled:false,current:null,base:null,samples:0,centering:false,paused:false,appliedYaw:0,appliedPitch:0,appliedRoll:0,stablePitch:0,lastRawPitch:0,lockedHigh:false,joystickWasActive:false,btn:null,center:null,resuming:false};
if(!document.getElementById('fp-sensor-v20-style')){const style=document.createElement('style');style.id='fp-sensor-v20-style';style.textContent=`#fpCenterV4{display:grid!important;pointer-events:auto!important}#fpSensorV4{pointer-events:auto!important}html.fp-sensor-on #fpLookV4,#fpLookV4{pointer-events:auto!important;opacity:1!important;visibility:visible!important;filter:none!important;z-index:220005!important}`;document.head.appendChild(style);}
function applyLook(dx,dy){if(!Number.isFinite(dx)||!Number.isFinite(dy))return;if(typeof window.__fpMobileTrackedLook==='function'){window.__fpMobileTrackedLook(dx,dy);return;}if(typeof window.__fpApplyLook==='function'){window.__fpApplyLook(dx,dy);return;}const target=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,view:window});try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy},mozMovementX:{value:dx},mozMovementY:{value:dy},webkitMovementX:{value:dx},webkitMovementY:{value:dy}});}catch(_){}target.dispatchEvent(ev);document.dispatchEvent(ev);window.dispatchEvent(ev);}
function wheel(delta){(document.querySelector('#gameShell canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));}
function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function toast(text){let t=document.getElementById('fpSensorToastV20');if(!t){t=document.createElement('div');t.id='fpSensorToastV20';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.92)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1400);}
function map(e){const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;const a=e.alpha??0,b=e.beta??0,g=e.gamma??0;if(angle===90)return{yaw:a,pitch:g,roll:b};if(angle===270)return{yaw:a,pitch:-g,roll:-b};if(angle===180)return{yaw:a,pitch:-b,roll:-g};return{yaw:a,pitch:b,roll:g};}
function resetRelative(){state.base=state.current?{...state.current}:null;state.appliedYaw=state.appliedPitch=state.appliedRoll=0;state.stablePitch=state.lastRawPitch=0;state.lockedHigh=false;state.joystickWasActive=false;}
function onOrientation(e){
 if(!state.enabled||state.paused||document.hidden)return;
 state.current=map(e);state.samples++;
 const joyActive=!!window.__fpJoystickLookActive;
 if(joyActive){state.joystickWasActive=true;return;}
 if(state.joystickWasActive){state.joystickWasActive=false;resetRelative();return;}
 if(state.centering)return;
 if(!state.base){resetRelative();return;}
 let rawPitch=norm(state.current.pitch-state.base.pitch);
 if(Math.abs(rawPitch-state.lastRawPitch)>18)rawPitch=state.lastRawPitch;
 state.lastRawPitch=rawPitch;rawPitch=Math.max(-27,Math.min(27,rawPitch));
 state.stablePitch=state.stablePitch*.76+rawPitch*.24;
 const absPitch=Math.abs(state.stablePitch);state.lockedHigh=absPitch>=24;
 let relYaw=-norm(state.current.yaw-state.base.yaw);if(Math.abs(relYaw)<.5)relYaw=0;if(state.lockedHigh)relYaw=0;else if(absPitch>19)relYaw*=Math.max(0,1-(absPitch-19)/5);relYaw=Math.max(-52,Math.min(52,relYaw));
 const desiredYaw=relYaw*1.42,desiredPitch=state.stablePitch*.90;
 const dy=(desiredYaw-state.appliedYaw)*.22,dp=(desiredPitch-state.appliedPitch)*.18;
 if(Math.abs(dy)>.018){applyLook(dy,0);state.appliedYaw+=dy;}
 if(Math.abs(dp)>.018){applyLook(0,dp);state.appliedPitch+=dp;}
 const relRoll=state.current.roll-state.base.roll;const wanted=Math.abs(relRoll)<1.4?0:Math.max(-6,Math.min(6,Math.round(relRoll/2.8)));
 if(wanted!==state.appliedRoll){wheel(wanted>state.appliedRoll?11:-11);state.appliedRoll+=Math.sign(wanted-state.appliedRoll);}
}
async function permission(){if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
function bind(){window.removeEventListener('deviceorientation',onOrientation,true);if(state.enabled&&!state.paused)window.addEventListener('deviceorientation',onOrientation,true);}
function refresh(){if(state.btn)state.btn.textContent=state.enabled?'📱 SENSORES ON':'📱 ATIVAR SENSORES';html.classList.toggle('fp-sensor-on',state.enabled);}
function centerLevel(){
 if(state.centering)return;if(!state.current){toast('Mova o celular e tente novamente');return;}state.centering=true;if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();
 const pitch=state.appliedPitch,roll=state.appliedRoll,steps=10;let i=0;
 function tick(){i++;if(Math.abs(pitch)>.01)applyLook(0,-pitch/steps);if(i<=Math.abs(roll))wheel(roll>0?-11:11);if(i<Math.max(steps,Math.abs(roll)))requestAnimationFrame(tick);else{state.appliedPitch=0;state.appliedRoll=0;state.stablePitch=state.lastRawPitch=0;state.base={...state.current};state.appliedYaw=0;state.centering=false;toast('Visão e nível horizontal centralizados');}}
 requestAnimationFrame(tick);
}
function wire(force){
 const oldBtn=document.getElementById('fpSensorV4'),oldCenter=document.getElementById('fpCenterV4');if(!oldBtn||!oldCenter)return false;
 if(force||state.btn!==oldBtn){const btn=oldBtn.cloneNode(true);oldBtn.replaceWith(btn);state.btn=btn;btn.addEventListener('click',async e=>{e.preventDefault();e.stopImmediatePropagation();try{if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');await permission();state.enabled=!state.enabled;state.samples=0;state.current=state.base=null;resetRelative();bind();refresh();if(state.enabled)setTimeout(()=>{if(state.enabled&&state.samples===0&&state.btn)state.btn.textContent='⚠️ SEM DADOS';},2500);}catch(_){state.enabled=false;bind();refresh();if(state.btn)state.btn.textContent='⚠️ SENSOR INDISPONÍVEL';}},{passive:false,capture:true});}
 const currentCenter=document.getElementById('fpCenterV4');if(force||state.center!==currentCenter){const center=currentCenter.cloneNode(true);currentCenter.replaceWith(center);state.center=center;center.textContent='⟳ CENTRALIZAR VISÃO';center.style.setProperty('display','grid','important');center.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();centerLevel();},{passive:false,capture:true});}
 refresh();return true;
}
function suspend(){state.paused=true;bind();if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();}
function resume(){if(state.resuming)return;state.resuming=true;state.paused=false;state.current=state.base=null;resetRelative();[100,350,900].forEach((delay,index)=>setTimeout(()=>{wire(index===0);bind();refresh();if(index===2)state.resuming=false;},delay));}
window.addEventListener('pagehide',suspend,true);window.addEventListener('blur',suspend,true);document.addEventListener('visibilitychange',()=>document.hidden?suspend():resume(),true);window.addEventListener('pageshow',resume,true);window.addEventListener('focus',()=>{if(!document.hidden)resume();},true);window.addEventListener('fp-mobile-resume',resume,true);window.addEventListener('orientationchange',resume,true);
window.__fpRecenterMobile=centerLevel;window.__fpRecalibrateSensorsOnly=resetRelative;window.__fpReinstallSensors=()=>{wire(true);bind();};window.__fpSensorState={get enabled(){return state.enabled;},toast,recalibrateOnly:resetRelative};
wire(true);bind();setInterval(()=>wire(false),700);
})();