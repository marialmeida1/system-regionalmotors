import{g as _,l as p}from"./loader-c19c6dcb.js";import{_ as l,r as s,o as h,c as w,a as c,b as i}from"./index-8a7487aa.js";const f={name:"TheDestaque",data(){return{pageReload:!1,carregar:!0}},async beforeCreate(){const o=window.location.href,n=new URL(o).hostname,r=`${window.location.protocol}//${n}:${window.location.port}`;if(o.includes("regionalmotors"))window.location.href=`${r}/`;else{const t={site:n},a="api/anunciantes/buscar_anunciante_por_site";try{const e=await _(a,t);e&&e.id?window.location.href=`${r}/loja/${e.id}`:console.log("Anunciante não encontrado.")}catch(e){console.error("Erro ao buscar o anunciante:",e)}finally{this.carregar=!1}}}};function m(o,n,r,t,a,e){return null}const $=l(f,[["render",m]]),g={components:{TheRedirecting:$,loader:p},data(){return{loader:""}},methods:{showLoaderNow(){this.loader=document.querySelector(".loader"),this.loader.classList.remove("d-none")},goVerVeiculosNow(o){return o}},mounted(){}},v={class:"loader d-none0"};function R(o,n,r,t,a,e){const d=s("TheRedirecting"),u=s("loader");return h(),w("div",null,[c("div",null,[i(d,{onShowLoader:e.showLoaderNow},null,8,["onShowLoader"]),c("div",v,[i(u)])])])}const T=l(g,[["render",R]]);export{T as default};
