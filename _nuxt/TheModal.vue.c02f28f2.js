import{n as l,Q as d,r as m,B as p,q as c,o as u,s as _,b as o,w as n,T as s,U as f,O as h,D as t,N as r,a as i,W as b,L as C}from"./entry.157fac89.js";const N={class:"modal__content"},y=l({__name:"TheModal",props:{place:{},bgColor:{},isShown:{type:Boolean},backdropFilter:{},transitionFadeName:{},transitionContentName:{}},setup(k){d(e=>({"7ad20efa":e.bgColor}));const a=m(!1);return p(()=>{a.value=!0}),(e,v)=>c(a)?(u(),_(f,{key:0,to:e.place||"body"},[o(s,{name:e.transitionFadeName??"no-transition"},{default:n(()=>[t(i("div",{class:"modal",style:C(e.backdropFilter?`backdrop-filter:${e.backdropFilter};`:"")},[o(s,{name:e.transitionContentName??"no-transition"},{default:n(()=>[t(i("div",N,[b(e.$slots,"inner")],512),[[r,e.isShown]])]),_:3},8,["name"])],4),[[r,e.isShown]])]),_:3},8,["name"])],8,["to"])):h("",!0)}});export{y as _};