import{T as x}from"./TheNavTop-f6dad02f.js";import{T as C}from"./TheAdminNavLateral2-85799a89.js";import{a9 as $,s as h,aa as T,ab as E}from"./loader-45d269ff.js";import{_ as m,o as d,c as n,a as s,F as k,i as N,e as b,v,h as f,d as g,t as u,r,b as c}from"./index-447ad33f.js";import"./TheForm_Login-47d09aee.js";import"./logo-5b4cc875.js";const A={name:"Thecores",data(){return{cores:[],nome:"",desc:"desc"}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const t={cor:this.nome,descricao:this.desc};try{const e=await $(t,this.id);console.log("Ja esta"+e),e.data?this.$store.state.cores=await h():this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}},showgetDados(t){this.id=t,this.cores=this.$store.state.cores.find(e=>e.id===this.id),console.log("Novo dado"),this.nome=this.cores.cor,this.desc=this.cores.descricao},modalApagar(t){this.id=t,console.log(t)},async apagar(){console.log("Eliminando "+this.id);try{const t=await T(this.id);console.log("temp Ja eliminando"+t),setTimeout(async function(){this.$store.state.cores=await h()}.bind(this),2e3),t.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}}},async created(){this.$store.state.cores=await h(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},L={class:"content"},M={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},D={class:"row"},F={class:"col-8 col-lg-10"},q={class:"row"},S={class:"col-2 pesquisar-filter p-0"},V=s("i",{class:"fas fa-filter fa-lg"},null,-1),I=[V],z=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=f('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Cores")])])],-1),J={class:"position-relative",style:{height:"72vh"}},U={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},j={class:"table"},R=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Nome"),s("th",{scope:"col"},"Descrição"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),G={scope:"row"},K=s("td",null," ---- ",-1),O={class:"text-center"},P={style:{width:"100%"}},Q=s("i",{class:"fas fa-eye"},null,-1),W=[Q],X=["onClick"],Y=s("i",{class:"fas fa-pencil-alt"},null,-1),Z=[Y],ss=["onClick"],es=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCores"},[s("i",{class:"fas fa-plus"})],-1),ts={class:"modal fade",id:"EditarCores",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},as={class:"modal-dialog"},os={class:"modal-content"},ls={class:"bg-dar",id:"criarAnuncio"},is=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),g(),s("b",null,"Editar Cor")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ds={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ns={class:"mb-3"},rs=s("label",{for:"nome",class:"form-label"},"Nome",-1),cs={class:"modal-footer"},hs={style:{display:"flex","flex-wrap":"wrap"}},ms=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),_s={class:"col-6"},ps={class:"modal fade",id:"EliminarCores",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},us={class:"modal-dialog"},bs={class:"modal-content"},vs={class:"bg-dar",id:"criarAnuncio"},fs=f('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Cor</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),gs={class:"modal-footer"},ys={style:{display:"flex","flex-wrap":"wrap"}},ws=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),xs={class:"col-6"};function Cs(t,e,_,p,l,o){return d(),n("main",L,[s("div",M,[s("div",D,[s("div",F,[s("div",q,[s("div",S,[s("div",{class:"pt-2",onClick:e[0]||(e[0]=(...a)=>o.show_menu_lateral&&o.show_menu_lateral(...a))},I)]),z])]),H])]),B,s("div",J,[s("div",U,[s("table",j,[R,s("tbody",null,[(d(!0),n(k,null,N(t.$store.state.cores,a=>(d(),n("tr",{key:a.id},[s("th",G,u(a.id),1),s("td",null,u(a.cor),1),K,s("td",O,[s("div",P,[s("span",{onClick:e[1]||(e[1]=(...i)=>o.showDetalhes&&o.showDetalhes(...i)),hidden:""},W),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarCores",onClick:i=>o.showgetDados(a.id)},Z,8,X),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarCores",onClick:i=>o.modalApagar(a.id)},null,8,ss)])])]))),128))])])]),es]),s("div",ts,[s("div",as,[s("div",os,[s("div",ls,[is,s("div",ds,[s("form",null,[s("div",ns,[rs,b(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[2]||(e[2]=a=>l.nome=a)},null,512),[[v,l.nome]])])])]),s("div",cs,[s("div",hs,[ms,s("div",_s,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[3]||(e[3]=a=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),s("div",ps,[s("div",us,[s("div",bs,[s("div",vs,[fs,s("div",gs,[s("div",ys,[ws,s("div",xs,[s("button",{type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=a=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const $s=m(A,[["render",Cs]]),Ts={name:"TheAddCategoria",data(){return{nome:"",desc:"desc"}},methods:{async add(){const t={cor:this.nome,descricao:this.desc};try{const e=await E(t);console.log("resposta: "+e),e?(console.log("Eliminado... "+e.id),this.$store.state.adminID=null,this.$store.state.cores=await h(),this.nome="",this.desc=""):this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}}}},Es={class:"modal fade",id:"IDaddCores",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ks={class:"modal-dialog"},Ns={class:"modal-content"},As={class:"bg-dar"},Ls=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),g(),s("b",null,"Adicionar Cores")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ms={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Ds={class:"mb-3"},Fs=s("label",{for:"nome",class:"form-label"},"Nome",-1),qs={class:"modal-footer"},Ss={style:{display:"flex","flex-wrap":"wrap"}},Vs=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Is={class:"col-6"};function zs(t,e,_,p,l,o){return d(),n("div",Es,[s("div",ks,[s("div",Ns,[s("div",As,[Ls,s("div",Ms,[s("form",null,[s("div",Ds,[Fs,b(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[0]||(e[0]=a=>l.nome=a)},null,512),[[v,l.nome]])])])]),s("div",qs,[s("div",Ss,[Vs,s("div",Is,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[1]||(e[1]=a=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Hs=m(Ts,[["render",zs]]),Bs={components:{TheNavTop:x,TheAdminNavLateral2:C,TheCores:$s,TheAddCores:Hs},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){console.log("editar Categoria"),this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Js={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Us(t,e,_,p,l,o){const a=r("TheNavTop"),i=r("TheAdminNavLateral2"),y=r("TheCores"),w=r("TheAddCores");return d(),n("div",null,[c(a),s("div",Js,[c(i,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(y,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(w)])}const Qs=m(Bs,[["render",Us]]);export{Qs as default};
