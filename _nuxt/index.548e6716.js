import{_ as d}from"./AuthFormInput.vue.2f5a33d8.js";import{_ as f}from"./nuxt-link.03f8b3d2.js";import{n as v,r as i,x as g,o as x,c as b,a as _,b as o,q as l,w,y as A,d as E,z as h,A as k}from"./entry.157fac89.js";const y={class:"register"},N=_("h1",{class:"register__header"}," Регистрация ",-1),S=_("input",{type:"submit",value:"Регистрация",class:"register__form-submit"},null,-1),I=v({__name:"index",setup(T){const n=i(""),a=i(""),r=i(""),p=g();async function c(){const m={name:n.value,login:a.value,password:r.value,devices:[0],role:0},e=await p.register(m),s=k(),u=h(s.public.REST_BASE_TOKEN_STORAGE_NAME,{maxAge:30*60*60*90});u.value=e}return(m,e)=>{const s=d,u=f;return x(),b("div",y,[N,_("form",{method:"post",class:"register__form",onSubmit:e[3]||(e[3]=A(t=>c(),["prevent"]))},[o(s,{value:l(n),name:"name",label:"Имя",autocomplete:"name",required:!0,onAuthInput:e[0]||(e[0]=t=>n.value=t)},null,8,["value"]),o(s,{value:l(a),name:"email",label:"Email",autocomplete:"email",required:!0,onAuthInput:e[1]||(e[1]=t=>a.value=t)},null,8,["value"]),o(s,{name:"password",value:l(r),label:"Пароль",type:"password",required:!0,onAuthInput:e[2]||(e[2]=t=>r.value=t)},null,8,["value"]),S,o(u,{to:"/login",class:"register__form-submit --outline"},{default:w(()=>[E(" Войти ")]),_:1})],32)])}}});export{I as default};