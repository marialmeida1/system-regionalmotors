import{T as x}from"./TheNavTop-c1fba47e.js";import{T as C}from"./TheAdminNavLateral2-f37ba0f6.js";import{_,ap as T,H as m,aq as $,o as d,c as n,a as s,F as k,j as E,d as h,v as u,h as y,f as p,t as b,ar as N,r,b as c}from"./index-38191b2b.js";import"./TheForm_Login-e6d39be1.js";import"./loader-56afefc9.js";const A={name:"Thecombustivel",data(){return{combustivel:[],nome:"",desc:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const a={combustivel:this.nome,descricao:this.desc};try{(await T(a,this.id)).data?this.$store.state.combustivel=await m():this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},showgetDados(a){this.id=a,this.combustivel=this.$store.state.combustivel.find(t=>t.id===this.id),this.nome=this.combustivel.combustivel,this.desc=this.combustivel.descricao},modalApagar(a){this.id=a},async apagar(){try{const a=await $(this.id);setTimeout(async function(){this.$store.state.combustivel=await m()}.bind(this),2e3),a.data||(this.showErrorMessage=!0)}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}}},async created(){this.$store.state.combustivel=await m(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},L={class:"content"},D={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},M={class:"row"},F={class:"col-8 col-lg-10"},q={class:"row"},V={class:"col-2 pesquisar-filter p-0"},S=s("i",{class:"fas fa-filter fa-lg"},null,-1),H=[S],I=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),z=y('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Combustivel")])])],-1),U={class:"position-relative",style:{height:"72vh"}},j={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},O={class:"table"},R=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Nome"),s("th",{scope:"col"},"Descrição"),s("th",{scope:"col",class:"text-center"},"Ações")])],-1),G={scope:"row"},J={class:"text-center"},K={style:{width:"100%"}},P=s("i",{class:"fas fa-eye"},null,-1),Q=[P],W=["onClick"],X=s("i",{class:"fas fa-pencil-alt"},null,-1),Y=[X],Z=["onClick"],ss=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCombustivel"},[s("i",{class:"fas fa-plus"})],-1),ts={class:"modal fade",id:"EditarCombustivel",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},es={class:"modal-dialog"},as={class:"modal-content"},os={class:"bg-dar",id:"criarAnuncio"},ls=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),p(),s("b",null,"Editar Combustivel")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),is={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ds={class:"mb-3"},ns=s("label",{for:"nome",class:"form-label"},"Nome",-1),rs={class:"mb-3"},cs=s("label",{for:"desc",class:"form-label"},"Descriçao",-1),ms={class:"modal-footer"},hs={style:{display:"flex","flex-wrap":"wrap"}},us=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),bs={class:"col-6"},_s={class:"modal fade",id:"EliminarCombustivel",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ps={class:"modal-dialog"},vs={class:"modal-content"},fs={class:"bg-dar",id:"criarAnuncio"},ys=y('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Combustivel</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),gs={class:"modal-footer"},ws={style:{display:"flex","flex-wrap":"wrap"}},xs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Cs={class:"col-6"};function Ts(a,t,v,f,l,o){return d(),n("main",L,[s("div",D,[s("div",M,[s("div",F,[s("div",q,[s("div",V,[s("div",{class:"pt-2",onClick:t[0]||(t[0]=(...e)=>o.show_menu_lateral&&o.show_menu_lateral(...e))},H)]),I])]),z])]),B,s("div",U,[s("div",j,[s("table",O,[R,s("tbody",null,[(d(!0),n(k,null,E(a.$store.state.combustivel,e=>(d(),n("tr",{key:e.id},[s("th",G,b(e.id),1),s("td",null,b(e.combustivel),1),s("td",null,b(e.descricao),1),s("td",J,[s("div",K,[s("span",{onClick:t[1]||(t[1]=(...i)=>o.showDetalhes&&o.showDetalhes(...i)),hidden:""},Q),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarCombustivel",onClick:i=>o.showgetDados(e.id)},Y,8,W),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarCombustivel",onClick:i=>o.modalApagar(e.id)},null,8,Z)])])]))),128))])])]),ss]),s("div",ts,[s("div",es,[s("div",as,[s("div",os,[ls,s("div",is,[s("form",null,[s("div",ds,[ns,h(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[2]||(t[2]=e=>l.nome=e)},null,512),[[u,l.nome]])]),s("div",rs,[cs,h(s("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":t[3]||(t[3]=e=>l.desc=e)},null,512),[[u,l.desc]])])])]),s("div",ms,[s("div",hs,[us,s("div",bs,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[4]||(t[4]=e=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Atualizar")])])])])])])]),s("div",_s,[s("div",ps,[s("div",vs,[s("div",fs,[ys,s("div",gs,[s("div",ws,[xs,s("div",Cs,[s("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=e=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const $s=_(A,[["render",Ts]]),ks={name:"TheAddCombustivel",data(){return{nome:"",desc:""}},methods:{async add(){const a={combustivel:this.nome,descricao:this.desc};try{await N(a)?(this.$store.state.adminID=null,this.$store.state.combustivel=await m(),this.nome="",this.desc=""):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}}}},Es={class:"modal fade",id:"IDaddCombustivel",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ns={class:"modal-dialog"},As={class:"modal-content"},Ls={class:"bg-dar"},Ds=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),p(),s("b",null,"Adicionar Combustivel")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ms={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Fs={class:"mb-3"},qs=s("label",{for:"nome",class:"form-label"},"Nome",-1),Vs={class:"mb-3"},Ss=s("label",{for:"desc",class:"form-label"},[p("Descriçao "),s("span",{style:{opacity:"0.4"}}," (Opcional) ")],-1),Hs={class:"modal-footer"},Is={style:{display:"flex","flex-wrap":"wrap"}},zs=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Bs={class:"col-6"};function Us(a,t,v,f,l,o){return d(),n("div",Es,[s("div",Ns,[s("div",As,[s("div",Ls,[Ds,s("div",Ms,[s("form",null,[s("div",Fs,[qs,h(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[0]||(t[0]=e=>l.nome=e)},null,512),[[u,l.nome]])]),s("div",Vs,[Ss,h(s("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":t[1]||(t[1]=e=>l.desc=e)},null,512),[[u,l.desc]])])])]),s("div",Hs,[s("div",Is,[zs,s("div",Bs,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[2]||(t[2]=e=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const js=_(ks,[["render",Us]]),Os={components:{TheNavTop:x,TheAdminNavLateral2:C,TheCombustivel:$s,TheAddCombustivel:js},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Rs={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Gs(a,t,v,f,l,o){const e=r("TheNavTop"),i=r("TheAdminNavLateral2"),g=r("TheCombustivel"),w=r("TheAddCombustivel");return d(),n("div",null,[c(e),s("div",Rs,[c(i,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(g,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(w)])}const Xs=_(Os,[["render",Gs]]);export{Xs as default};
