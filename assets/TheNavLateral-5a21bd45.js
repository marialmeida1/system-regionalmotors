import{f as _,d as x,e as f,h as y,i as b}from"./loader-45d269ff.js";import{_ as M,o as r,c as a,a as e,F as c,i as u,e as d,v as p,n as m,t as n,f as h}from"./index-447ad33f.js";const g={name:"TheNavLateral",data(){return{card_resultado:"",tipo_veiculo:"",novo:"",semi_novo:"",selectedVehicle:"",Api_CategOpcionais:[],selecionados:[],dropdownState:{},array_filtros:[],filterMarcas:"",filterModelo:"",showMarcas:!1,showModelos:!1,showEstados:!1,textMarca:"",textModelo:"",textEstado:"",tipo_de_veiculo:"",marcas:[],modelos:[],regioes:[],cidades:[],precoMax:"",precoMin:"",anoMax:"",anoMin:"",errorAno:"",errorPreco:"",errorKm:"",kmMax:"",kmMin:"",valorTipoVeiculo:"1",selectedText:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},applyFiltro(l,o){this.$emit("transmiteData",l,o)},execAllLateral(){this.show_menu_lateral(),this.$emit("limparFiltro"),this.anoMax="",this.anoMin="",this.precoMax="",this.precoMin="",this.kmMax="",this.kmMin="",document.getElementById("situacao_veiculo").value="",document.getElementById("tipo_veiculo").value="",document.getElementById("marca").value="",document.getElementById("modelo").value="",document.getElementById("estado").value="",document.getElementById("cidade").value="",this.errorAno="",this.errorKm="",this.errorPreco=""},async filtrarMarca(l,o){const v=o.target.selectedIndex;this.selectedText=o.target.options[v].text,this.applyFiltro(l,this.selectedText),this.marcas=await _(`api/marcas/listar_marcas?tipo_veiculo=${this.selectedText}`)},async filtrarModelo(l,o){this.applyFiltro(l,o),this.modelos=await _(`api/modelos/listar_modelos?nome_marca=${o}`)},async filtrarCidade(l,o){this.applyFiltro(l,o),this.cidades=await _(`api/cidade/listar_cidades?estado=${o}`)},blurPreco(){if(this.errorPreco="",this.precoMax<this.precoMin){this.errorPreco="O valor máximo deve ser maior que o mínimo.";return}this.precoMin==""&&(this.precoMin="0"),this.applyFiltro("preco_min",this.precoMin),this.applyFiltro("preco_max",this.precoMax)},limparInputPreco2(){this.precoMax=""},blurAno(){if(this.errorAno="",this.anoMax<this.anoMin){this.errorAno="O valor máximo deve ser maior que o mínimo.";return}this.anoMin==""&&(this.anoMin="0"),this.applyFiltro("ano_modelo_min",this.anoMin),this.applyFiltro("ano_modelo_max",this.anoMax)},limparInputAno2(){this.anoMax=""},blurKm(){if(this.erroKm="",this.kmMax<this.kmMin){this.errorKm="O valor máximo deve ser maior que o mínimo.";return}this.kmMin==""&&(this.kmMin="0"),this.applyFiltro("quilometragem_min",this.kmMin),this.applyFiltro("quilometragem_max",this.kmMax)},limparInputKm2(){this.kmMax=""},toggleDropdown(l){this.$data.dropdownState[l]=!this.$data.dropdownState[l],this.$forceUpdate()},isDropdownOpen(l){return this.$data.dropdownState[l]||!1},filterOpcionais(l){return this.Api_Opcionais.filter(o=>o.categoria_opcional_id==l)},exibirEstado(){console.log(this.selecionados),this.applyFiltro("opcionais_id",this.selecionados)}},async mounted(){this.card_resultado=document.getElementById("card-resultado"),keys[0]=="tipo_veiculo"?this.valor=this.$route.query.tipo_veiculo:this.valor="carro",this.valor="ola mundo"},async created(){this.$store.state.tipo_veiculo=await x(),this.$store.state.estado=await f(),this.Api_CategOpcionais=await y(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais,this.Api_Opcionais=await b(),this.marcas=await _("api/marcas/listar_marcas")}},k={class:"bg-dar bg-whit position-relative"},w={style:{height:"88vh",overflow:"auto"},class:"meu-menu-lateral px-2 pb-1"},q={class:"menu-lateral-btn-fechar d-flex justify-content-end"},A=e("i",{class:"fas fa-arrow-left"},null,-1),C=[A],F=e("div",{class:"p-2 pt-4 pb-4 fw-bolder"},[e("h5",null,"Filtros")],-1),I={class:"px-2 pb-2"},E=e("div",{class:"title__filter pb-2"},"Situação do veículo",-1),P={class:"pesquisar pesquisar-lateral p-2"},B=e("option",{value:"",selected:"",disabled:""},"Situação do veículo",-1),K=e("option",{value:""},"Todos",-1),O=e("option",{value:"1"},"Novo",-1),T=e("option",{value:"2"},"Usado",-1),V=[B,K,O,T],L=e("hr",null,null,-1),U={class:"px-2 pb-2"},z=e("div",{class:"title__filter pb-2"},"Tipo de veiculo",-1),S={class:"pesquisar pesquisar-lateral p-2"},N=e("option",{value:"",selected:"",disabled:""},"Veículo",-1),D=["value"],j=e("hr",null,null,-1),Q={class:"px-2 pb-2"},G=e("div",{class:"title__filter pb-2"},"Marca",-1),H={class:"pesquisar pesquisar-lateral p-2"},J=e("option",{value:""},"Marca",-1),R=["value"],W=e("hr",null,null,-1),X={class:"px-2 pb-2"},Y=e("div",{class:"title__filter pb-2"},"Modelo",-1),Z={class:"pesquisar pesquisar-lateral p-2"},$=e("option",{value:""},"Modelo",-1),ee=["value"],te=e("hr",null,null,-1),oe={class:"px-2 pb-2"},se=e("div",{class:"title__filter pb-2"},"Estado",-1),ie={class:"pesquisar pesquisar-lateral p-2"},le=e("option",{value:""},"Estados",-1),re=["value"],ae=e("hr",null,null,-1),ne={class:"px-2 pb-2"},de=e("div",{class:"title__filter pb-2"},"Cidade",-1),pe={class:"pesquisar pesquisar-lateral p-2"},ce=e("option",{value:""},"Cidade",-1),ue=["value"],_e=e("hr",null,null,-1),me={class:"px-2 pb-3 pt-1"},he=e("div",{class:"title__filter pb-2"},"Preço",-1),ve={class:"row"},xe={class:"col-6 pb-1 px-1 mt-2"},fe={class:"pesquisar pesquisar-lateral"},ye=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 20.000",-1),be={class:"col-6 pb-1 px-1 mt-2"},Me={key:0,class:"error-message"},ge=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 50.000 ",-1),ke=e("hr",null,null,-1),we={class:"px-2 pb-3 pt-1"},qe=e("div",{class:"title__filter pb-2"},"Ano",-1),Ae={class:"row"},Ce={class:"col-6 pb-1 px-1 mt-2"},Fe={class:"pesquisar pesquisar-lateral"},Ie=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 2000",-1),Ee={class:"col-6 pb-1 px-1 mt-2"},Pe={key:0,class:"error-message"},Be=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 2024 ",-1),Ke=e("hr",null,null,-1),Oe={class:"px-2 pb-3 pt-1"},Te=e("div",{class:"title__filter pb-2"},"Quilometragem",-1),Ve={class:"row"},Le={class:"col-6 pb-1 px-1 mt-2"},Ue={class:"pesquisar pesquisar-lateral"},ze=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 0",-1),Se={class:"col-6 pb-1 px-1 mt-2"},Ne={key:0,class:"error-message"},De=e("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 1000 ",-1),je=e("hr",null,null,-1),Qe={class:"px-2 text-center position-absolute pt-3 bg-white",style:{left:"0",bottom:"0",width:"250px"}};function Ge(l,o,v,He,s,i){return r(),a("aside",k,[e("div",w,[e("div",q,[e("div",{class:"pt-3 pe-3",onClick:o[0]||(o[0]=(...t)=>i.show_menu_lateral&&i.show_menu_lateral(...t)),style:{cursor:"pointer"}},C)]),F,e("div",I,[E,e("div",P,[e("select",{onChange:o[1]||(o[1]=t=>i.applyFiltro("situacao_veiculo",t.target.value)),class:"filter-select",id:"situacao_veiculo"},V,32)])]),L,e("div",U,[z,e("div",S,[e("select",{onChange:o[2]||(o[2]=t=>i.filtrarMarca("tipo_veiculo",t)),class:"filter-select",id:"tipo_veiculo"},[N,(r(!0),a(c,null,u(l.$store.state.tipo_veiculo,t=>(r(),a("option",{value:t.id},n(t.tipo_veiculo),9,D))),256))],32)])]),j,e("div",Q,[G,e("div",H,[e("select",{onChange:o[3]||(o[3]=t=>i.filtrarModelo("nome_marca",t.target.value)),class:"filter-select",id:"marca"},[J,(r(!0),a(c,null,u(s.marcas,t=>(r(),a("option",{value:t.nome_marca},n(t.nome_marca),9,R))),256))],32)])]),W,e("div",X,[Y,e("div",Z,[e("select",{onChange:o[4]||(o[4]=t=>i.applyFiltro("nome_modelo",t.target.value)),class:"filter-select",id:"modelo"},[$,(r(!0),a(c,null,u(s.modelos,t=>(r(),a("option",{value:t.nome_modelo},n(t.nome_modelo),9,ee))),256))],32)])]),te,e("div",oe,[se,e("div",ie,[e("select",{onChange:o[5]||(o[5]=t=>i.filtrarCidade("estado",t.target.value)),class:"filter-select",id:"estado"},[le,(r(!0),a(c,null,u(l.$store.state.estado,t=>(r(),a("option",{value:t.estado},n(t.estado),9,re))),256))],32)])]),ae,e("div",ne,[de,e("div",pe,[e("select",{onChange:o[6]||(o[6]=t=>i.applyFiltro("cidade",t.target.value)),class:"filter-select",id:"cidade"},[ce,(r(!0),a(c,null,u(s.cidades,t=>(r(),a("option",{value:t.cidade},n(t.cidade),9,ue))),256))],32)])]),_e,e("div",me,[he,e("div",ve,[e("div",xe,[e("div",fe,[d(e("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:o[7]||(o[7]=(...t)=>i.limparInputPreco2&&i.limparInputPreco2(...t)),"onUpdate:modelValue":o[8]||(o[8]=t=>s.precoMin=t)},null,512),[[p,s.precoMin]])]),ye]),e("div",be,[e("div",{class:m(["pesquisar pesquisar-lateral",{"input-error":s.errorPreco}])},[d(e("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":o[9]||(o[9]=t=>s.precoMax=t),onBlur:o[10]||(o[10]=(...t)=>i.blurPreco&&i.blurPreco(...t))},null,544),[[p,s.precoMax]])],2),s.errorPreco?(r(),a("div",Me,n(s.errorPreco),1)):h("",!0),ge])])]),ke,e("div",we,[qe,e("div",Ae,[e("div",Ce,[e("div",Fe,[d(e("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:o[11]||(o[11]=(...t)=>i.limparInputAno2&&i.limparInputAno2(...t)),"onUpdate:modelValue":o[12]||(o[12]=t=>s.anoMin=t)},null,512),[[p,s.anoMin]])]),Ie]),e("div",Ee,[e("div",{class:m(["pesquisar pesquisar-lateral",{"input-error":s.errorAno}])},[d(e("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":o[13]||(o[13]=t=>s.anoMax=t),onBlur:o[14]||(o[14]=(...t)=>i.blurAno&&i.blurAno(...t))},null,544),[[p,s.anoMax]])],2),s.errorAno?(r(),a("div",Pe,n(s.errorAno),1)):h("",!0),Be])])]),Ke,e("div",Oe,[Te,e("div",Ve,[e("div",Le,[e("div",Ue,[d(e("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:o[15]||(o[15]=(...t)=>i.limparInputKm2&&i.limparInputKm2(...t)),"onUpdate:modelValue":o[16]||(o[16]=t=>s.kmMin=t)},null,512),[[p,s.kmMin]])]),ze]),e("div",Se,[e("div",{class:m(["pesquisar pesquisar-lateral",{"input-error":s.errorKm}])},[d(e("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":o[17]||(o[17]=t=>s.kmMax=t),onBlur:o[18]||(o[18]=(...t)=>i.blurKm&&i.blurKm(...t))},null,544),[[p,s.kmMax]])],2),s.errorKm?(r(),a("div",Ne,n(s.errorKm),1)):h("",!0),De])])]),je]),e("div",Qe,[e("button",{class:"col-11 pb-1 px-2 btn border border-1 border-dark",style:{color:"#000",cursor:"pointer"},onClick:o[19]||(o[19]=(...t)=>i.execAllLateral&&i.execAllLateral(...t))},"Limpar Filtros")])])}const We=M(g,[["render",Ge]]);export{We as T};
