import{_ as p,L as _,r as n,o as r,c as d,a as e,b as c,w as g,d as i,v as m,e as f,f as b,g as x,F as y}from"./index-fb5eac52.js";import{l as w}from"./loader-b2e23a5b.js";const v="/logo.png",k="/regLoader.png",S={name:"TheForm_Login",components:{loader:w},data(){return{showLoader:!1,user_email:"",user_senha:"",showPassword:!1,loderLogin:!1}},methods:{async goAnuncios(){this.$store.state.fechaModal=!0;const o={email:this.user_email,password:this.user_senha};if(this.user_email.includes("@")&&this.user_senha!=""){this.loderLogin=!0;try{const s=await _(o);localStorage.setItem("token",s.token),localStorage.setItem("anunciante_id",s.anunciante_id),localStorage.setItem("anunciante_nome",s.user.name),localStorage.setItem("perfil",s.user.perfil),console.log(),this.$store.state.userName=s.user.name,s.token&&(window.location.reload(),this.$store.state.fechaModal=!1),s&&(this.loderLogin=!1)}catch(s){this.$store.state.fechaModal=!1,s&&(this.loderLogin=!1),this.user_senha=""}}},goCadastrar(){this.$router.push({path:"/cadastrar"})},togglePasswordVisibility(){this.showPassword=!this.showPassword;const o=document.getElementById("senha");this.showPassword?o.type="text":o.type="password"}},created(){localStorage.getItem("token")&&(localStorage.getItem("perfil")=="admin"?this.$router.push({path:"/anuncios"}):localStorage.getItem("perfil")=="superadmin"&&this.$router.push({path:"/admin-anuncios"}))}},L={class:"modal-dialog"},I={class:"modal-content px-1 px-md-5 px-lg-5"},C={class:"rounded-3",style:{"box-shadow":"0px -0px 10px -3px rgba(0, 0, 0, 0.3)"}},V={class:"text-center py-4 pb-2"},P=e("div",{class:"logo bg-succes px-1 d-flex align-items-center",style:{width:"240px"}},[e("img",{src:v,class:"logo",alt:"Logo Regional Motors"})],-1),F=e("div",{class:"text-center pb-3"},[e("span",{class:"far fa-user"}),e("span",{style:{"font-size":"14px"}}," Iniciar Sessao ")],-1),M={class:"modal-body px-4",style:{height:"370p",overflow:"auto","margin-bottom":"1em"}},N={class:"mb-3"},T=e("label",{for:"email",class:"form-label"},"Email",-1),B={class:"mb-3"},E=e("label",{for:"senha",class:"form-label"},"Senha",-1),z={class:"input-group"},A=e("i",{class:"fas fa-eye"},null,-1),q=[A],R=e("div",{class:"mb-3"},[e("input",{id:"checkbox",type:"checkbox",placeholder:"Senha",class:"me-2"}),e("label",{for:"checkbox",class:"form-label d-inline"},"Lembrar de mim")],-1),U={class:"mb-3"},$={key:0,src:k,class:"caixa2"},j={class:"mb-3",hidden:""},D=e("div",{class:"text-center pt-4"},[e("p",{class:"m-0",style:{color:"rgb(36, 105, 255)","font-size":"15px"}},"Recuperar Senha")],-1),G={style:{"z-index":"9999"},hidden:""};function H(o,s,J,K,l,a){const h=n("router-link"),u=n("loader");return r(),d(y,null,[e("div",null,[e("div",L,[e("div",I,[e("div",C,[e("div",V,[c(h,{to:"/",style:{width:"100%",display:"flex","justify-content":"center","padding-bottom":"2rem"}},{default:g(()=>[P]),_:1})]),F,e("div",M,[e("form",null,[e("div",N,[T,i(e("input",{id:"email",type:"email",placeholder:"Email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>l.user_email=t),required:""},null,512),[[m,l.user_email]])]),e("div",B,[E,e("div",z,[i(e("input",{id:"senha",type:"password",placeholder:"Senha",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>l.user_senha=t),required:""},null,512),[[m,l.user_senha]]),e("button",{class:"btn btn-outline-secondary",type:"button",onClick:s[2]||(s[2]=(...t)=>a.togglePasswordVisibility&&a.togglePasswordVisibility(...t))},q)])]),R,e("div",U,[e("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Fechar",class:"btn btn-primary col-12",onClick:s[3]||(s[3]=(...t)=>a.goAnuncios&&a.goAnuncios(...t))},[l.loderLogin?(r(),d("img",$)):f("",!0),b(" Iniciar Sessão ")])]),e("div",j,[e("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Fechar",class:"btn btn-dark col-12",onClick:s[4]||(s[4]=(...t)=>a.goCadastrar&&a.goCadastrar(...t))}," Criar conta ")]),D])])])])])]),i(e("div",G,[c(u)],512),[[x,o.$store.state.fechaModal]])],64)}const W=p(S,[["render",H]]);export{W as T,k as _,v as a};
