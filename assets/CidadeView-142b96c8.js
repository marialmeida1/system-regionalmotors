import{T as k}from"./TheNavTop-e34964ce.js";import{T as E}from"./TheAdminNavLateral2-196ff783.js";import{_ as g,aD as F,ag as u,aE as N,n as b,af as A,o as i,c as d,a as e,F as r,j as c,d as h,M as v,v as w,h as C,f as x,t as n,aF as R,y as L,r as m,b as p}from"./index-7d06fc67.js";import"./TheForm_Login-c7d0df27.js";import"./loader-d17fc8a7.js";const M={name:"Thecidade",data(){return{cidade:[],id:"",novaRegiao_id:"",novaCidade:"",novaCidade_id:"",id_estado:"",regioes:[],cidades:[]}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(a){this.$store.state.adminID=await a,this.$emit("editarCategoria",a)},async eliminar(a){this.$store.state.adminID=await a},async editar(){const a={regiao_id:this.novaRegiao_id,cidade:this.novaCidade};try{(await F(a,this.id)).data?this.$store.state.cidade=await u():this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},showgetDados(a){this.id=a,this.cidade=this.$store.state.cidade.find(t=>t.id===this.id),this.novaCidade=this.cidade.cidade,this.id_estado=this.cidade.id_estado,this.novaRegiao_id=this.cidade.regiao_id,this.listFilterRegiao()},modalApagar(a){this.id=a},async apagar(){try{const a=await N(this.id);setTimeout(async function(){this.$store.state.cidade=await u()}.bind(this),2e3),a.data||(this.showErrorMessage=!0)}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}},async listFilterRegiao(){this.regioes=await b("api/regiao/listar_regiao?estado_id="+this.id_estado)},async filterCidade(a){this.$store.state.cidade=await b("api/cidade/listar_cidades?regiao_id="+a),a==0&&(this.$store.state.cidade=await b("/api/cidade/listar_cidades"))}},async created(){this.cidades=await u(),this.$store.state.cidade=this.cidades,this.$store.state.regiao=await A(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},D={class:"content"},S={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},V={class:"row"},q={class:"col-8 col-lg-10"},I={class:"row"},U={class:"col-2 pesquisar-filter p-0"},z=e("i",{class:"fas fa-filter fa-lg"},null,-1),H=[z],B=e("div",{class:"col-10 col-lg-6 p-0"},[e("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[e("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),e("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),j=C('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),G=e("div",null,[e("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[e("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[e("b",null,"Admin/Cidade")])])],-1),J={class:"position-relative",style:{height:"72vh"}},K={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},O={class:"table"},P=e("th",{class:"invisible"},"ID",-1),Q={scope:"col",class:"invisible"},W=e("option",{disabled:"",selected:""},"Estado",-1),X=e("option",{value:"0"},"Estado",-1),Y={scope:"col"},Z=e("option",{disabled:"",selected:""},"Regiao",-1),ee=e("option",{value:"0"},"Regiao",-1),se=["value"],te=e("th",{class:"text-center"},"...",-1),ae=e("tr",{style:{"background-color":"crimson",color:"#fff"}},[e("th",{scope:"col"},[e("div",{class:""},"#")]),e("th",{scope:"col"},"Cidade"),e("th",{scope:"col"},"Regiao"),e("th",{scope:"col",class:"text-center"},"Ações")],-1),oe={scope:"row"},ie={class:""},de={class:"text-center"},le={style:{width:"100%"}},ne=e("i",{class:"fas fa-eye"},null,-1),re=[ne],ce=["onClick"],he=e("i",{class:"fas fa-pencil-alt"},null,-1),_e=[he],me=["onClick"],pe=e("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCidade"},[e("i",{class:"fas fa-plus"})],-1),ue={class:"modal fade",id:"EditarCidadeNow",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},be={class:"modal-dialog"},ve={class:"modal-content"},ge={class:"bg-dar",id:"criarAnuncio"},fe=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[e("span",{class:"fas fa-bullhorn py-2 pt-0"}),x(),e("b",null,"Editar Cidade")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ye={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},we={class:"mb-3"},Ce=e("label",{for:"nome",class:"form-label"},"Estado",-1),xe=e("option",{selected:"",disabled:""},"Selecionar",-1),$e=["value"],Te={class:"mb-3"},ke=e("label",{for:"nome",class:"form-label"},"Regiao",-1),Ee=e("option",{value:"",selected:"",disabled:""},"selecionar",-1),Fe=["value"],Ne={class:"mb-3"},Ae=e("label",{for:"nome",class:"form-label"},"Cidade",-1),Re={class:"modal-footer"},Le={style:{display:"flex","flex-wrap":"wrap"}},Me=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),De={class:"col-6"},Se={class:"modal fade",id:"EliminarCidade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ve={class:"modal-dialog"},qe={class:"modal-content"},Ie={class:"bg-dar",id:"criarAnuncio"},Ue=C('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Cidade</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5>Confirme antes de <span style="color:red;">Eliminar</span>!</h5></div></div>',2),ze={class:"modal-footer"},He={style:{display:"flex","flex-wrap":"wrap"}},Be=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),je={class:"col-6"};function Ge(a,t,f,y,l,o){return i(),d("main",D,[e("div",S,[e("div",V,[e("div",q,[e("div",I,[e("div",U,[e("div",{class:"pt-2",onClick:t[0]||(t[0]=(...s)=>o.show_menu_lateral&&o.show_menu_lateral(...s))},H)]),B])]),j])]),G,e("div",J,[e("div",K,[e("table",O,[e("tr",null,[P,e("th",Q,[e("div",null,[e("select",{class:"form-select",onChange:t[1]||(t[1]=s=>a.applyFiltro("estado",s.target.value))},[W,X,(i(!0),d(r,null,c(a.$store.state.estado,s=>(i(),d("option",null,n(s.estado),1))),256))],32)])]),e("th",Y,[e("div",null,[e("select",{class:"form-select",onChange:t[2]||(t[2]=s=>o.filterCidade(s.target.value))},[Z,ee,(i(!0),d(r,null,c(a.$store.state.regiao,s=>(i(),d("option",{value:s.id,key:s.id},n(s.regiao),9,se))),128))],32)])]),te]),ae,e("tbody",null,[(i(!0),d(r,null,c(a.$store.state.cidade,s=>(i(),d("tr",{key:s.id},[e("th",oe,n(s.id),1),e("td",null,n(s.cidade),1),e("td",ie,n(s.regiao),1),e("td",de,[e("div",le,[e("span",{onClick:t[3]||(t[3]=(..._)=>o.showDetalhes&&o.showDetalhes(..._)),hidden:""},re),e("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarCidadeNow",onClick:_=>o.showgetDados(s.id)},_e,8,ce),e("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarCidade",onClick:_=>o.modalApagar(s.id)},null,8,me)])])]))),128))])])]),pe]),e("div",ue,[e("div",be,[e("div",ve,[e("div",ge,[fe,e("div",ye,[e("form",null,[e("div",we,[Ce,h(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[4]||(t[4]=s=>l.id_estado=s),onChange:t[5]||(t[5]=s=>o.listFilterRegiao())},[xe,(i(!0),d(r,null,c(a.$store.state.estado,s=>(i(),d("option",{value:s.id,key:s.id},n(s.estado),9,$e))),128))],544),[[v,l.id_estado]])]),e("div",Te,[ke,h(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[6]||(t[6]=s=>l.novaRegiao_id=s)},[Ee,(i(!0),d(r,null,c(l.regioes,s=>(i(),d("option",{value:s.id,key:s.id},n(s.regiao),9,Fe))),128))],512),[[v,l.novaRegiao_id]])]),e("div",Ne,[Ae,h(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[7]||(t[7]=s=>l.novaCidade=s)},null,512),[[w,l.novaCidade]])])])]),e("div",Re,[e("div",Le,[Me,e("div",De,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[8]||(t[8]=s=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Atualizar ")])])])])])])]),e("div",Se,[e("div",Ve,[e("div",qe,[e("div",Ie,[Ue,e("div",ze,[e("div",He,[Be,e("div",je,[e("button",{type:"button",class:"btn btn-primary",onClick:t[9]||(t[9]=s=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Confirmar ")])])])])])])])])}const Je=g(M,[["render",Ge]]),Ke={name:"TheAddCategoria",data(){return{nome:"",id_regiao:"",id_estado:"",regioes:[]}},methods:{async add(){const a={regiao_id:this.id_regiao,cidade:this.nome};try{await R(a)?(this.$store.state.cidade=await u(),this.nome="",this.id_regiao=""):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},async listFilterRegiao(){this.regioes=[],this.regioes=await b("api/regiao/listar_regiao?estado_id="+this.id_estado)}},async created(){this.$store.state.estado=await L()}},Oe={class:"modal fade",id:"IDaddCidade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Pe={class:"modal-dialog"},Qe={class:"modal-content"},We={class:"bg-dar"},Xe=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",{class:"far fa-user py-2 pt-0"}),x(),e("b",null,"Adicionar Cidade")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Ye={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Ze={class:"mb-3"},es=e("label",{for:"nome",class:"form-label"},"Estado",-1),ss=e("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ts=["value"],as={class:"mb-3"},os=e("label",{for:"nome",class:"form-label"},"Regiao",-1),is=e("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ds=["value"],ls={class:"mb-3"},ns=e("label",{for:"nome",class:"form-label"},"Cidade",-1),rs={class:"modal-footer"},cs={style:{display:"flex","flex-wrap":"wrap"}},hs=e("div",{class:"col-6"},[e("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),_s={class:"col-6"};function ms(a,t,f,y,l,o){return i(),d("div",Oe,[e("div",Pe,[e("div",Qe,[e("div",We,[Xe,e("div",Ye,[e("form",null,[e("div",Ze,[es,h(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=s=>l.id_estado=s),onChange:t[1]||(t[1]=(...s)=>o.listFilterRegiao&&o.listFilterRegiao(...s))},[ss,(i(!0),d(r,null,c(a.$store.state.estado,s=>(i(),d("option",{value:s.id,key:s.id},n(s.estado),9,ts))),128))],544),[[v,l.id_estado]])]),e("div",as,[os,h(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[2]||(t[2]=s=>l.id_regiao=s)},[is,(i(!0),d(r,null,c(l.regioes,s=>(i(),d("option",{value:s.id,key:s.id},n(s.regiao),9,ds))),128))],512),[[v,l.id_regiao]])]),e("div",ls,[ns,h(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[3]||(t[3]=s=>l.nome=s),placeholder:"Cidade"},null,512),[[w,l.nome]])])])]),e("div",rs,[e("div",cs,[hs,e("div",_s,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[4]||(t[4]=s=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const ps=g(Ke,[["render",ms]]),us={components:{TheNavTop:k,TheAdminNavLateral2:E,TheCidade:Je,TheAddCidade:ps},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},bs={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function vs(a,t,f,y,l,o){const s=m("TheNavTop"),_=m("TheAdminNavLateral2"),$=m("TheCidade"),T=m("TheAddCidade");return i(),d("div",null,[p(s),e("div",bs,[p(_,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),p($,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),p(T)])}const xs=g(us,[["render",vs]]);export{xs as default};
