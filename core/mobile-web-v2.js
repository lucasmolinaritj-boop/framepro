/* FramePro Mobile Web V2 */
(function(){
  'use strict';
  var mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'') || (window.matchMedia&&matchMedia('(pointer:coarse)').matches);
  if(!mobile)return;
  document.documentElement.classList.add('fp-web-mobile','fp-true-mobile');

  var style=document.createElement('style');
  style.textContent=`
  html.fp-web-mobile,html.fp-web-mobile body{margin:0!important;width:100%!important;height:100%!important;overflow:hidden!important;background:#000!important;touch-action:none!important;overscroll-behavior:none!important}
  html.fp-web-mobile #gameShell{position:fixed!important;inset:0!important;left:0!important;top:0!important;transform:none!important;width:100dvw!important;height:100dvh!important;max-width:none!important;max-height:none!important;aspect-ratio:auto!important;border-radius:0!important;box-shadow:none!important}
  html.fp-web-mobile #gameShell canvas{width:100%!important;height:100%!important;touch-action:none!important}
  html.fp-web-mobile #bottom,html.fp-web-mobile #tips,html.fp-web-mobile #heightControl,html.fp-web-mobile #coveragePanel,html.fp-web-mobile #gallery{display:none!important}
  html.fp-web-mobile #topbar{left:8px!important;right:58px!important;top:6px!important;height:38px!important;padding:4px 7px!important}
  html.fp-web-mobile #brand .logo{width:28px!important;height:28px!important;font-size:15px!important}html.fp-web-mobile #brand h1{font-size:10px!important}html.fp-web-mobile #brand small{display:none!important}
  html.fp-web-mobile .stats .chip{padding:3px 5px!important;font-size:8px!important}.fp-web-mobile .stats .chip:nth-child(2){display:none!important}
  html.fp-web-mobile #mission{left:7px!important;top:50px!important;width:184px!important;padding:7px!important}.fp-web-mobile .missionText{display:none!important}.fp-web-mobile .missionTitle{font-size:10px!important;margin:1px 0!important}
  html.fp-web-mobile #miniMapPanel{right:7px!important;top:50px!important;width:122px!important;padding:5px!important}.fp-web-mobile #miniMapCanvas{width:110px!important;height:74px!important}.fp-web-mobile #miniMapLegend{display:none!important}.fp-web-mobile .miniHead{font-size:10px!important}
  html.fp-web-mobile #alignmentPanel{display:grid!important;position:fixed!important;left:7px!important;top:126px!important;bottom:auto!important;transform:none!important;width:116px!important;padding:4px!important;gap:2px!important;z-index:6900!important}
  html.fp-web-mobile #alignmentPanel .alignItem{display:block!important;padding:3px 4px!important;font-size:7px!important;margin:0!important}html.fp-web-mobile #alignmentPanel .alignTop{margin-bottom:1px!important}html.fp-web-mobile #alignmentPanel .liveBar{height:3px!important}
  #fpWebMobileUI{position:fixed;inset:0;z-index:30000;pointer-events:none;font-family:Inter,Segoe UI,Arial,sans-serif}
  #fpWebJoy{position:absolute;left:max(16px,env(safe-area-inset-left));bottom:max(16px,env(safe-area-inset-bottom));width:126px;height:126px;border-radius:50%;background:rgba(8,15,25,.48);border:2px solid rgba(255,255,255,.48);box-shadow:0 4px 25px rgba(0,0,0,.55),inset 0 0 25px rgba(86,214,255,.16);pointer-events:auto;touch-action:none}
  #fpWebJoy:before{content:'ANDAR';position:absolute;left:0;right:0;top:-17px;text-align:center;font-size:9px;font-weight:900;color:#fff;letter-spacing:.12em;text-shadow:0 2px 4px #000}
  #fpWebJoyKnob{position:absolute;left:37px;top:37px;width:50px;height:50px;border-radius:50%;background:rgba(86,214,255,.9);border:2px solid #fff;box-shadow:0 0 20px rgba(86,214,255,.7)}
  #fpWebLook{position:absolute;left:34%;right:0;top:44px;bottom:0;pointer-events:auto;touch-action:none}
  .fpWebBtn{position:absolute;display:grid;place-items:center;border:1px solid rgba(255,255,255,.55);background:rgba(8,15,25,.8);color:#fff;border-radius:15px;font-weight:900;box-shadow:0 4px 18px rgba(0,0,0,.55);pointer-events:auto;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
  #fpWebPhoto{right:max(18px,env(safe-area-inset-right));bottom:max(86px,calc(env(safe-area-inset-bottom) + 78px));width:68px;height:68px;border-radius:50%;font-size:28px;background:rgba(27,119,167,.9)}
  #fpWebSensor{left:50%;bottom:max(12px,env(safe-area-inset-bottom));transform:translateX(-50%);height:40px;min-width:150px;padding:0 13px;font-size:10px}
  #fpWebRecenter{left:50%;bottom:max(58px,calc(env(safe-area-inset-bottom) + 50px));transform:translateX(-50%);height:34px;padding:0 11px;font-size:10px;display:none}
  #fpWebFull{right:max(10px,env(safe-area-inset-right));top:max(7px,env(safe-area-inset-top));width:43px;height:38px;font-size:18px}
  #fpRotateGate{position:fixed;inset:0;z-index:50000;display:none;place-items:center;background:#05090f;color:#fff;text-align:center;padding:28px;pointer-events:auto}
  #fpRotateGate .phone{font-size:70px;animation:fpRotate 1.5s ease-in-out infinite}#fpRotateGate h2{margin:12px 0 6px}#fpRotateGate p{color:#b7c7d8;line-height:1.45}#fpRotateGate button{padding:13px 18px;border:0;border-radius:12px;background:#56d6ff;color:#04101a;font-weight:900}
  @keyframes fpRotate{0%,100%{transform:rotate(0)}50%{transform:rotate(90deg)}}
  @media(orientation:portrait){#fpRotateGate{display:grid!important}}
  @media(orientation:landscape) and (max-height:520px){#fpWebJoy{width:112px;height:112px}#fpWebJoyKnob{left:33px;top:33px;width:44px;height:44px}#fpWebPhoto{width:60px;height:60px;bottom:72px}}
  `;
  document.head.appendChild(style);

  var ui=document.createElement('div');
  ui.id='fpWebMobileUI';
  ui.innerHTML='<div id="fpWebLook"></div><div id="fpWebJoy"><div id="fpWebJoyKnob"></div></div><button id="fpWebPhoto" class="fpWebBtn" aria-label="Fotografar">📸</button><button id="fpWebSensor" class="fpWebBtn">📱 ATIVAR SENSORES</button><button id="fpWebRecenter" class="fpWebBtn">◎ RECENTRALIZAR</button><button id="fpWebFull" class="fpWebBtn" aria-label="Tela cheia">⛶</button>';
  document.body.appendChild(ui);

  var gate=document.createElement('div');
  gate.id='fpRotateGate';
  gate.innerHTML='<div><div class="phone">📱</div><h2>Gire o celular</h2><p>O FramePro funciona no celular somente na horizontal.</p><button id="fpRotateBtn">GIRAR E ENTRAR EM TELA CHEIA</button></div>';
  document.body.appendChild(gate);

  function kd(code,down){
    var key=code==='KeyW'?'w':code==='KeyA'?'a':code==='KeyS'?'s':'d';
    document.dispatchEvent(new KeyboardEvent(down?'keydown':'keyup',{code:code,key:key,bubbles:true}));
    window.dispatchEvent(new KeyboardEvent(down?'keydown':'keyup',{code:code,key:key,bubbles:true}));
  }
  var state={KeyW:false,KeyA:false,KeyS:false,KeyD:false};
  function setKey(code,on){if(state[code]===on)return;state[code]=on;kd(code,on)}
  function stopMove(){Object.keys(state).forEach(function(k){setKey(k,false)});var knob=document.getElementById('fpWebJoyKnob');if(knob)knob.style.transform='translate(0,0)'}

  var joy=document.getElementById('fpWebJoy'),knob=document.getElementById('fpWebJoyKnob'),joyId=null;
  function moveJoy(e){var r=joy.getBoundingClientRect(),x=e.clientX-(r.left+r.width/2),y=e.clientY-(r.top+r.height/2),max=r.width*.32,len=Math.hypot(x,y)||1;if(len>max){x=x/len*max;y=y/len*max}knob.style.transform='translate('+x+'px,'+y+'px)';var t=.24;setKey('KeyW',y<-max*t);setKey('KeyS',y>max*t);setKey('KeyA',x<-max*t);setKey('KeyD',x>max*t)}
  joy.addEventListener('pointerdown',function(e){joyId=e.pointerId;joy.setPointerCapture(e.pointerId);moveJoy(e);e.preventDefault()},{passive:false});
  joy.addEventListener('pointermove',function(e){if(e.pointerId===joyId)moveJoy(e)},{passive:false});
  ['pointerup','pointercancel','lostpointercapture'].forEach(function(n){joy.addEventListener(n,function(){joyId=null;stopMove()},{passive:false})});

  var look=document.getElementById('fpWebLook'),lookId=null,lx=0,ly=0;
  look.addEventListener('pointerdown',function(e){lookId=e.pointerId;lx=e.clientX;ly=e.clientY;look.setPointerCapture(e.pointerId);e.preventDefault()},{passive:false});
  look.addEventListener('pointermove',function(e){if(e.pointerId!==lookId)return;var dx=e.clientX-lx,dy=e.clientY-ly;lx=e.clientX;ly=e.clientY;if(typeof window.__fpApplyLook==='function')window.__fpApplyLook(dx*.75,dy*.75);else document.dispatchEvent(new MouseEvent('mousemove',{movementX:dx,movementY:dy,bubbles:true}));e.preventDefault()},{passive:false});
  ['pointerup','pointercancel','lostpointercapture'].forEach(function(n){look.addEventListener(n,function(){lookId=null})});

  document.getElementById('fpWebPhoto').addEventListener('click',function(){var b=document.getElementById('captureBtn')||document.querySelector('.capture')||document.getElementById('fpPhotoBtn');if(b)b.click();else{document.dispatchEvent(new KeyboardEvent('keydown',{code:'Space',key:' ',bubbles:true}));document.dispatchEvent(new KeyboardEvent('keyup',{code:'Space',key:' ',bubbles:true}))}});

  async function fullscreenLandscape(){try{var el=document.documentElement;if(!document.fullscreenElement&&el.requestFullscreen)await el.requestFullscreen({navigationUI:'hide'});}catch(e){}try{if(screen.orientation&&screen.orientation.lock)await screen.orientation.lock('landscape');}catch(e){}window.scrollTo(0,0)}
  document.getElementById('fpWebFull').addEventListener('click',fullscreenLandscape);
  document.getElementById('fpRotateBtn').addEventListener('click',fullscreenLandscape);
  var start=document.getElementById('startBtn');if(start)start.addEventListener('click',fullscreenLandscape,{capture:true});

  var sensorBtn=document.getElementById('fpWebSensor'),rec=document.getElementById('fpWebRecenter');
  var sensorOn=false,base=null,last=null,sx=0,sy=0;
  function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v}
  function ori(e){if(!sensorOn||e.alpha==null)return;var a=(screen.orientation&&screen.orientation.angle)||window.orientation||0;var p=Math.abs(a)===90?((a===90?1:-1)*(e.gamma||0)):(e.beta||0);var now={y:e.alpha||0,p:p};if(!last){last=now;base=now;return}var dy=norm(now.y-last.y),dp=now.p-last.p;last=now;if(Math.abs(dy)>18||Math.abs(dp)>18)return;sx=sx*.5+dy*.5;sy=sy*.5+dp*.5}
  function tick(){if(sensorOn&&typeof window.__fpApplyLook==='function'){window.__fpApplyLook(sx*2.3,sy*2);sx*=.58;sy*=.58}requestAnimationFrame(tick)}tick();
  async function toggleSensor(e){e.preventDefault();e.stopPropagation();try{if(typeof DeviceOrientationEvent==='undefined')throw Error();if(typeof DeviceOrientationEvent.requestPermission==='function'){var p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw Error()}sensorOn=!sensorOn;if(sensorOn){window.addEventListener('deviceorientationabsolute',ori,true);window.addEventListener('deviceorientation',ori,true);sensorBtn.textContent='📱 SENSORES ON';sensorBtn.style.background='rgba(47,185,116,.92)';rec.style.display='grid';last=null}else{window.removeEventListener('deviceorientationabsolute',ori,true);window.removeEventListener('deviceorientation',ori,true);sensorBtn.textContent='📱 ATIVAR SENSORES';sensorBtn.style.background='';rec.style.display='none'}}catch(err){sensorBtn.textContent='⚠️ SENSOR BLOQUEADO'}}
  sensorBtn.addEventListener('click',toggleSensor,{passive:false});
  rec.addEventListener('click',function(e){e.preventDefault();last=null;base=null;sx=sy=0});

  window.addEventListener('blur',stopMove);
})();