import{T as x}from"./TheNavTop-9fb2c3f2.js";import{_ as C,A as T,o as l,c as $,a as e,e as u,r as p,t as f,b as w,w as _,F as b,f as D,p as j,m as L,j as q,z as v,d}from"./index-0997f6a7.js";import{G as S}from"./glide.esm-676e99f8.js";import{_ as B}from"./TheForm_Login-8bbf5b0d.js";import{T as E}from"./TheFooter-3d8af6bc.js";import{l as N}from"./loader-dfb34e1c.js";import"./whatsapp-8361b3fb.js";const F={name:"TheBanner",data(){return{infos:null,bannerCarregando:!1}},methods:{async fetchAnunciante(){try{const t=window.location.href,r=new URL(t).pathname.split("/")[2],m=await T(r);this.infos=m.data}catch(t){console.error("Erro ao buscar dados do anunciante:",t)}}},async mounted(){new bootstrap.Carousel(document.getElementById("carouselExample"),{}),setTimeout(()=>{this.bannerCarregando=!0},800),setTimeout(()=>{document.getElementById("carouselExample").classList.remove("invisible")},100),await this.fetchAnunciante()}},A={class:"bg-white"},V=e("div",{id:"carregarBanner",class:"text-center col-12",hidden:""},"carregando...",-1),z={class:"bg-white card-banner0"},R={id:"carouselExample",class:"carousel slide invisible","data-bs-ride":"carousel","data-bs-interval":"4000"},O={class:"carousel-inner size_banner"},U={class:"carousel-item active bg-dark"},I={class:"box-carousel-1"},G={key:0,class:"banner"},M=["srcset"],P=["src"];function Q(t,h,r,m,n,s){var c,g;return l(),$("div",null,[e("div",A,[V,e("div",z,[e("div",R,[e("div",O,[e("div",U,[e("div",I,[n.bannerCarregando?(l(),$("picture",G,[e("source",{media:"(max-width: 568px)",srcset:(c=n.infos)!=null&&c.banner_loja_movel?`https://api.regionalmotors.com.br/${n.infos.banner_loja_movel}`:"/banner/foto-mobile1.jpg"},null,8,M),e("img",{src:(g=n.infos)!=null&&g.banner_loja?`https://api.regionalmotors.com.br/${n.infos.banner_loja}`:"/banner/foto1.jpg",alt:"Banner",style:{width:"100%","object-fit":"cover"}},null,8,P)])):u("",!0)])])])])])])])}const H=C(F,[["render",Q]]);const J={name:"ThecardComprar",data(){return{marcaSelecionada:"",modeloSelecionada:"",searchQuery:"",infos:null,showBar:!1,id:""}},methods:{applyFiltro(t,h){setTimeout(()=>{const r={[t]:h};this.$router.push({path:"/resultados",query:r})},500)},emitShowLoader(){this.$emit("showLoader")},execAll(t){this.emitShowLoader(),this.guardarMarca(t)},execAll2(t){this.emitShowLoader(),this.guardarModelo(t)},onFocus(){this.showBar=!0,window.scrollTo({top:160,behavior:"smooth"})},onBlur(){setTimeout(()=>{this.showBar=!1,window.scrollTo(0,0)},200)},async fetchAnunciante(){try{const t=window.location.href,r=new URL(t).pathname.split("/")[2],m=await T(r);this.infos=m.data}catch(t){console.error("Erro ao buscar dados do anunciante:",t)}}},async mounted(){await this.fetchAnunciante()}},K={class:"px-2 p-lg-0"},W={class:"card-comprar position-relative shadow-no-top col-11 col-md-6 col-lg-4 py-2 px-2 p-lg-3 mx-auto mb-3 bg-white"},X=e("div",{class:"card-comprar-loja"},[e("strong",null,[D(" Loja "),e("i",{class:"fa fa-store"})])],-1),Y={class:"card-comprar-align"},Z={class:"card-comprar-row",style:{"min-height":"4rem"}},ee=["src"],oe={class:"card-comprar-title d-flex align-itens-center"},te={class:"mb-0 ms-4 card-comprar-title-text"},se={class:"col-12 mt-3"},ae=e("div",{class:"btn crimson col-12 py-2",style:{background:"crimson",color:"#fff","font-weight":"bold"}}," ESTOQUE ",-1),ne=e("br",null,null,-1);function ie(t,h,r,m,n,s){var g,k,i;const c=p("router-link");return l(),$(b,null,[e("div",null,[e("div",K,[e("div",W,[e("div",null,[X,e("div",Y,[e("div",Z,[e("div",null,[e("img",{src:`https://api.regionalmotors.com.br/${(g=n.infos)==null?void 0:g.foto}`,style:{"object-fit":"contain",width:"10rem",height:"100%"}},null,8,ee)]),e("div",oe,[e("h4",te,f((k=n.infos)==null?void 0:k.nome_empresa),1)])]),e("div",se,[w(c,{to:`/loja/${(i=n.infos)==null?void 0:i.id}/estoque`},{default:_(()=>[ae]),_:1},8,["to"])])])])])])]),ne],64)}const le=C(J,[["render",ie]]);const ce={name:"TheResultado_Carro",props:{set_tipo_veiculo:String},data(){return{splideOptions:{type:"carousel",perPage:1},array_filtros:[],results:!1,loader:!0,notFound:!1,id:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showCarroDetalhes(t){const h={id:t},r=window.location.href,n=new URL(r).pathname.split("/")[2];this.$router.push({path:`/loja/${n}/verveiculorevenda`,query:h})},upPage(){window.scrollTo(0,0)},goverveiculo(t){this.$emit("goverveiculoNow",t)}},async mounted(){this.$store.state.resultado=[];const t=this.$route.params.revenda;this.$store.state.resultado=await j(`api/anuncios/listar_anuncios?anunciante_id=${t}&status_publicacao=2`),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0&&(this.notFound=!0)),this.id=t},updated(){this.$nextTick(()=>{this.$store.state.resultado&&Object.values(this.$refs).forEach(t=>{t.forEach(h=>{new S(h,{type:"carousel",perView:1,gap:0,peek:{before:0,after:0},hoverpause:!1,pagination:{el:".glide__pagination"}}).mount()})})})}},re=e("div",{class:"container"},[e("div",{class:"px-2"},[e("div",{class:""},[e("h5",{class:"mb-3",style:{opacity:"0.7"}},[e("b",null,"Todas Ofertas")])])])],-1),de={key:0,style:{height:"60vh"},class:"text-center"},_e=e("div",null,[e("img",{class:"caixa",src:B,alt:"",style:{width:"50px",height:"50px",background:"none !important"}})],-1),he=e("span",{style:{"font-size":"12px"}}," Carregando... ",-1),ue=[_e,he],me={class:"container"},ve={class:"row p-0 m-0"},pe={class:"col-lg-12 col-md-12 p-0 m-0"},ge={class:"row p-0 m-0"},fe={class:"px-2 container-completo"},we={class:"row p-0 m-0"},$e={class:"col-5 col-md-12 col-lg-12 m-0 p-0"},ke=["onClick"],Ce={class:"imagem-container2"},ye=["alt"],be=["onClick"],Te={class:"imagem-container2"},xe=["alt"],De=["onClick"],je={class:"imagem-container2"},Le=["alt"],qe=["onClick"],Se={class:"imagem-container2"},Be=["alt"],Ee=["onClick"],Ne={class:"imagem-container2"},Fe=["alt"],Ae=["onClick"],Ve={class:"imagem-container2"},ze=["alt"],Re=["onClick"],Oe={class:"imagem-container2"},Ue=["alt"],Ie=["onClick"],Ge={class:"imagem-container2"},Me=["alt"],Pe=["onClick"],Qe={class:"imagem-container2"},He=["alt"],Je=["onClick"],Ke={class:"imagem-container2"},We=["alt"],Xe={class:"glide__track","data-glide-el":"track"},Ye={class:"glide__slides"},Ze={class:"glide__slide"},eo={class:"imagem-container2"},oo=["alt"],to={class:"glide__slide"},so={class:"imagem-container2"},ao=["alt"],no={class:"glide__slide"},io={class:"imagem-container2"},lo=["alt"],co=e("div",{class:"glide__arrows","data-glide-el":"controls"},[e("div",{class:"btn glide__arrow glide__arrow--left btn-voltar","data-glide-dir":"<"},[e("span",null," > ")]),e("div",{class:"btn glide__arrow glide__arrow--right btn-avancar","data-glide-dir":">"},[e("span",null," > ")])],-1),ro={class:"col-7 col-md-12 col-lg-12 titles p-0 m-0"},_o=["onClick"],ho={class:"px-2 pt-2 position-relative"},uo={style:{opacity:"0.5","text-transform":"uppercase"}},mo={class:"pt-2 pb-1 position-relative"},vo={class:"py-1 ps-2",style:{color:"#000000"}},po={class:"row p-2 m-0"},go={class:"col-6 p-0 m-0",style:{"font-size":"12px",opacity:"0.7"}},fo={class:"col-6 p-0 m-0 text-end",style:{"font-size":"12px",opacity:"0.7"}},wo={class:"container d-flex justify-content-end"},$o=e("div",{class:"btn crimson col-12 py-2",style:{border:"#242424 solid 1px",color:"#242424","font-weight":"600","font-size":"0.75rem"}}," Ver Estoque ",-1);function ko(t,h,r,m,n,s){const c=p("splide-slide"),g=p("splide"),k=p("router-link"),i=L("lazy");return l(),$(b,null,[re,n.loader?(l(),$("div",de,ue)):u("",!0),e("div",me,[e("div",ve,[e("div",pe,[e("div",null,[e("div",ge,[(l(!0),$(b,null,q(t.$store.state.resultado,(o,y)=>(l(),$("div",{class:"col-lg-3 col-md-6 p-0 m-0 mb-3 card-veiculo",key:y},[e("div",fe,[e("div",we,[e("div",$e,[w(g,{options:n.splideOptions,class:"bg-dark"},{default:_(()=>[o.foto1?(l(),v(c,{key:0,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ce,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ye),[[i,`${o.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,ke)]),_:2},1032,["onClick"])):u("",!0),o.foto2?(l(),v(c,{key:1,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Te,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,xe),[[i,`${o.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,be)]),_:2},1032,["onClick"])):u("",!0),o.foto3?(l(),v(c,{key:2,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",je,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Le),[[i,`${o.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,De)]),_:2},1032,["onClick"])):u("",!0),o.foto4?(l(),v(c,{key:3,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Se,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Be),[[i,`${o.foto4}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,qe)]),_:2},1032,["onClick"])):u("",!0),o.foto5?(l(),v(c,{key:4,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ne,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Fe),[[i,`${o.foto5}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Ee)]),_:2},1032,["onClick"])):u("",!0),o.foto6?(l(),v(c,{key:5,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ve,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ze),[[i,`${o.foto6}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Ae)]),_:2},1032,["onClick"])):u("",!0),o.foto7?(l(),v(c,{key:6,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Oe,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ue),[[i,`${o.foto7}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Re)]),_:2},1032,["onClick"])):u("",!0),o.foto8?(l(),v(c,{key:7,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ge,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Me),[[i,`${o.foto8}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Ie)]),_:2},1032,["onClick"])):u("",!0),o.foto9?(l(),v(c,{key:8,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Qe,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,He),[[i,`${o.foto9}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Pe)]),_:2},1032,["onClick"])):u("",!0),o.foto10?(l(),v(c,{key:9,onClick:a=>s.goverveiculo(o.id)},{default:_(()=>[e("div",{onClick:a=>s.showCarroDetalhes(o.id)},[e("div",Ke,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,We),[[i,`${o.foto10}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Je)]),_:2},1032,["onClick"])):u("",!0)]),_:2},1032,["options"]),e("div",{ref_for:!0,ref:"glide",class:"glide",hidden:""},[e("div",Xe,[e("ul",Ye,[e("li",Ze,[e("div",null,[e("div",eo,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,oo),[[i,`${o.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),e("li",to,[e("div",null,[e("div",so,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ao),[[i,`${o.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),e("li",no,[e("div",null,[e("div",io,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,lo),[[i,`${o.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])])])]),co],512)]),e("div",ro,[e("div",{class:"resultados-titulos",onClick:a=>s.showCarroDetalhes(o.id)},[e("div",ho,[e("h5",null,f(o.nome_marca)+" "+f(o.nome_modelo),1),e("div",uo,[e("p",null,f(o.combustivel)+" "+f(o.cambio),1)])]),e("div",null,[e("div",mo,[e("div",null,[e("h5",vo," R$ "+f(o.valor_preco),1)]),e("div",null,[e("div",po,[e("div",go,f(o.ano_modelo)+"/"+f(o.ano_fabricacao),1),e("div",fo,f(o.km)+" km ",1)])])])])],8,_o)])])])]))),128))])])])])]),e("div",wo,[w(k,{to:`/loja/${n.id}/estoque`},{default:_(()=>[$o]),_:1},8,["to"])])],64)}const Co=C(ce,[["render",ko]]),yo={components:{TheNavTop:x,TheBanner:H,ThecardComprar:le,TheDestaque:Co,TheFooter:E,loader:N},data(){return{loader:""}},methods:{showLoaderNow(){this.loader=document.querySelector(".loader"),this.loader.classList.remove("d-none")},goVerVeiculosNow(t){return t},scrollToFooter(){this.$refs.footer.$el.scrollIntoView({behavior:"smooth"})}},async mounted(){const t=window.location.href,r=new URL(t).pathname.split("/")[2],m=await T(r);document.title=m.data.nome_empresa;const n=document.querySelector('meta[name="description"]');n&&n.setAttribute("content","Compre seu carro novo ou usado com segurança e pelo menor preço na "+m.data.nome_empresa+".")}},bo={class:"loader d-none"};function To(t,h,r,m,n,s){const c=p("TheNavTop"),g=p("TheBanner"),k=p("ThecardComprar"),i=p("TheDestaque"),o=p("TheFooter"),y=p("loader");return l(),$("div",null,[e("div",null,[w(c,{onScrollToFooter:s.scrollToFooter,onShowLoader:s.showLoaderNow},null,8,["onScrollToFooter","onShowLoader"]),w(g),w(k,{onShowLoader:s.showLoaderNow},null,8,["onShowLoader"]),w(i,{onShowLoader:s.showLoaderNow},null,8,["onShowLoader"]),w(o,{ref:"footer",onShowLoader:s.showLoaderNow},null,8,["onShowLoader"]),e("div",bo,[w(y)])])])}const Eo=C(yo,[["render",To]]);export{Eo as default};
