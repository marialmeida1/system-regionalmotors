import{_ as h,r as u,o as l,c as a,a as s,b as n,w as d,f as c,t as m}from"./index-7d06fc67.js";import{T as g,a as p}from"./TheForm_Login-c7d0df27.js";const v={name:"TheNavTop2",components:{TheForm_Login:g,session:!1},methods:{show_menu(){const i=document.querySelector(".menu-mobile-editado"),e="visiblidade";i.classList.contains(e)&&setTimeout(()=>{i.classList.remove("visiblidade")},300),i.classList.toggle("toggle-menu-mobile-editado"),i.classList.add("visiblidade")},goVerVeiculos(i){const e={tipo_veiculo:i};this.$router.push({path:"/resultados",query:e}),this.$emit("filterVeiculoRoute",i)},emitShowLoader(){this.$emit("showLoader")},execAll(i){this.emitShowLoader(),this.goVerVeiculos(i)},abrirModal(){localStorage.getItem("token")?this.$router.push({path:"/anuncios"}):this.$router.push({path:"/login"})},sair(){localStorage.getItem("token")&&(localStorage.removeItem("token"),this.$router.push({path:"/"}).then(()=>{window.location.reload()}))}},async created(){localStorage.getItem("token")&&(this.session=!0,this.$store.state.anunciante_id=localStorage.getItem("anunciante_id"),this.$store.state.userName=localStorage.getItem("anunciante_nome"))}},b={class:"bg-white",style:{"box-shadow":"0px 0px 20px 0px rgba(0, 0, 0, 0.1)"}},f=s("div",{class:"navegacao bg-succes",style:{padding:"0.9em 0"}},null,-1),x={class:"navegacao d-block d-lg-none fixed-top"},k={class:"header bg-white"},y={class:"logo bg-succes px-3",style:{width:"260px",padding:"13.5px 0"}},w=s("div",{class:"logo bg-succes px-1 d-flex align-items-center",style:{width:"190px"}},[s("img",{src:p,class:"logo",alt:"Logo Regional Motors"})],-1),C={class:"icons bg-succes p-2 px-3"},S=s("div",{class:"icon d-none d-lg-block"},[s("i",{class:"fa fa-user"}),c(" Entrar")],-1),L=s("div",{class:"icon"},[s("i",{class:"far fa-bell"})],-1),T=s("i",{class:"fas fa-bars"},null,-1),N=[T],I={class:"menu-mobile-editado"},V={style:{"padding-top":"20px"}},M={class:"px-4 mx-auto content-menu col-11 col-md-8"},z={class:"d-flex justify-content-end pt-2"},A={class:"items-menu-mobile"},R={key:0,class:"mb-2"},B=s("div",{style:{display:"inline-block",width:"15px",height:"15px","background-color":"green","border-radius":"100px"}},null,-1),q=s("span",{class:"fas fa-user me-1"},null,-1),E={key:1,class:"mb-2",style:{"font-size":"18px"}},$=s("h5",{class:"mt-4"},"Comprar",-1),j={class:"ps-2"},D=s("br",null,null,-1),F={class:"navegacao d-none d-lg-block fixed-top"},G={class:"header bg-dark bg-white ps-5"},H=s("div",{class:"logo bg-succes ps-4 pt-1 d-flex align-items-center",style:{width:"210px"}},[s("img",{src:p,class:"logo"})],-1),J={id:"men",class:"bg-inf card-menu"},K={class:"card-menu-content d-flex align-items-center"},O={class:"icons bg-succes px-3 d-flex align-items-center"},P=s("div",{class:"icon"},[s("span",{style:{"font-size":"23px"},class:"far fa-bell"})],-1),Q={class:"icon d-none d-lg-block menu-link position-relative py-"},U=s("i",{class:"fa fa-user me-2 fa-lg"},null,-1),W={class:"sub-menu-desktop position-absolute",style:{left:"-50px !important"}},X={class:"py-2",style:{"z-index":"99",width:"170px"}},Y=s("div",{class:"pb-2"},null,-1),Z={class:"bg-white px-1 py-1",style:{"border-bottom-left-radius":"8px","border-bottom-right-radius":"8px","box-shadow":"rgb(0 0 0 / 10%) 0.25rem 0.25rem 1rem"}},ss={class:"px-3"},es={key:0},ts={key:1},os=s("div",{class:"icon invisible"},[s("span",{style:{"font-size":"23px"},class:"far fa-bell"})],-1),is=s("div",{class:"icon d-block d-lg-none btn-menu"},[s("i",{class:"fas fa-bars"})],-1);function ls(i,e,as,ns,ds,t){const r=u("RouterLink"),_=u("router-link");return l(),a("div",b,[f,s("div",x,[s("header",k,[s("div",y,[n(r,{class:"routerLink pt-2",to:"/"},{default:d(()=>[w]),_:1})]),s("div",C,[S,L,s("div",{class:"icon d-block d-lg-none btn-menu",onClick:e[0]||(e[0]=(...o)=>t.show_menu&&t.show_menu(...o))},N),s("div",I,[s("div",V,[s("div",M,[s("div",z,[s("span",{onClick:e[1]||(e[1]=(...o)=>t.show_menu&&t.show_menu(...o)),style:{"font-size":"25px",cursor:"pointer"}},"x")]),s("div",A,[i.session?(l(),a("div",R,[s("h4",null,[B,c(" "+m(i.$store.state.userName),1)]),s("div",null,[n(_,{to:"/conta"},{default:d(()=>[q,c(" Conta ")]),_:1}),c(" | "),s("span",{onClick:e[2]||(e[2]=(...o)=>t.sair&&t.sair(...o)),style:{cursor:"pointer",color:"crimson"}}," Sair ")])])):(l(),a("div",E,[s("span",{onClick:e[3]||(e[3]=(...o)=>t.abrirModal&&t.abrirModal(...o))},"Iniciar Sessão")])),$,s("div",j,[s("p",{class:"",onClick:e[4]||(e[4]=o=>t.execAll("carro"))},"Carro"),s("p",{class:"",onClick:e[5]||(e[5]=o=>t.execAll("moto"))},"Moto")])])])])])])])]),D,s("div",F,[s("header",G,[n(r,{class:"routerLink pt-2",to:"/"},{default:d(()=>[H]),_:1}),s("div",J,[s("div",K,[s("div",{class:"menu-link position-relative py-3",onClick:e[6]||(e[6]=o=>t.execAll("carro"))}," Comprar carros usados "),s("div",{class:"menu-link position-relative py-3",onClick:e[7]||(e[7]=o=>t.execAll("moto"))}," Comprar motos usadas ")])]),s("div",O,[P,s("div",Q,[U,s("div",W,[s("div",X,[Y,s("div",Z,[s("div",ss,[i.session?(l(),a("div",es,[n(_,{to:"/conta",class:"link-profile"},{default:d(()=>[s("p",null,m(i.$store.state.userName)+" - Conta ",1)]),_:1}),s("p",{class:"m-0 mb-2",style:{"text-align":"left !important"},onClick:e[8]||(e[8]=(...o)=>t.sair&&t.sair(...o))},"Sair")])):(l(),a("div",ts,[s("p",{class:"m-0",style:{"text-align":"left !important"},onClick:e[9]||(e[9]=(...o)=>t.abrirModal&&t.abrirModal(...o))}," Iniciar Sessão ")]))])])])])]),os,is])])])])}const _s=h(v,[["render",ls]]);export{_s as T};
