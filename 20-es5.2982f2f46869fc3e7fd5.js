!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{uGb0:function(e,o,i){"use strict";i.r(o),i.d(o,"MeusDadosPageModule",(function(){return T}));var r=i("TEn/"),a=i("tyNb"),c=i("mrSG"),b=i("fXoL"),s=i("Dp36"),u=i("Rzux"),l=i("fkzy"),d=i("9qa2"),f=i("ofXK"),g=i("tmjD");function h(n,e){if(1&n){var t=b.Mb();b.Lb(0,"div",18),b.Tb("click",(function(){return b.hc(t),b.Vb().carregaCorridas()})),b.Jb(1,"ion-icon",19),b.Kb()}}function m(n,e){1&n&&(b.Lb(0,"h2",20),b.lc(1," Voc\xea possui solicita\xe7\xf5es em aberto "),b.Kb())}function p(n,e){1&n&&(b.Lb(0,"h2"),b.lc(1,"Nenhuma entrega em aberto"),b.Kb())}function v(n,e){if(1&n&&(b.Lb(0,"h6"),b.lc(1,"Entrega em: "),b.Lb(2,"b"),b.lc(3),b.Kb(),b.Kb()),2&n){var t=e.$implicit;b.yb(3),b.mc(t.enderecoDestino)}}function L(n,e){if(1&n&&(b.Lb(0,"h6"),b.lc(1),b.Wb(2,"date"),b.Kb()),2&n){var t=b.Vb().$implicit;b.yb(1),b.nc("Data e hora: ",b.Yb(2,1,t.dataHoraEntrega,"dd/MM/yyyy HH:mm","GMT--3"),"")}}function K(n,e){if(1&n&&(b.Lb(0,"h6"),b.lc(1),b.Wb(2,"date"),b.Kb()),2&n){var t=b.Vb().$implicit;b.yb(1),b.nc("Hora m\xe1xima de retirada: ",b.Yb(2,1,t.horaMaximaRetirada,"HH:mm","GMT--3"),"")}}function y(n,e){if(1&n){var t=b.Mb();b.Lb(0,"ion-item",21),b.Tb("click",(function(){b.hc(t);var n=e.$implicit;return b.Vb().abreCorrida(n)})),b.Lb(1,"div"),b.Lb(2,"h6"),b.lc(3,"ID: "),b.Lb(4,"b"),b.lc(5),b.Kb(),b.Kb(),b.Lb(6,"h6"),b.lc(7,"Retirar em: "),b.Lb(8,"b"),b.lc(9),b.Kb(),b.Kb(),b.kc(10,v,4,1,"h6",22),b.kc(11,L,3,5,"h6",9),b.kc(12,K,3,5,"h6",9),b.Lb(13,"ion-button",23),b.Lb(14,"span"),b.lc(15,"VER SOLICITA\xc7\xc3O"),b.Kb(),b.Jb(16,"ion-icon",24),b.Kb(),b.Kb(),b.Kb()}if(2&n){var o=e.$implicit;b.yb(5),b.mc(o.idSolicitacao),b.yb(4),b.mc(o.enderecoOrigem),b.yb(1),b.cc("ngForOf",o.entregas),b.yb(1),b.cc("ngIf",o.agendarEntrega),b.yb(1),b.cc("ngIf",!o.agendarEntrega)}}function k(n,e){if(1&n&&(b.Lb(0,"div",12),b.Lb(1,"h6"),b.lc(2,"Saldo dispon\xedvel:"),b.Kb(),b.Lb(3,"h4",27),b.lc(4),b.Wb(5,"currency"),b.Kb(),b.Kb()),2&n){var t=b.Vb(2);b.yb(4),b.mc(b.Zb(5,1,t.usuarioLogado._cliente.valorSaldo,"BRL",!0,"1.2"))}}function w(n,e){if(1&n&&(b.Lb(0,"div",12),b.Lb(1,"h6"),b.lc(2,"Valor devido:"),b.Kb(),b.Lb(3,"h4",28),b.lc(4),b.Wb(5,"currency"),b.Kb(),b.Kb()),2&n){var t=b.Vb(2);b.yb(4),b.mc(b.Zb(5,1,-1*t.usuarioLogado._cliente.valorSaldo,"BRL",!0,"1.2"))}}function C(n,e){if(1&n){var t=b.Mb();b.Lb(0,"ion-card",6),b.Lb(1,"ion-card-content"),b.Lb(2,"h1"),b.lc(3," Saldos "),b.Kb(),b.kc(4,k,6,6,"div",13),b.kc(5,w,6,6,"div",13),b.Lb(6,"ion-button",25),b.Tb("click",(function(){return b.hc(t),b.Vb().historicoCorridas()})),b.Lb(7,"span"),b.lc(8,"HIST\xd3RICO DE ENTREGAS"),b.Kb(),b.Jb(9,"ion-icon",26),b.Kb(),b.Lb(10,"ion-button",25),b.Tb("click",(function(){return b.hc(t),b.Vb().historicoPagamentos()})),b.Lb(11,"span"),b.lc(12,"HIST\xd3RICO DE PAGAMENTOS"),b.Kb(),b.Jb(13,"ion-icon",26),b.Kb(),b.Kb(),b.Kb()}if(2&n){var o=b.Vb();b.yb(4),b.cc("ngIf",o.usuarioLogado._cliente.valorSaldo>0),b.yb(1),b.cc("ngIf",o.usuarioLogado._cliente.valorSaldo<0)}}function O(n,e){if(1&n&&(b.Lb(0,"div",12),b.Lb(1,"h6"),b.lc(2,"CPF:"),b.Kb(),b.Lb(3,"h4"),b.lc(4),b.Wb(5,"mask"),b.Kb(),b.Kb()),2&n){var t=b.Vb();b.yb(4),b.mc(b.Xb(5,1,t.usuarioLogado._cliente.cpf,"000.000.000-00"))}}function R(n,e){if(1&n&&(b.Lb(0,"div",12),b.Lb(1,"h6"),b.lc(2,"CNPJ:"),b.Kb(),b.Lb(3,"h4"),b.lc(4),b.Wb(5,"mask"),b.Kb(),b.Kb()),2&n){var t=b.Vb();b.yb(4),b.mc(b.Xb(5,1,t.usuarioLogado._cliente.cnpj,"00.000.000/0000-00"))}}var x,M,P,_=[{path:"",component:(x=function(){function e(t,o,i,r){var a=this;n(this,e),this.api=t,this.messagingService=o,this.navController=i,this.utils=r,this.usuarioLogado={_cliente:{}},this.corridasEmAberto=[],this.messagingService.requestPermission((function(){return Object(c.b)(a,void 0,void 0,regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.messagingService.aoReceberMensagem((function(n){return Object(c.b)(e,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.carregaCorridas();case 2:case"end":return n.stop()}}),n,this)})))}));case 1:case"end":return n.stop()}}),n,this)})))}))}return t(e,[{key:"ionViewWillEnter",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.usuarioLogado=this.api.retornaUsuarioLogado(),n.next=3,this.carregaCorridas();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"carregaCorridas",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.utils.showSpinner();case 2:return n.next=4,this.api.get("seguro-cliente/corrida/cliente/abertas");case 4:return e=n.sent,n.next=7,this.utils.cancelSpinner();case 7:this.corridasEmAberto=e.data;case 8:case"end":return n.stop()}}),n,this)})))}},{key:"voltar",value:function(){this.navController.navigateRoot(["/"])}},{key:"alterarDadosCadastrais",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.utils.mensagemAviso("Por favor, solicite a altera\xe7\xe3o via WhatsApp a seguir.",(function(){window.open("https://api.whatsapp.com/send?1=pt_BR&phone=5555981776950&text=Ol\xe1%0D%0AGostaria de alterar meus dados no GoTele.","_blank")}));case 1:case"end":return n.stop()}}),n,this)})))}},{key:"abreCorrida",value:function(n){this.utils.gravaStorage("corrida",n),this.navController.navigateRoot(["/solicitacao"])}},{key:"historicoCorridas",value:function(){this.navController.navigateRoot(["/historico-corridas"])}},{key:"historicoPagamentos",value:function(){this.navController.navigateRoot(["/historico-pagamentos"])}},{key:"atualizando",value:function(n){this.carregaCorridas(),setTimeout((function(){n.complete()}),3e3)}},{key:"ativarNotificacoes",value:function(){var n=this;this.messagingService.requestPermission((function(){return Object(c.b)(n,void 0,void 0,regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.utils.showSpinner(),setTimeout((function(){e.utils.cancelSpinner()}),5e3),this.messagingService.aoReceberMensagem((function(n){return Object(c.b)(e,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})))}));case 1:case"end":return n.stop()}}),n,this)})))}),!0)}}]),e}(),x.\u0275fac=function(n){return new(n||x)(b.Ib(s.a),b.Ib(u.a),b.Ib(r.A),b.Ib(l.a))},x.\u0275cmp=b.Cb({type:x,selectors:[["app-meus-dados"]],decls:44,vars:14,consts:[["appScrollbarTheme","",3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"botao-sair-x",3,"click"],["name","close-outline"],[1,"logo-miniatura-top"],["src","/assets/logoMiniatura.png"],[1,"info"],["class","atualizar-corridas",3,"click",4,"ngIf"],["style","margin-bottom: 10px",4,"ngIf"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["class","info",4,"ngIf"],[1,"item-info"],["class","item-info",4,"ngIf"],[1,"botao-acao-secundaria","botao-acao-secundaria-card",3,"click"],["name","create-outline"],["id","finalPagina",1,"final-pagina"],["finalPagina",""],[1,"atualizar-corridas",3,"click"],["name","refresh-outline"],[2,"margin-bottom","10px"],[3,"click"],[4,"ngFor","ngForOf"],[1,"botao-acao-secundaria","botao-acao-secundaria-card"],["name","caret-forward-outline"],[1,"botao-acao-secundaria","botao-acao-secundaria-card",2,"max-width","280px",3,"click"],["name","time-outline"],[2,"color","green"],[2,"color","red"]],template:function(n,e){1&n&&(b.Lb(0,"ion-content",0),b.Lb(1,"ion-refresher",1),b.Tb("ionRefresh",(function(n){return e.atualizando(n)})),b.Jb(2,"ion-refresher-content"),b.Kb(),b.Lb(3,"div",2),b.Tb("click",(function(){return e.voltar()})),b.Jb(4,"ion-icon",3),b.Kb(),b.Lb(5,"div",4),b.Jb(6,"img",5),b.Kb(),b.Lb(7,"ion-card",6),b.Lb(8,"ion-card-content"),b.kc(9,h,2,0,"div",7),b.kc(10,m,2,0,"h2",8),b.kc(11,p,2,0,"h2",9),b.kc(12,y,17,5,"ion-item",10),b.Kb(),b.Kb(),b.kc(13,C,14,2,"ion-card",11),b.Lb(14,"ion-card",6),b.Lb(15,"ion-card-content"),b.Lb(16,"h1"),b.lc(17," Meus dados "),b.Kb(),b.Lb(18,"div",12),b.Lb(19,"h6"),b.lc(20,"Nome:"),b.Kb(),b.Lb(21,"h4"),b.lc(22),b.Kb(),b.Kb(),b.Lb(23,"div",12),b.Lb(24,"h6"),b.lc(25,"Telefone:"),b.Kb(),b.Lb(26,"h4"),b.lc(27),b.Wb(28,"mask"),b.Kb(),b.Kb(),b.kc(29,O,6,4,"div",13),b.kc(30,R,6,4,"div",13),b.Lb(31,"div",12),b.Lb(32,"h6"),b.lc(33,"E-mail:"),b.Kb(),b.Lb(34,"h4"),b.lc(35),b.Kb(),b.Kb(),b.Lb(36,"ion-button",14),b.Tb("click",(function(){return e.alterarDadosCadastrais()})),b.Lb(37,"span"),b.lc(38,"ALTERAR"),b.Kb(),b.Jb(39,"ion-icon",15),b.Kb(),b.Lb(40,"ion-button",14),b.Tb("click",(function(){return e.ativarNotificacoes()})),b.lc(41,"Ativar notifica\xe7\xf5es"),b.Kb(),b.Kb(),b.Kb(),b.Jb(42,"div",16,17),b.Kb()),2&n&&(b.cc("fullscreen",!0),b.yb(9),b.cc("ngIf",e.corridasEmAberto.length>0),b.yb(1),b.cc("ngIf",e.corridasEmAberto.length>0),b.yb(1),b.cc("ngIf",0==e.corridasEmAberto.length),b.yb(1),b.cc("ngForOf",e.corridasEmAberto),b.yb(1),b.cc("ngIf",e.usuarioLogado.admin),b.yb(9),b.mc(e.usuarioLogado.nome),b.yb(5),b.mc(b.Xb(28,11,e.usuarioLogado.telefone,"(00) 0 0000-0000")),b.yb(2),b.cc("ngIf",e.usuarioLogado._cliente.cpf),b.yb(1),b.cc("ngIf",e.usuarioLogado._cliente.cnpj),b.yb(5),b.mc(e.usuarioLogado._cliente.email))},directives:[r.h,d.a,r.o,r.p,r.j,r.f,r.g,f.l,f.k,r.e,r.l],pipes:[g.a,f.e,f.c],styles:["ion-content[_ngcontent-%COMP%]{--background:#513dd9}ion-item[_ngcontent-%COMP%]{--background-focused:#fff!important}.info[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:20px}.info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;text-align:center}.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;font-size:16px;white-space:normal}.info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#8c8c8c}.info[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px;border-bottom:solid;border-color:#e4e4e4;border-width:1px}.info[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:10px}.atualizar-corridas[_ngcontent-%COMP%]{text-align:center;font-size:35px}.detalhe-corrida[_ngcontent-%COMP%]{border-bottom:solid;border-width:1px;border-color:#715fe6}"]}),x)}],I=((M=t((function e(){n(this,e)}))).\u0275mod=b.Gb({type:M}),M.\u0275inj=b.Fb({factory:function(n){return new(n||M)},imports:[[a.i.forChild(_)],a.i]}),M),S=i("onrN"),T=((P=t((function e(){n(this,e)}))).\u0275mod=b.Gb({type:P}),P.\u0275inj=b.Fb({factory:function(n){return new(n||P)},providers:[],imports:[[r.w,S.a,I]]}),P)}}])}();