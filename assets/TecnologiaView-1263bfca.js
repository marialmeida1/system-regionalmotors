import{T as w}from"./TheNavTop-e34964ce.js";import{T}from"./TheAdminNavLateral2-196ff783.js";import{_ as m,as as $,J as h,at as C,o as n,c as d,a as s,F as E,j as k,d as b,v,h as g,f,t as u,au as N,r,b as c}from"./index-7d06fc67.js";import"./TheForm_Login-c7d0df27.js";import"./loader-d17fc8a7.js";const A={name:"Thetecnologia",data(){return{tecnologia:[],nome:"",desc:"desc"}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const o={tecnologia:this.nome,descricao:this.desc};try{(await $(o,this.id)).data?this.$store.state.tecnologia=await h():this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},showgetDados(o){this.id=o,this.tecnologia=this.$store.state.tecnologia.find(t=>t.id==this.id),this.nome=this.tecnologia.tecnologia,this.desc=this.tecnologia.descricao},modalApagar(o){this.id=o},async apagar(){try{const o=await C(this.id);setTimeout(async function(){this.$store.state.tecnologia=await h()}.bind(this),2e3),o.data||(this.showErrorMessage=!0)}catch(o){console.error("Erro na requisição:",o),this.showErrorMessage=!0}}},async created(){this.$store.state.tecnologia=await h(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})},computed:{anunciosReversos(){return[...this.$store.state.tecnologia].reverse()}}},L={class:"content"},M={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},D={class:"row"},F={class:"col-8 col-lg-10"},q={class:"row"},S={class:"col-2 pesquisar-filter p-0"},V=s("i",{class:"fas fa-filter fa-lg"},null,-1),I=[V],z=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=g('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Tecnologia")])])],-1),R={class:"position-relative",style:{height:"72vh"}},j={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},U={class:"table"},J=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Nome"),s("th",{scope:"col"},"Descrição"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),G={scope:"row"},K=s("td",null," ---- ",-1),O={class:"text-center"},P={style:{width:"100%"}},Q=s("i",{class:"fas fa-eye"},null,-1),W=[Q],X=["onClick"],Y=s("i",{class:"fas fa-pencil-alt"},null,-1),Z=[Y],ss=["onClick"],ts=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddTecnologia"},[s("i",{class:"fas fa-plus"})],-1),es={class:"modal fade",id:"EditarTecnologia",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},as={class:"modal-dialog"},os={class:"modal-content"},is={class:"bg-dar",id:"criarAnuncio"},ls=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),f(),s("b",null,"Editar Tecnologia")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ns={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ds={class:"mb-3"},rs=s("label",{for:"nome",class:"form-label"},"Nome",-1),cs={class:"modal-footer"},hs={style:{display:"flex","flex-wrap":"wrap"}},ms=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),_s={class:"col-6"},ps={class:"modal fade",id:"EliminarTecnologia",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},us={class:"modal-dialog"},bs={class:"modal-content"},vs={class:"bg-dar",id:"criarAnuncio"},gs=g('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Estado</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),fs={class:"modal-footer"},ys={style:{display:"flex","flex-wrap":"wrap"}},xs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ws={class:"col-6"};function Ts(o,t,_,p,i,a){return n(),d("main",L,[s("div",M,[s("div",D,[s("div",F,[s("div",q,[s("div",S,[s("div",{class:"pt-2",onClick:t[0]||(t[0]=(...e)=>a.show_menu_lateral&&a.show_menu_lateral(...e))},I)]),z])]),H])]),B,s("div",R,[s("div",j,[s("table",U,[J,s("tbody",null,[(n(!0),d(E,null,k(a.anunciosReversos,e=>(n(),d("tr",{key:e.id},[s("th",G,u(e.id),1),s("td",null,u(e.tecnologia),1),K,s("td",O,[s("div",P,[s("span",{onClick:t[1]||(t[1]=(...l)=>a.showDetalhes&&a.showDetalhes(...l)),hidden:""},W),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarTecnologia",onClick:l=>a.showgetDados(e.id)},Z,8,X),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarTecnologia",onClick:l=>a.modalApagar(e.id)},null,8,ss)])])]))),128))])])]),ts]),s("div",es,[s("div",as,[s("div",os,[s("div",is,[ls,s("div",ns,[s("form",null,[s("div",ds,[rs,b(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[2]||(t[2]=e=>i.nome=e)},null,512),[[v,i.nome]])])])]),s("div",cs,[s("div",hs,[ms,s("div",_s,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[3]||(t[3]=e=>a.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Atualizar")])])])])])])]),s("div",ps,[s("div",us,[s("div",bs,[s("div",vs,[gs,s("div",fs,[s("div",ys,[xs,s("div",ws,[s("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=e=>a.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const $s=m(A,[["render",Ts]]),Cs={name:"TheAddCategoria",data(){return{nome:"",desc:"desc"}},methods:{async add(){const o={tecnologia:this.nome,descricao:this.desc};try{await N(o)?(this.$store.state.adminID=null,this.$store.state.tecnologia=await h(),this.nome="",this.desc=""):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}}}},Es={class:"modal fade",id:"IDaddTecnologia",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ks={class:"modal-dialog"},Ns={class:"modal-content"},As={class:"bg-dar"},Ls=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),f(),s("b",null,"Adicionar Tecnologia")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ms={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Ds={class:"mb-3"},Fs=s("label",{for:"nome",class:"form-label"},"Nome",-1),qs={class:"modal-footer"},Ss={style:{display:"flex","flex-wrap":"wrap"}},Vs=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Is={class:"col-6"};function zs(o,t,_,p,i,a){return n(),d("div",Es,[s("div",ks,[s("div",Ns,[s("div",As,[Ls,s("div",Ms,[s("form",null,[s("div",Ds,[Fs,b(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[0]||(t[0]=e=>i.nome=e)},null,512),[[v,i.nome]])])])]),s("div",qs,[s("div",Ss,[Vs,s("div",Is,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[1]||(t[1]=e=>a.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Hs=m(Cs,[["render",zs]]),Bs={components:{TheNavTop:w,TheAdminNavLateral2:T,TheTecnologia:$s,TheAddTecnologia:Hs},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){console.log("editar Categoria"),this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Rs={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function js(o,t,_,p,i,a){const e=r("TheNavTop"),l=r("TheAdminNavLateral2"),y=r("TheTecnologia"),x=r("TheAddTecnologia");return n(),d("div",null,[c(e),s("div",Rs,[c(l,{onShow_menu_lateral:a.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(y,{onShow_menu_lateral:a.handle_showHidden_menu_lateral,onEditarCategoria:a.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(x)])}const Ps=m(Bs,[["render",js]]);export{Ps as default};
