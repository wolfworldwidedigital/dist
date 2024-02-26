import{e as x,f as C,h as u,I as h,i as y,R as B,B as g}from"./q-CneDTPZk.js";import{$ as k,a as P,o as p,e as S,f as $,R as d,P as m,E as b,K as _,M as o,z as E,q as i,_ as n}from"./q-DinGTKgG.js";const w=x,z=()=>{const[e,t,l]=k();return{"--flex-dir":l.flexDir,"--flex-dir-tablet":C(t,l,e,{stackedStyle:l.flexDir,desktopStyle:"row"})}},R=()=>{const[e,t,l]=k();return`
        @media (max-width: ${u(t,l,e,"medium")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir-tablet);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-tablet) !important;
            margin-left: var(--column-margin-left-tablet) !important;
          }
        }

        @media (max-width: ${u(t,l,e,"small")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-mobile) !important;
            margin-left: var(--column-margin-left-mobile) !important;
          }
        },
      `},T=e=>{P(),p(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_s7JLZz7MCCQ"));const t=S(g),l=$({cols:e.columns||[],flexDir:e.stackColumnsAt==="never"?"row":e.reverseColumnsWhenStacked?"column-reverse":"column",gutterSize:typeof e.space=="number"?e.space||0:20,stackAt:e.stackColumnsAt||"tablet"}),v=d(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_adFEq2RWT9s",[t,e,l])),c=d(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_nBtMPbzd1Wc",[t,e,l]));return m("div",null,{class:o(s=>`builder-columns ${s.builderBlock.id}-breakpoints div-Columns`,[e],'`builder-columns ${p0.builderBlock.id}-breakpoints`+" div-Columns"'),style:o(s=>s.value,[v],"p0.value")},[b(h,{get styles(){return c.value},[_]:{styles:o(s=>s.value,[c],"p0.value")}},3,"c0_0"),(e.columns||[]).map(function(s,r){return m("div",{style:y(e,l,t,r)},{class:"builder-column div-Columns-2"},b(B,{get blocks(){return s.blocks},path:`component.options.columns.${r}.blocks`,get parent(){return e.builderBlock.id},styleProp:{flexGrow:"1"},[_]:{blocks:E(s,"blocks"),parent:o(f=>f.builderBlock.id,[e],"p0.builderBlock.id")}},3,"c0_1"),1,r)})],1,"c0_2")},a=Object.freeze(Object.defineProperty({__proto__:null,s_7yLj4bxdI6c:T,s_adFEq2RWT9s:z,s_nBtMPbzd1Wc:R,s_s7JLZz7MCCQ:w},Symbol.toStringTag,{value:"Module"}));export{T as s_7yLj4bxdI6c,z as s_adFEq2RWT9s,R as s_nBtMPbzd1Wc,w as s_s7JLZz7MCCQ};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
