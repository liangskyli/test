(self["webpackChunkreact_h5_example"]=self["webpackChunkreact_h5_example"]||[]).push([["mf-dep_96"],{3096:function(t,e,n){"use strict";n.r(e),n.d(e,{UseAPIProvider:function(){return ot},UseRequestProvider:function(){return it},default:function(){return ut},useAsync:function(){return L},useLoadMore:function(){return U},usePaginated:function(){return G}});var r=n(67294),i=n(59686),o=n.n(i),a=n(97397),u=n.n(a);function c(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function l(){return"undefined"===typeof navigator.onLine||navigator.onLine}var f=new Map,s=function(t,e,n){var r=f.get(t);(null===r||void 0===r?void 0:r.timer)&&clearTimeout(r.timer);var i=void 0;e>-1&&(i=setTimeout((function(){f["delete"](t)}),e)),f.set(t,{data:n,timer:i,startTime:(new Date).getTime()})},h=function(t){var e=f.get(t);return{data:null===e||void 0===e?void 0:e.data,startTime:null===e||void 0===e?void 0:e.startTime}},d=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},v=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(d(arguments[e]));return t};function p(t,e){var n=!1;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];n||(n=!0,t.apply(void 0,v(r)),setTimeout((function(){n=!1}),e))}}var y=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},g=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]));return t};function m(t){var e=(0,r.useRef)((function(){throw new Error("Cannot call an event handler while rendering.")}));e.current=t;var n=(0,r.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=e.current;if(r)return r.apply(void 0,g(t))}),[e]);if("function"===typeof t)return n}var b=m,w=function(t,e){var n=(0,r.useRef)(!1);(0,r.useEffect)((function(){return function(){n.current=!1}}),[]),(0,r.useEffect)((function(){if(n.current)return t();n.current=!0}),e)},O=w,S=[];function T(t){return S.push(t),function(){var e=S.indexOf(t);S.splice(e,1)}}var j=!1;if("undefined"!==typeof window&&window.addEventListener&&!j){var E=function(){if(c()&&l())for(var t=0;t<S.length;t++){var e=S[t];e()}};window.addEventListener("visibilitychange",E,!1),window.addEventListener("focus",E,!1),j=!0}var x=T,R=[];function P(t){return R.push(t),function(){var e=R.indexOf(t);R.splice(e,1)}}var D=!1;if("undefined"!==typeof window&&window.addEventListener&&!D){var k=function(){if(c())for(var t=0;t<R.length;t++){var e=R[t];e()}};window.addEventListener("visibilitychange",k,!1),D=!0}var C=P,I=function(){return I=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},I.apply(this,arguments)},M=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},W=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(M(arguments[e]));return t},K="AHOOKS_USE_REQUEST_DEFAULT_KEY",_=function(){function t(t,e,n,r){this.count=0,this.pollingWhenVisibleFlag=!1,this.pollingTimer=void 0,this.loadingDelayTimer=void 0,this.unsubscribe=[],this.that=this,this.state={loading:!1,params:[],data:void 0,error:void 0,run:this.run.bind(this.that),mutate:this.mutate.bind(this.that),refresh:this.refresh.bind(this.that),cancel:this.cancel.bind(this.that),unmount:this.unmount.bind(this.that)},this.service=t,this.config=e,this.subscribe=n,r&&(this.state=I(I({},this.state),r)),this.debounceRun=this.config.debounceInterval?o()(this._run,this.config.debounceInterval):void 0,this.throttleRun=this.config.throttleInterval?u()(this._run,this.config.throttleInterval):void 0,this.limitRefresh=p(this.refresh.bind(this),this.config.focusTimespan),this.config.pollingInterval&&this.unsubscribe.push(C(this.rePolling.bind(this))),this.config.refreshOnWindowFocus&&this.unsubscribe.push(x(this.limitRefresh.bind(this)))}return t.prototype.setState=function(t){void 0===t&&(t={}),this.state=I(I({},this.state),t),this.subscribe(this.state)},t.prototype._run=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.pollingTimer&&clearTimeout(this.pollingTimer),this.loadingDelayTimer&&clearTimeout(this.loadingDelayTimer),this.count+=1;var r=this.count;return this.setState({loading:!this.config.loadingDelay,params:e}),this.config.loadingDelay&&(this.loadingDelayTimer=setTimeout((function(){t.setState({loading:!0})}),this.config.loadingDelay)),this.service.apply(this,W(e)).then((function(n){if(r!==t.count)return new Promise((function(){}));t.loadingDelayTimer&&clearTimeout(t.loadingDelayTimer);var i=t.config.formatResult?t.config.formatResult(n):n;return t.setState({data:i,error:void 0,loading:!1}),t.config.onSuccess&&t.config.onSuccess(i,e),i}))["catch"]((function(n){if(r!==t.count)return new Promise((function(){}));if(t.loadingDelayTimer&&clearTimeout(t.loadingDelayTimer),t.setState({data:void 0,error:n,loading:!1}),t.config.onError&&t.config.onError(n,e),t.config.throwOnError)throw n;return console.error(n),Promise.reject("useRequest has caught the exception, if you need to handle the exception yourself, you can set options.throwOnError to true.")}))["finally"]((function(){if(r===t.count&&t.config.pollingInterval){if(!c()&&!t.config.pollingWhenHidden)return void(t.pollingWhenVisibleFlag=!0);t.pollingTimer=setTimeout((function(){t._run.apply(t,W(e))}),t.config.pollingInterval)}}))},t.prototype.run=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.debounceRun?(this.debounceRun.apply(this,W(t)),Promise.resolve(null)):this.throttleRun?(this.throttleRun.apply(this,W(t)),Promise.resolve(null)):this._run.apply(this,W(t))},t.prototype.cancel=function(){this.debounceRun&&this.debounceRun.cancel(),this.throttleRun&&this.throttleRun.cancel(),this.loadingDelayTimer&&clearTimeout(this.loadingDelayTimer),this.pollingTimer&&clearTimeout(this.pollingTimer),this.pollingWhenVisibleFlag=!1,this.count+=1,this.setState({loading:!1})},t.prototype.refresh=function(){return this.run.apply(this,W(this.state.params))},t.prototype.rePolling=function(){this.pollingWhenVisibleFlag&&(this.pollingWhenVisibleFlag=!1,this.refresh())},t.prototype.mutate=function(t){"function"===typeof t?this.setState({data:t(this.state.data)||{}}):this.setState({data:t})},t.prototype.unmount=function(){this.cancel(),this.unsubscribe.forEach((function(t){t()}))},t}();function F(t,e){var n,i=e||{},o=i.refreshDeps,a=void 0===o?[]:o,u=i.manual,c=void 0!==u&&u,l=i.onSuccess,f=void 0===l?function(){}:l,d=i.onError,v=void 0===d?function(){}:d,p=i.defaultLoading,y=void 0!==p&&p,g=i.loadingDelay,m=i.pollingInterval,w=void 0===m?0:m,S=i.pollingWhenHidden,T=void 0===S||S,j=i.defaultParams,E=void 0===j?[]:j,x=i.refreshOnWindowFocus,R=void 0!==x&&x,P=i.focusTimespan,D=void 0===P?5e3:P,k=i.fetchKey,C=i.cacheKey,F=i.cacheTime,L=void 0===F?3e5:F,z=i.staleTime,$=void 0===z?0:z,N=i.debounceInterval,q=i.throttleInterval,H=i.initialData,U=i.ready,V=void 0===U||U,A=i.throwOnError,Y=void 0!==A&&A,Q=(0,r.useRef)(K),B=b(t),G=b(f),J=b(v),X=b(k);"formatResult"in i&&(n=i.formatResult);var Z=b(n),tt={formatResult:Z,onSuccess:G,onError:J,loadingDelay:g,pollingInterval:w,pollingWhenHidden:T,refreshOnWindowFocus:!c&&R,focusTimespan:D,debounceInterval:N,throttleInterval:q,throwOnError:Y},et=b((function(t,e){it((function(n){return n[t]=e,I({},n)}))})),nt=M((0,r.useState)((function(){var t;if(C){var e=null===(t=h(C))||void 0===t?void 0:t.data;if(e){Q.current=e.newstFetchKey;var n={};return Object.keys(e.fetches).forEach((function(t){var r=e.fetches[t],i=new _(B,tt,et.bind(null,t),{loading:r.loading,params:r.params,data:r.data,error:r.error});n[t]=i.state})),n}}return{}})),2),rt=nt[0],it=nt[1],ot=(0,r.useRef)(rt);ot.current=rt;var at=(0,r.useRef)(),ut=(0,r.useCallback)((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(V){if(X){var n=X.apply(void 0,W(t));Q.current=void 0===n?K:n}var r=Q.current,i=ot.current[r];if(!i){var o=new _(B,tt,et.bind(null,r),{data:H});i=o.state,it((function(t){return t[r]=i,I({},t)}))}return i.run.apply(i,W(t))}at.current=t}),[k,et,V]),ct=(0,r.useRef)(ut);ct.current=ut,O((function(){C&&s(C,L,{fetches:rt,newstFetchKey:Q.current})}),[C,rt]);var lt=(0,r.useRef)(!1);O((function(){V&&(!lt.current&&at.current&&ct.current.apply(ct,W(at.current)),lt.current=!0)}),[V]),(0,r.useEffect)((function(){var t;if(!c)if(Object.keys(rt).length>0){var e=C&&(null===(t=h(C))||void 0===t?void 0:t.startTime)||0;-1===$||(new Date).getTime()-e<=$||Object.values(rt).forEach((function(t){t.refresh()}))}else ct.current.apply(ct,W(E))}),[]);var ft=(0,r.useCallback)((function(){Object.values(ot.current).forEach((function(t){t.unmount()})),Q.current=K,it({}),ot.current={}}),[it]);O((function(){c||Object.values(ot.current).forEach((function(t){t.refresh()}))}),W(a)),(0,r.useEffect)((function(){return function(){Object.values(ot.current).forEach((function(t){t.unmount()}))}}),[]);var st=(0,r.useCallback)((function(t){return function(){console.warn("You should't call "+t+" when service not executed once.")}}),[]);return I(I({loading:V&&!c||y,data:H,error:void 0,params:[],cancel:st("cancel"),refresh:st("refresh"),mutate:st("mutate")},rt[Q.current]||{}),{run:ut,fetches:rt,reset:ft})}var L=F,z=function(){return z=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},z.apply(this,arguments)},$=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},N=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},q=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(N(arguments[e]));return t};function H(t,e){var n=e.refreshDeps,i=void 0===n?[]:n,o=e.ref,a=e.isNoMore,u=e.threshold,c=void 0===u?100:u,l=(e.fetchKey,$(e,["refreshDeps","ref","isNoMore","threshold","fetchKey"])),f=N((0,r.useState)(!1),2),s=f[0],h=f[1];(0,r.useEffect)((function(){e.fetchKey&&console.warn("useRequest loadMore mode don't need fetchKey!")}),[]);var d=L(t,z(z({},l),{fetchKey:function(t){var e;return(null===(e=null===t||void 0===t?void 0:t.list)||void 0===e?void 0:e.length)||0},onSuccess:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];h(!1),e.onSuccess&&e.onSuccess.apply(e,q(t))}})),v=d.data,p=d.run,y=d.params,g=d.reset,m=d.loading,b=d.fetches,w=(0,r.useCallback)((function(){g();var t=N(y),e=t.slice(1);p.apply(void 0,q([void 0],e))}),[p,g,y]),S=(0,r.useRef)(w);S.current=w,O((function(){e.manual||S.current()}),q(i));var T=(0,r.useMemo)((function(){var t=[],e=v;return Object.values(b).forEach((function(n){var r,i;(null===(r=n.data)||void 0===r?void 0:r.list)&&(t=t.concat(null===(i=n.data)||void 0===i?void 0:i.list)),n.loading||(e=n.data)})),z(z({},e),{list:t})}),[b,v]),j=!!a&&(!m&&!s&&a(T)),E=(0,r.useCallback)((function(){if(!j){h(!0);var t=N(y),e=t.slice(1);p.apply(void 0,q([T],e))}}),[j,p,T,y]),x=function(){!m&&!s&&o&&o.current&&o.current.scrollHeight-o.current.scrollTop<=o.current.clientHeight+c&&E()},R=(0,r.useRef)(x);return R.current=x,(0,r.useEffect)((function(){if(!o||!o.current)return function(){};var t=function(){return R.current()};return o.current.addEventListener("scroll",t),function(){o&&o.current&&o.current.removeEventListener("scroll",t)}}),[R]),z(z({},d),{data:T,reload:w,loading:m&&0===T.list.length,loadMore:E,loadingMore:s,noMore:j})}var U=H,V=function(){return V=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},V.apply(this,arguments)},A=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},Y=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},Q=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Y(arguments[e]));return t};function B(t,e){e.paginated;var n=e.defaultPageSize,i=void 0===n?10:n,o=e.refreshDeps,a=void 0===o?[]:o,u=e.fetchKey,c=A(e,["paginated","defaultPageSize","refreshDeps","fetchKey"]);(0,r.useEffect)((function(){u&&console.error("useRequest pagination's fetchKey will not work!")}),[]);var l=L(t,V({defaultParams:[{current:1,pageSize:i}]},c)),f=l.data,s=l.params,h=l.run,d=l.loading,v=A(l,["data","params","run","loading"]),p=s&&s[0]?s[0]:{},y=p.current,g=void 0===y?1:y,m=p.pageSize,b=void 0===m?i:m,w=p.sorter,S=void 0===w?{}:w,T=p.filters,j=void 0===T?{}:T,E=(0,r.useCallback)((function(t){var e=Y(s),n=e[0],r=e.slice(1);h.apply(void 0,Q([V(V({},n),t)],r))}),[h,s]),x=(null===f||void 0===f?void 0:f.total)||0,R=(0,r.useMemo)((function(){return Math.ceil(x/b)}),[b,x]),P=(0,r.useCallback)((function(t,e){var n=t<=0?1:t,r=e<=0?1:e,i=Math.ceil(x/r);n>i&&(n=i),E({current:t,pageSize:e})}),[x,E]),D=(0,r.useCallback)((function(t){P(t,b)}),[P,b]),k=(0,r.useCallback)((function(t){P(g,t)}),[P,g]),C=(0,r.useRef)(D);C.current=D,O((function(){e.manual||C.current(1)}),Q(a));var I=(0,r.useCallback)((function(t,e,n){E({current:t.current,pageSize:t.pageSize||i,filters:e,sorter:n})}),[j,S,E]);return V({loading:d,data:f,params:s,run:h,pagination:{current:g,pageSize:b,total:x,totalPage:R,onChange:P,changeCurrent:D,changePageSize:k},tableProps:{dataSource:(null===f||void 0===f?void 0:f.list)||[],loading:d,onChange:I,pagination:{current:g,pageSize:b,total:x}},sorter:S,filters:j},v)}var G=B,J=r.createContext({});J.displayName="UseRequestConfigContext";var X=J,Z=function(){return Z=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Z.apply(this,arguments)},tt=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},et=function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},nt=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(et(arguments[e]));return t};function rt(t,e){void 0===e&&(e={});var n=(0,r.useContext)(X),i=Z(Z({},n),e),o=i.paginated,a=i.loadMore,u=i.requestMethod,c=(0,r.useRef)(o),l=(0,r.useRef)(a);if(c.current!==o)throw Error("You should not modify the paginated of options");if(l.current!==a)throw Error("You should not modify the loadMore of options");c.current=o,l.current=a;var f,s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fetch.apply(void 0,nt(t)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)}))},h=u||s;switch(typeof t){case"string":f=function(){return h(t)};break;case"object":var d=t.url,v=tt(t,["url"]);f=function(){return u?u(t):s(d,v)};break;default:f=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return new Promise((function(n,r){var i=t.apply(void 0,nt(e)),o=i;if(!i.then)switch(typeof i){case"string":o=h(i);break;case"object":var a=i.url,c=tt(i,["url"]);o=u?u(i):s(a,c);break}o.then(n)["catch"](r)}))}}return a?U(f,i):o?G(f,i):L(f,i)}var it=X.Provider,ot=it,at=rt,ut=at},59686:function(t,e,n){var r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,h="object"==typeof self&&self&&self.Object===Object&&self,d=s||h||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,g=Math.min,m=function(){return d.Date.now()};function b(t,e,n){var i,o,a,u,c,l,f=0,s=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError(r);function v(e){var n=i,r=o;return i=o=void 0,f=e,u=t.apply(r,n),u}function p(t){return f=t,c=setTimeout(S,e),s?v(t):u}function b(t){var n=t-l,r=t-f,i=e-n;return h?g(i,a-r):i}function O(t){var n=t-l,r=t-f;return void 0===l||n>=e||n<0||h&&r>=a}function S(){var t=m();if(O(t))return j(t);c=setTimeout(S,b(t))}function j(t){return c=void 0,d&&i?v(t):(i=o=void 0,u)}function E(){void 0!==c&&clearTimeout(c),f=0,i=l=o=c=void 0}function x(){return void 0===c?u:j(m())}function R(){var t=m(),n=O(t);if(i=arguments,o=this,l=t,n){if(void 0===c)return p(l);if(h)return c=setTimeout(S,e),v(l)}return void 0===c&&(c=setTimeout(S,e)),u}return e=T(e)||0,w(n)&&(s=!!n.leading,h="maxWait"in n,a=h?y(T(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d),R.cancel=E,R.flush=x,R}function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function O(t){return!!t&&"object"==typeof t}function S(t){return"symbol"==typeof t||O(t)&&p.call(t)==o}function T(t){if("number"==typeof t)return t;if(S(t))return i;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=c.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):u.test(t)?i:+t}t.exports=b},97397:function(t,e,n){var r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,h="object"==typeof self&&self&&self.Object===Object&&self,d=s||h||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,g=Math.min,m=function(){return d.Date.now()};function b(t,e,n){var i,o,a,u,c,l,f=0,s=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError(r);function v(e){var n=i,r=o;return i=o=void 0,f=e,u=t.apply(r,n),u}function p(t){return f=t,c=setTimeout(S,e),s?v(t):u}function b(t){var n=t-l,r=t-f,i=e-n;return h?g(i,a-r):i}function w(t){var n=t-l,r=t-f;return void 0===l||n>=e||n<0||h&&r>=a}function S(){var t=m();if(w(t))return T(t);c=setTimeout(S,b(t))}function T(t){return c=void 0,d&&i?v(t):(i=o=void 0,u)}function E(){void 0!==c&&clearTimeout(c),f=0,i=l=o=c=void 0}function x(){return void 0===c?u:T(m())}function R(){var t=m(),n=w(t);if(i=arguments,o=this,l=t,n){if(void 0===c)return p(l);if(h)return c=setTimeout(S,e),v(l)}return void 0===c&&(c=setTimeout(S,e)),u}return e=j(e)||0,O(n)&&(s=!!n.leading,h="maxWait"in n,a=h?y(j(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d),R.cancel=E,R.flush=x,R}function w(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(r);return O(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(t,e,{leading:i,maxWait:e,trailing:o})}function O(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function S(t){return!!t&&"object"==typeof t}function T(t){return"symbol"==typeof t||S(t)&&p.call(t)==o}function j(t){if("number"==typeof t)return t;if(T(t))return i;if(O(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=O(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=c.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):u.test(t)?i:+t}t.exports=w}}]);