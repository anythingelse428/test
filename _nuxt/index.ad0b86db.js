import{n as v,o,c as n,a as s,t as p,s as g,w as $,Y as x,D as u,V as h,r as f,x as U,B as w,Z as C,b as c,q as r,F as M,v as R}from"./entry.a6fbf934.js";import{_ as N}from"./nuxt-link.ba50590d.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as V}from"./TheModal.vue.c380c54f.js";const B={class:"profile-card"},D={class:"profile-card__avatar"},P=["src"],A={key:1,class:"profile-card__avatar --blank"},E={class:"profile-card-info"},F={class:"profile-card-info__role"},I={class:"profile-card-info__name"},L=v({__name:"ProfileCard",props:{avatarUrl:{},role:{},displayedName:{}},setup(m){return(e,a)=>(o(),n("div",B,[s("div",D,[e.avatarUrl.length?(o(),n("img",{key:0,src:e.avatarUrl,width:"136",height:"136"},null,8,P)):(o(),n("div",A))]),s("div",E,[s("div",F,p(e.role),1),s("div",I,p(e.displayedName),1)])]))}});const T={class:"roommates-card__avatar"},q=["src"],z={key:1,class:"roommates-card__avatar --blank"},Y={class:"roommates-card-info"},Z={class:"roommates-card-info__name"},j={class:"roommates-card-info__role"},G=s("span",{class:"mdi mdi-chevron-right roommates-card__chevron"},null,-1),H=v({__name:"ProfileRoommates",props:{id:{},avatarUrl:{},name:{},role:{}},setup(m){return(e,a)=>{const t=N;return o(),g(t,{to:`profile/${e.id}`,class:"roommates-card"},{default:$(()=>[s("div",T,[e.avatarUrl.length?(o(),n("img",{key:0,src:e.avatarUrl,alt:"",width:"76",height:"76"},null,8,q)):(o(),n("div",z))]),s("div",Y,[s("div",Z,p(e.name),1),s("div",j,p(e.role),1)]),G]),_:1},8,["to"])}}});const J={},K={class:"profile-settings"},O=x('<h1 class="profile-roommates-section__header"> Настройки </h1><div class="profile-settings__list"><div class="profile-settings__item"><div class="profile-settings__item-ico"><span class="mdi mdi-leak"></span></div><div class="profile-settings__item-name"> Датчики </div><div class="profile-settings__item-chevron"><span class="mdi mdi-chevron-right"></span></div></div><div class="profile-settings__item"><div class="profile-settings__item-ico"><span class="mdi mdi-door"></span></div><div class="profile-settings__item-name"> Двери </div><div class="profile-settings__item-chevron"><span class="mdi mdi-chevron-right"></span></div></div><div class="profile-settings__item"><div class="profile-settings__item-ico"><span class="mdi mdi-arrow-decision"></span></div><div class="profile-settings__item-name"> Домашние центры и мосты </div><div class="profile-settings__item-chevron"><span class="mdi mdi-chevron-right"></span></div></div><div class="profile-settings__item"><div class="profile-settings__item-ico"><span class="mdi mdi-blinds-horizontal"></span></div><div class="profile-settings__item-name"> Жалюзи и окна </div><div class="profile-settings__item-chevron"><span class="mdi mdi-chevron-right"></span></div></div><div class="profile-settings__item"><div class="profile-settings__item-ico"><span class="mdi mdi-lock"></span></div><div class="profile-settings__item-name"> Замки </div><div class="profile-settings__item-chevron"><span class="mdi mdi-chevron-right"></span></div></div></div>',2),Q=[O];function W(m,e){return o(),n("div",K,Q)}const X=S(J,[["render",W]]),ss={class:"add-roommate-modal"},es={class:"add-roommate-modal__header"},os=s("div",{class:"modal-header"}," Добавить пользователя ",-1),as=s("span",{class:"mdi mdi-close"},null,-1),ts=[as],is={action:"",class:"add-roommate-modal__form"},ns={class:"add-roommate-modal__input-group"},ls=s("label",{for:"name",class:"add-roommate-modal__input-group-label"}," Имя пользователя ",-1),ds={class:"add-roommate-modal__input-group"},rs=s("label",{for:"email",class:"add-roommate-modal__input-group-label"}," Email нового пользователя ",-1),_s=s("input",{type:"submit",value:"Отправить приглашение",class:"add-roommate-modal__form-submit"},null,-1),ms=v({__name:"AddRoommateModal",emits:["modal-close"],setup(m,{emit:e}){const a={name:"",email:""},t=e;return(_,l)=>(o(),n("div",ss,[s("div",es,[os,s("div",{class:"modal-close",onClick:l[0]||(l[0]=i=>t("modal-close"))},ts)]),s("form",is,[s("div",ns,[ls,u(s("input",{id:"name","onUpdate:modelValue":l[1]||(l[1]=i=>a.name=i),type:"text",name:"name",class:"add-roommate-modal__input-group-input"},null,512),[[h,a.name]])]),s("div",ds,[rs,u(s("input",{id:"email","onUpdate:modelValue":l[2]||(l[2]=i=>a.email=i),type:"email",name:"email",class:"add-roommate-modal__input-group-input"},null,512),[[h,a.email]])]),_s])]))}});const cs={class:"profile"},ps=s("hr",{class:"profile__divider"},null,-1),vs={class:"profile-roommates-section"},fs=s("h1",{class:"profile-roommates-section__header"}," Люди ",-1),us={class:"profile-roommates-section__list"},hs=s("span",{class:"mdi mdi-plus"},null,-1),gs={ref:"addRoommateModal",class:""},xs=v({__name:"index",setup(m){const e=f([{id:0,name:"Пётр Петров",role:"Житель",avatarUrl:""},{id:1,name:"Иван Иванов",role:"Житель (владелец)",avatarUrl:""}]),a=U(),t=f(a.userInfo);w(()=>{C(async()=>{t.value.name.length<1&&(await a.init(),t.value=a.userInfo)})});const _=f(!1);return(l,i)=>{const y=L,k=H,b=X;return o(),n("div",cs,[c(y,{role:r(t).role,"displayed-name":r(t).name,"avatar-url":r(t).avatarUrl},null,8,["role","displayed-name","avatar-url"]),ps,s("div",vs,[fs,s("div",us,[(o(!0),n(M,null,R(r(e),d=>(o(),g(k,{id:d.id,key:d.id,"avatar-url":d.avatarUrl,name:d.name,role:d.role},null,8,["id","avatar-url","name","role"]))),128))]),s("button",{class:"profile-roommates-section__add-section",onClick:i[1]||(i[1]=d=>_.value=!r(_))},[hs,c(V,{"is-shown":r(_),"backdrop-filter":"blur(3px)","transition-fade-name":"fade","transition-content-name":"translate","bg-color":"",place:".layout"},{inner:$(()=>[s("div",gs,[c(ms,{onModalClose:i[0]||(i[0]=d=>_.value=!1)})],512)]),_:1},8,["is-shown"])])]),c(b)])}}});export{xs as default};
