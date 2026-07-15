/* FramePro Mobile Controls V6 — touch real, HUD limpa e pasta visível */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);
if(!mobile)return;
const html=document.documentElement;

const css=document.createElement('style');
css.id='fp-mobile-v6-final-style';
css.textContent=`
/* desativa definitivamente controles mobile antigos */
#fpMobileControls,#fpWebMobileControls,#fpMobileV6{display:none!important;pointer-events:none!important}
html.fp-menu-open #fpMobileV4{display:none!important}

/* meio da tela livre: só guias e mensagens temporárias */
html.fp-playing #score,html.fp-playing .score,
html.fp-playing #fpScore,html.fp-playing #fpMStats,
html.fp-playing [id*="scoreHud"],html.fp-playing [id*="ScoreHud"],
html.fp-playing [class*="scoreHud"],html.fp-playing [class*="ScoreHud"],
html.fp-playing #precisionReadout,html.fp-playing #edgeHelp{display:none!important}

/* faixa superior organizada */
html.fp-web-mobile #topbar{left:126px!important;right:108px!important;top:max(5px,env(safe-area-inset-top))!important;height:30px!important;max-height:30px!important;overflow:hidden!important;padding:2px 5px!important}
html.fp-web-mobile #exposureHud{top:max(38px,calc(env(safe-area-inset-top) + 34px))!important;width:174px!important;min-width:174px!important;padding:3px 5px!important}
html.fp-web-mobile #fpHealthHud,html.fp-web-mobile #fpLifeHud,
html.fp-web-mobile [id*="HealthHud"],html.fp-web-mobile [id*="healthHud"],
html.fp-web-mobile [id*="LifeHud"],html.fp-web-mobile [id*="lifeHud"]{
 position:fixed!important;left:6px!important;top:max(5px,env(safe-area-inset-top))!important;
 width:114px!important;height:30px!important;max-height:30px!important;min-height:0!important;
 overflow:visible!important;padding:3px 5px!important;font-size:7px!important;z-index:120000!important
}
html.fp-web-mobile [id*="heart"],html.fp-web-mobile [class*="heart"]{font-size:15px!important;line-height:16px!important;max-width:none!important;max-height:none!important;white-space:nowrap!important}
html.fp-web-mobile #alignmentPanel{top:76px!important;left:6px!important;width:100px!important;max-height:150px!important;overflow:hidden!important}
html.fp-web-mobile #miniMapPanel{top:42px!important;right:6px!important;width:104px!important;max-height:78px!important;overflow:hidden!important}

/* joysticks finais */
#fpMoveV4,#fpLookV4{width:126px!important;height:126px!important;touch-action:none!important;pointer-events:auto!important}
#fpMoveV4{left:max(16px,env(safe-area-inset-left))!important;bottom:max(16px,env(safe-area-inset-bottom))!important}
#fpLookV4{right:max(102px,calc(env(safe-area-inset-right) + 94px))!important;bottom:max(16px,env(safe-area-inset-bottom))!important}
#fpMoveV4 .fpKnobV4,#fpLookV4 .fpKnobV4{left:40px!important;top:40px!important;width:44px!important;height:44px!important;transform:translate(0,0)}

/* botões sem sobreposição */
#fpPhotoV4{right:max(16px,env(safe-area-inset-right))!important;bottom:82px!important}
#fpFolderV6{right:max(14px,env(safe-area-inset-right));top:50px;width:72px;height:32px;border-radius:9px;font-size:9px}
#fpSensorV4{left:50%!important;bottom:max(12px,env(safe-area-inset-bottom))!important;min-width:132px!important}
#fpCenterV4{left:50%!important;bottom:max(52px,calc(env(safe-area-inset-bottom) + 40px))!important}
`;
document.head.appendChild(css);

