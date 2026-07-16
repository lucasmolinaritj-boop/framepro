(function () {
  "use strict";
  const REQUIRED = ["id", "label", "order", "roomsRaw", "detection", "bounds", "spawn", "mini", "scene"];

  function statusBox() {
    let el = document.getElementById("phaseLoaderStatus");
    if (!el) {
      el = document.createElement("div");
      el.id = "phaseLoaderStatus";
      Object.assign(el.style, {
        position: "fixed", inset: "0", display: "grid", placeItems: "center",
        padding: "24px", textAlign: "center", background: "#07101a", color: "#fff",
        font: "700 18px system-ui", zIndex: "999999"
      });
      document.body.appendChild(el);
    }
    return el;
  }

  function validate(phase, source) {
    if (!phase || typeof phase !== "object") throw new Error(source + ": conteúdo inválido");
    for (const key of REQUIRED) if (!(key in phase)) throw new Error(source + ": faltando campo " + key);
    if (!Array.isArray(phase.order) || !phase.order.length) throw new Error(source + ": ordem de cômodos vazia");
    if (!phase.detection || !Array.isArray(phase.detection.rules) || !phase.detection.rules.length) throw new Error(source + ": regras de detecção ausentes");
    return phase;
  }

  async function readJson(url, options = {}) {
    const response = await fetch(url + "?v=" + Date.now(), { cache: "no-store" });
    if (response.status === 404 && options.allowMissing) return null;
    if (!response.ok) throw new Error(url + " retornou HTTP " + response.status);
    try { return await response.json(); }
    catch (error) { throw new Error(url + " contém JSON inválido: " + error.message); }
  }

  async function loadFromJson() {
    const index = await readJson("phases/index.json");
    if (!index || !Array.isArray(index.phases)) throw new Error("phases/index.json precisa conter a lista phases");
    const results = await Promise.all(index.phases.map(async file => {
      const data = await readJson("phases/" + file, { allowMissing: true });
      if (data === null) { console.warn("Fase removida porque o arquivo não existe:", file); return null; }
      const phase = validate(data, file);
      return [phase.id, phase];
    }));
    return Object.fromEntries(results.filter(Boolean));
  }

  function loadScript(src, errorMessage) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = () => reject(new Error(errorMessage || ("Não foi possível carregar " + src)));
      document.body.appendChild(script);
    });
  }

  async function loadEngine() {
    await loadScript("core/engine.js?v=53", "Não foi possível carregar core/engine.js");
    try { await loadScript("core/scoring-tuning-v14.js?v=18", "Falha ao carregar ajuste de pontuação V18"); }
    catch (error) { console.warn(error.message); }
    try { await loadScript("core/mobile-web-fix.js?v=6", "Falha ao carregar estrutura mobile V6"); }
    catch (error) { console.warn(error.message); }
    try { await loadScript("core/mobile-controls-v5.js?v=20", "Falha ao carregar controles mobile V20"); }
    catch (error) { console.warn(error.message); }
    try { await loadScript("core/mobile-sensors-v8.js?v=44", "Falha ao carregar sensores mobile V44"); }
    catch (error) { console.warn(error.message); }
    try { await loadScript("core/mobile-ui-guard-v1.js?v=1", "Falha ao carregar proteção da HUD mobile"); }
    catch (error) { console.warn(error.message); }
  }

  async function loadTextConfig() {
    const defaults = {
      CORRETOR_ATIVO:false, MOSTRAR_OPCAO_CORRETOR:true,
      DOG_ATIVO:false, MOSTRAR_OPCAO_DOG:true,
      TIRO_ATIVO:false, MOSTRAR_OPCAO_TIRO:true,
      ARMA_VISIVEL:false, MOSTRAR_OPCAO_ARMA:true
    };
    try {
      const response = await fetch("configuracoes.txt?v=" + Date.now(), {cache:"no-store"});
      if (!response.ok) return defaults;
      const text = await response.text();
      text.split(/\r?\n/).forEach(line => {
        line=line.replace(/[#;].*$/,"" ).trim(); if(!line)return;
        const p=line.indexOf("="); if(p<0)return;
        const key=line.slice(0,p).trim().toUpperCase();
        const value=line.slice(p+1).trim().toUpperCase();
        if(key in defaults) defaults[key]=["ON","1","TRUE","SIM"].includes(value);
      });
    } catch (e) { console.warn("configuracoes.txt não pôde ser lido; usando padrões seguros",e); }
    return defaults;
  }

  function applyTextConfig(cfg){
    window.FRAMEPRO_CONFIG=cfg;
    const map=[
      ["optBroker","rowBroker","CORRETOR_ATIVO","MOSTRAR_OPCAO_CORRETOR"],
      ["optDog","rowDog","DOG_ATIVO","MOSTRAR_OPCAO_DOG"],
      ["optShoot","rowShoot","TIRO_ATIVO","MOSTRAR_OPCAO_TIRO"],
      ["optWeapon","rowWeapon","ARMA_VISIVEL","MOSTRAR_OPCAO_ARMA"]
    ];
    map.forEach(([input,row,active,show])=>{
      const i=document.getElementById(input), r=document.getElementById(row);
      if(i)i.checked=!!cfg[active];
      if(r)r.style.display=cfg[show]?"":"none";
    });
  }

  async function start() {
    const status = statusBox();
    status.textContent = "Carregando fases do jogo...";
    try {
      const cfg = await loadTextConfig();
      applyTextConfig(cfg);
      window.FRAMEPRO_PHASES = await loadFromJson();
      if (!Object.keys(window.FRAMEPRO_PHASES).length) throw new Error("phases/index.json não contém nenhuma fase");
      await loadEngine();
      status.remove();
      console.info("FramePro iniciado exclusivamente pelos JSONs:", Object.keys(window.FRAMEPRO_PHASES));
    } catch (error) {
      console.error("Falha ao carregar as fases:", error);
      status.innerHTML = '<div><div style="font-size:24px;margin-bottom:10px">Erro nos arquivos de fase</div><div style="font:500 14px system-ui;color:#ffb4b4;max-width:720px">' + String(error && error.message ? error.message : error) + '</div><div style="font:400 12px system-ui;color:#a9b8c8;margin-top:12px">JSON inválido ou configuração incorreta. Arquivos apagados são ignorados automaticamente. Nenhum fallback será usado.</div></div>';
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();