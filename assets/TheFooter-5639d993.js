import{_ as c,r as n,o as d,c as _,a as o,b as e,w as t,t as p,F as f,h as u,f as a}from"./index-73dfe32b.js";const h={name:"TheFooter",data(){return{year:""}},methods:{getYear(){const l=new Date().getFullYear();this.year=l}},created(){this.getYear()}},g={class:"rodape-dark",style:{padding:"2em 3em"}},k={class:"row d-flex justify-content-evenly"},m={class:"col-12 col-md-6 col-lg-3 border-smoll links"},b=o("h5",{class:"mb-3 link-footer-title"},"Comprar",-1),v={class:"link-footer"},x={class:"link-footer"},y={class:"link-footer"},w={class:"link-footer"},C={class:"col-12 col-md-4 col-lg-3 links"},F=o("h5",{class:"mb-3 link-footer-title"},"Institucional",-1),M={class:"link-footer"},N={class:"link-footer"},S={class:"link-footer"},T={class:"link-footer"},R={class:"link-footer"},V=u('<div class="py-4 d-flex justify-content-center"><div class="col-12 col-md-3 col-lg-3 text-center mb-3 links"><a href="https://www.instagram.com/regionalmotors/" target="_blank"><div class="me-3 social" style="display:inline-block;width:45px;height:45px;border-radius:100px;border:2px solid rgba(255, 255, 255, 0.2);padding-top:10px;"><i class="fab fa-instagram fa-lg" style="color:#f0bd84;"></i></div></a><a href="https://www.youtube.com/@RegionalMotors" target="_blank"><div class="me-3 social" style="display:inline-block;width:45px;height:45px;border-radius:100px;border:2px solid rgba(255, 255, 255, 0.2);padding-top:10px;"><i class="fab fa-youtube fa-lg" style="color:#ff5969;"></i></div></a><a href="https://www.facebook.com/people/Regional-Motors/100095121334509/" target="_blank"><div class="social" style="display:inline-block;width:45px;height:45px;border-radius:100px;border:2px solid rgba(255, 255, 255, 0.2);padding-top:10px;"><i class="fab fa-facebook-f fa-lg" style="color:#8fd1f7;"></i></div></a></div></div>',1),Y={class:"py-3 text-center"};function B(i,l,U,$,r,j){const s=n("router-link");return d(),_(f,null,[o("footer",null,[o("div",g,[o("div",k,[o("div",m,[b,o("p",v,[e(s,{to:"/resultados?tipo_veiculo=carro&situacao_veiculo=1",class:"link"},{default:t(()=>[a("Carro Novos")]),_:1})]),o("p",x,[e(s,{to:"/resultados?tipo_veiculo=carro&situacao_veiculo=2",class:"link"},{default:t(()=>[a("Carro Usados")]),_:1})]),o("p",y,[e(s,{to:"/resultados?tipo_veiculo=moto&situacao_veiculo=1",class:"link"},{default:t(()=>[a("Motos Novas")]),_:1})]),o("p",w,[e(s,{to:"/resultados?tipo_veiculo=moto&situacao_veiculo=2",class:"link"},{default:t(()=>[a("Motos Usadas")]),_:1})])]),o("div",C,[F,o("p",M,[e(s,{to:"/termosuso",class:"link"},{default:t(()=>[a("Termos de Uso")]),_:1})]),o("p",N,[e(s,{to:"/privacidadeseguranca",class:"link"},{default:t(()=>[a("Politicas de Privacidade e Segurança")]),_:1})]),o("p",S,[e(s,{to:"/sobreregional",class:"link"},{default:t(()=>[a("Sobre a Regional Motors")]),_:1})]),o("p",T,[e(s,{to:"/segcomprar",class:"link"},{default:t(()=>[a("Segurança ao comprar")]),_:1})]),o("p",R,[e(s,{to:"/sobreempresa",class:"link"},{default:t(()=>[a("Sobre a empresa")]),_:1})])])]),V])]),o("div",Y,"© Copyright "+p(r.year)+" Regional Motors",1)],64)}const P=c(h,[["render",B]]);export{P as T};
