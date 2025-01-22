import{j as C}from"./loader-930b6088.js";import{_ as A}from"./whatsapp-8361b3fb.js";import{_ as B,o as c,c as i,a as o,t as e,f as T,F as E,d as M}from"./index-3c85704b.js";const N={name:"TheFooter",data(){return{infos:null}},methods:{async fetchAnunciante(){try{const t=window.location.href,r=new URL(t).pathname.split("/")[2],a=await C(r);this.infos=a.data}catch(t){console.error("Erro ao buscar dados do anunciante:",t)}}},async mounted(){await this.fetchAnunciante()}},V={id:"footer"},j={class:"rodape-dark"},R={class:"row"},D={class:"col-12 col-md-6 col-lg-4 border-smoll"},L={class:"pb-2"},P=["src"],S={class:"col-12 col-md-6 col-lg-4 border-smoll"},U=o("h5",{class:"pb-2"},"Endereço:",-1),W={class:"pt-1 mb-4"},q={class:"p-0 mb-1"},z={class:"p-0 mb-1"},G={class:"p-0 mb-1"},H={class:"col-12 col-md-4 col-lg-4 border-smoll"},I=o("h5",{class:"pb-2"},"Contato:",-1),J={class:"p-0 mb-1"},K={class:"p-0 mb-1"},O=["href"],Q={class:"btn py-1 text-center rounded-2 btn-whatsapp mb-4"},X=o("img",{src:A,width:"24",class:"pe-1"},null,-1),Y={class:"whatsapp-text"},Z={class:"pt-4 d-flex justify-content-center"},$={class:"col-12 col-md-3 col-lg-3 text-center mb-1"},oo=["href"],so=o("i",{class:"fab fa-instagram fa-lg",style:{color:"#f0bd84"}},null,-1),eo=[so],to=["href"],no=o("i",{class:"fab fa-facebook-f fa-lg",style:{color:"#8fd1f7"}},null,-1),co=[no],io=o("div",{class:"py-3 text-center footer-powered"},[M(" © Powered by "),o("a",{href:"https://regionalmotors.com.br/"},"Regional Motors")],-1);function ro(t,n,r,a,s,ao){var l,_,d,h,p,m,f,b,u,g,w,y,v,k,x;return c(),i(E,null,[o("footer",V,[o("div",j,[o("div",R,[o("div",D,[o("h5",L,e((l=s.infos)==null?void 0:l.nome_empresa),1),o("img",{src:`https://api.regionalmotors.com.br/${(_=s.infos)==null?void 0:_.foto}`,class:"img-contain mb-4"},null,8,P)]),o("div",S,[U,o("div",W,[o("p",q,e((d=s.infos)==null?void 0:d.endereco_comercial)+", "+e((h=s.infos)==null?void 0:h.numero_comercial)+", "+e((p=s.infos)==null?void 0:p.complemento_comercial),1),o("p",z,e((m=s.infos)==null?void 0:m.bairro_comercial)+", "+e((f=s.infos)==null?void 0:f.cep_comercial),1),o("p",G,e((b=s.infos)==null?void 0:b.cidade_nome)+", "+e((u=s.infos)==null?void 0:u.regiao_nome)+", "+e((g=s.infos)==null?void 0:g.estado_nome),1)])]),o("div",H,[I,o("p",J,"Telefone: "+e((w=s.infos)==null?void 0:w.telefone),1),o("p",K,"Celular: "+e((y=s.infos)==null?void 0:y.celular),1),o("a",{href:`https://api.whatsapp.com/send?phone=${(v=s.infos)==null?void 0:v.whatsapp}&text=testando`,target:"_blank"},[o("button",Q,[X,o("span",Y,[o("span",{class:"whatsapp-button",onClick:n[0]||(n[0]=(...F)=>t.enviarMsg&&t.enviarMsg(...F))},"Whatsapp")])])],8,O)])]),o("div",Z,[o("div",$,[(k=s.infos)!=null&&k.instagram?(c(),i("a",{key:0,class:"icon-border me-3",href:s.infos.instagram},eo,8,oo)):T("",!0),(x=s.infos)!=null&&x.facebook?(c(),i("a",{key:1,class:"icon-border",href:s.infos.facebook},co,8,to)):T("",!0)])])])]),io],64)}const po=B(N,[["render",ro]]);export{po as T};
