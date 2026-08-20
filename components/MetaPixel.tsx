const PIXEL_ID = "703849964870347";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

function ensureStub(): Fbq {
  if (window.fbq) return window.fbq as Fbq;
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as Fbq;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;
  return n;
}

export function MetaPixelNoscript() {
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
}

export function fbTrack(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  ensureStub()("track", event, data);
}

export function fbTrackCustom(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  ensureStub()("trackCustom", event, data);
}
