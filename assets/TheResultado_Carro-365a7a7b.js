import{f as $}from"./loader-31d0dd29.js";import{G as b}from"./glide.esm-676e99f8.js";import{_ as T,r as C,j as q,o as e,c,a as s,F as w,i as x,d as k,f as d,e as i,g as j,t as f,b as D,w as u,k as g}from"./index-c0b03364.js";import{_ as F}from"./TheForm_Login-16943e4c.js";const z={name:"TheResultado_Carro",props:{set_tipo_veiculo:String},data(){return{splideOptions:{type:"carousel",perPage:1},array_filtros:[],results:!1,loader:!0,notFound:!1,arrayTitles:[]}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showCarroDetalhes(l){const n={id:l};this.$router.push({path:"/verveiculo",query:n})},upPage(){window.scrollTo(0,0)},goverveiculo(l){this.$emit("goverveiculoNow",l)},async listData(l){this.$store.state.resultado=await l,console.log(this.$store.state.resultado)},async applyFiltro(l,n){this.notFound=!1,this.loader=!0;const h={};this.$store.state.resultado=[],this.array_filtros.forEach(o=>{h[o.chave]=o.valor}),h[l]=n,this.array_filtros=Object.keys(h).map(o=>({chave:o,valor:h[o]}));const p={};this.array_filtros.forEach(o=>{p[o.chave]=o.valor}),this.arrayTitles=[];var m="Comprar ";Object.values(p).forEach(o=>{console.log(o),o==1?o="Novo":o==2&&(o="Usado"),this.arrayTitles.push(o),m+=o+" "}),document.title=m;const _=`api/anuncios/listar_anuncios?${Object.keys(p).map(o=>`${o}=${p[o]}`).join("&")}&destaque_busca=1&status_publicacao=2`;this.$store.state.resultado=await $(_),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0?this.notFound=!0:this.notFound=!1)},verTodos(){this.limparFiltro()},async limparFiltro(){this.$store.state.resultado=[],this.loader=!0,this.notFound=!1,this.array_filtros=[],this.$store.state.resultado=await $("api/anuncios/listar_anuncios?destaque_busca=1&status_publicacao=2"),this.$store.state.results=!0,this.filtro="",this.textMarca="",this.textModelo="",this.$store.state.todosFiltros=[],this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0&&(this.notFound=!0))}},async mounted(){this.$store.state.resultado=[];const l=Object.keys(this.$route.query);console.log(l);let n="Comprar ",h="";l.forEach((p,m)=>{let a=this.$route.query[p];n+=`${a} `,m===0?h+=`${p}=${a}`:h+=`&${p}=${a}`}),document.title=n,this.$store.state.resultado=await $(`api/anuncios/listar_anuncios?${h}&destaque_busca=1&status_publicacao=2`),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0?this.notFound=!0:this.notFound=!1)},updated(){this.$nextTick(()=>{this.$store.state.resultado&&Object.values(this.$refs).forEach(l=>{l.forEach(n=>{new b(n,{type:"carousel",perView:1,gap:0,peek:{before:0,after:0},hoverpause:!1,pagination:{el:".glide__pagination"}}).mount()})})})}},N={class:"content"},O={class:"pt-2 ps-2 pb-3"},E={class:"py-2 pt-3 px-2",style:{"font-size":"13px"}},R={key:0},S={key:0},V={key:1},B={key:1},P={key:2},U={hidden:""},A={class:"px-2 py-2"},G={key:0,style:{height:"60vh"},class:"text-center"},M=s("div",null,[s("img",{class:"caixa",src:F,alt:"",style:{width:"50px",height:"50px",background:"none !important"}})],-1),I=s("span",{style:{"font-size":"12px"}}," Carregando... ",-1),L=[M,I],H={class:"pt-5 px-3"},J={class:"col-lg-6 mx-auto rounded-3 text-center py-4",style:{"background-color":"rgba(82, 82, 82, 0.2)"}},K=s("h4",null,"Nenhum resultado!",-1),Q={class:"m-0"},W={class:"row p-0 m-0"},X={class:"col-lg-8 col-md-8 p-0 m-0"},Y={class:"row p-0 m-0"},Z={class:"px-2 container-completo"},ss={class:"row p-0 m-0"},ts={class:"col-5 col-md-12 col-lg-12 m-0 p-0"},es={class:"imagem-container2"},os=["alt"],as={class:"imagem-container2"},ls=["alt"],is={class:"imagem-container2"},ns=["alt"],rs={class:"imagem-container2"},cs=["alt"],ds={class:"imagem-container2"},_s=["alt"],us={class:"imagem-container2"},hs=["alt"],vs={class:"imagem-container2"},gs=["alt"],ps={class:"imagem-container2"},ms=["alt"],fs={class:"imagem-container2"},ys=["alt"],ks={class:"imagem-container2"},$s=["alt"],ws={class:"glide__track","data-glide-el":"track"},xs={class:"glide__slides"},Cs={class:"glide__slide"},bs={class:"imagem-container2"},Ts=["alt"],qs={class:"glide__slide"},js={class:"imagem-container2"},Ds=["alt"],Fs={class:"glide__slide"},zs={class:"imagem-container2"},Ns=["alt"],Os=s("div",{class:"glide__arrows","data-glide-el":"controls"},[s("div",{class:"btn glide__arrow glide__arrow--left btn-voltar","data-glide-dir":"<"},[s("span",null," > ")]),s("div",{class:"btn glide__arrow glide__arrow--right btn-avancar","data-glide-dir":">"},[s("span",null," > ")])],-1),Es={class:"col-7 col-md-12 col-lg-12 titles p-0 m-0"},Rs=["onClick"],Ss={class:"px-2 pt-2 position-relative"},Vs={style:{opacity:"0.5","text-transform":"uppercase"}},Bs={class:"pt-2 pb-1 position-relative"},Ps={class:"py-1 ps-2",style:{color:"#000000"}},Us={class:"row p-2 m-0"},As={class:"col-6 p-0 m-0",style:{"font-size":"12px",opacity:"0.7"}},Gs={class:"col-6 p-0 m-0 text-end",style:{"font-size":"12px",opacity:"0.7"}},Ms=s("div",null,null,-1),Is=s("div",{class:"col-lg-4 col-md-4"},[s("div",{class:"invisible"},"Ads")],-1),Ls=s("div",{class:"bg-dark",style:{"border-radius":"100px",height:"55px",width:"55px","padding-top":"5px"}},[s("i",{class:"fas fa-filter",style:{"font-size":"12px"}}),k(),s("br"),s("div",{style:{"font-size":"11px"}},"Filtrar")],-1),Hs=[Ls];function Js(l,n,h,p,m,a){const _=C("splide-slide"),o=C("splide"),r=q("lazy");return e(),c("main",N,[s("div",O,[s("div",E,[(e(!0),c(w,null,x(m.array_filtros,(t,y)=>(e(),c("span",{class:"me-2 p-1 px-2 rounded-3 me-2",style:{"background-color":"rgba(82, 82, 82, 0.2)",color:"#000","font-weight":"600"},key:y},[t.chave=="situacao_veiculo"?(e(),c("span",R,[t.valor=="1"?(e(),c("span",S," Novo ")):d("",!0),t.valor=="2"?(e(),c("span",V," Usado ")):d("",!0)])):t.chave=="opcionais_id"?(e(),c("span",B," Itens Opcionais ")):(e(),c("span",P,f(t.valor),1))]))),128))])]),s("div",U,[s("div",A,[s("h4",null,[k(" Resultados "),(e(!0),c(w,null,x(l.$store.state.todosFiltros,(t,y)=>(e(),c("span",{class:"me-2",key:y}," oa "+f(t.valor)+", ",1))),128)),k(" | Regionalmotors ")])])]),m.loader?(e(),c("div",G,L)):d("",!0),i(s("div",H,[s("div",J,[K,s("p",Q,[k(" Click para "),s("span",{style:{color:"crimson",cursor:"pointer"},onClick:n[0]||(n[0]=(...t)=>a.verTodos&&a.verTodos(...t))}," ver todos ")])])],512),[[j,m.notFound]]),s("div",W,[s("div",X,[s("div",null,[s("div",Y,[(e(!0),c(w,null,x(l.$store.state.resultado,(t,y)=>(e(),c("div",{class:"col-lg-4 col-md-6 p-0 m-0 mb-3",key:y,style:{cursor:"pointer"}},[s("div",Z,[s("div",ss,[s("div",ts,[D(o,{options:m.splideOptions,class:"bg-dark"},{default:u(()=>[t.foto1?(e(),g(_,{key:0,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",es,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,os),[[r,`${t.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto2?(e(),g(_,{key:1,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",as,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,ls),[[r,`${t.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto3?(e(),g(_,{key:2,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",is,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,ns),[[r,`${t.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto4?(e(),g(_,{key:3,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",rs,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,cs),[[r,`${t.foto4}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto5?(e(),g(_,{key:4,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",ds,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,_s),[[r,`${t.foto5}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto6?(e(),g(_,{key:5,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",us,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,hs),[[r,`${t.foto6}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto7?(e(),g(_,{key:6,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",vs,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,gs),[[r,`${t.foto7}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto8?(e(),g(_,{key:7,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",ps,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,ms),[[r,`${t.foto8}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto9?(e(),g(_,{key:8,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",fs,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,ys),[[r,`${t.foto9}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0),t.foto10?(e(),g(_,{key:9,onClick:v=>a.goverveiculo(t.id)},{default:u(()=>[s("div",null,[s("div",ks,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,$s),[[r,`${t.foto10}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):d("",!0)]),_:2},1032,["options"]),s("div",{ref_for:!0,ref:"glide",class:"glide",hidden:""},[s("div",ws,[s("ul",xs,[s("li",Cs,[s("div",null,[s("div",bs,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,Ts),[[r,`${t.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),s("li",qs,[s("div",null,[s("div",js,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,Ds),[[r,`${t.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),s("li",Fs,[s("div",null,[s("div",zs,[i(s("img",{alt:t.nome_marca,class:"img-fluid"},null,8,Ns),[[r,`${t.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])])])]),Os],512)]),s("div",Es,[s("div",{class:"resultados-titulos",onClick:v=>a.showCarroDetalhes(t.id)},[s("div",Ss,[s("h5",null,f(t.nome_marca)+" "+f(t.nome_modelo),1),s("div",Vs,[s("p",null,f(t.combustivel),1)])]),s("div",null,[s("div",Bs,[s("div",null,[s("h5",Ps,"R$ "+f(t.valor_preco),1)]),s("div",null,[s("div",Us,[s("div",As,f(t.ano_modelo),1),s("div",Gs,f(t.km)+" km",1)])])])]),Ms],8,Rs)])])])]))),128))])])]),Is]),s("div",{style:{position:"fixed",right:"15px",bottom:"25px","z-index":"99"},class:"text-center d-lg-none d-md-none",onClick:n[1]||(n[1]=(...t)=>a.show_menu_lateral&&a.show_menu_lateral(...t))},Hs)])}const Ys=T(z,[["render",Js]]);export{Ys as T};
