"use client";

import { useEffect } from "react";

/** Carrega scripts de terceiros fora do caminho crítico de renderização. */
export function DeferredScripts() {
  useEffect(() => {
    const load = () => {
      if (document.getElementById("utmify-script")) return;

      const utmify = document.createElement("script");
      utmify.id = "utmify-script";
      utmify.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
      utmify.dataset.utmifyPreventSubids = "";
      utmify.async = true;
      utmify.defer = true;
      document.body.appendChild(utmify);

      if (!document.getElementById("clarity-script")) {
        const clarity = document.createElement("script");
        clarity.id = "clarity-script";
        clarity.async = true;
        clarity.src = "https://www.clarity.ms/tag/xo7jsjm0j0";
        document.body.appendChild(clarity);
      }
    };

    const timeoutId = globalThis.setTimeout(load, 1500);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return null;
}
