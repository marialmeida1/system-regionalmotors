import{T}from"./TheNavTop-f7da63f1.js";import{T as k}from"./TheAdminNavLateral2-cc469e8a.js";import{f as E,i as h,ar as F,as as M,h as f,at as A}from"./TheForm_Login-ace5df00.js";import{_ as y,o as l,c as n,a as s,f as _,l as g,F as b,i as v,v as w,e as x,d as $,t as c,r as m,b as u}from"./index-1046b078.js";import"./logo-5b4cc875.js";const N={name:"Theopcionais",data(){return{opcionais:[],nome:"",categoria_opcional_id:"",array_filtros:[]}},methods:{async applyFiltro(o,a){const d={};this.array_filtros.forEach(t=>{d[t.chave]=t.valor}),d[o]=a,this.array_filtros=Object.keys(d).map(t=>({chave:t,valor:d[t]}));const r={};this.array_filtros.forEach(t=>{r[t.chave]=t.valor});const e=`api/opcionais/listar_opcionais?${Object.keys(r).map(t=>`${t}=${r[t]}`).join("&")}`;this.$store.state.opcionais=await E(e),this.$store.state.anuncios.length==0?this.$store.state.results=!1:this.$store.state.results=!0},async limparFiltro(){this.array_filtros=[],this.$store.state.opcionais=await h(),this.$store.state.results=!0,this.filtro=""},show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(){const o={categoria_opcional_id:this.categoria_opcional_id,nome:this.nome};this.opcionaisFilter="";try{const a=await F(o,this.id);console.log("Ja esta"+a),a.data?this.$store.state.opcionais=await h():this.showErrorMessage=!0}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}},showgetDados(o){this.id=o,this.opcionais=this.$store.state.opcionais.find(a=>a.id==this.id),this.nome=this.opcionais.nome,this.categoria_opcional_id=this.opcionais.categoria_opcional_id},modalApagar(o){this.id=o,this.opcionaisFilter=""},async apagar(){console.log("Eliminando "+this.id);try{const o=await M(this.id);console.log("temp Ja eliminando"+o),setTimeout(async function(){this.$store.state.opcionais=await h()}.bind(this),2e3),o.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(o){console.error("Erro na requisição:",o),this.showErrorMessage=!0}}},async created(){this.$store.state.opcionais=await h(),this.$store.state.categoriaOpcionais=await f(),this.$store.state.categoriaOpcionais=await f(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},L={class:"content"},S={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},q={class:"row"},D={class:"col-8 col-lg-10"},V={class:"row"},U={class:"col-2 pesquisar-filter p-0"},z=s("i",{class:"fas fa-filter fa-lg"},null,-1),H=[z],I=s("div",{class:"col-10 col-lg-6 p-0"},[s("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[s("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),s("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),j=x('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=s("div",null,[s("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[s("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[s("b",null,"Admin/Opcionais")])])],-1),J={class:"position-relative",style:{height:"72vh"}},P={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},R={class:"table"},G=s("td",null,null,-1),K=s("td",null,null,-1),Q={class:"py-3"},W=s("option",{value:""}," Categoria Opcionais ",-1),X=["value"],Y=s("tr",{style:{"background-color":"crimson",color:"#fff"}},[s("th",{scope:"col"},[s("span",{class:"ms-2"},"#")]),s("th",{scope:"col",class:"p-2"},"Opcionais"),s("th",{scope:"col"},"Categoria Opcionais"),s("th",{scope:"col",class:"text-center"},"Açoes")],-1),Z={scope:"row"},ss={class:"text-center"},ts={style:{width:"100%"}},as=s("i",{class:"fas fa-eye"},null,-1),os=[as],es=["onClick"],is=s("i",{class:"fas fa-pencil-alt"},null,-1),ls=[is],ns=["onClick"],ds=s("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCarro"},[s("i",{class:"fas fa-plus"})],-1),rs={class:"modal fade",id:"EditarModelo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},cs={class:"modal-dialog"},ps={class:"modal-content"},hs={class:"bg-dar",id:"criarAnuncio"},_s=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[s("span",{class:"fas fa-bullhorn py-2 pt-0"}),$(),s("b",null,"Editar Opcionais")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ms={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},us={class:"mb-3"},bs=s("label",{for:"",class:"form-label"},"Categoria Opcional",-1),vs=s("option",null,"Selecionar",-1),fs=["value"],gs={class:"mb-3"},ys=s("label",{for:"nome",class:"form-label"},"Opcional",-1),ws={class:"modal-footer"},xs={style:{display:"flex","flex-wrap":"wrap"}},$s=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Os={class:"col-6"},Cs={class:"modal fade",id:"EliminarModelo",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ts={class:"modal-dialog"},ks={class:"modal-content"},Es={class:"bg-dar",id:"criarAnuncio"},Fs=x('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Opcionais</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),Ms={class:"modal-footer"},As={style:{display:"flex","flex-wrap":"wrap"}},Ns=s("div",{class:"col-6"},[s("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ls={class:"col-6"};function Ss(o,a,d,r,i,e){return l(),n("main",L,[s("div",S,[s("div",q,[s("div",D,[s("div",V,[s("div",U,[s("div",{class:"pt-2",onClick:a[0]||(a[0]=(...t)=>e.show_menu_lateral&&e.show_menu_lateral(...t))},H)]),I])]),j])]),B,s("div",J,[s("div",P,[s("table",R,[s("tr",null,[G,K,s("td",Q,[_(s("select",{class:"form-select","onUpdate:modelValue":a[1]||(a[1]=t=>o.opcionaisFilter=t),onChange:a[2]||(a[2]=t=>e.applyFiltro("nome_categoria",t.target.value))},[W,(l(!0),n(b,null,v(o.$store.state.categoriaOpcionais,t=>(l(),n("option",{value:t.nome},c(t.nome),9,X))),256))],544),[[g,o.opcionaisFilter]])])]),Y,s("tbody",null,[(l(!0),n(b,null,v(o.$store.state.opcionais,t=>(l(),n("tr",{key:t.id},[s("th",Z,c(t.id),1),s("td",null,c(t.nome),1),s("td",null,c(t.nome_categoria),1),s("td",ss,[s("div",ts,[s("span",{onClick:a[3]||(a[3]=(...p)=>e.showDetalhes&&e.showDetalhes(...p)),hidden:""},os),s("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarModelo",onClick:p=>e.showgetDados(t.id)},ls,8,es),s("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarModelo",onClick:p=>e.modalApagar(t.id)},null,8,ns)])])]))),128))])])]),ds]),s("div",rs,[s("div",cs,[s("div",ps,[s("div",hs,[_s,s("div",ms,[s("form",null,[s("div",us,[bs,_(s("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":a[4]||(a[4]=t=>i.categoria_opcional_id=t)},[vs,(l(!0),n(b,null,v(o.$store.state.categoriaOpcionais,t=>(l(),n("option",{key:t.id,value:t.id},c(t.nome),9,fs))),128))],512),[[g,i.categoria_opcional_id]])]),s("div",gs,[ys,_(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":a[5]||(a[5]=t=>i.nome=t)},null,512),[[w,i.nome]])])])]),s("div",ws,[s("div",xs,[$s,s("div",Os,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:a[6]||(a[6]=t=>e.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),s("div",Cs,[s("div",Ts,[s("div",ks,[s("div",Es,[Fs,s("div",Ms,[s("div",As,[Ns,s("div",Ls,[s("button",{type:"button",class:"btn btn-primary",onClick:a[7]||(a[7]=t=>e.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const qs=y(N,[["render",Ss]]),Ds={name:"TheAddModelo",data(){return{nome:"",categoria_opcional_id:"",desc:"",categ_opcionais:""}},methods:{async add(){const o={categoria_opcional_id:this.categoria_opcional_id,nome:this.nome};try{await A(o)&&(this.nome="",this.categoria_opcional_id="",this.$store.state.opcionais=await h())}catch{}}},async created(){this.categ_opcionais=await f(),console.log(this.categ_opcionais)}},Vs={class:"modal fade",id:"IDaddCarro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Us={class:"modal-dialog"},zs={class:"modal-content"},Hs={class:"bg-dar"},Is=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"exampleModalLabel"},[s("span",{class:"far fa-user py-2 pt-0"}),$(),s("b",null,"Adicionar item Opcional")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),js={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Bs={class:"mb-3"},Js=s("label",{for:"",class:"form-label"},"Categoria Opcional",-1),Ps=s("option",null,"Selecionar",-1),Rs=["value"],Gs={class:"mb-3"},Ks=s("label",{for:"nome",class:"form-label"},"Opcional",-1),Qs={class:"modal-footer"},Ws={style:{display:"flex","flex-wrap":"wrap"}},Xs=s("div",{class:"col-6"},[s("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ys={class:"col-6"};function Zs(o,a,d,r,i,e){return l(),n("div",Vs,[s("div",Us,[s("div",zs,[s("div",Hs,[Is,s("div",js,[s("form",null,[s("div",Bs,[Js,_(s("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":a[0]||(a[0]=t=>i.categoria_opcional_id=t)},[Ps,(l(!0),n(b,null,v(i.categ_opcionais,t=>(l(),n("option",{key:t.id,value:t.id},c(t.nome),9,Rs))),128))],512),[[g,i.categoria_opcional_id]])]),s("div",Gs,[Ks,_(s("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":a[1]||(a[1]=t=>i.nome=t)},null,512),[[w,i.nome]])])])]),s("div",Qs,[s("div",Ws,[Xs,s("div",Ys,[s("button",{type:"button",class:"ms-3 btn btn-primary",onClick:a[2]||(a[2]=t=>e.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const st=y(Ds,[["render",Zs]]),tt={components:{TheNavTop:T,TheAdminNavLateral2:k,TheOpcionais:qs,TheAddOpcionais:st},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){console.log("editar Categoria"),this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},at={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function ot(o,a,d,r,i,e){const t=m("TheNavTop"),p=m("TheAdminNavLateral2"),O=m("TheOpcionais"),C=m("TheAddOpcionais");return l(),n("div",null,[u(t),s("div",at,[u(p,{onShow_menu_lateral:e.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),u(O,{onShow_menu_lateral:e.handle_showHidden_menu_lateral,onEditarCategoria:e.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),u(C)])}const rt=y(tt,[["render",ot]]);export{rt as default};
