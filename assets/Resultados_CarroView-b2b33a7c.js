import{T as h}from"./TheNavTop-9468a7d2.js";import{T as c}from"./TheNavLateral-8e67833e.js";import{T as d}from"./TheResultado_Carro-c8a2a382.js";import{l as m}from"./loader-6c1e48c7.js";import{_ as v,r as a,o as p,c as T,b as r,a as l,d as f,g as N}from"./index-d682cece.js";import"./TheForm_Login-f4da3e1e.js";import"./glide.esm-676e99f8.js";const w={components:{TheNavTop:h,TheNavLateral:c,TheResultado_Carro:d,loader:m},data(){return{TheNavLateral:"",router:"1",set_tipo_veiculo:"",results:!1}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},filtrar_tipo(e){this.set_tipo_veiculo=e},filter_novo(e){},goverveiculo(e){const t={id:e};this.$router.push({path:"/verveiculo",query:t})},execFilterVeiculoRoute(e){this.$refs.theNavLateral.applyFiltro("tipo_veiculo",e)},sendData(e,t){this.$refs.theresultado.applyFiltro(e,t)},clearFiltros(){this.$refs.theresultado.limparFiltro()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral"),this.TheNavLateral_moto=document.getElementById("TheNavLateral-moto")}},F={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral bg-white",style:{"box-shadow":"0px 0px 20px 0px rgba(0,0,0,0.1)"}};function L(e,t,g,x,i,o){const n=a("TheNavTop"),s=a("TheNavLateral"),_=a("TheResultado_Carro"),u=a("loader");return p(),T("div",null,[r(n,{onFilterVeiculoRoute:o.execFilterVeiculoRoute},null,8,["onFilterVeiculoRoute"]),l("div",F,[r(s,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onFilter_tipo:o.filtrar_tipo,onFilter_novo:e.filtrar_novo,ref:"theNavLateral",onTransmiteData:o.sendData,onLimparFiltro:o.clearFiltros},null,8,["onShow_menu_lateral","onFilter_tipo","onFilter_novo","onTransmiteData","onLimparFiltro"])]),r(_,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,set_tipo_veiculo:i.set_tipo_veiculo,onGoverveiculoNow:o.goverveiculo,ref:"theresultado"},null,8,["onShow_menu_lateral","set_tipo_veiculo","onGoverveiculoNow"]),f(l("div",null,[r(u)],512),[[N,this.results]])])}const S=v(w,[["render",L]]);export{S as default};
