import{Z as v,y as d}from"./loader-db361ff1.js";import{_ as f,o as p,c as _,a as t,d as m,t as s,r as h,b as g}from"./index-f12d6990.js";import{T as y}from"./TheNavTop-276c5d1c.js";import"./TheForm_Login-3f8cf608.js";import"./logo-5b4cc875.js";const C={name:"TheConta",data(){return{anunciante:[],categDetalhe:"",file:null,thumbnailUrl:null,quality:.8,index:"",imageLogo:"",imageBanner:"",imageBannerMovel:"",admin:!1}},methods:{async handleFileUpload(n,o,c){this.file=o.target.files[0],this.createThumbnail();const i=localStorage.getItem("anunciante_id");this.uploadPhoto(n,c,i)},createThumbnail(){if(!this.file)return;const n=new FileReader;n.onload=o=>{const c=new Image;c.onload=()=>{const i=document.createElement("canvas"),e=i.getContext("2d");let a=400,l=400,r=c.width,u=c.height;r>u?r>a&&(u*=a/r,r=a):u>l&&(r*=l/u,u=l),i.width=r,i.height=u,e.drawImage(c,0,0,r,u),i.toBlob(x=>{this.file=new File([x],this.file.name,{type:"image/jpeg"})},"image/jpeg",this.quality);const b=i.toDataURL("image/jpeg",this.quality);this.thumbnailUrl=b},c.src=o.target.result},n.readAsDataURL(this.file)},async uploadPhoto(n,o,c){if(!this.file){alert("Please select a file.");return}console.log(o),console.log(this.file);const i=new FormData;i.append(o,this.file),console.log("Redimensionada"),console.log(i);try{const e=await v(n,i,c);if(console.log(e),e){const a=await d(localStorage.getItem("anunciante_id"));this.$store.state.fotosAnunciantes=a[0]}}catch(e){console.error("Error uploading photo:",e),alert("Error uploading photo. Please try again later.")}},clearFile(){this.file=null,this.thumbnailUrl=null,this.$refs.fileInput.value=""},visitarLoja(){this.$router.push({path:"/loja/"+localStorage.getItem("anunciante_id")})},goToAdmin(){this.$router.push({path:"/admin-anuciantes"})}},async created(){const n=await d(localStorage.getItem("anunciante_id"));this.anunciante=n[0],this.$store.state.fotosAnunciantes=n[0],localStorage.getItem("perfil")=="superadmin"&&(this.admin=!0)}},T=t("br",null,null,-1),w=t("br",null,null,-1),N={class:"col-lg-8 col-11 mx-auto"},j={class:"op-7"},A={key:1},B=t("br",null,null,-1),k={class:"bg-white p-4 rounded-3 mb-3 position-relative"},E={class:"mb-3 mt-0 titulo-estado",style:{position:"absolute",top:"-5px",left:"25px",opacity:"0.6"}},I={key:0,class:"bg-success p-1 px-2 rounded-3"},L={key:1,class:"bg-dark p-1 rounded-3 px-2"},P=t("h5",{class:"op-7"},"Meus Dados",-1),U=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),D=t("p",{class:"titulo-text mt-0"},"Responsavel",-1),F=t("p",{class:"titulo-text mt-0"},"Tipo de Anunciante",-1),S=t("p",{class:"titulo-text mt-0"},"CNPJ",-1),R=t("p",{class:"titulo-text mt-0"},"Cep",-1),q=t("p",{class:"titulo-text mt-0"},"Cep comercial",-1),V=t("p",{class:"titulo-text mt-0"},"Número",-1),M=t("p",{class:"titulo-text mt-0"},"Número comercial",-1),z=t("p",{class:"titulo-text mt-0"},"Complemento",-1),W=t("p",{class:"titulo-text mt-0"},"Complemento comercial",-1),H={class:"bg-white p-4 rounded-3 mb-3"},J=t("h5",{class:"op-7"},"Contato",-1),Z=t("p",{class:"titulo-text mt-0"},"Telefone",-1),G=t("p",{class:"titulo-text mt-0"},"Celular",-1),K=t("p",{class:"titulo-text mt-0"},"WhatsApp",-1),O=t("h5",{class:"op-7"},"Plano",-1),Q=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),X=t("p",null,"Nome",-1),Y=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),$=t("p",null,"Nome",-1),tt={class:"bg-white p-4 rounded-3 mb-3"},et=t("h5",{class:"op-7"},"Localização",-1),ot=t("p",{class:"titulo-text mt-0"},"Endereço",-1),st=t("p",{class:"titulo-text mt-0"},"Bairro",-1),nt=t("h5",{class:"op-7"},"Plano",-1),lt=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),at=t("p",null,"Nome",-1),it=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),ct=t("p",null,"Nome",-1),rt={class:"bg-white p-4 rounded-3 mb-3"},ut=t("h5",{class:"op-7"},"Planos",-1),pt=t("p",{class:"titulo-text mt-0"},"Plano activo ",-1),_t=t("p",{class:"titulo-text mt-0"},"Bairro",-1),dt={class:"bg-white p-4 rounded-3 mb-3"},mt=t("h5",{class:"op-7"},"Imagens",-1),ht=t("p",{class:"titulo-text mt-0 mb-1"},"Logotipo",-1),gt={class:"mb-3 col-lg-4 col-6 py-3"},ft=["src"],bt={class:"mb-3"},xt=t("p",{class:"titulo-text mt-0 mb-1"},"Banner Desktop",-1),vt={class:"mb-3 col-lg-4 col-6 py-3"},yt=["src"],Ct={class:"mb-3"},Tt=t("p",{class:"titulo-text mt-0 mb-1"},"Banner Movel",-1),wt={class:"mb-3 col-lg-4 col-6 py-3"},Nt=["src"],jt={class:"mb-3"},At=t("br",null,null,-1),Bt=t("br",null,null,-1);function kt(n,o,c,i,e,a){return p(),_("div",null,[T,w,t("div",N,[t("h4",j,[e.admin?(p(),_("span",{key:0,onClick:o[0]||(o[0]=(...l)=>a.goToAdmin&&a.goToAdmin(...l)),style:{cursor:"pointer"}},"Admin")):(p(),_("span",A,"Conta")),m(" | "),t("span",{style:{"font-size":"14px"},class:"irParaLoja",onClick:o[1]||(o[1]=(...l)=>a.visitarLoja&&a.visitarLoja(...l))},"Ir para Loja")]),m(),B,t("div",k,[t("p",E,[n.status==1?(p(),_("span",I,"Ativo")):(p(),_("span",L,"Bloqueado"))]),P,U,t("p",null,s(e.anunciante.nome_empresa),1),D,t("p",null,s(e.anunciante.pessoal_anunciante),1),F,t("p",null,s(e.anunciante.tipo_anunciante),1),S,t("p",null,s(e.anunciante.cnpj),1),R,t("p",null,s(e.anunciante.cep),1),q,t("p",null,s(e.anunciante.cep_comercial),1),V,t("p",null,s(e.anunciante.numero),1),M,t("p",null,s(e.anunciante.numero_comercial),1),z,t("p",null,s(e.anunciante.complemento),1),W,t("p",null,s(e.anunciante.complemento_comercial),1)]),t("div",H,[J,Z,t("p",null,s(e.anunciante.telefone),1),G,t("p",null,s(e.anunciante.celular),1),K,t("p",null,s(e.anunciante.whatsapp),1),O,Q,X,Y,$]),t("div",tt,[et,ot,t("p",null,s(e.anunciante.endereco),1),st,t("p",null,s(e.anunciante.bairro),1),nt,lt,at,it,ct]),t("div",rt,[ut,pt,t("p",null,s(e.anunciante.endereco),1),_t,t("p",null,s(e.anunciante.bairro),1)]),t("div",dt,[mt,ht,t("div",gt,[t("img",{src:n.$store.state.fotosAnunciantes.foto,alt:"",class:"img-fluid"},null,8,ft)]),t("div",bt,[t("input",{type:"file",name:"",class:"form-control",onChange:o[2]||(o[2]=l=>a.handleFileUpload("api/anunciantes/uploadFoto_anuciantes/",l,"foto"))},null,32)]),xt,t("div",vt,[t("img",{src:n.$store.state.fotosAnunciantes.banner_loja,class:"img-fluid"},null,8,yt)]),t("div",Ct,[t("input",{type:"file",name:"",class:"form-control",onChange:o[3]||(o[3]=l=>a.handleFileUpload("api/anunciantes/banner_loja_anuciantes/",l,"banner_loja"))},null,32)]),Tt,t("div",wt,[t("img",{src:n.$store.state.fotosAnunciantes.banner_loja_movel,class:"img-fluid"},null,8,Nt)]),t("div",jt,[t("input",{type:"file",name:"",class:"form-control",onChange:o[4]||(o[4]=l=>a.handleFileUpload("api/anunciantes/banner_loja_movel_anuciantes/",l,"banner_loja_movel"))},null,32)])])]),At,Bt])}const Et=f(C,[["render",kt]]),It={components:{TheConta:Et,TheNavTop:y}};function Lt(n,o,c,i,e,a){const l=h("TheNavTop"),r=h("TheConta");return p(),_("div",null,[g(l),g(r)])}const Rt=f(It,[["render",Lt]]);export{Rt as default};
