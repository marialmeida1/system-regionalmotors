import{_ as x,q as T,o as c,c as r,a as o,t as e,e as k,F,f as C}from"./index-5f4d2e43.js";import{_ as E}from"./whatsapp-8361b3fb.js";const A={name:"TheFooter",data(){return{infos:null}},methods:{async fetchAnunciante(){try{const t=localStorage.getItem("storeId"),n=await T(t);this.infos=n.data}catch(t){console.error("Erro ao buscar dados do anunciante:",t)}}},async mounted(){await this.fetchAnunciante()}},B={id:"footer"},M={class:"rodape-dark"},N={class:"row"},V={class:"col-12 col-md-6 col-lg-4 border-smoll"},I={class:"pb-2"},S=["src"],j={class:"col-12 col-md-6 col-lg-4 border-smoll"},q=o("h5",{class:"pb-2"},"Endereço:",-1),D={class:"pt-1 mb-4"},O={class:"p-0 mb-1"},P={class:"p-0 mb-1"},R={class:"p-0 mb-1"},W={class:"col-12 col-md-4 col-lg-4 border-smoll"},z=o("h5",{class:"pb-2"},"Contato:",-1),G={class:"p-0 mb-1"},H={class:"p-0 mb-1"},J=["href"],K={class:"btn py-1 text-center rounded-2 btn-whatsapp mb-4"},L=o("img",{src:E,width:"24",class:"pe-1"},null,-1),Q={class:"whatsapp-text"},U={class:"pt-4 d-flex justify-content-center"},X={class:"col-12 col-md-3 col-lg-3 text-center mb-1"},Y=["href"],Z=o("i",{class:"fab fa-instagram fa-lg",style:{color:"#f0bd84"}},null,-1),$=[Z],oo=["href"],so=o("i",{class:"fab fa-facebook-f fa-lg",style:{color:"#8fd1f7"}},null,-1),eo=[so],to=o("div",{class:"py-3 text-center footer-powered"},[C(" © Powered by "),o("a",{href:"https://regionalmotors.com.br/"},"Regional Motors")],-1);function no(t,n,co,ro,s,ao){var a,i,l,_,d,h,p,m,f,b,u,g,v,y;return c(),r(F,null,[o("footer",B,[o("div",M,[o("div",N,[o("div",V,[o("h5",I,e((a=s.infos)==null?void 0:a.nome_empresa),1),o("img",{src:`https://api.regionalmotors.com.br/${(i=s.infos)==null?void 0:i.foto}`,class:"img-contain mb-4"},null,8,S)]),o("div",j,[q,o("div",D,[o("p",O,e((l=s.infos)==null?void 0:l.endereco_comercial)+", "+e((_=s.infos)==null?void 0:_.numero_comercial)+", "+e((d=s.infos)==null?void 0:d.complemento_comercial),1),o("p",P,e((h=s.infos)==null?void 0:h.bairro_comercial)+", "+e((p=s.infos)==null?void 0:p.cep_comercial),1),o("p",R,e((m=s.infos)==null?void 0:m.cidade_nome)+", "+e((f=s.infos)==null?void 0:f.estado_nome),1)])]),o("div",W,[z,o("p",G,"Telefone: "+e((b=s.infos)==null?void 0:b.telefone),1),o("p",H,"Celular: "+e((u=s.infos)==null?void 0:u.celular),1),o("a",{href:`https://api.whatsapp.com/send?phone=${(g=s.infos)==null?void 0:g.whatsapp}&text=Olá! Tudo bem? Estou interessado em saber mais detalhes sobre os carros disponíveis para venda.`,target:"_blank"},[o("button",K,[L,o("span",Q,[o("span",{class:"whatsapp-button",onClick:n[0]||(n[0]=(...w)=>t.enviarMsg&&t.enviarMsg(...w))},"Whatsapp")])])],8,J)])]),o("div",U,[o("div",X,[(v=s.infos)!=null&&v.instagram?(c(),r("a",{key:0,class:"icon-border me-3",href:s.infos.instagram,target:"_blank"},$,8,Y)):k("",!0),(y=s.infos)!=null&&y.facebook?(c(),r("a",{key:1,class:"icon-border",href:s.infos.facebook,target:"_blank"},eo,8,oo)):k("",!0)])])])]),to],64)}const _o=x(A,[["render",no]]);export{_o as T};
