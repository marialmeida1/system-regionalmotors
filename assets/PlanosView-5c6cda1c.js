import{T as w}from"./TheNavTop-b6c4916a.js";import{T}from"./TheAdminNavLateral2-47721bad.js";import{Q as P,R as c,S as V,T as k}from"./loader-d85dd83c.js";import{_ as b,o as r,c as _,a as t,F as A,i as N,e as a,v as n,l as p,h as x,d as y,t as d,r as u,b as m}from"./index-ec975198.js";import"./TheForm_Login-c529c3b2.js";const U={name:"Theplanoorias",data(){return{planos:[],nome:"",quantidade_anuncios:"",valor:"",quantidade_anuncio_destaque:"",quantidade_anuncio_vitrine:"",dias_publicacao:"",texto_plano:"",quantidade_fotos:"",tipo:"",ativo:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async editar(i){this.$store.state.adminID=await i,this.$emit("editarplanooria",i)},async editar(){const i={nome:this.nome,activo:this.ativo,quantidade_anuncios:this.quantidade_anuncios,valor:this.valor,tipo:this.tipo,anuncio_destaque:"0",quantidade_anuncio_destaque:this.quantidade_anuncio_destaque,quantidade_anuncio_vitrine:this.quantidade_anuncio_vitrine,dias_publicacao:this.dias_publicacao,texto_plano:this.texto_plano,quantidade_fotos:this.quantidade_fotos,link_pagamento:"null"};try{(await P(i,this.id)).data?this.$store.state.planos=await c():this.showErrorMessage=!0}catch(s){console.error("Erro na requisição:",s),this.showErrorMessage=!0}},showgetDados(i){this.id=i,this.planos=this.$store.state.planos.find(s=>s.id==this.id),this.nome=this.planos.nome,this.quantidade_anuncios=this.planos.quantidade_anuncios,this.valor=this.planos.valor,this.quantidade_anuncio_destaque=this.planos.quantidade_anuncio_destaque,this.quantidade_anuncio_vitrine=this.planos.quantidade_anuncio_vitrine,this.dias_publicacao=this.planos.dias_publicacao,this.texto_plano=this.planos.texto_plano,this.quantidade_fotos=this.planos.quantidade_fotos,this.tipo=this.planos.tipo,this.ativo=this.planos.activo},modalApagar(i){this.id=i},async apagar(){try{const i=await V(this.id);setTimeout(async function(){this.$store.state.planos=await c()}.bind(this),2e3),i.data||(this.showErrorMessage=!0)}catch(i){console.error("Erro na requisição:",i),this.showErrorMessage=!0}}},async created(){this.$store.state.planos=await c(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},C={class:"content"},$={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},L={class:"row"},E={class:"col-8 col-lg-10"},F={class:"row"},D={class:"col-2 pesquisar-filter p-0"},M=t("i",{class:"fas fa-filter fa-lg"},null,-1),S=[M],Q=t("div",{class:"col-10 col-lg-6 p-0"},[t("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[t("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),t("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),R=x('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),I=t("div",null,[t("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[t("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[t("b",null,"Admin/Planos")])])],-1),z={class:"position-relative",style:{height:"72vh"}},H={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},B={class:"table"},j=t("thead",{style:{"background-color":"crimson",color:"#fff"}},[t("tr",null,[t("th",{scope:"col",hidden:""},"#"),t("th",{scope:"col"},"Nome"),t("th",{scope:"col"},"Activo"),t("th",{scope:"col"},[t("div",{style:{width:"205px"}}," Quantidade de anuncios ")]),t("th",{scope:"col"},"Valor"),t("th",{scope:"col"},"Tipo"),t("th",{scope:"col"},[t("div",{style:{width:"220px"}}," Anuncios em destaque ")]),t("th",{scope:"col"},[t("div",{style:{width:"220px"}}," Anuncios na vitrine ")]),t("th",{scope:"col"},[t("div",{style:{width:"180px"}}," Dias em publicaçao ")]),t("th",{scope:"col"},[t("div",{style:{width:"150px"}}," Texto do Plano ")]),t("th",{scope:"col"},[t("div",{style:{width:"105px"}}," Qtd de Fotos ")]),t("th",{scope:"col",hidden:""},[t("div",{style:{width:"160px"}}," Link de Pagamento ")]),t("th",{scope:"col",class:"text-center"},"Açoes")])],-1),G={scope:"row",hidden:""},J={scope:"col"},K={scope:"col"},O={scope:"col"},W={scope:"col"},X={style:{width:"100px"}},Y={scope:"col"},Z={scope:"col"},tt={scope:"col"},ot={scope:"col"},st={scope:"col"},et={scope:"col"},at={scope:"col",hidden:""},it={class:"text-center"},nt={style:{width:"100px"}},lt=["onClick"],dt=t("i",{class:"fas fa-pencil-alt"},null,-1),ct=[dt],rt=["onClick"],_t=t("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCarro"},[t("i",{class:"fas fa-plus"})],-1),ut={class:"modal fade",id:"EditarPlanoNow",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},mt={class:"modal-dialog"},pt={class:"modal-content"},ht={class:"bg-dar",id:"criarAnuncio"},bt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[t("span",{class:"fas fa-bullhorn py-2 pt-0"}),y(),t("b",null,"Editar Plano")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),vt={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},ft={class:"mb-3"},xt=t("label",{for:"nome",class:"form-label"},"Nome do Plano",-1),yt={class:"mb-3"},qt=t("label",{for:"",class:"form-label"},"Tipo",-1),gt=t("option",{value:"Particular"},"Particular",-1),wt=t("option",{value:"Revenda"},"Revenda",-1),Tt=[gt,wt],Pt={class:"mb-3"},Vt=t("label",{for:"nome",class:"form-label"},"Valor",-1),kt={class:"mb-3"},At=t("label",{for:"nome",class:"form-label"},"Quantidade de Anuncios",-1),Nt={class:"mb-3"},Ut=t("label",{for:"nome",class:"form-label"},"Total Anuncios em destaque",-1),Ct={class:"mb-3"},$t=t("label",{for:"nome",class:"form-label"},"Total Anuncios em vitrine",-1),Lt={class:"mb-3"},Et=t("label",{for:"",class:"form-label"},"Total dias em Publicaçao",-1),Ft={class:"mb-3"},Dt=t("label",{for:"nome",class:"form-label"},"Descrição",-1),Mt={class:"mb-3"},St=t("label",{for:"",class:"form-label"},"Quantidade de Fotos",-1),Qt={class:"mb-3 d-none"},Rt=t("label",{for:"nome",class:"form-label"},"Link de pagamento",-1),It={class:"mb-3"},zt=t("label",{for:"",class:"form-label"},"Activo",-1),Ht=t("option",{value:"1"},"Sim",-1),Bt=t("option",{value:"0"},"Nao",-1),jt=[Ht,Bt],Gt={class:"modal-footer"},Jt={style:{display:"flex","flex-wrap":"wrap"}},Kt=t("div",{class:"col-6"},[t("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ot={class:"col-6"},Wt={class:"modal fade",id:"EliminarPlano",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Xt={class:"modal-dialog"},Yt={class:"modal-content"},Zt={class:"bg-dar",id:"criarAnuncio"},to=x('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Estado</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),oo={class:"modal-footer"},so={style:{display:"flex","flex-wrap":"wrap"}},eo=t("div",{class:"col-6"},[t("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ao={class:"col-6"};function io(i,s,v,f,e,l){return r(),_("main",C,[t("div",$,[t("div",L,[t("div",E,[t("div",F,[t("div",D,[t("div",{class:"pt-2",onClick:s[0]||(s[0]=(...o)=>l.show_menu_lateral&&l.show_menu_lateral(...o))},S)]),Q])]),R])]),I,t("div",z,[t("div",H,[t("table",B,[j,t("tbody",null,[(r(!0),_(A,null,N(i.$store.state.planos,o=>(r(),_("tr",{key:o.id},[t("td",G,d(o.id),1),t("td",J,d(o.nome),1),t("td",K,d(o.activo),1),t("td",O,d(o.quantidade_anuncios),1),t("td",W,[t("div",X,"R$ "+d(o.valor),1)]),t("td",Y,d(o.tipo),1),t("td",Z,d(o.quantidade_anuncio_destaque),1),t("td",tt,d(o.quantidade_anuncio_vitrine),1),t("td",ot,d(o.dias_publicacao),1),t("td",st,d(o.texto_plano),1),t("td",et,d(o.quantidade_fotos),1),t("td",at,d(o.link_pagamento),1),t("td",it,[t("div",nt,[t("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarPlanoNow",onClick:h=>l.showgetDados(o.id)},ct,8,lt),t("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarPlano",onClick:h=>l.modalApagar(o.id)},null,8,rt)])])]))),128))])])]),_t]),t("div",ut,[t("div",mt,[t("div",pt,[t("div",ht,[bt,t("div",vt,[t("form",null,[t("div",ft,[xt,a(t("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[1]||(s[1]=o=>e.nome=o)},null,512),[[n,e.nome]])]),t("div",yt,[qt,a(t("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[2]||(s[2]=o=>e.tipo=o)},Tt,512),[[p,e.tipo]])]),t("div",Pt,[Vt,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[3]||(s[3]=o=>e.valor=o)},null,512),[[n,e.valor]])]),t("div",kt,[At,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[4]||(s[4]=o=>e.quantidade_anuncios=o)},null,512),[[n,e.quantidade_anuncios]])]),t("div",Nt,[Ut,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[5]||(s[5]=o=>e.quantidade_anuncio_destaque=o)},null,512),[[n,e.quantidade_anuncio_destaque]])]),t("div",Ct,[$t,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[6]||(s[6]=o=>e.quantidade_anuncio_vitrine=o)},null,512),[[n,e.quantidade_anuncio_vitrine]])]),t("div",Lt,[Et,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[7]||(s[7]=o=>e.dias_publicacao=o)},null,512),[[n,e.dias_publicacao]])]),t("div",Ft,[Dt,a(t("textarea",{class:"form-control",id:"exampleTextarea",rows:"3","onUpdate:modelValue":s[8]||(s[8]=o=>e.texto_plano=o)},`

                                  `,512),[[n,e.texto_plano]])]),t("div",Mt,[St,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[9]||(s[9]=o=>e.quantidade_fotos=o)},null,512),[[n,e.quantidade_fotos]])]),t("div",Qt,[Rt,a(t("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[10]||(s[10]=o=>e.nome=o)},null,512),[[n,e.nome]])]),t("div",It,[zt,a(t("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[11]||(s[11]=o=>e.ativo=o)},jt,512),[[p,e.ativo]])])])]),t("div",Gt,[t("div",Jt,[Kt,t("div",Ot,[t("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[12]||(s[12]=o=>l.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),t("div",Wt,[t("div",Xt,[t("div",Yt,[t("div",Zt,[to,t("div",oo,[t("div",so,[eo,t("div",ao,[t("button",{type:"button",class:"btn btn-primary",onClick:s[13]||(s[13]=o=>l.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const no=b(U,[["render",io]]),lo={name:"TheAddPlano",data(){return{nome:"",quantidade_anuncios:"",valor:"",quantidade_anuncio_destaque:"",quantidade_anuncio_vitrine:"",dias_publicacao:"",texto_plano:"",quantidade_fotos:"",tipo:"",activo:"1"}},methods:{async add(){const i={nome:this.nome,activo:this.activo,quantidade_anuncios:this.quantidade_anuncios,valor:this.valor,tipo:this.tipo,anuncio_destaque:"0",quantidade_anuncio_destaque:this.quantidade_anuncio_destaque,quantidade_anuncio_vitrine:this.quantidade_anuncio_vitrine,dias_publicacao:this.dias_publicacao,texto_plano:this.texto_plano,quantidade_fotos:this.quantidade_fotos,link_pagamento:"null"};try{await k(i)&&(this.nome="",this.quantidade_anuncios="",this.valor="",this.quantidade_anuncio_destaque="",this.quantidade_anuncio_vitrine="",this.dias_publicacao="",this.texto_plano="",this.quantidade_fotos="",this.tipo="",this.$store.state.planos=await c())}catch{}}},async created(){this.marcas=await c()}},co={class:"modal fade",id:"IDaddCarro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ro={class:"modal-dialog"},_o={class:"modal-content"},uo={class:"bg-dar"},mo=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",{class:"far fa-user py-2 pt-0"}),y(),t("b",null,"Novo Plano")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),po={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},ho={class:"mb-3"},bo=t("label",{for:"nome",class:"form-label"},"Nome do Plano",-1),vo={class:"mb-3"},fo=t("label",{for:"",class:"form-label"},"Tipo",-1),xo=t("option",{value:"Particular"},"Particular",-1),yo=t("option",{value:"Revenda"},"Revenda",-1),qo=[xo,yo],go={class:"mb-3"},wo=t("label",{for:"nome",class:"form-label"},"Valor",-1),To={class:"mb-3"},Po=t("label",{for:"nome",class:"form-label"},"Quantidade de Anuncios",-1),Vo={class:"mb-3"},ko=t("label",{for:"nome",class:"form-label"},"Total Anuncios em destaque",-1),Ao={class:"mb-3"},No=t("label",{for:"nome",class:"form-label"},"Total Anuncios em vitrine",-1),Uo={class:"mb-3"},Co=t("label",{for:"",class:"form-label"},"Total dias em Publicaçao",-1),$o={class:"mb-3"},Lo=t("label",{for:"nome",class:"form-label"},"Descrição",-1),Eo={class:"mb-3"},Fo=t("label",{for:"",class:"form-label"},"Quantidade de Fotos",-1),Do={class:"mb-3 d-none"},Mo=t("label",{for:"nome",class:"form-label"},"Link de pagamento",-1),So={class:"mb-3"},Qo=t("label",{for:"",class:"form-label"},"Activo",-1),Ro=t("option",{value:"1"},"Sim",-1),Io=t("option",{value:"0"},"Nao",-1),zo=[Ro,Io],Ho={class:"modal-footer"},Bo={style:{display:"flex","flex-wrap":"wrap"}},jo=t("div",{class:"col-6"},[t("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Go={class:"col-6"};function Jo(i,s,v,f,e,l){return r(),_("div",co,[t("div",ro,[t("div",_o,[t("div",uo,[mo,t("div",po,[t("form",null,[t("div",ho,[bo,a(t("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[0]||(s[0]=o=>e.nome=o)},null,512),[[n,e.nome]])]),t("div",vo,[fo,a(t("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[1]||(s[1]=o=>e.tipo=o)},qo,512),[[p,e.tipo]])]),t("div",go,[wo,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[2]||(s[2]=o=>e.valor=o)},null,512),[[n,e.valor]])]),t("div",To,[Po,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[3]||(s[3]=o=>e.quantidade_anuncios=o)},null,512),[[n,e.quantidade_anuncios]])]),t("div",Vo,[ko,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[4]||(s[4]=o=>e.quantidade_anuncio_destaque=o)},null,512),[[n,e.quantidade_anuncio_destaque]])]),t("div",Ao,[No,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[5]||(s[5]=o=>e.quantidade_anuncio_vitrine=o)},null,512),[[n,e.quantidade_anuncio_vitrine]])]),t("div",Uo,[Co,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[6]||(s[6]=o=>e.dias_publicacao=o)},null,512),[[n,e.dias_publicacao]])]),t("div",$o,[Lo,a(t("textarea",{class:"form-control",id:"exampleTextarea",rows:"3","onUpdate:modelValue":s[7]||(s[7]=o=>e.texto_plano=o)},`

                      `,512),[[n,e.texto_plano]])]),t("div",Eo,[Fo,a(t("input",{type:"number",class:"text form-control",id:"nome","onUpdate:modelValue":s[8]||(s[8]=o=>e.quantidade_fotos=o)},null,512),[[n,e.quantidade_fotos]])]),t("div",Do,[Mo,a(t("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":s[9]||(s[9]=o=>e.nome=o)},null,512),[[n,e.nome]])]),t("div",So,[Qo,a(t("select",{class:"form-select",name:"",id:"","onUpdate:modelValue":s[10]||(s[10]=o=>e.activo=o)},zo,512),[[p,e.activo]])])])]),t("div",Ho,[t("div",Bo,[jo,t("div",Go,[t("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[11]||(s[11]=o=>l.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const Ko=b(lo,[["render",Jo]]),Oo={components:{TheNavTop:w,TheAdminNavLateral2:T,ThePlanos:no,TheAddPlano:Ko},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},Wo={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function Xo(i,s,v,f,e,l){const o=u("TheNavTop"),h=u("TheAdminNavLateral2"),q=u("ThePlanos"),g=u("TheAddPlano");return r(),_("div",null,[m(o),t("div",Wo,[m(h,{onShow_menu_lateral:l.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),m(q,{onShow_menu_lateral:l.handle_showHidden_menu_lateral,onEditarCategoria:l.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),m(g)])}const es=b(Oo,[["render",Xo]]);export{es as default};
