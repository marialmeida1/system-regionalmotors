import"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js";import{l as V,k,h as T,n as g}from"./loader-930b6088.js";import{_ as z,r as m,o as t,c as n,e as b,g as w,a as o,b as y,w as x,d,t as e,F as _,i as f,k as O}from"./index-3c85704b.js";import{_ as S}from"./bom-cb4bb6e8.js";import{_ as W}from"./whatsapp-8361b3fb.js";const R={name:"TheVerVeiculo_Carousel",components:{loader:V},data(){return{splideOptions:"",items:[{image:"",title:"Slide 1",description:"Descrição do Slide 1"}],screenWidth:window.innerWidth,resizeTimer:null,veiculo:"",veiculos:[],Api_CategOpcionais:[],mostraContato:!1,isVisible:!1,showTheVerVeiculos:!0,id:""}},async mounted(){this.handleResize(),window.addEventListener("resize",this.debouncedHandleResize),this.$nextTick(()=>{$("[data-fancybox='minha-galeria']").fancybox({buttons:["close"],thumbs:{autoStart:!0,axis:"x"}})}),window.addEventListener("scroll",this.handleScroll),this.veiculo=[];const p=parseInt(this.$route.query.id),a=await k(p);this.veiculo=a[0],this.id=this.veiculo.id_anunciante,console.log(JSON.stringify(this.veiculo));let l=this.veiculo.marca+" "+this.veiculo.modelo+" "+this.veiculo.ano_modelo+" "+this.veiculo.cor+" "+this.veiculo.combustivel+" "+this.veiculo.transmissao;const s=(this.veiculo.marca+"-"+this.veiculo.modelo+"-"+this.veiculo.ano_modelo+"-"+this.veiculo.cor+" "+this.veiculo.combustivel+" "+this.veiculo.transmissao).toLowerCase(),r=window.location.href,h=new URL(r).hostname;if(h=="teste.regionalmotors.com.br"||h=="regionalmotors.com.br"||h=="regionalmotors"){const u=`/verveiculo?id=${this.veiculo.id}/${s}`;this.$router.replace(u),l+=" - Regional Motors"}else{const u=`/loja/${this.id}/verveiculorevenda?id=${this.veiculo.id}/${s}`;this.$router.replace(u),l+=" - "+this.veiculo.email}document.title=l;let c=document.querySelector('meta[name="description"]');c?c.setAttribute("content",l):(c=document.createElement("meta"),c.name="description",c.content=l,document.getElementsByTagName("head")[0].appendChild(c)),this.veiculo&&(this.showTheVerVeiculos=!1),this.veiculo!=null&&(this.veiculo.foto1&&this.veiculos.push({image:this.veiculo.foto1}),this.veiculo.foto2&&this.veiculos.push({image:this.veiculo.foto2}),this.veiculo.foto3&&this.veiculos.push({image:this.veiculo.foto3}),this.veiculo.foto4&&this.veiculos.push({image:this.veiculo.foto4}),this.veiculo.foto5&&this.veiculos.push({image:this.veiculo.foto5}),this.veiculo.foto6&&this.veiculos.push({image:this.veiculo.foto6}),this.veiculo.foto7&&this.veiculos.push({image:this.veiculo.foto7}),this.veiculo.foto8&&this.veiculos.push({image:this.veiculo.foto8}),this.veiculo.foto9&&this.veiculos.push({image:this.veiculo.foto9}),this.veiculo.foto10&&this.veiculos.push({image:this.veiculo.foto10}))},async created(){this.Api_CategOpcionais=await T()},beforeDestroy(){window.removeEventListener("resize",this.debouncedHandleResize)},methods:{async mostrarContato(){this.mostraContato=!0,await g("api/anuncios/contadorContacto/",this.veiculo.id)},async enviarMsg(){await g("api/anuncios/contadorMensagem/",this.veiculo.id)},handleScroll(){window.scrollY==0||window.pageYOffset==0?this.isVisible=!1:this.isVisible=!0},listOpcionais(p){return this.veiculo.opcionais_id.filter(l=>l.categoria_opcional_id==p)},debouncedHandleResize(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.handleResize()},250)},handleResize(){this.screenWidth=window.innerWidth,this.screenWidth<=435?this.splideOptions={type:"carousel",perPage:1,pagination:!1}:435<this.screenWidth&&this.screenWidth<=568?this.splideOptions={type:"carousel",perPage:2,pagination:!1}:568<this.screenWidth&&this.screenWidth<=900?this.splideOptions={type:"carousel",perPage:2,pagination:!1}:900<this.screenWidth&&(this.splideOptions={type:"carousel",perPage:3,pagination:!1})},visitarLoja(){this.$router.push({path:"/loja/"+this.id})}}},A={class:"col-12 col-lg-12"},E={class:"",style:{position:"relative"}},L={class:"",style:{"background-color":"#e3e3e3",border:"3px solid transparent","border-top":"none","border-bottom":"none"}},M=["href","data-caption"],P=["src","alt"],j={style:{position:"relative"},class:"row titles-em-card p-0 m-0 col-12 col-lg-10 col-md-10 mx-auto"},B={class:"col-12 px-md-3 mb-3"},N={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},D={class:"p-4"},F={style:{"font-size":"30px","margin-bottom":"5px"}},q={style:{color:"crimson"}},H={class:"row"},I={class:"my-3",style:{"font-weight":"600",opacity:"0.8"}},Y={class:"col-6 col-lg-4"},J={class:"mb-2"},K=o("p",{class:"rotulo"},"Cidade",-1),U={class:"valor-rotulo"},G={class:"mb-2"},Q=o("p",{class:"rotulo"},"Ano",-1),X={class:"valor-rotulo"},Z={class:"mb-2"},oo=o("p",{class:"rotulo"},"Cor",-1),so={class:"valor-rotulo"},eo={class:"col-6 col-lg-4"},io={class:"mb-2"},to=o("p",{class:"rotulo"},"KM",-1),lo={class:"valor-rotulo"},co={class:"mb-2"},no=o("p",{class:"rotulo"},"Combustível",-1),ao={class:"valor-rotulo"},ro={class:"col-6 col-lg-4"},ho={class:"mb-2"},uo=o("p",{class:"rotulo"},"Câmbio",-1),po={class:"valor-rotulo"},_o=o("div",null,[o("hr")],-1),vo=o("p",{class:"rotulo"},"Sobre este carro",-1),mo={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},fo={class:"p-4"},go=o("div",null,[o("p",{class:"rotulo"},"Itens de Veículo")],-1),bo={class:"row pt-2"},wo={class:"col-12 col-md-6 col-lg-6 mb-3 p-0"},yo={class:"mb-1 d-none mx-2"},xo={class:"mb-1 mx-2"},Co=o("img",{src:S,width:"22",style:{"margin-top":"-3px"}},null,-1),Vo={class:"mb-3 rounded-3 px-0 bg-white card-ver-form",style:{"box-shadow":"0px 0px 8px 0px rgba(0, 0, 0, 0.2)",overflow:"hidden"}},ko={class:"p-4"},To=o("div",null,[o("p",{class:"rotulo"},"Sobre o vendedor")],-1),zo={class:"my-",style:{opacity:"0.7"}},Oo={class:"row p-0"},So={class:"col-lg-6 mb-2"},Wo={class:"m-0 pt-1"},Ro={class:"pt-1 mb-1"},Ao={class:"col-lg-6 mb-3"},Eo={class:"col-lg-8 col-md-10 p-0"},Lo={style:{height:"50px"}},Mo=["src"],Po={class:"py-2"},jo={style:{color:"#000","font-weight":"600"}},Bo={key:0,style:{color:"#000","font-weight":"600"}},No={class:"mb-1",style:{opacity:"0.7"}},Do=o("span",{class:"fw-bold"},"Telefone:",-1),Fo={class:"mb-1",style:{opacity:"0.7"}},qo=o("span",{class:"fw-bold"},"Celular:",-1),Ho={class:"mb-2",style:{opacity:"0.7"}},Io=o("span",{class:"fw-bold"},"WhatsApp:",-1),Yo=["href"],Jo={class:"btn py-3 text-center rounded-3",style:{width:"200px","background-color":"#5fcb71"}},Ko=o("img",{src:W,width:"32",style:{"margin-top":"-3px"}},null,-1),Uo={style:{color:"#fff","font-weight":"600"}},Go=o("span",{style:{"font-weight":"bold","font-size":"14px"}},[o("br"),o("button",{class:"btn btn-danger btn-sm my-3 mb-2"},"Ver contato")],-1),Qo={style:{"font-size":"14px","font-weight":"bold",opacity:"0.7"}};function Xo(p,a,l,C,s,r){const h=m("loader"),c=m("splide-slide"),u=m("splide");return t(),n(_,null,[b(o("div",null,[y(h)],512),[[w,s.showTheVerVeiculos]]),b(o("div",null,[o("div",A,[o("div",E,[y(u,{options:s.splideOptions},{default:x(()=>[(t(!0),n(_,null,f(s.veiculos,(i,v)=>(t(),O(c,{key:v,class:"custom-slide px-0"},{default:x(()=>[o("div",L,[o("a",{href:i.image+"detalhe_mini.jpg","data-fancybox":"minha-galeria","data-caption":`${s.veiculo.marca} - ${s.veiculo.modelo}`},[o("img",{src:i.image+"destaque.jpg",alt:`${s.veiculo.marca} - ${s.veiculo.modelo}`,class:"custom-image"},null,8,P)],8,M)])]),_:2},1024))),128))]),_:1},8,["options"])])]),o("div",j,[o("div",B,[o("div",N,[o("div",D,[o("div",null,[o("h1",F,[o("strong",null,[d(e(s.veiculo.marca)+" ",1),o("span",q,e(s.veiculo.modelo),1)])])]),o("div",H,[o("div",null,[o("h5",I," R$ "+e(s.veiculo.valor_preco),1)]),o("div",Y,[o("div",J,[K,o("p",U,e(s.veiculo.cidade)+" - "+e(s.veiculo.uf),1)]),o("div",G,[Q,o("p",X,e(s.veiculo.ano_modelo),1)]),o("div",Z,[oo,o("p",so,e(s.veiculo.cor),1)])]),o("div",eo,[o("div",io,[to,o("p",lo,e(s.veiculo.km),1)]),o("div",co,[no,o("p",ao,e(s.veiculo.combustivel),1)])]),o("div",ro,[o("div",ho,[uo,o("p",po,e(s.veiculo.transmissao),1)])]),_o,o("div",null,[vo,o("p",null,e(s.veiculo.descricao),1)])])])]),o("div",mo,[o("div",fo,[go,o("div",bo,[(t(!0),n(_,null,f(s.Api_CategOpcionais,i=>(t(),n("div",wo,[o("p",yo,[o("b",null,e(i.nome),1)]),(t(!0),n(_,null,f(r.listOpcionais(i.id),v=>(t(),n("div",null,[o("p",xo,[Co,d(" "+e(v.nome),1)])]))),256))]))),256))])])]),o("div",Vo,[o("div",ko,[To,o("div",zo,[o("div",Oo,[o("div",So,[o("div",null,[o("h3",Wo,e(s.veiculo.empresa),1),o("p",Ro,e(s.veiculo.cidade)+", "+e(s.veiculo.uf),1)])]),o("div",Ao,[o("div",Eo,[o("div",Lo,[o("img",{src:s.veiculo.foto,class:"img-fluid",style:{height:"100%"}},null,8,Mo)])])])]),o("div",Po,[o("span",jo,[s.mostraContato?(t(),n("span",Bo,[o("p",No,[Do,d(" "+e(s.veiculo.celular),1)]),o("p",Fo,[qo,d(" "+e(s.veiculo.telefone),1)]),o("p",Ho,[Io,d(" "+e(s.veiculo.whatsapp),1)]),o("a",{href:`https://api.whatsapp.com/send?phone=${s.veiculo.whatsapp}&text=testando`,target:"_blank"},[o("button",Jo,[Ko,o("span",Uo,[o("span",{style:{"font-size":"14px","font-weight":"bold"},onClick:a[0]||(a[0]=(...i)=>r.enviarMsg&&r.enviarMsg(...i))}," Enviar mensagem ")])])],8,Yo)])):(t(),n("span",{key:1,style:{cursor:"pointer"},onClick:a[1]||(a[1]=(...i)=>r.mostrarContato&&r.mostrarContato(...i))},[d(" (37)... "),Go]))])]),o("p",Qo,e(s.veiculo.tipo_anunciante),1)])])])])])],512),[[w,s.veiculo]])],64)}const ts=z(R,[["render",Xo]]);export{ts as T};
