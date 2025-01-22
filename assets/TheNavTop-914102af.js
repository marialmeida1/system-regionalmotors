import{j as v}from"./loader-49a51e5e.js";import{T as w}from"./TheForm_Login-2df227ea.js";import{_ as b}from"./whatsapp-8361b3fb.js";import{_ as k,r as x,o as y,c as T,a as e,b as l,w as c,d as r}from"./index-f9a1c669.js";const L={name:"TheNavTopRevenda",components:{TheForm_Login:w,session:!1},data(){return{infos:null}},methods:{show_menu(){const o=document.querySelector(".menu-mobile-editado"),t="visiblidade";o.classList.contains(t)&&setTimeout(()=>{o.classList.remove("visiblidade")},300),o.classList.toggle("toggle-menu-mobile-editado"),o.classList.add("visiblidade")},goVerVeiculos(o){const t={tipo_veiculo:o};this.$router.push({path:"/resultados",query:t}),this.$emit("filterVeiculoRoute",o)},emitShowLoader(){this.$emit("showLoader")},execAll(o){this.emitShowLoader(),this.goVerVeiculos(o)},abrirModal(){localStorage.getItem("token")?this.$router.push({path:"/anuncios"}):this.$router.push({path:"/login"})},sair(){localStorage.getItem("token")&&(localStorage.removeItem("token"),this.$router.push({path:"/inicio"}).then(()=>{window.location.reload()}))},async fetchAnunciante(){try{const o=window.location.href,d=new URL(o).pathname.split("/")[2],h=await v(d);this.infos=h.data}catch(o){console.error("Erro ao buscar dados do anunciante:",o)}},scrollToFooter(){const o=document.getElementById("footer");o&&o.scrollIntoView({behavior:"smooth"})}},async created(){localStorage.getItem("token")&&(this.session=!0,this.$store.state.anunciante_id=localStorage.getItem("anunciante_id"),this.$store.state.userName=localStorage.getItem("anunciante_nome"))},async mounted(){await this.fetchAnunciante()}},C={class:"bg-white navbar"},I=e("div",{class:"navegacao bg-succes",style:{padding:"0.9em 0"}},null,-1),S={class:"navegacao d-block d-lg-none fixed-top"},V={class:"header bg-white"},j={class:"logo bg-succes px-3",style:{width:"260px",padding:"13.5px 0"}},E=e("div",{class:"logo bg-succes px-1 d-flex align-items-center",style:{width:"190px"}},null,-1),N={class:"icons bg-succes p-2 px-3"},q=e("div",{class:"icon d-none d-lg-block"},[e("i",{class:"fa fa-user"}),r(" Entrar")],-1),F=e("i",{class:"fas fa-bars"},null,-1),M=[F],R={class:"menu-mobile-editado"},A={style:{"padding-top":"20px"}},B={class:"px-4 mx-auto content-menu col-11 col-md-8"},$={class:"d-flex justify-content-end pt-2"},z={class:"items-menu-mobile"},W=["href"],O={class:"btn py-1 text-center rounded-2 btn-whatsapp"},U=e("img",{src:b,width:"24",class:"pe-1"},null,-1),D={style:{color:"#fff","font-weight":"600"}},G={class:"ps-2 pt-4"},H=e("br",null,null,-1),J={class:"navegacao d-none d-lg-block fixed-top"},K={class:"header bg-dark bg-white ps-5"},P={id:"men",class:"bg-inf card-menu col-md-4"},Q={class:"card-menu-content d-flex justify-content-between"},X={class:"icons bg-succes px-3 d-flex align-items-center"},Y=["href"],Z={class:"btn py-1 text-center rounded-2 btn-whatsapp"},ee=e("img",{src:b,width:"24",class:"pe-1"},null,-1),oe={style:{color:"#fff","font-weight":"600"}};function te(o,t,d,h,i,n){var u,p,m,_,f,g;const a=x("RouterLink");return y(),T("div",C,[I,e("div",S,[e("header",V,[e("div",j,[l(a,{class:"routerLink pt-2",to:"/inicio"},{default:c(()=>[E]),_:1})]),e("div",N,[q,e("div",{class:"icon d-block d-lg-none btn-menu",onClick:t[0]||(t[0]=(...s)=>n.show_menu&&n.show_menu(...s))},M),e("div",R,[e("div",A,[e("div",B,[e("div",$,[e("span",{onClick:t[1]||(t[1]=(...s)=>n.show_menu&&n.show_menu(...s)),style:{"font-size":"25px",cursor:"pointer"}},"x")]),e("div",z,[e("a",{href:`https://api.whatsapp.com/send?phone=${(u=i.infos)==null?void 0:u.whatsapp}&text=Olá! Tudo bem? Estou interessado em saber mais detalhes sobre os carros disponíveis para venda.`,target:"_blank"},[e("button",O,[U,e("span",D,[e("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:t[2]||(t[2]=(...s)=>o.enviarMsg&&o.enviarMsg(...s))},"Whatsapp")])])],8,W),e("div",G,[l(a,{class:"menu-link-mobile",to:`/loja/${(p=i.infos)==null?void 0:p.id}`},{default:c(()=>[r(" Início ")]),_:1},8,["to"]),l(a,{class:"menu-link-mobile",to:`/loja/${(m=i.infos)==null?void 0:m.id}/estoque`},{default:c(()=>[r(" Estoque ")]),_:1},8,["to"]),e("p",{class:"menu-link-mobile",onClick:t[3]||(t[3]=(...s)=>n.scrollToFooter&&n.scrollToFooter(...s))}," Contato ")])])])])])])])]),H,e("div",J,[e("header",K,[e("div",P,[e("div",Q,[l(a,{class:"menu-link routerLink position-relative py-3",to:`/loja/${(_=i.infos)==null?void 0:_.id}`},{default:c(()=>[r(" Início ")]),_:1},8,["to"]),l(a,{class:"menu-link routerLink position-relative py-3",to:`/loja/${(f=i.infos)==null?void 0:f.id}/estoque`},{default:c(()=>[r(" Estoque ")]),_:1},8,["to"]),e("p",{class:"menu-link m-0 p-0 routerLink position-relative py-3",onClick:t[4]||(t[4]=(...s)=>n.scrollToFooter&&n.scrollToFooter(...s))}," Contato ")])]),e("div",X,[e("a",{href:`https://api.whatsapp.com/send?phone=${(g=i.infos)==null?void 0:g.whatsapp}&text=testando`,target:"_blank"},[e("button",Z,[ee,e("span",oe,[e("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:t[5]||(t[5]=(...s)=>o.enviarMsg&&o.enviarMsg(...s))},"Whatsapp")])])],8,Y)])])])])}const le=k(L,[["render",te]]);export{le as T};
