(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function og(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Au={exports:{}},Bo={},Ru={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function P0(){if(Yp)return Mt;Yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function x(E){return E===null||typeof E!="object"?null:(E=_&&E[_]||E["@@iterator"],typeof E=="function"?E:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function S(E,K,Se){this.props=E,this.context=K,this.refs=A,this.updater=Se||M}S.prototype.isReactComponent={},S.prototype.setState=function(E,K){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,K,"setState")},S.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function g(){}g.prototype=S.prototype;function I(E,K,Se){this.props=E,this.context=K,this.refs=A,this.updater=Se||M}var D=I.prototype=new g;D.constructor=I,b(D,S.prototype),D.isPureReactComponent=!0;var T=Array.isArray,W=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function N(E,K,Se){var $,le={},xe=null,ue=null;if(K!=null)for($ in K.ref!==void 0&&(ue=K.ref),K.key!==void 0&&(xe=""+K.key),K)W.call(K,$)&&!U.hasOwnProperty($)&&(le[$]=K[$]);var ye=arguments.length-2;if(ye===1)le.children=Se;else if(1<ye){for(var Ue=Array(ye),De=0;De<ye;De++)Ue[De]=arguments[De+2];le.children=Ue}if(E&&E.defaultProps)for($ in ye=E.defaultProps,ye)le[$]===void 0&&(le[$]=ye[$]);return{$$typeof:s,type:E,key:xe,ref:ue,props:le,_owner:O.current}}function P(E,K){return{$$typeof:s,type:E.type,key:K,ref:E.ref,props:E.props,_owner:E._owner}}function C(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function V(E){var K={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Se){return K[Se]})}var G=/\/+/g;function J(E,K){return typeof E=="object"&&E!==null&&E.key!=null?V(""+E.key):K.toString(36)}function X(E,K,Se,$,le){var xe=typeof E;(xe==="undefined"||xe==="boolean")&&(E=null);var ue=!1;if(E===null)ue=!0;else switch(xe){case"string":case"number":ue=!0;break;case"object":switch(E.$$typeof){case s:case e:ue=!0}}if(ue)return ue=E,le=le(ue),E=$===""?"."+J(ue,0):$,T(le)?(Se="",E!=null&&(Se=E.replace(G,"$&/")+"/"),X(le,K,Se,"",function(De){return De})):le!=null&&(C(le)&&(le=P(le,Se+(!le.key||ue&&ue.key===le.key?"":(""+le.key).replace(G,"$&/")+"/")+E)),K.push(le)),1;if(ue=0,$=$===""?".":$+":",T(E))for(var ye=0;ye<E.length;ye++){xe=E[ye];var Ue=$+J(xe,ye);ue+=X(xe,K,Se,Ue,le)}else if(Ue=x(E),typeof Ue=="function")for(E=Ue.call(E),ye=0;!(xe=E.next()).done;)xe=xe.value,Ue=$+J(xe,ye++),ue+=X(xe,K,Se,Ue,le);else if(xe==="object")throw K=String(E),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ue}function Z(E,K,Se){if(E==null)return E;var $=[],le=0;return X(E,$,"","",function(xe){return K.call(Se,xe,le++)}),$}function re(E){if(E._status===-1){var K=E._result;K=K(),K.then(function(Se){(E._status===0||E._status===-1)&&(E._status=1,E._result=Se)},function(Se){(E._status===0||E._status===-1)&&(E._status=2,E._result=Se)}),E._status===-1&&(E._status=0,E._result=K)}if(E._status===1)return E._result.default;throw E._result}var me={current:null},F={transition:null},de={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:F,ReactCurrentOwner:O};function k(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:Z,forEach:function(E,K,Se){Z(E,function(){K.apply(this,arguments)},Se)},count:function(E){var K=0;return Z(E,function(){K++}),K},toArray:function(E){return Z(E,function(K){return K})||[]},only:function(E){if(!C(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Mt.Component=S,Mt.Fragment=n,Mt.Profiler=a,Mt.PureComponent=I,Mt.StrictMode=r,Mt.Suspense=p,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Mt.act=k,Mt.cloneElement=function(E,K,Se){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var $=b({},E.props),le=E.key,xe=E.ref,ue=E._owner;if(K!=null){if(K.ref!==void 0&&(xe=K.ref,ue=O.current),K.key!==void 0&&(le=""+K.key),E.type&&E.type.defaultProps)var ye=E.type.defaultProps;for(Ue in K)W.call(K,Ue)&&!U.hasOwnProperty(Ue)&&($[Ue]=K[Ue]===void 0&&ye!==void 0?ye[Ue]:K[Ue])}var Ue=arguments.length-2;if(Ue===1)$.children=Se;else if(1<Ue){ye=Array(Ue);for(var De=0;De<Ue;De++)ye[De]=arguments[De+2];$.children=ye}return{$$typeof:s,type:E.type,key:le,ref:xe,props:$,_owner:ue}},Mt.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:c,_context:E},E.Consumer=E},Mt.createElement=N,Mt.createFactory=function(E){var K=N.bind(null,E);return K.type=E,K},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(E){return{$$typeof:h,render:E}},Mt.isValidElement=C,Mt.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:re}},Mt.memo=function(E,K){return{$$typeof:v,type:E,compare:K===void 0?null:K}},Mt.startTransition=function(E){var K=F.transition;F.transition={};try{E()}finally{F.transition=K}},Mt.unstable_act=k,Mt.useCallback=function(E,K){return me.current.useCallback(E,K)},Mt.useContext=function(E){return me.current.useContext(E)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(E){return me.current.useDeferredValue(E)},Mt.useEffect=function(E,K){return me.current.useEffect(E,K)},Mt.useId=function(){return me.current.useId()},Mt.useImperativeHandle=function(E,K,Se){return me.current.useImperativeHandle(E,K,Se)},Mt.useInsertionEffect=function(E,K){return me.current.useInsertionEffect(E,K)},Mt.useLayoutEffect=function(E,K){return me.current.useLayoutEffect(E,K)},Mt.useMemo=function(E,K){return me.current.useMemo(E,K)},Mt.useReducer=function(E,K,Se){return me.current.useReducer(E,K,Se)},Mt.useRef=function(E){return me.current.useRef(E)},Mt.useState=function(E){return me.current.useState(E)},Mt.useSyncExternalStore=function(E,K,Se){return me.current.useSyncExternalStore(E,K,Se)},Mt.useTransition=function(){return me.current.useTransition()},Mt.version="18.3.1",Mt}var qp;function sf(){return qp||(qp=1,Ru.exports=P0()),Ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function L0(){if(Kp)return Bo;Kp=1;var s=sf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,v){var y,_={},x=null,M=null;v!==void 0&&(x=""+v),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(y in p)r.call(p,y)&&!c.hasOwnProperty(y)&&(_[y]=p[y]);if(h&&h.defaultProps)for(y in p=h.defaultProps,p)_[y]===void 0&&(_[y]=p[y]);return{$$typeof:e,type:h,key:x,ref:M,props:_,_owner:a.current}}return Bo.Fragment=n,Bo.jsx=d,Bo.jsxs=d,Bo}var Zp;function I0(){return Zp||(Zp=1,Au.exports=L0()),Au.exports}var l=I0(),ge=sf();const D0=og(ge);var fl={},Pu={exports:{}},On={},Lu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function N0(){return Jp||(Jp=1,(function(s){function e(F,de){var k=F.length;F.push(de);e:for(;0<k;){var E=k-1>>>1,K=F[E];if(0<a(K,de))F[E]=de,F[k]=K,k=E;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var de=F[0],k=F.pop();if(k!==de){F[0]=k;e:for(var E=0,K=F.length,Se=K>>>1;E<Se;){var $=2*(E+1)-1,le=F[$],xe=$+1,ue=F[xe];if(0>a(le,k))xe<K&&0>a(ue,le)?(F[E]=ue,F[xe]=k,E=xe):(F[E]=le,F[$]=k,E=$);else if(xe<K&&0>a(ue,k))F[E]=ue,F[xe]=k,E=xe;else break e}}return de}function a(F,de){var k=F.sortIndex-de.sortIndex;return k!==0?k:F.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],v=[],y=1,_=null,x=3,M=!1,b=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(F){for(var de=n(v);de!==null;){if(de.callback===null)r(v);else if(de.startTime<=F)r(v),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(v)}}function T(F){if(A=!1,D(F),!b)if(n(p)!==null)b=!0,re(W);else{var de=n(v);de!==null&&me(T,de.startTime-F)}}function W(F,de){b=!1,A&&(A=!1,g(N),N=-1),M=!0;var k=x;try{for(D(de),_=n(p);_!==null&&(!(_.expirationTime>de)||F&&!V());){var E=_.callback;if(typeof E=="function"){_.callback=null,x=_.priorityLevel;var K=E(_.expirationTime<=de);de=s.unstable_now(),typeof K=="function"?_.callback=K:_===n(p)&&r(p),D(de)}else r(p);_=n(p)}if(_!==null)var Se=!0;else{var $=n(v);$!==null&&me(T,$.startTime-de),Se=!1}return Se}finally{_=null,x=k,M=!1}}var O=!1,U=null,N=-1,P=5,C=-1;function V(){return!(s.unstable_now()-C<P)}function G(){if(U!==null){var F=s.unstable_now();C=F;var de=!0;try{de=U(!0,F)}finally{de?J():(O=!1,U=null)}}else O=!1}var J;if(typeof I=="function")J=function(){I(G)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=G,J=function(){Z.postMessage(null)}}else J=function(){S(G,0)};function re(F){U=F,O||(O=!0,J())}function me(F,de){N=S(function(){F(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,re(W))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(F){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var k=x;x=de;try{return F()}finally{x=k}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,de){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var k=x;x=F;try{return de()}finally{x=k}},s.unstable_scheduleCallback=function(F,de,k){var E=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?E+k:E):k=E,F){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=k+K,F={id:y++,callback:de,priorityLevel:F,startTime:k,expirationTime:K,sortIndex:-1},k>E?(F.sortIndex=k,e(v,F),n(p)===null&&F===n(v)&&(A?(g(N),N=-1):A=!0,me(T,k-E))):(F.sortIndex=K,e(p,F),b||M||(b=!0,re(W))),F},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(F){var de=x;return function(){var k=x;x=de;try{return F.apply(this,arguments)}finally{x=k}}}})(Iu)),Iu}var Qp;function U0(){return Qp||(Qp=1,Lu.exports=N0()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function k0(){if(em)return On;em=1;var s=sf(),e=U0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function x(t){return p.call(_,t)?!0:p.call(y,t)?!1:v.test(t)?_[t]=!0:(y[t]=!0,!1)}function M(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,i,o,u){if(i===null||typeof i>"u"||M(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,u,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,u){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),F=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var k=Object.assign,E;function K(t){if(E===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);E=i&&i[1]||""}return`
`+E+t}var Se=!1;function $(t,i){if(!t||Se)return"";Se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var u=pe}Reflect.construct(t,[],i)}else{try{i.call()}catch(pe){u=pe}t.call(i.prototype)}else{try{throw Error()}catch(pe){u=pe}t()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var f=pe.stack.split(`
`),m=u.stack.split(`
`),w=f.length-1,H=m.length-1;1<=w&&0<=H&&f[w]!==m[H];)H--;for(;1<=w&&0<=H;w--,H--)if(f[w]!==m[H]){if(w!==1||H!==1)do if(w--,H--,0>H||f[w]!==m[H]){var q=`
`+f[w].replace(" at new "," at ");return t.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",t.displayName)),q}while(1<=w&&0<=H);break}}}finally{Se=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?K(t):""}function le(t){switch(t.tag){case 5:return K(t.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case O:return"Portal";case P:return"Profiler";case N:return"StrictMode";case J:return"Suspense";case X:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case G:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function et(t){t._valueTracker||(t._valueTracker=De(t))}function rt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ue(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function j(t,i){var o=i.checked;return k({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ve(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Le(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function Xe(t,i){Le(t,i);var o=ye(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?gt(t,i.type,o):i.hasOwnProperty("defaultValue")&&gt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Fe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function gt(t,i,o){(i!=="number"||Ke(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var je=Array.isArray;function z(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function R(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return k({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oe(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(je(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ye(o)}}function Me(t,i){var o=ye(i.value),u=ye(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Ee(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function _e(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?_e(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oe,We=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Oe=Oe||document.createElement("div"),Oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function pt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ge=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(t){Ge.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ce[i]=Ce[t]})});function Y(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ce.hasOwnProperty(t)&&Ce[t]?(""+i).trim():i+"px"}function Re(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=Y(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var be=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ut(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Be=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var we=null,te=null,he=null;function ke(t){if(t=wo(t)){if(typeof we!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ca(i),we(t.stateNode,t.type,i))}}function Ne(t){te?he?he.push(t):he=[t]:te=t}function st(){if(te){var t=te,i=he;if(he=te=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function It(t,i){return t(i)}function zt(){}var xt=!1;function en(t,i,o){if(xt)return t(i,o);xt=!0;try{return It(t,i,o)}finally{xt=!1,(te!==null||he!==null)&&(zt(),st())}}function dn(t,i){var o=t.stateNode;if(o===null)return null;var u=Ca(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qi=!1;if(h)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Qi=!1}function Li(t,i,o,u,f,m,w,H,q){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(o,pe)}catch(Ae){this.onError(Ae)}}var Ii=!1,Ir=null,Dr=!1,er=null,sa={onError:function(t){Ii=!0,Ir=t}};function cs(t,i,o,u,f,m,w,H,q){Ii=!1,Ir=null,Li.apply(sa,arguments)}function oa(t,i,o,u,f,m,w,H,q){if(cs.apply(this,arguments),Ii){if(Ii){var pe=Ir;Ii=!1,Ir=null}else throw Error(n(198));Dr||(Dr=!0,er=pe)}}function Mi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function aa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function la(t){if(Mi(t)!==t)throw Error(n(188))}function Zl(t){var i=t.alternate;if(!i){if(i=Mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return la(f),t;if(m===u)return la(f),i;m=m.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=m;else{for(var w=!1,H=f.child;H;){if(H===o){w=!0,o=f,u=m;break}if(H===u){w=!0,u=f,o=m;break}H=H.sibling}if(!w){for(H=m.child;H;){if(H===o){w=!0,o=m,u=f;break}if(H===u){w=!0,u=m,o=f;break}H=H.sibling}if(!w)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ca(t){return t=Zl(t),t!==null?ua(t):null}function ua(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ua(t);if(i!==null)return i;t=t.sibling}return null}var da=e.unstable_scheduleCallback,L=e.unstable_cancelCallback,ee=e.unstable_shouldYield,fe=e.unstable_requestPaint,ae=e.unstable_now,ne=e.unstable_getCurrentPriorityLevel,Ie=e.unstable_ImmediatePriority,He=e.unstable_UserBlockingPriority,$e=e.unstable_NormalPriority,Je=e.unstable_LowPriority,ft=e.unstable_IdlePriority,dt=null,tt=null;function Tt(t){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(dt,t,void 0,(t.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Rt,Kt=Math.log,Gt=Math.LN2;function Rt(t){return t>>>=0,t===0?32:31-(Kt(t)/Gt|0)|0}var ot=64,Zt=4194304;function bt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,m=t.pingedLanes,w=o&268435455;if(w!==0){var H=w&~f;H!==0?u=bt(H):(m&=w,m!==0&&(u=bt(m)))}else w=o&~f,w!==0?u=bt(w):m!==0&&(u=bt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-vt(i),f=1<<o,u|=t[o],i&=~f;return u}function tr(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var w=31-vt(m),H=1<<w,q=f[w];q===-1?((H&o)===0||(H&u)!==0)&&(f[w]=tr(H,i)):q<=i&&(t.expiredLanes|=H),m&=~H}}function Di(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ft(){var t=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),t}function En(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function fn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-vt(i),t[i]=o}function vn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-vt(o),m=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~m}}function hn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-vt(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var Pt=0;function Ei(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Cf,Jl,Af,Rf,Pf,Ql=!1,fa=[],nr=null,ir=null,rr=null,lo=new Map,co=new Map,sr=[],Jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,i){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":lo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(i.pointerId)}}function uo(t,i,o,u,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=wo(i),i!==null&&Jl(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Qg(t,i,o,u,f){switch(i){case"focusin":return nr=uo(nr,t,i,o,u,f),!0;case"dragenter":return ir=uo(ir,t,i,o,u,f),!0;case"mouseover":return rr=uo(rr,t,i,o,u,f),!0;case"pointerover":var m=f.pointerId;return lo.set(m,uo(lo.get(m)||null,t,i,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,co.set(m,uo(co.get(m)||null,t,i,o,u,f)),!0}return!1}function If(t){var i=Nr(t.target);if(i!==null){var o=Mi(i);if(o!==null){if(i=o.tag,i===13){if(i=aa(o),i!==null){t.blockedOn=i,Pf(t.priority,function(){Af(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ha(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=tc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Be=u,o.target.dispatchEvent(u),Be=null}else return i=wo(o),i!==null&&Jl(i),t.blockedOn=o,!1;i.shift()}return!0}function Df(t,i,o){ha(t)&&o.delete(i)}function ex(){Ql=!1,nr!==null&&ha(nr)&&(nr=null),ir!==null&&ha(ir)&&(ir=null),rr!==null&&ha(rr)&&(rr=null),lo.forEach(Df),co.forEach(Df)}function fo(t,i){t.blockedOn===i&&(t.blockedOn=null,Ql||(Ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ex)))}function ho(t){function i(f){return fo(f,t)}if(0<fa.length){fo(fa[0],t);for(var o=1;o<fa.length;o++){var u=fa[o];u.blockedOn===t&&(u.blockedOn=null)}}for(nr!==null&&fo(nr,t),ir!==null&&fo(ir,t),rr!==null&&fo(rr,t),lo.forEach(i),co.forEach(i),o=0;o<sr.length;o++)u=sr[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<sr.length&&(o=sr[0],o.blockedOn===null);)If(o),o.blockedOn===null&&sr.shift()}var us=T.ReactCurrentBatchConfig,pa=!0;function tx(t,i,o,u){var f=Pt,m=us.transition;us.transition=null;try{Pt=1,ec(t,i,o,u)}finally{Pt=f,us.transition=m}}function nx(t,i,o,u){var f=Pt,m=us.transition;us.transition=null;try{Pt=4,ec(t,i,o,u)}finally{Pt=f,us.transition=m}}function ec(t,i,o,u){if(pa){var f=tc(t,i,o,u);if(f===null)vc(t,i,u,ma,o),Lf(t,u);else if(Qg(f,t,i,o,u))u.stopPropagation();else if(Lf(t,u),i&4&&-1<Jg.indexOf(t)){for(;f!==null;){var m=wo(f);if(m!==null&&Cf(m),m=tc(t,i,o,u),m===null&&vc(t,i,u,ma,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else vc(t,i,u,null,o)}}var ma=null;function tc(t,i,o,u){if(ma=null,t=B(u),t=Nr(t),t!==null)if(i=Mi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=aa(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ma=t,null}function Nf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ne()){case Ie:return 1;case He:return 4;case $e:case Je:return 16;case ft:return 536870912;default:return 16}default:return 16}}var or=null,nc=null,ga=null;function Uf(){if(ga)return ga;var t,i=nc,o=i.length,u,f="value"in or?or.value:or.textContent,m=f.length;for(t=0;t<o&&i[t]===f[t];t++);var w=o-t;for(u=1;u<=w&&i[o-u]===f[m-u];u++);return ga=f.slice(t,1<u?1-u:void 0)}function xa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function kf(){return!1}function Wn(t){function i(o,u,f,m,w){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var H in t)t.hasOwnProperty(H)&&(o=t[H],this[H]=o?o(m):m[H]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?va:kf,this.isPropagationStopped=kf,this}return k(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Wn(ds),po=k({},ds,{view:0,detail:0}),ix=Wn(po),rc,sc,mo,ya=k({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(rc=t.screenX-mo.screenX,sc=t.screenY-mo.screenY):sc=rc=0,mo=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),zf=Wn(ya),rx=k({},ya,{dataTransfer:0}),sx=Wn(rx),ox=k({},po,{relatedTarget:0}),oc=Wn(ox),ax=k({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=Wn(ax),cx=k({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ux=Wn(cx),dx=k({},ds,{data:0}),Ff=Wn(dx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=px[t])?!!i[t]:!1}function ac(){return mx}var gx=k({},po,{key:function(t){if(t.key){var i=fx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xx=Wn(gx),vx=k({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Wn(vx),yx=k({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),_x=Wn(yx),Sx=k({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=Wn(Sx),Ex=k({},ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=Wn(Ex),wx=[9,13,27,32],lc=h&&"CompositionEvent"in window,go=null;h&&"documentMode"in document&&(go=document.documentMode);var Tx=h&&"TextEvent"in window&&!go,Bf=h&&(!lc||go&&8<go&&11>=go),jf=" ",Hf=!1;function Vf(t,i){switch(t){case"keyup":return wx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Cx(t,i){switch(t){case"compositionend":return Wf(i);case"keypress":return i.which!==32?null:(Hf=!0,jf);case"textInput":return t=i.data,t===jf&&Hf?null:t;default:return null}}function Ax(t,i){if(fs)return t==="compositionend"||!lc&&Vf(t,i)?(t=Uf(),ga=nc=or=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bf&&i.locale!=="ko"?null:i.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Rx[t.type]:i==="textarea"}function Xf(t,i,o,u){Ne(u),i=ba(i,"onChange"),0<i.length&&(o=new ic("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var xo=null,vo=null;function Px(t){uh(t,0)}function _a(t){var i=xs(t);if(rt(i))return t}function Lx(t,i){if(t==="change")return i}var $f=!1;if(h){var cc;if(h){var uc="oninput"in document;if(!uc){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),uc=typeof Yf.oninput=="function"}cc=uc}else cc=!1;$f=cc&&(!document.documentMode||9<document.documentMode)}function qf(){xo&&(xo.detachEvent("onpropertychange",Kf),vo=xo=null)}function Kf(t){if(t.propertyName==="value"&&_a(vo)){var i=[];Xf(i,vo,t,B(t)),en(Px,i)}}function Ix(t,i,o){t==="focusin"?(qf(),xo=i,vo=o,xo.attachEvent("onpropertychange",Kf)):t==="focusout"&&qf()}function Dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _a(vo)}function Nx(t,i){if(t==="click")return _a(i)}function Ux(t,i){if(t==="input"||t==="change")return _a(i)}function kx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var li=typeof Object.is=="function"?Object.is:kx;function yo(t,i){if(li(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!p.call(i,f)||!li(t[f],i[f]))return!1}return!0}function Zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jf(t,i){var o=Zf(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Zf(o)}}function Qf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Qf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function eh(){for(var t=window,i=Ke();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ke(t.document)}return i}function dc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function zx(t){var i=eh(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Qf(o.ownerDocument.documentElement,o)){if(u!==null&&dc(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,m=Math.min(u.start,f);u=u.end===void 0?m:Math.min(u.end,f),!t.extend&&m>u&&(f=u,u=m,m=f),f=Jf(o,m);var w=Jf(o,u);f&&w&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>u?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fx=h&&"documentMode"in document&&11>=document.documentMode,hs=null,fc=null,_o=null,hc=!1;function th(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hc||hs==null||hs!==Ke(u)||(u=hs,"selectionStart"in u&&dc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_o&&yo(_o,u)||(_o=u,u=ba(fc,"onSelect"),0<u.length&&(i=new ic("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=hs)))}function Sa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ps={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},pc={},nh={};h&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Ma(t){if(pc[t])return pc[t];if(!ps[t])return t;var i=ps[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in nh)return pc[t]=i[o];return t}var ih=Ma("animationend"),rh=Ma("animationiteration"),sh=Ma("animationstart"),oh=Ma("transitionend"),ah=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,i){ah.set(t,i),c(i,[t])}for(var mc=0;mc<lh.length;mc++){var gc=lh[mc],Ox=gc.toLowerCase(),Bx=gc[0].toUpperCase()+gc.slice(1);ar(Ox,"on"+Bx)}ar(ih,"onAnimationEnd"),ar(rh,"onAnimationIteration"),ar(sh,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(oh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function ch(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,oa(u,i,void 0,t),t.currentTarget=null}function uh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var H=u[w],q=H.instance,pe=H.currentTarget;if(H=H.listener,q!==m&&f.isPropagationStopped())break e;ch(f,H,pe),m=q}else for(w=0;w<u.length;w++){if(H=u[w],q=H.instance,pe=H.currentTarget,H=H.listener,q!==m&&f.isPropagationStopped())break e;ch(f,H,pe),m=q}}}if(Dr)throw t=er,Dr=!1,er=null,t}function Vt(t,i){var o=i[bc];o===void 0&&(o=i[bc]=new Set);var u=t+"__bubble";o.has(u)||(dh(i,t,2,!1),o.add(u))}function xc(t,i,o){var u=0;i&&(u|=4),dh(o,t,u,i)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[Ea]){t[Ea]=!0,r.forEach(function(o){o!=="selectionchange"&&(jx.has(o)||xc(o,!1,t),xc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ea]||(i[Ea]=!0,xc("selectionchange",!1,i))}}function dh(t,i,o,u){switch(Nf(i)){case 1:var f=tx;break;case 4:f=nx;break;default:f=ec}o=f.bind(null,i,o,t),f=void 0,!Qi||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function vc(t,i,o,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var H=u.stateNode.containerInfo;if(H===f||H.nodeType===8&&H.parentNode===f)break;if(w===4)for(w=u.return;w!==null;){var q=w.tag;if((q===3||q===4)&&(q=w.stateNode.containerInfo,q===f||q.nodeType===8&&q.parentNode===f))return;w=w.return}for(;H!==null;){if(w=Nr(H),w===null)return;if(q=w.tag,q===5||q===6){u=m=w;continue e}H=H.parentNode}}u=u.return}en(function(){var pe=m,Ae=B(o),Pe=[];e:{var Te=ah.get(t);if(Te!==void 0){var Ye=ic,Qe=t;switch(t){case"keypress":if(xa(o)===0)break e;case"keydown":case"keyup":Ye=xx;break;case"focusin":Qe="focus",Ye=oc;break;case"focusout":Qe="blur",Ye=oc;break;case"beforeblur":case"afterblur":Ye=oc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=_x;break;case ih:case rh:case sh:Ye=lx;break;case oh:Ye=Mx;break;case"scroll":Ye=ix;break;case"wheel":Ye=bx;break;case"copy":case"cut":case"paste":Ye=ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=Of}var nt=(i&4)!==0,tn=!nt&&t==="scroll",se=nt?Te!==null?Te+"Capture":null:Te;nt=[];for(var Q=pe,ce;Q!==null;){ce=Q;var ze=ce.stateNode;if(ce.tag===5&&ze!==null&&(ce=ze,se!==null&&(ze=dn(Q,se),ze!=null&&nt.push(Eo(Q,ze,ce)))),tn)break;Q=Q.return}0<nt.length&&(Te=new Ye(Te,Qe,null,o,Ae),Pe.push({event:Te,listeners:nt}))}}if((i&7)===0){e:{if(Te=t==="mouseover"||t==="pointerover",Ye=t==="mouseout"||t==="pointerout",Te&&o!==Be&&(Qe=o.relatedTarget||o.fromElement)&&(Nr(Qe)||Qe[Ni]))break e;if((Ye||Te)&&(Te=Ae.window===Ae?Ae:(Te=Ae.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ye?(Qe=o.relatedTarget||o.toElement,Ye=pe,Qe=Qe?Nr(Qe):null,Qe!==null&&(tn=Mi(Qe),Qe!==tn||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(Ye=null,Qe=pe),Ye!==Qe)){if(nt=zf,ze="onMouseLeave",se="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Of,ze="onPointerLeave",se="onPointerEnter",Q="pointer"),tn=Ye==null?Te:xs(Ye),ce=Qe==null?Te:xs(Qe),Te=new nt(ze,Q+"leave",Ye,o,Ae),Te.target=tn,Te.relatedTarget=ce,ze=null,Nr(Ae)===pe&&(nt=new nt(se,Q+"enter",Qe,o,Ae),nt.target=ce,nt.relatedTarget=tn,ze=nt),tn=ze,Ye&&Qe)t:{for(nt=Ye,se=Qe,Q=0,ce=nt;ce;ce=ms(ce))Q++;for(ce=0,ze=se;ze;ze=ms(ze))ce++;for(;0<Q-ce;)nt=ms(nt),Q--;for(;0<ce-Q;)se=ms(se),ce--;for(;Q--;){if(nt===se||se!==null&&nt===se.alternate)break t;nt=ms(nt),se=ms(se)}nt=null}else nt=null;Ye!==null&&fh(Pe,Te,Ye,nt,!1),Qe!==null&&tn!==null&&fh(Pe,tn,Qe,nt,!0)}}e:{if(Te=pe?xs(pe):window,Ye=Te.nodeName&&Te.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Te.type==="file")var it=Lx;else if(Gf(Te))if($f)it=Ux;else{it=Dx;var at=Ix}else(Ye=Te.nodeName)&&Ye.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(it=Nx);if(it&&(it=it(t,pe))){Xf(Pe,it,o,Ae);break e}at&&at(t,Te,pe),t==="focusout"&&(at=Te._wrapperState)&&at.controlled&&Te.type==="number"&&gt(Te,"number",Te.value)}switch(at=pe?xs(pe):window,t){case"focusin":(Gf(at)||at.contentEditable==="true")&&(hs=at,fc=pe,_o=null);break;case"focusout":_o=fc=hs=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,th(Pe,o,Ae);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":th(Pe,o,Ae)}var lt;if(lc)e:{switch(t){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else fs?Vf(t,o)&&(ht="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ht="onCompositionStart");ht&&(Bf&&o.locale!=="ko"&&(fs||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&fs&&(lt=Uf()):(or=Ae,nc="value"in or?or.value:or.textContent,fs=!0)),at=ba(pe,ht),0<at.length&&(ht=new Ff(ht,t,null,o,Ae),Pe.push({event:ht,listeners:at}),lt?ht.data=lt:(lt=Wf(o),lt!==null&&(ht.data=lt)))),(lt=Tx?Cx(t,o):Ax(t,o))&&(pe=ba(pe,"onBeforeInput"),0<pe.length&&(Ae=new Ff("onBeforeInput","beforeinput",null,o,Ae),Pe.push({event:Ae,listeners:pe}),Ae.data=lt))}uh(Pe,i)})}function Eo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ba(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=dn(t,o),m!=null&&u.unshift(Eo(t,m,f)),m=dn(t,i),m!=null&&u.push(Eo(t,m,f))),t=t.return}return u}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fh(t,i,o,u,f){for(var m=i._reactName,w=[];o!==null&&o!==u;){var H=o,q=H.alternate,pe=H.stateNode;if(q!==null&&q===u)break;H.tag===5&&pe!==null&&(H=pe,f?(q=dn(o,m),q!=null&&w.unshift(Eo(o,q,H))):f||(q=dn(o,m),q!=null&&w.push(Eo(o,q,H)))),o=o.return}w.length!==0&&t.push({event:i,listeners:w})}var Hx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function hh(t){return(typeof t=="string"?t:""+t).replace(Hx,`
`).replace(Vx,"")}function wa(t,i,o){if(i=hh(i),hh(t)!==i&&o)throw Error(n(425))}function Ta(){}var yc=null,_c=null;function Sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(t){return ph.resolve(null).then(t).catch(Xx)}:Mc;function Xx(t){setTimeout(function(){throw t})}function Ec(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),ho(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);ho(i)}function lr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function mh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),bi="__reactFiber$"+gs,bo="__reactProps$"+gs,Ni="__reactContainer$"+gs,bc="__reactEvents$"+gs,$x="__reactListeners$"+gs,Yx="__reactHandles$"+gs;function Nr(t){var i=t[bi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ni]||o[bi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=mh(t);t!==null;){if(o=t[bi])return o;t=mh(t)}return i}t=o,o=t.parentNode}return null}function wo(t){return t=t[bi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ca(t){return t[bo]||null}var wc=[],vs=-1;function cr(t){return{current:t}}function Wt(t){0>vs||(t.current=wc[vs],wc[vs]=null,vs--)}function Bt(t,i){vs++,wc[vs]=t.current,t.current=i}var ur={},bn=cr(ur),Nn=cr(!1),Ur=ur;function ys(t,i){var o=t.type.contextTypes;if(!o)return ur;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Un(t){return t=t.childContextTypes,t!=null}function Aa(){Wt(Nn),Wt(bn)}function gh(t,i,o){if(bn.current!==ur)throw Error(n(168));Bt(bn,i),Bt(Nn,o)}function xh(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,ue(t)||"Unknown",f));return k({},o,u)}function Ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Ur=bn.current,Bt(bn,t),Bt(Nn,Nn.current),!0}function vh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=xh(t,i,Ur),u.__reactInternalMemoizedMergedChildContext=t,Wt(Nn),Wt(bn),Bt(bn,t)):Wt(Nn),Bt(Nn,o)}var Ui=null,Pa=!1,Tc=!1;function yh(t){Ui===null?Ui=[t]:Ui.push(t)}function qx(t){Pa=!0,yh(t)}function dr(){if(!Tc&&Ui!==null){Tc=!0;var t=0,i=Pt;try{var o=Ui;for(Pt=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Ui=null,Pa=!1}catch(f){throw Ui!==null&&(Ui=Ui.slice(t+1)),da(Ie,dr),f}finally{Pt=i,Tc=!1}}return null}var _s=[],Ss=0,La=null,Ia=0,Qn=[],ei=0,kr=null,ki=1,zi="";function zr(t,i){_s[Ss++]=Ia,_s[Ss++]=La,La=t,Ia=i}function _h(t,i,o){Qn[ei++]=ki,Qn[ei++]=zi,Qn[ei++]=kr,kr=t;var u=ki;t=zi;var f=32-vt(u)-1;u&=~(1<<f),o+=1;var m=32-vt(i)+f;if(30<m){var w=f-f%5;m=(u&(1<<w)-1).toString(32),u>>=w,f-=w,ki=1<<32-vt(i)+f|o<<f|u,zi=m+t}else ki=1<<m|o<<f|u,zi=t}function Cc(t){t.return!==null&&(zr(t,1),_h(t,1,0))}function Ac(t){for(;t===La;)La=_s[--Ss],_s[Ss]=null,Ia=_s[--Ss],_s[Ss]=null;for(;t===kr;)kr=Qn[--ei],Qn[ei]=null,zi=Qn[--ei],Qn[ei]=null,ki=Qn[--ei],Qn[ei]=null}var Gn=null,Xn=null,Xt=!1,ci=null;function Sh(t,i){var o=ri(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Mh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Gn=t,Xn=lr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Gn=t,Xn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=kr!==null?{id:ki,overflow:zi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ri(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Gn=t,Xn=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(Xt){var i=Xn;if(i){var o=i;if(!Mh(t,i)){if(Rc(t))throw Error(n(418));i=lr(o.nextSibling);var u=Gn;i&&Mh(t,i)?Sh(u,o):(t.flags=t.flags&-4097|2,Xt=!1,Gn=t)}}else{if(Rc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Xt=!1,Gn=t}}}function Eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function Da(t){if(t!==Gn)return!1;if(!Xt)return Eh(t),Xt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Sc(t.type,t.memoizedProps)),i&&(i=Xn)){if(Rc(t))throw bh(),Error(n(418));for(;i;)Sh(t,i),i=lr(i.nextSibling)}if(Eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Xn=lr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Xn=null}}else Xn=Gn?lr(t.stateNode.nextSibling):null;return!0}function bh(){for(var t=Xn;t;)t=lr(t.nextSibling)}function Ms(){Xn=Gn=null,Xt=!1}function Lc(t){ci===null?ci=[t]:ci.push(t)}var Kx=T.ReactCurrentBatchConfig;function To(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var H=f.refs;w===null?delete H[m]:H[m]=w},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Na(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function wh(t){var i=t._init;return i(t._payload)}function Th(t){function i(se,Q){if(t){var ce=se.deletions;ce===null?(se.deletions=[Q],se.flags|=16):ce.push(Q)}}function o(se,Q){if(!t)return null;for(;Q!==null;)i(se,Q),Q=Q.sibling;return null}function u(se,Q){for(se=new Map;Q!==null;)Q.key!==null?se.set(Q.key,Q):se.set(Q.index,Q),Q=Q.sibling;return se}function f(se,Q){return se=yr(se,Q),se.index=0,se.sibling=null,se}function m(se,Q,ce){return se.index=ce,t?(ce=se.alternate,ce!==null?(ce=ce.index,ce<Q?(se.flags|=2,Q):ce):(se.flags|=2,Q)):(se.flags|=1048576,Q)}function w(se){return t&&se.alternate===null&&(se.flags|=2),se}function H(se,Q,ce,ze){return Q===null||Q.tag!==6?(Q=Mu(ce,se.mode,ze),Q.return=se,Q):(Q=f(Q,ce),Q.return=se,Q)}function q(se,Q,ce,ze){var it=ce.type;return it===U?Ae(se,Q,ce.props.children,ze,ce.key):Q!==null&&(Q.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===re&&wh(it)===Q.type)?(ze=f(Q,ce.props),ze.ref=To(se,Q,ce),ze.return=se,ze):(ze=rl(ce.type,ce.key,ce.props,null,se.mode,ze),ze.ref=To(se,Q,ce),ze.return=se,ze)}function pe(se,Q,ce,ze){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ce.containerInfo||Q.stateNode.implementation!==ce.implementation?(Q=Eu(ce,se.mode,ze),Q.return=se,Q):(Q=f(Q,ce.children||[]),Q.return=se,Q)}function Ae(se,Q,ce,ze,it){return Q===null||Q.tag!==7?(Q=Gr(ce,se.mode,ze,it),Q.return=se,Q):(Q=f(Q,ce),Q.return=se,Q)}function Pe(se,Q,ce){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=Mu(""+Q,se.mode,ce),Q.return=se,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case W:return ce=rl(Q.type,Q.key,Q.props,null,se.mode,ce),ce.ref=To(se,null,Q),ce.return=se,ce;case O:return Q=Eu(Q,se.mode,ce),Q.return=se,Q;case re:var ze=Q._init;return Pe(se,ze(Q._payload),ce)}if(je(Q)||de(Q))return Q=Gr(Q,se.mode,ce,null),Q.return=se,Q;Na(se,Q)}return null}function Te(se,Q,ce,ze){var it=Q!==null?Q.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return it!==null?null:H(se,Q,""+ce,ze);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case W:return ce.key===it?q(se,Q,ce,ze):null;case O:return ce.key===it?pe(se,Q,ce,ze):null;case re:return it=ce._init,Te(se,Q,it(ce._payload),ze)}if(je(ce)||de(ce))return it!==null?null:Ae(se,Q,ce,ze,null);Na(se,ce)}return null}function Ye(se,Q,ce,ze,it){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return se=se.get(ce)||null,H(Q,se,""+ze,it);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case W:return se=se.get(ze.key===null?ce:ze.key)||null,q(Q,se,ze,it);case O:return se=se.get(ze.key===null?ce:ze.key)||null,pe(Q,se,ze,it);case re:var at=ze._init;return Ye(se,Q,ce,at(ze._payload),it)}if(je(ze)||de(ze))return se=se.get(ce)||null,Ae(Q,se,ze,it,null);Na(Q,ze)}return null}function Qe(se,Q,ce,ze){for(var it=null,at=null,lt=Q,ht=Q=0,gn=null;lt!==null&&ht<ce.length;ht++){lt.index>ht?(gn=lt,lt=null):gn=lt.sibling;var Dt=Te(se,lt,ce[ht],ze);if(Dt===null){lt===null&&(lt=gn);break}t&&lt&&Dt.alternate===null&&i(se,lt),Q=m(Dt,Q,ht),at===null?it=Dt:at.sibling=Dt,at=Dt,lt=gn}if(ht===ce.length)return o(se,lt),Xt&&zr(se,ht),it;if(lt===null){for(;ht<ce.length;ht++)lt=Pe(se,ce[ht],ze),lt!==null&&(Q=m(lt,Q,ht),at===null?it=lt:at.sibling=lt,at=lt);return Xt&&zr(se,ht),it}for(lt=u(se,lt);ht<ce.length;ht++)gn=Ye(lt,se,ht,ce[ht],ze),gn!==null&&(t&&gn.alternate!==null&&lt.delete(gn.key===null?ht:gn.key),Q=m(gn,Q,ht),at===null?it=gn:at.sibling=gn,at=gn);return t&&lt.forEach(function(_r){return i(se,_r)}),Xt&&zr(se,ht),it}function nt(se,Q,ce,ze){var it=de(ce);if(typeof it!="function")throw Error(n(150));if(ce=it.call(ce),ce==null)throw Error(n(151));for(var at=it=null,lt=Q,ht=Q=0,gn=null,Dt=ce.next();lt!==null&&!Dt.done;ht++,Dt=ce.next()){lt.index>ht?(gn=lt,lt=null):gn=lt.sibling;var _r=Te(se,lt,Dt.value,ze);if(_r===null){lt===null&&(lt=gn);break}t&&lt&&_r.alternate===null&&i(se,lt),Q=m(_r,Q,ht),at===null?it=_r:at.sibling=_r,at=_r,lt=gn}if(Dt.done)return o(se,lt),Xt&&zr(se,ht),it;if(lt===null){for(;!Dt.done;ht++,Dt=ce.next())Dt=Pe(se,Dt.value,ze),Dt!==null&&(Q=m(Dt,Q,ht),at===null?it=Dt:at.sibling=Dt,at=Dt);return Xt&&zr(se,ht),it}for(lt=u(se,lt);!Dt.done;ht++,Dt=ce.next())Dt=Ye(lt,se,ht,Dt.value,ze),Dt!==null&&(t&&Dt.alternate!==null&&lt.delete(Dt.key===null?ht:Dt.key),Q=m(Dt,Q,ht),at===null?it=Dt:at.sibling=Dt,at=Dt);return t&&lt.forEach(function(R0){return i(se,R0)}),Xt&&zr(se,ht),it}function tn(se,Q,ce,ze){if(typeof ce=="object"&&ce!==null&&ce.type===U&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case W:e:{for(var it=ce.key,at=Q;at!==null;){if(at.key===it){if(it=ce.type,it===U){if(at.tag===7){o(se,at.sibling),Q=f(at,ce.props.children),Q.return=se,se=Q;break e}}else if(at.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===re&&wh(it)===at.type){o(se,at.sibling),Q=f(at,ce.props),Q.ref=To(se,at,ce),Q.return=se,se=Q;break e}o(se,at);break}else i(se,at);at=at.sibling}ce.type===U?(Q=Gr(ce.props.children,se.mode,ze,ce.key),Q.return=se,se=Q):(ze=rl(ce.type,ce.key,ce.props,null,se.mode,ze),ze.ref=To(se,Q,ce),ze.return=se,se=ze)}return w(se);case O:e:{for(at=ce.key;Q!==null;){if(Q.key===at)if(Q.tag===4&&Q.stateNode.containerInfo===ce.containerInfo&&Q.stateNode.implementation===ce.implementation){o(se,Q.sibling),Q=f(Q,ce.children||[]),Q.return=se,se=Q;break e}else{o(se,Q);break}else i(se,Q);Q=Q.sibling}Q=Eu(ce,se.mode,ze),Q.return=se,se=Q}return w(se);case re:return at=ce._init,tn(se,Q,at(ce._payload),ze)}if(je(ce))return Qe(se,Q,ce,ze);if(de(ce))return nt(se,Q,ce,ze);Na(se,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Q!==null&&Q.tag===6?(o(se,Q.sibling),Q=f(Q,ce),Q.return=se,se=Q):(o(se,Q),Q=Mu(ce,se.mode,ze),Q.return=se,se=Q),w(se)):o(se,Q)}return tn}var Es=Th(!0),Ch=Th(!1),Ua=cr(null),ka=null,bs=null,Ic=null;function Dc(){Ic=bs=ka=null}function Nc(t){var i=Ua.current;Wt(Ua),t._currentValue=i}function Uc(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function ws(t,i){ka=t,Ic=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(kn=!0),t.firstContext=null)}function ti(t){var i=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:i,next:null},bs===null){if(ka===null)throw Error(n(308));bs=t,ka.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return i}var Fr=null;function kc(t){Fr===null?Fr=[t]:Fr.push(t)}function Ah(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,kc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Fi(t,u)}function Fi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var fr=!1;function zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Lt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Fi(t,o)}return f=u.interleaved,f===null?(i.next=i,kc(u)):(i.next=f.next,f.next=i),u.interleaved=i,Fi(t,o)}function za(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,hn(t,o)}}function Ph(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Fa(t,i,o,u){var f=t.updateQueue;fr=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,H=f.shared.pending;if(H!==null){f.shared.pending=null;var q=H,pe=q.next;q.next=null,w===null?m=pe:w.next=pe,w=q;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,H=Ae.lastBaseUpdate,H!==w&&(H===null?Ae.firstBaseUpdate=pe:H.next=pe,Ae.lastBaseUpdate=q))}if(m!==null){var Pe=f.baseState;w=0,Ae=pe=q=null,H=m;do{var Te=H.lane,Ye=H.eventTime;if((u&Te)===Te){Ae!==null&&(Ae=Ae.next={eventTime:Ye,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Qe=t,nt=H;switch(Te=i,Ye=o,nt.tag){case 1:if(Qe=nt.payload,typeof Qe=="function"){Pe=Qe.call(Ye,Pe,Te);break e}Pe=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=nt.payload,Te=typeof Qe=="function"?Qe.call(Ye,Pe,Te):Qe,Te==null)break e;Pe=k({},Pe,Te);break e;case 2:fr=!0}}H.callback!==null&&H.lane!==0&&(t.flags|=64,Te=f.effects,Te===null?f.effects=[H]:Te.push(H))}else Ye={eventTime:Ye,lane:Te,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Ae===null?(pe=Ae=Ye,q=Pe):Ae=Ae.next=Ye,w|=Te;if(H=H.next,H===null){if(H=f.shared.pending,H===null)break;Te=H,H=Te.next,Te.next=null,f.lastBaseUpdate=Te,f.shared.pending=null}}while(!0);if(Ae===null&&(q=Pe),f.baseState=q,f.firstBaseUpdate=pe,f.lastBaseUpdate=Ae,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);jr|=w,t.lanes=w,t.memoizedState=Pe}}function Lh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var Co={},wi=cr(Co),Ao=cr(Co),Ro=cr(Co);function Or(t){if(t===Co)throw Error(n(174));return t}function Fc(t,i){switch(Bt(Ro,i),Bt(Ao,t),Bt(wi,Co),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=qe(i,t)}Wt(wi),Bt(wi,i)}function Ts(){Wt(wi),Wt(Ao),Wt(Ro)}function Ih(t){Or(Ro.current);var i=Or(wi.current),o=qe(i,t.type);i!==o&&(Bt(Ao,t),Bt(wi,o))}function Oc(t){Ao.current===t&&(Wt(wi),Wt(Ao))}var Yt=cr(0);function Oa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bc=[];function jc(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var Ba=T.ReactCurrentDispatcher,Hc=T.ReactCurrentBatchConfig,Br=0,qt=null,on=null,pn=null,ja=!1,Po=!1,Lo=0,Zx=0;function wn(){throw Error(n(321))}function Vc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!li(t[o],i[o]))return!1;return!0}function Wc(t,i,o,u,f,m){if(Br=m,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ba.current=t===null||t.memoizedState===null?t0:n0,t=o(u,f),Po){m=0;do{if(Po=!1,Lo=0,25<=m)throw Error(n(301));m+=1,pn=on=null,i.updateQueue=null,Ba.current=i0,t=o(u,f)}while(Po)}if(Ba.current=Wa,i=on!==null&&on.next!==null,Br=0,pn=on=qt=null,ja=!1,i)throw Error(n(300));return t}function Gc(){var t=Lo!==0;return Lo=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?qt.memoizedState=pn=t:pn=pn.next=t,pn}function ni(){if(on===null){var t=qt.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var i=pn===null?qt.memoizedState:pn.next;if(i!==null)pn=i,on=t;else{if(t===null)throw Error(n(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},pn===null?qt.memoizedState=pn=t:pn=pn.next=t}return pn}function Io(t,i){return typeof i=="function"?i(t):i}function Xc(t){var i=ni(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=on,f=u.baseQueue,m=o.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}u.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,u=u.baseState;var H=w=null,q=null,pe=m;do{var Ae=pe.lane;if((Br&Ae)===Ae)q!==null&&(q=q.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:t(u,pe.action);else{var Pe={lane:Ae,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};q===null?(H=q=Pe,w=u):q=q.next=Pe,qt.lanes|=Ae,jr|=Ae}pe=pe.next}while(pe!==null&&pe!==m);q===null?w=u:q.next=H,li(u,i.memoizedState)||(kn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=q,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do m=f.lane,qt.lanes|=m,jr|=m,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function $c(t){var i=ni(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=t(m,w.action),w=w.next;while(w!==f);li(m,i.memoizedState)||(kn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Dh(){}function Nh(t,i){var o=qt,u=ni(),f=i(),m=!li(u.memoizedState,f);if(m&&(u.memoizedState=f,kn=!0),u=u.queue,Yc(zh.bind(null,o,u,t),[t]),u.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,Do(9,kh.bind(null,o,u,f,i),void 0,null),mn===null)throw Error(n(349));(Br&30)!==0||Uh(o,i,f)}return f}function Uh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function kh(t,i,o,u){i.value=o,i.getSnapshot=u,Fh(i)&&Oh(t)}function zh(t,i,o){return o(function(){Fh(i)&&Oh(t)})}function Fh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!li(t,o)}catch{return!0}}function Oh(t){var i=Fi(t,1);i!==null&&hi(i,t,1,-1)}function Bh(t){var i=Ti();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},i.queue=t,t=t.dispatch=e0.bind(null,qt,t),[i.memoizedState,t]}function Do(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function jh(){return ni().memoizedState}function Ha(t,i,o,u){var f=Ti();qt.flags|=t,f.memoizedState=Do(1|i,o,void 0,u===void 0?null:u)}function Va(t,i,o,u){var f=ni();u=u===void 0?null:u;var m=void 0;if(on!==null){var w=on.memoizedState;if(m=w.destroy,u!==null&&Vc(u,w.deps)){f.memoizedState=Do(i,o,m,u);return}}qt.flags|=t,f.memoizedState=Do(1|i,o,m,u)}function Hh(t,i){return Ha(8390656,8,t,i)}function Yc(t,i){return Va(2048,8,t,i)}function Vh(t,i){return Va(4,2,t,i)}function Wh(t,i){return Va(4,4,t,i)}function Gh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Xh(t,i,o){return o=o!=null?o.concat([t]):null,Va(4,4,Gh.bind(null,i,t),o)}function qc(){}function $h(t,i){var o=ni();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Vc(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Yh(t,i){var o=ni();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Vc(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function qh(t,i,o){return(Br&21)===0?(t.baseState&&(t.baseState=!1,kn=!0),t.memoizedState=o):(li(o,i)||(o=Ft(),qt.lanes|=o,jr|=o,t.baseState=!0),i)}function Jx(t,i){var o=Pt;Pt=o!==0&&4>o?o:4,t(!0);var u=Hc.transition;Hc.transition={};try{t(!1),i()}finally{Pt=o,Hc.transition=u}}function Kh(){return ni().memoizedState}function Qx(t,i,o){var u=xr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Zh(t))Jh(i,o);else if(o=Ah(t,i,o,u),o!==null){var f=In();hi(o,t,u,f),Qh(o,i,u)}}function e0(t,i,o){var u=xr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Zh(t))Jh(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,H=m(w,o);if(f.hasEagerState=!0,f.eagerState=H,li(H,w)){var q=i.interleaved;q===null?(f.next=f,kc(i)):(f.next=q.next,q.next=f),i.interleaved=f;return}}catch{}finally{}o=Ah(t,i,f,u),o!==null&&(f=In(),hi(o,t,u,f),Qh(o,i,u))}}function Zh(t){var i=t.alternate;return t===qt||i!==null&&i===qt}function Jh(t,i){Po=ja=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Qh(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,hn(t,o)}}var Wa={readContext:ti,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},t0={readContext:ti,useCallback:function(t,i){return Ti().memoizedState=[t,i===void 0?null:i],t},useContext:ti,useEffect:Hh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ha(4194308,4,Gh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ha(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ha(4,2,t,i)},useMemo:function(t,i){var o=Ti();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Ti();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Qx.bind(null,qt,t),[u.memoizedState,t]},useRef:function(t){var i=Ti();return t={current:t},i.memoizedState=t},useState:Bh,useDebugValue:qc,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=Bh(!1),i=t[0];return t=Jx.bind(null,t[1]),Ti().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=qt,f=Ti();if(Xt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),mn===null)throw Error(n(349));(Br&30)!==0||Uh(u,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Hh(zh.bind(null,u,m,t),[t]),u.flags|=2048,Do(9,kh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var t=Ti(),i=mn.identifierPrefix;if(Xt){var o=zi,u=ki;o=(u&~(1<<32-vt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Lo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Zx++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},n0={readContext:ti,useCallback:$h,useContext:ti,useEffect:Yc,useImperativeHandle:Xh,useInsertionEffect:Vh,useLayoutEffect:Wh,useMemo:Yh,useReducer:Xc,useRef:jh,useState:function(){return Xc(Io)},useDebugValue:qc,useDeferredValue:function(t){var i=ni();return qh(i,on.memoizedState,t)},useTransition:function(){var t=Xc(Io)[0],i=ni().memoizedState;return[t,i]},useMutableSource:Dh,useSyncExternalStore:Nh,useId:Kh,unstable_isNewReconciler:!1},i0={readContext:ti,useCallback:$h,useContext:ti,useEffect:Yc,useImperativeHandle:Xh,useInsertionEffect:Vh,useLayoutEffect:Wh,useMemo:Yh,useReducer:$c,useRef:jh,useState:function(){return $c(Io)},useDebugValue:qc,useDeferredValue:function(t){var i=ni();return on===null?i.memoizedState=t:qh(i,on.memoizedState,t)},useTransition:function(){var t=$c(Io)[0],i=ni().memoizedState;return[t,i]},useMutableSource:Dh,useSyncExternalStore:Nh,useId:Kh,unstable_isNewReconciler:!1};function ui(t,i){if(t&&t.defaultProps){i=k({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Kc(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:k({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ga={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=In(),f=xr(t),m=Oi(u,f);m.payload=i,o!=null&&(m.callback=o),i=hr(t,m,f),i!==null&&(hi(i,t,f,u),za(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=In(),f=xr(t),m=Oi(u,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=hr(t,m,f),i!==null&&(hi(i,t,f,u),za(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=In(),u=xr(t),f=Oi(o,u);f.tag=2,i!=null&&(f.callback=i),i=hr(t,f,u),i!==null&&(hi(i,t,u,o),za(i,t,u))}};function ep(t,i,o,u,f,m,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!yo(o,u)||!yo(f,m):!0}function tp(t,i,o){var u=!1,f=ur,m=i.contextType;return typeof m=="object"&&m!==null?m=ti(m):(f=Un(i)?Ur:bn.current,u=i.contextTypes,m=(u=u!=null)?ys(t,f):ur),i=new i(o,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ga,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function np(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Ga.enqueueReplaceState(i,i.state,null)}function Zc(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},zc(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=ti(m):(m=Un(i)?Ur:bn.current,f.context=ys(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Kc(t,i,m,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ga.enqueueReplaceState(f,f.state,null),Fa(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,i){try{var o="",u=i;do o+=le(u),u=u.return;while(u);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function Jc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Qc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var r0=typeof WeakMap=="function"?WeakMap:Map;function ip(t,i,o){o=Oi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ja||(Ja=!0,pu=u),Qc(t,i)},o}function rp(t,i,o){o=Oi(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Qc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Qc(t,i),typeof u!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function sp(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new r0;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=v0.bind(null,t,i,o),i.then(t,t))}function op(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ap(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Oi(-1,1),i.tag=2,hr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var s0=T.ReactCurrentOwner,kn=!1;function Ln(t,i,o,u){i.child=t===null?Ch(i,null,o,u):Es(i,t.child,o,u)}function lp(t,i,o,u,f){o=o.render;var m=i.ref;return ws(i,f),u=Wc(t,i,o,u,m,f),o=Gc(),t!==null&&!kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(Xt&&o&&Cc(i),i.flags|=1,Ln(t,i,u,f),i.child)}function cp(t,i,o,u,f){if(t===null){var m=o.type;return typeof m=="function"&&!Su(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,up(t,i,m,u,f)):(t=rl(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:yo,o(w,u)&&t.ref===i.ref)return Bi(t,i,f)}return i.flags|=1,t=yr(m,u),t.ref=i.ref,t.return=i,i.child=t}function up(t,i,o,u,f){if(t!==null){var m=t.memoizedProps;if(yo(m,u)&&t.ref===i.ref)if(kn=!1,i.pendingProps=u=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(kn=!0);else return i.lanes=t.lanes,Bi(t,i,f)}return eu(t,i,o,u,f)}function dp(t,i,o){var u=i.pendingProps,f=u.children,m=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Rs,$n),$n|=o;else{if((o&1073741824)===0)return t=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Bt(Rs,$n),$n|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Bt(Rs,$n),$n|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Bt(Rs,$n),$n|=u;return Ln(t,i,f,o),i.child}function fp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function eu(t,i,o,u,f){var m=Un(o)?Ur:bn.current;return m=ys(i,m),ws(i,f),o=Wc(t,i,o,u,m,f),u=Gc(),t!==null&&!kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(Xt&&u&&Cc(i),i.flags|=1,Ln(t,i,o,f),i.child)}function hp(t,i,o,u,f){if(Un(o)){var m=!0;Ra(i)}else m=!1;if(ws(i,f),i.stateNode===null)$a(t,i),tp(i,o,u),Zc(i,o,u,f),u=!0;else if(t===null){var w=i.stateNode,H=i.memoizedProps;w.props=H;var q=w.context,pe=o.contextType;typeof pe=="object"&&pe!==null?pe=ti(pe):(pe=Un(o)?Ur:bn.current,pe=ys(i,pe));var Ae=o.getDerivedStateFromProps,Pe=typeof Ae=="function"||typeof w.getSnapshotBeforeUpdate=="function";Pe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(H!==u||q!==pe)&&np(i,w,u,pe),fr=!1;var Te=i.memoizedState;w.state=Te,Fa(i,u,w,f),q=i.memoizedState,H!==u||Te!==q||Nn.current||fr?(typeof Ae=="function"&&(Kc(i,o,Ae,u),q=i.memoizedState),(H=fr||ep(i,o,H,u,Te,q,pe))?(Pe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=q),w.props=u,w.state=q,w.context=pe,u=H):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,Rh(t,i),H=i.memoizedProps,pe=i.type===i.elementType?H:ui(i.type,H),w.props=pe,Pe=i.pendingProps,Te=w.context,q=o.contextType,typeof q=="object"&&q!==null?q=ti(q):(q=Un(o)?Ur:bn.current,q=ys(i,q));var Ye=o.getDerivedStateFromProps;(Ae=typeof Ye=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(H!==Pe||Te!==q)&&np(i,w,u,q),fr=!1,Te=i.memoizedState,w.state=Te,Fa(i,u,w,f);var Qe=i.memoizedState;H!==Pe||Te!==Qe||Nn.current||fr?(typeof Ye=="function"&&(Kc(i,o,Ye,u),Qe=i.memoizedState),(pe=fr||ep(i,o,pe,u,Te,Qe,q)||!1)?(Ae||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Qe,q),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Qe,q)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||H===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||H===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Qe),w.props=u,w.state=Qe,w.context=q,u=pe):(typeof w.componentDidUpdate!="function"||H===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||H===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),u=!1)}return tu(t,i,o,u,m,f)}function tu(t,i,o,u,f,m){fp(t,i);var w=(i.flags&128)!==0;if(!u&&!w)return f&&vh(i,o,!1),Bi(t,i,m);u=i.stateNode,s0.current=i;var H=w&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&w?(i.child=Es(i,t.child,null,m),i.child=Es(i,null,H,m)):Ln(t,i,H,m),i.memoizedState=u.state,f&&vh(i,o,!0),i.child}function pp(t){var i=t.stateNode;i.pendingContext?gh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&gh(t,i.context,!1),Fc(t,i.containerInfo)}function mp(t,i,o,u,f){return Ms(),Lc(f),i.flags|=256,Ln(t,i,o,u),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function gp(t,i,o){var u=i.pendingProps,f=Yt.current,m=!1,w=(i.flags&128)!==0,H;if((H=w)||(H=t!==null&&t.memoizedState===null?!1:(f&2)!==0),H?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Bt(Yt,f&1),t===null)return Pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,t=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=sl(w,u,0,null),t=Gr(t,u,o,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=iu(o),i.memoizedState=nu,t):ru(i,w));if(f=t.memoizedState,f!==null&&(H=f.dehydrated,H!==null))return o0(t,i,w,u,H,f,o);if(m){m=u.fallback,w=i.mode,f=t.child,H=f.sibling;var q={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=q,i.deletions=null):(u=yr(f,q),u.subtreeFlags=f.subtreeFlags&14680064),H!==null?m=yr(H,m):(m=Gr(m,w,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=t.child.memoizedState,w=w===null?iu(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=t.childLanes&~o,i.memoizedState=nu,u}return m=t.child,t=m.sibling,u=yr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function ru(t,i){return i=sl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Xa(t,i,o,u){return u!==null&&Lc(u),Es(i,t.child,null,o),t=ru(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function o0(t,i,o,u,f,m,w){if(o)return i.flags&256?(i.flags&=-257,u=Jc(Error(n(422))),Xa(t,i,w,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=u.fallback,f=i.mode,u=sl({mode:"visible",children:u.children},f,0,null),m=Gr(m,f,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Es(i,t.child,null,w),i.child.memoizedState=iu(w),i.memoizedState=nu,m);if((i.mode&1)===0)return Xa(t,i,w,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var H=u.dgst;return u=H,m=Error(n(419)),u=Jc(m,u,void 0),Xa(t,i,w,u)}if(H=(w&t.childLanes)!==0,kn||H){if(u=mn,u!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Fi(t,f),hi(u,t,f,-1))}return _u(),u=Jc(Error(n(421))),Xa(t,i,w,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=y0.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,Xn=lr(f.nextSibling),Gn=i,Xt=!0,ci=null,t!==null&&(Qn[ei++]=ki,Qn[ei++]=zi,Qn[ei++]=kr,ki=t.id,zi=t.overflow,kr=i),i=ru(i,u.children),i.flags|=4096,i)}function xp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Uc(t.return,i,o)}function su(t,i,o,u,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function vp(t,i,o){var u=i.pendingProps,f=u.revealOrder,m=u.tail;if(Ln(t,i,u.children,o),u=Yt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,o,i);else if(t.tag===19)xp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Bt(Yt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Oa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),su(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Oa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}su(i,!0,o,null,m);break;case"together":su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),jr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=yr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=yr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function a0(t,i,o){switch(i.tag){case 3:pp(i),Ms();break;case 5:Ih(i);break;case 1:Un(i.type)&&Ra(i);break;case 4:Fc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Bt(Ua,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Bt(Yt,Yt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?gp(t,i,o):(Bt(Yt,Yt.current&1),t=Bi(t,i,o),t!==null?t.sibling:null);Bt(Yt,Yt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return vp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(Yt,Yt.current),u)break;return null;case 22:case 23:return i.lanes=0,dp(t,i,o)}return Bi(t,i,o)}var yp,ou,_p,Sp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ou=function(){},_p=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Or(wi.current);var m=null;switch(o){case"input":f=j(t,f),u=j(t,u),m=[];break;case"select":f=k({},f,{value:void 0}),u=k({},u,{value:void 0}),m=[];break;case"textarea":f=R(t,f),u=R(t,u),m=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ta)}ct(o,u);var w;o=null;for(pe in f)if(!u.hasOwnProperty(pe)&&f.hasOwnProperty(pe)&&f[pe]!=null)if(pe==="style"){var H=f[pe];for(w in H)H.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?m||(m=[]):(m=m||[]).push(pe,null));for(pe in u){var q=u[pe];if(H=f!=null?f[pe]:void 0,u.hasOwnProperty(pe)&&q!==H&&(q!=null||H!=null))if(pe==="style")if(H){for(w in H)!H.hasOwnProperty(w)||q&&q.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in q)q.hasOwnProperty(w)&&H[w]!==q[w]&&(o||(o={}),o[w]=q[w])}else o||(m||(m=[]),m.push(pe,o)),o=q;else pe==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,H=H?H.__html:void 0,q!=null&&H!==q&&(m=m||[]).push(pe,q)):pe==="children"?typeof q!="string"&&typeof q!="number"||(m=m||[]).push(pe,""+q):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(q!=null&&pe==="onScroll"&&Vt("scroll",t),m||H===q||(m=[])):(m=m||[]).push(pe,q))}o&&(m=m||[]).push("style",o);var pe=m;(i.updateQueue=pe)&&(i.flags|=4)}},Sp=function(t,i,o,u){o!==u&&(i.flags|=4)};function No(t,i){if(!Xt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Tn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function l0(t,i,o){var u=i.pendingProps;switch(Ac(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return Un(i.type)&&Aa(),Tn(i),null;case 3:return u=i.stateNode,Ts(),Wt(Nn),Wt(bn),jc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(xu(ci),ci=null))),ou(t,i),Tn(i),null;case 5:Oc(i);var f=Or(Ro.current);if(o=i.type,t!==null&&i.stateNode!=null)_p(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Tn(i),null}if(t=Or(wi.current),Da(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[bi]=i,u[bo]=m,t=(i.mode&1)!==0,o){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(f=0;f<So.length;f++)Vt(So[f],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":ve(u,m),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Vt("invalid",u);break;case"textarea":oe(u,m),Vt("invalid",u)}ct(o,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var H=m[w];w==="children"?typeof H=="string"?u.textContent!==H&&(m.suppressHydrationWarning!==!0&&wa(u.textContent,H,t),f=["children",H]):typeof H=="number"&&u.textContent!==""+H&&(m.suppressHydrationWarning!==!0&&wa(u.textContent,H,t),f=["children",""+H]):a.hasOwnProperty(w)&&H!=null&&w==="onScroll"&&Vt("scroll",u)}switch(o){case"input":et(u),Fe(u,m,!0);break;case"textarea":et(u),Ee(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ta)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_e(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=w.createElement(o,{is:u.is}):(t=w.createElement(o),o==="select"&&(w=t,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):t=w.createElementNS(t,o),t[bi]=i,t[bo]=u,yp(t,i,!1,!1),i.stateNode=t;e:{switch(w=ut(o,u),o){case"dialog":Vt("cancel",t),Vt("close",t),f=u;break;case"iframe":case"object":case"embed":Vt("load",t),f=u;break;case"video":case"audio":for(f=0;f<So.length;f++)Vt(So[f],t);f=u;break;case"source":Vt("error",t),f=u;break;case"img":case"image":case"link":Vt("error",t),Vt("load",t),f=u;break;case"details":Vt("toggle",t),f=u;break;case"input":ve(t,u),f=j(t,u),Vt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=k({},u,{value:void 0}),Vt("invalid",t);break;case"textarea":oe(t,u),f=R(t,u),Vt("invalid",t);break;default:f=u}ct(o,f),H=f;for(m in H)if(H.hasOwnProperty(m)){var q=H[m];m==="style"?Re(t,q):m==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&We(t,q)):m==="children"?typeof q=="string"?(o!=="textarea"||q!=="")&&pt(t,q):typeof q=="number"&&pt(t,""+q):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?q!=null&&m==="onScroll"&&Vt("scroll",t):q!=null&&D(t,m,q,w))}switch(o){case"input":et(t),Fe(t,u,!1);break;case"textarea":et(t),Ee(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ye(u.value));break;case"select":t.multiple=!!u.multiple,m=u.value,m!=null?z(t,!!u.multiple,m,!1):u.defaultValue!=null&&z(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ta)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(t&&i.stateNode!=null)Sp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Or(Ro.current),Or(wi.current),Da(i)){if(u=i.stateNode,o=i.memoizedProps,u[bi]=i,(m=u.nodeValue!==o)&&(t=Gn,t!==null))switch(t.tag){case 3:wa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(u.nodeValue,o,(t.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[bi]=i,i.stateNode=u}return Tn(i),null;case 13:if(Wt(Yt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xt&&Xn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),Ms(),i.flags|=98560,m=!1;else if(m=Da(i),u!==null&&u.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[bi]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),m=!1}else ci!==null&&(xu(ci),ci=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Yt.current&1)!==0?an===0&&(an=3):_u())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Ts(),ou(t,i),t===null&&Mo(i.stateNode.containerInfo),Tn(i),null;case 10:return Nc(i.type._context),Tn(i),null;case 17:return Un(i.type)&&Aa(),Tn(i),null;case 19:if(Wt(Yt),m=i.memoizedState,m===null)return Tn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)No(m,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Oa(t),w!==null){for(i.flags|=128,No(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,t=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,t=w.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Bt(Yt,Yt.current&1|2),i.child}t=t.sibling}m.tail!==null&&ae()>Ps&&(i.flags|=128,u=!0,No(m,!1),i.lanes=4194304)}else{if(!u)if(t=Oa(w),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),No(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Xt)return Tn(i),null}else 2*ae()-m.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,u=!0,No(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(o=m.last,o!==null?o.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=ae(),i.sibling=null,o=Yt.current,Bt(Yt,u?o&1|2:o&1),i):(Tn(i),null);case 22:case 23:return yu(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?($n&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function c0(t,i){switch(Ac(i),i.tag){case 1:return Un(i.type)&&Aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ts(),Wt(Nn),Wt(bn),jc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Oc(i),null;case 13:if(Wt(Yt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Wt(Yt),null;case 4:return Ts(),null;case 10:return Nc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Ya=!1,Cn=!1,u0=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function As(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Jt(t,i,u)}else o.current=null}function au(t,i,o){try{o()}catch(u){Jt(t,i,u)}}var Mp=!1;function d0(t,i){if(yc=pa,t=eh(),dc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,H=-1,q=-1,pe=0,Ae=0,Pe=t,Te=null;t:for(;;){for(var Ye;Pe!==o||f!==0&&Pe.nodeType!==3||(H=w+f),Pe!==m||u!==0&&Pe.nodeType!==3||(q=w+u),Pe.nodeType===3&&(w+=Pe.nodeValue.length),(Ye=Pe.firstChild)!==null;)Te=Pe,Pe=Ye;for(;;){if(Pe===t)break t;if(Te===o&&++pe===f&&(H=w),Te===m&&++Ae===u&&(q=w),(Ye=Pe.nextSibling)!==null)break;Pe=Te,Te=Pe.parentNode}Pe=Ye}o=H===-1||q===-1?null:{start:H,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;for(_c={focusedElem:t,selectionRange:o},pa=!1,Ze=i;Ze!==null;)if(i=Ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ze=t;else for(;Ze!==null;){i=Ze;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var nt=Qe.memoizedProps,tn=Qe.memoizedState,se=i.stateNode,Q=se.getSnapshotBeforeUpdate(i.elementType===i.type?nt:ui(i.type,nt),tn);se.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var ce=i.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ze){Jt(i,i.return,ze)}if(t=i.sibling,t!==null){t.return=i.return,Ze=t;break}Ze=i.return}return Qe=Mp,Mp=!1,Qe}function Uo(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&au(i,o,m)}f=f.next}while(f!==u)}}function qa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function lu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ep(t){var i=t.alternate;i!==null&&(t.alternate=null,Ep(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[bi],delete i[bo],delete i[bc],delete i[$x],delete i[Yx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ta));else if(u!==4&&(t=t.child,t!==null))for(cu(t,i,o),t=t.sibling;t!==null;)cu(t,i,o),t=t.sibling}function uu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}var yn=null,di=!1;function pr(t,i,o){for(o=o.child;o!==null;)Tp(t,i,o),o=o.sibling}function Tp(t,i,o){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(dt,o)}catch{}switch(o.tag){case 5:Cn||As(o,i);case 6:var u=yn,f=di;yn=null,pr(t,i,o),yn=u,di=f,yn!==null&&(di?(t=yn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):yn.removeChild(o.stateNode));break;case 18:yn!==null&&(di?(t=yn,o=o.stateNode,t.nodeType===8?Ec(t.parentNode,o):t.nodeType===1&&Ec(t,o),ho(t)):Ec(yn,o.stateNode));break;case 4:u=yn,f=di,yn=o.stateNode.containerInfo,di=!0,pr(t,i,o),yn=u,di=f;break;case 0:case 11:case 14:case 15:if(!Cn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&au(o,i,w),f=f.next}while(f!==u)}pr(t,i,o);break;case 1:if(!Cn&&(As(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(H){Jt(o,i,H)}pr(t,i,o);break;case 21:pr(t,i,o);break;case 22:o.mode&1?(Cn=(u=Cn)||o.memoizedState!==null,pr(t,i,o),Cn=u):pr(t,i,o);break;default:pr(t,i,o)}}function Cp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new u0),i.forEach(function(u){var f=_0.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function fi(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var m=t,w=i,H=w;e:for(;H!==null;){switch(H.tag){case 5:yn=H.stateNode,di=!1;break e;case 3:yn=H.stateNode.containerInfo,di=!0;break e;case 4:yn=H.stateNode.containerInfo,di=!0;break e}H=H.return}if(yn===null)throw Error(n(160));Tp(m,w,f),yn=null,di=!1;var q=f.alternate;q!==null&&(q.return=null),f.return=null}catch(pe){Jt(f,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ap(i,t),i=i.sibling}function Ap(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fi(i,t),Ci(t),u&4){try{Uo(3,t,t.return),qa(3,t)}catch(nt){Jt(t,t.return,nt)}try{Uo(5,t,t.return)}catch(nt){Jt(t,t.return,nt)}}break;case 1:fi(i,t),Ci(t),u&512&&o!==null&&As(o,o.return);break;case 5:if(fi(i,t),Ci(t),u&512&&o!==null&&As(o,o.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(nt){Jt(t,t.return,nt)}}if(u&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,w=o!==null?o.memoizedProps:m,H=t.type,q=t.updateQueue;if(t.updateQueue=null,q!==null)try{H==="input"&&m.type==="radio"&&m.name!=null&&Le(f,m),ut(H,w);var pe=ut(H,m);for(w=0;w<q.length;w+=2){var Ae=q[w],Pe=q[w+1];Ae==="style"?Re(f,Pe):Ae==="dangerouslySetInnerHTML"?We(f,Pe):Ae==="children"?pt(f,Pe):D(f,Ae,Pe,pe)}switch(H){case"input":Xe(f,m);break;case"textarea":Me(f,m);break;case"select":var Te=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ye=m.value;Ye!=null?z(f,!!m.multiple,Ye,!1):Te!==!!m.multiple&&(m.defaultValue!=null?z(f,!!m.multiple,m.defaultValue,!0):z(f,!!m.multiple,m.multiple?[]:"",!1))}f[bo]=m}catch(nt){Jt(t,t.return,nt)}}break;case 6:if(fi(i,t),Ci(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(nt){Jt(t,t.return,nt)}}break;case 3:if(fi(i,t),Ci(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ho(i.containerInfo)}catch(nt){Jt(t,t.return,nt)}break;case 4:fi(i,t),Ci(t);break;case 13:fi(i,t),Ci(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(hu=ae())),u&4&&Cp(t);break;case 22:if(Ae=o!==null&&o.memoizedState!==null,t.mode&1?(Cn=(pe=Cn)||Ae,fi(i,t),Cn=pe):fi(i,t),Ci(t),u&8192){if(pe=t.memoizedState!==null,(t.stateNode.isHidden=pe)&&!Ae&&(t.mode&1)!==0)for(Ze=t,Ae=t.child;Ae!==null;){for(Pe=Ze=Ae;Ze!==null;){switch(Te=Ze,Ye=Te.child,Te.tag){case 0:case 11:case 14:case 15:Uo(4,Te,Te.return);break;case 1:As(Te,Te.return);var Qe=Te.stateNode;if(typeof Qe.componentWillUnmount=="function"){u=Te,o=Te.return;try{i=u,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(nt){Jt(u,o,nt)}}break;case 5:As(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Lp(Pe);continue}}Ye!==null?(Ye.return=Te,Ze=Ye):Lp(Pe)}Ae=Ae.sibling}e:for(Ae=null,Pe=t;;){if(Pe.tag===5){if(Ae===null){Ae=Pe;try{f=Pe.stateNode,pe?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(H=Pe.stateNode,q=Pe.memoizedProps.style,w=q!=null&&q.hasOwnProperty("display")?q.display:null,H.style.display=Y("display",w))}catch(nt){Jt(t,t.return,nt)}}}else if(Pe.tag===6){if(Ae===null)try{Pe.stateNode.nodeValue=pe?"":Pe.memoizedProps}catch(nt){Jt(t,t.return,nt)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===t)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===t)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===t)break e;Ae===Pe&&(Ae=null),Pe=Pe.return}Ae===Pe&&(Ae=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:fi(i,t),Ci(t),u&4&&Cp(t);break;case 21:break;default:fi(i,t),Ci(t)}}function Ci(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(pt(f,""),u.flags&=-33);var m=wp(t);uu(t,m,f);break;case 3:case 4:var w=u.stateNode.containerInfo,H=wp(t);cu(t,H,w);break;default:throw Error(n(161))}}catch(q){Jt(t,t.return,q)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function f0(t,i,o){Ze=t,Rp(t)}function Rp(t,i,o){for(var u=(t.mode&1)!==0;Ze!==null;){var f=Ze,m=f.child;if(f.tag===22&&u){var w=f.memoizedState!==null||Ya;if(!w){var H=f.alternate,q=H!==null&&H.memoizedState!==null||Cn;H=Ya;var pe=Cn;if(Ya=w,(Cn=q)&&!pe)for(Ze=f;Ze!==null;)w=Ze,q=w.child,w.tag===22&&w.memoizedState!==null?Ip(f):q!==null?(q.return=w,Ze=q):Ip(f);for(;m!==null;)Ze=m,Rp(m),m=m.sibling;Ze=f,Ya=H,Cn=pe}Pp(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ze=m):Pp(t)}}function Pp(t){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Cn||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Cn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ui(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Lh(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Lh(i,w,o)}break;case 5:var H=i.stateNode;if(o===null&&i.flags&4){o=H;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&o.focus();break;case"img":q.src&&(o.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Ae=pe.memoizedState;if(Ae!==null){var Pe=Ae.dehydrated;Pe!==null&&ho(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Cn||i.flags&512&&lu(i)}catch(Te){Jt(i,i.return,Te)}}if(i===t){Ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function Lp(t){for(;Ze!==null;){var i=Ze;if(i===t){Ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function Ip(t){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(q){Jt(i,o,q)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(q){Jt(i,f,q)}}var m=i.return;try{lu(i)}catch(q){Jt(i,m,q)}break;case 5:var w=i.return;try{lu(i)}catch(q){Jt(i,w,q)}}}catch(q){Jt(i,i.return,q)}if(i===t){Ze=null;break}var H=i.sibling;if(H!==null){H.return=i.return,Ze=H;break}Ze=i.return}}var h0=Math.ceil,Ka=T.ReactCurrentDispatcher,du=T.ReactCurrentOwner,ii=T.ReactCurrentBatchConfig,Lt=0,mn=null,nn=null,_n=0,$n=0,Rs=cr(0),an=0,ko=null,jr=0,Za=0,fu=0,zo=null,zn=null,hu=0,Ps=1/0,ji=null,Ja=!1,pu=null,mr=null,Qa=!1,gr=null,el=0,Fo=0,mu=null,tl=-1,nl=0;function In(){return(Lt&6)!==0?ae():tl!==-1?tl:tl=ae()}function xr(t){return(t.mode&1)===0?1:(Lt&2)!==0&&_n!==0?_n&-_n:Kx.transition!==null?(nl===0&&(nl=Ft()),nl):(t=Pt,t!==0||(t=window.event,t=t===void 0?16:Nf(t.type)),t)}function hi(t,i,o,u){if(50<Fo)throw Fo=0,mu=null,Error(n(185));fn(t,o,u),((Lt&2)===0||t!==mn)&&(t===mn&&((Lt&2)===0&&(Za|=o),an===4&&vr(t,_n)),Fn(t,u),o===1&&Lt===0&&(i.mode&1)===0&&(Ps=ae()+500,Pa&&dr()))}function Fn(t,i){var o=t.callbackNode;Pn(t,i);var u=Mn(t,t===mn?_n:0);if(u===0)o!==null&&L(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&L(o),i===1)t.tag===0?qx(Np.bind(null,t)):yh(Np.bind(null,t)),Gx(function(){(Lt&6)===0&&dr()}),o=null;else{switch(Ei(u)){case 1:o=Ie;break;case 4:o=He;break;case 16:o=$e;break;case 536870912:o=ft;break;default:o=$e}o=Hp(o,Dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Dp(t,i){if(tl=-1,nl=0,(Lt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ls()&&t.callbackNode!==o)return null;var u=Mn(t,t===mn?_n:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=il(t,u);else{i=u;var f=Lt;Lt|=2;var m=kp();(mn!==t||_n!==i)&&(ji=null,Ps=ae()+500,Vr(t,i));do try{g0();break}catch(H){Up(t,H)}while(!0);Dc(),Ka.current=m,Lt=f,nn!==null?i=0:(mn=null,_n=0,i=an)}if(i!==0){if(i===2&&(f=Di(t),f!==0&&(u=f,i=gu(t,f))),i===1)throw o=ko,Vr(t,0),vr(t,u),Fn(t,ae()),o;if(i===6)vr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!p0(f)&&(i=il(t,u),i===2&&(m=Di(t),m!==0&&(u=m,i=gu(t,m))),i===1))throw o=ko,Vr(t,0),vr(t,u),Fn(t,ae()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Wr(t,zn,ji);break;case 3:if(vr(t,u),(u&130023424)===u&&(i=hu+500-ae(),10<i)){if(Mn(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){In(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Mc(Wr.bind(null,t,zn,ji),i);break}Wr(t,zn,ji);break;case 4:if(vr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var w=31-vt(u);m=1<<w,w=i[w],w>f&&(f=w),u&=~m}if(u=f,u=ae()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*h0(u/1960))-u,10<u){t.timeoutHandle=Mc(Wr.bind(null,t,zn,ji),u);break}Wr(t,zn,ji);break;case 5:Wr(t,zn,ji);break;default:throw Error(n(329))}}}return Fn(t,ae()),t.callbackNode===o?Dp.bind(null,t):null}function gu(t,i){var o=zo;return t.current.memoizedState.isDehydrated&&(Vr(t,i).flags|=256),t=il(t,i),t!==2&&(i=zn,zn=o,i!==null&&xu(i)),t}function xu(t){zn===null?zn=t:zn.push.apply(zn,t)}function p0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!li(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(t,i){for(i&=~fu,i&=~Za,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-vt(i),u=1<<o;t[o]=-1,i&=~u}}function Np(t){if((Lt&6)!==0)throw Error(n(327));Ls();var i=Mn(t,0);if((i&1)===0)return Fn(t,ae()),null;var o=il(t,i);if(t.tag!==0&&o===2){var u=Di(t);u!==0&&(i=u,o=gu(t,u))}if(o===1)throw o=ko,Vr(t,0),vr(t,i),Fn(t,ae()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Wr(t,zn,ji),Fn(t,ae()),null}function vu(t,i){var o=Lt;Lt|=1;try{return t(i)}finally{Lt=o,Lt===0&&(Ps=ae()+500,Pa&&dr())}}function Hr(t){gr!==null&&gr.tag===0&&(Lt&6)===0&&Ls();var i=Lt;Lt|=1;var o=ii.transition,u=Pt;try{if(ii.transition=null,Pt=1,t)return t()}finally{Pt=u,ii.transition=o,Lt=i,(Lt&6)===0&&dr()}}function yu(){$n=Rs.current,Wt(Rs)}function Vr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Wx(o)),nn!==null)for(o=nn.return;o!==null;){var u=o;switch(Ac(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Aa();break;case 3:Ts(),Wt(Nn),Wt(bn),jc();break;case 5:Oc(u);break;case 4:Ts();break;case 13:Wt(Yt);break;case 19:Wt(Yt);break;case 10:Nc(u.type._context);break;case 22:case 23:yu()}o=o.return}if(mn=t,nn=t=yr(t.current,null),_n=$n=i,an=0,ko=null,fu=Za=jr=0,zn=zo=null,Fr!==null){for(i=0;i<Fr.length;i++)if(o=Fr[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,m=o.pending;if(m!==null){var w=m.next;m.next=f,u.next=w}o.pending=u}Fr=null}return t}function Up(t,i){do{var o=nn;try{if(Dc(),Ba.current=Wa,ja){for(var u=qt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}ja=!1}if(Br=0,pn=on=qt=null,Po=!1,Lo=0,du.current=null,o===null||o.return===null){an=1,ko=i,nn=null;break}e:{var m=t,w=o.return,H=o,q=i;if(i=_n,H.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var pe=q,Ae=H,Pe=Ae.tag;if((Ae.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Te=Ae.alternate;Te?(Ae.updateQueue=Te.updateQueue,Ae.memoizedState=Te.memoizedState,Ae.lanes=Te.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var Ye=op(w);if(Ye!==null){Ye.flags&=-257,ap(Ye,w,H,m,i),Ye.mode&1&&sp(m,pe,i),i=Ye,q=pe;var Qe=i.updateQueue;if(Qe===null){var nt=new Set;nt.add(q),i.updateQueue=nt}else Qe.add(q);break e}else{if((i&1)===0){sp(m,pe,i),_u();break e}q=Error(n(426))}}else if(Xt&&H.mode&1){var tn=op(w);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),ap(tn,w,H,m,i),Lc(Cs(q,H));break e}}m=q=Cs(q,H),an!==4&&(an=2),zo===null?zo=[m]:zo.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var se=ip(m,q,i);Ph(m,se);break e;case 1:H=q;var Q=m.type,ce=m.stateNode;if((m.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(mr===null||!mr.has(ce)))){m.flags|=65536,i&=-i,m.lanes|=i;var ze=rp(m,H,i);Ph(m,ze);break e}}m=m.return}while(m!==null)}Fp(o)}catch(it){i=it,nn===o&&o!==null&&(nn=o=o.return);continue}break}while(!0)}function kp(){var t=Ka.current;return Ka.current=Wa,t===null?Wa:t}function _u(){(an===0||an===3||an===2)&&(an=4),mn===null||(jr&268435455)===0&&(Za&268435455)===0||vr(mn,_n)}function il(t,i){var o=Lt;Lt|=2;var u=kp();(mn!==t||_n!==i)&&(ji=null,Vr(t,i));do try{m0();break}catch(f){Up(t,f)}while(!0);if(Dc(),Lt=o,Ka.current=u,nn!==null)throw Error(n(261));return mn=null,_n=0,an}function m0(){for(;nn!==null;)zp(nn)}function g0(){for(;nn!==null&&!ee();)zp(nn)}function zp(t){var i=jp(t.alternate,t,$n);t.memoizedProps=t.pendingProps,i===null?Fp(t):nn=i,du.current=null}function Fp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=l0(o,i,$n),o!==null){nn=o;return}}else{if(o=c0(o,i),o!==null){o.flags&=32767,nn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{an=6,nn=null;return}}if(i=i.sibling,i!==null){nn=i;return}nn=i=t}while(i!==null);an===0&&(an=5)}function Wr(t,i,o){var u=Pt,f=ii.transition;try{ii.transition=null,Pt=1,x0(t,i,o,u)}finally{ii.transition=f,Pt=u}return null}function x0(t,i,o,u){do Ls();while(gr!==null);if((Lt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=o.lanes|o.childLanes;if(vn(t,m),t===mn&&(nn=mn=null,_n=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Qa||(Qa=!0,Hp($e,function(){return Ls(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ii.transition,ii.transition=null;var w=Pt;Pt=1;var H=Lt;Lt|=4,du.current=null,d0(t,o),Ap(o,t),zx(_c),pa=!!yc,_c=yc=null,t.current=o,f0(o),fe(),Lt=H,Pt=w,ii.transition=m}else t.current=o;if(Qa&&(Qa=!1,gr=t,el=f),m=t.pendingLanes,m===0&&(mr=null),Tt(o.stateNode),Fn(t,ae()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(Ja)throw Ja=!1,t=pu,pu=null,t;return(el&1)!==0&&t.tag!==0&&Ls(),m=t.pendingLanes,(m&1)!==0?t===mu?Fo++:(Fo=0,mu=t):Fo=0,dr(),null}function Ls(){if(gr!==null){var t=Ei(el),i=ii.transition,o=Pt;try{if(ii.transition=null,Pt=16>t?16:t,gr===null)var u=!1;else{if(t=gr,gr=null,el=0,(Lt&6)!==0)throw Error(n(331));var f=Lt;for(Lt|=4,Ze=t.current;Ze!==null;){var m=Ze,w=m.child;if((Ze.flags&16)!==0){var H=m.deletions;if(H!==null){for(var q=0;q<H.length;q++){var pe=H[q];for(Ze=pe;Ze!==null;){var Ae=Ze;switch(Ae.tag){case 0:case 11:case 15:Uo(8,Ae,m)}var Pe=Ae.child;if(Pe!==null)Pe.return=Ae,Ze=Pe;else for(;Ze!==null;){Ae=Ze;var Te=Ae.sibling,Ye=Ae.return;if(Ep(Ae),Ae===pe){Ze=null;break}if(Te!==null){Te.return=Ye,Ze=Te;break}Ze=Ye}}}var Qe=m.alternate;if(Qe!==null){var nt=Qe.child;if(nt!==null){Qe.child=null;do{var tn=nt.sibling;nt.sibling=null,nt=tn}while(nt!==null)}}Ze=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ze=w;else e:for(;Ze!==null;){if(m=Ze,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Uo(9,m,m.return)}var se=m.sibling;if(se!==null){se.return=m.return,Ze=se;break e}Ze=m.return}}var Q=t.current;for(Ze=Q;Ze!==null;){w=Ze;var ce=w.child;if((w.subtreeFlags&2064)!==0&&ce!==null)ce.return=w,Ze=ce;else e:for(w=Q;Ze!==null;){if(H=Ze,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:qa(9,H)}}catch(it){Jt(H,H.return,it)}if(H===w){Ze=null;break e}var ze=H.sibling;if(ze!==null){ze.return=H.return,Ze=ze;break e}Ze=H.return}}if(Lt=f,dr(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(dt,t)}catch{}u=!0}return u}finally{Pt=o,ii.transition=i}}return!1}function Op(t,i,o){i=Cs(o,i),i=ip(t,i,1),t=hr(t,i,1),i=In(),t!==null&&(fn(t,1,i),Fn(t,i))}function Jt(t,i,o){if(t.tag===3)Op(t,t,o);else for(;i!==null;){if(i.tag===3){Op(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){t=Cs(o,t),t=rp(i,t,1),i=hr(i,t,1),t=In(),i!==null&&(fn(i,1,t),Fn(i,t));break}}i=i.return}}function v0(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=In(),t.pingedLanes|=t.suspendedLanes&o,mn===t&&(_n&o)===o&&(an===4||an===3&&(_n&130023424)===_n&&500>ae()-hu?Vr(t,0):fu|=o),Fn(t,i)}function Bp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Zt,Zt<<=1,(Zt&130023424)===0&&(Zt=4194304)));var o=In();t=Fi(t,i),t!==null&&(fn(t,i,o),Fn(t,o))}function y0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Bp(t,o)}function _0(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Bp(t,o)}var jp;jp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Nn.current)kn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return kn=!1,a0(t,i,o);kn=(t.flags&131072)!==0}else kn=!1,Xt&&(i.flags&1048576)!==0&&_h(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;$a(t,i),t=i.pendingProps;var f=ys(i,bn.current);ws(i,o),f=Wc(null,i,u,t,f,o);var m=Gc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(u)?(m=!0,Ra(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,zc(i),f.updater=Ga,i.stateNode=f,f._reactInternals=i,Zc(i,u,t,o),i=tu(null,i,u,!0,m,o)):(i.tag=0,Xt&&m&&Cc(i),Ln(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch($a(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=M0(u),t=ui(u,t),f){case 0:i=eu(null,i,u,t,o);break e;case 1:i=hp(null,i,u,t,o);break e;case 11:i=lp(null,i,u,t,o);break e;case 14:i=cp(null,i,u,ui(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),eu(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),hp(t,i,u,f,o);case 3:e:{if(pp(i),t===null)throw Error(n(387));u=i.pendingProps,m=i.memoizedState,f=m.element,Rh(t,i),Fa(i,u,null,o);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Cs(Error(n(423)),i),i=mp(t,i,u,o,f);break e}else if(u!==f){f=Cs(Error(n(424)),i),i=mp(t,i,u,o,f);break e}else for(Xn=lr(i.stateNode.containerInfo.firstChild),Gn=i,Xt=!0,ci=null,o=Ch(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ms(),u===f){i=Bi(t,i,o);break e}Ln(t,i,u,o)}i=i.child}return i;case 5:return Ih(i),t===null&&Pc(i),u=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,w=f.children,Sc(u,f)?w=null:m!==null&&Sc(u,m)&&(i.flags|=32),fp(t,i),Ln(t,i,w,o),i.child;case 6:return t===null&&Pc(i),null;case 13:return gp(t,i,o);case 4:return Fc(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Es(i,null,u,o):Ln(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),lp(t,i,u,f,o);case 7:return Ln(t,i,i.pendingProps,o),i.child;case 8:return Ln(t,i,i.pendingProps.children,o),i.child;case 12:return Ln(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,Bt(Ua,u._currentValue),u._currentValue=w,m!==null)if(li(m.value,w)){if(m.children===f.children&&!Nn.current){i=Bi(t,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var H=m.dependencies;if(H!==null){w=m.child;for(var q=H.firstContext;q!==null;){if(q.context===u){if(m.tag===1){q=Oi(-1,o&-o),q.tag=2;var pe=m.updateQueue;if(pe!==null){pe=pe.shared;var Ae=pe.pending;Ae===null?q.next=q:(q.next=Ae.next,Ae.next=q),pe.pending=q}}m.lanes|=o,q=m.alternate,q!==null&&(q.lanes|=o),Uc(m.return,o,i),H.lanes|=o;break}q=q.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(n(341));w.lanes|=o,H=w.alternate,H!==null&&(H.lanes|=o),Uc(w,o,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Ln(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,ws(i,o),f=ti(f),u=u(f),i.flags|=1,Ln(t,i,u,o),i.child;case 14:return u=i.type,f=ui(u,i.pendingProps),f=ui(u.type,f),cp(t,i,u,f,o);case 15:return up(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),$a(t,i),i.tag=1,Un(u)?(t=!0,Ra(i)):t=!1,ws(i,o),tp(i,u,f),Zc(i,u,f,o),tu(null,i,u,!0,t,o);case 19:return vp(t,i,o);case 22:return dp(t,i,o)}throw Error(n(156,i.tag))};function Hp(t,i){return da(t,i)}function S0(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,i,o,u){return new S0(t,i,o,u)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function M0(t){if(typeof t=="function")return Su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===G)return 11;if(t===Z)return 14}return 2}function yr(t,i){var o=t.alternate;return o===null?(o=ri(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function rl(t,i,o,u,f,m){var w=2;if(u=t,typeof t=="function")Su(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case U:return Gr(o.children,f,m,i);case N:w=8,f|=8;break;case P:return t=ri(12,o,i,f|2),t.elementType=P,t.lanes=m,t;case J:return t=ri(13,o,i,f),t.elementType=J,t.lanes=m,t;case X:return t=ri(19,o,i,f),t.elementType=X,t.lanes=m,t;case me:return sl(o,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:w=10;break e;case V:w=9;break e;case G:w=11;break e;case Z:w=14;break e;case re:w=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ri(w,o,i,f),i.elementType=t,i.type=u,i.lanes=m,i}function Gr(t,i,o,u){return t=ri(7,t,u,i),t.lanes=o,t}function sl(t,i,o,u){return t=ri(22,t,u,i),t.elementType=me,t.lanes=o,t.stateNode={isHidden:!1},t}function Mu(t,i,o){return t=ri(6,t,null,i),t.lanes=o,t}function Eu(t,i,o){return i=ri(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function E0(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bu(t,i,o,u,f,m,w,H,q){return t=new E0(t,i,o,H,q),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ri(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(m),t}function b0(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Vp(t){if(!t)return ur;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Un(o))return xh(t,o,i)}return i}function Wp(t,i,o,u,f,m,w,H,q){return t=bu(o,u,!0,t,f,m,w,H,q),t.context=Vp(null),o=t.current,u=In(),f=xr(o),m=Oi(u,f),m.callback=i??null,hr(o,m,f),t.current.lanes=f,fn(t,f,u),Fn(t,u),t}function ol(t,i,o,u){var f=i.current,m=In(),w=xr(f);return o=Vp(o),i.context===null?i.context=o:i.pendingContext=o,i=Oi(m,w),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=hr(f,i,w),t!==null&&(hi(t,f,w,m),za(t,f,w)),w}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function wu(t,i){Gp(t,i),(t=t.alternate)&&Gp(t,i)}function w0(){return null}var Xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tu(t){this._internalRoot=t}ll.prototype.render=Tu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ol(t,i,null,null)},ll.prototype.unmount=Tu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Hr(function(){ol(null,t,null,null)}),i[Ni]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var i=Rf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<sr.length&&i!==0&&i<sr[o].priority;o++);sr.splice(o,0,t),o===0&&If(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $p(){}function T0(t,i,o,u,f){if(f){if(typeof u=="function"){var m=u;u=function(){var pe=al(w);m.call(pe)}}var w=Wp(i,u,t,0,null,!1,!1,"",$p);return t._reactRootContainer=w,t[Ni]=w.current,Mo(t.nodeType===8?t.parentNode:t),Hr(),w}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var H=u;u=function(){var pe=al(q);H.call(pe)}}var q=bu(t,0,!1,null,null,!1,!1,"",$p);return t._reactRootContainer=q,t[Ni]=q.current,Mo(t.nodeType===8?t.parentNode:t),Hr(function(){ol(i,q,o,u)}),q}function ul(t,i,o,u,f){var m=o._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var H=f;f=function(){var q=al(w);H.call(q)}}ol(i,w,t,f)}else w=T0(o,i,t,f,u);return al(w)}Cf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=bt(i.pendingLanes);o!==0&&(hn(i,o|1),Fn(i,ae()),(Lt&6)===0&&(Ps=ae()+500,dr()))}break;case 13:Hr(function(){var u=Fi(t,1);if(u!==null){var f=In();hi(u,t,1,f)}}),wu(t,1)}},Jl=function(t){if(t.tag===13){var i=Fi(t,134217728);if(i!==null){var o=In();hi(i,t,134217728,o)}wu(t,134217728)}},Af=function(t){if(t.tag===13){var i=xr(t),o=Fi(t,i);if(o!==null){var u=In();hi(o,t,i,u)}wu(t,i)}},Rf=function(){return Pt},Pf=function(t,i){var o=Pt;try{return Pt=t,i()}finally{Pt=o}},we=function(t,i,o){switch(i){case"input":if(Xe(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=Ca(u);if(!f)throw Error(n(90));rt(u),Xe(u,f)}}}break;case"textarea":Me(t,o);break;case"select":i=o.value,i!=null&&z(t,!!o.multiple,i,!1)}},It=vu,zt=Hr;var C0={usingClientEntryPoint:!1,Events:[wo,xs,Ca,Ne,st,vu]},Oo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ca(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||w0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{dt=dl.inject(A0),tt=dl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0,On.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return b0(t,i,null,o)},On.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var o=!1,u="",f=Xp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bu(t,1,!1,null,null,o,!1,u,f),t[Ni]=i.current,Mo(t.nodeType===8?t.parentNode:t),new Tu(i)},On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ca(i),t=t===null?null:t.stateNode,t},On.flushSync=function(t){return Hr(t)},On.hydrate=function(t,i,o){if(!cl(i))throw Error(n(200));return ul(null,t,i,!0,o)},On.hydrateRoot=function(t,i,o){if(!Cu(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,m="",w=Xp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=Wp(i,null,t,1,o??null,f,!1,m,w),t[Ni]=i.current,Mo(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new ll(i)},On.render=function(t,i,o){if(!cl(i))throw Error(n(200));return ul(null,t,i,!1,o)},On.unmountComponentAtNode=function(t){if(!cl(t))throw Error(n(40));return t._reactRootContainer?(Hr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},On.unstable_batchedUpdates=vu,On.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!cl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ul(t,i,o,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var tm;function z0(){if(tm)return Pu.exports;tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=k0(),Pu.exports}var nm;function F0(){if(nm)return fl;nm=1;var s=z0();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var O0=F0();const B0=og(O0),Ot="/api",rn=()=>{const s=localStorage.getItem("cc_token");return{"Content-Type":"application/json",...s?{Authorization:`Bearer ${s}`}:{}}},jt=async s=>{const e=await s.json();if(!s.ok)throw new Error(e.message||"An error occurred during API request");return e},wt={async register(s){const e=await fetch(`${Ot}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return jt(e)},async login(s){const e=await fetch(`${Ot}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return jt(e)},async getMe(){const s=await fetch(`${Ot}/auth/me`,{headers:rn()});return jt(s)},async updateProfile(s){const e=await fetch(`${Ot}/auth/profile`,{method:"PUT",headers:rn(),body:JSON.stringify(s)});return jt(e)},async getAllUsers(s){const e=s?`${Ot}/auth/users?department=${encodeURIComponent(s)}`:`${Ot}/auth/users`,n=await fetch(e,{headers:rn()});return jt(n)},async getAnnouncements(s,e){const n=new URLSearchParams;s&&s!=="All"&&n.append("category",s),e&&e!=="All"&&n.append("department",e);const r=await fetch(`${Ot}/announcements?${n.toString()}`);return jt(r)},async createAnnouncement(s){const e=await fetch(`${Ot}/announcements`,{method:"POST",headers:rn(),body:JSON.stringify(s)});return jt(e)},async updateAnnouncement(s,e){const n=await fetch(`${Ot}/announcements/${s}`,{method:"PUT",headers:rn(),body:JSON.stringify(e)});return jt(n)},async deleteAnnouncement(s){const e=await fetch(`${Ot}/announcements/${s}`,{method:"DELETE",headers:rn()});return jt(e)},async getEvents({department:s,status:e,search:n}={}){const r=new URLSearchParams;s&&s!=="All"&&s!=="All Departments"&&r.append("department",s),e&&e!=="All Events"&&e!=="All"&&r.append("status",e),n&&r.append("search",n);const a=await fetch(`${Ot}/events?${r.toString()}`);return jt(a)},async createEvent(s){const e=await fetch(`${Ot}/events`,{method:"POST",headers:rn(),body:JSON.stringify(s)});return jt(e)},async updateEvent(s,e){const n=await fetch(`${Ot}/events/${s}`,{method:"PUT",headers:rn(),body:JSON.stringify(e)});return jt(n)},async deleteEvent(s){const e=await fetch(`${Ot}/events/${s}`,{method:"DELETE",headers:rn()});return jt(e)},async toggleRegisterEvent(s){const e=await fetch(`${Ot}/events/${s}/register`,{method:"POST",headers:rn()});return jt(e)},async getProjects({department:s,status:e}={}){const n=new URLSearchParams;s&&s!=="All"&&n.append("department",s),e&&e!=="All"&&n.append("status",e);const r=await fetch(`${Ot}/projects?${n.toString()}`);return jt(r)},async createProject(s){const e=await fetch(`${Ot}/projects`,{method:"POST",headers:rn(),body:JSON.stringify(s)});return jt(e)},async joinProject(s,e="Contributor"){const n=await fetch(`${Ot}/projects/${s}/join`,{method:"POST",headers:rn(),body:JSON.stringify({role:e})});return jt(n)},async updateProject(s,e){const n=await fetch(`${Ot}/projects/${s}`,{method:"PUT",headers:rn(),body:JSON.stringify(e)});return jt(n)},async deleteProject(s){const e=await fetch(`${Ot}/projects/${s}`,{method:"DELETE",headers:rn()});return jt(e)},async getResources({department:s,search:e}={}){const n=new URLSearchParams;s&&s!=="All"&&s!=="All Departments"&&n.append("department",s),e&&n.append("search",e);const r=await fetch(`${Ot}/resources?${n.toString()}`);return jt(r)},async createResource(s){const e=await fetch(`${Ot}/resources`,{method:"POST",headers:rn(),body:JSON.stringify(s)});return jt(e)},async deleteResource(s){const e=await fetch(`${Ot}/resources/${s}`,{method:"DELETE",headers:rn()});return jt(e)},async getComplaints(){const s=await fetch(`${Ot}/complaints`,{headers:rn()});return jt(s)},async createComplaint(s){const e=await fetch(`${Ot}/complaints`,{method:"POST",headers:rn(),body:JSON.stringify(s)});return jt(e)},async updateComplaintStatus(s,{status:e,adminRemarks:n}){const r=await fetch(`${Ot}/complaints/${s}`,{method:"PATCH",headers:rn(),body:JSON.stringify({status:e,adminRemarks:n})});return jt(r)},async getMatches({skills:s,department:e,interests:n}={}){const r=new URLSearchParams;s&&r.append("skills",Array.isArray(s)?s.join(","):s),e&&r.append("department",e),n&&r.append("interests",Array.isArray(n)?n.join(","):n);const a=await fetch(`${Ot}/matches?${r.toString()}`,{headers:rn()});return jt(a)}},ag=ge.createContext(null),j0=({children:s})=>{const[e,n]=ge.useState(null),[r,a]=ge.useState(localStorage.getItem("cc_token")||null),[c,d]=ge.useState(!0),[h,p]=ge.useState("home"),[v,y]=ge.useState(null),[_,x]=ge.useState([{id:"notif_1",title:"Smart India Hackathon 2026",message:"Internal college registrations opened today! Review rules & register team.",time:"10m ago",read:!1,linkPage:"announcements"},{id:"notif_2",title:"TechNova 2K26 Announced",message:"CSE National Level Technical Festival registration is now open.",time:"1h ago",read:!1,linkPage:"events"},{id:"notif_3",title:"Smart Teammate Recommendation",message:"Rahul Kumar matches 85% with your skills profile!",time:"2h ago",read:!1,linkPage:"projects"}]),M=(O,U="success")=>{y({message:O,type:U}),setTimeout(()=>{y(null)},3800)};ge.useEffect(()=>{(async()=>{if(localStorage.getItem("cc_token"))try{const N=await wt.getMe();N.success&&N.user?n(N.user):g()}catch(N){console.warn("Failed to verify token:",N.message),g()}d(!1)})()},[]);const b=async(O,U)=>{try{const N=await wt.login({email:O,password:U});if(N.success)return localStorage.setItem("cc_token",N.token),a(N.token),n(N.user),p("home"),M(`Welcome back, ${N.user.name}!`),{success:!0}}catch(N){return M(N.message||"Login failed","error"),{success:!1,message:N.message}}},A=async O=>{try{const U=await wt.register(O);if(U.success)return localStorage.setItem("cc_token",U.token),a(U.token),n(U.user),p("home"),M(`Account created successfully! Welcome ${U.user.name}.`),{success:!0}}catch(U){return M(U.message||"Registration failed","error"),{success:!1,message:U.message}}},S=async(O="student")=>b(O==="admin"?"admin@campus.edu":"rahul@campus.edu","campus123"),g=()=>{localStorage.removeItem("cc_token"),a(null),n(null),p("home"),M("Logged out successfully","info")},I=O=>{n(U=>({...U,...O}))},D=O=>{x(U=>U.map(N=>N.id===O?{...N,read:!0}:N))},T=()=>{x(O=>O.map(U=>({...U,read:!0})))},W=_.filter(O=>!O.read).length;return l.jsx(ag.Provider,{value:{user:e,token:r,loading:c,currentPage:h,setCurrentPage:p,login:b,register:A,demoLogin:S,logout:g,updateUserProfile:I,notifications:_,markNotificationRead:D,markAllNotificationsRead:T,unreadNotificationsCount:W,toast:v,showToast:M},children:s})},Si=()=>{const s=ge.useContext(ag);if(!s)throw new Error("useAuth must be used within an AuthProvider");return s};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="173",H0=0,im=1,V0=2,lg=1,cg=2,$i=3,Pr=0,Hn=1,Yi=2,Ar=0,Ys=1,rm=2,sm=3,om=4,W0=5,es=100,G0=101,X0=102,$0=103,Y0=104,q0=200,K0=201,Z0=202,J0=203,fd=204,hd=205,Q0=206,ev=207,tv=208,nv=209,iv=210,rv=211,sv=212,ov=213,av=214,pd=0,md=1,gd=2,Js=3,xd=4,vd=5,yd=6,_d=7,ug=0,lv=1,cv=2,Rr=0,uv=1,dv=2,fv=3,hv=4,pv=5,mv=6,gv=7,dg=300,Qs=301,eo=302,Sd=303,Md=304,Yl=306,Ed=1e3,ns=1001,bd=1002,_i=1003,xv=1004,hl=1005,Ri=1006,Du=1007,is=1008,Ji=1009,fg=1010,hg=1011,qo=1012,af=1013,os=1014,qi=1015,Qo=1016,lf=1017,cf=1018,to=1020,pg=35902,mg=1021,gg=1022,yi=1023,xg=1024,vg=1025,qs=1026,no=1027,yg=1028,uf=1029,_g=1030,df=1031,ff=1033,zl=33776,Fl=33777,Ol=33778,Bl=33779,wd=35840,Td=35841,Cd=35842,Ad=35843,Rd=36196,Pd=37492,Ld=37496,Id=37808,Dd=37809,Nd=37810,Ud=37811,kd=37812,zd=37813,Fd=37814,Od=37815,Bd=37816,jd=37817,Hd=37818,Vd=37819,Wd=37820,Gd=37821,jl=36492,Xd=36494,$d=36495,Sg=36283,Yd=36284,qd=36285,Kd=36286,vv=3200,yv=3201,Mg=0,_v=1,Cr="",oi="srgb",io="srgb-linear",Vl="linear",Ut="srgb",Is=7680,am=519,Sv=512,Mv=513,Ev=514,Eg=515,bv=516,wv=517,Tv=518,Cv=519,lm=35044,cm="300 es",Ki=2e3,Wl=2001;class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=Math.PI/180,Zd=180/Math.PI;function ea(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[n&63|128]+An[n>>8&255]+"-"+An[n>>16&255]+An[n>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Ct(s,e,n){return Math.max(e,Math.min(n,s))}function Av(s,e){return(s%e+e)%e}function Uu(s,e,n){return(1-n)*s+n*e}function jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,n,r,a,c,d,h,p,v){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,h,p,v)}set(e,n,r,a,c,d,h,p,v){const y=this.elements;return y[0]=e,y[1]=a,y[2]=h,y[3]=n,y[4]=c,y[5]=p,y[6]=r,y[7]=d,y[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],h=r[3],p=r[6],v=r[1],y=r[4],_=r[7],x=r[2],M=r[5],b=r[8],A=a[0],S=a[3],g=a[6],I=a[1],D=a[4],T=a[7],W=a[2],O=a[5],U=a[8];return c[0]=d*A+h*I+p*W,c[3]=d*S+h*D+p*O,c[6]=d*g+h*T+p*U,c[1]=v*A+y*I+_*W,c[4]=v*S+y*D+_*O,c[7]=v*g+y*T+_*U,c[2]=x*A+M*I+b*W,c[5]=x*S+M*D+b*O,c[8]=x*g+M*T+b*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],p=e[6],v=e[7],y=e[8];return n*d*y-n*h*v-r*c*y+r*h*p+a*c*v-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],p=e[6],v=e[7],y=e[8],_=y*d-h*v,x=h*p-y*c,M=v*c-d*p,b=n*_+r*x+a*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(a*v-y*r)*A,e[2]=(h*r-a*d)*A,e[3]=x*A,e[4]=(y*n-a*p)*A,e[5]=(a*c-h*n)*A,e[6]=M*A,e[7]=(r*p-v*n)*A,e[8]=(d*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,h){const p=Math.cos(c),v=Math.sin(c);return this.set(r*p,r*v,-r*(p*d+v*h)+d+e,-a*v,a*p,-a*(-v*d+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(ku.makeScale(e,n)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new yt;function bg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rv(){const s=Gl("canvas");return s.style.display="block",s}const um={};function Xs(s){s in um||(um[s]=!0,console.warn(s))}function Pv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Lv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Iv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dm=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dv(){const s={enabled:!0,workingColorSpace:io,spaces:{},convert:function(a,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ut&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(a.applyMatrix3(this.spaces[c].toXYZ),a.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ut&&(a.r=Ks(a.r),a.g=Ks(a.g),a.b=Ks(a.b))),a},fromWorkingColorSpace:function(a,c){return this.convert(a,this.workingColorSpace,c)},toWorkingColorSpace:function(a,c){return this.convert(a,c,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Cr?Vl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,c=this.workingColorSpace){return a.fromArray(this.spaces[c].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,c,d){return a.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[io]:{primaries:e,whitePoint:r,transfer:Vl,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Nt=Dv();function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class Nv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ds===void 0&&(Ds=Gl("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ds}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=Zi(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Zi(n[r]/255)*255):n[r]=Zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uv=0;class wg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,h=a.length;d<h;d++)a[d].isDataTexture?c.push(zu(a[d].image)):c.push(zu(a[d]))}else c=zu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kv=0;class Vn extends so{constructor(e=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,r=ns,a=ns,c=Ri,d=is,h=yi,p=Ji,v=Vn.DEFAULT_ANISOTROPY,y=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=ea(),this.name="",this.source=new wg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=v,this.format=h,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=dg;Vn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,r=0,a=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,v=p[0],y=p[4],_=p[8],x=p[1],M=p[5],b=p[9],A=p[2],S=p[6],g=p[10];if(Math.abs(y-x)<.01&&Math.abs(_-A)<.01&&Math.abs(b-S)<.01){if(Math.abs(y+x)<.1&&Math.abs(_+A)<.1&&Math.abs(b+S)<.1&&Math.abs(v+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(v+1)/2,T=(M+1)/2,W=(g+1)/2,O=(y+x)/4,U=(_+A)/4,N=(b+S)/4;return D>T&&D>W?D<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(D),a=O/r,c=U/r):T>W?T<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(T),r=O/a,c=N/a):W<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(W),r=U/c,a=N/c),this.set(r,a,c,n),this}let I=Math.sqrt((S-b)*(S-b)+(_-A)*(_-A)+(x-y)*(x-y));return Math.abs(I)<.001&&(I=1),this.x=(S-b)/I,this.y=(_-A)/I,this.z=(x-y)/I,this.w=Math.acos((v+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this.z=Ct(this.z,e.z,n.z),this.w=Ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this.z=Ct(this.z,e,n),this.w=Ct(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zv extends so{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Vn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new wg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends zv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Tg extends Vn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fv extends Vn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,h){let p=r[a+0],v=r[a+1],y=r[a+2],_=r[a+3];const x=c[d+0],M=c[d+1],b=c[d+2],A=c[d+3];if(h===0){e[n+0]=p,e[n+1]=v,e[n+2]=y,e[n+3]=_;return}if(h===1){e[n+0]=x,e[n+1]=M,e[n+2]=b,e[n+3]=A;return}if(_!==A||p!==x||v!==M||y!==b){let S=1-h;const g=p*x+v*M+y*b+_*A,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const W=Math.sqrt(D),O=Math.atan2(W,g*I);S=Math.sin(S*O)/W,h=Math.sin(h*O)/W}const T=h*I;if(p=p*S+x*T,v=v*S+M*T,y=y*S+b*T,_=_*S+A*T,S===1-h){const W=1/Math.sqrt(p*p+v*v+y*y+_*_);p*=W,v*=W,y*=W,_*=W}}e[n]=p,e[n+1]=v,e[n+2]=y,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,c,d){const h=r[a],p=r[a+1],v=r[a+2],y=r[a+3],_=c[d],x=c[d+1],M=c[d+2],b=c[d+3];return e[n]=h*b+y*_+p*M-v*x,e[n+1]=p*b+y*x+v*_-h*M,e[n+2]=v*b+y*M+h*x-p*_,e[n+3]=y*b-h*_-p*x-v*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,v=h(r/2),y=h(a/2),_=h(c/2),x=p(r/2),M=p(a/2),b=p(c/2);switch(d){case"XYZ":this._x=x*y*_+v*M*b,this._y=v*M*_-x*y*b,this._z=v*y*b+x*M*_,this._w=v*y*_-x*M*b;break;case"YXZ":this._x=x*y*_+v*M*b,this._y=v*M*_-x*y*b,this._z=v*y*b-x*M*_,this._w=v*y*_+x*M*b;break;case"ZXY":this._x=x*y*_-v*M*b,this._y=v*M*_+x*y*b,this._z=v*y*b+x*M*_,this._w=v*y*_-x*M*b;break;case"ZYX":this._x=x*y*_-v*M*b,this._y=v*M*_+x*y*b,this._z=v*y*b-x*M*_,this._w=v*y*_+x*M*b;break;case"YZX":this._x=x*y*_+v*M*b,this._y=v*M*_+x*y*b,this._z=v*y*b-x*M*_,this._w=v*y*_-x*M*b;break;case"XZY":this._x=x*y*_-v*M*b,this._y=v*M*_-x*y*b,this._z=v*y*b+x*M*_,this._w=v*y*_+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],h=n[5],p=n[9],v=n[2],y=n[6],_=n[10],x=r+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(y-p)*M,this._y=(c-v)*M,this._z=(d-a)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(y-p)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(c+v)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(c-v)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(p+y)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-a)/M,this._x=(c+v)/M,this._y=(p+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,h=n._x,p=n._y,v=n._z,y=n._w;return this._x=r*y+d*h+a*v-c*p,this._y=a*y+d*p+c*h-r*v,this._z=c*y+d*v+r*p-a*h,this._w=d*y-r*h-a*p-c*v,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+a*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const v=Math.sqrt(p),y=Math.atan2(v,h),_=Math.sin((1-n)*y)/v,x=Math.sin(n*y)/v;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,h=e.z,p=e.w,v=2*(d*a-h*r),y=2*(h*n-c*a),_=2*(c*r-d*n);return this.x=n+p*v+d*_-h*y,this.y=r+p*y+h*v-c*_,this.z=a+p*_+c*y-d*v,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this.z=Ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this.z=Ct(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,h=n.y,p=n.z;return this.x=a*p-c*h,this.y=c*d-r*p,this.z=r*h-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new ie,hm=new ta;class na{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,pi):pi.fromBufferAttribute(c,d),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pl.copy(r.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),ml.subVectors(this.max,Ho),Ns.subVectors(e.a,Ho),Us.subVectors(e.b,Ho),ks.subVectors(e.c,Ho),Sr.subVectors(Us,Ns),Mr.subVectors(ks,Us),Xr.subVectors(Ns,ks);let n=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-Xr.z,Xr.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,Xr.z,0,-Xr.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-Xr.y,Xr.x,0];return!Ou(n,Ns,Us,ks,ml)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,Ns,Us,ks,ml))?!1:(gl.crossVectors(Sr,Mr),n=[gl.x,gl.y,gl.z],Ou(n,Ns,Us,ks,ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],pi=new ie,pl=new na,Ns=new ie,Us=new ie,ks=new ie,Sr=new ie,Mr=new ie,Xr=new ie,Ho=new ie,ml=new ie,gl=new ie,$r=new ie;function Ou(s,e,n,r,a){for(let c=0,d=s.length-3;c<=d;c+=3){$r.fromArray(s,c);const h=a.x*Math.abs($r.x)+a.y*Math.abs($r.y)+a.z*Math.abs($r.z),p=e.dot($r),v=n.dot($r),y=r.dot($r);if(Math.max(-Math.max(p,v,y),Math.min(p,v,y))>h)return!1}return!0}const Ov=new na,Vo=new ie,Bu=new ie;class ql{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Ov.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Vo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Bu)),this.expandByPoint(Vo.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new ie,ju=new ie,xl=new ie,Er=new ie,Hu=new ie,vl=new ie,Vu=new ie;class Cg{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,n),Vi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){ju.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),Er.copy(this.origin).sub(ju);const c=e.distanceTo(n)*.5,d=-this.direction.dot(xl),h=Er.dot(this.direction),p=-Er.dot(xl),v=Er.lengthSq(),y=Math.abs(1-d*d);let _,x,M,b;if(y>0)if(_=d*p-h,x=d*h-p,b=c*y,_>=0)if(x>=-b)if(x<=b){const A=1/y;_*=A,x*=A,M=_*(_+d*x+2*h)+x*(d*_+x+2*p)+v}else x=c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+v;else x=-c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+v;else x<=-b?(_=Math.max(0,-(-d*c+h)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+v):x<=b?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+v):(_=Math.max(0,-(d*c+h)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+v);else x=d>0?-c:c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+v;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(ju).addScaledVector(xl,x),M}intersectSphere(e,n){Vi.subVectors(e.center,this.origin);const r=Vi.dot(this.direction),a=Vi.dot(Vi)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,h,p;const v=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,x=this.origin;return v>=0?(r=(e.min.x-x.x)*v,a=(e.max.x-x.x)*v):(r=(e.max.x-x.x)*v,a=(e.min.x-x.x)*v),y>=0?(c=(e.min.y-x.y)*y,d=(e.max.y-x.y)*y):(c=(e.max.y-x.y)*y,d=(e.min.y-x.y)*y),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||h>a)||((h>r||r!==r)&&(r=h),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,n,r,a,c){Hu.subVectors(n,e),vl.subVectors(r,e),Vu.crossVectors(Hu,vl);let d=this.direction.dot(Vu),h;if(d>0){if(a)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Er.subVectors(this.origin,e);const p=h*this.direction.dot(vl.crossVectors(Er,vl));if(p<0)return null;const v=h*this.direction.dot(Hu.cross(Er));if(v<0||p+v>d)return null;const y=-h*Er.dot(Vu);return y<0?null:this.at(y/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,n,r,a,c,d,h,p,v,y,_,x,M,b,A,S){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,h,p,v,y,_,x,M,b,A,S)}set(e,n,r,a,c,d,h,p,v,y,_,x,M,b,A,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=d,g[9]=h,g[13]=p,g[2]=v,g[6]=y,g[10]=_,g[14]=x,g[3]=M,g[7]=b,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/zs.setFromMatrixColumn(e,0).length(),c=1/zs.setFromMatrixColumn(e,1).length(),d=1/zs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),v=Math.sin(a),y=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*y,M=d*_,b=h*y,A=h*_;n[0]=p*y,n[4]=-p*_,n[8]=v,n[1]=M+b*v,n[5]=x-A*v,n[9]=-h*p,n[2]=A-x*v,n[6]=b+M*v,n[10]=d*p}else if(e.order==="YXZ"){const x=p*y,M=p*_,b=v*y,A=v*_;n[0]=x+A*h,n[4]=b*h-M,n[8]=d*v,n[1]=d*_,n[5]=d*y,n[9]=-h,n[2]=M*h-b,n[6]=A+x*h,n[10]=d*p}else if(e.order==="ZXY"){const x=p*y,M=p*_,b=v*y,A=v*_;n[0]=x-A*h,n[4]=-d*_,n[8]=b+M*h,n[1]=M+b*h,n[5]=d*y,n[9]=A-x*h,n[2]=-d*v,n[6]=h,n[10]=d*p}else if(e.order==="ZYX"){const x=d*y,M=d*_,b=h*y,A=h*_;n[0]=p*y,n[4]=b*v-M,n[8]=x*v+A,n[1]=p*_,n[5]=A*v+x,n[9]=M*v-b,n[2]=-v,n[6]=h*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,M=d*v,b=h*p,A=h*v;n[0]=p*y,n[4]=A-x*_,n[8]=b*_+M,n[1]=_,n[5]=d*y,n[9]=-h*y,n[2]=-v*y,n[6]=M*_+b,n[10]=x-A*_}else if(e.order==="XZY"){const x=d*p,M=d*v,b=h*p,A=h*v;n[0]=p*y,n[4]=-_,n[8]=v*y,n[1]=x*_+A,n[5]=d*y,n[9]=M*_-b,n[2]=b*_-M,n[6]=h*y,n[10]=A*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bv,e,jv)}lookAt(e,n,r){const a=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),br.crossVectors(r,Yn),br.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),br.crossVectors(r,Yn)),br.normalize(),yl.crossVectors(Yn,br),a[0]=br.x,a[4]=yl.x,a[8]=Yn.x,a[1]=br.y,a[5]=yl.y,a[9]=Yn.y,a[2]=br.z,a[6]=yl.z,a[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],h=r[4],p=r[8],v=r[12],y=r[1],_=r[5],x=r[9],M=r[13],b=r[2],A=r[6],S=r[10],g=r[14],I=r[3],D=r[7],T=r[11],W=r[15],O=a[0],U=a[4],N=a[8],P=a[12],C=a[1],V=a[5],G=a[9],J=a[13],X=a[2],Z=a[6],re=a[10],me=a[14],F=a[3],de=a[7],k=a[11],E=a[15];return c[0]=d*O+h*C+p*X+v*F,c[4]=d*U+h*V+p*Z+v*de,c[8]=d*N+h*G+p*re+v*k,c[12]=d*P+h*J+p*me+v*E,c[1]=y*O+_*C+x*X+M*F,c[5]=y*U+_*V+x*Z+M*de,c[9]=y*N+_*G+x*re+M*k,c[13]=y*P+_*J+x*me+M*E,c[2]=b*O+A*C+S*X+g*F,c[6]=b*U+A*V+S*Z+g*de,c[10]=b*N+A*G+S*re+g*k,c[14]=b*P+A*J+S*me+g*E,c[3]=I*O+D*C+T*X+W*F,c[7]=I*U+D*V+T*Z+W*de,c[11]=I*N+D*G+T*re+W*k,c[15]=I*P+D*J+T*me+W*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],h=e[5],p=e[9],v=e[13],y=e[2],_=e[6],x=e[10],M=e[14],b=e[3],A=e[7],S=e[11],g=e[15];return b*(+c*p*_-a*v*_-c*h*x+r*v*x+a*h*M-r*p*M)+A*(+n*p*M-n*v*x+c*d*x-a*d*M+a*v*y-c*p*y)+S*(+n*v*_-n*h*M-c*d*_+r*d*M+c*h*y-r*v*y)+g*(-a*h*y-n*p*_+n*h*x+a*d*_-r*d*x+r*p*y)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],p=e[6],v=e[7],y=e[8],_=e[9],x=e[10],M=e[11],b=e[12],A=e[13],S=e[14],g=e[15],I=_*S*v-A*x*v+A*p*M-h*S*M-_*p*g+h*x*g,D=b*x*v-y*S*v-b*p*M+d*S*M+y*p*g-d*x*g,T=y*A*v-b*_*v+b*h*M-d*A*M-y*h*g+d*_*g,W=b*_*p-y*A*p-b*h*x+d*A*x+y*h*S-d*_*S,O=n*I+r*D+a*T+c*W;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=I*U,e[1]=(A*x*c-_*S*c-A*a*M+r*S*M+_*a*g-r*x*g)*U,e[2]=(h*S*c-A*p*c+A*a*v-r*S*v-h*a*g+r*p*g)*U,e[3]=(_*p*c-h*x*c-_*a*v+r*x*v+h*a*M-r*p*M)*U,e[4]=D*U,e[5]=(y*S*c-b*x*c+b*a*M-n*S*M-y*a*g+n*x*g)*U,e[6]=(b*p*c-d*S*c-b*a*v+n*S*v+d*a*g-n*p*g)*U,e[7]=(d*x*c-y*p*c+y*a*v-n*x*v-d*a*M+n*p*M)*U,e[8]=T*U,e[9]=(b*_*c-y*A*c-b*r*M+n*A*M+y*r*g-n*_*g)*U,e[10]=(d*A*c-b*h*c+b*r*v-n*A*v-d*r*g+n*h*g)*U,e[11]=(y*h*c-d*_*c-y*r*v+n*_*v+d*r*M-n*h*M)*U,e[12]=W*U,e[13]=(y*A*a-b*_*a+b*r*x-n*A*x-y*r*S+n*_*S)*U,e[14]=(b*h*a-d*A*a-b*r*p+n*A*p+d*r*S-n*h*S)*U,e[15]=(d*_*a-y*h*a+y*r*p-n*_*p-d*r*x+n*h*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,h=e.y,p=e.z,v=c*d,y=c*h;return this.set(v*d+r,v*h-a*p,v*p+a*h,0,v*h+a*p,y*h+r,y*p-a*d,0,v*p-a*h,y*p+a*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,h=n._z,p=n._w,v=c+c,y=d+d,_=h+h,x=c*v,M=c*y,b=c*_,A=d*y,S=d*_,g=h*_,I=p*v,D=p*y,T=p*_,W=r.x,O=r.y,U=r.z;return a[0]=(1-(A+g))*W,a[1]=(M+T)*W,a[2]=(b-D)*W,a[3]=0,a[4]=(M-T)*O,a[5]=(1-(x+g))*O,a[6]=(S+I)*O,a[7]=0,a[8]=(b+D)*U,a[9]=(S-I)*U,a[10]=(1-(x+A))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=zs.set(a[0],a[1],a[2]).length();const d=zs.set(a[4],a[5],a[6]).length(),h=zs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],mi.copy(this);const v=1/c,y=1/d,_=1/h;return mi.elements[0]*=v,mi.elements[1]*=v,mi.elements[2]*=v,mi.elements[4]*=y,mi.elements[5]*=y,mi.elements[6]*=y,mi.elements[8]*=_,mi.elements[9]*=_,mi.elements[10]*=_,n.setFromRotationMatrix(mi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,n,r,a,c,d,h=Ki){const p=this.elements,v=2*c/(n-e),y=2*c/(r-a),_=(n+e)/(n-e),x=(r+a)/(r-a);let M,b;if(h===Ki)M=-(d+c)/(d-c),b=-2*d*c/(d-c);else if(h===Wl)M=-d/(d-c),b=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=y,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,d,h=Ki){const p=this.elements,v=1/(n-e),y=1/(r-a),_=1/(d-c),x=(n+e)*v,M=(r+a)*y;let b,A;if(h===Ki)b=(d+c)*_,A=-2*_;else if(h===Wl)b=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*v,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*y,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=A,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const zs=new ie,mi=new $t,Bv=new ie(0,0,0),jv=new ie(1,1,1),br=new ie,yl=new ie,Yn=new ie,pm=new $t,mm=new ta;class Pi{constructor(e=0,n=0,r=0,a=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],h=a[8],p=a[1],v=a[5],y=a[9],_=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,v)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,v)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,v));break;case"YZX":this._z=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,v),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,v),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hv=0;const gm=new ie,Fs=new ta,Wi=new $t,_l=new ie,Wo=new ie,Vv=new ie,Wv=new ta,xm=new ie(1,0,0),vm=new ie(0,1,0),ym=new ie(0,0,1),_m={type:"added"},Gv={type:"removed"},Os={type:"childadded",child:null},Wu={type:"childremoved",child:null};class Sn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new ie,n=new Pi,r=new ta,a=new ie(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new yt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,n){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?_l.copy(e):_l.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Wo,_l,this.up):Wi.lookAt(_l,Wo,this.up),this.quaternion.setFromRotationMatrix(Wi),a&&(Wi.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Gv),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Wv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let v=0,y=p.length;v<y;v++){const _=p[v];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,v=this.material.length;p<v;p++)h.push(c(e.materials,this.material[p]));a.material=h}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];a.animations.push(c(e.animations,p))}}if(n){const h=d(e.geometries),p=d(e.materials),v=d(e.textures),y=d(e.images),_=d(e.shapes),x=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),v.length>0&&(r.textures=v),y.length>0&&(r.images=y),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=a,r;function d(h){const p=[];for(const v in h){const y=h[v];delete y.metadata,p.push(y)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Sn.DEFAULT_UP=new ie(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new ie,Gi=new ie,Gu=new ie,Xi=new ie,Bs=new ie,js=new ie,Sm=new ie,Xu=new ie,$u=new ie,Yu=new ie,qu=new kt,Ku=new kt,Zu=new kt;class vi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),gi.subVectors(e,n),a.cross(gi);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){gi.subVectors(a,n),Gi.subVectors(r,n),Gu.subVectors(e,n);const d=gi.dot(gi),h=gi.dot(Gi),p=gi.dot(Gu),v=Gi.dot(Gi),y=Gi.dot(Gu),_=d*v-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(v*p-h*y)*x,b=(d*y-h*p)*x;return c.set(1-M-b,b,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,r,a,c,d,h,p){return this.getBarycoord(e,n,r,a,Xi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Xi.x),p.addScaledVector(d,Xi.y),p.addScaledVector(h,Xi.z),p)}static getInterpolatedAttribute(e,n,r,a,c,d){return qu.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),qu.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(qu,c.x),d.addScaledVector(Ku,c.y),d.addScaledVector(Zu,c.z),d}static isFrontFacing(e,n,r,a){return gi.subVectors(r,n),Gi.subVectors(e,n),gi.cross(Gi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),gi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return vi.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,h;Bs.subVectors(a,r),js.subVectors(c,r),Xu.subVectors(e,r);const p=Bs.dot(Xu),v=js.dot(Xu);if(p<=0&&v<=0)return n.copy(r);$u.subVectors(e,a);const y=Bs.dot($u),_=js.dot($u);if(y>=0&&_<=y)return n.copy(a);const x=p*_-y*v;if(x<=0&&p>=0&&y<=0)return d=p/(p-y),n.copy(r).addScaledVector(Bs,d);Yu.subVectors(e,c);const M=Bs.dot(Yu),b=js.dot(Yu);if(b>=0&&M<=b)return n.copy(c);const A=M*v-p*b;if(A<=0&&v>=0&&b<=0)return h=v/(v-b),n.copy(r).addScaledVector(js,h);const S=y*b-M*_;if(S<=0&&_-y>=0&&M-b>=0)return Sm.subVectors(c,a),h=(_-y)/(_-y+(M-b)),n.copy(a).addScaledVector(Sm,h);const g=1/(S+A+x);return d=A*g,h=x*g,n.copy(r).addScaledVector(Bs,d).addScaledVector(js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function Ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Nt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Nt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Nt.workingColorSpace){if(e=Av(e,1),n=Ct(n,0,1),r=Ct(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Ju(d,c,e+1/3),this.g=Ju(d,c,e),this.b=Ju(d,c,e-1/3)}return Nt.toWorkingColorSpace(this,a),this}setStyle(e,n=oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],h=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const r=Rg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Nt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Ct(Rn.r*255,0,255))*65536+Math.round(Ct(Rn.g*255,0,255))*256+Math.round(Ct(Rn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Rn.copy(this),n);const r=Rn.r,a=Rn.g,c=Rn.b,d=Math.max(r,a,c),h=Math.min(r,a,c);let p,v;const y=(h+d)/2;if(h===d)p=0,v=0;else{const _=d-h;switch(v=y<=.5?_/(d+h):_/(2-d-h),d){case r:p=(a-c)/_+(a<c?6:0);break;case a:p=(c-r)/_+2;break;case c:p=(r-a)/_+4;break}p/=6}return e.h=p,e.s=v,e.l=y,e}getRGB(e,n=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Rn.copy(this),n),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=oi){Nt.fromWorkingColorSpace(Rn.copy(this),e);const n=Rn.r,r=Rn.g,a=Rn.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+n,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(wr),e.getHSL(Sl);const r=Uu(wr.h,Sl.h,n),a=Uu(wr.s,Sl.s,n),c=Uu(wr.l,Sl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Et;Et.NAMES=Rg;let Xv=0;class oo extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Ys,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==Pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fd&&(r.blendSrc=this.blendSrc),this.blendDst!==hd&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pg extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new ie,Ml=new At;let $v=0;class ai{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$v++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=lm,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=jo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),a=Bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),a=Bn(a,this.array),c=Bn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class Lg extends ai{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ig extends ai{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ln extends ai{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Yv=0;const si=new $t,Qu=new Sn,Hs=new ie,qn=new na,Go=new na,xn=new ie;class Zn extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bg(e)?Ig:Lg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new yt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,r){return si.makeTranslation(e,n,r),this.applyMatrix4(si),this}scale(e,n,r){return si.makeScale(e,n,r),this.applyMatrix4(si),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ln(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const c=e[a];n.setXYZ(a,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];qn.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const h=n[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(qn.min,Go.min),qn.expandByPoint(xn),xn.addVectors(qn.max,Go.max),qn.expandByPoint(xn)):(qn.expandByPoint(Go.min),qn.expandByPoint(Go.max))}qn.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)xn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(xn));if(n)for(let c=0,d=n.length;c<d;c++){const h=n[c],p=this.morphTargetsRelative;for(let v=0,y=h.count;v<y;v++)xn.fromBufferAttribute(h,v),p&&(Hs.fromBufferAttribute(e,v),xn.add(Hs)),a=Math.max(a,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let N=0;N<r.count;N++)h[N]=new ie,p[N]=new ie;const v=new ie,y=new ie,_=new ie,x=new At,M=new At,b=new At,A=new ie,S=new ie;function g(N,P,C){v.fromBufferAttribute(r,N),y.fromBufferAttribute(r,P),_.fromBufferAttribute(r,C),x.fromBufferAttribute(c,N),M.fromBufferAttribute(c,P),b.fromBufferAttribute(c,C),y.sub(v),_.sub(v),M.sub(x),b.sub(x);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(A.copy(y).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(V),S.copy(_).multiplyScalar(M.x).addScaledVector(y,-b.x).multiplyScalar(V),h[N].add(A),h[P].add(A),h[C].add(A),p[N].add(S),p[P].add(S),p[C].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let N=0,P=I.length;N<P;++N){const C=I[N],V=C.start,G=C.count;for(let J=V,X=V+G;J<X;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new ie,T=new ie,W=new ie,O=new ie;function U(N){W.fromBufferAttribute(a,N),O.copy(W);const P=h[N];D.copy(P),D.sub(W.multiplyScalar(W.dot(P))).normalize(),T.crossVectors(O,P);const V=T.dot(p[N])<0?-1:1;d.setXYZW(N,D.x,D.y,D.z,V)}for(let N=0,P=I.length;N<P;++N){const C=I[N],V=C.start,G=C.count;for(let J=V,X=V+G;J<X;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new ie,c=new ie,d=new ie,h=new ie,p=new ie,v=new ie,y=new ie,_=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,S),y.subVectors(d,c),_.subVectors(a,c),y.cross(_),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,A),v.fromBufferAttribute(r,S),h.add(y),p.add(y),v.add(y),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(S,v.x,v.y,v.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),y.subVectors(d,c),_.subVectors(a,c),y.cross(_),r.setXYZ(x+0,y.x,y.y,y.z),r.setXYZ(x+1,y.x,y.y,y.z),r.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)xn.fromBufferAttribute(e,n),xn.normalize(),e.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,p){const v=h.array,y=h.itemSize,_=h.normalized,x=new v.constructor(p.length*y);let M=0,b=0;for(let A=0,S=p.length;A<S;A++){h.isInterleavedBufferAttribute?M=p[A]*h.data.stride+h.offset:M=p[A]*y;for(let g=0;g<y;g++)x[b++]=v[M++]}return new ai(x,y,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,r=this.index.array,a=this.attributes;for(const h in a){const p=a[h],v=e(p,r);n.setAttribute(h,v)}const c=this.morphAttributes;for(const h in c){const p=[],v=c[h];for(let y=0,_=v.length;y<_;y++){const x=v[y],M=e(x,r);p.push(M)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const v=d[h];n.addGroup(v.start,v.count,v.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const v in p)p[v]!==void 0&&(e[v]=p[v]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const v=r[p];e.data.attributes[p]=v.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const v=this.morphAttributes[p],y=[];for(let _=0,x=v.length;_<x;_++){const M=v[_];y.push(M.toJSON(e.data))}y.length>0&&(a[p]=y,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const v in a){const y=a[v];this.setAttribute(v,y.clone(n))}const c=e.morphAttributes;for(const v in c){const y=[],_=c[v];for(let x=0,M=_.length;x<M;x++)y.push(_[x].clone(n));this.morphAttributes[v]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let v=0,y=d.length;v<y;v++){const _=d[v];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mm=new $t,Yr=new Cg,El=new ql,Em=new ie,bl=new ie,wl=new ie,Tl=new ie,ed=new ie,Cl=new ie,bm=new ie,Al=new ie;class mt extends Sn{constructor(e=new Zn,n=new Pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(c&&h){Cl.set(0,0,0);for(let p=0,v=c.length;p<v;p++){const y=h[p],_=c[p];y!==0&&(ed.fromBufferAttribute(_,e),d?Cl.addScaledVector(ed,y):Cl.addScaledVector(ed.sub(n),y))}n.add(Cl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(c),Yr.copy(e.ray).recast(e.near),!(El.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(El,Em)===null||Yr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Mm.copy(c).invert(),Yr.copy(e.ray).applyMatrix4(Mm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,v=c.attributes.uv,y=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,A=x.length;b<A;b++){const S=x[b],g=d[S.materialIndex],I=Math.max(S.start,M.start),D=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let T=I,W=D;T<W;T+=3){const O=h.getX(T),U=h.getX(T+1),N=h.getX(T+2);a=Rl(this,g,e,r,v,y,_,O,U,N),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const b=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=b,g=A;S<g;S+=3){const I=h.getX(S),D=h.getX(S+1),T=h.getX(S+2);a=Rl(this,d,e,r,v,y,_,I,D,T),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,A=x.length;b<A;b++){const S=x[b],g=d[S.materialIndex],I=Math.max(S.start,M.start),D=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let T=I,W=D;T<W;T+=3){const O=T,U=T+1,N=T+2;a=Rl(this,g,e,r,v,y,_,O,U,N),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const b=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let S=b,g=A;S<g;S+=3){const I=S,D=S+1,T=S+2;a=Rl(this,d,e,r,v,y,_,I,D,T),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function qv(s,e,n,r,a,c,d,h){let p;if(e.side===Hn?p=r.intersectTriangle(d,c,a,!0,h):p=r.intersectTriangle(a,c,d,e.side===Pr,h),p===null)return null;Al.copy(h),Al.applyMatrix4(s.matrixWorld);const v=n.ray.origin.distanceTo(Al);return v<n.near||v>n.far?null:{distance:v,point:Al.clone(),object:s}}function Rl(s,e,n,r,a,c,d,h,p,v){s.getVertexPosition(h,bl),s.getVertexPosition(p,wl),s.getVertexPosition(v,Tl);const y=qv(s,e,n,r,bl,wl,Tl,bm);if(y){const _=new ie;vi.getBarycoord(bm,bl,wl,Tl,_),a&&(y.uv=vi.getInterpolatedAttribute(a,h,p,v,_,new At)),c&&(y.uv1=vi.getInterpolatedAttribute(c,h,p,v,_,new At)),d&&(y.normal=vi.getInterpolatedAttribute(d,h,p,v,_,new ie),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const x={a:h,b:p,c:v,normal:new ie,materialIndex:0};vi.getNormal(bl,wl,Tl,x.normal),y.face=x,y.barycoord=_}return y}class Qt extends Zn{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const h=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const p=[],v=[],y=[],_=[];let x=0,M=0;b("z","y","x",-1,-1,r,n,e,d,c,0),b("z","y","x",1,-1,r,n,-e,d,c,1),b("x","z","y",1,1,e,r,n,a,d,2),b("x","z","y",1,-1,e,r,-n,a,d,3),b("x","y","z",1,-1,e,n,r,a,c,4),b("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(y,3)),this.setAttribute("uv",new ln(_,2));function b(A,S,g,I,D,T,W,O,U,N,P){const C=T/U,V=W/N,G=T/2,J=W/2,X=O/2,Z=U+1,re=N+1;let me=0,F=0;const de=new ie;for(let k=0;k<re;k++){const E=k*V-J;for(let K=0;K<Z;K++){const Se=K*C-G;de[A]=Se*I,de[S]=E*D,de[g]=X,v.push(de.x,de.y,de.z),de[A]=0,de[S]=0,de[g]=O>0?1:-1,y.push(de.x,de.y,de.z),_.push(K/U),_.push(1-k/N),me+=1}}for(let k=0;k<N;k++)for(let E=0;E<U;E++){const K=x+E+Z*k,Se=x+E+Z*(k+1),$=x+(E+1)+Z*(k+1),le=x+(E+1)+Z*k;p.push(K,Se,le),p.push(Se,$,le),F+=6}h.addGroup(M,F,P),M+=F,x+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Dn(s){const e={};for(let n=0;n<s.length;n++){const r=ro(s[n]);for(const a in r)e[a]=r[a]}return e}function Kv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const Zv={clone:ro,merge:Dn};var Jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jv,this.fragmentShader=Qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=Kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ng extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new ie,wm=new At,Tm=new At;class Kn extends Ng{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,wm,Tm),n.subVectors(Tm,wm)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,v=d.fullHeight;c+=d.offsetX*a/p,n-=d.offsetY*r/v,a*=d.width/p,r*=d.height/v}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vs=-90,Ws=1;class ey extends Sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Vs,Ws,e,n);a.layers=this.layers,this.add(a);const c=new Kn(Vs,Ws,e,n);c.layers=this.layers,this.add(c);const d=new Kn(Vs,Ws,e,n);d.layers=this.layers,this.add(d);const h=new Kn(Vs,Ws,e,n);h.layers=this.layers,this.add(h);const p=new Kn(Vs,Ws,e,n);p.layers=this.layers,this.add(p);const v=new Kn(Vs,Ws,e,n);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,h,p]=n;for(const v of n)this.remove(v);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const v of n)this.add(v),v.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,v,y]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,h),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,v),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,y),e.setRenderTarget(_,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Ug extends Vn{constructor(e,n,r,a,c,d,h,p,v,y){e=e!==void 0?e:[],n=n!==void 0?n:Qs,super(e,n,r,a,c,d,h,p,v,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ty extends as{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ug(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Qt(5,5,5),c=new Lr({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ar});c.uniforms.tEquirect.value=n;const d=new mt(a,c),h=n.minFilter;return n.minFilter===is&&(n.minFilter=Ri),new ey(1,10,this).update(e,d),n.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}class jn extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ny={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const h=this._targetRay,p=this._grip,v=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(v&&e.hand){d=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),g=this._getHandJoint(v,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const y=v.joints["index-finger-tip"],_=v.joints["thumb-tip"],x=y.position.distanceTo(_.position),M=.02,b=.005;v.inputState.pinching&&x>M+b?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!v.inputState.pinching&&x<=M-b&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ny)))}return h!==null&&(h.visible=a!==null),p!==null&&(p.visible=c!==null),v!==null&&(v.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new jn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class hf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(e),this.density=n}clone(){return new hf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iy extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const nd=new ie,ry=new ie,sy=new yt;class Jr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=nd.subVectors(r,n).cross(ry.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(nd),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||sy.getNormalMatrix(e),a=this.coplanarPoint(nd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new ql,Pl=new ie;class pf{constructor(e=new Jr,n=new Jr,r=new Jr,a=new Jr,c=new Jr,d=new Jr){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(a),h[4].copy(c),h[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ki){const r=this.planes,a=e.elements,c=a[0],d=a[1],h=a[2],p=a[3],v=a[4],y=a[5],_=a[6],x=a[7],M=a[8],b=a[9],A=a[10],S=a[11],g=a[12],I=a[13],D=a[14],T=a[15];if(r[0].setComponents(p-c,x-v,S-M,T-g).normalize(),r[1].setComponents(p+c,x+v,S+M,T+g).normalize(),r[2].setComponents(p+d,x+y,S+b,T+I).normalize(),r[3].setComponents(p-d,x-y,S-b,T-I).normalize(),r[4].setComponents(p-h,x-_,S-A,T-D).normalize(),n===Ki)r[5].setComponents(p+h,x+_,S+A,T+D).normalize();else if(n===Wl)r[5].setComponents(h,_,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Pl.x=a.normal.x>0?e.max.x:e.min.x,Pl.y=a.normal.y>0?e.max.y:e.min.y,Pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kg extends oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cm=new $t,Jd=new Cg,Ll=new ql,Il=new ie;class oy extends Sn{constructor(e=new Zn,n=new kg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(a),Ll.radius+=c,e.ray.intersectsSphere(Ll)===!1)return;Cm.copy(a).invert(),Jd.copy(e.ray).applyMatrix4(Cm);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,v=r.index,_=r.attributes.position;if(v!==null){const x=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let b=x,A=M;b<A;b++){const S=v.getX(b);Il.fromBufferAttribute(_,S),Am(Il,S,p,a,e,n,this)}}else{const x=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let b=x,A=M;b<A;b++)Il.fromBufferAttribute(_,b),Am(Il,b,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Am(s,e,n,r,a,c,d){const h=Jd.distanceSqToPoint(s);if(h<n){const p=new ie;Jd.closestPointToPoint(s,p),p.applyMatrix4(r);const v=a.ray.origin.distanceTo(p);if(v<a.near||v>a.far)return;c.push({distance:v,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class zg extends Vn{constructor(e,n,r,a,c,d,h,p,v,y=qs){if(y!==qs&&y!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&y===qs&&(r=os),r===void 0&&y===no&&(r=to),super(null,a,c,d,h,p,y,r,v),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=h!==void 0?h:_i,this.minFilter=p!==void 0?p:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xi extends Zn{constructor(e=1,n=1,r=1,a=32,c=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:p};const v=this;a=Math.floor(a),c=Math.floor(c);const y=[],_=[],x=[],M=[];let b=0;const A=[],S=r/2;let g=0;I(),d===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(y),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(M,2));function I(){const T=new ie,W=new ie;let O=0;const U=(n-e)/r;for(let N=0;N<=c;N++){const P=[],C=N/c,V=C*(n-e)+e;for(let G=0;G<=a;G++){const J=G/a,X=J*p+h,Z=Math.sin(X),re=Math.cos(X);W.x=V*Z,W.y=-C*r+S,W.z=V*re,_.push(W.x,W.y,W.z),T.set(Z,U,re).normalize(),x.push(T.x,T.y,T.z),M.push(J,1-C),P.push(b++)}A.push(P)}for(let N=0;N<a;N++)for(let P=0;P<c;P++){const C=A[P][N],V=A[P+1][N],G=A[P+1][N+1],J=A[P][N+1];(e>0||P!==0)&&(y.push(C,V,J),O+=3),(n>0||P!==c-1)&&(y.push(V,G,J),O+=3)}v.addGroup(g,O,0),g+=O}function D(T){const W=b,O=new At,U=new ie;let N=0;const P=T===!0?e:n,C=T===!0?1:-1;for(let G=1;G<=a;G++)_.push(0,S*C,0),x.push(0,C,0),M.push(.5,.5),b++;const V=b;for(let G=0;G<=a;G++){const X=G/a*p+h,Z=Math.cos(X),re=Math.sin(X);U.x=P*re,U.y=S*C,U.z=P*Z,_.push(U.x,U.y,U.z),x.push(0,C,0),O.x=Z*.5+.5,O.y=re*.5*C+.5,M.push(O.x,O.y),b++}for(let G=0;G<a;G++){const J=W+G,X=V+G;T===!0?y.push(X,X+1,J):y.push(X+1,X,J),N+=3}v.addGroup(g,N,T===!0?1:2),g+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yo extends xi{constructor(e=1,n=1,r=32,a=1,c=!1,d=0,h=Math.PI*2){super(0,e,n,r,a,c,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:c,thetaStart:d,thetaLength:h}}static fromJSON(e){return new Yo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends Zn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],d=[];h(a),v(r),y(),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(c.slice(),3)),this.setAttribute("uv",new ln(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function h(I){const D=new ie,T=new ie,W=new ie;for(let O=0;O<n.length;O+=3)M(n[O+0],D),M(n[O+1],T),M(n[O+2],W),p(D,T,W,I)}function p(I,D,T,W){const O=W+1,U=[];for(let N=0;N<=O;N++){U[N]=[];const P=I.clone().lerp(T,N/O),C=D.clone().lerp(T,N/O),V=O-N;for(let G=0;G<=V;G++)G===0&&N===O?U[N][G]=P:U[N][G]=P.clone().lerp(C,G/V)}for(let N=0;N<O;N++)for(let P=0;P<2*(O-N)-1;P++){const C=Math.floor(P/2);P%2===0?(x(U[N][C+1]),x(U[N+1][C]),x(U[N][C])):(x(U[N][C+1]),x(U[N+1][C+1]),x(U[N+1][C]))}}function v(I){const D=new ie;for(let T=0;T<c.length;T+=3)D.x=c[T+0],D.y=c[T+1],D.z=c[T+2],D.normalize().multiplyScalar(I),c[T+0]=D.x,c[T+1]=D.y,c[T+2]=D.z}function y(){const I=new ie;for(let D=0;D<c.length;D+=3){I.x=c[D+0],I.y=c[D+1],I.z=c[D+2];const T=S(I)/2/Math.PI+.5,W=g(I)/Math.PI+.5;d.push(T,1-W)}b(),_()}function _(){for(let I=0;I<d.length;I+=6){const D=d[I+0],T=d[I+2],W=d[I+4],O=Math.max(D,T,W),U=Math.min(D,T,W);O>.9&&U<.1&&(D<.2&&(d[I+0]+=1),T<.2&&(d[I+2]+=1),W<.2&&(d[I+4]+=1))}}function x(I){c.push(I.x,I.y,I.z)}function M(I,D){const T=I*3;D.x=e[T+0],D.y=e[T+1],D.z=e[T+2]}function b(){const I=new ie,D=new ie,T=new ie,W=new ie,O=new At,U=new At,N=new At;for(let P=0,C=0;P<c.length;P+=9,C+=6){I.set(c[P+0],c[P+1],c[P+2]),D.set(c[P+3],c[P+4],c[P+5]),T.set(c[P+6],c[P+7],c[P+8]),O.set(d[C+0],d[C+1]),U.set(d[C+2],d[C+3]),N.set(d[C+4],d[C+5]),W.copy(I).add(D).add(T).divideScalar(3);const V=S(W);A(O,C+0,I,V),A(U,C+2,D,V),A(N,C+4,T,V)}}function A(I,D,T,W){W<0&&I.x===1&&(d[D]=I.x-1),T.x===0&&T.z===0&&(d[D]=W/2/Math.PI+.5)}function S(I){return Math.atan2(I.z,-I.x)}function g(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.vertices,e.indices,e.radius,e.details)}}class mf extends ia{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,d,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new mf(e.radius,e.detail)}}class gf extends ia{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new gf(e.radius,e.detail)}}class xf extends ia{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new xf(e.radius,e.detail)}}class rs extends Zn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,h=Math.floor(r),p=Math.floor(a),v=h+1,y=p+1,_=e/h,x=n/p,M=[],b=[],A=[],S=[];for(let g=0;g<y;g++){const I=g*x-d;for(let D=0;D<v;D++){const T=D*_-c;b.push(T,-I,0),A.push(0,0,1),S.push(D/h),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<h;I++){const D=I+v*g,T=I+v*(g+1),W=I+1+v*(g+1),O=I+1+v*g;M.push(D,T,O),M.push(T,W,O)}this.setIndex(M),this.setAttribute("position",new ln(b,3)),this.setAttribute("normal",new ln(A,3)),this.setAttribute("uv",new ln(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class vf extends Zn{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:d,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let v=0;const y=[],_=new ie,x=new ie,M=[],b=[],A=[],S=[];for(let g=0;g<=r;g++){const I=[],D=g/r;let T=0;g===0&&d===0?T=.5/n:g===r&&p===Math.PI&&(T=-.5/n);for(let W=0;W<=n;W++){const O=W/n;_.x=-e*Math.cos(a+O*c)*Math.sin(d+D*h),_.y=e*Math.cos(d+D*h),_.z=e*Math.sin(a+O*c)*Math.sin(d+D*h),b.push(_.x,_.y,_.z),x.copy(_).normalize(),A.push(x.x,x.y,x.z),S.push(O+T,1-D),I.push(v++)}y.push(I)}for(let g=0;g<r;g++)for(let I=0;I<n;I++){const D=y[g][I+1],T=y[g][I],W=y[g+1][I],O=y[g+1][I+1];(g!==0||d>0)&&M.push(D,T,O),(g!==r-1||p<Math.PI)&&M.push(T,W,O)}this.setIndex(M),this.setAttribute("position",new ln(b,3)),this.setAttribute("normal",new ln(A,3)),this.setAttribute("uv",new ln(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yf extends Zn{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c},r=Math.floor(r),a=Math.floor(a);const d=[],h=[],p=[],v=[],y=new ie,_=new ie,x=new ie;for(let M=0;M<=r;M++)for(let b=0;b<=a;b++){const A=b/a*c,S=M/r*Math.PI*2;_.x=(e+n*Math.cos(S))*Math.cos(A),_.y=(e+n*Math.cos(S))*Math.sin(A),_.z=n*Math.sin(S),h.push(_.x,_.y,_.z),y.x=e*Math.cos(A),y.y=e*Math.sin(A),x.subVectors(_,y).normalize(),p.push(x.x,x.y,x.z),v.push(b/a),v.push(M/r)}for(let M=1;M<=r;M++)for(let b=1;b<=a;b++){const A=(a+1)*M+b-1,S=(a+1)*(M-1)+b-1,g=(a+1)*(M-1)+b,I=(a+1)*M+b;d.push(A,S,I),d.push(S,g,I)}this.setIndex(d),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ht extends oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ay extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _f extends Sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const id=new $t,Rm=new ie,Pm=new ie;class Fg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pf,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rm),Pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pm),n.updateMatrixWorld(),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lm=new $t,Xo=new ie,rd=new ie;class cy extends Fg{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new ie(1,0,0),new ie(-1,0,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,1,0),new ie(0,-1,0)],this._cubeUps=[new ie(0,1,0),new ie(0,1,0),new ie(0,1,0),new ie(0,1,0),new ie(0,0,1),new ie(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Xo),rd.copy(r.position),rd.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(rd),r.updateMatrixWorld(),a.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Lm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lm)}}class sd extends _f{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new cy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Og extends Ng{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=v*this.view.offsetX,d=c+v*this.view.width,h-=y*this.view.offsetY,p=h-y*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uy extends Fg{constructor(){super(new Og(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dy extends _f{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new uy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fy extends _f{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class hy extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Im(s,e,n,r){const a=py(r);switch(n){case mg:return s*e;case xg:return s*e;case vg:return s*e*2;case yg:return s*e/a.components*a.byteLength;case uf:return s*e/a.components*a.byteLength;case _g:return s*e*2/a.components*a.byteLength;case df:return s*e*2/a.components*a.byteLength;case gg:return s*e*3/a.components*a.byteLength;case yi:return s*e*4/a.components*a.byteLength;case ff:return s*e*4/a.components*a.byteLength;case zl:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:case Ad:return Math.max(s,16)*Math.max(e,8)/4;case wd:case Cd:return Math.max(s,8)*Math.max(e,8)/2;case Rd:case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jl:case Xd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sg:case Yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qd:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function py(s){switch(s){case Ji:case fg:return{byteLength:1,components:1};case qo:case hg:case Qo:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case os:case af:case qi:return{byteLength:4,components:1};case pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bg(){let s=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function my(s){const e=new WeakMap;function n(h,p){const v=h.array,y=h.usage,_=v.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,v,y),h.onUploadCallback();let M;if(v instanceof Float32Array)M=s.FLOAT;else if(v instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)M=s.SHORT;else if(v instanceof Uint32Array)M=s.UNSIGNED_INT;else if(v instanceof Int32Array)M=s.INT;else if(v instanceof Int8Array)M=s.BYTE;else if(v instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:x,type:M,bytesPerElement:v.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,v){const y=p.array,_=p.updateRanges;if(s.bindBuffer(v,h),_.length===0)s.bufferSubData(v,0,y);else{_.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<_.length;M++){const b=_[x],A=_[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++x,_[x]=A)}_.length=x+1;for(let M=0,b=_.length;M<b;M++){const A=_[M];s.bufferSubData(v,A.start*y.BYTES_PER_ELEMENT,y,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const y=e.get(h);(!y||y.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const v=e.get(h);if(v===void 0)e.set(h,n(h,p));else if(v.version<h.version){if(v.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(v.buffer,h,p),v.version=h.version}}return{get:a,remove:c,update:d}}var gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xy=`#ifdef USE_ALPHAHASH
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
#endif`,vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
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
#endif`,Ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,by=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
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
#endif`,Py=`#ifdef USE_BUMPMAP
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jy=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",$y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
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
}`,r_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,l_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,p_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
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
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,e1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,t1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u1=`#ifdef USE_TRANSMISSION
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
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
}`,M1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E1=`#define DISTANCE
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
}`,b1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,P1=`uniform vec3 diffuse;
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
}`,L1=`#define LAMBERT
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
}`,I1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,D1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,k1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z1=`#define PHONG
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
}`,F1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,O1=`#define STANDARD
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
}`,B1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,j1=`#define TOON
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
}`,H1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,V1=`uniform float size;
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
}`,W1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,X1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$1=`uniform float rotation;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:gy,alphahash_pars_fragment:xy,alphamap_fragment:vy,alphamap_pars_fragment:yy,alphatest_fragment:_y,alphatest_pars_fragment:Sy,aomap_fragment:My,aomap_pars_fragment:Ey,batching_pars_vertex:by,batching_vertex:wy,begin_vertex:Ty,beginnormal_vertex:Cy,bsdfs:Ay,iridescence_fragment:Ry,bumpmap_pars_fragment:Py,clipping_planes_fragment:Ly,clipping_planes_pars_fragment:Iy,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Ny,color_fragment:Uy,color_pars_fragment:ky,color_pars_vertex:zy,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:By,defaultnormal_vertex:jy,displacementmap_pars_vertex:Hy,displacementmap_vertex:Vy,emissivemap_fragment:Wy,emissivemap_pars_fragment:Gy,colorspace_fragment:Xy,colorspace_pars_fragment:$y,envmap_fragment:Yy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:l_,envmap_vertex:Jy,fog_vertex:Qy,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:r_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:o_,lights_pars_begin:a_,lights_toon_fragment:c_,lights_toon_pars_fragment:u_,lights_phong_fragment:d_,lights_phong_pars_fragment:f_,lights_physical_fragment:h_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:x_,logdepthbuf_fragment:v_,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:__,logdepthbuf_vertex:S_,map_fragment:M_,map_pars_fragment:E_,map_particle_fragment:b_,map_particle_pars_fragment:w_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:C_,morphinstance_vertex:A_,morphcolor_vertex:R_,morphnormal_vertex:P_,morphtarget_pars_vertex:L_,morphtarget_vertex:I_,normal_fragment_begin:D_,normal_fragment_maps:N_,normal_pars_fragment:U_,normal_pars_vertex:k_,normal_vertex:z_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:H_,opaque_fragment:V_,packing:W_,premultiplied_alpha_fragment:G_,project_vertex:X_,dithering_fragment:$_,dithering_pars_fragment:Y_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:J_,shadowmap_vertex:Q_,shadowmask_pars_fragment:e1,skinbase_vertex:t1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:r1,specularmap_fragment:s1,specularmap_pars_fragment:o1,tonemapping_fragment:a1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:u1,uv_pars_fragment:d1,uv_pars_vertex:f1,uv_vertex:h1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:x1,backgroundCube_frag:v1,cube_vert:y1,cube_frag:_1,depth_vert:S1,depth_frag:M1,distanceRGBA_vert:E1,distanceRGBA_frag:b1,equirect_vert:w1,equirect_frag:T1,linedashed_vert:C1,linedashed_frag:A1,meshbasic_vert:R1,meshbasic_frag:P1,meshlambert_vert:L1,meshlambert_frag:I1,meshmatcap_vert:D1,meshmatcap_frag:N1,meshnormal_vert:U1,meshnormal_frag:k1,meshphong_vert:z1,meshphong_frag:F1,meshphysical_vert:O1,meshphysical_frag:B1,meshtoon_vert:j1,meshtoon_frag:H1,points_vert:V1,points_frag:W1,shadow_vert:G1,shadow_frag:X1,sprite_vert:$1,sprite_frag:Y1},Ve={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Ai={basic:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Dn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Dn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Dn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Dn([Ve.points,Ve.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Dn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Dn([Ve.common,Ve.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Dn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Dn([Ve.sprite,Ve.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Dn([Ve.common,Ve.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Dn([Ve.lights,Ve.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ai.physical={uniforms:Dn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Dl={r:0,b:0,g:0},Kr=new Pi,q1=new $t;function K1(s,e,n,r,a,c,d){const h=new Et(0);let p=c===!0?0:1,v,y,_=null,x=0,M=null;function b(D){let T=D.isScene===!0?D.background:null;return T&&T.isTexture&&(T=(D.backgroundBlurriness>0?n:e).get(T)),T}function A(D){let T=!1;const W=b(D);W===null?g(h,p):W&&W.isColor&&(g(W,1),T=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||T)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,T){const W=b(T);W&&(W.isCubeTexture||W.mapping===Yl)?(y===void 0&&(y=new mt(new Qt(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:ro(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(O,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(y)),Kr.copy(T.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),y.material.uniforms.envMap.value=W,y.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(q1.makeRotationFromEuler(Kr)),y.material.toneMapped=Nt.getTransfer(W.colorSpace)!==Ut,(_!==W||x!==W.version||M!==s.toneMapping)&&(y.material.needsUpdate=!0,_=W,x=W.version,M=s.toneMapping),y.layers.enableAll(),D.unshift(y,y.geometry,y.material,0,0,null)):W&&W.isTexture&&(v===void 0&&(v=new mt(new rs(2,2),new Lr({name:"BackgroundMaterial",uniforms:ro(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(v)),v.material.uniforms.t2D.value=W,v.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,v.material.toneMapped=Nt.getTransfer(W.colorSpace)!==Ut,W.matrixAutoUpdate===!0&&W.updateMatrix(),v.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||x!==W.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=W,x=W.version,M=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null))}function g(D,T){D.getRGB(Dl,Dg(s)),r.buffers.color.setClear(Dl.r,Dl.g,Dl.b,T,d)}function I(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,T=1){h.set(D),p=T,g(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(h,p)},render:A,addToRenderList:S,dispose:I}}function Z1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,d=!1;function h(C,V,G,J,X){let Z=!1;const re=_(J,G,V);c!==re&&(c=re,v(c.object)),Z=M(C,J,G,X),Z&&b(C,J,G,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,T(C,V,G,J),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return s.createVertexArray()}function v(C){return s.bindVertexArray(C)}function y(C){return s.deleteVertexArray(C)}function _(C,V,G){const J=G.wireframe===!0;let X=r[C.id];X===void 0&&(X={},r[C.id]=X);let Z=X[V.id];Z===void 0&&(Z={},X[V.id]=Z);let re=Z[J];return re===void 0&&(re=x(p()),Z[J]=re),re}function x(C){const V=[],G=[],J=[];for(let X=0;X<n;X++)V[X]=0,G[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:J,object:C,attributes:{},index:null}}function M(C,V,G,J){const X=c.attributes,Z=V.attributes;let re=0;const me=G.getAttributes();for(const F in me)if(me[F].location>=0){const k=X[F];let E=Z[F];if(E===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(E=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(E=C.instanceColor)),k===void 0||k.attribute!==E||E&&k.data!==E.data)return!0;re++}return c.attributesNum!==re||c.index!==J}function b(C,V,G,J){const X={},Z=V.attributes;let re=0;const me=G.getAttributes();for(const F in me)if(me[F].location>=0){let k=Z[F];k===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(k=C.instanceColor));const E={};E.attribute=k,k&&k.data&&(E.data=k.data),X[F]=E,re++}c.attributes=X,c.attributesNum=re,c.index=J}function A(){const C=c.newAttributes;for(let V=0,G=C.length;V<G;V++)C[V]=0}function S(C){g(C,0)}function g(C,V){const G=c.newAttributes,J=c.enabledAttributes,X=c.attributeDivisors;G[C]=1,J[C]===0&&(s.enableVertexAttribArray(C),J[C]=1),X[C]!==V&&(s.vertexAttribDivisor(C,V),X[C]=V)}function I(){const C=c.newAttributes,V=c.enabledAttributes;for(let G=0,J=V.length;G<J;G++)V[G]!==C[G]&&(s.disableVertexAttribArray(G),V[G]=0)}function D(C,V,G,J,X,Z,re){re===!0?s.vertexAttribIPointer(C,V,G,X,Z):s.vertexAttribPointer(C,V,G,J,X,Z)}function T(C,V,G,J){A();const X=J.attributes,Z=G.getAttributes(),re=V.defaultAttributeValues;for(const me in Z){const F=Z[me];if(F.location>=0){let de=X[me];if(de===void 0&&(me==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),me==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const k=de.normalized,E=de.itemSize,K=e.get(de);if(K===void 0)continue;const Se=K.buffer,$=K.type,le=K.bytesPerElement,xe=$===s.INT||$===s.UNSIGNED_INT||de.gpuType===af;if(de.isInterleavedBufferAttribute){const ue=de.data,ye=ue.stride,Ue=de.offset;if(ue.isInstancedInterleavedBuffer){for(let De=0;De<F.locationSize;De++)g(F.location+De,ue.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<F.locationSize;De++)S(F.location+De);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let De=0;De<F.locationSize;De++)D(F.location+De,E/F.locationSize,$,k,ye*le,(Ue+E/F.locationSize*De)*le,xe)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<F.locationSize;ue++)g(F.location+ue,de.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<F.locationSize;ue++)S(F.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let ue=0;ue<F.locationSize;ue++)D(F.location+ue,E/F.locationSize,$,k,E*le,E/F.locationSize*ue*le,xe)}}else if(re!==void 0){const k=re[me];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(F.location,k);break;case 3:s.vertexAttrib3fv(F.location,k);break;case 4:s.vertexAttrib4fv(F.location,k);break;default:s.vertexAttrib1fv(F.location,k)}}}}I()}function W(){N();for(const C in r){const V=r[C];for(const G in V){const J=V[G];for(const X in J)y(J[X].object),delete J[X];delete V[G]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const G in V){const J=V[G];for(const X in J)y(J[X].object),delete J[X];delete V[G]}delete r[C.id]}function U(C){for(const V in r){const G=r[V];if(G[C.id]===void 0)continue;const J=G[C.id];for(const X in J)y(J[X].object),delete J[X];delete G[C.id]}}function N(){P(),d=!0,c!==a&&(c=a,v(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:N,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:I}}function J1(s,e,n){let r;function a(v){r=v}function c(v,y){s.drawArrays(r,v,y),n.update(y,r,1)}function d(v,y,_){_!==0&&(s.drawArraysInstanced(r,v,y,_),n.update(y,r,_))}function h(v,y,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,v,0,y,0,_);let M=0;for(let b=0;b<_;b++)M+=y[b];n.update(M,r,1)}function p(v,y,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<v.length;b++)d(v[b],y[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,v,0,y,0,x,0,_);let b=0;for(let A=0;A<_;A++)b+=y[A]*x[A];n.update(b,r,1)}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Q1(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(U){return!(U!==yi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const N=U===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Ji&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==qi&&!N)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=n.precision!==void 0?n.precision:"highp";const y=p(v);y!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",y,"instead."),v=y);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=b>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:v,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:T,vertexTextures:W,maxSamples:O}}function eS(s){const e=this;let n=null,r=0,a=!1,c=!1;const d=new Jr,h=new yt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||a;return a=x,r=_.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=y(_,x,0)},this.setState=function(_,x,M){const b=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!a||b===null||b.length===0||c&&!S)c?y(null):v();else{const I=c?0:r,D=I*4;let T=g.clippingState||null;p.value=T,T=y(b,x,D,M);for(let W=0;W!==D;++W)T[W]=n[W];g.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function v(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(_,x,M,b){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=p.value,b!==!0||S===null){const g=M+A*4,I=x.matrixWorldInverse;h.getNormalMatrix(I),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,T=M;D!==A;++D,T+=4)d.copy(_[D]).applyMatrix4(I,h),d.normal.toArray(S,T),S[T+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function tS(s){let e=new WeakMap;function n(d,h){return h===Sd?d.mapping=Qs:h===Md&&(d.mapping=eo),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Sd||h===Md)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new ty(p.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",a),n(v.texture,d.mapping)}else return null}}return d}function a(d){const h=d.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const $s=4,Dm=[.125,.215,.35,.446,.526,.582],ts=20,od=new Og,Nm=new Et;let ad=null,ld=0,cd=0,ud=!1;const Qr=(1+Math.sqrt(5))/2,Gs=1/Qr,Um=[new ie(-Qr,Gs,0),new ie(Qr,Gs,0),new ie(-Gs,0,Qr),new ie(Gs,0,Qr),new ie(0,Qr,-Gs),new ie(0,Qr,Gs),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qs||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Qo,format:yi,colorSpace:io,depthBuffer:!1},a=zm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nS(c)),this._blurMaterial=iS(c,e,n)}return a}_compileMaterial(e){const n=new mt(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,r,a){const h=new Kn(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,_=y.autoClear,x=y.toneMapping;y.getClearColor(Nm),y.toneMapping=Rr,y.autoClear=!1;const M=new Pg({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),b=new mt(new Qt,M);let A=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,A=!0):(M.color.copy(Nm),A=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(h.up.set(0,p[g],0),h.lookAt(v[g],0,0)):I===1?(h.up.set(0,0,p[g]),h.lookAt(0,v[g],0)):(h.up.set(0,p[g],0),h.lookAt(0,0,v[g]));const D=this._cubeSize;Nl(a,I*D,g>2?D:0,D,D),y.setRenderTarget(a),A&&y.render(b,h),y.render(e,h)}b.geometry.dispose(),b.material.dispose(),y.toneMapping=x,y.autoClear=_,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Qs||e.mapping===eo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new mt(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Nl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,od)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Um[(a-c-1)%Um.length];this._blur(e,c-1,c,d,h)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,h){const p=this._renderer,v=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,_=new mt(this._lodPlanes[a],v),x=v.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ts-1),A=c/b,S=isFinite(c)?1+Math.floor(y*A):ts;S>ts&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ts}`);const g=[];let I=0;for(let U=0;U<ts;++U){const N=U/A,P=Math.exp(-N*N/2);g.push(P),U===0?I+=P:U<S&&(I+=2*P)}for(let U=0;U<g.length;U++)g[U]=g[U]/I;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-r;const T=this._sizeLods[a],W=3*T*(a>D-$s?a-D+$s:0),O=4*(this._cubeSize-T);Nl(n,W,O,3*T,2*T),p.setRenderTarget(n),p.render(_,od)}}function nS(s){const e=[],n=[],r=[];let a=s;const c=s-$s+1+Dm.length;for(let d=0;d<c;d++){const h=Math.pow(2,a);n.push(h);let p=1/h;d>s-$s?p=Dm[d-s+$s-1]:d===0&&(p=0),r.push(p);const v=1/(h-2),y=-v,_=1+v,x=[y,y,_,y,_,_,y,y,_,_,y,_],M=6,b=6,A=3,S=2,g=1,I=new Float32Array(A*b*M),D=new Float32Array(S*b*M),T=new Float32Array(g*b*M);for(let O=0;O<M;O++){const U=O%3*2/3-1,N=O>2?0:-1,P=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];I.set(P,A*b*O),D.set(x,S*b*O);const C=[O,O,O,O,O,O];T.set(C,g*b*O)}const W=new Zn;W.setAttribute("position",new ai(I,A)),W.setAttribute("uv",new ai(D,S)),W.setAttribute("faceIndex",new ai(T,g)),e.push(W),a>$s&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function zm(s,e,n){const r=new as(s,e,n);return r.texture.mapping=Yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function iS(s,e,n){const r=new Float32Array(ts),a=new ie(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Fm(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Om(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rS(s){let e=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,v=p===Sd||p===Md,y=p===Qs||p===eo;if(v||y){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new km(s)),_=v?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return v&&M&&M.height>0||y&&M&&a(M)?(n===null&&(n=new km(s)),_=v?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function a(h){let p=0;const v=6;for(let y=0;y<v;y++)h[y]!==void 0&&p++;return p===v}function c(h){const p=h.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function sS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Xs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function oS(s,e,n,r){const a={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",d),delete a[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function v(_){const x=[],M=_.index,b=_.attributes.position;let A=0;if(M!==null){const I=M.array;A=M.version;for(let D=0,T=I.length;D<T;D+=3){const W=I[D+0],O=I[D+1],U=I[D+2];x.push(W,O,O,U,U,W)}}else if(b!==void 0){const I=b.array;A=b.version;for(let D=0,T=I.length/3-1;D<T;D+=3){const W=D+0,O=D+1,U=D+2;x.push(W,O,O,U,U,W)}}else return;const S=new(bg(x)?Ig:Lg)(x,1);S.version=A;const g=c.get(_);g&&e.remove(g),c.set(_,S)}function y(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&v(_)}else v(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:y}}function aS(s,e,n){let r;function a(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function p(x,M){s.drawElements(r,M,c,x*d),n.update(M,r,1)}function v(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,x*d,b),n.update(M,r,b))}function y(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let S=0;for(let g=0;g<b;g++)S+=M[g];n.update(S,r,1)}function _(x,M,b,A){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)v(x[g]/d,M[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,A,0,b);let g=0;for(let I=0;I<b;I++)g+=M[I]*A[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=v,this.renderMultiDraw=y,this.renderMultiDrawInstances=_}function lS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function cS(s,e,n){const r=new WeakMap,a=new kt;function c(d,h,p){const v=d.morphTargetInfluences,y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=y!==void 0?y.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let C=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let T=0;b===!0&&(T=1),A===!0&&(T=2),S===!0&&(T=3);let W=h.attributes.position.count*T,O=1;W>e.maxTextureSize&&(O=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const U=new Float32Array(W*O*4*_),N=new Tg(U,W,O,_);N.type=qi,N.needsUpdate=!0;const P=T*4;for(let V=0;V<_;V++){const G=g[V],J=I[V],X=D[V],Z=W*O*4*V;for(let re=0;re<G.count;re++){const me=re*P;b===!0&&(a.fromBufferAttribute(G,re),U[Z+me+0]=a.x,U[Z+me+1]=a.y,U[Z+me+2]=a.z,U[Z+me+3]=0),A===!0&&(a.fromBufferAttribute(J,re),U[Z+me+4]=a.x,U[Z+me+5]=a.y,U[Z+me+6]=a.z,U[Z+me+7]=0),S===!0&&(a.fromBufferAttribute(X,re),U[Z+me+8]=a.x,U[Z+me+9]=a.y,U[Z+me+10]=a.z,U[Z+me+11]=X.itemSize===4?a.w:1)}}x={count:_,texture:N,size:new At(W,O)},r.set(h,x),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let b=0;for(let S=0;S<v.length;S++)b+=v[S];const A=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",v)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function uS(s,e,n,r){let a=new WeakMap;function c(p){const v=r.render.frame,y=p.geometry,_=e.get(p,y);if(a.get(_)!==v&&(e.update(_),a.set(_,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),a.get(p)!==v&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,v))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==v&&(x.update(),a.set(x,v))}return _}function d(){a=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:c,dispose:d}}const jg=new Vn,Bm=new zg(1,1),Hg=new Tg,Vg=new Fv,Wg=new Ug,jm=[],Hm=[],Vm=new Float32Array(16),Wm=new Float32Array(9),Gm=new Float32Array(4);function ao(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=jm[a];if(c===void 0&&(c=new Float32Array(a),jm[a]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=n,s[d].toArray(c,h)}return c}function cn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function un(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Kl(s,e){let n=Hm[e];n===void 0&&(n=new Int32Array(e),Hm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function dS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function fS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2fv(this.addr,e),un(n,e)}}function hS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;s.uniform3fv(this.addr,e),un(n,e)}}function pS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4fv(this.addr,e),un(n,e)}}function mS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Gm.set(r),s.uniformMatrix2fv(this.addr,!1,Gm),un(n,r)}}function gS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Wm.set(r),s.uniformMatrix3fv(this.addr,!1,Wm),un(n,r)}}function xS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Vm.set(r),s.uniformMatrix4fv(this.addr,!1,Vm),un(n,r)}}function vS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2iv(this.addr,e),un(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3iv(this.addr,e),un(n,e)}}function SS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4iv(this.addr,e),un(n,e)}}function MS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2uiv(this.addr,e),un(n,e)}}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3uiv(this.addr,e),un(n,e)}}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4uiv(this.addr,e),un(n,e)}}function TS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Bm.compareFunction=Eg,c=Bm):c=jg,n.setTexture2D(e||c,a)}function CS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Vg,a)}function AS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Wg,a)}function RS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Hg,a)}function PS(s){switch(s){case 5126:return dS;case 35664:return fS;case 35665:return hS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return xS;case 5124:case 35670:return vS;case 35667:case 35671:return yS;case 35668:case 35672:return _S;case 35669:case 35673:return SS;case 5125:return MS;case 36294:return ES;case 36295:return bS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return RS}}function LS(s,e){s.uniform1fv(this.addr,e)}function IS(s,e){const n=ao(e,this.size,2);s.uniform2fv(this.addr,n)}function DS(s,e){const n=ao(e,this.size,3);s.uniform3fv(this.addr,n)}function NS(s,e){const n=ao(e,this.size,4);s.uniform4fv(this.addr,n)}function US(s,e){const n=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function kS(s,e){const n=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function zS(s,e){const n=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function FS(s,e){s.uniform1iv(this.addr,e)}function OS(s,e){s.uniform2iv(this.addr,e)}function BS(s,e){s.uniform3iv(this.addr,e)}function jS(s,e){s.uniform4iv(this.addr,e)}function HS(s,e){s.uniform1uiv(this.addr,e)}function VS(s,e){s.uniform2uiv(this.addr,e)}function WS(s,e){s.uniform3uiv(this.addr,e)}function GS(s,e){s.uniform4uiv(this.addr,e)}function XS(s,e,n){const r=this.cache,a=e.length,c=Kl(n,a);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||jg,c[d])}function $S(s,e,n){const r=this.cache,a=e.length,c=Kl(n,a);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Vg,c[d])}function YS(s,e,n){const r=this.cache,a=e.length,c=Kl(n,a);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||Wg,c[d])}function qS(s,e,n){const r=this.cache,a=e.length,c=Kl(n,a);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Hg,c[d])}function KS(s){switch(s){case 5126:return LS;case 35664:return IS;case 35665:return DS;case 35666:return NS;case 35674:return US;case 35675:return kS;case 35676:return zS;case 5124:case 35670:return FS;case 35667:case 35671:return OS;case 35668:case 35672:return BS;case 35669:case 35673:return jS;case 5125:return HS;case 36294:return VS;case 36295:return WS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return qS}}class ZS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=PS(n.type)}}class JS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KS(n.type)}}class QS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const h=a[c];h.setValue(e,n[h.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function Xm(s,e){s.seq.push(e),s.map[e.id]=e}function eM(s,e,n){const r=s.name,a=r.length;for(dd.lastIndex=0;;){const c=dd.exec(r),d=dd.lastIndex;let h=c[1];const p=c[2]==="]",v=c[3];if(p&&(h=h|0),v===void 0||v==="["&&d+2===a){Xm(n,v===void 0?new ZS(h,s,e):new JS(h,s,e));break}else{let _=n.map[h];_===void 0&&(_=new QS(h),Xm(n,_)),n=_}}}class Hl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);eM(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const h=n[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function $m(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const tM=37297;let nM=0;function iM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${n[d]}`)}return r.join(`
`)}const Ym=new yt;function rM(s){Nt._getMatrix(Ym,Nt.workingColorSpace,s);const e=`mat3( ${Ym.elements.map(n=>n.toFixed(4))} )`;switch(Nt.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+iM(s.getShaderSource(e),d)}else return a}function sM(s,e){const n=rM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function oM(s,e){let n;switch(e){case uv:n="Linear";break;case dv:n="Reinhard";break;case fv:n="Cineon";break;case hv:n="ACESFilmic";break;case mv:n="AgX";break;case gv:n="Neutral";break;case pv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new ie;function aM(){Nt.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function cM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function uM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return n}function $o(s){return s!==""}function Km(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(s){return s.replace(dM,hM)}const fM=new Map;function hM(s,e){let n=_t[e];if(n===void 0){const r=fM.get(e);if(r!==void 0)n=_t[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qd(n)}const pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(s){return s.replace(pM,mM)}function mM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Qm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function xM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qs:case eo:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function yM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ug:e="ENVMAP_BLENDING_MULTIPLY";break;case lv:e="ENVMAP_BLENDING_MIX";break;case cv:e="ENVMAP_BLENDING_ADD";break}return e}function _M(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function SM(s,e,n,r){const a=s.getContext(),c=n.defines;let d=n.vertexShader,h=n.fragmentShader;const p=gM(n),v=xM(n),y=vM(n),_=yM(n),x=_M(n),M=lM(n),b=cM(c),A=a.createProgram();let S,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter($o).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter($o).join(`
`),g.length>0&&(g+=`
`)):(S=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),g=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.envMap?"#define "+y:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Rr?"#define TONE_MAPPING":"",n.toneMapping!==Rr?_t.tonemapping_pars_fragment:"",n.toneMapping!==Rr?oM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,sM("linearToOutputTexel",n.outputColorSpace),aM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),d=Qd(d),d=Km(d,n),d=Zm(d,n),h=Qd(h),h=Km(h,n),h=Zm(h,n),d=Jm(d),h=Jm(h),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+S+d,T=I+g+h,W=$m(a,a.VERTEX_SHADER,D),O=$m(a,a.FRAGMENT_SHADER,T);a.attachShader(A,W),a.attachShader(A,O),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function U(V){if(s.debug.checkShaderErrors){const G=a.getProgramInfoLog(A).trim(),J=a.getShaderInfoLog(W).trim(),X=a.getShaderInfoLog(O).trim();let Z=!0,re=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,W,O);else{const me=qm(a,W,"vertex"),F=qm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+G+`
`+me+`
`+F)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(J===""||X==="")&&(re=!1);re&&(V.diagnostics={runnable:Z,programLog:G,vertexShader:{log:J,prefix:S},fragmentShader:{log:X,prefix:g}})}a.deleteShader(W),a.deleteShader(O),N=new Hl(a,A),P=uM(a,A)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(A,tM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=W,this.fragmentShader=O,this}let MM=0;class EM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new bM(e),n.set(e,r)),r}}class bM{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}}function wM(s,e,n,r,a,c,d){const h=new Ag,p=new EM,v=new Set,y=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return v.add(P),P===0?"uv":`uv${P}`}function S(P,C,V,G,J){const X=G.fog,Z=J.geometry,re=P.isMeshStandardMaterial?G.environment:null,me=(P.isMeshStandardMaterial?n:e).get(P.envMap||re),F=me&&me.mapping===Yl?me.image.height:null,de=b[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const k=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,E=k!==void 0?k.length:0;let K=0;Z.morphAttributes.position!==void 0&&(K=1),Z.morphAttributes.normal!==void 0&&(K=2),Z.morphAttributes.color!==void 0&&(K=3);let Se,$,le,xe;if(de){const xt=Ai[de];Se=xt.vertexShader,$=xt.fragmentShader}else Se=P.vertexShader,$=P.fragmentShader,p.update(P),le=p.getVertexShaderID(P),xe=p.getFragmentShaderID(P);const ue=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ue=J.isInstancedMesh===!0,De=J.isBatchedMesh===!0,et=!!P.map,rt=!!P.matcap,Ke=!!me,j=!!P.aoMap,ve=!!P.lightMap,Le=!!P.bumpMap,Xe=!!P.normalMap,Fe=!!P.displacementMap,gt=!!P.emissiveMap,je=!!P.metalnessMap,z=!!P.roughnessMap,R=P.anisotropy>0,oe=P.clearcoat>0,Me=P.dispersion>0,Ee=P.iridescence>0,_e=P.sheen>0,qe=P.transmission>0,Oe=R&&!!P.anisotropyMap,We=oe&&!!P.clearcoatMap,pt=oe&&!!P.clearcoatNormalMap,Ce=oe&&!!P.clearcoatRoughnessMap,Ge=Ee&&!!P.iridescenceMap,Y=Ee&&!!P.iridescenceThicknessMap,Re=_e&&!!P.sheenColorMap,be=_e&&!!P.sheenRoughnessMap,ct=!!P.specularMap,ut=!!P.specularColorMap,Be=!!P.specularIntensityMap,B=qe&&!!P.transmissionMap,we=qe&&!!P.thicknessMap,te=!!P.gradientMap,he=!!P.alphaMap,ke=P.alphaTest>0,Ne=!!P.alphaHash,st=!!P.extensions;let It=Rr;P.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(It=s.toneMapping);const zt={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:Se,fragmentShader:$,defines:P.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:De,batchingColor:De&&J._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,instancingMorph:Ue&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:io,alphaToCoverage:!!P.alphaToCoverage,map:et,matcap:rt,envMap:Ke,envMapMode:Ke&&me.mapping,envMapCubeUVHeight:F,aoMap:j,lightMap:ve,bumpMap:Le,normalMap:Xe,displacementMap:x&&Fe,emissiveMap:gt,normalMapObjectSpace:Xe&&P.normalMapType===_v,normalMapTangentSpace:Xe&&P.normalMapType===Mg,metalnessMap:je,roughnessMap:z,anisotropy:R,anisotropyMap:Oe,clearcoat:oe,clearcoatMap:We,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ce,dispersion:Me,iridescence:Ee,iridescenceMap:Ge,iridescenceThicknessMap:Y,sheen:_e,sheenColorMap:Re,sheenRoughnessMap:be,specularMap:ct,specularColorMap:ut,specularIntensityMap:Be,transmission:qe,transmissionMap:B,thicknessMap:we,gradientMap:te,opaque:P.transparent===!1&&P.blending===Ys&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:ke,alphaHash:Ne,combine:P.combine,mapUv:et&&A(P.map.channel),aoMapUv:j&&A(P.aoMap.channel),lightMapUv:ve&&A(P.lightMap.channel),bumpMapUv:Le&&A(P.bumpMap.channel),normalMapUv:Xe&&A(P.normalMap.channel),displacementMapUv:Fe&&A(P.displacementMap.channel),emissiveMapUv:gt&&A(P.emissiveMap.channel),metalnessMapUv:je&&A(P.metalnessMap.channel),roughnessMapUv:z&&A(P.roughnessMap.channel),anisotropyMapUv:Oe&&A(P.anisotropyMap.channel),clearcoatMapUv:We&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:pt&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:be&&A(P.sheenRoughnessMap.channel),specularMapUv:ct&&A(P.specularMap.channel),specularColorMapUv:ut&&A(P.specularColorMap.channel),specularIntensityMapUv:Be&&A(P.specularIntensityMap.channel),transmissionMapUv:B&&A(P.transmissionMap.channel),thicknessMapUv:we&&A(P.thicknessMap.channel),alphaMapUv:he&&A(P.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xe||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Z.attributes.uv&&(et||he),fog:!!X,useFog:P.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ye,skinning:J.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:K,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:et&&P.map.isVideoTexture===!0&&Nt.getTransfer(P.map.colorSpace)===Ut,decodeVideoTextureEmissive:gt&&P.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(P.emissiveMap.colorSpace)===Ut,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Yi,flipSided:P.side===Hn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return zt.vertexUv1s=v.has(1),zt.vertexUv2s=v.has(2),zt.vertexUv3s=v.has(3),v.clear(),zt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)C.push(V),C.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(I(C,P),D(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function I(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function D(P,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),P.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),P.push(h.mask)}function T(P){const C=b[P.type];let V;if(C){const G=Ai[C];V=Zv.clone(G.uniforms)}else V=P.uniforms;return V}function W(P,C){let V;for(let G=0,J=y.length;G<J;G++){const X=y[G];if(X.cacheKey===C){V=X,++V.usedTimes;break}}return V===void 0&&(V=new SM(s,C,P,c),y.push(V)),V}function O(P){if(--P.usedTimes===0){const C=y.indexOf(P);y[C]=y[y.length-1],y.pop(),P.destroy()}}function U(P){p.remove(P)}function N(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:T,acquireProgram:W,releaseProgram:O,releaseShaderCache:U,programs:y,dispose:N}}function TM(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function a(d,h,p){s.get(d)[h]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function CM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tg(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(_,x,M,b,A,S){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:M,groupOrder:b,renderOrder:_.renderOrder,z:A,group:S},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=M,g.groupOrder=b,g.renderOrder=_.renderOrder,g.z=A,g.group=S),e++,g}function h(_,x,M,b,A,S){const g=d(_,x,M,b,A,S);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function p(_,x,M,b,A,S){const g=d(_,x,M,b,A,S);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function v(_,x){n.length>1&&n.sort(_||CM),r.length>1&&r.sort(x||eg),a.length>1&&a.sort(x||eg)}function y(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:h,unshift:p,finish:y,sort:v}}function AM(){let s=new WeakMap;function e(r,a){const c=s.get(r);let d;return c===void 0?(d=new tg,s.set(r,[d])):a>=c.length?(d=new tg,c.push(d)):d=c[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function RM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Et};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function PM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let LM=0;function IM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function DM(s){const e=new RM,n=PM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)r.probe.push(new ie);const a=new ie,c=new $t,d=new $t;function h(v){let y=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,b=0,A=0,S=0,g=0,I=0,D=0,T=0,W=0,O=0,U=0;v.sort(IM);for(let P=0,C=v.length;P<C;P++){const V=v[P],G=V.color,J=V.intensity,X=V.distance,Z=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)y+=G.r*J,_+=G.g*J,x+=G.b*J;else if(V.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(V.sh.coefficients[re],J);U++}else if(V.isDirectionalLight){const re=e.get(V);if(re.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const me=V.shadow,F=n.get(V);F.shadowIntensity=me.intensity,F.shadowBias=me.bias,F.shadowNormalBias=me.normalBias,F.shadowRadius=me.radius,F.shadowMapSize=me.mapSize,r.directionalShadow[M]=F,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=V.shadow.matrix,I++}r.directional[M]=re,M++}else if(V.isSpotLight){const re=e.get(V);re.position.setFromMatrixPosition(V.matrixWorld),re.color.copy(G).multiplyScalar(J),re.distance=X,re.coneCos=Math.cos(V.angle),re.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),re.decay=V.decay,r.spot[A]=re;const me=V.shadow;if(V.map&&(r.spotLightMap[W]=V.map,W++,me.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[A]=me.matrix,V.castShadow){const F=n.get(V);F.shadowIntensity=me.intensity,F.shadowBias=me.bias,F.shadowNormalBias=me.normalBias,F.shadowRadius=me.radius,F.shadowMapSize=me.mapSize,r.spotShadow[A]=F,r.spotShadowMap[A]=Z,T++}A++}else if(V.isRectAreaLight){const re=e.get(V);re.color.copy(G).multiplyScalar(J),re.halfWidth.set(V.width*.5,0,0),re.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=re,S++}else if(V.isPointLight){const re=e.get(V);if(re.color.copy(V.color).multiplyScalar(V.intensity),re.distance=V.distance,re.decay=V.decay,V.castShadow){const me=V.shadow,F=n.get(V);F.shadowIntensity=me.intensity,F.shadowBias=me.bias,F.shadowNormalBias=me.normalBias,F.shadowRadius=me.radius,F.shadowMapSize=me.mapSize,F.shadowCameraNear=me.camera.near,F.shadowCameraFar=me.camera.far,r.pointShadow[b]=F,r.pointShadowMap[b]=Z,r.pointShadowMatrix[b]=V.shadow.matrix,D++}r.point[b]=re,b++}else if(V.isHemisphereLight){const re=e.get(V);re.skyColor.copy(V.color).multiplyScalar(J),re.groundColor.copy(V.groundColor).multiplyScalar(J),r.hemi[g]=re,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=_,r.ambient[2]=x;const N=r.hash;(N.directionalLength!==M||N.pointLength!==b||N.spotLength!==A||N.rectAreaLength!==S||N.hemiLength!==g||N.numDirectionalShadows!==I||N.numPointShadows!==D||N.numSpotShadows!==T||N.numSpotMaps!==W||N.numLightProbes!==U)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=b,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=T+W-O,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,N.directionalLength=M,N.pointLength=b,N.spotLength=A,N.rectAreaLength=S,N.hemiLength=g,N.numDirectionalShadows=I,N.numPointShadows=D,N.numSpotShadows=T,N.numSpotMaps=W,N.numLightProbes=U,r.version=LM++)}function p(v,y){let _=0,x=0,M=0,b=0,A=0;const S=y.matrixWorldInverse;for(let g=0,I=v.length;g<I;g++){const D=v[g];if(D.isDirectionalLight){const T=r.directional[_];T.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),_++}else if(D.isSpotLight){const T=r.spot[M];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const T=r.rectArea[b];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(S),d.identity(),c.copy(D.matrixWorld),c.premultiply(S),d.extractRotation(c),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(d),T.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const T=r.point[x];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const T=r.hemi[A];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(S),A++}}}return{setup:h,setupView:p,state:r}}function ng(s){const e=new DM(s),n=[],r=[];function a(y){v.camera=y,n.length=0,r.length=0}function c(y){n.push(y)}function d(y){r.push(y)}function h(){e.setup(n)}function p(y){e.setupView(n,y)}const v={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:v,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:d}}function NM(s){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let h;return d===void 0?(h=new ng(s),e.set(a,[h])):c>=d.length?(h=new ng(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zM(s,e,n){let r=new pf;const a=new At,c=new At,d=new kt,h=new ay({depthPacking:yv}),p=new ly,v={},y=n.maxTextureSize,_={[Pr]:Hn,[Hn]:Pr,[Yi]:Yi},x=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:UM,fragmentShader:kM}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Zn;b.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new mt(b,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lg;let g=this.type;this.render=function(O,U,N){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Ar),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=g!==$i&&this.type===$i,X=g===$i&&this.type!==$i;for(let Z=0,re=O.length;Z<re;Z++){const me=O[Z],F=me.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const de=F.getFrameExtents();if(a.multiply(de),c.copy(F.mapSize),(a.x>y||a.y>y)&&(a.x>y&&(c.x=Math.floor(y/de.x),a.x=c.x*de.x,F.mapSize.x=c.x),a.y>y&&(c.y=Math.floor(y/de.y),a.y=c.y*de.y,F.mapSize.y=c.y)),F.map===null||J===!0||X===!0){const E=this.type!==$i?{minFilter:_i,magFilter:_i}:{};F.map!==null&&F.map.dispose(),F.map=new as(a.x,a.y,E),F.map.texture.name=me.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const k=F.getViewportCount();for(let E=0;E<k;E++){const K=F.getViewport(E);d.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),G.viewport(d),F.updateMatrices(me,E),r=F.getFrustum(),T(U,N,F.camera,me,this.type)}F.isPointLightShadow!==!0&&this.type===$i&&I(F,N),F.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(P,C,V)};function I(O,U){const N=e.update(A);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new as(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,N,x,A,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,N,M,A,null)}function D(O,U,N,P){let C=null;const V=N.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)C=V;else if(C=N.isPointLight===!0?p:h,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const G=C.uuid,J=U.uuid;let X=v[G];X===void 0&&(X={},v[G]=X);let Z=X[J];Z===void 0&&(Z=C.clone(),X[J]=Z,U.addEventListener("dispose",W)),C=Z}if(C.visible=U.visible,C.wireframe=U.wireframe,P===$i?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:_[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,N.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const G=s.properties.get(C);G.light=N}return C}function T(O,U,N,P,C){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===$i)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,O.matrixWorld);const J=e.update(O),X=O.material;if(Array.isArray(X)){const Z=J.groups;for(let re=0,me=Z.length;re<me;re++){const F=Z[re],de=X[F.materialIndex];if(de&&de.visible){const k=D(O,de,P,C);O.onBeforeShadow(s,O,U,N,J,k,F),s.renderBufferDirect(N,null,J,k,O,F),O.onAfterShadow(s,O,U,N,J,k,F)}}}else if(X.visible){const Z=D(O,X,P,C);O.onBeforeShadow(s,O,U,N,J,Z,null),s.renderBufferDirect(N,null,J,Z,O,null),O.onAfterShadow(s,O,U,N,J,Z,null)}}const G=O.children;for(let J=0,X=G.length;J<X;J++)T(G[J],U,N,P,C)}function W(O){O.target.removeEventListener("dispose",W);for(const N in v){const P=v[N],C=O.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const FM={[pd]:md,[gd]:yd,[xd]:_d,[Js]:vd,[md]:pd,[yd]:gd,[_d]:xd,[vd]:Js};function OM(s,e){function n(){let B=!1;const we=new kt;let te=null;const he=new kt(0,0,0,0);return{setMask:function(ke){te!==ke&&!B&&(s.colorMask(ke,ke,ke,ke),te=ke)},setLocked:function(ke){B=ke},setClear:function(ke,Ne,st,It,zt){zt===!0&&(ke*=It,Ne*=It,st*=It),we.set(ke,Ne,st,It),he.equals(we)===!1&&(s.clearColor(ke,Ne,st,It),he.copy(we))},reset:function(){B=!1,te=null,he.set(-1,0,0,0)}}}function r(){let B=!1,we=!1,te=null,he=null,ke=null;return{setReversed:function(Ne){if(we!==Ne){const st=e.get("EXT_clip_control");we?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const It=ke;ke=null,this.setClear(It)}we=Ne},getReversed:function(){return we},setTest:function(Ne){Ne?ue(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ne){te!==Ne&&!B&&(s.depthMask(Ne),te=Ne)},setFunc:function(Ne){if(we&&(Ne=FM[Ne]),he!==Ne){switch(Ne){case pd:s.depthFunc(s.NEVER);break;case md:s.depthFunc(s.ALWAYS);break;case gd:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case xd:s.depthFunc(s.EQUAL);break;case vd:s.depthFunc(s.GEQUAL);break;case yd:s.depthFunc(s.GREATER);break;case _d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Ne}},setLocked:function(Ne){B=Ne},setClear:function(Ne){ke!==Ne&&(we&&(Ne=1-Ne),s.clearDepth(Ne),ke=Ne)},reset:function(){B=!1,te=null,he=null,ke=null,we=!1}}}function a(){let B=!1,we=null,te=null,he=null,ke=null,Ne=null,st=null,It=null,zt=null;return{setTest:function(xt){B||(xt?ue(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(xt){we!==xt&&!B&&(s.stencilMask(xt),we=xt)},setFunc:function(xt,en,dn){(te!==xt||he!==en||ke!==dn)&&(s.stencilFunc(xt,en,dn),te=xt,he=en,ke=dn)},setOp:function(xt,en,dn){(Ne!==xt||st!==en||It!==dn)&&(s.stencilOp(xt,en,dn),Ne=xt,st=en,It=dn)},setLocked:function(xt){B=xt},setClear:function(xt){zt!==xt&&(s.clearStencil(xt),zt=xt)},reset:function(){B=!1,we=null,te=null,he=null,ke=null,Ne=null,st=null,It=null,zt=null}}}const c=new n,d=new r,h=new a,p=new WeakMap,v=new WeakMap;let y={},_={},x=new WeakMap,M=[],b=null,A=!1,S=null,g=null,I=null,D=null,T=null,W=null,O=null,U=new Et(0,0,0),N=0,P=!1,C=null,V=null,G=null,J=null,X=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,me=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(F)[1]),re=me>=1):F.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),re=me>=2);let de=null,k={};const E=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),Se=new kt().fromArray(E),$=new kt().fromArray(K);function le(B,we,te,he){const ke=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(B,Ne),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<te;st++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(we+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Ne}const xe={};xe[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(s.DEPTH_TEST),d.setFunc(Js),Le(!1),Xe(im),ue(s.CULL_FACE),j(Ar);function ue(B){y[B]!==!0&&(s.enable(B),y[B]=!0)}function ye(B){y[B]!==!1&&(s.disable(B),y[B]=!1)}function Ue(B,we){return _[B]!==we?(s.bindFramebuffer(B,we),_[B]=we,B===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=we),B===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=we),!0):!1}function De(B,we){let te=M,he=!1;if(B){te=x.get(we),te===void 0&&(te=[],x.set(we,te));const ke=B.textures;if(te.length!==ke.length||te[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,st=ke.length;Ne<st;Ne++)te[Ne]=s.COLOR_ATTACHMENT0+Ne;te.length=ke.length,he=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,he=!0);he&&s.drawBuffers(te)}function et(B){return b!==B?(s.useProgram(B),b=B,!0):!1}const rt={[es]:s.FUNC_ADD,[G0]:s.FUNC_SUBTRACT,[X0]:s.FUNC_REVERSE_SUBTRACT};rt[$0]=s.MIN,rt[Y0]=s.MAX;const Ke={[q0]:s.ZERO,[K0]:s.ONE,[Z0]:s.SRC_COLOR,[fd]:s.SRC_ALPHA,[iv]:s.SRC_ALPHA_SATURATE,[tv]:s.DST_COLOR,[Q0]:s.DST_ALPHA,[J0]:s.ONE_MINUS_SRC_COLOR,[hd]:s.ONE_MINUS_SRC_ALPHA,[nv]:s.ONE_MINUS_DST_COLOR,[ev]:s.ONE_MINUS_DST_ALPHA,[rv]:s.CONSTANT_COLOR,[sv]:s.ONE_MINUS_CONSTANT_COLOR,[ov]:s.CONSTANT_ALPHA,[av]:s.ONE_MINUS_CONSTANT_ALPHA};function j(B,we,te,he,ke,Ne,st,It,zt,xt){if(B===Ar){A===!0&&(ye(s.BLEND),A=!1);return}if(A===!1&&(ue(s.BLEND),A=!0),B!==W0){if(B!==S||xt!==P){if((g!==es||T!==es)&&(s.blendEquation(s.FUNC_ADD),g=es,T=es),xt)switch(B){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rm:s.blendFunc(s.ONE,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}I=null,D=null,W=null,O=null,U.set(0,0,0),N=0,S=B,P=xt}return}ke=ke||we,Ne=Ne||te,st=st||he,(we!==g||ke!==T)&&(s.blendEquationSeparate(rt[we],rt[ke]),g=we,T=ke),(te!==I||he!==D||Ne!==W||st!==O)&&(s.blendFuncSeparate(Ke[te],Ke[he],Ke[Ne],Ke[st]),I=te,D=he,W=Ne,O=st),(It.equals(U)===!1||zt!==N)&&(s.blendColor(It.r,It.g,It.b,zt),U.copy(It),N=zt),S=B,P=!1}function ve(B,we){B.side===Yi?ye(s.CULL_FACE):ue(s.CULL_FACE);let te=B.side===Hn;we&&(te=!te),Le(te),B.blending===Ys&&B.transparent===!1?j(Ar):j(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),d.setFunc(B.depthFunc),d.setTest(B.depthTest),d.setMask(B.depthWrite),c.setMask(B.colorWrite);const he=B.stencilWrite;h.setTest(he),he&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),gt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(B){C!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),C=B)}function Xe(B){B!==H0?(ue(s.CULL_FACE),B!==V&&(B===im?s.cullFace(s.BACK):B===V0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),V=B}function Fe(B){B!==G&&(re&&s.lineWidth(B),G=B)}function gt(B,we,te){B?(ue(s.POLYGON_OFFSET_FILL),(J!==we||X!==te)&&(s.polygonOffset(we,te),J=we,X=te)):ye(s.POLYGON_OFFSET_FILL)}function je(B){B?ue(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function z(B){B===void 0&&(B=s.TEXTURE0+Z-1),de!==B&&(s.activeTexture(B),de=B)}function R(B,we,te){te===void 0&&(de===null?te=s.TEXTURE0+Z-1:te=de);let he=k[te];he===void 0&&(he={type:void 0,texture:void 0},k[te]=he),(he.type!==B||he.texture!==we)&&(de!==te&&(s.activeTexture(te),de=te),s.bindTexture(B,we||xe[B]),he.type=B,he.texture=we)}function oe(){const B=k[de];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(B){Se.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Se.copy(B))}function be(B){$.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),$.copy(B))}function ct(B,we){let te=v.get(we);te===void 0&&(te=new WeakMap,v.set(we,te));let he=te.get(B);he===void 0&&(he=s.getUniformBlockIndex(we,B.name),te.set(B,he))}function ut(B,we){const he=v.get(we).get(B);p.get(we)!==he&&(s.uniformBlockBinding(we,he,B.__bindingPointIndex),p.set(we,he))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},de=null,k={},_={},x=new WeakMap,M=[],b=null,A=!1,S=null,g=null,I=null,D=null,T=null,W=null,O=null,U=new Et(0,0,0),N=0,P=!1,C=null,V=null,G=null,J=null,X=null,Se.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ue,disable:ye,bindFramebuffer:Ue,drawBuffers:De,useProgram:et,setBlending:j,setMaterial:ve,setFlipSided:Le,setCullFace:Xe,setLineWidth:Fe,setPolygonOffset:gt,setScissorTest:je,activeTexture:z,bindTexture:R,unbindTexture:oe,compressedTexImage2D:Me,compressedTexImage3D:Ee,texImage2D:Ge,texImage3D:Y,updateUBOMapping:ct,uniformBlockBinding:ut,texStorage2D:pt,texStorage3D:Ce,texSubImage2D:_e,texSubImage3D:qe,compressedTexSubImage2D:Oe,compressedTexSubImage3D:We,scissor:Re,viewport:be,reset:Be}}function BM(s,e,n,r,a,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new At,y=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,R){return M?new OffscreenCanvas(z,R):Gl("canvas")}function A(z,R,oe){let Me=1;const Ee=je(z);if((Ee.width>oe||Ee.height>oe)&&(Me=oe/Math.max(Ee.width,Ee.height)),Me<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const _e=Math.floor(Me*Ee.width),qe=Math.floor(Me*Ee.height);_===void 0&&(_=b(_e,qe));const Oe=R?b(_e,qe):_;return Oe.width=_e,Oe.height=qe,Oe.getContext("2d").drawImage(z,0,0,_e,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+_e+"x"+qe+")."),Oe}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),z;return z}function S(z){return z.generateMipmaps}function g(z){s.generateMipmap(z)}function I(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(z,R,oe,Me,Ee=!1){if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let _e=R;if(R===s.RED&&(oe===s.FLOAT&&(_e=s.R32F),oe===s.HALF_FLOAT&&(_e=s.R16F),oe===s.UNSIGNED_BYTE&&(_e=s.R8)),R===s.RED_INTEGER&&(oe===s.UNSIGNED_BYTE&&(_e=s.R8UI),oe===s.UNSIGNED_SHORT&&(_e=s.R16UI),oe===s.UNSIGNED_INT&&(_e=s.R32UI),oe===s.BYTE&&(_e=s.R8I),oe===s.SHORT&&(_e=s.R16I),oe===s.INT&&(_e=s.R32I)),R===s.RG&&(oe===s.FLOAT&&(_e=s.RG32F),oe===s.HALF_FLOAT&&(_e=s.RG16F),oe===s.UNSIGNED_BYTE&&(_e=s.RG8)),R===s.RG_INTEGER&&(oe===s.UNSIGNED_BYTE&&(_e=s.RG8UI),oe===s.UNSIGNED_SHORT&&(_e=s.RG16UI),oe===s.UNSIGNED_INT&&(_e=s.RG32UI),oe===s.BYTE&&(_e=s.RG8I),oe===s.SHORT&&(_e=s.RG16I),oe===s.INT&&(_e=s.RG32I)),R===s.RGB_INTEGER&&(oe===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),oe===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),oe===s.UNSIGNED_INT&&(_e=s.RGB32UI),oe===s.BYTE&&(_e=s.RGB8I),oe===s.SHORT&&(_e=s.RGB16I),oe===s.INT&&(_e=s.RGB32I)),R===s.RGBA_INTEGER&&(oe===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),oe===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),oe===s.UNSIGNED_INT&&(_e=s.RGBA32UI),oe===s.BYTE&&(_e=s.RGBA8I),oe===s.SHORT&&(_e=s.RGBA16I),oe===s.INT&&(_e=s.RGBA32I)),R===s.RGB&&oe===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),R===s.RGBA){const qe=Ee?Vl:Nt.getTransfer(Me);oe===s.FLOAT&&(_e=s.RGBA32F),oe===s.HALF_FLOAT&&(_e=s.RGBA16F),oe===s.UNSIGNED_BYTE&&(_e=qe===Ut?s.SRGB8_ALPHA8:s.RGBA8),oe===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),oe===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function T(z,R){let oe;return z?R===null||R===os||R===to?oe=s.DEPTH24_STENCIL8:R===qi?oe=s.DEPTH32F_STENCIL8:R===qo&&(oe=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===os||R===to?oe=s.DEPTH_COMPONENT24:R===qi?oe=s.DEPTH_COMPONENT32F:R===qo&&(oe=s.DEPTH_COMPONENT16),oe}function W(z,R){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==_i&&z.minFilter!==Ri?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function O(z){const R=z.target;R.removeEventListener("dispose",O),N(R),R.isVideoTexture&&y.delete(R)}function U(z){const R=z.target;R.removeEventListener("dispose",U),C(R)}function N(z){const R=r.get(z);if(R.__webglInit===void 0)return;const oe=z.source,Me=x.get(oe);if(Me){const Ee=Me[R.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&P(z),Object.keys(Me).length===0&&x.delete(oe)}r.remove(z)}function P(z){const R=r.get(z);s.deleteTexture(R.__webglTexture);const oe=z.source,Me=x.get(oe);delete Me[R.__cacheKey],d.memory.textures--}function C(z){const R=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(R.__webglFramebuffer[Me]))for(let Ee=0;Ee<R.__webglFramebuffer[Me].length;Ee++)s.deleteFramebuffer(R.__webglFramebuffer[Me][Ee]);else s.deleteFramebuffer(R.__webglFramebuffer[Me]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[Me])}else{if(Array.isArray(R.__webglFramebuffer))for(let Me=0;Me<R.__webglFramebuffer.length;Me++)s.deleteFramebuffer(R.__webglFramebuffer[Me]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Me=0;Me<R.__webglColorRenderbuffer.length;Me++)R.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[Me]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const oe=z.textures;for(let Me=0,Ee=oe.length;Me<Ee;Me++){const _e=r.get(oe[Me]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),d.memory.textures--),r.remove(oe[Me])}r.remove(z)}let V=0;function G(){V=0}function J(){const z=V;return z>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+a.maxTextures),V+=1,z}function X(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function Z(z,R){const oe=r.get(z);if(z.isVideoTexture&&Fe(z),z.isRenderTargetTexture===!1&&z.version>0&&oe.__version!==z.version){const Me=z.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(oe,z,R);return}}n.bindTexture(s.TEXTURE_2D,oe.__webglTexture,s.TEXTURE0+R)}function re(z,R){const oe=r.get(z);if(z.version>0&&oe.__version!==z.version){$(oe,z,R);return}n.bindTexture(s.TEXTURE_2D_ARRAY,oe.__webglTexture,s.TEXTURE0+R)}function me(z,R){const oe=r.get(z);if(z.version>0&&oe.__version!==z.version){$(oe,z,R);return}n.bindTexture(s.TEXTURE_3D,oe.__webglTexture,s.TEXTURE0+R)}function F(z,R){const oe=r.get(z);if(z.version>0&&oe.__version!==z.version){le(oe,z,R);return}n.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture,s.TEXTURE0+R)}const de={[Ed]:s.REPEAT,[ns]:s.CLAMP_TO_EDGE,[bd]:s.MIRRORED_REPEAT},k={[_i]:s.NEAREST,[xv]:s.NEAREST_MIPMAP_NEAREST,[hl]:s.NEAREST_MIPMAP_LINEAR,[Ri]:s.LINEAR,[Du]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},E={[Sv]:s.NEVER,[Cv]:s.ALWAYS,[Mv]:s.LESS,[Eg]:s.LEQUAL,[Ev]:s.EQUAL,[Tv]:s.GEQUAL,[bv]:s.GREATER,[wv]:s.NOTEQUAL};function K(z,R){if(R.type===qi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ri||R.magFilter===Du||R.magFilter===hl||R.magFilter===is||R.minFilter===Ri||R.minFilter===Du||R.minFilter===hl||R.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,de[R.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,de[R.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,de[R.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,k[R.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,k[R.minFilter]),R.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,E[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===_i||R.minFilter!==hl&&R.minFilter!==is||R.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,a.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function Se(z,R){let oe=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",O));const Me=R.source;let Ee=x.get(Me);Ee===void 0&&(Ee={},x.set(Me,Ee));const _e=X(R);if(_e!==z.__cacheKey){Ee[_e]===void 0&&(Ee[_e]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,oe=!0),Ee[_e].usedTimes++;const qe=Ee[z.__cacheKey];qe!==void 0&&(Ee[z.__cacheKey].usedTimes--,qe.usedTimes===0&&P(R)),z.__cacheKey=_e,z.__webglTexture=Ee[_e].texture}return oe}function $(z,R,oe){let Me=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Me=s.TEXTURE_3D);const Ee=Se(z,R),_e=R.source;n.bindTexture(Me,z.__webglTexture,s.TEXTURE0+oe);const qe=r.get(_e);if(_e.version!==qe.__version||Ee===!0){n.activeTexture(s.TEXTURE0+oe);const Oe=Nt.getPrimaries(Nt.workingColorSpace),We=R.colorSpace===Cr?null:Nt.getPrimaries(R.colorSpace),pt=R.colorSpace===Cr||Oe===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ce=A(R.image,!1,a.maxTextureSize);Ce=gt(R,Ce);const Ge=c.convert(R.format,R.colorSpace),Y=c.convert(R.type);let Re=D(R.internalFormat,Ge,Y,R.colorSpace,R.isVideoTexture);K(Me,R);let be;const ct=R.mipmaps,ut=R.isVideoTexture!==!0,Be=qe.__version===void 0||Ee===!0,B=_e.dataReady,we=W(R,Ce);if(R.isDepthTexture)Re=T(R.format===no,R.type),Be&&(ut?n.texStorage2D(s.TEXTURE_2D,1,Re,Ce.width,Ce.height):n.texImage2D(s.TEXTURE_2D,0,Re,Ce.width,Ce.height,0,Ge,Y,null));else if(R.isDataTexture)if(ct.length>0){ut&&Be&&n.texStorage2D(s.TEXTURE_2D,we,Re,ct[0].width,ct[0].height);for(let te=0,he=ct.length;te<he;te++)be=ct[te],ut?B&&n.texSubImage2D(s.TEXTURE_2D,te,0,0,be.width,be.height,Ge,Y,be.data):n.texImage2D(s.TEXTURE_2D,te,Re,be.width,be.height,0,Ge,Y,be.data);R.generateMipmaps=!1}else ut?(Be&&n.texStorage2D(s.TEXTURE_2D,we,Re,Ce.width,Ce.height),B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce.width,Ce.height,Ge,Y,Ce.data)):n.texImage2D(s.TEXTURE_2D,0,Re,Ce.width,Ce.height,0,Ge,Y,Ce.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ut&&Be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,Re,ct[0].width,ct[0].height,Ce.depth);for(let te=0,he=ct.length;te<he;te++)if(be=ct[te],R.format!==yi)if(Ge!==null)if(ut){if(B)if(R.layerUpdates.size>0){const ke=Im(be.width,be.height,R.format,R.type);for(const Ne of R.layerUpdates){const st=be.data.subarray(Ne*ke/be.data.BYTES_PER_ELEMENT,(Ne+1)*ke/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Ne,be.width,be.height,1,Ge,st)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,Ce.depth,Ge,be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Re,be.width,be.height,Ce.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?B&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,Ce.depth,Ge,Y,be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,te,Re,be.width,be.height,Ce.depth,0,Ge,Y,be.data)}else{ut&&Be&&n.texStorage2D(s.TEXTURE_2D,we,Re,ct[0].width,ct[0].height);for(let te=0,he=ct.length;te<he;te++)be=ct[te],R.format!==yi?Ge!==null?ut?B&&n.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,be.width,be.height,Ge,be.data):n.compressedTexImage2D(s.TEXTURE_2D,te,Re,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?B&&n.texSubImage2D(s.TEXTURE_2D,te,0,0,be.width,be.height,Ge,Y,be.data):n.texImage2D(s.TEXTURE_2D,te,Re,be.width,be.height,0,Ge,Y,be.data)}else if(R.isDataArrayTexture)if(ut){if(Be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,Re,Ce.width,Ce.height,Ce.depth),B)if(R.layerUpdates.size>0){const te=Im(Ce.width,Ce.height,R.format,R.type);for(const he of R.layerUpdates){const ke=Ce.data.subarray(he*te/Ce.data.BYTES_PER_ELEMENT,(he+1)*te/Ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Ce.width,Ce.height,1,Ge,Y,ke)}R.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ge,Y,Ce.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,Ce.width,Ce.height,Ce.depth,0,Ge,Y,Ce.data);else if(R.isData3DTexture)ut?(Be&&n.texStorage3D(s.TEXTURE_3D,we,Re,Ce.width,Ce.height,Ce.depth),B&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ge,Y,Ce.data)):n.texImage3D(s.TEXTURE_3D,0,Re,Ce.width,Ce.height,Ce.depth,0,Ge,Y,Ce.data);else if(R.isFramebufferTexture){if(Be)if(ut)n.texStorage2D(s.TEXTURE_2D,we,Re,Ce.width,Ce.height);else{let te=Ce.width,he=Ce.height;for(let ke=0;ke<we;ke++)n.texImage2D(s.TEXTURE_2D,ke,Re,te,he,0,Ge,Y,null),te>>=1,he>>=1}}else if(ct.length>0){if(ut&&Be){const te=je(ct[0]);n.texStorage2D(s.TEXTURE_2D,we,Re,te.width,te.height)}for(let te=0,he=ct.length;te<he;te++)be=ct[te],ut?B&&n.texSubImage2D(s.TEXTURE_2D,te,0,0,Ge,Y,be):n.texImage2D(s.TEXTURE_2D,te,Re,Ge,Y,be);R.generateMipmaps=!1}else if(ut){if(Be){const te=je(Ce);n.texStorage2D(s.TEXTURE_2D,we,Re,te.width,te.height)}B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Y,Ce)}else n.texImage2D(s.TEXTURE_2D,0,Re,Ge,Y,Ce);S(R)&&g(Me),qe.__version=_e.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function le(z,R,oe){if(R.image.length!==6)return;const Me=Se(z,R),Ee=R.source;n.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+oe);const _e=r.get(Ee);if(Ee.version!==_e.__version||Me===!0){n.activeTexture(s.TEXTURE0+oe);const qe=Nt.getPrimaries(Nt.workingColorSpace),Oe=R.colorSpace===Cr?null:Nt.getPrimaries(R.colorSpace),We=R.colorSpace===Cr||qe===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const pt=R.isCompressedTexture||R.image[0].isCompressedTexture,Ce=R.image[0]&&R.image[0].isDataTexture,Ge=[];for(let he=0;he<6;he++)!pt&&!Ce?Ge[he]=A(R.image[he],!0,a.maxCubemapSize):Ge[he]=Ce?R.image[he].image:R.image[he],Ge[he]=gt(R,Ge[he]);const Y=Ge[0],Re=c.convert(R.format,R.colorSpace),be=c.convert(R.type),ct=D(R.internalFormat,Re,be,R.colorSpace),ut=R.isVideoTexture!==!0,Be=_e.__version===void 0||Me===!0,B=Ee.dataReady;let we=W(R,Y);K(s.TEXTURE_CUBE_MAP,R);let te;if(pt){ut&&Be&&n.texStorage2D(s.TEXTURE_CUBE_MAP,we,ct,Y.width,Y.height);for(let he=0;he<6;he++){te=Ge[he].mipmaps;for(let ke=0;ke<te.length;ke++){const Ne=te[ke];R.format!==yi?Re!==null?ut?B&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Ne.width,Ne.height,Re,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,ct,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Ne.width,Ne.height,Re,be,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,ct,Ne.width,Ne.height,0,Re,be,Ne.data)}}}else{if(te=R.mipmaps,ut&&Be){te.length>0&&we++;const he=je(Ge[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,we,ct,he.width,he.height)}for(let he=0;he<6;he++)if(Ce){ut?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ge[he].width,Ge[he].height,Re,be,Ge[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Ge[he].width,Ge[he].height,0,Re,be,Ge[he].data);for(let ke=0;ke<te.length;ke++){const st=te[ke].image[he].image;ut?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,st.width,st.height,Re,be,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,ct,st.width,st.height,0,Re,be,st.data)}}else{ut?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Re,be,Ge[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Re,be,Ge[he]);for(let ke=0;ke<te.length;ke++){const Ne=te[ke];ut?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,Re,be,Ne.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,ct,Re,be,Ne.image[he])}}}S(R)&&g(s.TEXTURE_CUBE_MAP),_e.__version=Ee.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function xe(z,R,oe,Me,Ee,_e){const qe=c.convert(oe.format,oe.colorSpace),Oe=c.convert(oe.type),We=D(oe.internalFormat,qe,Oe,oe.colorSpace),pt=r.get(R),Ce=r.get(oe);if(Ce.__renderTarget=R,!pt.__hasExternalTextures){const Ge=Math.max(1,R.width>>_e),Y=Math.max(1,R.height>>_e);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?n.texImage3D(Ee,_e,We,Ge,Y,R.depth,0,qe,Oe,null):n.texImage2D(Ee,_e,We,Ge,Y,0,qe,Oe,null)}n.bindFramebuffer(s.FRAMEBUFFER,z),Xe(R)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,Ee,Ce.__webglTexture,0,Le(R)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,Ee,Ce.__webglTexture,_e),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(z,R,oe){if(s.bindRenderbuffer(s.RENDERBUFFER,z),R.depthBuffer){const Me=R.depthTexture,Ee=Me&&Me.isDepthTexture?Me.type:null,_e=T(R.stencilBuffer,Ee),qe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=Le(R);Xe(R)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Oe,_e,R.width,R.height):oe?s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,_e,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,_e,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,z)}else{const Me=R.textures;for(let Ee=0;Ee<Me.length;Ee++){const _e=Me[Ee],qe=c.convert(_e.format,_e.colorSpace),Oe=c.convert(_e.type),We=D(_e.internalFormat,qe,Oe,_e.colorSpace),pt=Le(R);oe&&Xe(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,We,R.width,R.height):Xe(R)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,We,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,We,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=r.get(R.depthTexture);Me.__renderTarget=R,(!Me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Z(R.depthTexture,0);const Ee=Me.__webglTexture,_e=Le(R);if(R.depthTexture.format===qs)Xe(R)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(R.depthTexture.format===no)Xe(R)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ue(z){const R=r.get(z),oe=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){const Me=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Me){const Ee=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Me.removeEventListener("dispose",Ee)};Me.addEventListener("dispose",Ee),R.__depthDisposeCallback=Ee}R.__boundDepthTexture=Me}if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");ye(R.__webglFramebuffer,z)}else if(oe){R.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(n.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[Me]),R.__webglDepthbuffer[Me]===void 0)R.__webglDepthbuffer[Me]=s.createRenderbuffer(),ue(R.__webglDepthbuffer[Me],z,!1);else{const Ee=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,_e)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),ue(R.__webglDepthbuffer,z,!1);else{const Me=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Ee)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function De(z,R,oe){const Me=r.get(z);R!==void 0&&xe(Me.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),oe!==void 0&&Ue(z)}function et(z){const R=z.texture,oe=r.get(z),Me=r.get(R);z.addEventListener("dispose",U);const Ee=z.textures,_e=z.isWebGLCubeRenderTarget===!0,qe=Ee.length>1;if(qe||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=R.version,d.memory.textures++),_e){oe.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(R.mipmaps&&R.mipmaps.length>0){oe.__webglFramebuffer[Oe]=[];for(let We=0;We<R.mipmaps.length;We++)oe.__webglFramebuffer[Oe][We]=s.createFramebuffer()}else oe.__webglFramebuffer[Oe]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Oe=0;Oe<R.mipmaps.length;Oe++)oe.__webglFramebuffer[Oe]=s.createFramebuffer()}else oe.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Oe=0,We=Ee.length;Oe<We;Oe++){const pt=r.get(Ee[Oe]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),d.memory.textures++)}if(z.samples>0&&Xe(z)===!1){oe.__webglMultisampledFramebuffer=s.createFramebuffer(),oe.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Ee.length;Oe++){const We=Ee[Oe];oe.__webglColorRenderbuffer[Oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,oe.__webglColorRenderbuffer[Oe]);const pt=c.convert(We.format,We.colorSpace),Ce=c.convert(We.type),Ge=D(We.internalFormat,pt,Ce,We.colorSpace,z.isXRRenderTarget===!0),Y=Le(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,Ge,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(oe.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(oe.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){n.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),K(s.TEXTURE_CUBE_MAP,R);for(let Oe=0;Oe<6;Oe++)if(R.mipmaps&&R.mipmaps.length>0)for(let We=0;We<R.mipmaps.length;We++)xe(oe.__webglFramebuffer[Oe][We],z,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,We);else xe(oe.__webglFramebuffer[Oe],z,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);S(R)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Oe=0,We=Ee.length;Oe<We;Oe++){const pt=Ee[Oe],Ce=r.get(pt);n.bindTexture(s.TEXTURE_2D,Ce.__webglTexture),K(s.TEXTURE_2D,pt),xe(oe.__webglFramebuffer,z,pt,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,0),S(pt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Oe=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Oe=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Oe,Me.__webglTexture),K(Oe,R),R.mipmaps&&R.mipmaps.length>0)for(let We=0;We<R.mipmaps.length;We++)xe(oe.__webglFramebuffer[We],z,R,s.COLOR_ATTACHMENT0,Oe,We);else xe(oe.__webglFramebuffer,z,R,s.COLOR_ATTACHMENT0,Oe,0);S(R)&&g(Oe),n.unbindTexture()}z.depthBuffer&&Ue(z)}function rt(z){const R=z.textures;for(let oe=0,Me=R.length;oe<Me;oe++){const Ee=R[oe];if(S(Ee)){const _e=I(z),qe=r.get(Ee).__webglTexture;n.bindTexture(_e,qe),g(_e),n.unbindTexture()}}}const Ke=[],j=[];function ve(z){if(z.samples>0){if(Xe(z)===!1){const R=z.textures,oe=z.width,Me=z.height;let Ee=s.COLOR_BUFFER_BIT;const _e=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(z),Oe=R.length>1;if(Oe)for(let We=0;We<R.length;We++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let We=0;We<R.length;We++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const pt=r.get(R[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,oe,Me,0,0,oe,Me,Ee,s.NEAREST),p===!0&&(Ke.length=0,j.length=0,Ke.push(s.COLOR_ATTACHMENT0+We),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ke.push(_e),j.push(_e),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Oe)for(let We=0;We<R.length;We++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const pt=r.get(R[We]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,pt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const R=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function Le(z){return Math.min(a.maxSamples,z.samples)}function Xe(z){const R=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Fe(z){const R=d.render.frame;y.get(z)!==R&&(y.set(z,R),z.update())}function gt(z,R){const oe=z.colorSpace,Me=z.format,Ee=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||oe!==io&&oe!==Cr&&(Nt.getTransfer(oe)===Ut?(Me!==yi||Ee!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),R}function je(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(v.width=z.naturalWidth||z.width,v.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(v.width=z.displayWidth,v.height=z.displayHeight):(v.width=z.width,v.height=z.height),v}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=re,this.setTexture3D=me,this.setTextureCube=F,this.rebindTextures=De,this.setupRenderTarget=et,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Xe}function jM(s,e){function n(r,a=Cr){let c;const d=Nt.getTransfer(a);if(r===Ji)return s.UNSIGNED_BYTE;if(r===lf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===cf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fg)return s.BYTE;if(r===hg)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===af)return s.INT;if(r===os)return s.UNSIGNED_INT;if(r===qi)return s.FLOAT;if(r===Qo)return s.HALF_FLOAT;if(r===mg)return s.ALPHA;if(r===gg)return s.RGB;if(r===yi)return s.RGBA;if(r===xg)return s.LUMINANCE;if(r===vg)return s.LUMINANCE_ALPHA;if(r===qs)return s.DEPTH_COMPONENT;if(r===no)return s.DEPTH_STENCIL;if(r===yg)return s.RED;if(r===uf)return s.RED_INTEGER;if(r===_g)return s.RG;if(r===df)return s.RG_INTEGER;if(r===ff)return s.RGBA_INTEGER;if(r===zl||r===Fl||r===Ol||r===Bl)if(d===Ut)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===zl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===zl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wd||r===Td||r===Cd||r===Ad)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Td)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd||r===Pd||r===Ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Rd||r===Pd)return d===Ut?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ld)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Id||r===Dd||r===Nd||r===Ud||r===kd||r===zd||r===Fd||r===Od||r===Bd||r===jd||r===Hd||r===Vd||r===Wd||r===Gd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Id)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ud)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jl||r===Xd||r===$d)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===jl)return d===Ut?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sg||r===Yd||r===qd||r===Kd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===jl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===to?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const HM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`;class WM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Vn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Lr({vertexShader:HM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mt(new rs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GM extends so{constructor(e,n){super();const r=this;let a=null,c=1,d=null,h="local-floor",p=1,v=null,y=null,_=null,x=null,M=null,b=null;const A=new WM,S=n.getContextAttributes();let g=null,I=null;const D=[],T=[],W=new At;let O=null;const U=new Kn;U.viewport=new kt;const N=new Kn;N.viewport=new kt;const P=[U,N],C=new hy;let V=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=D[$];return le===void 0&&(le=new td,D[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=D[$];return le===void 0&&(le=new td,D[$]=le),le.getGripSpace()},this.getHand=function($){let le=D[$];return le===void 0&&(le=new td,D[$]=le),le.getHandSpace()};function J($){const le=T.indexOf($.inputSource);if(le===-1)return;const xe=D[le];xe!==void 0&&(xe.update($.inputSource,$.frame,v||d),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",Z);for(let $=0;$<D.length;$++){const le=T[$];le!==null&&(T[$]=null,D[$].disconnect(le))}V=null,G=null,A.reset(),e.setRenderTarget(g),M=null,x=null,_=null,a=null,I=null,Se.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||d},this.setReferenceSpace=function($){v=$},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",X),a.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ue=null,ye=null;S.depth&&(ye=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=S.stencil?no:qs,ue=S.stencil?to:os);const Ue={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:c};_=new XRWebGLBinding(a,n),x=_.createProjectionLayer(Ue),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new as(x.textureWidth,x.textureHeight,{format:yi,type:Ji,depthTexture:new zg(x.textureWidth,x.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,xe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new as(M.framebufferWidth,M.framebufferHeight,{format:yi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}I.isXRRenderTarget=!0,this.setFoveation(p),v=null,d=await a.requestReferenceSpace(h),Se.setContext(a),Se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Z($){for(let le=0;le<$.removed.length;le++){const xe=$.removed[le],ue=T.indexOf(xe);ue>=0&&(T[ue]=null,D[ue].disconnect(xe))}for(let le=0;le<$.added.length;le++){const xe=$.added[le];let ue=T.indexOf(xe);if(ue===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=T.length){T.push(xe),ue=Ue;break}else if(T[Ue]===null){T[Ue]=xe,ue=Ue;break}if(ue===-1)break}const ye=D[ue];ye&&ye.connect(xe)}}const re=new ie,me=new ie;function F($,le,xe){re.setFromMatrixPosition(le.matrixWorld),me.setFromMatrixPosition(xe.matrixWorld);const ue=re.distanceTo(me),ye=le.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,De=ye[14]/(ye[10]-1),et=ye[14]/(ye[10]+1),rt=(ye[9]+1)/ye[5],Ke=(ye[9]-1)/ye[5],j=(ye[8]-1)/ye[0],ve=(Ue[8]+1)/Ue[0],Le=De*j,Xe=De*ve,Fe=ue/(-j+ve),gt=Fe*-j;if(le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(gt),$.translateZ(Fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ye[10]===-1)$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const je=De+Fe,z=et+Fe,R=Le-gt,oe=Xe+(ue-gt),Me=rt*et/z*je,Ee=Ke*et/z*je;$.projectionMatrix.makePerspective(R,oe,Me,Ee,je,z),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function de($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let le=$.near,xe=$.far;A.texture!==null&&(A.depthNear>0&&(le=A.depthNear),A.depthFar>0&&(xe=A.depthFar)),C.near=N.near=U.near=le,C.far=N.far=U.far=xe,(V!==C.near||G!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,G=C.far),U.layers.mask=$.layers.mask|2,N.layers.mask=$.layers.mask|4,C.layers.mask=U.layers.mask|N.layers.mask;const ue=$.parent,ye=C.cameras;de(C,ue);for(let Ue=0;Ue<ye.length;Ue++)de(ye[Ue],ue);ye.length===2?F(C,U,N):C.projectionMatrix.copy(U.projectionMatrix),k($,C,ue)};function k($,le,xe){xe===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function($){p=$,x!==null&&(x.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let E=null;function K($,le){if(y=le.getViewerPose(v||d),b=le,y!==null){const xe=y.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let ue=!1;xe.length!==C.cameras.length&&(C.cameras.length=0,ue=!0);for(let De=0;De<xe.length;De++){const et=xe[De];let rt=null;if(M!==null)rt=M.getViewport(et);else{const j=_.getViewSubImage(x,et);rt=j.viewport,De===0&&(e.setRenderTargetTextures(I,j.colorTexture,x.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(I))}let Ke=P[De];Ke===void 0&&(Ke=new Kn,Ke.layers.enable(De),Ke.viewport=new kt,P[De]=Ke),Ke.matrix.fromArray(et.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(et.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(rt.x,rt.y,rt.width,rt.height),De===0&&(C.matrix.copy(Ke.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ue===!0&&C.cameras.push(Ke)}const ye=a.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const De=_.getDepthInformation(xe[0]);De&&De.isValid&&De.texture&&A.init(e,De,a.renderState)}}for(let xe=0;xe<D.length;xe++){const ue=T[xe],ye=D[xe];ue!==null&&ye!==void 0&&ye.update(ue,le,v||d)}E&&E($,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),b=null}const Se=new Bg;Se.setAnimationLoop(K),this.setAnimationLoop=function($){E=$},this.dispose=function(){}}}const Zr=new Pi,XM=new $t;function $M(s,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Dg(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,I,D,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),y(S,g)):g.isMeshStandardMaterial?(c(S,g),x(S,g),g.isMeshPhysicalMaterial&&M(S,g,T)):g.isMeshMatcapMaterial?(c(S,g),b(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),A(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(d(S,g),g.isLineDashedMaterial&&h(S,g)):g.isPointsMaterial?p(S,g,I,D):g.isSpriteMaterial?v(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Hn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Hn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,T=I.envMapRotation;D&&(S.envMap.value=D,Zr.copy(T),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),S.envMapRotation.value.setFromMatrix4(XM.makeRotationFromEuler(Zr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function d(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function h(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,I,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*I,S.scale.value=D*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function y(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,I){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const I=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function YM(s,e,n,r){let a={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,D){const T=D.program;r.uniformBlockBinding(I,T)}function v(I,D){let T=a[I.id];T===void 0&&(b(I),T=y(I),a[I.id]=T,I.addEventListener("dispose",S));const W=D.program;r.updateUBOMapping(I,W);const O=e.render.frame;c[I.id]!==O&&(x(I),c[I.id]=O)}function y(I){const D=_();I.__bindingPointIndex=D;const T=s.createBuffer(),W=I.__size,O=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,W,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,T),T}function _(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const D=a[I.id],T=I.uniforms,W=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,U=T.length;O<U;O++){const N=Array.isArray(T[O])?T[O]:[T[O]];for(let P=0,C=N.length;P<C;P++){const V=N[P];if(M(V,O,P,W)===!0){const G=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let X=0;for(let Z=0;Z<J.length;Z++){const re=J[Z],me=A(re);typeof re=="number"||typeof re=="boolean"?(V.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,G+X,V.__data)):re.isMatrix3?(V.__data[0]=re.elements[0],V.__data[1]=re.elements[1],V.__data[2]=re.elements[2],V.__data[3]=0,V.__data[4]=re.elements[3],V.__data[5]=re.elements[4],V.__data[6]=re.elements[5],V.__data[7]=0,V.__data[8]=re.elements[6],V.__data[9]=re.elements[7],V.__data[10]=re.elements[8],V.__data[11]=0):(re.toArray(V.__data,X),X+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(I,D,T,W){const O=I.value,U=D+"_"+T;if(W[U]===void 0)return typeof O=="number"||typeof O=="boolean"?W[U]=O:W[U]=O.clone(),!0;{const N=W[U];if(typeof O=="number"||typeof O=="boolean"){if(N!==O)return W[U]=O,!0}else if(N.equals(O)===!1)return N.copy(O),!0}return!1}function b(I){const D=I.uniforms;let T=0;const W=16;for(let U=0,N=D.length;U<N;U++){const P=Array.isArray(D[U])?D[U]:[D[U]];for(let C=0,V=P.length;C<V;C++){const G=P[C],J=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Z=J.length;X<Z;X++){const re=J[X],me=A(re),F=T%W,de=F%me.boundary,k=F+de;T+=de,k!==0&&W-k<me.storage&&(T+=W-k),G.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=me.storage}}}const O=T%W;return O>0&&(T+=W-O),I.__size=T,I.__cache={},this}function A(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function S(I){const D=I.target;D.removeEventListener("dispose",S);const T=d.indexOf(D.__bindingPointIndex);d.splice(T,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete c[D.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);d=[],a={},c={}}return{bind:p,update:v,dispose:g}}class qM{constructor(e={}){const{canvas:n=Rv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:v=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const b=new Uint32Array(4),A=new Int32Array(4);let S=null,g=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Rr,this.toneMappingExposure=1;const T=this;let W=!1,O=0,U=0,N=null,P=-1,C=null;const V=new kt,G=new kt;let J=null;const X=new Et(0);let Z=0,re=n.width,me=n.height,F=1,de=null,k=null;const E=new kt(0,0,re,me),K=new kt(0,0,re,me);let Se=!1;const $=new pf;let le=!1,xe=!1;this.transmissionResolutionScale=1;const ue=new $t,ye=new $t,Ue=new ie,De=new kt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Ke(){return N===null?F:1}let j=r;function ve(L,ee){return n.getContext(L,ee)}try{const L={alpha:!0,depth:a,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:v,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${of}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),j===null){const ee="webgl2";if(j=ve(ee,L),j===null)throw ve(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Le,Xe,Fe,gt,je,z,R,oe,Me,Ee,_e,qe,Oe,We,pt,Ce,Ge,Y,Re,be,ct,ut,Be,B;function we(){Le=new sS(j),Le.init(),ut=new jM(j,Le),Xe=new Q1(j,Le,e,ut),Fe=new OM(j,Le),Xe.reverseDepthBuffer&&x&&Fe.buffers.depth.setReversed(!0),gt=new lS(j),je=new TM,z=new BM(j,Le,Fe,je,Xe,ut,gt),R=new tS(T),oe=new rS(T),Me=new my(j),Be=new Z1(j,Me),Ee=new oS(j,Me,gt,Be),_e=new uS(j,Ee,Me,gt),Re=new cS(j,Xe,z),Ce=new eS(je),qe=new wM(T,R,oe,Le,Xe,Be,Ce),Oe=new $M(T,je),We=new AM,pt=new NM(Le),Y=new K1(T,R,oe,Fe,_e,M,p),Ge=new zM(T,_e,Xe),B=new YM(j,gt,Xe,Fe),be=new J1(j,Le,gt),ct=new aS(j,Le,gt),gt.programs=qe.programs,T.capabilities=Xe,T.extensions=Le,T.properties=je,T.renderLists=We,T.shadowMap=Ge,T.state=Fe,T.info=gt}we();const te=new GM(T,j);this.xr=te,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=Le.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Le.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(L){L!==void 0&&(F=L,this.setSize(re,me,!1))},this.getSize=function(L){return L.set(re,me)},this.setSize=function(L,ee,fe=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=L,me=ee,n.width=Math.floor(L*F),n.height=Math.floor(ee*F),fe===!0&&(n.style.width=L+"px",n.style.height=ee+"px"),this.setViewport(0,0,L,ee)},this.getDrawingBufferSize=function(L){return L.set(re*F,me*F).floor()},this.setDrawingBufferSize=function(L,ee,fe){re=L,me=ee,F=fe,n.width=Math.floor(L*fe),n.height=Math.floor(ee*fe),this.setViewport(0,0,L,ee)},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(E)},this.setViewport=function(L,ee,fe,ae){L.isVector4?E.set(L.x,L.y,L.z,L.w):E.set(L,ee,fe,ae),Fe.viewport(V.copy(E).multiplyScalar(F).round())},this.getScissor=function(L){return L.copy(K)},this.setScissor=function(L,ee,fe,ae){L.isVector4?K.set(L.x,L.y,L.z,L.w):K.set(L,ee,fe,ae),Fe.scissor(G.copy(K).multiplyScalar(F).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(L){Fe.setScissorTest(Se=L)},this.setOpaqueSort=function(L){de=L},this.setTransparentSort=function(L){k=L},this.getClearColor=function(L){return L.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(L=!0,ee=!0,fe=!0){let ae=0;if(L){let ne=!1;if(N!==null){const Ie=N.texture.format;ne=Ie===ff||Ie===df||Ie===uf}if(ne){const Ie=N.texture.type,He=Ie===Ji||Ie===os||Ie===qo||Ie===to||Ie===lf||Ie===cf,$e=Y.getClearColor(),Je=Y.getClearAlpha(),ft=$e.r,dt=$e.g,tt=$e.b;He?(b[0]=ft,b[1]=dt,b[2]=tt,b[3]=Je,j.clearBufferuiv(j.COLOR,0,b)):(A[0]=ft,A[1]=dt,A[2]=tt,A[3]=Je,j.clearBufferiv(j.COLOR,0,A))}else ae|=j.COLOR_BUFFER_BIT}ee&&(ae|=j.DEPTH_BUFFER_BIT),fe&&(ae|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Y.dispose(),We.dispose(),pt.dispose(),je.dispose(),R.dispose(),oe.dispose(),_e.dispose(),Be.dispose(),B.dispose(),qe.dispose(),te.dispose(),te.removeEventListener("sessionstart",Qi),te.removeEventListener("sessionend",Jn),Li.stop()};function he(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const L=gt.autoReset,ee=Ge.enabled,fe=Ge.autoUpdate,ae=Ge.needsUpdate,ne=Ge.type;we(),gt.autoReset=L,Ge.enabled=ee,Ge.autoUpdate=fe,Ge.needsUpdate=ae,Ge.type=ne}function Ne(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function st(L){const ee=L.target;ee.removeEventListener("dispose",st),It(ee)}function It(L){zt(L),je.remove(L)}function zt(L){const ee=je.get(L).programs;ee!==void 0&&(ee.forEach(function(fe){qe.releaseProgram(fe)}),L.isShaderMaterial&&qe.releaseShaderCache(L))}this.renderBufferDirect=function(L,ee,fe,ae,ne,Ie){ee===null&&(ee=et);const He=ne.isMesh&&ne.matrixWorld.determinant()<0,$e=aa(L,ee,fe,ae,ne);Fe.setMaterial(ae,He);let Je=fe.index,ft=1;if(ae.wireframe===!0){if(Je=Ee.getWireframeAttribute(fe),Je===void 0)return;ft=2}const dt=fe.drawRange,tt=fe.attributes.position;let Tt=dt.start*ft,vt=(dt.start+dt.count)*ft;Ie!==null&&(Tt=Math.max(Tt,Ie.start*ft),vt=Math.min(vt,(Ie.start+Ie.count)*ft)),Je!==null?(Tt=Math.max(Tt,0),vt=Math.min(vt,Je.count)):tt!=null&&(Tt=Math.max(Tt,0),vt=Math.min(vt,tt.count));const Kt=vt-Tt;if(Kt<0||Kt===1/0)return;Be.setup(ne,ae,$e,fe,Je);let Gt,Rt=be;if(Je!==null&&(Gt=Me.get(Je),Rt=ct,Rt.setIndex(Gt)),ne.isMesh)ae.wireframe===!0?(Fe.setLineWidth(ae.wireframeLinewidth*Ke()),Rt.setMode(j.LINES)):Rt.setMode(j.TRIANGLES);else if(ne.isLine){let ot=ae.linewidth;ot===void 0&&(ot=1),Fe.setLineWidth(ot*Ke()),ne.isLineSegments?Rt.setMode(j.LINES):ne.isLineLoop?Rt.setMode(j.LINE_LOOP):Rt.setMode(j.LINE_STRIP)}else ne.isPoints?Rt.setMode(j.POINTS):ne.isSprite&&Rt.setMode(j.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)Rt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const ot=ne._multiDrawStarts,Zt=ne._multiDrawCounts,bt=ne._multiDrawCount,Mn=Je?Me.get(Je).bytesPerElement:1,tr=je.get(ae).currentProgram.getUniforms();for(let Pn=0;Pn<bt;Pn++)tr.setValue(j,"_gl_DrawID",Pn),Rt.render(ot[Pn]/Mn,Zt[Pn])}else if(ne.isInstancedMesh)Rt.renderInstances(Tt,Kt,ne.count);else if(fe.isInstancedBufferGeometry){const ot=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Zt=Math.min(fe.instanceCount,ot);Rt.renderInstances(Tt,Kt,Zt)}else Rt.render(Tt,Kt)};function xt(L,ee,fe){L.transparent===!0&&L.side===Yi&&L.forceSinglePass===!1?(L.side=Hn,L.needsUpdate=!0,cs(L,ee,fe),L.side=Pr,L.needsUpdate=!0,cs(L,ee,fe),L.side=Yi):cs(L,ee,fe)}this.compile=function(L,ee,fe=null){fe===null&&(fe=L),g=pt.get(fe),g.init(ee),D.push(g),fe.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),L!==fe&&L.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),g.setupLights();const ae=new Set;return L.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){const $e=Ie[He];xt($e,fe,ne),ae.add($e)}else xt(Ie,fe,ne),ae.add(Ie)}),D.pop(),g=null,ae},this.compileAsync=function(L,ee,fe=null){const ae=this.compile(L,ee,fe);return new Promise(ne=>{function Ie(){if(ae.forEach(function(He){je.get(He).currentProgram.isReady()&&ae.delete(He)}),ae.size===0){ne(L);return}setTimeout(Ie,10)}Le.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let en=null;function dn(L){en&&en(L)}function Qi(){Li.stop()}function Jn(){Li.start()}const Li=new Bg;Li.setAnimationLoop(dn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(L){en=L,te.setAnimationLoop(L),L===null?Li.stop():Li.start()},te.addEventListener("sessionstart",Qi),te.addEventListener("sessionend",Jn),this.render=function(L,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(ee),ee=te.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,ee,N),g=pt.get(L,D.length),g.init(ee),D.push(g),ye.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),$.setFromProjectionMatrix(ye),xe=this.localClippingEnabled,le=Ce.init(this.clippingPlanes,xe),S=We.get(L,I.length),S.init(),I.push(S),te.enabled===!0&&te.isPresenting===!0){const Ie=T.xr.getDepthSensingMesh();Ie!==null&&Ii(Ie,ee,-1/0,T.sortObjects)}Ii(L,ee,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(de,k),rt=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,rt&&Y.addToRenderList(S,L),this.info.render.frame++,le===!0&&Ce.beginShadows();const fe=g.state.shadowsArray;Ge.render(fe,L,ee),le===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,ne=S.transmissive;if(g.setupLights(),ee.isArrayCamera){const Ie=ee.cameras;if(ne.length>0)for(let He=0,$e=Ie.length;He<$e;He++){const Je=Ie[He];Dr(ae,ne,L,Je)}rt&&Y.render(L);for(let He=0,$e=Ie.length;He<$e;He++){const Je=Ie[He];Ir(S,L,Je,Je.viewport)}}else ne.length>0&&Dr(ae,ne,L,ee),rt&&Y.render(L),Ir(S,L,ee);N!==null&&U===0&&(z.updateMultisampleRenderTarget(N),z.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(T,L,ee),Be.resetDefaultState(),P=-1,C=null,D.pop(),D.length>0?(g=D[D.length-1],le===!0&&Ce.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Ii(L,ee,fe,ae){if(L.visible===!1)return;if(L.layers.test(ee.layers)){if(L.isGroup)fe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ee);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||$.intersectsSprite(L)){ae&&De.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ye);const He=_e.update(L),$e=L.material;$e.visible&&S.push(L,He,$e,fe,De.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||$.intersectsObject(L))){const He=_e.update(L),$e=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),De.copy(L.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),De.copy(He.boundingSphere.center)),De.applyMatrix4(L.matrixWorld).applyMatrix4(ye)),Array.isArray($e)){const Je=He.groups;for(let ft=0,dt=Je.length;ft<dt;ft++){const tt=Je[ft],Tt=$e[tt.materialIndex];Tt&&Tt.visible&&S.push(L,He,Tt,fe,De.z,tt)}}else $e.visible&&S.push(L,He,$e,fe,De.z,null)}}const Ie=L.children;for(let He=0,$e=Ie.length;He<$e;He++)Ii(Ie[He],ee,fe,ae)}function Ir(L,ee,fe,ae){const ne=L.opaque,Ie=L.transmissive,He=L.transparent;g.setupLightsView(fe),le===!0&&Ce.setGlobalState(T.clippingPlanes,fe),ae&&Fe.viewport(V.copy(ae)),ne.length>0&&er(ne,ee,fe),Ie.length>0&&er(Ie,ee,fe),He.length>0&&er(He,ee,fe),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Dr(L,ee,fe,ae){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new as(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Qo:Ji,minFilter:is,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Ie=g.state.transmissionRenderTarget[ae.id],He=ae.viewport||V;Ie.setSize(He.z*T.transmissionResolutionScale,He.w*T.transmissionResolutionScale);const $e=T.getRenderTarget();T.setRenderTarget(Ie),T.getClearColor(X),Z=T.getClearAlpha(),Z<1&&T.setClearColor(16777215,.5),T.clear(),rt&&Y.render(fe);const Je=T.toneMapping;T.toneMapping=Rr;const ft=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),le===!0&&Ce.setGlobalState(T.clippingPlanes,ae),er(L,fe,ae),z.updateMultisampleRenderTarget(Ie),z.updateRenderTargetMipmap(Ie),Le.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let tt=0,Tt=ee.length;tt<Tt;tt++){const vt=ee[tt],Kt=vt.object,Gt=vt.geometry,Rt=vt.material,ot=vt.group;if(Rt.side===Yi&&Kt.layers.test(ae.layers)){const Zt=Rt.side;Rt.side=Hn,Rt.needsUpdate=!0,sa(Kt,fe,ae,Gt,Rt,ot),Rt.side=Zt,Rt.needsUpdate=!0,dt=!0}}dt===!0&&(z.updateMultisampleRenderTarget(Ie),z.updateRenderTargetMipmap(Ie))}T.setRenderTarget($e),T.setClearColor(X,Z),ft!==void 0&&(ae.viewport=ft),T.toneMapping=Je}function er(L,ee,fe){const ae=ee.isScene===!0?ee.overrideMaterial:null;for(let ne=0,Ie=L.length;ne<Ie;ne++){const He=L[ne],$e=He.object,Je=He.geometry,ft=ae===null?He.material:ae,dt=He.group;$e.layers.test(fe.layers)&&sa($e,ee,fe,Je,ft,dt)}}function sa(L,ee,fe,ae,ne,Ie){L.onBeforeRender(T,ee,fe,ae,ne,Ie),L.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(T,ee,fe,ae,L,Ie),ne.transparent===!0&&ne.side===Yi&&ne.forceSinglePass===!1?(ne.side=Hn,ne.needsUpdate=!0,T.renderBufferDirect(fe,ee,ae,ne,L,Ie),ne.side=Pr,ne.needsUpdate=!0,T.renderBufferDirect(fe,ee,ae,ne,L,Ie),ne.side=Yi):T.renderBufferDirect(fe,ee,ae,ne,L,Ie),L.onAfterRender(T,ee,fe,ae,ne,Ie)}function cs(L,ee,fe){ee.isScene!==!0&&(ee=et);const ae=je.get(L),ne=g.state.lights,Ie=g.state.shadowsArray,He=ne.state.version,$e=qe.getParameters(L,ne.state,Ie,ee,fe),Je=qe.getProgramCacheKey($e);let ft=ae.programs;ae.environment=L.isMeshStandardMaterial?ee.environment:null,ae.fog=ee.fog,ae.envMap=(L.isMeshStandardMaterial?oe:R).get(L.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&L.envMap===null?ee.environmentRotation:L.envMapRotation,ft===void 0&&(L.addEventListener("dispose",st),ft=new Map,ae.programs=ft);let dt=ft.get(Je);if(dt!==void 0){if(ae.currentProgram===dt&&ae.lightsStateVersion===He)return Mi(L,$e),dt}else $e.uniforms=qe.getUniforms(L),L.onBeforeCompile($e,T),dt=qe.acquireProgram($e,Je),ft.set(Je,dt),ae.uniforms=$e.uniforms;const tt=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(tt.clippingPlanes=Ce.uniform),Mi(L,$e),ae.needsLights=Zl(L),ae.lightsStateVersion=He,ae.needsLights&&(tt.ambientLightColor.value=ne.state.ambient,tt.lightProbe.value=ne.state.probe,tt.directionalLights.value=ne.state.directional,tt.directionalLightShadows.value=ne.state.directionalShadow,tt.spotLights.value=ne.state.spot,tt.spotLightShadows.value=ne.state.spotShadow,tt.rectAreaLights.value=ne.state.rectArea,tt.ltc_1.value=ne.state.rectAreaLTC1,tt.ltc_2.value=ne.state.rectAreaLTC2,tt.pointLights.value=ne.state.point,tt.pointLightShadows.value=ne.state.pointShadow,tt.hemisphereLights.value=ne.state.hemi,tt.directionalShadowMap.value=ne.state.directionalShadowMap,tt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,tt.spotShadowMap.value=ne.state.spotShadowMap,tt.spotLightMatrix.value=ne.state.spotLightMatrix,tt.spotLightMap.value=ne.state.spotLightMap,tt.pointShadowMap.value=ne.state.pointShadowMap,tt.pointShadowMatrix.value=ne.state.pointShadowMatrix),ae.currentProgram=dt,ae.uniformsList=null,dt}function oa(L){if(L.uniformsList===null){const ee=L.currentProgram.getUniforms();L.uniformsList=Hl.seqWithValue(ee.seq,L.uniforms)}return L.uniformsList}function Mi(L,ee){const fe=je.get(L);fe.outputColorSpace=ee.outputColorSpace,fe.batching=ee.batching,fe.batchingColor=ee.batchingColor,fe.instancing=ee.instancing,fe.instancingColor=ee.instancingColor,fe.instancingMorph=ee.instancingMorph,fe.skinning=ee.skinning,fe.morphTargets=ee.morphTargets,fe.morphNormals=ee.morphNormals,fe.morphColors=ee.morphColors,fe.morphTargetsCount=ee.morphTargetsCount,fe.numClippingPlanes=ee.numClippingPlanes,fe.numIntersection=ee.numClipIntersection,fe.vertexAlphas=ee.vertexAlphas,fe.vertexTangents=ee.vertexTangents,fe.toneMapping=ee.toneMapping}function aa(L,ee,fe,ae,ne){ee.isScene!==!0&&(ee=et),z.resetTextureUnits();const Ie=ee.fog,He=ae.isMeshStandardMaterial?ee.environment:null,$e=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:io,Je=(ae.isMeshStandardMaterial?oe:R).get(ae.envMap||He),ft=ae.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,dt=!!fe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),tt=!!fe.morphAttributes.position,Tt=!!fe.morphAttributes.normal,vt=!!fe.morphAttributes.color;let Kt=Rr;ae.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Kt=T.toneMapping);const Gt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Rt=Gt!==void 0?Gt.length:0,ot=je.get(ae),Zt=g.state.lights;if(le===!0&&(xe===!0||L!==C)){const vn=L===C&&ae.id===P;Ce.setState(ae,L,vn)}let bt=!1;ae.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Zt.state.version||ot.outputColorSpace!==$e||ne.isBatchedMesh&&ot.batching===!1||!ne.isBatchedMesh&&ot.batching===!0||ne.isBatchedMesh&&ot.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&ot.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&ot.instancing===!1||!ne.isInstancedMesh&&ot.instancing===!0||ne.isSkinnedMesh&&ot.skinning===!1||!ne.isSkinnedMesh&&ot.skinning===!0||ne.isInstancedMesh&&ot.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ot.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ot.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ot.instancingMorph===!1&&ne.morphTexture!==null||ot.envMap!==Je||ae.fog===!0&&ot.fog!==Ie||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Ce.numPlanes||ot.numIntersection!==Ce.numIntersection)||ot.vertexAlphas!==ft||ot.vertexTangents!==dt||ot.morphTargets!==tt||ot.morphNormals!==Tt||ot.morphColors!==vt||ot.toneMapping!==Kt||ot.morphTargetsCount!==Rt)&&(bt=!0):(bt=!0,ot.__version=ae.version);let Mn=ot.currentProgram;bt===!0&&(Mn=cs(ae,ee,ne));let tr=!1,Pn=!1,Di=!1;const Ft=Mn.getUniforms(),En=ot.uniforms;if(Fe.useProgram(Mn.program)&&(tr=!0,Pn=!0,Di=!0),ae.id!==P&&(P=ae.id,Pn=!0),tr||C!==L){Fe.buffers.depth.getReversed()?(ue.copy(L.projectionMatrix),Lv(ue),Iv(ue),Ft.setValue(j,"projectionMatrix",ue)):Ft.setValue(j,"projectionMatrix",L.projectionMatrix),Ft.setValue(j,"viewMatrix",L.matrixWorldInverse);const hn=Ft.map.cameraPosition;hn!==void 0&&hn.setValue(j,Ue.setFromMatrixPosition(L.matrixWorld)),Xe.logarithmicDepthBuffer&&Ft.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,Pn=!0,Di=!0)}if(ne.isSkinnedMesh){Ft.setOptional(j,ne,"bindMatrix"),Ft.setOptional(j,ne,"bindMatrixInverse");const vn=ne.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ft.setValue(j,"boneTexture",vn.boneTexture,z))}ne.isBatchedMesh&&(Ft.setOptional(j,ne,"batchingTexture"),Ft.setValue(j,"batchingTexture",ne._matricesTexture,z),Ft.setOptional(j,ne,"batchingIdTexture"),Ft.setValue(j,"batchingIdTexture",ne._indirectTexture,z),Ft.setOptional(j,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(j,"batchingColorTexture",ne._colorsTexture,z));const fn=fe.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Re.update(ne,fe,Mn),(Pn||ot.receiveShadow!==ne.receiveShadow)&&(ot.receiveShadow=ne.receiveShadow,Ft.setValue(j,"receiveShadow",ne.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(En.envMap.value=Je,En.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&ee.environment!==null&&(En.envMapIntensity.value=ee.environmentIntensity),Pn&&(Ft.setValue(j,"toneMappingExposure",T.toneMappingExposure),ot.needsLights&&la(En,Di),Ie&&ae.fog===!0&&Oe.refreshFogUniforms(En,Ie),Oe.refreshMaterialUniforms(En,ae,F,me,g.state.transmissionRenderTarget[L.id]),Hl.upload(j,oa(ot),En,z)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Hl.upload(j,oa(ot),En,z),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(j,"center",ne.center),Ft.setValue(j,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(j,"normalMatrix",ne.normalMatrix),Ft.setValue(j,"modelMatrix",ne.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const vn=ae.uniformsGroups;for(let hn=0,Pt=vn.length;hn<Pt;hn++){const Ei=vn[hn];B.update(Ei,Mn),B.bind(Ei,Mn)}}return Mn}function la(L,ee){L.ambientLightColor.needsUpdate=ee,L.lightProbe.needsUpdate=ee,L.directionalLights.needsUpdate=ee,L.directionalLightShadows.needsUpdate=ee,L.pointLights.needsUpdate=ee,L.pointLightShadows.needsUpdate=ee,L.spotLights.needsUpdate=ee,L.spotLightShadows.needsUpdate=ee,L.rectAreaLights.needsUpdate=ee,L.hemisphereLights.needsUpdate=ee}function Zl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,ee,fe){je.get(L.texture).__webglTexture=ee,je.get(L.depthTexture).__webglTexture=fe;const ae=je.get(L);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=fe===void 0,ae.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,ee){const fe=je.get(L);fe.__webglFramebuffer=ee,fe.__useDefaultFramebuffer=ee===void 0};const ca=j.createFramebuffer();this.setRenderTarget=function(L,ee=0,fe=0){N=L,O=ee,U=fe;let ae=!0,ne=null,Ie=!1,He=!1;if(L){const Je=je.get(L);if(Je.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(j.FRAMEBUFFER,null),ae=!1;else if(Je.__webglFramebuffer===void 0)z.setupRenderTarget(L);else if(Je.__hasExternalTextures)z.rebindTextures(L,je.get(L.texture).__webglTexture,je.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const tt=L.depthTexture;if(Je.__boundDepthTexture!==tt){if(tt!==null&&je.has(tt)&&(L.width!==tt.image.width||L.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(L)}}const ft=L.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(He=!0);const dt=je.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(dt[ee])?ne=dt[ee][fe]:ne=dt[ee],Ie=!0):L.samples>0&&z.useMultisampledRTT(L)===!1?ne=je.get(L).__webglMultisampledFramebuffer:Array.isArray(dt)?ne=dt[fe]:ne=dt,V.copy(L.viewport),G.copy(L.scissor),J=L.scissorTest}else V.copy(E).multiplyScalar(F).floor(),G.copy(K).multiplyScalar(F).floor(),J=Se;if(fe!==0&&(ne=ca),Fe.bindFramebuffer(j.FRAMEBUFFER,ne)&&ae&&Fe.drawBuffers(L,ne),Fe.viewport(V),Fe.scissor(G),Fe.setScissorTest(J),Ie){const Je=je.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Je.__webglTexture,fe)}else if(He){const Je=je.get(L.texture),ft=ee;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Je.__webglTexture,fe,ft)}else if(L!==null&&fe!==0){const Je=je.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Je.__webglTexture,fe)}P=-1},this.readRenderTargetPixels=function(L,ee,fe,ae,ne,Ie,He){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=je.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){Fe.bindFramebuffer(j.FRAMEBUFFER,$e);try{const Je=L.texture,ft=Je.format,dt=Je.type;if(!Xe.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=L.width-ae&&fe>=0&&fe<=L.height-ne&&j.readPixels(ee,fe,ae,ne,ut.convert(ft),ut.convert(dt),Ie)}finally{const Je=N!==null?je.get(N).__webglFramebuffer:null;Fe.bindFramebuffer(j.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(L,ee,fe,ae,ne,Ie,He){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=je.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){const Je=L.texture,ft=Je.format,dt=Je.type;if(!Xe.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ee>=0&&ee<=L.width-ae&&fe>=0&&fe<=L.height-ne){Fe.bindFramebuffer(j.FRAMEBUFFER,$e);const tt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,tt),j.bufferData(j.PIXEL_PACK_BUFFER,Ie.byteLength,j.STREAM_READ),j.readPixels(ee,fe,ae,ne,ut.convert(ft),ut.convert(dt),0);const Tt=N!==null?je.get(N).__webglFramebuffer:null;Fe.bindFramebuffer(j.FRAMEBUFFER,Tt);const vt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Pv(j,vt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,tt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ie),j.deleteBuffer(tt),j.deleteSync(vt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,ee=null,fe=0){L.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ee=arguments[0]||null,L=arguments[1]);const ae=Math.pow(2,-fe),ne=Math.floor(L.image.width*ae),Ie=Math.floor(L.image.height*ae),He=ee!==null?ee.x:0,$e=ee!==null?ee.y:0;z.setTexture2D(L,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,He,$e,ne,Ie),Fe.unbindTexture()};const ua=j.createFramebuffer(),da=j.createFramebuffer();this.copyTextureToTexture=function(L,ee,fe=null,ae=null,ne=0,Ie=null){L.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,L=arguments[1],ee=arguments[2],Ie=arguments[3]||0,fe=null),Ie===null&&(ne!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=ne,ne=0):Ie=0);let He,$e,Je,ft,dt,tt,Tt,vt,Kt;const Gt=L.isCompressedTexture?L.mipmaps[Ie]:L.image;if(fe!==null)He=fe.max.x-fe.min.x,$e=fe.max.y-fe.min.y,Je=fe.isBox3?fe.max.z-fe.min.z:1,ft=fe.min.x,dt=fe.min.y,tt=fe.isBox3?fe.min.z:0;else{const fn=Math.pow(2,-ne);He=Math.floor(Gt.width*fn),$e=Math.floor(Gt.height*fn),L.isDataArrayTexture?Je=Gt.depth:L.isData3DTexture?Je=Math.floor(Gt.depth*fn):Je=1,ft=0,dt=0,tt=0}ae!==null?(Tt=ae.x,vt=ae.y,Kt=ae.z):(Tt=0,vt=0,Kt=0);const Rt=ut.convert(ee.format),ot=ut.convert(ee.type);let Zt;ee.isData3DTexture?(z.setTexture3D(ee,0),Zt=j.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(z.setTexture2DArray(ee,0),Zt=j.TEXTURE_2D_ARRAY):(z.setTexture2D(ee,0),Zt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ee.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ee.unpackAlignment);const bt=j.getParameter(j.UNPACK_ROW_LENGTH),Mn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),tr=j.getParameter(j.UNPACK_SKIP_PIXELS),Pn=j.getParameter(j.UNPACK_SKIP_ROWS),Di=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Gt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Gt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ft),j.pixelStorei(j.UNPACK_SKIP_ROWS,dt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,tt);const Ft=L.isDataArrayTexture||L.isData3DTexture,En=ee.isDataArrayTexture||ee.isData3DTexture;if(L.isDepthTexture){const fn=je.get(L),vn=je.get(ee),hn=je.get(fn.__renderTarget),Pt=je.get(vn.__renderTarget);Fe.bindFramebuffer(j.READ_FRAMEBUFFER,hn.__webglFramebuffer),Fe.bindFramebuffer(j.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ei=0;Ei<Je;Ei++)Ft&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,je.get(L).__webglTexture,ne,tt+Ei),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,je.get(ee).__webglTexture,Ie,Kt+Ei)),j.blitFramebuffer(ft,dt,He,$e,Tt,vt,He,$e,j.DEPTH_BUFFER_BIT,j.NEAREST);Fe.bindFramebuffer(j.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ne!==0||L.isRenderTargetTexture||je.has(L)){const fn=je.get(L),vn=je.get(ee);Fe.bindFramebuffer(j.READ_FRAMEBUFFER,ua),Fe.bindFramebuffer(j.DRAW_FRAMEBUFFER,da);for(let hn=0;hn<Je;hn++)Ft?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,fn.__webglTexture,ne,tt+hn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,fn.__webglTexture,ne),En?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,vn.__webglTexture,Ie,Kt+hn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,vn.__webglTexture,Ie),ne!==0?j.blitFramebuffer(ft,dt,He,$e,Tt,vt,He,$e,j.COLOR_BUFFER_BIT,j.NEAREST):En?j.copyTexSubImage3D(Zt,Ie,Tt,vt,Kt+hn,ft,dt,He,$e):j.copyTexSubImage2D(Zt,Ie,Tt,vt,ft,dt,He,$e);Fe.bindFramebuffer(j.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else En?L.isDataTexture||L.isData3DTexture?j.texSubImage3D(Zt,Ie,Tt,vt,Kt,He,$e,Je,Rt,ot,Gt.data):ee.isCompressedArrayTexture?j.compressedTexSubImage3D(Zt,Ie,Tt,vt,Kt,He,$e,Je,Rt,Gt.data):j.texSubImage3D(Zt,Ie,Tt,vt,Kt,He,$e,Je,Rt,ot,Gt):L.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ie,Tt,vt,He,$e,Rt,ot,Gt.data):L.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ie,Tt,vt,Gt.width,Gt.height,Rt,Gt.data):j.texSubImage2D(j.TEXTURE_2D,Ie,Tt,vt,He,$e,Rt,ot,Gt);j.pixelStorei(j.UNPACK_ROW_LENGTH,bt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Mn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,tr),j.pixelStorei(j.UNPACK_SKIP_ROWS,Pn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Di),Ie===0&&ee.generateMipmaps&&j.generateMipmap(Zt),Fe.unbindTexture()},this.copyTextureToTexture3D=function(L,ee,fe=null,ae=null,ne=0){return L.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),fe=arguments[0]||null,ae=arguments[1]||null,L=arguments[2],ee=arguments[3],ne=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,ee,fe,ae,ne)},this.initRenderTarget=function(L){je.get(L).__webglFramebuffer===void 0&&z.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?z.setTextureCube(L,0):L.isData3DTexture?z.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?z.setTexture2DArray(L,0):z.setTexture2D(L,0),Fe.unbindTexture()},this.resetState=function(){O=0,U=0,N=null,Fe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Nt._getUnpackColorSpace()}}const KM=()=>{const s=ge.useRef(null);return ge.useEffect(()=>{const e=s.current;if(!e)return;const n=new iy;n.background=new Et("#f0f5ff"),n.fog=new hf("#eff6ff",.018);const r=e.clientWidth||window.innerWidth,a=e.clientHeight||window.innerHeight,c=new Kn(45,r/a,.1,1e3);c.position.set(0,14,28);const d=new qM({antialias:!0,alpha:!0});d.setSize(r,a),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,d.shadowMap.type=cg,e.appendChild(d.domElement);const h=new fy("#e0e7ff",1.2);n.add(h);const p=new dy("#ffffff",1.4);p.position.set(20,35,20),p.castShadow=!0,p.shadow.mapSize.width=1024,p.shadow.mapSize.height=1024,n.add(p);const v=new sd("#9333ea",2.5,45);v.position.set(-12,10,8),n.add(v);const y=new sd("#2563eb",2.8,50);y.position.set(12,12,10),n.add(y);const _=new sd("#06b6d4",1.5,30);_.position.set(0,4,14),n.add(_);const x=new jn;n.add(x);const M=new rs(80,80),b=new Ht({color:"#e2e8f0",roughness:.8}),A=new mt(M,b);A.rotation.x=-Math.PI/2,A.receiveShadow=!0,x.add(A);const S=new xi(8,8.2,.2,32),g=new Ht({color:"#cbd5e1",roughness:.6}),I=new mt(S,g);I.position.y=.1,I.receiveShadow=!0,x.add(I);const D=new xi(3.5,3.5,.3,32),T=new Ht({color:"#60a5fa",roughness:.1,metalness:.6}),W=new mt(D,T);W.position.y=.25,x.add(W);const O=new Ht({color:"#f1f5f9",roughness:.7}),U=new rs(4,40),N=new mt(U,O);N.rotation.x=-Math.PI/2,N.position.y=.05,x.add(N);const P=new rs(40,4),C=new mt(P,O);C.rotation.x=-Math.PI/2,C.position.y=.05,x.add(C);const V=new Ht({color:"#ffffff",roughness:.3}),G=new Ht({color:"#3b82f6",roughness:.2,metalness:.2}),J=new Ht({color:"#7c3aed",roughness:.3}),X=new Ht({color:"#93c5fd",transparent:!0,opacity:.75,roughness:.1});new Ht({color:"#1e293b",roughness:.5});const Z=new jn;Z.position.set(0,0,-12);const re=new mt(new Qt(14,8,8),V);re.position.y=4,re.castShadow=!0,re.receiveShadow=!0,Z.add(re);const me=new mt(new Qt(4,9,4),V);me.position.set(0,12,0),me.castShadow=!0,Z.add(me);const F=new Yo(2.8,4,4),de=new mt(F,J);de.position.set(0,18.5,0),de.rotation.y=Math.PI/4,de.castShadow=!0,Z.add(de);const k=new xi(.9,.9,.2,16),E=new Ht({color:"#fef08a",emissive:"#facc15",emissiveIntensity:.6}),K=new mt(k,E);K.rotation.x=Math.PI/2,K.position.set(0,13.5,2.05),Z.add(K);for(let Be=-4;Be<=4;Be+=2){const B=new xi(.35,.35,6,16),we=new mt(B,V);we.position.set(Be,3,4.8),we.castShadow=!0,Z.add(we)}x.add(Z);const Se=new jn;Se.position.set(-14,0,-2);const $=new mt(new Qt(8,9,14),V);$.position.y=4.5,$.castShadow=!0,Se.add($);const le=new mt(new Qt(8.2,7,6),X);le.position.set(.1,4.5,0),Se.add(le);const xe=new mt(new Qt(8.4,.8,14.4),G);xe.position.set(0,9.3,0),xe.rotation.z=-.06,Se.add(xe),x.add(Se);const ue=new jn;ue.position.set(14,0,-2);const ye=new mt(new Qt(8,7.5,12),V);ye.position.y=3.75,ye.castShadow=!0,ue.add(ye);const Ue=new mt(new Qt(6,3,8),J);Ue.position.set(0,8.5,0),Ue.castShadow=!0,ue.add(Ue),x.add(ue);const De=[],et=(Be,B,we,te=1)=>{const he=new jn,ke=new Qt(1.6*te,.08*te,1.6*te),Ne=new Ht({color:"#1e1b4b",roughness:.4}),st=new mt(ke,Ne);he.add(st);const It=new xi(.5*te,.55*te,.45*te,16),zt=new mt(It,Ne);zt.position.y=-.25*te,he.add(zt);const xt=new xi(.08*te,.08*te,.1*te,8),en=new Ht({color:"#fbbf24",metalness:.8,roughness:.2}),dn=new mt(xt,en);dn.position.y=.08*te,he.add(dn);const Qi=new xi(.03*te,.08*te,.6*te,8),Jn=new mt(Qi,en);Jn.position.set(.6*te,-.2*te,.6*te),Jn.rotation.z=-.3,he.add(Jn),he.position.set(Be,B,we),n.add(he),De.push({mesh:he,baseY:B,speed:1.2+Math.random()*.8,rotSpeed:.01+Math.random()*.015,offset:Math.random()*Math.PI*2})};et(-6,9,6,1.1),et(7,11,4,1),et(-3,14,-2,.9),et(4,13,-4,1.2),et(0,16,2,.85);const rt=[],Ke=(Be,B,we,te)=>{const he=new jn,ke=new Qt(1.4,.25,1.9),Ne=new Ht({color:te,roughness:.4}),st=new mt(ke,Ne);he.add(st);const It=new Qt(1.25,.2,1.75),zt=new Ht({color:"#f8fafc",roughness:.7}),xt=new mt(It,zt);xt.position.set(.06,0,0),he.add(xt),he.position.set(Be,B,we),n.add(he),rt.push({mesh:he,baseY:B,speed:1+Math.random()*.6,rotY:.008+Math.random()*.01,rotZ:.005+Math.random()*.008,offset:Math.random()*Math.PI*2})};Ke(-8,7,8,"#2563eb"),Ke(8,8,9,"#7c3aed"),Ke(-9,12,1,"#059669"),Ke(9,13,0,"#ea580c");const j=[],ve=(Be,B,we)=>{const te=new jn,he=new Ht({color:"#94a3b8",metalness:.5,roughness:.3}),ke=new Ht({color:"#1e293b",emissive:"#3b82f6",emissiveIntensity:.4}),Ne=new mt(new Qt(1.6,.08,1.2),he);te.add(Ne);const st=new mt(new Qt(1.6,1.1,.06),ke);st.position.set(0,.55,-.6),st.rotation.x=-.25,te.add(st),te.position.set(Be,B,we),n.add(te),j.push({mesh:te,baseY:B,speed:.9,rotY:.012,offset:Math.random()*Math.PI*2})};ve(-4,6.5,10),ve(5,7.5,11);const Le=[],Xe=(Be,B,we)=>{const te=new jn,he=new mt(new Qt(1.2,1.4,.08),new Ht({color:"#ffffff",roughness:.5}));te.add(he);const ke=new mt(new Qt(1.2,.35,.1),new Ht({color:"#ef4444"}));ke.position.set(0,.52,.01),te.add(ke);for(let Ne=-.4;Ne<=.4;Ne+=.25){const st=new mt(new yf(.08,.02,8,16),new Ht({color:"#64748b",metalness:.8}));st.position.set(Ne,.72,.04),st.rotation.y=Math.PI/2,te.add(st)}te.position.set(Be,B,we),n.add(te),Le.push({mesh:te,baseY:B,speed:1.1,rotY:.01,offset:Math.random()*Math.PI*2})};Xe(6,10,6),Xe(-7,10.5,4);const Fe=[],gt=[new gf(.7,0),new xf(.65,0),new mf(.65,0)],je=["#38bdf8","#c084fc","#34d399"];for(let Be=0;Be<4;Be++){const B=gt[Be%gt.length],we=new Ht({color:je[Be%je.length],metalness:.3,roughness:.2,wireframe:Be%2===0}),te=new mt(B,we),he=Be/4*Math.PI*2,ke=Math.cos(he)*11,Ne=Math.sin(he)*9+4;te.position.set(ke,11+Math.random()*3,Ne),n.add(te),Fe.push({mesh:te,rotX:.02,rotY:.02,speed:1.5,baseY:te.position.y,offset:Be})}const z=[],R=(Be,B,we,te)=>{const he=new jn,ke=new mt(new vf(.28,16,16),new Ht({color:"#fcd34d",roughness:.8}));ke.position.y=1.7,he.add(ke);const Ne=new mt(new Qt(.55,.75,.35),new Ht({color:we,roughness:.6}));Ne.position.y=1.15,Ne.castShadow=!0,he.add(Ne);const st=new mt(new Qt(.4,.5,.22),new Ht({color:"#1e293b"}));st.position.set(0,1.15,-.24),he.add(st);const It=new Qt(.2,.75,.2),zt=new Ht({color:te}),xt=new mt(It,zt);xt.position.set(-.16,.4,0),he.add(xt);const en=new mt(It,zt);en.position.set(.16,.4,0),he.add(en),he.position.set(Be,.1,B),x.add(he),z.push({group:he,legL:xt,legR:en,initialX:Be,initialZ:B,walkOffset:Math.random()*10})};R(-2,5,"#2563eb","#1e293b"),R(2.5,4,"#7c3aed","#334155"),R(0,8,"#059669","#1e293b"),R(-4,2,"#ea580c","#475569");const oe=(Be,B)=>{const we=new jn,te=new mt(new xi(.2,.3,1.8,8),new Ht({color:"#78350f",roughness:.9}));te.position.y=.9,te.castShadow=!0,we.add(te);const he=new Ht({color:"#10b981",roughness:.5}),ke=new mt(new Yo(1.3,2,8),he);ke.position.y=2.4,ke.castShadow=!0,we.add(ke);const Ne=new mt(new Yo(1,1.6,8),he);Ne.position.y=3.3,Ne.castShadow=!0,we.add(Ne),we.position.set(Be,0,B),x.add(we)};oe(-6,-2),oe(-8,3),oe(6,-2),oe(8,3),oe(-4,-6),oe(4,-6);const Me=280,Ee=new Zn,_e=new Float32Array(Me*3),qe=new Float32Array(Me*3),Oe=[new Et("#38bdf8"),new Et("#a855f7"),new Et("#facc15"),new Et("#60a5fa")];for(let Be=0;Be<Me;Be++){_e[Be*3]=(Math.random()-.5)*45,_e[Be*3+1]=Math.random()*22,_e[Be*3+2]=(Math.random()-.5)*40;const B=Oe[Be%Oe.length];qe[Be*3]=B.r,qe[Be*3+1]=B.g,qe[Be*3+2]=B.b}Ee.setAttribute("position",new ai(_e,3)),Ee.setAttribute("color",new ai(qe,3));const We=new kg({size:.3,vertexColors:!0,transparent:!0,opacity:.85}),pt=new oy(Ee,We);n.add(pt);let Ce=0,Ge=14;const Y=Be=>{const B=Be.clientX/window.innerWidth*2-1,we=-(Be.clientY/window.innerHeight)*2+1;Ce=B*8,Ge=14+we*3};window.addEventListener("mousemove",Y);let Re,be=0;const ct=()=>{Re=requestAnimationFrame(ct),be+=.016,c.position.x+=(Ce-c.position.x)*.04,c.position.y+=(Ge-c.position.y)*.04,c.lookAt(0,4,0),x.rotation.y=Math.sin(be*.2)*.08,De.forEach(B=>{B.mesh.position.y=B.baseY+Math.sin(be*B.speed+B.offset)*.45,B.mesh.rotation.y+=B.rotSpeed,B.mesh.rotation.z=Math.sin(be*B.speed)*.1}),rt.forEach(B=>{B.mesh.position.y=B.baseY+Math.sin(be*B.speed+B.offset)*.35,B.mesh.rotation.y+=B.rotY,B.mesh.rotation.x=Math.sin(be*.8)*.15}),j.forEach(B=>{B.mesh.position.y=B.baseY+Math.sin(be*B.speed+B.offset)*.3,B.mesh.rotation.y+=B.rotY}),Le.forEach(B=>{B.mesh.position.y=B.baseY+Math.sin(be*B.speed+B.offset)*.35,B.mesh.rotation.y+=B.rotY}),Fe.forEach(B=>{B.mesh.position.y=B.baseY+Math.sin(be*B.speed+B.offset)*.4,B.mesh.rotation.x+=B.rotX,B.mesh.rotation.y+=B.rotY}),z.forEach(B=>{const we=Math.sin(be*4+B.walkOffset);B.legL.rotation.x=we*.4,B.legR.rotation.x=-we*.4,B.group.position.y=.1+Math.abs(Math.sin(be*4+B.walkOffset))*.05});const Be=Ee.attributes.position.array;for(let B=1;B<Me*3;B+=3)Be[B]+=.03,Be[B]>22&&(Be[B]=0);Ee.attributes.position.needsUpdate=!0,d.render(n,c)};ct();const ut=()=>{if(!e)return;const Be=e.clientWidth,B=e.clientHeight;c.aspect=Be/B,c.updateProjectionMatrix(),d.setSize(Be,B)};return window.addEventListener("resize",ut),()=>{window.removeEventListener("mousemove",Y),window.removeEventListener("resize",ut),cancelAnimationFrame(Re),e&&d.domElement&&e.removeChild(d.domElement),d.dispose()}},[]),l.jsx("div",{ref:s,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,overflow:"hidden",pointerEvents:"none"}})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=ge.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:d,...h},p)=>ge.createElement("svg",{ref:p,...JM,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Gg("lucide",a),...h},[...d.map(([v,y])=>ge.createElement(v,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(s,e)=>{const n=ge.forwardRef(({className:r,...a},c)=>ge.createElement(QM,{ref:c,iconNode:e,className:Gg(`lucide-${ZM(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Xl=St("ArrowRight",eE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Zs=St("Bell",tE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Mf=St("BookOpen",nE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Xg=St("CalendarCheck",iE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ss=St("Calendar",rE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$g=St("Check",sE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],aE=St("ChevronDown",oE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],cE=St("ChevronLeft",lE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],dE=St("ChevronRight",uE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ef=St("CircleAlert",fE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ef=St("CircleCheckBig",hE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],tf=St("CircleCheck",pE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],bf=St("Clock",mE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],xE=St("Code",gE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],yE=St("Download",vE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ko=St("ExternalLink",_E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Yg=St("FolderGit2",SE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],EE=St("GitBranch",ME);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],wE=St("GraduationCap",bE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],CE=St("House",TE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],RE=St("Info",AE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ig=St("Lock",PE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],qg=St("LogOut",LE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],nf=St("Mail",IE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Kg=St("MapPin",DE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],UE=St("Menu",NE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],zE=St("Pen",kE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Zo=St("Plus",FE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],ra=St("Search",OE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],jE=St("Send",BE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],VE=St("ShieldCheck",HE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],rf=St("Shield",WE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],$l=St("Sparkles",GE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],kl=St("Trash2",XE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rg=St("TriangleAlert",$E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],qE=St("Upload",YE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Jo=St("User",KE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],wf=St("Users",ZE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ls=St("X",JE),QE=()=>{const{login:s,register:e,demoLogin:n}=Si(),[r,a]=ge.useState(!1),[c,d]=ge.useState(!1),[h,p]=ge.useState(!1),[v,y]=ge.useState(""),[_,x]=ge.useState(""),[M,b]=ge.useState(""),[A,S]=ge.useState(""),[g,I]=ge.useState(""),[D,T]=ge.useState("CSE"),[W,O]=ge.useState("3rd Year"),[U,N]=ge.useState(["Python","React","AI"]),P=["CSE","ECE","AI & ML","IT","EEE","MECH","CIVIL","MBA","Other"],C=["1st Year","2nd Year","3rd Year","4th Year","Postgraduate"],V=["Python","Java","C++","JavaScript","React","Node.js","AI","Machine Learning","Arduino","IoT","UI/UX","Cloud Computing","Cybersecurity"],G=Z=>{U.includes(Z)?N(U.filter(re=>re!==Z)):N([...U,Z])},J=async Z=>{Z.preventDefault(),!(!v||!_)&&(d(!0),await s(v,_),d(!1))},X=async Z=>{Z.preventDefault(),!(!M||!A||!g)&&(d(!0),await e({name:M,email:A,password:g,department:D,year:W,skills:U}),d(!1))};return l.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#f0f5ff"},children:[l.jsx(KM,{}),l.jsxs("div",{style:{position:"relative",zIndex:10,padding:"60px",maxWidth:"620px",display:"flex",flexDirection:"column",gap:"24px",pointerEvents:"auto"},children:[l.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",backgroundColor:"rgba(255, 255, 255, 0.85)",backdropFilter:"blur(10px)",padding:"8px 16px",borderRadius:"999px",border:"1px solid #bfdbfe",boxShadow:"0 4px 12px rgba(37, 99, 235, 0.08)",width:"fit-content"},children:[l.jsx($l,{size:16,color:"#2563eb"}),l.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"#1d4ed8"},children:"Next-Gen Academic & Collaboration Ecosystem"})]}),l.jsxs("div",{children:[l.jsx("h1",{style:{fontSize:"2.8rem",fontWeight:800,color:"#0f172a",letterSpacing:"-0.03em",lineHeight:1.15},children:"🎓 CampusConnect"}),l.jsx("p",{style:{fontSize:"1.25rem",color:"#2563eb",fontWeight:700,letterSpacing:"0.04em",marginTop:"6px"},children:"Connect • Collaborate • Grow"}),l.jsx("p",{style:{fontSize:"1rem",color:"#475569",marginTop:"12px",lineHeight:1.6,maxWidth:"520px"},children:"An integrated student management and collaboration platform uniting campus announcements, department hackathons, student projects, peer resources, and smart teammate matching."})]}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:["🏛️ Interactive 3D Campus Experience","📢 Real-Time Announcements","🤝 Smart Teammate Matching (AI)","📅 Department-Wise Events","📚 Peer Study Notes Vault","📝 Live Issue Resolution Tracker"].map((Z,re)=>l.jsx("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.9)",backdropFilter:"blur(8px)",padding:"6px 14px",borderRadius:"8px",border:"1px solid #e2e8f0",fontSize:"0.82rem",fontWeight:600,color:"#334155",boxShadow:"0 2px 5px rgba(0,0,0,0.03)"},children:Z},re))}),l.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(12px)",borderRadius:"16px",padding:"16px 20px",border:"1px solid #bfdbfe",boxShadow:"0 10px 25px -5px rgba(37, 99, 235, 0.1)",maxWidth:"500px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[l.jsx("span",{style:{fontSize:"0.82rem",fontWeight:700,color:"#1e293b"},children:"⚡ 1-Click Demo Evaluation Credentials:"}),l.jsx("span",{style:{fontSize:"0.72rem",color:"#2563eb",fontWeight:600},children:"Lab Ready"})]}),l.jsxs("div",{style:{display:"flex",gap:"10px"},children:[l.jsxs("button",{onClick:()=>n("student"),style:{flex:1,padding:"9px 12px",borderRadius:"10px",border:"1px solid #bfdbfe",backgroundColor:"#eff6ff",color:"#1d4ed8",fontWeight:600,fontSize:"0.82rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",transition:"all 0.2s"},onMouseEnter:Z=>Z.currentTarget.style.backgroundColor="#dbeafe",onMouseLeave:Z=>Z.currentTarget.style.backgroundColor="#eff6ff",children:[l.jsx(Jo,{size:15})," Student (Rahul Kumar)"]}),l.jsxs("button",{onClick:()=>n("admin"),style:{flex:1,padding:"9px 12px",borderRadius:"10px",border:"1px solid #e9d5ff",backgroundColor:"#f5f3ff",color:"#7c3aed",fontWeight:600,fontSize:"0.82rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",transition:"all 0.2s"},onMouseEnter:Z=>Z.currentTarget.style.backgroundColor="#ede9fe",onMouseLeave:Z=>Z.currentTarget.style.backgroundColor="#f5f3ff",children:[l.jsx(VE,{size:15})," Admin Portal"]})]})]})]}),l.jsxs("div",{style:{position:"relative",zIndex:10,marginRight:"60px",width:"460px",maxHeight:"92vh",overflowY:"auto",backgroundColor:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(16px)",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.9)",boxShadow:"0 25px 50px -12px rgba(37, 99, 235, 0.2), 0 0 0 1px rgba(191, 219, 254, 0.4)",padding:"36px",pointerEvents:"auto"},children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[l.jsx("div",{style:{width:"54px",height:"54px",borderRadius:"16px",background:"linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"26px",margin:"0 auto 12px",color:"white",boxShadow:"0 10px 20px -3px rgba(37, 99, 235, 0.3)"},children:"🎓"}),l.jsx("h2",{style:{fontSize:"1.45rem",fontWeight:700,color:"#0f172a"},children:r?"Create Student Account":"Welcome to CampusConnect"}),l.jsx("p",{style:{fontSize:"0.85rem",color:"#64748b",marginTop:"4px"},children:r?"Join your department and collaborate with peers":"Sign in to access your student portal and events"})]}),l.jsxs("div",{style:{display:"flex",backgroundColor:"#f1f5f9",padding:"4px",borderRadius:"12px",marginBottom:"22px"},children:[l.jsx("button",{type:"button",onClick:()=>a(!1),style:{flex:1,padding:"8px",borderRadius:"9px",border:"none",background:r?"transparent":"#ffffff",color:r?"#64748b":"#2563eb",fontWeight:600,fontSize:"0.88rem",cursor:"pointer",boxShadow:r?"none":"0 2px 4px rgba(0,0,0,0.05)",transition:"all 0.2s"},children:"Login"}),l.jsx("button",{type:"button",onClick:()=>a(!0),style:{flex:1,padding:"8px",borderRadius:"9px",border:"none",background:r?"#ffffff":"transparent",color:r?"#2563eb":"#64748b",fontWeight:600,fontSize:"0.88rem",cursor:"pointer",boxShadow:r?"0 2px 4px rgba(0,0,0,0.05)":"none",transition:"all 0.2s"},children:"Create Account"})]}),r?l.jsxs("form",{onSubmit:X,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#334155",marginBottom:"5px"},children:"Full Name"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"9px 12px"},children:[l.jsx(Jo,{size:17,color:"#94a3b8"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Rahul Kumar",value:M,onChange:Z=>b(Z.target.value),style:{border:"none",outline:"none",width:"100%",fontSize:"0.88rem"}})]})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#334155",marginBottom:"5px"},children:"College Email"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"9px 12px"},children:[l.jsx(nf,{size:17,color:"#94a3b8"}),l.jsx("input",{type:"email",required:!0,placeholder:"student@campus.edu",value:A,onChange:Z=>S(Z.target.value),style:{border:"none",outline:"none",width:"100%",fontSize:"0.88rem"}})]})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#334155",marginBottom:"5px"},children:"Password"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"9px 12px"},children:[l.jsx(ig,{size:17,color:"#94a3b8"}),l.jsx("input",{type:"password",required:!0,placeholder:"At least 6 characters",value:g,onChange:Z=>I(Z.target.value),style:{border:"none",outline:"none",width:"100%",fontSize:"0.88rem"}})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#334155",marginBottom:"5px"},children:"Department"}),l.jsx("select",{value:D,onChange:Z=>T(Z.target.value),style:{width:"100%",padding:"9px 12px",borderRadius:"10px",border:"1px solid #cbd5e1",backgroundColor:"#ffffff",fontSize:"0.88rem",color:"#0f172a",outline:"none"},children:P.map(Z=>l.jsx("option",{value:Z,children:Z},Z))})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#334155",marginBottom:"5px"},children:"Academic Year"}),l.jsx("select",{value:W,onChange:Z=>O(Z.target.value),style:{width:"100%",padding:"9px 12px",borderRadius:"10px",border:"1px solid #cbd5e1",backgroundColor:"#ffffff",fontSize:"0.88rem",color:"#0f172a",outline:"none"},children:C.map(Z=>l.jsx("option",{value:Z,children:Z},Z))})]})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#334155",marginBottom:"6px"},children:"Select Your Skills (For Smart Teammate Matching)"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxHeight:"110px",overflowY:"auto",padding:"4px 0"},children:V.map(Z=>{const re=U.includes(Z);return l.jsxs("button",{type:"button",onClick:()=>G(Z),style:{padding:"4px 10px",borderRadius:"999px",border:re?"1px solid #2563eb":"1px solid #cbd5e1",backgroundColor:re?"#eff6ff":"#ffffff",color:re?"#2563eb":"#475569",fontSize:"0.75rem",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[re&&l.jsx($g,{size:12}),Z]},Z)})})]}),l.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",style:{width:"100%",padding:"11px",fontSize:"0.95rem",borderRadius:"12px",marginTop:"4px"},children:[c?"Registering...":"Complete Registration",l.jsx(Xl,{size:18})]})]}):l.jsxs("form",{onSubmit:J,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#334155",marginBottom:"6px"},children:"Campus Email"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"10px 14px"},children:[l.jsx(nf,{size:18,color:"#94a3b8"}),l.jsx("input",{type:"email",required:!0,placeholder:"e.g. rahul@campus.edu",value:v,onChange:Z=>y(Z.target.value),style:{border:"none",outline:"none",width:"100%",fontSize:"0.9rem",color:"#0f172a"}})]})]}),l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[l.jsx("label",{style:{fontSize:"0.82rem",fontWeight:600,color:"#334155"},children:"Password"}),l.jsx("button",{type:"button",onClick:()=>p(!0),style:{background:"none",border:"none",color:"#2563eb",fontSize:"0.78rem",fontWeight:600,cursor:"pointer"},children:"Forgot Password?"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"10px 14px"},children:[l.jsx(ig,{size:18,color:"#94a3b8"}),l.jsx("input",{type:"password",required:!0,placeholder:"Enter your password",value:_,onChange:Z=>x(Z.target.value),style:{border:"none",outline:"none",width:"100%",fontSize:"0.9rem",color:"#0f172a"}})]})]}),h&&l.jsxs("div",{style:{padding:"10px 12px",borderRadius:"10px",backgroundColor:"#eff6ff",border:"1px solid #bfdbfe",fontSize:"0.8rem",color:"#1d4ed8"},children:["💡 Password reset: For demo accounts, use ",l.jsx("code",{children:"campus123"})," or contact campus IT admin."]}),l.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",style:{width:"100%",padding:"12px",fontSize:"0.95rem",borderRadius:"12px",marginTop:"6px"},children:[c?"Authenticating...":"Login to Dashboard",l.jsx(Xl,{size:18})]})]})]})]})},sg=()=>{const{user:s,setCurrentPage:e}=Si(),[n,r]=ge.useState([]),[a,c]=ge.useState([]),[d,h]=ge.useState([]),[p,v]=ge.useState(!0);ge.useEffect(()=>{(async()=>{try{const[M,b,A]=await Promise.all([wt.getAnnouncements(),wt.getEvents({status:"Upcoming"}),wt.getProjects({status:"Looking for Members"})]);M.success&&r(M.announcements.slice(0,3)),b.success&&c(b.events.slice(0,3)),A.success&&h(A.projects.slice(0,3))}catch(M){console.error("Error loading dashboard feeds:",M)}finally{v(!1)}})()},[]);const y=[{title:"Active Users",value:"120+",icon:"👨🎓",color:"#3b82f6",bg:"#eff6ff",trend:"+14% this month"},{title:"Projects Posted",value:"150+",icon:"🤝",color:"#8b5cf6",bg:"#f5f3ff",trend:"35 Looking for members"},{title:"Events Organized",value:"50+",icon:"📅",color:"#06b6d4",bg:"#ecfeff",trend:"8 Upcoming this week"},{title:"Resources Shared",value:"800+",icon:"📚",color:"#10b981",bg:"#f0fdf4",trend:"Peer-reviewed notes"}],_=[{id:"announcements",title:"Announcements",desc:"Latest administrative, exam, and hackathon alerts",icon:Zs,color:"#2563eb",bg:"#eff6ff",tag:"New Alerts"},{id:"events",title:"Department Events",desc:"CSE, ECE, AI/ML workshops & national hackathons",icon:ss,color:"#7c3aed",bg:"#f5f3ff",tag:"Calendar"},{id:"projects",title:"Project Collaboration",desc:"Build with peers using Smart Teammate Matching",icon:wf,color:"#0284c7",bg:"#f0f9ff",tag:"Matching AI"},{id:"resources",title:"Study Resources",desc:"Download lecture notes, slides, and syllabus files",icon:Mf,color:"#059669",bg:"#ecfdf5",tag:"Vault"},{id:"complaints",title:"Complaints & Feedback",desc:"Submit campus issues with live stage tracking",icon:Ef,color:"#ea580c",bg:"#fff7ed",tag:"Live Tracker"}];return l.jsxs("div",{className:"page-wrapper",children:[l.jsxs("div",{style:{background:"linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #7c3aed 100%)",borderRadius:"24px",padding:"40px 44px",color:"white",position:"relative",overflow:"hidden",boxShadow:"0 15px 30px -5px rgba(37, 99, 235, 0.25)",marginBottom:"32px"},children:[l.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"260px",height:"260px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",pointerEvents:"none"}}),l.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:"750px"},children:[l.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",backgroundColor:"rgba(255, 255, 255, 0.18)",backdropFilter:"blur(8px)",padding:"6px 14px",borderRadius:"999px",fontSize:"0.82rem",fontWeight:600,marginBottom:"16px"},children:[l.jsx($l,{size:16}),l.jsx("span",{children:"Campus Innovation & Student Connectivity Hub"})]}),l.jsxs("h1",{style:{fontSize:"2.4rem",fontWeight:800,color:"white",lineHeight:1.2,letterSpacing:"-0.02em"},children:["Welcome to CampusConnect",s!=null&&s.name?`, ${s.name.split(" ")[0]}`:"","!"]}),l.jsx("p",{style:{fontSize:"1.08rem",color:"#e0e7ff",marginTop:"10px",lineHeight:1.6,fontWeight:400},children:'"Your all-in-one platform for campus life, events, projects, and learning."'}),l.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"14px",marginTop:"26px"},children:[l.jsxs("button",{onClick:()=>e("projects"),style:{backgroundColor:"white",color:"#1d4ed8",border:"none",padding:"11px 22px",borderRadius:"12px",fontWeight:600,fontSize:"0.92rem",cursor:"pointer",boxShadow:"0 4px 14px rgba(0, 0, 0, 0.15)",display:"inline-flex",alignItems:"center",gap:"8px",transition:"transform 0.2s"},onMouseEnter:x=>x.currentTarget.style.transform="translateY(-2px)",onMouseLeave:x=>x.currentTarget.style.transform="translateY(0)",children:["Explore Projects ",l.jsx(Xl,{size:17})]}),l.jsxs("button",{onClick:()=>e("events"),style:{backgroundColor:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(8px)",color:"white",border:"1px solid rgba(255, 255, 255, 0.4)",padding:"11px 22px",borderRadius:"12px",fontWeight:600,fontSize:"0.92rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"8px",transition:"all 0.2s"},onMouseEnter:x=>x.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.3)",onMouseLeave:x=>x.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.2)",children:[l.jsx(ss,{size:17})," View Events"]}),l.jsxs("button",{onClick:()=>e("announcements"),style:{backgroundColor:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(8px)",color:"white",border:"1px solid rgba(255, 255, 255, 0.3)",padding:"11px 22px",borderRadius:"12px",fontWeight:600,fontSize:"0.92rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"8px",transition:"all 0.2s"},onMouseEnter:x=>x.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.25)",onMouseLeave:x=>x.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.15)",children:[l.jsx(Zs,{size:17})," View Announcements"]})]})]})]}),l.jsxs("div",{style:{marginBottom:"34px"},children:[l.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,color:"#0f172a",marginBottom:"16px"},children:"Campus Pulse & Statistics"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"18px"},children:y.map((x,M)=>l.jsxs("div",{className:"card",style:{padding:"24px",display:"flex",alignItems:"center",gap:"18px",position:"relative"},children:[l.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"16px",backgroundColor:x.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",flexShrink:0,border:`1px solid ${x.color}30`},children:x.icon}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"1.75rem",fontWeight:800,color:"#0f172a",lineHeight:1.1},children:x.value}),l.jsx("div",{style:{fontSize:"0.9rem",fontWeight:600,color:"#475569",marginTop:"2px"},children:x.title}),l.jsx("div",{style:{fontSize:"0.74rem",color:"#10b981",fontWeight:600,marginTop:"4px"},children:x.trend})]})]},M))})]}),l.jsxs("div",{style:{marginBottom:"38px"},children:[l.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:l.jsxs("div",{children:[l.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,color:"#0f172a"},children:"Quick Access Hub"}),l.jsx("p",{style:{fontSize:"0.85rem",color:"#64748b"},children:"Instant navigation to major campus workflows"})]})}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))",gap:"16px"},children:_.map(x=>{const M=x.icon;return l.jsxs("div",{onClick:()=>e(x.id),className:"card",style:{padding:"22px 20px",cursor:"pointer",display:"flex",flexDirection:"column",gap:"12px",transition:"all 0.2s",position:"relative"},onMouseEnter:b=>{b.currentTarget.style.transform="translateY(-4px)",b.currentTarget.style.borderColor=x.color},onMouseLeave:b=>{b.currentTarget.style.transform="translateY(0)",b.currentTarget.style.borderColor="#e2e8f0"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",backgroundColor:x.bg,color:x.color,display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(M,{size:22})}),l.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,color:x.color,backgroundColor:x.bg,padding:"2px 8px",borderRadius:"999px"},children:x.tag})]}),l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1.02rem",fontWeight:700,color:"#0f172a"},children:x.title}),l.jsx("p",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"4px",lineHeight:1.4},children:x.desc})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.82rem",fontWeight:600,color:x.color,marginTop:"auto",paddingTop:"6px"},children:["Open ",x.title," ",l.jsx(Xl,{size:14})]})]},x.id)})})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(360px, 1fr))",gap:"24px"},children:[l.jsxs("div",{className:"card",style:{padding:"24px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"18px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(Zs,{size:20,color:"#2563eb"}),l.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:700,color:"#0f172a"},children:"Latest Announcements"})]}),l.jsx("button",{onClick:()=>e("announcements"),style:{background:"none",border:"none",color:"#2563eb",fontSize:"0.82rem",fontWeight:600,cursor:"pointer"},children:"View All →"})]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:n.map(x=>l.jsxs("div",{style:{padding:"12px 14px",borderRadius:"12px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"6px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[x.important&&l.jsx("span",{className:"badge badge-important",style:{fontSize:"0.65rem"},children:"Important"}),l.jsx("span",{className:`badge badge-${x.category.toLowerCase().replace(/[^a-z]/g,"")}`,style:{fontSize:"0.65rem"},children:x.category}),l.jsx("span",{style:{fontSize:"0.72rem",color:"#94a3b8",marginLeft:"auto"},children:x.date})]}),l.jsx("div",{style:{fontWeight:600,fontSize:"0.88rem",color:"#1e293b"},children:x.title}),l.jsxs("p",{style:{fontSize:"0.78rem",color:"#64748b",lineHeight:1.4},children:[x.content.slice(0,110),"..."]}),x.externalLink&&l.jsxs("a",{href:x.externalLink,target:"_blank",rel:"noreferrer",style:{fontSize:"0.78rem",fontWeight:600,display:"inline-flex",alignItems:"center",gap:"4px",color:"#2563eb",marginTop:"2px"},children:["Official Portal ",l.jsx(Ko,{size:12})]})]},x._id))})]}),l.jsxs("div",{className:"card",style:{padding:"24px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"18px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(ss,{size:20,color:"#7c3aed"}),l.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:700,color:"#0f172a"},children:"Upcoming Campus Events"})]}),l.jsx("button",{onClick:()=>e("events"),style:{background:"none",border:"none",color:"#7c3aed",fontSize:"0.82rem",fontWeight:600,cursor:"pointer"},children:"Browse All →"})]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:a.map(x=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 12px",borderRadius:"12px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0"},children:[l.jsx("img",{src:x.image,alt:x.title,style:{width:"68px",height:"68px",borderRadius:"10px",objectFit:"cover",flexShrink:0}}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"3px"},children:[l.jsx("span",{className:`badge badge-${x.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:x.department}),l.jsx("span",{style:{fontSize:"0.72rem",color:"#64748b"},children:x.category})]}),l.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem",color:"#0f172a",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:x.title}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginTop:"4px"},children:[l.jsxs("span",{style:{fontSize:"0.74rem",color:"#64748b",display:"flex",alignItems:"center",gap:"3px"},children:[l.jsx(bf,{size:12})," ",x.date]}),l.jsxs("span",{style:{fontSize:"0.74rem",color:"#64748b",display:"flex",alignItems:"center",gap:"3px"},children:[l.jsx(Kg,{size:12})," ",x.location]})]})]})]},x._id))})]})]})]})},eb=()=>{const[s,e]=ge.useState([]),[n,r]=ge.useState(!0),[a,c]=ge.useState("All"),[d,h]=ge.useState(""),[p,v]=ge.useState(new Set),[y,_]=ge.useState(null),x=["All","General","Academic","Examinations","Placements","Workshops","Sports","Hackathons"],M=async()=>{try{r(!0);const g=await wt.getAnnouncements(a);g.success&&e(g.announcements)}catch(g){console.error("Error fetching announcements:",g)}finally{r(!1)}};ge.useEffect(()=>{M()},[a]);const b=g=>{v(I=>{const D=new Set(I);return D.has(g)?D.delete(g):D.add(g),D})},A=g=>{switch(g){case"Examinations":return"📚";case"Placements":return"💼";case"Workshops":return"🤖";case"Sports":return"🏆";case"Hackathons":return"🚀";case"Academic":return"🎓";default:return"📢"}},S=s.filter(g=>{if(!d)return!0;const I=d.toLowerCase();return g.title.toLowerCase().includes(I)||g.content.toLowerCase().includes(I)||g.author.toLowerCase().includes(I)});return l.jsxs("div",{className:"page-wrapper",children:[l.jsx("div",{style:{marginBottom:"28px"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[l.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",backgroundColor:"#eff6ff",color:"#2563eb",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"},children:"📢"}),l.jsxs("div",{children:[l.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:800,color:"#0f172a"},children:"Latest Announcements"}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#64748b"},children:"Stay updated with important campus information and notifications."})]})]})}),l.jsxs("div",{className:"card",style:{padding:"16px 20px",marginBottom:"26px",display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#f8fafc",border:"1px solid #cbd5e1",borderRadius:"12px",padding:"10px 16px"},children:[l.jsx(ra,{size:18,color:"#94a3b8"}),l.jsx("input",{type:"text",placeholder:"Search by announcement title, keywords, or department...",value:d,onChange:g=>h(g.target.value),style:{border:"none",background:"transparent",outline:"none",width:"100%",fontSize:"0.92rem",color:"#0f172a"}})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:600,color:"#64748b",marginRight:"4px"},children:"Filter Category:"}),x.map(g=>{const I=a===g;return l.jsx("button",{onClick:()=>c(g),style:{padding:"6px 14px",borderRadius:"999px",border:I?"1px solid #2563eb":"1px solid #e2e8f0",backgroundColor:I?"#2563eb":"#ffffff",color:I?"#ffffff":"#475569",fontWeight:600,fontSize:"0.82rem",cursor:"pointer",transition:"all 0.15s ease",boxShadow:I?"0 4px 10px rgba(37, 99, 235, 0.2)":"none"},children:g},g)})]})]}),n?l.jsx("div",{style:{textAlign:"center",padding:"60px",color:"#64748b"},children:"Loading latest announcements..."}):S.length===0?l.jsxs("div",{className:"card",style:{padding:"50px",textAlign:"center",color:"#64748b"},children:[l.jsx("div",{style:{fontSize:"40px",marginBottom:"10px"},children:"🔍"}),l.jsx("h3",{style:{fontSize:"1.2rem",color:"#1e293b"},children:"No Announcements Found"}),l.jsx("p",{style:{marginTop:"4px",fontSize:"0.9rem"},children:"Try resetting your search query or choosing another category filter."})]}):l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:S.map(g=>{const I=p.has(g._id);return l.jsx("div",{className:"card",style:{padding:"24px 28px",borderLeft:g.important?"4px solid #ef4444":I?"4px solid #cbd5e1":"4px solid #3b82f6",backgroundColor:I?"#fcfdfe":"#ffffff",transition:"all 0.2s"},children:l.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px"},children:l.jsxs("div",{style:{display:"flex",gap:"18px",flex:1},children:[l.jsx("div",{style:{width:"50px",height:"50px",borderRadius:"14px",backgroundColor:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",flexShrink:0},children:A(g.category)}),l.jsxs("div",{style:{flex:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"8px"},children:[g.important&&l.jsx("span",{className:"badge badge-important",children:"Important Notice"}),l.jsx("span",{className:`badge badge-${g.category.toLowerCase().replace(/[^a-z]/g,"")}`,children:g.category}),l.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",display:"flex",alignItems:"center",gap:"4px"},children:[l.jsx(bf,{size:13})," ",g.date," at ",g.timePosted||"10:00 AM"]}),l.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",display:"flex",alignItems:"center",gap:"4px"},children:[l.jsx(Jo,{size:13})," ",g.author]})]}),l.jsx("h3",{style:{fontSize:"1.22rem",fontWeight:700,color:"#0f172a",marginBottom:"8px",cursor:"pointer"},onClick:()=>_(g),children:g.title}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#475569",lineHeight:1.6},children:g.content}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginTop:"16px"},children:[g.externalLink&&l.jsxs("a",{href:g.externalLink,target:"_blank",rel:"noreferrer",className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"6px 14px",borderRadius:"8px",display:"inline-flex",alignItems:"center",gap:"6px"},children:[l.jsx("span",{children:"Open Official Portal"}),l.jsx(Ko,{size:14})]}),l.jsx("button",{onClick:()=>_(g),style:{background:"none",border:"none",color:"#2563eb",fontSize:"0.84rem",fontWeight:600,cursor:"pointer"},children:"View Details →"}),l.jsxs("button",{onClick:()=>b(g._id),style:{background:"none",border:"none",color:I?"#10b981":"#64748b",fontSize:"0.82rem",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",marginLeft:"auto"},children:[l.jsx(tf,{size:16,color:I?"#10b981":"#94a3b8"}),I?"Marked as Read":"Mark as Read"]})]})]})]})})},g._id)})}),y&&l.jsx("div",{className:"modal-overlay",onClick:()=>_(null),children:l.jsxs("div",{className:"modal-content",onClick:g=>g.stopPropagation(),style:{padding:"32px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"18px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("span",{className:`badge badge-${y.category.toLowerCase().replace(/[^a-z]/g,"")}`,children:y.category}),y.important&&l.jsx("span",{className:"badge badge-important",children:"Important"})]}),l.jsx("button",{onClick:()=>_(null),style:{background:"none",border:"none",color:"#64748b",cursor:"pointer",padding:"4px"},children:l.jsx(ls,{size:20})})]}),l.jsx("h2",{style:{fontSize:"1.45rem",fontWeight:800,color:"#0f172a",marginBottom:"12px"},children:y.title}),l.jsxs("div",{style:{display:"flex",gap:"16px",fontSize:"0.82rem",color:"#64748b",paddingBottom:"14px",borderBottom:"1px solid #e2e8f0",marginBottom:"18px"},children:[l.jsxs("span",{children:["📅 ",y.date]}),l.jsxs("span",{children:["⏰ ",y.timePosted||"10:00 AM"]}),l.jsxs("span",{children:["👤 ",y.author]})]}),l.jsx("p",{style:{fontSize:"0.98rem",color:"#334155",lineHeight:1.7,marginBottom:"24px"},children:y.content}),y.externalLink&&l.jsxs("div",{style:{backgroundColor:"#eff6ff",padding:"16px",borderRadius:"12px",border:"1px solid #bfdbfe",marginBottom:"20px"},children:[l.jsx("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"#1e3a8a",marginBottom:"4px"},children:"Official External Link"}),l.jsx("p",{style:{fontSize:"0.82rem",color:"#1d4ed8",marginBottom:"10px"},children:"Visit the verified portal for regulations, submissions, or detailed notifications."}),l.jsxs("a",{href:y.externalLink,target:"_blank",rel:"noreferrer",className:"btn btn-primary",style:{fontSize:"0.85rem",padding:"8px 16px"},children:["Open ",y.externalLink," ",l.jsx(Ko,{size:14})]})]}),l.jsx("button",{onClick:()=>_(null),className:"btn btn-secondary",style:{width:"100%",padding:"10px"},children:"Close Announcement"})]})})]})};var Tf={};(function s(e,n,r,a){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!e.OffscreenCanvas)return!1;try{var k=new OffscreenCanvas(1,1),E=k.getContext("2d");E.fillRect(0,0,1,1);var K=k.transferToImageBitmap();E.createPattern(K,"no-repeat")}catch{return!1}return!0})();function p(){}function v(k){var E=n.exports.Promise,K=E!==void 0?E:e.Promise;return typeof K=="function"?new K(k):(k(p,p),null)}var y=(function(k,E){return{transform:function(K){if(k)return K;if(E.has(K))return E.get(K);var Se=new OffscreenCanvas(K.width,K.height),$=Se.getContext("2d");return $.drawImage(K,0,0),E.set(K,Se),Se},clear:function(){E.clear()}}})(h,new Map),_=(function(){var k=Math.floor(16.666666666666668),E,K,Se={},$=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(le){var xe=Math.random();return Se[xe]=requestAnimationFrame(function ue(ye){$===ye||$+k-1<ye?($=ye,delete Se[xe],le()):Se[xe]=requestAnimationFrame(ue)}),xe},K=function(le){Se[le]&&cancelAnimationFrame(Se[le])}):(E=function(le){return setTimeout(le,k)},K=function(le){return clearTimeout(le)}),{frame:E,cancel:K}})(),x=(function(){var k,E,K={};function Se($){function le(xe,ue){$.postMessage({options:xe||{},callback:ue})}$.init=function(ue){var ye=ue.transferControlToOffscreen();$.postMessage({canvas:ye},[ye])},$.fire=function(ue,ye,Ue){if(E)return le(ue,null),E;var De=Math.random().toString(36).slice(2);return E=v(function(et){function rt(Ke){Ke.data.callback===De&&(delete K[De],$.removeEventListener("message",rt),E=null,y.clear(),Ue(),et())}$.addEventListener("message",rt),le(ue,De),K[De]=rt.bind(null,{data:{callback:De}})}),E},$.reset=function(){$.postMessage({reset:!0});for(var ue in K)K[ue](),delete K[ue]}}return function(){if(k)return k;if(!r&&c){var $=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{k=new Worker(URL.createObjectURL(new Blob([$])))}catch(le){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",le),null}Se(k)}return k}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(k,E){return E?E(k):k}function A(k){return k!=null}function S(k,E,K){return b(k&&A(k[E])?k[E]:M[E],K)}function g(k){return k<0?0:Math.floor(k)}function I(k,E){return Math.floor(Math.random()*(E-k))+k}function D(k){return parseInt(k,16)}function T(k){return k.map(W)}function W(k){var E=String(k).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:D(E.substring(0,2)),g:D(E.substring(2,4)),b:D(E.substring(4,6))}}function O(k){var E=S(k,"origin",Object);return E.x=S(E,"x",Number),E.y=S(E,"y",Number),E}function U(k){k.width=document.documentElement.clientWidth,k.height=document.documentElement.clientHeight}function N(k){var E=k.getBoundingClientRect();k.width=E.width,k.height=E.height}function P(k){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=k,E}function C(k,E,K,Se,$,le,xe,ue,ye){k.save(),k.translate(E,K),k.rotate(le),k.scale(Se,$),k.arc(0,0,1,xe,ue,ye),k.restore()}function V(k){var E=k.angle*(Math.PI/180),K=k.spread*(Math.PI/180);return{x:k.x,y:k.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:k.startVelocity*.5+Math.random()*k.startVelocity,angle2D:-E+(.5*K-Math.random()*K),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:k.color,shape:k.shape,tick:0,totalTicks:k.ticks,decay:k.decay,drift:k.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:k.gravity*3,ovalScalar:.6,scalar:k.scalar,flat:k.flat}}function G(k,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var K=E.tick++/E.totalTicks,Se=E.x+E.random*E.tiltCos,$=E.y+E.random*E.tiltSin,le=E.wobbleX+E.random*E.tiltCos,xe=E.wobbleY+E.random*E.tiltSin;if(k.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-K)+")",k.beginPath(),d&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))k.fill(me(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(le-Se)*.1,Math.abs(xe-$)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var ue=Math.PI/10*E.wobble,ye=Math.abs(le-Se)*.1,Ue=Math.abs(xe-$)*.1,De=E.shape.bitmap.width*E.scalar,et=E.shape.bitmap.height*E.scalar,rt=new DOMMatrix([Math.cos(ue)*ye,Math.sin(ue)*ye,-Math.sin(ue)*Ue,Math.cos(ue)*Ue,E.x,E.y]);rt.multiplySelf(new DOMMatrix(E.shape.matrix));var Ke=k.createPattern(y.transform(E.shape.bitmap),"no-repeat");Ke.setTransform(rt),k.globalAlpha=1-K,k.fillStyle=Ke,k.fillRect(E.x-De/2,E.y-et/2,De,et),k.globalAlpha=1}else if(E.shape==="circle")k.ellipse?k.ellipse(E.x,E.y,Math.abs(le-Se)*E.ovalScalar,Math.abs(xe-$)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):C(k,E.x,E.y,Math.abs(le-Se)*E.ovalScalar,Math.abs(xe-$)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var j=Math.PI/2*3,ve=4*E.scalar,Le=8*E.scalar,Xe=E.x,Fe=E.y,gt=5,je=Math.PI/gt;gt--;)Xe=E.x+Math.cos(j)*Le,Fe=E.y+Math.sin(j)*Le,k.lineTo(Xe,Fe),j+=je,Xe=E.x+Math.cos(j)*ve,Fe=E.y+Math.sin(j)*ve,k.lineTo(Xe,Fe),j+=je;else k.moveTo(Math.floor(E.x),Math.floor(E.y)),k.lineTo(Math.floor(E.wobbleX),Math.floor($)),k.lineTo(Math.floor(le),Math.floor(xe)),k.lineTo(Math.floor(Se),Math.floor(E.wobbleY));return k.closePath(),k.fill(),E.tick<E.totalTicks}function J(k,E,K,Se,$){var le=E.slice(),xe=k.getContext("2d"),ue,ye,Ue=v(function(De){function et(){ue=ye=null,xe.clearRect(0,0,Se.width,Se.height),y.clear(),$(),De()}function rt(){r&&!(Se.width===a.width&&Se.height===a.height)&&(Se.width=k.width=a.width,Se.height=k.height=a.height),!Se.width&&!Se.height&&(K(k),Se.width=k.width,Se.height=k.height),xe.clearRect(0,0,Se.width,Se.height),le=le.filter(function(Ke){return G(xe,Ke)}),le.length?ue=_.frame(rt):et()}ue=_.frame(rt),ye=et});return{addFettis:function(De){return le=le.concat(De),Ue},canvas:k,promise:Ue,reset:function(){ue&&_.cancel(ue),ye&&ye()}}}function X(k,E){var K=!k,Se=!!S(E||{},"resize"),$=!1,le=S(E,"disableForReducedMotion",Boolean),xe=c&&!!S(E||{},"useWorker"),ue=xe?x():null,ye=K?U:N,Ue=k&&ue?!!k.__confetti_initialized:!1,De=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,et;function rt(j,ve,Le){for(var Xe=S(j,"particleCount",g),Fe=S(j,"angle",Number),gt=S(j,"spread",Number),je=S(j,"startVelocity",Number),z=S(j,"decay",Number),R=S(j,"gravity",Number),oe=S(j,"drift",Number),Me=S(j,"colors",T),Ee=S(j,"ticks",Number),_e=S(j,"shapes"),qe=S(j,"scalar"),Oe=!!S(j,"flat"),We=O(j),pt=Xe,Ce=[],Ge=k.width*We.x,Y=k.height*We.y;pt--;)Ce.push(V({x:Ge,y:Y,angle:Fe,spread:gt,startVelocity:je,color:Me[pt%Me.length],shape:_e[I(0,_e.length)],ticks:Ee,decay:z,gravity:R,drift:oe,scalar:qe,flat:Oe}));return et?et.addFettis(Ce):(et=J(k,Ce,ye,ve,Le),et.promise)}function Ke(j){var ve=le||S(j,"disableForReducedMotion",Boolean),Le=S(j,"zIndex",Number);if(ve&&De)return v(function(je){je()});K&&et?k=et.canvas:K&&!k&&(k=P(Le),document.body.appendChild(k)),Se&&!Ue&&ye(k);var Xe={width:k.width,height:k.height};ue&&!Ue&&ue.init(k),Ue=!0,ue&&(k.__confetti_initialized=!0);function Fe(){if(ue){var je={getBoundingClientRect:function(){if(!K)return k.getBoundingClientRect()}};ye(je),ue.postMessage({resize:{width:je.width,height:je.height}});return}Xe.width=Xe.height=null}function gt(){et=null,Se&&($=!1,e.removeEventListener("resize",Fe)),K&&k&&(document.body.contains(k)&&document.body.removeChild(k),k=null,Ue=!1)}return Se&&!$&&($=!0,e.addEventListener("resize",Fe,!1)),ue?ue.fire(j,Xe,gt):rt(j,Xe,gt)}return Ke.reset=function(){ue&&ue.reset(),et&&et.reset()},Ke}var Z;function re(){return Z||(Z=X(null,{useWorker:!0,resize:!0})),Z}function me(k,E,K,Se,$,le,xe){var ue=new Path2D(k),ye=new Path2D;ye.addPath(ue,new DOMMatrix(E));var Ue=new Path2D;return Ue.addPath(ye,new DOMMatrix([Math.cos(xe)*$,Math.sin(xe)*$,-Math.sin(xe)*le,Math.cos(xe)*le,K,Se])),Ue}function F(k){if(!d)throw new Error("path confetti are not supported in this browser");var E,K;typeof k=="string"?E=k:(E=k.path,K=k.matrix);var Se=new Path2D(E),$=document.createElement("canvas"),le=$.getContext("2d");if(!K){for(var xe=1e3,ue=xe,ye=xe,Ue=0,De=0,et,rt,Ke=0;Ke<xe;Ke+=2)for(var j=0;j<xe;j+=2)le.isPointInPath(Se,Ke,j,"nonzero")&&(ue=Math.min(ue,Ke),ye=Math.min(ye,j),Ue=Math.max(Ue,Ke),De=Math.max(De,j));et=Ue-ue,rt=De-ye;var ve=10,Le=Math.min(ve/et,ve/rt);K=[Le,0,0,Le,-Math.round(et/2+ue)*Le,-Math.round(rt/2+ye)*Le]}return{type:"path",path:E,matrix:K}}function de(k){var E,K=1,Se="#000000",$='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof k=="string"?E=k:(E=k.text,K="scalar"in k?k.scalar:K,$="fontFamily"in k?k.fontFamily:$,Se="color"in k?k.color:Se);var le=10*K,xe=""+le+"px "+$,ue=new OffscreenCanvas(le,le),ye=ue.getContext("2d");ye.font=xe;var Ue=ye.measureText(E),De=Math.ceil(Ue.actualBoundingBoxRight+Ue.actualBoundingBoxLeft),et=Math.ceil(Ue.actualBoundingBoxAscent+Ue.actualBoundingBoxDescent),rt=2,Ke=Ue.actualBoundingBoxLeft+rt,j=Ue.actualBoundingBoxAscent+rt;De+=rt+rt,et+=rt+rt,ue=new OffscreenCanvas(De,et),ye=ue.getContext("2d"),ye.font=xe,ye.fillStyle=Se,ye.fillText(E,Ke,j);var ve=1/K;return{type:"bitmap",bitmap:ue.transferToImageBitmap(),matrix:[ve,0,0,ve,-De*ve/2,-et*ve/2]}}n.exports=function(){return re().apply(this,arguments)},n.exports.reset=function(){re().reset()},n.exports.create=X,n.exports.shapeFromPath=F,n.exports.shapeFromText=de})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Tf,!1);const Zg=Tf.exports;Tf.exports.create;const tb=()=>{const{user:s,showToast:e}=Si(),[n,r]=ge.useState([]),[a,c]=ge.useState(!0),[d,h]=ge.useState("All Departments"),[p,v]=ge.useState("All Events"),[y,_]=ge.useState(""),[x,M]=ge.useState("grid"),[b,A]=ge.useState(null),[S,g]=ge.useState(new Date(2026,5,1)),I=["All Departments","CSE","ECE","AI & ML","IT","EEE","MECH","CIVIL","MBA"],D=["All Events","Upcoming","Ongoing","Completed"],T=async()=>{try{c(!0);const G=await wt.getEvents({department:d,status:p,search:y});G.success&&r(G.events)}catch(G){console.error("Error fetching events:",G)}finally{c(!1)}};ge.useEffect(()=>{T()},[d,p,y]);const W=async(G,J)=>{J&&J.stopPropagation();try{const X=await wt.toggleRegisterEvent(G);X.success&&(r(Z=>Z.map(re=>re._id===G?X.event:re)),b&&b._id===G&&A(X.event),X.registered?(Zg({particleCount:80,spread:60,origin:{y:.7},colors:["#2563eb","#7c3aed","#10b981"]}),e(X.message,"success")):e(X.message,"info"))}catch(X){e(X.message||"Failed to update registration","error")}},O=G=>!s||!G.registrations?!1:G.registrations.includes(s._id),U=n.filter(G=>x==="registered"?O(G):!0),N=new Date(S.getFullYear(),S.getMonth()+1,0).getDate(),P=new Date(S.getFullYear(),S.getMonth(),1).getDay(),C=["January","February","March","April","May","June","July","August","September","October","November","December"],V=G=>{g(new Date(S.getFullYear(),S.getMonth()+G,1))};return l.jsxs("div",{className:"page-wrapper",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"16px",marginBottom:"28px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"14px",backgroundColor:"#f5f3ff",color:"#7c3aed",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"},children:"📅"}),l.jsxs("div",{children:[l.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:800,color:"#0f172a"},children:"Campus Events"}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#64748b"},children:"Discover and participate in events organized by different departments."})]})]}),l.jsxs("div",{style:{display:"flex",backgroundColor:"#f1f5f9",padding:"4px",borderRadius:"12px"},children:[l.jsx("button",{onClick:()=>M("grid"),style:{padding:"8px 16px",borderRadius:"9px",border:"none",backgroundColor:x==="grid"?"#ffffff":"transparent",color:x==="grid"?"#2563eb":"#64748b",fontWeight:600,fontSize:"0.85rem",cursor:"pointer",boxShadow:x==="grid"?"0 2px 4px rgba(0,0,0,0.06)":"none"},children:"Grid View"}),l.jsxs("button",{onClick:()=>M("calendar"),style:{padding:"8px 16px",borderRadius:"9px",border:"none",backgroundColor:x==="calendar"?"#ffffff":"transparent",color:x==="calendar"?"#2563eb":"#64748b",fontWeight:600,fontSize:"0.85rem",cursor:"pointer",boxShadow:x==="calendar"?"0 2px 4px rgba(0,0,0,0.06)":"none",display:"flex",alignItems:"center",gap:"6px"},children:[l.jsx(ss,{size:15})," Event Calendar"]}),l.jsxs("button",{onClick:()=>M("registered"),style:{padding:"8px 16px",borderRadius:"9px",border:"none",backgroundColor:x==="registered"?"#ffffff":"transparent",color:x==="registered"?"#2563eb":"#64748b",fontWeight:600,fontSize:"0.85rem",cursor:"pointer",boxShadow:x==="registered"?"0 2px 4px rgba(0,0,0,0.06)":"none",display:"flex",alignItems:"center",gap:"6px"},children:[l.jsx(Xg,{size:15})," My Registered Events"]})]})]}),l.jsxs("div",{className:"card",style:{padding:"20px 24px",marginBottom:"28px",display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#f8fafc",border:"1px solid #cbd5e1",borderRadius:"12px",padding:"10px 16px"},children:[l.jsx(ra,{size:18,color:"#94a3b8"}),l.jsx("input",{type:"text",placeholder:"Search events by title, description, or location...",value:y,onChange:G=>_(G.target.value),style:{border:"none",background:"transparent",outline:"none",width:"100%",fontSize:"0.92rem",color:"#0f172a"}})]}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"#64748b",marginBottom:"8px"},children:"CLASSIFIED BY DEPARTMENT:"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:I.map(G=>{const J=d===G;return l.jsx("button",{onClick:()=>h(G),style:{padding:"6px 14px",borderRadius:"999px",border:J?"1px solid #2563eb":"1px solid #e2e8f0",backgroundColor:J?"#2563eb":"#ffffff",color:J?"#ffffff":"#334155",fontWeight:600,fontSize:"0.82rem",cursor:"pointer",transition:"all 0.15s ease",boxShadow:J?"0 4px 10px rgba(37, 99, 235, 0.2)":"none"},children:G},G)})})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"#64748b"},children:"EVENT STATUS:"}),l.jsx("div",{style:{display:"flex",gap:"8px"},children:D.map(G=>{const J=p===G;return l.jsx("button",{onClick:()=>v(G),style:{padding:"5px 12px",borderRadius:"8px",border:J?"1px solid #7c3aed":"1px solid #e2e8f0",backgroundColor:J?"#f5f3ff":"#ffffff",color:J?"#7c3aed":"#64748b",fontWeight:600,fontSize:"0.8rem",cursor:"pointer"},children:G},G)})}),l.jsxs("span",{style:{fontSize:"0.8rem",color:"#94a3b8",marginLeft:"auto"},children:["Showing: ",l.jsx("strong",{children:d})," • ",l.jsx("strong",{children:p})]})]})]}),x==="calendar"&&l.jsxs("div",{className:"card",style:{padding:"28px",marginBottom:"32px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsxs("h2",{style:{fontSize:"1.35rem",fontWeight:800,color:"#0f172a"},children:[C[S.getMonth()]," ",S.getFullYear()]}),l.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:600,backgroundColor:"#eff6ff",color:"#2563eb",padding:"3px 10px",borderRadius:"999px"},children:["Filtered by ",d]})]}),l.jsxs("div",{style:{display:"flex",gap:"8px"},children:[l.jsxs("button",{onClick:()=>V(-1),className:"btn btn-secondary",style:{padding:"6px 12px"},children:[l.jsx(cE,{size:16})," Prev Month"]}),l.jsxs("button",{onClick:()=>V(1),className:"btn btn-secondary",style:{padding:"6px 12px"},children:["Next Month ",l.jsx(dE,{size:16})]})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px",textAlign:"center"},children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(G=>l.jsx("div",{style:{padding:"8px",fontWeight:700,fontSize:"0.82rem",color:"#64748b",backgroundColor:"#f8fafc",borderRadius:"8px"},children:G},G)),Array.from({length:P}).map((G,J)=>l.jsx("div",{style:{minHeight:"85px",opacity:.3}},`empty-${J}`)),Array.from({length:N}).map((G,J)=>{const X=J+1,Z=`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}-${String(X).padStart(2,"0")}`,re=U.filter(me=>me.date===Z);return l.jsxs("div",{style:{minHeight:"85px",border:"1px solid #e2e8f0",borderRadius:"10px",padding:"8px",textAlign:"left",backgroundColor:re.length>0?"#eff6ff":"#ffffff",transition:"all 0.15s"},children:[l.jsx("div",{style:{fontSize:"0.85rem",fontWeight:700,color:re.length>0?"#2563eb":"#0f172a"},children:X}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:re.map(me=>l.jsx("div",{onClick:()=>A(me),style:{fontSize:"0.7rem",fontWeight:600,backgroundColor:"#2563eb",color:"white",padding:"3px 6px",borderRadius:"6px",cursor:"pointer",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:me.title,children:me.title},me._id))})]},X)})]})]}),a?l.jsx("div",{style:{textAlign:"center",padding:"60px",color:"#64748b"},children:"Loading department events..."}):U.length===0?l.jsxs("div",{className:"card",style:{padding:"50px",textAlign:"center",color:"#64748b"},children:[l.jsx("div",{style:{fontSize:"42px",marginBottom:"10px"},children:"📅"}),l.jsx("h3",{style:{fontSize:"1.2rem",color:"#1e293b"},children:x==="registered"?"No Registered Events Yet":"No Events Match Filter"}),l.jsx("p",{style:{marginTop:"4px",fontSize:"0.9rem"},children:x==="registered"?'Browse the department events list and click "Register" to add them to your calendar.':"Try changing your department or status filter criteria."})]}):l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"24px"},children:U.map(G=>{const J=O(G);return l.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",position:"relative"},children:[l.jsxs("div",{style:{position:"relative",height:"190px",width:"100%",overflow:"hidden"},children:[l.jsx("img",{src:G.image,alt:G.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s ease"},onMouseEnter:X=>X.currentTarget.style.transform="scale(1.04)",onMouseLeave:X=>X.currentTarget.style.transform="scale(1.0)"}),l.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",display:"flex",gap:"6px"},children:[l.jsx("span",{className:`badge badge-${G.department.toLowerCase().replace(/[^a-z]/g,"")}`,style:{boxShadow:"0 2px 6px rgba(0,0,0,0.1)"},children:G.department}),l.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"4px 8px",borderRadius:"999px",backgroundColor:G.status==="Upcoming"?"#dbeafe":G.status==="Ongoing"?"#dcfce7":"#f1f5f9",color:G.status==="Upcoming"?"#1d4ed8":G.status==="Ongoing"?"#15803d":"#64748b"},children:G.status})]}),l.jsx("div",{style:{position:"absolute",bottom:"12px",right:"12px",backgroundColor:"rgba(15, 23, 42, 0.75)",backdropFilter:"blur(4px)",color:"white",fontSize:"0.72rem",fontWeight:600,padding:"3px 10px",borderRadius:"999px"},children:G.category})]}),l.jsxs("div",{style:{padding:"22px",display:"flex",flexDirection:"column",flex:1,gap:"12px"},children:[l.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:700,color:"#0f172a",lineHeight:1.3,cursor:"pointer"},onClick:()=>A(G),children:G.title}),l.jsx("p",{style:{fontSize:"0.88rem",color:"#64748b",lineHeight:1.5,flex:1},children:G.description}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",padding:"12px",borderRadius:"10px",backgroundColor:"#f8fafc",fontSize:"0.82rem",color:"#334155"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(ss,{size:14,color:"#2563eb"}),l.jsx("strong",{children:"Date:"})," ",G.date]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(bf,{size:14,color:"#7c3aed"}),l.jsx("strong",{children:"Time:"})," ",G.time]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(Kg,{size:14,color:"#ea580c"}),l.jsx("strong",{children:"Location:"})," ",G.location]})]}),G.externalUrl&&l.jsxs("a",{href:G.externalUrl,target:"_blank",rel:"noreferrer",style:{fontSize:"0.8rem",fontWeight:600,color:"#2563eb",display:"inline-flex",alignItems:"center",gap:"4px"},children:["Official National Portal ",l.jsx(Ko,{size:13})]}),l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:[l.jsx("button",{onClick:X=>W(G._id,X),className:J?"btn btn-success":"btn btn-primary",style:{flex:1,padding:"9px",fontSize:"0.88rem",borderRadius:"10px"},children:J?l.jsxs(l.Fragment,{children:[l.jsx(ef,{size:16})," Registered"]}):"Register"}),l.jsx("button",{onClick:()=>A(G),className:"btn btn-secondary",style:{padding:"9px 14px",fontSize:"0.88rem",borderRadius:"10px"},children:"View Details"})]})]})]},G._id)})}),b&&l.jsx("div",{className:"modal-overlay",onClick:()=>A(null),children:l.jsxs("div",{className:"modal-content",onClick:G=>G.stopPropagation(),style:{maxWidth:"640px"},children:[l.jsxs("div",{style:{position:"relative",height:"220px",width:"100%"},children:[l.jsx("img",{src:b.image,alt:b.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),l.jsx("button",{onClick:()=>A(null),style:{position:"absolute",top:"14px",right:"14px",backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",border:"none",borderRadius:"50%",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:l.jsx(ls,{size:18})})]}),l.jsxs("div",{style:{padding:"28px"},children:[l.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"10px"},children:[l.jsx("span",{className:`badge badge-${b.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:b.department}),l.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"3px 8px",borderRadius:"999px",backgroundColor:"#eff6ff",color:"#2563eb"},children:b.category})]}),l.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a",marginBottom:"8px"},children:b.title}),l.jsx("p",{style:{fontSize:"0.94rem",color:"#475569",lineHeight:1.6,marginBottom:"20px"},children:b.description}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",backgroundColor:"#f8fafc",padding:"16px",borderRadius:"12px",marginBottom:"20px"},children:[l.jsxs("div",{style:{fontSize:"0.85rem"},children:[l.jsx("div",{style:{color:"#64748b",fontSize:"0.75rem",fontWeight:600},children:"DATE"}),l.jsx("div",{style:{fontWeight:700,color:"#1e293b"},children:b.date})]}),l.jsxs("div",{style:{fontSize:"0.85rem"},children:[l.jsx("div",{style:{color:"#64748b",fontSize:"0.75rem",fontWeight:600},children:"TIME"}),l.jsx("div",{style:{fontWeight:700,color:"#1e293b"},children:b.time})]}),l.jsxs("div",{style:{fontSize:"0.85rem"},children:[l.jsx("div",{style:{color:"#64748b",fontSize:"0.75rem",fontWeight:600},children:"LOCATION"}),l.jsx("div",{style:{fontWeight:700,color:"#1e293b"},children:b.location})]}),l.jsxs("div",{style:{fontSize:"0.85rem"},children:[l.jsx("div",{style:{color:"#64748b",fontSize:"0.75rem",fontWeight:600},children:"ORGANIZED BY"}),l.jsx("div",{style:{fontWeight:700,color:"#1e293b"},children:b.organizer||"Department Cell"})]})]}),b.externalUrl&&l.jsxs("div",{style:{padding:"14px",backgroundColor:"#eff6ff",borderRadius:"12px",border:"1px solid #bfdbfe",marginBottom:"20px"},children:[l.jsx("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"#1e40af"},children:"Original External Registration Link"}),l.jsx("p",{style:{fontSize:"0.8rem",color:"#1d4ed8",marginTop:"2px",marginBottom:"8px"},children:"Access official hackathon problem statements, rules, and national team portal."}),l.jsxs("a",{href:b.externalUrl,target:"_blank",rel:"noreferrer",className:"btn btn-primary",style:{fontSize:"0.82rem",padding:"7px 14px"},children:["Open ",b.externalUrl," ",l.jsx(Ko,{size:14})]})]}),l.jsxs("div",{style:{display:"flex",gap:"12px"},children:[l.jsx("button",{onClick:G=>W(b._id,G),className:O(b)?"btn btn-success":"btn btn-primary",style:{flex:1,padding:"12px",borderRadius:"12px",fontSize:"0.95rem"},children:O(b)?"Cancel Registration":"Register for Event"}),l.jsx("button",{onClick:()=>A(null),className:"btn btn-secondary",style:{padding:"12px 20px",borderRadius:"12px"},children:"Close"})]})]})]})})]})},nb=()=>{var Ke,j;const{user:s,showToast:e}=Si(),[n,r]=ge.useState([]),[a,c]=ge.useState(!0),[d,h]=ge.useState("All"),[p,v]=ge.useState("All"),[y,_]=ge.useState("hub"),[x,M]=ge.useState([]),[b,A]=ge.useState([]),[S,g]=ge.useState(!1),[I,D]=ge.useState(""),[T,W]=ge.useState(""),[O,U]=ge.useState(new Set),[N,P]=ge.useState(!1),[C,V]=ge.useState(""),[G,J]=ge.useState("CSE"),[X,Z]=ge.useState(""),[re,me]=ge.useState("React, Python, Machine Learning"),[F,de]=ge.useState(4),[k,E]=ge.useState(""),[K,Se]=ge.useState(!1),[$,le]=ge.useState(null),xe=["All","CSE","ECE","AI & ML","IT","EEE","MECH","CIVIL","MBA"],ue=["All","Open","Looking for Members","In Progress","Completed"],ye=async()=>{try{c(!0);const ve=await wt.getProjects({department:d,status:p});ve.success&&r(ve.projects)}catch(ve){console.error("Error fetching projects:",ve)}finally{c(!1)}},Ue=async()=>{try{g(!0);const ve=await wt.getMatches({skills:I||(s!=null&&s.skills?s.skills.join(","):""),department:T||(s==null?void 0:s.department)||""});ve.success&&(M(ve.teammateMatches),A(ve.recommendedProjects||[]))}catch(ve){console.error("Error calculating smart matches:",ve)}finally{g(!1)}};ge.useEffect(()=>{ye()},[d,p]),ge.useEffect(()=>{Ue()},[I,T]);const De=async ve=>{try{const Le=await wt.joinProject(ve,"Contributor");Le.success&&(r(Xe=>Xe.map(Fe=>Fe._id===ve?Le.project:Fe)),$&&$._id===ve&&le(Le.project),Zg({particleCount:70,spread:60,origin:{y:.7},colors:["#2563eb","#7c3aed"]}),e(`You have joined ${Le.project.title}!`,"success"))}catch(Le){e(Le.message||"Failed to join project","error")}},et=async ve=>{if(ve.preventDefault(),!(!C||!X))try{Se(!0);const Le=await wt.createProject({title:C,description:X,department:G,skills:re.split(",").map(Xe=>Xe.trim()),maxMembers:Number(F),githubUrl:k});Le.success&&(r([Le.project,...n]),P(!1),V(""),Z(""),E(""),e("Project idea posted to collaboration hub!","success"))}catch(Le){e(Le.message||"Failed to create project","error")}finally{Se(!1)}},rt=(ve,Le)=>{U(Xe=>new Set(Xe).add(ve)),e(`Collaboration invitation sent to ${Le}!`,"success")};return l.jsxs("div",{className:"page-wrapper",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"16px",marginBottom:"26px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"14px",backgroundColor:"#eff6ff",color:"#2563eb",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"},children:"🤝"}),l.jsxs("div",{children:[l.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:800,color:"#0f172a"},children:"Project Collaboration Hub"}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#64748b"},children:"Connect with skilled campus teammates, form multidisciplinary squads, and build real-world systems."})]})]}),l.jsx("div",{style:{display:"flex",gap:"10px"},children:l.jsxs("button",{onClick:()=>P(!0),className:"btn btn-primary",style:{padding:"10px 18px",fontSize:"0.9rem"},children:[l.jsx(Zo,{size:18})," Post Project Idea"]})})]}),l.jsxs("div",{style:{display:"flex",backgroundColor:"#f1f5f9",padding:"4px",borderRadius:"12px",width:"fit-content",marginBottom:"24px"},children:[l.jsxs("button",{onClick:()=>_("hub"),style:{padding:"8px 20px",borderRadius:"9px",border:"none",backgroundColor:y==="hub"?"#ffffff":"transparent",color:y==="hub"?"#2563eb":"#64748b",fontWeight:600,fontSize:"0.88rem",cursor:"pointer",boxShadow:y==="hub"?"0 2px 4px rgba(0,0,0,0.06)":"none"},children:["All Collaboration Projects (",n.length,")"]}),l.jsxs("button",{onClick:()=>_("matching"),style:{padding:"8px 20px",borderRadius:"9px",border:"none",backgroundColor:y==="matching"?"#ffffff":"transparent",color:y==="matching"?"#7c3aed":"#64748b",fontWeight:600,fontSize:"0.88rem",cursor:"pointer",boxShadow:y==="matching"?"0 2px 4px rgba(0,0,0,0.06)":"none",display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx($l,{size:16,color:"#7c3aed"}),"💡 Smart Teammate Matching",l.jsx("span",{style:{fontSize:"0.68rem",backgroundColor:"#f3e8ff",color:"#7c3aed",padding:"1px 6px",borderRadius:"999px"},children:"AI Powered"})]})]}),y==="matching"&&l.jsxs("div",{style:{marginBottom:"32px"},children:[l.jsxs("div",{style:{background:"linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%)",border:"1px solid #ddd6fe",borderRadius:"20px",padding:"24px 28px",marginBottom:"26px",boxShadow:"0 4px 15px rgba(124, 58, 237, 0.05)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px"},children:[l.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",backgroundColor:"#7c3aed",color:"white",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx($l,{size:20})}),l.jsx("h2",{style:{fontSize:"1.35rem",fontWeight:800,color:"#4c1d95"},children:"Smart Teammate Matching Engine"})]}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#5b21b6",lineHeight:1.5,maxWidth:"800px"},children:"The system analyzes student skillsets, department synergies, and collaborative project requirements to compute multi-factor compatibility scores. Prioritizes matching skills, shared departmental domain, and complementary competencies."}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"14px",marginTop:"18px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.78rem",fontWeight:700,color:"#4c1d95",display:"block",marginBottom:"4px"},children:"Target Skills (comma separated):"}),l.jsx("input",{type:"text",placeholder:"e.g. Python, React, AI, Machine Learning",value:I,onChange:ve=>D(ve.target.value),style:{width:"100%",padding:"8px 14px",borderRadius:"10px",border:"1px solid #c4b5fd",backgroundColor:"white",fontSize:"0.85rem"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.78rem",fontWeight:700,color:"#4c1d95",display:"block",marginBottom:"4px"},children:"Target Department:"}),l.jsxs("select",{value:T,onChange:ve=>W(ve.target.value),style:{width:"100%",padding:"8px 14px",borderRadius:"10px",border:"1px solid #c4b5fd",backgroundColor:"white",fontSize:"0.85rem"},children:[l.jsx("option",{value:"",children:"All Departments (Multi-disciplinary)"}),xe.filter(ve=>ve!=="All").map(ve=>l.jsxs("option",{value:ve,children:[ve," Department"]},ve))]})]})]})]}),l.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"#0f172a",marginBottom:"16px"},children:"Recommended Student Teammates"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"20px",marginBottom:"36px"},children:x.map(ve=>{const Le=ve.student,Xe=O.has(Le._id);return l.jsxs("div",{className:"card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"14px",border:ve.matchPercentage>=80?"1.5px solid #a78bfa":"1px solid #e2e8f0",boxShadow:ve.matchPercentage>=80?"0 8px 20px -3px rgba(124, 58, 237, 0.12)":"none"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("img",{src:Le.profileImage,alt:Le.name,style:{width:"52px",height:"52px",borderRadius:"14px",objectFit:"cover",border:"2px solid #ddd6fe"}}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:700,fontSize:"1.05rem",color:"#0f172a"},children:Le.name}),l.jsxs("div",{style:{fontSize:"0.78rem",color:"#64748b"},children:[Le.department," • ",Le.year]})]})]}),l.jsxs("div",{style:{textAlign:"center",backgroundColor:"#f5f3ff",padding:"6px 12px",borderRadius:"12px",border:"1px solid #ddd6fe"},children:[l.jsxs("div",{style:{fontSize:"1.15rem",fontWeight:800,color:"#7c3aed",lineHeight:1},children:[ve.matchPercentage,"%"]}),l.jsx("div",{style:{fontSize:"0.65rem",fontWeight:700,color:"#6d28d9"},children:"Match"})]})]}),l.jsx("p",{style:{fontSize:"0.84rem",color:"#475569",lineHeight:1.45},children:Le.bio}),l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:"0.72rem",fontWeight:700,color:"#64748b",marginBottom:"6px"},children:["COMMON SKILLS (",ve.commonSkills.length,"):"]}),l.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:[ve.commonSkills.map(Fe=>l.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:600,padding:"3px 8px",borderRadius:"999px",backgroundColor:"#eff6ff",color:"#1d4ed8",border:"1px solid #bfdbfe"},children:["✓ ",Fe]},Fe)),Le.skills.filter(Fe=>!ve.commonSkills.includes(Fe)).map(Fe=>l.jsx("span",{style:{fontSize:"0.72rem",padding:"3px 8px",borderRadius:"999px",backgroundColor:"#f1f5f9",color:"#64748b"},children:Fe},Fe))]})]}),l.jsx("button",{onClick:()=>rt(Le._id,Le.name),disabled:Xe,className:Xe?"btn btn-secondary":"btn btn-primary",style:{width:"100%",padding:"9px",fontSize:"0.88rem",marginTop:"auto"},children:Xe?l.jsxs(l.Fragment,{children:[l.jsx(ef,{size:15,color:"#10b981"})," Request Sent"]}):l.jsxs(l.Fragment,{children:[l.jsx(jE,{size:15})," Connect & Invite to Project"]})})]},Le._id)})})]}),y==="hub"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"card",style:{padding:"16px 20px",marginBottom:"26px",display:"flex",flexDirection:"column",gap:"14px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"#64748b",marginRight:"6px"},children:"Department:"}),xe.map(ve=>{const Le=d===ve;return l.jsx("button",{onClick:()=>h(ve),style:{padding:"5px 12px",borderRadius:"999px",border:Le?"1px solid #2563eb":"1px solid #e2e8f0",backgroundColor:Le?"#2563eb":"#ffffff",color:Le?"#ffffff":"#475569",fontWeight:600,fontSize:"0.8rem",cursor:"pointer"},children:ve},ve)})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"#64748b",marginRight:"6px"},children:"Status:"}),ue.map(ve=>{const Le=p===ve;return l.jsx("button",{onClick:()=>v(ve),style:{padding:"4px 10px",borderRadius:"8px",border:Le?"1px solid #7c3aed":"1px solid #e2e8f0",backgroundColor:Le?"#f5f3ff":"#ffffff",color:Le?"#7c3aed":"#64748b",fontWeight:600,fontSize:"0.78rem",cursor:"pointer"},children:ve},ve)})]})]}),a?l.jsx("div",{style:{textAlign:"center",padding:"60px",color:"#64748b"},children:"Loading project collaboration directory..."}):n.length===0?l.jsxs("div",{className:"card",style:{padding:"50px",textAlign:"center",color:"#64748b"},children:[l.jsx("div",{style:{fontSize:"42px",marginBottom:"10px"},children:"🤝"}),l.jsx("h3",{style:{fontSize:"1.2rem",color:"#1e293b"},children:"No Projects Found"}),l.jsx("p",{style:{marginTop:"4px",fontSize:"0.9rem"},children:"Be the first to post a new project idea for your department!"})]}):l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(360px, 1fr))",gap:"24px"},children:n.map(ve=>{const Le=s&&ve.members&&ve.members.some(Xe=>Xe.email===s.email);return s&&ve.owner&&(ve.owner.email,s.email),l.jsxs("div",{className:"card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"14px",position:"relative"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:`badge badge-${ve.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:ve.department}),l.jsx("span",{style:{fontSize:"0.74rem",fontWeight:700,padding:"3px 10px",borderRadius:"999px",backgroundColor:ve.status==="Open"?"#dcfce7":ve.status==="Looking for Members"?"#eff6ff":ve.status==="In Progress"?"#fef3c7":"#f1f5f9",color:ve.status==="Open"?"#15803d":ve.status==="Looking for Members"?"#1d4ed8":ve.status==="In Progress"?"#b45309":"#475569"},children:ve.status})]}),l.jsx("h3",{style:{fontSize:"1.22rem",fontWeight:700,color:"#0f172a",cursor:"pointer",lineHeight:1.3},onClick:()=>le(ve),children:ve.title}),l.jsx("p",{style:{fontSize:"0.88rem",color:"#64748b",lineHeight:1.5,flex:1},children:ve.description}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.72rem",fontWeight:700,color:"#94a3b8",marginBottom:"6px"},children:"REQUIRED SKILLS:"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:ve.skills.map(Xe=>l.jsx("span",{style:{fontSize:"0.72rem",fontWeight:600,padding:"2px 8px",borderRadius:"6px",backgroundColor:"#f1f5f9",color:"#334155"},children:Xe},Xe))})]}),l.jsxs("div",{style:{padding:"12px",backgroundColor:"#f8fafc",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.7rem",color:"#94a3b8",fontWeight:700},children:"PROJECT LEAD"}),l.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:600,color:"#1e293b"},children:[ve.owner.name," (",ve.owner.department,")"]})]}),l.jsxs("div",{style:{textAlign:"right"},children:[l.jsx("div",{style:{fontSize:"0.7rem",color:"#94a3b8",fontWeight:700},children:"TEAM ROSTER"}),l.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:600,color:"#2563eb"},children:[ve.members?ve.members.length:1," / ",ve.maxMembers||4," Members"]})]})]}),l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.72rem",color:"#64748b",marginBottom:"4px"},children:[l.jsx("span",{children:"Progress"}),l.jsxs("span",{children:[ve.progress||25,"%"]})]}),l.jsx("div",{style:{height:"6px",backgroundColor:"#e2e8f0",borderRadius:"999px",overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:`${ve.progress||25}%`,background:"linear-gradient(90deg, #2563eb, #7c3aed)"}})})]}),l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:[Le?l.jsxs("div",{style:{flex:1,padding:"9px",borderRadius:"10px",backgroundColor:"#ecfdf5",color:"#059669",fontWeight:600,fontSize:"0.84rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[l.jsx(ef,{size:15})," Member of Team"]}):l.jsx("button",{onClick:()=>De(ve._id),className:"btn btn-primary",style:{flex:1,padding:"9px",fontSize:"0.88rem"},children:"Join Project"}),l.jsx("button",{onClick:()=>le(ve),className:"btn btn-secondary",style:{padding:"9px 14px",fontSize:"0.88rem"},children:"Details"})]})]},ve._id)})})]}),N&&l.jsx("div",{className:"modal-overlay",onClick:()=>P(!1),children:l.jsxs("div",{className:"modal-content",onClick:ve=>ve.stopPropagation(),style:{padding:"32px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"18px"},children:[l.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,color:"#0f172a"},children:"Post Project Idea"}),l.jsx("button",{onClick:()=>P(!1),style:{background:"none",border:"none",color:"#64748b",cursor:"pointer"},children:l.jsx(ls,{size:20})})]}),l.jsxs("form",{onSubmit:et,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Project Title"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Autonomous Campus Delivery Drone",value:C,onChange:ve=>V(ve.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Department"}),l.jsx("select",{value:G,onChange:ve=>J(ve.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"},children:xe.filter(ve=>ve!=="All").map(ve=>l.jsx("option",{value:ve,children:ve},ve))})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Max Team Members"}),l.jsx("input",{type:"number",min:"2",max:"8",value:F,onChange:ve=>de(ve.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Required Skills (comma separated)"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Python, ROS, OpenCV, Raspberry Pi",value:re,onChange:ve=>me(ve.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Project Description & Goals"}),l.jsx("textarea",{rows:"4",required:!0,placeholder:"Explain the project scope, intended deliverables, and who you're looking for...",value:X,onChange:ve=>Z(ve.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"GitHub Repository (optional)"}),l.jsx("input",{type:"url",placeholder:"https://github.com/username/project",value:k,onChange:ve=>E(ve.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"10px"},children:[l.jsx("button",{type:"submit",disabled:K,className:"btn btn-primary",style:{flex:1,padding:"11px",borderRadius:"10px"},children:K?"Publishing...":"Publish to Collaboration Hub"}),l.jsx("button",{type:"button",onClick:()=>P(!1),className:"btn btn-secondary",style:{padding:"11px 20px",borderRadius:"10px"},children:"Cancel"})]})]})]})}),$&&l.jsx("div",{className:"modal-overlay",onClick:()=>le(null),children:l.jsxs("div",{className:"modal-content",onClick:ve=>ve.stopPropagation(),style:{padding:"32px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"14px"},children:[l.jsxs("div",{style:{display:"flex",gap:"8px"},children:[l.jsx("span",{className:`badge badge-${$.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:$.department}),l.jsx("span",{style:{fontSize:"0.74rem",fontWeight:700,padding:"3px 10px",borderRadius:"999px",backgroundColor:"#eff6ff",color:"#1d4ed8"},children:$.status})]}),l.jsx("button",{onClick:()=>le(null),style:{background:"none",border:"none",color:"#64748b",cursor:"pointer"},children:l.jsx(ls,{size:20})})]}),l.jsx("h2",{style:{fontSize:"1.45rem",fontWeight:800,color:"#0f172a",marginBottom:"10px"},children:$.title}),l.jsx("p",{style:{fontSize:"0.94rem",color:"#475569",lineHeight:1.6,marginBottom:"20px"},children:$.description}),l.jsxs("div",{style:{backgroundColor:"#f8fafc",padding:"16px",borderRadius:"12px",marginBottom:"18px"},children:[l.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"#1e293b",marginBottom:"10px"},children:["TEAM MEMBERS (",((Ke=$.members)==null?void 0:Ke.length)||1," / ",$.maxMembers||4,"):"]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:(j=$.members)==null?void 0:j.map((ve,Le)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.84rem"},children:[l.jsxs("div",{style:{fontWeight:600,color:"#334155"},children:["👤 ",ve.name]}),l.jsx("span",{style:{fontSize:"0.75rem",color:"#64748b",backgroundColor:"#e2e8f0",padding:"2px 8px",borderRadius:"6px"},children:ve.role||"Contributor"})]},Le))})]}),$.githubUrl&&l.jsx("div",{style:{marginBottom:"20px"},children:l.jsxs("a",{href:$.githubUrl,target:"_blank",rel:"noreferrer",className:"btn btn-outline",style:{width:"100%",justifyContent:"center"},children:[l.jsx(EE,{size:16})," View GitHub Repository"]})}),l.jsx("button",{onClick:()=>De($._id),className:"btn btn-primary",style:{width:"100%",padding:"11px",borderRadius:"10px"},children:"Join Project Collaboration Squad"})]})})]})},ib=()=>{const{user:s,showToast:e}=Si(),[n,r]=ge.useState([]),[a,c]=ge.useState(!0),[d,h]=ge.useState("All Departments"),[p,v]=ge.useState(""),[y,_]=ge.useState("All"),[x,M]=ge.useState(!1),[b,A]=ge.useState(""),[S,g]=ge.useState("CSE"),[I,D]=ge.useState(""),[T,W]=ge.useState(""),[O,U]=ge.useState(""),[N,P]=ge.useState("PDF"),[C,V]=ge.useState(!1),G=["All Departments","CSE","ECE","AI & ML","IT","Other Departments"],J={CSE:["Data Structures","Algorithms","Operating Systems","DBMS","Web Development"],ECE:["Digital Electronics","Microprocessors","Embedded Systems","Communication Systems"],"AI & ML":["Python","Machine Learning","Deep Learning","Data Science"],IT:["Networking","Cloud Computing","Cybersecurity","Database Systems"]},X=async()=>{try{c(!0);const F=await wt.getResources({department:d,search:p});F.success&&r(F.resources)}catch(F){console.error("Error fetching resources:",F)}finally{c(!1)}};ge.useEffect(()=>{X()},[d,p]);const Z=async F=>{if(F.preventDefault(),!(!b||!I||!O))try{V(!0);const de=await wt.createResource({title:b,department:S,subject:I,description:T,link:O,fileType:N});de.success&&(r([de.resource,...n]),M(!1),A(""),D(""),W(""),U(""),e("Study resource published successfully!","success"))}catch(de){e(de.message||"Upload failed","error")}finally{V(!1)}},re=n.filter(F=>y==="All"?!0:F.subject.toLowerCase()===y.toLowerCase()),me=F=>{switch(F){case"PDF":return"📄";case"Slides":return"📊";case"Code":return"💻";case"Document":return"📝";default:return"📁"}};return l.jsxs("div",{className:"page-wrapper",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"16px",marginBottom:"26px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"14px",backgroundColor:"#ecfdf5",color:"#059669",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"},children:"📚"}),l.jsxs("div",{children:[l.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:800,color:"#0f172a"},children:"Study Resources"}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#64748b"},children:"Peer-reviewed syllabus notes, lecture slides, question banks, and code repositories."})]})]}),l.jsxs("button",{onClick:()=>M(!0),className:"btn btn-primary",style:{padding:"10px 18px",fontSize:"0.9rem"},children:[l.jsx(qE,{size:17})," Upload Notes / Share Link"]})]}),l.jsxs("div",{className:"card",style:{padding:"20px 24px",marginBottom:"28px",display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#f8fafc",border:"1px solid #cbd5e1",borderRadius:"12px",padding:"10px 16px"},children:[l.jsx(ra,{size:18,color:"#94a3b8"}),l.jsx("input",{type:"text",placeholder:"Search by topic, subject (e.g. Operating Systems, Microprocessors, Deep Learning)...",value:p,onChange:F=>v(F.target.value),style:{border:"none",background:"transparent",outline:"none",width:"100%",fontSize:"0.92rem",color:"#0f172a"}})]}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"#64748b",marginBottom:"8px"},children:"DEPARTMENT REPOSITORY:"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:G.map(F=>{const de=d===F;return l.jsx("button",{onClick:()=>{h(F),_("All")},style:{padding:"6px 14px",borderRadius:"999px",border:de?"1px solid #059669":"1px solid #e2e8f0",backgroundColor:de?"#059669":"#ffffff",color:de?"#ffffff":"#334155",fontWeight:600,fontSize:"0.82rem",cursor:"pointer",transition:"all 0.15s",boxShadow:de?"0 4px 10px rgba(5, 150, 105, 0.2)":"none"},children:F},F)})})]}),d!=="All Departments"&&J[d]&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",paddingTop:"6px"},children:[l.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#64748b"},children:"SUBJECTS:"}),l.jsx("button",{onClick:()=>_("All"),style:{padding:"4px 10px",borderRadius:"6px",border:y==="All"?"1px solid #059669":"1px solid #e2e8f0",backgroundColor:y==="All"?"#ecfdf5":"#ffffff",color:y==="All"?"#059669":"#64748b",fontWeight:600,fontSize:"0.76rem",cursor:"pointer"},children:"All Subjects"}),J[d].map(F=>l.jsx("button",{onClick:()=>_(F),style:{padding:"4px 10px",borderRadius:"6px",border:y===F?"1px solid #059669":"1px solid #e2e8f0",backgroundColor:y===F?"#ecfdf5":"#ffffff",color:y===F?"#059669":"#64748b",fontWeight:600,fontSize:"0.76rem",cursor:"pointer"},children:F},F))]})]}),a?l.jsx("div",{style:{textAlign:"center",padding:"60px",color:"#64748b"},children:"Loading campus study resources..."}):re.length===0?l.jsxs("div",{className:"card",style:{padding:"50px",textAlign:"center",color:"#64748b"},children:[l.jsx("div",{style:{fontSize:"42px",marginBottom:"10px"},children:"📚"}),l.jsx("h3",{style:{fontSize:"1.2rem",color:"#1e293b"},children:"No Resources Found"}),l.jsx("p",{style:{marginTop:"4px",fontSize:"0.9rem"},children:"Try another subject filter or be the first to upload lecture notes!"})]}):l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:"22px"},children:re.map(F=>l.jsxs("div",{className:"card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"12px",position:"relative"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:`badge badge-${F.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:F.department}),l.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"3px 8px",borderRadius:"6px",backgroundColor:"#f1f5f9",color:"#475569"},children:[me(F.fileType)," ",F.fileType," • ",F.fileSize||"3.5 MB"]})]}),l.jsxs("div",{style:{fontSize:"0.78rem",fontWeight:700,color:"#059669",backgroundColor:"#ecfdf5",padding:"3px 8px",borderRadius:"6px",width:"fit-content"},children:["Subject: ",F.subject]}),l.jsx("h3",{style:{fontSize:"1.18rem",fontWeight:700,color:"#0f172a",lineHeight:1.3},children:F.title}),l.jsx("p",{style:{fontSize:"0.86rem",color:"#64748b",lineHeight:1.5,flex:1},children:F.description}),l.jsxs("div",{style:{padding:"10px 12px",borderRadius:"8px",backgroundColor:"#f8fafc",fontSize:"0.78rem",color:"#64748b",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Uploaded By:"})," ",F.uploadedBy]}),l.jsxs("div",{children:[F.downloads||140," downloads"]})]}),l.jsxs("a",{href:F.link,target:"_blank",rel:"noreferrer",className:"btn btn-outline",style:{marginTop:"6px",padding:"9px",borderRadius:"10px",fontSize:"0.88rem",justifyContent:"center"},children:[l.jsx(yE,{size:16})," Open / Download Resource"]})]},F._id))}),x&&l.jsx("div",{className:"modal-overlay",onClick:()=>M(!1),children:l.jsxs("div",{className:"modal-content",onClick:F=>F.stopPropagation(),style:{padding:"32px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"18px"},children:[l.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,color:"#0f172a"},children:"Upload Study Resource"}),l.jsx("button",{onClick:()=>M(!1),style:{background:"none",border:"none",color:"#64748b",cursor:"pointer"},children:l.jsx(ls,{size:20})})]}),l.jsxs("form",{onSubmit:Z,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Resource Title"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Complete Microprocessor 8051 Handwritten Notes",value:b,onChange:F=>A(F.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Department"}),l.jsx("select",{value:S,onChange:F=>g(F.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"},children:G.filter(F=>F!=="All Departments").map(F=>l.jsx("option",{value:F,children:F},F))})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Subject / Topic"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Operating Systems",value:I,onChange:F=>D(F.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Resource URL / Google Drive / GitHub Link"}),l.jsx("input",{type:"url",required:!0,placeholder:"https://drive.google.com/... or github.com/...",value:O,onChange:F=>U(F.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Format / File Type"}),l.jsxs("select",{value:N,onChange:F=>P(F.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"},children:[l.jsx("option",{value:"PDF",children:"PDF Handout"}),l.jsx("option",{value:"Slides",children:"Lecture Slides"}),l.jsx("option",{value:"Code",children:"Code Repository"}),l.jsx("option",{value:"Document",children:"Word Document / Notes"}),l.jsx("option",{value:"Drive",children:"Google Drive Folder"})]})]})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Description & Key Topics Covered"}),l.jsx("textarea",{rows:"3",placeholder:"Outline chapters, syllabus unit codes, or exam review topics covered...",value:T,onChange:F=>W(F.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:[l.jsx("button",{type:"submit",disabled:C,className:"btn btn-primary",style:{flex:1,padding:"11px",borderRadius:"10px"},children:C?"Sharing...":"Publish to Resource Vault"}),l.jsx("button",{type:"button",onClick:()=>M(!1),className:"btn btn-secondary",style:{padding:"11px 20px",borderRadius:"10px"},children:"Cancel"})]})]})]})})]})},rb=()=>{const{user:s,showToast:e}=Si(),[n,r]=ge.useState([]),[a,c]=ge.useState(!0),[d,h]=ge.useState("All"),[p,v]=ge.useState(!1),[y,_]=ge.useState(""),[x,M]=ge.useState("IT & Infrastructure"),[b,A]=ge.useState("Technical problems"),[S,g]=ge.useState(""),[I,D]=ge.useState(!1),[T,W]=ge.useState("Medium"),[O,U]=ge.useState(!1),N=["Campus issues","Infrastructure problems","Technical problems","General complaints","Feedback"],P=["Submitted","Under Review","In Progress","Resolved"],C=async()=>{try{c(!0);const X=await wt.getComplaints();X.success&&r(X.complaints)}catch(X){console.error("Error fetching complaints:",X)}finally{c(!1)}};ge.useEffect(()=>{C()},[]);const V=async X=>{if(X.preventDefault(),!(!y||!S))try{U(!0);const Z=await wt.createComplaint({title:y,department:x,category:b,description:S,anonymous:I,priority:T});Z.success&&(r([Z.complaint,...n]),v(!1),_(""),g(""),D(!1),e("Ticket submitted! You can track resolution live.","success"))}catch(Z){e(Z.message||"Failed to submit complaint","error")}finally{U(!1)}},G=X=>{switch(X){case"Submitted":return 0;case"Under Review":return 1;case"In Progress":return 2;case"Resolved":return 3;default:return 0}},J=n.filter(X=>d==="All"?!0:X.status===d);return l.jsxs("div",{className:"page-wrapper",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"16px",marginBottom:"26px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"14px",backgroundColor:"#fff7ed",color:"#ea580c",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"},children:"📝"}),l.jsxs("div",{children:[l.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:800,color:"#0f172a"},children:"Campus Complaints & Feedback"}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#64748b"},children:"Transparent campus issue reporting and resolution timeline tracking."})]})]}),l.jsxs("button",{onClick:()=>v(!0),className:"btn btn-primary",style:{padding:"10px 18px",fontSize:"0.9rem"},children:[l.jsx(Zo,{size:18})," Lodge Campus Issue / Feedback"]})]}),l.jsxs("div",{className:"card",style:{padding:"16px 20px",marginBottom:"28px",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:"0.82rem",fontWeight:700,color:"#64748b",marginRight:"6px"},children:"Filter by Stage:"}),["All",...P].map(X=>{const Z=d===X;return l.jsx("button",{onClick:()=>h(X),style:{padding:"5px 14px",borderRadius:"8px",border:Z?"1px solid #ea580c":"1px solid #e2e8f0",backgroundColor:Z?"#ea580c":"#ffffff",color:Z?"#ffffff":"#475569",fontWeight:600,fontSize:"0.82rem",cursor:"pointer",transition:"all 0.15s"},children:X},X)}),l.jsxs("span",{style:{fontSize:"0.8rem",color:"#94a3b8",marginLeft:"auto"},children:[J.length," Reported Issue(s)"]})]}),a?l.jsx("div",{style:{textAlign:"center",padding:"60px",color:"#64748b"},children:"Loading complaint history..."}):J.length===0?l.jsxs("div",{className:"card",style:{padding:"50px",textAlign:"center",color:"#64748b"},children:[l.jsx("div",{style:{fontSize:"42px",marginBottom:"10px"},children:"🎉"}),l.jsx("h3",{style:{fontSize:"1.2rem",color:"#1e293b"},children:"No Issues Reported Under This Filter"}),l.jsx("p",{style:{marginTop:"4px",fontSize:"0.9rem"},children:"All campus systems and infrastructure are operating smoothly."})]}):l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:J.map(X=>{const Z=G(X.status);return l.jsxs("div",{className:"card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"18px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"10px"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[l.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,backgroundColor:"#f1f5f9",color:"#475569",padding:"3px 8px",borderRadius:"6px"},children:X.category}),l.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,backgroundColor:"#eff6ff",color:"#1d4ed8",padding:"3px 8px",borderRadius:"6px"},children:X.department}),X.anonymous&&l.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,backgroundColor:"#fef3c7",color:"#b45309",padding:"3px 8px",borderRadius:"6px"},children:"🔒 Anonymous Report"})]}),l.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:700,color:"#0f172a"},children:X.title})]}),l.jsxs("span",{style:{fontSize:"0.74rem",fontWeight:700,padding:"4px 10px",borderRadius:"999px",backgroundColor:X.priority==="Urgent"?"#fee2e2":X.priority==="High"?"#ffedd5":"#eff6ff",color:X.priority==="Urgent"?"#dc2626":X.priority==="High"?"#c2410c":"#2563eb"},children:["Priority: ",X.priority||"Medium"]})]}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#475569",lineHeight:1.6},children:X.description}),l.jsxs("div",{style:{padding:"20px",borderRadius:"14px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0"},children:[l.jsx("div",{style:{fontSize:"0.76rem",fontWeight:700,color:"#64748b",marginBottom:"16px"},children:"RESOLUTION TIMELINE:"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",position:"relative",gap:"12px"},children:[l.jsx("div",{style:{position:"absolute",top:"14px",left:"12%",right:"12%",height:"4px",backgroundColor:"#e2e8f0",zIndex:1},children:l.jsx("div",{style:{height:"100%",width:`${Z/3*100}%`,backgroundColor:"#10b981",transition:"width 0.4s ease"}})}),P.map((re,me)=>{const F=me<=Z,de=me===Z;return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",zIndex:2,textAlign:"center"},children:[l.jsx("div",{style:{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:F?"#10b981":"#ffffff",border:de?"3px solid #059669":F?"2px solid #10b981":"2px solid #cbd5e1",color:F?"white":"#94a3b8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:700,boxShadow:de?"0 0 0 4px rgba(16, 185, 129, 0.2)":"none",marginBottom:"8px"},children:F?"✓":me+1}),l.jsx("div",{style:{fontSize:"0.8rem",fontWeight:de?700:600,color:de?"#047857":F?"#1e293b":"#94a3b8"},children:re})]},re)})]}),X.adminRemarks&&l.jsxs("div",{style:{marginTop:"16px",padding:"10px 14px",borderRadius:"8px",backgroundColor:"#ffffff",border:"1px solid #e2e8f0",fontSize:"0.82rem",color:"#334155"},children:[l.jsx("span",{style:{fontWeight:700,color:"#2563eb"},children:"Facility Overseer Note: "}),X.adminRemarks]})]})]},X._id)})}),p&&l.jsx("div",{className:"modal-overlay",onClick:()=>v(!1),children:l.jsxs("div",{className:"modal-content",onClick:X=>X.stopPropagation(),style:{padding:"32px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"18px"},children:[l.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,color:"#0f172a"},children:"Lodge Campus Issue or Feedback"}),l.jsx("button",{onClick:()=>v(!1),style:{background:"none",border:"none",color:"#64748b",cursor:"pointer"},children:l.jsx(ls,{size:20})})]}),l.jsxs("form",{onSubmit:V,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Complaint Title"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Wi-Fi router disconnection in Central Library 2nd floor",value:y,onChange:X=>_(X.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Department / Area"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. CSE Labs, Hostel 3, Cafeteria",value:x,onChange:X=>M(X.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Issue Category"}),l.jsx("select",{value:b,onChange:X=>A(X.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"},children:N.map(X=>l.jsx("option",{value:X,children:X},X))})]})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Priority Level"}),l.jsx("div",{style:{display:"flex",gap:"10px"},children:["Low","Medium","High","Urgent"].map(X=>l.jsx("button",{type:"button",onClick:()=>W(X),style:{flex:1,padding:"8px",borderRadius:"8px",border:T===X?"1px solid #ea580c":"1px solid #cbd5e1",backgroundColor:T===X?"#fff7ed":"#ffffff",color:T===X?"#ea580c":"#475569",fontWeight:600,fontSize:"0.8rem",cursor:"pointer"},children:X},X))})]}),l.jsxs("div",{children:[l.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#334155",marginBottom:"4px"},children:"Detailed Description of Problem"}),l.jsx("textarea",{rows:"4",required:!0,placeholder:"Provide precise location details, when the issue occurred, and specific equipment involved...",value:S,onChange:X=>g(X.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px",borderRadius:"10px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0"},children:[l.jsx("input",{type:"checkbox",id:"anonCheck",checked:I,onChange:X=>D(X.target.checked),style:{width:"18px",height:"18px",cursor:"pointer"}}),l.jsxs("label",{htmlFor:"anonCheck",style:{fontSize:"0.85rem",color:"#334155",cursor:"pointer",fontWeight:500},children:[l.jsx("strong",{children:"Submit Anonymously"})," — Protect my student identity. The facility admin will not see my name or student email."]})]}),l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"10px"},children:[l.jsx("button",{type:"submit",disabled:O,className:"btn btn-primary",style:{flex:1,padding:"11px",borderRadius:"10px"},children:O?"Registering Issue...":"Submit Campus Complaint"}),l.jsx("button",{type:"button",onClick:()=>v(!1),className:"btn btn-secondary",style:{padding:"11px 20px",borderRadius:"10px"},children:"Cancel"})]})]})]})})]})},sb=()=>{var U;const{user:s,updateUserProfile:e,showToast:n,setCurrentPage:r}=Si(),[a,c]=ge.useState((s==null?void 0:s.skills)||[]),[d,h]=ge.useState(""),[p,v]=ge.useState(!1),[y,_]=ge.useState((s==null?void 0:s.bio)||""),[x,M]=ge.useState((s==null?void 0:s.profileImage)||""),[b,A]=ge.useState([]),[S,g]=ge.useState([]),[I,D]=ge.useState(!0);ge.useEffect(()=>{s&&(c(s.skills||[]),_(s.bio||""),M(s.profileImage||""))},[s]),ge.useEffect(()=>{(async()=>{try{const[P,C]=await Promise.all([wt.getEvents(),wt.getProjects()]);if(P.success&&s){const V=P.events.filter(G=>G.registrations&&G.registrations.includes(s._id));A(V)}if(C.success&&s){const V=C.projects.filter(G=>G.owner&&G.owner.email===s.email||G.members&&G.members.some(J=>J.email===s.email));g(V)}}catch(P){console.error("Error fetching student engagements:",P)}finally{D(!1)}})()},[s]);const T=async N=>{N.preventDefault();const P=d.trim();if(!P||a.includes(P))return;const C=[...a,P];c(C),h("");try{const V=await wt.updateProfile({skills:C});V.success&&(e(V.user),n(`Added skill: "${P}"`,"success"))}catch(V){n(V.message||"Failed to update skills","error")}},W=async N=>{const P=a.filter(C=>C!==N);c(P);try{const C=await wt.updateProfile({skills:P});C.success&&(e(C.user),n(`Removed skill: "${N}"`,"info"))}catch(C){n(C.message||"Failed to update skills","error")}},O=async()=>{try{const N=await wt.updateProfile({bio:y,profileImage:x});N.success&&(e(N.user),v(!1),n("Profile bio updated!","success"))}catch(N){n(N.message||"Failed to update profile","error")}};return l.jsxs("div",{className:"page-wrapper",children:[l.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden",marginBottom:"28px",border:"1px solid #bfdbfe"},children:[l.jsx("div",{style:{height:"140px",background:"linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #7c3aed 100%)"}}),l.jsxs("div",{style:{padding:"0 32px 32px",marginTop:"-55px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"20px"},children:[l.jsx("img",{src:x||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",alt:s==null?void 0:s.name,style:{width:"110px",height:"110px",borderRadius:"24px",objectFit:"cover",border:"4px solid white",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15)",backgroundColor:"white"}}),l.jsxs("div",{style:{marginBottom:"8px"},children:[l.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:800,color:"#0f172a",lineHeight:1.2},children:(s==null?void 0:s.name)||"Student Name"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"4px"},children:[l.jsx("span",{className:`badge badge-${((U=s==null?void 0:s.department)==null?void 0:U.toLowerCase().replace(/[^a-z]/g,""))||"cse"}`,children:(s==null?void 0:s.department)||"CSE"}),l.jsxs("span",{style:{fontSize:"0.85rem",color:"#64748b"},children:[(s==null?void 0:s.year)||"3rd Year"," • ",(s==null?void 0:s.role)==="admin"?"Administrator":"Undergraduate"]})]})]})]}),l.jsxs("button",{onClick:()=>v(!p),className:"btn btn-secondary",style:{padding:"9px 18px",fontSize:"0.88rem",marginBottom:"8px"},children:[l.jsx(zE,{size:15})," ",p?"Done Editing":"Edit Profile"]})]}),l.jsxs("div",{style:{marginTop:"20px",maxWidth:"750px"},children:[p?l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.78rem",fontWeight:700,color:"#475569",display:"block",marginBottom:"4px"},children:"Avatar Image URL:"}),l.jsx("input",{type:"url",value:x,onChange:N=>M(N.target.value),placeholder:"https://...",style:{width:"100%",padding:"8px 12px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"0.85rem"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.78rem",fontWeight:700,color:"#475569",display:"block",marginBottom:"4px"},children:"Student Bio / Research Interests:"}),l.jsx("textarea",{rows:"3",value:y,onChange:N=>_(N.target.value),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem"}})]}),l.jsxs("button",{onClick:O,className:"btn btn-primary",style:{width:"fit-content",padding:"8px 18px",fontSize:"0.85rem"},children:[l.jsx($g,{size:16})," Save Changes"]})]}):l.jsx("p",{style:{fontSize:"0.95rem",color:"#475569",lineHeight:1.6},children:y||'No bio written yet. Click "Edit Profile" to share your background!'}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginTop:"14px",fontSize:"0.85rem",color:"#64748b"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[l.jsx(nf,{size:15,color:"#2563eb"})," ",s==null?void 0:s.email]}),l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[l.jsx(wE,{size:15,color:"#7c3aed"})," Dept: ",s==null?void 0:s.department]})]})]})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"26px"},children:[l.jsxs("div",{className:"card",style:{padding:"26px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(xE,{size:20,color:"#2563eb"}),l.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,color:"#0f172a"},children:"Skills & Technologies"})]}),l.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:[a.length," Skills Listed"]})]}),l.jsxs("p",{style:{fontSize:"0.84rem",color:"#64748b",marginBottom:"16px",lineHeight:1.45},children:["These competencies directly power the ",l.jsx("strong",{children:"Smart Teammate Matching Engine"})," when forming hackathon & project teams."]}),l.jsxs("form",{onSubmit:T,style:{display:"flex",gap:"8px",marginBottom:"18px"},children:[l.jsx("input",{type:"text",placeholder:"Add skill (e.g. Flutter, Docker, PyTorch)...",value:d,onChange:N=>h(N.target.value),style:{flex:1,padding:"9px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem"}}),l.jsxs("button",{type:"submit",className:"btn btn-primary",style:{padding:"9px 16px",fontSize:"0.88rem"},children:[l.jsx(Zo,{size:16})," Add"]})]}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:a.map(N=>l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"999px",backgroundColor:"#eff6ff",border:"1px solid #bfdbfe",color:"#1d4ed8",fontSize:"0.85rem",fontWeight:600},children:[N,l.jsx("button",{type:"button",onClick:()=>W(N),style:{background:"none",border:"none",color:"#93c5fd",cursor:"pointer",display:"flex",alignItems:"center",padding:0},onMouseEnter:P=>P.currentTarget.style.color="#ef4444",onMouseLeave:P=>P.currentTarget.style.color="#93c5fd",title:`Remove ${N}`,children:l.jsx(ls,{size:14})})]},N))})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs("div",{className:"card",style:{padding:"26px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(Yg,{size:20,color:"#7c3aed"}),l.jsxs("h2",{style:{fontSize:"1.25rem",fontWeight:700,color:"#0f172a"},children:["Projects Joined (",S.length,")"]})]}),l.jsx("button",{onClick:()=>r("projects"),style:{background:"none",border:"none",color:"#7c3aed",fontSize:"0.82rem",fontWeight:600,cursor:"pointer"},children:"Explore Hub →"})]}),S.length===0?l.jsx("p",{style:{fontSize:"0.85rem",color:"#64748b"},children:"You haven't joined any projects yet. Check out the Collaboration Hub!"}):l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:S.map(N=>l.jsxs("div",{style:{padding:"12px",borderRadius:"10px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem",color:"#1e293b"},children:N.title}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:[N.department," • ",N.status]})]}),l.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:700,backgroundColor:"#f3e8ff",color:"#7c3aed",padding:"3px 8px",borderRadius:"6px"},children:[N.progress||25,"% Done"]})]},N._id))})]}),l.jsxs("div",{className:"card",style:{padding:"26px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx(Xg,{size:20,color:"#059669"}),l.jsxs("h2",{style:{fontSize:"1.25rem",fontWeight:700,color:"#0f172a"},children:["Registered Events (",b.length,")"]})]}),l.jsx("button",{onClick:()=>r("events"),style:{background:"none",border:"none",color:"#059669",fontSize:"0.82rem",fontWeight:600,cursor:"pointer"},children:"View Events →"})]}),b.length===0?l.jsx("p",{style:{fontSize:"0.85rem",color:"#64748b"},children:"No registered events found. Register for upcoming department hackathons!"}):l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:b.map(N=>l.jsxs("div",{style:{padding:"12px",borderRadius:"10px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem",color:"#166534"},children:N.title}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#15803d"},children:["📅 ",N.date," • ",N.location]})]}),l.jsx("span",{className:`badge badge-${N.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:N.department})]},N._id))})]})]})]})]})},ob=()=>{const{user:s,showToast:e}=Si(),[n,r]=ge.useState("students"),[a,c]=ge.useState([]),[d,h]=ge.useState("All"),[p,v]=ge.useState(""),[y,_]=ge.useState([]),[x,M]=ge.useState(!1),[b,A]=ge.useState(""),[S,g]=ge.useState(""),[I,D]=ge.useState("General"),[T,W]=ge.useState(!1),[O,U]=ge.useState(""),[N,P]=ge.useState([]),[C,V]=ge.useState(!1),[G,J]=ge.useState(""),[X,Z]=ge.useState("CSE"),[re,me]=ge.useState(""),[F,de]=ge.useState("2026-06-15"),[k,E]=ge.useState("10:00 AM - 4:00 PM"),[K,Se]=ge.useState("Main Auditorium"),[$,le]=ge.useState("https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"),[xe,ue]=ge.useState(""),[ye,Ue]=ge.useState([]),[De,et]=ge.useState([]),[rt,Ke]=ge.useState([]),[j,ve]=ge.useState(null),[Le,Xe]=ge.useState("In Progress"),[Fe,gt]=ge.useState(""),[je,z]=ge.useState(!0),R=["CSE","ECE","AI & ML","IT","EEE","MECH","CIVIL","MBA"],oe=async()=>{try{z(!0);const[Y,Re,be,ct,ut,Be]=await Promise.all([wt.getAllUsers(),wt.getAnnouncements(),wt.getEvents(),wt.getProjects(),wt.getResources(),wt.getComplaints()]);Y.success&&c(Y.users),Re.success&&_(Re.announcements),be.success&&P(be.events),ct.success&&Ue(ct.projects),ut.success&&et(ut.resources),Be.success&&Ke(Be.complaints)}catch(Y){console.error("Failed to load admin collections:",Y)}finally{z(!1)}};ge.useEffect(()=>{oe()},[]);const Me=async Y=>{Y.preventDefault();try{const Re=await wt.createAnnouncement({title:b,content:S,category:I,important:T,externalLink:O});Re.success&&(_([Re.announcement,...y]),M(!1),A(""),g(""),U(""),e("Announcement broadcasted campus-wide!","success"))}catch(Re){e(Re.message,"error")}},Ee=async Y=>{if(window.confirm("Delete this announcement?"))try{(await wt.deleteAnnouncement(Y)).success&&(_(y.filter(be=>be._id!==Y)),e("Announcement removed","info"))}catch(Re){e(Re.message,"error")}},_e=async Y=>{Y.preventDefault();try{const Re=await wt.createEvent({title:G,department:X,description:re,date:F,time:k,location:K,image:$,externalUrl:xe});Re.success&&(P([Re.event,...N]),V(!1),J(""),me(""),e("New department event created!","success"))}catch(Re){e(Re.message,"error")}},qe=async Y=>{if(window.confirm("Delete this event?"))try{(await wt.deleteEvent(Y)).success&&(P(N.filter(be=>be._id!==Y)),e("Event removed","info"))}catch(Re){e(Re.message,"error")}},Oe=async(Y,Re)=>{try{const be=await wt.updateProject(Y,{status:Re});be.success&&(Ue(ye.map(ct=>ct._id===Y?be.project:ct)),e(`Project status changed to ${Re}`,"success"))}catch(be){e(be.message,"error")}},We=async Y=>{if(window.confirm("Delete this project?"))try{(await wt.deleteProject(Y)).success&&(Ue(ye.filter(be=>be._id!==Y)),e("Project deleted","info"))}catch(Re){e(Re.message,"error")}},pt=async Y=>{if(window.confirm("Delete this resource?"))try{(await wt.deleteResource(Y)).success&&(et(De.filter(be=>be._id!==Y)),e("Resource deleted from vault","info"))}catch(Re){e(Re.message,"error")}},Ce=async Y=>{try{const Re=await wt.updateComplaintStatus(Y,{status:Le,adminRemarks:Fe||`Updated to ${Le} by Campus Administrator`});Re.success&&(Ke(rt.map(be=>be._id===Y?Re.complaint:be)),ve(null),e(`Complaint status set to ${Le}`,"success"))}catch(Re){e(Re.message,"error")}},Ge=a.filter(Y=>{const Re=d==="All"||Y.department===d,be=!p||Y.name.toLowerCase().includes(p.toLowerCase())||Y.email.toLowerCase().includes(p.toLowerCase());return Re&&be});return l.jsxs("div",{className:"page-wrapper",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"26px"},children:[l.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"14px",backgroundColor:"#fee2e2",color:"#dc2626",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"},children:"🛡️"}),l.jsxs("div",{children:[l.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:800,color:"#0f172a"},children:"Campus Administrator Control Panel"}),l.jsx("p",{style:{fontSize:"0.92rem",color:"#64748b"},children:"Comprehensive management of students, announcements, department events, projects, resources, and complaints."})]})]}),l.jsx("div",{style:{display:"flex",backgroundColor:"#f1f5f9",padding:"4px",borderRadius:"12px",overflowX:"auto",gap:"4px",marginBottom:"26px"},children:[{id:"students",label:"Manage Students",icon:wf,count:a.length},{id:"announcements",label:"Manage Announcements",icon:Zs,count:y.length},{id:"events",label:"Manage Events",icon:ss,count:N.length},{id:"projects",label:"Manage Projects",icon:Yg,count:ye.length},{id:"resources",label:"Manage Resources",icon:Mf,count:De.length},{id:"complaints",label:"Manage Complaints",icon:Ef,count:rt.length}].map(Y=>{const Re=Y.icon,be=n===Y.id;return l.jsxs("button",{onClick:()=>r(Y.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"9px 16px",borderRadius:"9px",border:"none",backgroundColor:be?"#ffffff":"transparent",color:be?"#2563eb":"#64748b",fontWeight:600,fontSize:"0.85rem",cursor:"pointer",whiteSpace:"nowrap",boxShadow:be?"0 2px 4px rgba(0,0,0,0.06)":"none"},children:[l.jsx(Re,{size:16}),Y.label,l.jsx("span",{style:{fontSize:"0.72rem",backgroundColor:be?"#eff6ff":"#e2e8f0",color:be?"#2563eb":"#64748b",padding:"1px 6px",borderRadius:"999px"},children:Y.count})]},Y.id)})}),n==="students"&&l.jsxs("div",{className:"card",style:{padding:"24px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px",marginBottom:"20px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",backgroundColor:"#f8fafc",padding:"8px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",width:"300px"},children:[l.jsx(ra,{size:16,color:"#94a3b8"}),l.jsx("input",{type:"text",placeholder:"Search students...",value:p,onChange:Y=>v(Y.target.value),style:{border:"none",outline:"none",background:"transparent",width:"100%",fontSize:"0.86rem"}})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:600,color:"#64748b"},children:"Department:"}),l.jsxs("select",{value:d,onChange:Y=>h(Y.target.value),style:{padding:"7px 12px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"0.85rem"},children:[l.jsx("option",{value:"All",children:"All Departments"}),R.map(Y=>l.jsx("option",{value:Y,children:Y},Y))]})]})]}),l.jsx("div",{style:{overflowX:"auto"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left",fontSize:"0.88rem"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{borderBottom:"2px solid #e2e8f0",color:"#64748b"},children:[l.jsx("th",{style:{padding:"12px"},children:"Student"}),l.jsx("th",{style:{padding:"12px"},children:"Department"}),l.jsx("th",{style:{padding:"12px"},children:"Year"}),l.jsx("th",{style:{padding:"12px"},children:"Skills"}),l.jsx("th",{style:{padding:"12px"},children:"Role"})]})}),l.jsx("tbody",{children:Ge.map(Y=>{var Re,be;return l.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9"},children:[l.jsxs("td",{style:{padding:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[l.jsx("img",{src:Y.profileImage,alt:Y.name,style:{width:"36px",height:"36px",borderRadius:"10px",objectFit:"cover"}}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:600,color:"#0f172a"},children:Y.name}),l.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:Y.email})]})]}),l.jsx("td",{style:{padding:"12px"},children:l.jsx("span",{className:`badge badge-${Y.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:Y.department})}),l.jsx("td",{style:{padding:"12px",color:"#475569"},children:Y.year}),l.jsx("td",{style:{padding:"12px"},children:l.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",maxWidth:"300px"},children:[(Re=Y.skills)==null?void 0:Re.slice(0,3).map(ct=>l.jsx("span",{style:{fontSize:"0.7rem",padding:"2px 6px",borderRadius:"4px",backgroundColor:"#f1f5f9",color:"#334155"},children:ct},ct)),((be=Y.skills)==null?void 0:be.length)>3&&l.jsxs("span",{style:{fontSize:"0.7rem",color:"#94a3b8"},children:["+",Y.skills.length-3]})]})}),l.jsx("td",{style:{padding:"12px"},children:l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,padding:"3px 8px",borderRadius:"6px",backgroundColor:Y.role==="admin"?"#fee2e2":"#eff6ff",color:Y.role==="admin"?"#dc2626":"#2563eb"},children:Y.role})})]},Y._id)})})]})})]}),n==="announcements"&&l.jsxs("div",{className:"card",style:{padding:"24px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[l.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700,color:"#0f172a"},children:["Campus Announcements (",y.length,")"]}),l.jsxs("button",{onClick:()=>M(!0),className:"btn btn-primary",style:{padding:"8px 16px",fontSize:"0.85rem"},children:[l.jsx(Zo,{size:16})," Broadcast New Announcement"]})]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:y.map(Y=>l.jsxs("div",{style:{padding:"16px",borderRadius:"12px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[Y.important&&l.jsx("span",{className:"badge badge-important",children:"Important"}),l.jsx("span",{className:`badge badge-${Y.category.toLowerCase().replace(/[^a-z]/g,"")}`,children:Y.category}),l.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:Y.date})]}),l.jsx("div",{style:{fontWeight:700,fontSize:"0.98rem",color:"#0f172a"},children:Y.title}),l.jsxs("p",{style:{fontSize:"0.82rem",color:"#64748b",marginTop:"2px"},children:[Y.content.slice(0,120),"..."]})]}),l.jsx("div",{style:{display:"flex",gap:"8px"},children:l.jsxs("button",{onClick:()=>Ee(Y._id),style:{backgroundColor:"#fee2e2",color:"#dc2626",border:"none",borderRadius:"8px",padding:"8px 12px",cursor:"pointer",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"4px"},children:[l.jsx(kl,{size:14})," Delete"]})})]},Y._id))})]}),n==="events"&&l.jsxs("div",{className:"card",style:{padding:"24px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[l.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700,color:"#0f172a"},children:["Department Events (",N.length,")"]}),l.jsxs("button",{onClick:()=>V(!0),className:"btn btn-primary",style:{padding:"8px 16px",fontSize:"0.85rem"},children:[l.jsx(Zo,{size:16})," Add Campus Event"]})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"16px"},children:N.map(Y=>{var Re;return l.jsxs("div",{style:{padding:"16px",borderRadius:"12px",backgroundColor:"#ffffff",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"10px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:`badge badge-${Y.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:Y.department}),l.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"#2563eb"},children:[((Re=Y.registrations)==null?void 0:Re.length)||0," Registered"]})]}),l.jsx("div",{style:{fontWeight:700,fontSize:"1rem",color:"#0f172a"},children:Y.title}),l.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:["📅 ",Y.date," • 📍 ",Y.location]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"auto"},children:l.jsxs("button",{onClick:()=>qe(Y._id),style:{backgroundColor:"#fee2e2",color:"#dc2626",border:"none",borderRadius:"8px",padding:"6px 12px",cursor:"pointer",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"4px"},children:[l.jsx(kl,{size:13})," Delete"]})})]},Y._id)})})]}),n==="projects"&&l.jsxs("div",{className:"card",style:{padding:"24px"},children:[l.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"20px"},children:["Collaboration Projects (",ye.length,")"]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:ye.map(Y=>l.jsxs("div",{style:{padding:"16px",borderRadius:"12px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[l.jsx("span",{className:`badge badge-${Y.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:Y.department}),l.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:["Lead: ",Y.owner.name]})]}),l.jsx("div",{style:{fontWeight:700,fontSize:"0.98rem",color:"#0f172a"},children:Y.title})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[l.jsxs("select",{value:Y.status,onChange:Re=>Oe(Y._id,Re.target.value),style:{padding:"6px 10px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"0.8rem",fontWeight:600},children:[l.jsx("option",{value:"Open",children:"Open"}),l.jsx("option",{value:"Looking for Members",children:"Looking for Members"}),l.jsx("option",{value:"In Progress",children:"In Progress"}),l.jsx("option",{value:"Completed",children:"Completed"})]}),l.jsx("button",{onClick:()=>We(Y._id),style:{backgroundColor:"#fee2e2",color:"#dc2626",border:"none",borderRadius:"8px",padding:"6px 10px",cursor:"pointer"},children:l.jsx(kl,{size:14})})]})]},Y._id))})]}),n==="resources"&&l.jsxs("div",{className:"card",style:{padding:"24px"},children:[l.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"20px"},children:["Academic Vault Resources (",De.length,")"]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:De.map(Y=>l.jsxs("div",{style:{padding:"16px",borderRadius:"12px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[l.jsx("span",{className:`badge badge-${Y.department.toLowerCase().replace(/[^a-z]/g,"")}`,children:Y.department}),l.jsx("span",{style:{fontSize:"0.75rem",color:"#64748b"},children:Y.subject})]}),l.jsx("div",{style:{fontWeight:700,fontSize:"0.98rem",color:"#0f172a"},children:Y.title}),l.jsxs("div",{style:{fontSize:"0.78rem",color:"#64748b"},children:["Uploaded by ",Y.uploadedBy]})]}),l.jsxs("div",{style:{display:"flex",gap:"8px"},children:[l.jsx("a",{href:Y.link,target:"_blank",rel:"noreferrer",className:"btn btn-outline",style:{padding:"6px 12px",fontSize:"0.78rem"},children:"Open Link"}),l.jsx("button",{onClick:()=>pt(Y._id),style:{backgroundColor:"#fee2e2",color:"#dc2626",border:"none",borderRadius:"8px",padding:"6px 12px",cursor:"pointer"},children:l.jsx(kl,{size:14})})]})]},Y._id))})]}),n==="complaints"&&l.jsxs("div",{className:"card",style:{padding:"24px"},children:[l.jsxs("h3",{style:{fontSize:"1.2rem",fontWeight:700,color:"#0f172a",marginBottom:"20px"},children:["Student Complaints & Feedback Tickets (",rt.length,")"]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:rt.map(Y=>{var Re;return l.jsxs("div",{style:{padding:"20px",borderRadius:"12px",backgroundColor:"#ffffff",border:"1px solid #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px"},children:[l.jsxs("div",{style:{flex:1,minWidth:"280px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[l.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,backgroundColor:"#eff6ff",color:"#2563eb",padding:"2px 8px",borderRadius:"6px"},children:Y.department}),l.jsxs("span",{style:{fontSize:"0.75rem",color:"#64748b"},children:["Reported by: ",Y.anonymous?"🔒 Anonymous Student":(Re=Y.user)==null?void 0:Re.name]})]}),l.jsx("div",{style:{fontWeight:700,fontSize:"1.05rem",color:"#0f172a"},children:Y.title}),l.jsx("p",{style:{fontSize:"0.85rem",color:"#475569",marginTop:"4px",lineHeight:1.45},children:Y.description}),Y.adminRemarks&&l.jsxs("div",{style:{fontSize:"0.78rem",color:"#059669",marginTop:"6px",fontWeight:600},children:["Current Note: ",Y.adminRemarks]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"8px"},children:[l.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"4px 10px",borderRadius:"999px",backgroundColor:Y.status==="Resolved"?"#dcfce7":Y.status==="In Progress"?"#fef3c7":"#eff6ff",color:Y.status==="Resolved"?"#15803d":Y.status==="In Progress"?"#b45309":"#1d4ed8"},children:["Stage: ",Y.status]}),l.jsx("button",{onClick:()=>{ve(Y),Xe(Y.status),gt(Y.adminRemarks||"")},className:"btn btn-primary",style:{padding:"6px 14px",fontSize:"0.8rem"},children:"Update Stage & Note"})]})]},Y._id)})})]}),j&&l.jsx("div",{className:"modal-overlay",onClick:()=>ve(null),children:l.jsxs("div",{className:"modal-content",onClick:Y=>Y.stopPropagation(),style:{padding:"28px"},children:[l.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:800,color:"#0f172a",marginBottom:"14px"},children:"Update Resolution Stage"}),l.jsxs("p",{style:{fontSize:"0.9rem",color:"#64748b",marginBottom:"16px"},children:["Ticket: ",l.jsx("strong",{children:j.title})]}),l.jsxs("div",{style:{marginBottom:"14px"},children:[l.jsx("label",{style:{fontSize:"0.82rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"6px"},children:"Resolution Stage:"}),l.jsxs("select",{value:Le,onChange:Y=>Xe(Y.target.value),style:{width:"100%",padding:"9px 12px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"0.9rem"},children:[l.jsx("option",{value:"Submitted",children:"Submitted"}),l.jsx("option",{value:"Under Review",children:"Under Review"}),l.jsx("option",{value:"In Progress",children:"In Progress"}),l.jsx("option",{value:"Resolved",children:"Resolved"})]})]}),l.jsxs("div",{style:{marginBottom:"20px"},children:[l.jsx("label",{style:{fontSize:"0.82rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"6px"},children:"Facility Administrator Action Note:"}),l.jsx("textarea",{rows:"3",value:Fe,onChange:Y=>gt(Y.target.value),placeholder:"e.g. Technician dispatched, cable replaced, resolved...",style:{width:"100%",padding:"9px 12px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"0.88rem"}})]}),l.jsxs("div",{style:{display:"flex",gap:"10px"},children:[l.jsx("button",{onClick:()=>Ce(j._id),className:"btn btn-primary",style:{flex:1,padding:"10px"},children:"Save & Update Timeline"}),l.jsx("button",{onClick:()=>ve(null),className:"btn btn-secondary",style:{padding:"10px 18px"},children:"Cancel"})]})]})}),x&&l.jsx("div",{className:"modal-overlay",onClick:()=>M(!1),children:l.jsxs("div",{className:"modal-content",onClick:Y=>Y.stopPropagation(),style:{padding:"30px"},children:[l.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:800,color:"#0f172a",marginBottom:"14px"},children:"Broadcast Announcement"}),l.jsxs("form",{onSubmit:Me,style:{display:"flex",flexDirection:"column",gap:"12px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Title"}),l.jsx("input",{type:"text",required:!0,value:b,onChange:Y=>A(Y.target.value),placeholder:"e.g. Campus Library Timing Extended for Examinations",style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Category"}),l.jsxs("select",{value:I,onChange:Y=>D(Y.target.value),style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"},children:[l.jsx("option",{value:"General",children:"General"}),l.jsx("option",{value:"Academic",children:"Academic"}),l.jsx("option",{value:"Examinations",children:"Examinations"}),l.jsx("option",{value:"Placements",children:"Placements"}),l.jsx("option",{value:"Workshops",children:"Workshops"}),l.jsx("option",{value:"Sports",children:"Sports"}),l.jsx("option",{value:"Hackathons",children:"Hackathons"})]})]}),l.jsx("div",{style:{display:"flex",alignItems:"center",paddingTop:"20px"},children:l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.85rem",cursor:"pointer"},children:[l.jsx("input",{type:"checkbox",checked:T,onChange:Y=>W(Y.target.checked),style:{width:"16px",height:"16px"}}),l.jsx("strong",{children:"Mark as Important (Pulsing Badge)"})]})})]}),l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"External Link (optional)"}),l.jsx("input",{type:"url",value:O,onChange:Y=>U(Y.target.value),placeholder:"https://...",style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Announcement Content"}),l.jsx("textarea",{rows:"4",required:!0,value:S,onChange:Y=>g(Y.target.value),placeholder:"Write full circular notice text...",style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]}),l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:[l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1,padding:"10px"},children:"Broadcast Immediately"}),l.jsx("button",{type:"button",onClick:()=>M(!1),className:"btn btn-secondary",style:{padding:"10px 18px"},children:"Cancel"})]})]})]})}),C&&l.jsx("div",{className:"modal-overlay",onClick:()=>V(!1),children:l.jsxs("div",{className:"modal-content",onClick:Y=>Y.stopPropagation(),style:{padding:"30px"},children:[l.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:800,color:"#0f172a",marginBottom:"14px"},children:"Add Department Event"}),l.jsxs("form",{onSubmit:_e,style:{display:"flex",flexDirection:"column",gap:"12px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Event Title"}),l.jsx("input",{type:"text",required:!0,value:G,onChange:Y=>J(Y.target.value),placeholder:"e.g. Cloud Security Summit 2K26",style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Department"}),l.jsx("select",{value:X,onChange:Y=>Z(Y.target.value),style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"},children:R.map(Y=>l.jsx("option",{value:Y,children:Y},Y))})]}),l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Event Date"}),l.jsx("input",{type:"date",required:!0,value:F,onChange:Y=>de(Y.target.value),style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Time"}),l.jsx("input",{type:"text",required:!0,value:k,onChange:Y=>E(Y.target.value),placeholder:"10:00 AM - 4:00 PM",style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Location"}),l.jsx("input",{type:"text",required:!0,value:K,onChange:Y=>Se(Y.target.value),placeholder:"CSE Seminar Hall",style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]})]}),l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"Description"}),l.jsx("textarea",{rows:"3",required:!0,value:re,onChange:Y=>me(Y.target.value),placeholder:"Outline the event schedule, rules, and speaker...",style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]}),l.jsxs("div",{children:[l.jsx("label",{style:{fontSize:"0.8rem",fontWeight:700,color:"#334155",display:"block",marginBottom:"4px"},children:"External Registration Link (Real non-duplicate link)"}),l.jsx("input",{type:"url",value:xe,onChange:Y=>ue(Y.target.value),placeholder:"https://...",style:{width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #cbd5e1"}})]}),l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"8px"},children:[l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1,padding:"10px"},children:"Publish Event"}),l.jsx("button",{type:"button",onClick:()=>V(!1),className:"btn btn-secondary",style:{padding:"10px 18px"},children:"Cancel"})]})]})]})})]})},ab=({isMobileOpen:s,setIsMobileOpen:e})=>{const{currentPage:n,setCurrentPage:r,user:a,logout:c}=Si(),d=[{id:"home",label:"Home",icon:CE,badge:null},{id:"announcements",label:"Announcements",icon:Zs,badge:"New"},{id:"events",label:"Events",icon:ss,badge:"Active"},{id:"projects",label:"Projects",icon:wf,badge:"Match"},{id:"resources",label:"Resources",icon:Mf,badge:null},{id:"complaints",label:"Complaints",icon:Ef,badge:null},{id:"profile",label:"Profile",icon:Jo,badge:null}];a&&a.role==="admin"?d.push({id:"admin",label:"Admin Dashboard",icon:rf,badge:"Admin"}):d.push({id:"admin",label:"Admin Portal",icon:rf,badge:"Demo"});const h=p=>{r(p),e&&e(!1)};return l.jsxs(l.Fragment,{children:[s&&l.jsx("div",{onClick:()=>e(!1),style:{position:"fixed",inset:0,backgroundColor:"rgba(15, 23, 42, 0.4)",zIndex:90}}),l.jsxs("aside",{style:{width:"270px",backgroundColor:"#ffffff",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",height:"100vh",position:"sticky",top:0,zIndex:100,boxShadow:"2px 0 12px rgba(0, 0, 0, 0.02)",transition:"transform 0.3s ease"},children:[l.jsxs("div",{style:{padding:"24px 22px",borderBottom:"1px solid #f1f5f9",display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",boxShadow:"0 6px 16px -2px rgba(37, 99, 235, 0.3)",color:"white",flexShrink:0},children:"🎓"}),l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:700,color:"#0f172a",lineHeight:1.2,letterSpacing:"-0.02em",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:"CampusConnect"}),l.jsx("p",{style:{fontSize:"0.72rem",color:"#64748b",fontWeight:500,letterSpacing:"0.01em"},children:"Connect • Collaborate • Grow"})]})]}),l.jsxs("nav",{style:{flex:1,padding:"16px 14px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"5px"},children:[l.jsx("div",{style:{fontSize:"0.7rem",fontWeight:700,textTransform:"uppercase",color:"#94a3b8",padding:"6px 12px",letterSpacing:"0.05em"},children:"Main Menu"}),d.map(p=>{const v=p.icon,y=n===p.id;return l.jsxs("button",{onClick:()=>h(p.id),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"11px 14px",borderRadius:"10px",border:"none",background:y?"linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)":"transparent",color:y?"#2563eb":"#475569",fontWeight:y?600:500,fontSize:"0.92rem",cursor:"pointer",textAlign:"left",transition:"all 0.18s ease",borderLeft:y?"3.5px solid #2563eb":"3.5px solid transparent"},onMouseEnter:_=>{y||(_.currentTarget.style.backgroundColor="#f8fafc",_.currentTarget.style.color="#1e293b")},onMouseLeave:_=>{y||(_.currentTarget.style.backgroundColor="transparent",_.currentTarget.style.color="#475569")},children:[l.jsx(v,{size:19,color:y?"#2563eb":"#64748b",style:{flexShrink:0}}),l.jsx("span",{style:{flex:1},children:p.label}),p.badge&&l.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,padding:"2px 7px",borderRadius:"999px",backgroundColor:p.badge==="Admin"?"#fef2f2":p.badge==="Match"?"#f3e8ff":"#e0f2fe",color:p.badge==="Admin"?"#dc2626":p.badge==="Match"?"#7c3aed":"#0284c7"},children:p.badge})]},p.id)})]}),l.jsxs("div",{style:{padding:"16px",borderTop:"1px solid #f1f5f9",backgroundColor:"#fafaf9"},children:[a&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px",borderRadius:"12px",backgroundColor:"#ffffff",border:"1px solid #e2e8f0",marginBottom:"10px",cursor:"pointer"},onClick:()=>h("profile"),children:[l.jsx("img",{src:a.profileImage||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",alt:a.name,style:{width:"38px",height:"38px",borderRadius:"10px",objectFit:"cover",border:"2px solid #dbeafe"}}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:"0.85rem",fontWeight:600,color:"#0f172a",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:a.name}),l.jsxs("div",{style:{fontSize:"0.72rem",color:"#64748b",display:"flex",alignItems:"center",gap:"4px"},children:[l.jsx("span",{style:{display:"inline-block",width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"#10b981"}}),a.department||"Student"," • ",a.role==="admin"?"Admin":a.year||"3rd Year"]})]})]}),l.jsxs("button",{onClick:c,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",width:"100%",padding:"9px",borderRadius:"8px",border:"1px solid #fee2e2",backgroundColor:"#fff5f5",color:"#dc2626",fontWeight:600,fontSize:"0.86rem",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:p=>p.currentTarget.style.backgroundColor="#fee2e2",onMouseLeave:p=>p.currentTarget.style.backgroundColor="#fff5f5",children:[l.jsx(qg,{size:16}),"Logout"]})]})]})]})},lb=({onToggleMobileSidebar:s,onSearchQuery:e})=>{var D;const{user:n,logout:r,setCurrentPage:a,notifications:c,markNotificationRead:d,markAllNotificationsRead:h,unreadNotificationsCount:p}=Si(),[v,y]=ge.useState(""),[_,x]=ge.useState(!1),[M,b]=ge.useState(!1),A=ge.useRef(null),S=ge.useRef(null);ge.useEffect(()=>{const T=W=>{A.current&&!A.current.contains(W.target)&&x(!1),S.current&&!S.current.contains(W.target)&&b(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const g=T=>{y(T.target.value),e&&e(T.target.value)},I=T=>{d(T.id),x(!1),T.linkPage&&a(T.linkPage)};return l.jsxs("header",{style:{height:"70px",backgroundColor:"#ffffff",borderBottom:"1px solid #e2e8f0",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 32px",position:"sticky",top:0,zIndex:50},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flex:1,maxWidth:"580px"},children:[l.jsx("button",{onClick:s,style:{display:"none",background:"none",border:"none",cursor:"pointer",padding:"6px",color:"#475569"},className:"mobile-toggle-btn",children:l.jsx(UE,{size:22})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#f1f5f9",padding:"8px 16px",borderRadius:"12px",width:"100%",border:"1px solid transparent",transition:"all 0.2s"},onFocus:T=>T.currentTarget.style.borderColor="#3b82f6",onBlur:T=>T.currentTarget.style.borderColor="transparent",children:[l.jsx(ra,{size:18,color:"#94a3b8"}),l.jsx("input",{type:"text",placeholder:"Search campus announcements, hackathons, events, projects, resources...",value:v,onChange:g,style:{border:"none",background:"transparent",outline:"none",width:"100%",fontSize:"0.88rem",color:"#0f172a"}})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"18px"},children:[l.jsxs("div",{style:{position:"relative"},ref:A,children:[l.jsxs("button",{onClick:()=>x(!_),style:{position:"relative",width:"42px",height:"42px",borderRadius:"12px",backgroundColor:"#f8fafc",border:"1px solid #e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#475569",transition:"background 0.2s"},onMouseEnter:T=>T.currentTarget.style.backgroundColor="#eff6ff",onMouseLeave:T=>T.currentTarget.style.backgroundColor="#f8fafc",title:"Notifications",children:[l.jsx(Zs,{size:20}),p>0&&l.jsx("span",{style:{position:"absolute",top:"-4px",right:"-4px",backgroundColor:"#ef4444",color:"white",borderRadius:"999px",fontSize:"0.7rem",fontWeight:700,width:"18px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid white"},children:p})]}),_&&l.jsxs("div",{style:{position:"absolute",right:0,top:"52px",width:"360px",backgroundColor:"#ffffff",borderRadius:"16px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",border:"1px solid #e2e8f0",padding:"16px",zIndex:100,animation:"slideUp 0.18s ease-out"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",paddingBottom:"8px",borderBottom:"1px solid #f1f5f9"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[l.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:"Notifications"}),l.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:600,backgroundColor:"#eff6ff",color:"#2563eb",padding:"2px 8px",borderRadius:"999px"},children:[p," New"]})]}),p>0&&l.jsx("button",{onClick:h,style:{background:"none",border:"none",color:"#2563eb",fontSize:"0.78rem",fontWeight:600,cursor:"pointer"},children:"Mark all as read"})]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxHeight:"320px",overflowY:"auto"},children:c.map(T=>l.jsxs("div",{onClick:()=>I(T),style:{padding:"10px 12px",borderRadius:"10px",backgroundColor:T.read?"#ffffff":"#f0f7ff",border:T.read?"1px solid #f1f5f9":"1px solid #bfdbfe",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:W=>W.currentTarget.style.backgroundColor="#f8fafc",onMouseLeave:W=>W.currentTarget.style.backgroundColor=T.read?"#ffffff":"#f0f7ff",children:[l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[l.jsx("span",{style:{fontWeight:600,fontSize:"0.85rem",color:"#1e293b"},children:T.title}),l.jsx("span",{style:{fontSize:"0.7rem",color:"#94a3b8"},children:T.time})]}),l.jsx("p",{style:{fontSize:"0.78rem",color:"#64748b",marginTop:"4px",lineHeight:1.35},children:T.message})]},T.id))})]})]}),l.jsxs("div",{style:{position:"relative"},ref:S,children:[l.jsxs("button",{onClick:()=>b(!M),style:{display:"flex",alignItems:"center",gap:"10px",background:"none",border:"none",cursor:"pointer",padding:"4px",borderRadius:"12px"},children:[l.jsx("img",{src:(n==null?void 0:n.profileImage)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",alt:(n==null?void 0:n.name)||"Student Profile",style:{width:"40px",height:"40px",borderRadius:"12px",objectFit:"cover",border:"2px solid #3b82f6"}}),l.jsxs("div",{style:{textAlign:"left",display:"flex",flexDirection:"column"},children:[l.jsx("span",{style:{fontSize:"0.88rem",fontWeight:600,color:"#0f172a"},children:((D=n==null?void 0:n.name)==null?void 0:D.split(" ")[0])||"Student"}),l.jsx("span",{style:{fontSize:"0.72rem",color:"#64748b"},children:(n==null?void 0:n.department)||"CSE"})]}),l.jsx(aE,{size:15,color:"#64748b"})]}),M&&l.jsxs("div",{style:{position:"absolute",right:0,top:"52px",width:"230px",backgroundColor:"#ffffff",borderRadius:"16px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1)",border:"1px solid #e2e8f0",padding:"8px",zIndex:100,animation:"slideUp 0.18s ease-out"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid #f1f5f9"},children:[l.jsx("div",{style:{fontWeight:600,fontSize:"0.88rem",color:"#0f172a"},children:n==null?void 0:n.name}),l.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:n==null?void 0:n.email})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",padding:"6px 0"},children:[l.jsxs("button",{onClick:()=>{a("profile"),b(!1)},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",padding:"8px 12px",border:"none",borderRadius:"8px",background:"none",cursor:"pointer",fontSize:"0.85rem",color:"#334155",textAlign:"left"},onMouseEnter:T=>T.currentTarget.style.backgroundColor="#f1f5f9",onMouseLeave:T=>T.currentTarget.style.backgroundColor="transparent",children:[l.jsx(Jo,{size:16,color:"#64748b"}),"View Profile"]}),l.jsxs("button",{onClick:()=>{a("admin"),b(!1)},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",padding:"8px 12px",border:"none",borderRadius:"8px",background:"none",cursor:"pointer",fontSize:"0.85rem",color:"#334155",textAlign:"left"},onMouseEnter:T=>T.currentTarget.style.backgroundColor="#f1f5f9",onMouseLeave:T=>T.currentTarget.style.backgroundColor="transparent",children:[l.jsx(rf,{size:16,color:"#64748b"}),"Admin Dashboard"]})]}),l.jsx("div",{style:{borderTop:"1px solid #f1f5f9",paddingTop:"6px"},children:l.jsxs("button",{onClick:()=>{r(),b(!1)},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",padding:"8px 12px",border:"none",borderRadius:"8px",background:"none",cursor:"pointer",fontSize:"0.85rem",color:"#dc2626",textAlign:"left"},onMouseEnter:T=>T.currentTarget.style.backgroundColor="#fee2e2",onMouseLeave:T=>T.currentTarget.style.backgroundColor="transparent",children:[l.jsx(qg,{size:16,color:"#dc2626"}),"Logout"]})})]})]})]})]})};function cb(){const{user:s,loading:e,currentPage:n,setCurrentPage:r,toast:a}=Si(),[c,d]=ge.useState(!1);if(e)return l.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f8fafc",gap:"16px"},children:[l.jsx("div",{style:{fontSize:"48px",animation:"spin 2s linear infinite"},children:"🎓"}),l.jsx("div",{style:{fontWeight:700,color:"#1e293b",fontSize:"1.1rem"},children:"Loading CampusConnect..."})]});if(!s)return l.jsxs(l.Fragment,{children:[l.jsx(QE,{}),a&&l.jsxs("div",{style:{position:"fixed",top:"24px",right:"24px",zIndex:9999,backgroundColor:a.type==="error"?"#fee2e2":"#eff6ff",color:a.type==="error"?"#dc2626":"#1d4ed8",border:`1px solid ${a.type==="error"?"#fca5a5":"#bfdbfe"}`,borderRadius:"12px",padding:"12px 20px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.1)",display:"flex",alignItems:"center",gap:"10px",fontWeight:600,fontSize:"0.9rem",animation:"slideUp 0.25s ease-out"},children:[a.type==="error"?l.jsx(rg,{size:18}):l.jsx(tf,{size:18}),l.jsx("span",{children:a.message})]})]});const h=()=>{switch(n){case"home":return l.jsx(sg,{});case"announcements":return l.jsx(eb,{});case"events":return l.jsx(tb,{});case"projects":return l.jsx(nb,{});case"resources":return l.jsx(ib,{});case"complaints":return l.jsx(rb,{});case"profile":return l.jsx(sb,{});case"admin":return l.jsx(ob,{});default:return l.jsx(sg,{})}};return l.jsxs("div",{className:"app-container",children:[a&&l.jsxs("div",{style:{position:"fixed",top:"24px",right:"24px",zIndex:9999,backgroundColor:a.type==="error"?"#fee2e2":a.type==="info"?"#f1f5f9":"#ecfdf5",color:a.type==="error"?"#dc2626":a.type==="info"?"#334155":"#059669",border:`1px solid ${a.type==="error"?"#fca5a5":a.type==="info"?"#cbd5e1":"#a7f3d0"}`,borderRadius:"12px",padding:"12px 20px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.12)",display:"flex",alignItems:"center",gap:"10px",fontWeight:600,fontSize:"0.9rem",animation:"slideUp 0.25s ease-out"},children:[a.type==="error"?l.jsx(rg,{size:18}):a.type==="info"?l.jsx(RE,{size:18}):l.jsx(tf,{size:18}),l.jsx("span",{children:a.message})]}),l.jsx(ab,{isMobileOpen:c,setIsMobileOpen:d}),l.jsxs("div",{className:"main-content",children:[l.jsx(lb,{onToggleMobileSidebar:()=>d(!c),onSearchQuery:p=>{p.trim().length>2&&n==="home"&&r("announcements")}}),l.jsx("main",{style:{flex:1},children:h()}),l.jsxs("footer",{style:{padding:"24px 36px",borderTop:"1px solid #e2e8f0",backgroundColor:"#ffffff",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",fontSize:"0.82rem",color:"#64748b"},children:[l.jsxs("div",{children:[l.jsx("strong",{children:"CampusConnect"})," — An integrated student management and collabration platform"]}),l.jsx("div",{children:"Connect • Collaborate • Grow | Product Development Lab"})]})]})]})}function ub(){return l.jsx(cb,{})}B0.createRoot(document.getElementById("root")).render(l.jsx(D0.StrictMode,{children:l.jsx(j0,{children:l.jsx(ub,{})})}));
