import{a as w,b as i,o as l,e as p,u as _,f as e,h as C,r as E,c as v,w as b,i as m,j as y,T as O,k as M,l as n,p as A,m as L,t as x,q as r,s as f}from"./entry.540a83b8.js";const S=w("modals",{state:()=>({isShow:!1,currentModalKey:null}),actions:{show(s){this.isShow=!0,this.currentModalKey=s},hide(){this.isShow=!1,this.currentModalKey=null}}}),R=e("svg",{id:"Capa_1",fill:"white",height:"12px",version:"1.1",viewBox:"0 0 490 490",width:"12px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("polygon",{points:"456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "})])],-1),D=[R],I=i({__name:"ModalCrossWidget",setup(s){const{hide:o}=S();return(a,t)=>(l(),p("div",{onClick:t[0]||(t[0]=(...d)=>_(o)&&_(o)(...d))},D))}}),T={class:"modal"},V=["onClick"],W={class:"modal__header"},K={class:"modal__title"},B={class:"modal__rightWidget"},N={class:"modal__content"},U={key:0,class:"modal__footer"},X=i({__name:"Modal",props:{modalKey:{}},setup(s){const o=S(),a=C(),t=E(null);function d(){o.hide()}return(u,h)=>_(o).isShow&&_(o).currentModalKey===u.modalKey?(l(),v(O,{key:0,to:"body"},[e("div",T,[e("div",{class:"modal__overlay",onClick:b(d,["self"])},[e("div",{ref_key:"modal",ref:t,class:"modal__container"},[e("div",W,[e("div",K,[m(u.$slots,"title",{},void 0,!0)]),e("div",B,[m(u.$slots,"rightWidget",{},void 0,!0)])]),e("div",N,[m(u.$slots,"content",{},void 0,!0)]),_(a).footer?(l(),p("div",U,[m(u.$slots,"footer",{},void 0,!0)])):y("",!0)],512)],8,V)])])):y("",!0)}});const g=M(X,[["__scopeId","data-v-2cc0373f"]]);var c=(s=>(s.TEXT_MODAL="TEXT_MODAL",s.ERROR_MODAL="ERROR_MODAL",s.EMAIL_MODAL="EMAIL_MODAL",s.SUCCESS_MODAL="SUCCESS_MODAL",s))(c||{});const $=s=>(A("data-v-bd6f68b7"),s=s(),L(),s),G=$(()=>e("div",null," Почта для чека ",-1)),j=$(()=>e("div",null,[e("p",null,"Введите email на который мы пришлем вам электронный чек"),e("input",{type:"email",required:""})],-1)),q=$(()=>e("button",null,"Далее",-1)),P=i({__name:"ModalWithEmail",setup(s){return(o,a)=>{const t=g;return l(),v(t,{"modal-key":_(c).EMAIL_MODAL},{title:n(()=>[G]),content:n(()=>[j]),footer:n(()=>[q]),_:1},8,["modal-key"])}}});const z=M(P,[["__scopeId","data-v-bd6f68b7"]]),F=["src"],H={class:"modalContentModule__title"},k=i({__name:"ModalContentModule",props:{imageSrc:{},title:{}},setup(s){return(o,a)=>(l(),p("div",null,[e("img",{src:o.imageSrc,alt:"image"},null,8,F),e("span",H,x(o.title),1),m(o.$slots,"default")]))}}),J={class:"modalErrorModule"},Q=i({__name:"ModalErrorModule",props:{title:{},imageSrc:{default:"defaultErrorImage"}},setup(s){return(o,a)=>{const t=k;return l(),p("div",J,[r(t,{"image-src":o.imageSrc,title:o.title},{default:n(()=>[m(o.$slots,"default",{},void 0,!0)]),_:3},8,["image-src","title"])])}}});const Y=M(Q,[["__scopeId","data-v-24ebe640"]]),Z=e("p",null,"Вы вощли в игру на другом устройстве или в другом окне",-1),ee=e("button",null,"Перезагрузить",-1),oe=i({__name:"ModalErrorEntry",setup(s){return(o,a)=>{const t=Y,d=g;return l(),v(d,{"modal-key":_(c).ERROR_MODAL},{title:n(()=>[f(" Ошибка входа ")]),content:n(()=>[r(t,{title:"Повторный вход"},{default:n(()=>[Z]),_:1})]),footer:n(()=>[ee]),_:1},8,["modal-key"])}}}),te={class:"modalSuccessModule"},se=i({__name:"ModalSuccessModule",props:{title:{},imageSrc:{}},setup(s){return(o,a)=>{const t=k;return l(),p("div",te,[r(t,{"image-src":o.imageSrc,title:o.title},{default:n(()=>[m(o.$slots,"default",{},void 0,!0)]),_:3},8,["image-src","title"])])}}});const _e=M(se,[["__scopeId","data-v-5ca973cf"]]),ne=e("p",null,"Оплата прошла успешно. Фишки будут начислины на Ваш счет в ближайшее время. Желаем удачной игры!",-1),le=e("button",null,"Хорошо!",-1),ae=i({__name:"ModalSuccessPurchase",setup(s){return(o,a)=>{const t=_e,d=g;return l(),v(d,{"modal-key":_(c).SUCCESS_MODAL},{title:n(()=>[f(" Благодарим за покупку ")]),content:n(()=>[r(t,{title:"Покупка обрабатвается"},{default:n(()=>[ne]),_:1})]),footer:n(()=>[le]),_:1},8,["modal-key"])}}}),re=i({__name:"index",setup(s){const{show:o}=S();return(a,t)=>{const d=I,u=g;return l(),p("div",null,[e("button",{onClick:t[0]||(t[0]=h=>_(o)(_(c).TEXT_MODAL))},"show default modal"),e("button",{onClick:t[1]||(t[1]=h=>_(o)(_(c).EMAIL_MODAL))},"show email modal"),e("button",{onClick:t[2]||(t[2]=h=>_(o)(_(c).ERROR_MODAL))},"show error modal"),e("button",{onClick:t[3]||(t[3]=h=>_(o)(_(c).SUCCESS_MODAL))},"show success modal"),r(u,{"modal-key":_(c).TEXT_MODAL},{title:n(()=>[f("Внимание")]),rightWidget:n(()=>[r(d)]),content:n(()=>[f(" Недостаточно фишек для ставки ")]),_:1},8,["modal-key"]),r(oe),r(z),r(ae)])}}});export{re as default};
