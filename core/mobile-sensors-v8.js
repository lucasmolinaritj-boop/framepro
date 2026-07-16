/* FramePro Mobile Sensors V24 — rollback estável da V22 com proteção contra picos */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);if(!mobile)return;
const html=document.documentElement;
const cameraOffset=window.__fpMobileCameraOffset=window.__fpMobileCameraOffset||{x:0,y:0,roll:0};
const state=window.__fpSensorRuntimeV24=window.__fpSensorRuntimeV24||{enabled:false,paused:false,current:null,last:null,samples:0,centering:false,rollBase:null,appliedRoll:0,smoothYaw:0,smoothPitch:0,lastAction:0,spikeCount:0};
if(!document.getElementById('fp-sensor-v24-style')){const s=document.createElement('style');s.id='fp-sensor-v24-style';s.textContent=`#fpCenterV4,#fpSensorV4{pointer-events:auto!important;visibility:visible!important}#fpCenterV4{display:grid!important}html.fp-sensor-on #fpLookV4,#fpLookV4{pointer-events:auto!important;opacity:1!important;visibility:visible!important}`;document.head.appendChild(s);}
function rawLook(dx,dy){if(typeof window.__fpMobileRawLook==='function'){window.__fpMobileRawLook(dx,dy);return;}if(typeof window.__fpApplyLook==='function'){window.__fpApplyLook(dx,dy);return;}const target=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,view:window});try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy}});}catch(_){}target.dispatchEvent(ev);document.dispatchEvent(ev);window.dispatchEvent(ev);}
function trackedLook(dx,dy){if(!Number.isFinite(dx)||!Number.isFinite(dy))return;if(typeof window.__fpMobileTrackedLook==='function'){window.__fpMobileTrackedLook(dx,dy);return;}rawLook(dx,dy);cameraOffset.x+=dx;cameraOffset.y+=dy;}
function wheel(delta){(document.querySelector('#gameShell canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));}
function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function toast(text){let t=document.getElementById('fpSensorToastV24');if(!t){t=document.createElement('div');t.id='fpSensorToastV24';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.94)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1500);}
function map(e){if(!Number.isFinite(e.alpha)&&!Number.isFinite(e.beta)&&!Number.isFinite(e.gamma))return null;const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;const a=Number(e.alpha)||0,b=Number(e.beta)||0,g=Number(e.gamma)||0;if(angle===90)return{yaw:a,pitch:g,roll:b-90};if(angle===270)return{yaw:a,pitch:-g,roll:-(b+90)};if(angle===180)return{yaw:a,pitch:-b,roll:-g};return{yaw:a,pitch:b,roll:g};}
function recalibrate(){state.last=state.current?{...state.current}:null;state.rollBase=state.current?state.current.roll:null;state.smoothYaw=0;state.smoothPitch=0;state.spikeCount=0;}
function onOrientation(e){
 if(!state.enabled||state.paused||state.centering||document.hidden||window.__fpJoystickLookActive)return;
 const cur=map(e);if(!cur)return;state.current=cur;state.samples++;
 if(!state.last){recalibrate();return;}
 let dyaw=norm(cur.yaw-state.last.yaw),dpitch=cur.pitch-state.last.pitch;state.last=cur;
 if(Math.abs(dyaw)>12||Math.abs(dpitch)>12){state.smoothYaw=state.smoothPitch=0;state.spikeCount++;if(state.spikeCount>=2)recalibrate();return;}state.spikeCount=0;
 dyaw=Math.max(-4.5,Math.min(4.5,dyaw));dpitch=Math.max(-3.5,Math.min(3.5,dpitch));
 state.smoothYaw=state.smoothYaw*.70+dyaw*.30;state.smoothPitch=state.smoothPitch*.74+dpitch*.26;
 if(Math.abs(state.smoothYaw)>.03)trackedLook(-state.smoothYaw*1.48,0);
 if(Math.abs(state.smoothPitch)>.03)trackedLook(0,state.smoothPitch*1.06);
 if(state.rollBase===null)state.rollBase=cur.roll;
 const relRoll=norm(cur.roll-state.rollBase);const wanted=Math.abs(relRoll)<2.5?0:Math.max(-4,Math.min(4,Math.round(relRoll/4.8)));
 if(wanted!==state.appliedRoll){const dir=Math.sign(wanted-state.appliedRoll);wheel(dir>0?11:-11);state.appliedRoll+=dir;cameraOffset.roll=state.appliedRoll;}
}
async function permission(){if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');if(typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
function bind(){window.removeEventListener('deviceorientation',onOrientation,true);if(state.enabled&&!state.paused)window.addEventListener('deviceorientation',onOrientation,true);}
function refresh(){const b=document.getElementById('fpSensorV4');if(b)b.textContent=state.enabled?'📱 SENSORES ON':'📱 ATIVAR SENSORES';const c=document.getElementById('fpCenterV4');if(c){c.textContent='⟳ CENTRALIZAR VISÃO';c.style.setProperty('display','grid','important');}html.classList.toggle('fp-sensor-on',state.enabled);}
async function toggleSensors(){try{await permission();state.enabled=!state.enabled;state.samples=0;state.current=state.last=null;state.rollBase=null;state.appliedRoll=0;state.smoothYaw=state.smoothPitch=0;state.spikeCount=0;cameraOffset.roll=0;bind();refresh();if(state.enabled){toast('Sensores ativados e calibrados');setTimeout(()=>{if(state.enabled&&state.samples===0){bind();const b=document.getElementById('fpSensorV4');if(b)b.textContent='⚠️ SEM DADOS DO SENSOR';toast('O navegador não entregou dados do sensor');}},2800);}else toast('Sensores desligados');}catch(_){state.enabled=false;bind();refresh();const b=document.getElementById('fpSensorV4');if(b)b.textContent='⚠️ SENSOR INDISPONÍVEL';toast('Permissão ou sensor indisponível');}}
function centerLevel(){if(state.centering)return;state.centering=true;if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();const pitch=Number(cameraOffset.y)||0,roll=Number(state.appliedRoll)||0,pitchSteps=Math.abs(pitch)>.01?14:0,rollSteps=Math.abs(Math.round(roll)),total=Math.max(pitchSteps,rollSteps,1);let i=0;function finish(){cameraOffset.y=0;cameraOffset.roll=0;state.appliedRoll=0;state.smoothYaw=state.smoothPitch=0;state.centering=false;recalibrate();toast('Visão vertical e horizonte nivelados');}function tick(){if(pitchSteps&&i<pitchSteps)rawLook(0,-pitch/pitchSteps);if(i<rollSteps)wheel(roll>0?-11:11);i++;if(i<total)requestAnimationFrame(tick);else finish();}requestAnimationFrame(tick);}
function actionFromEvent(e){const target=e.target&&e.target.closest?e.target.closest('#fpSensorV4,#fpCenterV4'):null;if(!target)return;const now=performance.now();if(now-state.lastAction<350)return;state.lastAction=now;e.preventDefault();e.stopPropagation();if(target.id==='fpSensorV4')toggleSensors();else centerLevel();}
document.addEventListener('pointerup',actionFromEvent,true);document.addEventListener('click',actionFromEvent,true);
function suspend(){state.paused=true;state.last=null;bind();if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();}
function resume(){state.paused=false;state.last=null;state.rollBase=null;state.smoothYaw=state.smoothPitch=0;state.spikeCount=0;setTimeout(()=>{bind();refresh();},120);setTimeout(()=>{bind();refresh();},650);}
window.addEventListener('pagehide',suspend,true);window.addEventListener('blur',suspend,true);document.addEventListener('visibilitychange',()=>document.hidden?suspend():resume(),true);window.addEventListener('pageshow',resume,true);window.addEventListener('focus',()=>{if(!document.hidden)resume();},true);window.addEventListener('orientationchange',()=>{state.current=state.last=null;state.rollBase=null;resume();},true);
window.__fpRecenterMobile=centerLevel;window.__fpRecalibrateSensorsOnly=recalibrate;window.__fpReinstallSensors=()=>{bind();refresh();};window.__fpSensorState={get enabled(){return state.enabled;},toast,recalibrateOnly:recalibrate};
bind();refresh();setInterval(refresh,900);
})();