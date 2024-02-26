import{n as K,q as G,_ as Q}from"./q-DinGTKgG.js";const X={"images.ctfassets.net":"contentful","cdn.builder.io":"builder.io","images.prismic.io":"imgix","www.datocms-assets.com":"imgix","cdn.sanity.io":"imgix","images.unsplash.com":"imgix","cdn.shopify.com":"shopify","s7d1.scene7.com":"scene7","ip.keycdn.com":"keycdn","assets.caisy.io":"bunny","images.contentstack.io":"contentstack"},Y={"imgix.net":"imgix","files.wordpress.com":"wordpress","b-cdn.net":"bunny","storyblok.com":"storyblok","kc-usercontent.com":"kontent.ai","cloudinary.com":"cloudinary","kxcdn.com":"keycdn","imgeng.in":"imageengine","imagekit.io":"imagekit","cloudimg.io":"cloudimage"},tt={"/cdn-cgi/image/":"cloudflare","/cdn-cgi/imagedelivery/":"cloudflare_images","/_next/image":"nextjs","/_next/static":"nextjs","/_vercel/image":"vercel","/is/image":"scene7","/_ipx/":"ipx","/_image":"astro","/.netlify/images":"netlify"},S=r=>{if(!r)return r;const t=Number(r);return isNaN(t)?r:Math.round(t)},c=(r,t,s,n,e)=>{s?(e&&(s=S(s)),r.searchParams.set(t,s.toString())):n&&r.searchParams.delete(t)},p=(r,t,s)=>{r.searchParams.has(t)||r.searchParams.set(t,s.toString())},x=(r,t)=>{const s=Number(r.searchParams.get(t));return isNaN(s)?void 0:s},T=r=>{const{pathname:t,search:s}=r;return`${t}${s}`},j=r=>r.hostname==="n"?T(r):r.toString(),m=(r,t)=>typeof r=="string"?new URL(r,t??"http://n/"):r,N=new Map(Object.entries(X)),rt=Object.entries(Y);function et(r){return A(r)||st(r)}function A(r){if(typeof r=="string"&&!r.startsWith("https://"))return!1;const{hostname:t}=m(r);if(N.has(t))return N.get(t);for(const[s,n]of rt)if(t.endsWith(`.${s}`))return n;return!1}function st(r){const{pathname:t}=m(r);for(const[s,n]of Object.entries(tt))if(t.startsWith(s))return n;return!1}const nt=({url:r,width:t,height:s,format:n})=>{const e=m(r);return t&&t>4e3&&(s&&(s=Math.round(s*4e3/t)),t=4e3),s&&s>4e3&&(t&&(t=Math.round(t*4e3/s)),s=4e3),c(e,"w",t,!0,!0),c(e,"h",s,!0,!0),c(e,"fm",n),p(e,"fit","fill"),e},ot=({url:r,width:t,height:s,format:n})=>{const e=m(r);return c(e,"width",t,!0,!0),c(e,"height",s,!0,!0),c(e,"format",n),t&&s&&(p(e,"fit","cover"),p(e,"sharp","true")),e},it=({url:r,width:t,height:s,format:n})=>{var o;const e=m(r);if(c(e,"w",t,!0,!0),c(e,"h",s,!0,!0),p(e,"fit","min"),n){e.searchParams.set("fm",n);const i=e.searchParams.get("auto");i==="format"?e.searchParams.delete("auto"):i!=null&&i.includes("format")&&e.searchParams.set("auto",i.split(",").filter(a=>a!=="format").join(","))}else e.searchParams.delete("fm"),(o=e.searchParams.get("auto"))!=null&&o.includes("format")||e.searchParams.append("auto","format");return e},at=/(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,ct=r=>{const t=m(r),s=t.pathname.match(at);if(!s)throw new Error("Invalid Shopify URL");const[,n,e,o,i,a,u,f]=s;t.pathname=`${n}${u}`;const l=o||t.searchParams.get("width"),d=i||t.searchParams.get("height");return t.searchParams.delete("width"),t.searchParams.delete("height"),{base:t.toString(),width:Number(l)||void 0,height:Number(d)||void 0,format:f?f.slice(1):void 0,params:{crop:a,size:e},cdn:"shopify"}},ut=({base:r,width:t,height:s,format:n,params:e})=>{const o=m(r);return c(o,"width",t,!0,!0),c(o,"height",s,!0,!0),c(o,"crop",e==null?void 0:e.crop),c(o,"format",n),o},ft=({url:r,width:t,height:s})=>{const n=ct(r);if(!n)return;const e={...n,width:t,height:s};return ut(e)},mt=({url:r,width:t,height:s})=>{const n=m(r);return c(n,"w",t,!0,!0),c(n,"h",s,!0,!0),p(n,"crop","1"),n},lt=({url:r,width:t,height:s})=>{const n=m(r);return c(n,"w",t,!0,!0),c(n,"h",s,!0,!0),c(n,"q",x(n,"q"),!0),n},dt=/https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g,gt=r=>r?Object.fromEntries(r.split(",").map(t=>t.split("_"))):{},C=({host:r,cloudName:t,assetType:s,deliveryType:n,signature:e,transformations:o={},version:i,id:a,format:u})=>{u&&(o.f=u);const f=Object.entries(o).map(([d,g])=>`${d}_${g}`).join(",");return`https://${[r,t,s,n,e,f,i,a].filter(Boolean).join("/")}`},z=r=>{const s=[...m(r).toString().matchAll(dt)];if(!s.length)throw new Error("Invalid Cloudinary URL");const n=s[0].groups||{},{transformations:e="",idAndFormat:o,...i}=n;delete n.idAndFormat;const a=o.lastIndexOf("."),u=a<0?o:o.slice(0,a),f=a<0?void 0:o.slice(a+1),{w:l,h:d,f:g,...y}=gt(e),h=g&&g!=="auto"?g:f;return{base:C({...i,id:u,transformations:y}),width:Number(l)||void 0,height:Number(d)||void 0,format:h,cdn:"cloudinary",params:{...n,id:n.deliveryType==="fetch"?o:u,format:h,transformations:y}}},pt=({base:r,width:t,height:s,format:n,params:e})=>{var o;const i=z(r.toString()),a={transformations:{},...i.params,...e,format:n||"auto"};return t&&(a.transformations.w=S(t).toString()),s&&(a.transformations.h=S(s).toString()),(o=a.transformations).c||(o.c="lfill"),C(a)},ht=({url:r,width:t,height:s,format:n="auto"})=>{var i,a;const e=z(r);if(!e)throw new Error("Invalid Cloudinary URL");if(((i=e.params)==null?void 0:i.assetType)!=="image")throw new Error("Cloudinary transformer only supports images");if((a=e.params)!=null&&a.signature)throw new Error("Cloudinary transformer does not support signed URLs");const o={...e,width:t,height:s,format:n};return pt(o)},$t=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)?\/(?<path>.*)$/g,yt=r=>Object.fromEntries(r.split(",").map(t=>t.split("="))),D=({host:r,transformations:t={},path:s})=>{const n=Object.entries(t).map(([o,i])=>`${o}=${i}`).join(",");return`https://${[r,"cdn-cgi","image",n,s].join("/")}`},F=r=>{const t=m(r),s=[...t.toString().matchAll($t)];if(!s.length)throw new Error("Invalid Cloudflare URL");const n=s[0].groups||{},{transformations:e,...o}=n,{width:i,height:a,f:u,...f}=yt(e);return D({...o,transformations:f}),{base:t.toString(),width:Number(i)||void 0,height:Number(a)||void 0,format:u,cdn:"cloudflare",params:{...n,transformations:f}}},vt=({base:r,width:t,height:s,format:n,params:e})=>{var o;const i=F(r.toString()),a={transformations:{},...i.params,...e};return t&&(a.transformations.width=t==null?void 0:t.toString()),s&&(a.transformations.height=s==null?void 0:s.toString()),n&&(a.transformations.f=n==="jpg"?"jpeg":n),(o=a.transformations).fit||(o.fit="cover"),new URL(D(a))},bt=({url:r,width:t,height:s,format:n="auto"})=>{const e=F(r);if(!e)throw new Error("Invalid Cloudflare URL");const o={...e,width:t,height:s,format:n};return vt(o)},xt=({url:r,width:t,height:s})=>{const n=m(r);return c(n,"width",t,!0,!0),t&&s&&p(n,"aspect_ratio",`${t}:${s}`),n},_t=/(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g,wt=/^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g,St=r=>r?Object.fromEntries(r.split(":").map(t=>{if(!t)return[];const[s,n]=t.split("(");return[s,n.replace(")","")]})):{},Pt=r=>{if(!r)return;const t=Object.entries(r).map(([s,n])=>`${s}(${n??""})`);if(t.length!==0)return`filters:${t.join(":")}`},jt=r=>{const t=m(r),s=t.hostname==="img2.storyblok.com"?wt:_t,[n]=t.pathname.matchAll(s);if(!n||!n.groups)throw new Error("Invalid Storyblok URL");const{id:e,crop:o,width:i,height:a,filters:u,flipx:f,flipy:l}=n.groups,{format:d,...g}=St(u);return t.hostname==="img2.storyblok.com"&&(t.hostname="a.storyblok.com"),{base:t.origin+e,width:Number(i)||void 0,height:Number(a)||void 0,format:d,params:{crop:o,filters:g,flipx:f,flipy:l},cdn:"storyblok"}},Ut=({base:r,width:t=0,height:s=0,format:n,params:e={}})=>{const{crop:o,filters:i,flipx:a="",flipy:u=""}=e,f=`${a}${t}x${u}${s}`;return new URL([r,"m",o,f,Pt(i),n].filter(Boolean).join("/"))},It=({url:r,width:t,height:s,format:n})=>{const e=jt(r);if(e)return n&&(e.params||(e.params={filters:{}}),e.params.filters||(e.params.filters={}),e.params.filters.format=n),Ut({...e,width:t,height:s})},Ot=({url:r,width:t,height:s,format:n})=>{const e=m(r);return c(e,"w",t,!0,!0),c(e,"h",s,!0,!0),c(e,"fm",n,!0),t&&s&&p(e,"fit","crop"),e},k=r=>{const s=m(r).searchParams.get("url");if(!s||!s.startsWith("http"))return!1;const n=A(s);return n?{cdn:n,url:s}:!1},Et=({base:r,width:t,params:{quality:s=75,root:n="_vercel"}={}})=>{const e=new URL("http://n");return e.pathname=`/${n}/image`,e.searchParams.set("url",r.toString()),c(e,"w",t,!1,!0),p(e,"q",s),T(e)},M=({url:r,width:t,cdn:s})=>{const n=m(r),e=n.pathname.startsWith("/_next/image")||n.pathname.startsWith("/_vercel/image"),o=e?n.searchParams.get("url"):r.toString();if(o)return c(n,"w",t,!0,!0),e?j(n):Et({base:o,width:t,params:{root:s==="nextjs"?"_next":"_vercel"}})},Nt=r=>M({...r,cdn:"nextjs"}),kt=({url:r,width:t,height:s,format:n})=>{const e=m(r);return c(e,"wid",t,!0,!0),c(e,"hei",s,!0,!0),c(e,"fmt",n,!0),c(e,"qlt",x(e,"qlt"),!0),c(e,"scl",x(e,"scl"),!0),p(e,"fit","crop"),!t&&!s&&p(e,"scl",1),e},Wt=({url:r,width:t,height:s,format:n})=>{const e=m(r);return c(e,"width",t,!0,!0),c(e,"height",s,!0,!0),c(e,"format",n,!0),c(e,"quality",x(e,"quality"),!0),p(e,"enlarge",0),e},Rt=({url:r,width:t,height:s,format:n})=>{const e=m(r);return c(e,"width",t,!0,!0),c(e,"height",s,!0,!0),c(e,"format",n),c(e,"quality",x(e,"quality"),!0),e},P={width:"w",height:"h",autoWidthWithFallback:"w_auto",auto_width_fallback:"w_auto",scaleToScreenWidth:"pc",scale_to_screen_width:"pc",crop:"cr",outputFormat:"f",format:"f",fit:"m",fitMethod:"m",compression:"cmpr",sharpness:"s",rotate:"r",inline:"in",keepMeta:"meta",keep_meta:"meta",noOptimization:"pass",no_optimization:"pass",force_download:"dl",max_device_pixel_ratio:"maxdpr",maxDevicePixelRatio:"maxdpr"};function qt(r){return Object.keys(P).find(n=>P[n]===r)||""}function Lt(r){let t=r.toString(),s=[];if(t){let n=t.split("imgeng=");n.length>1&&(s=n[1].split("/"))}return s}function Tt(r){let t=r.toString(),s="";if(t){let n=t.split("imgeng=");n.length>1?s=n[0].slice(0,-1):s=t}return s}const At=({url:r,width:t,height:s,format:n})=>{const e=m(r),o=Tt(e);let i={};const a=e.toString()===o?[]:Lt(e);a.length&&(i=Ft(a)),t&&(i.width=t),s&&(i.height=s),n&&(i.format=n),i.hasOwnProperty("fit")||(i={...i,fit:"cropbox"});let u=Ct(i),f=zt(u),l=f===""?"":o.includes("?")?"&":"?";return`${o}${l}${f}`};function Ct(r){return Object.entries(r).reduce((t,[s,n])=>t+Dt(s,n),"")}function zt(r){return r&&r!==""?`imgeng=${r}`:""}function Dt(r,t){let s=P[r];return s&&(t||t===0)?`/${s}_${t}`:""}function Ft(r){let t={};return r.forEach(s=>{let n=s.split("_");if(n.length>1){let e=n[0],o=n[1],i=qt(e);i&&(t[i]=o)}}),t}const Mt=({url:r,width:t,height:s,format:n})=>{const e=m(r);return c(e,"width",t,!0,!0),c(e,"height",s,!0,!0),c(e,"format",n),e.searchParams.has("format")||p(e,"auto","webp"),t&&s&&p(e,"fit","crop"),e},Bt=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,Ht=r=>{var t;return Object.fromEntries(((t=r==null?void 0:r.split(","))==null?void 0:t.map(s=>s.split("=")))??[])},Vt=({host:r,accountHash:t,transformations:s={},imageId:n})=>{const e=Object.entries(s).map(([i,a])=>`${i}=${a}`).join(",");return`https://${[r,"cdn-cgi","imagedelivery",t,n,e].join("/")}`},B=r=>{const t=m(r),s=[...t.toString().matchAll(Bt)];if(!s.length)throw new Error("Invalid Cloudflare Images URL");const n=s[0].groups||{},{transformations:e,...o}=n,{w:i,h:a,f:u,...f}=Ht(e);return{base:t.toString(),width:Number(i)||void 0,height:Number(a)||void 0,format:u,cdn:"cloudflare_images",params:{...o,transformations:f}}},Zt=({base:r,width:t,height:s,format:n,params:e})=>{var o;const i=B(r.toString()),a={transformations:{},...i.params,...e};return t&&(a.transformations.w=t==null?void 0:t.toString()),s&&(a.transformations.h=s==null?void 0:s.toString()),n&&(a.transformations.f=n),(o=a.transformations).fit||(o.fit="cover"),new URL(Vt(a))},Jt=({url:r,width:t,height:s,format:n="auto"})=>{const e=B(r);if(!e)throw new Error("Invalid Cloudflare Images URL");const o={...e,width:t,height:s,format:n};return Zt(o)},Kt=r=>{const t=m(r),[s,...n]=t.pathname.split("/").slice(1),e=Object.fromEntries(s.split(",").map(o=>{const[i,a]=o.split("_");return[i,a]}));if(e.s){const[o,i]=e.s.split("x");e.w||(e.w=o),e.h||(e.h=i)}return{base:n.join("/"),width:Number(e.w)||void 0,height:Number(e.h)||void 0,quality:Number(e.q)||void 0,format:e.f||"auto",params:e,cdn:"ipx"}},W=({base:r,width:t,height:s,format:n,params:e})=>{const o=(e==null?void 0:e.modifiers)??{};t&&s?o.s=`${t}x${s}`:t?o.w=`${t}`:s&&(o.h=`${s}`),n&&(o.f=n);const i=e!=null&&e.base.endsWith("/")?e==null?void 0:e.base:`${e==null?void 0:e.base}/`,a=Object.entries(o).map(([l,d])=>`${l}_${d}`).join(","),u=r.toString(),f=u.startsWith("/")?u.slice(1):u;return`${i}${a}/${f}`},Gt=r=>{var i,a,u,f;const t=String(r.url),s=m(t),n=s.pathname.startsWith("/_ipx")&&s.hostname!=="n"?`${s.origin}/_ipx`:"/_ipx",e=((a=(i=r.cdnOptions)==null?void 0:i.ipx)==null?void 0:a.base)??n;if(e&&e!=="/"&&t.startsWith(e)){const l=Kt(t.replace(e,""));return W({...l,...r,params:{...(u=r.cdnOptions)==null?void 0:u.ipx,base:e}})}return W({...r,base:t,params:{...(f=r.cdnOptions)==null?void 0:f.ipx,base:e}})},Qt=({url:r,width:t,height:s,format:n})=>{const e=m(r),o=j(new URL(e.pathname,e.origin)),i={searchParams:new URLSearchParams};return c(i,"href",o,!0,!0),c(i,"w",t,!0,!0),c(i,"h",s,!0,!0),c(i,"f",n),`/_image?${i.searchParams.toString()}`},Xt=new Set(["w","h","q","fm","url","width","height","quality"]),Yt=r=>{const t=m(r),s=Number(t.searchParams.get("w")??t.searchParams.get("width"))??void 0,n=Number(t.searchParams.get("h")??t.searchParams.get("height"))??void 0,e=Number(t.searchParams.get("q")??t.searchParams.get("quality"))||void 0,o=t.searchParams.get("fm")||void 0,i=t.searchParams.get("url")||"",a={quality:e};return t.searchParams.forEach((u,f)=>{Xt.has(f)||(a[f]=u)}),t.search="",{base:i,width:s,height:n,format:o,params:a,cdn:"netlify"}},R=({base:r,width:t,height:s,format:n,params:{site:e,quality:o,...i}={}})=>{const a=m("/.netlify/images",e);return Object.entries(i).forEach(([u,f])=>c(a,u,f)),c(a,"q",o,!0,!0),c(a,"w",t,!0,!0),c(a,"h",s,!0,!0),c(a,"fm",n),p(a,"fit","cover"),a.searchParams.set("url",r.toString()),j(a)},tr=r=>{var s,n;const t=m(r.url);if(t.pathname.startsWith("/.netlify/images")){const{params:e,base:o,format:i}=Yt(t);return R({base:o,format:i,...r,params:{...e,site:t.hostname==="n"?void 0:t.origin}})}return R({...r,base:r.url,params:{site:(n=(s=r.cdnOptions)==null?void 0:s.netlify)==null?void 0:n.site}})},rr=r=>(r.searchParams.get("tr")||"").split(",").reduce((s,n)=>{const[e,o]=n.split("-");return s[e]=o,s},{}),er=({url:r,width:t,height:s,format:n})=>{const e=m(r),o=rr(e);o.w=t&&Math.round(t),o.h=s&&Math.round(s),o.fm||(o.fm="auto"),n&&(o.fm=n);const i=Object.keys(o).map(a=>{const u=o[a];if(u)return`${a}-${u}`}).filter(a=>a).join(",");return e.searchParams.set("tr",i),e},q={vercel:k,nextjs:k};function sr(r,t){if(!(t in q))return!1;const s=q[t];return s?s(r):!1}function U(r,t){const s=et(r)||t;if(!s)return!1;const n=sr(r,s);return n||{cdn:s,url:r}}const I=r=>({imgix:it,contentful:nt,"builder.io":ot,shopify:ft,wordpress:mt,cloudimage:lt,cloudinary:ht,bunny:xt,storyblok:It,cloudflare:bt,vercel:M,nextjs:Nt,scene7:kt,"kontent.ai":Ot,keycdn:Wt,directus:Rt,imageengine:At,contentstack:Mt,cloudflare_images:Jt,ipx:Gt,astro:Qt,netlify:tr,imagekit:er})[r];var H=(r,t)=>{if(!(!r||!t))switch(t){case"constrained":return`(min-width: ${r}px) ${r}px, 100vw`;case"fixed":return`${r}px`;case"fullWidth":return"100vw";default:return}},b=r=>r||r===0?`${r}px`:void 0,nr=({width:r,height:t,aspectRatio:s,layout:n,objectFit:e="cover",background:o})=>{const i=[["object-fit",e]];return o!=null&&o.startsWith("https:")||o!=null&&o.startsWith("http:")||o!=null&&o.startsWith("data:")?(i.push(["background-image",`url(${o})`]),i.push(["background-size","cover"]),i.push(["background-repeat","no-repeat"])):i.push(["background",o]),n==="fixed"&&(i.push(["width",b(r)]),i.push(["height",b(t)])),n==="constrained"&&(i.push(["max-width",b(r)]),i.push(["max-height",b(t)]),i.push(["aspect-ratio",s?`${s}`:void 0]),i.push(["width","100%"])),n==="fullWidth"&&(i.push(["width","100%"]),i.push(["aspect-ratio",s?`${s}`:void 0]),i.push(["height",b(t)])),Object.fromEntries(i.filter(([,a])=>a))},or=[6016,5120,4480,3840,3200,2560,2048,1920,1668,1280,1080,960,828,750,640],L=24,ir=({width:r,layout:t,resolutions:s=or})=>{if(t==="fullWidth")return s;if(!r)return[];const n=r*2;return t==="fixed"?[r,n]:t==="constrained"?[r,n,...s.filter(e=>e<n)]:[]},V=({src:r,width:t,layout:s="constrained",height:n,aspectRatio:e,breakpoints:o,cdn:i,transformer:a,format:u})=>{const f=U(r,i);if(f&&!a&&(a=I(f.cdn)),!!a)return o||(o=ir({width:t,layout:s})),o.sort((l,d)=>l-d).map(l=>{let d;n&&e&&(d=Math.round(l/e));const g=a({url:f?f.url:r,width:l,height:d,format:u});return g?`${g.toString()} ${l}w`:""}).join(`,
`)};function Z({width:r,height:t,priority:s,layout:n="constrained",aspectRatio:e,...o}){return r=r&&Number(r)||void 0,t=t&&Number(t)||void 0,s?(o.loading||(o.loading="eager"),o.fetchpriority||(o.fetchpriority="high")):(o.loading||(o.loading="lazy"),o.decoding||(o.decoding="async")),o.alt===""&&(o.role||(o.role="presentation")),e?r?t||(t=r/e):t&&(r=t*e):r&&t&&(e=r/t),{width:r,height:t,aspectRatio:e,layout:n,...o}}function ur(r){let{src:t,cdn:s,transformer:n,background:e,layout:o,objectFit:i,breakpoints:a,width:u,height:f,aspectRatio:l,unstyled:d,...g}=Z(r);const y=t?U(t,s):void 0;let h=t;if(y&&(h=y.url,n||(n=I(y.cdn))),n&&e==="auto"){const $=l?Math.round(L/l):void 0,_=n({url:h,width:L,height:$});_&&(e=_.toString())}const v={width:u,height:f,aspectRatio:l,layout:o,objectFit:i,background:e};if(g.sizes||(g.sizes=H(u,o)),d||(g.style={...nr(v),...g.style}),n){g.srcset=V({src:h,width:u,height:f,aspectRatio:l,layout:o,breakpoints:a,transformer:n,cdn:s});const $=n({url:h,width:u,height:f});$&&(h=$),(o==="fullWidth"||o==="constrained")&&(u=void 0,f=void 0)}return{...g,src:h==null?void 0:h.toString(),width:u,height:f}}function ar(r){return r?r.startsWith("image/")?{format:r.slice(6),mimeType:r}:{format:r,mimeType:`image/${r==="jpg"?"jpeg":r}`}:{}}function fr({media:r,type:t,...s}){let{src:n,cdn:e,transformer:o,layout:i,breakpoints:a,width:u,height:f,aspectRatio:l,sizes:d,loading:g,decoding:y,...h}=Z(s);const v=n?U(n,e):void 0;let $=n;if(v&&($=v.url,o||(o=I(v.cdn))),!o)return{};const{format:_,mimeType:O}=ar(t);d||(d=H(u,i));const J=V({src:$,width:u,height:f,aspectRatio:l,layout:i,breakpoints:a,transformer:o,cdn:e,format:_}),E=o({url:$,width:u,height:f});E&&($=E);const w={...h,sizes:d,srcset:J};return r&&(w.media=r),O&&(w.type=O),w}const mr=K(G(()=>Q(()=>import("./q-PJ-qexOO.js"),__vite__mapDeps([])),"s_W1wZaAVNrf0"));export{mr as I,fr as a,ur as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
