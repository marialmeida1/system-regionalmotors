import{T as C,y as T,f as S,_ as L,c as q}from"./TheForm_Login-73e58a72.js";import{_ as A}from"./logo-5b4cc875.js";import{_ as y,r as g,o as a,c as _,a as s,b as m,w as c,d as v,t as n,F as x,j as M,g as h,i as j,k as p,f as r}from"./index-77db3166.js";import{_ as D,a as N}from"./foto1-6ed4210d.js";import{G as V}from"./glide.esm-676e99f8.js";const B={name:"TheNavTop2",components:{TheForm_Login:C,session:!1},methods:{show_menu(){const o=document.querySelector(".menu-mobile-editado"),t="visiblidade";o.classList.contains(t)&&setTimeout(()=>{o.classList.remove("visiblidade")},300),o.classList.toggle("toggle-menu-mobile-editado"),o.classList.add("visiblidade")},goVerVeiculos(o){const t={tipo_veiculo:o};this.$router.push({path:"/resultados",query:t}),this.$emit("filterVeiculoRoute",o)},emitShowLoader(){this.$emit("showLoader")},execAll(o){this.emitShowLoader(),this.goVerVeiculos(o)},abrirModal(){localStorage.getItem("token")?this.$router.push({path:"/anuncios"}):this.$router.push({path:"/login"})},sair(){localStorage.getItem("token")&&(localStorage.removeItem("token"),this.$router.push({path:"/inicio"}).then(()=>{window.location.reload()}))}},async created(){localStorage.getItem("token")&&(this.session=!0,this.$store.state.anunciante_id=localStorage.getItem("anunciante_id"),this.$store.state.userName=localStorage.getItem("anunciante_nome"))}},z={class:"bg-white",style:{"box-shadow":"0px 0px 20px 0px rgba(0,0,0,0.1)"}},R=s("div",{class:"navegacao bg-succes",style:{padding:"0.9em 0"}},null,-1),F={class:"navegacao d-block d-lg-none fixed-top"},I={class:"header bg-white"},E={class:"logo bg-succes px-3",style:{width:"260px",padding:"13.5px 0"}},O=s("div",{class:"logo bg-succes px-1 d-flex align-items-center",style:{width:"190px"}},[s("img",{src:A,class:"logo"})],-1),P={class:"icons bg-succes p-2 px-3"},G=s("div",{class:"icon d-none d-lg-block"},[s("i",{class:"fa fa-user"}),v(" Entrar")],-1),Q=s("div",{class:"icon"},[s("i",{class:"far fa-bell"})],-1),U=s("i",{class:"fas fa-bars"},null,-1),H=[U],J={class:"menu-mobile-editado"},K={style:{"padding-top":"20px"}},W={class:"px-4 mx-auto content-menu col-11 col-md-8"},X={class:"d-flex justify-content-end pt-2"},Y={class:"items-menu-mobile"},Z={key:0,class:"mb-2"},ss=s("div",{style:{display:"inline-block",width:"15px",height:"15px","background-color":"green","border-radius":"100px"}},null,-1),es=s("span",{class:"fas fa-user me-1"},null,-1),os={key:1,class:"mb-2",style:{"font-size":"18px"}},ts=s("span",{style:{color:"crimson"}},"Registar",-1),ls=s("h5",{class:"mt-4"},"Comprar",-1),is={class:"ps-2"},as=s("h5",{class:"mt-3"},"Anunciar",-1),ns={class:"ps-2"},ds=s("h5",{class:"mt-3"},"Mais",-1),cs=s("div",{class:"ps-2"},[s("p",null,"Serviços"),s("p",null,"Contatos")],-1),rs=s("br",null,null,-1),_s={class:"navegacao d-none d-lg-block fixed-top"},us={class:"header bg-dark bg-white ps-5"},hs={class:"logo bg-success0 ps-4 pt-1 d-flex align-items-center",style:{height:"50px"}},ms=["src"],ps={id:"men",class:"bg-inf card-menu"},gs={class:"card-menu-content d-flex align-items-center"},vs={class:"menu-link position-relative py-3"},fs={class:"sub-menu-desktop position-absolute py-2",style:{"z-index":"99",width:"170px"}},$s=s("div",{class:"pb-3"},null,-1),bs={class:"bg-white px-2 py-3 rounded-3",style:{"border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}},ys={class:"menu-link position-relative py-3"},ws={class:"sub-menu-desktop position-absolute py-2",style:{"z-index":"99",width:"170px"}},xs=s("div",{class:"pb-3"},null,-1),ks={class:"bg-white px-2 py-3 rounded-3",style:{"border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}},Cs=s("div",{class:"menu-link position-relative py-3"},"Serviços ",-1),Ts=s("div",{class:"menu-link position-relative py-3"}," Contatos ",-1),Ss={class:"icons bg-succes px-3 d-flex align-items-center"},Ls=s("div",{class:"icon"},[s("span",{style:{"font-size":"23px"},class:"far fa-bell"})],-1),qs={class:"icon d-none d-lg-block menu-link position-relative py-"},As=s("i",{class:"fa fa-user me-2 fa-lg"},null,-1),Ms=s("span",{style:{"font-size":"0.8em"}},"Conta",-1),js={class:"sub-menu-desktop position-absolute",style:{left:"-50px !important"}},Ds={class:"py-2",style:{"z-index":"99",width:"170px"}},Ns=s("div",{class:"pb-2"},null,-1),Vs={class:"bg-white px-1 py-1",style:{"border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}},Bs={class:"px-3"},zs={key:0},Rs={style:{color:"#000"}},Fs={key:1},Is=s("div",{class:"icon invisible"},[s("span",{style:{"font-size":"23px"},class:"far fa-bell"})],-1),Es=s("div",{class:"icon d-block d-lg-none btn-menu"},[s("i",{class:"fas fa-bars"})],-1);function Os(o,t,f,w,$,l){const d=g("RouterLink"),b=g("router-link");return a(),_("div",z,[R,s("div",F,[s("header",I,[s("div",E,[m(d,{class:"routerLink pt-2",to:"/inicio"},{default:c(()=>[O]),_:1})]),s("div",P,[G,Q,s("div",{class:"icon d-block d-lg-none btn-menu",onClick:t[0]||(t[0]=(...i)=>l.show_menu&&l.show_menu(...i))},H),s("div",J,[s("div",K,[s("div",W,[s("div",X,[s("span",{onClick:t[1]||(t[1]=(...i)=>l.show_menu&&l.show_menu(...i)),style:{"font-size":"25px",cursor:"pointer"}},"x")]),s("div",Y,[o.session?(a(),_("div",Z,[s("h4",null,[ss,v(" "+n(o.$store.state.userName),1)]),s("div",null,[m(b,{to:"/conta"},{default:c(()=>[es,v(" Conta ")]),_:1}),v(" | "),s("span",{onClick:t[2]||(t[2]=(...i)=>l.sair&&l.sair(...i)),style:{cursor:"pointer",color:"crimson"}}," Sair ")])])):(a(),_("div",os,[s("span",{onClick:t[3]||(t[3]=(...i)=>l.abrirModal&&l.abrirModal(...i))},"Iniciar Sessão"),v(" | "),ts])),ls,s("div",is,[s("p",{class:"",onClick:t[4]||(t[4]=i=>l.execAll("carro"))},"Carro"),s("p",{class:"",onClick:t[5]||(t[5]=i=>l.execAll("moto"))},"Moto")]),as,s("div",ns,[s("p",{type:"button","data-bs-toggle":"modal",onClick:t[6]||(t[6]=(...i)=>l.abrirModal&&l.abrirModal(...i))},"Vender Carro"),s("p",{type:"button","data-bs-toggle":"modal",onClick:t[7]||(t[7]=(...i)=>l.abrirModal&&l.abrirModal(...i))},"Vender Moto")]),ds,cs])])])])])])]),rs,s("div",_s,[s("header",us,[m(d,{class:"routerLink py-1",to:"/inicio"},{default:c(()=>[s("div",hs,[s("img",{src:o.$store.state.fotosAnunciantes.foto,class:"img-fluid w-100 h-100"},null,8,ms)])]),_:1}),s("div",ps,[s("div",gs,[s("div",vs,[v("Comprar "),s("div",fs,[$s,s("div",bs,[s("p",{class:"",onClick:t[8]||(t[8]=i=>l.execAll("carro"))},"Carro"),s("p",{class:"",onClick:t[9]||(t[9]=i=>l.execAll("moto"))},"Moto")])])]),s("div",ys,[v("Anunciar "),s("div",ws,[xs,s("div",ks,[s("p",{class:"m-0 px-3 py-2",type:"button","data-bs-toggle":"modal",onClick:t[10]||(t[10]=(...i)=>l.abrirModal&&l.abrirModal(...i))},"Vender Carro "),s("p",{class:"m-0 px-3 py-2",type:"button","data-bs-toggle":"modal",onClick:t[11]||(t[11]=(...i)=>l.abrirModal&&l.abrirModal(...i))},"Vender Moto ")])])]),Cs,Ts])]),s("div",Ss,[Ls,s("div",qs,[As,v(),Ms,s("div",js,[s("div",Ds,[Ns,s("div",Vs,[s("div",Bs,[o.session?(a(),_("div",zs,[m(b,{to:"/conta"},{default:c(()=>[s("p",Rs,n(o.$store.state.userName),1)]),_:1}),s("p",{class:"m-0 mb-2",style:{"text-align":"left !important"},onClick:t[12]||(t[12]=(...i)=>l.sair&&l.sair(...i))},"Sair")])):(a(),_("div",Fs,[s("p",{class:"m-0",style:{"text-align":"left !important"},onClick:t[13]||(t[13]=(...i)=>l.abrirModal&&l.abrirModal(...i))}," Iniciar Sessão ")]))])])])])]),Is,Es])])])])}const Ps=y(B,[["render",Os]]);const Gs={name:"TheBanner",async created(){const o=parseInt(this.$route.params.revenda),t=await T(o);this.$store.state.fotosAnunciantes=t[0]},mounted(){new bootstrap.Carousel(document.getElementById("carouselExample"),{}),setTimeout(()=>{document.getElementById("carouselExample").classList.remove("invisible")},100)}},Qs={class:"bg-white",style:{height:"200px","border-bottom":"1px solid rgba(165, 165, 165, 0.0)"}},Us=s("div",{id:"carregarBanner",class:"text-center col-12",hidden:""}," carregando... ",-1),Hs={class:"bg-white card-banner"},Js={id:"carouselExample",class:"carousel slide invisible","data-bs-ride":"carousel","data-bs-interval":"4000"},Ks={class:"carousel-inner"},Ws={class:"carousel-item active bg-dark"},Xs=s("div",{class:"box-carousel-1",hidden:""},[s("img",{src:D,class:"d-none d-md-block d-lg-block w-100",alt:"Regional motors"}),s("img",{class:"d-md-none d-lg-none w-100",src:N,alt:"Regional motors"})],-1),Ys={class:"box-carousel-1"},Zs=["src"],se=["src"];function ee(o,t,f,w,$,l){return a(),_("div",null,[s("div",Qs,[Us,s("div",Hs,[s("div",Js,[s("div",Ks,[s("div",Ws,[Xs,s("div",Ys,[s("img",{src:o.$store.state.fotosAnunciantes.banner_loja,class:"d-none d-md-block d-lg-block w-100",alt:"Regional motors"},null,8,Zs),s("img",{class:"d-md-none d-lg-none w-100",src:o.$store.state.fotosAnunciantes.banner_loja_movel,alt:"Regional motors"},null,8,se)])])])])])])])}const oe=y(Gs,[["render",ee]]);const te={name:"ThecardComprar",data(){return{marcaSelecionada:"",modeloSelecionada:"",searchQuery:"",showBar:!1}},methods:{applyFiltro(o,t){console.log(o),console.log(t),setTimeout(()=>{const f={[o]:t};this.$router.push({path:"/resultados",query:f})},500)},emitShowLoader(){this.$emit("showLoader")},execAll(o){this.emitShowLoader(),this.guardarMarca(o)},execAll2(o){this.emitShowLoader(),this.guardarModelo(o)},onFocus(){this.showBar=!0,window.scrollTo({top:160,behavior:"smooth"})},onBlur(){setTimeout(()=>{this.showBar=!1,window.scrollTo(0,0)},200)}}},le={class:"px-2 p-lg-0"},ie={class:"card-comprar position-relative shadow-no-top col-11 col-md-6 col-lg-4 py-2 p-lg-4 mx-auto mb-3 bg-white",style:{"border-bottom-left-radius":"8px","border-bottom-right-radius":"8px","border-radius":"8px","box-shadow":"-3px 3px 20px rgba(0,0,0,0.1)"}},ae={class:"p-2 px-3 p-lg-2"},ne={class:"mb-0 text-center",style:{opacity:"0.4","font-weight":"700"}},de=s("div",{style:{position:"absolute",top:"8px",left:"10px",opacity:"0.4","font-size":"14px"}},[s("strong",null,[v(" Loja "),s("i",{class:"fa fa-store"})])],-1),ce=s("br",null,null,-1);function re(o,t,f,w,$,l){return a(),_(x,null,[s("div",null,[s("div",le,[s("div",ie,[s("div",ae,[s("div",null,[s("h4",ne,n(o.$store.state.fotosAnunciantes.nome_empresa),1)]),de])])])]),ce],64)}const _e=y(te,[["render",re]]);const ue={name:"TheResultado_Carro",props:{set_tipo_veiculo:String},data(){return{splideOptions:{type:"carousel",perPage:1},array_filtros:[],results:!1,loader:!0,notFound:!1}},methods:{show_menu_lateral(){console.log("ola mundos"),this.$emit("show_menu_lateral")},showCarroDetalhes(o){console.log("buscando...");const t={id:o};this.$router.push({path:"/verveiculo",query:t})},upPage(){window.scrollTo(0,0)},goverveiculo(o){this.$emit("goverveiculoNow",o)}},async mounted(){this.$store.state.resultado=[];const o=this.$route.params.revenda;this.$store.state.resultado=await S(`api/anuncios/listar_anuncios?anunciante_id=${o}&status_publicacao=2`),console.log("Result "+this.$store.state.resultado),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0&&(this.notFound=!0))},updated(){this.$nextTick(()=>{console.log("chamou 1"),this.$store.state.resultado&&(Object.values(this.$refs).forEach(o=>{o.forEach(t=>{new V(t,{type:"carousel",perView:1,gap:0,peek:{before:0,after:0},hoverpause:!1,pagination:{el:".glide__pagination"}}).mount()})}),console.log("Chamando..."))})}},he=s("div",{class:"container"},[s("div",{class:"px-2"},[s("div",{class:""},[s("h5",{class:"mb-3",style:{opacity:"0.7"}},[s("b",null,"Todas Ofertas")])])])],-1),me={key:0,style:{height:"60vh"},class:"text-center"},pe=s("div",null,[s("img",{class:"caixa",src:L,alt:"",style:{width:"50px",height:"50px",background:"none !important"}})],-1),ge=s("span",{style:{"font-size":"12px"}}," Carregando... ",-1),ve=[pe,ge],fe={class:"container"},$e={class:"row p-0 m-0"},be={class:"col-lg-8 col-md-8 p-0 m-0"},ye={class:"row p-0 m-0"},we={class:"px-2 container-completo"},xe={class:"row p-0 m-0"},ke={class:"col-5 col-md-12 col-lg-12 m-0 p-0"},Ce={class:"imagem-container2"},Te=["alt"],Se={class:"imagem-container2"},Le=["alt"],qe={class:"imagem-container2"},Ae=["alt"],Me={class:"imagem-container2"},je=["alt"],De={class:"imagem-container2"},Ne=["alt"],Ve={class:"imagem-container2"},Be=["alt"],ze={class:"imagem-container2"},Re=["alt"],Fe={class:"imagem-container2"},Ie=["alt"],Ee={class:"imagem-container2"},Oe=["alt"],Pe={class:"imagem-container2"},Ge=["alt"],Qe={class:"glide__track","data-glide-el":"track"},Ue={class:"glide__slides"},He={class:"glide__slide"},Je={class:"imagem-container2"},Ke=["alt"],We={class:"glide__slide"},Xe={class:"imagem-container2"},Ye=["alt"],Ze={class:"glide__slide"},so={class:"imagem-container2"},eo=["alt"],oo=s("div",{class:"glide__arrows","data-glide-el":"controls"},[s("div",{class:"btn glide__arrow glide__arrow--left btn-voltar","data-glide-dir":"<"},[s("span",null," > ")]),s("div",{class:"btn glide__arrow glide__arrow--right btn-avancar","data-glide-dir":">"},[s("span",null," > ")])],-1),to={class:"col-7 col-md-12 col-lg-12 titles p-0 m-0"},lo=["onClick"],io={class:"px-2 pt-2 position-relative"},ao={style:{opacity:"0.5","text-transform":"uppercase"}},no={class:"pt-2 pb-1 position-relative"},co={class:"py-1 ps-2",style:{color:"#000000"}},ro={class:"row p-2 m-0"},_o={class:"col-6 p-0 m-0",style:{"font-size":"12px",opacity:"0.7"}},uo={class:"col-6 p-0 m-0 text-end",style:{"font-size":"12px",opacity:"0.7"}},ho=s("div",null,null,-1),mo=s("div",{class:"col-lg-4 col-md-4"},[s("div",{class:"invisible"}," Ads ")],-1);function po(o,t,f,w,$,l){const d=g("splide-slide"),b=g("splide"),i=M("lazy");return a(),_(x,null,[he,$.loader?(a(),_("div",me,ve)):h("",!0),s("div",fe,[s("div",$e,[s("div",be,[s("div",null,[s("div",ye,[(a(!0),_(x,null,j(o.$store.state.resultado,(e,k)=>(a(),_("div",{class:"col-lg-4 col-md-6 p-0 m-0 mb-3",key:k},[s("div",we,[s("div",xe,[s("div",ke,[m(b,{options:$.splideOptions,class:"bg-dark"},{default:c(()=>[e.foto1?(a(),p(d,{key:0,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",Ce,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Te),[[i,`${e.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto2?(a(),p(d,{key:1,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",Se,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Le),[[i,`${e.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto3?(a(),p(d,{key:2,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",qe,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Ae),[[i,`${e.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto4?(a(),p(d,{key:3,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",Me,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,je),[[i,`${e.foto4}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto5?(a(),p(d,{key:4,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",De,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Ne),[[i,`${e.foto5}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto6?(a(),p(d,{key:5,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",Ve,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Be),[[i,`${e.foto6}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto7?(a(),p(d,{key:6,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",ze,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Re),[[i,`${e.foto7}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto8?(a(),p(d,{key:7,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",Fe,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Ie),[[i,`${e.foto8}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto9?(a(),p(d,{key:8,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",Ee,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Oe),[[i,`${e.foto9}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),e.foto10?(a(),p(d,{key:9,onClick:u=>l.goverveiculo(e.id)},{default:c(()=>[s("div",null,[s("div",Pe,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Ge),[[i,`${e.foto10}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0)]),_:2},1032,["options"]),s("div",{ref_for:!0,ref:"glide",class:"glide",hidden:""},[s("div",Qe,[s("ul",Ue,[s("li",He,[s("div",null,[s("div",Je,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Ke),[[i,`${e.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),s("li",We,[s("div",null,[s("div",Xe,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,Ye),[[i,`${e.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),s("li",Ze,[s("div",null,[s("div",so,[r(s("img",{alt:e.nome_marca,class:"img-fluid"},null,8,eo),[[i,`${e.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])])])]),oo],512)]),s("div",to,[s("div",{class:"resultados-titulos",onClick:u=>l.showCarroDetalhes(e.id)},[s("div",io,[s("h5",null,n(e.nome_marca)+" "+n(e.nome_modelo),1),s("div",ao,[s("p",null,n(e.motor)+" "+n(e.combustivel)+" "+n(e.cambio),1)])]),s("div",null,[s("div",no,[s("div",null,[s("h5",co,"R$ "+n(e.valor_preco),1)]),s("div",null,[s("div",ro,[s("div",_o,n(e.ano_modelo)+"/"+n(e.ano_fabricacao),1),s("div",uo,n(e.km)+" km ",1)])])])]),ho],8,lo)])])])]))),128))])])]),mo])])],64)}const go=y(ue,[["render",po]]);const vo={name:"TheFooter"},fo={class:"rodape-dark",style:{padding:"2em 3em"}},$o={class:"row"},bo={class:"col-12 col-md-6 col-lg-4 border-smoll"},yo=s("h5",null," Endereço ",-1),wo=s("div",{class:"col-12 col-md-6 col-lg-4 border-smoll"},[s("h5",null," Sobre nós ")],-1),xo=s("div",{class:"col-12 col-md-4 col-lg-4 border-smoll"},[s("h5",null," Institucional "),s("p",null," Termos de Uso "),s("p",null," Politicas de Privacidade e Segurança ")],-1),ko=s("div",{class:"py-4 d-flex justify-content-center"},null,-1),Co=s("div",{class:"py-3 text-center"}," © Copyright 2023 Regional Motors ",-1);function To(o,t,f,w,$,l){return a(),_(x,null,[s("footer",null,[s("div",fo,[s("div",$o,[s("div",bo,[yo,s("p",null,n(o.$store.state.fotosAnunciantes.endereco),1),s("p",null,n(o.$store.state.fotosAnunciantes.bairro),1),s("p",null,n(o.$store.state.fotosAnunciantes.cidade),1),s("p",null,n(o.$store.state.fotosAnunciantes.telefone),1)]),wo,xo]),ko])]),Co],64)}const So=y(vo,[["render",To]]),Lo={components:{TheNavTop:Ps,TheBanner:oe,ThecardComprar:_e,TheDestaque:go,TheFooter:So,loader:q},data(){return{loader:""}},methods:{showLoaderNow(){this.loader=document.querySelector(".loader"),this.loader.classList.remove("d-none")},goVerVeiculosNow(o){return o}},mounted(){}},qo={class:"loader d-none"};function Ao(o,t,f,w,$,l){const d=g("TheNavTop"),b=g("TheBanner"),i=g("ThecardComprar"),e=g("TheDestaque"),k=g("TheFooter"),u=g("loader");return a(),_("div",null,[s("div",null,[m(d,{onShowLoader:l.showLoaderNow},null,8,["onShowLoader"]),m(b),m(i,{onShowLoader:l.showLoaderNow},null,8,["onShowLoader"]),m(e,{onShowLoader:l.showLoaderNow},null,8,["onShowLoader"]),m(k),s("div",qo,[m(u)])])])}const Bo=y(Lo,[["render",Ao]]);export{Bo as default};
