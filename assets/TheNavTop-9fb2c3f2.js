import{_ as v,A as w,r as k,o as x,c as y,a as e,b as l,w as c,f as r}from"./index-0997f6a7.js";import{T}from"./TheForm_Login-8bbf5b0d.js";import{_ as b}from"./whatsapp-8361b3fb.js";const L={name:"TheNavTopRevenda",components:{TheForm_Login:T,session:!1},data(){return{infos:null}},methods:{show_menu(){const s=document.querySelector(".menu-mobile-editado"),o="visiblidade";s.classList.contains(o)&&setTimeout(()=>{s.classList.remove("visiblidade")},300),s.classList.toggle("toggle-menu-mobile-editado"),s.classList.add("visiblidade")},goVerVeiculos(s){const o={tipo_veiculo:s};this.$router.push({path:"/resultados",query:o}),this.$emit("filterVeiculoRoute",s)},emitShowLoader(){this.$emit("showLoader")},execAll(s){this.emitShowLoader(),this.goVerVeiculos(s)},abrirModal(){localStorage.getItem("token")?this.$router.push({path:"/anuncios"}):this.$router.push({path:"/login"})},sair(){localStorage.getItem("token")&&(localStorage.removeItem("token"),this.$router.push({path:"/"}).then(()=>{window.location.reload()}))},async fetchAnunciante(){try{const s=window.location.href,u=new URL(s).pathname.split("/")[2],d=await w(u);this.infos=d.data,console.log(d.data)}catch(s){console.error("Erro ao buscar dados do anunciante:",s)}},scrollToFooter(){const s=document.getElementById("footer");s&&s.scrollIntoView({behavior:"smooth"})}},async created(){localStorage.getItem("token")&&(this.session=!0,this.$store.state.anunciante_id=localStorage.getItem("anunciante_id"),this.$store.state.userName=localStorage.getItem("anunciante_nome"))},async mounted(){await this.fetchAnunciante()}},C={class:"bg-white navbar navbar-revenda"},I=e("div",{class:"navegacao bg-succes",style:{padding:"0.9em 0"}},null,-1),S={class:"navegacao d-block d-lg-none fixed-top"},V={class:"header bg-white"},E={class:"logo bg-succes px-3",style:{width:"260px",padding:"13.5px 0"}},N=e("div",{class:"logo bg-succes px-1 d-flex align-items-center",style:{width:"190px"}},null,-1),j={class:"icons bg-succes p-2 px-3"},q=e("div",{class:"icon d-none d-lg-block"},[e("i",{class:"fa fa-user"}),r(" Entrar")],-1),F=e("i",{class:"fas fa-bars"},null,-1),A=[F],M={class:"menu-mobile-editado"},R={style:{"padding-top":"20px"}},B={class:"px-4 mx-auto content-menu col-11 col-md-8"},$={class:"d-flex justify-content-end pt-2"},z={class:"items-menu-mobile"},O=["href"],W={class:"btn py-1 text-center rounded-2 btn-whatsapp"},U=e("img",{src:b,width:"24",class:"pe-1"},null,-1),D={style:{color:"#fff","font-weight":"600"}},G={class:"ps-2 pt-4"},H=e("br",null,null,-1),J={class:"navegacao d-none d-lg-block fixed-top"},K={class:"header bg-dark bg-white ps-5"},P={id:"men",class:"bg-inf card-menu col-md-4"},Q={class:"card-menu-content d-flex justify-content-between"},X={class:"icons bg-succes px-3 d-flex align-items-center"},Y=["href"],Z={class:"btn py-1 text-center rounded-2 btn-whatsapp"},ee=e("img",{src:b,width:"24",class:"pe-1"},null,-1),se={style:{color:"#fff","font-weight":"600"}};function oe(s,o,u,d,i,n){var h,p,m,_,f,g;const a=k("RouterLink");return x(),y("div",C,[I,e("div",S,[e("header",V,[e("div",E,[l(a,{class:"routerLink pt-2",to:"/"},{default:c(()=>[N]),_:1})]),e("div",j,[q,e("div",{class:"icon d-block d-lg-none btn-menu",onClick:o[0]||(o[0]=(...t)=>n.show_menu&&n.show_menu(...t))},A),e("div",M,[e("div",R,[e("div",B,[e("div",$,[e("span",{onClick:o[1]||(o[1]=(...t)=>n.show_menu&&n.show_menu(...t)),style:{"font-size":"25px",cursor:"pointer"}},"x")]),e("div",z,[e("a",{href:`https://api.whatsapp.com/send?phone=${(h=i.infos)==null?void 0:h.whatsapp}&text=Olá! Tudo bem? Estou interessado em saber mais detalhes sobre os carros disponíveis para venda.`,target:"_blank"},[e("button",W,[U,e("span",D,[e("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:o[2]||(o[2]=(...t)=>s.enviarMsg&&s.enviarMsg(...t))},"Whatsapp")])])],8,O),e("div",G,[l(a,{class:"menu-link-mobile",to:`/loja/${(p=i.infos)==null?void 0:p.id}`},{default:c(()=>[r(" Início ")]),_:1},8,["to"]),l(a,{class:"menu-link-mobile",to:`/loja/${(m=i.infos)==null?void 0:m.id}/estoque`},{default:c(()=>[r(" Estoque ")]),_:1},8,["to"]),e("p",{class:"menu-link-mobile",onClick:o[3]||(o[3]=(...t)=>n.scrollToFooter&&n.scrollToFooter(...t))}," Contato ")])])])])])])])]),H,e("div",J,[e("header",K,[e("div",P,[e("div",Q,[l(a,{class:"menu-link routerLink position-relative py-3",to:`/loja/${(_=i.infos)==null?void 0:_.id}`},{default:c(()=>[r(" Início ")]),_:1},8,["to"]),l(a,{class:"menu-link routerLink position-relative py-3",to:`/loja/${(f=i.infos)==null?void 0:f.id}/estoque`},{default:c(()=>[r(" Estoque ")]),_:1},8,["to"]),e("p",{class:"menu-link m-0 p-0 routerLink position-relative py-3",onClick:o[4]||(o[4]=(...t)=>n.scrollToFooter&&n.scrollToFooter(...t))}," Contato ")])]),e("div",X,[e("a",{href:`https://api.whatsapp.com/send?phone=${(g=i.infos)==null?void 0:g.whatsapp}&text=Olá! Tudo bem? Estou interessado em saber mais detalhes sobre os carros disponíveis para venda.`,target:"_blank"},[e("button",Z,[ee,e("span",se,[e("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:o[5]||(o[5]=(...t)=>s.enviarMsg&&s.enviarMsg(...t))},"Whatsapp")])])],8,Y)])])])])}const ae=v(L,[["render",oe]]);export{ae as T};
