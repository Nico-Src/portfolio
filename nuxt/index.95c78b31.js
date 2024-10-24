import{r as $t,B as Vn,C as $n,D as Gn,E as Gt,F as Bn,G as Bt,H as Zt,m as le,q as He,I as Me,y as C,t as ce,J as ue,K as Zn,R as qn,i as dt,L as Jn,M as Qn,N as st,x as qt,O as Ie,P as At,s as b,Q as Kn,_ as Xn,S as eo,u as to,T as no,v as x,U as oo,z as ro,A as ao,V as so}from"./entry.7e55c110.js";import{u as io}from"./vue.f36acd1f.262d1b9b.js";/* empty css                   */function lo(e,t){const n=$t({});return Vn(()=>{const o=$n(e),{title:r,titleTemplate:a,...s}=o;n.value={title:r,titleTemplate:a,meta:Gn(s)}}),io(n,t)}var co=function(t){var n=t.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(n("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("badge.padding"),`;
    background: `).concat(n("badge.primary.background"),`;
    color: `).concat(n("badge.primary.color"),`;
    font-size: `).concat(n("badge.font.size"),`;
    font-weight: `).concat(n("badge.font.weight"),`;
    min-width: `).concat(n("badge.min.width"),`;
    height: `).concat(n("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(n("badge.dot.size"),`;
    min-width: `).concat(n("badge.dot.size"),`;
    height: `).concat(n("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(n("badge.secondary.background"),`;
    color: `).concat(n("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(n("badge.success.background"),`;
    color: `).concat(n("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(n("badge.info.background"),`;
    color: `).concat(n("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(n("badge.warn.background"),`;
    color: `).concat(n("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(n("badge.danger.background"),`;
    color: `).concat(n("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(n("badge.contrast.background"),`;
    color: `).concat(n("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(n("badge.sm.font.size"),`;
    min-width: `).concat(n("badge.sm.min.width"),`;
    height: `).concat(n("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(n("badge.lg.font.size"),`;
    min-width: `).concat(n("badge.lg.min.width"),`;
    height: `).concat(n("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(n("badge.xl.font.size"),`;
    min-width: `).concat(n("badge.xl.min.width"),`;
    height: `).concat(n("badge.xl.height"),`;
}
`)},uo={root:function(t){var n=t.props,o=t.instance;return["p-badge p-component",{"p-badge-circle":Bn(n.value)&&String(n.value).length===1,"p-badge-dot":Bt(n.value)&&!o.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},ho=Gt.extend({name:"badge",theme:co,classes:uo}),fo={name:"BaseBadge",extends:Zt,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:ho,provide:function(){return{$pcBadge:this,$parentInstance:this}}},Jt={name:"Badge",extends:fo,inheritAttrs:!1};function bo(e,t,n,o,r,a){return le(),He("span",ue({class:e.cx("root")},e.ptmi("root")),[Me(e.$slots,"default",{},function(){return[C(ce(e.value),1)]})],16)}Jt.render=bo;function Ye(e){"@babel/helpers - typeof";return Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ye(e)}function j(e,t,n){return(t=po(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function po(e){var t=mo(e,"string");return Ye(t)=="symbol"?t:t+""}function mo(e,t){if(Ye(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Ye(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var go=function(t){var n=t.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("button.primary.color"),`;
    background: `).concat(n("button.primary.background"),`;
    border: 1px solid `).concat(n("button.primary.border.color"),`;
    padding: `).concat(n("button.padding.y")," ").concat(n("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("button.transition.duration"),", color ").concat(n("button.transition.duration"),", border-color ").concat(n("button.transition.duration"),`,
            outline-color `).concat(n("button.transition.duration"),", box-shadow ").concat(n("button.transition.duration"),`;
    border-radius: `).concat(n("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(n("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(n("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(n("button.sm.font.size"),`;
    padding: `).concat(n("button.sm.padding.y")," ").concat(n("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(n("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(n("button.lg.font.size"),`;
    padding: `).concat(n("button.lg.padding.y")," ").concat(n("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(n("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(n("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(n("button.primary.hover.background"),`;
    border: 1px solid `).concat(n("button.primary.hover.border.color"),`;
    color: `).concat(n("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(n("button.primary.active.background"),`;
    border: 1px solid `).concat(n("button.primary.active.border.color"),`;
    color: `).concat(n("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(n("button.primary.focus.ring.shadow"),`;
    outline: `).concat(n("button.focus.ring.width")," ").concat(n("button.focus.ring.style")," ").concat(n("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(n("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(n("button.badge.size"),`;
    height: `).concat(n("button.badge.size"),`;
    line-height: `).concat(n("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(n("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(n("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(n("button.secondary.background"),`;
    border: 1px solid `).concat(n("button.secondary.border.color"),`;
    color: `).concat(n("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.secondary.hover.background"),`;
    border: 1px solid `).concat(n("button.secondary.hover.border.color"),`;
    color: `).concat(n("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.secondary.active.background"),`;
    border: 1px solid `).concat(n("button.secondary.active.border.color"),`;
    color: `).concat(n("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(n("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(n("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(n("button.success.background"),`;
    border: 1px solid `).concat(n("button.success.border.color"),`;
    color: `).concat(n("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.success.hover.background"),`;
    border: 1px solid `).concat(n("button.success.hover.border.color"),`;
    color: `).concat(n("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(n("button.success.active.background"),`;
    border: 1px solid `).concat(n("button.success.active.border.color"),`;
    color: `).concat(n("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(n("button.success.focus.ring.color"),`;
    box-shadow: `).concat(n("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(n("button.info.background"),`;
    border: 1px solid `).concat(n("button.info.border.color"),`;
    color: `).concat(n("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.info.hover.background"),`;
    border: 1px solid `).concat(n("button.info.hover.border.color"),`;
    color: `).concat(n("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(n("button.info.active.background"),`;
    border: 1px solid `).concat(n("button.info.active.border.color"),`;
    color: `).concat(n("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(n("button.info.focus.ring.color"),`;
    box-shadow: `).concat(n("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(n("button.warn.background"),`;
    border: 1px solid `).concat(n("button.warn.border.color"),`;
    color: `).concat(n("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.warn.hover.background"),`;
    border: 1px solid `).concat(n("button.warn.hover.border.color"),`;
    color: `).concat(n("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.warn.active.background"),`;
    border: 1px solid `).concat(n("button.warn.active.border.color"),`;
    color: `).concat(n("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(n("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(n("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(n("button.help.background"),`;
    border: 1px solid `).concat(n("button.help.border.color"),`;
    color: `).concat(n("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.help.hover.background"),`;
    border: 1px solid `).concat(n("button.help.hover.border.color"),`;
    color: `).concat(n("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(n("button.help.active.background"),`;
    border: 1px solid `).concat(n("button.help.active.border.color"),`;
    color: `).concat(n("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(n("button.help.focus.ring.color"),`;
    box-shadow: `).concat(n("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(n("button.danger.background"),`;
    border: 1px solid `).concat(n("button.danger.border.color"),`;
    color: `).concat(n("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.danger.hover.background"),`;
    border: 1px solid `).concat(n("button.danger.hover.border.color"),`;
    color: `).concat(n("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.danger.active.background"),`;
    border: 1px solid `).concat(n("button.danger.active.border.color"),`;
    color: `).concat(n("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(n("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(n("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(n("button.contrast.background"),`;
    border: 1px solid `).concat(n("button.contrast.border.color"),`;
    color: `).concat(n("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.contrast.hover.background"),`;
    border: 1px solid `).concat(n("button.contrast.hover.border.color"),`;
    color: `).concat(n("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.contrast.active.background"),`;
    border: 1px solid `).concat(n("button.contrast.active.border.color"),`;
    color: `).concat(n("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(n("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(n("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(n("button.outlined.primary.hover.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(n("button.outlined.primary.active.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.outlined.secondary.active.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.outlined.success.hover.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(n("button.outlined.success.active.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.outlined.info.hover.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(n("button.outlined.info.active.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.outlined.warn.hover.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.outlined.warn.active.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.outlined.help.hover.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(n("button.outlined.help.active.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.outlined.danger.hover.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.outlined.danger.active.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.outlined.contrast.active.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.outlined.plain.hover.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.outlined.plain.active.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(n("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(n("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(n("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(n("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(n("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.active.color"),`;
}
`)},yo={root:function(t){var n=t.instance,o=t.props;return["p-button p-component",j(j(j(j(j(j(j(j(j({"p-button-icon-only":n.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text),"p-button-outlined",o.outlined),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(t){var n=t.props;return["p-button-icon",j({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},_o=Gt.extend({name:"button",theme:go,classes:yo}),vo={name:"BaseButton",extends:Zt,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:_o,provide:function(){return{$pcButton:this,$parentInstance:this}}},Qt={name:"Button",extends:vo,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return ue(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Bt(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:Zn,Badge:Jt},directives:{ripple:qn}};function ko(e,t,n,o,r,a){var s=dt("SpinnerIcon"),u=dt("Badge"),h=Jn("ripple");return e.asChild?Me(e.$slots,"default",{key:1,class:Ie(e.cx("root")),a11yAttrs:a.a11yAttrs}):Qn((le(),st(Kn(e.as),ue({key:0,class:e.cx("root")},a.attrs),{default:qt(function(){return[Me(e.$slots,"default",{},function(){return[e.loading?Me(e.$slots,"loadingicon",{key:0,class:Ie([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(le(),He("span",ue({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(le(),st(s,ue({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):Me(e.$slots,"icon",{key:1,class:Ie([e.cx("icon")])},function(){return[e.icon?(le(),He("span",ue({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):At("",!0)]}),b("span",ue({class:e.cx("label")},e.ptm("label")),ce(e.label||" "),17),e.badge?(le(),st(u,{key:2,value:e.badge,class:Ie(e.badgeClass),severity:e.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):At("",!0)]})]}),_:3},16,["class"])),[[h]])}Qt.render=ko;const wo=""+globalThis.__publicAssetsURL("img/logo.png"),So=""+globalThis.__publicAssetsURL("img/mandelbrot.png"),Mo=""+globalThis.__publicAssetsURL("img/lego.png");//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Kt;function l(){return Kt.apply(null,arguments)}function Do(e){Kt=e}function A(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function he(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function g(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _t(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(g(e,t))return!1;return!0}function N(e){return e===void 0}function X(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Ne(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Xt(e,t){var n=[],o,r=e.length;for(o=0;o<r;++o)n.push(t(e[o],o));return n}function re(e,t){for(var n in t)g(t,n)&&(e[n]=t[n]);return g(t,"toString")&&(e.toString=t.toString),g(t,"valueOf")&&(e.valueOf=t.valueOf),e}function $(e,t,n,o){return Mn(e,t,n,o,!0).utc()}function xo(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function f(e){return e._pf==null&&(e._pf=xo()),e._pf}var ht;Array.prototype.some?ht=Array.prototype.some:ht=function(e){var t=Object(this),n=t.length>>>0,o;for(o=0;o<n;o++)if(o in t&&e.call(this,t[o],o,t))return!0;return!1};function vt(e){if(e._isValid==null){var t=f(e),n=ht.call(t.parsedDateParts,function(r){return r!=null}),o=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(o=o&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=o;else return o}return e._isValid}function Ze(e){var t=$(NaN);return e!=null?re(f(t),e):f(t).userInvalidated=!0,t}var Et=l.momentProperties=[],it=!1;function kt(e,t){var n,o,r,a=Et.length;if(N(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),N(t._i)||(e._i=t._i),N(t._f)||(e._f=t._f),N(t._l)||(e._l=t._l),N(t._strict)||(e._strict=t._strict),N(t._tzm)||(e._tzm=t._tzm),N(t._isUTC)||(e._isUTC=t._isUTC),N(t._offset)||(e._offset=t._offset),N(t._pf)||(e._pf=f(t)),N(t._locale)||(e._locale=t._locale),a>0)for(n=0;n<a;n++)o=Et[n],r=t[o],N(r)||(e[o]=r);return e}function We(e){kt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),it===!1&&(it=!0,l.updateOffset(this),it=!1)}function E(e){return e instanceof We||e!=null&&e._isAMomentObject!=null}function en(e){l.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function I(e,t){var n=!0;return re(function(){if(l.deprecationHandler!=null&&l.deprecationHandler(null,e),n){var o=[],r,a,s,u=arguments.length;for(a=0;a<u;a++){if(r="",typeof arguments[a]=="object"){r+=`
[`+a+"] ";for(s in arguments[0])g(arguments[0],s)&&(r+=s+": "+arguments[0][s]+", ");r=r.slice(0,-2)}else r=arguments[a];o.push(r)}en(e+`
Arguments: `+Array.prototype.slice.call(o).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Ht={};function tn(e,t){l.deprecationHandler!=null&&l.deprecationHandler(e,t),Ht[e]||(en(t),Ht[e]=!0)}l.suppressDeprecationWarnings=!1;l.deprecationHandler=null;function G(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Yo(e){var t,n;for(n in e)g(e,n)&&(t=e[n],G(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function ft(e,t){var n=re({},e),o;for(o in t)g(t,o)&&(he(e[o])&&he(t[o])?(n[o]={},re(n[o],e[o]),re(n[o],t[o])):t[o]!=null?n[o]=t[o]:delete n[o]);for(o in e)g(e,o)&&!g(t,o)&&he(e[o])&&(n[o]=re({},n[o]));return n}function wt(e){e!=null&&this.set(e)}var bt;Object.keys?bt=Object.keys:bt=function(e){var t,n=[];for(t in e)g(e,t)&&n.push(t);return n};var Oo={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function To(e,t,n){var o=this._calendar[e]||this._calendar.sameElse;return G(o)?o.call(t,n):o}function V(e,t,n){var o=""+Math.abs(e),r=t-o.length,a=e>=0;return(a?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+o}var St=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Le=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,lt={},ge={};function d(e,t,n,o){var r=o;typeof o=="string"&&(r=function(){return this[o]()}),e&&(ge[e]=r),t&&(ge[t[0]]=function(){return V(r.apply(this,arguments),t[1],t[2])}),n&&(ge[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)})}function Po(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function No(e){var t=e.match(St),n,o;for(n=0,o=t.length;n<o;n++)ge[t[n]]?t[n]=ge[t[n]]:t[n]=Po(t[n]);return function(r){var a="",s;for(s=0;s<o;s++)a+=G(t[s])?t[s].call(r,e):t[s];return a}}function Ue(e,t){return e.isValid()?(t=nn(t,e.localeData()),lt[t]=lt[t]||No(t),lt[t](e)):e.localeData().invalidDate()}function nn(e,t){var n=5;function o(r){return t.longDateFormat(r)||r}for(Le.lastIndex=0;n>=0&&Le.test(e);)e=e.replace(Le,o),Le.lastIndex=0,n-=1;return e}var Wo={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ro(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(St).map(function(o){return o==="MMMM"||o==="MM"||o==="DD"||o==="dddd"?o.slice(1):o}).join(""),this._longDateFormat[e])}var Fo="Invalid date";function Io(){return this._invalidDate}var Lo="%d",Co=/\d{1,2}/;function Uo(e){return this._ordinal.replace("%d",e)}var Ao={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Eo(e,t,n,o){var r=this._relativeTime[n];return G(r)?r(e,t,n,o):r.replace(/%d/i,e)}function Ho(e,t){var n=this._relativeTime[e>0?"future":"past"];return G(n)?n(t):n.replace(/%s/i,t)}var De={};function O(e,t){var n=e.toLowerCase();De[n]=De[n+"s"]=De[t]=e}function L(e){return typeof e=="string"?De[e]||De[e.toLowerCase()]:void 0}function Mt(e){var t={},n,o;for(o in e)g(e,o)&&(n=L(o),n&&(t[n]=e[o]));return t}var on={};function T(e,t){on[e]=t}function jo(e){var t=[],n;for(n in e)g(e,n)&&t.push({unit:n,priority:on[n]});return t.sort(function(o,r){return o.priority-r.priority}),t}function qe(e){return e%4===0&&e%100!==0||e%400===0}function F(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function p(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=F(t)),n}function ve(e,t){return function(n){return n!=null?(rn(this,e,n),l.updateOffset(this,t),this):je(this,e)}}function je(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function rn(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&qe(e.year())&&e.month()===1&&e.date()===29?(n=p(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),tt(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function zo(e){return e=L(e),G(this[e])?this[e]():this}function Vo(e,t){if(typeof e=="object"){e=Mt(e);var n=jo(e),o,r=n.length;for(o=0;o<r;o++)this[n[o].unit](e[n[o].unit])}else if(e=L(e),G(this[e]))return this[e](t);return this}var an=/\d/,R=/\d\d/,sn=/\d{3}/,Dt=/\d{4}/,Je=/[+-]?\d{6}/,w=/\d\d?/,ln=/\d\d\d\d?/,cn=/\d\d\d\d\d\d?/,Qe=/\d{1,3}/,xt=/\d{1,4}/,Ke=/[+-]?\d{1,6}/,ke=/\d+/,Xe=/[+-]?\d+/,$o=/Z|[+-]\d\d:?\d\d/gi,et=/Z|[+-]\d\d(?::?\d\d)?/gi,Go=/[+-]?\d+(\.\d{1,3})?/,Re=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ze;ze={};function c(e,t,n){ze[e]=G(t)?t:function(o,r){return o&&n?n:t}}function Bo(e,t){return g(ze,e)?ze[e](t._strict,t._locale):new RegExp(Zo(e))}function Zo(e){return W(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,o,r,a){return n||o||r||a}))}function W(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var pt={};function v(e,t){var n,o=t,r;for(typeof e=="string"&&(e=[e]),X(t)&&(o=function(a,s){s[t]=p(a)}),r=e.length,n=0;n<r;n++)pt[e[n]]=o}function Fe(e,t){v(e,function(n,o,r,a){r._w=r._w||{},t(n,r._w,r,a)})}function qo(e,t,n){t!=null&&g(pt,e)&&pt[e](t,n._a,n,e)}var Y=0,J=1,z=2,D=3,U=4,Q=5,de=6,Jo=7,Qo=8;function Ko(e,t){return(e%t+t)%t}var M;Array.prototype.indexOf?M=Array.prototype.indexOf:M=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function tt(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Ko(t,12);return e+=(t-n)/12,n===1?qe(e)?29:28:31-n%7%2}d("M",["MM",2],"Mo",function(){return this.month()+1});d("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});d("MMMM",0,0,function(e){return this.localeData().months(this,e)});O("month","M");T("month",8);c("M",w);c("MM",w,R);c("MMM",function(e,t){return t.monthsShortRegex(e)});c("MMMM",function(e,t){return t.monthsRegex(e)});v(["M","MM"],function(e,t){t[J]=p(e)-1});v(["MMM","MMMM"],function(e,t,n,o){var r=n._locale.monthsParse(e,o,n._strict);r!=null?t[J]=r:f(n).invalidMonth=e});var Xo="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),un="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),dn=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,er=Re,tr=Re;function nr(e,t){return e?A(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||dn).test(t)?"format":"standalone"][e.month()]:A(this._months)?this._months:this._months.standalone}function or(e,t){return e?A(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[dn.test(t)?"format":"standalone"][e.month()]:A(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function rr(e,t,n){var o,r,a,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],o=0;o<12;++o)a=$([2e3,o]),this._shortMonthsParse[o]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[o]=this.months(a,"").toLocaleLowerCase();return n?t==="MMM"?(r=M.call(this._shortMonthsParse,s),r!==-1?r:null):(r=M.call(this._longMonthsParse,s),r!==-1?r:null):t==="MMM"?(r=M.call(this._shortMonthsParse,s),r!==-1?r:(r=M.call(this._longMonthsParse,s),r!==-1?r:null)):(r=M.call(this._longMonthsParse,s),r!==-1?r:(r=M.call(this._shortMonthsParse,s),r!==-1?r:null))}function ar(e,t,n){var o,r,a;if(this._monthsParseExact)return rr.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),o=0;o<12;o++){if(r=$([2e3,o]),n&&!this._longMonthsParse[o]&&(this._longMonthsParse[o]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[o]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!n&&!this._monthsParse[o]&&(a="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[o]=new RegExp(a.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[o].test(e))return o;if(n&&t==="MMM"&&this._shortMonthsParse[o].test(e))return o;if(!n&&this._monthsParse[o].test(e))return o}}function hn(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=p(t);else if(t=e.localeData().monthsParse(t),!X(t))return e}return n=Math.min(e.date(),tt(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function fn(e){return e!=null?(hn(this,e),l.updateOffset(this,!0),this):je(this,"Month")}function sr(){return tt(this.year(),this.month())}function ir(e){return this._monthsParseExact?(g(this,"_monthsRegex")||bn.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(g(this,"_monthsShortRegex")||(this._monthsShortRegex=er),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function lr(e){return this._monthsParseExact?(g(this,"_monthsRegex")||bn.call(this),e?this._monthsStrictRegex:this._monthsRegex):(g(this,"_monthsRegex")||(this._monthsRegex=tr),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function bn(){function e(s,u){return u.length-s.length}var t=[],n=[],o=[],r,a;for(r=0;r<12;r++)a=$([2e3,r]),t.push(this.monthsShort(a,"")),n.push(this.months(a,"")),o.push(this.months(a,"")),o.push(this.monthsShort(a,""));for(t.sort(e),n.sort(e),o.sort(e),r=0;r<12;r++)t[r]=W(t[r]),n[r]=W(n[r]);for(r=0;r<24;r++)o[r]=W(o[r]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}d("Y",0,0,function(){var e=this.year();return e<=9999?V(e,4):"+"+e});d(0,["YY",2],0,function(){return this.year()%100});d(0,["YYYY",4],0,"year");d(0,["YYYYY",5],0,"year");d(0,["YYYYYY",6,!0],0,"year");O("year","y");T("year",1);c("Y",Xe);c("YY",w,R);c("YYYY",xt,Dt);c("YYYYY",Ke,Je);c("YYYYYY",Ke,Je);v(["YYYYY","YYYYYY"],Y);v("YYYY",function(e,t){t[Y]=e.length===2?l.parseTwoDigitYear(e):p(e)});v("YY",function(e,t){t[Y]=l.parseTwoDigitYear(e)});v("Y",function(e,t){t[Y]=parseInt(e,10)});function xe(e){return qe(e)?366:365}l.parseTwoDigitYear=function(e){return p(e)+(p(e)>68?1900:2e3)};var pn=ve("FullYear",!0);function cr(){return qe(this.year())}function ur(e,t,n,o,r,a,s){var u;return e<100&&e>=0?(u=new Date(e+400,t,n,o,r,a,s),isFinite(u.getFullYear())&&u.setFullYear(e)):u=new Date(e,t,n,o,r,a,s),u}function Oe(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ve(e,t,n){var o=7+t-n,r=(7+Oe(e,0,o).getUTCDay()-t)%7;return-r+o-1}function mn(e,t,n,o,r){var a=(7+n-o)%7,s=Ve(e,o,r),u=1+7*(t-1)+a+s,h,_;return u<=0?(h=e-1,_=xe(h)+u):u>xe(e)?(h=e+1,_=u-xe(e)):(h=e,_=u),{year:h,dayOfYear:_}}function Te(e,t,n){var o=Ve(e.year(),t,n),r=Math.floor((e.dayOfYear()-o-1)/7)+1,a,s;return r<1?(s=e.year()-1,a=r+K(s,t,n)):r>K(e.year(),t,n)?(a=r-K(e.year(),t,n),s=e.year()+1):(s=e.year(),a=r),{week:a,year:s}}function K(e,t,n){var o=Ve(e,t,n),r=Ve(e+1,t,n);return(xe(e)-o+r)/7}d("w",["ww",2],"wo","week");d("W",["WW",2],"Wo","isoWeek");O("week","w");O("isoWeek","W");T("week",5);T("isoWeek",5);c("w",w);c("ww",w,R);c("W",w);c("WW",w,R);Fe(["w","ww","W","WW"],function(e,t,n,o){t[o.substr(0,1)]=p(e)});function dr(e){return Te(e,this._week.dow,this._week.doy).week}var hr={dow:0,doy:6};function fr(){return this._week.dow}function br(){return this._week.doy}function pr(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function mr(e){var t=Te(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}d("d",0,"do","day");d("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});d("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});d("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});d("e",0,0,"weekday");d("E",0,0,"isoWeekday");O("day","d");O("weekday","e");O("isoWeekday","E");T("day",11);T("weekday",11);T("isoWeekday",11);c("d",w);c("e",w);c("E",w);c("dd",function(e,t){return t.weekdaysMinRegex(e)});c("ddd",function(e,t){return t.weekdaysShortRegex(e)});c("dddd",function(e,t){return t.weekdaysRegex(e)});Fe(["dd","ddd","dddd"],function(e,t,n,o){var r=n._locale.weekdaysParse(e,o,n._strict);r!=null?t.d=r:f(n).invalidWeekday=e});Fe(["d","e","E"],function(e,t,n,o){t[o]=p(e)});function gr(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function yr(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Yt(e,t){return e.slice(t,7).concat(e.slice(0,t))}var _r="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),gn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),vr="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),kr=Re,wr=Re,Sr=Re;function Mr(e,t){var n=A(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Yt(n,this._week.dow):e?n[e.day()]:n}function Dr(e){return e===!0?Yt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function xr(e){return e===!0?Yt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Yr(e,t,n){var o,r,a,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],o=0;o<7;++o)a=$([2e3,1]).day(o),this._minWeekdaysParse[o]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[o]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[o]=this.weekdays(a,"").toLocaleLowerCase();return n?t==="dddd"?(r=M.call(this._weekdaysParse,s),r!==-1?r:null):t==="ddd"?(r=M.call(this._shortWeekdaysParse,s),r!==-1?r:null):(r=M.call(this._minWeekdaysParse,s),r!==-1?r:null):t==="dddd"?(r=M.call(this._weekdaysParse,s),r!==-1||(r=M.call(this._shortWeekdaysParse,s),r!==-1)?r:(r=M.call(this._minWeekdaysParse,s),r!==-1?r:null)):t==="ddd"?(r=M.call(this._shortWeekdaysParse,s),r!==-1||(r=M.call(this._weekdaysParse,s),r!==-1)?r:(r=M.call(this._minWeekdaysParse,s),r!==-1?r:null)):(r=M.call(this._minWeekdaysParse,s),r!==-1||(r=M.call(this._weekdaysParse,s),r!==-1)?r:(r=M.call(this._shortWeekdaysParse,s),r!==-1?r:null))}function Or(e,t,n){var o,r,a;if(this._weekdaysParseExact)return Yr.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),o=0;o<7;o++){if(r=$([2e3,1]).day(o),n&&!this._fullWeekdaysParse[o]&&(this._fullWeekdaysParse[o]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[o]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[o]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[o]||(a="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[o]=new RegExp(a.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[o].test(e))return o;if(n&&t==="ddd"&&this._shortWeekdaysParse[o].test(e))return o;if(n&&t==="dd"&&this._minWeekdaysParse[o].test(e))return o;if(!n&&this._weekdaysParse[o].test(e))return o}}function Tr(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=gr(e,this.localeData()),this.add(e-t,"d")):t}function Pr(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Nr(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=yr(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Wr(e){return this._weekdaysParseExact?(g(this,"_weekdaysRegex")||Ot.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(g(this,"_weekdaysRegex")||(this._weekdaysRegex=kr),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Rr(e){return this._weekdaysParseExact?(g(this,"_weekdaysRegex")||Ot.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(g(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=wr),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Fr(e){return this._weekdaysParseExact?(g(this,"_weekdaysRegex")||Ot.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(g(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Sr),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ot(){function e(P,B){return B.length-P.length}var t=[],n=[],o=[],r=[],a,s,u,h,_;for(a=0;a<7;a++)s=$([2e3,1]).day(a),u=W(this.weekdaysMin(s,"")),h=W(this.weekdaysShort(s,"")),_=W(this.weekdays(s,"")),t.push(u),n.push(h),o.push(_),r.push(u),r.push(h),r.push(_);t.sort(e),n.sort(e),o.sort(e),r.sort(e),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Tt(){return this.hours()%12||12}function Ir(){return this.hours()||24}d("H",["HH",2],0,"hour");d("h",["hh",2],0,Tt);d("k",["kk",2],0,Ir);d("hmm",0,0,function(){return""+Tt.apply(this)+V(this.minutes(),2)});d("hmmss",0,0,function(){return""+Tt.apply(this)+V(this.minutes(),2)+V(this.seconds(),2)});d("Hmm",0,0,function(){return""+this.hours()+V(this.minutes(),2)});d("Hmmss",0,0,function(){return""+this.hours()+V(this.minutes(),2)+V(this.seconds(),2)});function yn(e,t){d(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}yn("a",!0);yn("A",!1);O("hour","h");T("hour",13);function _n(e,t){return t._meridiemParse}c("a",_n);c("A",_n);c("H",w);c("h",w);c("k",w);c("HH",w,R);c("hh",w,R);c("kk",w,R);c("hmm",ln);c("hmmss",cn);c("Hmm",ln);c("Hmmss",cn);v(["H","HH"],D);v(["k","kk"],function(e,t,n){var o=p(e);t[D]=o===24?0:o});v(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});v(["h","hh"],function(e,t,n){t[D]=p(e),f(n).bigHour=!0});v("hmm",function(e,t,n){var o=e.length-2;t[D]=p(e.substr(0,o)),t[U]=p(e.substr(o)),f(n).bigHour=!0});v("hmmss",function(e,t,n){var o=e.length-4,r=e.length-2;t[D]=p(e.substr(0,o)),t[U]=p(e.substr(o,2)),t[Q]=p(e.substr(r)),f(n).bigHour=!0});v("Hmm",function(e,t,n){var o=e.length-2;t[D]=p(e.substr(0,o)),t[U]=p(e.substr(o))});v("Hmmss",function(e,t,n){var o=e.length-4,r=e.length-2;t[D]=p(e.substr(0,o)),t[U]=p(e.substr(o,2)),t[Q]=p(e.substr(r))});function Lr(e){return(e+"").toLowerCase().charAt(0)==="p"}var Cr=/[ap]\.?m?\.?/i,Ur=ve("Hours",!0);function Ar(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var vn={calendar:Oo,longDateFormat:Wo,invalidDate:Fo,ordinal:Lo,dayOfMonthOrdinalParse:Co,relativeTime:Ao,months:Xo,monthsShort:un,week:hr,weekdays:_r,weekdaysMin:vr,weekdaysShort:gn,meridiemParse:Cr},S={},we={},Pe;function Er(e,t){var n,o=Math.min(e.length,t.length);for(n=0;n<o;n+=1)if(e[n]!==t[n])return n;return o}function jt(e){return e&&e.toLowerCase().replace("_","-")}function Hr(e){for(var t=0,n,o,r,a;t<e.length;){for(a=jt(e[t]).split("-"),n=a.length,o=jt(e[t+1]),o=o?o.split("-"):null;n>0;){if(r=nt(a.slice(0,n).join("-")),r)return r;if(o&&o.length>=n&&Er(a,o)>=n-1)break;n--}t++}return Pe}function jr(e){return e.match("^[^/\\\\]*$")!=null}function nt(e){var t=null,n;if(S[e]===void 0&&typeof module<"u"&&module&&module.exports&&jr(e))try{t=Pe._abbr,n=require,n("./locale/"+e),se(t)}catch{S[e]=null}return S[e]}function se(e,t){var n;return e&&(N(t)?n=ee(e):n=Pt(e,t),n?Pe=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Pe._abbr}function Pt(e,t){if(t!==null){var n,o=vn;if(t.abbr=e,S[e]!=null)tn("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),o=S[e]._config;else if(t.parentLocale!=null)if(S[t.parentLocale]!=null)o=S[t.parentLocale]._config;else if(n=nt(t.parentLocale),n!=null)o=n._config;else return we[t.parentLocale]||(we[t.parentLocale]=[]),we[t.parentLocale].push({name:e,config:t}),null;return S[e]=new wt(ft(o,t)),we[e]&&we[e].forEach(function(r){Pt(r.name,r.config)}),se(e),S[e]}else return delete S[e],null}function zr(e,t){if(t!=null){var n,o,r=vn;S[e]!=null&&S[e].parentLocale!=null?S[e].set(ft(S[e]._config,t)):(o=nt(e),o!=null&&(r=o._config),t=ft(r,t),o==null&&(t.abbr=e),n=new wt(t),n.parentLocale=S[e],S[e]=n),se(e)}else S[e]!=null&&(S[e].parentLocale!=null?(S[e]=S[e].parentLocale,e===se()&&se(e)):S[e]!=null&&delete S[e]);return S[e]}function ee(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Pe;if(!A(e)){if(t=nt(e),t)return t;e=[e]}return Hr(e)}function Vr(){return bt(S)}function Nt(e){var t,n=e._a;return n&&f(e).overflow===-2&&(t=n[J]<0||n[J]>11?J:n[z]<1||n[z]>tt(n[Y],n[J])?z:n[D]<0||n[D]>24||n[D]===24&&(n[U]!==0||n[Q]!==0||n[de]!==0)?D:n[U]<0||n[U]>59?U:n[Q]<0||n[Q]>59?Q:n[de]<0||n[de]>999?de:-1,f(e)._overflowDayOfYear&&(t<Y||t>z)&&(t=z),f(e)._overflowWeeks&&t===-1&&(t=Jo),f(e)._overflowWeekday&&t===-1&&(t=Qo),f(e).overflow=t),e}var $r=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Gr=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Br=/Z|[+-]\d\d(?::?\d\d)?/,Ce=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ct=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Zr=/^\/?Date\((-?\d+)/i,qr=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Jr={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function kn(e){var t,n,o=e._i,r=$r.exec(o)||Gr.exec(o),a,s,u,h,_=Ce.length,P=ct.length;if(r){for(f(e).iso=!0,t=0,n=_;t<n;t++)if(Ce[t][1].exec(r[1])){s=Ce[t][0],a=Ce[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(r[3]){for(t=0,n=P;t<n;t++)if(ct[t][1].exec(r[3])){u=(r[2]||" ")+ct[t][0];break}if(u==null){e._isValid=!1;return}}if(!a&&u!=null){e._isValid=!1;return}if(r[4])if(Br.exec(r[4]))h="Z";else{e._isValid=!1;return}e._f=s+(u||"")+(h||""),Rt(e)}else e._isValid=!1}function Qr(e,t,n,o,r,a){var s=[Kr(e),un.indexOf(t),parseInt(n,10),parseInt(o,10),parseInt(r,10)];return a&&s.push(parseInt(a,10)),s}function Kr(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Xr(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ea(e,t,n){if(e){var o=gn.indexOf(e),r=new Date(t[0],t[1],t[2]).getDay();if(o!==r)return f(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function ta(e,t,n){if(e)return Jr[e];if(t)return 0;var o=parseInt(n,10),r=o%100,a=(o-r)/100;return a*60+r}function wn(e){var t=qr.exec(Xr(e._i)),n;if(t){if(n=Qr(t[4],t[3],t[2],t[5],t[6],t[7]),!ea(t[1],n,e))return;e._a=n,e._tzm=ta(t[8],t[9],t[10]),e._d=Oe.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),f(e).rfc2822=!0}else e._isValid=!1}function na(e){var t=Zr.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(kn(e),e._isValid===!1)delete e._isValid;else return;if(wn(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:l.createFromInputFallback(e)}l.createFromInputFallback=I("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function pe(e,t,n){return e??t??n}function oa(e){var t=new Date(l.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Wt(e){var t,n,o=[],r,a,s;if(!e._d){for(r=oa(e),e._w&&e._a[z]==null&&e._a[J]==null&&ra(e),e._dayOfYear!=null&&(s=pe(e._a[Y],r[Y]),(e._dayOfYear>xe(s)||e._dayOfYear===0)&&(f(e)._overflowDayOfYear=!0),n=Oe(s,0,e._dayOfYear),e._a[J]=n.getUTCMonth(),e._a[z]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=o[t]=r[t];for(;t<7;t++)e._a[t]=o[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[D]===24&&e._a[U]===0&&e._a[Q]===0&&e._a[de]===0&&(e._nextDay=!0,e._a[D]=0),e._d=(e._useUTC?Oe:ur).apply(null,o),a=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[D]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==a&&(f(e).weekdayMismatch=!0)}}function ra(e){var t,n,o,r,a,s,u,h,_;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(a=1,s=4,n=pe(t.GG,e._a[Y],Te(k(),1,4).year),o=pe(t.W,1),r=pe(t.E,1),(r<1||r>7)&&(h=!0)):(a=e._locale._week.dow,s=e._locale._week.doy,_=Te(k(),a,s),n=pe(t.gg,e._a[Y],_.year),o=pe(t.w,_.week),t.d!=null?(r=t.d,(r<0||r>6)&&(h=!0)):t.e!=null?(r=t.e+a,(t.e<0||t.e>6)&&(h=!0)):r=a),o<1||o>K(n,a,s)?f(e)._overflowWeeks=!0:h!=null?f(e)._overflowWeekday=!0:(u=mn(n,o,r,a,s),e._a[Y]=u.year,e._dayOfYear=u.dayOfYear)}l.ISO_8601=function(){};l.RFC_2822=function(){};function Rt(e){if(e._f===l.ISO_8601){kn(e);return}if(e._f===l.RFC_2822){wn(e);return}e._a=[],f(e).empty=!0;var t=""+e._i,n,o,r,a,s,u=t.length,h=0,_,P;for(r=nn(e._f,e._locale).match(St)||[],P=r.length,n=0;n<P;n++)a=r[n],o=(t.match(Bo(a,e))||[])[0],o&&(s=t.substr(0,t.indexOf(o)),s.length>0&&f(e).unusedInput.push(s),t=t.slice(t.indexOf(o)+o.length),h+=o.length),ge[a]?(o?f(e).empty=!1:f(e).unusedTokens.push(a),qo(a,o,e)):e._strict&&!o&&f(e).unusedTokens.push(a);f(e).charsLeftOver=u-h,t.length>0&&f(e).unusedInput.push(t),e._a[D]<=12&&f(e).bigHour===!0&&e._a[D]>0&&(f(e).bigHour=void 0),f(e).parsedDateParts=e._a.slice(0),f(e).meridiem=e._meridiem,e._a[D]=aa(e._locale,e._a[D],e._meridiem),_=f(e).era,_!==null&&(e._a[Y]=e._locale.erasConvertYear(_,e._a[Y])),Wt(e),Nt(e)}function aa(e,t,n){var o;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(o=e.isPM(n),o&&t<12&&(t+=12),!o&&t===12&&(t=0)),t)}function sa(e){var t,n,o,r,a,s,u=!1,h=e._f.length;if(h===0){f(e).invalidFormat=!0,e._d=new Date(NaN);return}for(r=0;r<h;r++)a=0,s=!1,t=kt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[r],Rt(t),vt(t)&&(s=!0),a+=f(t).charsLeftOver,a+=f(t).unusedTokens.length*10,f(t).score=a,u?a<o&&(o=a,n=t):(o==null||a<o||s)&&(o=a,n=t,s&&(u=!0));re(e,n||t)}function ia(e){if(!e._d){var t=Mt(e._i),n=t.day===void 0?t.date:t.day;e._a=Xt([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(o){return o&&parseInt(o,10)}),Wt(e)}}function la(e){var t=new We(Nt(Sn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Sn(e){var t=e._i,n=e._f;return e._locale=e._locale||ee(e._l),t===null||n===void 0&&t===""?Ze({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),E(t)?new We(Nt(t)):(Ne(t)?e._d=t:A(n)?sa(e):n?Rt(e):ca(e),vt(e)||(e._d=null),e))}function ca(e){var t=e._i;N(t)?e._d=new Date(l.now()):Ne(t)?e._d=new Date(t.valueOf()):typeof t=="string"?na(e):A(t)?(e._a=Xt(t.slice(0),function(n){return parseInt(n,10)}),Wt(e)):he(t)?ia(e):X(t)?e._d=new Date(t):l.createFromInputFallback(e)}function Mn(e,t,n,o,r){var a={};return(t===!0||t===!1)&&(o=t,t=void 0),(n===!0||n===!1)&&(o=n,n=void 0),(he(e)&&_t(e)||A(e)&&e.length===0)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=r,a._l=n,a._i=e,a._f=t,a._strict=o,la(a)}function k(e,t,n,o){return Mn(e,t,n,o,!1)}var ua=I("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=k.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Ze()}),da=I("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=k.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Ze()});function Dn(e,t){var n,o;if(t.length===1&&A(t[0])&&(t=t[0]),!t.length)return k();for(n=t[0],o=1;o<t.length;++o)(!t[o].isValid()||t[o][e](n))&&(n=t[o]);return n}function ha(){var e=[].slice.call(arguments,0);return Dn("isBefore",e)}function fa(){var e=[].slice.call(arguments,0);return Dn("isAfter",e)}var ba=function(){return Date.now?Date.now():+new Date},Se=["year","quarter","month","week","day","hour","minute","second","millisecond"];function pa(e){var t,n=!1,o,r=Se.length;for(t in e)if(g(e,t)&&!(M.call(Se,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(o=0;o<r;++o)if(e[Se[o]]){if(n)return!1;parseFloat(e[Se[o]])!==p(e[Se[o]])&&(n=!0)}return!0}function ma(){return this._isValid}function ga(){return H(NaN)}function ot(e){var t=Mt(e),n=t.year||0,o=t.quarter||0,r=t.month||0,a=t.week||t.isoWeek||0,s=t.day||0,u=t.hour||0,h=t.minute||0,_=t.second||0,P=t.millisecond||0;this._isValid=pa(t),this._milliseconds=+P+_*1e3+h*6e4+u*1e3*60*60,this._days=+s+a*7,this._months=+r+o*3+n*12,this._data={},this._locale=ee(),this._bubble()}function Ae(e){return e instanceof ot}function mt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function ya(e,t,n){var o=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0,s;for(s=0;s<o;s++)(n&&e[s]!==t[s]||!n&&p(e[s])!==p(t[s]))&&a++;return a+r}function xn(e,t){d(e,0,0,function(){var n=this.utcOffset(),o="+";return n<0&&(n=-n,o="-"),o+V(~~(n/60),2)+t+V(~~n%60,2)})}xn("Z",":");xn("ZZ","");c("Z",et);c("ZZ",et);v(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ft(et,e)});var _a=/([\+\-]|\d\d)/gi;function Ft(e,t){var n=(t||"").match(e),o,r,a;return n===null?null:(o=n[n.length-1]||[],r=(o+"").match(_a)||["-",0,0],a=+(r[1]*60)+p(r[2]),a===0?0:r[0]==="+"?a:-a)}function It(e,t){var n,o;return t._isUTC?(n=t.clone(),o=(E(e)||Ne(e)?e.valueOf():k(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+o),l.updateOffset(n,!1),n):k(e).local()}function gt(e){return-Math.round(e._d.getTimezoneOffset())}l.updateOffset=function(){};function va(e,t,n){var o=this._offset||0,r;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Ft(et,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(r=gt(this)),this._offset=e,this._isUTC=!0,r!=null&&this.add(r,"m"),o!==e&&(!t||this._changeInProgress?Tn(this,H(e-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,l.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?o:gt(this)}function ka(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function wa(e){return this.utcOffset(0,e)}function Sa(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(gt(this),"m")),this}function Ma(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Ft($o,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Da(e){return this.isValid()?(e=e?k(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function xa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ya(){if(!N(this._isDSTShifted))return this._isDSTShifted;var e={},t;return kt(e,this),e=Sn(e),e._a?(t=e._isUTC?$(e._a):k(e._a),this._isDSTShifted=this.isValid()&&ya(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Oa(){return this.isValid()?!this._isUTC:!1}function Ta(){return this.isValid()?this._isUTC:!1}function Yn(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Pa=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Na=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function H(e,t){var n=e,o=null,r,a,s;return Ae(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:X(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(o=Pa.exec(e))?(r=o[1]==="-"?-1:1,n={y:0,d:p(o[z])*r,h:p(o[D])*r,m:p(o[U])*r,s:p(o[Q])*r,ms:p(mt(o[de]*1e3))*r}):(o=Na.exec(e))?(r=o[1]==="-"?-1:1,n={y:ie(o[2],r),M:ie(o[3],r),w:ie(o[4],r),d:ie(o[5],r),h:ie(o[6],r),m:ie(o[7],r),s:ie(o[8],r)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(s=Wa(k(n.from),k(n.to)),n={},n.ms=s.milliseconds,n.M=s.months),a=new ot(n),Ae(e)&&g(e,"_locale")&&(a._locale=e._locale),Ae(e)&&g(e,"_isValid")&&(a._isValid=e._isValid),a}H.fn=ot.prototype;H.invalid=ga;function ie(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Wa(e,t){var n;return e.isValid()&&t.isValid()?(t=It(t,e),e.isBefore(t)?n=zt(e,t):(n=zt(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function On(e,t){return function(n,o){var r,a;return o!==null&&!isNaN(+o)&&(tn(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=o,o=a),r=H(n,o),Tn(this,r,e),this}}function Tn(e,t,n,o){var r=t._milliseconds,a=mt(t._days),s=mt(t._months);e.isValid()&&(o=o??!0,s&&hn(e,je(e,"Month")+s*n),a&&rn(e,"Date",je(e,"Date")+a*n),r&&e._d.setTime(e._d.valueOf()+r*n),o&&l.updateOffset(e,a||s))}var Ra=On(1,"add"),Fa=On(-1,"subtract");function Pn(e){return typeof e=="string"||e instanceof String}function Ia(e){return E(e)||Ne(e)||Pn(e)||X(e)||Ca(e)||La(e)||e===null||e===void 0}function La(e){var t=he(e)&&!_t(e),n=!1,o=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,a,s=o.length;for(r=0;r<s;r+=1)a=o[r],n=n||g(e,a);return t&&n}function Ca(e){var t=A(e),n=!1;return t&&(n=e.filter(function(o){return!X(o)&&Pn(e)}).length===0),t&&n}function Ua(e){var t=he(e)&&!_t(e),n=!1,o=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,a;for(r=0;r<o.length;r+=1)a=o[r],n=n||g(e,a);return t&&n}function Aa(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Ea(e,t){arguments.length===1&&(arguments[0]?Ia(arguments[0])?(e=arguments[0],t=void 0):Ua(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||k(),o=It(n,this).startOf("day"),r=l.calendarFormat(this,o)||"sameElse",a=t&&(G(t[r])?t[r].call(this,n):t[r]);return this.format(a||this.localeData().calendar(r,this,k(n)))}function Ha(){return new We(this)}function ja(e,t){var n=E(e)?e:k(e);return this.isValid()&&n.isValid()?(t=L(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function za(e,t){var n=E(e)?e:k(e);return this.isValid()&&n.isValid()?(t=L(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function Va(e,t,n,o){var r=E(e)?e:k(e),a=E(t)?t:k(t);return this.isValid()&&r.isValid()&&a.isValid()?(o=o||"()",(o[0]==="("?this.isAfter(r,n):!this.isBefore(r,n))&&(o[1]===")"?this.isBefore(a,n):!this.isAfter(a,n))):!1}function $a(e,t){var n=E(e)?e:k(e),o;return this.isValid()&&n.isValid()?(t=L(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(o=n.valueOf(),this.clone().startOf(t).valueOf()<=o&&o<=this.clone().endOf(t).valueOf())):!1}function Ga(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Ba(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Za(e,t,n){var o,r,a;if(!this.isValid())return NaN;if(o=It(e,this),!o.isValid())return NaN;switch(r=(o.utcOffset()-this.utcOffset())*6e4,t=L(t),t){case"year":a=Ee(this,o)/12;break;case"month":a=Ee(this,o);break;case"quarter":a=Ee(this,o)/3;break;case"second":a=(this-o)/1e3;break;case"minute":a=(this-o)/6e4;break;case"hour":a=(this-o)/36e5;break;case"day":a=(this-o-r)/864e5;break;case"week":a=(this-o-r)/6048e5;break;default:a=this-o}return n?a:F(a)}function Ee(e,t){if(e.date()<t.date())return-Ee(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),o=e.clone().add(n,"months"),r,a;return t-o<0?(r=e.clone().add(n-1,"months"),a=(t-o)/(o-r)):(r=e.clone().add(n+1,"months"),a=(t-o)/(r-o)),-(n+a)||0}l.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";l.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function qa(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Ja(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?Ue(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):G(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ue(n,"Z")):Ue(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Qa(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,o,r,a;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',o=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",a=t+'[")]',this.format(n+o+r+a)}function Ka(e){e||(e=this.isUtc()?l.defaultFormatUtc:l.defaultFormat);var t=Ue(this,e);return this.localeData().postformat(t)}function Xa(e,t){return this.isValid()&&(E(e)&&e.isValid()||k(e).isValid())?H({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function es(e){return this.from(k(),e)}function ts(e,t){return this.isValid()&&(E(e)&&e.isValid()||k(e).isValid())?H({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ns(e){return this.to(k(),e)}function Nn(e){var t;return e===void 0?this._locale._abbr:(t=ee(e),t!=null&&(this._locale=t),this)}var Wn=I("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Rn(){return this._locale}var $e=1e3,ye=60*$e,Ge=60*ye,Fn=(365*400+97)*24*Ge;function _e(e,t){return(e%t+t)%t}function In(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-Fn:new Date(e,t,n).valueOf()}function Ln(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-Fn:Date.UTC(e,t,n)}function os(e){var t,n;if(e=L(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Ln:In,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=_e(t+(this._isUTC?0:this.utcOffset()*ye),Ge);break;case"minute":t=this._d.valueOf(),t-=_e(t,ye);break;case"second":t=this._d.valueOf(),t-=_e(t,$e);break}return this._d.setTime(t),l.updateOffset(this,!0),this}function rs(e){var t,n;if(e=L(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Ln:In,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ge-_e(t+(this._isUTC?0:this.utcOffset()*ye),Ge)-1;break;case"minute":t=this._d.valueOf(),t+=ye-_e(t,ye)-1;break;case"second":t=this._d.valueOf(),t+=$e-_e(t,$e)-1;break}return this._d.setTime(t),l.updateOffset(this,!0),this}function as(){return this._d.valueOf()-(this._offset||0)*6e4}function ss(){return Math.floor(this.valueOf()/1e3)}function is(){return new Date(this.valueOf())}function ls(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function cs(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function us(){return this.isValid()?this.toISOString():null}function ds(){return vt(this)}function hs(){return re({},f(this))}function fs(){return f(this).overflow}function bs(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}d("N",0,0,"eraAbbr");d("NN",0,0,"eraAbbr");d("NNN",0,0,"eraAbbr");d("NNNN",0,0,"eraName");d("NNNNN",0,0,"eraNarrow");d("y",["y",1],"yo","eraYear");d("y",["yy",2],0,"eraYear");d("y",["yyy",3],0,"eraYear");d("y",["yyyy",4],0,"eraYear");c("N",Lt);c("NN",Lt);c("NNN",Lt);c("NNNN",Ds);c("NNNNN",xs);v(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,o){var r=n._locale.erasParse(e,o,n._strict);r?f(n).era=r:f(n).invalidEra=e});c("y",ke);c("yy",ke);c("yyy",ke);c("yyyy",ke);c("yo",Ys);v(["y","yy","yyy","yyyy"],Y);v(["yo"],function(e,t,n,o){var r;n._locale._eraYearOrdinalRegex&&(r=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Y]=n._locale.eraYearOrdinalParse(e,r):t[Y]=parseInt(e,10)});function ps(e,t){var n,o,r,a=this._eras||ee("en")._eras;for(n=0,o=a.length;n<o;++n){switch(typeof a[n].since){case"string":r=l(a[n].since).startOf("day"),a[n].since=r.valueOf();break}switch(typeof a[n].until){case"undefined":a[n].until=1/0;break;case"string":r=l(a[n].until).startOf("day").valueOf(),a[n].until=r.valueOf();break}}return a}function ms(e,t,n){var o,r,a=this.eras(),s,u,h;for(e=e.toUpperCase(),o=0,r=a.length;o<r;++o)if(s=a[o].name.toUpperCase(),u=a[o].abbr.toUpperCase(),h=a[o].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(u===e)return a[o];break;case"NNNN":if(s===e)return a[o];break;case"NNNNN":if(h===e)return a[o];break}else if([s,u,h].indexOf(e)>=0)return a[o]}function gs(e,t){var n=e.since<=e.until?1:-1;return t===void 0?l(e.since).year():l(e.since).year()+(t-e.offset)*n}function ys(){var e,t,n,o=this.localeData().eras();for(e=0,t=o.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),o[e].since<=n&&n<=o[e].until||o[e].until<=n&&n<=o[e].since)return o[e].name;return""}function _s(){var e,t,n,o=this.localeData().eras();for(e=0,t=o.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),o[e].since<=n&&n<=o[e].until||o[e].until<=n&&n<=o[e].since)return o[e].narrow;return""}function vs(){var e,t,n,o=this.localeData().eras();for(e=0,t=o.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),o[e].since<=n&&n<=o[e].until||o[e].until<=n&&n<=o[e].since)return o[e].abbr;return""}function ks(){var e,t,n,o,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=r[e].since<=r[e].until?1:-1,o=this.clone().startOf("day").valueOf(),r[e].since<=o&&o<=r[e].until||r[e].until<=o&&o<=r[e].since)return(this.year()-l(r[e].since).year())*n+r[e].offset;return this.year()}function ws(e){return g(this,"_erasNameRegex")||Ct.call(this),e?this._erasNameRegex:this._erasRegex}function Ss(e){return g(this,"_erasAbbrRegex")||Ct.call(this),e?this._erasAbbrRegex:this._erasRegex}function Ms(e){return g(this,"_erasNarrowRegex")||Ct.call(this),e?this._erasNarrowRegex:this._erasRegex}function Lt(e,t){return t.erasAbbrRegex(e)}function Ds(e,t){return t.erasNameRegex(e)}function xs(e,t){return t.erasNarrowRegex(e)}function Ys(e,t){return t._eraYearOrdinalRegex||ke}function Ct(){var e=[],t=[],n=[],o=[],r,a,s=this.eras();for(r=0,a=s.length;r<a;++r)t.push(W(s[r].name)),e.push(W(s[r].abbr)),n.push(W(s[r].narrow)),o.push(W(s[r].name)),o.push(W(s[r].abbr)),o.push(W(s[r].narrow));this._erasRegex=new RegExp("^("+o.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}d(0,["gg",2],0,function(){return this.weekYear()%100});d(0,["GG",2],0,function(){return this.isoWeekYear()%100});function rt(e,t){d(0,[e,e.length],0,t)}rt("gggg","weekYear");rt("ggggg","weekYear");rt("GGGG","isoWeekYear");rt("GGGGG","isoWeekYear");O("weekYear","gg");O("isoWeekYear","GG");T("weekYear",1);T("isoWeekYear",1);c("G",Xe);c("g",Xe);c("GG",w,R);c("gg",w,R);c("GGGG",xt,Dt);c("gggg",xt,Dt);c("GGGGG",Ke,Je);c("ggggg",Ke,Je);Fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,o){t[o.substr(0,2)]=p(e)});Fe(["gg","GG"],function(e,t,n,o){t[o]=l.parseTwoDigitYear(e)});function Os(e){return Cn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Ts(e){return Cn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ps(){return K(this.year(),1,4)}function Ns(){return K(this.isoWeekYear(),1,4)}function Ws(){var e=this.localeData()._week;return K(this.year(),e.dow,e.doy)}function Rs(){var e=this.localeData()._week;return K(this.weekYear(),e.dow,e.doy)}function Cn(e,t,n,o,r){var a;return e==null?Te(this,o,r).year:(a=K(e,o,r),t>a&&(t=a),Fs.call(this,e,t,n,o,r))}function Fs(e,t,n,o,r){var a=mn(e,t,n,o,r),s=Oe(a.year,0,a.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}d("Q",0,"Qo","quarter");O("quarter","Q");T("quarter",7);c("Q",an);v("Q",function(e,t){t[J]=(p(e)-1)*3});function Is(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}d("D",["DD",2],"Do","date");O("date","D");T("date",9);c("D",w);c("DD",w,R);c("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});v(["D","DD"],z);v("Do",function(e,t){t[z]=p(e.match(w)[0])});var Un=ve("Date",!0);d("DDD",["DDDD",3],"DDDo","dayOfYear");O("dayOfYear","DDD");T("dayOfYear",4);c("DDD",Qe);c("DDDD",sn);v(["DDD","DDDD"],function(e,t,n){n._dayOfYear=p(e)});function Ls(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}d("m",["mm",2],0,"minute");O("minute","m");T("minute",14);c("m",w);c("mm",w,R);v(["m","mm"],U);var Cs=ve("Minutes",!1);d("s",["ss",2],0,"second");O("second","s");T("second",15);c("s",w);c("ss",w,R);v(["s","ss"],Q);var Us=ve("Seconds",!1);d("S",0,0,function(){return~~(this.millisecond()/100)});d(0,["SS",2],0,function(){return~~(this.millisecond()/10)});d(0,["SSS",3],0,"millisecond");d(0,["SSSS",4],0,function(){return this.millisecond()*10});d(0,["SSSSS",5],0,function(){return this.millisecond()*100});d(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});d(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});d(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});d(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});O("millisecond","ms");T("millisecond",16);c("S",Qe,an);c("SS",Qe,R);c("SSS",Qe,sn);var ae,An;for(ae="SSSS";ae.length<=9;ae+="S")c(ae,ke);function As(e,t){t[de]=p(("0."+e)*1e3)}for(ae="S";ae.length<=9;ae+="S")v(ae,As);An=ve("Milliseconds",!1);d("z",0,0,"zoneAbbr");d("zz",0,0,"zoneName");function Es(){return this._isUTC?"UTC":""}function Hs(){return this._isUTC?"Coordinated Universal Time":""}var i=We.prototype;i.add=Ra;i.calendar=Ea;i.clone=Ha;i.diff=Za;i.endOf=rs;i.format=Ka;i.from=Xa;i.fromNow=es;i.to=ts;i.toNow=ns;i.get=zo;i.invalidAt=fs;i.isAfter=ja;i.isBefore=za;i.isBetween=Va;i.isSame=$a;i.isSameOrAfter=Ga;i.isSameOrBefore=Ba;i.isValid=ds;i.lang=Wn;i.locale=Nn;i.localeData=Rn;i.max=da;i.min=ua;i.parsingFlags=hs;i.set=Vo;i.startOf=os;i.subtract=Fa;i.toArray=ls;i.toObject=cs;i.toDate=is;i.toISOString=Ja;i.inspect=Qa;typeof Symbol<"u"&&Symbol.for!=null&&(i[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});i.toJSON=us;i.toString=qa;i.unix=ss;i.valueOf=as;i.creationData=bs;i.eraName=ys;i.eraNarrow=_s;i.eraAbbr=vs;i.eraYear=ks;i.year=pn;i.isLeapYear=cr;i.weekYear=Os;i.isoWeekYear=Ts;i.quarter=i.quarters=Is;i.month=fn;i.daysInMonth=sr;i.week=i.weeks=pr;i.isoWeek=i.isoWeeks=mr;i.weeksInYear=Ws;i.weeksInWeekYear=Rs;i.isoWeeksInYear=Ps;i.isoWeeksInISOWeekYear=Ns;i.date=Un;i.day=i.days=Tr;i.weekday=Pr;i.isoWeekday=Nr;i.dayOfYear=Ls;i.hour=i.hours=Ur;i.minute=i.minutes=Cs;i.second=i.seconds=Us;i.millisecond=i.milliseconds=An;i.utcOffset=va;i.utc=wa;i.local=Sa;i.parseZone=Ma;i.hasAlignedHourOffset=Da;i.isDST=xa;i.isLocal=Oa;i.isUtcOffset=Ta;i.isUtc=Yn;i.isUTC=Yn;i.zoneAbbr=Es;i.zoneName=Hs;i.dates=I("dates accessor is deprecated. Use date instead.",Un);i.months=I("months accessor is deprecated. Use month instead",fn);i.years=I("years accessor is deprecated. Use year instead",pn);i.zone=I("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ka);i.isDSTShifted=I("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ya);function js(e){return k(e*1e3)}function zs(){return k.apply(null,arguments).parseZone()}function En(e){return e}var y=wt.prototype;y.calendar=To;y.longDateFormat=Ro;y.invalidDate=Io;y.ordinal=Uo;y.preparse=En;y.postformat=En;y.relativeTime=Eo;y.pastFuture=Ho;y.set=Yo;y.eras=ps;y.erasParse=ms;y.erasConvertYear=gs;y.erasAbbrRegex=Ss;y.erasNameRegex=ws;y.erasNarrowRegex=Ms;y.months=nr;y.monthsShort=or;y.monthsParse=ar;y.monthsRegex=lr;y.monthsShortRegex=ir;y.week=dr;y.firstDayOfYear=br;y.firstDayOfWeek=fr;y.weekdays=Mr;y.weekdaysMin=xr;y.weekdaysShort=Dr;y.weekdaysParse=Or;y.weekdaysRegex=Wr;y.weekdaysShortRegex=Rr;y.weekdaysMinRegex=Fr;y.isPM=Lr;y.meridiem=Ar;function Be(e,t,n,o){var r=ee(),a=$().set(o,t);return r[n](a,e)}function Hn(e,t,n){if(X(e)&&(t=e,e=void 0),e=e||"",t!=null)return Be(e,t,n,"month");var o,r=[];for(o=0;o<12;o++)r[o]=Be(e,o,n,"month");return r}function Ut(e,t,n,o){typeof e=="boolean"?(X(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,X(t)&&(n=t,t=void 0),t=t||"");var r=ee(),a=e?r._week.dow:0,s,u=[];if(n!=null)return Be(t,(n+a)%7,o,"day");for(s=0;s<7;s++)u[s]=Be(t,(s+a)%7,o,"day");return u}function Vs(e,t){return Hn(e,t,"months")}function $s(e,t){return Hn(e,t,"monthsShort")}function Gs(e,t,n){return Ut(e,t,n,"weekdays")}function Bs(e,t,n){return Ut(e,t,n,"weekdaysShort")}function Zs(e,t,n){return Ut(e,t,n,"weekdaysMin")}se("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=p(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});l.lang=I("moment.lang is deprecated. Use moment.locale instead.",se);l.langData=I("moment.langData is deprecated. Use moment.localeData instead.",ee);var Z=Math.abs;function qs(){var e=this._data;return this._milliseconds=Z(this._milliseconds),this._days=Z(this._days),this._months=Z(this._months),e.milliseconds=Z(e.milliseconds),e.seconds=Z(e.seconds),e.minutes=Z(e.minutes),e.hours=Z(e.hours),e.months=Z(e.months),e.years=Z(e.years),this}function jn(e,t,n,o){var r=H(t,n);return e._milliseconds+=o*r._milliseconds,e._days+=o*r._days,e._months+=o*r._months,e._bubble()}function Js(e,t){return jn(this,e,t,1)}function Qs(e,t){return jn(this,e,t,-1)}function Vt(e){return e<0?Math.floor(e):Math.ceil(e)}function Ks(){var e=this._milliseconds,t=this._days,n=this._months,o=this._data,r,a,s,u,h;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Vt(yt(n)+t)*864e5,t=0,n=0),o.milliseconds=e%1e3,r=F(e/1e3),o.seconds=r%60,a=F(r/60),o.minutes=a%60,s=F(a/60),o.hours=s%24,t+=F(s/24),h=F(zn(t)),n+=h,t-=Vt(yt(h)),u=F(n/12),n%=12,o.days=t,o.months=n,o.years=u,this}function zn(e){return e*4800/146097}function yt(e){return e*146097/4800}function Xs(e){if(!this.isValid())return NaN;var t,n,o=this._milliseconds;if(e=L(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+o/864e5,n=this._months+zn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(yt(this._months)),e){case"week":return t/7+o/6048e5;case"day":return t+o/864e5;case"hour":return t*24+o/36e5;case"minute":return t*1440+o/6e4;case"second":return t*86400+o/1e3;case"millisecond":return Math.floor(t*864e5)+o;default:throw new Error("Unknown unit "+e)}}function ei(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+p(this._months/12)*31536e6:NaN}function te(e){return function(){return this.as(e)}}var ti=te("ms"),ni=te("s"),oi=te("m"),ri=te("h"),ai=te("d"),si=te("w"),ii=te("M"),li=te("Q"),ci=te("y");function ui(){return H(this)}function di(e){return e=L(e),this.isValid()?this[e+"s"]():NaN}function fe(e){return function(){return this.isValid()?this._data[e]:NaN}}var hi=fe("milliseconds"),fi=fe("seconds"),bi=fe("minutes"),pi=fe("hours"),mi=fe("days"),gi=fe("months"),yi=fe("years");function _i(){return F(this.days()/7)}var q=Math.round,me={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function vi(e,t,n,o,r){return r.relativeTime(t||1,!!n,e,o)}function ki(e,t,n,o){var r=H(e).abs(),a=q(r.as("s")),s=q(r.as("m")),u=q(r.as("h")),h=q(r.as("d")),_=q(r.as("M")),P=q(r.as("w")),B=q(r.as("y")),oe=a<=n.ss&&["s",a]||a<n.s&&["ss",a]||s<=1&&["m"]||s<n.m&&["mm",s]||u<=1&&["h"]||u<n.h&&["hh",u]||h<=1&&["d"]||h<n.d&&["dd",h];return n.w!=null&&(oe=oe||P<=1&&["w"]||P<n.w&&["ww",P]),oe=oe||_<=1&&["M"]||_<n.M&&["MM",_]||B<=1&&["y"]||["yy",B],oe[2]=t,oe[3]=+e>0,oe[4]=o,vi.apply(null,oe)}function wi(e){return e===void 0?q:typeof e=="function"?(q=e,!0):!1}function Si(e,t){return me[e]===void 0?!1:t===void 0?me[e]:(me[e]=t,e==="s"&&(me.ss=t-1),!0)}function Mi(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,o=me,r,a;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(o=Object.assign({},me,t),t.s!=null&&t.ss==null&&(o.ss=t.s-1)),r=this.localeData(),a=ki(this,!n,o,r),n&&(a=r.pastFuture(+this,a)),r.postformat(a)}var ut=Math.abs;function be(e){return(e>0)-(e<0)||+e}function at(){if(!this.isValid())return this.localeData().invalidDate();var e=ut(this._milliseconds)/1e3,t=ut(this._days),n=ut(this._months),o,r,a,s,u=this.asSeconds(),h,_,P,B;return u?(o=F(e/60),r=F(o/60),e%=60,o%=60,a=F(n/12),n%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",h=u<0?"-":"",_=be(this._months)!==be(u)?"-":"",P=be(this._days)!==be(u)?"-":"",B=be(this._milliseconds)!==be(u)?"-":"",h+"P"+(a?_+a+"Y":"")+(n?_+n+"M":"")+(t?P+t+"D":"")+(r||o||e?"T":"")+(r?B+r+"H":"")+(o?B+o+"M":"")+(e?B+s+"S":"")):"P0D"}var m=ot.prototype;m.isValid=ma;m.abs=qs;m.add=Js;m.subtract=Qs;m.as=Xs;m.asMilliseconds=ti;m.asSeconds=ni;m.asMinutes=oi;m.asHours=ri;m.asDays=ai;m.asWeeks=si;m.asMonths=ii;m.asQuarters=li;m.asYears=ci;m.valueOf=ei;m._bubble=Ks;m.clone=ui;m.get=di;m.milliseconds=hi;m.seconds=fi;m.minutes=bi;m.hours=pi;m.days=mi;m.weeks=_i;m.months=gi;m.years=yi;m.humanize=Mi;m.toISOString=at;m.toString=at;m.toJSON=at;m.locale=Nn;m.localeData=Rn;m.toIsoString=I("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",at);m.lang=Wn;d("X",0,0,"unix");d("x",0,0,"valueOf");c("x",Xe);c("X",Go);v("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});v("x",function(e,t,n){n._d=new Date(p(e))});//! moment.js
l.version="2.29.4";Do(k);l.fn=i;l.min=ha;l.max=fa;l.now=ba;l.utc=$;l.unix=js;l.months=Vs;l.isDate=Ne;l.locale=se;l.invalid=Ze;l.duration=H;l.isMoment=E;l.weekdays=Gs;l.parseZone=zs;l.localeData=ee;l.isDuration=Ae;l.monthsShort=$s;l.weekdaysMin=Zs;l.defineLocale=Pt;l.updateLocale=zr;l.locales=Vr;l.weekdaysShort=Bs;l.normalizeUnits=L;l.relativeTimeRounding=wi;l.relativeTimeThreshold=Si;l.calendarFormat=Aa;l.prototype=i;l.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const ne=e=>(ro("data-v-74af5cb3"),e=e(),ao(),e),Di={class:"content"},xi={class:"profile-wrapper"},Yi={class:"header"},Oi=ne(()=>b("img",{src:wo,class:"avatar"},null,-1)),Ti={class:"details"},Pi=ne(()=>b("div",{class:"name"},"Nico Thuniot",-1)),Ni={class:"location"},Wi={class:"buttons"},Ri={class:"btn"},Fi={class:"btn"},Ii={class:"btn"},Li={class:"section-header"},Ci={class:"project-wrapper"},Ui={class:"project",style:{"--pr-color":"52, 211, 153","--pr-color-hover":"113, 224, 184"}},Ai=ne(()=>b("img",{src:So,class:"image"},null,-1)),Ei=ne(()=>b("div",{class:"overlay"},null,-1)),Hi={class:"project-content"},ji=ne(()=>b("div",{class:"name"},"Mandelbrot",-1)),zi={class:"tech"},Vi={class:"item"},$i={class:"item"},Gi={class:"item"},Bi={class:"item"},Zi={class:"description"},qi={class:"buttons"},Ji={class:"project",style:{"--pr-color":"228, 70, 73","--pr-color-hover":"236, 125, 128"}},Qi=ne(()=>b("img",{src:Mo,class:"image"},null,-1)),Ki=ne(()=>b("div",{class:"overlay"},null,-1)),Xi={class:"project-content"},el=ne(()=>b("div",{class:"name"},"Lego Builder",-1)),tl={class:"tech"},nl={class:"item"},ol={class:"item"},rl={class:"item"},al={class:"item"},sl={class:"description"},il={class:"buttons"},ll=ne(()=>b("div",{class:"placeholder",style:{width:"100%",height:"1000px",display:"block"}},null,-1)),cl={__name:"index",setup(e){eo(),to(),no();const t=$t(l().diff("2003-02-12","years"));lo({title:()=>"Nico Thuniot | Portfolio"});const n=o=>{window.open(o,"_blank").focus()};return(o,r)=>{const a=so,s=dt("i18n-tag"),u=Qt;return le(),He("div",Di,[b("div",xi,[b("div",Yi,[Oi,b("div",Ti,[Pi,b("div",Ni,[x(a,{name:"material-symbols:location-on-outline",style:{"margin-right":"5px"}}),C(ce(o.$t("profile.location")),1)])]),b("div",Wi,[b("div",Ri,[x(a,{name:"material-symbols:mail-outline"})]),b("div",Fi,[x(a,{name:"mdi:github"})]),b("div",Ii,[x(a,{name:"cib:linkedin-in"})])])]),x(s,{keypath:"profile.description",tag:"div",class:"description"},{default:qt(()=>[C(ce(o.$t("profile.description",{age:oo(t)})),1)]),_:1},8,["keypath"])]),b("div",Li,ce(o.$t("menu.projects")),1),b("div",Ci,[b("div",Ui,[Ai,Ei,b("div",Hi,[ji,b("div",zi,[b("div",Vi,[x(a,{name:"uim:html5"}),C(" HTML")]),b("div",$i,[x(a,{name:"ion:logo-css3"}),C(" CSS")]),b("div",Gi,[x(a,{name:"bx:bxl-javascript"}),C(" JavaScript")]),b("div",Bi,[x(a,{name:"file-icons:webgl"}),C(" WebGL")])]),b("div",Zi,ce(o.$t("project.description.mandelbrot")),1),b("div",qi,[x(u,{label:o.$t("project.view"),icon:"pi pi-external-link",size:"small"},null,8,["label"]),x(u,{label:o.$t("project.source"),icon:"pi pi-github",size:"small"},null,8,["label"])])])]),b("div",Ji,[Qi,Ki,b("div",Xi,[el,b("div",tl,[b("div",nl,[x(a,{name:"uim:html5"}),C(" HTML")]),b("div",ol,[x(a,{name:"ion:logo-css3"}),C(" CSS")]),b("div",rl,[x(a,{name:"bx:bxl-javascript"}),C(" JavaScript")]),b("div",al,[x(a,{name:"file-icons:webgl"}),C(" WebGL")])]),b("div",sl,ce(o.$t("project.description.lego")),1),b("div",il,[x(u,{label:o.$t("project.view"),icon:"pi pi-external-link",size:"small"},null,8,["label"]),x(u,{onClick:r[0]||(r[0]=h=>n()),label:o.$t("project.source"),icon:"pi pi-github",size:"small"},null,8,["label"])])])])]),ll])}}},fl=Xn(cl,[["__scopeId","data-v-74af5cb3"]]);export{fl as default};
