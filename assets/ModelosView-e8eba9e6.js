import{T as A}from"./TheNavTop-c8d3c943.js";import{T as C}from"./TheAdminNavLateral2-96991c3a.js";import{M as E,f as p,N as L,b as g,d as w,O as N}from"./loader-7e88f898.js";import{_ as y,o as i,c as d,a as e,e as n,l as u,F as _,i as m,v as x,h as M,d as T,t as r,r as f,b}from"./index-7cea80fa.js";import"./TheForm_Login-5655e429.js";import"./logo-5b4cc875.js";const F={name:"TheModelos",data(){return{nome:"",marca_id:"",desc:"desc",marcas:[],Api_tipo_veiculo:[],tipo_veiculo_id:"",marcas:"",filter_tipo_veiculo:"",array_filtros:[],filter_marca:"",filter_modelo:"",modelos_filtrados:[]}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const s={nome_modelo:this.nome,marca_id:this.marca_id,descricao:this.desc};this.filter_tipo_veiculo="";try{const t=await E(s,this.id);console.log("Ja esta"+t),t.data?this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro"):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},showgetDados(s){this.id=s,this.modelos=this.$store.state.modelos.find(t=>t.id===this.id),console.log("Novo dado"),this.nome=this.modelos.nome_modelo,this.tipo_veiculo_id=this.modelos.id_tipo_veiculo,this.marca_id=this.modelos.id_marca},modalApagar(s){this.id=s,console.log(s)},async apagar(){this.filter_tipo_veiculo="",console.log("Eliminando "+this.id);try{const s=await L(this.id);console.log("temp Ja eliminando"+s),setTimeout(async function(){this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro")}.bind(this),2e3),s.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}},filterMarcas(s){return this.$store.state.marcas.filter(t=>t.tipo_veiculo_id==s)},filterMarcas_nome(s){return this.$store.state.marcas.filter(t=>t.tipo_veiculo==this.filter_tipo_veiculo)},async filterModelos_nome(s){this.applyFiltro("nome_tipo_veiculo",s)},async applyFiltro(s,t){if(t!="0"){const c={};this.array_filtros.forEach(o=>{c[o.chave]=o.valor}),c[s]=t,this.array_filtros=Object.keys(c).map(o=>({chave:o,valor:c[o]}));const h={};this.array_filtros.forEach(o=>{h[o.chave]=o.valor});const l=`api/modelos/listar_modelos?${Object.keys(h).map(o=>`${o}=${h[o]}`).join("&")}`;this.$store.state.modelos=await p(l),console.log(l)}else this.limparFiltro(),this.filter_tipo_veiculo="0",this.filter_marca="0",this.filter_modelo="0";this.$store.state.anuncios.length==0?this.$store.state.results=!1:this.$store.state.results=!0},async limparFiltro(){this.array_filtros=[],this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro")}},async created(){this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro"),this.$store.state.marcas=await g(),this.$store.state.tipo_veiculo=await w(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},S={class:"content"},V={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},q={class:"row"},D={class:"col-8 col-lg-10"},U={class:"row"},z={class:"col-2 pesquisar-filter p-0"},H=e("i",{class:"fas fa-filter fa-lg"},null,-1),j=[H],B=e("div",{class:"col-10 col-lg-6 p-0"},[e("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[e("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),e("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),I=M('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),O=e("div",null,[e("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[e("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[e("b",null,"Admin/Modelos")])])],-1),J={class:"position-relative",style:{height:"72vh"}},P={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},R={class:"table"},G=e("th",{scope:"col"},"#",-1),K={scope:"col"},Q=e("option",{value:"",selected:"",disabled:""}," Tipo de veiculo ",-1),W={value:"0"},X={key:0},Y={key:1},Z=["value"],ee={scope:"col"},oe=e("option",{value:"",selected:"",disabled:""}," Marca ",-1),te={value:"0"},se={key:0},ae={key:1},le=["value"],ie=e("th",{scope:"col"},null,-1),de=e("th",{scope:"col"}," --- ",-1),re=e("th",{scope:"col",class:"text-center"}," --- ",-1),ne=e("tr",{style:{"background-color":"crimson",color:"#fff"}},[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Tipo de veiculo"),e("th",{scope:"col"},"Marca"),e("th",{scope:"col"},"Modelo"),e("th",{scope:"col"},"Descrição"),e("th",{scope:"col",class:"text-center"},"Açoes")],-1),ce={scope:"row"},_e=e("td",null," ---- ",-1),me={class:"text-center"},he={style:{width:"100%"}},pe=e("i",{class:"fas fa-eye"},null,-1),ue=[pe],ve=["onClick"],fe=e("i",{class:"fas fa-pencil-alt"},null,-1),be=[fe],ye=["onClick"],ge=e("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCarro"},[e("i",{class:"fas fa-plus"})],-1),we={class:"modal fade",id:"EditarModelo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},xe={class:"modal-dialog"},Me={class:"modal-content"},Te={class:"bg-dar",id:"criarAnuncio"},$e=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[e("span",{class:"fas fa-bullhorn py-2 pt-0"}),T(),e("b",null,"Editar Modelo")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ke={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},Ae={class:"mb-3"},Ce=e("label",{for:"",class:"form-label"},"Tipo de veiculo",-1),Ee=e("option",{value:""},"Selecionar",-1),Le=["value"],Ne={class:"mb-3"},Fe=e("label",{for:"",class:"form-label"},"Marca",-1),Se=e("option",{value:""},"Selecionar",-1),Ve=["value"],qe={class:"mb-3"},De=e("label",{for:"nome",class:"form-label"},"Modelo",-1),Ue={class:"modal-footer"},ze={style:{display:"flex","flex-wrap":"wrap"}},He=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),je={class:"col-6"},Be={class:"modal fade",id:"EliminarModelo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ie={class:"modal-dialog"},Oe={class:"modal-content"},Je={class:"bg-dar",id:"criarAnuncio"},Pe=M('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Modelo</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),Re={class:"modal-footer"},Ge={style:{display:"flex","flex-wrap":"wrap"}},Ke=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Qe={class:"col-6"};function We(s,t,c,h,a,l){return i(),d("main",S,[e("div",V,[e("div",q,[e("div",D,[e("div",U,[e("div",z,[e("div",{class:"pt-2",onClick:t[0]||(t[0]=(...o)=>l.show_menu_lateral&&l.show_menu_lateral(...o))},j)]),B])]),I])]),O,e("div",J,[e("div",P,[e("table",R,[e("thead",null,[e("tr",null,[G,e("th",K,[e("div",null,[n(e("select",{class:"form-select",onChange:t[1]||(t[1]=o=>l.filterModelos_nome(o.target.value)),style:{width:"150px"},"onUpdate:modelValue":t[2]||(t[2]=o=>a.filter_tipo_veiculo=o)},[Q,e("option",W,[a.filter_tipo_veiculo=="0"?(i(),d("div",X," Tipo de veiculo ")):(i(),d("div",Y," Limpar filtro "))]),(i(!0),d(_,null,m(s.$store.state.tipo_veiculo,o=>(i(),d("option",{value:o.tipo_veiculo},r(o.tipo_veiculo),9,Z))),256))],544),[[u,a.filter_tipo_veiculo]])])]),e("th",ee,[e("div",null,[n(e("select",{class:"form-select",onChange:t[3]||(t[3]=o=>l.applyFiltro("nome_marca",o.target.value)),style:{width:"150px"},"onUpdate:modelValue":t[4]||(t[4]=o=>a.filter_marca=o)},[oe,e("option",te,[a.filter_marca=="0"?(i(),d("div",se," Marca ")):(i(),d("div",ae," Limpar filtro "))]),(i(!0),d(_,null,m(l.filterMarcas_nome(a.filter_tipo_veiculo),o=>(i(),d("option",{value:o.nome_marca},r(o.nome_marca),9,le))),256))],544),[[u,a.filter_marca]])])]),ie,de,re]),ne]),e("tbody",null,[(i(!0),d(_,null,m(s.$store.state.modelos,o=>(i(),d("tr",{key:o.id},[e("th",ce,r(o.id),1),e("td",null,r(o.nome_tipo_veiculo),1),e("td",null,r(o.nome_marca),1),e("td",null,r(o.nome_modelo),1),_e,e("td",me,[e("div",he,[e("span",{onClick:t[5]||(t[5]=(...v)=>l.showDetalhes&&l.showDetalhes(...v)),hidden:""},ue),e("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarModelo",onClick:v=>l.showgetDados(o.id)},be,8,ve),e("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarModelo",onClick:v=>l.modalApagar(o.id)},null,8,ye)])])]))),128))])])]),ge]),e("div",we,[e("div",xe,[e("div",Me,[e("div",Te,[$e,e("div",ke,[e("form",null,[e("div",Ae,[Ce,n(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[6]||(t[6]=o=>a.tipo_veiculo_id=o)},[Ee,(i(!0),d(_,null,m(s.$store.state.tipo_veiculo,o=>(i(),d("option",{key:o.id,value:o.id},r(o.tipo_veiculo),9,Le))),128))],512),[[u,a.tipo_veiculo_id]])]),e("div",Ne,[Fe,n(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[7]||(t[7]=o=>a.marca_id=o)},[Se,(i(!0),d(_,null,m(l.filterMarcas(a.tipo_veiculo_id),o=>(i(),d("option",{key:o.id,value:o.id},r(o.nome_marca),9,Ve))),128))],512),[[u,a.marca_id]])]),e("div",qe,[De,n(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[8]||(t[8]=o=>a.nome=o)},null,512),[[x,a.nome]])])])]),e("div",Ue,[e("div",ze,[He,e("div",je,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[9]||(t[9]=o=>l.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),e("div",Be,[e("div",Ie,[e("div",Oe,[e("div",Je,[Pe,e("div",Re,[e("div",Ge,[Ke,e("div",Qe,[e("button",{type:"button",class:"btn btn-primary",onClick:t[10]||(t[10]=o=>l.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const Xe=y(F,[["render",We]]),Ye={name:"TheAddModelo",data(){return{nome:"",marca_id:"",desc:"desc",marcas:[],Api_tipo_veiculo:[],tipo_veiculo_id:""}},methods:{async add(){const s={nome_modelo:this.nome,marca_id:this.marca_id,descricao:this.desc};try{await N(s)&&(this.nome="",this.marca_id="",this.desc="",this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro"))}catch{}}},async created(){this.$store.state.marcas=await g(),this.Api_tipo_veiculo=await w()},computed:{filterMarcas(){return Array.isArray(this.marcas)?this.$store.state.marcas.filter(s=>s.tipo_veiculo_id==this.tipo_veiculo_id):(console.error("this.marcas não é uma matriz"),[])}}},Ze={class:"modal fade",id:"IDaddCarro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},eo={class:"modal-dialog"},oo={class:"modal-content"},to={class:"bg-dar"},so=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",{class:"far fa-user py-2 pt-0"}),T(),e("b",null,"Adicionar Modelo")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ao={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},lo={class:"mb-3"},io=e("label",{for:"",class:"form-label"},"Tipo de veiculo",-1),ro=e("option",{value:""},"Selecionar",-1),no=["value"],co={class:"mb-3"},_o=e("label",{for:"",class:"form-label"},"Marca",-1),mo=e("option",{value:""},"Selecionar",-1),ho=["value"],po={class:"mb-3"},uo=e("label",{for:"nome",class:"form-label"},"Modelo",-1),vo={class:"modal-footer"},fo={style:{display:"flex","flex-wrap":"wrap"}},bo=e("div",{class:"col-6"},[e("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),yo={class:"col-6"};function go(s,t,c,h,a,l){return i(),d("div",Ze,[e("div",eo,[e("div",oo,[e("div",to,[so,e("div",ao,[e("form",null,[e("div",lo,[io,n(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=o=>a.tipo_veiculo_id=o)},[ro,(i(!0),d(_,null,m(a.Api_tipo_veiculo,o=>(i(),d("option",{key:o.id,value:o.id},r(o.tipo_veiculo),9,no))),128))],512),[[u,a.tipo_veiculo_id]])]),e("div",co,[_o,n(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":t[1]||(t[1]=o=>a.marca_id=o)},[mo,(i(!0),d(_,null,m(l.filterMarcas,o=>(i(),d("option",{key:o.id,value:o.id},r(o.nome_marca),9,ho))),128))],512),[[u,a.marca_id]])]),e("div",po,[uo,n(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[2]||(t[2]=o=>a.nome=o)},null,512),[[x,a.nome]])])])]),e("div",vo,[e("div",fo,[bo,e("div",yo,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[3]||(t[3]=o=>l.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const wo=y(Ye,[["render",go]]),xo={components:{TheNavTop:A,TheAdminNavLateral2:C,TheModelos:Xe,TheAddModelo:wo},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Mo={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function To(s,t,c,h,a,l){const o=f("TheNavTop"),v=f("TheAdminNavLateral2"),$=f("TheModelos"),k=f("TheAddModelo");return i(),d("div",null,[b(o),e("div",Mo,[b(v,{onShow_menu_lateral:l.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),b($,{onShow_menu_lateral:l.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"]),b(k)])}const No=y(xo,[["render",To]]);export{No as default};
