import{u as g,m as y,v as k,a as x,b as A,c as w,q as V,r as C,s as S,d as U,t as M,h as O,i as q}from"./loader-91d60271.js";import{_ as D,o as i,c as l,a as o,e as r,l as c,F as d,i as p,v,m as h,d as b,t as _,n as T,f as N}from"./index-ac526206.js";const z={name:"TheCriarAnuncio",data(){return{id:"",tipo_veiculo:"",categoria_id:"",photos:[],Api_categorias:[],Api_transmissao:[],Api_combustivel:[],Api_tecnologia:[],Api_cores:[],Api_Seguranca:[],Api_Conforto:[],Api_cores:[],Api_CategOpcionais:[],Api_Opcionais:[],portas:[2,4,6,8,10],Api_fabricante:["BMW","Suzuki","Toyota"],anos:[],marcas:[],modelos:"",marca_id:null,modelo_id:"",ano_modelo:"",desc:"",previewImage:null,estado:"",cidade:"",fabricante:"",ano_fabricante:"",num_portas:"",cor:"",transmissao:"",combustivel:"",kilometro:"",desc:"",conforto:[],seguranca:[],situacao_veiculo:"",vitrine:"",destaque:"",tecnologia:"",mostrar_preco:"sim",valor_preco:"",selecionados:[],Api_CategOpcionais:[],selecionados:[],dropdownState:{}}},methods:{getVitrine(){return this.vitrine?1:0},getDestaque(){return this.destaque?1:0},fecharModal(){this.$store.state.modalCriarAnuncio.hide()},async criar(){this.titulo=this.marca_id+" "+this.modelo_id+" - "+this.ano_modelo;var a=JSON.stringify(this.selecionados);if(this.situacao_veiculo!=""&&this.tipo_veiculo!=""){const s={titulo:this.titulo,tipo_veiculo:this.tipo_veiculo,tecnologia:this.tecnologia,marca_id:this.marca_id,modelo_id:this.modelo_id,numero_cliques:"2",situacao_veiculo:this.situacao_veiculo,anunciante_id:this.$store.state.anunciante_id,categoria_id:this.categoria_id,data_inicio:"20-02-2021",data_fim:"20-02-2022",ordenacao:"2",status_publicacao:"1",status_pagamento:"1",tipo:"2",vendido:"1",vitrine:this.getVitrine(),destaque_busca:this.getDestaque(),cep:"12352",estado_id:"2",cidade_id:"3",empresa:"null",tipo_preco:"1",valor_preco:this.valor_preco,mostrar_preco:this.mostrar_preco,fabricante_id:"2",ano_fabricacao:this.ano_fabricante,ano_modelo:this.ano_modelo,carroceria:"null",estilo:"null",portas:this.num_portas,cilindros:"4",motor:"2",cor:this.cor,transmissao:this.transmissao,combustivel:this.combustivel,placa:"null",km:this.kilometro,sinistrado:"null",opcionais_id:a,descricao:this.desc};try{const m=await g(s);m?(this.$store.state.anuncios=await y(),this.id=m.id,this.$emit("refreshAnuncio",this.id),this.tipo_veiculo="",this.marca_id="",this.modelo_id="",this.situacao_veiculo="",this.categoria_id="",this.estado="",this.cidade="",this.empresa="",this.valor_preco="",this.fabricante="",this.ano_fabricante="",this.ano_modelo="",this.carroceria="",this.estilo="",this.num_portas="",this.cor="",this.transmissao="",this.combustivel="",this.kilometro="",this.conforto="",this.vitrine=!1,this.destaque=!1,this.fecharModal()):this.showErrorMessage=!0}catch(m){console.error("Erro na requisição:",m)}}else k("Preencha todos os campos!")},showCarregarFotos(){},formatarNumero(){let a=this.valor_preco.replace(/[^\d.]/g,"");const s=a.split(".");a=s.shift()+(s.length>0?"."+s.join(""):""),a=a.replace(/\./g,""),a=a.replace(/\B(?=(\d{3})+(?!\d))/g,"."),this.valor_preco=a},toggleDropdown(a){this.$data.dropdownState[a]=!this.$data.dropdownState[a],this.$forceUpdate()},isDropdownOpen(a){return this.$data.dropdownState[a]||!1},filterOpcionais(a){return this.Api_Opcionais.filter(s=>s.categoria_opcional_id==a)},filterMarcas(a){return this.$store.state.marcas.filter(s=>s.tipo_veiculo_id==a)},filterModelos(a){return this.$store.state.modelos.filter(s=>s.id_marca==a)}},async created(){this.$store.state.modelos=await x(),this.$store.state.marcas=await A(),this.Api_categorias=await w(),this.Api_combustivel=await V(),this.Api_transmissao=await C(),this.Api_tecnologia=await S(),this.$store.state.tipo_veiculo=await U(),this.Api_cores=await M(),this.Api_CategOpcionais=await O(),this.$store.state.categoriaOpcionais=this.Api_CategOpcionais,this.Api_Opcionais=await q();for(let a=2025;1990<a;a--)this.anos.push(a)},mounted(){}},F={class:"modal fade",id:"IDaddCarro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},P={class:"modal-dialog"},B={class:"modal-content"},I={class:"bg-dar"},E=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"exampleModalLabel",style:{"font-size":"17px"}},[o("span",{class:"fas fa-bullhorn py-2 pt-0"}),b(),o("b",null,"Criar Anúncio")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"})],-1),L={class:"modal-body",style:{height:"470px",overflow:"auto","margin-bottom":"1em"}},K={class:"row"},j=o("div",{class:"p-2 pt-0 row mb-2 mt-md-1 mt-lg-1",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),J={class:"mb-3"},R=o("label",{for:"marca",class:"form-label"},"Situaçao do Veiculo",-1),W=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),G=o("option",{value:"1"},"Novo",-1),H=o("option",{value:"2"},"Usado",-1),Q=[W,G,H],X={class:"mb-3"},Y=o("label",{for:"marca",class:"form-label"},"Tipo de Veiculo",-1),Z=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),$=["value"],oo={class:"mb-3"},eo=o("label",{for:"preco",class:"form-label"},"Tecnologia",-1),so=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),to=["value"],io={class:"mb-3"},lo=o("label",{for:"nome",class:"form-label"},[b("Categoria "),o("span",{style:{opacity:".6"}},"(Opcional)")],-1),ao=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ro=["value"],no={class:"mb-3"},co=o("label",{for:"marca",class:"form-label"},"Marca",-1),po=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),_o=["value"],uo={class:"mb-3"},mo=o("label",{for:"modelo",class:"form-label"},"Modelo",-1),vo=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),ho=["value"],bo={class:"mb-3"},fo=o("label",{for:"nome",class:"form-label"},"Ano de Fabricaçao",-1),go=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),yo=["value"],ko={class:"mb-3"},xo=o("label",{for:"nome",class:"form-label"},"Ano do Modelo",-1),Ao=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),wo=["value"],Vo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Informaçoes de Preço "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),Co={class:"mb-3"},So=o("label",{for:"preco",class:"form-label"},"Preço (R$)",-1),Uo={class:"mb-3"},Mo=o("label",{for:"nome",class:"form-label"},"Mostrar Preço",-1),Oo=o("option",{value:"sim",selected:""}," sim ",-1),qo=o("option",{value:"nao"}," nao ",-1),Do=[Oo,qo],To=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Caracteristicas do Veiculo "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),No={class:"mb-3"},zo=o("label",{for:"nome",class:"form-label"},"Cor",-1),Fo=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Po=["value"],Bo={class:"mb-3"},Io=o("label",{for:"nome",class:"form-label"},"Numero de Portas",-1),Eo=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Lo=["value"],Ko={class:"mb-3"},jo=o("label",{for:"preco",class:"form-label"},"Transmissao",-1),Jo=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Ro=["value"],Wo={class:"mb-3"},Go=o("label",{for:"preco",class:"form-label"},"Combustivel",-1),Ho=o("option",{value:"",selected:"",disabled:""},"Selecionar",-1),Qo=["value"],Xo={class:"mb-3"},Yo=o("label",{for:"preco",class:"form-label"},"Kilometragem",-1),Zo=o("div",{class:"p-2 pt-0 row mb-2 mt-md-4 mt-lg-4",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px","background-color":"crimson !important"}}," Privilegios "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),$o={class:"mb-2 mt-2 check"},oe=o("label",{for:"vitrine",class:"ms-2 form-label"},"Adicionar na vitrine",-1),ee={class:"mb-2 check"},se=o("label",{for:"destaque",class:"ms-2 form-label"},"Marcar como destaque",-1),te=o("div",{class:"p-2 pt-0 row mt-md-4 mt-lg-4 mb-2",style:{opacity:"0.8"}},[o("div",{class:"col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1",style:{"border-top-left-radius":"8px","font-size":"13px"}}," Opcionais & Itens de Serie "),o("div",{class:"col-5 col-md-7 col-lg-7 p-0",style:{"padding-top":"13.5px !important"}},[o("div",{style:{"background-color":"rgba(0, 0, 0, 0.5)",padding:"1px"}})])],-1),ie={class:"mb-3"},le=["onClick"],ae={class:"ms-2"},re={key:0,class:"mb-2 pt-2"},ne=["id","value"],ce=["for"],de={class:"mb-3"},pe=o("label",{for:"desc",class:"form-label"},[b("Descriçao "),o("span",{style:{opacity:"0.6"}},"(Opcional)")],-1),_e={class:"modal-footer"},ue={style:{display:"flex","flex-wrap":"wrap"}},me=o("div",{class:"col-6"},[o("button",{type:"button",class:"me-3 btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Fechar"},"Cancelar")],-1),ve={class:"col-6"};function he(a,s,m,be,t,n){return i(),l("div",F,[o("div",P,[o("div",B,[o("div",I,[E,o("div",L,[o("form",null,[o("div",K,[j,o("div",J,[o("div",null,[R,r(o("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>t.situacao_veiculo=e),class:"form-select"},Q,512),[[c,t.situacao_veiculo]])])]),o("div",X,[o("div",null,[Y,r(o("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>t.tipo_veiculo=e),class:"form-select"},[Z,(i(!0),l(d,null,p(a.$store.state.tipo_veiculo,e=>(i(),l("option",{value:e.id,key:e.id},_(e.tipo_veiculo),9,$))),128))],512),[[c,t.tipo_veiculo]])])]),o("div",oo,[eo,r(o("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>t.tecnologia=e),class:"form-select"},[so,(i(!0),l(d,null,p(t.Api_tecnologia,e=>(i(),l("option",{value:e.id,key:e.id},_(e.tecnologia),9,to))),128))],512),[[c,t.tecnologia]])]),o("div",io,[lo,r(o("select",{"onUpdate:modelValue":s[3]||(s[3]=e=>t.categoria_id=e),class:"form-select"},[ao,(i(!0),l(d,null,p(t.Api_categorias,e=>(i(),l("option",{value:e.id,key:e.id},_(e.nome),9,ro))),128))],512),[[c,t.categoria_id]])]),o("div",no,[o("div",null,[co,r(o("select",{"onUpdate:modelValue":s[4]||(s[4]=e=>t.marca_id=e),class:"form-select"},[po,(i(!0),l(d,null,p(n.filterMarcas(t.tipo_veiculo),e=>(i(),l("option",{value:e.id,key:e.id},_(e.nome_marca),9,_o))),128))],512),[[c,t.marca_id]])])]),o("div",uo,[o("div",null,[mo,r(o("select",{"onUpdate:modelValue":s[5]||(s[5]=e=>t.modelo_id=e),class:"form-select"},[vo,(i(!0),l(d,null,p(n.filterModelos(t.marca_id),e=>(i(),l("option",{value:e.id,key:e.id},_(e.nome_modelo),9,ho))),128))],512),[[c,t.modelo_id]])])]),o("div",bo,[fo,r(o("select",{class:"form-select","onUpdate:modelValue":s[6]||(s[6]=e=>t.ano_fabricante=e)},[go,(i(!0),l(d,null,p(t.anos,(e,u)=>(i(),l("option",{value:e,key:u},_(e),9,yo))),128))],512),[[c,t.ano_fabricante]])]),o("div",ko,[xo,r(o("select",{class:"form-select","onUpdate:modelValue":s[7]||(s[7]=e=>t.ano_modelo=e)},[Ao,(i(!0),l(d,null,p(t.anos,(e,u)=>(i(),l("option",{value:e,key:u},_(e),9,wo))),128))],512),[[c,t.ano_modelo]])]),Vo,o("div",Co,[So,r(o("input",{type:"text",class:"text form-control",id:"preco","onUpdate:modelValue":s[8]||(s[8]=e=>t.valor_preco=e),onKeyup:s[9]||(s[9]=(...e)=>n.formatarNumero&&n.formatarNumero(...e)),placeholder:""},null,544),[[v,t.valor_preco]])]),o("div",Uo,[Mo,r(o("select",{"onUpdate:modelValue":s[10]||(s[10]=e=>t.mostrar_preco=e),class:"form-select"},Do,512),[[c,t.mostrar_preco]])]),To,o("div",No,[zo,r(o("select",{"onUpdate:modelValue":s[11]||(s[11]=e=>t.cor=e),class:"form-select"},[Fo,(i(!0),l(d,null,p(t.Api_cores,e=>(i(),l("option",{value:e.id,key:e.id},_(e.cor),9,Po))),128))],512),[[c,t.cor]])]),o("div",Bo,[Io,r(o("select",{"onUpdate:modelValue":s[12]||(s[12]=e=>t.num_portas=e),class:"form-select"},[Eo,(i(!0),l(d,null,p(t.portas,(e,u)=>(i(),l("option",{value:e,key:u},_(e),9,Lo))),128))],512),[[c,t.num_portas]])]),o("div",Ko,[jo,r(o("select",{"onUpdate:modelValue":s[13]||(s[13]=e=>t.transmissao=e),class:"form-select"},[Jo,(i(!0),l(d,null,p(t.Api_transmissao,e=>(i(),l("option",{value:e.id,key:e.id},_(e.transmissao),9,Ro))),128))],512),[[c,t.transmissao]])]),o("div",Wo,[Go,r(o("select",{"onUpdate:modelValue":s[14]||(s[14]=e=>t.combustivel=e),class:"form-select"},[Ho,(i(!0),l(d,null,p(t.Api_combustivel,e=>(i(),l("option",{value:e.id,key:e.id},_(e.combustivel),9,Qo))),128))],512),[[c,t.combustivel]])]),o("div",Xo,[Yo,r(o("input",{type:"number",class:"text form-control",id:"preco","onUpdate:modelValue":s[15]||(s[15]=e=>t.kilometro=e),min:"0",max:"100"},null,512),[[v,t.kilometro]])]),Zo,o("div",$o,[r(o("input",{type:"checkbox","onUpdate:modelValue":s[16]||(s[16]=e=>t.vitrine=e),id:"vitrine",onClick:s[17]||(s[17]=(...e)=>n.getVitrine&&n.getVitrine(...e))},null,512),[[h,t.vitrine]]),oe]),o("div",ee,[r(o("input",{type:"checkbox","onUpdate:modelValue":s[18]||(s[18]=e=>t.destaque=e),id:"destaque",onClick:s[19]||(s[19]=(...e)=>n.getDestaque&&n.getDestaque(...e))},null,512),[[h,t.destaque]]),se]),te,o("div",ie,[(i(!0),l(d,null,p(t.Api_CategOpcionais,e=>(i(),l("div",{key:e.id},[o("p",{onClick:u=>n.toggleDropdown(e.id),style:{cursor:"pointer",opacity:"1",margin:"0"}},[o("span",{class:T({"arrow-down":n.isDropdownOpen(e.id)})},"►",2),o("span",ae,_(e.nome),1)],8,le),n.isDropdownOpen(e.id)?(i(),l("div",re,[(i(!0),l(d,null,p(n.filterOpcionais(e.id),u=>(i(),l("div",{key:u.id,class:"ps-4"},[r(o("input",{type:"checkbox",id:"checkbox_"+u.id,value:u.id,"onUpdate:modelValue":s[20]||(s[20]=f=>t.selecionados=f),class:"me-2"},null,8,ne),[[h,t.selecionados]]),o("label",{for:"checkbox_"+u.id},_(u.nome),9,ce)]))),128))])):N("",!0)]))),128))]),o("div",de,[pe,r(o("textarea",{class:"form-control",rows:"5",id:"desc","onUpdate:modelValue":s[21]||(s[21]=e=>t.desc=e)},null,512),[[v,t.desc]])])])])]),o("div",_e,[o("div",ue,[me,o("div",ve,[o("button",{type:"button",class:"ms-3 btn btn-primary",onClick:s[22]||(s[22]=e=>n.criar())},"criar")])])])])])])])}const ye=D(z,[["render",he]]);export{ye as T};
