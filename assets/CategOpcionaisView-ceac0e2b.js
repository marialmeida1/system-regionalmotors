import{T as x}from"./TheNavTop-4a3669d1.js";import{T as C}from"./TheAdminNavLateral2-25015967.js";import{an as $,g as h,ao as O,ap as T}from"./TheForm_Login-2bf4b8c0.js";import{_ as p,o as n,c as d,a,F as E,i as k,f as b,v as g,e as v,d as f,t as u,r,b as c}from"./index-11efcf57.js";import"./logo-5b4cc875.js";const M={name:"TheMarcas",data(){return{categoriaOpcionais:[],nome:"",desc:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const t={nome:this.nome};try{const s=await $(t,this.id);console.log("Ja esta"+s),s.data?this.$store.state.categoriaOpcionais=await h():this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}},showgetDados(t){this.id=t,this.categoriaOpcionais=this.$store.state.categoriaOpcionais.find(s=>s.id===this.id),console.log("Novo dado"),this.nome=this.categoriaOpcionais.nome},modalApagar(t){this.id=t,console.log(t)},async apagar(){console.log("Eliminando "+this.id);try{const t=await O(this.id);console.log("temp Ja eliminando"+t),setTimeout(async function(){this.$store.state.categoriaOpcionais=await h()}.bind(this),2e3),t.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}}},async created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.$store.state.categoriaOpcionais=await h()},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},N={class:"content"},A={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},L={class:"row"},D={class:"col-8 col-lg-10"},F={class:"row"},q={class:"col-2 pesquisar-filter p-0"},S=a("i",{class:"fas fa-filter fa-lg"},null,-1),V=[S],z=a("div",{class:"col-10 col-lg-6 p-0"},[a("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[a("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),a("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=v('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),I=a("div",null,[a("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[a("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[a("b",null,"Admin/Categoria Opcionais")])])],-1),B={class:"position-relative",style:{height:"72vh"}},J={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},U={class:"table"},j=a("thead",{style:{"background-color":"crimson",color:"#fff"}},[a("tr",null,[a("th",{scope:"col"},"#"),a("th",{scope:"col"},"Categoria Opcionais"),a("th",{scope:"col"},"Descrição"),a("th",{scope:"col",class:"text-center"},"Açoes")])],-1),R={scope:"row"},G=a("td",null," ----- ",-1),K={class:"text-center"},P={style:{width:"100%"}},Q=a("i",{class:"fas fa-eye"},null,-1),W=[Q],X=["onClick"],Y=a("i",{class:"fas fa-pencil-alt"},null,-1),Z=[Y],aa=["onClick"],sa=a("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCategOpcionais"},[a("i",{class:"fas fa-plus"})],-1),ta={class:"modal fade",id:"EditarMarca",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ea={class:"modal-dialog"},oa={class:"modal-content"},ia={class:"bg-dar",id:"criarAnuncio"},la=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[a("span",{class:"fas fa-bullhorn py-2 pt-0"}),f(),a("b",null,"Editar Marca")]),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),na={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},da={class:"mb-3"},ra=a("label",{for:"nome",class:"form-label"},"Categ. Opcional",-1),ca={class:"modal-footer"},ha={style:{display:"flex","flex-wrap":"wrap"}},pa=a("div",{class:"col-6"},[a("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ma={class:"col-6"},_a={class:"modal fade",id:"EliminarMarca",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ua={class:"modal-dialog"},ba={class:"modal-content"},ga={class:"bg-dar",id:"criarAnuncio"},va=v('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Marca</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),fa={class:"modal-footer"},ya={style:{display:"flex","flex-wrap":"wrap"}},wa=a("div",{class:"col-6"},[a("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),xa={class:"col-6"};function Ca(t,s,m,_,i,o){return n(),d("main",N,[a("div",A,[a("div",L,[a("div",D,[a("div",F,[a("div",q,[a("div",{class:"pt-2",onClick:s[0]||(s[0]=(...e)=>o.show_menu_lateral&&o.show_menu_lateral(...e))},V)]),z])]),H])]),I,a("div",B,[a("div",J,[a("table",U,[j,a("tbody",null,[(n(!0),d(E,null,k(t.$store.state.categoriaOpcionais,e=>(n(),d("tr",{key:e.id},[a("th",R,u(e.id),1),a("td",null,u(e.nome),1),G,a("td",K,[a("div",P,[a("span",{onClick:s[1]||(s[1]=(...l)=>o.showDetalhes&&o.showDetalhes(...l)),hidden:""},W),a("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarMarca",onClick:l=>o.showgetDados(e.id)},Z,8,X),a("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarMarca",onClick:l=>o.modalApagar(e.id)},null,8,aa)])])]))),128))])])]),sa]),a("div",ta,[a("div",ea,[a("div",oa,[a("div",ia,[la,a("div",na,[a("form",null,[a("div",da,[ra,b(a("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[2]||(s[2]=e=>i.nome=e)},null,512),[[g,i.nome]])])])]),a("div",ca,[a("div",ha,[pa,a("div",ma,[a("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[3]||(s[3]=e=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),a("div",_a,[a("div",ua,[a("div",ba,[a("div",ga,[va,a("div",fa,[a("div",ya,[wa,a("div",xa,[a("button",{type:"button",class:"btn btn-primary",onClick:s[4]||(s[4]=e=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const $a=p(M,[["render",Ca]]),Oa={name:"TheAddCategoria",data(){return{nome:""}},methods:{async add(){const t={nome:this.nome};try{const s=await T(t);console.log("resposta: "+s),s?(this.$store.state.categoriaOpcionais=await h(),this.nome=""):this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}}}},Ta={class:"modal fade",id:"IDaddCategOpcionais",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ea={class:"modal-dialog"},ka={class:"modal-content"},Ma={class:"bg-dar"},Na=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"exampleModalLabel"},[a("span",{class:"far fa-user py-2 pt-0"}),f(),a("b",null,"Adicionar Categoria Opcionais")]),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Aa={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},La={class:"mb-3"},Da=a("label",{for:"nome",class:"form-label"},"Categ. Opcionais",-1),Fa={class:"modal-footer"},qa={style:{display:"flex","flex-wrap":"wrap"}},Sa=a("div",{class:"col-6"},[a("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Va={class:"col-6"};function za(t,s,m,_,i,o){return n(),d("div",Ta,[a("div",Ea,[a("div",ka,[a("div",Ma,[Na,a("div",Aa,[a("form",null,[a("div",La,[Da,b(a("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[0]||(s[0]=e=>i.nome=e)},null,512),[[g,i.nome]])])])]),a("div",Fa,[a("div",qa,[Sa,a("div",Va,[a("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[1]||(s[1]=e=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Ha=p(Oa,[["render",za]]),Ia={components:{TheNavTop:x,TheAdminNavLateral2:C,TheCategOpcionais:$a,TheAddCategOpcionais:Ha},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){console.log("editar Categoria"),this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Ba={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Ja(t,s,m,_,i,o){const e=r("TheNavTop"),l=r("TheAdminNavLateral2"),y=r("TheCategOpcionais"),w=r("TheAddCategOpcionais");return n(),d("div",null,[c(e),a("div",Ba,[c(l,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(y,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(w)])}const Pa=p(Ia,[["render",Ja]]);export{Pa as default};
