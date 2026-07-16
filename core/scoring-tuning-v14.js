/* FramePro scoring tuning V16 — centrais internas mais naturais sem alterar fachadas */
(function(){
'use strict';
const CENTER_DIRECTION_PERFECT_DEG=0.13; // 25% acima dos 0.104 anteriores
const CENTER_POINT_RADIUS_MULTIPLIER=1.25;
window.FRAMEPRO_SCORING_TUNING=Object.assign({},window.FRAMEPRO_SCORING_TUNING,{
 centerDirectionPerfectDeg:CENTER_DIRECTION_PERFECT_DEG,
 centerDirectionPassScore:99,
 centerPointRadiusMultiplier:CENTER_POINT_RADIUS_MULTIPLIER,
 internalCenterOnly:true
});
window.__FRAMEPRO_CENTER_DIRECTION_TOLERANCE_DEG=CENTER_DIRECTION_PERFECT_DEG;
window.__FRAMEPRO_CENTER_POINT_RADIUS_MULTIPLIER=CENTER_POINT_RADIUS_MULTIPLIER;
function text(v){try{return String(v==null?'':v).toLowerCase();}catch(_){return'';}}
function facadeHint(value){const s=text(value);return s.includes('fachada')||s.includes('facade')||s.includes('frontnear')||s.includes('frontfar')||s.includes('diagleft')||s.includes('diagright');}
function isFacadeContext(args,result){
 if(result&&result.roomRule&&text(result.roomRule.type)==='facade')return true;
 const pool=[result&&result.phaseId,result&&result.phase,result&&result.room,result&&result.roomName,result&&result.targetId,result&&result.shotId,result&&result.type];
 for(const arg of Array.from(args||[])){if(arg&&typeof arg==='object')pool.push(arg.phaseId,arg.id,arg.label,arg.room,arg.roomName,arg.targetId,arg.shotId,arg.type);else pool.push(arg);}
 if(pool.some(facadeHint))return true;
 const active=document.querySelector('[data-phase-id].active,[data-phase].active,[aria-current="true"],[data-selected="true"]');
 if(active&&facadeHint((active.dataset&&((active.dataset.phaseId||active.dataset.phase)))||active.textContent))return true;
 const globals=['CURRENT_PHASE','currentPhase','activePhase','selectedPhase','FRAMEPRO_CURRENT_PHASE'];
 for(const key of globals){const value=window[key];if(value&&(facadeHint(value.id)||facadeHint(value.label)||facadeHint(value.type)||facadeHint(value)))return true;}
 return false;
}
function isCenter(result,args){
 const values=[result&&result.targetType,result&&result.mode,result&&result.pointType,result&&result.kind];
 for(const arg of Array.from(args||[]))if(arg&&typeof arg==='object')values.push(arg.targetType,arg.mode,arg.pointType,arg.kind);
 return values.some(v=>text(v)==='center'||text(v)==='central');
}
function patchDirection(){
 if(typeof window.fpDirectionContext==='function'&&!window.fpDirectionContext.__v16){
  const original=window.fpDirectionContext;
  const wrapped=function(){const result=original.apply(this,arguments);try{const deg=Number(result&&result.deg);if(!isFacadeContext(arguments,result)&&isCenter(result,arguments)&&Number.isFinite(deg)&&deg<=CENTER_DIRECTION_PERFECT_DEG){result.score=100;result.aimDirection=100;}}catch(_){}return result;};
  wrapped.__v16=true;window.fpDirectionContext=wrapped;
 }
}
function relaxPointResult(result,args){
 if(!result||isFacadeContext(args,result)||!isCenter(result,args))return result;
 const distance=Number(result.distance??result.dist??result.pointDistance);
 const radius=Number(result.radius??result.pointRadius??result.allowedRadius);
 if(Number.isFinite(distance)&&Number.isFinite(radius)&&radius>0){
  const ratio=distance/(radius*CENTER_POINT_RADIUS_MULTIPLIER);
  const score=Math.max(0,Math.min(100,Math.round((1-ratio)*100)));
  for(const key of ['score','pointScore','takingPoint','positionScore','capturePoint'])if(key in result)result[key]=Math.max(Number(result[key])||0,score);
  result.effectiveRadius=radius*CENTER_POINT_RADIUS_MULTIPLIER;
 }
 return result;
}
function patchPointFunction(name){
 const fn=window[name];if(typeof fn!=='function'||fn.__fpCenterPointV16)return;
 const wrapped=function(){return relaxPointResult(fn.apply(this,arguments),arguments);};wrapped.__fpCenterPointV16=true;window[name]=wrapped;
}
function patch(){patchDirection();['fpTakingPointContext','fpPointContext','fpCapturePointContext','fpPositionContext'].forEach(patchPointFunction);}
patch();setInterval(patch,500);
})();