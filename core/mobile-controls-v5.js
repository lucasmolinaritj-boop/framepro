/* FramePro Mobile Controls V5 — eixos corretos e sem controles duplicados */
(function(){
  'use strict';
  const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);
  if(!mobile)return;

  function key(code,down){
    const keyName={KeyW:'w',KeyA:'a',KeyS:'s',KeyD:'d'}[code]||code;
    const opts={code,key:keyName,bubbles:true,cancelable:true};
    window.dispatchEvent(new KeyboardEvent(down?'keydown':'keyup',opts));
    document.dispatchEvent(new KeyboardEvent(down?'keydown':'keyup',opts));
  }

  function applyLook(dx,dy){
    if(!Number.isFinite(dx)||!Number.isFinite(dy))return;
    if(typeof window.__fpApplyLook==='function'){
      window.__fpApplyLook(dx,dy);
      return;
    }
    const target=document.querySelector('#gameShell canvas')||document.querySelector('canvas')||document;
    const ev=new MouseEvent('mousemove',{bubbles:true,cancelable:true,clientX:innerWidth/2,clientY:innerHeight/2});
    try{Object.defineProperties(ev,{movementX:{value:dx},movementY:{value:dy},mozMovementX:{value:dx},mozMovementY:{value:dy},webkitMovementX:{value:dx},webkitMovementY:{value:dy}});}catch(_){ }
    target.dispatchEvent(ev);
    document.dispatchEvent(ev);
  }

  function releaseAll(active){
    Object.keys(active).forEach(code=>{
      if(active[code])key(code,false);
      active[code]=false;
    });
  }

  function wireMoveJoystick(joy){
    const knob=joy.querySelector('.fpKnobV4');
    let pointerId=null;
    const active={KeyW:false,KeyA:false,KeyS:false,KeyD:false};
    const update=(e)=>{
      if(e.pointerId!==pointerId)return;
      const r=joy.getBoundingClientRect();
      const radius=Math.min(r.width,r.height)*0.34;
      let x=e.clientX-(r.left+r.width/2);
      let y=e.clientY-(r.top+r.height/2);
      const length=Math.hypot(x,y);
      if(length>radius){x=x/length*radius;y=y/length*radius;}
      const nx=x/radius, ny=y/radius;
      knob.style.transform=`translate(${x}px,${y}px)`;
      const dead=.18;
      const next={KeyW:ny<-dead,KeyS:ny>dead,KeyA:nx<-dead,KeyD:nx>dead};
      Object.keys(next).forEach(code=>{
        if(next[code]!==active[code]){
          active[code]=next[code];
          key(code,next[code]);
        }
      });
      e.preventDefault();e.stopPropagation();
    };
    const end=(e)=>{
      if(pointerId===null||e.pointerId!==pointerId)return;
      pointerId=null;
      knob.style.transform='translate(0px,0px)';
      releaseAll(active);
      e.preventDefault();e.stopPropagation();
    };
    joy.addEventListener('pointerdown',e=>{
      pointerId=e.pointerId;
      joy.setPointerCapture(pointerId);
      update(e);
    },{passive:false});
    joy.addEventListener('pointermove',update,{passive:false});
    joy.addEventListener('pointerup',end,{passive:false});
    joy.addEventListener('pointercancel',end,{passive:false});
    joy.addEventListener('lostpointercapture',()=>{pointerId=null;knob.style.transform='translate(0px,0px)';releaseAll(active);});
  }

  function wireLookJoystick(joy){
    const knob=joy.querySelector('.fpKnobV4');
    let pointerId=null,lastX=0,lastY=0;
    const updateVisual=(e)=>{
      const r=joy.getBoundingClientRect();
      const radius=Math.min(r.width,r.height)*0.34;
      let x=e.clientX-(r.left+r.width/2),y=e.clientY-(r.top+r.height/2);
      const length=Math.hypot(x,y);
      if(length>radius){x=x/length*radius;y=y/length*radius;}
      knob.style.transform=`translate(${x}px,${y}px)`;
    };
    joy.addEventListener('pointerdown',e=>{
      if(document.documentElement.classList.contains('fp-sensor-on'))return;
      pointerId=e.pointerId;lastX=e.clientX;lastY=e.clientY;
      joy.setPointerCapture(pointerId);updateVisual(e);
      e.preventDefault();e.stopPropagation();
    },{passive:false});
    joy.addEventListener('pointermove',e=>{
      if(e.pointerId!==pointerId)return;
      const dx=e.clientX-lastX,dy=e.clientY-lastY;
      lastX=e.clientX;lastY=e.clientY;
      updateVisual(e);
      if(Math.abs(dx)>.05||Math.abs(dy)>.05)applyLook(dx*1.15,dy*1.05);
      e.preventDefault();e.stopPropagation();
    },{passive:false});
    const end=e=>{
      if(e.pointerId!==pointerId)return;
      pointerId=null;knob.style.transform='translate(0px,0px)';
      e.preventDefault();e.stopPropagation();
    };
    joy.addEventListener('pointerup',end,{passive:false});
    joy.addEventListener('pointercancel',end,{passive:false});
    joy.addEventListener('lostpointercapture',()=>{pointerId=null;knob.style.transform='translate(0px,0px)';});
  }

  function install(){
    const root=document.getElementById('fpMobileV4');
    if(!root||root.dataset.v5Installed)return false;
    root.dataset.v5Installed='1';

    /* elimina camadas antigas que disputavam os mesmos toques */
    ['fpMobileControls','fpWebMobileControls','fpMobileV6'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.setProperty('display','none','important');});

    const oldMove=document.getElementById('fpMoveV4');
    const oldLook=document.getElementById('fpLookV4');
    if(!oldMove||!oldLook)return false;
    const move=oldMove.cloneNode(true),look=oldLook.cloneNode(true);
    oldMove.replaceWith(move);oldLook.replaceWith(look);
    wireMoveJoystick(move);
    wireLookJoystick(look);
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{tries++;if(install()||tries>60)clearInterval(timer);},100);
  if(document.readyState!=='loading')install();
  else document.addEventListener('DOMContentLoaded',install,{once:true});
})();