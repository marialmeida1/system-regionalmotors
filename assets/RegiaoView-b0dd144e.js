import{T}from"./TheNavTop-631f891c.js";import{T as k}from"./TheAdminNavLateral2-f62bab0b.js";import{af as C,X as _,ag as N,e as f,ah as A}from"./loader-930b6088.js";import{_ as b,o as l,c as d,a as s,F as p,i as u,e as m,v as y,l as w,h as x,d as $,t as r,r as c,b as h}from"./index-3c85704b.js";import"./TheForm_Login-bb3c9f2a.js";const L={name:"Theregiao",data(){return{regiao:[],novaRegiao:"",id:"",novoEstado_id:"",novoEstado:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(a){this.$store.state.adminID=await a,this.$emit("editarCategoria",a)},async editar(){const a={estado_id:this.novoEstado_id,regiao:this.novaRegiao};try{(await C(a,this.id)).data?this.$store.state.regiao=await _():this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}},showgetDados(a){this.id=a,this.regiao=this.$store.state.regiao.find(e=>e.id==this.id),this.novaRegiao=this.regiao.regiao,this.novoEstado_id=this.regiao.id_estado,this.novoEstado=this.regiao.estado},modalApagar(a){this.id=a},async apagar(){try{const a=await N(this.id);setTimeout(async function(){this.$store.state.regiao=await _()}.bind(this),2e3),a.data||(this.showErrorMessage=!0)}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}}},async created(){this.$store.state.regiao=await _(),this.Api_estado=await f(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},M={class:"content"},D={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},F={class:"row"},S={class:"col-8 col-lg-10"},q={class:"row"},V={class:"col-2 pesquisar-filter p-0"},I=s("i",{class:"fas fa-filter fa-lg"},null,-1),z=[I],H=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),B=x('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),U=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Regiao")])])],-1),j={class:"position-relative",style:{height:"72vh"}},X={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},G={class:"table"},J=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Regiao"),s("th",{scope:"col"},"Estado"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),K={scope:"row"},O={class:"text-center"},P={style:{width:"100%"}},Q=s("i",{class:"fas fa-eye"},null,-1),W=[Q],Y=["onClick"],Z=s("i",{class:"fas fa-pencil-alt"},null,-1),ss=[Z],ts=["onClick"],es=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDRegiao"},[s("i",{class:"fas fa-plus"})],-1),as={class:"modal fade",id:"EditarRegiaoNow",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},os={class:"modal-dialog"},is={class:"modal-content"},ls={class:"bg-dar",id:"criarAnuncio"},ds=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),$(),s("b",null,"Editar Regiao")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ns={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},rs={class:"row"},cs={class:"mb-3"},hs=s("label",{for:"nome",class:"form-label"},"Regiao",-1),_s={class:"mb-3"},ms=s("label",{for:"nome",class:"form-label"},"Estado",-1),ps=["value"],us={class:"modal-footer"},bs={style:{display:"flex","flex-wrap":"wrap"}},vs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),gs={class:"col-6"},fs={class:"modal fade",id:"EliminarRegiao",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ys={class:"modal-dialog"},ws={class:"modal-content"},xs={class:"bg-dar",id:"criarAnuncio"},$s=x('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Regiao</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),Es={class:"modal-footer"},Rs={style:{display:"flex","flex-wrap":"wrap"}},Ts=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ks={class:"col-6"};function Cs(a,e,v,g,i,o){return l(),d("main",M,[s("div",D,[s("div",F,[s("div",S,[s("div",q,[s("div",V,[s("div",{class:"pt-2",onClick:e[0]||(e[0]=(...t)=>o.show_menu_lateral&&o.show_menu_lateral(...t))},z)]),H])]),B])]),U,s("div",j,[s("div",X,[s("table",G,[J,s("tbody",null,[(l(!0),d(p,null,u(a.$store.state.regiao,t=>(l(),d("tr",{key:t.id},[s("th",K,r(t.id),1),s("td",null,r(t.regiao),1),s("td",null,r(t.estado),1),s("td",O,[s("div",P,[s("span",{onClick:e[1]||(e[1]=(...n)=>o.showDetalhes&&o.showDetalhes(...n)),hidden:""},W),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarRegiaoNow",onClick:n=>o.showgetDados(t.id)},ss,8,Y),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarRegiao",onClick:n=>o.modalApagar(t.id)},null,8,ts)])])]))),128))])])]),es]),s("div",as,[s("div",os,[s("div",is,[s("div",ls,[ds,s("div",ns,[s("form",null,[s("div",rs,[s("div",cs,[hs,m(s("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>i.novaRegiao=t)},null,512),[[y,i.novaRegiao]])]),s("div",_s,[ms,m(s("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>i.novoEstado_id=t),class:"form-select"},[(l(!0),d(p,null,u(a.Api_estado,t=>(l(),d("option",{value:t.id,key:t.id},r(t.estado),9,ps))),128))],512),[[w,i.novoEstado_id]])])])])]),s("div",us,[s("div",bs,[vs,s("div",gs,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[4]||(e[4]=t=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),s("div",fs,[s("div",ys,[s("div",ws,[s("div",xs,[$s,s("div",Es,[s("div",Rs,[Ts,s("div",ks,[s("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=t=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const Ns=b(L,[["render",Cs]]),As={name:"TheAddCategoria",data(){return{nome:"",id_estado:""}},methods:{async add(){const a={estado_id:this.id_estado,regiao:this.nome};try{await A(a)?(this.$store.state.adminID=null,this.$store.state.regiao=await _(),this.nome="",this.id_estado=""):this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}}},async created(){this.$store.state.estado=await f()}},Ls={class:"modal fade",id:"IDRegiao",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ms={class:"modal-dialog"},Ds={class:"modal-content"},Fs={class:"bg-dar"},Ss=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),$(),s("b",null,"Adicionar Regiao")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),qs={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Vs={class:"mb-3"},Is=s("label",{for:"nome",class:"form-label"},"Estado",-1),zs=s("option",{value:"0",selected:"",disabled:""},"Selecionar",-1),Hs=["value"],Bs={class:"mb-3"},Us=s("label",{for:"nome",class:"form-label"},"Regiao",-1),js={class:"modal-footer"},Xs={style:{display:"flex","flex-wrap":"wrap"}},Gs=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Js={class:"col-6"};function Ks(a,e,v,g,i,o){return l(),d("div",Ls,[s("div",Ms,[s("div",Ds,[s("div",Fs,[Ss,s("div",qs,[s("form",null,[s("div",Vs,[Is,m(s("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":e[0]||(e[0]=t=>i.id_estado=t)},[zs,(l(!0),d(p,null,u(a.$store.state.estado,t=>(l(),d("option",{value:t.id,key:t.id},r(t.estado),9,Hs))),128))],512),[[w,i.id_estado]])]),s("div",Bs,[Us,m(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[1]||(e[1]=t=>i.nome=t)},null,512),[[y,i.nome]])])])]),s("div",js,[s("div",Xs,[Gs,s("div",Js,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[2]||(e[2]=t=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Os=b(As,[["render",Ks]]),Ps={components:{TheNavTop:T,TheAdminNavLateral2:k,TheRegiao:Ns,TheAddRegiao:Os},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Qs={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Ws(a,e,v,g,i,o){const t=c("TheNavTop"),n=c("TheAdminNavLateral2"),E=c("TheRegiao"),R=c("TheAddRegiao");return l(),d("div",null,[h(t),s("div",Qs,[h(n,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),h(E,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),h(R)])}const at=b(Ps,[["render",Ws]]);export{at as default};
