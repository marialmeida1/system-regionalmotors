import{T as w}from"./TheNavTop-89a137cb.js";import{T as E}from"./TheAdminNavLateral2-31f49eac.js";import{_ as u,a0 as T,u as h,ay as $,o as d,c as n,a as s,F as k,j as C,d as _,v as m,h as v,f as y,t as p,az as N,r,b as c}from"./index-4f648531.js";import"./TheForm_Login-02b16fb4.js";import"./loader-3cda3149.js";const A={name:"Theestado",data(){return{estado:[],id:"",uf:"",estado_id:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const e={uf:this.uf,estado:this.estado_id};try{(await T(e,this.id)).data?this.$store.state.estado=await h():this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},showgetDados(e){this.id=e,this.estado=this.$store.state.estado.find(t=>t.id==this.id),this.uf=this.estado.uf,this.estado_id=this.estado.estado},modalApagar(e){this.id=e},async apagar(){try{const e=await $(this.id);setTimeout(async function(){this.$store.state.estado=await h()}.bind(this),2e3),e.data||(this.showErrorMessage=!0)}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}}},async created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.$store.state.estado=await h()},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},L={class:"content"},F={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},M={class:"row"},D={class:"col-8 col-lg-10"},q={class:"row"},V={class:"col-2 pesquisar-filter p-0"},S=s("i",{class:"fas fa-filter fa-lg"},null,-1),U=[S],z=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),I=v('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),H=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Estado")])])],-1),B={class:"position-relative",style:{height:"72vh"}},j={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},R={class:"table"},G=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"UF"),s("th",{scope:"col"},"Estado"),s("th",{scope:"col"},"Descrição"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),J={scope:"row"},K=s("td",{class:"ps-4"}," ---- ",-1),O={class:"text-center"},P={style:{width:"100%"}},Q=s("i",{class:"fas fa-eye"},null,-1),W=[Q],X=["onClick"],Y=s("i",{class:"fas fa-pencil-alt"},null,-1),Z=[Y],ss=["onClick"],ts=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddEstado"},[s("i",{class:"fas fa-plus"})],-1),as={class:"modal fade",id:"EditarEstadoNow",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},es={class:"modal-dialog"},os={class:"modal-content"},ls={class:"bg-dar",id:"criarAnuncio"},is=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),y(),s("b",null,"Editar Estado")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ds={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ns={class:"mb-3"},rs=s("label",{for:"nome",class:"form-label"},"UF",-1),cs={class:"mb-3"},hs=s("label",{for:"nome",class:"form-label"},"Estado",-1),_s={class:"modal-footer"},ms={style:{display:"flex","flex-wrap":"wrap"}},ps=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),us={class:"col-6"},bs={class:"modal fade",id:"EliminarEstado",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},fs={class:"modal-dialog"},vs={class:"modal-content"},ys={class:"bg-dar",id:"criarAnuncio"},gs=v('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Estado</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),xs={class:"modal-footer"},ws={style:{display:"flex","flex-wrap":"wrap"}},Es=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ts={class:"col-6"};function $s(e,t,b,f,l,o){return d(),n("main",L,[s("div",F,[s("div",M,[s("div",D,[s("div",q,[s("div",V,[s("div",{class:"pt-2",onClick:t[0]||(t[0]=(...a)=>o.show_menu_lateral&&o.show_menu_lateral(...a))},U)]),z])]),I])]),H,s("div",B,[s("div",j,[s("table",R,[G,s("tbody",null,[(d(!0),n(k,null,C(e.$store.state.estado,a=>(d(),n("tr",{key:a.id},[s("th",J,p(a.id),1),s("td",null,p(a.uf),1),s("td",null,p(a.estado),1),K,s("td",O,[s("div",P,[s("span",{onClick:t[1]||(t[1]=(...i)=>o.showDetalhes&&o.showDetalhes(...i)),hidden:""},W),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarEstadoNow",onClick:i=>o.showgetDados(a.id)},Z,8,X),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarEstado",onClick:i=>o.modalApagar(a.id)},null,8,ss)])])]))),128))])])]),ts]),s("div",as,[s("div",es,[s("div",os,[s("div",ls,[is,s("div",ds,[s("form",null,[s("div",ns,[rs,_(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[2]||(t[2]=a=>l.uf=a)},null,512),[[m,l.uf]])]),s("div",cs,[hs,_(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[3]||(t[3]=a=>l.estado_id=a)},null,512),[[m,l.estado_id]])])])]),s("div",_s,[s("div",ms,[ps,s("div",us,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[4]||(t[4]=a=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Atualizar")])])])])])])]),s("div",bs,[s("div",fs,[s("div",vs,[s("div",ys,[gs,s("div",xs,[s("div",ws,[Es,s("div",Ts,[s("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=a=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const ks=u(A,[["render",$s]]),Cs={name:"TheAddCategoria",data(){return{nome:"",uf:""}},methods:{async add(){const e={uf:this.uf,estado:this.nome};try{await N(e)?(this.$store.state.adminID=null,this.$store.state.estado=await h(),this.nome="",this.uf=""):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}}}},Ns={class:"modal fade",id:"IDaddEstado",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},As={class:"modal-dialog"},Ls={class:"modal-content"},Fs={class:"bg-dar"},Ms=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),y(),s("b",null,"Adicionar Estado")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ds={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},qs={class:"mb-3"},Vs=s("label",{for:"nome",class:"form-label"},"UF",-1),Ss={class:"mb-3"},Us=s("label",{for:"nome",class:"form-label"},"Estado",-1),zs={class:"modal-footer"},Is={style:{display:"flex","flex-wrap":"wrap"}},Hs=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Bs={class:"col-6"};function js(e,t,b,f,l,o){return d(),n("div",Ns,[s("div",As,[s("div",Ls,[s("div",Fs,[Ms,s("div",Ds,[s("form",null,[s("div",qs,[Vs,_(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[0]||(t[0]=a=>l.uf=a)},null,512),[[m,l.uf]])]),s("div",Ss,[Us,_(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[1]||(t[1]=a=>l.nome=a)},null,512),[[m,l.nome]])])])]),s("div",zs,[s("div",Is,[Hs,s("div",Bs,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[2]||(t[2]=a=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Rs=u(Cs,[["render",js]]),Gs={components:{TheNavTop:w,TheAdminNavLateral2:E,TheEstado:ks,TheAddEstado:Rs},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Js={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Ks(e,t,b,f,l,o){const a=r("TheNavTop"),i=r("TheAdminNavLateral2"),g=r("TheEstado"),x=r("TheAddEstado");return d(),n("div",null,[c(a),s("div",Js,[c(i,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(g,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(x)])}const Ys=u(Gs,[["render",Ks]]);export{Ys as default};
