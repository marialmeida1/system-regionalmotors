import{g as _,l as w}from"./loader-c88172a4.js";import{_ as l,r as c,o as p,c as h,a as s,b as i}from"./index-c3f8ab82.js";const m={name:"TheDestaque",data(){return{pageReload:!1,carregar:!0}},async beforeCreate(){const e=window.location.href,r=new URL(e).hostname,n=`${window.location.protocol}//${r}:${window.location.port}`;if(console.log(n),e.includes("regionalmotors"))window.location.href=`${n}/`,console.log(window.location.href);else{const t={site:r};console.log("awrawea");const a="api/anunciantes/buscar_anunciante_por_site";try{const o=await _(a,t);o&&o.id?window.location.href=`${n}/loja/${o.id}`:console.log("Anunciante não encontrado.")}catch(o){console.error("Erro ao buscar o anunciante:",o)}}}};function f(e,r,n,t,a,o){return null}const g=l(m,[["render",f]]),$={components:{TheRedirecting:g,loader:w},data(){return{loader:""}},methods:{showLoaderNow(){this.loader=document.querySelector(".loader"),this.loader.classList.remove("d-none")},goVerVeiculosNow(e){return e}},mounted(){}},v={class:"loader d-none0"};function R(e,r,n,t,a,o){const d=c("TheRedirecting"),u=c("loader");return p(),h("div",null,[s("div",null,[i(d,{onShowLoader:o.showLoaderNow},null,8,["onShowLoader"]),s("div",v,[i(u)])])])}const x=l($,[["render",R]]);export{x as default};
