import{_ as F,A,o as c,c as a,a as o,t as e,e as x,F as C,f as E}from"./index-bc603e74.js";import{_ as B}from"./whatsapp-8361b3fb.js";const M={name:"TheFooter",data(){return{infos:null}},methods:{async fetchAnunciante(){try{const t=window.location.href,r=new URL(t).pathname.split("/")[2],i=await A(r);this.infos=i.data}catch(t){console.error("Erro ao buscar dados do anunciante:",t)}}},async mounted(){await this.fetchAnunciante()}},N={id:"footer"},V={class:"rodape-dark"},R={class:"row"},j={class:"col-12 col-md-6 col-lg-4 border-smoll"},D={class:"pb-2"},L=["src"],O={class:"col-12 col-md-6 col-lg-4 border-smoll"},P=o("h5",{class:"pb-2"},"Endereço:",-1),S={class:"pt-1 mb-4"},U={class:"p-0 mb-1"},W={class:"p-0 mb-1"},q={class:"p-0 mb-1"},z={class:"col-12 col-md-4 col-lg-4 border-smoll"},G=o("h5",{class:"pb-2"},"Contato:",-1),H={class:"p-0 mb-1"},I={class:"p-0 mb-1"},J=["href"],K={class:"btn py-1 text-center rounded-2 btn-whatsapp mb-4"},Q=o("img",{src:B,width:"24",class:"pe-1"},null,-1),X={class:"whatsapp-text"},Y={class:"pt-4 d-flex justify-content-center"},Z={class:"col-12 col-md-3 col-lg-3 text-center mb-1"},$=["href"],oo=o("i",{class:"fab fa-instagram fa-lg",style:{color:"#f0bd84"}},null,-1),so=[oo],eo=["href"],to=o("i",{class:"fab fa-facebook-f fa-lg",style:{color:"#8fd1f7"}},null,-1),no=[to],co=o("div",{class:"py-3 text-center footer-powered"},[E(" © Powered by "),o("a",{href:"https://regionalmotors.com.br/"},"Regional Motors")],-1);function ao(t,n,r,i,s,ro){var l,_,d,h,p,m,f,b,u,g,v,w,y,k;return c(),a(C,null,[o("footer",N,[o("div",V,[o("div",R,[o("div",j,[o("h5",D,e((l=s.infos)==null?void 0:l.nome_empresa),1),o("img",{src:`https://api.regionalmotors.com.br/${(_=s.infos)==null?void 0:_.foto}`,class:"img-contain mb-4"},null,8,L)]),o("div",O,[P,o("div",S,[o("p",U,e((d=s.infos)==null?void 0:d.endereco_comercial)+", "+e((h=s.infos)==null?void 0:h.numero_comercial)+", "+e((p=s.infos)==null?void 0:p.complemento_comercial),1),o("p",W,e((m=s.infos)==null?void 0:m.bairro_comercial)+", "+e((f=s.infos)==null?void 0:f.cep_comercial),1),o("p",q,e((b=s.infos)==null?void 0:b.cidade_nome)+", "+e((u=s.infos)==null?void 0:u.estado_nome),1)])]),o("div",z,[G,o("p",H,"Telefone: "+e((g=s.infos)==null?void 0:g.telefone),1),o("p",I,"Celular: "+e((v=s.infos)==null?void 0:v.celular),1),o("a",{href:`https://api.whatsapp.com/send?phone=${(w=s.infos)==null?void 0:w.whatsapp}&text=Olá! Tudo bem? Estou interessado em saber mais detalhes sobre os carros disponíveis para venda.`,target:"_blank"},[o("button",K,[Q,o("span",X,[o("span",{class:"whatsapp-button",onClick:n[0]||(n[0]=(...T)=>t.enviarMsg&&t.enviarMsg(...T))},"Whatsapp")])])],8,J)])]),o("div",Y,[o("div",Z,[(y=s.infos)!=null&&y.instagram?(c(),a("a",{key:0,class:"icon-border me-3",href:s.infos.instagram,target:"_blank"},so,8,$)):x("",!0),(k=s.infos)!=null&&k.facebook?(c(),a("a",{key:1,class:"icon-border",href:s.infos.facebook,target:"_blank"},no,8,eo)):x("",!0)])])])]),co],64)}const _o=F(M,[["render",ao]]);export{_o as T};
