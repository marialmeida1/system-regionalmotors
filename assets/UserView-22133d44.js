import{T as x}from"./TheNavTop-f6dad02f.js";import{T as E}from"./TheAdminNavLateral2-85799a89.js";import{G as T,e as m,ac as N,at as k}from"./loader-45d269ff.js";import{_ as v,o as l,c as i,a as s,F as C,i as L,e as _,v as p,h as b,d as A,t as r,f as u,r as c,b as h}from"./index-447ad33f.js";import"./TheForm_Login-47d09aee.js";import"./logo-5b4cc875.js";const U={name:"Theestado",data(){return{estado:[],nome:"",id:"",uf:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const a={uf:this.uf,estado:this.novoEstado};try{const t=await T(a,this.id);console.log("Ja esta"+t),t.data?this.$store.state.estado=await m():this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},showgetDados(a){this.id=a,this.estado=this.$store.state.estado.find(t=>t.id===this.id),console.log("Novo dado"),this.uf=this.estado.uf,this.nome=this.estado.estado,console.log(this.novoEstado)},modalApagar(a){this.id=a,console.log(a)},async apagar(){console.log("Eliminando "+this.id);try{const a=await N(this.id);console.log("temp Ja eliminando"+a),setTimeout(async function(){this.$store.state.estado=await m()}.bind(this),2e3),a.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}}},async created(){this.$store.state.user=await k(),localStorage.getItem("token")||this.$router.push({path:"/login"}),localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})},mounted(){},computed:{anunciosReversos(){return[...this.$store.state.user].reverse()}}},D={class:"content"},M={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},S={class:"row"},q={class:"col-8 col-lg-10"},F={class:"row"},$={class:"col-2 pesquisar-filter p-0"},V=s("i",{class:"fas fa-filter fa-lg"},null,-1),z=[V],B=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=b('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),I=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/User")])])],-1),R={class:"position-relative",style:{height:"72vh"}},J={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},j={class:"table"},G=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Nome"),s("th",{scope:"col"},"Email"),s("th",{scope:"col"},"Senha"),s("th",{scope:"col"},"Status"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),K={scope:"row"},O={key:0},P={key:1},Q={class:"text-center"},W={style:{width:"100%"}},X=s("i",{class:"fas fa-eye"},null,-1),Y=[X],Z=["onClick"],ss=s("i",{class:"fas fa-pencil-alt"},null,-1),ts=[ss],es=["onClick"],as=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddEstado"},[s("i",{class:"fas fa-plus"})],-1),os={class:"modal fade",id:"EditarEstadoNow",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ls={class:"modal-dialog"},is={class:"modal-content"},ds={class:"bg-dar",id:"criarAnuncio"},ns=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),A(),s("b",null,"Editar Estado Now")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),rs={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},cs={class:"mb-3"},hs=s("label",{for:"nome",class:"form-label"},"UF",-1),ms={class:"mb-3"},_s=s("label",{for:"nome",class:"form-label"},"Estado",-1),ps={class:"modal-footer"},us={style:{display:"flex","flex-wrap":"wrap"}},vs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),bs={class:"col-6"},fs={class:"modal fade",id:"EliminarEstado",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},gs={class:"modal-dialog"},ys={class:"modal-content"},ws={class:"bg-dar",id:"criarAnuncio"},xs=b('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Estado</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),Es={class:"modal-footer"},Ts={style:{display:"flex","flex-wrap":"wrap"}},Ns=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ks={class:"col-6"};function Cs(a,t,f,g,d,o){return l(),i("main",D,[s("div",M,[s("div",S,[s("div",q,[s("div",F,[s("div",$,[s("div",{class:"pt-2",onClick:t[0]||(t[0]=(...e)=>o.show_menu_lateral&&o.show_menu_lateral(...e))},z)]),B])]),H])]),I,s("div",R,[s("div",J,[s("table",j,[G,s("tbody",null,[(l(!0),i(C,null,L(o.anunciosReversos,e=>(l(),i("tr",{key:e.id},[s("th",K,r(e.id),1),s("td",null,r(e.name),1),s("td",null,r(e.email),1),s("td",null,r(e.password),1),s("td",null,[e.activo===1?(l(),i("div",O," Ativo ")):u("",!0),e.activo===2?(l(),i("div",P," Bloqueado ")):u("",!0)]),s("td",Q,[s("div",W,[s("span",{onClick:t[1]||(t[1]=(...n)=>o.showDetalhes&&o.showDetalhes(...n)),hidden:""},Y),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarEstadoNow",onClick:n=>o.showgetDados(e.id)},ts,8,Z),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarEstado",onClick:n=>o.modalApagar(e.id)},null,8,es)])])]))),128))])])]),as]),s("div",os,[s("div",ls,[s("div",is,[s("div",ds,[ns,s("div",rs,[s("form",null,[s("div",cs,[hs,_(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[2]||(t[2]=e=>d.uf=e)},null,512),[[p,d.uf]])]),s("div",ms,[_s,_(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[3]||(t[3]=e=>d.nome=e)},null,512),[[p,d.nome]])])])]),s("div",ps,[s("div",us,[vs,s("div",bs,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[4]||(t[4]=e=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),s("div",fs,[s("div",gs,[s("div",ys,[s("div",ws,[xs,s("div",Es,[s("div",Ts,[Ns,s("div",ks,[s("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=e=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const Ls=v(U,[["render",Cs]]),As={components:{TheNavTop:x,TheAdminNavLateral2:E,TheUser:Ls},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){console.log("editar Categoria"),this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Us={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Ds(a,t,f,g,d,o){const e=c("TheNavTop"),n=c("TheAdminNavLateral2"),y=c("TheUser"),w=c("TheAddUser");return l(),i("div",null,[h(e),s("div",Us,[h(n,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),h(y,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),h(w)])}const zs=v(As,[["render",Ds]]);export{zs as default};
