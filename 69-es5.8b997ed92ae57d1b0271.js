!function(){function n(n,t,e,r,o,i,c){try{var u=n[i](c),s=u.value}catch(a){return void e(a)}u.done?t(s):Promise.resolve(s).then(r,o)}function t(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function u(t){n(c,o,i,u,s,"next",t)}function s(t){n(c,o,i,u,s,"throw",t)}u(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{eVst:function(n,e,r){"use strict";r.r(e),r.d(e,"startStatusTap",(function(){return c}));var o=r("wEJo"),i=r("W6o/"),c=function(){var n=window;n.addEventListener("statusTap",(function(){Object(o.h)((function(){var e=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(e){var r=e.closest("ion-content");r&&new Promise((function(n){return Object(i.c)(r,n)})).then((function(){Object(o.f)(t(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.style.setProperty("--overflow","hidden"),n.next=3,r.scrollToTop(300);case 3:r.style.removeProperty("--overflow");case 4:case"end":return n.stop()}}),n)}))))}))}}))}))}}}])}();