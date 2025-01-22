import{_ as h,r as m,o as l,c as n,a as s,b as d,w as c,d as a,t as u}from"./index-c4720f3d.js";import{T as g}from"./TheForm_Login-6b0372e7.js";const p="/logo.png";const v={name:"TheNavTop2",components:{TheForm_Login:g,session:!1},methods:{show_menu(){const i=document.querySelector(".menu-mobile-editado"),e="visiblidade";i.classList.contains(e)&&setTimeout(()=>{i.classList.remove("visiblidade")},300),i.classList.toggle("toggle-menu-mobile-editado"),i.classList.add("visiblidade")},goVerVeiculos(i){const e={tipo_veiculo:i};this.$router.push({path:"/resultados",query:e}),this.$emit("filterVeiculoRoute",i)},emitShowLoader(){this.$emit("showLoader")},execAll(i){this.emitShowLoader(),this.goVerVeiculos(i)},abrirModal(){localStorage.getItem("token")?this.$router.push({path:"/anuncios"}):this.$router.push({path:"/login"})},sair(){localStorage.getItem("token")&&(localStorage.removeItem("token"),this.$router.push({path:"/inicio"}).then(()=>{window.location.reload()}))}},async created(){localStorage.getItem("token")&&(this.session=!0,this.$store.state.anunciante_id=localStorage.getItem("anunciante_id"),this.$store.state.userName=localStorage.getItem("anunciante_nome"))}},b={class:"bg-white",style:{"box-shadow":"0px 0px 20px 0px rgba(0, 0, 0, 0.1)"}},f=s("div",{class:"navegacao bg-succes",style:{padding:"0.9em 0"}},null,-1),x={class:"navegacao d-block d-lg-none fixed-top"},k={class:"header bg-white"},y={class:"logo bg-succes px-3",style:{width:"260px",padding:"13.5px 0"}},w=s("div",{class:"logo bg-succes px-1 d-flex align-items-center",style:{width:"190px"}},[s("img",{src:p,class:"logo",alt:"Logo Regional Motors"})],-1),C={class:"icons bg-succes p-2 px-3"},S=s("div",{class:"icon d-none d-lg-block"},[s("i",{class:"fa fa-user"}),a(" Entrar")],-1),L=s("div",{class:"icon"},[s("i",{class:"far fa-bell"})],-1),T=s("i",{class:"fas fa-bars"},null,-1),N=[T],I={class:"menu-mobile-editado"},V={style:{"padding-top":"20px"}},M={class:"px-4 mx-auto content-menu col-11 col-md-8"},z={class:"d-flex justify-content-end pt-2"},A={class:"items-menu-mobile"},R={key:0,class:"mb-2"},B=s("div",{style:{display:"inline-block",width:"15px",height:"15px","background-color":"green","border-radius":"100px"}},null,-1),q=s("span",{class:"fas fa-user me-1"},null,-1),E={key:1,class:"mb-2",style:{"font-size":"18px"}},$=s("span",{style:{color:"crimson"}},"Registar",-1),j=s("h5",{class:"mt-4"},"Comprar",-1),D={class:"ps-2"},F=s("br",null,null,-1),G={class:"navegacao d-none d-lg-block fixed-top"},H={class:"header bg-dark bg-white ps-5"},J=s("div",{class:"logo bg-succes ps-4 pt-1 d-flex align-items-center",style:{width:"210px"}},[s("img",{src:p,class:"logo"})],-1),K={id:"men",class:"bg-inf card-menu"},O={class:"card-menu-content d-flex align-items-center"},P={class:"icons bg-succes px-3 d-flex align-items-center"},Q=s("div",{class:"icon"},[s("span",{style:{"font-size":"23px"},class:"far fa-bell"})],-1),U={class:"icon d-none d-lg-block menu-link position-relative py-"},W=s("i",{class:"fa fa-user me-2 fa-lg"},null,-1),X={class:"sub-menu-desktop position-absolute",style:{left:"-50px !important"}},Y={class:"py-2",style:{"z-index":"99",width:"170px"}},Z=s("div",{class:"pb-2"},null,-1),ss={class:"bg-white px-1 py-1",style:{"border-bottom-left-radius":"8px","border-bottom-right-radius":"8px","box-shadow":"rgb(0 0 0 / 10%) 0.25rem 0.25rem 1rem"}},es={class:"px-3"},os={key:0},ts={key:1},is=s("div",{class:"icon invisible"},[s("span",{style:{"font-size":"23px"},class:"far fa-bell"})],-1),ls=s("div",{class:"icon d-block d-lg-none btn-menu"},[s("i",{class:"fas fa-bars"})],-1);function ns(i,e,as,ds,cs,o){const r=m("RouterLink"),_=m("router-link");return l(),n("div",b,[f,s("div",x,[s("header",k,[s("div",y,[d(r,{class:"routerLink pt-2",to:"/"},{default:c(()=>[w]),_:1})]),s("div",C,[S,L,s("div",{class:"icon d-block d-lg-none btn-menu",onClick:e[0]||(e[0]=(...t)=>o.show_menu&&o.show_menu(...t))},N),s("div",I,[s("div",V,[s("div",M,[s("div",z,[s("span",{onClick:e[1]||(e[1]=(...t)=>o.show_menu&&o.show_menu(...t)),style:{"font-size":"25px",cursor:"pointer"}},"x")]),s("div",A,[i.session?(l(),n("div",R,[s("h4",null,[B,a(" "+u(i.$store.state.userName),1)]),s("div",null,[d(_,{to:"/conta"},{default:c(()=>[q,a(" Conta ")]),_:1}),a(" | "),s("span",{onClick:e[2]||(e[2]=(...t)=>o.sair&&o.sair(...t)),style:{cursor:"pointer",color:"crimson"}}," Sair ")])])):(l(),n("div",E,[s("span",{onClick:e[3]||(e[3]=(...t)=>o.abrirModal&&o.abrirModal(...t))},"Iniciar Sessão"),a(" | "),$])),j,s("div",D,[s("p",{class:"",onClick:e[4]||(e[4]=t=>o.execAll("carro"))},"Carro"),s("p",{class:"",onClick:e[5]||(e[5]=t=>o.execAll("moto"))},"Moto")])])])])])])])]),F,s("div",G,[s("header",H,[d(r,{class:"routerLink pt-2",to:"/"},{default:c(()=>[J]),_:1}),s("div",K,[s("div",O,[s("div",{class:"menu-link position-relative py-3",onClick:e[6]||(e[6]=t=>o.execAll("carro"))}," Comprar carros "),s("div",{class:"menu-link position-relative py-3",onClick:e[7]||(e[7]=t=>o.execAll("moto"))}," Comprar motos ")])]),s("div",P,[Q,s("div",U,[W,s("div",X,[s("div",Y,[Z,s("div",ss,[s("div",es,[i.session?(l(),n("div",os,[d(_,{to:"/conta",class:"link-profile"},{default:c(()=>[s("p",null,u(i.$store.state.userName)+" - Conta ",1)]),_:1}),s("p",{class:"m-0 mb-2",style:{"text-align":"left !important"},onClick:e[8]||(e[8]=(...t)=>o.sair&&o.sair(...t))},"Sair")])):(l(),n("div",ts,[s("p",{class:"m-0",style:{"text-align":"left !important"},onClick:e[9]||(e[9]=(...t)=>o.abrirModal&&o.abrirModal(...t))}," Iniciar Sessão ")]))])])])])]),is,ls])])])])}const ms=h(v,[["render",ns]]);export{ms as T};
