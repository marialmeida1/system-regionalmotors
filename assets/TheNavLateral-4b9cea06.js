import{_ as x,p as d,s as f,u as g,x as b,y,o as a,c as r,a as e,F as c,j as p,e as u,v as _,q as h,t as n,f as v}from"./index-c4720f3d.js";const M={name:"TheNavLateral",data(){return{card_resultado:"",tipo_veiculo:"",novo:"",semi_novo:"",selectedVehicle:"",Api_CategOpcionais:[],selecionados:[],dropdownState:{},array_filtros:[],filterMarcas:"",filterModelo:"",showMarcas:!1,showModelos:!1,showEstados:!1,textMarca:"",textModelo:"",textEstado:"",tipo_de_veiculo:"",marcas:[],modelos:[],categorias:[],regioes:[],cidades:[],precoMax:"",precoMin:"",anoMax:"",anoMin:"",errorAno:"",errorPreco:"",errorKm:"",kmMax:"",kmMin:"",valorTipoVeiculo:"1",selectedText:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},applyFiltro(l,t){this.$emit("transmiteData",l,t)},execAllLateral(){this.show_menu_lateral(),this.$emit("limparFiltro"),this.anoMax="",this.anoMin="",this.precoMax="",this.precoMin="",this.kmMax="",this.kmMin="",this.cidades="",document.getElementById("situacao_veiculo").value="",document.getElementById("tipo_veiculo").value="",document.getElementById("marca").value="",document.getElementById("modelo").value="",document.getElementById("categoria").value="",document.getElementById("estado").value="",document.getElementById("cidade").value="",this.errorAno="",this.errorKm="",this.errorPreco=""},async filtrarMarca(l,t){const m=t.target.selectedIndex;this.selectedText=t.target.options[m].text,this.applyFiltro(l,this.selectedText),this.marcas=await d(`api/marcas/listar_marcas?tipo_veiculo=${this.selectedText}`)},async filtrarModelo(l,t){this.applyFiltro(l,t),this.modelos=await d(`api/modelos/listar_modelos?nome_marca=${t}`)},async filtrarCategoria(l,t){this.applyFiltro(l,t),this.categorias=await d(`api/categorias/listar_categorias?nome_categoria=${t}`)},async filtrarCidade(l,t){this.applyFiltro(l,t),this.cidades=await d(`api/cidade/listar_cidades?estado=${t}`)},blurPreco(){if(this.errorPreco="",this.precoMax<this.precoMin){this.errorPreco="O valor máximo deve ser maior que o mínimo.";return}this.precoMin==""&&(this.precoMin="0"),this.applyFiltro("preco_min",this.precoMin),this.applyFiltro("preco_max",this.precoMax)},limparInputPreco2(){this.precoMax=""},blurAno(){if(this.errorAno="",this.anoMax<this.anoMin){this.errorAno="O valor máximo deve ser maior que o mínimo.";return}this.anoMin==""&&(this.anoMin="0"),this.applyFiltro("ano_modelo_min",this.anoMin),this.applyFiltro("ano_modelo_max",this.anoMax)},limparInputAno2(){this.anoMax=""},blurKm(){if(this.erroKm="",this.kmMax<this.kmMin){this.errorKm="O valor máximo deve ser maior que o mínimo.";return}this.kmMin==""&&(this.kmMin="0"),this.applyFiltro("quilometragem_min",this.kmMin),this.applyFiltro("quilometragem_max",this.kmMax)},limparInputKm2(){this.kmMax=""},toggleDropdown(l){this.$data.dropdownState[l]=!this.$data.dropdownState[l],this.$forceUpdate()},isDropdownOpen(l){return this.$data.dropdownState[l]||!1},filterOpcionais(l){return this.Api_Opcionais.filter(t=>t.categoria_opcional_id==l)},exibirEstado(){this.applyFiltro("opcionais_id",this.selecionados)}},async created(){this.$store.state.tipo_veiculo=await f(),this.$store.state.estado=await g(),this.Api_CategOpcionais=await b(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais,this.Api_Opcionais=await y(),this.marcas=await d("api/marcas/listar_marcas"),this.categorias=await d("api/categorias/listar_categorias");const l=window.location.href,t=window.location.origin;l.replace(t,"")=="/resultados"&&(document.getElementById("tipo_veiculo").value="1",document.getElementById("situacao_veiculo").value="2")}},w={class:"bg-dar bg-whit position-relative"},k={style:{height:"88vh",overflow:"auto"},class:"meu-menu-lateral px-2 pb-1"},q={class:"menu-lateral-btn-fechar d-flex justify-content-end"},C=e("i",{class:"fas fa-arrow-left"},null,-1),A=[C],F=e("div",{class:"p-2 pt-4 pb-4 fw-bolder"},[e("h5",null,"Filtros")],-1),I={class:"px-2 pb-2"},E=e("div",{class:"title__filter pb-2"},"Situação do veículo",-1),B={class:"pesquisar pesquisar-lateral p-2"},P=e("option",{value:"",selected:"",disabled:""},"Situação do veículo",-1),K=e("option",{value:"0"},"Todos",-1),O=e("option",{value:"1"},"Novo",-1),T=e("option",{value:"2"},"Usado",-1),V=[P,K,O,T],U=e("hr",null,null,-1),L={class:"px-2 pb-2"},z=e("div",{class:"title__filter pb-2"},"Tipo de veiculo",-1),S={class:"pesquisar pesquisar-lateral p-2"},N=e("option",{value:"",selected:"",disabled:""},"Veículo",-1),j=["value"],D=e("hr",null,null,-1),Q={class:"px-2 pb-2"},G=e("div",{class:"title__filter pb-2"},"Marca",-1),H={class:"pesquisar pesquisar-lateral p-2"},J=e("option",{value:""},"Marca",-1),R=["value"],W=e("hr",null,null,-1),X={class:"px-2 pb-2"},Y=e("div",{class:"title__filter pb-2"},"Modelo",-1),Z={class:"pesquisar pesquisar-lateral p-2"},$=e("option",{value:""},"Modelo",-1),ee=["value"],te=e("hr",null,null,-1),oe={class:"px-2 pb-2"},se=e("div",{class:"title__filter pb-2"},"Categoria",-1),ie={class:"pesquisar pesquisar-lateral p-2"},le=e("option",{value:""},"Categoria",-1),ae=["value"],re=e("hr",null,null,-1),ne={class:"px-2 pb-2"},de=e("div",{class:"title__filter pb-2"},"Estado",-1),ce={class:"pesquisar pesquisar-lateral p-2"},pe=e("option",{value:""},"Estados",-1),ue=["value"],_e=e("hr",null,null,-1),me={class:"px-2 pb-2"},he=e("div",{class:"title__filter pb-2"},"Cidade",-1),ve={class:"pesquisar pesquisar-lateral p-2"},xe=e("option",{value:""},"Cidade",-1),fe=["value"],ge=e("hr",null,null,-1),be={class:"px-2 pb-3 pt-1"},ye=e("div",{class:"title__filter pb-2"},"Preço",-1),Me={class:"row"},we={class:"col-6 pb-1 px-1 mt-2"},ke={class:"pesquisar pesquisar-lateral"},qe=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 20.000",-1),Ce={class:"col-6 pb-1 px-1 mt-2"},Ae={key:0,class:"error-message"},Fe=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 50.000 ",-1),Ie=e("hr",null,null,-1),Ee={class:"px-2 pb-3 pt-1"},Be=e("div",{class:"title__filter pb-2"},"Ano",-1),Pe={class:"row"},Ke={class:"col-6 pb-1 px-1 mt-2"},Oe={class:"pesquisar pesquisar-lateral"},Te=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 2000",-1),Ve={class:"col-6 pb-1 px-1 mt-2"},Ue={key:0,class:"error-message"},Le=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 2024 ",-1),ze=e("hr",null,null,-1),Se={class:"px-2 pb-3 pt-1"},Ne=e("div",{class:"title__filter pb-2"},"Quilometragem",-1),je={class:"row"},De={class:"col-6 pb-1 px-1 mt-2"},Qe={class:"pesquisar pesquisar-lateral"},Ge=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 0",-1),He={class:"col-6 pb-1 px-1 mt-2"},Je={key:0,class:"error-message"},Re=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 1000 ",-1),We=e("hr",null,null,-1),Xe={class:"px-2 text-center position-absolute pt-3 bg-white",style:{left:"0",bottom:"0",width:"250px"}};function Ye(l,t,m,Ze,s,i){return a(),r("aside",w,[e("div",k,[e("div",q,[e("div",{class:"pt-3 pe-3",onClick:t[0]||(t[0]=(...o)=>i.show_menu_lateral&&i.show_menu_lateral(...o)),style:{cursor:"pointer"}},A)]),F,e("div",I,[E,e("div",B,[e("select",{onChange:t[1]||(t[1]=o=>i.applyFiltro("situacao_veiculo",o.target.value)),class:"filter-select",id:"situacao_veiculo"},V,32)])]),U,e("div",L,[z,e("div",S,[e("select",{onChange:t[2]||(t[2]=o=>i.filtrarMarca("tipo_veiculo",o)),class:"filter-select",id:"tipo_veiculo"},[N,(a(!0),r(c,null,p(l.$store.state.tipo_veiculo,o=>(a(),r("option",{value:o.id},n(o.tipo_veiculo),9,j))),256))],32)])]),D,e("div",Q,[G,e("div",H,[e("select",{onChange:t[3]||(t[3]=o=>i.filtrarModelo("nome_marca",o.target.value)),class:"filter-select",id:"marca"},[J,(a(!0),r(c,null,p(s.marcas,o=>(a(),r("option",{value:o.nome_marca},n(o.nome_marca),9,R))),256))],32)])]),W,e("div",X,[Y,e("div",Z,[e("select",{onChange:t[4]||(t[4]=o=>i.applyFiltro("nome_modelo",o.target.value)),class:"filter-select",id:"modelo"},[$,(a(!0),r(c,null,p(s.modelos,o=>(a(),r("option",{value:o.nome_modelo},n(o.nome_modelo),9,ee))),256))],32)])]),te,e("div",oe,[se,e("div",ie,[e("select",{onChange:t[5]||(t[5]=o=>i.filtrarCategoria("nome_categoria",o.target.value)),class:"filter-select",id:"categoria"},[le,(a(!0),r(c,null,p(s.categorias,o=>(a(),r("option",{value:o.nome},n(o.nome),9,ae))),256))],32)])]),re,e("div",ne,[de,e("div",ce,[e("select",{onChange:t[6]||(t[6]=o=>i.filtrarCidade("estado",o.target.value)),class:"filter-select",id:"estado"},[pe,(a(!0),r(c,null,p(l.$store.state.estado,o=>(a(),r("option",{value:o.estado},n(o.estado),9,ue))),256))],32)])]),_e,e("div",me,[he,e("div",ve,[e("select",{onChange:t[7]||(t[7]=o=>i.applyFiltro("cidade",o.target.value)),class:"filter-select",id:"cidade"},[xe,(a(!0),r(c,null,p(s.cidades,o=>(a(),r("option",{value:o.cidade},n(o.cidade),9,fe))),256))],32)])]),ge,e("div",be,[ye,e("div",Me,[e("div",we,[e("div",ke,[u(e("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:t[8]||(t[8]=(...o)=>i.limparInputPreco2&&i.limparInputPreco2(...o)),"onUpdate:modelValue":t[9]||(t[9]=o=>s.precoMin=o)},null,512),[[_,s.precoMin]])]),qe]),e("div",Ce,[e("div",{class:h(["pesquisar pesquisar-lateral",{"input-error":s.errorPreco}])},[u(e("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":t[10]||(t[10]=o=>s.precoMax=o),onBlur:t[11]||(t[11]=(...o)=>i.blurPreco&&i.blurPreco(...o))},null,544),[[_,s.precoMax]])],2),s.errorPreco?(a(),r("div",Ae,n(s.errorPreco),1)):v("",!0),Fe])])]),Ie,e("div",Ee,[Be,e("div",Pe,[e("div",Ke,[e("div",Oe,[u(e("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:t[12]||(t[12]=(...o)=>i.limparInputAno2&&i.limparInputAno2(...o)),"onUpdate:modelValue":t[13]||(t[13]=o=>s.anoMin=o)},null,512),[[_,s.anoMin]])]),Te]),e("div",Ve,[e("div",{class:h(["pesquisar pesquisar-lateral",{"input-error":s.errorAno}])},[u(e("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":t[14]||(t[14]=o=>s.anoMax=o),onBlur:t[15]||(t[15]=(...o)=>i.blurAno&&i.blurAno(...o))},null,544),[[_,s.anoMax]])],2),s.errorAno?(a(),r("div",Ue,n(s.errorAno),1)):v("",!0),Le])])]),ze,e("div",Se,[Ne,e("div",je,[e("div",De,[e("div",Qe,[u(e("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:t[16]||(t[16]=(...o)=>i.limparInputKm2&&i.limparInputKm2(...o)),"onUpdate:modelValue":t[17]||(t[17]=o=>s.kmMin=o)},null,512),[[_,s.kmMin]])]),Ge]),e("div",He,[e("div",{class:h(["pesquisar pesquisar-lateral",{"input-error":s.errorKm}])},[u(e("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":t[18]||(t[18]=o=>s.kmMax=o),onBlur:t[19]||(t[19]=(...o)=>i.blurKm&&i.blurKm(...o))},null,544),[[_,s.kmMax]])],2),s.errorKm?(a(),r("div",Je,n(s.errorKm),1)):v("",!0),Re])])]),We]),e("div",Xe,[e("button",{class:"col-11 pb-1 px-2 btn border border-1 border-dark",style:{color:"#000",cursor:"pointer"},onClick:t[20]||(t[20]=(...o)=>i.execAllLateral&&i.execAllLateral(...o))},"Limpar Filtros")])])}const et=x(M,[["render",Ye]]);export{et as T};
