import{T as c}from"./TheNavTop-f7400286.js";import{T as h}from"./TheNavLateral-dbcce89d.js";import{T as m}from"./TheResultado_Carro-365a7a7b.js";import{l as d}from"./loader-31d0dd29.js";import{_ as v,r as a,o as p,c as T,b as l,a as r,e as f,g as N}from"./index-c0b03364.js";import"./TheForm_Login-16943e4c.js";import"./logo-5b4cc875.js";import"./glide.esm-676e99f8.js";const w={components:{TheNavTop:c,TheNavLateral:h,TheResultado_Carro:m,loader:d},data(){return{TheNavLateral:"",router:"1",set_tipo_veiculo:"",results:!1}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},filtrar_tipo(e){this.set_tipo_veiculo=e,console.log("Tipo pai: "+this.set_tipo_veiculo)},filter_novo(e){console.log("Novo: "+e),console.log("Semi_no: "+semi_novo)},goverveiculo(e){const t={id:e};this.$router.push({path:"/verveiculo",query:t})},execFilterVeiculoRoute(e){this.$refs.theNavLateral.applyFiltro("tipo_veiculo",e)},sendData(e,t){this.$refs.theresultado.applyFiltro(e,t)},clearFiltros(){this.$refs.theresultado.limparFiltro()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral"),this.TheNavLateral_moto=document.getElementById("TheNavLateral-moto")}},F={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral bg-white",style:{"box-shadow":"0px 0px 20px 0px rgba(0,0,0,0.1)"}};function L(e,t,g,x,i,o){const s=a("TheNavTop"),n=a("TheNavLateral"),_=a("TheResultado_Carro"),u=a("loader");return p(),T("div",null,[l(s,{onFilterVeiculoRoute:o.execFilterVeiculoRoute},null,8,["onFilterVeiculoRoute"]),r("div",F,[l(n,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onFilter_tipo:o.filtrar_tipo,onFilter_novo:e.filtrar_novo,ref:"theNavLateral",onTransmiteData:o.sendData,onLimparFiltro:o.clearFiltros},null,8,["onShow_menu_lateral","onFilter_tipo","onFilter_novo","onTransmiteData","onLimparFiltro"])]),l(_,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,set_tipo_veiculo:i.set_tipo_veiculo,onGoverveiculoNow:o.goverveiculo,ref:"theresultado"},null,8,["onShow_menu_lateral","set_tipo_veiculo","onGoverveiculoNow"]),f(r("div",null,[l(u)],512),[[N,this.results]])])}const b=v(w,[["render",L]]);export{b as default};
