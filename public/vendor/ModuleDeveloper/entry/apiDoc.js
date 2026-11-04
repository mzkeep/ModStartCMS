(e=>{var t={};function r(n){var o;return(t[n]||(o=t[n]={i:n,l:!1,exports:{}},e[n].call(o.exports,o,o.exports,r),o.l=!0,o)).exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p=window.__msCDN+"vendor/ModuleDeveloper/",r(r.s=62)})([function(e,t){e.exports=Vue},function(e,t,r){function n(e,t,r,n,o,i,a,s){var l,p,c="function"==typeof e?e.options:e;return t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l&&(c.functional?(c._injectStyles=l,p=c.render,c.render=function(e,t){return l.call(t),p(e,t)}):(t=c.beforeCreate,c.beforeCreate=t?[].concat(t,l):[l])),{exports:e,options:c}}r.d(t,"a",function(){return n})},function(e,t,r){r.d(t,"b",function(){return i}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return l}),r.d(t,"a",function(){return c}),r(19),r(20);let n=r(30),o=(r(8),r(35),r(38).sprintf),i={specialchars:function(e){var t=[];if(!e)return"";if(0==e.length)return"";for(var r=0;r<e.length;r++)switch(e.substr(r,1)){case"<":t.push("&lt;");break;case">":t.push("&gt;");break;case"&":t.push("&amp;");break;case" ":t.push("&nbsp;");break;case'"':t.push("&quot;");break;default:t.push(e.substr(r,1))}return t.join("")}},a={randomString(e){e=e||32;var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r=t.length,n="";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*r));return n},matchWildcard:(e,t)=>(t="^"+t.split("*").map(e=>e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")).join(".*")+"$",new RegExp(t).test(e)),keywordsMatchWildcard:(e,t)=>(t=t.split("*").map(e=>e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")).join(".*"),new RegExp(t).test(e)),sprintf(){var e=Array.from(arguments);return o.call(null,...e)}};function s(e){return String.fromCharCode(e)}let l={domainUrl(e){e=e||"";var t=window.location.protocol+"//"+window.location.host;return e?t+"/"+e:t},urlencode(e){let t="",r="";for(let n=0;n<e.length;n++){var o=e.charAt(n),i=("0"+o.charCodeAt(0).toString(16)).slice(-2);r+=o+":"+i+"n",127<parseInt("0x"+i)?t+="%"+i.slice(0,2)+"%"+i.slice(-2):" "===o?t+="+":-1!=="!\"#$%&'()*+,/:;<=>?[]^`{|}~%".indexOf(o)?t+="%"+i.toString(16):t+=o}return t},urldecode(e){let t="";e+="";for(let r=0;r<e.length;r++){var n=e.charAt(r);if("+"===n)t+=" ";else if("%"===n){let n=e.substring(r+1,r+3);127<parseInt("0x"+n)?(t+=s(parseInt("0x"+n+e.substring(r+4,r+6))),r+=5):(t+=s(parseInt("0x"+n)),r+=2)}else t+=n}return t},getQueries:e=>l.parseQuery(e),getQuery(e,t=null,r){r=l.parseQuery(r);return e in r?r[e]:t},parseQuery:e=>(e=e||window.location.search,n.parse(e)),buildQuery:e=>n.stringify(e)},c={assign(e,t){e&&t&&Object.keys(e).map(r=>{e[r]=t[r]})},update(e,t){e&&t&&Object.keys(t).map(r=>{e[r]=t[r]})},equal:(e,t)=>JSON.stringify(e)===JSON.stringify(t),notEqual:(e,t)=>!c.equal(e,t),clone:e=>JSON.parse(JSON.stringify(e))};r(39)},function(e,t,r){var n=r(43),o=r(44),i=/[T ]/,a=/:/,s=/^(\d{2})$/,l=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],c=/^(\d{4})/,p=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],u=/^-(\d{2})$/,d=/^-?(\d{3})$/,h=/^-?(\d{2})-?(\d{2})$/,f=/^-?W(\d{2})$/,m=/^-?W(\d{2})-?(\d{1})$/,y=/^(\d{2}([.,]\d*)?)$/,g=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,v=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,b=/([Z+-].*)$/,x=/^(Z)$/,w=/^([+-])(\d{2})$/,k=/^([+-])(\d{2}):?(\d{2})$/;function S(e,t,r){t=t||0,r=r||0;var n=new Date(0),e=(n.setUTCFullYear(e,0,4),7*t+r+1-(n.getUTCDay()||7));return n.setUTCDate(n.getUTCDate()+e),n}e.exports=function(e,t){var E,I,T,$;return o(e)?new Date(e.getTime()):"string"==typeof e&&(t=null==(t=(t||{}).additionalDigits)?2:Number(t),E=(t=((e,t)=>{var i,n=l[t],t=p[t];return(t=c.exec(e)||t.exec(e))?(i=t[1],{year:parseInt(i,10),restDateString:e.slice(i.length)}):(t=s.exec(e)||n.exec(e))?(i=t[1],{year:100*parseInt(i,10),restDateString:e.slice(i.length)}):{year:null}})(($=(e=>{var o,r={},e=e.split(i);return(e=a.test(e[0])?(r.date=null,e[0]):(r.date=e[0],e[1]))&&((o=b.exec(e))?(r.time=e.replace(o[1],""),r.timezone=o[1]):r.time=e),r})(e)).date,t)).year,t=((e,t)=>{var r,n,o,a;return null===t?null:0===e.length?((n=new Date(0)).setUTCFullYear(t),n):(r=u.exec(e))?(n=new Date(0),o=parseInt(r[1],10)-1,n.setUTCFullYear(t,o),n):(r=d.exec(e))?(n=new Date(0),a=parseInt(r[1],10),n.setUTCFullYear(t,0,a),n):(r=h.exec(e))?(n=new Date(0),o=parseInt(r[1],10)-1,a=parseInt(r[2],10),n.setUTCFullYear(t,o,a),n):(r=f.exec(e))?S(t,parseInt(r[1],10)-1):(r=m.exec(e))?S(t,parseInt(r[1],10)-1,parseInt(r[2],10)-1):null})(t.restDateString,E))?(E=t.getTime(),t=0,$.time&&(t=(e=>{var t;return(t=y.exec(e))?parseFloat(t[1].replace(",","."))%24*36e5:(t=g.exec(e))?parseInt(t[1],10)%24*36e5+6e4*parseFloat(t[2].replace(",",".")):(t=v.exec(e))?parseInt(t[1],10)%24*36e5+6e4*parseInt(t[2],10)+1e3*parseFloat(t[3].replace(",",".")):null})($.time)),$.timezone?T=6e4*(e=>{var t,r;return x.exec(e)?0:(t=w.exec(e))?(r=60*parseInt(t[2],10),"+"===t[1]?-r:r):(t=k.exec(e))?(r=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-r:r):0})($.timezone):($=E+t,I=new Date($),T=n(I),($=new Date($)).setDate(I.getDate()+1),0<($=n($)-n(I))&&(T+=$)),new Date(E+t+T)):new Date(e)}},function(e,t){var r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){e.exports=(e=>{function l(e,t){var r=e.split(" "),i=2==r.length?r[0]:null;e=2==r.length?r[1]:r[0],o[e]||(o[e]=new a(e,i),n.push(o[e])),o[e].addHandler(t)}function c(e,t){if("function"==typeof t)l(e,t),c.reload();else if("object"==typeof e){for(var r in e)l(r,e[r]);c.reload()}else void 0===t&&c.navigate(e)}function p(){return window.location.hash.substring(1)}var r,n=[],o={},i=e.routie,a=function(e,t){this.name=t,this.path=e,this.keys=[],this.fns=[],this.params={},this.regex=s(this.path,this.keys,!1,!1)},s=(a.prototype.addHandler=function(e){this.fns.push(e)},a.prototype.removeHandler=function(e){for(var t=0,r=this.fns.length;t<r;t++)if(e==this.fns[t])return void this.fns.splice(t,1)},a.prototype.run=function(e){for(var t=0,r=this.fns.length;t<r;t++)if(!1===this.fns[t].apply(this,e))return!1;return!0},a.prototype.match=function(e,t){var r=this.regex.exec(e);if(!r)return!1;for(var n=1,o=r.length;n<o;++n){var i=this.keys[n-1],a="string"==typeof r[n]?decodeURIComponent(r[n]):r[n];i&&(this.params[i.name]=a),t.push(a)}return!0},a.prototype.toURL=function(e){var r,t=this.path;for(r in e)t=t.replace("/:"+r,"/"+e[r]);if(-1!=(t=t.replace(/\/:.*\?/g,"/").replace(/\?/g,"")).indexOf(":"))throw new Error("missing parameters for url: "+t);return t},function(e,t,r,n){return e instanceof RegExp?e:(e=(e=e instanceof Array?"("+e.join("|")+")":e).concat(n?"":"/?").replace(/\/\(/g,"(?:/").replace(/\+/g,"__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,function(e,r,n,o,i,a){return t.push({name:o,optional:!!a}),r=r||"",(a?"":r)+"(?:"+(a?r:"")+(n||"")+(i||(n?"([^/.]+?)":"([^/]+?)"))+")"+(a||"")}).replace(/([/.])/g,"\\$1").replace(/__plus__/g,"(.+)").replace(/\*/g,"(.*)"),new RegExp("^"+e+"$",r?"":"i"))}),d=(c.lookup=function(e,t){for(var r=0,o=n.length;r<o;r++){var i=n[r];if(i.name==e)return i.toURL(t)}},c.remove=function(e,t){e=o[e];e&&e.removeHandler(t)},c.removeAll=function(){o={},n=[],r=""},c.navigate=function(e,t){var r=(t=t||{}).silent||!1;r&&f(),setTimeout(function(){window.location.hash=e,r&&setTimeout(function(){h()},1)},1)},c.noConflict=function(){return e.routie=i,c},c.reload=function(){for(var e=p(),t=0,o=n.length;t<o;t++){var a=((e,t)=>{var r=[];return t.match(e,r)?!1!==t.run(r)?1:0:-1})(e,n[t]);if(1===a){r=e;break}if(0===a){c.navigate(r,{silent:!0});break}}}),h=function(){e.addEventListener?e.addEventListener("hashchange",d,!1):e.attachEvent("onhashchange",d)},f=function(){e.removeEventListener?e.removeEventListener("hashchange",d):e.detachEvent("onhashchange",d)};return h(),r=p(),c})(window),e.exports.default=e.exports},function(e,t,r){!function(e){var r=("undefined"!=typeof window?window:void 0!==e?e:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(e,t){var o,i;return void 0===t&&(t=[]),null===e||"object"!=typeof e?e:(o=t.filter(function(t){return t.original===e})[0])?o.copy:(i=Array.isArray(e)?[]:{},t.push({original:e,copy:i}),Object.keys(e).forEach(function(r){i[r]=n(e[r],t)}),i)}function o(e,t){Object.keys(e).forEach(function(r){return t(e[r],r)})}function i(e){return null!==e&&"object"==typeof e}function a(e,t){this.runtime=t,this._children=Object.create(null),t=(this._rawModule=e).state,this.state=("function"==typeof t?t():t)||{}}function l(e){this.register([],e,!1)}function p(e){var t=this,n=(void 0===e&&(e={}),!c&&"undefined"!=typeof window&&window.Vue&&v(window.Vue),e.plugins);void 0===n&&(n=[]);void 0===(o=e.strict)&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c,this._makeLocalGettersCache=Object.create(null);var i=this,a=this.dispatch,s=this.commit,o=(this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,r){return s.call(i,e,t,r)},this.strict=o,this._modules.root.state);m(this,o,[],this._modules.root),f(this,o),n.forEach(function(e){return e(t)}),(void 0!==e.devtools?e:c.config).devtools&&(e=>{r&&((e._devtoolHook=r).emit("vuex:init",e),r.on("vuex:travel-to-state",function(t){e.replaceState(t)}),e.subscribe(function(e,t){r.emit("vuex:mutation",e,t)},{prepend:!0}),e.subscribeAction(function(e,t){r.emit("vuex:action",e,t)},{prepend:!0}))})(this)}var c,e={namespaced:{configurable:!0}},e=(e.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(e,t){this._children[e]=t},a.prototype.removeChild=function(e){delete this._children[e]},a.prototype.getChild=function(e){return this._children[e]},a.prototype.hasChild=function(e){return e in this._children},a.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},a.prototype.forEachChild=function(e){o(this._children,e)},a.prototype.forEachGetter=function(e){this._rawModule.getters&&o(this._rawModule.getters,e)},a.prototype.forEachAction=function(e){this._rawModule.actions&&o(this._rawModule.actions,e)},a.prototype.forEachMutation=function(e){this._rawModule.mutations&&o(this._rawModule.mutations,e)},Object.defineProperties(a.prototype,e),l.prototype.get=function(e){return e.reduce(function(e,t){return e.getChild(t)},this.root)},l.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(e,r){return e+((t=t.getChild(r)).namespaced?r+"/":"")},"")},l.prototype.update=function(e){!function e(t,r,n){if(r.update(n),n.modules)for(var o in n.modules){if(!r.getChild(o))return;e(t.concat(o),r.getChild(o),n.modules[o])}}([],this.root,e)},l.prototype.register=function(e,t,r){var n=this,i=new a(t,r=void 0===r?!0:r);0===e.length?this.root=i:this.get(e.slice(0,-1)).addChild(e[e.length-1],i),t.modules&&o(t.modules,function(t,o){n.register(e.concat(o),t,r)})},l.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),e=e[e.length-1],n=t.getChild(e);n&&n.runtime&&t.removeChild(e)},l.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),e=e[e.length-1];return!!t&&t.hasChild(e)},{state:{configurable:!0}});function d(e,t,r){return t.indexOf(e)<0&&(r&&r.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);-1<r&&t.splice(r,1)}}function h(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var r=e.state;m(e,r,[],e._modules.root,!0),f(e,r,t)}function f(e,t,r){var n=e._vm,i=(e.getters={},e._makeLocalGettersCache=Object.create(null),e._wrappedGetters),a={},i=(o(i,function(t,r){a[r]=((e,t)=>function(){return e(t)})(t,e),Object.defineProperty(e.getters,r,{get:function(){return e._vm[r]},enumerable:!0})}),c.config.silent);c.config.silent=!0,e._vm=new c({data:{$$state:t},computed:a}),c.config.silent=i,e.strict&&(e=>{e._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})})(e),n&&(r&&e._withCommit(function(){n._data.$$state=null}),c.nextTick(function(){return n.$destroy()}))}function m(e,t,r,n,o){var s,l,i=!r.length,a=e._modules.getNamespace(r),p=(n.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=n),i||o||(s=y(t,r.slice(0,-1)),l=r[r.length-1],e._withCommit(function(){c.set(s,l,n.state)})),n.context=((e,t,r)=>{var n=""===t,o={dispatch:n?e.dispatch:function(r,n,o){r=g(r,n,o),n=r.payload,o=r.options,r=r.type;return o&&o.root||(r=t+r),e.dispatch(r,n)},commit:n?e.commit:function(r,n,o){r=g(r,n,o),n=r.payload,o=r.options,r=r.type;o&&o.root||(r=t+r),e.commit(r,n,o)}};return Object.defineProperties(o,{getters:{get:n?function(){return e.getters}:function(){return((e,t)=>{var r,n;return e._makeLocalGettersCache[t]||(r={},n=t.length,Object.keys(e.getters).forEach(function(o){var i;o.slice(0,n)===t&&(i=o.slice(n),Object.defineProperty(r,i,{get:function(){return e.getters[o]},enumerable:!0}))}),e._makeLocalGettersCache[t]=r),e._makeLocalGettersCache[t]})(e,t)}},state:{get:function(){return y(e.state,r)}}}),o})(e,a,r));n.forEachMutation(function(t,r){((e,t,r,n)=>{(e._mutations[t]||(e._mutations[t]=[])).push(function(t){r.call(e,n.state,t)})})(e,a+r,t,p)}),n.forEachAction(function(t,r){r=t.root?r:a+r;((e,t,r,n)=>{(e._actions[t]||(e._actions[t]=[])).push(function(t){t=r.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},t);return t&&"function"==typeof t.then||(t=Promise.resolve(t)),e._devtoolHook?t.catch(function(t){throw e._devtoolHook.emit("vuex:error",t),t}):t})})(e,r,t.handler||t,p)}),n.forEachGetter(function(t,r){((e,t,r,n)=>{e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return r(n.state,n.getters,e.state,e.getters)})})(e,a+r,t,p)}),n.forEachChild(function(n,i){m(e,t,r.concat(i),n,o)})}function y(e,t){return t.reduce(function(e,t){return e[t]},e)}function g(e,t,r){return i(e)&&e.type&&(r=t,e=(t=e).type),{type:e,payload:t,options:r}}function v(e){c&&e===c||(e=>{var t;function r(){var e=this.$options;e.store?this.$store="function"==typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}2<=Number(e.version.split(".")[0])?e.mixin({beforeCreate:r}):(t=e.prototype._init,e.prototype._init=function(e){(e=void 0===e?{}:e).init=e.init?[r].concat(e.init):r,t.call(this,e)})})(c=e)}e.state.get=function(){return this._vm._data.$$state},e.state.set=function(e){},p.prototype.commit=function(e,t,r){var n=this,e=g(e,t,r),t=e.type,a=e.payload,s={type:t,payload:a},l=this._mutations[t];l&&(this._withCommit(function(){l.forEach(function(e){e(a)})}),this._subscribers.slice().forEach(function(e){return e(s,n.state)}))},p.prototype.dispatch=function(e,t){var r=this,t=g(e,t),o=t.type,i=t.payload,a={type:o,payload:i},t=this._actions[o];if(t){try{this._actionSubscribers.slice().filter(function(e){return e.before}).forEach(function(e){return e.before(a,r.state)})}catch(e){}var l=1<t.length?Promise.all(t.map(function(e){return e(i)})):t[0](i);return new Promise(function(e,t){l.then(function(t){try{r._actionSubscribers.filter(function(e){return e.after}).forEach(function(e){return e.after(a,r.state)})}catch(e){}e(t)},function(e){try{r._actionSubscribers.filter(function(e){return e.error}).forEach(function(t){return t.error(a,r.state,e)})}catch(e){}t(e)})})}},p.prototype.subscribe=function(e,t){return d(e,this._subscribers,t)},p.prototype.subscribeAction=function(e,t){return d("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},p.prototype.watch=function(e,t,r){var n=this;return this._watcherVM.$watch(function(){return e(n.state,n.getters)},t,r)},p.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._vm._data.$$state=e})},p.prototype.registerModule=function(e,t,r){void 0===r&&(r={}),this._modules.register(e="string"==typeof e?[e]:e,t),m(this,this.state,e,this._modules.get(e),r.preserveState),f(this,this.state)},p.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=y(t.state,e.slice(0,-1));c.delete(r,e[e.length-1])}),h(this)},p.prototype.hasModule=function(e){return this._modules.isRegistered(e="string"==typeof e?[e]:e)},p.prototype.hotUpdate=function(e){this._modules.update(e),h(this,!0)},p.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(p.prototype,e);var b=$(function(e,t){var r={};return S(t).forEach(function(t){var n=t.key,o=t.val;r[n]=function(){var t=this.$store.state,r=this.$store.getters;if(e){var n=A(this.$store,0,e);if(!n)return;t=n.context.state,r=n.context.getters}return"function"==typeof o?o.call(this,t,r):t[o]},r[n].vuex=!0}),r}),x=$(function(e,t){var r={};return S(t).forEach(function(t){var n=t.key,o=t.val;r[n]=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];var n=this.$store.commit;if(e){var i=A(this.$store,0,e);if(!i)return;n=i.context.commit}return"function"==typeof o?o.apply(this,[n].concat(t)):n.apply(this.$store,[o].concat(t))}}),r}),w=$(function(e,t){var r={};return S(t).forEach(function(t){var n=t.key,o=e+t.val;r[n]=function(){if(!e||A(this.$store,0,e))return this.$store.getters[o]},r[n].vuex=!0}),r}),k=$(function(e,t){var r={};return S(t).forEach(function(t){var n=t.key,o=t.val;r[n]=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];var n=this.$store.dispatch;if(e){var i=A(this.$store,0,e);if(!i)return;n=i.context.dispatch}return"function"==typeof o?o.apply(this,[n].concat(t)):n.apply(this.$store,[o].concat(t))}}),r});function S(e){return(e=>Array.isArray(e)||i(e))(e)?Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function $(e){return function(t,r){return"string"!=typeof t?(r=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,r)}}function A(e,t,r){return e._modulesNamespaceMap[r]}function E(e,t,r){var n=r?e.groupCollapsed:e.group;try{n.call(e,t)}catch(r){e.log(t)}}function O(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function T(){var e=new Date;return" @ "+_(e.getHours(),2)+":"+_(e.getMinutes(),2)+":"+_(e.getSeconds(),2)+"."+_(e.getMilliseconds(),3)}function _(e,t){return t=t-e.toString().length,new Array(1+t).join("0")+e}t.a={Store:p,install:v,version:"3.6.2",mapState:b,mapMutations:x,mapGetters:w,mapActions:k,createNamespacedHelpers:function(e){return{mapState:b.bind(null,e),mapGetters:w.bind(null,e),mapMutations:x.bind(null,e),mapActions:k.bind(null,e)}},createLogger:function(e){var t=(e=void 0===e?{}:e).collapsed,r=(void 0===t&&(t=!0),e.filter),o=(void 0===r&&(r=function(e,t,r){return!0}),e.transformer),i=(void 0===o&&(o=function(e){return e}),e.mutationTransformer),a=(void 0===i&&(i=function(e){return e}),e.actionFilter),s=(void 0===a&&(a=function(e,t){return!0}),e.actionTransformer),l=(void 0===s&&(s=function(e){return e}),e.logMutations),c=(void 0===l&&(l=!0),e.logActions),p=(void 0===c&&(c=!0),e.logger);return void 0===p&&(p=console),function(e){var u=n(e.state);void 0!==p&&(l&&e.subscribe(function(e,a){var l,c,a=n(a);r(e,u,a)&&(l=T(),c=i(e),e="mutation "+e.type+l,E(p,e,t),p.log("%c prev state","color: #9E9E9E; font-weight: bold",o(u)),p.log("%c mutation","color: #03A9F4; font-weight: bold",c),p.log("%c next state","color: #4CAF50; font-weight: bold",o(a)),O(p)),u=a}),c)&&e.subscribeAction(function(e,r){var o;a(e,r)&&(r=T(),o=s(e),e="action "+e.type+r,E(p,e,t),p.log("%c action","color: #03A9F4; font-weight: bold",o),O(p))})}}}}.call(this,r(4))},,function(e,t){e.exports=window.$},function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},function(e,t){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var n,t=[];for(n in e)e.hasOwnProperty(n)&&t.push(n);var o=r.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(e,t){e.exports=ELEMENT},function(e,t,r){var n=r(41);e.exports=function(e,t){return n(Date.now(),e,t)}},function(e,t,r){var n=r(53),o={autoSetContainer:!1,appendToBody:!0};e.exports={install:function(e){var t="3."===e.version.slice(0,2)?e.config.globalProperties:e.prototype;t.$clipboardConfig=o,t.$copyText=function(e,t){return new Promise(function(r,i){var a=document.createElement("button"),s=new n(a,{text:function(){return e},action:function(){return"copy"},container:"object"==typeof t?t:document.body});s.on("success",function(e){s.destroy(),r(e)}),s.on("error",function(e){s.destroy(),i(e)}),o.appendToBody&&document.body.appendChild(a),a.click(),o.appendToBody&&document.body.removeChild(a)})},e.directive("clipboard",{bind:function(e,t,r){var i;"success"===t.arg?e._vClipboard_success=t.value:"error"===t.arg?e._vClipboard_error=t.value:((i=new n(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"},container:o.autoSetContainer?e:void 0})).on("success",function(t){var r=e._vClipboard_success;r&&r(t)}),i.on("error",function(t){var r=e._vClipboard_error;r&&r(t)}),e._vClipboard=i)},update:function(e,t){"success"===t.arg?e._vClipboard_success=t.value:"error"===t.arg?e._vClipboard_error=t.value:(e._vClipboard.text=function(){return t.value},e._vClipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){e._vClipboard&&("success"===t.arg?delete e._vClipboard_success:"error"===t.arg?delete e._vClipboard_error:(e._vClipboard.destroy(),delete e._vClipboard))}})},config:o}},function(e,t,r){var n,i=(()=>{var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}})(),a=[];function s(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c=r[l]||0,p="".concat(l," ").concat(c),l=(r[l]=c+1,s(p)),c={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(c)):a.push({identifier:p,updater:y(c,t),references:1}),n.push(p)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce&&(o=r.nc)&&(n.nonce=o),Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}p=[];var p,u=function(e,t){return p[e]=t,p.filter(Boolean).join("\n")};function d(e,t,r,n){var r=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;e.styleSheet?e.styleSheet.cssText=u(t,r):(n=document.createTextNode(r),(r=e.childNodes)[t]&&e.removeChild(r[t]),r.length?e.insertBefore(n,r[t]):e.appendChild(n))}var f=null,m=0;function y(e,t){var i,r,n,o;return o=t.singleton?(i=m++,r=f=f||c(t),n=d.bind(null,r,i,!1),d.bind(null,r,i,!0)):(r=c(t),n=function(e,t,r){var n=r.css,o=r.media,r=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r,t),function(){var e;null!==(e=r).parentNode&&e.parentNode.removeChild(e)}),n(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||n(e=t):o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n=void 0===n?Boolean(window&&document&&document.all&&!window.atob):n);var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=s(r[n]);a[o].references--}for(var e=l(e,t),c=0;c<r.length;c++){var p=s(r[c]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}r=e}}}},function(e,t,r){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r}).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},function(e,t,r){r.d(t,"a",function(){return S});var t=r(0),o=r.n(t),i=r(2),t=r(11),t=r.n(t),l=r(12),c=r.n(l),l=r(13),l=r.n(l);let f=new o.a,m=null;f.$emitDelay=(e,t)=>{m&&clearTimeout(m),m=setTimeout(()=>{f.$emit(e,t),m=null},100)},f.$onOnceListeners={},f.$onOnce=(e,t,r)=>{e in f.$onOnceListeners||(f.$onOnceListeners[e]=[]),f.$onOnceListeners[e].includes(t)||(f.$onOnceListeners[e].push(t),f.$on(e,r))};var y=r(5),g=r.n(y),v=r(6);let b=window.api.dialog,x=window.api.base;o.a.config.productionTip=!1,o.a.use(t.a,{size:"mini",zIndex:3e3}),o.a.use(function(e,t){var r;e.prototype.$timeago||(r={locale:t.locale},e.prototype.$timeago=e.observable?e.observable(r):new e({data:r}),r=(e=>{var t=(e=void 0===e?{}:e).locales||{};return{name:e.name||"Timeago",props:{datetime:{required:!0},title:{type:[String,Boolean]},locale:{type:String},autoUpdate:{type:[Number,Boolean]},converter:{type:Function},converterOptions:{type:Object}},data:function(){return{timeago:this.getTimeago()}},computed:{localeName:function(){return this.locale||this.$timeago.locale}},mounted:function(){this.startUpdater()},beforeDestroy:function(){this.stopUpdater()},render:function(e){return e("time",{attrs:{datetime:new Date(this.datetime).toISOString(),title:"string"==typeof this.title?this.title:!1===this.title?null:this.timeago}},[this.timeago])},methods:{getTimeago:function(r){return(this.converter||e.converter||function(e,t,r){var n=r.includeSeconds,r=r.addSuffix;return void 0===r&&(r=!0),c()(e,{locale:t,includeSeconds:n,addSuffix:r})})(r||this.datetime,t[this.locale||this.$timeago.locale],this.converterOptions||{})},convert:function(e){this.timeago=this.getTimeago(e)},startUpdater:function(){var t,e=this;this.autoUpdate&&(t=!0===this.autoUpdate?60:this.autoUpdate,this.updater=setInterval(function(){e.convert()},1e3*t))},stopUpdater:function(){this.updater&&(clearInterval(this.updater),this.updater=null)}},watch:{autoUpdate:function(e){this.stopUpdater(),e&&this.startUpdater()},datetime:function(){this.convert()},localeName:function(){this.convert()},converter:function(){this.convert()},converterOptions:{handler:function(){this.convert()},deep:!0}}}})(t),e.component(r.name,r))},{name:"TimeAgo",locale:"zh_CN",locales:{zh_CN:r(54)}}),o.a.use(l.a),o.a.prototype.$doCopyText=function(e,t){t=t||this.L("CopySuccess"),this.$copyText(e).then(()=>b.tipSuccess(t),()=>b.tipError(this.L("CopyFail")))},o.a.prototype.$onCopySuccess=()=>{b.tipSuccess(window.lang&&window.lang["Copy Success"]?window.lang["Copy Success"]:"Copy Success")},o.a.prototype.$onCopyError=()=>{b.tipError(window.lang&&window.lang["Copy Fail"]?window.lang["Copy Fail"]:"Copy Fail")},o.a.prototype.$highlight=(e,t)=>(e=i.b.specialchars(e),t?(t=new RegExp(t,"ig"),e.toString().replace(t,function(e,t,r){return'<span data-highlight class="tw-text-red-500">'+e+"</span>"})):e);o.a.prototype.$hashRouter={init(e){g()(e)},to(e){g()(e)}};y={post(e,t,r,n){r=r||x.defaultFormCallback,n=n||x.defaultFormCallback,x.post(e,t,function(e){x.defaultFormCallback(e,{success:function(e){!0===r(e)&&x.defaultFormCallback(e)},error:function(e){!0!==n(e)&&x.defaultFormCallback(e)}})})},postRaw(e,t,r){x.post(e,t,function(e){r&&r(e)})}};o.a.prototype.$api=y,o.a.prototype.$url={buildParam(e){if(e=e||null){var r,t=[];for(r in e)t.push(i.d.urlencode(r)+"="+i.d.urldecode(e[r]));e="?"+t.join("&")}return e||""},current(){var e=window.location;return""+e.pathname+e.search+e.hash},admin(e,t){return""+window.__msAdminRoot+e+this.buildParam(t)},web(e,t){return""+window.__msRoot+e+this.buildParam(t)},api(e,t){return window.__msRoot+"api/"+e+this.buildParam(t)},cdn:e=>(e&&e.startsWith("/")&&(e=e.replace(/^[ \/]+/g,"")),""+window.__msCDN+e)},o.a.prototype.$r={to(e){window.location.href=e},replace(e){window.location.replace=e}},o.a.prototype.$dialog=b,o.a.prototype.L=function(){var e=arguments[0],t=Array.from(arguments);return t.splice(0,1),window.lang&&window.lang[e]?t.length?i.c.sprintf(window.lang[e],...t):window.lang[e]:t.length?i.c.sprintf(e,...t):e};let S={Vue:o.a,Api:y,EventBus:f,makeStore:(e,t,r)=>(o.a.use(v.a),new v.a.Store({modules:r,state:{...e},mutations:{...t}})),QuickMount(e,t,r,n,i){if(n=n||{},!document.querySelector(e))return null;Array.isArray(r)||(r=[r]);let a={},s=(r.forEach(e=>{a[e.name]=e}),null);n&&"Bootstrap"in n&&(s=n.Bootstrap);r=new o.a({el:e,...n,data:()=>({loading:!0}),created(){s&&s.created(this)},mounted(){this.loading=!1,f.$emit("EventAppMounted"),s&&s.mounted(this)},components:a,template:t});return i&&i(r),r}}},function(e,t,r){!function(e){var n=r(63);t.a={name:"ApiDoc",components:{rapiDoc:n.default},computed:{headingText:()=>window.document.title,windowHref:()=>window.location.href},data:()=>({height:"100vh"}),beforeMount(){window.parent===window?(e(".ub-panel-dialog").addClass("no-foot"),e(".panel-dialog-foot").remove(),this.height="100vh"):this.height="calc(100vh - 50px)"},mounted(){this.$refs.api.loadSpec(window.__moduleDeveloperApiDocSpec)},methods:{}}}.call(this,r(8))},,function(e,t,r){var n;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var a,s,l,c=arguments,p=(a=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,s=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,l=/[^-+\dA-Z]/g,function(e,t,r,n){if(1!==c.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");function i(){return r?"getUTC":"get"}function y(){return e[i()+"Date"]()}function g(){return e[i()+"Day"]()}function v(){return e[i()+"Month"]()}function b(){return e[i()+"FullYear"]()}function x(){return e[i()+"Hours"]()}function w(){return e[i()+"Minutes"]()}function k(){return e[i()+"Seconds"]()}function S(){return e[i()+"Milliseconds"]()}function $(){return r?0:e.getTimezoneOffset()}function A(){return h(e)}var o=(t=String(p.masks[t]||t||p.masks.default)).slice(0,4),E=("UTC:"!==o&&"GMT:"!==o||(t=t.slice(4),r=!0,"GMT:"===o&&(n=!0)),{d:y,dd:function(){return u(y())},ddd:function(){return p.i18n.dayNames[g()]},DDD:function(){return d({y:b(),m:v(),d:y(),_:i(),dayName:p.i18n.dayNames[g()],short:!0})},dddd:function(){return p.i18n.dayNames[g()+7]},DDDD:function(){return d({y:b(),m:v(),d:y(),_:i(),dayName:p.i18n.dayNames[g()+7]})},m:function(){return v()+1},mm:function(){return u(v()+1)},mmm:function(){return p.i18n.monthNames[v()]},mmmm:function(){return p.i18n.monthNames[v()+12]},yy:function(){return String(b()).slice(2)},yyyy:function(){return u(b(),4)},h:function(){return x()%12||12},hh:function(){return u(x()%12||12)},H:x,HH:function(){return u(x())},M:w,MM:function(){return u(w())},s:k,ss:function(){return u(k())},l:function(){return u(S(),3)},L:function(){return u(Math.floor(S()/10))},t:function(){return x()<12?p.i18n.timeNames[0]:p.i18n.timeNames[1]},tt:function(){return x()<12?p.i18n.timeNames[2]:p.i18n.timeNames[3]},T:function(){return x()<12?p.i18n.timeNames[4]:p.i18n.timeNames[5]},TT:function(){return x()<12?p.i18n.timeNames[6]:p.i18n.timeNames[7]},Z:function(){return n?"GMT":r?"UTC":(String(e).match(s)||[""]).pop().replace(l,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(0<$()?"-":"+")+u(100*Math.floor(Math.abs($())/60)+Math.abs($())%60,4)},p:function(){return(0<$()?"-":"+")+u(Math.floor(Math.abs($())/60),2)+":"+u(Math.floor(Math.abs($())%60),2)},S:function(){return["th","st","nd","rd"][3<y()%10?0:(y()%100-y()%10!=10)*y()%10]},W:A,WW:function(){return u(A())},N:function(){return f(e)}});return t.replace(a,function(e){return e in E?E[e]():e.slice(1,e.length-1)})}),u=(p.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},p.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}),d=function(e){var t=e.y,r=e.m,n=e.d,o=e._,i=e.dayName,e=e.short,e=void 0!==e&&e,l=new Date,c=new Date,p=(c.setDate(c[o+"Date"]()-1),new Date);return p.setDate(p[o+"Date"]()+1),l[o+"FullYear"]()===t&&l[o+"Month"]()===r&&l[o+"Date"]()===n?e?"Tdy":"Today":c[o+"FullYear"]()===t&&c[o+"Month"]()===r&&c[o+"Date"]()===n?e?"Ysd":"Yesterday":p[o+"FullYear"]()===t&&p[o+"Month"]()===r&&p[o+"Date"]()===n?e?"Tmw":"Tomorrow":i},h=function(e){var e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=(e.setDate(e.getDate()-(e.getDay()+6)%7+3),new Date(e.getFullYear(),0,4)),n=(r.setDate(r.getDate()-(r.getDay()+6)%7+3),e.getTimezoneOffset()-r.getTimezoneOffset());return e.setHours(e.getHours()-n),1+Math.floor((e-r)/6048e5)},f=function(e){e=e.getDay();return e=0===e?7:e},m=function(e){return null===e?"null":void 0===e?"undefined":"object"!==o(e)?o(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0!==(n=function(){return p}.call(t,r,t,e))&&(e.exports=n)}(void 0)},function(e,t,r){e.exports=r(21)},function(e,t,r){var n=r(22),o=r(29);function i(e){try{return n(e)}catch(t){return(e=>{for(var t=[],r=0;r<e;r++)t.push(Math.floor(255*Math.random()));return{length:e,readUInt8:function(e){return t[e]}}})(e)}}function a(e,t,r,n,o){for(var i=t,a=0;a<e.length&&i.length<n;a++){var s=e.readUInt8(a);s<o&&(i+=r.charAt(s%r.length))}return i}t.generate=function(e,t){var r,s=new o,l="",c=("object"==typeof e?(r="number"==typeof e.length?e.length:32,e.charset?s.setType(e.charset):s.setType("alphanumeric"),e.capitalization&&s.setcapitalization(e.capitalization),e.readable&&s.removeUnreadable(),s.removeDuplicates()):(r="number"==typeof e?e:32,s.setType("alphanumeric")),256-256%s.chars.length);if(!t){for(;l.length<r;)l=a(i(Math.ceil(256*r/c)),l,s.chars,r,c);return l}!function e(t,r,o,i,s){n(o,function(n,l){n&&s(n);n=a(l,t,r,o,i);n.length<o?e(n,r,o,i,s):s(null,n)})}(l,s.chars,r,c,t)}},function(e,t,r){!function(t,n){var o=r(24).Buffer,i=t.crypto||t.msCrypto;i&&i.getRandomValues?e.exports=function(e,t){if(4294967295<e)throw new RangeError("requested too many random bytes");var r=o.allocUnsafe(e);if(0<e)if(65536<e)for(var a=0;a<e;a+=65536)i.getRandomValues(r.slice(a,a+65536));else i.getRandomValues(r);return"function"==typeof t?n.nextTick(function(){t(null,r)}):r}:e.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}}.call(this,r(4),r(23))},function(e,t){var r,n,e=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return(r=setTimeout)(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}var l,c=[],p=!1,u=-1;function d(){p&&l&&(p=!1,l.length?c=l.concat(c):u=-1,c.length)&&h()}function h(){if(!p){var e=s(d);p=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,p=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return(n=clearTimeout)(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}e.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||p||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=m,e.addListener=m,e.once=m,e.off=m,e.removeListener=m,e.removeAllListeners=m,e.emit=m,e.prependListener=m,e.prependOnceListener=m,e.listeners=function(e){return[]},e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},function(e,t,r){var n=r(25),o=n.Buffer;function i(e,t){for(var r in e)t[r]=e[r]}function a(e,t,r){return o(e,t,r)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=n:(i(n,t),t.Buffer=a),a.prototype=Object.create(o.prototype),i(o,a),a.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return o(e,t,r)},a.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");e=o(e);return void 0!==t?"string"==typeof r?e.fill(t,r):e.fill(t):e.fill(0),e},a.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return o(e)},a.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n.SlowBuffer(e)}},function(e,t,r){!function(e){var n=r(26),o=r(27),i=r(28);function a(){return l.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return l.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=l.prototype:(e=null===e?new l(t):e).length=t,e}function l(e,t,r){if(!(l.TYPED_ARRAY_SUPPORT||this instanceof l))return new l(e,t,r);if("number"!=typeof e)return c(this,e,t,r);if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}function c(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?((e,t,r,n)=>{if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n),l.TYPED_ARRAY_SUPPORT?(e=t).__proto__=l.prototype:e=d(e,t),e})(e,t,r,n):"string"==typeof t?((e,t,r)=>{var n;if(l.isEncoding(r="string"==typeof r&&""!==r?r:"utf8"))return(t=(e=s(e,n=0|f(t,r))).write(t,r))!==n?e.slice(0,t):e;throw new TypeError('"encoding" must be a valid string encoding')})(e,t,r):((e,t)=>{var r;if(l.isBuffer(t))return 0!==(e=s(e,r=0|h(t.length))).length&&t.copy(e,0,0,r),e;if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?s(e,0):d(e,t);if("Buffer"===t.type&&i(t.data))return d(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")})(e,t)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function u(e,t){if(p(t),e=s(e,t<0?0:0|h(t)),!l.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function d(e,t){var r=t.length<0?0:0|h(t.length);e=s(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function h(e){if(a()<=e)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function f(e,t){if(l.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;var r=(e="string"!=typeof e?""+e:e).length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return F(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(e).length;default:if(n)return F(e).length;t=(""+t).toLowerCase(),n=!0}}function m(e,t,r){var n=!1;if((t=void 0===t||t<0?0:t)>this.length)return"";if((r=void 0===r||r>this.length?this.length:r)<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e=e||"utf8";;)switch(e){case"hex":return((e,t,r)=>{var n=e.length;(!r||r<0||n<r)&&(r=n);for(var o="",i=t=!t||t<0?0:t;i<r;++i)o+=(e=>e<16?"0"+e.toString(16):e.toString(16))(e[i]);return o})(this,t,r);case"utf8":case"utf-8":return E(this,t,r);case"ascii":return((e,t,r)=>{var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n})(this,t,r);case"latin1":case"binary":return((e,t,r)=>{var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n})(this,t,r);case"base64":return A(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return((e,t,r)=>{for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o})(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function y(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):2147483647<r?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,(r=(r=isNaN(r)?o?0:e.length-1:r)<0?e.length+r:r)>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,o);if("number"==typeof t)return t&=255,l.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?(o?Uint8Array.prototype.indexOf:Uint8Array.prototype.lastIndexOf).call(e,t,r):v(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function v(e,t,r,n,o){var a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s/=a=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o)for(var p=-1,i=r;i<s;i++)if(c(e,i)===c(t,-1===p?0:i-p)){if(i-(p=-1===p?i:p)+1===l)return p*a}else-1!==p&&(i-=i-p),p=-1;else for(i=r=s<r+l?s-l:r;0<=i;i--){for(var u=!0,d=0;d<l;d++)if(c(e,i+d)!==c(t,d)){u=!1;break}if(u)return i}return-1}function w(e,t,r,n){return z((e=>{for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t})(t),e,r,n)}function $(e,t,r,n){return z(((e,t)=>{for(var r,n,i=[],a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,i.push(r%256),i.push(n);return i})(t,e.length-r),e,r,n)}function A(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function E(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,a,s,l,c=e[o],p=null,u=239<c?4:223<c?3:191<c?2:1;if(o+u<=r)switch(u){case 1:c<128&&(p=c);break;case 2:128==(192&(i=e[o+1]))&&127<(l=(31&c)<<6|63&i)&&(p=l);break;case 3:i=e[o+1],a=e[o+2],128==(192&i)&&128==(192&a)&&2047<(l=(15&c)<<12|(63&i)<<6|63&a)&&(l<55296||57343<l)&&(p=l);break;case 4:i=e[o+1],a=e[o+2],s=e[o+3],128==(192&i)&&128==(192&a)&&128==(192&s)&&65535<(l=(15&c)<<18|(63&i)<<12|(63&a)<<6|63&s)&&l<1114112&&(p=l)}null===p?(p=65533,u=1):65535<p&&(n.push((p-=65536)>>>10&1023|55296),p=56320|1023&p),n.push(p),o+=u}return(e=>{var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r})(n)}function j(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(r<e+t)throw new RangeError("Trying to access beyond buffer length")}function I(e,t,r,n,o,i){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o<t||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function P(e,t,r,n){t<0&&(t=65535+t+1);for(var o=0,i=Math.min(e.length-r,2);o<i;++o)e[r+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function R(e,t,r,n){t<0&&(t=4294967295+t+1);for(var o=0,i=Math.min(e.length-r,4);o<i;++o)e[r+o]=t>>>8*(n?o:3-o)&255}function L(e,t,r,n){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function D(e,t,r,n,i){return i||L(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function B(e,t,r,n,i){return i||L(e,0,r,8),o.write(e,t,r,n,52,8),r+8}t.Buffer=l,t.SlowBuffer=function(e){return l.alloc(+(e=+e!=e?0:e))},t.INSPECT_MAX_BYTES=50,l.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:(()=>{try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}})(),t.kMaxLength=a(),l.poolSize=8192,l._augment=function(e){return e.__proto__=l.prototype,e},l.from=function(e,t,r){return c(null,e,t,r)},l.TYPED_ARRAY_SUPPORT&&(l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,"undefined"!=typeof Symbol)&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0}),l.alloc=function(e,t,r){return((e,t,r,n)=>(p(t),!(t<=0)&&void 0!==r?"string"==typeof n?s(e,t).fill(r,n):s(e,t).fill(r):s(e,t)))(null,e,t,r)},l.allocUnsafe=function(e){return u(null,e)},l.allocUnsafeSlow=function(e){return u(null,e)},l.isBuffer=function(e){return!(null==e||!e._isBuffer)},l.compare=function(e,t){if(!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!i(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=t=0;r<e.length;++r)t+=e[r].length;for(var n=l.allocUnsafe(t),o=0,r=0;r<e.length;++r){var a=e[r];if(!l.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,o),o+=a.length}return n},l.byteLength=f,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)y(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4);return this},l.prototype.toString=function(){var e=0|this.length;return 0==e?"":0===arguments.length?E(this,0,e):m.apply(this,arguments)},l.prototype.equals=function(e){if(l.isBuffer(e))return this===e||0===l.compare(this,e);throw new TypeError("Argument must be a Buffer")},l.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return 0<this.length&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r)&&(e+=" ... "),"<Buffer "+e+">"},l.prototype.compare=function(e,t,r,n,o){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),(t=void 0===t?0:t)<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(o<=n&&r<=t)return 0;if(o<=n)return-1;if(r<=t)return 1;if(this===e)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0),s=Math.min(i,a),c=this.slice(n,o),p=e.slice(t,r),u=0;u<s;++u)if(c[u]!==p[u]){i=c[u],a=p[u];break}return i<a?-1:a<i?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-t;if((void 0===r||o<r)&&(r=o),0<e.length&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n=n||"utf8";for(var i=!1;;)switch(n){case"hex":return((e,t,r,n)=>{r=Number(r)||0;var o=e.length-r;if((!n||(n=Number(n))>o)&&(n=o),(o=t.length)%2!=0)throw new TypeError("Invalid hex string");o/2<n&&(n=o/2);for(var a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(isNaN(s))return a;e[r+a]=s}return a})(this,e,t,r);case"utf8":case"utf-8":return((e,t,r,n)=>z(F(t,e.length-r),e,r,n))(this,e,t,r);case"ascii":return w(this,e,t,r);case"latin1":case"binary":return w(this,e,t,r);case"base64":return((e,t,r,n)=>z(U(t),e,r,n))(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){var n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):n<e&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):n<t&&(t=n),t<e&&(t=e),l.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=l.prototype;else for(var o=t-e,r=new l(o,void 0),i=0;i<o;++i)r[i]=this[i+e];return r},l.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||j(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},l.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||j(e,t,this.length);for(var n=this[e+--t],o=1;0<t&&(o*=256);)n+=this[e+--t]*o;return n},l.prototype.readUInt8=function(e,t){return t||j(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return t||j(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return t||j(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return t||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUInt32BE=function(e,t){return t||j(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||j(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||j(e,t,this.length);for(var n=t,o=1,i=this[e+--n];0<n&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return t||j(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){t||j(e,2,this.length);t=this[e]|this[e+1]<<8;return 32768&t?4294901760|t:t},l.prototype.readInt16BE=function(e,t){t||j(e,2,this.length);t=this[e+1]|this[e]<<8;return 32768&t?4294901760|t:t},l.prototype.readInt32LE=function(e,t){return t||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return t||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return t||j(e,4,this.length),o.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return t||j(e,4,this.length),o.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return t||j(e,8,this.length),o.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return t||j(e,8,this.length),o.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,r,n){e=+e,t|=0,r|=0,n||I(this,e,t,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUIntBE=function(e,t,r,n){e=+e,t|=0,r|=0,n||I(this,e,t,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[t+o]=255&e;0<=--o&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,1,255,0),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):P(this,e,t,!0),t+2},l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):P(this,e,t,!1),t+2},l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):R(this,e,t,!0),t+4},l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):R(this,e,t,!1),t+4},l.prototype.writeIntLE=function(e,t,r,n){e=+e,t|=0,n||I(this,e,t,r,(n=Math.pow(2,8*r-1))-1,-n);var i=0,a=1,s=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){e=+e,t|=0,n||I(this,e,t,r,(n=Math.pow(2,8*r-1))-1,-n);var i=r-1,a=1,s=0;for(this[t+i]=255&e;0<=--i&&(a*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,1,127,-128),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&(e=e<0?255+e+1:e),t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):P(this,e,t,!0),t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):P(this,e,t,!1),t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,2147483647,-2147483648),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):R(this,e,t,!0),t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):R(this,e,t,!1),t+4},l.prototype.writeFloatLE=function(e,t,r){return D(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return D(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return B(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return B(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(r=r||0,n||0===n||(n=this.length),t>=e.length&&(t=e.length),(n=0<n&&n<r?r:n)===r)return 0;if(0===e.length||0===this.length)return 0;if((t=t||0)<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length);var o,i=(n=e.length-t<n-r?e.length-t+r:n)-r;if(this===e&&r<t&&t<n)for(o=i-1;0<=o;--o)e[o+t]=this[o+r];else if(i<1e3||!l.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+i),t);return i},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){var o;if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length&&(o=e.charCodeAt(0))<256&&(e=o),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(!(r<=t))if(t>>>=0,r=void 0===r?this.length:r>>>0,"number"==typeof(e=e||0))for(i=t;i<r;++i)this[i]=e;else for(var a=l.isBuffer(e)?e:F(new l(e,n).toString()),s=a.length,i=0;i<r-t;++i)this[i+t]=a[i%s];return this};var N=/[^+\/0-9A-Za-z-_]/g;function F(e,t){var r;t=t||1/0;for(var n=e.length,o=null,i=[],a=0;a<n;++a){if(55295<(r=e.charCodeAt(a))&&r<57344){if(!o){if(56319<r){-1<(t-=3)&&i.push(239,191,189);continue}if(a+1===n){-1<(t-=3)&&i.push(239,191,189);continue}o=r;continue}if(r<56320){-1<(t-=3)&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&-1<(t-=3)&&i.push(239,191,189);if(o=null,r<128){if(--t<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function U(e){return n.toByteArray((e=>{if((e=(e=>e.trim?e.trim():e.replace(/^\s+|\s+$/g,""))(e).replace(N,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e})(e))}function z(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}}.call(this,r(4))},function(e,t,r){t.byteLength=function(e){var e=c(e),r=e[0],e=e[1];return 3*(r+e)/4-e},t.toByteArray=function(e){for(var t,n=c(e),a=n[0],n=n[1],l=new i(3*(a+n)/4-n),p=0,u=0<n?a-4:a,r=0;r<u;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],l[p++]=t>>16&255,l[p++]=t>>8&255,l[p++]=255&t;return 2===n&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,l[p++]=255&t),1===n&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,l[p++]=t>>8&255,l[p++]=255&t),l},t.fromByteArray=function(e){for(var t,r=e.length,o=r%3,i=[],a=0,s=r-o;a<s;a+=16383)i.push(((e,t,r)=>{for(var o,a=[],s=t;s<r;s+=3)o=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(n[(o=o)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return a.join("")})(e,a,s<a+16383?s:a+16383));return 1==o?(t=e[r-1],i.push(n[t>>2]+n[t<<4&63]+"==")):2==o&&(t=(e[r-2]<<8)+e[r-1],i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"=")),i.join("")};for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,l=a.length;s<l;++s)n[s]=a[s],o[a.charCodeAt(s)]=s;function c(e){var t=e.length;if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4");e=e.indexOf("=");return[e=-1===e?t:e,e===t?0:4-e%4]}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,o){var i,a,s=8*o-n-1,l=(1<<s)-1,c=l>>1,p=-7,u=r?o-1:0,d=r?-1:1,o=e[t+u];for(u+=d,i=o&(1<<-p)-1,o>>=-p,p+=s;0<p;i=256*i+e[t+u],u+=d,p-=8);for(a=i&(1<<-p)-1,i>>=-p,p+=n;0<p;a=256*a+e[t+u],u+=d,p-=8);if(0===i)i=1-c;else{if(i===l)return a?NaN:1/0*(o?-1:1);a+=Math.pow(2,n),i-=c}return(o?-1:1)*a*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var a,s,c=8*i-o-1,p=(1<<c)-1,u=p>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:i-1,f=n?1:-1,i=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=p):(a=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-a))<1&&(a--,n*=2),2<=(t+=1<=a+u?d/n:d*Math.pow(2,1-u))*n&&(a++,n/=2),p<=a+u?(s=0,a=p):1<=a+u?(s=(t*n-1)*Math.pow(2,o),a+=u):(s=t*Math.pow(2,u-1)*Math.pow(2,o),a=0));8<=o;e[r+h]=255&s,h+=f,s/=256,o-=8);for(a=a<<o|s,c+=o;0<c;e[r+h]=255&a,h+=f,a/=256,c-=8);e[r+h-f]|=128*i}},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t){function r(){this.chars=""}r.prototype.setType=function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.chars+=this.getCharacters(e[t]);else this.chars=this.getCharacters(e)},r.prototype.getCharacters=function(e){var t="abcdefghijklmnopqrstuvwxyz",r=t.toUpperCase();return"alphanumeric"===e?"0123456789"+t+r:"numeric"===e?"0123456789":"alphabetic"===e?t+r:"hex"===e?"0123456789abcdef":"binary"===e?"01":"octal"===e?"01234567":e},r.prototype.removeUnreadable=function(){this.chars=this.chars.replace(/[0OIl]/g,"")},r.prototype.setcapitalization=function(e){"uppercase"===e?this.chars=this.chars.toUpperCase():"lowercase"===e&&(this.chars=this.chars.toLowerCase())},r.prototype.removeDuplicates=function(){var e=this.chars.split(""),e=[...new Set(e)];this.chars=e.join("")},e.exports=r},function(e,t,r){let n=r(31),o=r(32),i=r(33),a=r(34);function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?(t.strict?n:encodeURIComponent)(e):e}function c(e,t){return t.decode?o(e):e}function p(e){var t=e.indexOf("#");return e=-1!==t?e.slice(0,t):e}function u(e){var t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=(e=>{let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),i="string"==typeof r&&!o&&c(r,e).includes(e.arrayFormatSeparator),o=(r=i?c(r,e):r,o||i?r.split(e.arrayFormatSeparator).map(t=>c(t,e)):null===r?r:c(r,e));n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}})(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(var o of e.split("&"))if(""!==o){let[e,a]=i(t.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator"].includes(t.arrayFormat)?a:c(a,t),r(c(e,t),a,n)}for(let e of Object.keys(n)){let r=n[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=d(r[e],t);else n[e]=d(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=u,t.parse=h,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=(e=>{switch(e.arrayFormat){case"index":return t=>(r,n)=>{var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[",o,"]"].join("")]:[...r,[l(t,e),"[",l(o,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[l(t,e),"=",l(n,e)].join("")]:[[r,l(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,l(t,e)]:[...r,[l(t,e),"=",l(n,e)].join("")]}})(t),o={};for(let t of Object.keys(e))r(t)||(o[t]=e[t]);var i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map(r=>{var o=e[r];return void 0===o?"":null===o?l(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):l(r,t)+"="+l(o,t)}).filter(e=>0<e.length).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);var[r,n]=i(e,"#");return Object.assign({url:r.split("?")[0]||"",query:h(u(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:c(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);var n=p(e.url).split("?")[0]||"",o=t.extract(e.url),o=t.parse(o,{sort:!1}),o=Object.assign(o,e.query);let s=t.stringify(o,r),c=(s=s&&"?"+s,(e=>{let t="";var r=e.indexOf("#");return t=-1!==r?e.slice(r):t})(e.url));return e.fragmentIdentifier&&(c="#"+l(e.fragmentIdentifier,r)),""+n+s+c},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);var{url:e,query:i,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:e,query:a(i,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{var o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},function(e,t,r){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},function(e,t,r){var n=new RegExp("(%[a-f0-9]{2})|([^%]+?)","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n)||[],r=1;r<t.length;r++)t=(e=function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}var r;return 1===e.length?e:(r=e.slice(0,t=t||1),t=e.slice(t),Array.prototype.concat.call([],i(r),i(t)))}(t,r).join("")).match(n)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return(e=>{for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=a(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),s=0;s<i.length;s++){var l=i[s];e=e.replace(new RegExp(l,"g"),t[l])}return e})(e)}}},function(e,t,r){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");var r;return""===t||-1===(r=e.indexOf(t))?[e]:[e.slice(0,r),e.slice(r+t.length)]}},function(e,t,r){e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),i=0;i<n.length;i++){var a=n[i],s=e[a];(o?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},function(e,t,r){var s,n=r(36),o=r(9).utf8,i=r(37),a=r(9).bin;(s=function(e,t){e.constructor==String?e=(t&&"binary"===t.encoding?a:o).stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var r=n.bytesToWords(e),t=8*e.length,c=1732584193,p=-271733879,u=-1732584194,d=271733878,h=0;h<r.length;h++)r[h]=16711935&(r[h]<<8|r[h]>>>24)|4278255360&(r[h]<<24|r[h]>>>8);r[t>>>5]|=128<<t%32,r[14+(64+t>>>9<<4)]=t;for(var f=s._ff,m=s._gg,y=s._hh,g=s._ii,h=0;h<r.length;h+=16){var v=c,b=p,x=u,w=d,c=f(c,p,u,d,r[h+0],7,-680876936),d=f(d,c,p,u,r[h+1],12,-389564586),u=f(u,d,c,p,r[h+2],17,606105819),p=f(p,u,d,c,r[h+3],22,-1044525330);c=f(c,p,u,d,r[h+4],7,-176418897),d=f(d,c,p,u,r[h+5],12,1200080426),u=f(u,d,c,p,r[h+6],17,-1473231341),p=f(p,u,d,c,r[h+7],22,-45705983),c=f(c,p,u,d,r[h+8],7,1770035416),d=f(d,c,p,u,r[h+9],12,-1958414417),u=f(u,d,c,p,r[h+10],17,-42063),p=f(p,u,d,c,r[h+11],22,-1990404162),c=f(c,p,u,d,r[h+12],7,1804603682),d=f(d,c,p,u,r[h+13],12,-40341101),u=f(u,d,c,p,r[h+14],17,-1502002290),c=m(c,p=f(p,u,d,c,r[h+15],22,1236535329),u,d,r[h+1],5,-165796510),d=m(d,c,p,u,r[h+6],9,-1069501632),u=m(u,d,c,p,r[h+11],14,643717713),p=m(p,u,d,c,r[h+0],20,-373897302),c=m(c,p,u,d,r[h+5],5,-701558691),d=m(d,c,p,u,r[h+10],9,38016083),u=m(u,d,c,p,r[h+15],14,-660478335),p=m(p,u,d,c,r[h+4],20,-405537848),c=m(c,p,u,d,r[h+9],5,568446438),d=m(d,c,p,u,r[h+14],9,-1019803690),u=m(u,d,c,p,r[h+3],14,-187363961),p=m(p,u,d,c,r[h+8],20,1163531501),c=m(c,p,u,d,r[h+13],5,-1444681467),d=m(d,c,p,u,r[h+2],9,-51403784),u=m(u,d,c,p,r[h+7],14,1735328473),c=y(c,p=m(p,u,d,c,r[h+12],20,-1926607734),u,d,r[h+5],4,-378558),d=y(d,c,p,u,r[h+8],11,-2022574463),u=y(u,d,c,p,r[h+11],16,1839030562),p=y(p,u,d,c,r[h+14],23,-35309556),c=y(c,p,u,d,r[h+1],4,-1530992060),d=y(d,c,p,u,r[h+4],11,1272893353),u=y(u,d,c,p,r[h+7],16,-155497632),p=y(p,u,d,c,r[h+10],23,-1094730640),c=y(c,p,u,d,r[h+13],4,681279174),d=y(d,c,p,u,r[h+0],11,-358537222),u=y(u,d,c,p,r[h+3],16,-722521979),p=y(p,u,d,c,r[h+6],23,76029189),c=y(c,p,u,d,r[h+9],4,-640364487),d=y(d,c,p,u,r[h+12],11,-421815835),u=y(u,d,c,p,r[h+15],16,530742520),c=g(c,p=y(p,u,d,c,r[h+2],23,-995338651),u,d,r[h+0],6,-198630844),d=g(d,c,p,u,r[h+7],10,1126891415),u=g(u,d,c,p,r[h+14],15,-1416354905),p=g(p,u,d,c,r[h+5],21,-57434055),c=g(c,p,u,d,r[h+12],6,1700485571),d=g(d,c,p,u,r[h+3],10,-1894986606),u=g(u,d,c,p,r[h+10],15,-1051523),p=g(p,u,d,c,r[h+1],21,-2054922799),c=g(c,p,u,d,r[h+8],6,1873313359),d=g(d,c,p,u,r[h+15],10,-30611744),u=g(u,d,c,p,r[h+6],15,-1560198380),p=g(p,u,d,c,r[h+13],21,1309151649),c=g(c,p,u,d,r[h+4],6,-145523070),d=g(d,c,p,u,r[h+11],10,-1120210379),u=g(u,d,c,p,r[h+2],15,718787259),p=g(p,u,d,c,r[h+9],21,-343485551),c=c+v>>>0,p=p+b>>>0,u=u+x>>>0,d=d+w>>>0}return n.endian([c,p,u,d])})._ff=function(e,t,r,n,o,i,a){e=e+(t&r|~t&n)+(o>>>0)+a;return(e<<i|e>>>32-i)+t},s._gg=function(e,t,r,n,o,i,a){e=e+(t&n|r&~n)+(o>>>0)+a;return(e<<i|e>>>32-i)+t},s._hh=function(e,t,r,n,o,i,a){e=e+(t^r^n)+(o>>>0)+a;return(e<<i|e>>>32-i)+t},s._ii=function(e,t,r,n,o,i,a){e=e+(r^(t|~n))+(o>>>0)+a;return(e<<i|e>>>32-i)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);e=n.wordsToBytes(s(e,t));return t&&t.asBytes?e:t&&t.asString?a.bytesToString(e):n.bytesToHex(e)}},function(e,t){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];0<e;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var o=e[n]<<16|e[n+1]<<8|e[n+2],i=0;i<4;i++)8*n+6*i<=8*e.length?t.push(r.charAt(o>>>6*(3-i)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,o=0;n<e.length;o=++n%4)0!=o&&t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(e.charAt(n))>>>6-2*o);return t}};e.exports=n},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||(e=>"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0)))(e)||!!e._isBuffer)}},function(e,t,r){var o,l;function i(e){return((e,t)=>{var r,n,a,s,c,p,u,d,h=1,f=e.length,m="";for(n=0;n<f;n++)if("string"==typeof e[n])m+=e[n];else if("object"==typeof e[n]){if((s=e[n]).keys)for(r=t[h],a=0;a<s.keys.length;a++){if(null==r)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[a],s.keys[a-1]));r=r[s.keys[a]]}else r=s.param_no?t[s.param_no]:t[h++];if(o.not_type.test(s.type)&&o.not_primitive.test(s.type)&&r instanceof Function&&(r=r()),o.numeric_arg.test(s.type)&&"number"!=typeof r&&isNaN(r))throw new TypeError(i("[sprintf] expecting number but found %T",r));switch(o.number.test(s.type)&&(u=0<=r),s.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,s.width?parseInt(s.width):0);break;case"e":r=s.precision?parseFloat(r).toExponential(s.precision):parseFloat(r).toExponential();break;case"f":r=s.precision?parseFloat(r).toFixed(s.precision):parseFloat(r);break;case"g":r=s.precision?String(Number(r.toPrecision(s.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=s.precision?r.substring(0,s.precision):r;break;case"t":r=String(!!r),r=s.precision?r.substring(0,s.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=s.precision?r.substring(0,s.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=s.precision?r.substring(0,s.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}o.json.test(s.type)?m+=r:(!o.number.test(s.type)||u&&!s.sign?d="":(d=u?"+":"-",r=r.toString().replace(o.sign,"")),c=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",p=s.width-(d+r).length,p=s.width&&0<p?c.repeat(p):"",m+=s.align?d+r+p:"0"===c?d+p+r:p+d+r)}return m})((e=>{if(l[e])return l[e];for(var t,r=e,n=[],i=0;r;){if(null!==(t=o.text.exec(r)))n.push(t[0]);else if(null!==(t=o.modulo.exec(r)))n.push("%");else{if(null===(t=o.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){i|=1;var a=[],s=t[2],c=[];if(null===(c=o.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(c[1]);""!==(s=s.substring(c[0].length));){if(null===(c=o.key_access.exec(s))&&null===(c=o.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(c[1])}t[2]=a}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}r=r.substring(t[0].length)}return l[e]=n})(e),arguments)}function a(e,t){return i.apply(null,[e].concat(t||[]))}o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/},l=Object.create(null),t.sprintf=i,t.vsprintf=a,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=a,void 0!==(r=function(){return{sprintf:i,vsprintf:a}}.call(t,r,t,e)))&&(e.exports=r)},function(e,t,r){var o,A,a,s,l,c,p,u,d,h,f,g,w,k,$;function m(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t}function y(e,t){return"string"==typeof e&&-1!==g(t).indexOf(g(e))}function v(e,t){if("string"==typeof e)return e=e.replace(/^\s\s*/,""),void 0===t?e:e.substring(0,500)}function b(e,t){for(var n,o,i,a,s,l=0;l<t.length&&!a;){for(var c=t[l],p=t[l+1],r=n=0;r<c.length&&!a&&c[r];)if(a=c[r++].exec(e))for(o=0;o<p.length;o++)s=a[++n],"object"==typeof(i=p[o])&&0<i.length?2===i.length?"function"==typeof i[1]?this[i[0]]=i[1].call(this,s):this[i[0]]=i[1]:3===i.length?"function"!=typeof i[1]||i[1].exec&&i[1].test?this[i[0]]=s?s.replace(i[1],i[2]):void 0:this[i[0]]=s?i[1].call(this,s,i[2]):void 0:4===i.length&&(this[i[0]]=s?i[3].call(this,s.replace(i[1],i[2])):void 0):this[i]=s||void 0;l+=2}}function x(e,t){for(var r in t)if("object"==typeof t[r]&&0<t[r].length){for(var n=0;n<t[r].length;n++)if(y(t[r][n],e))return"?"===r?void 0:r}else if(y(t[r],e))return"?"===r?void 0:r;return t.hasOwnProperty("*")?t["*"]:e}function S(e,t){var r,n,i,c,h;return"object"==typeof e&&(t=e,e=void 0),this instanceof S?(r=void 0!==o&&o.navigator?o.navigator:void 0,n=e||(r&&r.userAgent?r.userAgent:""),i=r&&r.userAgentData?r.userAgentData:void 0,c=t?((e,t)=>{var n,r={};for(n in e)t[n]&&t[n].length%2==0?r[n]=t[n].concat(e[n]):r[n]=e[n];return r})(k,t):k,h=r&&r.userAgent==n,this.getBrowser=function(){var e,t={name:void 0,version:void 0};return b.call(t,n,c.browser),t.major="string"==typeof(e=t[p])?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0,h&&r&&r.brave&&"function"==typeof r.brave.isBrave&&(t[s]="Brave"),t},this.getCPU=function(){var e={architecture:void 0};return b.call(e,n,c.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return b.call(e,n,c.device),h&&!e[l]&&i&&i.mobile&&(e[l]=u),h&&"Macintosh"==e[a]&&r&&void 0!==r.standalone&&r.maxTouchPoints&&2<r.maxTouchPoints&&(e[a]="iPad",e[l]=d),e},this.getEngine=function(){var e={name:void 0,version:void 0};return b.call(e,n,c.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return b.call(e,n,c.os),h&&!e[s]&&i&&i.platform&&"Unknown"!=i.platform&&(e[s]=i.platform.replace(/chrome os/i,"Chromium OS").replace(/macos/i,"Mac OS")),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n="string"==typeof e&&500<e.length?v(e,500):e,this},this.setUA(n),this):new S(e,t).getResult()}o="object"==typeof window?window:this,k={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p="version",[s="name","Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[s,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[s,p],[/opios[\/ ]+([\w\.]+)/i],[p,[s,"Opera Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[s,"Opera GX"]],[/\bopr\/([\w\.]+)/i],[p,[s,"Opera"]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[s,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[p,[s,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[s,p],[/quark(?:pc)?\/([-\w\.]+)/i],[p,[s,"Quark"]],[/\bddg\/([\w\.]+)/i],[p,[s,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[s,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[s,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[s,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[s,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[s,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[s,"Smart Lenovo Browser"]],[/(avast|avg)\/([\w\.]+)/i],[[s,/(.+)/,"$1 Secure Browser"],p],[/\bfocus\/([\w\.]+)/i],[p,[s,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[p,[s,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[s,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[s,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[s,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[s,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[p,[s,"Firefox"]],[/\bqihoobrowser\/?([\w\.]*)/i],[p,[s,"360"]],[/\b(qq)\/([\w\.]+)/i],[[s,/(.+)/,"$1Browser"],p],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[s,/(.+)/,"$1 Browser"],p],[/samsungbrowser\/([\w\.]+)/i],[p,[s,"Samsung Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[p,[s,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[s,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[s,p],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[s],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[p,s],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[s,"Facebook"],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[s,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[s,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[s,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[s,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[s,"Chrome WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[s,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[s,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[s,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,s],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[s,[p,x,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[s,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[s,"Netscape"],p],[/(wolvic|librewolf)\/([\w\.]+)/i],[s,p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[s,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[s,[p,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[s,[p,/master.|lts./,""]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[["architecture","amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[["architecture","ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[["architecture","arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[["architecture","armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[["architecture","arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[["architecture",/ower/,"",g=function(e){return e.toLowerCase()}]],[/ sun4\w[;\)]/i],[["architecture","sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[["architecture",g]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[a="model",[c="vendor","Samsung"],[l="type",d="tablet"]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[a,[c,"Samsung"],[l,u="mobile"]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[a,[c,"Apple"],[l,u]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[a,[c,"Apple"],[l,d]],[/(macintosh);/i],[a,[c,"Apple"]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[a,[c,"Sharp"],[l,u]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[a,[c,"Honor"],[l,d]],[/honor([-\w ]+)[;\)]/i],[a,[c,"Honor"],[l,u]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[a,[c,"Huawei"],[l,d]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[a,[c,"Huawei"],[l,u]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[a,/_/g," "],[c,"Xiaomi"],[l,d]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[a,/_/g," "],[c,"Xiaomi"],[l,u]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[a,[c,"OPPO"],[l,u]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[a,[c,x,{OnePlus:["304","403","203"],"*":"OPPO"}],[l,d]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[a,[c,"Vivo"],[l,u]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[a,[c,"Realme"],[l,u]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[a,[c,"Motorola"],[l,u]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[a,[c,"Motorola"],[l,d]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[a,[c,"LG"],[l,d]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,/\blg-?([\d\w]+) bui/i],[a,[c,"LG"],[l,u]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[a,[c,"Lenovo"],[l,d]],[/(nokia) (t[12][01])/i],[c,a,[l,d]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[a,/_/g," "],[l,u],[c,"Nokia"]],[/(pixel (c|tablet))\b/i],[a,[c,"Google"],[l,d]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[a,[c,"Google"],[l,u]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[c,"Sony"],[l,u]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[a,"Xperia Tablet"],[c,"Sony"],[l,d]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[a,[c,"OnePlus"],[l,u]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[a,[c,"Amazon"],[l,d]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[a,/(.+)/g,"Fire Phone $1"],[c,"Amazon"],[l,u]],[/(playbook);[-\w\),; ]+(rim)/i],[a,c,[l,d]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[a,[c,"BlackBerry"],[l,u]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[a,[c,"ASUS"],[l,d]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[a,[c,"ASUS"],[l,u]],[/(nexus 9)/i],[a,[c,"HTC"],[l,d]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[c,[a,/_/g," "],[l,u]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[a,[c,"TCL"],[l,d]],[/(itel) ((\w+))/i],[[c,g],a,[l,x,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[a,[c,"Acer"],[l,d]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[a,[c,"Meizu"],[l,u]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[a,[c,"Ulefone"],[l,u]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[a,[c,"Energizer"],[l,u]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[a,[c,"Cat"],[l,u]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[a,[c,"Smartfren"],[l,u]],[/droid.+; (a(?:015|06[35]|142p?))/i],[a,[c,"Nothing"],[l,u]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[a,[c,"Archos"],[l,d]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[a,[c,"Archos"],[l,u]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[c,a,[l,d]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (hmd|imo) ([\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[c,a,[l,u]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[c,a,[l,d]],[/(surface duo)/i],[a,[c,"Microsoft"],[l,d]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[a,[c,"Fairphone"],[l,u]],[/(u304aa)/i],[a,[c,"AT&T"],[l,u]],[/\bsie-(\w*)/i],[a,[c,"Siemens"],[l,u]],[/\b(rct\w+) b/i],[a,[c,"RCA"],[l,d]],[/\b(venue[\d ]{2,7}) b/i],[a,[c,"Dell"],[l,d]],[/\b(q(?:mv|ta)\w+) b/i],[a,[c,"Verizon"],[l,d]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[a,[c,"Barnes & Noble"],[l,d]],[/\b(tm\d{3}\w+) b/i],[a,[c,"NuVision"],[l,d]],[/\b(k88) b/i],[a,[c,"ZTE"],[l,d]],[/\b(nx\d{3}j) b/i],[a,[c,"ZTE"],[l,u]],[/\b(gen\d{3}) b.+49h/i],[a,[c,"Swiss"],[l,u]],[/\b(zur\d{3}) b/i],[a,[c,"Swiss"],[l,d]],[/\b((zeki)?tb.*\b) b/i],[a,[c,"Zeki"],[l,d]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[c,"Dragon Touch"],a,[l,d]],[/\b(ns-?\w{0,9}) b/i],[a,[c,"Insignia"],[l,d]],[/\b((nxa|next)-?\w{0,9}) b/i],[a,[c,"NextBook"],[l,d]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[c,"Voice"],a,[l,u]],[/\b(lvtel\-)?(v1[12]) b/i],[[c,"LvTel"],a,[l,u]],[/\b(ph-1) /i],[a,[c,"Essential"],[l,u]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[a,[c,"Envizen"],[l,d]],[/\b(trio[-\w\. ]+) b/i],[a,[c,"MachSpeed"],[l,d]],[/\btu_(1491) b/i],[a,[c,"Rotor"],[l,d]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[a,[c,"Nvidia"],[l,d]],[/(sprint) (\w+)/i],[c,a,[l,u]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[c,"Microsoft"],[l,u]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[a,[c,"Zebra"],[l,d]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[a,[c,"Zebra"],[l,u]],[/smart-tv.+(samsung)/i],[c,[l,h="smarttv"]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[c,"Samsung"],[l,h]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[c,"LG"],[l,h]],[/(apple) ?tv/i],[c,[a,"Apple TV"],[l,h]],[/crkey/i],[[a,"Chromecast"],[c,"Google"],[l,h]],[/droid.+aft(\w+)( bui|\))/i],[a,[c,"Amazon"],[l,h]],[/(shield \w+ tv)/i],[a,[c,"Nvidia"],[l,h]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[a,[c,"Sharp"],[l,h]],[/(bravia[\w ]+)( bui|\))/i],[a,[c,"Sony"],[l,h]],[/(mi(tv|box)-?\w+) bui/i],[a,[c,"Xiaomi"],[l,h]],[/Hbbtv.*(technisat) (.*);/i],[c,a,[l,h]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[c,v],[a,v],[l,h]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[a,[l,h]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[l,h]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[c,a,[l,"console"]],[/droid.+; (shield)( bui|\))/i],[a,[c,"Nvidia"],[l,"console"]],[/(playstation \w+)/i],[a,[c,"Sony"],[l,"console"]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[a,[c,"Microsoft"],[l,"console"]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[a,[c,"Samsung"],[l,f="wearable"]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[c,a,[l,f]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[a,[c,"OPPO"],[l,f]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[a,[c,"Apple"],[l,f]],[/(opwwe\d{3})/i],[a,[c,"OnePlus"],[l,f]],[/(moto 360)/i],[a,[c,"Motorola"],[l,f]],[/(smartwatch 3)/i],[a,[c,"Sony"],[l,f]],[/(g watch r)/i],[a,[c,"LG"],[l,f]],[/droid.+; (wt63?0{2,3})\)/i],[a,[c,"Zebra"],[l,f]],[/droid.+; (glass) \d/i],[a,[c,"Google"],[l,f]],[/(pico) (4|neo3(?: link|pro)?)/i],[c,a,[l,f]],[/; (quest( \d| pro)?)/i],[a,[c,"Facebook"],[l,f]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[c,[l,"embedded"]],[/(aeobc)\b/i],[a,[c,"Amazon"],[l,"embedded"]],[/(homepod).+mac os/i],[a,[c,"Apple"],[l,"embedded"]],[/windows iot/i],[[l,"embedded"]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[a,[l,u]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[a,[l,d]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[l,d]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[l,u]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[a,[c,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[s,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[s,p],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[s,p],[/ladybird\//i],[[s,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,s]],os:[[/microsoft (windows) (vista|xp)/i],[s,p],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[s,[p,x,w={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,x,w],[s,"Windows"]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[s,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[s,"Mac OS"],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,s],[/(ubuntu) ([\w\.]+) like android/i],[[s,/(.+)/,"$1 Touch"],p],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],[s,p],[/\(bb(10);/i],[p,[s,"BlackBerry"]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[p,[s,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[s,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[s,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[s,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[s,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[s,"Chromium OS"],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[s,p],[/(sunos) ?([\w\.\d]*)/i],[[s,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[s,p]]},S.VERSION="0.7.41",S.BROWSER=m([s,p,"major"]),S.CPU=m(["architecture"]),S.DEVICE=m([a,c,l,"console",u,h,d,f,"embedded"]),S.ENGINE=S.OS=m([s,p]),void 0!==t?(t=void 0!==e&&e.exports?e.exports=S:t).UAParser=S:r(40)?void 0!==(w=function(){return S}.call(t,r,t,e))&&(e.exports=w):void 0!==o&&(o.UAParser=S),($=void 0!==o&&(o.jQuery||o.Zepto))&&!$.ua&&(A=new S,$.ua=A.getResult(),$.ua.get=function(){return A.getUA()},$.ua.set=function(e){A.setUA(e);var r,t=A.getResult();for(r in t)$.ua[r]=t[r]})},function(e,t){!function(t){e.exports=t}.call(this,{})},function(e,t,r){var n=r(42),o=r(3),i=r(45),a=r(47),s=r(50);e.exports=function(e,t,r){var r=r||{},c=n(e,t),p=r.locale,u=s.distanceInWords.localize;p&&p.distanceInWords&&p.distanceInWords.localize&&(u=p.distanceInWords.localize);var d,m,p={addSuffix:Boolean(r.addSuffix),comparison:c},c=0<c?(d=o(e),o(t)):(d=o(t),o(e)),t=i(c,d),e=c.getTimezoneOffset()-d.getTimezoneOffset(),e=Math.round(t/60)-e;return e<2?r.includeSeconds?t<5?u("lessThanXSeconds",5,p):t<10?u("lessThanXSeconds",10,p):t<20?u("lessThanXSeconds",20,p):t<40?u("halfAMinute",null,p):u(t<60?"lessThanXMinutes":"xMinutes",1,p):0==e?u("lessThanXMinutes",1,p):u("xMinutes",e,p):e<45?u("xMinutes",e,p):e<90?u("aboutXHours",1,p):e<1440?u("aboutXHours",Math.round(e/60),p):e<2520?u("xDays",1,p):e<43200?u("xDays",Math.round(e/1440),p):e<86400?u("aboutXMonths",m=Math.round(e/43200),p):(m=a(c,d))<12?u("xMonths",Math.round(e/43200),p):(r=m%12,t=Math.floor(m/12),r<3?u("aboutXYears",t,p):r<9?u("overXYears",t,p):u("almostXYears",t+1,p))}},function(e,t,r){var n=r(3);e.exports=function(e,t){e=n(e).getTime(),t=n(t).getTime();return t<e?-1:e<t?1:0}},function(e,t){e.exports=function(e){var e=new Date(e.getTime()),r=e.getTimezoneOffset();return e.setSeconds(0,0),6e4*r+e.getTime()%6e4}},function(e,t){e.exports=function(e){return e instanceof Date}},function(e,t,r){var n=r(46);e.exports=function(e,t){e=n(e,t)/1e3;return 0<e?Math.floor(e):Math.ceil(e)}},function(e,t,r){var n=r(3);e.exports=function(e,t){e=n(e),t=n(t);return e.getTime()-t.getTime()}},function(e,t,r){var n=r(3),o=r(48),i=r(49);e.exports=function(e,t){var e=n(e),t=n(t),s=i(e,t),l=Math.abs(o(e,t));return e.setMonth(e.getMonth()-s*l),s*(l-(i(e,t)===-s))}},function(e,t,r){var n=r(3);e.exports=function(e,t){e=n(e),t=n(t);return 12*(e.getFullYear()-t.getFullYear())+(e.getMonth()-t.getMonth())}},function(e,t,r){var n=r(3);e.exports=function(e,t){e=n(e).getTime(),t=n(t).getTime();return e<t?-1:t<e?1:0}},function(e,t,r){var n=r(51),r=r(52);e.exports={distanceInWords:n(),format:r()}},function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,r,n){return n=n||{},t="string"==typeof e[t]?e[t]:1===r?e[t].one:e[t].other.replace("{{count}}",r),n.addSuffix?0<n.comparison?"in "+t:t+" ago":t}}}},function(e,t,r){var n=r(10);e.exports=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],r=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],s=["am","pm"],l=["a.m.","p.m."],c={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return i[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?l[1]:l[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){c[e+"o"]=function(t,r){return(e=>{var t=e%100;if(20<t||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"})(r[e](t))}}),{formatters:c,formattingTokensRegExp:n(c)}}},function(e,t,r){e.exports=(()=>{return t={686:function(e,t,r){r.d(t,{default:function(){return y}}),t=r(279);var n=r.n(t),o=(t=r(370),r.n(t)),i=(t=r(817),r.n(t));function a(e){try{document.execCommand(e)}catch(e){}}function s(e){return e=i()(e),a("cut"),e}function l(e,t){var r=e,n="rtl"===document.documentElement.getAttribute("dir");return(e=document.createElement("textarea")).style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px",n=window.pageYOffset||document.documentElement.scrollTop,e.style.top="".concat(n,"px"),e.setAttribute("readonly",""),e.value=r,t.container.appendChild(e),t=i()(e),a("copy"),e.remove(),t}function c(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},r="";return"string"==typeof e?r=l(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?r=l(e.value,t):(r=i()(e),a("copy")),r}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if(e="data-clipboard-".concat(e),t.hasAttribute(e))return t.getAttribute(e)}var y=(()=>{((e,t)=>{if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)})(a,n());var e,r,i=(e=>{var t=(()=>{if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}})();return function(){var n=f(e),r=t?(r=f(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments),n=this;return!r||"object"!==u(r)&&"function"!=typeof r?(()=>{if(void 0!==n)return n;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")})():r}})(a);function a(e,t){var r;return(e=>{if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this),(r=i.call(this)).resolveOptions(t),r.listenClick(e),r}return r=[{key:"copy",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return c(e,t)}},{key:"cut",value:s},{key:"isSupported",value:function(){var e="string"==typeof(e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"])?[e]:e,t=!!document.queryCommandSupported;return e.forEach(function(e){t=t&&!!document.queryCommandSupported(e)}),t}}],d((e=a).prototype,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===u(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=o()(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,r=this.action(t)||"copy";e=function(argument_0){var e=void 0===(r=(argument_0=0<arguments.length&&void 0!==argument_0?argument_0:{}).action)?"copy":r,t=argument_0.container,r=argument_0.target,argument_0=argument_0.text;if("copy"!==e&&"cut"!==e)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==p(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===e&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===e&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return argument_0?c(argument_0,{container:t}):r?"cut"===e?s(r):c(r,{container:t}):void 0}({action:r,container:this.container,target:this.target(t),text:this.text(t)}),this.emit(e?"success":"error",{action:r,text:e,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return m("action",e)}},{key:"defaultTarget",value:function(e){if(e=m("target",e))return document.querySelector(e)}},{key:"defaultText",value:function(e){return m("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}]),d(e,r),a})()},828:function(e){var t;"undefined"==typeof Element||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,r){var n=r(828);function o(e,t,r,o,i){var a=function(e,t,r,o){return function(r){r.delegateTarget=n(r.target,t),r.delegateTarget&&o.call(e,r)}}.apply(this,arguments);return e.addEventListener(r,a,i),{destroy:function(){e.removeEventListener(r,a,i)}}}e.exports=function(e,t,r,n,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof r?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,r,n,i)}))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var r=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,r){var n=r(879),o=r(438);e.exports=function(e,t,r){if(!e&&!t&&!r)throw new Error("Missing required arguments");if(!n.string(t))throw new TypeError("Second argument must be a String");if(!n.fn(r))throw new TypeError("Third argument must be a Function");if(n.node(e))return(l=e).addEventListener(c=t,p=r),{destroy:function(){l.removeEventListener(c,p)}};if(n.nodeList(e))return i=e,a=t,s=r,Array.prototype.forEach.call(i,function(e){e.addEventListener(a,s)}),{destroy:function(){Array.prototype.forEach.call(i,function(e){e.removeEventListener(a,s)})}};if(n.string(e))return o(document.body,e,t,r);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var i,a,s,l,c,p}},817:function(e){e.exports=function(e){var t,r="SELECT"===e.nodeName?(e.focus(),e.value):"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName?((t=e.hasAttribute("readonly"))||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),t||e.removeAttribute("readonly"),e.value):(e.hasAttribute("contenteditable")&&e.focus(),r=window.getSelection(),(t=document.createRange()).selectNodeContents(e),r.removeAllRanges(),r.addRange(t),r.toString());return r}},279:function(e){function t(){}t.prototype={on:function(e,t,r){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this},once:function(e,t,r){var n=this;function o(){n.off(e,o),t.apply(r,arguments)}return o._=t,this.on(e,o,r)},emit:function(e){for(var t=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,t);return this},off:function(e,t){var r=this.e||(this.e={}),n=r[e],o=[];if(n&&t)for(var i=0,a=n.length;i<a;i++)n[i].fn!==t&&n[i].fn._!==t&&o.push(n[i]);return o.length?r[e]=o:delete r[e],this}},e.exports=t,e.exports.TinyEmitter=t}},r={},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e(686).default;function e(n){var o;return(r[n]||(o=r[n]={exports:{}},t[n](o,o.exports,e),o)).exports}var t,r})()},function(e,t,r){var n=r(55),r=r(56);e.exports={distanceInWords:n(),format:r()}},function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}};return{localize:function(t,r,n){return n=n||{},t="string"==typeof e[t]?e[t]:1===r?e[t].one:e[t].other.replace("{{count}}",r),n.addSuffix?0<n.comparison?t+"内":t+"前":t}}}},function(e,t,r){var n=r(10);e.exports=function(){var e=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],t=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],r=["日","一","二","三","四","五","六"],o=["周日","周一","周二","周三","周四","周五","周六"],i=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],a=["上午","下午"],s={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return i[e.getDay()]}};return s.a=s.aa=s.A=function(e){return 1<=e.getHours()/12?a[1]:a[0]},["M","D","DDD","d","Q","W"].forEach(function(e){s[e+"o"]=function(t,r){return r[e](t).toString()}}),{formatters:s,formattingTokensRegExp:n(s)}}},function(e,t,r){var n=r(15),r=r.n(n)()(function(e){return e[1]});r.push([e.i,".pb-api-doc-new-window {\n  display: block;\n  position: fixed;\n  top: 0;\n  right: 0;\n  line-height: 48px;\n  padding: 0 0.625rem;\n}\n.pb-api-doc-new-window a {\n  color: #FFF;\n  display: inline-block;\n  line-height: 48px;\n}\n",""]),t.a=r},,,,,function(e,t,r){r.r(t),r(16).a.QuickMount("#app","<api-doc />",r(65).default)},function(e,t){(()=>{var e,t,r={448:(e,t,r)=>{let n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new Map;class a{constructor(e,t){if(this._$cssResult$=!0,t!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=i.get(this.cssText);return n&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}let s=e=>new a("string"==typeof e?e:e+"",o),l=(e,...t)=>{t=1===e.length?e[0]:t.reduce((t,r,n)=>t+(()=>{if(!0===r._$cssResult$)return r.cssText;if("number"==typeof r)return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})()+e[n+1],e[0]);return new a(t,o)},c=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(var r of e.cssRules)t+=r.cssText;return s(t)})(e):e,p,u=window.trustedTypes,d=u?u.emptyScript:"",h=window.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},m=(e,t)=>t!==e&&(t==t||e==e),y={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){null==this.l&&(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{t=this._$Eh(r,t);void 0!==t&&(this._$Eu.set(t,r),e.push(t))}),e}static createProperty(e,t=y){var r;t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e)||(r="symbol"==typeof e?Symbol():"__"+e,void 0!==(r=this.getPropertyDescriptor(e,r,t))&&Object.defineProperty(this.prototype,e,r))}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){var o=this[e];this[t]=n,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(var r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){var t=[];if(Array.isArray(e)){var r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eh(e,t){t=t.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),null!=(e=this.constructor.l)&&e.forEach(e=>e(this))}addController(e){var t;(null!=(t=this._$Eg)?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&null!=(t=e.hostConnected)&&t.call(e)}removeController(e){var t;null!=(t=this._$Eg)&&t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e=null!=(e=this.shadowRoot)?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{n?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{var r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)})})(e,this.constructor.elementStyles),e}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null!=(e=this._$Eg)&&e.forEach(e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null!=(e=this._$Eg)&&e.forEach(e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=y){var n,i=this.constructor._$Eh(e,r);void 0!==i&&!0===r.reflect&&(n=(null!=(n=null==(n=r.converter)?void 0:n.toAttribute)?n:f.toAttribute)(t,r.type),this._$Ei=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Ei=null)}_$AK(e,t){var i=this.constructor,a=i._$Eu.get(e);if(void 0!==a&&this._$Ei!==a){let e=i.getPropertyOptions(a),s=e.converter,l=null!=(i=null!=(i=null==(i=s)?void 0:i.fromAttribute)?i:"function"==typeof s?s:null)?i:f.fromAttribute;this._$Ei=a,this[a]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}var e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(this.isUpdatePending){this.hasUpdated,this._$Et&&(this._$Et.forEach((e,t)=>this[t]=e),this._$Et=void 0);let t=!1;var r=this._$AL;try{(t=this.shouldUpdate(r))?(this.willUpdate(r),null!=(e=this._$Eg)&&e.forEach(e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)}),this.update(r)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(r)}}willUpdate(e){}_$AE(e){var t;null!=(t=this._$Eg)&&t.forEach(e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$ES(t,this[t],e)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null!=h&&h({ReactiveElement:g}),(null!=(p=globalThis.reactiveElementVersions)?p:globalThis.reactiveElementVersions=[]).push("1.3.0");let b=globalThis.trustedTypes,x=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,k="?"+w,S=`<${k}>`,$=document,A=(e="")=>$.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,T=e=>O(e)||"function"==typeof(null==(e=e)?void 0:e[Symbol.iterator]),_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,j=/>/g,I=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,R=/"/g,L=/^(?:script|style|textarea|title)$/i,D=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),B=D(1),N=(D(2),Symbol.for("lit-noChange")),M=Symbol.for("lit-nothing"),F=new WeakMap,U=$.createTreeWalker($,129,null,!1),z=(e,t)=>{let r=e.length-1,n=[],o,i=2===t?"<svg>":"",a=_;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,p=0;for(;p<r.length&&(a.lastIndex=p,null!==(l=a.exec(r)));)p=a.lastIndex,a===_?"!--"===l[1]?a=C:void 0!==l[1]?a=j:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=I):void 0!==l[3]&&(a=I):a===I?">"===l[0]?(a=null!=o?o:_,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?I:'"'===l[3]?R:P):a===R||a===P?a=I:a===C||a===j?a=_:(a=I,o=void 0);var u=a===I&&e[t+1].startsWith("/>")?" ":"";i+=a===_?r+S:0<=c?(n.push(s),r.slice(0,c)+"$lit$"+r.slice(c)+w+u):r+w+(-2===c?(n.push(void 0),t):u)}t=i+(e[r]||"<?>")+(2===t?"</svg>":"");if(Array.isArray(e)&&e.hasOwnProperty("raw"))return[void 0!==x?x.createHTML(t):t,n];throw Error("invalid template strings array")};class q{constructor({strings:e,_$litType$:t},r){var n;this.parts=[];let o=0,i=0;var a=e.length-1,s=this.parts,[e,c]=z(e,t);if(this.el=q.createElement(e,r),U.currentNode=this.el.content,2===t){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=U.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){let e=[];for(let t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){let r=c[i++];if(e.push(t),void 0!==r){let e=n.getAttribute(r.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(r);s.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?Y:"?"===t[1]?J:"@"===t[1]?Z:G})}else s.push({type:6,index:o})}for(let t of e)n.removeAttribute(t)}if(L.test(n.tagName)){let e=n.textContent.split(w),t=e.length-1;if(0<t){n.textContent=b?b.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],A()),U.nextNode(),s.push({type:2,index:++o});n.append(e[t],A())}}}else if(8===n.nodeType)if(n.data===k)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(w,e+1));)s.push({type:7,index:o}),e+=w.length-1}o++}}static createElement(e,t){var r=$.createElement("template");return r.innerHTML=e,r}}function H(e,t,r=e,n){var i;if(t!==N){let l=void 0!==n?null==(o=r._$Cl)?void 0:o[n]:r._$Cu;var o=E(t)?void 0:t._$litDirective$;(null==l?void 0:l.constructor)!==o&&(null!=(i=null==l?void 0:l._$AO)&&i.call(l,!1),void 0===o?l=void 0:(l=new o(e))._$AT(e,r,n),void 0!==n?(null!=(i=r._$Cl)?i:r._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(t=H(e,l._$AS(e,t.values),l,n))}return t}class W{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var{el:{content:r},parts:n}=this._$AD,t=(null!=(t=null==e?void 0:e.creationScope)?t:$).importNode(r,!0);U.currentNode=t;let i=U.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new V(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new X(i,this,e)),this.v.push(t),l=n[++s]}a!==(null==l?void 0:l.index)&&(i=U.nextNode(),a++)}return t}m(e){let t=0;for(var r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class V{constructor(e,t,r,n){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=null==(e=null==n?void 0:n.isConnected)||e}get _$AU(){var e;return null!=(e=null==(e=this._$AM)?void 0:e._$AU)?e:this._$Cg}get parentNode(){let e=this._$AA.parentNode;var t=this._$AM;return e=void 0!==t&&11===e.nodeType?t.parentNode:e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),E(e)?e===M||null==e||""===e?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==N&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):T(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==M&&E(this._$AH)?this._$AA.nextSibling.data=e:this.k($.createTextNode(e)),this._$AH=e}T(e){var t,{values:r,_$litType$:n}=e,n="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=q.createElement(n.h,this.options)),n);if((null==(t=this._$AH)?void 0:t._$AD)===n)this._$AH.m(r);else{let e=new W(n,this),t=e.p(this.options);e.m(r),this.k(t),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new q(e)),t}S(e){O(this._$AH)||(this._$AH=[],this._$AR());var o,t=this._$AH;let r,n=0;for(o of e)n===t.length?t.push(r=new V(this.A(A()),this.A(A()),this,this.options)):r=t[n],r._$AI(o),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for(null!=(r=this._$AP)&&r.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null!=(t=this._$AP))&&t.call(this,e)}}class G{constructor(e,t,r,n,o){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,2<r.length||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){var o=this.strings;let i=!1;if(void 0===o)e=H(this,e,t,0),(i=!E(e)||e!==this._$AH&&e!==N)&&(this._$AH=e);else{let n=e,a,s;for(e=o[0],a=0;a<o.length-1;a++)(s=H(this,n[r+a],t,a))===N&&(s=this._$AH[a]),i=i||!E(s)||s!==this._$AH[a],s===M?e=M:e!==M&&(e+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}i&&!n&&this.C(e)}C(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Y extends G{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===M?void 0:e}}let K=b?b.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}C(e){e&&e!==M?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Z extends G{constructor(e,t,r,n,o){super(e,t,r,n,o),this.type=5}_$AI(e,t=this){var o,i;(e=null!=(t=H(this,e,t,0))?t:M)!==N&&(t=this._$AH,o=e===M&&t!==M||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,i=e!==M&&(t===M||o),o&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,e),this._$AH=e)}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call(null!=(t=null==(t=this.options)?void 0:t.host)?t:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}w,k,z,W,T,V,G,J,Z,Y,X;var ee=window.litHtmlPolyfillSupport;null!=ee&&ee(q,V),(null!=(ee=globalThis.litHtmlVersions)?ee:globalThis.litHtmlVersions=[]).push("2.2.0");class ne extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r=super.createRenderRoot();return null==(t=this.renderOptions).renderBefore&&(t.renderBefore=r.firstChild),r}update(e){var t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,r)=>{var o,n=null!=(n=null==r?void 0:r.renderBefore)?n:t;let a=n._$litPart$;if(void 0===a){let e=null!=(o=null==r?void 0:r.renderBefore)?o:null;n._$litPart$=a=new V(t.insertBefore(A(),e),e,void 0,null!=r?r:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null!=(e=this._$Dt)&&e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null!=(e=this._$Dt)&&e.setConnected(!1)}render(){return N}}ne.finalized=!0,ne._$litElement$=!0,null!=(ee=globalThis.litElementHydrateSupport)&&ee.call(globalThis,{LitElement:ne});var ee=globalThis.litElementPolyfillSupport;null!=ee&&ee({LitElement:ne}),(null!=(ee=globalThis.litElementVersions)?ee:globalThis.litElementVersions=[]).push("3.2.0");let ie={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},ae=/[&<>"']/,se=/[&<>"']/g,le=/[<>"']|&(?!#?\w+;)/,ce=/[<>"']|&(?!#?\w+;)/g,pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ue=e=>pe[e];function de(e,t){if(t){if(ae.test(e))return e.replace(se,ue)}else if(le.test(e))return e.replace(ce,ue);return e}let he=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function fe(e){return e.replace(he,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}let me=/(^|[^\[])\^/g;function ye(e,t){e="string"==typeof e?e:e.source,t=t||"";let r={replace:(t,n)=>(n=(n=n.source||n).replace(me,"$1"),e=e.replace(t,n),r),getRegex:()=>new RegExp(e,t)};return r}let ge=/[^\w:]/g,ve=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function be(e,t,r){if(e){let t;try{t=decodeURIComponent(fe(r)).replace(ge,"").toLowerCase()}catch(e){return null}if(0===t.indexOf("javascript:")||0===t.indexOf("vbscript:")||0===t.indexOf("data:"))return null}t&&!ve.test(r)&&(r=((e,t)=>{xe[" "+e]||(we.test(e)?xe[" "+e]=e+"/":xe[" "+e]=Oe(e,"/",!0));var r=-1===(e=xe[" "+e]).indexOf(":");return"//"===t.substring(0,2)?r?t:e.replace(ke,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(Se,"$1")+t:e+t})(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}let xe={},we=/^[^:]+:\/*[^/]*$/,ke=/^([^:]+:)[\s\S]*$/,Se=/^([^:]+:\/*[^/]*)[\s\S]*$/,$e={exec:function(){}};function Ae(e){let t,r,n=1;for(;n<arguments.length;n++)for(r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function Ee(e,t){var r=e.replace(/\|/g,(e,t,r)=>{let n=!1,o=t;for(;0<=--o&&"\\"===r[o];)n=!n;return n?"|":" |"}).split(/ \|/);let n=0;if(r[0].trim()||r.shift(),0<r.length&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function Oe(e,t,r){var n=e.length;if(0===n)return"";let o=0;for(;o<n;){var i=e.charAt(n-o-1);if((i!==t||r)&&(i===t||!r))break;o++}return e.slice(0,n-o)}function Te(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function _e(e,t){if(t<1)return"";let r="";for(;1<t;)1&t&&(r+=e),t>>=1,e+=e;return r+e}function Ce(e,t,r,n){var o=t.href,t=t.title?de(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");if("!"===e[0].charAt(0))return{type:"image",raw:r,href:o,title:t,text:de(a)};{n.state.inLink=!0;let e={type:"link",raw:r,href:o,title:t,text:a,tokens:n.inlineTokens(a,[])};return n.state.inLink=!1,e}}class je{constructor(e){this.options=e||ie}space(e){e=this.rules.block.newline.exec(e);if(e&&0<e[0].length)return{type:"space",raw:e[0]}}code(e){var t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Oe(e,"\n")}}}fences(e){var t=this.rules.block.fences.exec(e);if(t){let e=t[0],r=((e,t)=>{if(null===(e=e.match(/^(\s+)(?:```)/)))return t;let n=e[1];return t.split("\n").map(e=>{var t=e.match(/^\s+/);return null!==t&&([t]=t,t.length>=n.length)?e.slice(n.length):e}).join("\n")})(e,t[3]||"");return{type:"code",raw:e,lang:t[2]&&t[2].trim(),text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=Oe(e,"#");!this.options.pedantic&&t&&!/ $/.test(t)||(e=t.trim())}var r={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}hr(e){e=this.rules.block.hr.exec(e);if(e)return{type:"hr",raw:e[0]}}blockquote(e){var t=this.rules.block.blockquote.exec(e);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,o,i,a,s,l,c,p,u,d,h,f=t[1].trim();for(var m=1<f.length,y={type:"list",raw:"",ordered:m,start:m?+f.slice(0,-1):"",loose:!1,items:[]},g=(f=m?"\\d{1,9}\\"+f.slice(-1):"\\"+f,this.options.pedantic&&(f=m?f:"[*+-]"),new RegExp(`^( {0,3}${f})((?:[	 ][^\\n]*)?(?:\\n|$))`));e&&(h=!1,t=g.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),c=t[2].split("\n",1)[0],p=e.split("\n",1)[0],this.options.pedantic?(i=2,d=c.trimLeft()):(i=4<(i=t[2].search(/[^ ]/))?1:i,d=c.slice(i),i+=t[1].length),s=!1,!c&&/^ *$/.test(p)&&(r+=p+"\n",e=e.substring(p.length+1),h=!0),!h){let t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),n=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(u=e.split("\n",1)[0],c=u,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c))&&!n.test(e);){if(c.search(/[^ ]/)>=i||!c.trim())d+="\n"+c.slice(i);else{if(s)break;d+="\n"+c}s||c.trim()||(s=!0),r+=u+"\n",e=e.substring(u.length+1)}}y.loose||(l?y.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(d))&&(o="[ ] "!==n[0],d=d.replace(/^\[[ xX]\] +/,"")),y.items.push({type:"list_item",raw:r,task:!!n,checked:o,loose:!1,text:d}),y.raw+=r}y.items[y.items.length-1].raw=r.trimRight(),y.items[y.items.length-1].text=d.trimRight(),y.raw=y.raw.trimRight();var v=y.items.length;for(a=0;a<v;a++){this.lexer.state.top=!1,y.items[a].tokens=this.lexer.blockTokens(y.items[a].text,[]);let e=y.items[a].tokens.filter(e=>"space"===e.type),t=e.every(e=>{var t=e.raw.split("");let r=0;for(let e of t)if("\n"===e&&(r+=1),1<r)return!0;return!1});!y.loose&&e.length&&t&&(y.loose=!0,y.items[a].loose=!0)}return y}}html(e){var t=this.rules.block.html.exec(e);if(t){let e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):de(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){e=this.rules.block.def.exec(e);if(e)return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{type:"def",tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}}table(e){var t=this.rules.block.table.exec(e);if(t){let e={type:"table",header:Ee(t[1]).map(e=>({text:e})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,n,o,i,a=e.align.length;for(r=0;r<a;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(a=e.rows.length,r=0;r<a;r++)e.rows[r]=Ee(e.rows[r],e.header.length).map(e=>({text:e}));for(a=e.header.length,n=0;n<a;n++)e.header[n].tokens=[],this.lexer.inline(e.header[n].text,e.header[n].tokens);for(a=e.rows.length,n=0;n<a;n++)for(i=e.rows[n],o=0;o<i.length;o++)i[o].tokens=[],this.lexer.inline(i[o].text,i[o].tokens);return e}}}lheading(e){var t=this.rules.block.lheading.exec(e);if(t){let e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){var t=this.rules.block.paragraph.exec(e);if(t){let e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){var t=this.rules.block.text.exec(e);if(t){let e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){e=this.rules.inline.escape.exec(e);if(e)return{type:"escape",raw:e[0],text:de(e[1])}}tag(e){e=this.rules.inline.tag.exec(e);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):de(e[0]):e[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=Oe(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=((e,t)=>{if(-1!==e.indexOf(t[1])){var r=e.length;let n=0,o=0;for(;o<r;o++)if("\\"===e[o])o++;else if(e[o]===t[0])n++;else if(e[o]===t[1]&&--n<0)return o}return-1})(t[2],"()");if(-1<e){let r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),Ce(t,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:n&&n.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if(r=(r=this.rules.inline.reflink.exec(e))||this.rules.inline.nolink.exec(e)){let e=(r[2]||r[1]).replace(/\s+/g," ");if((e=t[e.toLowerCase()])&&e.href)return Ce(r,e,r[0],this.lexer);{let e=r[0].charAt(0);return{type:"text",raw:e,text:e}}}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(n&&(!n[3]||!r.match(/[\p{L}\p{N}]/u))){var o=n[1]||n[2]||"";if(!o||""===r||this.rules.inline.punctuation.exec(r)){let r=n[0].length-1,o,i,a=r,s=0;var l="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));)if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6])if(i=o.length,n[3]||n[4])a+=i;else if((n[5]||n[6])&&r%3&&!((r+i)%3))s+=i;else if(!(0<(a-=i))){if(i=Math.min(i,i+a+s),Math.min(r,i)%2){let t=e.slice(1,r+n.index+i);return{type:"em",raw:e.slice(0,r+n.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}let t=e.slice(2,r+n.index+i-1);return{type:"strong",raw:e.slice(0,r+n.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}}codespan(e){var t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");var r=/[^ ]/.test(e),n=/^ /.test(e)&&/ $/.test(e);return e=de(e=r&&n?e.substring(1,e.length-1):e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){e=this.rules.inline.br.exec(e);if(e)return{type:"br",raw:e[0]}}del(e){e=this.rules.inline.del.exec(e);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}}autolink(e,t){var r=this.rules.inline.autolink.exec(e);if(r){let e,n;return n="@"===r[2]?"mailto:"+(e=de(this.options.mangle?t(r[1]):r[1])):e=de(r[1]),{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){var r;if(r=this.rules.inline.url.exec(e)){let e,n;if("@"===r[2])e=de(this.options.mangle?t(r[0]):r[0]),n="mailto:"+e;else{let t;for(;t=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0],t!==r[0];);e=de(r[0]),n="www."===r[1]?"http://"+e:e}return{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){var r=this.rules.inline.text.exec(e);if(r){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):de(r[0]):r[0]:de(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}let Ie={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:$e,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/},Pe=(Ie.def=ye(Ie.def).replace("label",Ie._label).replace("title",Ie._title).getRegex(),Ie.bullet=/(?:[*+-]|\d{1,9}[.)])/,Ie.listItemStart=ye(/^( *)(bull) */).replace("bull",Ie.bullet).getRegex(),Ie.list=ye(Ie.list).replace(/bull/g,Ie.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Ie.def.source+")").getRegex(),Ie._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ie._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Ie.html=ye(Ie.html,"i").replace("comment",Ie._comment).replace("tag",Ie._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ie.paragraph=ye(Ie._paragraph).replace("hr",Ie.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ie._tag).getRegex(),Ie.blockquote=ye(Ie.blockquote).replace("paragraph",Ie.paragraph).getRegex(),Ie.normal=Ae({},Ie),Ie.gfm=Ae({},Ie.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Ie.gfm.table=ye(Ie.gfm.table).replace("hr",Ie.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ie._tag).getRegex(),Ie.gfm.paragraph=ye(Ie._paragraph).replace("hr",Ie.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Ie.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ie._tag).getRegex(),Ie.pedantic=Ae({},Ie.normal,{html:ye("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Ie._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$e,paragraph:ye(Ie.normal._paragraph).replace("hr",Ie.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Ie.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),{escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:$e,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:$e,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/});function Re(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Le(e){let t,r,n="";var o=e.length;for(t=0;t<o;t++)r=e.charCodeAt(t),.5<Math.random()&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}Pe._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",Pe.punctuation=ye(Pe.punctuation).replace(/punctuation/g,Pe._punctuation).getRegex(),Pe.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Pe.escapedEmSt=/\\\*|\\_/g,Pe._comment=ye(Ie._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Pe.emStrong.lDelim=ye(Pe.emStrong.lDelim).replace(/punct/g,Pe._punctuation).getRegex(),Pe.emStrong.rDelimAst=ye(Pe.emStrong.rDelimAst,"g").replace(/punct/g,Pe._punctuation).getRegex(),Pe.emStrong.rDelimUnd=ye(Pe.emStrong.rDelimUnd,"g").replace(/punct/g,Pe._punctuation).getRegex(),Pe._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Pe._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Pe._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Pe.autolink=ye(Pe.autolink).replace("scheme",Pe._scheme).replace("email",Pe._email).getRegex(),Pe._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Pe.tag=ye(Pe.tag).replace("comment",Pe._comment).replace("attribute",Pe._attribute).getRegex(),Pe._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Pe._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Pe._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Pe.link=ye(Pe.link).replace("label",Pe._label).replace("href",Pe._href).replace("title",Pe._title).getRegex(),Pe.reflink=ye(Pe.reflink).replace("label",Pe._label).replace("ref",Ie._label).getRegex(),Pe.nolink=ye(Pe.nolink).replace("ref",Ie._label).getRegex(),Pe.reflinkSearch=ye(Pe.reflinkSearch,"g").replace("reflink",Pe.reflink).replace("nolink",Pe.nolink).getRegex(),Pe.normal=Ae({},Pe),Pe.pedantic=Ae({},Pe.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",Pe._label).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Pe._label).getRegex()}),Pe.gfm=Ae({},Pe.normal,{escape:ye(Pe.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),Pe.gfm.url=ye(Pe.gfm.url,"i").replace("email",Pe.gfm._extended_email).getRegex(),Pe.breaks=Ae({},Pe.gfm,{br:ye(Pe.br).replace("{2,}","*").getRegex(),text:ye(Pe.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class De{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ie,this.options.tokenizer=this.options.tokenizer||new je,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,(this.tokenizer.lexer=this).inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};e={block:Ie.normal,inline:Pe.normal};this.options.pedantic?(e.block=Ie.pedantic,e.inline=Pe.pedantic):this.options.gfm&&(e.block=Ie.gfm,this.options.breaks?e.inline=Pe.breaks:e.inline=Pe.gfm),this.tokenizer.rules=e}static get rules(){return{block:Ie,inline:Pe}}static lex(e,t){return new De(t).lex(e)}static lexInline(e,t){return new De(t).inlineTokens(e)}lex(e){var t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let r,n,o,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,t,r)=>t+"    ".repeat(r.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&0<t.length?t[t.length-1].raw+="\n":t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),!(n=t[t.length-1])||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),!(n=t[t.length-1])||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(o=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0,r=e.slice(1),n;this.options.extensions.startBlock.forEach(function(e){"number"==typeof(n=e.call({lexer:this},r))&&0<=n&&(t=Math.min(t,n))}),t<1/0&&0<=t&&(o=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o)))n=t[t.length-1],i&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),i=o.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);else if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,n,o,i,a,s,l=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(0<e.length)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+_e("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,i.index)+"["+_e("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(s=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,l,s))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.autolink(e,Le))e=e.substring(r.raw.length),t.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(e,Le))){if(o=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0,r=e.slice(1),n;this.options.extensions.startInline.forEach(function(e){"number"==typeof(n=e.call({lexer:this},r))&&0<=n&&(t=Math.min(t,n))}),t<1/0&&0<=t&&(o=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(o,Re))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(s=r.raw.slice(-1)),a=!0,(n=t[t.length-1])&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r);return t}}class Be{constructor(e){this.options=e||ie}code(e,t,r){var n=(t||"").match(/\S*/)[0];if(this.options.highlight){let t=this.options.highlight(e,n);null!=t&&t!==e&&(r=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+de(n,!0)+'">'+(r?e:de(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:de(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,r,n){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+n.slug(r)}">${e}</h${t}>
`:`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,r){var n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return"<table>\n<thead>\n"+e+"</thead>\n"+(t=t&&`<tbody>${t}</tbody>`)+"</table>\n"}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){var r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(null===(e=be(this.options.sanitize,this.options.baseUrl,e)))return r;let n='<a href="'+de(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>"}image(e,t,r){if(null===(e=be(this.options.sanitize,this.options.baseUrl,e)))return r;let n=`<img src="${e}" alt="${r}"`;return t&&(n+=` title="${t}"`),n+=this.options.xhtml?"/>":">"}text(e){return e}}class Ne{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Me{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r))for(n=this.seen[e];n++,r=e+"-"+n,this.seen.hasOwnProperty(r););return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){e=this.serialize(e);return this.getNextSafeSlug(e,t.dryrun)}}class Fe{constructor(e){this.options=e||ie,this.options.renderer=this.options.renderer||new Be,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ne,this.slugger=new Me}static parse(e,t){return new Fe(t).parse(e)}static parseInline(e,t){return new Fe(t).parseInline(e)}parse(e,t=!0){let r,n,o,i,a,s,l,c,p,u,d,h,f,m,y,g,v,b,x,w="";var k=e.length;for(r=0;r<k;r++)if(u=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(!1!==(x=this.options.extensions.renderers[u.type].call({parser:this},u))||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))w+=x||"";else switch(u.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(u.tokens),u.depth,fe(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",i=u.header.length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(u.header[n].tokens),{header:!0,align:u.align[n]});for(c+=this.renderer.tablerow(l),p="",i=u.rows.length,n=0;n<i;n++){for(s=u.rows[n],l="",a=s.length,o=0;o<a;o++)l+=this.renderer.tablecell(this.parseInline(s[o].tokens),{header:!1,align:u.align[o]});p+=this.renderer.tablerow(l)}w+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),w+=this.renderer.blockquote(p);continue;case"list":for(d=u.ordered,h=u.start,f=u.loose,i=u.items.length,p="",n=0;n<i;n++)g=(y=u.items[n]).checked,v=y.task,m="",y.task&&(b=this.renderer.checkbox(g),f?0<y.tokens.length&&"paragraph"===y.tokens[0].type?(y.tokens[0].text=b+" "+y.tokens[0].text,y.tokens[0].tokens&&0<y.tokens[0].tokens.length&&"text"===y.tokens[0].tokens[0].type&&(y.tokens[0].tokens[0].text=b+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:b}):m+=b),m+=this.parse(y.tokens,f),p+=this.renderer.listitem(m,v,g);w+=this.renderer.list(p,d,h);continue;case"html":w+=this.renderer.html(u.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;r+1<k&&"text"===e[r+1].type;)u=e[++r],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);w+=t?this.renderer.paragraph(p):p;continue;default:{let e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let r,n,o,i="";var a=e.length;for(r=0;r<a;r++)if(n=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]&&(!1!==(o=this.options.extensions.renderers[n.type].call({parser:this},n))||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)))i+=o||"";else switch(n.type){case"escape":i+=t.text(n.text);break;case"html":i+=t.html(n.text);break;case"link":i+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":i+=t.image(n.href,n.title,n.text);break;case"strong":i+=t.strong(this.parseInline(n.tokens,t));break;case"em":i+=t.em(this.parseInline(n.tokens,t));break;case"codespan":i+=t.codespan(n.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(n.tokens,t));break;case"text":i+=t.text(n.text);break;default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}function Ue(e,t,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(r=t,t=null),Te(t=Ae({},Ue.defaults,t||{})),r){let n=t.highlight,o;try{o=De.lex(e,t)}catch(e){return r(e)}let i=function(e){let i;if(!e)try{t.walkTokens&&Ue.walkTokens(o,t.walkTokens),i=Fe.parse(o,t)}catch(t){e=t}return t.highlight=n,e?r(e):r(null,i)};if(!n||n.length<3)return i();if(delete t.highlight,!o.length)return i();let a=0;Ue.walkTokens(o,function(e){"code"===e.type&&(a++,setTimeout(()=>{n(e.text,e.lang,function(t,r){if(t)return i(t);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),0===--a&&i()})},0))}),void(0===a&&i())}else try{let r=De.lex(e,t);return t.walkTokens&&Ue.walkTokens(r,t.walkTokens),Fe.parse(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+de(e.message+"",!0)+"</pre>";throw e}}Ue.options=Ue.setOptions=function(e){return Ae(Ue.defaults,e),e=Ue.defaults,ie=e,Ue},Ue.getDefaults=function(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}},Ue.defaults=ie,Ue.use=function(...e){let t=Ae({},...e),r=Ue.defaults.extensions||{renderers:{},childTokens:{}},n;e.forEach(e=>{if(e.extensions&&(n=!0,e.extensions.forEach(e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){let t=r.renderers?r.renderers[e.name]:null;r.renderers[e.name]=t?function(...r){let n=e.renderer.apply(this,r);return n=!1===n?t.apply(this,r):n}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");r[e.level]?r[e.level].unshift(e.tokenizer):r[e.level]=[e.tokenizer],e.start&&("block"===e.level?r.startBlock?r.startBlock.push(e.start):r.startBlock=[e.start]:"inline"===e.level&&(r.startInline?r.startInline.push(e.start):r.startInline=[e.start]))}e.childTokens&&(r.childTokens[e.name]=e.childTokens)})),e.renderer){let r=Ue.defaults.renderer||new Be;for(let t in e.renderer){let n=r[t];r[t]=(...o)=>{let i=e.renderer[t].apply(r,o);return i=!1===i?n.apply(r,o):i}}t.renderer=r}if(e.tokenizer){let r=Ue.defaults.tokenizer||new je;for(let t in e.tokenizer){let n=r[t];r[t]=(...o)=>{let i=e.tokenizer[t].apply(r,o);return i=!1===i?n.apply(r,o):i}}t.tokenizer=r}if(e.walkTokens){let r=Ue.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),r&&r.call(this,t)}}n&&(t.extensions=r),Ue.setOptions(t)})},Ue.walkTokens=function(e,t){for(let r of e)switch(t.call(Ue,r),r.type){case"table":for(let e of r.header)Ue.walkTokens(e.tokens,t);for(let e of r.rows)for(let r of e)Ue.walkTokens(r.tokens,t);break;case"list":Ue.walkTokens(r.items,t);break;default:Ue.defaults.extensions&&Ue.defaults.extensions.childTokens&&Ue.defaults.extensions.childTokens[r.type]?Ue.defaults.extensions.childTokens[r.type].forEach(function(e){Ue.walkTokens(r[e],t)}):r.tokens&&Ue.walkTokens(r.tokens,t)}},Ue.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");Te(t=Ae({},Ue.defaults,t||{}));try{var r=De.lexInline(e,t);return t.walkTokens&&Ue.walkTokens(r,t.walkTokens),Fe.parseInline(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+de(e.message+"",!0)+"</pre>";throw e}},Ue.Parser=Fe,Ue.parser=Fe.parse,Ue.Renderer=Be,Ue.TextRenderer=Ne,Ue.Lexer=De,Ue.lexer=De.lex,Ue.Tokenizer=je,Ue.Slugger=Me,Ue.parse=Ue,Fe,De;var ee=r(660),qe=r.n(ee);r(251),r(358),r(46),r(503),r(277),r(874),r(366),r(57),r(16);let He=l`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 300px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 10px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`,We=l`
/* Button */
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}

select:focus,
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
textarea:active,
input[type="text"]:active,
input[type="password"]:active {
  border:1px solid var(--primary-color);
}

input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

input[type="checkbox"]:focus{
  outline:0;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  box-shadow: inset 0 0 0 13px var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}
`,Ve=l`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`,Ge=l`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`,Ye=l`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.endpoint-head .method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.endpoint-head .method.delete{ border: 2px solid var(--red);}
.endpoint-head .method.put{ border: 2px solid var(--orange); }
.endpoint-head .method.post{ border: 2px solid var(--green); }
.endpoint-head .method.get{ border: 2px solid var(--blue); }
.endpoint-head .method.get.deprecated{ border: 2px solid var(--border-color); }
.endpoint-head .method.head,
.endpoint-head .method.patch,
.endpoint-head .method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container{
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`,Ke=l`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`,Je=l`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
  min-height: 50px;
}
`,Ze=l`
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted([slot=nav-logo]){
  padding:16px 16px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-paths-under-tag {
  display:none;
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out 0s;
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transition: transform 0.2s ease-out 0s;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor:pointer;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.active,
.nav-bar-h2.active,
.nav-bar-info.active,
.nav-bar-tag.active,
.nav-bar-path.active,
.nav-bar-section.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`,Xe=l`
#api-info {
  font-size:calc(var(--font-size-regular) - 1px);margin-top:8px
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`,Qe=l`

`,et=/[\s#:?&={}]/g,tt="_rapidoc_api_key";function rt(e){return new Promise(t=>setTimeout(t,e))}function nt(e,t){let r=t.currentTarget,n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout(()=>{r.innerText="Copy"},5e3)}catch(e){console.error("Unable to copy",e)}document.body.removeChild(n)}function ot(e,t,r="includes"){return"includes"===r?(`${t.method} ${t.path} ${t.summary||t.description||""} `+(t.operationId||"")).toLowerCase().includes(e.toLowerCase()):new RegExp(e,"i").test(t.method+" "+t.path)}function at(e,t){var r;e&&(r=document.createElement("a"),document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove())}function st(e){var t;e&&(t=document.createElement("a"),document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove())}function ct(e){return e&&e.Math==Math&&e}function ut(e){try{return!!e()}catch(e){return!0}}function $t(e){return"function"==typeof e}var lt=r(764).Buffer,pt=ct("object"==typeof globalThis&&globalThis)||ct("object"==typeof window&&window)||ct("object"==typeof self&&self)||ct("object"==typeof pt&&pt)||function(){return this}()||Function("return this")(),ee=!ut(function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}),ft=Function.prototype,mt=ft.apply,yt=ft.call,ft="object"==typeof Reflect&&Reflect.apply||(ee?yt.bind(mt):function(){return yt.apply(mt,arguments)}),vt=ee,bt=Function.prototype,xt=bt.bind,wt=bt.call,kt=vt&&xt.bind(wt,wt),bt=vt?function(e){return e&&kt(e)}:function(e){return e&&function(){return wt.apply(e,arguments)}},xt={},vt=!ut(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),Tt=Function.prototype.call,_t=ee?Tt.bind(Tt):function(){return Tt.apply(Tt,arguments)},Ct={},jt={}.propertyIsEnumerable,It=Object.getOwnPropertyDescriptor,Pt=It&&!jt.call({1:2},1);Ct.f=Pt?function(e){e=It(this,e);return!!e&&e.enumerable}:jt;function Dt(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function Ft(e){return Mt(Nt(e),8,-1)}function Yt(e){if(null==e)throw Gt("Can't call method on "+e);return e}function Zt(e){return Kt(Jt(e))}function Qt(e){return"object"==typeof e?null!==e:Xt(e)}function or(e){return nr(e)?e:void 0}function ir(e,t){return arguments.length<2?or(tr[e])||or(rr[e]):tr[e]&&tr[e][t]||rr[e]&&rr[e][t]}function Er(e){try{return Ar(e)}catch(e){return"Object"}}function Cr(e){if(Or(e))return e;throw _r(Tr(e)+" is not a function")}function Ir(e,t){return null==(e=e[t])?void 0:jr(e)}function Wr(e){return Hr(qr(e))}function Qr(e){return"Symbol("+(void 0===e?"":e)+")_"+Xr(++Jr+Zr,36)}function un(e){var t;return rn(sn,e)&&(on||"string"==typeof sn[e])||(t="Symbol."+e,on&&rn(ln,e)?sn[e]=ln[e]:sn[e]=(an&&cn?cn:pn)(t)),sn[e]}function wn(e){return e=((e,t)=>{if(!hn(e)||fn(e))return e;var n=mn(e,vn);if(n){if(n=dn(n,e,t=void 0===t?"default":t),!hn(n)||fn(n))return n;throw gn("Can't convert object to primitive value")}return((e,t)=>{var r,n;if("string"===t&&Rr(r=e.toString)&&!Lr(n=Pr(r,e)))return n;if(Rr(r=e.valueOf)&&!Lr(n=Pr(r,e)))return n;if("string"!==t&&Rr(r=e.toString)&&!Lr(n=Pr(r,e)))return n;throw Dr("Can't convert object to primitive value")})(e,t=void 0===t?"number":t)})(e,"string"),xn(e)?e:e+""}function An(e){return $n?Sn.createElement(e):{}}function Fn(e,t){return(e=zn[Un(e)])==Hn||e!=qn&&(Nn(t)?Bn(t):!!t)}function Kn(e,t){return Vn(e),void 0===t?e:Gn?Yn(e,t):function(){return e.apply(t,arguments)}}function ro(e){if(Qn(e))return e;throw to(eo(e)+" is not an object")}function Ao(e){function t(r,n,o){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,o)}return yo(e,this,arguments)}return t.prototype=e.prototype,t}function Eo(e,t){var o,i,a,r,c,p=e.target,u=e.global,d=e.stat,h=e.proto,f=u?mo:d?mo[p]:(mo[p]||{}).prototype,m=u?wo:wo[p]||So(wo,p,{})[p],y=m.prototype;for(o in t)r=!xo(u?o:p+(d?".":"#")+o,e.forced)&&f&&$o(f,o),a=m[o],r&&(c=e.noTargetGet?(c=bo(f,o))&&c.value:f[o]),i=r&&c?c:t[o],r&&typeof a==typeof i||(r=e.bind&&r?ko(i,mo):e.wrap&&r?Ao(i):h&&vo(i)?go(i):i,(e.sham||i&&i.sham||a&&a.sham)&&So(r,"sham",!0),So(m,o,r),h&&($o(wo,a=p+"Prototype")||So(wo,a,{}),So(wo[a],o,i),e.real)&&y&&!y[o]&&So(y,o,i))}function _o(e){return(e=+e)!=e||0==e?0:(0<e?To:Oo)(e)}function Po(e,t){return(e=Co(e))<0?jo(e+t,0):Io(e,t)}function Do(e){return 0<e?Lo(Ro(e),9007199254740991):0}function No(e){return Bo(e.length)}function zo(e){return function(t,r,n){var o,i=Mo(t),a=Uo(i),s=Fo(n,a);if(e&&r!=r){for(;s<a;)if((o=i[s++])!=o)return!0}else for(;s<a;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}}function Jo(e,t){var r,n=Vo(e),o=0,i=[];for(r in n)!Wo(Yo,r)&&Wo(n,r)&&Ko(i,r);for(;t.length>o;)!Wo(n,r=t[o++])||~Go(i,r)||Ko(i,r);return i}function bi(e){if("Symbol"===gi(e))throw TypeError("Cannot convert a Symbol value to a string");return vi(e)}var Pt=bt,Nt=Pt({}.toString),Mt=Pt("".slice),jt=bt,Pt=ut,qt=Ft,Ht=pt.Object,Wt=jt("".split),jt=Pt(function(){return!Ht("z").propertyIsEnumerable(0)})?function(e){return"String"==qt(e)?Wt(e,""):Ht(e)}:Ht,Gt=pt.TypeError,Kt=jt,Jt=Yt,Xt=$t,Pt={},tr=Pt,rr=pt,nr=$t,ar=bt({}.isPrototypeOf),sr=ir("navigator","userAgent")||"",cr=sr,pr=pt.process,ur=pt.Deno,pr=pr&&pr.versions||ur&&ur.version,ur=pr&&pr.v8,pr=Lt=!(Lt=ur?0<(Rt=ur.split("."))[0]&&Rt[0]<4?1:+(Rt[0]+Rt[1]):Lt)&&cr&&(!(Rt=cr.match(/Edge\/(\d+)/))||74<=Rt[1])&&(Rt=cr.match(/Chrome\/(\d+)/))?+Rt[1]:Lt,mr=pr,ur=ut,cr=!!Object.getOwnPropertySymbols&&!ur(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&mr&&mr<41}),Rt=cr&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,br=ir,xr=$t,wr=ar,Sr=pt.Object,Lt=Rt?function(e){return"symbol"==typeof e}:function(e){var t=br("Symbol");return xr(t)&&wr(t.prototype,Sr(e))},Ar=pt.String,Or=$t,Tr=Er,_r=pt.TypeError,jr=Cr,Pr=_t,Rr=$t,Lr=Qt,Dr=pt.TypeError,ur={exports:{}},Nr=pt,Mr=Object.defineProperty,Fr="__core-js_shared__",Fr=pt[Fr]||((e,t)=>{try{Mr(Nr,e,{value:t,configurable:!0,writable:!0})}catch(r){Nr[e]=t}return t})(Fr,{}),zr=Fr,qr=((ur.exports=function(e,t){return zr[e]||(zr[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:"pure",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"}),Yt),Hr=pt.Object,Vr=Wr,Gr=bt({}.hasOwnProperty),Yr=Object.hasOwn||function(e,t){return Gr(Vr(e),t)},Kr=bt,Jr=0,Zr=Math.random(),Xr=Kr(1..toString),Kr=pt,rn=Yr,nn=Qr,on=cr,an=Rt,sn=(0,ur.exports)("wks"),ln=Kr.Symbol,cn=ln&&ln.for,pn=an?ln:ln&&ln.withoutSetter||nn,dn=_t,hn=Qt,fn=Lt,mn=Ir,Rt=un,gn=pt.TypeError,vn=Rt("toPrimitive"),xn=Lt,Kr=Qt,Sn=pt.document,$n=Kr(Sn)&&Kr(Sn.createElement),En=An,nn=!vt&&!ut(function(){return 7!=Object.defineProperty(En("div"),"a",{get:function(){return 7}}).a}),_n=_t,Cn=Ct,jn=Dt,In=Zt,Pn=wn,Rn=Yr,Ln=nn,Dn=Object.getOwnPropertyDescriptor,Bn=(xt.f=vt?Dn:function(e,t){if(e=In(e),t=Pn(t),Ln)try{return Dn(e,t)}catch(e){}if(Rn(e,t))return jn(!_n(Cn.f,e,t),e[t])},ut),Nn=$t,Mn=/#|\.prototype\./,Un=Fn.normalize=function(e){return String(e).replace(Mn,".").toLowerCase()},zn=Fn.data={},qn=Fn.NATIVE="N",Hn=Fn.POLYFILL="P",Rt=Fn,Vn=Cr,Gn=ee,Yn=bt(bt.bind),Kr={},ee=vt&&ut(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),Qn=Qt,eo=pt.String,to=pt.TypeError,oo=nn,ao=ro,so=wn,lo=pt.TypeError,co=Object.defineProperty,po=Object.getOwnPropertyDescriptor,uo=(Kr.f=vt?ee?function(e,t,r){var n;return ao(e),t=so(t),ao(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable&&(n=po(e,t))&&n.writable&&(e[t]=r.value,r={configurable:("configurable"in r?r:n).configurable,enumerable:("enumerable"in r?r:n).enumerable,writable:!1}),co(e,t,r)}:co:function(e,t,r){if(ao(e),t=so(t),ao(r),oo)try{return co(e,t,r)}catch(e){}if("get"in r||"set"in r)throw lo("Accessors not supported");return"value"in r&&(e[t]=r.value),e},Kr),ho=Dt,nn=vt?function(e,t,r){return uo.f(e,t,ho(1,r))}:function(e,t,r){return e[t]=r,e},mo=pt,yo=ft,go=bt,vo=$t,bo=xt.f,xo=Rt,wo=Pt,ko=Kn,So=nn,$o=Yr,Oo=Math.ceil,To=Math.floor,Co=_o,jo=Math.max,Io=Math.min,Ro=_o,Lo=Math.min,Bo=Do,Mo=Zt,Fo=Po,Uo=No,qo={includes:zo(!0),indexOf:zo(!1)},Ho={},Wo=Yr,Vo=Zt,Go=qo.indexOf,Yo=Ho,Ko=bt([].push),Zo=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Xo=Jo,Qo=Zo,ei=Object.keys||function(e){return Xo(e,Qo)},ti=Wr,ri=ei,ni=(Eo({target:"Object",stat:!0,forced:ut(function(){ri(1)})},{keys:function(e){return ri(ti(e))}}),Pt.Object.keys),oi=ni,ii=Ft,ai=Array.isArray||function(e){return"Array"==ii(e)},si={},si=(si[un("toStringTag")]="z","[object z]"===String(si)),ci=pt,pi=si,ui=$t,di=Ft,hi=un("toStringTag"),fi=ci.Object,mi="Arguments"==di(function(){return arguments}()),ci=pi?di:function(e){var r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=((e,t)=>{try{return e[t]}catch(e){}})(e=fi(e),hi))?r:mi?di(e):"Object"==(r=di(e))&&ui(e.callee)?"Arguments":r},gi=ci,vi=pt.String,pi={},Si=Kr,$i=ro,Ai=Zt,Ei=ei;pi.f=vt&&!ee?Object.defineProperties:function(e,t){$i(e);for(var r,n=Ai(t),o=Ei(t),i=o.length,a=0;a<i;)Si.f(e,r=o[a++],n[r]);return e};function Ii(e){return ji[e]||(ji[e]=Ci(e))}function Fi(){}function zi(e){e.write(Ui("")),e.close();var t=e.parentWindow.Object;return e=null,t}function Xi(e,t,r){(t=Ki(t))in e?Ji.f(e,t,Zi(0,r)):e[t]=r}function oa(e,t,r){for(var n=ea(e),o=Qi(t,n),i=Qi(void 0===r?n:r,n),a=ra(na(i-o,0)),s=0;o<i;o++,s++)ta(a,s,e[o]);return a.length=s,a}function ha(e,t,r,n){n&&n.enumerable?e[t]=r:da(e,t,r)}function xa(e){var t=ya.Symbol||(ya.Symbol={});ga(t,e)||ba(t,e,{value:va.f(e)})}function _a(e,t,r,n){e&&(r=r?e:e.prototype,Ea(r,Ta)||$a(r,Ta,{configurable:!0,value:t}),n)&&!Sa&&Aa(r,"toString",Oa)}var Oi,ee=ir("document","documentElement"),Ci=Qr,ji=(0,ur.exports)("keys"),Pi=ro,Ri=pi,Li=Zo,Di=Ho,Bi=ee,Ni=An,Mi=Ii("IE_PROTO"),Ui=function(e){return"<script>"+e+"<\/script>"},qi=function(){try{Oi=new ActiveXObject("htmlfile")}catch(e){}var e,t;qi="undefined"==typeof document||document.domain&&Oi?zi(Oi):((t=Ni("iframe")).style.display="none",Bi.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ui("document.F=Object")),e.close(),e.F);for(var r=Li.length;r--;)delete qi.prototype[Li[r]];return qi()},Di=(Di[Mi]=!0,Object.create||function(e,t){var r;return null!==e?(Fi.prototype=Pi(e),r=new Fi,Fi.prototype=null,r[Mi]=e):r=qi(),void 0===t?r:Ri.f(r,t)}),Wi={},Vi=Jo,Gi=Zo.concat("length","prototype"),Zo=(Wi.f=Object.getOwnPropertyNames||function(e){return Vi(e,Gi)},{}),Ki=wn,Ji=Kr,Zi=Dt,Qi=Po,ea=No,ta=Xi,ra=pt.Array,na=Math.max,ia=Ft,aa=Zt,sa=Wi.f,la=oa,ca="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],pa=(Zo.f=function(e){return ca&&"Window"==ia(e)?(e=>{try{return sa(e)}catch(e){return la(ca)}})(e):sa(aa(e))},{}),ua=(pa.f=Object.getOwnPropertySymbols,bt([].slice)),da=nn,fa={},ya=(fa.f=un,Pt),ga=Yr,va=fa,ba=Kr.f,wa=ci,Sa=si,$a=Kr.f,Aa=nn,Ea=Yr,Oa=si?{}.toString:function(){return"[object "+wa(this)+"]"},Ta=un("toStringTag"),si=$t,ja=Fr,Ia=bt(Function.toString);si(ja.inspectSource)||(ja.inspectSource=function(e){return Ia(e)});function ps(){}function ys(e){if(!ss(e))return!1;try{return ds(ps,us,e),!0}catch(e){return!1}}function gs(e){if(!ss(e))return!1;switch(ls(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ms||!!fs(hs,cs(e))}catch(e){return!0}}function As(e,t){return new((e=>{var t;return void 0===(t=xs(e)&&(t=e.constructor,ws(t)&&(t===$s||xs(t.prototype))||ks(t)&&null===(t=t[Ss]))?void 0:t)?$s:t})(e))(0===t?0:t)}function Is(e){var t=1==e,r=2==e,n=3==e,o=4==e,i=6==e,a=7==e,s=5==e||i;return function(l,c,p,u){for(var d,h,f=Ts(l),m=Os(f),y=Es(c,p),g=_s(m),v=0,c=u||Cs,x=t?c(l,g):r||a?c(l,0):void 0;v<g;v++)if((s||v in m)&&(h=y(d=m[v],v,f),e))if(t)x[v]=h;else if(h)switch(e){case 3:return!0;case 5:return d;case 6:return v;case 2:js(x,d)}else switch(e){case 4:return!1;case 7:js(x,d)}return i?-1:n||o?o:x}}function Hl(e,t){var r=Bl[e]=tl(Tl);return $l(r,{type:kl,tag:e,description:t}),Fs||(r.description=t),r}function Wl(e,t,r){return e===El&&Wl(Nl,t,r),Ks(e),t=Xs(t),Ks(r),(qs(Bl,t)?(r.enumerable?(qs(e,wl)&&e[wl][t]&&(e[wl][t]=!1),r=tl(r,{enumerable:el(0,!1)})):(qs(e,wl)||Pl(e,wl,el(1,{})),e[wl][t]=!0),ql):Pl)(e,t,r)}function Vl(e,t){Ks(e);var r=Zs(t),t=rl(r).concat(Jl(r));return xl(t,function(t){Fs&&!Ns(Gl,r,t)||Wl(e,t,r[t])}),e}function Gl(e){var e=Xs(e),r=Ns(Ll,this,e);return!(this===El&&qs(Bl,e)&&!qs(Nl,e))&&(!(r||!qs(this,e)||!qs(Bl,e)||qs(this,wl)&&this[wl][e])||r)}function Yl(e,t){var o,e=Zs(e),t=Xs(t);if(e!==El||!qs(Bl,t)||qs(Nl,t))return!(o=Il(e,t))||!qs(Bl,t)||qs(e,wl)&&e[wl][t]||(o.enumerable=!0),o}function Kl(e){var e=Rl(Zs(e)),r=[];return xl(e,function(e){qs(Bl,e)||qs(hl,e)||Dl(r,e)}),r}function Jl(e){var t=e===El,e=Rl(t?Nl:Zs(e)),n=[];return xl(e,function(e){!qs(Bl,e)||t&&!qs(El,e)||Dl(n,Bl[e])}),n}function rc(e){return 51<=ec||!Ql(function(){var t=[];return(t.constructor={})[tc]=function(){return{foo:1}},1!==t[e](Boolean).foo})}function ic(e){return oc[e+"Prototype"]}function pc(e){var t=e.filter;return e===cc||sc(cc,e)&&t===cc.filter?lc:t}var Qa,es,ts,rs,Pa,Ra,La,ns,Zl,si=ja.inspectSource,ja=$t,Na=si,Ma=pt.WeakMap,ja=ja(Ma)&&/native code/.test(Na(Ma)),Na=bt,Ha=Qt,Wa=nn,Va=Yr,Ma=Fr,Fr=Ii,Ka=Ho,Ja="Object already initialized",Za=pt.TypeError,Xa=pt.WeakMap,Ma=(La=ja||Ma.state?(Qa=Ma.state||(Ma.state=new Xa),es=Na(Qa.get),ts=Na(Qa.has),rs=Na(Qa.set),Pa=function(e,t){if(ts(Qa,e))throw new Za(Ja);return t.facade=e,rs(Qa,e,t),t},Ra=function(e){return es(Qa,e)||{}},function(e){return ts(Qa,e)}):(Ka[ns=Fr("state")]=!0,Pa=function(e,t){if(Va(e,ns))throw new Za(Ja);return t.facade=e,Wa(e,ns,t),t},Ra=function(e){return Va(e,ns)?e[ns]:{}},function(e){return Va(e,ns)}),{set:Pa,get:Ra,has:La,enforce:function(e){return La(e)?Ra(e):Pa(e,{})},getterFor:function(e){return function(t){if(Ha(t)&&(t=Ra(t)).type===e)return t;throw Za("Incompatible receiver, "+e+" required")}}}),Xa=bt,Na=ut,ss=$t,ls=ci,cs=si,us=[],ds=ir("Reflect","construct"),hs=/^\s*(?:class|function)\b/,fs=Xa(hs.exec),ms=!hs.exec(ps),Ka=(gs.sham=!0,!ds||Na(function(){var e;return ys(ys.call)||!ys(Object)||!ys(function(){e=!0})||e})?gs:ys),Fr=pt,xs=ai,ws=Ka,ks=Qt,Ss=un("species"),$s=Fr.Array,Es=Kn,Os=jt,Ts=Wr,_s=No,Cs=As,js=bt([].push),Xa={forEach:Is(0),map:Is(1),filter:Is(2),some:Is(3),every:Is(4),find:Is(5),findIndex:Is(6),filterReject:Is(7)},Na=Eo,Fr=pt,Ds=ir,Bs=ft,Ns=_t,Ms=bt,Fs=vt,zs=ut,qs=Yr,Hs=ai,Ws=$t,Vs=Qt,Gs=ar,Ys=Lt,Ks=ro,Js=Wr,Zs=Zt,Xs=wn,Qs=bi,el=Dt,tl=Di,rl=ei,Lt=Wi,ol=Zo,il=pa,al=xt,sl=Kr,ll=pi,cl=Ct,pl=ua,ul=ha,ur=ur.exports,hl=Ho,fl=Qr,ml=un,yl=fa,gl=xa,vl=_a,bl=Ma,xl=Xa.forEach,wl=Ii("hidden"),kl="Symbol",Sl=ml("toPrimitive"),$l=bl.set,Al=bl.getterFor(kl),El=Object.prototype,Ol=Fr.Symbol,Tl=Ol&&Ol.prototype,_l=Fr.TypeError,bl=Fr.QObject,jl=Ds("JSON","stringify"),Il=al.f,Pl=sl.f,Rl=ol.f,Ll=cl.f,Dl=Ms([].push),Bl=ur("symbols"),Nl=ur("op-symbols"),Ml=ur("string-to-symbol-registry"),Fl=ur("symbol-to-string-registry"),Fr=ur("wks"),zl=!bl||!bl.prototype||!bl.prototype.findChild,ql=Fs&&zs(function(){return 7!=tl(Pl({},"a",{get:function(){return Pl(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=Il(El,t);n&&delete El[t],Pl(e,t,r),n&&e!==El&&Pl(El,t,n)}:Pl,Xl=(cr||(ul(Tl=(Ol=function(){if(Gs(Tl,this))throw _l("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?Qs(arguments[0]):void 0,t=fl(e),r=function(e){this===El&&Ns(r,Nl,e),qs(this,wl)&&qs(this[wl],t)&&(this[wl][t]=!1),ql(this,t,el(1,e))};return Fs&&zl&&ql(El,t,{configurable:!0,set:r}),Hl(t,e)}).prototype,"toString",function(){return Al(this).tag}),ul(Ol,"withoutSetter",function(e){return Hl(fl(e),e)}),cl.f=Gl,sl.f=Wl,ll.f=Vl,al.f=Yl,Lt.f=ol.f=Kl,il.f=Jl,yl.f=function(e){return Hl(ml(e),e)},Fs&&Pl(Tl,"description",{configurable:!0,get:function(){return Al(this).description}})),Na({global:!0,wrap:!0,forced:!cr,sham:!cr},{Symbol:Ol}),xl(rl(Fr),function(e){gl(e)}),Na({target:kl,stat:!0,forced:!cr},{for:function(e){var r,e=Qs(e);return qs(Ml,e)?Ml[e]:(r=Ol(e),Ml[e]=r,Fl[r]=e,r)},keyFor:function(e){if(!Ys(e))throw _l(e+" is not a symbol");if(qs(Fl,e))return Fl[e]},useSetter:function(){zl=!0},useSimple:function(){zl=!1}}),Na({target:"Object",stat:!0,forced:!cr,sham:!Fs},{create:function(e,t){return void 0===t?tl(e):Vl(tl(e),t)},defineProperty:Wl,defineProperties:Vl,getOwnPropertyDescriptor:Yl}),Na({target:"Object",stat:!0,forced:!cr},{getOwnPropertyNames:Kl,getOwnPropertySymbols:Jl}),Na({target:"Object",stat:!0,forced:zs(function(){il.f(1)})},{getOwnPropertySymbols:function(e){return il.f(Js(e))}}),jl&&Na({target:"JSON",stat:!0,forced:!cr||zs(function(){var e=Ol();return"[null]"!=jl([e])||"{}"!=jl({a:e})||"{}"!=jl(Object(e))})},{stringify:function(e,t,r){var n=pl(arguments),o=t;if((Vs(t)||void 0!==e)&&!Ys(e))return Hs(t)||(t=function(e,t){if(Ws(o)&&(t=Ns(o,this,e,t)),!Ys(t))return t}),n[1]=t,Bs(jl,null,n)}}),Tl[Sl]||(Zl=Tl.valueOf,ul(Tl,Sl,function(e){return Ns(Zl,this)})),vl(Ol,kl),hl[wl]=!0,Pt.Object.getOwnPropertySymbols),Ql=ut,ec=pr,tc=un("species"),nc=Xa.filter,oc=(Eo({target:"Array",proto:!0,forced:!rc("filter")},{filter:function(e){return nc(this,e,1<arguments.length?arguments[1]:void 0)}}),Pt),Ds=ic("Array").filter,sc=ar,lc=Ds,cc=Array.prototype,uc=pc,Ms={exports:{}},ur=Eo,bl=ut,mc=Zt,yc=xt.f,cl=vt,sl=bl(function(){yc(1)}),bc=(ur({target:"Object",stat:!0,forced:!cl||sl,sham:!cl},{getOwnPropertyDescriptor:function(e,t){return yc(mc(e),t)}}),Pt.Object),ll=Ms.exports=function(e,t){return bc.getOwnPropertyDescriptor(e,t)};bc.getOwnPropertyDescriptor.sham&&(ll.sham=!0);var wc,$c=Ms.exports,al={},Lt=vt,ol=Yr,yl=Function.prototype,Fr=Lt&&Object.getOwnPropertyDescriptor,Na=ol(yl,"name"),cr={EXISTS:Na,PROPER:Na&&"something"===function(){}.name,CONFIGURABLE:Na&&(!Lt||Fr(yl,"name").configurable)},zs=!ut(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),ul=pt,Rc=Yr,Lc=$t,Dc=Wr,Sl=zs,Nc=Ii("IE_PROTO"),Mc=ul.Object,Fc=Mc.prototype,vl=Sl?Mc.getPrototypeOf:function(e){var r,e=Dc(e);return Rc(e,Nc)?e[Nc]:(r=e.constructor,Lc(r)&&e instanceof r?r.prototype:e instanceof Mc?Fc:null)},Ds=ut,bl=$t,ur=Di,sl=vl,cl=ha,Gc=un("iterator"),ll=!1;[].keys&&("next"in(Ms=[].keys())?(ol=sl(sl(Ms)))!==Object.prototype&&(wc=ol):ll=!0);function rp(){return this}function np(e,t,r,n){return t+=" Iterator",e.prototype=Xc(Zc,{next:Qc(+!n,r)}),ep(e,t,!1,!0),tp[t]=rp,e}function Sp(){return this}function $p(e,t,r,n,o,i,a){function p(e){if(e===o&&m)return m;if(!bp&&e in h)return h[e];switch(e){case"keys":case wp:case kp:return function(){return new r(this,e)}}return function(){return new r(this)}}hp(r,t,n);var l,c,n=t+" Iterator",d=!1,h=e.prototype,f=h[xp]||h["@@iterator"]||o&&h[o],m=!bp&&f||p(o),y="Array"==t&&h.entries||f;if(y&&(y=fp(y.call(new e)))!==Object.prototype&&y.next&&(mp(y,n,!0,!0),gp[n]=Sp),vp&&o==wp&&f&&f.name!==wp&&(d=!0,m=function(){return dp(f,this)}),o)if(l={values:p(wp),keys:i?m:p("keys"),entries:p(kp)},a)for(c in l)!bp&&!d&&c in h||yp(h,c,l[c]);else up({target:t,proto:!0,forced:bp||d},l);return a&&h[xp]!==m&&yp(h,xp,m,{name:o}),gp[t]=m,l}bl((wc=null==wc||Ds(function(){var e={};return wc[Gc].call(e)!==e})?{}:ur(wc))[Gc])||cl(wc,Gc,function(){return this});var Bp,Na={IteratorPrototype:wc,BUGGY_SAFARI_ITERATORS:ll},Zc=Na.IteratorPrototype,Xc=Di,Qc=Dt,ep=_a,tp=al,ip=$t,ap=pt.String,sp=pt.TypeError,lp=bt,cp=ro,Lt=Object.setPrototypeOf||("__proto__"in{}?(()=>{var e,t=!1,r={};try{(e=lp(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return cp(r),(e=>{if("object"!=typeof e&&!ip(e))throw sp("Can't set "+ap(e)+" as a prototype")})(n),t?e(r,n):r.__proto__=n,r}})():void 0),up=Eo,dp=_t,hp=np,fp=vl,mp=_a,yp=ha,gp=al,vp=cr.PROPER,bp=Na.BUGGY_SAFARI_ITERATORS,xp=un("iterator"),wp="values",kp="entries",Ap=Zt,Fr=al,yl=Ma,zs=$p,_p="Array Iterator",Cp=yl.set,jp=yl.getterFor(_p),Ip=(zs(Array,"Array",function(e,t){Cp(this,{type:_p,target:Ap(e),index:0,kind:t})},function(){var e=jp(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?{value:e.target=void 0,done:!0}:"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}},"values"),Fr.Arguments=Fr.Array,pt),Pp=ci,Rp=nn,Lp=al,Dp=un("toStringTag");for(Bp in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Np=Ip[Bp],Np=Np&&Np.prototype;Np&&Pp(Np)!==Dp&&Rp(Np,Dp,Bp),Lp[Bp]=Lp.Array}function Up(e,t){var r=[][e];return!!r&&Fp(function(){r.call(null,t||function(){return 1},1)})}function Zp(e){var t=e.forEach;return e===Kp||Gp(Kp,e)&&t===Kp.forEach||Vp(Jp,Wp(e))?Yp:t}var Fp=ut,zp=Xa.forEach,ul=Up("forEach")?[].forEach:function(e){return zp(this,e,1<arguments.length?arguments[1]:void 0)},Sl=(Eo({target:"Array",proto:!0,forced:[].forEach!=ul},{forEach:ul}),ic("Array").forEach),Wp=ci,Vp=Yr,Gp=ar,Yp=Sl,Kp=Array.prototype,Jp={DOMTokenList:!0,NodeList:!0},sl=ir,Qp=Wi,eu=pa,tu=ro,ru=bt([].concat),Ms=sl("Reflect","ownKeys")||function(e){var t=Qp.f(tu(e)),r=eu.f;return r?ru(t,r(e)):t},ou=Ms,iu=Zt,au=xt,su=Xi,lu=(Eo({target:"Object",stat:!0,sham:!vt},{getOwnPropertyDescriptors:function(e){for(var t,r,n=iu(e),o=au.f,i=ou(n),a={},s=0;i.length>s;)void 0!==(r=o(n,t=i[s++]))&&su(a,t,r);return a}}),Pt.Object.getOwnPropertyDescriptors),ol={exports:{}},bl=Eo,Ds=pi.f,hu=(bl({target:"Object",stat:!0,forced:Object.defineProperties!==Ds,sham:!vt},{defineProperties:Ds}),Pt.Object),ur=ol.exports=function(e,t){return hu.defineProperties(e,t)},mu=(hu.defineProperties.sham&&(ur.sham=!0),ol.exports),cl={exports:{}},ll=Eo,cr=Kr.f,xu=(ll({target:"Object",stat:!0,forced:Object.defineProperty!==cr,sham:!vt},{defineProperty:cr}),Pt.Object),Na=cl.exports=function(e,t,r){return xu.defineProperty(e,t,r)},ku=(xu.defineProperty.sham&&(Na.sham=!0),cl.exports);function $u(e,t){var n,r=oi(e);return Xl&&(n=Xl(e),t&&(n=uc(n).call(n,function(t){return $c(e,t).enumerable})),r.push.apply(r,n)),r}function Au(e){for(var t=1;t<arguments.length;t++){var r,o=null!=arguments[t]?arguments[t]:{};t%2?Zp(r=$u(Object(o),!0)).call(r,function(t){((e,t,r)=>{t in e?ku(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})(e,t,o[t])}):lu?mu(e,lu(o)):Zp(r=$u(Object(o))).call(r,function(t){ku(e,t,$c(o,t))})}return e}function Hu(e){if((e=>{var t;return Fu(e)&&(void 0!==(t=e[zu])?t:"RegExp"==Uu(e))})(e))throw qu("The method doesn't accept regular expressions");return e}function Vu(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[Wu]=!1,"/./"[e](t)}catch(e){}}return!1}var Eu=vt,yl=bt,Tu=_t,zs=ut,Cu=ei,ju=pa,Iu=Ct,Pu=Wr,Ru=jt,Lu=Object.assign,Du=Object.defineProperty,Bu=yl([].concat),Fr=!Lu||zs(function(){var e,t,r,n;return Eu&&1!==Lu({b:1},Lu(Du({},"a",{enumerable:!0,get:function(){Du(this,"b",{value:3,enumerable:!1})}}),{b:2})).b||(t={},n="abcdefghijklmnopqrst",(e={})[r=Symbol()]=7,n.split("").forEach(function(e){t[e]=e}),7!=Lu({},e)[r])||Cu(Lu({},t)).join("")!=n})?function(e,t){for(var r=Pu(e),n=arguments.length,o=1,i=ju.f,a=Iu.f;o<n;)for(var s,l=Ru(arguments[o++]),c=i?Bu(Cu(l),i(l)):Cu(l),p=c.length,u=0;u<p;)s=c[u++],Eu&&!Tu(a,l,s)||(r[s]=l[s]);return r}:Lu,Mu=(Eo({target:"Object",stat:!0,forced:Object.assign!==Fr},{assign:Fr}),Pt.Object.assign),Fu=Qt,Uu=Ft,zu=un("match"),qu=pt.TypeError,Wu=un("match"),ul=Eo,Sl=bt,Ku=Do,Ju=bi,Zu=Hu,Xu=Yt,sl=Vu,ed=Sl("".startsWith),td=Sl("".slice),rd=Math.min,pi=(ul({target:"String",proto:!0,forced:!sl("startsWith")},{startsWith:function(e){var t=Ju(Xu(this)),r=(Zu(e),Ku(rd(1<arguments.length?arguments[1]:void 0,t.length))),e=Ju(e);return ed?ed(t,e,r):td(t,r,r+e.length)===e}}),ic("String").startsWith),od=ar,id=pi,ad=String.prototype,sd=function(e){var t=e.startsWith;return"string"==typeof e||e===ad||od(ad,e)&&t===ad.startsWith?id:t},ld={},bl={exports:{}},Ds=(!function(e,t){var n=this,o=t&&!t.nodeType&&t,t=!e.nodeType&&e,a="object"==typeof r.g&&r.g;a.global!==a&&a.window!==a&&a.self!==a||(n=a);var s,l,c=2147483647,p=36,u=/^xn--/,d=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,y=String.fromCharCode;function g(e){throw RangeError(f[e])}function v(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function b(e,t){var r=e.split("@"),n="";return 1<r.length&&(n=r[0]+"@",e=r[1]),n+v((e=e.replace(h,".")).split("."),t).join(".")}function x(e){for(var t,r,n=[],o=0,i=e.length;o<i;)55296<=(t=e.charCodeAt(o++))&&t<=56319&&o<i?56320==(64512&(r=e.charCodeAt(o++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--):n.push(t);return n}function w(e){return v(e,function(e){var t="";return 65535<e&&(t+=y((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+y(e)}).join("")}function k(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function S(e,t,r){var n=0;for(e=r?m(e/700):e>>1,e+=m(e/t);455<e;n+=p)e=m(e/35);return m(n+36*e/(e+38))}function $(e){var t,r,n,o,i,a,s,h,f=[],y=e.length,v=0,b=128,x=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)128<=e.charCodeAt(n)&&g("not-basic"),f.push(e.charCodeAt(n));for(o=0<r?r+1:0;o<y;){for(i=v,a=1,s=p;y<=o&&g("invalid-input"),((h=(h=e.charCodeAt(o++))-48<10?h-22:h-65<26?h-65:h-97<26?h-97:p)>=p||h>m((c-v)/a))&&g("overflow"),v+=h*a,!(h<(h=s<=x?1:x+26<=s?26:s-x));s+=p)a>m(c/(h=p-h))&&g("overflow"),a*=h;x=S(v-i,t=f.length+1,0==i),m(v/t)>c-b&&g("overflow"),b+=m(v/t),v%=t,f.splice(v++,0,b)}return w(f)}function A(e){for(var n,o,s,l,u,h,v,d,w,$=[],f=(e=x(e)).length,t=128,r=0,i=72,a=0;a<f;++a)(h=e[a])<128&&$.push(y(h));for(n=o=$.length,o&&$.push("-");n<f;){for(s=c,a=0;a<f;++a)(h=e[a])>=t&&h<s&&(s=h);for(s-t>m((c-r)/(v=n+1))&&g("overflow"),r+=(s-t)*v,t=s,a=0;a<f;++a)if((h=e[a])<t&&++r>c&&g("overflow"),h==t){for(l=r,u=p;!(l<(d=u<=i?1:i+26<=u?26:u-i));u+=p)$.push(y(k(d+(w=l-d)%(d=p-d),0))),l=m(w/d);$.push(y(k(l,0))),i=S(r,v,n==o),r=0,++n}++r,++t}return $.join("")}if(s={version:"1.3.2",ucs2:{decode:x,encode:w},decode:$,encode:A,toASCII:function(e){return b(e,function(e){return d.test(e)?"xn--"+A(e):e})},toUnicode:function(e){return b(e,function(e){return u.test(e)?$(e.slice(4).toLowerCase()):e})}},o&&t)if(e.exports==o)t.exports=s;else for(l in s)s.hasOwnProperty(l)&&(o[l]=s[l]);else n.punycode=s}(bl,bl.exports),{});function dd(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}}function fd(e){return"string"==typeof e}function md(e){return"object"==typeof e&&null!==e}function yd(e){return null===e}Ds.decode=Ds.parse=function(e,t,r,n){t=t||"&",r=r||"=";var o={};if("string"==typeof e&&0!==e.length){var i=/\+/g,t=(e=e.split(t),1e3),s=(n&&"number"==typeof n.maxKeys&&(t=n.maxKeys),e.length);0<t&&t<s&&(s=t);for(var l=0;l<s;++l){var c,h=e[l].replace(i,"%20"),f=h.indexOf(r),f=0<=f?(c=h.substr(0,f),h.substr(f+1)):(c=h,""),h=decodeURIComponent(c),f=decodeURIComponent(f);((e,t)=>Object.prototype.hasOwnProperty.call(e,t))(o,h)?Array.isArray(o[h])?o[h].push(f):o[h]=[o[h],f]:o[h]=f}}return o},Ds.encode=Ds.stringify=function(e,t,r,n){return t=t||"&",r=r||"=","object"==typeof(e=null===e?void 0:e)?Object.keys(e).map(function(n){var o=encodeURIComponent(dd(n))+r;return Array.isArray(e[n])?e[n].map(function(e){return o+encodeURIComponent(dd(e))}).join(t):o+encodeURIComponent(dd(e[n]))}).join(t):n?encodeURIComponent(dd(n))+r+encodeURIComponent(dd(e)):""};var hd=bl.exports;function vd(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}ld.parse=Id,ld.resolve=function(e,t){return Id(e,!1,!0).resolve(t)},ld.resolveObject=function(e,t){return e?Id(e,!1,!0).resolveObject(t):t},ld.format=function(e){return(e=fd(e)?Id(e):e)instanceof vd?e.format():vd.prototype.format.call(e)},ld.Url=vd;var bd=/^([a-z0-9.+-]+:)/i,xd=/:[0-9]*$/,wd=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ur=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),Sd=["'"].concat(ur),$d=["%","/","?",";","#"].concat(Sd),Ad=["/","?","#"],Ed=/^[+a-z0-9A-Z_-]{0,63}$/,Od=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Td={javascript:!0,"javascript:":!0},_d={javascript:!0,"javascript:":!0},Cd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},jd=Ds;function Id(e,t,r){var n;return e&&md(e)&&e instanceof vd?e:((n=new vd).parse(e,t,r),n)}vd.prototype.parse=function(e,t,r){if(!fd(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),n=-1!==n&&n<e.indexOf("#")?"?":"#",i=e.split(n);i[0]=i[0].replace(/\\/g,"/");var a=(a=e=i.join(n)).trim();if(!r&&1===e.split("#").length){i=wd.exec(a);if(i)return this.path=a,this.href=a,this.pathname=i[1],i[2]?(this.search=i[2],this.query=t?jd.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var c,n=bd.exec(a);if(n&&(c=(n=n[0]).toLowerCase(),this.protocol=c,a=a.substr(n.length)),!(r||n||a.match(/^\/\/[^@\/]+@[^@\/]+/))||!(p="//"===a.substr(0,2))||n&&_d[n]||(a=a.substr(2),this.slashes=!0),!_d[n]&&(p||n&&!Cd[n])){for(var m,h=-1,f=0;f<Ad.length;f++)-1!==(m=a.indexOf(Ad[f]))&&(-1===h||m<h)&&(h=m);for(-1!==(e=-1===h?a.lastIndexOf("@"):a.lastIndexOf("@",h))&&(i=a.slice(0,e),a=a.slice(e+1),this.auth=decodeURIComponent(i)),h=-1,f=0;f<$d.length;f++)-1!==(m=a.indexOf($d[f]))&&(-1===h||m<h)&&(h=m);-1===h&&(h=a.length),this.host=a.slice(0,h),a=a.slice(h),this.parseHost(),this.hostname=this.hostname||"";r="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!r)for(var g=this.hostname.split(/\./),v=(f=0,g.length);f<v;f++){var b=g[f];if(b&&!b.match(Ed)){for(var x="",w=0,k=b.length;w<k;w++)127<b.charCodeAt(w)?x+="x":x+=b[w];if(!x.match(Ed)){var S=g.slice(0,f),$=g.slice(f+1),A=b.match(Od);A&&(S.push(A[1]),$.unshift(A[2])),$.length&&(a="/"+$.join(".")+a),this.hostname=S.join(".");break}}}255<this.hostname.length?this.hostname="":this.hostname=this.hostname.toLowerCase(),r||(this.hostname=hd.toASCII(this.hostname));var E=this.port?":"+this.port:"",p=this.hostname||"";this.host=p+E,this.href+=this.host,r&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0])&&(a="/"+a)}if(!Td[c])for(f=0,v=Sd.length;f<v;f++){var _,T=Sd[f];-1!==a.indexOf(T)&&((_=encodeURIComponent(T))===T&&(_=escape(T)),a=a.split(T).join(_))}n=a.indexOf("#"),-1!==n&&(this.hash=a.substr(n),a=a.slice(0,n)),e=a.indexOf("?");return-1!==e?(this.search=a.substr(e),this.query=a.substr(e+1),t&&(this.query=jd.parse(this.query)),a=a.slice(0,e)):t&&(this.search="",this.query={}),a&&(this.pathname=a),Cd[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),(this.pathname||this.search)&&(E=this.pathname||"",i=this.search||"",this.path=E+i),this.href=this.format(),this},vd.prototype.format=function(){var e=this.auth||"",t=(e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@"),this.protocol||""),r=this.pathname||"",n=this.hash||"",o=!1,i="",e=(this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port)&&(o+=":"+this.port),this.query&&md(this.query)&&Object.keys(this.query).length&&(i=jd.stringify(this.query)),this.search||i&&"?"+i||"");return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||Cd[t])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o=o||"",n&&"#"!==n.charAt(0)&&(n="#"+n),e&&"?"!==e.charAt(0)&&(e="?"+e),t+o+(r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(e=e.replace("#","%23"))+n},vd.prototype.resolve=function(e){return this.resolveObject(Id(e,!1,!0)).format()},vd.prototype.resolveObject=function(e){fd(e)&&((t=new vd).parse(e,!1,!0),e=t);for(var r=new vd,n=Object.keys(this),o=0;o<n.length;o++){var i=n[o];r[i]=this[i]}if(r.hash=e.hash,""!==e.href)if(e.slashes&&!e.protocol){for(var a=Object.keys(e),s=0;s<a.length;s++){var l=a[s];"protocol"!==l&&(r[l]=e[l])}Cd[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/")}else if(e.protocol&&e.protocol!==r.protocol)if(Cd[e.protocol]){if(r.protocol=e.protocol,e.host||_d[e.protocol])r.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,(r.pathname||r.search)&&(t=r.pathname||"",f=r.search||"",r.path=t+f),r.slashes=r.slashes||e.slashes}else for(var c=Object.keys(e),p=0;p<c.length;p++){var u=c[p];r[u]=e[u]}else{var t=r.pathname&&"/"===r.pathname.charAt(0),f=e.host||e.pathname&&"/"===e.pathname.charAt(0),t=f||t||r.host&&e.pathname,v=t,b=r.pathname&&r.pathname.split("/")||[],x=(d=e.pathname&&e.pathname.split("/")||[],r.protocol&&!Cd[r.protocol]);if(x&&(r.hostname="",r.port=null,r.host&&(""===b[0]?b[0]=r.host:b.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),t=t&&(""===d[0]||""===b[0])),f)r.host=(e.host||""===e.host?e:r).host,r.hostname=(e.hostname||""===e.hostname?e:r).hostname,r.search=e.search,r.query=e.query,b=d;else if(d.length)(b=b||[]).pop(),b=b.concat(d),r.search=e.search,r.query=e.query;else if(null!=e.search)return x&&(r.hostname=r.host=b.shift(),A=!!(r.host&&0<r.host.indexOf("@"))&&r.host.split("@"))&&(r.auth=A.shift(),r.host=r.hostname=A.shift()),r.search=e.search,r.query=e.query,yd(r.pathname)&&yd(r.search)||(r.path=(r.pathname||"")+(r.search||"")),r.href=r.format(),r;if(b.length){for(var w=b.slice(-1)[0],f=(r.host||e.host||1<b.length)&&("."===w||".."===w)||""===w,S=0,$=b.length;0<=$;$--)"."===(w=b[$])?b.splice($,1):".."===w?(b.splice($,1),S++):S&&(b.splice($,1),S--);if(!t&&!v)for(;S--;)b.unshift("..");!t||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),f&&"/"!==b.join("/").substr(-1)&&b.push("");var A,v=""===b[0]||b[0]&&"/"===b[0].charAt(0);x&&(r.hostname=r.host=!v&&b.length?b.shift():"",A=!!(r.host&&0<r.host.indexOf("@"))&&r.host.split("@"))&&(r.auth=A.shift(),r.host=r.hostname=A.shift()),(t=t||r.host&&b.length)&&!v&&b.unshift(""),b.length?r.pathname=b.join("/"):(r.pathname=null,r.path=null),yd(r.pathname)&&yd(r.search)||(r.path=(r.pathname||"")+(r.search||"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes}else r.pathname=null,r.search?r.path="/"+r.search:r.path=null}return r.href=r.format(),r},vd.prototype.parseHost=function(){var e=this.host,t=xd.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};function ah(e){return function(t,r){var n,t=th(rh(t)),r=eh(r),s=t.length;return r<0||s<=r?e?"":void 0:(n=oh(t,r))<55296||56319<n||r+1===s||(s=oh(t,r+1))<56320||57343<s?e?nh(t,r):n:e?ih(t,r,r+2):s-56320+(n-55296<<10)+65536}}function vh(e){if(null!=e)return mh(e,gh)||mh(e,"@@iterator")||yh[fh(e)]}function Fh(e){var t=e.slice;return e===Mh||Bh(Mh,e)&&t===Mh.slice?Nh:t}function Wh(e,t,r){var n,o;qh(e);try{if(!(n=Hh(e,"return"))){if("throw"===t)throw r;return r}n=zh(n,e)}catch(e){o=!0,n=e}if("throw"===t)throw r;if(o)throw n;return qh(n),r}function Zh(e){return void 0!==e&&(Yh.Array===e||Jh[Kh]===e)}function of(e,t){if(t=arguments.length<2?rf(e):t,Qh(t))return ef(Xh(t,e));throw nf(tf(e)+" is not iterable")}var ol=Eo,ll=pt,cr=ut,Dd=ai,Bd=Qt,Nd=Wr,Md=No,Fd=Xi,Ud=As,Na=rc,cl=pr,Hd=un("isConcatSpreadable"),Wd=9007199254740991,Vd="Maximum allowed index exceeded",Gd=ll.TypeError,pa=51<=cl||!cr(function(){var e=[];return e[Hd]=!1,e.concat()[0]!==e}),jt=Na("concat"),yl=(ol({target:"Array",proto:!0,forced:!pa||!jt},{concat:function(e){for(var r,o,i,a=Nd(this),s=Ud(a,0),l=0,t=-1,n=arguments.length;t<n;t++)if((e=>{var t;return!!Bd(e)&&(void 0!==(t=e[Hd])?!!t:Dd(e))})(i=-1===t?a:arguments[t])){if(l+(o=Md(i))>Wd)throw Gd(Vd);for(r=0;r<o;r++,l++)r in i&&Fd(s,l,i[r])}else{if(Wd<=l)throw Gd(Vd);Fd(s,l++,i)}return s.length=l,s}}),xa("asyncIterator"),xa("hasInstance"),xa("isConcatSpreadable"),xa("iterator"),xa("match"),xa("matchAll"),xa("replace"),xa("search"),xa("species"),xa("split"),xa("toPrimitive"),xa("toStringTag"),xa("unscopables"),_a(pt.JSON,"JSON",!0),Pt.Symbol),Xd=(xa("asyncDispose"),xa("dispose"),xa("matcher"),xa("metadata"),xa("observable"),xa("patternMatch"),xa("replaceAll"),yl),zs=bt,eh=_o,th=bi,rh=Yt,nh=zs("".charAt),oh=zs("".charCodeAt),ih=zs("".slice),sh=(ah(!1),ah(!0)),lh=bi,Fr=Ma,Sl=$p,uh="String Iterator",dh=Fr.set,hh=Fr.getterFor(uh),fh=(Sl(String,"String",function(e){dh(this,{type:uh,string:lh(e),index:0})},function(){var t=hh(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(r=sh(r,n),t.index+=r.length,{value:r,done:!1})}),ci),mh=Ir,yh=al,gh=un("iterator"),bh=vh,xh=(Eo({target:"Array",stat:!0},{isArray:ai}),Pt.Array.isArray),ul=Eo,sl=pt,Sh=ai,$h=Ka,Ah=Qt,Eh=Po,Oh=No,Th=Zt,_h=Xi,pi=un,jh=ua,bl=rc("slice"),Ph=pi("species"),Rh=sl.Array,Lh=Math.max,ur=(ul({target:"Array",proto:!0,forced:!bl},{slice:function(e,t){var r,n,o,i=Th(this),a=Oh(i),s=Eh(e,a),l=Eh(void 0===t?a:t,a);if(Sh(i)&&(r=i.constructor,(r=$h(r)&&(r===Rh||Sh(r.prototype))||Ah(r)&&null===(r=r[Ph])?void 0:r)===Rh||void 0===r))return jh(i,s,l);for(n=new(void 0===r?Rh:r)(Lh(l-s,0)),o=0;s<l;s++,o++)s in i&&_h(n,o,i[s]);return n.length=o,n}}),ic("Array").slice),Bh=ar,Nh=ur,Mh=Array.prototype,Uh=Fh,zh=_t,qh=ro,Hh=Ir,Vh=ro,Gh=Wh,Yh=al,Kh=un("iterator"),Jh=Array.prototype,Xh=_t,Qh=Cr,ef=ro,tf=Er,rf=vh,nf=pt.TypeError,af=Kn,sf=_t,lf=Wr,pf=Zh,uf=Ka,df=No,hf=Xi,ff=of,mf=vh,yf=pt.Array,gf=un("iterator"),vf=!1;try{var bf=0,xf={next:function(){return{done:!!bf++}},return:function(){vf=!0}};xf[gf]=function(){return this},Array.from(xf,function(){throw 2})}catch(e){}function wf(e,t){if(!t&&!vf)return!1;var r=!1;try{var n={};n[gf]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r}Eo({target:"Array",stat:!0,forced:!wf(function(e){Array.from(e)})},{from:function(e){var t=lf(e),e=uf(this),n=arguments.length,o=1<n?arguments[1]:void 0,i=void 0!==o;i&&(o=af(o,2<n?arguments[2]:void 0));var a,s,l,c,p,u,n=mf(t),h=0;if(!n||this==yf&&pf(n))for(a=df(t),s=e?new this(a):yf(a);h<a;h++)u=i?o(t[h],h):t[h],hf(s,h,u);else for(p=(c=ff(t,n)).next,s=e?new this:[];!(l=sf(p,c)).done;h++)u=i?((e,t,r,n)=>{try{return n?t(Vh(r)[0],r[1]):t(r)}catch(t){Gh(e,"throw",t)}})(c,o,[l.value,h],!0):l.value,hf(s,h,u);return s.length=h,s}});var Ds=Pt.Array.from,Sf=Ds;function $f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Af(e,t){var r;if(e)return"string"==typeof e?$f(e,t):"Map"===(r="Object"===(r=Uh(r=Object.prototype.toString.call(e)).call(r,8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Sf(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$f(e,t):void 0}function Ef(e,t){var i,a,s,n,r=void 0!==Xd&&bh(e)||e["@@iterator"];if(r)return s=!(a=!0),{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}};if(xh(e)||(r=Af(e))||t&&e&&"number"==typeof e.length)return r&&(e=r),n=0,{s:t=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var Of=fa.f("iterator");function Tf(e){return(Tf="function"==typeof Xd&&"symbol"==typeof Of?function(e){return typeof e}:function(e){return e&&"function"==typeof Xd&&e.constructor===Xd&&e!==Xd.prototype?"symbol":typeof e})(e)}function _f(e,t){return(e=>{if(xh(e))return e})(e)||((e,t)=>{var r=null==e?null:void 0!==Xd&&bh(e)||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}})(e,t)||Af(e,t)||(()=>{throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function Zf(e,t){this.stopped=e,this.result=t}function Qf(e,t,r){function m(e){return n&&Kf(n,"normal",e),new Zf(!0,e)}function y(e){return u?(zf(e),h?f(e[0],e[1],m):f(e[0],e[1])):h?f(e,m):f(e)}var n,i,a,s,l,c,p=r&&r.that,u=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),f=Ff(t,p);if(d)n=e;else{if(!(r=Yf(e)))throw Jf(qf(e)+" is not iterable");if(Hf(r)){for(i=0,a=Wf(e);i<a;i++)if((s=y(e[i]))&&Vf(Xf,s))return s;return new Zf(!1)}n=Gf(e,r)}for(l=n.next;!(c=Uf(l,n)).done;){try{s=y(c.value)}catch(e){Kf(n,"throw",e)}if("object"==typeof s&&s&&Vf(Xf,s))return s}return new Zf(!1)}function bm(e,t){var r,n=2<arguments.length?arguments[2]:void 0,o=im(xm,this),o=(sm?r=sm(new gm,o?am(this):xm):(r=o?this:lm(xm),cm(r,ym,"Error")),void 0!==t&&cm(r,"message",function(e,t){return void 0===e?arguments.length<2?"":t:em(e)}(t)),mm&&cm(r,"stack",((e,t)=>{if(Bf&&"string"==typeof e)for(;t--;)e=Rf(e,Df,"");return e})(r.stack,1)),((e,t)=>{Nf(t)&&"cause"in t&&Mf(e,"cause",t.cause)})(r,n),[]);return hm(e,vm,{that:o}),cm(r,"errors",o),r}var Cf=Yr,jf=Ms,If=xt,Pf=Kr,Rf=bt("".replace),ll=String(Error("zxcasd").stack),Df=/\n\s*at [^:]*:[^\n]*/,Bf=Df.test(ll),Nf=Qt,Mf=nn,Ff=Kn,Uf=_t,zf=ro,qf=Er,Hf=Zh,Wf=No,Vf=ar,Gf=of,Yf=vh,Kf=Wh,Jf=pt.TypeError,Xf=Zf.prototype,em=bi,tm=Dt,cl=!ut(function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",tm(1,7)),7!==e.stack)}),cr=Eo,Na=pt,im=ar,am=vl,sm=Lt,lm=Di,cm=nn,ol=Dt,hm=Qf,mm=cl,ym=un("toStringTag"),gm=Na.Error,vm=[].push,xm=(sm?sm(bm,gm):((e,t,r)=>{for(var n=jf(t),o=Pf.f,i=If.f,a=0;a<n.length;a++){var s=n[a];Cf(e,s)||Cf(r,s)||o(e,s,i(t,s))}})(bm,gm,{name:!0}),bm.prototype=lm(gm.prototype,{constructor:ol(1,bm),message:ol(1,""),name:ol(1,"AggregateError")}));cr({global:!0},{AggregateError:bm});function Om(e,t,r){for(var n in t)r&&r.unsafe&&e[n]?e[n]=t[n]:Em(e,n,t[n],r);return e}function Rm(e,t){if(Im(t,e))return e;throw Pm("Incorrect invocation")}function Fm(e,t){return void 0===(e=Nm(e).constructor)||null==(e=Nm(e)[Mm])?t:(e=>{if(Lm(e))return e;throw Bm(Dm(e)+" is not a constructor")})(e)}function zm(e,t){if(e<t)throw Um("Not enough arguments");return e}var wm,km,pa=pt.Promise,Em=ha,Tm=ir,_m=Kr,Cm=vt,jm=un("species"),Im=ar,Pm=pt.TypeError,Lm=Ka,Dm=Er,Bm=pt.TypeError,Nm=ro,Mm=un("species"),Um=pt.TypeError,jt=/(?:ipad|iphone|ipod).*applewebkit/i.test(sr),yl="process"==Ft(pt.process),Wm=pt,Vm=ft,zs=Kn,Ym=$t,Km=Yr,Fr=ut,Zm=ee,Xm=ua,Qm=An,ey=zm,Sl=jt,ai=yl,pi=Wm.setImmediate,sl=Wm.clearImmediate,iy=Wm.process,ay=Wm.Dispatch,sy=Wm.Function,ul=Wm.MessageChannel,cy=Wm.String,py=0,uy={};try{wm=Wm.location}catch(e){}function hy(e){return function(){dy(e)}}function fy(e){dy(e.data)}function my(e){Wm.postMessage(cy(e),wm.protocol+"//"+wm.host)}var dy=function(e){var t;Km(uy,e)&&(t=uy[e],delete uy[e],t())};pi&&sl||(pi=function(e){ey(arguments.length,1);var t=Ym(e)?e:sy(e),r=Xm(arguments,1);return uy[++py]=function(){Vm(t,void 0,r)},km(py),py},sl=function(e){delete uy[e]},ai?km=function(e){iy.nextTick(hy(e))}:ay&&ay.now?km=function(e){ay.now(hy(e))}:ul&&!Sl?(ur=(bl=new ul).port2,bl.port1.onmessage=fy,km=zs(ur.postMessage,ur)):Wm.addEventListener&&Ym(Wm.postMessage)&&!Wm.importScripts&&wm&&"file:"!==wm.protocol&&!Fr(my)?(km=my,Wm.addEventListener("message",fy,!1)):km="onreadystatechange"in Qm("script")?function(e){Zm.appendChild(Qm("script")).onreadystatechange=function(){Zm.removeChild(this),dy(e)}}:function(e){setTimeout(hy(e),0)});function Wy(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=Hy(t),this.reject=Hy(r)}function Ky(e,t){return Vy(e),Gy(t)&&t.constructor===e?t:((0,(e=Yy.f(e)).resolve)(t),e.promise)}function Zy(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}function Xy(){this.head=null,this.tail=null}var yy,gy,vy,by,xy,wy,Sy,al={set:pi,clear:sl},xf=pt,fa=/ipad|iphone|ipod/i.test(sr)&&void 0!==xf.Pebble,Ms=/web0s(?!.*chrome)/i.test(sr),ll=pt,vl=Kn,Lt=xt.f,jy=al.set,cl=jt,Na=fa,ol=Ms,Ly=yl,cr=ll.MutationObserver||ll.WebKitMutationObserver,Ka=ll.document,Ny=ll.process,ee=ll.Promise,ua=Lt(ll,"queueMicrotask"),ai=ua&&ua.value,ul=(ai||(yy=function(){var e,t;for(Ly&&(e=Ny.domain)&&e.exit();gy;){t=gy.fn,gy=gy.next;try{t()}catch(e){throw gy?by():vy=void 0,e}}vy=void 0,e&&e.enter()},by=cl||Ly||ol||!cr||!Ka?!Na&&ee&&ee.resolve?((Sl=ee.resolve(void 0)).constructor=ee,Sy=vl(Sl.then,Sl),function(){Sy(yy)}):Ly?function(){Ny.nextTick(yy)}:(jy=vl(jy,ll),function(){jy(yy)}):(xy=!0,wy=Ka.createTextNode(""),new cr(yy).observe(wy,{characterData:!0}),function(){wy.data=xy=!xy})),ai||function(e){e={fn:e,next:void 0};vy&&(vy.next=e),gy||(gy=e,by()),vy=e}),bl={},Hy=Cr,Vy=(bl.f=function(e){return new Wy(e)},ro),Gy=Qt,Yy=bl,Jy=pt;Xy.prototype={add:function(e){e={item:e,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};function Qg(e){ag(vg,og,function(){var t=e.facade;Og?Mg.emit("rejectionHandled",t):Jg("rejectionhandled",t,e.value)})}var Qy,eg,tg,zs="object"==typeof window,ur=Eo,og=pt,Fr=ir,ag=_t,pi=pa,sl=Om,xf=_a,pg=Cr,ug=$t,dg=Qt,hg=Rm,fg=si,mg=Qf,sr=wf,gg=Fm,vg=al.set,bg=ul,xg=Ky,xt=bl,kg=Zy,Sg=Xy,jt=Ma,fa=Rt,Eg=zs,Og=yl,Tg=pr,_g=un("species"),Cg="Promise",jg=jt.getterFor(Cg),Ig=jt.set,Pg=jt.getterFor(Cg),Ms=pi&&pi.prototype,Lg=pi,Dg=Ms,Bg=og.TypeError,Ng=og.document,Mg=og.process,Fg=xt.f,Ug=Fg,zg=!!(Ng&&Ng.createEvent&&og.dispatchEvent),qg=ug(og.PromiseRejectionEvent),Hg="unhandledrejection",Lt=fa(Cg,function(){var r,e=fg(Lg),t=e!==String(Lg);return!t&&66===Tg||!Dg.finally||!(51<=Tg&&/native code/.test(e)||(e=function(e){e(function(){},function(){})},((r=new Lg(function(e){e(1)})).constructor={})[_g]=e,r.then(function(){})instanceof e&&(t||!Eg||qg)))}),ua=Lt||!sr(function(e){Lg.all(e).catch(function(){})}),Gg=function(e){var t;return!(!dg(e)||!ug(t=e.then))&&t},Yg=function(e,t){var r,n,o,i=t.value,a=1==t.state,s=a?e.ok:e.fail,l=e.resolve,c=e.reject,p=e.domain;try{s?(a||(2===t.rejection&&Qg(t),t.rejection=1),!0===s?r=i:(p&&p.enter(),r=s(i),p&&(p.exit(),o=!0)),r===e.promise?c(Bg("Promise-chain cycle")):(n=Gg(r))?ag(n,r,l,c):l(r)):c(i)}catch(e){p&&!o&&p.exit(),c(e)}},Kg=function(e,t){e.notified||(e.notified=!0,bg(function(){for(var r,n=e.reactions;r=n.get();)Yg(r,e);e.notified=!1,t&&!e.rejection&&Zg(e)}))},Jg=function(e,t,r){var n;zg?((n=Ng.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),og.dispatchEvent(n)):n={promise:t,reason:r},!qg&&(t=og["on"+e])?t(n):e===Hg&&function(e,t){var r=Jy.console;r&&r.error&&(1==arguments.length?r.error(e):r.error(e,t))}("Unhandled promise rejection",r)},Zg=function(e){ag(vg,og,function(){var t,r=e.facade,n=e.value;if(Xg(e)&&(t=kg(function(){Og?Mg.emit("unhandledRejection",n,r):Jg(Hg,r,n)}),e.rejection=Og||Xg(e)?2:1,t.error))throw t.value})},Xg=function(e){return 1!==e.rejection&&!e.parent},ev=function(e,t,r){return function(n){e(t,n,r)}},tv=function(e,t,r){e.done||(e.done=!0,(e=r?r:e).value=t,e.state=2,Kg(e,!0))},rv=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw Bg("Promise can't be resolved itself");var n=Gg(t);n?bg(function(){var r={done:!1};try{ag(n,t,ev(rv,r,e),ev(tv,r,e))}catch(t){tv(r,t,e)}}):(e.value=t,e.state=1,Kg(e,!1))}catch(t){tv({done:!1},t,e)}}},nv=(Lt&&(Dg=(Lg=function(e){hg(this,Dg),pg(e),ag(Qy,this);var t=jg(this);try{e(ev(rv,t),ev(tv,t))}catch(e){tv(t,e)}}).prototype,(Qy=function(e){Ig(this,{type:Cg,done:!1,notified:!1,parent:!1,reactions:new Sg,rejection:!1,state:0,value:void 0})}).prototype=sl(Dg,{then:function(e,t){var r=Pg(this),n=Fg(gg(this,Lg));return r.parent=!0,n.ok=!ug(e)||e,n.fail=ug(t)&&t,n.domain=Og?Mg.domain:void 0,0==r.state?r.reactions.add(n):bg(function(){Yg(n,r)}),n.promise},catch:function(e){return this.then(void 0,e)}}),eg=function(){var e=new Qy,t=jg(e);this.promise=e,this.resolve=ev(rv,t),this.reject=ev(tv,t)},xt.f=Fg=function(e){return e===Lg||e===tg?new eg:Ug(e)}),ur({global:!0,wrap:!0,forced:Lt},{Promise:Lg}),xf(Lg,Cg,!1,!0),(()=>{var t=Tm("Promise"),r=_m.f;Cm&&t&&!t[jm]&&r(t,jm,{configurable:!0,get:function(){return this}})})(),tg=Fr(Cg),ur({target:Cg,stat:!0,forced:Lt},{reject:function(e){var t=Fg(this);return ag(t.reject,void 0,e),t.promise}}),ur({target:Cg,stat:!0,forced:!0},{resolve:function(e){return xg(this===tg?Lg:this,e)}}),ur({target:Cg,stat:!0,forced:ua},{all:function(e){var t=this,r=Fg(t),n=r.resolve,o=r.reject,i=kg(function(){var r=pg(t.resolve),i=[],a=0,s=1;mg(e,function(e){var l=a++,c=!1;s++,ag(r,t,e).then(function(e){c||(c=!0,i[l]=e,--s)||n(i)},o)}),--s||n(i)});return i.error&&o(i.value),r.promise},race:function(e){var t=this,r=Fg(t),n=r.reject,o=kg(function(){var o=pg(t.resolve);mg(e,function(e){ag(o,t,e).then(r.resolve,n)})});return o.error&&n(o.value),r.promise}}),_t),ov=Cr,iv=bl,av=Zy,sv=Qf,lv=(Eo({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=iv.f(t),n=r.resolve,o=r.reject,i=av(function(){var r=ov(t.resolve),o=[],i=0,a=1;sv(e,function(e){var s=i++,l=!1;a++,nv(r,t,e).then(function(e){l||(l=!0,o[s]={status:"fulfilled",value:e},--a)||n(o)},function(e){l||(l=!0,o[s]={status:"rejected",reason:e},--a)||n(o)})}),--a||n(o)});return i.error&&o(i.value),r.promise}}),Cr),cv=ir,pv=_t,uv=bl,dv=Zy,hv=Qf,fv="No one promise resolved",mv=(Eo({target:"Promise",stat:!0},{any:function(e){var t=this,r=cv("AggregateError"),n=uv.f(t),o=n.resolve,i=n.reject,a=dv(function(){var n=lv(t.resolve),a=[],s=0,l=1,c=!1;hv(e,function(e){var p=s++,u=!1;l++,pv(n,t,e).then(function(e){u||c||(c=!0,o(e))},function(e){u||c||(u=!0,a[p]=e,--l)||i(new r(a,fv))})}),--l||i(new r(a,fv))});return a.error&&i(a.value),n.promise}}),pa),yv=ir,gv=$t,vv=Fm,bv=Ky,cl=(Eo({target:"Promise",proto:!0,real:!0,forced:!!mv&&ut(function(){mv.prototype.finally.call({then:function(){}},function(){})})},{finally:function(e){var t=vv(this,yv("Promise")),r=gv(e);return this.then(r?function(r){return bv(t,e()).then(function(){return r})}:e,r?function(r){return bv(t,e()).then(function(){throw r})}:e)}}),Pt.Promise),ol=cl,kv=bl,Sv=Zy,$v=(Eo({target:"Promise",stat:!0,forced:!0},{try:function(e){var t=kv.f(this),e=Sv(e);return(e.error?t.reject:t.resolve)(e.value),t.promise}}),ol);function Av(e,t,r,n,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return r(e)}s.done?t(l):$v.resolve(l).then(n,o)}function Ev(e){return function(){var t=this,r=arguments;return new $v(function(n,o){var i=e.apply(t,r);function a(e){Av(i,n,o,a,s,"next",e)}function s(e){Av(i,n,o,a,s,"throw",e)}a(void 0)})}}function fb(e,t,r){var n=sb(r,t-1),r=sb(r,t+1);return ab(db,e)&&!ab(hb,r)||ab(hb,e)&&!ab(db,n)?"\\u"+pb(lb(e,0),16):e}function Bb(e){return function(t){for(var r,n=Rb(t),o=Pb(n),i=o.length,a=0,s=[];a<i;)r=o[a++],jb&&!Lb(n,r)||Db(s,e?[r,n[r]]:n[r]);return s}}var Ov={exports:{}},Tv=((()=>{var t=(e=>{var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){t=t&&t.prototype instanceof y?t:y,t=Object.create(t.prototype),n=new T(n||[]);return t._invoke=((e,t,r)=>{var n=u;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){a=A(a,r);if(a){if(a===m)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;a=p(e,t,r);if("normal"===a.type){if(n=r.done?f:d,a.arg===m)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n=f,r.method="throw",r.arg=a.arg)}}})(e,r,n),t}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u="suspendedStart",d="suspendedYield",h="executing",f="completed",m={};function y(){}function g(){}function v(){}l(o={},i,function(){return this});var x=Object.getPrototypeOf,k=((x=x&&x(x(_([]))))&&x!==r&&n.call(x,i)&&(o=x),v.prototype=y.prototype=Object.create(o));function S(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){function r(o,i,a,s){var c,o=p(e[o],e,i);if("throw"!==o.type)return(i=(c=o.arg).value)&&"object"==typeof i&&n.call(i,"__await")?t.resolve(i.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(i).then(function(e){c.value=e,a(c)},function(e){return r("throw",e,a,s)});s(o.arg)}var o;this._invoke=function(e,n){function i(){return new t(function(t,o){r(e,n,t,o)})}return o=o?o.then(i,i):i()}}function A(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=p(n,e.iterator,r.arg);return"throw"===n.type?(r.method="throw",r.arg=n.arg,r.delegate=null,m):(n=n.arg)?n.done?(r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function _(e){if(e){var o,r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return o=-1,(r=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r}).next=r}return{next:C}}function C(){return{value:t,done:!0}}return l(k,"constructor",g.prototype=v),l(v,"constructor",g),g.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},S($.prototype),l($.prototype,a,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new $(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(k),l(k,s,"Generator"),l(k,i,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var r,t=[];for(r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}var a=(i=i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc?null:i)?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n,o,r=this.tryEntries[t];if(r.tryLoc===e)return"throw"===(n=r.completion).type&&(o=n.arg,O(r)),o}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e})(Ov.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(),Ov.exports),_v=qo.includes,Na=(Eo({target:"Array",proto:!0},{includes:function(e){return _v(this,e,1<arguments.length?arguments[1]:void 0)}}),ic("Array").includes),ee=Eo,Iv=Hu,Pv=Yt,Rv=bi,Sl=Vu,Dv=bt("".indexOf),vl=(ee({target:"String",proto:!0,forced:!Sl("includes")},{includes:function(e){return!!~Dv(Rv(Pv(this)),Rv(Iv(e)),1<arguments.length?arguments[1]:void 0)}}),ic("String").includes),Nv=ar,Mv=Na,Fv=vl,Uv=Array.prototype,zv=String.prototype,qv=function(e){var t=e.includes;return e===Uv||Nv(Uv,e)&&t===Uv.includes?Mv:"string"==typeof e||e===zv||Nv(zv,e)&&t===zv.includes?Fv:t},ll=ic("Array").entries,Wv=ci,Vv=Yr,Gv=ar,Yv=ll,Kv=Array.prototype,Jv={DOMTokenList:!0,NodeList:!0},Zv=function(e){var t=e.entries;return e===Kv||Gv(Kv,e)&&t===Kv.entries||Vv(Jv,Wv(e))?Yv:t},Xv=Ds,Ka=Eo,cr=ir,tb=ft,ai=bt,si=ut,ob=pt.Array,ib=cr("JSON","stringify"),ab=ai(/./.exec),sb=ai("".charAt),lb=ai("".charCodeAt),cb=ai("".replace),pb=ai(1..toString),ub=/[\uD800-\uDFFF]/g,db=/^[\uD800-\uDBFF]$/,hb=/^[\uDC00-\uDFFF]$/,al=si(function(){return'"\\udf06\\ud834"'!==ib("\udf06\ud834")||'"\\udead"'!==ib("\udead")}),yb=(ib&&Ka({target:"JSON",stat:!0,forced:al},{stringify:function(e,t,r){for(var n=0,o=arguments.length,i=ob(o);n<o;n++)i[n]=arguments[n];var a=tb(ib,null,i);return"string"==typeof a?cb(a,ub,fb):a}}),Pt),gb=ft,vb=(yb.JSON||(yb.JSON={stringify:JSON.stringify}),function(e,t,r){return gb(yb.JSON.stringify,null,arguments)}),bb=Xa.map,ul=(Eo({target:"Array",proto:!0,forced:!rc("map")},{map:function(e){return bb(this,e,1<arguments.length?arguments[1]:void 0)}}),ic("Array").map),wb=ar,kb=ul,Sb=Array.prototype,$b=function(e){var t=e.map;return e===Sb||wb(Sb,e)&&t===Sb.map?kb:t},Ab=ni,Rt=ic("Array").concat,Ob=ar,Tb=Rt,_b=Array.prototype,Cb=function(e){var t=e.concat;return e===_b||Ob(_b,e)&&t===_b.concat?Tb:t},jb=vt,zs=bt,Pb=ei,Rb=Zt,Lb=zs(Ct.f),Db=zs([].push),Nb=[Bb(!0),Bb(!1)][0],Mb=(Eo({target:"Object",stat:!0},{entries:function(e){return Nb(e)}}),Pt.Object.entries),Fb=pc;(e=>{var s,l,t={},r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&(()=>{try{return new Blob,!0}catch(e){return!1}})(),i="FormData"in e,a="ArrayBuffer"in e;function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function p(e){return e="string"!=typeof e?String(e):e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function m(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function y(e){var t;return e.slice?e.slice(0):((t=new Uint8Array(e.byteLength)).set(new Uint8Array(e)),t.buffer)}function g(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():a&&o&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return(e=>{var t=new FileReader,r=f(t);return t.readAsText(e),r})(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve((e=>{for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")})(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}a&&(s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&-1<s.indexOf(Object.prototype.toString.call(e))}),d.prototype.append=function(e,t){e=c(e),t=p(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[c(e)]},d.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},d.prototype.set=function(e,t){this.map[c(e)]=p(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),u(e)},d.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),u(e)},d.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),u(e)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var r=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=(e=>{var t=e.toUpperCase();return-1<v.indexOf(t)?t:e})(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function x(e){var t=new FormData;return e.trim().split("&").forEach(function(e){var n;e&&(n=(e=e.split("=")).shift().replace(/\+/g," "),e=e.join("=").replace(/\+/g," "),t.append(decodeURIComponent(n),decodeURIComponent(e)))}),t}function w(e,t){t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},g.call(b.prototype),g.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var k=[301,302,303,307,308];w.redirect=function(e,t){if(-1===k.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;t=Error(e);this.stack=t.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function S(e,r){return new Promise(function(n,i){var a=new b(e,r);if(a.signal&&a.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function l(){s.abort()}s.onload=function(){var t,e={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var e=e.split(":"),n=e.shift().trim();n&&(e=e.join(":").trim(),t.append(n,e))}),t)},o=(e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL"),"response"in s?s.response:s.responseText);n(new w(o,e))},s.onerror=function(){i(new TypeError("Network request failed"))},s.ontimeout=function(){i(new TypeError("Network request failed"))},s.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&o&&(s.responseType="blob"),a.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),a.signal&&(a.signal.addEventListener("abort",l),s.onreadystatechange=function(){4===s.readyState&&a.signal.removeEventListener("abort",l)}),s.send(void 0===a._bodyInit?null:a._bodyInit)})}S.polyfill=!0,e.fetch||(e.fetch=S,e.Headers=d,e.Request=b,e.Response=w),t.Headers=d,t.Request=b,t.Response=w,t.fetch=S,Object.defineProperty(t,"__esModule",{value:!0})})("undefined"!=typeof self?self:globalThis);var yl="undefined"!=typeof Symbol&&Symbol,Hb=Array.prototype.slice,Wb=Object.prototype.toString,Gb=Function.prototype.bind||function(e){var t=this;if("function"!=typeof t||"[object Function]"!==Wb.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var n=Hb.call(arguments,1),i=Math.max(0,t.length-n.length),a=[],s=0;s<i;s++)a.push("$"+s);var l,r=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(function(){var o;return this instanceof r?(o=t.apply(this,n.concat(Hb.call(arguments))),Object(o)===o?o:this):t.apply(e,n.concat(Hb.call(arguments)))});return t.prototype&&((l=function(){}).prototype=t.prototype,r.prototype=new l,l.prototype=null),r},pr=Gb.call(Function.call,Object.prototype.hasOwnProperty),Kb=SyntaxError,Jb=Function,Zb=TypeError,Xb=function(e){try{return Jb('"use strict"; return ('+e+").constructor;")()}catch(e){}},Qb=Object.getOwnPropertyDescriptor;if(Qb)try{Qb({},"")}catch(o){Qb=null}function ex(){throw new Zb}function vx(e,t){if("string"!=typeof e||0===e.length)throw new Zb("intrinsic name must be a non-empty string");if(1<arguments.length&&"boolean"!=typeof t)throw new Zb('"allowMissing" argument must be a boolean');var r=(e=>{var t=hx(e,0,1),r=hx(e,-1);if("%"===t&&"%"!==r)throw new Kb("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new Kb("invalid intrinsic syntax, expected opening `%`");var n=[];return dx(e,fx,function(e,t,r,o){n[n.length]=r?dx(o,mx,"$1"):t||e}),n})(e),n=0<r.length?r[0]:"",o=((e,t)=>{var r,n=e;if(cx(sx,n)&&(n="%"+(r=sx[n])[0]+"%"),cx(ax,n)){var o=ax[n];if(void 0!==(o=o===ox?function e(t){var r,n;return"%AsyncFunction%"===t?r=Xb("async function () {}"):"%GeneratorFunction%"===t?r=Xb("function* () {}"):"%AsyncGeneratorFunction%"===t?r=Xb("async function* () {}"):"%AsyncGenerator%"===t?(n=e("%AsyncGeneratorFunction%"))&&(r=n.prototype):"%AsyncIteratorPrototype%"===t&&(n=e("%AsyncGenerator%"))&&(r=nx(n.prototype)),ax[t]=r}(n):o)||t)return{alias:r,name:n,value:o};throw new Zb("intrinsic "+e+" exists, but is not available. Please file an issue!")}throw new Kb("intrinsic "+e+" does not exist!")})("%"+n+"%",t),a=(o.name,o.value),s=!1;(o=o.alias)&&(n=o[0],ux(r,px([0,1],o)));for(var c=1,p=!0;c<r.length;c+=1){var u=r[c],d=hx(u,0,1),h=hx(u,-1);if(('"'===d||"'"===d||"`"===d||'"'===h||"'"===h||"`"===h)&&d!==h)throw new Kb("property names with quotes must have matching quotes");if("constructor"!==u&&p||(s=!0),cx(ax,d="%"+(n+="."+u)+"%"))a=ax[d];else if(null!=a){if(!(u in a)){if(t)return;throw new Zb("base intrinsic for "+e+" exists, but the property is not available.")}a=Qb&&c+1>=r.length?(p=!!(h=Qb(a,u)))&&"get"in h&&!("originalValue"in h.get)?h.get:a[u]:(p=cx(a,u),a[u]),p&&!s&&(ax[d]=a)}}return a}var jt=Qb?function(){try{return ex}catch(e){try{return Qb(arguments,"callee").get}catch(e){return ex}}}():ex,pi="function"==typeof yl&&"function"==typeof Symbol&&"symbol"==typeof yl("foo")&&"symbol"==typeof Symbol("bar")&&(()=>{if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"!=typeof Symbol.iterator){var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;r=Object.getOwnPropertySymbols(e);if(1!==r.length||r[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){r=Object.getOwnPropertyDescriptor(e,t);if(42!==r.value||!0!==r.enumerable)return!1}}return!0})(),nx=Object.getPrototypeOf||function(e){return e.__proto__},ox={},Ms="undefined"==typeof Uint8Array?Ub:nx(Uint8Array),ax={"%AggregateError%":"undefined"==typeof AggregateError?Ub:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?Ub:ArrayBuffer,"%ArrayIteratorPrototype%":pi?nx([][Symbol.iterator]()):Ub,"%AsyncFromSyncIteratorPrototype%":Ub,"%AsyncFunction%":ox,"%AsyncGenerator%":ox,"%AsyncGeneratorFunction%":ox,"%AsyncIteratorPrototype%":ox,"%Atomics%":"undefined"==typeof Atomics?Ub:Atomics,"%BigInt%":"undefined"==typeof BigInt?Ub:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?Ub:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?Ub:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?Ub:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?Ub:FinalizationRegistry,"%Function%":Jb,"%GeneratorFunction%":ox,"%Int8Array%":"undefined"==typeof Int8Array?Ub:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?Ub:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?Ub:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":pi?nx(nx([][Symbol.iterator]())):Ub,"%JSON%":"object"==typeof JSON?JSON:Ub,"%Map%":"undefined"==typeof Map?Ub:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&pi?nx((new Map)[Symbol.iterator]()):Ub,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?Ub:Promise,"%Proxy%":"undefined"==typeof Proxy?Ub:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?Ub:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?Ub:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&pi?nx((new Set)[Symbol.iterator]()):Ub,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?Ub:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":pi?nx(""[Symbol.iterator]()):Ub,"%Symbol%":pi?Symbol:Ub,"%SyntaxError%":Kb,"%ThrowTypeError%":jt,"%TypedArray%":Ms,"%TypeError%":Zb,"%Uint8Array%":"undefined"==typeof Uint8Array?Ub:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?Ub:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?Ub:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?Ub:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?Ub:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?Ub:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?Ub:WeakSet},sx={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},fa=Gb,cx=pr,px=fa.call(Function.call,Array.prototype.concat),ux=fa.call(Function.apply,Array.prototype.splice),dx=fa.call(Function.call,String.prototype.replace),hx=fa.call(Function.call,String.prototype.slice),fx=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,mx=/\\(\\)?/g,sr={exports:{}},xx=((e=>{var t=Gb,r=vx,n=r("%Function.prototype.apply%"),o=r("%Function.prototype.call%"),i=r("%Reflect.apply%",!0)||t.call(o,n),a=r("%Object.getOwnPropertyDescriptor%",!0),s=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(s)try{s({},"a",{value:1})}catch(e){s=null}function c(){return i(t,n,arguments)}e.exports=function(e){var r=i(t,o,arguments);return a&&s&&a(r,"length").configurable&&s(r,"length",{value:1+l(0,e.length-(arguments.length-1))}),r},s?s(e.exports,"apply",{value:c}):e.exports.apply=c})(sr),vx),wx=sr.exports,kx=wx(xx("String.prototype.indexOf")),sl=(e=>{var t;return e.__esModule?e:(t=Object.defineProperty({},"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),t)})(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}})),xt="function"==typeof Map&&Map.prototype,xf=Object.getOwnPropertyDescriptor&&xt?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Ex=xt&&xf&&"function"==typeof xf.get?xf.get:null,Ox=xt&&Map.prototype.forEach,Fr="function"==typeof Set&&Set.prototype,Lt=Object.getOwnPropertyDescriptor&&Fr?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Cx=Fr&&Lt&&"function"==typeof Lt.get?Lt.get:null,jx=Fr&&Set.prototype.forEach,Ix="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,Px="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,Rx="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,Lx=Boolean.prototype.valueOf,Dx=Object.prototype.toString,Bx=Function.prototype.toString,Nx=String.prototype.match,Mx=String.prototype.slice,Fx=String.prototype.replace,Ux=String.prototype.toUpperCase,zx=String.prototype.toLowerCase,qx=RegExp.prototype.test,Hx=Array.prototype.concat,Wx=Array.prototype.join,Vx=Array.prototype.slice,Gx=Math.floor,Yx="function"==typeof BigInt?BigInt.prototype.valueOf:null,Kx=Object.getOwnPropertySymbols,Jx="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,Zx="function"==typeof Symbol&&"object"==typeof Symbol.iterator,Xx="function"==typeof Symbol&&Symbol.toStringTag&&(Symbol.toStringTag,1)?Symbol.toStringTag:null,Qx=Object.prototype.propertyIsEnumerable,ew=("function"==typeof Reflect?Reflect:Object).getPrototypeOf||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function tw(e,t){if(e===1/0||e===-1/0||e!=e||e&&-1e3<e&&e<1e3||qx.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var n=e<0?-Gx(-e):Gx(e);if(n!==e)return e=String(n),n=Mx.call(t,e.length+1),Fx.call(e,r,"$&_")+"."+Fx.call(Fx.call(n,/([0-9]{3})/g,"$&_"),/_$/,"")}return Fx.call(t,r,"$&_")}var ur=sl.custom,nw=ur&&sw(ur)?ur:null;function ow(e,t,r){r="double"===(r.quoteStyle||t)?'"':"'";return r+e+r}function aw(e){return!("[object Array]"!==pw(e)||Xx&&"object"==typeof e&&Xx in e)}function sw(e){if(Zx)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return 1;if(e&&"object"==typeof e&&Jx)try{return Jx.call(e),1}catch(e){}}var lw=Object.prototype.hasOwnProperty||function(e){return e in this};function cw(e,t){return lw.call(e,t)}function pw(e){return Dx.call(e)}function uw(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function dw(e){var e=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+Ux.call(e.toString(16))}function hw(e){return"Object("+e+")"}function fw(e){return e+" { ? }"}function mw(e,t,r,n){return e+" ("+t+") {"+(n?yw(r,n):Wx.call(r,", "))+"}"}function yw(e,t){var r;return 0===e.length?"":(r="\n"+t.prev+t.base)+Wx.call(e,","+r)+"\n"+t.prev}function gw(e,t){var r=aw(e),n=[];if(r){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=cw(e,o)?t(e[o],e):""}var l,a="function"==typeof Kx?Kx(e):[];if(Zx)for(var i={},s=0;s<a.length;s++)i["$"+a[s]]=a[s];for(l in e)!cw(e,l)||r&&String(Number(l))===l&&l<e.length||Zx&&i["$"+l]instanceof Symbol||(qx.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e)));if("function"==typeof Kx)for(var c=0;c<a.length;c++)Qx.call(e,a[c])&&n.push("["+t(a[c])+"]: "+t(e[a[c]],e));return n}function bw(e,t){return"function"==typeof(t=xx(e,!!t))&&-1<kx(e,".prototype.")?wx(t):t}function Mw(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r}function lk(e,t){var r=(e=>{if(!e)return ok;if(null!=e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=(void 0===e.charset?ok:e).charset;return{allowDots:void 0===e.allowDots?ok.allowDots:!!e.allowDots,allowPrototypes:("boolean"==typeof e.allowPrototypes?e:ok).allowPrototypes,allowSparse:("boolean"==typeof e.allowSparse?e:ok).allowSparse,arrayLimit:("number"==typeof e.arrayLimit?e:ok).arrayLimit,charset:t,charsetSentinel:("boolean"==typeof e.charsetSentinel?e:ok).charsetSentinel,comma:("boolean"==typeof e.comma?e:ok).comma,decoder:("function"==typeof e.decoder?e:ok).decoder,delimiter:("string"==typeof e.delimiter||tk.isRegExp(e.delimiter)?e:ok).delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:ok.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:("boolean"==typeof e.interpretNumericEntities?e:ok).interpretNumericEntities,parameterLimit:("number"==typeof e.parameterLimit?e:ok).parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:("boolean"==typeof e.plainObjects?e:ok).plainObjects,strictNullHandling:("boolean"==typeof e.strictNullHandling?e:ok).strictNullHandling}})(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?((e,t)=>{var r,c,u,d,n={},e=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,a=e.split(t.delimiter,i),s=-1,l=t.charset;if(t.charsetSentinel)for(r=0;r<a.length;++r)0===a[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===a[r]?l="utf-8":"utf8=%26%2310003%3B"===a[r]&&(l="iso-8859-1"),s=r,r=a.length);for(r=0;r<a.length;++r)r!==s&&((d=-1===(d=-1===(d=(u=a[r]).indexOf("]="))?u.indexOf("="):d+1)?(c=t.decoder(u,ok.decoder,l,"key"),t.strictNullHandling?null:""):(c=t.decoder(u.slice(0,d),ok.decoder,l,"key"),tk.maybeMap(ak(u.slice(d+1),t),function(e){return t.decoder(e,ok.decoder,l,"value")})))&&t.interpretNumericEntities&&"iso-8859-1"===l&&(d=ik(d)),-1<u.indexOf("[]=")&&(d=nk(d)?[d]:d),rk.call(n,c)?n[c]=tk.combine(n[c],d):n[c]=d);return n})(e,r):e,o=r.plainObjects?Object.create(null):{},i=Object.keys(n),a=0;a<i.length;++a)var s=i[a],s=sk(s,n[s],r,"string"==typeof e),o=tk.merge(o,s,r);return!0===r.allowSparse?o:tk.compact(o)}var ua=vx,xw=function e(t,r,n,o){var i=r||{};if(cw(i,"quoteStyle")&&"single"!==i.quoteStyle&&"double"!==i.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(cw(i,"maxStringLength")&&("number"==typeof i.maxStringLength?i.maxStringLength<0&&i.maxStringLength!==1/0:null!==i.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');r=!cw(i,"customInspect")||i.customInspect;if("boolean"!=typeof r&&"symbol"!==r)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(cw(i,"indent")&&null!==i.indent&&"\t"!==i.indent&&!(parseInt(i.indent,10)===i.indent&&0<i.indent))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(cw(i,"numericSeparator")&&"boolean"!=typeof i.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=i.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return function e(t,r){var n;return t.length>r.maxStringLength?(n="... "+(n=t.length-r.maxStringLength)+" more character"+(1<n?"s":""),e(Mx.call(t,0,r.maxStringLength),r)+n):ow(Fx.call(Fx.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,dw),"single",r)}(t,i);if("number"==typeof t)return 0===t?0<1/0/t?"0":"-0":(l=String(t),s?tw(t,l):l);if("bigint"==typeof t)return l=String(t)+"n",s?tw(t,l):l;s=void 0===i.depth?5:i.depth;if(s<=(n=void 0===n?0:n)&&0<s&&"object"==typeof t)return aw(t)?"[Array]":"[Object]";var w,k,A,E,l=(t=>{var r;if("\t"===i.indent)r="\t";else{if(!("number"==typeof i.indent&&0<i.indent))return null;r=Wx.call(Array(i.indent+1)," ")}return{base:r,prev:Wx.call(Array(t+1),r)}})(n);if(void 0===o)o=[];else if(0<=uw(o,t))return"[Circular]";function d(t,r,a){return r&&(o=Vx.call(o)).push(r),a?(r={depth:i.depth},cw(i,"quoteStyle")&&(r.quoteStyle=i.quoteStyle),e(t,r,n+1,o)):e(t,i,n+1,o)}if("function"==typeof t)return"[Function"+((s=(e=>e.name||((e=Nx.call(Bx.call(e),/^function\s*([\w$]+)/))?e[1]:null))(t))?": "+s:" (anonymous)")+"]"+(0<(s=gw(t,d)).length?" { "+Wx.call(s,", ")+" }":"");if(sw(t))return s=Zx?Fx.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):Jx.call(t),"object"!=typeof t||Zx?s:hw(s);if((e=>e&&"object"==typeof e&&("undefined"!=typeof HTMLElement&&e instanceof HTMLElement||"string"==typeof e.nodeName&&"function"==typeof e.getAttribute))(t)){for(var y="<"+zx.call(String(t.nodeName)),g=t.attributes||[],v=0;v<g.length;v++)y+=" "+g[v].name+"="+ow((e=>Fx.call(String(e),/"/g,"&quot;"))(g[v].value),"double",i);return y+=">",t.childNodes&&t.childNodes.length&&(y+="..."),y+"</"+zx.call(String(t.nodeName))+">"}if(aw(t))return 0===t.length?"[]":(s=gw(t,d),l&&!(e=>{for(var t=0;t<e.length;t++)if(0<=uw(e[t],"\n"))return;return 1})(s)?"["+yw(s,l)+"]":"[ "+Wx.call(s,", ")+" ]");if((e=>!("[object Error]"!==pw(e)||Xx&&"object"==typeof e&&Xx in e))(t))return s=gw(t,d),"cause"in t&&!Qx.call(t,"cause")?"{ ["+String(t)+"] "+Wx.call(Hx.call("[cause]: "+d(t.cause),s),", ")+" }":0===s.length?"["+String(t)+"]":"{ ["+String(t)+"] "+Wx.call(s,", ")+" }";if("object"==typeof t&&r){if(nw&&"function"==typeof t[nw])return t[nw]();if("symbol"!==r&&"function"==typeof t.inspect)return t.inspect()}return(e=>{if(Ex&&e&&"object"==typeof e)try{Ex.call(e);try{Cx.call(e)}catch(e){return 1}return e instanceof Map}catch(e){}})(t)?(w=[],Ox.call(t,function(e,r){w.push(d(r,t,!0)+" => "+d(e,t))}),mw("Map",Ex.call(t),w,l)):(e=>{if(Cx&&e&&"object"==typeof e)try{Cx.call(e);try{Ex.call(e)}catch(e){return 1}return e instanceof Set}catch(e){}})(t)?(k=[],jx.call(t,function(e){k.push(d(e,t))}),mw("Set",Cx.call(t),k,l)):(e=>{if(Ix&&e&&"object"==typeof e)try{Ix.call(e,Ix);try{Px.call(e,Px)}catch(e){return 1}return e instanceof WeakMap}catch(e){}})(t)?fw("WeakMap"):(e=>{if(Px&&e&&"object"==typeof e)try{Px.call(e,Px);try{Ix.call(e,Ix)}catch(e){return 1}return e instanceof WeakSet}catch(e){}})(t)?fw("WeakSet"):(e=>{if(Rx&&e&&"object"==typeof e)try{return Rx.call(e),1}catch(e){}})(t)?fw("WeakRef"):(e=>!("[object Number]"!==pw(e)||Xx&&"object"==typeof e&&Xx in e))(t)?hw(d(Number(t))):(e=>{if(e&&"object"==typeof e&&Yx)try{return Yx.call(e),1}catch(e){}})(t)?hw(d(Yx.call(t))):(e=>!("[object Boolean]"!==pw(e)||Xx&&"object"==typeof e&&Xx in e))(t)?hw(Lx.call(t)):(e=>!("[object String]"!==pw(e)||Xx&&"object"==typeof e&&Xx in e))(t)?hw(d(String(t))):(e=>!("[object Date]"!==pw(e)||Xx&&"object"==typeof e&&Xx in e))(t)||(e=>!("[object RegExp]"!==pw(e)||Xx&&"object"==typeof e&&Xx in e))(t)?String(t):(s=gw(t,d),r=ew?ew(t)===Object.prototype:t instanceof Object||t.constructor===Object,A=t instanceof Object?"":"null prototype",E=!r&&Xx&&Object(t)===t&&Xx in t?Mx.call(pw(t),8,-1):A?"Object":"",r=(!r&&"function"==typeof t.constructor&&t.constructor.name?t.constructor.name+" ":"")+(E||A?"["+Wx.call(Hx.call([],E||[],A||[]),": ")+"] ":""),0===s.length?r+"{}":l?r+"{"+yw(s,l)+"}":r+"{ "+Wx.call(s,", ")+" }")},ww=ua("%TypeError%"),kw=ua("%WeakMap%",!0),Sw=ua("%Map%",!0),$w=bw("WeakMap.prototype.get",!0),Aw=bw("WeakMap.prototype.set",!0),Ew=bw("WeakMap.prototype.has",!0),Ow=bw("Map.prototype.get",!0),Tw=bw("Map.prototype.set",!0),_w=bw("Map.prototype.has",!0),Cw=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r},jw=String.prototype.replace,Iw=/%20/g,pa="RFC3986",bl={default:pa,formatters:{RFC1738:function(e){return jw.call(e,Iw,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:pa},Lw=bl,Dw=Object.prototype.hasOwnProperty,Bw=Array.isArray,Nw=(()=>{for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e})(),ol={arrayToObject:Mw,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],a=Object.keys(i),s=0;s<a.length;++s){var l=a[s],c=i[l];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:i,prop:l}),r.push(c))}return(e=>{for(;1<e.length;){var t=e.pop(),r=t.obj[t.prop];if(Bw(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}})(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,n,o){if(0===e.length)return e;var i=e;if("symbol"==typeof e?i=Symbol.prototype.toString.call(e):"string"!=typeof e&&(i=String(e)),"iso-8859-1"===r)return escape(i).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var a="",s=0;s<i.length;++s){var l=i.charCodeAt(s);45===l||46===l||95===l||126===l||48<=l&&l<=57||65<=l&&l<=90||97<=l&&l<=122||o===Lw.RFC1738&&(40===l||41===l)?a+=i.charAt(s):l<128?a+=Nw[l]:l<2048?a+=Nw[192|l>>6]+Nw[128|63&l]:l<55296||57344<=l?a+=Nw[224|l>>12]+Nw[128|l>>6&63]+Nw[128|63&l]:(s+=1,l=65536+((1023&l)<<10|1023&i.charCodeAt(s)),a+=Nw[240|l>>18]+Nw[128|l>>12&63]+Nw[128|l>>6&63]+Nw[128|63&l])}return a},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(Bw(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(Bw(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!Dw.call(Object.prototype,r))&&(t[r]=!0)}return t}var o;return t&&"object"==typeof t?(Bw(o=t)&&!Bw(r)&&(o=Mw(t,n)),Bw(t)&&Bw(r)?(r.forEach(function(r,o){var i;Dw.call(t,o)?(i=t[o])&&"object"==typeof i&&r&&"object"==typeof r?t[o]=e(i,r,n):t.push(r):t[o]=r}),t):Object.keys(r).reduce(function(t,o){var i=r[o];return Dw.call(t,o)?t[o]=e(t[o],i,n):t[o]=i,t},o)):[t].concat(r)}},Uw=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new ww("Side channel does not contain "+xw(e))},get:function(n){if(kw&&n&&("object"==typeof n||"function"==typeof n)){if(e)return $w(e,n)}else if(Sw){if(t)return Ow(t,n)}else if(r)return(e=>(e=Cw(e,n))&&e.value)(r)},has:function(n){if(kw&&n&&("object"==typeof n||"function"==typeof n)){if(e)return Ew(e,n)}else if(Sw){if(t)return _w(t,n)}else if(r)return!!Cw(r,n);return!1},set:function(n,o){kw&&n&&("object"==typeof n||"function"==typeof n)?(e=e||new kw,Aw(e,n,o)):Sw?(t=t||new Sw,Tw(t,n,o)):((e,t,r)=>{var n=Cw(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r}})(r=r||{key:{},next:null},n,o)}};return n},zw=ol,qw=bl,Hw=Object.prototype.hasOwnProperty,Ww={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},Vw=Array.isArray,Gw=String.prototype.split,Yw=Array.prototype.push,Kw=function(e,t){Yw.apply(e,Vw(t)?t:[t])},Jw=Date.prototype.toISOString,ee=qw.default,Xw={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:zw.encode,encodeValuesOnly:!1,format:ee,formatter:qw.formatters[ee],indices:!1,serializeDate:function(e){return Jw.call(e)},skipNulls:!1,strictNullHandling:!1},Qw={},ek=function e(t,r,n,o,i,a,s,l,c,p,u,d,h,f,m){for(var y=t,g=m,v=0,b=!1;void 0!==(g=g.get(Qw))&&!b;){var x=g.get(t);if(v+=1,void 0!==x){if(x===v)throw new RangeError("Cyclic object value");b=!0}void 0===g.get(Qw)&&(v=0)}if("function"==typeof s?y=s(r,y):y instanceof Date?y=p(y):"comma"===n&&Vw(y)&&(y=zw.maybeMap(y,function(e){return e instanceof Date?p(e):e})),null===y){if(o)return a&&!h?a(r,Xw.encoder,f,"key",u):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||"symbol"==typeof y||"bigint"==typeof y||zw.isBuffer(y)){if(a){var w=h?r:a(r,Xw.encoder,f,"key",u);if("comma"===n&&h){for(var k=Gw.call(String(y),","),S="",$=0;$<k.length;++$)S+=(0===$?"":",")+d(a(k[$],Xw.encoder,f,"value",u));return[d(w)+"="+S]}return[d(w)+"="+d(a(y,Xw.encoder,f,"value",u))]}return[d(r)+"="+d(String(y))]}var A,E=[];if(void 0!==y){A="comma"===n&&Vw(y)?[{value:0<y.length?y.join(",")||null:void 0}]:Vw(s)?s:(w=Object.keys(y),l?w.sort(l):w);for(var T=0;T<A.length;++T){var I,_=A[T],C="object"==typeof _&&void 0!==_.value?_.value:y[_];i&&null===C||(_=Vw(y)?"function"==typeof n?n(r,_):r:r+(c?"."+_:"["+_+"]"),m.set(t,v),(I=Uw()).set(Qw,m),Kw(E,e(C,_,n,o,i,a,s,l,c,p,u,d,h,f,I)))}}return E},tk=ol,rk=Object.prototype.hasOwnProperty,nk=Array.isArray,ok={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:tk.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},ik=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},ak=function(e,t){return e&&"string"==typeof e&&t.comma&&-1<e.indexOf(",")?e.split(","):e},sk=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=0<r.depth&&/(\[[^[\]]*])/.exec(o),e=a?o.slice(0,a.index):o,l=[];if(e){if(!r.plainObjects&&rk.call(Object.prototype,e)&&!r.allowPrototypes)return;l.push(e)}for(var c=0;0<r.depth&&null!==(a=i.exec(o))&&c<r.depth;){if(c+=1,!r.plainObjects&&rk.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(a[1])}return a&&l.push("["+o.slice(a.index)+"]"),((e,t,r,n)=>{for(var o=n?t:ak(t,r),i=e.length-1;0<=i;--i){var a,l,c,s=e[i];"[]"===s&&r.parseArrays?a=[].concat(o):(a=r.plainObjects?Object.create(null):{},l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(l,10),r.parseArrays||""!==l?!isNaN(c)&&s!==l&&String(c)===l&&0<=c&&r.parseArrays&&c<=r.arrayLimit?(a=[])[c]=o:"__proto__"!==l&&(a[l]=o):a={0:o}),o=a}return o})(l,t,r,n)}},ck=function(e,t){var n=e,o=(e=>{if(!e)return Xw;if(null!=e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||Xw.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=qw.default;if(void 0!==e.format){if(!Hw.call(qw.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=qw.formatters[r],o=Xw.filter;return"function"!=typeof e.filter&&!Vw(e.filter)||(o=e.filter),{addQueryPrefix:("boolean"==typeof e.addQueryPrefix?e:Xw).addQueryPrefix,allowDots:void 0===e.allowDots?Xw.allowDots:!!e.allowDots,charset:t,charsetSentinel:("boolean"==typeof e.charsetSentinel?e:Xw).charsetSentinel,delimiter:(void 0===e.delimiter?Xw:e).delimiter,encode:("boolean"==typeof e.encode?e:Xw).encode,encoder:("function"==typeof e.encoder?e:Xw).encoder,encodeValuesOnly:("boolean"==typeof e.encodeValuesOnly?e:Xw).encodeValuesOnly,filter:o,format:r,formatter:n,serializeDate:("function"==typeof e.serializeDate?e:Xw).serializeDate,skipNulls:("boolean"==typeof e.skipNulls?e:Xw).skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:("boolean"==typeof e.strictNullHandling?e:Xw).strictNullHandling}})(t);"function"==typeof o.filter?n=(0,o.filter)("",n):Vw(o.filter)&&(r=o.filter);var a=[];if("object"!=typeof n||null===n)return"";var e=t&&t.arrayFormat in Ww?t.arrayFormat:!(t&&"indices"in t)||t.indices?"indices":"repeat",s=Ww[e],r=r||Object.keys(n);o.sort&&r.sort(o.sort);for(var l=Uw(),c=0;c<r.length;++c){var p=r[c];o.skipNulls&&null===n[p]||Kw(a,ek(n[p],p,s,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,l))}t=a.join(o.delimiter),e=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?e+="utf8=%26%2310003%3B&":e+="utf8=%E2%9C%93&"),0<t.length?e+t:""};function pk(e){return null==e}var uk={isNothing:pk,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:pk(e)?[]:[e]},repeat:function(e,t){for(var n="",r=0;r<t;r+=1)n+=e;return n},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var r,n,o,i;if(t)for(r=0,n=(i=Object.keys(t)).length;r<n;r+=1)e[o=i[r]]=t[o];return e}};function dk(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+="\n\n"+e.mark.snippet),n+" "+r):n}function hk(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=dk(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}((hk.prototype=Object.create(Error.prototype)).constructor=hk).prototype.toString=function(e){return this.name+": "+dk(this,e)};var fk=hk;function mk(e,t,r,n,o){var i="",a="",o=Math.floor(o/2)-1;return o<n-t&&(t=n-o+(i=" ... ").length),o<r-n&&(r=n+o-(a=" ...").length),{str:i+e.slice(t,r).replace(/\t/g,"→")+a,pos:n-t+i.length}}function yk(e,t){return uk.repeat(" ",t-e.length)+e}function bk(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===gk.indexOf(t))throw new fk('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=(e=>{var t={};return null!==e&&Object.keys(e).forEach(function(r){e[r].forEach(function(e){t[String(e)]=r})}),t})(t.styleAliases||null),-1===vk.indexOf(this.kind))throw new fk('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var gk=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],vk=["scalar","sequence","mapping"];function xk(e,t){var r=[];return e[t].forEach(function(e){var t=r.length;r.forEach(function(r,n){r.tag===e.tag&&r.kind===e.kind&&r.multi===e.multi&&(t=n)}),r[t]=e}),r}function wk(e){return this.extend(e)}wk.prototype.extend=function(e){var t=[],r=[];if(e instanceof bk)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new fk("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach(function(e){if(!(e instanceof bk))throw new fk("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new fk("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new fk("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(e){if(!(e instanceof bk))throw new fk("Specified list of YAML types (or a single Type object) contains a non-Type object.")});e=Object.create(wk.prototype);return e.implicit=(this.implicit||[]).concat(t),e.explicit=(this.explicit||[]).concat(r),e.compiledImplicit=xk(e,"implicit"),e.compiledExplicit=xk(e,"explicit"),e.compiledTypeMap=function(){var e,t,r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(e){e.multi?(r.multi[e.kind].push(e),r.multi.fallback.push(e)):r[e.kind][e.tag]=r.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return r}(e.compiledImplicit,e.compiledExplicit),e};Sl=wk,Na=new bk("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),vl=new bk("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),ll=new bk("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),Ds=new Sl({explicit:[Na,vl,ll]}),cr=new bk("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){var t;return null===e||1===(t=e.length)&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),ai=new bk("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){var t;return null!==e&&(4===(t=e.length)&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e))},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});var si=new bk("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r=e.length,n=0,o=!1;if(!r)return!1;if("0"===(t="-"!==(t=e[n])&&"+"!==t?t:e[++n])){if(n+1===r)return!0;if("b"===(t=e[++n])){for(n++;n<r;n++)if("_"!==(t=e[n])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(n++;n<r;n++)if("_"!==(t=e[n])){if(!(e=>48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102)(e.charCodeAt(n)))return!1;o=!0}return o&&"_"!==t}if("o"===t){for(n++;n<r;n++)if("_"!==(t=e[n])){if(!(e=>48<=e&&e<=55)(e.charCodeAt(n)))return!1;o=!0}return o&&"_"!==t}}if("_"===t)return!1;for(;n<r;n++)if("_"!==(t=e[n])){if(!(e=>48<=e&&e<=57)(e.charCodeAt(n)))return!1;o=!0}return!(!o||"_"===t)},construct:function(e){var t,n=1;if("-"!==(t=(e=-1!==e.indexOf("_")?e.replace(/_/g,""):e)[0])&&"+"!==t||("-"===t&&(n=-1),t=(e=e.slice(1))[0]),"0"===e)return 0;if("0"===t){if("b"===e[1])return n*parseInt(e.slice(2),2);if("x"===e[1])return n*parseInt(e.slice(2),16);if("o"===e[1])return n*parseInt(e.slice(2),8)}return n*parseInt(e,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!uk.isNegativeZero(e)},represent:{binary:function(e){return 0<=e?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return 0<=e?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return 0<=e?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Pk=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Rk=/^[-+]?[0-9]+e/,Ka=new bk("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Pk.test(e)||"_"===e[e.length-1])},construct:function(e){var r="-"===(e=e.replace(/_/g,"").toLowerCase())[0]?-1:1;return".inf"===(e=0<="+-".indexOf(e[0])?e.slice(1):e)?1==r?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:r*parseFloat(e,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||uk.isNegativeZero(e))},represent:function(e,t){if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(uk.isNegativeZero(e))return"-0.0";return t=e.toString(10),Rk.test(t)?t.replace("e",".e"):t},defaultStyle:"lowercase"}),al=Ds.extend({implicit:[cr,ai,si,Ka]}),ft=al,Nk=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Mk=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),ul=new bk("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==Nk.exec(e)||null!==Mk.exec(e))},construct:function(e){var n,o,i,a,s,t,c=0,p=null;if(null===(t=null===(t=Nk.exec(e))?Mk.exec(e):t))throw new Error("Date resolve error");if(e=+t[1],n=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(e,n,o));if(i=+t[4],a=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9])&&(p=-p),t=new Date(Date.UTC(e,n,o,i,a,s,c)),p&&t.setTime(t.getTime()-p),t},instanceOf:Date,represent:function(e){return e.toISOString()}}),ni=new bk("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),zk="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",Rt=new bk("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;for(var t,n=0,o=e.length,i=zk,r=0;r<o;r++)if(!(64<(t=i.indexOf(e.charAt(r))))){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){for(var n=e.replace(/[\r\n=]/g,""),o=n.length,i=zk,a=0,s=[],t=0;t<o;t++)t%4==0&&t&&(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)),a=a<<6|i.indexOf(n.charAt(t));return 0==(e=o%4*6)?(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)):18==e?(s.push(a>>10&255),s.push(a>>2&255)):12==e&&s.push(a>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){for(var r,n="",o=0,i=e.length,a=zk,t=0;t<i;t++)t%3==0&&t&&(n=(n=n+a[o>>18&63]+a[o>>12&63])+a[o>>6&63]+a[63&o]),o=(o<<8)+e[t];return 0==(r=i%3)?n=(n=n+a[o>>18&63]+a[o>>12&63])+a[o>>6&63]+a[63&o]:2==r?n=(n=n+a[o>>10&63]+a[o>>4&63])+a[o<<2&63]+a[64]:1==r&&(n=(n=n+a[o>>2&63]+a[o<<4&63])+a[64]+a[64]),n}}),Hk=Object.prototype.hasOwnProperty,Wk=Object.prototype.toString,ei=new bk("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null!==e)for(var n,o,i,a=[],s=e,t=0,r=s.length;t<r;t+=1){if(n=s[t],i=!1,"[object Object]"!==Wk.call(n))return!1;for(o in n)if(Hk.call(n,o)){if(i)return!1;i=!0}if(!i)return!1;if(-1!==a.indexOf(o))return!1;a.push(o)}return!0},construct:function(e){return null!==e?e:[]}}),Gk=Object.prototype.toString,Ct=new bk("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null!==e)for(var n,o,a=e,i=new Array(a.length),t=0,r=a.length;t<r;t+=1){if(n=a[t],"[object Object]"!==Gk.call(n))return!1;if(1!==(o=Object.keys(n)).length)return!1;i[t]=[o[0],n[o[0]]]}return!0},construct:function(e){if(null===e)return[];for(var n,o,a=e,i=new Array(a.length),t=0,r=a.length;t<r;t+=1)n=a[t],o=Object.keys(n),i[t]=[o[0],n[o[0]]];return i}}),Kk=Object.prototype.hasOwnProperty,zs=new bk("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null!==e){var t,r=e;for(t in r)if(Kk.call(r,t)&&null!==r[t])return!1}return!0},construct:function(e){return null!==e?e:{}}}),Zk=ft.extend({implicit:[ul,ni],explicit:[Rt,ei,Ct,zs]}),Xk=Object.prototype.hasOwnProperty,Qk=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,eS=/[\x85\u2028\u2029]/,tS=/[,\[\]\{\}]/,rS=/^(?:!|!!|![a-z\-]+!)$/i,nS=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function oS(e){return Object.prototype.toString.call(e)}function iS(e){return 10===e||13===e}function aS(e){return 9===e||32===e}function sS(e){return 9===e||32===e||10===e||13===e}function lS(e){return 44===e||91===e||93===e||123===e||125===e}function dS(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}for(var fS=new Array(256),mS=new Array(256),yS=0;yS<256;yS++)fS[yS]=dS(yS)?1:0,mS[yS]=dS(yS);function gS(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||Zk,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function vS(e,t){e={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return e.snippet=((e,t)=>{if(t=Object.create(null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var r,n=/\r?\n|\r|\0/g,o=[0],i=[],a=-1;r=n.exec(e.buffer);)i.push(r.index),o.push(r.index+r[0].length),e.position<=r.index&&a<0&&(a=o.length-2);a<0&&(a=o.length-1);for(var l,c="",p=Math.min(e.line+t.linesAfter,i.length).toString().length,u=t.maxLength-(t.indent+p+3),s=1;s<=t.linesBefore&&!(a-s<0);s++)l=mk(e.buffer,o[a-s],i[a-s],e.position-(o[a]-o[a-s]),u),c=uk.repeat(" ",t.indent)+yk((e.line-s+1).toString(),p)+" | "+l.str+"\n"+c;for(l=mk(e.buffer,o[a],i[a],e.position,u),c=(c+=uk.repeat(" ",t.indent)+yk((e.line+1).toString(),p)+" | "+l.str+"\n")+(uk.repeat("-",t.indent+p+3+l.pos)+"^\n"),s=1;s<=t.linesAfter&&!(i.length<=a+s);s++)l=mk(e.buffer,o[a+s],i[a+s],e.position-(o[a]-o[a+s]),u),c+=uk.repeat(" ",t.indent)+yk((e.line+s+1).toString(),p)+" | "+l.str+"\n";return c.replace(/\n$/,"")})(e),new fk(t,e)}function bS(e,t){throw vS(e,t)}function xS(e,t){e.onWarning&&e.onWarning.call(null,vS(e,t))}var wS={YAML:function(e,t,r){var o,n;null!==e.version&&bS(e,"duplication of %YAML directive"),1!==r.length&&bS(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))&&bS(e,"ill-formed argument of the YAML directive"),o=parseInt(n[1],10),n=parseInt(n[2],10),1!==o&&bS(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=n<2,1!==n&&2!==n&&xS(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var o;2!==r.length&&bS(e,"TAG directive accepts exactly two arguments"),o=r[1],rS.test(r=r[0])||bS(e,"ill-formed tag handle (first argument) of the TAG directive"),Xk.call(e.tagMap,r)&&bS(e,'there is a previously declared suffix for "'+r+'" tag handle'),nS.test(o)||bS(e,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(t){bS(e,"tag prefix is malformed: "+o)}e.tagMap[r]=o}};function kS(e,t,r,n){var o,i,a,s;if(t<r){if(s=e.input.slice(t,r),n)for(o=0,i=s.length;o<i;o+=1)9===(a=s.charCodeAt(o))||32<=a&&a<=1114111||bS(e,"expected valid JSON character");else Qk.test(s)&&bS(e,"the stream contains non-printable characters");e.result+=s}}function SS(e,t,r,n){var o,i,a,s;for(uk.isObject(r)||bS(e,"cannot merge mappings; the provided source object is unacceptable"),a=0,s=(o=Object.keys(r)).length;a<s;a+=1)i=o[a],Xk.call(t,i)||(t[i]=r[i],n[i]=!0)}function $S(e,t,r,n,o,i,a,s,l){var c,p;if(Array.isArray(o))for(c=0,p=(o=Array.prototype.slice.call(o)).length;c<p;c+=1)Array.isArray(o[c])&&bS(e,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===oS(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===oS(o)&&(o="[object Object]"),o=String(o),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(i))for(c=0,p=i.length;c<p;c+=1)SS(e,t,i[c],r);else SS(e,t,i,r);else e.json||Xk.call(r,o)||!Xk.call(t,o)||(e.line=a||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,bS(e,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(t,o,{configurable:!0,enumerable:!0,writable:!0,value:i}):t[o]=i,delete r[o];return t}function AS(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):bS(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ES(e,t,r){for(var n=0,o=e.input.charCodeAt(e.position);0!==o;){for(;aS(o);)9===o&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(t&&35===o)for(;10!==(o=e.input.charCodeAt(++e.position))&&13!==o&&0!==o;);if(!iS(o))break;for(AS(e),o=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position)}return-1!==r&&0!==n&&e.lineIndent<r&&xS(e,"deficient indentation"),n}function OS(e){var t,r=e.position;return(45===(t=e.input.charCodeAt(r))||46===t)&&t===e.input.charCodeAt(r+1)&&t===e.input.charCodeAt(r+2)&&(0===(t=e.input.charCodeAt(r+=3))||sS(t))}function TS(e,t){1===t?e.result+=" ":1<t&&(e.result+=uk.repeat("\n",t-1))}function _S(e,t){var r,n,o=e.tag,i=e.anchor,a=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,bS(e,"tab characters must not be used in indentation")),45===n)&&sS(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,ES(e,!0,-1)&&e.lineIndent<=t)a.push(null),n=e.input.charCodeAt(e.position);else if(r=e.line,IS(e,t,3,!1,!0),a.push(e.result),ES(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&0!==n)bS(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=o,e.anchor=i,e.kind="sequence",e.result=a,!0)}function IS(e,t,r,n,o){var i,a,s,l,c,p,u,f=1,m=!1,y=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,i=a=s=4===r||3===r,n&&ES(e,!0,-1)&&(m=!0,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)),1===f)for(;(e=>{var t,r,n,o,i=!1,a=!1;if(33===(o=e.input.charCodeAt(e.position))){if(null!==e.tag&&bS(e,"duplication of a tag property"),60===(o=e.input.charCodeAt(++e.position))?(i=!0,o=e.input.charCodeAt(++e.position)):33===o?(a=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",t=e.position,i){for(;0!==(o=e.input.charCodeAt(++e.position))&&62!==o;);e.position<e.length?(n=e.input.slice(t,e.position),o=e.input.charCodeAt(++e.position)):bS(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!sS(o);)33===o&&(a?bS(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),rS.test(r)||bS(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),o=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),tS.test(n)&&bS(e,"tag suffix cannot contain flow indicator characters")}n&&!nS.test(n)&&bS(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(t){bS(e,"tag name is malformed: "+n)}return i?e.tag=n:Xk.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:"!"===r?e.tag="!"+n:"!!"===r?e.tag="tag:yaml.org,2002:"+n:bS(e,'undeclared tag handle "'+r+'"'),1}})(e)||(e=>{var t,r;if(38===(r=e.input.charCodeAt(e.position))){for(null!==e.anchor&&bS(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!sS(r)&&!lS(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&bS(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),1}})(e);)ES(e,!0,-1)?(m=!0,s=i,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)):s=!1;if(s=s&&(m||o),1!==f&&4!==r||(n=1===r||2===r?t:t+1,o=e.position-e.lineStart,1===f?s&&(_S(e,o)||((e,t,r)=>{var n,o,i,a,s,l,c,p=e.tag,u=e.anchor,d={},h=Object.create(null),f=null,m=null,y=null,g=!1,v=!1;if(-1===e.firstTabInLine){for(null!==e.anchor&&(e.anchorMap[e.anchor]=d),c=e.input.charCodeAt(e.position);0!==c;){if(g||-1===e.firstTabInLine||(e.position=e.firstTabInLine,bS(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),i=e.line,63!==c&&58!==c||!sS(n)){if(a=e.line,s=e.lineStart,l=e.position,!IS(e,r,2,!1,!0))break;if(e.line===i){for(c=e.input.charCodeAt(e.position);aS(c);)c=e.input.charCodeAt(++e.position);if(58===c)sS(c=e.input.charCodeAt(++e.position))||bS(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&($S(e,d,h,f,m,null,a,s,l),f=m=y=null),o=g=!(v=!0),f=e.tag,m=e.result;else{if(!v)return e.tag=p,e.anchor=u,1;bS(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return e.tag=p,e.anchor=u,1;bS(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(g&&($S(e,d,h,f,m,null,a,s,l),f=m=y=null),o=g=v=!0):g?o=!(g=!1):bS(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=n;if((e.line===i||e.lineIndent>t)&&(g&&(a=e.line,s=e.lineStart,l=e.position),IS(e,t,4,!0,o)&&(g?m=e.result:y=e.result),g||($S(e,d,h,f,m,y,a,s,l),f=m=y=null),ES(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===i||e.lineIndent>t)&&0!==c)bS(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&$S(e,d,h,f,m,null,a,s,l),v&&(e.tag=p,e.anchor=u,e.kind="mapping",e.result=d),v}})(e,o,n))||((e,t)=>{var r,n,o,i,a,s,l,c,p,u,d,h,f=!0,m=e.tag,y=e.anchor,g=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))c=!(a=93),i=[];else{if(123!==h)return;a=125,c=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),h=e.input.charCodeAt(++e.position);0!==h;){if(ES(e,!0,t),(h=e.input.charCodeAt(e.position))===a)return e.position++,e.tag=m,e.anchor=y,e.kind=c?"mapping":"sequence",e.result=i,1;f?44===h&&bS(e,"expected the node content, but found ','"):bS(e,"missed comma between flow collection entries"),d=null,s=l=!1,63===h&&sS(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,ES(e,!0,t)),r=e.line,n=e.lineStart,o=e.position,IS(e,t,1,!1,!0),u=e.tag,p=e.result,ES(e,!0,t),h=e.input.charCodeAt(e.position),!l&&e.line!==r||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),ES(e,!0,t),IS(e,t,1,!1,!0),d=e.result),c?$S(e,i,g,u,p,d,r,n,o):s?i.push($S(e,null,g,u,p,d,r,n,o)):i.push(p),ES(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(f=!0,h=e.input.charCodeAt(++e.position)):f=!1}bS(e,"unexpected end of the stream within a flow collection")})(e,n)?y=!0:(a&&((e,t)=>{var r,n,o,i,a=1,s=!1,l=!1,c=t,p=0,u=!1;if(124===(i=e.input.charCodeAt(e.position)))n=!1;else{if(62!==i)return;n=!0}for(e.kind="scalar",e.result="";0!==i;)if(43===(i=e.input.charCodeAt(++e.position))||45===i)1===a?a=43===i?3:2:bS(e,"repeat of a chomping mode identifier");else{if(!(0<=(o=(e=>48<=e&&e<=57?e-48:-1)(i))))break;0===o?bS(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?bS(e,"repeat of an indentation width identifier"):(c=t+o-1,l=!0)}if(aS(i)){for(;aS(i=e.input.charCodeAt(++e.position)););if(35===i)for(;!iS(i=e.input.charCodeAt(++e.position))&&0!==i;);}for(;0!==i;){for(AS(e),e.lineIndent=0,i=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),iS(i))p++;else{if(e.lineIndent<c){3===a?e.result+=uk.repeat("\n",s?1+p:p):1===a&&s&&(e.result+="\n");break}for(n?aS(i)?(u=!0,e.result+=uk.repeat("\n",s?1+p:p)):u?(u=!1,e.result+=uk.repeat("\n",p+1)):0===p?s&&(e.result+=" "):e.result+=uk.repeat("\n",p):e.result+=uk.repeat("\n",s?1+p:p),l=s=!0,p=0,r=e.position;!iS(i)&&0!==i;)i=e.input.charCodeAt(++e.position);kS(e,r,e.position,!1)}}return 1})(e,n)||((e,t)=>{var r,n,o;if(39===(r=e.input.charCodeAt(e.position))){for(e.kind="scalar",e.result="",e.position++,n=o=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if(kS(e,n,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return 1;n=e.position,e.position++,o=e.position}else iS(r)?(kS(e,n,o,!0),TS(e,ES(e,!1,t)),n=o=e.position):e.position===e.lineStart&&OS(e)?bS(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);bS(e,"unexpected end of the stream within a single quoted scalar")}})(e,n)||((e,t)=>{var r,n,o,i,a,s;if(34===(s=e.input.charCodeAt(e.position))){for(e.kind="scalar",e.result="",e.position++,r=n=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return kS(e,r,e.position,!0),e.position++,1;if(92===s){if(kS(e,r,e.position,!0),iS(s=e.input.charCodeAt(++e.position)))ES(e,!1,t);else if(s<256&&fS[s])e.result+=mS[s],e.position++;else if(0<(a=(e=>120===e?2:117===e?4:85===e?8:0)(s))){for(o=a,i=0;0<o;o--)0<=(a=(e=>48<=e&&e<=57?e-48:97<=(e=32|e)&&e<=102?e-97+10:-1)(s=e.input.charCodeAt(++e.position)))?i=(i<<4)+a:bS(e,"expected hexadecimal character");e.result+=(e=>e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023)))(i),e.position++}else bS(e,"unknown escape sequence");r=n=e.position}else iS(s)?(kS(e,r,n,!0),TS(e,ES(e,!1,t)),r=n=e.position):e.position===e.lineStart&&OS(e)?bS(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}bS(e,"unexpected end of the stream within a double quoted scalar")}})(e,n)?y=!0:(e=>{var t,n;if(42===(n=e.input.charCodeAt(e.position))){for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!sS(n)&&!lS(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&bS(e,"name of an alias node must contain at least one character"),t=e.input.slice(t,e.position),Xk.call(e.anchorMap,t)||bS(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ES(e,!0,-1),1}})(e)?(y=!0,null===e.tag&&null===e.anchor||bS(e,"alias node should not have any properties")):((e,t,r)=>{var n,o,i,a,s,l,c,p,u=e.kind,d=e.result;if(!sS(p=e.input.charCodeAt(e.position))&&!lS(p)&&35!==p&&38!==p&&42!==p&&33!==p&&124!==p&&62!==p&&39!==p&&34!==p&&37!==p&&64!==p&&96!==p&&(63!==p&&45!==p||!(sS(n=e.input.charCodeAt(e.position+1))||r&&lS(n)))){for(e.kind="scalar",e.result="",o=i=e.position,a=!1;0!==p;){if(58===p){if(sS(n=e.input.charCodeAt(e.position+1))||r&&lS(n))break}else if(35===p){if(sS(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&OS(e)||r&&lS(p))break;if(iS(p)){if(s=e.line,l=e.lineStart,c=e.lineIndent,ES(e,!1,-1),t<=e.lineIndent){a=!0,p=e.input.charCodeAt(e.position);continue}e.position=i,e.line=s,e.lineStart=l,e.lineIndent=c;break}}a&&(kS(e,o,i,!1),TS(e,e.line-s),o=i=e.position,a=!1),aS(p)||(i=e.position+1),p=e.input.charCodeAt(++e.position)}return kS(e,o,i,!1),e.result||(e.kind=u,e.result=d,0)}})(e,n,1===r)&&(y=!0,null===e.tag)&&(e.tag="?"),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===f&&(y=s&&_S(e,o))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&bS(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(Xk.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,l=0,c=(p=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,p[l].tag.length)===p[l].tag){u=p[l];break}u||bS(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&bS(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):bS(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||y}function RS(e,t){t=t||{};var r=new gS(e=0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0))?e.slice(1):e,t),t=e.indexOf("\0");for(-1!==t&&(r.position=t,bS(r,"null byte is not allowed in input")),r.input+="\0";32===r.input.charCodeAt(r.position);)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)(e=>{var t,r,n,o,i=e.position,a=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(o=e.input.charCodeAt(e.position))&&(ES(e,!0,-1),o=e.input.charCodeAt(e.position),!(0<e.lineIndent||37!==o));){for(a=!0,o=e.input.charCodeAt(++e.position),t=e.position;0!==o&&!sS(o);)o=e.input.charCodeAt(++e.position);for(n=[],(r=e.input.slice(t,e.position)).length<1&&bS(e,"directive name must not be less than one character in length");0!==o;){for(;aS(o);)o=e.input.charCodeAt(++e.position);if(35===o){for(;0!==(o=e.input.charCodeAt(++e.position))&&!iS(o););break}if(iS(o))break;for(t=e.position;0!==o&&!sS(o);)o=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==o&&AS(e),Xk.call(wS,r)?wS[r](e,r,n):xS(e,'unknown document directive "'+r+'"')}ES(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,ES(e,!0,-1)):a&&bS(e,"directives end mark is expected"),IS(e,e.lineIndent-1,4,!1,!0),ES(e,!0,-1),e.checkLineBreaks&&eS.test(e.input.slice(i,e.position))&&xS(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&OS(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,ES(e,!0,-1)):e.position<e.length-1&&bS(e,"end of the stream or a document separator is expected")})(r);return r.documents}var yl={loadAll:function(e,t,r){null!==t&&"object"==typeof t&&void 0===r&&(r=t,t=null);var n=RS(e,r);if("function"!=typeof t)return n;for(var o=0,i=n.length;o<i;o+=1)t(n[o])},load:function(e,t){e=RS(e,t);if(0!==e.length){if(1===e.length)return e[0];throw new fk("expected a single document in the stream, but found more")}}},DS=Object.prototype.toString,BS=Object.prototype.hasOwnProperty,NS={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},MS=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],FS=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function zS(e){this.schema=e.schema||Zk,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=uk.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=((e,t)=>{var r,n,o,i,a,s,l;if(null===t)return{};for(r={},o=0,i=(n=Object.keys(t)).length;o<i;o+=1)a=n[o],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(l=e.compiledTypeMap.fallback[a])&&BS.call(l.styleAliases,s)&&(s=l.styleAliases[s]),r[a]=s;return r})(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function qS(e,t){for(var r,i,n=uk.repeat(" ",t),o=0,a="",s=e.length;o<s;)o=-1===(i=e.indexOf("\n",o))?(r=e.slice(o),s):(r=e.slice(o,i+1),i+1),r.length&&"\n"!==r&&(a+=n),a+=r;return a}function HS(e,t){return"\n"+uk.repeat(" ",e.indent*t)}function WS(e){return 32===e||9===e}function VS(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function GS(e){return VS(e)&&65279!==e&&13!==e&&10!==e}function YS(e,t,r){var n=GS(e),o=n&&!WS(e);return(r?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!o)||GS(t)&&!WS(t)&&35===e||58===t&&o}function KS(e,t){var n=e.charCodeAt(t);return 55296<=n&&n<=56319&&t+1<e.length&&56320<=(e=e.charCodeAt(t+1))&&e<=57343?1024*(n-55296)+e-56320+65536:n}function JS(e){return/^\n* /.test(e)}function ZS(e,t,r,n,o){e.dump=(()=>{if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==MS.indexOf(t)||FS.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var i=e.indent*Math.max(1,r),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-i),s=n||-1<e.flowLevel&&r>=e.flowLevel;switch(((e,t,r,n,o,i,a,s)=>{var l,c=0,p=null,u=!1,d=!1,h=-1!==n,f=-1,m=(e=>VS(e)&&65279!==e&&!WS(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e)(KS(e,0))&&(e=>!WS(e)&&58!==e)(KS(e,e.length-1));if(t||a)for(l=0;l<e.length;65536<=c?l+=2:l++){if(!VS(c=KS(e,l)))return 5;m=m&&YS(c,p,s),p=c}else{for(l=0;l<e.length;65536<=c?l+=2:l++){if(10===(c=KS(e,l)))u=!0,h&&(d=d||n<l-f-1&&" "!==e[f+1],f=l);else if(!VS(c))return 5;m=m&&YS(c,p,s),p=c}d=d||h&&n<l-f-1&&" "!==e[f+1]}return u||d?9<r&&JS(e)?5:a?2===i?5:2:d?4:3:!m||a||o(e)?2===i?5:2:1})(t,s,e.indent,a,function(t){return((e,t)=>{for(var r=0,n=e.implicitTypes.length;r<n;r+=1)if(e.implicitTypes[r].resolve(t))return 1})(e,t)},e.quotingType,e.forceQuotes&&!n,o)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+XS(t,e.indent)+QS(qS(t,i));case 4:return">"+XS(t,e.indent)+QS(qS(((e,t)=>{for(var o,i=/(\n+)([^\n]*)/g,a=(o=-1!==(o=e.indexOf("\n"))?o:e.length,i.lastIndex=o,e$(e.slice(0,o),t)),s="\n"===e[0]||" "===e[0];n=i.exec(e);){var l=n[1],n=n[2],r=" "===n[0];a+=l+(s||r||""===n?"":"\n")+e$(n,t),s=r}return a})(t,a),i));case 5:return'"'+(e=>{for(var t,n,r="",o=0;o<e.length;65536<=n?o+=2:o++)n=KS(e,o),!(t=NS[n])&&VS(n)?(r+=e[o],65536<=n&&(r+=e[o+1])):r+=t||(e=>{var r,n,t=e.toString(16).toUpperCase();if(e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else{if(!(e<=4294967295))throw new fk("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+uk.repeat("0",n-t.length)+t})(n);return r})(t)+'"';default:throw new fk("impossible error: invalid scalar style")}})()}function XS(e,t){var t=JS(e)?String(t):"",n="\n"===e[e.length-1];return t+(!n||"\n"!==e[e.length-2]&&"\n"!==e?n?"":"-":"+")+"\n"}function QS(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function e$(e,t){if(""===e||" "===e[0])return e;for(var n,r,o=/ [^ ]/g,i=0,a=0,l="";r=o.exec(e);)(r=r.index)-i>t&&(l+="\n"+e.slice(i,n=i<a?a:r),i=n+1),a=r;return l+="\n",e.length-i>t&&i<a?l+=e.slice(i,a)+"\n"+e.slice(a+1):l+=e.slice(i),l.slice(1)}function t$(e,t,r,n){for(var a,s="",l=e.tag,o=0,i=r.length;o<i;o+=1)a=r[o],e.replacer&&(a=e.replacer.call(r,String(o),a)),(n$(e,t+1,a,!0,!0,!1,!0)||void 0===a&&n$(e,t+1,null,!0,!0,!1,!0))&&(n&&""===s||(s+=HS(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function r$(e,t,r){for(var n,o,s,l,i=0,a=(o=r?e.explicitTypes:e.implicitTypes).length;i<a;i+=1)if(((s=o[i]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(r?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===DS.call(s.represent))n=s.represent(t,l);else{if(!BS.call(s.represent,l))throw new fk("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');n=s.represent[l](t,l)}e.dump=n}return 1}}function n$(e,t,r,n,o,i,a){e.tag=null,e.dump=r,r$(e,r,!1)||r$(e,r,!0);var l=DS.call(e.dump),c=n;n=n&&(e.flowLevel<0||e.flowLevel>t);var p,u,d="[object Object]"===l||"[object Array]"===l;if(d&&(u=-1!==(p=e.duplicates.indexOf(r))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&0<t)&&(o=!1),u&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&u&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===l)n&&0!==Object.keys(e.dump).length?(((e,t,r,n)=>{var o,i,s,a,c,p="",u=e.tag,d=Object.keys(r);if(!0===e.sortKeys)d.sort();else if("function"==typeof e.sortKeys)d.sort(e.sortKeys);else if(e.sortKeys)throw new fk("sortKeys must be a boolean or a function");for(o=0,i=d.length;o<i;o+=1)c="",n&&""===p||(c+=HS(e,t)),s=r[a=d[o]],e.replacer&&(s=e.replacer.call(r,a,s)),n$(e,t+1,a,!0,!0,!0)&&((a=null!==e.tag&&"?"!==e.tag||e.dump&&1024<e.dump.length)&&(e.dump&&10===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,a&&(c+=HS(e,t)),n$(e,t+1,s,!0,a))&&(e.dump&&10===e.dump.charCodeAt(0)?c+=":":c+=": ",p+=c+=e.dump);e.tag=u,e.dump=p||"{}"})(e,t,e.dump,o),u&&(e.dump="&ref_"+p+e.dump)):(((e,t,r)=>{for(var i,a,s,l="",c=e.tag,p=Object.keys(r),n=0,o=p.length;n<o;n+=1)(s="")!==l&&(s+=", "),e.condenseFlow&&(s+='"'),a=r[i=p[n]],e.replacer&&(a=e.replacer.call(r,i,a)),n$(e,t,i,!1,!1)&&(1024<e.dump.length&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),n$(e,t,a,!1,!1))&&(l+=s+=e.dump);e.tag=c,e.dump="{"+l+"}"})(e,t,e.dump),u&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===l)n&&0!==e.dump.length?(e.noArrayIndent&&!a&&0<t?t$(e,t-1,e.dump,o):t$(e,t,e.dump,o),u&&(e.dump="&ref_"+p+e.dump)):(((e,t,r)=>{for(var i,a="",s=e.tag,n=0,o=r.length;n<o;n+=1)i=r[n],e.replacer&&(i=e.replacer.call(r,String(n),i)),(n$(e,t,i,!1,!1)||void 0===i&&n$(e,t,null,!1,!1))&&(""!==a&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"})(e,t,e.dump),u&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return;if(e.skipInvalid)return;throw new fk("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&ZS(e,e.dump,t,i,c)}null!==e.tag&&"?"!==e.tag&&(r=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),r="!"===e.tag[0]?"!"+r:"tag:yaml.org,2002:"===r.slice(0,18)?"!!"+r.slice(18):"!<"+r+">",e.dump=r+" "+e.dump)}return 1}function i$(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var a$={Type:bk,Schema:Sl,FAILSAFE_SCHEMA:Ds,JSON_SCHEMA:al,CORE_SCHEMA:ft,DEFAULT_SCHEMA:Zk,load:yl.load,loadAll:yl.loadAll,dump:function(e,t){t=new zS(t=t||{}),t.noRefs||((e,t)=>{var r,n,o=[],i=[];for(function e(t,r,n){var o,i,a;if(null!==t&&"object"==typeof t)if(-1!==(i=r.indexOf(t)))-1===n.indexOf(i)&&n.push(i);else if(r.push(t),Array.isArray(t))for(i=0,a=t.length;i<a;i+=1)e(t[i],r,n);else for(i=0,a=(o=Object.keys(t)).length;i<a;i+=1)e(t[o[i]],r,n)}(e,o,i),r=0,n=i.length;r<n;r+=1)t.duplicates.push(o[i[r]]);t.usedDuplicates=new Array(n)})(e,t);return t.replacer&&(e=t.replacer.call({"":e},"",e)),n$(t,0,e,!0,!0)?t.dump+"\n":""},YAMLException:fk,types:{binary:Rt,float:Ka,map:ll,null:cr,pairs:Ct,set:zs,timestamp:ul,bool:ai,int:si,merge:ni,omap:ei,seq:vl,str:Na},safeLoad:i$("safeLoad","load"),safeLoadAll:i$("safeLoadAll","loadAll"),safeDump:i$("safeDump","dump")};let s$="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window,{FormData:l$,Blob:c$,File:p$}=s$;function u$(e){return(e=>{if(xh(e))return $f(e)})(e)||(e=>{if(void 0!==Xd&&null!=bh(e)||null!=e["@@iterator"])return Sf(e)})(e)||Af(e)||(()=>{throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function h$(e){return-1<":/?#[]@!$&'()*+,;=".indexOf(e)}function f$(e){return/^[a-z0-9\-._~]+$/i.test(e)}var d$=Fh;function m$(e,argument_1,argument_2){var n=(1<arguments.length&&void 0!==argument_1?argument_1:{}).escape,argument_1=2<arguments.length?argument_2:void 0;return"string"==typeof(e="number"==typeof e?e.toString():e)&&e.length&&n?argument_1?JSON.parse(e):$b(argument_2=u$(e)).call(argument_2,function(e){var o;return f$(e)||h$(e)&&"unsafe"===n?e:(o=new TextEncoder,$b(e=$b(o=Xv(o.encode(e))).call(o,function(e){return d$(e="0".concat(e.toString(16).toUpperCase())).call(e,-2)})).call(e,function(e){return"%".concat(e)}).join(""))}).join(""):e}function y$(e){var t=e.value;return(Array.isArray(t)?e=>{function a(e){return m$(e,{escape:i})}var t=e.key,r=e.value,n=e.style,o=e.explode,i=e.escape;return"simple"===n?$b(r).call(r,a).join(","):"label"===n?".".concat($b(r).call(r,a).join(".")):"matrix"===n?$b(r).call(r,a).reduce(function(e,r){var a;return!e||o?Cb(a=Cb(a="".concat(e||"",";")).call(a,t,"=")).call(a,r):Cb(a="".concat(e,",")).call(a,r)},""):"form"===n?(e=o?"&".concat(t,"="):",",$b(r).call(r,a).join(e)):"spaceDelimited"===n?(e=o?"".concat(t,"="):"",$b(r).call(r,a).join(" ".concat(e))):"pipeDelimited"===n?(e=o?"".concat(t,"="):"",$b(r).call(r,a).join("|".concat(e))):void 0}:"object"===Tf(t)?e=>{function a(e){return m$(e,{escape:i})}var t=e.key,r=e.value,n=e.style,o=e.explode,i=e.escape,e=Ab(r);return"simple"===n?e.reduce(function(e,t){var l=a(r[t]),c=o?"=":",",e=e?"".concat(e,","):"";return Cb(t=Cb(e=Cb(e="".concat(e)).call(e,t)).call(e,c)).call(t,l)},""):"label"===n?e.reduce(function(e,t){var l=a(r[t]),c=o?"=":".",e=e?"".concat(e,"."):".";return Cb(t=Cb(e=Cb(e="".concat(e)).call(e,t)).call(e,c)).call(t,l)},""):"matrix"===n&&o?e.reduce(function(e,t){var i=a(r[t]),e=e?"".concat(e,";"):";";return Cb(e=Cb(e="".concat(e)).call(e,t,"=")).call(e,i)},""):"matrix"===n?e.reduce(function(e,n){var s=a(r[n]),e=e?"".concat(e,","):";".concat(t,"=");return Cb(e=Cb(e="".concat(e)).call(e,n,",")).call(e,s)},""):"form"===n?e.reduce(function(e,t){var c=a(r[t]),e=e?Cb(e="".concat(e)).call(e,o?"&":","):"",u=o?"=":",";return Cb(t=Cb(e=Cb(e="".concat(e)).call(e,t)).call(e,u)).call(t,c)},""):void 0}:e=>{function a(e){return m$(e,{escape:i})}var r=e.key,n=e.value,o=e.style,i=e.escape;return"simple"===o?a(n):"label"===o?".".concat(a(n)):"matrix"===o?Cb(e=";".concat(r,"=")).call(e,a(n)):"form"===o||"deepObject"===o?a(n):void 0})(e)}var v$={serializeRes:S$,mergeInQueryOrForm:R$};function b$(e){return x$.apply(this,arguments)}function x$(){return(x$=Ev(Tv.mark(function e(t){var r,o,n,a,s=arguments;return Tv.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=1<s.length&&void 0!==s[1]?s[1]:{},"object"===Tf(t)&&(t=(r=t).url),r.headers=r.headers||{},v$.mergeInQueryOrForm(r),r.headers&&Ab(r.headers).forEach(function(e){var t=r.headers[e];"string"==typeof t&&(r.headers[e]=t.replace(/\n+/g," "))}),r.requestInterceptor)return e.next=8,r.requestInterceptor(r);e.next=12;break;case 8:if(e.t0=e.sent,e.t0){e.next=11;break}e.t0=r;case 11:r=e.t0;case 12:return n=r.headers["content-type"]||r.headers["Content-Type"],/multipart\/form-data/i.test(n)&&r.body instanceof l$&&(delete r.headers["content-type"],delete r.headers["Content-Type"]),e.prev=14,e.next=17,(r.userFetch||fetch)(r.url,r);case 17:return o=e.sent,e.next=20,v$.serializeRes(o,t,r);case 20:if(o=e.sent,r.responseInterceptor)return e.next=24,r.responseInterceptor(o);e.next=28;break;case 24:if(e.t1=e.sent,e.t1){e.next=27;break}e.t1=o;case 27:o=e.t1;case 28:e.next=39;break;case 30:if(e.prev=30,e.t2=e.catch(14),o){e.next=34;break}throw e.t2;case 34:throw(n=new Error(o.statusText||"response status is ".concat(o.status))).status=o.status,n.statusCode=o.status,n.responseError=e.t2,n;case 39:if(o.ok){e.next=45;break}throw(a=new Error(o.statusText||"response status is ".concat(o.status))).status=o.status,a.statusCode=o.status,a.response=o,a;case 45:return e.abrupt("return",o);case 46:case"end":return e.stop()}},e,null,[[14,30]])}))).apply(this,arguments)}var w$=function(){return/(json|xml|yaml|text)\b/.test(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"")};function S$(e,t){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).loadSpec,n=void 0!==n&&n,i={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:A$(e.headers)},a=i.headers["content-type"],s=n||w$(a);return(s?e.text:e.blob||e.buffer).call(e).then(function(e){if(i.text=e,i.data=e,s)try{var t=((e,t)=>t&&(0===t.indexOf("application/json")||0<t.indexOf("+json"))?JSON.parse(e):a$.load(e))(e,a);i.body=t,i.obj=t}catch(e){i.parseError=e}return i})}function A$(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return"function"!=typeof Zv(e)?{}:Xv(Zv(e).call(e)).reduce(function(e,t){t=_f(t,2);return e[t[0]]=(e=>qv(e).call(e,", ")?e.split(", "):e)(t[1]),e},{})}function E$(e,t){return(t=t||"undefined"==typeof navigator?t:navigator)&&"ReactNative"===t.product?!(!e||"object"!==Tf(e)||"string"!=typeof e.uri):void 0!==p$&&e instanceof p$||void 0!==c$&&e instanceof c$||!!ArrayBuffer.isView(e)||null!==e&&"object"===Tf(e)&&"function"==typeof e.pipe}function O$(e,t){return Array.isArray(e)&&e.some(function(e){return E$(e,t)})}var T$={form:",",spaceDelimited:"%20",pipeDelimited:"|"},_$={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};function C$(e,t,argument_2){var argument_2=2<arguments.length&&void 0!==argument_2&&argument_2,n=t.collectionFormat,o=t.allowEmptyValue,i=t.serializationOption,a=t.encoding,t="object"!==Tf(t)||Array.isArray(t)?t:t.value,l=argument_2?function(e){return e.toString()}:function(e){return encodeURIComponent(e)},c=l(e);return void 0===t&&o?[[c,""]]:E$(t)||O$(t)?[[c,t]]:i?j$(e,t,argument_2,i):a?[Tf(a.style),Tf(a.explode),Tf(a.allowReserved)].some(function(e){return"undefined"!==e})?j$(e,t,argument_2,{style:a.style,explode:a.explode,allowReserved:a.allowReserved}):a.contentType?"application/json"===a.contentType?[[c,l("string"==typeof t?t:vb(t))]]:[[c,l(t.toString())]]:"object"!==Tf(t)?[[c,l(t)]]:Array.isArray(t)&&t.every(function(e){return"object"!==Tf(e)})?[[c,$b(t).call(t,l).join(",")]]:[[c,l(vb(t))]]:"object"!==Tf(t)?[[c,l(t)]]:Array.isArray(t)?"multi"===n?[[c,$b(t).call(t,l)]]:[[c,$b(t).call(t,l).join(_$[n||"csv"])]]:[[c,""]]}function j$(e,t,r,n){function p(e){return m$(e,{escape:c})}var s=n.style||"form",l=void 0===n.explode?"form"===s:n.explode,c=!r&&(n&&n.allowReserved?"unsafe":"reserved"),u=r?function(e){return e}:function(e){return m$(e,{escape:c})};return"object"!==Tf(t)?[[u(e),p(t)]]:Array.isArray(t)?l?[[u(e),$b(t).call(t,p)]]:[[u(e),$b(t).call(t,p).join(T$[s])]]:"deepObject"===s?$b(n=Ab(t)).call(n,function(r){var n;return[u(Cb(n="".concat(e,"[")).call(n,r,"]")),p(t[r])]}):l?$b(r=Ab(t)).call(r,function(e){return[u(e),p(t[e])]}):[[u(e),$b(s=Ab(t)).call(s,function(e){var r;return[Cb(r="".concat(u(e),",")).call(r,p(t[e]))]}).join(",")]]}function P$(e){var t=Ab(e).reduce(function(t,r){var n,o=Ef(C$(r,e[r]));try{for(o.s();!(n=o.n()).done;){var i=_f(n.value,2),a=i[0],s=i[1];t[a]=s}}catch(e){o.e(e)}finally{o.f()}return t},{});return ck(t,{encode:!1,indices:!1})||""}function R$(){var a,f,s,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.url,t=void 0===t?"":t,n=e.query,o=e.form;return o&&(a=Ab(o).some(function(e){e=o[e].value;return E$(e)||O$(e)}),s=e.headers["content-type"]||e.headers["Content-Type"],a||/multipart\/form-data/i.test(s)?(a=(e=>Mb(e).reduce(function(e,t){var r,t=_f(t,2),o=Ef(C$(t[0],t[1],!0));try{for(o.s();!(r=o.n()).done;){var d,i=_f(r.value,2),a=i[0],s=i[1];if(Array.isArray(s)){var l,c=Ef(s);try{for(c.s();!(l=c.n()).done;){var u,p=l.value;ArrayBuffer.isView(p)?(u=new c$([p]),e.append(a,u)):e.append(a,p)}}catch(e){c.e(e)}finally{c.f()}}else ArrayBuffer.isView(s)?(d=new c$([s]),e.append(a,d)):e.append(a,s)}}catch(e){o.e(e)}finally{o.f()}return e},new l$))(e.form),e.body=a):e.body=P$(o),delete e.form),n&&(a=(s=_f(t.split("?"),2))[0],t="",(s=s[1])&&(f=lk(s),Ab(n).forEach(function(e){return delete f[e]}),t=ck(f,{encode:!0})),s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=Fb(t).call(t,function(e){return e}).join("&");return n?"?".concat(n):""}(t,P$(n)),e.url=a+s,delete e.query),e}function L$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D$(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),ku(e,n.key,n)}}function B$(e,t,r){t&&D$(e.prototype,t),r&&D$(e,r),ku(e,"prototype",{writable:!1})}var pi=Eo,M$=Xa.find,F$=!0,jt=("find"in[]&&Array(1).find(function(){F$=!1}),pi({target:"Array",proto:!0,forced:F$},{find:function(e){return M$(this,e,1<arguments.length?arguments[1]:void 0)}}),ic("Array").find),z$=ar,q$=jt,H$=Array.prototype,W$=cl,Ms=Eo,Ub=pt,Y$=Po,K$=_o,J$=No,Z$=Wr,X$=As,Q$=Xi,pr=rc("splice"),tA=Ub.TypeError,rA=Math.max,nA=Math.min;Ms({target:"Array",proto:!0,forced:!pr},{splice:function(e,t){var r,n,o,i,a,s,l=Z$(this),c=J$(l),p=Y$(e,c),e=arguments.length;if(0===e?r=n=0:n=1===e?(r=0,c-p):(r=e-2,nA(rA(K$(t),0),c-p)),9007199254740991<c+r-n)throw tA("Maximum allowed length exceeded");for(o=X$(l,n),i=0;i<n;i++)(a=p+i)in l&&Q$(o,i,l[a]);if(r<(o.length=n)){for(i=p;i<c-n;i++)s=i+r,(a=i+n)in l?l[s]=l[a]:delete l[s];for(i=c;c-n+r<i;i--)delete l[i-1]}else if(n<r)for(i=c-n;p<i;i--)s=i+r-1,(a=i+n-1)in l?l[s]=l[a]:delete l[s];for(i=0;i<r;i++)l[i+p]=arguments[i+2];return l.length=c-n+r,o}});var aA,fa=ic("Array").splice,lA=ar,cA=fa,pA=Array.prototype,uA=globalThis&&globalThis.__extends||(aA=function(e,t){return(aA=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}))(e,t)},function(e,t){function r(){this.constructor=e}aA(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),dA=Object.prototype.hasOwnProperty;function hA(e,t){return dA.call(e,t)}function fA(e){if(Array.isArray(e))for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=""+r;else{if(Object.keys)return Object.keys(e);for(var n in t=[],e)hA(e,n)&&t.push(n)}return t}function mA(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function yA(e){for(var t,r=0,n=e.length;r<n;){if(!(48<=(t=e.charCodeAt(r))&&t<=57))return;r++}return 1}function gA(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function vA(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function bA(e,t){var n,r=[e];for(n in t){var o="object"==typeof t[n]?JSON.stringify(t[n],null,2):t[n];void 0!==o&&r.push(n+": "+o)}return r.join("\n")}var sr=(e=>{function t(t,r,n,o,i){var a=this.constructor,s=e.call(this,bA(t,{name:r,index:n,operation:o,tree:i}))||this;return s.name=r,s.index=n,s.operation=o,s.tree=i,Object.setPrototypeOf(s,a.prototype),s.message=bA(t,{name:r,index:n,operation:o,tree:i}),s}return uA(t,e),t})(Error),wA=sr,SA={add:function(e,t,r){return e[t]=this.value,{newDocument:r}},remove:function(e,t,r){var n=e[t];return delete e[t],{newDocument:r,removed:n}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:function(e,t,r){var n=(n=AA(r,this.path))&&mA(n),o=EA(r,{op:"remove",path:this.from}).removed;return EA(r,{op:"add",path:this.path,value:o}),{newDocument:r,removed:n}},copy:function(e,t,r){var n=AA(r,this.from);return EA(r,{op:"add",path:this.path,value:mA(n)}),{newDocument:r}},test:function(e,t,r){return{newDocument:r,test:CA(e[t],this.value)}},_get:function(e,t,r){return this.value=e[t],{newDocument:r}}},$A={add:function(e,t,r){return yA(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,r){return{newDocument:r,removed:e.splice(t,1)[0]}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:SA.move,copy:SA.copy,test:SA.test,_get:SA._get};function AA(e,t){return""==t?e:(EA(e,e={op:"_get",path:t}),e.value)}function EA(e,t,r,n,o,i){if(void 0===n&&(n=!0),void 0===o&&(o=!0),void 0===i&&(i=0),(r=void 0===r?!1:r)&&("function"==typeof r?r(t,0,e,t.path):TA(t,0)),""===t.path){var a={newDocument:e};if("add"===t.op)a.newDocument=t.value;else if("replace"===t.op)a.newDocument=t.value,a.removed=e;else if("move"===t.op||"copy"===t.op)a.newDocument=AA(e,t.from),"move"===t.op&&(a.removed=e);else if("test"===t.op){if(a.test=CA(e,t.value),!1===a.test)throw new wA("Test operation failed","TEST_OPERATION_FAILED",i,t,e);a.newDocument=e}else if("remove"===t.op)a.removed=e,a.newDocument=null;else if("_get"===t.op)t.value=e;else if(r)throw new wA("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,t,e);return a}n||(e=mA(e));for(var s=(t.path||"").split("/"),l=e,c=1,p=s.length,u=void 0,d=void 0,h=void 0,h="function"==typeof r?r:TA;;){if((d=s[c])&&-1!=d.indexOf("~")&&(d=vA(d)),o&&"__proto__"==d)throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&void 0===u&&(void 0===l[d]?u=s.slice(0,c).join("/"):c==p-1&&(u=t.path),void 0!==u)&&h(t,0,e,u),c++,Array.isArray(l)){if("-"===d)d=l.length;else{if(r&&!yA(d))throw new wA("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,t,e);yA(d)&&(d=~~d)}if(p<=c){if(r&&"add"===t.op&&d>l.length)throw new wA("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,t,e);if(!1===(a=$A[t.op].call(t,l,d,e)).test)throw new wA("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}}else if(p<=c){if(!1===(a=SA[t.op].call(t,l,d,e)).test)throw new wA("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}if(l=l[d],r&&c<p&&(!l||"object"!=typeof l))throw new wA("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,t,e)}}function OA(e,t,r,n,o){if(void 0===n&&(n=!0),void 0===o&&(o=!0),r&&!Array.isArray(t))throw new wA("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(e=mA(e));for(var i=new Array(t.length),a=0,s=t.length;a<s;a++)i[a]=EA(e,t[a],r,!0,o,a),e=i[a].newDocument;return i.newDocument=e,i}function TA(e,t,r,n){if("object"!=typeof e||null===e||Array.isArray(e))throw new wA("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,r);if(!SA[e.op])throw new wA("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,r);if("string"!=typeof e.path)throw new wA("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,r);if(0!==e.path.indexOf("/")&&0<e.path.length)throw new wA('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,r);if(("move"===e.op||"copy"===e.op)&&"string"!=typeof e.from)throw new wA("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&void 0===e.value)throw new wA("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&function e(t){if(void 0===t)return 1;if(t)if(Array.isArray(t)){for(var r=0,n=t.length;r<n;r++)if(e(t[r]))return 1}else if("object"==typeof t)for(var o=fA(t),i=o.length,r=0;r<i;r++)if(e(t[o[r]]))return 1}(e.value))throw new wA("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,r);if(r)if("add"==e.op){var o=e.path.split("/").length,i=n.split("/").length;if(o!==i+1&&o!==i)throw new wA("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,r)}else if("replace"===e.op||"remove"===e.op||"_get"===e.op){if(e.path!==n)throw new wA("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,r)}else if("move"===e.op||"copy"===e.op){o=_A([{op:"_get",path:e.from,value:void 0}],r);if(o&&"OPERATION_PATH_UNRESOLVABLE"===o.name)throw new wA("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,r)}}function _A(e,t,r){try{if(!Array.isArray(e))throw new wA("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)OA(mA(t),mA(e),r||!0);else{r=r||TA;for(var n=0;n<e.length;n++)r(e[n],n,t,void 0)}}catch(e){if(e instanceof wA)return e;throw e}}function CA(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var r,n,o,i=Array.isArray(e),a=Array.isArray(t);if(i&&a){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!CA(e[r],t[r]))return!1}else{if(i!=a)return!1;var s=Object.keys(e);if((n=s.length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!t.hasOwnProperty(s[r]))return!1;for(r=n;0!=r--;)if(!CA(e[o=s[r]],t[o]))return!1}return!0}return e!=e&&t!=t}function PA(e){this.observers=new Map,this.obj=e}function RA(e,t){this.callback=e,this.observer=t}var xf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",JsonPatchError:wA,deepClone:mA,getValueByPointer:AA,applyOperation:EA,applyPatch:OA,applyReducer:function(e,t,r){var n=EA(e,t);if(!1===n.test)throw new wA("Test operation failed","TEST_OPERATION_FAILED",r,t,e);return n.newDocument},validator:TA,validate:_A,_areEquals:CA}),IA=new WeakMap;function LA(e,t){void 0===t&&(t=!1);var r=IA.get(e.object),t=(DA(r.value,e.object,e.patches,"",t),e.patches.length&&OA(r.value,e.patches),e.patches);return 0<t.length&&(e.patches=[],e.callback)&&e.callback(t),t}function DA(e,t,r,n,o){if(t!==e){for(var u,i=fA(t="function"==typeof t.toJSON?t.toJSON():t),a=fA(e),s=!1,l=a.length-1;0<=l;l--){var p,c=e[u=a[l]];!hA(t,u)||void 0===t[u]&&void 0!==c&&!1===Array.isArray(t)?Array.isArray(e)===Array.isArray(t)?(o&&r.push({op:"test",path:n+"/"+gA(u),value:mA(c)}),r.push({op:"remove",path:n+"/"+gA(u)}),s=!0):(o&&r.push({op:"test",path:n,value:e}),r.push({op:"replace",path:n,value:t})):(p=t[u],"object"==typeof c&&null!=c&&"object"==typeof p&&null!=p&&Array.isArray(c)===Array.isArray(p)?DA(c,p,r,n+"/"+gA(u),o):c!==p&&(o&&r.push({op:"test",path:n+"/"+gA(u),value:mA(c)}),r.push({op:"replace",path:n+"/"+gA(u),value:mA(p)})))}if(s||i.length!=a.length)for(l=0;l<i.length;l++)hA(e,u=i[l])||void 0===t[u]||r.push({op:"add",path:n+"/"+gA(u),value:mA(t[u])})}}function NA(e){return(e=>!!e&&"object"==typeof e)(e)&&!(e=>{var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||(e=>e.$$typeof===MA)(e)})(e)}var xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",unobserve:function(e,t){t.unobserve()},observe:function(e,t){var o,r,i,a,n=(e=>IA.get(e))(e);return n?(o=(t=>n.observers.get(t))(t),r=o&&o.observer):(n=new PA(e),IA.set(e,n)),r||(r={},n.value=mA(e),t&&(r.callback=t,r.next=null,i=function(){LA(r)},a=function(){clearTimeout(r.next),r.next=setTimeout(i)},"undefined"!=typeof window)&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a)),r.patches=[],r.object=e,r.unobserve=function(){var t;LA(r),clearTimeout(r.next),t=r,n.observers.delete(t.callback),"undefined"!=typeof window&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},n.observers.set(t,new RA(t,r))),r},generate:LA,compare:function(e,t,r){var n=[];return DA(e,t,n,"",r=void 0===r?!1:r),n}}),MA=(Object.assign({},xf,xt,{JsonPatchError:sr,deepClone:mA,escapePathComponent:gA,unescapePathComponent:vA}),"function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103);function FA(e,t){return!1!==t.clone&&t.isMergeableObject(e)?HA(Array.isArray(e)?[]:{},e,t):e}function UA(e,t,r){return e.concat(t).map(function(e){return FA(e,r)})}function zA(e){return Object.keys(e).concat((e=>Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[])(e))}function qA(e,t){try{return t in e}catch(e){return!1}}function HA(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||UA,r.isMergeableObject=r.isMergeableObject||NA,r.cloneUnlessOtherwiseSpecified=FA;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):((e,t,r)=>{var n={};return r.isMergeableObject(e)&&zA(e).forEach(function(t){n[t]=FA(e[t],r)}),zA(t).forEach(function(o){((e,t)=>qA(e,t)&&(!Object.hasOwnProperty.call(e,t)||!Object.propertyIsEnumerable.call(e,t)))(e,o)||(qA(e,o)&&r.isMergeableObject(t[o])?n[o]=(t=>t.customMerge&&"function"==typeof(t=t.customMerge(o))?t:HA)(r)(e[o],t[o],r):n[o]=FA(t[o],r))}),n})(e,t,r):FA(t,r)}HA.all=function(e,t){if(Array.isArray(e))return e.reduce(function(e,r){return HA(e,r,t)},{});throw new Error("first argument should be an array")};var WA=HA,VA={add:function(e,t){return{op:"add",path:e,value:t}},replace:YA,remove:function(e){return{op:"remove",path:e}},merge:function(e,t){return{type:"mutation",op:"merge",path:e,value:t}},mergeDeep:function(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}},context:function(e,t){return{type:"context",path:e,value:t}},getIn:function(e,t){return t.reduce(function(e,t){return void 0!==t&&e?e[t]:e},e)},applyPatch:function(e,t,r){var n;return r=r||{},"merge"===(t=Au(Au({},t),{},{path:t.path&&GA(t.path)})).op?(n=sE(e,t.path),Mu(n,t.value),OA(e,[YA(t.path,n)])):"mergeDeep"===t.op?(n=sE(e,t.path),n=WA(n,t.value),e=OA(e,[YA(t.path,n)]).newDocument):"add"===t.op&&""===t.path&&tE(t.value)?(n=Ab(t.value).reduce(function(e,r){return e.push({op:"add",path:"/".concat(GA(r)),value:t.value[r]}),e},[]),OA(e,n)):"replace"===t.op&&""===t.path?(n=t.value,e=n=r.allowMetaPatches&&t.meta&&iE(t)&&(Array.isArray(t.value)||tE(t.value))?Au(Au({},n),t.meta):n):(OA(e,[t]),r.allowMetaPatches&&t.meta&&iE(t)&&(Array.isArray(t.value)||tE(t.value))&&(n=Au(Au({},sE(e,t.path)),t.meta),OA(e,[YA(t.path,n)]))),e},parentPathMatch:function(e,t){if(!Array.isArray(t))return!1;for(var r=0,n=t.length;r<n;r+=1)if(t[r]!==e[r])return!1;return!0},flatten:QA,fullyNormalizeArray:function(e){return eE(QA(XA(e)))},normalizeArray:XA,isPromise:function(e){return tE(e)&&rE(e.then)},forEachNew:function(e,t){try{return KA(e,ZA,t)}catch(e){return e}},forEachNewPrimitive:function(e,t){try{return KA(e,JA,t)}catch(e){return e}},isJsonPatch:nE,isContextPatch:function(e){return aE(e)&&"context"===e.type},isPatch:aE,isMutation:oE,isAdditiveMutation:iE,isGenerator:function(e){return"[object GeneratorFunction]"===Object.prototype.toString.call(e)},isFunction:rE,isObject:tE,isError:function(e){return e instanceof Error}};function GA(e){return Array.isArray(e)?e.length<1?"":"/".concat($b(e).call(e,function(e){return(e+"").replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")):e}function YA(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function KA(e,t,r){return eE(QA($b(e=Fb(e).call(e,iE)).call(e,function(e){return t(e.value,r,e.path)})||[]))}function JA(e,t,r){return r=r||[],Array.isArray(e)?$b(e).call(e,function(e,n){return JA(e,t,Cb(r).call(r,n))}):tE(e)?$b(n=Ab(e)).call(n,function(n){return JA(e[n],t,Cb(r).call(r,n))}):t(e,r[r.length-1],r);var n}function ZA(e,t,r){var o,n=[];return 0<(r=r||[]).length&&(o=t(e,r[r.length-1],r))&&(n=Cb(n).call(n,o)),Array.isArray(e)?(o=$b(e).call(e,function(e,n){return ZA(e,t,Cb(r).call(r,n))}))&&(n=Cb(n).call(n,o)):tE(e)&&(o=$b(o=Ab(e)).call(o,function(n){return ZA(e[n],t,Cb(r).call(r,n))}))&&(n=Cb(n).call(n,o)),QA(n)}function XA(e){return Array.isArray(e)?e:[e]}function QA(e){var t;return Cb(t=[]).apply(t,u$($b(e).call(e,function(e){return Array.isArray(e)?QA(e):e})))}function eE(e){return Fb(e).call(e,function(e){return void 0!==e})}function tE(e){return e&&"object"===Tf(e)}function rE(e){return e&&"function"==typeof e}function nE(e){return!!aE(e)&&("add"===(e=e.op)||"remove"===e||"replace"===e)}function oE(e){return nE(e)||aE(e)&&"mutation"===e.type}function iE(e){return oE(e)&&("add"===e.op||"replace"===e.op||"merge"===e.op||"mergeDeep"===e.op)}function aE(e){return e&&"object"===Tf(e)}function sE(e,t){try{return AA(e,t)}catch(e){return console.error(e),{}}}function CE(e){kE(e,TE,{value:{objectID:"O"+_E++,weakData:{}}})}function sO(e){return e.frozen||(e.frozen=new lO)}function lO(){this.entries=[]}function cO(e,t){return nO(e.entries,function(e){return e[0]===t})}var Lt={exports:{}},Fr=ut(function(){var e;"function"==typeof ArrayBuffer&&(e=new ArrayBuffer(8),Object.isExtensible(e))&&Object.defineProperty(e,"a",{value:8})}),sl=ut,uE=Qt,dE=Ft,hE=Fr,fE=Object.isExtensible,ur=sl(function(){fE(1)})||hE?function(e){return!!uE(e)&&(!hE||"ArrayBuffer"!=dE(e))&&(!fE||fE(e))}:fE,ua=!ut(function(){return Object.isExtensible(Object.preventExtensions({}))}),gE=Eo,vE=bt,pa=Ho,xE=Qt,wE=Yr,kE=Kr.f,SE=Wi,$E=Zo,AE=ur,EE=ua,OE=!1,TE=Qr("meta"),_E=0,jE=Lt.exports={enable:function(){jE.enable=function(){},OE=!0;var e=SE.f,t=vE([].splice),r={};r[TE]=1,e(r).length&&(SE.f=function(r){for(var n=e(r),o=0,i=n.length;o<i;o++)if(n[o]===TE){t(n,o,1);break}return n},gE({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:$E.f}))},fastKey:function(e,t){if(!xE(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!wE(e,TE)){if(!AE(e))return"F";if(!t)return"E";CE(e)}return e[TE].objectID},getWeakData:function(e,t){if(!wE(e,TE)){if(!AE(e))return!0;if(!t)return!1;CE(e)}return e[TE].weakData},onFreeze:function(e){return EE&&OE&&AE(e)&&!wE(e,TE)&&CE(e),e}},IE=(pa[TE]=!0,Eo),PE=pt,RE=Lt.exports,LE=ut,DE=nn,BE=Qf,NE=Rm,ME=$t,FE=Qt,UE=_a,zE=Kr.f,qE=Xa.forEach,HE=vt,WE=Ma.set,VE=Ma.getterFor,bl=bt,YE=Om,KE=Lt.exports.getWeakData,JE=ro,ZE=Qt,XE=Rm,QE=Qf,eO=Yr,tO=Ma.set,rO=Ma.getterFor,nO=Xa.find,oO=Xa.findIndex,iO=bl([].splice),aO=0;lO.prototype={get:function(e){e=cO(this,e);if(e)return e[1]},has:function(e){return!!cO(this,e)},set:function(e,t){var r=cO(this,e);r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=oO(this.entries,function(t){return t[0]===e});return~t&&iO(this.entries,t,1),!!~t}};function kO(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}function LO(e,t){var r=e.length,n=RO(r/2);return r<8?((e,t)=>{for(var r,n,o=e.length,i=1;i<o;){for(r=e[n=i];n&&0<t(e[n-1],r);)e[n]=e[--n];n!==i++&&(e[n]=r)}return e})(e,t):((e,t,r,n)=>{for(var o=t.length,i=r.length,a=0,s=0;a<o||s<i;)e[a+s]=a<o&&s<i?n(t[a],r[s])<=0?t[a++]:r[s++]:a<o?t[a++]:r[s++];return e})(e,LO(PO(e,0,n),t),LO(PO(e,n),t),t)}function LT(e){try{return kT(e)}catch(t){return e}}function DT(e){var t=OT(e,IT," "),r=4;try{return kT(t)}catch(e){for(;r;)t=OT(t,(e=>PT[e-1]||(PT[e-1]=xT("((?:%[\\da-f]{2}){"+e+"})","gi")))(r--),LT);return t}}function MT(e){return NT[e]}function FT(e){return OT(ST(e),BT,MT)}function zT(e){this.entries=[],this.url=null,void 0!==e&&(tT(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===$T(e,0)?jT(e,1):e:rT(e)))}function qT(){KO(this,HT),dT(this,new zT(0<arguments.length?arguments[0]:void 0))}var pO,AO,EO,OO,TO,WT,VT,GT,ee=bt,ol=Om,Sl=Lt.exports,Ds={getConstructor:function(e,t,r,n){function s(e,t,r){var n=a(e),o=KE(JE(t),!0);return!0===o?sO(n).set(t,r):o[n.id]=r,e}var e=e(function(e,o){XE(e,i),tO(e,{type:t,id:aO++,frozen:void 0}),null!=o&&QE(o,e[n],{that:e,AS_ENTRIES:r})}),i=e.prototype,a=rO(t);return YE(i,{delete:function(e){var r,t=a(this);return!!ZE(e)&&(!0===(r=KE(e))?sO(t).delete(e):r&&eO(r,t.id)&&delete r[t.id])},has:function(e){var r,t=a(this);return!!ZE(e)&&(!0===(r=KE(e))?sO(t).has(e):r&&eO(r,t.id))}}),YE(i,r?{get:function(e){var r,t=a(this);if(ZE(e))return!0===(r=KE(e))?sO(t).get(e):r?r[t.id]:void 0},set:function(e,t){return s(this,e,t)}}:{add:function(e){return s(this,e,!0)}}),e}},gO=Qt,vO=ur,bO=Ma.enforce,al=ja,ft=!pt.ActiveXObject&&"ActiveXObject"in pt,yl=((e,t,r)=>{var n,p,u,o=-1!==e.indexOf("Map"),i=-1!==e.indexOf("Weak"),a=o?"set":"add",s=PE[e],l=s&&s.prototype,c={};return HE&&ME(s)&&(i||l.forEach&&!LE(function(){(new s).entries().next()}))?(p=(n=t(function(t,r){WE(NE(t,p),{type:e,collection:new s}),null!=r&&BE(r,t[a],{that:t,AS_ENTRIES:o})})).prototype,u=VE(e),qE(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(e){var t="add"==e||"set"==e;e in l&&(!i||"clear"!=e)&&DE(p,e,function(r,n){var o=u(this).collection;return t||!i||FE(r)?(o=o[e](0===r?0:r,n),t?this:o):"get"==e&&void 0})}),i||zE(p,"size",{configurable:!0,get:function(){return u(this).collection.size}})):(n=r.getConstructor(t,e,o,a),RE.enable()),UE(n,e,!1,!0),c[e]=n,IE({global:!0,forced:!0},c),i||r.setStrong(n,e,o),n})("WeakMap",kO,Ds),Ka=(al&&ft&&(pO=Ds.getConstructor(kO,"WeakMap",!0),Sl.enable(),Rt=yl.prototype,AO=ee(Rt.delete),EO=ee(Rt.has),OO=ee(Rt.get),TO=ee(Rt.set),ol(Rt,{delete:function(e){var t;return gO(e)&&!vO(e)?((t=bO(this)).frozen||(t.frozen=new pO),AO(this,e)||t.frozen.delete(e)):AO(this,e)},has:function(e){var t;return gO(e)&&!vO(e)?((t=bO(this)).frozen||(t.frozen=new pO),EO(this,e)||t.frozen.has(e)):EO(this,e)},get:function(e){var t;return!gO(e)||vO(e)||((t=bO(this)).frozen||(t.frozen=new pO),EO(this,e))?OO(this,e):t.frozen.get(e)},set:function(e,t){var r;return!gO(e)||vO(e)||((r=bO(this)).frozen||(r.frozen=new pO),EO(this,e))?TO(this,e,t):r.frozen.set(e,t),this}})),Pt.WeakMap),ll=ut,jO=un("iterator"),cr=!ll(function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach(function(e,n){t.delete("b"),r+=n+e}),!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[jO]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}),PO=oa,RO=Math.floor,Ct=Eo,zs=pt,ul=ir,UO=_t,ai=bt,si=cr,ni=ha,ei=Om,vl=_a,Na=np,pi=Ma,KO=Rm,jt=$t,ZO=Yr,XO=Kn,QO=ci,eT=ro,tT=Qt,rT=bi,nT=Di,oT=Dt,iT=of,aT=vh,sT=zm,lT=LO,cl=un("iterator"),pT="URLSearchParams",uT="URLSearchParamsIterator",dT=pi.set,hT=pi.getterFor(pT),fT=pi.getterFor(uT),mT=ul("fetch"),yT=ul("Request"),gT=ul("Headers"),vT=yT&&yT.prototype,Ub=gT&&gT.prototype,xT=zs.RegExp,wT=zs.TypeError,kT=zs.decodeURIComponent,ST=zs.encodeURIComponent,$T=ai("".charAt),AT=ai([].join),ET=ai([].push),OT=ai("".replace),TT=ai([].shift),_T=ai([].splice),CT=ai("".split),jT=ai("".slice),IT=/\+/g,PT=Array(4),BT=/[!'()~]|%20/g,NT={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},UT=Na(function(e,t){dT(this,{type:uT,iterator:iT(hT(e).entries),kind:t})},"Iterator",function(){var e=fT(this),t=e.kind,e=e.iterator.next(),n=e.value;return e.done||(e.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),e},!0),HT=(zT.prototype={type:pT,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,i,a,s,l=aT(e);if(l)for(r=(t=iT(e,l)).next;!(n=UO(r,t)).done;){if(i=(n=iT(eT(n.value))).next,(a=UO(i,n)).done||(s=UO(i,n)).done||!UO(i,n).done)throw wT("Expected sequence with length 2");ET(this.entries,{key:rT(a.value),value:rT(s.value)})}else for(var c in e)ZO(e,c)&&ET(this.entries,{key:c,value:rT(e[c])})},parseQuery:function(e){if(e)for(var t,n=CT(e,"&"),o=0;o<n.length;)(t=n[o++]).length&&(t=CT(t,"="),ET(this.entries,{key:DT(TT(t)),value:DT(AT(t,"="))}))},serialize:function(){for(var e,t=this.entries,r=[],n=0;n<t.length;)e=t[n++],ET(r,FT(e.key)+"="+FT(e.value));return AT(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}},qT.prototype),KT=(ei(HT,{append:function(e,t){sT(arguments.length,2);var r=hT(this);ET(r.entries,{key:rT(e),value:rT(t)}),r.updateURL()},delete:function(e){sT(arguments.length,1);for(var t=hT(this),r=t.entries,n=rT(e),o=0;o<r.length;)r[o].key===n?_T(r,o,1):o++;t.updateURL()},get:function(e){sT(arguments.length,1);for(var t=hT(this).entries,r=rT(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){sT(arguments.length,1);for(var t=hT(this).entries,r=rT(e),n=[],o=0;o<t.length;o++)t[o].key===r&&ET(n,t[o].value);return n},has:function(e){sT(arguments.length,1);for(var t=hT(this).entries,r=rT(e),n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){sT(arguments.length,1);for(var r,n=hT(this),o=n.entries,i=!1,a=rT(e),s=rT(t),l=0;l<o.length;l++)(r=o[l]).key===a&&(i?_T(o,l--,1):(i=!0,r.value=s));i||ET(o,{key:a,value:s}),n.updateURL()},sort:function(){var e=hT(this);lT(e.entries,function(e,t){return e.key>t.key?1:-1}),e.updateURL()},forEach:function(e){for(var t,r=hT(this).entries,n=XO(e,1<arguments.length?arguments[1]:void 0),o=0;o<r.length;)n((t=r[o++]).value,t.key,this)},keys:function(){return new UT(this,"keys")},values:function(){return new UT(this,"values")},entries:function(){return new UT(this,"entries")}},{enumerable:!0}),ni(HT,cl,HT.entries,{name:"entries"}),ni(HT,"toString",function(){return hT(this).serialize()},{enumerable:!0}),vl(qT,pT),Ct({global:!0,forced:!si},{URLSearchParams:qT}),!si&&jt(gT)&&(WT=ai(Ub.has),VT=ai(Ub.set),GT=function(e){if(tT(e)){var t,r=e.body;if(QO(r)===pT)return t=e.headers?new gT(e.headers):new gT,WT(t,"content-type")||VT(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),nT(e,{body:oT(0,rT(r)),headers:oT(0,t)})}return e},jt(mT)&&Ct({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return mT(e,1<arguments.length?GT(arguments[1]):{})}}),jt(yT))&&((vT.constructor=Ms=function(e){return KO(this,vT),new yT(e,1<arguments.length?GT(arguments[1]):{})}).prototype=vT,Ct({global:!0,forced:!0},{Request:Ms})),Pt.URLSearchParams);function JT(e,t){function r(){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack;for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this.message=r[0],t&&t.apply(this,r)}return(r.prototype=new Error).name=e,r.prototype.constructor=r}var pr={exports:{}},XT=pr.exports=function(e){return new QT(e)};function QT(e){this.value=e}function e_(e,t,r){var n=[],o=[],i=!0;return function e(a){var s=r?t_(a):a,l={},c=!0,p={node:s,node_:a,path:[].concat(n),parent:o[o.length-1],parents:o,key:n.slice(-1)[0],isRoot:0===n.length,level:n.length,circular:null,update:function(e,t){p.isRoot||(p.parent.node[p.key]=e),p.node=e,t&&(c=!1)},delete:function(e){delete p.parent.node[p.key],e&&(c=!1)},remove:function(e){o_(p.parent.node)?p.parent.node.splice(p.key,1):delete p.parent.node[p.key],e&&(c=!1)},keys:null,before:function(e){l.before=e},after:function(e){l.after=e},pre:function(e){l.pre=e},post:function(e){l.post=e},stop:function(){i=!1},block:function(){c=!1}};return i&&(u(),void 0!==(s=t.call(p,p.node))&&p.update&&p.update(s),l.before&&l.before.call(p,p.node),c)&&("object"!=typeof p.node||null===p.node||p.circular||(o.push(p),u(),i_(p.keys,function(t,o){n.push(t),l.pre&&l.pre.call(p,p.node[t],t);var i=e(p.node[t]);r&&a_.call(p.node,t)&&(p.node[t]=i.node),i.isLast=o==p.keys.length-1,i.isFirst=0==o,l.post&&l.post.call(p,i),n.pop()}),o.pop()),l.after)&&l.after.call(p,p.node),p;function u(){if("object"==typeof p.node&&null!==p.node){p.keys&&p.node_===p.node||(p.keys=r_(p.node)),p.isLeaf=0==p.keys.length;for(var e=0;e<o.length;e++)if(o[e].node_===a){p.circular=o[e];break}}else p.isLeaf=!0,p.keys=null;p.notLeaf=!p.isLeaf,p.notRoot=!p.isRoot}}(e).node}function t_(e){var r,n,t;return"object"==typeof e&&null!==e?(t=o_(e)?[]:"[object Date]"===n_(e)?new Date(e.getTime?e.getTime():e):(e=>"[object RegExp]"===n_(e))(e)?new RegExp(e):(e=>"[object Error]"===n_(e))(e)?{message:e.message}:(e=>"[object Boolean]"===n_(e))(e)?new Boolean(e):(e=>"[object Number]"===n_(e))(e)?new Number(e):(e=>"[object String]"===n_(e))(e)?new String(e):Object.create&&Object.getPrototypeOf?Object.create(Object.getPrototypeOf(e)):e.constructor===Object?{}:(r=e.constructor&&e.constructor.prototype||e.__proto__||{},(n=function(){}).prototype=r,new n),i_(r_(e),function(r){t[r]=e[r]}),t):e}QT.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!a_.call(t,n)){t=void 0;break}t=t[n]}return t},QT.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!a_.call(t,n))return!1;t=t[n]}return!0},QT.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var o=e[n];a_.call(r,o)||(r[o]={}),r=r[o]}return r[e[n]]=t},QT.prototype.map=function(e){return e_(this.value,e,!0)},QT.prototype.forEach=function(e){return this.value=e_(this.value,e,!1),this.value},QT.prototype.reduce=function(e,t){var r=1===arguments.length,n=r?this.value:t;return this.forEach(function(t){this.isRoot&&r||(n=e.call(this,n,t))}),n},QT.prototype.paths=function(){var e=[];return this.forEach(function(t){e.push(this.path)}),e},QT.prototype.nodes=function(){var e=[];return this.forEach(function(t){e.push(this.node)}),e},QT.prototype.clone=function(){var e=[],t=[];return function r(n){for(var i,o=0;o<e.length;o++)if(e[o]===n)return t[o];return"object"==typeof n&&null!==n?(i=t_(n),e.push(n),t.push(i),i_(r_(n),function(e){i[e]=r(n[e])}),e.pop(),t.pop(),i):n}(this.value)};var r_=Object.keys||function(e){var r,t=[];for(r in e)t.push(r);return t};function n_(e){return Object.prototype.toString.call(e)}var o_=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i_=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)},a_=(i_(r_(QT.prototype),function(e){XT[e]=function(t){var r=[].slice.call(arguments,1),t=new QT(t);return t[e].apply(t,r)}}),Object.hasOwnProperty||function(e,t){return t in e}),s_=pr.exports,l_=["properties"],c_=["properties"],p_=["definitions","parameters","responses","securityDefinitions","components/schemas","components/responses","components/parameters","components/securitySchemes"],u_=["schema/example","items/example"];function d_(e){var t=e[e.length-1],r=e[e.length-2],n=e.join("/");return-1<l_.indexOf(t)&&-1===c_.indexOf(r)||-1<p_.indexOf(n)||u_.some(function(e){return-1<n.indexOf(e)})}function h_(e,t){var e=_f(e.split("#"),2),o=e[0],e=e[1],o=ld.resolve(o||"",t||"");return e?Cb(t="".concat(o,"#")).call(t,e):o}var f_="application/json, application/yaml",m_=/^([a-z]+:\/\/|\/\/)/i,y_=JT("JSONRefError",function(e,t,r){this.originalError=r,Mu(this,t||{})}),g_={},v_=new Ka,b_=[function(e){return"paths"===e[0]&&"responses"===e[3]&&"examples"===e[5]},function(e){return"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"example"===e[7]},function(e){return"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9]},function(e){return"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"example"===e[6]},function(e){return"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"example"===e[4]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"example"===e[5]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"examples"===e[4]&&"value"===e[6]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"examples"===e[5]&&"value"===e[7]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"example"===e[6]},function(e){return"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"content"===e[4]&&"example"===e[7]},function(e){return"paths"===e[0]&&"parameters"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9]}],x_=Mu({key:"$ref",plugin:function(e,t,r,n){var o=n.getInstance(),i=d$(r).call(r,0,-1);if(!d_(i)&&!(e=>b_.some(function(t){return t(e)}))(i)){var a=n.getContext(r).baseDoc;if("string"!=typeof e)return new y_("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:a,fullPath:r});var s,l,p=S_(e),u=p[0],d=p[1]||"";try{s=a||u?w_(u,a):null}catch(t){return k_(t,{pointer:d,$ref:e,basePath:s,fullPath:r})}if(((e,t,r,n)=>{var p,a=v_.get(n),s=(a||(a={},v_.set(n,a)),(e=>0===e.length?"":"/".concat($b(e).call(e,__).join("/")))(r)),l=Cb(o="".concat(t||"<specmap-base>","#")).call(o,e),o=s.replace(/allOf\/\d+\/?/g,"");return t===n.contextTree.get([]).baseDoc&&C_(o,e)||(p="",r.some(function(e){var t;return p=Cb(t="".concat(p,"/")).call(t,__(e)),a[p]&&a[p].some(function(e){return C_(e,l)||C_(l,e)})}))||void(a[o]=Cb(s=a[o]||[]).call(s,l))})(d,s,i,n)&&!o.useCircularStructures)return p=h_(e,s),e===p?null:VA.replace(r,p);if(null==s?(u=O_(d),void 0===(l=n.get(u))&&(l=new y_("Could not resolve reference: ".concat(e),{pointer:d,$ref:e,baseDoc:a,fullPath:r}))):l=null!=(l=$_(s,d)).__value?l.__value:l.catch(function(t){throw k_(t,{pointer:d,$ref:e,baseDoc:a,fullPath:r})}),l instanceof Error)return[VA.remove(r),l];p=h_(e,s),u=VA.replace(i,l,{$$ref:p});if(s&&s!==a)return[u,VA.context(i,{baseDoc:s})];try{if(!((e,t)=>{var r=[e];return t.path.reduce(function(e,t){return r.push(e[t]),e[t]},e),function e(t){return VA.isObject(t)&&(0<=r.indexOf(t)||Ab(t).some(function(r){return e(t[r])}))}(t.value)})(n.state,u)||o.useCircularStructures)return u}catch(e){return null}}}},{docCache:g_,absoluteify:w_,clearCache:function(e){void 0!==e?delete g_[e]:Ab(g_).forEach(function(e){delete g_[e]})},JSONRefError:y_,wrapError:k_,getDoc:A_,split:S_,extractFromDoc:$_,fetchJSON:function(e){return fetch(e,{headers:{Accept:f_},loadSpec:!0}).then(function(e){return e.text()}).then(function(e){return a$.load(e)})},extract:E_,jsonPointerToArray:O_,unescapeJsonPointerToken:T_});function w_(e,t){if(m_.test(e))return e;if(t)return ld.resolve(t,e);throw new y_(Cb(e="Tried to resolve a relative URL, without having a basePath. path: '".concat(e,"' basePath: '")).call(e,t,"'"))}function k_(e,t){var n=e&&e.response&&e.response.body?Cb(n="".concat(e.response.body.code," ")).call(n,e.response.body.message):e.message;return new y_("Could not resolve reference: ".concat(n),t,e)}function S_(e){return(e+"").split("#")}function $_(e,t){var r=g_[e];if(r&&!VA.isPromise(r))try{var n=E_(t,r);return Mu(W$.resolve(n),{__value:n})}catch(e){return W$.reject(e)}return A_(e).then(function(e){return E_(t,e)})}function A_(e){var t=g_[e];return t?VA.isPromise(t)?t:W$.resolve(t):(g_[e]=x_.fetchJSON(e).then(function(t){return g_[e]=t}),g_[e])}function E_(e,t){var r=O_(e);if(r.length<1)return t;t=VA.getIn(t,r);if(void 0===t)throw new y_("Could not resolve pointer: ".concat(e," does not exist in document"),{pointer:e});return t}function O_(e){if("string"!=typeof e)throw new TypeError("Expected a string, got a ".concat(Tf(e)));return""===(e="/"===e[0]?e.substr(1):e)?[]:$b(e=e.split("/")).call(e,T_)}function T_(e){return"string"!=typeof e?e:new KT("=".concat(e.replace(/~1/g,"/").replace(/~0/g,"~"))).get("")}function __(e){var e=new KT([["",e.replace(/~/g,"~0").replace(/\//g,"~1")]]);return d$(e=e.toString()).call(e,1)}function C_(e,t){var r,n;return!(t&&"/"!==t&&"#"!==t&&(r=e.charAt(t.length),n=d$(t).call(t,-1),0!==e.indexOf(t)||r&&"/"!==r&&"#"!==r||"#"===n))}var fa={key:"allOf",plugin:function(e,t,r,n,o){if(!o.meta||!o.meta.$$ref){var s,l,u,i=d$(r).call(r,0,-1);if(!d_(i))return Array.isArray(e)?(s=!1,l=o.value,i.forEach(function(e){l=l&&l[e]}),l=Au({},l),0!==Ab(l).length?(delete l.allOf,(u=[]).push(n.replace(i,{})),e.forEach(function(e,t){if(!n.isObject(e)){if(s)return null;s=!0;var o=new TypeError("Elements in allOf must be objects");return o.fullPath=r,u.push(o)}u.push(n.mergeDeep(i,e));o=function(e,t,argument_2){var argument_2=2<arguments.length&&void 0!==argument_2?argument_2:{},n=argument_2.specmap,o=argument_2.getBaseUrlForNodePath,i=void 0===o?function(e){var r;return n.getContext(Cb(r=[]).call(r,u$(t),u$(e))).baseDoc}:o,o=argument_2.targetKeys,s=void 0===o?["$ref","$$ref"]:o,l=[];return s_(e).forEach(function(){var r,e;qv(s).call(s,this.key)&&"string"==typeof this.node&&(e=this.path,r=Cb(t).call(t,this.path),e=h_(this.node,i(e)),l.push(n.replace(r,e)))}),l}(e,d$(r).call(r,0,-1),{getBaseUrlForNodePath:function(e){var o;return n.getContext(Cb(o=[]).call(o,u$(r),[t],u$(e))).baseDoc},specmap:n});u.push.apply(u,u$(o))}),l.example&&u.push(n.remove(Cb(o=[]).call(o,i,"example"))),u.push(n.mergeDeep(i,l)),l.$$ref||u.push(n.remove(Cb(e=[]).call(e,i,"$$ref"))),u):void 0):((o=new TypeError("allOf must be an array")).fullPath=r,o)}}},xf={key:"parameters",plugin:function(e,t,r,n){var o,i,a;return Array.isArray(e)&&e.length?(o=Mu([],e),i=d$(r).call(r,0,-1),a=Au({},VA.getIn(n.spec,i)),e.forEach(function(e,t){try{o[t].default=n.parameterMacro(a,e)}catch(e){t=new Error(e);return t.fullPath=r,t}}),VA.replace(r,o)):VA.replace(r,e)}},xt={key:"properties",plugin:function(e,t,r,n){var i,o=Au({},e);for(i in e)try{o[i].default=n.modelPropertyMacro(o[i])}catch(e){var a=new Error(e);return a.fullPath=r,a}return VA.replace(r,o)}},R_=(()=>{function e(t){L$(this,e),this.root=L_(t||{})}return B$(e,[{key:"set",value:function(e,t){var o,r=this.getParent(e,!0);r?(e=e[e.length-1],(o=r.children)[e]?D_(o[e],t,r):o[e]=L_(t,r)):D_(this.root,t,null)}},{key:"get",value:function(e){if((e=e||[]).length<1)return this.root.value;for(var t,r,n=this.root,o=0;o<e.length&&(r=e[o],(t=n.children)[r]);o+=1)n=t[r];return n&&n.protoValue}},{key:"getParent",value:function(e,t){return!e||e.length<1?null:e.length<2?this.root:d$(e).call(e,0,-1).reduce(function(e,r){var n;return e&&(!(n=e.children)[r]&&t&&(n[r]=L_(null,e)),n[r])},this.root)}}]),e})();function L_(e,t){return D_({children:{}},e,t)}function D_(e,t,r){return e.value=t||{},e.protoValue=r?Au(Au({},r.protoValue),e.value):e.value,Ab(e.children).forEach(function(t){var r=e.children[t];e.children[t]=D_(r,r.value,e)}),e}function B_(){}var N_=(()=>{function e(t){var o=this;L$(this,e),Mu(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new R_,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:Mu(Object.create(this),VA,{getInstance:function(){return o}}),allowMetaPatches:!1},t),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=Fb(t=$b(t=this.plugins).call(t,this.wrapPlugin.bind(this))).call(t,VA.isFunction),this.patches.push(VA.add([],this.spec)),this.patches.push(VA.context([],this.context)),this.updatePatches(this.patches)}return B$(e,[{key:"debug",value:function(e){if(this.debugLevel===e){for(var r=arguments.length,n=new Array(1<r?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(e=console).log.apply(e,n)}}},{key:"verbose",value:function(e){if("verbose"===this.debugLevel){for(var t,n=arguments.length,o=new Array(1<n?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];(t=console).log.apply(t,Cb(t=["[".concat(e,"]   ")]).call(t,o))}}},{key:"wrapPlugin",value:function(e,t){var r,n,o,i=this.pathDiscriminator,a=null;return e[this.pluginProp]?r=(a=e)[this.pluginProp]:VA.isFunction(e)?r=e:VA.isObject(e)&&(n=e,o=function(e,t){return!Array.isArray(e)||e.every(function(e,r){return e===t[r]})},r=Tv.mark(function e(t,r){var a,s,l,c,u;return Tv.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u=function(e,t,l){var p,c,d,y,g,v,b,w,x;return Tv.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(VA.isObject(e))a.next=6;else{if(n.key===t[t.length-1])return a.next=4,n.plugin(e,n.key,t,r);a.next=4}break;case 4:a.next=30;break;case 6:c=t.length-1,p=t[c],d=t.indexOf("properties"),p="properties"===p&&c===d,c=r.allowMetaPatches&&s[e.$$ref],d=0,y=Ab(e);case 12:if(d<y.length){if(g=y[d],v=e[g],b=Cb(t).call(t,g),x=VA.isObject(v),w=e.$$ref,!c&&x)return r.allowMetaPatches&&w&&(s[w]=!0),a.delegateYield(u(v,b,l),"t0",22);a.next=22}else a.next=30;break;case 22:if(p||g!==n.key);else if(x=o(i,t),!i||x)return a.next=27,n.plugin(v,g,b,r,l);a.next=27;break;case 27:d++,a.next=12;break;case 30:case"end":return a.stop()}},a)},a=Tv.mark(u),s={},l=Ef(Fb(t).call(t,VA.isAdditiveMutation)),e.prev=4,l.s();case 6:if((c=l.n()).done){e.next=11;break}return c=c.value,e.delegateYield(u(c.value,c.path,c),"t0",9);case 9:e.next=6;break;case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(4),l.e(e.t1);case 16:return e.prev=16,l.f(),e.finish(16);case 19:case"end":return e.stop()}},e,null,[[4,13,16,19]])})),Mu(r.bind(a),{pluginName:e.name||t,isGenerator:VA.isGenerator(r)})}},{key:"nextPlugin",value:function(){var e,t=this;return(e=>{var t=e.find;return e===H$||z$(H$,e)&&t===H$.find?q$:t})(e=this.wrappedPlugins).call(e,function(e){return 0<t.getMutationsForPlugin(e).length})}},{key:"nextPromisedPatch",value:function(){var e;if(0<this.promisedPatches.length)return W$.race($b(e=this.promisedPatches).call(e,function(e){return e.value}))}},{key:"getPluginHistory",value:function(e){e=this.constructor.getPluginName(e);return this.pluginHistory[e]||[]}},{key:"getPluginRunCount",value:function(e){return this.getPluginHistory(e).length}},{key:"getPluginHistoryTip",value:function(e){e=this.getPluginHistory(e);return e&&e[e.length-1]||{}}},{key:"getPluginMutationIndex",value:function(e){e=this.getPluginHistoryTip(e).mutationIndex;return"number"!=typeof e?-1:e}},{key:"updatePluginHistory",value:function(e,t){e=this.constructor.getPluginName(e);this.pluginHistory[e]=this.pluginHistory[e]||[],this.pluginHistory[e].push(t)}},{key:"updatePatches",value:function(e){var t=this;VA.normalizeArray(e).forEach(function(e){if(e instanceof Error)t.errors.push(e);else try{VA.isObject(e)?(t.showDebug&&t.allPatches.push(e),VA.isPromise(e.value)?(t.promisedPatches.push(e),t.promisedPatchThen(e)):VA.isContextPatch(e)?t.setContext(e.path,e.value):VA.isMutation(e)&&t.updateMutations(e)):t.debug("updatePatches","Got a non-object patch",e)}catch(e){console.error(e),t.errors.push(e)}})}},{key:"updateMutations",value:function(e){"object"===Tf(e.value)&&!Array.isArray(e.value)&&this.allowMetaPatches&&(e.value=Au({},e.value));var t=VA.applyPatch(this.state,e,{allowMetaPatches:this.allowMetaPatches});t&&(this.mutations.push(e),this.state=t)}},{key:"removePromisedPatch",value:function(e){var t,e=this.promisedPatches.indexOf(e);e<0?this.debug("Tried to remove a promisedPatch that isn't there!"):(e=>{var t=e.splice;return e===pA||lA(pA,e)&&t===pA.splice?cA:t})(t=this.promisedPatches).call(t,e,1)}},{key:"promisedPatchThen",value:function(e){var t=this;return e.value=e.value.then(function(r){r=Au(Au({},e),{},{value:r});t.removePromisedPatch(e),t.updatePatches(r)}).catch(function(r){t.removePromisedPatch(e),t.updatePatches(r)}),e.value}},{key:"getMutations",value:function(e,t){var r;return e=e||0,"number"!=typeof t&&(t=this.mutations.length),d$(r=this.mutations).call(r,e,t)}},{key:"getCurrentMutations",value:function(){return this.getMutationsForPlugin(this.getCurrentPlugin())}},{key:"getMutationsForPlugin",value:function(e){e=this.getPluginMutationIndex(e);return this.getMutations(e+1)}},{key:"getCurrentPlugin",value:function(){return this.currentPlugin}},{key:"getLib",value:function(){return this.libMethods}},{key:"_get",value:function(e){return VA.getIn(this.state,e)}},{key:"_getContext",value:function(e){return this.contextTree.get(e)}},{key:"setContext",value:function(e,t){return this.contextTree.set(e,t)}},{key:"_hasRun",value:function(e){return this.getPluginRunCount(this.getCurrentPlugin())>(e||0)}},{key:"dispatch",value:function(){var e,t=this,r=this,n=this.nextPlugin();return n?(r.pluginCount=r.pluginCount||{},r.pluginCount[n]=(r.pluginCount[n]||0)+1,100<r.pluginCount[n]?W$.resolve({spec:r.state,errors:Cb(e=r.errors).call(e,new Error("We've reached a hard limit of ".concat(100," plugin runs")))}):n!==this.currentPlugin&&this.promisedPatches.length?(e=$b(e=this.promisedPatches).call(e,function(e){return e.value}),W$.all($b(e).call(e,function(e){return e.then(B_,B_)})).then(function(){return t.dispatch()})):(()=>{r.currentPlugin=n;var e=r.getCurrentMutations(),t=r.mutations.length-1;try{if(n.isGenerator){var o,i=Ef(n(e,r.getLib()));try{for(i.s();!(o=i.n()).done;)l(o.value)}catch(e){i.e(e)}finally{i.f()}}else l(n(e,r.getLib()))}catch(e){console.error(e),l([Mu(Object.create(e),{plugin:n})])}finally{r.updatePluginHistory(n,{mutationIndex:t})}return r.dispatch()})()):(e=this.nextPromisedPatch())?e.then(function(){return t.dispatch()}).catch(function(){return t.dispatch()}):(e={spec:this.state,errors:this.errors},this.showDebug&&(e.patches=this.allPatches),W$.resolve(e));function l(e){e&&(e=VA.fullyNormalizeArray(e),r.updatePatches(e,n))}}}],[{key:"getPluginName",value:function(e){return e.pluginName}},{key:"getPatchesOfType",value:function(e,t){return Fb(e).call(e,t)}}]),e})(),M_={refs:x_,allOf:fa,parameters:xf,properties:xt},F_=function(e){return String.prototype.toLowerCase.call(e)},U_=function(e){return e.replace(/[^\w]/gi,"_")};function z_(e){e=e.openapi;return!!e&&sd(e).call(e,"3")}function q_(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",o=(3<arguments.length&&void 0!==arguments[3]?arguments[3]:{}).v2OperationIdCompatibilityMode;return e&&"object"===Tf(e)?(e.operationId||"").replace(/\s/g,"").length?U_(e.operationId):function(e,t){{var i;if((2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).v2OperationIdCompatibilityMode)return(Cb(i="".concat(t.toLowerCase(),"_")).call(i,e).replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g,"_")||Cb(i="".concat(e.substring(1),"_")).call(i,t)).replace(/((_){2,})/g,"_").replace(/^(_)*/g,"").replace(/([_])*$/g,"")}return Cb(i="".concat(F_(t))).call(i,U_(e))}(t,r,{v2OperationIdCompatibilityMode:o}):null}function W_(e,t){return Cb(t="".concat(F_(t),"-")).call(t,e)}function V_(e,t,r){if(!e||"object"!==Tf(e)||!e.paths||"object"!==Tf(e.paths))return null;var o,n=e.paths;for(o in n)for(var i in n[o])if("PARAMETERS"!==i.toUpperCase()){var a=n[o][i];if(a&&"object"===Tf(a)){i={spec:e,pathName:o,method:i.toUpperCase(),operation:a},a=t(i);if(r&&a)return i}}}function G_(e){var t=e.spec,r=t.paths,n={};if(r&&!t.$$normalized){for(var o in r){var i,a=r[o];if(null!=a&&qv(i=["object","function"]).call(i,Tf(a))){var c,s=a.parameters,l=function(e){var i=a[e];if(null==i||!qv(r=["object","function"]).call(r,Tf(i)))return"continue";var r,l=q_(i,o,e);if(l&&(n[l]?n[l].push(i):n[l]=[i],1<(r=n[l]).length?r.forEach(function(e,t){e.__originalOperationId=e.__originalOperationId||e.operationId,e.operationId=Cb(e="".concat(l)).call(e,t+1)}):void 0!==i.operationId&&((r=r[0]).__originalOperationId=r.__originalOperationId||i.operationId,r.operationId=l)),"parameters"!==e){var h,u=[],d={};for(h in t)"produces"!==h&&"consumes"!==h&&"security"!==h||(d[h]=t[h],u.push(d));if(s&&(d.parameters=s,u.push(d)),u.length){var f,m=Ef(u);try{for(m.s();!(f=m.n()).done;){var g,y=f.value;for(g in y)if(i[g]){if("parameters"===g){var v,b=Ef(y[g]);try{for(b.s();!(v=b.n()).done;)(()=>{var e=v.value;i[g].some(function(t){return t.name&&t.name===e.name||t.$ref&&t.$ref===e.$ref||t.$$ref&&t.$$ref===e.$$ref||t===e})||i[g].push(e)})()}catch(e){b.e(e)}finally{b.f()}}}else i[g]=y[g]}}catch(e){m.e(e)}finally{m.f()}}}};for(c in a)l(c)}}t.$$normalized=!0}return e}function Y_(e,argument_1){var argument_1=1<arguments.length&&void 0!==argument_1?argument_1:{},r=argument_1.requestInterceptor,n=argument_1.responseInterceptor,o=e.withCredentials?"include":"same-origin";return function(t){return e({url:t,loadSpec:!0,requestInterceptor:r,responseInterceptor:n,headers:{Accept:f_},credentials:o}).then(function(e){return e.body})}}function K_(e){var t=e.fetch,r=e.spec,o=e.mode,i=e.allowMetaPatches,a=void 0===i||i,s=e.pathDiscriminator,l=e.modelPropertyMacro,c=e.parameterMacro,p=e.requestInterceptor,u=e.responseInterceptor,d=e.skipNormalization,h=e.useCircularStructures,f=e.http,m=e.baseDoc||e.url,f=t||f||b$;return r?y(r):Y_(f,{requestInterceptor:p,responseInterceptor:u})(m).then(y);function y(e){m&&(M_.refs.docCache[m]=e),M_.refs.fetchJSON=Y_(f,{requestInterceptor:p,responseInterceptor:u});var r=[M_.refs];return"function"==typeof c&&r.push(M_.parameters),"function"==typeof l&&r.push(M_.properties),"strict"!==o&&r.push(M_.allOf),new N_({spec:e,context:{baseDoc:m},plugins:r,allowMetaPatches:a,pathDiscriminator:s,parameterMacro:c,modelPropertyMacro:l,useCircularStructures:h}).dispatch().then(d?(()=>{var e=Ev(Tv.mark(function e(t){return Tv.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}})():G_)}}function cC(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(lC&&lC in Object(e)?e=>{var t=nC.call(e,iC),r=e[iC];try{var n=!(e[iC]=void 0)}catch(e){}var o=oC.call(e);return n&&(t?e[iC]=r:delete e[iC]),o}:e=>aC.call(e))(e)}function uC(e){return"symbol"==typeof e||(e=>null!=e&&"object"==typeof e)(e)&&"[object Symbol]"==pC(e)}function yC(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function IC(e,t){return(e=>!(!$C(e)||SC(e))&&(kC(e)?CC:AC).test((e=>{if(null!=e){try{return wC.call(e)}catch(e){}try{return e+""}catch(e){}}return""})(e)))(e=((e,t)=>null==e?void 0:e[t])(e,t))?e:void 0}var sr=Array.isArray,Fr="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,sl="object"==typeof self&&self&&self.Object===Object&&self,Ho=Fr||sl||Function("return this")(),Wi=Ho.Symbol,Zo=Object.prototype,nC=Zo.hasOwnProperty,oC=Zo.toString,iC=Wi?Wi.toStringTag:void 0,aC=Object.prototype.toString,lC=Wi?Wi.toStringTag:void 0,pC=cC,dC=sr,hC=uC,fC=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mC=/^\w*$/,gC=cC,vC=yC,bC=Ho["__core-js_shared__"],xC=(()=>{var e=/[^.]+$/.exec(bC&&bC.keys&&bC.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})(),wC=Function.prototype.toString,kC=function(e){return!!vC(e)&&("[object Function]"==(e=gC(e))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},SC=function(e){return!!xC&&xC in e},$C=yC,AC=/^\[object .+?Constructor\]$/,ua=Object.prototype,pa=Function.prototype.toString,nn=ua.hasOwnProperty,CC=RegExp("^"+pa.call(nn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Kr=IC(Object,"create"),RC=Kr,LC=Kr,DC=Object.prototype.hasOwnProperty,BC=Kr,NC=Object.prototype.hasOwnProperty,MC=Kr;function qC(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}qC.prototype.clear=function(){this.__data__=RC?RC(null):{},this.size=0},qC.prototype.delete=function(e){e=this.has(e)&&delete this.__data__[e];return this.size-=e?1:0,e},qC.prototype.get=function(e){var r,t=this.__data__;return LC?"__lodash_hash_undefined__"===(r=t[e])?void 0:r:DC.call(t,e)?t[e]:void 0},qC.prototype.has=function(e){var t=this.__data__;return BC?void 0!==t[e]:NC.call(t,e)},qC.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=MC&&void 0===t?"__lodash_hash_undefined__":t,this};function VC(e,t){for(var r=e.length;r--;)if(((e,t)=>e===t||e!=e&&t!=t)(e[r][0],t))return r;return-1}var vt=qC,GC=VC,YC=Array.prototype.splice,KC=VC,JC=VC,ZC=VC;function QC(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}QC.prototype.clear=function(){this.__data__=[],this.size=0},QC.prototype.delete=function(e){var t=this.__data__,e=GC(t,e);return!(e<0||(e==t.length-1?t.pop():YC.call(t,e,1),--this.size,0))},QC.prototype.get=function(e){var t=this.__data__,e=KC(t,e);return e<0?void 0:t[e][1]},QC.prototype.has=function(e){return-1<JC(this.__data__,e)},QC.prototype.set=function(e,t){var r=this.__data__,n=ZC(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ij(e,t){return e=e.__data__,(e=>{var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e})(t)?e["string"==typeof t?"string":"hash"]:e.map}var Xa=QC,bl=IC(Ho,"Map"),rj=vt,nj=Xa,oj=bl,aj=ij,sj=ij,lj=ij,cj=ij;function pj(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pj.prototype.clear=function(){this.size=0,this.__data__={hash:new rj,map:new(oj||nj),string:new rj}},pj.prototype.delete=function(e){e=aj(this,e).delete(e);return this.size-=e?1:0,e},pj.prototype.get=function(e){return sj(this,e).get(e)},pj.prototype.has=function(e){return lj(this,e).has(e)},pj.prototype.set=function(e,t){var r=cj(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};var uj=pj;function dj(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");function r(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;return i.has(o)?i.get(o):(n=e.apply(this,n),r.cache=i.set(o,n)||i,n)}return r.cache=new(dj.Cache||uj),r}dj.Cache=uj;var hj=dj,fj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mj=/\\(\\)?/g,Lt=(()=>{var t=hj(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(fj,function(e,r,n,o){t.push(n?o.replace(mj,"$1"):r||e)}),t},function(e){return 500===r.size&&r.clear(),e}),r=t.cache;return t})(),gj=sr,vj=uC,ur=Wi?Wi.prototype:void 0,xj=ur?ur.toString:void 0,wj=function e(t){var r;return"string"==typeof t?t:gj(t)?((e,t)=>{for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o})(t,e)+"":vj(t)?xj?xj.call(t):"":"0"==(r=t+"")&&1/t==-1/0?"-0":r},kj=sr,Sj=function(e,t){var r;return!dC(e)&&(!("number"!=(r=typeof e)&&"symbol"!=r&&"boolean"!=r&&null!=e&&!hC(e))||mC.test(e)||!fC.test(e)||null!=t&&e in Object(t))},$j=Lt,Aj=uC,Ej=function(e,t){return kj(e)?e:Sj(e,t)?[e]:$j((e=>null==e?"":wj(e))(e))},Oj=function(e){var t;return"string"==typeof e||Aj(e)?e:"0"==(t=e+"")&&1/e==-1/0?"-0":t},Tj=function(e,t,r){e=null==e?void 0:((e,t)=>{for(var r=0,n=(t=Ej(t,e)).length;null!=e&&r<n;)e=e[Oj(t[r++])];return r&&r==n?e:void 0})(e,t);return void 0===e?r:e};function _j(){return(_j=Ev(Tv.mark(function e(t,r){var o,d,n,m=arguments;return Tv.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=(n=2<m.length&&void 0!==m[2]?m[2]:{}).returnEntireTree,n={pathDiscriminator:r,baseDoc:n.baseDoc,requestInterceptor:n.requestInterceptor,responseInterceptor:n.responseInterceptor,parameterMacro:n.parameterMacro,modelPropertyMacro:n.modelPropertyMacro,useCircularStructures:n.useCircularStructures},d=G_({spec:t}),d=d.spec,e.next=6,K_(Au(Au({},n),{},{spec:d,allowMetaPatches:!0,skipNormalization:!0}));case 6:return n=e.sent,!o&&Array.isArray(r)&&r.length&&(n.spec=Tj(n.spec,r)||null),e.abrupt("return",n);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Cj(){return null}function qj(e){var t=e.indexOf;return e===zj||Fj(zj,e)&&t===zj.indexOf?Uj:t}var ja=Eo,Rj=qo.indexOf,al=Up,Dj=bt([].indexOf),Bj=!!Dj&&1/Dj([1],1,-0)<0,ft=al("indexOf"),Ds=(ja({target:"Array",proto:!0,forced:Bj||!ft},{indexOf:function(e){var t=1<arguments.length?arguments[1]:void 0;return Bj?Dj(this,e,t)||0:Rj(this,e,t)}}),ic("Array").indexOf),Fj=ar,Uj=Ds,zj=Array.prototype,Wj=(decodeURIComponent,encodeURIComponent),Vj=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Gj(e){return"[object Object]"===Object.prototype.toString.call(e)}function Yj(e){return!1!==Gj(e)&&(void 0===(e=e.constructor)||!1!==Gj(e=e.prototype)&&!1!==e.hasOwnProperty("isPrototypeOf"))}var Kj={body:function(e){e.req.body=e.value},header:function(e){var t=e.req,r=e.parameter,e=e.value;t.headers=t.headers||{},void 0!==e&&(t.headers[r.name]=e)},query:function(e){var t=e.req,r=e.value,e=e.parameter;t.query=t.query||{},(r=0===(r=!1===r&&"boolean"===e.type?"false":r)&&-1<["number","integer"].indexOf(e.type)?"0":r)?t.query[e.name]={collectionFormat:e.collectionFormat,value:r}:e.allowEmptyValue&&void 0!==r&&(r=e.name,t.query[r]=t.query[r]||{},t.query[r].allowEmptyValue=!0)},path:function(e){var t=e.req,r=e.value;t.url=t.url.split("{".concat(e.parameter.name,"}")).join(encodeURIComponent(r))},formData:function(e){var t=e.req,r=e.value,e=e.parameter;(r||e.allowEmptyValue)&&(t.form=t.form||{},t.form[e.name]={value:r,allowEmptyValue:e.allowEmptyValue,collectionFormat:e.collectionFormat})}};function Jj(e,t){return qv(t).call(t,"application/json")?"string"==typeof e?e:vb(e):e.toString()}function tI(e){return Array.isArray(e)?e:[]}var Zj=["accept","authorization","content-type"],Xj=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",path:function(e){var t=e.req,r=e.value,e=e.parameter,o=e.name,i=e.style,a=e.explode,s=e.content;s?(s=Ab(s)[0],t.url=t.url.split("{".concat(o,"}")).join(m$(Jj(r,s),{escape:!0}))):(s=y$({key:e.name,value:r,style:i||"simple",explode:a||!1,escape:!0}),t.url=t.url.split("{".concat(o,"}")).join(s))},query:function(e){var a,s,o,t=e.req,r=e.value,e=e.parameter;t.query=t.query||{},e.content?(o=Ab(e.content)[0],t.query[e.name]=Jj(r,o)):(r=0===(r=!1===r?"false":r)?"0":r)?(o=e.style,a=e.explode,s=e.allowReserved,t.query[e.name]={value:r,serializationOption:{style:o,explode:a,allowReserved:s}}):e.allowEmptyValue&&void 0!==r&&(o=e.name,t.query[o]=t.query[o]||{},t.query[o].allowEmptyValue=!0)},header:function(e){var o,t=e.req,r=e.parameter,e=e.value;t.headers=t.headers||{},-1<Zj.indexOf(r.name.toLowerCase())||(r.content?(o=Ab(r.content)[0],t.headers[r.name]=Jj(e,o)):void 0!==e&&(t.headers[r.name]=y$({key:r.name,value:e,style:r.style||"simple",explode:void 0!==r.explode&&r.explode,escape:!1})))},cookie:function(e){var a,i,t=e.req,r=e.parameter,e=e.value,o=(t.headers=t.headers||{},Tf(e));r.content?(a=Ab(r.content)[0],t.headers.Cookie=Cb(i="".concat(r.name,"=")).call(i,Jj(e,a))):"undefined"!==o&&(i="object"===o&&!Array.isArray(e)&&r.explode?"":"".concat(r.name,"="),t.headers.Cookie=i+y$({key:r.name,value:e,escape:!1,style:r.style||"form",explode:void 0!==r.explode&&r.explode}))}}),Qj=function(e){return(e instanceof lt?e:lt.from(e.toString(),"binary")).toString("base64")},eI=["http","fetch","spec","operationId","pathName","method","parameters","securities"],rI=JT("OperationNotFoundError",function(e,t,r){this.originalError=r,Mu(this,t||{})}),nI={buildRequest:oI};function oI(e){var w,A,E,n=e.spec,o=e.operationId,i=e.responseContentType,a=e.scheme,s=e.requestInterceptor,l=e.responseInterceptor,c=e.contextUrl,p=e.userFetch,u=e.server,d=e.serverVariables,h=e.http,f=e.signal,m=e.parameters,y=e.parameterBuilders,g=z_(n),y=y||(g?Xj:Kj),v={url:"",credentials:h&&h.withCredentials?"include":"same-origin",headers:{},cookies:{}},h=(f&&(v.signal=f),s&&(v.requestInterceptor=s),l&&(v.responseInterceptor=l),p&&(v.userFetch=p),(t=>n&&n.paths?((e,t)=>V_(e,t,!0)||null)(n,function(e){var i,r=e.pathName,n=e.method,e=e.operation;return!(!e||"object"!==Tf(e))&&(i=e.operationId,[q_(e,r,n),W_(r,n),i].some(function(e){return e&&e===t}))}):null)(o));if(h)return f=h.operation,w=void 0===f?{}:f,v.url+=aI({spec:n,scheme:a,contextUrl:c,server:u,serverVariables:d,pathName:s=h.pathName,method:l=h.method}),o?(v.url+=s,v.method="".concat(l).toUpperCase(),m=m||{},p=n.paths[s]||{},i&&(v.headers.accept=i),(A=(e=>{var t={},r=(e.forEach(function(e){t[e.in]||(t[e.in]={}),t[e.in][e.name]=e}),[]);return Ab(t).forEach(function(e){Ab(t[e]).forEach(function(n){r.push(t[e][n])})}),r})(Cb(a=Cb(f=[]).call(f,tI(w.parameters))).call(a,tI(p.parameters)))).forEach(function(e){var t,r,o=y[e.in];if("body"===e.in&&e.schema&&e.schema.properties&&(t=m),void 0===(t=e&&e.name&&m[e.name])?t=e&&e.name&&m[Cb(r="".concat(e.in,".")).call(r,e.name)]:1<((e,t)=>Fb(t).call(t,function(t){return t.name===e}))(e.name,A).length&&console.warn(Cb(r="Parameter '".concat(e.name,"' is ambiguous because the defined spec has more than one parameter with the name: '")).call(r,e.name,"' and the passed-in parameter values did not define an 'in' value.")),null!==t){if(void 0===(t=void 0!==e.default&&void 0===t?e.default:t)&&e.required&&!e.allowEmptyValue)throw new Error("Required parameter ".concat(e.name," is not provided"));if(g&&e.schema&&"object"===e.schema.type&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){throw new Error("Could not parse object parameter value string as JSON")}o&&o({req:v,parameter:e,value:t,operation:w,spec:n})}}),E=Au(Au({},e),{},{operation:w}),(v=g?((e,t)=>{var f,r=e.operation,n=e.requestBody,a=e.attachContentTypeForEmptyPayload,s=e.requestContentType,l=(t=(e=>{var t=e.request,r=void 0===(r=e.securities)?{}:r,o=void 0===(o=e.operation)?{}:o,e=e.spec,s=Au({},t),c=void 0===(l=r.authorized)?{}:l,l=o.security||e.security||[],u=c&&!!Ab(c).length,d=Tj(e,["components","securitySchemes"])||{};return s.headers=s.headers||{},s.query=s.query||{},Ab(r).length&&u&&l&&(!Array.isArray(o.security)||o.security.length)?(l.forEach(function(e){Ab(e).forEach(function(e){var o,l,a,n,t=c[e],e=d[e];t&&(n=t.value||t,o=e.type,t)&&("apiKey"===o?("query"===e.in&&(s.query[e.name]=n),"header"===e.in&&(s.headers[e.name]=n),"cookie"===e.in&&(s.cookies[e.name]=n)):"http"===o?(/^basic$/i.test(e.scheme)&&(a=n.username||"",l=n.password||"",a=Qj(Cb(a="".concat(a,":")).call(a,l)),s.headers.Authorization="Basic ".concat(a)),/^bearer$/i.test(e.scheme)&&(s.headers.Authorization="Bearer ".concat(n))):"oauth2"!==o&&"openIdConnect"!==o||(a=(l=t.token||{})[e["x-tokenName"]||"access_token"],(n=l.token_type)&&"bearer"!==n.toLowerCase()||(n="Bearer"),s.headers.Authorization=Cb(o="".concat(n," ")).call(o,a)))})}),s):t})({request:t,securities:e.securities,operation:r,spec:e.spec}),r.requestBody||{}),c=Ab(l.content||{}),p=s&&-1<c.indexOf(s);return n||a?s&&p?t.headers["Content-Type"]=s:s||(a=c[0])&&(s=t.headers["Content-Type"]=a):s&&p&&(t.headers["Content-Type"]=s),!e.responseContentType&&r.responses&&0<(p=Fb(a=Mb(r.responses)).call(a,function(e){var e=_f(e,2),r=e[0],e=e[1],r=parseInt(r,10);return 200<=r&&r<300&&Yj(e.content)}).reduce(function(e,t){t=_f(t,2)[1];return Cb(e).call(e,Ab(t.content))},[])).length&&(t.headers.accept=p.join(", ")),n&&(s?-1<c.indexOf(s)&&("application/x-www-form-urlencoded"===s||"multipart/form-data"===s?"object"===Tf(n)?(f=(l.content[s]||{}).encoding||{},t.form={},Ab(n).forEach(function(e){t.form[e]={value:n[e],encoding:f[e]||{}}})):t.form=n:t.body=n):t.body=n),t})(E,v):(t=>{var o=E.spec,i=E.operation,s=E.requestContentType,l=E.responseContentType,c=E.attachContentTypeForEmptyPayload;return(t=(e=>{var t=e.request,r=void 0===(r=e.securities)?{}:r,o=void 0===(o=e.operation)?{}:o,e=e.spec,s=Au({},t),c=void 0===(l=r.authorized)?{}:l,l=r.specSecurity,l=o.security||(void 0===l?[]:l),h=c&&!!Ab(c).length,f=e.securityDefinitions;return s.headers=s.headers||{},s.query=s.query||{},Ab(r).length&&h&&l&&(!Array.isArray(o.security)||o.security.length)?(l.forEach(function(e){Ab(e).forEach(function(e){var n,i,l,r,t=c[e];t&&(r=t.token,n=t.value||t,i=(e=f[e]).type,l=r&&r[e["x-tokenName"]||"access_token"],r=r&&r.token_type,t)&&("apiKey"===i?(t="query"===e.in?"query":"headers",s[t]=s[t]||{},s[t][e.name]=n):"basic"===i?n.header?s.headers.authorization=n.header:(t=n.username||"",e=n.password||"",n.base64=Qj(Cb(t="".concat(t,":")).call(t,e)),s.headers.authorization="Basic ".concat(n.base64)):"oauth2"===i&&l&&(r=r&&"bearer"!==r.toLowerCase()?r:"Bearer",s.headers.authorization=Cb(t="".concat(r," ")).call(t,l)))})}),s):t})({request:t,securities:E.securities,operation:i,spec:o})).body||t.form||c?s?t.headers["Content-Type"]=s:Array.isArray(i.consumes)?(c=_f(i.consumes,1),t.headers["Content-Type"]=c[0]):Array.isArray(o.consumes)?(c=_f(o.consumes,1),t.headers["Content-Type"]=c[0]):i.parameters&&Fb(o=i.parameters).call(o,function(e){return"file"===e.type}).length?t.headers["Content-Type"]="multipart/form-data":i.parameters&&Fb(c=i.parameters).call(c,function(e){return"formData"===e.in}).length&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"):s&&(c=i.parameters&&0<Fb(o=i.parameters).call(o,function(e){return"body"===e.in}).length,o=i.parameters&&0<Fb(o=i.parameters).call(o,function(e){return"formData"===e.in}).length,c||o)&&(t.headers["Content-Type"]=s),!l&&Array.isArray(i.produces)&&0<i.produces.length&&(t.headers.accept=i.produces.join(", ")),t})(v)).cookies&&Ab(v.cookies).length&&(c=Ab(v.cookies).reduce(function(e,t){return e+(e?"&":"")+((e,t,r)=>{var o=(r=r||{}).encode||Wj;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!Vj.test(e))throw new TypeError("argument name is invalid");if((o=o(t))&&!Vj.test(o))throw new TypeError("argument val is invalid");var a=e+"="+o;if(null!=r.maxAge){t=+r.maxAge;if(isNaN(t)||!isFinite(t))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(t)}if(r.domain){if(!Vj.test(r.domain))throw new TypeError("option domain is invalid");a+="; Domain="+r.domain}if(r.path){if(!Vj.test(r.path))throw new TypeError("option path is invalid");a+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(a+="; HttpOnly"),r.secure&&(a+="; Secure"),r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a})(t,v.cookies[t])},""),v.headers.Cookie=c),v.cookies&&delete v.cookies,R$(v)):delete v.cookies,v;throw new rI("Operation ".concat(o," not found"))}var iI=function(e){return e?e.replace(/\W/g,""):null};function aI(e){return(z_(e.spec)?e=>{var t=e.spec,r=e.pathName,n=e.method,o=e.server,i=e.contextUrl,s=void 0===(e=e.serverVariables)?{}:e,e=Tj(t,["paths",r,(n||"").toLowerCase(),"servers"])||Tj(t,["paths",r,"servers"])||Tj(t,["servers"]),c="",p=null;return o&&e&&e.length&&-1<(n=$b(e).call(e,function(e){return e.url})).indexOf(o)&&(c=o,p=e[n.indexOf(o)]),!c&&e&&e.length&&(c=e[0].url,p=_f(e,1)[0]),-1<c.indexOf("{")&&(e=>{for(var t,r=[],n=/{([^}]+)}/g;t=n.exec(e);)r.push(t[1]);return r})(c).forEach(function(e){var t;p.variables&&p.variables[e]&&(t=p.variables[e],t=s[e]||t.default,e=new RegExp("{".concat(e,"}"),"g"),c=c.replace(e,t))}),function(argument_0,argument_1){var argument_0=0<arguments.length&&void 0!==argument_0?argument_0:"",argument_1=1<arguments.length&&void 0!==argument_1?argument_1:"",argument_0=argument_0&&argument_1?ld.parse(ld.resolve(argument_1,argument_0)):ld.parse(argument_0),argument_1=ld.parse(argument_1),a=iI(argument_0.protocol)||iI(argument_1.protocol)||"",argument_1=argument_0.host||argument_1.host,argument_0=argument_0.pathname||"";return"/"===(a=a&&argument_1?Cb(a="".concat(a,"://")).call(a,argument_1+argument_0):argument_0)[a.length-1]?d$(a).call(a,0,-1):a}(c,i)}:e=>{var n=e.spec,o=e.scheme,e=e.contextUrl,e=ld.parse(void 0===e?"":e),l=Array.isArray(n.schemes)?n.schemes[0]:null,o=o||l||iI(e.protocol)||"http",l=n.host||e.host||"",e=n.basePath||"";return"/"===(o=o&&l?Cb(n="".concat(o,"://")).call(n,l+e):e)[o.length-1]?d$(o).call(o,0,-1):o})(e)}function sI(e){var t=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e?r.url=e:r=e,!(this instanceof sI))return new sI(r);Mu(this,r);e=this.resolve().then(function(){return t.disableInterfaces||Mu(t,sI.makeApisTagOperation(t)),t});return e.client=this,e}function lI(e){e=(e=e.replace("[]","Array")).split("/");return e[0]=e[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),e.join("/")}sI.makeHttp=function(e,t,r){return r=r||function(e){return e},t=t||function(e){return e},function(n){return v$.mergeInQueryOrForm(n="string"==typeof n?{url:n}:n),n=t(n),r(e(n))}}.bind(null,sI.http=b$),sI.resolve=K_,sI.resolveSubtree=function(e,t){return _j.apply(this,arguments)},sI.execute=function(e){var t=e.http,r=e.fetch,n=e.spec,o=e.operationId,i=e.pathName,a=e.method,s=e.parameters,l=e.securities,e=((e,t)=>{if(null==e)return{};var r,o=((e,t)=>{if(null==e)return{};for(var r,o={},i=oi(e),n=0;n<i.length;n++)r=i[n],0<=qj(t).call(t,r)||(o[r]=e[r]);return o})(e,t);if(Xl)for(var i=Xl(e),n=0;n<i.length;n++)r=i[n],0<=qj(t).call(t,r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r]);return o})(e,eI),t=t||r||b$,r=(i&&a&&!o&&(o=W_(i,a)),nI.buildRequest(Au({spec:n,operationId:o,parameters:s,securities:l,http:t},e)));return r.body&&(Yj(r.body)||Array.isArray(r.body))&&(r.body=vb(r.body)),t(r)},sI.serializeRes=S$,sI.serializeHeaders=A$,sI.clearCache=function(){M_.refs.clearCache()},sI.makeApisTagOperation=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(t){var r=t.pathName,n=t.method,o=t.operationId;return function(t){var a=e.requestInterceptor,s=e.responseInterceptor,l=e.userFetch;return e.execute(Au({spec:e.spec,requestInterceptor:a,responseInterceptor:s,userFetch:l,pathName:r,method:n,parameters:t,operationId:o},1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}))}}}(e);return{apis:(e=>{var t=e.spec,r=e.cb,n=void 0===r?Cj:r,i=void 0===(r=e.defaultTag)?"default":r,a=e.v2OperationIdCompatibilityMode,s={},l={};return V_(t,function(e){var o=e.pathName,c=e.method,p=e.operation;(p.tags?(e=p.tags,Array.isArray(e)?e:[e]):[i]).forEach(function(e){var u,d,f,r,h;"string"==typeof e&&(l[e]=l[e]||{},e=l[e],u=q_(p,o,c,{v2OperationIdCompatibilityMode:a}),d=n({spec:t,pathName:o,method:c,operation:p,operationId:u}),s[u]?(s[u]+=1,e[Cb(r="".concat(u)).call(r,s[u])]=d):void 0!==e[u]?(s[u]=(r=s[u]||1)+1,e[Cb(h="".concat(u)).call(h,s[u])]=d,h=e[u],delete e[u],e[Cb(f="".concat(u)).call(f,r)]=h):e[u]=d)})}),l})({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t})}},sI.buildRequest=oI,sI.helpers={opId:q_},sI.getBaseUrl=aI,(sI.prototype={http:b$,execute:function(e){return this.applyDefaults(),sI.execute(Au({spec:this.spec,http:this.http,securities:{authorized:this.authorizations},contextUrl:"string"==typeof this.url?this.url:void 0,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null},e))},resolve:function(){var e=this;return sI.resolve(Au({spec:this.spec,url:this.url,http:this.http||this.fetch,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null,skipNormalization:this.skipNormalization||!1},0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})).then(function(t){return e.originalSpec=e.spec,e.spec=t.spec,e.errors=t.errors,e})}}).applyDefaults=function(){var e=this.spec,t=this.url;t&&sd(t).call(t,"http")&&(t=ld.parse(t),e.host||(e.host=t.host),e.schemes||(e.schemes=[t.protocol.replace(":","")]),e.basePath||(e.basePath="/"))};var cI={parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],uniqueOnly:function(e,t,r){return r.indexOf(e)===t},createHash:function(e){let t,r=0;if(0!==e.length)for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},sanitise:lI,sanitiseAll:function(e){return lI(e.split("/").join("_"))},camelize:function(e){return e.toLowerCase().replace(/[-_ \/\.](.)/g,(e,t)=>t.toUpperCase())},clone:function(e){return JSON.parse(JSON.stringify(e))},circularClone:function e(t,r){if(r=r||new WeakMap,Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);let n;try{n=new t.constructor}catch(e){n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map(n=>({[n]:e(t[n],r)})))}};var uI=function e(t,r,n,o){if(void 0===n.depth&&(n={depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}),null!=t&&(n.combine&&(t.allOf&&Array.isArray(t.allOf)&&1===t.allOf.length&&delete(t={...t.allOf[0],...t}).allOf,t.anyOf&&Array.isArray(t.anyOf)&&1===t.anyOf.length&&delete(t={...t.anyOf[0],...t}).anyOf,t.oneOf)&&Array.isArray(t.oneOf)&&1===t.oneOf.length&&delete(t={...t.oneOf[0],...t}).oneOf,o(t,r,n),!n.seen.has(t))){if("object"==typeof t&&null!==t&&n.seen.set(t,!0),n.top=!1,n.depth++,void 0!==t.items&&(n.property="items",e(t.items,t,n,o)),t.additionalItems&&"object"==typeof t.additionalItems&&(n.property="additionalItems",e(t.additionalItems,t,n,o)),t.additionalProperties&&"object"==typeof t.additionalProperties&&(n.property="additionalProperties",e(t.additionalProperties,t,n,o)),t.properties)for(let r in t.properties){var i=t.properties[r];n.property="properties/"+r,e(i,t,n,o)}if(t.patternProperties)for(let r in t.patternProperties){let i=t.patternProperties[r];n.property="patternProperties/"+r,e(i,t,n,o)}if(t.allOf)for(let r in t.allOf){let i=t.allOf[r];n.property="allOf/"+r,e(i,t,n,o)}if(t.anyOf)for(let r in t.anyOf){let i=t.anyOf[r];n.property="anyOf/"+r,e(i,t,n,o)}if(t.oneOf)for(let r in t.oneOf){let i=t.oneOf[r];n.property="oneOf/"+r,e(i,t,n,o)}t.not&&(n.property="not",e(t.not,t,n,o)),n.depth--}return t};function dI(e,t,r){if((t=t||{depth:0}).depth||(t={path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1,...t}),"object"==typeof e){let n=t.path;for(var o in e){if(t.key=o,t.path=t.path+"/"+encodeURIComponent(o),t.identityPath=t.seen.get(e[o]),t.identity=void 0!==t.identityPath,e.hasOwnProperty(o)&&r(e,o,t),"object"==typeof e[o]&&!t.identity){t.identityDetection&&!Array.isArray(e[o])&&null!==e[o]&&t.seen.set(e[o],t.path);let n={};n.parent=e,n.path=t.path,n.depth=t.depth?t.depth+1:1,n.pkey=o,n.payload=t.payload,n.seen=t.seen,n.identity=!1,n.identityDetection=t.identityDetection,dI(e[o],n,r)}t.path=n}}}let hI;function fI(e,t){for(var r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function mI(e,t){uI(e,{},{},(e,r)=>{(e=>{if(e["x-required"]&&Array.isArray(e["x-required"])&&(e.required||(e.required=[]),e.required=e.required.concat(e["x-required"]),delete e["x-required"]),e["x-anyOf"]&&(e.anyOf=e["x-anyOf"],delete e["x-anyOf"]),e["x-oneOf"]&&(e.oneOf=e["x-oneOf"],delete e["x-oneOf"]),e["x-not"]&&(e.not=e["x-not"],delete e["x-not"]),"boolean"==typeof e["x-nullable"]&&(e.nullable=e["x-nullable"],delete e["x-nullable"]),"object"==typeof e["x-discriminator"]&&"string"==typeof e["x-discriminator"].propertyName)for(var t in e.discriminator=e["x-discriminator"],delete e["x-discriminator"],e.discriminator.mapping){var r=e.discriminator.mapping[t];r.startsWith("#/definitions/")&&(e.discriminator.mapping[t]=r.replace("#/definitions/","#/components/schemas/"))}})(e),((e,t,r)=>{if(e.nullable&&r.patches++,e.discriminator&&"string"==typeof e.discriminator&&(e.discriminator={propertyName:e.discriminator}),e.items&&Array.isArray(e.items)&&(0===e.items.length?e.items={}:1===e.items.length?e.items=e.items[0]:e.items={anyOf:e.items}),e.type&&Array.isArray(e.type)){if(r.patches++,r.warnings.push("(Patchable) schema type must not be an array"),0===e.type.length)delete e.type;else{e.oneOf||(e.oneOf=[]);for(let t of e.type){let r={};if("null"===t)e.nullable=!0;else{r.type=t;for(let t of cI.arrayProperties)void 0!==e.prop&&(r[t]=e[t],delete e[t])}r.type&&e.oneOf.push(r)}delete e.type,0===e.oneOf.length?delete e.oneOf:e.oneOf.length<2&&(e.type=e.oneOf[0].type,1<Object.keys(e.oneOf[0]).length&&(r.patches++,r.warnings.push("Lost properties from oneOf")),delete e.oneOf)}e.type&&Array.isArray(e.type)&&1===e.type.length&&(e.type=e.type[0])}e.type&&"null"===e.type&&(delete e.type,e.nullable=!0),"array"!==e.type||e.items||(e.items={}),"file"===e.type&&(e.type="string",e.format="binary"),"boolean"==typeof e.required&&(e.required&&e.name&&(void 0===t.required&&(t.required=[]),Array.isArray(t.required))&&t.required.push(e.name),delete e.required),e.xml&&"string"==typeof e.xml.namespace&&!e.xml.namespace&&delete e.xml.namespace,e.allowEmptyValue&&(delete e.allowEmptyValue,r.patches++,r.warnings.push("(Patchable): deleted schema.allowEmptyValue"))})(e,r,t)})}function yI(e){for(var t in e)for(var r in e[t]){var n=cI.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function vI(e){return e&&!e["x-s2o-delete"]}function bI(e,t){if(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&"array"!==e.items.type){if(e.items.collectionFormat!==e.collectionFormat)return t.errCount++,t.errors.push({message:"Nested collectionFormats are not supported",pointer:"/.../responses/header"});delete e.items.collectionFormat}"array"===e.type?("ssv"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:ssv is no longer supported for headers")):"pipes"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:pipes is no longer supported for headers")):"multi"===e.collectionFormat?e.explode=!0:"tsv"===e.collectionFormat?(e["x-collectionFormat"]="tsv",t.patches++,t.warnings.push("collectionFormat:tsv is no longer supported")):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(delete e.collectionFormat,t.patches++,t.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")),delete e.type;for(let t of cI.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t]);for(let t of cI.arrayProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t])}function xI(e,t,r,n,o,i,a){var s={};let l,c=!0;t&&t.consumes&&"string"==typeof t.consumes&&(t.consumes=[t.consumes],a.patches++,a.warnings.push("(Patchable) operation.consumes must be an array")),Array.isArray(i.consumes)||delete i.consumes;i=((t?t.consumes:null)||i.consumes||[]).filter(cI.uniqueOnly);if(e&&(e.name||e.in)){"boolean"==typeof e["x-deprecated"]&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),void 0!==e["x-example"]&&(e.example=e["x-example"],delete e["x-example"]),"body"===e.in||e.type||(e.type="string",a.patches++,a.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")),"file"===e.type&&(e["x-s2o-originalType"]=e.type,l=e.type),null===e.description&&delete e.description;let t=e.collectionFormat;if((t="array"===e.type?t||"csv":t)&&("array"!==e.type&&(delete e.collectionFormat,a.patches++,a.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")),"csv"!==t||"query"!==e.in&&"cookie"!==e.in||(e.style="form",e.explode=!1),"csv"!==t||"path"!==e.in&&"header"!==e.in||(e.style="simple"),"ssv"===t&&("query"===e.in?e.style="spaceDelimited":a.warnings.push(e.name+" collectionFormat:ssv is no longer supported except for in:query parameters")),"pipes"===t&&("query"===e.in?e.style="pipeDelimited":a.warnings.push(e.name+" collectionFormat:pipes is no longer supported except for in:query parameters")),"multi"===t&&(e.explode=!0),"tsv"===t&&(a.warnings.push("collectionFormat:tsv is no longer supported"),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&"body"!==e.type&&"formData"!==e.in)if(e.items&&e.schema)a.warnings.push(e.name+" parameter has array,items and schema");else{e.schema&&a.patches++,e.schema&&"object"==typeof e.schema||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,dI(e.schema.items,null,(r,n)=>{"collectionFormat"===n&&"string"==typeof r[n]&&(t&&r[n]!==t&&a.warnings.push(e.name+" Nested collectionFormats are not supported"),delete r[n])}));for(let t of cI.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t]),delete e[t]}e.schema&&mI(e.schema,a),e["x-ms-skip-url-encoding"]&&"query"===e.in&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&"formData"===e.in){c=!1,s.content={};let t="application/x-www-form-urlencoded";if(i.length&&0<=i.indexOf("multipart/form-data")&&(t="multipart/form-data"),s.content[t]={},e.schema)s.content[t].schema=e.schema;else{s.content[t].schema={},s.content[t].schema.type="object",s.content[t].schema.properties={},s.content[t].schema.properties[e.name]={};let r=s.content[t].schema,n=s.content[t].schema.properties[e.name];e.description&&(n.description=e.description),e.example&&(n.example=e.example),e.type&&(n.type=e.type);for(let t of cI.parameterTypeProperties)void 0!==e[t]&&(n[t]=e[t]);!0===e.required&&(r.required||(r.required=[]),r.required.push(e.name),s.required=!0),void 0!==e.default&&(n.default=e.default),n.properties&&(n.properties=e.properties),e.allOf&&(n.allOf=e.allOf),"array"===e.type&&e.items&&(n.items=e.items,n.items.collectionFormat)&&delete n.items.collectionFormat,"file"!==l&&"file"!==e["x-s2o-originalType"]||(n.type="string",n.format="binary"),fI(e,n)}}else e&&"file"===e.type&&(e.required&&(s.required=e.required),s.content={},s.content["application/octet-stream"]={},s.content["application/octet-stream"].schema={},s.content["application/octet-stream"].schema.type="string",s.content["application/octet-stream"].schema.format="binary",fI(e,s));if(e&&"body"===e.in){s.content={},e.name&&(s["x-s2o-name"]=(t&&t.operationId?cI.sanitiseAll(t.operationId):"")+cI.camelize("_"+e.name)),e.description&&(s.description=e.description),e.required&&(s.required=e.required),i.length||i.push("application/json");for(let t of i)s.content[t]={},s.content[t].schema=cI.clone(e.schema||{}),mI(s.content[t].schema,a);fI(e,s)}if(0<Object.keys(s).length&&(e["x-s2o-delete"]=!0,t))if(t.requestBody&&c){t.requestBody["x-s2o-overloaded"]=!0;let e=t.operationId||o;a.warnings.push(`Operation ${e} has multiple requestBodies`)}else t.requestBody||(t=((e,t)=>{var n,r={};for(n of Object.keys(e))r[n]=e[n],"parameters"===n&&(r.requestBody={},t.rbname)&&(r[t.rbname]="");return r.requestBody={},r})(t,a),r[n]=t),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&s.content["multipart/form-data"]&&s.content["multipart/form-data"].schema&&s.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,s.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(s.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&s.content["application/x-www-form-urlencoded"]&&s.content["application/x-www-form-urlencoded"].schema&&s.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,s.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(s.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,s),t.requestBody["x-s2o-name"]||t.operationId&&(t.requestBody["x-s2o-name"]=cI.sanitiseAll(t.operationId)));if(e&&!e["x-s2o-delete"]){delete e.type;for(let t of cI.parameterTypeProperties)delete e[t];"path"!==e.in||void 0!==e.required&&!0===e.required||(e.required=!0,a.patches++,a.warnings.push(`(Patchable) path parameters must be required:true [${e.name} in ${o}]`))}return t}function wI(e,t,r,n,o){if(e){if(e.description||"object"!=typeof e||Array.isArray(e)||(o.patches++,o.warnings.push("(Patchable) response.description is mandatory")),void 0!==e.schema){mI(e.schema,o),r&&r.produces&&"string"==typeof r.produces&&(r.produces=[r.produces],o.patches++,o.warnings.push("(Patchable) operation.produces must be an array")),n.produces&&!Array.isArray(n.produces)&&delete n.produces;let t=((r?r.produces:null)||n.produces||[]).filter(cI.uniqueOnly);t.length||t.push("*/*"),e.content={};for(let r of t){if(e.content[r]={},e.content[r].schema=cI.clone(e.schema),e.examples&&e.examples[r]){let t={};t.value=e.examples[r],e.content[r].examples={},e.content[r].examples.response=t,delete e.examples[r]}"file"===e.content[r].schema.type&&(e.content[r].schema={type:"string",format:"binary"})}delete e.schema}for(let t in e.examples)e.content||(e.content={}),e.content[t]||(e.content[t]={}),e.content[t].examples={},e.content[t].examples.response={},e.content[t].examples.response.value=e.examples[t];if(delete e.examples,e.headers)for(let t in e.headers)"status code"===t.toLowerCase()?(delete e.headers[t],o.patches++,o.warnings.push('(Patchable) "Status Code" is not a valid header')):bI(e.headers[t],o)}}function kI(e,t,r,n,o){for(var i in e){var a=e[i];a&&a["x-trace"]&&"object"==typeof a["x-trace"]&&(a.trace=a["x-trace"],delete a["x-trace"]),a&&a["x-summary"]&&"string"==typeof a["x-summary"]&&(a.summary=a["x-summary"],delete a["x-summary"]),a&&a["x-description"]&&"string"==typeof a["x-description"]&&(a.description=a["x-description"],delete a["x-description"]),a&&a["x-servers"]&&Array.isArray(a["x-servers"])&&(a.servers=a["x-servers"],delete a["x-servers"]);for(let e in a)if(0<=cI.httpMethods.indexOf(e)||"x-amazon-apigateway-any-method"===e){let s=a[e];if(s&&s.parameters&&Array.isArray(s.parameters)){if(a.parameters)for(let t of a.parameters)s.parameters.find(e=>e.name===t.name&&e.in===t.in)||"formData"!==t.in&&"body"!==t.in&&"file"!==t.type||(s=xI(t,s,a,e,i,o,r));for(let t of s.parameters)s=xI(t,s,a,e,e+": "+i,o,r);s.parameters&&(s.parameters=s.parameters.filter(vI))}if(s&&s.security&&yI(s.security),"object"==typeof s){if(!s.responses){let e={description:"Default response"};s.responses={default:e}}for(let e in s.responses)wI(s.responses[e],0,s,o,r)}if(s&&s["x-servers"]&&Array.isArray(s["x-servers"]))s.servers=s["x-servers"],delete s["x-servers"];else if(s&&s.schemes&&s.schemes.length)for(let e of s.schemes)if((!o.schemes||o.schemes.indexOf(e)<0)&&(s.servers||(s.servers=[]),Array.isArray(o.servers)))for(let e of o.servers){let t=cI.clone(e);s.servers.push(t)}if(s){if(delete s.consumes,delete s.produces,delete s.schemes,s["x-ms-examples"]){for(let e in s["x-ms-examples"]){let t=s["x-ms-examples"][e],r=cI.sanitiseAll(e);if(t.parameters)for(let r in t.parameters){let n=t.parameters[r];for(let t of(s.parameters||[]).concat(a.parameters||[]))t.name!==r||t.example||(t.examples||(t.examples={}),t.examples[e]={value:n})}if(t.responses)for(let n in t.responses){if(t.responses[n].headers)for(let e in t.responses[n].headers){let r=t.responses[n].headers[e];for(let t in s.responses[n].headers)t===e&&(s.responses[n].headers[t].example=r)}if(t.responses[n].body&&(o.components.examples[r]={value:cI.clone(t.responses[n].body)},s.responses[n])&&s.responses[n].content)for(let t in s.responses[n].content){let o=s.responses[n].content[t];o.examples||(o.examples={}),o.examples[e]={$ref:"#/components/examples/"+r}}}}delete s["x-ms-examples"]}if(s.parameters&&0===s.parameters.length&&delete s.parameters,s.requestBody){let r=s.operationId?cI.sanitiseAll(s.operationId):cI.camelize(cI.sanitiseAll(e+i)),o=cI.sanitise(s.requestBody["x-s2o-name"]||r||""),a=(delete s.requestBody["x-s2o-name"],JSON.stringify(s.requestBody)),l=cI.createHash(a);if(!n[l]){let e={};e.name=o,e.body=s.requestBody,e.refs=[],n[l]=e}var c=`#/${t}/${encodeURIComponent(i)}/${e}/requestBody`;n[l].refs.push(c)}}}if(a&&a.parameters){for(let e in a.parameters)xI(a.parameters[e],null,a,null,i,o,r);Array.isArray(a.parameters)&&(a.parameters=a.parameters.filter(vI))}}}function SI(e){e&&e.url&&"string"==typeof e.url&&(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,(t,r)=>{e.variables||(e.variables={}),e.variables[r]={default:"unknown"}}))}function $I(e,t){null==e.info&&(e.info={version:"",title:""},t.patches++,t.warnings.push("(Patchable) info object is mandatory")),"object"==typeof e.info&&!Array.isArray(e.info)||(t.errCount++,t.errors.push({message:"info must be an object",pointer:"/info"})),e.info&&(void 0===e.info.title&&(t.patches++,e.info.title="",t.warnings.push({message:"(Patchable) info.title cannot be null",pointer:"/info/title",patchable:!0})),void 0===e.info.version?(t.patches++,e.info.version="",t.warnings.push("(Patchable) info.version cannot be null")):"string"!=typeof e.info.version&&(t.patches++,e.info.version=e.info.version.toString(),t.warnings.push("(Patchable) info.version must be a string")))}function AI(e,t){e.paths||(t.patches++,e.paths={},t.warnings.push("(Patchable) paths object is mandatory"))}function EI(e={}){let t={original:e,openapi:{},patches:0,warnings:[],errCount:0,errors:[]};if(e.openapi&&"string"==typeof e.openapi&&e.openapi.startsWith("3."))return t.openapi=cI.circularClone(e),$I(t.openapi,t),AI(t.openapi,t),t;if("2.0"!==e.swagger)return t.errCount++,t.errors.push({message:"Unsupported swagger/OpenAPI version: "+(e.openapi||e.swagger),pointer:"/swagger"}),t;var r;if(t.openapi=cI.circularClone(e),t.openapi.openapi="3.0.0",delete t.openapi.swagger,dI(t.openapi,{},(e,t,r)=>{null===e[t]&&!t.startsWith("x-")&&"default"!==t&&r.path.indexOf("/example")<0&&delete e[t]}),e.host?(e.schemes||[]).forEach(r=>{var n={},o=(e.basePath||"").replace(/\/$/,"");n.url=`${r?r+":":""}//`+e.host+o,SI(n),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(n)}):e.basePath&&((r={}).url=e.basePath,SI(r),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(r)),delete t.openapi.host,delete t.openapi.basePath,e["x-ms-parameterized-host"]){let r=e["x-ms-parameterized-host"],n={};n.url=r.hostTemplate+(e.basePath||""),n.variables={};var o=n.url.match(/\{\w+\}/g);for(let e in r.parameters){let t=r.parameters[e];e.startsWith("x-")||(delete t.required,delete t.type,delete t.in,void 0===t.default&&(t.enum?t.default=t.enum[0]:t.default="none"),t.name||(t.name=o[e].replace("{","").replace("}","")),delete(n.variables[t.name]=t).name)}t.openapi.servers||(t.openapi.servers=[]),!1===r.useSchemePrefix?t.openapi.servers.push(n):e.schemes.forEach(e=>{t.openapi.servers.push({...n,url:e+"://"+n.url})}),delete t.openapi["x-ms-parameterized-host"]}return $I(t.openapi,t),AI(t.openapi,t),"string"==typeof t.openapi.consumes&&(t.openapi.consumes=[t.openapi.consumes]),"string"==typeof t.openapi.produces&&(t.openapi.produces=[t.openapi.produces]),t.openapi.components={},t.openapi["x-callbacks"]&&(t.openapi.components.callbacks=t.openapi["x-callbacks"],delete t.openapi["x-callbacks"]),t.openapi.components.examples={},t.openapi.components.headers={},t.openapi["x-links"]&&(t.openapi.components.links=t.openapi["x-links"],delete t.openapi["x-links"]),t.openapi.components.parameters=t.openapi.parameters||{},t.openapi.components.responses=t.openapi.responses||{},t.openapi.components.requestBodies={},t.openapi.components.securitySchemes=t.openapi.securityDefinitions||{},t.openapi.components.schemas=t.openapi.definitions||{},delete t.openapi.definitions,delete t.openapi.responses,delete t.openapi.parameters,delete t.openapi.securityDefinitions,(e=>{let t=e.openapi,r={};hI={schemas:{}},t.security&&yI(t.security);for(let r in t.components.securitySchemes){var n=cI.sanitise(r);if(r!==n){if(t.components.securitySchemes[n])return e.errCount++,e.errors.push({message:"Duplicate sanitised securityScheme name "+n,pointer:"/components/securitySchemes/"+n}),e;t.components.securitySchemes[n]=t.components.securitySchemes[r],delete t.components.securitySchemes[r]}((e,t)=>{if("basic"===e.type&&(e.type="http",e.scheme="basic"),"oauth2"===e.type){var r={};let n=e.flow;"application"===e.flow&&(n="clientCredentials"),"accessCode"===e.flow&&(n="authorizationCode"),"string"==typeof e.authorizationUrl&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),"string"==typeof e.tokenUrl&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,e.name&&(delete e.name,t.patches++,t.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"))}})(t.components.securitySchemes[n],e)}for(let r in t.components.schemas){let n=cI.sanitiseAll(r),o="";if(r!==n){for(;t.components.schemas[n+o];)o=o?++o:2;t.components.schemas[n+o]=t.components.schemas[r],delete t.components.schemas[r]}hI.schemas[r]=n+o,mI(t.components.schemas[""+n+o],e)}for(let r in t.components.parameters){let n=cI.sanitise(r);if(r!==n){if(t.components.parameters[n])return e.errCount++,e.errors.push({message:"Duplicate sanitised parameter name "+n,pointer:"/components/parameters/"+n}),e;t.components.parameters[n]=t.components.parameters[r],delete t.components.parameters[r]}xI(t.components.parameters[n],null,null,null,n,t,e)}for(let r in t.components.responses){let n=cI.sanitise(r);if(r!==n){if(t.components.responses[n])return e.errCount++,e.errors.push({message:"Duplicate sanitised response name "+n,pointer:"/components/responses/"+n}),e;t.components.responses[n]=t.components.responses[r],delete t.components.responses[r]}var o=t.components.responses[n];if(wI(o,0,null,t,e),o.headers)for(let t in o.headers)"status code"===t.toLowerCase()?(delete o.headers[t],e.patches++,e.warnings.push('(Patchable) "Status Code" is not a valid header')):bI(o.headers[t],e)}for(let e in t.components.requestBodies){let n=t.components.requestBodies[e],o=JSON.stringify(n),i=cI.createHash(o),a={};a.name=e,a.body=n,a.refs=[],r[i]=a}kI(t.paths,"paths",e,r,t),t["x-ms-paths"]&&kI(t["x-ms-paths"],"x-ms-paths",e,r,t);for(let e in t.components.parameters)t.components.parameters[e]["x-s2o-delete"]&&delete t.components.parameters[e];return delete t.consumes,delete t.produces,delete t.schemes,t.components.requestBodies={},t.components.responses&&0===Object.keys(t.components.responses).length&&delete t.components.responses,t.components.parameters&&0===Object.keys(t.components.parameters).length&&delete t.components.parameters,t.components.examples&&0===Object.keys(t.components.examples).length&&delete t.components.examples,t.components.requestBodies&&0===Object.keys(t.components.requestBodies).length&&delete t.components.requestBodies,t.components.securitySchemes&&0===Object.keys(t.components.securitySchemes).length&&delete t.components.securitySchemes,t.components.headers&&0===Object.keys(t.components.headers).length&&delete t.components.headers,t.components.schemas&&0===Object.keys(t.components.schemas).length&&delete t.components.schemas,t.components&&0===Object.keys(t.components).length&&delete t.components,e})(t)}function OI(e){return new Promise(async t=>{try{var r=await sI.resolve(e);if(!(r.errors&&0<r.errors.length)){r.spec.openapi&&(r.resolvedSpec=r.spec,t(r));let e=EI(r.spec);e.errors&&0<e.errors.length&&(Array.isArray(r.errors)?r.errors.concat(r.errors):r.errors=e.errors),e.warnings&&0<e.warnings.length&&(r.warnings=e.warnings),r.resolvedSpec=r.spec,r.spec=e.openapi}t(r)}catch(e){t(e)}})}async function TI(e,t=!1,r=!1,n="",o="",i="",a="",s=""){let l,c,p;try{var d,h,f,m,y;let t;if(this.requestUpdate(),t="string"==typeof e?await OI({url:e,allowMetaPatches:!1}):await OI({spec:e,allowMetaPatches:!1}),await rt(0),null!=(u=t.resolvedSpec)&&u.jsonSchemaViewer&&null!=(d=t.resolvedSpec)&&d.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:t.resolvedSpec}}));let e=Object.entries(t.resolvedSpec.schemaAndExamples).map(e=>({show:!0,expanded:!0,selectedExample:null,name:e[0],elementId:e[0].replace(et,"-"),...e[1]}));return{specLoadError:!1,isSpecLoading:!1,info:t.resolvedSpec.info,schemaAndExamples:e}}if(!t.spec||!(t.spec.components||t.spec.info||t.spec.servers||t.spec.tags||t.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",t),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:null!=(h=t.response)&&h.url?`${null==(f=t.response)?void 0:f.url} ┃ ${null==(m=t.response)?void 0:m.status}  `+(null==(y=t.response)?void 0:y.statusText):"Unable to load the Spec",version:" "},tags:[]};p=t.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:p}}))}catch(e){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",e)}let g=((e,t,r=!1,n=!1)=>{let o=["get","put","post","delete","patch","head","options"],i=e.tags&&Array.isArray(e.tags)?e.tags.map(e=>({show:!0,elementId:"tag--"+e.name.replace(et,"-"),name:e.name,description:e.description||"",headers:e.description?_I(e.description):[],paths:[],expanded:!1!==e["x-tag-expanded"]})):[],a=e.paths||{};if(e.webhooks)for(let[t,r]of Object.entries(e.webhooks))r._type="webhook",a[t]=r;for(let t in a){let n=a[t].parameters,s={servers:a[t].servers||[],parameters:a[t].parameters||[]},l="webhook"===a[t]._type;o.forEach(o=>{if(a[t][o]){let a=e.paths[t][o],c=a.tags||[];if(0===c.length)if(r){let e=t.replace(/^\/+|\/+$/g,""),r=e.indexOf("/");-1===r?c.push(e):c.push(e.substr(0,r))}else c.push("General ⦂");c.forEach(r=>{let c,p,u,d,h=(e.tags&&(p=e.tags.find(e=>e.name.toLowerCase()===r.toLowerCase())),(c=i.find(e=>e.name===r))||(c={show:!0,elementId:"tag--"+r.replace(et,"-"),name:r,description:(null==(u=p)?void 0:u.description)||"",headers:null!=(d=p)&&d.description?_I(p.description):[],paths:[],expanded:!p||!1!==p["x-tag-expanded"]},i.push(c)),(a.summary||a.description||o.toUpperCase()+" "+t).trim());100<h.length&&([h]=h.split(/[.|!|?]\s|[\r?\n]/));var f=n?a.parameters?n.filter(e=>{if(!a.parameters.some(t=>e.name===t.name&&e.in===t.in))return e}).concat(a.parameters):n.slice(0):a.parameters?a.parameters.slice(0):[];if(a.callbacks)for(let[e,t]of Object.entries(a.callbacks)){let r=Object.entries(t).filter(e=>"object"==typeof e[1])||[];a.callbacks[e]=Object.fromEntries(r)}c.paths.push({show:!0,expanded:!1,isWebhook:l,expandedAtLeastOnce:!1,summary:a.summary||"",description:a.description||"",shortSummary:h,method:o,path:t,operationId:a.operationId,elementId:o+"-"+t.replace(et,"-"),servers:a.servers?s.servers.concat(a.servers):s.servers,parameters:f,requestBody:a.requestBody,responses:a.responses,callbacks:a.callbacks,deprecated:a.deprecated,security:a.security,xBadges:a["x-badges"]||void 0,xCodeSamples:a["x-codeSamples"]||a["x-code-samples"]||""})})}})}let s=i.filter(e=>e.paths&&0<e.paths.length);return s.forEach(e=>{"method"===t?e.paths.sort((e,t)=>o.indexOf(e.method).toString().localeCompare(o.indexOf(t.method))):"summary"===t?e.paths.sort((e,t)=>e.shortSummary.localeCompare(t.shortSummary)):"path"===t&&e.paths.sort((e,t)=>e.path.localeCompare(t.path)),e.firstPathId=e.paths[0].elementId}),n?s.sort((e,t)=>e.name.localeCompare(t.name)):s})(p,n,t,r),v=(e=>{if(!e.components)return[];let t=[];for(var r in e.components){var n=[];for(let t in e.components[r]){let o={show:!0,id:(r.toLowerCase()+"-"+t.toLowerCase()).replace(et,"-"),name:t,component:e.components[r][t]};n.push(o)}let o=r,i=r;switch(r){case"schemas":i="Schemas",o="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":i="Responses",o="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":i="Parameters",o="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":i="Examples",o="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":i="Request Bodies",o="Describes common request bodies that are used across the API operations.";break;case"headers":i="Headers",o='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":i="Security Schemes",o="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":i="Links",o="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":i="Callbacks",o="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:i=r,o=r}var a={show:!0,name:i,description:o,subComponents:n};t.push(a)}return t||[]})(p),b=null!=(l=p.info)&&l.description?_I(p.info.description):[],x=[];if(null!=(c=p.components)&&c.securitySchemes){let e=new Set;Object.entries(p.components.securitySchemes).forEach(t=>{var r;e.has(t[0])||(e.add(t[0]),(r={securitySchemeId:t[0],...t[1]}).value="",r.finalKeyValue="","apiKey"===t[1].type||"http"===t[1].type?(r.in=t[1].in||"header",r.name=t[1].name||"Authorization",r.user="",r.password=""):"oauth2"===t[1].type&&(r.in="header",r.name="Authorization",r.clientId="",r.clientSecret=""),x.push(r))})}o&&i&&a&&x.push({securitySchemeId:tt,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:o,in:i,value:a,finalKeyValue:a}),x.forEach(e=>{"http"===e.type?e.typeDisplay="basic"===e.scheme?"HTTP Basic":"HTTP Bearer":"apiKey"===e.type?e.typeDisplay=`API Key (${e.name})`:"oauth2"===e.type?e.typeDisplay=`OAuth (${e.securitySchemeId})`:e.typeDisplay=e.type||"None"});var u;return p.servers&&Array.isArray(p.servers)?(p.servers.forEach(e=>{let t=e.url.trim();t.startsWith("http")||t.startsWith("//")||t.startsWith("{")||window.location.origin.startsWith("http")&&(e.url=window.location.origin+e.url,t=e.url),e.variables&&Object.entries(e.variables).forEach(e=>{var r=new RegExp(`{${e[0]}}`,"g");t=t.replace(r,e[1].default||""),e[1].value=e[1].default||""}),e.computedUrl=t}),s&&p.servers.push({url:s,computedUrl:s})):s?p.servers=[{url:s,computedUrl:s}]:window.location.origin.startsWith("http")?p.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:p.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],u=p.servers,{specLoadError:!1,isSpecLoading:!1,info:p.info,infoDescriptionHeaders:b,tags:g,components:v,externalDocs:p.externalDocs,securitySchemes:x,servers:u}}function _I(e){return Ue.lexer(e).filter(e=>"heading"===e.type&&e.depth<=2)||[]}Sl=e=>(...t)=>({_$litDirective$:e,values:t});class jI{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class II extends jI{constructor(e){if(super(e),this.it=M,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===M||null==e)return this.ft=void 0,this.it=e;if(e===N)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");return e===this.it?this.ft:(e=[this.it=e],this.ft={_$litType$:this.constructor.resultType,strings:e.raw=e,values:[]})}}II.directiveName="unsafeHTML",II.resultType=1;let PI=Sl(II),RI="rapidoc";function LI(e,t="",r="",n=""){var i,o=null==(o=this.resolvedSpec.securitySchemes)?void 0:o.find(t=>t.securitySchemeId===e);if(!o)return!1;let s="",l;return"basic"===(null==(i=o.scheme)?void 0:i.toLowerCase())?t&&(s="Basic "+btoa(t+":"+r)):n&&(o.value=n,s=("bearer"===(null==(l=o.scheme)?void 0:l.toLowerCase())?"Bearer ":"")+n),!!s&&(o.finalKeyValue=s,this.requestUpdate(),!0)}function DI(){var e;null!=(e=this.resolvedSpec.securitySchemes)&&e.forEach(e=>{e.user="",e.password="",e.value="",e.finalKeyValue=""}),this.requestUpdate()}function BI(){return JSON.parse(localStorage.getItem(RI))||{}}function NI(e){localStorage.setItem(RI,JSON.stringify(e))}function FI(e){let t="",r=this.resolvedSpec.securitySchemes.find(t=>t.securitySchemeId===e);if(r){var n=this.shadowRoot.getElementById("security-scheme-"+e);if(n){if(r.type&&r.scheme&&"http"===r.type&&"basic"===r.scheme.toLowerCase()){let t=n.querySelector(".api-key-user").value.trim(),r=n.querySelector(".api-key-password").value.trim();LI.call(this,e,t,r)}else t=n.querySelector(".api-key-input").value.trim(),LI.call(this,e,"","",t);if("true"===this.persistAuth){let t=BI.call(this);t[e]=r,NI.call(this,t)}}}}function UI(e,t,r="Bearer"){this.resolvedSpec.securitySchemes.find(t=>t.securitySchemeId===e).finalKeyValue=`${"bearer"===r.toLowerCase()?"Bearer":"mac"===r.toLowerCase()?"MAC":r} `+t,this.requestUpdate()}async function zI(e,t,r,n,o,i,a,s,l="header",c=null,p=null,u=null){var s=s?s.querySelector(".oauth-resp-display"):void 0,h=new URLSearchParams,f=new Headers;h.append("grant_type",o),"client_credentials"!==o&&"password"!==o&&h.append("redirect_uri",n),i&&(h.append("code",i),h.append("code_verifier","731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890")),"header"===l?f.set("Authorization","Basic "+btoa(t+":"+r)):(h.append("client_id",t),h.append("client_secret",r)),"password"===o&&(h.append("username",p),h.append("password",u)),c&&h.append("scope",c);try{let t=await fetch(e,{method:"POST",headers:f,body:h}),r=await t.json();return t.ok?r.token_type&&r.access_token?(UI.call(this,a,r.access_token,r.token_type),s&&(s.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0):void 0:(s&&(s.innerHTML=`<span style="color:var(--red)">${r.error_description||"Unable to get access token"}</span>`),!1)}catch(e){return s&&(s.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function HI(e,t,r,n,o){let i=o.target.closest(".oauth-flow"),a=i.querySelector(".oauth-client-id")?i.querySelector(".oauth-client-id").value.trim():"",s=i.querySelector(".oauth-client-secret")?i.querySelector(".oauth-client-secret").value.trim():"",l=i.querySelector(".api-key-user")?i.querySelector(".api-key-user").value.trim():"",c=i.querySelector(".api-key-password")?i.querySelector(".api-key-password").value.trim():"",p=i.querySelector(".oauth-send-client-secret-in")?i.querySelector(".oauth-send-client-secret-in").value.trim():"header",u=[...i.querySelectorAll(".scope-checkbox:checked")],d=i.querySelector(`#${e}-pkce`),h=(Math.random().toString(36)+"random").slice(2,9),f=(Math.random().toString(36)+"random").slice(2,9),m=new URL(""+window.location.origin+window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))+"/"+this.oauthReceiver),y,g="",v="";if([...i.parentNode.querySelectorAll(".oauth-resp-display")].forEach(e=>{e.innerHTML=""}),"authorizationCode"===t||"implicit"===t){let o=new URL(r),l=("authorizationCode"===t?(g="authorization_code",v="code"):"implicit"===t&&(v="token"),new URLSearchParams(o.search)),c=u.map(e=>e.value).join(" ");c&&l.set("scope",c),l.set("client_id",a),l.set("redirect_uri",m.toString()),l.set("response_type",v),l.set("state",h),l.set("nonce",f),d&&d.checked&&(l.set("code_challenge","4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc"),l.set("code_challenge_method","S256")),l.set("show_dialog",!0),o.search=l.toString(),"true"===sessionStorage.getItem("winMessageEventActive")&&window.postMessage({fake:!0},this),setTimeout(()=>{(y=window.open(o.toString()))?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",t=>async function(e,t,r,n,o,i,a,s,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&("code"===e.data.responseType?zI.call(this,r,n,o,i,a,e.data.code,l,c,s):"token"===e.data.responseType&&UI.call(this,l,e.data.access_token,e.data.token_type)))}.call(this,t,y,n,a,s,m.toString(),g,p,e,i),{once:!0})):console.error(`RapiDoc: Unable to open ${o.toString()} in a new window`)},10)}else if("clientCredentials"===t){g="client_credentials";let t=u.map(e=>e.value).join(" ");zI.call(this,n,a,s,m.toString(),g,"",e,i,p,t)}else if("password"===t){g="password";let t=u.map(e=>e.value).join(" ");zI.call(this,n,a,s,m.toString(),g,"",e,i,p,t,l,c)}}function GI(){var e;return this.resolvedSpec?(e=null==(e=this.resolvedSpec.securitySchemes)?void 0:e.filter(e=>e.finalKeyValue))?B`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${0<e.length?B`
          <div class="blue-text"> ${e.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${()=>{DI.call(this)}}>CLEAR ALL API KEYS</button>`:B`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes&&0<this.resolvedSpec.securitySchemes.length?B`
        <table id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map(e=>B`
            <tr id="security-scheme-${e.securitySchemeId}" class="${e.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${e.typeDisplay}</span>
                  ${e.finalKeyValue?B`
                      <span class='blue-text'>  ${e.finalKeyValue?"Key Applied":""} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${()=>{!function(e){var t=null==(t=this.resolvedSpec.securitySchemes)?void 0:t.find(t=>t.securitySchemeId===e);if(t.user="",t.password="",t.value="",t.finalKeyValue="","true"===this.persistAuth){let e=BI.call(this);delete e[t.securitySchemeId],NI.call(this,e)}this.requestUpdate()}.call(this,e.securitySchemeId)}}>REMOVE</button>
                      `:""}
                </div>
                ${e.description?B`
                    <div class="m-markdown">
                      ${PI(Ue(e.description||""))}
                    </div>`:""}

                ${"apikey"===e.type.toLowerCase()||"http"===e.type.toLowerCase()&&"bearer"===e.scheme.toLowerCase()?B`
                    <div style="margin-bottom:5px">
                      ${"apikey"===e.type.toLowerCase()?B`Send <code>${e.name}</code> in <code>${e.in}</code>`:B`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${"cookie"!==e.in?B`
                          <input type = "text" value = "${e.value}" class="${e.type} ${e.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${t=>{FI.call(this,e.securitySchemeId,t)}}">
                            ${e.finalKeyValue?"UPDATE":"SET"}
                          </button>`:B`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>`:""}
                ${"http"===e.type.toLowerCase()&&"basic"===e.scheme.toLowerCase()?B`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${e.user}" placeholder="username" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${e.password}" placeholder="password" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${t=>{FI.call(this,e.securitySchemeId,t)}}"
                        part = "btn btn-outline"
                      >
                        ${e.finalKeyValue?"UPDATE":"SET"}
                      </button>
                    </div>`:""}
              </td>
            </tr>
            ${"oauth2"===e.type.toLowerCase()?B`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(e.flows).map(t=>function(e,t,r,n,o,i=[],a="header"){let{authorizationUrl:s,tokenUrl:l,refreshUrl:c}=o;var p=e=>0<e.indexOf("://")||0===e.indexOf("//");return c&&!p(c)&&(c=this.selectedServer.computedUrl+"/"+c.replace(/^\//,"")),l&&!p(l)&&(l=this.selectedServer.computedUrl+"/"+l.replace(/^\//,"")),s&&!p(s)&&(s=this.selectedServer.computedUrl+"/"+s.replace(/^\//,"")),p="authorizationCode"===e?"Authorization Code Flow":"clientCredentials"===e?"Client Credentials Flow":"implicit"===e?"Implicit Flow":"password"===e?"Password Flow":e,B`
    <div class="oauth-flow ${e}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${p}</div>
      ${s?B`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${s} </span></div>`:""}
      ${l?B`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${l}</span></div>`:""}
      ${c?B`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${c}</span></div>`:""}
      ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?B`
          ${o.scopes?B`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(o.scopes).map((t,r)=>B`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${n}${e}${r}" ?checked="${i.includes(t[0])}" value="${t[0]}">
                    <label for="${n}${e}${r}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${t[0]}</span>
                        ${t[0]!==t[1]?" - "+(t[1]||""):""}
                    </label>
                  </div>
                `)}
              </div>
            `:""}
          ${"password"===e?B`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${e} ${n} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${e} ${n} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>`:""}
          <div>
            ${"authorizationCode"===e?B`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${n}-pkce" checked>
                  <label for="${n}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              `:""}
            <input type="text" part="textbox textbox-auth-client-id" value = "${t||""}" placeholder="client-id" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-id">
            ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?B`
                <input type="password" part="textbox textbox-auth-client-secret" value = "${r||""}" placeholder="client-secret" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-secret" style = "margin:0 5px;">
                ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?B`
                    <select style="margin-right:5px;" class="${e} ${n} oauth-send-client-secret-in">
                      <option value = 'header' .selected = ${"header"===a} > Authorization Header </option>
                      <option value = 'request-body' .selected = ${"request-body"===a}> Request Body </option>
                    </select>`:""}`:""}
            ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?B`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${t=>{HI.call(this,n,e,s,l,t)}}"
                > GET TOKEN </button>`:""}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>
  `}.call(this,t,e["x-client-id"],e["x-client-secret"],e.securitySchemeId,e.flows[t],e["x-default-scopes"],e["x-receive-token-in"]))}
                  </td>
                </tr>
                `:""}
          `)}
        </table>`:""}
    <slot name="auth"></slot>
  </section>
`:void 0:""}function YI(e){if(this.resolvedSpec.securitySchemes&&e){let t=[];return e.forEach(e=>{let r=[],n=[];0===Object.keys(e).length?t.push({securityTypes:"None",securityDefs:[]}):(Object.keys(e).forEach(t=>{let o="";var i=this.resolvedSpec.securitySchemes.find(e=>e.securitySchemeId===t);e[t]&&Array.isArray(e[t])&&(o=e[t].join(", ")),i&&(n.push(i.typeDisplay),r.push({...i,scopes:o}))}),t.push({securityTypes:1<n.length?`${n[0]} + ${n.length-1} more`:n[0],securityDefs:r}))}),B`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="16" height="24">
          <g>
            <path style="fill: var(--fg3)" d="m13.8,8.5l0,-2.6l0,0c0,-3.2 -2.6,-5.8 -5.8,-5.8s-5.8,2.6 -5.8,5.8l0,0l0,2.6l-2.1,0l0,11.2l16,0l0,-11.2l-2.1,0l-0,0l0,0l0,0l-0,0zm-9.8,-2.6c0,0 0,0 0,0c0,-2.2 1.8,-4 4,-4c2.2,0 4,1.8 4,4c0,0 0,0 0,0l0,2.6l-8.03,0l0,-2.6l0,0l0,0z" />
          </g>
        </svg>
          ${t.map((e,t)=>B`

          ${e.securityTypes?B`
              ${0!==t?B`<div style="padding:3px 4px;"> OR </div>`:""}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  ${"true"===this.updateRoute&&"true"===this.allowAuthentication?B`<a part="anchor anchor-operation-security" href="#auth"> ${e.securityTypes} </a>`:B`${e.securityTypes}`}
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${1<e.securityDefs.length?B`<div>Requires <b>all</b> of the following </div>`:""}
                  <div style="padding-left: 8px">
                    ${e.securityDefs.map((t,r)=>{var n=B`${""!==t.scopes?B`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${t.scopes.split(",").map((e,t)=>B`${0===t?"":"┃"}<span>${e}</span>`)}
                            </div>
                          </div>`:""}`;return B`
                      ${"oauth2"===t.type?B`
                          <div>
                            ${1<e.securityDefs.length?B`<b>${r+1}.</b> &nbsp;`:"Needs"}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${t.securitySchemeId}</span> in <b>Authorization header</b>
                            ${n}
                          </div>`:"http"===t.type?B`
                            <div>
                              ${1<e.securityDefs.length?B`<b>${r+1}.</b> &nbsp;`:B`Requires`}
                              ${"basic"===t.scheme?"Base 64 encoded username:password":"Bearer Token"} in <b>Authorization header</b>
                              ${n}
                            </div>`:B`
                            <div>
                              ${1<e.securityDefs.length?B`<b>${r+1}.</b> &nbsp;`:B`Requires`}
                              Token in <b>${t.name} ${t.in}</b>
                              ${n}
                            </div>`}`})}
                  </div>
                </div>
              </div>
            `:""}
        `)}
      </div>
    `}return""}function KI(e){return B`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${e=>{if(e.target.classList.contains("tab-btn")){let t=e.target.dataset.tab,r=[...e.currentTarget.querySelectorAll(".tab-btn")],n=[...e.currentTarget.querySelectorAll(".tab-content")];r.forEach(e=>e.classList[e.dataset.tab===t?"add":"remove"]("active")),n.forEach(e=>{e.style.display=e.dataset.tab===t?"block":"none"})}}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map((e,t)=>B`<button class="tab-btn ${0===t?"active":""}" data-tab = '${e.lang}${t}'> ${e.label||e.lang} </button>`)}
    </div>
    ${e.map((e,t)=>B`
      <div class="tab-content m-markdown" style= "display:${0===t?"block":"none"}" data-tab = '${e.lang}${t}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${t=>{nt(e.source,t)}}'> Copy </button>
        <pre><code class="language">${qe().languages[null==(t=e.lang)?void 0:t.toLowerCase()]?PI(qe().highlight(e.source,qe().languages[null==(t=e.lang)?void 0:t.toLowerCase()],null==(t=e.lang)?void 0:t.toLowerCase())):e.source}</code></pre>
      </div>`)}
  </section>`}function JI(e){return B`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map(e=>B`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${e[0]}
        ${Object.entries(e[1]).map(e=>B`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div> 
              ${Object.entries(e[1]).map(t=>{var r;return B`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${t[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${t[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${e[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${t[0]||""}", 
                      path = "${e[0]||""}" 
                      .parameters = "${(null==(r=t[1])?void 0:r.parameters)||""}" 
                      .request_body = "${(null==(r=t[1])?void 0:r.requestBody)||""}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      use-summary-to-list-example = "${this.useSummaryToListExamples}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                      schema-hide-read-only = "false"
                      schema-hide-write-only = "${this.schemaHideWriteOnly}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${null==(r=t[1])?void 0:r.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "${this.schemaHideReadOnly}"
                      schema-hide-write-only = "false"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-response>
                  </div>
                </div>  
              `})}
            </div>  
          </div>  
        `)}
      </div>  
    `)}
  `}let ZI={},XI=Sl(class extends jI{constructor(){super(...arguments),this.nt=ZI}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every((e,t)=>e===this.nt[t]))return N}else if(this.nt===t)return N;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,r)}}),eP={},tP=Sl(class extends jI{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==e.strings)throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t!==N&&t!==M){var r=e.element,n=e.name;if(3===e.type){if(t===r[n])return N}else if(4===e.type){if(!!t===r.hasAttribute(n))return N}else if(1===e.type&&r.getAttribute(n)===t+"")return N;((e,t=eP)=>{e._$AH=t})(e)}return t}}),rP=l`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`;function nP(e){if(e){let t="",r="";if(e.$ref){let r=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(r+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join(2===e.length?" or ":"┃"):e.type,(e.format||e.enum)&&(t=t.replace("string",e.enum?"enum":e.format)),e.nullable&&(t+="┃null")):t=0===Object.keys(e).length?"any":"{missing-type-info}";var n={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"🆁":e.writeOnly?"🆆":"",deprecated:e.deprecated?"❌":"",examples:e.examples||e.example,default:null!=e.default?""+e.default:"",description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if("{recursive}"===n.type?n.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):"{missing-type-info}"!==n.type&&"any"!==n.type||(n.description=n.description||""),n.allowedValues=Array.isArray(e.enum)?e.enum.join("┃"):"","array"===t&&e.items){let o,i,a,t=null==(o=e.items)?void 0:o.type,r=void 0!==(null==(i=e.items)?void 0:i.default)?e.items.default:"";n.arrayType=e.type+" of "+(Array.isArray(t)?t.join(""):t),n.default=r,n.allowedValues=Array.isArray(null==(a=e.items)?void 0:a.enum)?e.items.enum.join("┃"):""}return t.match(/integer|number/g)&&(void 0===e.minimum&&void 0===e.exclusiveMinimum||(r+=void 0!==e.minimum?"Min "+e.minimum:"More than "+e.exclusiveMinimum),void 0===e.maximum&&void 0===e.exclusiveMaximum||(r+=void 0!==e.maximum?`${r?"┃":""}Max `+e.maximum:`${r?"┃":""}Less than `+e.exclusiveMaximum),void 0!==e.multipleOf)&&(r+=`${r?"┃":""} multiple of `+e.multipleOf),t.match(/string/g)&&(void 0!==e.minLength&&void 0!==e.maxLength?r+=(r?"┃":"")+e.minLength+` to ${e.maxLength} chars`:void 0!==e.minLength?r+=`${r?"┃":""}Min ${e.minLength} chars`:void 0!==e.maxLength&&(r+=`Max ${r?"┃":""}${e.maxLength} chars`)),n.constrain=r,n.html=`${n.type}~|~${n.readOrWriteOnly}~|~${n.constrain}~|~${n.default}~|~${n.allowedValues}~|~${n.pattern}~|~${n.description}~|~${e.title||""}~|~`+(n.deprecated?"deprecated":""),n}}function oP(e){return e&&{Example:{value:e}}}function iP(e,t="string"){let r,n;if(e){if(e.constructor===Object){let t=Object.values(e);r=0<t.length?"boolean"==typeof t[0].value||"number"==typeof t[0].value?t[0].value.toString():t[0].value:"",n=Object.values(e).map(e=>({value:"boolean"==typeof e.value||"number"==typeof e.value?e.value.toString():e.value,description:e.description||e.summary||e.value}))}else 0<(e=Array.isArray(e)?e:e?[e]:[]).length&&(n="array"===t?([r]=e,e.map(e=>({value:e,description:Array.isArray(e)?e.join(" , "):e}))):(r=e[0].toString(),e.map(e=>({value:e.toString(),description:e}))));return{exampleVal:r,exampleList:n}}return{exampleVal:"",exampleList:[]}}function aP(e){let t=e.examples?e.examples[0]:null===e.example?null:e.example||void 0;if(""===t)return"";if(null===t)return null;if(0===t)return 0;if(t)return t;if(0===Object.keys(e).length)return null;if(e.$ref)return e.$ref;let r=Array.isArray(e.type)?e.type[0]:e.type;if(r){if(r.match(/^integer|^number/g)){let t=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),n=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),o=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?n||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return t?t>=o?t:o%t==0?o:Math.ceil(o/t)*t:o}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.pattern)return e.pattern;if(!e.format){let t=Number.isNaN(e.minLength)?void 0:Number(e.minLength),r=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),n=t||(6<r?6:r||void 0);return n?"A".repeat(n):"string"}{let t=(""+Date.now().toString(16)+Math.random().toString(16)+"0").repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[t.substr(0,8),t.substr(8,4),"4000-8"+t.substr(13,3),t.substr(16,12)].join("-");default:return""}}}}return"?"}function sP(e,t=1){var o,r="  ".repeat(t);let n="";if(1===t&&"object"!=typeof e)return`
`+r+e.toString();for(o in e)n=Array.isArray(e[o])||"object"==typeof e[o]?""+n+`
${r}<${o}> ${sP(e[o],t+1)}
${r}</${o}>`:`${n}\n${r}<${o}> ${e[o].toString()} </${o}>`;return n}function lP(e,t){"object"==typeof t&&null!==t&&(e.title&&(t["::TITLE"]=e.title),e.description)&&(t["::DESCRIPTION"]=e.description)}function pP(e,t,r){for(var n in t)t[n][r]=e}function uP(e,t,r){let n=0;var i,o={};for(i in e){for(var a in r)if(o["example-"+n]={...e[i]},o["example-"+n][t]=r[a],n++,10<=n)break;if(10<=n)break}return o}function dP(e,t=0){let n="";if(e.title&&(n=`**${e.title}:** `),e.description&&(n=`${n} ${e.description} `+(e.minItems||e.maxItems?'<span class="more-content">⤵</span><br/>':"")),e.minItems&&(n=n+" **Min Items:** "+e.minItems),e.maxItems&&(n=n+" **Max Items:** "+e.maxItems),0<t&&null!=(t=e.items)&&t.description){let t="";e.items.minProperties&&(t="**Min Properties:** "+e.items.minProperties),e.items.maxProperties&&(t=t+" **Max Properties:** "+e.items.maxProperties),n=`${n} ⮕ ${t} [ ${e.items.description} ] `}return n}function hP(e,t,r=0,n=""){if(e){if(e.allOf){let n={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items)return""+nP(e.allOf[0]).html;e.allOf.map((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){t=(e.anyOf||e.oneOf)&&0<t?t:"",t=hP(e,{},r+1,t);Object.assign(n,t)}else if("array"===e.type||e.items){let t=hP(e,{},r+1);Object.assign(n,t)}else{if(!e.type)return"";{let t="prop"+Object.keys(n).length,r=nP(e);n[t]=""+r.html}}}),t=n}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"","object"===e.type||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(let n in e.properties)e.required&&e.required.includes(n)?t[n+"*"]=hP(e.properties[n],{},r+1):t[n]=hP(e.properties[n],{},r+1)}let o={},i=e.anyOf?"anyOf":"oneOf";e[i].forEach((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){var r=hP(e,{});o["::OPTION~"+(t+1)+(e.title?"~"+e.title:"")]=r,o["::type"]="xxx-of-option"}else if("array"===e.type||e.items){let r=hP(e,{});o["::OPTION~"+(t+1)+(e.title?"~"+e.title:"")]=r,o["::type"]="xxx-of-array"}else{let r="::OPTION~"+(t+1)+(e.title?"~"+e.title:"");o[r]=""+nP(e).html,o["::type"]="xxx-of-option"}}),t[e.anyOf?"::ANY~OF "+n:"::ONE~OF "+n]=o,t["::type"]="xxx-of"}else if(Array.isArray(e.type)){let n=JSON.parse(JSON.stringify(e)),a=[],s=[],l;var o,i;if(n.type.forEach(e=>{var t;e.match(/integer|number|string|null|boolean/g)?a.push(e):"array"===e&&"string"==typeof(null==(t=n.items)?void 0:t.type)&&null!=(t=n.items)&&t.type.match(/integer|number|string|null|boolean/g)?"string"===n.items.type&&n.items.format?a.push(`[${n.items.format}]`):a.push(`[${n.items.type}]`):s.push(e)}),0<a.length&&(n.type=a.join(2===a.length?" or ":"┃"),l=nP(n),0===s.length))return""+((null==(o=l)?void 0:o.html)||"");if(0<s.length){t["::type"]="xxx-of";let o={"::type":"xxx-of-option"};s.forEach((t,i)=>{if("null"===t)o["::OPTION~"+(i+1)]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(t+",")){n.type=Array.isArray(t)?t.join("┃"):t;let e=nP(n);o["::OPTION~"+(i+1)]=e.html}else if("object"===t){let t={"::title":e.title||"","::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(let n in e.properties)e.required&&e.required.includes(n)?t[n+"*"]=hP(e.properties[n],{},r+1):t[n]=hP(e.properties[n],{},r+1);o["::OPTION~"+(i+1)]=t}else"array"===t&&(o["::OPTION~"+(i+1)]={"::title":e.title||"","::description":e.description||"","::type":"array","::props":hP(e.items,{},r+1)})}),o["::OPTION~"+(s.length+1)]=(null==(i=l)?void 0:i.html)||"",t["::ONE~OF"]=o}}else if("object"===e.type||e.properties){t["::title"]=e.title||"",t["::description"]=dP(e,r),t["::type"]="object",t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"";for(let n in e.properties)e.required&&e.required.includes(n)?t[n+"*"]=hP(e.properties[n],{},r+1):t[n]=hP(e.properties[n],{},r+1);e.additionalProperties&&(t["<any-key>"]=hP(e.additionalProperties,{}))}else{if("array"!==e.type&&!e.items){let t=nP(e);return null!=t&&t.html?""+t.html:""}var a;t["::title"]=e.title||"",t["::description"]=dP(e,r),t["::type"]="array",t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"",null!=(a=e.items)&&a.items&&(t["::array-type"]=e.items.items.type),t["::props"]=hP(e.items,{},r+1)}return t}}function fP(e,t,r="",n="",o=!0,i=!0,a="json",s=!1){var l=[];if(r)for(let e in r){let n="",o="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===a)n="string"==typeof r[e].value?r[e].value:JSON.stringify(r[e].value,void 0,2),o="text";else if(n=r[e].value,"string"==typeof r[e].value)try{let t=r[e].value.replace(/([\w]+)(:)/g,'"$1"$2').replace(/'/g,'"');n=JSON.parse(t),o="json"}catch(t){o="text",n=r[e].value}}else n=r[e].value,o="text";l.push({exampleId:e,exampleSummary:r[e].summary||e,exampleDescription:r[e].description||"",exampleType:t,exampleValue:n,exampleFormat:o})}else if(n){let e="",r="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===a)e="string"==typeof n?n:JSON.stringify(n,void 0,2),r="text";else if("object"==typeof n)e=n,r="json";else if("string"==typeof n)try{e=JSON.parse(n),r="json"}catch(t){r="text",e=n}}else e=n,r="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e,exampleFormat:r})}if(0===l.length||!0===s)if(e)if(e.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e.example,exampleFormat:null!=t&&t.toLowerCase().includes("json")&&"object"==typeof e.example?"json":"text"});else if(null!=t&&t.toLowerCase().includes("json")||null!=t&&t.toLowerCase().includes("text")||null!=t&&t.toLowerCase().includes("*/*")||null!=t&&t.toLowerCase().includes("xml")){let r="",n="",s="",c;s=null!=t&&t.toLowerCase().includes("xml")?(r=e.xml&&e.xml.name?`<${e.xml.name}>`:"<root>",n=e.xml&&e.xml.name?`</${e.xml.name}>`:"</root>","text"):a;var p=function e(t,r={}){let n={};if(t){if(t.allOf){let o={};if(1===t.allOf.length&&!t.allOf[0].properties&&!t.allOf[0].items)return t.allOf[0].$ref?"{  }":t.allOf[0].readOnly&&r.includeReadOnly?aP(t.allOf[0]):void 0;t.allOf.forEach(t=>{if("object"===t.type||t.properties||t.allOf||t.anyOf||t.oneOf){var n=e(t,r);Object.assign(o,n)}else if("array"===t.type||t.items){let n=[e(t,r)];Object.assign(o,n)}else{if(!t.type)return"";{let e="prop"+Object.keys(o).length;o[e]=aP(t)}}}),n=o}else if(t.oneOf){let o={};if(t.properties)for(let e in t.properties)o[e]=aP(t.properties[e]);if(0<t.oneOf.length){let i=0;for(let a in t.oneOf){let s=e(t.oneOf[a],r);for(let e in s){let r;if(0<Object.keys(o).length){if(null===s[e]||"object"!=typeof s[e])continue;r=Object.assign(s[e],o)}else r=s[e];n["example-"+i]=r,lP(t.oneOf[a],n["example-"+i]),i++}}}}else if(t.anyOf){let o;if("object"===t.type||t.properties){o={"example-0":{}};for(let n in t.properties){if(t.example){o=t;break}t.properties[n].deprecated&&!r.includeDeprecated||t.properties[n].readOnly&&!r.includeReadOnly||t.properties[n].writeOnly&&!r.includeWriteOnly||(o=uP(o,n,e(t.properties[n],r)))}}let i=0;for(let a in t.anyOf){let s=e(t.anyOf[a],r);for(let e in s){if(void 0!==o)for(let t in o)n["example-"+i]={...o[t],...s[e]};else n["example-"+i]=s[e];lP(t.anyOf[a],n["example-"+i]),i++}}}else if("object"===t.type||t.properties)if(n["example-0"]={},lP(t,n["example-0"]),t.example)n["example-0"]=t.example;else for(let u in t.properties){var s,o,i,a;if((null==(o=t.properties[u])||!o.deprecated||r.includeDeprecated)&&(null==(i=t.properties[u])||!i.readOnly||r.includeReadOnly)&&(null==(a=t.properties[u])||!a.writeOnly||r.includeWriteOnly))if("array"===(null==(s=t.properties[u])?void 0:s.type)||null!=(o=t.properties[u])&&o.items)if(t.properties[u].example)pP(t.properties[u].example,n,u);else if(null!=(i=t.properties[u])&&null!=(a=i.items)&&a.example)pP([t.properties[u].items.example],n,u);else{let o=e(t.properties[u].items,r),i=[];for(let e in o)i[e]=[o[e]];n=uP(n,u,i)}else n=uP(n,u,e(t.properties[u],r))}else{if("array"!==t.type&&!t.items)return{"example-0":aP(t)};var u;if(t.items||t.example)if(t.example)n["example-0"]=t.example;else if(null!=(u=t.items)&&u.example)n["example-0"]=[t.items.example];else{let o=e(t.items,r),i=0;for(let e in o)n["example-"+i]=[o[e]],lP(t.items,n["example-"+i]),i++}else n["example-0"]=[]}return n}}(e,{includeReadOnly:o,includeWriteOnly:i,deprecated:!0});let u=0;for(let e in p)if(p[e]){let o=p[e]["::TITLE"]||"Example "+ ++u,i=p[e]["::DESCRIPTION"]||"";(function cP(e){if("object"==typeof e&&null!==e)for(var t in delete e["::TITLE"],delete e["::DESCRIPTION"],e)cP(e[t])})(p[e]),c=null!=t&&t.toLowerCase().includes("xml")?""+r+sP(p[e])+`
`+n:"text"===a?JSON.stringify(p[e],null,2):p[e],l.push({exampleId:e,exampleSummary:o,exampleDescription:i,exampleType:t,exampleFormat:s,exampleValue:c})}}else null!=t&&t.toLowerCase().includes("jose")?l.push({exampleId:"Example",exampleSummary:"Base64 Encoded",exampleDescription:"",exampleType:t,exampleValue:e.pattern||"bXJpbg==",exampleFormat:"text"}):l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});return l}customElements.define("json-tree",class extends ne{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[He,rP,We,l`
      :host{
        display:flex;
      }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        direction: ltr; 
        text-align: left;
      }

      .open-bracket {
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .close-bracket {
        border: 1px solid transparent;
        border-radius:3px;
        display:inline-block;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .open-bracket.expanded:hover ~ .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .open-bracket.expanded:hover ~ .close-bracket {
        color:var(--primary-color);
      }
      .inside-bracket{
        padding-left:12px;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`,Qe]}render(){return B`
      <div class = "json-tree" >
        <div class='toolbar'> 
          <button class="toolbar-btn" part="btn btn-fill btn-copy" @click='${e=>{nt(JSON.stringify(this.data,null,2),e)}}'> Copy </button>
        </div>
        ${this.generateTree(this.data,!0)}
      </div>  
    `}generateTree(e,t=!1){if(null===e)return B`<div class="null" style="display:inline;">null</div>`;if("object"!=typeof e||e instanceof Date!=0)return"string"==typeof e||e instanceof Date?B`<span class="${typeof e}">"${e}"</span>${t?"":","}`:B`<span class="${typeof e}">${e}</span>${t?"":","}`;{let r=Array.isArray(e)?"array":"pure_object";return 0===Object.keys(e).length?B`${Array.isArray(e)?"[ ],":"{ },"}`:B`
      <div class="open-bracket expanded ${"array"==r?"array":"object"} " @click="${this.toggleExpand}" > ${"array"==r?"[":"{"}</div>
      <div class="inside-bracket">
        ${Object.keys(e).map((t,n,o)=>B`
          <div class="item"> 
            ${"pure_object"==r?B`"${t}":`:""}
            ${this.generateTree(e[t],n===o.length-1)}
          </div>`)}
      </div>
      <div class="close-bracket">${"array"==r?"]":"}"}${t?"":","}</div>
      `}}toggleExpand(e){var t=e.target;t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{")}});let gP=l`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-descr .key {
  overflow:hidden;
}

.expanded-descr .more-content { display:none; }

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}
.collapsed-descr .tr {
  max-height:20px;
}

.tr.xxx-of{
  border-top: 1px dotted var(--primary-color);
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
    font-family: var(--font-regular);
    color: var(--primary-color);
    font-size: calc(var(--font-size-small) - 1px);
    margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.schema-root-type.xxx-of {
  display:none;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`;function bP(e,t=""){var r,a,i=new Set;for(let t in e.responses)for(let r in null==(a=e.responses[t])?void 0:a.content)i.add(r.trim());var s=[...i].join(", "),l=this.resolvedSpec.securitySchemes.filter(t=>{var r;return t.finalKeyValue&&(null==(r=e.security)?void 0:r.some(e=>t.securitySchemeId in e))})||[],c=this.resolvedSpec.securitySchemes.find(e=>e.securitySchemeId===tt&&"-"!==e.value),c=(c&&l.push(c),e.xCodeSamples?KI.call(this,e.xCodeSamples):"");return B`
    ${"read"===this.renderStyle?B`<div class='divider' part="operation-divider"></div>`:""}
    <div class='expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} ' part="section-operation ${e.elementId}" id='${e.elementId}'>
      ${"focused"===this.renderStyle&&"General ⦂"!==t?B`<h3 class="upper" style="font-weight:bold" part="section-operation-tag"> ${t} </h3>`:""}
      ${e.deprecated?B`<div class="bold-text red-text"> DEPRECATED </div>`:""}
      ${B`
        ${e.xBadges&&0<(null==(r=e.xBadges)?void 0:r.length)?B`
            <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
              ${e.xBadges.map(e=>B`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`)}
            </div>
            `:""}
        <h2 part="section-operation-summary"> ${e.shortSummary||e.method.toUpperCase()+" "+e.path}</h2>
        ${e.isWebhook?B`<span part="section-operation-webhook style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>`:B`
            <div class='mono-font part="section-operation-webhook-method" regular-font-size' style='text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)'> 
              <span part="label-operation-method" class='regular-font upper method-fg bold-text ${e.method}'>${e.method}</span> 
              <span part="label-operation-path">${e.path}</span>
            </div>
          `}
        <slot name="${e.elementId}"></slot>`}
      ${e.description?B`<div class="m-markdown"> ${PI(Ue(e.description))}</div>`:""}
      ${YI.call(this,e.security)}
      ${c}
      <div class='expanded-req-resp-container'>
        <api-request
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          method = "${e.method}"
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${l}"
          .servers = "${e.servers}"
          server-url = "${(null==(t=e.servers)||null==(r=t[0])?void 0:r.url)||this.selectedServer.computedUrl}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          use-summary-to-list-example = "${this.useSummaryToListExamples}"
          allow-try = "${this.allowTry}"
          accept = "${s}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${!e.isWebhook&&this.schemaHideReadOnly}"
          schema-hide-write-only = "${!!e.isWebhook&&this.schemaHideWriteOnly}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

        ${e.callbacks?JI.call(this,e.callbacks):""}

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          .responses = "${e.responses}"
          render-style = "${this.renderStyle}"
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${!!e.isWebhook&&this.schemaHideReadOnly}"
          schema-hide-write-only = "${!e.isWebhook&&this.schemaHideWriteOnly}"
          selected-status = "${Object.keys(e.responses||{})[0]||""}"
          exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
    </div>
  `}function xP(){return this.resolvedSpec?B`
  ${this.resolvedSpec.tags.map(e=>B`
    <section id="${e.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="section-tag-title label-tag-title">${e.name}</div>
      <slot name="${e.elementId}"></slot>
      <div class="regular-font-size">
      ${PI(`
          <div class="m-markdown regular-font">
          ${Ue(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:(e=>{var t=new Ue.Renderer;return t.heading=(t,r,n,o)=>`<h${r} class="observe-me" id="${e}--${o.slug(n)}">${t}</h${r}>`,t})(e.elementId)}:void 0)}
        </div>`)}
      </div>
    </section>
    <section class='regular-font section-gap--read-mode' part="section-operations-in-tag">
      ${e.paths.map(e=>bP.call(this,e,"BBB"))}
    </section>
    `)}
`:""}function kP(e,t){return-1!==e.id.indexOf("schemas-")?function(e){return B`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${"table"===this.schemaStyle?B`
      <schema-table
        render-style = '${this.renderStyle}'
        .data = '${hP(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree> `:B`
      <schema-tree
        render-style = '${this.renderStyle}'
        .data = '${hP(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree>`}
  </div>`}.call(this,e):B`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    ${B`
      <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${t} </span> </div>
      ${e.component?B`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${e.component}"> </json-tree>
      </div>`:""}
    `}
  </div>
  `}function AP(){var e;return B`
    <section id="overview" part="section-overview"
      class="observe-me ${"view"===this.renderStyle?"section-gap":"section-gap--read-mode"}">
      ${null!=(e=this.resolvedSpec)&&e.info?B`
          <div id="api-title" part="section-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${this.resolvedSpec.info.version?B`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`:""}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${null!=(e=this.resolvedSpec.info.contact)&&e.email?B`<span>${this.resolvedSpec.info.contact.name||"Email"}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>`:""}
            ${null!=(e=this.resolvedSpec.info.contact)&&e.url?B`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>`:""}
            ${this.resolvedSpec.info.license?B`<span>License: 
                ${this.resolvedSpec.info.license.url?B`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>`:this.resolvedSpec.info.license.name} </span>`:""}
            ${this.resolvedSpec.info.termsOfService?B`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>`:""}
            ${this.specUrl&&"true"===this.allowSpecFileDownload?B`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="width:170px" part="btn btn-outline" @click='${e=>{at(this.specUrl,"openapi-spec")}}'>Download OpenAPI spec</button>
                  ${null!=(e=this.specUrl)&&e.trim().toLowerCase().endsWith("json")?B`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${e=>{st(this.specUrl)}}'>View OpenAPI spec (New Tab)</button>`:""}
                </div>`:""}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description?B`${PI(`
                <div class="m-markdown regular-font">
                ${Ue(this.resolvedSpec.info.description,"true"===this.infoDescriptionHeadingsInNavBar?{renderer:(()=>{var e=new Ue.Renderer;return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="overview--${n.slug(r)}">${e}</h${t}>`,e})()}:void 0)}
              </div>`)}`:""}
          </div>
        `:""}
    </section>
  `}function EP(e){var t=null==(t=this.resolvedSpec)?void 0:t.servers.find(t=>t.url===e);return!!t&&(this.selectedServer=t,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:t}})),!0)}function OP(e,t){e=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let n=t.url;e.forEach(e=>{var t=new RegExp(`{${e.dataset.var}}`,"g");n=n.replace(t,e.value)}),t.computedUrl=n,this.requestUpdate()}function _P(){var e;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":B`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}'>
    <div part = "section-servers-title" class = "sub-title">API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${this.resolvedSpec.servers&&0!==(null==(e=this.resolvedSpec.servers)?void 0:e.length)?B`
          ${null==(e=this.resolvedSpec)?void 0:e.servers.map((e,t)=>B`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${t}'
              value = '${e.url}'
              @change = ${()=>{EP.call(this,e.url)}}
              .checked = '${this.selectedServer.url===e.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${t}'>
                ${e.url} ${e.description?B`- <span class='regular-font'>${e.description} </span>`:""}
              </label>
            <br/>
          `)}
      `:""}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${(null==(e=this.selectedServer)?void 0:e.computedUrl)||"none"}</div>
    </div>
    <slot name="servers"></slot>
    ${function(){return this.selectedServer&&this.selectedServer.variables?B`
    <div class="table-title">SERVER VARIABLES</div>
    <table class='m-table'>
      ${Object.entries(this.selectedServer.variables).map(e=>B`
        <tr>
          <td style="vertical-align: middle;" >${e[0]}</td>
          <td>
            ${e[1].enum?B`
            <select
              data-var = "${e[0]}"
              @input = ${e=>{OP.call(this,e,this.selectedServer)}}
            >
            ${Object.entries(e[1].enum).map(t=>e[1].default===t[1]?B`
              <option
                selected
                label = ${t[1]}
                value = ${t[1]}
              />`:B`
              <option
                label = ${t[1]}
                value = ${t[1]}
              />`)}
            </select>`:B`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${e[0]}"
              value = "${e[1].default}"
              @input = ${e=>{OP.call(this,e,this.selectedServer)}}
            />`}
          </td>
        </tr>
        ${e[1].description?B`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${PI(Ue(e[1].description))} </span></td></tr>`:""}
      `)}
    </table>
    `:""}.call(this)}
  </section>`}function CP(e,t="toggle"){var r=null==e?void 0:e.closest(".nav-bar-tag-and-paths");if(r){let e=r.classList.contains("expanded");!e||"toggle"!==t&&"collapse"!==t?e||"toggle"!==t&&"expand"!==t||r.classList.replace("collapsed","expanded"):r.classList.replace("expanded","collapsed")}}function jP(e){CP(e.target,"toggle")}function IP(e,t="expand-all"){((e,t="expand-all")=>{(e=[...e.querySelectorAll(".nav-bar-tag-and-paths")]).map("expand-all"===t?e=>{e.classList.replace("collapsed","expanded")}:e=>{e.classList.replace("expanded","collapsed")})})(e.target.closest(".nav-scroll"),t)}function LP(e){return B`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${e}
    </div>`}function DP(){var t,e;return"true"===this.showInfo?LP(AP.call(this)):(t=this.resolvedSpec.tags[0],e=null==(e=this.resolvedSpec.tags[0])?void 0:e.paths[0],LP(t&&e?bP.call(this,e,t.name):""))}function BP(e){return B`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${"show-description"===this.onNavTagClick&&e.description?B`
        <div class="m-markdown">
          ${PI(`
            <div class="m-markdown regular-font">
              ${Ue(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:(e=>{var t=new Ue.Renderer;return t.heading=(t,r,n,o)=>`<h${r} class="observe-me" id="${e}--${o.slug(n)}">${t}</h${r}>`,t})(e.elementId)}:void 0)}
            </div>`)}
        </div>`:""}
  `}function NP(){if(this.focusedElementId&&this.resolvedSpec){let e=this.focusedElementId,t,r=null,n=null,o=0;if(e.startsWith("overview")&&"true"===this.showInfo)t=AP.call(this);else if("auth"===e&&"true"===this.allowAuthentication)t=GI.call(this);else if("servers"===e&&"true"===this.allowServerSelection)t=_P.call(this);else if("operations-top"===e)t=B`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&"true"===this.showComponents)t=function(){return this.resolvedSpec?B`
  ${this.resolvedSpec.components.map(e=>B`
    <div id="cmp--${e.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${e.name}</div>
      <div class="regular-font-size">
        ${PI(`<div class='m-markdown regular-font'>${Ue(e.description||"")}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${e.subComponents.filter(e=>!1!==e.expanded).map(t=>kP.call(this,t,e.name))}
    </div>
    `)}
`:""}.call(this);else if(e.startsWith("tag--")){let r=0<e.indexOf("--",4)?e.substring(0,e.indexOf("--",5)):e;n=this.resolvedSpec.tags.find(e=>e.elementId===r),t=n?LP.call(this,BP.call(this,n)):DP.call(this)}else{for(o=0;o<this.resolvedSpec.tags.length&&(n=this.resolvedSpec.tags[o],!(r=this.resolvedSpec.tags[o].paths.find(t=>""+t.elementId===e)));o+=1);t=r?(CP(this.shadowRoot.getElementById("link-"+e),"expand"),LP.call(this,bP.call(this,r,n.name))):DP.call(this)}return t}}function UP(e,t="expand-all"){!function(e,t="expand-all"){(e=[...e.querySelectorAll(".section-tag")]).map("expand-all"===t?e=>{e.classList.replace("collapsed","expanded")}:e=>{e.classList.replace("expanded","collapsed")})}.call(this,e.target.closest(".operations-root"),t)}function zP(e,t=!1){return B`
  <summary @click="${t=>{!function(e){e.expanded?(e.expanded=!1,"true"===this.updateRoute&&window.history.replaceState(null,null,""+window.location.href.split("#")[0]+("#"===this.routePrefix?"":""+this.routePrefix))):(e.expanded=!0,"true"===this.updateRoute&&(e=""+(this.routePrefix||"#")+e.elementId,window.location.hash!==e)&&window.history.replaceState(null,null,window.location.href.split("#")[0]+e)),this.requestUpdate()}.call(this,e,t)}}" part="section-endpoint-head-${e.expanded?"expanded":"collapsed"}" class='endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}'>
    <div part="section-endpoint-head-method" class="method ${e.method} ${e.deprecated?"deprecated":""}"> ${e.method} </div> 
    <div  part="section-endpoint-head-path" class="path ${e.deprecated?"deprecated":""}"> 
      ${e.path} 
      ${e.isWebhook?B`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>`:""}
    </div>
    ${e.deprecated?B`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>`:""}
    ${this.showSummaryWhenCollapsed?B`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div part="section-endpoint-head-description" class="descr">${e.summary||e.shortSummary} </div>`:""}
  </summary>
  `}function qP(e){var t,n,r=new Set;for(let t in e.responses)for(let o in null==(n=e.responses[t])?void 0:n.content)r.add(o.trim());let o=[...r].join(", "),i=this.resolvedSpec.securitySchemes.filter(t=>{var r;return t.finalKeyValue&&(null==(r=e.security)?void 0:r.some(e=>t.securitySchemeId in e))})||[],a=this.resolvedSpec.securitySchemes.find(e=>e.securitySchemeId===tt&&"-"!==e.value);a&&i.push(a);var s=e.xCodeSamples?KI(e.xCodeSamples):"";return B`
  <div part="section-endpoint-body-${e.expanded?"expanded":"collapsed"}" class='endpoint-body ${e.method} ${e.deprecated?"deprecated":""}'>
    <div class="summary">
      ${e.summary?B`<div class="title" part="section-endpoint-body-title">${e.summary}<div>`:e.shortSummary!==e.description?B`<div class="title" part="section-endpoint-body-title">${e.shortSummary}</div>`:""}
      ${e.xBadges&&0<(null==(t=e.xBadges)?void 0:t.length)?B`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${e.xBadges.map(e=>B`<span part="endpoint-badge" style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`)}
          </div>
          `:""}

      ${e.description?B`<div part="section-endpoint-body-description" class="m-markdown"> ${PI(Ue(e.description))}</div>`:""}
      <slot name="${e.elementId}"></slot>
      ${YI.call(this,e.security)}
      ${s}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          method = "${e.method}", 
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${i}"
          .servers = "${e.servers}" 
          server-url = "${e.servers&&0<e.servers.length?e.servers[0].url:this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          use-summary-to-list-example = "${this.useSummaryToListExamples}"
          allow-try = "${this.allowTry}"
          accept = "${o}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${e.isWebhook?this.schemaHideWriteOnly:this.schemaHideReadOnly}"
          schema-hide-write-only = "${e.isWebhook?this.schemaHideReadOnly:this.schemaHideWriteOnly}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

          ${e.callbacks?JI.call(this,e.callbacks):""}
      </div>  

      <api-response
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        .responses="${e.responses}"
        active-schema-tab = "${this.defaultSchemaTab}" 
        render-style="${this.renderStyle}" 
        schema-style="${this.schemaStyle}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "${e.isWebhook?this.schemaHideWriteOnly:this.schemaHideReadOnly}"
        schema-hide-write-only = "${e.isWebhook?this.schemaHideReadOnly:this.schemaHideWriteOnly}"
        selected-status = "${Object.keys(e.responses||{})[0]||""}"
        exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
        textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
        schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </api-response>
    </div>
  </div>`}function WP(){return B`
  <header class="row main-header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${B`
  <div style=${"height:36px;width:36px;margin-left:5px"}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${"false"===this.allowSpecUrlLoad?"":B`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl||""}" 
            @change="${this.onSepcUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${"false"===this.allowSpecFileLoad?"":B`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile||""}" 
            @change="${this.onSepcFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${"false"===this.allowSearch||"read focused".includes(this.renderStyle)?"":B`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${"false"===this.allowAdvancedSearch||"read focused".includes(this.renderStyle)?"":B`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`}customElements.define("schema-tree",class extends ne{static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[He,gP,rP,l`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-descr .tr {
        max-height:calc(var(--font-size-small) + 8px);
      }
      .collapsed-descr .m-markdown-small p {
        line-height:calc(var(--font-size-small) + 6px);
      }

      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }
      .tr.expanded:hover > .td.key > .open-bracket {
        color: var(--primary-color);
      }
      .tr.expanded:hover + .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .tr.expanded:hover + .inside-bracket + .close-bracket {
        color: var(--primary-color);
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }
      .inside-bracket.xxx-of {
        padding:5px 0px;
        border-style: dotted;
        border-width: 0 0 1px 0;
        border-color:var(--primary-color);
      }`,Qe]}render(){var e;return B`
      <div class="tree ${"true"===this.schemaDescriptionExpanded?"expanded-descr":"collapsed-descr"}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${(null==(e=this.data)?void 0:e["::type"])||""} "> ${(null==(e=this.data)?void 0:e["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?B`
              <div style="flex:1"></div>
              <div part="schema-toolbar-item schema-multiline-toggle" class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true"}}'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${null!=(e=this.data)&&e["::description"]?B`<span part="schema-description" class='m-markdown'> ${PI(Ue(this.data["::description"]||""))}</span>`:""}
        ${this.data?B`
            ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:B`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `}generateTree(e,t="object",r="",n="",o="",i=0,a=0,s=""){if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===s)return;if(e&&"readonly"===e["::readwrite"])return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===s)return;if(e&&"writeonly"===e["::readwrite"])return}if(!e)return B`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${"array"===t?B`<span class='mono-font'> [ ] </span>`:"object"===t?B`<span class='mono-font'> { } </span>`:B`<span class='mono-font'> schema undefined </span>`}
      </div>`;if(0===Object.keys(e).length)return B`<span class="key object">${n}:{ }</span>`;let c="",p="";if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))c=n.replace("::","").replace("~"," ");else if(n.startsWith("::OPTION")){let e=n.split("~");c=e[1],p=e[2]}else c=n;var u=400-12*a;let d="",h="",f=null!=(l=e["::type"])&&l.startsWith("xxx-of")?i:i+1,m="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?a:a+1;if("object"===e["::type"])h="array"===t?(d=i<this.schemaExpandLevel?B`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{</span>`:B`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{...}]</span>`,"}]"):(d=i<this.schemaExpandLevel?B`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{</span>`:B`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{...}</span>`,"}");else if("array"===e["::type"])if("array"===t){let e="object"!==r?r:"";d=i<this.schemaExpandLevel?B`<span class="open-bracket array-of-array" data-array-type="${e}" @click="${this.toggleObjectExpand}">[[ ${e} </span>`:B`<span class="open-bracket array-of-array"  data-array-type="${e}" @click="${this.toggleObjectExpand}">[[...]]</span>`,h="]]"}else d=i<this.schemaExpandLevel?B`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[</span>`:B`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[...]</span>`,h="]";if("object"==typeof e)return B`
        <div class="tr ${i<this.schemaExpandLevel||null!=(l=e["::type"])&&l.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}" title="${e["::deprecated"]?"Deprecated":""}">
          <div class="td key ${e["::deprecated"]?"deprecated":""}" style='min-width:${u}px'>
            ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?B`<span class='key-label xxx-of-key'> ${c}</span><span class="xxx-of-descr">${p}</span>`:"::props"!==c&&"::ARRAY~OF"!==c&&0<i?B`<span class="key-label" title="${"readonly"===s?"Read-Only":"writeonly"===s?"Write-Only":""}">
                      ${e["::deprecated"]?"✗":""}
                      ${c.replace(/\*$/,"")}${c.endsWith("*")?B`<span style="color:var(--red)">*</span>`:""}${"readonly"===s?B` 🆁`:"writeonly"===s?B` 🆆`:s}:
                    </span>`:""}
            ${"xxx-of"===e["::type"]&&"array"===t?B`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
            ${d}
          </div>
          <div class='td key-descr m-markdown-small'>${PI(Ue(o||""))}</div>
        </div>
        <div class='inside-bracket ${e["::type"]||"no-type-info"}' style='padding-left:${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]?0:12}px;'>
          ${Array.isArray(e)&&e[0]?B`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",f,m,e[0]["::readwrite"])}`:B`
              ${Object.keys(e).map(t=>B`
                ${!["::title","::description","::type","::props","::deprecated","::array-type","::readwrite"].includes(t)||"array"===e[t]["::type"]||"object"===e[t]["::type"]?B`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],f,m,e[t]["::readwrite"]||"")}`:""}
              `)}
            `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":B`<div class='close-bracket'> ${h} </div>`}
      `;var[a,r,l,i,w,k,S,$,A]=e.split("~|~");if(!("🆁"===r&&"true"===this.schemaHideReadOnly||"🆆"===r&&"true"===this.schemaHideWriteOnly)){var E=a.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let O="",T="";return"array"===t?"readonly"===s?(O="🆁",T="Read-Only"):"writeonly"===s&&(O="🆆",T="Write-Only"):"🆁"===r?(O="🆁",T="Read-Only"):"🆆"===r&&(O="🆆",T="Write-Only"),B`
      <div class = "tr primitive" title="${A?"Deprecated":""}">
        <div class="td key ${A}" style='min-width:${u}px'>
          ${A?B`<span style='color:var(--red);'>✗</span>`:""}
          ${c.endsWith("*")?B`<span class="key-label">${c.substring(0,c.length-1)}</span><span style='color:var(--red);'>*</span>:`:n.startsWith("::OPTION")?B`<span class='key-label xxx-of-key'>${c}</span><span class="xxx-of-descr">${p}</span>`:B`<span class="key-label">${c}:</span>`}
          <span class="${E}" title="${T}"> 
            ${"array"===t?`[${a}]`:""+a}
            ${O}
          </span>
        </div>
        <div class='td key-descr'>
          ${"array"===t?B`<span class="m-markdown-small">${PI(Ue(o))}</span>`:""}
          ${S?B`<span class="m-markdown-small">
              ${PI(Ue(`${$?`**${$}:**`:""} ${S} `+(l||i||w||k?'<span class="more-content">⤵</span>':"")))}
              </span>`:$?B`${$} ${l||i||w||k?B`<span class="more-content">⤵</span>`:""}`:""}
          ${l?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${l}</div>`:""}
          ${i?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${i}</div>`:""}
          ${w?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Allowed: </span>${w}</div>`:""}
          ${k?B`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${k}</div>`:""}
        </div>
      </div>
    `}}toggleObjectExpand(e){var t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?"[[ "+e.target.dataset.arrayType:e.target.classList.contains("object")?"{":"[")}}),customElements.define("tag-input",class extends ne{render(){let e="";return Array.isArray(this.value)&&(e=B`${this.value.filter(e=>""!==e.trim()).map(e=>B`<span class='tag'>${e}</span>`)}`),B`
      <div class='tags' tabindex="0">
        ${e}
        <input type="text" class='editor' @paste="${e=>this.afterPaste(e)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder||""}">
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){"value"===e&&r&&t!==r&&(this.value=r.split(",").filter(e=>""!==e.trim())),super.attributeChangedCallback(e,t,r)}afterPaste(e){var t=(e.clipboardData||window.clipboardData).getData("Text"),t=t?t.split(",").filter(e=>""!==e.trim()):"";t&&(Array.isArray(this.value)?this.value=[...this.value,...t]:this.value=t),e.preventDefault()}afterKeyDown(e){13===e.keyCode?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):8===e.keyCode&&0===e.target.value.length&&Array.isArray(this.value)&&0<this.value.length&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[l`
      .tags{
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor{
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `]}}),customElements.define("api-request",class extends ne{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},useSummaryToListExamples:{type:String,attribute:"use-summary-to-list-example"},allowTry:{type:String,attribute:"allow-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[Ge,We,He,Ve,rP,Je,Ke,l`
        *, *:before, *:after { box-sizing: border-box; }
    
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name {
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-name.deprecated { 
          color: var(--red);
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `,Qe]}render(){return B`
    <div class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||"true"===this.callback?"read-mode":"view-mode"}">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK REQUEST":"REQUEST"}
      </div>
      <div>
        ${XI([this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("path"))}
        ${XI([this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("query"))}
        ${this.requestBodyTemplate()}
        ${XI([this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("header"))}
        ${XI([this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("cookie"))}
        ${"false"===this.allowTry?"":B`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `}updated(e){"focused"!==this.renderStyle||1===e.size&&e.has("activeSchemaTab")||[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach(e=>{var t=this.shadowRoot.querySelector(`textarea[data-pname='hidden-${e.dataset.pname}']`);t&&(e.value=t.value)})}exampleListTemplate(e,t,r=[]){return B`
    ${0<r.length?B`<span style="font-weight:bold">Example: </span>
        ${r.map((r,n)=>B`
          ${0===n?"":"┃"}
          ${"array"===t?"[":""}
          <a part="anchor anchor-param-example" class = "${"true"===this.allowTry?"":"inactive-link"}"
            data-example-type="${"array"===t?t:"string"}"
            data-example = "${r.value&&Array.isArray(r.value)?null==(n=r.value)?void 0:n.join("~|~"):r.value||""}"
            @click="${t=>{var r=t.target.closest("table").querySelector(`[data-pname="${e}"]`);r&&("array"===t.target.dataset.exampleType?r.value=t.target.dataset.example.split("~|~"):r.value=t.target.dataset.example)}}"
          >
          ${"true"===this.useSummaryToListExamples?r.description||r.summary||(r.value&&Array.isArray(r.value)?null==(n=r.value)?void 0:n.join(", "):r.value||""):r.value&&Array.isArray(r.value)?null==(n=r.value)?void 0:n.join(", "):r.value||""}
          </a>
          ${"array"===t?"] ":""}
        `)}
      `:""}`}inputParametersTemplate(e){let t=this.parameters?this.parameters.filter(t=>t.in===e):[];if(0===t.length)return"";let r="";"path"===e?r="PATH PARAMETERS":"query"===e?r="QUERY-STRING PARAMETERS":"header"===e?r="REQUEST HEADERS":"cookie"===e&&(r="COOKIES");var n=[];for(let r of t){let[t,o,i]=(e=>{if(e.schema)return[e.schema,null,null];if(e.content)for(var t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,(e=>"application/json"===e?"json":"application/xml"===e?"xml":null)(t),e.content[t]];return[null,null,null]})(r);if(t){let a=nP(t);if(a){var s=hP(t,{});let l="form",c=!0,p=!1;"query"===e&&(r.style&&"form spaceDelimited pipeDelimited".includes(r.style)?l=r.style:o&&(l=o),"boolean"==typeof r.explode&&(c=r.explode),"boolean"==typeof r.allowReserved)&&(p=r.allowReserved);var u=iP(r.examples||oP(r.example)||oP(null==i?void 0:i.example)||(null==i?void 0:i.examples)||a.examples||oP(a.example),a.type),d=(u.exampleVal||"object"!==a.type||(u.exampleVal=fP(t,o||"json","","",!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),"text",!1)[0].exampleValue),"read focused".includes(this.renderStyle)?"200px":"160px");n.push(B`
      <tr title="${r.deprecated?"Deprecated":""}"> 
        <td rowspan="${"true"===this.allowTry?"1":"2"}" style="width:${d}; min-width:100px;">
          <div class="param-name ${r.deprecated?"deprecated":""}" >
            ${r.deprecated?B`<span style='color:var(--red);'>✗</span>`:""}
            ${r.required?B`<span style='color:var(--red)'>*</span>`:""}
            ${r.name}
          </div>
          <div class="param-type">
            ${"array"===a.type?""+a.arrayType:""+(a.format||a.type)}
          </div>
        </td>  
        ${"true"===this.allowTry?B`
            <td style="min-width:100px;" colspan="${a.default||a.constrain||a.allowedValues||a.pattern?"1":"2"}">
              ${"array"===a.type?B`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${e}"
                    data-pname = "${r.name}"
                    data-example = "${Array.isArray(u.exampleVal)?u.exampleVal.join("~|~"):u.exampleVal}"
                    data-param-serialize-style = "${l}"
                    data-param-serialize-explode = "${c}"
                    data-param-allow-reserved = "${p}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(u.exampleVal),u.exampleVal}"
                  >
                  </tag-input>`:"object"===a.type?B`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${e=>{var t;"button"===e.target.tagName.toLowerCase()&&((t={...this.activeParameterSchemaTabs})[r.name]=e.target.dataset.tab,this.activeParameterSchemaTabs=t)}}">
                        <button class="tab-btn ${"example"===this.activeParameterSchemaTabs[r.name]?"active":""}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${"example"!==this.activeParameterSchemaTabs[r.name]?"active":""}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${"example"===this.activeParameterSchemaTabs[r.name]?B`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${e}-object"
                            data-pname = "${r.name}"
                            data-example = "${u.exampleVal}"
                            data-param-serialize-style = "${l}"
                            data-param-serialize-explode = "${c}"
                            data-param-allow-reserved = "${p}"
                            spellcheck = "false"
                            .textContent = "${"true"===this.fillRequestFieldsWithExample?u.exampleVal:""}"
                            style = "resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                          ></textarea>
                        </div>`:B`
                          <div class="tab-content col">            
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${s}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = "${this.schemaHideWriteOnly.includes(this.method)}"
                              exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example"
                            > </schema-tree>
                          </div>`}
                    </div>`:B`
                    <input type="${"password"===a.format?"password":"text"}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${e}"
                      data-pname="${r.name}" 
                      data-example="${Array.isArray(u.exampleVal)?u.exampleVal.join("~|~"):u.exampleVal}"
                      data-param-allow-reserved = "${p}"
                      data-x-fill-example = "${r["x-fill-example"]||"yes"}"
                      data-array="false"
                      .value="${"no"===r["x-fill-example"]?"":tP("true"===this.fillRequestFieldsWithExample?u.exampleVal:"")}"
                    />`}
            </td>`:""}
        ${a.default||a.constrain||a.allowedValues||a.pattern?B`
            <td colspan="${"true"===this.allowTry?"1":"2"}">
              <div class="param-constraint">
                ${a.default?B`<span style="font-weight:bold">Default: </span>${a.default}<br/>`:""}
                ${a.pattern?B`<span style="font-weight:bold">Pattern: </span>${a.pattern}<br/>`:""}
                ${a.constrain?B`${a.constrain}<br/>`:""}
                ${a.allowedValues&&a.allowedValues.split("┃").map((e,t)=>B`
                  ${0<t?"┃":B`<span style="font-weight:bold">Allowed: </span>`}
                  ${B`
                    <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                      data-type="${"array"===a.type?a.type:"string"}"
                      data-enum="${e.trim()}"
                      @click="${e=>{var t=e.target.closest("table").querySelector(`[data-pname="${r.name}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                    >${e}</a>`}`)}
              </div>
            </td>`:B`<td></td>`}
      </tr>
      <tr>
        ${"true"===this.allowTry?B`<td style="border:none"> </td>`:""}
        <td colspan="2" style="border:none">
          <span class="m-markdown-small">${PI(Ue(r.description||""))}</span>
          ${this.exampleListTemplate.call(this,r.name,a.type,u.exampleList)}
        </td>
      </tr>
    `)}}}return B`
    <div class="table-title top-gap">${r}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table class="m-table" style="width:100%; word-break:break-word;">
        ${n}
      </table>
    </div>`}resetRequestBodySelection(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value,window.setTimeout(e=>{var t=e.closest(".example-panel").querySelector(".request-body-param");e.closest(".example-panel").querySelector(".request-body-param-user-input").value=t.innerText},0,e.target)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;e=e.target;this.selectedRequestBodyExample="",window.setTimeout(e=>{var t=e.closest(".request-body-container").querySelector(".request-body-param");t&&(e.closest(".request-body-container").querySelector(".request-body-param-user-input").value=t.innerText)},0,e)}requestBodyTemplate(){if(!this.request_body)return"";if(0===Object.keys(this.request_body).length)return"";let e="",t="",r="",n="",o="";var i=[],a=this.request_body.content;for(let e in a)i.push({mimeType:e,schema:a[e].schema,example:a[e].example,examples:a[e].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=e);return e=1===i.length?"":B`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${e=>this.onMimeTypeChange(e)}'>
          ${i.map(e=>B`
            <option value = '${e.mimeType}' ?selected = '${e.mimeType===this.selectedRequestBodyType}'>
              ${e.mimeType}
            </option> `)}
        </select>
      `,i.forEach(e=>{var a=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose"))e.mimeType===this.selectedRequestBodyType&&(a=fP(e.schema,e.mimeType,e.examples,e.example,!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),"text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=0<a.length?a[0].exampleId:""),o=B`
            ${o}
            <div class = 'example-panel border-top pad-top-8'>
              ${1===a.length?"":B`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${e=>this.onSelectExample(e)}'>
                    ${a.map(e=>B`<option value="${e.exampleId}" ?selected=${e.exampleId===this.selectedRequestBodyExample} > 
                      ${!(80<e.exampleSummary.length)&&e.exampleSummary||e.exampleId} 
                    </option>`)}
                  </select>
                `}
              ${a.filter(e=>e.exampleId===this.selectedRequestBodyExample).map(t=>B`
                <div class="example ${t.exampleId===this.selectedRequestBodyExample?"example-selected":""}" data-example = '${t.exampleId}'>
                  ${t.exampleSummary&&80<t.exampleSummary.length?B`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                  ${t.exampleDescription?B`<div class="m-markdown-small" style="padding: 4px 0"> ${PI(Ue(t.exampleDescription||""))} </div>`:""}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${e.mimeType.substring(e.mimeType.indexOf("/")+1)}" 
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    data-example = "${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}"
                    data-example-format = "${t.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${"true"===this.fillRequestFieldsWithExample?"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2):""}"
                  ></textarea>
                </div>  
              `)}

            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(e.mimeType===this.selectedRequestBodyType){let t=fP(e.schema,e.mimeType,e.examples,e.example,!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),"text",!1);e.schema&&(r=this.formDataTemplate(e.schema,e.mimeType,t[0]?t[0].exampleValue:""))}}else/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)&&e.mimeType===this.selectedRequestBodyType&&(t=B`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${e.mimeType}" spellcheck="false" />
            </div>  
          `);(e.mimeType.includes("json")||e.mimeType.includes("xml")||e.mimeType.includes("text")||this.selectedRequestBodyType.includes("jose"))&&(a=hP(e.schema,{}),"table"===this.schemaStyle?n=B`
            ${n}
            <schema-table
              class = '${e.mimeType.substring(e.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};'
              .data = '${a}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-table>
          `:"tree"===this.schemaStyle&&(n=B`
            ${n}
            <schema-tree
              class = "${e.mimeType.substring(e.mimeType.indexOf("/")+1)}"
              style = "display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};"
              .data = "${a}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-tree>
          `))}),B`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required?B`<span class="mono-font" style='color:var(--red)'>*</span>`:""} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?B`<div class="m-markdown" style="margin-bottom:12px">${PI(Ue(this.request_body.description))}</div>`:""}
        
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose")?B`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
                <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${"example"===this.activeSchemaTab?B`<div class="tab-content col"> ${o}</div>`:B`<div class="tab-content col"> ${n}</div>`}
            </div>`:B`  
            ${t}
            ${r}`}
      </div>  
    `}formDataParamAsObjectTemplate(e,t,r){var n,o=hP(t,{}),t=fP(t,"json",t.examples,t.example,!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),"text",!1);return B`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${e=>{var t,n,o,i,r;e.target.classList.contains("v-tab-btn")&&(t=e.target.dataset.tab,t)&&(n=(r=e.target.closest(".tab-panel")).querySelector(`.v-tab-btn[data-tab="${t}"]`),o=[...r.querySelectorAll(`.v-tab-btn:not([data-tab="${t}"])`)],i=r.querySelector(`.tab-content[data-tab="${t}"]`),r=[...r.querySelectorAll(`.tab-content:not([data-tab="${t}"])`)],n.classList.add("active"),i.style.display="block",o.forEach(e=>{e.classList.remove("active")}),r.forEach(e=>{e.style.display="none"})),"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
          <button class="v-tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${B`
        <div class="tab-content col" data-tab = 'example' style="display:${"example"===this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname = "${e}"
            data-example = "${(null==(n=t[0])?void 0:n.exampleValue)||""}"
            .textContent = "${"true"===this.fillRequestFieldsWithExample?t[0].exampleValue:""}"
            spellcheck = "false"
          ></textarea>
          <!-- This textarea(hidden) is to store the original example value, in focused mode on navbar change it is used to update the example text -->
          <textarea data-pname = "hidden-${e}" data-ptype = "${r.includes("form-urlencode")?"hidden-form-urlencode":"hidden-form-data"}" class="is-hidden" style="display:none">${t[0].exampleValue}</textarea>
        </div>`}
      ${B`
        <div class="tab-content col" data-tab = 'schema' style="display:${"example"!==this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${o}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){var n=[];if(e.properties){for(let r in e.properties){var o,a=e.properties[r];if(!a.readOnly){let s=a.examples||a.example||"",l=a.type,c=nP(a),p="read focused".includes(this.renderStyle)?"200px":"160px",u=iP(c.examples||c.example,c.type);n.push(B`
        <tr title="${a.deprecated?"Deprecated":""}"> 
          <td style="width:${p}; min-width:100px;">
            <div class="param-name ${a.deprecated?"deprecated":""}">
              ${r}${null!=(o=e.required)&&o.includes(r)||a.required?B`<span style='color:var(--red);'>*</span>`:""}
            </div>
            <div class="param-type">${c.type}</div>
          </td>  
          <td 
            style="${"object"===l?"width:100%; padding:0;":"true"===this.allowTry?"":"display:none;"} min-width:100px;" 
            colspan="${"object"===l?2:1}">
            ${"array"===l?"binary"===(null==(o=a.items)?void 0:o.format)?B`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${e=>this.onAddRemoveFileInput(e,r,t)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${r}" 
                      data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                `:B`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                    data-pname = "${r}"
                    data-example = "${Array.isArray(s)?s.join("~|~"):s}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(s)?Array.isArray(s[0])?s[0]:[s[0]]:[s]}"
                  >
                  </tag-input>
                `:B`
                ${"object"===l?this.formDataParamAsObjectTemplate.call(this,r,a,t):B`
                    ${"true"===this.allowTry?B`<input
                          .value = "${"true"===this.fillRequestFieldsWithExample?u.exampleVal:""}"
                          spellcheck = "false"
                          type = "${"binary"===a.format?"file":"password"===a.format?"password":"text"}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname = "${r}"
                          data-example = "${Array.isArray(s)?s[0]:s}"
                          data-array = "false"
                        />`:""}
                    `}`}
          </td>
          ${"object"===l?"":B`
              <td>
                ${c.default||c.constrain||c.allowedValues||c.pattern?B`
                    <div class="param-constraint">
                      ${c.default?B`<span style="font-weight:bold">Default: </span>${c.default}<br/>`:""}
                      ${c.pattern?B`<span style="font-weight:bold">Pattern: </span>${c.pattern}<br/>`:""}
                      ${c.constrain?B`${c.constrain}<br/>`:""}
                      ${c.allowedValues&&c.allowedValues.split("┃").map((e,t)=>B`
                        ${0<t?"┃":B`<span style="font-weight:bold">Allowed: </span>`}
                        ${B`
                          <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                            data-type="${"array"===c.type?c.type:"string"}"
                            data-enum="${e.trim()}"
                            @click="${e=>{var t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                          > 
                            ${e} 
                          </a>`}`)}
                    </div>`:""}
              </td>`}
        </tr>
        ${"object"===l?"":B`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${PI(Ue(a.description||""))}</span>
                ${this.exampleListTemplate.call(this,r,c.type,u.exampleList)}
              </td>
            </tr>
          `}`)}}return B`
        <table style="width:100%;" class="m-table">
          ${n}
        </table>
      `}return B`
      <textarea
        class = "textarea dynamic-form-param ${t}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${t}"
        .textContent = "${r}"
        style="width:100%"
      ></textarea>
      ${e.description?B`<span class="m-markdown-small">${PI(Ue(e.description))}</span>`:""}
    `}apiResponseTabTemplate(){var e=this.responseHeaders.includes("json")?"json":this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?"html":"";return B`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${e=>{!1!==e.target.classList.contains("tab-btn")&&(this.activeResponseTab=e.target.dataset.tab)}}">
          <button class="tab-btn ${"response"===this.activeResponseTab?"active":""}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${"headers"===this.activeResponseTab?"active":""}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          <button class="tab-btn ${"curl"===this.activeResponseTab?"active":""}" data-tab = 'curl'>CURL</button>
        </div>
        ${this.responseIsBlob?B`
            <div class="tab-content col" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};">
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${e=>{at(this.responseBlobUrl,this.respContentDisposition)}}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${"view"===this.responseBlobType?B`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${e=>{st(this.responseBlobUrl)}}' part="btn btn-outline">VIEW (NEW TAB)</button>`:""}
            </div>`:B`
            <div class="tab-content col m-markdown" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${e=>{nt(this.responseText,e)}}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; min-height:50px; height:400px; resize:vertical; overflow:auto">${e?B`<code>${PI(qe().highlight(this.responseText,qe().languages[e],e))}</code>`:""+this.responseText}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1; display:${"headers"===this.activeResponseTab?"flex":"none"};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{nt(this.responseHeaders,e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${PI(qe().highlight(this.responseHeaders,qe().languages.css,"css"))}</code></pre>
        </div>
        <div class="tab-content col m-markdown" style="flex:1; display:${"curl"===this.activeResponseTab?"flex":"none"};">
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{nt(this.curlSyntax.replace(/\\$/,""),e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${PI(qe().highlight(this.curlSyntax.trim().replace(/\\$/,""),qe().languages.shell,"shell"))}</code></pre>
        </div>
      </div>`}apiCallTemplate(){let e,t,r="";this.servers&&0<this.servers.length&&(r=B`
        <select style="min-width:100px;" @change='${e=>{this.serverUrl=e.target.value}}'>
          ${this.servers.map(e=>B`<option value = "${e.url}"> ${e.url} - ${e.description} </option>`)}
        </select>
      `);var n=B`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?B`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          `:""}
      </div>  
    `;return B`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${n}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${0<(null==(e=this.security)?void 0:e.length)?B`
              ${0<this.api_keys.length?B`<div style="color:var(--blue); overflow:hidden;"> 
                    ${1===this.api_keys.length?`${null==(t=this.api_keys[0])?void 0:t.typeDisplay} in `+this.api_keys[0].in:this.api_keys.length+" API keys applied"} 
                  </div>`:B`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}`:B`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${0<this.parameters.length||this.request_body?B`
            <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>`:""}
      <button class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    ${""===this.responseMessage?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach(e=>{e.dataset.example&&("TAG-INPUT"===e.tagName.toUpperCase()?e.value=e.dataset.example.split("~|~"):e.value=e.dataset.example)})}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach(e=>{e.value=""})}async onTryClick(e){let r=e.target,n,o,i="",a="",s="",l="";var t=null==(t=this.closest(".expanded-req-resp-container, .req-resp-container"))?void 0:t.getElementsByTagName("api-response")[0],t=null==t?void 0:t.selectedMimeType,u=e.target.closest(".request-panel"),d=[...u.querySelectorAll("[data-ptype='path']")],h=[...u.querySelectorAll("[data-ptype='query']")],f=[...u.querySelectorAll("[data-ptype='query-object']")],m=[...u.querySelectorAll("[data-ptype='header']")],y=u.querySelector(".request-body-container"),g=(n=this.path,{method:this.method.toUpperCase()});d.map(e=>{n=n.replace(`{${e.dataset.pname}}`,encodeURIComponent(e.value))});let v=new Map,b=[],x=(0<h.length&&h.forEach(e=>{let t=new URLSearchParams;if("true"===e.dataset.paramAllowReserved&&b.push(e.dataset.pname),"false"===e.dataset.array)""!==e.value&&t.append(e.dataset.pname,e.value);else{var{paramSerializeStyle:r,paramSerializeExplode:n}=e.dataset;let o=e.value&&Array.isArray(e.value)?e.value:[];0<(o=Array.isArray(o)?o.filter(e=>""!==e):[]).length&&("spaceDelimited"===r?t.append(e.dataset.pname,o.join(" ").replace(/^\s|\s$/g,"")):"pipeDelimited"===r?t.append(e.dataset.pname,o.join("|").replace(/^\||\|$/g,"")):"true"===n?o.forEach(r=>{t.append(e.dataset.pname,r)}):t.append(e.dataset.pname,o.join(",").replace(/^,|,$/g,"")))}t.toString()&&v.set(e.dataset.pname,t)}),0<f.length&&f.map(e=>{let t=new URLSearchParams;try{var r={},{paramSerializeStyle:n,paramSerializeExplode:o}=e.dataset,r=Object.assign(r,JSON.parse(e.value.replace(/\s+/g," ")));if("true"===e.dataset.paramAllowReserved&&b.push(e.dataset.pname),"json xml".includes(n))"json"===n?t.append(e.dataset.pname,JSON.stringify(r)):"xml"===n&&t.append(e.dataset.pname,sP(r));else for(let e in r)"object"==typeof r[e]?Array.isArray(r[e])&&("spaceDelimited"===n?t.append(e,r[e].join(" ")):"pipeDelimited"===n?t.append(e,r[e].join("|")):"true"===o?r[e].forEach(r=>{t.append(e,r)}):t.append(e,r[e])):t.append(e,r[e])}catch(t){console.log("RapiDoc: unable to parse %s into object",e.value)}t.toString()&&v.set(e.dataset.pname,t)}),""),w=(v.size&&(x="?",v.forEach((e,t)=>{b.includes(t)?x=(x+=t+"=")+e.getAll(t).join(`&${t}=`)+"&":x+=e.toString()+"&"}),x=x.slice(0,-1)),n=""+n+x,this.api_keys.filter(e=>"query"===e.in).forEach(e=>{n=""+n+(n.includes("?")?"&":"?")+e.name+"="+encodeURIComponent(e.finalKeyValue)}),n=""+this.serverUrl.replace(/\/$/,"")+n,o=!1===n.startsWith("http")?new URL(n,window.location.href).href:n,i=`curl -X ${this.method.toUpperCase()} "${o}" \\
`,new Headers);if(t?(w.append("Accept",t),a+=` -H "Accept: ${t}" \\
`):this.accept&&(w.append("Accept",this.accept),a+=` -H "Accept: ${this.accept}" \\
`),this.api_keys.filter(e=>"header"===e.in).forEach(e=>{w.append(e.name,e.finalKeyValue),a+=` -H "${e.name}: ${e.finalKeyValue}" \\
`}),m.map(e=>{e.value&&(w.append(e.dataset.pname,e.value),a+=` -H "${e.dataset.pname}: ${e.value}" \\
`)}),y){let t=y.dataset.selectedRequestBodyType;if(t.includes("form-urlencoded")){let t=u.querySelector("[data-ptype='dynamic-form']");if(t){let r=t.value,n=new URLSearchParams,o,i=!0;if(r)try{o=JSON.parse(r)}catch(e){i=!1,console.warn("RapiDoc: Invalid JSON provided",e)}else i=!1;if(i){for(let e in o)n.append(e,JSON.stringify(o[e]));g.body=n,s=` -d ${n.toString()} \\
`}}else{let e=[...u.querySelectorAll("[data-ptype='form-urlencode']")],t=new URLSearchParams;e.filter(e=>"file"!==e.type).forEach(e=>{var r;"false"===e.dataset.array?e.value&&t.append(e.dataset.pname,e.value):(r=e.value&&Array.isArray(e.value)?e.value.join(","):"",t.append(e.dataset.pname,r))}),g.body=t,s=` -d ${t.toString()} \\
`}}else if(t.includes("form-data")){let e=new FormData;[...u.querySelectorAll("[data-ptype='form-data']")].forEach(t=>{"false"===t.dataset.array?"file"===t.type&&t.files[0]?(e.append(t.dataset.pname,t.files[0],t.files[0].name),l+=` -F "${t.dataset.pname}=@${t.files[0].name}" \\
`):t.value&&(e.append(t.dataset.pname,t.value),l+=` -F "${t.dataset.pname}=${t.value}" \\
`):t.value&&Array.isArray(t.value)&&(t.value.forEach(e=>{l=`${l} -F "${t.dataset.pname}[]=${e}" \\\n`}),e.append(t.dataset.pname,t.value.join(",")))}),g.body=e}else if(/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(t)){let e=u.querySelector(".request-body-param-file");null!=e&&e.files[0]&&(g.body=e.files[0],s=` --data-binary @${e.files[0].name} \\
`)}else if(t.includes("json")||t.includes("xml")||t.includes("text")){let r=u.querySelector(".request-body-param-user-input");if(null!=r&&r.value){if(g.body=r.value,t.includes("json"))try{s=` -d '${JSON.stringify(JSON.parse(r.value))}' \\
`}catch(e){}s=s||` -d '${r.value.replace(/'/g,"'\"'\"'")}' \\
`}}t.includes("form-data")||w.append("Content-Type",t),a+=` -H "Content-Type: ${t}" \\
`}this.responseUrl="",this.responseHeaders=[],this.curlSyntax="",this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.curlSyntax=""+i+a+s+l,this.fetchCredentials&&(g.credentials=this.fetchCredentials);var A,E,d=new AbortController,h=d.signal,f=(g.headers=w,new Request(n,g));this.dispatchEvent(new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:f,controller:d}}));try{let e,t,n,o=(r.disabled=!0,performance.now()),i=(A=await fetch(f,{signal:h}),performance.now()),a=(E=A.clone(),r.disabled=!1,this.responseMessage=B`${A.statusText?A.statusText+":"+A.status:A.status} <div style="color:var(--light-fg)"> Took ${Math.round(i-o)} milliseconds </div>`,this.responseUrl=A.url,{}),s=(A.headers.forEach((e,t)=>{a[t]=e,this.responseHeaders=""+this.responseHeaders+t+`: ${e}
`}),A.headers.get("content-type"));if(0===(await A.clone().text()).length)this.responseText="";else if(s){if(s.includes("json"))if(/charset=[^"']+/.test(s)){let e=s.split("charset=")[1],r=await A.arrayBuffer();try{n=new TextDecoder(e).decode(r)}catch{n=new TextDecoder("utf-8").decode(r)}try{t=JSON.parse(n),this.responseText=JSON.stringify(t,null,2)}catch{this.responseText=n}}else t=await A.json(),this.responseText=JSON.stringify(t,null,2);else/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(s)?(this.responseIsBlob=!0,this.responseBlobType="download"):/^audio|^image|^video/.test(s)?(this.responseIsBlob=!0,this.responseBlobType="view"):(n=await A.text(),s.includes("xml")&&(this.responseText=(e=>{var e=(new DOMParser).parseFromString(e,"text/xml"),r=(new DOMParser).parseFromString(['<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n      <xsl:strip-space elements="*"/>\n        <xsl:template match="para[content-style][not(text())]">\n          <xsl:value-of select="normalize-space(.)"/>\n        </xsl:template>\n        <xsl:template match="node()|@*">\n          <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>\n        </xsl:template>\n        <xsl:output indent="yes"/>\n      </xsl:stylesheet>'].join("\n"),"application/xml"),n=new XSLTProcessor,r=(n.importStylesheet(r),n.transformToDocument(e));return(new XMLSerializer).serializeToString(r)})(n)),this.responseText=n);if(this.responseIsBlob){let t=A.headers.get("content-disposition");this.respContentDisposition=t?t.split("filename=")[1].replace(/"|'/g,""):"filename",e=await A.blob(),this.responseBlobUrl=URL.createObjectURL(e)}}else n=await A.text(),this.responseText=n;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:f,response:E,responseHeaders:a,responseBody:t||n||e,responseStatus:E.ok}}))}catch(e){r.disabled=!1,"AbortError"===e.name?(this.dispatchEvent(new CustomEvent("request-aborted",{bubbles:!0,composed:!0,detail:{err:e,request:f}})),this.responseMessage="Request Aborted"):(this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:e,request:f}})),this.responseMessage=e.message+" (CORS or Network Issue)")}this.requestUpdate()}onAddRemoveFileInput(e,t,r){var n,o,i;"button"===e.target.tagName.toLowerCase()&&(e.target.classList.contains("file-input-remove-btn")?e.target.closest(".input-set").remove():(n=e.target.closest(".file-input-container"),(o=document.createElement("div")).setAttribute("class","input-set row"),(i=document.createElement("input")).type="file",i.style="width:200px; margin-top:2px;",i.setAttribute("data-pname",t),i.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),i.setAttribute("data-array","false"),i.setAttribute("data-file-array","true"),(t=document.createElement("button")).setAttribute("class","file-input-remove-btn"),t.innerHTML="&#x2715;",o.appendChild(i),o.appendChild(t),n.insertBefore(o,e.target)))}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}}),customElements.define("schema-table",class extends ne{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[He,gP,l`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-descr .tr {
        max-height: calc(var(--font-size-small) + var(--font-size-small) + 4px);
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`,Qe]}render(){var e;return B`
      <div class="table ${"true"===this.schemaDescriptionExpanded?"expanded-descr":"collapsed-descr"}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${(null==(e=this.data)?void 0:e["::type"])||""} "> ${(null==(e=this.data)?void 0:e["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?B`
              <div style="flex:1"></div>
              <div part="schema-multiline-toggle" class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true"}}'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${null!=(e=this.data)&&e["::description"]?B`<span part="schema-description" class='m-markdown'> ${PI(Ue(this.data["::description"]||""))}</span>`:""}
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data?B`
              ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}  
        </div>
      </div>  
    `}generateTree(e,t="object",r="",n="",o="",i=0,a=0,s=""){if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===s)return;if(e&&"readonly"===e["::readwrite"])return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===s)return;if(e&&"writeonly"===e["::readwrite"])return}if(!e)return B`<div class="null" style="display:inline;">
        <span style='margin-left:${16*(i+1)}px'> &nbsp; </span>
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${"array"===t?B`<span class='mono-font'> [ ] </span>`:"object"===t?B`<span class='mono-font'> { } </span>`:B`<span class='mono-font'> schema undefined </span>`}
      </div>`;let p=null!=(l=e["::type"])&&l.startsWith("xxx-of")?i:i+1,u="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?a:a+1,d=16*u;if(0===Object.keys(e).length)return B`<span class="td key object" style='padding-left:${d}px'>${n}</span>`;let h="",f="",m=!1;if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))h=n.replace("::","").replace("~"," "),m=!0;else if(n.startsWith("::OPTION")){let e=n.split("~");h=e[1],f=e[2]}else h=n;let y="";if("object"===e["::type"]?y="array"===t?"array of object":"object":"array"===e["::type"]&&(y="array"===t?"array of array "+("object"!==r?"of "+r:""):"array"),"object"==typeof e)return B`
        ${0<=p&&n?B`
            <div class='tr ${p<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}' data-obj='${h}' title="${e["::deprecated"]?"Deprecated":""}">
              <div class="td key ${e["::deprecated"]?"deprecated":""}" style='padding-left:${d}px'>
                ${h||f?B`
                    <span 
                      class='obj-toggle ${p<this.schemaExpandLevel?"expanded":"collapsed"}'
                      data-obj='${h}'
                      @click= ${e=>this.toggleObjectExpand(e,h)} 
                    >
                      ${i<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?B`<span class="xxx-of-key" style="margin-left:-6px">${h}</span><span class="${m?"xxx-of-key":"xxx-of-descr"}">${f}</span>`:h.endsWith("*")?B`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"✗":""} ${h.substring(0,h.length-1)}</span><span style='color:var(--red);'>*</span>`:B`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"✗":""} ${"::props"===h?"":h}</span>`}
                ${"xxx-of"===e["::type"]&&"array"===t?B`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
              </div>
              <div class='td key-type' title="${"readonly"===e["::readwrite"]?"Read-Only":"writeonly"===e["::readwrite"]?"Write-Only":""}">
                ${(e["::type"]||"").includes("xxx-of")?"":y}
                ${"readonly"===e["::readwrite"]?" 🆁":"writeonly"===e["::readwrite"]?" 🆆":""}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${PI(Ue(o||""))}</div>
            </div>`:B`
              ${"array"===e["::type"]&&"array"===t?B`
                  <div class='tr'> 
                    <div class='td key'></div> 
                    <div class='td key-type'>
                      ${r&&"object"!==r?t+" of "+r:t}
                    </div> 
                    <div class='td key-descr'></div> 
                  </div>`:""}
          `}
        <div class='object-body'>
        ${Array.isArray(e)&&e[0]?B`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",p,u,"")}`:B`
            ${Object.keys(e).map(t=>B`
              ${!["::title","::description","::type","::props","::deprecated","::array-type","::readwrite"].includes(t)||"array"===e[t]["::type"]||"object"===e[t]["::type"]?B`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],p,u,e[t]["::readwrite"]||"")}`:""}
            `)}
          `}
        <div>
      `;var E,O,[l,a,i,r,w,k,S,$,A]=e.split("~|~");if(("🆁"!==a||"true"!==this.schemaHideReadOnly)&&("🆆"!==a||"true"!==this.schemaHideWriteOnly))return E=l.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase(),O="",O="array"===t?B` 
        <div class='td key-type ${E}' title="${"readonly"===s?"Read-Only":"writeonly"===a?"Write-Only":""}">
          [${l}] ${"readonly"===s?"🆁":"writeonly"===s?"🆆":""}
        </div>`:B` 
        <div class='td key-type ${E}' title="${"🆁"===a?"Read-Only":"🆆"===a?"Write-Only":""}">
          ${l} ${a}
        </div>`,B`
      <div class = "tr primitive" title="${A?"Deprecated":""}">
        <div class="td key ${A}" style='padding-left:${d}px'>
          ${A?B`<span style='color:var(--red);'>✗</span>`:""}
          ${null!=(s=h)&&s.endsWith("*")?B`
              <span class="key-label">${h.substring(0,h.length-1)}</span>
              <span style='color:var(--red);'>*</span>`:n.startsWith("::OPTION")?B`<span class='xxx-of-key'>${h}</span><span class="xxx-of-descr">${f}</span>`:B`${h?B`<span class="key-label"> ${h}</span>`:B`<span class="xxx-of-descr">${$}</span>`}`}
        </div>
        ${O}
        <div class='td key-descr' @click="${()=>{this.schemaDescriptionExpanded="true"}}">
          ${"array"===t?B`<span class="m-markdown-small">${PI(Ue(o))}</span>`:""}
          ${S?B`<span class="m-markdown-small">
              ${PI(Ue(`${$?`**${$}:**`:""} ${S} `+(i||r||w||k?'<span  class="more-content">⤵</span>':"")))}
              </span>`:$?B`${$} ${i||r||w||k?B`<span class="more-content">⤵</span>`:""}`:""}
          ${i?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${i}</div>`:""}
          ${r?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${r}</div>`:""}
          ${w?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Allowed: </span>${w}</div>`:""}
          ${k?B`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${k}</div>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){var t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}}),customElements.define("api-response",class extends ne{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[He,Ve,Je,Ge,We,rP,l`
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`,Qe]}render(){return B`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK RESPONSE":"RESPONSE"}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(var n in this.responses){this.selectedStatus||(this.selectedStatus=n);var e,o={};for(let r in null==(e=this.responses[n])?void 0:e.content){let i=this.responses[n].content[r];this.selectedMimeType||(this.selectedMimeType=r);var a=hP(i.schema,{}),s=fP(i.schema,r,i.examples,i.example,!(this.schemaHideReadOnly&&(this.schemaHideReadOnly.includes(this.method)||"true"===this.schemaHideReadOnly)),!(this.schemaHideWriteOnly&&(this.schemaHideWriteOnly.includes(this.method)||"true"===this.schemaHideWriteOnly)),r.includes("json")?"json":"text");o[r]={description:this.responses[n].description,examples:s,selectedExample:(null==(s=s[0])?void 0:s.exampleId)||"",schemaTree:a}}var r,i=[];for(let e in null==(r=this.responses[n])?void 0:r.headers)i.push({name:e,...this.responses[n].headers[e]});this.headersForEachRespStatus[n]=i,this.mimeResponsesForEachStatus[n]=o}return B`
      ${1<Object.keys(this.responses).length?B`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map(e=>B`
            ${"$$ref"===e?"":B`
                <button 
                  @click="${()=>{this.selectedStatus=e,this.responses[e].content&&Object.keys(this.responses[e].content)[0]?this.selectedMimeType=Object.keys(this.responses[e].content)[0]:this.selectedMimeType=void 0}}"
                  class='m-btn small ${this.selectedStatus===e?"primary":""}'
                  part="btn ${this.selectedStatus===e?"btn-response-status btn-selected-response-status":" btn-response-status"}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${e} 
                </button>`}`)}`:B`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map(e=>{var t;return B`
        <div style = 'display: ${e===this.selectedStatus?"block":"none"}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${PI(Ue((null==(t=this.responses[e])?void 0:t.description)||""))}</span>
            ${this.headersForEachRespStatus[e]&&0<(null==(t=this.headersForEachRespStatus[e])?void 0:t.length)?B`${this.responseHeaderListTemplate(this.headersForEachRespStatus[e])}`:""}
          </div>
          ${0===Object.keys(this.mimeResponsesForEachStatus[e]).length?"":B`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}" >
                  <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${1===Object.keys(this.mimeResponsesForEachStatus[e]).length?B`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[e])[0]} </span>`:B`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[e]))}`}
                </div>
                ${"example"===this.activeSchemaTab?B`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`:B`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`})}
    `}responseHeaderListTemplate(e){return B`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${e.map(e=>B`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.name||""}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.schema.type||""}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${PI(Ue(e.description||""))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.schema.example||""}
            </td>
          </tr>
        `)}
    </table>`}mimeTypeDropdownTemplate(e){return B`
      <select @change="${e=>{this.selectedMimeType=e.target.value}}" style='margin-bottom: -1px; z-index:1'>
        ${e.map(e=>B`<option value='${e}' ?selected = '${e===this.selectedMimeType}'> ${e} </option>`)}
      </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach(t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"})}mimeExampleTemplate(e){return e?B`
      ${1===e.examples.length?B`
          ${"json"===e.examples[0].exampleFormat?B`
              ${e.examples[0].exampleSummary&&80<e.examples[0].exampleSummary.length?B`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?B`<div class="m-markdown-small" style="padding: 4px 0"> ${PI(Ue(e.examples[0].exampleDescription||""))} </div>`:""}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${e.examples[0].exampleValue}"
                class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>`:B`
              ${e.examples[0].exampleSummary&&80<e.examples[0].exampleSummary.length?B`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?B`<div class="m-markdown-small" style="padding: 4px 0"> ${PI(Ue(e.examples[0].exampleDescription||""))} </div>`:""}
              <pre class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>${e.examples[0].exampleValue}</pre>
            `}`:B`
          <span class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>
            <select style="min-width:100px; max-width:100%" @change='${e=>this.onSelectExample(e)}'>
              ${e.examples.map(t=>B`<option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample} > 
                ${80<t.exampleSummary.length?t.exampleId:t.exampleSummary} 
              </option>`)}
            </select>
            ${e.examples.map(t=>B`
              <div class="example" data-example = '${t.exampleId}' style = "display: ${t.exampleId===e.selectedExample?"block":"none"}">
                ${t.exampleSummary&&80<t.exampleSummary.length?B`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                ${t.exampleDescription?B`<div class="m-markdown-small"  style="padding: 4px 0"> ${PI(Ue(t.exampleDescription||""))} </div>`:""}
                ${"json"===t.exampleFormat?B`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${t.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>`:B`<pre>${t.exampleValue}</pre>`}
              </div>  
            `)}
          </span>  
        `}
    `:B`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"read example-panel border pad-8-16":"example-panel border-top"}'> No example provided </pre>
      `}mimeSchemaTemplate(e){return e?B`
      ${"table"===this.schemaStyle?B`
          <schema-table
            render-style = "${this.renderStyle}"
            .data = "${e.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
          > </schema-tree> `:B`
          <schema-tree
            render-style = "${this.renderStyle}"
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
          > </schema-tree>`}`:B`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"border pad-8-16":"border-top"}'> Schema not found</pre>
      `}});let VP=l`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`;customElements.define("dialog-box",class extends ne{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[VP]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",e=>{"Escape"===e.code&&this.onClose()})}attributeChangedCallback(e,t,r){t!==r&&("heading"===e&&(this.heading=r),"show"===e)&&"true"===(this.show=r)&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})),super.attributeChangedCallback(e,t,r)}render(){return B`
    ${"true"===this.show?B`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});let YP={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(6!==(e=3!==(e=0===e.indexOf("#")?e.slice(1,7):e).length&&4!==e.length?e:e[0]+e[0]+e[1]+e[1]+e[2]+e[2]).length)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){e=this.getRgb(e);return.299*e.r+.587*e.g+.114*e.b},invert(e){return 135<this.luminanace(e)?"#000":"#fff"},opacity(e,t){e=this.getRgb(e);return`rgba(${e.r}, ${e.g}, ${e.b}, ${t})`},brightness(e,t){e=this.getRgb(e);return e.r+=t,e.g+=t,e.b+=t,255<e.r?e.r=255:e.r<0&&(e.r=0),255<e.g?e.g=255:e.g<0&&(e.g=0),255<e.b?e.b=255:e.b<0&&(e.b=0),"#"+e.r.toString(16).padStart(2,"0")+e.g.toString(16).padStart(2,"0")+e.b.toString(16).padStart(2,"0")},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function KP(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function JP(e,t={}){let r={};var n=t.primaryColor||("dark"===e?"#f76b39":"#ff591e"),o=YP.color.invert(n),i=YP.color.opacity(n,"0.8");if("dark"===e){let e=t.bg1||"#2a2b2c",a=t.fg1||"#bbb",s=t.bg2||YP.color.brightness(e,5),l=t.bg3||YP.color.brightness(e,17),c=t.bg3||YP.color.brightness(e,35),p=t.fg2||YP.color.brightness(a,-15),u=t.fg3||YP.color.brightness(a,-20),d=t.fg3||YP.color.brightness(a,-65),h=t.inlineCodeFg||"#aaa",y=t.headerColor||YP.color.brightness(e,10),g=t.navBgColor||YP.color.brightness(e,10);r={bg1:e,bg2:s,bg3:l,lightBg:c,fg1:a,fg2:p,fg3:u,lightFg:d,inlineCodeFg:h,primaryColor:n,primaryColorTrans:i,primaryColorInvert:o,selectionBg:"#bbb",selectionFg:"#eee",overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:g,navTextColor:t.navTextColor||YP.color.opacity(YP.color.invert(g),"0.50"),navHoverBgColor:t.navHoverBgColor||YP.color.brightness(g,-15),navHoverTextColor:t.navHoverTextColor||YP.color.invert(g),navAccentColor:t.navAccentColor||YP.color.brightness(n,25),headerColor:y,headerColorInvert:YP.color.invert(y),headerColorDarker:YP.color.brightness(y,-20),headerColorBorder:YP.color.brightness(y,10),borderColor:t.borderColor||YP.color.brightness(e,20),lightBorderColor:t.lightBorderColor||YP.color.brightness(e,15),codeBorderColor:t.codeBorderColor||YP.color.brightness(e,30),inputBg:t.inputBg||YP.color.brightness(e,-5),placeHolder:t.placeHolder||YP.color.opacity(a,"0.3"),hoverColor:t.hoverColor||YP.color.brightness(e,-10),red:t.red||"#F06560",lightRed:t.lightRed||YP.color.brightness(e,-10),pink:t.pink||"#ffb2b2",lightPink:t.lightPink||YP.color.brightness(e,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||YP.color.brightness(e,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||YP.color.brightness(e,-10),orange:t.orange||"#f08d49",lightOrange:t.lightOrange||YP.color.brightness(e,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||YP.color.brightness(e,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||YP.color.opacity(YP.color.brightness(e,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{let e=t.bg1||"#fafbfc",a=t.fg1||"#444444",s=t.bg2||YP.color.brightness(e,-5),l=t.bg3||YP.color.brightness(e,-15),c=t.bg3||YP.color.brightness(e,-45),p=t.fg2||YP.color.brightness(a,17),u=t.fg3||YP.color.brightness(a,30),d=t.fg3||YP.color.brightness(a,70),h=t.inlineCodeFg||"brown",y=t.headerColor||YP.color.brightness(e,-180),g=t.navBgColor||YP.color.brightness(e,-200);r={bg1:e,bg2:s,bg3:l,lightBg:c,fg1:a,fg2:p,fg3:u,lightFg:d,inlineCodeFg:h,primaryColor:n,primaryColorTrans:i,primaryColorInvert:o,selectionBg:"#444",selectionFg:"#eee",overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:g,navTextColor:t.navTextColor||YP.color.opacity(YP.color.invert(g),"0.65"),navHoverBgColor:t.navHoverBgColor||YP.color.brightness(g,-15),navHoverTextColor:t.navHoverTextColor||YP.color.invert(g),navAccentColor:t.navAccentColor||YP.color.brightness(n,25),headerColor:y,headerColorInvert:YP.color.invert(y),headerColorDarker:YP.color.brightness(y,-20),headerColorBorder:YP.color.brightness(y,10),borderColor:t.borderColor||YP.color.brightness(e,-38),lightBorderColor:t.lightBorderColor||YP.color.brightness(e,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||YP.color.brightness(e,10),placeHolder:t.placeHolder||YP.color.brightness(d,20),hoverColor:t.hoverColor||YP.color.brightness(e,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink||"#990055",lightPink:t.lightPink||"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||YP.color.opacity(YP.color.brightness(e,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return B`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout||"row"};
    --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${"relaxed"===this.navItemSpacing?"10px 16px 10px 10px":"compact"===this.navItemSpacing?"5px 16px 5px 10px":"7px 16px 7px 10px"};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small:  ${"default"===this.fontSize?"12px":"large"===this.fontSize?"13px":"14px"};
    --font-size-mono:   ${"default"===this.fontSize?"13px":"large"===this.fontSize?"14px":"15px"};
    --font-size-regular: ${"default"===this.fontSize?"14px":"large"===this.fontSize?"15px":"16px"};
    --dialog-z-index: 1000;

    /* Theme specific styles */  
    --bg:${r.bg1};
    --bg2:${r.bg2};
    --bg3:${r.bg3};
    --light-bg:${r.lightBg};
    --fg:${r.fg1};
    --fg2:${r.fg2};
    --fg3:${r.fg3};
    --light-fg:${r.lightFg};
    --selection-bg:${r.selectionBg};
    --selection-fg:${r.selectionFg};
    --overlay-bg:${r.overlayBg};
    
    /* Border Colors */
    --border-color:${r.borderColor};
    --light-border-color:${r.lightBorderColor};
    --code-border-color:${r.codeBorderColor};

    --input-bg:${r.inputBg};
    --placeholder-color:${r.placeHolder};
    --hover-color:${r.hoverColor};
    --red:${r.red};
    --light-red:${r.lightRed};
    --pink:${r.pink};
    --light-pink:${r.lightPink};
    --green:${r.green};
    --light-green:${r.lightGreen};
    --blue:${r.blue};
    --light-blue:${r.lightBlue};
    --orange:${r.orange};
    --light-orange:${r.lightOrange};
    --yellow:${r.yellow};
    --light-yellow:${r.lightYellow};
    --purple:${r.purple};
    --brown:${r.brown};

    /* Header Color */
    --header-bg:${r.headerColor};
    --header-fg:${r.headerColorInvert};
    --header-color-darker:${r.headerColorDarker};
    --header-color-border:${r.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${r.navBgColor};
    --nav-text-color:${r.navTextColor};
    --nav-hover-bg-color:${r.navHoverBgColor};
    --nav-hover-text-color:${r.navHoverTextColor};
    --nav-accent-color:${r.navAccentColor};

    /* Nav API Method Colors*/
    --nav-get-color:${r.blue};
    --nav-put-color:${r.orange};
    --nav-post-color:${r.green};
    --nav-delete-color:${r.red};
    --nav-head-color:${r.yellow};

    /* Primary Colors */  
    --primary-color:${r.primaryColor};
    --primary-color-invert:${r.primaryColorInvert};
    --primary-color-trans:${r.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${r.codeBg};
    --code-fg:${r.codeFg};
    --inline-code-fg:${r.inlineCodeFg};
    --code-property-color:${r.codePropertyColor};
    --code-keyword-color:${r.codeKeywordColor};
    --code-operator-color:${r.codeOperatorColor};
  }
  </style>`}function ZP(e=!1,t=!0,r=!0,n=!1){if(!this.resolvedSpec)return"";"true"===this.persistAuth&&function(){var e=BI.call(this);Object.values(e).forEach(e=>{LI.call(this,e.securitySchemeId,e.username,e.password,e.value)})}.call(this);var o={bg1:KP(this.bgColor)?this.bgColor:"",fg1:KP(this.textColor)?this.textColor:"",headerColor:KP(this.headerColor)?this.headerColor:"",primaryColor:KP(this.primaryColor)?this.primaryColor:"",navBgColor:KP(this.navBgColor)?this.navBgColor:"",navTextColor:KP(this.navTextColor)?this.navTextColor:"",navHoverBgColor:KP(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:KP(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:KP(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?B`
        ${"dark"===this.theme?JP.call(this,"dark",o):JP.call(this,"light",o)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:B`
      ${"dark"===this.theme?JP.call(this,"dark",o):JP.call(this,"light",o)}
      <!-- Header -->
      ${WP.call(this)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?B`
      ${"dark"===this.theme?JP.call(this,"dark",o):JP.call(this,"light",o)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:B`
    ${"dark"===this.theme?JP.call(this,"dark",o):JP.call(this,"light",o)}

    <!-- Header -->
    ${"false"===this.showHeader?"":WP.call(this)}
    
    <!-- Advanced Search -->
    ${"false"===this.allowAdvancedSearch?"":function(){var e;return document.addEventListener("close",()=>{this.showAdvancedSearchDialog=!1}),document.addEventListener("open",this.onOpenSearchDialog),B`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${e=>this.onAdvancedSearch(e,400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${null==(e=this.advancedSearchMatches)?void 0:e.map(e=>B`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${e.deprecated?"filter:opacity(0.5);":""}' 
        data-content-id='${e.elementId}'
        tabindex = '0'
        @click="${e=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(e,!0)}}"
      > 
        <span class="upper bold-text method-fg ${e.method}">${e.method}</span> 
        <span>${e.path}</span>
        <span class="regular-font gray-text">${e.summary}</span>
      </div>
    `)}
    </dialog-box>
  `}.call(this)}

    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection} >
      <!-- Side Nav -->
      ${"read"!==this.renderStyle&&"focused"!==this.renderStyle||"true"!==this.showSideNav||!this.resolvedSpec?"":function(){var e;return!this.resolvedSpec||this.resolvedSpec.specLoadError?B`
      <nav class='nav-bar' part="section-navbar">
        <slot name="nav-logo" class="logo"></slot>
      </nav>
    `:B`
  <nav class='nav-bar ${this.renderStyle}' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    ${"false"===this.allowSearch&&"false"===this.allowAdvancedSearch?"":B`
        <div style="display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${"false"===this.allowAdvancedSearch?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}">
          ${"false"===this.allowSearch?"":B`
              <div style="display:flex; flex:1; line-height:22px;">
                <input id="nav-bar-search" 
                  part = "textbox textbox-nav-filter"
                  style = "width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
                  type = "text"
                  placeholder = "Filter" 
                  @change = "${this.onSearchChange}"  
                  spellcheck = "false" 
                >
                <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
              </div>  
              ${this.matchPaths?B`
                  <button @click = '${this.onClearSearch}' class="m-btn thin-border" style="margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;" part="btn btn-outline btn-clear-filter">
                    CLEAR
                  </button>`:""}
            `}
          ${"false"===this.allowAdvancedSearch||this.matchPaths?"":B`
              <button class="m-btn primary" part="btn btn-fill btn-search" style="margin-left:5px; padding:6px 8px; width:75px" @click="${this.onShowSearchModalClicked}">
                SEARCH
              </button>
            `}
        </div>
      `}
    ${B`<nav class='nav-scroll' part="section-navbar-scroll">
      ${"false"!==this.showInfo&&this.resolvedSpec.info?B`
          ${"true"===this.infoDescriptionHeadingsInNavBar?B`
              ${0<this.resolvedSpec.infoDescriptionHeaders.length?B`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}'> 
                    ${(null==(e=this.resolvedSpec.info)||null==(e=e.title)?void 0:e.trim())||"Overview"}
                  </div>`:""}
              <div class="overview-headers">
                ${this.resolvedSpec.infoDescriptionHeaders.map(e=>B`
                  <div 
                    class='nav-bar-h${e.depth}' 
                    id="link-overview--${(new Ue.Slugger).slug(e.text)}"  
                    data-content-id='overview--${(new Ue.Slugger).slug(e.text)}' 
                    @click='${e=>this.scrollToEventTarget(e,!1)}'
                  >
                    ${e.text}
                  </div>`)}
              </div>
              ${0<this.resolvedSpec.infoDescriptionHeaders.length?B`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>`:""}
            `:B`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}'> 
            ${(null==(e=this.resolvedSpec.info)||null==(e=e.title)?void 0:e.trim())||"Overview"} 
              </div>`}
        `:""}
    
      ${"false"===this.allowServerSelection?"":B`<div class='nav-bar-info' id='link-servers' data-content-id='servers' @click = '${e=>this.scrollToEventTarget(e,!1)}'> API Servers </div>`}
      ${"false"!==this.allowAuthentication&&this.resolvedSpec.securitySchemes?B`<div class='nav-bar-info' id='link-auth' data-content-id='auth' @click = '${e=>this.scrollToEventTarget(e,!1)}'> Authentication </div>`:""}

      <div id='link-operations-top' class='nav-bar-section operations' data-content-id='operations-top' @click = '${e=>this.scrollToEventTarget(e,!1)}'>
        <div style="font-size:16px; display:flex; margin-left:10px;">
          ${"focused"===this.renderStyle?B`
              <div @click="${e=>{IP.call(this,e,"expand-all")}}" title="Expand all" style="transform: rotate(90deg); cursor:pointer; margin-right:10px;">▸</div>
              <div @click="${e=>{IP.call(this,e,"collapse-all")}}" title="Collapse all" style="transform: rotate(270deg); cursor:pointer;">▸</div>`:""}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter(e=>e.paths.filter(e=>ot(this.matchPaths,e,this.matchType)).length).map(e=>B`
          <div class='nav-bar-tag-and-paths ${e.expanded?"expanded":"collapsed"}'>
            ${"General ⦂"===e.name?B`<hr style="border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;"/>`:B`
                <div 
                  class='nav-bar-tag' 
                  id="link-${e.elementId}" 
                  data-content-id='${e.elementId}'
                  data-first-path-id='${e.firstPathId}'
                  @click='${e=>{"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?jP.call(this,e):this.scrollToEventTarget(e,!1)}}'
                >
                  <div>${e.name}</div>
                  <div class="nav-bar-tag-icon" @click="${e=>{"focused"===this.renderStyle&&"show-description"===this.onNavTagClick&&jP.call(this,e)}}">
                  </div>
                </div>
              `}
            ${"true"===this.infoDescriptionHeadingsInNavBar?B`
                ${"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?"":B`
                    <div class='tag-headers'>
                      ${e.headers.map(t=>B`
                      <div 
                        class='nav-bar-h${t.depth}' 
                        id="link-${e.elementId}--${(new Ue.Slugger).slug(t.text)}"  
                        data-content-id='${e.elementId}--${(new Ue.Slugger).slug(t.text)}' 
                        @click='${e=>this.scrollToEventTarget(e,!1)}'
                      > ${t.text}</div>`)}
                    </div>`}`:""}

            
            <div class='nav-bar-paths-under-tag'>
              <!-- Paths in each tag (endpoints) -->
              ${e.paths.filter(e=>!this.matchPaths||ot(this.matchPaths,e,this.matchType)).map(e=>B`
              <div 
                class='nav-bar-path
                ${"true"===this.usePathInNavBar?"small-font":""}'
                data-content-id='${e.elementId}'
                id='link-${e.elementId}'
                @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
              >
                <span style = "display:flex; align-items:start; ${e.deprecated?"filter:opacity(0.5)":""}">
                  ${B`<span class="nav-method ${this.showMethodInNavBar} ${e.method}">
                      ${("as-colored-block"===this.showMethodInNavBar?e.method.substring(0,3):e.method).toUpperCase()}
                    </span>`}
                  ${e.isWebhook?B`<span style="font-weight:bold; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)">WEBHOOK</span>`:""}
                  ${"true"===this.usePathInNavBar?B`<span class='mono-font'>${e.path}</span>`:e.summary||e.shortSummary}
                </span>
              </div>`)}
            </div>
          </div>
        `)}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components&&"true"===this.showComponents&&"focused"===this.renderStyle?B`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map(e=>e.subComponents.length?B`
              <div class='nav-bar-tag' 
                data-content-id='cmp--${e.name.toLowerCase()}' 
                id='link-cmp--${e.name.toLowerCase()}' 
                @click='${e=>this.scrollToEventTarget(e,!1)}'>
                ${e.name}
              </div>
              ${e.subComponents.filter(e=>!1!==e.expanded).map(e=>B`
                <div class='nav-bar-path' data-content-id='cmp--${e.id}' id='link-cmp--${e.id}' @click='${e=>this.scrollToEventTarget(e,!1)}'>
                  <span> ${e.name} </span>
                </div>`)}`:"")}`:""}
    </nav>`}
</nav>
`}.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?B`<div class="loader"></div>`:B`
              ${!0===this.loadFailed?B`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:B`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                  ${"focused"===this.renderStyle?B`${NP.call(this)}`:B`
                      ${"true"===this.showInfo?AP.call(this):""}
                      ${"true"===this.allowServerSelection?_P.call(this):""}
                      ${"true"===this.allowAuthentication?GI.call(this):""}
                      <div id="operations-top" class="observe-me">
                        <slot name="operations-top"></slot>
                      </div>  
                      ${"read"===this.renderStyle?xP.call(this):function(e=!0,t=!0,r=!1){return this.resolvedSpec?B`
    ${e?B`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${e=>UP(e,"expand-all")}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${e=>UP(e,"collapse-all")}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>`:""}
    ${this.resolvedSpec.tags.map(e=>B`
      ${t?B` 
          <div class='regular-font section-gap section-tag ${e.expanded?"expanded":"collapsed"}'> 
            <div class='section-tag-header' @click="${()=>{e.expanded=!e.expanded,this.requestUpdate()}}">
              <div id='${e.elementId}' class="sub-title tag" style="color:var(--primary-color)">${e.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${e.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${PI(Ue(e.description||""))}
              </div>
              ${e.paths.filter(e=>!this.matchPaths||ot(this.matchPaths,e,this.matchType)).map(e=>B`
                <section part="section-endpoint" id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
                  ${zP.call(this,e,r)}      
                  ${r||e.expanded?qP.call(this,e):""}
                </section>`)}
            </div>
          </div>`:B`
          <div class='section-tag-body'>
          ${e.paths.filter(e=>!this.matchPaths||ot(this.matchPaths,e,this.matchType)).map(e=>B`
            <section id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
              ${zP.call(this,e,r)}      
              ${r||e.expanded?qP.call(this,e):""}
            </section>`)}
          </div>
        `}
  `)}`:""}.call(this,t,r,n)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("rapi-doc",class extends ne{constructor(){super();var e={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!0,this.intersectionObserver=new IntersectionObserver(e=>{this.onIntersect(e)},e)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},useSummaryToListExamples:{type:String,attribute:"use-summary-to-list-example"},persistAuth:{type:String,attribute:"persist-auth"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},cssFile:{type:String,attribute:"css-file"},cssClasses:{type:String,attribute:"css-classes"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},showMethodInNavBar:{type:String,attribute:"show-method-in-nav-bar"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[He,We,Ve,Ge,Ye,Ke,Je,Ze,Xe,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }

      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body{ 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body.deprecated{ filter:opacity(0.6); }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .nav-method { font-weight: bold; margin-right: 4px; font-size: calc(var(--font-size-small) - 2px); white-space: nowrap; }
      .nav-method.false { display: none; }

      .nav-method.as-colored-text.get { color:var(--nav-get-color); }
      .nav-method.as-colored-text.put { color:var(--nav-put-color); }
      .nav-method.as-colored-text.post { color:var(--nav-post-color); }
      .nav-method.as-colored-text.delete { color:var(--nav-delete-color); }
      .nav-method.as-colored-text.head, .nav-method.as-colored-text.patch, .nav-method.as-colored-text.options { color:var(--nav-head-color); }
      
      .nav-method.as-colored-block {
        padding: 1px 4px;
        min-width: 30px;
        border-radius: 4px 0 0 4px;
        color: #000;
      }

      .nav-method.as-colored-block.get { background-color: var(--blue); }
      .nav-method.as-colored-block.put { background-color: var(--orange); }
      .nav-method.as-colored-block.post { background-color: var(--green); }
      .nav-method.as-colored-block.delete { background-color: var(--red); }
      .nav-method.as-colored-block.head, .nav-method.as-colored-block.patch , .nav-method.as-colored-block.options { 
        background-color: var(--yellow); 
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${s("default"===this.fontSize?"300px":"large"===this.fontSize?"315px":"330px")};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`,Qe]}connectedCallback(){super.connectedCallback();let e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName)&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0")),"false"!==this.loadFonts){let e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";var r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then(e=>{document.fonts.add(e)}),r.load().then(e=>{document.fonts.add(e)})}this.layout&&"row, column,".includes(this.layout+",")||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(this.renderStyle+",")||(this.renderStyle="read"),this.schemaStyle&&"tree, table,".includes(this.schemaStyle+",")||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(this.theme+",")||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(this.defaultSchemaTab+",")?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(this.schemaDescriptionExpanded+",")||(this.schemaDescriptionExpanded="false");let t=["post","put","patch"];this.schemaHideReadOnly&&("never"===this.schemaHideReadOnly||(this.schemaHideReadOnly=t.filter(e=>this.schemaHideReadOnly.includes(e)),0!==this.schemaHideReadOnly.length))||(this.schemaHideReadOnly=t),this.schemaHideReadOnly+=["get","head","delete","options"],this.schemaHideWriteOnly="never"!==this.schemaHideWriteOnly,this.fillRequestFieldsWithExample&&"true, false,".includes(this.fillRequestFieldsWithExample+",")||(this.fillRequestFieldsWithExample="true"),this.useSummaryToListExamples&&"true, false,".includes(this.useSummaryToListExamples+",")||(this.useSummaryToListExamples="false"),this.persistAuth&&"true, false,".includes(this.persistAuth+",")||(this.persistAuth="false"),this.onNavTagClick&&"expand-collapse, show-description,".includes(this.onNavTagClick+",")||(this.onNavTagClick="expand-collapse"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowSearch&&"true, false,".includes(this.allowSearch+",")||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(this.allowAdvancedSearch+",")||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(this.allowTry+",")||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(this.updateRoute+",")||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(this.sortTags+",")||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(this.generateMissingTags+",")||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(this.sortEndpointsBy+",")||(this.sortEndpointsBy="path"),this.navItemSpacing&&"compact, relaxed, default,".includes(this.navItemSpacing+",")||(this.navItemSpacing="default"),this.showMethodInNavBar&&"false, as-plain-text, as-colored-text, as-colored-block,".includes(this.showMethodInNavBar+",")||(this.showMethodInNavBar="false"),this.usePathInNavBar&&"true, false,".includes(this.usePathInNavBar+",")||(this.usePathInNavBar="false"),this.fontSize&&"default, large, largest,".includes(this.fontSize+",")||(this.fontSize="default"),this.showInfo&&"true, false,".includes(this.showInfo+",")||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(this.allowServerSelection+",")||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(this.allowAuthentication+",")||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(this.allowSchemaDescriptionExpandToggle+",")||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(this.infoDescriptionHeadingsInNavBar+",")||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(this.fetchCredentials+",")||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),this.cssFile||(this.cssFile=null),this.cssClasses||(this.cssClasses=""),Ue.setOptions({highlight:(e,t)=>qe().languages[t]?qe().highlight(e,qe().languages[t],t):e}),window.addEventListener("hashchange",()=>{var e=new RegExp("^"+this.routePrefix,"i"),e=window.location.hash.replace(e,"");this.scrollTo(e)},!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){var e=new Ue.Renderer;return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="${n.slug(r)}">${e}</h${t}>`,e}render(){var e=document.querySelector(`link[href*="${this.cssFile}"]`);return e&&this.shadowRoot.appendChild(e.cloneNode()),ZP.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach(e=>{this.intersectionObserver.observe(e)})}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r),this.gotoPath&&!window.location.hash&&this.scrollTo(this.gotoPath)},0),"render-style"===e&&("read"===r?window.setTimeout(()=>{this.observeExpandedContent()},100):this.intersectionObserver.disconnect()),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",o="",i="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,o=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(o=r,n=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,o=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){let e=this.resolvedSpec.securitySchemes.find(e=>e.securitySchemeId===tt);e?(e.name=n,e.in=o,e.value=i,e.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({securitySchemeId:tt,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:o,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSepcFileChange(e){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);let t=e.target.files[0],r=new FileReader;r.onload=()=>{try{var e=JSON.parse(r.result);this.loadSpec(e),this.shadowRoot.getElementById("spec-url").value=""}catch(e){console.error("RapiDoc: Unable to read or parse json")}},r.readAsText(t)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(e){this.matchPaths=e.target.value,this.resolvedSpec.tags.forEach(e=>e.paths.filter(t=>{this.matchPaths&&ot(this.matchPaths,t,this.matchType)&&(e.expanded=!0)})),this.resolvedSpec.components.forEach(e=>e.subComponents.filter(e=>{e.expanded=!1,this.matchPaths&&!((e,t)=>t.name.toLowerCase().includes(e.toLowerCase()))(this.matchPaths,e)||(e.expanded=!0)})),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach(e=>e.subComponents.filter(e=>{e.expanded=!0}))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(e){e=e.detail.querySelector("input");await rt(0),e&&e.focus()}async loadSpec(e){if(e){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;var t=await TI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error("RapiDoc: Unable to resolve the API spec..  "+e.message)}}}async afterSpecParsedAndValidated(e){var t;for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find(e=>e.url===this.defaultApiServerUrl))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);e=new CustomEvent("spec-loaded",{detail:e});if(this.dispatchEvent(e),this.intersectionObserver.disconnect(),"read"===this.renderStyle&&(await rt(100),this.observeExpandedContent()),null!=(t=window.location.hash)&&t.substring(1)){let e=new RegExp("^"+this.routePrefix,"i"),t=window.location.hash.replace(e,"");"view"===this.renderStyle?this.expandAndGotoOperation(t,!0,!0):this.scrollTo(t)}else if("focused"===this.renderStyle){let n,e=this.showInfo?"overview":null==(n=this.resolvedSpec.tags[0])?void 0:n.paths[0];this.scrollTo(e)}}expandAndGotoOperation(e,t=!0){if(this.resolvedSpec){let r=!0,n=-1===e.indexOf("#")?e:e.substring(1);if(n.startsWith("overview")||"servers"===n||"auth"===n)r=!1;else for(let t=0;t<(null==(o=this.resolvedSpec.tags)?void 0:o.length);t++){var o;let n=this.resolvedSpec.tags[t],a=null==(o=n.paths)?void 0:o.find(t=>t.elementId===e);a&&(a.expanded&&n.expanded?r=!1:(a.expanded=!0,n.expanded=!0))}t&&(r&&this.requestUpdate(),window.setTimeout(()=>{var e=this.shadowRoot.getElementById(n);e&&(e.scrollIntoView({behavior:"auto",block:"start"}),"true"===this.updateRoute)&&window.history.replaceState(null,null,""+(this.routePrefix||"#")+n)},r?150:0))}}isValidTopId(e){return e.startsWith("overview")||"servers"===e||"auth"===e}isValidPathId(e){var n;return!("overview"!==e||!this.showInfo)||!("servers"!==e||!this.allowServerSelection)||!("auth"!==e||!this.allowAuthentication)||(e.startsWith("tag--")?null==(n=this.resolvedSpec)||null==(n=n.tags)?void 0:n.find(t=>t.elementId===e):null==(n=this.resolvedSpec)||null==(n=n.tags)?void 0:n.find(t=>t.paths.find(t=>t.elementId===e)))}onIntersect(e){!1!==this.isIntersectionObserverActive&&e.forEach(e=>{var t,r;e.isIntersecting&&0<e.intersectionRatio&&(t=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),(r=this.shadowRoot.getElementById("link-"+e.target.id))&&("true"===this.updateRoute&&window.history.replaceState(null,null,""+window.location.href.split("#")[0]+(this.routePrefix||"#")+e.target.id),r.scrollIntoView({behavior:"auto",block:"center"}),r.classList.add("active")),t)&&t.classList.remove("active")})}handleHref(e){"a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")&&(e=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#","")))&&e.scrollIntoView({behavior:"auto",block:"start"})}async scrollToEventTarget(e,t=!0){e=e.currentTarget;e.dataset.contentId&&(this.isIntersectionObserverActive=!1,this.scrollTo(e.dataset.contentId,!0,t),setTimeout(()=>{this.isIntersectionObserverActive=!0},300))}async scrollTo(e,t=!0,r=!0){if("focused"===this.renderStyle&&(this.focusedElementId=e,await rt(0)),"view"===this.renderStyle)this.expandAndGotoOperation(e,t,!0);else{let t=!1;var n=this.shadowRoot.getElementById(e);if(n?(t=!0,n.scrollIntoView({behavior:"auto",block:"start"})):t=!1,t){if("focused"===this.renderStyle){let e=this.shadowRoot.querySelector("api-request"),t=(e&&e.resetRequestBodySelection(),this.shadowRoot.querySelector("api-response"));t&&t.resetSelection()}"true"===this.updateRoute&&window.history.replaceState(null,null,""+(this.routePrefix||"#")+e);let t=this.shadowRoot.getElementById("link-"+e);if(t){r&&t.scrollIntoView({behavior:"auto",block:"center"}),await rt(0);let e=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");e&&e.classList.remove("active"),t.classList.add("active")}}}}setHttpUserNameAndPassword(e,t,r){return LI.call(this,e,t,r)}setApiKey(e,t){return LI.call(this,e,"","",t)}removeAllSecurityKeys(){return DI.call(this)}setApiServer(e){return EP.call(this,e)}onAdvancedSearch(e,t){let r=e.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{var e="text"===r.type?r:r.closest(".advanced-search-options").querySelector("input[type=text]"),t=[...r.closest(".advanced-search-options").querySelectorAll("input:checked")].map(e=>e.id);this.advancedSearchMatches=((e,t,r=[])=>{if(e.trim()&&0!==r.length){let n=[];return t.forEach(t=>{t.paths.forEach(t=>{let o="",i;if(r.includes("search-api-path")&&(o=t.path),r.includes("search-api-descr")&&(o=o+" "+(t.summary||t.description||"")),r.includes("search-api-params")&&(o=o+" "+((null==(i=t.parameters)?void 0:i.map(e=>e.name).join(" "))||"")),r.includes("search-api-request-body")&&t.requestBody){let e=new Set;for(let r in null==(a=t.requestBody)?void 0:a.content){var a,s;null!=(s=t.requestBody.content[r].schema)&&s.properties&&(e=function it(e,t=new Set){return e&&Object.keys(e).forEach(r=>{var n;t.add(r),e[r].properties?it(e[r].properties,t):null!=(n=e[r].items)&&n.properties&&it(null==(n=e[r].items)?void 0:n.properties,t)}),t}(null==(s=t.requestBody.content[r].schema)?void 0:s.properties)),o=o+" "+[...e].join(" ")}}(o=r.includes("search-api-resp-descr")?o+" "+Object.values(t.responses).map(e=>e.description||"").join(" "):o).toLowerCase().includes(e.trim().toLowerCase())&&n.push({elementId:t.elementId,method:t.method,path:t.path,summary:t.summary||t.description||"",deprecated:t.deprecated})})}),n}})(e.value,this.resolvedSpec.tags,t)},t)}}),customElements.define("rapi-doc-mini",class extends ne{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},useSummaryToListExamples:{type:String,attribute:"use-summary-to-list-example"},persistAuth:{type:String,attribute:"persist-auth"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[He,We,Ve,Ge,Ye,Ke,Je,Ze,Xe,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){var t,e;super.connectedCallback(),"false"!==this.loadFonts&&(e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e),e.weight="600",e=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e),t.load().then(e=>{document.fonts.add(e)}),e.load().then(e=>{document.fonts.add(e)})),this.showSummaryWhenCollapsed&&"true, false,".includes(this.showSummaryWhenCollapsed+",")||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(this.layout+",")||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(this.schemaStyle+",")||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(this.theme+",")||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(this.defaultSchemaTab+",")?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",this.pathsExpanded="true"===this.pathsExpanded,(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(this.schemaDescriptionExpanded+",")||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(this.fillRequestFieldsWithExample+",")||(this.fillRequestFieldsWithExample="true"),this.useSummaryToListExamples&&"true, false,".includes(this.useSummaryToListExamples+",")||(this.useSummaryToListExamples="false"),this.persistAuth&&"true, false,".includes(this.persistAuth+",")||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(this.allowTry+",")||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(this.sortTags+",")||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(this.sortEndpointsBy+",")||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(this.fontSize+",")||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(this.allowSchemaDescriptionExpandToggle+",")||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(this.fetchCredentials+",")||(this.fetchCredentials=""),Ue.setOptions({highlight:(e,t)=>qe().languages[t]?qe().highlight(e,qe().languages[t],t):e})}render(){return ZP.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r)},0),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",o="",i="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,o=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(o=r,n=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,o=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){let e=this.resolvedSpec.securitySchemes.find(e=>e.securitySchemeId===tt);e?(e.name=n,e.in=o,e.value=i,e.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({apiKeyId:tt,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:o,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();var t=await TI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error("RapiDoc: Unable to resolve the API spec..  "+e.message)}}setHttpUserNameAndPassword(e,t,r){return LI.call(this,e,t,r)}setApiKey(e,t){return LI.call(this,e,"","",t)}removeAllSecurityKeys(){return DI.call(this)}setApiServer(e){return EP.call(this,e)}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find(e=>e.url===this.defaultApiServerUrl))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);e=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(e)}handleHref(e){"a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")&&(e=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#","")))&&e.scrollIntoView({behavior:"auto",block:"start"})}});class XP extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",e=>this.receiveStorage(e),!0)}receiveAuthParms(){let e={};var t;document.location.search?(t=new URLSearchParams(document.location.search),e={code:t.get("code"),error:t.get("error"),state:t.get("state"),responseType:"code"}):window.location.hash&&(e={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"}),window.opener?window.opener.postMessage(e,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(e))}relayAuthParams(e){window.parent&&"rapidoc-oauth-data"===e.key&&(e=JSON.parse(e.newValue),window.parent.postMessage(e,this.target))}parseQueryString(e,t){var r=e.split("&");for(let e=0;e<r.length;e++){var n=r[e].split("=");if(decodeURIComponent(n[0])===t)return decodeURIComponent(n[1])}}}function tR(e=!1){var t;return this.resolvedSpec?(t={bg1:KP(this.bgColor)?this.bgColor:"",fg1:KP(this.textColor)?this.textColor:"",headerColor:KP(this.headerColor)?this.headerColor:"",primaryColor:KP(this.primaryColor)?this.primaryColor:"",navBgColor:KP(this.navBgColor)?this.navBgColor:"",navTextColor:KP(this.navTextColor)?this.navTextColor:"",navHoverBgColor:KP(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:KP(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:KP(this.navAccentColor)?this.navAccentColor:""},this.resolvedSpec.specLoadError?e?B`
        ${"dark"===this.theme?JP.call(this,"dark",t):JP.call(this,"light",t)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:B`
      ${"dark"===this.theme?JP.call(this,"dark",t):JP.call(this,"light",t)}
      <!-- Header -->
      ${WP.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?B`
      ${"dark"===this.theme?JP.call(this,"dark",t):JP.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:B`
    ${"dark"===this.theme?JP.call(this,"dark",t):JP.call(this,"light",t)}

    <!-- Header -->
    ${"false"===this.showHeader?"":WP.call(this)}
    
    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${function(){return B`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map(e=>B`
        <div class='nav-bar-path' data-content-id='${e.elementId}' id='link-${e.elementId}'
          @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
        > 
          ${e.name}
        </div>`)}
    </nav>  
  </nav>
  `}.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?B`<div class="loader"></div>`:B`
              ${!0===this.loadFailed?B`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:B`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                    ${function(){return B`
    ${"true"===this.showInfo?AP.call(this):""}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map(e=>{var t,r=fP(e.schema,"json",e.examples,e.example,!0,!1,"json",!0);return e.selectedExample=null==(t=r[0])?void 0:t.exampleId,B`
        <section id='${e.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${e.name}</div>
            <span class="json-schema-description m-markdown ">${PI(Ue(e.description||""))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${hP(e.schema,{})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${1<r.length?B`<select style="min-width:100px; max-width:100%" @change='${t=>this.onSelectExample(t,e)}'>
                    ${r.map(t=>B`
                      <option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample}> 
                        ${80<t.exampleSummary.length?t.exampleId:t.exampleSummary}
                      </option>`)}
                  </select>`:B`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${r[0].exampleSummary}</div>`}
              ${r.map(t=>B`
                <json-tree 
                  .data = "${t.exampleValue}"
                  data-example = "${t.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${t.exampleId===e.selectedExample?"flex":"none"}"
                ></json-tree>`)}
            </div>
          </div>
        </section>`})}
    </div>
  `}.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `):""}customElements.define("oauth-receiver",XP),customElements.define("json-schema-viewer",class extends ne{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[He,We,Ve,Ge,Ye,Ke,Je,Ze,Xe,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){super.connectedCallback();let e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName)&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0")),"false"!==this.loadFonts){let e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";var r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then(e=>{document.fonts.add(e)}),r.load().then(e=>{document.fonts.add(e)})}this.renderStyle="focused",this.pathsExpanded="true"===this.pathsExpanded,this.showInfo&&"true, false,".includes(this.showInfo+",")||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(this.showHeader+",")||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(this.schemaStyle+",")||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(this.theme+",")||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(this.allowSearch+",")||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(this.schemaDescriptionExpanded+",")||(this.schemaDescriptionExpanded="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.fontSize&&"default, large, largest,".includes(this.fontSize+",")||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(this.allowSchemaDescriptionExpandToggle+",")||(this.allowSchemaDescriptionExpandToggle="true"),Ue.setOptions({highlight:(e,t)=>qe().languages[t]?qe().highlight(e,qe().languages[t],t):e})}render(){return tR.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){"spec-url"===e&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r)},0),super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();var t=await TI.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error("RapiDoc: Unable to resolve the API spec..  "+e.message)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;e=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(e)}handleHref(e){"a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")&&(e=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#","")))&&e.scrollIntoView({behavior:"auto",block:"start"})}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach(t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"})}async scrollToEventTarget(e){var e=e.currentTarget;e.dataset.contentId&&(e=this.shadowRoot.getElementById(e.dataset.contentId))&&e.scrollIntoView({behavior:"auto",block:"start"})}})},742:(e,t)=>{t.byteLength=function(e){var e=l(e),r=e[0],e=e[1];return 3*(r+e)/4-e},t.toByteArray=function(e){for(var t,i=l(e),a=i[0],i=i[1],c=new o(3*(a+i)/4-i),p=0,u=0<i?a-4:a,r=0;r<u;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[p++]=t>>16&255,c[p++]=t>>8&255,c[p++]=255&t;return 2===i&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[p++]=255&t),1===i&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[p++]=t>>8&255,c[p++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,i=[],a=16383,s=0,l=n-o;s<l;s+=a)i.push(((e,t,n)=>{for(var o,a=[],s=t;s<n;s+=3)o=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(r[(o=o)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return a.join("")})(e,s,l<s+a?l:s+a));return 1==o?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2==o&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=i.length;a<s;++a)r[a]=i[a],n[i.charCodeAt(a)]=a;function l(e){var t=e.length;if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4");e=e.indexOf("=");return[e=-1===e?t:e,e===t?0:4-e%4]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},764:(e,t,r)=>{let n=r(742),o=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null,a=(t.Buffer=l,t.SlowBuffer=function(e){return l.alloc(+(e=+e!=e?0:e))},t.INSPECT_MAX_BYTES=50,2147483647);function s(e){if(e>a)throw new RangeError('The value "'+e+'" is invalid for option "size"');e=new Uint8Array(e);return Object.setPrototypeOf(e,l.prototype),e}function l(e,t,r){if("number"!=typeof e)return c(e,t,r);if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return u(e)}function c(e,t,r){if("string"==typeof e)return((e,t)=>{if(!l.isEncoding(t="string"==typeof t&&""!==t?t:"utf8"))throw new TypeError("Unknown encoding: "+t);var r=0|m(e,t);let n=s(r);return e=n.write(e,t),n=e!==r?n.slice(0,e):n})(e,t);if(ArrayBuffer.isView(e))return(e=>{var t;return K(e,Uint8Array)?h((t=new Uint8Array(e)).buffer,t.byteOffset,t.byteLength):d(e)})(e);if(null!=e){if(K(e,ArrayBuffer)||e&&K(e.buffer,ArrayBuffer))return h(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(K(e,SharedArrayBuffer)||e&&K(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);n=(e=>{var t,r;return l.isBuffer(e)?(0!==(r=s(t=0|f(e.length))).length&&e.copy(r,0,0,t),r):void 0!==e.length?"number"!=typeof e.length||J(e.length)?s(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0})(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r)}throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return p(e),s(e<0?0:0|f(e))}function d(e){var t=e.length<0?0:0|f(e.length),r=s(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');e=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r);return Object.setPrototypeOf(e,l.prototype),e}function f(e){if(e>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function m(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||K(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=2<arguments.length&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(e).length;default:if(o)return n?-1:V(e).length;t=(""+t).toLowerCase(),o=!0}}function y(e,t,r){let n=!1;if((t=void 0===t||t<0?0:t)>this.length)return"";if((r=void 0===r||r>this.length?this.length:r)<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e=e||"utf8";;)switch(e){case"hex":return((e,t,r)=>{var n=e.length;(!r||r<0||n<r)&&(r=n);let o="";for(let n=t=!t||t<0?0:t;n<r;++n)o+=Z[e[n]];return o})(this,t,r);case"utf8":case"utf-8":return E(this,t,r);case"ascii":return((e,t,r)=>{let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n})(this,t,r);case"latin1":case"binary":return((e,t,r)=>{let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n})(this,t,r);case"base64":return A(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return((e,t,r)=>{let n=e.slice(t,r),o="";for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o})(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function g(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function v(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):2147483647<r?r=2147483647:r<-2147483648&&(r=-2147483648),(r=J(r=+r)?o?0:e.length-1:r)<0&&(r=e.length+r),e.length<=r){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?(o?Uint8Array.prototype.indexOf:Uint8Array.prototype.lastIndexOf).call(e,t,r):b(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,n,o){let i,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){let n=-1;for(i=r;i<s;i++)if(c(e,i)===c(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===l)return n*a}else-1!==n&&(i-=i-n),n=-1}else for(r+l>s&&(r=s-l),i=r;0<=i;i--){let r=!0;for(let n=0;n<l;n++)if(c(e,i+n)!==c(t,n)){r=!1;break}if(r)return i}return-1}function $(e,t,r,n){return Y(((e,t)=>{var r,n,i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,i.push(r%256),i.push(n);return i})(t,e.length-r),e,r,n)}function A(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function E(e,t,r){r=Math.min(e.length,r);var n=[];let o=t;for(;o<r;){let t=e[o],i=null,a=239<t?4:223<t?3:191<t?2:1;if(o+a<=r){let r,n,s,l;switch(a){case 1:t<128&&(i=t);break;case 2:128==(192&(r=e[o+1]))&&127<(l=(31&t)<<6|63&r)&&(i=l);break;case 3:r=e[o+1],n=e[o+2],128==(192&r)&&128==(192&n)&&2047<(l=(15&t)<<12|(63&r)<<6|63&n)&&(l<55296||57343<l)&&(i=l);break;case 4:r=e[o+1],n=e[o+2],s=e[o+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&65535<(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s)&&l<1114112&&(i=l)}}null===i?(i=65533,a=1):65535<i&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=a}return(e=>{var t=e.length;if(t<=O)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=O));return r})(n)}t.kMaxLength=a,(l.TYPED_ARRAY_SUPPORT=(()=>{try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}})())||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=c,Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return((e,t,r)=>(p(e),!(e<=0)&&void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)))(e,t,r)},l.allocUnsafe=u,l.allocUnsafeSlow=u,l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(K(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),K(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=l.allocUnsafe(t);let o=0;for(r=0;r<e.length;++r){let t=e[r];if(K(t,Uint8Array))o+t.length>n.length?(t=l.isBuffer(t)?t:l.from(t)).copy(n,o):Uint8Array.prototype.set.call(n,t,o);else{if(!l.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,o)}o+=t.length}return n},l.byteLength=m,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)g(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},l.prototype.toLocaleString=l.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?E(this,0,e):y.apply(this,arguments)},l.prototype.equals=function(e){if(l.isBuffer(e))return this===e||0===l.compare(this,e);throw new TypeError("Argument must be a Buffer")},l.prototype.inspect=function(){let e="";var r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,o){if(K(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),(t=void 0===t?0:t)<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(o<=n&&r<=t)return 0;if(o<=n)return-1;if(r<=t)return 1;if(this===e)return 0;let i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0);var s=Math.min(i,a),c=this.slice(n,o),p=e.slice(t,r);for(let e=0;e<s;++e)if(c[e]!==p[e]){i=c[e],a=p[e];break}return i<a?-1:a<i?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-t;if((void 0===r||o<r)&&(r=o),0<e.length&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n=n||"utf8";let i=!1;for(;;)switch(n){case"hex":return((e,t,r,n)=>{r=Number(r)||0;var o=e.length-r,o=((!n||(n=Number(n))>o)&&(n=o),t.length);let a;for(o/2<n&&(n=o/2),a=0;a<n;++a){let n=parseInt(t.substr(2*a,2),16);if(J(n))return a;e[r+a]=n}return a})(this,e,t,r);case"utf8":case"utf-8":return((e,t,r,n)=>Y(V(t,e.length-r),e,r,n))(this,e,t,r);case"ascii":case"latin1":case"binary":return((e,t,r,n)=>Y((e=>{var t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t})(t),e,r,n))(this,e,t,r);case"base64":return((e,t,r,n)=>Y(G(t),e,r,n))(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};let O=4096;function I(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(r<e+t)throw new RangeError("Trying to access beyond buffer length")}function P(e,t,r,n,o,i){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o<t||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function R(e,t,r,n,o){z(t,n,o,e,r,7);n=Number(t&BigInt(4294967295)),e[r++]=n,e[r++]=n>>=8,e[r++]=n>>=8,e[r++]=n>>=8,o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,e[r++]=o>>=8,e[r++]=o>>=8,e[r++]=o>>=8,r}function L(e,t,r,n,o){z(t,n,o,e,r,7);n=Number(t&BigInt(4294967295)),e[r+7]=n,e[r+6]=n>>=8,e[r+5]=n>>=8,e[r+4]=n>>=8,o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,e[r+2]=o>>=8,e[r+1]=o>>=8,e[r]=o>>=8,r+8}function D(e,t,r,n){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function B(e,t,r,n,i){return t=+t,r>>>=0,i||D(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function N(e,t,r,n,i){return t=+t,r>>>=0,i||D(e,0,r,8),o.write(e,t,r,n,52,8),r+8}l.prototype.slice=function(e,t){var r=this.length,r=((e=~~e)<0?(e+=r)<0&&(e=0):r<e&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):r<t&&(t=r),t<e&&(t=e),this.subarray(e,t));return Object.setPrototypeOf(r,l.prototype),r},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e+--t],o=1;for(;0<t&&(o*=256);)n+=this[e+--t]*o;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=X(function(e){q(e>>>=0,"offset");var t=this[e],r=this[e+7],t=(void 0!==t&&void 0!==r||H(e,this.length-8),t+256*this[++e]+65536*this[++e]+this[++e]*2**24),e=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(t)+(BigInt(e)<<BigInt(32))}),l.prototype.readBigUInt64BE=X(function(e){q(e>>>=0,"offset");var t=this[e],r=this[e+7],t=(void 0!==t&&void 0!==r||H(e,this.length-8),t*2**24+65536*this[++e]+256*this[++e]+this[++e]),e=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(t)<<BigInt(32))+BigInt(e)}),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=t,o=1,i=this[e+--n];for(;0<n&&(o*=256);)i+=this[e+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||I(e,2,this.length);t=this[e]|this[e+1]<<8;return 32768&t?4294901760|t:t},l.prototype.readInt16BE=function(e,t){e>>>=0,t||I(e,2,this.length);t=this[e+1]|this[e]<<8;return 32768&t?4294901760|t:t},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=X(function(e){q(e>>>=0,"offset");var t=this[e],r=this[e+7],r=(void 0!==t&&void 0!==r||H(e,this.length-8),this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24));return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)}),l.prototype.readBigInt64BE=X(function(e){q(e>>>=0,"offset");var t=this[e],r=this[e+7],t=(void 0!==t&&void 0!==r||H(e,this.length-8),(t<<24)+65536*this[++e]+256*this[++e]+this[++e]);return(BigInt(t)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)}),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||I(e,4,this.length),o.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||I(e,4,this.length),o.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||I(e,8,this.length),o.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||I(e,8,this.length),o.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||P(this,e,t,r,Math.pow(2,8*r)-1,0);let o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||P(this,e,t,r,Math.pow(2,8*r)-1,0);let o=r-1,i=1;for(this[t+o]=255&e;0<=--o&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=X(function(e,t=0){return R(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeBigUInt64BE=X(function(e,t=0){return L(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);P(this,e,t,r,n-1,-n)}let o=0,i=1,a=0;for(this[t]=255&e;++o<r&&(i*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);P(this,e,t,r,n-1,-n)}let o=r-1,i=1,a=0;for(this[t+o]=255&e;0<=--o&&(i*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,1,127,-128),this[t]=255&(e=e<0?255+e+1:e),t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,2147483647,-2147483648),this[t]=(e=e<0?4294967295+e+1:e)>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=X(function(e,t=0){return R(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeBigInt64BE=X(function(e,t=0){return L(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeFloatLE=function(e,t,r){return B(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return B(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return N(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return N(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r=r||0,n||0===n||(n=this.length),t>=e.length&&(t=e.length),(n=0<n&&n<r?r:n)===r)return 0;if(0===e.length||0===this.length)return 0;if((t=t||0)<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length);var o=(n=e.length-t<n-r?e.length-t+r:n)-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(!(r<=t)){let o;if(t>>>=0,r=void 0===r?this.length:r>>>0,"number"==typeof(e=e||0))for(o=t;o<r;++o)this[o]=e;else{var i=l.isBuffer(e)?e:l.from(e,n),a=i.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=i[o%a]}}return this};let M={};function F(e,t,r){M[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=this.name+` [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return this.name+` [${e}]: `+this.message}}}function U(e){let t="",r=e.length;for(var n="-"===e[0]?1:0;r>=4+n;r-=3)t="_"+e.slice(r-3,r)+t;return""+e.slice(0,r)+t}function z(e,t,r,n,o,i){if(r<e||e<t){let n="bigint"==typeof t?"n":"",o;throw o=3<i?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** `+8*(i+1)+n:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** `+(8*(i+1)-1)+n:`>= ${t}${n} and <= `+r+n,new M.ERR_OUT_OF_RANGE("value",o,e)}((e,t,r)=>{q(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||H(t,e.length-(r+1))})(n,o,i)}function q(e,t){if("number"!=typeof e)throw new M.ERR_INVALID_ARG_TYPE(t,"number",e)}function H(e,t,r){if(Math.floor(e)!==e)throw q(e,r),new M.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new M.ERR_BUFFER_OUT_OF_BOUNDS;throw new M.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= `+t,e)}F("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?e+" is outside of buffer bounds":"Attempt to access memory outside buffer bounds"},RangeError),F("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type `+typeof t},TypeError),F("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=U(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=U(o)),o+="n"),n+=` It must be ${t}. Received `+o},RangeError);let W=/[^+/0-9A-Za-z-_]/g;function V(e,t){let r;t=t||1/0;var n=e.length;let o=null;var i=[];for(let a=0;a<n;++a){if(55295<(r=e.charCodeAt(a))&&r<57344){if(!o){if(56319<r){-1<(t-=3)&&i.push(239,191,189);continue}if(a+1===n){-1<(t-=3)&&i.push(239,191,189);continue}o=r;continue}if(r<56320){-1<(t-=3)&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&-1<(t-=3)&&i.push(239,191,189);if(o=null,r<128){if(--t<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function G(e){return n.toByteArray((e=>{if((e=(e=e.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e})(e))}function Y(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function K(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function J(e){return e!=e}let Z=(()=>{var e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){var n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o]}return t})();function X(e){return"undefined"==typeof BigInt?Q:e}function Q(){throw new Error("BigInt not supported")}},645:(e,t)=>{t.read=function(e,t,r,n,o){var i,a,s=8*o-n-1,l=(1<<s)-1,c=l>>1,p=-7,u=r?o-1:0,d=r?-1:1,o=e[t+u];for(u+=d,i=o&(1<<-p)-1,o>>=-p,p+=s;0<p;i=256*i+e[t+u],u+=d,p-=8);for(a=i&(1<<-p)-1,i>>=-p,p+=n;0<p;a=256*a+e[t+u],u+=d,p-=8);if(0===i)i=1-c;else{if(i===l)return a?NaN:1/0*(o?-1:1);a+=Math.pow(2,n),i-=c}return(o?-1:1)*a*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var a,s,c=8*i-o-1,p=(1<<c)-1,u=p>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:i-1,f=n?1:-1,i=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=p):(a=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-a))<1&&(a--,n*=2),2<=(t+=1<=a+u?d/n:d*Math.pow(2,1-u))*n&&(a++,n/=2),p<=a+u?(s=0,a=p):1<=a+u?(s=(t*n-1)*Math.pow(2,o),a+=u):(s=t*Math.pow(2,u-1)*Math.pow(2,o),a=0));8<=o;e[r+h]=255&s,h+=f,s/=256,o-=8);for(a=a<<o|s,c+=o;0<c;e[r+h]=255&a,h+=f,a/=256,c-=8);e[r+h-f]|=128*i}},874:()=>{var e=Prism,t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=n.variable[1].inside,a=0;a<o.length;a++)i[o[a]]=e.languages.bash[o[a]];e.languages.shell=e.languages.bash},16:()=>{function t(e,t){return e.replace(/<<(\d+)>>/g,function(e,r){return"(?:"+t[+r]+")"})}function r(e,r,n){return RegExp(t(e,r),n||"")}function n(e,t){for(var r=0;r<t;r++)e=e.replace(/<<self>>/g,function(){return"(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}function B(t,n){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[n,I]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}var e,o,i,a,s,c,p,m,y,v,b,x,$,A,I;e=Prism,o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",a="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",s="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield",c=l(i="class enum interface record struct"),p=RegExp(l(o+" "+i+" "+a+" "+s)),a=l(i+" "+a+" "+s),o=l(o+" "+i+" "+s),i=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),s=n(/\((?:[^()]|<<self>>)*\)/.source,2),y=t(/<<0>>(?:\s*<<1>>)?/.source,[m=/@?\b[A-Za-z_]\w*\b/.source,i]),a=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[a,y]),b=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[a,v=/\[\s*(?:,\s*)*\]/.source]),x=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[i,s,v]),x=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[x]),x=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[x,a,v]),v={keyword:p,punctuation:/[<>()?,.:[\]]/},$=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,A=/"(?:\\.|[^\\"\r\n])*"/.source,e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[A]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[a]),lookbehind:!0,inside:v},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[m,x]),lookbehind:!0,inside:v},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[m]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[c,y]),lookbehind:!0,inside:v},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[a]),lookbehind:!0,inside:v},{pattern:r(/(\bwhere\s+)<<0>>/.source,[m]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[b]),lookbehind:!0,inside:v},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[x,o,m]),inside:v}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[m]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[m]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[s]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[x,a]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[x]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[m,i]),inside:{function:r(/^<<0>>/.source,[m]),generic:{pattern:RegExp(i),alias:"class-name",inside:v}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[c,y,m,x,p.source,s,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[y,s]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:p,"class-name":{pattern:RegExp(x),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}}),o=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[b=A+"|"+$]),i=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[o]),2),c=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,m=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[a,i]),e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[c,m]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[c]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[i]),inside:e.languages.csharp},"class-name":{pattern:RegExp(a),inside:{punctuation:/\./}},punctuation:/[:,]/}}}),I=/:[^}\r\n]+/.source,y=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[o]),2),s=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[y,I]),p=n(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[b]),2),x=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[p,I]),e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[s]),lookbehind:!0,greedy:!0,inside:B(s,y)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[x]),lookbehind:!0,greedy:!0,inside:B(x,p)}],char:{pattern:RegExp($),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp},251:()=>{var e,t;e=Prism,t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,(t=e.languages.markup)&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},57:()=>{var e=Prism;function t(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:t(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:t(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:t(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:t(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var s,r,l,n=e.languages,o={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css,"text/plain":n.plain},i={"application/json":!0,"application/xml":!0};for(s in o)o[s]&&(r=r||{},l=i[s]?(e=>{var t=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-]))"})(s):s,r[s.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:o[s]});r&&e.languages.insertBefore("http","header",r)},503:()=>{var e,t,r,n;e=Prism,t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,r=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,n={pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}},e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[n,{pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:n.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+r+/[A-Z]\w*\b/.source),lookbehind:!0,inside:n.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":n,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+r+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:n.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+r+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:n.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{function a(e,t){t=(t||"").replace(/m/g,"")+"m";var r=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return e});return RegExp(r,t)}var e,t,r,n,o,i;e=Prism,n="(?:"+(r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/).source+"(?:[ \t]+"+(t=/[*&][^\s[\]{},]+/).source+")?|"+t.source+"(?:[ \t]+"+r.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source,e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(i),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml},660:(e,t,r)=>{var n=(e=>{var h,t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,n={},o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function e(t,r){var n,i;switch(r=r||{},o.util.type(t)){case"Object":if(i=o.util.objId(t),r[i])return r[i];for(var a in n={},r[i]=n,t)t.hasOwnProperty(a)&&(n[a]=e(t[a],r));return n;case"Array":return i=o.util.objId(t),r[i]||(n=[],r[i]=n,t.forEach(function(t,o){n[o]=e(t,r)}),n);default:return t}},getLanguage:function(e){for(;e;){var r=t.exec(e.className);if(r)return r[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,r){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+r)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var r,t=document.getElementsByTagName("script");for(r in t)if(t[r].src==e)return t[r]}return null}},isActive:function(e,t,r){for(var n="no-"+t;e;){var o=e.classList;if(o.contains(t))return!0;if(o.contains(n))return!1;e=e.parentElement}return!!r}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var n,r=o.util.clone(o.languages[e]);for(n in t)r[n]=t[n];return r},insertBefore:function(e,t,r,n){var s,i=(n=n||o.languages)[e],a={};for(s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in r)r.hasOwnProperty(l)&&(a[l]=r[l]);r.hasOwnProperty(s)||(a[s]=i[s])}var c=n[e];return n[e]=a,o.languages.DFS(o.languages,function(t,r){r===c&&t!=e&&(this[t]=a)}),a},DFS:function e(t,r,n,i){i=i||{};var s,l,c,a=o.util.objId;for(s in t)t.hasOwnProperty(s)&&(r.call(t,s,t[s],n||s),l=t[s],"Object"!==(c=o.util.type(l))||i[a(l)]?"Array"!==c||i[a(l)]||(i[a(l)]=!0,e(l,r,s,i)):(i[a(l)]=!0,e(l,r,null,i)))}},plugins:{},highlightAll:function(e,t){o.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var n={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),o.hooks.run("before-all-elements-highlight",n);for(var i,a=0;i=n.elements[a++];)o.highlightElement(i,!0===t,n.callback)},highlightElement:function(t,r,n){var i=o.util.getLanguage(t),a=o.languages[i],s=(o.util.setLanguage(t,i),t.parentElement),l=(s&&"pre"===s.nodeName.toLowerCase()&&o.util.setLanguage(s,i),{element:t,language:i,grammar:a,code:t.textContent});function c(e){l.highlightedCode=e,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),n&&n.call(l.element)}o.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),l.code?(o.hooks.run("before-highlight",l),l.grammar?r&&e.Worker?((i=new Worker(o.filename)).onmessage=function(e){c(e.data)},i.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))):c(o.highlight(l.code,l.grammar,l.language)):c(o.util.encode(l.code))):(o.hooks.run("complete",l),n&&n.call(l.element))},highlight:function(e,t,r){e={code:e,grammar:t,language:r};if(o.hooks.run("before-tokenize",e),e.grammar)return e.tokens=o.tokenize(e.code,e.grammar),o.hooks.run("after-tokenize",e),i.stringify(o.util.encode(e.tokens),e.language);throw new Error('The language "'+e.language+'" has no grammar.')},tokenize:function(e,t){var r=t.rest;if(r){for(var n in r)t[n]=r[n];delete t.rest}var o=new l;return c(o,o.head,e),s(e,o,t,o.head,0),(e=>{for(var t=[],r=e.head.next;r!==e.tail;)t.push(r.value),r=r.next;return t})(o)},hooks:{all:{},add:function(e,t){var r=o.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=o.hooks.all[e];if(r&&r.length)for(var n,i=0;n=r[i++];)n(t)}},Token:i};function i(e,t,r,n){this.type=e,this.content=t,this.alias=r,this.length=0|(n||"").length}function a(e,t,r,n){e.lastIndex=t;t=e.exec(r);return t&&n&&t[1]&&(e=t[1].length,t.index+=e,t[0]=t[0].slice(e)),t}function s(e,t,r,n,l,u){for(var d in r)if(r.hasOwnProperty(d)&&r[d])for(var h=r[d],h=Array.isArray(h)?h:[h],f=0;f<h.length;++f){if(u&&u.cause==d+","+f)return;var x,m=h[f],y=m.inside,g=!!m.lookbehind,v=!!m.greedy,b=m.alias;v&&!m.pattern.global&&(x=m.pattern.toString().match(/[imsuy]*$/)[0],m.pattern=RegExp(m.pattern.source,x+"g"));for(var w=m.pattern||m,k=n.next,S=l;k!==t.tail&&!(u&&S>=u.reach);S+=k.value.length,k=k.next){var $=k.value;if(t.length>e.length)return;if(!($ instanceof i)){var A,E=1;if(v){if(!(A=a(w,S,e,g))||A.index>=e.length)break;var O=A.index,T=A.index+A[0].length,_=S;for(_+=k.value.length;_<=O;)_+=(k=k.next).value.length;if(S=_-=k.value.length,k.value instanceof i)continue;for(var C=k;C!==t.tail&&(_<T||"string"==typeof C.value);C=C.next)E++,_+=C.value.length;E--,$=e.slice(S,_),A.index-=S}else if(!(A=a(w,0,$,g)))continue;var O=A.index,j=A[0],I=$.slice(0,O),P=$.slice(O+j.length),$=S+$.length,L=(u&&$>u.reach&&(u.reach=$),k.prev);I&&(L=c(t,L,I),S+=I.length),((e,t,r)=>{for(var n=t.next,o=0;o<r&&n!==e.tail;o++)n=n.next;(t.next=n).prev=t,e.length-=o})(t,L,E),k=c(t,L,new i(d,y?o.tokenize(j,y):j,b,j)),P&&c(t,k,P),1<E&&(s(e,t,r,k.prev,S,I={cause:d+","+f,reach:$}),u)&&I.reach>u.reach&&(u.reach=I.reach)}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,r){var n=t.next,r={value:r,prev:t,next:n};return n.prev=t.next=r,e.length++,r}return(e.Prism=o,i.stringify=function e(t,r){if("string"==typeof t)return t;var n;if(Array.isArray(t))return n="",t.forEach(function(t){n+=e(t,r)}),n;var l,i={type:t.type,content:e(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},t=t.alias,s=(t&&(Array.isArray(t)?Array.prototype.push.apply(i.classes,t):i.classes.push(t)),o.hooks.run("wrap",i),"");for(l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},e.document)?((n=o.util.currentScript())&&(o.filename=n.src,n.hasAttribute("data-manual"))&&(o.manual=!0),o.manual||("loading"===(h=document.readyState)||"interactive"===h&&n&&n.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16))):e.addEventListener&&!o.disableWorkerMessageHandler&&e.addEventListener("message",function(t){var t=JSON.parse(t.data),n=t.language,a=t.immediateClose;e.postMessage(o.highlight(t.code,o.languages[n],n)),a&&e.close()},!1),o;function d(){o.manual||o.highlightAll()}})("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==r.g&&(r.g.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={},r=(r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}}),t=(r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]},{});t[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",t)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(e=>{var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,(t=e.languages.markup)&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(()=>{var e,t,r,o;void 0!==n&&"undefined"!=typeof document&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',n.hooks.add("before-highlightall",function(e){e.selector+=", "+r}),n.hooks.add("before-sanity-check",function(o){var a,s,c,i=o.element;i.matches(r)&&(o.code="",i.setAttribute(t,"loading"),(a=i.appendChild(document.createElement("CODE"))).textContent="Loading…",s=i.getAttribute("data-src"),"none"===(o=o.language)&&(c=(/\.(\w+)$/.exec(s)||[,"none"])[1],o=e[c]||c),n.util.setLanguage(a,o),n.util.setLanguage(i,o),(c=n.plugins.autoloader)&&c.loadLanguages(o),((e,t,r)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&(n.status<400&&n.responseText?t(n.responseText):400<=n.status?r("✖ Error "+n.status+" while fetching file: "+n.statusText):r("✖ Error: File does not exist or is empty"))},n.send(null)})(s,function(e){i.setAttribute(t,"loaded");var o,s,r=(e=>{var r,n;if(e=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||""))return r=Number(e[1]),n=e[2],e=e[3],n?e?[r,Number(e)]:[r,void 0]:[r,r]})(i.getAttribute("data-range"));r&&(o=e.split(/\r\n?|\n/g),s=r[0],r=null==r[1]?o.length:r[1],s<0&&(s+=o.length),s=Math.max(0,Math.min(s-1,o.length)),r<0&&(r+=o.length),r=Math.max(0,Math.min(r,o.length)),e=o.slice(s,r).join("\n"),i.hasAttribute("data-start")||i.setAttribute("data-start",String(s+1))),a.textContent=e,n.highlightElement(a)},function(e){i.setAttribute(t,"failed"),a.textContent=e}))}),o=!(n.plugins.fileHighlight={highlight:function(e){for(var t,o=(e||document).querySelectorAll(r),i=0;t=o[i++];)n.highlightElement(t)}}),n.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)})})()}},n={};function o(e){var t=n[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}t=n[e]={exports:{}};try{var a={id:e,module:t,factory:r[e],require:o};o.i.forEach(function(e){e(a)}),t=a.module,a.factory.call(t.exports,t,t.exports,a.require)}catch(e){throw t.error=e}return t.exports}o.m=r,o.c=n,o.i=[],o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"9cfd848bcce7d0ae5b1a",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="rapidoc:",o.l=(r,n,i,a)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var u=c[p];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var n=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach(e=>e(n)),t)return t(n)},h=setTimeout(n.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=n.bind(null,s.onerror),s.onload=n.bind(null,s.onload),l&&document.head.appendChild(s)}},(()=>{var e,t,r,n={},i=o.c,a=[],s=[],l="idle",c=0,p=[];function u(e){l=e;for(var t=[],r=0;r<s.length;r++)t[r]=s[r].call(null,e);return Promise.all(t)}function d(){0==--c&&u("ready").then(function(){if(0===c){var e=p;p=[];for(var t=0;t<e.length;t++)e[t]()}})}function h(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return u("check").then(o.hmrM).then(function(r){return r?u("prepare").then(function(){var n=[];return t=[],Promise.all(Object.keys(o.hmrC).reduce(function(e,i){return o.hmrC[i](r.c,r.r,r.m,e,t,n),e},[])).then(function(){return t=function(){return e?m(e):u("ready").then(function(){return n})},0===c?t():new Promise(function(e){p.push(function(){e(t())})});var t})}):u(y()?"ready":"idle").then(function(){return null})})}function f(e){return"ready"!==l?Promise.resolve().then(function(){throw new Error("apply() is only allowed in ready status (state: "+l+")")}):m(e)}function m(e){e=e||{},y();var n=t.map(function(t){return t(e)}),o=(t=void 0,n.map(function(e){return e.error}).filter(Boolean));if(0<o.length)return u("abort").then(function(){throw o[0]});var i=u("dispose");n.forEach(function(e){e.dispose&&e.dispose()});function l(e){a=a||e}var a,s=u("apply"),c=[];return n.forEach(function(e){if(e.apply){var t=e.apply(l);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}}),Promise.all([i,s]).then(function(){return a?u("fail").then(function(){throw a}):r?m(e).then(function(e){return c.forEach(function(t){e.indexOf(t)<0&&e.push(t)}),e}):u("idle").then(function(){return c})})}function y(){return r&&(t=t||[],Object.keys(o.hmrI).forEach(function(e){r.forEach(function(r){o.hmrI[e](r,t)})}),r=void 0,1)}o.hmrD=n,o.i.push(function(p){var m,y,g,v,b=p.module,x=((t,r)=>{var p,n=i[r];if(!n)return t;function o(o){var s;return n.hot.active?(i[o]?-1===(s=i[o].parents).indexOf(r)&&s.push(r):(a=[r],e=o),-1===n.children.indexOf(o)&&n.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+r),a=[]),t(o)}for(p in t)Object.prototype.hasOwnProperty.call(t,p)&&"e"!==p&&Object.defineProperty(o,p,(e=>({configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}))(p));return o.e=function(e){return(e=>{switch(l){case"ready":u("prepare");case"prepare":return c++,e.then(d,d),e;default:return e}})(t.e(e))},o})(p.require,p.id);b.hot=(y=b,v={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==(m=p.id),_requireSelf:function(){a=y.parents.slice(),e=g?void 0:m,o(m)},active:!0,accept:function(e,t,r){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)v._acceptedDependencies[e[n]]=t||function(){},v._acceptedErrorHandlers[e[n]]=r;else v._acceptedDependencies[e]=t||function(){},v._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)v._declinedDependencies[e[t]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){e=v._disposeHandlers.indexOf(e);0<=e&&v._disposeHandlers.splice(e,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":t=[],Object.keys(o.hmrI).forEach(function(e){o.hmrI[e](m,t)}),u("ready");break;case"ready":Object.keys(o.hmrI).forEach(function(e){o.hmrI[e](m,t)});break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:h,apply:f,status:function(e){if(!e)return l;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){e=s.indexOf(e);0<=e&&s.splice(e,1)},data:n[m]},e=void 0,v),b.parents=a,b.children=[],a=[],p.require=x}),o.hmrC={},o.hmrI={}})(),o.p="",(()=>{var e,t,r,n,i,a=o.hmrS_jsonp=o.hmrS_jsonp||{179:0},s={};function l(t,r){return e=r,new Promise((e,r)=>{s[t]=e;var e=o.p+o.hu(t),i=new Error;o.l(e,e=>{var n;s[t]&&(s[t]=void 0,n=e&&("load"===e.type?"missing":e.type),e=e&&e.target&&e.target.src,i.message="Loading hot update chunk "+t+" failed.\n("+n+": "+e+")",i.name="ChunkLoadError",i.type=n,i.request=e,r(i))})})}function c(e){function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}o.f&&delete o.f.jsonpHmr,t=void 0;function d(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")}var h,c={},p=[],u={};for(h in r)if(o.o(r,h)){var f,m=r[h],y=!1,g=!1,v=!1,b="";switch((f=m?(e=>{for(var t=[e],r={},n=t.map(function(e){return{chain:[e],id:e}});0<n.length;){var i=n.pop(),a=i.id,s=i.chain,c=o.c[a];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var p=0;p<c.parents.length;p++){var u=c.parents[p],d=o.c[u];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([u]),moduleId:a,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[a]?(r[u]||(r[u]=[]),l(r[u],[a])):(delete r[u],t.push(u),n.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}})(h):{type:"disposed",moduleId:h}).chain&&(b="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(y=new Error("Aborted because of self decline: "+f.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(y=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(f),e.ignoreUnaccepted||(y=new Error("Aborted because "+h+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(f),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(f),v=!0;break;default:throw new Error("Unexception type "+f.type)}if(y)return{error:y};if(g)for(h in u[h]=m,l(p,f.outdatedModules),f.outdatedDependencies)o.o(f.outdatedDependencies,h)&&(c[h]||(c[h]=[]),l(c[h],f.outdatedDependencies[h]));v&&(l(p,[f.moduleId]),u[h]=d)}r=void 0;for(var x,w=[],k=0;k<p.length;k++){var S=p[k],$=o.c[S];$&&($.hot._selfAccepted||$.hot._main)&&u[S]!==d&&!$.hot._selfInvalidated&&w.push({module:S,require:$.hot._requireSelf,errorHandler:$.hot._selfAccepted})}return{dispose:function(){var e;n.forEach(function(e){delete a[e]}),n=void 0;for(var t,h,r=p.slice();0<r.length;){var i=r.pop(),s=o.c[i];if(s){var l={},u=s.hot._disposeHandlers;for(k=0;k<u.length;k++)u[k].call(null,l);for(o.hmrD[i]=l,s.hot.active=!1,delete o.c[i],delete c[i],k=0;k<s.children.length;k++){var d=o.c[s.children[k]];d&&0<=(e=d.parents.indexOf(i))&&d.parents.splice(e,1)}}}for(h in c)if(o.o(c,h)&&(s=o.c[h]))for(x=c[h],k=0;k<x.length;k++)t=x[k],0<=(e=s.children.indexOf(t))&&s.children.splice(e,1)},apply:function(t){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var a,n=0;n<i.length;n++)i[n](o);for(a in c)if(o.o(c,a)){var s=o.c[a];if(s){x=c[a];for(var l=[],d=[],h=[],f=0;f<x.length;f++){var m=x[f],y=s.hot._acceptedDependencies[m],g=s.hot._acceptedErrorHandlers[m];y&&-1===l.indexOf(y)&&(l.push(y),d.push(g),h.push(m))}for(var v=0;v<l.length;v++)try{l[v].call(null,x)}catch(r){if("function"==typeof d[v])try{d[v](r,{moduleId:a,dependencyId:h[v]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:h[v],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:a,dependencyId:h[v],error:r}),e.ignoreErrored||t(r)}}}for(var b=0;b<w.length;b++){var k=w[b],S=k.module;try{k.require(S)}catch(r){if("function"==typeof k.errorHandler)try{k.errorHandler(r,{moduleId:S,module:o.c[S]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:S,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:S,error:r}),e.ignoreErrored||t(r)}}return p}}}self.webpackHotUpdaterapidoc=(t,n,a)=>{for(var l in n)o.o(n,l)&&(r[l]=n[l],e)&&e.push(l);a&&i.push(a),s[t]&&(s[t](),s[t]=void 0)},o.hmrI.jsonp=function(e,t){r||(r={},i=[],n=[],t.push(c)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(e,s,p,u,d,h){d.push(c),t={},n=s,r=p.reduce(function(e,t){return e[t]=!1,e},{}),i=[],e.forEach(function(e){o.o(a,e)&&void 0!==a[e]?(u.push(l(e,h)),t[e]=!0):t[e]=!1}),o.f&&(o.f.jsonpHmr=function(e,r){t&&o.o(t,e)&&!t[e]&&(r.push(l(e)),t[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then(e=>{if(404!==e.status){if(e.ok)return e.json();throw new Error("Failed to fetch update manifest "+e.statusText)}})}})(),o(448)})()},,function(e,t,r){r.r(t);function n(){var e=this.$createElement;return(e=this._self._c||e)("div",[e("rapi-doc",{ref:"api",style:{height:this.height,width:"100%"},attrs:{id:"apiDoc","render-style":"read","allow-spec-url-load":"false","allow-spec-file-load":"false","allow-authentication":"true","allow-server-selection":"false","primary-color":"#656DE6","heading-text":this.headingText}}),this._v(" "),e("div",{staticClass:"pb-api-doc-new-window"},[e("a",{attrs:{href:this.windowHref,target:"_blank"}},[e("i",{staticClass:"iconfont icon-desktop"}),this._v("\n            新窗口打开\n        ")])])],1)}n._withStripped=!0;var o=r(17).a,i=r(14),i=r.n(i),s=r(57),i=(i()(s.a,{insert:"head",singleton:!1}),s.a.locals,r(1)),s=Object(i.a)(o,n,[],!1,null,null,null);s.options.__file="src/pages/ApiDoc.vue",t.default=s.exports}]);