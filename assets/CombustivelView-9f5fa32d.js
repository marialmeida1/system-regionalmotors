import{T as x}from"./TheNavTop-1d879415.js";import{T as C}from"./TheAdminNavLateral2-c1e302d7.js";import{a3 as T,p as m,a4 as $,a5 as E}from"./loader-4af9b9ee.js";import{_,o as d,c as n,a as s,F as k,i as N,e as h,v as u,h as y,d as p,t as b,r,b as c}from"./index-a9fdde74.js";import"./TheForm_Login-5bf8b90e.js";import"./logo-5b4cc875.js";const A={name:"Thecombustivel",data(){return{combustivel:[],nome:"",desc:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const o={combustivel:this.nome,descricao:this.desc};try{const t=await T(o,this.id);console.log("Ja esta"+t),t.data?this.$store.state.combustivel=await m():this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},showgetDados(o){this.id=o,this.combustivel=this.$store.state.combustivel.find(t=>t.id===this.id),console.log("Novo dado"),this.nome=this.combustivel.combustivel,this.desc=this.combustivel.descricao},modalApagar(o){this.id=o,console.log(o)},async apagar(){console.log("Eliminando "+this.id);try{const o=await $(this.id);console.log("temp Ja eliminando"+o),setTimeout(async function(){this.$store.state.combustivel=await m()}.bind(this),2e3),o.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(o){console.error("Erro na requisição:",o),this.showErrorMessage=!0}}},async created(){this.$store.state.combustivel=await m(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},L={class:"content"},D={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},M={class:"row"},F={class:"col-8 col-lg-10"},q={class:"row"},V={class:"col-2 pesquisar-filter p-0"},S=s("i",{class:"fas fa-filter fa-lg"},null,-1),I=[S],z=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=y('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Combustivel")])])],-1),U={class:"position-relative",style:{height:"72vh"}},J={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},j={class:"table"},O=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Nome"),s("th",{scope:"col"},"Descrição"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),R={scope:"row"},G={class:"text-center"},K={style:{width:"100%"}},P=s("i",{class:"fas fa-eye"},null,-1),Q=[P],W=["onClick"],X=s("i",{class:"fas fa-pencil-alt"},null,-1),Y=[X],Z=["onClick"],ss=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCombustivel"},[s("i",{class:"fas fa-plus"})],-1),ts={class:"modal fade",id:"EditarCombustivel",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},es={class:"modal-dialog"},os={class:"modal-content"},as={class:"bg-dar",id:"criarAnuncio"},ls=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),p(),s("b",null,"Editar Combustivel")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),is={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ds={class:"mb-3"},ns=s("label",{for:"nome",class:"form-label"},"Nome",-1),rs={class:"mb-3"},cs=s("label",{for:"desc",class:"form-label"},"Descriçao",-1),ms={class:"modal-footer"},hs={style:{display:"flex","flex-wrap":"wrap"}},us=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),bs={class:"col-6"},_s={class:"modal fade",id:"EliminarCombustivel",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ps={class:"modal-dialog"},vs={class:"modal-content"},fs={class:"bg-dar",id:"criarAnuncio"},ys=y('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Combustivel</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),gs={class:"modal-footer"},ws={style:{display:"flex","flex-wrap":"wrap"}},xs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Cs={class:"col-6"};function Ts(o,t,v,f,l,a){return d(),n("main",L,[s("div",D,[s("div",M,[s("div",F,[s("div",q,[s("div",V,[s("div",{class:"pt-2",onClick:t[0]||(t[0]=(...e)=>a.show_menu_lateral&&a.show_menu_lateral(...e))},I)]),z])]),H])]),B,s("div",U,[s("div",J,[s("table",j,[O,s("tbody",null,[(d(!0),n(k,null,N(o.$store.state.combustivel,e=>(d(),n("tr",{key:e.id},[s("th",R,b(e.id),1),s("td",null,b(e.combustivel),1),s("td",null,b(e.descricao),1),s("td",G,[s("div",K,[s("span",{onClick:t[1]||(t[1]=(...i)=>a.showDetalhes&&a.showDetalhes(...i)),hidden:""},Q),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarCombustivel",onClick:i=>a.showgetDados(e.id)},Y,8,W),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarCombustivel",onClick:i=>a.modalApagar(e.id)},null,8,Z)])])]))),128))])])]),ss]),s("div",ts,[s("div",es,[s("div",os,[s("div",as,[ls,s("div",is,[s("form",null,[s("div",ds,[ns,h(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[2]||(t[2]=e=>l.nome=e)},null,512),[[u,l.nome]])]),s("div",rs,[cs,h(s("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":t[3]||(t[3]=e=>l.desc=e)},null,512),[[u,l.desc]])])])]),s("div",ms,[s("div",hs,[us,s("div",bs,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[4]||(t[4]=e=>a.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),s("div",_s,[s("div",ps,[s("div",vs,[s("div",fs,[ys,s("div",gs,[s("div",ws,[xs,s("div",Cs,[s("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=e=>a.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const $s=_(A,[["render",Ts]]),Es={name:"TheAddCombustivel",data(){return{nome:"",desc:""}},methods:{async add(){const o={combustivel:this.nome,descricao:this.desc};try{const t=await E(o);console.log("resposta: "+t),t?(console.log("Eliminado... "+t.id),this.$store.state.adminID=null,this.$store.state.combustivel=await m(),this.nome="",this.desc=""):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}}}},ks={class:"modal fade",id:"IDaddCombustivel",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ns={class:"modal-dialog"},As={class:"modal-content"},Ls={class:"bg-dar"},Ds=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),p(),s("b",null,"Adicionar Combustivel")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ms={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Fs={class:"mb-3"},qs=s("label",{for:"nome",class:"form-label"},"Nome",-1),Vs={class:"mb-3"},Ss=s("label",{for:"desc",class:"form-label"},[p("Descriçao "),s("span",{style:{opacity:"0.4"}}," (Opcional) ")],-1),Is={class:"modal-footer"},zs={style:{display:"flex","flex-wrap":"wrap"}},Hs=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Bs={class:"col-6"};function Us(o,t,v,f,l,a){return d(),n("div",ks,[s("div",Ns,[s("div",As,[s("div",Ls,[Ds,s("div",Ms,[s("form",null,[s("div",Fs,[qs,h(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[0]||(t[0]=e=>l.nome=e)},null,512),[[u,l.nome]])]),s("div",Vs,[Ss,h(s("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":t[1]||(t[1]=e=>l.desc=e)},null,512),[[u,l.desc]])])])]),s("div",Is,[s("div",zs,[Hs,s("div",Bs,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[2]||(t[2]=e=>a.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Js=_(Es,[["render",Us]]),js={components:{TheNavTop:x,TheAdminNavLateral2:C,TheCombustivel:$s,TheAddCombustivel:Js},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){console.log("editar Categoria"),this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Os={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Rs(o,t,v,f,l,a){const e=r("TheNavTop"),i=r("TheAdminNavLateral2"),g=r("TheCombustivel"),w=r("TheAddCombustivel");return d(),n("div",null,[c(e),s("div",Os,[c(i,{onShow_menu_lateral:a.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(g,{onShow_menu_lateral:a.handle_showHidden_menu_lateral,onEditarCategoria:a.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(w)])}const Ys=_(js,[["render",Rs]]);export{Ys as default};
