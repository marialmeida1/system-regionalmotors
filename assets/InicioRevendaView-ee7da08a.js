import{T as x}from"./TheNavTop-bd064c04.js";import{_ as C,A as T,o as i,c as $,a as e,f as h,r as p,t as v,b as f,w as d,F as b,d as D,p as j,m as L,j as q,z as m,e as r}from"./index-21ecfeda.js";import{G as S}from"./glide.esm-676e99f8.js";import{_ as B}from"./TheForm_Login-446e0885.js";import{T as E}from"./TheFooter-428bfe4b.js";import{l as N}from"./loader-3bb131fc.js";import"./whatsapp-8361b3fb.js";const F={name:"TheBanner",data(){return{infos:null,bannerCarregando:!1}},methods:{async fetchAnunciante(){try{const t=window.location.href,_=new URL(t).pathname.split("/")[2],w=await T(_);this.infos=w.data}catch(t){console.error("Erro ao buscar dados do anunciante:",t)}}},async mounted(){new bootstrap.Carousel(document.getElementById("carouselExample"),{}),setTimeout(()=>{this.bannerCarregando=!0},800),setTimeout(()=>{document.getElementById("carouselExample").classList.remove("invisible")},100),await this.fetchAnunciante()}},V={class:"bg-white"},A=e("div",{id:"carregarBanner",class:"text-center col-12",hidden:""},"carregando...",-1),z={class:"bg-white card-banner0"},R={id:"carouselExample",class:"carousel slide invisible","data-bs-ride":"carousel","data-bs-interval":"4000"},O={class:"carousel-inner size_banner"},I={class:"carousel-item active bg-dark"},U={class:"box-carousel-1"},G={key:0,class:"banner"},M=["srcset"],P=["src"];function Q(t,u,_,w,c,s){var l,g;return i(),$("div",null,[e("div",V,[A,e("div",z,[e("div",R,[e("div",O,[e("div",I,[e("div",U,[c.bannerCarregando?(i(),$("picture",G,[e("source",{media:"(max-width: 568px)",srcset:(l=c.infos)!=null&&l.banner_loja_movel?`https://api.regionalmotors.com.br/${c.infos.banner_loja_movel}`:"/banner/foto-mobile1.jpg"},null,8,M),e("img",{src:(g=c.infos)!=null&&g.banner_loja?`https://api.regionalmotors.com.br/${c.infos.banner_loja}`:"/banner/foto1.jpg",alt:"Banner",style:{width:"100%","object-fit":"cover"}},null,8,P)])):h("",!0)])])])])])])])}const H=C(F,[["render",Q]]);const J={name:"ThecardComprar",data(){return{marcaSelecionada:"",modeloSelecionada:"",searchQuery:"",infos:null,showBar:!1,id:""}},methods:{applyFiltro(t,u){setTimeout(()=>{const _={[t]:u};this.$router.push({path:"/resultados",query:_})},500)},emitShowLoader(){this.$emit("showLoader")},execAll(t){this.emitShowLoader(),this.guardarMarca(t)},execAll2(t){this.emitShowLoader(),this.guardarModelo(t)},onFocus(){this.showBar=!0,window.scrollTo({top:160,behavior:"smooth"})},onBlur(){setTimeout(()=>{this.showBar=!1,window.scrollTo(0,0)},200)},async fetchAnunciante(){try{const t=window.location.href,_=new URL(t).pathname.split("/")[2],w=await T(_);this.infos=w.data}catch(t){console.error("Erro ao buscar dados do anunciante:",t)}}},async mounted(){await this.fetchAnunciante()}},K={class:"px-2 p-lg-0"},W={class:"card-comprar position-relative shadow-no-top col-11 col-md-6 col-lg-4 py-2 px-2 p-lg-3 mx-auto mb-3 bg-white"},X=e("div",{class:"card-comprar-loja"},[e("strong",null,[D(" Loja "),e("i",{class:"fa fa-store"})])],-1),Y={class:"card-comprar-align"},Z={class:"card-comprar-row",style:{"min-height":"4rem"}},ee=["src"],oe={class:"card-comprar-title d-flex align-itens-center"},te={class:"mb-0 ms-4 card-comprar-title-text"},se={class:"col-12 mt-3"},ae=e("div",{class:"btn crimson col-12 py-2",style:{background:"crimson",color:"#fff","font-weight":"bold"}}," ESTOQUE ",-1),ne=e("br",null,null,-1);function ie(t,u,_,w,c,s){var g,k,n;const l=p("router-link");return i(),$(b,null,[e("div",null,[e("div",K,[e("div",W,[e("div",null,[X,e("div",Y,[e("div",Z,[e("div",null,[e("img",{src:`https://api.regionalmotors.com.br/${(g=c.infos)==null?void 0:g.foto}`,style:{"object-fit":"contain",width:"10rem",height:"100%"}},null,8,ee)]),e("div",oe,[e("h4",te,v((k=c.infos)==null?void 0:k.nome_empresa),1)])]),e("div",se,[f(l,{to:`/loja/${(n=c.infos)==null?void 0:n.id}/estoque`},{default:d(()=>[ae]),_:1},8,["to"])])])])])])]),ne],64)}const le=C(J,[["render",ie]]);const ce={name:"TheResultado_Carro",props:{set_tipo_veiculo:String},data(){return{splideOptions:{type:"carousel",perPage:1},array_filtros:[],results:!1,loader:!0,notFound:!1,id:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showCarroDetalhes(t){const u={id:t},_=window.location.href,c=new URL(_).pathname.split("/")[2];this.$router.push({path:`/loja/${c}/verveiculorevenda`,query:u})},upPage(){window.scrollTo(0,0)},goverveiculo(t){this.$emit("goverveiculoNow",t)}},async mounted(){this.$store.state.resultado=[];const t=this.$route.params.revenda;this.$store.state.resultado=await j(`api/anuncios/listar_anuncios?anunciante_id=${t}&status_publicacao=2`),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0&&(this.notFound=!0)),this.id=t},updated(){this.$nextTick(()=>{this.$store.state.resultado&&Object.values(this.$refs).forEach(t=>{t.forEach(u=>{new S(u,{type:"carousel",perView:1,gap:0,peek:{before:0,after:0},hoverpause:!1,pagination:{el:".glide__pagination"}}).mount()})})})}},re=e("div",{class:"container"},[e("div",{class:"px-2"},[e("div",{class:""},[e("h5",{class:"mb-3",style:{opacity:"0.7"}},[e("b",null,"Todas Ofertas")])])])],-1),de={key:0,style:{height:"60vh"},class:"text-center"},_e=e("div",null,[e("img",{class:"caixa",src:B,alt:"",style:{width:"50px",height:"50px",background:"none !important"}})],-1),he=e("span",{style:{"font-size":"12px"}}," Carregando... ",-1),ue=[_e,he],me={class:"container"},ve={class:"row p-0 m-0"},pe={class:"col-lg-12 col-md-12 p-0 m-0"},ge={class:"row p-0 m-0"},fe={class:"px-2 container-completo"},we={class:"row p-0 m-0"},$e={class:"col-5 col-md-12 col-lg-12 m-0 p-0"},ke=["onClick"],Ce={class:"imagem-container2"},ye=["alt"],be=["onClick"],Te={class:"imagem-container2"},xe=["alt"],De=["onClick"],je={class:"imagem-container2"},Le=["alt"],qe=["onClick"],Se={class:"imagem-container2"},Be=["alt"],Ee=["onClick"],Ne={class:"imagem-container2"},Fe=["alt"],Ve=["onClick"],Ae={class:"imagem-container2"},ze=["alt"],Re=["onClick"],Oe={class:"imagem-container2"},Ie=["alt"],Ue=["onClick"],Ge={class:"imagem-container2"},Me=["alt"],Pe=["onClick"],Qe={class:"imagem-container2"},He=["alt"],Je=["onClick"],Ke={class:"imagem-container2"},We=["alt"],Xe={class:"glide__track","data-glide-el":"track"},Ye={class:"glide__slides"},Ze={class:"glide__slide"},eo={class:"imagem-container2"},oo=["alt"],to={class:"glide__slide"},so={class:"imagem-container2"},ao=["alt"],no={class:"glide__slide"},io={class:"imagem-container2"},lo=["alt"],co=e("div",{class:"glide__arrows","data-glide-el":"controls"},[e("div",{class:"btn glide__arrow glide__arrow--left btn-voltar","data-glide-dir":"<"},[e("span",null," > ")]),e("div",{class:"btn glide__arrow glide__arrow--right btn-avancar","data-glide-dir":">"},[e("span",null," > ")])],-1),ro={class:"col-7 col-md-12 col-lg-12 titles p-0 m-0"},_o=["onClick"],ho={class:"px-2 pt-2 position-relative"},uo={style:{opacity:"0.5","text-transform":"uppercase"}},mo={class:"pt-2 pb-1 position-relative"},vo={class:"py-1 ps-2",style:{color:"#000000"}},po={class:"row p-2 m-0"},go={class:"col-6 p-0 m-0",style:{"font-size":"12px",opacity:"0.7"}},fo={class:"col-6 p-0 m-0 text-end",style:{"font-size":"12px",opacity:"0.7"}},wo={class:"container d-flex justify-content-end"},$o=e("div",{class:"btn crimson col-12 py-2",style:{border:"#242424 solid 1px",color:"#242424","font-weight":"600","font-size":"0.75rem"}}," Ver Estoque ",-1);function ko(t,u,_,w,c,s){const l=p("splide-slide"),g=p("splide"),k=p("router-link"),n=L("lazy");return i(),$(b,null,[re,c.loader?(i(),$("div",de,ue)):h("",!0),e("div",me,[e("div",ve,[e("div",pe,[e("div",null,[e("div",ge,[(i(!0),$(b,null,q(t.$store.state.resultado,(o,y)=>(i(),$("div",{class:"col-lg-3 col-md-6 p-0 m-0 mb-3 card-veiculo",key:y},[e("div",fe,[e("div",we,[e("div",$e,[f(g,{options:c.splideOptions,class:"bg-dark"},{default:d(()=>[o.foto1?(i(),m(l,{key:0,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ce,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ye),[[n,`${o.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,ke)]),_:2},1032,["onClick"])):h("",!0),o.foto2?(i(),m(l,{key:1,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Te,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,xe),[[n,`${o.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,be)]),_:2},1032,["onClick"])):h("",!0),o.foto3?(i(),m(l,{key:2,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",je,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Le),[[n,`${o.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,De)]),_:2},1032,["onClick"])):h("",!0),o.foto4?(i(),m(l,{key:3,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Se,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Be),[[n,`${o.foto4}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,qe)]),_:2},1032,["onClick"])):h("",!0),o.foto5?(i(),m(l,{key:4,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ne,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Fe),[[n,`${o.foto5}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Ee)]),_:2},1032,["onClick"])):h("",!0),o.foto6?(i(),m(l,{key:5,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ae,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ze),[[n,`${o.foto6}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Ve)]),_:2},1032,["onClick"])):h("",!0),o.foto7?(i(),m(l,{key:6,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Oe,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ie),[[n,`${o.foto7}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Re)]),_:2},1032,["onClick"])):h("",!0),o.foto8?(i(),m(l,{key:7,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ge,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Me),[[n,`${o.foto8}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Ue)]),_:2},1032,["onClick"])):h("",!0),o.foto9?(i(),m(l,{key:8,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Qe,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,He),[[n,`${o.foto9}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Pe)]),_:2},1032,["onClick"])):h("",!0),o.foto10?(i(),m(l,{key:9,onClick:a=>s.goverveiculo(o.id)},{default:d(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ke,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,We),[[n,`${o.foto10}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Je)]),_:2},1032,["onClick"])):h("",!0)]),_:2},1032,["options"]),e("div",{ref_for:!0,ref:"glide",class:"glide",hidden:""},[e("div",Xe,[e("ul",Ye,[e("li",Ze,[e("div",null,[e("div",eo,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,oo),[[n,`${o.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),e("li",to,[e("div",null,[e("div",so,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ao),[[n,`${o.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),e("li",no,[e("div",null,[e("div",io,[r(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,lo),[[n,`${o.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])])])]),co],512)]),e("div",ro,[e("div",{class:"resultados-titulos",onClick:a=>s.showCarroDetalhes(o.id)},[e("div",ho,[e("h5",null,v(o.nome_marca)+" "+v(o.nome_modelo),1),e("div",uo,[e("p",null,v(o.motor)+" "+v(o.combustivel)+" "+v(o.cambio),1)])]),e("div",null,[e("div",mo,[e("div",null,[e("h5",vo," R$ "+v(o.valor_preco),1)]),e("div",null,[e("div",po,[e("div",go,v(o.ano_modelo)+"/"+v(o.ano_fabricacao),1),e("div",fo,v(o.km)+" km ",1)])])])])],8,_o)])])])]))),128))])])])])]),e("div",wo,[f(k,{to:`/loja/${c.id}/estoque`},{default:d(()=>[$o]),_:1},8,["to"])])],64)}const Co=C(ce,[["render",ko]]),yo={components:{TheNavTop:x,TheBanner:H,ThecardComprar:le,TheDestaque:Co,TheFooter:E,loader:N},data(){return{loader:""}},methods:{showLoaderNow(){this.loader=document.querySelector(".loader"),this.loader.classList.remove("d-none")},goVerVeiculosNow(t){return t},scrollToFooter(){this.$refs.footer.$el.scrollIntoView({behavior:"smooth"})}},mounted(){}},bo={class:"loader d-none"};function To(t,u,_,w,c,s){const l=p("TheNavTop"),g=p("TheBanner"),k=p("ThecardComprar"),n=p("TheDestaque"),o=p("TheFooter"),y=p("loader");return i(),$("div",null,[e("div",null,[f(l,{onScrollToFooter:s.scrollToFooter,onShowLoader:s.showLoaderNow},null,8,["onScrollToFooter","onShowLoader"]),f(g),f(k,{onShowLoader:s.showLoaderNow},null,8,["onShowLoader"]),f(n,{onShowLoader:s.showLoaderNow},null,8,["onShowLoader"]),f(o,{ref:"footer",onShowLoader:s.showLoaderNow},null,8,["onShowLoader"]),e("div",bo,[f(y)])])])}const Eo=C(yo,[["render",To]]);export{Eo as default};
