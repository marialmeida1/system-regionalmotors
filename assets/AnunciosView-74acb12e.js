import{T as V}from"./TheNavTop-254b22f1.js";import{k as S,f as M,m as g,o as D,p as q,a as N,b as E,c as U,q as O,r as z,s as I,d as L,t as B,i as R,h as j,l as H}from"./loader-43e32525.js";import{_ as w,o as a,c as l,a as o,e as n,v as y,F as h,i as _,h as $,t as d,f as b,l as u,m as x,d as k,n as P,r as v,b as f}from"./index-43c6b617.js";import{_ as J}from"./TheForm_Login-dc8aa3c7.js";import{T as K}from"./TheCriarAnuncio-2a17ec12.js";import{T as G}from"./TheCarregarFoto-0ee0ee2d.js";const W={name:"TheAnuncios",data(){return{anuncios:[],detalharAnuncios:[],descricao:"",fotos:"",mostrarFotos:!1,mostrarDescricao:!0,confortoArray:[],segurancaArray:[],contador:0,verifyContador:!0,selectedFile:null,fileFoto:null,selectedFile:null,carregar:!0,vazio:!1,array_filtros:[],filtro:"",semAnuncio:!0}},methods:{openModal(){var i=document.getElementById("IDaddCarro");this.$store.state.modalCriarAnuncio=new bootstrap.Modal(i),this.$store.state.modalCriarAnuncio.show()},show_menu_lateral(){this.$emit("show_menu_lateral")},async recarregarDados(i){this.$store.state.foto1="",this.$store.state.foto2="",this.$store.state.foto3="",this.$store.state.foto4="",this.$store.state.foto5="",this.$store.state.foto6="",this.$store.state.foto7="",this.$store.state.foto8="",this.$store.state.foto9="",this.$store.state.foto10="",this.$store.state.anuncioID=i;try{const t=await S(this.$store.state.anuncioID);this.$store.state.detalharAnuncios=t[0],this.$store.state.detalharAnuncios&&this.$emit("hiddenLoading"),this.$store.state.foto1=this.$store.state.detalharAnuncios.foto1,this.$store.state.foto2=this.$store.state.detalharAnuncios.foto2,this.$store.state.foto3=this.$store.state.detalharAnuncios.foto3,this.$store.state.foto4=this.$store.state.detalharAnuncios.foto4,this.$store.state.foto5=this.$store.state.detalharAnuncios.foto5,this.$store.state.foto6=this.$store.state.detalharAnuncios.foto6,this.$store.state.foto7=this.$store.state.detalharAnuncios.foto7,this.$store.state.foto8=this.$store.state.detalharAnuncios.foto8,this.$store.state.foto9=this.$store.state.detalharAnuncios.foto9,this.$store.state.foto10=this.$store.state.detalharAnuncios.foto10}catch(t){console.error("Erro ao listar anúncios:",t)}},async applyFiltro(i,t){const p={};this.array_filtros.forEach(r=>{p[r.chave]=r.valor}),p[i]=t,this.array_filtros=Object.keys(p).map(r=>({chave:r,valor:p[r]}));const m={};this.array_filtros.forEach(r=>{m[r.chave]=r.valor}),Object.keys(m).map(r=>`${r}=${m[r]}`).join("&");const e=`api/anuncios/listar_anuncios?${i}=${t}`;this.$store.state.anuncios=await M(e),this.$store.state.anuncios.length==0?this.vazio=!0:this.vazio=!1},async limparFiltro(){this.array_filtros=[],this.$store.state.anuncios=await g(),this.vazio=!1,this.filtro=""},showFotos(){this.mostrarFotos=!0,this.mostrarDescricao=!1},showDetalhes(i){const t={id:i};this.$router.push({path:"/detalhes-anuncio",query:t})},handdleCarregarFotos(){this.$emit("handdleCarregarFotos")},modalApagar(i){this.id=i},async apagar(){try{const i=await D(this.id);setTimeout(async function(){this.$store.state.anuncios=await g()}.bind(this),2e3),i.data||(this.showErrorMessage=!0)}catch(i){console.error("Erro na requisição:",i),this.showErrorMessage=!0}},async editarAnuncioEmit(i){this.$emit("editarAnuncio",i)}},created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.recarregarDados()},async mounted(){try{this.$store.state.anuncios=await g(),this.$store.state.anuncios!=null&&(this.$store.state.detalharAnuncios=this.$store.state.anuncios.find(i=>i.id==this.$store.state.anuncioID))}catch(i){console.error("Erro ao listar anúncios:",i)}this.$store.state.fechaModal=!1,this.semAnuncio=!1,this.$store.state.anuncios&&(this.carregar=!1,this.$store.state.anuncios.length==0&&(this.semAnuncio=!0))}},Q={class:"content m-0"},X=o("br",null,null,-1),Y={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"},hidden:""},Z={class:"row"},oo={class:"col-8 col-lg-10"},so={class:"row"},to={class:"col-2 pesquisar-filter p-0"},eo=o("i",{class:"fas fa-filter fa-lg"},null,-1),io=[eo],ao={class:"col-10 col-lg-12 p-0"},lo={class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},ro=o("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}},null,-1),no=$('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes" hidden><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark p-2 text-cente" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><span class="ps-2">Filtrar Anucios</span><p class="mt-2">Todos</p><p>Pendente</p><p>Em andamento</p><p>Rejeitado</p><p>Terminado</p></div></div></div></div><div></div></div>',1),co={class:"px-2 px-lg-3"},uo=o("div",null,[o("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[o("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[o("b",null,"Gerenciar/Meus anuncios")])])],-1),ho={key:0,style:{height:"20vh"},class:"d-flex justify-content-center align-items-center"},_o=o("div",{class:"caixa",style:{background:"none"}},[o("img",{src:J,alt:"",style:{width:"100%"}})],-1),po=[_o],mo={key:1,class:"position-relative",style:{height:"68vh"}},vo={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},fo={class:"table"},bo=o("thead",null,[o("tr",{style:{"background-color":"crimson",color:"#fff"}},[o("th",{scope:"col"},"#"),o("th",{scope:"col"},[o("div",{style:{width:"130px"}},"Tipo de veiculo")]),o("th",{scope:"col"},[o("div",{style:{width:"170px"}},"Situaçao do veiculo")]),o("th",{scope:"col"},"Marca"),o("th",{scope:"col"},"Modelo"),o("th",{scope:"col"},"Status"),o("th",{scope:"col",class:"text-center"},"Açoes")])],-1),go={key:0},yo=o("td",{class:"text-center",colspan:"8"},"Sem Anuncios",-1),Ao=[yo],xo={key:0},wo={key:1},ko={name:""},$o={class:"py-2"},Co={key:0,style:{width:"150px"},class:"text-center bg-warning p-2 rounded-3"},Fo={key:1,style:{width:"150px","background-color":"rgb(0, 221, 0)"},class:"text-center p-2 rounded-3"},To={key:2,style:{width:"150px",color:"#fff"},class:"text-center bg-danger p-2 rounded-3"},Vo={key:3,style:{width:"150px"},class:"text-center bg-dark p-2 rounded-3"},So={key:4,style:{width:"150px","background-color":"rgb(0, 214, 221)"},class:"text-center p-2 rounded-3"},Mo={key:5,style:{width:"150px","background-color":"rgb(168, 168, 168)",color:"rgb(104, 101, 101)"},class:"text-center p-2 rounded-3"},Do={class:"text-center"},qo={style:{width:"150px"}},No=["onClick"],Eo=o("i",{class:"fas fa-eye"},null,-1),Uo=[Eo],Oo=["onClick"],zo=o("i",{class:"fas fa-camera ms-3"},null,-1),Io=[zo],Lo=["onClick"],Bo=o("i",{class:"fas fa-pencil-alt"},null,-1),Ro=[Bo],jo=["onClick"],Ho=o("i",{class:"fas fa-plus"},null,-1),Po=[Ho],Jo={class:"modal fade",id:"EliminarAnuncio",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ko={class:"modal-dialog"},Go={class:"modal-content"},Wo={class:"bg-dar",id:"criarAnuncio"},Qo=$('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Remover Anuncio</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5>Confirme antes de <span style="color:red;">Eliminar</span>!</h5></div></div>',2),Xo={class:"modal-footer"},Yo={style:{display:"flex","flex-wrap":"wrap"}},Zo=o("div",{class:"col-6"},[o("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),os={class:"col-6"};function ss(i,t,p,m,e,r){return a(),l("main",Q,[X,o("div",Y,[o("div",Z,[o("div",oo,[o("div",so,[o("div",to,[o("div",{class:"pt-2",onClick:t[0]||(t[0]=(...s)=>r.show_menu_lateral&&r.show_menu_lateral(...s))},io)]),o("div",ao,[o("div",lo,[n(o("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},"onUpdate:modelValue":t[1]||(t[1]=s=>e.filtro=s),placeholder:"Buscar"},null,512),[[y,e.filtro]]),ro])])])]),no])]),o("div",co,[uo,e.carregar?(a(),l("div",ho,po)):(a(),l("div",mo,[o("div",vo,[o("table",fo,[bo,o("tbody",null,[e.semAnuncio?(a(),l("tr",go,Ao)):(a(!0),l(h,{key:1},_(i.$store.state.anuncios,s=>(a(),l("tr",{key:s.id},[o("th",null,d(s.id),1),o("td",null,d(s.tipo_veiculo),1),o("td",null,[s.situacao_veiculo==1?(a(),l("span",xo," Novo ")):b("",!0),s.situacao_veiculo==2?(a(),l("span",wo," Usado ")):b("",!0)]),o("td",null,d(s.nome_marca),1),o("td",null,d(s.nome_modelo),1),o("td",null,[o("div",ko,[o("div",$o,[s.status_publicacao==1?(a(),l("div",Co," Aguardando ")):s.status_publicacao==2?(a(),l("div",Fo," Activo ")):s.status_publicacao==3?(a(),l("div",To," Reprovado ")):s.status_publicacao==4?(a(),l("div",Vo," Finalizado ")):s.status_publicacao==5?(a(),l("div",So," Vendido ")):s.status_publicacao==6?(a(),l("div",Mo," Bloqueado ")):b("",!0)])])]),o("td",Do,[o("div",qo,[o("span",{onClick:c=>r.showDetalhes(s.id),style:{cursor:"pointer"}},Uo,8,No),o("span",{onClick:c=>r.recarregarDados(s.id),type:"button","data-bs-toggle":"modal","data-bs-target":"#CarregarFotos"},Io,8,Oo),o("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarAnuncios",onClick:c=>r.editarAnuncioEmit(s.id)},Ro,8,Lo),o("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarAnuncio",onClick:c=>r.modalApagar(s.id)},null,8,jo)])])]))),128))])])]),o("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button",onClick:t[2]||(t[2]=(...s)=>r.openModal&&r.openModal(...s))},Po)]))]),o("div",Jo,[o("div",Ko,[o("div",Go,[o("div",Wo,[Qo,o("div",Xo,[o("div",Yo,[Zo,o("div",os,[o("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=s=>r.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Confirmar ")])])])])])])])])}const ts=w(W,[["render",ss]]),es={name:"TheCriarAnuncio",data(){return{id:"",tipo_veiculo:"",categoria_id:"",photos:[],Api_categorias:[],Api_transmissao:[],Api_combustivel:[],Api_tecnologia:[],Api_cores:[],Api_Seguranca:[],Api_Conforto:[],Api_cores:[],Api_CategOpcionais:[],Api_Opcionais:[],portas:[2,4,6,8,10],Api_fabricante:["BMW","Suzuki","Toyota"],anos:[],marcas:[],modelos:"",marca_id:null,modelo_id:"",ano_modelo:"",desc:"",previewImage:null,estado:"",cidade:"",fabricante:"",ano_fabricante:"",num_portas:"",cor:"",transmissao:"",combustivel:"",kilometro:"",desc:"",conforto:[],seguranca:[],situacao_veiculo:"",vitrine:"",destaque:"",tecnologia:"",mostrar_preco:"sim",valor_preco:"",Api_CategOpcionais:[],selecionados:[],dropdownState:{},opc:[],status_publicacao:""}},methods:{getVitrine(){return this.vitrine?1:0},getDestaque(){return this.destaque?1:0},async criar(){this.titulo=this.marca_id+" "+this.modelo_id+" - "+this.ano_modelo;var i=JSON.stringify(this.selecionados);const t={titulo:this.titulo,tipo_veiculo:this.tipo_veiculo,tecnologia:this.tecnologia,marca_id:this.marca_id,modelo_id:this.modelo_id,numero_cliques:"2",situacao_veiculo:this.situacao_veiculo,anunciante_id:this.$store.state.anunciante_id,categoria_id:this.categoria_id,data_inicio:"20-02-2021",data_fim:"20-02-2022",ordenacao:"2",status_publicacao:this.status_publicacao,status_pagamento:"1",tipo:"2",vendido:"1",vitrine:this.vitrine,destaque_busca:this.destaque,cep:"12352",estado_id:"2",cidade_id:"3",empresa:"null",tipo_preco:"1",valor_preco:this.valor_preco,mostrar_preco:this.mostrar_preco,fabricante_id:"2",ano_fabricacao:this.ano_fabricante,ano_modelo:this.ano_modelo,carroceria:"null",estilo:"null",portas:this.num_portas,cilindros:"4",motor:"2",cor:this.cor,transmissao:this.transmissao,combustivel:this.combustivel,placa:"null",km:this.kilometro,sinistrado:"null",opcionais_id:i,descricao:this.desc};try{const p=await q(t,this.$store.state.anuncioID);p?(this.$store.state.anuncios=await g(),this.id=p.id,this.$emit("refreshAnuncio",this.id),this.tipo_veiculo="",this.marca_id="",this.modelo_id="",this.situacao_veiculo="",this.categoria_id="",this.estado="",this.cidade="",this.empresa="",this.valor_preco="",this.fabricante="",this.ano_fabricante="",this.ano_modelo="",this.carroceria="",this.estilo="",this.num_portas="",this.cor="",this.transmissao="",this.combustivel="",this.kilometro="",this.conforto="",this.vitrine=!1,this.destaque=!1):this.showErrorMessage=!0}catch(p){console.error("Erro na requisição:",p)}},showCarregarFotos(){},formatarNumero(){let i=this.valor_preco.replace(/[^\d.]/g,"");const t=i.split(".");i=t.shift()+(t.length>0?"."+t.join(""):""),i=i.replace(/\./g,""),i=i.replace(/\B(?=(\d{3})+(?!\d))/g,"."),this.valor_preco=i},toggleDropdown(i){this.$data.dropdownState[i]=!this.$data.dropdownState[i],this.$forceUpdate()},isDropdownOpen(i){return this.$data.dropdownState[i]||!1},filterOpcionais(i){return this.Api_Opcionais.filter(t=>t.categoria_opcional_id==i)},filterMarcas(i){return this.$store.state.marcas.filter(t=>t.tipo_veiculo_id==i)},filterModelos(i){return this.$store.state.modelos.filter(t=>t.id_marca==i)},async showgetDados(){this.anuncios=this.$store.state.anuncios.find(i=>i.id===this.$store.state.anuncioID),this.tipo_veiculo=this.anuncios.tipo_veiculo_id,this.tecnologia=this.anuncios.tecnologia_id,this.marca_id=this.anuncios.id_marca,this.modelo_id=this.anuncios.id_modelo,this.situacao_veiculo=this.anuncios.situacao_veiculo,this.categoria_id=this.anuncios.id_categoria,this.status_publicacao=this.anuncios.status_publicacao,this.anuncios.destaque_busca==1?this.destaque=!0:this.destaque=!1,this.anuncios.vitrine==1?this.vitrine=!0:this.vitrine=!1,this.valor_preco=this.anuncios.valor_preco,this.mostrar_preco=this.anuncios.mostrar_preco,this.ano_fabricante=this.anuncios.ano_fabricacao,this.ano_modelo=this.anuncios.ano_modelo,this.num_portas=this.anuncios.portas,this.cor=this.anuncios.cor_id,this.transmissao=this.anuncios.transmissao_id,this.combustivel=this.anuncios.combustivel_id,this.kilometro=this.anuncios.km,this.selecionados=JSON.parse(this.anuncios.opcionais_id),this.desc=this.anuncios.descricao}},async created(){this.$store.state.modelos=await N(),this.$store.state.marcas=await E(),this.Api_categorias=await U(),this.Api_combustivel=await O(),this.Api_transmissao=await z(),this.Api_tecnologia=await I(),this.$store.state.tipo_veiculo=await L(),this.Api_cores=await B(),this.Api_Opcionais=await R(),this.Api_CategOpcionais=await j(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais;for(let i=2025;1990<i;i--)this.anos.push(i)},mounted(){}},is={class:"modal fade",id:"EditarAnuncios",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},as={class:"modal-dialog"},ls={class:"modal-content"},rs={class:"bg-dar"},ns=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[o("span",{class:"fas fa-bullhorn py-2 pt-0"}),k(),o("b",null,"Editar Anúncio")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),cs={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ds={class:"row"},us={key:0,class:"py-3"},hs=o("label",{for:"marca",class:"form-label"},"Marcar como vendido",-1),_s={key:0,value:"2"},ps={key:1,value:"2",selected:""},ms={key:2,value:"5"},vs={key:3,value:"5",selected:""},fs=o("div",{class:"p-2 pt-0 row mb-2 mt-md-1 mt-lg-1",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),bs={class:"mb-3"},gs=o("label",{for:"marca",class:"form-label"},"Situaçao do Veiculo",-1),ys=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),As=o("option",{value:"1"},"Novo",-1),xs=o("option",{value:"2"},"Usado",-1),ws=[ys,As,xs],ks={class:"mb-3"},$s=o("label",{for:"marca",class:"form-label"},"Tipo de Veiculo",-1),Cs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Fs=["value"],Ts={class:"mb-3"},Vs=o("label",{for:"preco",class:"form-label"},"Tecnologia",-1),Ss=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Ms=["value"],Ds={class:"mb-3"},qs=o("label",{for:"nome",class:"form-label"},[k("Categoria "),o("span",{style:{opacity:".6"}},"(Opcional)")],-1),Ns=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Es=["value"],Us={class:"mb-3"},Os=o("label",{for:"marca",class:"form-label"},"Marca",-1),zs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Is=["value"],Ls={class:"mb-3"},Bs={class:"mb-3"},Rs=o("label",{for:"",class:"form-label"},"Modelo",-1),js=o("option",{value:""},"Selecionar",-1),Hs=["value"],Ps={class:"mb-3"},Js=o("label",{for:"nome",class:"form-label"},"Ano de Fabricaçao",-1),Ks=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Gs=["value"],Ws={class:"mb-3"},Qs=o("label",{for:"nome",class:"form-label"},"Ano do Modelo",-1),Xs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Ys=["value"],Zs=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Preço "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),ot={class:"mb-3"},st=o("label",{for:"preco",class:"form-label"},"Preço (R$)",-1),tt={class:"mb-3"},et=o("label",{for:"nome",class:"form-label"},"Mostrar Preço",-1),it=o("option",{value:"sim",selected:""}," sim ",-1),at=o("option",{value:"nao"}," nao ",-1),lt=[it,at],rt=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Caracteristicas do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),nt={class:"mb-3"},ct=o("label",{for:"nome",class:"form-label"},"Cor",-1),dt=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ut=["value"],ht={class:"mb-3"},_t=o("label",{for:"nome",class:"form-label"},"Numero de Portas",-1),pt=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),mt=["value"],vt={class:"mb-3"},ft=o("label",{for:"preco",class:"form-label"},"Transmissao",-1),bt=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),gt=["value"],yt={class:"mb-3"},At=o("label",{for:"preco",class:"form-label"},"Combustivel",-1),xt=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),wt=["value"],kt={class:"mb-3"},$t=o("label",{for:"preco",class:"form-label"},"Kilometragem",-1),Ct=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px","background-color":"crimson !important"}}," Privilegios "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Ft={class:"mb-2 mt-2 check"},Tt=o("label",{for:"vitrine",class:"ms-2 form-label"},"Adicionar na vitrine",-1),Vt={class:"mb-2 check"},St=o("label",{for:"destaque",class:"ms-2 form-label"},"Marcar como destaque",-1),Mt=o("div",{class:"p-2 pt-0 row mt-md-4 mt-lg-4 mb-2",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Opcionais & Itens de Serie "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Dt={class:"mb-3"},qt=["onClick"],Nt={class:"ms-2"},Et={key:0,class:"mb-2 pt-2"},Ut=["id","value"],Ot=["for"],zt={class:"mb-3"},It=o("label",{for:"desc",class:"form-label"},[k("Descriçao "),o("span",{style:{opacity:"0.6"}},"(Opcional)")],-1),Lt={class:"modal-footer"},Bt={style:{display:"flex","flex-wrap":"wrap"}},Rt=o("div",{class:"col-6"},[o("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),jt={class:"col-6"};function Ht(i,t,p,m,e,r){return a(),l("div",is,[o("div",as,[o("div",ls,[o("div",rs,[ns,o("div",cs,[o("form",null,[o("div",ds,[e.status_publicacao==2||e.status_publicacao==5?(a(),l("div",us,[hs,n(o("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.status_publicacao=s),class:"form-select"},[e.status_publicacao!=="2"?(a(),l("option",_s," Não ")):(a(),l("option",ps," Não ")),e.status_publicacao!=="5"?(a(),l("option",ms," Sim ")):(a(),l("option",vs," Sim "))],512),[[u,e.status_publicacao]])])):b("",!0),fs,o("div",bs,[o("div",null,[gs,n(o("select",{"onUpdate:modelValue":t[1]||(t[1]=s=>e.situacao_veiculo=s),class:"form-select"},ws,512),[[u,e.situacao_veiculo]])])]),o("div",ks,[o("div",null,[$s,n(o("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>e.tipo_veiculo=s),class:"form-select"},[Cs,(a(!0),l(h,null,_(i.$store.state.tipo_veiculo,s=>(a(),l("option",{value:s.id,key:s.id},d(s.tipo_veiculo),9,Fs))),128))],512),[[u,e.tipo_veiculo]])])]),o("div",Ts,[Vs,n(o("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>e.tecnologia=s),class:"form-select"},[Ss,(a(!0),l(h,null,_(e.Api_tecnologia,s=>(a(),l("option",{value:s.id,key:s.id},d(s.tecnologia),9,Ms))),128))],512),[[u,e.tecnologia]])]),o("div",Ds,[qs,n(o("select",{"onUpdate:modelValue":t[4]||(t[4]=s=>e.categoria_id=s),class:"form-select"},[Ns,(a(!0),l(h,null,_(e.Api_categorias,s=>(a(),l("option",{value:s.id,key:s.id},d(s.nome),9,Es))),128))],512),[[u,e.categoria_id]])]),o("div",Us,[o("div",null,[Os,n(o("select",{"onUpdate:modelValue":t[5]||(t[5]=s=>e.marca_id=s),class:"form-select"},[zs,(a(!0),l(h,null,_(r.filterMarcas(e.tipo_veiculo),s=>(a(),l("option",{value:s.id,key:s.id},d(s.nome_marca),9,Is))),128))],512),[[u,e.marca_id]])])]),o("div",Ls,[o("div",null,[o("div",Bs,[Rs,n(o("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[6]||(t[6]=s=>e.modelo_id=s)},[js,(a(!0),l(h,null,_(r.filterModelos(e.marca_id),s=>(a(),l("option",{value:s.id,key:s.id},d(s.nome_modelo),9,Hs))),128))],512),[[u,e.modelo_id]])])])]),o("div",Ps,[Js,n(o("select",{class:"form-select","onUpdate:modelValue":t[7]||(t[7]=s=>e.ano_fabricante=s)},[Ks,(a(!0),l(h,null,_(e.anos,(s,c)=>(a(),l("option",{value:s,key:c},d(s),9,Gs))),128))],512),[[u,e.ano_fabricante]])]),o("div",Ws,[Qs,n(o("select",{class:"form-select","onUpdate:modelValue":t[8]||(t[8]=s=>e.ano_modelo=s)},[Xs,(a(!0),l(h,null,_(e.anos,(s,c)=>(a(),l("option",{value:s,key:c},d(s),9,Ys))),128))],512),[[u,e.ano_modelo]])]),Zs,o("div",ot,[st,n(o("input",{type:"text",class:"text form-control",id:"preco","onUpdate:modelValue":t[9]||(t[9]=s=>e.valor_preco=s),onKeyup:t[10]||(t[10]=(...s)=>r.formatarNumero&&r.formatarNumero(...s)),placeholder:""},null,544),[[y,e.valor_preco]])]),o("div",tt,[et,n(o("select",{"onUpdate:modelValue":t[11]||(t[11]=s=>e.mostrar_preco=s),class:"form-select"},lt,512),[[u,e.mostrar_preco]])]),rt,o("div",nt,[ct,n(o("select",{"onUpdate:modelValue":t[12]||(t[12]=s=>e.cor=s),class:"form-select"},[dt,(a(!0),l(h,null,_(e.Api_cores,s=>(a(),l("option",{value:s.id,key:s.id},d(s.cor),9,ut))),128))],512),[[u,e.cor]])]),o("div",ht,[_t,n(o("select",{"onUpdate:modelValue":t[13]||(t[13]=s=>e.num_portas=s),class:"form-select"},[pt,(a(!0),l(h,null,_(e.portas,(s,c)=>(a(),l("option",{value:s,key:c},d(s),9,mt))),128))],512),[[u,e.num_portas]])]),o("div",vt,[ft,n(o("select",{"onUpdate:modelValue":t[14]||(t[14]=s=>e.transmissao=s),class:"form-select"},[bt,(a(!0),l(h,null,_(e.Api_transmissao,s=>(a(),l("option",{value:s.id,key:s.id},d(s.transmissao),9,gt))),128))],512),[[u,e.transmissao]])]),o("div",yt,[At,n(o("select",{"onUpdate:modelValue":t[15]||(t[15]=s=>e.combustivel=s),class:"form-select"},[xt,(a(!0),l(h,null,_(e.Api_combustivel,s=>(a(),l("option",{value:s.id,key:s.id},d(s.combustivel),9,wt))),128))],512),[[u,e.combustivel]])]),o("div",kt,[$t,n(o("input",{type:"number",class:"text form-control",id:"preco","onUpdate:modelValue":t[16]||(t[16]=s=>e.kilometro=s),min:"0",max:"100"},null,512),[[y,e.kilometro]])]),Ct,o("div",Ft,[n(o("input",{type:"checkbox","onUpdate:modelValue":t[17]||(t[17]=s=>e.vitrine=s),id:"vitrine",onClick:t[18]||(t[18]=(...s)=>r.getVitrine&&r.getVitrine(...s))},null,512),[[x,e.vitrine]]),Tt]),o("div",Vt,[n(o("input",{type:"checkbox","onUpdate:modelValue":t[19]||(t[19]=s=>e.destaque=s),id:"destaque",onClick:t[20]||(t[20]=(...s)=>r.getDestaque&&r.getDestaque(...s))},null,512),[[x,e.destaque]]),St]),Mt,o("div",Dt,[(a(!0),l(h,null,_(e.Api_CategOpcionais,s=>(a(),l("div",{key:s.id},[o("p",{onClick:c=>r.toggleDropdown(s.id),style:{cursor:"pointer",opacity:"1",margin:"0"}},[o("span",{class:P({"arrow-down":r.isDropdownOpen(s.id)})},"►",2),o("span",Nt,d(s.nome),1)],8,qt),r.isDropdownOpen(s.id)?(a(),l("div",Et,[(a(!0),l(h,null,_(r.filterOpcionais(s.id),c=>(a(),l("div",{key:c.id,class:"ps-4"},[n(o("input",{type:"checkbox",id:"checkbox_"+c.id,value:c.id,"onUpdate:modelValue":t[21]||(t[21]=A=>e.selecionados=A),class:"me-2"},null,8,Ut),[[x,e.selecionados]]),o("label",{for:"checkbox_"+c.id},d(c.nome),9,Ot)]))),128))])):b("",!0)]))),128))]),o("div",zt,[It,n(o("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":t[22]||(t[22]=s=>e.desc=s)},null,512),[[y,e.desc]])])])])]),o("div",Lt,[o("div",Bt,[Rt,o("div",jt,[o("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[23]||(t[23]=s=>r.criar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Actualizar")])])])])])])])}const Pt=w(es,[["render",Ht]]);const Jt={components:{TheNavTop:V,TheAnuncios:ts,TheCriarAnuncio:K,TheCarregarFoto:G,TheEditarAnuncio:Pt,loader:H},data(){return{TheAdminNavLateral:"",exibeModalCarregarFoto:!1,loading:!1}},methods:{handle_showHidden_menu_lateral(){this.TheAdminNavLateral.classList.toggle("showHidden_menu-lateral")},async refreshAnuncioVar(i){this.$store.state.anuncioID=i,this.$refs.theAnuncios.recarregarDados(this.$store.state.anuncioID),this.$refs.theCarregarFoto.exibeCarregarFoto(),this.$store.state.anuncioID=i},showCarregarFotos(){this.$refs.theCriarAnuncio.showCarregarFotos()},showCarregarFotos(){this.$refs.theCarregarFoto.refreshFotos()},editarAnuncioNow(i){this.$store.state.anuncioID=i,this.$refs.theEditarAnuncio.showgetDados()},exibeCarregarFoto(){this.exibeModalCarregarFoto=!0,this.$refs.theCarregarFoto.showCarregarFotos()},refrescandoFotosNow(){this.$refs.theAnuncios.recarregarDados()},hiddenLoadingNow(){this.loading=!1}},mounted(){this.TheAdminNavLateral=document.getElementById("TheAdminNavLateral")}},Kt={key:0,class:"loader"};function Gt(i,t,p,m,e,r){const s=v("TheNavTop"),c=v("TheAnuncios"),A=v("TheCriarAnuncio"),C=v("TheCarregarFoto"),F=v("TheEditarAnuncio"),T=v("loader");return a(),l("div",null,[f(s),f(c,{onShow_menu_lateral:r.handle_showHidden_menu_lateral,onHanddleCarregarFotos:r.showCarregarFotos,onEditarAnuncio:r.editarAnuncioNow,ref:"theAnuncios",onHiddenLoading:r.hiddenLoadingNow,onCaregouFotos:r.refrescandoFotosNow},null,8,["onShow_menu_lateral","onHanddleCarregarFotos","onEditarAnuncio","onHiddenLoading","onCaregouFotos"]),f(A,{onRefreshAnuncio:r.refreshAnuncioVar,ref:"theCriarAnuncio"},null,8,["onRefreshAnuncio"]),o("div",null,[f(C,{ref:"theCarregarFoto",onRefrescandoFotos:r.refrescandoFotosNow},null,8,["onRefrescandoFotos"])]),f(F,{ref:"theEditarAnuncio"},null,512),e.loading?(a(),l("div",Kt,[f(T)])):b("",!0)])}const se=w(Jt,[["render",Gt]]);export{se as default};
