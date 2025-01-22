import{f as m,d as x,e as y,h as g,i as f}from"./loader-1ebe28f0.js";import{_ as w,o as a,c as n,a as o,e as r,l as M,F as d,i as c,d as h,v as _,t as p,n as k,m as q,f as C}from"./index-362314c9.js";const F={name:"TheNavLateral",data(){return{card_resultado:"",tipo_veiculo:"",novo:"",semi_novo:"",selectedVehicle:"",Api_CategOpcionais:[],selecionados:[],dropdownState:{},array_filtros:[],filterMarcas:"",filterModelo:"",showMarcas:!1,showModelos:!1,showEstados:!1,textMarca:"",textModelo:"",textEstado:"",tipo_de_veiculo:"",marcas:[],modelos:[],regioes:[],cidades:[],precoMax:"",precoMin:"",anoMax:"",anoMin:"",kmMax:"",kmMin:"",valorTipoVeiculo:"1",selectedText:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},applyFiltro(i,s){this.$emit("transmiteData",i,s)},execAllLateral(){this.show_menu_lateral(),this.$emit("limparFiltro")},async filtrarMarca(i,s){console.log("ola mundo");const b=s.target.selectedIndex;this.selectedText=s.target.options[b].text,this.applyFiltro(i,this.selectedText),this.marcas=await m(`api/marcas/listar_marcas?tipo_veiculo=${this.selectedText}`)},async filtrarModelo(i,s){this.applyFiltro(i,s),this.modelos=await m(`api/modelos/listar_modelos?nome_marca=${s}`)},async filtrarRegiao(i,s){this.applyFiltro(i,s),this.regioes=await m(`api/regiao/listar_regiao?estado=${s}`)},async filtrarCidade(i,s){this.applyFiltro(i,s),this.cidades=await m(`api/cidade/listar_cidades?regiao=${s}`)},blurPreco(){this.applyFiltro("preco_min",this.precoMin),this.applyFiltro("preco_max",this.precoMax)},limparInputPreco2(){this.precoMax=""},blurAno(){this.applyFiltro("ano_modelo_min",this.anoMin),this.applyFiltro("ano_modelo_max",this.anoMax)},limparInputAno2(){this.anoMax=""},blurKm(){this.applyFiltro("quilometragem_min",this.kmMin),this.applyFiltro("quilometragem_max",this.kmMax)},limparInputKm2(){this.kmMax=""},toggleDropdown(i){this.$data.dropdownState[i]=!this.$data.dropdownState[i],this.$forceUpdate()},isDropdownOpen(i){return this.$data.dropdownState[i]||!1},filterOpcionais(i){return this.Api_Opcionais.filter(s=>s.categoria_opcional_id==i)},exibirEstado(){console.log(this.selecionados),this.applyFiltro("opcionais_id",this.selecionados)}},async mounted(){this.card_resultado=document.getElementById("card-resultado"),keys[0]=="tipo_veiculo"?this.valor=this.$route.query.tipo_veiculo:this.valor="carro",this.valor="ola mundo"},async created(){this.$store.state.tipo_veiculo=await x(),this.$store.state.estado=await y(),this.Api_CategOpcionais=await g(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais,this.Api_Opcionais=await f(),this.marcas=await m("api/marcas/listar_marcas?tipo_veiculo=carro")}},A={class:"bg-dar bg-whit position-relative"},V={style:{height:"88vh",overflow:"auto"},class:"meu-menu-lateral px-2"},O={class:"menu-lateral-btn-fechar d-flex justify-content-end"},T=o("i",{class:"fas fa-arrow-left"},null,-1),z=[T],E=o("div",{class:"p-2 pt-4"},[o("h5",{style:{"font-size":"16px"}},"Filtros")],-1),I={class:"px-2 pb-2"},U=o("div",{class:"pb-3"}," Situação do veiculo ",-1),L={class:"pesquisar pesquisar-lateral py-2"},S=o("option",{value:"",selected:"",disabled:""}," Situação do veiculo ",-1),B=o("option",{value:"1"}," Novo ",-1),N=o("option",{value:"2"}," Usado ",-1),P=[S,B,N],K=o("hr",null,null,-1),D={class:"px-2 pb-2"},R=o("div",{class:"pb-3"}," Tipo de veiculo ",-1),j={class:"pesquisar pesquisar-lateral py-2"},Q=o("option",{value:""}," veiculo ",-1),G=["value"],H=o("hr",null,null,-1),J={class:"px-2 pb-2"},W=o("div",{class:"pb-3"}," Marca ",-1),X={class:"pesquisar pesquisar-lateral py-2"},Y=o("option",{value:""}," Marca ",-1),Z=["value"],$=o("hr",null,null,-1),oo={class:"px-2 pb-2"},eo=o("div",{class:"pb-3"}," Modelo ",-1),so={class:"pesquisar pesquisar-lateral py-2"},to=o("option",{value:""}," Modelo ",-1),lo=["value"],io=o("hr",null,null,-1),ao={class:"px-2 pb-2"},no=o("div",{class:"pb-3"}," Estado ",-1),ro={class:"pesquisar pesquisar-lateral py-2"},co=o("option",{value:""}," Estados ",-1),po=["value"],uo=o("hr",null,null,-1),_o={class:"px-2 pb-2"},ho=o("div",{class:"pb-3"}," Região ",-1),mo={class:"pesquisar pesquisar-lateral py-2"},vo=o("option",{value:""}," Região ",-1),bo=["value"],xo=o("hr",null,null,-1),yo={class:"px-2 pb-2"},go=o("div",{class:"pb-3"}," Cidade ",-1),fo={class:"pesquisar pesquisar-lateral py-2"},wo=o("option",{value:""}," Cidade ",-1),Mo=["value"],ko=o("hr",null,null,-1),qo={class:"px-2 pb-3 pt-1"},Co={class:"row"},Fo={class:"col-6 pb-1 px-1 mt-2"},Ao={class:"pesquisar pesquisar-lateral"},Vo=o("span",{style:{"font-size":"14px",opacity:"0.7"}},"ex: 20.000",-1),Oo={class:"col-6 pb-1 px-1 mt-2"},To={class:"pesquisar pesquisar-lateral"},zo=o("span",{style:{"font-size":"14px",opacity:"0.7"}},"ex: 50.000 ",-1),Eo=o("hr",null,null,-1),Io={class:"px-2 pb-3 pt-1"},Uo={class:"row"},Lo={class:"col-6 pb-1 px-1 mt-2"},So={class:"pesquisar pesquisar-lateral"},Bo=o("span",{style:{"font-size":"14px",opacity:"0.7"}},"ex: 2000",-1),No={class:"col-6 pb-1 px-1 mt-2"},Po={class:"pesquisar pesquisar-lateral"},Ko=o("span",{style:{"font-size":"14px",opacity:"0.7"}},"ex: 2024 ",-1),Do=o("hr",null,null,-1),Ro={class:"px-2 pb-3 pt-1"},jo={class:"row"},Qo={class:"col-6 pb-1 px-1 mt-2"},Go={class:"pesquisar pesquisar-lateral"},Ho=o("span",{style:{"font-size":"14px",opacity:"0.7"}},"ex: 0",-1),Jo={class:"col-6 pb-1 px-1 mt-2"},Wo={class:"pesquisar pesquisar-lateral"},Xo=o("span",{style:{"font-size":"14px",opacity:"0.7"}},"ex: 1000 ",-1),Yo=o("hr",null,null,-1),Zo={class:"mb-3"},$o=o("div",{class:"mb-2"},[h(" Itens Opcionais "),o("p",{class:"mb-0",style:{"font-size":"13px",opacity:"0.7"}},"Click para deslizar")],-1),oe=["onClick"],ee={class:"ms-2"},se={key:0,class:"mb-2 pt-2"},te=["id","value"],le=["for"],ie=o("br",null,null,-1),ae=o("br",null,null,-1),ne=o("br",null,null,-1),re={class:"px-2 text-center position-absolute pt-3 bg-white",style:{left:"0",bottom:"0",width:"250px"}};function de(i,s,b,ce,l,t){return a(),n("aside",A,[o("div",V,[o("div",O,[o("div",{class:"pt-3 pe-3",onClick:s[0]||(s[0]=(...e)=>t.show_menu_lateral&&t.show_menu_lateral(...e)),style:{cursor:"pointer"}},z)]),E,o("div",I,[U,o("div",L,[o("select",{onChange:s[1]||(s[1]=e=>t.applyFiltro("situacao_veiculo",e.target.value)),style:{width:"90%",background:"none",border:"none"},class:"filter-select"},P,32)])]),K,o("div",D,[R,o("div",j,[r(o("select",{onChange:s[2]||(s[2]=e=>t.filtrarMarca("tipo_veiculo",e)),style:{width:"90%",background:"none",border:"none"},class:"filter-select","onUpdate:modelValue":s[3]||(s[3]=e=>l.valorTipoVeiculo=e)},[Q,(a(!0),n(d,null,c(i.$store.state.tipo_veiculo,e=>(a(),n("option",{value:e.id},p(e.tipo_veiculo),9,G))),256))],544),[[M,l.valorTipoVeiculo]])])]),H,o("div",J,[W,o("div",X,[o("select",{onChange:s[4]||(s[4]=e=>t.filtrarModelo("nome_marca",e.target.value)),style:{width:"90%",background:"none",border:"none"},class:"filter-select"},[Y,(a(!0),n(d,null,c(l.marcas,e=>(a(),n("option",{value:e.nome_marca},p(e.nome_marca),9,Z))),256))],32)])]),$,o("div",oo,[eo,o("div",so,[o("select",{onChange:s[5]||(s[5]=e=>t.applyFiltro("nome_modelo",e.target.value)),style:{width:"90%",background:"none",border:"none"},class:"filter-select"},[to,(a(!0),n(d,null,c(l.modelos,e=>(a(),n("option",{value:e.nome_modelo},p(e.nome_modelo),9,lo))),256))],32)])]),io,o("div",ao,[no,o("div",ro,[o("select",{onChange:s[6]||(s[6]=e=>t.filtrarRegiao("estado",e.target.value)),style:{width:"90%",background:"none",border:"none"},class:"filter-select"},[co,(a(!0),n(d,null,c(i.$store.state.estado,e=>(a(),n("option",{value:e.estado},p(e.estado),9,po))),256))],32)])]),uo,o("div",_o,[ho,o("div",mo,[o("select",{onChange:s[7]||(s[7]=e=>t.filtrarCidade("regiao",e.target.value)),style:{width:"90%",background:"none",border:"none"},class:"filter-select"},[vo,(a(!0),n(d,null,c(l.regioes,e=>(a(),n("option",{value:e.cidade},p(e.regiao),9,bo))),256))],32)])]),xo,o("div",yo,[go,o("div",fo,[o("select",{onChange:s[8]||(s[8]=e=>t.applyFiltro("cidade",e.target.value)),style:{width:"90%",background:"none",border:"none"},class:"filter-select"},[wo,(a(!0),n(d,null,c(l.cidades,e=>(a(),n("option",{value:e.cidade},p(e.cidade),9,Mo))),256))],32)])]),ko,o("div",qo,[h(" Preço "),o("div",Co,[o("div",Fo,[o("div",Ao,[r(o("input",{type:"text",placeholder:"de",class:"form-control",style:{background:"none",border:"none",color:"#000 !important"},onClick:s[9]||(s[9]=(...e)=>t.limparInputPreco2&&t.limparInputPreco2(...e)),"onUpdate:modelValue":s[10]||(s[10]=e=>l.precoMin=e)},null,512),[[_,l.precoMin]])]),Vo]),o("div",Oo,[o("div",To,[r(o("input",{type:"text",placeholder:"até",class:"form-control",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":s[11]||(s[11]=e=>l.precoMax=e),onBlur:s[12]||(s[12]=(...e)=>t.blurPreco&&t.blurPreco(...e))},null,544),[[_,l.precoMax]])]),zo])])]),Eo,o("div",Io,[h(" Ano "),o("div",Uo,[o("div",Lo,[o("div",So,[r(o("input",{type:"text",placeholder:"de",class:"form-control",style:{background:"none",border:"none",color:"#000 !important"},onClick:s[13]||(s[13]=(...e)=>t.limparInputAno2&&t.limparInputAno2(...e)),"onUpdate:modelValue":s[14]||(s[14]=e=>l.anoMin=e)},null,512),[[_,l.anoMin]])]),Bo]),o("div",No,[o("div",Po,[r(o("input",{type:"text",placeholder:"até",class:"form-control",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":s[15]||(s[15]=e=>l.anoMax=e),onBlur:s[16]||(s[16]=(...e)=>t.blurAno&&t.blurAno(...e))},null,544),[[_,l.anoMax]])]),Ko])])]),Do,o("div",Ro,[h(" Quilometragem "),o("div",jo,[o("div",Qo,[o("div",Go,[r(o("input",{type:"text",placeholder:"de",class:"form-control",style:{background:"none",border:"none",color:"#000 !important"},onClick:s[17]||(s[17]=(...e)=>t.limparInputKm2&&t.limparInputKm2(...e)),"onUpdate:modelValue":s[18]||(s[18]=e=>l.kmMin=e)},null,512),[[_,l.kmMin]])]),Ho]),o("div",Jo,[o("div",Wo,[r(o("input",{type:"text",placeholder:"até",class:"form-control",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":s[19]||(s[19]=e=>l.kmMax=e),onBlur:s[20]||(s[20]=(...e)=>t.blurKm&&t.blurKm(...e))},null,544),[[_,l.kmMax]])]),Xo])])]),Yo,o("div",null,[o("div",Zo,[$o,(a(!0),n(d,null,c(l.Api_CategOpcionais,e=>(a(),n("div",{key:e.id},[o("p",{onClick:u=>t.toggleDropdown(e.id),style:{cursor:"pointer",opacity:"1",margin:"0"}},[o("span",{class:k({"arrow-down":t.isDropdownOpen(e.id)})},"►",2),o("span",ee,p(e.nome),1)],8,oe),t.isDropdownOpen(e.id)?(a(),n("div",se,[(a(!0),n(d,null,c(t.filterOpcionais(e.id),u=>(a(),n("div",{key:u.id,class:"ps-4"},[r(o("input",{type:"checkbox",id:"checkbox_"+u.id,value:u.id,"onUpdate:modelValue":s[21]||(s[21]=v=>l.selecionados=v),class:"me-2",onChange:s[22]||(s[22]=(...v)=>t.exibirEstado&&t.exibirEstado(...v))},null,40,te),[[q,l.selecionados]]),o("label",{for:"checkbox_"+u.id},p(u.nome),9,le)]))),128))])):C("",!0)]))),128))])]),ie,h(),ae,h(),ne]),o("div",re,[o("button",{class:"col-11 pb-1 px-2 btn border border-1 border-dark",style:{color:"#000",cursor:"pointer"},onClick:s[23]||(s[23]=(...e)=>t.execAllLateral&&t.execAllLateral(...e))}," Limpar Filtros ")])])}const _e=w(F,[["render",de]]);export{_e as T};
