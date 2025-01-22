import{T as $}from"./TheNavTop-34f35d91.js";import{T as k}from"./TheAdminNavLateral2-d117d1a7.js";import{_ as f,a2 as F,a3 as A,n as E,x as g,o as l,c as r,a as t,d as h,M as b,F as m,j as v,f as y,t as d,v as x,h as w,a4 as L,r as p,b as u}from"./index-5f4d2e43.js";import"./TheForm_Login-fdcb0aa5.js";import"./loader-a2a355df.js";const N={name:"TheMarcas",data(){return{nome:"",id_tipo_veiculo:"",desc:"desc",tipo_veiculo:[],marcas:"",filter_tipo_veiculo:"",array_filtros:[],filter_marca:"",marcas_filtradas:[]}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){this.filter_tipo_veiculo="";const a={nome_marca:this.nome,tipo_veiculo_id:this.id_tipo_veiculo,descricao:this.desc};try{(await F(a,this.id)).data?this.$store.state.marcas=this.applyFiltro("tipo_veiculo","carro"):this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}},showgetDados(a){this.id=a,this.marcas=this.$store.state.marcas.find(e=>e.id==this.id),this.nome=this.marcas.nome_marca,this.id_tipo_veiculo=this.marcas.tipo_veiculo_id,this.desc=this.marcas.descricao},modalApagar(a){this.id=a},async apagar(){this.filter_tipo_veiculo="";try{const a=await A(this.id);setTimeout(async function(){this.$store.state.marcas=this.applyFiltro("tipo_veiculo","carro")}.bind(this),2e3),a.data||(this.showErrorMessage=!0)}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}},async filterMarcas(a){this.applyFiltro("tipo_veiculo",a)},async applyFiltro(a,e){if(e!="0"){const c={};this.array_filtros.forEach(s=>{c[s.chave]=s.valor}),c[a]=e,this.array_filtros=Object.keys(c).map(s=>({chave:s,valor:c[s]}));const n={};this.array_filtros.forEach(s=>{n[s.chave]=s.valor});const i=`api/marcas/listar_marcas?${Object.keys(n).map(s=>`${s}=${n[s]}`).join("&")}`;this.$store.state.marcas=await E(i)}else this.limparFiltro(),this.filter_tipo_veiculo="0",this.filter_marca="0";this.$store.state.anuncios.length==0?this.$store.state.results=!1:this.$store.state.results=!0},async limparFiltro(){this.array_filtros=[],this.$store.state.marcas=this.applyFiltro("tipo_veiculo","carro")}},async created(){this.$store.state.marcas=this.applyFiltro("tipo_veiculo","carro"),this.tipo_veiculo=await g(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},C={class:"content"},S={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},V={class:"row"},q={class:"col-8 col-lg-10"},D={class:"row"},U={class:"col-2 pesquisar-filter p-0"},j=t("i",{class:"fas fa-filter fa-lg"},null,-1),z=[j],H=t("div",{class:"col-10 col-lg-6 p-0"},[t("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[t("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),t("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),B=w('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),I=t("div",null,[t("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[t("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[t("b",null,"Admin/Marcas")])])],-1),O={class:"position-relative",style:{height:"72vh"}},P={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},R={class:"table"},G=t("th",{scope:"col"},"#",-1),J={scope:"col"},K=t("option",{value:"",selected:"",disabled:""}," Tipo de veiculo ",-1),Q={value:"0"},W={key:0},X={key:1},Y=["value"],Z=t("th",{scope:"col"},null,-1),tt=t("th",{scope:"col"}," --- ",-1),st=t("th",{scope:"col",class:"text-center"}," --- ",-1),et=t("tr",{style:{"background-color":"crimson",color:"#fff"}},[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Tipo de Veiculo"),t("th",{scope:"col"},"Marca"),t("th",{scope:"col"},"Descrição"),t("th",{scope:"col",class:"text-center"},"Açoes")],-1),at={scope:"row"},ot=t("td",null," ---- ",-1),it={class:"text-center"},lt={style:{width:"100%"}},rt=t("i",{class:"fas fa-eye"},null,-1),ct=[rt],dt=["onClick"],nt=t("i",{class:"fas fa-pencil-alt"},null,-1),_t=[nt],ht=["onClick"],pt=t("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddMarcas"},[t("i",{class:"fas fa-plus"})],-1),ut={class:"modal fade",id:"EditarMarcaNow",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},mt={class:"modal-dialog"},vt={class:"modal-content"},bt={class:"bg-dar",id:"criarAnuncio"},ft=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[t("span",{class:"fas fa-bullhorn py-2 pt-0"}),y(),t("b",null,"Editar Marca")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),yt={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},gt={class:"mb-3"},xt=t("label",{for:"",class:"form-label"},"Tipo de veiculo",-1),wt=t("option",{value:""},"Selecionar",-1),Mt=["value"],Tt={class:"mb-3"},$t=t("label",{for:"nome",class:"form-label"},"Marca",-1),kt={class:"modal-footer"},Ft={style:{display:"flex","flex-wrap":"wrap"}},At=t("div",{class:"col-6"},[t("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Et={class:"col-6"},Lt={class:"modal fade",id:"EliminarMarca",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Nt={class:"modal-dialog"},Ct={class:"modal-content"},St={class:"bg-dar",id:"criarAnuncio"},Vt=w('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Estado</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),qt={class:"modal-footer"},Dt={style:{display:"flex","flex-wrap":"wrap"}},Ut=t("div",{class:"col-6"},[t("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),jt={class:"col-6"};function zt(a,e,c,n,o,i){return l(),r("main",C,[t("div",S,[t("div",V,[t("div",q,[t("div",D,[t("div",U,[t("div",{class:"pt-2",onClick:e[0]||(e[0]=(...s)=>i.show_menu_lateral&&i.show_menu_lateral(...s))},z)]),H])]),B])]),I,t("div",O,[t("div",P,[t("table",R,[t("thead",null,[t("tr",null,[G,t("th",J,[t("div",null,[h(t("select",{class:"form-select",style:{width:"150px"},"onUpdate:modelValue":e[1]||(e[1]=s=>o.filter_tipo_veiculo=s),onChange:e[2]||(e[2]=s=>i.filterMarcas(s.target.value))},[K,t("option",Q,[o.filter_tipo_veiculo=="0"?(l(),r("div",W," Tipo de veiculo ")):(l(),r("div",X," Limpar filtro "))]),(l(!0),r(m,null,v(o.tipo_veiculo,s=>(l(),r("option",{value:s.tipo_veiculo},d(s.tipo_veiculo),9,Y))),256))],544),[[b,o.filter_tipo_veiculo]])])]),Z,tt,st]),et]),t("tbody",null,[(l(!0),r(m,null,v(a.$store.state.marcas,s=>(l(),r("tr",{key:s.id},[t("th",at,d(s.id),1),t("td",null,d(s.tipo_veiculo),1),t("td",null,d(s.nome_marca),1),ot,t("td",it,[t("div",lt,[t("span",{onClick:e[3]||(e[3]=(..._)=>i.showDetalhes&&i.showDetalhes(..._)),hidden:""},ct),t("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarMarcaNow",onClick:_=>i.showgetDados(s.id)},_t,8,dt),t("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarMarca",onClick:_=>i.modalApagar(s.id)},null,8,ht)])])]))),128))])])]),pt]),t("div",ut,[t("div",mt,[t("div",vt,[t("div",bt,[ft,t("div",yt,[t("form",null,[t("div",gt,[xt,y(" "+d(o.id_tipo_veiculo)+" ",1),h(t("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":e[4]||(e[4]=s=>o.id_tipo_veiculo=s)},[wt,(l(!0),r(m,null,v(o.tipo_veiculo,s=>(l(),r("option",{key:s.id,value:s.id},d(s.tipo_veiculo),9,Mt))),128))],512),[[b,o.id_tipo_veiculo]])]),t("div",Tt,[$t,h(t("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[5]||(e[5]=s=>o.nome=s)},null,512),[[x,o.nome]])])])]),t("div",kt,[t("div",Ft,[At,t("div",Et,[t("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[6]||(e[6]=s=>i.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Atualizar")])])])])])])]),t("div",Lt,[t("div",Nt,[t("div",Ct,[t("div",St,[Vt,t("div",qt,[t("div",Dt,[Ut,t("div",jt,[t("button",{type:"button",class:"btn btn-primary",onClick:e[7]||(e[7]=s=>i.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const Ht=f(N,[["render",zt]]),Bt={name:"TheAddMarca",data(){return{nome:"",id_tipo_veiculo:"",desc:"desc",tipo_veiculo:[]}},methods:{async add(){const a={nome_marca:this.nome,tipo_veiculo_id:this.id_tipo_veiculo,descricao:this.desc};try{await L(a)&&(this.nome="",this.marca_id="",this.desc="",this.$store.state.marcas=this.applyFiltro("tipo_veiculo","carro"))}catch{}}},async created(){this.tipo_veiculo=await g()}},It={class:"modal fade",id:"IDaddMarcas",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ot={class:"modal-dialog"},Pt={class:"modal-content"},Rt={class:"bg-dar"},Gt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",{class:"far fa-user py-2 pt-0"}),y(),t("b",null,"Adicionar Marca")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Jt={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Kt={class:"mb-3"},Qt=t("label",{for:"",class:"form-label"},"Tipo de veiculo",-1),Wt=t("option",{value:""},"Selecionar",-1),Xt=["value"],Yt={class:"mb-3"},Zt=t("label",{for:"nome",class:"form-label"},"Marca",-1),ts={class:"modal-footer"},ss={style:{display:"flex","flex-wrap":"wrap"}},es=t("div",{class:"col-6"},[t("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),as={class:"col-6"};function os(a,e,c,n,o,i){return l(),r("div",It,[t("div",Ot,[t("div",Pt,[t("div",Rt,[Gt,t("div",Jt,[t("form",null,[t("div",Kt,[Qt,h(t("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":e[0]||(e[0]=s=>o.id_tipo_veiculo=s)},[Wt,(l(!0),r(m,null,v(o.tipo_veiculo,s=>(l(),r("option",{key:s.id,value:s.id},d(s.tipo_veiculo),9,Xt))),128))],512),[[b,o.id_tipo_veiculo]])]),t("div",Yt,[Zt,h(t("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[1]||(e[1]=s=>o.nome=s)},null,512),[[x,o.nome]])])])]),t("div",ts,[t("div",ss,[es,t("div",as,[t("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[2]||(e[2]=s=>i.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const is=f(Bt,[["render",os]]),ls={components:{TheNavTop:$,TheAdminNavLateral2:k,TheMarcas:Ht,TheAddMarca:is},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},rs={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function cs(a,e,c,n,o,i){const s=p("TheNavTop"),_=p("TheAdminNavLateral2"),M=p("TheMarcas"),T=p("TheAddMarca");return l(),r("div",null,[u(s),t("div",rs,[u(_,{onShow_menu_lateral:i.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),u(M,{onShow_menu_lateral:i.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"]),u(T)])}const us=f(ls,[["render",cs]]);export{us as default};
