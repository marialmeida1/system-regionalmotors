import"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js";import{_ as V,B as k,x as z,C as f,r as v,o as c,c as n,d as g,g as b,a as o,b as w,w as y,f as h,t as e,F as _,j as m,z as T}from"./index-d682cece.js";import{l as O}from"./loader-6c1e48c7.js";import{_ as R}from"./bom-cb4bb6e8.js";import{_ as W}from"./whatsapp-8361b3fb.js";const P={name:"TheVerVeiculo_Carousel",components:{loader:O},data(){return{splideOptions:"",items:[{image:"",title:"Slide 1",description:"Descrição do Slide 1"}],screenWidth:window.innerWidth,resizeTimer:null,veiculo:"",veiculos:[],Api_CategOpcionais:[],mostraContato:!1,isVisible:!1,showTheVerVeiculos:!0,id:""}},async mounted(){this.handleResize(),window.addEventListener("resize",this.debouncedHandleResize),this.$nextTick(()=>{$("[data-fancybox='minha-galeria']").fancybox({buttons:["close"],thumbs:{autoStart:!0,axis:"x"}})}),window.addEventListener("scroll",this.handleScroll),this.veiculo=[];const u=parseInt(this.$route.query.id),t=await k(u);this.veiculo=t[0],this.id=this.veiculo.id_anunciante;let a="Comprar  - "+this.veiculo.marca+" "+this.veiculo.modelo+" "+this.veiculo.ano_modelo+" "+this.veiculo.cor+" "+this.veiculo.combustivel+" "+this.veiculo.transmissao;const s=(this.veiculo.marca+"-"+this.veiculo.modelo+"-"+this.veiculo.ano_modelo+"-"+this.veiculo.cor+"-"+this.veiculo.combustivel+"-"+this.veiculo.transmissao+"-"+this.veiculo.id+"-RegionalMotors").toLowerCase(),l=window.location.href,r=new URL(l).hostname;if(console.log(r),r=="teste.regionalmotors.com.br"||r=="regionalmotors.com.br"||r=="regionalmotors"){const d=`/verveiculo?id=${this.veiculo.id}/${s}`;this.$router.replace(d),a+=" - Regional Motors"}else{const d=`/loja/${this.id}/verveiculorevenda?id=${this.veiculo.id}/${s}`;this.$router.replace(d),a+=" - "+this.veiculo.empresa}document.title=a,this.veiculo&&(this.showTheVerVeiculos=!1),this.veiculo!=null&&(this.veiculo.foto1&&this.veiculos.push({image:this.veiculo.foto1}),this.veiculo.foto2&&this.veiculos.push({image:this.veiculo.foto2}),this.veiculo.foto3&&this.veiculos.push({image:this.veiculo.foto3}),this.veiculo.foto4&&this.veiculos.push({image:this.veiculo.foto4}),this.veiculo.foto5&&this.veiculos.push({image:this.veiculo.foto5}),this.veiculo.foto6&&this.veiculos.push({image:this.veiculo.foto6}),this.veiculo.foto7&&this.veiculos.push({image:this.veiculo.foto7}),this.veiculo.foto8&&this.veiculos.push({image:this.veiculo.foto8}),this.veiculo.foto9&&this.veiculos.push({image:this.veiculo.foto9}),this.veiculo.foto10&&this.veiculos.push({image:this.veiculo.foto10}))},async created(){this.Api_CategOpcionais=await z()},beforeDestroy(){window.removeEventListener("resize",this.debouncedHandleResize)},methods:{async mostrarContato(){this.mostraContato=!0,await f("api/anuncios/contadorContacto/",this.veiculo.id)},async enviarMsg(){await f("api/anuncios/contadorMensagem/",this.veiculo.id)},backPage(){window.history.back()},handleScroll(){window.scrollY==0||window.pageYOffset==0?this.isVisible=!1:this.isVisible=!0},listOpcionais(u){return this.veiculo.opcionais_id.filter(a=>a.categoria_opcional_id==u)},debouncedHandleResize(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.handleResize()},250)},handleResize(){this.screenWidth=window.innerWidth,this.screenWidth<=435?this.splideOptions={type:"carousel",perPage:1,pagination:!1}:435<this.screenWidth&&this.screenWidth<=568?this.splideOptions={type:"carousel",perPage:2,pagination:!1}:568<this.screenWidth&&this.screenWidth<=900?this.splideOptions={type:"carousel",perPage:2,pagination:!1}:900<this.screenWidth&&(this.splideOptions={type:"carousel",perPage:3,pagination:!1})},visitarLoja(){this.$router.push({path:"/loja/"+this.id})}}},S={class:"col-12 col-lg-12"},L={class:"",style:{position:"relative"}},M={class:"",style:{"background-color":"#e3e3e3",border:"3px solid transparent","border-top":"none","border-bottom":"none"}},j=["href","data-caption"],A=["src","alt"],B={style:{position:"relative"},class:"row titles-em-card p-0 m-0 col-12 col-lg-10 col-md-10 mx-auto"},E={class:"col-12 px-md-3 mb-3"},D={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},F={class:"pt-0 px-4 pb-4"},H={class:"pb-2"},N=o("span",{class:"fas fa-arrow-left me-2"},null,-1),q=o("strong",null,"Voltar",-1),I=[N,q],Y={style:{"font-size":"30px","margin-bottom":"5px"}},K={style:{color:"crimson"}},U={class:"row"},G={class:"my-3",style:{"font-weight":"600",opacity:"0.8"}},J={class:"col-6 col-lg-4"},Q={class:"mb-2"},X=o("p",{class:"rotulo"},"Cidade",-1),Z={class:"valor-rotulo"},oo={class:"mb-2"},so=o("p",{class:"rotulo"},"Ano",-1),eo={class:"valor-rotulo"},io={class:"mb-2"},to=o("p",{class:"rotulo"},"Cor",-1),lo={class:"valor-rotulo"},co={class:"col-6 col-lg-4"},no={class:"mb-2"},ao=o("p",{class:"rotulo"},"KM",-1),ro={class:"valor-rotulo"},ho={class:"mb-2"},uo=o("p",{class:"rotulo"},"Combustível",-1),_o={class:"valor-rotulo"},po={class:"col-6 col-lg-4"},vo={class:"mb-2"},mo=o("p",{class:"rotulo"},"Câmbio",-1),fo={class:"valor-rotulo"},go=o("div",null,[o("hr")],-1),bo=o("p",{class:"rotulo"},"Sobre este carro",-1),wo={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},yo={class:"p-4"},xo=o("div",null,[o("p",{class:"rotulo"},"Itens de Veículo")],-1),Co={class:"row pt-2"},Vo={class:"col-12 col-md-6 col-lg-6 mb-3 p-0"},ko={class:"mb-1 d-none mx-2"},zo={class:"mb-1 mx-2"},To=o("img",{src:R,width:"22",style:{"margin-top":"-3px"}},null,-1),Oo={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},Ro={class:"p-4"},Wo=o("div",null,[o("p",{class:"rotulo"},"Sobre o vendedor")],-1),Po={class:"my-",style:{opacity:"0.7"}},So={class:"row p-0"},Lo={class:"col-lg-6 mb-2"},Mo={class:"m-0 pt-1"},jo={class:"pt-1 mb-1"},Ao={class:"col-lg-6 mb-3"},Bo={class:"col-lg-8 col-md-10 p-0"},Eo={style:{height:"50px"}},Do=["src"],Fo={class:"py-2"},Ho={style:{color:"#000"}},No={key:0,style:{color:"#000"}},qo={class:"mb-1",style:{opacity:"0.7"}},Io=o("span",{class:"fw-bold"},"Telefone:",-1),Yo={class:"mb-1",style:{opacity:"0.7"}},Ko=o("span",{class:"fw-bold"},"Celular:",-1),Uo=["href"],Go={class:"btn py-2 text-center rounded-3",style:{width:"200px","background-color":"#5fcb71"}},Jo=o("img",{src:W,width:"24",style:{"margin-top":"-3px"}},null,-1),Qo={style:{color:"#fff","font-weight":"600"}},Xo=o("span",{style:{"font-weight":"bold","font-size":"14px"}},[o("br"),o("button",{class:"btn btn-danger btn-sm my-3 mb-2"},"Ver contato")],-1),Zo={style:{"font-size":"14px","font-weight":"bold",opacity:"0.7"}};function $o(u,t,a,x,s,l){const r=v("loader"),d=v("splide-slide"),C=v("splide");return c(),n(_,null,[g(o("div",null,[w(r)],512),[[b,s.showTheVerVeiculos]]),g(o("div",null,[o("div",S,[o("div",L,[w(C,{options:s.splideOptions},{default:y(()=>[(c(!0),n(_,null,m(s.veiculos,(i,p)=>(c(),T(d,{key:p,class:"custom-slide px-0"},{default:y(()=>[o("div",M,[o("a",{href:i.image+"detalhe_mini.jpg","data-fancybox":"minha-galeria","data-caption":`${s.veiculo.marca} - ${s.veiculo.modelo}`},[o("img",{src:i.image+"destaque.jpg",alt:`${s.veiculo.marca} - ${s.veiculo.modelo}`,class:"custom-image"},null,8,A)],8,j)])]),_:2},1024))),128))]),_:1},8,["options"])])]),o("div",B,[o("div",E,[o("div",D,[o("div",F,[o("div",H,[o("button",{class:"btn btn-danger btn-sm my-3 mb-2",onClick:t[0]||(t[0]=(...i)=>l.backPage&&l.backPage(...i))},I)]),o("div",null,[o("h1",Y,[o("strong",null,[h(e(s.veiculo.marca)+" ",1),o("span",K,e(s.veiculo.modelo),1)])])]),o("div",U,[o("div",null,[o("h5",G," R$ "+e(s.veiculo.valor_preco),1)]),o("div",J,[o("div",Q,[X,o("p",Z,e(s.veiculo.cidade)+" - "+e(s.veiculo.uf),1)]),o("div",oo,[so,o("p",eo,e(s.veiculo.ano_modelo),1)]),o("div",io,[to,o("p",lo,e(s.veiculo.cor),1)])]),o("div",co,[o("div",no,[ao,o("p",ro,e(s.veiculo.km),1)]),o("div",ho,[uo,o("p",_o,e(s.veiculo.combustivel),1)])]),o("div",po,[o("div",vo,[mo,o("p",fo,e(s.veiculo.transmissao),1)])]),go,o("div",null,[bo,o("p",null,e(s.veiculo.descricao),1)])])])]),o("div",wo,[o("div",yo,[xo,o("div",Co,[(c(!0),n(_,null,m(s.Api_CategOpcionais,i=>(c(),n("div",Vo,[o("p",ko,[o("b",null,e(i.nome),1)]),(c(!0),n(_,null,m(l.listOpcionais(i.id),p=>(c(),n("div",null,[o("p",zo,[To,h(" "+e(p.nome),1)])]))),256))]))),256))])])]),o("div",Oo,[o("div",Ro,[Wo,o("div",Po,[o("div",So,[o("div",Lo,[o("div",null,[o("h3",Mo,e(s.veiculo.empresa),1),o("p",jo,e(s.veiculo.cidade)+", "+e(s.veiculo.uf),1)])]),o("div",Ao,[o("div",Bo,[o("div",Eo,[o("img",{src:s.veiculo.foto,class:"img-fluid",style:{height:"100%"}},null,8,Do)])])])]),o("div",Fo,[o("span",Ho,[s.mostraContato?(c(),n("span",No,[o("p",qo,[Io,h(" "+e(s.veiculo.celular),1)]),o("p",Yo,[Ko,h(" "+e(s.veiculo.telefone),1)]),o("a",{href:`https://api.whatsapp.com/send?phone=${s.veiculo.whatsapp}&text=testando`,target:"_blank"},[o("button",Go,[Jo,o("span",Qo,[o("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:t[1]||(t[1]=(...i)=>l.enviarMsg&&l.enviarMsg(...i))}," Enviar mensagem ")])])],8,Uo)])):(c(),n("span",{key:1,style:{cursor:"pointer"},onClick:t[2]||(t[2]=(...i)=>l.mostrarContato&&l.mostrarContato(...i))},[h(" (37)... "),Xo]))])]),o("p",Zo,e(s.veiculo.tipo_anunciante),1)])])])])])],512),[[b,s.veiculo]])],64)}const cs=V(P,[["render",$o]]);export{cs as T};
