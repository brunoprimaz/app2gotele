(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2yxt":function(n,t,e){"use strict";e.r(t),e.d(t,"ChatPageModule",(function(){return C}));var i=e("tyNb"),o=e("mrSG"),a=e("fXoL"),c=e("Dp36"),r=e("fkzy"),s=e("TEn/"),l=e("ofXK"),d=e("9qa2"),g=e("3Pt+");function h(n,t){1&n&&(a.Lb(0,"span",13),a.lc(1," (OFFLINE)"),a.Kb())}function b(n,t){if(1&n&&(a.Lb(0,"div",16),a.Lb(1,"span"),a.lc(2),a.Kb(),a.Kb()),2&n){const n=a.Vb().$implicit;a.yb(2),a.nc(" ",n.mensagem," ")}}function f(n,t){if(1&n&&(a.Lb(0,"div",17),a.Lb(1,"span"),a.lc(2),a.Kb(),a.Kb()),2&n){const n=a.Vb().$implicit;a.yb(2),a.nc(" ",n.mensagem," ")}}function m(n,t){if(1&n&&(a.Lb(0,"ion-item"),a.kc(1,b,3,1,"div",14),a.kc(2,f,3,1,"div",15),a.Kb()),2&n){const n=t.$implicit;a.yb(1),a.cc("ngIf",!n.envioCliente),a.yb(1),a.cc("ngIf",n.envioCliente)}}function u(n,t){if(1&n){const n=a.Mb();a.Lb(0,"ion-content",1),a.Lb(1,"div",2),a.Jb(2,"img",3),a.Kb(),a.Lb(3,"div",4),a.Tb("click",(function(){return a.hc(n),a.Vb().voltar()})),a.Jb(4,"ion-icon",5),a.Kb(),a.Lb(5,"h6"),a.lc(6),a.kc(7,h,2,0,"span",6),a.Kb(),a.Lb(8,"ion-card",7),a.Lb(9,"ion-card-content"),a.Lb(10,"ion-list"),a.kc(11,m,3,2,"ion-item",8),a.Kb(),a.Lb(12,"div",9),a.Lb(13,"ion-textarea",10),a.Tb("ngModelChange",(function(t){return a.hc(n),a.Vb().mensagem=t})),a.Kb(),a.Lb(14,"div",11),a.Tb("click",(function(){return a.hc(n),a.Vb().enviar()})),a.Jb(15,"ion-icon",12),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb()}if(2&n){const n=a.Vb();a.cc("fullscreen",!0),a.yb(6),a.nc(" Chat com ",n.corrida._entregador.nome," "),a.yb(1),a.cc("ngIf",n.offline),a.yb(4),a.cc("ngForOf",n.mensagens),a.yb(2),a.cc("ngModel",n.mensagem)}}const p=[{path:"",component:(()=>{class n{constructor(n,t,e){this.api=n,this.utils=t,this.navController=e,this.mensagens=[],this.usuarioLogado={},this.offline=!1}ionViewWillEnter(){return Object(o.b)(this,void 0,void 0,(function*(){try{this.offline=!1,this.usuarioLogado=this.api.retornaUsuarioLogado();let n=this.utils.retornaStorage("corrida");n&&(this.corrida=n),this.carregarDados()}catch(n){}}))}carregarDados(){this.api.get("seguro-cliente/corrida/"+this.corrida._id+"/chat").then(n=>Object(o.b)(this,void 0,void 0,(function*(){this.offline=!1,n.error?alert(n.error):n.finalizada?this.voltar({finalizada:!0}):n.data?this.mensagens.length!=n.data.mensagens.length&&(this.mensagens=n.data.mensagens||[]):this.voltar()}))).catch(n=>{this.offline=!0}),clearTimeout(this.timer),this.timer=setTimeout(()=>{this.carregarDados()},3e3)}enviar(){return Object(o.b)(this,void 0,void 0,(function*(){if(!this.mensagem)return;yield this.utils.showSpinner();let n={};n._corrida=this.corrida._id,n.mensagem=this.mensagem,n.envioCliente=!0,this.api.post("seguro-cliente/corrida/"+this.corrida._id+"/chat",n).then(n=>Object(o.b)(this,void 0,void 0,(function*(){yield this.utils.cancelSpinner(),n.error?alert(n.error):(this.mensagens=n.data,this.mensagem="")}))).catch(n=>Object(o.b)(this,void 0,void 0,(function*(){yield this.utils.cancelSpinner(),alert("Ocorreu um erro ao enviar. Verifique sua conex\xe3o!")})))}))}voltar(n){clearTimeout(this.timer),this.navController.navigateRoot(["/solicitacao"])}}return n.\u0275fac=function(t){return new(t||n)(a.Ib(c.a),a.Ib(r.a),a.Ib(s.A))},n.\u0275cmp=a.Cb({type:n,selectors:[["page-chat"]],decls:1,vars:1,consts:[["appScrollbarTheme","","class","chat",3,"fullscreen",4,"ngIf"],["appScrollbarTheme","",1,"chat",3,"fullscreen"],[1,"logo-miniatura-top"],["src","/assets/logoMiniatura.png"],[1,"botao-sair-x",3,"click"],["name","close-outline"],["style","color: #ff8484;",4,"ngIf"],["ion-fixed",""],[4,"ngFor","ngForOf"],[1,"rodape"],["rows","2","placeholder","Mensagem",1,"mensagem",3,"ngModel","ngModelChange"],[1,"botao-enviar",3,"click"],["name","send"],[2,"color","#ff8484"],["class","mensagem-chat chat-entregador",4,"ngIf"],["class","mensagem-chat chat-cliente",4,"ngIf"],[1,"mensagem-chat","chat-entregador"],[1,"mensagem-chat","chat-cliente"]],template:function(n,t){1&n&&a.kc(0,u,16,5,"ion-content",0),2&n&&a.cc("ngIf",t.corrida)},directives:[l.l,s.h,d.a,s.j,s.f,s.g,s.n,l.k,s.u,s.D,g.g,g.h,s.l],styles:["ion-content[_ngcontent-%COMP%]{--background:#513dd9}ion-card[_ngcontent-%COMP%]{height:calc(100% - 110px);margin:0;width:100%}ion-card-content[_ngcontent-%COMP%]{height:calc(100% - 190px);overflow-y:auto;position:fixed;width:100%;padding:0;flex-direction:column-reverse;display:flex}h6[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff}.mensagem-chat[_ngcontent-%COMP%]{width:100%;display:flex;margin-bottom:2px}.mensagem-chat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{max-width:90%;color:#fff;padding:5px 10px;border-radius:5px}.chat-cliente[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#949494;margin-right:0;margin-left:auto}.chat-entregador[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#1394b1;margin-right:auto;margin-left:0}.botao-enviar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:20px}ion-textarea[_ngcontent-%COMP%]{width:calc(100% - 75px);bottom:5px;border:solid;border-width:1px;border-color:#b7b5b5;border-radius:10px}.rodape[_ngcontent-%COMP%]{position:fixed;width:100%;bottom:20px;left:15px}.rodape[_ngcontent-%COMP%]   .mensagem[_ngcontent-%COMP%]{width:calc(100% - 80px);background-color:#fff}.rodape[_ngcontent-%COMP%]   .botao-enviar[_ngcontent-%COMP%]{font-size:35px;width:80px}"]}),n})()}];let v=(()=>{class n{}return n.\u0275mod=a.Gb({type:n}),n.\u0275inj=a.Fb({factory:function(t){return new(t||n)},imports:[[i.i.forChild(p)],i.i]}),n})();var x=e("onrN");let C=(()=>{class n{}return n.\u0275mod=a.Gb({type:n}),n.\u0275inj=a.Fb({factory:function(t){return new(t||n)},imports:[[x.a,v]]}),n})()}}]);