(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{MpVM:function(o,i,t){"use strict";t.r(i),t.d(i,"InicioPageModule",(function(){return M}));var n=t("tyNb"),a=t("mrSG"),e=t("fXoL"),r=t("Dp36"),c=t("TEn/"),s=t("6QPC"),l=t("Rzux"),b=t("WOgW"),d=t("fkzy"),u=t("9qa2"),g=t("ofXK");function p(o,i){if(1&o){const o=e.Mb();e.Lb(0,"div",10),e.Tb("click",(function(){return e.hc(o),e.Vb().minhaConta()})),e.lc(1," Bem-vindo "),e.Lb(2,"span",11),e.Lb(3,"strong"),e.lc(4),e.Kb(),e.Kb(),e.Kb()}if(2&o){const o=e.Vb();e.yb(4),e.mc(o.usuarioLogado.nome)}}function h(o,i){if(1&o){const o=e.Mb();e.Lb(0,"ion-button",12),e.Tb("click",(function(){return e.hc(o),e.Vb().sair()})),e.Lb(1,"span"),e.lc(2,"SAIR"),e.Kb(),e.Kb()}}function f(o,i){if(1&o){const o=e.Mb();e.Lb(0,"div",13),e.Tb("click",(function(){return e.hc(o),e.Vb().abreCorridaEmAberto()})),e.Jb(1,"ion-icon",14),e.Lb(2,"span"),e.lc(3,"Voc\xea possui solicita\xe7\xf5es em aberto. "),e.Jb(4,"br"),e.lc(5,"Clique aqui para verificar."),e.Kb(),e.Kb()}}function m(o,i){if(1&o){const o=e.Mb();e.Lb(0,"ion-button",15),e.Tb("click",(function(){return e.hc(o),e.Vb().fazerLogin()})),e.Lb(1,"span"),e.lc(2,"ENTRAR/CADASTRAR"),e.Kb(),e.Jb(3,"ion-icon",16),e.Kb()}}function C(o,i){if(1&o){const o=e.Mb();e.Lb(0,"ion-button",15),e.Tb("click",(function(){return e.hc(o),e.Vb().minhaConta()})),e.Lb(1,"span"),e.lc(2,"MINHA CONTA"),e.Kb(),e.Jb(3,"ion-icon",17),e.Kb()}}function P(o,i){if(1&o){const o=e.Mb();e.Lb(0,"ion-button",15),e.Tb("click",(function(){return e.hc(o),e.Vb().installPwa()})),e.Lb(1,"span"),e.lc(2,"INSTALAR APP"),e.Kb(),e.Jb(3,"ion-icon",18),e.Kb()}}const v=[{path:"",component:(()=>{class o{constructor(o,i,t,n,a,e,r,c,s){this.api=o,this.alertCtrl=i,this.Pwa=t,this.platform=n,this.messagingService=a,this.androidPermissions=e,this.utils=r,this.navController=c,this.modalController=s,this.usuarioLogado={},this.verificaPermissoes()}ionViewWillEnter(){return Object(a.b)(this,void 0,void 0,(function*(){if(this.usuarioLogado=this.api.retornaUsuarioLogado(),this.usuarioLogado&&this.usuarioLogado._id){yield this.utils.showSpinner();let o="seguro-cliente/cliente/logado",i=yield this.api.get(o);this.usuarioLogado=i.data,this.utils.gravaStorage(this.api.chaveUsuarioLogadoStorage,this.usuarioLogado),yield this.utils.cancelSpinner(),this.messagingService.requestPermission(()=>{this.messagingService.aoReceberMensagem((o,i)=>{})}),this.verificaCorridaEmAberto()}}))}verificaPermissoes(){return Object(a.b)(this,void 0,void 0,(function*(){yield this.verificaPermissao(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION),yield this.verificaPermissao(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION),yield this.verificaPermissao(this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS)}))}verificaPermissao(o){return Object(a.b)(this,void 0,void 0,(function*(){try{yield this.androidPermissions.requestPermission(o)}catch(i){}}))}verificaCorridaEmAberto(){return Object(a.b)(this,void 0,void 0,(function*(){if(this.usuarioLogado&&this.usuarioLogado._id){let o="seguro-cliente/corrida/cliente/abertas",i=yield this.api.get(o);this.corridaEmAberto=i.data}}))}fazerLogin(){return Object(a.b)(this,void 0,void 0,(function*(){(yield this.utils.fazerLogin())&&(this.usuarioLogado=this.api.retornaUsuarioLogado())}))}minhaConta(){this.navController.navigateRoot(["/meus-dados"])}abreCorridaEmAberto(){this.corridaEmAberto&&1==this.corridaEmAberto.length?(this.utils.gravaStorage("corrida",this.corridaEmAberto[0]),this.navController.navigateRoot(["/solicitacao"])):this.minhaConta()}solicitarEntrega(){this.utils.removeStorage("corrida"),this.navController.navigateRoot(["/solicitacao"])}sair(){this.utils.gravaStorage(this.api.chaveUsuarioLogadoStorage,{}),this.usuarioLogado={_cliente:{}}}baixarApp(){return Object(a.b)(this,void 0,void 0,(function*(){let o=yield this.alertCtrl.create({message:"Qual o tipo do seu smartphone?",buttons:[{text:"Iphone",handler:()=>{this.utils.mensagemAviso("App n\xe3o dispon\xedvel para Iphone. Por favor solicite a entrega por esta p\xe1gina.")}},{text:"Android",handler:()=>{window.open("https://play.google.com/store/apps/details?id=br.com.impactech.gotele.app","_blank")}},{text:"Voltar",role:"cancel",handler:()=>{}}]});yield o.present()}))}installPwa(){this.Pwa.promptEvent.prompt()}}return o.\u0275fac=function(i){return new(i||o)(e.Ib(r.a),e.Ib(c.a),e.Ib(s.a),e.Ib(c.B),e.Ib(l.a),e.Ib(b.a),e.Ib(d.a),e.Ib(c.A),e.Ib(c.z))},o.\u0275cmp=e.Cb({type:o,selectors:[["app-inicio"]],decls:13,vars:7,consts:[["appScrollbarTheme","",3,"fullscreen"],["class","identificacao-usuario",3,"click",4,"ngIf"],["class","botao-sair",3,"click",4,"ngIf"],[1,"logo"],["src","/assets/logo.png"],[1,"opcoes"],["class","corrida-em-aberto",3,"click",4,"ngIf"],[1,"botao-principal",3,"click"],["name","caret-forward-outline"],["class","botao-acao-secundaria",3,"click",4,"ngIf"],[1,"identificacao-usuario",3,"click"],[2,"font-size","1.2rem"],[1,"botao-sair",3,"click"],[1,"corrida-em-aberto",3,"click"],["name","information-circle-outline"],[1,"botao-acao-secundaria",3,"click"],["name","log-in-outline"],["name","person-outline"],["name","cloud-download-outline"]],template:function(o,i){1&o&&(e.Lb(0,"ion-content",0),e.kc(1,p,5,1,"div",1),e.kc(2,h,3,0,"ion-button",2),e.Lb(3,"div",3),e.Jb(4,"img",4),e.Kb(),e.Lb(5,"div",5),e.kc(6,f,6,0,"div",6),e.Lb(7,"ion-button",7),e.Tb("click",(function(){return i.solicitarEntrega()})),e.lc(8," SOLICITAR ENTREGA "),e.Jb(9,"ion-icon",8),e.Kb(),e.kc(10,m,4,0,"ion-button",9),e.kc(11,C,4,0,"ion-button",9),e.kc(12,P,4,0,"ion-button",9),e.Kb(),e.Kb()),2&o&&(e.cc("fullscreen",!0),e.yb(1),e.cc("ngIf",i.usuarioLogado._id),e.yb(1),e.cc("ngIf",i.usuarioLogado._id),e.yb(4),e.cc("ngIf",i.corridaEmAberto&&i.corridaEmAberto.length>0),e.yb(4),e.cc("ngIf",!i.usuarioLogado._id),e.yb(1),e.cc("ngIf",i.usuarioLogado._id),e.yb(1),e.cc("ngIf",i.Pwa.promptEvent))},directives:[c.h,u.a,g.l,c.e,c.j],styles:["ion-content[_ngcontent-%COMP%]{--background:#513dd9}.opcoes[_ngcontent-%COMP%]{width:100%;position:fixed;bottom:0;text-align:center;background:rgba(81,61,217,.6588235294117647);padding:10px 10px 20px}.opcoes[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:6px}.opcoes[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#494949}.opcoes[_ngcontent-%COMP%]   .botao-principal[_ngcontent-%COMP%]{font-size:17px;--background:#1ac6e2;--padding-start:25px;margin-top:5px;margin-right:auto;margin-left:auto;height:52px;--border-radius:10px;--padding:15px;display:block;max-width:280px}.logo[_ngcontent-%COMP%]{margin:100px auto auto;width:85%}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:flex}.botao-sair[_ngcontent-%COMP%]{color:#eaa0a0;height:35px;width:50px;--background:none!important;--box-shadow:none!important;position:fixed;top:0;right:5px}.identificacao-usuario[_ngcontent-%COMP%]{color:#fff;position:fixed;width:calc(100% - 100px);top:10px;left:10px}.cadastro-cliente[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:10px;font-size:20px}.cadastro-cliente[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{position:fixed;bottom:80px;text-align:center}.botao-acao-secundaria[_ngcontent-%COMP%]{margin-top:10px}.corrida-em-aberto[_ngcontent-%COMP%]{margin-bottom:10px;background-color:rgba(0,0,0,.16862745098039217);padding:10px;color:#fff}.corrida-em-aberto[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}.corrida-em-aberto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;cursor:pointer;padding-top:0}.instalar[_ngcontent-%COMP%]{text-align:center;width:100%;font-size:1.3rem;font-weight:500;color:#fff;margin:50px auto auto;display:flex;cursor:pointer}.instalar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:auto}.instalar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:auto}"]}),o})()}];let O=(()=>{class o{}return o.\u0275mod=e.Gb({type:o}),o.\u0275inj=e.Fb({factory:function(i){return new(i||o)},imports:[[n.i.forChild(v)],n.i]}),o})();var L=t("onrN");let M=(()=>{class o{}return o.\u0275mod=e.Gb({type:o}),o.\u0275inj=e.Fb({factory:function(i){return new(i||o)},imports:[[L.a,O]]}),o})()}}]);