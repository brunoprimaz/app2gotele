!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{mhBS:function(e,r,a){"use strict";a.r(r),a.d(r,"MapaEntregaPageModule",(function(){return w}));var n,o,s,c=a("TEn/"),l=a("tyNb"),u=a("mrSG"),p=a("fXoL"),d=a("Dp36"),g=a("fkzy"),m=a("9qa2"),h=["mapElementOrigem"],f=[{path:"",component:(n=function(){function e(i,r,a){t(this,e),this.api=i,this.navController=r,this.utils=a,this.ultimaPosicaoEntregador={}}return i(e,[{key:"ionViewWillEnter",value:function(){this.corrida=this.utils.retornaStorage("corrida"),this.corrida?this.carregaMapa():this.voltar()}},{key:"carregaMapa",value:function(){var t=this,e=this.utils.retornaPosition(this.corrida.latitudeOrigem,this.corrida.longitudeOrigem);setTimeout((function(){t.map=new google.maps.Map(t.mapElementOrigem.nativeElement,{styles:[{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"transit.station.bus",stylers:[{visibility:"off"}]}],center:e,disableDefaultUI:!0,zoom:14}),new google.maps.Marker({position:e,map:t.map,title:"Origem",icon:"/assets/icon/home.png"}),t.corrida.entregas.forEach((function(e){var i=t.utils.retornaPosition(e.latitudeDestino,e.longitudeDestino);new google.maps.Marker({position:i,map:t.map,title:"Entrega "+e.sequencial,icon:"/assets/icon/person.png"})})),t.carregaPosicaoEntregador()}),200)}},{key:"carregaPosicaoEntregador",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,i,r,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return clearTimeout(this.timerCorridaPendente),t.prev=1,t.next=4,this.api.get("seguro-cliente/corrida/"+this.corrida._id);case 4:if(e=t.sent.data){t.next=7;break}return t.abrupt("return",void this.voltar());case 7:i=e._entregador,this.ultimaPosicaoEntregador.lat!=i.latitudeAtual&&this.ultimaPosicaoEntregador.lng!=i.longitudeAtual&&(r=this.utils.retornaPosition(i.latitudeAtual,i.longitudeAtual),this.ultimaPosicaoEntregador=r,this.marcadorEntregador?this.marcadorEntregador.setPosition(r):this.marcadorEntregador=new google.maps.Marker({position:r,map:this.map,title:"Entregador ",icon:"/assets/icon/entregador.png"})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:clearTimeout(this.timerCorridaPendente),this.timerCorridaPendente=setTimeout((function(){a.carregaPosicaoEntregador()}),3e3);case 15:case"end":return t.stop()}}),t,this,[[1,11]])})))}},{key:"voltar",value:function(t){window.clearTimeout(this.timerCorridaPendente),this.utils.gravaStorage("corrida",this.corrida),this.navController.navigateRoot(["/solicitacao"])}}]),e}(),n.\u0275fac=function(t){return new(t||n)(p.Ib(d.a),p.Ib(c.A),p.Ib(g.a))},n.\u0275cmp=p.Cb({type:n,selectors:[["app-mapa-entrega"]],viewQuery:function(t,e){var i;1&t&&p.pc(h,!0),2&t&&p.gc(i=p.Ub())&&(e.mapElementOrigem=i.first)},decls:7,vars:1,consts:[["appScrollbarTheme","",1,"tela-buscar-endereco",3,"fullscreen"],[1,"botao-sair-x",3,"click"],["name","close-outline"],[1,"logo-miniatura-top"],["src","/assets/logoMiniatura.png"],[1,"map"],["mapElementOrigem",""]],template:function(t,e){1&t&&(p.Lb(0,"ion-content",0),p.Lb(1,"div",1),p.Tb("click",(function(){return e.voltar()})),p.Jb(2,"ion-icon",2),p.Kb(),p.Lb(3,"div",3),p.Jb(4,"img",4),p.Kb(),p.Jb(5,"div",5,6),p.Kb()),2&t&&p.cc("fullscreen",!0)},directives:[c.h,m.a,c.j],styles:[".map[_ngcontent-%COMP%]{height:100%;width:100%;margin-top:5px}ion-content[_ngcontent-%COMP%]{--background:#513dd9}"]}),n)}],b=((o=i((function e(){t(this,e)}))).\u0275mod=p.Gb({type:o}),o.\u0275inj=p.Fb({factory:function(t){return new(t||o)},imports:[[l.i.forChild(f)],l.i]}),o),v=a("onrN"),y=a("Bfh1"),w=((s=i((function e(){t(this,e)}))).\u0275mod=p.Gb({type:s}),s.\u0275inj=p.Fb({factory:function(t){return new(t||s)},providers:[y.a],imports:[[c.w,v.a,b]]}),s)}}])}();