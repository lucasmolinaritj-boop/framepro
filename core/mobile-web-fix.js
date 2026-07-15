/* FramePro Mobile Web Fix — GitHub Pages */
(function(){
  'use strict';
  var mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'') || (matchMedia && matchMedia('(pointer:coarse)').matches);
  if(!mobile) return;
  document.documentElement.classList.add('fp-web-mobile','fp-mobile','fp-mobile-v2','fp-true-mobile');
  var st=document.createElement('style');
  st.id='fp-web-mobile-fix-style';
  st.textContent=`
  html.fp-web-mobile,html.fp-web-mobile body{margin:0!important;width:100%!important;height:100%!important;overflow:hidden!important;overscroll-behavior:none!important;touch-action:none!important;background:#000!important}
  html.fp-web-mobile #gameShell{position:fixed!important;inset:0!important;left:0!important;top:0!important;transform:none!important;width:100vw!important;width:100dvw!important;height:100vh!important;height:100dvh!important;max-width:none!important;max-height:none!important;aspect-ratio:auto!important;border-radius:0!important;box-shadow:none!important}
  html.fp-web-mobile #gameShell canvas{width:100%!important;height:100%!important;touch-action:none!important}
  html.fp-web-mobile #fpMobileControls{display:block!important;visibility:visible!important;opacity:1!important;position:fixed!important;inset:0!important;z-index:10050!important;pointer-events:none!important}
  html.fp-web-mobile #fpLookZone{display:block!important;position:absolute!important;left:36%!important;right:0!important;top:8%!important;bottom:0!important;pointer-events:auto!important;touch-action:none!important;z-index:10051!important}
  html.fp-web-mobile #fpJoyZone{display:block!important;left:max(14px,env(safe-area-inset-left))!important;bottom:max(14px,env(safe-area-inset-bottom))!important;width:128px!important;height:128px!important;pointer-events:auto!important;z-index:10055!important}
  html.fp-web-mobile #fpJoyKnob{width:50px!important;height:50px!important;left:37px!important;top:37px!important}
  html.fp-web-mobile .fpMobBtn{pointer-events:auto!important;visibility:visible!important;opacity:1!important;z-index:10056!important}
  html.fp-web-mobile #fpPhotoBtn{right:max(14px,env(safe-area-inset-right))!important;bottom:max(105px,calc(env(safe-area-inset-bottom) + 96px))!important;width:68px!important;height:68px!important;font-size:28px!important}
  html.fp-web-mobile #fpShootBtn{right:max(20px,env(safe-area-inset-right))!important;bottom:max(28px,calc(env(safe-area-inset-bottom) + 20px))!important;width:54px!important;height:54px!important}
  html.fp-web-mobile #fpPauseBtn{right:max(10px,env(safe-area-inset-right))!important;top:max(8px,env(safe-area-inset-top))!important;width:46px!important;height:42px!important}
  html.fp-web-mobile #fpGyroBtn{left:50%!important;bottom:max(10px,env(safe-area-inset-bottom))!important;transform:translateX(-50%)!important;height:38px!important;min-width:132px!important;padding:0 12px!important;font-size:11px!important}
  html.fp-web-mobile #fpRecenterBtn{left:50%!important;bottom:max(54px,calc(env(safe-area-inset-bottom) + 46px))!important;transform:translateX(-50%)!important;height:34px!important;padding:0 11px!important;font-size:10px!important}
  html.fp-web-mobile #topbar{left:max(8px,env(safe-area-inset-left))!important;right:max(62px,calc(env(safe-area-inset-right) + 54px))!important;top:max(6px,env(safe-area-inset-top))!important;height:43px!important;padding:5px 8px!important}
  html.fp-web-mobile #brand .logo{width:29px!important;height:29px!important;font-size:16px!important}html.fp-web-mobile #brand h1{font-size:11px!important}html.fp-web-mobile #brand small{display:none!important}
  html.fp-web-mobile .stats .chip{padding:4px 6px!important;font-size:8px!important}.fp-web-mobile .stats .chip:nth-child(2){display:none!important}
  html.fp-web-mobile #mission{left:max(8px,env(safe-area-inset-left))!important;top:max(56px,calc(env(safe-area-inset-top) + 50px))!important;width:min(42vw,225px)!important;padding:8px!important}.fp-web-mobile .missionText{display:none!important}.fp-web-mobile .missionTitle{font-size:11px!important;margin:2px 0!important}
  html.fp-web-mobile #miniMapPanel{right:max(8px,env(safe-area-inset-right))!important;top:max(56px,calc(env(safe-area-inset-top) + 50px))!important;width:138px!important;padding:6px!important}.fp-web-mobile #miniMapCanvas{width:124px!important;height:82px!important}.fp-web-mobile #miniMapLegend{display:none!important}
  html.fp-web-mobile #alignmentPanel{display:grid!important;position:fixed!important;left:max(8px,env(safe-area-inset-left))!important;top:50%!important;bottom:auto!important;transform:translateY(-50%)!important;width:122px!important;max-height:none!important;padding:5px!important;gap:3px!important;z-index:10040!important}
  html.fp-web-mobile #alignmentPanel .alignItem{display:block!important;padding:3px 5px!important;font-size:7px!important;margin:0 0 2px!important}html.fp-web-mobile #alignmentPanel .liveBar{height:3px!important}
  html.fp-web-mobile #cameraHud{position:fixed!important;inset:0!important;width:100vw!important;height:100dvh!important;transform:none!important;display:block!important;pointer-events:none!important}
  html.fp-web-mobile #bottom,html.fp-web-mobile #tips,html.fp-web-mobile #heightControl,html.fp-web-mobile #coveragePanel,html.fp-web-mobile #gallery{display:none!important}
  html.fp-web-mobile #fpMStats span:nth-child(2){display:none!important}
  html.fp-web-mobile #fpGyroPanel{z-index:10100!important}
  @media (orientation:portrait){
    html.fp-web-mobile #fpJoyZone{width:120px!important;height:120px!important}html.fp-web-mobile #fpJoyKnob{left:35px!important;top:35px!important;width:48px!important;height:48px!important}
    html.fp-web-mobile #alignmentPanel{top:auto!important;bottom:150px!important;left:50%!important;transform:translateX(-50%)!important;width:min(84vw,320px)!important;grid-template-columns:1fr 1fr!important}
    html.fp-web-mobile #miniMapPanel{display:none!important}
  }
  @media (orientation:landscape) and (max-height:520px){
    html.fp-web-mobile #topbar{height:37px!important}html.fp-web-mobile #mission{top:47px!important}html.fp-web-mobile #miniMapPanel{top:47px!important}
    html.fp-web-mobile #fpJoyZone{width:112px!important;height:112px!important}html.fp-web-mobile #fpJoyKnob{left:32px!important;top:32px!important;width:46px!important;height:46px!important}
    html.fp-web-mobile #fpPhotoBtn{width:62px!important;height:62px!important;bottom:91px!important}html.fp-web-mobile #fpShootBtn{width:48px!important;height:48px!important}
  }`;
  document.head.appendChild(st);

  function waitControls(){
    var ctr=document.getElementById('fpMobileControls');
    if(!ctr){setTimeout(waitControls,120);return;}
    ctr.style.setProperty('display','block','important');
    document.body.classList.add('fp-playing-mobile');
    setupSensor();
    setupOrientation();
  }

  function setupOrientation(){
    var start=document.getElementById('startBtn');
    if(start&&!start.__fpOrientation){start.__fpOrientation=true;start.addEventListener('click',function(){
      try{if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(function(){});}catch(_){ }
      setTimeout(function(){window.scrollTo(0,0);},100);
    },{passive:true});}
  }

  function setupSensor(){
    var btn=document.getElementById('fpGyroBtn'), rec=document.getElementById('fpRecenterBtn');
    if(!btn||btn.__fpWebFixed)return;
    btn.__fpWebFixed=true;
    var enabled=false,got=0,last=null,zero=true,sy=0,sp=0;
    function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
    function vals(ev){var a=(screen.orientation&&screen.orientation.angle)||window.orientation||0;var pitch=(Math.abs(a)===90)?((a===90?1:-1)*(ev.gamma||0)):(ev.beta||0);return{yaw:ev.alpha||0,pitch:pitch};}
    function onOri(ev){if(!enabled||ev.alpha==null)return;got++;var v=vals(ev);if(zero||!last){last=v;zero=false;return;}var dy=norm(v.yaw-last.yaw),dp=v.pitch-last.pitch;last=v;if(Math.abs(dy)>15||Math.abs(dp)>15)return;sy=sy*.55+dy*.45;sp=sp*.55+dp*.45;}
    function tick(){if(enabled&&got&&typeof window.__fpApplyLook==='function'){window.__fpApplyLook(sy*2.1,sp*1.8);sy*=.62;sp*=.62;}requestAnimationFrame(tick);}tick();
    function set(on){enabled=on;zero=true;last=null;sy=sp=0;got=0;btn.textContent=on?'📱 SENSORES ON':'📱 ATIVAR SENSORES';btn.style.background=on?'rgba(47,185,116,.88)':'';if(rec)rec.style.display=on?'grid':'none';}
    async function enable(e){if(e){e.preventDefault();e.stopPropagation();}try{
      if(typeof DeviceOrientationEvent==='undefined')throw new Error('indisponível');
      if(typeof DeviceOrientationEvent.requestPermission==='function'){var p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}
      if(!enabled){window.addEventListener('deviceorientationabsolute',onOri,true);window.addEventListener('deviceorientation',onOri,true);set(true);}else{window.removeEventListener('deviceorientationabsolute',onOri,true);window.removeEventListener('deviceorientation',onOri,true);set(false);}
    }catch(_){btn.textContent='⚠️ SENSOR BLOQUEADO';}
    }
    var nb=btn.cloneNode(true);btn.replaceWith(nb);btn=nb;btn.__fpWebFixed=true;btn.addEventListener('pointerup',enable,{passive:false});btn.addEventListener('click',enable,{passive:false});
    if(rec){var nr=rec.cloneNode(true);rec.replaceWith(nr);rec=nr;rec.addEventListener('pointerup',function(e){e.preventDefault();zero=true;last=null;sy=sp=0;},{passive:false});}
    var start=document.getElementById('startBtn');
    if(start&&!start.__fpAutoSensor){start.__fpAutoSensor=true;start.addEventListener('click',function(e){if(!enabled)enable(e);},{once:true,capture:true});}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',waitControls,{once:true});else waitControls();
})();
