import{T as w}from"./TheNavTop-1cf0605d.js";import{T}from"./TheAdminNavLateral2-79c8f9de.js";import{a1 as $,r as m,a2 as k,a3 as C}from"./loader-502d4d2a.js";import{_ as h,o as n,c as d,a as s,F as E,i as N,e as b,v,h as f,d as y,t as u,r,b as c}from"./index-1cae38c4.js";import"./TheForm_Login-5a12abab.js";const A={name:"Thetransmissao",data(){return{transmissao:[],nome:"",desc:"desc"}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const o={transmissao:this.nome,descricao:this.desc};try{(await $(o,this.id)).data?this.$store.state.transmissao=await m():this.showErrorMessage=!0}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}},showgetDados(o){this.id=o,this.transmissao=this.$store.state.transmissao.find(a=>a.id==this.id),this.nome=this.transmissao.transmissao,this.desc=this.transmissao.descricao},modalApagar(o){this.id=o},async apagar(){try{const o=await k(this.id);setTimeout(async function(){this.$store.state.transmissao=await m()}.bind(this),2e3),o.data||(this.showErrorMessage=!0)}catch(o){console.error("Erro na requisição:",o),this.showErrorMessage=!0}}},async created(){this.$store.state.transmissao=await m(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})},computed:{anunciosReversos(){return[...this.$store.state.transmissao].reverse()}}},L={class:"content"},M={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},D={class:"row"},F={class:"col-8 col-lg-10"},q={class:"row"},S={class:"col-2 pesquisar-filter p-0"},V=s("i",{class:"fas fa-filter fa-lg"},null,-1),I=[V],z=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=f('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Transmissao")])])],-1),R={class:"position-relative",style:{height:"72vh"}},U={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},j={class:"table"},G=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Nome"),s("th",{scope:"col"},"Descrição"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),J={scope:"row"},K=s("td",null," ---- ",-1),O={class:"text-center"},P={style:{width:"100%"}},Q=s("i",{class:"fas fa-eye"},null,-1),W=[Q],X=["onClick"],Y=s("i",{class:"fas fa-pencil-alt"},null,-1),Z=[Y],ss=["onClick"],as=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddTransmissao"},[s("i",{class:"fas fa-plus"})],-1),ts={class:"modal fade",id:"EditarTransmissao",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},es={class:"modal-dialog"},os={class:"modal-content"},is={class:"bg-dar",id:"criarAnuncio"},ls=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),y(),s("b",null,"Editar Transmissao")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ns={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ds={class:"mb-3"},rs=s("label",{for:"nome",class:"form-label"},"Nome",-1),cs={class:"modal-footer"},ms={style:{display:"flex","flex-wrap":"wrap"}},hs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),_s={class:"col-6"},ps={class:"modal fade",id:"EliminarTransmissao",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},us={class:"modal-dialog"},bs={class:"modal-content"},vs={class:"bg-dar",id:"criarAnuncio"},fs=f('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Transmissao</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),ys={class:"modal-footer"},gs={style:{display:"flex","flex-wrap":"wrap"}},xs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ws={class:"col-6"};function Ts(o,a,_,p,i,e){return n(),d("main",L,[s("div",M,[s("div",D,[s("div",F,[s("div",q,[s("div",S,[s("div",{class:"pt-2",onClick:a[0]||(a[0]=(...t)=>e.show_menu_lateral&&e.show_menu_lateral(...t))},I)]),z])]),H])]),B,s("div",R,[s("div",U,[s("table",j,[G,s("tbody",null,[(n(!0),d(E,null,N(e.anunciosReversos,t=>(n(),d("tr",{key:t.id},[s("th",J,u(t.id),1),s("td",null,u(t.transmissao),1),K,s("td",O,[s("div",P,[s("span",{onClick:a[1]||(a[1]=(...l)=>e.showDetalhes&&e.showDetalhes(...l)),hidden:""},W),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarTransmissao",onClick:l=>e.showgetDados(t.id)},Z,8,X),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarTransmissao",onClick:l=>e.modalApagar(t.id)},null,8,ss)])])]))),128))])])]),as]),s("div",ts,[s("div",es,[s("div",os,[s("div",is,[ls,s("div",ns,[s("form",null,[s("div",ds,[rs,b(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":a[2]||(a[2]=t=>i.nome=t)},null,512),[[v,i.nome]])])])]),s("div",cs,[s("div",ms,[hs,s("div",_s,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:a[3]||(a[3]=t=>e.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),s("div",ps,[s("div",us,[s("div",bs,[s("div",vs,[fs,s("div",ys,[s("div",gs,[xs,s("div",ws,[s("button",{type:"button",class:"btn btn-primary",onClick:a[4]||(a[4]=t=>e.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const $s=h(A,[["render",Ts]]),ks={name:"TheAddTransmissao",data(){return{nome:"",desc:"desc"}},methods:{async add(){const o={transmissao:this.nome,descricao:this.desc};try{await C(o)?(this.$store.state.adminID=null,this.$store.state.transmissao=await m(),this.nome="",this.desc=""):this.showErrorMessage=!0}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}}}},Cs={class:"modal fade",id:"IDaddTransmissao",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Es={class:"modal-dialog"},Ns={class:"modal-content"},As={class:"bg-dar"},Ls=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),y(),s("b",null,"Adicionar Transmissao")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ms={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Ds={class:"mb-3"},Fs=s("label",{for:"nome",class:"form-label"},"Nome",-1),qs={class:"modal-footer"},Ss={style:{display:"flex","flex-wrap":"wrap"}},Vs=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Is={class:"col-6"};function zs(o,a,_,p,i,e){return n(),d("div",Cs,[s("div",Es,[s("div",Ns,[s("div",As,[Ls,s("div",Ms,[s("form",null,[s("div",Ds,[Fs,b(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":a[0]||(a[0]=t=>i.nome=t)},null,512),[[v,i.nome]])])])]),s("div",qs,[s("div",Ss,[Vs,s("div",Is,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:a[1]||(a[1]=t=>e.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Hs=h(ks,[["render",zs]]),Bs={components:{TheNavTop:w,TheAdminNavLateral2:T,TheTransmissao:$s,TheAddTransmissao:Hs},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Rs={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Us(o,a,_,p,i,e){const t=r("TheNavTop"),l=r("TheAdminNavLateral2"),g=r("TheTransmissao"),x=r("TheAddTransmissao");return n(),d("div",null,[c(t),s("div",Rs,[c(l,{onShow_menu_lateral:e.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(g,{onShow_menu_lateral:e.handle_showHidden_menu_lateral,onEditarCategoria:e.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(x)])}const Ps=h(Bs,[["render",Us]]);export{Ps as default};
