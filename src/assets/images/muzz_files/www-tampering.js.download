(function(){'use strict';function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var p=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function q(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var r=q(this);function t(a,b){if(b)a:{var c=r;a=a.split(".");for(var e=0;e<a.length-1;e++){var h=a[e];if(!(h in c))break a;c=c[h]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&b!=null&&p(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(l){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(e+(l||"")+"_"+h++,l)}
function c(l,m){this.g=l;p(this,"description",{configurable:!0,writable:!0,value:m})}
if(a)return a;c.prototype.toString=function(){return this.g};
var e="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",h=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var e=r[b[c]];typeof e==="function"&&typeof e.prototype[a]!="function"&&p(e.prototype,a,{configurable:!0,writable:!0,value:function(){return u(n(this))}})}return a});
function u(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:n(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(d){this.g=(f+=Math.random()+1).toString();if(d){d=w(d);for(var g;!(g=d.next()).done;)g=g.value,this.set(g[0],g[1])}}
function c(){}
function e(d){var g=typeof d;return g==="object"&&d!==null||g==="function"}
function h(d){if(!y(d,m)){var g=new c;p(d,m,{value:g})}}
function l(d){var g=Object[d];g&&(Object[d]=function(k){if(k instanceof c)return k;Object.isExtensible(k)&&h(k);return g(k)})}
if(function(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),g=Object.seal({}),k=new a([[d,2],[g,3]]);if(k.get(d)!=2||k.get(g)!=3)return!1;k.delete(d);k.set(g,4);return!k.has(d)&&k.get(g)==4}catch(v){return!1}}())return a;
var m="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(d,g){if(!e(d))throw Error("Invalid WeakMap key");h(d);if(!y(d,m))throw Error("WeakMap key fail: "+d);d[m][this.g]=g;return this};
b.prototype.get=function(d){return e(d)&&y(d,m)?d[m][this.g]:void 0};
b.prototype.has=function(d){return e(d)&&y(d,m)&&y(d[m],this.g)};
b.prototype.delete=function(d){return e(d)&&y(d,m)&&y(d[m],this.g)?delete d[m][this.g]:!1};
return b});
t("Map",function(a){function b(){var f={};return f.previous=f.next=f.head=f}
function c(f,d){var g=f[1];return u(function(){if(g){for(;g.head!=f[1];)g=g.previous;for(;g.next!=g.head;)return g=g.next,{done:!1,value:d(g)};g=null}return{done:!0,value:void 0}})}
function e(f,d){var g=d&&typeof d;g=="object"||g=="function"?l.has(d)?g=l.get(d):(g=""+ ++m,l.set(d,g)):g="p_"+d;var k=f[0][g];if(k&&y(f[0],g))for(f=0;f<k.length;f++){var v=k[f];if(d!==d&&v.key!==v.key||d===v.key)return{id:g,list:k,index:f,h:v}}return{id:g,list:k,index:-1,h:void 0}}
function h(f){this[0]={};this[1]=b();this.size=0;if(f){f=w(f);for(var d;!(d=f.next()).done;)d=d.value,this.set(d[0],d[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var f=Object.seal({x:4}),d=new a(w([[f,"s"]]));if(d.get(f)!="s"||d.size!=1||d.get({x:4})||d.set({x:4},"t")!=d||d.size!=2)return!1;var g=d.entries(),k=g.next();if(k.done||k.value[0]!=f||k.value[1]!="s")return!1;k=g.next();return k.done||k.value[0].x!=4||k.value[1]!="t"||!g.next().done?!1:!0}catch(v){return!1}}())return a;
var l=new WeakMap;h.prototype.set=function(f,d){f=f===0?0:f;var g=e(this,f);g.list||(g.list=this[0][g.id]=[]);g.h?g.h.value=d:(g.h={next:this[1],previous:this[1].previous,head:this[1],key:f,value:d},g.list.push(g.h),this[1].previous.next=g.h,this[1].previous=g.h,this.size++);return this};
h.prototype.delete=function(f){f=e(this,f);return f.h&&f.list?(f.list.splice(f.index,1),f.list.length||delete this[0][f.id],f.h.previous.next=f.h.next,f.h.next.previous=f.h.previous,f.h.head=null,this.size--,!0):!1};
h.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
h.prototype.has=function(f){return!!e(this,f).h};
h.prototype.get=function(f){return(f=e(this,f).h)&&f.value};
h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};
h.prototype.keys=function(){return c(this,function(f){return f.key})};
h.prototype.values=function(){return c(this,function(f){return f.value})};
h.prototype.forEach=function(f,d){for(var g=this.entries(),k;!(k=g.next()).done;)k=k.value,f.call(d,k[1],k[0],this)};
h.prototype[Symbol.iterator]=h.prototype.entries;var m=0;return h});
t("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var e;!(e=c.next()).done;)this.add(e.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),e=new a(w([c]));if(!e.has(c)||e.size!=1||e.add(c)!=e||e.size!=1||e.add({x:4})!=e||e.size!=2)return!1;var h=e.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||l.value[0].x!=4||l.value[1]!=l.value[0]?!1:h.next().done}catch(m){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,e){var h=this;this.g.forEach(function(l){return c.call(e,l,l,h)})};
return b});
t("String.prototype.endsWith",function(a){return a?a:function(b,c){if(this==null)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var e=this+"";b+="";c===void 0&&(c=e.length);c=Math.max(0,Math.min(c|0,e.length));for(var h=b.length;h>0&&c>0;)if(e[--c]!=b[--h])return!1;return h<=0}});
function z(a,b){a instanceof String&&(a+="");var c=0,e=!1,h={next:function(){if(!e&&c<a.length){var l=c++;return{value:b(l,a[l]),done:!1}}e=!0;return{done:!0,value:void 0}}};
h[Symbol.iterator]=function(){return h};
return h}
t("Object.values",function(a){return a?a:function(b){var c=[],e;for(e in b)y(b,e)&&c.push(b[e]);return c}});
t("Array.prototype.values",function(a){return a?a:function(){return z(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var A=this||self;function B(a,b){a=a.split(".");var c=A;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||b===void 0?c[e]&&c[e]!==Object.prototype[e]?c=c[e]:c=c[e]={}:c[e]=b}
;var C,D;a:{for(var E=["CLOSURE_FLAGS"],F=A,G=0;G<E.length;G++)if(F=F[E[G]],F==null){D=null;break a}D=F}var H=D&&D[610401301];C=H!=null?H:!1;var I,J=A.navigator;I=J?J.userAgentData||null:null;function K(a){return C?I?I.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function L(a){var b;a:{if(b=A.navigator)if(b=b.userAgent)break a;b=""}return b.indexOf(a)!=-1}
;function M(){return C?!!I&&I.brands.length>0:!1}
function N(){return M()?K("Chromium"):(L("Chrome")||L("CriOS"))&&!(M()?0:L("Edge"))||L("Silk")}
;!L("Android")||N();N();L("Safari")&&(N()||(M()?0:L("Coast"))||(M()?0:L("Opera"))||(M()?0:L("Edge"))||(M()?K("Microsoft Edge"):L("Edg/"))||M()&&K("Opera"));Math.max.apply(Math,x(Object.values({B:1,v:2,u:4,F:8,D:16,C:32,i:64,H:128,s:256,o:512,A:1024,l:2048,G:4096,m:8192,j:16384})));var O=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P(a){return a?decodeURI(a):a}
;var Q=A.window,R,S,T=(Q==null?void 0:(R=Q.yt)==null?void 0:R.config_)||(Q==null?void 0:(S=Q.ytcfg)==null?void 0:S.data_)||{};B("yt.config_",T);var U=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),V=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),W=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),X=
Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),aa=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function ba(){return U.map(function(a){return ca(a)}).filter(function(a){return!!a})}
function ca(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(function(c,e){return c&&c[e]},window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function Y(a){var b=a.match(O)[1]||null;return aa.some(function(c){return b==c})}
function Z(a){var b=P(a.match(O)[3]||null);return!b||Y(a)?!0:V.some(function(c){return b==c})||X.some(function(c){return b.endsWith(c)})}
function da(a){if(!Y(a))return null;var b=P(a.match(O)[3]||null);return b?W.some(function(c){return b==c})?null:b:null}
function ea(){var a=new Set;[].concat(x(document.querySelectorAll("script"))).forEach(function(b){b.src&&!Z(b.src)&&a.add(b.src)});
[].concat(x(document.querySelectorAll("link[href]"))).forEach(function(b){b.rel=="alternate"||Z(b.href)||a.add(b.href)});
return[].concat(x(a)).sort()}
function fa(){var a=new Set;[].concat(x(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=da(b.src))&&a.add(b)});
return[].concat(x(a)).sort()}
;B("ytbin.polymer.shared.lib.tampering.info",function(){var a=ea(),b=ba(),c=fa(),e=[];c.length&&e.push("extensions",c);a.length&&e.push("suspiciousIncludes",a);b.length&&e.push("suspiciousApis",b);return e.length?e:null});}).call(this);
