import{T as w}from"./TheNavTop-55c003df.js";import{T}from"./TheAdminNavLateral2-8cdedb5c.js";import{al as $,d as h,am as E,an as V}from"./TheForm_Login-91ecbe9d.js";import{_,o as d,c as n,a as e,F as k,i as C,f as v,v as b,e as f,d as g,t as m,r as c,b as r}from"./index-06876045.js";import"./logo-5b4cc875.js";const N={name:"Thetipo_veiculo",data(){return{tipo_veiculo:[],nome:"",desc:"desc"}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const t={tipo_veiculo:this.nome,descricao:this.desc};try{const s=await $(t,this.id);console.log("Ja esta"+s),s.data?this.$store.state.tipo_veiculo=await h():this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}},showgetDados(t){this.id=t,this.tipo_veiculo=this.$store.state.tipo_veiculo.find(s=>s.id==this.id),console.log("Novo dado"),this.nome=this.tipo_veiculo.tipo_veiculo,this.desc=this.tipo_veiculo.descricao},modalApagar(t){this.id=t,console.log(t)},async apagar(){console.log("Eliminando "+this.id);try{const t=await E(this.id);console.log("temp Ja eliminando"+t),setTimeout(async function(){this.$store.state.tipo_veiculo=await h()}.bind(this),2e3),t.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}}},async created(){localStorage.getItem("token")||this.$router.push({path:"/login"}),this.$store.state.tipo_veiculo=await h()},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})},computed:{anunciosReversos(){return[...this.$store.state.tipo_veiculo].reverse()}}},A={class:"content"},L={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},M={class:"row"},D={class:"col-8 col-lg-10"},F={class:"row"},q={class:"col-2 pesquisar-filter p-0"},S=e("i",{class:"fas fa-filter fa-lg"},null,-1),I=[S],z=e("div",{class:"col-10 col-lg-6 p-0"},[e("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[e("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),e("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),H=f('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=e("div",null,[e("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[e("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[e("b",null,"Admin/Tipo de Veiculos")])])],-1),R={class:"position-relative",style:{height:"72vh"}},J={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},U={class:"table"},j=e("thead",{style:{"background-color":"crimson",color:"#fff"}},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Nome"),e("th",{scope:"col"},"Descrição"),e("th",{scope:"col",class:"text-center"},"Açoes")])],-1),G={scope:"row"},K=e("td",null," ---- ",-1),O={class:"text-center"},P={style:{width:"100%"}},Q=e("i",{class:"fas fa-eye"},null,-1),W=[Q],X=["onClick"],Y=e("i",{class:"fas fa-pencil-alt"},null,-1),Z=[Y],ee=["onClick"],se=e("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddTipo_Veiculo"},[e("i",{class:"fas fa-plus"})],-1),te={class:"modal fade",id:"EditarTipo_veiculo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},oe={class:"modal-dialog"},ae={class:"modal-content"},ie={class:"bg-dar",id:"criarAnuncio"},le=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[e("span",{class:"fas fa-bullhorn py-2 pt-0"}),g(),e("b",null,"Editar Tipo de veiculo")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),de={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ne={class:"mb-3"},ce=e("label",{for:"nome",class:"form-label"},"Nome",-1),re={class:"modal-footer"},he={style:{display:"flex","flex-wrap":"wrap"}},_e=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),pe={class:"col-6"},ue={class:"modal fade",id:"EliminarTipo_veiculo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},me={class:"modal-dialog"},ve={class:"modal-content"},be={class:"bg-dar",id:"criarAnuncio"},fe=f('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Tipo de veiculo</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),ge={class:"modal-footer"},ye={style:{display:"flex","flex-wrap":"wrap"}},xe=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),we={class:"col-6"};function Te(t,s,p,u,i,a){return d(),n("main",A,[e("div",L,[e("div",M,[e("div",D,[e("div",F,[e("div",q,[e("div",{class:"pt-2",onClick:s[0]||(s[0]=(...o)=>a.show_menu_lateral&&a.show_menu_lateral(...o))},I)]),z])]),H])]),B,e("div",R,[e("div",J,[e("table",U,[j,e("tbody",null,[(d(!0),n(k,null,C(a.anunciosReversos,o=>(d(),n("tr",{key:o.id},[e("th",G,m(o.id),1),e("td",null,m(o.tipo_veiculo),1),K,e("td",O,[e("div",P,[e("span",{onClick:s[1]||(s[1]=(...l)=>a.showDetalhes&&a.showDetalhes(...l)),hidden:""},W),e("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarTipo_veiculo",onClick:l=>a.showgetDados(o.id)},Z,8,X),e("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarTipo_veiculo",onClick:l=>a.modalApagar(o.id)},null,8,ee)])])]))),128))])])]),se]),e("div",te,[e("div",oe,[e("div",ae,[e("div",ie,[le,e("div",de,[e("form",null,[e("div",ne,[ce,v(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[2]||(s[2]=o=>i.nome=o)},null,512),[[b,i.nome]])])])]),e("div",re,[e("div",he,[_e,e("div",pe,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[3]||(s[3]=o=>a.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),e("div",ue,[e("div",me,[e("div",ve,[e("div",be,[fe,e("div",ge,[e("div",ye,[xe,e("div",we,[e("button",{type:"button",class:"btn btn-primary",onClick:s[4]||(s[4]=o=>a.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const $e=_(N,[["render",Te]]),Ee={name:"TheAddTipo_Veiculo",data(){return{nome:"",desc:"desc"}},methods:{async add(){const t={tipo_veiculo:this.nome,descricao:this.desc};try{console.log("Adicionando tipo de veiculo...");const s=await V(t);console.log("resposta: "+s),s?(console.log("Eliminado... "+s.id),this.$store.state.adminID=null,this.$store.state.tipo_veiculo=await h(),this.nome=""):this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}}}},Ve={class:"modal fade",id:"IDaddTipo_Veiculo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ke={class:"modal-dialog"},Ce={class:"modal-content"},Ne={class:"bg-dar"},Ae=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",{class:"far fa-user py-2 pt-0"}),g(),e("b",null,"Adicionar Tipo de Veiculo")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Le={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Me={class:"mb-3"},De=e("label",{for:"nome",class:"form-label"},"Nome",-1),Fe={class:"modal-footer"},qe={style:{display:"flex","flex-wrap":"wrap"}},Se=e("div",{class:"col-6"},[e("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ie={class:"col-6"};function ze(t,s,p,u,i,a){return d(),n("div",Ve,[e("div",ke,[e("div",Ce,[e("div",Ne,[Ae,e("div",Le,[e("form",null,[e("div",Me,[De,v(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[0]||(s[0]=o=>i.nome=o)},null,512),[[b,i.nome]])])])]),e("div",Fe,[e("div",qe,[Se,e("div",Ie,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[1]||(s[1]=o=>a.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const He=_(Ee,[["render",ze]]),Be={components:{TheNavTop:w,TheAdminNavLateral2:T,TheTipo_Veiculo:$e,TheAddTipo_Veiculo:He},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){console.log("editar Categoria"),this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Re={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Je(t,s,p,u,i,a){const o=c("TheNavTop"),l=c("TheAdminNavLateral2"),y=c("TheTipo_Veiculo"),x=c("TheAddTipo_Veiculo");return d(),n("div",null,[r(o),e("div",Re,[r(l,{onShow_menu_lateral:a.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),r(y,{onShow_menu_lateral:a.handle_showHidden_menu_lateral,onEditarCategoria:a.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),r(x)])}const Pe=_(Be,[["render",Je]]);export{Pe as default};
