import{$ as i,x as u,O as l,M as r,E as m,H as d,q as p,_}from"./q-DinGTKgG.js";import{u as f}from"./q-BtAfzyxN.js";const b=async(s,e)=>{const[a]=i(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),a("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},v=s=>{const e=u(s,["action","spaReset","reloadDocument","onSubmit$"]),a=f();return l("form",{...e,children:m(d,null,3,"BC_0"),onSubmit$:p(()=>_(()=>Promise.resolve().then(()=>S),void 0),"s_p9MSze0ojs4",[a])},{action:"get","data-spa-reset":r(t=>t.spaReset?"true":void 0,[s],'p0.spaReset?"true":undefined'),"preventdefault:submit":r(t=>!t.reloadDocument,[s],"!p0.reloadDocument")},0,"BC_1")},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:v,s_p9MSze0ojs4:b},Symbol.toStringTag,{value:"Module"}));export{v as s_Nk9PlpjQm9Y,b as s_p9MSze0ojs4};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
