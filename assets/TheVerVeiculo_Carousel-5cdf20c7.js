import"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js";import{_ as k,B as V,x as P,C as g,r as m,o as t,c as n,d as b,g as w,a as o,b as y,w as x,f as u,t as e,F as _,j as f,e as z,z as T}from"./index-6eb522a9.js";import{l as O}from"./loader-ef0ea47b.js";import{_ as R}from"./bom-cb4bb6e8.js";import{_ as W}from"./whatsapp-8361b3fb.js";const M={name:"TheVerVeiculo_Carousel",components:{loader:O},data(){return{splideOptions:"",items:[{image:"",title:"Slide 1",description:"Descrição do Slide 1"}],screenWidth:window.innerWidth,resizeTimer:null,veiculo:"",veiculos:[],Api_CategOpcionais:[],mostraContato:!1,isVisible:!1,showTheVerVeiculos:!0,id:"",linkPage:"",namePage:""}},async mounted(){this.handleResize(),window.addEventListener("resize",this.debouncedHandleResize),this.$nextTick(()=>{$("[data-fancybox='minha-galeria']").fancybox({buttons:["close"],thumbs:{autoStart:!0,axis:"x"}})}),window.addEventListener("scroll",this.handleScroll),this.veiculo=[];const r=parseInt(this.$route.query.id),l=await V(r);this.veiculo=l[0],this.id=this.veiculo.id_anunciante;let a="Comprar  - "+this.veiculo.marca+" "+this.veiculo.modelo+" "+this.veiculo.ano_modelo+" "+this.veiculo.cor+" "+this.veiculo.combustivel+" "+this.veiculo.transmissao;const s=(this.veiculo.marca+"-"+this.veiculo.modelo+"-"+this.veiculo.ano_modelo+"-"+this.veiculo.cor+"-"+this.veiculo.combustivel+"-"+this.veiculo.transmissao+"-"+this.veiculo.id+"-RegionalMotors").toLowerCase(),c=window.location.href,d=new URL(c).hostname;if(d=="teste.regionalmotors.com.br"||d=="regionalmotors.com.br"||d=="regionalmotors"){const h=`/verveiculo?id=${this.veiculo.id}/${s}`;this.$router.replace(h),a+=" - Regional Motors",this.namePage="Regional Motors"}else{const h=`/loja/${this.id}/verveiculorevenda?id=${this.veiculo.id}/${s}`;this.$router.replace(h),a+=" - "+this.veiculo.empresa}const p=window.location.href;this.linkPage=p,console.log(this.namePage+" "+this.linkPage),document.title=a,this.veiculo&&(this.showTheVerVeiculos=!1),this.veiculo!=null&&(this.veiculo.foto1&&this.veiculos.push({image:this.veiculo.foto1}),this.veiculo.foto2&&this.veiculos.push({image:this.veiculo.foto2}),this.veiculo.foto3&&this.veiculos.push({image:this.veiculo.foto3}),this.veiculo.foto4&&this.veiculos.push({image:this.veiculo.foto4}),this.veiculo.foto5&&this.veiculos.push({image:this.veiculo.foto5}),this.veiculo.foto6&&this.veiculos.push({image:this.veiculo.foto6}),this.veiculo.foto7&&this.veiculos.push({image:this.veiculo.foto7}),this.veiculo.foto8&&this.veiculos.push({image:this.veiculo.foto8}),this.veiculo.foto9&&this.veiculos.push({image:this.veiculo.foto9}),this.veiculo.foto10&&this.veiculos.push({image:this.veiculo.foto10}))},async created(){this.Api_CategOpcionais=await P()},beforeDestroy(){window.removeEventListener("resize",this.debouncedHandleResize)},methods:{async mostrarContato(){this.mostraContato=!0,await g("api/anuncios/contadorContacto/",this.veiculo.id)},async enviarMsg(){await g("api/anuncios/contadorMensagem/",this.veiculo.id)},backPage(){window.history.back()},handleScroll(){window.scrollY==0||window.pageYOffset==0?this.isVisible=!1:this.isVisible=!0},listOpcionais(r){return this.veiculo.opcionais_id.filter(a=>a.categoria_opcional_id==r)},debouncedHandleResize(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.handleResize()},250)},handleResize(){this.screenWidth=window.innerWidth,this.screenWidth<=435?this.splideOptions={type:"carousel",perPage:1,pagination:!1}:435<this.screenWidth&&this.screenWidth<=568?this.splideOptions={type:"carousel",perPage:2,pagination:!1}:568<this.screenWidth&&this.screenWidth<=900?this.splideOptions={type:"carousel",perPage:2,pagination:!1}:900<this.screenWidth&&(this.splideOptions={type:"carousel",perPage:3,pagination:!1})},visitarLoja(){this.$router.push({path:"/loja/"+this.id})}}},S={class:"col-12 col-lg-12"},L={class:"",style:{position:"relative"}},j={class:"",style:{"background-color":"#e3e3e3",border:"3px solid transparent","border-top":"none","border-bottom":"none"}},A=["href","data-caption"],B=["src","alt"],E={style:{position:"relative"},class:"row titles-em-card p-0 m-0 col-12 col-lg-10 col-md-10 mx-auto"},D={class:"col-12 px-md-3 mb-3"},F={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},N={class:"pt-0 px-4 pb-4"},H={class:"pb-2"},q=o("span",{class:"fas fa-arrow-left me-2"},null,-1),I=o("strong",null,"Voltar",-1),Y=[q,I],G={style:{"font-size":"30px","margin-bottom":"5px"}},K={style:{color:"crimson"}},U={class:"row"},J={class:"my-3",style:{"font-weight":"600",opacity:"0.8"}},Q={class:"col-6 col-lg-4"},X={class:"mb-2"},Z=o("p",{class:"rotulo"},"Cidade",-1),oo={class:"valor-rotulo"},so={class:"mb-2"},eo=o("p",{class:"rotulo"},"Ano",-1),io={class:"valor-rotulo"},to={class:"mb-2"},lo=o("p",{class:"rotulo"},"Cor",-1),co={class:"valor-rotulo"},no={class:"col-6 col-lg-4"},ao={class:"mb-2"},ro=o("p",{class:"rotulo"},"KM",-1),ho={class:"valor-rotulo"},uo={class:"mb-2"},_o=o("p",{class:"rotulo"},"Combustível",-1),po={class:"valor-rotulo"},vo={class:"col-6 col-lg-4"},mo={class:"mb-2"},fo=o("p",{class:"rotulo"},"Câmbio",-1),go={class:"valor-rotulo"},bo=o("div",null,[o("hr")],-1),wo=o("p",{class:"rotulo"},"Sobre este carro",-1),yo={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},xo={class:"p-4"},Co=o("div",null,[o("p",{class:"rotulo"},"Itens de Veículo")],-1),ko={class:"row pt-2"},Vo={class:"col-12 col-md-6 col-lg-6 mb-3 p-0"},Po={class:"mb-1 d-none mx-2"},zo={class:"mb-1 mx-2"},To=o("img",{src:R,width:"22",style:{"margin-top":"-3px"}},null,-1),Oo={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},Ro={class:"p-4"},Wo={key:0,class:"rotulo"},Mo={class:"my-",style:{opacity:"0.7"}},So={class:"row p-0"},Lo={class:"col-lg-6 mb-2"},jo={class:"m-0 pt-1"},Ao={class:"pt-1 mb-1"},Bo={class:"col-lg-6 mb-3"},Eo={class:"col-lg-8 col-md-10 p-0"},Do={style:{height:"50px"}},Fo=["src"],No={class:"py-2"},Ho={style:{color:"#000"}},qo={key:0,style:{color:"#000"}},Io={class:"mb-1",style:{opacity:"0.7"}},Yo=o("span",{class:"fw-bold"},"Telefone:",-1),Go={class:"mb-1",style:{opacity:"0.7"}},Ko=o("span",{class:"fw-bold"},"Celular:",-1),Uo=["href"],Jo={class:"btn py-2 text-center rounded-3",style:{width:"200px","background-color":"#5fcb71"}},Qo=o("img",{src:W,width:"24",style:{"margin-top":"-3px"}},null,-1),Xo={style:{color:"#fff","font-weight":"600"}},Zo=o("span",{style:{"font-weight":"bold","font-size":"14px"}},[o("br"),o("button",{class:"btn btn-danger btn-sm my-3 mb-2"},"Ver contato")],-1),$o={style:{"font-size":"14px","font-weight":"bold",opacity:"0.7"}};function os(r,l,a,C,s,c){const d=m("loader"),p=m("splide-slide"),h=m("splide");return t(),n(_,null,[b(o("div",null,[y(d)],512),[[w,s.showTheVerVeiculos]]),b(o("div",null,[o("div",S,[o("div",L,[y(h,{options:s.splideOptions},{default:x(()=>[(t(!0),n(_,null,f(s.veiculos,(i,v)=>(t(),T(p,{key:v,class:"custom-slide px-0"},{default:x(()=>[o("div",j,[o("a",{href:i.image+"detalhe_mini.jpg","data-fancybox":"minha-galeria","data-caption":`${s.veiculo.marca} - ${s.veiculo.modelo}`},[o("img",{src:i.image+"destaque.jpg",alt:`${s.veiculo.marca} - ${s.veiculo.modelo}`,class:"custom-image"},null,8,B)],8,A)])]),_:2},1024))),128))]),_:1},8,["options"])])]),o("div",E,[o("div",D,[o("div",F,[o("div",N,[o("div",H,[o("button",{class:"btn btn-danger btn-sm my-3 mb-2",onClick:l[0]||(l[0]=(...i)=>c.backPage&&c.backPage(...i))},Y)]),o("div",null,[o("h1",G,[o("strong",null,[u(e(s.veiculo.marca)+" ",1),o("span",K,e(s.veiculo.modelo),1)])])]),o("div",U,[o("div",null,[o("h5",J," R$ "+e(s.veiculo.valor_preco),1)]),o("div",Q,[o("div",X,[Z,o("p",oo,e(s.veiculo.cidade)+" - "+e(s.veiculo.uf),1)]),o("div",so,[eo,o("p",io,e(s.veiculo.ano_modelo),1)]),o("div",to,[lo,o("p",co,e(s.veiculo.cor),1)])]),o("div",no,[o("div",ao,[ro,o("p",ho,e(s.veiculo.km),1)]),o("div",uo,[_o,o("p",po,e(s.veiculo.combustivel),1)])]),o("div",vo,[o("div",mo,[fo,o("p",go,e(s.veiculo.transmissao),1)])]),bo,o("div",null,[wo,o("p",null,e(s.veiculo.descricao),1)])])])]),o("div",yo,[o("div",xo,[Co,o("div",ko,[(t(!0),n(_,null,f(s.Api_CategOpcionais,i=>(t(),n("div",Vo,[o("p",Po,[o("b",null,e(i.nome),1)]),(t(!0),n(_,null,f(c.listOpcionais(i.id),v=>(t(),n("div",null,[o("p",zo,[To,u(" "+e(v.nome),1)])]))),256))]))),256))])])]),o("div",Oo,[o("div",Ro,[o("div",null,[o("div",null,[r.nameLink==="Regional Motors"?(t(),n("p",Wo,"Sobre o vendedor")):z("",!0)])]),o("div",Mo,[o("div",So,[o("div",Lo,[o("div",null,[o("h3",jo,e(s.veiculo.empresa),1),o("p",Ao,e(s.veiculo.cidade)+", "+e(s.veiculo.uf),1)])]),o("div",Bo,[o("div",Eo,[o("div",Do,[o("img",{src:s.veiculo.foto,class:"img-fluid",style:{height:"100%"}},null,8,Fo)])])])]),o("div",No,[o("span",Ho,[s.mostraContato?(t(),n("span",qo,[o("p",Io,[Yo,u(" "+e(s.veiculo.celular),1)]),o("p",Go,[Ko,u(" "+e(s.veiculo.telefone),1)]),o("a",{href:`https://api.whatsapp.com/send?phone=${s.veiculo.whatsapp}&text=Olá! Gostaria de obter mais informações sobre o anúncio da ${s.namePage} para o veículo ${s.veiculo.marca} ${s.veiculo.modelo}. Vi no link do anúnio: ${s.linkPage}. `,target:"_blank"},[o("button",Jo,[Qo,o("span",Xo,[o("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:l[1]||(l[1]=(...i)=>c.enviarMsg&&c.enviarMsg(...i))}," Enviar mensagem ")])])],8,Uo)])):(t(),n("span",{key:1,style:{cursor:"pointer"},onClick:l[2]||(l[2]=(...i)=>c.mostrarContato&&c.mostrarContato(...i))},[u(" (37)... "),Zo]))])]),o("p",$o,e(s.veiculo.tipo_anunciante),1)])])])])])],512),[[w,s.veiculo]])],64)}const ns=k(M,[["render",os]]);export{ns as T};
