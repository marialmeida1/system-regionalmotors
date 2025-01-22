import{T as D}from"./TheNavTop-f7da63f1.js";import{T as U}from"./TheAdminNavLateral2-cc469e8a.js";import{A as k,B as F,b as _,C as N,D as x,E as $}from"./TheForm_Login-ace5df00.js";import{_ as v,o as c,c as h,a as e,F as w,i as A,f as C,v as T,g as b,e as E,d as y,t as f,r as u,b as p}from"./index-1046b078.js";import"./logo-5b4cc875.js";const L={name:"TheCategorias",data(){return{categorias:[],nome:"",desc:"desc",categDetalhe:[],imagem:null,file:"",file:null,thumbnailUrl:null,quality:.8}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showDetalhes(){this.$router.push({path:"/detalhes"})},async detalharCategoria(a){return await k("api/categorias/visualizar_categorias/",a)},async editar(){const a={nome:this.nome,descricao:this.desc};try{(await F(a,this.id)).data?(this.$store.state.categorias=await _(),this.uploadPhoto("foto_categoria",this.id)):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},async showgetDados(a){this.id=a,this.thumbnailUrl="",this.categDetalhe=await this.detalharCategoria(a),console.log("Novo dado"),this.nome=this.categDetalhe.nome,this.desc=this.categDetalhe.descricao,this.imagem=this.categDetalhe.foto_categoria},modalApagar(a){this.id=a,console.log(a)},async apagar(){console.log("Eliminando "+this.id);try{const a=await N(this.id);console.log("temp Ja eliminando"+a),setTimeout(async function(){this.$store.state.categorias=await _()}.bind(this),2e3),a.data?console.log("Eliminou..."):this.showErrorMessage=!0}catch(a){console.error("Erro na requisição:",a),this.showErrorMessage=!0}},handleFileUpload(a){this.file=a.target.files[0],this.createThumbnail()},createThumbnail(){if(!this.file)return;const a=new FileReader;a.onload=t=>{const l=new Image;l.onload=()=>{const i=document.createElement("canvas"),r=i.getContext("2d");let o=400,s=400,n=l.width,d=l.height;n>d?n>o&&(d*=o/n,n=o):d>s&&(n*=s/d,d=s),i.width=n,i.height=d,r.drawImage(l,0,0,n,d),i.toBlob(g=>{this.file=new File([g],this.file.name,{type:"image/jpeg"})},"image/jpeg",this.quality);const m=i.toDataURL("image/jpeg",this.quality);this.thumbnailUrl=m},l.src=t.target.result},a.readAsDataURL(this.file)},async uploadPhoto(a,t){if(!this.file){alert("Please select a file.");return}console.log(a),console.log(this.file);const l=new FormData;l.append(a,this.file),console.log("Redimensionada"),console.log(l);try{const i=await x(l,t);console.log(i)}catch(i){console.error("Error uploading photo:",i),alert("Error uploading photo. Please try again later.")}}},async created(){this.$store.state.categorias=await _(),localStorage.getItem("token")||this.$router.push({path:"/login"})},mounted(){localStorage.getItem("perfil")!="superadmin"&&this.$router.push({path:"/anuncios"})}},q={class:"content"},M={class:"py-2",style:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"}},I={class:"row"},R={class:"col-8 col-lg-10"},S={class:"row"},V={class:"col-2 pesquisar-filter p-0"},j=e("i",{class:"fas fa-filter fa-lg"},null,-1),B=[j],H=e("div",{class:"col-10 col-lg-6 p-0"},[e("div",{class:"pesquisar",style:{width:"100%",position:"relative",border:"none"}},[e("input",{type:"text",class:"ps-4 pt-2",style:{width:"89%",color:"#000"},placeholder:"Digite a marca o modelo do carro"}),e("i",{class:"fas fa-search",style:{position:"absolute",left:"8px",top:"36%",bottom:"0",margin:"auto"}})])],-1),P=E('<div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes"><div class="row"><div class="pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-th-large fa-lg"></i></div><div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible"><i class="fas fa-th-list fa-lg"></i></div><div class="menu-link position-relative pesquisar-link-icon col-4 pt-3"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i><div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index:99;width:170px;left:-135px !important;"><div class="pb-3"></div><div class="bg-dark py-0 text-center" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"><p class="">Mais Relevantes</p></div></div></div></div><div></div></div>',1),z=e("div",null,[e("div",{class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},[e("span",{class:"me-2 p-1 px-2 rounded-3 bg-dark",style:{opacity:"0.6"}},[e("b",null,"Admin/Categorias")])])],-1),W={class:"position-relative",style:{height:"72vh"}},J={class:"p-2 pt-3 table-responsive",style:{height:"65vh"}},G={class:"table"},K=e("thead",{style:{"background-color":"crimson",color:"#fff"}},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Nome"),e("th",{scope:"col"},"Descrição"),e("th",{scope:"col",class:"text-center"},"Açoes")])],-1),O={scope:"row"},Q=e("td",null," ---- ",-1),X={class:"text-center"},Y={style:{width:"100%"}},Z=e("i",{class:"fas fa-eye"},null,-1),ee=[Z],te=["onClick"],ae=e("i",{class:"fas fa-pencil-alt"},null,-1),se=[ae],oe=["onClick"],le=e("button",{class:"btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center",style:{left:"8px"},type:"button","data-bs-toggle":"modal","data-bs-target":"#IDaddCarro"},[e("i",{class:"fas fa-plus"})],-1),ie={class:"modal fade",id:"EditarCategoria",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ne={class:"modal-dialog"},re={class:"modal-content"},de={class:"bg-dar",id:"criarAnuncio"},ce=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[e("span",{class:"fas fa-bullhorn py-2 pt-0"}),y(),e("b",null,"Editar Categoria")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),he={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},me={class:"mb-3"},ue=e("label",{for:"nome",class:"form-label"},"Nome",-1),pe={key:0,class:"",style:{width:"100%",height:"400px",position:"relative"}},_e=["src"],ge={class:"col-12",style:{position:"absolute",top:"0",left:"0"}},be=e("label",{for:"foto_perfil",class:"me-2 btn btn-sm btn-primary"}," Editar ",-1),fe=e("button",{class:"btn btn-sm btn-secondary"}," Eliminar ",-1),ve={key:0,style:{width:"100%",height:"400px",position:"relative"}},ye=["src"],we={class:"col-12",style:{position:"absolute",top:"0",left:"0"}},xe=e("label",{for:"foto_perfil",class:"me-2 btn btn-sm btn-primary"}," Editar ",-1),Ce=e("button",{class:"btn btn-sm btn-secondary"}," Eliminar ",-1),Te={class:"modal-footer"},Ee={style:{display:"flex","flex-wrap":"wrap"}},De=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ue={class:"col-6"},ke={class:"modal fade",id:"EliminarCategoria",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Fe={class:"modal-dialog"},Ne={class:"modal-content"},$e={class:"bg-dar",id:"criarAnuncio"},Ae=E('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel" style="font-size:17px;"><span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Categoria</b></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body" style="height:80px;overflow:auto;margin-bottom:1em;"><div><h5> Confirme antes de <span style="color:red;">Eliminar</span>! </h5></div></div>',2),Le={class:"modal-footer"},qe={style:{display:"flex","flex-wrap":"wrap"}},Me=e("div",{class:"col-6"},[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),Ie={class:"col-6"};function Re(a,t,l,i,r,o){return c(),h("main",q,[e("div",M,[e("div",I,[e("div",R,[e("div",S,[e("div",V,[e("div",{class:"pt-2",onClick:t[0]||(t[0]=(...s)=>o.show_menu_lateral&&o.show_menu_lateral(...s))},B)]),H])]),P])]),z,e("div",W,[e("div",J,[e("table",G,[K,e("tbody",null,[(c(!0),h(w,null,A(a.$store.state.categorias,s=>(c(),h("tr",{key:s.id},[e("th",O,f(s.id),1),e("td",null,f(s.nome),1),Q,e("td",X,[e("div",Y,[e("span",{onClick:t[1]||(t[1]=(...n)=>o.showDetalhes&&o.showDetalhes(...n)),hidden:""},ee),e("span",{class:"mx-3",type:"button","data-bs-toggle":"modal","data-bs-target":"#EditarCategoria",onClick:n=>o.showgetDados(s.id)},se,8,te),e("span",{class:"fas fa-trash-alt",type:"button","data-bs-toggle":"modal","data-bs-target":"#EliminarCategoria",onClick:n=>o.modalApagar(s.id)},null,8,oe)])])]))),128))])])]),le]),e("div",ie,[e("div",ne,[e("div",re,[e("div",de,[ce,e("div",he,[e("form",null,[e("div",me,[ue,C(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[2]||(t[2]=s=>r.nome=s)},null,512),[[T,r.nome]])]),r.thumbnailUrl?(c(),h("div",pe,[r.thumbnailUrl?(c(),h("img",{key:0,src:r.thumbnailUrl,alt:"Thumbnail",class:"img-fluid"},null,8,_e)):b("",!0),e("div",ge,[be,e("input",{id:"foto_perfil",type:"file",name:"",onChange:t[3]||(t[3]=(...s)=>o.handleFileUpload&&o.handleFileUpload(...s)),class:"form-control d-none"},null,32),fe])])):(c(),h(w,{key:1},[r.imagem?(c(),h("div",ve,[e("img",{class:"img-fluid deApagar custom-image",src:`${r.imagem}?v=${new Date().getTime()}`,alt:"regional motors"},null,8,ye),e("div",we,[xe,e("input",{id:"foto_perfil",type:"file",name:"",onChange:t[4]||(t[4]=(...s)=>o.handleFileUpload&&o.handleFileUpload(...s)),class:"form-control d-none"},null,32),Ce])])):b("",!0)],64))])]),e("div",Te,[e("div",Ee,[De,e("div",Ue,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[5]||(t[5]=s=>o.editar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"actualizar")])])])])])])]),e("div",ke,[e("div",Fe,[e("div",Ne,[e("div",$e,[Ae,e("div",Le,[e("div",qe,[Me,e("div",Ie,[e("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=s=>o.apagar()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Confirmar")])])])])])])])])}const Se=v(L,[["render",Re]]),Ve={name:"TheAddCategoria",data(){return{nome:"",desc:"desc",categDetalhe:"",file:null,thumbnailUrl:null,quality:.8}},methods:{async add(){const a={nome:this.nome,descricao:this.desc};try{const t=await $(a);console.log("categoria: "+t),t?(this.$store.state.adminID=null,this.$store.state.categorias=await _(),this.uploadPhoto("foto_categoria",t.id),this.nome=""):this.showErrorMessage=!0}catch(t){console.error("Erro na requisição:",t),this.showErrorMessage=!0}},handleFileUpload(a){this.file=a.target.files[0],this.createThumbnail()},createThumbnail(){if(!this.file)return;const a=new FileReader;a.onload=t=>{const l=new Image;l.onload=()=>{const i=document.createElement("canvas"),r=i.getContext("2d");let o=400,s=400,n=l.width,d=l.height;n>d?n>o&&(d*=o/n,n=o):d>s&&(n*=s/d,d=s),i.width=n,i.height=d,r.drawImage(l,0,0,n,d),i.toBlob(g=>{this.file=new File([g],this.file.name,{type:"image/jpeg"})},"image/jpeg",this.quality);const m=i.toDataURL("image/jpeg",this.quality);this.thumbnailUrl=m},l.src=t.target.result},a.readAsDataURL(this.file)},async uploadPhoto(a,t){if(!this.file){alert("Please select a file.");return}console.log(a),console.log(this.file);const l=new FormData;l.append(a,this.file),console.log("Redimensionada"),console.log(l);try{const i=await x(l,t);console.log(i),this.file=null,this.thumbnailUrl=null}catch(i){console.error("Erro ao carregar foto:",i),alert("Erro ao carregar foto. Tente novamente.")}},clearFile(){this.file=null,this.thumbnailUrl=null,this.$refs.fileInput.value=""}},async created(){}},je={class:"modal fade",id:"IDaddCarro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Be={class:"modal-dialog"},He={class:"modal-content"},Pe={class:"bg-dar"},ze=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",{class:"far fa-user py-2 pt-0"}),y(),e("b",null,"Adicionar Categoria")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),We={hidden:""},Je={class:"modal-body",style:{height:"370px",overflow:"auto","margin-bottom":"1em"}},Ge={class:"mb-3"},Ke=e("label",{for:"nome",class:"form-label"},"Nome",-1),Oe={class:"pt-3"},Qe=["src"],Xe={class:"modal-footer"},Ye={style:{display:"flex","flex-wrap":"wrap"}},Ze=e("div",{class:"col-6"},[e("button",{type:"button",class:"ms-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),et={class:"col-6"};function tt(a,t,l,i,r,o){return c(),h("div",je,[e("div",Be,[e("div",He,[e("div",Pe,[ze,e("div",We,f(r.categDetalhe),1),e("div",Je,[e("form",null,[e("div",Ge,[Ke,C(e("input",{type:"text",class:"text form-control",id:"nome","onUpdate:modelValue":t[0]||(t[0]=s=>r.nome=s)},null,512),[[T,r.nome]])]),e("div",null,[y(" Carregar foto "),e("div",null,[e("input",{id:"foto_perfil",type:"file",name:"",onChange:t[1]||(t[1]=(...s)=>o.handleFileUpload&&o.handleFileUpload(...s)),class:"form-control"},null,32)]),e("div",Oe,[r.thumbnailUrl?(c(),h("img",{key:0,src:r.thumbnailUrl,alt:"Thumbnail"},null,8,Qe)):b("",!0)])])])]),e("div",Xe,[e("div",Ye,[Ze,e("div",et,[e("button",{type:"button",class:"ms-3 btn btn-primary",onClick:t[2]||(t[2]=s=>o.add()),"data-bs-dismiss":"modal","aria-label":"Fechar"},"Adicionar")])])])])])])])}const at=v(Ve,[["render",tt]]),st={components:{TheNavTop:D,TheAdminNavLateral2:U,TheCategorias:Se,TheAddCategoria:at},data(){return{TheNavLateral:""}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},editarCategoriaNow(){console.log("editar Categoria"),this.$refs.theEditarCategoria.showgetDados()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral")}},ot={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral"};function lt(a,t,l,i,r,o){const s=u("TheNavTop"),n=u("TheAdminNavLateral2"),d=u("TheCategorias"),m=u("TheAddCategoria");return c(),h("div",null,[p(s),e("div",ot,[p(n,{onShow_menu_lateral:o.handle_showHidden_menu_lateral},null,8,["onShow_menu_lateral"])]),p(d,{onShow_menu_lateral:o.handle_showHidden_menu_lateral,onEditarCategoria:o.editarCategoriaNow},null,8,["onShow_menu_lateral","onEditarCategoria"]),p(m)])}const ht=v(st,[["render",lt]]);export{ht as default};
