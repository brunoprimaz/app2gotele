(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{uGb0:function(o,i,n){"use strict";n.r(i),n.d(i,"MeusDadosPageModule",(function(){return I}));var t=n("TEn/"),c=n("tyNb"),e=n("mrSG"),a=n("fXoL"),r=n("Dp36"),b=n("Rzux"),s=n("fkzy"),l=n("9qa2"),d=n("ofXK"),u=n("tmjD");function g(o,i){if(1&o){const o=a.Mb();a.Lb(0,"div",18),a.Tb("click",(function(){return a.hc(o),a.Vb().carregaCorridas()})),a.Jb(1,"ion-icon",19),a.Kb()}}function f(o,i){1&o&&(a.Lb(0,"h2",20),a.lc(1," Voc\xea possui solicita\xe7\xf5es em aberto "),a.Kb())}function h(o,i){1&o&&(a.Lb(0,"h2"),a.lc(1,"Nenhuma entrega em aberto"),a.Kb())}function m(o,i){if(1&o&&(a.Lb(0,"h6"),a.lc(1,"Entrega em: "),a.Lb(2,"b"),a.lc(3),a.Kb(),a.Kb()),2&o){const o=i.$implicit;a.yb(3),a.mc(o.enderecoDestino)}}function p(o,i){if(1&o&&(a.Lb(0,"h6"),a.lc(1),a.Wb(2,"date"),a.Kb()),2&o){const o=a.Vb().$implicit;a.yb(1),a.nc("Data e hora: ",a.Yb(2,1,o.dataHoraEntrega,"dd/MM/yyyy HH:mm","GMT--3"),"")}}function L(o,i){if(1&o&&(a.Lb(0,"h6"),a.lc(1),a.Wb(2,"date"),a.Kb()),2&o){const o=a.Vb().$implicit;a.yb(1),a.nc("Hora m\xe1xima de retirada: ",a.Yb(2,1,o.horaMaximaRetirada,"HH:mm","GMT--3"),"")}}function v(o,i){if(1&o){const o=a.Mb();a.Lb(0,"ion-item",21),a.Tb("click",(function(){a.hc(o);const n=i.$implicit;return a.Vb().abreCorrida(n)})),a.Lb(1,"div"),a.Lb(2,"h6"),a.lc(3,"ID: "),a.Lb(4,"b"),a.lc(5),a.Kb(),a.Kb(),a.Lb(6,"h6"),a.lc(7,"Retirar em: "),a.Lb(8,"b"),a.lc(9),a.Kb(),a.Kb(),a.kc(10,m,4,1,"h6",22),a.kc(11,p,3,5,"h6",9),a.kc(12,L,3,5,"h6",9),a.Lb(13,"ion-button",23),a.Lb(14,"span"),a.lc(15,"VER SOLICITA\xc7\xc3O"),a.Kb(),a.Jb(16,"ion-icon",24),a.Kb(),a.Kb(),a.Kb()}if(2&o){const o=i.$implicit;a.yb(5),a.mc(o.idSolicitacao),a.yb(4),a.mc(o.enderecoOrigem),a.yb(1),a.cc("ngForOf",o.entregas),a.yb(1),a.cc("ngIf",o.agendarEntrega),a.yb(1),a.cc("ngIf",!o.agendarEntrega)}}function K(o,i){if(1&o&&(a.Lb(0,"div",12),a.Lb(1,"h6"),a.lc(2,"Saldo dispon\xedvel:"),a.Kb(),a.Lb(3,"h4",27),a.lc(4),a.Wb(5,"currency"),a.Kb(),a.Kb()),2&o){const o=a.Vb(2);a.yb(4),a.mc(a.Zb(5,1,o.usuarioLogado._cliente.valorSaldo,"BRL",!0,"1.2"))}}function y(o,i){if(1&o&&(a.Lb(0,"div",12),a.Lb(1,"h6"),a.lc(2,"Valor devido:"),a.Kb(),a.Lb(3,"h4",28),a.lc(4),a.Wb(5,"currency"),a.Kb(),a.Kb()),2&o){const o=a.Vb(2);a.yb(4),a.mc(a.Zb(5,1,-1*o.usuarioLogado._cliente.valorSaldo,"BRL",!0,"1.2"))}}function C(o,i){if(1&o){const o=a.Mb();a.Lb(0,"ion-card",6),a.Lb(1,"ion-card-content"),a.Lb(2,"h1"),a.lc(3," Saldos "),a.Kb(),a.kc(4,K,6,6,"div",13),a.kc(5,y,6,6,"div",13),a.Lb(6,"ion-button",25),a.Tb("click",(function(){return a.hc(o),a.Vb().historicoCorridas()})),a.Lb(7,"span"),a.lc(8,"HIST\xd3RICO DE ENTREGAS"),a.Kb(),a.Jb(9,"ion-icon",26),a.Kb(),a.Lb(10,"ion-button",25),a.Tb("click",(function(){return a.hc(o),a.Vb().historicoPagamentos()})),a.Lb(11,"span"),a.lc(12,"HIST\xd3RICO DE PAGAMENTOS"),a.Kb(),a.Jb(13,"ion-icon",26),a.Kb(),a.Kb(),a.Kb()}if(2&o){const o=a.Vb();a.yb(4),a.cc("ngIf",o.usuarioLogado._cliente.valorSaldo>0),a.yb(1),a.cc("ngIf",o.usuarioLogado._cliente.valorSaldo<0)}}function k(o,i){if(1&o&&(a.Lb(0,"div",12),a.Lb(1,"h6"),a.lc(2,"CPF:"),a.Kb(),a.Lb(3,"h4"),a.lc(4),a.Wb(5,"mask"),a.Kb(),a.Kb()),2&o){const o=a.Vb();a.yb(4),a.mc(a.Xb(5,1,o.usuarioLogado._cliente.cpf,"000.000.000-00"))}}function O(o,i){if(1&o&&(a.Lb(0,"div",12),a.Lb(1,"h6"),a.lc(2,"CNPJ:"),a.Kb(),a.Lb(3,"h4"),a.lc(4),a.Wb(5,"mask"),a.Kb(),a.Kb()),2&o){const o=a.Vb();a.yb(4),a.mc(a.Xb(5,1,o.usuarioLogado._cliente.cnpj,"00.000.000/0000-00"))}}const M=[{path:"",component:(()=>{class o{constructor(o,i,n,t){this.api=o,this.messagingService=i,this.navController=n,this.utils=t,this.usuarioLogado={_cliente:{}},this.corridasEmAberto=[],this.messagingService.requestPermission(()=>Object(e.b)(this,void 0,void 0,(function*(){this.messagingService.aoReceberMensagem(o=>Object(e.b)(this,void 0,void 0,(function*(){yield this.carregaCorridas()})))})))}ionViewWillEnter(){return Object(e.b)(this,void 0,void 0,(function*(){this.usuarioLogado=this.api.retornaUsuarioLogado(),yield this.carregaCorridas()}))}carregaCorridas(){return Object(e.b)(this,void 0,void 0,(function*(){yield this.utils.showSpinner();let o=yield this.api.get("seguro-cliente/corrida/cliente/abertas");yield this.utils.cancelSpinner(),this.corridasEmAberto=o.data}))}voltar(){this.navController.navigateRoot(["/"])}alterarDadosCadastrais(){return Object(e.b)(this,void 0,void 0,(function*(){this.utils.mensagemAviso("Por favor, solicite a altera\xe7\xe3o via WhatsApp a seguir.",()=>{let o="Ol\xe1%0D%0A";o+="Gostaria de alterar meus dados no GoTele.",window.open("https://api.whatsapp.com/send?1=pt_BR&phone=5555981776950&text=Ol\xe1%0D%0AGostaria de alterar meus dados no GoTele.","_blank")})}))}abreCorrida(o){this.utils.gravaStorage("corrida",o),this.navController.navigateRoot(["/solicitacao"])}historicoCorridas(){this.navController.navigateRoot(["/historico-corridas"])}historicoPagamentos(){this.navController.navigateRoot(["/historico-pagamentos"])}atualizando(o){this.carregaCorridas(),setTimeout((function(){o.complete()}),3e3)}ativarNotificacoes(){this.messagingService.requestPermission(()=>Object(e.b)(this,void 0,void 0,(function*(){this.utils.showSpinner(),setTimeout(()=>{this.utils.cancelSpinner()},5e3),this.messagingService.aoReceberMensagem(o=>Object(e.b)(this,void 0,void 0,(function*(){})))})),!0)}}return o.\u0275fac=function(i){return new(i||o)(a.Ib(r.a),a.Ib(b.a),a.Ib(t.A),a.Ib(s.a))},o.\u0275cmp=a.Cb({type:o,selectors:[["app-meus-dados"]],decls:44,vars:14,consts:[["appScrollbarTheme","",3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"botao-sair-x",3,"click"],["name","close-outline"],[1,"logo-miniatura-top"],["src","/assets/logoMiniatura.png"],[1,"info"],["class","atualizar-corridas",3,"click",4,"ngIf"],["style","margin-bottom: 10px",4,"ngIf"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["class","info",4,"ngIf"],[1,"item-info"],["class","item-info",4,"ngIf"],[1,"botao-acao-secundaria","botao-acao-secundaria-card",3,"click"],["name","create-outline"],["id","finalPagina",1,"final-pagina"],["finalPagina",""],[1,"atualizar-corridas",3,"click"],["name","refresh-outline"],[2,"margin-bottom","10px"],[3,"click"],[4,"ngFor","ngForOf"],[1,"botao-acao-secundaria","botao-acao-secundaria-card"],["name","caret-forward-outline"],[1,"botao-acao-secundaria","botao-acao-secundaria-card",2,"max-width","280px",3,"click"],["name","time-outline"],[2,"color","green"],[2,"color","red"]],template:function(o,i){1&o&&(a.Lb(0,"ion-content",0),a.Lb(1,"ion-refresher",1),a.Tb("ionRefresh",(function(o){return i.atualizando(o)})),a.Jb(2,"ion-refresher-content"),a.Kb(),a.Lb(3,"div",2),a.Tb("click",(function(){return i.voltar()})),a.Jb(4,"ion-icon",3),a.Kb(),a.Lb(5,"div",4),a.Jb(6,"img",5),a.Kb(),a.Lb(7,"ion-card",6),a.Lb(8,"ion-card-content"),a.kc(9,g,2,0,"div",7),a.kc(10,f,2,0,"h2",8),a.kc(11,h,2,0,"h2",9),a.kc(12,v,17,5,"ion-item",10),a.Kb(),a.Kb(),a.kc(13,C,14,2,"ion-card",11),a.Lb(14,"ion-card",6),a.Lb(15,"ion-card-content"),a.Lb(16,"h1"),a.lc(17," Meus dados "),a.Kb(),a.Lb(18,"div",12),a.Lb(19,"h6"),a.lc(20,"Nome:"),a.Kb(),a.Lb(21,"h4"),a.lc(22),a.Kb(),a.Kb(),a.Lb(23,"div",12),a.Lb(24,"h6"),a.lc(25,"Telefone:"),a.Kb(),a.Lb(26,"h4"),a.lc(27),a.Wb(28,"mask"),a.Kb(),a.Kb(),a.kc(29,k,6,4,"div",13),a.kc(30,O,6,4,"div",13),a.Lb(31,"div",12),a.Lb(32,"h6"),a.lc(33,"E-mail:"),a.Kb(),a.Lb(34,"h4"),a.lc(35),a.Kb(),a.Kb(),a.Lb(36,"ion-button",14),a.Tb("click",(function(){return i.alterarDadosCadastrais()})),a.Lb(37,"span"),a.lc(38,"ALTERAR"),a.Kb(),a.Jb(39,"ion-icon",15),a.Kb(),a.Lb(40,"ion-button",14),a.Tb("click",(function(){return i.ativarNotificacoes()})),a.lc(41,"Ativar notifica\xe7\xf5es"),a.Kb(),a.Kb(),a.Kb(),a.Jb(42,"div",16,17),a.Kb()),2&o&&(a.cc("fullscreen",!0),a.yb(9),a.cc("ngIf",i.corridasEmAberto.length>0),a.yb(1),a.cc("ngIf",i.corridasEmAberto.length>0),a.yb(1),a.cc("ngIf",0==i.corridasEmAberto.length),a.yb(1),a.cc("ngForOf",i.corridasEmAberto),a.yb(1),a.cc("ngIf",i.usuarioLogado.admin),a.yb(9),a.mc(i.usuarioLogado.nome),a.yb(5),a.mc(a.Xb(28,11,i.usuarioLogado.telefone,"(00) 0 0000-0000")),a.yb(2),a.cc("ngIf",i.usuarioLogado._cliente.cpf),a.yb(1),a.cc("ngIf",i.usuarioLogado._cliente.cnpj),a.yb(5),a.mc(i.usuarioLogado._cliente.email))},directives:[t.h,l.a,t.o,t.p,t.j,t.f,t.g,d.l,d.k,t.e,t.l],pipes:[u.a,d.e,d.c],styles:["ion-content[_ngcontent-%COMP%]{--background:#513dd9}ion-item[_ngcontent-%COMP%]{--background-focused:#fff!important}.info[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:20px}.info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;text-align:center}.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;font-size:16px;white-space:normal}.info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#8c8c8c}.info[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px;border-bottom:solid;border-color:#e4e4e4;border-width:1px}.info[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:10px}.atualizar-corridas[_ngcontent-%COMP%]{text-align:center;font-size:35px}.detalhe-corrida[_ngcontent-%COMP%]{border-bottom:solid;border-width:1px;border-color:#715fe6}"]}),o})()}];let _=(()=>{class o{}return o.\u0275mod=a.Gb({type:o}),o.\u0275inj=a.Fb({factory:function(i){return new(i||o)},imports:[[c.i.forChild(M)],c.i]}),o})();var P=n("onrN");let I=(()=>{class o{}return o.\u0275mod=a.Gb({type:o}),o.\u0275inj=a.Fb({factory:function(i){return new(i||o)},providers:[],imports:[[t.w,P.a,_]]}),o})()}}]);