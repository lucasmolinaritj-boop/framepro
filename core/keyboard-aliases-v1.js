/* FramePro Keyboard Aliases V1 — setas equivalentes a WASD */
(function(){
'use strict';
if(window.__fpKeyboardAliasesV1)return;window.__fpKeyboardAliasesV1=true;
const map={ArrowUp:{code:'KeyW',key:'w',keyCode:87},ArrowDown:{code:'KeyS',key:'s',keyCode:83},ArrowLeft:{code:'KeyA',key:'a',keyCode:65},ArrowRight:{code:'KeyD',key:'d',keyCode:68}};
const active=new Set();
function editable(target){return !!(target&&target.closest&&target.closest('input,textarea,select,[contenteditable="true"],[contenteditable=""]'));}
function emit(type,info){const ev=new KeyboardEvent(type,{code:info.code,key:info.key,bubbles:true,cancelable:true,repeat:type==='keydown'&&active.has(info.code)});try{Object.defineProperties(ev,{keyCode:{value:info.keyCode},which:{value:info.keyCode}});}catch(_){}window.dispatchEvent(ev);document.dispatchEvent(ev);}
function onKey(e){const info=map[e.key];if(!info||editable(e.target))return;if(e.type==='keydown'){e.preventDefault();if(active.has(info.code))return;active.add(info.code);emit('keydown',info);}else{e.preventDefault();if(!active.has(info.code))return;active.delete(info.code);emit('keyup',info);}}
function releaseAll(){for(const code of Array.from(active)){const info=Object.values(map).find(v=>v.code===code);if(info)emit('keyup',info);}active.clear();}
window.addEventListener('keydown',onKey,true);window.addEventListener('keyup',onKey,true);window.addEventListener('blur',releaseAll,true);document.addEventListener('visibilitychange',()=>{if(document.hidden)releaseAll();},true);
})();
