import{d as l,al as _,am as m,c as o,m as d,q as f,ae as S,_ as x}from"./entry.2c0892a5.js";/* empty css                   */const g=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){const n=r;_(e=>({"17e81e26":u.value}));const t=m(),p=o(()=>{var e;return((((e=t.nuxtIcon)==null?void 0:e.aliases)||{})[n.name]||n.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var s,c,i;if(!n.size&&typeof((s=t.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((c=t.nuxtIcon)!=null&&c.size))return;const e=n.size||((i=t.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,s)=>(d(),f("span",{style:S({width:a.value,height:a.value})},null,4))}});const y=x(g,[["__scopeId","data-v-2717c442"]]);export{y as default};