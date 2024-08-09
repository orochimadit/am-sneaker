import{R as l,L as ne,c as Oe,g as Vt,u as Jt,r as Qe}from"./app.9014b251.js";function Wt(){return l.createElement(l.Fragment,null,l.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top shadow"},l.createElement("div",{className:"container"},l.createElement("header",{className:"d-flex flex-wrap align-items-center justify-content-center py-2"},l.createElement("div",{className:"bg-green p-2 rounded"},l.createElement(ne,{href:"/",className:"d-flex align-items-center text-white text-decoration-none"},l.createElement("img",{src:"/assets/images/logo.png",width:"30",alt:"Logo"}),l.createElement("h6",{className:"mb-0 ms-2 fs-6"},l.createElement("strong",null,"Ammshoes")," STORE")))))))}var Ct={exports:{}},ze={exports:{}},St=function(e,r){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(r,n)}},Xt=St,Ve=Object.prototype.toString,Je=function(t){return function(e){var r=Ve.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function ue(t){return t=t.toLowerCase(),function(r){return Je(r)===t}}var Kt=["http:","https:","file:"];function Yt(t){return t||"http:"}function We(t){return Array.isArray(t)}function ye(t){return typeof t>"u"}function Gt(t){return t!==null&&!ye(t)&&t.constructor!==null&&!ye(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Pt=ue("ArrayBuffer");function Qt(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Pt(t.buffer),e}function Zt(t){return typeof t=="string"}function er(t){return typeof t=="number"}function Tt(t){return t!==null&&typeof t=="object"}function Ee(t){if(Je(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var tr=ue("Date"),rr=ue("File"),nr=ue("Blob"),ar=ue("FileList");function Xe(t){return Ve.call(t)==="[object Function]"}function sr(t){return Tt(t)&&Xe(t.pipe)}function ir(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Ve.call(t)===e||Xe(t.toString)&&t.toString()===e)}var or=ue("URLSearchParams");function ur(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function lr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Ke(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),We(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function He(){var t={};function e(n,i){Ee(t[i])&&Ee(n)?t[i]=He(t[i],n):Ee(n)?t[i]=He({},n):We(n)?t[i]=n.slice():t[i]=n}for(var r=0,s=arguments.length;r<s;r++)Ke(arguments[r],e);return t}function cr(t,e,r){return Ke(e,function(n,i){r&&typeof n=="function"?t[i]=Xt(n,r):t[i]=n}),t}function fr(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function hr(t,e,r,s){t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function dr(t,e,r){var s,n,i,u={};e=e||{};do{for(s=Object.getOwnPropertyNames(t),n=s.length;n-- >0;)i=s[n],u[i]||(e[i]=t[i],u[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function mr(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var s=t.indexOf(e,r);return s!==-1&&s===r}function pr(t){if(!t)return null;var e=t.length;if(ye(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var vr=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),$={supportedProtocols:Kt,getProtocol:Yt,isArray:We,isArrayBuffer:Pt,isBuffer:Gt,isFormData:ir,isArrayBufferView:Qt,isString:Zt,isNumber:er,isObject:Tt,isPlainObject:Ee,isUndefined:ye,isDate:tr,isFile:rr,isBlob:nr,isFunction:Xe,isStream:sr,isURLSearchParams:or,isStandardBrowserEnv:lr,forEach:Ke,merge:He,extend:cr,trim:ur,stripBOM:fr,inherits:hr,toFlatObject:dr,kindOf:Je,kindOfTest:ue,endsWith:mr,toArray:pr,isTypedArray:vr,isFileList:ar},le=$;function Ze(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var qt=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(le.isURLSearchParams(r))n=r.toString();else{var i=[];le.forEach(r,function(p,E){p===null||typeof p>"u"||(le.isArray(p)?E=E+"[]":p=[p],le.forEach(p,function(R){le.isDate(R)?R=R.toISOString():le.isObject(R)&&(R=JSON.stringify(R)),i.push(Ze(E)+"="+Ze(R))}))}),n=i.join("&")}if(n){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Er=$;function we(){this.handlers=[]}we.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};we.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};we.prototype.forEach=function(e){Er.forEach(this.handlers,function(s){s!==null&&e(s)})};var br=we,yr=$,wr=function(e,r){yr.forEach(e,function(n,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[i])})},Ut=$;function he(t,e,r,s,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),s&&(this.request=s),n&&(this.response=n)}Ut.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Lt=he.prototype,Dt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Dt[t]={value:t}});Object.defineProperties(he,Dt);Object.defineProperty(Lt,"isAxiosError",{value:!0});he.from=function(t,e,r,s,n,i){var u=Object.create(Lt);return Ut.toFlatObject(t,u,function(p){return p!==Error.prototype}),he.call(u,t.message,e,r,s,n),u.name=t.name,i&&Object.assign(u,i),u};var me=he,_t={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Z=$;function xr(t,e){e=e||new FormData;var r=[];function s(i){return i===null?"":Z.isDate(i)?i.toISOString():Z.isArrayBuffer(i)||Z.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,u){if(Z.isPlainObject(i)||Z.isArray(i)){if(r.indexOf(i)!==-1)throw Error("Circular reference detected in "+u);r.push(i),Z.forEach(i,function(p,E){if(!Z.isUndefined(p)){var w=u?u+"."+E:E,R;if(p&&!u&&typeof p=="object"){if(Z.endsWith(E,"{}"))p=JSON.stringify(p);else if(Z.endsWith(E,"[]")&&(R=Z.toArray(p))){R.forEach(function(f){!Z.isUndefined(f)&&e.append(w,s(f))});return}}n(p,w)}}),r.pop()}else e.append(u,s(i))}return n(t),e}var Ft=xr,Ae,et;function gr(){if(et)return Ae;et=1;var t=me;return Ae=function(r,s,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?r(n):s(new t("Request failed with status code "+n.status,[t.ERR_BAD_REQUEST,t.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},Ae}var Ce,tt;function Rr(){if(tt)return Ce;tt=1;var t=$;return Ce=t.isStandardBrowserEnv()?function(){return{write:function(s,n,i,u,c,p){var E=[];E.push(s+"="+encodeURIComponent(n)),t.isNumber(i)&&E.push("expires="+new Date(i).toGMTString()),t.isString(u)&&E.push("path="+u),t.isString(c)&&E.push("domain="+c),p===!0&&E.push("secure"),document.cookie=E.join("; ")},read:function(s){var n=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ce}var Nr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Or=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Ar=Nr,Cr=Or,jt=function(e,r){return e&&!Ar(r)?Cr(e,r):r},Se,rt;function Sr(){if(rt)return Se;rt=1;var t=$,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Se=function(s){var n={},i,u,c;return s&&t.forEach(s.split(`
`),function(E){if(c=E.indexOf(":"),i=t.trim(E.substr(0,c)).toLowerCase(),u=t.trim(E.substr(c+1)),i){if(n[i]&&e.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([u]):n[i]=n[i]?n[i]+", "+u:u}}),n},Se}var Pe,nt;function Pr(){if(nt)return Pe;nt=1;var t=$;return Pe=t.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),n;function i(u){var c=u;return r&&(s.setAttribute("href",c),c=s.href),s.setAttribute("href",c),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return n=i(window.location.href),function(c){var p=t.isString(c)?i(c):c;return p.protocol===n.protocol&&p.host===n.host}}():function(){return function(){return!0}}(),Pe}var oe={},ve={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */var at;function Tr(){return at||(at=1,function(t,e){(function(r){var s=e&&!e.nodeType&&e,n=t&&!t.nodeType&&t,i=typeof Oe=="object"&&Oe;(i.global===i||i.window===i||i.self===i)&&(r=i);var u,c=2147483647,p=36,E=1,w=26,R=38,f=700,q=72,z=128,D="-",W=/^xn--/,ee=/[^\x20-\x7E]/,X=/[\x2E\u3002\uFF0E\uFF61]/g,te={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ae=p-E,v=Math.floor,o=String.fromCharCode,x;function a(h){throw RangeError(te[h])}function L(h,b){for(var y=h.length,N=[];y--;)N[y]=b(h[y]);return N}function T(h,b){var y=h.split("@"),N="";y.length>1&&(N=y[0]+"@",h=y[1]),h=h.replace(X,".");var m=h.split("."),g=L(m,b).join(".");return N+g}function k(h){for(var b=[],y=0,N=h.length,m,g;y<N;)m=h.charCodeAt(y++),m>=55296&&m<=56319&&y<N?(g=h.charCodeAt(y++),(g&64512)==56320?b.push(((m&1023)<<10)+(g&1023)+65536):(b.push(m),y--)):b.push(m);return b}function F(h){return L(h,function(b){var y="";return b>65535&&(b-=65536,y+=o(b>>>10&1023|55296),b=56320|b&1023),y+=o(b),y}).join("")}function d(h){return h-48<10?h-22:h-65<26?h-65:h-97<26?h-97:p}function j(h,b){return h+22+75*(h<26)-((b!=0)<<5)}function C(h,b,y){var N=0;for(h=y?v(h/f):h>>1,h+=v(h/b);h>ae*w>>1;N+=p)h=v(h/ae);return v(N+(ae+1)*h/(h+R))}function G(h){var b=[],y=h.length,N,m=0,g=z,O=q,S,P,V,I,A,_,H,re,K;for(S=h.lastIndexOf(D),S<0&&(S=0),P=0;P<S;++P)h.charCodeAt(P)>=128&&a("not-basic"),b.push(h.charCodeAt(P));for(V=S>0?S+1:0;V<y;){for(I=m,A=1,_=p;V>=y&&a("invalid-input"),H=d(h.charCodeAt(V++)),(H>=p||H>v((c-m)/A))&&a("overflow"),m+=H*A,re=_<=O?E:_>=O+w?w:_-O,!(H<re);_+=p)K=p-re,A>v(c/K)&&a("overflow"),A*=K;N=b.length+1,O=C(m-I,N,I==0),v(m/N)>c-g&&a("overflow"),g+=v(m/N),m%=N,b.splice(m++,0,g)}return F(b)}function Q(h){var b,y,N,m,g,O,S,P,V,I,A,_=[],H,re,K,ie;for(h=k(h),H=h.length,b=z,y=0,g=q,O=0;O<H;++O)A=h[O],A<128&&_.push(o(A));for(N=m=_.length,m&&_.push(D);N<H;){for(S=c,O=0;O<H;++O)A=h[O],A>=b&&A<S&&(S=A);for(re=N+1,S-b>v((c-y)/re)&&a("overflow"),y+=(S-b)*re,b=S,O=0;O<H;++O)if(A=h[O],A<b&&++y>c&&a("overflow"),A==b){for(P=y,V=p;I=V<=g?E:V>=g+w?w:V-g,!(P<I);V+=p)ie=P-I,K=p-I,_.push(o(j(I+ie%K,0))),P=v(ie/K);_.push(o(j(P,0))),g=C(y,re,N==m),y=0,++N}++y,++b}return _.join("")}function M(h){return T(h,function(b){return W.test(b)?G(b.slice(4).toLowerCase()):b})}function U(h){return T(h,function(b){return ee.test(b)?"xn--"+Q(b):b})}if(u={version:"1.3.2",ucs2:{decode:k,encode:F},decode:G,encode:Q,toASCII:U,toUnicode:M},s&&n)if(t.exports==s)n.exports=u;else for(x in u)u.hasOwnProperty(x)&&(s[x]=u[x]);else r.punycode=u})(Oe)}(ve,ve.exports)),ve.exports}var Te,st;function qr(){return st||(st=1,Te={isString:function(t){return typeof t=="string"},isObject:function(t){return typeof t=="object"&&t!==null},isNull:function(t){return t===null},isNullOrUndefined:function(t){return t==null}}),Te}var ce={},qe,it;function Ur(){if(it)return qe;it=1;function t(e,r){return Object.prototype.hasOwnProperty.call(e,r)}return qe=function(e,r,s,n){r=r||"&",s=s||"=";var i={};if(typeof e!="string"||e.length===0)return i;var u=/\+/g;e=e.split(r);var c=1e3;n&&typeof n.maxKeys=="number"&&(c=n.maxKeys);var p=e.length;c>0&&p>c&&(p=c);for(var E=0;E<p;++E){var w=e[E].replace(u,"%20"),R=w.indexOf(s),f,q,z,D;R>=0?(f=w.substr(0,R),q=w.substr(R+1)):(f=w,q=""),z=decodeURIComponent(f),D=decodeURIComponent(q),t(i,z)?Array.isArray(i[z])?i[z].push(D):i[z]=[i[z],D]:i[z]=D}return i},qe}var Ue,ot;function Lr(){if(ot)return Ue;ot=1;var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};return Ue=function(e,r,s,n){return r=r||"&",s=s||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(i){var u=encodeURIComponent(t(i))+s;return Array.isArray(e[i])?e[i].map(function(c){return u+encodeURIComponent(t(c))}).join(r):u+encodeURIComponent(t(e[i]))}).join(r):n?encodeURIComponent(t(n))+s+encodeURIComponent(t(e)):""},Ue}var ut;function Dr(){return ut||(ut=1,ce.decode=ce.parse=Ur(),ce.encode=ce.stringify=Lr()),ce}var lt;function _r(){if(lt)return oe;lt=1;var t=Tr(),e=qr();oe.parse=X,oe.resolve=ae,oe.resolveObject=v,oe.format=te,oe.Url=r;function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var s=/^([a-z0-9.+-]+:)/i,n=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["<",">",'"',"`"," ","\r",`
`,"	"],c=["{","}","|","\\","^","`"].concat(u),p=["'"].concat(c),E=["%","/","?",";","#"].concat(p),w=["/","?","#"],R=255,f=/^[+a-z0-9A-Z_-]{0,63}$/,q=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,z={javascript:!0,"javascript:":!0},D={javascript:!0,"javascript:":!0},W={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},ee=Dr();function X(o,x,a){if(o&&e.isObject(o)&&o instanceof r)return o;var L=new r;return L.parse(o,x,a),L}r.prototype.parse=function(o,x,a){if(!e.isString(o))throw new TypeError("Parameter 'url' must be a string, not "+typeof o);var L=o.indexOf("?"),T=L!==-1&&L<o.indexOf("#")?"?":"#",k=o.split(T),F=/\\/g;k[0]=k[0].replace(F,"/"),o=k.join(T);var d=o;if(d=d.trim(),!a&&o.split("#").length===1){var j=i.exec(d);if(j)return this.path=d,this.href=d,this.pathname=j[1],j[2]?(this.search=j[2],x?this.query=ee.parse(this.search.substr(1)):this.query=this.search.substr(1)):x&&(this.search="",this.query={}),this}var C=s.exec(d);if(C){C=C[0];var G=C.toLowerCase();this.protocol=G,d=d.substr(C.length)}if(a||C||d.match(/^\/\/[^@\/]+@[^@\/]+/)){var Q=d.substr(0,2)==="//";Q&&!(C&&D[C])&&(d=d.substr(2),this.slashes=!0)}if(!D[C]&&(Q||C&&!W[C])){for(var M=-1,U=0;U<w.length;U++){var h=d.indexOf(w[U]);h!==-1&&(M===-1||h<M)&&(M=h)}var b,y;M===-1?y=d.lastIndexOf("@"):y=d.lastIndexOf("@",M),y!==-1&&(b=d.slice(0,y),d=d.slice(y+1),this.auth=decodeURIComponent(b)),M=-1;for(var U=0;U<E.length;U++){var h=d.indexOf(E[U]);h!==-1&&(M===-1||h<M)&&(M=h)}M===-1&&(M=d.length),this.host=d.slice(0,M),d=d.slice(M),this.parseHost(),this.hostname=this.hostname||"";var N=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!N)for(var m=this.hostname.split(/\./),U=0,g=m.length;U<g;U++){var O=m[U];if(!!O&&!O.match(f)){for(var S="",P=0,V=O.length;P<V;P++)O.charCodeAt(P)>127?S+="x":S+=O[P];if(!S.match(f)){var I=m.slice(0,U),A=m.slice(U+1),_=O.match(q);_&&(I.push(_[1]),A.unshift(_[2])),A.length&&(d="/"+A.join(".")+d),this.hostname=I.join(".");break}}}this.hostname.length>R?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=t.toASCII(this.hostname));var H=this.port?":"+this.port:"",re=this.hostname||"";this.host=re+H,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),d[0]!=="/"&&(d="/"+d))}if(!z[G])for(var U=0,g=p.length;U<g;U++){var K=p[U];if(d.indexOf(K)!==-1){var ie=encodeURIComponent(K);ie===K&&(ie=escape(K)),d=d.split(K).join(ie)}}var Ne=d.indexOf("#");Ne!==-1&&(this.hash=d.substr(Ne),d=d.slice(0,Ne));var pe=d.indexOf("?");if(pe!==-1?(this.search=d.substr(pe),this.query=d.substr(pe+1),x&&(this.query=ee.parse(this.query)),d=d.slice(0,pe)):x&&(this.search="",this.query={}),d&&(this.pathname=d),W[G]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var H=this.pathname||"",zt=this.search||"";this.path=H+zt}return this.href=this.format(),this};function te(o){return e.isString(o)&&(o=X(o)),o instanceof r?o.format():r.prototype.format.call(o)}r.prototype.format=function(){var o=this.auth||"";o&&(o=encodeURIComponent(o),o=o.replace(/%3A/i,":"),o+="@");var x=this.protocol||"",a=this.pathname||"",L=this.hash||"",T=!1,k="";this.host?T=o+this.host:this.hostname&&(T=o+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(T+=":"+this.port)),this.query&&e.isObject(this.query)&&Object.keys(this.query).length&&(k=ee.stringify(this.query));var F=this.search||k&&"?"+k||"";return x&&x.substr(-1)!==":"&&(x+=":"),this.slashes||(!x||W[x])&&T!==!1?(T="//"+(T||""),a&&a.charAt(0)!=="/"&&(a="/"+a)):T||(T=""),L&&L.charAt(0)!=="#"&&(L="#"+L),F&&F.charAt(0)!=="?"&&(F="?"+F),a=a.replace(/[?#]/g,function(d){return encodeURIComponent(d)}),F=F.replace("#","%23"),x+T+a+F+L};function ae(o,x){return X(o,!1,!0).resolve(x)}r.prototype.resolve=function(o){return this.resolveObject(X(o,!1,!0)).format()};function v(o,x){return o?X(o,!1,!0).resolveObject(x):x}return r.prototype.resolveObject=function(o){if(e.isString(o)){var x=new r;x.parse(o,!1,!0),o=x}for(var a=new r,L=Object.keys(this),T=0;T<L.length;T++){var k=L[T];a[k]=this[k]}if(a.hash=o.hash,o.href==="")return a.href=a.format(),a;if(o.slashes&&!o.protocol){for(var F=Object.keys(o),d=0;d<F.length;d++){var j=F[d];j!=="protocol"&&(a[j]=o[j])}return W[a.protocol]&&a.hostname&&!a.pathname&&(a.path=a.pathname="/"),a.href=a.format(),a}if(o.protocol&&o.protocol!==a.protocol){if(!W[o.protocol]){for(var C=Object.keys(o),G=0;G<C.length;G++){var Q=C[G];a[Q]=o[Q]}return a.href=a.format(),a}if(a.protocol=o.protocol,!o.host&&!D[o.protocol]){for(var g=(o.pathname||"").split("/");g.length&&!(o.host=g.shift()););o.host||(o.host=""),o.hostname||(o.hostname=""),g[0]!==""&&g.unshift(""),g.length<2&&g.unshift(""),a.pathname=g.join("/")}else a.pathname=o.pathname;if(a.search=o.search,a.query=o.query,a.host=o.host||"",a.auth=o.auth,a.hostname=o.hostname||o.host,a.port=o.port,a.pathname||a.search){var M=a.pathname||"",U=a.search||"";a.path=M+U}return a.slashes=a.slashes||o.slashes,a.href=a.format(),a}var h=a.pathname&&a.pathname.charAt(0)==="/",b=o.host||o.pathname&&o.pathname.charAt(0)==="/",y=b||h||a.host&&o.pathname,N=y,m=a.pathname&&a.pathname.split("/")||[],g=o.pathname&&o.pathname.split("/")||[],O=a.protocol&&!W[a.protocol];if(O&&(a.hostname="",a.port=null,a.host&&(m[0]===""?m[0]=a.host:m.unshift(a.host)),a.host="",o.protocol&&(o.hostname=null,o.port=null,o.host&&(g[0]===""?g[0]=o.host:g.unshift(o.host)),o.host=null),y=y&&(g[0]===""||m[0]==="")),b)a.host=o.host||o.host===""?o.host:a.host,a.hostname=o.hostname||o.hostname===""?o.hostname:a.hostname,a.search=o.search,a.query=o.query,m=g;else if(g.length)m||(m=[]),m.pop(),m=m.concat(g),a.search=o.search,a.query=o.query;else if(!e.isNullOrUndefined(o.search)){if(O){a.hostname=a.host=m.shift();var S=a.host&&a.host.indexOf("@")>0?a.host.split("@"):!1;S&&(a.auth=S.shift(),a.host=a.hostname=S.shift())}return a.search=o.search,a.query=o.query,(!e.isNull(a.pathname)||!e.isNull(a.search))&&(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=a.format(),a}if(!m.length)return a.pathname=null,a.search?a.path="/"+a.search:a.path=null,a.href=a.format(),a;for(var P=m.slice(-1)[0],V=(a.host||o.host||m.length>1)&&(P==="."||P==="..")||P==="",I=0,A=m.length;A>=0;A--)P=m[A],P==="."?m.splice(A,1):P===".."?(m.splice(A,1),I++):I&&(m.splice(A,1),I--);if(!y&&!N)for(;I--;I)m.unshift("..");y&&m[0]!==""&&(!m[0]||m[0].charAt(0)!=="/")&&m.unshift(""),V&&m.join("/").substr(-1)!=="/"&&m.push("");var _=m[0]===""||m[0]&&m[0].charAt(0)==="/";if(O){a.hostname=a.host=_?"":m.length?m.shift():"";var S=a.host&&a.host.indexOf("@")>0?a.host.split("@"):!1;S&&(a.auth=S.shift(),a.host=a.hostname=S.shift())}return y=y||a.host&&m.length,y&&!_&&m.unshift(""),m.length?a.pathname=m.join("/"):(a.pathname=null,a.path=null),(!e.isNull(a.pathname)||!e.isNull(a.search))&&(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.auth=o.auth||a.auth,a.slashes=a.slashes||o.slashes,a.href=a.format(),a},r.prototype.parseHost=function(){var o=this.host,x=n.exec(o);x&&(x=x[0],x!==":"&&(this.port=x.substr(1)),o=o.substr(0,o.length-x.length)),o&&(this.hostname=o)},oe}var Le,ct;function xe(){if(ct)return Le;ct=1;var t=me,e=$;function r(s){t.call(this,s==null?"canceled":s,t.ERR_CANCELED),this.name="CanceledError"}return e.inherits(r,t,{__CANCEL__:!0}),Le=r,Le}var De,ft;function ht(){if(ft)return De;ft=1;var t=$,e=gr(),r=Rr(),s=qt,n=jt,i=Sr(),u=Pr(),c=_r(),p=_t,E=me,w=xe();return De=function(f){return new Promise(function(z,D){var W=f.data,ee=f.headers,X=f.responseType,te;function ae(){f.cancelToken&&f.cancelToken.unsubscribe(te),f.signal&&f.signal.removeEventListener("abort",te)}var v=new XMLHttpRequest;if(f.auth){var o=f.auth.username||"",x=f.auth.password?unescape(encodeURIComponent(f.auth.password)):"";ee.Authorization="Basic "+btoa(o+":"+x)}var a=n(f.baseURL,f.url),L=c.parse(a),T=t.getProtocol(L.protocol);v.open(f.method.toUpperCase(),s(a,f.params,f.paramsSerializer),!0),v.timeout=f.timeout;function k(){if(!!v){var d="getAllResponseHeaders"in v?i(v.getAllResponseHeaders()):null,j=!X||X==="text"||X==="json"?v.responseText:v.response,C={data:j,status:v.status,statusText:v.statusText,headers:d,config:f,request:v};e(function(Q){z(Q),ae()},function(Q){D(Q),ae()},C),v=null}}if("onloadend"in v?v.onloadend=k:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(k)},v.onabort=function(){!v||(D(new E("Request aborted",E.ECONNABORTED,f,v)),v=null)},v.onerror=function(){D(new E("Network Error",E.ERR_NETWORK,f,v,v)),v=null},v.ontimeout=function(){var j=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded",C=f.transitional||p;f.timeoutErrorMessage&&(j=f.timeoutErrorMessage),D(new E(j,C.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,f,v)),v=null},t.isStandardBrowserEnv()){var F=(f.withCredentials||u(a))&&f.xsrfCookieName?r.read(f.xsrfCookieName):void 0;F&&(ee[f.xsrfHeaderName]=F)}if("setRequestHeader"in v&&t.forEach(ee,function(j,C){typeof W>"u"&&C.toLowerCase()==="content-type"?delete ee[C]:v.setRequestHeader(C,j)}),t.isUndefined(f.withCredentials)||(v.withCredentials=!!f.withCredentials),X&&X!=="json"&&(v.responseType=f.responseType),typeof f.onDownloadProgress=="function"&&v.addEventListener("progress",f.onDownloadProgress),typeof f.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",f.onUploadProgress),(f.cancelToken||f.signal)&&(te=function(d){!v||(D(!d||d&&d.type?new w:d),v.abort(),v=null)},f.cancelToken&&f.cancelToken.subscribe(te),f.signal&&(f.signal.aborted?te():f.signal.addEventListener("abort",te))),W||(W=null),L.path===null){D(new E("Malformed URL "+a,E.ERR_BAD_REQUEST,f));return}if(!t.supportedProtocols.includes(T)){D(new E("Unsupported protocol "+T,E.ERR_BAD_REQUEST,f));return}v.send(W)})},De}var _e,dt;function Fr(){return dt||(dt=1,_e=null),_e}var B=$,mt=wr,pt=me,jr=_t,Ir=Ft,Br={"Content-Type":"application/x-www-form-urlencoded"};function vt(t,e){!B.isUndefined(t)&&B.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Mr(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ht()),t}function $r(t,e,r){if(B.isString(t))try{return(e||JSON.parse)(t),B.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var ge={transitional:jr,adapter:Mr(),transformRequest:[function(e,r){if(mt(r,"Accept"),mt(r,"Content-Type"),B.isFormData(e)||B.isArrayBuffer(e)||B.isBuffer(e)||B.isStream(e)||B.isFile(e)||B.isBlob(e))return e;if(B.isArrayBufferView(e))return e.buffer;if(B.isURLSearchParams(e))return vt(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var s=B.isObject(e),n=r&&r["Content-Type"],i;if((i=B.isFileList(e))||s&&n==="multipart/form-data"){var u=this.env&&this.env.FormData;return Ir(i?{"files[]":e}:e,u&&new u)}else if(s||n==="application/json")return vt(r,"application/json"),$r(e);return e}],transformResponse:[function(e){var r=this.transitional||ge.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||n&&B.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(i)throw u.name==="SyntaxError"?pt.from(u,pt.ERR_BAD_RESPONSE,this,null,this.response):u}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Fr()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],function(e){ge.headers[e]={}});B.forEach(["post","put","patch"],function(e){ge.headers[e]=B.merge(Br)});var Ye=ge,kr=$,Hr=Ye,zr=function(e,r,s){var n=this||Hr;return kr.forEach(s,function(u){e=u.call(n,e,r)}),e},Fe,Et;function It(){return Et||(Et=1,Fe=function(e){return!!(e&&e.__CANCEL__)}),Fe}var bt=$,je=zr,Vr=It(),Jr=Ye,Wr=xe();function Ie(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Wr}var Xr=function(e){Ie(e),e.headers=e.headers||{},e.data=je.call(e,e.data,e.headers,e.transformRequest),e.headers=bt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),bt.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Jr.adapter;return r(e).then(function(n){return Ie(e),n.data=je.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Vr(n)||(Ie(e),n&&n.response&&(n.response.data=je.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},Y=$,Bt=function(e,r){r=r||{};var s={};function n(w,R){return Y.isPlainObject(w)&&Y.isPlainObject(R)?Y.merge(w,R):Y.isPlainObject(R)?Y.merge({},R):Y.isArray(R)?R.slice():R}function i(w){if(Y.isUndefined(r[w])){if(!Y.isUndefined(e[w]))return n(void 0,e[w])}else return n(e[w],r[w])}function u(w){if(!Y.isUndefined(r[w]))return n(void 0,r[w])}function c(w){if(Y.isUndefined(r[w])){if(!Y.isUndefined(e[w]))return n(void 0,e[w])}else return n(void 0,r[w])}function p(w){if(w in r)return n(e[w],r[w]);if(w in e)return n(void 0,e[w])}var E={url:u,method:u,data:u,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:p};return Y.forEach(Object.keys(e).concat(Object.keys(r)),function(R){var f=E[R]||i,q=f(R);Y.isUndefined(q)&&f!==p||(s[R]=q)}),s},Be,yt;function Mt(){return yt||(yt=1,Be={version:"0.27.0"}),Be}var Kr=Mt().version,se=me,Ge={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Ge[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var wt={};Ge.transitional=function(e,r,s){function n(i,u){return"[Axios v"+Kr+"] Transitional option '"+i+"'"+u+(s?". "+s:"")}return function(i,u,c){if(e===!1)throw new se(n(u," has been removed"+(r?" in "+r:"")),se.ERR_DEPRECATED);return r&&!wt[u]&&(wt[u]=!0,console.warn(n(u," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,u,c):!0}};function Yr(t,e,r){if(typeof t!="object")throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(t),n=s.length;n-- >0;){var i=s[n],u=e[i];if(u){var c=t[i],p=c===void 0||u(c,i,t);if(p!==!0)throw new se("option "+i+" must be "+p,se.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new se("Unknown option "+i,se.ERR_BAD_OPTION)}}var Gr={assertOptions:Yr,validators:Ge},$t=$,Qr=qt,xt=br,gt=Xr,Re=Bt,Zr=jt,kt=Gr,fe=kt.validators;function de(t){this.defaults=t,this.interceptors={request:new xt,response:new xt}}de.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=Re(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var s=r.transitional;s!==void 0&&kt.assertOptions(s,{silentJSONParsing:fe.transitional(fe.boolean),forcedJSONParsing:fe.transitional(fe.boolean),clarifyTimeoutError:fe.transitional(fe.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(q){typeof q.runWhen=="function"&&q.runWhen(r)===!1||(i=i&&q.synchronous,n.unshift(q.fulfilled,q.rejected))});var u=[];this.interceptors.response.forEach(function(q){u.push(q.fulfilled,q.rejected)});var c;if(!i){var p=[gt,void 0];for(Array.prototype.unshift.apply(p,n),p=p.concat(u),c=Promise.resolve(r);p.length;)c=c.then(p.shift(),p.shift());return c}for(var E=r;n.length;){var w=n.shift(),R=n.shift();try{E=w(E)}catch(f){R(f);break}}try{c=gt(E)}catch(f){return Promise.reject(f)}for(;u.length;)c=c.then(u.shift(),u.shift());return c};de.prototype.getUri=function(e){e=Re(this.defaults,e);var r=Zr(e.baseURL,e.url);return Qr(r,e.params,e.paramsSerializer)};$t.forEach(["delete","get","head","options"],function(e){de.prototype[e]=function(r,s){return this.request(Re(s||{},{method:e,url:r,data:(s||{}).data}))}});$t.forEach(["post","put","patch"],function(e){function r(s){return function(i,u,c){return this.request(Re(c||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:u}))}}de.prototype[e]=r(),de.prototype[e+"Form"]=r(!0)});var en=de,Me,Rt;function tn(){if(Rt)return Me;Rt=1;var t=xe();function e(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(u){s=u});var n=this;this.promise.then(function(i){if(!!n._listeners){var u,c=n._listeners.length;for(u=0;u<c;u++)n._listeners[u](i);n._listeners=null}}),this.promise.then=function(i){var u,c=new Promise(function(p){n.subscribe(p),u=p}).then(i);return c.cancel=function(){n.unsubscribe(u)},c},r(function(u){n.reason||(n.reason=new t(u),s(n.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},e.prototype.unsubscribe=function(s){if(!!this._listeners){var n=this._listeners.indexOf(s);n!==-1&&this._listeners.splice(n,1)}},e.source=function(){var s,n=new e(function(u){s=u});return{token:n,cancel:s}},Me=e,Me}var $e,Nt;function rn(){return Nt||(Nt=1,$e=function(e){return function(s){return e.apply(null,s)}}),$e}var ke,Ot;function nn(){if(Ot)return ke;Ot=1;var t=$;return ke=function(r){return t.isObject(r)&&r.isAxiosError===!0},ke}var At=$,an=St,be=en,sn=Bt,on=Ye;function Ht(t){var e=new be(t),r=an(be.prototype.request,e);return At.extend(r,be.prototype,e),At.extend(r,e),r.create=function(n){return Ht(sn(t,n))},r}var J=Ht(on);J.Axios=be;J.CanceledError=xe();J.CancelToken=tn();J.isCancel=It();J.VERSION=Mt().version;J.toFormData=Ft;J.AxiosError=me;J.Cancel=J.CanceledError;J.all=function(e){return Promise.all(e)};J.spread=rn();J.isAxiosError=nn();ze.exports=J;ze.exports.default=J;(function(t){t.exports=ze.exports})(Ct);const un=Vt(Ct.exports);function ln(){const{dataCarts:t}=Jt().props,[e,r]=Qe.exports.useState([]),[s,n]=Qe.exports.useState(!1),i=u=>{n(!0),r([]),un.post("/search",{q:u.target.value}).then(c=>{n(!1),r(c.data.products)})};return l.createElement(l.Fragment,null,l.createElement("nav",{className:"navbar navbar-dark bg-green shadow navbar-expand fixed-top p-2"},l.createElement("div",{className:"container"},l.createElement("ul",{className:"navbar-nav nav-justified justify-content-center w-100"},l.createElement("li",{className:"nav-item"},l.createElement(ne,{href:"/",className:"nav-link text-white fw-bold"},l.createElement("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-house",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}),l.createElement("path",{fillRule:"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"})),l.createElement("span",{className:"small d-block"},"Home"))),l.createElement("li",{className:"nav-item"},l.createElement(ne,{href:"#","data-bs-toggle":"modal","data-bs-target":"#search",className:"nav-link text-white fw-bold"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.2em",height:"1.2em",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16"},l.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})),l.createElement("span",{className:"small d-block"},"Search"))),l.createElement("li",{className:"nav-item dropup"},l.createElement(ne,{href:"/carts",className:"nav-link text-white fw-bold"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.2em",height:"1.2em",fill:"currentColor",className:"bi bi-cart",viewBox:"0 0 16 16"},l.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})),t?l.createElement("span",{className:"badge badge-warning rounded-pill shadow",id:"count-cart"},t.total):l.createElement("span",{className:"badge badge-warning rounded-pill shadow",id:"count-cart"},"0"),l.createElement("span",{className:"small d-block"},"Shopping Cart"))),l.createElement("li",{className:"nav-item dropup"},l.createElement(ne,{href:"/login",className:"nav-link text-white fw-bold"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.2em",height:"1.2em",fill:"currentColor",className:"bi bi-person-circle",viewBox:"0 0 16 16"},l.createElement("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),l.createElement("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})),l.createElement("span",{className:"small d-block"},"Account")))))),l.createElement("div",{className:"modal fade",id:"search",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.createElement("div",{className:"modal-dialog"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal-header"},l.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Search"),l.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.createElement("div",{className:"modal-body"},l.createElement("div",{className:"input-group"},l.createElement("input",{type:"text",className:"form-control",onChange:i,placeholder:"search product here..."}))),l.createElement("div",{className:"modal-body",style:{height:"300px",overflow:"auto"}},s&&l.createElement("div",{className:"justify-content-center mb-3 text-center"},l.createElement("div",{className:"spinner-border text-success",role:"status"},l.createElement("span",{className:"visually-hidden"},"Loading...")),l.createElement("h6",{className:"mt-2"},"Loading...")),e.map((u,c)=>l.createElement("a",{href:`/products/${u.slug}`,className:"text-decoration-none text-dark",key:c},l.createElement("div",{className:"card border-0 shadow-sm rounded-3 bg-light mb-3"},l.createElement("div",{className:"card-body"},u.title)))))))))}function cn(){return l.createElement(l.Fragment,null,l.createElement("nav",{className:"navbar-expand-md fixed-bottom navbar-dark bg-dark shadow mt-5"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-between py-3"},l.createElement("div",{className:"col-md-4 text-center text-md-start"},l.createElement(ne,{href:"/",className:"d-flex align-items-center mb-2 mb-md-0 text-white text-decoration-none"},l.createElement("img",{src:"/assets/images/logo.png",width:"50",alt:"Logo",className:"me-2"}),l.createElement("h5",{className:"mb-0"},l.createElement("strong",null,"Ammshoes ")," STORE"))),l.createElement("div",{className:"col-md-4 d-flex justify-content-center align-items-center"},l.createElement("ul",{className:"nav"},l.createElement("li",{className:"nav-item"},l.createElement(ne,{href:"#",className:"nav-link px-2 text-white"},"About Us")),l.createElement("li",{className:"nav-item"},l.createElement(ne,{href:"#",className:"nav-link px-2 text-white"},"Contact")),l.createElement("li",{className:"nav-item"},l.createElement(ne,{href:"#",className:"nav-link px-2 text-white"},"Privacy Policy")))),l.createElement("div",{className:"col-md-4 text-center text-md-end"},l.createElement("p",{className:"mb-0 text-white"},"\xA9 ",new Date().getFullYear()," Ammshoes Store. All rights reserved."),l.createElement("p",{className:"mb-0 text-white"},"Designed by ",l.createElement("a",{href:"https://yourdesignerwebsite.com",className:"text-white text-decoration-none"},l.createElement("strong",null,"Your Designer"))))))))}function hn({children:t}){return l.createElement(l.Fragment,null,l.createElement(ln,null),l.createElement(Wt,null),l.createElement("div",{className:"main"},t),l.createElement(cn,null))}export{hn as L,un as a};
