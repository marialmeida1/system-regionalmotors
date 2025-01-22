import{T as x}from"./TheNavTop-c8315887.js";import{T as E}from"./TheAdminNavLateral2-0a8d45af.js";import{H as T,e as _,ad as k,au as N}from"./loader-49a51e5e.js";import{_ as v,o as l,c as i,a as s,F as C,i as L,e as m,v as p,h as b,d as A,t as r,f as u,r as c,b as h}from"./index-f9a1c669.js";import"./TheForm_Login-2df227ea.js";const U={name:"Theestado",data(){return{estado:[],nome:"",id:"",uf:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const o={uf:this.uf,estado:this.novoEstado};try{(await T(o,this.id)).data?this.$store.state.estado=await _():this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}},showgetDados(o){this.id=o,this.estado=this.$store.state.estado.find(e=>e.id===this.id),this.uf=this.estado.uf,this.nome=this.estado.estado},modalApagar(o){this.id=o},async apagar(){try{const o=await k(this.id);setTimeout(async function(){this.$store.state.estado=await _()}.bind(this),2e3),o.data||(this.showErrorMessage=!0)}catch(o){console.error("Erro na requisição:",o),this.showErrorMessage=!0}}},async created(){this.$store.state.user=await N(),localStorage.getItem("token")||this.$router.push({path:"/login"}),localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})},mounted(){},computed:{anunciosReversos(){return[...this.$store.state.user].reverse()}}},D={class:"content"},M={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},S={class:"row"},q={class:"col-8 col-lg-10"},F={class:"row"},$={class:"col-2 pesquisar-filter p-0"},V=s("i",{class:"fas fa-filter fa-lg"},null,-1),H=[V],z=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),B=b('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),I=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/User")])])],-1),R={class:"position-relative",style:{height:"72vh"}},j={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},G={class:"table"},J=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Nome"),s("th",{scope:"col"},"Email"),s("th",{scope:"col"},"Senha"),s("th",{scope:"col"},"Status"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),K={scope:"row"},O={key:0},P={key:1},Q={class:"text-center"},W={style:{width:"100%"}},X=s("i",{class:"fas fa-eye"},null,-1),Y=[X],Z=["onClick"],ss=s("i",{class:"fas fa-pencil-alt"},null,-1),ts=[ss],es=["onClick"],as=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddEstado"},[s("i",{class:"fas fa-plus"})],-1),os={class:"modal fade",id:"EditarEstadoNow",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ls={class:"modal-dialog"},is={class:"modal-content"},ds={class:"bg-dar",id:"criarAnuncio"},ns=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),A(),s("b",null,"Editar Estado Now")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),rs={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},cs={class:"mb-3"},hs=s("label",{for:"nome",class:"form-label"},"UF",-1),_s={class:"mb-3"},ms=s("label",{for:"nome",class:"form-label"},"Estado",-1),ps={class:"modal-footer"},us={style:{display:"flex","flex-wrap":"wrap"}},vs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),bs={class:"col-6"},fs={class:"modal fade",id:"EliminarEstado",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ys={class:"modal-dialog"},gs={class:"modal-content"},ws={class:"bg-dar",id:"criarAnuncio"},xs=b('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Estado</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),Es={class:"modal-footer"},Ts={style:{display:"flex","flex-wrap":"wrap"}},ks=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ns={class:"col-6"};function Cs(o,e,f,y,d,a){return l(),i("main",D,[s("div",M,[s("div",S,[s("div",q,[s("div",F,[s("div",$,[s("div",{class:"pt-2",onClick:e[0]||(e[0]=(...t)=>a.show_menu_lateral&&a.show_menu_lateral(...t))},H)]),z])]),B])]),I,s("div",R,[s("div",j,[s("table",G,[J,s("tbody",null,[(l(!0),i(C,null,L(a.anunciosReversos,t=>(l(),i("tr",{key:t.id},[s("th",K,r(t.id),1),s("td",null,r(t.name),1),s("td",null,r(t.email),1),s("td",null,r(t.password),1),s("td",null,[t.activo===1?(l(),i("div",O," Ativo ")):u("",!0),t.activo===2?(l(),i("div",P," Bloqueado ")):u("",!0)]),s("td",Q,[s("div",W,[s("span",{onClick:e[1]||(e[1]=(...n)=>a.showDetalhes&&a.showDetalhes(...n)),hidden:""},Y),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarEstadoNow",onClick:n=>a.showgetDados(t.id)},ts,8,Z),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarEstado",onClick:n=>a.modalApagar(t.id)},null,8,es)])])]))),128))])])]),as]),s("div",os,[s("div",ls,[s("div",is,[s("div",ds,[ns,s("div",rs,[s("form",null,[s("div",cs,[hs,m(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[2]||(e[2]=t=>d.uf=t)},null,512),[[p,d.uf]])]),s("div",_s,[ms,m(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[3]||(e[3]=t=>d.nome=t)},null,512),[[p,d.nome]])])])]),s("div",ps,[s("div",us,[vs,s("div",bs,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[4]||(e[4]=t=>a.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),s("div",fs,[s("div",ys,[s("div",gs,[s("div",ws,[xs,s("div",Es,[s("div",Ts,[ks,s("div",Ns,[s("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=t=>a.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const Ls=v(U,[["render",Cs]]),As={components:{TheNavTop:x,TheAdminNavLateral2:E,TheUser:Ls},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Us={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Ds(o,e,f,y,d,a){const t=c("TheNavTop"),n=c("TheAdminNavLateral2"),g=c("TheUser"),w=c("TheAddUser");return l(),i("div",null,[h(t),s("div",Us,[h(n,{onShow_menu_lateral:a.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),h(g,{onShow_menu_lateral:a.handle_showHidden_menu_lateral,onEditarCategoria:a.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),h(w)])}const Vs=v(As,[["render",Ds]]);export{Vs as default};
