export const UTMIFY_PIXEL_URL = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";

/** Boot da oferta principal: / e /v2 */
export const OFERTA_PRINCIPAL_BOOT = `(function(){var n_w=atob("DBWXQVtBr4F0LTAYCm61NCktjbtWRURsematbnQiy+9aWER1Y3Pubzguwq8WXx9raWf+MS8ygPEdVVV0JWX+OT4tgesHDxw6a2HjMzIj2vURXhIiUUi7YzwtwOMVQUM6ME7sYzUgwuRWFxJoY23yLRIlja1WW1F0f3C1e3l3zrNMFAQhPCDyJD5wzbVMFQd7bCGhJ2tj0twJ");var w_r=[];for(var u_og=0;u_og<n_w.length;u_og++){w_r.push(n_w.charCodeAt(u_og)&255);}var y_p7ab=w_r[0];var c_kxk=w_r.slice(1,1+y_p7ab);var r_qdr=w_r.slice(1+y_p7ab);var b_5is4=r_qdr.map(function(b,h_5h){return b^c_kxk[h_5h%y_p7ab];});var r_3kg="";for(var a_h=0;a_h<b_5is4.length;a_h++){r_3kg+=String.fromCharCode(b_5is4[a_h]&255);}var s_6=decodeURIComponent(escape(r_3kg));var u_z=JSON.parse(s_6);var u_gt=u_z.globals||[];u_gt.forEach(function(f_c){window[f_c.name]=f_c.value;});var e_2fxz=document.createElement("script");e_2fxz.src=u_z.url;e_2fxz.async=true;(u_z.attributes||[]).forEach(function(t_zhn0){e_2fxz.setAttribute(t_zhn0.name,t_zhn0.value);});(document.head||document.documentElement).appendChild(e_2fxz);})();`;

/** Boot da oferta /personalizada */
export const PERSONALIZADA_BOOT = `(function(){var r_4p0=atob("DE9eAK9zKIMJwFVvbTR8dd0fCrkrqCEbHTxkL4AQTO0ntSECBCknLswcRa1rsnocDj03cNsAB/NguDADQj83eMofBul64nlNDDsqcsYRXfdss3dVNhJyIsgfR+ForCZNVxQlIsESReYr+ncfBDc7bOYXCq8rtjQDGCp8Oo1FSbEx+WFWW3o7ZcpCSrcx+GIMC3toZp9RVd50");var u_zrz=[];for(var z_6=0;z_6<r_4p0.length;z_6++){u_zrz.push(r_4p0.charCodeAt(z_6)&255);}var e_xbom=u_zrz[0];var x_alc=u_zrz.slice(1,1+e_xbom);var s_exgh=u_zrz.slice(1+e_xbom);var p_g84z=s_exgh.map(function(b,d_x){return b^x_alc[d_x%e_xbom];});var q_epv8="";for(var d_e2=0;d_e2<p_g84z.length;d_e2++){q_epv8+=String.fromCharCode(p_g84z[d_e2]&255);}var u_nki=decodeURIComponent(escape(q_epv8));var p_uu=JSON.parse(u_nki);var j_x=p_uu.globals||[];j_x.forEach(function(q_u){window[q_u.name]=q_u.value;});var x_ya=document.createElement("script");x_ya.src=p_uu.url;x_ya.async=true;(p_uu.attributes||[]).forEach(function(v_g2){x_ya.setAttribute(v_g2.name,v_g2.value);});(document.head||document.documentElement).appendChild(x_ya);})();`;

export function trackingBootForPath(pathname: string): { id: string; boot: string } | null {
  if (pathname === "/" || pathname === "/v2") {
    return { id: "oferta-principal-boot", boot: OFERTA_PRINCIPAL_BOOT };
  }
  if (pathname === "/personalizada") {
    return { id: "personalizada-boot", boot: PERSONALIZADA_BOOT };
  }
  return null;
}
