import"./loader-91d60271.js";import{T as h}from"./TheForm_Login-a2df100f.js";import{_ as g,r as m,o as n,c as l,a as s,b as c,w as d,d as a,t as p}from"./index-ac526206.js";const u="/logo.png";const v={name:"TheNavTop2",components:{TheForm_Login:h,session:!1},methods:{show_menu(){const i=document.querySelector(".menu-mobile-editado"),e="visiblidade";i.classList.contains(e)&&setTimeout(()=>{i.classList.remove("visiblidade")},300),i.classList.toggle("toggle-menu-mobile-editado"),i.classList.add("visiblidade")},goVerVeiculos(i){const e={tipo_veiculo:i};this.$router.push({path:"/resultados",query:e}),this.$emit("filterVeiculoRoute",i)},emitShowLoader(){this.$emit("showLoader")},execAll(i){this.emitShowLoader(),this.goVerVeiculos(i)},abrirModal(){localStorage.getItem("token")?this.$router.push({path:"/anuncios"}):this.$router.push({path:"/login"})},sair(){localStorage.getItem("token")&&(localStorage.removeItem("token"),this.$router.push({path:"/inicio"}).then(()=>{window.location.reload()}))}},async created(){localStorage.getItem("token")&&(this.session=!0,this.$store.state.anunciante_id=localStorage.getItem("anunciante_id"),this.$store.state.userName=localStorage.getItem("anunciante_nome"))}},b={class:"bg-white",style:{"box-shadow":"0px 0px 20px 0px rgba(0, 0, 0, 0.1)"}},f=s("div",{class:"navegacao bg-succes",style:{padding:"0.9em 0"}},null,-1),x={class:"navegacao d-block d-lg-none fixed-top"},k={class:"header bg-white"},y={class:"logo bg-succes px-3",style:{width:"260px",padding:"13.5px 0"}},w=s("div",{class:"logo bg-succes px-1 d-flex align-items-center",style:{width:"190px"}},[s("img",{src:u,class:"logo",alt:"Logo Regional Motors"})],-1),C={class:"icons bg-succes p-2 px-3"},S=s("div",{class:"icon d-none d-lg-block"},[s("i",{class:"fa fa-user"}),a(" Entrar ")],-1),L=s("div",{class:"icon"},[s("i",{class:"far fa-bell"})],-1),T=s("i",{class:"fas fa-bars"},null,-1),N=[T],I={class:"menu-mobile-editado"},V={style:{"padding-top":"20px"}},M={class:"px-4 mx-auto content-menu col-11 col-md-8"},z={class:"d-flex justify-content-end pt-2"},A={class:"items-menu-mobile"},R={key:0,class:"mb-2"},B=s("div",{style:{display:"inline-block",width:"15px",height:"15px","background-color":"green","border-radius":"100px"}},null,-1),q=s("span",{class:"fas fa-user me-1"},null,-1),E={key:1,class:"mb-2",style:{"font-size":"18px"}},$=s("span",{style:{color:"crimson"}},"Registar",-1),j=s("h5",{class:"mt-4"},"Comprar",-1),D={class:"ps-2"},F=s("br",null,null,-1),G={class:"navegacao d-none d-lg-block fixed-top"},H={class:"header bg-dark bg-white ps-5"},J=s("div",{class:"logo bg-succes ps-4 pt-1 d-flex align-items-center",style:{width:"210px"}},[s("img",{src:u,class:"logo"})],-1),K={id:"men",class:"bg-inf card-menu"},O={class:"card-menu-content d-flex align-items-center"},P={class:"icons bg-succes px-3 d-flex align-items-center"},Q=s("div",{class:"icon"},[s("span",{style:{"font-size":"23px"},class:"far fa-bell"})],-1),U={class:"icon d-none d-lg-block menu-link position-relative py-"},W=s("i",{class:"fa fa-user me-2 fa-lg"},null,-1),X=s("span",{style:{"font-size":"0.8em"}},"Conta",-1),Y={class:"sub-menu-desktop position-absolute",style:{left:"-50px !important"}},Z={class:"py-2",style:{"z-index":"99",width:"170px"}},ss=s("div",{class:"pb-2"},null,-1),es={class:"bg-white px-1 py-1",style:{"border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}},os={class:"px-3"},ts={key:0},is={style:{color:"#000"}},ns={key:1},ls=s("div",{class:"icon invisible"},[s("span",{style:{"font-size":"23px"},class:"far fa-bell"})],-1),as=s("div",{class:"icon d-block d-lg-none btn-menu"},[s("i",{class:"fas fa-bars"})],-1);function cs(i,e,ds,rs,_s,o){const r=m("RouterLink"),_=m("router-link");return n(),l("div",b,[f,s("div",x,[s("header",k,[s("div",y,[c(r,{class:"routerLink pt-2",to:"/inicio"},{default:d(()=>[w]),_:1})]),s("div",C,[S,L,s("div",{class:"icon d-block d-lg-none btn-menu",onClick:e[0]||(e[0]=(...t)=>o.show_menu&&o.show_menu(...t))},N),s("div",I,[s("div",V,[s("div",M,[s("div",z,[s("span",{onClick:e[1]||(e[1]=(...t)=>o.show_menu&&o.show_menu(...t)),style:{"font-size":"25px",cursor:"pointer"}},"x")]),s("div",A,[i.session?(n(),l("div",R,[s("h4",null,[B,a(" "+p(i.$store.state.userName),1)]),s("div",null,[c(_,{to:"/conta"},{default:d(()=>[q,a(" Conta ")]),_:1}),a(" | "),s("span",{onClick:e[2]||(e[2]=(...t)=>o.sair&&o.sair(...t)),style:{cursor:"pointer",color:"crimson"}}," Sair ")])])):(n(),l("div",E,[s("span",{onClick:e[3]||(e[3]=(...t)=>o.abrirModal&&o.abrirModal(...t))},"Iniciar Sessão"),a(" | "),$])),j,s("div",D,[s("p",{class:"",onClick:e[4]||(e[4]=t=>o.execAll("carro"))},"Carro"),s("p",{class:"",onClick:e[5]||(e[5]=t=>o.execAll("moto"))},"Moto")])])])])])])])]),F,s("div",G,[s("header",H,[c(r,{class:"routerLink pt-2",to:"/inicio"},{default:d(()=>[J]),_:1}),s("div",K,[s("div",O,[s("div",{class:"menu-link position-relative py-3",onClick:e[6]||(e[6]=t=>o.execAll("carro"))},"Comprar carros"),s("div",{class:"menu-link position-relative py-3",onClick:e[7]||(e[7]=t=>o.execAll("moto"))},"Comprar motos")])]),s("div",P,[Q,s("div",U,[W,X,s("div",Y,[s("div",Z,[ss,s("div",es,[s("div",os,[i.session?(n(),l("div",ts,[c(_,{to:"/conta"},{default:d(()=>[s("p",is,p(i.$store.state.userName),1)]),_:1}),s("p",{class:"m-0 mb-2",style:{"text-align":"left !important"},onClick:e[8]||(e[8]=(...t)=>o.sair&&o.sair(...t))}," Sair ")])):(n(),l("div",ns,[s("p",{class:"m-0",style:{"text-align":"left !important"},onClick:e[9]||(e[9]=(...t)=>o.abrirModal&&o.abrirModal(...t))}," Iniciar Sessão ")]))])])])])]),ls,as])])])])}const hs=g(v,[["render",cs]]);export{hs as T};
