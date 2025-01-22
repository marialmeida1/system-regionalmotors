import{T as A}from"./TheNavTop-5b6558a4.js";import{T as C}from"./TheAdminNavLateral2-2d8eceb9.js";import{_ as y,a5 as L,p,a6 as E,i as g,s as w,o as i,c as l,a as e,e as n,M as u,F as _,j as m,v as x,h as M,d as T,t as r,a7 as F,r as f,b}from"./index-c4720f3d.js";import"./TheForm_Login-6b0372e7.js";import"./loader-fe219ea8.js";const N={name:"TheModelos",data(){return{nome:"",marca_id:"",desc:"desc",marcas:[],Api_tipo_veiculo:[],tipo_veiculo_id:"",marcas:"",filter_tipo_veiculo:"",array_filtros:[],filter_marca:"",filter_modelo:"",modelos_filtrados:[]}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const o={nome_modelo:this.nome,marca_id:this.marca_id,descricao:this.desc};this.filter_tipo_veiculo="";try{(await L(o,this.id)).data?this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro"):this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}},showgetDados(o){this.id=o,this.modelos=this.$store.state.modelos.find(s=>s.id===this.id),this.nome=this.modelos.nome_modelo,this.tipo_veiculo_id=this.modelos.id_tipo_veiculo,this.marca_id=this.modelos.id_marca},modalApagar(o){this.id=o},async apagar(){this.filter_tipo_veiculo="";try{const o=await E(this.id);setTimeout(async function(){this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro")}.bind(this),2e3),o.data||(this.showErrorMessage=!0)}catch(o){console.error("Erro na requisição:",o),this.showErrorMessage=!0}},filterMarcas(o){return this.$store.state.marcas.filter(s=>s.tipo_veiculo_id==o)},filterMarcas_nome(o){return this.$store.state.marcas.filter(s=>s.tipo_veiculo==this.filter_tipo_veiculo)},async filterModelos_nome(o){this.applyFiltro("nome_tipo_veiculo",o)},async applyFiltro(o,s){if(s!="0"){const c={};this.array_filtros.forEach(t=>{c[t.chave]=t.valor}),c[o]=s,this.array_filtros=Object.keys(c).map(t=>({chave:t,valor:c[t]}));const h={};this.array_filtros.forEach(t=>{h[t.chave]=t.valor});const d=`api/modelos/listar_modelos?${Object.keys(h).map(t=>`${t}=${h[t]}`).join("&")}`;this.$store.state.modelos=await p(d)}else this.limparFiltro(),this.filter_tipo_veiculo="0",this.filter_marca="0",this.filter_modelo="0";this.$store.state.anuncios.length==0?this.$store.state.results=!1:this.$store.state.results=!0},async limparFiltro(){this.array_filtros=[],this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro")}},async created(){this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro"),this.$store.state.marcas=await g(),this.$store.state.tipo_veiculo=await w(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},S={class:"content"},V={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},q={class:"row"},D={class:"col-8 col-lg-10"},U={class:"row"},z={class:"col-2 pesquisar-filter p-0"},j=e("i",{class:"fas fa-filter fa-lg"},null,-1),H=[j],B=e("div",{class:"col-10 col-lg-6 p-0"},[e("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[e("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),e("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),I=M('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),O=e("div",null,[e("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[e("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[e("b",null,"Admin/Modelos")])])],-1),P={class:"position-relative",style:{height:"72vh"}},R={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},G={class:"table"},J=e("th",{scope:"col"},"#",-1),K={scope:"col"},Q=e("option",{value:"",selected:"",disabled:""}," Tipo de veiculo ",-1),W={value:"0"},X={key:0},Y={key:1},Z=["value"],ee={scope:"col"},te=e("option",{value:"",selected:"",disabled:""}," Marca ",-1),se={value:"0"},oe={key:0},ae={key:1},ie=["value"],le=e("th",{scope:"col"},null,-1),de=e("th",{scope:"col"}," --- ",-1),re=e("th",{scope:"col",class:"text-center"}," --- ",-1),ne=e("tr",{style:{"background-color":"crimson",color:"#fff"}},[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Tipo de veiculo"),e("th",{scope:"col"},"Marca"),e("th",{scope:"col"},"Modelo"),e("th",{scope:"col"},"Descrição"),e("th",{scope:"col",class:"text-center"},"Açoes")],-1),ce={scope:"row"},_e=e("td",null," ---- ",-1),me={class:"text-center"},he={style:{width:"100%"}},pe=e("i",{class:"fas fa-eye"},null,-1),ue=[pe],ve=["onClick"],fe=e("i",{class:"fas fa-pencil-alt"},null,-1),be=[fe],ye=["onClick"],ge=e("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCarro"},[e("i",{class:"fas fa-plus"})],-1),we={class:"modal fade",id:"EditarModelo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},xe={class:"modal-dialog"},Me={class:"modal-content"},Te={class:"bg-dar",id:"criarAnuncio"},$e=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[e("span",{class:"fas fa-bullhorn py-2 pt-0"}),T(),e("b",null,"Editar Modelo")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ke={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},Ae={class:"mb-3"},Ce=e("label",{for:"",class:"form-label"},"Tipo de veiculo",-1),Le=e("option",{value:""},"Selecionar",-1),Ee=["value"],Fe={class:"mb-3"},Ne=e("label",{for:"",class:"form-label"},"Marca",-1),Se=e("option",{value:""},"Selecionar",-1),Ve=["value"],qe={class:"mb-3"},De=e("label",{for:"nome",class:"form-label"},"Modelo",-1),Ue={class:"modal-footer"},ze={style:{display:"flex","flex-wrap":"wrap"}},je=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),He={class:"col-6"},Be={class:"modal fade",id:"EliminarModelo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ie={class:"modal-dialog"},Oe={class:"modal-content"},Pe={class:"bg-dar",id:"criarAnuncio"},Re=M('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Modelo</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),Ge={class:"modal-footer"},Je={style:{display:"flex","flex-wrap":"wrap"}},Ke=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Qe={class:"col-6"};function We(o,s,c,h,a,d){return i(),l("main",S,[e("div",V,[e("div",q,[e("div",D,[e("div",U,[e("div",z,[e("div",{class:"pt-2",onClick:s[0]||(s[0]=(...t)=>d.show_menu_lateral&&d.show_menu_lateral(...t))},H)]),B])]),I])]),O,e("div",P,[e("div",R,[e("table",G,[e("thead",null,[e("tr",null,[J,e("th",K,[e("div",null,[n(e("select",{class:"form-select",onChange:s[1]||(s[1]=t=>d.filterModelos_nome(t.target.value)),style:{width:"150px"},"onUpdate:modelValue":s[2]||(s[2]=t=>a.filter_tipo_veiculo=t)},[Q,e("option",W,[a.filter_tipo_veiculo=="0"?(i(),l("div",X," Tipo de veiculo ")):(i(),l("div",Y," Limpar filtro "))]),(i(!0),l(_,null,m(o.$store.state.tipo_veiculo,t=>(i(),l("option",{value:t.tipo_veiculo},r(t.tipo_veiculo),9,Z))),256))],544),[[u,a.filter_tipo_veiculo]])])]),e("th",ee,[e("div",null,[n(e("select",{class:"form-select",onChange:s[3]||(s[3]=t=>d.applyFiltro("nome_marca",t.target.value)),style:{width:"150px"},"onUpdate:modelValue":s[4]||(s[4]=t=>a.filter_marca=t)},[te,e("option",se,[a.filter_marca=="0"?(i(),l("div",oe," Marca ")):(i(),l("div",ae," Limpar filtro "))]),(i(!0),l(_,null,m(d.filterMarcas_nome(a.filter_tipo_veiculo),t=>(i(),l("option",{value:t.nome_marca},r(t.nome_marca),9,ie))),256))],544),[[u,a.filter_marca]])])]),le,de,re]),ne]),e("tbody",null,[(i(!0),l(_,null,m(o.$store.state.modelos,t=>(i(),l("tr",{key:t.id},[e("th",ce,r(t.id),1),e("td",null,r(t.nome_tipo_veiculo),1),e("td",null,r(t.nome_marca),1),e("td",null,r(t.nome_modelo),1),_e,e("td",me,[e("div",he,[e("span",{onClick:s[5]||(s[5]=(...v)=>d.showDetalhes&&d.showDetalhes(...v)),hidden:""},ue),e("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarModelo",onClick:v=>d.showgetDados(t.id)},be,8,ve),e("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarModelo",onClick:v=>d.modalApagar(t.id)},null,8,ye)])])]))),128))])])]),ge]),e("div",we,[e("div",xe,[e("div",Me,[e("div",Te,[$e,e("div",ke,[e("form",null,[e("div",Ae,[Ce,n(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[6]||(s[6]=t=>a.tipo_veiculo_id=t)},[Le,(i(!0),l(_,null,m(o.$store.state.tipo_veiculo,t=>(i(),l("option",{key:t.id,value:t.id},r(t.tipo_veiculo),9,Ee))),128))],512),[[u,a.tipo_veiculo_id]])]),e("div",Fe,[Ne,n(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[7]||(s[7]=t=>a.marca_id=t)},[Se,(i(!0),l(_,null,m(d.filterMarcas(a.tipo_veiculo_id),t=>(i(),l("option",{key:t.id,value:t.id},r(t.nome_marca),9,Ve))),128))],512),[[u,a.marca_id]])]),e("div",qe,[De,n(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[8]||(s[8]=t=>a.nome=t)},null,512),[[x,a.nome]])])])]),e("div",Ue,[e("div",ze,[je,e("div",He,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[9]||(s[9]=t=>d.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),e("div",Be,[e("div",Ie,[e("div",Oe,[e("div",Pe,[Re,e("div",Ge,[e("div",Je,[Ke,e("div",Qe,[e("button",{type:"button",class:"btn btn-primary",onClick:s[10]||(s[10]=t=>d.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const Xe=y(N,[["render",We]]),Ye={name:"TheAddModelo",data(){return{nome:"",marca_id:"",desc:"desc",marcas:[],Api_tipo_veiculo:[],tipo_veiculo_id:""}},methods:{async add(){const o={nome_modelo:this.nome,marca_id:this.marca_id,descricao:this.desc};try{await F(o)&&(this.nome="",this.marca_id="",this.desc="",this.$store.state.modelos=await p("api/modelos/listar_modelos?nome_tipo_veiculo=carro"))}catch{}}},async created(){this.$store.state.marcas=await g(),this.Api_tipo_veiculo=await w()},computed:{filterMarcas(){return Array.isArray(this.marcas)?this.$store.state.marcas.filter(o=>o.tipo_veiculo_id==this.tipo_veiculo_id):(console.error("this.marcas não é uma matriz"),[])}}},Ze={class:"modal fade",id:"IDaddCarro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},et={class:"modal-dialog"},tt={class:"modal-content"},st={class:"bg-dar"},ot=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",{class:"far fa-user py-2 pt-0"}),T(),e("b",null,"Adicionar Modelo")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),at={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},it={class:"mb-3"},lt=e("label",{for:"",class:"form-label"},"Tipo de veiculo",-1),dt=e("option",{value:""},"Selecionar",-1),rt=["value"],nt={class:"mb-3"},ct=e("label",{for:"",class:"form-label"},"Marca",-1),_t=e("option",{value:""},"Selecionar",-1),mt=["value"],ht={class:"mb-3"},pt=e("label",{for:"nome",class:"form-label"},"Modelo",-1),ut={class:"modal-footer"},vt={style:{display:"flex","flex-wrap":"wrap"}},ft=e("div",{class:"col-6"},[e("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),bt={class:"col-6"};function yt(o,s,c,h,a,d){return i(),l("div",Ze,[e("div",et,[e("div",tt,[e("div",st,[ot,e("div",at,[e("form",null,[e("div",it,[lt,n(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[0]||(s[0]=t=>a.tipo_veiculo_id=t)},[dt,(i(!0),l(_,null,m(a.Api_tipo_veiculo,t=>(i(),l("option",{key:t.id,value:t.id},r(t.tipo_veiculo),9,rt))),128))],512),[[u,a.tipo_veiculo_id]])]),e("div",nt,[ct,n(e("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[1]||(s[1]=t=>a.marca_id=t)},[_t,(i(!0),l(_,null,m(d.filterMarcas,t=>(i(),l("option",{key:t.id,value:t.id},r(t.nome_marca),9,mt))),128))],512),[[u,a.marca_id]])]),e("div",ht,[pt,n(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[2]||(s[2]=t=>a.nome=t)},null,512),[[x,a.nome]])])])]),e("div",ut,[e("div",vt,[ft,e("div",bt,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[3]||(s[3]=t=>d.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const gt=y(Ye,[["render",yt]]),wt={components:{TheNavTop:A,TheAdminNavLateral2:C,TheModelos:Xe,TheAddModelo:gt},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},xt={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Mt(o,s,c,h,a,d){const t=f("TheNavTop"),v=f("TheAdminNavLateral2"),$=f("TheModelos"),k=f("TheAddModelo");return i(),l("div",null,[b(t),e("div",xt,[b(v,{onShow_menu_lateral:d.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),b($,{onShow_menu_lateral:d.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"]),b(k)])}const Lt=y(wt,[["render",Mt]]);export{Lt as default};
