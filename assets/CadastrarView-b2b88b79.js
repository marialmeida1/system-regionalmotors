import{T as b}from"./TheNavTop-f6dad02f.js";import{$ as f,l as u}from"./loader-45d269ff.js";import{_ as c,o as n,c as m,a as o,e as x,l as C,F as g,d as y,h as T,r as a,b as t}from"./index-447ad33f.js";import{T as w}from"./TheFooter-fd7c7115.js";import"./TheForm_Login-47d09aee.js";import"./logo-5b4cc875.js";const E={name:"TheForm_Login",data(){return{nome:"Adriano",email:"teste5@gmail.com",senha:"1234",tipo:""}},methods:{async add(){const i={name:this.nome,email:this.email,password:this.senha},e={nome:this.nome,tipo:this.tipo,responsavel:"Zola",email:this.email,telefone:"99345678",cpf:"abcd123",cep:"1234567",plano_id:"1",estado_id:"1",cidade_id:"2"};try{const l=await f(i,e);console.log("resposta: "+l),l?(console.log("Eliminado... "+l.id),this.$store.state.adminID=null,this.nome="",this.desc=""):this.showErrorMessage=!0}catch(l){console.error("Erro na requisição:",l),this.showErrorMessage=!0}}}},N=o("br",null,null,-1),F=o("br",null,null,-1),$={class:"bg-white rounded-3 col-11 col-md-10 col-lg-10 mx-auto"},P=o("div",{class:"modal-header"},[o("div",{class:"py-4"},[o("h5",{class:"modal-title",id:"exampleModalLabel"},[o("span",{class:"far fa-user py-2 pt-0 invisible"}),y(),o("b",null,"Criar Conta")])])],-1),L={class:"modal-body px-4",style:{height:"370p",overflow:"auto","margin-bottom":"1em"}},V={class:"row"},S={class:"px-2 col-md-6 col-lg-6"},k={class:"mb-3"},M=o("label",{for:"Nome",class:"form-label"},"Nome",-1),R=o("option",{value:"Particular"},"Particular",-1),B=o("option",{value:"Loja"},"Loja",-1),j=o("option",{value:"Concessionaria"},"Concessionaria",-1),q=[R,B,j],A=T('<div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="Nome" class="form-label">Nome</label><input type="text" id="Nome" placeholder="Nome" class="form-control"></div></div><div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="Responsavel" class="form-label">Responsavel</label><input type="text" id="Responsavel" placeholder="Responsavel" class="form-control"></div></div><div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="CPF" class="form-label">CPF</label><input type="text" id="CPF" placeholder="CPF" class="form-control"></div></div><div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="Telefone" class="form-label">Telefone</label><input type="text" id="Telefone" placeholder="Telefone" class="form-control"></div></div><div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="CEP" class="form-label">CEP</label><input type="text" id="CEP" placeholder="CEP" class="form-control"></div></div><div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="Estado" class="form-label">Estado</label><input type="text" id="Estado" placeholder="Estado" class="form-control"></div></div><div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="Cidade" class="form-label">Cidade</label><input type="text" id="Cidade" placeholder="Cidade" class="form-control"></div></div><div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="email" class="form-label">Email</label><input id="email" type="email" placeholder="Email" class="form-control"></div></div><div class="px-2 col-md-6 col-lg-6"><div class="mb-3"><label for="password" class="form-label">Senha</label><input id="password" type="password" placeholder="Senha" class="form-control"></div></div><div class="mb-3 pt-3"><input id="termos" type="checkbox" class="me-2" style="cursor:pointer;"><label for="termos" class="form-label d-inline" style="cursor:pointer;"> Concordo com os termos e condiçoes </label></div>',10),D={class:"mb-3 pt-3"},U=o("br",null,null,-1),I=o("br",null,null,-1);function Z(i,e,l,p,d,r){return n(),m(g,null,[N,F,o("div",$,[P,o("div",L,[o("form",null,[o("div",V,[o("div",S,[o("div",k,[M,x(o("select",{name:"",id:"","onUpdate:modelValue":e[0]||(e[0]=s=>d.tipo=s),class:"form-select"},q,512),[[C,d.tipo]])])]),A]),o("div",D,[o("button",{class:"btn btn-primary col-12",onClick:e[1]||(e[1]=s=>r.add()),style:{width:"200px"}},"Concluir")])])])]),U,I],64)}const z=c(E,[["render",Z]]),G={components:{TheNavTop:b,TheFooter:w,loader:u,TheForm_Cadastrar:z},data(){return{loader:""}},methods:{showLoaderNow(){this.loader.classList.remove("d-none")}},mounted(){this.loader=document.querySelector(".loader")}},H={class:"loader d-none"};function J(i,e,l,p,d,r){const s=a("TheNavTop"),h=a("TheForm_Cadastrar"),v=a("TheFooter"),_=a("loader");return n(),m("div",null,[o("div",null,[t(s),t(h),t(v),o("div",H,[t(_)])])])}const oo=c(G,[["render",J]]);export{oo as default};
