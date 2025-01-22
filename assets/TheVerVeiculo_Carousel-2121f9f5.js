import"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js";import{_ as k,B as V,x as T,C as b,r as g,o as a,c as h,d as w,g as y,a as o,b as x,w as C,f as p,t as s,F as m,j as f,e as P,z}from"./index-c0670658.js";import{l as O}from"./loader-fff71581.js";import{_ as A}from"./bom-cb4bb6e8.js";import{_ as L}from"./whatsapp-8361b3fb.js";const R={name:"TheVerVeiculo_Carousel",components:{loader:O},data(){return{splideOptions:"",items:[{image:"",title:"Slide 1",description:"Descrição do Slide 1"}],screenWidth:window.innerWidth,resizeTimer:null,veiculo:"",veiculos:[],Api_CategOpcionais:[],mostraContato:!1,isVisible:!1,showTheVerVeiculos:!0,id:"",linkPage:"",namePage:""}},async mounted(){this.handleResize(),window.addEventListener("resize",this.debouncedHandleResize),this.$nextTick(()=>{$("[data-fancybox='minha-galeria']").fancybox({buttons:["close"],thumbs:{autoStart:!0,axis:"x"}})}),window.addEventListener("scroll",this.handleScroll),this.veiculo=[];const i=parseInt(this.$route.query.id),l=await V(i);this.veiculo=l[0],this.id=this.veiculo.id_anunciante;let c="Comprar  - "+this.veiculo.marca+" "+this.veiculo.modelo+" "+this.veiculo.ano_modelo+" "+this.veiculo.cor+" "+this.veiculo.combustivel+" "+this.veiculo.transmissao;const e=(this.veiculo.marca+"-"+this.veiculo.modelo+"-"+this.veiculo.ano_modelo+"-"+this.veiculo.cor+"-"+this.veiculo.combustivel+"-"+this.veiculo.transmissao+"-"+this.veiculo.id+"-RegionalMotors").toLowerCase(),t=window.location.href,r=new URL(t).hostname;if(r=="teste.regionalmotors.com.br"||r=="regionalmotors.com.br"||r=="regionalmotors"){const d=`/verveiculo?id=${this.veiculo.id}/${e}`;this.$router.replace(d),c+=" - Regional Motors",this.namePage="Regional Motors"}else{const d=`/loja/${this.id}/verveiculorevenda?id=${this.veiculo.id}/${e}`;this.$router.replace(d),c+=" - "+this.veiculo.empresa,this.namePage=this.veiculo.empresa}const u=window.location.href;this.linkPage=u,document.title=c,this.addOpenGraphMetaTags(c,u),this.veiculo&&(this.showTheVerVeiculos=!1),this.veiculo!=null&&(this.veiculo.foto1&&this.veiculos.push({image:this.veiculo.foto1}),this.veiculo.foto2&&this.veiculos.push({image:this.veiculo.foto2}),this.veiculo.foto3&&this.veiculos.push({image:this.veiculo.foto3}),this.veiculo.foto4&&this.veiculos.push({image:this.veiculo.foto4}),this.veiculo.foto5&&this.veiculos.push({image:this.veiculo.foto5}),this.veiculo.foto6&&this.veiculos.push({image:this.veiculo.foto6}),this.veiculo.foto7&&this.veiculos.push({image:this.veiculo.foto7}),this.veiculo.foto8&&this.veiculos.push({image:this.veiculo.foto8}),this.veiculo.foto9&&this.veiculos.push({image:this.veiculo.foto9}),this.veiculo.foto10&&this.veiculos.push({image:this.veiculo.foto10}))},async created(){this.Api_CategOpcionais=await T()},beforeDestroy(){window.removeEventListener("resize",this.debouncedHandleResize)},computed:{whatsappLink(){let i=this.veiculo.marca+" "+this.veiculo.modelo;return i=i.toLowerCase(),`https://api.whatsapp.com/send?phone=${this.veiculo.whatsapp}&text=Olá! Gostaria de obter mais informações sobre o anúncio da ${this.namePage} para o veículo ${i}. Vi no link do anúncio: ${this.linkPage}.`}},methods:{addOpenGraphMetaTags(i,l){console.log(this.veiculo);let c="";this.veiculo.situacao_veiculo=="2"?c="Usado:":c="Novo:";const _=`${this.veiculo.tipo_veiculo} ${c} ${this.veiculo.marca} ${this.veiculo.modelo} ${this.veiculo.ano_modelo}, cor ${this.veiculo.cor.toLowerCase()}, câmbio ${this.veiculo.transmissao.toLowerCase()}. Disponível na ${this.veiculo.empresa}, ${this.veiculo.cidade}, ${this.veiculo.estado}.`;console.log(_);const e=`${this.veiculo.foto1}detalhe_mini.jpg`,t=document.createElement("meta");t.setAttribute("property","og:title"),t.setAttribute("content",i);const r=document.createElement("meta");r.setAttribute("property","og:description"),r.setAttribute("content",_);const u=document.createElement("meta");u.setAttribute("property","og:image"),u.setAttribute("content",e);const d=document.createElement("meta");d.setAttribute("property","og:url"),d.setAttribute("content",l),document.head.appendChild(t),document.head.appendChild(r),document.head.appendChild(u),document.head.appendChild(d)},async mostrarContato(){this.mostraContato=!0,await b("api/anuncios/contadorContacto/",this.veiculo.id)},async enviarMsg(){await b("api/anuncios/contadorMensagem/",this.veiculo.id)},backPage(){window.history.back()},handleScroll(){window.scrollY==0||window.pageYOffset==0?this.isVisible=!1:this.isVisible=!0},listOpcionais(i){return this.veiculo.opcionais_id.filter(c=>c.categoria_opcional_id==i)},debouncedHandleResize(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.handleResize()},250)},handleResize(){this.screenWidth=window.innerWidth,this.screenWidth<=435?this.splideOptions={type:"carousel",perPage:1,pagination:!1}:435<this.screenWidth&&this.screenWidth<=568?this.splideOptions={type:"carousel",perPage:2,pagination:!1}:568<this.screenWidth&&this.screenWidth<=900?this.splideOptions={type:"carousel",perPage:2,pagination:!1}:900<this.screenWidth&&(this.splideOptions={type:"carousel",perPage:3,pagination:!1})},visitarLoja(){this.$router.push({path:"/loja/"+this.id})}}},M={class:"col-12 col-lg-12"},W={class:"",style:{position:"relative"}},E={class:"",style:{"background-color":"#e3e3e3",border:"3px solid transparent","border-top":"none","border-bottom":"none"}},S=["href","data-caption"],j=["src","alt"],D={style:{position:"relative"},class:"row titles-em-card p-0 m-0 col-12 col-lg-10 col-md-10 mx-auto"},B={class:"col-12 px-md-3 mb-3"},N={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},F={class:"pt-0 px-4 pb-4"},G={class:"pb-2"},H=o("span",{class:"fas fa-arrow-left me-2"},null,-1),I=o("strong",null,"Voltar",-1),U=[H,I],q={style:{"font-size":"30px","margin-bottom":"5px"}},Y={style:{color:"crimson"}},K={class:"row"},J={class:"my-3",style:{"font-weight":"600",opacity:"0.8"}},Q={class:"col-6 col-lg-4"},X={class:"mb-2"},Z=o("p",{class:"rotulo"},"Cidade",-1),oo={class:"valor-rotulo"},eo={class:"mb-2"},so=o("p",{class:"rotulo"},"Ano",-1),to={class:"valor-rotulo"},io={class:"mb-2"},lo=o("p",{class:"rotulo"},"Cor",-1),co={class:"valor-rotulo"},no={class:"col-6 col-lg-4"},ao={class:"mb-2"},ro=o("p",{class:"rotulo"},"KM",-1),ho={class:"valor-rotulo"},uo={class:"mb-2"},po=o("p",{class:"rotulo"},"Combustível",-1),_o={class:"valor-rotulo"},mo={class:"col-6 col-lg-4"},vo={class:"mb-2"},go=o("p",{class:"rotulo"},"Câmbio",-1),fo={class:"valor-rotulo"},bo=o("div",null,[o("hr")],-1),wo=o("p",{class:"rotulo"},"Sobre este carro",-1),yo={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},xo={class:"p-4"},Co=o("div",null,[o("p",{class:"rotulo"},"Itens de Veículo")],-1),ko={class:"row pt-2"},Vo={class:"col-12 col-md-6 col-lg-6 mb-3 p-0"},To={class:"mb-1 d-none mx-2"},Po={class:"mb-1 mx-2"},zo=o("img",{src:A,width:"22",style:{"margin-top":"-3px"}},null,-1),Oo={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},Ao={class:"p-4"},Lo={key:0,class:"rotulo"},Ro={class:"my-",style:{opacity:"0.7"}},Mo={class:"row p-0"},Wo={class:"col-lg-6 mb-2"},Eo={class:"m-0 pt-1"},So={class:"pt-1 mb-1"},jo={class:"col-lg-6 mb-3"},Do={class:"col-lg-8 col-md-10 p-0"},Bo={style:{height:"50px"}},No=["src"],Fo={class:"py-2"},Go={style:{color:"#000"}},Ho={key:0,style:{color:"#000"}},Io={class:"mb-1",style:{opacity:"0.7"}},Uo=o("span",{class:"fw-bold"},"Telefone:",-1),qo={class:"mb-1",style:{opacity:"0.7"}},Yo=o("span",{class:"fw-bold"},"Celular:",-1),Ko=["href"],Jo={class:"btn py-2 text-center rounded-3",style:{width:"200px","background-color":"#5fcb71"}},Qo=o("img",{src:L,width:"24",style:{"margin-top":"-3px"}},null,-1),Xo={style:{color:"#fff","font-weight":"600"}},Zo=o("span",{style:{"font-weight":"bold","font-size":"14px"}},[o("br"),o("button",{class:"btn btn-danger btn-sm my-3 mb-2"},"Ver contato")],-1),$o={style:{"font-size":"14px","font-weight":"bold",opacity:"0.7"}};function oe(i,l,c,_,e,t){const r=g("loader"),u=g("splide-slide"),d=g("splide");return a(),h(m,null,[w(o("div",null,[x(r)],512),[[y,e.showTheVerVeiculos]]),w(o("div",null,[o("div",M,[o("div",W,[x(d,{options:e.splideOptions},{default:C(()=>[(a(!0),h(m,null,f(e.veiculos,(n,v)=>(a(),z(u,{key:v,class:"custom-slide px-0"},{default:C(()=>[o("div",E,[o("a",{href:n.image+"detalhe_mini.jpg","data-fancybox":"minha-galeria","data-caption":`${e.veiculo.marca} - ${e.veiculo.modelo}`},[o("img",{src:n.image+"destaque.jpg",alt:`${e.veiculo.marca} - ${e.veiculo.modelo}`,class:"custom-image"},null,8,j)],8,S)])]),_:2},1024))),128))]),_:1},8,["options"])])]),o("div",D,[o("div",B,[o("div",N,[o("div",F,[o("div",G,[o("button",{class:"btn btn-danger btn-sm my-3 mb-2",onClick:l[0]||(l[0]=(...n)=>t.backPage&&t.backPage(...n))},U)]),o("div",null,[o("h1",q,[o("strong",null,[p(s(e.veiculo.marca)+" ",1),o("span",Y,s(e.veiculo.modelo),1)])])]),o("div",K,[o("div",null,[o("h5",J," R$ "+s(e.veiculo.valor_preco),1)]),o("div",Q,[o("div",X,[Z,o("p",oo,s(e.veiculo.cidade)+" - "+s(e.veiculo.uf),1)]),o("div",eo,[so,o("p",to,s(e.veiculo.ano_modelo),1)]),o("div",io,[lo,o("p",co,s(e.veiculo.cor),1)])]),o("div",no,[o("div",ao,[ro,o("p",ho,s(e.veiculo.km),1)]),o("div",uo,[po,o("p",_o,s(e.veiculo.combustivel),1)])]),o("div",mo,[o("div",vo,[go,o("p",fo,s(e.veiculo.transmissao),1)])]),bo,o("div",null,[wo,o("p",null,s(e.veiculo.descricao),1)])])])]),o("div",yo,[o("div",xo,[Co,o("div",ko,[(a(!0),h(m,null,f(e.Api_CategOpcionais,n=>(a(),h("div",Vo,[o("p",To,[o("b",null,s(n.nome),1)]),(a(!0),h(m,null,f(t.listOpcionais(n.id),v=>(a(),h("div",null,[o("p",Po,[zo,p(" "+s(v.nome),1)])]))),256))]))),256))])])]),o("div",Oo,[o("div",Ao,[o("div",null,[o("div",null,[i.nameLink==="Regional Motors"?(a(),h("p",Lo,"Sobre o vendedor")):P("",!0)])]),o("div",Ro,[o("div",Mo,[o("div",Wo,[o("div",null,[o("h3",Eo,s(e.veiculo.empresa),1),o("p",So,s(e.veiculo.cidade)+", "+s(e.veiculo.uf),1)])]),o("div",jo,[o("div",Do,[o("div",Bo,[o("img",{src:e.veiculo.foto,class:"img-fluid",style:{height:"100%"}},null,8,No)])])])]),o("div",Fo,[o("span",Go,[e.mostraContato?(a(),h("span",Ho,[o("p",Io,[Uo,p(" "+s(e.veiculo.celular),1)]),o("p",qo,[Yo,p(" "+s(e.veiculo.telefone),1)]),o("a",{href:t.whatsappLink,target:"_blank"},[o("button",Jo,[Qo,o("span",Xo,[o("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:l[1]||(l[1]=(...n)=>t.enviarMsg&&t.enviarMsg(...n))}," Enviar mensagem ")])])],8,Ko)])):(a(),h("span",{key:1,style:{cursor:"pointer"},onClick:l[2]||(l[2]=(...n)=>t.mostrarContato&&t.mostrarContato(...n))},[p(" (37)... "),Zo]))])]),o("p",$o,s(e.veiculo.tipo_anunciante),1)])])])])])],512),[[y,e.veiculo]])],64)}const ne=k(R,[["render",oe]]);export{ne as T};
