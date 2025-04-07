import{B as y,W as I,C as $,m as v,q as x,D as _,E as F,_ as B,J as R,u as T,K as L,L as P,r as d,s as i,t as u,v as o,x as b,M as h,S as m,z as Y,A as C,X as A}from"./entry.0937b550.js";import{u as E}from"./moment.06b805e1.js";import{s as H}from"./index.3b355e4d.js";/* empty css                   */import"./vue.f36acd1f.4b300957.js";var N=function(e){var a=e.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(a("textarea.color"),`;
    background: `).concat(a("textarea.background"),`;
    padding: `).concat(a("textarea.padding.y")," ").concat(a("textarea.padding.x"),`;
    border: 1px solid `).concat(a("textarea.border.color"),`;
    transition: background `).concat(a("textarea.transition.duration"),", color ").concat(a("textarea.transition.duration"),", border-color ").concat(a("textarea.transition.duration"),", outline-color ").concat(a("textarea.transition.duration"),", box-shadow ").concat(a("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(a("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(a("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(a("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(a("textarea.focus.border.color"),`;
    box-shadow: `).concat(a("textarea.focus.ring.shadow"),`;
    outline: `).concat(a("textarea.focus.ring.width")," ").concat(a("textarea.focus.ring.style")," ").concat(a("textarea.focus.ring.color"),`;
    outline-offset: `).concat(a("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(a("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(a("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(a("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(a("textarea.disabled.background"),`;
    color: `).concat(a("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(a("textarea.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}
`)},U={root:function(e){var a=e.instance,l=e.props;return["p-textarea p-component",{"p-filled":a.filled,"p-textarea-resizable ":l.autoResize,"p-invalid":l.invalid,"p-variant-filled":l.variant?l.variant==="filled":a.$primevue.config.inputStyle==="filled"||a.$primevue.config.inputVariant==="filled","p-textarea-fluid":a.hasFluid}]}},D=y.extend({name:"textarea",theme:N,classes:U}),M={name:"BaseTextarea",extends:$,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:D,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},w={name:"Textarea",extends:M,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(e){this.autoResize&&this.resize(),this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return I(this.fluid)?!!this.$pcFluid:this.fluid}}},W=["value","aria-invalid"];function X(t,e,a,l,r,n){return v(),x("textarea",_({class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:e[0]||(e[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},t.ptmi("root",n.ptmParams)),null,16,W)}w.render=X;var j=function(e){var a=e.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: `.concat(a("floatlabel.font.weight"),`;
    left: `).concat(a("floatlabel.position.x"),`;
    color: `).concat(a("floatlabel.color"),`;
    transition-duration: `).concat(a("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(a("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
     left: calc((`).concat(a("form.field.padding.x")," * 2) + ").concat(a("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(a("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(a("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(a("floatlabel.active.font.size"),`;
    font-weight: `).concat(a("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(a("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label ,
.p-floatlabel:has(.p-inputwrapper-focus) label  {
    color: `).concat(a("floatlabel.focus.color"),`;
}

/*.p-floatlabel .p-placeholder,
.p-floatlabel input::placeholder,
.p-floatlabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel .p-focus .p-placeholder,
.p-floatlabel input:focus::placeholder,
.p-floatlabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}*/

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: `).concat(a("floatlabel.in.input.padding.top"),`;
    padding-bottom: `).concat(a("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(a("floatlabel.in.active.top"),`;
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: `).concat(a("floatlabel.on.border.radius"),`;
    background: `).concat(a("floatlabel.on.active.background"),`;
    padding: `).concat(a("floatlabel.on.active.padding"),`;
}
`)},q={root:function(e){e.instance;var a=e.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},J=y.extend({name:"floatlabel",theme:j,classes:q}),K={name:"BaseFloatLabel",extends:$,props:{variant:{type:String,default:"over"}},style:J,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},k={name:"FloatLabel",extends:K,inheritAttrs:!1};function Q(t,e,a,l,r,n){return v(),x("span",_({class:t.cx("root")},t.ptmi("root")),[F(t.$slots,"default")],16)}k.render=Q;const G=t=>(Y("data-v-4c73924b"),t=t(),C(),t),O={class:"content"},Z={class:"section-header"},aa={action:"https://fabform.io/f/tX2SW6Q",method:"post",class:"form",target:"_blank"},ta={for:"name"},ea={for:"email"},la={for:"description"},na=G(()=>i("div",{class:"placeholder",style:{width:"100%","min-height":"50px",display:"block"}},null,-1)),oa={__name:"contact",setup(t){R(),T(),L();const e=P(),a=d(null),l=d(""),r=d(""),n=d(""),z=()=>{a.value.click(),l.value="",r.value="",n.value=""};return E({title:()=>"Nico Thuniot | "+e.t("menu.contact")}),(p,s)=>{const g=A,f=k,V=w,S=H;return v(),x("div",O,[i("div",Z,u(p.$t("menu.contact")),1),i("form",aa,[o(f,{variant:"in"},{default:b(()=>[o(g,{id:"name",style:{width:"100%"},modelValue:h(l),"onUpdate:modelValue":s[0]||(s[0]=c=>m(l)?l.value=c:null),name:"name",variant:"filled"},null,8,["modelValue"]),i("label",ta,u(p.$t("contact.name")),1)]),_:1}),o(f,{variant:"in"},{default:b(()=>[o(g,{id:"email",style:{width:"100%"},modelValue:h(r),"onUpdate:modelValue":s[1]||(s[1]=c=>m(r)?r.value=c:null),name:"email",variant:"filled"},null,8,["modelValue"]),i("label",ea,u(p.$t("contact.email")),1)]),_:1}),o(f,{variant:"in"},{default:b(()=>[o(V,{id:"description",name:"description",modelValue:h(n),"onUpdate:modelValue":s[2]||(s[2]=c=>m(n)?n.value=c:null),variant:"filled",style:{width:"100%",resize:"none"},rows:"5",cols:"30"},null,8,["modelValue"]),i("label",la,u(p.$t("contact.description")),1)]),_:1}),o(S,{label:p.$t("contact.submit"),onClick:z},null,8,["label"]),i("input",{type:"submit",ref_key:"submit",ref:a,value:"Submit",style:{display:"none"}},null,512)]),na])}}},da=B(oa,[["__scopeId","data-v-4c73924b"]]);export{da as default};
