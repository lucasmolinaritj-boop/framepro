/* FramePro scoring tuning V14 — ponto central levemente mais permissivo */
(function(){
'use strict';
window.FRAMEPRO_SCORING_TUNING=Object.assign({},window.FRAMEPRO_SCORING_TUNING,{centerDirectionPerfectDeg:0.08,centerDirectionPassScore:99});
window.__FRAMEPRO_CENTER_DIRECTION_TOLERANCE_DEG=0.08;
function patch(){
  if(typeof window.fpDirectionContext==='function'&&!window.fpDirectionContext.__v14){
    const original=window.fpDirectionContext;
    const wrapped=function(){
      const result=original.apply(this,arguments);
      try{
        const targetType=result&&result.targetType;
        const deg=Number(result&&result.deg);
        if(targetType==='center'&&Number.isFinite(deg)&&deg<=0.08){result.score=100;result.aimDirection=100;}
      }catch(_){}
      return result;
    };
    wrapped.__v14=true;window.fpDirectionContext=wrapped;
  }
}
patch();setInterval(patch,800);
})();