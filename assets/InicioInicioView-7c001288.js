import{g as _,l as p}from"./loader-7e88f898.js";import{_ as l,r as s,o as h,c as m,a as c,b as i}from"./index-7cea80fa.js";const w={name:"TheDestaque",data(){return{pageReload:!1,carregar:!0}},async beforeCreate(){const e=window.location.href,n=new URL(e).hostname,t=`${window.location.protocol}//${n}:${window.location.port}`;if(e.includes("regionalmotors"))console.log("Está bem"),window.location.href=`${t}/#/inicioregional`;else{console.log("Hostname:",n),console.log("Nova URL:",t);const r={site:n},a="api/anunciantes/buscar_anunciante_por_site";try{const o=await _(a,r);o&&o.id?window.location.href=`${t}/#/loja/${o.id}`:console.log("Anunciante não encontrado.")}catch(o){console.error("Erro ao buscar o anunciante:",o)}}}};function f(e,n,t,r,a,o){return null}const g=l(w,[["render",f]]),$={components:{TheRedirecting:g,loader:p},data(){return{loader:""}},methods:{showLoaderNow(){this.loader=document.querySelector(".loader"),this.loader.classList.remove("d-none")},goVerVeiculosNow(e){return e}},mounted(){}},v={class:"loader d-none0"};function R(e,n,t,r,a,o){const d=s("TheRedirecting"),u=s("loader");return h(),m("div",null,[c("div",null,[i(d,{onShowLoader:o.showLoaderNow},null,8,["onShowLoader"]),c("div",v,[i(u)])])])}const T=l($,[["render",R]]);export{T as default};
