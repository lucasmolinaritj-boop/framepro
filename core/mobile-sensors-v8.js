/* FramePro Mobile Sensors V23 — resposta realista, suavização adaptativa e horizonte estável */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);if(!mobile)return;
const html=document.documentElement;
const cameraOffset=window.__fpMobileCameraOffset=window.__fpMobileCameraOffset||{x:0,y:0,roll:0};
const state=window.__fpSensorRuntimeV23=window.__fpSensorRuntimeV23||{enabled:false,paused:false,current:null,last:null,samples:0,centering:false,rollBase:null,appliedRoll:0,velYaw:0,velPitch:0,lastAction:0,stillFrames:0,lastTs:0};
if(!document.getElementById('fp-sensor-v23-style')){const s=document.createElement('style');s.id='fp-sensor-v23-style';s.textContent=`#fpCenterV4,#fpSensorV4{pointer-events:auto!important;visibility:visible!important}#fpCenterV4{display:grid!important}html.fp-sensor-on #fpLookV4,#fpLookV4{pointer-events:auto!important;opacity:1!important;visibility:visible!important}`;document.head.appendChild(s);}
function rawLook(dx,dy){if(typeof window.__fpMobileRawLook==='function'){window.__fpMobileRawLook(dx,dy);return;}if(typeof window.__fpApplyLook==='function'){window.__fpApplyLook(dx,dy);return;}const target=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,view:window});try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy}});}catch(_){}target.dispatchEvent(ev);document.dispatchEvent(ev);window.dispatchEvent(ev);}
function trackedLook(dx,dy){if(!Number.isFinite(dx)||!Number.isFinite(dy))return;if(typeof window.__fpMobileTrackedLook==='function'){window.__fpMobileTrackedLook(dx,dy);return;}rawLook(dx,dy);cameraOffset.x+=dx;cameraOffset.y+=dy;}
function wheel(delta){(document.querySelector('#gameShell canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));}
function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function toast(text){let t=document.getElementById('fpSensorToastV23');if(!t){t=document.createElement('div');t.id='fpSensorToastV23';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.94)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1500);}
function map(e){if(!Number.isFinite(e.alpha)&&!Number.isFinite(e.beta)&&!Number.isFinite(e.gamma))return null;const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;const a=Number(e.alpha)||0,b=Number(e.beta)||0,g=Number(e.gamma)||0;if(angle===90)return{yaw:a,pitch:g,roll:b-90};if(angle===270)return{yaw:a,pitch:-g,roll:-(b+90)};if(angle===180)return{yaw:a,pitch:-b,roll:-g};return{yaw:a,pitch:b,roll:g};}
function recalibrate(){state.last=state.current?{...state.current}:null;state.rollBase=state.current?state.current.roll:null;state.velYaw=0;state.velPitch=0;state.stillFrames=0;state.lastTs=performance.now();}
function adaptiveAlpha(speed){return speed<.12?.18:speed<.5?.28:speed<1.4?.42:.58;}
function onOrientation(e){
 if(!state.enabled||state.paused||state.centering||document.hidden||window.__fpJoystickLookActive)return;
 const cur=map(e);if(!cur)return;state.current=cur;state.samples++;
 const now=performance.now(),dt=clamp((now-(state.lastTs||now))/16.67,.5,2.2);state.lastTs=now;
 if(!state.last){recalibrate();return;}
 let dyaw=norm(cur.yaw-state.last.yaw),dpitch=cur.pitch-state.last.pitch;state.last=cur;
 if(Math.abs(dyaw)>20||Math.abs(dpitch)>20){state.velYaw=state.velPitch=0;return;}
 dyaw=clamp(dyaw,-6.2,6.2);dpitch=clamp(dpitch,-4.6,4.6);
 const rawSpeed=Math.hypot(dyaw,dpitch);
 if(rawSpeed<.045){state.stillFrames++;dyaw=0;dpitch=0;}else state.stillFrames=0;
 const ay=adaptiveAlpha(Math.abs(dyaw)),ap=adaptiveAlpha(Math.abs(dpitch));
 state.velYaw=state.velYaw*(1-ay)+dyaw*ay;
 state.velPitch=state.velPitch*(1-ap)+dpitch*ap;
 const damping=state.stillFrames>4?.72:.9;state.velYaw*=damping;state.velPitch*=damping;
 if(Math.abs(state.velYaw)>.018)trackedLook(-state.velYaw*1.72*dt,0);
 if(Math.abs(state.velPitch)>.018)trackedLook(0,state.velPitch*1.08*dt);
 if(state.rollBase===null)state.rollBase=cur.roll;
 const relRoll=norm(cur.roll-state.rollBase);
 if(state.stillFrames>18&&Math.abs(relRoll)<3.5)state.rollBase=state.rollBase*.92+cur.roll*.08;
 const wanted=Math.abs(relRoll)<2.4?0:clamp(Math.round(relRoll/4.5),-5,5);
 if(wanted!==state.appliedRoll){const dir=Math.sign(wanted-state.appliedRoll);wheel(dir>0?11:-11);state.appliedRoll+=dir;cameraOffset.roll=state.appliedRoll;}
}
async function permission(){if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');if(typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
function bind(){window.removeEventListener('deviceorientation',onOrientation,true);if(state.enabled&&!state.paused)window.addEventListener('deviceorientation',onOrientation,true);}
function refresh(){const b=document.getElementById('fpSensorV4');if(b)b.textContent=state.enabled?'📱 SENSORES ON':'📱 ATIVAR SENSORES';const c=document.getElementById('fpCenterV4');if(c){c.textContent='⟳ CENTRALIZAR VISÃO';c.style.setProperty('display','grid','important');}html.classList.toggle('fp-sensor-on',state.enabled);}
async function toggleSensors(){try{await permission();state.enabled=!state.enabled;state.samples=0;state.current=state.last=null;state.rollBase=null;state.appliedRoll=0;state.velYaw=state.velPitch=0;state.stillFrames=0;cameraOffset.roll=0;bind();refresh();if(state.enabled){toast('Sensores ativados e calibrados');setTimeout(()=>{if(state.enabled&&state.samples===0){bind();const b=document.getElementById('fpSensorV4');if(b)b.textContent='⚠️ SEM DADOS DO SENSOR';toast('O navegador não entregou dados do sensor');}},2800);}else toast('Sensores desligados');}catch(_){state.enabled=false;bind();refresh();const b=document.getElementById('fpSensorV4');if(b)b.textContent='⚠️ SENSOR INDISPONÍVEL';toast('Permissão ou sensor indisponível');}}
function centerLevel(){if(state.centering)return;state.centering=true;if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();const pitch=Number(cameraOffset.y)||0,roll=Number(state.appliedRoll)||0,pitchSteps=Math.abs(pitch)>.01?16:0,rollSteps=Math.abs(Math.round(roll)),total=Math.max(pitchSteps,rollSteps,1);let i=0;function finish(){cameraOffset.y=0;cameraOffset.roll=0;state.appliedRoll=0;state.velYaw=state.velPitch=0;state.centering=false;recalibrate();toast('Visão vertical e horizonte nivelados');}function tick(){if(pitchSteps&&i<pitchSteps)rawLook(0,-pitch/pitchSteps);if(i<rollSteps)wheel(roll>0?-11:11);i++;if(i<total)requestAnimationFrame(tick);else finish();}requestAnimationFrame(tick);}
function actionFromEvent(e){const target=e.target&&e.target.closest?e.target.closest('#fpSensorV4,#fpCenterV4'):null;if(!target)return;const now=performance.now();if(now-state.lastAction<350)return;state.lastAction=now;e.preventDefault();e.stopPropagation();if(target.id==='fpSensorV4')toggleSensors();else centerLevel();}
document.addEventListener('pointerup',actionFromEvent,true);document.addEventListener('click',actionFromEvent,true);
function suspend(){state.paused=true;state.last=null;bind();if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();}
function resume(){state.paused=false;state.last=null;state.rollBase=null;state.velYaw=state.velPitch=0;state.stillFrames=0;setTimeout(()=>{bind();refresh();},120);setTimeout(()=>{bind();refresh();},650);}
window.addEventListener('pagehide',suspend,true);window.addEventListener('blur',suspend,true);document.addEventListener('visibilitychange',()=>document.hidden?suspend():resume(),true);window.addEventListener('pageshow',resume,true);window.addEventListener('focus',()=>{if(!document.hidden)resume();},true);window.addEventListener('orientationchange',()=>{state.current=state.last=null;state.rollBase=null;resume();},true);
window.__fpRecenterMobile=centerLevel;window.__fpRecalibrateSensorsOnly=recalibrate;window.__fpReinstallSensors=()=>{bind();refresh();};window.__fpSensorState={get enabled(){return state.enabled;},toast,recalibrateOnly:recalibrate};
bind();refresh();setInterval(refresh,900);
})();