import{T as b}from"./TheNavTop-54b907ea.js";import{T as y}from"./TheNavLateral-77859036.js";import{o as x,w as A,h as w,j as k}from"./loader-feb87b72.js";import{_ as z}from"./bom-cb4bb6e8.js";import{_ as g,o as c,c as l,a as o,t,d as e,f as T,F as m,i as v,h as C,r as _,b as h}from"./index-1cb50b96.js";import{T as D}from"./TheCarregarFoto-75a0ebf6.js";import"./TheForm_Login-011dac7b.js";import"./logo-5b4cc875.js";const N={name:"TheDetalhesAnuncios",data(){return{veiculo:{tipo_veiculo:"",marca_id:"",modelo_id:"",numero_cliques:"",situacao_veiculo:"",anunciante_id:"",categoria_id:"",data_inicio:"",data_fim:"",ordenacao:"",status_publicacao:"",status_pagamento:"",tipo:"",vendido:"",vitrine:"",destaque_busca:"",cep:"",estado_id:"",cidade_id:"",empresa:"",tipo_preco:"",valor_preco:"",fabricacao:"",ano_fabricacao:"",ano_modelo:"",carroceria:"",estilo:"",portas:"",cilindros:"",motor:"",cor:"",transmissao:"",combustivel:"",placa:"",km:"",sinistrado:"",conforto:"[]",seguranca:"[]",som:"",descricao:""},detalharAnuncios:"",confortoArray:[],segurancaArray:[],mostrarFotos:!1,mostrarDescricao:!0,id:"",tipo_veiculo:"",empresa:"",estado:"",cidade:"",sel_categoria:"",Api_modelos:[],Api_marcas:[],Api_categorias:"",cores:["Vermelho","Amarelo","Azul","Branco","Preto"],portas:[2,4,6,8,10],Api_fabricante:["BMW","Suzuki","Toyota"],anos:[],marcas:[],modelos:"",marcaSelecionada:null,modeloSelecionado:null,ano_modelo:"",desc:"",previewImage:null,validate_moto:!0,valor_preco:"",fabricacao:"",ano_fabricante:"",num_portas:"",cor:"",transmissao:"",combustivel:"",kilometro:"",desc:"",conforto:[],seguranca:[],situacao_veiculo:"",menuItems:[{label:"Opcionais de Conforto",isOpen:!1,inputs:["Ar condicionado","Ar quente"]},{label:"Opcionais de Segurança",isOpen:!1,inputs:["Cinto de Segurança","Segurança 2","Segurança 3"]}],selectedInputs:{"Opcionais de Conforto":[],"Opcionais de Segurança":[]},conforto:[],seguranca:[],categoryLabel:[],categoryLabel2:[],nome_marca:"",status_anuncio:"",Api_CategOpcionais:""}},methods:{show_menu_lateral(){console.log("ola mundos"),this.$emit("show_menu_lateral")},async editar(){console.log("Marca"),console.log(this.marcaSelecionada);const a=new Date;a.getDate(),a.getMonth()+1,a.getFullYear(),console.log("Passando Opcionais"),console.log(this.conforto),console.log(this.seguranca),JSON.stringify(this.conforto),JSON.stringify(this.seguranca);const i={tipo_veiculo:"Carro Actualizado",marca_id:"1",modelo_id:"1",numero_cliques:"2",situacao_veiculo:"1",anunciante_id:"1",categoria_id:"1",data_inicio:"20-02-2021",data_fim:"20-02-2022",ordenacao:"2",status_publicacao:this.status_anuncio,status_pagamento:"1",tipo:"2",vendido:"1",vitrine:"1",destaque_busca:"1",cep:"12352",estado_id:"1",cidade_id:"1",empresa:"Gloart",tipo_preco:"1",valor_preco:"200",fabricacao:"2000",ano_fabricacao:"2020",ano_modelo:"2020",carroceria:"sim",estilo:"Abc",portas:"4",cilindros:"4",motor:"2",cor:"Azul",transmissao:"1",combustivel:"1",placa:"22LB1",km:"1",sinistrado:"sim",conforto:["Ar Condicionado","Direção Hidráulica","Vidros Elétricos"],seguranca:["Airbag","ABS"],som:"sim",descricao:"Carro à Disel"};try{let n=this.$route.query.id;console.log("Editando ID: "+n);const p=await x(i,n);p?(console.log("Anuncio Editado... "+p.id),this.id=p.id,this.$emit("emitAnuncioEditado"),console.log("Limpando...")):this.showErrorMessage=!0}catch(n){console.error("Erro na requisição:",n),this.showErrorMessage=!0}},showgetDados(){let a=this.$route.query.id;this.detalharAnuncios=this.$store.state.anuncios.find(i=>i.id==parseInt(a)),console.log("Dados"),console.log(this.detalharAnuncios.nome_marca),console.log(this.detalharAnuncios.fabricante),this.empresa=this.detalharAnuncios.empresa,this.estado=this.detalharAnuncios.estado_id,this.cidade=this.detalharAnuncios.cidade_id,this.situacao_veiculo=this.detalharAnuncios.situacao_veiculo,this.tipo_veiculo=this.detalharAnuncios.tipo_veiculo,this.marcaSelecionada=this.detalharAnuncios.id_marca,this.nome_marca=this.detalharAnuncios.nome_marca,this.modeloSelecionado=this.detalharAnuncios.nome_modelo,this.ano_modelo=this.detalharAnuncios.ano_modelo,this.sel_categoria=this.detalharAnuncios.nome_categoria,this.fabricacao=this.detalharAnuncios.fabricacao,this.ano_fabricante=this.detalharAnuncios.ano_fabricacao,this.carroceria=this.detalharAnuncios.carroceria,this.estilo=this.detalharAnuncios.estilo,this.valor_preco=this.detalharAnuncios.valor_preco,this.cor=this.detalharAnuncios.cor,this.num_portas=this.detalharAnuncios.portas,this.transmissao=this.detalharAnuncios.transmissao,this.combustivel=this.detalharAnuncios.combustivel,this.kilometro=this.detalharAnuncios.km,this.status_anuncio=this.detalharAnuncios.status_publicacao,this.conforto=JSON.parse(this.detalharAnuncios.conforto),this.seguranca=JSON.parse(this.detalharAnuncios.seguranca)},showFotos(){this.mostrarFotos=!0,this.mostrarDescricao=!1},async recarregarDados(){const a=parseInt(this.$route.query.id);this.$store.state.anuncioID=a,console.log("Recarregar fotos nos anuncios...#");try{this.$store.state.anuncios=await A(),console.log("Id "+this.$store.state.anuncioID),this.$store.state.anuncios!=null&&(this.$store.state.detalharAnuncios=this.$store.state.anuncios.find(i=>i.id==this.$store.state.anuncioID)),this.$store.state.detalharAnuncios&&this.$emit("hiddenLoading"),this.$store.state.foto1=this.$store.state.detalharAnuncios.foto1,this.$store.state.foto2=this.$store.state.detalharAnuncios.foto2,this.$store.state.foto3=this.$store.state.detalharAnuncios.foto3,this.$store.state.foto4=this.$store.state.detalharAnuncios.foto4,this.$store.state.foto5=this.$store.state.detalharAnuncios.foto5,this.$store.state.foto6=this.$store.state.detalharAnuncios.foto6,this.$store.state.foto7=this.$store.state.detalharAnuncios.foto7,this.$store.state.foto8=this.$store.state.detalharAnuncios.foto8,this.$store.state.foto9=this.$store.state.detalharAnuncios.foto9,this.$store.state.foto10=this.$store.state.detalharAnuncios.foto10,console.log("Novo contador "+this.contador),console.log("Detalhar "+JSON.stringify(this.$store.state.detalharAnuncios.seguranca_id)),this.confortoArray=JSON.parse(this.$store.state.detalharAnuncios.conforto_id),this.segurancaArray=JSON.parse(this.$store.state.detalharAnuncios.seguranca_id),console.log("opcionais "+this.confortoArray)}catch(i){console.error("Erro ao listar anúncios:",i)}},goBack(){window.history.back()},listOpcionais(a){return this.veiculo.opcionais_id.filter(n=>n.categoria_opcional_id==a)}},async created(){this.Api_CategOpcionais=await w();try{const a=parseInt(this.$route.query.id),i=await k(a);this.veiculo=i[0],console.log("veiculos"),console.log(this.veiculo.id)}catch(a){console.error("Erro na requisição:",a)}}},S={class:"content m-0"},q={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},O={class:"row"},F={class:"col-8 col-lg-10"},I={class:"row"},E={class:"col-2 pesquisar-filter p-0"},L=o("i",{class:"fas fa-ellipsis-v fa-lg"},null,-1),$=o("i",{class:"fas fa-ellipsis-v fa-lg"},null,-1),V=o("i",{class:"fas fa-ellipsis-v fa-lg"},null,-1),B=[L,$,V],M=o("div",{class:"col-10 col-lg-6 p-0 invisible"},[o("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[o("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),o("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),P=C('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),J={class:"p-4 pb-0"},R=o("div",{style:{transform:"rotate(-90deg)"}},[o("i",{class:"fas fa-arrow-up"})],-1),H=[R],j={class:"position-relative"},G={class:"p-2 pt-3 table-responsive"},K={class:"px-3"},U=o("div",{style:{"font-size":"13px","font-weight":"bold"}}," Estatísticas ",-1),W=o("td",null,[o("span",{style:{"font-size":"13px"},class:"pe-2"}," Views no anuncio ")],-1),Y={style:{"font-size":"13px"}},Q=o("td",null,[o("span",{style:{"font-size":"13px"},class:"pe-2"}," Pedidos de contato ")],-1),X={style:{"font-size":"13px"}},Z=o("td",null,[o("span",{style:{"font-size":"13px"},class:"pe-2"}," Pedidos de mensagem ")],-1),oo={style:{"font-size":"13px"}},so={class:"px-3 pt-2"},to={class:"rounded-3 p-3 mb-",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)"}},eo={class:"mb-2 row"},io={class:"col-12 col-md-6 col-lg-6 mb-1 p-0"},ao={class:"infos"},co={class:""},lo=o("i",{class:"fas fa-camera"},null,-1),no=o("div",{class:"col-12 col-md-3 col-lg- mb-1 d-none"},[o("input",{type:"checkbox",id:"vendido",class:"me-2"}),o("label",{for:"vendido"},"Marcar como vendido")],-1),ro={class:"col-12 col-md-4 col-lg-4 mb-1"},po={key:0,class:"m-0 bg-warning text-center rounded-3",style:{opacity:"1","font-size":"15px"}},uo={key:1,class:"m-0 text-center rounded-3",style:{opacity:"1","font-size":"15px","background-color":"rgb(0, 214, 221)"}},_o={key:2,class:"m-0 bg-danger text-center rounded-3",style:{opacity:"1","font-size":"15px",color:"#fff"}},ho={key:3,class:"m-0 bg-dark text-center rounded-3",style:{opacity:"1","font-size":"15px"}},mo={key:4,class:"m-0 bg-dark text-center rounded-3",style:{opacity:"1","font-size":"15px"}},vo={key:5,class:"m-0 bg-dark text-center rounded-3",style:{opacity:"1","font-size":"15px"}},go={class:""},fo={class:"row"},bo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Localizaçao "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),yo={class:"col-12 col-md-4 col-lg-4 mb-3"},xo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Estado",-1),Ao={class:"col-12 col-md-4 col-lg-4 mb-3",hidden:""},wo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Regiao",-1),ko={class:"col-12 col-md-4 col-lg-4 mb-3"},zo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Cidade",-1),To=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Co={class:"col-12 col-md-4 col-lg-4 mb-3"},Do=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Situaçao do veiculo",-1),No={key:0},So={key:1},qo={class:"col-12 col-md-4 col-lg-4 mb-3"},Oo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Tipo do veiculo",-1),Fo={class:"col-12 col-md-4 col-lg-4 mb-3"},Io=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Categoria",-1),Eo={class:"col-12 col-md-4 col-lg-4 mb-3"},Lo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Marca",-1),$o={class:"col-12 col-md-4 col-lg-4 mb-3"},Vo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Modelo",-1),Bo={class:"col-12 col-md-4 col-lg-4 mb-3"},Mo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Ano de Fabricaçao",-1),Po={class:"col-12 col-md-4 col-lg-4 mb-3"},Jo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Ano do Modelo",-1),Ro=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Preço "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Ho={class:"col-12 col-md-4 col-lg-4 mb-3"},jo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Preço ",-1),Go={class:"col-12 col-md-4 col-lg-4 mb-3"},Ko=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Mostrar Preço ",-1),Uo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Caracteristicas do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Wo={class:"col-12 col-md-4 col-lg-4 mb-3"},Yo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Cor",-1),Qo={class:"col-12 col-md-4 col-lg-4 mb-3"},Xo=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}}," Numero de Portas ",-1),Zo={class:"col-12 col-md-4 col-lg-4 mb-3"},os=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}}," Transmissao ",-1),ss={class:"col-12 col-md-4 col-lg-4 mb-3"},ts=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Kilometragem",-1),es={class:"col-12 col-md-4 col-lg-4 mb-3"},is=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Combustivel",-1),as=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Itens Opcionais "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),cs={class:"row ps-2"},ls={class:"col-12 col-md-6 col-lg-6 p-0"},ns={class:"mb-1 invisible"},rs={class:"mb-1"},ds=o("img",{src:z,width:"22",style:{"margin-top":"-3px"}},null,-1),ps={class:"col-12 mt-3"},us=o("p",{class:"mb-1",style:{opacity:"0.6","font-size":"15px"}},"Descriçao",-1);function _s(a,i,n,p,s,d){return c(),l("main",S,[o("div",q,[o("div",O,[o("div",F,[o("div",I,[o("div",E,[o("div",{class:"pt-2 btn-show-Anuncios",onClick:i[0]||(i[0]=(...r)=>d.show_menu_lateral&&d.show_menu_lateral(...r))},B)]),M])]),P])]),o("div",J,[o("button",{class:"btn bg-dark",onClick:i[1]||(i[1]=r=>d.goBack()),style:{cursor:"pointer",opacity:"0.7"}},H)]),o("div",j,[o("div",G,[o("div",K,[U,o("div",null,[o("table",null,[o("tr",null,[W,o("td",null,[o("span",Y,t(s.veiculo.numero_cliques),1)])]),o("tr",null,[Q,o("td",null,[o("span",X,t(s.veiculo.numero_cliques_contato),1)])]),o("tr",null,[Z,o("td",null,[o("span",oo,t(s.veiculo.numero_cliques_mensagem),1)])])])])]),o("div",so,[o("div",to,[o("div",eo,[o("div",io,[o("ul",ao,[o("li",null,[o("span",co,t(s.veiculo.marca)+" - "+t(s.veiculo.modelo)+" - "+t(s.veiculo.ano_modelo),1)]),o("li",null,[o("span",{onClick:i[2]||(i[2]=r=>d.recarregarDados()),type:"button","data-bs-toggle":"modal","data-bs-target":"#CarregarFotos"},[lo,e(" Fotos ")])])])]),no,o("div",ro,[s.veiculo.status_publicacao===1?(c(),l("p",po," Aguardando ")):s.veiculo.status_publicacao===2?(c(),l("p",uo," Anuncio Ativo ")):s.veiculo.status_publicacao===3?(c(),l("p",_o," Anuncio foi Reprovado ")):s.veiculo.status_publicacao===4?(c(),l("p",ho," Anuncio Finalizado ")):s.veiculo.status_publicacao===4?(c(),l("p",mo," Veiculo vendido ")):s.veiculo.status_publicacao===4?(c(),l("p",vo," Anuncio Bloqueado ")):T("",!0)])]),o("div",null,[o("div",go,[o("div",fo,[bo,o("div",yo,[xo,e(" "+t(s.veiculo.estado)+" - "+t(s.veiculo.uf),1)]),o("div",Ao,[wo,e(" "+t(s.veiculo.regiao),1)]),o("div",ko,[zo,e(" "+t(s.veiculo.cidade),1)]),To,o("div",Co,[Do,s.veiculo.situacao_veiculo=="1"?(c(),l("span",No," Novo ")):(c(),l("span",So," Usado "))]),o("div",qo,[Oo,e(" "+t(s.veiculo.tipo_veiculo),1)]),o("div",Fo,[Io,e(" "+t(s.veiculo.categoria_id),1)]),o("div",Eo,[Lo,e(" "+t(s.veiculo.marca),1)]),o("div",$o,[Vo,e(" "+t(s.veiculo.modelo),1)]),o("div",Bo,[Mo,e(" "+t(s.veiculo.ano_fabricacao),1)]),o("div",Po,[Jo,e(" "+t(s.veiculo.ano_modelo),1)]),Ro,o("div",Ho,[jo,e(" "+t(s.veiculo.valor_preco),1)]),o("div",Go,[Ko,e(" "+t(s.veiculo.mostrar_preco),1)]),Uo,o("div",Wo,[Yo,e(" "+t(s.veiculo.cor),1)]),o("div",Qo,[Xo,e(" "+t(s.veiculo.portas),1)]),o("div",Zo,[os,e(" "+t(s.veiculo.transmissao),1)]),o("div",ss,[ts,e(" "+t(s.veiculo.km),1)]),o("div",es,[is,e(" "+t(s.veiculo.combustivel),1)]),as,o("div",cs,[(c(!0),l(m,null,v(s.Api_CategOpcionais,r=>(c(),l("div",ls,[o("p",ns,[o("b",null,t(r.nome),1)]),(c(!0),l(m,null,v(d.listOpcionais(r.id),u=>(c(),l("div",null,[o("p",rs,[ds,e(" "+t(u.nome),1)])]))),256))]))),256))]),o("div",ps,[us,e(" "+t(s.veiculo.descricao),1)])])])])])])])])])}const hs=g(N,[["render",_s]]),ms={components:{TheNavTop:b,TheNavLateral:y,TheDetalhesAnuncios:hs,TheCarregarFoto:D},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}};function vs(a,i,n,p,s,d){const r=_("TheNavTop"),u=_("TheDetalhesAnuncios"),f=_("TheCarregarFoto");return c(),l("div",null,[h(r),h(u,{onShow_menu_lateral:d.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"]),o("div",null,[h(f,{ref:"theCarregarFoto",onRefrescandoFotos:a.refrescandoFotosNow},null,8,["onRefrescandoFotos"])])])}const zs=g(ms,[["render",vs]]);export{zs as default};
