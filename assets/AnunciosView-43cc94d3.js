import{T as V}from"./TheNavTop-131545ad.js";import{_ as w,B as S,p as M,D as g,E as D,o as a,c as l,a as s,d as n,v as y,F as h,j as _,h as $,t as d,e as b,G as N,l as q,i as E,k as U,H as O,I as z,J as I,s as L,K as B,y as j,x as H,M as u,N as x,f as k,q as R,r as v,b as f}from"./index-c0670658.js";import{_ as P}from"./TheForm_Login-a915ebcd.js";import{T as J}from"./TheCriarAnuncio-77184d3b.js";import{T as K}from"./TheCarregarFoto-60d41b87.js";import{l as G}from"./loader-fff71581.js";const W={name:"TheAnuncios",data(){return{anuncios:[],detalharAnuncios:[],descricao:"",fotos:"",mostrarFotos:!1,mostrarDescricao:!0,confortoArray:[],segurancaArray:[],contador:0,verifyContador:!0,selectedFile:null,fileFoto:null,selectedFile:null,carregar:!0,vazio:!1,array_filtros:[],filtro:"",semAnuncio:!0}},methods:{openModal(){var i=document.getElementById("IDaddCarro");this.$store.state.modalCriarAnuncio=new bootstrap.Modal(i),this.$store.state.modalCriarAnuncio.show()},show_menu_lateral(){this.$emit("show_menu_lateral")},async recarregarDados(i){this.$store.state.foto1="",this.$store.state.foto2="",this.$store.state.foto3="",this.$store.state.foto4="",this.$store.state.foto5="",this.$store.state.foto6="",this.$store.state.foto7="",this.$store.state.foto8="",this.$store.state.foto9="",this.$store.state.foto10="",this.$store.state.anuncioID=i;try{const t=await S(this.$store.state.anuncioID);this.$store.state.detalharAnuncios=t[0],this.$store.state.detalharAnuncios&&this.$emit("hiddenLoading"),this.$store.state.foto1=this.$store.state.detalharAnuncios.foto1,this.$store.state.foto2=this.$store.state.detalharAnuncios.foto2,this.$store.state.foto3=this.$store.state.detalharAnuncios.foto3,this.$store.state.foto4=this.$store.state.detalharAnuncios.foto4,this.$store.state.foto5=this.$store.state.detalharAnuncios.foto5,this.$store.state.foto6=this.$store.state.detalharAnuncios.foto6,this.$store.state.foto7=this.$store.state.detalharAnuncios.foto7,this.$store.state.foto8=this.$store.state.detalharAnuncios.foto8,this.$store.state.foto9=this.$store.state.detalharAnuncios.foto9,this.$store.state.foto10=this.$store.state.detalharAnuncios.foto10}catch(t){console.error("Erro ao listar anúncios:",t)}},async applyFiltro(i,t){const p={};this.array_filtros.forEach(r=>{p[r.chave]=r.valor}),p[i]=t,this.array_filtros=Object.keys(p).map(r=>({chave:r,valor:p[r]}));const m={};this.array_filtros.forEach(r=>{m[r.chave]=r.valor}),Object.keys(m).map(r=>`${r}=${m[r]}`).join("&");const e=`api/anuncios/listar_anuncios?${i}=${t}`;this.$store.state.anuncios=await M(e),this.$store.state.anuncios.length==0?this.vazio=!0:this.vazio=!1},async limparFiltro(){this.array_filtros=[],this.$store.state.anuncios=await g(),this.vazio=!1,this.filtro=""},showFotos(){this.mostrarFotos=!0,this.mostrarDescricao=!1},showDetalhes(i){const t={id:i};this.$router.push({path:"/detalhes-anuncio",query:t})},handdleCarregarFotos(){this.$emit("handdleCarregarFotos")},modalApagar(i){this.id=i},async apagar(){try{const i=await D(this.id);setTimeout(async function(){this.$store.state.anuncios=await g()}.bind(this),2e3),i.data||(this.showErrorMessage=!0)}catch(i){console.error("Erro na requisição:",i),this.showErrorMessage=!0}},async editarAnuncioEmit(i){this.$emit("editarAnuncio",i)}},created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.recarregarDados()},async mounted(){try{this.$store.state.anuncios=await g(),this.$store.state.anuncios!=null&&(this.$store.state.detalharAnuncios=this.$store.state.anuncios.find(i=>i.id==this.$store.state.anuncioID))}catch(i){console.error("Erro ao listar anúncios:",i)}this.$store.state.fechaModal=!1,console.log(this.$store.state.anuncios),this.semAnuncio=!1,this.$store.state.anuncios&&(this.carregar=!1,this.$store.state.anuncios.length==0&&(this.semAnuncio=!0))}},Q={class:"content m-0"},X=s("br",null,null,-1),Y={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"},hidden:""},Z={class:"row"},ss={class:"col-8 col-lg-10"},os={class:"row"},ts={class:"col-2 pesquisar-filter p-0"},es=s("i",{class:"fas fa-filter fa-lg"},null,-1),is=[es],as={class:"col-10 col-lg-12 p-0"},ls={class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},rs=s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}},null,-1),ns=$('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes" hidden><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark p-2 text-cente" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><span class="ps-2">Filtrar Anúncios</span><p class="mt-2">Todos</p><p>Pendente</p><p>Em andamento</p><p>Rejeitado</p><p>Terminado</p></div></div></div></div><div></div></div>',1),cs={class:"px-2 px-lg-3"},ds=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Gerenciar/Meus anuncios")])])],-1),us={key:0,style:{height:"20vh"},class:"d-flex justify-content-center align-items-center"},hs=s("div",{class:"caixa",style:{background:"none"}},[s("img",{src:P,alt:"",style:{width:"100%"}})],-1),_s=[hs],ps={key:1,class:"position-relative",style:{height:"68vh"}},ms={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},vs={class:"table"},fs=s("thead",null,[s("tr",{style:{"background-color":"crimson",color:"#fff"}},[s("th",{scope:"col"},"#"),s("th",{scope:"col"},[s("div",{style:{width:"130px"}},"Tipo de veiculo")]),s("th",{scope:"col"},[s("div",{style:{width:"170px"}},"Situaçao do veiculo")]),s("th",{scope:"col"},"Marca"),s("th",{scope:"col"},"Modelo"),s("th",{scope:"col"},"Status"),s("th",{scope:"col",class:"text-center"},"Açõe s")])],-1),bs={key:0},gs=s("td",{class:"text-center",colspan:"8"},"Sem Anuncios",-1),ys=[gs],As={key:0},xs={key:1},ws={name:""},ks={class:"py-2"},$s={key:0,style:{width:"150px"},class:"text-center bg-warning p-2 rounded-3"},Cs={key:1,style:{width:"150px","background-color":"rgb(0, 221, 0)"},class:"text-center p-2 rounded-3"},Fs={key:2,style:{width:"150px",color:"#fff"},class:"text-center bg-danger p-2 rounded-3"},Ts={key:3,style:{width:"150px"},class:"text-center bg-dark p-2 rounded-3"},Vs={key:4,style:{width:"150px","background-color":"rgb(0, 214, 221)"},class:"text-center p-2 rounded-3"},Ss={key:5,style:{width:"150px","background-color":"rgb(168, 168, 168)",color:"rgb(104, 101, 101)"},class:"text-center p-2 rounded-3"},Ms={class:"text-center"},Ds={style:{width:"150px"}},Ns=["onClick"],qs=s("i",{class:"fas fa-eye"},null,-1),Es=[qs],Us=["onClick"],Os=s("i",{class:"fas fa-camera ms-3"},null,-1),zs=[Os],Is=["onClick"],Ls=s("i",{class:"fas fa-pencil-alt"},null,-1),Bs=[Ls],js=["onClick"],Hs=s("i",{class:"fas fa-plus"},null,-1),Rs=[Hs],Ps={class:"modal fade",id:"EliminarAnuncio",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Js={class:"modal-dialog"},Ks={class:"modal-content"},Gs={class:"bg-dar",id:"criarAnuncio"},Ws=$('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Remover Anuncio</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5>Confirme antes de <span style="color:red;">Eliminar</span>!</h5></div></div>',2),Qs={class:"modal-footer"},Xs={style:{display:"flex","flex-wrap":"wrap"}},Ys=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),Zs={class:"col-6"};function so(i,t,p,m,e,r){return a(),l("main",Q,[X,s("div",Y,[s("div",Z,[s("div",ss,[s("div",os,[s("div",ts,[s("div",{class:"pt-2",onClick:t[0]||(t[0]=(...o)=>r.show_menu_lateral&&r.show_menu_lateral(...o))},is)]),s("div",as,[s("div",ls,[n(s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},"onUpdate:modelValue":t[1]||(t[1]=o=>e.filtro=o),placeholder:"Buscar"},null,512),[[y,e.filtro]]),rs])])])]),ns])]),s("div",cs,[ds,e.carregar?(a(),l("div",us,_s)):(a(),l("div",ps,[s("div",ms,[s("table",vs,[fs,s("tbody",null,[e.semAnuncio?(a(),l("tr",bs,ys)):(a(!0),l(h,{key:1},_(i.$store.state.anuncios,o=>(a(),l("tr",{key:o.id},[s("th",null,d(o.id),1),s("td",null,d(o.tipo_veiculo),1),s("td",null,[o.situacao_veiculo==1?(a(),l("span",As," Novo ")):b("",!0),o.situacao_veiculo==2?(a(),l("span",xs," Usado ")):b("",!0)]),s("td",null,d(o.nome_marca),1),s("td",null,d(o.nome_modelo),1),s("td",null,[s("div",ws,[s("div",ks,[o.status_publicacao==1?(a(),l("div",$s," Aguardando ")):o.status_publicacao==2?(a(),l("div",Cs," Activo ")):o.status_publicacao==3?(a(),l("div",Fs," Reprovado ")):o.status_publicacao==4?(a(),l("div",Ts," Finalizado ")):o.status_publicacao==5?(a(),l("div",Vs," Vendido ")):o.status_publicacao==6?(a(),l("div",Ss," Bloqueado ")):b("",!0)])])]),s("td",Ms,[s("div",Ds,[s("span",{onClick:c=>r.showDetalhes(o.id),style:{cursor:"pointer"}},Es,8,Ns),s("span",{onClick:c=>r.recarregarDados(o.id),type:"button","data-bs-toggle":"modal","data-bs-target":"#CarregarFotos"},zs,8,Us),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarAnuncios",onClick:c=>r.editarAnuncioEmit(o.id)},Bs,8,Is),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarAnuncio",onClick:c=>r.modalApagar(o.id)},null,8,js)])])]))),128))])])]),s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button",onClick:t[2]||(t[2]=(...o)=>r.openModal&&r.openModal(...o))},Rs)]))]),s("div",Ps,[s("div",Js,[s("div",Ks,[s("div",Gs,[Ws,s("div",Qs,[s("div",Xs,[Ys,s("div",Zs,[s("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=o=>r.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Confirmar ")])])])])])])])])}const oo=w(W,[["render",so]]),to={name:"TheCriarAnuncio",data(){return{id:"",tipo_veiculo:"",categoria_id:"",photos:[],Api_categorias:[],Api_transmissao:[],Api_combustivel:[],Api_tecnologia:[],Api_cores:[],Api_Seguranca:[],Api_Conforto:[],Api_cores:[],Api_CategOpcionais:[],Api_Opcionais:[],portas:[2,4,6,8,10],Api_fabricante:["BMW","Suzuki","Toyota"],anos:[],marcas:[],modelos:"",marca_id:null,modelo_id:"",ano_modelo:"",desc:"",previewImage:null,estado:"",cidade:"",fabricante:"",ano_fabricante:"",num_portas:"",cor:"",transmissao:"",combustivel:"",kilometro:"",desc:"",conforto:[],seguranca:[],situacao_veiculo:"",vitrine:"",destaque:"",tecnologia:"",mostrar_preco:"sim",valor_preco:"",Api_CategOpcionais:[],selecionados:[],dropdownState:{},opc:[],status_publicacao:""}},methods:{getVitrine(){return this.vitrine?1:0},getDestaque(){return this.destaque?1:0},async criar(){this.titulo=this.marca_id+" "+this.modelo_id+" - "+this.ano_modelo;var i=JSON.stringify(this.selecionados);const t={titulo:this.titulo,tipo_veiculo:this.tipo_veiculo,tecnologia:this.tecnologia,marca_id:this.marca_id,modelo_id:this.modelo_id,numero_cliques:"2",situacao_veiculo:this.situacao_veiculo,anunciante_id:this.$store.state.anunciante_id,categoria_id:this.categoria_id,data_inicio:"20-02-2021",data_fim:"20-02-2022",ordenacao:"2",status_publicacao:this.status_publicacao,status_pagamento:"1",tipo:"2",vendido:"1",vitrine:this.vitrine,destaque_busca:this.destaque,cep:"12352",estado_id:"2",cidade_id:"3",empresa:"null",tipo_preco:"1",valor_preco:this.valor_preco,mostrar_preco:this.mostrar_preco,fabricante_id:"2",ano_fabricacao:this.ano_fabricante,ano_modelo:this.ano_modelo,carroceria:"null",estilo:"null",portas:this.num_portas,cilindros:"4",motor:"2",cor:this.cor,transmissao:this.transmissao,combustivel:this.combustivel,placa:"null",km:this.kilometro,sinistrado:"null",opcionais_id:i,descricao:this.desc};try{const p=await N(t,this.$store.state.anuncioID);p?(this.$store.state.anuncios=await g(),this.id=p.id,this.$emit("refreshAnuncio",this.id),this.tipo_veiculo="",this.marca_id="",this.modelo_id="",this.situacao_veiculo="",this.categoria_id="",this.estado="",this.cidade="",this.empresa="",this.valor_preco="",this.fabricante="",this.ano_fabricante="",this.ano_modelo="",this.carroceria="",this.estilo="",this.num_portas="",this.cor="",this.transmissao="",this.combustivel="",this.kilometro="",this.conforto="",this.vitrine=!1,this.destaque=!1):this.showErrorMessage=!0}catch(p){console.error("Erro na requisição:",p)}},showCarregarFotos(){},formatarNumero(){let i=this.valor_preco.replace(/[^\d.]/g,"");const t=i.split(".");i=t.shift()+(t.length>0?"."+t.join(""):""),i=i.replace(/\./g,""),i=i.replace(/\B(?=(\d{3})+(?!\d))/g,"."),this.valor_preco=i},toggleDropdown(i){this.$data.dropdownState[i]=!this.$data.dropdownState[i],this.$forceUpdate()},isDropdownOpen(i){return this.$data.dropdownState[i]||!1},filterOpcionais(i){return this.Api_Opcionais.filter(t=>t.categoria_opcional_id==i)},filterMarcas(i){return this.$store.state.marcas.filter(t=>t.tipo_veiculo_id==i)},filterModelos(i){return this.$store.state.modelos.filter(t=>t.id_marca==i)},async showgetDados(){this.anuncios=this.$store.state.anuncios.find(i=>i.id===this.$store.state.anuncioID),this.tipo_veiculo=this.anuncios.tipo_veiculo_id,this.tecnologia=this.anuncios.tecnologia_id,this.marca_id=this.anuncios.id_marca,this.modelo_id=this.anuncios.id_modelo,this.situacao_veiculo=this.anuncios.situacao_veiculo,this.categoria_id=this.anuncios.id_categoria,this.status_publicacao=this.anuncios.status_publicacao,this.anuncios.destaque_busca==1?this.destaque=!0:this.destaque=!1,this.anuncios.vitrine==1?this.vitrine=!0:this.vitrine=!1,this.valor_preco=this.anuncios.valor_preco,this.mostrar_preco=this.anuncios.mostrar_preco,this.ano_fabricante=this.anuncios.ano_fabricacao,this.ano_modelo=this.anuncios.ano_modelo,this.num_portas=this.anuncios.portas,this.cor=this.anuncios.cor_id,this.transmissao=this.anuncios.transmissao_id,this.combustivel=this.anuncios.combustivel_id,this.kilometro=this.anuncios.km,this.selecionados=JSON.parse(this.anuncios.opcionais_id),this.desc=this.anuncios.descricao}},async created(){this.$store.state.modelos=await q(),this.$store.state.marcas=await E(),this.Api_categorias=await U(),this.Api_combustivel=await O(),this.Api_transmissao=await z(),this.Api_tecnologia=await I(),this.$store.state.tipo_veiculo=await L(),this.Api_cores=await B(),this.Api_Opcionais=await j(),this.Api_CategOpcionais=await H(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais;for(let i=2025;1990<i;i--)this.anos.push(i)},mounted(){}},eo={class:"modal fade",id:"EditarAnuncios",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},io={class:"modal-dialog"},ao={class:"modal-content"},lo={class:"bg-dar"},ro=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),k(),s("b",null,"Editar Anúncio")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),no={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},co={class:"row"},uo={key:0,class:"py-3"},ho=s("label",{for:"marca",class:"form-label"},"Marcar como vendido",-1),_o={key:0,value:"2"},po={key:1,value:"2",selected:""},mo={key:2,value:"5"},vo={key:3,value:"5",selected:""},fo=s("div",{class:"p-2 pt-0 row mb-2 mt-md-1 mt-lg-1",style:{opacity:"0.8"}},[s("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes do Veiculo "),s("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[s("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),bo={class:"mb-3"},go=s("label",{for:"marca",class:"form-label"},"Situaçao do Veiculo",-1),yo=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Ao=s("option",{value:"1"},"Novo",-1),xo=s("option",{value:"2"},"Usado",-1),wo=[yo,Ao,xo],ko={class:"mb-3"},$o=s("label",{for:"marca",class:"form-label"},"Tipo de Veiculo",-1),Co=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Fo=["value"],To={class:"mb-3"},Vo=s("label",{for:"preco",class:"form-label"},"Tecnologia",-1),So=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Mo=["value"],Do={class:"mb-3"},No=s("label",{for:"nome",class:"form-label"},[k("Categoria "),s("span",{style:{opacity:".6"}},"(Opcional)")],-1),qo=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Eo=["value"],Uo={class:"mb-3"},Oo=s("label",{for:"marca",class:"form-label"},"Marca",-1),zo=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Io=["value"],Lo={class:"mb-3"},Bo={class:"mb-3"},jo=s("label",{for:"",class:"form-label"},"Modelo",-1),Ho=s("option",{value:""},"Selecionar",-1),Ro=["value"],Po={class:"mb-3"},Jo=s("label",{for:"nome",class:"form-label"},"Ano de Fabricaçao",-1),Ko=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Go=["value"],Wo={class:"mb-3"},Qo=s("label",{for:"nome",class:"form-label"},"Ano do Modelo",-1),Xo=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Yo=["value"],Zo=s("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[s("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Preço "),s("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[s("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),st={class:"mb-3"},ot=s("label",{for:"preco",class:"form-label"},"Preço (R$)",-1),tt={class:"mb-3"},et=s("label",{for:"nome",class:"form-label"},"Mostrar Preço",-1),it=s("option",{value:"sim",selected:""}," Sim ",-1),at=s("option",{value:"nao"}," Não ",-1),lt=[it,at],rt=s("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[s("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Caracteristicas do Veiculo "),s("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[s("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),nt={class:"mb-3"},ct=s("label",{for:"nome",class:"form-label"},"Cor",-1),dt=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ut=["value"],ht={class:"mb-3"},_t=s("label",{for:"nome",class:"form-label"},"Numero de Portas",-1),pt=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),mt=["value"],vt={class:"mb-3"},ft=s("label",{for:"preco",class:"form-label"},"Transmissao",-1),bt=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),gt=["value"],yt={class:"mb-3"},At=s("label",{for:"preco",class:"form-label"},"Combustivel",-1),xt=s("option",{value:"",selected:"",disabled:""},"Selecionar",-1),wt=["value"],kt={class:"mb-3"},$t=s("label",{for:"preco",class:"form-label"},"Kilometragem",-1),Ct=s("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[s("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px","background-color":"crimson !important"}}," Privilegios "),s("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[s("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Ft={class:"mb-2 mt-2 check"},Tt=s("label",{for:"vitrine",class:"ms-2 form-label"},"Adicionar na vitrine",-1),Vt={class:"mb-2 check"},St=s("label",{for:"destaque",class:"ms-2 form-label"},"Marcar como destaque",-1),Mt=s("div",{class:"p-2 pt-0 row mt-md-4 mt-lg-4 mb-2",style:{opacity:"0.8"}},[s("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Opcionais & Itens de Serie "),s("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[s("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Dt={class:"mb-3"},Nt=["onClick"],qt={class:"ms-2"},Et={key:0,class:"mb-2 pt-2"},Ut=["id","value"],Ot=["for"],zt={class:"mb-3"},It=s("label",{for:"desc",class:"form-label"},[k("Descriçao "),s("span",{style:{opacity:"0.6"}},"(Opcional)")],-1),Lt={class:"modal-footer"},Bt={style:{display:"flex","flex-wrap":"wrap"}},jt=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ht={class:"col-6"};function Rt(i,t,p,m,e,r){return a(),l("div",eo,[s("div",io,[s("div",ao,[s("div",lo,[ro,s("div",no,[s("form",null,[s("div",co,[e.status_publicacao==2||e.status_publicacao==5?(a(),l("div",uo,[ho,n(s("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.status_publicacao=o),class:"form-select"},[e.status_publicacao!=="2"?(a(),l("option",_o," Não ")):(a(),l("option",po," Não ")),e.status_publicacao!=="5"?(a(),l("option",mo," Sim ")):(a(),l("option",vo," Sim "))],512),[[u,e.status_publicacao]])])):b("",!0),fo,s("div",bo,[s("div",null,[go,n(s("select",{"onUpdate:modelValue":t[1]||(t[1]=o=>e.situacao_veiculo=o),class:"form-select"},wo,512),[[u,e.situacao_veiculo]])])]),s("div",ko,[s("div",null,[$o,n(s("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>e.tipo_veiculo=o),class:"form-select"},[Co,(a(!0),l(h,null,_(i.$store.state.tipo_veiculo,o=>(a(),l("option",{value:o.id,key:o.id},d(o.tipo_veiculo),9,Fo))),128))],512),[[u,e.tipo_veiculo]])])]),s("div",To,[Vo,n(s("select",{"onUpdate:modelValue":t[3]||(t[3]=o=>e.tecnologia=o),class:"form-select"},[So,(a(!0),l(h,null,_(e.Api_tecnologia,o=>(a(),l("option",{value:o.id,key:o.id},d(o.tecnologia),9,Mo))),128))],512),[[u,e.tecnologia]])]),s("div",Do,[No,n(s("select",{"onUpdate:modelValue":t[4]||(t[4]=o=>e.categoria_id=o),class:"form-select"},[qo,(a(!0),l(h,null,_(e.Api_categorias,o=>(a(),l("option",{value:o.id,key:o.id},d(o.nome),9,Eo))),128))],512),[[u,e.categoria_id]])]),s("div",Uo,[s("div",null,[Oo,n(s("select",{"onUpdate:modelValue":t[5]||(t[5]=o=>e.marca_id=o),class:"form-select"},[zo,(a(!0),l(h,null,_(r.filterMarcas(e.tipo_veiculo),o=>(a(),l("option",{value:o.id,key:o.id},d(o.nome_marca),9,Io))),128))],512),[[u,e.marca_id]])])]),s("div",Lo,[s("div",null,[s("div",Bo,[jo,n(s("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[6]||(t[6]=o=>e.modelo_id=o)},[Ho,(a(!0),l(h,null,_(r.filterModelos(e.marca_id),o=>(a(),l("option",{value:o.id,key:o.id},d(o.nome_modelo),9,Ro))),128))],512),[[u,e.modelo_id]])])])]),s("div",Po,[Jo,n(s("select",{class:"form-select","onUpdate:modelValue":t[7]||(t[7]=o=>e.ano_fabricante=o)},[Ko,(a(!0),l(h,null,_(e.anos,(o,c)=>(a(),l("option",{value:o,key:c},d(o),9,Go))),128))],512),[[u,e.ano_fabricante]])]),s("div",Wo,[Qo,n(s("select",{class:"form-select","onUpdate:modelValue":t[8]||(t[8]=o=>e.ano_modelo=o)},[Xo,(a(!0),l(h,null,_(e.anos,(o,c)=>(a(),l("option",{value:o,key:c},d(o),9,Yo))),128))],512),[[u,e.ano_modelo]])]),Zo,s("div",st,[ot,n(s("input",{type:"text",class:"text form-control",id:"preco","onUpdate:modelValue":t[9]||(t[9]=o=>e.valor_preco=o),onKeyup:t[10]||(t[10]=(...o)=>r.formatarNumero&&r.formatarNumero(...o)),placeholder:""},null,544),[[y,e.valor_preco]])]),s("div",tt,[et,n(s("select",{"onUpdate:modelValue":t[11]||(t[11]=o=>e.mostrar_preco=o),class:"form-select"},lt,512),[[u,e.mostrar_preco]])]),rt,s("div",nt,[ct,n(s("select",{"onUpdate:modelValue":t[12]||(t[12]=o=>e.cor=o),class:"form-select"},[dt,(a(!0),l(h,null,_(e.Api_cores,o=>(a(),l("option",{value:o.id,key:o.id},d(o.cor),9,ut))),128))],512),[[u,e.cor]])]),s("div",ht,[_t,n(s("select",{"onUpdate:modelValue":t[13]||(t[13]=o=>e.num_portas=o),class:"form-select"},[pt,(a(!0),l(h,null,_(e.portas,(o,c)=>(a(),l("option",{value:o,key:c},d(o),9,mt))),128))],512),[[u,e.num_portas]])]),s("div",vt,[ft,n(s("select",{"onUpdate:modelValue":t[14]||(t[14]=o=>e.transmissao=o),class:"form-select"},[bt,(a(!0),l(h,null,_(e.Api_transmissao,o=>(a(),l("option",{value:o.id,key:o.id},d(o.transmissao),9,gt))),128))],512),[[u,e.transmissao]])]),s("div",yt,[At,n(s("select",{"onUpdate:modelValue":t[15]||(t[15]=o=>e.combustivel=o),class:"form-select"},[xt,(a(!0),l(h,null,_(e.Api_combustivel,o=>(a(),l("option",{value:o.id,key:o.id},d(o.combustivel),9,wt))),128))],512),[[u,e.combustivel]])]),s("div",kt,[$t,n(s("input",{type:"number",class:"text form-control",id:"preco","onUpdate:modelValue":t[16]||(t[16]=o=>e.kilometro=o),min:"0",max:"100"},null,512),[[y,e.kilometro]])]),Ct,s("div",Ft,[n(s("input",{type:"checkbox","onUpdate:modelValue":t[17]||(t[17]=o=>e.vitrine=o),id:"vitrine",onClick:t[18]||(t[18]=(...o)=>r.getVitrine&&r.getVitrine(...o))},null,512),[[x,e.vitrine]]),Tt]),s("div",Vt,[n(s("input",{type:"checkbox","onUpdate:modelValue":t[19]||(t[19]=o=>e.destaque=o),id:"destaque",onClick:t[20]||(t[20]=(...o)=>r.getDestaque&&r.getDestaque(...o))},null,512),[[x,e.destaque]]),St]),Mt,s("div",Dt,[(a(!0),l(h,null,_(e.Api_CategOpcionais,o=>(a(),l("div",{key:o.id},[s("p",{onClick:c=>r.toggleDropdown(o.id),style:{cursor:"pointer",opacity:"1",margin:"0"}},[s("span",{class:R({"arrow-down":r.isDropdownOpen(o.id)})},"►",2),s("span",qt,d(o.nome),1)],8,Nt),r.isDropdownOpen(o.id)?(a(),l("div",Et,[(a(!0),l(h,null,_(r.filterOpcionais(o.id),c=>(a(),l("div",{key:c.id,class:"ps-4"},[n(s("input",{type:"checkbox",id:"checkbox_"+c.id,value:c.id,"onUpdate:modelValue":t[21]||(t[21]=A=>e.selecionados=A),class:"me-2"},null,8,Ut),[[x,e.selecionados]]),s("label",{for:"checkbox_"+c.id},d(c.nome),9,Ot)]))),128))])):b("",!0)]))),128))]),s("div",zt,[It,n(s("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":t[22]||(t[22]=o=>e.desc=o)},null,512),[[y,e.desc]])])])])]),s("div",Lt,[s("div",Bt,[jt,s("div",Ht,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[23]||(t[23]=o=>r.criar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Atualizar")])])])])])])])}const Pt=w(to,[["render",Rt]]);const Jt={components:{TheNavTop:V,TheAnuncios:oo,TheCriarAnuncio:J,TheCarregarFoto:K,TheEditarAnuncio:Pt,loader:G},data(){return{TheAdminNavLateral:"",exibeModalCarregarFoto:!1,loading:!1}},methods:{handle_showHidden_menu_lateral(){this.TheAdminNavLateral.classList.toggle("showHidden_menu-lateral")},async refreshAnuncioVar(i){this.$store.state.anuncioID=i,this.$refs.theAnuncios.recarregarDados(this.$store.state.anuncioID),this.$refs.theCarregarFoto.exibeCarregarFoto(),this.$store.state.anuncioID=i},showCarregarFotos(){this.$refs.theCriarAnuncio.showCarregarFotos()},showCarregarFotos(){this.$refs.theCarregarFoto.refreshFotos()},editarAnuncioNow(i){this.$store.state.anuncioID=i,this.$refs.theEditarAnuncio.showgetDados()},exibeCarregarFoto(){this.exibeModalCarregarFoto=!0,this.$refs.theCarregarFoto.showCarregarFotos()},refrescandoFotosNow(){this.$refs.theAnuncios.recarregarDados()},hiddenLoadingNow(){this.loading=!1}},mounted(){this.TheAdminNavLateral=document.getElementById("TheAdminNavLateral")}},Kt={key:0,class:"loader"};function Gt(i,t,p,m,e,r){const o=v("TheNavTop"),c=v("TheAnuncios"),A=v("TheCriarAnuncio"),C=v("TheCarregarFoto"),F=v("TheEditarAnuncio"),T=v("loader");return a(),l("div",null,[f(o),f(c,{onShow_menu_lateral:r.handle_showHidden_menu_lateral,onHanddleCarregarFotos:r.showCarregarFotos,onEditarAnuncio:r.editarAnuncioNow,ref:"theAnuncios",onHiddenLoading:r.hiddenLoadingNow,onCaregouFotos:r.refrescandoFotosNow},null,8,["onShow_menu_lateral","onHanddleCarregarFotos","onEditarAnuncio","onHiddenLoading","onCaregouFotos"]),f(A,{onRefreshAnuncio:r.refreshAnuncioVar,ref:"theCriarAnuncio"},null,8,["onRefreshAnuncio"]),s("div",null,[f(C,{ref:"theCarregarFoto",onRefrescandoFotos:r.refrescandoFotosNow},null,8,["onRefrescandoFotos"])]),f(F,{ref:"theEditarAnuncio"},null,512),e.loading?(a(),l("div",Kt,[f(T)])):b("",!0)])}const oe=w(Jt,[["render",Gt]]);export{oe as default};
