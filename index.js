(function(C){typeof define=="function"&&define.amd?define(C):C()})(function(){"use strict";var hn=Object.defineProperty;var fn=(C,d,N)=>d in C?hn(C,d,{enumerable:!0,configurable:!0,writable:!0,value:N}):C[d]=N;var R=(C,d,N)=>fn(C,typeof d!="symbol"?d+"":d,N);var C,d,N,D,xe,we,ne,oe,re,ae,F={},ke=[],ht=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,W=Array.isArray;function P(e,t){for(var n in t)e[n]=t[n];return e}function Ce(e){var t=e.parentNode;t&&t.removeChild(e)}function T(e,t,n){var o,r,a,i={};for(a in t)a=="key"?o=t[a]:a=="ref"?r=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?C.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return U(e,i,o,r,null)}function U(e,t,n,o,r){var a={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++N,__i:-1,__u:0};return r==null&&d.vnode!=null&&d.vnode(a),a}function O(e){return e.children}function $(e,t){this.props=e,this.context=t}function B(e,t){if(t==null)return e.__?B(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?B(e):null}function Se(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Se(e)}}function Ae(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!q.__r++||xe!==d.debounceRendering)&&((xe=d.debounceRendering)||we)(q)}function q(){var e,t,n,o,r,a,i,s;for(D.sort(ne);e=D.shift();)e.__d&&(t=D.length,o=void 0,a=(r=(n=e).__v).__e,i=[],s=[],n.__P&&((o=P({},r)).__v=r.__v+1,d.vnode&&d.vnode(o),ie(n.__P,o,r,n.__n,n.__P.ownerSVGElement!==void 0,32&r.__u?[a]:null,i,a??B(r),!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,Re(i,o,s),o.__e!=a&&Se(o)),D.length>t&&D.sort(ne));q.__r=0}function Ie(e,t,n,o,r,a,i,s,c,_,p){var l,h,u,v,S,b=o&&o.__k||ke,g=t.length;for(n.__d=c,ft(n,t,b),c=n.__d,l=0;l<g;l++)(u=n.__k[l])!=null&&typeof u!="boolean"&&typeof u!="function"&&(h=u.__i===-1?F:b[u.__i]||F,u.__i=l,ie(e,u,h,r,a,i,s,c,_,p),v=u.__e,u.ref&&h.ref!=u.ref&&(h.ref&&se(h.ref,null,u),p.push(u.ref,u.__c||v,u)),S==null&&v!=null&&(S=v),65536&u.__u||h.__k===u.__k?(c&&!c.isConnected&&(c=B(h)),c=Ee(u,c,e)):typeof u.type=="function"&&u.__d!==void 0?c=u.__d:v&&(c=v.nextSibling),u.__d=void 0,u.__u&=-196609);n.__d=c,n.__e=S}function ft(e,t,n){var o,r,a,i,s,c=t.length,_=n.length,p=_,l=0;for(e.__k=[],o=0;o<c;o++)i=o+l,(r=e.__k[o]=(r=t[o])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?U(null,r,null,null,null):W(r)?U(O,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?U(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,s=vt(r,n,i,p),r.__i=s,a=null,s!==-1&&(p--,(a=n[s])&&(a.__u|=131072)),a==null||a.__v===null?(s==-1&&l--,typeof r.type!="function"&&(r.__u|=65536)):s!==i&&(s===i+1?l++:s>i?p>c-i?l+=s-i:l--:s<i?s==i-1&&(l=s-i):l=0,s!==o+l&&(r.__u|=65536))):(a=n[i])&&a.key==null&&a.__e&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=B(a)),le(a,a,!1),n[i]=null,p--);if(p)for(o=0;o<_;o++)(a=n[o])!=null&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=B(a)),le(a,a))}function Ee(e,t,n){var o,r;if(typeof e.type=="function"){for(o=e.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=e,t=Ee(o[r],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function j(e,t){return t=t||[],e==null||typeof e=="boolean"||(W(e)?e.some(function(n){j(n,t)}):t.push(e)),t}function vt(e,t,n,o){var r=e.key,a=e.type,i=n-1,s=n+1,c=t[n];if(c===null||c&&r==c.key&&a===c.type&&!(131072&c.__u))return n;if(o>(c!=null&&!(131072&c.__u)?1:0))for(;i>=0||s<t.length;){if(i>=0){if((c=t[i])&&!(131072&c.__u)&&r==c.key&&a===c.type)return i;i--}if(s<t.length){if((c=t[s])&&!(131072&c.__u)&&r==c.key&&a===c.type)return s;s++}}return-1}function Pe(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ht.test(t)?n:n+"px"}function G(e,t,n,o,r){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Pe(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||Pe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?o?n.u=o.u:(n.u=oe,e.addEventListener(t,a?ae:re,a)):e.removeEventListener(t,a?ae:re,a);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function $e(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=oe++;else if(t.t<n.u)return;return n(d.event?d.event(t):t)}}}function ie(e,t,n,o,r,a,i,s,c,_){var p,l,h,u,v,S,b,g,w,A,k,H,ut,ee,be,I=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(p=d.__b)&&p(t);e:if(typeof I=="function")try{if(g=t.props,w=(p=I.contextType)&&o[p.__c],A=p?w?w.props.value:p.__:o,n.__c?b=(l=t.__c=n.__c).__=l.__E:("prototype"in I&&I.prototype.render?t.__c=l=new I(g,A):(t.__c=l=new $(g,A),l.constructor=I,l.render=mt),w&&w.sub(l),l.props=g,l.state||(l.state={}),l.context=A,l.__n=o,h=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),I.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=P({},l.__s)),P(l.__s,I.getDerivedStateFromProps(g,l.__s))),u=l.props,v=l.state,l.__v=t,h)I.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(I.getDerivedStateFromProps==null&&g!==u&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(g,A),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(g,l.__s,A)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(l.props=g,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(te){te&&(te.__=t)}),k=0;k<l._sb.length;k++)l.__h.push(l._sb[k]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(g,l.__s,A),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(u,v,S)})}if(l.context=A,l.props=g,l.__P=e,l.__e=!1,H=d.__r,ut=0,"prototype"in I&&I.prototype.render){for(l.state=l.__s,l.__d=!1,H&&H(t),p=l.render(l.props,l.state,l.context),ee=0;ee<l._sb.length;ee++)l.__h.push(l._sb[ee]);l._sb=[]}else do l.__d=!1,H&&H(t),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++ut<25);l.state=l.__s,l.getChildContext!=null&&(o=P(P({},o),l.getChildContext())),h||l.getSnapshotBeforeUpdate==null||(S=l.getSnapshotBeforeUpdate(u,v)),Ie(e,W(be=p!=null&&p.type===O&&p.key==null?p.props.children:p)?be:[be],t,n,o,r,a,i,s,c,_),l.base=t.__e,t.__u&=-161,l.__h.length&&i.push(l),b&&(l.__E=l.__=null)}catch(te){t.__v=null,c||a!=null?(t.__e=s,t.__u|=c?160:32,a[a.indexOf(s)]=null):(t.__e=n.__e,t.__k=n.__k),d.__e(te,t,n)}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=gt(n.__e,t,n,o,r,a,i,c,_);(p=d.diffed)&&p(t)}function Re(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)se(n[o],n[++o],n[++o]);d.__c&&d.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){d.__e(a,r.__v)}})}function gt(e,t,n,o,r,a,i,s,c){var _,p,l,h,u,v,S,b=n.props,g=t.props,w=t.type;if(w==="svg"&&(r=!0),a!=null){for(_=0;_<a.length;_++)if((u=a[_])&&"setAttribute"in u==!!w&&(w?u.localName===w:u.nodeType===3)){e=u,a[_]=null;break}}if(e==null){if(w===null)return document.createTextNode(g);e=r?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,g.is&&g),a=null,s=!1}if(w===null)b===g||s&&e.data===g||(e.data=g);else{if(a=a&&C.call(e.childNodes),b=n.props||F,!s&&a!=null)for(b={},_=0;_<e.attributes.length;_++)b[(u=e.attributes[_]).name]=u.value;for(_ in b)u=b[_],_=="children"||(_=="dangerouslySetInnerHTML"?l=u:_==="key"||_ in g||G(e,_,null,u,r));for(_ in g)u=g[_],_=="children"?h=u:_=="dangerouslySetInnerHTML"?p=u:_=="value"?v=u:_=="checked"?S=u:_==="key"||s&&typeof u!="function"||b[_]===u||G(e,_,u,b[_],r);if(p)s||l&&(p.__html===l.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(l&&(e.innerHTML=""),Ie(e,W(h)?h:[h],t,n,o,r&&w!=="foreignObject",a,i,a?a[0]:n.__k&&B(n,0),s,c),a!=null)for(_=a.length;_--;)a[_]!=null&&Ce(a[_]);s||(_="value",v!==void 0&&(v!==e[_]||w==="progress"&&!v||w==="option"&&v!==b[_])&&G(e,_,v,b[_],!1),_="checked",S!==void 0&&S!==e[_]&&G(e,_,S,b[_],!1))}return e}function se(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){d.__e(o,n)}}function le(e,t,n){var o,r;if(d.unmount&&d.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||se(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){d.__e(a,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&le(o[r],t,n||typeof e.type!="function");n||e.__e==null||Ce(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function mt(e,t,n){return this.constructor(e,n)}function J(e,t,n){var o,r,a,i;d.__&&d.__(e,t),r=(o=typeof n=="function")?null:n&&n.__k||t.__k,a=[],i=[],ie(t,e=(!o&&n||t).__k=T(O,null,[e]),r||F,F,t.ownerSVGElement!==void 0,!o&&n?[n]:r?null:t.firstChild?C.call(t.childNodes):null,a,!o&&n?n:r?r.__e:t.firstChild,o,i),Re(a,e,i)}function Te(e,t){J(e,t,Te)}function Ne(e,t,n){var o,r,a,i,s=P({},e.props);for(a in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)a=="key"?o=t[a]:a=="ref"?r=t[a]:s[a]=t[a]===void 0&&i!==void 0?i[a]:t[a];return arguments.length>2&&(s.children=arguments.length>3?C.call(arguments,2):n),U(e.type,s,o||e.key,r||e.ref,null)}C=ke.slice,d={__e:function(e,t,n,o){for(var r,a,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),i=r.__d),i)return r.__E=r}catch(s){e=s}throw e}},N=0,$.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ae(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ae(this))},$.prototype.render=O,D=[],we=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ne=function(e,t){return e.__v.__b-t.__v.__b},q.__r=0,oe=0,re=$e(!1),ae=$e(!0);function ce(){return(ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var yt=["context","children"];function bt(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(o,r){if(o==null)return{};var a,i,s={},c=Object.keys(o);for(i=0;i<c.length;i++)r.indexOf(a=c[i])>=0||(s[a]=o[a]);return s}(e,yt);return Ne(t,n)}function xt(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=T(bt,ce({},this._props,{context:e.detail.context}),function t(n,o){if(n.nodeType===3)return n.data;if(n.nodeType!==1)return null;var r=[],a={},i=0,s=n.attributes,c=n.childNodes;for(i=s.length;i--;)s[i].name!=="slot"&&(a[s[i].name]=s[i].value,a[De(s[i].name)]=s[i].value);for(i=c.length;i--;){var _=t(c[i],null),p=c[i].slot;p?a[p]=T(Oe,{name:p},_):r[i]=_}var l=o?T(Oe,null,r):r;return T(o||n.nodeName.toLowerCase(),a,l)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?Te:J)(this._vdom,this._root)}function De(e){return e.replace(/-(\w)/g,function(t,n){return n?n.toUpperCase():""})}function wt(e,t,n){if(this._vdom){var o={};o[e]=n=n??void 0,o[De(e)]=n,this._vdom=Ne(this._vdom,o),J(this._vdom,this._root)}}function kt(){J(this._vdom=null,this._root)}function Oe(e,t){var n=this;return T("slot",ce({},e,{ref:function(o){o?(n.ref=o,n._listener||(n._listener=function(r){r.stopPropagation(),r.detail.context=t},o.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}function Ct(e,t,n,o){function r(){var a=Reflect.construct(HTMLElement,[],r);return a._vdomComponent=e,a._root=o&&o.shadow?a.attachShadow({mode:o.mode||"open"}):a,a}return(r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=xt,r.prototype.attributeChangedCallback=wt,r.prototype.disconnectedCallback=kt,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),r.observedAttributes=n,n.forEach(function(a){Object.defineProperty(r.prototype,a,{get:function(){return this._vdom.props[a]},set:function(i){this._vdom?this.attributeChangedCallback(a,null,i):(this._props||(this._props={}),this._props[a]=i,this.connectedCallback());var s=typeof i;i!=null&&s!=="string"&&s!=="boolean"&&s!=="number"||this.setAttribute(a,i)}})}),customElements.define(t,r)}var St=0;function f(e,t,n,o,r,a){var i,s,c={};for(s in t)s=="ref"?i=t[s]:c[s]=t[s];var _={type:e,props:c,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--St,__i:-1,__u:0,__source:r,__self:a};if(typeof e=="function"&&(i=e.defaultProps))for(s in i)c[s]===void 0&&(c[s]=i[s]);return d.vnode&&d.vnode(_),_}var z,y,_e,Be,X=0,Me=[],Y=[],x=d,Le=x.__b,Fe=x.__r,Ue=x.diffed,ze=x.__c,Ve=x.unmount,He=x.__;function ue(e,t){x.__h&&x.__h(y,e,X||t),X=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Y}),n.__[e]}function V(e){return X=1,At(je,e)}function At(e,t,n){var o=ue(z++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):je(void 0,t),function(s){var c=o.__N?o.__N[0]:o.__[0],_=o.t(c,s);c!==_&&(o.__N=[_,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){var r=function(s,c,_){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(h){return!!h.__c});if(p.every(function(h){return!h.__N}))return!a||a.call(this,s,c,_);var l=!1;return p.forEach(function(h){if(h.__N){var u=h.__[0];h.__=h.__N,h.__N=void 0,u!==h.__[0]&&(l=!0)}}),!(!l&&o.__c.props===s)&&(!a||a.call(this,s,c,_))};y.u=!0;var a=y.shouldComponentUpdate,i=y.componentWillUpdate;y.componentWillUpdate=function(s,c,_){if(this.__e){var p=a;a=void 0,r(s,c,_),a=p}i&&i.call(this,s,c,_)},y.shouldComponentUpdate=r}return o.__N||o.__}function M(e,t){var n=ue(z++,3);!x.__s&&qe(n.__H,t)&&(n.__=e,n.i=t,y.__H.__h.push(n))}function L(e){return X=5,Z(function(){return{current:e}},[])}function Z(e,t){var n=ue(z++,7);return qe(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function It(){for(var e;e=Me.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(K),e.__H.__h.forEach(pe),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){y=null,Le&&Le(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),He&&He(e,t)},x.__r=function(e){Fe&&Fe(e),z=0;var t=(y=e.__c).__H;t&&(_e===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Y,n.__N=n.i=void 0})):(t.__h.forEach(K),t.__h.forEach(pe),t.__h=[],z=0)),_e=y},x.diffed=function(e){Ue&&Ue(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Me.push(t)!==1&&Be===x.requestAnimationFrame||((Be=x.requestAnimationFrame)||Et)(It)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Y&&(n.__=n.__V),n.i=void 0,n.__V=Y})),_e=y=null},x.__c=function(e,t){t.some(function(n){try{n.__h.forEach(K),n.__h=n.__h.filter(function(o){return!o.__||pe(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],x.__e(o,n.__v)}}),ze&&ze(e,t)},x.unmount=function(e){Ve&&Ve(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{K(o)}catch(r){t=r}}),n.__H=void 0,t&&x.__e(t,n.__v))};var We=typeof requestAnimationFrame=="function";function Et(e){var t,n=function(){clearTimeout(o),We&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);We&&(t=requestAnimationFrame(n))}function K(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function pe(e){var t=y;e.__c=e.__(),y=t}function qe(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function je(e,t){return typeof t=="function"?t(e):t}const Pt="https://api.elevenlabs.io";function $t(e,t){for(var n in t)e[n]=t[n];return e}function Ge(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function Je(e,t){this.props=e,this.context=t}(Je.prototype=new $).isPureReactComponent=!0,Je.prototype.shouldComponentUpdate=function(e,t){return Ge(this.props,e)||Ge(this.state,t)};var Xe=d.__b;d.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Xe&&Xe(e)};var Rt=d.__e;d.__e=function(e,t,n,o){if(e.then){for(var r,a=t;a=a.__;)if((r=a.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}Rt(e,t,n,o)};var Ye=d.unmount;function Ze(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=$t({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return Ze(o,t,n)})),e}function Ke(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return Ke(o,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function de(){this.__u=0,this.t=null,this.__b=null}function Qe(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Q(){this.u=null,this.o=null}d.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Ye&&Ye(e)},(de.prototype=new $).__c=function(e,t){var n=t.__c,o=this;o.t==null&&(o.t=[]),o.t.push(n);var r=Qe(o.__v),a=!1,i=function(){a||(a=!0,n.__R=null,r?r(s):s())};n.__R=i;var s=function(){if(!--o.__u){if(o.state.__a){var c=o.state.__a;o.__v.__k[0]=Ke(c,c.__c.__P,c.__c.__O)}var _;for(o.setState({__a:o.__b=null});_=o.t.pop();)_.forceUpdate()}};o.__u++||32&t.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(i,i)},de.prototype.componentWillUnmount=function(){this.t=[]},de.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=Ze(this.__b,n,o.__O=o.__P)}this.__b=null}var r=t.__a&&T(O,null,e.fallback);return r&&(r.__u&=-33),[T(O,null,t.__a?null:e.children),r]};var et=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Q.prototype=new $).__a=function(e){var t=this,n=Qe(t.__v),o=t.o.get(e);return o[0]++,function(r){var a=function(){t.props.revealOrder?(o.push(r),et(t,e,o)):r()};n?n(a):a()}},Q.prototype.render=function(e){this.u=null,this.o=new Map;var t=j(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Q.prototype.componentDidUpdate=Q.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){et(e,n,t)})};var Tt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Nt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Dt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ot=/[A-Z0-9]/g,Bt=typeof document<"u",Mt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};$.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty($.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var tt=d.event;function Lt(){}function Ft(){return this.cancelBubble}function Ut(){return this.defaultPrevented}d.event=function(e){return tt&&(e=tt(e)),e.persist=Lt,e.isPropagationStopped=Ft,e.isDefaultPrevented=Ut,e.nativeEvent=e};var zt={enumerable:!1,configurable:!0,get:function(){return this.class}},nt=d.vnode;d.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,o=t.type,r={};for(var a in n){var i=n[a];if(!(a==="value"&&"defaultValue"in n&&i==null||Bt&&a==="children"&&o==="noscript"||a==="class"||a==="className")){var s=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&i===!0?i="":s==="translate"&&i==="no"?i=!1:s==="ondoubleclick"?a="ondblclick":s!=="onchange"||o!=="input"&&o!=="textarea"||Mt(n.type)?s==="onfocus"?a="onfocusin":s==="onblur"?a="onfocusout":Dt.test(a)?a=s:o.indexOf("-")===-1&&Nt.test(a)?a=a.replace(Ot,"-$&").toLowerCase():i===null&&(i=void 0):s=a="oninput",s==="oninput"&&r[a=s]&&(a="oninputCapture"),r[a]=i}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=j(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=j(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",zt)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=Tt,nt&&nt(e)};var ot=d.__r;d.__r=function(e){ot&&ot(e),e.__c};var rt=d.diffed;d.diffed=function(e){rt&&rt(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},he.apply(null,arguments)}function Vt(e){const t=new Uint8Array(e);return window.btoa(String.fromCharCode(...t))}function Ht(e){const t=window.atob(e),n=t.length,o=new Uint8Array(n);for(let r=0;r<n;r++)o[r]=t.charCodeAt(r);return o.buffer}const Wt=new Blob([`
      const TARGET_SAMPLE_RATE = 16000;
      class RawAudioProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.buffer = []; // Initialize an empty buffer
          this.bufferSize = TARGET_SAMPLE_RATE / 4; // Define the threshold for buffer size to be ~0.25s

          if (globalThis.LibSampleRate && sampleRate !== TARGET_SAMPLE_RATE) {
            globalThis.LibSampleRate.create(1, sampleRate, TARGET_SAMPLE_RATE).then(resampler => {
              this.resampler = resampler;
            });
          }
        }
        process(inputs, outputs) {
          const input = inputs[0]; // Get the first input node
          if (input.length > 0) {
            let channelData = input[0]; // Get the first channel's data

            // Resample the audio if necessary
            if (this.resampler) {
              channelData = this.resampler.full(channelData);
            }

            // Add channel data to the buffer
            this.buffer.push(...channelData);
            // Get max volume 
            let sum = 0.0;
            for (let i = 0; i < channelData.length; i++) {
              sum += channelData[i] * channelData[i];
            }
            const maxVolume = Math.sqrt(sum / channelData.length);
            // Check if buffer size has reached or exceeded the threshold
            if (this.buffer.length >= this.bufferSize) {
              const float32Array = new Float32Array(this.buffer)
              let pcm16Array = new Int16Array(float32Array.length);

              // Iterate through the Float32Array and convert each sample to PCM16
              for (let i = 0; i < float32Array.length; i++) {
                // Clamp the value to the range [-1, 1]
                let sample = Math.max(-1, Math.min(1, float32Array[i]));
            
                // Scale the sample to the range [-32768, 32767] and store it in the Int16Array
                pcm16Array[i] = sample < 0 ? sample * 32768 : sample * 32767;
              }
            
              // Send the buffered data to the main script
              this.port.postMessage([pcm16Array, maxVolume]);
            
              // Clear the buffer after sending
              this.buffer = [];
            }
          }
          return true; // Continue processing
        }
      }
      registerProcessor("raw-audio-processor", RawAudioProcessor);
  `],{type:"application/javascript"}),qt=URL.createObjectURL(Wt);class fe{static async create(t){let n=null,o=null;try{const i=navigator.mediaDevices.getSupportedConstraints().sampleRate;n=new window.AudioContext(i?{sampleRate:t}:{});const s=n.createAnalyser();i||await n.audioWorklet.addModule("https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"),await n.audioWorklet.addModule(qt),o=await navigator.mediaDevices.getUserMedia({audio:{sampleRate:{ideal:t},echoCancellation:{ideal:!0}}});const c=n.createMediaStreamSource(o),_=new AudioWorkletNode(n,"raw-audio-processor");return c.connect(s),s.connect(_),new fe(n,s,_,o)}catch(i){var r,a;throw(r=o)==null||r.getTracks().forEach(s=>s.stop()),(a=n)==null||a.close(),i}}constructor(t,n,o,r){this.context=void 0,this.analyser=void 0,this.worklet=void 0,this.inputStream=void 0,this.context=t,this.analyser=n,this.worklet=o,this.inputStream=r}async close(){this.inputStream.getTracks().forEach(t=>t.stop()),await this.context.close()}}const jt=new Blob([`
      class AudioConcatProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.buffers = []; // Initialize an empty buffer
          this.cursor = 0;
          this.currentBuffer = null;
          this.wasInterrupted = false;
          this.finished = false;

          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "buffer":
                this.wasInterrupted = false;
                this.buffers.push(new Int16Array(data.buffer));
                break;
              case "interrupt":
                this.wasInterrupted = true;
                break;
              case "clearInterrupted":
                if (this.wasInterrupted) {
                  this.wasInterrupted = false;
                  this.buffers = [];
                  this.currentBuffer = null;
                }
            }
          };
        }
        process(_, outputs) {
          let finished = false;
          const output = outputs[0][0];
          for (let i = 0; i < output.length; i++) {
            if (!this.currentBuffer) {
              if (this.buffers.length === 0) {
                finished = true;
                break;
              }
              this.currentBuffer = this.buffers.shift();
              this.cursor = 0;
            }

            output[i] = this.currentBuffer[this.cursor] / 32768;
            this.cursor++;

            if (this.cursor >= this.currentBuffer.length) {
              this.currentBuffer = null;
            }
          }

          if (this.finished !== finished) {
            this.finished = finished;
            this.port.postMessage({ type: "process", finished });
          }

          return true; // Continue processing
        }
      }

      registerProcessor("audio-concat-processor", AudioConcatProcessor);
    `],{type:"application/javascript"}),Gt=URL.createObjectURL(jt);let Jt=class pt{static async create(t){let n=null;try{n=new AudioContext({sampleRate:t});const r=n.createAnalyser(),a=n.createGain();a.connect(r),r.connect(n.destination),await n.audioWorklet.addModule(Gt);const i=new AudioWorkletNode(n,"audio-concat-processor");return i.connect(a),new pt(n,r,a,i)}catch(r){var o;throw(o=n)==null||o.close(),r}}constructor(t,n,o,r){this.context=void 0,this.analyser=void 0,this.gain=void 0,this.worklet=void 0,this.context=t,this.analyser=n,this.gain=o,this.worklet=r}async close(){await this.context.close()}};function at(e){return!!e.type}let Xt=class dt{static async create(t){let n=null;try{var o,r;const i=(o=typeof process<"u"?process.env.ELEVENLABS_CONVAI_SERVER_ORIGIN:null)!=null?o:"wss://api.elevenlabs.io",s=(r=typeof process<"u"?process.env.ELEVENLABS_CONVAI_SERVER_PATHNAME:null)!=null?r:"/v1/convai/conversation?agent_id=";n=new WebSocket(t.signedUrl?t.signedUrl:i+s+t.agentId);const c=await new Promise((l,h)=>{n.addEventListener("error",h),n.addEventListener("close",h),n.addEventListener("message",u=>{const v=JSON.parse(u.data);at(v)&&(v.type==="conversation_initiation_metadata"?l(v.conversation_initiation_metadata_event):console.warn("First received message is not conversation metadata."))},{once:!0})}),_=c.conversation_id,p=parseInt(c.agent_output_audio_format.replace("pcm_",""));return new dt(n,_,p)}catch(i){var a;throw(a=n)==null||a.close(),i}}constructor(t,n,o){this.socket=void 0,this.conversationId=void 0,this.sampleRate=void 0,this.socket=t,this.conversationId=n,this.sampleRate=o}close(){this.socket.close()}};const Yt={onConnect:()=>{},onDisconnect:()=>{},onError:()=>{},onDebug:()=>{},onMessage:()=>{},onStatusChange:()=>{},onModeChange:()=>{}};class ve{static async startSession(t){const n=he({},Yt,t);n.onStatusChange({status:"connecting"});let o=null,r=null,a=null;try{return o=await fe.create(16e3),r=await Xt.create(t),a=await Jt.create(r.sampleRate),new ve(n,r,o,a)}catch(_){var i,s,c;throw n.onStatusChange({status:"disconnected"}),(i=r)==null||i.close(),await((s=o)==null?void 0:s.close()),await((c=a)==null?void 0:c.close()),_}}constructor(t,n,o,r){var a=this;this.options=void 0,this.connection=void 0,this.input=void 0,this.output=void 0,this.lastInterruptTimestamp=0,this.mode="listening",this.status="connecting",this.inputFrequencyData=void 0,this.outputFrequencyData=void 0,this.volume=1,this.endSession=async function(){a.status==="connected"&&(a.updateStatus("disconnecting"),a.connection.close(),await a.input.close(),await a.output.close(),a.updateStatus("disconnected"))},this.updateMode=i=>{i!==this.mode&&(this.mode=i,this.options.onModeChange({mode:i}))},this.updateStatus=i=>{i!==this.status&&(this.status=i,this.options.onStatusChange({status:i}))},this.onEvent=i=>{try{const s=JSON.parse(i.data);if(!at(s))return;switch(s.type){case"interruption":s.interruption_event&&(this.lastInterruptTimestamp=s.interruption_event.event_id),this.fadeOutAudio();break;case"agent_response":this.options.onMessage({source:"ai",message:s.agent_response_event.agent_response});break;case"user_transcript":this.options.onMessage({source:"user",message:s.user_transcription_event.user_transcript});break;case"internal_tentative_agent_response":this.options.onDebug({type:"tentative_agent_response",response:s.tentative_agent_response_internal_event.tentative_agent_response});break;case"audio":this.lastInterruptTimestamp<=s.audio_event.event_id&&(this.addAudioBase64Chunk(s.audio_event.audio_base_64),this.updateMode("speaking"));break;case"ping":this.connection.socket.send(JSON.stringify({type:"pong",event_id:s.ping_event.event_id}));break;default:this.options.onDebug(s)}}catch{return void this.onError("Failed to parse event data",{event:i})}},this.onInputWorkletMessage=i=>{const s=JSON.stringify({user_audio_chunk:Vt(i.data[0].buffer)});this.status==="connected"&&this.connection.socket.send(s)},this.onOutputWorkletMessage=({data:i})=>{i.type==="process"&&this.updateMode(i.finished?"listening":"speaking")},this.addAudioBase64Chunk=async function(i){a.output.gain.gain.value=a.volume,a.output.worklet.port.postMessage({type:"clearInterrupted"}),a.output.worklet.port.postMessage({type:"buffer",buffer:Ht(i)})},this.fadeOutAudio=async function(){a.updateMode("listening"),a.output.worklet.port.postMessage({type:"interrupt"}),a.output.gain.gain.exponentialRampToValueAtTime(1e-4,a.output.context.currentTime+2),setTimeout(()=>{a.output.gain.gain.value=a.volume,a.output.worklet.port.postMessage({type:"clearInterrupted"})},2e3)},this.onError=(i,s)=>{console.error(i,s),this.options.onError(i,s)},this.calculateVolume=i=>{if(i.length===0)return 0;let s=0;for(let c=0;c<i.length;c++)s+=i[c]/255;return s/=i.length,s<0?0:s>1?1:s},this.getId=()=>this.connection.conversationId,this.setVolume=({volume:i})=>{this.volume=i},this.getInputByteFrequencyData=()=>(this.inputFrequencyData!=null||(this.inputFrequencyData=new Uint8Array(this.input.analyser.frequencyBinCount)),this.input.analyser.getByteFrequencyData(this.inputFrequencyData),this.inputFrequencyData),this.getOutputByteFrequencyData=()=>(this.outputFrequencyData!=null||(this.outputFrequencyData=new Uint8Array(this.output.analyser.frequencyBinCount)),this.output.analyser.getByteFrequencyData(this.outputFrequencyData),this.outputFrequencyData),this.getInputVolume=()=>this.calculateVolume(this.getInputByteFrequencyData()),this.getOutputVolume=()=>this.calculateVolume(this.getOutputByteFrequencyData()),this.options=t,this.connection=n,this.input=o,this.output=r,this.options.onConnect({conversationId:n.conversationId}),this.connection.socket.addEventListener("message",i=>{this.onEvent(i)}),this.connection.socket.addEventListener("error",i=>{this.updateStatus("disconnected"),this.onError("Socket error",i)}),this.connection.socket.addEventListener("close",()=>{this.updateStatus("disconnected"),this.options.onDisconnect()}),this.input.worklet.port.onmessage=this.onInputWorkletMessage,this.output.worklet.port.onmessage=this.onOutputWorkletMessage,this.updateStatus("connected")}}function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ge.apply(null,arguments)}function Zt(e){const t=L(null),n=L(null),[o,r]=V("disconnected"),[a,i]=V("listening");return M(()=>()=>{var s;(s=t.current)==null||s.endSession()},[]),{startSession:async s=>{if(t.current)return t.current.getId();if(n.current)return(await n.current).getId();try{return n.current=ve.startSession(ge({},e??{},s??{},{onModeChange:({mode:c})=>{i(c)},onStatusChange:({status:c})=>{r(c)}})),t.current=await n.current,t.current.getId()}finally{n.current=null}},endSession:async()=>{const s=t.current;t.current=null,await(s==null?void 0:s.endSession())},setVolume:({volume:s})=>{var c;(c=t.current)==null||c.setVolume({volume:s})},getInputByteFrequencyData:()=>{var s;return(s=t.current)==null?void 0:s.getInputByteFrequencyData()},getOutputByteFrequencyData:()=>{var s;return(s=t.current)==null?void 0:s.getOutputByteFrequencyData()},getInputVolume:()=>{var s,c;return(s=(c=t.current)==null?void 0:c.getInputVolume())!=null?s:0},getOutputVolume:()=>{var s,c;return(s=(c=t.current)==null?void 0:c.getOutputVolume())!=null?s:0},status:o,isSpeaking:a==="speaking"}}function Kt(e){return f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"24px",width:"24px",...e,children:f("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function it(e){return f("svg",{viewBox:"0 0 640 640",xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",stroke:"currentColor",fill:"currentColor",...e,children:f("path",{d:"M 82.6 88.6 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 36 76.7 98.9 140.5 177.2 177.2 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 C 572.1 430.5 578 442.1 575.4 453.4 l -24 104 C 548.9 568.2 539.3 576 528 576 c -256.1 0 -464 -207.5 -464 -464 c 0 -11.2 7.7 -20.9 18.6 -23.4 z"})})}function Qt(e){return f("svg",{viewBox:"0 0 640 640",xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",stroke:"currentColor",fill:"currentColor",...e,children:f("path",{d:"M 371.8 445.4 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 c 10.7 4.6 16.5 16.1 13.9 27.5 l -24 104 c -2.5 10.8 -12.1 18.6 -23.4 18.6 c -100.7 0 -193.7 -32.4 -269.7 -86.9 l 80 -61.8 c 10.9 6.5 22.1 12.7 33.6 18.1 z m -365.6 76.7 L 164.9 399.5 C 102.1 320.4 64 220.9 64 112 c 0 -11.2 7.7 -20.9 18.6 -23.4 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 12.2 26.1 27.9 50.3 46 72.8 L 594.5 67.4 C 601.5 62 611.5 63.2 617 70.2 L 636.6 95.4 c 5.4 7 4.2 17 -2.8 22.4 l -588.4 454.7 c -7 5.4 -17 4.2 -22.5 -2.8 l -19.6 -25.3 c -5.4 -6.8 -4.1 -16.9 2.9 -22.3 z"})})}const m={wrapper:"_wrapper_119g1_15",box:"_box_119g1_36",open:"_open_119g1_52",expandable:"_expandable_119g1_57",compact:"_compact_119g1_63",avatar:"_avatar_119g1_69",avatarBackground:"_avatarBackground_119g1_85",avatarImage:"_avatarImage_119g1_95",canvas:"_canvas_119g1_107",actions:"_actions_119g1_112",status:"_status_119g1_126",btn:"_btn_119g1_140",secondary:"_secondary_119g1_196",ellipsis:"_ellipsis_119g1_210",icon:"_icon_119g1_215",minimize:"_minimize_119g1_223",openContent:"_openContent_119g1_238",closedContent:"_closedContent_119g1_253",poweredBy:"_poweredBy_119g1_270",full:"_full_119g1_280"},en=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uOffsets[7];
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform sampler2D uPerlinTexture;

in vec2 vUv;

out vec4 outColor;

const float PI = 3.14159265358979323846;

// Draw a single oval with soft edges and calculate its gradient color
bool drawOval(vec2 polarUv, vec2 polarCenter, float a, float b, bool reverseGradient, float softness, out vec4 color) {
    vec2 p = polarUv - polarCenter;
    float oval = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);
    
    float edge = smoothstep(1.0, 1.0 - softness, oval);
    
    if (edge > 0.0) {
        float gradient = reverseGradient ? (1.0 - (p.x / a + 1.0) / 2.0) : ((p.x / a + 1.0) / 2.0);
        color = vec4(vec3(gradient), 0.8 * edge);
        return true;
    }
    return false;
}

// Map grayscale value to a 4-color ramp (color1, color2, color3, color4)
vec3 colorRamp(float grayscale, vec3 color1, vec3 color2, vec3 color3, vec3 color4) {
    if (grayscale < 0.33) {
        return mix(color1, color2, grayscale * 3.0);
    } else if (grayscale < 0.66) {
        return mix(color2, color3, (grayscale - 0.33) * 3.0);
    } else {
        return mix(color3, color4, (grayscale - 0.66) * 3.0);
    }
}

vec2 hash2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

// 2D noise for the ring
float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );

    return 0.5 + 0.5 * n;
}

float sharpRing(vec2 uv, float theta, float time) {
    float ringStart = 1.0;
    float ringWidth = 0.5;
    float noiseScale = 5.0;
    
    vec2 noiseCoord = vec2(theta / (2.0 * PI), time * 0.1);
    noiseCoord *= noiseScale;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 4.0;
    
    return ringStart + noise * ringWidth * 1.5;
}

float smoothRing(vec2 uv, float time) {
    float angle = atan(uv.y, uv.x);
    if (angle < 0.0) angle += 2.0 * PI;
    
    vec2 noiseCoord = vec2(angle / (2.0 * PI), time * 0.1);
    noiseCoord *= 6.0;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 8.0;
    
    float ringStart = 0.9;
    float ringWidth = 0.3;
    
    return ringStart + noise * ringWidth;
}

void main() {
    // Normalize vUv to be centered around (0.0, 0.0)
    vec2 uv = vUv * 2.0 - 1.0;

    // Convert uv to polar coordinates
    float radius = length(uv);
    float theta = atan(uv.y, uv.x);
    if (theta < 0.0) theta += 2.0 * PI; // Normalize theta to [0, 2*PI]

    // Initialize the base color to white
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    // Original parameters for the ovals in polar coordinates
    float originalCenters[7] = float[7](0.0, 0.5 * PI, 1.0 * PI, 1.5 * PI, 2.0 * PI, 2.5 * PI, 3.0 * PI);

    // Parameters for the animated centers in polar coordinates
    float centers[7];
    for (int i = 0; i < 7; i++) {
        centers[i] = originalCenters[i] + 0.5 * sin(uTime / 20.0 + uOffsets[i]);
    }

    float a, b;
    vec4 ovalColor;

    // Check if the pixel is inside any of the ovals
    for (int i = 0; i < 7; i++) {
        float noise = texture(uPerlinTexture, vec2(mod(centers[i] + uTime * 0.05, 1.0), 0.5)).r;
        a = noise * 1.5; // Increased variance: goes from 0.0 to 1.0
        b = noise * 4.5; // Tall semi-minor axis
        bool reverseGradient = (i % 2 == 1); // Reverse gradient for every second oval

        // Calculate the distance in polar coordinates
        float distTheta = abs(theta - centers[i]);
        if (distTheta > PI) distTheta = 2.0 * PI - distTheta; // Shortest distance on circle
        float distRadius = radius;

        float softness = 0.4; // Controls edge softness (e.g. how much blur is applied to the ovals)

        // Check if the pixel is inside the oval in polar coordinates
        if (drawOval(vec2(distTheta, distRadius), vec2(0.0, 0.0), a, b, reverseGradient, softness, ovalColor)) {
            // Blend the oval color with the existing color
            color.rgb = mix(color.rgb, ovalColor.rgb, ovalColor.a);
            color.a = max(color.a, ovalColor.a); // Max alpha
        }
    }
    
    // Calculate both noisy rings
    float ringRadius1 = sharpRing(uv, theta, uTime);
    float ringRadius2 = smoothRing(uv, uTime);
    
    // Blend both rings
    float ringAlpha1 = (radius >= ringRadius1) ? 0.3 : 0.0;
    float ringAlpha2 = smoothstep(ringRadius2 - 0.05, ringRadius2 + 0.05, radius) * 0.25;
    
    float totalRingAlpha = max(ringAlpha1, ringAlpha2);
    
    // Apply screen blend mode for combined rings
    vec3 ringColor = vec3(1.0); // White ring color
    color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - ringColor * totalRingAlpha);

    // Define colours to ramp against greyscale (could increase the amount of colours in the ramp)
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = uColor1; // Darker Color
    vec3 color3 = uColor2; // Lighter Color
    vec3 color4 = vec3(1.0, 1.0, 1.0); // White

    // Convert grayscale color to the color ramp
    float luminance = color.r; 
    color.rgb = colorRamp(luminance, color1, color2, color3, color4); // Apply the color ramp

    outColor = color;
}
`,tn=`#version 300 es
precision highp float;

in vec2 position;

out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0, 1);
}
`,st=0,nn=new Float32Array([-1,1,-1,-1,1,1,1,-1]),on="https://storage.googleapis.com/eleven-public-cdn/images/perlin-noise.png",E=class E{constructor(t){R(this,"gl");R(this,"program");R(this,"startTime");R(this,"rafId",null);R(this,"resizeObserver");R(this,"copyNoiseImage",()=>{this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,E.noiseImage),this.gl.generateMipmap(this.gl.TEXTURE_2D)});R(this,"render",()=>{if(!this.gl){this.rafId=null;return}const t=(performance.now()-this.startTime)/1e3;this.gl.uniform1f(this.gl.getUniformLocation(this.program,"uTime"),t),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.rafId=requestAnimationFrame(this.render)});const n=t.getContext("webgl2",{depth:!1,stencil:!1});this.gl=n;const o=this.getShader(n.FRAGMENT_SHADER,en),r=this.getShader(n.VERTEX_SHADER,tn);if(!o||!r)throw new Error("Failed to compile shaders");if(this.program=n.createProgram(),n.attachShader(this.program,o),n.attachShader(this.program,r),n.linkProgram(this.program),!n.getProgramParameter(this.program,n.LINK_STATUS))throw new Error("Failed to link program");const a=n.createTexture();n.bindTexture(n.TEXTURE_2D,a),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([128,128,128,255])),E.noiseImage||(E.noiseImage=new Image,E.noiseImage.crossOrigin="anonymous",E.noiseImage.src=on),E.noiseImage.complete?this.copyNoiseImage():E.noiseImage.addEventListener("load",this.copyNoiseImage);const i=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,nn,n.STATIC_DRAW),n.vertexAttribPointer(st,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(st),n.useProgram(this.program),n.uniform1i(n.getUniformLocation(this.program,"uPerlinTexture"),0),n.uniform1fv(n.getUniformLocation(this.program,"uOffsets"),new Float32Array(7).map(()=>Math.random()*Math.PI*2)),this.updateColors("#2792DC","#9CE6E6"),this.resizeObserver=new ResizeObserver(c=>{const _=c[0];let p;_.devicePixelContentBoxSize?p=_.devicePixelContentBoxSize[0]:p=_.contentBoxSize[0],t.width=Math.min(512,p.inlineSize),t.height=Math.min(512,p.blockSize),this.updateViewport()});const s=t.parentElement;if(s)try{this.resizeObserver.observe(s,{box:"device-pixel-content-box"})}catch{this.resizeObserver.observe(s)}this.startTime=performance.now(),this.rafId=requestAnimationFrame(this.render)}dispose(){var t,n,o;this.rafId!==null&&cancelAnimationFrame(this.rafId),(t=this.resizeObserver)==null||t.disconnect(),(o=(n=this.gl)==null?void 0:n.getExtension("WEBGL_lose_context"))==null||o.loseContext(),this.gl=null,this.program=null}updateViewport(){this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}updateColors(t,n){this.updateColor("uColor1",t),this.updateColor("uColor2",n)}updateColor(t,n){try{const o=parseInt(n.slice(1,3),16)/255,r=parseInt(n.slice(3,5),16)/255,a=parseInt(n.slice(5,7),16)/255;this.gl.uniform3fv(this.gl.getUniformLocation(this.program,t),[Math.pow(o,2.2),Math.pow(r,2.2),Math.pow(a,2.2)])}catch(o){console.error(`[ConversationalAI] Failed to parse ${n} as color:`,o)}}getShader(t,n){const o=this.gl.createShader(t);return this.gl.shaderSource(o,n),this.gl.compileShader(o),this.gl.getShaderParameter(o,this.gl.COMPILE_STATUS)?o:(this.gl.deleteShader(o),null)}};R(E,"noiseImage");let me=E;function rn({getInputVolume:e,getOutputVolume:t,isSpeaking:n,status:o,config:r}){const a=L(null),i=L(null);return M(()=>{if(o==="disconnected"){a.current.style.transform="",i.current.style.transform="",i.current.style.opacity="";return}let s;function c(){const _=e(),p=t(),l=n?1:.5,h=n?1:1-_*.6,u=n?1+p*.6:1;a.current.style.transform=`scale(${u})`,i.current.style.transform=`scale(${h})`,i.current.style.opacity=`${l}`,s=requestAnimationFrame(c)}return c(),()=>{cancelAnimationFrame(s)}},[o]),f("div",{className:m.avatar,children:[f("div",{ref:a,className:m.avatarBackground}),f("div",{ref:i,style:{backgroundImage:r.type==="image"?`url(${r.url})`:r.type==="url"?`url(${r.custom_url})`:void 0},className:m.avatarImage,children:r.type==="orb"&&f(an,{color1:r.color_1,color2:r.color_2})})]})}function an({color1:e,color2:t}){const n=L(null),o=L(null);return M(()=>{var r;try{o.current=new me(n.current)}catch{(r=o.current)==null||r.dispose(),o.current=null}return()=>{var a;(a=o.current)==null||a.dispose()}},[]),M(()=>{var r;(r=o.current)==null||r.updateColors(e,t)},[e,t]),f("canvas",{className:m.canvas,ref:n})}function lt(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=lt(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function ye(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=lt(e))&&(o&&(o+=" "),o+=t);return o}function ct(){return f("div",{className:m.poweredBy,children:"Powered by ElevenLabs ConversationalAI"})}function sn({config:e,avatar:t,contents:n,variant:o}){const[r,a]=V(!1),i=Zt(),{startSession:s,endSession:c,status:_,isSpeaking:p}=i,l=_==="disconnected",h=r||o!=="expandable"||!l;return M(()=>()=>c(),[]),f("div",{className:ye(m.wrapper,m[o],h&&m.open),children:[o!=="expandable"&&f(ct,{}),o==="expandable"&&f("button",{disabled:!l,className:ye(m.btn,m.minimize),onClick:()=>a(!r),title:n.expand,children:[f(Kt,{className:m.openContent}),f("div",{className:m.closedContent,children:[f(it,{className:m.icon}),f("div",{className:m.ellipsis,children:n.expand})]})]}),f("div",{className:m.box,children:[f(rn,{config:t,...i}),f("div",{className:m.actions,children:[o!=="compact"&&f("p",{className:m.status,children:l?n.action:p?n.speaking:n.listening}),l?f("button",{className:m.btn,title:n.startCall,onClick:()=>{s(e)},children:[f(it,{className:m.icon}),f("div",{className:m.ellipsis,children:n.startCall})]}):f("button",{className:ye(m.btn,m.secondary),title:n.endCall,onClick:()=>c(),children:[f(Qt,{className:m.icon}),f("div",{className:m.ellipsis,children:n.endCall})]}),o==="expandable"&&f(ct,{})]})]})]})}const _t=["full","compact","expandable"];function ln(e){return _t.includes(e)?e:_t[0]}const cn=["variant","override-config","avatar-image-url","avatar-orb-color-1","avatar-orb-color-2","agent-id","signed-url","action-text","start-call-text","end-call-text","expand-text","listening-text","speaking-text"],_n='@import"https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap";*{box-sizing:border-box}:host{pointer-events:none;position:fixed;right:32px;bottom:130px;z-index:1000}._wrapper_119g1_15{display:flex;flex-direction:column-reverse;align-items:flex-end;gap:16px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}._box_119g1_36{background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);display:flex;align-items:center;gap:16px;padding:0px;border-radius:var(--el-border-radius);box-shadow:0 0 64px 64px #0000001a;pointer-events:none;opacity:0;transition:opacity .2s var(--el-timing-function)}._open_119g1_52 ._box_119g1_36{pointer-events:initial;opacity:1}._expandable_119g1_57 ._box_119g1_36{flex-direction:column;padding:40px 24px 24px;gap:20px}._compact_119g1_63 ._box_119g1_36{gap:8px;padding:12px;border-radius:32px}._avatar_119g1_69{display:none;position:relative;width:54px;height:54px}._compact_119g1_63 ._avatar_119g1_69{width:36px;height:36px}._expandable_119g1_57 ._avatar_119g1_69{width:86px;height:86px}._avatarBackground_119g1_85{border-radius:50%;position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;background-color:var(--el-border-color)}._avatarImage_119g1_95{border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;background-size:cover;background-color:var(--el-bg-color);overflow:hidden}._canvas_119g1_107{width:100%;height:100%}._actions_119g1_112{width:min-content;display:flex;gap:11px;flex-direction:column}._expandable_119g1_57 ._actions_119g1_112{min-width:180px;width:min-content;justify-content:end}._status_119g1_126{display:none;font-size:14px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._expandable_119g1_57 ._status_119g1_126{text-align:center;text-wrap:wrap;line-height:18px}._btn_119g1_140{--el-ring-color: transparent;--el-ring-radius: 0;--el-focus-ring-radius: 0;--el-border-width: 0;background-color:var(--el-btn-color);color:var(--el-btn-text-color);border-radius:var(--el-btn-radius);box-shadow:0 1px 2px #1018280d,0 0 0 var(--el-ring-radius) var(--el-ring-color),0 0 0 var(--el-focus-ring-radius) var(--el-focus-color),inset 0 0 0 var(--el-border-width) var(--el-border-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:13px;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-size:14px;font-weight:500;transition:all .2s var(--el-timing-function);flex-grow:1;height:36px;max-width:320px}._expandable_119g1_57 ._btn_119g1_140{flex-grow:0}._btn_119g1_140:hover{--el-ring-color: rgba(125, 135, 155, .2);--el-ring-radius: 3px}._btn_119g1_140:active{--el-ring-color: rgba(101, 115, 135, .3);--el-ring-radius: 3px}._btn_119g1_140:disabled{opacity:.5;pointer-events:none}._btn_119g1_140:focus-visible{--el-focus-ring-radius: 1px;outline:none}._btn_119g1_140._secondary_119g1_196{--el-border-width: 1px;background-color:var(--el-bg-color);color:var(--el-text-color)}._btn_119g1_140._secondary_119g1_196:hover{--el-ring-color: rgba(135, 145, 165, .1)}._btn_119g1_140._secondary_119g1_196:active{--el-ring-color: rgba(125, 135, 155, .2)}._ellipsis_119g1_210{display:none;overflow:hidden;text-overflow:ellipsis}._icon_119g1_215{margin-left:-3px;margin-right:-4px;width:16px;height:16px;flex-shrink:0}._minimize_119g1_223{pointer-events:all;display:grid;grid-template-columns:1fr;position:relative;overflow:hidden}._open_119g1_52 ._minimize_119g1_223{grid-template-columns:0fr;align-items:center;height:36px;padding:0 18px}._openContent_119g1_238{position:absolute;top:7px;left:6px;opacity:0;pointer-events:none;rotate:90deg}._open_119g1_52 ._openContent_119g1_238{opacity:1;pointer-events:initial;rotate:0deg}._closedContent_119g1_253{min-width:0;display:flex;align-items:center;justify-content:center}._open_119g1_52 ._closedContent_119g1_253{opacity:0;pointer-events:none}._openContent_119g1_238,._closedContent_119g1_253{transition:all .2s var(--el-timing-function)}._poweredBy_119g1_270{pointer-events:all;color:var(--el-text-color);font-size:10px;opacity:.5;align-self:center;text-align:center}._compact_119g1_63 ._poweredBy_119g1_270,._full_119g1_280 ._poweredBy_119g1_270{display:none;}';function un({config:e}){let t=_n;const n=Z(()=>`:host {
  --el-bg-color: ${(e==null?void 0:e.bg_color)??"#fff"};
  --el-text-color: ${(e==null?void 0:e.text_color)??"#000"};
  --el-border-color: ${(e==null?void 0:e.border_color)??"#e1e1e1"};
  --el-border-radius: ${(e==null?void 0:e.border_radius)??"20"}px;
  --el-btn-color: ${(e==null?void 0:e.btn_color)??"#000"};
  --el-btn-text-color: ${(e==null?void 0:e.btn_text_color)??"#fff"};
  --el-btn-radius: ${(e==null?void 0:e.btn_radius)??"32"}px;
  --el-focus-color: ${(e==null?void 0:e.focus_color)??"#000"};
  --el-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}`,[e]);return f("style",{children:[n,t]})}function pn({variant:e,["agent-id"]:t,["signed-url"]:n,["override-config"]:o,["avatar-image-url"]:r,["avatar-orb-color-1"]:a,["avatar-orb-color-2"]:i,["action-text"]:s,["start-call-text"]:c,["end-call-text"]:_,["expand-text"]:p,["listening-text"]:l,["speaking-text"]:h}){const[u,v]=V(null),[S,b]=V(null),g=Z(()=>r?{type:"image",url:r}:a&&i?{type:"orb",color_1:a,color_2:i}:(u==null?void 0:u.avatar)??null,[r,a,i,u]),w=Z(()=>({startCall:c??(u==null?void 0:u.start_call_text)??"Start a call",endCall:_??(u==null?void 0:u.end_call_text)??"End",action:s??(u==null?void 0:u.action_text)??"Need help?",expand:p??(u==null?void 0:u.expand_text)??"Chat with AI",listening:l??(u==null?void 0:u.listening_text)??"Listening",speaking:h??(u==null?void 0:u.speaking_text)??"Talk to interrupt"}),[s,c,_,p,l,h,u]);return M(()=>{if(o)try{const k=JSON.parse(o);if(k){v(k);return}}catch(k){console.error(`[ConversationalAI] Cannot parse override-config: ${k==null?void 0:k.message}`)}if(!t){v(null);return}const A=new AbortController;return dn(t,A.signal).then(k=>{A.signal.aborted||v(k)}).catch(k=>{console.error(`[ConversationalAI] Cannot fetch config for agent ${t}: ${k==null?void 0:k.message}`),A.signal.aborted||v(null)}),()=>{A.abort()}},[t,o]),M(()=>{if(t){b({agentId:t});return}if(n){b({signedUrl:n});return}b(null),console.error("[ConversationalAI] Either agent-id or signed-url is required")},[t,n]),f(O,{children:[f(un,{config:u}),u&&S&&g&&f(sn,{config:S,contents:w,variant:ln(e??(u==null?void 0:u.variant)),avatar:g})]})}async function dn(e,t){const o=await(await fetch(`${Pt}/v1/convai/agents/${e}/widget`,{signal:t})).json();if(!o.widget_config)throw new Error("Response does not contain widget_config");return o.widget_config}Ct(pn,"elevenlabs-convai",cn,{shadow:!0})});
