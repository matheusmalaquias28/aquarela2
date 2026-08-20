export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KW7LKQJ6";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function GtmNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

export function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}
