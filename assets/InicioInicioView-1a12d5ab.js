import{g as _,l as p}from"./loader-0a8ac1c9.js";import{_ as d,r as c,o as h,c as w,a as s,b as i}from"./index-a960c1d8.js";const m={name:"TheDestaque",data(){return{pageReload:!1,carregar:!0}},async beforeCreate(){const o=window.location.href,n=new URL(o).hostname,r=`${window.location.protocol}//${n}:${window.location.port}`;if(o.includes("regionalmotors"))window.location.href=`${r}/#/inicioregional`;else{const t={site:n},a="api/anunciantes/buscar_anunciante_por_site";try{const e=await _(a,t);e&&e.id?window.location.href=`${r}/#/loja/${e.id}`:console.log("Anunciante não encontrado.")}catch(e){console.error("Erro ao buscar o anunciante:",e)}}}};function f(o,n,r,t,a,e){return null}const $=d(m,[["render",f]]),g={components:{TheRedirecting:$,loader:p},data(){return{loader:""}},methods:{showLoaderNow(){this.loader=document.querySelector(".loader"),this.loader.classList.remove("d-none")},goVerVeiculosNow(o){return o}},mounted(){}},v={class:"loader d-none0"};function R(o,n,r,t,a,e){const l=c("TheRedirecting"),u=c("loader");return h(),w("div",null,[s("div",null,[i(l,{onShowLoader:e.showLoaderNow},null,8,["onShowLoader"]),s("div",v,[i(u)])])])}const x=d(g,[["render",R]]);export{x as default};
