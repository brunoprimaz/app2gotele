!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function t(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2yxt":function(e,r,i){"use strict";i.r(r),i.d(r,"ChatPageModule",(function(){return M}));var o=i("tyNb"),a=i("mrSG"),c=i("fXoL"),s=i("Dp36"),u=i("fkzy"),l=i("TEn/"),f=i("ofXK"),g=i("9qa2"),d=i("3Pt+");function h(n,e){1&n&&(c.Lb(0,"span",13),c.lc(1," (OFFLINE)"),c.Kb())}function b(n,e){if(1&n&&(c.Lb(0,"div",16),c.Lb(1,"span"),c.lc(2),c.Kb(),c.Kb()),2&n){var t=c.Vb().$implicit;c.yb(2),c.nc(" ",t.mensagem," ")}}function m(n,e){if(1&n&&(c.Lb(0,"div",17),c.Lb(1,"span"),c.lc(2),c.Kb(),c.Kb()),2&n){var t=c.Vb().$implicit;c.yb(2),c.nc(" ",t.mensagem," ")}}function p(n,e){if(1&n&&(c.Lb(0,"ion-item"),c.kc(1,b,3,1,"div",14),c.kc(2,m,3,1,"div",15),c.Kb()),2&n){var t=e.$implicit;c.yb(1),c.cc("ngIf",!t.envioCliente),c.yb(1),c.cc("ngIf",t.envioCliente)}}function v(n,e){if(1&n){var t=c.Mb();c.Lb(0,"ion-content",1),c.Lb(1,"div",2),c.Jb(2,"img",3),c.Kb(),c.Lb(3,"div",4),c.Tb("click",(function(){return c.hc(t),c.Vb().voltar()})),c.Jb(4,"ion-icon",5),c.Kb(),c.Lb(5,"h6"),c.lc(6),c.kc(7,h,2,0,"span",6),c.Kb(),c.Lb(8,"ion-card",7),c.Lb(9,"ion-card-content"),c.Lb(10,"ion-list"),c.kc(11,p,3,2,"ion-item",8),c.Kb(),c.Lb(12,"div",9),c.Lb(13,"ion-textarea",10),c.Tb("ngModelChange",(function(n){return c.hc(t),c.Vb().mensagem=n})),c.Kb(),c.Lb(14,"div",11),c.Tb("click",(function(){return c.hc(t),c.Vb().enviar()})),c.Jb(15,"ion-icon",12),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()}if(2&n){var r=c.Vb();c.cc("fullscreen",!0),c.yb(6),c.nc(" Chat com ",r.corrida._entregador.nome," "),c.yb(1),c.cc("ngIf",r.offline),c.yb(4),c.cc("ngForOf",r.mensagens),c.yb(2),c.cc("ngModel",r.mensagem)}}var x,w,y,C=[{path:"",component:(x=function(){function e(t,r,i){n(this,e),this.api=t,this.utils=r,this.navController=i,this.mensagens=[],this.usuarioLogado={},this.offline=!1}return t(e,[{key:"ionViewWillEnter",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{this.offline=!1,this.usuarioLogado=this.api.retornaUsuarioLogado(),(e=this.utils.retornaStorage("corrida"))&&(this.corrida=e),this.carregarDados()}catch(t){}case 1:case"end":return n.stop()}}),n,this)})))}},{key:"carregarDados",value:function(){var n=this;this.api.get("seguro-cliente/corrida/"+this.corrida._id+"/chat").then((function(e){return Object(a.b)(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.offline=!1,e.error?alert(e.error):e.finalizada?this.voltar({finalizada:!0}):e.data?this.mensagens.length!=e.data.mensagens.length&&(this.mensagens=e.data.mensagens||[]):this.voltar();case 1:case"end":return n.stop()}}),n,this)})))})).catch((function(e){n.offline=!0})),clearTimeout(this.timer),this.timer=setTimeout((function(){n.carregarDados()}),3e3)}},{key:"enviar",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.mensagem){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,this.utils.showSpinner();case 4:(e={})._corrida=this.corrida._id,e.mensagem=this.mensagem,e.envioCliente=!0,this.api.post("seguro-cliente/corrida/"+this.corrida._id+"/chat",e).then((function(n){return Object(a.b)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.utils.cancelSpinner();case 2:n.error?alert(n.error):(this.mensagens=n.data,this.mensagem="");case 3:case"end":return e.stop()}}),e,this)})))})).catch((function(n){return Object(a.b)(t,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.utils.cancelSpinner();case 2:alert("Ocorreu um erro ao enviar. Verifique sua conex\xe3o!");case 3:case"end":return n.stop()}}),n,this)})))}));case 6:case"end":return n.stop()}}),n,this)})))}},{key:"voltar",value:function(n){clearTimeout(this.timer),this.navController.navigateRoot(["/solicitacao"])}}]),e}(),x.\u0275fac=function(n){return new(n||x)(c.Ib(s.a),c.Ib(u.a),c.Ib(l.A))},x.\u0275cmp=c.Cb({type:x,selectors:[["page-chat"]],decls:1,vars:1,consts:[["appScrollbarTheme","","class","chat",3,"fullscreen",4,"ngIf"],["appScrollbarTheme","",1,"chat",3,"fullscreen"],[1,"logo-miniatura-top"],["src","/assets/logoMiniatura.png"],[1,"botao-sair-x",3,"click"],["name","close-outline"],["style","color: #ff8484;",4,"ngIf"],["ion-fixed",""],[4,"ngFor","ngForOf"],[1,"rodape"],["rows","2","placeholder","Mensagem",1,"mensagem",3,"ngModel","ngModelChange"],[1,"botao-enviar",3,"click"],["name","send"],[2,"color","#ff8484"],["class","mensagem-chat chat-entregador",4,"ngIf"],["class","mensagem-chat chat-cliente",4,"ngIf"],[1,"mensagem-chat","chat-entregador"],[1,"mensagem-chat","chat-cliente"]],template:function(n,e){1&n&&c.kc(0,v,16,5,"ion-content",0),2&n&&c.cc("ngIf",e.corrida)},directives:[f.l,l.h,g.a,l.j,l.f,l.g,l.n,f.k,l.u,l.D,d.g,d.h,l.l],styles:["ion-content[_ngcontent-%COMP%]{--background:#513dd9}ion-card[_ngcontent-%COMP%]{height:calc(100% - 110px);margin:0;width:100%}ion-card-content[_ngcontent-%COMP%]{height:calc(100% - 190px);overflow-y:auto;position:fixed;width:100%;padding:0;flex-direction:column-reverse;display:flex}h6[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff}.mensagem-chat[_ngcontent-%COMP%]{width:100%;display:flex;margin-bottom:2px}.mensagem-chat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{max-width:90%;color:#fff;padding:5px 10px;border-radius:5px}.chat-cliente[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#949494;margin-right:0;margin-left:auto}.chat-entregador[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#1394b1;margin-right:auto;margin-left:0}.botao-enviar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:20px}ion-textarea[_ngcontent-%COMP%]{width:calc(100% - 75px);bottom:5px;border:solid;border-width:1px;border-color:#b7b5b5;border-radius:10px}.rodape[_ngcontent-%COMP%]{position:fixed;width:100%;bottom:20px;left:15px}.rodape[_ngcontent-%COMP%]   .mensagem[_ngcontent-%COMP%]{width:calc(100% - 80px);background-color:#fff}.rodape[_ngcontent-%COMP%]   .botao-enviar[_ngcontent-%COMP%]{font-size:35px;width:80px}"]}),x)}],O=((w=t((function e(){n(this,e)}))).\u0275mod=c.Gb({type:w}),w.\u0275inj=c.Fb({factory:function(n){return new(n||w)},imports:[[o.i.forChild(C)],o.i]}),w),k=i("onrN"),M=((y=t((function e(){n(this,e)}))).\u0275mod=c.Gb({type:y}),y.\u0275inj=c.Fb({factory:function(n){return new(n||y)},imports:[[k.a,O]]}),y)}}])}();