import{T as V}from"./TheNavTop-bd263bdb.js";import{T as E}from"./TheAdminNavLateral2-326ce605.js";import{E as g,f as N,k as q,F as D,e as M,G as L,_ as U,m as O,l as z,a as I,b as R,o as B,p as P,q as H,d as j,r as J,h as K,g as G,c as W}from"./TheForm_Login-6423092a.js";import{_ as k,o as i,c as a,a as o,f as r,v as y,F as _,i as h,e as x,g as m,t as c,d as A,l as p,m as $,n as Q,r as f,b}from"./index-21b85d4d.js";import{T as X}from"./TheCriarAnuncio-9b3ed408.js";import{T as Y}from"./TheCarregarFoto-62f21639.js";import"./logo-5b4cc875.js";const Z={name:"TheAnuncios",data(){return{anuncios:[],detalharAnuncios:[],descricao:"",fotos:"",mostrarFotos:!1,mostrarDescricao:!0,confortoArray:[],segurancaArray:[],contador:0,verifyContador:!0,selectedFile:null,fileFoto:null,selectedFile:null,carregar:!0,vazio:!1,array_filtros:[],filtro:"",listar_anuncios:"",filters_anunciante:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},async recarregarDados(l){this.$store.state.foto1="",this.$store.state.foto2="",this.$store.state.foto3="",this.$store.state.foto4="",this.$store.state.foto5="",this.$store.state.foto6="",this.$store.state.foto7="",this.$store.state.foto8="",this.$store.state.foto9="",this.$store.state.foto10="",this.$store.state.anuncioID=l,console.log("Recarregar fotos nos anuncios...#");try{this.$store.state.anuncios=await g(),console.log("Id "+this.$store.state.anuncioID),this.$store.state.anuncios!=null&&(this.$store.state.detalharAnuncios=this.$store.state.anuncios.find(t=>t.id==this.$store.state.anuncioID)),this.$store.state.detalharAnuncios&&this.$emit("hiddenLoading"),this.$store.state.foto1=this.$store.state.detalharAnuncios.foto1,this.$store.state.foto2=this.$store.state.detalharAnuncios.foto2,this.$store.state.foto3=this.$store.state.detalharAnuncios.foto3,this.$store.state.foto4=this.$store.state.detalharAnuncios.foto4,this.$store.state.foto5=this.$store.state.detalharAnuncios.foto5,this.$store.state.foto6=this.$store.state.detalharAnuncios.foto6,this.$store.state.foto7=this.$store.state.detalharAnuncios.foto7,this.$store.state.foto8=this.$store.state.detalharAnuncios.foto8,this.$store.state.foto9=this.$store.state.detalharAnuncios.foto9,this.$store.state.foto10=this.$store.state.detalharAnuncios.foto10,console.log("Novo contador "+this.contador)}catch(t){console.error("Erro ao listar anúncios:",t)}},async applyFiltro(l,t){if(t!="0"){const u={};this.array_filtros.forEach(n=>{u[n.chave]=n.valor}),u[l]=t,this.array_filtros=Object.keys(u).map(n=>({chave:n,valor:u[n]}));const v={};this.array_filtros.forEach(n=>{v[n.chave]=n.valor}),Object.keys(v).map(n=>`${n}=${v[n]}`).join("&");const e=`api/anuncios/listar_anuncios?${l}=${t}`;this.$store.state.anuncios=await N(e),this.$store.state.anuncios.length==0?this.vazio=!0:this.vazio=!1}else this.limparFiltro()},async limparFiltro(){this.array_filtros=[],this.$store.state.anuncios=this.listar_anuncios,this.vazio=!1,this.filtro=""},showFotos(){this.mostrarFotos=!0,this.mostrarDescricao=!1},showDetalhes(l){console.log("Marca selecionada:",this.marcaSelecionada);const t={id:l};this.$router.push({path:"/admin-detalhes-anuncios",query:t})},handdleCarregarFotos(){this.$emit("handdleCarregarFotos")},modalApagar(l){this.id=l,console.log(l)},async apagar(){console.log("Eliminando "+this.id);try{const l=await q(this.id);console.log("temp Ja eliminando"+l),setTimeout(async function(){this.$store.state.anuncios=await g()}.bind(this),2e3),l.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(l){console.error("Erro na requisição:",l),this.showErrorMessage=!0}},async editar(){const l={uf:this.uf,estado:this.novoEstado};try{const t=await D(l,this.id);console.log("Ja esta"+t),t.data?this.$store.state.estado=await M():this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},async editarAnuncioEmit(l){this.$emit("editarAnuncio",l)}},async created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.recarregarDados(),this.filters_anunciante=await L()},async mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"});try{this.listar_anuncios=await g(),this.$store.state.anuncios=this.listar_anuncios,console.log("Id "+this.$store.state.anuncioID),this.$store.state.anuncios!=null&&(this.$store.state.detalharAnuncios=this.$store.state.anuncios.find(l=>l.id==this.$store.state.anuncioID))}catch(l){console.error("Erro ao listar anúncios:",l)}this.$store.state.fechaModal=!1,this.$store.state.anuncios&&(this.carregar=!1)},computed:{anunciosFiltrados(){const l=this.filtro.toLowerCase();return this.$store.state.anuncios.filter(t=>{const u=String(t.anunciante_id).toLowerCase(),v=String(t.situacao_veiculo).toLowerCase(),e=String(t.tipo_veiculo).toLowerCase(),n=String(t.nome_marca).toLowerCase(),s=String(t.nome_modelo).toLowerCase();return u.includes(l)||v.includes(l)||e.includes(l)||n.includes(l)||s.includes(l)})}}},oo={class:"content"},so={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},to={class:"row"},eo={class:"col-8 col-lg-10"},io={class:"row"},ao={class:"col-2 pesquisar-filter p-0"},lo=o("i",{class:"fas fa-filter fa-lg"},null,-1),no=[lo],ro={class:"col-10 col-lg-12 p-0"},co={class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},uo=o("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}},null,-1),_o=x('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes" hidden><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark p-2 text-cente" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><span class="ps-2">Filtrar Anucios</span><p class="mt-2"> Todos </p><p> Pendente </p><p> Em andamento </p><p> Rejeitado </p><p> Terminado </p></div></div></div></div><div></div></div>',1),ho={class:"px-2"},po=o("div",null,[o("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[o("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[o("b",null,"Admin/Anuncios")])])],-1),mo={class:"p-2"},vo=o("span",{class:"me-2"},"| Filtrar:",-1),fo={key:0},bo={key:0},go={key:1},yo={key:1},Ao={key:0},wo={key:1},$o={key:2},ko={key:0,style:{height:"20vh"},class:"d-flex justify-content-center align-items-center"},xo=o("div",{class:"caixa",style:{background:"none"}},[o("img",{src:U,alt:"",style:{width:"100%"}})],-1),Co=[xo],Fo={key:1,class:"position-relative",style:{height:"68vh"}},To={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},So={class:"table"},Vo=o("th",null,null,-1),Eo={scope:"col"},No=o("option",{value:"",selected:"",disabled:""}," Anunciante ",-1),qo=o("option",{value:"0"}," Anunciante ",-1),Do=["value"],Mo=o("th",{colspan:"5"},null,-1),Lo={scope:"col"},Uo=o("option",{value:"",selected:"",disabled:""}," Status ",-1),Oo=o("option",{value:"0"}," Status ",-1),zo=o("option",{value:"1"}," Aguardando ",-1),Io=o("option",{value:"2"}," Ativo ",-1),Ro=o("option",{vale:"3"}," Recusado ",-1),Bo=o("option",{value:"4"}," Finalizado ",-1),Po=o("option",{value:"5"}," Vendido ",-1),Ho=o("option",{value:"6"}," Bloqueado ",-1),jo=[Uo,Oo,zo,Io,Ro,Bo,Po,Ho],Jo=o("th",{scope:"col",class:"text-center"},"...",-1),Ko=o("tr",{style:{"background-color":"crimson",color:"#fff"}},[o("th",{scope:"col"},"#"),o("th",{scope:"col"},"Anuciante"),o("th",{scope:"col"},[o("div",{style:{width:"130px"}}," Tipo de veiculo ")]),o("th",{scope:"col"},[o("div",{style:{width:"170px"}}," Situaçao do veiculo ")]),o("th",{scope:"col"},"Marca"),o("th",{scope:"col"},"Modelo"),o("th",{scope:"col"},"Status"),o("th",{scope:"col",class:"text-center"},"Açoes")],-1),Go={key:0},Wo=o("td",{class:"text-center",colspan:"8"},"Nenhum registo encontrado",-1),Qo=[Wo],Xo={scope:"row"},Yo={key:0},Zo={key:1},os={name:""},ss={class:"py-2"},ts={key:0,style:{width:"150px"},class:"text-center bg-warning p-2 rounded-3"},es={key:1,style:{width:"150px","background-color":"rgb(0, 221, 0)"},class:"text-center p-2 rounded-3"},is={key:2,style:{width:"150px",color:"#fff"},class:"text-center bg-danger p-2 rounded-3"},as={key:3,style:{width:"150px"},class:"text-center bg-dark p-2 rounded-3"},ls={key:4,style:{width:"150px","background-color":"rgb(0, 214, 221)"},class:"text-center p-2 rounded-3"},ns={key:5,style:{width:"150px","background-color":"rgb(168, 168, 168)",color:"rgb(104, 101, 101)"},class:"text-center p-2 rounded-3"},rs={class:"text-center"},cs={style:{width:"150px"}},ds=["onClick"],us=o("i",{class:"fas fa-eye"},null,-1),_s=[us],hs=["onClick"],ps=o("i",{class:"fas fa-camera ms-3"},null,-1),ms=[ps],vs=["onClick"],fs=o("i",{class:"fas fa-pencil-alt"},null,-1),bs=[fs],gs=["onClick"],ys=o("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCarro"},[o("i",{class:"fas fa-plus"})],-1),As={class:"modal fade",id:"EliminarAnuncio",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ws={class:"modal-dialog"},$s={class:"modal-content"},ks={class:"bg-dar",id:"criarAnuncio"},xs=x('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Remover Anuncio</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),Cs={class:"modal-footer"},Fs={style:{display:"flex","flex-wrap":"wrap"}},Ts=o("div",{class:"col-6"},[o("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ss={class:"col-6"};function Vs(l,t,u,v,e,n){return i(),a("main",oo,[o("div",so,[o("div",to,[o("div",eo,[o("div",io,[o("div",ao,[o("div",{class:"pt-2",onClick:t[0]||(t[0]=(...s)=>n.show_menu_lateral&&n.show_menu_lateral(...s))},no)]),o("div",ro,[o("div",co,[r(o("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},"onUpdate:modelValue":t[1]||(t[1]=s=>e.filtro=s),placeholder:"Buscar"},null,512),[[y,e.filtro]]),uo])])])]),_o])]),o("div",ho,[po,o("div",mo,[vo,(i(!0),a(_,null,h(e.array_filtros,s=>(i(),a("span",null,[s.chave=="situacao_veiculo"?(i(),a("span",fo,[s.valor=="1"?(i(),a("span",bo," Novo ")):m("",!0),s.valor=="2"?(i(),a("span",go," Usado ")):m("",!0)])):s.chave=="status_publicacao"?(i(),a("span",yo,[s.valor=="1"?(i(),a("span",Ao," Aguardando ")):m("",!0),s.valor=="2"?(i(),a("span",wo," Ativo ")):m("",!0)])):(i(),a("span",$o,c(s.valor),1)),A(" / ")]))),256))]),e.carregar?(i(),a("div",ko,Co)):(i(),a("div",Fo,[o("div",To,[o("table",So,[o("thead",null,[o("tr",null,[Vo,o("th",Eo,[o("div",null,[o("select",{class:"form-select",onChange:t[2]||(t[2]=s=>n.applyFiltro("nome_empresa",s.target.value))},[No,qo,(i(!0),a(_,null,h(e.filters_anunciante,s=>(i(),a("option",{value:s.nome_empresa},c(s.nome_empresa),9,Do))),256))],32)])]),Mo,o("th",Lo,[o("div",null,[o("select",{class:"form-select",onChange:t[3]||(t[3]=s=>n.applyFiltro("status_publicacao",s.target.value))},jo,32)])]),Jo]),Ko]),o("tbody",null,[e.vazio?(i(),a("tr",Go,Qo)):(i(!0),a(_,{key:1},h(n.anunciosFiltrados,s=>(i(),a("tr",{key:s.id},[o("th",Xo,c(s.id),1),o("td",null,c(s.nome_empresa),1),o("td",null,c(s.tipo_veiculo),1),o("td",null,[s.situacao_veiculo==1?(i(),a("span",Yo," Novo ")):m("",!0),s.situacao_veiculo==2?(i(),a("span",Zo," Usado ")):m("",!0)]),o("td",null,c(s.nome_marca),1),o("td",null,c(s.nome_modelo),1),o("td",null,[o("div",os,[o("div",ss,[s.status_publicacao==1?(i(),a("div",ts," Aguardando ")):s.status_publicacao==2?(i(),a("div",es," Activo ")):s.status_publicacao==3?(i(),a("div",is," Recusado ")):s.status_publicacao==4?(i(),a("div",as," Finalizado ")):s.status_publicacao==5?(i(),a("div",ls," Vendido ")):s.status_publicacao==6?(i(),a("div",ns," Bloqueado ")):m("",!0)])])]),o("td",rs,[o("div",cs,[o("span",{onClick:d=>n.showDetalhes(s.id),style:{cursor:"pointer"}},_s,8,ds),o("span",{onClick:d=>n.recarregarDados(s.id),type:"button","data-bs-toggle":"modal","data-bs-target":"#CarregarFotos"},ms,8,hs),o("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarAnuncios",onClick:d=>n.editarAnuncioEmit(s.id)},bs,8,vs),o("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarAnuncio",onClick:d=>n.modalApagar(s.id)},null,8,gs)])])]))),128))])])]),ys]))]),o("div",As,[o("div",ws,[o("div",$s,[o("div",ks,[xs,o("div",Cs,[o("div",Fs,[Ts,o("div",Ss,[o("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=s=>n.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const Es=k(Z,[["render",Vs]]),Ns={name:"TheCriarAnuncio",data(){return{id_anunciante:"",id:"",tipo_veiculo:"",categoria_id:"",photos:[],Api_categorias:[],Api_transmissao:[],Api_combustivel:[],Api_tecnologia:[],Api_cores:[],Api_Seguranca:[],Api_Conforto:[],Api_cores:[],Api_CategOpcionais:[],Api_Opcionais:[],portas:[2,4,6,8,10],Api_fabricante:["BMW","Suzuki","Toyota"],anos:[],marcas:[],modelos:"",marca_id:null,modelo_id:"",ano_modelo:"",desc:"",previewImage:null,estado:"",cidade:"",fabricante:"",ano_fabricante:"",num_portas:"",cor:"",transmissao:"",combustivel:"",kilometro:"",desc:"",conforto:[],seguranca:[],situacao_veiculo:"",vitrine:"",destaque:"",tecnologia:"",mostrar_preco:"sim",valor_preco:"",Api_CategOpcionais:[],selecionados:[],dropdownState:{},opc:[],status_publicacao:""}},methods:{getVitrine(){return this.vitrine?1:0},getDestaque(){return this.destaque?1:0},async criar(){this.titulo=this.marca_id+" "+this.modelo_id+" - "+this.ano_modelo;var l=JSON.stringify(this.selecionados);const t={titulo:this.titulo,tipo_veiculo:this.tipo_veiculo,tecnologia:this.tecnologia,marca_id:this.marca_id,modelo_id:this.modelo_id,numero_cliques:"2",situacao_veiculo:this.situacao_veiculo,anunciante_id:this.id_anunciante,categoria_id:this.categoria_id,data_inicio:"20-02-2021",data_fim:"20-02-2022",ordenacao:"2",status_publicacao:this.status_publicacao,status_pagamento:"1",tipo:"2",vendido:"1",vitrine:this.vitrine,destaque_busca:this.destaque,cep:"12352",estado_id:"2",cidade_id:"3",empresa:"null",tipo_preco:"1",valor_preco:this.valor_preco,mostrar_preco:this.mostrar_preco,fabricante_id:"2",ano_fabricacao:this.ano_fabricante,ano_modelo:this.ano_modelo,carroceria:"null",estilo:"null",portas:this.num_portas,cilindros:"4",motor:"2",cor:this.cor,transmissao:this.transmissao,combustivel:this.combustivel,placa:"null",km:this.kilometro,sinistrado:"null",opcionais_id:l,descricao:this.desc};try{const u=await O(t,this.$store.state.anuncioID);u?(console.log("Anuncio Criado... "+u.id),this.$store.state.anuncios=await g(),this.id=u.id,this.$emit("refreshAnuncio",this.id),console.log("emitCarregarFoto"),console.log("Limpando..."),this.tipo_veiculo="",this.marca_id="",this.modelo_id="",this.situacao_veiculo="",this.categoria_id="",this.estado="",this.cidade="",this.empresa="",this.valor_preco="",this.fabricante="",this.ano_fabricante="",this.ano_modelo="",this.carroceria="",this.estilo="",this.num_portas="",this.cor="",this.transmissao="",this.combustivel="",this.kilometro="",this.conforto="",this.vitrine=!1,this.destaque=!1):this.showErrorMessage=!0}catch(u){console.error("Erro na requisição:",u)}},showCarregarFotos(){console.log("Show carregar fotos Agora")},formatarNumero(){let l=this.valor_preco.replace(/\D/g,"");l=l.replace(/\B(?=(\d{3})+(?!\d))/g,"."),this.valor_preco=l},toggleDropdown(l){this.$data.dropdownState[l]=!this.$data.dropdownState[l],this.$forceUpdate()},isDropdownOpen(l){return this.$data.dropdownState[l]||!1},filterOpcionais(l){return this.Api_Opcionais.filter(t=>t.categoria_opcional_id===l)},filterMarcas(l){return this.$store.state.marcas.filter(t=>t.tipo_veiculo_id===l)},filterModelos(l){return this.$store.state.modelos.filter(t=>t.id_marca===l)},async showgetDados(){console.log("Mostrar"),console.log(this.$store.state.anuncioID),this.anuncios=this.$store.state.anuncios.find(l=>l.id===this.$store.state.anuncioID),console.log("Anuncios "+this.anuncios.opcionais_id),this.tipo_veiculo=this.anuncios.tipo_veiculo_id,this.tecnologia=this.anuncios.tecnologia_id,this.marca_id=this.anuncios.id_marca,this.modelo_id=this.anuncios.id_modelo,this.situacao_veiculo=this.anuncios.situacao_veiculo,this.categoria_id=this.anuncios.id_categoria,this.status_publicacao=this.anuncios.status_publicacao,this.anuncios.destaque_busca==1?this.destaque=!0:this.destaque=!1,this.anuncios.vitrine==1?this.vitrine=!0:this.vitrine=!1,this.valor_preco=this.anuncios.valor_preco,this.mostrar_preco=this.anuncios.mostrar_preco,this.ano_fabricante=this.anuncios.ano_fabricacao,this.ano_modelo=this.anuncios.ano_modelo,this.num_portas=this.anuncios.portas,this.cor=this.anuncios.cor_id,this.transmissao=this.anuncios.transmissao_id,this.combustivel=this.anuncios.combustivel_id,this.kilometro=this.anuncios.km,this.selecionados=JSON.parse(this.anuncios.opcionais_id),this.desc=this.anuncios.descricao,this.id_anunciante=this.anuncios.id_anunciante}},async created(){this.$store.state.modelos=await z(),this.$store.state.marcas=await I(),this.Api_categorias=await R(),this.Api_combustivel=await B(),this.Api_transmissao=await P(),this.Api_tecnologia=await H(),this.$store.state.tipo_veiculo=await j(),this.Api_cores=await J(),this.Api_Opcionais=await K(),this.Api_CategOpcionais=await G(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais;for(let l=2025;1990<l;l--)this.anos.push(l)},mounted(){}},qs={class:"modal fade",id:"EditarAnuncios",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ds={class:"modal-dialog"},Ms={class:"modal-content"},Ls={class:"bg-dar"},Us=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[o("span",{class:"fas fa-bullhorn py-2 pt-0"}),A(),o("b",null,"Editar Anúncio")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Os={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},zs={class:"row"},Is={class:"py-3"},Rs=o("label",{for:"marca",class:"form-label"},"Status de Publicação",-1),Bs={key:0,value:"1"},Ps={key:1,value:"1",selected:""},Hs={key:2,value:"2"},js={key:3,value:"2",selected:""},Js={key:4,value:"3"},Ks={key:5,value:"3",selected:""},Gs={key:6,value:"4"},Ws={key:7,value:"4",selected:""},Qs={key:8,value:"5"},Xs={key:9,value:"5",selected:""},Ys={key:10,value:"6"},Zs={key:11,value:"6",selected:""},ot=o("div",{class:"p-2 pt-0 row mb-2 mt-md-1 mt-lg-1",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),st={class:"mb-3"},tt=o("label",{for:"marca",class:"form-label"},"Situaçao do Veiculo",-1),et=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),it=o("option",{value:"1"},"Novo",-1),at=o("option",{value:"2"},"Usado",-1),lt=[et,it,at],nt={class:"mb-3"},rt=o("label",{for:"marca",class:"form-label"},"Tipo de Veiculo",-1),ct=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),dt=["value"],ut={class:"mb-3"},_t=o("label",{for:"preco",class:"form-label"},"Tecnologia",-1),ht=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),pt=["value"],mt={class:"mb-3"},vt=o("label",{for:"nome",class:"form-label"},[A("Categoria "),o("span",{style:{opacity:".6"}},"(Opcional)")],-1),ft=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),bt=["value"],gt={class:"mb-3"},yt=o("label",{for:"marca",class:"form-label"},"Marca",-1),At=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),wt=["value"],$t={class:"mb-3"},kt={class:"mb-3"},xt=o("label",{for:"",class:"form-label"},"Modelo",-1),Ct=o("option",{value:""},"Selecionar",-1),Ft=["value"],Tt={class:"mb-3"},St=o("label",{for:"nome",class:"form-label"},"Ano do Modelo",-1),Vt=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Et=["value"],Nt=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Preço "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),qt={class:"mb-3"},Dt=o("label",{for:"preco",class:"form-label"},"Preço (R$)",-1),Mt={class:"mb-3"},Lt=o("label",{for:"nome",class:"form-label"},"Mostrar Preço",-1),Ut=o("option",{value:"sim",selected:""}," sim ",-1),Ot=o("option",{value:"nao"}," nao ",-1),zt=[Ut,Ot],It=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Caracteristicas do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Rt={class:"mb-3"},Bt=o("label",{for:"nome",class:"form-label"},"Cor",-1),Pt=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Ht=["value"],jt={class:"mb-3"},Jt=o("label",{for:"nome",class:"form-label"},"Numero de Portas",-1),Kt=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Gt=["value"],Wt={class:"mb-3"},Qt=o("label",{for:"preco",class:"form-label"},"Transmissao",-1),Xt=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Yt=["value"],Zt={class:"mb-3"},oe=o("label",{for:"preco",class:"form-label"},"Combustivel",-1),se=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),te=["value"],ee={class:"mb-3"},ie=o("label",{for:"preco",class:"form-label"},"Kilometragem",-1),ae=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px","background-color":"crimson !important"}}," Privilegios "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),le={class:"mb-2 mt-2 check"},ne=o("label",{for:"vitrine",class:"ms-2 form-label"},"Adicionar na vitrine",-1),re={class:"mb-2 check"},ce=o("label",{for:"destaque",class:"ms-2 form-label"},"Marcar como destaque",-1),de=o("div",{class:"p-2 pt-0 row mt-md-4 mt-lg-4 mb-2",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Opcionais & Itens de Serie "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),ue={class:"mb-3"},_e=["onClick"],he={class:"ms-2"},pe={key:0,class:"mb-2 pt-2"},me=["id","value"],ve=["for"],fe={class:"mb-3"},be=o("label",{for:"desc",class:"form-label"},[A("Descriçao "),o("span",{style:{opacity:"0.6"}},"(Opcional)")],-1),ge={class:"modal-footer"},ye={style:{display:"flex","flex-wrap":"wrap"}},Ae=o("div",{class:"col-6"},[o("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),we={class:"col-6"};function $e(l,t,u,v,e,n){return i(),a("div",qs,[o("div",Ds,[o("div",Ms,[o("div",Ls,[Us,o("div",Os,[o("form",null,[o("div",zs,[o("div",Is,[Rs,r(o("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.status_publicacao=s),class:"form-select"},[e.status_publicacao!=="1"?(i(),a("option",Bs," Aguardando ")):(i(),a("option",Ps," Aguardando ")),e.status_publicacao!=="2"?(i(),a("option",Hs," Activo ")):(i(),a("option",js," Activo ")),e.status_publicacao!=="3"?(i(),a("option",Js," Recusado ")):(i(),a("option",Ks," Recusado ")),e.status_publicacao!=="4"?(i(),a("option",Gs," Finalizado ")):(i(),a("option",Ws," Finalizado ")),e.status_publicacao!=="5"?(i(),a("option",Qs," Vendido ")):(i(),a("option",Xs," Vendido ")),e.status_publicacao!=="6"?(i(),a("option",Ys," Bloqueado ")):(i(),a("option",Zs," Bloqueado "))],512),[[p,e.status_publicacao]])]),ot,o("div",st,[o("div",null,[tt,r(o("select",{"onUpdate:modelValue":t[1]||(t[1]=s=>e.situacao_veiculo=s),class:"form-select"},lt,512),[[p,e.situacao_veiculo]])])]),o("div",nt,[o("div",null,[rt,r(o("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>e.tipo_veiculo=s),class:"form-select"},[ct,(i(!0),a(_,null,h(l.$store.state.tipo_veiculo,s=>(i(),a("option",{value:s.id,key:s.id},c(s.tipo_veiculo),9,dt))),128))],512),[[p,e.tipo_veiculo]])])]),o("div",ut,[_t,r(o("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>e.tecnologia=s),class:"form-select"},[ht,(i(!0),a(_,null,h(e.Api_tecnologia,s=>(i(),a("option",{value:s.id,key:s.id},c(s.tecnologia),9,pt))),128))],512),[[p,e.tecnologia]])]),o("div",mt,[vt,r(o("select",{"onUpdate:modelValue":t[4]||(t[4]=s=>e.categoria_id=s),class:"form-select"},[ft,(i(!0),a(_,null,h(e.Api_categorias,s=>(i(),a("option",{value:s.id,key:s.id},c(s.nome),9,bt))),128))],512),[[p,e.categoria_id]])]),o("div",gt,[o("div",null,[yt,r(o("select",{"onUpdate:modelValue":t[5]||(t[5]=s=>e.marca_id=s),class:"form-select"},[At,(i(!0),a(_,null,h(n.filterMarcas(e.tipo_veiculo),s=>(i(),a("option",{value:s.id,key:s.id},c(s.nome_marca),9,wt))),128))],512),[[p,e.marca_id]])])]),o("div",$t,[o("div",null,[o("div",kt,[xt,r(o("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[6]||(t[6]=s=>e.modelo_id=s)},[Ct,(i(!0),a(_,null,h(n.filterModelos(e.marca_id),s=>(i(),a("option",{value:s.id,key:s.id},c(s.nome_modelo),9,Ft))),128))],512),[[p,e.modelo_id]])])])]),o("div",Tt,[St,r(o("select",{class:"form-select","onUpdate:modelValue":t[7]||(t[7]=s=>e.ano_modelo=s)},[Vt,(i(!0),a(_,null,h(e.anos,(s,d)=>(i(),a("option",{value:s,key:d},c(s),9,Et))),128))],512),[[p,e.ano_modelo]])]),Nt,o("div",qt,[Dt,r(o("input",{type:"text",class:"text form-control",id:"preco","onUpdate:modelValue":t[8]||(t[8]=s=>e.valor_preco=s),onKeyup:t[9]||(t[9]=(...s)=>n.formatarNumero&&n.formatarNumero(...s)),placeholder:""},null,544),[[y,e.valor_preco]])]),o("div",Mt,[Lt,r(o("select",{"onUpdate:modelValue":t[10]||(t[10]=s=>e.mostrar_preco=s),class:"form-select"},zt,512),[[p,e.mostrar_preco]])]),It,o("div",Rt,[Bt,r(o("select",{"onUpdate:modelValue":t[11]||(t[11]=s=>e.cor=s),class:"form-select"},[Pt,(i(!0),a(_,null,h(e.Api_cores,s=>(i(),a("option",{value:s.id,key:s.id},c(s.cor),9,Ht))),128))],512),[[p,e.cor]])]),o("div",jt,[Jt,r(o("select",{"onUpdate:modelValue":t[12]||(t[12]=s=>e.num_portas=s),class:"form-select"},[Kt,(i(!0),a(_,null,h(e.portas,(s,d)=>(i(),a("option",{value:s,key:d},c(s),9,Gt))),128))],512),[[p,e.num_portas]])]),o("div",Wt,[Qt,r(o("select",{"onUpdate:modelValue":t[13]||(t[13]=s=>e.transmissao=s),class:"form-select"},[Xt,(i(!0),a(_,null,h(e.Api_transmissao,s=>(i(),a("option",{value:s.id,key:s.id},c(s.transmissao),9,Yt))),128))],512),[[p,e.transmissao]])]),o("div",Zt,[oe,r(o("select",{"onUpdate:modelValue":t[14]||(t[14]=s=>e.combustivel=s),class:"form-select"},[se,(i(!0),a(_,null,h(e.Api_combustivel,s=>(i(),a("option",{value:s.id,key:s.id},c(s.combustivel),9,te))),128))],512),[[p,e.combustivel]])]),o("div",ee,[ie,r(o("input",{type:"number",class:"text form-control",id:"preco","onUpdate:modelValue":t[15]||(t[15]=s=>e.kilometro=s),min:"0",max:"100"},null,512),[[y,e.kilometro]])]),ae,o("div",le,[r(o("input",{type:"checkbox","onUpdate:modelValue":t[16]||(t[16]=s=>e.vitrine=s),id:"vitrine",onClick:t[17]||(t[17]=(...s)=>n.getVitrine&&n.getVitrine(...s))},null,512),[[$,e.vitrine]]),ne]),o("div",re,[r(o("input",{type:"checkbox","onUpdate:modelValue":t[18]||(t[18]=s=>e.destaque=s),id:"destaque",onClick:t[19]||(t[19]=(...s)=>n.getDestaque&&n.getDestaque(...s))},null,512),[[$,e.destaque]]),ce]),de,o("div",ue,[(i(!0),a(_,null,h(e.Api_CategOpcionais,s=>(i(),a("div",{key:s.id},[o("p",{onClick:d=>n.toggleDropdown(s.id),style:{cursor:"pointer",opacity:"1",margin:"0"}},[o("span",{class:Q({"arrow-down":n.isDropdownOpen(s.id)})},"►",2),o("span",he,c(s.nome),1)],8,_e),n.isDropdownOpen(s.id)?(i(),a("div",pe,[(i(!0),a(_,null,h(n.filterOpcionais(s.id),d=>(i(),a("div",{key:d.id,class:"ps-4"},[r(o("input",{type:"checkbox",id:"checkbox_"+d.id,value:d.id,"onUpdate:modelValue":t[20]||(t[20]=w=>e.selecionados=w),class:"me-2"},null,8,me),[[$,e.selecionados]]),o("label",{for:"checkbox_"+d.id},c(d.nome),9,ve)]))),128))])):m("",!0)]))),128))]),o("div",fe,[be,r(o("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":t[21]||(t[21]=s=>e.desc=s)},null,512),[[y,e.desc]])])])])]),o("div",ge,[o("div",ye,[Ae,o("div",we,[o("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[22]||(t[22]=s=>n.criar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Actualizar")])])])])])])])}const ke=k(Ns,[["render",$e]]);const xe={components:{TheNavTop:V,TheAdminNavLateral2:E,TheAnuciosAdmin:Es,TheCriarAnuncio:X,TheCarregarFoto:Y,TheEditarAnuncioAdmin:ke,loader:W},data(){return{TheAdminNavLateral2:"",exibeModalCarregarFoto:!1,loading:!1}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheAdminNavLateral2.classList.toggle("showHidden_menu-lateral")},async refreshAnuncioVar(l){console.log("Recebido no Pai"+l),this.$store.state.anuncioID=l,console.log("Actualizado"+l),this.$refs.TheAnuciosAdmin.recarregarDados(this.$store.state.anuncioID),this.$refs.theCarregarFoto.exibeCarregarFoto(),console.log("Exibindo loader"),this.$store.state.anuncioID=l},showCarregarFotos(){console.log("Show carregar fotos"),this.$refs.theCriarAnuncio.showCarregarFotos()},showCarregarFotos(){console.log("Refresh Page"),this.$refs.theCarregarFoto.refreshFotos()},editarAnuncioNow(l){console.log("ola "+l),this.$store.state.anuncioID=l,this.$refs.TheEditarAnuncioAdmin.showgetDados()},exibeCarregarFoto(){this.exibeModalCarregarFoto=!0,console.log("Exibindo Carregar Fotos"),this.$refs.theCarregarFoto.showCarregarFotos()},refrescandoFotosNow(){this.$refs.TheAnuciosAdmin.recarregarDados()},hiddenLoadingNow(){console.log("Emitiu Loading"),this.loading=!1}},mounted(){this.TheAdminNavLateral2=document.getElementById("TheAdminNavLateral2")}},Ce={id:"TheAdminNavLateral2",class:"menu-lateral showHidden_menu-lateral"},Fe={key:0,class:"loader"};function Te(l,t,u,v,e,n){const s=f("TheNavTop"),d=f("TheAdminNavLateral2"),w=f("TheAnuciosAdmin"),C=f("TheCriarAnuncio"),F=f("TheCarregarFoto"),T=f("TheEditarAnuncioAdmin"),S=f("loader");return i(),a("div",null,[b(s),o("div",Ce,[b(d,{onShow_menu_lateral:n.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),b(w,{onShow_menu_lateral:n.handle_showHidden_menu_lateral,onHanddleCarregarFotos:n.showCarregarFotos,onEditarAnuncio:n.editarAnuncioNow,ref:"theAnuncios",onHiddenLoading:n.hiddenLoadingNow,onCaregouFotos:n.refrescandoFotosNow},null,8,["onShow_menu_lateral","onHanddleCarregarFotos","onEditarAnuncio","onHiddenLoading","onCaregouFotos"]),b(C,{onRefreshAnuncio:n.refreshAnuncioVar,ref:"theCriarAnuncio"},null,8,["onRefreshAnuncio"]),o("div",null,[b(F,{ref:"theCarregarFoto",onRefrescandoFotos:n.refrescandoFotosNow},null,8,["onRefrescandoFotos"])]),b(T,{ref:"TheEditarAnuncioAdmin"},null,512),e.loading?(i(),a("div",Fe,[b(S)])):m("",!0)])}const Le=k(xe,[["render",Te]]);export{Le as default};
