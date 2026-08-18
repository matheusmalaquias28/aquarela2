/** Params injected by GTM Preview / Tag Assistant. */
const GTM_PREVIEW_RE = /(?:^|[?&])(gtm_preview|gtm_auth)=/;
const GTM_DEBUG_RE = /(?:^|[?&])gtm_debug=/;

export function isGtmPreviewUrl(search: string) {
  return GTM_PREVIEW_RE.test(search);
}

export function isGtmDebugUrl(search: string) {
  return GTM_DEBUG_RE.test(search);
}

/** Pause Utmify and similar scripts that rewrite URLs while debugging tags. */
export function shouldPauseThirdPartyTracking(search: string) {
  return isGtmPreviewUrl(search) || isGtmDebugUrl(search);
}

/** Inline guard for the GTM bootstrap (avoids double container in Preview). */
export const GTM_BOOTSTRAP_PREVIEW_GUARD =
  "if(/gtm_preview=|gtm_auth=/.test(w.location.search))return;";
