import{_ as e,a as s}from"./foto1-6ed4210d.js";import{_ as t,o as a,c as o,h as r}from"./index-56256d67.js";const i="/banner/foto-mobile2.jpg",n="/banner/foto2.jpg";const c={name:"TheBanner",mounted(){new bootstrap.Carousel(document.getElementById("carouselExample"),{}),setTimeout(()=>{document.getElementById("carouselExample").classList.remove("invisible")},100)}},l=s,d=i,u=r('<div class="bg-white" style="heigh:250px;border-botto:1px solid rgba(165, 165, 165, 0.0);"><div id="carregarBanner" class="text-center col-12" hidden> carregando... </div><div class="bg-white card-banner0"><div id="carouselExample" class="carousel slide invisible" data-bs-ride="carousel" data-bs-interval="4000"><div class="carousel-inner"><div class="carousel-item active bg-dark"><div class="box-carousel-1"><picture class="banner"><source media="(max-width: 568px)" srcset="'+l+'"><img src="'+e+'" alt="Banner" style="width:100%;height:100%;object-fit:cover;"></picture></div></div><div class="carousel-item bg-dark"><div class="box-carousel-2"><picture class="banner"><source media="(max-width: 568px)" srcset="'+d+'"><img src="'+n+'" alt="Banner" style="width:100%;height:100%;object-fit:cover;"></picture></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></div></div>',1),p=[u];function v(_,b,m,h,x,g){return a(),o("div",null,p)}const B=t(c,[["render",v]]);export{B as T};