function keyEvent(code,down){
  const map={KeyW:[87,'w'],KeyA:[65,'a'],KeyS:[83,'s'],KeyD:[68,'d']};
  const m=map[code]||[0,code];
  const ev=new KeyboardEvent(down?'keydown':'keyup',{code,key:m[1],bubbles:true,cancelable:true});
  try{Object.defineProperties(ev,{keyCode:{value:m[0]},which:{value:m[0]}});}catch(_){ }
  window.dispatchEvent(ev);document.dispatchEvent(ev);
}
function applyLook(dx,dy){
  if(!isFinite(dx)||!isFinite(dy))return;
  if(typeof window.__fpApplyLook==='function'){window.__fpApplyLook(dx,dy);return;}
  const target=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;
  const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,view:window});
  try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy},mozMovementX:{value:dx},mozMovementY:{value:dy},webkitMovementX:{value:dx},webkitMovementY:{value:dy}});}catch(_){ }
  target.dispatchEvent(ev);document.dispatchEvent(ev);window.dispatchEvent(ev);
}
function findTouch(list,id){for(let i=0;i<list.length;i++)if(list[i].identifier===id)return list[i];return null;}
function point(joy,touch){
  const r=joy.getBoundingClientRect(),radius=Math.min(r.width,r.height)*.34;
  let x=touch.clientX-(r.left+r.width/2),y=touch.clientY-(r.top+r.height/2);
  const len=Math.hypot(x,y)||1;if(len>radius){x=x/len*radius;y=y/len*radius;}
  return{x,y,nx:x/radius,ny:y/radius};
}
function cleanOldListeners(node){const clone=node.cloneNode(true);node.replaceWith(clone);return clone;}

function wireMove(node){
  const joy=cleanOldListeners(node),knob=joy.querySelector('.fpKnobV4');
  let id=null;const active={KeyW:false,KeyA:false,KeyS:false,KeyD:false};
  function set(nx,ny){const d=.15,next={KeyW:ny<-d,KeyS:ny>d,KeyA:nx<-d,KeyD:nx>d};for(const c in next){if(next[c]!==active[c]){active[c]=next[c];keyEvent(c,next[c]);}}}
  function reset(){id=null;knob.style.transform='translate(0px,0px)';set(0,0);for(const c in active){if(active[c])keyEvent(c,false);active[c]=false;}}
  joy.addEventListener('touchstart',e=>{if(id!==null)return;const t=e.changedTouches[0];id=t.identifier;const p=point(joy,t);knob.style.transform=`translate(${p.x}px,${p.y}px)`;set(p.nx,p.ny);e.preventDefault();},{passive:false});
  joy.addEventListener('touchmove',e=>{const t=findTouch(e.touches,id);if(!t)return;const p=point(joy,t);knob.style.transform=`translate(${p.x}px,${p.y}px)`;set(p.nx,p.ny);e.preventDefault();},{passive:false});
  joy.addEventListener('touchend',e=>{if(findTouch(e.changedTouches,id))reset();e.preventDefault();},{passive:false});
  joy.addEventListener('touchcancel',reset,{passive:false});
}
function wireLook(node){
  const joy=cleanOldListeners(node),knob=joy.querySelector('.fpKnobV4');
  let id=null,nx=0,ny=0,raf=0;
  function loop(){if(id!==null&&!html.classList.contains('fp-sensor-on'))applyLook(nx*2.35,ny*2.05);raf=requestAnimationFrame(loop);}loop();
  function reset(){id=null;nx=ny=0;knob.style.transform='translate(0px,0px)';}
  joy.addEventListener('touchstart',e=>{if(html.classList.contains('fp-sensor-on')||id!==null)return;const t=e.changedTouches[0];id=t.identifier;const p=point(joy,t);nx=p.nx;ny=p.ny;knob.style.transform=`translate(${p.x}px,${p.y}px)`;e.preventDefault();},{passive:false});
  joy.addEventListener('touchmove',e=>{const t=findTouch(e.touches,id);if(!t)return;const p=point(joy,t);nx=p.nx;ny=p.ny;knob.style.transform=`translate(${p.x}px,${p.y}px)`;e.preventDefault();},{passive:false});
  joy.addEventListener('touchend',e=>{if(findTouch(e.changedTouches,id))reset();e.preventDefault();},{passive:false});
  joy.addEventListener('touchcancel',reset,{passive:false});
}

