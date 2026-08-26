import { headers } from "next/headers";
import Script from "next/script";

import { trackingBootForPath, UTMIFY_PIXEL_URL } from "@/lib/tracking-boot";

/** Injeta o boot Utmify correto por rota, o mais cedo possível no documento. */
export async function TrackingHead() {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const tracking = trackingBootForPath(pathname);
  if (!tracking) return null;

  return (
    <>
      <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
      <link rel="preload" href={UTMIFY_PIXEL_URL} as="script" />
      <Script id={tracking.id} strategy="beforeInteractive">
        {tracking.boot}
      </Script>
    </>
  );
}
