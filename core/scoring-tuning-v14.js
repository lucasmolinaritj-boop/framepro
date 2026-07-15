/* FramePro scoring tuning V15 — direção central 30% mais permissiva */
(function(){
'use strict';
const CENTER_DIRECTION_PERFECT_DEG=0.104;
window.FRAMEPRO_SCORING_TUNING=Object.assign({},window.FRAMEPRO_SCORING_TUNING,{centerDirectionPerfectDeg:CENTER_DIRECTION_PERFECT_DEG,centerDirectionPassScore:99});
window.__FRAMEPRO_CENTER_DIRECTION_TOLERANCE_DEG=CENTER_DIRECTION_PERFECT_DEG;
function patch(){
  if(typeof window.fpDirectionContext==='function'&&!window.fpDirectionContext.__v15){
    const original=window.fpDirectionContext;
    const wrapped=function(){
      const result=original.apply(this,arguments);
      try{
        const targetType=result&&result.targetType;
        const deg=Number(result&&result.deg);
        if(targetType==='center'&&Number.isFinite(deg)&&deg<=CENTER_DIRECTION_PERFECT_DEG){result.score=100;result.aimDirection=100;}
      }catch(_){}
      return result;
    };
    wrapped.__v15=true;window.fpDirectionContext=wrapped;
  }
}
patch();setInterval(patch,800);
})();