import{_ as b,Q as v,B as x,o as i,c as a,a as e,e as n,t as f,F as p,f as F}from"./index-bc603e74.js";const k="/upload1.gif";const C={name:"TheCarregarFoto",data(){return{id:"",criarAnuncio:"",maxWidth:300,maxHeight:300,photos:[],marcas:[],modelos:"",marcaSelecionada:null,modeloSelecionado:"",desc:"",previewImage:null,validate_moto:!0,cont:0,detalharAnuncios:[],uploading:!1,varIndex:null,totalFotos:"",multiArray:""}},methods:{handleFileChange(s,t){const r=s.target.files[0];this.uploadingFoto(r,t)},async uploadingFoto(s,t){const r=s;if(!r){this.allowed=!1;return}this.allowed=!0,this.uploading=!0;try{const c=new FormData;c.append(t,r,r.name);try{if(await v(c,this.$store.state.anuncioID)){this.uploading=!1;const l=await x(this.$store.state.anuncioID);this.$store.state.detalharAnuncios=l[0],this.$store.state.foto1=this.$store.state.detalharAnuncios.foto1,this.$store.state.foto2=this.$store.state.detalharAnuncios.foto2,this.$store.state.foto3=this.$store.state.detalharAnuncios.foto3,this.$store.state.foto4=this.$store.state.detalharAnuncios.foto4,this.$store.state.foto5=this.$store.state.detalharAnuncios.foto5,this.$store.state.foto6=this.$store.state.detalharAnuncios.foto6,this.$store.state.foto7=this.$store.state.detalharAnuncios.foto7,this.$store.state.foto8=this.$store.state.detalharAnuncios.foto8,this.$store.state.foto9=this.$store.state.detalharAnuncios.foto9,this.$store.state.foto10=this.$store.state.detalharAnuncios.foto10}}catch(d){console.error("Erro na solicitação:",d)}}catch(c){console.error(c)}},async redimensionarImagem(s,t,r){return new Promise((c,d)=>{const l=new FileReader;l.onload=o=>{const g=new Image;g.onload=()=>{const h=document.createElement("canvas"),u=h.getContext("2d");h.width=t,h.height=r,u.drawImage(g,0,0,t,r),h.toBlob(m=>{const y=new File([m],s.name,{type:s.type});c(y)},s.type)},g.src=o.target.result},l.readAsDataURL(s)})},dataURLtoFile(s,t){const r=s.split(","),c=r[0].match(/:(.*?);/)[1],d=atob(r[1]);let l=d.length;const o=new Uint8Array(l);for(;l--;)o[l]=d.charCodeAt(l);return new File([o],t,{type:c})},async multFileUpload(s){const t=s.target.files;if(this.multImagens=t,this.totalFotos=1,this.multiArray=this.multImagens.length,this.multImagens.length>9)alert("Atenção: Selecione apenas 9 fotos");else{for(let r=1;r<=this.multImagens.length;r++){const c=this.multImagens[r],d=r+1;this.varIndex="foto"+d,await this.uploadingFoto(c,this.varIndex),this.totalFotos++}this.$refs.fileInput.value="",this.selectedFile=null,this.totalFotos=null,this.multiArray=null}},showCarregarFotos(){this.previewImage=null;var s=new bootstrap.Modal(modal);s.show()},exibeCarregarFoto(){this.previewImage=null;var s=new bootstrap.Modal(modal);s.show()},selMoto(){this.validate_moto=!1},eliminarFoto(){alert("Esta foto ainda nao pode ser eliminada.")}},mounted(){}},w={class:"modal fade",id:"CarregarFotos",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},_={class:"modal-dialog"},I={class:"modal-content"},$={class:"bg-dar"},j={class:"modal-header"},A=e("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[e("span",{class:"fas fa-images py-2 pt-0"}),F(),e("b",null,"Carregar Fotos")],-1),D={class:"modal-body",style:{height:"480px !important",overflow:"auto","margin-bottom":"1em",position:"relative"}},T={class:"row"},z={key:0,class:"mb-3 col-md-6 col-lg-6"},B={class:"image-preview position-relative bg-dark rounded-3 overflow-hidden",style:{height:"200px"}},U=["src"],M={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},E={hidden:""},L={key:1,class:"col-md-6 col-lg-6 px-1"},S={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},N=e("label",{for:"foto1",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),R={key:2,class:"mb-3 col-md-6 col-lg-6"},V={class:"image-preview bg-dark position-relative overflow-hidden rounded-3",style:{height:"200px"}},P=["src"],Q={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},q={hidden:""},G={key:0,class:"col-md-6 col-lg-6 px-1"},H={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},J=e("label",{for:"foto1",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{"font-size":"10px",position:"absolute",top:"68px",left:"20px"},class:"me-2"},"carregar varias")])],-1),K={key:4,class:"mb-3 col-md-6 col-lg-6"},O={class:"position-relative overflow-hidden image-preview bg-dark rounded-3",style:{height:"200px"}},W=["src"],X={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},Y={hidden:""},Z={key:0,class:"col-md-6 col-lg-6 px-1"},ee={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},te=e("label",{for:"foto3",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),oe={key:6,class:"mb-3 col-md-6 col-lg-6"},se={class:"position-relative overflow-hidden image-preview bg-dark rounded-3",style:{height:"200px"}},le=["src"],ie={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},ae={hidden:""},ne={key:0,class:"col-md-6 col-lg-6 px-1"},re={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},de=e("label",{for:"foto4",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),fe={key:8,class:"mb-3 col-md-6 col-lg-6"},ce={class:"position-relative image-preview bg-dark rounded-3",style:{height:"200px"}},pe=["src"],he={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},ge={hidden:""},ue={key:0,class:"col-md-6 col-lg-6 px-1"},me={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},ye=e("label",{for:"foto5",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),be={key:10,class:"mb-3 col-md-6 col-lg-6"},ve={class:"position-relative overflow-hidden image-preview bg-dark rounded-3",style:{height:"200px"}},xe=["src"],Fe={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},ke={hidden:""},Ce={key:0,class:"col-md-6 col-lg-6 px-1"},we={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},_e=e("label",{for:"foto6",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),Ie={key:12,class:"mb-3 col-md-6 col-lg-6"},$e={class:"position-relative overflow-hidden image-preview bg-dark rounded-3",style:{height:"200px"}},je=["src"],Ae={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},De={hidden:""},Te={key:0,class:"col-md-6 col-lg-6 px-1"},ze={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},Be=e("label",{for:"foto7",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),Ue={key:14,class:"mb-3 col-md-6 col-lg-6"},Me={class:"position-relative overflow-hidden image-preview bg-dark rounded-3",style:{height:"200px"}},Ee=["src"],Le={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},Se={hidden:""},Ne={key:0,class:"col-md-6 col-lg-6 px-1"},Re={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},Ve=e("label",{for:"foto8",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),Pe={key:16,class:"mb-3 col-md-6 col-lg-6"},Qe={class:"position-relative overflow-hidden image-preview bg-dark rounded-3",style:{height:"200px"}},qe=["src"],Ge={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},He={hidden:""},Je={key:0,class:"col-md-6 col-lg-6 px-1"},Ke={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},Oe=e("label",{for:"foto9",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),We={key:18,class:"mb-3 col-md-6 col-lg-6"},Xe={class:"position-relative overflow-hidden image-preview bg-dark rounded-3",style:{height:"200px"}},Ye=["src"],Ze={class:"py-2 pe-3 col-12 d-flex justify-content-end",style:{position:"absolute","background-color":"rgba(0,0,0,0.5)",bottom:"0px",height:"35px"}},et={hidden:""},tt={key:0,class:"col-md-6 col-lg-6 px-1"},ot={class:"mb-3 bg-dark rounded-3 position-relative",style:{height:"200px"}},st=e("label",{for:"foto10",class:"position-absolute d-flex justify-content-center align-items-center",style:{top:"0",left:"0",width:"100%",height:"100%","z-index":"99"}},[e("div",{class:"d-flex justify-content-center align-items-center rounded-circle",style:{width:"120px",height:"120px","background-color":"rgba(0, 0, 0, 0.9)",cursor:"pointer",position:"relative"}},[e("span",{style:{color:"#fff"},class:"fas fa-camera"}),e("span",{style:{position:"absolute",top:"68px",left:"40px"},class:"me-2"},"1 foto")])],-1),lt={key:0,class:"progresso"},it={class:"progresso-field"},at=e("img",{src:k},null,-1),nt={class:"pt-2",style:{color:"#000","margin-top":"-8px","padding-bottom":"3px"}},rt={key:0},dt={key:1},ft={class:"modal-footer"},ct={style:{display:"flex","flex-wrap":"wrap"}},pt={class:"col-12"};function ht(s,t,r,c,d,l){return i(),a("div",w,[e("div",_,[e("div",I,[e("div",$,[e("div",j,[A,e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar",onClick:t[0]||(t[0]=(...o)=>s.fecharCarregarFotos&&s.fecharCarregarFotos(...o))})]),e("div",D,[e("form",null,[e("div",T,[s.$store.state.foto1!=null?(i(),a("div",z,[e("div",B,[s.$store.state.foto1?(i(),a("img",{key:0,src:`${s.$store.state.foto1}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,U)):n("",!0),e("div",M,[e("label",{for:"editarFoto1",class:"ms-2 fas fa-edit",onChange:t[1]||(t[1]=o=>l.handleFileChange(o,"foto1")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto1",class:"d-none",ref:"fileInput",onChange:t[2]||(t[2]=o=>l.handleFileChange(o,"foto1"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[3]||(t[3]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",E,f(s.$store.state.progressImg),1)])):(i(),a("div",L,[e("div",S,[N,e("input",{type:"file",id:"foto1",class:"invisible",ref:"fileInput",onChange:t[4]||(t[4]=o=>l.handleFileChange(o,"foto1"))},null,544)])])),s.$store.state.foto2!=null?(i(),a("div",R,[e("div",V,[s.$store.state.foto2?(i(),a("img",{key:0,src:`${s.$store.state.foto2}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,P)):n("",!0),e("div",Q,[e("label",{for:"editarFoto2",class:"ms-2 fas fa-edit",onChange:t[5]||(t[5]=o=>l.handleFileChange(o,"foto2")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto2",class:"d-none",ref:"fileInput",onChange:t[6]||(t[6]=o=>l.handleFileChange(o,"foto2"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[7]||(t[7]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",q,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:3},[s.$store.state.foto1!=null?(i(),a("div",G,[e("div",H,[J,e("input",{ref:"fileInput",type:"file",multiple:"",id:"foto1",class:"invisible",onChange:t[8]||(t[8]=(...o)=>l.multFileUpload&&l.multFileUpload(...o))},null,544)])])):n("",!0)],64)),s.$store.state.foto3!=null?(i(),a("div",K,[e("div",O,[s.$store.state.foto3?(i(),a("img",{key:0,src:`${s.$store.state.foto3}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,W)):n("",!0),e("div",X,[e("label",{for:"editarFoto3",class:"ms-2 fas fa-edit",onChange:t[9]||(t[9]=o=>l.handleFileChange(o,"foto3")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto3",class:"d-none",ref:"fileInput",onChange:t[10]||(t[10]=o=>l.handleFileChange(o,"foto3"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[11]||(t[11]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",Y,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:5},[s.$store.state.foto2!=null?(i(),a("div",Z,[e("div",ee,[te,e("input",{type:"file",id:"foto3",class:"invisible",ref:"fileInput",onChange:t[12]||(t[12]=o=>l.handleFileChange(o,"foto3"))},null,544)])])):n("",!0)],64)),s.$store.state.foto4!=null?(i(),a("div",oe,[e("div",se,[s.$store.state.foto4?(i(),a("img",{key:0,src:`${s.$store.state.foto4}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,le)):n("",!0),e("div",ie,[e("label",{for:"editarFoto4",class:"ms-2 fas fa-edit",onChange:t[13]||(t[13]=o=>l.handleFileChange(o,"foto4")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto4",class:"d-none",ref:"fileInput",onChange:t[14]||(t[14]=o=>l.handleFileChange(o,"foto4"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[15]||(t[15]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",ae,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:7},[s.$store.state.foto2!=null?(i(),a("div",ne,[e("div",re,[de,e("input",{type:"file",id:"foto4",class:"invisible",ref:"fileInput",onChange:t[16]||(t[16]=o=>l.handleFileChange(o,"foto4"))},null,544)])])):n("",!0)],64)),s.$store.state.foto5!=null?(i(),a("div",fe,[e("div",ce,[s.$store.state.foto5?(i(),a("img",{key:0,src:`${s.$store.state.foto5}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,pe)):n("",!0),e("div",he,[e("label",{for:"editarFoto5",class:"ms-2 fas fa-edit",onChange:t[17]||(t[17]=o=>l.handleFileChange(o,"foto5")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto5",class:"d-none",ref:"fileInput",onChange:t[18]||(t[18]=o=>l.handleFileChange(o,"foto5"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[19]||(t[19]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",ge,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:9},[s.$store.state.foto2!=null?(i(),a("div",ue,[e("div",me,[ye,e("input",{type:"file",id:"foto5",class:"invisible",ref:"fileInput",onChange:t[20]||(t[20]=o=>l.handleFileChange(o,"foto5"))},null,544)])])):n("",!0)],64)),s.$store.state.foto6!=null?(i(),a("div",be,[e("div",ve,[s.$store.state.foto6?(i(),a("img",{key:0,src:`${s.$store.state.foto6}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,xe)):n("",!0),e("div",Fe,[e("label",{for:"editarFoto6",class:"ms-2 fas fa-edit",onChange:t[21]||(t[21]=o=>l.handleFileChange(o,"foto6")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto6",class:"d-none",ref:"fileInput",onChange:t[22]||(t[22]=o=>l.handleFileChange(o,"foto6"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[23]||(t[23]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",ke,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:11},[s.$store.state.foto2!=null?(i(),a("div",Ce,[e("div",we,[_e,e("input",{type:"file",id:"foto6",class:"invisible",ref:"fileInput",onChange:t[24]||(t[24]=o=>l.handleFileChange(o,"foto6"))},null,544)])])):n("",!0)],64)),s.$store.state.foto7!=null?(i(),a("div",Ie,[e("div",$e,[s.$store.state.foto7?(i(),a("img",{key:0,src:`${s.$store.state.foto7}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,je)):n("",!0),e("div",Ae,[e("label",{for:"editarFoto7",class:"ms-2 fas fa-edit",onChange:t[25]||(t[25]=o=>l.handleFileChange(o,"foto7")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto7",class:"d-none",ref:"fileInput",onChange:t[26]||(t[26]=o=>l.handleFileChange(o,"foto7"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[27]||(t[27]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",De,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:13},[s.$store.state.foto2!=null?(i(),a("div",Te,[e("div",ze,[Be,e("input",{type:"file",id:"foto7",class:"invisible",ref:"fileInput",onChange:t[28]||(t[28]=o=>l.handleFileChange(o,"foto7"))},null,544)])])):n("",!0)],64)),s.$store.state.foto8!=null?(i(),a("div",Ue,[e("div",Me,[s.$store.state.foto8?(i(),a("img",{key:0,src:`${s.$store.state.foto8}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,Ee)):n("",!0),e("div",Le,[e("label",{for:"editarFoto8",class:"ms-2 fas fa-edit",onChange:t[29]||(t[29]=o=>l.handleFileChange(o,"foto8")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto8",class:"d-none",ref:"fileInput",onChange:t[30]||(t[30]=o=>l.handleFileChange(o,"foto8"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[31]||(t[31]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",Se,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:15},[s.$store.state.foto2!=null?(i(),a("div",Ne,[e("div",Re,[Ve,e("input",{type:"file",id:"foto8",class:"invisible",ref:"fileInput",onChange:t[32]||(t[32]=o=>l.handleFileChange(o,"foto8"))},null,544)])])):n("",!0)],64)),s.$store.state.foto9!=null?(i(),a("div",Pe,[e("div",Qe,[s.$store.state.foto9?(i(),a("img",{key:0,src:`${s.$store.state.foto9}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,qe)):n("",!0),e("div",Ge,[e("label",{for:"editarFoto9",class:"ms-2 fas fa-edit",onChange:t[33]||(t[33]=o=>l.handleFileChange(o,"foto9")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto9",class:"d-none",ref:"fileInput",onChange:t[34]||(t[34]=o=>l.handleFileChange(o,"foto9"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[35]||(t[35]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",He,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:17},[s.$store.state.foto2!=null?(i(),a("div",Je,[e("div",Ke,[Oe,e("input",{type:"file",id:"foto9",class:"invisible",ref:"fileInput",onChange:t[36]||(t[36]=o=>l.handleFileChange(o,"foto9"))},null,544)])])):n("",!0)],64)),s.$store.state.foto10!=null?(i(),a("div",We,[e("div",Xe,[s.$store.state.foto10?(i(),a("img",{key:0,src:`${s.$store.state.foto10}principal.jpg?v=${new Date().getTime()}`,alt:"Imagem carregada",class:"rounded-3",style:{width:"100%",height:"200px"}},null,8,Ye)):n("",!0),e("div",Ze,[e("label",{for:"editarFoto10",class:"ms-2 fas fa-edit",onChange:t[37]||(t[37]=o=>l.handleFileChange(o,"foto10")),style:{cursor:"pointer"}},null,32),e("input",{type:"file",id:"editarFoto10",class:"d-none",ref:"fileInput",onChange:t[38]||(t[38]=o=>l.handleFileChange(o,"foto10"))},null,544),e("span",{class:"ms-2 fas fa-trash-alt",onClick:t[39]||(t[39]=(...o)=>l.eliminarFoto&&l.eliminarFoto(...o)),style:{cursor:"pointer"}})])]),e("div",et,f(s.$store.state.progressImg),1)])):(i(),a(p,{key:19},[s.$store.state.foto2!=null?(i(),a("div",tt,[e("div",ot,[st,e("input",{type:"file",id:"foto10",class:"invisible",ref:"fileInput",onChange:t[40]||(t[40]=o=>l.handleFileChange(o,"foto10"))},null,544)])])):n("",!0)],64))])]),d.uploading?(i(),a("div",lt,[e("div",it,[e("div",null,[at,e("div",nt,[d.totalFotos?(i(),a("span",rt," carregando "+f(d.totalFotos)+" de "+f(d.multiArray),1)):(i(),a("span",dt," carregando 1 de 1 "))])])])])):n("",!0)]),e("div",ft,[e("div",ct,[e("div",pt,[e("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar",onClick:t[41]||(t[41]=(...o)=>s.fecharCarregarFotos&&s.fecharCarregarFotos(...o))},"Fechar")])])])])])])])}const ut=b(C,[["render",ht]]);export{ut as T};
