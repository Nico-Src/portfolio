import{B as $,C as w,m as o,q as a,D as t,E as p,y as k,t as m,F as u,G as j,H as S,I as z,s,_ as I,J as N,u as D,K,r as b,L as M,M as y,v as h,x as f,N as V,z as _,A,O as E}from"./entry.0d4ff456.js";import{h as L,u as q}from"./moment.0d1b8954.js";/* empty css                   */import"./vue.f36acd1f.1079e35e.js";var J=function(r){var n=r.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(n("progressbar.height"),`;
    background: `).concat(n("progressbar.background"),`;
    border-radius: `).concat(n("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(n("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(n("progressbar.label.color"),`;
    font-size: `).concat(n("progressbar.label.font.size"),`;
    font-weight: `).concat(n("progressbar.label.font.weight"),`;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`)},H={root:function(r){var n=r.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},Q=$.extend({name:"progressbar",theme:J,classes:H}),R={name:"BaseProgressBar",extends:w,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:Q,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},x={name:"ProgressBar",extends:R,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},G=["aria-valuenow"];function U(e,r,n,v,g,l){return o(),a("div",t({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[l.determinate?(o(),a("div",t({key:0,class:e.cx("value"),style:l.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(o(),a("div",t({key:0,class:e.cx("label")},e.ptm("label")),[p(e.$slots,"default",{},function(){return[k(m(e.value+"%"),1)]})],16)):u("",!0)],16)):l.indeterminate?(o(),a("div",t({key:1,class:e.cx("value")},e.ptm("value")),null,16)):u("",!0)],16,G)}x.render=U;var W=function(r){var n=r.dt;return`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: `.concat(n("timeline.vertical.event.content.padding"),`;
}

.p-timeline-vertical .p-timeline-event-connector {
    width: `).concat(n("timeline.event.connector.size"),`;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: `).concat(n("timeline.event.min.height"),`;
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: `).concat(n("timeline.event.marker.border.width"),`;
    border-style: solid;
    border-color: `).concat(n("timeline.event.marker.border.color"),`;
    border-radius: `).concat(n("timeline.event.marker.border.radius"),`;
    width: `).concat(n("timeline.event.marker.size"),`;
    height: `).concat(n("timeline.event.marker.size"),`;
    background: `).concat(n("timeline.event.marker.background"),`;
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: `).concat(n("timeline.event.marker.content.border.radius"),`;
    width: `).concat(n("timeline.event.marker.content.size"),`;
    height:`).concat(n("timeline.event.marker.content.size"),`;
    background: `).concat(n("timeline.event.marker.content.background"),`;
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(n("timeline.event.marker.border.radius"),`;
    box-shadow: `).concat(n("timeline.event.marker.content.inset.shadow"),`;
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: `).concat(n("timeline.event.connector.color"),`;
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: `).concat(n("timeline.event.connector.size"),`;
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: `).concat(n("timeline.horizontal.event.content.padding"),`;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`)},X={root:function(r){var n=r.props;return["p-timeline p-component","p-timeline-"+n.align,"p-timeline-"+n.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Y=$.extend({name:"timeline",theme:W,classes:X}),Z={name:"BaseTimeline",extends:w,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Y,provide:function(){return{$pcTimeline:this,$parentInstance:this}}},B={name:"Timeline",extends:Z,inheritAttrs:!1,methods:{getKey:function(r,n){return this.dataKey?j(r,this.dataKey):n},getPTOptions:function(r,n){return this.ptm(r,{context:{index:n,count:this.value.length}})}}};function ee(e,r,n,v,g,l){return o(),a("div",t({class:e.cx("root")},e.ptmi("root")),[(o(!0),a(S,null,z(e.value,function(c,i){return o(),a("div",t({key:l.getKey(c,i),class:e.cx("event"),ref_for:!0},l.getPTOptions("event",i)),[s("div",t({class:e.cx("eventOpposite",{index:i}),ref_for:!0},l.getPTOptions("eventOpposite",i)),[p(e.$slots,"opposite",{item:c,index:i})],16),s("div",t({class:e.cx("eventSeparator"),ref_for:!0},l.getPTOptions("eventSeparator",i)),[p(e.$slots,"marker",{item:c,index:i},function(){return[s("div",t({class:e.cx("eventMarker"),ref_for:!0},l.getPTOptions("eventMarker",i)),null,16)]}),i!==e.value.length-1?p(e.$slots,"connector",{key:0,item:c,index:i},function(){return[s("div",t({class:e.cx("eventConnector"),ref_for:!0},l.getPTOptions("eventConnector",i)),null,16)]}):u("",!0)],16),s("div",t({class:e.cx("eventContent"),ref_for:!0},l.getPTOptions("eventContent",i)),[p(e.$slots,"content",{item:c,index:i})],16)],16)}),128))],16)}B.render=ee;var ne=function(r){var n=r.dt;return`
.p-card {
    background: `.concat(n("card.background"),`;
    color: `).concat(n("card.color"),`;
    box-shadow: `).concat(n("card.shadow"),`;
    border-radius: `).concat(n("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(n("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(n("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(n("card.title.font.size"),`;
    font-weight: `).concat(n("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(n("card.subtitle.color"),`;
}
`)},te={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},re=$.extend({name:"card",theme:ne,classes:te}),ie={name:"BaseCard",extends:w,style:re,provide:function(){return{$pcCard:this,$parentInstance:this}}},C={name:"Card",extends:ie,inheritAttrs:!1};function oe(e,r,n,v,g,l){return o(),a("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(o(),a("div",t({key:0,class:e.cx("header")},e.ptm("header")),[p(e.$slots,"header")],16)):u("",!0),s("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(o(),a("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(o(),a("div",t({key:0,class:e.cx("title")},e.ptm("title")),[p(e.$slots,"title")],16)):u("",!0),e.$slots.subtitle?(o(),a("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[p(e.$slots,"subtitle")],16)):u("",!0)],16)):u("",!0),s("div",t({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"content")],16),e.$slots.footer?(o(),a("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[p(e.$slots,"footer")],16)):u("",!0)],16)],16)}C.render=oe;const ae=e=>(_("data-v-675cd41b"),e=e(),A(),e),se={class:"content"},le={class:"section-header"},ce={class:"description"},pe={style:{"text-align":"justify"}},de={class:"section-header"},me={class:"skill-wrapper"},ue={class:"tech"},ve=ae(()=>s("div",{class:"placeholder",style:{width:"100%","min-height":"50px",display:"block"}},null,-1)),ge={__name:"about",setup(e){N(),D(),K();const r=b(L().diff("2003-02-12","years")),n=M(),v=b([{name:"HTML",icon:"uim:html5",color:"#E34F26",progress:100},{name:"CSS",icon:"ion:logo-css3",color:"#1572B6",progress:100},{name:"JavaScript",icon:"bx:bxl-javascript",color:"#F0DB4F",light:!0,progress:100},{name:"Node.js",icon:"lineicons:nodejs-alt",color:"#339933",progress:95},{name:"TypeScript",icon:"file-icons:typescript",color:"#3178C6",progress:80},{name:"Vue.js",icon:"file-icons:vue",color:"#41B883",progress:80},{name:"Nuxt.js",icon:"tabler:brand-nuxt",color:"#00D8FF",progress:80},{name:"Quasar",icon:"file-icons:quasar",color:"#FFA000",progress:80},{name:"Express",icon:"simple-icons:express",color:"#3498DB",progress:90},{name:"MySQL",icon:"lineicons:mysql",color:"#4479A1",progress:90},{name:"Flutter",icon:"file-icons:flutter",color:"#4285F4",progress:50},{name:"C#",icon:"devicon-plain:csharp",color:"#178600",progress:80},{name:"Java",icon:"hugeicons:java",color:"#ED8B00",progress:70},{name:"Bootstrap",icon:"cib:bootstrap",color:"#7952B3",progress:50}]),g=b([{status:"journey-start",date:"2018"},{status:"htl-donaustadt",date:"2018-2023"},{status:"current",date:"2024"}]),l=(c,i)=>i.progress-c.progress;return q({title:()=>"Nico Thuniot | "+n.t("menu.about")}),(c,i)=>{const T=C,F=B,O=E,P=x;return o(),a("div",se,[s("div",le,m(c.$t("menu.about")),1),s("div",ce,m(c.$t("profile.description",{age:y(r)})),1),h(F,{value:y(g),class:"customized-timeline"},{content:f(d=>[h(T,{class:"mt-4"},{title:f(()=>[k(m(c.$t(`profile.${d.item.status}.title`)),1)]),subtitle:f(()=>[k(m(d.item.date),1)]),content:f(()=>[s("p",pe,m(c.$t(`profile.${d.item.status}.desc`)),1)]),_:2},1024)]),_:1},8,["value"]),s("div",de,m(c.$t("menu.skills")),1),s("div",me,[(o(!0),a(S,null,z(y(v).sort(l),(d,he)=>(o(),a("div",{class:"tech-item",key:d.icon,style:V(`--tech-color: ${d.color};`)},[s("div",ue,[h(O,{name:d.icon},null,8,["name"]),s("span",null,m(d.name),1)]),h(P,{value:d.progress},null,8,["value"])],4))),128))]),ve])}}},$e=I(ge,[["__scopeId","data-v-675cd41b"]]);export{$e as default};
