import{_ as y,O as k,D as x,P as w,l as A,i as C,k as V,H as S,I as M,J as U,s as O,K as q,x as D,y as T,o as i,c as l,a as o,d as r,M as n,F as d,j as p,v as h,N as v,f,t as _,q as N,e as F}from"./index-0ae84d75.js";const z={name:"TheCriarAnuncio",data(){return{id:"",tipo_veiculo:"",categoria_id:"",photos:[],Api_categorias:[],Api_transmissao:[],Api_combustivel:[],Api_tecnologia:[],Api_cores:[],Api_Seguranca:[],Api_Conforto:[],Api_cores:[],Api_CategOpcionais:[],Api_Opcionais:[],portas:[2,4,6,8,10],Api_fabricante:["BMW","Suzuki","Toyota"],anos:[],marcas:[],modelos:"",marca_id:null,modelo_id:"",ano_modelo:"",desc:"",previewImage:null,estado:"",cidade:"",fabricante:"",ano_fabricante:"",num_portas:"",cor:"",transmissao:"",combustivel:"",kilometro:"",desc:"",conforto:[],seguranca:[],situacao_veiculo:"",vitrine:"",destaque:"",tecnologia:"",mostrar_preco:"sim",valor_preco:"",selecionados:[],Api_CategOpcionais:[],selecionados:[],dropdownState:{}}},methods:{getVitrine(){return this.vitrine?1:0},getDestaque(){return this.destaque?1:0},fecharModal(){this.$store.state.modalCriarAnuncio.hide()},async criar(){this.titulo=this.marca_id+" "+this.modelo_id+" - "+this.ano_modelo;var a=JSON.stringify(this.selecionados);if(this.kilometro==""&&this.situacao_veiculo=="1"&&(this.kilometro="0"),console.log(this.tipo_veiculo),console.log(this.categoria_id),this.situacao_veiculo!==""&&this.tipo_veiculo!==""&&this.kilometro!==""){const b={titulo:this.titulo,tipo_veiculo:this.tipo_veiculo,tecnologia:this.tecnologia,marca_id:this.marca_id,modelo_id:this.modelo_id,numero_cliques:"2",situacao_veiculo:this.situacao_veiculo,anunciante_id:this.$store.state.anunciante_id,categoria_id:this.categoria_id,data_inicio:"20-02-2021",data_fim:"20-02-2022",ordenacao:"2",status_publicacao:"1",status_pagamento:"1",tipo:"2",vendido:"1",vitrine:this.getVitrine(),destaque_busca:this.getDestaque(),cep:"12352",estado_id:"2",cidade_id:"3",empresa:"null",tipo_preco:"1",valor_preco:this.valor_preco,mostrar_preco:this.mostrar_preco,fabricante_id:"2",ano_fabricacao:this.ano_fabricante,ano_modelo:this.ano_modelo,carroceria:"null",estilo:"null",portas:this.num_portas,cilindros:"4",motor:"2",cor:this.cor,transmissao:this.transmissao,combustivel:this.combustivel,placa:"null",km:this.kilometro,sinistrado:"null",opcionais_id:a,descricao:this.desc};try{const m=await k(b);if(m){this.$store.state.anuncios=await x(),this.id=m.id,this.$emit("refreshAnuncio",this.id),this.tipo_veiculo="",this.marca_id="",this.modelo_id="",this.situacao_veiculo="",this.categoria_id="",this.estado="",this.cidade="",this.empresa="",this.valor_preco="",this.fabricante="",this.ano_fabricante="",this.ano_modelo="",this.carroceria="",this.estilo="",this.num_portas="",this.cor="",this.transmissao="",this.combustivel="",this.kilometro="",this.conforto="",this.vitrine=!1,this.destaque=!1,this.fecharModal();var s=document.getElementById("CarregarFotos");this.$store.state.modalCarregarFoto=new bootstrap.Modal(s),this.$store.state.modalCarregarFoto.show()}else this.showErrorMessage=!0}catch(m){console.error("Erro na requisição:",m)}}else w("Preencha todos os campos!")},showCarregarFotos(){},formatarNumero(){let a=this.valor_preco.replace(/[^\d.]/g,"");const s=a.split(".");a=s.shift()+(s.length>0?"."+s.join(""):""),a=a.replace(/\./g,""),a=a.replace(/\B(?=(\d{3})+(?!\d))/g,"."),this.valor_preco=a},toggleDropdown(a){this.$data.dropdownState[a]=!this.$data.dropdownState[a],this.$forceUpdate()},isDropdownOpen(a){return this.$data.dropdownState[a]||!1},filterOpcionais(a){return this.Api_Opcionais.filter(s=>s.categoria_opcional_id==a)},filterMarcas(a){return this.$store.state.marcas.filter(s=>s.tipo_veiculo_id==a)},filterModelos(a){return this.$store.state.modelos.filter(s=>s.id_marca==a)}},async created(){this.$store.state.modelos=await A(),this.$store.state.marcas=await C(),this.Api_categorias=await V(),this.Api_combustivel=await S(),this.Api_transmissao=await M(),this.Api_tecnologia=await U(),this.$store.state.tipo_veiculo=await O(),this.Api_cores=await q(),this.Api_CategOpcionais=await D(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais,this.Api_Opcionais=await T();for(let a=2025;1990<a;a--)this.anos.push(a)},mounted(){}},I={class:"modal fade",id:"IDaddCarro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},P={class:"modal-dialog"},B={class:"modal-content"},E={class:"bg-dar"},K=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[o("span",{class:"fas fa-bullhorn py-2 pt-0"}),f(),o("b",null,"Criar Anúncio")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),L={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},j={class:"row"},J=o("div",{class:"p-2 pt-0 row mb-2 mt-md-1 mt-lg-1",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),H={class:"mb-3"},R=o("label",{for:"marca",class:"form-label"},"Situaçao do Veiculo",-1),W=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),G=o("option",{value:"1"},"Novo",-1),Q=o("option",{value:"2"},"Usado",-1),X=[W,G,Q],Y={class:"mb-3"},Z=o("label",{for:"marca",class:"form-label"},"Tipo de Veiculo",-1),$=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),oo=["value"],eo={class:"mb-3"},so=o("label",{for:"preco",class:"form-label"},"Tecnologia",-1),to=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),io=["value"],lo={class:"mb-3"},ao=o("label",{for:"nome",class:"form-label"},"Categoria",-1),ro=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),co=["value"],no={class:"mb-3"},po=o("label",{for:"marca",class:"form-label"},"Marca",-1),_o=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),uo=["value"],mo={class:"mb-3"},ho=o("label",{for:"modelo",class:"form-label"},"Modelo",-1),vo=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),bo=["value"],fo={class:"mb-3"},go=o("label",{for:"nome",class:"form-label"},"Ano de Fabricaçao",-1),yo=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ko=["value"],xo={class:"mb-3"},wo=o("label",{for:"nome",class:"form-label"},"Ano do Modelo",-1),Ao=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Co=["value"],Vo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Preço "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),So={class:"mb-3"},Mo=o("label",{for:"preco",class:"form-label"},"Preço (R$)",-1),Uo={class:"mb-3"},Oo=o("label",{for:"nome",class:"form-label"},"Mostrar Preço",-1),qo=o("option",{value:"sim",selected:""},"Sim",-1),Do=o("option",{value:"nao"},"Não",-1),To=[qo,Do],No=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Caracteristicas do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Fo={class:"mb-3"},zo=o("label",{for:"nome",class:"form-label"},"Cor",-1),Io=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Po=["value"],Bo={class:"mb-3"},Eo=o("label",{for:"nome",class:"form-label"},"Numero de Portas",-1),Ko=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Lo=["value"],jo={class:"mb-3"},Jo=o("label",{for:"preco",class:"form-label"},"Transmissao",-1),Ho=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Ro=["value"],Wo={class:"mb-3"},Go=o("label",{for:"preco",class:"form-label"},"Combustivel",-1),Qo=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Xo=["value"],Yo={class:"mb-3"},Zo=o("label",{for:"preco",class:"form-label"},"Kilometragem",-1),$o=["disabled","required"],oe=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px","background-color":"crimson !important"}}," Privilegios "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),ee={class:"mb-2 mt-2 check"},se=o("label",{for:"vitrine",class:"ms-2 form-label"},"Adicionar na vitrine",-1),te={class:"mb-2 check"},ie=o("label",{for:"destaque",class:"ms-2 form-label"},"Marcar como destaque",-1),le=o("div",{class:"p-2 pt-0 row mt-md-4 mt-lg-4 mb-2",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Opcionais & Itens de Serie "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),ae={class:"mb-3"},re=["onClick"],ce={class:"ms-2"},ne={key:0,class:"mb-2 pt-2"},de=["id","value"],pe=["for"],_e={class:"mb-3"},ue=o("label",{for:"desc",class:"form-label"},[f("Descriçao "),o("span",{style:{opacity:"0.6"}},"(Opcional)")],-1),me={class:"modal-footer"},he={style:{display:"flex","flex-wrap":"wrap"}},ve=o("div",{class:"col-6"},[o("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"}," Cancelar ")],-1),be={class:"col-6"};function fe(a,s,b,m,t,c){return i(),l("div",I,[o("div",P,[o("div",B,[o("div",E,[K,o("div",L,[o("form",null,[o("div",j,[J,o("div",H,[o("div",null,[R,r(o("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>t.situacao_veiculo=e),class:"form-select"},X,512),[[n,t.situacao_veiculo]])])]),o("div",Y,[o("div",null,[Z,r(o("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>t.tipo_veiculo=e),class:"form-select"},[$,(i(!0),l(d,null,p(a.$store.state.tipo_veiculo,e=>(i(),l("option",{value:e.id,key:e.id},_(e.tipo_veiculo),9,oo))),128))],512),[[n,t.tipo_veiculo]])])]),o("div",eo,[so,r(o("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>t.tecnologia=e),class:"form-select"},[to,(i(!0),l(d,null,p(t.Api_tecnologia,e=>(i(),l("option",{value:e.id,key:e.id},_(e.tecnologia),9,io))),128))],512),[[n,t.tecnologia]])]),o("div",lo,[ao,r(o("select",{"onUpdate:modelValue":s[3]||(s[3]=e=>t.categoria_id=e),class:"form-select"},[ro,(i(!0),l(d,null,p(t.Api_categorias,e=>(i(),l("option",{value:e.id,key:e.id},_(e.nome),9,co))),128))],512),[[n,t.categoria_id]])]),o("div",no,[o("div",null,[po,r(o("select",{"onUpdate:modelValue":s[4]||(s[4]=e=>t.marca_id=e),class:"form-select"},[_o,(i(!0),l(d,null,p(c.filterMarcas(t.tipo_veiculo),e=>(i(),l("option",{value:e.id,key:e.id},_(e.nome_marca),9,uo))),128))],512),[[n,t.marca_id]])])]),o("div",mo,[o("div",null,[ho,r(o("select",{"onUpdate:modelValue":s[5]||(s[5]=e=>t.modelo_id=e),class:"form-select"},[vo,(i(!0),l(d,null,p(c.filterModelos(t.marca_id),e=>(i(),l("option",{value:e.id,key:e.id},_(e.nome_modelo),9,bo))),128))],512),[[n,t.modelo_id]])])]),o("div",fo,[go,r(o("select",{class:"form-select","onUpdate:modelValue":s[6]||(s[6]=e=>t.ano_fabricante=e)},[yo,(i(!0),l(d,null,p(t.anos,(e,u)=>(i(),l("option",{value:e,key:u},_(e),9,ko))),128))],512),[[n,t.ano_fabricante]])]),o("div",xo,[wo,r(o("select",{class:"form-select","onUpdate:modelValue":s[7]||(s[7]=e=>t.ano_modelo=e)},[Ao,(i(!0),l(d,null,p(t.anos,(e,u)=>(i(),l("option",{value:e,key:u},_(e),9,Co))),128))],512),[[n,t.ano_modelo]])]),Vo,o("div",So,[Mo,r(o("input",{type:"text",class:"text form-control",id:"preco","onUpdate:modelValue":s[8]||(s[8]=e=>t.valor_preco=e),onKeyup:s[9]||(s[9]=(...e)=>c.formatarNumero&&c.formatarNumero(...e)),placeholder:""},null,544),[[h,t.valor_preco]])]),o("div",Uo,[Oo,r(o("select",{"onUpdate:modelValue":s[10]||(s[10]=e=>t.mostrar_preco=e),class:"form-select"},To,512),[[n,t.mostrar_preco]])]),No,o("div",Fo,[zo,r(o("select",{"onUpdate:modelValue":s[11]||(s[11]=e=>t.cor=e),class:"form-select"},[Io,(i(!0),l(d,null,p(t.Api_cores,e=>(i(),l("option",{value:e.id,key:e.id},_(e.cor),9,Po))),128))],512),[[n,t.cor]])]),o("div",Bo,[Eo,r(o("select",{"onUpdate:modelValue":s[12]||(s[12]=e=>t.num_portas=e),class:"form-select"},[Ko,(i(!0),l(d,null,p(t.portas,(e,u)=>(i(),l("option",{value:e,key:u},_(e),9,Lo))),128))],512),[[n,t.num_portas]])]),o("div",jo,[Jo,r(o("select",{"onUpdate:modelValue":s[13]||(s[13]=e=>t.transmissao=e),class:"form-select"},[Ho,(i(!0),l(d,null,p(t.Api_transmissao,e=>(i(),l("option",{value:e.id,key:e.id},_(e.transmissao),9,Ro))),128))],512),[[n,t.transmissao]])]),o("div",Wo,[Go,r(o("select",{"onUpdate:modelValue":s[14]||(s[14]=e=>t.combustivel=e),class:"form-select"},[Qo,(i(!0),l(d,null,p(t.Api_combustivel,e=>(i(),l("option",{value:e.id,key:e.id},_(e.combustivel),9,Xo))),128))],512),[[n,t.combustivel]])]),o("div",Yo,[Zo,r(o("input",{type:"number",class:"text form-control",id:"preco","onUpdate:modelValue":s[15]||(s[15]=e=>t.kilometro=e),disabled:t.situacao_veiculo==="1",required:t.situacao_veiculo==="2",min:"0",max:"100"},null,8,$o),[[h,t.kilometro]])]),oe,o("div",ee,[r(o("input",{type:"checkbox","onUpdate:modelValue":s[16]||(s[16]=e=>t.vitrine=e),id:"vitrine",onClick:s[17]||(s[17]=(...e)=>c.getVitrine&&c.getVitrine(...e))},null,512),[[v,t.vitrine]]),se]),o("div",te,[r(o("input",{type:"checkbox","onUpdate:modelValue":s[18]||(s[18]=e=>t.destaque=e),id:"destaque",onClick:s[19]||(s[19]=(...e)=>c.getDestaque&&c.getDestaque(...e))},null,512),[[v,t.destaque]]),ie]),le,o("div",ae,[(i(!0),l(d,null,p(t.Api_CategOpcionais,e=>(i(),l("div",{key:e.id},[o("p",{onClick:u=>c.toggleDropdown(e.id),style:{cursor:"pointer",opacity:"1",margin:"0"}},[o("span",{class:N({"arrow-down":c.isDropdownOpen(e.id)})},"►",2),o("span",ce,_(e.nome),1)],8,re),c.isDropdownOpen(e.id)?(i(),l("div",ne,[(i(!0),l(d,null,p(c.filterOpcionais(e.id),u=>(i(),l("div",{key:u.id,class:"ps-4"},[r(o("input",{type:"checkbox",id:"checkbox_"+u.id,value:u.id,"onUpdate:modelValue":s[20]||(s[20]=g=>t.selecionados=g),class:"me-2"},null,8,de),[[v,t.selecionados]]),o("label",{for:"checkbox_"+u.id},_(u.nome),9,pe)]))),128))])):F("",!0)]))),128))]),o("div",_e,[ue,r(o("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":s[21]||(s[21]=e=>t.desc=e)},null,512),[[h,t.desc]])])])])]),o("div",me,[o("div",he,[ve,o("div",be,[o("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[22]||(s[22]=e=>c.criar())},"Criar")])])])])])])])}const ye=y(z,[["render",fe]]);export{ye as T};