function addFolderButton(){
  const root=document.getElementById('fpMobileV4');if(!root||document.getElementById('fpFolderV6'))return;
  const b=document.createElement('button');b.id='fpFolderV6';b.className='fpBtnV4';b.textContent='📁 PASTA';
  b.onclick=async()=>{
    const existing=document.getElementById('folderBtn');if(existing){existing.click();return;}
    if(window.showDirectoryPicker){try{window.FRAMEPRO_PHOTO_DIRECTORY=await window.showDirectoryPicker({mode:'readwrite'});b.textContent='📁 OK';}catch(_){}}
    else{b.textContent='📁 DOWNLOADS';setTimeout(()=>b.textContent='📁 PASTA',1300);}
  };
  root.appendChild(b);
}
function repairSensor(){
  const btn=document.getElementById('fpSensorV4');if(!btn||btn.dataset.v6)return;btn.dataset.v6='1';
  const fresh=btn.cloneNode(true);btn.replaceWith(fresh);const center=document.getElementById('fpCenterV4');
  let on=false,last=null,got=0;
  function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
  function read(e){if(!on)return;got++;const angle=(screen.orientation&&screen.orientation.angle)||window.orientation||0;
    let yaw=e.alpha||0,pitch=e.beta||0;
    if(angle===90){yaw=-(e.beta||0);pitch=e.gamma||0;}else if(angle===-90||angle===270){yaw=e.beta||0;pitch=-(e.gamma||0);}
    const cur={yaw,pitch};if(!last){last=cur;return;}const dx=norm(cur.yaw-last.yaw),dy=cur.pitch-last.pitch;last=cur;
    if(Math.abs(dx)<12&&Math.abs(dy)<12)applyLook(dx*2.4,dy*2.0);
  }
  fresh.onclick=async()=>{try{
    if(typeof DeviceOrientationEvent==='undefined')throw new Error('sem suporte');
    if(typeof DeviceOrientationEvent.requestPermission==='function'){const p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}
    on=!on;last=null;got=0;
    if(on){window.addEventListener('deviceorientation',read,true);window.addEventListener('deviceorientationabsolute',read,true);html.classList.add('fp-sensor-on');fresh.textContent='📱 SENSOR ON';if(center)center.style.display='grid';setTimeout(()=>{if(on&&got===0)fresh.textContent='⚠️ SEM DADOS';},2200);}
    else{window.removeEventListener('deviceorientation',read,true);window.removeEventListener('deviceorientationabsolute',read,true);html.classList.remove('fp-sensor-on');fresh.textContent='📱 ATIVAR SENSOR';if(center)center.style.display='none';}
  }catch(err){fresh.textContent='⚠️ SENSOR INDISPONÍVEL';}}
  if(center)center.onclick=()=>{last=null;};
}
function hideCentralPollution(){
  const candidates=document.querySelectorAll('body *');
  candidates.forEach(el=>{if(el.closest('#start,#feedback,#fpRotateGateV4,#fpFsPromptV4'))return;const id=(el.id||'').toLowerCase(),cl=(el.className||'').toString().toLowerCase();if((id.includes('score')||cl.includes('score'))&&getComputedStyle(el).position==='fixed'){const r=el.getBoundingClientRect();if(r.top>innerHeight*.18&&r.bottom<innerHeight*.82)el.style.setProperty('display','none','important');}});
}
function install(){
  const move=document.getElementById('fpMoveV4'),look=document.getElementById('fpLookV4');if(!move||!look)return false;
  if(!document.getElementById('fpMoveV4').dataset.v6){wireMove(move);document.getElementById('fpMoveV4').dataset.v6='1';}
  if(!document.getElementById('fpLookV4').dataset.v6){wireLook(look);document.getElementById('fpLookV4').dataset.v6='1';}
  addFolderButton();repairSensor();hideCentralPollution();return true;
}
let tries=0;const timer=setInterval(()=>{tries++;if(install()||tries>100)clearInterval(timer);},100);
setInterval(()=>{addFolderButton();hideCentralPollution();},900);
})();