(self["webpackChunkreact_h5_example"]=self["webpackChunkreact_h5_example"]||[]).push([["mf-dep_574"],{82574:function(t,e,n){"use strict";n.r(e),n.d(e,{__esModule:function(){return r.X$},enableAllPlugins:function(){return r.GP},enableES5:function(){return r.pV}});var r=n(75985);e["default"]=r.ZP},75985:function(t,e,n){"use strict";function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}Object.defineProperty(e,"X$",{value:!0});var o=n(2700),i=r(o);function u(){return{_handleActions:function(t,e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0,o=r.type,u=i(n,(function(e){var n=t[o];if(n){var i=n(e,r);if(void 0!==i)return i}}));return void 0===u?{}:u}}}}Object.defineProperty(e,"GP",{enumerable:!0,get:function(){return o.enableAllPlugins}}),Object.defineProperty(e,"pV",{enumerable:!0,get:function(){return o.enableES5}}),e.ZP=u},2700:function(t,e,n){"use strict";function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[Y]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[Q]||!!t.constructor[Q]||p(t)||v(t))}function u(t){return o(t)||r(23,t),t[Y].t}function a(t,e,n){void 0===n&&(n=!1),0===c(t)?(n?Object.keys:et)(t).forEach((function(r){n&&"symbol"==typeof r||e(r,t[r],t)})):t.forEach((function(n,r){return e(r,n,t)}))}function c(t){var e=t[Y];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:p(t)?2:v(t)?3:0}function f(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function s(t,e){return 2===c(t)?t.get(e):t[e]}function l(t,e,n){var r=c(t);2===r?t.set(e,n):3===r?(t["delete"](e),t.add(n)):t[e]=n}function h(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function p(t){return q&&t instanceof Map}function v(t){return B&&t instanceof Set}function d(t){return t.o||t.t}function y(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=nt(t);delete e[Y];for(var n=et(e),r=0;r<n.length;r++){var o=n[r],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function b(t,e){P(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t["delete"]=g),Object.freeze(t),e&&a(t,(function(t,e){return b(e,!0)}),!0))}function g(){r(2)}function P(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=rt[t];return e||r(18,t),e}function O(t,e){rt[t]||(rt[t]=e)}function w(){return V}function A(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function j(t){D(t),t.p.forEach(_),t.p=null}function D(t){t===V&&(V=t.l)}function S(t){return V={p:[],l:V,h:t,m:!0,_:0}}function _(t){var e=t[Y];0===e.i||1===e.i?e.j():e.g=!0}function k(t,e){e._=e.p.length;var n=e.p[0],o=void 0!==t&&t!==n;return e.h.O||m("ES5").S(e,t,o),o?(n[Y].P&&(j(e),r(4)),i(t)&&(t=E(e,t),e.l||M(e,t)),e.u&&m("Patches").M(n[Y],t,e.u,e.s)):t=E(e,n,[]),j(e),e.u&&e.v(e.u,e.s),t!==L?t:void 0}function E(t,e,n){if(P(e))return e;var r=e[Y];if(!r)return a(e,(function(o,i){return x(t,r,e,o,i,n)}),!0),e;if(r.A!==t)return e;if(!r.P)return M(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=y(r.k):r.o;a(3===r.i?new Set(o):o,(function(e,i){return x(t,r,o,e,i,n)})),M(t,o,!1),n&&t.u&&m("Patches").R(r,n,t.u,t.s)}return r.o}function x(t,e,n,r,u,a){if(o(u)){var c=E(t,u,a&&e&&3!==e.i&&!f(e.D,r)?a.concat(r):void 0);if(l(n,r,c),!o(c))return;t.m=!1}if(i(u)&&!P(u)){if(!t.h.N&&t._<1)return;E(t,u),e&&e.A.l||M(t,u)}}function M(t,e,n){void 0===n&&(n=!1),t.h.N&&t.m&&b(e,n)}function z(t,e){var n=t[Y];return(n?d(n):t)[e]}function I(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function F(t){t.P||(t.P=!0,t.l&&F(t.l))}function N(t){t.o||(t.o=y(t.t))}function R(t,e,n){var r=p(e)?m("MapSet").T(e,n):v(e)?m("MapSet").F(e,n):t.O?function(t,e){var n=Array.isArray(t),r={i:n?1:0,A:e?e.A:w(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=r,i=ot;n&&(o=[r],i=it);var u=Proxy.revocable(o,i),a=u.revoke,c=u.proxy;return r.k=c,r.j=a,c}(e,n):m("ES5").J(e,n);return(n?n.A:w()).p.push(r),r}function C(t){return o(t)||r(22,t),function t(e){if(!i(e))return e;var n,r=e[Y],o=c(e);if(r){if(!r.P&&(r.i<4||!m("ES5").K(r)))return r.t;r.I=!0,n=K(e,o),r.I=!1}else n=K(e,o);return a(n,(function(e,o){r&&s(r.t,e)===o||l(n,e,t(o))})),3===o?new Set(n):n}(t)}function K(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return y(t)}function W(){function t(t,e){var n=i[t];return n?n.enumerable=e:i[t]=n={configurable:!0,enumerable:e,get:function(){var e=this[Y];return ot.get(e,t)},set:function(e){var n=this[Y];ot.set(n,t,e)}},n}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][Y];if(!o.P)switch(o.i){case 5:r(o)&&F(o);break;case 4:n(o)&&F(o)}}}function n(t){for(var e=t.t,n=t.k,r=et(n),o=r.length-1;o>=0;o--){var i=r[o];if(i!==Y){var u=e[i];if(void 0===u&&!f(e,i))return!0;var a=n[i],c=a&&a[Y];if(c?c.t!==u:!h(a,u))return!0}}var s=!!e[Y];return r.length!==et(e).length+(s?0:1)}function r(t){var e=t.k;if(e.length!==t.t.length)return!0;var n=Object.getOwnPropertyDescriptor(e,e.length-1);return!(!n||n.get)}var i={};O("ES5",{J:function(e,n){var r=Array.isArray(e),o=function(e,n){if(e){for(var r=Array(n.length),o=0;o<n.length;o++)Object.defineProperty(r,""+o,t(o,!0));return r}var i=nt(n);delete i[Y];for(var u=et(i),a=0;a<u.length;a++){var c=u[a];i[c]=t(c,e||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(n),i)}(r,e),i={i:r?5:4,A:n?n.A:w(),P:!1,I:!1,D:{},l:n,t:e,k:o,o:null,g:!1,C:!1};return Object.defineProperty(o,Y,{value:i,writable:!0}),o},S:function(t,n,i){i?o(n)&&n[Y].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var n=e[Y];if(n){var o=n.t,i=n.k,u=n.D,c=n.i;if(4===c)a(i,(function(e){e!==Y&&(void 0!==o[e]||f(o,e)?u[e]||t(i[e]):(u[e]=!0,F(n)))})),a(o,(function(t){void 0!==i[t]||f(i,t)||(u[t]=!1,F(n))}));else if(5===c){if(r(n)&&(F(n),u.length=!0),i.length<o.length)for(var s=i.length;s<o.length;s++)u[s]=!1;else for(var l=o.length;l<i.length;l++)u[l]=!0;for(var h=Math.min(i.length,o.length),p=0;p<h;p++)void 0===u[p]&&t(i[p])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?n(t):r(t)}})}function $(){function t(e){if(!i(e))return e;if(Array.isArray(e))return e.map(t);if(p(e))return new Map(Array.from(e.entries()).map((function(e){return[e[0],t(e[1])]})));if(v(e))return new Set(Array.from(e).map(t));var n=Object.create(Object.getPrototypeOf(e));for(var r in e)n[r]=t(e[r]);return n}function e(e){return o(e)?t(e):e}var n="add";O("Patches",{$:function(e,o){return o.forEach((function(o){for(var i=o.path,u=o.op,a=e,f=0;f<i.length-1;f++)"object"!=typeof(a=s(a,i[f]))&&r(15,i.join("/"));var l=c(a),h=t(o.value),p=i[i.length-1];switch(u){case"replace":switch(l){case 2:return a.set(p,h);case 3:r(16);default:return a[p]=h}case n:switch(l){case 1:return a.splice(p,0,h);case 2:return a.set(p,h);case 3:return a.add(h);default:return a[p]=h}case"remove":switch(l){case 1:return a.splice(p,1);case 2:return a["delete"](p);case 3:return a["delete"](o.value);default:return delete a[p]}default:r(17,u)}})),e},R:function(t,r,o,i){switch(t.i){case 0:case 4:case 2:return function(t,r,o,i){var u=t.t,c=t.o;a(t.D,(function(t,a){var l=s(u,t),h=s(c,t),p=a?f(u,t)?"replace":n:"remove";if(l!==h||"replace"!==p){var v=r.concat(t);o.push("remove"===p?{op:p,path:v}:{op:p,path:v,value:h}),i.push(p===n?{op:"remove",path:v}:"remove"===p?{op:n,path:v,value:e(l)}:{op:"replace",path:v,value:e(l)})}}))}(t,r,o,i);case 5:case 1:return function(t,r,o,i){var u=t.t,a=t.D,c=t.o;if(c.length<u.length){var f=[c,u];u=f[0],c=f[1];var s=[i,o];o=s[0],i=s[1]}for(var l=0;l<u.length;l++)if(a[l]&&c[l]!==u[l]){var h=r.concat([l]);o.push({op:"replace",path:h,value:e(c[l])}),i.push({op:"replace",path:h,value:e(u[l])})}for(var p=u.length;p<c.length;p++){var v=r.concat([p]);o.push({op:n,path:v,value:e(c[p])})}u.length<c.length&&i.push({op:"replace",path:r.concat(["length"]),value:u.length})}(t,r,o,i);case 3:return function(t,e,r,o){var i=t.t,u=t.o,a=0;i.forEach((function(t){if(!u.has(t)){var i=e.concat([a]);r.push({op:"remove",path:i,value:t}),o.unshift({op:n,path:i,value:t})}a++})),a=0,u.forEach((function(t){if(!i.has(t)){var u=e.concat([a]);r.push({op:n,path:u,value:t}),o.unshift({op:"remove",path:u,value:t})}a++}))}(t,r,o,i)}},M:function(t,e,n,r){n.push({op:"replace",path:[],value:e}),r.push({op:"replace",path:[],value:t.t})}})}function U(){function t(t,e){function n(){this.constructor=t}u(t,e),t.prototype=(n.prototype=e.prototype,new n)}function e(t){t.o||(t.D=new Map,t.o=new Map(t.t))}function n(t){t.o||(t.o=new Set,t.t.forEach((function(e){if(i(e)){var n=R(t.A.h,e,t);t.p.set(e,n),t.o.add(n)}else t.o.add(e)})))}function o(t){t.g&&r(3,JSON.stringify(d(t)))}var u=function(t,e){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},c=function(){function n(t,e){return this[Y]={i:2,l:e,A:e?e.A:w(),P:!1,I:!1,o:void 0,D:void 0,t:t,k:this,C:!1,g:!1},this}t(n,Map);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return d(this[Y]).size}}),r.has=function(t){return d(this[Y]).has(t)},r.set=function(t,n){var r=this[Y];return o(r),d(r).has(t)&&d(r).get(t)===n||(e(r),F(r),r.D.set(t,!0),r.o.set(t,n),r.D.set(t,!0)),this},r["delete"]=function(t){if(!this.has(t))return!1;var n=this[Y];return o(n),e(n),F(n),n.D.set(t,!1),n.o["delete"](t),!0},r.clear=function(){var t=this[Y];o(t),d(t).size&&(e(t),F(t),t.D=new Map,a(t.t,(function(e){t.D.set(e,!1)})),t.o.clear())},r.forEach=function(t,e){var n=this;d(this[Y]).forEach((function(r,o){t.call(e,n.get(o),o,n)}))},r.get=function(t){var n=this[Y];o(n);var r=d(n).get(t);if(n.I||!i(r))return r;if(r!==n.t.get(t))return r;var u=R(n.A.h,r,n);return e(n),n.o.set(t,u),u},r.keys=function(){return d(this[Y]).keys()},r.values=function(){var t,e=this,n=this.keys();return(t={})[tt]=function(){return e.values()},t.next=function(){var t=n.next();return t.done?t:{done:!1,value:e.get(t.value)}},t},r.entries=function(){var t,e=this,n=this.keys();return(t={})[tt]=function(){return e.entries()},t.next=function(){var t=n.next();if(t.done)return t;var r=e.get(t.value);return{done:!1,value:[t.value,r]}},t},r[tt]=function(){return this.entries()},n}(),f=function(){function e(t,e){return this[Y]={i:3,l:e,A:e?e.A:w(),P:!1,I:!1,o:void 0,t:t,k:this,p:new Map,g:!1,C:!1},this}t(e,Set);var r=e.prototype;return Object.defineProperty(r,"size",{get:function(){return d(this[Y]).size}}),r.has=function(t){var e=this[Y];return o(e),e.o?!!e.o.has(t)||!(!e.p.has(t)||!e.o.has(e.p.get(t))):e.t.has(t)},r.add=function(t){var e=this[Y];return o(e),this.has(t)||(n(e),F(e),e.o.add(t)),this},r["delete"]=function(t){if(!this.has(t))return!1;var e=this[Y];return o(e),n(e),F(e),e.o["delete"](t)||!!e.p.has(t)&&e.o["delete"](e.p.get(t))},r.clear=function(){var t=this[Y];o(t),d(t).size&&(n(t),F(t),t.o.clear())},r.values=function(){var t=this[Y];return o(t),n(t),t.o.values()},r.entries=function(){var t=this[Y];return o(t),n(t),t.o.entries()},r.keys=function(){return this.values()},r[tt]=function(){return this.values()},r.forEach=function(t,e){for(var n=this.values(),r=n.next();!r.done;)t.call(e,r.value,r.value,this),r=n.next()},e}();O("MapSet",{T:function(t,e){return new c(t,e)},F:function(t,e){return new f(t,e)}})}function J(){W(),U(),$()}function X(t){return t}function G(t){return t}n.r(e),n.d(e,{Immer:function(){return ut},applyPatches:function(){return ht},castDraft:function(){return X},castImmutable:function(){return G},createDraft:function(){return pt},current:function(){return C},enableAllPlugins:function(){return J},enableES5:function(){return W},enableMapSet:function(){return U},enablePatches:function(){return $},finishDraft:function(){return vt},immerable:function(){return Q},isDraft:function(){return o},isDraftable:function(){return i},nothing:function(){return L},original:function(){return u},produce:function(){return ct},produceWithPatches:function(){return ft},setAutoFreeze:function(){return st},setUseProxies:function(){return lt}});var T,V,Z="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),q="undefined"!=typeof Map,B="undefined"!=typeof Set,H="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,L=Z?Symbol["for"]("immer-nothing"):((T={})["immer-nothing"]=!0,T),Q=Z?Symbol["for"]("immer-draftable"):"__$immer_draftable",Y=Z?Symbol["for"]("immer-state"):"__$immer_state",tt="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",et="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,nt=Object.getOwnPropertyDescriptors||function(t){var e={};return et(t).forEach((function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)})),e},rt={},ot={get:function(t,e){if(e===Y)return t;var n=d(t);if(!f(n,e))return function(t,e,n){var r,o=I(e,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(t.k):void 0}(t,n,e);var r=n[e];return t.I||!i(r)?r:r===z(t.t,e)?(N(t),t.o[e]=R(t.A.h,r,t)):r},has:function(t,e){return e in d(t)},ownKeys:function(t){return Reflect.ownKeys(d(t))},set:function(t,e,n){var r=I(d(t),e);if(null==r?void 0:r.set)return r.set.call(t.k,n),!0;if(!t.P){var o=z(d(t),e),i=null==o?void 0:o[Y];if(i&&i.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(h(n,o)&&(void 0!==n||f(t.t,e)))return!0;N(t),F(t)}return t.o[e]=n,t.D[e]=!0,!0},deleteProperty:function(t,e){return void 0!==z(t.t,e)||e in t.t?(t.D[e]=!1,N(t),F(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=d(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:r.enumerable,value:n[e]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){r(12)}},it={};a(ot,(function(t,e){it[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),it.deleteProperty=function(t,e){return ot.deleteProperty.call(this,t[0],e)},it.set=function(t,e,n){return ot.set.call(this,t[0],e,n,t[0])};var ut=function(){function t(t){this.O=H,this.N=!1,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,n){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(t){var n=this;void 0===t&&(t=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(t,(function(t){var r;return(r=e).call.apply(r,[n,t].concat(i))}))}}var a;if("function"!=typeof e&&r(6),void 0!==n&&"function"!=typeof n&&r(7),i(t)){var c=S(this),f=R(this,t,void 0),s=!0;try{a=e(f),s=!1}finally{s?j(c):D(c)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return A(c,n),k(t,c)}),(function(t){throw j(c),t})):(A(c,n),k(a,c))}if(!t||"object"!=typeof t){if((a=e(t))===L)return;return void 0===a&&(a=t),this.N&&b(a,!0),a}r(21,t)},e.produceWithPatches=function(t,e){var n,r,o=this;return"function"==typeof t?function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(r))}))}:[this.produce(t,e,(function(t,e){n=t,r=e})),n,r]},e.createDraft=function(t){i(t)||r(8),o(t)&&(t=C(t));var e=S(this),n=R(this,t,void 0);return n[Y].C=!0,D(e),n},e.finishDraft=function(t,e){var n=t&&t[Y],r=n.A;return A(r,e),k(void 0,r)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!H&&r(20),this.O=t},e.applyPatches=function(t,e){var n;for(n=e.length-1;n>=0;n--){var r=e[n];if(0===r.path.length&&"replace"===r.op){t=r.value;break}}var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(n+1))}))},t}(),at=new ut,ct=at.produce,ft=at.produceWithPatches.bind(at),st=at.setAutoFreeze.bind(at),lt=at.setUseProxies.bind(at),ht=at.applyPatches.bind(at),pt=at.createDraft.bind(at),vt=at.finishDraft.bind(at);e["default"]=ct}}]);