import{T as N}from"./TheNavTop-f7da63f1.js";import{T as q}from"./TheNavLateral-c09cbda6.js";import{f as T,_ as D,c as j}from"./TheForm_Login-ace5df00.js";import{G as L}from"./glide.esm-676e99f8.js";import{_ as b,r as y,j as R,o as a,c as d,a as e,F as x,i as C,d as w,g as _,f as r,h as F,t as u,b as $,w as h,k as p}from"./index-1046b078.js";import"./logo-5b4cc875.js";const S={name:"TheResultado_Carro",props:{set_tipo_veiculo:String},data(){return{splideOptions:{type:"carousel",perPage:1},array_filtros:[],results:!1,loader:!0,notFound:!1,arrayTitles:[]}},methods:{show_menu_lateral(){console.log("ola mundos"),this.$emit("show_menu_lateral")},showCarroDetalhes(o){console.log("buscando...");const i={id:o};this.$router.push({path:"/verveiculo",query:i})},upPage(){window.scrollTo(0,0)},goverveiculo(o){this.$emit("goverveiculoNow",o)},async listData(o){this.$store.state.resultado=await o,console.log(this.$store.state.resultado)},async applyFiltro(o,i){this.notFound=!1,this.loader=!0;const v={};this.$store.state.resultado=[],this.array_filtros.forEach(l=>{v[l.chave]=l.valor}),v[o]=i,this.array_filtros=Object.keys(v).map(l=>({chave:l,valor:v[l]}));const f={};this.array_filtros.forEach(l=>{f[l.chave]=l.valor}),this.arrayTitles=[];var g="Comprar ";Object.values(f).forEach(l=>{console.log(l),l==1?l="Novo":l==2&&(l="Usado"),this.arrayTitles.push(l),g+=l+" "}),document.title=g;const c=`api/anuncios/listar_anuncios?${Object.keys(f).map(l=>`${l}=${f[l]}`).join("&")}&destaque_busca=1&status_publicacao=2`;this.$store.state.resultado=await T(c),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0?this.notFound=!0:this.notFound=!1)},verTodos(){this.limparFiltro()},async limparFiltro(){this.$store.state.resultado=[],this.loader=!0,this.notFound=!1,this.array_filtros=[],this.$store.state.resultado=await T("api/anuncios/listar_anuncios?destaque_busca=1&status_publicacao=2"),this.$store.state.results=!0,this.filtro="",this.textMarca="",this.textModelo="",this.$store.state.todosFiltros=[],this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0&&(this.notFound=!0))}},async mounted(){this.$store.state.resultado=[];const o=Object.keys(this.$route.query);let i="";o[0]=="tipo_veiculo"?i=this.$route.query.tipo_veiculo:o[0]=="nome_marca"?i=this.$route.query.nome_marca:o[0]=="nome_modelo"&&(i=this.$route.query.nome_modelo);var v="Comprar ";v+=i+" ",document.title=v,this.$store.state.resultado=await T(`api/anuncios/listar_anuncios?${o[0]}=${i}&destaque_busca=1&status_publicacao=2`),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0?this.notFound=!0:this.notFound=!1)},updated(){this.$nextTick(()=>{console.log("chamou 1"),this.$store.state.resultado&&(Object.values(this.$refs).forEach(o=>{o.forEach(i=>{new L(i,{type:"carousel",perView:1,gap:0,peek:{before:0,after:0},hoverpause:!1,pagination:{el:".glide__pagination"}}).mount()})}),console.log("Chamando..."))})}},V={class:"content"},z={class:"pt-2 ps-2 pb-3"},E={class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},O={key:0},B={key:0},H={key:1},G={key:1},I={key:2},P={hidden:""},U={class:"px-2 py-2"},A={key:0,style:{height:"60vh"},class:"text-center"},M=e("div",null,[e("img",{class:"caixa",src:D,alt:"",style:{width:"50px",height:"50px",background:"none !important"}})],-1),J=e("span",{style:{"font-size":"12px"}}," Carregando... ",-1),K=[M,J],Q={class:"pt-5 px-3"},W={class:"col-lg-6 mx-auto rounded-3 text-center py-4",style:{"background-color":"rgba(82, 82, 82, 0.2).2)"}},X=e("h4",null,"Nenhum resultado!",-1),Y={class:"m-0"},Z={class:"row p-0 m-0"},ee={class:"col-lg-8 col-md-8 p-0 m-0"},te={class:"row p-0 m-0"},oe={class:"px-2 container-completo"},se={class:"row p-0 m-0"},ae={class:"col-5 col-md-12 col-lg-12 m-0 p-0"},le={class:"imagem-container2"},ie=["alt"],ne={class:"imagem-container2"},re=["alt"],ce={class:"imagem-container2"},de=["alt"],_e={class:"imagem-container2"},ue=["alt"],he={class:"imagem-container2"},ve=["alt"],me={class:"imagem-container2"},pe=["alt"],ge={class:"imagem-container2"},fe=["alt"],ye={class:"imagem-container2"},ke=["alt"],$e={class:"imagem-container2"},we=["alt"],Te={class:"imagem-container2"},xe=["alt"],Ce={class:"glide__track","data-glide-el":"track"},be={class:"glide__slides"},Fe={class:"glide__slide"},Ne={class:"imagem-container2"},qe=["alt"],De={class:"glide__slide"},je={class:"imagem-container2"},Le=["alt"],Re={class:"glide__slide"},Se={class:"imagem-container2"},Ve=["alt"],ze=e("div",{class:"glide__arrows","data-glide-el":"controls"},[e("div",{class:"btn glide__arrow glide__arrow--left btn-voltar","data-glide-dir":"<"},[e("span",null," > ")]),e("div",{class:"btn glide__arrow glide__arrow--right btn-avancar","data-glide-dir":">"},[e("span",null," > ")])],-1),Ee={class:"col-7 col-md-12 col-lg-12 titles p-0 m-0"},Oe=["onClick"],Be={class:"px-2 pt-2 position-relative"},He={style:{opacity:"0.5","text-transform":"uppercase"}},Ge={class:"pt-2 pb-1 position-relative"},Ie={class:"py-1 ps-2",style:{color:"#000000"}},Pe={class:"row p-2 m-0"},Ue={class:"col-6 p-0 m-0",style:{"font-size":"12px",opacity:"0.7"}},Ae={class:"col-6 p-0 m-0 text-end",style:{"font-size":"12px",opacity:"0.7"}},Me=e("div",null,null,-1),Je=e("div",{class:"col-lg-4 col-md-4"},[e("div",{class:"invisible"}," Ads ")],-1),Ke=e("div",{class:"bg-dark",style:{"border-radius":"100px",height:"55px",width:"55px","padding-top":"5px"}},[e("i",{class:"fas fa-filter",style:{"font-size":"12px"}}),w(),e("br"),e("div",{style:{"font-size":"11px"}},"Filtrar")],-1),Qe=[Ke];function We(o,i,v,f,g,s){const c=y("splide-slide"),l=y("splide"),n=R("lazy");return a(),d("main",V,[e("div",z,[e("div",E,[(a(!0),d(x,null,C(g.array_filtros,(t,k)=>(a(),d("span",{class:"me-2 p-1 px-2 rounded-3 me-2",style:{"background-color":"rgba(82, 82, 82, 0.2)",color:"#000","font-weight":"600"},key:k},[t.chave=="situacao_veiculo"?(a(),d("span",O,[t.valor=="1"?(a(),d("span",B," Novo ")):_("",!0),t.valor=="2"?(a(),d("span",H," Usado ")):_("",!0)])):t.chave=="opcionais_id"?(a(),d("span",G," Itens Opcionais ")):(a(),d("span",I,u(t.valor),1))]))),128))])]),e("div",P,[e("div",U,[e("h4",null,[w(" Resultados "),(a(!0),d(x,null,C(o.$store.state.todosFiltros,(t,k)=>(a(),d("span",{class:"me-2",key:k}," oa "+u(t.valor)+", ",1))),128)),w(" | Regionalmotors ")])])]),g.loader?(a(),d("div",A,K)):_("",!0),r(e("div",Q,[e("div",W,[X,e("p",Y,[w("Click para "),e("span",{style:{color:"crimson",cursor:"pointer"},onClick:i[0]||(i[0]=(...t)=>s.verTodos&&s.verTodos(...t))}," ver todos ")])])],512),[[F,g.notFound]]),e("div",Z,[e("div",ee,[e("div",null,[e("div",te,[(a(!0),d(x,null,C(o.$store.state.resultado,(t,k)=>(a(),d("div",{class:"col-lg-4 col-md-6 p-0 m-0 mb-3",key:k},[e("div",oe,[e("div",se,[e("div",ae,[$(l,{options:g.splideOptions,class:"bg-dark"},{default:h(()=>[t.foto1?(a(),p(c,{key:0,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",le,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,ie),[[n,`${t.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto2?(a(),p(c,{key:1,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",ne,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,re),[[n,`${t.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto3?(a(),p(c,{key:2,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",ce,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,de),[[n,`${t.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto4?(a(),p(c,{key:3,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",_e,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,ue),[[n,`${t.foto4}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto5?(a(),p(c,{key:4,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",he,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,ve),[[n,`${t.foto5}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto6?(a(),p(c,{key:5,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",me,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,pe),[[n,`${t.foto6}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto7?(a(),p(c,{key:6,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",ge,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,fe),[[n,`${t.foto7}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto8?(a(),p(c,{key:7,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",ye,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,ke),[[n,`${t.foto8}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto9?(a(),p(c,{key:8,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",$e,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,we),[[n,`${t.foto9}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0),t.foto10?(a(),p(c,{key:9,onClick:m=>s.goverveiculo(t.id)},{default:h(()=>[e("div",null,[e("div",Te,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,xe),[[n,`${t.foto10}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):_("",!0)]),_:2},1032,["options"]),e("div",{ref_for:!0,ref:"glide",class:"glide",hidden:""},[e("div",Ce,[e("ul",be,[e("li",Fe,[e("div",null,[e("div",Ne,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,qe),[[n,`${t.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),e("li",De,[e("div",null,[e("div",je,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,Le),[[n,`${t.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),e("li",Re,[e("div",null,[e("div",Se,[r(e("img",{alt:t.nome_marca,class:"img-fluid"},null,8,Ve),[[n,`${t.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])])])]),ze],512)]),e("div",Ee,[e("div",{class:"resultados-titulos",onClick:m=>s.showCarroDetalhes(t.id)},[e("div",Be,[e("h5",null,u(t.nome_marca)+" "+u(t.nome_modelo),1),e("div",He,[e("p",null,u(t.motor)+" "+u(t.combustivel)+" "+u(t.cambio),1)])]),e("div",null,[e("div",Ge,[e("div",null,[e("h5",Ie,"R$ "+u(t.valor_preco),1)]),e("div",null,[e("div",Pe,[e("div",Ue,u(t.ano_modelo)+"/"+u(t.ano_fabricacao),1),e("div",Ae,u(t.km)+" km ",1)])])])]),Me],8,Oe)])])])]))),128))])])]),Je]),e("div",{style:{position:"fixed",right:"15px",bottom:"25px","z-index":"99"},class:"text-center d-lg-none d-md-none",onClick:i[1]||(i[1]=(...t)=>s.show_menu_lateral&&s.show_menu_lateral(...t))},Qe)])}const Xe=b(S,[["render",We]]),Ye={components:{TheNavTop:N,TheNavLateral:q,TheResultado_Carro:Xe,loader:j},data(){return{TheNavLateral:"",router:"1",set_tipo_veiculo:"",results:!1}},methods:{handle_showHidden_menu_lateral(){console.log("Emitido..."),this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},filtrar_tipo(o){this.set_tipo_veiculo=o,console.log("Tipo pai: "+this.set_tipo_veiculo)},filter_novo(o){console.log("Novo: "+o),console.log("Semi_no: "+semi_novo)},goverveiculo(o){const i={id:o};this.$router.push({path:"/verveiculo",query:i})},execFilterVeiculoRoute(o){this.$refs.theNavLateral.applyFiltro("tipo_veiculo",o)},sendData(o,i){this.$refs.theresultado.applyFiltro(o,i)},clearFiltros(){this.$refs.theresultado.limparFiltro()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral"),this.TheNavLateral_moto=document.getElementById("TheNavLateral-moto")}},Ze={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral bg-white",style:{"box-shadow":"0px 0px 20px 0px rgba(0,0,0,0.1)"}};function et(o,i,v,f,g,s){const c=y("TheNavTop"),l=y("TheNavLateral"),n=y("TheResultado_Carro"),t=y("loader");return a(),d("div",null,[$(c,{onFilterVeiculoRoute:s.execFilterVeiculoRoute},null,8,["onFilterVeiculoRoute"]),e("div",Ze,[$(l,{onShow_menu_lateral:s.handle_showHidden_menu_lateral,onFilter_tipo:s.filtrar_tipo,onFilter_novo:o.filtrar_novo,ref:"theNavLateral",onTransmiteData:s.sendData,onLimparFiltro:s.clearFiltros},null,8,["onShow_menu_lateral","onFilter_tipo","onFilter_novo","onTransmiteData","onLimparFiltro"])]),$(n,{onShow_menu_lateral:s.handle_showHidden_menu_lateral,set_tipo_veiculo:g.set_tipo_veiculo,onGoverveiculoNow:s.goverveiculo,ref:"theresultado"},null,8,["onShow_menu_lateral","set_tipo_veiculo","onGoverveiculoNow"]),r(e("div",null,[$(t)],512),[[F,this.results]])])}const nt=b(Ye,[["render",et]]);export{nt as default};
