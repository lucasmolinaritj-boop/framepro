/* FramePro Mobile Web v6 — HUD restaurada; estrutura visual sem sensores duplicados */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);
if(!mobile)return;
const html=document.documentElement;
html.classList.add('fp-web-mobile','fp-mobile','fp-mobile-v2','fp-true-mobile','fp-menu-open');
if(!document.getElementById('fp-mobile-web-v6-style')){
 const css=document.createElement('style');css.id='fp-mobile-web-v6-style';css.textContent=`
 html.fp-web-mobile,html.fp-web-mobile body{margin:0!important;width:100%!important;height:100%!important;overflow:hidden!important;touch-action:none!important;background:#000!important}
 html.fp-web-mobile #gameShell{position:fixed!important;inset:0!important;transform:none!important;width:100dvw!important;height:100dvh!important;max-width:none!important;max-height:none!important;aspect-ratio:auto!important;border-radius:0!important}
 html.fp-web-mobile #start{z-index:300000!important;pointer-events:auto!important;overflow:auto!important;touch-action:pan-y!important;padding:8px!important}
 html.fp-web-mobile #start .startCard{z-index:300001!important;pointer-events:auto!important;width:calc(100vw - 16px)!important;max-width:680px!important;margin:auto!important;padding:14px!important}
 html.fp-web-mobile.fp-menu-open #fpMobileV4,html.fp-web-mobile.fp-menu-open #fpFsGameV4{display:none!important}
 html.fp-web-mobile:not(.fp-menu-open) #fpMobileV4{display:block!important}
 #fpMobileV4{position:fixed;inset:0;z-index:100000;display:none;pointer-events:none;touch-action:none}
 .fpJoyV4,.fpBtnV4{pointer-events:auto;touch-action:none;user-select:none;-webkit-user-select:none}
 .fpJoyV4{position:absolute;width:124px;height:124px;border-radius:50%;border:2px solid rgba(255,255,255,.42);background:radial-gradient(circle,rgba(35,58,78,.3),rgba(5,11,18,.42));box-shadow:inset 0 0 24px rgba(0,0,0,.58),0 4px 18px rgba(0,0,0,.34)}
 .fpKnobV4{position:absolute;left:39px;top:39px;width:44px;height:44px;border-radius:50%;background:rgba(86,214,255,.76);border:2px solid rgba(255,255,255,.88);box-shadow:0 3px 15px rgba(0,0,0,.6);will-change:transform}
 #fpMoveV4{left:max(18px,env(safe-area-inset-left));bottom:max(18px,env(safe-area-inset-bottom))}
 #fpLookV4{right:max(104px,calc(env(safe-area-inset-right) + 96px));bottom:max(18px,env(safe-area-inset-bottom));opacity:1!important;pointer-events:auto!important}
 .fpBtnV4{position:absolute;display:grid;place-items:center;border:1px solid rgba(255,255,255,.52);background:rgba(7,15,24,.82);color:#fff;border-radius:12px;font:800 10px system-ui;box-shadow:0 3px 14px rgba(0,0,0,.5)}
 #fpPhotoV4{right:max(18px,env(safe-area-inset-right));bottom:82px;width:68px;height:68px;border-radius:50%;font-size:28px;border:4px solid rgba(255,255,255,.88)}
 #fpPauseV4{right:61px;top:max(7px,env(safe-area-inset-top));width:42px;height:36px;font-size:16px}
 #fpFsGameV4{position:fixed;right:10px;top:max(7px,env(safe-area-inset-top));width:43px;height:36px;z-index:100100;pointer-events:auto}
 #fpSensorV4{left:50%;bottom:max(12px,env(safe-area-inset-bottom));transform:translateX(-50%);min-width:138px;height:35px;padding:0 10px}
 #fpCenterV4{left:50%;bottom:max(53px,calc(env(safe-area-inset-bottom) + 41px));transform:translateX(-50%);min-width:94px;height:30px;padding:0 8px;display:grid}
 #fpLensMinusV4{right:66px;bottom:max(18px,env(safe-area-inset-bottom));width:38px;height:38px;border-radius:50%;font-size:18px}
 #fpLensPlusV4{right:18px;bottom:max(18px,env(safe-area-inset-bottom));width:38px;height:38px;border-radius:50%;font-size:18px}
 #fpRotateGateV4,#fpFsPromptV4{position:fixed;inset:0;z-index:410000;display:none;place-items:center;background:rgba(3,7,12,.96);color:#fff;text-align:center;padding:24px;font:800 18px system-ui;pointer-events:auto}
 html.fp-web-mobile.fp-playing.fp-portrait #fpRotateGateV4{display:grid}
 #fpRotateGateV4 button,#fpFsPromptV4 button,#fpFsMenuV4,#fpHowBtnV4{margin-top:10px;padding:12px 16px;border:0;border-radius:12px;font-weight:900;background:#1777ba;color:#fff}
 #fpFsMenuV4,#fpHowBtnV4{display:block;width:100%}
 #fpHowPanelV4{display:none;margin:8px 0;padding:10px;border-radius:12px;background:rgba(255,255,255,.06);font-size:11px;line-height:1.4;text-align:left}
 html.fp-web-mobile #topbar{position:fixed!important;left:126px!important;right:112px!important;top:max(5px,env(safe-area-inset-top))!important;height:34px!important;max-height:34px!important;overflow:hidden!important;padding:3px 6px!important;z-index:90000!important;background:rgba(5,11,18,.68)!important}
 html.fp-web-mobile #brand{display:none!important}
 html.fp-web-mobile .stats{display:flex!important;align-items:center!important;gap:3px!important;min-width:0!important;overflow:hidden!important}
 html.fp-web-mobile .stats .chip{padding:3px 5px!important;font-size:7.5px!important;line-height:1!important;min-width:0!important;white-space:nowrap!important}
 html.fp-web-mobile .stats .chip:nth-child(2){display:none!important}
 html.fp-web-mobile #exposureHud{position:fixed!important;top:max(43px,calc(env(safe-area-inset-top) + 40px))!important;left:50%!important;transform:translateX(-50%)!important;width:180px!important;min-width:0!important;max-width:calc(100dvw - 250px)!important;padding:4px 6px!important;z-index:90010!important;overflow:hidden!important}
 html.fp-web-mobile #exposureHud .expTitle,html.fp-web-mobile #exposureHud .expAuto{display:none!important}
 html.fp-web-mobile #exposureHud .expLabel{font-size:6px!important}
 html.fp-web-mobile #exposureHud .expValue{font-size:10px!important}
 html.fp-web-mobile #fpHealthHud,html.fp-web-mobile #fpLifeHud,html.fp-web-mobile [id*='HealthHud'],html.fp-web-mobile [id*='healthHud'],html.fp-web-mobile [id*='LifeHud'],html.fp-web-mobile [id*='lifeHud']{position:fixed!important;left:7px!important;top:max(6px,env(safe-area-inset-top))!important;width:112px!important;height:32px!important;max-height:32px!important;padding:4px 6px!important;font-size:8px!important;border-radius:8px!important;z-index:90100!important;overflow:hidden!important}
 html.fp-web-mobile [id*='heart'],html.fp-web-mobile [class*='heart']{max-width:22px!important;max-height:22px!important;font-size:17px!important;line-height:18px!important;white-space:nowrap!important}
 html.fp-web-mobile #mission,html.fp-web-mobile #tips,html.fp-web-mobile #coveragePanel,html.fp-web-mobile #gallery,html.fp-web-mobile #heightControl,html.fp-web-mobile #bottom{display:none!important}
 html.fp-web-mobile #alignmentPanel{position:fixed!important;left:7px!important;top:48px!important;width:105px!important;max-height:calc(100dvh - 220px)!important;padding:4px!important;gap:2px!important;z-index:80000!important;overflow:hidden!important}
 html.fp-web-mobile #alignmentPanel .alignItem{padding:2px 4px!important;font-size:6px!important}
 html.fp-web-mobile #alignmentPanel .liveBar{height:2px!important}
 html.fp-web-mobile #miniMapPanel{position:fixed!important;right:7px!important;top:48px!important;width:108px!important;max-height:78px!important;padding:4px!important;opacity:.66!important;overflow:hidden!important}
 html.fp-web-mobile #miniMapCanvas{width:100px!important;height:67px!important}
 html.fp-web-mobile #miniMapLegend{display:none!important}
 @media(orientation:portrait){html.fp-web-mobile.fp-playing #gameShell{visibility:hidden!important}}
 `;document.head.appendChild(css);
}
function key(code,down){window.dispatchEvent(new KeyboardEvent(down?'keydown':'keyup',{code,key:code.replace('Key','').toLowerCase(),bubbles:true}));}
function clickAny(ids){for(const id of ids){const el=document.getElementById(id);if(el){el.click();return true;}}return false;}
async function fullscreen(){try{if(!document.fullscreenElement&&document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen({navigationUI:'hide'});}catch(_){}try{if(screen.orientation&&screen.orientation.lock)await screen.orientation.lock('landscape');}catch(_){}updateOrientation();updateFsPrompt();}
function updateOrientation(){html.classList.toggle('fp-portrait',innerHeight>innerWidth);}addEventListener('resize',updateOrientation);addEventListener('orientationchange',()=>setTimeout(updateOrientation,180));updateOrientation();
function ensureOverlay(id,htmlText){let el=document.getElementById(id);if(!el){el=document.createElement('div');el.id=id;el.innerHTML=htmlText;document.body.appendChild(el);}return el;}
const rotate=ensureOverlay('fpRotateGateV4','<div><div style="font-size:64px">📱↻</div><div>Gire o celular para jogar na horizontal.</div><button id="fpRotateFsV4">TELA CHEIA</button></div>');
const fsPrompt=ensureOverlay('fpFsPromptV4','<div><div style="font-size:52px">⛶</div><div>Esta fase funciona melhor em tela cheia.</div><button id="fpFsPromptBtnV4">ENTRAR EM TELA CHEIA</button></div>');
function updateFsPrompt(){const playing=html.classList.contains('fp-playing');fsPrompt.style.display=playing&&!document.fullscreenElement?'grid':'none';}document.addEventListener('fullscreenchange',updateFsPrompt);
function makeJoy(id){const j=document.createElement('div');j.id=id;j.className='fpJoyV4';j.innerHTML='<div class="fpKnobV4"></div>';return j;}
function build(){if(document.getElementById('fpMobileV4'))return;const c=document.createElement('div');c.id='fpMobileV4';c.append(makeJoy('fpMoveV4'),makeJoy('fpLookV4'));c.insertAdjacentHTML('beforeend','<button class="fpBtnV4" id="fpPhotoV4">📷</button><button class="fpBtnV4" id="fpPauseV4">Ⅱ</button><button class="fpBtnV4" id="fpSensorV4">📱 ATIVAR SENSORES</button><button class="fpBtnV4" id="fpCenterV4">⟳ CENTRALIZAR VISÃO</button><button class="fpBtnV4" id="fpLensMinusV4">−</button><button class="fpBtnV4" id="fpLensPlusV4">＋</button>');document.body.appendChild(c);document.getElementById('fpPhotoV4').onclick=()=>clickAny(['captureBtn','fpPhotoBtn','mobileCaptureBtn']);document.getElementById('fpPauseV4').onclick=()=>{key('Escape',true);setTimeout(()=>key('Escape',false),30)};const wheel=d=>(document.querySelector('canvas')||document.body).dispatchEvent(new WheelEvent('wheel',{deltaY:d,altKey:true,bubbles:true,cancelable:true}));document.getElementById('fpLensMinusV4').onclick=()=>wheel(120);document.getElementById('fpLensPlusV4').onclick=()=>wheel(-120);window.dispatchEvent(new CustomEvent('fp-mobile-ui-built'));}
function selectFolder(){setTimeout(()=>{if(!clickAny(['folderBtn'])&&window.showDirectoryPicker)window.showDirectoryPicker().then(h=>window.FRAMEPRO_PHOTO_DIRECTORY=h).catch(()=>{});},350);}
function menuState(){const s=document.getElementById('start');const open=!!s&&getComputedStyle(s).display!=='none'&&s.offsetParent!==null;html.classList.toggle('fp-menu-open',open);html.classList.toggle('fp-playing',!open);if(!open)updateFsPrompt();}
function bind(){build();const card=document.querySelector('#start .startCard');if(card&&!document.getElementById('fpHowBtnV4')){const how=document.createElement('button');how.id='fpHowBtnV4';how.textContent='❓ COMO JOGAR';const panel=document.createElement('div');panel.id='fpHowPanelV4';panel.innerHTML='<b>Controles mobile</b><br>• Joystick esquerdo: andar.<br>• Joystick direito: olhar.<br>• Sensor: ajuste fino da câmera.<br>• 📷 tira a foto.<br>• − e + alteram a lente.<br>• Jogue com o celular na horizontal.';how.onclick=e=>{e.preventDefault();panel.style.display=panel.style.display==='block'?'none':'block';};card.insertBefore(how,card.querySelector('.startActions')||null);card.insertBefore(panel,card.querySelector('.startActions')||null);}if(card&&!document.getElementById('fpFsMenuV4')){const b=document.createElement('button');b.id='fpFsMenuV4';b.textContent='⛶ JOGAR EM TELA CHEIA';b.onclick=e=>{e.preventDefault();fullscreen();};card.insertBefore(b,card.querySelector('.startActions')||null);}if(!document.getElementById('fpFsGameV4')){const b=document.createElement('button');b.id='fpFsGameV4';b.className='fpBtnV4';b.textContent='⛶';b.onclick=fullscreen;document.body.appendChild(b);}const start=document.getElementById('startBtn');if(start&&!start.__v6){start.__v6=1;start.addEventListener('click',()=>{fullscreen();selectFolder();},true);}const r=document.getElementById('fpRotateFsV4');if(r)r.onclick=fullscreen;const p=document.getElementById('fpFsPromptBtnV4');if(p)p.onclick=fullscreen;menuState();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();setInterval(bind,500);const start=document.getElementById('start');if(start)new MutationObserver(menuState).observe(start,{attributes:true,attributeFilter:['style','class']});
})();