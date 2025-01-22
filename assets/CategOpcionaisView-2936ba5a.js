import{T as w}from"./TheNavTop-bb06d884.js";import{T as C}from"./TheAdminNavLateral2-9d3ad7ca.js";import{_ as p,aJ as $,x as h,aK as O,o as n,c as d,a,F as T,j as k,d as b,v,h as g,f,t as u,aL as M,r,b as c}from"./index-0997f6a7.js";import"./TheForm_Login-8bbf5b0d.js";import"./loader-dfb34e1c.js";const E={name:"TheMarcas",data(){return{categoriaOpcionais:[],nome:"",desc:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const e={nome:this.nome};try{(await $(e,this.id)).data?this.$store.state.categoriaOpcionais=await h():this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}},showgetDados(e){this.id=e,this.categoriaOpcionais=this.$store.state.categoriaOpcionais.find(s=>s.id===this.id),this.nome=this.categoriaOpcionais.nome},modalApagar(e){this.id=e},async apagar(){try{const e=await O(this.id);setTimeout(async function(){this.$store.state.categoriaOpcionais=await h()}.bind(this),2e3),e.data||(this.showErrorMessage=!0)}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}}},async created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.$store.state.categoriaOpcionais=await h()},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},A={class:"content"},L={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},N={class:"row"},D={class:"col-8 col-lg-10"},F={class:"row"},q={class:"col-2 pesquisar-filter p-0"},S=a("i",{class:"fas fa-filter fa-lg"},null,-1),V=[S],z=a("div",{class:"col-10 col-lg-6 p-0"},[a("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[a("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),a("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=g('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),I=a("div",null,[a("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[a("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[a("b",null,"Admin/Categoria Opcionais")])])],-1),B={class:"position-relative",style:{height:"72vh"}},j={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},U={class:"table"},J=a("thead",{style:{"background-color":"crimson",color:"#fff"}},[a("tr",null,[a("th",{scope:"col"},"#"),a("th",{scope:"col"},"Categoria Opcionais"),a("th",{scope:"col"},"Descrição"),a("th",{scope:"col",class:"text-center"},"Ações")])],-1),K={scope:"row"},R=a("td",null,"-----",-1),G={class:"text-center"},P={style:{width:"100%"}},Q=a("i",{class:"fas fa-eye"},null,-1),W=[Q],X=["onClick"],Y=a("i",{class:"fas fa-pencil-alt"},null,-1),Z=[Y],aa=["onClick"],sa=a("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCategOpcionais"},[a("i",{class:"fas fa-plus"})],-1),ta={class:"modal fade",id:"EditarMarca",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ea={class:"modal-dialog"},oa={class:"modal-content"},ia={class:"bg-dar",id:"criarAnuncio"},la=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[a("span",{class:"fas fa-bullhorn py-2 pt-0"}),f(),a("b",null,"Editar Marca")]),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),na={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},da={class:"mb-3"},ra=a("label",{for:"nome",class:"form-label"},"Categ. Opcional",-1),ca={class:"modal-footer"},ha={style:{display:"flex","flex-wrap":"wrap"}},pa=a("div",{class:"col-6"},[a("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),_a={class:"col-6"},ma={class:"modal fade",id:"EliminarMarca",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ua={class:"modal-dialog"},ba={class:"modal-content"},va={class:"bg-dar",id:"criarAnuncio"},ga=g('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Marca</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5>Confirme antes de <span style="color:red;">Eliminar</span>!</h5></div></div>',2),fa={class:"modal-footer"},ya={style:{display:"flex","flex-wrap":"wrap"}},xa=a("div",{class:"col-6"},[a("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),wa={class:"col-6"};function Ca(e,s,_,m,i,o){return n(),d("main",A,[a("div",L,[a("div",N,[a("div",D,[a("div",F,[a("div",q,[a("div",{class:"pt-2",onClick:s[0]||(s[0]=(...t)=>o.show_menu_lateral&&o.show_menu_lateral(...t))},V)]),z])]),H])]),I,a("div",B,[a("div",j,[a("table",U,[J,a("tbody",null,[(n(!0),d(T,null,k(e.$store.state.categoriaOpcionais,t=>(n(),d("tr",{key:t.id},[a("th",K,u(t.id),1),a("td",null,u(t.nome),1),R,a("td",G,[a("div",P,[a("span",{onClick:s[1]||(s[1]=(...l)=>o.showDetalhes&&o.showDetalhes(...l)),hidden:""},W),a("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarMarca",onClick:l=>o.showgetDados(t.id)},Z,8,X),a("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarMarca",onClick:l=>o.modalApagar(t.id)},null,8,aa)])])]))),128))])])]),sa]),a("div",ta,[a("div",ea,[a("div",oa,[a("div",ia,[la,a("div",na,[a("form",null,[a("div",da,[ra,b(a("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[2]||(s[2]=t=>i.nome=t)},null,512),[[v,i.nome]])])])]),a("div",ca,[a("div",ha,[pa,a("div",_a,[a("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[3]||(s[3]=t=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Atualizar ")])])])])])])]),a("div",ma,[a("div",ua,[a("div",ba,[a("div",va,[ga,a("div",fa,[a("div",ya,[xa,a("div",wa,[a("button",{type:"button",class:"btn btn-primary",onClick:s[4]||(s[4]=t=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Confirmar ")])])])])])])])])}const $a=p(E,[["render",Ca]]),Oa={name:"TheAddCategoria",data(){return{nome:""}},methods:{async add(){const e={nome:this.nome};try{await M(e)?(this.$store.state.categoriaOpcionais=await h(),this.nome=""):this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}}}},Ta={class:"modal fade",id:"IDaddCategOpcionais",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ka={class:"modal-dialog"},Ma={class:"modal-content"},Ea={class:"bg-dar"},Aa=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"exampleModalLabel"},[a("span",{class:"far fa-user py-2 pt-0"}),f(),a("b",null,"Adicionar Categoria Opcionais")]),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),La={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Na={class:"mb-3"},Da=a("label",{for:"nome",class:"form-label"},"Categ. Opcionais",-1),Fa={class:"modal-footer"},qa={style:{display:"flex","flex-wrap":"wrap"}},Sa=a("div",{class:"col-6"},[a("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Va={class:"col-6"};function za(e,s,_,m,i,o){return n(),d("div",Ta,[a("div",ka,[a("div",Ma,[a("div",Ea,[Aa,a("div",La,[a("form",null,[a("div",Na,[Da,b(a("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[0]||(s[0]=t=>i.nome=t)},null,512),[[v,i.nome]])])])]),a("div",Fa,[a("div",qa,[Sa,a("div",Va,[a("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[1]||(s[1]=t=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Ha=p(Oa,[["render",za]]),Ia={components:{TheNavTop:w,TheAdminNavLateral2:C,TheCategOpcionais:$a,TheAddCategOpcionais:Ha},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Ba={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function ja(e,s,_,m,i,o){const t=r("TheNavTop"),l=r("TheAdminNavLateral2"),y=r("TheCategOpcionais"),x=r("TheAddCategOpcionais");return n(),d("div",null,[c(t),a("div",Ba,[c(l,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(y,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(x)])}const Pa=p(Ia,[["render",ja]]);export{Pa as default};
