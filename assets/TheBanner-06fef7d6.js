import{_ as e,o as s,c as t,h as a}from"./index-7d06fc67.js";const n="/banner/foto-mobile1.jpg",o="/banner/foto1.jpg",r="/banner/foto-mobile2.jpg",c="/banner/foto2.jpg";const i={name:"TheBanner",mounted(){new bootstrap.Carousel(document.getElementById("carouselExample"),{}),setTimeout(()=>{document.getElementById("carouselExample").classList.remove("invisible")},100)}},l=n,d=r,u=a('<div class="bg-white size-banner"><div id="carregarBanner" class="text-center col-12" hidden>carregando...</div><div class="bg-white card-banner0"><div id="carouselExample" class="carousel slide invisible" data-bs-ride="carousel" data-bs-interval="4000"><div class="carousel-inner"><div class="carousel-item active bg-dark"><div class="box-carousel-1"><picture class="banner"><source media="(max-width: 568px)" srcset="'+l+'"><img src="'+o+'" alt="Banner" style="width:100%;height:100%;object-fit:cover;"></picture></div></div><div class="carousel-item bg-dark"><div class="box-carousel-2"><picture class="banner"><source media="(max-width: 568px)" srcset="'+d+'"><img src="'+c+'" alt="Banner" style="width:100%;height:100%;object-fit:cover;"></picture></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></div></div>',1),p=[u];function v(b,_,m,h,x,g){return s(),t("div",null,p)}const y=e(i,[["render",v]]);export{y as T};
