import{_ as x,p as $,r as b,m as q,o as a,c as n,a as t,F as w,j as C,f as k,e as r,d as c,g as T,t as f,b as j,w as u,z as p}from"./index-fb5eac52.js";import{G as D}from"./glide.esm-676e99f8.js";import{_ as F}from"./TheForm_Login-11deadc5.js";const O={name:"TheResultado_Carro",props:{set_tipo_veiculo:String},data(){return{splideOptions:{type:"carousel",perPage:1},array_filtros:[],results:!1,loader:!0,notFound:!1,arrayTitles:[],ordenacao_type:"0",url:"",queryString:"",total_pages:0,current_page:1}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showCarroDetalhes(i){const l={id:i};this.$router.push({path:"/verveiculo",query:l})},upPage(){window.scrollTo(0,0)},goverveiculo(i){this.$emit("goverveiculoNow",i)},async listData(i){this.$store.state.resultado=await i},async applyFiltro(i,l){this.notFound=!1,this.loader=!0;const _={};this.$store.state.resultado=[],this.array_filtros.forEach(e=>{_[e.chave]=e.valor}),_[i]=l,this.array_filtros=Object.keys(_).map(e=>({chave:e,valor:_[e]}));const v={};this.array_filtros.forEach(e=>{v[e.chave]=e.valor}),this.arrayTitles=[];var h="Comprar ",o="lista-";Object.values(v).forEach(e=>{e=="1"?e="Novo":e=="2"?e="Usado":e==0&&(e="Todos"),this.arrayTitles.push(e),h+=e+" ",o+=e+"-"}),document.title=h;const y=`/resultados/#/${o.toLowerCase()}`;this.$router.replace(y),this.queryString=Object.keys(v).map(e=>`${e}=${v[e]}`).join("&"),this.url=`api/anuncios/listar_anuncios?${this.queryString}&destaque_busca=1&status_publicacao=2`,this.$store.state.resultado=await $(this.url),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0?this.notFound=!0:this.notFound=!1)},async fetchAnuncios(){let i=[];for(let l=1;l<=this.current_page;l++){const _=await $(`api/anuncios/listar_anuncios/${this.ordenacao_type}?${this.queryString}&destaque_busca=1&status_publicacao=2&page=${l}`);i=[...i,..._]}this.$store.state.resultado=i},async verMaisCarros(){this.current_page<this.total_pages&&(this.current_page+=1,await this.fetchAnuncios())},async getOrdenation(i){this.ordenacao_type=i,await this.fetchAnuncios()},verTodos(){this.limparFiltro()},async limparFiltro(){this.$store.state.resultado=[],this.loader=!0,this.notFound=!1,this.array_filtros=[],this.$store.state.resultado=await $("api/anuncios/listar_anuncios?destaque_busca=1&status_publicacao=2");const i=this.$store.state.resultado,l=i[0].current_page,_=i[0].total_pages;this.current_page=l,this.total_pages=_,this.$store.state.results=!0,this.filtro="",this.textMarca="",this.textModelo="",this.$store.state.todosFiltros=[],this.queryString="",this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0&&(this.notFound=!0));const v="/resultados";this.$router.replace(v)}},async mounted(){this.$store.state.resultado=[];const i=Object.keys(this.$route.query);let l="Comprar ";this.queryString="",i.forEach((e,s)=>{let m=this.$route.query[e];l+=`${m} `,s===0?this.queryString+=`${e}=${m}`:this.queryString+=`&${e}=${m}`}),document.title=l;const _=window.location.href,v=window.location.origin;_.replace(v,"")=="/resultados"?this.$store.state.resultado=await $(`api/anuncios/listar_anuncios?${this.queryString}&destaque_busca=1&status_publicacao=2&situacao_veiculo=2&tipo_veiculo=Carro`):this.$store.state.resultado=await $(`api/anuncios/listar_anuncios?${this.queryString}&destaque_busca=1&status_publicacao=2`),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0?this.notFound=!0:this.notFound=!1);const o=this.$store.state.resultado,d=o[0].current_page,y=o[0].total_pages;this.current_page=d,this.total_pages=y},updated(){this.$nextTick(()=>{this.$store.state.resultado&&Object.values(this.$refs).forEach(i=>{i.forEach(l=>{new D(l,{type:"carousel",perView:1,gap:0,peek:{before:0,after:0},hoverpause:!1,pagination:{el:".glide__pagination"}}).mount()})})})}},S={class:"content"},E={class:"pt-3 pe-4 pb-3 d-flex flex-row align-items-center justify-content-between"},N={class:"py-2 px-2",style:{"font-size":"13px"}},R={key:0},z={key:0},P={key:1},A={key:1},M={key:2},V={class:"ordenacao"},B=t("i",{class:"fa fa-sort fa-md"},null,-1),I=t("option",{value:"0",selected:""},"MAIS RELEVANTES",-1),U=t("option",{value:"1"},"MENOR PREÇO",-1),L=t("option",{value:"2"},"MAIOR PREÇO",-1),G=t("option",{value:"3"},"ANO MAIS NOVO",-1),H=[I,U,L,G],J={hidden:""},K={class:"px-2 py-2"},Q={key:0,style:{height:"60vh"},class:"text-center"},W=t("div",null,[t("img",{class:"caixa",src:F,alt:"",style:{width:"50px",height:"50px",background:"none !important"}})],-1),X=t("span",{style:{"font-size":"12px"}}," Carregando... ",-1),Y=[W,X],Z={class:"pt-5 px-3"},tt={class:"col-lg-6 mx-auto rounded-3 text-center py-4",style:{"background-color":"rgba(82, 82, 82, 0.2)"}},st=t("h4",null,"Nenhum resultado!",-1),et={class:"m-0"},ot={class:"row p-0 m-0"},at={class:"col-lg-12 col-md-12 p-0 m-0"},it={class:"row p-0 m-0"},lt={class:"px-2 container-completo"},nt={class:"row p-0 m-0"},rt={class:"col-5 col-md-12 col-lg-12 m-0 p-0"},ct={class:"imagem-container2"},dt=["alt"],_t={class:"imagem-container2"},ut=["alt"],ht={class:"imagem-container2"},gt=["alt"],pt={class:"imagem-container2"},vt=["alt"],mt={class:"imagem-container2"},ft=["alt"],yt={class:"imagem-container2"},$t=["alt"],kt={class:"imagem-container2"},wt=["alt"],Ct={class:"imagem-container2"},bt=["alt"],xt={class:"imagem-container2"},qt=["alt"],Tt={class:"imagem-container2"},jt=["alt"],Dt={class:"glide__track","data-glide-el":"track"},Ft={class:"glide__slides"},Ot={class:"glide__slide"},St={class:"imagem-container2"},Et=["alt"],Nt={class:"glide__slide"},Rt={class:"imagem-container2"},zt=["alt"],Pt={class:"glide__slide"},At={class:"imagem-container2"},Mt=["alt"],Vt=t("div",{class:"glide__arrows","data-glide-el":"controls"},[t("div",{class:"btn glide__arrow glide__arrow--left btn-voltar","data-glide-dir":"<"},[t("span",null," > ")]),t("div",{class:"btn glide__arrow glide__arrow--right btn-avancar","data-glide-dir":">"},[t("span",null," > ")])],-1),Bt={class:"col-7 col-md-12 col-lg-12 titles p-0 m-0"},It=["onClick"],Ut={class:"px-2 pt-2 position-relative"},Lt={style:{opacity:"0.5","text-transform":"uppercase"}},Gt={class:"pt-2 pb-1 position-relative"},Ht={class:"py-1 ps-2",style:{color:"#000000"}},Jt={class:"row p-2 m-0"},Kt={class:"col-6 p-0 m-0",style:{"font-size":"12px",opacity:"0.7"}},Qt={class:"col-6 p-0 m-0 text-end",style:{"font-size":"12px",opacity:"0.7"}},Wt=t("div",null,null,-1),Xt={class:"pagination"},Yt=t("div",{class:"bg-dark",style:{"border-radius":"100px",height:"55px",width:"55px","padding-top":"5px"}},[t("i",{class:"fas fa-filter",style:{"font-size":"12px"}}),k(),t("br"),t("div",{style:{"font-size":"11px"}},"Filtrar")],-1),Zt=[Yt];function ts(i,l,_,v,h,o){const d=b("splide-slide"),y=b("splide"),e=q("lazy");return a(),n("main",S,[t("div",E,[t("div",N,[(a(!0),n(w,null,C(h.array_filtros,(s,m)=>(a(),n("span",{class:"me-2 p-1 px-2 rounded-3 me-2",style:{"background-color":"rgba(82, 82, 82, 0.2)",color:"#000","font-weight":"600"},key:m},[s.chave=="situacao_veiculo"?(a(),n("span",R,[s.valor=="1"?(a(),n("span",z," Novo ")):r("",!0),s.valor=="2"?(a(),n("span",P," Usado ")):r("",!0)])):s.chave=="opcionais_id"?(a(),n("span",A," Itens Opcionais ")):(a(),n("span",M,f(s.valor),1))]))),128))]),t("div",V,[B,t("select",{class:"ordenacao_select",onChange:l[0]||(l[0]=s=>o.getOrdenation(s.target.value)),id:"ordenacao_select"},H,32)])]),t("div",J,[t("div",K,[t("h4",null,[k(" Resultados "),(a(!0),n(w,null,C(i.$store.state.todosFiltros,(s,m)=>(a(),n("span",{class:"me-2",key:m}," oa "+f(s.valor)+", ",1))),128)),k(" | Regionalmotors ")])])]),h.loader?(a(),n("div",Q,Y)):r("",!0),c(t("div",Z,[t("div",tt,[st,t("p",et,[k(" Click para "),t("span",{style:{color:"crimson",cursor:"pointer"},onClick:l[1]||(l[1]=(...s)=>o.verTodos&&o.verTodos(...s))}," ver todos ")])])],512),[[T,h.notFound]]),t("div",ot,[t("div",at,[t("div",null,[t("div",it,[(a(!0),n(w,null,C(i.$store.state.resultado,(s,m)=>(a(),n("div",{class:"col-lg-3 col-md-6 p-0 m-0 mb-3",key:m,style:{cursor:"pointer"}},[t("div",lt,[t("div",nt,[t("div",rt,[j(y,{options:h.splideOptions,class:"bg-dark"},{default:u(()=>[s.foto1?(a(),p(d,{key:0,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",ct,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,dt),[[e,`${s.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto2?(a(),p(d,{key:1,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",_t,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,ut),[[e,`${s.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto3?(a(),p(d,{key:2,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",ht,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,gt),[[e,`${s.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto4?(a(),p(d,{key:3,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",pt,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,vt),[[e,`${s.foto4}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto5?(a(),p(d,{key:4,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",mt,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,ft),[[e,`${s.foto5}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto6?(a(),p(d,{key:5,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",yt,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,$t),[[e,`${s.foto6}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto7?(a(),p(d,{key:6,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",kt,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,wt),[[e,`${s.foto7}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto8?(a(),p(d,{key:7,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",Ct,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,bt),[[e,`${s.foto8}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto9?(a(),p(d,{key:8,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",xt,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,qt),[[e,`${s.foto9}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0),s.foto10?(a(),p(d,{key:9,onClick:g=>o.goverveiculo(s.id)},{default:u(()=>[t("div",null,[t("div",Tt,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,jt),[[e,`${s.foto10}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):r("",!0)]),_:2},1032,["options"]),t("div",{ref_for:!0,ref:"glide",class:"glide",hidden:""},[t("div",Dt,[t("ul",Ft,[t("li",Ot,[t("div",null,[t("div",St,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,Et),[[e,`${s.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),t("li",Nt,[t("div",null,[t("div",Rt,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,zt),[[e,`${s.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),t("li",Pt,[t("div",null,[t("div",At,[c(t("img",{alt:s.nome_marca,class:"img-fluid"},null,8,Mt),[[e,`${s.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])])])]),Vt],512)]),t("div",Bt,[t("div",{class:"resultados-titulos",onClick:g=>o.showCarroDetalhes(s.id)},[t("div",Ut,[t("h5",null,f(s.nome_marca)+" "+f(s.nome_modelo),1),t("div",Lt,[t("p",null,f(s.combustivel),1)])]),t("div",null,[t("div",Gt,[t("div",null,[t("h5",Ht," R$ "+f(s.valor_preco),1)]),t("div",null,[t("div",Jt,[t("div",Kt,f(s.ano_modelo),1),t("div",Qt,f(s.km)+" km ",1)])])])]),Wt],8,It)])])])]))),128))])])])]),t("div",Xt,[h.current_page<h.total_pages?(a(),n("button",{key:0,onClick:l[2]||(l[2]=(...s)=>o.verMaisCarros&&o.verMaisCarros(...s)),class:"btn-pagination"}," Ver mais carros ")):r("",!0)]),t("div",{style:{position:"fixed",right:"15px",bottom:"25px","z-index":"99"},class:"text-center d-lg-none d-md-none",onClick:l[3]||(l[3]=(...s)=>o.show_menu_lateral&&o.show_menu_lateral(...s))},Zt)])}const as=x(O,[["render",ts]]);export{as as T};
