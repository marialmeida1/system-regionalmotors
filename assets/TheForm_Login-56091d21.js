import{l as _,L as f}from"./loader-c19c6dcb.js";import{_ as g,r as n,o as r,c as d,a as e,b as c,w as b,e as l,v as h,f as y,d as m,g as x,F as w}from"./index-8a7487aa.js";const v="/regLoader.png",k={name:"TheForm_Login",components:{loader:_},data(){return{showLoader:!1,user_email:"",user_senha:"",showPassword:!1,loderLogin:!1}},methods:{async goAnuncios(){this.$store.state.fechaModal=!0;const o={email:this.user_email,password:this.user_senha};if(this.user_email.includes("@")&&this.user_senha!=""){this.loderLogin=!0;try{const s=await f(o);localStorage.setItem("token",s.token),localStorage.setItem("anunciante_id",s.anunciante_id),localStorage.setItem("anunciante_nome",s.user.name),localStorage.setItem("perfil",s.user.perfil),this.$store.state.userName=s.user.name,s.token&&(window.location.reload(),this.$store.state.fechaModal=!1),s&&(this.loderLogin=!1)}catch(s){this.$store.state.fechaModal=!1,s&&(this.loderLogin=!1),this.user_senha=""}}},goCadastrar(){this.$router.push({path:"/cadastrar"})},togglePasswordVisibility(){this.showPassword=!this.showPassword;const o=document.getElementById("senha");this.showPassword?o.type="text":o.type="password"}},created(){localStorage.getItem("token")&&(localStorage.getItem("perfil")=="admin"?this.$router.push({path:"/anuncios"}):localStorage.getItem("perfil")=="superadmin"&&this.$router.push({path:"/admin-anuncios"}))}},S={class:"modal-dialog"},L={class:"modal-content px-1 px-md-5 px-lg-5"},I={class:"rounded-3",style:{"box-shadow":"0px -0px 10px -3px rgba(0,0,0,0.3)"}},C={class:"text-center py-4 pb-2"},V=e("span",{style:{"font-size":"23px"}},[m(" Regional "),e("span",{style:{color:"crimson"}},"motors")],-1),P=e("div",{class:"text-center pb-3"},[e("span",{class:"far fa-user"}),e("span",{style:{"font-size":"14px"}}," Iniciar Sessao ")],-1),F={class:"modal-body px-4",style:{height:"370p",overflow:"auto","margin-bottom":"1em"}},M={class:"mb-3"},N=e("label",{for:"email",class:"form-label"},"Email",-1),T={class:"mb-3"},z=e("label",{for:"senha",class:"form-label"},"Senha",-1),B={class:"input-group"},E=e("i",{class:"fas fa-eye"},null,-1),A=[E],q=e("div",{class:"mb-3"},[e("input",{id:"checkbox",type:"checkbox",placeholder:"Senha",class:"me-2"}),e("label",{for:"checkbox",class:"form-label d-inline"},"Lembrar de mim")],-1),R={class:"mb-3"},U={key:0,src:v,class:"caixa2"},D={class:"mb-3",hidden:""},$=e("div",{class:"text-center pt-4"},[e("p",{class:"m-0",style:{color:"rgb(36, 105, 255)","font-size":"15px"}},"Recuperar Senha")],-1),j={style:{"z-index":"9999"},hidden:""};function G(o,s,H,J,i,a){const u=n("router-link"),p=n("loader");return r(),d(w,null,[e("div",null,[e("div",S,[e("div",L,[e("div",I,[e("div",C,[c(u,{to:"/"},{default:b(()=>[V]),_:1})]),P,e("div",F,[e("form",null,[e("div",M,[N,l(e("input",{id:"email",type:"email",placeholder:"Email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>i.user_email=t),required:""},null,512),[[h,i.user_email]])]),e("div",T,[z,e("div",B,[l(e("input",{id:"senha",type:"password",placeholder:"Senha",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>i.user_senha=t),required:""},null,512),[[h,i.user_senha]]),e("button",{class:"btn btn-outline-secondary",type:"button",onClick:s[2]||(s[2]=(...t)=>a.togglePasswordVisibility&&a.togglePasswordVisibility(...t))},A)])]),q,e("div",R,[e("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Fechar",class:"btn btn-primary col-12",onClick:s[3]||(s[3]=(...t)=>a.goAnuncios&&a.goAnuncios(...t))},[i.loderLogin?(r(),d("img",U)):y("",!0),m(" Iniciar Sessão")])]),e("div",D,[e("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Fechar",class:"btn btn-dark col-12",onClick:s[4]||(s[4]=(...t)=>a.goCadastrar&&a.goCadastrar(...t))},"Criar conta")]),$])])])])])]),l(e("div",j,[c(p)],512),[[x,o.$store.state.fechaModal]])],64)}const Q=g(k,[["render",G]]);export{Q as T,v as _};
