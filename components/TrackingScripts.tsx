import Script from "next/script";
import { GTM_ID } from "@/components/Gtm";

const PIXEL_ID = "703849964870347";
const UTMIFY_PIXEL_ID = "6a2894965eee1b4887cf46f0";

/**
 * Pixel + Utmify disparam no afterInteractive (assim que o HTML termina de
 * parsear — sem esperar idle/hydration extra). GTM vai no onload para não
 * competir com LCP no mobile.
 */
export function TrackingScripts() {
  return (
    <>
      <Script id="tracking-boot" strategy="afterInteractive">
        {`(function(){
var w=window,d=document;
w.dataLayer=w.dataLayer||[];
if(!w.fbq){var n=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];w.fbq=n;if(!w._fbq)w._fbq=n;
var t=d.createElement('script');t.async=!0;t.src='https://connect.facebook.net/en_US/fbevents.js';
d.head.appendChild(t);}
w.fbq('init','${PIXEL_ID}');w.fbq('track','PageView');
if(!/gtm_preview=|gtm_auth=|gtm_debug=/.test(w.location.search)){
w.pixelId='${UTMIFY_PIXEL_ID}';
if(!d.getElementById('utmify-pixel')){var p=d.createElement('script');p.id='utmify-pixel';p.async=!0;p.defer=!0;p.src='https://cdn.utmify.com.br/scripts/pixel/pixel.js';d.head.appendChild(p);}
if(!d.getElementById('utmify-script')){var u=d.createElement('script');u.id='utmify-script';u.async=!0;u.defer=!0;u.src='https://cdn.utmify.com.br/scripts/utms/latest.js';u.setAttribute('data-utmify-prevent-subids','');d.body.appendChild(u);}
}
d.addEventListener('click',function(e){
var a=e.target.closest('[data-cta-id]');if(!a)return;
var id=a.getAttribute('data-cta-id'),label=a.getAttribute('data-cta-label')||'',plan=a.getAttribute('data-plan-name');
w.dataLayer.push({event:'cta_click',cta_id:id,cta_label:label});
if(w.fbq){if(plan)w.fbq('trackCustom','CtaPlano'+plan,{cta_id:id,cta_label:label});else w.fbq('trackCustom','CtaClick',{cta_id:id,cta_label:label});}
if(a.getAttribute('data-external')==='1'){e.preventDefault();w.location.assign(a.href);}
},true);
})();`}
      </Script>
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`(function(w,d,s,l,i){if(/gtm_preview=|gtm_auth=/.test(w.location.search))return;w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    </>
  );
}
