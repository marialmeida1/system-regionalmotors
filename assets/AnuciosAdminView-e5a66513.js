import{T as V}from"./TheNavTop-c8315887.js";import{T as q}from"./TheAdminNavLateral2-0a8d45af.js";import{G as g,f as E,o as N,H as D,e as M,I as L,p as U,a as O,b as z,c as I,q as B,r as R,s as H,d as P,t as j,i as J,h as K,l as G}from"./loader-49a51e5e.js";import{_ as x,o as i,c as a,a as o,e as r,v as y,F as u,i as _,h as $,f as m,t as c,d as A,l as p,m as k,n as W,r as f,b}from"./index-f9a1c669.js";import{_ as Q}from"./TheForm_Login-2df227ea.js";import{T as X}from"./TheCriarAnuncio-44fed725.js";import{T as Y}from"./TheCarregarFoto-a9e1007b.js";const Z={name:"TheAnuncios",data(){return{anuncios:[],detalharAnuncios:[],descricao:"",fotos:"",mostrarFotos:!1,mostrarDescricao:!0,confortoArray:[],segurancaArray:[],contador:0,verifyContador:!0,selectedFile:null,fileFoto:null,selectedFile:null,carregar:!0,vazio:!1,array_filtros:[],filtro:"",listar_anuncios:"",filters_anunciante:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},async recarregarDados(l){this.$store.state.foto1="",this.$store.state.foto2="",this.$store.state.foto3="",this.$store.state.foto4="",this.$store.state.foto5="",this.$store.state.foto6="",this.$store.state.foto7="",this.$store.state.foto8="",this.$store.state.foto9="",this.$store.state.foto10="",this.$store.state.anuncioID=l;try{this.$store.state.anuncios=await g(),this.$store.state.anuncios!=null&&(this.$store.state.detalharAnuncios=this.$store.state.anuncios.find(s=>s.id==this.$store.state.anuncioID)),this.$store.state.detalharAnuncios&&this.$emit("hiddenLoading"),this.$store.state.foto1=this.$store.state.detalharAnuncios.foto1,this.$store.state.foto2=this.$store.state.detalharAnuncios.foto2,this.$store.state.foto3=this.$store.state.detalharAnuncios.foto3,this.$store.state.foto4=this.$store.state.detalharAnuncios.foto4,this.$store.state.foto5=this.$store.state.detalharAnuncios.foto5,this.$store.state.foto6=this.$store.state.detalharAnuncios.foto6,this.$store.state.foto7=this.$store.state.detalharAnuncios.foto7,this.$store.state.foto8=this.$store.state.detalharAnuncios.foto8,this.$store.state.foto9=this.$store.state.detalharAnuncios.foto9,this.$store.state.foto10=this.$store.state.detalharAnuncios.foto10}catch(s){console.error("Erro ao listar anúncios:",s)}},async applyFiltro(l,s){if(s!="0"){const h={};this.array_filtros.forEach(n=>{h[n.chave]=n.valor}),h[l]=s,this.array_filtros=Object.keys(h).map(n=>({chave:n,valor:h[n]}));const v={};this.array_filtros.forEach(n=>{v[n.chave]=n.valor}),Object.keys(v).map(n=>`${n}=${v[n]}`).join("&");const e=`api/anuncios/listar_anuncios?${l}=${s}`;this.$store.state.anuncios=await E(e),this.$store.state.anuncios.length==0?this.vazio=!0:this.vazio=!1}else this.limparFiltro()},async limparFiltro(){this.array_filtros=[],this.$store.state.anuncios=this.listar_anuncios,this.vazio=!1,this.filtro=""},showFotos(){this.mostrarFotos=!0,this.mostrarDescricao=!1},showDetalhes(l){const s={id:l};this.$router.push({path:"/admin-detalhes-anuncios",query:s})},handdleCarregarFotos(){this.$emit("handdleCarregarFotos")},modalApagar(l){this.id=l},async apagar(){try{const l=await N(this.id);setTimeout(async function(){this.$store.state.anuncios=await g()}.bind(this),2e3),l.data||(this.showErrorMessage=!0)}catch(l){console.error("Erro na requisição:",l),this.showErrorMessage=!0}},async editar(){const l={uf:this.uf,estado:this.novoEstado};try{(await D(l,this.id)).data?this.$store.state.estado=await M():this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}},async editarAnuncioEmit(l){this.$emit("editarAnuncio",l)}},async created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.recarregarDados(),this.filters_anunciante=await L()},async mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"});try{this.listar_anuncios=await g(),this.$store.state.anuncios=this.listar_anuncios,this.$store.state.anuncios!=null&&(this.$store.state.detalharAnuncios=this.$store.state.anuncios.find(l=>l.id==this.$store.state.anuncioID))}catch(l){console.error("Erro ao listar anúncios:",l)}this.$store.state.fechaModal=!1,this.$store.state.anuncios&&(this.carregar=!1)},computed:{anunciosFiltrados(){const l=this.filtro.toLowerCase();return this.$store.state.anuncios.filter(s=>{const h=String(s.anunciante_id).toLowerCase(),v=String(s.situacao_veiculo).toLowerCase(),e=String(s.tipo_veiculo).toLowerCase(),n=String(s.nome_marca).toLowerCase(),t=String(s.nome_modelo).toLowerCase();return h.includes(l)||v.includes(l)||e.includes(l)||n.includes(l)||t.includes(l)})}}},oo={class:"content"},to={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},so={class:"row"},eo={class:"col-8 col-lg-10"},io={class:"row"},ao={class:"col-2 pesquisar-filter p-0"},lo=o("i",{class:"fas fa-filter fa-lg"},null,-1),no=[lo],ro={class:"col-10 col-lg-12 p-0"},co={class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},uo=o("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}},null,-1),_o=$('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes" hidden><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark p-2 text-cente" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><span class="ps-2">Filtrar Anucios</span><p class="mt-2">Todos</p><p>Pendente</p><p>Em andamento</p><p>Rejeitado</p><p>Terminado</p></div></div></div></div><div></div></div>',1),ho={class:"px-2"},po=o("div",null,[o("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[o("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[o("b",null,"Admin/Anuncios")])])],-1),mo={class:"p-2"},vo=o("span",{class:"me-2"},"| Filtrar:",-1),fo={key:0},bo={key:0},go={key:1},yo={key:1},Ao={key:0},wo={key:1},ko={key:2},xo={key:0,style:{height:"20vh"},class:"d-flex justify-content-center align-items-center"},$o=o("div",{class:"caixa",style:{background:"none"}},[o("img",{src:Q,alt:"",style:{width:"100%"}})],-1),Co=[$o],Fo={key:1,class:"position-relative",style:{height:"68vh"}},To={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},So={class:"table"},Vo=o("th",null,null,-1),qo={scope:"col"},Eo=o("option",{value:"",selected:"",disabled:""},"Anunciante",-1),No=o("option",{value:"0"},"Anunciante",-1),Do=["value"],Mo=o("th",{colspan:"5"},null,-1),Lo={scope:"col"},Uo=o("option",{value:"",selected:"",disabled:""},"Status",-1),Oo=o("option",{value:"0"},"Status",-1),zo=o("option",{value:"1"},"Aguardando",-1),Io=o("option",{value:"2"},"Ativo",-1),Bo=o("option",{vale:"3"},"Recusado",-1),Ro=o("option",{value:"4"},"Finalizado",-1),Ho=o("option",{value:"5"},"Vendido",-1),Po=o("option",{value:"6"},"Bloqueado",-1),jo=[Uo,Oo,zo,Io,Bo,Ro,Ho,Po],Jo=o("th",{scope:"col",class:"text-center"},"...",-1),Ko=o("tr",{style:{"background-color":"crimson",color:"#fff"}},[o("th",{scope:"col"},"#"),o("th",{scope:"col"},"Anuciante"),o("th",{scope:"col"},[o("div",{style:{width:"130px"}},"Tipo de veiculo")]),o("th",{scope:"col"},[o("div",{style:{width:"170px"}},"Situaçao do veiculo")]),o("th",{scope:"col"},"Marca"),o("th",{scope:"col"},"Modelo"),o("th",{scope:"col"},"Status"),o("th",{scope:"col",class:"text-center"},"Açoes")],-1),Go={key:0},Wo=o("td",{class:"text-center",colspan:"8"},"Nenhum registo encontrado",-1),Qo=[Wo],Xo={scope:"row"},Yo={key:0},Zo={key:1},ot={name:""},tt={class:"py-2"},st={key:0,style:{width:"150px"},class:"text-center bg-warning p-2 rounded-3"},et={key:1,style:{width:"150px","background-color":"rgb(0, 221, 0)"},class:"text-center p-2 rounded-3"},it={key:2,style:{width:"150px",color:"#fff"},class:"text-center bg-danger p-2 rounded-3"},at={key:3,style:{width:"150px"},class:"text-center bg-dark p-2 rounded-3"},lt={key:4,style:{width:"150px","background-color":"rgb(0, 214, 221)"},class:"text-center p-2 rounded-3"},nt={key:5,style:{width:"150px","background-color":"rgb(168, 168, 168)",color:"rgb(104, 101, 101)"},class:"text-center p-2 rounded-3"},rt={class:"text-center"},ct={style:{width:"150px"}},dt=["onClick"],ut=o("i",{class:"fas fa-eye"},null,-1),_t=[ut],ht=["onClick"],pt=o("i",{class:"fas fa-camera ms-3"},null,-1),mt=[pt],vt=["onClick"],ft=o("i",{class:"fas fa-pencil-alt"},null,-1),bt=[ft],gt=["onClick"],yt=o("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCarro"},[o("i",{class:"fas fa-plus"})],-1),At={class:"modal fade",id:"EliminarAnuncio",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},wt={class:"modal-dialog"},kt={class:"modal-content"},xt={class:"bg-dar",id:"criarAnuncio"},$t=$('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Remover Anuncio</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5>Confirme antes de <span style="color:red;">Eliminar</span>!</h5></div></div>',2),Ct={class:"modal-footer"},Ft={style:{display:"flex","flex-wrap":"wrap"}},Tt=o("div",{class:"col-6"},[o("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),St={class:"col-6"};function Vt(l,s,h,v,e,n){return i(),a("main",oo,[o("div",to,[o("div",so,[o("div",eo,[o("div",io,[o("div",ao,[o("div",{class:"pt-2",onClick:s[0]||(s[0]=(...t)=>n.show_menu_lateral&&n.show_menu_lateral(...t))},no)]),o("div",ro,[o("div",co,[r(o("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},"onUpdate:modelValue":s[1]||(s[1]=t=>e.filtro=t),placeholder:"Buscar"},null,512),[[y,e.filtro]]),uo])])])]),_o])]),o("div",ho,[po,o("div",mo,[vo,(i(!0),a(u,null,_(e.array_filtros,t=>(i(),a("span",null,[t.chave=="situacao_veiculo"?(i(),a("span",fo,[t.valor=="1"?(i(),a("span",bo," Novo ")):m("",!0),t.valor=="2"?(i(),a("span",go," Usado ")):m("",!0)])):t.chave=="status_publicacao"?(i(),a("span",yo,[t.valor=="1"?(i(),a("span",Ao," Aguardando ")):m("",!0),t.valor=="2"?(i(),a("span",wo," Ativo ")):m("",!0)])):(i(),a("span",ko,c(t.valor),1)),A(" / ")]))),256))]),e.carregar?(i(),a("div",xo,Co)):(i(),a("div",Fo,[o("div",To,[o("table",So,[o("thead",null,[o("tr",null,[Vo,o("th",qo,[o("div",null,[o("select",{class:"form-select",onChange:s[2]||(s[2]=t=>n.applyFiltro("nome_empresa",t.target.value))},[Eo,No,(i(!0),a(u,null,_(e.filters_anunciante,t=>(i(),a("option",{value:t.nome_empresa},c(t.nome_empresa),9,Do))),256))],32)])]),Mo,o("th",Lo,[o("div",null,[o("select",{class:"form-select",onChange:s[3]||(s[3]=t=>n.applyFiltro("status_publicacao",t.target.value))},jo,32)])]),Jo]),Ko]),o("tbody",null,[e.vazio?(i(),a("tr",Go,Qo)):(i(!0),a(u,{key:1},_(n.anunciosFiltrados,t=>(i(),a("tr",{key:t.id},[o("th",Xo,c(t.id),1),o("td",null,c(t.nome_empresa),1),o("td",null,c(t.tipo_veiculo),1),o("td",null,[t.situacao_veiculo==1?(i(),a("span",Yo," Novo ")):m("",!0),t.situacao_veiculo==2?(i(),a("span",Zo," Usado ")):m("",!0)]),o("td",null,c(t.nome_marca),1),o("td",null,c(t.nome_modelo),1),o("td",null,[o("div",ot,[o("div",tt,[t.status_publicacao==1?(i(),a("div",st," Aguardando ")):t.status_publicacao==2?(i(),a("div",et," Activo ")):t.status_publicacao==3?(i(),a("div",it," Recusado ")):t.status_publicacao==4?(i(),a("div",at," Finalizado ")):t.status_publicacao==5?(i(),a("div",lt," Vendido ")):t.status_publicacao==6?(i(),a("div",nt," Bloqueado ")):m("",!0)])])]),o("td",rt,[o("div",ct,[o("span",{onClick:d=>n.showDetalhes(t.id),style:{cursor:"pointer"}},_t,8,dt),o("span",{onClick:d=>n.recarregarDados(t.id),type:"button","data-bs-toggle":"modal","data-bs-target":"#CarregarFotos"},mt,8,ht),o("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarAnuncios",onClick:d=>n.editarAnuncioEmit(t.id)},bt,8,vt),o("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarAnuncio",onClick:d=>n.modalApagar(t.id)},null,8,gt)])])]))),128))])])]),yt]))]),o("div",At,[o("div",wt,[o("div",kt,[o("div",xt,[$t,o("div",Ct,[o("div",Ft,[Tt,o("div",St,[o("button",{type:"button",class:"btn btn-primary",onClick:s[4]||(s[4]=t=>n.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Confirmar ")])])])])])])])])}const qt=x(Z,[["render",Vt]]),Et={name:"TheCriarAnuncio",data(){return{id_anunciante:"",id:"",tipo_veiculo:"",categoria_id:"",photos:[],Api_categorias:[],Api_transmissao:[],Api_combustivel:[],Api_tecnologia:[],Api_cores:[],Api_Seguranca:[],Api_Conforto:[],Api_cores:[],Api_CategOpcionais:[],Api_Opcionais:[],portas:[2,4,6,8,10],Api_fabricante:["BMW","Suzuki","Toyota"],anos:[],marcas:[],modelos:"",marca_id:null,modelo_id:"",ano_modelo:"",desc:"",previewImage:null,estado:"",cidade:"",fabricante:"",ano_fabricante:"",num_portas:"",cor:"",transmissao:"",combustivel:"",kilometro:"",desc:"",conforto:[],seguranca:[],situacao_veiculo:"",vitrine:"",destaque:"",tecnologia:"",mostrar_preco:"sim",valor_preco:"",Api_CategOpcionais:[],selecionados:[],dropdownState:{},opc:[],status_publicacao:""}},methods:{getVitrine(){return this.vitrine?1:0},getDestaque(){return this.destaque?1:0},async criar(){this.titulo=this.marca_id+" "+this.modelo_id+" - "+this.ano_modelo;var l=JSON.stringify(this.selecionados);const s={titulo:this.titulo,tipo_veiculo:this.tipo_veiculo,tecnologia:this.tecnologia,marca_id:this.marca_id,modelo_id:this.modelo_id,numero_cliques:"2",situacao_veiculo:this.situacao_veiculo,anunciante_id:this.id_anunciante,categoria_id:this.categoria_id,data_inicio:"20-02-2021",data_fim:"20-02-2022",ordenacao:"2",status_publicacao:this.status_publicacao,status_pagamento:"1",tipo:"2",vendido:"1",vitrine:this.vitrine,destaque_busca:this.destaque,cep:"12352",estado_id:"2",cidade_id:"3",empresa:"null",tipo_preco:"1",valor_preco:this.valor_preco,mostrar_preco:this.mostrar_preco,fabricante_id:"2",ano_fabricacao:this.ano_fabricante,ano_modelo:this.ano_modelo,carroceria:"null",estilo:"null",portas:this.num_portas,cilindros:"4",motor:"2",cor:this.cor,transmissao:this.transmissao,combustivel:this.combustivel,placa:"null",km:this.kilometro,sinistrado:"null",opcionais_id:l,descricao:this.desc};try{const h=await U(s,this.$store.state.anuncioID);h?(this.$store.state.anuncios=await g(),this.id=h.id,this.$emit("refreshAnuncio",this.id),this.tipo_veiculo="",this.marca_id="",this.modelo_id="",this.situacao_veiculo="",this.categoria_id="",this.estado="",this.cidade="",this.empresa="",this.valor_preco="",this.fabricante="",this.ano_fabricante="",this.ano_modelo="",this.carroceria="",this.estilo="",this.num_portas="",this.cor="",this.transmissao="",this.combustivel="",this.kilometro="",this.conforto="",this.vitrine=!1,this.destaque=!1):this.showErrorMessage=!0}catch(h){console.error("Erro na requisição:",h)}},showCarregarFotos(){},formatarNumero(){let l=this.valor_preco.replace(/[^\d.]/g,"");const s=l.split(".");l=s.shift()+(s.length>0?"."+s.join(""):""),l=l.replace(/\./g,""),l=l.replace(/\B(?=(\d{3})+(?!\d))/g,"."),this.valor_preco=l},toggleDropdown(l){this.$data.dropdownState[l]=!this.$data.dropdownState[l],this.$forceUpdate()},isDropdownOpen(l){return this.$data.dropdownState[l]||!1},filterOpcionais(l){return this.Api_Opcionais.filter(s=>s.categoria_opcional_id===l)},filterMarcas(l){return this.$store.state.marcas.filter(s=>s.tipo_veiculo_id===l)},filterModelos(l){return this.$store.state.modelos.filter(s=>s.id_marca===l)},async showgetDados(){this.anuncios=this.$store.state.anuncios.find(l=>l.id===this.$store.state.anuncioID),this.tipo_veiculo=this.anuncios.tipo_veiculo_id,this.tecnologia=this.anuncios.tecnologia_id,this.marca_id=this.anuncios.id_marca,this.modelo_id=this.anuncios.id_modelo,this.situacao_veiculo=this.anuncios.situacao_veiculo,this.categoria_id=this.anuncios.id_categoria,this.status_publicacao=this.anuncios.status_publicacao,this.anuncios.destaque_busca==1?this.destaque=!0:this.destaque=!1,this.anuncios.vitrine==1?this.vitrine=!0:this.vitrine=!1,this.valor_preco=this.anuncios.valor_preco,this.mostrar_preco=this.anuncios.mostrar_preco,this.ano_fabricante=this.anuncios.ano_fabricacao,this.ano_modelo=this.anuncios.ano_modelo,this.num_portas=this.anuncios.portas,this.cor=this.anuncios.cor_id,this.transmissao=this.anuncios.transmissao_id,this.combustivel=this.anuncios.combustivel_id,this.kilometro=this.anuncios.km,this.selecionados=JSON.parse(this.anuncios.opcionais_id),this.desc=this.anuncios.descricao,this.id_anunciante=this.anuncios.id_anunciante}},async created(){this.$store.state.modelos=await O(),this.$store.state.marcas=await z(),this.Api_categorias=await I(),this.Api_combustivel=await B(),this.Api_transmissao=await R(),this.Api_tecnologia=await H(),this.$store.state.tipo_veiculo=await P(),this.Api_cores=await j(),this.Api_Opcionais=await J(),this.Api_CategOpcionais=await K(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais;for(let l=2025;1990<l;l--)this.anos.push(l)},mounted(){}},Nt={class:"modal fade",id:"EditarAnuncios",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Dt={class:"modal-dialog"},Mt={class:"modal-content"},Lt={class:"bg-dar"},Ut=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[o("span",{class:"fas fa-bullhorn py-2 pt-0"}),A(),o("b",null,"Editar Anúncio")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ot={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},zt={class:"row"},It={class:"py-3"},Bt=o("label",{for:"marca",class:"form-label"},"Status de Publicação",-1),Rt={key:0,value:"1"},Ht={key:1,value:"1",selected:""},Pt={key:2,value:"2"},jt={key:3,value:"2",selected:""},Jt={key:4,value:"3"},Kt={key:5,value:"3",selected:""},Gt={key:6,value:"4"},Wt={key:7,value:"4",selected:""},Qt={key:8,value:"5"},Xt={key:9,value:"5",selected:""},Yt={key:10,value:"6"},Zt={key:11,value:"6",selected:""},os=o("div",{class:"p-2 pt-0 row mb-2 mt-md-1 mt-lg-1",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),ts={class:"mb-3"},ss=o("label",{for:"marca",class:"form-label"},"Situaçao do Veiculo",-1),es=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),is=o("option",{value:"1"},"Novo",-1),as=o("option",{value:"2"},"Usado",-1),ls=[es,is,as],ns={class:"mb-3"},rs=o("label",{for:"marca",class:"form-label"},"Tipo de Veiculo",-1),cs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ds=["value"],us={class:"mb-3"},_s=o("label",{for:"preco",class:"form-label"},"Tecnologia",-1),hs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ps=["value"],ms={class:"mb-3"},vs=o("label",{for:"nome",class:"form-label"},[A("Categoria "),o("span",{style:{opacity:".6"}},"(Opcional)")],-1),fs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),bs=["value"],gs={class:"mb-3"},ys=o("label",{for:"marca",class:"form-label"},"Marca",-1),As=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ws=["value"],ks={class:"mb-3"},xs={class:"mb-3"},$s=o("label",{for:"",class:"form-label"},"Modelo",-1),Cs=o("option",{value:""},"Selecionar",-1),Fs=["value"],Ts={class:"mb-3"},Ss=o("label",{for:"nome",class:"form-label"},"Ano do Modelo",-1),Vs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),qs=["value"],Es=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Preço "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Ns={class:"mb-3"},Ds=o("label",{for:"preco",class:"form-label"},"Preço (R$)",-1),Ms={class:"mb-3"},Ls=o("label",{for:"nome",class:"form-label"},"Mostrar Preço",-1),Us=o("option",{value:"sim",selected:""}," sim ",-1),Os=o("option",{value:"nao"}," nao ",-1),zs=[Us,Os],Is=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Caracteristicas do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Bs={class:"mb-3"},Rs=o("label",{for:"nome",class:"form-label"},"Cor",-1),Hs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Ps=["value"],js={class:"mb-3"},Js=o("label",{for:"nome",class:"form-label"},"Numero de Portas",-1),Ks=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Gs=["value"],Ws={class:"mb-3"},Qs=o("label",{for:"preco",class:"form-label"},"Transmissao",-1),Xs=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Ys=["value"],Zs={class:"mb-3"},oe=o("label",{for:"preco",class:"form-label"},"Combustivel",-1),te=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),se=["value"],ee={class:"mb-3"},ie=o("label",{for:"preco",class:"form-label"},"Kilometragem",-1),ae=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px","background-color":"crimson !important"}}," Privilegios "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),le={class:"mb-2 mt-2 check"},ne=o("label",{for:"vitrine",class:"ms-2 form-label"},"Adicionar na vitrine",-1),re={class:"mb-2 check"},ce=o("label",{for:"destaque",class:"ms-2 form-label"},"Marcar como destaque",-1),de=o("div",{class:"p-2 pt-0 row mt-md-4 mt-lg-4 mb-2",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Opcionais & Itens de Serie "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),ue={class:"mb-3"},_e=["onClick"],he={class:"ms-2"},pe={key:0,class:"mb-2 pt-2"},me=["id","value"],ve=["for"],fe={class:"mb-3"},be=o("label",{for:"desc",class:"form-label"},[A("Descriçao "),o("span",{style:{opacity:"0.6"}},"(Opcional)")],-1),ge={class:"modal-footer"},ye={style:{display:"flex","flex-wrap":"wrap"}},Ae=o("div",{class:"col-6"},[o("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),we={class:"col-6"};function ke(l,s,h,v,e,n){return i(),a("div",Nt,[o("div",Dt,[o("div",Mt,[o("div",Lt,[Ut,o("div",Ot,[o("form",null,[o("div",zt,[o("div",It,[Bt,r(o("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>e.status_publicacao=t),class:"form-select"},[e.status_publicacao!=="1"?(i(),a("option",Rt," Aguardando ")):(i(),a("option",Ht," Aguardando ")),e.status_publicacao!=="2"?(i(),a("option",Pt," Activo ")):(i(),a("option",jt," Activo ")),e.status_publicacao!=="3"?(i(),a("option",Jt," Recusado ")):(i(),a("option",Kt," Recusado ")),e.status_publicacao!=="4"?(i(),a("option",Gt," Finalizado ")):(i(),a("option",Wt," Finalizado ")),e.status_publicacao!=="5"?(i(),a("option",Qt," Vendido ")):(i(),a("option",Xt," Vendido ")),e.status_publicacao!=="6"?(i(),a("option",Yt," Bloqueado ")):(i(),a("option",Zt," Bloqueado "))],512),[[p,e.status_publicacao]])]),os,o("div",ts,[o("div",null,[ss,r(o("select",{"onUpdate:modelValue":s[1]||(s[1]=t=>e.situacao_veiculo=t),class:"form-select"},ls,512),[[p,e.situacao_veiculo]])])]),o("div",ns,[o("div",null,[rs,r(o("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>e.tipo_veiculo=t),class:"form-select"},[cs,(i(!0),a(u,null,_(l.$store.state.tipo_veiculo,t=>(i(),a("option",{value:t.id,key:t.id},c(t.tipo_veiculo),9,ds))),128))],512),[[p,e.tipo_veiculo]])])]),o("div",us,[_s,r(o("select",{"onUpdate:modelValue":s[3]||(s[3]=t=>e.tecnologia=t),class:"form-select"},[hs,(i(!0),a(u,null,_(e.Api_tecnologia,t=>(i(),a("option",{value:t.id,key:t.id},c(t.tecnologia),9,ps))),128))],512),[[p,e.tecnologia]])]),o("div",ms,[vs,r(o("select",{"onUpdate:modelValue":s[4]||(s[4]=t=>e.categoria_id=t),class:"form-select"},[fs,(i(!0),a(u,null,_(e.Api_categorias,t=>(i(),a("option",{value:t.id,key:t.id},c(t.nome),9,bs))),128))],512),[[p,e.categoria_id]])]),o("div",gs,[o("div",null,[ys,r(o("select",{"onUpdate:modelValue":s[5]||(s[5]=t=>e.marca_id=t),class:"form-select"},[As,(i(!0),a(u,null,_(n.filterMarcas(e.tipo_veiculo),t=>(i(),a("option",{value:t.id,key:t.id},c(t.nome_marca),9,ws))),128))],512),[[p,e.marca_id]])])]),o("div",ks,[o("div",null,[o("div",xs,[$s,r(o("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[6]||(s[6]=t=>e.modelo_id=t)},[Cs,(i(!0),a(u,null,_(n.filterModelos(e.marca_id),t=>(i(),a("option",{value:t.id,key:t.id},c(t.nome_modelo),9,Fs))),128))],512),[[p,e.modelo_id]])])])]),o("div",Ts,[Ss,r(o("select",{class:"form-select","onUpdate:modelValue":s[7]||(s[7]=t=>e.ano_modelo=t)},[Vs,(i(!0),a(u,null,_(e.anos,(t,d)=>(i(),a("option",{value:t,key:d},c(t),9,qs))),128))],512),[[p,e.ano_modelo]])]),Es,o("div",Ns,[Ds,r(o("input",{type:"text",class:"text form-control",id:"preco","onUpdate:modelValue":s[8]||(s[8]=t=>e.valor_preco=t),onKeyup:s[9]||(s[9]=(...t)=>n.formatarNumero&&n.formatarNumero(...t)),placeholder:""},null,544),[[y,e.valor_preco]])]),o("div",Ms,[Ls,r(o("select",{"onUpdate:modelValue":s[10]||(s[10]=t=>e.mostrar_preco=t),class:"form-select"},zs,512),[[p,e.mostrar_preco]])]),Is,o("div",Bs,[Rs,r(o("select",{"onUpdate:modelValue":s[11]||(s[11]=t=>e.cor=t),class:"form-select"},[Hs,(i(!0),a(u,null,_(e.Api_cores,t=>(i(),a("option",{value:t.id,key:t.id},c(t.cor),9,Ps))),128))],512),[[p,e.cor]])]),o("div",js,[Js,r(o("select",{"onUpdate:modelValue":s[12]||(s[12]=t=>e.num_portas=t),class:"form-select"},[Ks,(i(!0),a(u,null,_(e.portas,(t,d)=>(i(),a("option",{value:t,key:d},c(t),9,Gs))),128))],512),[[p,e.num_portas]])]),o("div",Ws,[Qs,r(o("select",{"onUpdate:modelValue":s[13]||(s[13]=t=>e.transmissao=t),class:"form-select"},[Xs,(i(!0),a(u,null,_(e.Api_transmissao,t=>(i(),a("option",{value:t.id,key:t.id},c(t.transmissao),9,Ys))),128))],512),[[p,e.transmissao]])]),o("div",Zs,[oe,r(o("select",{"onUpdate:modelValue":s[14]||(s[14]=t=>e.combustivel=t),class:"form-select"},[te,(i(!0),a(u,null,_(e.Api_combustivel,t=>(i(),a("option",{value:t.id,key:t.id},c(t.combustivel),9,se))),128))],512),[[p,e.combustivel]])]),o("div",ee,[ie,r(o("input",{type:"number",class:"text form-control",id:"preco","onUpdate:modelValue":s[15]||(s[15]=t=>e.kilometro=t),min:"0",max:"100"},null,512),[[y,e.kilometro]])]),ae,o("div",le,[r(o("input",{type:"checkbox","onUpdate:modelValue":s[16]||(s[16]=t=>e.vitrine=t),id:"vitrine",onClick:s[17]||(s[17]=(...t)=>n.getVitrine&&n.getVitrine(...t))},null,512),[[k,e.vitrine]]),ne]),o("div",re,[r(o("input",{type:"checkbox","onUpdate:modelValue":s[18]||(s[18]=t=>e.destaque=t),id:"destaque",onClick:s[19]||(s[19]=(...t)=>n.getDestaque&&n.getDestaque(...t))},null,512),[[k,e.destaque]]),ce]),de,o("div",ue,[(i(!0),a(u,null,_(e.Api_CategOpcionais,t=>(i(),a("div",{key:t.id},[o("p",{onClick:d=>n.toggleDropdown(t.id),style:{cursor:"pointer",opacity:"1",margin:"0"}},[o("span",{class:W({"arrow-down":n.isDropdownOpen(t.id)})},"►",2),o("span",he,c(t.nome),1)],8,_e),n.isDropdownOpen(t.id)?(i(),a("div",pe,[(i(!0),a(u,null,_(n.filterOpcionais(t.id),d=>(i(),a("div",{key:d.id,class:"ps-4"},[r(o("input",{type:"checkbox",id:"checkbox_"+d.id,value:d.id,"onUpdate:modelValue":s[20]||(s[20]=w=>e.selecionados=w),class:"me-2"},null,8,me),[[k,e.selecionados]]),o("label",{for:"checkbox_"+d.id},c(d.nome),9,ve)]))),128))])):m("",!0)]))),128))]),o("div",fe,[be,r(o("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":s[21]||(s[21]=t=>e.desc=t)},null,512),[[y,e.desc]])])])])]),o("div",ge,[o("div",ye,[Ae,o("div",we,[o("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[22]||(s[22]=t=>n.criar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Actualizar")])])])])])])])}const xe=x(Et,[["render",ke]]);const $e={components:{TheNavTop:V,TheAdminNavLateral2:q,TheAnuciosAdmin:qt,TheCriarAnuncio:X,TheCarregarFoto:Y,TheEditarAnuncioAdmin:xe,loader:G},data(){return{TheAdminNavLateral2:"",exibeModalCarregarFoto:!1,loading:!1}},methods:{handle_showHidden_menu_lateral(){this.TheAdminNavLateral2.classList.toggle("showHidden_menu-lateral")},async refreshAnuncioVar(l){this.$store.state.anuncioID=l,this.$refs.TheAnuciosAdmin.recarregarDados(this.$store.state.anuncioID),this.$refs.theCarregarFoto.exibeCarregarFoto(),this.$store.state.anuncioID=l},showCarregarFotos(){this.$refs.theCriarAnuncio.showCarregarFotos()},showCarregarFotos(){this.$refs.theCarregarFoto.refreshFotos()},editarAnuncioNow(l){this.$store.state.anuncioID=l,this.$refs.TheEditarAnuncioAdmin.showgetDados()},exibeCarregarFoto(){this.exibeModalCarregarFoto=!0,this.$refs.theCarregarFoto.showCarregarFotos()},refrescandoFotosNow(){this.$refs.TheAnuciosAdmin.recarregarDados()},hiddenLoadingNow(){this.loading=!1}},mounted(){this.TheAdminNavLateral2=document.getElementById("TheAdminNavLateral2")}},Ce={id:"TheAdminNavLateral2",class:"menu-lateral showHidden_menu-lateral"},Fe={key:0,class:"loader"};function Te(l,s,h,v,e,n){const t=f("TheNavTop"),d=f("TheAdminNavLateral2"),w=f("TheAnuciosAdmin"),C=f("TheCriarAnuncio"),F=f("TheCarregarFoto"),T=f("TheEditarAnuncioAdmin"),S=f("loader");return i(),a("div",null,[b(t),o("div",Ce,[b(d,{onShow_menu_lateral:n.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),b(w,{onShow_menu_lateral:n.handle_showHidden_menu_lateral,onHanddleCarregarFotos:n.showCarregarFotos,onEditarAnuncio:n.editarAnuncioNow,ref:"theAnuncios",onHiddenLoading:n.hiddenLoadingNow,onCaregouFotos:n.refrescandoFotosNow},null,8,["onShow_menu_lateral","onHanddleCarregarFotos","onEditarAnuncio","onHiddenLoading","onCaregouFotos"]),b(C,{onRefreshAnuncio:n.refreshAnuncioVar,ref:"theCriarAnuncio"},null,8,["onRefreshAnuncio"]),o("div",null,[b(F,{ref:"theCarregarFoto",onRefrescandoFotos:n.refrescandoFotosNow},null,8,["onRefrescandoFotos"])]),b(T,{ref:"TheEditarAnuncioAdmin"},null,512),e.loading?(i(),a("div",Fe,[b(S)])):m("",!0)])}const Le=x($e,[["render",Te]]);export{Le as default};
