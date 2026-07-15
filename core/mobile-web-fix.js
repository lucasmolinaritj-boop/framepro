/* FramePro Mobile Web V2 — HUD limpo, controles e sensores */
(function(){
  'use strict';
  var mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'') || (window.matchMedia&&matchMedia('(pointer:coarse)').matches);
  if(!mobile)return;
  document.documentElement.classList.add('fp-web-mobile','fp-mobile','fp-mobile-v2','fp-true-mobile');

  var css=document.createElement('style');
  css.id='fp-mobile-web-v2-style';
  css.textContent=`
  html.fp-web-mobile,html.fp-web-mobile body{margin:0!important;width:100%!important;height:100%!important;overflow:hidden!important;overscroll-behavior:none!important;touch-action:none!important;background:#000!important}
  html.fp-web-mobile #gameShell{position:fixed!important;inset:0!important;left:0!important;top:0!important;transform:none!important;width:100dvw!important;height:100dvh!important;max-width:none!important;max-height:none!important;aspect-ratio:auto!important;border-radius:0!important;box-shadow:none!important}
  html.fp-web-mobile #gameShell canvas{width:100%!important;height:100%!important;touch-action:none!important}

  /* topo pequeno e sem cobrir a visão */
  html.fp-web-mobile #topbar{position:fixed!important;left:6px!important;right:6px!important;top:max(4px,env(safe-area-inset-top))!important;height:34px!important;min-height:34px!important;padding:3px 7px!important;border-radius:9px!important;background:rgba(5,11,18,.72)!important;z-index:10040!important}
  html.fp-web-mobile #brand{display:none!important}
  html.fp-web-mobile .stats{width:100%!important;display:flex!important;justify-content:flex-start!important;gap:4px!important;overflow:hidden!important}
  html.fp-web-mobile .stats .chip{padding:3px 6px!important;font-size:8px!important;line-height:1.15!important;border-radius:6px!important;white-space:nowrap!important}
  html.fp-web-mobile .stats .chip:nth-child(2){display:none!important}
  html.fp-web-mobile #mapSelect{margin-left:auto!important;max-width:115px!important;height:25px!important;font-size:8px!important;padding:1px 4px!important}

  html.fp-web-mobile #exposureHud{position:fixed!important;left:50%!important;top:max(42px,calc(env(safe-area-inset-top) + 40px))!important;transform:translateX(-50%)!important;min-width:0!important;width:auto!important;padding:4px 7px!important;border-radius:8px!important;background:rgba(4,10,17,.69)!important;z-index:10035!important}
  html.fp-web-mobile #exposureHud .expTitle,html.fp-web-mobile #exposureHud .expAuto{display:none!important}
  html.fp-web-mobile #exposureHud .expValues{gap:8px!important}
  html.fp-web-mobile #exposureHud .expCell{flex:none!important;min-width:46px!important;text-align:center!important}
  html.fp-web-mobile #exposureHud .expLabel{font-size:6px!important;letter-spacing:.08em!important}
  html.fp-web-mobile #exposureHud .expValue{font-size:11px!important;line-height:1!important}
  html.fp-web-mobile #exposureHud .expValue small{font-size:7px!important}

  /* barra de vida compacta no alto */
  html.fp-web-mobile #fpHealth,html.fp-web-mobile #fpHealthBar,html.fp-web-mobile #healthBar,html.fp-web-mobile #lifeBar,html.fp-web-mobile [id*='Health'],html.fp-web-mobile [id*='health'],html.fp-web-mobile [id*='Life'],html.fp-web-mobile [id*='life']{max-height:26px!important;font-size:8px!important;z-index:10038!important}
  html.fp-web-mobile #fpHealthHud,html.fp-web-mobile #fpLifeHud{position:fixed!important;left:8px!important;top:max(43px,calc(env(safe-area-inset-top) + 40px))!important;width:112px!important;padding:4px 6px!important;border-radius:8px!important}
  html.fp-web-mobile #fpHealthHud .bar,html.fp-web-mobile #fpLifeHud .bar{height:6px!important}

  /* limpa o centro */
  html.fp-web-mobile #mission,html.fp-web-mobile #tips,html.fp-web-mobile #coveragePanel,html.fp-web-mobile #gallery,html.fp-web-mobile #heightControl,html.fp-web-mobile #bottom{display:none!important}
  html.fp-web-mobile #miniMapPanel{position:fixed!important;right:7px!important;top:max(43px,calc(env(safe-area-inset-top) + 40px))!important;width:112px!important;padding:4px!important;opacity:.76!important;z-index:10030!important}
  html.fp-web-mobile #miniMapPanel .miniHead{font-size:7px!important;margin-bottom:2px!important}
  html.fp-web-mobile #miniMapCanvas{width:104px!important;height:70px!important}
  html.fp-web-mobile #miniMapLegend{display:none!important}
  html.fp-web-mobile #alignmentPanel{position:fixed!important;left:7px!important;top:78px!important;bottom:auto!important;width:102px!important;padding:4px!important;gap:2px!important;z-index:10028!important;background:rgba(6,12,20,.5)!important}
  html.fp-web-mobile #alignmentPanel .alignItem{display:block!important;padding:2px 4px!important;margin:0!important;font-size:6.5px!important;border-radius:5px!important;background:rgba(255,255,255,.035)!important}
  html.fp-web-mobile #alignmentPanel .alignTop{margin-bottom:1px!important}
  html.fp-web-mobile #alignmentPanel .liveBar{height:2px!important}
  html.fp-web-mobile #cameraHud{position:fixed!important;inset:0!important;width:100dvw!important;height:100dvh!important;display:block!important;pointer-events:none!important}
  html.fp-web-mobile #lensInfo{right:7px!important;bottom:7px!important;padding:4px 6px!important;font-size:7px!important;border-radius:7px!important;opacity:.7!important}
  html.fp-web-mobile #lensInfo b{font-size:11px!important}

  /* menu inicial e Como jogar */
  html.fp-web-mobile #start{padding:7px!important;overflow:auto!important;touch-action:pan-y!important}
  html.fp-web-mobile .startCard{width:calc(100vw - 14px)!important;max-width:620px!important;padding:14px!important;margin:auto!important;overflow:visible!important}
  html.fp-web-mobile .startCard h2{font-size:20px!important;margin:4px 0 7px!important}
  html.fp-web-mobile .startCard>p{font-size:11px!important;line-height:1.35!important}
  html.fp-web-mobile .how{display:grid!important;grid-template-columns:1fr!important;gap:5px!important;margin:10px 0!important}
  html.fp-web-mobile .how div{display:block!important;padding:8px!important}
  html.fp-web-mobile .how b{font-size:11px!important;margin-bottom:2px!important}
  html.fp-web-mobile .how span{font-size:9px!important;line-height:1.25!important}
  html.fp-web-mobile .gameOpts{display:grid!important;grid-template-columns:1fr 1fr!important;gap:5px!important}
  html.fp-web-mobile .gameOpt{font-size:9px!important;padding:6px!important}
  html.fp-web-mobile .gameOpt small{font-size:7px!important}

  /* controles criados pela camada web */
  #fpWebMobileControls{position:fixed;inset:0;z-index:10100;pointer-events:none;touch-action:none}
  #fpWebLook{position:absolute;left:34%;right:0;top:72px;bottom:0;pointer-events:auto;touch-action:none}
  #fpWebJoy{position:absolute;left:max(14px,env(safe-area-inset-left));bottom:max(14px,env(safe-area-inset-bottom));width:112px;height:112px;border-radius:50%;border:2px solid rgba(255,255,255,.36);background:rgba(8,15,24,.34);box-shadow:inset 0 0 18px rgba(0,0,0,.45);pointer-events:auto;touch-action:none}
  #fpWebJoyKnob{position:absolute;left:34px;top:34px;width:42px;height:42px;border-radius:50%;background:rgba(91,218,255,.65);border:2px solid rgba(255,255,255,.72);box-shadow:0 2px 13px rgba(0,0,0,.55);transform:translate(0,0)}
  .fpWebBtn{position:absolute;display:grid;place-items:center;border:1px solid rgba(255,255,255,.5);background:rgba(8,16,25,.68);color:#fff;border-radius:50%;font:800 12px system-ui;pointer-events:auto;touch-action:manipulation;user-select:none;-webkit-user-select:none;box-shadow:0 3px 14px rgba(0,0,0,.45)}
  #fpWebPhoto{right:max(17px,env(safe-area-inset-right));bottom:max(75px,calc(env(safe-area-inset-bottom) + 68px));width:64px;height:64px;font-size:26px;border:4px solid rgba(255,255,255,.82)}
  #fpWebPause{right:max(12px,env(safe-area-inset-right));top:max(8px,env(safe-area-inset-top));width:38px;height:34px;border-radius:9px;z-index:10110}
  #fpWebSensor{left:50%;bottom:max(10px,env(safe-area-inset-bottom));transform:translateX(-50%);width:auto;min-width:120px;height:34px;padding:0 10px;border-radius:10px;font-size:9px}
  #fpWebCenter{left:50%;bottom:max(49px,calc(env(safe-area-inset-bottom) + 41px));transform:translateX(-50%);width:auto;min-width:82px;height:29px;padding:0 8px;border-radius:9px;font-size:8px;display:none}
  #fpWebLensMinus{right:max(87px,calc(env(safe-area-inset-right) + 78px));bottom:max(22px,env(safe-area-inset-bottom));width:38px;height:38px}
  #fpWebLensPlus{right:max(40px,calc(env(safe-area-inset-right) + 31px));bottom:max(22px,env(safe-area-inset-bottom));width:38px;height:38px}
  #fpWebHeight{right:max(18px,env(safe-area-inset-right));bottom:max(22px,env(safe-area-inset-bottom));width:38px;height:38px;font-size:10px}

  @media (orientation:portrait){
    html.fp-web-mobile #miniMapPanel{display:none!important}
    html.fp-web-mobile #alignmentPanel{top:auto!important;left:50%!important;bottom:132px!important;transform:translateX(-50%)!important;width:min(86vw,330px)!important;grid-template-columns:repeat(5,1fr)!important}
    #fpWebLook{left:0;top:70px;bottom:140px}
    #fpWebJoy{width:104px;height:104px}#fpWebJoyKnob{left:31px;top:31px;width:40px;height:40px}
  }
  `;
  document.head.appendChild(css);

  function fireKey(code,down){window.dispatchEvent(new KeyboardEvent(down?'keydown':'keyup',{code:code,key:code.replace('Key','').toLowerCase(),bubbles:true}));}
  function clickFirst(ids){for(var i=0;i<ids.length;i++){var e=document.getElementById(ids[i]);if(e){e.click();return true;}}return false;}

  function buildControls(){
    if(document.getElementById('fpWebMobileControls'))return;
    var root=document.createElement('div');root.id='fpWebMobileControls';
    root.innerHTML='<div id="fpWebLook"></div><div id="fpWebJoy"><div id="fpWebJoyKnob"></div></div><button class="fpWebBtn" id="fpWebPhoto">📷</button><button class="fpWebBtn" id="fpWebPause">Ⅱ</button><button class="fpWebBtn" id="fpWebSensor">📱 ATIVAR SENSORES</button><button class="fpWebBtn" id="fpWebCenter">CENTRALIZAR</button><button class="fpWebBtn" id="fpWebLensMinus">−</button><button class="fpWebBtn" id="fpWebLensPlus">＋</button><button class="fpWebBtn" id="fpWebHeight">1,40</button>';
    document.body.appendChild(root);

    var joy=root.querySelector('#fpWebJoy'),knob=root.querySelector('#fpWebJoyKnob'),pid=null,active={KeyW:false,KeyA:false,KeyS:false,KeyD:false};
    function keys(nx,ny){var next={KeyW:ny<-.22,KeyS:ny>.22,KeyA:nx<-.22,KeyD:nx>.22};Object.keys(next).forEach(function(k){if(next[k]!==active[k]){active[k]=next[k];fireKey(k,next[k]);}});}
    function move(e){if(pid!==e.pointerId)return;var r=joy.getBoundingClientRect(),x=e.clientX-(r.left+r.width/2),y=e.clientY-(r.top+r.height/2),max=r.width*.31,len=Math.hypot(x,y)||1;if(len>max){x=x/len*max;y=y/len*max;}knob.style.transform='translate('+x+'px,'+y+'px)';keys(x/max,y/max);e.preventDefault();}
    function end(e){if(pid!==e.pointerId)return;pid=null;knob.style.transform='translate(0,0)';keys(0,0);Object.keys(active).forEach(function(k){if(active[k]){active[k]=false;fireKey(k,false);}});}
    joy.addEventListener('pointerdown',function(e){pid=e.pointerId;joy.setPointerCapture(pid);move(e);},{passive:false});joy.addEventListener('pointermove',move,{passive:false});joy.addEventListener('pointerup',end,{passive:false});joy.addEventListener('pointercancel',end,{passive:false});

    var look=root.querySelector('#fpWebLook'),lookId=null,lx=0,ly=0;
    look.addEventListener('pointerdown',function(e){lookId=e.pointerId;lx=e.clientX;ly=e.clientY;look.setPointerCapture(lookId);},{passive:false});
    look.addEventListener('pointermove',function(e){if(e.pointerId!==lookId)return;var dx=e.clientX-lx,dy=e.clientY-ly;lx=e.clientX;ly=e.clientY;if(typeof window.__fpApplyLook==='function')window.__fpApplyLook(dx*.75,dy*.65);e.preventDefault();},{passive:false});
    function stopLook(e){if(e.pointerId===lookId)lookId=null;}look.addEventListener('pointerup',stopLook);look.addEventListener('pointercancel',stopLook);

    root.querySelector('#fpWebPhoto').addEventListener('click',function(){clickFirst(['captureBtn','fpPhotoBtn','mobileCaptureBtn']);});
    root.querySelector('#fpWebPause').addEventListener('click',function(){fireKey('Escape',true);setTimeout(function(){fireKey('Escape',false);},30);});
    root.querySelector('#fpWebHeight').addEventListener('click',function(){var s=document.getElementById('heightSlider');if(s){s.value='1.40';s.dispatchEvent(new Event('input',{bubbles:true}));s.dispatchEvent(new Event('change',{bubbles:true}));}else clickFirst(['idealHeightBtn']);});
    function wheel(delta){var target=document.querySelector('canvas')||document.body;target.dispatchEvent(new WheelEvent('wheel',{deltaY:delta,altKey:true,bubbles:true,cancelable:true}));}
    root.querySelector('#fpWebLensMinus').addEventListener('click',function(){wheel(120);});root.querySelector('#fpWebLensPlus').addEventListener('click',function(){wheel(-120);});
    setupSensor(root.querySelector('#fpWebSensor'),root.querySelector('#fpWebCenter'));
  }

  function setupSensor(btn,center){
    var enabled=false,last=null,zero=true,sy=0,sp=0,listening=false;
    function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
    function onOri(ev){if(!enabled||ev.alpha==null)return;var angle=(screen.orientation&&screen.orientation.angle)||window.orientation||0,pitch=Math.abs(angle)===90?((angle===90?1:-1)*(ev.gamma||0)):(ev.beta||0),v={yaw:ev.alpha||0,pitch:pitch};if(zero||!last){last=v;zero=false;return;}var dy=norm(v.yaw-last.yaw),dp=v.pitch-last.pitch;last=v;if(Math.abs(dy)>20||Math.abs(dp)>20)return;sy=sy*.45+dy*.55;sp=sp*.45+dp*.55;}
    function tick(){if(enabled&&typeof window.__fpApplyLook==='function'){window.__fpApplyLook(sy*2.2,sp*1.8);sy*=.55;sp*=.55;}requestAnimationFrame(tick);}tick();
    async function toggle(e){e.preventDefault();e.stopPropagation();try{if(typeof DeviceOrientationEvent==='undefined')throw new Error();if(typeof DeviceOrientationEvent.requestPermission==='function'){var p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error();}if(!listening){window.addEventListener('deviceorientationabsolute',onOri,true);window.addEventListener('deviceorientation',onOri,true);listening=true;}enabled=!enabled;zero=true;last=null;sy=sp=0;btn.textContent=enabled?'📱 SENSORES ON':'📱 ATIVAR SENSORES';btn.style.background=enabled?'rgba(34,170,96,.85)':'';center.style.display=enabled?'grid':'none';}catch(_){btn.textContent='⚠️ SENSOR BLOQUEADO';}}
    btn.addEventListener('pointerup',toggle,{passive:false});
    center.addEventListener('pointerup',function(e){e.preventDefault();zero=true;last=null;sy=sp=0;},{passive:false});
  }

  function restoreHowTo(){var start=document.getElementById('start');if(!start)return;var card=start.querySelector('.startCard');if(!card)return;var how=card.querySelector('.how');if(!how){how=document.createElement('div');how.className='how';how.innerHTML='<div><b>1. Ande pelo imóvel</b><span>Use o joystick esquerdo para caminhar.</span></div><div><b>2. Olhe e alinhe</b><span>Arraste o lado direito da tela ou ative os sensores.</span></div><div><b>3. Fotografe</b><span>Use o botão de câmera; ajuste lente com − e +.</span></div>';var p=card.querySelector('p');if(p)p.after(how);else card.prepend(how);}how.style.setProperty('display','grid','important');}

  function init(){restoreHowTo();buildControls();try{if(screen.orientation&&screen.orientation.lock){var s=document.getElementById('startBtn');if(s&&!s.__fpLock){s.__fpLock=true;s.addEventListener('click',function(){screen.orientation.lock('landscape').catch(function(){});});}}}catch(_){}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  setTimeout(init,500);setTimeout(init,1600);
})();