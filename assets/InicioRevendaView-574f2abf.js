import{T as b}from"./TheNavTop-2cc3aa84.js";import{y as T,f as x,l as D}from"./loader-6ab6aa8b.js";import{_ as q,a as j}from"./foto1-6ed4210d.js";import{_ as $,o as l,c as v,a as e,t as i,F as k,d as L,r as m,j as B,f as _,i as S,b as p,w as u,k as h,e as d}from"./index-56256d67.js";import{G as A}from"./glide.esm-676e99f8.js";import{_ as N}from"./TheForm_Login-1ef5e9b2.js";import"./logo-5b4cc875.js";const F={name:"TheBanner",async created(){const s=parseInt(this.$route.params.revenda),c=await T(s);this.$store.state.fotosAnunciantes=c[0]},mounted(){new bootstrap.Carousel(document.getElementById("carouselExample"),{}),setTimeout(()=>{document.getElementById("carouselExample").classList.remove("invisible")},100)}},E={class:"bg-white",style:{height:"200px","border-bottom":"1px solid rgba(165, 165, 165, 0.0)"}},R=e("div",{id:"carregarBanner",class:"text-center col-12",hidden:""}," carregando... ",-1),V={class:"bg-white card-banner"},z={id:"carouselExample",class:"carousel slide invisible","data-bs-ride":"carousel","data-bs-interval":"4000"},O={class:"carousel-inner"},P={class:"carousel-item active bg-dark"},I=e("div",{class:"box-carousel-1",hidden:""},[e("img",{src:q,class:"d-none d-md-block d-lg-block w-100",alt:"Regional motors"}),e("img",{class:"d-md-none d-lg-none w-100",src:j,alt:"Regional motors"})],-1),M={class:"box-carousel-1"},G=["src"],Q=["src"];function U(s,c,g,w,f,t){return l(),v("div",null,[e("div",E,[R,e("div",V,[e("div",z,[e("div",O,[e("div",P,[I,e("div",M,[e("img",{src:s.$store.state.fotosAnunciantes.banner_loja,class:"d-none d-md-block d-lg-block w-100",alt:"Regional motors"},null,8,G),e("img",{class:"d-md-none d-lg-none w-100",src:s.$store.state.fotosAnunciantes.banner_loja_movel,alt:"Regional motors"},null,8,Q)])])])])])])])}const H=$(F,[["render",U]]);const J={name:"ThecardComprar",data(){return{marcaSelecionada:"",modeloSelecionada:"",searchQuery:"",showBar:!1}},methods:{applyFiltro(s,c){console.log(s),console.log(c),setTimeout(()=>{const g={[s]:c};this.$router.push({path:"/resultados",query:g})},500)},emitShowLoader(){this.$emit("showLoader")},execAll(s){this.emitShowLoader(),this.guardarMarca(s)},execAll2(s){this.emitShowLoader(),this.guardarModelo(s)},onFocus(){this.showBar=!0,window.scrollTo({top:160,behavior:"smooth"})},onBlur(){setTimeout(()=>{this.showBar=!1,window.scrollTo(0,0)},200)}}},K={class:"px-2 p-lg-0"},W={class:"card-comprar position-relative shadow-no-top col-11 col-md-6 col-lg-4 py-2 p-lg-4 mx-auto mb-3 bg-white",style:{"border-bottom-left-radius":"8px","border-bottom-right-radius":"8px","border-radius":"8px","box-shadow":"-3px 3px 20px rgba(0,0,0,0.1)"}},X={class:"p-2 px-3 p-lg-2"},Y={class:"mb-0 text-center",style:{opacity:"0.4","font-weight":"700"}},Z=e("div",{style:{position:"absolute",top:"8px",left:"10px",opacity:"0.4","font-size":"14px"}},[e("strong",null,[L(" Loja "),e("i",{class:"fa fa-store"})])],-1),ee=e("br",null,null,-1);function oe(s,c,g,w,f,t){return l(),v(k,null,[e("div",null,[e("div",K,[e("div",W,[e("div",X,[e("div",null,[e("h4",Y,i(s.$store.state.fotosAnunciantes.nome_empresa),1)]),Z])])])]),ee],64)}const se=$(J,[["render",oe]]);const te={name:"TheResultado_Carro",props:{set_tipo_veiculo:String},data(){return{splideOptions:{type:"carousel",perPage:1},array_filtros:[],results:!1,loader:!0,notFound:!1}},methods:{show_menu_lateral(){console.log("ola mundos"),this.$emit("show_menu_lateral")},showCarroDetalhes(s){console.log("buscando...");const c={id:s};this.$router.push({path:"/verveiculorevenda",query:c})},upPage(){window.scrollTo(0,0)},goverveiculo(s){this.$emit("goverveiculoNow",s)}},async mounted(){this.$store.state.resultado=[];const s=this.$route.params.revenda;this.$store.state.resultado=await x(`api/anuncios/listar_anuncios?anunciante_id=${s}&status_publicacao=2`),console.log("Result "+this.$store.state.resultado),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0&&(this.notFound=!0))},updated(){this.$nextTick(()=>{console.log("chamou 1"),this.$store.state.resultado&&(Object.values(this.$refs).forEach(s=>{s.forEach(c=>{new A(c,{type:"carousel",perView:1,gap:0,peek:{before:0,after:0},hoverpause:!1,pagination:{el:".glide__pagination"}}).mount()})}),console.log("Chamando..."))})}},ae=e("div",{class:"container"},[e("div",{class:"px-2"},[e("div",{class:""},[e("h5",{class:"mb-3",style:{opacity:"0.7"}},[e("b",null,"Todas Ofertas")])])])],-1),le={key:0,style:{height:"60vh"},class:"text-center"},ne=e("div",null,[e("img",{class:"caixa",src:N,alt:"",style:{width:"50px",height:"50px",background:"none !important"}})],-1),ie=e("span",{style:{"font-size":"12px"}}," Carregando... ",-1),ce=[ne,ie],de={class:"container"},re={class:"row p-0 m-0"},_e={class:"col-lg-8 col-md-8 p-0 m-0"},ue={class:"row p-0 m-0"},he={class:"px-2 container-completo"},me={class:"row p-0 m-0"},ve={class:"col-5 col-md-12 col-lg-12 m-0 p-0"},ge=["onClick"],pe={class:"imagem-container2"},fe=["alt"],$e=["onClick"],we={class:"imagem-container2"},ke=["alt"],Ce=["onClick"],ye={class:"imagem-container2"},be=["alt"],Te=["onClick"],xe={class:"imagem-container2"},De=["alt"],qe=["onClick"],je={class:"imagem-container2"},Le=["alt"],Be=["onClick"],Se={class:"imagem-container2"},Ae=["alt"],Ne=["onClick"],Fe={class:"imagem-container2"},Ee=["alt"],Re=["onClick"],Ve={class:"imagem-container2"},ze=["alt"],Oe=["onClick"],Pe={class:"imagem-container2"},Ie=["alt"],Me=["onClick"],Ge={class:"imagem-container2"},Qe=["alt"],Ue={class:"glide__track","data-glide-el":"track"},He={class:"glide__slides"},Je={class:"glide__slide"},Ke={class:"imagem-container2"},We=["alt"],Xe={class:"glide__slide"},Ye={class:"imagem-container2"},Ze=["alt"],eo={class:"glide__slide"},oo={class:"imagem-container2"},so=["alt"],to=e("div",{class:"glide__arrows","data-glide-el":"controls"},[e("div",{class:"btn glide__arrow glide__arrow--left btn-voltar","data-glide-dir":"<"},[e("span",null," > ")]),e("div",{class:"btn glide__arrow glide__arrow--right btn-avancar","data-glide-dir":">"},[e("span",null," > ")])],-1),ao={class:"col-7 col-md-12 col-lg-12 titles p-0 m-0"},lo=["onClick"],no={class:"px-2 pt-2 position-relative"},io={style:{opacity:"0.5","text-transform":"uppercase"}},co={class:"pt-2 pb-1 position-relative"},ro={class:"py-1 ps-2",style:{color:"#000000"}},_o={class:"row p-2 m-0"},uo={class:"col-6 p-0 m-0",style:{"font-size":"12px",opacity:"0.7"}},ho={class:"col-6 p-0 m-0 text-end",style:{"font-size":"12px",opacity:"0.7"}},mo=e("div",null,null,-1),vo=e("div",{class:"col-lg-4 col-md-4"},[e("div",{class:"invisible"}," Ads ")],-1);function go(s,c,g,w,f,t){const r=m("splide-slide"),C=m("splide"),n=B("lazy");return l(),v(k,null,[ae,f.loader?(l(),v("div",le,ce)):_("",!0),e("div",de,[e("div",re,[e("div",_e,[e("div",null,[e("div",ue,[(l(!0),v(k,null,S(s.$store.state.resultado,(o,y)=>(l(),v("div",{class:"col-lg-4 col-md-6 p-0 m-0 mb-3",key:y},[e("div",he,[e("div",me,[e("div",ve,[p(C,{options:f.splideOptions,class:"bg-dark"},{default:u(()=>[o.foto1?(l(),h(r,{key:0,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",pe,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,fe),[[n,`${o.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,ge)]),_:2},1032,["onClick"])):_("",!0),o.foto2?(l(),h(r,{key:1,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",we,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ke),[[n,`${o.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,$e)]),_:2},1032,["onClick"])):_("",!0),o.foto3?(l(),h(r,{key:2,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",ye,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,be),[[n,`${o.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Ce)]),_:2},1032,["onClick"])):_("",!0),o.foto4?(l(),h(r,{key:3,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",xe,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,De),[[n,`${o.foto4}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Te)]),_:2},1032,["onClick"])):_("",!0),o.foto5?(l(),h(r,{key:4,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",je,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Le),[[n,`${o.foto5}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,qe)]),_:2},1032,["onClick"])):_("",!0),o.foto6?(l(),h(r,{key:5,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",Se,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ae),[[n,`${o.foto6}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Be)]),_:2},1032,["onClick"])):_("",!0),o.foto7?(l(),h(r,{key:6,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",Fe,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ee),[[n,`${o.foto7}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Ne)]),_:2},1032,["onClick"])):_("",!0),o.foto8?(l(),h(r,{key:7,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",Ve,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ze),[[n,`${o.foto8}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Re)]),_:2},1032,["onClick"])):_("",!0),o.foto9?(l(),h(r,{key:8,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",Pe,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ie),[[n,`${o.foto9}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Oe)]),_:2},1032,["onClick"])):_("",!0),o.foto10?(l(),h(r,{key:9,onClick:a=>t.goverveiculo(o.id)},{default:u(()=>[e("div",{onClick:a=>t.showCarroDetalhes(o.id)},[e("div",Ge,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Qe),[[n,`${o.foto10}destaque_mini.jpg?v=${new Date().getTime()}`]])])],8,Me)]),_:2},1032,["onClick"])):_("",!0)]),_:2},1032,["options"]),e("div",{ref_for:!0,ref:"glide",class:"glide",hidden:""},[e("div",Ue,[e("ul",He,[e("li",Je,[e("div",null,[e("div",Ke,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,We),[[n,`${o.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),e("li",Xe,[e("div",null,[e("div",Ye,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ze),[[n,`${o.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),e("li",eo,[e("div",null,[e("div",oo,[d(e("img",{alt:o.nome_marca,class:"img-fluid"},null,8,so),[[n,`${o.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])])])]),to],512)]),e("div",ao,[e("div",{class:"resultados-titulos",onClick:a=>t.showCarroDetalhes(o.id)},[e("div",no,[e("h5",null,i(o.nome_marca)+" "+i(o.nome_modelo),1),e("div",io,[e("p",null,i(o.motor)+" "+i(o.combustivel)+" "+i(o.cambio),1)])]),e("div",null,[e("div",co,[e("div",null,[e("h5",ro,"R$ "+i(o.valor_preco),1)]),e("div",null,[e("div",_o,[e("div",uo,i(o.ano_modelo)+"/"+i(o.ano_fabricacao),1),e("div",ho,i(o.km)+" km ",1)])])])]),mo],8,lo)])])])]))),128))])])]),vo])])],64)}const po=$(te,[["render",go]]);const fo={name:"TheFooter"},$o={class:"rodape-dark",style:{padding:"2em 3em"}},wo={class:"row"},ko={class:"col-12 col-md-6 col-lg-4 border-smoll"},Co=e("h5",null," Endereço ",-1),yo=e("div",{class:"col-12 col-md-6 col-lg-4 border-smoll"},[e("h5",null," Sobre nós ")],-1),bo=e("div",{class:"col-12 col-md-4 col-lg-4 border-smoll"},[e("h5",null," Institucional "),e("p",null," Termos de Uso "),e("p",null," Politicas de Privacidade e Segurança ")],-1),To=e("div",{class:"py-4 d-flex justify-content-center"},null,-1),xo=e("div",{class:"py-3 text-center"}," © Copyright 2023 Regional Motors ",-1);function Do(s,c,g,w,f,t){return l(),v(k,null,[e("footer",null,[e("div",$o,[e("div",wo,[e("div",ko,[Co,e("p",null,i(s.$store.state.fotosAnunciantes.endereco),1),e("p",null,i(s.$store.state.fotosAnunciantes.bairro),1),e("p",null,i(s.$store.state.fotosAnunciantes.cidade),1),e("p",null,i(s.$store.state.fotosAnunciantes.telefone),1)]),yo,bo]),To])]),xo],64)}const qo=$(fo,[["render",Do]]),jo={components:{TheNavTop:b,TheBanner:H,ThecardComprar:se,TheDestaque:po,TheFooter:qo,loader:D},data(){return{loader:""}},methods:{showLoaderNow(){this.loader=document.querySelector(".loader"),this.loader.classList.remove("d-none")},goVerVeiculosNow(s){return s}},mounted(){}},Lo={class:"loader d-none"};function Bo(s,c,g,w,f,t){const r=m("TheNavTop"),C=m("TheBanner"),n=m("ThecardComprar"),o=m("TheDestaque"),y=m("TheFooter"),a=m("loader");return l(),v("div",null,[e("div",null,[p(r,{onShowLoader:t.showLoaderNow},null,8,["onShowLoader"]),p(C),p(n,{onShowLoader:t.showLoaderNow},null,8,["onShowLoader"]),p(o,{onShowLoader:t.showLoaderNow},null,8,["onShowLoader"]),p(y),e("div",Lo,[p(a)])])])}const zo=$(jo,[["render",Bo]]);export{zo as default};
