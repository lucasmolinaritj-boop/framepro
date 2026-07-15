/* FramePro Mobile Sensors V16 — pitch protegido, centralização neutra e retomada segura */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);if(!mobile)return;
const html=document.documentElement;
const cameraOffset=window.__fpMobileCameraOffset=window.__fpMobileCameraOffset||{x:0,y:0,roll:0};
const style=document.createElement('style');style.id='fp-sensor-v16-style';style.textContent=`#fpCenterV4{display:grid!important}html.fp-sensor-on #fpLookV4,#fpLookV4{pointer-events:auto!important;opacity:1!important;visibility:visible!important;filter:none!important;z-index:220005!important}`;document.head.appendChild(style);
function trackedLook(dx,dy){if(!Number.isFinite(dx)||!Number.isFinite(dy))return;if(typeof window.__fpMobileTrackedLook==='function'){window.__fpMobileTrackedLook(dx,dy);return;}if(typeof window.__fpApplyLook==='function')window.__fpApplyLook(dx,dy);}
function wheel(delta){(document.querySelector('#gameShell canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));cameraOffset.roll+=delta>0?1:-1;}
function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function toast(text){let t=document.getElementById('fpSensorToastV16');if(!t){t=document.createElement('div');t.id='fpSensorToastV16';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.92)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1300);}
function install(){
 const oldBtn=document.getElementById('fpSensorV4'),oldCenter=document.getElementById('fpCenterV4');if(!oldBtn||!oldCenter||oldBtn.dataset.v16)return false;
 const btn=oldBtn.cloneNode(true);oldBtn.replaceWith(btn);btn.dataset.v16='1';
 const center=oldCenter.cloneNode(true);oldCenter.replaceWith(center);center.dataset.v16='1';center.textContent='⟳ CENTRALIZAR VISÃO';center.style.setProperty('display','grid','important');
 let enabled=false,current=null,base=null,samples=0,paused=false;
 let appliedYaw=0,appliedPitch=0,appliedRoll=0,stablePitch=0,lastRawPitch=0,lastPitchSign=0;
 function map(e){const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;const a=e.alpha??0,b=e.beta??0,g=e.gamma??0;if(angle===90)return{yaw:a,pitch:g,roll:b};if(angle===270)return{yaw:a,pitch:-g,roll:-b};if(angle===180)return{yaw:a,pitch:-b,roll:-g};return{yaw:a,pitch:b,roll:g};}
 function resetReference(){base=current?{...current}:null;appliedYaw=appliedPitch=appliedRoll=0;stablePitch=lastRawPitch=0;lastPitchSign=0;}
 function onOrientation(e){
   if(!enabled)return;current=map(e);samples++;
   if(paused||document.hidden||window.__fpJoystickLookActive){base={...current};return;}
   if(!base){resetReference();return;}
   let rawPitch=norm(current.pitch-base.pitch);
   if(Math.abs(rawPitch-lastRawPitch)>12)rawPitch=lastRawPitch;
   const sign=Math.sign(rawPitch);
   if(lastPitchSign&&sign&&sign!==lastPitchSign&&Math.abs(lastRawPitch)>18)rawPitch=lastRawPitch;
   if(sign)lastPitchSign=sign;
   lastRawPitch=rawPitch;
   rawPitch=Math.max(-24,Math.min(24,rawPitch));
   stablePitch=stablePitch*.82+rawPitch*.18;
   const absPitch=Math.abs(stablePitch);
   let relYaw=-norm(current.yaw-base.yaw);
   if(Math.abs(relYaw)<.45)relYaw=0;
   if(absPitch>17)relYaw*=Math.max(0,1-(absPitch-17)/7);
   if(absPitch>=23)relYaw=0;
   relYaw=Math.max(-52,Math.min(52,relYaw));
   const desiredYaw=relYaw*1.42,desiredPitch=stablePitch*.88;
   const dy=(desiredYaw-appliedYaw)*.22,dp=(desiredPitch-appliedPitch)*.16;
   if(Math.abs(dy)>.018){trackedLook(dy,0);appliedYaw+=dy;}
   if(Math.abs(dp)>.018){trackedLook(0,dp);appliedPitch+=dp;}
   const relRoll=current.roll-base.roll,wanted=Math.abs(relRoll)<1.4?0:Math.max(-6,Math.min(6,Math.round(relRoll/2.8)));
   if(wanted!==appliedRoll){wheel(wanted>appliedRoll?11:-11);appliedRoll+=Math.sign(wanted-appliedRoll);}
 }
 async function permission(){if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
 function recenter(){
   if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();
   cameraOffset.x=0;cameraOffset.y=0;
   resetReference();
   toast(enabled?'Direção atual mantida; sensores recalibrados':'Direção atual definida como centro');
 }
 btn.addEventListener('click',async e=>{e.preventDefault();e.stopPropagation();try{if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');await permission();enabled=!enabled;samples=0;current=base=null;resetReference();if(enabled){window.addEventListener('deviceorientation',onOrientation,true);html.classList.add('fp-sensor-on');btn.textContent='📱 SENSORES ON';setTimeout(()=>{if(enabled&&samples===0)btn.textContent='⚠️ SEM DADOS';},2200);}else{window.removeEventListener('deviceorientation',onOrientation,true);html.classList.remove('fp-sensor-on');btn.textContent='📱 ATIVAR SENSORES';}}catch(_){btn.textContent='⚠️ SENSOR INDISPONÍVEL';}},{passive:false});
 center.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();recenter();},{passive:false});
 function suspend(){paused=true;base=null;}
 function resume(){paused=false;current=null;base=null;resetReference();setTimeout(()=>{if(current)resetReference();},180);}
 ['pagehide','blur'].forEach(ev=>window.addEventListener(ev,suspend,true));document.addEventListener('visibilitychange',()=>document.hidden?suspend():resume(),true);window.addEventListener('pageshow',resume,true);window.addEventListener('fp-mobile-resume',resume,true);
 window.__fpRecenterMobile=recenter;window.__fpRecalibrateSensorsOnly=resetReference;window.__fpSensorState={get enabled(){return enabled;},toast,recalibrateOnly:resetReference,setCentering(v){paused=!!v;if(!paused)resetReference();}};
 return true;
}
let tries=0;const timer=setInterval(()=>{tries++;if(install()||tries>100)clearInterval(timer);},100);if(document.readyState!=='loading')install();else document.addEventListener('DOMContentLoaded',install,{once:true});
})();