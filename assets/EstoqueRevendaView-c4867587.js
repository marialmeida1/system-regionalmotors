import{T as L}from"./TheNavTop-73d7be93.js";import{_ as A,p as y,s as O,u as j,x as S,y as D,o as n,c,a as t,F as b,j as k,d as u,v as w,q as F,t as m,e as h,A as P,r as $,m as R,f as q,g as N,b as M,w as v,z as g}from"./index-c0670658.js";import{G as I}from"./glide.esm-676e99f8.js";import{_ as V}from"./TheForm_Login-a915ebcd.js";import{l as U}from"./loader-fff71581.js";import"./whatsapp-8361b3fb.js";const z={name:"TheNavLateral",data(){return{card_resultado:"",tipo_veiculo:"",novo:"",semi_novo:"",selectedVehicle:"",Api_CategOpcionais:[],selecionados:[],dropdownState:{},array_filtros:[],filterMarcas:"",filterModelo:"",showMarcas:!1,showModelos:!1,showEstados:!1,textMarca:"",textModelo:"",textEstado:"",tipo_de_veiculo:"",marcas:[],modelos:[],regioes:[],cidades:[],precoMax:"",precoMin:"",anoMax:"",anoMin:"",errorAno:"",errorPreco:"",errorKm:"",kmMax:"",kmMin:"",valorTipoVeiculo:"1",selectedText:""}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},applyFiltro(i,e){this.$emit("transmiteData",i,e)},execAllLateral(){this.show_menu_lateral(),this.$emit("limparFiltro"),this.anoMax="",this.anoMin="",this.precoMax="",this.precoMin="",this.kmMax="",this.kmMin="",document.getElementById("situacao_veiculo").value="",document.getElementById("tipo_veiculo").value="",document.getElementById("marca").value="",document.getElementById("modelo").value="",document.getElementById("estado").value="",document.getElementById("cidade").value="",this.errorAno="",this.errorKm="",this.errorPreco=""},async filtrarMarca(i,e){const d=e.target.selectedIndex;this.selectedText=e.target.options[d].text,this.applyFiltro(i,this.selectedText),this.marcas=await y(`api/marcas/listar_marcas?tipo_veiculo=${this.selectedText}`)},async filtrarModelo(i,e){this.applyFiltro(i,e),this.modelos=await y(`api/modelos/listar_modelos?nome_marca=${e}`)},async filtrarCidade(i,e){this.applyFiltro(i,e),this.cidades=await y(`api/cidade/listar_cidades?estado=${e}`)},blurPreco(){if(this.errorPreco="",this.precoMax<this.precoMin){this.errorPreco="O valor máximo deve ser maior que o mínimo.";return}this.precoMin==""&&(this.precoMin="0"),this.applyFiltro("preco_min",this.precoMin),this.applyFiltro("preco_max",this.precoMax)},limparInputPreco2(){this.precoMax=""},blurAno(){if(this.errorAno="",this.anoMax<this.anoMin){this.errorAno="O valor máximo deve ser maior que o mínimo.";return}this.anoMin==""&&(this.anoMin="0"),this.applyFiltro("ano_modelo_min",this.anoMin),this.applyFiltro("ano_modelo_max",this.anoMax)},limparInputAno2(){this.anoMax=""},blurKm(){if(this.erroKm="",this.kmMax<this.kmMin){this.errorKm="O valor máximo deve ser maior que o mínimo.";return}this.kmMin==""&&(this.kmMin="0"),this.applyFiltro("quilometragem_min",this.kmMin),this.applyFiltro("quilometragem_max",this.kmMax)},limparInputKm2(){this.kmMax=""},toggleDropdown(i){this.$data.dropdownState[i]=!this.$data.dropdownState[i],this.$forceUpdate()},isDropdownOpen(i){return this.$data.dropdownState[i]||!1},filterOpcionais(i){return this.Api_Opcionais.filter(e=>e.categoria_opcional_id==i)},exibirEstado(){this.applyFiltro("opcionais_id",this.selecionados)}},async mounted(){const i=window.location.href,e=window.location.origin;i.replace(e,"").split("/")[3]=="estoque"&&(document.getElementById("tipo_veiculo").value="1",document.getElementById("situacao_veiculo").value="2")},async created(){this.$store.state.tipo_veiculo=await O(),this.$store.state.estado=await j(),this.Api_CategOpcionais=await S(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais,this.Api_Opcionais=await D(),this.marcas=await y("api/marcas/listar_marcas")}},B={class:"bg-dar bg-whit position-relative"},K={style:{height:"88vh",overflow:"auto"},class:"meu-menu-lateral px-2 pb-1"},H={class:"menu-lateral-btn-fechar d-flex justify-content-end"},G=t("i",{class:"fas fa-arrow-left"},null,-1),Q=[G],J=t("div",{class:"p-2 pt-4 pb-4 fw-bolder"},[t("h5",null,"Filtros")],-1),W={class:"px-2 pb-2"},X=t("div",{class:"title__filter pb-2"},"Situação do veículo",-1),Y={class:"pesquisar pesquisar-lateral p-2"},Z=t("option",{value:"",selected:"",disabled:""},"Situação do veículo",-1),tt=t("option",{value:""},"Todos",-1),et=t("option",{value:"1"},"Novo",-1),ot=t("option",{value:"2"},"Usado",-1),st=[Z,tt,et,ot],it=t("hr",null,null,-1),at={class:"px-2 pb-2"},lt=t("div",{class:"title__filter pb-2"},"Tipo de veiculo",-1),nt={class:"pesquisar pesquisar-lateral p-2"},rt=t("option",{value:"",selected:"",disabled:""},"Veículo",-1),ct=["value"],dt=t("hr",null,null,-1),ut={class:"px-2 pb-2"},_t=t("div",{class:"title__filter pb-2"},"Marca",-1),pt={class:"pesquisar pesquisar-lateral p-2"},ht=t("option",{value:""},"Marca",-1),mt=["value"],vt=t("hr",null,null,-1),gt={class:"px-2 pb-2"},ft=t("div",{class:"title__filter pb-2"},"Modelo",-1),yt={class:"pesquisar pesquisar-lateral p-2"},xt=t("option",{value:""},"Modelo",-1),wt=["value"],$t=t("hr",null,null,-1),bt={class:"px-2 pb-3 pt-1"},kt=t("div",{class:"title__filter pb-2"},"Preço",-1),Mt={class:"row"},qt={class:"col-6 pb-1 px-1 mt-2"},Ct={class:"pesquisar pesquisar-lateral"},Tt=t("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 20.000",-1),Ft={class:"col-6 pb-1 px-1 mt-2"},At={key:0,class:"error-message"},Nt=t("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 50.000 ",-1),Et=t("hr",null,null,-1),Lt={class:"px-2 pb-3 pt-1"},Ot=t("div",{class:"title__filter pb-2"},"Ano",-1),jt={class:"row"},St={class:"col-6 pb-1 px-1 mt-2"},Dt={class:"pesquisar pesquisar-lateral"},Pt=t("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 2000",-1),Rt={class:"col-6 pb-1 px-1 mt-2"},It={key:0,class:"error-message"},Vt=t("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 2024 ",-1),Ut=t("hr",null,null,-1),zt={class:"px-2 pb-3 pt-1"},Bt=t("div",{class:"title__filter pb-2"},"Quilometragem",-1),Kt={class:"row"},Ht={class:"col-6 pb-1 px-1 mt-2"},Gt={class:"pesquisar pesquisar-lateral"},Qt=t("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 0",-1),Jt={class:"col-6 pb-1 px-1 mt-2"},Wt={key:0,class:"error-message"},Xt=t("span",{style:{"font-size":"12px","padding-left":"4px",opacity:"0.4"}},"ex: 1000 ",-1),Yt=t("hr",null,null,-1),Zt={class:"px-2 text-center position-absolute pt-3 bg-white",style:{left:"0",bottom:"0",width:"250px"}};function te(i,e,d,p,l,a){return n(),c("aside",B,[t("div",K,[t("div",H,[t("div",{class:"pt-3 pe-3",onClick:e[0]||(e[0]=(...s)=>a.show_menu_lateral&&a.show_menu_lateral(...s)),style:{cursor:"pointer"}},Q)]),J,t("div",W,[X,t("div",Y,[t("select",{onChange:e[1]||(e[1]=s=>a.applyFiltro("situacao_veiculo",s.target.value)),class:"filter-select",id:"situacao_veiculo"},st,32)])]),it,t("div",at,[lt,t("div",nt,[t("select",{onChange:e[2]||(e[2]=s=>a.filtrarMarca("tipo_veiculo",s)),class:"filter-select",id:"tipo_veiculo"},[rt,(n(!0),c(b,null,k(i.$store.state.tipo_veiculo,s=>(n(),c("option",{value:s.id},m(s.tipo_veiculo),9,ct))),256))],32)])]),dt,t("div",ut,[_t,t("div",pt,[t("select",{onChange:e[3]||(e[3]=s=>a.filtrarModelo("nome_marca",s.target.value)),class:"filter-select",id:"marca"},[ht,(n(!0),c(b,null,k(l.marcas,s=>(n(),c("option",{value:s.nome_marca},m(s.nome_marca),9,mt))),256))],32)])]),vt,t("div",gt,[ft,t("div",yt,[t("select",{onChange:e[4]||(e[4]=s=>a.applyFiltro("nome_modelo",s.target.value)),class:"filter-select",id:"modelo"},[xt,(n(!0),c(b,null,k(l.modelos,s=>(n(),c("option",{value:s.nome_modelo},m(s.nome_modelo),9,wt))),256))],32)])]),$t,t("div",bt,[kt,t("div",Mt,[t("div",qt,[t("div",Ct,[u(t("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:e[5]||(e[5]=(...s)=>a.limparInputPreco2&&a.limparInputPreco2(...s)),"onUpdate:modelValue":e[6]||(e[6]=s=>l.precoMin=s)},null,512),[[w,l.precoMin]])]),Tt]),t("div",Ft,[t("div",{class:F(["pesquisar pesquisar-lateral",{"input-error":l.errorPreco}])},[u(t("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":e[7]||(e[7]=s=>l.precoMax=s),onBlur:e[8]||(e[8]=(...s)=>a.blurPreco&&a.blurPreco(...s))},null,544),[[w,l.precoMax]])],2),l.errorPreco?(n(),c("div",At,m(l.errorPreco),1)):h("",!0),Nt])])]),Et,t("div",Lt,[Ot,t("div",jt,[t("div",St,[t("div",Dt,[u(t("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:e[9]||(e[9]=(...s)=>a.limparInputAno2&&a.limparInputAno2(...s)),"onUpdate:modelValue":e[10]||(e[10]=s=>l.anoMin=s)},null,512),[[w,l.anoMin]])]),Pt]),t("div",Rt,[t("div",{class:F(["pesquisar pesquisar-lateral",{"input-error":l.errorAno}])},[u(t("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":e[11]||(e[11]=s=>l.anoMax=s),onBlur:e[12]||(e[12]=(...s)=>a.blurAno&&a.blurAno(...s))},null,544),[[w,l.anoMax]])],2),l.errorAno?(n(),c("div",It,m(l.errorAno),1)):h("",!0),Vt])])]),Ut,t("div",zt,[Bt,t("div",Kt,[t("div",Ht,[t("div",Gt,[u(t("input",{type:"text",placeholder:"de",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},onClick:e[13]||(e[13]=(...s)=>a.limparInputKm2&&a.limparInputKm2(...s)),"onUpdate:modelValue":e[14]||(e[14]=s=>l.kmMin=s)},null,512),[[w,l.kmMin]])]),Qt]),t("div",Jt,[t("div",{class:F(["pesquisar pesquisar-lateral",{"input-error":l.errorKm}])},[u(t("input",{type:"text",placeholder:"até",class:"form-control filter-input",style:{background:"none",border:"none",color:"#000 !important"},"onUpdate:modelValue":e[15]||(e[15]=s=>l.kmMax=s),onBlur:e[16]||(e[16]=(...s)=>a.blurKm&&a.blurKm(...s))},null,544),[[w,l.kmMax]])],2),l.errorKm?(n(),c("div",Wt,m(l.errorKm),1)):h("",!0),Xt])])]),Yt]),t("div",Zt,[t("button",{class:"col-11 pb-1 px-2 btn border border-1 border-dark",style:{color:"#000",cursor:"pointer"},onClick:e[17]||(e[17]=(...s)=>a.execAllLateral&&a.execAllLateral(...s))}," Limpar Filtros ")])])}const ee=A(z,[["render",te]]);const oe={name:"TheResultado_Carro",props:{set_tipo_veiculo:String},data(){return{splideOptions:{type:"carousel",perPage:1},array_filtros:[],results:!1,loader:!0,notFound:!1,arrayTitles:[],ordenacao_type:"0",url:"",queryString:"",infos:null,total_pages:0,current_page:1}},methods:{show_menu_lateral(){this.$emit("show_menu_lateral")},showCarroDetalhes(i){const e={id:i},d=window.location.href,l=new URL(d).pathname.split("/")[2];this.$router.push({path:`/loja/${l}/verveiculorevenda`,query:e})},upPage(){window.scrollTo(0,0)},goverveiculo(i){this.$emit("goverveiculoNow",i)},async listData(i){this.$store.state.resultado=await i},async applyFiltro(i,e){this.notFound=!1,this.loader=!0;const d={};this.$store.state.resultado=[],this.array_filtros.forEach(r=>{d[r.chave]=r.valor}),d[i]=e,this.array_filtros=Object.keys(d).map(r=>({chave:r,valor:d[r]}));const p={};this.array_filtros.forEach(r=>{p[r.chave]=r.valor}),this.arrayTitles=[];var l="Comprar ",a="";Object.values(p).forEach(r=>{r==1?r="Novo":r==2&&(r="Usado"),this.arrayTitles.push(r),l+=r+" ",a+=r+"%"}),document.title=l;const s=a.toLowerCase(),x=window.location.href,f=`/loja/${new URL(x).pathname.split("/")[2]}/estoque/#/${s}`;this.$router.replace(f),this.queryString=Object.keys(p).map(r=>`${r}=${p[r]}`).join("&"),this.url=`api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2`,this.$store.state.resultado=await y(this.url),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0?this.notFound=!0:this.notFound=!1)},async fetchAnuncios(){let i=[];for(let e=1;e<=this.current_page;e++){const d=await y(`api/anuncios/listar_anuncios/${this.ordenacao_type}?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2&page=${this.current_page}`);i=[...i,...d]}this.$store.state.resultado=i},async getOrdenation(i){this.ordenacao_type=i,await this.fetchAnuncios()},verTodos(){this.limparFiltro()},async verMaisCarros(){this.current_page<this.total_pages&&(this.current_page+=1,await this.fetchAnuncios())},async limparFiltro(){this.$store.state.resultado=[],this.loader=!0,this.notFound=!1,this.array_filtros=[],this.$store.state.resultado=await y(`api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&destaque_busca=1&status_publicacao=2`);const i=this.$store.state.resultado,e=i[0].current_page,d=i[0].total_pages;this.current_page=e,this.total_pages=d,this.$store.state.results=!0,this.filtro="",this.textMarca="",this.textModelo="",this.$store.state.todosFiltros=[],this.queryString="",this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0&&(this.notFound=!0));const p=window.location.href,s=`/loja/${new URL(p).pathname.split("/")[2]}/estoque/`;this.$router.replace(s)},async fetchAnunciante(){try{const i=window.location.href,d=new URL(i).pathname.split("/")[2],p=await P(d);this.infos=p.data}catch(i){console.error("Erro ao buscar dados do anunciante:",i)}}},async mounted(){await this.fetchAnunciante(),this.$store.state.resultado=[];const i=Object.keys(this.$route.query);let e="Comprar ";this.queryString="",i.forEach((C,E)=>{let T=this.$route.query[C];e+=`${T} `,E===0?this.queryString+=`${C}=${T}`:this.queryString+=`&${C}=${T}`}),document.title=e;const d=window.location.href,p=window.location.origin;d.replace(p,"").split("/")[3]=="estoque"?this.$store.state.resultado=await y(`api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2&situacao_veiculo=2&tipo_veiculo=Carro`):this.$store.state.resultado=await y(`api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2`),this.$store.state.resultado&&(this.results=!0,this.loader=!1,this.$store.state.resultado.length==0?this.notFound=!0:this.notFound=!1);const _=`/loja/${new URL(d).pathname.split("/")[2]}/estoque/`;this.$router.replace(_);const o=this.$store.state.resultado,f=o[0].current_page,r=o[0].total_pages;this.current_page=f,this.total_pages=r},updated(){this.$nextTick(()=>{this.$store.state.resultado&&Object.values(this.$refs).forEach(i=>{i.forEach(e=>{new I(e,{type:"carousel",perView:1,gap:0,peek:{before:0,after:0},hoverpause:!1,pagination:{el:".glide__pagination"}}).mount()})})})}},se={class:"content"},ie={class:"pt-3 pe-4 pb-3 d-flex flex-row align-items-center justify-content-between"},ae={class:"py-2 px-2",style:{"font-size":"13px"}},le={key:0},ne={key:0},re={key:1},ce={key:1},de={key:2},ue={class:"ordenacao"},_e=t("i",{class:"fa fa-sort fa-md"},null,-1),pe=t("option",{value:"0",selected:""},"MAIS RELEVANTES",-1),he=t("option",{value:"1"},"MENOR PREÇO",-1),me=t("option",{value:"2"},"MAIOR PREÇO",-1),ve=t("option",{value:"3"},"ANO MAIS NOVO",-1),ge=[pe,he,me,ve],fe={hidden:""},ye={class:"px-2 py-2"},xe={key:0,style:{height:"60vh"},class:"text-center"},we=t("div",null,[t("img",{class:"caixa",src:V,alt:"",style:{width:"50px",height:"50px",background:"none !important"}})],-1),$e=t("span",{style:{"font-size":"12px"}}," Carregando... ",-1),be=[we,$e],ke={class:"pt-5 px-3"},Me={class:"col-lg-6 mx-auto rounded-3 text-center py-4",style:{"background-color":"rgba(82, 82, 82, 0.2)"}},qe=t("h4",null,"Nenhum resultado!",-1),Ce={class:"m-0"},Te={class:"row p-0 m-0"},Fe={class:"col-lg-12 col-md-12 p-0 m-0"},Ae={class:"row p-0 m-0"},Ne={class:"px-2 container-completo"},Ee={class:"row p-0 m-0"},Le={class:"col-5 col-md-12 col-lg-12 m-0 p-0"},Oe={class:"imagem-container2"},je=["alt"],Se={class:"imagem-container2"},De=["alt"],Pe={class:"imagem-container2"},Re=["alt"],Ie={class:"imagem-container2"},Ve=["alt"],Ue={class:"imagem-container2"},ze=["alt"],Be={class:"imagem-container2"},Ke=["alt"],He={class:"imagem-container2"},Ge=["alt"],Qe={class:"imagem-container2"},Je=["alt"],We={class:"imagem-container2"},Xe=["alt"],Ye={class:"imagem-container2"},Ze=["alt"],to={class:"glide__track","data-glide-el":"track"},eo={class:"glide__slides"},oo={class:"glide__slide"},so={class:"imagem-container2"},io=["alt"],ao={class:"glide__slide"},lo={class:"imagem-container2"},no=["alt"],ro={class:"glide__slide"},co={class:"imagem-container2"},uo=["alt"],_o=t("div",{class:"glide__arrows","data-glide-el":"controls"},[t("div",{class:"btn glide__arrow glide__arrow--left btn-voltar","data-glide-dir":"<"},[t("span",null," > ")]),t("div",{class:"btn glide__arrow glide__arrow--right btn-avancar","data-glide-dir":">"},[t("span",null," > ")])],-1),po={class:"col-7 col-md-12 col-lg-12 titles p-0 m-0"},ho=["onClick"],mo={class:"px-2 pt-2 position-relative"},vo={style:{opacity:"0.5","text-transform":"uppercase"}},go={class:"pt-2 pb-1 position-relative"},fo={class:"py-1 ps-2",style:{color:"#000000"}},yo={class:"row p-2 m-0"},xo={class:"col-6 p-0 m-0",style:{"font-size":"12px",opacity:"0.7"}},wo={class:"col-6 p-0 m-0 text-end",style:{"font-size":"12px",opacity:"0.7"}},$o=t("div",null,null,-1),bo={class:"pagination"},ko=t("div",{class:"bg-dark",style:{"border-radius":"100px",height:"55px",width:"55px","padding-top":"5px"}},[t("i",{class:"fas fa-filter",style:{"font-size":"12px"}}),q(),t("br"),t("div",{style:{"font-size":"11px"}},"Filtrar")],-1),Mo=[ko];function qo(i,e,d,p,l,a){const s=$("splide-slide"),x=$("splide"),_=R("lazy");return n(),c("main",se,[t("div",ie,[t("div",ae,[(n(!0),c(b,null,k(l.array_filtros,(o,f)=>(n(),c("span",{class:"me-2 p-1 px-2 rounded-3 me-2",style:{"background-color":"rgba(82, 82, 82, 0.2)",color:"#000","font-weight":"600"},key:f},[o.chave=="situacao_veiculo"?(n(),c("span",le,[o.valor=="1"?(n(),c("span",ne," Novo ")):h("",!0),o.valor=="2"?(n(),c("span",re," Usado ")):h("",!0)])):o.chave=="opcionais_id"?(n(),c("span",ce," Itens Opcionais ")):(n(),c("span",de,m(o.valor),1))]))),128))]),t("div",ue,[_e,t("select",{class:"ordenacao_select",onChange:e[0]||(e[0]=o=>a.getOrdenation(o.target.value)),id:"ordenacao_select"},ge,32)])]),t("div",fe,[t("div",ye,[t("h4",null,[q(" Resultados "),(n(!0),c(b,null,k(i.$store.state.todosFiltros,(o,f)=>(n(),c("span",{class:"me-2",key:f}," oa "+m(o.valor)+", ",1))),128)),q(" | Regionalmotors ")])])]),l.loader?(n(),c("div",xe,be)):h("",!0),u(t("div",ke,[t("div",Me,[qe,t("p",Ce,[q(" Click para "),t("span",{style:{color:"crimson",cursor:"pointer"},onClick:e[1]||(e[1]=(...o)=>a.verTodos&&a.verTodos(...o))}," ver todos ")])])],512),[[N,l.notFound]]),t("div",Te,[t("div",Fe,[t("div",null,[t("div",Ae,[(n(!0),c(b,null,k(i.$store.state.resultado,(o,f)=>(n(),c("div",{class:"col-lg-3 col-md-6 p-0 m-0 mb-3",key:f,style:{cursor:"pointer"}},[t("div",Ne,[t("div",Ee,[t("div",Le,[M(x,{options:l.splideOptions,class:"bg-dark"},{default:v(()=>[o.foto1?(n(),g(s,{key:0,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",Oe,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,je),[[_,`${o.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto2?(n(),g(s,{key:1,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",Se,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,De),[[_,`${o.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto3?(n(),g(s,{key:2,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",Pe,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Re),[[_,`${o.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto4?(n(),g(s,{key:3,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",Ie,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ve),[[_,`${o.foto4}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto5?(n(),g(s,{key:4,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",Ue,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,ze),[[_,`${o.foto5}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto6?(n(),g(s,{key:5,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",Be,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ke),[[_,`${o.foto6}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto7?(n(),g(s,{key:6,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",He,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ge),[[_,`${o.foto7}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto8?(n(),g(s,{key:7,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",Qe,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Je),[[_,`${o.foto8}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto9?(n(),g(s,{key:8,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",We,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Xe),[[_,`${o.foto9}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0),o.foto10?(n(),g(s,{key:9,onClick:r=>a.goverveiculo(o.id)},{default:v(()=>[t("div",null,[t("div",Ye,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,Ze),[[_,`${o.foto10}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),_:2},1032,["onClick"])):h("",!0)]),_:2},1032,["options"]),t("div",{ref_for:!0,ref:"glide",class:"glide",hidden:""},[t("div",to,[t("ul",eo,[t("li",oo,[t("div",null,[t("div",so,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,io),[[_,`${o.foto1}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),t("li",ao,[t("div",null,[t("div",lo,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,no),[[_,`${o.foto2}destaque_mini.jpg?v=${new Date().getTime()}`]])])])]),t("li",ro,[t("div",null,[t("div",co,[u(t("img",{alt:o.nome_marca,class:"img-fluid"},null,8,uo),[[_,`${o.foto3}destaque_mini.jpg?v=${new Date().getTime()}`]])])])])])]),_o],512)]),t("div",po,[t("div",{class:"resultados-titulos",onClick:r=>a.showCarroDetalhes(o.id)},[t("div",mo,[t("h5",null,m(o.nome_marca)+" "+m(o.nome_modelo),1),t("div",vo,[t("p",null,m(o.combustivel),1)])]),t("div",null,[t("div",go,[t("div",null,[t("h5",fo," R$ "+m(o.valor_preco),1)]),t("div",null,[t("div",yo,[t("div",xo,m(o.ano_modelo),1),t("div",wo,m(o.km)+" km ",1)])])])]),$o],8,ho)])])])]))),128))])])])]),t("div",bo,[l.current_page<l.total_pages?(n(),c("button",{key:0,onClick:e[2]||(e[2]=(...o)=>a.verMaisCarros&&a.verMaisCarros(...o)),class:"btn-pagination"}," Ver mais carros ")):h("",!0)]),t("div",{style:{position:"fixed",right:"15px",bottom:"25px","z-index":"99"},class:"text-center d-lg-none d-md-none",onClick:e[3]||(e[3]=(...o)=>a.show_menu_lateral&&a.show_menu_lateral(...o))},Mo)])}const Co=A(oe,[["render",qo]]),To={components:{TheNavTop:L,TheNavLateral:ee,TheResultado_Carro:Co,loader:U},data(){return{TheNavLateral:"",router:"1",set_tipo_veiculo:"",results:!1}},methods:{handle_showHidden_menu_lateral(){this.TheNavLateral.classList.toggle("showHidden_menu-lateral")},filtrar_tipo(i){this.set_tipo_veiculo=i},filter_novo(i){},goverveiculo(i){const e={id:i},d=window.location.href,p=new URL(d).hash.split("/")[2];this.$router.push({path:`/loja/${p}/verveiculorevenda`,query:e})},execFilterVeiculoRoute(i){this.$refs.theNavLateral.applyFiltro("tipo_veiculo",i)},sendData(i,e){this.$refs.theresultado.applyFiltro(i,e)},clearFiltros(){this.$refs.theresultado.limparFiltro()}},mounted(){this.TheNavLateral=document.getElementById("TheNavLateral"),this.TheNavLateral_moto=document.getElementById("TheNavLateral-moto")}},Fo={id:"TheNavLateral",class:"menu-lateral showHidden_menu-lateral bg-white",style:{"box-shadow":"0px 0px 20px 0px rgba(0, 0, 0, 0.1)"}};function Ao(i,e,d,p,l,a){const s=$("TheNavTop"),x=$("TheNavLateral"),_=$("TheResultado_Carro"),o=$("loader");return n(),c("div",null,[M(s,{onFilterVeiculoRoute:a.execFilterVeiculoRoute},null,8,["onFilterVeiculoRoute"]),t("div",Fo,[M(x,{onShow_menu_lateral:a.handle_showHidden_menu_lateral,onFilter_tipo:a.filtrar_tipo,onFilter_novo:i.filtrar_novo,ref:"theNavLateral",onTransmiteData:a.sendData,onLimparFiltro:a.clearFiltros},null,8,["onShow_menu_lateral","onFilter_tipo","onFilter_novo","onTransmiteData","onLimparFiltro"])]),M(_,{onShow_menu_lateral:a.handle_showHidden_menu_lateral,set_tipo_veiculo:l.set_tipo_veiculo,onGoverveiculoNow:a.goverveiculo,ref:"theresultado"},null,8,["onShow_menu_lateral","set_tipo_veiculo","onGoverveiculoNow"]),u(t("div",null,[M(o)],512),[[N,this.results]])])}const Do=A(To,[["render",Ao]]);export{Do as default};
