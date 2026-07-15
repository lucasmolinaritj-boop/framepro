/* FramePro Mobile Sensors V14 — sensor e joystick direito trabalhando juntos */
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
function toast(text){let t=document.getElementById('fpSensorToastV14');if(!t){t=document.createElement('div');t.id='fpSensorToastV14';Object.assign(t.style,{position:'fixed',left:'50%',top:'72px',transform:'translateX(-50%)',zIndex:'300000',padding:'8px 12px',borderRadius:'10px',background:'rgba(5,12,20,.92)',color:'#fff',font:'800 11px system-ui',pointerEvents:'none',opacity:'0',transition:'opacity .2s'});document.body.appendChild(t);}t.textContent=text;t.style.opacity='1';clearTimeout(t.__timer);t.__timer=setTimeout(()=>t.style.opacity='0',1300);}
function install(){
  const oldBtn=document.getElementById('fpSensorV4'),oldCenter=document.getElementById('fpCenterV4');
  if(!oldBtn||!oldCenter||oldBtn.dataset.v14)return false;
  const btn=oldBtn.cloneNode(true);oldBtn.replaceWith(btn);btn.dataset.v14='1';
  const center=oldCenter.cloneNode(true);oldCenter.replaceWith(center);center.dataset.v14='1';center.textContent='⟳ CENTRALIZAR VISÃO';
  let enabled=false,current=null,base=null,samples=0,centering=false;
  let appliedYaw=0,appliedPitch=0,appliedRoll=0;
  let stablePitch=0,lastRawPitch=0,lockedHigh=false,joystickWasActive=false;
  function map(e){const angle=(((screen.orientation&&screen.orientation.angle)||window.orientation||0)%360+360)%360;const a=e.alpha??0,b=e.beta??0,g=e.gamma??0;if(angle===90)return{yaw:a,pitch:g,roll:b};if(angle===270)return{yaw:a,pitch:-g,roll:-b};if(angle===180)return{yaw:a,pitch:-b,roll:-g};return{yaw:a,pitch:b,roll:g};}
  function onOrientation(e){
    if(!enabled)return;
    current=map(e);samples++;
    const joyActive=!!window.__fpJoystickLookActive;
    if(joyActive){joystickWasActive=true;return;}
    if(joystickWasActive){
      joystickWasActive=false;
      base={...current};
      appliedYaw=appliedPitch=0;
      stablePitch=lastRawPitch=0;
      lockedHigh=false;
      return;
    }
    if(centering)return;
    if(!base){base={...current};stablePitch=0;lastRawPitch=0;appliedYaw=appliedPitch=appliedRoll=0;return;}
    let rawPitch=norm(current.pitch-base.pitch);
    if(Math.abs(rawPitch-lastRawPitch)>18)rawPitch=lastRawPitch;
    lastRawPitch=rawPitch;
    rawPitch=Math.max(-27,Math.min(27,rawPitch));
    stablePitch=stablePitch*.76+rawPitch*.24;
    const absPitch=Math.abs(stablePitch);lockedHigh=absPitch>=24;
    let relYaw=-norm(current.yaw-base.yaw);
    if(Math.abs(relYaw)<.5)relYaw=0;
    if(lockedHigh)relYaw=0;else if(absPitch>19)relYaw*=Math.max(0,1-(absPitch-19)/5);
    relYaw=Math.max(-52,Math.min(52,relYaw));
    const desiredYaw=relYaw*1.42,desiredPitch=stablePitch*.90;
    const dy=(desiredYaw-appliedYaw)*.22,dp=(desiredPitch-appliedPitch)*.18;
    if(Math.abs(dy)>.018){applyLook(dy,0);appliedYaw+=dy;}
    if(Math.abs(dp)>.018){applyLook(0,dp);appliedPitch+=dp;}
    const relRoll=current.roll-base.roll;
    const wanted=Math.abs(relRoll)<1.4?0:Math.max(-6,Math.min(6,Math.round(relRoll/2.8)));
    if(wanted!==appliedRoll){wheel(wanted>appliedRoll?11:-11);appliedRoll+=Math.sign(wanted-appliedRoll);}
  }
  async function permission(){if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}}
  function smoothReturn(totalX,totalY,done){const steps=10;let i=0;function tick(){i++;const remain=steps-i+1;applyLook(-totalX/remain,-totalY/remain);totalX-=totalX/remain;totalY-=totalY/remain;if(i<steps)requestAnimationFrame(tick);else done();}requestAnimationFrame(tick);}
  function recenter(){
    if(!enabled||!current||centering){toast('Mova o celular e tente novamente');return;}
    centering=true;
    const oldYaw=appliedYaw,oldPitch=appliedPitch,oldRoll=appliedRoll;
    smoothReturn(oldYaw,oldPitch,()=>{
      if(oldRoll!==0){const dir=oldRoll>0?-11:11;for(let i=0;i<Math.abs(oldRoll);i++)setTimeout(()=>wheel(dir),i*20);}
      appliedYaw=appliedPitch=appliedRoll=0;stablePitch=lastRawPitch=0;lockedHigh=false;
      base={...current};
      const slider=document.getElementById('heightSlider');if(slider){slider.value='1.40';slider.dispatchEvent(new Event('input',{bubbles:true}));slider.dispatchEvent(new Event('change',{bubbles:true}));}
      const ideal=document.getElementById('idealHeightBtn');if(ideal)ideal.click();
      setTimeout(()=>{base=current?{...current}:base;centering=false;toast('Visão centralizada');},220);
    });
  }
  btn.addEventListener('click',async e=>{
    e.preventDefault();e.stopPropagation();
    try{
      if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');
      await permission();enabled=!enabled;samples=0;current=base=null;appliedYaw=appliedPitch=appliedRoll=0;stablePitch=lastRawPitch=0;lockedHigh=false;centering=false;joystickWasActive=false;
      if(enabled){window.addEventListener('deviceorientation',onOrientation,true);html.classList.add('fp-sensor-on');btn.textContent='📱 SENSORES ON';center.style.display='grid';setTimeout(()=>{if(enabled&&samples===0)btn.textContent='⚠️ SEM DADOS';},2200);}
      else{window.removeEventListener('deviceorientation',onOrientation,true);html.classList.remove('fp-sensor-on');btn.textContent='📱 ATIVAR SENSORES';center.style.display='none';}
    }catch(_){btn.textContent='⚠️ SENSOR INDISPONÍVEL';}
  },{passive:false});
  center.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();recenter();},{passive:false});
  window.__fpRecenterMobile=recenter;
  return true;
}
let tries=0;const timer=setInterval(()=>{tries++;if(install()||tries>100)clearInterval(timer);},100);
if(document.readyState!=='loading')install();else document.addEventListener('DOMContentLoaded',install,{once:true});
})();