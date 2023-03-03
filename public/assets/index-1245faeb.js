(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function _a(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Ta(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=bt(s)?eg(s):Ta(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(bt(e))return e;if(ct(e))return e}}const Jp=/;(?![^(]*\))/g,Zp=/:([^]+)/,tg=/\/\*.*?\*\//gs;function eg(e){const t={};return e.replace(tg,"").split(Jp).forEach(n=>{if(n){const s=n.split(Zp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Vn(e){let t="";if(bt(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const s=Vn(e[n]);s&&(t+=s+" ")}else if(ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ng="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sg=_a(ng);function ql(e){return!!e||e===""}const rg=e=>bt(e)?e:e==null?"":B(e)||ct(e)&&(e.toString===zl||!H(e.toString))?JSON.stringify(e,Hl,2):String(e),Hl=(e,t)=>t&&t.__v_isRef?Hl(e,t.value):Un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Kl(t)?{[`Set(${t.size})`]:[...t.values()]}:ct(t)&&!B(t)&&!Wl(t)?String(t):t,it={},$n=[],ce=()=>{},ig=()=>!1,og=/^on[^a-z]/,ui=e=>og.test(e),Ia=e=>e.startsWith("onUpdate:"),Lt=Object.assign,Ca=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ag=Object.prototype.hasOwnProperty,Q=(e,t)=>ag.call(e,t),B=Array.isArray,Un=e=>li(e)==="[object Map]",Kl=e=>li(e)==="[object Set]",H=e=>typeof e=="function",bt=e=>typeof e=="string",Sa=e=>typeof e=="symbol",ct=e=>e!==null&&typeof e=="object",Gl=e=>ct(e)&&H(e.then)&&H(e.catch),zl=Object.prototype.toString,li=e=>zl.call(e),cg=e=>li(e).slice(8,-1),Wl=e=>li(e)==="[object Object]",Aa=e=>bt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Sr=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ug=/-(\w)/g,Gn=hi(e=>e.replace(ug,(t,n)=>n?n.toUpperCase():"")),lg=/\B([A-Z])/g,rs=hi(e=>e.replace(lg,"-$1").toLowerCase()),Ql=hi(e=>e.charAt(0).toUpperCase()+e.slice(1)),no=hi(e=>e?`on${Ql(e)}`:""),Os=(e,t)=>!Object.is(e,t),Ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Do=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let eu;const hg=()=>eu||(eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let re;class fg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=re,!t&&re&&(this.index=(re.scopes||(re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=re;try{return re=this,t()}finally{re=n}}}on(){re=this}off(){re=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function dg(e,t=re){t&&t.active&&t.effects.push(e)}function pg(){return re}const Da=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yl=e=>(e.w&He)>0,Xl=e=>(e.n&He)>0,gg=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=He},mg=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Yl(r)&&!Xl(r)?r.delete(e):t[n++]=r,r.w&=~He,r.n&=~He}t.length=n}},xo=new WeakMap;let ys=0,He=1;const No=30;let oe;const gn=Symbol(""),Oo=Symbol("");class xa{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dg(this,s)}run(){if(!this.active)return this.fn();let t=oe,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=oe,oe=this,Ve=!0,He=1<<++ys,ys<=No?gg(this):nu(this),this.fn()}finally{ys<=No&&mg(this),He=1<<--ys,oe=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){oe===this?this.deferStop=!0:this.active&&(nu(this),this.onStop&&this.onStop(),this.active=!1)}}function nu(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const Jl=[];function is(){Jl.push(Ve),Ve=!1}function os(){const e=Jl.pop();Ve=e===void 0?!0:e}function Ht(e,t,n){if(Ve&&oe){let s=xo.get(e);s||xo.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Da()),Zl(r)}}function Zl(e,t){let n=!1;ys<=No?Xl(e)||(e.n|=He,n=!Yl(e)):n=!e.has(oe),n&&(e.add(oe),oe.deps.push(e))}function De(e,t,n,s,r,i){const o=xo.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&B(e)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":B(e)?Aa(n)&&a.push(o.get("length")):(a.push(o.get(gn)),Un(e)&&a.push(o.get(Oo)));break;case"delete":B(e)||(a.push(o.get(gn)),Un(e)&&a.push(o.get(Oo)));break;case"set":Un(e)&&a.push(o.get(gn));break}if(a.length===1)a[0]&&ko(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ko(Da(c))}}function ko(e,t){const n=B(e)?e:[...e];for(const s of n)s.computed&&su(s);for(const s of n)s.computed||su(s)}function su(e,t){(e!==oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const yg=_a("__proto__,__v_isRef,__isVue"),th=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sa)),vg=Na(),wg=Na(!1,!0),bg=Na(!0),ru=Eg();function Eg(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Y(this);for(let i=0,o=this.length;i<o;i++)Ht(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){is();const s=Y(this)[t].apply(this,n);return os(),s}}),e}function _g(e){const t=Y(this);return Ht(t,"has",e),t.hasOwnProperty(e)}function Na(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?Vg:ih:t?rh:sh).get(s))return s;const o=B(s);if(!e){if(o&&Q(ru,r))return Reflect.get(ru,r,i);if(r==="hasOwnProperty")return _g}const a=Reflect.get(s,r,i);return(Sa(r)?th.has(r):yg(r))||(e||Ht(s,"get",r),t)?a:kt(a)?o&&Aa(r)?a:a.value:ct(a)?e?oh(a):di(a):a}}const Tg=eh(),Ig=eh(!0);function eh(e=!1){return function(n,s,r,i){let o=n[s];if(zn(o)&&kt(o)&&!kt(r))return!1;if(!e&&(!Lr(r)&&!zn(r)&&(o=Y(o),r=Y(r)),!B(n)&&kt(o)&&!kt(r)))return o.value=r,!0;const a=B(n)&&Aa(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===Y(i)&&(a?Os(r,o)&&De(n,"set",s,r):De(n,"add",s,r)),c}}function Cg(e,t){const n=Q(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&De(e,"delete",t,void 0),s}function Sg(e,t){const n=Reflect.has(e,t);return(!Sa(t)||!th.has(t))&&Ht(e,"has",t),n}function Ag(e){return Ht(e,"iterate",B(e)?"length":gn),Reflect.ownKeys(e)}const nh={get:vg,set:Tg,deleteProperty:Cg,has:Sg,ownKeys:Ag},Dg={get:bg,set(e,t){return!0},deleteProperty(e,t){return!0}},xg=Lt({},nh,{get:wg,set:Ig}),Oa=e=>e,fi=e=>Reflect.getPrototypeOf(e);function pr(e,t,n=!1,s=!1){e=e.__v_raw;const r=Y(e),i=Y(t);n||(t!==i&&Ht(r,"get",t),Ht(r,"get",i));const{has:o}=fi(r),a=s?Oa:n?Ma:ks;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function gr(e,t=!1){const n=this.__v_raw,s=Y(n),r=Y(e);return t||(e!==r&&Ht(s,"has",e),Ht(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function mr(e,t=!1){return e=e.__v_raw,!t&&Ht(Y(e),"iterate",gn),Reflect.get(e,"size",e)}function iu(e){e=Y(e);const t=Y(this);return fi(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function ou(e,t){t=Y(t);const n=Y(this),{has:s,get:r}=fi(n);let i=s.call(n,e);i||(e=Y(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Os(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function au(e){const t=Y(this),{has:n,get:s}=fi(t);let r=n.call(t,e);r||(e=Y(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&De(t,"delete",e,void 0),i}function cu(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function yr(e,t){return function(s,r){const i=this,o=i.__v_raw,a=Y(o),c=t?Oa:e?Ma:ks;return!e&&Ht(a,"iterate",gn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function vr(e,t,n){return function(...s){const r=this.__v_raw,i=Y(r),o=Un(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=r[e](...s),l=n?Oa:t?Ma:ks;return!t&&Ht(i,"iterate",c?Oo:gn),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Fe(e){return function(...t){return e==="delete"?!1:this}}function Ng(){const e={get(i){return pr(this,i)},get size(){return mr(this)},has:gr,add:iu,set:ou,delete:au,clear:cu,forEach:yr(!1,!1)},t={get(i){return pr(this,i,!1,!0)},get size(){return mr(this)},has:gr,add:iu,set:ou,delete:au,clear:cu,forEach:yr(!1,!0)},n={get(i){return pr(this,i,!0)},get size(){return mr(this,!0)},has(i){return gr.call(this,i,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:yr(!0,!1)},s={get(i){return pr(this,i,!0,!0)},get size(){return mr(this,!0)},has(i){return gr.call(this,i,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vr(i,!1,!1),n[i]=vr(i,!0,!1),t[i]=vr(i,!1,!0),s[i]=vr(i,!0,!0)}),[e,n,t,s]}const[Og,kg,Rg,Mg]=Ng();function ka(e,t){const n=t?e?Mg:Rg:e?kg:Og;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const Lg={get:ka(!1,!1)},Fg={get:ka(!1,!0)},Pg={get:ka(!0,!1)},sh=new WeakMap,rh=new WeakMap,ih=new WeakMap,Vg=new WeakMap;function $g(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ug(e){return e.__v_skip||!Object.isExtensible(e)?0:$g(cg(e))}function di(e){return zn(e)?e:Ra(e,!1,nh,Lg,sh)}function Bg(e){return Ra(e,!1,xg,Fg,rh)}function oh(e){return Ra(e,!0,Dg,Pg,ih)}function Ra(e,t,n,s,r){if(!ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Ug(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function Bn(e){return zn(e)?Bn(e.__v_raw):!!(e&&e.__v_isReactive)}function zn(e){return!!(e&&e.__v_isReadonly)}function Lr(e){return!!(e&&e.__v_isShallow)}function ah(e){return Bn(e)||zn(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function ch(e){return Mr(e,"__v_skip",!0),e}const ks=e=>ct(e)?di(e):e,Ma=e=>ct(e)?oh(e):e;function uh(e){Ve&&oe&&(e=Y(e),Zl(e.dep||(e.dep=Da())))}function lh(e,t){e=Y(e);const n=e.dep;n&&ko(n)}function kt(e){return!!(e&&e.__v_isRef===!0)}function hh(e){return jg(e,!1)}function jg(e,t){return kt(e)?e:new qg(e,t)}class qg{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:ks(t)}get value(){return uh(this),this._value}set value(t){const n=this.__v_isShallow||Lr(t)||zn(t);t=n?t:Y(t),Os(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ks(t),lh(this))}}function Hg(e){return kt(e)?e.value:e}const Kg={get:(e,t,n)=>Hg(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return kt(r)&&!kt(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function fh(e){return Bn(e)?e:new Proxy(e,Kg)}var dh;class Gg{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[dh]=!1,this._dirty=!0,this.effect=new xa(t,()=>{this._dirty||(this._dirty=!0,lh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=Y(this);return uh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}dh="__v_isReadonly";function zg(e,t,n=!1){let s,r;const i=H(e);return i?(s=e,r=ce):(s=e.get,r=e.set),new Gg(s,r,i||!r,n)}function $e(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){pi(i,t,n)}return r}function Zt(e,t,n,s){if(H(e)){const i=$e(e,t,n,s);return i&&Gl(i)&&i.catch(o=>{pi(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(Zt(e[i],t,n,s));return r}function pi(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){$e(c,null,10,[e,o,a]);return}}Wg(e,n,r,s)}function Wg(e,t,n,s=!0){console.error(e)}let Rs=!1,Ro=!1;const Nt=[];let ye=0;const jn=[];let Ie=null,an=0;const ph=Promise.resolve();let La=null;function Qg(e){const t=La||ph;return e?t.then(this?e.bind(this):e):t}function Yg(e){let t=ye+1,n=Nt.length;for(;t<n;){const s=t+n>>>1;Ms(Nt[s])<e?t=s+1:n=s}return t}function Fa(e){(!Nt.length||!Nt.includes(e,Rs&&e.allowRecurse?ye+1:ye))&&(e.id==null?Nt.push(e):Nt.splice(Yg(e.id),0,e),gh())}function gh(){!Rs&&!Ro&&(Ro=!0,La=ph.then(yh))}function Xg(e){const t=Nt.indexOf(e);t>ye&&Nt.splice(t,1)}function Jg(e){B(e)?jn.push(...e):(!Ie||!Ie.includes(e,e.allowRecurse?an+1:an))&&jn.push(e),gh()}function uu(e,t=Rs?ye+1:0){for(;t<Nt.length;t++){const n=Nt[t];n&&n.pre&&(Nt.splice(t,1),t--,n())}}function mh(e){if(jn.length){const t=[...new Set(jn)];if(jn.length=0,Ie){Ie.push(...t);return}for(Ie=t,Ie.sort((n,s)=>Ms(n)-Ms(s)),an=0;an<Ie.length;an++)Ie[an]();Ie=null,an=0}}const Ms=e=>e.id==null?1/0:e.id,Zg=(e,t)=>{const n=Ms(e)-Ms(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yh(e){Ro=!1,Rs=!0,Nt.sort(Zg);const t=ce;try{for(ye=0;ye<Nt.length;ye++){const n=Nt[ye];n&&n.active!==!1&&$e(n,null,14)}}finally{ye=0,Nt.length=0,mh(),Rs=!1,La=null,(Nt.length||jn.length)&&yh()}}function tm(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||it;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||it;d&&(r=n.map(g=>bt(g)?g.trim():g)),h&&(r=n.map(Do))}let a,c=s[a=no(t)]||s[a=no(Gn(t))];!c&&i&&(c=s[a=no(rs(t))]),c&&Zt(c,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Zt(u,e,6,r)}}function vh(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!H(e)){const c=u=>{const l=vh(u,t,!0);l&&(a=!0,Lt(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ct(e)&&s.set(e,null),null):(B(i)?i.forEach(c=>o[c]=null):Lt(o,i),ct(e)&&s.set(e,o),o)}function gi(e,t){return!e||!ui(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,rs(t))||Q(e,t))}let Jt=null,wh=null;function Fr(e){const t=Jt;return Jt=e,wh=e&&e.type.__scopeId||null,t}function em(e,t=Jt,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&vu(-1);const i=Fr(t);let o;try{o=e(...r)}finally{Fr(i),s._d&&vu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function so(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:I,inheritAttrs:_}=e;let L,q;const Z=Fr(e);try{if(n.shapeFlag&4){const tt=r||s;L=me(l.call(tt,tt,h,i,g,d,I)),q=c}else{const tt=t;L=me(tt.length>1?tt(i,{attrs:c,slots:a,emit:u}):tt(i,null)),q=t.props?c:nm(c)}}catch(tt){Cs.length=0,pi(tt,e,1),L=Ae(Se)}let V=L;if(q&&_!==!1){const tt=Object.keys(q),{shapeFlag:ft}=V;tt.length&&ft&7&&(o&&tt.some(Ia)&&(q=sm(q,o)),V=Ke(V,q))}return n.dirs&&(V=Ke(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),L=V,Fr(Z),L}const nm=e=>{let t;for(const n in e)(n==="class"||n==="style"||ui(n))&&((t||(t={}))[n]=e[n]);return t},sm=(e,t)=>{const n={};for(const s in e)(!Ia(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function rm(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?lu(s,o,u):!!o;if(c&8){const l=t.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!gi(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?lu(s,o,u):!0:!!o;return!1}function lu(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!gi(n,i))return!0}return!1}function im({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const om=e=>e.__isSuspense;function am(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Jg(e)}function cm(e,t){if(mt){let n=mt.provides;const s=mt.parent&&mt.parent.provides;s===n&&(n=mt.provides=Object.create(s)),n[e]=t}}function _s(e,t,n=!1){const s=mt||Jt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&H(t)?t.call(s.proxy):t}}const wr={};function Ts(e,t,n){return bh(e,t,n)}function bh(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=it){const a=pg()===(mt==null?void 0:mt.scope)?mt:null;let c,u=!1,l=!1;if(kt(e)?(c=()=>e.value,u=Lr(e)):Bn(e)?(c=()=>e,s=!0):B(e)?(l=!0,u=e.some(V=>Bn(V)||Lr(V)),c=()=>e.map(V=>{if(kt(V))return V.value;if(Bn(V))return ln(V);if(H(V))return $e(V,a,2)})):H(e)?t?c=()=>$e(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Zt(e,a,3,[d])}:c=ce,t&&s){const V=c;c=()=>ln(V())}let h,d=V=>{h=q.onStop=()=>{$e(V,a,4)}},g;if(Fs)if(d=ce,t?n&&Zt(t,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const V=oy();g=V.__watcherHandles||(V.__watcherHandles=[])}else return ce;let I=l?new Array(e.length).fill(wr):wr;const _=()=>{if(q.active)if(t){const V=q.run();(s||u||(l?V.some((tt,ft)=>Os(tt,I[ft])):Os(V,I)))&&(h&&h(),Zt(t,a,3,[V,I===wr?void 0:l&&I[0]===wr?[]:I,d]),I=V)}else q.run()};_.allowRecurse=!!t;let L;r==="sync"?L=_:r==="post"?L=()=>Bt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),L=()=>Fa(_));const q=new xa(c,L);t?n?_():I=q.run():r==="post"?Bt(q.run.bind(q),a&&a.suspense):q.run();const Z=()=>{q.stop(),a&&a.scope&&Ca(a.scope.effects,q)};return g&&g.push(Z),Z}function um(e,t,n){const s=this.proxy,r=bt(e)?e.includes(".")?Eh(s,e):()=>s[e]:e.bind(s,s);let i;H(t)?i=t:(i=t.handler,n=t);const o=mt;Wn(this);const a=bh(r,i.bind(s),n);return o?Wn(o):mn(),a}function Eh(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ln(e,t){if(!ct(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),kt(e))ln(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)ln(e[n],t);else if(Kl(e)||Un(e))e.forEach(n=>{ln(n,t)});else if(Wl(e))for(const n in e)ln(e[n],t);return e}function lm(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pa(()=>{e.isMounted=!0}),Ch(()=>{e.isUnmounting=!0}),e}const Xt=[Function,Array],hm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},setup(e,{slots:t}){const n=Zm(),s=lm();let r;return()=>{const i=t.default&&Th(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==Se){o=_;break}}const a=Y(e),{mode:c}=a;if(s.isLeaving)return ro(o);const u=hu(o);if(!u)return ro(o);const l=Mo(u,a,s,n);Lo(u,l);const h=n.subTree,d=h&&hu(h);let g=!1;const{getTransitionKey:I}=u.type;if(I){const _=I();r===void 0?r=_:_!==r&&(r=_,g=!0)}if(d&&d.type!==Se&&(!cn(u,d)||g)){const _=Mo(d,a,s,n);if(Lo(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ro(o);c==="in-out"&&u.type!==Se&&(_.delayLeave=(L,q,Z)=>{const V=_h(s,d);V[String(d.key)]=d,L._leaveCb=()=>{q(),L._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=Z})}return o}}},fm=hm;function _h(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Mo(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:I,onBeforeAppear:_,onAppear:L,onAfterAppear:q,onAppearCancelled:Z}=t,V=String(e.key),tt=_h(n,e),ft=(K,_t)=>{K&&Zt(K,s,9,_t)},Le=(K,_t)=>{const ut=_t[1];ft(K,_t),B(K)?K.every(Gt=>Gt.length<=1)&&ut():K.length<=1&&ut()},ne={mode:i,persisted:o,beforeEnter(K){let _t=a;if(!n.isMounted)if(r)_t=_||a;else return;K._leaveCb&&K._leaveCb(!0);const ut=tt[V];ut&&cn(e,ut)&&ut.el._leaveCb&&ut.el._leaveCb(),ft(_t,[K])},enter(K){let _t=c,ut=u,Gt=l;if(!n.isMounted)if(r)_t=L||c,ut=q||u,Gt=Z||l;else return;let fe=!1;const _e=K._enterCb=ps=>{fe||(fe=!0,ps?ft(Gt,[K]):ft(ut,[K]),ne.delayedLeave&&ne.delayedLeave(),K._enterCb=void 0)};_t?Le(_t,[K,_e]):_e()},leave(K,_t){const ut=String(e.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return _t();ft(h,[K]);let Gt=!1;const fe=K._leaveCb=_e=>{Gt||(Gt=!0,_t(),_e?ft(I,[K]):ft(g,[K]),K._leaveCb=void 0,tt[ut]===e&&delete tt[ut])};tt[ut]=e,d?Le(d,[K,fe]):fe()},clone(K){return Mo(K,t,n,s)}};return ne}function ro(e){if(mi(e))return e=Ke(e),e.children=null,e}function hu(e){return mi(e)?e.children?e.children[0]:void 0:e}function Lo(e,t){e.shapeFlag&6&&e.component?Lo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Th(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ie?(o.patchFlag&128&&r++,s=s.concat(Th(o.children,t,a))):(t||o.type!==Se)&&s.push(a!=null?Ke(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const Dr=e=>!!e.type.__asyncLoader,mi=e=>e.type.__isKeepAlive;function dm(e,t){Ih(e,"a",t)}function pm(e,t){Ih(e,"da",t)}function Ih(e,t,n=mt){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(yi(t,s,n),n){let r=n.parent;for(;r&&r.parent;)mi(r.parent.vnode)&&gm(s,t,n,r),r=r.parent}}function gm(e,t,n,s){const r=yi(t,e,s,!0);Sh(()=>{Ca(s[t],r)},n)}function yi(e,t,n=mt,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;is(),Wn(n);const a=Zt(t,n,e,o);return mn(),os(),a});return s?r.unshift(i):r.push(i),i}}const Me=e=>(t,n=mt)=>(!Fs||e==="sp")&&yi(e,(...s)=>t(...s),n),mm=Me("bm"),Pa=Me("m"),ym=Me("bu"),vm=Me("u"),Ch=Me("bum"),Sh=Me("um"),wm=Me("sp"),bm=Me("rtg"),Em=Me("rtc");function _m(e,t=mt){yi("ec",e,t)}function Tm(e,t){const n=Jt;if(n===null)return e;const s=bi(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,u=it]=t[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&ln(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function nn(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(is(),Zt(c,n,8,[e.el,a,e,t]),os())}}const Im=Symbol();function Cm(e,t,n,s){let r;const i=n&&n[s];if(B(e)||bt(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(ct(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=t(e[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Fo=e=>e?Fh(e)?bi(e)||e.proxy:Fo(e.parent):null,Is=Lt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fo(e.parent),$root:e=>Fo(e.root),$emit:e=>e.emit,$options:e=>Va(e),$forceUpdate:e=>e.f||(e.f=()=>Fa(e.update)),$nextTick:e=>e.n||(e.n=Qg.bind(e.proxy)),$watch:e=>um.bind(e)}),io=(e,t)=>e!==it&&!e.__isScriptSetup&&Q(e,t),Sm={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(io(s,t))return o[t]=1,s[t];if(r!==it&&Q(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&Q(u,t))return o[t]=3,i[t];if(n!==it&&Q(n,t))return o[t]=4,n[t];Po&&(o[t]=0)}}const l=Is[t];let h,d;if(l)return t==="$attrs"&&Ht(e,"get",t),l(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==it&&Q(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,Q(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return io(r,t)?(r[t]=n,!0):s!==it&&Q(s,t)?(s[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==it&&Q(e,o)||io(t,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(Is,o)||Q(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Po=!0;function Am(e){const t=Va(e),n=e.proxy,s=e.ctx;Po=!1,t.beforeCreate&&fu(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:I,activated:_,deactivated:L,beforeDestroy:q,beforeUnmount:Z,destroyed:V,unmounted:tt,render:ft,renderTracked:Le,renderTriggered:ne,errorCaptured:K,serverPrefetch:_t,expose:ut,inheritAttrs:Gt,components:fe,directives:_e,filters:ps}=t;if(u&&Dm(u,s,null,e.appContext.config.unwrapInjectedRef),o)for(const lt in o){const nt=o[lt];H(nt)&&(s[lt]=nt.bind(n))}if(r){const lt=r.call(n,n);ct(lt)&&(e.data=di(lt))}if(Po=!0,i)for(const lt in i){const nt=i[lt],tn=H(nt)?nt.bind(n,n):H(nt.get)?nt.get.bind(n,n):ce,fr=!H(nt)&&H(nt.set)?nt.set.bind(n):ce,en=Vh({get:tn,set:fr});Object.defineProperty(s,lt,{enumerable:!0,configurable:!0,get:()=>en.value,set:de=>en.value=de})}if(a)for(const lt in a)Ah(a[lt],s,n,lt);if(c){const lt=H(c)?c.call(n):c;Reflect.ownKeys(lt).forEach(nt=>{cm(nt,lt[nt])})}l&&fu(l,e,"c");function Pt(lt,nt){B(nt)?nt.forEach(tn=>lt(tn.bind(n))):nt&&lt(nt.bind(n))}if(Pt(mm,h),Pt(Pa,d),Pt(ym,g),Pt(vm,I),Pt(dm,_),Pt(pm,L),Pt(_m,K),Pt(Em,Le),Pt(bm,ne),Pt(Ch,Z),Pt(Sh,tt),Pt(wm,_t),B(ut))if(ut.length){const lt=e.exposed||(e.exposed={});ut.forEach(nt=>{Object.defineProperty(lt,nt,{get:()=>n[nt],set:tn=>n[nt]=tn})})}else e.exposed||(e.exposed={});ft&&e.render===ce&&(e.render=ft),Gt!=null&&(e.inheritAttrs=Gt),fe&&(e.components=fe),_e&&(e.directives=_e)}function Dm(e,t,n=ce,s=!1){B(e)&&(e=Vo(e));for(const r in e){const i=e[r];let o;ct(i)?"default"in i?o=_s(i.from||r,i.default,!0):o=_s(i.from||r):o=_s(i),kt(o)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function fu(e,t,n){Zt(B(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ah(e,t,n,s){const r=s.includes(".")?Eh(n,s):()=>n[s];if(bt(e)){const i=t[e];H(i)&&Ts(r,i)}else if(H(e))Ts(r,e.bind(n));else if(ct(e))if(B(e))e.forEach(i=>Ah(i,t,n,s));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&Ts(r,i,e)}}function Va(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>Pr(c,u,o,!0)),Pr(c,t,o)),ct(t)&&i.set(t,c),c}function Pr(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Pr(e,i,n,!0),r&&r.forEach(o=>Pr(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=xm[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const xm={data:du,props:rn,emits:rn,methods:rn,computed:rn,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:rn,directives:rn,watch:Om,provide:du,inject:Nm};function du(e,t){return t?e?function(){return Lt(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Nm(e,t){return rn(Vo(e),Vo(t))}function Vo(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Vt(e,t){return e?[...new Set([].concat(e,t))]:t}function rn(e,t){return e?Lt(Lt(Object.create(null),e),t):t}function Om(e,t){if(!e)return t;if(!t)return e;const n=Lt(Object.create(null),e);for(const s in t)n[s]=Vt(e[s],t[s]);return n}function km(e,t,n,s=!1){const r={},i={};Mr(i,wi,1),e.propsDefaults=Object.create(null),Dh(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Bg(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Rm(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=Y(r),[c]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(gi(e.emitsOptions,d))continue;const g=t[d];if(c)if(Q(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const I=Gn(d);r[I]=$o(c,a,I,g,e,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{Dh(e,t,r,i)&&(u=!0);let l;for(const h in a)(!t||!Q(t,h)&&((l=rs(h))===h||!Q(t,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=$o(c,a,h,void 0,e,!0)):delete r[h]);if(i!==a)for(const h in i)(!t||!Q(t,h))&&(delete i[h],u=!0)}u&&De(e,"set","$attrs")}function Dh(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Sr(c))continue;const u=t[c];let l;r&&Q(r,l=Gn(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:gi(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Y(n),u=a||it;for(let l=0;l<i.length;l++){const h=i[l];n[h]=$o(r,c,h,u[h],e,!Q(u,h))}}return o}function $o(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Wn(r),s=u[n]=c.call(null,t),mn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===rs(n))&&(s=!0))}return s}function xh(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!H(e)){const l=h=>{c=!0;const[d,g]=xh(h,t,!0);Lt(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!i&&!c)return ct(e)&&s.set(e,$n),$n;if(B(i))for(let l=0;l<i.length;l++){const h=Gn(i[l]);pu(h)&&(o[h]=it)}else if(i)for(const l in i){const h=Gn(l);if(pu(h)){const d=i[l],g=o[h]=B(d)||H(d)?{type:d}:Object.assign({},d);if(g){const I=yu(Boolean,g.type),_=yu(String,g.type);g[0]=I>-1,g[1]=_<0||I<_,(I>-1||Q(g,"default"))&&a.push(h)}}}const u=[o,a];return ct(e)&&s.set(e,u),u}function pu(e){return e[0]!=="$"}function gu(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function mu(e,t){return gu(e)===gu(t)}function yu(e,t){return B(t)?t.findIndex(n=>mu(n,e)):H(t)&&mu(t,e)?0:-1}const Nh=e=>e[0]==="_"||e==="$stable",$a=e=>B(e)?e.map(me):[me(e)],Mm=(e,t,n)=>{if(t._n)return t;const s=em((...r)=>$a(t(...r)),n);return s._c=!1,s},Oh=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Nh(r))continue;const i=e[r];if(H(i))t[r]=Mm(r,i,s);else if(i!=null){const o=$a(i);t[r]=()=>o}}},kh=(e,t)=>{const n=$a(t);e.slots.default=()=>n},Lm=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Mr(t,"_",n)):Oh(t,e.slots={})}else e.slots={},t&&kh(e,t);Mr(e.slots,wi,1)},Fm=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=it;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Lt(r,t),!n&&a===1&&delete r._):(i=!t.$stable,Oh(t,r)),o=t}else t&&(kh(e,t),o={default:1});if(i)for(const a in r)!Nh(a)&&!(a in o)&&delete r[a]};function Rh(){return{app:null,config:{isNativeTag:ig,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pm=0;function Vm(e,t){return function(s,r=null){H(s)||(s=Object.assign({},s)),r!=null&&!ct(r)&&(r=null);const i=Rh(),o=new Set;let a=!1;const c=i.app={_uid:Pm++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ay,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...l)):H(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Ae(s,r);return d.appContext=i,l&&t?t(d,u):e(d,u,h),a=!0,c._container=u,u.__vue_app__=c,bi(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Uo(e,t,n,s,r=!1){if(B(e)){e.forEach((d,g)=>Uo(d,t&&(B(t)?t[g]:t),n,s,r));return}if(Dr(s)&&!r)return;const i=s.shapeFlag&4?bi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,u=t&&t.r,l=a.refs===it?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(bt(u)?(l[u]=null,Q(h,u)&&(h[u]=null)):kt(u)&&(u.value=null)),H(c))$e(c,a,12,[o,l]);else{const d=bt(c),g=kt(c);if(d||g){const I=()=>{if(e.f){const _=d?Q(h,c)?h[c]:l[c]:c.value;r?B(_)&&Ca(_,i):B(_)?_.includes(i)||_.push(i):d?(l[c]=[i],Q(h,c)&&(h[c]=l[c])):(c.value=[i],e.k&&(l[e.k]=c.value))}else d?(l[c]=o,Q(h,c)&&(h[c]=o)):g&&(c.value=o,e.k&&(l[e.k]=o))};o?(I.id=-1,Bt(I,n)):I()}}}const Bt=am;function $m(e){return Um(e)}function Um(e,t){const n=hg();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=ce,insertStaticContent:I}=e,_=(f,p,m,w=null,v=null,C=null,A=!1,T=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!cn(f,p)&&(w=dr(f),de(f,v,C,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:R,shapeFlag:x}=p;switch(b){case vi:L(f,p,m,w);break;case Se:q(f,p,m,w);break;case oo:f==null&&Z(p,m,w,A);break;case ie:fe(f,p,m,w,v,C,A,T,S);break;default:x&1?ft(f,p,m,w,v,C,A,T,S):x&6?_e(f,p,m,w,v,C,A,T,S):(x&64||x&128)&&b.process(f,p,m,w,v,C,A,T,S,Nn)}R!=null&&v&&Uo(R,f&&f.ref,C,p||f,!p)},L=(f,p,m,w)=>{if(f==null)s(p.el=a(p.children),m,w);else{const v=p.el=f.el;p.children!==f.children&&u(v,p.children)}},q=(f,p,m,w)=>{f==null?s(p.el=c(p.children||""),m,w):p.el=f.el},Z=(f,p,m,w)=>{[f.el,f.anchor]=I(f.children,p,m,w,f.el,f.anchor)},V=({el:f,anchor:p},m,w)=>{let v;for(;f&&f!==p;)v=d(f),s(f,m,w),f=v;s(p,m,w)},tt=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},ft=(f,p,m,w,v,C,A,T,S)=>{A=A||p.type==="svg",f==null?Le(p,m,w,v,C,A,T,S):_t(f,p,v,C,A,T,S)},Le=(f,p,m,w,v,C,A,T)=>{let S,b;const{type:R,props:x,shapeFlag:M,transition:$,dirs:G}=f;if(S=f.el=o(f.type,C,x&&x.is,x),M&8?l(S,f.children):M&16&&K(f.children,S,null,w,v,C&&R!=="foreignObject",A,T),G&&nn(f,null,w,"created"),ne(S,f,f.scopeId,A,w),x){for(const et in x)et!=="value"&&!Sr(et)&&i(S,et,null,x[et],C,f.children,w,v,Te);"value"in x&&i(S,"value",null,x.value),(b=x.onVnodeBeforeMount)&&ge(b,w,f)}G&&nn(f,null,w,"beforeMount");const st=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;st&&$.beforeEnter(S),s(S,p,m),((b=x&&x.onVnodeMounted)||st||G)&&Bt(()=>{b&&ge(b,w,f),st&&$.enter(S),G&&nn(f,null,w,"mounted")},v)},ne=(f,p,m,w,v)=>{if(m&&g(f,m),w)for(let C=0;C<w.length;C++)g(f,w[C]);if(v){let C=v.subTree;if(p===C){const A=v.vnode;ne(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},K=(f,p,m,w,v,C,A,T,S=0)=>{for(let b=S;b<f.length;b++){const R=f[b]=T?Pe(f[b]):me(f[b]);_(null,R,p,m,w,v,C,A,T)}},_t=(f,p,m,w,v,C,A)=>{const T=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:R}=p;S|=f.patchFlag&16;const x=f.props||it,M=p.props||it;let $;m&&sn(m,!1),($=M.onVnodeBeforeUpdate)&&ge($,m,p,f),R&&nn(p,f,m,"beforeUpdate"),m&&sn(m,!0);const G=v&&p.type!=="foreignObject";if(b?ut(f.dynamicChildren,b,T,m,w,G,C):A||nt(f,p,T,null,m,w,G,C,!1),S>0){if(S&16)Gt(T,p,x,M,m,w,v);else if(S&2&&x.class!==M.class&&i(T,"class",null,M.class,v),S&4&&i(T,"style",x.style,M.style,v),S&8){const st=p.dynamicProps;for(let et=0;et<st.length;et++){const dt=st[et],se=x[dt],On=M[dt];(On!==se||dt==="value")&&i(T,dt,se,On,v,f.children,m,w,Te)}}S&1&&f.children!==p.children&&l(T,p.children)}else!A&&b==null&&Gt(T,p,x,M,m,w,v);(($=M.onVnodeUpdated)||R)&&Bt(()=>{$&&ge($,m,p,f),R&&nn(p,f,m,"updated")},w)},ut=(f,p,m,w,v,C,A)=>{for(let T=0;T<p.length;T++){const S=f[T],b=p[T],R=S.el&&(S.type===ie||!cn(S,b)||S.shapeFlag&70)?h(S.el):m;_(S,b,R,null,w,v,C,A,!0)}},Gt=(f,p,m,w,v,C,A)=>{if(m!==w){if(m!==it)for(const T in m)!Sr(T)&&!(T in w)&&i(f,T,m[T],null,A,p.children,v,C,Te);for(const T in w){if(Sr(T))continue;const S=w[T],b=m[T];S!==b&&T!=="value"&&i(f,T,b,S,A,p.children,v,C,Te)}"value"in w&&i(f,"value",m.value,w.value)}},fe=(f,p,m,w,v,C,A,T,S)=>{const b=p.el=f?f.el:a(""),R=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:M,slotScopeIds:$}=p;$&&(T=T?T.concat($):$),f==null?(s(b,m,w),s(R,m,w),K(p.children,m,R,v,C,A,T,S)):x>0&&x&64&&M&&f.dynamicChildren?(ut(f.dynamicChildren,M,m,v,C,A,T),(p.key!=null||v&&p===v.subTree)&&Mh(f,p,!0)):nt(f,p,m,R,v,C,A,T,S)},_e=(f,p,m,w,v,C,A,T,S)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?v.ctx.activate(p,m,w,A,S):ps(p,m,w,v,C,A,S):Qc(f,p,S)},ps=(f,p,m,w,v,C,A)=>{const T=f.component=Jm(f,w,v);if(mi(f)&&(T.ctx.renderer=Nn),ty(T),T.asyncDep){if(v&&v.registerDep(T,Pt),!f.el){const S=T.subTree=Ae(Se);q(null,S,p,m)}return}Pt(T,f,p,m,v,C,A)},Qc=(f,p,m)=>{const w=p.component=f.component;if(rm(f,p,m))if(w.asyncDep&&!w.asyncResolved){lt(w,p,m);return}else w.next=p,Xg(w.update),w.update();else p.el=f.el,w.vnode=p},Pt=(f,p,m,w,v,C,A)=>{const T=()=>{if(f.isMounted){let{next:R,bu:x,u:M,parent:$,vnode:G}=f,st=R,et;sn(f,!1),R?(R.el=G.el,lt(f,R,A)):R=G,x&&Ar(x),(et=R.props&&R.props.onVnodeBeforeUpdate)&&ge(et,$,R,G),sn(f,!0);const dt=so(f),se=f.subTree;f.subTree=dt,_(se,dt,h(se.el),dr(se),f,v,C),R.el=dt.el,st===null&&im(f,dt.el),M&&Bt(M,v),(et=R.props&&R.props.onVnodeUpdated)&&Bt(()=>ge(et,$,R,G),v)}else{let R;const{el:x,props:M}=p,{bm:$,m:G,parent:st}=f,et=Dr(p);if(sn(f,!1),$&&Ar($),!et&&(R=M&&M.onVnodeBeforeMount)&&ge(R,st,p),sn(f,!0),x&&eo){const dt=()=>{f.subTree=so(f),eo(x,f.subTree,f,v,null)};et?p.type.__asyncLoader().then(()=>!f.isUnmounted&&dt()):dt()}else{const dt=f.subTree=so(f);_(null,dt,m,w,f,v,C),p.el=dt.el}if(G&&Bt(G,v),!et&&(R=M&&M.onVnodeMounted)){const dt=p;Bt(()=>ge(R,st,dt),v)}(p.shapeFlag&256||st&&Dr(st.vnode)&&st.vnode.shapeFlag&256)&&f.a&&Bt(f.a,v),f.isMounted=!0,p=m=w=null}},S=f.effect=new xa(T,()=>Fa(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,sn(f,!0),b()},lt=(f,p,m)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,Rm(f,p.props,w,m),Fm(f,p.children,m),is(),uu(),os()},nt=(f,p,m,w,v,C,A,T,S=!1)=>{const b=f&&f.children,R=f?f.shapeFlag:0,x=p.children,{patchFlag:M,shapeFlag:$}=p;if(M>0){if(M&128){fr(b,x,m,w,v,C,A,T,S);return}else if(M&256){tn(b,x,m,w,v,C,A,T,S);return}}$&8?(R&16&&Te(b,v,C),x!==b&&l(m,x)):R&16?$&16?fr(b,x,m,w,v,C,A,T,S):Te(b,v,C,!0):(R&8&&l(m,""),$&16&&K(x,m,w,v,C,A,T,S))},tn=(f,p,m,w,v,C,A,T,S)=>{f=f||$n,p=p||$n;const b=f.length,R=p.length,x=Math.min(b,R);let M;for(M=0;M<x;M++){const $=p[M]=S?Pe(p[M]):me(p[M]);_(f[M],$,m,null,v,C,A,T,S)}b>R?Te(f,v,C,!0,!1,x):K(p,m,w,v,C,A,T,S,x)},fr=(f,p,m,w,v,C,A,T,S)=>{let b=0;const R=p.length;let x=f.length-1,M=R-1;for(;b<=x&&b<=M;){const $=f[b],G=p[b]=S?Pe(p[b]):me(p[b]);if(cn($,G))_($,G,m,null,v,C,A,T,S);else break;b++}for(;b<=x&&b<=M;){const $=f[x],G=p[M]=S?Pe(p[M]):me(p[M]);if(cn($,G))_($,G,m,null,v,C,A,T,S);else break;x--,M--}if(b>x){if(b<=M){const $=M+1,G=$<R?p[$].el:w;for(;b<=M;)_(null,p[b]=S?Pe(p[b]):me(p[b]),m,G,v,C,A,T,S),b++}}else if(b>M)for(;b<=x;)de(f[b],v,C,!0),b++;else{const $=b,G=b,st=new Map;for(b=G;b<=M;b++){const zt=p[b]=S?Pe(p[b]):me(p[b]);zt.key!=null&&st.set(zt.key,b)}let et,dt=0;const se=M-G+1;let On=!1,Jc=0;const gs=new Array(se);for(b=0;b<se;b++)gs[b]=0;for(b=$;b<=x;b++){const zt=f[b];if(dt>=se){de(zt,v,C,!0);continue}let pe;if(zt.key!=null)pe=st.get(zt.key);else for(et=G;et<=M;et++)if(gs[et-G]===0&&cn(zt,p[et])){pe=et;break}pe===void 0?de(zt,v,C,!0):(gs[pe-G]=b+1,pe>=Jc?Jc=pe:On=!0,_(zt,p[pe],m,null,v,C,A,T,S),dt++)}const Zc=On?Bm(gs):$n;for(et=Zc.length-1,b=se-1;b>=0;b--){const zt=G+b,pe=p[zt],tu=zt+1<R?p[zt+1].el:w;gs[b]===0?_(null,pe,m,tu,v,C,A,T,S):On&&(et<0||b!==Zc[et]?en(pe,m,tu,2):et--)}}},en=(f,p,m,w,v=null)=>{const{el:C,type:A,transition:T,children:S,shapeFlag:b}=f;if(b&6){en(f.component.subTree,p,m,w);return}if(b&128){f.suspense.move(p,m,w);return}if(b&64){A.move(f,p,m,Nn);return}if(A===ie){s(C,p,m);for(let x=0;x<S.length;x++)en(S[x],p,m,w);s(f.anchor,p,m);return}if(A===oo){V(f,p,m);return}if(w!==2&&b&1&&T)if(w===0)T.beforeEnter(C),s(C,p,m),Bt(()=>T.enter(C),v);else{const{leave:x,delayLeave:M,afterLeave:$}=T,G=()=>s(C,p,m),st=()=>{x(C,()=>{G(),$&&$()})};M?M(C,G,st):st()}else s(C,p,m)},de=(f,p,m,w=!1,v=!1)=>{const{type:C,props:A,ref:T,children:S,dynamicChildren:b,shapeFlag:R,patchFlag:x,dirs:M}=f;if(T!=null&&Uo(T,null,m,f,!0),R&256){p.ctx.deactivate(f);return}const $=R&1&&M,G=!Dr(f);let st;if(G&&(st=A&&A.onVnodeBeforeUnmount)&&ge(st,p,f),R&6)Xp(f.component,m,w);else{if(R&128){f.suspense.unmount(m,w);return}$&&nn(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,m,v,Nn,w):b&&(C!==ie||x>0&&x&64)?Te(b,p,m,!1,!0):(C===ie&&x&384||!v&&R&16)&&Te(S,p,m),w&&Yc(f)}(G&&(st=A&&A.onVnodeUnmounted)||$)&&Bt(()=>{st&&ge(st,p,f),$&&nn(f,null,p,"unmounted")},m)},Yc=f=>{const{type:p,el:m,anchor:w,transition:v}=f;if(p===ie){Yp(m,w);return}if(p===oo){tt(f);return}const C=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:T}=v,S=()=>A(m,C);T?T(f.el,C,S):S()}else C()},Yp=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},Xp=(f,p,m)=>{const{bum:w,scope:v,update:C,subTree:A,um:T}=f;w&&Ar(w),v.stop(),C&&(C.active=!1,de(A,f,p,m)),T&&Bt(T,p),Bt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Te=(f,p,m,w=!1,v=!1,C=0)=>{for(let A=C;A<f.length;A++)de(f[A],p,m,w,v)},dr=f=>f.shapeFlag&6?dr(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Xc=(f,p,m)=>{f==null?p._vnode&&de(p._vnode,null,null,!0):_(p._vnode||null,f,p,null,null,null,m),uu(),mh(),p._vnode=f},Nn={p:_,um:de,m:en,r:Yc,mt:ps,mc:K,pc:nt,pbc:ut,n:dr,o:e};let to,eo;return t&&([to,eo]=t(Nn)),{render:Xc,hydrate:to,createApp:Vm(Xc,to)}}function sn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mh(e,t,n=!1){const s=e.children,r=t.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Pe(r[i]),a.el=o.el),n||Mh(o,a)),a.type===vi&&(a.el=o.el)}}function Bm(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const jm=e=>e.__isTeleport,ie=Symbol(void 0),vi=Symbol(void 0),Se=Symbol(void 0),oo=Symbol(void 0),Cs=[];let ae=null;function Vr(e=!1){Cs.push(ae=e?null:[])}function qm(){Cs.pop(),ae=Cs[Cs.length-1]||null}let Ls=1;function vu(e){Ls+=e}function Hm(e){return e.dynamicChildren=Ls>0?ae||$n:null,qm(),Ls>0&&ae&&ae.push(e),e}function $r(e,t,n,s,r,i){return Hm($t(e,t,n,s,r,i,!0))}function Km(e){return e?e.__v_isVNode===!0:!1}function cn(e,t){return e.type===t.type&&e.key===t.key}const wi="__vInternal",Lh=({key:e})=>e??null,xr=({ref:e,ref_key:t,ref_for:n})=>e!=null?bt(e)||kt(e)||H(e)?{i:Jt,r:e,k:t,f:!!n}:e:null;function $t(e,t=null,n=null,s=0,r=null,i=e===ie?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lh(t),ref:t&&xr(t),scopeId:wh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jt};return a?(Ua(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=bt(n)?8:16),Ls>0&&!o&&ae&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ae.push(c),c}const Ae=Gm;function Gm(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Im)&&(e=Se),Km(e)){const a=Ke(e,t,!0);return n&&Ua(a,n),Ls>0&&!i&&ae&&(a.shapeFlag&6?ae[ae.indexOf(e)]=a:ae.push(a)),a.patchFlag|=-2,a}if(ry(e)&&(e=e.__vccOpts),t){t=zm(t);let{class:a,style:c}=t;a&&!bt(a)&&(t.class=Vn(a)),ct(c)&&(ah(c)&&!B(c)&&(c=Lt({},c)),t.style=Ta(c))}const o=bt(e)?1:om(e)?128:jm(e)?64:ct(e)?4:H(e)?2:0;return $t(e,t,n,s,r,o,i,!0)}function zm(e){return e?ah(e)||wi in e?Lt({},e):e:null}function Ke(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?Qm(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Lh(a),ref:t&&t.ref?n&&r?B(r)?r.concat(xr(t)):[r,xr(t)]:xr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ke(e.ssContent),ssFallback:e.ssFallback&&Ke(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wm(e=" ",t=0){return Ae(vi,null,e,t)}function me(e){return e==null||typeof e=="boolean"?Ae(Se):B(e)?Ae(ie,null,e.slice()):typeof e=="object"?Pe(e):Ae(vi,null,String(e))}function Pe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ke(e)}function Ua(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Ua(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(wi in t)?t._ctx=Jt:r===3&&Jt&&(Jt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Jt},n=32):(t=String(t),s&64?(n=16,t=[Wm(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qm(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Vn([t.class,s.class]));else if(r==="style")t.style=Ta([t.style,s.style]);else if(ui(r)){const i=t[r],o=s[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function ge(e,t,n,s=null){Zt(e,t,7,[n,s])}const Ym=Rh();let Xm=0;function Jm(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ym,i={uid:Xm++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xh(s,r),emitsOptions:vh(s,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:s.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=tm.bind(null,i),e.ce&&e.ce(i),i}let mt=null;const Zm=()=>mt||Jt,Wn=e=>{mt=e,e.scope.on()},mn=()=>{mt&&mt.scope.off(),mt=null};function Fh(e){return e.vnode.shapeFlag&4}let Fs=!1;function ty(e,t=!1){Fs=t;const{props:n,children:s}=e.vnode,r=Fh(e);km(e,n,r,t),Lm(e,s);const i=r?ey(e,t):void 0;return Fs=!1,i}function ey(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ch(new Proxy(e.ctx,Sm));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?sy(e):null;Wn(e),is();const i=$e(s,e,0,[e.props,r]);if(os(),mn(),Gl(i)){if(i.then(mn,mn),t)return i.then(o=>{wu(e,o,t)}).catch(o=>{pi(o,e,0)});e.asyncDep=i}else wu(e,i,t)}else Ph(e,t)}function wu(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ct(t)&&(e.setupState=fh(t)),Ph(e,n)}let bu;function Ph(e,t,n){const s=e.type;if(!e.render){if(!t&&bu&&!s.render){const r=s.template||Va(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Lt(Lt({isCustomElement:i,delimiters:a},o),c);s.render=bu(r,u)}}e.render=s.render||ce}Wn(e),is(),Am(e),os(),mn()}function ny(e){return new Proxy(e.attrs,{get(t,n){return Ht(e,"get","$attrs"),t[n]}})}function sy(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=ny(e))},slots:e.slots,emit:e.emit,expose:t}}function bi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(fh(ch(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Is)return Is[n](e)},has(t,n){return n in t||n in Is}}))}function ry(e){return H(e)&&"__vccOpts"in e}const Vh=(e,t)=>zg(e,t,Fs),iy=Symbol(""),oy=()=>_s(iy),ay="3.2.47",cy="http://www.w3.org/2000/svg",un=typeof document<"u"?document:null,Eu=un&&un.createElement("template"),uy={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?un.createElementNS(cy,e):un.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>un.createTextNode(e),createComment:e=>un.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>un.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Eu.innerHTML=s?`<svg>${e}</svg>`:e;const a=Eu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ly(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function hy(e,t,n){const s=e.style,r=bt(n);if(n&&!r){if(t&&!bt(t))for(const i in t)n[i]==null&&Bo(s,i,"");for(const i in n)Bo(s,i,n[i])}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const _u=/\s*!important$/;function Bo(e,t,n){if(B(n))n.forEach(s=>Bo(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=fy(e,t);_u.test(n)?e.setProperty(rs(s),n.replace(_u,""),"important"):e[s]=n}}const Tu=["Webkit","Moz","ms"],ao={};function fy(e,t){const n=ao[t];if(n)return n;let s=Gn(t);if(s!=="filter"&&s in e)return ao[t]=s;s=Ql(s);for(let r=0;r<Tu.length;r++){const i=Tu[r]+s;if(i in e)return ao[t]=i}return t}const Iu="http://www.w3.org/1999/xlink";function dy(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Iu,t.slice(6,t.length)):e.setAttributeNS(Iu,t,n);else{const i=sg(t);n==null||i&&!ql(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function py(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ql(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Mn(e,t,n,s){e.addEventListener(t,n,s)}function gy(e,t,n,s){e.removeEventListener(t,n,s)}function my(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=yy(t);if(s){const u=i[t]=by(s,r);Mn(e,a,u,c)}else o&&(gy(e,a,o,c),i[t]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function yy(e){let t;if(Cu.test(e)){t={};let s;for(;s=e.match(Cu);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rs(e.slice(2)),t]}let co=0;const vy=Promise.resolve(),wy=()=>co||(vy.then(()=>co=0),co=Date.now());function by(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Zt(Ey(s,n.value),t,5,[s])};return n.value=e,n.attached=wy(),n}function Ey(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Su=/^on[a-z]/,_y=(e,t,n,s,r=!1,i,o,a,c)=>{t==="class"?ly(e,s,r):t==="style"?hy(e,n,s):ui(t)?Ia(t)||my(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ty(e,t,s,r))?py(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),dy(e,t,s,r))};function Ty(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Su.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Su.test(t)&&bt(n)?!1:t in e}const Iy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};fm.props;const Au=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>Ar(t,n):t};function Cy(e){e.target.composing=!0}function Du(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Sy={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Au(r);const i=s||r.props&&r.props.type==="number";Mn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Do(a)),e._assign(a)}),n&&Mn(e,"change",()=>{e.value=e.value.trim()}),t||(Mn(e,"compositionstart",Cy),Mn(e,"compositionend",Du),Mn(e,"change",Du))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=Au(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Do(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Ay=["ctrl","shift","alt","meta"],Dy={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ay.some(n=>e[`${n}Key`]&&!t.includes(n))},xy=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=Dy[t[r]];if(i&&i(n,t))return}return e(n,...s)},Ny=Lt({patchProp:_y},uy);let xu;function Oy(){return xu||(xu=$m(Ny))}const ky=(...e)=>{const t=Oy().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Ry(s);if(!r)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Ry(e){return bt(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},My=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):My(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const I=u<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ly=function(e){const t=$h(e);return Uh.encodeByteArray(t,!0)},Ur=function(e){return Ly(e).replace(/\./g,"")},Fy=function(e){try{return Uh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=()=>Py().__FIREBASE_DEFAULTS__,$y=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Uy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fy(e[1]);return t&&JSON.parse(t)},Bh=()=>{try{return Vy()||$y()||Uy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},By=e=>{var t,n;return(n=(t=Bh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jy=e=>{const t=By(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},qy=()=>{var e;return(e=Bh())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ur(JSON.stringify(n)),Ur(JSON.stringify(o)),a].join(".")}function Gy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function jh(){try{return typeof indexedDB=="object"}catch{return!1}}function qh(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function zy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="FirebaseError";class Ye extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Wy,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Qy(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ye(r,a,s)}}function Qy(e,t){return e.replace(Yy,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Yy=/\{\$([^}]+)}/g;function Br(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Nu(i)&&Nu(o)){if(!Br(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Nu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=1e3,Jy=2,Zy=4*60*60*1e3,tv=.5;function Ou(e,t=Xy,n=Jy){const s=t*Math.pow(n,e),r=Math.round(tv*s*(Math.random()-.5)*2);return Math.min(Zy,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e){return e&&e._delegate?e._delegate:e}class xe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Hy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sv(t))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=on){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=on){return this.instances.has(t)}getOptions(t=on){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nv(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=on){return this.component?this.component.multipleInstances?t:on:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nv(e){return e===on?void 0:e}function sv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ev(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(X||(X={}));const iv={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ov=X.INFO,av={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},cv=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=av[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ba{constructor(t){this.name=t,this._logLevel=ov,this._logHandler=cv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}const uv=(e,t)=>t.some(n=>e instanceof n);let ku,Ru;function lv(){return ku||(ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hv(){return Ru||(Ru=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hh=new WeakMap,jo=new WeakMap,Kh=new WeakMap,uo=new WeakMap,ja=new WeakMap;function fv(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ue(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Hh.set(n,e)}).catch(()=>{}),ja.set(t,e),t}function dv(e){if(jo.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});jo.set(e,t)}let qo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return jo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ue(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pv(e){qo=e(qo)}function gv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(lo(this),t,...n);return Kh.set(s,t.sort?t.sort():[t]),Ue(s)}:hv().includes(e)?function(...t){return e.apply(lo(this),t),Ue(Hh.get(this))}:function(...t){return Ue(e.apply(lo(this),t))}}function mv(e){return typeof e=="function"?gv(e):(e instanceof IDBTransaction&&dv(e),uv(e,lv())?new Proxy(e,qo):e)}function Ue(e){if(e instanceof IDBRequest)return fv(e);if(uo.has(e))return uo.get(e);const t=mv(e);return t!==e&&(uo.set(e,t),ja.set(t,e)),t}const lo=e=>ja.get(e);function Gh(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Ue(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ue(o.result),c.oldVersion,c.newVersion,Ue(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const yv=["get","getKey","getAll","getAllKeys","count"],vv=["put","add","delete","clear"],ho=new Map;function Mu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ho.get(t))return ho.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=vv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||yv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ho.set(t,i),i}pv(e=>({...e,get:(t,n,s)=>Mu(t,n)||e.get(t,n,s),has:(t,n)=>!!Mu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ho="@firebase/app",Lu="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Ba("@firebase/app"),Ev="@firebase/app-compat",_v="@firebase/analytics-compat",Tv="@firebase/analytics",Iv="@firebase/app-check-compat",Cv="@firebase/app-check",Sv="@firebase/auth",Av="@firebase/auth-compat",Dv="@firebase/database",xv="@firebase/database-compat",Nv="@firebase/functions",Ov="@firebase/functions-compat",kv="@firebase/installations",Rv="@firebase/installations-compat",Mv="@firebase/messaging",Lv="@firebase/messaging-compat",Fv="@firebase/performance",Pv="@firebase/performance-compat",Vv="@firebase/remote-config",$v="@firebase/remote-config-compat",Uv="@firebase/storage",Bv="@firebase/storage-compat",jv="@firebase/firestore",qv="@firebase/firestore-compat",Hv="firebase",Kv="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="[DEFAULT]",Gv={[Ho]:"fire-core",[Ev]:"fire-core-compat",[Tv]:"fire-analytics",[_v]:"fire-analytics-compat",[Cv]:"fire-app-check",[Iv]:"fire-app-check-compat",[Sv]:"fire-auth",[Av]:"fire-auth-compat",[Dv]:"fire-rtdb",[xv]:"fire-rtdb-compat",[Nv]:"fire-fn",[Ov]:"fire-fn-compat",[kv]:"fire-iid",[Rv]:"fire-iid-compat",[Mv]:"fire-fcm",[Lv]:"fire-fcm-compat",[Fv]:"fire-perf",[Pv]:"fire-perf-compat",[Vv]:"fire-rc",[$v]:"fire-rc-compat",[Uv]:"fire-gcs",[Bv]:"fire-gcs-compat",[jv]:"fire-fst",[qv]:"fire-fst-compat","fire-js":"fire-js",[Hv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Map,Go=new Map;function zv(e,t){try{e.container.addComponent(t)}catch(n){bn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ge(e){const t=e.name;if(Go.has(t))return bn.debug(`There were multiple attempts to register component ${t}.`),!1;Go.set(t,e);for(const n of jr.values())zv(n,e);return!0}function Qs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Be=new Ei("app","Firebase",Wv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=Kv;function zh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Ko,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Be.create("bad-app-name",{appName:String(r)});if(n||(n=qy()),!n)throw Be.create("no-options");const i=jr.get(r);if(i){if(Br(n,i.options)&&Br(s,i.config))return i;throw Be.create("duplicate-app",{appName:r})}const o=new rv(r);for(const c of Go.values())o.addComponent(c);const a=new Qv(n,s,o);return jr.set(r,a),a}function Wh(e=Ko){const t=jr.get(e);if(!t&&e===Ko)return zh();if(!t)throw Be.create("no-app",{appName:e});return t}function we(e,t,n){var s;let r=(s=Gv[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bn.warn(a.join(" "));return}Ge(new xe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="firebase-heartbeat-database",Jv=1,Ps="firebase-heartbeat-store";let fo=null;function Qh(){return fo||(fo=Gh(Xv,Jv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ps)}}}).catch(e=>{throw Be.create("idb-open",{originalErrorMessage:e.message})})),fo}async function Zv(e){try{return(await Qh()).transaction(Ps).objectStore(Ps).get(Yh(e))}catch(t){if(t instanceof Ye)bn.warn(t.message);else{const n=Be.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bn.warn(n.message)}}}async function Fu(e,t){try{const s=(await Qh()).transaction(Ps,"readwrite");return await s.objectStore(Ps).put(t,Yh(e)),s.done}catch(n){if(n instanceof Ye)bn.warn(n.message);else{const s=Be.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(s.message)}}}function Yh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=1024,ew=30*24*60*60*1e3;class nw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ew}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pu(),{heartbeatsToSend:n,unsentEntries:s}=sw(this._heartbeatsCache.heartbeats),r=Ur(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pu(){return new Date().toISOString().substring(0,10)}function sw(e,t=tw){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Vu(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Vu(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jh()?qh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Vu(e){return Ur(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(e){Ge(new xe("platform-logger",t=>new wv(t),"PRIVATE")),Ge(new xe("heartbeat",t=>new nw(t),"PRIVATE")),we(Ho,Lu,e),we(Ho,Lu,"esm2017"),we("fire-js","")}iw("");var ow="firebase",aw="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we(ow,aw,"app");const Xh="@firebase/installations",qa="0.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=1e4,Zh=`w:${qa}`,tf="FIS_v2",cw="https://firebaseinstallations.googleapis.com/v1",uw=60*60*1e3,lw="installations",hw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},En=new Ei(lw,hw,fw);function ef(e){return e instanceof Ye&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf({projectId:e}){return`${cw}/projects/${e}/installations`}function sf(e){return{token:e.token,requestStatus:2,expiresIn:pw(e.expiresIn),creationTime:Date.now()}}async function rf(e,t){const s=(await t.json()).error;return En.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function of({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function dw(e,{refreshToken:t}){const n=of(e);return n.append("Authorization",gw(t)),n}async function af(e){const t=await e();return t.status>=500&&t.status<600?e():t}function pw(e){return Number(e.replace("s","000"))}function gw(e){return`${tf} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=nf(e),r=of(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:tf,appId:e.appId,sdkVersion:Zh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await af(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:sf(u.authToken)}}else throw await rf("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=/^[cdef][\w-]{21}$/,zo="";function ww(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=bw(e);return vw.test(n)?n:zo}catch{return zo}}function bw(e){return yw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;function lf(e,t){const n=_i(e);hf(n,t),Ew(n,t)}function hf(e,t){const n=uf.get(e);if(n)for(const s of n)s(t)}function Ew(e,t){const n=_w();n&&n.postMessage({key:e,fid:t}),Tw()}let hn=null;function _w(){return!hn&&"BroadcastChannel"in self&&(hn=new BroadcastChannel("[Firebase] FID Change"),hn.onmessage=e=>{hf(e.data.key,e.data.fid)}),hn}function Tw(){uf.size===0&&hn&&(hn.close(),hn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="firebase-installations-database",Cw=1,_n="firebase-installations-store";let po=null;function Ha(){return po||(po=Gh(Iw,Cw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_n)}}})),po}async function qr(e,t){const n=_i(e),r=(await Ha()).transaction(_n,"readwrite"),i=r.objectStore(_n),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&lf(e,t.fid),t}async function ff(e){const t=_i(e),s=(await Ha()).transaction(_n,"readwrite");await s.objectStore(_n).delete(t),await s.done}async function Ti(e,t){const n=_i(e),r=(await Ha()).transaction(_n,"readwrite"),i=r.objectStore(_n),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&lf(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(e){let t;const n=await Ti(e.appConfig,s=>{const r=Sw(s),i=Aw(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===zo?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Sw(e){const t=e||{fid:ww(),registrationStatus:0};return df(t)}function Aw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(En.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Dw(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:xw(e)}:{installationEntry:t}}async function Dw(e,t){try{const n=await mw(e,t);return qr(e.appConfig,n)}catch(n){throw ef(n)&&n.customData.serverCode===409?await ff(e.appConfig):await qr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function xw(e){let t=await $u(e.appConfig);for(;t.registrationStatus===1;)await cf(100),t=await $u(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ka(e);return s||n}return t}function $u(e){return Ti(e,t=>{if(!t)throw En.create("installation-not-found");return df(t)})}function df(e){return Nw(e)?{fid:e.fid,registrationStatus:0}:e}function Nw(e){return e.registrationStatus===1&&e.registrationTime+Jh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow({appConfig:e,heartbeatServiceProvider:t},n){const s=kw(e,n),r=dw(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Zh,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await af(()=>fetch(s,a));if(c.ok){const u=await c.json();return sf(u)}else throw await rf("Generate Auth Token",c)}function kw(e,{fid:t}){return`${nf(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(e,t=!1){let n;const s=await Ti(e.appConfig,i=>{if(!pf(i))throw En.create("not-registered");const o=i.authToken;if(!t&&Lw(o))return i;if(o.requestStatus===1)return n=Rw(e,t),i;{if(!navigator.onLine)throw En.create("app-offline");const a=Pw(i);return n=Mw(e,a),a}});return n?await n:s.authToken}async function Rw(e,t){let n=await Uu(e.appConfig);for(;n.authToken.requestStatus===1;)await cf(100),n=await Uu(e.appConfig);const s=n.authToken;return s.requestStatus===0?Ga(e,t):s}function Uu(e){return Ti(e,t=>{if(!pf(t))throw En.create("not-registered");const n=t.authToken;return Vw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Mw(e,t){try{const n=await Ow(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await qr(e.appConfig,s),n}catch(n){if(ef(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ff(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await qr(e.appConfig,s)}throw n}}function pf(e){return e!==void 0&&e.registrationStatus===2}function Lw(e){return e.requestStatus===2&&!Fw(e)}function Fw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+uw}function Pw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Vw(e){return e.requestStatus===1&&e.requestTime+Jh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(e){const t=e,{installationEntry:n,registrationPromise:s}=await Ka(t);return s?s.catch(console.error):Ga(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(e,t=!1){const n=e;return await Bw(n),(await Ga(n,t)).token}async function Bw(e){const{registrationPromise:t}=await Ka(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(e){if(!e||!e.options)throw go("App Configuration");if(!e.name)throw go("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw go(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function go(e){return En.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="installations",qw="installations-internal",Hw=e=>{const t=e.getProvider("app").getImmediate(),n=jw(t),s=Qs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Kw=e=>{const t=e.getProvider("app").getImmediate(),n=Qs(t,gf).getImmediate();return{getId:()=>$w(n),getToken:r=>Uw(n,r)}};function Gw(){Ge(new xe(gf,Hw,"PUBLIC")),Ge(new xe(qw,Kw,"PRIVATE"))}Gw();we(Xh,qa);we(Xh,qa,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="analytics",zw="firebase_id",Ww="origin",Qw=60*1e3,Yw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Ba("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Xw(e,t){const n=document.createElement("script");n.src=`${mf}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Jw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Zw(e,t,n,s,r,i){const o=s[r];try{if(o)await t[o];else{const c=(await yf(n)).find(u=>u.measurementId===r);c&&await t[c.appId]}}catch(a){Qt.error(a)}e("config",r,i)}async function t0(e,t,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await yf(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&t[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",s,r||{})}catch(i){Qt.error(i)}}function e0(e,t,n,s){async function r(i,o,a){try{i==="event"?await t0(e,t,n,o,a):i==="config"?await Zw(e,t,n,s,o,a):i==="consent"?e("consent","update",a):e("set",o)}catch(c){Qt.error(c)}}return r}function n0(e,t,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=e0(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function s0(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(mf)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},te=new Ei("analytics","Analytics",r0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=30,o0=1e3;class a0{constructor(t={},n=o0){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const vf=new a0;function c0(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function u0(e){var t;const{appId:n,apiKey:s}=e,r={method:"GET",headers:c0(s)},i=Yw.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw te.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function l0(e,t=vf,n){const{appId:s,apiKey:r,measurementId:i}=e.options;if(!s)throw te.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw te.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new d0;return setTimeout(async()=>{a.abort()},n!==void 0?n:Qw),wf({appId:s,apiKey:r,measurementId:i},o,a,t)}async function wf(e,{throttleEndTimeMillis:t,backoffCount:n},s,r=vf){var i;const{appId:o,measurementId:a}=e;try{await h0(s,t)}catch(c){if(a)return Qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await u0(e);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!f0(u)){if(r.deleteThrottleMetadata(o),a)return Qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ou(n,r.intervalMillis,i0):Ou(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),Qt.debug(`Calling attemptFetch again in ${l} millis`),wf(e,h,s,r)}}function h0(e,t){return new Promise((n,s)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),s(te.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function f0(e){if(!(e instanceof Ye)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class d0{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function p0(e,t,n,s,r){if(r&&r.global){e("event",n,s);return}else{const i=await t,o=Object.assign(Object.assign({},s),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(){if(jh())try{await qh()}catch(e){return Qt.warn(te.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Qt.warn(te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function m0(e,t,n,s,r,i,o){var a;const c=l0(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Qt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Qt.error(g)),t.push(c);const u=g0().then(g=>{if(g)return s.getId()}),[l,h]=await Promise.all([c,u]);s0(i)||Xw(i,l.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Ww]="firebase",d.update=!0,h!=null&&(d[zw]=h),r("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(t){this.app=t}_delete(){return delete Ss[this.app.options.appId],Promise.resolve()}}let Ss={},Bu=[];const ju={};let mo="dataLayer",v0="gtag",qu,bf,Hu=!1;function w0(){const e=[];if(Gy()&&e.push("This is a browser extension environment."),zy()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=te.create("invalid-analytics-context",{errorInfo:t});Qt.warn(n.message)}}function b0(e,t,n){w0();const s=e.options.appId;if(!s)throw te.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw te.create("no-api-key");if(Ss[s]!=null)throw te.create("already-exists",{id:s});if(!Hu){Jw(mo);const{wrappedGtag:i,gtagCore:o}=n0(Ss,Bu,ju,mo,v0);bf=i,qu=o,Hu=!0}return Ss[s]=m0(e,Bu,ju,t,qu,mo,n),new y0(e)}function E0(e=Wh()){e=ee(e);const t=Qs(e,Hr);return t.isInitialized()?t.getImmediate():_0(e)}function _0(e,t={}){const n=Qs(e,Hr);if(n.isInitialized()){const r=n.getImmediate();if(Br(t,n.getOptions()))return r;throw te.create("already-initialized")}return n.initialize({options:t})}function T0(e,t,n,s){e=ee(e),p0(bf,Ss[e.app.options.appId],t,n,s).catch(r=>Qt.error(r))}const Ku="@firebase/analytics",Gu="0.9.3";function I0(){Ge(new xe(Hr,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return b0(s,r,n)},"PUBLIC")),Ge(new xe("analytics-internal",e,"PRIVATE")),we(Ku,Gu),we(Ku,Gu,"esm2017");function e(t){try{const n=t.getProvider(Hr).getImmediate();return{logEvent:(s,r,i)=>T0(n,s,r,i)}}catch(n){throw te.create("interop-component-reg-failed",{reason:n})}}}I0();var C0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,za=za||{},P=C0||self;function Kr(){}function Ii(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ys(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function S0(e){return Object.prototype.hasOwnProperty.call(e,yo)&&e[yo]||(e[yo]=++A0)}var yo="closure_uid_"+(1e9*Math.random()>>>0),A0=0;function D0(e,t,n){return e.call.apply(e.bind,arguments)}function x0(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Rt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=D0:Rt=x0,Rt.apply(null,arguments)}function br(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function At(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Xe(){this.s=this.s,this.o=this.o}var N0=0;Xe.prototype.s=!1;Xe.prototype.na=function(){!this.s&&(this.s=!0,this.M(),N0!=0)&&S0(this)};Xe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ef=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Wa(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function zu(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ii(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function Mt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var O0=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{P.addEventListener("test",Kr,t),P.removeEventListener("test",Kr,t)}catch{}return e}();function Gr(e){return/^[\s\xa0]*$/.test(e)}var Wu=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function vo(e,t){return e<t?-1:e>t?1:0}function Ci(){var e=P.navigator;return e&&(e=e.userAgent)?e:""}function ve(e){return Ci().indexOf(e)!=-1}function Qa(e){return Qa[" "](e),e}Qa[" "]=Kr;function k0(e){var t=L0;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var R0=ve("Opera"),Qn=ve("Trident")||ve("MSIE"),_f=ve("Edge"),Wo=_f||Qn,Tf=ve("Gecko")&&!(Ci().toLowerCase().indexOf("webkit")!=-1&&!ve("Edge"))&&!(ve("Trident")||ve("MSIE"))&&!ve("Edge"),M0=Ci().toLowerCase().indexOf("webkit")!=-1&&!ve("Edge");function If(){var e=P.document;return e?e.documentMode:void 0}var zr;t:{var wo="",bo=function(){var e=Ci();if(Tf)return/rv:([^\);]+)(\)|;)/.exec(e);if(_f)return/Edge\/([\d\.]+)/.exec(e);if(Qn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(M0)return/WebKit\/(\S+)/.exec(e);if(R0)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(bo&&(wo=bo?bo[1]:""),Qn){var Eo=If();if(Eo!=null&&Eo>parseFloat(wo)){zr=String(Eo);break t}}zr=wo}var L0={};function F0(){return k0(function(){let e=0;const t=Wu(String(zr)).split("."),n=Wu("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=vo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||vo(r[2].length==0,i[2].length==0)||vo(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Qo;if(P.document&&Qn){var Qu=If();Qo=Qu||parseInt(zr,10)||void 0}else Qo=void 0;var P0=Qo;function Vs(e,t){if(Mt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Tf){t:{try{Qa(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:V0[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Vs.X.h.call(this)}}At(Vs,Mt);var V0={2:"touch",3:"pen",4:"mouse"};Vs.prototype.h=function(){Vs.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Xs="closure_listenable_"+(1e6*Math.random()|0),$0=0;function U0(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++$0,this.ba=this.ea=!1}function Si(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ya(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Cf(e){const t={};for(const n in e)t[n]=e[n];return t}const Yu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sf(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Yu.length;i++)n=Yu[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ai(e){this.src=e,this.g={},this.h=0}Ai.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Xo(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new U0(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Yo(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Ef(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Si(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Xo(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var Xa="closure_lm_"+(1e6*Math.random()|0),_o={};function Af(e,t,n,s,r){if(s&&s.once)return xf(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Af(e,t[i],n,s,r);return null}return n=tc(n),e&&e[Xs]?e.N(t,n,Ys(s)?!!s.capture:!!s,r):Df(e,t,n,!1,s,r)}function Df(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Ys(r)?!!r.capture:!!r,a=Za(e);if(a||(e[Xa]=a=new Ai(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=B0(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)O0||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Of(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function B0(){function e(n){return t.call(e.src,e.listener,n)}const t=j0;return e}function xf(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)xf(e,t[i],n,s,r);return null}return n=tc(n),e&&e[Xs]?e.O(t,n,Ys(s)?!!s.capture:!!s,r):Df(e,t,n,!0,s,r)}function Nf(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Nf(e,t[i],n,s,r);else s=Ys(s)?!!s.capture:!!s,n=tc(n),e&&e[Xs]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Xo(i,n,s,r),-1<n&&(Si(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Za(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Xo(t,n,s,r)),(n=-1<e?t[e]:null)&&Ja(n))}function Ja(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Xs])Yo(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Of(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Za(t))?(Yo(n,e),n.h==0&&(n.src=null,t[Xa]=null)):Si(e)}}}function Of(e){return e in _o?_o[e]:_o[e]="on"+e}function j0(e,t){if(e.ba)e=!0;else{t=new Vs(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ja(e),e=n.call(s,t)}return e}function Za(e){return e=e[Xa],e instanceof Ai?e:null}var To="__closure_events_fn_"+(1e9*Math.random()>>>0);function tc(e){return typeof e=="function"?e:(e[To]||(e[To]=function(t){return e.handleEvent(t)}),e[To])}function It(){Xe.call(this),this.i=new Ai(this),this.P=this,this.I=null}At(It,Xe);It.prototype[Xs]=!0;It.prototype.removeEventListener=function(e,t,n,s){Nf(this,e,t,n,s)};function St(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Mt(t,e);else if(t instanceof Mt)t.target=t.target||e;else{var r=t;t=new Mt(s,e),Sf(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Er(o,s,!0,t)&&r}if(o=t.g=e,r=Er(o,s,!0,t)&&r,r=Er(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Er(o,s,!1,t)&&r}It.prototype.M=function(){if(It.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Si(n[s]);delete e.g[t],e.h--}}this.I=null};It.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};It.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Er(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Yo(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ec=P.JSON.stringify;function q0(){var e=Mf;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class H0{constructor(){this.h=this.g=null}add(t,n){const s=kf.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var kf=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new K0,e=>e.reset());class K0{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function G0(e){P.setTimeout(()=>{throw e},0)}function Rf(e,t){Jo||z0(),Zo||(Jo(),Zo=!0),Mf.add(e,t)}var Jo;function z0(){var e=P.Promise.resolve(void 0);Jo=function(){e.then(W0)}}var Zo=!1,Mf=new H0;function W0(){for(var e;e=q0();){try{e.h.call(e.g)}catch(n){G0(n)}var t=kf;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Zo=!1}function Di(e,t){It.call(this),this.h=e||1,this.g=t||P,this.j=Rt(this.lb,this),this.l=Date.now()}At(Di,It);N=Di.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),St(this,"tick"),this.ca&&(nc(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nc(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}N.M=function(){Di.X.M.call(this),nc(this),delete this.g};function sc(e,t,n){if(typeof e=="function")n&&(e=Rt(e,n));else if(e&&typeof e.handleEvent=="function")e=Rt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:P.setTimeout(e,t||0)}function Lf(e){e.g=sc(()=>{e.g=null,e.i&&(e.i=!1,Lf(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Q0 extends Xe{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Lf(this)}M(){super.M(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $s(e){Xe.call(this),this.h=e,this.g={}}At($s,Xe);var Xu=[];function Ff(e,t,n,s){Array.isArray(n)||(n&&(Xu[0]=n.toString()),n=Xu);for(var r=0;r<n.length;r++){var i=Af(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Pf(e){Ya(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ja(t)},e),e.g={}}$s.prototype.M=function(){$s.X.M.call(this),Pf(this)};$s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xi(){this.g=!0}xi.prototype.Aa=function(){this.g=!1};function Y0(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function X0(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Pn(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Z0(e,n)+(s?" "+s:"")})}function J0(e,t){e.info(function(){return"TIMEOUT: "+t})}xi.prototype.info=function(){};function Z0(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ec(n)}catch{return t}}var Cn={},Ju=null;function Ni(){return Ju=Ju||new It}Cn.Pa="serverreachability";function Vf(e){Mt.call(this,Cn.Pa,e)}At(Vf,Mt);function Us(e){const t=Ni();St(t,new Vf(t))}Cn.STAT_EVENT="statevent";function $f(e,t){Mt.call(this,Cn.STAT_EVENT,e),this.stat=t}At($f,Mt);function Ut(e){const t=Ni();St(t,new $f(t,e))}Cn.Qa="timingevent";function Uf(e,t){Mt.call(this,Cn.Qa,e),this.size=t}At(Uf,Mt);function Js(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){e()},t)}var Oi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Bf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function rc(){}rc.prototype.h=null;function Zu(e){return e.h||(e.h=e.i())}function jf(){}var Zs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ic(){Mt.call(this,"d")}At(ic,Mt);function oc(){Mt.call(this,"c")}At(oc,Mt);var ta;function ki(){}At(ki,rc);ki.prototype.g=function(){return new XMLHttpRequest};ki.prototype.i=function(){return{}};ta=new ki;function tr(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new $s(this),this.O=tb,e=Wo?125:void 0,this.T=new Di(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new qf}function qf(){this.i=null,this.g="",this.h=!1}var tb=45e3,ea={},Wr={};N=tr.prototype;N.setTimeout=function(e){this.O=e};function na(e,t,n){e.K=1,e.v=Mi(Ne(t)),e.s=n,e.P=!0,Hf(e,null)}function Hf(e,t){e.F=Date.now(),er(e),e.A=Ne(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Jf(n.i,"t",s),e.C=0,n=e.l.H,e.h=new qf,e.g=wd(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Q0(Rt(e.La,e,e.g),e.N)),Ff(e.S,e.g,"readystatechange",e.ib),t=e.H?Cf(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Us(),Y0(e.j,e.u,e.A,e.m,e.U,e.s)}N.ib=function(e){e=e.target;const t=this.L;t&&Ce(e)==3?t.l():this.La(e)};N.La=function(e){try{if(e==this.g)t:{const l=Ce(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Wo||this.g&&(this.h.h||this.g.fa()||sl(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?Us(3):Us(2)),Ri(this);var n=this.g.aa();this.Y=n;e:if(Kf(this)){var s=sl(this.g);e="";var r=s.length,i=Ce(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),As(this);var o="";break e}this.h.i=new P.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,X0(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gr(a)){var u=a;break e}}u=null}if(n=u)Pn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sa(this,n);else{this.i=!1,this.o=3,Ut(12),fn(this),As(this);break t}}this.P?(Gf(this,l,o),Wo&&this.i&&l==3&&(Ff(this.S,this.T,"tick",this.hb),this.T.start())):(Pn(this.j,this.m,o,null),sa(this,o)),l==4&&fn(this),this.i&&!this.I&&(l==4?gd(this.l,this):(this.i=!1,er(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),fn(this),As(this)}}}catch{}finally{}};function Kf(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Gf(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=eb(e,n),r==Wr){t==4&&(e.o=4,Ut(14),s=!1),Pn(e.j,e.m,null,"[Incomplete Response]");break}else if(r==ea){e.o=4,Ut(15),Pn(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Pn(e.j,e.m,r,null),sa(e,r);Kf(e)&&r!=Wr&&r!=ea&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ut(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),dc(t),t.K=!0,Ut(11))):(Pn(e.j,e.m,n,"[Invalid Chunked Response]"),fn(e),As(e))}N.hb=function(){if(this.g){var e=Ce(this.g),t=this.g.fa();this.C<t.length&&(Ri(this),Gf(this,e,t),this.i&&e!=4&&er(this))}};function eb(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Wr:(n=Number(t.substring(n,s)),isNaN(n)?ea:(s+=1,s+n>t.length?Wr:(t=t.substr(s,n),e.C=s+n,t)))}N.cancel=function(){this.I=!0,fn(this)};function er(e){e.V=Date.now()+e.O,zf(e,e.O)}function zf(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Js(Rt(e.gb,e),t)}function Ri(e){e.B&&(P.clearTimeout(e.B),e.B=null)}N.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(J0(this.j,this.A),this.K!=2&&(Us(),Ut(17)),fn(this),this.o=2,As(this)):zf(this,this.V-e)};function As(e){e.l.G==0||e.I||gd(e.l,e)}function fn(e){Ri(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,nc(e.T),Pf(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function sa(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ra(n.h,e))){if(!e.J&&ra(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Xr(n),Pi(n);else break t;fc(n),Ut(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Js(Rt(n.cb,n),6e3));if(1>=ed(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else dn(n,11)}else if((e.J||n.g==e)&&Xr(n),!Gr(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const I=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=s.h;i.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ac(i,i.h),i.h=null))}if(s.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,at(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=vd(s,s.H?s.ka:null,s.V),o.J){nd(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ri(a),er(a)),s.g=o}else dd(s);0<n.i.length&&Vi(n)}else u[0]!="stop"&&u[0]!="close"||dn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?dn(n,7):hc(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Us(4)}catch{}}function nb(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ii(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function sb(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ii(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Wf(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ii(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=sb(e),s=nb(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Qf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rb(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function yn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof yn){this.h=t!==void 0?t:e.h,Qr(this,e.j),this.s=e.s,this.g=e.g,Yr(this,e.m),this.l=e.l,t=e.i;var n=new Bs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tl(this,n),this.o=e.o}else e&&(n=String(e).match(Qf))?(this.h=!!t,Qr(this,n[1]||"",!0),this.s=vs(n[2]||""),this.g=vs(n[3]||"",!0),Yr(this,n[4]),this.l=vs(n[5]||"",!0),tl(this,n[6]||"",!0),this.o=vs(n[7]||"")):(this.h=!!t,this.i=new Bs(null,this.h))}yn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ws(t,el,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ws(t,el,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ws(n,n.charAt(0)=="/"?ab:ob,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ws(n,ub)),e.join("")};function Ne(e){return new yn(e)}function Qr(e,t,n){e.j=n?vs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Yr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tl(e,t,n){t instanceof Bs?(e.i=t,lb(e.i,e.h)):(n||(t=ws(t,cb)),e.i=new Bs(t,e.h))}function at(e,t,n){e.i.set(t,n)}function Mi(e){return at(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function vs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ws(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ib),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ib(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var el=/[#\/\?@]/g,ob=/[#\?:]/g,ab=/[#\?]/g,cb=/[#\?@]/g,ub=/#/g;function Bs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Je(e){e.g||(e.g=new Map,e.h=0,e.i&&rb(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}N=Bs.prototype;N.add=function(e,t){Je(this),this.i=null,e=as(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Yf(e,t){Je(e),t=as(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Xf(e,t){return Je(e),t=as(e,t),e.g.has(t)}N.forEach=function(e,t){Je(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};N.oa=function(){Je(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};N.W=function(e){Je(this);let t=[];if(typeof e=="string")Xf(this,e)&&(t=t.concat(this.g.get(as(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};N.set=function(e,t){return Je(this),this.i=null,e=as(this,e),Xf(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};N.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Jf(e,t,n){Yf(e,t),0<n.length&&(e.i=null,e.g.set(as(e,t),Wa(n)),e.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function as(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function lb(e,t){t&&!e.j&&(Je(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Yf(this,s),Jf(this,r,n))},e)),e.j=t}var hb=class{constructor(t,n){this.h=t,this.g=n}};function Zf(e){this.l=e||fb,P.PerformanceNavigationTiming?(e=P.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(P.g&&P.g.Ga&&P.g.Ga()&&P.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fb=10;function td(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ed(e){return e.h?1:e.g?e.g.size:0}function ra(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ac(e,t){e.g?e.g.add(t):e.h=t}function nd(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Zf.prototype.cancel=function(){if(this.i=sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function sd(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Wa(e.i)}function cc(){}cc.prototype.stringify=function(e){return P.JSON.stringify(e,void 0)};cc.prototype.parse=function(e){return P.JSON.parse(e,void 0)};function db(){this.g=new cc}function pb(e,t,n){const s=n||"";try{Wf(e,function(r,i){let o=r;Ys(r)&&(o=ec(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function gb(e,t){const n=new xi;if(P.Image){const s=new Image;s.onload=br(_r,n,s,"TestLoadImage: loaded",!0,t),s.onerror=br(_r,n,s,"TestLoadImage: error",!1,t),s.onabort=br(_r,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=br(_r,n,s,"TestLoadImage: timeout",!1,t),P.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function _r(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function nr(e){this.l=e.ac||null,this.j=e.jb||!1}At(nr,rc);nr.prototype.g=function(){return new Li(this.l,this.j)};nr.prototype.i=function(e){return function(){return e}}({});function Li(e,t){It.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=uc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}At(Li,It);var uc=0;N=Li.prototype;N.open=function(e,t){if(this.readyState!=uc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,js(this)};N.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||P).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=uc};N.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rd(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function rd(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}N.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sr(this):js(this),this.readyState==3&&rd(this)}};N.Va=function(e){this.g&&(this.response=this.responseText=e,sr(this))};N.Ua=function(e){this.g&&(this.response=e,sr(this))};N.ga=function(){this.g&&sr(this)};function sr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,js(e)}N.setRequestHeader=function(e,t){this.v.append(e,t)};N.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function js(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var mb=P.JSON.parse;function ht(e){It.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=id,this.K=this.L=!1}At(ht,It);var id="",yb=/^https?$/i,vb=["POST","PUT"];N=ht.prototype;N.Ka=function(e){this.L=e};N.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ta.g(),this.C=this.u?Zu(this.u):Zu(ta),this.g.onreadystatechange=Rt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){nl(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=P.FormData&&e instanceof P.FormData,!(0<=Ef(vb,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cd(this),0<this.B&&((this.K=wb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.qa,this)):this.A=sc(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){nl(this,i)}};function wb(e){return Qn&&F0()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}N.qa=function(){typeof za<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))};function nl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,od(e),Fi(e)}function od(e){e.D||(e.D=!0,St(e,"complete"),St(e,"error"))}N.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,St(this,"complete"),St(this,"abort"),Fi(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fi(this,!0)),ht.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?ad(this):this.fb())};N.fb=function(){ad(this)};function ad(e){if(e.h&&typeof za<"u"&&(!e.C[1]||Ce(e)!=4||e.aa()!=2)){if(e.v&&Ce(e)==4)sc(e.Ha,0,e);else if(St(e,"readystatechange"),Ce(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Qf)[1]||null;if(!r&&P.self&&P.self.location){var i=P.self.location.protocol;r=i.substr(0,i.length-1)}s=!yb.test(r?r.toLowerCase():"")}n=s}if(n)St(e,"complete"),St(e,"success");else{e.m=6;try{var o=2<Ce(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",od(e)}}finally{Fi(e)}}}}function Fi(e,t){if(e.g){cd(e);const n=e.g,s=e.C[0]?Kr:null;e.g=null,e.C=null,t||St(e,"ready");try{n.onreadystatechange=s}catch{}}}function cd(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(P.clearTimeout(e.A),e.A=null)}function Ce(e){return e.g?e.g.readyState:0}N.aa=function(){try{return 2<Ce(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),mb(t)}};function sl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case id:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ud(e){let t="";return Ya(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function lc(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ud(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):at(e,t,n))}function ms(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ld(e){this.Ca=0,this.i=[],this.j=new xi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ms("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ms("baseRetryDelayMs",5e3,e),this.bb=ms("retryDelaySeedMs",1e4,e),this.$a=ms("forwardChannelMaxRetries",2,e),this.ta=ms("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Zf(e&&e.concurrentRequestLimit),this.Fa=new db,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=ld.prototype;N.ma=8;N.G=1;function hc(e){if(hd(e),e.G==3){var t=e.U++,n=Ne(e.F);at(n,"SID",e.I),at(n,"RID",t),at(n,"TYPE","terminate"),rr(e,n),t=new tr(e,e.j,t,void 0),t.K=2,t.v=Mi(Ne(n)),n=!1,P.navigator&&P.navigator.sendBeacon&&(n=P.navigator.sendBeacon(t.v.toString(),"")),!n&&P.Image&&(new Image().src=t.v,n=!0),n||(t.g=wd(t.l,null),t.g.da(t.v)),t.F=Date.now(),er(t)}yd(e)}function Pi(e){e.g&&(dc(e),e.g.cancel(),e.g=null)}function hd(e){Pi(e),e.u&&(P.clearTimeout(e.u),e.u=null),Xr(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&P.clearTimeout(e.m),e.m=null)}function Vi(e){td(e.h)||e.m||(e.m=!0,Rf(e.Ja,e),e.C=0)}function bb(e,t){return ed(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Js(Rt(e.Ja,e,t),md(e,e.C)),e.C++,!0)}N.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new tr(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Cf(i),Sf(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=fd(this,r,t),n=Ne(this.F),at(n,"RID",e),at(n,"CVER",22),this.D&&at(n,"X-HTTP-Session-Id",this.D),rr(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(ud(i)))+"&"+t:this.o&&lc(n,this.o,i)),ac(this.h,r),this.Ya&&at(n,"TYPE","init"),this.O?(at(n,"$req",t),at(n,"SID","null"),r.Z=!0,na(r,n,null)):na(r,n,t),this.G=2}}else this.G==3&&(e?rl(this,e):this.i.length==0||td(this.h)||rl(this))};function rl(e,t){var n;t?n=t.m:n=e.U++;const s=Ne(e.F);at(s,"SID",e.I),at(s,"RID",n),at(s,"AID",e.T),rr(e,s),e.o&&e.s&&lc(s,e.o,e.s),n=new tr(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=fd(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ac(e.h,n),na(n,s,t)}function rr(e,t){e.ia&&Ya(e.ia,function(n,s){at(t,s,n)}),e.l&&Wf({},function(n,s){at(t,s,n)})}function fd(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Rt(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{pb(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function dd(e){e.g||e.u||(e.Z=1,Rf(e.Ia,e),e.A=0)}function fc(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Js(Rt(e.Ia,e),md(e,e.A)),e.A++,!0)}N.Ia=function(){if(this.u=null,pd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Js(Rt(this.eb,this),e)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ut(10),Pi(this),pd(this))};function dc(e){e.B!=null&&(P.clearTimeout(e.B),e.B=null)}function pd(e){e.g=new tr(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ne(e.sa);at(t,"RID","rpc"),at(t,"SID",e.I),at(t,"CI",e.L?"0":"1"),at(t,"AID",e.T),at(t,"TYPE","xmlhttp"),rr(e,t),e.o&&e.s&&lc(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Mi(Ne(t)),n.s=null,n.P=!0,Hf(n,e)}N.cb=function(){this.v!=null&&(this.v=null,Pi(this),fc(this),Ut(19))};function Xr(e){e.v!=null&&(P.clearTimeout(e.v),e.v=null)}function gd(e,t){var n=null;if(e.g==t){Xr(e),dc(e),e.g=null;var s=2}else if(ra(e.h,t))n=t.D,nd(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Ni(),St(s,new Uf(s,n)),Vi(e)}else dd(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&bb(e,t)||s==2&&fc(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:dn(e,5);break;case 4:dn(e,10);break;case 3:dn(e,6);break;default:dn(e,2)}}}function md(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function dn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Rt(e.kb,e);n||(n=new yn("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||Qr(n,"https"),Mi(n)),gb(n.toString(),s)}else Ut(2);e.G=0,e.l&&e.l.va(t),yd(e),hd(e)}N.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function yd(e){if(e.G=0,e.la=[],e.l){const t=sd(e.h);(t.length!=0||e.i.length!=0)&&(zu(e.la,t),zu(e.la,e.i),e.h.i.length=0,Wa(e.i),e.i.length=0),e.l.ua()}}function vd(e,t,n){var s=n instanceof yn?Ne(n):new yn(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Yr(s,s.m);else{var r=P.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new yn(null,void 0);s&&Qr(i,s),t&&(i.g=t),r&&Yr(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&at(s,n,t),at(s,"VER",e.ma),rr(e,s),s}function wd(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new ht(new nr({jb:!0})):new ht(e.ra),t.Ka(e.H),t}function bd(){}N=bd.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function Jr(){if(Qn&&!(10<=Number(P0)))throw Error("Environmental error: no available transport.")}Jr.prototype.g=function(e,t){return new Yt(e,t)};function Yt(e,t){It.call(this),this.g=new ld(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Gr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Gr(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new cs(this)}At(Yt,It);Yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ut(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=vd(e,null,e.V),Vi(e)};Yt.prototype.close=function(){hc(this.g)};Yt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ec(e),e=n);t.i.push(new hb(t.ab++,e)),t.G==3&&Vi(t)};Yt.prototype.M=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,Yt.X.M.call(this)};function Ed(e){ic.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}At(Ed,ic);function _d(){oc.call(this),this.status=1}At(_d,oc);function cs(e){this.g=e}At(cs,bd);cs.prototype.xa=function(){St(this.g,"a")};cs.prototype.wa=function(e){St(this.g,new Ed(e))};cs.prototype.va=function(e){St(this.g,new _d)};cs.prototype.ua=function(){St(this.g,"b")};Jr.prototype.createWebChannel=Jr.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;Oi.NO_ERROR=0;Oi.TIMEOUT=8;Oi.HTTP_ERROR=6;Bf.COMPLETE="complete";jf.EventType=Zs;Zs.OPEN="a";Zs.CLOSE="b";Zs.ERROR="c";Zs.MESSAGE="d";It.prototype.listen=It.prototype.N;ht.prototype.listenOnce=ht.prototype.O;ht.prototype.getLastError=ht.prototype.Oa;ht.prototype.getLastErrorCode=ht.prototype.Ea;ht.prototype.getStatus=ht.prototype.aa;ht.prototype.getResponseJson=ht.prototype.Sa;ht.prototype.getResponseText=ht.prototype.fa;ht.prototype.send=ht.prototype.da;ht.prototype.setWithCredentials=ht.prototype.Ka;var Eb=function(){return new Jr},_b=function(){return Ni()},Io=Oi,Tb=Bf,Ib=Cn,il={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Cb=nr,Tr=jf,Sb=ht;const ol="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Ba("@firebase/firestore");function al(){return Tn.logLevel}function O(e,...t){if(Tn.logLevel<=X.DEBUG){const n=t.map(pc);Tn.debug(`Firestore (${us}): ${e}`,...n)}}function Oe(e,...t){if(Tn.logLevel<=X.ERROR){const n=t.map(pc);Tn.error(`Firestore (${us}): ${e}`,...n)}}function ia(e,...t){if(Tn.logLevel<=X.WARN){const n=t.map(pc);Tn.warn(`Firestore (${us}): ${e}`,...n)}}function pc(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e="Unexpected state"){const t=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: `+e;throw Oe(t),new Error(t)}function rt(e,t){e||F()}function j(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Ye{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ab{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class Db{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xb{constructor(t){this.t=t,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(rt(typeof s.accessToken=="string"),new Td(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new Dt(t)}}class Nb{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(rt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ob{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Nb(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kb{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rb{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(rt(typeof n.token=="string"),this.A=n.token,new kb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Mb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function J(e,t){return e<t?-1:e>t?1:0}function Yn(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new vt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new vt(0,0))}static max(){return new U(new vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,n,s){n===void 0?n=0:n>t.length&&F(),s===void 0?s=t.length-n:s>t.length-n&&F(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return qs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof qs?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ot extends qs{construct(t,n,s){return new ot(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new D(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ot(n)}static emptyPath(){return new ot([])}}const Lb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends qs{construct(t,n,s){return new Ot(t,n,s)}static isValidIdentifier(t){return Lb.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ot(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new D(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ot(n)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(ot.fromString(t))}static fromName(t){return new k(ot.fromString(t).popFirst(5))}static empty(){return new k(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ot.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new ot(t.slice()))}}function Fb(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=U.fromTimestamp(s===1e9?new vt(n+1,0):new vt(n,s));return new ze(r,k.empty(),t)}function Pb(e){return new ze(e.readTime,e.key,-1)}class ze{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new ze(U.min(),k.empty(),-1)}static max(){return new ze(U.max(),k.empty(),-1)}}function Vb(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=k.comparator(e.documentKey,t.documentKey),n!==0?n:J(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ub{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e){if(e.code!==y.FAILED_PRECONDITION||e.message!==$b)throw e;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new E((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):E.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):E.reject(n)}static resolve(t){return new E((n,s)=>{n(t)})}static reject(t){return new E((n,s)=>{s(t)})}static waitFor(t){return new E((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=E.resolve(!1);for(const s of t)n=n.next(r=>r?E.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new E((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new E((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function or(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}gc.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Hs{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hs&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Sn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Cd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){return e==null}function Zr(e){return e===0&&1/e==-1/0}function jb(e){return typeof e=="number"&&Number.isInteger(e)&&!Zr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Ft(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new Ft(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(e){if(rt(!!e),typeof e=="string"){let t=0;const n=qb.exec(e);if(rt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:gt(e.seconds),nanos:gt(e.nanos)}}function gt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Xn(e){return typeof e=="string"?Ft.fromBase64String(e):Ft.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ad(e){const t=e.mapValue.fields.__previous_value__;return Sd(t)?Ad(t):t}function Ks(e){const t=We(e.mapValue.fields.__local_write_time__.timestampValue);return new vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function In(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Sd(e)?4:Hb(e)?9007199254740991:10:F()}function Ee(e,t){if(e===t)return!0;const n=In(e);if(n!==In(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ks(e).isEqual(Ks(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=We(s.timestampValue),o=We(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Xn(s.bytesValue).isEqual(Xn(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return gt(s.geoPointValue.latitude)===gt(r.geoPointValue.latitude)&&gt(s.geoPointValue.longitude)===gt(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return gt(s.integerValue)===gt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=gt(s.doubleValue),o=gt(r.doubleValue);return i===o?Zr(i)===Zr(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Yn(e.arrayValue.values||[],t.arrayValue.values||[],Ee);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(cl(i)!==cl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ee(i[a],o[a])))return!1;return!0}(e,t);default:return F()}}function Gs(e,t){return(e.values||[]).find(n=>Ee(n,t))!==void 0}function Jn(e,t){if(e===t)return 0;const n=In(e),s=In(t);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=gt(r.integerValue||r.doubleValue),a=gt(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ul(e.timestampValue,t.timestampValue);case 4:return ul(Ks(e),Ks(t));case 5:return J(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Xn(r),a=Xn(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=J(o[c],a[c]);if(u!==0)return u}return J(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=J(gt(r.latitude),gt(i.latitude));return o!==0?o:J(gt(r.longitude),gt(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Jn(o[c],a[c]);if(u)return u}return J(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Ir.mapValue&&i===Ir.mapValue)return 0;if(r===Ir.mapValue)return 1;if(i===Ir.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=J(a[l],u[l]);if(h!==0)return h;const d=Jn(o[a[l]],c[u[l]]);if(d!==0)return d}return J(a.length,u.length)}(e.mapValue,t.mapValue);default:throw F()}}function ul(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return J(e,t);const n=We(e),s=We(t),r=J(n.seconds,s.seconds);return r!==0?r:J(n.nanos,s.nanos)}function Zn(e){return oa(e)}function oa(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=We(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Xn(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,k.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=oa(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${oa(s.fields[a])}`;return i+"}"}(e.mapValue):F();var t,n}function ll(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function aa(e){return!!e&&"integerValue"in e}function mc(e){return!!e&&"arrayValue"in e}function hl(e){return!!e&&"nullValue"in e}function fl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nr(e){return!!e&&"mapValue"in e}function Ds(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Sn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ds(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ds(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Hb(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,n){this.position=t,this.inclusive=n}}function dl(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=k.comparator(k.fromName(o.referenceValue),n.key):s=Jn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function pl(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ee(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{}class yt extends Dd{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Gb(t,n,s):n==="array-contains"?new Qb(t,s):n==="in"?new Yb(t,s):n==="not-in"?new Xb(t,s):n==="array-contains-any"?new Jb(t,s):new yt(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new zb(t,s):new Wb(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jn(n,this.value)):n!==null&&In(this.value)===In(n)&&this.matchesComparison(Jn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class le extends Dd{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new le(t,n)}matches(t){return xd(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function xd(e){return e.op==="and"}function Nd(e){return Kb(e)&&xd(e)}function Kb(e){for(const t of e.filters)if(t instanceof le)return!1;return!0}function ca(e){if(e instanceof yt)return e.field.canonicalString()+e.op.toString()+Zn(e.value);if(Nd(e))return e.filters.map(t=>ca(t)).join(",");{const t=e.filters.map(n=>ca(n)).join(",");return`${e.op}(${t})`}}function Od(e,t){return e instanceof yt?function(n,s){return s instanceof yt&&n.op===s.op&&n.field.isEqual(s.field)&&Ee(n.value,s.value)}(e,t):e instanceof le?function(n,s){return s instanceof le&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Od(i,s.filters[o]),!0):!1}(e,t):void F()}function kd(e){return e instanceof yt?function(t){return`${t.field.canonicalString()} ${t.op} ${Zn(t.value)}`}(e):e instanceof le?function(t){return t.op.toString()+" {"+t.getFilters().map(kd).join(" ,")+"}"}(e):"Filter"}class Gb extends yt{constructor(t,n,s){super(t,n,s),this.key=k.fromName(s.referenceValue)}matches(t){const n=k.comparator(t.key,this.key);return this.matchesComparison(n)}}class zb extends yt{constructor(t,n){super(t,"in",n),this.keys=Rd("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Wb extends yt{constructor(t,n){super(t,"not-in",n),this.keys=Rd("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Rd(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>k.fromName(s.referenceValue))}class Qb extends yt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return mc(n)&&Gs(n.arrayValue,this.value)}}class Yb extends yt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Gs(this.value.arrayValue,n)}}class Xb extends yt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Gs(this.value.arrayValue,n)}}class Jb extends yt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!mc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Gs(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Zb(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n){this.comparator=t,this.root=n||Ct.EMPTY}insert(t,n){return new Et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cr(this.root,t,this.comparator,!0)}}class Cr{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ct{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??Ct.RED,this.left=r??Ct.EMPTY,this.right=i??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new Ct(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new gl(this.data.getIterator())}getIteratorFrom(t){return new gl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof wt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new wt(this.comparator);return n.data=t,n}}class gl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.fields=t,t.sort(Ot.comparator)}static empty(){return new Wt([])}unionWith(t){let n=new wt(Ot.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Yn(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Nr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ds(n)}setAll(t){let n=Ot.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ds(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Nr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ee(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Nr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Sn(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new jt(Ds(this.value))}}function Md(e){const t=[];return Sn(e.fields,(n,s)=>{const r=new Ot([n]);if(Nr(s)){const i=Md(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new xt(t,0,U.min(),U.min(),U.min(),jt.empty(),0)}static newFoundDocument(t,n,s,r){return new xt(t,1,n,U.min(),s,r,0)}static newNoDocument(t,n){return new xt(t,2,n,U.min(),U.min(),jt.empty(),0)}static newUnknownDocument(t,n){return new xt(t,3,n,U.min(),U.min(),jt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function ml(e,t=null,n=[],s=[],r=null,i=null,o=null){return new tE(e,t,n,s,r,i,o)}function yc(e){const t=j(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>ca(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),$i(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Zn(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Zn(s)).join(",")),t.ft=n}return t.ft}function vc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Zb(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Od(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!pl(e.startAt,t.startAt)&&pl(e.endAt,t.endAt)}function ua(e){return k.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function eE(e,t,n,s,r,i,o,a){return new ls(e,t,n,s,r,i,o,a)}function wc(e){return new ls(e)}function yl(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function bc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ui(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ld(e){return e.collectionGroup!==null}function Hn(e){const t=j(e);if(t.dt===null){t.dt=[];const n=Ui(t),s=bc(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new qn(n)),t.dt.push(new qn(Ot.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new qn(Ot.keyField(),i))}}}return t.dt}function ke(e){const t=j(e);if(!t._t)if(t.limitType==="F")t._t=ml(t.path,t.collectionGroup,Hn(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Hn(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new qn(i.field,o))}const s=t.endAt?new ti(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ti(t.startAt.position,t.startAt.inclusive):null;t._t=ml(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function la(e,t){t.getFirstInequalityField(),Ui(e);const n=e.filters.concat([t]);return new ls(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ha(e,t,n){return new ls(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bi(e,t){return vc(ke(e),ke(t))&&e.limitType===t.limitType}function Fd(e){return`${yc(ke(e))}|lt:${e.limitType}`}function fa(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>kd(s)).join(", ")}]`),$i(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Zn(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Zn(s)).join(",")),`Target(${n})`}(ke(e))}; limitType=${e.limitType})`}function ji(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):k.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Hn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=dl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Hn(n),s)||n.endAt&&!function(r,i,o){const a=dl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Hn(n),s))}(e,t)}function nE(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Pd(e){return(t,n)=>{let s=!1;for(const r of Hn(e)){const i=sE(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function sE(e,t,n){const s=e.field.isKeyField()?k.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Jn(a,c):F()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zr(t)?"-0":t}}function $d(e){return{integerValue:""+e}}function rE(e,t){return jb(t)?$d(t):Vd(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this._=void 0}}function iE(e,t,n){return e instanceof ei?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof zs?Bd(e,t):e instanceof Ws?jd(e,t):function(s,r){const i=Ud(s,r),o=vl(i)+vl(s.gt);return aa(i)&&aa(s.gt)?$d(o):Vd(s.yt,o)}(e,t)}function oE(e,t,n){return e instanceof zs?Bd(e,t):e instanceof Ws?jd(e,t):n}function Ud(e,t){return e instanceof ni?aa(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class ei extends qi{}class zs extends qi{constructor(t){super(),this.elements=t}}function Bd(e,t){const n=qd(t);for(const s of e.elements)n.some(r=>Ee(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ws extends qi{constructor(t){super(),this.elements=t}}function jd(e,t){let n=qd(t);for(const s of e.elements)n=n.filter(r=>!Ee(r,s));return{arrayValue:{values:n}}}class ni extends qi{constructor(t,n){super(),this.yt=t,this.gt=n}}function vl(e){return gt(e.integerValue||e.doubleValue)}function qd(e){return mc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function aE(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof zs&&s instanceof zs||n instanceof Ws&&s instanceof Ws?Yn(n.elements,s.elements,Ee):n instanceof ni&&s instanceof ni?Ee(n.gt,s.gt):n instanceof ei&&s instanceof ei}(e.transform,t.transform)}class cE{constructor(t,n){this.version=t,this.transformResults=n}}class ue{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ue}static exists(t){return new ue(void 0,t)}static updateTime(t){return new ue(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Or(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hi{}function Hd(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ec(e.key,ue.none()):new ar(e.key,e.data,ue.none());{const n=e.data,s=jt.empty();let r=new wt(Ot.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ze(e.key,s,new Wt(r.toArray()),ue.none())}}function uE(e,t,n){e instanceof ar?function(s,r,i){const o=s.value.clone(),a=bl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ze?function(s,r,i){if(!Or(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=bl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Kd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function xs(e,t,n,s){return e instanceof ar?function(r,i,o,a){if(!Or(r.precondition,i))return o;const c=r.value.clone(),u=El(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ze?function(r,i,o,a){if(!Or(r.precondition,i))return o;const c=El(r.fieldTransforms,a,i),u=i.data;return u.setAll(Kd(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return Or(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function lE(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Ud(s.transform,r||null);i!=null&&(n===null&&(n=jt.empty()),n.set(s.field,i))}return n||null}function wl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Yn(n,s,(r,i)=>aE(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ar extends Hi{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ze extends Hi{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kd(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function bl(e,t,n){const s=new Map;rt(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,oE(o,a,n[r]))}return s}function El(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,iE(i,o,t))}return s}class Ec extends Hi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hE extends Hi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,W;function dE(e){switch(e){default:return F();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Gd(e){if(e===void 0)return Oe("GRPC error has no .code"),y.UNKNOWN;switch(e){case pt.OK:return y.OK;case pt.CANCELLED:return y.CANCELLED;case pt.UNKNOWN:return y.UNKNOWN;case pt.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case pt.INTERNAL:return y.INTERNAL;case pt.UNAVAILABLE:return y.UNAVAILABLE;case pt.UNAUTHENTICATED:return y.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case pt.NOT_FOUND:return y.NOT_FOUND;case pt.ALREADY_EXISTS:return y.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return y.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case pt.ABORTED:return y.ABORTED;case pt.OUT_OF_RANGE:return y.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return y.UNIMPLEMENTED;case pt.DATA_LOSS:return y.DATA_LOSS;default:return F()}}(W=pt||(pt={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Sn(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Cd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Et(k.comparator);function Re(){return pE}const zd=new Et(k.comparator);function bs(...e){let t=zd;for(const n of e)t=t.insert(n.key,n);return t}function Wd(e){let t=zd;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function pn(){return Ns()}function Qd(){return Ns()}function Ns(){return new hs(e=>e.toString(),(e,t)=>e.isEqual(t))}const gE=new Et(k.comparator),mE=new wt(k.comparator);function z(...e){let t=mE;for(const n of e)t=t.add(n);return t}const yE=new wt(J);function Yd(){return yE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,cr.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Ki(U.min(),r,Yd(),Re(),z())}}class cr{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new cr(s,n,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Xd{constructor(t,n){this.targetId=t,this.Et=n}}class Jd{constructor(t,n,s=Ft.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _l{constructor(){this.At=0,this.Rt=Il(),this.bt=Ft.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=z(),n=z(),s=z();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:F()}}),new cr(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=Il()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class vE{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Re(),this.qt=Tl(),this.Ut=new wt(J)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:F()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(t){const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(ua(i))if(s===0){const o=new k(i.path);this.Qt(n,o,xt.newNoDocument(o,U.min()))}else rt(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&ua(a.target)){const c=new k(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,xt.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=z();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Ki(t,n,this.Ut,this.Lt,s);return this.Lt=Re(),this.qt=Tl(),this.Ut=new wt(J),r}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new _l,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new wt(J),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||O("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new _l),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Tl(){return new Et(k.comparator)}function Il(){return new Et(k.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),EE=(()=>({and:"AND",or:"OR"}))();class _E{constructor(t,n){this.databaseId=t,this.wt=n}}function si(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zd(e,t){return e.wt?t.toBase64():t.toUint8Array()}function TE(e,t){return si(e,t.toTimestamp())}function be(e){return rt(!!e),U.fromTimestamp(function(t){const n=We(t);return new vt(n.seconds,n.nanos)}(e))}function _c(e,t){return function(n){return new ot(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function tp(e){const t=ot.fromString(e);return rt(rp(t)),t}function da(e,t){return _c(e.databaseId,t.path)}function Co(e,t){const n=tp(t);if(n.get(1)!==e.databaseId.projectId)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new k(ep(n))}function pa(e,t){return _c(e.databaseId,t)}function IE(e){const t=tp(e);return t.length===4?ot.emptyPath():ep(t)}function ga(e){return new ot(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ep(e){return rt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Cl(e,t,n){return{name:da(e,t),fields:n.value.mapValue.fields}}function CE(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.wt?(rt(u===void 0||typeof u=="string"),Ft.fromBase64String(u||"")):(rt(u===void 0||u instanceof Uint8Array),Ft.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:Gd(c.code);return new D(u,c.message||"")}(o);n=new Jd(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Co(e,s.document.name),i=be(s.document.updateTime),o=s.document.createTime?be(s.document.createTime):U.min(),a=new jt({mapValue:{fields:s.document.fields}}),c=xt.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new kr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Co(e,s.document),i=s.readTime?be(s.readTime):U.min(),o=xt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new kr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Co(e,s.document),i=s.removedTargetIds||[];n=new kr([],i,r,null)}else{if(!("filter"in t))return F();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new fE(r),o=s.targetId;n=new Xd(o,i)}}return n}function SE(e,t){let n;if(t instanceof ar)n={update:Cl(e,t.key,t.value)};else if(t instanceof Ec)n={delete:da(e,t.key)};else if(t instanceof Ze)n={update:Cl(e,t.key,t.data),updateMask:LE(t.fieldMask)};else{if(!(t instanceof hE))return F();n={verify:da(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ei)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ws)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ni)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw F()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:TE(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(e,t.precondition)),n}function AE(e,t){return e&&e.length>0?(rt(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?be(s.updateTime):be(r);return i.isEqual(U.min())&&(i=be(r)),new cE(i,s.transformResults||[])}(n,t))):[]}function DE(e,t){return{documents:[pa(e,t.path)]}}function xE(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=pa(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=pa(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return sp(le.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ln(l.field),direction:kE(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||$i(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function NE(e){let t=IE(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){rt(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=np(l);return h instanceof le&&Nd(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new qn(Fn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,$i(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ti(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ti(d,h)}(n.endAt)),eE(t,r,o,i,a,"F",c,u)}function OE(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function np(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Fn(t.unaryFilter.field);return yt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Fn(t.unaryFilter.field);return yt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fn(t.unaryFilter.field);return yt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fn(t.unaryFilter.field);return yt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(e):e.fieldFilter!==void 0?function(t){return yt.create(Fn(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return le.create(t.compositeFilter.filters.map(n=>np(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(e):F()}function kE(e){return wE[e]}function RE(e){return bE[e]}function ME(e){return EE[e]}function Ln(e){return{fieldPath:e.canonicalString()}}function Fn(e){return Ot.fromServerFormat(e.fieldPath)}function sp(e){return e instanceof yt?function(t){if(t.op==="=="){if(fl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(hl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(hl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:RE(t.op),value:t.value}}}(e):e instanceof le?function(t){const n=t.getFilters().map(s=>sp(s));return n.length===1?n[0]:{compositeFilter:{op:ME(t.op),filters:n}}}(e):F()}function LE(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rp(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&uE(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=xs(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=xs(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Qd();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Hd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(U.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),z())}isEqual(t){return this.batchId===t.batchId&&Yn(this.mutations,t.mutations,(n,s)=>wl(n,s))&&Yn(this.baseMutations,t.baseMutations,(n,s)=>wl(n,s))}}class Tc{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){rt(t.mutations.length===s.length);let r=gE;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Tc(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,n,s,r,i=U.min(),o=U.min(),a=Ft.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new wn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(t){this.ie=t}}function $E(e){const t=NE({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ha(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.Je=new BE}addToCollectionParentIndex(t,n){return this.Je.add(n),E.resolve()}getCollectionParents(t,n){return E.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return E.resolve()}deleteFieldIndex(t,n){return E.resolve()}getDocumentsMatchingTarget(t,n){return E.resolve(null)}getIndexType(t,n){return E.resolve(0)}getFieldIndexes(t,n){return E.resolve([])}getNextCollectionGroupToUpdate(t){return E.resolve(null)}getMinOffset(t,n){return E.resolve(ze.min())}getMinOffsetFromCollectionGroup(t,n){return E.resolve(ze.min())}updateCollectionGroup(t,n,s){return E.resolve()}updateIndexEntries(t,n){return E.resolve()}}class BE{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new wt(ot.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new wt(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new ts(0)}static vn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.changes=new hs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&xs(s.mutation,r,Wt.empty(),vt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,z()).next(()=>s))}getLocalViewOfDocuments(t,n,s=z()){const r=pn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=bs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=pn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,z()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Re();const o=Ns(),a=Ns();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Ze)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),xs(l.mutation,u,l.mutation.getFieldMask(),vt.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new qE(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ns();let r=new Et((o,a)=>o-a),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Wt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||z()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Qd();l.forEach(d=>{if(!i.has(d)){const g=Hd(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ld(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):E.resolve(pn());let a=-1,c=i;return o.next(u=>E.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?E.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,z())).next(l=>({batchId:a,changes:Wd(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new k(n)).next(s=>{let r=bs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=bs();return this.indexManager.getCollectionParents(t,r).next(o=>E.forEach(o,a=>{const c=function(u,l){return new ls(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,xt.newInvalidDocument(u)))});let o=bs();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&xs(u.mutation,c,Wt.empty(),vt.now()),ji(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return E.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:be(s.createTime)}),E.resolve()}getNamedQuery(t,n){return E.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:$E(s.bundledQuery),readTime:be(s.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.overlays=new Et(k.comparator),this.es=new Map}getOverlay(t,n){return E.resolve(this.overlays.get(n))}getOverlays(t,n){const s=pn();return E.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.oe(t,n,i)}),E.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),E.resolve()}getOverlaysForCollection(t,n,s){const r=pn(),i=n.length+1,o=new k(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return E.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new Et((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=pn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=pn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return E.resolve(a)}oe(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new PE(n,s));let i=this.es.get(n);i===void 0&&(i=z(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.ns=new wt(Tt.ss),this.rs=new wt(Tt.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new Tt(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new Tt(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new k(new ot([])),s=new Tt(n,t),r=new Tt(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new k(new ot([])),s=new Tt(n,t),r=new Tt(n,t+1);let i=z();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Tt(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Tt{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return k.comparator(t.key,n.key)||J(t._s,n._s)}static os(t,n){return J(t._s,n._s)||k.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new wt(Tt.ss)}checkEmpty(t){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FE(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Tt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(t,n){return E.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Tt(n,0),r=new Tt(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new wt(J);return n.forEach(r=>{const i=new Tt(r,0),o=new Tt(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),E.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;k.isDocumentKey(i)||(i=i.child(""));const o=new Tt(new k(i),0);let a=new wt(J);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),E.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){rt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return E.forEach(n.mutations,r=>{const i=new Tt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new Tt(n,0),r=this.gs.firstAfterOrEqual(s);return E.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,E.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t){this.Es=t,this.docs=new Et(k.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(t,n){let s=Re();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():xt.newInvalidDocument(r))}),E.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=Re();const o=n.path,a=new k(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Vb(Pb(l),s)<=0||(r.has(l.key)||ji(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(t,n,s,r){F()}As(t,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new QE(this)}getSize(t){return E.resolve(this.size)}}class QE extends jE{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),E.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(t){this.persistence=t,this.Rs=new hs(n=>yc(n),vc),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ic,this.targetCount=0,this.vs=ts.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),E.resolve()}getLastRemoteSnapshotVersion(t){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return E.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),E.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new ts(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,E.resolve()}updateTargetData(t,n){return this.Dn(n),E.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),E.waitFor(i).next(()=>r)}getTargetCount(t){return E.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return E.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),E.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),E.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return E.resolve(s)}containsKey(t,n){return E.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new gc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new YE(this),this.indexManager=new UE,this.remoteDocumentCache=function(s){return new WE(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new VE(n),this.Ns=new KE(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new GE,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new zE(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){O("MemoryPersistence","Starting transaction:",t);const r=new JE(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return E.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class JE extends Ub{constructor(t){super(),this.currentSequenceNumber=t}}class Cc{constructor(t){this.persistence=t,this.Fs=new Ic,this.$s=null}static Bs(t){return new Cc(t)}get Ls(){if(this.$s)return this.$s;throw F()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),E.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),E.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),E.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ls,s=>{const r=k.fromPath(s);return this.qs(t,r).next(i=>{i||n.removeEntry(r,U.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return E.or([()=>E.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=z(),r=z();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Sc(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(yl(n))return E.resolve(null);let s=ke(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ha(n,null,"F"),s=ke(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=z(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,ha(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,s,r){return yl(n)||r.isEqual(U.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(al()<=X.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fa(n)),this.Bi(t,o,n,Fb(r,-1)))})}Fi(t,n){let s=new wt(Pd(t));return n.forEach((r,i)=>{ji(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return al()<=X.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",fa(n)),this.Ni.getDocumentsMatchingQuery(t,n,ze.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.yt=r,this.qi=new Et(J),this.Ui=new hs(i=>yc(i),vc),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new HE(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function e_(e,t,n,s){return new t_(e,t,n,s)}async function ip(e,t){const n=j(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=z();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function n_(e,t){const n=j(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=E.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(I=>{const _=c.docVersions.get(g);rt(_!==null),I.version.compareTo(_)<0&&(l.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),u.addEntry(I)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function op(e){const t=j(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function s_(e,t){const n=j(e),s=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];t.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?g=g.withResumeToken(Ft.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(I,_,L){return I.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(d,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=Re(),u=z();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(r_(i,o,t.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(U.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function r_(e,t,n){let s=z(),r=z();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Re();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(U.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function i_(e,t){const n=j(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function o_(e,t){const n=j(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,E.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new wn(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function ma(e,t,n){const s=j(e),r=s.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!or(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(r.target)}function Sl(e,t,n){const s=j(e);let r=U.min(),i=z();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=j(a),h=l.Ui.get(u);return h!==void 0?E.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,ke(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:U.min(),n?i:z())).next(a=>(a_(s,nE(t),a),{documents:a,Hi:i})))}function a_(e,t,n){let s=e.Ki.get(t)||U.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class Al{constructor(){this.activeTargetIds=Yd()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class c_{constructor(){this.Lr=new Al,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Al,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);O("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(O("RestConnection","Received: ",c),c),c=>{throw ia("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+us,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=l_[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new Sb;a.setWithCredentials(!0),a.listenOnce(Tb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Io.NO_ERROR:const u=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Io.TIMEOUT:O("Connection",'RPC "'+t+'" timed out'),o(new D(y.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const l=a.getStatus();if(O("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(_)>=0?_:y.UNKNOWN}(d.status);o(new D(g,d.message))}else o(new D(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(y.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Eb(),o=_b(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Cb({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");O("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new h_({Hr:I=>{h?O("Connection","Not sending because WebChannel is closed:",I):(l||(O("Connection","Opening WebChannel transport."),u.open(),l=!0),O("Connection","WebChannel sending:",I),u.send(I))},Jr:()=>u.close()}),g=(I,_,L)=>{I.listen(_,q=>{try{L(q)}catch(Z){setTimeout(()=>{throw Z},0)}})};return g(u,Tr.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),g(u,Tr.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.io())}),g(u,Tr.EventType.ERROR,I=>{h||(h=!0,ia("Connection","WebChannel transport errored:",I),d.io(new D(y.UNAVAILABLE,"The operation could not be completed")))}),g(u,Tr.EventType.MESSAGE,I=>{var _;if(!h){const L=I.data[0];rt(!!L);const q=L,Z=q.error||((_=q[0])===null||_===void 0?void 0:_.error);if(Z){O("Connection","WebChannel received error:",Z);const V=Z.status;let tt=function(Le){const ne=pt[Le];if(ne!==void 0)return Gd(ne)}(V),ft=Z.message;tt===void 0&&(tt=y.INTERNAL,ft="Unknown error status: "+V+" with message "+Z.message),h=!0,d.io(new D(tt,ft)),u.close()}else O("Connection","WebChannel received:",L),d.ro(L)}}),g(o,Ib.STAT_EVENT,I=>{I.stat===il.PROXY?O("Connection","Detected buffering proxy"):I.stat===il.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function So(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e){return new _E(e,!0)}class ap{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ap(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Oe(n.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new D(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class d_ extends cp{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=CE(this.yt,t),s=function(r){if(!("targetChange"in r))return U.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?U.min():i.readTime?be(i.readTime):U.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=ga(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=ua(a)?{documents:DE(r,a)}:{query:xE(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Zd(r,i.resumeToken):i.snapshotVersion.compareTo(U.min())>0&&(o.readTime=si(r,i.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=OE(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=ga(this.yt),n.removeTarget=t,this.Bo(n)}}class p_ extends cp{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=AE(t.writeResults,t.commitTime),s=be(t.commitTime);return this.listener.Zo(s,n)}return rt(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ga(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>SE(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(y.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(y.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class m_{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Oe(n),this.ou=!1):O("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{An(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=j(a);c._u.add(4),await ur(c),c.gu.set("Unknown"),c._u.delete(4),await zi(c)}(this))})}),this.gu=new m_(s,r)}}async function zi(e){if(An(e))for(const t of e.wu)await t(!0)}async function ur(e){for(const t of e.wu)await t(!1)}function up(e,t){const n=j(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),xc(n)?Dc(n):fs(n).ko()&&Ac(n,t))}function lp(e,t){const n=j(e),s=fs(n);n.du.delete(t),s.ko()&&hp(n,t),n.du.size===0&&(s.ko()?s.Fo():An(n)&&n.gu.set("Unknown"))}function Ac(e,t){e.yu.Ot(t.targetId),fs(e).zo(t)}function hp(e,t){e.yu.Ot(t),fs(e).Ho(t)}function Dc(e){e.yu=new vE({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),fs(e).start(),e.gu.uu()}function xc(e){return An(e)&&!fs(e).No()&&e.du.size>0}function An(e){return j(e)._u.size===0}function fp(e){e.yu=void 0}async function v_(e){e.du.forEach((t,n)=>{Ac(e,t)})}async function w_(e,t){fp(e),xc(e)?(e.gu.hu(t),Dc(e)):e.gu.set("Unknown")}async function b_(e,t,n){if(e.gu.set("Online"),t instanceof Jd&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ri(e,s)}else if(t instanceof kr?e.yu.Kt(t):t instanceof Xd?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(U.min()))try{const s=await op(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ft.EMPTY_BYTE_STRING,c.snapshotVersion)),hp(r,a);const u=new wn(c.target,a,1,c.sequenceNumber);Ac(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await ri(e,s)}}async function ri(e,t,n){if(!or(t))throw t;e._u.add(1),await ur(e),e.gu.set("Offline"),n||(n=()=>op(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await zi(e)})}function dp(e,t){return t().catch(n=>ri(e,n,t))}async function Wi(e){const t=j(e),n=Qe(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;E_(t);)try{const r=await i_(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,__(t,r)}catch(r){await ri(t,r)}pp(t)&&gp(t)}function E_(e){return An(e)&&e.fu.length<10}function __(e,t){e.fu.push(t);const n=Qe(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function pp(e){return An(e)&&!Qe(e).No()&&e.fu.length>0}function gp(e){Qe(e).start()}async function T_(e){Qe(e).eu()}async function I_(e){const t=Qe(e);for(const n of e.fu)t.Xo(n.mutations)}async function C_(e,t,n){const s=e.fu.shift(),r=Tc.from(s,t,n);await dp(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Wi(e)}async function S_(e,t){t&&Qe(e).Yo&&await async function(n,s){if(r=s.code,dE(r)&&r!==y.ABORTED){const i=n.fu.shift();Qe(n).Mo(),await dp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wi(n)}var r}(e,t),pp(e)&&gp(e)}async function xl(e,t){const n=j(e);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=An(n);n._u.add(3),await ur(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await zi(n)}async function A_(e,t){const n=j(e);t?(n._u.delete(2),await zi(n)):t||(n._u.add(2),await ur(n),n.gu.set("Unknown"))}function fs(e){return e.pu||(e.pu=function(t,n,s){const r=j(t);return r.su(),new d_(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:v_.bind(null,e),Zr:w_.bind(null,e),Wo:b_.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),xc(e)?Dc(e):e.gu.set("Unknown")):(await e.pu.stop(),fp(e))})),e.pu}function Qe(e){return e.Iu||(e.Iu=function(t,n,s){const r=j(t);return r.su(),new p_(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:T_.bind(null,e),Zr:S_.bind(null,e),tu:I_.bind(null,e),Zo:C_.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Wi(e)):(await e.Iu.stop(),e.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Nc(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oc(e,t){if(Oe("AsyncQueue",`${t}: ${e}`),or(e))return new D(y.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t){this.comparator=t?(n,s)=>t(n,s)||k.comparator(n.key,s.key):(n,s)=>k.comparator(n.key,s.key),this.keyedMap=bs(),this.sortedSet=new Et(this.comparator)}static emptySet(t){return new Kn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Kn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Kn;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.Tu=new Et(k.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):F():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class es{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new es(t,n,Kn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.Au=void 0,this.listeners=[]}}class x_{constructor(){this.queries=new hs(t=>Fd(t),Bi),this.onlineState="Unknown",this.Ru=new Set}}async function N_(e,t){const n=j(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new D_),r)try{i.Au=await n.onListen(s)}catch(o){const a=Oc(o,`Initialization of query '${fa(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&kc(n)}async function O_(e,t){const n=j(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function k_(e,t){const n=j(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&kc(n)}function R_(e,t,n){const s=j(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function kc(e){e.Ru.forEach(t=>{t.next()})}class M_{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new es(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=es.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t){this.key=t}}class yp{constructor(t){this.key=t}}class L_{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=z(),this.mutatedKeys=z(),this.Gu=Pd(t),this.Qu=new Kn(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new Nl,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const d=r.get(l),g=ji(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let L=!1;d&&g?d.data.isEqual(g.data)?I!==_&&(s.track({type:3,doc:g}),L=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),L=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),L=!0):d&&!g&&(s.track({type:1,doc:d}),L=!0,(c||u)&&(a=!0)),L&&(g?(o=o.add(g),i=_?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((u,l)=>function(h,d){const g=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return g(h)-g(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new es(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Nl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=z(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new yp(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new mp(s))}),n}tc(t){this.qu=t.Hi,this.Ku=z();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return es.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class F_{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class P_{constructor(t){this.key=t,this.nc=!1}}class V_{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new hs(a=>Fd(a),Bi),this.rc=new Map,this.oc=new Set,this.uc=new Et(k.comparator),this.cc=new Map,this.ac=new Ic,this.hc={},this.lc=new Map,this.fc=ts.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function $_(e,t){const n=Q_(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await o_(n.localStore,ke(t));n.isPrimaryClient&&up(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await U_(n,t,s,a==="current",o.resumeToken)}return r}async function U_(e,t,n,s,r){e._c=(h,d,g)=>async function(I,_,L,q){let Z=_.view.Wu(L);Z.$i&&(Z=await Sl(I.localStore,_.query,!1).then(({documents:ft})=>_.view.Wu(ft,Z)));const V=q&&q.targetChanges.get(_.targetId),tt=_.view.applyChanges(Z,I.isPrimaryClient,V);return kl(I,_.targetId,tt.Xu),tt.snapshot}(e,h,d,g);const i=await Sl(e.localStore,t,!0),o=new L_(t,i.Hi),a=o.Wu(i.documents),c=cr.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);kl(e,n,u.Xu);const l=new F_(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function B_(e,t){const n=j(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Bi(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ma(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),lp(n.remoteStore,s.targetId),ya(n,s.targetId)}).catch(ir)):(ya(n,s.targetId),await ma(n.localStore,s.targetId,!0))}async function j_(e,t,n){const s=Y_(e);try{const r=await function(i,o){const a=j(i),c=vt.now(),u=o.reduce((d,g)=>d.add(g.key),z());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Re(),I=z();return a.Gi.getEntries(d,u).next(_=>{g=_,g.forEach((L,q)=>{q.isValidDocument()||(I=I.add(L))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(_=>{l=_;const L=[];for(const q of o){const Z=lE(q,l.get(q.key).overlayedDocument);Z!=null&&L.push(new Ze(q.key,Z,Md(Z.value.mapValue),ue.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,L,o)}).next(_=>{h=_;const L=_.applyToLocalDocumentSet(l,I);return a.documentOverlayCache.saveOverlays(d,_.batchId,L)})}).then(()=>({batchId:h.batchId,changes:Wd(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Et(J)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await lr(s,r.changes),await Wi(s.remoteStore)}catch(r){const i=Oc(r,"Failed to persist write");n.reject(i)}}async function vp(e,t){const n=j(e);try{const s=await s_(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(rt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?rt(o.nc):r.removedDocuments.size>0&&(rt(o.nc),o.nc=!1))}),await lr(n,s,t)}catch(s){await ir(s)}}function Ol(e,t,n){const s=j(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=j(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&kc(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function q_(e,t,n){const s=j(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new Et(k.comparator);o=o.insert(i,xt.newNoDocument(i,U.min()));const a=z().add(i),c=new Ki(U.min(),new Map,new wt(J),o,a);await vp(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),Rc(s)}else await ma(s.localStore,t,!1).then(()=>ya(s,t,n)).catch(ir)}async function H_(e,t){const n=j(e),s=t.batch.batchId;try{const r=await n_(n.localStore,t);bp(n,s,null),wp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await lr(n,r)}catch(r){await ir(r)}}async function K_(e,t,n){const s=j(e);try{const r=await function(i,o){const a=j(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(rt(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);bp(s,t,n),wp(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await lr(s,r)}catch(r){await ir(r)}}function wp(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function bp(e,t,n){const s=j(e);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.hc[s.currentUser.toKey()]=r}}function ya(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||Ep(e,s)})}function Ep(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(lp(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Rc(e))}function kl(e,t,n){for(const s of n)s instanceof mp?(e.ac.addReference(s.key,t),G_(e,s)):s instanceof yp?(O("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||Ep(e,s.key)):F()}function G_(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(O("SyncEngine","New document in limbo: "+n),e.oc.add(s),Rc(e))}function Rc(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new k(ot.fromString(t)),s=e.fc.next();e.cc.set(s,new P_(n)),e.uc=e.uc.insert(n,s),up(e.remoteStore,new wn(ke(wc(n.path)),s,2,gc.at))}}async function lr(e,t,n){const s=j(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Sc.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=j(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(c,h=>E.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>E.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!or(l))throw l;O("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,I=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,I)}}}(s.localStore,i))}async function z_(e,t){const n=j(e);if(!n.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const s=await ip(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new D(y.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await lr(n,s.ji)}}function W_(e,t){const n=j(e),s=n.cc.get(t);if(s&&s.nc)return z().add(s.key);{let r=z();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Q_(e){const t=j(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=vp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=W_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=q_.bind(null,t),t.sc.Wo=k_.bind(null,t.eventManager),t.sc.wc=R_.bind(null,t.eventManager),t}function Y_(e){const t=j(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=H_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=K_.bind(null,t),t}class X_{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Gi(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return e_(this.persistence,new ZE,t.initialUser,this.yt)}yc(t){return new XE(Cc.Bs,this.yt)}gc(t){return new c_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class J_{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ol(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=z_.bind(null,this.syncEngine),await A_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new x_}createDatastore(t){const n=Gi(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new f_(r));var r;return function(i,o,a,c){return new g_(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Ol(this.syncEngine,a,0),o=Dl.C()?new Dl:new u_,new y_(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new V_(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=j(t);O("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ur(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(e,t,n){if(!n)throw new D(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Z_(e,t,n,s){if(t===!0&&s===!0)throw new D(y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Rl(e){if(!k.isDocumentKey(e))throw new D(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ml(e){if(k.isDocumentKey(e))throw new D(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Qi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":F()}function je(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new D(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qi(e);throw new D(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map;class Fl{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Z_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new D(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fl(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ab;switch(n.type){case"gapi":const s=n.client;return new Ob(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ll.get(t);n&&(O("ComponentProvider","Removing Datastore"),Ll.delete(t),n.terminate())}(this),Promise.resolve()}}function tT(e,t,n,s={}){var r;const i=(e=je(e,Yi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&ia("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Dt.MOCK_USER;else{o=Ky(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new D(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Dt(c)}e._authCredentials=new Db(new Td(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new qt(this.firestore,t,this._key)}}class Dn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Dn(this.firestore,t,this._query)}}class qe extends Dn{constructor(t,n,s){super(t,n,wc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qt(this.firestore,null,new k(t))}withConverter(t){return new qe(this.firestore,t,this._path)}}function ii(e,t,...n){if(e=ee(e),_p("collection","path",t),e instanceof Yi){const s=ot.fromString(t,...n);return Ml(s),new qe(e,null,s)}{if(!(e instanceof qt||e instanceof qe))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(ot.fromString(t,...n));return Ml(s),new qe(e.firestore,null,s)}}function va(e,t,...n){if(e=ee(e),arguments.length===1&&(t=Id.R()),_p("doc","path",t),e instanceof Yi){const s=ot.fromString(t,...n);return Rl(s),new qt(e,null,new k(s))}{if(!(e instanceof qt||e instanceof qe))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(ot.fromString(t,...n));return Rl(s),new qt(e.firestore,e instanceof qe?e.converter:null,new k(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Oe("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Dt.UNAUTHENTICATED,this.clientId=Id.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Oc(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function sT(e,t){e.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ip(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function rT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await iT(e);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>xl(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>xl(t.remoteStore,i)),e.onlineComponents=t}async function iT(e){return e.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await sT(e,new X_)),e.offlineComponents}async function Tp(e){return e.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await rT(e,new J_)),e.onlineComponents}function oT(e){return Tp(e).then(t=>t.syncEngine)}async function Pl(e){const t=await Tp(e),n=t.eventManager;return n.onListen=$_.bind(null,t.syncEngine),n.onUnlisten=B_.bind(null,t.syncEngine),n}class aT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ap(this,"async_queue_retry"),this.Wc=()=>{const n=So();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=So();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=So();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new vn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!or(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Oe("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=Nc.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&F()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function Vl(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class ns extends Yi{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new aT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cp(this),this._firestoreClient.terminate()}}function cT(e,t){const n=typeof e=="object"?e:Wh(),s=typeof e=="string"?e:t||"(default)",r=Qs(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=jy("firestore");i&&tT(r,...i)}return r}function Ip(e){return e._firestoreClient||Cp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Cp(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Bb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new nT(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ss(Ft.fromBase64String(t))}catch(n){throw new D(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ss(Ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new D(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new D(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new D(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=/^__.*__$/;class lT{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ze(t,this.data,this.fieldMask,n,this.fieldTransforms):new ar(t,this.data,n,this.fieldTransforms)}}class Sp{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ze(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ap(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Fc{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Fc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.ua(t),r}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return oi(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(Ap(this.sa)&&uT.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class hT{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||Gi(t)}da(t,n,s,r=!1){return new Fc({sa:t,methodName:n,fa:s,path:Ot.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Pc(e){const t=e._freezeSettings(),n=Gi(e._databaseId);return new hT(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fT(e,t,n,s,r,i={}){const o=e.da(i.merge||i.mergeFields?2:0,t,n,r);Vc("Data must be an object, but it was:",o,s);const a=Dp(s,o);let c,u;if(i.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=wa(t,h,n);if(!o.contains(d))throw new D(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Np(l,d)||l.push(d)}c=new Wt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new lT(new jt(a),c,u)}class Ji extends Mc{_toFieldTransform(t){if(t.sa!==2)throw t.sa===1?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ji}}function dT(e,t,n,s){const r=e.da(1,t,n);Vc("Data must be an object, but it was:",r,s);const i=[],o=jt.empty();Sn(s,(c,u)=>{const l=$c(t,c,n);u=ee(u);const h=r.ca(l);if(u instanceof Ji)i.push(l);else{const d=hr(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Wt(i);return new Sp(o,a,r.fieldTransforms)}function pT(e,t,n,s,r,i){const o=e.da(1,t,n),a=[wa(t,s,n)],c=[r];if(i.length%2!=0)throw new D(y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(wa(t,i[d])),c.push(i[d+1]);const u=[],l=jt.empty();for(let d=a.length-1;d>=0;--d)if(!Np(u,a[d])){const g=a[d];let I=c[d];I=ee(I);const _=o.ca(g);if(I instanceof Ji)u.push(g);else{const L=hr(I,_);L!=null&&(u.push(g),l.set(g,L))}}const h=new Wt(u);return new Sp(l,h,o.fieldTransforms)}function gT(e,t,n,s=!1){return hr(n,e.da(s?4:3,t))}function hr(e,t){if(xp(e=ee(e)))return Vc("Unsupported field value:",t,e),Dp(e,t);if(e instanceof Mc)return function(n,s){if(!Ap(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=hr(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rE(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=vt.fromDate(n);return{timestampValue:si(s.yt,r)}}if(n instanceof vt){const r=new vt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:si(s.yt,r)}}if(n instanceof Lc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ss)return{bytesValue:Zd(s.yt,n._byteString)};if(n instanceof qt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:_c(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Qi(n)}`)}(e,t)}function Dp(e,t){const n={};return Cd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Sn(e,(s,r)=>{const i=hr(r,t.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function xp(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof vt||e instanceof Lc||e instanceof ss||e instanceof qt||e instanceof Mc)}function Vc(e,t,n){if(!xp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Qi(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function wa(e,t,n){if((t=ee(t))instanceof Xi)return t._internalPath;if(typeof t=="string")return $c(e,t);throw oi("Field path arguments must be of type string or ",e,!1,void 0,n)}const mT=new RegExp("[~\\*/\\[\\]]");function $c(e,t,n){if(t.search(mT)>=0)throw oi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Xi(...t.split("."))._internalPath}catch{throw oi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function oi(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(y.INVALID_ARGUMENT,a+e+c)}function Np(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Uc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yT extends Op{data(){return super.data()}}function Uc(e,t){return typeof t=="string"?$c(e,t):t instanceof Xi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new D(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bc{}class kp extends Bc{}function wT(e,t,...n){let s=[];t instanceof Bc&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof qc).length,o=r.filter(a=>a instanceof jc).length;if(i>1||i>0&&o>0)throw new D(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class jc extends kp{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new jc(t,n,s)}_apply(t){const n=this._parse(t);return Rp(t._query,n),new Dn(t.firestore,t.converter,la(t._query,n))}_parse(t){const n=Pc(t.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ul(l,u);const d=[];for(const g of l)d.push($l(a,r,g));h={arrayValue:{values:d}}}else h=$l(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ul(l,u),h=gT(o,i,l,u==="in"||u==="not-in");return yt.create(c,u,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class qc extends Bc{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new qc(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:le.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Rp(i,a),i=la(i,a)}(t._query,n),new Dn(t.firestore,t.converter,la(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hc extends kp{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Hc(t,n)}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new qn(r,i);return function(a,c){if(bc(a)===null){const u=Ui(a);u!==null&&Mp(a,u,c.field)}}(s,o),o}(t._query,this._field,this._direction);return new Dn(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ls(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function bT(e,t="asc"){const n=t,s=Uc("orderBy",e);return Hc._create(s,n)}function $l(e,t,n){if(typeof(n=ee(n))=="string"){if(n==="")throw new D(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ld(t)&&n.indexOf("/")!==-1)throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(ot.fromString(n));if(!k.isDocumentKey(s))throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ll(e,new k(s))}if(n instanceof qt)return ll(e,n._key);throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qi(n)}.`)}function Ul(e,t){if(!Array.isArray(e)||e.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new D(y.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Rp(e,t){if(t.isInequality()){const s=Ui(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new D(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=bc(e);i!==null&&Mp(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Mp(e,t,n){if(!n.isEqual(t))throw new D(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ET{convertValue(t,n="none"){switch(In(t)){case 0:return null;case 1:return t.booleanValue;case 2:return gt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Xn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw F()}}convertObject(t,n){const s={};return Sn(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Lc(gt(t.latitude),gt(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ad(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ks(t));default:return null}}convertTimestamp(t){const n=We(t);return new vt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ot.fromString(t);rt(rp(s));const r=new Hs(s.get(1),s.get(3)),i=new k(s.popFirst(5));return r.isEqual(n)||Oe(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Lp extends Op{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Uc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Rr extends Lp{data(t={}){return super.data(t)}}class TT{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Es(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Rr(this._firestore,this._userDataWriter,s.key,s,new Es(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Rr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Es(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Rr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Es(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:IT(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IT(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class Fp extends ET{constructor(t){super(),this.firestore=t}convertBytes(t){return new ss(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function CT(e,t,n,...s){e=je(e,qt);const r=je(e.firestore,ns),i=Pc(r);let o;return o=typeof(t=ee(t))=="string"||t instanceof Xi?pT(i,"updateDoc",e._key,t,n,s):dT(i,"updateDoc",e._key,t),Kc(r,[o.toMutation(e._key,ue.exists(!0))])}function ST(e){return Kc(je(e.firestore,ns),[new Ec(e._key,ue.none())])}function AT(e,t){const n=je(e.firestore,ns),s=va(e),r=_T(e.converter,t);return Kc(n,[fT(Pc(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,ue.exists(!1))]).then(()=>s)}function DT(e,...t){var n,s,r;e=ee(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Vl(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Vl(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(e instanceof qt)u=je(e.firestore,ns),l=wc(e._key.path),c={next:h=>{t[o]&&t[o](xT(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=je(e,Dn);u=je(h.firestore,ns),l=h._query;const d=new Fp(u);c={next:g=>{t[o]&&t[o](new TT(u,d,h,g))},error:t[o+1],complete:t[o+2]},vT(e._query)}return function(h,d,g,I){const _=new eT(I),L=new M_(d,_,g);return h.asyncQueue.enqueueAndForget(async()=>N_(await Pl(h),L)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>O_(await Pl(h),L))}}(Ip(u),l,a,c)}function Kc(e,t){return function(n,s){const r=new vn;return n.asyncQueue.enqueueAndForget(async()=>j_(await oT(n),s,r)),r.promise}(Ip(e),t)}function xT(e,t,n){const s=n.docs.get(t._key),r=new Fp(e);return new Lp(e,r,t._key,s,new Es(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){us=n})(Yv),Ge(new xe("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ns(new xb(n.getProvider("auth-internal")),new Rb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),we(ol,"3.8.3",e),we(ol,"3.8.3","esm2017")})();const NT={apiKey:"AIzaSyCh6J5YoZeAkWzw0WN9pDf2WHF7JwjRqVc",authDomain:"my-project-7e8d3.firebaseapp.com",databaseURL:"https://my-project-7e8d3-default-rtdb.firebaseio.com",projectId:"my-project-7e8d3",storageBucket:"my-project-7e8d3.appspot.com",messagingSenderId:"501820670286",appId:"1:501820670286:web:03e97bf87a53ad17069e1f",measurementId:"G-2XSPESW5WK"},Pp=zh(NT);E0(Pp);const ai=cT(Pp);function OT(){return Vp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Vp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const kT=typeof Proxy=="function",RT="devtools-plugin:setup",MT="plugin:settings:set";let kn,ba;function LT(){var e;return kn!==void 0||(typeof window<"u"&&window.performance?(kn=!0,ba=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(kn=!0,ba=global.perf_hooks.performance):kn=!1),kn}function FT(){return LT()?ba.now():Date.now()}class PT{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const o in t.settings){const a=t.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return FT()}},n&&n.on(MT,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function VT(e,t){const n=e,s=Vp(),r=OT(),i=kT&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(RT,e,t);else{const o=i?new PT(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var $p="store";function $T(e){return e===void 0&&(e=null),_s(e!==null?e:$p)}function ds(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function UT(e){return e!==null&&typeof e=="object"}function BT(e){return e&&typeof e.then=="function"}function jT(e,t){return function(){return e(t)}}function Up(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var s=t.indexOf(e);s>-1&&t.splice(s,1)}}function Bp(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Zi(e,n,[],e._modules.root,!0),Gc(e,n,t)}function Gc(e,t,n){var s=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,i={};ds(r,function(o,a){i[a]=jT(o,e),Object.defineProperty(e.getters,a,{get:function(){return i[a]()},enumerable:!0})}),e._state=di({data:t}),e.strict&&zT(e),s&&n&&e._withCommit(function(){s.data=null})}function Zi(e,t,n,s,r){var i=!n.length,o=e._modules.getNamespace(n);if(s.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=s),!i&&!r){var a=zc(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){a[c]=s.state})}var u=s.context=qT(e,o,n);s.forEachMutation(function(l,h){var d=o+h;HT(e,d,l,u)}),s.forEachAction(function(l,h){var d=l.root?h:o+h,g=l.handler||l;KT(e,d,g,u)}),s.forEachGetter(function(l,h){var d=o+h;GT(e,d,l,u)}),s.forEachChild(function(l,h){Zi(e,t,n.concat(h),l,r)})}function qT(e,t,n){var s=t==="",r={dispatch:s?e.dispatch:function(i,o,a){var c=ci(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=t+h),e.dispatch(h,u)},commit:s?e.commit:function(i,o,a){var c=ci(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=t+h),e.commit(h,u,l)}};return Object.defineProperties(r,{getters:{get:s?function(){return e.getters}:function(){return jp(e,t)}},state:{get:function(){return zc(e.state,n)}}}),r}function jp(e,t){if(!e._makeLocalGettersCache[t]){var n={},s=t.length;Object.keys(e.getters).forEach(function(r){if(r.slice(0,s)===t){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return e.getters[r]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function HT(e,t,n,s){var r=e._mutations[t]||(e._mutations[t]=[]);r.push(function(o){n.call(e,s.state,o)})}function KT(e,t,n,s){var r=e._actions[t]||(e._actions[t]=[]);r.push(function(o){var a=n.call(e,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:e.getters,rootState:e.state},o);return BT(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):a})}function GT(e,t,n,s){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function zT(e){Ts(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function zc(e,t){return t.reduce(function(n,s){return n[s]},e)}function ci(e,t,n){return UT(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var WT="vuex bindings",Bl="vuex:mutations",Ao="vuex:actions",Rn="vuex",QT=0;function YT(e,t){VT({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[WT]},function(n){n.addTimelineLayer({id:Bl,label:"Vuex Mutations",color:jl}),n.addTimelineLayer({id:Ao,label:"Vuex Actions",color:jl}),n.addInspector({id:Rn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===e&&s.inspectorId===Rn)if(s.filter){var r=[];Gp(r,t._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Kp(t._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===e&&s.inspectorId===Rn){var r=s.nodeId;jp(t,r),s.state=ZT(eI(t._modules,r),r==="root"?t.getters:t._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===e&&s.inspectorId===Rn){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit(function(){s.set(t._state.data,i,s.state.value)})}}),t.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Rn),n.sendInspectorState(Rn),n.addTimelineEvent({layerId:Bl,event:{time:Date.now(),title:s.type,data:i}})}),t.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=QT++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:Ao,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:Ao,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var jl=8702998,XT=6710886,JT=16777215,qp={label:"namespaced",textColor:JT,backgroundColor:XT};function Hp(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Kp(e,t){return{id:t||"root",label:Hp(t),tags:e.namespaced?[qp]:[],children:Object.keys(e._children).map(function(n){return Kp(e._children[n],t+n+"/")})}}function Gp(e,t,n,s){s.includes(n)&&e.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:t.namespaced?[qp]:[]}),Object.keys(t._children).forEach(function(r){Gp(e,t._children[r],n,s+r+"/")})}function ZT(e,t,n){t=n==="root"?t:t[n];var s=Object.keys(t),r={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(s.length){var i=tI(t);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Hp(o):o,editable:!1,value:Ea(function(){return i[o]})}})}return r}function tI(e){var t={};return Object.keys(e).forEach(function(n){var s=n.split("/");if(s.length>1){var r=t,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Ea(function(){return e[n]})}else t[n]=Ea(function(){return e[n]})}),t}function eI(e,t){var n=t.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children},t==="root"?e:e.root._children)}function Ea(e){try{return e()}catch(t){return t}}var he=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var s=t.state;this.state=(typeof s=="function"?s():s)||{}},zp={namespaced:{configurable:!0}};zp.namespaced.get=function(){return!!this._rawModule.namespaced};he.prototype.addChild=function(t,n){this._children[t]=n};he.prototype.removeChild=function(t){delete this._children[t]};he.prototype.getChild=function(t){return this._children[t]};he.prototype.hasChild=function(t){return t in this._children};he.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};he.prototype.forEachChild=function(t){ds(this._children,t)};he.prototype.forEachGetter=function(t){this._rawModule.getters&&ds(this._rawModule.getters,t)};he.prototype.forEachAction=function(t){this._rawModule.actions&&ds(this._rawModule.actions,t)};he.prototype.forEachMutation=function(t){this._rawModule.mutations&&ds(this._rawModule.mutations,t)};Object.defineProperties(he.prototype,zp);var xn=function(t){this.register([],t,!1)};xn.prototype.get=function(t){return t.reduce(function(n,s){return n.getChild(s)},this.root)};xn.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};xn.prototype.update=function(t){Wp([],this.root,t)};xn.prototype.register=function(t,n,s){var r=this;s===void 0&&(s=!0);var i=new he(n,s);if(t.length===0)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}n.modules&&ds(n.modules,function(a,c){r.register(t.concat(c),a,s)})};xn.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),s=t[t.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};xn.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),s=t[t.length-1];return n?n.hasChild(s):!1};function Wp(e,t,n){if(t.update(n),n.modules)for(var s in n.modules){if(!t.getChild(s))return;Wp(e.concat(s),t.getChild(s),n.modules[s])}}function nI(e){return new Kt(e)}var Kt=function(t){var n=this;t===void 0&&(t={});var s=t.plugins;s===void 0&&(s=[]);var r=t.strict;r===void 0&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new xn(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,I){return u.call(o,d,g,I)},this.strict=r;var l=this._modules.root.state;Zi(this,l,[],this._modules.root),Gc(this,l),s.forEach(function(h){return h(n)})},Wc={state:{configurable:!0}};Kt.prototype.install=function(t,n){t.provide(n||$p,this),t.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&YT(t,this)};Wc.state.get=function(){return this._state.data};Wc.state.set=function(e){};Kt.prototype.commit=function(t,n,s){var r=this,i=ci(t,n,s),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,r.state)}))};Kt.prototype.dispatch=function(t,n){var s=this,r=ci(t,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,s.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(d){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}l(d)},function(d){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,d)})}catch{}h(d)})})}};Kt.prototype.subscribe=function(t,n){return Up(t,this._subscribers,n)};Kt.prototype.subscribeAction=function(t,n){var s=typeof t=="function"?{before:t}:t;return Up(s,this._actionSubscribers,n)};Kt.prototype.watch=function(t,n,s){var r=this;return Ts(function(){return t(r.state,r.getters)},n,Object.assign({},s))};Kt.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Kt.prototype.registerModule=function(t,n,s){s===void 0&&(s={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),Zi(this,this.state,t,this._modules.get(t),s.preserveState),Gc(this,this.state)};Kt.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var s=zc(n.state,t.slice(0,-1));delete s[t[t.length-1]]}),Bp(this)};Kt.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Kt.prototype.hotUpdate=function(t){this._modules.update(t),Bp(this,!0)};Kt.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Kt.prototype,Wc);const Qp=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},sI={name:"todoItem",setup(){const e=$T(),t=Vh(()=>e.getters.TODOS),n=r=>{const i=t.value.findIndex(o=>o.id===r);CT(va(ii(ai,"todos"),r),{done:!t.value[i].done})},s=r=>{ST(va(ii(ai,"todos"),r))};return Pa(()=>e.dispatch("GET_TODOS")),{todos:t,toggleDone:n,deleteToDo:s}}},rI={class:"card-content"},iI={class:"columns is-mobile is-vcentered"},oI={class:"column"},aI={class:"column is-5 has-text-right"},cI=["onClick"],uI=["onClick"];function lI(e,t,n,s,r,i){return Vr(!0),$r(ie,null,Cm(s.todos,o=>(Vr(),$r("div",{class:Vn(["card mb-5",{"has-background-success-light":o.done}]),key:o.id},[$t("div",rI,[$t("div",iI,[$t("div",oI,[$t("div",{class:Vn([{"has-text-success line-through":o.done},"content"])},rg(o.content),3)]),$t("div",aI,[$t("button",{onClick:a=>s.toggleDone(o.id),class:Vn([o.done?"has-background-success-dark":"is-light","button is-light"])}," ✔ ",10,cI),$t("button",{onClick:a=>s.deleteToDo(o.id),class:"button is-danger"}," ⨯ ",8,uI)])])])],2))),128)}const hI=Qp(sI,[["render",lI]]),fI={name:"todoInput",setup(){const e=hh("");return{newtoDoContent:e,addToDo:()=>{AT(ii(ai,"todos"),{content:e.value,done:!1,data:Date.now()}),e.value=""}}}},dI={class:"field is-grouped mb-50"},pI={class:"control is-expanded"},gI={class:"control"},mI=["disabled"];function yI(e,t,n,s,r,i){return Vr(),$r("form",{onSubmit:t[1]||(t[1]=xy((...o)=>s.addToDo&&s.addToDo(...o),["prevent"]))},[$t("div",dI,[$t("p",pI,[Tm($t("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.newtoDoContent=o),class:"input",type:"text",placeholder:"Add a todo"},null,512),[[Sy,s.newtoDoContent]])]),$t("p",gI,[$t("button",{disabled:!s.newtoDoContent,class:"button is-info"},"Add",8,mI)])])],32)}const vI=Qp(fI,[["render",yI]]);const wI={class:"wrapper-todo"},bI=$t("div",{class:"title has-text-centered"},"ToDo List",-1),EI={__name:"App",setup(e){return(t,n)=>(Vr(),$r("div",wI,[bI,Ae(vI),Ae(hI)]))}},_I=nI({state:{todos:hh([])},mutation:{SET_TODOS(e,t){e.todos.value=t}},actions:{GET_TODOS({commit:e,state:t}){(async()=>{const s=ii(ai,"todos"),r=wT(s,bT("data","desc"));try{await DT(r,i=>{let o=[];i.forEach(a=>{const c={id:a.id,content:a.data().content,done:a.data().done};o.push(c)}),t.todos.value=o})}catch(i){console.log("Ошибка: ",i)}})()}},getters:{TODOS(e){return e.todos.value}},modules:{}});ky(EI).use(_I).mount("#app");
