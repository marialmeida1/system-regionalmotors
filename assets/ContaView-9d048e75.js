import{_ as f,ai as x,T as m,o as p,c as d,a as t,f as _,t as n,r as h,b as g}from"./index-2c45083d.js";import{T as y}from"./TheNavTop-7f95bda8.js";import"./TheForm_Login-28a0d15d.js";import"./loader-adfa670b.js";const C={name:"TheConta",data(){return{anunciante:[],categDetalhe:"",file:null,thumbnailUrl:null,quality:.8,index:"",imageLogo:"",imageBanner:"",imageBannerMovel:"",admin:!1}},methods:{async handleFileUpload(l,o,c){this.file=o.target.files[0],this.createThumbnail();const i=localStorage.getItem("anunciante_id");this.uploadPhoto(l,c,i)},createThumbnail(){if(!this.file)return;const l=new FileReader;l.onload=o=>{const c=new Image;c.onload=()=>{const i=document.createElement("canvas"),e=i.getContext("2d");let a=400,s=400,r=c.width,u=c.height;r>u?r>a&&(u*=a/r,r=a):u>s&&(r*=s/u,u=s),i.width=r,i.height=u,e.drawImage(c,0,0,r,u),i.toBlob(v=>{this.file=new File([v],this.file.name,{type:"image/jpeg"})},"image/jpeg",this.quality);const b=i.toDataURL("image/jpeg",this.quality);this.thumbnailUrl=b},c.src=o.target.result},l.readAsDataURL(this.file)},async uploadPhoto(l,o,c){if(!this.file){alert("Please select a file.");return}const i=new FormData;i.append(o,this.file);try{if(await x(l,i,c)){const a=await m(localStorage.getItem("anunciante_id"));this.$store.state.fotosAnunciantes=a[0]}}catch(e){console.error("Error uploading photo:",e),alert("Error uploading photo. Please try again later.")}},clearFile(){this.file=null,this.thumbnailUrl=null,this.$refs.fileInput.value=""},visitarLoja(){this.$router.push({path:""+localStorage.getItem("anunciante_id")})},visitarAdmin(){localStorage.getItem("token")&&(localStorage.getItem("perfil")=="admin"?this.$router.push({path:"/anuncios"}):localStorage.getItem("perfil")=="superadmin"&&this.$router.push({path:"/admin-anuncios"}))},goToAdmin(){this.$router.push({path:"/admin-anuciantes"})}},async created(){const l=await m(localStorage.getItem("anunciante_id"));this.anunciante=l[0],this.$store.state.fotosAnunciantes=l[0],localStorage.getItem("perfil")=="superadmin"&&(this.admin=!0)}},T=t("br",null,null,-1),A=t("br",null,null,-1),w={class:"col-lg-8 col-11 mx-auto"},N={class:"op-7"},j={key:1},I=t("br",null,null,-1),k={class:"bg-white p-4 rounded-3 mb-3 position-relative"},B={class:"mb-3 mt-0 titulo-estado",style:{position:"absolute",top:"-5px",left:"25px",opacity:"0.6"}},L={key:0,class:"bg-success p-1 px-2 rounded-3"},P={key:1,class:"bg-dark p-1 rounded-3 px-2"},D=t("h5",{class:"op-7"},"Meus Dados",-1),E=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),F=t("p",{class:"titulo-text mt-0"},"Responsavel",-1),U=t("p",{class:"titulo-text mt-0"},"Tipo de Anunciante",-1),S=t("p",{class:"titulo-text mt-0"},"CNPJ",-1),q=t("p",{class:"titulo-text mt-0"},"Cep",-1),R=t("p",{class:"titulo-text mt-0"},"Cep comercial",-1),V=t("p",{class:"titulo-text mt-0"},"Número",-1),z=t("p",{class:"titulo-text mt-0"},"Número comercial",-1),M=t("p",{class:"titulo-text mt-0"},"Complemento",-1),W=t("p",{class:"titulo-text mt-0"},"Complemento comercial",-1),H={class:"bg-white p-4 rounded-3 mb-3"},J=t("h5",{class:"op-7"},"Contato",-1),G=t("p",{class:"titulo-text mt-0"},"Telefone",-1),K=t("p",{class:"titulo-text mt-0"},"Celular",-1),O=t("p",{class:"titulo-text mt-0"},"WhatsApp",-1),Q=t("h5",{class:"op-7"},"Plano",-1),X=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),Y=t("p",null,"Nome",-1),Z=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),$=t("p",null,"Nome",-1),tt={class:"bg-white p-4 rounded-3 mb-3"},et=t("h5",{class:"op-7"},"Localização",-1),ot=t("p",{class:"titulo-text mt-0"},"Endereço",-1),st=t("p",{class:"titulo-text mt-0"},"Bairro",-1),nt=t("h5",{class:"op-7"},"Plano",-1),at=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),lt=t("p",null,"Nome",-1),it=t("p",{class:"titulo-text mt-0"},"Nome da Empresa",-1),ct=t("p",null,"Nome",-1),rt={class:"bg-white p-4 rounded-3 mb-3"},ut=t("h5",{class:"op-7"},"Planos",-1),pt=t("p",{class:"titulo-text mt-0"},"Plano ativo",-1),dt=t("p",{class:"titulo-text mt-0"},"Bairro",-1),mt={class:"bg-white p-4 rounded-3 mb-3"},_t=t("h5",{class:"op-7"},"Imagens",-1),ht=t("p",{class:"titulo-text mt-0 mb-1"},"Logotipo",-1),gt={class:"mb-3 col-lg-4 col-6 py-3"},ft=["src"],bt={class:"mb-3"},vt=t("p",{class:"titulo-text mt-0 mb-1"},"Banner Desktop",-1),xt={class:"mb-3 col-lg-4 col-6 py-3"},yt=["src"],Ct={class:"mb-3"},Tt=t("p",{class:"titulo-text mt-0 mb-1"},"Banner Movel",-1),At={class:"mb-3 col-lg-4 col-6 py-3"},wt=["src"],Nt={class:"mb-3"},jt=t("br",null,null,-1),It=t("br",null,null,-1);function kt(l,o,c,i,e,a){return p(),d("div",null,[T,A,t("div",w,[t("h4",N,[e.admin?(p(),d("span",{key:0,onClick:o[0]||(o[0]=(...s)=>a.goToAdmin&&a.goToAdmin(...s)),style:{cursor:"pointer"}},"Admin")):(p(),d("span",j,"Conta")),_(" | "),t("span",{style:{"font-size":"14px"},class:"irParaLoja",onClick:o[1]||(o[1]=(...s)=>a.visitarLoja&&a.visitarLoja(...s))},"Ir para Loja"),_(" | "),t("span",{style:{"font-size":"14px"},class:"irParaLoja",onClick:o[2]||(o[2]=(...s)=>a.visitarAdmin&&a.visitarAdmin(...s))},"Ir para Admin")]),I,t("div",k,[t("p",B,[l.status==1?(p(),d("span",L,"Ativo")):(p(),d("span",P,"Bloqueado"))]),D,E,t("p",null,n(e.anunciante.nome_empresa),1),F,t("p",null,n(e.anunciante.pessoal_anunciante),1),U,t("p",null,n(e.anunciante.tipo_anunciante),1),S,t("p",null,n(e.anunciante.cnpj),1),q,t("p",null,n(e.anunciante.cep),1),R,t("p",null,n(e.anunciante.cep_comercial),1),V,t("p",null,n(e.anunciante.numero),1),z,t("p",null,n(e.anunciante.numero_comercial),1),M,t("p",null,n(e.anunciante.complemento),1),W,t("p",null,n(e.anunciante.complemento_comercial),1)]),t("div",H,[J,G,t("p",null,n(e.anunciante.telefone),1),K,t("p",null,n(e.anunciante.celular),1),O,t("p",null,n(e.anunciante.whatsapp),1),Q,X,Y,Z,$]),t("div",tt,[et,ot,t("p",null,n(e.anunciante.endereco),1),st,t("p",null,n(e.anunciante.bairro),1),nt,at,lt,it,ct]),t("div",rt,[ut,pt,t("p",null,n(e.anunciante.endereco),1),dt,t("p",null,n(e.anunciante.bairro),1)]),t("div",mt,[_t,ht,t("div",gt,[t("img",{src:l.$store.state.fotosAnunciantes.foto,alt:"",class:"img-fluid"},null,8,ft)]),t("div",bt,[t("input",{type:"file",name:"",class:"form-control",onChange:o[3]||(o[3]=s=>a.handleFileUpload("api/anunciantes/uploadFoto_anuciantes/",s,"foto"))},null,32)]),vt,t("div",xt,[t("img",{src:l.$store.state.fotosAnunciantes.banner_loja,class:"img-fluid"},null,8,yt)]),t("div",Ct,[t("input",{type:"file",name:"",class:"form-control",onChange:o[4]||(o[4]=s=>a.handleFileUpload("api/anunciantes/banner_loja_anuciantes/",s,"banner_loja"))},null,32)]),Tt,t("div",At,[t("img",{src:l.$store.state.fotosAnunciantes.banner_loja_movel,class:"img-fluid"},null,8,wt)]),t("div",Nt,[t("input",{type:"file",name:"",class:"form-control",onChange:o[5]||(o[5]=s=>a.handleFileUpload("api/anunciantes/banner_loja_movel_anuciantes/",s,"banner_loja_movel"))},null,32)])])]),jt,It])}const Bt=f(C,[["render",kt]]),Lt={components:{TheConta:Bt,TheNavTop:y}};function Pt(l,o,c,i,e,a){const s=h("TheNavTop"),r=h("TheConta");return p(),d("div",null,[g(s),g(r)])}const St=f(Lt,[["render",Pt]]);export{St as default};
