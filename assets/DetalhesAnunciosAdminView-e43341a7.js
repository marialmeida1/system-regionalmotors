import{T as y}from"./TheNavTop-4a3669d1.js";import{T as A}from"./TheAdminNavLateral2-25015967.js";import{m as x,v as k,g as w,i as z}from"./TheForm_Login-2bf4b8c0.js";import{_ as T}from"./bom-cb4bb6e8.js";import{_ as g,o as c,c as l,a as o,t,d as e,g as S,F as m,i as v,e as N,r as _,b as u}from"./index-11efcf57.js";import{T as C}from"./TheCarregarFoto-d8c90003.js";import"./logo-5b4cc875.js";const D={name:"TheDetalhesAnuncios",data(){return{veiculo:{tipo_veiculo:"",marca_id:"",modelo_id:"",numero_cliques:"",situacao_veiculo:"",anunciante_id:"",categoria_id:"",data_inicio:"",data_fim:"",ordenacao:"",status_publicacao:"",status_pagamento:"",tipo:"",vendido:"",vitrine:"",destaque_busca:"",cep:"",estado_id:"",cidade_id:"",empresa:"",tipo_preco:"",valor_preco:"",fabricacao:"",ano_fabricacao:"",ano_modelo:"",carroceria:"",estilo:"",portas:"",cilindros:"",motor:"",cor:"",transmissao:"",combustivel:"",placa:"",km:"",sinistrado:"",conforto:"[]",seguranca:"[]",som:"",descricao:""},detalharAnuncios:"",confortoArray:[],segurancaArray:[],mostrarFotos:!1,mostrarDescricao:!0,id:"",tipo_veiculo:"",empresa:"",estado:"",cidade:"",sel_categoria:"",Api_modelos:[],Api_marcas:[],Api_categorias:"",cores:["Vermelho","Amarelo","Azul","Branco","Preto"],portas:[2,4,6,8,10],Api_fabricante:["BMW","Suzuki","Toyota"],anos:[],marcas:[],modelos:"",marcaSelecionada:null,modeloSelecionado:null,ano_modelo:"",desc:"",previewImage:null,validate_moto:!0,valor_preco:"",fabricacao:"",ano_fabricante:"",num_portas:"",cor:"",transmissao:"",combustivel:"",kilometro:"",desc:"",conforto:[],seguranca:[],situacao_veiculo:"",menuItems:[{label:"Opcionais de Conforto",isOpen:!1,inputs:["Ar condicionado","Ar quente"]},{label:"Opcionais de Segurança",isOpen:!1,inputs:["Cinto de Segurança","Segurança 2","Segurança 3"]}],selectedInputs:{"Opcionais de Conforto":[],"Opcionais de Segurança":[]},conforto:[],seguranca:[],categoryLabel:[],categoryLabel2:[],nome_marca:"",status_anuncio:"",Api_CategOpcionais:""}},methods:{show_menu_lateral(){console.log("ola mundos"),this.$emit("show_menu_lateral")},async editar(){console.log("Marca"),console.log(this.marcaSelecionada);const i=new Date;i.getDate(),i.getMonth()+1,i.getFullYear(),console.log("Passando Opcionais"),console.log(this.conforto),console.log(this.seguranca),JSON.stringify(this.conforto),JSON.stringify(this.seguranca);const a={tipo_veiculo:"Carro Actualizado",marca_id:"1",modelo_id:"1",numero_cliques:"2",situacao_veiculo:"1",anunciante_id:"1",categoria_id:"1",data_inicio:"20-02-2021",data_fim:"20-02-2022",ordenacao:"2",status_publicacao:this.status_anuncio,status_pagamento:"1",tipo:"2",vendido:"1",vitrine:"1",destaque_busca:"1",cep:"12352",estado_id:"1",cidade_id:"1",empresa:"Gloart",tipo_preco:"1",valor_preco:"200",fabricacao:"2000",ano_fabricacao:"2020",ano_modelo:"2020",carroceria:"sim",estilo:"Abc",portas:"4",cilindros:"4",motor:"2",cor:"Azul",transmissao:"1",combustivel:"1",placa:"22LB1",km:"1",sinistrado:"sim",conforto:["Ar Condicionado","Direção Hidráulica","Vidros Elétricos"],seguranca:["Airbag","ABS"],som:"sim",descricao:"Carro à Disel"};try{let n=this.$route.query.id;console.log("Editando ID: "+n);const p=await x(a,n);p?(console.log("Anuncio Editado... "+p.id),this.id=p.id,this.$emit("emitAnuncioEditado"),console.log("Limpando...")):this.showErrorMessage=!0}catch(n){console.error("Erro na requisição:",n),this.showErrorMessage=!0}},showgetDados(){let i=this.$route.query.id;this.detalharAnuncios=this.$store.state.anuncios.find(a=>a.id===parseInt(i)),console.log("Dados"),console.log(this.detalharAnuncios.nome_marca),console.log(this.detalharAnuncios.fabricante),this.empresa=this.detalharAnuncios.empresa,this.estado=this.detalharAnuncios.estado_id,this.cidade=this.detalharAnuncios.cidade_id,this.situacao_veiculo=this.detalharAnuncios.situacao_veiculo,this.tipo_veiculo=this.detalharAnuncios.tipo_veiculo,this.marcaSelecionada=this.detalharAnuncios.id_marca,this.nome_marca=this.detalharAnuncios.nome_marca,this.modeloSelecionado=this.detalharAnuncios.nome_modelo,this.ano_modelo=this.detalharAnuncios.ano_modelo,this.sel_categoria=this.detalharAnuncios.nome_categoria,this.fabricacao=this.detalharAnuncios.fabricacao,this.ano_fabricante=this.detalharAnuncios.ano_fabricacao,this.carroceria=this.detalharAnuncios.carroceria,this.estilo=this.detalharAnuncios.estilo,this.valor_preco=this.detalharAnuncios.valor_preco,this.cor=this.detalharAnuncios.cor,this.num_portas=this.detalharAnuncios.portas,this.transmissao=this.detalharAnuncios.transmissao,this.combustivel=this.detalharAnuncios.combustivel,this.kilometro=this.detalharAnuncios.km,this.status_anuncio=this.detalharAnuncios.status_publicacao,this.conforto=JSON.parse(this.detalharAnuncios.conforto),this.seguranca=JSON.parse(this.detalharAnuncios.seguranca)},showFotos(){this.mostrarFotos=!0,this.mostrarDescricao=!1},async recarregarDados(){const i=parseInt(this.$route.query.id);this.$store.state.anuncioID=i,console.log("Recarregar fotos nos anuncios...#");try{this.$store.state.anuncios=await k(),console.log("Id "+this.$store.state.anuncioID),this.$store.state.anuncios!=null&&(this.$store.state.detalharAnuncios=this.$store.state.anuncios.find(a=>a.id==this.$store.state.anuncioID)),this.$store.state.detalharAnuncios&&this.$emit("hiddenLoading"),this.$store.state.foto1=this.$store.state.detalharAnuncios.foto1,this.$store.state.foto2=this.$store.state.detalharAnuncios.foto2,this.$store.state.foto3=this.$store.state.detalharAnuncios.foto3,this.$store.state.foto4=this.$store.state.detalharAnuncios.foto4,this.$store.state.foto5=this.$store.state.detalharAnuncios.foto5,this.$store.state.foto6=this.$store.state.detalharAnuncios.foto6,this.$store.state.foto7=this.$store.state.detalharAnuncios.foto7,this.$store.state.foto8=this.$store.state.detalharAnuncios.foto8,this.$store.state.foto9=this.$store.state.detalharAnuncios.foto9,this.$store.state.foto10=this.$store.state.detalharAnuncios.foto10,console.log("Novo contador "+this.contador),console.log("Detalhar "+JSON.stringify(this.$store.state.detalharAnuncios.seguranca_id)),this.confortoArray=JSON.parse(this.$store.state.detalharAnuncios.conforto_id),this.segurancaArray=JSON.parse(this.$store.state.detalharAnuncios.seguranca_id),console.log("opcionais "+this.confortoArray)}catch(a){console.error("Erro ao listar anúncios:",a)}},goBack(){window.history.back()},listOpcionais(i){return this.veiculo.opcionais_id.filter(n=>n.categoria_opcional_id==i)}},async created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.Api_CategOpcionais=await w();try{const i=parseInt(this.$route.query.id),a=await z(i);this.veiculo=a[0],console.log("veiculos"),console.log(this.veiculo.id)}catch(i){console.error("Erro na requisição:",i)}},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},O={class:"content"},F={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},q={class:"row"},I={class:"col-8 col-lg-10"},$={class:"row"},L={class:"col-2 pesquisar-filter p-0"},E=o("i",{class:"fas fa-ellipsis-v fa-lg"},null,-1),B=o("i",{class:"fas fa-ellipsis-v fa-lg"},null,-1),M=o("i",{class:"fas fa-ellipsis-v fa-lg"},null,-1),V=[E,B,M],J=o("div",{class:"col-10 col-lg-6 p-0 invisible"},[o("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[o("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),o("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=N('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),P={class:"p-4 pb-0"},R=o("div",{style:{transform:"rotate(-90deg)"}},[o("i",{class:"fas fa-arrow-up"})],-1),G=[R],K={class:"position-relative"},U={class:"p-2 pt-3 table-responsive"},W={class:"px-3 pt-2"},Y={class:"rounded-3 p-3 mb-",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)"}},j={class:"mb-2 row"},Q={class:"col-12 col-md-6 col-lg-6 mb-1 p-0"},X={class:"ms-2"},Z=o("i",{class:"fas fa-camera ms-3"},null,-1),oo=o("span",{class:"link_des_foto_anuncio pb-1 ms-3 d-none"},"Estatísticas",-1),so=o("div",{class:"col-12 col-md-3 col-lg- mb-1 d-none"},[o("input",{type:"checkbox",id:"vendido",class:"me-2"}),o("label",{for:"vendido"},"Marcar como vendido")],-1),to={class:"col-12 col-md-4 col-lg-4 mb-1"},eo={key:0,class:"m-0 bg-warning text-center rounded-3",style:{opacity:"1","font-size":"15px"}},ao={key:1,class:"m-0 text-center rounded-3",style:{opacity:"1","font-size":"15px","background-color":"rgb(0, 214, 221)"}},io={key:2,class:"m-0 bg-danger text-center rounded-3",style:{opacity:"1","font-size":"15px",color:"#fff"}},co={key:3,class:"m-0 bg-dark text-center rounded-3",style:{opacity:"1","font-size":"15px"}},lo={key:4,class:"m-0 bg-dark text-center rounded-3",style:{opacity:"1","font-size":"15px"}},no={key:5,class:"m-0 bg-dark text-center rounded-3",style:{opacity:"1","font-size":"15px"}},ro={class:""},po={class:"row"},_o=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Localizaçao "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),uo={class:"col-12 col-md-4 col-lg-4 mb-3"},ho=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Estado",-1),mo={class:"col-12 col-md-4 col-lg-4 mb-3",hidden:""},vo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Regiao",-1),go={class:"col-12 col-md-4 col-lg-4 mb-3"},fo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Cidade",-1),bo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),yo={class:"col-12 col-md-4 col-lg-4 mb-3"},Ao=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Situaçao do veiculo",-1),xo={key:0},ko={key:1},wo={class:"col-12 col-md-4 col-lg-4 mb-3"},zo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Tipo do veiculo",-1),To={class:"col-12 col-md-4 col-lg-4 mb-3"},So=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Categoria",-1),No={class:"col-12 col-md-4 col-lg-4 mb-3"},Co=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Marca",-1),Do={class:"col-12 col-md-4 col-lg-4 mb-3"},Oo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Modelo",-1),Fo={class:"col-12 col-md-4 col-lg-4 mb-3"},qo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Ano de Fabricaçao",-1),Io={class:"col-12 col-md-4 col-lg-4 mb-3"},$o=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Ano do Modelo",-1),Lo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Preço "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Eo={class:"col-12 col-md-4 col-lg-4 mb-3"},Bo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Preço ",-1),Mo={class:"col-12 col-md-4 col-lg-4 mb-3"},Vo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Mostrar Preço ",-1),Jo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Caracteristicas do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Ho={class:"col-12 col-md-4 col-lg-4 mb-3"},Po=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Cor",-1),Ro={class:"col-12 col-md-4 col-lg-4 mb-3"},Go=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}}," Numero de Portas ",-1),Ko={class:"col-12 col-md-4 col-lg-4 mb-3"},Uo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}}," Transmissao ",-1),Wo={class:"col-12 col-md-4 col-lg-4 mb-3"},Yo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Kilometragem",-1),jo={class:"col-12 col-md-4 col-lg-4 mb-3"},Qo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Combustivel",-1),Xo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Itens Opcionais "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Zo={class:"row ps-2"},os={class:"col-12 col-md-6 col-lg-6 p-0"},ss={class:"mb-1 invisible"},ts={class:"mb-1"},es=o("img",{src:T,width:"22",style:{"margin-top":"-3px"}},null,-1),as={class:"col-12 mt-3"},is=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Descriçao",-1);function cs(i,a,n,p,s,r){return c(),l("main",O,[o("div",F,[o("div",q,[o("div",I,[o("div",$,[o("div",L,[o("div",{class:"pt-2 btn-show-Anuncios",onClick:a[0]||(a[0]=(...d)=>r.show_menu_lateral&&r.show_menu_lateral(...d))},V)]),J])]),H])]),o("div",P,[o("button",{class:"btn bg-dark",onClick:a[1]||(a[1]=d=>r.goBack()),style:{cursor:"pointer",opacity:"0.7"}},G)]),o("div",K,[o("div",U,[o("div",W,[o("div",Y,[o("div",j,[o("div",Q,[o("span",X,t(s.veiculo.marca)+" - "+t(s.veiculo.modelo)+" - "+t(s.veiculo.ano_modelo),1),o("span",{onClick:a[2]||(a[2]=d=>r.recarregarDados()),type:"button","data-bs-toggle":"modal","data-bs-target":"#CarregarFotos"},[Z,e(" Fotos ")]),oo]),so,o("div",to,[s.veiculo.status_publicacao===1?(c(),l("p",eo," Aguardando ")):s.veiculo.status_publicacao===2?(c(),l("p",ao," Anuncio Ativo ")):s.veiculo.status_publicacao===3?(c(),l("p",io," Anuncio foi Reprovado ")):s.veiculo.status_publicacao===4?(c(),l("p",co," Anuncio Finalizado ")):s.veiculo.status_publicacao===4?(c(),l("p",lo," Veiculo vendido ")):s.veiculo.status_publicacao===4?(c(),l("p",no," Anuncio Bloqueado ")):S("",!0)])]),o("div",null,[o("div",ro,[o("div",po,[_o,o("div",uo,[ho,e(" "+t(s.veiculo.estado)+" - "+t(s.veiculo.uf),1)]),o("div",mo,[vo,e(" "+t(s.veiculo.regiao),1)]),o("div",go,[fo,e(" "+t(s.veiculo.cidade),1)]),bo,o("div",yo,[Ao,s.veiculo.situacao_veiculo=="1"?(c(),l("span",xo," Novo ")):(c(),l("span",ko," Usado "))]),o("div",wo,[zo,e(" "+t(s.veiculo.tipo_veiculo),1)]),o("div",To,[So,e(" "+t(s.veiculo.categoria_id),1)]),o("div",No,[Co,e(" "+t(s.veiculo.marca),1)]),o("div",Do,[Oo,e(" "+t(s.veiculo.modelo),1)]),o("div",Fo,[qo,e(" "+t(s.veiculo.ano_fabricacao),1)]),o("div",Io,[$o,e(" "+t(s.veiculo.ano_modelo),1)]),Lo,o("div",Eo,[Bo,e(" "+t(s.veiculo.valor_preco),1)]),o("div",Mo,[Vo,e(" "+t(s.veiculo.mostrar_preco),1)]),Jo,o("div",Ho,[Po,e(" "+t(s.veiculo.cor),1)]),o("div",Ro,[Go,e(" "+t(s.veiculo.portas),1)]),o("div",Ko,[Uo,e(" "+t(s.veiculo.transmissao),1)]),o("div",Wo,[Yo,e(" "+t(s.veiculo.km),1)]),o("div",jo,[Qo,e(" "+t(s.veiculo.combustivel),1)]),Xo,o("div",Zo,[(c(!0),l(m,null,v(s.Api_CategOpcionais,d=>(c(),l("div",os,[o("p",ss,[o("b",null,t(d.nome),1)]),(c(!0),l(m,null,v(r.listOpcionais(d.id),h=>(c(),l("div",null,[o("p",ts,[es,e(" "+t(h.nome),1)])]))),256))]))),256))]),o("div",as,[is,e(" "+t(s.veiculo.descricao),1)])])])])])])])])])}const ls=g(D,[["render",cs]]),ns={components:{TheNavTop:y,TheAdminNavLateral2:A,TheDetalhesAnunciosAdmin:ls,TheCarregarFoto:C},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},rs={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function ds(i,a,n,p,s,r){const d=_("TheNavTop"),h=_("TheAdminNavLateral2"),f=_("TheDetalhesAnunciosAdmin"),b=_("TheCarregarFoto");return c(),l("div",null,[u(d),o("div",rs,[u(h,{onShow_menu_lateral:r.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),u(f,{onShow_menu_lateral:r.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"]),o("div",null,[u(b,{ref:"theCarregarFoto",onRefrescandoFotos:i.refrescandoFotosNow},null,8,["onRefrescandoFotos"])])])}const fs=g(ns,[["render",ds]]);export{fs as default};
