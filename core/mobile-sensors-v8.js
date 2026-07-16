/* FramePro Mobile Sensors V32 — base V31 lapidada, eixos desacoplados e horizonte mais sensível */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);if(!mobile)return;
if(window.__fpUnifiedSensorController&&typeof window.__fpUnifiedSensorController.dispose==='function')window.__fpUnifiedSensorController.dispose();
const html=document.documentElement;
const cameraOffset=window.__fpMobileCameraOffset=window.__fpMobileCameraOffset||{x:0,y:0,roll:0};
const state={enabled:false,paused:false,centering:false,disposed:false,lastAction:0,base:null,current:null,smoothYaw:0,smoothPitch:0,appliedYaw:0,appliedPitch:0,appliedRoll:0,samples:0,lastRawYaw:null,lastRawPitch:null,decoupledYaw:0};
function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
function angle(){return (((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;}
function map(e){if(!Number.isFinite(e.alpha)&&!Number.isFinite(e.beta)&&!Number.isFinite(e.gamma))return null;const a=Number(e.alpha)||0,b=Number(e.beta)||0,g=Number(e.gamma)||0,A=angle();if(A===90)return{yaw:a,pitch:g,roll:b-90};if(A===270)return{yaw:a,pitch:-g,roll:-(b+90)};if(A===180)return{yaw:a,pitch:-b,roll:-g};return{yaw:a,pitch:b,roll:g};}
function rawLook(dx,dy){if(typeof window.__fpMobileRawLook==='function'){window.__fpMobileRawLook(dx,dy);return;}if(typeof window.__fpApplyLook==='function'){window.__fpApplyLook(dx,dy);return;}const t=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,view:window});try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy}});}catch(_){}t.dispatchEvent(ev);}
function trackedLook(dx,dy){if(!Number.isFinite(dx)||!Number.isFinite(dy))return;if(typeof window.__fpMobileTrackedLook==='function')window.__fpMobileTrackedLook(dx,dy);else{rawLook(dx,dy);cameraOffset.x+=dx;cameraOffset.y+=dy;}}
function wheel(delta){(document.querySelector('#gameShell canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:delta,bubbles:true,cancelable:true}));}
function toast(text){let t=document.getElementById('fpSensorToastV32');if(!t){t=document.createElement('div');t.id='fpSensorToastV32';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.94)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1600);}
function resetAxisHistory(){state.lastRawYaw=null;state.lastRawPitch=null;state.decoupledYaw=0;}
function calibrate(){state.base=state.current?{...state.current}:null;state.smoothYaw=state.smoothPitch=0;state.appliedYaw=state.appliedPitch=0;resetAxisHistory();}
function joystickActive(){return window.__fpJoystickLookActive===true;}
function onOrientation(e){
 if(state.disposed||!state.enabled||state.paused||state.centering||document.hidden||joystickActive())return;
 const cur=map(e);if(!cur)return;state.current=cur;state.samples++;if(!state.base){calibrate();return;}
 const rawYaw=norm(cur.yaw-state.base.yaw),rawPitch=clamp(cur.pitch-state.base.pitch,-36,36),relRoll=norm(cur.roll-state.base.roll);
 if(state.lastRawYaw===null){state.lastRawYaw=rawYaw;state.lastRawPitch=rawPitch;state.decoupledYaw=rawYaw;}
 const dYaw=norm(rawYaw-state.lastRawYaw),dPitch=rawPitch-state.lastRawPitch;
 state.lastRawYaw=rawYaw;state.lastRawPitch=rawPitch;
 const verticalDominant=Math.abs(dPitch)>.18&&Math.abs(dPitch)>Math.abs(dYaw)*1.15;
 const yawContribution=verticalDominant?dYaw*.08:dYaw;
 state.decoupledYaw=clamp(state.decoupledYaw+yawContribution,-62,62);
 const pitchEdge=Math.max(0,(Math.abs(rawPitch)-24)/12);
 const yawAtExtreme=state.decoupledYaw*(1-clamp(pitchEdge,0,.38));
 const targetYaw=clamp(-yawAtExtreme*2.28,-142,142),targetPitch=clamp(rawPitch*1.95,-78,78);
 state.smoothYaw=state.smoothYaw*.84+targetYaw*.16;state.smoothPitch=state.smoothPitch*.85+targetPitch*.15;
 let dx=clamp(state.smoothYaw-state.appliedYaw,-2.15,2.15),dy=clamp(state.smoothPitch-state.appliedPitch,-1.75,1.75);
 if(Math.abs(dx)<.018)dx=0;if(Math.abs(dy)<.018)dy=0;if(dx||dy){trackedLook(dx,dy);state.appliedYaw+=dx;state.appliedPitch+=dy;}
 const wanted=Math.abs(relRoll)<2.1?0:clamp(Math.round(relRoll/4.8),-5,5);
 if(wanted!==state.appliedRoll){const dir=Math.sign(wanted-state.appliedRoll);wheel(dir>0?11:-11);state.appliedRoll+=dir;cameraOffset.roll=state.appliedRoll;}
}
async function permission(){if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem orientação');if(typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
function unbind(){window.removeEventListener('deviceorientation',onOrientation,true);window.removeEventListener('deviceorientationabsolute',onOrientation,true);}
function bind(){unbind();if(state.enabled&&!state.paused&&!state.disposed)window.addEventListener('deviceorientation',onOrientation,true);}
function refresh(){const b=document.getElementById('fpSensorV4');if(b)b.textContent=state.enabled?'📱 SENSORES ON':'📱 ATIVAR SENSORES';const c=document.getElementById('fpCenterV4');if(c){c.textContent='⟳ RECENTRALIZAR + CALIBRAR';c.style.setProperty('display','grid','important');}html.classList.toggle('fp-sensor-on',state.enabled);}
async function toggle(){try{await permission();state.enabled=!state.enabled;state.samples=0;state.base=null;state.current=null;state.smoothYaw=state.smoothPitch=0;state.appliedYaw=state.appliedPitch=0;resetAxisHistory();bind();refresh();toast(state.enabled?'Sensores ativados — segure o celular na posição inicial':'Sensores desligados');setTimeout(()=>{if(state.enabled&&state.samples===0)toast('O navegador não entregou dados do sensor');},2200);}catch(_){state.enabled=false;unbind();refresh();toast('Sensor ou permissão indisponível');}}
function recenter(){if(state.centering)return;state.centering=true;if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();const pitch=Number(cameraOffset.y)||0,roll=state.appliedRoll,total=Math.max(Math.abs(pitch)>.01?18:0,Math.abs(roll),1);let i=0;function tick(){if(Math.abs(pitch)>.01&&i<18)rawLook(0,-pitch/18);if(i<Math.abs(roll))wheel(roll>0?-11:11);i++;if(i<total)requestAnimationFrame(tick);else{cameraOffset.y=0;cameraOffset.roll=0;state.appliedRoll=0;state.appliedPitch=0;state.appliedYaw=0;state.base=state.current?{...state.current}:null;state.smoothYaw=state.smoothPitch=0;resetAxisHistory();state.centering=false;toast('Visão nivelada e posição atual calibrada');}}requestAnimationFrame(tick);}
function action(e){const t=e.target&&e.target.closest?e.target.closest('#fpSensorV4,#fpCenterV4'):null;if(!t)return;const now=performance.now();if(now-state.lastAction<350)return;state.lastAction=now;e.preventDefault();e.stopImmediatePropagation();t.id==='fpSensorV4'?toggle():recenter();}
function suspend(){state.paused=true;unbind();if(typeof window.__fpResetMobileControls==='function')window.__fpResetMobileControls();}
function resume(){state.paused=false;state.base=null;state.current=null;state.smoothYaw=state.smoothPitch=0;state.appliedYaw=state.appliedPitch=0;resetAxisHistory();setTimeout(()=>{bind();refresh();},180);}
function visibility(){document.hidden?suspend():resume();}
function focus(){if(!document.hidden)resume();}
function orientation(){state.base=null;state.current=null;resetAxisHistory();resume();}
function dispose(){state.disposed=true;state.enabled=false;unbind();document.removeEventListener('pointerup',action,true);document.removeEventListener('click',action,true);window.removeEventListener('pagehide',suspend,true);window.removeEventListener('blur',suspend,true);document.removeEventListener('visibilitychange',visibility,true);window.removeEventListener('pageshow',resume,true);window.removeEventListener('focus',focus,true);window.removeEventListener('orientationchange',orientation,true);html.classList.remove('fp-sensor-on');}
document.addEventListener('pointerup',action,true);document.addEventListener('click',action,true);window.addEventListener('pagehide',suspend,true);window.addEventListener('blur',suspend,true);document.addEventListener('visibilitychange',visibility,true);window.addEventListener('pageshow',resume,true);window.addEventListener('focus',focus,true);window.addEventListener('orientationchange',orientation,true);
const controller=window.__fpUnifiedSensorController={dispose,toggle,center:recenter,rebind:()=>{bind();refresh();},calibrate,get enabled(){return state.enabled;}};
window.__fpRecenterMobile=recenter;window.__fpRecalibrateSensorsOnly=calibrate;window.__fpReinstallSensors=controller.rebind;window.__fpSensorState={get enabled(){return state.enabled;},toast,recalibrateOnly:calibrate};
bind();refresh();
})();