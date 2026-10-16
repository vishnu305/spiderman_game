(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Fg={exports:{}},su={},Og={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),Ux=Symbol.for("react.portal"),Fx=Symbol.for("react.fragment"),Ox=Symbol.for("react.strict_mode"),kx=Symbol.for("react.profiler"),Bx=Symbol.for("react.provider"),zx=Symbol.for("react.context"),Hx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),Vx=Symbol.for("react.memo"),Wx=Symbol.for("react.lazy"),hm=Symbol.iterator;function Xx(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bg=Object.assign,zg={};function Ra(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||kg}Ra.prototype.isReactComponent={};Ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hg(){}Hg.prototype=Ra.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||kg}var bh=Th.prototype=new Hg;bh.constructor=Th;Bg(bh,Ra.prototype);bh.isPureReactComponent=!0;var pm=Array.isArray,Gg=Object.prototype.hasOwnProperty,Ah={current:null},Vg={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Gg.call(e,i)&&!Vg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:al,type:t,key:s,ref:a,props:r,_owner:Ah.current}}function $x(t,e){return{$$typeof:al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===al}function Yx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mm=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yx(""+t.key):e.toString(36)}function sc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case al:case Ux:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Pu(a,0):i,pm(r)?(n="",t!=null&&(n=t.replace(mm,"$&/")+"/"),sc(r,e,n,"",function(c){return c})):r!=null&&(Rh(r)&&(r=$x(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(mm,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",pm(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Pu(s,o);a+=sc(s,e,n,l,r)}else if(l=Xx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,o++),a+=sc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function dl(t,e,n){if(t==null)return t;var i=[],r=0;return sc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var In={current:null},ac={transition:null},jx={ReactCurrentDispatcher:In,ReactCurrentBatchConfig:ac,ReactCurrentOwner:Ah};function Xg(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};lt.Component=Ra;lt.Fragment=Fx;lt.Profiler=kx;lt.PureComponent=Th;lt.StrictMode=Ox;lt.Suspense=Gx;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;lt.act=Xg;lt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Gg.call(e,l)&&!Vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:al,type:t.type,key:r,ref:s,props:i,_owner:a}};lt.createContext=function(t){return t={$$typeof:zx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bx,_context:t},t.Consumer=t};lt.createElement=Wg;lt.createFactory=function(t){var e=Wg.bind(null,t);return e.type=t,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(t){return{$$typeof:Hx,render:t}};lt.isValidElement=Rh;lt.lazy=function(t){return{$$typeof:Wx,_payload:{_status:-1,_result:t},_init:qx}};lt.memo=function(t,e){return{$$typeof:Vx,type:t,compare:e===void 0?null:e}};lt.startTransition=function(t){var e=ac.transition;ac.transition={};try{t()}finally{ac.transition=e}};lt.unstable_act=Xg;lt.useCallback=function(t,e){return In.current.useCallback(t,e)};lt.useContext=function(t){return In.current.useContext(t)};lt.useDebugValue=function(){};lt.useDeferredValue=function(t){return In.current.useDeferredValue(t)};lt.useEffect=function(t,e){return In.current.useEffect(t,e)};lt.useId=function(){return In.current.useId()};lt.useImperativeHandle=function(t,e,n){return In.current.useImperativeHandle(t,e,n)};lt.useInsertionEffect=function(t,e){return In.current.useInsertionEffect(t,e)};lt.useLayoutEffect=function(t,e){return In.current.useLayoutEffect(t,e)};lt.useMemo=function(t,e){return In.current.useMemo(t,e)};lt.useReducer=function(t,e,n){return In.current.useReducer(t,e,n)};lt.useRef=function(t){return In.current.useRef(t)};lt.useState=function(t){return In.current.useState(t)};lt.useSyncExternalStore=function(t,e,n){return In.current.useSyncExternalStore(t,e,n)};lt.useTransition=function(){return In.current.useTransition()};lt.version="18.3.1";Og.exports=lt;var qe=Og.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=qe,Zx=Symbol.for("react.element"),Jx=Symbol.for("react.fragment"),Qx=Object.prototype.hasOwnProperty,ey=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ty={key:!0,ref:!0,__self:!0,__source:!0};function $g(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Qx.call(e,i)&&!ty.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Zx,type:t,key:s,ref:a,props:r,_owner:ey.current}}su.Fragment=Jx;su.jsx=$g;su.jsxs=$g;Fg.exports=su;var F=Fg.exports,Yg={exports:{}},Kn={},qg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var Q=$.length;$.push(Y);e:for(;0<Q;){var oe=Q-1>>>1,ye=$[oe];if(0<r(ye,Y))$[oe]=Y,$[Q]=ye,Q=oe;else break e}}function n($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var Y=$[0],Q=$.pop();if(Q!==Y){$[0]=Q;e:for(var oe=0,ye=$.length,Ce=ye>>>1;oe<Ce;){var je=2*(oe+1)-1,We=$[je],Ye=je+1,ae=$[Ye];if(0>r(We,Q))Ye<ye&&0>r(ae,We)?($[oe]=ae,$[Ye]=Q,oe=Ye):($[oe]=We,$[je]=Q,oe=je);else if(Ye<ye&&0>r(ae,Q))$[oe]=ae,$[Ye]=Q,oe=Ye;else break e}}return Y}function r($,Y){var Q=$.sortIndex-Y.sortIndex;return Q!==0?Q:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,v=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M($){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=$)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S($){if(_=!1,M($),!v)if(n(l)!==null)v=!0,se(E);else{var Y=n(c);Y!==null&&te(S,Y.startTime-$)}}function E($,Y){v=!1,_&&(_=!1,u(x),x=-1),m=!0;var Q=f;try{for(M(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||$&&!U());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var ye=oe(h.expirationTime<=Y);Y=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),M(Y)}else i(l);h=n(l)}if(h!==null)var Ce=!0;else{var je=n(c);je!==null&&te(S,je.startTime-Y),Ce=!1}return Ce}finally{h=null,f=Q,m=!1}}var T=!1,R=null,x=-1,A=5,P=-1;function U(){return!(t.unstable_now()-P<A)}function z(){if(R!==null){var $=t.unstable_now();P=$;var Y=!0;try{Y=R(!0,$)}finally{Y?W():(T=!1,R=null)}}else T=!1}var W;if(typeof g=="function")W=function(){g(z)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,K=O.port2;O.port1.onmessage=z,W=function(){K.postMessage(null)}}else W=function(){p(z,0)};function se($){R=$,T||(T=!0,W())}function te($,Y){x=p(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,se(E))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var Q=f;f=Y;try{return $()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=f;f=$;try{return Y()}finally{f=Q}},t.unstable_scheduleCallback=function($,Y,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,$){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Q+ye,$={id:d++,callback:Y,priorityLevel:$,startTime:Q,expirationTime:ye,sortIndex:-1},Q>oe?($.sortIndex=Q,e(c,$),n(l)===null&&$===n(c)&&(_?(u(x),x=-1):_=!0,te(S,Q-oe))):($.sortIndex=ye,e(l,$),v||m||(v=!0,se(E))),$},t.unstable_shouldYield=U,t.unstable_wrapCallback=function($){var Y=f;return function(){var Q=f;f=Y;try{return $.apply(this,arguments)}finally{f=Q}}}})(jg);qg.exports=jg;var ny=qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy=qe,jn=ny;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kg=new Set,Uo={};function ys(t,e){ga(t,e),ga(t+"Capture",e)}function ga(t,e){for(Uo[t]=e,t=0;t<e.length;t++)Kg.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=Object.prototype.hasOwnProperty,ry=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gm={},vm={};function sy(t){return kf.call(vm,t)?!0:kf.call(gm,t)?!1:ry.test(t)?vm[t]=!0:(gm[t]=!0,!1)}function ay(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oy(t,e,n,i){if(e===null||typeof e>"u"||ay(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){un[t]=new Nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];un[e]=new Nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){un[t]=new Nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){un[t]=new Nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){un[t]=new Nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){un[t]=new Nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){un[t]=new Nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){un[t]=new Nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){un[t]=new Nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,Ph);un[e]=new Nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,Ph);un[e]=new Nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,Ph);un[e]=new Nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){un[t]=new Nn(t,1,!1,t.toLowerCase(),null,!1,!1)});un.xlinkHref=new Nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){un[t]=new Nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,i){var r=un.hasOwnProperty(e)?un[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oy(e,n,r,i)&&(n=null),i||r===null?sy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var cr=iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),qs=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),Qg=Symbol.for("react.offscreen"),_m=Symbol.iterator;function za(t){return t===null||typeof t!="object"?null:(t=_m&&t[_m]||t["@@iterator"],typeof t=="function"?t:null)}var Ht=Object.assign,Lu;function fo(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Iu=!1;function Nu(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function ly(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case qs:return"Portal";case Bf:return"Profiler";case Ih:return"StrictMode";case zf:return"Suspense";case Hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jg:return(t.displayName||"Context")+".Consumer";case Zg:return(t._context.displayName||"Context")+".Provider";case Nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case Mr:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function cy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uy(t){var e=ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=uy(t))}function tv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ev(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vf(t,e){var n=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nv(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function Wf(t,e){nv(t,e);var n=Hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xf(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xf(t,e,n){(e!=="number"||bc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function la(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(ho(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function iv(t,e){var n=Hr(e.value),i=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,sv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fy=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){fy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function av(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=av(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var dy=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(dy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zf=null,ca=null,ua=null;function wm(t){if(t=cl(t)){if(typeof Zf!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=uu(e),Zf(t.stateNode,t.type,e))}}function lv(t){ca?ua?ua.push(t):ua=[t]:ca=t}function cv(){if(ca){var t=ca,e=ua;if(ua=ca=null,wm(t),e)for(t=0;t<e.length;t++)wm(e[t])}}function uv(t,e){return t(e)}function fv(){}var Du=!1;function dv(t,e,n){if(Du)return t(e,n);Du=!0;try{return uv(t,e,n)}finally{Du=!1,(ca!==null||ua!==null)&&(fv(),cv())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var i=uu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var Jf=!1;if(nr)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){Jf=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{Jf=!1}function hy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var wo=!1,Ac=null,Rc=!1,Qf=null,py={onError:function(t){wo=!0,Ac=t}};function my(t,e,n,i,r,s,a,o,l){wo=!1,Ac=null,hy.apply(py,arguments)}function gy(t,e,n,i,r,s,a,o,l){if(my.apply(this,arguments),wo){if(wo){var c=Ac;wo=!1,Ac=null}else throw Error(Se(198));Rc||(Rc=!0,Qf=c)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Em(t){if(Ss(t)!==t)throw Error(Se(188))}function vy(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Em(r),t;if(s===i)return Em(r),e;s=s.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function pv(t){return t=vy(t),t!==null?mv(t):null}function mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mv(t);if(e!==null)return e;t=t.sibling}return null}var gv=jn.unstable_scheduleCallback,Tm=jn.unstable_cancelCallback,_y=jn.unstable_shouldYield,xy=jn.unstable_requestPaint,Xt=jn.unstable_now,yy=jn.unstable_getCurrentPriorityLevel,Fh=jn.unstable_ImmediatePriority,vv=jn.unstable_UserBlockingPriority,Cc=jn.unstable_NormalPriority,Sy=jn.unstable_LowPriority,_v=jn.unstable_IdlePriority,au=null,Ni=null;function My(t){if(Ni&&typeof Ni.onCommitFiberRoot=="function")try{Ni.onCommitFiberRoot(au,t,void 0,(t.current.flags&128)===128)}catch{}}var yi=Math.clz32?Math.clz32:Ty,wy=Math.log,Ey=Math.LN2;function Ty(t){return t>>>=0,t===0?32:31-(wy(t)/Ey|0)|0}var gl=64,vl=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=po(o):(s&=a,s!==0&&(i=po(s)))}else a=n&~r,a!==0?i=po(a):s!==0&&(i=po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-yi(e),r=1<<n,i|=t[n],e&=~r;return i}function by(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-yi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=by(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xv(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yi(e),t[e]=n}function Ry(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-yi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-yi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var St=0;function yv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sv,kh,Mv,wv,Ev,td=!1,_l=[],Ir=null,Nr=null,Dr=null,ko=new Map,Bo=new Map,br=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function Ga(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=cl(e),e!==null&&kh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Py(t,e,n,i,r){switch(e){case"focusin":return Ir=Ga(Ir,t,e,n,i,r),!0;case"dragenter":return Nr=Ga(Nr,t,e,n,i,r),!0;case"mouseover":return Dr=Ga(Dr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,Ga(ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,Ga(Bo.get(s)||null,t,e,n,i,r)),!0}return!1}function Tv(t){var e=ts(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=hv(n),e!==null){t.blockedOn=e,Ev(t.priority,function(){Mv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Kf=i,n.target.dispatchEvent(i),Kf=null}else return e=cl(n),e!==null&&kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){oc(t)&&n.delete(e)}function Ly(){td=!1,Ir!==null&&oc(Ir)&&(Ir=null),Nr!==null&&oc(Nr)&&(Nr=null),Dr!==null&&oc(Dr)&&(Dr=null),ko.forEach(Am),Bo.forEach(Am)}function Va(t,e){t.blockedOn===e&&(t.blockedOn=null,td||(td=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,Ly)))}function zo(t){function e(r){return Va(r,t)}if(0<_l.length){Va(_l[0],t);for(var n=1;n<_l.length;n++){var i=_l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ir!==null&&Va(Ir,t),Nr!==null&&Va(Nr,t),Dr!==null&&Va(Dr,t),ko.forEach(e),Bo.forEach(e),n=0;n<br.length;n++)i=br[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<br.length&&(n=br[0],n.blockedOn===null);)Tv(n),n.blockedOn===null&&br.shift()}var fa=cr.ReactCurrentBatchConfig,Lc=!0;function Iy(t,e,n,i){var r=St,s=fa.transition;fa.transition=null;try{St=1,Bh(t,e,n,i)}finally{St=r,fa.transition=s}}function Ny(t,e,n,i){var r=St,s=fa.transition;fa.transition=null;try{St=4,Bh(t,e,n,i)}finally{St=r,fa.transition=s}}function Bh(t,e,n,i){if(Lc){var r=nd(t,e,n,i);if(r===null)Xu(t,e,i,Ic,n),bm(t,i);else if(Py(r,t,e,n,i))i.stopPropagation();else if(bm(t,i),e&4&&-1<Cy.indexOf(t)){for(;r!==null;){var s=cl(r);if(s!==null&&Sv(s),s=nd(t,e,n,i),s===null&&Xu(t,e,i,Ic,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xu(t,e,i,null,n)}}var Ic=null;function nd(t,e,n,i){if(Ic=null,t=Uh(i),t=ts(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yy()){case Fh:return 1;case vv:return 4;case Cc:case Sy:return 16;case _v:return 536870912;default:return 16}default:return 16}}var Pr=null,zh=null,lc=null;function Av(){if(lc)return lc;var t,e=zh,n=e.length,i,r="value"in Pr?Pr.value:Pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return lc=r.slice(t,1<i?1-i:void 0)}function cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Rm(){return!1}function Zn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:Rm,this.isPropagationStopped=Rm,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=Zn(Ca),ll=Ht({},Ca,{view:0,detail:0}),Dy=Zn(ll),Fu,Ou,Wa,ou=Ht({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wa&&(Wa&&t.type==="mousemove"?(Fu=t.screenX-Wa.screenX,Ou=t.screenY-Wa.screenY):Ou=Fu=0,Wa=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Cm=Zn(ou),Uy=Ht({},ou,{dataTransfer:0}),Fy=Zn(Uy),Oy=Ht({},ll,{relatedTarget:0}),ku=Zn(Oy),ky=Ht({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),By=Zn(ky),zy=Ht({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hy=Zn(zy),Gy=Ht({},Ca,{data:0}),Pm=Zn(Gy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $y(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xy[t])?!!e[t]:!1}function Gh(){return $y}var Yy=Ht({},ll,{key:function(t){if(t.key){var e=Vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(t){return t.type==="keypress"?cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qy=Zn(Yy),jy=Ht({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=Zn(jy),Ky=Ht({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),Zy=Zn(Ky),Jy=Ht({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=Zn(Jy),eS=Ht({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tS=Zn(eS),nS=[9,13,27,32],Vh=nr&&"CompositionEvent"in window,Eo=null;nr&&"documentMode"in document&&(Eo=document.documentMode);var iS=nr&&"TextEvent"in window&&!Eo,Rv=nr&&(!Vh||Eo&&8<Eo&&11>=Eo),Im=" ",Nm=!1;function Cv(t,e){switch(t){case"keyup":return nS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function rS(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(Nm=!0,Im);case"textInput":return t=e.data,t===Im&&Nm?null:t;default:return null}}function sS(t,e){if(Ks)return t==="compositionend"||!Vh&&Cv(t,e)?(t=Av(),lc=zh=Pr=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rv&&e.locale!=="ko"?null:e.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aS[t.type]:e==="textarea"}function Lv(t,e,n,i){lv(i),e=Nc(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var To=null,Ho=null;function oS(t){Gv(t,0)}function lu(t){var e=Qs(t);if(tv(e))return t}function lS(t,e){if(t==="change")return e}var Iv=!1;if(nr){var Bu;if(nr){var zu="oninput"in document;if(!zu){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),zu=typeof Um.oninput=="function"}Bu=zu}else Bu=!1;Iv=Bu&&(!document.documentMode||9<document.documentMode)}function Fm(){To&&(To.detachEvent("onpropertychange",Nv),Ho=To=null)}function Nv(t){if(t.propertyName==="value"&&lu(Ho)){var e=[];Lv(e,Ho,t,Uh(t)),dv(oS,e)}}function cS(t,e,n){t==="focusin"?(Fm(),To=e,Ho=n,To.attachEvent("onpropertychange",Nv)):t==="focusout"&&Fm()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(Ho)}function fS(t,e){if(t==="click")return lu(e)}function dS(t,e){if(t==="input"||t==="change")return lu(e)}function hS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wi=typeof Object.is=="function"?Object.is:hS;function Go(t,e){if(wi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!kf.call(e,r)||!wi(t[r],e[r]))return!1}return!0}function Om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function km(t,e){var n=Om(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Om(n)}}function Dv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uv(){for(var t=window,e=bc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bc(t.document)}return e}function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pS(t){var e=Uv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dv(n.ownerDocument.documentElement,n)){if(i!==null&&Wh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=km(n,s);var a=km(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mS=nr&&"documentMode"in document&&11>=document.documentMode,Zs=null,id=null,bo=null,rd=!1;function Bm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||Zs==null||Zs!==bc(i)||(i=Zs,"selectionStart"in i&&Wh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Go(bo,i)||(bo=i,i=Nc(id,"onSelect"),0<i.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zs)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Js={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Hu={},Fv={};nr&&(Fv=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function cu(t){if(Hu[t])return Hu[t];if(!Js[t])return t;var e=Js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fv)return Hu[t]=e[n];return t}var Ov=cu("animationend"),kv=cu("animationiteration"),Bv=cu("animationstart"),zv=cu("transitionend"),Hv=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){Hv.set(t,e),ys(e,[t])}for(var Gu=0;Gu<zm.length;Gu++){var Vu=zm[Gu],gS=Vu.toLowerCase(),vS=Vu[0].toUpperCase()+Vu.slice(1);Vr(gS,"on"+vS)}Vr(Ov,"onAnimationEnd");Vr(kv,"onAnimationIteration");Vr(Bv,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(zv,"onTransitionEnd");ga("onMouseEnter",["mouseout","mouseover"]);ga("onMouseLeave",["mouseout","mouseover"]);ga("onPointerEnter",["pointerout","pointerover"]);ga("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Hm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,gy(i,e,void 0,t),t.currentTarget=null}function Gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Hm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Hm(r,o,c),s=l}}}if(Rc)throw t=Qf,Rc=!1,Qf=null,t}function Nt(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var i=t+"__bubble";n.has(i)||(Vv(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),Vv(n,t,i,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Sl]){t[Sl]=!0,Kg.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,Wu("selectionchange",!1,e))}}function Vv(t,e,n,i){switch(bv(e)){case 1:var r=Iy;break;case 4:r=Ny;break;default:r=Bh}n=r.bind(null,e,n,t),r=void 0,!Jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ts(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}dv(function(){var c=s,d=Uh(n),h=[];e:{var f=Hv.get(t);if(f!==void 0){var m=Hh,v=t;switch(t){case"keypress":if(cc(n)===0)break e;case"keydown":case"keyup":m=qy;break;case"focusin":v="focus",m=ku;break;case"focusout":v="blur",m=ku;break;case"beforeblur":case"afterblur":m=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Zy;break;case Ov:case kv:case Bv:m=By;break;case zv:m=Qy;break;case"scroll":m=Dy;break;case"wheel":m=tS;break;case"copy":case"cut":case"paste":m=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Lm}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?f!==null?f+"Capture":null:f;_=[];for(var g=c,M;g!==null;){M=g;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,u!==null&&(S=Oo(g,u),S!=null&&_.push(Wo(g,S,M)))),p)break;g=g.return}0<_.length&&(f=new m(f,v,null,n,d),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Kf&&(v=n.relatedTarget||n.fromElement)&&(ts(v)||v[ir]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?ts(v):null,v!==null&&(p=Ss(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(_=Cm,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Lm,S="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?f:Qs(m),M=v==null?f:Qs(v),f=new _(S,g+"leave",m,n,d),f.target=p,f.relatedTarget=M,S=null,ts(d)===c&&(_=new _(u,g+"enter",v,n,d),_.target=M,_.relatedTarget=p,S=_),p=S,m&&v)t:{for(_=m,u=v,g=0,M=_;M;M=Rs(M))g++;for(M=0,S=u;S;S=Rs(S))M++;for(;0<g-M;)_=Rs(_),g--;for(;0<M-g;)u=Rs(u),M--;for(;g--;){if(_===u||u!==null&&_===u.alternate)break t;_=Rs(_),u=Rs(u)}_=null}else _=null;m!==null&&Gm(h,f,m,_,!1),v!==null&&p!==null&&Gm(h,p,v,_,!0)}}e:{if(f=c?Qs(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var E=lS;else if(Dm(f))if(Iv)E=dS;else{E=uS;var T=cS}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=fS);if(E&&(E=E(t,c))){Lv(h,E,n,d);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Xf(f,"number",f.value)}switch(T=c?Qs(c):window,t){case"focusin":(Dm(T)||T.contentEditable==="true")&&(Zs=T,id=c,bo=null);break;case"focusout":bo=id=Zs=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Bm(h,n,d);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":Bm(h,n,d)}var R;if(Vh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ks?Cv(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Rv&&n.locale!=="ko"&&(Ks||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ks&&(R=Av()):(Pr=d,zh="value"in Pr?Pr.value:Pr.textContent,Ks=!0)),T=Nc(c,x),0<T.length&&(x=new Pm(x,t,null,n,d),h.push({event:x,listeners:T}),R?x.data=R:(R=Pv(n),R!==null&&(x.data=R)))),(R=iS?rS(t,n):sS(t,n))&&(c=Nc(c,"onBeforeInput"),0<c.length&&(d=new Pm("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=R))}Gv(h,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(t,n),s!=null&&i.unshift(Wo(t,s,r)),s=Oo(t,e),s!=null&&i.push(Wo(t,s,r))),t=t.return}return i}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Oo(n,s),l!=null&&a.unshift(Wo(n,l,o))):r||(l=Oo(n,s),l!=null&&a.push(Wo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var xS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(xS,`
`).replace(yS,"")}function Ml(t,e,n){if(e=Vm(e),Vm(t)!==e&&n)throw Error(Se(425))}function Dc(){}var sd=null,ad=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(wS)}:ld;function wS(t){setTimeout(function(){throw t})}function $u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Pa=Math.random().toString(36).slice(2),Li="__reactFiber$"+Pa,Xo="__reactProps$"+Pa,ir="__reactContainer$"+Pa,cd="__reactEvents$"+Pa,ES="__reactListeners$"+Pa,TS="__reactHandles$"+Pa;function ts(t){var e=t[Li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xm(t);t!==null;){if(n=t[Li])return n;t=Xm(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[Li]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function uu(t){return t[Xo]||null}var ud=[],ea=-1;function Wr(t){return{current:t}}function Dt(t){0>ea||(t.current=ud[ea],ud[ea]=null,ea--)}function Pt(t,e){ea++,ud[ea]=t.current,t.current=e}var Gr={},Mn=Wr(Gr),Fn=Wr(!1),fs=Gr;function va(t,e){var n=t.type.contextTypes;if(!n)return Gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function On(t){return t=t.childContextTypes,t!=null}function Uc(){Dt(Fn),Dt(Mn)}function $m(t,e,n){if(Mn.current!==Gr)throw Error(Se(168));Pt(Mn,e),Pt(Fn,n)}function Wv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,cy(t)||"Unknown",r));return Ht({},n,i)}function Fc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,fs=Mn.current,Pt(Mn,t),Pt(Fn,Fn.current),!0}function Ym(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=Wv(t,e,fs),i.__reactInternalMemoizedMergedChildContext=t,Dt(Fn),Dt(Mn),Pt(Mn,t)):Dt(Fn),Pt(Fn,n)}var $i=null,fu=!1,Yu=!1;function Xv(t){$i===null?$i=[t]:$i.push(t)}function bS(t){fu=!0,Xv(t)}function Xr(){if(!Yu&&$i!==null){Yu=!0;var t=0,e=St;try{var n=$i;for(St=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}$i=null,fu=!1}catch(r){throw $i!==null&&($i=$i.slice(t+1)),gv(Fh,Xr),r}finally{St=e,Yu=!1}}return null}var ta=[],na=0,Oc=null,kc=0,ti=[],ni=0,ds=null,ji=1,Ki="";function Qr(t,e){ta[na++]=kc,ta[na++]=Oc,Oc=t,kc=e}function $v(t,e,n){ti[ni++]=ji,ti[ni++]=Ki,ti[ni++]=ds,ds=t;var i=ji;t=Ki;var r=32-yi(i)-1;i&=~(1<<r),n+=1;var s=32-yi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ji=1<<32-yi(e)+r|n<<r|i,Ki=s+t}else ji=1<<s|n<<r|i,Ki=t}function Xh(t){t.return!==null&&(Qr(t,1),$v(t,1,0))}function $h(t){for(;t===Oc;)Oc=ta[--na],ta[na]=null,kc=ta[--na],ta[na]=null;for(;t===ds;)ds=ti[--ni],ti[ni]=null,Ki=ti[--ni],ti[ni]=null,ji=ti[--ni],ti[ni]=null}var qn=null,Yn=null,Ut=!1,gi=null;function Yv(t,e){var n=ii(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qn=t,Yn=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qn=t,Yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:ji,overflow:Ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ii(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qn=t,Yn=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dd(t){if(Ut){var e=Yn;if(e){var n=e;if(!qm(t,e)){if(fd(t))throw Error(Se(418));e=Ur(n.nextSibling);var i=qn;e&&qm(t,e)?Yv(i,n):(t.flags=t.flags&-4097|2,Ut=!1,qn=t)}}else{if(fd(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Ut=!1,qn=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qn=t}function wl(t){if(t!==qn)return!1;if(!Ut)return jm(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=Yn)){if(fd(t))throw qv(),Error(Se(418));for(;e;)Yv(t,e),e=Ur(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yn=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yn=null}}else Yn=qn?Ur(t.stateNode.nextSibling):null;return!0}function qv(){for(var t=Yn;t;)t=Ur(t.nextSibling)}function _a(){Yn=qn=null,Ut=!1}function Yh(t){gi===null?gi=[t]:gi.push(t)}var AS=cr.ReactCurrentBatchConfig;function Xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function El(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function jv(t){function e(u,g){if(t){var M=u.deletions;M===null?(u.deletions=[g],u.flags|=16):M.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Br(u,g),u.index=0,u.sibling=null,u}function s(u,g,M){return u.index=M,t?(M=u.alternate,M!==null?(M=M.index,M<g?(u.flags|=2,g):M):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,M,S){return g===null||g.tag!==6?(g=ef(M,u.mode,S),g.return=u,g):(g=r(g,M),g.return=u,g)}function l(u,g,M,S){var E=M.type;return E===js?d(u,g,M.props.children,S,M.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mr&&Km(E)===g.type)?(S=r(g,M.props),S.ref=Xa(u,g,M),S.return=u,S):(S=gc(M.type,M.key,M.props,null,u.mode,S),S.ref=Xa(u,g,M),S.return=u,S)}function c(u,g,M,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=tf(M,u.mode,S),g.return=u,g):(g=r(g,M.children||[]),g.return=u,g)}function d(u,g,M,S,E){return g===null||g.tag!==7?(g=os(M,u.mode,S,E),g.return=u,g):(g=r(g,M),g.return=u,g)}function h(u,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ef(""+g,u.mode,M),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hl:return M=gc(g.type,g.key,g.props,null,u.mode,M),M.ref=Xa(u,null,g),M.return=u,M;case qs:return g=tf(g,u.mode,M),g.return=u,g;case Mr:var S=g._init;return h(u,S(g._payload),M)}if(ho(g)||za(g))return g=os(g,u.mode,M,null),g.return=u,g;El(u,g)}return null}function f(u,g,M,S){var E=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return E!==null?null:o(u,g,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case hl:return M.key===E?l(u,g,M,S):null;case qs:return M.key===E?c(u,g,M,S):null;case Mr:return E=M._init,f(u,g,E(M._payload),S)}if(ho(M)||za(M))return E!==null?null:d(u,g,M,S,null);El(u,M)}return null}function m(u,g,M,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(M)||null,o(g,u,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case hl:return u=u.get(S.key===null?M:S.key)||null,l(g,u,S,E);case qs:return u=u.get(S.key===null?M:S.key)||null,c(g,u,S,E);case Mr:var T=S._init;return m(u,g,M,T(S._payload),E)}if(ho(S)||za(S))return u=u.get(M)||null,d(g,u,S,E,null);El(g,S)}return null}function v(u,g,M,S){for(var E=null,T=null,R=g,x=g=0,A=null;R!==null&&x<M.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var P=f(u,R,M[x],S);if(P===null){R===null&&(R=A);break}t&&R&&P.alternate===null&&e(u,R),g=s(P,g,x),T===null?E=P:T.sibling=P,T=P,R=A}if(x===M.length)return n(u,R),Ut&&Qr(u,x),E;if(R===null){for(;x<M.length;x++)R=h(u,M[x],S),R!==null&&(g=s(R,g,x),T===null?E=R:T.sibling=R,T=R);return Ut&&Qr(u,x),E}for(R=i(u,R);x<M.length;x++)A=m(R,u,x,M[x],S),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?x:A.key),g=s(A,g,x),T===null?E=A:T.sibling=A,T=A);return t&&R.forEach(function(U){return e(u,U)}),Ut&&Qr(u,x),E}function _(u,g,M,S){var E=za(M);if(typeof E!="function")throw Error(Se(150));if(M=E.call(M),M==null)throw Error(Se(151));for(var T=E=null,R=g,x=g=0,A=null,P=M.next();R!==null&&!P.done;x++,P=M.next()){R.index>x?(A=R,R=null):A=R.sibling;var U=f(u,R,P.value,S);if(U===null){R===null&&(R=A);break}t&&R&&U.alternate===null&&e(u,R),g=s(U,g,x),T===null?E=U:T.sibling=U,T=U,R=A}if(P.done)return n(u,R),Ut&&Qr(u,x),E;if(R===null){for(;!P.done;x++,P=M.next())P=h(u,P.value,S),P!==null&&(g=s(P,g,x),T===null?E=P:T.sibling=P,T=P);return Ut&&Qr(u,x),E}for(R=i(u,R);!P.done;x++,P=M.next())P=m(R,u,x,P.value,S),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?x:P.key),g=s(P,g,x),T===null?E=P:T.sibling=P,T=P);return t&&R.forEach(function(z){return e(u,z)}),Ut&&Qr(u,x),E}function p(u,g,M,S){if(typeof M=="object"&&M!==null&&M.type===js&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case hl:e:{for(var E=M.key,T=g;T!==null;){if(T.key===E){if(E=M.type,E===js){if(T.tag===7){n(u,T.sibling),g=r(T,M.props.children),g.return=u,u=g;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mr&&Km(E)===T.type){n(u,T.sibling),g=r(T,M.props),g.ref=Xa(u,T,M),g.return=u,u=g;break e}n(u,T);break}else e(u,T);T=T.sibling}M.type===js?(g=os(M.props.children,u.mode,S,M.key),g.return=u,u=g):(S=gc(M.type,M.key,M.props,null,u.mode,S),S.ref=Xa(u,g,M),S.return=u,u=S)}return a(u);case qs:e:{for(T=M.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){n(u,g.sibling),g=r(g,M.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=tf(M,u.mode,S),g.return=u,u=g}return a(u);case Mr:return T=M._init,p(u,g,T(M._payload),S)}if(ho(M))return v(u,g,M,S);if(za(M))return _(u,g,M,S);El(u,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,M),g.return=u,u=g):(n(u,g),g=ef(M,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return p}var xa=jv(!0),Kv=jv(!1),Bc=Wr(null),zc=null,ia=null,qh=null;function jh(){qh=ia=zc=null}function Kh(t){var e=Bc.current;Dt(Bc),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function da(t,e){zc=t,qh=ia=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Un=!0),t.firstContext=null)}function si(t){var e=t._currentValue;if(qh!==t)if(t={context:t,memoizedValue:e,next:null},ia===null){if(zc===null)throw Error(Se(308));ia=t,zc.dependencies={lanes:0,firstContext:t}}else ia=ia.next=t;return e}var ns=null;function Zh(t){ns===null?ns=[t]:ns.push(t)}function Zv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Zh(e)):(n.next=r.next,r.next=n),e.interleaved=n,rr(t,i)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function Jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,rr(t,n)}return r=i.interleaved,r===null?(e.next=e,Zh(i)):(e.next=r.next,r.next=e),i.interleaved=e,rr(t,n)}function uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Oh(t,n)}}function Zm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hc(t,e,n,i){var r=t.updateQueue;wr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,_=o;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=Ht({},h,f);break e;case 2:wr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ps|=a,t.lanes=a,t.memoizedState=h}}function Jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var ul={},Di=Wr(ul),$o=Wr(ul),Yo=Wr(ul);function is(t){if(t===ul)throw Error(Se(174));return t}function Qh(t,e){switch(Pt(Yo,e),Pt($o,t),Pt(Di,ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yf(e,t)}Dt(Di),Pt(Di,e)}function ya(){Dt(Di),Dt($o),Dt(Yo)}function Qv(t){is(Yo.current);var e=is(Di.current),n=Yf(e,t.type);e!==n&&(Pt($o,t),Pt(Di,n))}function ep(t){$o.current===t&&(Dt(Di),Dt($o))}var Ot=Wr(0);function Gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function tp(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var fc=cr.ReactCurrentDispatcher,ju=cr.ReactCurrentBatchConfig,hs=0,zt=null,Jt=null,sn=null,Vc=!1,Ao=!1,qo=0,RS=0;function pn(){throw Error(Se(321))}function np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wi(t[n],e[n]))return!1;return!0}function ip(t,e,n,i,r,s){if(hs=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?IS:NS,t=n(i,r),Ao){s=0;do{if(Ao=!1,qo=0,25<=s)throw Error(Se(301));s+=1,sn=Jt=null,e.updateQueue=null,fc.current=DS,t=n(i,r)}while(Ao)}if(fc.current=Wc,e=Jt!==null&&Jt.next!==null,hs=0,sn=Jt=zt=null,Vc=!1,e)throw Error(Se(300));return t}function rp(){var t=qo!==0;return qo=0,t}function Ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?zt.memoizedState=sn=t:sn=sn.next=t,sn}function ai(){if(Jt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var e=sn===null?zt.memoizedState:sn.next;if(e!==null)sn=e,Jt=t;else{if(t===null)throw Error(Se(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?zt.memoizedState=sn=t:sn=sn.next=t}return sn}function jo(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=ai(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=Jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((hs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,zt.lanes|=d,ps|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,wi(i,e.memoizedState)||(Un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,zt.lanes|=s,ps|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=ai(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);wi(s,e.memoizedState)||(Un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function e_(){}function t_(t,e){var n=zt,i=ai(),r=e(),s=!wi(i.memoizedState,r);if(s&&(i.memoizedState=r,Un=!0),i=i.queue,sp(r_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||sn!==null&&sn.memoizedState.tag&1){if(n.flags|=2048,Ko(9,i_.bind(null,n,i,r,e),void 0,null),an===null)throw Error(Se(349));hs&30||n_(n,e,r)}return r}function n_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i_(t,e,n,i){e.value=n,e.getSnapshot=i,s_(e)&&a_(t)}function r_(t,e,n){return n(function(){s_(e)&&a_(t)})}function s_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wi(t,n)}catch{return!0}}function a_(t){var e=rr(t,1);e!==null&&Si(e,t,1,-1)}function Qm(t){var e=Ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},e.queue=t,t=t.dispatch=LS.bind(null,zt,t),[e.memoizedState,t]}function Ko(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function o_(){return ai().memoizedState}function dc(t,e,n,i){var r=Ci();zt.flags|=t,r.memoizedState=Ko(1|e,n,void 0,i===void 0?null:i)}function du(t,e,n,i){var r=ai();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var a=Jt.memoizedState;if(s=a.destroy,i!==null&&np(i,a.deps)){r.memoizedState=Ko(e,n,s,i);return}}zt.flags|=t,r.memoizedState=Ko(1|e,n,s,i)}function e0(t,e){return dc(8390656,8,t,e)}function sp(t,e){return du(2048,8,t,e)}function l_(t,e){return du(4,2,t,e)}function c_(t,e){return du(4,4,t,e)}function u_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f_(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,u_.bind(null,e,t),n)}function ap(){}function d_(t,e){var n=ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&np(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function h_(t,e){var n=ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&np(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function p_(t,e,n){return hs&21?(wi(n,e)||(n=xv(),zt.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=n)}function CS(t,e){var n=St;St=n!==0&&4>n?n:4,t(!0);var i=ju.transition;ju.transition={};try{t(!1),e()}finally{St=n,ju.transition=i}}function m_(){return ai().memoizedState}function PS(t,e,n){var i=kr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},g_(t))v_(e,n);else if(n=Zv(t,e,n,i),n!==null){var r=Cn();Si(n,t,i,r),__(n,e,i)}}function LS(t,e,n){var i=kr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(g_(t))v_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,wi(o,a)){var l=e.interleaved;l===null?(r.next=r,Zh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zv(t,e,r,i),n!==null&&(r=Cn(),Si(n,t,i,r),__(n,e,i))}}function g_(t){var e=t.alternate;return t===zt||e!==null&&e===zt}function v_(t,e){Ao=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function __(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Oh(t,n)}}var Wc={readContext:si,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},IS={readContext:si,useCallback:function(t,e){return Ci().memoizedState=[t,e===void 0?null:e],t},useContext:si,useEffect:e0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dc(4194308,4,u_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dc(4194308,4,t,e)},useInsertionEffect:function(t,e){return dc(4,2,t,e)},useMemo:function(t,e){var n=Ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=PS.bind(null,zt,t),[i.memoizedState,t]},useRef:function(t){var e=Ci();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:ap,useDeferredValue:function(t){return Ci().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=CS.bind(null,t[1]),Ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=zt,r=Ci();if(Ut){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),an===null)throw Error(Se(349));hs&30||n_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,e0(r_.bind(null,i,s,t),[t]),i.flags|=2048,Ko(9,i_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ci(),e=an.identifierPrefix;if(Ut){var n=Ki,i=ji;n=(i&~(1<<32-yi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NS={readContext:si,useCallback:d_,useContext:si,useEffect:sp,useImperativeHandle:f_,useInsertionEffect:l_,useLayoutEffect:c_,useMemo:h_,useReducer:Ku,useRef:o_,useState:function(){return Ku(jo)},useDebugValue:ap,useDeferredValue:function(t){var e=ai();return p_(e,Jt.memoizedState,t)},useTransition:function(){var t=Ku(jo)[0],e=ai().memoizedState;return[t,e]},useMutableSource:e_,useSyncExternalStore:t_,useId:m_,unstable_isNewReconciler:!1},DS={readContext:si,useCallback:d_,useContext:si,useEffect:sp,useImperativeHandle:f_,useInsertionEffect:l_,useLayoutEffect:c_,useMemo:h_,useReducer:Zu,useRef:o_,useState:function(){return Zu(jo)},useDebugValue:ap,useDeferredValue:function(t){var e=ai();return Jt===null?e.memoizedState=t:p_(e,Jt.memoizedState,t)},useTransition:function(){var t=Zu(jo)[0],e=ai().memoizedState;return[t,e]},useMutableSource:e_,useSyncExternalStore:t_,useId:m_,unstable_isNewReconciler:!1};function di(t,e){if(t&&t.defaultProps){e=Ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Cn(),r=kr(t),s=er(i,r);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,r),e!==null&&(Si(e,t,r,i),uc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Cn(),r=kr(t),s=er(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,r),e!==null&&(Si(e,t,r,i),uc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Cn(),i=kr(t),r=er(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fr(t,r,i),e!==null&&(Si(e,t,i,n),uc(e,t,i))}};function t0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Go(n,i)||!Go(r,s):!0}function x_(t,e,n){var i=!1,r=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=si(s):(r=On(e)?fs:Mn.current,i=e.contextTypes,s=(i=i!=null)?va(t,r):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function n0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=si(s):(s=On(e)?fs:Mn.current,r.context=va(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hu.enqueueReplaceState(r,r.state,null),Hc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Sa(t,e){try{var n="",i=e;do n+=ly(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var US=typeof WeakMap=="function"?WeakMap:Map;function y_(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$c||($c=!0,bd=i),gd(t,e)},n}function S_(t,e,n){n=er(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gd(t,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function i0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new US;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jS.bind(null,t,e,n),e.then(t,t))}function r0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function s0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var FS=cr.ReactCurrentOwner,Un=!1;function An(t,e,n,i){e.child=t===null?Kv(e,null,n,i):xa(e,t.child,n,i)}function a0(t,e,n,i,r){n=n.render;var s=e.ref;return da(e,r),i=ip(t,e,n,i,s,r),n=rp(),t!==null&&!Un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,sr(t,e,r)):(Ut&&n&&Xh(e),e.flags|=1,An(t,e,i,r),e.child)}function o0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M_(t,e,s,i,r)):(t=gc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(a,i)&&t.ref===e.ref)return sr(t,e,r)}return e.flags|=1,t=Br(s,i),t.ref=e.ref,t.return=e,e.child=t}function M_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Go(s,i)&&t.ref===e.ref)if(Un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Un=!0);else return e.lanes=t.lanes,sr(t,e,r)}return vd(t,e,n,i,r)}function w_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(sa,Wn),Wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pt(sa,Wn),Wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Pt(sa,Wn),Wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Pt(sa,Wn),Wn|=i;return An(t,e,r,n),e.child}function E_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=On(n)?fs:Mn.current;return s=va(e,s),da(e,r),n=ip(t,e,n,i,s,r),i=rp(),t!==null&&!Un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,sr(t,e,r)):(Ut&&i&&Xh(e),e.flags|=1,An(t,e,n,r),e.child)}function l0(t,e,n,i,r){if(On(n)){var s=!0;Fc(e)}else s=!1;if(da(e,r),e.stateNode===null)hc(t,e),x_(e,n,i),md(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=si(c):(c=On(n)?fs:Mn.current,c=va(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&n0(e,a,i,c),wr=!1;var f=e.memoizedState;a.state=f,Hc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Fn.current||wr?(typeof d=="function"&&(pd(e,n,d,i),l=e.memoizedState),(o=wr||t0(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Jv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:di(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=si(l):(l=On(n)?fs:Mn.current,l=va(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&n0(e,a,i,l),wr=!1,f=e.memoizedState,a.state=f,Hc(e,i,a,r);var v=e.memoizedState;o!==h||f!==v||Fn.current||wr?(typeof m=="function"&&(pd(e,n,m,i),v=e.memoizedState),(c=wr||t0(e,n,c,i,f,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return _d(t,e,n,i,s,r)}function _d(t,e,n,i,r,s){E_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ym(e,n,!1),sr(t,e,s);i=e.stateNode,FS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=xa(e,t.child,null,s),e.child=xa(e,null,o,s)):An(t,e,o,s),e.memoizedState=i.state,r&&Ym(e,n,!0),e.child}function T_(t){var e=t.stateNode;e.pendingContext?$m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$m(t,e.context,!1),Qh(t,e.containerInfo)}function c0(t,e,n,i,r){return _a(),Yh(r),e.flags|=256,An(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function b_(t,e,n){var i=e.pendingProps,r=Ot.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Pt(Ot,r&1),t===null)return dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=gu(a,i,0,null),t=os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=xd,t):op(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return OS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Br(o,s):(s=os(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?yd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=Br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function op(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,i){return i!==null&&Yh(i),xa(e,t.child,null,n),t=op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ju(Error(Se(422))),Tl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gu({mode:"visible",children:i.children},r,0,null),s=os(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xa(e,t.child,null,a),e.child.memoizedState=yd(a),e.memoizedState=xd,s);if(!(e.mode&1))return Tl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(Se(419)),i=Ju(s,i,void 0),Tl(t,e,a,i)}if(o=(a&t.childLanes)!==0,Un||o){if(i=an,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,rr(t,r),Si(i,t,r,-1))}return hp(),i=Ju(Error(Se(421))),Tl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=KS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Yn=Ur(r.nextSibling),qn=e,Ut=!0,gi=null,t!==null&&(ti[ni++]=ji,ti[ni++]=Ki,ti[ni++]=ds,ji=t.id,Ki=t.overflow,ds=e),e=op(e,i.children),e.flags|=4096,e)}function u0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hd(t.return,e,n)}function Qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function A_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(An(t,e,i.children,n),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,n,e);else if(t.tag===19)u0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Pt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qu(e,!0,n,null,s);break;case"together":Qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kS(t,e,n){switch(e.tag){case 3:T_(e),_a();break;case 5:Qv(e);break;case 1:On(e.type)&&Fc(e);break;case 4:Qh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(Bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(Ot,Ot.current&1),e.flags|=128,null):n&e.child.childLanes?b_(t,e,n):(Pt(Ot,Ot.current&1),t=sr(t,e,n),t!==null?t.sibling:null);Pt(Ot,Ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return A_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,w_(t,e,n)}return sr(t,e,n)}var R_,Sd,C_,P_;R_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};C_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,is(Di.current);var s=null;switch(n){case"input":r=Vf(t,r),i=Vf(t,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=$f(t,r),i=$f(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Dc)}qf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Nt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};P_=function(t,e,n,i){n!==i&&(e.flags|=4)};function $a(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function mn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function BS(t,e,n){var i=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(e),null;case 1:return On(e.type)&&Uc(),mn(e),null;case 3:return i=e.stateNode,ya(),Dt(Fn),Dt(Mn),tp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&(Cd(gi),gi=null))),Sd(t,e),mn(e),null;case 5:ep(e);var r=is(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)C_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return mn(e),null}if(t=is(Di.current),wl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[Xo]=s,t=(e.mode&1)!==0,n){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(r=0;r<mo.length;r++)Nt(mo[r],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":xm(i,s),Nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Nt("invalid",i);break;case"textarea":Sm(i,s),Nt("invalid",i)}qf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,o,t),r=["children",""+o]):Uo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Nt("scroll",i)}switch(n){case"input":pl(i),ym(i,s,!0);break;case"textarea":pl(i),Mm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Dc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Li]=e,t[Xo]=i,R_(t,e,!1,!1),e.stateNode=t;e:{switch(a=jf(n,i),n){case"dialog":Nt("cancel",t),Nt("close",t),r=i;break;case"iframe":case"object":case"embed":Nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<mo.length;r++)Nt(mo[r],t);r=i;break;case"source":Nt("error",t),r=i;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),r=i;break;case"details":Nt("toggle",t),r=i;break;case"input":xm(t,i),r=Vf(t,i),Nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Nt("invalid",t);break;case"textarea":Sm(t,i),r=$f(t,i),Nt("invalid",t);break;default:r=i}qf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ov(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Nt("scroll",t):l!=null&&Lh(t,s,l,a))}switch(n){case"input":pl(t),ym(t,i,!1);break;case"textarea":pl(t),Mm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?la(t,!!i.multiple,s,!1):i.defaultValue!=null&&la(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Dc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mn(e),null;case 6:if(t&&e.stateNode!=null)P_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=is(Yo.current),is(Di.current),wl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==n)&&(t=qn,t!==null))switch(t.tag){case 3:Ml(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ml(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return mn(e),null;case 13:if(Dt(Ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Yn!==null&&e.mode&1&&!(e.flags&128))qv(),_a(),e.flags|=98560,s=!1;else if(s=wl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[Li]=e}else _a(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mn(e),s=!1}else gi!==null&&(Cd(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ot.current&1?Qt===0&&(Qt=3):hp())),e.updateQueue!==null&&(e.flags|=4),mn(e),null);case 4:return ya(),Sd(t,e),t===null&&Vo(e.stateNode.containerInfo),mn(e),null;case 10:return Kh(e.type._context),mn(e),null;case 17:return On(e.type)&&Uc(),mn(e),null;case 19:if(Dt(Ot),s=e.memoizedState,s===null)return mn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$a(s,!1);else{if(Qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Gc(t),a!==null){for(e.flags|=128,$a(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pt(Ot,Ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&Xt()>Ma&&(e.flags|=128,i=!0,$a(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$a(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ut)return mn(e),null}else 2*Xt()-s.renderingStartTime>Ma&&n!==1073741824&&(e.flags|=128,i=!0,$a(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,n=Ot.current,Pt(Ot,i?n&1|2:n&1),e):(mn(e),null);case 22:case 23:return dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Wn&1073741824&&(mn(e),e.subtreeFlags&6&&(e.flags|=8192)):mn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function zS(t,e){switch($h(e),e.tag){case 1:return On(e.type)&&Uc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ya(),Dt(Fn),Dt(Mn),tp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ep(e),null;case 13:if(Dt(Ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));_a()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Dt(Ot),null;case 4:return ya(),null;case 10:return Kh(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var bl=!1,_n=!1,HS=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ra(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Gt(t,e,i)}else n.current=null}function Md(t,e,n){try{n()}catch(i){Gt(t,e,i)}}var f0=!1;function GS(t,e){if(sd=Lc,t=Uv(),Wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},Lc=!1,Ne=e;Ne!==null;)if(e=Ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ne=t;else for(;Ne!==null;){e=Ne;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,p=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:di(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(S){Gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}return v=f0,f0=!1,v}function Ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,n,s)}r=r.next}while(r!==i)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L_(t){var e=t.alternate;e!==null&&(t.alternate=null,L_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Li],delete e[Xo],delete e[cd],delete e[ES],delete e[TS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function d0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dc));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var on=null,hi=!1;function pr(t,e,n){for(n=n.child;n!==null;)N_(t,e,n),n=n.sibling}function N_(t,e,n){if(Ni&&typeof Ni.onCommitFiberUnmount=="function")try{Ni.onCommitFiberUnmount(au,n)}catch{}switch(n.tag){case 5:_n||ra(n,e);case 6:var i=on,r=hi;on=null,pr(t,e,n),on=i,hi=r,on!==null&&(hi?(t=on,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):on.removeChild(n.stateNode));break;case 18:on!==null&&(hi?(t=on,n=n.stateNode,t.nodeType===8?$u(t.parentNode,n):t.nodeType===1&&$u(t,n),zo(t)):$u(on,n.stateNode));break;case 4:i=on,r=hi,on=n.stateNode.containerInfo,hi=!0,pr(t,e,n),on=i,hi=r;break;case 0:case 11:case 14:case 15:if(!_n&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Md(n,e,a),r=r.next}while(r!==i)}pr(t,e,n);break;case 1:if(!_n&&(ra(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Gt(n,e,o)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(_n=(i=_n)||n.memoizedState!==null,pr(t,e,n),_n=i):pr(t,e,n);break;default:pr(t,e,n)}}function h0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HS),e.forEach(function(i){var r=ZS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function li(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:on=o.stateNode,hi=!1;break e;case 3:on=o.stateNode.containerInfo,hi=!0;break e;case 4:on=o.stateNode.containerInfo,hi=!0;break e}o=o.return}if(on===null)throw Error(Se(160));N_(s,a,r),on=null,hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D_(e,t),e=e.sibling}function D_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(e,t),Ti(t),i&4){try{Ro(3,t,t.return),pu(3,t)}catch(_){Gt(t,t.return,_)}try{Ro(5,t,t.return)}catch(_){Gt(t,t.return,_)}}break;case 1:li(e,t),Ti(t),i&512&&n!==null&&ra(n,n.return);break;case 5:if(li(e,t),Ti(t),i&512&&n!==null&&ra(n,n.return),t.flags&32){var r=t.stateNode;try{Fo(r,"")}catch(_){Gt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&nv(r,s),jf(o,a);var c=jf(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?ov(r,h):d==="dangerouslySetInnerHTML"?sv(r,h):d==="children"?Fo(r,h):Lh(r,d,h,c)}switch(o){case"input":Wf(r,s);break;case"textarea":iv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?la(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?la(r,!!s.multiple,s.defaultValue,!0):la(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xo]=s}catch(_){Gt(t,t.return,_)}}break;case 6:if(li(e,t),Ti(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Gt(t,t.return,_)}}break;case 3:if(li(e,t),Ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(_){Gt(t,t.return,_)}break;case 4:li(e,t),Ti(t);break;case 13:li(e,t),Ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(up=Xt())),i&4&&h0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(_n=(c=_n)||d,li(e,t),_n=c):li(e,t),Ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ne=t,d=t.child;d!==null;){for(h=Ne=d;Ne!==null;){switch(f=Ne,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ro(4,f,f.return);break;case 1:ra(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Gt(i,n,_)}}break;case 5:ra(f,f.return);break;case 22:if(f.memoizedState!==null){m0(h);continue}}m!==null?(m.return=f,Ne=m):m0(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=av("display",a))}catch(_){Gt(t,t.return,_)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){Gt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:li(e,t),Ti(t),i&4&&h0(t);break;case 21:break;default:li(e,t),Ti(t)}}function Ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I_(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=d0(t);Td(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=d0(t);Ed(t,o,a);break;default:throw Error(Se(161))}}catch(l){Gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VS(t,e,n){Ne=t,U_(t)}function U_(t,e,n){for(var i=(t.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||bl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||_n;o=bl;var c=_n;if(bl=a,(_n=l)&&!c)for(Ne=r;Ne!==null;)a=Ne,l=a.child,a.tag===22&&a.memoizedState!==null?g0(r):l!==null?(l.return=a,Ne=l):g0(r);for(;s!==null;)Ne=s,U_(s),s=s.sibling;Ne=r,bl=o,_n=c}p0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):p0(t)}}function p0(t){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_n||pu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!_n)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:di(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&zo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}_n||e.flags&512&&wd(e)}catch(f){Gt(e,e.return,f)}}if(e===t){Ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function m0(t){for(;Ne!==null;){var e=Ne;if(e===t){Ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function g0(t){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(l){Gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{wd(e)}catch(l){Gt(e,s,l)}break;case 5:var a=e.return;try{wd(e)}catch(l){Gt(e,a,l)}}}catch(l){Gt(e,e.return,l)}if(e===t){Ne=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ne=o;break}Ne=e.return}}var WS=Math.ceil,Xc=cr.ReactCurrentDispatcher,lp=cr.ReactCurrentOwner,ri=cr.ReactCurrentBatchConfig,mt=0,an=null,jt=null,cn=0,Wn=0,sa=Wr(0),Qt=0,Zo=null,ps=0,mu=0,cp=0,Co=null,Dn=null,up=0,Ma=1/0,Xi=null,$c=!1,bd=null,Or=null,Al=!1,Lr=null,Yc=0,Po=0,Ad=null,pc=-1,mc=0;function Cn(){return mt&6?Xt():pc!==-1?pc:pc=Xt()}function kr(t){return t.mode&1?mt&2&&cn!==0?cn&-cn:AS.transition!==null?(mc===0&&(mc=xv()),mc):(t=St,t!==0||(t=window.event,t=t===void 0?16:bv(t.type)),t):1}function Si(t,e,n,i){if(50<Po)throw Po=0,Ad=null,Error(Se(185));ol(t,n,i),(!(mt&2)||t!==an)&&(t===an&&(!(mt&2)&&(mu|=n),Qt===4&&Ar(t,cn)),kn(t,i),n===1&&mt===0&&!(e.mode&1)&&(Ma=Xt()+500,fu&&Xr()))}function kn(t,e){var n=t.callbackNode;Ay(t,e);var i=Pc(t,t===an?cn:0);if(i===0)n!==null&&Tm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Tm(n),e===1)t.tag===0?bS(v0.bind(null,t)):Xv(v0.bind(null,t)),MS(function(){!(mt&6)&&Xr()}),n=null;else{switch(yv(i)){case 1:n=Fh;break;case 4:n=vv;break;case 16:n=Cc;break;case 536870912:n=_v;break;default:n=Cc}n=V_(n,F_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F_(t,e){if(pc=-1,mc=0,mt&6)throw Error(Se(327));var n=t.callbackNode;if(ha()&&t.callbackNode!==n)return null;var i=Pc(t,t===an?cn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=qc(t,i);else{e=i;var r=mt;mt|=2;var s=k_();(an!==t||cn!==e)&&(Xi=null,Ma=Xt()+500,as(t,e));do try{YS();break}catch(o){O_(t,o)}while(!0);jh(),Xc.current=s,mt=r,jt!==null?e=0:(an=null,cn=0,e=Qt)}if(e!==0){if(e===2&&(r=ed(t),r!==0&&(i=r,e=Rd(t,r))),e===1)throw n=Zo,as(t,0),Ar(t,i),kn(t,Xt()),n;if(e===6)Ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!XS(r)&&(e=qc(t,i),e===2&&(s=ed(t),s!==0&&(i=s,e=Rd(t,s))),e===1))throw n=Zo,as(t,0),Ar(t,i),kn(t,Xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:es(t,Dn,Xi);break;case 3:if(Ar(t,i),(i&130023424)===i&&(e=up+500-Xt(),10<e)){if(Pc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ld(es.bind(null,t,Dn,Xi),e);break}es(t,Dn,Xi);break;case 4:if(Ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-yi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WS(i/1960))-i,10<i){t.timeoutHandle=ld(es.bind(null,t,Dn,Xi),i);break}es(t,Dn,Xi);break;case 5:es(t,Dn,Xi);break;default:throw Error(Se(329))}}}return kn(t,Xt()),t.callbackNode===n?F_.bind(null,t):null}function Rd(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=qc(t,e),t!==2&&(e=Dn,Dn=n,e!==null&&Cd(e)),t}function Cd(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function XS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!wi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~cp,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yi(e),i=1<<n;t[n]=-1,e&=~i}}function v0(t){if(mt&6)throw Error(Se(327));ha();var e=Pc(t,0);if(!(e&1))return kn(t,Xt()),null;var n=qc(t,e);if(t.tag!==0&&n===2){var i=ed(t);i!==0&&(e=i,n=Rd(t,i))}if(n===1)throw n=Zo,as(t,0),Ar(t,e),kn(t,Xt()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Dn,Xi),kn(t,Xt()),null}function fp(t,e){var n=mt;mt|=1;try{return t(e)}finally{mt=n,mt===0&&(Ma=Xt()+500,fu&&Xr())}}function ms(t){Lr!==null&&Lr.tag===0&&!(mt&6)&&ha();var e=mt;mt|=1;var n=ri.transition,i=St;try{if(ri.transition=null,St=1,t)return t()}finally{St=i,ri.transition=n,mt=e,!(mt&6)&&Xr()}}function dp(){Wn=sa.current,Dt(sa)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SS(n)),jt!==null)for(n=jt.return;n!==null;){var i=n;switch($h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:ya(),Dt(Fn),Dt(Mn),tp();break;case 5:ep(i);break;case 4:ya();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:Kh(i.type._context);break;case 22:case 23:dp()}n=n.return}if(an=t,jt=t=Br(t.current,null),cn=Wn=e,Qt=0,Zo=null,cp=mu=ps=0,Dn=Co=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ns=null}return t}function O_(t,e){do{var n=jt;try{if(jh(),fc.current=Wc,Vc){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vc=!1}if(hs=0,sn=Jt=zt=null,Ao=!1,qo=0,lp.current=null,n===null||n.return===null){Qt=1,Zo=e,jt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=cn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=r0(a);if(m!==null){m.flags&=-257,s0(m,a,o,s,e),m.mode&1&&i0(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){i0(s,c,e),hp();break e}l=Error(Se(426))}}else if(Ut&&o.mode&1){var p=r0(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),s0(p,a,o,s,e),Yh(Sa(l,o));break e}}s=l=Sa(l,o),Qt!==4&&(Qt=2),Co===null?Co=[s]:Co.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=y_(s,l,e);Zm(s,u);break e;case 1:o=l;var g=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Or===null||!Or.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=S_(s,o,e);Zm(s,S);break e}}s=s.return}while(s!==null)}z_(n)}catch(E){e=E,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function k_(){var t=Xc.current;return Xc.current=Wc,t===null?Wc:t}function hp(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),an===null||!(ps&268435455)&&!(mu&268435455)||Ar(an,cn)}function qc(t,e){var n=mt;mt|=2;var i=k_();(an!==t||cn!==e)&&(Xi=null,as(t,e));do try{$S();break}catch(r){O_(t,r)}while(!0);if(jh(),mt=n,Xc.current=i,jt!==null)throw Error(Se(261));return an=null,cn=0,Qt}function $S(){for(;jt!==null;)B_(jt)}function YS(){for(;jt!==null&&!_y();)B_(jt)}function B_(t){var e=G_(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,e===null?z_(t):jt=e,lp.current=null}function z_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zS(n,e),n!==null){n.flags&=32767,jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,jt=null;return}}else if(n=BS(n,e,Wn),n!==null){jt=n;return}if(e=e.sibling,e!==null){jt=e;return}jt=e=t}while(e!==null);Qt===0&&(Qt=5)}function es(t,e,n){var i=St,r=ri.transition;try{ri.transition=null,St=1,qS(t,e,n,i)}finally{ri.transition=r,St=i}return null}function qS(t,e,n,i){do ha();while(Lr!==null);if(mt&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ry(t,s),t===an&&(jt=an=null,cn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,V_(Cc,function(){return ha(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ri.transition,ri.transition=null;var a=St;St=1;var o=mt;mt|=4,lp.current=null,GS(t,n),D_(n,t),pS(ad),Lc=!!sd,ad=sd=null,t.current=n,VS(n),xy(),mt=o,St=a,ri.transition=s}else t.current=n;if(Al&&(Al=!1,Lr=t,Yc=r),s=t.pendingLanes,s===0&&(Or=null),My(n.stateNode),kn(t,Xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($c)throw $c=!1,t=bd,bd=null,t;return Yc&1&&t.tag!==0&&ha(),s=t.pendingLanes,s&1?t===Ad?Po++:(Po=0,Ad=t):Po=0,Xr(),null}function ha(){if(Lr!==null){var t=yv(Yc),e=ri.transition,n=St;try{if(ri.transition=null,St=16>t?16:t,Lr===null)var i=!1;else{if(t=Lr,Lr=null,Yc=0,mt&6)throw Error(Se(331));var r=mt;for(mt|=4,Ne=t.current;Ne!==null;){var s=Ne,a=s.child;if(Ne.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ne=c;Ne!==null;){var d=Ne;switch(d.tag){case 0:case 11:case 15:Ro(8,d,s)}var h=d.child;if(h!==null)h.return=d,Ne=h;else for(;Ne!==null;){d=Ne;var f=d.sibling,m=d.return;if(L_(d),d===c){Ne=null;break}if(f!==null){f.return=m,Ne=f;break}Ne=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}Ne=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ne=a;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ne=u;break e}Ne=s.return}}var g=t.current;for(Ne=g;Ne!==null;){a=Ne;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Ne=M;else e:for(a=g;Ne!==null;){if(o=Ne,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:pu(9,o)}}catch(E){Gt(o,o.return,E)}if(o===a){Ne=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ne=S;break e}Ne=o.return}}if(mt=r,Xr(),Ni&&typeof Ni.onPostCommitFiberRoot=="function")try{Ni.onPostCommitFiberRoot(au,t)}catch{}i=!0}return i}finally{St=n,ri.transition=e}}return!1}function _0(t,e,n){e=Sa(n,e),e=y_(t,e,1),t=Fr(t,e,1),e=Cn(),t!==null&&(ol(t,1,e),kn(t,e))}function Gt(t,e,n){if(t.tag===3)_0(t,t,n);else for(;e!==null;){if(e.tag===3){_0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){t=Sa(n,t),t=S_(e,t,1),e=Fr(e,t,1),t=Cn(),e!==null&&(ol(e,1,t),kn(e,t));break}}e=e.return}}function jS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Cn(),t.pingedLanes|=t.suspendedLanes&n,an===t&&(cn&n)===n&&(Qt===4||Qt===3&&(cn&130023424)===cn&&500>Xt()-up?as(t,0):cp|=n),kn(t,e)}function H_(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=Cn();t=rr(t,e),t!==null&&(ol(t,e,n),kn(t,n))}function KS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H_(t,n)}function ZS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),H_(t,n)}var G_;G_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fn.current)Un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Un=!1,kS(t,e,n);Un=!!(t.flags&131072)}else Un=!1,Ut&&e.flags&1048576&&$v(e,kc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hc(t,e),t=e.pendingProps;var r=va(e,Mn.current);da(e,n),r=ip(null,e,i,t,r,n);var s=rp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,On(i)?(s=!0,Fc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jh(e),r.updater=hu,e.stateNode=r,r._reactInternals=e,md(e,i,t,n),e=_d(null,e,i,!0,s,n)):(e.tag=0,Ut&&s&&Xh(e),An(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=QS(i),t=di(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=l0(null,e,i,t,n);break e;case 11:e=a0(null,e,i,t,n);break e;case 14:e=o0(null,e,i,di(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),l0(t,e,i,r,n);case 3:e:{if(T_(e),t===null)throw Error(Se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jv(t,e),Hc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Sa(Error(Se(423)),e),e=c0(t,e,i,n,r);break e}else if(i!==r){r=Sa(Error(Se(424)),e),e=c0(t,e,i,n,r);break e}else for(Yn=Ur(e.stateNode.containerInfo.firstChild),qn=e,Ut=!0,gi=null,n=Kv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_a(),i===r){e=sr(t,e,n);break e}An(t,e,i,n)}e=e.child}return e;case 5:return Qv(e),t===null&&dd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,od(i,r)?a=null:s!==null&&od(i,s)&&(e.flags|=32),E_(t,e),An(t,e,a,n),e.child;case 6:return t===null&&dd(e),null;case 13:return b_(t,e,n);case 4:return Qh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xa(e,null,i,n):An(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),a0(t,e,i,r,n);case 7:return An(t,e,e.pendingProps,n),e.child;case 8:return An(t,e,e.pendingProps.children,n),e.child;case 12:return An(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Pt(Bc,i._currentValue),i._currentValue=a,s!==null)if(wi(s.value,a)){if(s.children===r.children&&!Fn.current){e=sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=er(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(Se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),hd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}An(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,da(e,n),r=si(r),i=i(r),e.flags|=1,An(t,e,i,n),e.child;case 14:return i=e.type,r=di(i,e.pendingProps),r=di(i.type,r),o0(t,e,i,r,n);case 15:return M_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),hc(t,e),e.tag=1,On(i)?(t=!0,Fc(e)):t=!1,da(e,n),x_(e,i,r),md(e,i,r,n),_d(null,e,i,!0,t,n);case 19:return A_(t,e,n);case 22:return w_(t,e,n)}throw Error(Se(156,e.tag))};function V_(t,e){return gv(t,e)}function JS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,e,n,i){return new JS(t,e,n,i)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QS(t){if(typeof t=="function")return pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nh)return 11;if(t===Dh)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=ii(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")pp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case js:return os(n.children,r,s,e);case Ih:a=8,r|=8;break;case Bf:return t=ii(12,n,e,r|2),t.elementType=Bf,t.lanes=s,t;case zf:return t=ii(13,n,e,r),t.elementType=zf,t.lanes=s,t;case Hf:return t=ii(19,n,e,r),t.elementType=Hf,t.lanes=s,t;case Qg:return gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zg:a=10;break e;case Jg:a=9;break e;case Nh:a=11;break e;case Dh:a=14;break e;case Mr:a=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=ii(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=ii(7,t,i,e),t.lanes=n,t}function gu(t,e,n,i){return t=ii(22,t,i,e),t.elementType=Qg,t.lanes=n,t.stateNode={isHidden:!1},t}function ef(t,e,n){return t=ii(6,t,null,e),t.lanes=n,t}function tf(t,e,n){return e=ii(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mp(t,e,n,i,r,s,a,o,l){return t=new eM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ii(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(s),t}function tM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function W_(t){if(!t)return Gr;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(On(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(On(n))return Wv(t,n,e)}return e}function X_(t,e,n,i,r,s,a,o,l){return t=mp(n,i,!0,t,r,s,a,o,l),t.context=W_(null),n=t.current,i=Cn(),r=kr(n),s=er(i,r),s.callback=e??null,Fr(n,s,r),t.current.lanes=r,ol(t,r,i),kn(t,i),t}function vu(t,e,n,i){var r=e.current,s=Cn(),a=kr(r);return n=W_(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fr(r,e,a),t!==null&&(Si(t,r,a,s),uc(t,r,a)),a}function jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function x0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gp(t,e){x0(t,e),(t=t.alternate)&&x0(t,e)}function nM(){return null}var $_=typeof reportError=="function"?reportError:function(t){console.error(t)};function vp(t){this._internalRoot=t}_u.prototype.render=vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));vu(t,e,null,null)};_u.prototype.unmount=vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){vu(null,t,null,null)}),e[ir]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=wv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<br.length&&e!==0&&e<br[n].priority;n++);br.splice(n,0,t),n===0&&Tv(t)}};function _p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function y0(){}function iM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=jc(a);s.call(c)}}var a=X_(e,i,t,0,null,!1,!1,"",y0);return t._reactRootContainer=a,t[ir]=a.current,Vo(t.nodeType===8?t.parentNode:t),ms(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=jc(l);o.call(c)}}var l=mp(t,0,!1,null,null,!1,!1,"",y0);return t._reactRootContainer=l,t[ir]=l.current,Vo(t.nodeType===8?t.parentNode:t),ms(function(){vu(e,l,n,i)}),l}function yu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=jc(a);o.call(l)}}vu(e,a,t,r)}else a=iM(n,e,t,r,i);return jc(a)}Sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(Oh(e,n|1),kn(e,Xt()),!(mt&6)&&(Ma=Xt()+500,Xr()))}break;case 13:ms(function(){var i=rr(t,1);if(i!==null){var r=Cn();Si(i,t,1,r)}}),gp(t,1)}};kh=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=Cn();Si(e,t,134217728,n)}gp(t,134217728)}};Mv=function(t){if(t.tag===13){var e=kr(t),n=rr(t,e);if(n!==null){var i=Cn();Si(n,t,e,i)}gp(t,e)}};wv=function(){return St};Ev=function(t,e){var n=St;try{return St=t,e()}finally{St=n}};Zf=function(t,e,n){switch(e){case"input":if(Wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uu(i);if(!r)throw Error(Se(90));tv(i),Wf(i,r)}}}break;case"textarea":iv(t,n);break;case"select":e=n.value,e!=null&&la(t,!!n.multiple,e,!1)}};uv=fp;fv=ms;var rM={usingClientEntryPoint:!1,Events:[cl,Qs,uu,lv,cv,fp]},Ya={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sM={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||nM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{au=Rl.inject(sM),Ni=Rl}catch{}}Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rM;Kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_p(e))throw Error(Se(200));return tM(t,e,null,n)};Kn.createRoot=function(t,e){if(!_p(t))throw Error(Se(299));var n=!1,i="",r=$_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mp(t,1,!1,null,null,n,!1,i,r),t[ir]=e.current,Vo(t.nodeType===8?t.parentNode:t),new vp(e)};Kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=pv(e),t=t===null?null:t.stateNode,t};Kn.flushSync=function(t){return ms(t)};Kn.hydrate=function(t,e,n){if(!xu(e))throw Error(Se(200));return yu(null,t,e,!0,n)};Kn.hydrateRoot=function(t,e,n){if(!_p(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=$_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=X_(e,null,t,1,n??null,r,!1,s,a),t[ir]=e.current,Vo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _u(e)};Kn.render=function(t,e,n){if(!xu(e))throw Error(Se(200));return yu(null,t,e,!1,n)};Kn.unmountComponentAtNode=function(t){if(!xu(t))throw Error(Se(40));return t._reactRootContainer?(ms(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Kn.unstable_batchedUpdates=fp;Kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xu(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return yu(t,e,n,!1,i)};Kn.version="18.3.1-next-f1338f8080-20240426";function Y_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y_)}catch(t){console.error(t)}}Y_(),Yg.exports=Kn;var aM=Yg.exports,q_,S0=aM;q_=S0.createRoot,S0.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xp="186",oM=0,M0=1,lM=2,Lo=1,cM=2,go=3,gs=0,Pn=1,qt=2,Ui=0,Io=1,Pd=2,w0=3,E0=4,uM=5,Ws=100,fM=101,dM=102,hM=103,pM=104,mM=200,gM=201,vM=202,_M=203,j_=204,K_=205,xM=206,yM=207,SM=208,MM=209,wM=210,EM=211,TM=212,bM=213,AM=214,Ld=0,Id=1,Nd=2,Jo=3,Dd=4,Ud=5,Fd=6,Od=7,yp=0,RM=1,CM=2,Fi=0,Sp=1,Mp=2,wp=3,Su=4,Ep=5,Tp=6,bp=7,Z_=300,vs=301,wa=302,nf=303,rf=304,Mu=306,Kc=1e3,Zi=1001,kd=1002,ln=1003,PM=1004,Cl=1005,xn=1006,sf=1007,rs=1008,$n=1009,J_=1010,Q_=1011,Qo=1012,Ap=1013,Oi=1014,_i=1015,Bn=1016,Rp=1017,Cp=1018,el=1020,ex=35902,tx=35899,nx=1021,ix=1022,xi=1023,ar=1026,ss=1027,Pp=1028,Lp=1029,_s=1030,Ip=1031,Np=1033,vc=33776,_c=33777,xc=33778,yc=33779,Bd=35840,zd=35841,Hd=35842,Gd=35843,Vd=36196,Wd=37492,Xd=37496,$d=37488,Yd=37489,Zc=37490,qd=37491,jd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,ah=37819,oh=37820,lh=37821,ch=36492,uh=36494,fh=36495,dh=36283,hh=36284,Jc=36285,ph=36286,LM=3200,Qc=0,IM=1,Rr="",Xn="srgb",eu="srgb-linear",tu="linear",yt="srgb",af=7680,NM=519,DM=512,UM=513,FM=514,Dp=515,OM=516,kM=517,Up=518,BM=519,zM=35044,T0="300 es",Ii=2e3,tl=2001;function HM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GM(){const t=nu("canvas");return t.style.display="block",t}const b0={};function A0(...t){const e="THREE."+t.shift();console.log(e,...t)}function rx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ke(...t){t=rx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function pt(...t){t=rx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function pa(...t){const e=t.join(" ");e in b0||(b0[e]=!0,Ke(...t))}function VM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const WM={[Ld]:Id,[Nd]:Fd,[Dd]:Od,[Jo]:Ud,[Id]:Ld,[Fd]:Nd,[Od]:Dd,[Ud]:Jo};class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let R0=1234567;const No=Math.PI/180,Ea=180/Math.PI;function La(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function Fp(t,e){return(t%e+e)%e}function XM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function $M(t,e,n){return t!==e?(n-t)/(e-t):0}function Do(t,e,n){return(1-n)*t+n*e}function YM(t,e,n,i){return Do(t,e,1-Math.exp(-n*i))}function qM(t,e=1){return e-Math.abs(Fp(t,e*2)-e)}function jM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function KM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ZM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function JM(t,e){return t+Math.random()*(e-t)}function QM(t){return t*(.5-Math.random())}function e1(t){t!==void 0&&(R0=t);let e=R0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t1(t){return t*No}function n1(t){return t*Ea}function i1(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function r1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function s1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function a1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*f,o*c);break;case"YZY":t.set(l*f,o*d,l*h,o*c);break;case"ZXZ":t.set(l*h,l*f,o*d,o*c);break;case"XZX":t.set(o*d,l*v,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*v,o*c);break;case"ZYZ":t.set(l*v,l*m,o*d,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const o1={DEG2RAD:No,RAD2DEG:Ea,generateUUID:La,clamp:rt,euclideanModulo:Fp,mapLinear:XM,inverseLerp:$M,lerp:Do,damp:YM,pingpong:qM,smoothstep:jM,smootherstep:KM,randInt:ZM,randFloat:JM,randFloatSpread:QM,seededRandom:e1,degToRad:t1,radToDeg:n1,isPowerOfTwo:i1,ceilPowerOfTwo:r1,floorPowerOfTwo:s1,setQuaternionFromProperEuler:a1,normalize:Tn,denormalize:Xs},om=class om{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};om.prototype.isVector2=!0;let Be=om;class Ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(h!==_||l!==f||c!==m||d!==v){let p=l*f+c*m+d*v+h*_;p<0&&(f=-f,m=-m,v=-v,_=-_,p=-p);let u=1-o;if(p<.9995){const g=Math.acos(p),M=Math.sin(g);u=Math.sin(u*g)/M,o=Math.sin(o*g)/M,l=l*u+f*o,c=c*u+m*o,d=d*u+v*o,h=h*u+_*o}else{l=l*u+f*o,c=c*u+m*o,d=d*u+v*o,h=h*u+_*o;const g=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=g,c*=g,d*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*m-c*f,e[n+1]=l*v+d*f+c*h-o*m,e[n+2]=c*v+d*m+o*f-l*h,e[n+3]=d*v-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"YXZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"ZXY":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"ZYX":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"YZX":this._x=f*d*h+c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h-f*m*v;break;case"XZY":this._x=f*d*h-c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h+f*m*v;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lm=class lm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(C0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(C0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lm.prototype.isVector3=!0;let V=lm;const of=new V,C0=new Ia,cm=class cm{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],v=i[8],_=r[0],p=r[3],u=r[6],g=r[1],M=r[4],S=r[7],E=r[2],T=r[5],R=r[8];return s[0]=a*_+o*g+l*E,s[3]=a*p+o*M+l*T,s[6]=a*u+o*S+l*R,s[1]=c*_+d*g+h*E,s[4]=c*p+d*M+h*T,s[7]=c*u+d*S+h*R,s[2]=f*_+m*g+v*E,s[5]=f*p+m*M+v*T,s[8]=f*u+m*S+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,v=n*h+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*c-d*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return pa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lf.makeScale(e,n)),this}rotate(e){return pa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lf.makeRotation(-e)),this}translate(e,n){return pa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cm.prototype.isMatrix3=!0;let tt=cm;const lf=new tt,P0=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L0=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l1(){const t={enabled:!0,workingColorSpace:eu,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===yt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(r.r=ma(r.r),r.g=ma(r.g),r.b=ma(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?tu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[eu]:{primaries:e,whitePoint:i,transfer:tu,toXYZ:P0,fromXYZ:L0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:P0,fromXYZ:L0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),t}const ft=l1();function tr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ma(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cs;class c1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=nu("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(tr(n[i]/255)*255):n[i]=tr(n[i]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u1=0;class Op{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=La(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cf(r[a].image)):s.push(cf(r[a]))}else s=cf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?c1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let f1=0;const uf=new V;class Sn extends Ms{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=Zi,r=Zi,s=xn,a=rs,o=xi,l=$n,c=Sn.DEFAULT_ANISOTROPY,d=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=La(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kc:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kc:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Z_;Sn.DEFAULT_ANISOTROPY=1;const um=class um{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],v=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(m+1)/2,E=(u+1)/2,T=(d+f)/4,R=(h+_)/4,x=(v+p)/4;return M>S&&M>E?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=R/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(h-_)/g,this.z=(f-d)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};um.prototype.isVector4=!0;let Bt=um;class d1 extends Ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Sn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Op(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends d1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class sx extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h1 extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ru=class ru{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,v,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,v,_,p)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,v,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=v,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ru().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,v=o*d,_=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=f-_*c,n[9]=-o*l,n[2]=_-f*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,v=c*d,_=c*h;n[0]=f+_*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-v,n[6]=_+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,v=c*d,_=c*h;n[0]=f-_*o,n[4]=-a*h,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*d,n[9]=_-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,v=o*d,_=o*h;n[0]=l*d,n[4]=v*c-m,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,_=o*c;n[0]=l*d,n[4]=_-f*h,n[8]=v*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+v,n[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,_=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+_,n[5]=a*d,n[9]=m*h-v,n[2]=v*h-m,n[6]=o*d,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p1,e,m1)}lookAt(e,n,i){const r=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),mr.crossVectors(i,Hn),mr.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),mr.crossVectors(i,Hn)),mr.normalize(),Pl.crossVectors(Hn,mr),r[0]=mr.x,r[4]=Pl.x,r[8]=Hn.x,r[1]=mr.y,r[5]=Pl.y,r[9]=Hn.y,r[2]=mr.z,r[6]=Pl.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],v=i[2],_=i[6],p=i[10],u=i[14],g=i[3],M=i[7],S=i[11],E=i[15],T=r[0],R=r[4],x=r[8],A=r[12],P=r[1],U=r[5],z=r[9],W=r[13],O=r[2],K=r[6],se=r[10],te=r[14],$=r[3],Y=r[7],Q=r[11],oe=r[15];return s[0]=a*T+o*P+l*O+c*$,s[4]=a*R+o*U+l*K+c*Y,s[8]=a*x+o*z+l*se+c*Q,s[12]=a*A+o*W+l*te+c*oe,s[1]=d*T+h*P+f*O+m*$,s[5]=d*R+h*U+f*K+m*Y,s[9]=d*x+h*z+f*se+m*Q,s[13]=d*A+h*W+f*te+m*oe,s[2]=v*T+_*P+p*O+u*$,s[6]=v*R+_*U+p*K+u*Y,s[10]=v*x+_*z+p*se+u*Q,s[14]=v*A+_*W+p*te+u*oe,s[3]=g*T+M*P+S*O+E*$,s[7]=g*R+M*U+S*K+E*Y,s[11]=g*x+M*z+S*se+E*Q,s[15]=g*A+M*W+S*te+E*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],v=e[3],_=e[7],p=e[11],u=e[15],g=l*m-c*f,M=o*m-c*h,S=o*f-l*h,E=a*m-c*d,T=a*f-l*d,R=a*h-o*d;return n*(_*g-p*M+u*S)-i*(v*g-p*E+u*T)+r*(v*M-_*E+u*R)-s*(v*S-_*T+p*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],v=e[12],_=e[13],p=e[14],u=e[15],g=n*o-i*a,M=n*l-r*a,S=n*c-s*a,E=i*l-r*o,T=i*c-s*o,R=r*c-s*l,x=d*_-h*v,A=d*p-f*v,P=d*u-m*v,U=h*p-f*_,z=h*u-m*_,W=f*u-m*p,O=g*W-M*z+S*U+E*P-T*A+R*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/O;return e[0]=(o*W-l*z+c*U)*K,e[1]=(r*z-i*W-s*U)*K,e[2]=(_*R-p*T+u*E)*K,e[3]=(f*T-h*R-m*E)*K,e[4]=(l*P-a*W-c*A)*K,e[5]=(n*W-r*P+s*A)*K,e[6]=(p*S-v*R-u*M)*K,e[7]=(d*R-f*S+m*M)*K,e[8]=(a*z-o*P+c*x)*K,e[9]=(i*P-n*z-s*x)*K,e[10]=(v*T-_*S+u*g)*K,e[11]=(h*S-d*T-m*g)*K,e[12]=(o*A-a*U-l*x)*K,e[13]=(n*U-i*A+r*x)*K,e[14]=(_*M-v*E-p*g)*K,e[15]=(d*E-h*M+f*g)*K,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,v=s*h,_=a*d,p=a*h,u=o*h,g=l*c,M=l*d,S=l*h,E=i.x,T=i.y,R=i.z;return r[0]=(1-(_+u))*E,r[1]=(m+S)*E,r[2]=(v-M)*E,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(f+u))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(v+M)*R,r[9]=(p-g)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Ps.set(r[0],r[1],r[2]).length();const o=Ps.set(r[4],r[5],r[6]).length(),l=Ps.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ci.copy(this);const c=1/a,d=1/o,h=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=d,ci.elements[5]*=d,ci.elements[6]*=d,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,n.setFromRotationMatrix(ci),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Ii,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===Ii)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===tl)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ii,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===Ii)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===tl)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ru.prototype.isMatrix4=!0;let Lt=ru;const Ps=new V,ci=new Lt,p1=new V(0,0,0),m1=new V(1,1,1),mr=new V,Pl=new V,Hn=new V,I0=new Lt,N0=new Ia;class or{constructor(e=0,n=0,i=0,r=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return I0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return N0.setFromEuler(this),this.setFromQuaternion(N0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g1=0;const D0=new V,Ls=new Ia,zi=new Lt,Ll=new V,qa=new V,v1=new V,_1=new Ia,U0=new V(1,0,0),F0=new V(0,1,0),O0=new V(0,0,1),k0={type:"added"},x1={type:"removed"},Is={type:"childadded",child:null},ff={type:"childremoved",child:null};class Kt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new V,n=new or,i=new Ia,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new tt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(U0,e)}rotateY(e){return this.rotateOnAxis(F0,e)}rotateZ(e){return this.rotateOnAxis(O0,e)}translateOnAxis(e,n){return D0.copy(e).applyQuaternion(this.quaternion),this.position.add(D0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(U0,e)}translateY(e){return this.translateOnAxis(F0,e)}translateZ(e){return this.translateOnAxis(O0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ll.copy(e):Ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(qa,Ll,this.up):zi.lookAt(Ll,qa,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),Ls.setFromRotationMatrix(zi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k0),Is.child=e,this.dispatchEvent(Is),Is.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(x1),ff.child=e,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k0),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,v1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,_1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new V(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y1={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function hf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=Fp(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=hf(a,s,e+1/3),this.g=hf(a,s,e),this.b=hf(a,s,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=ax[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return ft.workingToColorSpace(vn.copy(this),e),Math.round(rt(vn.r*255,0,255))*65536+Math.round(rt(vn.g*255,0,255))*256+Math.round(rt(vn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.workingToColorSpace(vn.copy(this),n);const i=vn.r,r=vn.g,s=vn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ft.workingColorSpace){return ft.workingToColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Xn){ft.workingToColorSpace(vn.copy(this),e);const n=vn.r,i=vn.g,r=vn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(Il);const i=Do(gr.h,Il.h,n),r=Do(gr.s,Il.s,n),s=Do(gr.l,Il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new $e;$e.NAMES=ax;class ox extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ui=new V,Hi=new V,pf=new V,Gi=new V,Ns=new V,Ds=new V,B0=new V,mf=new V,gf=new V,vf=new V,_f=new Bt,xf=new Bt,yf=new Bt;class vi{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ui.subVectors(e,n),r.cross(ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ui.subVectors(r,n),Hi.subVectors(i,n),pf.subVectors(e,n);const a=ui.dot(ui),o=ui.dot(Hi),l=ui.dot(pf),c=Hi.dot(Hi),d=Hi.dot(pf),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,v=(a*d-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return _f.setScalar(0),xf.setScalar(0),yf.setScalar(0),_f.fromBufferAttribute(e,n),xf.fromBufferAttribute(e,i),yf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_f,s.x),a.addScaledVector(xf,s.y),a.addScaledVector(yf,s.z),a}static isFrontFacing(e,n,i,r){return ui.subVectors(i,n),Hi.subVectors(e,n),ui.cross(Hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ui.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ns.subVectors(r,i),Ds.subVectors(s,i),mf.subVectors(e,i);const l=Ns.dot(mf),c=Ds.dot(mf);if(l<=0&&c<=0)return n.copy(i);gf.subVectors(e,r);const d=Ns.dot(gf),h=Ds.dot(gf);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Ns,a);vf.subVectors(e,s);const m=Ns.dot(vf),v=Ds.dot(vf);if(v>=0&&m<=v)return n.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Ds,o);const p=d*v-m*h;if(p<=0&&h-d>=0&&m-v>=0)return B0.subVectors(s,r),o=(h-d)/(h-d+(m-v)),n.copy(r).addScaledVector(B0,o);const u=1/(p+_+f);return a=_*u,o=f*u,n.copy(i).addScaledVector(Ns,a).addScaledVector(Ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ws{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(s,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Dl.subVectors(this.max,ja),Us.subVectors(e.a,ja),Fs.subVectors(e.b,ja),Os.subVectors(e.c,ja),vr.subVectors(Fs,Us),_r.subVectors(Os,Fs),Yr.subVectors(Us,Os);let n=[0,-vr.z,vr.y,0,-_r.z,_r.y,0,-Yr.z,Yr.y,vr.z,0,-vr.x,_r.z,0,-_r.x,Yr.z,0,-Yr.x,-vr.y,vr.x,0,-_r.y,_r.x,0,-Yr.y,Yr.x,0];return!Sf(n,Us,Fs,Os,Dl)||(n=[1,0,0,0,1,0,0,0,1],!Sf(n,Us,Fs,Os,Dl))?!1:(Ul.crossVectors(vr,_r),n=[Ul.x,Ul.y,Ul.z],Sf(n,Us,Fs,Os,Dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new V,new V,new V,new V,new V,new V,new V,new V],fi=new V,Nl=new ws,Us=new V,Fs=new V,Os=new V,vr=new V,_r=new V,Yr=new V,ja=new V,Dl=new V,Ul=new V,qr=new V;function Sf(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){qr.fromArray(t,s);const o=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=e.dot(qr),c=n.dot(qr),d=i.dot(qr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Yt=new V,Fl=new Be;let S1=0;class Mi extends Ms{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zM,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fl.fromBufferAttribute(this,n),Fl.applyMatrix3(e),this.setXY(n,Fl.x,Fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class lx extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cx extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mt extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const M1=new ws,Ka=new V,Mf=new V;class fl{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):M1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const n=Ka.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(Mf)),this.expandByPoint(Ka.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let w1=0;const Qn=new Lt,wf=new Kt,ks=new V,Gn=new ws,Za=new ws,nn=new V;class fn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(HM(e)?cx:lx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,i){return Qn.makeTranslation(e,n,i),this.applyMatrix4(Qn),this}scale(e,n,i){return Qn.makeScale(e,n,i),this.applyMatrix4(Qn),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Za.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Gn.min,Za.min),Gn.expandByPoint(nn),nn.addVectors(Gn.max,Za.max),Gn.expandByPoint(nn)):(Gn.expandByPoint(Za.min),Gn.expandByPoint(Za.max))}Gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)nn.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),nn.add(ks)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new V,l[x]=new V;const c=new V,d=new V,h=new V,f=new Be,m=new Be,v=new Be,_=new V,p=new V;function u(x,A,P){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,P),d.sub(c),h.sub(c),m.sub(f),v.sub(f);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(U),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(U),o[x].add(_),o[A].add(_),o[P].add(_),l[x].add(p),l[A].add(p),l[P].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,A=g.length;x<A;++x){const P=g[x],U=P.start,z=P.count;for(let W=U,O=U+z;W<O;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new V,S=new V,E=new V,T=new V;function R(x){E.fromBufferAttribute(r,x),T.copy(E);const A=o[x];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(T,A);const U=S.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,U)}for(let x=0,A=g.length;x<A;++x){const P=g[x],U=P.start,z=P.count;for(let W=U,O=U+z;W<O;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,d=new V,h=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*d;for(let u=0;u<d;u++)f[v++]=c[m++]}return new Mi(f,d,h)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ef=new V,E1=new V,T1=new tt;class Er{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ef.subVectors(i,n).cross(E1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ef),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||T1.getNormalMatrix(e),r=this.coplanarPoint(Ef).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let b1=0;class Na extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=La(),this.name="",this.type="Material",this.blending=Io,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=j_,this.blendDst=K_,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=NM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=af,this.stencilZFail=af,this.stencilZPass=af,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Er().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wi=new V,Tf=new V,Ol=new V,kl=new V;class ux{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,n),Wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tf.copy(e).add(n).multiplyScalar(.5),Ol.copy(n).sub(e).normalize(),kl.copy(this.origin).sub(Tf);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ol),o=kl.dot(this.direction),l=-kl.dot(Ol),c=kl.lengthSq(),d=Math.abs(1-a*a);let h,f,m,v;if(d>0)if(h=a*l-o,f=a*o-l,v=s*d,h>=0)if(f>=-v)if(f<=v){const _=1/d;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tf).addScaledVector(Ol,f),m}intersectSphere(e,n){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);const i=Wi.dot(this.direction),r=Wi.dot(Wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,f=e.y-a.y,m=e.z-a.z,v=n.x-a.x,_=n.y-a.y,p=n.z-a.z,u=i.x-a.x,g=i.y-a.y,M=i.z-a.z,S=Math.abs(l),E=Math.abs(c),T=Math.abs(d);let R,x,A,P,U,z,W,O,K,se,te,$;if(S>=E&&S>=T?(A=l,z=h,K=v,$=u,l>=0?(R=c,x=d,P=f,U=m,W=_,O=p,se=g,te=M):(R=d,x=c,P=m,U=f,W=p,O=_,se=M,te=g)):E>=T?(A=c,z=f,K=_,$=g,c>=0?(R=d,x=l,P=m,U=h,W=p,O=v,se=M,te=u):(R=l,x=d,P=h,U=m,W=v,O=p,se=u,te=M)):(A=d,z=m,K=p,$=M,d>=0?(R=l,x=c,P=h,U=f,W=v,O=_,se=u,te=g):(R=c,x=l,P=f,U=h,W=_,O=v,se=g,te=u)),A===0)return null;const Y=R/A,Q=x/A,oe=1/A,ye=P-Y*z,Ce=U-Q*z,je=W-Y*K,We=O-Q*K,Ye=se-Y*$,ae=te-Q*$,fe=Ye*We-ae*je,we=ye*ae-Ce*Ye,He=je*Ce-We*ye;if(r){if(fe<0||we<0||He<0)return null}else if((fe<0||we<0||He<0)&&(fe>0||we>0||He>0))return null;const Te=fe+we+He;if(Te===0)return null;const ze=oe*(fe*z+we*K+He*$);return(Te>0?ze<0:ze>0)?null:this.at(ze/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pi extends Na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const z0=new Lt,jr=new ux,Bl=new fl,H0=new V,zl=new V,Hl=new V,Gl=new V,bf=new V,Vl=new V,G0=new V,Wl=new V;class kt extends Kt{constructor(e=new fn,n=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(bf.fromBufferAttribute(h,e),a?Vl.addScaledVector(bf,d):Vl.addScaledVector(bf.sub(n),d))}n.add(Vl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Bl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Bl,H0)===null||jr.origin.distanceToSquared(H0)>(e.far-e.near)**2))&&(z0.copy(s).invert(),jr.copy(e.ray).applyMatrix4(z0),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const p=f[v],u=a[p.materialIndex],g=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,E=M;S<E;S+=3){const T=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);r=Xl(this,u,e,i,c,d,h,T,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const g=o.getX(p),M=o.getX(p+1),S=o.getX(p+2);r=Xl(this,a,e,i,c,d,h,g,M,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const p=f[v],u=a[p.materialIndex],g=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,E=M;S<E;S+=3){const T=S,R=S+1,x=S+2;r=Xl(this,u,e,i,c,d,h,T,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const g=p,M=p+1,S=p+2;r=Xl(this,a,e,i,c,d,h,g,M,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function A1(t,e,n,i,r,s,a,o){let l;if(e.side===Pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gs,o),l===null)return null;Wl.copy(o),Wl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Wl);return c<n.near||c>n.far?null:{distance:c,point:Wl.clone(),object:t}}function Xl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,zl),t.getVertexPosition(l,Hl),t.getVertexPosition(c,Gl);const d=A1(t,e,n,i,zl,Hl,Gl,G0);if(d){const h=new V;vi.getBarycoord(G0,zl,Hl,Gl,h),r&&(d.uv=vi.getInterpolatedAttribute(r,o,l,c,h,new Be)),s&&(d.uv1=vi.getInterpolatedAttribute(s,o,l,c,h,new Be)),a&&(d.normal=vi.getInterpolatedAttribute(a,o,l,c,h,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};vi.getNormal(zl,Hl,Gl,f.normal),d.face=f,d.barycoord=h}return d}class fx extends Sn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=ln,d=ln,h,f){super(null,a,o,l,c,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class V0 extends Mi{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new Lt,W0=new Lt,$l=[],X0=new ws,R1=new Lt,Ja=new kt,Qa=new fl;class C1 extends kt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new V0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,R1)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ws),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Bs),X0.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(X0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new fl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Bs),Qa.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Qa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Ja.geometry=this.geometry,Ja.material=this.material,Ja.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(i),e.ray.intersectsSphere(Qa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Bs),W0.multiplyMatrices(i,Bs),Ja.matrixWorld=W0,Ja.raycast(e,$l);for(let a=0,o=$l.length;a<o;a++){const l=$l[a];l.instanceId=s,l.object=this,n.push(l)}$l.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new V0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new fx(new Float32Array(r*this.count),r,this.count,Pp,_i));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kr=new fl,P1=new Be(.5,.5),Yl=new V;class Bp{constructor(e=new Er,n=new Er,i=new Er,r=new Er,s=new Er,a=new Er){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],f=s[6],m=s[7],v=s[8],_=s[9],p=s[10],u=s[11],g=s[12],M=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,m-d,u-v,E-g).normalize(),r[1].setComponents(c+a,m+d,u+v,E+g).normalize(),r[2].setComponents(c+o,m+h,u+_,E+M).normalize(),r[3].setComponents(c-o,m-h,u-_,E-M).normalize(),i)r[4].setComponents(l,f,p,S).normalize(),r[5].setComponents(c-l,m-f,u-p,E-S).normalize();else if(r[4].setComponents(c-l,m-f,u-p,E-S).normalize(),n===Ii)r[5].setComponents(c+l,m+f,u+p,E+S).normalize();else if(n===tl)r[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=P1.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Yl.x=r.normal.x>0?e.max.x:e.min.x,Yl.y=r.normal.y>0?e.max.y:e.min.y,Yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dx extends Sn{constructor(e=[],n=vs,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L1 extends Sn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nl extends Sn{constructor(e,n,i=Oi,r,s,a,o=ln,l=ln,c,d=ar,h=1){if(d!==ar&&d!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class I1 extends nl{constructor(e,n=Oi,i=vs,r,s,a=ln,o=ln,l,c=ar){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hx extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lr extends fn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(h,2));function v(_,p,u,g,M,S,E,T,R,x,A){const P=S/R,U=E/x,z=S/2,W=E/2,O=T/2,K=R+1,se=x+1;let te=0,$=0;const Y=new V;for(let Q=0;Q<se;Q++){const oe=Q*U-W;for(let ye=0;ye<K;ye++){const Ce=ye*P-z;Y[_]=Ce*g,Y[p]=oe*M,Y[u]=O,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[u]=T>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(ye/R),h.push(1-Q/x),te+=1}}for(let Q=0;Q<x;Q++)for(let oe=0;oe<R;oe++){const ye=f+oe+K*Q,Ce=f+oe+K*(Q+1),je=f+(oe+1)+K*(Q+1),We=f+(oe+1)+K*Q;l.push(ye,Ce,We),l.push(Ce,je,We),$+=6}o.addGroup(m,$,A),m+=$,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wu extends fn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],d=n/2,h=Math.PI/2*e,f=n,m=2*h+f,v=i*2+s,_=r+1,p=new V,u=new V;for(let g=0;g<=v;g++){let M=0,S=0,E=0,T=0;if(g<=i){const A=g/i,P=A*Math.PI/2;S=-d-e*Math.cos(P),E=e*Math.sin(P),T=-e*Math.cos(P),M=A*h}else if(g<=i+s){const A=(g-i)/s;S=-d+A*n,E=e,T=0,M=h+A*f}else{const A=(g-i-s)/i,P=A*Math.PI/2;S=d+e*Math.sin(P),E=e*Math.cos(P),T=e*Math.sin(P),M=h+f+A*h}const R=Math.max(0,Math.min(1,M/m));let x=0;g===0?x=.5/r:g===v&&(x=-.5/r);for(let A=0;A<=r;A++){const P=A/r,U=P*Math.PI*2,z=Math.sin(U),W=Math.cos(U);u.x=-E*W,u.y=S,u.z=E*z,o.push(u.x,u.y,u.z),p.set(-E*W,T,E*z),p.normalize(),l.push(p.x,p.y,p.z),c.push(P+x,R)}if(g>0){const A=(g-1)*_;for(let P=0;P<r;P++){const U=A+P,z=A+P+1,W=g*_+P,O=g*_+P+1;a.push(U,z,W),a.push(z,O,W)}}}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class zp extends fn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new V,d=new Be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const m=i+h/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(o,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ft extends fn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let v=0;const _=[],p=i/2;let u=0;g(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(m,2));function g(){const S=new V,E=new V;let T=0;const R=(n-e)/i;for(let x=0;x<=s;x++){const A=[],P=x/s,U=P*(n-e)+e;for(let z=0;z<=r;z++){const W=z/r,O=W*l+o,K=Math.sin(O),se=Math.cos(O);E.x=U*K,E.y=-P*i+p,E.z=U*se,h.push(E.x,E.y,E.z),S.set(K,R,se).normalize(),f.push(S.x,S.y,S.z),m.push(W,1-P),A.push(v++)}_.push(A)}for(let x=0;x<r;x++)for(let A=0;A<s;A++){const P=_[A][x],U=_[A+1][x],z=_[A+1][x+1],W=_[A][x+1];(e>0||A!==0)&&(d.push(P,U,W),T+=3),(n>0||A!==s-1)&&(d.push(U,z,W),T+=3)}c.addGroup(u,T,0),u+=T}function M(S){const E=v,T=new Be,R=new V;let x=0;const A=S===!0?e:n,P=S===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,p*P,0),f.push(0,P,0),m.push(.5,.5),v++;const U=v;for(let z=0;z<=r;z++){const O=z/r*l+o,K=Math.cos(O),se=Math.sin(O);R.x=A*se,R.y=p*P,R.z=A*K,h.push(R.x,R.y,R.z),f.push(0,P,0),T.x=K*.5+.5,T.y=se*.5*P+.5,m.push(T.x,T.y),v++}for(let z=0;z<r;z++){const W=E+z,O=U+z;S===!0?d.push(O,O+1,W):d.push(O+1,O,W),x+=3}c.addGroup(u,x,S===!0?1:2),u+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hp extends Ft{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Hp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gp extends fn{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=rt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],d=1/n,h=new V,f=new Be,m=new V,v=new V,_=new V;let p=0,u=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:p=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,m.x=u*1,m.y=-p,m.z=u*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,m.x=u*1,m.y=-p,m.z=u*0,v.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(v)}for(let g=0;g<=n;g++){const M=i+g*d*r,S=Math.sin(M),E=Math.cos(M);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*S,h.y=e[T].y,h.z=e[T].x*E,a.push(h.x,h.y,h.z),f.x=g/n,f.y=T/(e.length-1),o.push(f.x,f.y);const R=l[3*T+0]*S,x=l[3*T+1],A=l[3*T+0]*E;c.push(R,x,A)}}for(let g=0;g<n;g++)for(let M=0;M<e.length-1;M++){const S=M+g*e.length,E=S,T=S+e.length,R=S+e.length+1,x=S+1;s.push(E,T,x),s.push(R,x,T)}this.setIndex(s),this.setAttribute("position",new Mt(a,3)),this.setAttribute("uv",new Mt(o,2)),this.setAttribute("normal",new Mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.points,e.segments,e.phiStart,e.phiLength)}}class rn extends fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],v=[],_=[],p=[];for(let u=0;u<d;u++){const g=u*f-a;for(let M=0;M<c;M++){const S=M*h-s;v.push(S,-g,0),_.push(0,0,1),p.push(M/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const M=g+c*u,S=g+c*(u+1),E=g+1+c*(u+1),T=g+1+c*u;m.push(M,S,T),m.push(S,E,T)}this.setIndex(m),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yi extends fn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new V,f=new V,m=[],v=[],_=[],p=[];for(let u=0;u<=i;u++){const g=[],M=u/i,S=a+M*o,E=e*Math.cos(S),T=Math.sqrt(e*e-E*E);let R=0;u===0&&a===0?R=.5/n:u===i&&l===Math.PI&&(R=-.5/n);for(let x=0;x<=n;x++){const A=x/n,P=r+A*s;h.x=-T*Math.cos(P),h.y=E,h.z=T*Math.sin(P),v.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(A+R,1-M),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const M=d[u][g+1],S=d[u][g],E=d[u+1][g],T=d[u+1][g+1];(u!==0||a>0)&&m.push(M,S,T),(u!==i-1||l<Math.PI)&&m.push(S,E,T)}this.setIndex(m),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vp extends fn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],d=[],h=[],f=new V,m=new V,v=new V;for(let _=0;_<=i;_++){const p=a+_/i*o;for(let u=0;u<=r;u++){const g=u/r*s;m.x=(e+n*Math.cos(p))*Math.cos(g),m.y=(e+n*Math.cos(p))*Math.sin(g),m.z=n*Math.sin(p),c.push(m.x,m.y,m.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),v.subVectors(m,f).normalize(),d.push(v.x,v.y,v.z),h.push(u/r),h.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=r;p++){const u=(r+1)*_+p-1,g=(r+1)*(_-1)+p-1,M=(r+1)*(_-1)+p,S=(r+1)*_+p;l.push(u,g,S),l.push(g,M,S)}this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ta(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if($0(r))r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if($0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function bn(t){const e={};for(let n=0;n<t.length;n++){const i=Ta(t[n]);for(const r in i)e[r]=i[r]}return e}function $0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function N1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function px(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const il={clone:Ta,merge:bn};var D1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D1,this.fragmentShader=U1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=N1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mx extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ji extends Na{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends Ji{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class F1 extends Na{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=yp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O1 extends Na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k1 extends Na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Eu extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class B1 extends Eu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Af=new Lt,Y0=new V,q0=new V;class Wp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bp,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Y0.setFromMatrixPosition(e.matrixWorld),n.position.copy(Y0),q0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(q0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Af.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Af,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===tl||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ql=new V,jl=new Ia,bi=new V;class gx extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ql,jl,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,jl,bi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ql,jl,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,jl,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new V,j0=new Be,K0=new Be;class Rn extends gx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,j0,K0),n.subVectors(K0,j0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(No*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class z1 extends Wp{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Ea*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Rf extends Eu{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new z1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class H1 extends Wp{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}}class vo extends Eu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new H1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Tu extends gx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class G1 extends Wp{constructor(){super(new Tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V1 extends Eu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new G1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const zs=-90,Hs=1;class W1 extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(zs,Hs,e,n);r.layers=this.layers,this.add(r);const s=new Rn(zs,Hs,e,n);s.layers=this.layers,this.add(s);const a=new Rn(zs,Hs,e,n);a.layers=this.layers,this.add(a);const o=new Rn(zs,Hs,e,n);o.layers=this.layers,this.add(o);const l=new Rn(zs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new Rn(zs,Hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class X1 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $1{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Y1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Y1(){this._document.hidden===!1&&this.reset()}const Z0=new Lt;class q1{constructor(e,n,i=0,r=1/0){this.ray=new ux(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new kp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):pt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Z0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Z0),this}intersectObject(e,n=!0,i=[]){return mh(e,this,i,n),i.sort(J0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)mh(e[r],this,i,n);return i.sort(J0),i}}function J0(t,e){return t.distance-e.distance}function mh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)mh(s[a],e,n,!0)}}const fm=class fm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};fm.prototype.isMatrix2=!0;let Q0=fm;function eg(t,e,n,i){const r=j1(i);switch(n){case nx:return t*e;case Pp:return t*e/r.components*r.byteLength;case Lp:return t*e/r.components*r.byteLength;case _s:return t*e*2/r.components*r.byteLength;case Ip:return t*e*2/r.components*r.byteLength;case ix:return t*e*3/r.components*r.byteLength;case xi:return t*e*4/r.components*r.byteLength;case Np:return t*e*4/r.components*r.byteLength;case vc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xc:case yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Gd:return Math.max(t,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Wd:case $d:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Zc:case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ch:case uh:case fh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Jc:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function j1(t){switch(t){case $n:case J_:return{byteLength:1,components:1};case Qo:case Q_:case Bn:return{byteLength:2,components:1};case Rp:case Cp:return{byteLength:2,components:4};case Oi:case Ap:case _i:return{byteLength:4,components:1};case ex:case tx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vx(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function K1(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],_=h[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const _=h[m];t.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ow=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_w=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Aw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ow=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ww=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$E=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_T=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Z1,alphahash_pars_fragment:J1,alphamap_fragment:Q1,alphamap_pars_fragment:ew,alphatest_fragment:tw,alphatest_pars_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:rw,batching_pars_vertex:sw,batching_vertex:aw,begin_vertex:ow,beginnormal_vertex:lw,bsdfs:cw,iridescence_fragment:uw,bumpmap_pars_fragment:fw,clipping_planes_fragment:dw,clipping_planes_pars_fragment:hw,clipping_planes_pars_vertex:pw,clipping_planes_vertex:mw,color_fragment:gw,color_pars_fragment:vw,color_pars_vertex:_w,color_vertex:xw,common:yw,cube_uv_reflection_fragment:Sw,defaultnormal_vertex:Mw,displacementmap_pars_vertex:ww,displacementmap_vertex:Ew,emissivemap_fragment:Tw,emissivemap_pars_fragment:bw,colorspace_fragment:Aw,colorspace_pars_fragment:Rw,envmap_fragment:Cw,envmap_common_pars_fragment:Pw,envmap_pars_fragment:Lw,envmap_pars_vertex:Iw,envmap_physical_pars_fragment:Vw,envmap_vertex:Nw,fog_vertex:Dw,fog_pars_vertex:Uw,fog_fragment:Fw,fog_pars_fragment:Ow,gradientmap_pars_fragment:kw,lightmap_pars_fragment:Bw,lights_lambert_fragment:zw,lights_lambert_pars_fragment:Hw,lights_pars_begin:Gw,lights_toon_fragment:Ww,lights_toon_pars_fragment:Xw,lights_phong_fragment:$w,lights_phong_pars_fragment:Yw,lights_physical_fragment:qw,lights_physical_pars_fragment:jw,lights_fragment_begin:Kw,lights_fragment_maps:Zw,lights_fragment_end:Jw,lightprobes_pars_fragment:Qw,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:aE,map_particle_pars_fragment:oE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:fE,morphnormal_vertex:dE,morphtarget_pars_vertex:hE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:vE,normal_pars_vertex:_E,normal_vertex:xE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:wE,iridescence_pars_fragment:EE,opaque_fragment:TE,packing:bE,premultiplied_alpha_fragment:AE,project_vertex:RE,dithering_fragment:CE,dithering_pars_fragment:PE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:DE,shadowmap_vertex:UE,shadowmask_pars_fragment:FE,skinbase_vertex:OE,skinning_pars_vertex:kE,skinning_vertex:BE,skinnormal_vertex:zE,specularmap_fragment:HE,specularmap_pars_fragment:GE,tonemapping_fragment:VE,tonemapping_pars_fragment:WE,transmission_fragment:XE,transmission_pars_fragment:$E,uv_pars_fragment:YE,uv_pars_vertex:qE,uv_vertex:jE,worldpos_vertex:KE,background_vert:ZE,background_frag:JE,backgroundCube_vert:QE,backgroundCube_frag:eT,cube_vert:tT,cube_frag:nT,depth_vert:iT,depth_frag:rT,distance_vert:sT,distance_frag:aT,equirect_vert:oT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:fT,meshbasic_frag:dT,meshlambert_vert:hT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:vT,meshnormal_frag:_T,meshphong_vert:xT,meshphong_frag:yT,meshphysical_vert:ST,meshphysical_frag:MT,meshtoon_vert:wT,meshtoon_frag:ET,points_vert:TT,points_frag:bT,shadow_vert:AT,shadow_frag:RT,sprite_vert:CT,sprite_frag:PT},Ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Pi={basic:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:bn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:bn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:bn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:bn([Ae.points,Ae.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:bn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:bn([Ae.common,Ae.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:bn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:bn([Ae.sprite,Ae.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:bn([Ae.common,Ae.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:bn([Ae.lights,Ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Pi.physical={uniforms:bn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Kl={r:0,b:0,g:0},LT=new Lt,_x=new tt;_x.set(-1,0,0,0,1,0,0,0,1);function IT(t,e,n,i,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,d=null,h=0,f=null;function m(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){const S=g.backgroundBlurriness>0;M=e.get(M,S)}return M}function v(g){let M=!1;const S=m(g);S===null?p(a,o):S&&S.isColor&&(p(S,1),M=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(g,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===Mu)?(c===void 0&&(c=new kt(new lr(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ta(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_x),c.material.toneMapped=ft.getTransfer(S.colorSpace)!==yt,(d!==S||h!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new kt(new rn(2,2),new yn({name:"BackgroundMaterial",uniforms:Ta(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ft.getTransfer(S.colorSpace)!==yt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,M){g.getRGB(Kl,px(t)),n.buffers.color.setClear(Kl.r,Kl.g,Kl.b,M,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,M=1){a.set(g),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(a,o)},render:v,addToRenderList:_,dispose:u}}function NT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(U,z,W,O,K){let se=!1;const te=h(U,O,W,z);s!==te&&(s=te,c(s.object)),se=m(U,O,W,K),se&&v(U,O,W,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,S(U,z,W,O),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function d(U){return t.deleteVertexArray(U)}function h(U,z,W,O){const K=O.wireframe===!0;let se=i[z.id];se===void 0&&(se={},i[z.id]=se);const te=U.isInstancedMesh===!0?U.id:0;let $=se[te];$===void 0&&($={},se[te]=$);let Y=$[W.id];Y===void 0&&(Y={},$[W.id]=Y);let Q=Y[K];return Q===void 0&&(Q=f(l()),Y[K]=Q),Q}function f(U){const z=[],W=[],O=[];for(let K=0;K<n;K++)z[K]=0,W[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:O,object:U,attributes:{},index:null}}function m(U,z,W,O){const K=s.attributes,se=z.attributes;let te=0;const $=W.getAttributes();for(const Y in $)if($[Y].location>=0){const oe=K[Y];let ye=se[Y];if(ye===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(ye=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(ye=U.instanceColor)),oe===void 0||oe.attribute!==ye||ye&&oe.data!==ye.data)return!0;te++}return s.attributesNum!==te||s.index!==O}function v(U,z,W,O){const K={},se=z.attributes;let te=0;const $=W.getAttributes();for(const Y in $)if($[Y].location>=0){let oe=se[Y];oe===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor));const ye={};ye.attribute=oe,oe&&oe.data&&(ye.data=oe.data),K[Y]=ye,te++}s.attributes=K,s.attributesNum=te,s.index=O}function _(){const U=s.newAttributes;for(let z=0,W=U.length;z<W;z++)U[z]=0}function p(U){u(U,0)}function u(U,z){const W=s.newAttributes,O=s.enabledAttributes,K=s.attributeDivisors;W[U]=1,O[U]===0&&(t.enableVertexAttribArray(U),O[U]=1),K[U]!==z&&(t.vertexAttribDivisor(U,z),K[U]=z)}function g(){const U=s.newAttributes,z=s.enabledAttributes;for(let W=0,O=z.length;W<O;W++)z[W]!==U[W]&&(t.disableVertexAttribArray(W),z[W]=0)}function M(U,z,W,O,K,se,te){te===!0?t.vertexAttribIPointer(U,z,W,K,se):t.vertexAttribPointer(U,z,W,O,K,se)}function S(U,z,W,O){_();const K=O.attributes,se=W.getAttributes(),te=z.defaultAttributeValues;for(const $ in se){const Y=se[$];if(Y.location>=0){let Q=K[$];if(Q===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){const oe=Q.normalized,ye=Q.itemSize,Ce=e.get(Q);if(Ce===void 0)continue;const je=Ce.buffer,We=Ce.type,Ye=Ce.bytesPerElement,ae=We===t.INT||We===t.UNSIGNED_INT||Q.gpuType===Ap;if(Q.isInterleavedBufferAttribute){const fe=Q.data,we=fe.stride,He=Q.offset;if(fe.isInstancedInterleavedBuffer){for(let Te=0;Te<Y.locationSize;Te++)u(Y.location+Te,fe.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Te=0;Te<Y.locationSize;Te++)p(Y.location+Te);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Te=0;Te<Y.locationSize;Te++)M(Y.location+Te,ye/Y.locationSize,We,oe,we*Ye,(He+ye/Y.locationSize*Te)*Ye,ae)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)u(Y.location+fe,Q.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<Y.locationSize;fe++)p(Y.location+fe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let fe=0;fe<Y.locationSize;fe++)M(Y.location+fe,ye/Y.locationSize,We,oe,ye*Ye,ye/Y.locationSize*fe*Ye,ae)}}else if(te!==void 0){const oe=te[$];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(Y.location,oe);break;case 3:t.vertexAttrib3fv(Y.location,oe);break;case 4:t.vertexAttrib4fv(Y.location,oe);break;default:t.vertexAttrib1fv(Y.location,oe)}}}}g()}function E(){A();for(const U in i){const z=i[U];for(const W in z){const O=z[W];for(const K in O){const se=O[K];for(const te in se)d(se[te].object),delete se[te];delete O[K]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const z=i[U.id];for(const W in z){const O=z[W];for(const K in O){const se=O[K];for(const te in se)d(se[te].object),delete se[te];delete O[K]}}delete i[U.id]}function R(U){for(const z in i){const W=i[z];for(const O in W){const K=W[O];if(K[U.id]===void 0)continue;const se=K[U.id];for(const te in se)d(se[te].object),delete se[te];delete K[U.id]}}}function x(U){for(const z in i){const W=i[z],O=U.isInstancedMesh===!0?U.id:0,K=W[O];if(K!==void 0){for(const se in K){const te=K[se];for(const $ in te)d(te[$].object),delete te[$];delete K[se]}delete W[O],Object.keys(W).length===0&&delete i[z]}}}function A(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:g}}function DT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let m=0;m<d;m++)f+=c[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function UT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==xi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$n&&R!==_i&&!x&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ke("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:S,maxSamples:E,samples:T}}function FT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Er,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,M=g*4;let S=u.clippingState||null;l.value=S,S=d(v,f,M,m);for(let E=0;E!==M;++E)S[E]=n[E];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const u=m+_*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,S=m;M!==_;++M,S+=4)a.copy(h[M]).applyMatrix4(g,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const aa=4,OT=6,kT=20,BT=256,eo=new Tu,tg=new $e;let Cf=null,Pf=0,Lf=0,If=!1;const zT=new V,Zr=new V;class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=zT}=s;Cf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Pf,Lf),this._renderer.xr.enabled=If,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Bn,format:xi,colorSpace:eu,depthBuffer:!1},r=ng(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ng(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=HT(s)),this._blurMaterial=VT(s,e,n),this._ggxMaterial=GT(s,e,n)}return r}_compileMaterial(e){const n=new kt(new fn,e);this._renderer.compile(n,eo)}_sceneToCubeUV(e,n,i,r,s){const l=new Rn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(tg),h.toneMapping=Fi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new lr,new pi({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let u=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,u=!0):(p.color.copy(tg),u=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const E=this._cubeSize;Gs(r,S*E,M>2?E:0,E,E),h.setRenderTarget(r),u&&h.render(_,l),h.render(e,l)}h.toneMapping=m,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===wa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ig());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Gs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,eo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=c*1.25,m=h*f,{_lodMax:v}=this,_=this._sizeLods[i],p=3*_*(i>v-aa?i-v+aa:0),u=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,Gs(s,p,u,3*_,2*_),r.setRenderTarget(s),r.render(o,eo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Gs(e,p,u,3*_,2*_),r.setRenderTarget(e),r.render(o,eo)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[r],h=3*d*(r>this._lodMax-aa?r-this._lodMax+aa:0),f=4*(this._cubeSize-d);Gs(n,h,f,3*d,2*d),a.setRenderTarget(n),a.render(l,eo)}}function HT(t){const e=[],n=[];let i=t;const r=t-aa+1+OT;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,m=3,v=new Float32Array(m*f*h),_=new Float32Array(m*f*h);for(let u=0;u<h;u++){const g=u%3*2/3-1,M=u>2?0:-1,S=[g,M,0,g+2/3,M,0,g+2/3,M+1,0,g,M,0,g+2/3,M+1,0,g,M+1,0];v.set(S,m*f*u);for(let E=0;E<f;E++){const T=d[E*2]*2-1,R=d[E*2+1]*2-1;u===0?Zr.set(1,R,T):u===1?Zr.set(-T,1,-R):u===2?Zr.set(-T,R,1):u===3?Zr.set(-1,R,-T):u===4?Zr.set(-T,-1,R):Zr.set(T,R,-1),Zr.toArray(_,(u*f+E)*m)}}const p=new fn;p.setAttribute("position",new Mi(v,m)),p.setAttribute("outputDirection",new Mi(_,m)),n.push(new kt(p,null)),i>aa&&i--}return{lodMeshes:n,sizeLods:e}}function ng(t,e,n){const i=new Ln(t,e,n);return i.texture.mapping=Mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function GT(t,e,n){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function VT(t,e,n){return new yn({name:"SphericalGaussianBlur",defines:{SAMPLES:kT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ig(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function rg(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xx extends Ln{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new lr(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Ui});s.uniforms.tEquirect.value=n;const a=new kt(r,s),o=n.minFilter;return n.minFilter===rs&&(n.minFilter=xn),new W1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function WT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===nf||m===rf)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const _=new xx(v.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,v=m===nf||m===rf,_=m===vs||m===wa;if(v||_){let p=n.get(f);const u=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new gh(t)),p=v?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const g=f.image;return v&&g&&g.height>0||_&&g&&l(g)?(i===null&&(i=new gh(t)),p=v?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",d),p.texture):null}}}return f}function o(f,m){return m===nf?f.mapping=vs:m===rf&&(f.mapping=wa),f}function l(f){let m=0;const v=6;for(let _=0;_<v;_++)f[_]!==void 0&&m++;return m===v}function c(f){const m=f.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function d(f){const m=f.target;m.removeEventListener("dispose",d);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function XT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&pa("WebGLRenderer: "+i+" extension not supported."),r}}}function $T(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,v=h.attributes.position;let _=0;if(v===void 0)return;if(m!==null){const g=m.array;_=m.version;for(let M=0,S=g.length;M<S;M+=3){const E=g[M+0],T=g[M+1],R=g[M+2];f.push(E,T,T,R,R,E)}}else{const g=v.array;_=v.version;for(let M=0,S=g.length/3-1;M<S;M+=3){const E=M+0,T=M+1,R=M+2;f.push(E,T,T,R,R,E)}}const p=new(v.count>=65535?cx:lx)(f,1);p.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function YT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function c(h,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,h*a,m),n.update(f,i,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let _=0;for(let p=0;p<m;p++)_+=f[p];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function qT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jT(t,e,n){const i=new WeakMap,r=new Bt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let E=o.attributes.position.count*S,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*T*4*h),x=new sx(R,E,T,h);x.type=_i,x.needsUpdate=!0;const A=S*4;for(let U=0;U<h;U++){const z=u[U],W=g[U],O=M[U],K=E*T*4*U;for(let se=0;se<z.count;se++){const te=se*A;v===!0&&(r.fromBufferAttribute(z,se),R[K+te+0]=r.x,R[K+te+1]=r.y,R[K+te+2]=r.z,R[K+te+3]=0),_===!0&&(r.fromBufferAttribute(W,se),R[K+te+4]=r.x,R[K+te+5]=r.y,R[K+te+6]=r.z,R[K+te+7]=0),p===!0&&(r.fromBufferAttribute(O,se),R[K+te+8]=r.x,R[K+te+9]=r.y,R[K+te+10]=r.z,R[K+te+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:x,size:new Be(E,T)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function KT(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return f}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const ZT={[Sp]:"LINEAR_TONE_MAPPING",[Mp]:"REINHARD_TONE_MAPPING",[wp]:"CINEON_TONE_MAPPING",[Su]:"ACES_FILMIC_TONE_MAPPING",[Tp]:"AGX_TONE_MAPPING",[bp]:"NEUTRAL_TONE_MAPPING",[Ep]:"CUSTOM_TONE_MAPPING"};function JT(t,e,n,i,r,s){const a=new Ln(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new fn;c.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Mt([0,2,0,0,2,0],2));const d=new mx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new kt(c,d),f=new Tu(-1,1,1,-1,0,1);let m=null,v=null,_=!1,p,u=null,g=[],M=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let T=0;T<g.length;T++){const R=g[T];R.setSize&&R.setSize(S,E)}},this.setEffects=function(S){g=S,M=g.length>0&&g[0].isRenderPass===!0;const E=a.width,T=a.height;g.length>0&&o===null&&(o=new Ln(E,T,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(E,T,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<g.length;R++){const x=g[R];x.setSize&&x.setSize(E,T)}},this.begin=function(S,E){if(_||S.toneMapping===Fi&&g.length===0)return!1;if(u=E,E!==null){const T=E.width,R=E.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return M===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=Fi,!0},this.hasRenderPass=function(){return M},this.end=function(S,E){S.toneMapping=p,_=!0;let T=a,R=o;for(let x=0;x<g.length;x++){const A=g[x];A.enabled!==!1&&(A.render(S,R,T,E),A.needsSwap!==!1&&(T=R,R=R===o?l:o))}if(m!==S.outputColorSpace||v!==S.toneMapping){m=S.outputColorSpace,v=S.toneMapping,d.defines={},ft.getTransfer(m)===yt&&(d.defines.SRGB_TRANSFER="");const x=ZT[v];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(u),S.render(h,f),u=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const yx=new Sn,vh=new nl(1,1),Sx=new sx,Mx=new h1,wx=new dx,sg=[],ag=[],og=new Float32Array(16),lg=new Float32Array(9),cg=new Float32Array(4);function Da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sg[r];if(s===void 0&&(s=new Float32Array(r),sg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Au(t,e){let n=ag[e];n===void 0&&(n=new Int32Array(e),ag[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function i2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;cg.set(i),t.uniformMatrix2fv(this.addr,!1,cg),tn(n,i)}}function r2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;lg.set(i),t.uniformMatrix3fv(this.addr,!1,lg),tn(n,i)}}function s2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;og.set(i),t.uniformMatrix4fv(this.addr,!1,og),tn(n,i)}}function a2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function u2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(vh.compareFunction=n.isReversedDepthBuffer()?Up:Dp,s=vh):s=yx,n.setTexture2D(e||s,r)}function m2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Mx,r)}function g2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wx,r)}function v2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Sx,r)}function _2(t){switch(t){case 5126:return QT;case 35664:return e2;case 35665:return t2;case 35666:return n2;case 35674:return i2;case 35675:return r2;case 35676:return s2;case 5124:case 35670:return a2;case 35667:case 35671:return o2;case 35668:case 35672:return l2;case 35669:case 35673:return c2;case 5125:return u2;case 36294:return f2;case 36295:return d2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return v2}}function x2(t,e){t.uniform1fv(this.addr,e)}function y2(t,e){const n=Da(e,this.size,2);t.uniform2fv(this.addr,n)}function S2(t,e){const n=Da(e,this.size,3);t.uniform3fv(this.addr,n)}function M2(t,e){const n=Da(e,this.size,4);t.uniform4fv(this.addr,n)}function w2(t,e){const n=Da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function E2(t,e){const n=Da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function T2(t,e){const n=Da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function b2(t,e){t.uniform1iv(this.addr,e)}function A2(t,e){t.uniform2iv(this.addr,e)}function R2(t,e){t.uniform3iv(this.addr,e)}function C2(t,e){t.uniform4iv(this.addr,e)}function P2(t,e){t.uniform1uiv(this.addr,e)}function L2(t,e){t.uniform2uiv(this.addr,e)}function I2(t,e){t.uniform3uiv(this.addr,e)}function N2(t,e){t.uniform4uiv(this.addr,e)}function D2(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=vh:a=yx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function U2(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Mx,s[a])}function F2(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||wx,s[a])}function O2(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Sx,s[a])}function k2(t){switch(t){case 5126:return x2;case 35664:return y2;case 35665:return S2;case 35666:return M2;case 35674:return w2;case 35675:return E2;case 35676:return T2;case 5124:case 35670:return b2;case 35667:case 35671:return A2;case 35668:case 35672:return R2;case 35669:case 35673:return C2;case 5125:return P2;case 36294:return L2;case 36295:return I2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return D2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return O2}}class B2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_2(n.type)}}class z2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k2(n.type)}}class H2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function ug(t,e){t.seq.push(e),t.map[e.id]=e}function G2(t,e,n){const i=t.name,r=i.length;for(Nf.lastIndex=0;;){const s=Nf.exec(i),a=Nf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ug(n,c===void 0?new B2(o,t,e):new z2(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new H2(o),ug(n,h)),n=h}}}class Sc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);G2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const V2=37297;let W2=0;function X2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const dg=new tt;function $2(t){ft._getMatrix(dg,ft.workingColorSpace,t);const e=`mat3( ${dg.elements.map(n=>n.toFixed(4))} )`;switch(ft.getTransfer(t)){case tu:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+X2(t.getShaderSource(e),o)}else return s}function Y2(t,e){const n=$2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const q2={[Sp]:"Linear",[Mp]:"Reinhard",[wp]:"Cineon",[Su]:"ACESFilmic",[Tp]:"AgX",[bp]:"Neutral",[Ep]:"Custom"};function j2(t,e){const n=q2[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zl=new V;function K2(){ft.getLuminanceCoefficients(Zl);const t=Zl.x.toFixed(4),e=Zl.y.toFixed(4),n=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function J2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Q2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function _o(t){return t!==""}function pg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(t){return t.replace(eb,nb)}const tb=new Map;function nb(t,e){let n=it[e];if(n===void 0){const i=tb.get(e);if(i!==void 0)n=it[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _h(n)}const ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(t){return t.replace(ib,rb)}function rb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sb={[Lo]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function ab(t){return sb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ob={[vs]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE",[Mu]:"ENVMAP_TYPE_CUBE_UV"};function lb(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ob[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const cb={[wa]:"ENVMAP_MODE_REFRACTION"};function ub(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":cb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fb={[yp]:"ENVMAP_BLENDING_MULTIPLY",[RM]:"ENVMAP_BLENDING_MIX",[CM]:"ENVMAP_BLENDING_ADD"};function db(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":fb[t.combine]||"ENVMAP_BLENDING_NONE"}function hb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function pb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ab(n),c=lb(n),d=ub(n),h=db(n),f=hb(n),m=Z2(n),v=J2(s),_=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_o).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_o).join(`
`),u.length>0&&(u+=`
`)):(p=[vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),u=[vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?it.tonemapping_pars_fragment:"",n.toneMapping!==Fi?j2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Y2("linearToOutputTexel",n.outputColorSpace),K2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_o).join(`
`)),a=_h(a),a=pg(a,n),a=mg(a,n),o=_h(o),o=pg(o,n),o=mg(o,n),a=gg(a),o=gg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===T0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===T0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=g+p+a,S=g+u+o,E=fg(r,r.VERTEX_SHADER,M),T=fg(r,r.FRAGMENT_SHADER,S);r.attachShader(_,E),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(U){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",W=r.getShaderInfoLog(E)||"",O=r.getShaderInfoLog(T)||"",K=z.trim(),se=W.trim(),te=O.trim();let $=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,E,T);else{const Q=hg(r,E,"vertex"),oe=hg(r,T,"fragment");pt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+Q+`
`+oe)}else K!==""?Ke("WebGLProgram: Program Info Log:",K):(se===""||te==="")&&(Y=!1);Y&&(U.diagnostics={runnable:$,programLog:K,vertexShader:{log:se,prefix:p},fragmentShader:{log:te,prefix:u}})}r.deleteShader(E),r.deleteShader(T),x=new Sc(r,_),A=Q2(r,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(_,V2)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let mb=0;class gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vb(e),n.set(e,i)),i}}class vb{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}}function _b(t){return t===_s||t===Zc||t===Jc}function xb(t,e,n,i,r,s){const a=new kp,o=new gb,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,A,P,U,z,W){const O=U.fog,K=z.geometry,se=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||se,te),Y=$&&$.mapping===Mu?$.image.height:null,Q=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ye=oe!==void 0?oe.length:0;let Ce=0;K.morphAttributes.position!==void 0&&(Ce=1),K.morphAttributes.normal!==void 0&&(Ce=2),K.morphAttributes.color!==void 0&&(Ce=3);let je,We,Ye,ae;if(Q){const de=Pi[Q];je=de.vertexShader,We=de.fragmentShader}else{je=x.vertexShader,We=x.fragmentShader;const de=o.getVertexShaderStage(x),Pe=o.getFragmentShaderStage(x);o.update(x,de,Pe),Ye=de.id,ae=Pe.id}const fe=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),He=z.isInstancedMesh===!0,Te=z.isBatchedMesh===!0,ze=!!x.map,Je=!!x.matcap,De=!!$,Qe=!!x.aoMap,Ve=!!x.lightMap,Ge=!!x.bumpMap&&x.wireframe===!1,et=!!x.normalMap,gt=!!x.displacementMap,bt=!!x.emissiveMap,st=!!x.metalnessMap,wt=!!x.roughnessMap,k=x.anisotropy>0,vt=x.clearcoat>0,ct=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,q=x.sheen>0,J=x.transmission>0,le=k&&!!x.anisotropyMap,D=vt&&!!x.clearcoatMap,xe=vt&&!!x.clearcoatNormalMap,re=vt&&!!x.clearcoatRoughnessMap,ce=y&&!!x.iridescenceMap,Me=y&&!!x.iridescenceThicknessMap,H=q&&!!x.sheenColorMap,ee=q&&!!x.sheenRoughnessMap,j=!!x.specularMap,he=!!x.specularColorMap,_e=!!x.specularIntensityMap,pe=J&&!!x.transmissionMap,b=J&&!!x.thicknessMap,B=!!x.gradientMap,I=!!x.alphaMap,ie=x.alphaTest>0,ue=!!x.alphaHash,ne=!!x.extensions;let me=Fi;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(me=t.toneMapping);const ve={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:We,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Te,batchingColor:Te&&z._colorsTexture!==null,instancing:He,instancingColor:He&&z.instanceColor!==null,instancingMorph:He&&z.morphTexture!==null,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:Je,envMap:De,envMapMode:De&&$.mapping,envMapCubeUVHeight:Y,aoMap:Qe,lightMap:Ve,bumpMap:Ge,normalMap:et,displacementMap:gt,emissiveMap:bt,normalMapObjectSpace:et&&x.normalMapType===IM,normalMapTangentSpace:et&&x.normalMapType===Qc,packedNormalMap:et&&x.normalMapType===Qc&&_b(x.normalMap.format),metalnessMap:st,roughnessMap:wt,anisotropy:k,anisotropyMap:le,clearcoat:vt,clearcoatMap:D,clearcoatNormalMap:xe,clearcoatRoughnessMap:re,dispersion:ct,retroreflection:C,iridescence:y,iridescenceMap:ce,iridescenceThicknessMap:Me,sheen:q,sheenColorMap:H,sheenRoughnessMap:ee,specularMap:j,specularColorMap:he,specularIntensityMap:_e,transmission:J,transmissionMap:pe,thicknessMap:b,gradientMap:B,opaque:x.transparent===!1&&x.blending===Io&&x.alphaToCoverage===!1,alphaMap:I,alphaTest:ie,alphaHash:ue,combine:x.combine,mapUv:ze&&v(x.map.channel),aoMapUv:Qe&&v(x.aoMap.channel),lightMapUv:Ve&&v(x.lightMap.channel),bumpMapUv:Ge&&v(x.bumpMap.channel),normalMapUv:et&&v(x.normalMap.channel),displacementMapUv:gt&&v(x.displacementMap.channel),emissiveMapUv:bt&&v(x.emissiveMap.channel),metalnessMapUv:st&&v(x.metalnessMap.channel),roughnessMapUv:wt&&v(x.roughnessMap.channel),anisotropyMapUv:le&&v(x.anisotropyMap.channel),clearcoatMapUv:D&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:H&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ee&&v(x.sheenRoughnessMap.channel),specularMapUv:j&&v(x.specularMap.channel),specularColorMapUv:he&&v(x.specularColorMap.channel),specularIntensityMapUv:_e&&v(x.specularIntensityMap.channel),transmissionMapUv:pe&&v(x.transmissionMap.channel),thicknessMapUv:b&&v(x.thicknessMap.channel),alphaMapUv:I&&v(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(et||k),vertexNormals:!!K.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ze||I),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||K.attributes.normal===void 0&&et===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ce,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:me,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:bt&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qt,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(u(A,x),g(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function u(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function g(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){const A=m[x.type];let P;if(A){const U=Pi[A];P=il.clone(U.uniforms)}else P=x.uniforms;return P}function S(x,A){let P=d.get(A);return P!==void 0?++P.usedTimes:(P=new pb(t,A,x,r),c.push(P),d.set(A,P)),P}function E(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:R}}function yb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Sb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function _g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,v,_,p,u){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:u},t[e]=g):(g.id=f.id,g.object=f,g.geometry=m,g.material=v,g.materialVariant=a(f),g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=p,g.group=u),e++,g}function l(f,m,v,_,p,u,g){g.reversedDepth===!0&&(p=-p);const M=o(f,m,v,_,p,u);v.transmission>0?i.push(M):v.transparent===!0?r.push(M):n.push(M)}function c(f,m,v,_,p,u){const g=o(f,m,v,_,p,u);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function d(f,m){n.length>1&&n.sort(f||Sb),i.length>1&&i.sort(m||_g),r.length>1&&r.sort(m||_g)}function h(){for(let f=e,m=t.length;f<m;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function Mb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new xg,t.set(i,[a])):r>=s.length?(a=new xg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function wb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new $e};break;case"SpotLight":n={position:new V,direction:new V,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function Eb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Tb=0;function bb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ab(t){const e=new wb,n=Eb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new Lt,a=new Lt;function o(c){let d=0,h=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,v=0,_=0,p=0,u=0,g=0,M=0,S=0,E=0,T=0,R=0,x=0,A=0,P=0;c.sort(bb);for(let z=0,W=c.length;z<W;z++){const O=c[z],K=O.color,se=O.intensity,te=O.distance;let $=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===_s?$=O.shadow.map.texture:$=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)d+=K.r*se,h+=K.g*se,f+=K.b*se;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],se);P++}else if(O.isSunLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Q=O.shadow,oe=n.get(O);oe.shadowIntensity=Q.intensity,oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[v]=oe,i.sunShadowMap[v]=$;const ye=Q.getViewportCount();for(let Ce=0;Ce<ye;Ce++)i.sunShadowMatrix[_+Ce]=Q.getMatrix(Ce),i.sunShadowCascade[_+Ce]=Q._cascadeData[Ce];_+=ye,v++}i.sun[m]=Y,m++}else if(O.isDirectionalLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Q=O.shadow,oe=n.get(O);oe.shadowIntensity=Q.intensity,oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,i.directionalShadow[p]=oe,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=O.shadow.matrix,E++}i.directional[p]=Y,p++}else if(O.isSpotLight){const Y=e.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(K).multiplyScalar(se),Y.distance=te,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,i.spot[g]=Y;const Q=O.shadow;if(O.map&&(i.spotLightMap[x]=O.map,x++,Q.updateMatrices(O),O.castShadow&&A++),i.spotLightMatrix[g]=Q.matrix,O.castShadow){const oe=n.get(O);oe.shadowIntensity=Q.intensity,oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,i.spotShadow[g]=oe,i.spotShadowMap[g]=$,R++}g++}else if(O.isRectAreaLight){const Y=e.get(O);Y.color.copy(K).multiplyScalar(se),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[M]=Y,M++}else if(O.isPointLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const Q=O.shadow,oe=n.get(O);oe.shadowIntensity=Q.intensity,oe.shadowBias=Q.bias,oe.shadowNormalBias=Q.normalBias,oe.shadowRadius=Q.radius,oe.shadowMapSize=Q.mapSize,oe.shadowCameraNear=Q.camera.near,oe.shadowCameraFar=Q.camera.far,i.pointShadow[u]=oe,i.pointShadowMap[u]=$,i.pointShadowMatrix[u]=O.shadow.matrix,T++}i.point[u]=Y,u++}else if(O.isHemisphereLight){const Y=e.get(O);Y.skyColor.copy(O.color).multiplyScalar(se),Y.groundColor.copy(O.groundColor).multiplyScalar(se),i.hemi[S]=Y,S++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==u||U.spotLength!==g||U.rectAreaLength!==M||U.hemiLength!==S||U.numSunShadows!==v||U.numDirectionalShadows!==E||U.numPointShadows!==T||U.numSpotShadows!==R||U.numSpotMaps!==x||U.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=p,i.spot.length=g,i.rectArea.length=M,i.point.length=u,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,U.sunLength=m,U.directionalLength=p,U.pointLength=u,U.spotLength=g,U.rectAreaLength=M,U.hemiLength=S,U.numSunShadows=v,U.numDirectionalShadows=E,U.numPointShadows=T,U.numSpotShadows=R,U.numSpotMaps=x,U.numLightProbes=P,i.version=Tb++)}function l(c,d){let h=0,f=0,m=0,v=0,_=0,p=0;const u=d.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const S=c[g];if(S.isSunLight){const E=i.sun[h];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(u),h++}else if(S.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),f++}else if(S.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),v++}else if(S.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),a.identity(),s.copy(S.matrixWorld),s.premultiply(u),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:o,setupView:l,state:i}}function yg(t){const e=new Ab(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function d(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yg(t),e.set(r,[o])):s>=a.length?(o=new yg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lb=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Ib=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Sg=new Lt,to=new V,Df=new V;function Nb(t,e,n){let i=new Bp;const r=new Be,s=new Be,a=new Bt,o=new O1,l=new k1,c={},d=n.maxTextureSize,h={[gs]:Pn,[Pn]:gs,[qt]:qt},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Cb,fragmentShader:Pb}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new fn;v.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let u=this.type;this.render=function(T,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===cM&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lo);const A=t.getRenderTarget(),P=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ui),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=u!==this.type;W&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(K=>K.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,K=T.length;O<K;O++){const se=T[O],te=se.shadow;if(te===void 0){Ke("WebGLShadowMap:",se,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const $=te.getFrameExtents();r.multiply($),s.copy(te.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,te.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,te.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(te.camera._reversedDepth=Y,te.map===null||W===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===go){if(se.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new Ln(r.x,r.y,{format:_s,type:Bn,minFilter:xn,magFilter:xn,generateMipmaps:!1}),te.map.texture.name=se.name+".shadowMap",te.map.depthTexture=new nl(r.x,r.y,_i),te.map.depthTexture.name=se.name+".shadowMapDepth",te.map.depthTexture.format=ar,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=ln,te.map.depthTexture.magFilter=ln}else se.isPointLight?(te.map=new xx(r.x),te.map.depthTexture=new I1(r.x,Oi)):(te.map=new Ln(r.x,r.y),te.map.depthTexture=new nl(r.x,r.y,Oi)),te.map.depthTexture.name=se.name+".shadowMap",te.map.depthTexture.format=ar,this.type===Lo?(te.map.depthTexture.compareFunction=Y?Up:Dp,te.map.depthTexture.minFilter=xn,te.map.depthTexture.magFilter=xn):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=ln,te.map.depthTexture.magFilter=ln);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==r.x||te.map.height!==r.y)&&te.map.setSize(r.x,r.y);const Q=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();se.isPointLight!==!0&&te.updateMatrices(se,x);for(let oe=0;oe<Q;oe++){const ye=te.getCamera(oe);if(se.isPointLight){const Ce=te.camera,je=te.matrix,We=se.distance||Ce.far;We!==Ce.far&&(Ce.far=We,Ce.updateProjectionMatrix()),to.setFromMatrixPosition(se.matrixWorld),Ce.position.copy(to),Df.copy(Ce.position),Df.add(Lb[oe]),Ce.up.copy(Ib[oe]),Ce.lookAt(Df),Ce.updateMatrixWorld(),je.makeTranslation(-to.x,-to.y,-to.z),Sg.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),te._frustum.setFromProjectionMatrix(Sg,Ce.coordinateSystem,Ce.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)t.setRenderTarget(te.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(te.map),t.clear());const Ce=te.getViewport(oe);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),z.viewport(a)}i=te.getFrustum(oe),S(R,x,ye,se,this.type)}te.isPointLightShadow!==!0&&this.type===go&&g(te,x),te.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(A,P,U)};function g(T,R){const x=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ln(r.x,r.y,{format:_s,type:Bn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,x,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,x,m,_,null)}function M(T,R,x,A){let P=null;const U=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)P=U;else if(P=x.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=P.uuid,W=R.uuid;let O=c[z];O===void 0&&(O={},c[z]=O);let K=O[W];K===void 0&&(K=P.clone(),O[W]=K,R.addEventListener("dispose",E)),P=K}if(P.visible=R.visible,P.wireframe=R.wireframe,A===go?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:h[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const z=t.properties.get(P);z.light=x}return P}function S(T,R,x,A,P){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===go)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const W=e.update(T),O=T.material;if(Array.isArray(O)){const K=W.groups;for(let se=0,te=K.length;se<te;se++){const $=K[se],Y=O[$.materialIndex];if(Y&&Y.visible){const Q=M(T,Y,A,P);T.onBeforeShadow(t,T,R,x,W,Q,$),t.renderBufferDirect(x,null,W,Q,T,$),T.onAfterShadow(t,T,R,x,W,Q,$)}}}else if(O.visible){const K=M(T,O,A,P);T.onBeforeShadow(t,T,R,x,W,K,null),t.renderBufferDirect(x,null,W,K,T,null),T.onAfterShadow(t,T,R,x,W,K,null)}}const z=T.children;for(let W=0,O=z.length;W<O;W++)S(z[W],R,x,A,P)}function E(T){T.target.removeEventListener("dispose",E);for(const x in c){const A=c[x],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Db(t,e){function n(){let b=!1;const B=new Bt;let I=null;const ie=new Bt(0,0,0,0);return{setMask:function(ue){I!==ue&&!b&&(t.colorMask(ue,ue,ue,ue),I=ue)},setLocked:function(ue){b=ue},setClear:function(ue,ne,me,ve,de){de===!0&&(ue*=ve,ne*=ve,me*=ve),B.set(ue,ne,me,ve),ie.equals(B)===!1&&(t.clearColor(ue,ne,me,ve),ie.copy(B))},reset:function(){b=!1,I=null,ie.set(-1,0,0,0)}}}function i(){let b=!1,B=!1,I=null,ie=null,ue=null;return{setReversed:function(ne){if(B!==ne){const me=e.get("EXT_clip_control");ne?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),B=ne;const ve=ue;ue=null,this.setClear(ve)}},getReversed:function(){return B},setTest:function(ne){ne?fe(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(ne){I!==ne&&!b&&(t.depthMask(ne),I=ne)},setFunc:function(ne){if(B&&(ne=WM[ne]),ie!==ne){switch(ne){case Ld:t.depthFunc(t.NEVER);break;case Id:t.depthFunc(t.ALWAYS);break;case Nd:t.depthFunc(t.LESS);break;case Jo:t.depthFunc(t.LEQUAL);break;case Dd:t.depthFunc(t.EQUAL);break;case Ud:t.depthFunc(t.GEQUAL);break;case Fd:t.depthFunc(t.GREATER);break;case Od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=ne}},setLocked:function(ne){b=ne},setClear:function(ne){ue!==ne&&(ue=ne,B&&(ne=1-ne),t.clearDepth(ne))},reset:function(){b=!1,I=null,ie=null,ue=null,B=!1}}}function r(){let b=!1,B=null,I=null,ie=null,ue=null,ne=null,me=null,ve=null,de=null;return{setTest:function(Pe){b||(Pe?fe(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(Pe){B!==Pe&&!b&&(t.stencilMask(Pe),B=Pe)},setFunc:function(Pe,Ze,ut){(I!==Pe||ie!==Ze||ue!==ut)&&(t.stencilFunc(Pe,Ze,ut),I=Pe,ie=Ze,ue=ut)},setOp:function(Pe,Ze,ut){(ne!==Pe||me!==Ze||ve!==ut)&&(t.stencilOp(Pe,Ze,ut),ne=Pe,me=Ze,ve=ut)},setLocked:function(Pe){b=Pe},setClear:function(Pe){de!==Pe&&(t.clearStencil(Pe),de=Pe)},reset:function(){b=!1,B=null,I=null,ie=null,ue=null,ne=null,me=null,ve=null,de=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f={},m=new WeakMap,v=[],_=null,p=!1,u=null,g=null,M=null,S=null,E=null,T=null,R=null,x=new $e(0,0,0),A=0,P=!1,U=null,z=null,W=null,O=null,K=null;const se=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,$=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),te=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),te=$>=2);let Q=null,oe={};const ye=t.getParameter(t.SCISSOR_BOX),Ce=t.getParameter(t.VIEWPORT),je=new Bt().fromArray(ye),We=new Bt().fromArray(Ce);function Ye(b,B,I,ie){const ue=new Uint8Array(4),ne=t.createTexture();t.bindTexture(b,ne),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let me=0;me<I;me++)b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY?t.texImage3D(B,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(B+me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return ne}const ae={};ae[t.TEXTURE_2D]=Ye(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=Ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),a.setFunc(Jo),Ge(!1),et(M0),fe(t.CULL_FACE),Qe(Ui);function fe(b){d[b]!==!0&&(t.enable(b),d[b]=!0)}function we(b){d[b]!==!1&&(t.disable(b),d[b]=!1)}function He(b,B){return f[b]!==B?(t.bindFramebuffer(b,B),f[b]=B,b===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=B),b===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=B),!0):!1}function Te(b,B){let I=v,ie=!1;if(b){I=m.get(B),I===void 0&&(I=[],m.set(B,I));const ue=b.textures;if(I.length!==ue.length||I[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,me=ue.length;ne<me;ne++)I[ne]=t.COLOR_ATTACHMENT0+ne;I.length=ue.length,ie=!0}}else I[0]!==t.BACK&&(I[0]=t.BACK,ie=!0);ie&&t.drawBuffers(I)}function ze(b){return _!==b?(t.useProgram(b),_=b,!0):!1}const Je={[Ws]:t.FUNC_ADD,[fM]:t.FUNC_SUBTRACT,[dM]:t.FUNC_REVERSE_SUBTRACT};Je[hM]=t.MIN,Je[pM]=t.MAX;const De={[mM]:t.ZERO,[gM]:t.ONE,[vM]:t.SRC_COLOR,[j_]:t.SRC_ALPHA,[wM]:t.SRC_ALPHA_SATURATE,[SM]:t.DST_COLOR,[xM]:t.DST_ALPHA,[_M]:t.ONE_MINUS_SRC_COLOR,[K_]:t.ONE_MINUS_SRC_ALPHA,[MM]:t.ONE_MINUS_DST_COLOR,[yM]:t.ONE_MINUS_DST_ALPHA,[EM]:t.CONSTANT_COLOR,[TM]:t.ONE_MINUS_CONSTANT_COLOR,[bM]:t.CONSTANT_ALPHA,[AM]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(b,B,I,ie,ue,ne,me,ve,de,Pe){if(b===Ui){p===!0&&(we(t.BLEND),p=!1);return}if(p===!1&&(fe(t.BLEND),p=!0),b!==uM){if(b!==u||Pe!==P){if((g!==Ws||E!==Ws)&&(t.blendEquation(t.FUNC_ADD),g=Ws,E=Ws),Pe)switch(b){case Io:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pd:t.blendFunc(t.ONE,t.ONE);break;case w0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case E0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:pt("WebGLState: Invalid blending: ",b);break}else switch(b){case Io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case w0:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E0:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",b);break}M=null,S=null,T=null,R=null,x.set(0,0,0),A=0,u=b,P=Pe}return}ue=ue||B,ne=ne||I,me=me||ie,(B!==g||ue!==E)&&(t.blendEquationSeparate(Je[B],Je[ue]),g=B,E=ue),(I!==M||ie!==S||ne!==T||me!==R)&&(t.blendFuncSeparate(De[I],De[ie],De[ne],De[me]),M=I,S=ie,T=ne,R=me),(ve.equals(x)===!1||de!==A)&&(t.blendColor(ve.r,ve.g,ve.b,de),x.copy(ve),A=de),u=b,P=!1}function Ve(b,B){b.side===qt?we(t.CULL_FACE):fe(t.CULL_FACE);let I=b.side===Pn;B&&(I=!I),Ge(I),b.blending===Io&&b.transparent===!1?Qe(Ui):Qe(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),s.setMask(b.colorWrite);const ie=b.stencilWrite;o.setTest(ie),ie&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),bt(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(b){U!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),U=b)}function et(b){b!==oM?(fe(t.CULL_FACE),b!==z&&(b===M0?t.cullFace(t.BACK):b===lM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),z=b}function gt(b){b!==W&&(te&&t.lineWidth(b),W=b)}function bt(b,B,I){b?(fe(t.POLYGON_OFFSET_FILL),(O!==B||K!==I)&&(O=B,K=I,a.getReversed()&&(B=-B),t.polygonOffset(B,I))):we(t.POLYGON_OFFSET_FILL)}function st(b){b?fe(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function wt(b){b===void 0&&(b=t.TEXTURE0+se-1),Q!==b&&(t.activeTexture(b),Q=b)}function k(b,B,I){I===void 0&&(Q===null?I=t.TEXTURE0+se-1:I=Q);let ie=oe[I];ie===void 0&&(ie={type:void 0,texture:void 0},oe[I]=ie),(ie.type!==b||ie.texture!==B)&&(Q!==I&&(t.activeTexture(I),Q=I),t.bindTexture(b,B||ae[b]),ie.type=b,ie.texture=B)}function vt(){const b=oe[Q];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ct(){try{t.compressedTexImage2D(...arguments)}catch(b){pt("WebGLState:",b)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(b){pt("WebGLState:",b)}}function y(){try{t.texSubImage2D(...arguments)}catch(b){pt("WebGLState:",b)}}function q(){try{t.texSubImage3D(...arguments)}catch(b){pt("WebGLState:",b)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(b){pt("WebGLState:",b)}}function le(){try{t.compressedTexSubImage3D(...arguments)}catch(b){pt("WebGLState:",b)}}function D(){try{t.texStorage2D(...arguments)}catch(b){pt("WebGLState:",b)}}function xe(){try{t.texStorage3D(...arguments)}catch(b){pt("WebGLState:",b)}}function re(){try{t.texImage2D(...arguments)}catch(b){pt("WebGLState:",b)}}function ce(){try{t.texImage3D(...arguments)}catch(b){pt("WebGLState:",b)}}function Me(b){return h[b]!==void 0?h[b]:t.getParameter(b)}function H(b,B){h[b]!==B&&(t.pixelStorei(b,B),h[b]=B)}function ee(b){je.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),je.copy(b))}function j(b){We.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),We.copy(b))}function he(b,B){let I=c.get(B);I===void 0&&(I=new WeakMap,c.set(B,I));let ie=I.get(b);ie===void 0&&(ie=t.getUniformBlockIndex(B,b.name),I.set(b,ie))}function _e(b,B){const ie=c.get(B).get(b);l.get(B)!==ie&&(t.uniformBlockBinding(B,ie,b.__bindingPointIndex),l.set(B,ie))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},Q=null,oe={},f={},m=new WeakMap,v=[],_=null,p=!1,u=null,g=null,M=null,S=null,E=null,T=null,R=null,x=new $e(0,0,0),A=0,P=!1,U=null,z=null,W=null,O=null,K=null,je.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:we,bindFramebuffer:He,drawBuffers:Te,useProgram:ze,setBlending:Qe,setMaterial:Ve,setFlipSided:Ge,setCullFace:et,setLineWidth:gt,setPolygonOffset:bt,setScissorTest:st,activeTexture:wt,bindTexture:k,unbindTexture:vt,compressedTexImage2D:ct,compressedTexImage3D:C,texImage2D:re,texImage3D:ce,pixelStorei:H,getParameter:Me,updateUBOMapping:he,uniformBlockBinding:_e,texStorage2D:D,texStorage3D:xe,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:J,compressedTexSubImage3D:le,scissor:ee,viewport:j,reset:pe}}function Ub(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,d=new WeakMap,h=new Set;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return v?new OffscreenCanvas(C,y):nu("canvas")}function p(C,y,q){let J=1;const le=ct(C);if((le.width>q||le.height>q)&&(J=q/Math.max(le.width,le.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const D=Math.floor(J*le.width),xe=Math.floor(J*le.height);f===void 0&&(f=_(D,xe));const re=y?_(D,xe):f;return re.width=D,re.height=xe,re.getContext("2d").drawImage(C,0,0,D,xe),Ke("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+D+"x"+xe+")."),re}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),C;return C}function u(C){return C.generateMipmaps}function g(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,y,q,J,le,D=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;J&&(xe=e.get("EXT_texture_norm16"),xe||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=y;if(y===t.RED&&(q===t.FLOAT&&(re=t.R32F),q===t.HALF_FLOAT&&(re=t.R16F),q===t.UNSIGNED_BYTE&&(re=t.R8),q===t.UNSIGNED_SHORT&&xe&&(re=xe.R16_EXT),q===t.SHORT&&xe&&(re=xe.R16_SNORM_EXT)),y===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(re=t.R8UI),q===t.UNSIGNED_SHORT&&(re=t.R16UI),q===t.UNSIGNED_INT&&(re=t.R32UI),q===t.BYTE&&(re=t.R8I),q===t.SHORT&&(re=t.R16I),q===t.INT&&(re=t.R32I)),y===t.RG&&(q===t.FLOAT&&(re=t.RG32F),q===t.HALF_FLOAT&&(re=t.RG16F),q===t.UNSIGNED_BYTE&&(re=t.RG8),q===t.UNSIGNED_SHORT&&xe&&(re=xe.RG16_EXT),q===t.SHORT&&xe&&(re=xe.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(re=t.RG8UI),q===t.UNSIGNED_SHORT&&(re=t.RG16UI),q===t.UNSIGNED_INT&&(re=t.RG32UI),q===t.BYTE&&(re=t.RG8I),q===t.SHORT&&(re=t.RG16I),q===t.INT&&(re=t.RG32I)),y===t.RGB_INTEGER&&(q===t.UNSIGNED_BYTE&&(re=t.RGB8UI),q===t.UNSIGNED_SHORT&&(re=t.RGB16UI),q===t.UNSIGNED_INT&&(re=t.RGB32UI),q===t.BYTE&&(re=t.RGB8I),q===t.SHORT&&(re=t.RGB16I),q===t.INT&&(re=t.RGB32I)),y===t.RGBA_INTEGER&&(q===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),q===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),q===t.UNSIGNED_INT&&(re=t.RGBA32UI),q===t.BYTE&&(re=t.RGBA8I),q===t.SHORT&&(re=t.RGBA16I),q===t.INT&&(re=t.RGBA32I)),y===t.RGB&&(q===t.UNSIGNED_SHORT&&xe&&(re=xe.RGB16_EXT),q===t.SHORT&&xe&&(re=xe.RGB16_SNORM_EXT),q===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),q===t.UNSIGNED_INT_10F_11F_11F_REV&&(re=t.R11F_G11F_B10F)),y===t.RGBA){const ce=D?tu:ft.getTransfer(le);q===t.FLOAT&&(re=t.RGBA32F),q===t.HALF_FLOAT&&(re=t.RGBA16F),q===t.UNSIGNED_BYTE&&(re=ce===yt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT&&xe&&(re=xe.RGBA16_EXT),q===t.SHORT&&xe&&(re=xe.RGBA16_SNORM_EXT),q===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function E(C,y){let q;return C?y===null||y===Oi||y===el?q=t.DEPTH24_STENCIL8:y===_i?q=t.DEPTH32F_STENCIL8:y===Qo&&(q=t.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Oi||y===el?q=t.DEPTH_COMPONENT24:y===_i?q=t.DEPTH_COMPONENT32F:y===Qo&&(q=t.DEPTH_COMPONENT16),q}function T(C,y){return u(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==xn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&h.delete(y)}function x(C){const y=C.target;y.removeEventListener("dispose",x),U(y)}function A(C){const y=i.get(C);if(y.__webglInit===void 0)return;const q=C.source,J=m.get(q);if(J){const le=J[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&P(C),Object.keys(J).length===0&&m.delete(q)}i.remove(C)}function P(C){const y=i.get(C);t.deleteTexture(y.__webglTexture);const q=C.source,J=m.get(q);delete J[y.__cacheKey],a.memory.textures--}function U(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let le=0;le<y.__webglFramebuffer[J].length;le++)t.deleteFramebuffer(y.__webglFramebuffer[J][le]);else t.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)t.deleteFramebuffer(y.__webglFramebuffer[J]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=C.textures;for(let J=0,le=q.length;J<le;J++){const D=i.get(q[J]);D.__webglTexture&&(t.deleteTexture(D.__webglTexture),a.memory.textures--),i.remove(q[J])}i.remove(C)}let z=0;function W(){z=0}function O(){return z}function K(C){z=C}function se(){const C=z;return C>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),z+=1,C}function te(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function $(C,y){const q=i.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){const J=C.image;if(J===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{we(q,C,y);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+y)}function Y(C,y){const q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){we(q,C,y);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+y)}function Q(C,y){const q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){we(q,C,y);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+y)}function oe(C,y){const q=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){He(q,C,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+y)}const ye={[Kc]:t.REPEAT,[Zi]:t.CLAMP_TO_EDGE,[kd]:t.MIRRORED_REPEAT},Ce={[ln]:t.NEAREST,[PM]:t.NEAREST_MIPMAP_NEAREST,[Cl]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[sf]:t.LINEAR_MIPMAP_NEAREST,[rs]:t.LINEAR_MIPMAP_LINEAR},je={[DM]:t.NEVER,[BM]:t.ALWAYS,[UM]:t.LESS,[Dp]:t.LEQUAL,[FM]:t.EQUAL,[Up]:t.GEQUAL,[OM]:t.GREATER,[kM]:t.NOTEQUAL};function We(C,y){if(y.type===_i&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===xn||y.magFilter===sf||y.magFilter===Cl||y.magFilter===rs||y.minFilter===xn||y.minFilter===sf||y.minFilter===Cl||y.minFilter===rs)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,ye[y.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ye[y.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ye[y.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Ce[y.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Ce[y.minFilter]),y.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,je[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ln||y.minFilter!==Cl&&y.minFilter!==rs||y.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(C,y){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const J=y.source;let le=m.get(J);le===void 0&&(le={},m.set(J,le));const D=te(y);if(D!==C.__cacheKey){le[D]===void 0&&(le[D]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,q=!0),le[D].usedTimes++;const xe=le[C.__cacheKey];xe!==void 0&&(le[C.__cacheKey].usedTimes--,xe.usedTimes===0&&P(y)),C.__cacheKey=D,C.__webglTexture=le[D].texture}return q}function ae(C,y,q){return Math.floor(Math.floor(C/q)/y)}function fe(C,y,q,J){const D=C.updateRanges;if(D.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,q,J,y.data);else{D.sort((H,ee)=>H.start-ee.start);let xe=0;for(let H=1;H<D.length;H++){const ee=D[xe],j=D[H],he=ee.start+ee.count,_e=ae(j.start,y.width,4),pe=ae(ee.start,y.width,4);j.start<=he+1&&_e===pe&&ae(j.start+j.count-1,y.width,4)===_e?ee.count=Math.max(ee.count,j.start+j.count-ee.start):(++xe,D[xe]=j)}D.length=xe+1;const re=n.getParameter(t.UNPACK_ROW_LENGTH),ce=n.getParameter(t.UNPACK_SKIP_PIXELS),Me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let H=0,ee=D.length;H<ee;H++){const j=D[H],he=Math.floor(j.start/4),_e=Math.ceil(j.count/4),pe=he%y.width,b=Math.floor(he/y.width),B=_e,I=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(t.UNPACK_SKIP_ROWS,b),n.texSubImage2D(t.TEXTURE_2D,0,pe,b,B,I,q,J,y.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,re),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(t.UNPACK_SKIP_ROWS,Me)}}function we(C,y,q){let J=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=t.TEXTURE_3D);const le=Ye(C,y),D=y.source;n.bindTexture(J,C.__webglTexture,t.TEXTURE0+q);const xe=i.get(D);if(D.version!==xe.__version||le===!0){if(n.activeTexture(t.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const I=ft.getPrimaries(ft.workingColorSpace),ie=y.colorSpace===Rr?null:ft.getPrimaries(y.colorSpace),ue=y.colorSpace===Rr||I===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ce=p(y.image,!1,r.maxTextureSize);ce=vt(y,ce);const Me=s.convert(y.format,y.colorSpace),H=s.convert(y.type);let ee=S(y.internalFormat,Me,H,y.normalized,y.colorSpace,y.isVideoTexture);We(J,y);let j;const he=y.mipmaps,_e=y.isVideoTexture!==!0,pe=xe.__version===void 0||le===!0,b=D.dataReady,B=T(y,ce);if(y.isDepthTexture)ee=E(y.format===ss,y.type),pe&&(_e?n.texStorage2D(t.TEXTURE_2D,1,ee,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,ee,ce.width,ce.height,0,Me,H,null));else if(y.isDataTexture)if(he.length>0){_e&&pe&&n.texStorage2D(t.TEXTURE_2D,B,ee,he[0].width,he[0].height);for(let I=0,ie=he.length;I<ie;I++)j=he[I],_e?b&&n.texSubImage2D(t.TEXTURE_2D,I,0,0,j.width,j.height,Me,H,j.data):n.texImage2D(t.TEXTURE_2D,I,ee,j.width,j.height,0,Me,H,j.data);y.generateMipmaps=!1}else _e?(pe&&n.texStorage2D(t.TEXTURE_2D,B,ee,ce.width,ce.height),b&&fe(y,ce,Me,H)):n.texImage2D(t.TEXTURE_2D,0,ee,ce.width,ce.height,0,Me,H,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){_e&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,B,ee,he[0].width,he[0].height,ce.depth);for(let I=0,ie=he.length;I<ie;I++)if(j=he[I],y.format!==xi)if(Me!==null)if(_e){if(b)if(y.layerUpdates.size>0){const ue=eg(j.width,j.height,y.format,y.type);for(const ne of y.layerUpdates){const me=j.data.subarray(ne*ue/j.data.BYTES_PER_ELEMENT,(ne+1)*ue/j.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,ne,j.width,j.height,1,Me,me)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,0,j.width,j.height,ce.depth,Me,j.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,I,ee,j.width,j.height,ce.depth,0,j.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?b&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,0,j.width,j.height,ce.depth,Me,H,j.data):n.texImage3D(t.TEXTURE_2D_ARRAY,I,ee,j.width,j.height,ce.depth,0,Me,H,j.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{_e&&pe&&n.texStorage2D(t.TEXTURE_2D,B,ee,he[0].width,he[0].height);for(let I=0,ie=he.length;I<ie;I++)j=he[I],y.format!==xi?Me!==null?_e?b&&n.compressedTexSubImage2D(t.TEXTURE_2D,I,0,0,j.width,j.height,Me,j.data):n.compressedTexImage2D(t.TEXTURE_2D,I,ee,j.width,j.height,0,j.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?b&&n.texSubImage2D(t.TEXTURE_2D,I,0,0,j.width,j.height,Me,H,j.data):n.texImage2D(t.TEXTURE_2D,I,ee,j.width,j.height,0,Me,H,j.data)}else if(y.isDataArrayTexture)if(_e){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,B,ee,ce.width,ce.height,ce.depth),b)if(y.layerUpdates.size>0){const I=eg(ce.width,ce.height,y.format,y.type);for(const ie of y.layerUpdates){const ue=ce.data.subarray(ie*I/ce.data.BYTES_PER_ELEMENT,(ie+1)*I/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,Me,H,ue)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Me,H,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,ce.width,ce.height,ce.depth,0,Me,H,ce.data);else if(y.isData3DTexture)_e?(pe&&n.texStorage3D(t.TEXTURE_3D,B,ee,ce.width,ce.height,ce.depth),b&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Me,H,ce.data)):n.texImage3D(t.TEXTURE_3D,0,ee,ce.width,ce.height,ce.depth,0,Me,H,ce.data);else if(y.isFramebufferTexture){if(pe)if(_e)n.texStorage2D(t.TEXTURE_2D,B,ee,ce.width,ce.height);else{let I=ce.width,ie=ce.height;for(let ue=0;ue<B;ue++)n.texImage2D(t.TEXTURE_2D,ue,ee,I,ie,0,Me,H,null),I>>=1,ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const I=t.canvas;if(I.hasAttribute("layoutsubtree")||I.setAttribute("layoutsubtree","true"),ce.parentNode!==I){I.appendChild(ce),h.add(y),I.onpaint=ie=>{const ue=ie.changedElements;for(const ne of h)ue.includes(ne.image)&&(ne.needsUpdate=!0)},I.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ce);else{const ue=t.RGBA,ne=t.RGBA,me=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ue,ne,me,ce)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(he.length>0){if(_e&&pe){const I=ct(he[0]);n.texStorage2D(t.TEXTURE_2D,B,ee,I.width,I.height)}for(let I=0,ie=he.length;I<ie;I++)j=he[I],_e?b&&n.texSubImage2D(t.TEXTURE_2D,I,0,0,Me,H,j):n.texImage2D(t.TEXTURE_2D,I,ee,Me,H,j);y.generateMipmaps=!1}else if(_e){if(pe){const I=ct(ce);n.texStorage2D(t.TEXTURE_2D,B,ee,I.width,I.height)}b&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,H,ce)}else n.texImage2D(t.TEXTURE_2D,0,ee,Me,H,ce);u(y)&&g(J),xe.__version=D.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function He(C,y,q){if(y.image.length!==6)return;const J=Ye(C,y),le=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+q);const D=i.get(le);if(le.version!==D.__version||J===!0){n.activeTexture(t.TEXTURE0+q);const xe=ft.getPrimaries(ft.workingColorSpace),re=y.colorSpace===Rr?null:ft.getPrimaries(y.colorSpace),ce=y.colorSpace===Rr||xe===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,H=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!Me&&!H?ee[ne]=p(y.image[ne],!0,r.maxCubemapSize):ee[ne]=H?y.image[ne].image:y.image[ne],ee[ne]=vt(y,ee[ne]);const j=ee[0],he=s.convert(y.format,y.colorSpace),_e=s.convert(y.type),pe=S(y.internalFormat,he,_e,y.normalized,y.colorSpace),b=y.isVideoTexture!==!0,B=D.__version===void 0||J===!0,I=le.dataReady;let ie=T(y,j);We(t.TEXTURE_CUBE_MAP,y);let ue;if(Me){b&&B&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,pe,j.width,j.height);for(let ne=0;ne<6;ne++){ue=ee[ne].mipmaps;for(let me=0;me<ue.length;me++){const ve=ue[me];y.format!==xi?he!==null?b?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,0,0,ve.width,ve.height,he,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,pe,ve.width,ve.height,0,ve.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,0,0,ve.width,ve.height,he,_e,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,pe,ve.width,ve.height,0,he,_e,ve.data)}}}else{if(ue=y.mipmaps,b&&B){ue.length>0&&ie++;const ne=ct(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,pe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(H){b?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,he,_e,ee[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,ee[ne].width,ee[ne].height,0,he,_e,ee[ne].data);for(let me=0;me<ue.length;me++){const de=ue[me].image[ne].image;b?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,0,0,de.width,de.height,he,_e,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,pe,de.width,de.height,0,he,_e,de.data)}}else{b?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he,_e,ee[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,he,_e,ee[ne]);for(let me=0;me<ue.length;me++){const ve=ue[me];b?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,0,0,he,_e,ve.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,pe,he,_e,ve.image[ne])}}}u(y)&&g(t.TEXTURE_CUBE_MAP),D.__version=le.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Te(C,y,q,J,le,D){const xe=s.convert(q.format,q.colorSpace),re=s.convert(q.type),ce=S(q.internalFormat,xe,re,q.normalized,q.colorSpace),Me=i.get(y),H=i.get(q);if(H.__renderTarget=y,!Me.__hasExternalTextures){const ee=Math.max(1,y.width>>D),j=Math.max(1,y.height>>D);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,D,ce,ee,j,y.depth,0,xe,re,null):n.texImage2D(le,D,ce,ee,j,0,xe,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,le,H.__webglTexture,0,st(y)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,le,H.__webglTexture,D),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(C,y,q){if(t.bindRenderbuffer(t.RENDERBUFFER,C),y.depthBuffer){const J=y.depthTexture,le=J&&J.isDepthTexture?J.type:null,D=E(y.stencilBuffer,le),xe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,st(y),D,y.width,y.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,st(y),D,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,D,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,C)}else{const J=y.textures;for(let le=0;le<J.length;le++){const D=J[le],xe=s.convert(D.format,D.colorSpace),re=s.convert(D.type),ce=S(D.internalFormat,xe,re,D.normalized,D.colorSpace);wt(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,st(y),ce,y.width,y.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,st(y),ce,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ce,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Je(C,y,q){const J=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=i.get(y.depthTexture);if(le.__renderTarget=y,(!le.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(le.__webglInit===void 0&&(le.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),le.__webglTexture===void 0){le.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),We(t.TEXTURE_CUBE_MAP,y.depthTexture);const Me=s.convert(y.depthTexture.format),H=s.convert(y.depthTexture.type);let ee;y.depthTexture.format===ar?ee=t.DEPTH_COMPONENT24:y.depthTexture.format===ss&&(ee=t.DEPTH24_STENCIL8);for(let j=0;j<6;j++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,y.width,y.height,0,Me,H,null)}}else $(y.depthTexture,0);const D=le.__webglTexture,xe=st(y),re=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+q:t.TEXTURE_2D,ce=y.depthTexture.format===ss?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===ar)wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,re,D,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,ce,re,D,0);else if(y.depthTexture.format===ss)wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,re,D,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,ce,re,D,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function De(C){const y=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const le=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",le)};J.addEventListener("dispose",le),y.__depthDisposeCallback=le}y.__boundDepthTexture=J}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let J=0;J<6;J++)Je(y.__webglFramebuffer[J],C,J);else{const J=C.texture.mipmaps;J&&J.length>0?Je(y.__webglFramebuffer[0],C,0):Je(y.__webglFramebuffer,C,0)}else if(q){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=t.createRenderbuffer(),ze(y.__webglDepthbuffer[J],C,!1);else{const le=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=y.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,D),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,D)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),ze(y.__webglDepthbuffer,C,!1);else{const le=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,D),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,D)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(C,y,q){const J=i.get(C);y!==void 0&&Te(J.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&De(C)}function Ve(C){const y=C.texture,q=i.get(C),J=i.get(y);C.addEventListener("dispose",x);const le=C.textures,D=C.isWebGLCubeRenderTarget===!0,xe=le.length>1;if(xe||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=y.version,a.memory.textures++),D){q.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[re]=[];for(let ce=0;ce<y.mipmaps.length;ce++)q.__webglFramebuffer[re][ce]=t.createFramebuffer()}else q.__webglFramebuffer[re]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)q.__webglFramebuffer[re]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(xe)for(let re=0,ce=le.length;re<ce;re++){const Me=i.get(le[re]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&wt(C)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let re=0;re<le.length;re++){const ce=le[re];q.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[re]);const Me=s.convert(ce.format,ce.colorSpace),H=s.convert(ce.type),ee=S(ce.internalFormat,Me,H,ce.normalized,ce.colorSpace,C.isXRRenderTarget===!0),j=st(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,j,ee,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,q.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(q.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(D){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),We(t.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)Te(q.__webglFramebuffer[re][ce],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else Te(q.__webglFramebuffer[re],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);u(y)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let re=0,ce=le.length;re<ce;re++){const Me=le[re],H=i.get(Me);let ee=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,H.__webglTexture),We(ee,Me),Te(q.__webglFramebuffer,C,Me,t.COLOR_ATTACHMENT0+re,ee,0),u(Me)&&g(ee)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,J.__webglTexture),We(re,y),y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)Te(q.__webglFramebuffer[ce],C,y,t.COLOR_ATTACHMENT0,re,ce);else Te(q.__webglFramebuffer,C,y,t.COLOR_ATTACHMENT0,re,0);u(y)&&g(re),n.unbindTexture()}C.depthBuffer&&De(C)}function Ge(C){const y=C.textures;for(let q=0,J=y.length;q<J;q++){const le=y[q];if(u(le)){const D=M(C),xe=i.get(le).__webglTexture;n.bindTexture(D,xe),g(D),n.unbindTexture()}}}const et=[],gt=[];function bt(C){if(C.samples>0){if(wt(C)===!1){const y=C.textures,q=C.width,J=C.height;let le=t.COLOR_BUFFER_BIT;const D=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(C),re=y.length>1;if(re)for(let Me=0;Me<y.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ce=C.texture.mipmaps;ce&&ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);const H=i.get(y[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,H,0)}t.blitFramebuffer(0,0,q,J,0,0,q,J,le,t.NEAREST),l===!0&&(et.length=0,gt.length=0,et.push(t.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(et.push(D),gt.push(D),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,gt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let Me=0;Me<y.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);const H=i.get(y[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,H,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function st(C){return Math.min(r.maxSamples,C.samples)}function wt(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function k(C){const y=a.render.frame;d.get(C)!==y&&(d.set(C,y),C.update())}function vt(C,y){const q=C.colorSpace,J=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==eu&&q!==Rr&&(ft.getTransfer(q)===yt?(J!==xi||le!==$n)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",q)),y}function ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=se,this.resetTextureUnits=W,this.getTextureUnits=O,this.setTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=oe,this.rebindTextures=Qe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Fb(t,e){function n(i,r=Rr){let s;const a=ft.getTransfer(r);if(i===$n)return t.UNSIGNED_BYTE;if(i===Rp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ex)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===tx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===J_)return t.BYTE;if(i===Q_)return t.SHORT;if(i===Qo)return t.UNSIGNED_SHORT;if(i===Ap)return t.INT;if(i===Oi)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===Bn)return t.HALF_FLOAT;if(i===nx)return t.ALPHA;if(i===ix)return t.RGB;if(i===xi)return t.RGBA;if(i===ar)return t.DEPTH_COMPONENT;if(i===ss)return t.DEPTH_STENCIL;if(i===Pp)return t.RED;if(i===Lp)return t.RED_INTEGER;if(i===_s)return t.RG;if(i===Ip)return t.RG_INTEGER;if(i===Np)return t.RGBA_INTEGER;if(i===vc||i===_c||i===xc||i===yc)if(a===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===zd||i===Hd||i===Gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Wd||i===Xd||i===$d||i===Yd||i===Zc||i===qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Wd)return a===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xd)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===$d)return s.COMPRESSED_R11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zc)return s.COMPRESSED_RG11_EAC;if(i===qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jd)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rh)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ah)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ch||i===uh||i===fh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ch)return a===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dh||i===hh||i===Jc||i===ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===el?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new hx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yn({vertexShader:Ob,fragmentShader:kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kt(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zb extends Ms{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,v=null;const _=typeof XRWebGLBinding<"u",p=new Bb,u={},g=n.getContextAttributes();let M=null,S=null;const E=[],T=[],R=new Be;let x=null,A=null;const P=new Rn;P.viewport=new Bt;const U=new Rn;U.viewport=new Bt;const z=[P,U],W=new X1;let O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=E[ae];return fe===void 0&&(fe=new df,E[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=E[ae];return fe===void 0&&(fe=new df,E[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=E[ae];return fe===void 0&&(fe=new df,E[ae]=fe),fe.getHandSpace()};function se(ae){const fe=T.indexOf(ae.inputSource);if(fe===-1)return;const we=E[fe];we!==void 0&&(we.update(ae.inputSource,ae.frame,c||a),we.dispatchEvent({type:ae.type,data:ae.inputSource}))}function te(){r.removeEventListener("select",se),r.removeEventListener("selectstart",se),r.removeEventListener("selectend",se),r.removeEventListener("squeeze",se),r.removeEventListener("squeezestart",se),r.removeEventListener("squeezeend",se),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",$);for(let ae=0;ae<E.length;ae++){const fe=T[ae];fe!==null&&(T[ae]=null,E[ae].disconnect(fe))}O=null,K=null,p.reset();for(const ae in u)delete u[ae];if(e.setRenderTarget(M),m=null,f=null,h=null,r=null,S=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),A!==null){const ae=A.camera;ae.fov=A.fov,ae.zoom=A.zoom,ae.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",se),r.addEventListener("selectstart",se),r.addEventListener("selectend",se),r.addEventListener("squeeze",se),r.addEventListener("squeezestart",se),r.addEventListener("squeezeend",se),r.addEventListener("end",te),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,He=null,Te=null;g.depth&&(Te=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=g.stencil?ss:ar,He=g.stencil?el:Oi);const ze={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ln(f.textureWidth,f.textureHeight,{format:xi,type:$n,depthTexture:new nl(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ln(m.framebufferWidth,m.framebufferHeight,{format:xi,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(ae){for(let fe=0;fe<ae.removed.length;fe++){const we=ae.removed[fe],He=T.indexOf(we);He>=0&&(T[He]=null,E[He].disconnect(we))}for(let fe=0;fe<ae.added.length;fe++){const we=ae.added[fe];let He=T.indexOf(we);if(He===-1){for(let ze=0;ze<E.length;ze++)if(ze>=T.length){T.push(we),He=ze;break}else if(T[ze]===null){T[ze]=we,He=ze;break}if(He===-1)break}const Te=E[He];Te&&Te.connect(we)}}const Y=new V,Q=new V;function oe(ae,fe,we){Y.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(we.matrixWorld);const He=Y.distanceTo(Q),Te=fe.projectionMatrix.elements,ze=we.projectionMatrix.elements,Je=Te[14]/(Te[10]-1),De=Te[14]/(Te[10]+1),Qe=(Te[9]+1)/Te[5],Ve=(Te[9]-1)/Te[5],Ge=(Te[8]-1)/Te[0],et=(ze[8]+1)/ze[0],gt=Je*Ge,bt=Je*et,st=He/(-Ge+et),wt=st*-Ge;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(wt),ae.translateZ(st),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Te[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const k=Je+st,vt=De+st,ct=gt-wt,C=bt+(He-wt),y=Qe*De/vt*k,q=Ve*De/vt*k;ae.projectionMatrix.makePerspective(ct,C,y,q,k,vt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function ye(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let fe=ae.near,we=ae.far;p.texture!==null&&(p.depthNear>0&&(fe=p.depthNear),p.depthFar>0&&(we=p.depthFar)),W.near=U.near=P.near=fe,W.far=U.far=P.far=we,(O!==W.near||K!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),O=W.near,K=W.far),W.layers.mask=ae.layers.mask|6,P.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;const He=ae.parent,Te=W.cameras;ye(W,He);for(let ze=0;ze<Te.length;ze++)ye(Te[ze],He);Te.length===2?oe(W,P,U):W.projectionMatrix.copy(P.projectionMatrix),A===null&&ae.isPerspectiveCamera&&(A={camera:ae,fov:ae.fov,zoom:ae.zoom}),Ce(ae,W,He)};function Ce(ae,fe,we){we===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(we.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ea*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(ae){l=ae,f!==null&&(f.fixedFoveation=ae),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ae)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(ae){return u[ae]};let je=null;function We(ae,fe){if(d=fe.getViewerPose(c||a),v=fe,d!==null){const we=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let He=!1;we.length!==W.cameras.length&&(W.cameras.length=0,He=!0);for(let De=0;De<we.length;De++){const Qe=we[De];let Ve=null;if(m!==null)Ve=m.getViewport(Qe);else{const et=h.getViewSubImage(f,Qe);Ve=et.viewport,De===0&&(e.setRenderTargetTextures(S,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(S))}let Ge=z[De];Ge===void 0&&(Ge=new Rn,Ge.layers.enable(De),Ge.viewport=new Bt,z[De]=Ge),Ge.matrix.fromArray(Qe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Qe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),De===0&&(W.matrix.copy(Ge.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),He===!0&&W.cameras.push(Ge)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const De=h.getDepthInformation(we[0]);De&&De.isValid&&De.texture&&p.init(De,r.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let De=0;De<we.length;De++){const Qe=we[De].camera;if(Qe){let Ve=u[Qe];Ve||(Ve=new hx,u[Qe]=Ve);const Ge=h.getCameraImage(Qe);Ve.sourceTexture=Ge}}}}for(let we=0;we<E.length;we++){const He=T[we],Te=E[we];He!==null&&Te!==void 0&&Te.update(He,fe,c||a)}je&&je(ae,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Ye=new vx;Ye.setAnimationLoop(We),this.setAnimationLoop=function(ae){je=ae},this.dispose=function(){}}}const Hb=new Lt,Ex=new tt;Ex.set(-1,0,0,0,1,0,0,0,1);function Gb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,px(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,M,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(p,u):u.isMeshLambertMaterial?(s(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),M=g.envMap,S=g.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ex),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=M*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.retroreflectivity>0&&(p.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const T=E.program;i.uniformBlockBinding(S,T)}function c(S,E){let T=r[S.id];T===void 0&&(p(S),T=d(S),r[S.id]=T,S.addEventListener("dispose",g));const R=E.program;i.updateUBOMapping(S,R);const x=e.render.frame;s[S.id]!==x&&(f(S),s[S.id]=x)}function d(S){const E=h();S.__bindingPointIndex=E;const T=t.createBuffer(),R=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,R,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=r[S.id],T=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let x=0,A=T.length;x<A;x++){const P=T[x];if(Array.isArray(P))for(let U=0,z=P.length;U<z;U++)m(P[U],x,U,R);else m(P,x,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,E,T,R){if(_(S,E,T,R)===!0){const x=S.__offset,A=S.value;if(Array.isArray(A)){let P=0;for(let U=0;U<A.length;U++){const z=A[U],W=u(z);v(z,S.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function v(S,E,T){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,T)}function _(S,E,T,R){const x=S.value,A=E+"_"+T;if(R[A]===void 0)return typeof x=="number"||typeof x=="boolean"?R[A]=x:ArrayBuffer.isView(x)?R[A]=x.slice():R[A]=x.clone(),!0;{const P=R[A];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function p(S){const E=S.uniforms;let T=0;const R=16;for(let A=0,P=E.length;A<P;A++){const U=Array.isArray(E[A])?E[A]:[E[A]];for(let z=0,W=U.length;z<W;z++){const O=U[z],K=Array.isArray(O.value)?O.value:[O.value];for(let se=0,te=K.length;se<te;se++){const $=K[se],Y=u($),Q=T%R,oe=Q%Y.boundary,ye=Q+oe;T+=oe,ye!==0&&R-ye<Y.storage&&(T+=R-ye),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=Y.storage}}}const x=T%R;return x>0&&(T+=R-x),S.__size=T,S.__cache={},this}function u(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",S),E}function g(S){const E=S.target;E.removeEventListener("dispose",g);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const Wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function Xb(){return Ai===null&&(Ai=new fx(Wb,16,16,_s,Bn),Ai.name="DFG_LUT",Ai.minFilter=xn,Ai.magFilter=xn,Ai.wrapS=Zi,Ai.wrapT=Zi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class $b{constructor(e={}){const{canvas:n=GM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=$n}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=m,p=new Set([Np,Ip,Lp]),u=new Set([$n,Oi,Qo,el,Rp,Cp]),g=new Uint32Array(4),M=new Int32Array(4),S=new V;let E=null,T=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let U=!1,z=null,W=null,O=null,K=null;this._outputColorSpace=Xn;let se=0,te=0,$=null,Y=-1,Q=null;const oe=new Bt,ye=new Bt;let Ce=null;const je=new $e(0);let We=0,Ye=n.width,ae=n.height,fe=1,we=null,He=null;const Te=new Bt(0,0,Ye,ae),ze=new Bt(0,0,Ye,ae);let Je=!1;const De=new Bp;let Qe=!1,Ve=!1;const Ge=new Lt,et=new V,gt=new Bt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function wt(){return $===null?fe:1}let k=i;function vt(w,N){return n.getContext(w,N)}let ct,C,y,q,J,le,D,xe,re,ce,Me,H,ee,j,he,_e,pe,b,B,I,ie,ue,ne;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xp}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ze,!1),k===null){const N="webgl2";if(k=vt(N,w),k===null)throw vt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}me()}catch(w){throw n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ze,!1),pt("WebGLRenderer: "+w.message),w}function me(){ct=new XT(k),ct.init(),ie=new Fb(k,ct),C=new UT(k,ct,e,ie),y=new Db(k,ct),C.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),W=k.createFramebuffer(),O=k.createFramebuffer(),K=k.createFramebuffer(),q=new qT(k),J=new yb,le=new Ub(k,ct,y,J,C,ie,q),D=new WT(P),xe=new K1(k),ue=new NT(k,xe),re=new $T(k,xe,q,ue),ce=new KT(k,re,xe,ue,q),b=new jT(k,C,le),he=new FT(J),Me=new xb(P,D,ct,C,ue,he),H=new Gb(P,J),ee=new Mb,j=new Rb(ct),pe=new IT(P,D,y,ce,v,l),_e=new Nb(P,ce,C),ne=new Vb(k,q,C,y),B=new DT(k,ct,q),I=new YT(k,ct,q),q.programs=Me.programs,P.capabilities=C,P.extensions=ct,P.properties=J,P.renderLists=ee,P.shadowMap=_e,P.state=y,P.info=q}_!==$n&&(A=new JT(_,n.width,n.height,o,r,s));const ve=new zb(P,k);this.xr=ve,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(w){w!==void 0&&(fe=w,this.setSize(Ye,ae,!1))},this.getSize=function(w){return w.set(Ye,ae)},this.setSize=function(w,N,Z=!0){if(ve.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=w,ae=N,n.width=Math.floor(w*fe),n.height=Math.floor(N*fe),Z===!0&&(n.style.width=w+"px",n.style.height=N+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(Ye*fe,ae*fe).floor()},this.setDrawingBufferSize=function(w,N,Z){Ye=w,ae=N,fe=Z,n.width=Math.floor(w*Z),n.height=Math.floor(N*Z),this.setViewport(0,0,w,N)},this.setEffects=function(w){if(_===$n){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let N=0;N<w.length;N++)if(w[N].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(oe)},this.getViewport=function(w){return w.copy(Te)},this.setViewport=function(w,N,Z,G){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,N,Z,G),y.viewport(oe.copy(Te).multiplyScalar(fe).round())},this.getScissor=function(w){return w.copy(ze)},this.setScissor=function(w,N,Z,G){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,N,Z,G),y.scissor(ye.copy(ze).multiplyScalar(fe).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(w){y.setScissorTest(Je=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,Z=!0){let G=0;if(w){let X=!1;if($!==null){const Ee=$.texture.format;X=p.has(Ee)}if(X){const Ee=$.texture.type,Re=u.has(Ee),be=pe.getClearColor(),Fe=pe.getClearAlpha(),ke=be.r,nt=be.g,ot=be.b;Re?(g[0]=ke,g[1]=nt,g[2]=ot,g[3]=Fe,k.clearBufferuiv(k.COLOR,0,g)):(M[0]=ke,M[1]=nt,M[2]=ot,M[3]=Fe,k.clearBufferiv(k.COLOR,0,M))}else G|=k.COLOR_BUFFER_BIT}N&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),z=w},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ze,!1),pe.dispose(),ee.dispose(),j.dispose(),J.dispose(),D.dispose(),ce.dispose(),ue.dispose(),ne.dispose(),Me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Fa),ve.removeEventListener("sessionend",Oa),oi.stop()};function de(w){w.preventDefault(),A0("WebGLRenderer: Context Lost."),U=!0}function Pe(){A0("WebGLRenderer: Context Restored."),U=!1;const w=q.autoReset,N=_e.enabled,Z=_e.autoUpdate,G=_e.needsUpdate,X=_e.type;me(),q.autoReset=w,_e.enabled=N,_e.autoUpdate=Z,_e.needsUpdate=G,_e.type=X}function Ze(w){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){const N=w.target;N.removeEventListener("dispose",ut),wn(N)}function wn(w){dn(w),J.remove(w)}function dn(w){const N=J.get(w).programs;N!==void 0&&(N.forEach(function(Z){Me.releaseProgram(Z)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,Z,G,X,Ee){N===null&&(N=bt);const Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=Ue(w,N,Z,G,X);y.setMaterial(G,Re);let Fe=Z.index,ke=1;if(G.wireframe===!0){if(Fe=re.getWireframeAttribute(Z),Fe===void 0)return;ke=2}const nt=Z.drawRange,ot=Z.attributes.position;let Oe=nt.start*ke,xt=(nt.start+nt.count)*ke;Ee!==null&&(Oe=Math.max(Oe,Ee.start*ke),xt=Math.min(xt,(Ee.start+Ee.count)*ke)),Fe!==null?(Oe=Math.max(Oe,0),xt=Math.min(xt,Fe.count)):ot!=null&&(Oe=Math.max(Oe,0),xt=Math.min(xt,ot.count));const $t=xt-Oe;if($t<0||$t===1/0)return;ue.setup(X,G,be,Z,Fe);let It,At=B;if(Fe!==null&&(It=xe.get(Fe),At=I,At.setIndex(It)),X.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*wt()),At.setMode(k.LINES)):At.setMode(k.TRIANGLES);else if(X.isLine){let hn=G.linewidth;hn===void 0&&(hn=1),y.setLineWidth(hn*wt()),X.isLineSegments?At.setMode(k.LINES):X.isLineLoop?At.setMode(k.LINE_LOOP):At.setMode(k.LINE_STRIP)}else X.isPoints?At.setMode(k.POINTS):X.isSprite&&At.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))At.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const hn=X._multiDrawStarts,Le=X._multiDrawCounts,En=X._multiDrawCount,dt=Fe?xe.get(Fe).bytesPerElement:1,Jn=J.get(G).currentProgram.getUniforms();for(let Ei=0;Ei<En;Ei++)Jn.setValue(k,"_gl_DrawID",Ei),At.render(hn[Ei]/dt,Le[Ei])}else if(X.isInstancedMesh)At.renderInstances(Oe,$t,X.count);else if(Z.isInstancedBufferGeometry){const hn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Le=Math.min(Z.instanceCount,hn);At.renderInstances(Oe,$t,Le)}else At.render(Oe,$t)};function zn(w,N,Z,G){z!==null&&w.isNodeMaterial&&z.setObject(G,w),Qe===!0&&he.setState(w,Z,!1),w.transparent===!0&&w.side===qt&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,$r(w,N,G),w.side=gs,w.needsUpdate=!0,$r(w,N,G),w.side=qt):$r(w,N,G)}this.compile=function(w,N,Z=null){Z===null&&(Z=w),z!==null&&z.renderStart(w,N,Z),T=j.get(Z),T.init(N),x.push(T),Z.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),w!==Z&&w.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),Ve=this.localClippingEnabled,Qe=he.init(this.clippingPlanes,Ve),Qe===!0&&he.setGlobalState(this.clippingPlanes,N),z!==null&&_e.render(T.state.shadowsArray,Z,N);const G=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const be=Ee[Re];zn(be,Z,N,X),G.add(be)}else zn(Ee,Z,N,X),G.add(Ee)}),T=x.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(w,N,Z=null){const G=this.compile(w,N,Z);return new Promise(X=>{function Ee(){if(G.forEach(function(Re){const Fe=J.get(Re).currentProgram;(Fe===void 0||Fe.isReady())&&G.delete(Re)}),G.size===0){X(w);return}setTimeout(Ee,10)}ct.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ki=null;function Es(w){ki&&ki(w)}function Fa(){oi.stop()}function Oa(){oi.start()}const oi=new vx;oi.setAnimationLoop(Es),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(w){ki=w,ve.setAnimationLoop(w),w===null?oi.stop():oi.start()},ve.addEventListener("sessionstart",Fa),ve.addEventListener("sessionend",Oa),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(w,N);const Z=ve.enabled===!0&&ve.isPresenting===!0,G=A!==null&&($===null||Z)&&A.begin(P,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(N),N=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,N,$),T=j.get(w,x.length),T.init(N),T.state.textureUnits=le.getTextureUnits(),x.push(T),Ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),De.setFromProjectionMatrix(Ge,Ii,N.reversedDepth),Ve=this.localClippingEnabled,Qe=he.init(this.clippingPlanes,Ve),E=ee.get(w,R.length),E.init(),R.push(E),ve.enabled===!0&&ve.isPresenting===!0){const Re=P.xr.getDepthSensingMesh();Re!==null&&Ts(Re,N,-1/0,P.sortObjects)}Ts(w,N,0,P.sortObjects),E.finish(),z!==null&&z.updateLights(T.state.lightsArray),P.sortObjects===!0&&E.sort(we,He),st=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,st&&pe.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&he.beginShadows();const X=T.state.shadowsArray;if(_e.render(X,w,N),Qe===!0&&he.endShadows(),(G&&A.hasRenderPass())===!1){const Re=E.opaque,be=E.transmissive;if(T.setupLights(),N.isArrayCamera){const Fe=N.cameras;if(be.length>0)for(let ke=0,nt=Fe.length;ke<nt;ke++){const ot=Fe[ke];ur(Re,be,w,ot)}st&&pe.render(w);for(let ke=0,nt=Fe.length;ke<nt;ke++){const ot=Fe[ke];ka(E,w,ot,ot.viewport)}}else be.length>0&&ur(Re,be,w,N),st&&pe.render(w),ka(E,w,N)}$!==null&&te===0&&(le.updateMultisampleRenderTarget($),le.updateRenderTargetMipmap($)),G&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,N),ue.resetDefaultState(),Y=-1,Q=null,x.pop(),x.length>0?(T=x[x.length-1],le.setTextureUnits(T.state.textureUnits),Qe===!0&&he.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,z!==null&&z.renderEnd()};function Ts(w,N,Z,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(De)){G&&gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ge);const Re=ce.update(w),be=w.material;be.visible&&E.push(w,Re,be,Z,gt.z,null,N)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(De))){const Re=ce.update(w),be=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),gt.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),gt.copy(Re.boundingSphere.center)),gt.applyMatrix4(w.matrixWorld).applyMatrix4(Ge)),Array.isArray(be)){const Fe=Re.groups;for(let ke=0,nt=Fe.length;ke<nt;ke++){const ot=Fe[ke],Oe=be[ot.materialIndex];Oe&&Oe.visible&&E.push(w,Re,Oe,Z,gt.z,ot,N)}}else be.visible&&E.push(w,Re,be,Z,gt.z,null,N)}}const Ee=w.children;for(let Re=0,be=Ee.length;Re<be;Re++)Ts(Ee[Re],N,Z,G)}function ka(w,N,Z,G){const{opaque:X,transmissive:Ee,transparent:Re}=w;T.setupLightsView(Z),Qe===!0&&he.setGlobalState(P.clippingPlanes,Z),G&&y.viewport(oe.copy(G)),X.length>0&&Bi(X,N,Z),Ee.length>0&&Bi(Ee,N,Z),Re.length>0&&Bi(Re,N,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ur(w,N,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Oe=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Ln(1,1,{generateMipmaps:!0,type:Oe?Bn:$n,minFilter:rs,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const Ee=T.state.transmissionRenderTarget[G.id],Re=G.viewport||oe;Ee.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const be=P.getRenderTarget(),Fe=P.getActiveCubeFace(),ke=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(je),We=P.getClearAlpha(),We<1&&P.setClearColor(16777215,.5),P.clear(),st&&pe.render(Z);const nt=P.toneMapping;P.toneMapping=Fi;const ot=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Qe===!0&&he.setGlobalState(P.clippingPlanes,G),Bi(w,Z,G),le.updateMultisampleRenderTarget(Ee),le.updateRenderTargetMipmap(Ee),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let xt=0,$t=N.length;xt<$t;xt++){const It=N[xt],{object:At,geometry:hn,material:Le,group:En}=It;if(Le.side===qt&&At.layers.test(G.layers)){const dt=Le.side;Le.side=Pn,Le.needsUpdate=!0,Ba(At,Z,G,hn,Le,En),Le.side=dt,Le.needsUpdate=!0,Oe=!0}}Oe===!0&&(le.updateMultisampleRenderTarget(Ee),le.updateRenderTargetMipmap(Ee))}P.setRenderTarget(be,Fe,ke),P.setClearColor(je,We),ot!==void 0&&(G.viewport=ot),P.toneMapping=nt}function Bi(w,N,Z){const G=N.isScene===!0?N.overrideMaterial:null;for(let X=0,Ee=w.length;X<Ee;X++){const Re=w[X],{object:be,geometry:Fe,group:ke}=Re;let nt=Re.material;nt.allowOverride===!0&&G!==null&&(nt=G),be.layers.test(Z.layers)&&Ba(be,N,Z,Fe,nt,ke)}}function Ba(w,N,Z,G,X,Ee){z!==null&&X.isNodeMaterial&&z.setObject(w,X),w.onBeforeRender(P,N,Z,G,X,Ee),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(P,N,Z,G,w,Ee),X.transparent===!0&&X.side===qt&&X.forceSinglePass===!1?(X.side=Pn,X.needsUpdate=!0,P.renderBufferDirect(Z,N,G,X,w,Ee),X.side=gs,X.needsUpdate=!0,P.renderBufferDirect(Z,N,G,X,w,Ee),X.side=qt):P.renderBufferDirect(Z,N,G,X,w,Ee),w.onAfterRender(P,N,Z,G,X,Ee)}function $r(w,N,Z){N.isScene!==!0&&(N=bt);const G=J.get(w),X=T.state.lights,Ee=T.state.shadowsArray,Re=X.state.version,be=Me.getParameters(w,X.state,Ee,N,Z,T.state.lightProbeGridArray),Fe=Me.getProgramCacheKey(be);let ke=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const nt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=D.get(w.envMap||G.environment,nt),G.envMapRotation=G.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",ut),ke=new Map,G.programs=ke);let ot=ke.get(Fe);if(ot!==void 0){if(G.currentProgram===ot&&G.lightsStateVersion===Re)return ge(w,be),ot}else be.uniforms=Me.getUniforms(w),z!==null&&w.isNodeMaterial&&z.build(w,Z,be),w.onBeforeCompile(be,P),ot=Me.acquireProgram(be,Fe),ke.set(Fe,ot),G.uniforms=be.uniforms;const Oe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=he.uniform),ge(w,be),G.needsLights=Rt(w),G.lightsStateVersion=Re,G.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.sunLights.value=X.state.sun,Oe.sunLightShadows.value=X.state.sunShadow,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.sunShadowMatrix.value=X.state.sunShadowMatrix,Oe.sunShadowCascade.value=X.state.sunShadowCascade,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=ot,G.uniformsList=null,ot}function L(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Sc.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ge(w,N){const Z=J.get(w);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function Ie(w,N){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let Z=0,G=w.length;Z<G;Z++){const X=w[Z];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function Ue(w,N,Z,G,X){N.isScene!==!0&&(N=bt),le.resetTextureUnits();const Ee=N.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,be=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ft.workingColorSpace,Fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,ke=D.get(G.envMap||Re,Fe),nt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ot=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Oe=!!Z.morphAttributes.position,xt=!!Z.morphAttributes.normal,$t=!!Z.morphAttributes.color;let It=Fi;G.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(It=P.toneMapping);const At=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,hn=At!==void 0?At.length:0,Le=J.get(G),En=T.state.lights;if(Qe===!0&&(Ve===!0||w!==Q)){const Ct=w===Q&&G.id===Y;he.setState(G,w,Ct)}let dt=!1;G.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==En.state.version||Le.outputColorSpace!==be||X.isBatchedMesh&&Le.batching===!1||!X.isBatchedMesh&&Le.batching===!0||X.isBatchedMesh&&Le.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Le.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Le.instancing===!1||!X.isInstancedMesh&&Le.instancing===!0||X.isSkinnedMesh&&Le.skinning===!1||!X.isSkinnedMesh&&Le.skinning===!0||X.isInstancedMesh&&Le.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Le.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Le.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Le.instancingMorph===!1&&X.morphTexture!==null||Le.envMap!==ke||G.fog===!0&&Le.fog!==Ee||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==he.numPlanes||Le.numIntersection!==he.numIntersection)||Le.vertexAlphas!==nt||Le.vertexTangents!==ot||Le.morphTargets!==Oe||Le.morphNormals!==xt||Le.morphColors!==$t||Le.toneMapping!==It||Le.morphTargetsCount!==hn||!!Le.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Le.__version=G.version);let Jn=Le.currentProgram;dt===!0&&(Jn=$r(G,N,X),z&&G.isNodeMaterial&&z.onUpdateProgram(G,Jn,Le));let Ei=!1,fr=!1,bs=!1;const Et=Jn.getUniforms(),Wt=Le.uniforms;if(y.useProgram(Jn.program)&&(Ei=!0,fr=!0,bs=!0),G.id!==Y&&(Y=G.id,fr=!0),Le.needsLights){const Ct=Ie(T.state.lightProbeGridArray,X);Le.lightProbeGrid!==Ct&&(Le.lightProbeGrid=Ct,fr=!0)}if(Ei||Q!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Et.setValue(k,"projectionMatrix",w.projectionMatrix),Et.setValue(k,"viewMatrix",w.matrixWorldInverse);const hr=Et.map.cameraPosition;hr!==void 0&&hr.setValue(k,et.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Et.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,fr=!0,bs=!0)}if(Le.needsLights&&(En.state.sunShadowMap.length>0&&Et.setValue(k,"sunShadowMap",En.state.sunShadowMap,le),En.state.directionalShadowMap.length>0&&Et.setValue(k,"directionalShadowMap",En.state.directionalShadowMap,le),En.state.spotShadowMap.length>0&&Et.setValue(k,"spotShadowMap",En.state.spotShadowMap,le),En.state.pointShadowMap.length>0&&Et.setValue(k,"pointShadowMap",En.state.pointShadowMap,le)),X.isSkinnedMesh){Et.setOptional(k,X,"bindMatrix"),Et.setOptional(k,X,"bindMatrixInverse");const Ct=X.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Et.setValue(k,"boneTexture",Ct.boneTexture,le))}X.isBatchedMesh&&(Et.setOptional(k,X,"batchingTexture"),Et.setValue(k,"batchingTexture",X._matricesTexture,le),Et.setOptional(k,X,"batchingIdTexture"),Et.setValue(k,"batchingIdTexture",X._indirectTexture,le),Et.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(k,"batchingColorTexture",X._colorsTexture,le));const dr=Z.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&b.update(X,Z,Jn),(fr||Le.receiveShadow!==X.receiveShadow)&&(Le.receiveShadow=X.receiveShadow,Et.setValue(k,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Wt.envMapIntensity.value=N.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Xb()),fr){if(Et.setValue(k,"toneMappingExposure",P.toneMappingExposure),Le.needsLights&&at(Wt,bs),Ee&&G.fog===!0&&H.refreshFogUniforms(Wt,Ee),H.refreshMaterialUniforms(Wt,G,fe,ae,T.state.transmissionRenderTarget[w.id]),Le.needsLights&&Le.lightProbeGrid){const Ct=Le.lightProbeGrid;Wt.probesSH.value=Ct.texture,Wt.probesMin.value.copy(Ct.boundingBox.min),Wt.probesMax.value.copy(Ct.boundingBox.max),Wt.probesResolution.value.copy(Ct.resolution)}Sc.upload(k,L(Le),Wt,le)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Sc.upload(k,L(Le),Wt,le),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(k,"center",X.center),Et.setValue(k,"modelViewMatrix",X.modelViewMatrix),Et.setValue(k,"normalMatrix",X.normalMatrix),Et.setValue(k,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){const Ct=G.uniformsGroups;for(let hr=0,As=Ct.length;hr<As;hr++){const dm=Ct[hr];ne.update(dm,Jn),ne.bind(dm,Jn)}}return Jn}function at(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.sunLights.needsUpdate=N,w.sunLightShadows.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Rt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,N,Z){const G=J.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),J.get(w.texture).__webglTexture=N,J.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const Z=J.get(w);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,Z=0){$=w,se=N,te=Z;let G=null,X=!1,Ee=!1;if(w){const be=J.get(w);if(be.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(k.FRAMEBUFFER,be.__webglFramebuffer),oe.copy(w.viewport),ye.copy(w.scissor),Ce=w.scissorTest,y.viewport(oe),y.scissor(ye),y.setScissorTest(Ce),Y=-1;return}else if(be.__webglFramebuffer===void 0)le.setupRenderTarget(w);else if(be.__hasExternalTextures)le.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const nt=w.depthTexture;if(be.__boundDepthTexture!==nt){if(nt!==null&&J.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);const ke=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?G=ke[N][Z]:G=ke[N],X=!0):w.samples>0&&le.useMultisampledRTT(w)===!1?G=J.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[Z]:G=ke,oe.copy(w.viewport),ye.copy(w.scissor),Ce=w.scissorTest}else oe.copy(Te).multiplyScalar(fe).floor(),ye.copy(ze).multiplyScalar(fe).floor(),Ce=Je;if(Z!==0&&(G=W),y.bindFramebuffer(k.FRAMEBUFFER,G)&&y.drawBuffers(w,G),y.viewport(oe),y.scissor(ye),y.setScissorTest(Ce),X){const be=J.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,Z)}else if(Ee){const be=N;for(let Fe=0;Fe<w.textures.length;Fe++){const ke=J.get(w.textures[Fe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,Z,be)}}else if(w!==null&&Z!==0){const be=J.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,be.__webglTexture,Z)}Y=-1};function _t(w){const N=J.get(w);return(N.__readFormat!==w.format||N.__readType!==w.type)&&(N.__readFormat=w.format,N.__readType=w.type,N.__formatReadable=C.textureFormatReadable(w.format),N.__typeReadable=C.textureTypeReadable(w.type)),N}this.readRenderTargetPixels=function(w,N,Z,G,X,Ee,Re,be=0){if(!(w&&w.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){y.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const ke=w.textures[be],nt=ke.format,ot=ke.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);const Oe=_t(ke);if(Oe.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&Z>=0&&Z<=w.height-X&&k.readPixels(N,Z,G,X,ie.convert(nt),ie.convert(ot),Ee)}finally{const ke=$!==null?J.get($).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,N,Z,G,X,Ee,Re,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe)if(N>=0&&N<=w.width-G&&Z>=0&&Z<=w.height-X){y.bindFramebuffer(k.FRAMEBUFFER,Fe);const ke=w.textures[be],nt=ke.format,ot=ke.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);const Oe=_t(ke);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,xt),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),k.readPixels(N,Z,G,X,ie.convert(nt),ie.convert(ot),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const $t=$!==null?J.get($).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,$t);const It=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await VM(k,It,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,xt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(xt),k.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,Z=0){const G=Math.pow(2,-Z),X=Math.floor(w.image.width*G),Ee=Math.floor(w.image.height*G),Re=N!==null?N.x:0,be=N!==null?N.y:0;le.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Re,be,X,Ee),y.unbindTexture()},this.copyTextureToTexture=function(w,N,Z=null,G=null,X=0,Ee=0){let Re,be,Fe,ke,nt,ot,Oe,xt,$t;const It=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(Z!==null)Re=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Fe=Z.isBox3?Z.max.z-Z.min.z:1,ke=Z.min.x,nt=Z.min.y,ot=Z.isBox3?Z.min.z:0;else{const Wt=Math.pow(2,-X);Re=Math.floor(It.width*Wt),be=Math.floor(It.height*Wt),w.isDataArrayTexture?Fe=It.depth:w.isData3DTexture?Fe=Math.floor(It.depth*Wt):Fe=1,ke=0,nt=0,ot=0}G!==null?(Oe=G.x,xt=G.y,$t=G.z):(Oe=0,xt=0,$t=0);const At=ie.convert(N.format),hn=ie.convert(N.type);let Le;N.isData3DTexture?(le.setTexture3D(N,0),Le=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(le.setTexture2DArray(N,0),Le=k.TEXTURE_2D_ARRAY):(le.setTexture2D(N,0),Le=k.TEXTURE_2D),y.activeTexture(k.TEXTURE0),y.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);const En=y.getParameter(k.UNPACK_ROW_LENGTH),dt=y.getParameter(k.UNPACK_IMAGE_HEIGHT),Jn=y.getParameter(k.UNPACK_SKIP_PIXELS),Ei=y.getParameter(k.UNPACK_SKIP_ROWS),fr=y.getParameter(k.UNPACK_SKIP_IMAGES);y.pixelStorei(k.UNPACK_ROW_LENGTH,It.width),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,It.height),y.pixelStorei(k.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(k.UNPACK_SKIP_ROWS,nt),y.pixelStorei(k.UNPACK_SKIP_IMAGES,ot);const bs=w.isDataArrayTexture||w.isData3DTexture,Et=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Wt=J.get(w),dr=J.get(N),Ct=J.get(Wt.__renderTarget),hr=J.get(dr.__renderTarget);y.bindFramebuffer(k.READ_FRAMEBUFFER,Ct.__webglFramebuffer),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let As=0;As<Fe;As++)bs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,J.get(w).__webglTexture,X,ot+As),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,J.get(N).__webglTexture,Ee,$t+As)),k.blitFramebuffer(ke,nt,Re,be,Oe,xt,Re,be,k.DEPTH_BUFFER_BIT,k.NEAREST);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||J.has(w)){const Wt=J.get(w),dr=J.get(N);y.bindFramebuffer(k.READ_FRAMEBUFFER,O),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,K);for(let Ct=0;Ct<Fe;Ct++)bs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.__webglTexture,X,ot+Ct):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wt.__webglTexture,X),Et?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,dr.__webglTexture,Ee,$t+Ct):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dr.__webglTexture,Ee),X!==0?k.blitFramebuffer(ke,nt,Re,be,Oe,xt,Re,be,k.COLOR_BUFFER_BIT,k.NEAREST):Et?k.copyTexSubImage3D(Le,Ee,Oe,xt,$t+Ct,ke,nt,Re,be):k.copyTexSubImage2D(Le,Ee,Oe,xt,ke,nt,Re,be);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Et?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Le,Ee,Oe,xt,$t,Re,be,Fe,At,hn,It.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Le,Ee,Oe,xt,$t,Re,be,Fe,At,It.data):k.texSubImage3D(Le,Ee,Oe,xt,$t,Re,be,Fe,At,hn,It):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ee,Oe,xt,Re,be,At,hn,It.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ee,Oe,xt,It.width,It.height,At,It.data):k.texSubImage2D(k.TEXTURE_2D,Ee,Oe,xt,Re,be,At,hn,It);y.pixelStorei(k.UNPACK_ROW_LENGTH,En),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt),y.pixelStorei(k.UNPACK_SKIP_PIXELS,Jn),y.pixelStorei(k.UNPACK_SKIP_ROWS,Ei),y.pixelStorei(k.UNPACK_SKIP_IMAGES,fr),Ee===0&&N.generateMipmaps&&k.generateMipmap(Le),y.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&le.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?le.setTextureCube(w,0):w.isData3DTexture?le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?le.setTexture2DArray(w,0):le.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){se=0,te=0,$=null,y.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),n.unpackColorSpace=ft._getUnpackColorSpace()}}const Mc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ua{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yb=new Tu(-1,1,1,-1,0,1);class qb extends fn{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}}const jb=new qb;class Xp{constructor(e){this._mesh=new kt(jb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Tx extends Ua{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof yn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=il.clone(e.uniforms),this.material=new yn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xp(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mg extends Ua{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Kb extends Ua{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Zb{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Be);this._width=i.width,this._height=i.height,n=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tx(Mc),this.copyPass.material.blending=Ui,this.timer=new $1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mg!==void 0&&(a instanceof Mg?i=!0:a instanceof Kb&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jb extends Ua{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Qb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ba extends Ua{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Be(e.x,e.y):new Be(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(s,a,{type:Bn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Ln(s,a,{type:Bn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Ln(s,a,{type:Bn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=Qb;this.highPassUniforms=il.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Be(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=il.clone(Mc.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:Mc.vertexShader,fragmentShader:Mc.fragmentShader,premultipliedAlpha:!0,blending:Pd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new pi,this._fsQuad=new Xp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Be(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ba.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ba.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let a=0;a<e;a++)n.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const r=[],s=[];for(let a=1;a<e;a+=2){const o=n[a],l=a+1<e?n[a+1]:0,c=o+l;r.push((a*o+(a+1)*l)/c),s.push(c)}return new yn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Be(.5,.5)},direction:{value:new Be(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new yn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ba.BlurDirectionX=new Be(1,0);ba.BlurDirectionY=new Be(0,1);const Jl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class eA extends Ua{constructor(){super(),this.isOutputPass=!0,this.uniforms=il.clone(Jl.uniforms),this.material=new mx({name:Jl.name,uniforms:this.uniforms,vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader}),this._fsQuad=new Xp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Tp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ep&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class tA extends ox{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new lr;e.deleteAttribute("uv");const n=new Ji({side:Pn}),i=new Ji,r=new vo(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new kt(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new C1(e,i,6),o=new Kt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new kt(e,Vs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new kt(e,Vs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new kt(e,Vs(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const h=new kt(e,Vs(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new kt(e,Vs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const m=new kt(e,Vs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Vs(t){return new F1({color:0,emissive:16777215,emissiveIntensity:t})}const no=new V;function ei(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;no.copy(e),no[i]=0,no.normalize();const c=.5*a/(a+o),d=1-no.angleTo(t)/l;return Math.sign(no[n])===1?d*c:o/(a+o)+c+c*(1-d)}class $p extends lr{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new V,c=new V,d=new V(e,n,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,v=h.length/6,_=new V,p=.5/a;for(let u=0,g=0;u<h.length;u+=3,g+=2)switch(l.fromArray(h,u),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),h[u+0]=d.x*Math.sign(l.x)+c.x*s,h[u+1]=d.y*Math.sign(l.y)+c.y*s,h[u+2]=d.z*Math.sign(l.z)+c.z*s,f[u+0]=c.x,f[u+1]=c.y,f[u+2]=c.z,Math.floor(u/v)){case 0:_.set(1,0,0),m[g+0]=ei(_,c,"z","y",s,i),m[g+1]=1-ei(_,c,"y","z",s,n);break;case 1:_.set(-1,0,0),m[g+0]=1-ei(_,c,"z","y",s,i),m[g+1]=1-ei(_,c,"y","z",s,n);break;case 2:_.set(0,1,0),m[g+0]=1-ei(_,c,"x","z",s,e),m[g+1]=ei(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),m[g+0]=1-ei(_,c,"x","z",s,e),m[g+1]=1-ei(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),m[g+0]=1-ei(_,c,"x","y",s,e),m[g+1]=1-ei(_,c,"y","x",s,n);break;case 5:_.set(0,0,-1),m[g+0]=ei(_,c,"x","y",s,e),m[g+1]=1-ei(_,c,"y","x",s,n);break}}static fromJSON(e){return new $p(e.width,e.height,e.depth,e.segments,e.radius)}}const Vt=(t,e)=>{const n=document.createElement("canvas");return n.width=t,n.height=e,n};let Uf=11;const Xe=()=>(Uf=Uf*16807%2147483647,Uf/2147483647);function Tt(t,{srgb:e=!0,rep:n=null,aniso:i=8}={}){const r=new L1(t);return e&&(r.colorSpace=Xn),r.anisotropy=i,n&&(r.wrapS=r.wrapT=Kc,r.repeat.set(n[0],n[1])),r}function iu(t,e,n,i,r,{sag:s=.35,color:a="#140306",width:o=3,hi:l="rgba(255,150,150,.16)",yFrom:c=0,yTo:d=1,sagUp:h=!1,wrapX:f=!0}={}){const m=e/i,v=c*n,_=d*n,p=(_-v)/r,u=(g,M,S)=>{t.strokeStyle=g,t.lineWidth=M,t.lineCap="round";for(let E=0;E<=i;E++){const T=E*m+S;t.beginPath(),t.moveTo(T,v),t.lineTo(T,_),t.stroke()}for(let E=1;E<r+(d<1?0:1);E++){const T=v+E*p+S,R=p*s*(h?-1:1);t.beginPath();for(let x=0;x<i+0;x++){const A=x*m+S,P=A+m;t.moveTo(A,T),t.quadraticCurveTo((A+P)/2,T+R,P,T)}t.stroke()}};u(l,o*.7,-o*.55),u(a,o,0)}function Yp(t,e,n,i=.06){for(let r=0;r<e*n/220;r++)t.fillStyle=`rgba(0,0,0,${Xe()*i})`,t.fillRect(Xe()*e,Xe()*n,2,2);for(let r=0;r<e*n/500;r++)t.fillStyle=`rgba(255,255,255,${Xe()*i*.6})`,t.fillRect(Xe()*e,Xe()*n,1.5,1.5)}function Qi(t,e,n,i,r){t.save(),t.translate(e,n),t.scale(i,i),t.fillStyle=r,t.strokeStyle=r,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.ellipse(0,.12,.13,.32,0,0,7),t.fill(),t.beginPath(),t.ellipse(0,-.26,.09,.11,0,0,7),t.fill(),t.lineWidth=.055;const s=[[-.05,[-.35,-.55],[-.45,-.95]],[-0,[-.42,-.2],[-.6,-.5]],[.1,[-.42,.25],[-.62,.55]],[.2,[-.32,.6],[-.42,1]]];for(const a of[-1,1])for(const[o,l,c]of s)t.beginPath(),t.moveTo(0,o),t.lineTo(l[0]*-a,l[1]),t.lineTo(c[0]*-a,c[1]),t.stroke();t.restore()}function Ff({W:t=1024,H:e=1024,cols:n=22,rows:i=12,emblem:r=!1,circumference:s=1.1,height:a=.6,blueSides:o=!1}={}){const l=Vt(t,e),c=l.getContext("2d"),d=Vt(t,e),h=d.getContext("2d"),f=c.createLinearGradient(0,0,t,0);if(f.addColorStop(0,"#9e0c16"),f.addColorStop(.5,"#d4151f"),f.addColorStop(1,"#9e0c16"),c.fillStyle=f,c.fillRect(0,0,t,e),o){const m=(v,_)=>{const p=c.createLinearGradient(v,0,_,0);p.addColorStop(0,"#11307a"),p.addColorStop(1,"#1b46a8"),c.fillStyle=p,c.fillRect(v,0,_-v,e)};m(t*.16,t*.33),m(t*.67,t*.84)}if(Yp(c,t,e),h.fillStyle="#000",h.fillRect(0,0,t,e),iu(c,t,e,n,i),iu(h,t,e,n,i,{color:"#fff",hi:"rgba(255,255,255,.4)",width:4}),r){const m=t/s,v=e/a,_=t/2,p=e*.3;c.save(),c.translate(_,p),c.scale(m/v,1),Qi(c,0,0,v*.075,"#0d0d10"),c.restore(),c.save(),c.translate(t*0,e*.4),c.scale(m/v,1),Qi(c,0,0,v*.11,"#7a0a10"),c.restore(),c.save(),c.translate(t,e*.4),c.scale(m/v,1),Qi(c,0,0,v*.11,"#7a0a10"),c.restore(),h.save(),h.translate(_,p),h.scale(m/v,1),Qi(h,0,0,v*.075,"#bbb"),h.restore()}return{map:Tt(l),bump:Tt(d,{srgb:!1})}}function nA({W:t=512,H:e=512}={}){const n=Vt(t,e),i=n.getContext("2d"),r=Vt(t,e),s=r.getContext("2d"),a=i.createLinearGradient(0,0,t,0);a.addColorStop(0,"#0d2566"),a.addColorStop(.5,"#1f4fb8"),a.addColorStop(1,"#0d2566"),i.fillStyle=a,i.fillRect(0,0,t,e),s.fillStyle="#777",s.fillRect(0,0,t,e);for(let o=0;o<e;o+=8)for(let l=0;l<t;l+=9){const c=o/8%2?4.5:0;i.fillStyle="rgba(0,0,30,.22)",i.fillRect(l+c,o,7,6),s.fillStyle="#aaa",s.fillRect(l+c+1,o+1,5,4)}return Yp(i,t,e,.05),{map:Tt(n),bump:Tt(r,{srgb:!1})}}function iA({W:t=1024,H:e=1024}={}){const n=Vt(t,e),i=n.getContext("2d"),r=Vt(t,e),s=r.getContext("2d"),a=i.createLinearGradient(0,0,0,e);a.addColorStop(0,"#d9161f"),a.addColorStop(.6,"#c3121b"),a.addColorStop(1,"#8e0b13"),i.fillStyle=a,i.fillRect(0,0,t,e),Yp(i,t,e,.05),s.fillStyle="#000",s.fillRect(0,0,t,e);const o={sag:-.42,width:3.2};return iu(i,t,e,18,20,o),iu(s,t,e,18,20,{...o,color:"#fff",hi:"rgba(255,255,255,.4)",width:4.5}),{map:Tt(n),bump:Tt(r,{srgb:!1})}}function rA(t="#6a4426",{W:e=1024,H:n=1024,lapel:i="#4a2c16",kind:r="tweed"}={}){const s=Vt(e,n),a=s.getContext("2d"),o=Vt(e,n),l=o.getContext("2d"),c=Vt(e,n),d=c.getContext("2d");if(a.fillStyle=t,a.fillRect(0,0,e,n),d.fillStyle="#808080",d.fillRect(0,0,e,n),r==="tweed"){for(let _=0;_<n;_+=10)for(let p=0;p<e;p+=10){const u=Math.floor(p/40)%2?1:-1;a.strokeStyle=`rgba(0,0,0,${.12+Xe()*.1})`,a.lineWidth=2,a.beginPath(),a.moveTo(p,_),a.lineTo(p+10,_+10*u),a.stroke(),d.strokeStyle="#a0a0a0",d.lineWidth=2,d.beginPath(),d.moveTo(p,_),d.lineTo(p+10,_+10*u),d.stroke()}for(let _=0;_<9e3;_++)a.fillStyle=`rgba(${Xe()>.5?"255,220,170":"20,10,0"},${Xe()*.12})`,a.fillRect(Xe()*e,Xe()*n,3,1)}else{for(let _=0;_<6e3;_++)a.fillStyle=`rgba(255,255,255,${Xe()*.04})`,a.fillRect(Xe()*e,Xe()*n,2,2);if(r==="pinstripe")for(let _=0;_<e;_+=22)a.fillStyle="rgba(255,255,255,.12)",a.fillRect(_,0,2,n)}l.fillStyle="#fff",l.fillRect(0,0,e,n),l.fillStyle="#000";const h=.36,f=_=>_<h?.004+(h-_)*.12:.004+(_-h)/(1-h)*.115;l.beginPath();for(let _=0;_<=60;_++){const p=_/60;l.lineTo(e*(.5-f(p)),n*(1-p))}for(let _=60;_>=0;_--){const p=_/60;l.lineTo(e*(.5+f(p)),n*(1-p))}l.closePath(),l.fill(),a.fillStyle=i;for(const _ of[-1,1]){a.beginPath();for(let p=0;p<=40;p++){const u=h+p/40*(1-h);a.lineTo(e*(.5+_*f(u)),n*(1-u))}for(let p=40;p>=0;p--){const u=h+p/40*(1-h),g=.005+p/40*.07;a.lineTo(e*(.5+_*(f(u)+g)),n*(1-u)+(p>30?(p-30)*3:0))}a.closePath(),a.fill(),d.strokeStyle="#fff",d.lineWidth=5,d.beginPath();for(let p=0;p<=40;p++){const u=h+p/40*(1-h),g=.005+p/40*.07;d.lineTo(e*(.5+_*(f(u)+g)),n*(1-u))}d.stroke()}a.strokeStyle="rgba(255,230,190,.25)",a.setLineDash([6,6]),a.lineWidth=2,a.beginPath(),a.moveTo(0,n-14),a.lineTo(e,n-14),a.stroke(),a.setLineDash([]);for(const _ of[h-.02,h-.13])a.fillStyle="#20140c",a.beginPath(),a.arc(e*.5+8,n*(1-_),9,0,7),a.fill(),a.fillStyle="rgba(255,230,180,.35)",a.beginPath(),a.arc(e*.5+6,n*(1-_)-3,3,0,7),a.fill();const m=e*.6,v=n*.3;a.fillStyle="rgba(0,0,0,.35)",a.fillRect(m,v,e*.06,5),a.fillStyle="#f2f2f2",a.beginPath(),a.moveTo(m+6,v),a.lineTo(m+20,v-28),a.lineTo(m+34,v-6),a.lineTo(m+48,v-26),a.lineTo(m+58,v),a.closePath(),a.fill(),a.fillStyle="#d4151f",a.beginPath(),a.moveTo(m+20,v-28),a.lineTo(m+27,v-12),a.lineTo(m+34,v-6),a.closePath(),a.fill();for(const _ of[.36,.64])a.fillStyle="rgba(0,0,0,.35)",a.fillRect(e*_-e*.045,n*.8,e*.09,6);return{map:Tt(s),alpha:Tt(o,{srgb:!1}),bump:Tt(c,{srgb:!1})}}function wg(t="#6a4426",e="tweed",n=!0){const i=Vt(512,512),r=i.getContext("2d");if(r.fillStyle=t,r.fillRect(0,0,512,512),e==="tweed")for(let s=0;s<512;s+=10)for(let a=0;a<512;a+=10){const o=Math.floor(a/40)%2?1:-1;r.strokeStyle=`rgba(0,0,0,${.12+Xe()*.1})`,r.lineWidth=2,r.beginPath(),r.moveTo(a,s),r.lineTo(a+10,s+10*o),r.stroke()}if(e==="pinstripe")for(let s=0;s<512;s+=22)r.fillStyle="rgba(255,255,255,.12)",r.fillRect(s,0,2,512);for(let s=0;s<3e3;s++)r.fillStyle=`rgba(255,230,190,${Xe()*.06})`,r.fillRect(Xe()*512,Xe()*512,3,1);return n&&(r.fillStyle="#f4f1ea",r.fillRect(0,452,512,60),r.fillStyle="rgba(0,0,0,.18)",r.fillRect(0,450,512,4)),Tt(i)}function io(t,e,n,i,r=24,s=30){const a=Vt(t,e),o=a.getContext("2d");o.fillStyle=`hsl(${r},50%,${s}%)`,o.fillRect(0,0,t,e);const l=(i?t:e)/n;for(let c=0;c<n;c++){const d=s-6+Xe()*12;o.fillStyle=`hsl(${r-3+Xe()*6},52%,${d}%)`,i?o.fillRect(c*l,0,l-3,e):o.fillRect(0,c*l,t,l-3);for(let h=0;h<50;h++){if(o.strokeStyle=`rgba(30,10,0,${Xe()*.2})`,o.lineWidth=1+Xe()*1.5,o.beginPath(),i){const f=c*l+Xe()*l;o.moveTo(f,0),o.bezierCurveTo(f+Xe()*8-4,e/3,f+Xe()*8-4,2*e/3,f+Xe()*6-3,e)}else{const f=c*l+Xe()*l;o.moveTo(0,f),o.bezierCurveTo(t/3,f+Xe()*8-4,2*t/3,f+Xe()*8-4,t,f+Xe()*6-3)}o.stroke()}}return a}function sA(){const t=Vt(512,512),e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#103c48"),n.addColorStop(1,"#0b2b35"),e.fillStyle=n,e.fillRect(0,0,512,512),e.strokeStyle="rgba(255,196,110,.16)",e.lineWidth=3;for(let i=0;i<512;i+=128)for(let r=0;r<512;r+=128)e.beginPath(),e.moveTo(r+64,i+8),e.lineTo(r+120,i+64),e.lineTo(r+64,i+120),e.lineTo(r+8,i+64),e.closePath(),e.stroke(),e.fillStyle="rgba(255,140,90,.18)",e.beginPath(),e.arc(r+64,i+64,14,0,7),e.fill(),e.fillStyle="rgba(80,220,230,.12)",e.beginPath(),e.arc(r,i,9,0,7),e.fill();for(let i=0;i<4e3;i++)e.fillStyle=`rgba(0,0,0,${Xe()*.08})`,e.fillRect(Xe()*512,Xe()*512,2,2);return t}function aA(t="dusk"){const i=Vt(2048,1024),r=i.getContext("2d"),s=r.createLinearGradient(0,0,0,1024);if(t==="day"?(s.addColorStop(0,"#5fb4ff"),s.addColorStop(.7,"#bfe3ff"),s.addColorStop(1,"#ffe3b3")):t==="night"?(s.addColorStop(0,"#05061a"),s.addColorStop(.6,"#1a1446"),s.addColorStop(1,"#3a1d5c")):(s.addColorStop(0,"#1b1446"),s.addColorStop(.45,"#6a2a78"),s.addColorStop(.75,"#ff6a5a"),s.addColorStop(1,"#ffb259")),r.fillStyle=s,r.fillRect(0,0,2048,1024),t!=="day")for(let f=0;f<260;f++)r.fillStyle=`rgba(255,255,255,${Xe()*.8})`,r.fillRect(Xe()*2048,Xe()*1024*.5,2,2);const a=2048*.78,o=1024*(t==="day"?.2:.22),l=r.createRadialGradient(a,o,10,a,o,160);l.addColorStop(0,t==="day"?"rgba(255,250,220,1)":"rgba(255,240,210,1)"),l.addColorStop(.35,t==="day"?"rgba(255,240,180,.5)":"rgba(255,220,180,.35)"),l.addColorStop(1,"rgba(255,200,150,0)"),r.fillStyle=l,r.beginPath(),r.arc(a,o,160,0,7),r.fill(),r.fillStyle=t==="day"?"#fffbe8":"#ffeed8",r.beginPath(),r.arc(a,o,54,0,7),r.fill(),(t==="day"?[["#7d93b8",.55,.25],["#4f6488",.65,.4],["#2e3d5a",.78,.6]]:[["#2a1f55",.5,.25],["#1a143c",.62,.45],["#0c0a22",.76,.75]]).forEach(([f,m,v],_)=>{let p=-20;for(;p<2048;){const u=50+Xe()*120,g=1024*(1-m)*(.4+Xe()*.7),M=1024-g;if(r.fillStyle=f,r.fillRect(p,M,u,g),Xe()>.85&&(r.beginPath(),r.moveTo(p+u*.35,M),r.lineTo(p+u/2,M-60-Xe()*80),r.lineTo(p+u*.65,M),r.fill()),Xe()>.7&&r.fillRect(p+u*.2,M-18,u*.6,18),_>0)for(let S=M+12;S<1014;S+=16)for(let E=p+8;E<p+u-8;E+=13)Xe()<v*(t==="day"?.25:.55)&&(r.fillStyle=t==="day"?"rgba(200,230,255,.5)":`rgba(255,${200+Xe()*40},${120+Xe()*60},${.55+Xe()*.45})`,r.fillRect(E,S,6,8));p+=u+4}});const d=2048*.32;r.fillStyle=t==="day"?"#26324a":"#08061a",r.fillRect(d-40,1024*.32,80,1024),r.fillRect(d-26,1024*.24,52,1024),r.fillRect(d-12,1024*.17,24,1024),r.fillRect(d-3,1024*.08,6,1024),r.fillStyle="#ff3355",r.beginPath(),r.arc(d,1024*.08,5,0,7),r.fill();const h=r.createLinearGradient(0,1024*.6,0,1024);return h.addColorStop(0,"rgba(255,120,120,0)"),h.addColorStop(1,t==="day"?"rgba(255,255,255,.25)":"rgba(255,90,140,.25)"),r.fillStyle=h,r.fillRect(0,1024*.6,2048,1024*.4),i}function ro(t,e,n,i=1024,r=256,s="Bangers"){const a=Vt(i,r),o=a.getContext("2d");return o.textAlign="center",o.textBaseline="middle",o.font=`${Math.round(r*.5)}px ${s}, Impact, sans-serif`,o.shadowColor=e,o.shadowBlur=30,o.fillStyle=e,o.fillText(t,i/2,r*.53),o.fillText(t,i/2,r*.53),o.shadowBlur=8,o.fillStyle="#fff",o.fillText(t,i/2,r*.53),o.lineWidth=7,o.strokeStyle=n,o.shadowColor=n,o.shadowBlur=24,o.beginPath(),o.roundRect(14,16,i-28,r-32,30),o.stroke(),a}function Eg(){const n=Vt(512,700),i=n.getContext("2d");i.fillStyle="#efe2bf",i.fillRect(0,0,512,700),i.fillStyle="#c4111f",i.fillRect(0,0,512,120),i.fillStyle="#fff",i.font="86px Bangers, Impact",i.textAlign="center",i.fillText("THE DAILY WEB",512/2,92),i.fillStyle="#16120d",i.font='900 52px "Playfair Display", Georgia',i.fillText("SPIDEY",512/2,200),i.fillText("SAVES",512/2,256),i.fillText("THE CITY!",512/2,312),i.save(),i.translate(512/2,480),i.fillStyle="#16120d",i.beginPath(),i.arc(0,0,120,0,7),i.fill(),Qi(i,0,0,130,"#c4111f"),i.restore();for(let r=0;r<6;r++)i.fillStyle="rgba(0,0,0,.55)",i.fillRect(40,620+r*12,432-r%3*40,5);for(let r=0;r<2e3;r++)i.fillStyle=`rgba(90,60,20,${Xe()*.08})`,i.fillRect(Xe()*512,Xe()*700,2,2);return n}function oA(){const t=Vt(1024,1024),e=t.getContext("2d"),n=512;["#5a0c18","#8a1424","#d9a441","#1d3f52","#8a1424","#5a0c18"].forEach((r,s)=>{e.fillStyle=r,e.beginPath(),e.arc(n,n,512-s*70,0,7),e.fill()}),e.strokeStyle="rgba(255,220,150,.35)",e.lineWidth=6;for(let r=60;r<512;r+=70)e.beginPath(),e.arc(n,n,r,0,7),e.stroke();e.save(),e.translate(n,n),Qi(e,0,0,120,"rgba(0,0,0,.45)"),e.restore();for(let r=0;r<3e4;r++)e.fillStyle=`rgba(0,0,0,${Xe()*.15})`,e.fillRect(Xe()*1024,Xe()*1024,2,2);return t}function lA(){const t=Vt(512,640),e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,640);n.addColorStop(0,"#6e1620"),n.addColorStop(1,"#3a0a10"),e.fillStyle=n,e.fillRect(0,0,512,640);for(let i=0;i<8;i++)for(let r=0;r<6;r++){const s=40+r*86+i%2*43,a=50+i*76;e.strokeStyle="rgba(0,0,0,.35)",e.lineWidth=4,e.beginPath(),e.moveTo(s,a-38),e.lineTo(s+43,a),e.lineTo(s,a+38),e.lineTo(s-43,a),e.closePath(),e.stroke();const o=e.createRadialGradient(s-3,a-3,1,s,a,9);o.addColorStop(0,"#f2cf7a"),o.addColorStop(1,"#6b4a10"),e.fillStyle=o,e.beginPath(),e.arc(s,a,8,0,7),e.fill()}return t}const{sin:ht,abs:xo,PI:Vn}=Math,yr=t=>ht(Vn*Math.min(1,Math.max(0,t))),Tg=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)},Jr={relaxed:[.35,.42,.48,.55,.2],open:[.05,.05,.08,.1,0],spread:[0,0,0,0,-.2],fist:[1,1,1,1,.9],point:[0,1,1,1,.8],thwip:[0,1.05,1.05,0,-.1],pinch:[.55,.6,.65,.7,.55],peace:[0,0,1,1,.8],thumb:[1,1,1,1,-.3]},cA=["lHip","lKnee","lAnk","rHip","rKnee","rAnk","hipsY","hipsZ","hipsRot"],uA={spine:[0,0,0],chest:[0,0,0],neck:[0,0,0],head:[0,0,0],lSh:[.04,0,.13],rSh:[.04,0,-.13],lEl:[-.2,0,0],rEl:[-.2,0,0],lWr:[0,0,0],rWr:[0,0,0],lHip:[0,0,.035],rHip:[0,0,-.035],lKnee:[.03,0,0],rKnee:[.03,0,0],lAnk:[-.03,0,-.035],rAnk:[-.03,0,.035],hipsY:0,hipsZ:0,hipsRot:[0,0,0],lHand:"relaxed",rHand:"relaxed"},fA={hipsY:-.34,spine:[-.03,0,0],lHip:[-1.5,0,.07],rHip:[-1.5,0,-.07],lKnee:[1.45,0,0],rKnee:[1.45,0,0],lAnk:[.05,0,-.05],rAnk:[.05,0,.05]},dA={chest:[.05,0,0],lSh:[-.72,0,.12],rSh:[-.72,0,-.12],lEl:[-.95,.35,0],rEl:[-.95,-.35,0],lHand:"relaxed",rHand:"relaxed"},hA={chest:[.04,0,0],head:[.3,0,0],lSh:[-.72,0,.28],rSh:[-.72,0,-.28],lEl:[-1.05,0,0],rEl:[-1.05,0,0],lWr:[0,0,.25],rWr:[0,0,-.25],lHand:"pinch",rHand:"pinch"},Ql={neutral:{scale:1,top:2,bot:-2,tilt:0,curve:0},happy:{scale:1.08,top:2,bot:-.62,tilt:0,curve:.5},funny:{scale:1.06,top:2,bot:-.5,tilt:0,curve:.52},excited:{scale:1.18,top:2,bot:-.8,tilt:0,curve:.3},sad:{scale:.98,top:.4,bot:-2,tilt:1,curve:0},serious:{scale:1,top:.35,bot:-2,tilt:-.9,curve:0},angry:{scale:1,top:.15,bot:-.7,tilt:-1.3,curve:0},surprised:{scale:1.25,top:2,bot:-2,tilt:0,curve:0},scared:{scale:1.22,top:2,bot:-2,tilt:.6,curve:0},thinking:{scale:1,top:2,bot:-2,tilt:0,curve:0,l:{top:.25,tilt:-.4},r:{scale:1.08}},sleepy:{scale:1,top:.05,bot:-2,tilt:.2,curve:0},ouch:{scale:1,top:.1,bot:-.05,tilt:-.6,curve:.2},listening:{scale:1.08,top:2,bot:-2,tilt:.25,curve:0}},pA={happy:()=>({chest:[-.06,0,0],head:[-.08,0,0]}),funny:t=>({head:[-.05,0,ht(t*2)*.1]}),excited:(t,e)=>e?{chest:[-.05,0,0]}:{chest:[-.05,0,0],hipsY:xo(ht(t*8))*.02},sad:()=>({head:[.38,0,.06],chest:[.15,0,0],neck:[.1,0,0],lSh:[.1,0,.06],rSh:[.1,0,-.06]}),serious:()=>({head:[.06,0,0],chest:[-.03,0,0]}),angry:()=>({head:[.12,0,0],chest:[.05,0,0]}),surprised:()=>({spine:[-.06,0,0],head:[-.08,0,0]}),scared:t=>({chest:[.1,0,0],head:[.05,ht(t*31)*.025,0]}),thinking:()=>({head:[-.12,.22,.1]})},yo={wave:{dur:2.4,eyes:"happy",pose:t=>({rSh:[-.15,0,-1.25],rEl:[0,0,-1.45+.38*ht(t*11)],rWr:[0,-1.57,0],rHand:"open",head:[-.05,-.15,.1]})},hello:{dur:3,eyes:"happy",pose:(t,e)=>({rSh:[-.15,0,-1.25],rEl:[0,0,-1.45+.38*ht(t*11)],rWr:[0,-1.57,0],rHand:"open",head:[.1*ht(e*Vn*4),-.12,.12],lSh:[.2,0,.62],lEl:[0,0,-1.7],lHand:"fist"})},nod:{dur:1.1,pose:(t,e)=>({head:[.22*ht(e*Vn*4)*(1-e*.5),0,0]})},shake:{dur:1.3,pose:(t,e)=>({head:[.05,.35*ht(e*Vn*5)*(1-e*.4),0]})},think:{dur:3.2,loop:!0,loopFrom:.6,eyes:"thinking",pose:t=>({rSh:[-.55,0,.32],rEl:[-2.35,0,0],rWr:[.2,0,0],rHand:"point",lSh:[-.35,0,-.12],lEl:[-1.55,0,0],lHand:"relaxed",head:[-.14+.03*ht(t*2),.2,.12]})},listen:{dur:3,loop:!0,loopFrom:.6,eyes:"listening",pose:()=>({rSh:[-.35,0,-1.55],rEl:[0,0,-2.55],rWr:[0,-.6,0],rHand:"open",head:[.05,-.25,.14],chest:[.06,0,.05]})},cheer:{dur:1.9,eyes:"happy",pose:(t,e,n)=>({lSh:[0,0,2.65],rSh:[0,0,-2.65],lEl:[-.25,0,0],rEl:[-.25,0,0],lHand:"fist",rHand:"fist",head:[-.18,0,0],hipsY:n?0:xo(ht(e*Vn*3))*.07})},clap:{dur:1.8,eyes:"happy",pose:t=>({lSh:[-.95,0,-.05],rSh:[-.95,0,.05],lEl:[-.85,0,-.38-.13*ht(t*18)],rEl:[-.85,0,.38+.13*ht(t*18)],lHand:"open",rHand:"open",head:[-.1,0,0]})},jump:{dur:1.3,standOnly:!0,eyes:"excited",pose:(t,e)=>{const n=e<.2?ht(e/.2*Vn/2):e>.78?ht((1-e)/.22*Vn/2)*.6:0,i=e>=.2&&e<=.78?ht((e-.2)/.58*Vn):0;return{hipsY:-.14*n+.38*i,lHip:[-.6*n-.7*i,0,.1],rHip:[-.6*n-.7*i,0,-.1],lKnee:[1.1*n+1.2*i,0,0],rKnee:[1.1*n+1.2*i,0,0],lSh:[0,0,.3+2.3*i],rSh:[0,0,-.3-2.3*i],lHand:"fist",rHand:"fist"}}},flip:{dur:1.5,standOnly:!0,eyes:"excited",pose:(t,e)=>{const n=e<.18?ht(e/.18*Vn/2):e>.82?ht((1-e)/.18*Vn/2)*.7:0,i=e>=.18&&e<=.82?ht((e-.18)/.64*Vn):0,r=Tg(.24,.78,e)*-Vn*2;return{hipsY:-.14*n+.55*i,hipsRot:[r,0,0],lHip:[-.6*n-1.4*i,0,.1],rHip:[-.6*n-1.4*i,0,-.1],lKnee:[1.1*n+1.9*i,0,0],rKnee:[1.1*n+1.9*i,0,0],lSh:[-1.2*i,0,.3],rSh:[-1.2*i,0,-.3],lEl:[-1*i,0,0],rEl:[-1*i,0,0],head:[.3*i,0,0],lHand:"fist",rHand:"fist"}}},sad:{dur:3.2,eyes:"sad",pose:(t,e)=>({head:[.5,.1*ht(t*1.5),.08],chest:[.2-.08*yr(e*2),0,0],spine:[.06,0,0],lSh:[.12,0,.05],rSh:[-.6,0,.18],rEl:[-2,0,0],rHand:"relaxed"})},surprised:{dur:1.6,eyes:"surprised",pose:()=>({spine:[-.13,0,0],head:[-.16,0,0],lSh:[-.35,0,.8],rSh:[-.35,0,-.8],lEl:[-.9,0,0],rEl:[-.9,0,0],lHand:"spread",rHand:"spread",hipsZ:-.04})},superhero:{dur:2.6,eyes:"serious",pose:()=>({lSh:[.2,0,.7],rSh:[.2,0,-.7],lEl:[0,0,-1.7],rEl:[0,0,1.7],lHand:"fist",rHand:"fist",chest:[-.09,0,0],head:[-.1,0,0]})},shrug:{dur:1.7,pose:()=>({lSh:[-.15,0,.3],rSh:[-.15,0,-.3],lEl:[-1.35,.6,0],rEl:[-1.35,-.6,0],lWr:[0,1.2,0],rWr:[0,-1.2,0],lHand:"open",rHand:"open",head:[0,0,.22]})},point:{dur:1.7,pose:()=>({rSh:[-1.45,0,-.12],rEl:[-.08,0,0],rHand:"point",head:[0,-.12,0]})},thwip:{dur:1.5,eyes:"serious",events:[[.33,"web"]],pose:(t,e)=>({rSh:[-1.5,0,-.05],rEl:[0,0,0],rWr:[0,0,-.65*Tg(.2,.33,e)],rHand:"thwip",lSh:[.1,0,.3],head:[.05,-.08,0],chest:[0,-.15,0]})},laugh:{dur:2.3,eyes:"funny",pose:t=>({head:[-.3+.06*ht(t*20),0,.05],chest:[-.1+.04*ht(t*20),0,0],lSh:[-.45,0,-.02],rSh:[-.45,0,.02],lEl:[-1.5,0,0],rEl:[-1.5,0,0],lHand:"open",rHand:"open"})},tickle:{dur:2,eyes:"funny",pose:t=>({chest:[.32+.05*ht(t*22),0,0],spine:[.15,0,0],head:[-.2,0,.1*ht(t*9)],lSh:[-.5,0,-.05],rSh:[-.5,0,.05],lEl:[-1.4,0,0],rEl:[-1.4,0,0]})},ouch:{dur:1.5,eyes:"ouch",pose:t=>({head:[-.22,.05*ht(t*25),.2],lSh:[-.45,0,1.9],rSh:[-.45,0,-1.9],lEl:[0,0,1.9],rEl:[0,0,-1.9],lHand:"open",rHand:"open",hipsZ:-.05})},hop:{dur:1.5,standOnly:!0,eyes:"ouch",pose:t=>({lHip:[-.9,0,.1],lKnee:[1.5,0,0],hipsY:xo(ht(t*10))*.08,lSh:[0,0,1+.4*ht(t*14)],rSh:[0,0,-1-.4*ht(t*14+1)],lEl:[-.5,0,0],rEl:[-.5,0,0],lHand:"spread",rHand:"spread"})},highfive:{dur:1.4,eyes:"happy",pose:()=>({rSh:[-.3,0,-2.5],rEl:[-.2,0,0],rWr:[0,-1.57,0],rHand:"spread",head:[-.1,-.1,0]})},beat1:{dur:1.5,pose:t=>({rSh:[-.55,0,-.18],rEl:[-1.15+.15*ht(t*6),-.45,0],rWr:[0,-.8,0],rHand:"open"})},beat2:{dur:1.7,pose:(t,e)=>({lSh:[-.5,0,.25+.15*yr(e)],rSh:[-.5,0,-.25-.15*yr(e)],lEl:[-1.1,.5,0],rEl:[-1.1,-.5,0],lWr:[0,1,0],rWr:[0,-1,0],lHand:"open",rHand:"open"})},beat3:{dur:1.4,pose:()=>({rSh:[-.35,0,.22],rEl:[-2,0,0],rHand:"point",head:[-.05,.08,0]})},beat4:{dur:1.6,pose:t=>({lSh:[-.6,0,.15],lEl:[-1+.12*ht(t*7),.4,0],lWr:[0,.9,0],lHand:"open"})},bow:{dur:2,pose:(t,e,n)=>({spine:[(n?.25:.55)*yr(e),0,0],head:[.25*yr(e),0,0],rSh:[-.35,0,.3],rEl:[-1.6,0,0],lSh:[.35,0,.12]})},dance:{dur:4.8,standOnly:!1,eyes:"happy",pose:(t,e,n)=>{const i=ht(t*6.5),r=ht(t*6.5+Vn);return{spine:[0,0,.14*i],lSh:[-.3,0,1.1+.8*i],rSh:[-.3,0,-1.1-.8*r],lEl:[-1.2,0,0],rEl:[-1.2,0,0],lHand:"peace",rHand:"point",head:[.08*xo(i),.2*ht(t*3.25),0],hipsY:n?0:.03*xo(i),lKnee:[.35*Math.max(0,i),0,0],rKnee:[.35*Math.max(0,r),0,0],lHip:[-.2*Math.max(0,i),0,.04],rHip:[-.2*Math.max(0,r),0,-.04]}}},facepalm:{dur:2,eyes:"sleepy",pose:()=>({rSh:[-.95,0,.18],rEl:[-2.3,0,0],rHand:"open",head:[.35,0,0]})},present:{dur:1.8,pose:(t,e)=>({rSh:[-.9,0,-.3-.25*yr(e)],rEl:[-.7,-.6,0],rWr:[0,-1.2,0],rHand:"open",head:[0,-.06,0]})},pageflip:{dur:1.2,events:[[.5,"flip"]],pose:(t,e)=>({rSh:[-.85,0,-.3+.55*yr(e)],rEl:[-1.1,0,0],rHand:"pinch",head:[.25,.15*yr(e),0]})}};function mA(t,e,n,i){return yo[t].pose(e,n,i)}const bg={happy:["cheer","clap"],excited:["jump","clap"],funny:["laugh","laugh"],sad:["sad","sad"],surprised:["surprised","surprised"],scared:["surprised","surprised"],serious:["superhero","nod"],angry:["shake","shake"],thinking:["think","think"],neutral:["beat2","present"]},gA=["beat1","beat2","beat3","beat4","present"],vA=(t,e)=>new Be(t,e),xh=(t,e=40)=>new Gp(t.map(([n,i])=>vA(n,i)),e,Math.PI,Math.PI*2),Ri=(t,e,n,i)=>t+(e-t)*(1-Math.exp(-n*i)),Ag=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)};function ec(t,e,n,i=0,r=.35,s=28){const a=[];for(let l=0;l<=5;l++){const c=l/5*Math.PI/2;a.push([Math.max(1e-4,Math.sin(c)*n),-t-Math.cos(c)*n*.8])}for(let l=1;l<16;l++){const c=1-l/16;a.push([e+(n-e)*c+i*Math.exp(-((c-r)**2)/.03),-c*t])}for(let l=0;l<=5;l++){const c=l/5*Math.PI/2;a.push([Math.max(1e-4,Math.cos(c)*e),Math.sin(c)*e*.8])}return xh(a,s)}const tc=(t,e)=>{const n=new wu(t,e,4,10);return n.translate(0,-e/2,0),n},so=[{name:"Retro tweed",base:"#6e4527",lapel:"#3b2210",kind:"tweed",tie:"#e0a83a"},{name:"Navy anchor",base:"#1b2846",lapel:"#0c1427",kind:"pinstripe",tie:"#d4151f"},{name:"Tuxedo",base:"#17171c",lapel:"#060608",kind:"plain",tie:"#101010"},{name:"Classic suit",base:null}];function _A({hi:t=!0}={}){const e=new Zt;e.name="spidey";const n=new Zt;e.add(n);const i={},r=[],s=(H,ee,j=0,he=0,_e=0)=>{const pe=new Zt;return pe.name=H,pe.position.set(j,he,_e),ee.add(pe),i[H]=pe,pe},a=(H,ee,j,he,_e=0,pe=0,b=0)=>{const B=new kt(H,ee);return B.position.set(_e,pe,b),B.castShadow=!0,B.receiveShadow=!0,B.userData.part=he,j.add(B),r.push(B),B},o=(H,ee={})=>new mi({map:H.map,bumpMap:H.bump,bumpScale:2.2,roughness:.52,metalness:0,sheen:.35,sheenRoughness:.5,sheenColor:new $e("#ff5a5a"),clearcoat:t?.18:0,clearcoatRoughness:.55,...ee}),l=Ff({W:1024,H:1024,cols:26,rows:12,emblem:!0,circumference:1.05,height:.6,blueSides:!0}),c=Ff({W:512,H:512,cols:10,rows:9}),d=Ff({W:256,H:256,cols:8,rows:4}),h=nA(),f=iA(),m=o(l),v=o(c),_=o(d,{bumpScale:1.2}),p=o(h,{sheenColor:new $e("#9ab8ff"),bumpScale:1}),u=o(f,{bumpScale:2.6,roughness:.48}),g=new Ji({color:"#f4f1ea",roughness:.55}),M=new mi({color:"#e0a83a",roughness:.35,sheen:1,sheenColor:new $e("#fff2c8"),clearcoat:.4}),S=new mi({roughness:.78,sheen:.6,sheenRoughness:.6,sheenColor:new $e("#ffd9b0"),side:qt,alphaTest:.5,bumpScale:1.5}),E=new mi({roughness:.78,sheen:.6,sheenColor:new $e("#ffd9b0")}),T=new mi({roughness:.78,sheen:.6,sheenColor:new $e("#ffd9b0")}),R=s("hips",n,0,.96,0);a(new Yi(.155,32,20),p,R,"body",0,-.02,0).scale.set(1,.78,.74);const x=s("spine",R,0,.07,0),P=a(xh([[1e-4,-.075],[.135,-.05],[.132,.04],[.142,.14],[.168,.26],[.186,.36],[.19,.42],[.172,.47],[.115,.505],[.062,.525],[1e-4,.53]],48),m,x,"body");P.scale.z=.7;const U=s("chest",x,0,.34,0),z=s("neck",U,0,.17,0);a(new Ft(.056,.064,.12,24),v,z,"head",0,.03,0);const W=s("head",z,0,.07,0);W.scale.setScalar(1.17);const K=a(xh([[.172,-.21],[.17,-.1],[.152,.02],[.158,.14],[.183,.26],[.203,.36],[.208,.42],[.188,.47],[.13,.505],[.086,.52]],48),S,x,"body");K.scale.z=.72;const se=a(new Ft(.066,.07,.05,24,1,!0,Math.PI*.18,Math.PI*1.64),g,z,"head",0,0,0);se.material=g.clone(),se.material.side=qt;const te=new Zt;te.position.set(0,-.005,.066),z.add(te);const $=new Hp(.026,.05,14);$.rotateZ(Math.PI/2),$.translate(-.025,0,0),a($,M,te,"head").scale.set(1,1,.45);const Y=a($,M,te,"head");Y.rotation.z=Math.PI,Y.scale.set(1,1,.45),a(new Yi(.012,12,10),M,te,"head").scale.set(1,1.1,.8);const Q=H=>{const ee=H==="l"?1:-1,j=s(H+"Sh",U,.19*ee,.075,-.01),he=a(new Yi(.074,24,16),v,j,"arm",0,-.005,0);he.scale.set(1.08,.86,1);const _e=a(ec(.28,.062,.047,.009,.3),v,j,"arm"),pe=s(H+"El",j,0,-.28,0),b=a(ec(.25,.05,.036,.007,.25),v,pe,"arm"),B=s(H+"Wr",pe,0,-.25,0),I=new Zt;I.rotation.y=-ee*Math.PI/2,B.add(I),a(new Yi(1,20,14),_,I,"hand",0,-.055,0).scale.set(.043,.054,.024);const ie=[],ue=[.026,.009,-.009,-.026].map(de=>de*ee),ne=[[.042,.035],[.047,.04],[.044,.037],[.034,.029]];ue.forEach((de,Pe)=>{const Ze=new Zt;Ze.position.set(de,-.098,.002),I.add(Ze),a(tc(Pe===3?.0095:.0108,ne[Pe][0]),_,Ze,"hand");const ut=new Zt;ut.position.y=-ne[Pe][0]-.004,Ze.add(ut),a(tc(Pe===3?.009:.0102,ne[Pe][1]),_,ut,"hand"),ie.push({a:Ze,b:ut})});const me=new Zt;me.position.set(.04*ee,-.035,.012),me.rotation.set(-.35,0,.6*ee),I.add(me),a(tc(.012,.036),_,me,"hand");const ve=new Zt;return ve.position.y=-.04,me.add(ve),a(tc(.011,.03),_,ve,"hand"),i[H+"Fingers"]=ie,i[H+"Thumb"]={a:me,b:ve,base:me.rotation.clone()},{pad:he,ua:_e,fa:b}},oe=Q("l"),ye=Q("r"),Ce=H=>{const ee=H==="l"?1:-1,j=s(H+"Hip",R,.092*ee,-.06,0);a(ec(.42,.088,.058,.012,.3),p,j,"leg");const he=s(H+"Knee",j,0,-.42,0);a(ec(.4,.061,.041,.013,.25),v,he,"leg");const _e=s(H+"Ank",he,0,-.4,0);a(new Yi(1,24,16),v,_e,"foot",0,-.038,.05).scale.set(.053,.048,.125)};Ce("l"),Ce("r");const je=.135,We=new Yi(je,t?72:48,t?56:36);We.rotateX(Math.PI/2),We.rotateZ(Math.PI/2);const Ye=H=>{if(H.y<0){const ee=-H.y/je;H.x*=1-.24*Math.pow(ee,1.5),H.z*=1-.06*ee}return H.z<0&&(H.z*=.94),H.y>0&&(H.y*=1.04),H},ae=We.attributes.position,fe=new V;for(let H=0;H<ae.count;H++)fe.fromBufferAttribute(ae,H),Ye(fe),ae.setXYZ(H,fe.x,fe.y,fe.z);We.computeVertexNormals();const we=a(We,u,W,"head",0,.13,.005);we.scale.set(.92,1.1,1);const He=Float32Array.from(ae.array),Te=[];for(let H=0;H<ae.count;H++){const ee=He[H*3+1],j=He[H*3+2],he=Ag(-.072,-.1,ee)*Ag(.02,.1,j);he>.01&&Te.push(H,he)}const ze=(H,ee,j)=>{const he=Math.sqrt(Math.max(1e-6,je*je-H*H-ee*ee));return fe.set(H,ee,he),Ye(fe),fe.multiplyScalar(1+j),fe},Je=44,De=(H,ee)=>{const j=[];for(let pe=0;pe<Je;pe++){const b=pe/Je*Math.PI*2,B=Math.pow(Math.max(0,Math.cos(b-3.75)),5)*.5;let I=Math.cos(b)*(1+B),ie=Math.sin(b)*(1+B)*.82;const ue=Math.cos(.22),ne=Math.sin(.22);[I,ie]=[I*ue-ie*ne,I*ne+ie*ue],I*=H.scale,ie*=H.scale;const me=-I,ve=H.top+H.tilt*me*.5,de=H.bot+H.curve*(1-I*I*.6);ie>ve&&(ie=ve),ie<de&&(ie=de),ve<de&&(ie=(ve+de)/2),j.push(I,ie)}let he=0,_e=0;for(let pe=0;pe<Je;pe++)he+=j[pe*2],_e+=j[pe*2+1];return he/=Je,_e/=Je,ee.cx=he,ee.cy=_e,j},Qe=H=>{const ee=new fn;ee.setAttribute("position",new Mi(new Float32Array((H+1)*3),3));const j=[];for(let he=1;he<=H;he++)j.push(0,he,he===H?1:he+1);return ee.setIndex(j),ee},Ve=new mi({color:"#d9e3ee",roughness:.2,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:.6,side:qt}),Ge=new mi({color:"#050506",roughness:.45,clearcoat:.3,envMapIntensity:.25,side:qt}),et=new pi({color:"#ffffff",transparent:!0,opacity:.85,side:qt}),gt=["l","r"].map(H=>{const ee=H==="l"?1:-1,j=a(Qe(Je),Ge,we,"head"),he=a(Qe(Je),Ve,we,"head"),_e=a(Qe(12),et,we,"head");return[j,he,_e].forEach(pe=>{pe.position.set(0,0,0),pe.castShadow=!1,pe.frustumCulled=!1}),{s:ee,frame:j,lens:he,glint:_e,p:{...Ql.neutral}}}),bt=.046,st=.016,wt=.033,k=.03,vt=(H,ee,j,he,_e,pe,b,B,I,ie,ue=0)=>{const ne=H.attributes.position.array,me=ee.length/2;let ve=ze(pe+_e*j*B,b+he*I,ie);ne[0]=ve.x,ne[1]=ve.y,ne[2]=ve.z;for(let de=0;de<me;de++){let Pe=ee[de*2],Ze=ee[de*2+1];if(ue){const ut=Pe-j,wn=Ze-he,dn=Math.hypot(ut,wn)||1;Pe+=ut/dn*ue,Ze+=wn/dn*ue}ve=ze(pe+_e*Pe*B,b+Ze*I,ie),ne[(de+1)*3]=ve.x,ne[(de+1)*3+1]=ve.y,ne[(de+1)*3+2]=ve.z}H.attributes.position.needsUpdate=!0,H.computeBoundingSphere()},ct=()=>{for(const H of gt){const ee={},j=De(H.p,ee);vt(H.frame.geometry,j,ee.cx,ee.cy,H.s,bt*H.s,st,wt,k,.012,.3),vt(H.lens.geometry,j,ee.cx,ee.cy,H.s,bt*H.s,st,wt,k,.02,0);const he=Math.max(0,Math.min(1,(H.p.top-H.p.bot)/1.4)),_e=[];for(let pe=0;pe<12;pe++){const b=pe/12*Math.PI*2;_e.push(.38+Math.cos(b)*.13,.28+Math.sin(b)*.13*he)}vt(H.glint.geometry,_e,.38,.28,H.s,bt*H.s,st,wt,k,.024,0),H.glint.visible=he>.35&&ee.cy<.5}},C=24,y=a(Qe(C),new Ji({color:"#3a0306",roughness:.9,side:qt}),we,"head");y.castShadow=!1,y.frustumCulled=!1;const q=(H,ee)=>{const j=[],he=.004+H*.95,_e=.6+ee*.5;for(let pe=0;pe<C;pe++){const b=pe/C*Math.PI*2,B=Math.sin(b);j.push(Math.cos(b)*_e,B>0?B*.25:B*he)}vt(y.geometry,j,0,-he*.4,1,0,-.077,.03,.026,.012+H*.004),y.visible=H>.03;for(let pe=0;pe<Te.length;pe+=2){const b=Te[pe],B=Te[pe+1];ae.array[b*3+1]=He[b*3+1]-H*.02*B}ae.needsUpdate=!0};let J=0;const le=H=>{var he,_e;J=(H%so.length+so.length)%so.length;const ee=so[J],j=!!ee.base;if(K.visible=se.visible=te.visible=j,j){const pe=rA(ee.base,{lapel:ee.lapel,kind:ee.kind});[S.map,S.alphaMap,S.bumpMap].forEach(b=>b&&b.dispose()),S.map=pe.map,S.alphaMap=pe.alpha,S.bumpMap=pe.bump,S.needsUpdate=!0,(he=E.map)==null||he.dispose(),E.map=wg(ee.base,ee.kind,!1),E.needsUpdate=!0,(_e=T.map)==null||_e.dispose(),T.map=wg(ee.base,ee.kind,!0),T.needsUpdate=!0,M.color.set(ee.tie)}for(const pe of[oe,ye])pe.pad.material=j?E:v,pe.ua.material=j?E:v,pe.fa.material=j?T:v;return ee.name};le(0);const D={t:0,sitK:0,sit:!1,readK:0,read:!1,talk:0,talkT:0,wide:0,emotion:"neutral",emoT:0,look:new Be,lookT:new Be,saccade:0,blinkT:2,blink:0,clip:null,clipT:0,clipW:0,onEvent:null,cur:{},listening:!1,hold:null},xe=["spine","chest","neck","head","lSh","lEl","lWr","rSh","rEl","rWr","lHip","lKnee","lAnk","rHip","rKnee","rAnk"];xe.forEach(H=>D.cur[H]=[0,0,0]),D.cur.hipsY=0,D.cur.hipsZ=0,D.cur.lHand=[...Jr.relaxed],D.cur.rHand=[...Jr.relaxed];const re=(H,ee,j)=>{const he={...H};for(const _e in ee){const pe=ee[_e];if(pe!=null){if(_e==="lHand"||_e==="rHand"){const b=typeof pe=="string"?Jr[pe]:pe,B=typeof he[_e]=="string"?Jr[he[_e]]:he[_e]||Jr.relaxed;he[_e]=B.map((I,ie)=>I+(b[ie]-I)*j)}else if(Array.isArray(pe)){const b=he[_e]||[0,0,0];he[_e]=[b[0]+(pe[0]-b[0])*j,b[1]+(pe[1]-b[1])*j,b[2]+(pe[2]-b[2])*j]}else if(typeof pe=="number"){const b=he[_e]||0;he[_e]=b+(pe-b)*j}}}return he},ce=(H,ee,j=0,he=0,_e=0)=>{const pe=H[ee]||[0,0,0];H[ee]=[pe[0]+j,pe[1]+he,pe[2]+_e]},Me={root:e,J:i,parts:r,headMesh:we,get state(){return D},setOutfit:le,nextOutfit:()=>le(J+1),get outfit(){return so[J].name},setSit(H){D.sit=H},setRead(H){D.read=H},setTalk(H){D.talkT=H},setWide(H){D.wide=H},setListening(H){D.listening=H},setEmotion(H){Ql[H]||(H="neutral"),D.emotion=H,D.emoT=0},look(H,ee){D.lookT.set(H,ee),D.saccade=3},play(H,{onEvent:ee,hold:j}={}){const he=yo[H];return!he||D.sit&&he.standOnly?!1:(D.clip=H,D.clipT=0,D.onEvent=ee||null,D.hold=j||null,D.fired={},!0)},stop(H){(!H||D.clip===H)&&(D.clip&&(D.clipT=Math.max(D.clipT,yo[D.clip].dur-.3)),D.hold=null)},get playing(){return D.clip},freeze(H,ee){if(!H){D.freeze=!1,D.clip=null;return}D.clip=H,D.clipT=ee,D.freeze=!0,D.fired={}},update(H){var I,ie,ue,ne;D.t+=H;const ee=D.t;D.sitK=Ri(D.sitK,D.sit?1:0,4,H),D.readK=Ri(D.readK,D.sit&&D.read?1:0,4,H),D.talk=Ri(D.talk,D.talkT,22,H),D.emoT+=H;let j=re(uA,fA,D.sitK);D.sitK>.01&&(j=re(j,re(dA,hA,D.readK),D.sitK));const he=pA[D.emotion];if(he&&(j=re(j,he(ee,D.sitK>.5),Math.min(1,D.emoT*3)*(D.emoT<12?1:Math.max(0,1-(D.emoT-12))))),D.listening&&(ce(j,"chest",.06,0,0),ce(j,"head",.05,0,-.12)),D.clip){const me=yo[D.clip];D.freeze||(D.clipT+=H),D.hold&&me.loop&&D.clipT>me.dur-.35&&(D.clipT=me.loopFrom??.4);const ve=Math.min(1,D.clipT/me.dur),de=Math.min(1,D.clipT/.22)*Math.min(1,(me.dur-D.clipT)/.28);let Pe=mA(D.clip,D.clipT,ve,D.sitK>.5);if(D.sitK>.5&&(Pe={...Pe},cA.forEach(Ze=>delete Pe[Ze])),j=re(j,Pe,Math.max(0,de)),me.events)for(const[Ze,ut]of me.events)ve>=Ze&&!D.fired[Ze]&&(D.fired[Ze]=1,(I=D.onEvent)==null||I.call(D,ut));D.clipT>=me.dur&&!D.freeze&&(D.clip=null,D.hold=null)}const _e=Math.sin(ee*1.7);ce(j,"chest",_e*.018,0,0),ce(j,"lSh",0,0,_e*.012),ce(j,"rSh",0,0,-_e*.012),D.sitK<.5&&(ce(j,"spine",0,Math.sin(ee*.5)*.03,Math.sin(ee*.7)*.012),j.hipsY=(j.hipsY||0)+Math.sin(ee*1.7)*.004),D.saccade-=H,D.saccade<=0&&(D.lookT.set((Math.random()-.5)*.7,(Math.random()-.5)*.3),D.saccade=1.5+Math.random()*3),D.look.x=Ri(D.look.x,D.lookT.x,6,H),D.look.y=Ri(D.look.y,D.lookT.y,6,H),ce(j,"head",D.look.y*.22,D.look.x*.45,0),ce(j,"neck",D.look.y*.1,D.look.x*.2,0),D.talk>.02&&(ce(j,"head",D.talk*Math.sin(ee*7.3)*.05,D.talk*Math.sin(ee*2.3)*.06,D.talk*Math.sin(ee*3.1)*.05),ce(j,"chest",D.talk*Math.sin(ee*3.7)*.02,D.talk*Math.sin(ee*1.9)*.03,0));for(const me of xe){const ve=j[me]||[0,0,0],de=D.cur[me];for(let Pe=0;Pe<3;Pe++)de[Pe]=Ri(de[Pe],ve[Pe],16,H);i[me].rotation.set(de[0],de[1],de[2])}D.cur.hipsY=Ri(D.cur.hipsY,j.hipsY||0,16,H),D.cur.hipsZ=Ri(D.cur.hipsZ,j.hipsZ||0,10,H),i.hips.position.y=.96+D.cur.hipsY,i.hips.position.z=D.cur.hipsZ,i.hips.rotation.set(((ie=j.hipsRot)==null?void 0:ie[0])||0,((ue=j.hipsRot)==null?void 0:ue[1])||0,((ne=j.hipsRot)==null?void 0:ne[2])||0);for(const me of["l","r"]){const ve=me+"Hand",de=typeof j[ve]=="string"?Jr[j[ve]]:j[ve]||Jr.relaxed,Pe=D.cur[ve];for(let ut=0;ut<5;ut++)Pe[ut]=Ri(Pe[ut],de[ut],18,H);i[me+"Fingers"].forEach((ut,wn)=>{ut.a.rotation.x=-Pe[wn]*1.45,ut.b.rotation.x=-Pe[wn]*1.6});const Ze=i[me+"Thumb"];Ze.a.rotation.x=Ze.base.x-Pe[4]*.9,Ze.a.rotation.z=Ze.base.z*(1-Pe[4]*.6),Ze.b.rotation.x=-Pe[4]*.9}D.blinkT-=H,D.blinkT<=0&&(D.blink=.14,D.blinkT=2+Math.random()*4);const pe=D.blink>0;pe&&(D.blink-=H);const b=D.clip&&yo[D.clip].eyes||D.emotion;for(const me of gt){const ve=Ql[b]||Ql.neutral,de=me.s>0?"l":"r",Pe={...ve,...ve[de]||{}};for(const Ze of["scale","top","bot","tilt","curve"])me.p[Ze]=Ri(me.p[Ze],pe?Ze==="top"?-.05:Ze==="bot"?-.15:Pe[Ze]:Pe[Ze],pe?40:10,H)}ct();const B=D.talk*(.55+.45*Math.abs(Math.sin(ee*13))*Math.abs(Math.sin(ee*7.7+1)));q(Math.min(1,B),D.wide)}};return ct(),q(0,0),Me}const ao=(t,e,n,i)=>t+(e-t)*(1-Math.exp(-n*i)),nc=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),xA={uniforms:{tDiffuse:{value:null},time:{value:0},vign:{value:.55},grain:{value:.035},sat:{value:1.12},res:{value:new Be(1,1)},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float time,vign,grain,sat,flash;uniform vec2 res;varying vec2 vUv;
  void main(){vec2 uv=vUv;vec2 d=uv-.5;float ca=dot(d,d)*.008;
  vec3 c=vec3(texture2D(tDiffuse,uv+d*ca).r,texture2D(tDiffuse,uv).g,texture2D(tDiffuse,uv-d*ca).b);
  c=clamp(c,0.,1.);float l=dot(c,vec3(.299,.587,.114));
  c+=mix(vec3(-.015,.012,.04),vec3(.045,.018,-.03),smoothstep(.15,.8,l));
  c=mix(vec3(l),c,sat);c=clamp(c,0.,1.);c=mix(c,c*c*(3.-2.*c),.35);
  c*=1.-vign*smoothstep(.38,1.,length(d*vec2(1.15,1.))*1.3);
  c+=vec3(1.,.15,.1)*flash*.18*(1.-length(d));
  float n=fract(sin(dot(uv*res+fract(time)*61.,vec2(12.9898,78.233)))*43758.5453);c+=(n-.5)*grain;
  gl_FragColor=vec4(c,1.);}`};function yA(t,{onPoke:e,onWeb:n}={}){var $r;const i=new $b({canvas:t,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,nc?1.6:2)),i.toneMapping=Su,i.toneMappingExposure=.95,i.shadowMap.enabled=!0,i.shadowMap.type=Lo;const r=new ox;r.background=new $e("#0d0716");const s=new gh(i);r.environment=s.fromScene(new tA,.04).texture,r.environmentIntensity=.32;const a=new Rn(32,1,.05,60),o=L=>new Ji({roughness:.7,metalness:.02,...L}),l=(L,ge,Ie,Ue,at,Rt=r,_t=!0)=>{const w=new kt(L,ge);return w.position.set(Ie,Ue,at),w.castShadow=_t,w.receiveShadow=!0,Rt.add(w),w},c=(L,ge,Ie,Ue,at,Rt,_t,w)=>l(new lr(L,ge,Ie),Ue,at,Rt,_t,w),d=(L,ge,Ie,Ue,at,Rt,_t,w,N)=>l(new $p(L,ge,Ie,4,Ue),at,Rt,_t,w,N),h=(L,ge,Ie)=>Tt(L,{rep:[ge,Ie]}),f=sA(),m=io(1024,512,18,!0,22,26),v=io(1024,1024,12,!1,26,30),_=io(512,512,6,!0,18,18),p=-2.6,u={x0:-1.3,x1:1.3,y0:.95,y1:2.45},g=(L,ge)=>o({map:h(f,L/1.1,ge/1.1),roughness:.85}),M=(L,ge,Ie,Ue)=>c(ge-L,Ue-Ie,.2,g(ge-L,Ue-Ie),(L+ge)/2,(Ie+Ue)/2,p-.1);M(-7,u.x0,0,5.5),M(u.x1,7,0,5.5),M(u.x0,u.x1,u.y1,5.5),M(u.x0,u.x1,0,u.y0),c(14,.95,.06,o({map:h(m,7,1),roughness:.5}),0,.475,p+.03),c(14,.07,.1,o({color:"#c8963e",metalness:.6,roughness:.3}),0,.97,p+.05),c(14,.12,.08,o({color:"#2a1408",roughness:.5}),0,.06,p+.06);for(const L of[-1,1])c(.2,5.5,8,g(8,5.5),L*4.8,2.75,1.2);const S=l(new rn(14,10),o({map:h(v,4,3),roughness:.32,metalness:.05}),0,0,1.4,r,!1);S.rotation.x=-Math.PI/2;const E=l(new zp(1.35,64),o({map:Tt(oA()),roughness:.95}),0,.006,.25,r,!1);E.rotation.x=-Math.PI/2,E.scale.y=.62;const T=new Date().getHours(),R=T>=7&&T<16?"day":T>=16&&T<19?"dusk":"night",x=new pi({map:Tt(aA(R))});l(new rn(7,3.5),x,0,1.75,-4.2,r,!1);const A=o({map:Tt(_),roughness:.45}),P=.09,U=u.x1-u.x0,z=u.y1-u.y0,W=0,O=(u.y0+u.y1)/2;c(U+P*2,P,.16,A,W,u.y1+P/2,p),c(U+P*2,P,.16,A,W,u.y0-P/2,p),c(P,z,.16,A,u.x0-P/2,O,p),c(P,z,.16,A,u.x1+P/2,O,p),c(.04,z,.06,A,W,O,p-.04),c(U,.04,.06,A,W,O+.15,p-.04),c(U+.4,.06,.32,A,W,u.y0-.1,p+.1),l(new rn(U,z),new mi({color:"#ffffff",transparent:!0,opacity:.06,roughness:.05,metalness:0,clearcoat:1}),W,O,p-.02,r,!1);const K=new mi({color:"#7a0d1c",roughness:.75,sheen:1,sheenColor:new $e("#ff6a7a"),sheenRoughness:.35,side:qt});for(const L of[-1,1]){const ge=new rn(.8,2.75,48,1),Ie=ge.attributes.position;for(let Ue=0;Ue<Ie.count;Ue++){const at=Ie.getX(Ue),Rt=Ie.getY(Ue);Ie.setZ(Ue,.05*Math.sin(at*34)+.02*Math.sin(at*11)),Ie.setX(Ue,at*(1-.18*Math.max(0,(-Rt-.4)/1)*0))}ge.computeVertexNormals(),l(ge,K,L*(U/2+.28),1.9,p+.2),l(new Vp(.1,.025,8,20),o({color:"#d9a441",metalness:.8,roughness:.25}),L*(U/2+.28),1.45,p+.28)}const se=l(new Ft(.025,.025,U+1.4,12),o({color:"#d9a441",metalness:.85,roughness:.25}),0,3.3,p+.22);se.rotation.z=Math.PI/2;const te=new pi({map:Tt(ro("SPIDEY NEWS 24","#ff2a6d","#29e7ff")),transparent:!0,toneMapped:!1,depthWrite:!1});l(new rn(1.8,.45),te,0,2.72,p+.05,r,!1);const $=new pi({map:Tt(ro("ON AIR","#ff2020","#ff2020",512,192)),transparent:!0,toneMapped:!1,opacity:.25});d(.62,.26,.08,.03,o({color:"#1a0a0a"}),2.15,2.35,p+.05),l(new rn(.58,.22),$,2.15,2.35,p+.1,r,!1);const Y=l(new rn(.75,1.02),o({map:Tt(Eg()),roughness:.6}),-2.25,1.85,p+.06,r,!1);c(.83,1.1,.04,o({color:"#c8963e",metalness:.6,roughness:.35}),-2.25,1.85,p+.03);const Q=Vt(256,256),oe=Q.getContext("2d");oe.fillStyle="#101826",oe.fillRect(0,0,256,256),oe.strokeStyle="rgba(255,255,255,.75)",oe.lineWidth=2;for(let L=0;L<12;L++){const ge=L/12*Math.PI*2;oe.beginPath(),oe.moveTo(128,128),oe.lineTo(128+Math.cos(ge)*140,128+Math.sin(ge)*140),oe.stroke()}for(let L=14;L<140;L+=16){oe.beginPath();for(let ge=0;ge<=12;ge++){const Ie=ge/12*Math.PI*2,Ue=ge%1?L:L*.96;oe.lineTo(128+Math.cos(Ie)*Ue,128+Math.sin(Ie)*Ue)}oe.stroke()}Qi(oe,160,150,40,"#e01b2b"),l(new rn(.5,.5),o({map:Tt(Q)}),3.1,1.8,p+.06,r,!1),c(.56,.56,.03,o({color:"#1b1b1b",roughness:.4}),3.1,1.8,p+.035);const ye=o({color:"#c99a45",metalness:.85,roughness:.28});l(new Ft(.17,.2,.04,24),ye,-1.95,.02,-1.9),l(new Ft(.018,.018,1.6,10),ye,-1.95,.82,-1.9);const Ce=new Ji({color:"#f3c27a",emissive:"#ffb347",emissiveIntensity:.9,side:qt,roughness:.9});l(new Ft(.16,.26,.3,28,1,!0),Ce,-1.95,1.72,-1.9,r,!1);const je=new vo("#ffb35c",2.2,4.5,1.6);je.position.set(-1.95,1.65,-1.85),r.add(je),l(new Ft(.18,.14,.38,20),o({color:"#b5502d",roughness:.6}),-2.8,.19,-1.7);const We=o({color:"#2f7a3a",roughness:.6,side:qt});for(let L=0;L<14;L++){const ge=l(new Yi(.2,10,8),We,-2.8,.55+Math.random()*.5,-1.7,r);ge.scale.set(.35,1.2,.12),ge.rotation.set((Math.random()-.5)*1.2,L/14*Math.PI*2,(Math.random()-.5)*1.2),ge.position.x+=Math.cos(L)*.12,ge.position.z+=Math.sin(L)*.12}const Ye=Vt(640,480),ae=Tt(Ye,{aniso:4}),fe=new pi({map:ae,toneMapped:!1}),we=new Zt;we.position.set(2.25,0,-1.75),we.rotation.y=-.38,r.add(we);const He=o({map:Tt(io(512,512,5,!1,24,28)),roughness:.42});d(1,.5,.55,.03,He,0,.32,0,we);for(const L of[-.42,.42])l(new Ft(.02,.012,.12,8),ye,L,.03,.18,we);d(1.04,.78,.6,.08,He,0,.98,0,we),d(.74,.6,.05,.05,o({color:"#111",roughness:.4}),-.1,.98,.29,we);const Te=l(new rn(.66,.5,16,12),fe,-.1,.98,.318,we,!1);{const L=Te.geometry.attributes.position;for(let ge=0;ge<L.count;ge++){const Ie=L.getX(ge),Ue=L.getY(ge);L.setZ(ge,.025*(1-Ie*Ie/.11-Ue*Ue/.065))}}l(new rn(.66,.5),new mi({color:"#fff",transparent:!0,opacity:.05,roughness:.02,clearcoat:1}),-.1,.98,.35,we,!1);for(const L of[1.18,1.02,.86]){const ge=l(new Ft(.035,.035,.03,18),ye,.38,L,.3,we);ge.rotation.x=Math.PI/2}for(const L of[-1,1]){const ge=l(new Ft(.006,.006,.6,6),ye,L*.14,1.6,-.05,we);ge.rotation.z=L*-.45}const ze=new vo("#5ad8ff",1.4,3.5,1.5);ze.position.set(1.9,1,-1.2),r.add(ze);const Je=new Zt;Je.position.set(-.78,4.2,p+.35),Je.scale.setScalar(.62),Je.rotation.y=.12,r.add(Je),d(2.25,1.4,.12,.06,o({color:"#1d1410",roughness:.4,metalness:.3}),0,0,0,Je),l(new rn(2.08,1.26),fe,0,0,.065,Je,!1);for(const L of[-1,1])l(new Ft(.01,.01,2.5,6),ye,L*.95,1.9,-.02,Je,!1);const De=new Zt;De.position.set(0,-1.4,.62),r.add(De);const Qe=o({map:Tt(io(1024,512,8,!1,20,24)),roughness:.3,metalness:.05});d(2.1,.08,.8,.02,Qe,0,.78,0,De),d(2.1,.74,.06,.02,Qe,0,.38,.37,De);for(const L of[-1,1])d(.06,.74,.76,.02,Qe,L*1.02,.38,0,De);c(2.06,.05,.02,ye,0,.64,.41,De),c(2.06,.05,.02,ye,0,.12,.41,De);const Ve=Vt(1024,256),Ge=Ve.getContext("2d"),et=()=>{Ge.clearRect(0,0,1024,256),Ge.drawImage(ro("SPIDEY NEWS 24","#ffcf5a","#ff2a6d"),0,0),gt.needsUpdate=!0},gt=Tt(Ve);l(new rn(1,.25),new pi({map:gt,transparent:!0,toneMapped:!1}),0,.38,.405,De,!1);const bt=o({color:"#d7dbe0",metalness:1,roughness:.18}),st=new Zt;st.position.set(.55,.82,.05),De.add(st),l(new Ft(.07,.09,.03,20),bt,0,0,0,st);const wt=l(new Ft(.012,.012,.3,10),bt,-.04,.15,-.04,st);wt.rotation.z=.25;const k=l(new wu(.045,.07,6,16),bt,-.08,.32,-.08,st);k.rotation.x=.6,l(new Ft(.045,.04,.11,20),o({color:"#efe8dc"}),-.8,.875,.1,De);const vt=new Zt;vt.position.set(-.78,.82,-.2),De.add(vt),l(new Ft(.08,.1,.03,20),ye,0,0,0,vt),l(new Ft(.01,.01,.28,8),ye,0,.14,0,vt),l(new Ft(.06,.06,.32,20,1,!0,0,Math.PI),new Ji({color:"#0f6b44",emissive:"#0a3b26",metalness:.3,roughness:.3,side:qt}),0,.3,.02,vt).rotation.set(0,0,Math.PI/2);const C=new vo("#a8ffcf",0,1.6,2);C.position.set(-.78,.98,.45),r.add(C);const y=new Zt;y.position.set(0,-1.6,-.32),r.add(y);const q=new mi({map:Tt(lA()),roughness:.42,clearcoat:.5,clearcoatRoughness:.35});d(.8,.9,.18,.09,q,0,1.05,-.14,y),d(.68,.14,.58,.05,q,0,.53,.12,y);for(const L of[-1,1])d(.1,.1,.5,.04,q,L*.42,.8,.12,y),l(new Ft(.015,.015,.26,8),bt,L*.42,.66,.12,y);l(new Ft(.03,.03,.46,10),bt,0,.25,.12,y);for(let L=0;L<5;L++){const ge=L/5*Math.PI*2,Ie=l(new lr(.04,.03,.34),bt,Math.sin(ge)*.15,.03,.12+Math.cos(ge)*.15,y);Ie.rotation.y=ge}const J=Vt(1200,840),le=Tt(J),D=new rn(.64,.45,24,1);{const L=D.attributes.position;for(let ge=0;ge<L.count;ge++){const Ie=L.getX(ge)/.32;L.setZ(ge,-.05*Ie*Ie)}D.computeVertexNormals()}const xe=new kt(D,new Ji({map:le,color:"#cdc4ad",roughness:.95,side:qt}));xe.castShadow=!0,r.add(new B1("#9ab8ff","#3a1d10",.55));const re=new Rf("#ffd7a8",13,14,.48,.65,1.2);re.position.set(2.2,4.4,3.4),re.castShadow=!0,re.shadow.mapSize.set(nc?1024:2048,nc?1024:2048),re.shadow.bias=-4e-4,re.shadow.normalBias=.02,re.shadow.camera.near=1,re.shadow.camera.far=12,re.target.position.set(0,1,0),r.add(re,re.target);const ce=new Rf("#47c8ff",22,12,.6,.7,1.2);ce.position.set(-2.4,3.3,-1.9),ce.target.position.set(0,1.3,0),r.add(ce,ce.target);const Me=new Rf("#ff4fa3",14,12,.6,.7,1.2);Me.position.set(2.6,2.4,-1.6),Me.target.position.set(0,1.1,0),r.add(Me,Me.target);const H=new V1("#ffe9d6",.45);H.position.set(-3,2,4),r.add(H);const ee=new vo(R==="day"?"#cfe6ff":"#b07cff",1.6,5,1.4);ee.position.set(0,1.8,-2),r.add(ee);const j=_A({hi:!nc});r.add(j.root),j.J.chest.add(xe),xe.visible=!1;const he=Vt(256,256),_e=he.getContext("2d"),pe=_e.createRadialGradient(128,128,10,128,128,128);pe.addColorStop(0,"rgba(0,0,0,.55)"),pe.addColorStop(1,"rgba(0,0,0,0)"),_e.fillStyle=pe,_e.fillRect(0,0,256,256);const b=l(new rn(.9,.6),new pi({map:Tt(he),transparent:!0,depthWrite:!1}),0,.012,.1,r,!1);b.rotation.x=-Math.PI/2;const B=new pi({color:"#ffffff",transparent:!0,opacity:.95,toneMapped:!1}),I=new kt(new Ft(.006,.006,1,6,1,!0),B);I.visible=!1,r.add(I);const ie={t:-1,from:new V,to:new V},ue=()=>{j.J.rWr.getWorldPosition(ie.from);const L=new V;a.getWorldDirection(L),ie.to.copy(a.position).addScaledVector(L,.4).add(new V((Math.random()-.5)*.2,(Math.random()-.5)*.15,0)),ie.t=0,I.visible=!0,n==null||n()},ne=new Zb(i);ne.addPass(new Jb(r,a));const me=new ba(new Be(512,512),.5,.5,1);ne.addPass(me),ne.addPass(new eA);const ve=new Tx(xA);ne.addPass(ve);const de={mode:"talk",news:!1,t:0,px:0,py:0,cam:new V(0,1.2,4),tgt:new V(0,1,0),onair:!1,breaking:0,tv:{mode:"idle",headline:"",source:"",mood:"",country:"",level:0,levels:new Array(48).fill(0)},paperItems:[],paperPage:0,flip:0};let Pe=0;function Ze(){const L=Ye.getContext("2d"),ge=640,Ie=480,Ue=de.tv,at=de.t;L.save();const Rt={idle:["#1a2a6c","#b21f1f"],listen:["#0b3d4a","#11253f"],think:["#2b1055","#7597de"],news:["#0c1530","#1c2f66"],repeat:["#3a0b4a","#0d3b3b"],talk:["#0b2a3a","#2b0b3a"],type:["#2b1d0b","#3a0b1d"]}[Ue.mode]||["#111","#222"],_t=L.createLinearGradient(0,0,ge,Ie);if(_t.addColorStop(0,Rt[0]),_t.addColorStop(1,Rt[1]),L.fillStyle=_t,L.fillRect(0,0,ge,Ie),L.textAlign="center",L.textBaseline="middle",Ue.mode==="news"&&Ue.headline){L.fillStyle=de.breaking>0&&Math.sin(at*8)>0?"#ff1a1a":"#c4111f",L.fillRect(0,0,ge,70),L.fillStyle="#fff",L.font="46px Bangers, Impact",L.fillText(de.breaking>0?"⚡ BREAKING NEWS ⚡":"SPIDEY NEWS 24",ge/2,38),L.fillStyle="#ffcf5a",L.font="28px VT323, monospace",L.textAlign="left",L.fillText(`${Ue.country||"WORLD"} · ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`,20,96),L.textAlign="right",L.fillText(Ue.mood?Ue.mood.toUpperCase():"",ge-20,96),L.textAlign="left",L.fillStyle="#fff",L.font="700 38px Fredoka, sans-serif";const Z=Ue.headline.split(/\s+/);let G="",X=150,Ee=0;for(const Re of Z){const be=G?G+" "+Re:Re;if(L.measureText(be).width>ge-40&&G){if(L.fillText(G,20,X),X+=46,G=Re,++Ee>5)break}else G=be}Ee<=5&&L.fillText(G,20,X),L.fillStyle="rgba(255,255,255,.75)",L.font="26px VT323, monospace",L.fillText("SOURCE: "+(Ue.source||""),20,Ie-30)}else if(Ue.mode==="listen"||Ue.mode==="repeat")Ue.levels.push(Ue.level),Ue.levels.shift(),L.fillStyle="#fff",L.font="54px Bangers, Impact",L.fillText(Ue.mode==="repeat"?"SAY SOMETHING!":"I'M LISTENING…",ge/2,80),Ue.levels.forEach((Z,G)=>{const X=10+Z*260,Ee=20+G*12.5,Re=L.createLinearGradient(0,300-X/2,0,300+X/2);Re.addColorStop(0,"#29e7ff"),Re.addColorStop(1,"#ff2a6d"),L.fillStyle=Re,L.fillRect(Ee,300-X/2,8,X)}),L.font="28px VT323, monospace",L.fillStyle="#ffcf5a",L.fillText(Ue.mode==="repeat"?"TALKING-TOM MODE · I COPY YOU":"ASK ME ANYTHING",ge/2,Ie-50);else if(Ue.mode==="think"){L.fillStyle="#fff",L.font="50px Bangers, Impact",L.fillText("SEARCHING THE WEB…",ge/2,110);for(let Z=0;Z<12;Z++){const G=at*4+Z/12*Math.PI*2;L.fillStyle=`rgba(255,255,255,${(Z+1)/12})`,L.beginPath(),L.arc(ge/2+Math.cos(G)*80,280+Math.sin(G)*80,12,0,7),L.fill()}L.save(),L.translate(ge/2,280),Qi(L,0,0,70,"#ff2a6d"),L.restore()}else["#fff","#ee0","#0ee","#0e0","#e0e","#e00","#00e"].forEach((G,X)=>{L.fillStyle=G,L.fillRect(X*(ge/7),0,ge/7+1,150)}),L.fillStyle="#111",L.fillRect(0,150,ge,Ie-150),L.save(),L.translate(ge/2,300),L.rotate(Math.sin(at)*.1),L.fillStyle="#c4111f",L.beginPath(),L.arc(0,0,95,0,7),L.fill(),Qi(L,0,0,95,"#111"),L.restore(),L.fillStyle="#fff",L.font="56px Bangers, Impact",L.fillText(Ue.mode==="type"?"TYPE TO SPIDEY":"SPIDEY 3D",ge/2,180),L.font="30px VT323, monospace",L.fillStyle="#ffcf5a",L.fillText(new Date().toLocaleTimeString(),ge/2,Ie-40);L.fillStyle="rgba(0,0,0,.22)";for(let Z=0;Z<Ie;Z+=3)L.fillRect(0,Z,ge,1);const w=L.createRadialGradient(ge/2,Ie/2,Ie*.3,ge/2,Ie/2,Ie*.8);w.addColorStop(0,"rgba(0,0,0,0)"),w.addColorStop(1,"rgba(0,0,0,.6)"),L.fillStyle=w,L.fillRect(0,0,ge,Ie);for(let Z=0;Z<300;Z++)L.fillStyle=`rgba(255,255,255,${Math.random()*.12})`,L.fillRect(Math.random()*ge,Math.random()*Ie,2,2);L.restore(),ae.needsUpdate=!0;const N={news:"#6aa8ff",listen:"#29e7ff",repeat:"#d16bff",think:"#9a7bff"}[Ue.mode]||"#ff7a5a";ze.color.set(N)}function ut(L,ge,Ie,Ue,at,Rt,_t){const w=(ge||"").split(/\s+/);let N="",Z=0;for(const G of w){const X=N?N+" "+G:G;if(L.measureText(X).width>at&&N){if(L.fillText(N,Ie,Ue),Ue+=Rt,N=G,++Z>=_t)return Ue}else N=X}return N&&Z<_t&&(L.fillText(N,Ie,Ue),Ue+=Rt),Ue}function wn(){const L=J.getContext("2d"),ge=1200,Ie=840,Ue=de.paperItems,at=de.paperPage,Rt=L.createLinearGradient(0,0,ge,Ie);Rt.addColorStop(0,"#f3e9cc"),Rt.addColorStop(1,"#e1d1a5"),L.fillStyle=Rt,L.fillRect(0,0,ge,Ie);for(let G=0;G<2500;G++)L.fillStyle=`rgba(90,60,20,${Math.random()*.06})`,L.fillRect(Math.random()*ge,Math.random()*Ie,2,2);L.fillStyle="#16120d",L.textAlign="center",L.font='900 96px "Playfair Display", Georgia, serif',L.fillText("THE DAILY WEB",ge/2,100),L.fillRect(30,120,ge-60,6),L.fillRect(30,132,ge-60,2),L.font='italic 700 22px "Playfair Display", Georgia',L.textAlign="left",L.fillText("SPIDEY NEWS 24 · LIVE EDITION",34,162),L.textAlign="right",L.fillText(new Date().toDateString().toUpperCase()+" · PAGE "+(at+1),ge-34,162),L.fillRect(30,176,ge-60,2);const _t=Ue[at*3]||{title:"Fetching the latest news…",desc:"",source:""},w=Ue[at*3+1],N=Ue[at*3+2];L.textAlign="left",L.fillStyle="#16120d",L.font='900 56px "Playfair Display", Georgia, serif';const Z=ut(L,(_t.title||"").toUpperCase(),34,246,720,62,4);L.font="400 24px Georgia, serif",L.fillStyle="#2b251c",ut(L,_t.desc&&_t.desc!==_t.title?_t.desc:"",34,Z+14,720,30,4),L.font="italic 700 20px Georgia",L.fillText("— "+(_t.source||""),34,600),L.save(),L.beginPath(),L.rect(790,200,376,330),L.clip(),L.fillStyle="#d9cba3",L.fillRect(790,200,376,330),L.fillStyle="#2a2a2a";for(let G=0;G<330;G+=8)for(let X=0;X<376;X+=8){const Ee=(Math.sin((X+at*40)*.05)+Math.cos((G+at*70)*.06)+2)/4;L.beginPath(),L.arc(790+X+G/8%2*4,200+G,.7+Ee*3,0,7),L.fill()}L.restore(),L.strokeStyle="#222",L.lineWidth=3,L.strokeRect(790,200,376,330),L.fillRect(30,630,ge-60,4),[[w,34],[N,624]].forEach(([G,X])=>{if(!G)return;L.fillStyle="#16120d",L.font='900 32px "Playfair Display", Georgia';const Ee=ut(L,G.title,X,680,540,36,3);L.font="18px Georgia",L.fillStyle="#2b251c",L.fillText("— "+G.source,X,Math.min(Ee+6,820))}),le.needsUpdate=!0}let dn=1,zn=1;function ki(){const L=Math.tan(o1.degToRad(a.fov/2)),ge=Math.max(.3,(dn-(dn<700?130:220))/zn),[Ie,Ue,at,Rt]=de.news?[1.22,1.22,1.7,0]:[1,2.34,1.25,.1],_t=Math.max(Ue/2/L,at/2/(L*ge));return{pos:new V(de.px*.25,Ie+.12+de.py*-.08,Rt+_t),tgt:new V(0,Ie,Rt)}}const Es=new q1,Fa=new Be,Oa=L=>{const ge=t.getBoundingClientRect();Fa.set((L.clientX-ge.left)/ge.width*2-1,-((L.clientY-ge.top)/ge.height)*2+1),Es.setFromCamera(Fa,a);const Ie=Es.intersectObjects(j.parts,!1)[0];Ie&&(e==null||e(Ie.object.userData.part,Ie))};t.addEventListener("pointerdown",Oa);let oi,Ts=performance.now();function ka(L){oi=requestAnimationFrame(ka);const ge=Math.min(.05,(L-Ts)/1e3);Ts=L,ur(ge,!0)}function ur(L,ge){de.t+=L;const Ie=de.t;j.update(L),j.root.position.z=ao(j.root.position.z,de.news?-.05:.1,4,L),De.position.y=ao(De.position.y,de.news?0:-1.4,3.5,L),y.position.y=ao(y.position.y,de.news?0:-1.6,3.5,L),Je.position.y=ao(Je.position.y,de.news?1.78:4.6,3,L),C.intensity=ao(C.intensity,de.news?.5:0,3,L),b.visible=!de.news,b.position.z=j.root.position.z;const Ue=j.state.readK;if(xe.visible=de.news&&j.state.sitK>.6,xe.position.set(0,-.1-(1-Ue)*.3,.44+(1-Ue)*.12),xe.rotation.set(-.3-(1-Ue)*1.15,0,0),de.flip>0?(de.flip-=L*2.5,xe.scale.x=Math.max(.05,Math.abs(Math.cos((1-Math.max(0,de.flip))*Math.PI))),de.flip<.5&&de.pendingPaper&&(de.pendingPaper=!1,wn())):xe.scale.x=1,ie.t>=0){ie.t+=L;const Rt=Math.min(1,ie.t/.12);j.J.rWr.getWorldPosition(ie.from);const _t=ie.from.clone().lerp(ie.to,Rt),w=ie.from.clone().add(_t).multiplyScalar(.5),N=ie.from.distanceTo(_t);I.position.copy(w),I.scale.set(1,Math.max(.001,N),1),I.quaternion.setFromUnitVectors(new V(0,1,0),_t.clone().sub(ie.from).normalize()),B.opacity=ie.t<.5?.95:Math.max(0,.95-(ie.t-.5)*2),ie.t>1&&(ie.t=-1,I.visible=!1)}$.opacity=de.onair?.75+.25*Math.abs(Math.sin(Ie*3)):.22,te.opacity=.92+(Math.random()>.985?-.5:0)+Math.sin(Ie*9)*.03,ze.intensity=1.1+Math.sin(Ie*13)*.15+Math.random()*.1,de.breaking=Math.max(0,de.breaking-L),ve.uniforms.flash.value=de.breaking>0?.5+.5*Math.sin(Ie*10):0,Pe+=L,Pe>.08&&(Pe=0,Ze());const at=de.dbg||ki();de.cam.lerp(at.pos,1-Math.exp(-L*3)),de.tgt.lerp(at.tgt,1-Math.exp(-L*3)),a.position.copy(de.cam),a.lookAt(de.tgt),ve.uniforms.time.value=Ie,ge&&ne.render(L)}const Bi={spidey:j,camera:a,setMode(L){de.mode=L,de.news=L==="news",j.setSit(de.news),j.setRead(de.news),de.news||(de.onair=!1)},setOnAir(L){de.onair=L},setRead(L){j.setRead(L)},tv(L){Object.assign(de.tv,L)},level(L){de.tv.level=L},breaking(L=4){de.breaking=L},setPaper(L,ge=0){de.paperItems=L,de.paperPage=ge,wn()},flipPage(L){de.paperPage=L,de.flip=1,de.pendingPaper=!0},web:ue,pointer(L,ge){de.px=L,de.py=ge,j.look(L*.9,-ge*.5)},resize(){dn=t.clientWidth||window.innerWidth,zn=t.clientHeight||window.innerHeight,i.setSize(dn,zn,!1),ne.setSize(dn,zn),a.aspect=dn/zn,a.updateProjectionMatrix(),ve.uniforms.res.value.set(dn,zn),me.resolution.set(dn/2,zn/2)},redrawText(){et(),wn(),te.map.dispose(),te.map=Tt(ro("SPIDEY NEWS 24","#ff2a6d","#29e7ff")),te.needsUpdate=!0,$.map=Tt(ro("ON AIR","#ff2020","#ff2020",512,192)),$.needsUpdate=!0,Y.material.map=Tt(Eg()),Y.material.needsUpdate=!0},step(L){for(let ge=0;ge<L/.05;ge++)ur(.05,!1);ur(.016,!0)},step(L){for(let ge=0;ge<L/.05;ge++)ur(.05,!1);ur(.016,!0)},renderIcon(L=1024){const ge=r.children.map(w=>[w,w.visible]);r.children.forEach(w=>{w!==j.root&&!w.isLight&&(w.visible=!1)});const Ie=r.background;r.background=null,i.setClearColor(0,0);const Ue=new Rn(24,1,.05,20),at=new V;j.J.head.getWorldPosition(at),Ue.position.set(at.x+.2,at.y+.2,at.z+1.5),Ue.lookAt(at.x,at.y+.06,at.z);const Rt=i.getPixelRatio();i.setPixelRatio(1),i.setSize(L,L,!1),i.render(r,Ue);const _t=t.toDataURL("image/png");return i.setPixelRatio(Rt),r.background=Ie,ge.forEach(([w,N])=>w.visible=N),Bi.resize(),_t},debugCam(L,ge){de.dbg=L?{pos:new V(...L),tgt:new V(...ge)}:null,L&&(de.cam.copy(de.dbg.pos),de.tgt.copy(de.dbg.tgt))},snapshot(){return ne.render(0),t.toDataURL("image/png")},dispose(){cancelAnimationFrame(oi),t.removeEventListener("pointerdown",Oa),i.dispose()}};Bi.resize(),et(),wn();const Ba=ki();return de.cam.copy(Ba.pos),de.tgt.copy(Ba.tgt),oi=requestAnimationFrame(ka),($r=document.fonts)!=null&&$r.ready&&document.fonts.ready.then(()=>Bi.redrawText()),Bi}const SA=new URLSearchParams(location.search),bx=SA.has("native"),oa={speech:new Set,state:new Set,level:new Set,word:new Set};window.SpideyNative={onSpeech:t=>oa.speech.forEach(e=>e(t)),onSpeechState:t=>oa.state.forEach(e=>e(t)),onLevel:t=>oa.level.forEach(e=>e(t)),onWord:()=>oa.word.forEach(t=>t())};const rl=(t,e)=>(oa[t].add(e),()=>oa[t].delete(e));let ic=null;function qp(){return ic||(ic=new Promise(t=>{const e=()=>{var n;return!!((n=window.flutter_inappwebview)!=null&&n.callHandler)};if(e())return t(!0);if(!bx)return t(!1);window.addEventListener("flutterInAppWebViewPlatformReady",()=>t(!0),{once:!0}),setTimeout(()=>t(e()),4e3)}),ic)}const ls=()=>{var t;return!!((t=window.flutter_inappwebview)!=null&&t.callHandler)};async function xs(t,e={}){if(!await qp())throw new Error("native bridge not available");return window.flutter_inappwebview.callHandler(t,e)}let oo=null;async function MA(){if(oo)return oo;try{oo=await qp()?await xs("capabilities"):{}}catch{oo={}}return oo||{}}let qi=null,lo=null,$s=null,Cr=null,Ys=null;async function yh(){return qi&&qi.active||(qi=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})),qi}function jp(){return lo||(lo=new(window.AudioContext||window.webkitAudioContext)),lo.state==="suspended"&&lo.resume().catch(()=>{}),lo}async function Kp(){const t=await yh(),e=jp();return(!$s||$s.mediaStream!==t)&&($s=e.createMediaStreamSource(t),Cr=e.createAnalyser(),Cr.fftSize=1024,$s.connect(Cr),Ys=new Float32Array(Cr.fftSize)),{ctx:e,src:$s,analyser:Cr}}function Zp(){if(!Cr)return 0;Cr.getFloatTimeDomainData(Ys);let t=0;for(let e=0;e<Ys.length;e++)t+=Ys[e]*Ys[e];return Math.min(1,Math.sqrt(t/Ys.length)*6)}function wA(){try{qi==null||qi.getTracks().forEach(t=>t.stop())}catch{}qi=null,$s=null,Cr=null}function EA({onInterim:t,onFinal:e,onState:n,onError:i,transcribe:r}){const s=window.SpeechRecognition||window.webkitSpeechRecognition,a={want:!1,paused:!1,lang:"en-IN",kind:null,rec:null,restartT:null,fails:0,vad:null};let o=null,l=null;const c=async()=>{o=o||rl("speech",v=>{if(a.paused)return;const _=(v.text||"").trim();_&&(v.final?e(_):t(_))}),l=l||rl("state",v=>n==null?void 0:n(v.listening?"listening":"idle")),await xs("listenStart",{lang:a.lang}),n==null||n("listening")},d=()=>{if(a.rec)return;const v=new s;a.rec=v,v.lang=a.lang,v.continuous=!0,v.interimResults=!0,v.maxAlternatives=1,v.onstart=()=>{a.fails=0,n==null||n("listening")},v.onresult=_=>{if(a.paused)return;let p="";for(let u=_.resultIndex;u<_.results.length;u++){const g=_.results[u],M=g[0].transcript.trim();g.isFinal?M&&e(M):p+=M+" "}p.trim()&&t(p.trim())},v.onerror=_=>{_.error==="not-allowed"||_.error==="service-not-allowed"?(a.want=!1,i==null||i("Microphone permission was blocked. Allow the mic in the browser address bar.")):_.error==="network"&&r?(a.kind="whisper",i==null||i("Browser speech service unreachable – switching to Groq Whisper.")):_.error!=="no-speech"&&_.error!=="aborted"&&a.fails++},v.onend=()=>{a.rec=null,a.want&&!a.paused?(clearTimeout(a.restartT),a.restartT=setTimeout(()=>f(),Math.min(4e3,250+a.fails*600))):n==null||n("idle")};try{v.start()}catch{a.rec=null}},h=async()=>{if(a.vad)return;await yh();const{ctx:v}=await Kp(),_=await yh(),p={on:!0,rec:null,chunks:[],loud:0,quiet:0,started:0};a.vad=p,n==null||n("listening");const u=()=>{if(!p.on)return;const g=Zp(),M=performance.now();if(!a.paused&&(g>.09?(p.loud++,p.quiet=0):(p.quiet++,p.loud=Math.max(0,p.loud-1)),!p.rec&&p.loud>3&&(p.chunks=[],p.rec=new MediaRecorder(_),p.started=M,p.rec.ondataavailable=S=>S.data.size&&p.chunks.push(S.data),p.rec.onstop=async()=>{var E;const S=new Blob(p.chunks,{type:((E=p.rec)==null?void 0:E.mimeType)||"audio/webm"});if(p.rec=null,!(S.size<4e3))try{const T=await r(S,a.lang);T&&T.length>1&&e(T)}catch(T){i==null||i(T.message)}},p.rec.start(),t("…")),p.rec&&(p.quiet>22||M-p.started>12e3)))try{p.rec.stop()}catch{p.rec=null}setTimeout(u,40)};u()};async function f(){if(!(!a.want||a.paused)){if(!a.kind){const v=ls()?await MA():{};if(a.kind=v.stt?"native":s?"web":r?"whisper":"none",a.kind==="none"){i==null||i("This browser has no speech recognition. Use Chrome/Edge, or add a free Groq key in Settings.");return}}if(a.kind==="native")return c().catch(v=>i==null?void 0:i(v.message));if(a.kind==="web")return d();if(a.kind==="whisper")return h().catch(v=>i==null?void 0:i(v.message))}}function m(){var v;if(clearTimeout(a.restartT),a.kind==="native"&&xs("listenStop").catch(()=>{}),a.rec){try{a.rec.abort()}catch{}a.rec=null}if(a.vad){a.vad.on=!1;try{(v=a.vad.rec)==null||v.stop()}catch{}a.vad=null}}return{start(v){v&&(a.lang=v),a.want=!0,a.paused=!1,f()},stop(){a.want=!1,m(),n==null||n("idle")},pause(){a.paused||(a.paused=!0,m())},resume(){a.want&&(a.paused=!1,clearTimeout(a.restartT),a.restartT=setTimeout(f,300))},setLang(v){a.lang=v,a.want&&(m(),setTimeout(f,300))},get kind(){return a.kind},get on(){return a.want}}}function TA({onState:t,onPlayLevel:e}){const n={on:!1,recording:!1,playing:!1,data:[],pre:[],loud:0,quiet:0,node:null,floor:.02,pitch:1.45};let i=null,r=null;async function s(o=1.45){if(n.pitch=o,n.on)return;n.on=!0;const{ctx:l,src:c}=await Kp(),d=l.createScriptProcessor(2048,1,1);n.node=d;const h=l.createGain();h.gain.value=0,c.connect(d),d.connect(h),h.connect(l.destination),d.onaudioprocess=f=>{if(!n.on||n.playing||n.held)return;const m=new Float32Array(f.inputBuffer.getChannelData(0));let v=0;for(let u=0;u<m.length;u++)v+=m[u]*m[u];const _=Math.sqrt(v/m.length);n.recording||(n.floor=n.floor*.97+Math.min(_,.05)*.03);const p=Math.max(.018,n.floor*2.8);if(_>p?(n.loud++,n.quiet=0):n.quiet++,!n.recording)n.pre.push(m),n.pre.length>7&&n.pre.shift(),n.loud>=2&&(n.recording=!0,n.data=[...n.pre],n.pre=[],t==null||t("hearing")),_<=p&&(n.loud=0);else{n.data.push(m);const u=n.data.length*2048/l.sampleRate;if(n.quiet>16||u>10){n.recording=!1,n.loud=0;const g=n.data;n.data=[],u>.45?a(g,l.sampleRate):t==null||t("listening")}}},t==null||t("listening")}function a(o,l){const c=jp(),d=o.reduce((M,S)=>M+S.length,0),h=c.createBuffer(1,d,l),f=h.getChannelData(0);let m=0;for(const M of o)f.set(M,m),m+=M.length;let v=0;for(let M=0;M<d;M++)v=Math.max(v,Math.abs(f[M]));const _=v>0?Math.min(4,.9/v):1;for(let M=0;M<d;M++)f[M]*=_;const p=c.createBufferSource();p.buffer=h,p.playbackRate.value=n.pitch,i||(i=c.createAnalyser(),i.fftSize=512,r=new Float32Array(512),i.connect(c.destination)),p.connect(i),n.playing=!0,t==null||t("playing");let u;const g=()=>{i.getFloatTimeDomainData(r);let M=0;for(let S=0;S<r.length;S++)M+=r[S]*r[S];e==null||e(Math.min(1,Math.sqrt(M/r.length)*5)),u=requestAnimationFrame(g)};g(),p.onended=()=>{cancelAnimationFrame(u),e==null||e(0),setTimeout(()=>{n.playing=!1,n.pre=[],n.loud=0,n.quiet=0,n.on&&(t==null||t("listening"))},350)},p.start()}return{start:s,setPitch(o){n.pitch=o},hold(o){n.held=o,o||(n.pre=[],n.loud=0,n.quiet=0,n.recording=!1,n.data=[])},stop(){var o;n.on=!1,n.recording=!1;try{(o=n.node)==null||o.disconnect()}catch{}n.node=null,t==null||t("idle")},get on(){return n.on},level:Zp}}let Tr=[];const Sh=()=>{Tr=window.speechSynthesis?speechSynthesis.getVoices():[]};"speechSynthesis"in window&&(Sh(),speechSynthesis.onvoiceschanged=Sh);const Rg=()=>Tr,bA=/(Andrew|Brian|Guy|Ryan|Christopher|Eric|Davis|Roger|Steffan|Prabhat|Madhur|Mohan|Rishi|Google UK English Male|Daniel|Aaron|Alex|Fred|Thomas|David|Mark|James|George|Male)/i,AA=/(female|zira|heera|neerja|swara|samantha|susan|hazel|aria|jenny|sonia|libby|natasha|emma|ava|shruti|kalpana)/i;function RA(t,e="en-IN"){if(Tr.length||Sh(),t){const l=Tr.find(c=>c.name===t);if(l)return l}const n=e.toLowerCase(),i=n.slice(0,2),r=Tr.filter(l=>l.lang.toLowerCase().replace("_","-")===n),s=Tr.filter(l=>l.lang.toLowerCase().startsWith(i)),a=l=>(bA.test(l.name)&&!AA.test(l.name)?4:0)+(/natural|online|neural/i.test(l.name)?3:0)+(l.localService?0:1),o=l=>l.slice().sort((c,d)=>a(d)-a(c))[0];return o(r)||o(s)||o(Tr.filter(l=>l.lang.startsWith("en")))||Tr[0]||null}let Mh=null;function CA(t,{lang:e="en-IN",voice:n="",rate:i=1.02,pitch:r=1.08,onLevel:s=()=>{},onWord:a=()=>{}}={}){Sr();const o={cancelled:!1,done:null};Mh=o;const l=String(t||"").replace(/\[[^\]]*\]/g,"").replace(/[*_#`>]/g,"").replace(/https?:\/\/\S+/g,"").trim();if(!l)return Promise.resolve();let c=0,d=setInterval(()=>{o.cancelled||(c*=.82,s(Math.min(1,.32+.45*Math.abs(Math.sin(Date.now()/85))*Math.abs(Math.sin(Date.now()/140+1))+c)))},50);const h=()=>{clearInterval(d),s(0)};if(ls()){const f=rl("level",v=>{o.cancelled||(c=Math.max(c,v*.5))}),m=rl("word",()=>{c=.5,a()});return xs("speak",{text:l,lang:e,rate:i,pitch:r}).catch(()=>{}).finally(()=>{f(),m(),h()})}return"speechSynthesis"in window?new Promise(f=>{let m=!1;const v=()=>{m||(m=!0,h(),f())};o.done=v;const _=(l.match(/[^.!?।\n]+[.!?।]*/g)||[l]).map(M=>M.trim()).filter(Boolean);let p=0;const u=RA(n,e),g=()=>{if(o.cancelled||p>=_.length)return v();const M=new SpeechSynthesisUtterance(_[p++]);u?(M.voice=u,M.lang=u.lang):M.lang=e,M.rate=i,M.pitch=r,M.onboundary=()=>{c=.55,a()},M.onend=g,M.onerror=g,speechSynthesis.speak(M);const S=1500+_[p-1].length*110/i,E=p;setTimeout(()=>{p===E&&!speechSynthesis.speaking&&g()},S)};speechSynthesis.cancel(),setTimeout(g,30)}):(h(),Promise.resolve())}function Sr(){var e;const t=Mh;Mh=null,t&&(t.cancelled=!0,(e=t.done)==null||e.call(t));try{ls()?xs("stopSpeak"):speechSynthesis.cancel()}catch{}}function PA(){try{const t=new SpeechSynthesisUtterance(" ");t.volume=0,speechSynthesis.speak(t)}catch{}}const LA="https://api.groq.com/openai/v1",IA=["llama-3.3-70b-versatile","openai/gpt-oss-120b","meta-llama/llama-4-maverick-17b-128e-instruct","meta-llama/llama-4-scout-17b-16e-instruct","moonshotai/kimi-k2-instruct","openai/gpt-oss-20b","qwen/qwen3-32b","llama-3.1-8b-instant"],NA=["groq/compound","groq/compound-mini"],Cg=["whisper-large-v3-turbo","whisper-large-v3"];let co=null,Pg="";const Jp=t=>t.groqProxy?t.groqProxy.replace(/\/$/,""):LA,Qp=(t,e=!0)=>({...t.groqKey?{Authorization:"Bearer "+t.groqKey}:{},...e?{"Content-Type":"application/json"}:{}}),sl=t=>!!(t.groqKey||t.groqProxy);async function em(t){if(co&&Pg===t.groqKey)return co;try{const e=await fetch(Jp(t)+"/models",{headers:Qp(t,!1)});if(!e.ok)throw new Error("Groq "+e.status+(e.status===401?" – the API key is invalid":""));co=(await e.json()).data.filter(n=>n.active!==!1).map(n=>n.id),Pg=t.groqKey}catch(e){if(/invalid/.test(e.message))throw e;co=[]}return co}async function Ax(t,e){const n=await em(t),i=t.model?[t.model,...e]:e;if(!n.length)return i;const r=i.filter(s=>n.includes(s));return r.length?r:n.filter(s=>!/whisper|tts|guard|orpheus|playai|prompt/i.test(s))}async function DA(t){const e=await em(t);return NA.find(n=>e.includes(n))||null}async function tm(t,e,{pref:n=IA}={}){const i=await Ax(t,n);let r;for(const s of i.slice(0,4))try{const a=await fetch(Jp(t)+"/chat/completions",{method:"POST",headers:Qp(t),body:JSON.stringify({model:s,...e})});if(!a.ok){const l=await a.text();if(r=new Error(`Groq ${a.status}: ${l.slice(0,180)}`),r.status=a.status,r.body=l,a.status===401||a.status===400&&/tool_use_failed|tool call/i.test(l))throw r;continue}const o=await a.json();return o._model=s,o}catch(a){if(r=a,a.status===401||a.status===400&&/tool/.test(a.body||""))throw a}throw r||new Error("No Groq model available")}async function nm(t,e,n={}){var r,s,a;return(((a=(s=(r=(await tm(t,{messages:e,temperature:n.temperature??.6,max_tokens:n.max_tokens??400,...n.json?{response_format:{type:"json_object"}}:{}})).choices)==null?void 0:r[0])==null?void 0:s.message)==null?void 0:a.content)||"").trim()}async function UA(t,e,n="en"){const i=await Ax(t,Cg),r=new FormData;r.append("file",e,"speech.webm"),r.append("model",i.find(a=>/whisper/.test(a))||Cg[0]),r.append("response_format","json"),r.append("language",n.slice(0,2));const s=await fetch(Jp(t)+"/audio/transcriptions",{method:"POST",headers:Qp(t,!1),body:r});if(!s.ok)throw new Error("Whisper "+s.status);return((await s.json()).text||"").trim()}const Aa=[["WORLD","World","🌍","US",""],["IN","India","🇮🇳","IN","india"],["US","United States","🇺🇸","US","unitedstates"],["GB","United Kingdom","🇬🇧","GB","unitedkingdom"],["AU","Australia","🇦🇺","AU","australia"],["CA","Canada","🇨🇦","CA","canada"],["NZ","New Zealand","🇳🇿","NZ","newzealand"],["IE","Ireland","🇮🇪","IE","ireland"],["ZA","South Africa","🇿🇦","ZA","southafrica"],["NG","Nigeria","🇳🇬","NG","nigeria"],["KE","Kenya","🇰🇪","KE","kenya"],["GH","Ghana","🇬🇭","GH","ghana"],["SG","Singapore","🇸🇬","SG","singapore"],["MY","Malaysia","🇲🇾","MY","malaysia"],["PH","Philippines","🇵🇭","PH","philippines"],["PK","Pakistan","🇵🇰","PK","pakistan"],["BD","Bangladesh","🇧🇩","BD","bangladesh"],["LK","Sri Lanka","🇱🇰",null,"srilanka"],["NP","Nepal","🇳🇵",null,"nepal"],["AE","UAE","🇦🇪",null,"unitedarabemirates"],["SA","Saudi Arabia","🇸🇦",null,"saudiarabia"],["IL","Israel","🇮🇱","IL","israel"],["IR","Iran","🇮🇷",null,"iran"],["TR","Turkey","🇹🇷",null,"turkey"],["EG","Egypt","🇪🇬",null,"egypt"],["CN","China","🇨🇳",null,"china"],["JP","Japan","🇯🇵",null,"japan"],["KR","South Korea","🇰🇷",null,"southkorea"],["ID","Indonesia","🇮🇩",null,"indonesia"],["TH","Thailand","🇹🇭",null,"thailand"],["VN","Vietnam","🇻🇳",null,"vietnam"],["RU","Russia","🇷🇺",null,"russia"],["UA","Ukraine","🇺🇦",null,"ukraine"],["DE","Germany","🇩🇪",null,"germany"],["FR","France","🇫🇷",null,"france"],["IT","Italy","🇮🇹",null,"italy"],["ES","Spain","🇪🇸",null,"spain"],["NL","Netherlands","🇳🇱",null,"netherlands"],["BR","Brazil","🇧🇷",null,"brazil"],["MX","Mexico","🇲🇽",null,"mexico"],["AR","Argentina","🇦🇷",null,"argentina"],["QA","Qatar","🇶🇦",null,"qatar"],["ET","Ethiopia","🇪🇹","ET","ethiopia"],["UG","Uganda","🇺🇬","UG","uganda"]].map(([t,e,n,i,r])=>({code:t,name:e,flag:n,ed:i,gd:r})),Ru=t=>{if(!t)return null;const e=t.toLowerCase(),n={usa:"US",america:"US","united states":"US",uk:"GB",britain:"GB",england:"GB",bharat:"IN",hindustan:"IN",dubai:"AE",emirates:"AE",korea:"KR",world:"WORLD",global:"WORLD",international:"WORLD"};for(const[i,r]of Object.entries(n))if(new RegExp(`\\b${i}\\b`).test(e))return Aa.find(s=>s.code===r);return Aa.find(i=>new RegExp(`\\b${i.name.toLowerCase()}\\b`).test(e)||e===i.code.toLowerCase())||null},im=[["top","TOP"],["world","WORLD"],["business","BUSINESS"],["technology","TECH"],["sports","SPORTS"],["entertainment","ENTERTAINMENT"],["science","SCIENCE"],["health","HEALTH"]],FA={top:"",world:"(world OR international)",business:"(business OR economy OR market)",technology:"(technology OR tech OR AI)",sports:"(sports OR cricket OR football)",entertainment:"(film OR music OR celebrity)",science:"(science OR space OR research)",health:"(health OR hospital OR disease)"},cs=t=>(t||"").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/\s+/g," ").trim(),OA=t=>t.toISOString().slice(0,10);let uo=null;async function kA(){if(uo!==null)return uo;try{const t=await fetch("./gnews/rss?hl=en-US&gl=US&ceid=US:en",{cache:"no-store"}),e=await t.text();uo=t.ok&&/<rss|<\?xml/.test(e.slice(0,200))}catch{uo=!1}return uo}async function Rx(t,e={}){if(ls()){const r=await xs("fetchText",{url:t});if(r)return r}const n=[];t.startsWith("https://news.google.com/")&&await kA()&&n.push("./gnews/"+t.slice(24)),e.proxy&&n.push(e.proxy.includes("{url}")?e.proxy.replace("{url}",encodeURIComponent(t)):e.proxy.replace(/\/$/,"")+"/?url="+encodeURIComponent(t)),n.push(t,"https://api.allorigins.win/raw?url="+encodeURIComponent(t),"https://corsproxy.io/?url="+encodeURIComponent(t));let i;for(const r of n)try{const s=new AbortController,a=setTimeout(()=>s.abort(),9e3),o=await fetch(r,{signal:s.signal});if(clearTimeout(a),o.ok){const l=await o.text();if(l&&l.length>50)return l}}catch(s){i=s}throw i||new Error("fetch failed")}function BA({country:t,topic:e="top",query:n="",from:i,to:r,when:s="today"}){const a=t||Aa[1],o=a.ed||"US",l="en",c=`hl=${l}-${o}&gl=${o}&ceid=${o}:${l}`;let d=n;if(!a.ed&&a.code!=="WORLD"&&(d=`${a.name} ${d}`.trim()),e!=="top"&&(d||s!=="today")&&(d=`${d} ${e}`.trim()),s==="past"&&i){const h=new Date(r||i);h.setDate(h.getDate()+1),d=`${d||(a.code==="WORLD"?"world news":a.name+" news")} after:${i} before:${OA(h)}`}else s==="upcoming"?d=`${d||(a.code==="WORLD"?"":a.name)} (upcoming OR "will be held" OR scheduled OR "set to" OR "next week") when:7d`.trim():s==="live"?d=`${d||(a.code==="WORLD"?"news":a.name)} when:1h`:s==="week"&&d?d=`${d} when:7d`:d&&(d=`${d} when:1d`);return d?`https://news.google.com/rss/search?q=${encodeURIComponent(d)}&${c}`:e==="top"||e==="world"&&a.code==="WORLD"?e==="world"?`https://news.google.com/rss/headlines/section/topic/WORLD?${c}`:`https://news.google.com/rss?${c}`:`https://news.google.com/rss/headlines/section/topic/${e.toUpperCase()}?${c}`}function zA(t){return[...new DOMParser().parseFromString(t,"text/xml").querySelectorAll("item")].map(n=>{var o;const i=l=>{var c;return((c=n.querySelector(l))==null?void 0:c.textContent)||""};let r=cs(i("title"));const s=cs(i("source"))||((o=r.match(/ - ([^-]+)$/))==null?void 0:o[1])||"News";r=r.replace(/ - [^-]+$/,"");const a=cs(i("description")).replace(r,"").replace(s,"").trim();return{title:r,desc:a.length>20?a:"",source:s,url:i("link"),time:Date.parse(i("pubDate"))||Date.now()}}).filter(n=>n.title)}async function HA(t,e){return zA(await Rx(BA(t),e))}let Lg=0;async function GA({country:t,topic:e="top",query:n="",from:i,to:r,when:s}){const a=Lg+5500-Date.now();a>0&&await new Promise(f=>setTimeout(f,a)),Lg=Date.now();const o=(n||FA[e]||"").trim()||"news";let l=o.includes(" ")&&!o.startsWith("(")?`"${o}"`:o;t!=null&&t.gd&&(l+=` sourcecountry:${t.gd}`),l+=" sourcelang:english";let c="&timespan="+(s==="live"?"1h":s==="week"||s==="upcoming"?"7d":"1d");if(s==="past"&&i){const f=i.replace(/-/g,""),m=(r||i).replace(/-/g,"");c=`&startdatetime=${f}000000&enddatetime=${m}235959`}const h=await(await fetch(`https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(l)}&mode=artlist&format=json&maxrecords=40&sort=datedesc${c}`)).text();if(!h.startsWith("{"))throw new Error("GDELT: "+h.slice(0,80));return(JSON.parse(h).articles||[]).map(f=>({title:cs(f.title),desc:"",source:f.domain,url:f.url,time:Date.parse(f.seendate.replace(/(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)Z/,"$1-$2-$3T$4:$5:$6Z"))||Date.now()}))}async function Cx(t=new Date){const e=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return((await(await fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/selected/${e}/${n}`)).json()).selected||[]).slice(0,15).map(r=>{var s,a,o,l,c,d;return{title:`${r.year}: ${cs(r.text)}`,desc:((a=(s=r.pages)==null?void 0:s[0])==null?void 0:a.extract)||"",source:"Wikipedia · On this day",url:((d=(c=(l=(o=r.pages)==null?void 0:o[0])==null?void 0:l.content_urls)==null?void 0:c.desktop)==null?void 0:d.page)||"",time:Date.UTC(r.year,t.getMonth(),t.getDate())}})}async function VA(){const t=new Date,e=i=>String(i).padStart(2,"0");return((await(await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${t.getUTCFullYear()}/${e(t.getUTCMonth()+1)}/${e(t.getUTCDate())}`)).json()).news||[]).map(i=>{var r,s,a,o;return{title:cs(i.story).slice(0,180),desc:cs(i.story),source:"Wikipedia · In the news",url:((o=(a=(s=(r=i.links)==null?void 0:r[0])==null?void 0:s.content_urls)==null?void 0:a.desktop)==null?void 0:o.page)||"",time:Date.now()}})}const WA=t=>t.toLowerCase().replace(/[^a-z0-9 ]/g,"").split(" ").slice(0,8).join(" ");function XA(t){const e=new Set;return t.filter(n=>{const i=WA(n.title);return!i||e.has(i)?!1:(e.add(i),!0)})}async function Cu(t,e={}){const n=[];let i=[];try{i=await HA(t,e)}catch(r){n.push("Google News: "+r.message)}if(i.length<6)try{i=i.concat(await GA(t))}catch(r){n.push(r.message)}if(!i.length&&(!t.country||t.country.code==="WORLD")&&t.when!=="past")try{i=await VA()}catch(r){n.push("Wikipedia: "+r.message)}if(t.when==="past"&&t.from&&i.length<3)try{i=i.concat(await Cx(new Date(t.from)))}catch{}if(i=XA(i),t.when!=="past"&&i.sort((r,s)=>s.time-r.time),!i.length)throw new Error("No news found. "+n.join(" | "));return i.slice(0,40)}const wc=t=>(t||"").replace(/<[^>]+>/g,"").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/\s+/g," ").trim();async function Px(t,e="en"){var s,a,o;const i=((s=(await(await fetch(`https://${e}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(t)}&format=json&origin=*&srlimit=3`)).json()).query)==null?void 0:s.search)||[],r=[];for(const l of i.slice(0,2))try{const c=await(await fetch(`https://${e}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(l.title.replace(/ /g,"_"))}`)).json();c.extract&&r.push({title:c.title,snippet:c.extract,source:"Wikipedia",url:(o=(a=c.content_urls)==null?void 0:a.desktop)==null?void 0:o.page})}catch{}return r}async function $A(t){const e=await(await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(t)}&format=json&no_html=1&skip_disambig=1`)).json(),n=[];return e.Answer&&n.push({title:"Answer",snippet:wc(String(e.Answer)),source:"DuckDuckGo"}),e.AbstractText&&n.push({title:e.Heading,snippet:e.AbstractText,source:e.AbstractSource||"DuckDuckGo",url:e.AbstractURL}),e.Definition&&n.push({title:"Definition",snippet:e.Definition,source:e.DefinitionSource||"DuckDuckGo"}),(e.RelatedTopics||[]).slice(0,3).forEach(i=>i.Text&&n.push({title:i.Text.slice(0,60),snippet:i.Text,source:"DuckDuckGo",url:i.FirstURL})),n}async function YA(t,e){const n=await Rx(`https://news.google.com/rss/search?q=${encodeURIComponent(t+" when:30d")}&hl=en-IN&gl=IN&ceid=IN:en`,e);return[...new DOMParser().parseFromString(n,"text/xml").querySelectorAll("item")].slice(0,5).map(r=>{var s,a,o,l,c;return{title:wc((s=r.querySelector("title"))==null?void 0:s.textContent),snippet:wc((a=r.querySelector("title"))==null?void 0:a.textContent),source:wc((o=r.querySelector("source"))==null?void 0:o.textContent)||"Google News",date:(l=r.querySelector("pubDate"))==null?void 0:l.textContent,url:(c=r.querySelector("link"))==null?void 0:c.textContent}})}async function qA(t,e){const n=await fetch("https://api.tavily.com/search",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},body:JSON.stringify({query:t,max_results:5,include_answer:!0,search_depth:"basic"})});if(!n.ok)throw new Error("Tavily "+n.status);const i=await n.json();return[...i.answer?[{title:"Answer",snippet:i.answer,source:"Tavily"}]:[],...(i.results||[]).map(r=>({title:r.title,snippet:r.content,source:new URL(r.url).hostname,url:r.url}))]}async function jA(t,e){var s,a,o;const n=await DA(e);if(!n)return[];const r=(o=(a=(s=(await tm(e,{messages:[{role:"user",content:`Search the web and give the latest facts with dates and sources (max 120 words): ${t}`}],max_tokens:400},{pref:[n]})).choices)==null?void 0:s[0])==null?void 0:a.message)==null?void 0:o.content;return r?[{title:"Web search",snippet:r,source:"Groq web search"}]:[]}async function rm(t,e={}){const n=[];e.tavilyKey?n.push(qA(t,e.tavilyKey)):sl(e)&&n.push(jA(t,e)),n.push($A(t),Px(t),YA(t,e));const r=(await Promise.allSettled(n)).flatMap(a=>a.status==="fulfilled"?a.value:[]),s=new Set;return r.filter(a=>a.snippet&&!s.has(a.snippet.slice(0,80))&&s.add(a.snippet.slice(0,80))).slice(0,10)}const KA=new Set("a an the and or of to in on for with is are was were be by at from as that this it its about what who when where why how tell me news latest today please spidey can you give any some do does did".split(" ")),Ig=t=>(String(t||"").toLowerCase().match(/[\p{L}\p{N}]+/gu)||[]).filter(e=>!KA.has(e)&&e.length>1);function Lx(t,e){const n=t.map(l=>{const c=Ig(e(l)),d=new Map;return c.forEach(h=>d.set(h,(d.get(h)||0)+1)),{d:l,tf:d,len:c.length}}),i=new Map;n.forEach(l=>l.tf.forEach((c,d)=>i.set(d,(i.get(d)||0)+1)));const r=n.reduce((l,c)=>l+c.len,0)/Math.max(1,n.length),s=n.length,a=1.4,o=.75;return(l,c=5)=>{const d=Ig(l);return n.map(h=>{let f=0;for(const m of d){const v=h.tf.get(m)||0;if(!v)continue;const _=i.get(m);f+=Math.log(1+(s-_+.5)/(_+.5))*(v*(a+1))/(v+a*(1-o+o*h.len/r))}return{d:h.d,s:f}}).filter(h=>h.s>0).sort((h,f)=>f.s-h.s).slice(0,c).map(h=>h.d)}}const ZA={sad:"killed kill dead death deaths died dies dying crash crashed flood floods flooding war attack attacked loss injured injuries disaster earthquake tragedy tragic fire blaze collapse murder victims mourn mourning grief missing drown drowned famine poverty layoffs cyclone hurricane tsunami bomb blast shooting suicide funeral sad",happy:"win wins won winning record celebrates celebration launch launched success successful breakthrough award awarded growth rises rise rising gold victory rescue rescued saved hope boost wedding champion champions cure milestone historic peace deal festival happy joy best",surprised:"shock shocking surprise surprising unexpected first-ever mystery mysterious discover discovered discovery rare strange bizarre unusual stunning wow viral alien",serious:"election elections court verdict policy government parliament tax budget talks summit minister president probe investigation law bill vote inflation rate sanctions",excited:"amazing awesome incredible thrilling spectacular unveils unveiled new launch reveal",funny:"funny joke hilarious laugh lol prank meme comedy",scared:"warning alert threat danger dangerous storm virus outbreak pandemic scary"},JA=Object.fromEntries(Object.entries(ZA).map(([t,e])=>[t,new Set(e.split(" "))]));function us(t){const e=String(t||"").toLowerCase().match(/[a-z-]+/g)||[],n={};for(const r of e)for(const[s,a]of Object.entries(JA))a.has(r)&&(n[s]=(n[s]||0)+(s==="sad"?1.4:1));const i=Object.entries(n).sort((r,s)=>s[1]-r[1])[0];return i?i[0]:"neutral"}const sm=["happy","sad","surprised","serious","excited","funny","scared","thinking","neutral","angry"],Ix=["wave","flip","thwip","dance","jump","laugh","superhero","highfive","bow","shrug","facepalm","nod","shake","point","cheer"],Nx={en:"English",hi:"Hindi",te:"Telugu",ta:"Tamil",kn:"Kannada",ml:"Malayalam",mr:"Marathi",bn:"Bengali",gu:"Gujarati",ur:"Urdu",es:"Spanish",fr:"French",de:"German"};function Dx(t){var i;const e=new Date,n=(t.headlines||[]).slice(0,8).map((r,s)=>`${s+1}. ${r.title} (${r.source})`).join(`
`);return`You are Spidey, the friendly neighbourhood Spider-Man: a 3D talking companion (like Talking Tom) and the retro anchor of "Spidey News 24".
Your words are SPOKEN ALOUD by a voice engine, so:
- Reply in 1-4 short sentences (about 70 words max) unless the user asks for detail, a story or a list.
- No markdown, bullets, emojis or URLs. Natural spoken style, warm, witty, Peter-Parker-nerdy, always kind and safe.
- ALWAYS begin with a tag: [emotion] or [emotion|gesture]. emotion is one of ${sm.join(", ")}. gesture (optional) is one of ${Ix.join(", ")}.
- Reply in the user's language (default ${Nx[(t.lang||"en").slice(0,2)]||"English"}).
- Today is ${e.toDateString()}, local time ${e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}. Default country: ${((i=t.country)==null?void 0:i.name)||"India"}.
- For news, current events, sports scores, prices, weather, elections, people in the news, or anything that may have changed recently: CALL A TOOL FIRST. Never invent facts. Briefly name the source.
- Past news: get_news with when="past" and from_date/to_date. "Future" news: when="upcoming" and say these are scheduled or expected events, not predictions.
- If tools give nothing useful, say so honestly and suggest another question.${n?`
Headlines currently on Spidey's TV (you may use them):
${n}`:""}`}const QA=[{type:"function",function:{name:"get_news",description:"Get real news headlines for any country, topic and time (live last hour, today, this week, a past date range, or upcoming scheduled events).",parameters:{type:"object",properties:{country:{type:"string",description:'Country name, or "world"'},topic:{type:"string",enum:im.map(t=>t[0])},query:{type:"string",description:'Optional keywords, e.g. "cricket", "elections", "ISRO"'},when:{type:"string",enum:["live","today","week","past","upcoming"]},from_date:{type:"string",description:"YYYY-MM-DD for past news"},to_date:{type:"string",description:"YYYY-MM-DD for past news"}},required:["when"]}}},{type:"function",function:{name:"web_search",description:"Search the web for facts, recent information, prices, scores, how-to, definitions.",parameters:{type:"object",properties:{query:{type:"string"}},required:["query"]}}},{type:"function",function:{name:"wikipedia",description:"Encyclopedia lookup for people, places, history, science.",parameters:{type:"object",properties:{query:{type:"string"}},required:["query"]}}},{type:"function",function:{name:"on_this_day",description:"Historic events that happened on a calendar day in past years.",parameters:{type:"object",properties:{month:{type:"integer"},day:{type:"integer"}},required:["month","day"]}}}],am=(t,e=280)=>(t||"").length>e?t.slice(0,e)+"…":t||"",So=t=>t.map(e=>({title:e.title,source:e.source,date:e.time?new Date(e.time).toISOString().slice(0,10):e.date,info:am(e.desc||e.snippet)}));async function eR(t,e,n){var r;const i=n.cfg;if(t==="get_news"){const s=e.country?Ru(e.country)||Aa[0]:n.country;let a=await Cu({country:s,topic:e.topic||"top",query:e.query||"",when:e.when||"today",from:e.from_date,to:e.to_date},i);if(e.query){const l=Lx(a,c=>c.title+" "+c.desc)(e.query,8);l.length>=3&&(a=l)}return(r=n.onNews)==null||r.call(n,a,s),JSON.stringify({country:s==null?void 0:s.name,results:So(a.slice(0,8))})}if(t==="web_search")return JSON.stringify(So(await rm(e.query,i)));if(t==="wikipedia")return JSON.stringify(So(await Px(e.query,(n.lang||"en").slice(0,2))));if(t==="on_this_day"){const s=new Date;return s.setMonth((e.month||1)-1,e.day||1),JSON.stringify(So((await Cx(s)).slice(0,8)))}return"[]"}function wh(t){var s;let e=String(t||"").replace(/<think>[\s\S]*?<\/think>/g,"").trim(),n=null,i=null;const r=e.match(/^\s*\[([a-z]+)(?:\s*[|,/]\s*([a-z]+))?\]\s*/i);return r&&(n=r[1].toLowerCase(),i=((s=r[2])==null?void 0:s.toLowerCase())||null,e=e.slice(r[0].length)),e=e.replace(/\[[a-z|, ]+\]/gi,"").replace(/[*#_`]/g,"").trim(),sm.includes(n)||(n=us(e)),i&&!Ix.includes(i)&&(i=null),{text:e,emotion:n,gesture:i}}const Eh=/\b(news|headline|headlines|happening|happened|latest|today|yesterday|tonight|current|live|score|match|election|results?|price|weather|breaking|update|this week|last (week|month|year)|upcoming|next week|(19|20)\d\d)\b/i;async function tR(t,e){const n=Ru(t)||e.country;let i=[];const r=[rm(t,e.cfg)];Eh.test(t)&&r.push(Cu({country:n,topic:"top",query:t.replace(Eh,"").trim().split(/\s+/).length>2?t:"",when:"today"},e.cfg));for(const d of await Promise.allSettled(r))d.status==="fulfilled"&&(i=i.concat(d.value));const a=Lx(i,d=>`${d.title} ${d.desc||""} ${d.snippet||""}`)(t,6),o=a.length?a:i.slice(0,6),l=So(o).map((d,h)=>`[${h+1}] ${d.title} — ${d.info} (${d.source}${d.date?", "+d.date:""})`).join(`
`),c=await nm(e.cfg,[{role:"system",content:Dx(e)},...e.history.slice(-6),{role:"user",content:`CONTEXT (search results):
${l||"(nothing found)"}

QUESTION: ${t}`}],{temperature:.4,max_tokens:350});return wh(c)}const Ng=["Why did Spider-Man join the computer club? He wanted to improve his web design!","What does Spider-Man do before every big fight? He checks his web-site for updates!","Why are spiders great baseball players? They know how to catch flies!","Why did the spider get a job in IT? He was great at the web!"];async function Dg(t,e){var s;const n=t.toLowerCase();if(/^(hi|hello|hey|hai|namaste|good (morning|evening|afternoon))\b/.test(n))return{text:`Hey there! Spidey here, your friendly neighbourhood assistant. Ask me anything, or say "news" and I'll read today's headlines!`,emotion:"happy",gesture:"wave"};if(/(your name|who are you|what are you)/.test(n))return{text:"I'm Spidey! Part superhero, part newsreader, full-time web enthusiast.",emotion:"happy",gesture:"superhero"};if(/\btime\b/.test(n)&&/what|tell/.test(n))return{text:`It's ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})} right now.`,emotion:"neutral",gesture:"nod"};if(/\b(date|day is it|today's date)\b/.test(n))return{text:`Today is ${new Date().toDateString()}.`,emotion:"neutral",gesture:"nod"};if(/joke|funny/.test(n))return{text:Ng[Math.floor(Math.random()*Ng.length)],emotion:"funny",gesture:"laugh"};if(Eh.test(n)){const a=Ru(n)||e.country,o=await Cu({country:a,topic:"top",when:"today"},e.cfg);return(s=e.onNews)==null||s.call(e,o,a),{text:`Top headlines from ${a.name}. ${o.slice(0,3).map((l,c)=>`${c+1}: ${l.title}, from ${l.source}.`).join(" ")}`,emotion:us(o.slice(0,3).map(l=>l.title).join(" ")),gesture:null}}const i=await rm(t,e.cfg).catch(()=>[]),r=i.find(a=>a.source==="Wikipedia"||a.source==="DuckDuckGo")||i[0];if(r){const a=(r.snippet.match(/[^.!?]+[.!?]/g)||[r.snippet]).slice(0,2).join(" ");return{text:`Here's what my spider-sense found on ${r.source}: ${a}`,emotion:"thinking",gesture:"point"}}return{text:"Hmm, my spider-sense came up empty on that one. Add a free Groq key in settings to make me super smart!",emotion:"sad",gesture:"shrug"}}async function nR(t,e){var i,r;if(!sl(e.cfg))return Dg(t,e);const n=[{role:"system",content:Dx(e)},...e.history.slice(-8),{role:"user",content:t}];try{for(let s=0;s<4;s++){const o=(await tm(e.cfg,{messages:n,tools:QA,tool_choice:"auto",temperature:.5,max_tokens:500})).choices[0].message;if((i=o.tool_calls)!=null&&i.length){n.push({role:"assistant",content:o.content||"",tool_calls:o.tool_calls});for(const l of o.tool_calls){let c={};try{c=JSON.parse(l.function.arguments||"{}")}catch{}(r=e.onStatus)==null||r.call(e,l.function.name==="get_news"?"Checking the news…":l.function.name==="web_search"?"Searching the web…":"Looking it up…");let d;try{d=await eR(l.function.name,c,e)}catch(h){d=JSON.stringify({error:h.message})}n.push({role:"tool",tool_call_id:l.id,content:am(d,6e3)})}continue}if(o.content)return wh(o.content)}return wh(await nm(e.cfg,n.filter(s=>s.role!=="tool"&&!s.tool_calls),{max_tokens:300}))}catch(s){if(s.status===401)return{text:"My Groq key was rejected. Please check it in settings.",emotion:"sad",gesture:"shrug",error:s.message};try{return await tR(t,e)}catch(a){try{return await Dg(t,e)}catch{return{text:"My web signal is weak right now. Check the internet and try again!",emotion:"sad",gesture:"shrug",error:a.message}}}}}async function iR(t,e){var r;const n=Nx[(e.lang||"en").slice(0,2)]||"English",i=()=>{var s;return{intro:`Good ${rR()}! This is Spidey News 24, live from ${((s=e.country)==null?void 0:s.name)||"around the world"}.`,stories:t.map(a=>({say:`${a.title}. ${a.desc&&a.desc.length>30?(a.desc.match(/[^.!?]+[.!?]/)||[""])[0]:""} That's from ${a.source}.`,mood:us(a.title+" "+a.desc)})),outro:"That is all for now. Stay webbed, stay informed!"}};if(!sl(e.cfg))return i();try{const s=t.map((l,c)=>`${c+1}. ${l.title} — ${am(l.desc,200)} (source: ${l.source}, ${new Date(l.time).toDateString()})`).join(`
`),a=await nm(e.cfg,[{role:"system",content:`You are Spidey, the friendly Spider-Man anchoring a retro TV newscast "Spidey News 24". Neutral, accurate, warm, a little witty on light stories only, respectful on sad ones. Use ONLY the given stories. Write in ${n}.`},{role:"user",content:`${s}

Return JSON: {"intro":"one short greeting naming ${((r=e.country)==null?void 0:r.name)||"the world"}","stories":[{"say":"1-2 spoken sentences per story, same order, mention the source","mood":"happy|sad|surprised|serious|excited|scared|neutral"}],"outro":"short sign-off with the words stay webbed"}`}],{json:!0,temperature:.5,max_tokens:1400}),o=JSON.parse(a);if(!Array.isArray(o.stories)||o.stories.length<t.length)throw new Error("short bulletin");return o.stories=o.stories.map((l,c)=>typeof l=="string"?{say:l,mood:us(t[c].title)}:{say:l.say,mood:sm.includes(l.mood)?l.mood:us(t[c].title)}),o}catch{return i()}}const rR=()=>{const t=new Date().getHours();return t<12?"morning":t<17?"afternoon":"evening"},zr={strokeLinecap:"round",strokeLinejoin:"round"},sR=()=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsx("path",{d:"M12 14h40a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H30l-12 10v-10h-6a6 6 0 0 1-6-6V20a6 6 0 0 1 6-6z",fill:"#fff"}),F.jsx("g",{stroke:"#1b6fd8",strokeWidth:"4",...zr,children:F.jsx("path",{d:"M20 30v4M27 25v14M34 22v20M41 26v12M48 30v4"})})]}),aR=()=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsxs("g",{fill:"none",stroke:"#fff",strokeWidth:"6",...zr,children:[F.jsx("path",{d:"M14 30a18 18 0 0 1 31-12l5 5"}),F.jsx("path",{d:"M50 34a18 18 0 0 1-31 12l-5-5"})]}),F.jsx("path",{d:"M52 12v14H38z",fill:"#fff"}),F.jsx("path",{d:"M12 52V38h14z",fill:"#fff"}),F.jsx("circle",{cx:"32",cy:"32",r:"7",fill:"#ffe36a",stroke:"#fff",strokeWidth:"3"})]}),oR=()=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsx("rect",{x:"6",y:"16",width:"52",height:"34",rx:"7",fill:"#fff"}),F.jsxs("g",{fill:"#c2410c",children:[[0,1,2,3,4,5].map(t=>F.jsx("rect",{x:12+t*7.3,y:"22",width:"5",height:"5",rx:"1.5"},t)),[0,1,2,3,4].map(t=>F.jsx("rect",{x:15+t*7.3,y:"30",width:"5",height:"5",rx:"1.5"},"b"+t)),F.jsx("rect",{x:"18",y:"39",width:"28",height:"5",rx:"2"})]})]}),lR=()=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsx("g",{stroke:"#fff",strokeWidth:"3.5",...zr,children:F.jsx("path",{d:"M24 6l8 9 8-9",fill:"none"})}),F.jsx("rect",{x:"6",y:"15",width:"52",height:"38",rx:"8",fill:"#fff"}),F.jsx("rect",{x:"11",y:"20",width:"32",height:"28",rx:"5",fill:"#7c1d1d"}),F.jsxs("g",{fill:"#fff",children:[F.jsx("rect",{x:"14",y:"24",width:"18",height:"4",rx:"1"}),F.jsx("rect",{x:"14",y:"31",width:"26",height:"3",rx:"1"}),F.jsx("rect",{x:"14",y:"37",width:"22",height:"3",rx:"1"})]}),F.jsx("circle",{cx:"50",cy:"26",r:"3.5",fill:"#7c1d1d"}),F.jsx("circle",{cx:"50",cy:"36",r:"3.5",fill:"#7c1d1d"}),F.jsx("rect",{x:"47",y:"42",width:"6",height:"2.5",rx:"1",fill:"#7c1d1d"})]}),cR=({off:t})=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsx("rect",{x:"23",y:"6",width:"18",height:"32",rx:"9",fill:"#fff"}),F.jsxs("g",{fill:"none",stroke:"#fff",strokeWidth:"5",...zr,children:[F.jsx("path",{d:"M14 30a18 18 0 0 0 36 0"}),F.jsx("path",{d:"M32 48v9M22 57h20"})]}),t&&F.jsx("path",{d:"M10 10l44 44",stroke:"#fff",strokeWidth:"7",...zr}),t&&F.jsx("path",{d:"M10 10l44 44",stroke:"#b91c1c",strokeWidth:"3",...zr})]}),uR=()=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsx("path",{d:"M22 54c-6-4-10-12-10-20V20a4 4 0 0 1 8 0v10V12a4 4 0 0 1 8 0v18V9a4 4 0 0 1 8 0v21V13a4 4 0 0 1 8 0v26c0 2 2 2 3 0l3-7a4 4 0 0 1 7 4l-6 14c-3 6-8 9-15 9z",fill:"#fff"}),F.jsx("path",{d:"M27 40l4 4 9-9",fill:"none",stroke:"#7e22ce",strokeWidth:"4",...zr})]}),fR=()=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsx("path",{d:"M20 8l12 8 12-8 14 8-4 14-6-2v28H16V28l-6 2-4-14z",fill:"#fff"}),F.jsx("path",{d:"M24 8l8 18 8-18",fill:"#d4151f"}),F.jsx("path",{d:"M26 20l6 4-6 4zM38 20l-6 4 6 4z",fill:"#111"}),F.jsx("circle",{cx:"32",cy:"38",r:"2.5",fill:"#92400e"}),F.jsx("circle",{cx:"32",cy:"46",r:"2.5",fill:"#92400e"})]}),dR=()=>F.jsxs("svg",{viewBox:"0 0 48 48",children:[F.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M24 13a11 11 0 1 0 0 22a11 11 0 1 0 0-22zm0 6.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 1 1 0-9z"}),F.jsx("g",{fill:"#fff",children:[0,45,90,135].map(t=>F.jsx("rect",{x:"20.5",y:"3",width:"7",height:"42",rx:"3",transform:`rotate(${t} 24 24)`},t))}),F.jsx("circle",{cx:"24",cy:"24",r:"4.5",fill:"#4a5f8c"})]}),hR=({stop:t})=>t?F.jsx("svg",{viewBox:"0 0 64 64",children:F.jsx("rect",{x:"16",y:"16",width:"32",height:"32",rx:"6",fill:"#fff"})}):F.jsx("svg",{viewBox:"0 0 64 64",children:F.jsx("path",{d:"M20 12l32 20-32 20z",fill:"#fff"})}),pR=()=>F.jsx("svg",{viewBox:"0 0 64 64",children:F.jsx("path",{d:"M12 14l24 18-24 18zM34 14l20 18-20 18z",fill:"#fff"})}),mR=()=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsx("path",{d:"M8 30L56 10 42 56 30 38z",fill:"#fff"}),F.jsx("path",{d:"M30 38l26-28",stroke:"#c2410c",strokeWidth:"4"})]}),gR=()=>F.jsxs("svg",{viewBox:"0 0 64 64",children:[F.jsx("path",{d:"M10 24h10l14-12v40L20 40H10z",fill:"#fff"}),F.jsx("g",{fill:"none",stroke:"#fff",strokeWidth:"5",...zr,children:F.jsx("path",{d:"M42 22a14 14 0 0 1 0 20M48 14a24 24 0 0 1 0 36"})})]}),vR="./";function _R({onStart:t,loading:e}){return F.jsxs("div",{className:"splash",style:{backgroundImage:`url(${vR}img/spidey-hero.webp)`},children:[F.jsx("div",{className:"splashShade"}),F.jsx("div",{className:"splashWeb"}),F.jsxs("div",{className:"splashTitle",children:[F.jsx("span",{children:"SPIDEY"}),F.jsx("b",{children:"3D"})]}),F.jsx("div",{className:"splashSub",children:"TALK · REPEAT · TYPE · NEWS"}),F.jsx("button",{className:"startBtn",onClick:t,disabled:e,children:e?"LOADING…":"TAP TO START"}),F.jsx("div",{className:"splashNote",children:"🎙️ Mic switches on automatically · 🔒 nothing is stored"})]})}function xR({cfg:t,setCfg:e,onClose:n,onForget:i,onTest:r,info:s}){const a=(c,d)=>h=>e({...t,[c]:h.target.type==="checkbox"?h.target.checked:d?+h.target.value:h.target.value}),[o,l]=qe.useState(Rg());return qe.useEffect(()=>{const c=setTimeout(()=>l(Rg()),600);return()=>clearTimeout(c)},[]),F.jsx("div",{className:"sheet",onClick:c=>c.target===c.currentTarget&&n(),children:F.jsxs("div",{className:"card",children:[F.jsx("h2",{children:"SPIDEY SETTINGS"}),F.jsx("div",{className:"priv",children:"🔒 Privacy: keys, voice and answers stay in memory only and vanish when you close the app — unless you tick “Remember on this device”."}),F.jsx("label",{children:"Groq API key (FREE · console.groq.com/keys) – makes Spidey smart"}),F.jsx("input",{type:"password",value:t.groqKey,onChange:a("groqKey"),placeholder:"gsk_…",autoComplete:"off"}),F.jsx("label",{children:"Tavily key (optional · free 1,000 searches/month · app.tavily.com)"}),F.jsx("input",{type:"password",value:t.tavilyKey,onChange:a("tavilyKey"),placeholder:"tvly-…",autoComplete:"off"}),F.jsxs("div",{className:"row2",children:[F.jsxs("div",{children:[F.jsx("label",{children:"Language (listen + speak)"}),F.jsx("select",{value:t.lang,onChange:a("lang"),children:[["en-IN","English (India)"],["en-US","English (US)"],["en-GB","English (UK)"],["hi-IN","हिन्दी Hindi"],["te-IN","తెలుగు Telugu"],["ta-IN","தமிழ் Tamil"],["kn-IN","ಕನ್ನಡ Kannada"],["ml-IN","മലയാളം Malayalam"],["mr-IN","मराठी Marathi"],["bn-IN","বাংলা Bengali"]].map(([c,d])=>F.jsx("option",{value:c,children:d},c))})]}),F.jsxs("div",{children:[F.jsx("label",{children:"Spidey's voice"}),F.jsxs("select",{value:t.voice,onChange:a("voice"),children:[F.jsx("option",{value:"",children:"Auto (best male voice)"}),o.map(c=>F.jsxs("option",{value:c.name,children:[c.name.replace("Microsoft ","").slice(0,38)," (",c.lang,")"]},c.name))]})]})]}),F.jsxs("div",{className:"row2",children:[F.jsxs("div",{children:[F.jsxs("label",{children:["Voice pitch ",t.pitch.toFixed(2)]}),F.jsx("input",{type:"range",min:"0.6",max:"1.6",step:"0.02",value:t.pitch,onChange:a("pitch",1)})]}),F.jsxs("div",{children:[F.jsxs("label",{children:["Voice speed ",t.rate.toFixed(2)]}),F.jsx("input",{type:"range",min:"0.7",max:"1.5",step:"0.02",value:t.rate,onChange:a("rate",1)})]})]}),F.jsxs("div",{className:"row2",children:[F.jsxs("div",{children:[F.jsx("label",{children:"Repeat style"}),F.jsxs("select",{value:t.repeatStyle,onChange:a("repeatStyle"),children:[F.jsx("option",{value:"tom",children:"Talking-Tom (your voice, funny pitch)"}),F.jsx("option",{value:"voice",children:"Spidey's voice (speech-to-text)"})]})]}),F.jsxs("div",{children:[F.jsxs("label",{children:["Repeat pitch ",t.repeatPitch.toFixed(2)]}),F.jsx("input",{type:"range",min:"0.7",max:"2",step:"0.05",value:t.repeatPitch,onChange:a("repeatPitch",1)})]})]}),F.jsx("label",{children:"Proxy URL (optional – only if Google News is blocked on your host; e.g. your Cloudflare Worker)"}),F.jsx("input",{value:t.proxy,onChange:a("proxy"),placeholder:"https://spidey-proxy.yourname.workers.dev"}),F.jsxs("label",{className:"chk",children:[F.jsx("input",{type:"checkbox",checked:t.captions,onChange:a("captions")})," Show small captions of what Spidey says (off = pure voice)"]}),F.jsxs("label",{className:"chk",children:[F.jsx("input",{type:"checkbox",checked:t.remember,onChange:a("remember")})," Remember settings on this device"]}),F.jsx("div",{className:"info",children:s}),F.jsxs("div",{className:"btns",children:[F.jsx("button",{className:"b gold",onClick:r,children:"🔊 TEST VOICE"}),F.jsx("button",{className:"b red",onClick:n,children:"DONE"})]}),F.jsx("button",{className:"b ghost",onClick:i,children:"Forget everything now"}),F.jsx("small",{children:"Spider-Man is © Marvel. This is a personal fan project for learning – do not publish commercially."})]})})}const yR=[["wave","👋","Wave"],["flip","🤸","Back-flip"],["thwip","🕸️","Shoot web"],["dance","🕺","Dance"],["jump","⬆️","Jump"],["laugh","😂","Laugh"],["superhero","🦸","Hero pose"],["highfive","✋","High five"],["bow","🙇","Bow"],["shrug","🤷","Shrug"],["facepalm","🤦","Facepalm"],["joke","🎤","Tell a joke"]];function SR({onPick:t,onClose:e}){return F.jsx("div",{className:"pop fun",onClick:n=>n.target===n.currentTarget&&e(),children:F.jsx("div",{className:"popCard",children:yR.map(([n,i,r])=>F.jsxs("button",{className:"funBtn",onClick:()=>t(n),children:[F.jsx("span",{children:i}),r]},n))})})}function MR({value:t,onPick:e,onClose:n}){const[i,r]=qe.useState(""),s=Aa.filter(a=>a.name.toLowerCase().includes(i.toLowerCase()));return F.jsx("div",{className:"sheet",onClick:a=>a.target===a.currentTarget&&n(),children:F.jsxs("div",{className:"card countries",children:[F.jsx("h2",{children:"PICK A COUNTRY"}),F.jsx("input",{placeholder:"Search country…",value:i,onChange:a=>r(a.target.value)}),F.jsx("div",{className:"cgrid",children:s.map(a=>F.jsxs("button",{className:"cbtn"+(t===a.code?" sel":""),onClick:()=>e(a),children:[F.jsx("span",{children:a.flag}),a.name]},a.code))})]})})}function wR({news:t,setNews:e,onAir:n,onToggleAir:i,onNext:r,onCountry:s,clock:a}){const o=[["live","🔴 LIVE"],["today","TODAY"],["week","WEEK"],["past","📅 PAST"],["upcoming","⏭ UPCOMING"]];return F.jsxs("div",{className:"newsbar",children:[F.jsxs("div",{className:"nbRow",children:[F.jsxs("button",{className:"ctry",onClick:s,children:[F.jsx("span",{children:t.country.flag}),t.country.name,F.jsx("i",{children:"▾"})]}),F.jsx("div",{className:"clock",children:a}),F.jsxs("button",{className:"air"+(n?" on":""),onClick:i,children:[F.jsx(hR,{stop:n}),n?"STOP":"ON AIR"]}),n&&F.jsxs("button",{className:"air next",onClick:r,children:[F.jsx(pR,{}),"NEXT"]})]}),F.jsx("div",{className:"nbRow chips",children:im.map(([l,c])=>F.jsx("button",{className:"chip"+(t.topic===l?" sel":""),onClick:()=>e({topic:l}),children:c},l))}),F.jsxs("div",{className:"nbRow chips",children:[o.map(([l,c])=>F.jsx("button",{className:"chip when"+(t.when===l?" sel":""),onClick:()=>e({when:l}),children:c},l)),t.when==="past"&&F.jsx("input",{type:"date",className:"date",value:t.from,max:new Date().toISOString().slice(0,10),min:"2015-01-01",onChange:l=>e({from:l.target.value})})]})]})}function ER({data:t}){return t?F.jsxs("div",{className:"lower"+(t.breaking?" brk":""),children:[F.jsx("div",{className:"tag",children:t.breaking?"⚡ BREAKING":t.tag||"NEWS"}),F.jsx("div",{className:"head",children:t.title}),F.jsxs("div",{className:"meta",children:[t.source,t.time?" · "+new Date(t.time).toLocaleString([],{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):"",t.mood?" · "+t.mood:""]})]},t.title):null}function TR({items:t}){const e=t.length?t.map(n=>n.title).join("   🕷   "):"Fetching the latest headlines…";return F.jsxs("div",{className:"ticker",children:[F.jsx("div",{className:"tkLabel",children:"SN24"}),F.jsx("div",{className:"tkTrack",children:F.jsxs("div",{className:"tk",style:{animationDuration:Math.max(40,e.length/9)+"s"},children:[e,"   🕷   ",e]},e.length)})]})}function bR({text:t,onSpeak:e,onDone:n}){const[i,r]=qe.useState(0);return qe.useEffect(()=>{if(r(0),!t)return;let s=0;const a=setInterval(()=>{s+=2,r(s),s>=t.length&&(clearInterval(a),n==null||n())},32);return()=>clearInterval(a)},[t]),t?F.jsxs("div",{className:"bubble",children:[F.jsx("div",{className:"bTitle",children:"SPIDEY SAYS!"}),F.jsxs("div",{className:"bText",children:[t.slice(0,i),F.jsx("span",{className:"caret",children:"▌"})]}),F.jsx("button",{className:"bSpeak",onClick:e,title:"Read aloud",children:F.jsx(gR,{})})]}):null}function AR({onSend:t,busy:e}){const[n,i]=qe.useState(""),r=()=>{n.trim()&&!e&&(t(n.trim()),i(""))};return F.jsxs("div",{className:"typebar",children:[F.jsx("input",{value:n,onChange:s=>i(s.target.value),onKeyDown:s=>s.key==="Enter"&&r(),placeholder:e?"Spidey is thinking…":"Type your question for Spidey…"}),F.jsx("button",{onClick:r,disabled:e,children:F.jsx(mR,{})})]})}function RR({id:t}){if(!t)return null;const e=20+t*37%60,n=18+t*53%50;return F.jsxs("div",{className:"splat",style:{left:e+"%",top:n+"%"},children:[F.jsxs("svg",{viewBox:"0 0 200 200",children:[[...Array(12)].map((i,r)=>{const s=r/12*Math.PI*2;return F.jsx("path",{d:`M100 100L${100+95*Math.cos(s)} ${100+95*Math.sin(s)}`},r)}),[18,36,56,78].map(i=>F.jsx("polygon",{points:[...Array(12)].map((r,s)=>{const a=s/12*Math.PI*2,o=i*(s%2?.9:1);return`${100+o*Math.cos(a)},${100+o*Math.sin(a)}`}).join(" ")},i))]}),F.jsx("b",{children:"THWIP!"})]},t)}const Ec="spidey3d.cfg",Tc={groqKey:"",tavilyKey:"",groqProxy:"",proxy:"",model:"",lang:"en-IN",voice:"",rate:1.02,pitch:1.1,repeatPitch:1.45,repeatStyle:"tom",captions:!1,remember:!1},CR=()=>{try{const t=localStorage.getItem(Ec);return t?{...Tc,...JSON.parse(t),remember:!0}:Tc}catch{return Tc}},Of=t=>new Promise(e=>setTimeout(e,t)),rc=t=>t[Math.floor(Math.random()*t.length)],PR=[["talk","TALK",sR,"blue"],["repeat","REPEAT",aR,"purple"],["type","TYPE",oR,"orange"],["news","NEWS",lR,"red"]],Ug={head:["ouch",["Ouch! Watch the mask!","Hey, my spider-sense is tingling!","Not the head, I need that for science!"]],body:["tickle",["Hehe, that tickles!","Ha ha, stop it!","Careful, this suit is dry-clean only!"]],arm:["superhero",["Feel those web-slinging muscles!","Strong arms, strong heart!"]],hand:["highfive",["High five!","Up top, buddy!"]],leg:["hop",["Ow ow ow!","Hey, these legs climb walls!"]],foot:["hop",["My toes! My poor toes!","Yikes, that was my foot!"]]};function LR(){const t=qe.useRef(),e=qe.useRef(),n=qe.useRef(),[i,r]=qe.useState(!1),s=qe.useRef(!1),[a,o]=qe.useState(CR),l=qe.useRef(a);l.current=a;const[c,d]=qe.useState("talk"),h=qe.useRef("talk"),[f,m]=qe.useState(!0),v=qe.useRef(!0),[_,p]=qe.useState(""),[u,g]=qe.useState(!1),M=qe.useRef(!1),[S,E]=qe.useState(""),[T,R]=qe.useState(""),[x,A]=qe.useState(""),[P,U]=qe.useState(0),[z,W]=qe.useState(null),[O,K]=qe.useState({country:Aa[1],topic:"top",when:"today",from:new Date(Date.now()-864e5*365).toISOString().slice(0,10),items:[]}),se=qe.useRef(O);se.current=O;const[te,$]=qe.useState(null),[Y,Q]=qe.useState(!1),oe=qe.useRef(!1);oe.current=Y;const ye=qe.useRef(0),Ce=qe.useRef(!1),je=qe.useRef(0),We=qe.useRef(0),Ye=qe.useRef(new Set),[ae,fe]=qe.useState(""),[we,He]=qe.useState(""),Te=qe.useRef([]),ze=qe.useRef(null),Je=qe.useRef(null),De=b=>{A(b),clearTimeout(De.t),De.t=setTimeout(()=>A(""),4500)},Qe=b=>{o(b);try{b.remember?localStorage.setItem(Ec,JSON.stringify(b)):localStorage.removeItem(Ec)}catch{}},Ve=()=>e.current,Ge=()=>{var b;return(b=e.current)==null?void 0:b.spidey};qe.useEffect(()=>{const b=yA(t.current,{onPoke:ue=>ce(ue),onWeb:()=>U(1+Date.now()%1e5)});e.current=b,window.stage=b;const B=()=>b.resize(),I=ue=>b.pointer((ue.clientX/innerWidth-.5)*2,(ue.clientY/innerHeight-.5)*2);addEventListener("resize",B),addEventListener("pointermove",I);const ie=setInterval(()=>fe(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),1e3);return qp().then(async ue=>{if(ue)try{const ne=await xs("config");ne!=null&&ne.groqKey&&!l.current.groqKey&&Qe({...l.current,groqKey:ne.groqKey,tavilyKey:ne.tavilyKey||""})}catch{}}),bx&&setTimeout(()=>vt(),1500),()=>{removeEventListener("resize",B),removeEventListener("pointermove",I),clearInterval(ie),b.dispose()}},[]),qe.useEffect(()=>{let b;const B={v:0},I=rl("level",ue=>{B.v=ue}),ie=()=>{var ne,me;b=requestAnimationFrame(ie);const ue=ls()?B.v:Zp();(ne=n.current)==null||ne.style.setProperty("--lv",v.current?ue.toFixed(3):0),(me=Ve())==null||me.level(ue)};return ie(),()=>{cancelAnimationFrame(b),I()}},[]);async function et(b,{emotion:B="neutral",gesture:I=null,beats:ie=!0,captions:ue=!0}={}){var ut,wn,dn,zn,ki;const ne=Ve(),me=Ge();if(!ne||!b)return;const ve=++We.current;(ut=ze.current)==null||ut.pause(),(wn=Je.current)==null||wn.hold(!0),me.setListening(!1),me.stop("listen"),me.setEmotion(B);const de=h.current==="news",Pe=I||(B!=="neutral"?(dn=bg[B])==null?void 0:dn[de?1:0]:null);Pe&&me.play(Pe,{onEvent:gt}),l.current.captions&&ue&&R(b),p("🗣️ Speaking");const Ze=setInterval(()=>{ie&&!me.playing&&me.play(rc(de?["present","beat1","beat4","nod"]:gA))},2400);await CA(b,{lang:l.current.lang,voice:l.current.voice,rate:l.current.rate,pitch:l.current.pitch,onLevel:Es=>me.setTalk(Es)}),clearInterval(Ze),me.setTalk(0),ve===We.current&&(R(""),p(""),setTimeout(()=>{ve===We.current&&me.setEmotion("neutral")},4500),v.current&&(h.current==="repeat"&&l.current.repeatStyle==="tom"?(zn=Je.current)==null||zn.hold(!1):(ki=ze.current)==null||ki.resume()))}function gt(b){var B,I;b==="web"&&((B=Ve())==null||B.web()),b==="flip"&&((I=Ve())==null||I.flipPage(je.current))}function bt(){ze.current=EA({onInterim:b=>{if(M.current)return;const B=Ge();B&&(h.current!=="news"&&!B.playing&&B.play("listen",{hold:!0}),B.setListening(!0),p("👂 "+b.slice(-42)))},onFinal:b=>{const B=Ge();B==null||B.setListening(!1),B==null||B.stop("listen"),p(""),D(b)},onError:b=>De(b),transcribe:(b,B)=>sl(l.current)?UA(l.current,b,B):Promise.resolve("")}),Je.current=TA({onState:b=>{const B=Ge();B&&(b==="hearing"&&(B.play("listen",{hold:!0}),B.setEmotion("listening"),p("👂 Hearing you…")),b==="playing"&&(B.stop("listen"),B.setEmotion("funny"),B.play(rc(["beat2","laugh","beat1","dance"])),p("🔁 Repeating!")),b==="listening"&&(B.stop("listen"),B.setEmotion("neutral"),p("🔁 Say something!")))},onPlayLevel:b=>{var B;return(B=Ge())==null?void 0:B.setTalk(Math.min(1,b*1.6))}})}async function st(b=h.current){v.current&&(ls()||Kp().catch(()=>De("Microphone blocked – click the 🔒 icon in the address bar and allow the mic.")),b==="repeat"&&l.current.repeatStyle==="tom"?(ze.current.stop(),await Je.current.start(l.current.repeatPitch).catch(B=>De(B.message))):(Je.current.stop(),ze.current.start(l.current.lang)))}function wt(){var b,B;(b=ze.current)==null||b.stop(),(B=Je.current)==null||B.stop(),ls()||wA()}function k(){const b=!v.current;v.current=b,m(b),b?(st(),De("🎙️ Mic on – I'm listening!")):(wt(),p(""),De("🔇 Mic off"))}async function vt(){if(!s.current){s.current=!0,PA();try{jp()}catch{}r(!0),bt(),ct(l.current),Ve().setMode("talk"),Ve().tv({mode:"idle"}),st("talk"),await et("Hey! I'm Spidey, your friendly neighbourhood assistant. Just talk to me, poke me, or tap the icons on the left!",{emotion:"happy",gesture:"hello"})}}function ct(b){if(!sl(b))return He("ℹ️ No Groq key: Spidey uses the free offline brain (Wikipedia + DuckDuckGo + live news). Add a free key for full AI.");em(b).then(B=>He(B.length?`✅ Groq connected · ${B.length} models available`:"⚠️ Groq not reachable from this network – using the offline brain")).catch(B=>He("⚠️ "+B.message))}async function C(b){if(b===h.current)return;ye.current++,Q(!1),Sr(),$(null),E(""),We.current++,h.current=b,d(b),W(null),p(""),R("");const B=Ve();if(B.setMode(b),B.tv({mode:b==="repeat"?"repeat":b==="news"?"news":b==="type"?"type":"idle"}),v.current&&st(b),b==="news"){H(!0).then(ie=>ie.length&&h.current==="news"&&j(ie));return}const I={talk:["Talk mode! Ask me anything – news, science, jokes, you name it.","happy","wave"],repeat:["Repeat mode! Say something and I'll copy you, Talking-Tom style!","funny","laugh"],type:["Type mode! Write your question below and I'll write back.","happy","point"]}[b];I&&et(I[0],{emotion:I[1],gesture:I[2]})}const y=()=>({cfg:l.current,history:Te.current,country:se.current.country,lang:l.current.lang,headlines:se.current.items,onStatus:b=>p("🔎 "+b),onNews:(b,B)=>{h.current==="news"&&Me(b,B)}});function q(b,B){Te.current.push({role:"user",content:b},{role:"assistant",content:B}),Te.current.length>16&&Te.current.splice(0,Te.current.length-16)}async function J(b,{text:B=!1}={}){var ne,me,ve;if(M.current)return;M.current=!0,g(!0);const I=Ve(),ie=Ge();ie.play("think",{hold:!0}),ie.setEmotion("thinking"),I.tv({mode:"think"}),p("💭 Thinking…"),E(""),(ne=ze.current)==null||ne.pause();let ue;try{ue=await nR(b,y())}catch(de){ue={text:"Oops, my web got tangled. Try again!",emotion:"sad",gesture:"shrug"},De(de.message)}if(ue.error&&De(ue.error),ie.stop("think"),I.tv({mode:h.current==="news"?"news":h.current==="type"?"type":"idle"}),q(b,ue.text),M.current=!1,g(!1),p(""),B){E(ue.text),ie.setEmotion(ue.emotion);const de=ue.gesture||((me=bg[ue.emotion])==null?void 0:me[h.current==="news"?1:0]);de&&ie.play(de,{onEvent:gt});let Pe=0;const Ze=setInterval(()=>ie.setTalk(.2+.3*Math.abs(Math.sin(Pe++/2))),60);setTimeout(()=>{clearInterval(Ze),ie.setTalk(0)},Math.min(9e3,ue.text.length*16+400)),v.current&&((ve=ze.current)==null||ve.resume())}else await et(ue.text,{emotion:ue.emotion,gesture:ue.gesture})}function le(b){const B=b.toLowerCase().trim(),I=ie=>ie.test(B);if(I(/\b(repeat|copy|mimic|talking tom)\b.*\bmode\b|^repeat after me|^copy me/))return C("repeat"),!0;if(I(/\b(type|typing|text|chat)\b.*\bmode\b/))return C("type"),!0;if(I(/\btalk(ing)? mode\b|^talk to me$/))return C("talk"),!0;if(I(/\bnews ?(mode|reader|channel)\b|^(read|start|tell)( me)? (the )?news$|^news$|^(open|show) (the )?news/))return C("news"),!0;if(I(/\b(mic|microphone) off\b|turn off (the )?(mic|microphone)/))return k(),!0;if(I(/^(stop|quiet|silence|shut up|be quiet|pause)\b/))return ye.current++,Q(!1),Sr(),!0;if(h.current==="news"&&I(/^(next|skip)\b/))return Ce.current=!0,Sr(),!0;if(I(/\b(back ?flip|somersault)\b|^(do a )?flip$/))return xe("flip"),!0;if(I(/^(do a |let'?s )?dance\b/))return xe("dance"),!0;if(I(/\b(shoot|sling)\b.*\bweb\b|\bthwip\b|web shooter/))return xe("thwip"),!0;if(I(/^(wave|say hi|say hello)\b/))return xe("wave"),!0;if(I(/^(do a )?jump\b/))return xe("jump"),!0;if(I(/\bchange (your )?(suit|outfit|clothes|dress|costume)\b|new (suit|outfit)/))return re(),!0;if(h.current==="news"){const ie=Ru(B),ue=im.find(([ne])=>new RegExp(`\\b${ne==="technology"?"tech(nology)?":ne}\\b`).test(B));if((ie||ue)&&/\bnews\b/.test(B)&&B.split(" ").length<=6)return ee({...ie?{country:ie}:{},...ue?{topic:ue[0]}:{}}),!0}return!1}function D(b){if(!(!b||M.current)){if(h.current==="repeat"){l.current.repeatStyle==="voice"&&et(b,{emotion:"funny"});return}le(b)||(h.current==="news"&&(ye.current++,Q(!1),Sr()),J(b,{text:h.current==="type"}))}}function xe(b){W(null);const B=Ge();if(b==="joke")return J("Tell me a short funny Spider-Man joke",{text:h.current==="type"});if(h.current==="news"&&["flip","jump","hop"].includes(b))return et("Not at the news desk! Switch to talk mode and I'll show you.",{emotion:"funny",gesture:"shake"});B.play(b,{onEvent:gt});const I={flip:"Whee!",thwip:"Thwip!",dance:"Check out these moves!",wave:"Hi there!",jump:"Boing!",superhero:"Your friendly neighbourhood Spider-Man!",highfive:"High five!",bow:"Thank you, thank you!",laugh:"Ha ha ha!",shrug:"Who knows?",facepalm:"Oh, come on!"};I[b]&&setTimeout(()=>et(I[b],{emotion:b==="facepalm"?"sad":"happy",beats:!1}),250)}function re(){const b=Ge().nextOutfit();h.current!=="news"&&Ge().play("superhero"),et(`How do I look in my ${b.toLowerCase()} outfit?`,{emotion:"happy",beats:!1})}function ce(b){if(!s.current||M.current)return;const B=Ge();let[I,ie]=Ug[b]||Ug.body;h.current==="news"&&I==="hop"&&(I="laugh"),B.play(I,{onEvent:gt}),B.setEmotion(I==="ouch"||I==="hop"?"ouch":"funny"),!(h.current==="repeat"&&l.current.repeatStyle==="tom")&&et(rc(ie),{emotion:I==="ouch"||I==="hop"?"surprised":"funny",gesture:I,beats:!1,captions:!1})}function Me(b,B){var ie,ue;const I=B||se.current.country;se.current={...se.current,items:b,country:I},K(ne=>({...ne,items:b,country:I})),(ie=Ve())==null||ie.setPaper(b,0),je.current=0,b[0]&&((ue=Ve())==null||ue.tv({mode:"news",headline:b[0].title,source:b[0].source,country:I.name.toUpperCase(),mood:us(b[0].title)}))}async function H(b=!1,B=se.current){b&&p("📰 Fetching "+B.country.name+" news…");try{const I=await Cu({country:B.country,topic:B.topic,when:B.when,from:B.from,to:B.from},l.current);b&&(Ye.current=new Set);const ie=I.filter(ue=>!Ye.current.has(ue.title));return I.forEach(ue=>Ye.current.add(ue.title)),(b||ie.length)&&Me(I,B.country),b&&p(""),b?I:ie}catch(I){return De(I.message),p(""),[]}}function ee(b){const B={...se.current,...b};se.current=B,K(B),W(null),ye.current++,Sr(),H(!0,B).then(I=>I.length&&h.current==="news"&&j(I))}qe.useEffect(()=>{if(c!=="news"||O.when==="past")return;const b=setInterval(async()=>{const B=await H(!1);if(B.length&&B.length<10&&!M.current){const I=B[0];Ve().breaking(5),$({title:I.title,source:I.source,time:I.time,breaking:!0}),oe.current||et(`Breaking news! ${I.title}. From ${I.source}.`,{emotion:us(I.title)==="sad"?"sad":"surprised"})}},6e4);return()=>clearInterval(b)},[c,O.when,O.country,O.topic]);async function j(b){const B=++ye.current,I=()=>ye.current===B&&h.current==="news",ie=(b||se.current.items).slice(0,8);if(!ie.length)return;Q(!0),Ve().setOnAir(!0),Ve().setRead(!0),p("📝 Spidey is reading the paper…");const ue=await iR(ie,y());if(I()&&(Ve().setRead(!1),p(""),$({title:`SPIDEY NEWS 24 · ${se.current.country.name.toUpperCase()}`,source:{live:"Live – last hour",today:"Today",week:"This week",past:"From "+se.current.from,upcoming:"Upcoming & scheduled events"}[se.current.when],tag:"ON AIR"}),await et(ue.intro,{emotion:"happy",gesture:"present"}),!!I())){for(let ne=0;ne<ie.length;ne++){if(!I())return;const me=ie[ne],ve=ue.stories[ne]||{say:me.title,mood:"neutral"},de=Math.floor(ne/3);if(de!==je.current&&(je.current=de,Ge().play("pageflip",{onEvent:gt}),await Of(900)),Ve().tv({mode:"news",headline:me.title,source:me.source,country:se.current.country.name.toUpperCase(),mood:ve.mood}),$({title:me.title,source:me.source,time:me.time,tag:`STORY ${ne+1}/${ie.length}`,mood:ve.mood}),Ve().setRead(!0),await Of(1300),!I())return;Ve().setRead(!1),Ce.current=!1,await et(ve.say,{emotion:ve.mood,gesture:ve.mood==="neutral"?"present":null}),await Of(Ce.current?50:350)}I()&&($(null),await et(ue.outro,{emotion:"happy",gesture:"bow"}),I()&&(Q(!1),Ve().setOnAir(!1),Ve().setRead(!0)))}}function he(){Y?(ye.current++,Q(!1),Ve().setOnAir(!1),Sr()):j()}const _e=()=>{try{localStorage.removeItem(Ec)}catch{}Te.current=[],Qe({...Tc,groqKey:"",tavilyKey:""}),De("🧹 Everything forgotten")};qe.useEffect(()=>{var b;s.current&&h.current!=="repeat"&&((b=ze.current)==null||b.setLang(a.lang))},[a.lang]),qe.useEffect(()=>{var b;(b=Je.current)==null||b.setPitch(a.repeatPitch)},[a.repeatPitch]),qe.useEffect(()=>{s.current&&ct(a)},[a.groqKey]);const pe={talk:"TALK MODE",repeat:"REPEAT MODE",type:"TYPE MODE",news:"SPIDEY NEWS 24"}[c];return F.jsxs(F.Fragment,{children:[F.jsx("canvas",{ref:t,className:"stage"}),!i&&F.jsx(_R,{onStart:vt}),i&&F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"topbar",children:[F.jsx("div",{className:"modeBadge "+c,children:pe}),_&&F.jsx("div",{className:"status",children:_})]}),F.jsx("div",{className:"dock left",children:PR.map(([b,B,I,ie])=>F.jsxs("button",{className:`tile ${ie}${c===b?" active":""}`,onClick:()=>C(b),"aria-label":B,children:[F.jsx(I,{}),F.jsx("span",{className:"lbl",children:B})]},b))}),F.jsxs("div",{className:"dock right",children:[F.jsxs("button",{ref:n,className:"tile mic "+(f?"green on":"gray"),onClick:k,"aria-label":"Microphone",children:[F.jsx(cR,{off:!f}),F.jsx("span",{className:"lbl",children:f?"MIC ON":"MIC OFF"})]}),F.jsxs("button",{className:"tile purple",onClick:()=>W(z==="fun"?null:"fun"),"aria-label":"Actions",children:[F.jsx(uR,{}),F.jsx("span",{className:"lbl",children:"ACTIONS"})]}),F.jsxs("button",{className:"tile gold",onClick:re,"aria-label":"Outfit",children:[F.jsx(fR,{}),F.jsx("span",{className:"lbl",children:"SUIT"})]}),F.jsxs("button",{className:"tile steel",onClick:()=>W("settings"),"aria-label":"Settings",children:[F.jsx(dR,{}),F.jsx("span",{className:"lbl",children:"SETUP"})]})]}),c==="news"&&F.jsx(wR,{news:O,setNews:ee,onAir:Y,onToggleAir:he,onNext:()=>{Ce.current=!0,Sr()},onCountry:()=>W("country"),clock:ae}),c==="news"&&F.jsxs(F.Fragment,{children:[F.jsx(ER,{data:te}),F.jsx(TR,{items:O.items})]}),c==="type"&&F.jsxs(F.Fragment,{children:[F.jsx(bR,{text:S,onSpeak:()=>et(S,{emotion:"happy"})}),F.jsx(AR,{onSend:b=>J(b,{text:!0}),busy:u})]}),T&&F.jsx("div",{className:"caption",children:T}),z==="fun"&&F.jsx(SR,{onPick:xe,onClose:()=>W(null)}),z==="country"&&F.jsx(MR,{value:O.country.code,onPick:b=>ee({country:b}),onClose:()=>W(null)}),z==="settings"&&F.jsx(xR,{cfg:a,setCfg:Qe,info:we,onClose:()=>W(null),onForget:_e,onTest:()=>et("Hey, this is Spidey! How do I sound?",{emotion:"happy",gesture:"wave"})}),F.jsx(RR,{id:P}),x&&F.jsx("div",{className:"toast",children:x})]})]})}q_(document.getElementById("root")).render(F.jsx(LR,{}));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});
