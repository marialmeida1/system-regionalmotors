import{T as w}from"./TheNavTop-131545ad.js";import{T}from"./TheAdminNavLateral2-70363134.js";import{_,aG as $,s as h,aH as V,o as d,c as n,a as s,F as k,j as C,d as v,v as b,h as f,f as y,t as m,aI as E,r,b as c}from"./index-c0670658.js";import"./TheForm_Login-a915ebcd.js";import"./loader-fff71581.js";const N={name:"Thetipo_veiculo",data(){return{tipo_veiculo:[],nome:"",desc:"desc"}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const a={tipo_veiculo:this.nome,descricao:this.desc};try{(await $(a,this.id)).data?this.$store.state.tipo_veiculo=await h():this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}},showgetDados(a){this.id=a,this.tipo_veiculo=this.$store.state.tipo_veiculo.find(e=>e.id==this.id),this.nome=this.tipo_veiculo.tipo_veiculo,this.desc=this.tipo_veiculo.descricao},modalApagar(a){this.id=a},async apagar(){try{const a=await V(this.id);setTimeout(async function(){this.$store.state.tipo_veiculo=await h()}.bind(this),2e3),a.data||(this.showErrorMessage=!0)}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}}},async created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.$store.state.tipo_veiculo=await h()},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})},computed:{anunciosReversos(){return[...this.$store.state.tipo_veiculo].reverse()}}},A={class:"content"},L={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},M={class:"row"},D={class:"col-8 col-lg-10"},F={class:"row"},q={class:"col-2 pesquisar-filter p-0"},S=s("i",{class:"fas fa-filter fa-lg"},null,-1),I=[S],H=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),z=f('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Tipo de Veiculos")])])],-1),R={class:"position-relative",style:{height:"72vh"}},j={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},U={class:"table"},G=s("thead",{style:{"background-color":"crimson",color:"#fff"}},[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Nome"),s("th",{scope:"col"},"Descrição"),s("th",{scope:"col",class:"text-center"},"Açoes")])],-1),J={scope:"row"},K=s("td",null," ---- ",-1),O={class:"text-center"},P={style:{width:"100%"}},Q=s("i",{class:"fas fa-eye"},null,-1),W=[Q],X=["onClick"],Y=s("i",{class:"fas fa-pencil-alt"},null,-1),Z=[Y],ss=["onClick"],es=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddTipo_Veiculo"},[s("i",{class:"fas fa-plus"})],-1),ts={class:"modal fade",id:"EditarTipo_veiculo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},os={class:"modal-dialog"},as={class:"modal-content"},is={class:"bg-dar",id:"criarAnuncio"},ls=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),y(),s("b",null,"Editar Tipo de veiculo")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ds={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ns={class:"mb-3"},rs=s("label",{for:"nome",class:"form-label"},"Nome",-1),cs={class:"modal-footer"},hs={style:{display:"flex","flex-wrap":"wrap"}},_s=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ps={class:"col-6"},us={class:"modal fade",id:"EliminarTipo_veiculo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ms={class:"modal-dialog"},vs={class:"modal-content"},bs={class:"bg-dar",id:"criarAnuncio"},fs=f('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Tipo de veiculo</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),ys={class:"modal-footer"},gs={style:{display:"flex","flex-wrap":"wrap"}},xs=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ws={class:"col-6"};function Ts(a,e,p,u,i,o){return d(),n("main",A,[s("div",L,[s("div",M,[s("div",D,[s("div",F,[s("div",q,[s("div",{class:"pt-2",onClick:e[0]||(e[0]=(...t)=>o.show_menu_lateral&&o.show_menu_lateral(...t))},I)]),H])]),z])]),B,s("div",R,[s("div",j,[s("table",U,[G,s("tbody",null,[(d(!0),n(k,null,C(o.anunciosReversos,t=>(d(),n("tr",{key:t.id},[s("th",J,m(t.id),1),s("td",null,m(t.tipo_veiculo),1),K,s("td",O,[s("div",P,[s("span",{onClick:e[1]||(e[1]=(...l)=>o.showDetalhes&&o.showDetalhes(...l)),hidden:""},W),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarTipo_veiculo",onClick:l=>o.showgetDados(t.id)},Z,8,X),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarTipo_veiculo",onClick:l=>o.modalApagar(t.id)},null,8,ss)])])]))),128))])])]),es]),s("div",ts,[s("div",os,[s("div",as,[s("div",is,[ls,s("div",ds,[s("form",null,[s("div",ns,[rs,v(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[2]||(e[2]=t=>i.nome=t)},null,512),[[b,i.nome]])])])]),s("div",cs,[s("div",hs,[_s,s("div",ps,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[3]||(e[3]=t=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Atualizar")])])])])])])]),s("div",us,[s("div",ms,[s("div",vs,[s("div",bs,[fs,s("div",ys,[s("div",gs,[xs,s("div",ws,[s("button",{type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=t=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const $s=_(N,[["render",Ts]]),Vs={name:"TheAddTipo_Veiculo",data(){return{nome:"",desc:"desc"}},methods:{async add(){const a={tipo_veiculo:this.nome,descricao:this.desc};try{await E(a)?(this.$store.state.adminID=null,this.$store.state.tipo_veiculo=await h(),this.nome=""):this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}}}},ks={class:"modal fade",id:"IDaddTipo_Veiculo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Cs={class:"modal-dialog"},Es={class:"modal-content"},Ns={class:"bg-dar"},As=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),y(),s("b",null,"Adicionar Tipo de Veiculo")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ls={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Ms={class:"mb-3"},Ds=s("label",{for:"nome",class:"form-label"},"Nome",-1),Fs={class:"modal-footer"},qs={style:{display:"flex","flex-wrap":"wrap"}},Ss=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Is={class:"col-6"};function Hs(a,e,p,u,i,o){return d(),n("div",ks,[s("div",Cs,[s("div",Es,[s("div",Ns,[As,s("div",Ls,[s("form",null,[s("div",Ms,[Ds,v(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[0]||(e[0]=t=>i.nome=t)},null,512),[[b,i.nome]])])])]),s("div",Fs,[s("div",qs,[Ss,s("div",Is,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[1]||(e[1]=t=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const zs=_(Vs,[["render",Hs]]),Bs={components:{TheNavTop:w,TheAdminNavLateral2:T,TheTipo_Veiculo:$s,TheAddTipo_Veiculo:zs},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Rs={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function js(a,e,p,u,i,o){const t=r("TheNavTop"),l=r("TheAdminNavLateral2"),g=r("TheTipo_Veiculo"),x=r("TheAddTipo_Veiculo");return d(),n("div",null,[c(t),s("div",Rs,[c(l,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),c(g,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),c(x)])}const Ps=_(Bs,[["render",js]]);export{Ps as default};
