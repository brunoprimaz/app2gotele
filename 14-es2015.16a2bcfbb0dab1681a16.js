(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{FNuS:function(t,i,e){"use strict";e.r(i),e.d(i,"AcompanharPageModule",(function(){return p}));var o=e("TEn/"),r=e("tyNb"),a=e("mrSG"),n=e("fXoL"),s=e("Dp36"),c=e("fkzy"),d=e("9qa2");const l=["mapElementOrigem"],u=[{path:"",component:(()=>{class t{constructor(t,i,e,o){this.api=t,this.route=i,this.navController=e,this.utils=o,this.ultimaPosicaoEntregador={}}ionViewWillEnter(){this.route.paramMap.subscribe(t=>Object(a.b)(this,void 0,void 0,(function*(){this.idCorrida=t.get("corrida"),this.idEntrega=t.get("entrega"),this.carregaMapa()})))}carregaMapa(){return Object(a.b)(this,void 0,void 0,(function*(){let t=yield this.retornaCorrida();if(!t.data)return void this.voltar();this.utils.mensagemAviso("Bem-vindo ao GoTele. Acompanhe aqui o andamento da sua entrega."),this.corrida=t.data;let i=this.utils.retornaPosition(this.corrida.latitudeOrigem,this.corrida.longitudeOrigem);setTimeout(()=>Object(a.b)(this,void 0,void 0,(function*(){this.map=new google.maps.Map(this.mapElementOrigem.nativeElement,{styles:[{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"transit.station.bus",stylers:[{visibility:"off"}]}],center:i,disableDefaultUI:!0,zoom:14}),new google.maps.Marker({position:i,map:this.map,title:this.corrida.nomeCliente,icon:"/assets/icon/home.png"}),this.localEntrega=this.utils.retornaPosition(this.corrida.latitudeDestino,this.corrida.longitudeDestino),new google.maps.Marker({position:this.localEntrega,map:this.map,title:"Estou aqui",icon:"/assets/icon/person.png"}),this.direcaoDestinoCorrida=new google.maps.DirectionsRenderer({suppressMarkers:!0}),this.direcaoDestinoCorrida.setMap(this.map),this.carregaPosicaoEntregador()})),200)}))}retornaCorrida(){return Object(a.b)(this,void 0,void 0,(function*(){let t=yield this.api.get("publico/cliente/corrida/"+this.idCorrida+"/entrega/"+this.idEntrega);return t.data?t:(this.utils.mensagemAviso("Entrega n\xe3o est\xe1 dispon\xedvel no momento."),{})}))}carregaPosicaoEntregador(){return Object(a.b)(this,void 0,void 0,(function*(){clearTimeout(this.timerCorridaPendente);try{let i=yield this.retornaCorrida();if(!i.data)return void this.voltar();let e=i.data;if(this.ultimaPosicaoEntregador.lat!=e.latitudeEntregador&&this.ultimaPosicaoEntregador.lng!=e.longitudeEntregador){let i=this.utils.retornaPosition(e.latitudeEntregador,e.longitudeEntregador);this.ultimaPosicaoEntregador=i,this.marcadorEntregador?this.marcadorEntregador.setPosition(i):this.marcadorEntregador=new google.maps.Marker({position:i,map:this.map,title:e.nomeEntregador,icon:"/assets/icon/entregador.png"});var t={origin:i,destination:this.localEntrega,travelMode:"DRIVING"};(new google.maps.DirectionsService).route(t,(t,i)=>Object(a.b)(this,void 0,void 0,(function*(){"OK"==i&&(yield this.direcaoDestinoCorrida.setDirections(t))})))}}catch(i){console.log(i)}clearTimeout(this.timerCorridaPendente),this.timerCorridaPendente=setTimeout(()=>{this.carregaPosicaoEntregador()},5e3)}))}voltar(t){window.clearTimeout(this.timerCorridaPendente),this.navController.navigateRoot(["/"])}}return t.\u0275fac=function(i){return new(i||t)(n.Ib(s.a),n.Ib(r.a),n.Ib(o.A),n.Ib(c.a))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-acompanhar"]],viewQuery:function(t,i){var e;1&t&&n.pc(l,!0),2&t&&n.gc(e=n.Ub())&&(i.mapElementOrigem=e.first)},decls:7,vars:1,consts:[["appScrollbarTheme","",1,"tela-buscar-endereco",3,"fullscreen"],[1,"botao-sair-x",3,"click"],["name","close-outline"],[1,"logo-miniatura-top"],["src","/assets/logoMiniatura.png"],[1,"map"],["mapElementOrigem",""]],template:function(t,i){1&t&&(n.Lb(0,"ion-content",0),n.Lb(1,"div",1),n.Tb("click",(function(){return i.voltar()})),n.Jb(2,"ion-icon",2),n.Kb(),n.Lb(3,"div",3),n.Jb(4,"img",4),n.Kb(),n.Jb(5,"div",5,6),n.Kb()),2&t&&n.cc("fullscreen",!0)},directives:[o.h,d.a,o.j],styles:[".map[_ngcontent-%COMP%]{height:100%;width:100%;margin-top:5px}ion-content[_ngcontent-%COMP%]{--background:#513dd9}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=n.Gb({type:t}),t.\u0275inj=n.Fb({factory:function(i){return new(i||t)},imports:[[r.i.forChild(u)],r.i]}),t})();var g=e("onrN"),h=e("Bfh1");let p=(()=>{class t{}return t.\u0275mod=n.Gb({type:t}),t.\u0275inj=n.Fb({factory:function(i){return new(i||t)},providers:[h.a],imports:[[o.w,g.a,m]]}),t})()}}]);