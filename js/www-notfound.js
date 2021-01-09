(function(){var g=this;function h(a){return"string"==typeof a}
var aa=/^[\w+/_-]+[=]{0,2}$/,k=null;function l(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function n(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
var q="closure_uid_"+(1E9*Math.random()>>>0),ba=0;function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ca:r=da;return r.apply(null,arguments)}
function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function t(a,b){var c=a.split("."),d=g;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function fa(a,b){function c(){}
c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.w=function(a,c,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}}
;var ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(h(a))return h(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},u=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=h(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function v(a,b){this.c=a;this.f=b;this.b=0;this.a=null}
v.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};var w;a:{var x=g.navigator;if(x){var y=x.userAgent;if(y){w=y;break a}}w=""};function ia(a){g.setTimeout(function(){throw a;},0)}
var z;
function ja(){var a=g.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==w.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&
a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&-1==w.indexOf("Trident")&&-1==w.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.l;c.l=null;a()}};
return function(a){d.next={l:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){g.setTimeout(a,0)}}
;function A(){this.b=this.a=null}
var C=new v(function(){return new B},function(a){a.reset()});
A.prototype.add=function(a,b){var c=C.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
A.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function B(){this.next=this.b=this.a=null}
B.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
B.prototype.reset=function(){this.next=this.b=this.a=null};function ka(a){D||la();E||(D(),E=!0);F.add(a,void 0)}
var D;function la(){if(g.Promise&&g.Promise.resolve){var a=g.Promise.resolve(void 0);D=function(){a.then(G)}}else D=function(){var a=G,c;
!(c="function"!=p(g.setImmediate))&&(c=g.Window&&g.Window.prototype)&&(c=-1==w.indexOf("Edge")&&g.Window.prototype.setImmediate==g.setImmediate);c?(z||(z=ja()),z(a)):g.setImmediate(a)}}
var E=!1,F=new A;function G(){for(var a;a=F.remove();){try{a.a.call(a.b)}catch(c){ia(c)}var b=C;b.f(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}E=!1}
;function H(){this.c=this.c;this.f=this.f}
H.prototype.c=!1;H.prototype.dispose=function(){this.c||(this.c=!0,this.i())};
H.prototype.i=function(){if(this.f)for(;this.f.length;)this.f.shift()()};function I(){this.a="";this.c=J}
I.prototype.m=!0;I.prototype.b=function(){return this.a};
var J={};function K(){this.a="";this.c=L}
K.prototype.m=!0;K.prototype.b=function(){return this.a};
var ma=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,L={};function M(a){var b=new K;b.a=a;return b}
M("about:blank");function na(a,b){a.src=b instanceof I&&b.constructor===I&&b.c===J?b.a:"type_error:TrustedResourceUrl";var c;if(null===k){a:{if((c=g.document.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&aa.test(c))break a;c=null}k=c||""}if(c=k)a.nonce=c}
;function oa(a){pa();var b=new I;b.a=a;return b}
var pa=n;function N(a){H.call(this);this.o=1;this.g=[];this.h=0;this.a=[];this.b={};this.s=!!a}
fa(N,H);N.prototype.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.o;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.o=e+3;d.push(e);return e};
N.prototype.j=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.h)this.g.push(a),this.a[a+1]=n;else{if(c){var d=ha(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
N.prototype.u=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var m=c[e];qa(this.a[m+1],this.a[m+2],d)}else{this.h++;try{for(e=0,f=c.length;e<f;e++)m=c[e],this.a[m+1].apply(this.a[m+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.j(c)}}return 0!=e}return!1};
function qa(a,b,c){ka(function(){a.apply(b,c)})}
N.prototype.clear=function(a){if(a){var b=this.b[a];b&&(u(b,this.j,this),delete this.b[a])}else this.a.length=0,this.b={}};
N.prototype.i=function(){N.v.i.call(this);this.clear();this.g.length=0};var O=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",O);function P(a){var b=arguments;if(1<b.length)O[b[0]]=b[1];else{b=b[0];for(var c in b)O[c]=b[c]}}
function Q(a,b){return a in O?O[a]:b}
;function R(a){return a?a.dataset?a.dataset[S()]:a.getAttribute("data-loaded"):null}
var T={};function S(){return T.loaded||(T.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function ra(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){U(b)}}:a}
function U(a){var b=l("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),P("ERRORS",b))}
;function V(a){"function"==p(a)&&(a=ra(a));window.setTimeout(a,0)}
;var sa=l("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.j;N.prototype.publish=N.prototype.u;N.prototype.clear=N.prototype.clear;t("ytPubsubPubsubInstance",sa);var W=l("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",W);var X=l("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",X);var Y=l("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Y);
function ta(a,b){var c=Z();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){W[d]&&b.apply(window,c)};
try{Y[a]?f():V(f)}catch(m){U(m)}},void 0);
W[d]=!0;X[a]||(X[a]=[]);X[a].push(d)}}
function ua(a,b){var c=Z();c&&c.publish.apply(c,arguments)}
function va(a){var b=Z();if(b)if(b.clear(a),a)wa(a);else for(var c in X)wa(c)}
function Z(){return l("ytPubsubPubsubInstance")}
function wa(a){X[a]&&(a=X[a],u(a,function(a){W[a]&&delete W[a]}),a.length=0)}
;var xa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ya=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function za(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(xa,""),c=c.replace(ya,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Aa(a,b)}
function Aa(a,b){var c=Ba(a),d=document.getElementById(c),e=d&&R(d),f=d&&!e;e?b&&b():(b&&(ta(c,b),b[q]||(b[q]=++ba)),f||(d=Ca(a,c,function(){if(!R(d)){var a=d;a&&(a.dataset?a.dataset[S()]="true":a.setAttribute("data-loaded","true"));ua(c);V(ea(va,c))}})))}
function Ca(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
na(d,oa(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ba(a){var b=document.createElement("a");a instanceof K||a instanceof K||(a=a.m?a.b():String(a),ma.test(a)||(a="about:invalid#zClosurez"),a=M(a));b.href=a instanceof K&&a.constructor===K&&a.c===L?a.a:"type_error:SafeUrl";b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");for(var c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"js-"+a}
;t("_gel",function(a){var b=document;return h(a)?b.getElementById(a):a});
t("yt.setConfig",P);t("yt.config.set",P);t("yt.www.notfound.init",function(){var a=Q("SBOX_JS_URL",void 0);a&&za(a,function(){try{l("yt.www.masthead.searchbox.init")()}catch(b){throw b.message+=' SboxUrl: "'+a+'"',b;}})});}).call(this);
