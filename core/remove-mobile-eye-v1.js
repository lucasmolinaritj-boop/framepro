/* FramePro — remove exclusivamente o botão de lente/câmera do canto inferior direito no mobile. */
(function(){
'use strict';
const mobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(window.matchMedia&&matchMedia('(pointer:coarse)').matches);
if(!mobile)return;
function removeEye(){
  const button=document.getElementById('fpPhotoV4');
  if(button)button.remove();
}
removeEye();
new MutationObserver(removeEye).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',removeEye,{once:true});
})();
