import{T as E}from"./TheNavTop-7f95bda8.js";import{T as U}from"./TheAdminNavLateral2-afcd58c1.js";import{_ as v,V as k,W as F,k as _,X as N,Y as x,o as c,c as h,a as t,F as w,j as $,d as C,v as T,e as g,h as D,f as y,t as f,Z as A,r as u,b as p}from"./index-2c45083d.js";import"./TheForm_Login-28a0d15d.js";import"./loader-adfa670b.js";const L={name:"TheCategorias",data(){return{categorias:[],nome:"",desc:"desc",categDetalhe:[],imagem:null,file:"",file:null,thumbnailUrl:null,quality:.8}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async detalharCategoria(a){return await k("api/categorias/visualizar_categorias/",a)},async editar(){const a={nome:this.nome,descricao:this.desc};try{(await F(a,this.id)).data?(this.$store.state.categorias=await _(),this.uploadPhoto("foto_categoria",this.id)):this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}},async showgetDados(a){this.id=a,this.thumbnailUrl="",this.categDetalhe=await this.detalharCategoria(a),this.nome=this.categDetalhe.nome,this.desc=this.categDetalhe.descricao,this.imagem=this.categDetalhe.foto_categoria},modalApagar(a){this.id=a},async apagar(){try{const a=await N(this.id);setTimeout(async function(){this.$store.state.categorias=await _()}.bind(this),2e3),a.data||(this.showErrorMessage=!0)}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}},handleFileUpload(a){this.file=a.target.files[0],this.createThumbnail()},createThumbnail(){if(!this.file)return;const a=new FileReader;a.onload=e=>{const l=new Image;l.onload=()=>{const n=document.createElement("canvas"),r=n.getContext("2d");let o=400,s=400,i=l.width,d=l.height;i>d?i>o&&(d*=o/i,i=o):d>s&&(i*=s/d,d=s),n.width=i,n.height=d,r.drawImage(l,0,0,i,d),n.toBlob(b=>{this.file=new File([b],this.file.name,{type:"image/jpeg"})},"image/jpeg",this.quality);const m=n.toDataURL("image/jpeg",this.quality);this.thumbnailUrl=m},l.src=e.target.result},a.readAsDataURL(this.file)},async uploadPhoto(a,e){if(!this.file){alert("Please select a file.");return}const l=new FormData;l.append(a,this.file);try{const n=await x(l,e)}catch(n){console.error("Error uploading photo:",n),alert("Error uploading photo. Please try again later.")}}},async created(){this.$store.state.categorias=await _(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},q={class:"content"},M={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},I={class:"row"},V={class:"col-8 col-lg-10"},j={class:"row"},S={class:"col-2 pesquisar-filter p-0"},H=t("i",{class:"fas fa-filter fa-lg"},null,-1),P=[H],R=t("div",{class:"col-10 col-lg-6 p-0"},[t("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[t("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),t("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),z=D('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),B=t("div",null,[t("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[t("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[t("b",null,"Admin/Categorias")])])],-1),W={class:"position-relative",style:{height:"72vh"}},X={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},Y={class:"table"},Z=t("thead",{style:{"background-color":"crimson",color:"#fff"}},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Nome"),t("th",{scope:"col"},"Descrição"),t("th",{scope:"col",class:"text-center"},"Ações")])],-1),G={scope:"row"},J=t("td",null,"----",-1),K={class:"text-center"},O={style:{width:"100%"}},Q=t("i",{class:"fas fa-eye"},null,-1),tt=[Q],et=["onClick"],at=t("i",{class:"fas fa-pencil-alt"},null,-1),st=[at],ot=["onClick"],it=t("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCarro"},[t("i",{class:"fas fa-plus"})],-1),lt={class:"modal fade",id:"EditarCategoria",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},nt={class:"modal-dialog"},rt={class:"modal-content"},dt={class:"bg-dar",id:"criarAnuncio"},ct=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[t("span",{class:"fas fa-bullhorn py-2 pt-0"}),y(),t("b",null,"Editar Categoria")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),ht={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},mt={class:"mb-3"},ut=t("label",{for:"nome",class:"form-label"},"Nome",-1),pt={key:0,class:"",style:{width:"100%",height:"400px",position:"relative"}},_t=["src"],bt={class:"col-12",style:{position:"absolute",top:"0",left:"0"}},gt=t("label",{for:"foto_perfil",class:"me-2 btn btn-sm btn-primary"}," Editar ",-1),ft=t("button",{class:"btn btn-sm btn-secondary"},"Eliminar",-1),vt={key:0,style:{width:"100%",height:"400px",position:"relative"}},yt=["src"],wt={class:"col-12",style:{position:"absolute",top:"0",left:"0"}},xt=t("label",{for:"foto_perfil",class:"me-2 btn btn-sm btn-primary"}," Editar ",-1),Ct=t("button",{class:"btn btn-sm btn-secondary"},"Eliminar",-1),Tt={class:"modal-footer"},Dt={style:{display:"flex","flex-wrap":"wrap"}},Et=t("div",{class:"col-6"},[t("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),Ut={class:"col-6"},kt={class:"modal fade",id:"EliminarCategoria",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ft={class:"modal-dialog"},Nt={class:"modal-content"},$t={class:"bg-dar",id:"criarAnuncio"},At=D('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Categoria</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5>Confirme antes de <span style="color:red;">Eliminar</span>!</h5></div></div>',2),Lt={class:"modal-footer"},qt={style:{display:"flex","flex-wrap":"wrap"}},Mt=t("div",{class:"col-6"},[t("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),It={class:"col-6"};function Vt(a,e,l,n,r,o){return c(),h("main",q,[t("div",M,[t("div",I,[t("div",V,[t("div",j,[t("div",S,[t("div",{class:"pt-2",onClick:e[0]||(e[0]=(...s)=>o.show_menu_lateral&&o.show_menu_lateral(...s))},P)]),R])]),z])]),B,t("div",W,[t("div",X,[t("table",Y,[Z,t("tbody",null,[(c(!0),h(w,null,$(a.$store.state.categorias,s=>(c(),h("tr",{key:s.id},[t("th",G,f(s.id),1),t("td",null,f(s.nome),1),J,t("td",K,[t("div",O,[t("span",{onClick:e[1]||(e[1]=(...i)=>o.showDetalhes&&o.showDetalhes(...i)),hidden:""},tt),t("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarCategoria",onClick:i=>o.showgetDados(s.id)},st,8,et),t("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarCategoria",onClick:i=>o.modalApagar(s.id)},null,8,ot)])])]))),128))])])]),it]),t("div",lt,[t("div",nt,[t("div",rt,[t("div",dt,[ct,t("div",ht,[t("form",null,[t("div",mt,[ut,C(t("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[2]||(e[2]=s=>r.nome=s)},null,512),[[T,r.nome]])]),r.thumbnailUrl?(c(),h("div",pt,[r.thumbnailUrl?(c(),h("img",{key:0,src:r.thumbnailUrl,alt:"Thumbnail",class:"img-fluid"},null,8,_t)):g("",!0),t("div",bt,[gt,t("input",{id:"foto_perfil",type:"file",name:"",onChange:e[3]||(e[3]=(...s)=>o.handleFileUpload&&o.handleFileUpload(...s)),class:"form-control d-none"},null,32),ft])])):(c(),h(w,{key:1},[r.imagem?(c(),h("div",vt,[t("img",{class:"img-fluid deApagar custom-image",src:`${r.imagem}?v=${new Date().getTime()}`,alt:"regional motors"},null,8,yt),t("div",wt,[xt,t("input",{id:"foto_perfil",type:"file",name:"",onChange:e[4]||(e[4]=(...s)=>o.handleFileUpload&&o.handleFileUpload(...s)),class:"form-control d-none"},null,32),Ct])])):g("",!0)],64))])]),t("div",Tt,[t("div",Dt,[Et,t("div",Ut,[t("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[5]||(e[5]=s=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Atualizar ")])])])])])])]),t("div",kt,[t("div",Ft,[t("div",Nt,[t("div",$t,[At,t("div",Lt,[t("div",qt,[Mt,t("div",It,[t("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=s=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"}," Confirmar ")])])])])])])])])}const jt=v(L,[["render",Vt]]),St={name:"TheAddCategoria",data(){return{nome:"",desc:"desc",categDetalhe:"",file:null,thumbnailUrl:null,quality:.8}},methods:{async add(){const a={nome:this.nome,descricao:this.desc};try{const e=await A(a);e?(this.$store.state.adminID=null,this.$store.state.categorias=await _(),this.uploadPhoto("foto_categoria",e.id),this.nome=""):this.showErrorMessage=!0}catch(e){console.error("Erro na requisição:",e),this.showErrorMessage=!0}},handleFileUpload(a){this.file=a.target.files[0],this.createThumbnail()},createThumbnail(){if(!this.file)return;const a=new FileReader;a.onload=e=>{const l=new Image;l.onload=()=>{const n=document.createElement("canvas"),r=n.getContext("2d");let o=400,s=400,i=l.width,d=l.height;i>d?i>o&&(d*=o/i,i=o):d>s&&(i*=s/d,d=s),n.width=i,n.height=d,r.drawImage(l,0,0,i,d),n.toBlob(b=>{this.file=new File([b],this.file.name,{type:"image/jpeg"})},"image/jpeg",this.quality);const m=n.toDataURL("image/jpeg",this.quality);this.thumbnailUrl=m},l.src=e.target.result},a.readAsDataURL(this.file)},async uploadPhoto(a,e){if(!this.file){alert("Please select a file.");return}const l=new FormData;l.append(a,this.file);try{const n=await x(l,e);this.file=null,this.thumbnailUrl=null}catch(n){console.error("Erro ao carregar foto:",n),alert("Erro ao carregar foto. Tente novamente.")}},clearFile(){this.file=null,this.thumbnailUrl=null,this.$refs.fileInput.value=""}},async created(){}},Ht={class:"modal fade",id:"IDaddCarro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Pt={class:"modal-dialog"},Rt={class:"modal-content"},zt={class:"bg-dar"},Bt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",{class:"far fa-user py-2 pt-0"}),y(),t("b",null,"Adicionar Categoria")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),Wt={hidden:""},Xt={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Yt={class:"mb-3"},Zt=t("label",{for:"nome",class:"form-label"},"Nome",-1),Gt={class:"pt-3"},Jt=["src"],Kt={class:"modal-footer"},Ot={style:{display:"flex","flex-wrap":"wrap"}},Qt=t("div",{class:"col-6"},[t("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),te={class:"col-6"};function ee(a,e,l,n,r,o){return c(),h("div",Ht,[t("div",Pt,[t("div",Rt,[t("div",zt,[Bt,t("div",Wt,f(r.categDetalhe),1),t("div",Xt,[t("form",null,[t("div",Yt,[Zt,C(t("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":e[0]||(e[0]=s=>r.nome=s)},null,512),[[T,r.nome]])]),t("div",null,[y(" Carregar foto "),t("div",null,[t("input",{id:"foto_perfil",type:"file",name:"",onChange:e[1]||(e[1]=(...s)=>o.handleFileUpload&&o.handleFileUpload(...s)),class:"form-control"},null,32)]),t("div",Gt,[r.thumbnailUrl?(c(),h("img",{key:0,src:r.thumbnailUrl,alt:"Thumbnail"},null,8,Jt)):g("",!0)])])])]),t("div",Kt,[t("div",Ot,[Qt,t("div",te,[t("button",{type:"button",class:"ms-3 btn btn-primary",onClick:e[2]||(e[2]=s=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const ae=v(St,[["render",ee]]),se={components:{TheNavTop:E,TheAdminNavLateral2:U,TheCategorias:jt,TheAddCategoria:ae},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},oe={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function ie(a,e,l,n,r,o){const s=u("TheNavTop"),i=u("TheAdminNavLateral2"),d=u("TheCategorias"),m=u("TheAddCategoria");return c(),h("div",null,[p(s),t("div",oe,[p(i,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),p(d,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),p(m)])}const he=v(se,[["render",ie]]);export{he as default};
