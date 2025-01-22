import{j as h}from"./loader-91d60271.js";import{T as p}from"./TheForm_Login-a2df100f.js";import{_ as u}from"./whatsapp-8361b3fb.js";import{_,r as m,o as f,c as g,a as e,b as l,w as c,f as b,d as r}from"./index-ac526206.js";const v={name:"TheNavTopRevenda",components:{TheForm_Login:p,session:!1},data(){return{infos:null}},methods:{show_menu(){const t=document.querySelector(".menu-mobile-editado"),o="visiblidade";t.classList.contains(o)&&setTimeout(()=>{t.classList.remove("visiblidade")},300),t.classList.toggle("toggle-menu-mobile-editado"),t.classList.add("visiblidade")},goVerVeiculos(t){const o={tipo_veiculo:t};this.$router.push({path:"/resultados",query:o}),this.$emit("filterVeiculoRoute",t)},emitShowLoader(){this.$emit("showLoader")},execAll(t){this.emitShowLoader(),this.goVerVeiculos(t)},abrirModal(){localStorage.getItem("token")?this.$router.push({path:"/anuncios"}):this.$router.push({path:"/login"})},sair(){localStorage.getItem("token")&&(localStorage.removeItem("token"),this.$router.push({path:"/inicio"}).then(()=>{window.location.reload()}))},async fetchAnunciante(){try{const t=window.location.href,o=new URL(t).hash.split("/")[2],d=await h(o);this.infos=d.data}catch(t){console.error("Erro ao buscar dados do anunciante:",t)}},scrollToFooter(){const t=document.getElementById("footer");t&&t.scrollIntoView({behavior:"smooth"})}},async created(){localStorage.getItem("token")&&(this.session=!0,this.$store.state.anunciante_id=localStorage.getItem("anunciante_id"),this.$store.state.userName=localStorage.getItem("anunciante_nome"))},async mounted(){await this.fetchAnunciante()}},w={key:0,class:"bg-white navbar"},k=e("div",{class:"navegacao bg-succes",style:{padding:"0.9em 0"}},null,-1),x={class:"navegacao d-block d-lg-none fixed-top"},y={class:"header bg-white"},T={class:"logo bg-succes px-3",style:{width:"260px",padding:"13.5px 0"}},L=e("div",{class:"logo bg-succes px-1 d-flex align-items-center",style:{width:"190px"}},null,-1),C={class:"icons bg-succes p-2 px-3"},I=e("div",{class:"icon d-none d-lg-block"},[e("i",{class:"fa fa-user"}),r(" Entrar")],-1),V=e("i",{class:"fas fa-bars"},null,-1),S=[V],N={class:"menu-mobile-editado"},j={style:{"padding-top":"20px"}},q={class:"px-4 mx-auto content-menu col-11 col-md-8"},E={class:"d-flex justify-content-end pt-2"},F={class:"items-menu-mobile"},M=["href"],R={class:"btn py-1 text-center rounded-2 btn-whatsapp"},A=e("img",{src:u,width:"24",class:"pe-1"},null,-1),B={style:{color:"#fff","font-weight":"600"}},z={class:"ps-2 pt-4"},$=e("br",null,null,-1),W={class:"navegacao d-none d-lg-block fixed-top"},U={class:"header bg-dark bg-white ps-5"},D={id:"men",class:"bg-inf card-menu col-md-4"},G={class:"card-menu-content d-flex justify-content-between"},H={class:"icons bg-succes px-3 d-flex align-items-center"},J=["href"],K={class:"btn py-1 text-center rounded-2 btn-whatsapp"},O=e("img",{src:u,width:"24",class:"pe-1"},null,-1),P={style:{color:"#fff","font-weight":"600"}};function Q(t,o,d,X,i,n){const a=m("RouterLink");return i.infos?(f(),g("div",w,[k,e("div",x,[e("header",y,[e("div",T,[l(a,{class:"routerLink pt-2",to:"/inicio"},{default:c(()=>[L]),_:1})]),e("div",C,[I,e("div",{class:"icon d-block d-lg-none btn-menu",onClick:o[0]||(o[0]=(...s)=>n.show_menu&&n.show_menu(...s))},S),e("div",N,[e("div",j,[e("div",q,[e("div",E,[e("span",{onClick:o[1]||(o[1]=(...s)=>n.show_menu&&n.show_menu(...s)),style:{"font-size":"25px",cursor:"pointer"}},"x")]),e("div",F,[e("a",{href:`https://api.whatsapp.com/send?phone=${i.infos.whatsapp}&text=testando`,target:"_blank"},[e("button",R,[A,e("span",B,[e("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:o[2]||(o[2]=(...s)=>t.enviarMsg&&t.enviarMsg(...s))},"Whatsapp")])])],8,M),e("div",z,[l(a,{class:"menu-link-mobile",to:`/loja/${i.infos.id}`},{default:c(()=>[r(" Início ")]),_:1},8,["to"]),l(a,{class:"menu-link-mobile",to:`/loja/${i.infos.id}/estoque`},{default:c(()=>[r(" Estoque ")]),_:1},8,["to"]),e("p",{class:"menu-link-mobile",onClick:o[3]||(o[3]=(...s)=>n.scrollToFooter&&n.scrollToFooter(...s))}," Contato ")])])])])])])])]),$,e("div",W,[e("header",U,[e("div",D,[e("div",G,[l(a,{class:"menu-link routerLink position-relative py-3",to:`/loja/${i.infos.id}`},{default:c(()=>[r(" Início ")]),_:1},8,["to"]),l(a,{class:"menu-link routerLink position-relative py-3",to:`/loja/${i.infos.id}/estoque`},{default:c(()=>[r(" Estoque ")]),_:1},8,["to"]),e("p",{class:"menu-link m-0 p-0 routerLink position-relative py-3",onClick:o[4]||(o[4]=(...s)=>n.scrollToFooter&&n.scrollToFooter(...s))}," Contato ")])]),e("div",H,[e("a",{href:`https://api.whatsapp.com/send?phone=${i.infos.whatsapp}&text=testando`,target:"_blank"},[e("button",K,[O,e("span",P,[e("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:o[5]||(o[5]=(...s)=>t.enviarMsg&&t.enviarMsg(...s))},"Whatsapp")])])],8,J)])])])])):b("",!0)}const oe=_(v,[["render",Q]]);export{oe as T};
