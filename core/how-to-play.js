/* FramePro — Como jogar */
(function(){
  'use strict';
  var style=document.createElement('style');
  style.textContent=`
  #fpHowBtn{margin-left:8px}
  #fpHowOverlay{position:fixed;inset:0;z-index:60000;display:none;place-items:center;padding:18px;background:rgba(2,6,11,.88);backdrop-filter:blur(10px);pointer-events:auto;font-family:Inter,Segoe UI,Arial,sans-serif;color:#eef6ff}
  #fpHowOverlay.open{display:grid}
  #fpHowCard{width:min(760px,calc(100vw - 24px));max-height:min(86vh,720px);overflow:auto;background:#101720;border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:22px;box-shadow:0 22px 80px rgba(0,0,0,.65)}
  #fpHowCard h2{margin:0 0 8px;font-size:25px}#fpHowCard>p{color:#b8c7d6;line-height:1.5;margin:0 0 16px}
  .fpHowGrid{display:grid;grid-template-columns:1fr 1fr;gap:11px}.fpHowItem{padding:13px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.11)}.fpHowItem b{display:block;margin-bottom:5px}.fpHowItem span{font-size:12px;line-height:1.45;color:#b8c7d6}
  .fpHowActions{display:flex;justify-content:flex-end;margin-top:16px}.fpHowActions button{padding:11px 16px;border:0;border-radius:11px;background:#56d6ff;color:#06111a;font-weight:900;cursor:pointer}
  @media(max-width:700px){#fpHowCard{padding:15px;max-height:88dvh}.fpHowGrid{grid-template-columns:1fr}.fpHowItem{padding:10px}#fpHowCard h2{font-size:20px}}
  `;
  document.head.appendChild(style);

  var overlay=document.createElement('div');
  overlay.id='fpHowOverlay';
  overlay.innerHTML='<div id="fpHowCard"><h2>📘 Como jogar</h2><p>O objetivo é fotografar cada ambiente com enquadramento profissional, cobrindo os lados necessários e mantendo a câmera alinhada.</p><div class="fpHowGrid"><div class="fpHowItem"><b>🖥️ Desktop</b><span>Use WASD para andar. Mova o mouse para olhar. Use o botão de fotografia ou a barra de espaço para fotografar.</span></div><div class="fpHowItem"><b>📱 Celular</b><span>Jogue na horizontal. Use o joystick esquerdo para andar, arraste o lado direito para olhar e toque no botão 📸 para fotografar.</span></div><div class="fpHowItem"><b>📐 Alinhamento</b><span>Observe Direção, Verticais, Nível horizontal, Posicionamento e demais critérios. Verde indica que o parâmetro está correto.</span></div><div class="fpHowItem"><b>🎯 Pontos centrais</b><span>Nos pontos centrais, mire exatamente no centro geométrico da parede ou aresta oposta. Pequenos desvios derrubam a nota.</span></div><div class="fpHowItem"><b>🏠 Ambientes internos</b><span>Faça fotos válidas de ângulos diferentes até completar a cobertura pedida para o cômodo.</span></div><div class="fpHowItem"><b>🏢 Fachadas</b><span>Siga os pontos de tomada e as linhas-guia. As fachadas usam a tolerância própria do modo externo.</span></div><div class="fpHowItem"><b>📱 Sensores</b><span>No celular, toque em “Ativar sensores” para controlar a câmera inclinando o aparelho. Use “Recentralizar” quando necessário.</span></div><div class="fpHowItem"><b>⛶ Tela cheia</b><span>No celular, use o botão de tela cheia. O jogo tenta bloquear a orientação horizontal durante a partida.</span></div></div><div class="fpHowActions"><button id="fpHowClose">ENTENDI</button></div></div>';
  document.body.appendChild(overlay);

  function open(){overlay.classList.add('open')}
  function close(){overlay.classList.remove('open')}
  overlay.addEventListener('click',function(e){if(e.target===overlay)close()});
  overlay.querySelector('#fpHowClose').addEventListener('click',close);

  function install(){
    var actions=document.querySelector('.startActions');
    if(actions&&!document.getElementById('fpHowBtn')){
      var b=document.createElement('button');b.id='fpHowBtn';b.className='btn';b.type='button';b.textContent='📘 Como jogar';b.addEventListener('click',open);actions.appendChild(b);
    }
    var start=document.getElementById('start');
    if(!actions||!start)setTimeout(install,150);
  }
  install();
})();