(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Mc={exports:{}},Lo={},wc={exports:{}},gt={};var qp;function Rv(){if(qp)return gt;qp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function x(U,Q,Ve){this.props=U,this.context=Q,this.refs=R,this.updater=Ve||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=x.prototype;function D(U,Q,Ve){this.props=U,this.context=Q,this.refs=R,this.updater=Ve||S}var P=D.prototype=new g;P.constructor=D,A(P,x.prototype),P.isPureReactComponent=!0;var T=Array.isArray,B=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function G(U,Q,Ve){var ze,Z={},pe=null,he=null;if(Q!=null)for(ze in Q.ref!==void 0&&(he=Q.ref),Q.key!==void 0&&(pe=""+Q.key),Q)B.call(Q,ze)&&!k.hasOwnProperty(ze)&&(Z[ze]=Q[ze]);var Ce=arguments.length-2;if(Ce===1)Z.children=Ve;else if(1<Ce){for(var Pe=Array(Ce),ye=0;ye<Ce;ye++)Pe[ye]=arguments[ye+2];Z.children=Pe}if(U&&U.defaultProps)for(ze in Ce=U.defaultProps,Ce)Z[ze]===void 0&&(Z[ze]=Ce[ze]);return{$$typeof:s,type:U,key:pe,ref:he,props:Z,_owner:O.current}}function b(U,Q){return{$$typeof:s,type:U.type,key:Q,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function I(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ve){return Q[Ve]})}var se=/\/+/g;function ie(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?I(""+U.key):Q.toString(36)}function oe(U,Q,Ve,ze,Z){var pe=typeof U;(pe==="undefined"||pe==="boolean")&&(U=null);var he=!1;if(U===null)he=!0;else switch(pe){case"string":case"number":he=!0;break;case"object":switch(U.$$typeof){case s:case e:he=!0}}if(he)return he=U,Z=Z(he),U=ze===""?"."+ie(he,0):ze,T(Z)?(Ve="",U!=null&&(Ve=U.replace(se,"$&/")+"/"),oe(Z,Q,Ve,"",function(ye){return ye})):Z!=null&&(C(Z)&&(Z=b(Z,Ve+(!Z.key||he&&he.key===Z.key?"":(""+Z.key).replace(se,"$&/")+"/")+U)),Q.push(Z)),1;if(he=0,ze=ze===""?".":ze+":",T(U))for(var Ce=0;Ce<U.length;Ce++){pe=U[Ce];var Pe=ze+ie(pe,Ce);he+=oe(pe,Q,Ve,Pe,Z)}else if(Pe=y(U),typeof Pe=="function")for(U=Pe.call(U),Ce=0;!(pe=U.next()).done;)pe=pe.value,Pe=ze+ie(pe,Ce++),he+=oe(pe,Q,Ve,Pe,Z);else if(pe==="object")throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return he}function fe(U,Q,Ve){if(U==null)return U;var ze=[],Z=0;return oe(U,ze,"","",function(pe){return Q.call(Ve,pe,Z++)}),ze}function ne(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(Ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ve)},function(Ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ve)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var ue={current:null},V={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:V,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:fe,forEach:function(U,Q,Ve){fe(U,function(){Q.apply(this,arguments)},Ve)},count:function(U){var Q=0;return fe(U,function(){Q++}),Q},toArray:function(U){return fe(U,function(Q){return Q})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=x,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=D,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,gt.act=re,gt.cloneElement=function(U,Q,Ve){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ze=A({},U.props),Z=U.key,pe=U.ref,he=U._owner;if(Q!=null){if(Q.ref!==void 0&&(pe=Q.ref,he=O.current),Q.key!==void 0&&(Z=""+Q.key),U.type&&U.type.defaultProps)var Ce=U.type.defaultProps;for(Pe in Q)B.call(Q,Pe)&&!k.hasOwnProperty(Pe)&&(ze[Pe]=Q[Pe]===void 0&&Ce!==void 0?Ce[Pe]:Q[Pe])}var Pe=arguments.length-2;if(Pe===1)ze.children=Ve;else if(1<Pe){Ce=Array(Pe);for(var ye=0;ye<Pe;ye++)Ce[ye]=arguments[ye+2];ze.children=Ce}return{$$typeof:s,type:U.type,key:Z,ref:pe,props:ze,_owner:he}},gt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},gt.createElement=G,gt.createFactory=function(U){var Q=G.bind(null,U);return Q.type=U,Q},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:d,render:U}},gt.isValidElement=C,gt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ne}},gt.memo=function(U,Q){return{$$typeof:m,type:U,compare:Q===void 0?null:Q}},gt.startTransition=function(U){var Q=V.transition;V.transition={};try{U()}finally{V.transition=Q}},gt.unstable_act=re,gt.useCallback=function(U,Q){return ue.current.useCallback(U,Q)},gt.useContext=function(U){return ue.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return ue.current.useDeferredValue(U)},gt.useEffect=function(U,Q){return ue.current.useEffect(U,Q)},gt.useId=function(){return ue.current.useId()},gt.useImperativeHandle=function(U,Q,Ve){return ue.current.useImperativeHandle(U,Q,Ve)},gt.useInsertionEffect=function(U,Q){return ue.current.useInsertionEffect(U,Q)},gt.useLayoutEffect=function(U,Q){return ue.current.useLayoutEffect(U,Q)},gt.useMemo=function(U,Q){return ue.current.useMemo(U,Q)},gt.useReducer=function(U,Q,Ve){return ue.current.useReducer(U,Q,Ve)},gt.useRef=function(U){return ue.current.useRef(U)},gt.useState=function(U){return ue.current.useState(U)},gt.useSyncExternalStore=function(U,Q,Ve){return ue.current.useSyncExternalStore(U,Q,Ve)},gt.useTransition=function(){return ue.current.useTransition()},gt.version="18.3.1",gt}var Yp;function rd(){return Yp||(Yp=1,wc.exports=Rv()),wc.exports}var $p;function Cv(){if($p)return Lo;$p=1;var s=rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var _,v={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!l.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:y,ref:S,props:v,_owner:a.current}}return Lo.Fragment=t,Lo.jsx=c,Lo.jsxs=c,Lo}var Kp;function bv(){return Kp||(Kp=1,Mc.exports=Cv()),Mc.exports}var Ge=bv(),At=rd(),il={},Tc={exports:{}},Pn={},Ac={exports:{}},Rc={};var Zp;function Pv(){return Zp||(Zp=1,(function(s){function e(V,le){var re=V.length;V.push(le);e:for(;0<re;){var U=re-1>>>1,Q=V[U];if(0<a(Q,le))V[U]=le,V[re]=Q,re=U;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var le=V[0],re=V.pop();if(re!==le){V[0]=re;e:for(var U=0,Q=V.length,Ve=Q>>>1;U<Ve;){var ze=2*(U+1)-1,Z=V[ze],pe=ze+1,he=V[pe];if(0>a(Z,re))pe<Q&&0>a(he,Z)?(V[U]=he,V[pe]=re,U=pe):(V[U]=Z,V[ze]=re,U=ze);else if(pe<Q&&0>a(he,re))V[U]=he,V[pe]=re,U=pe;else break e}}return le}function a(V,le){var re=V.sortIndex-le.sortIndex;return re!==0?re:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],_=1,v=null,y=3,S=!1,A=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=V)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function T(V){if(R=!1,P(V),!A)if(t(p)!==null)A=!0,ne(B);else{var le=t(m);le!==null&&ue(T,le.startTime-V)}}function B(V,le){A=!1,R&&(R=!1,g(G),G=-1),S=!0;var re=y;try{for(P(le),v=t(p);v!==null&&(!(v.expirationTime>le)||V&&!I());){var U=v.callback;if(typeof U=="function"){v.callback=null,y=v.priorityLevel;var Q=U(v.expirationTime<=le);le=s.unstable_now(),typeof Q=="function"?v.callback=Q:v===t(p)&&r(p),P(le)}else r(p);v=t(p)}if(v!==null)var Ve=!0;else{var ze=t(m);ze!==null&&ue(T,ze.startTime-le),Ve=!1}return Ve}finally{v=null,y=re,S=!1}}var O=!1,k=null,G=-1,b=5,C=-1;function I(){return!(s.unstable_now()-C<b)}function se(){if(k!==null){var V=s.unstable_now();C=V;var le=!0;try{le=k(!0,V)}finally{le?ie():(O=!1,k=null)}}else O=!1}var ie;if(typeof D=="function")ie=function(){D(se)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,fe=oe.port2;oe.port1.onmessage=se,ie=function(){fe.postMessage(null)}}else ie=function(){x(se,0)};function ne(V){k=V,O||(O=!0,ie())}function ue(V,le){G=x(function(){V(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){A||S||(A=!0,ne(B))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(V){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var re=y;y=le;try{return V()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var re=y;y=V;try{return le()}finally{y=re}},s.unstable_scheduleCallback=function(V,le,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,V){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=re+Q,V={id:_++,callback:le,priorityLevel:V,startTime:re,expirationTime:Q,sortIndex:-1},re>U?(V.sortIndex=re,e(m,V),t(p)===null&&V===t(m)&&(R?(g(G),G=-1):R=!0,ue(T,re-U))):(V.sortIndex=Q,e(p,V),A||S||(A=!0,ne(B))),V},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(V){var le=y;return function(){var re=y;y=le;try{return V.apply(this,arguments)}finally{y=re}}}})(Rc)),Rc}var Jp;function Lv(){return Jp||(Jp=1,Ac.exports=Pv()),Ac.exports}var Qp;function Dv(){if(Qp)return Pn;Qp=1;var s=rd(),e=Lv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function y(n){return p.call(v,n)?!0:p.call(_,n)?!1:m.test(n)?v[n]=!0:(_[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,u,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,D);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,D);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,D);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,u){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,o,f,u)&&(o=null),u||f===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),I=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function Q(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ve=!1;function ze(n,i){if(!n||Ve)return"";Ve=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){u=J}n.call(i.prototype)}else{try{throw Error()}catch(J){u=J}n()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var f=J.stack.split(`
`),h=u.stack.split(`
`),E=f.length-1,N=h.length-1;1<=E&&0<=N&&f[E]!==h[N];)N--;for(;1<=E&&0<=N;E--,N--)if(f[E]!==h[N]){if(E!==1||N!==1)do if(E--,N--,0>N||f[E]!==h[N]){var z=`
`+f[E].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=E&&0<=N);break}}}finally{Ve=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Q(n):""}function Z(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=ze(n.type,!1),n;case 11:return n=ze(n.type.render,!1),n;case 1:return n=ze(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case O:return"Portal";case b:return"Profiler";case G:return"StrictMode";case ie:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:pe(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return pe(n(i))}catch{}}return null}function he(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ye(n){var i=Pe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,h.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ie(n){n._valueTracker||(n._valueTracker=ye(n))}function Re(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Pe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function F(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ye(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ce(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ne(n,i){st(n,i);var o=Ce(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Be(n,i.type,o):i.hasOwnProperty("defaultValue")&&Be(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function yt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Be(n,i,o){(i!=="number"||F(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var lt=Array.isArray;function Ct(n,i,o,u){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ce(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function zt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(lt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ce(o)}}function M(n,i){var o=Ce(i.value),u=Ce(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function $(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,Je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(n){Qe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),We[i]=We[n]})});function Me(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||We.hasOwnProperty(n)&&We[n]?(""+i).trim():i+"px"}function Ue(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=Me(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,f):n[o]=f}}var ot=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(ot[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Se=null,Ae=null,Fe=null;function xe(n){if(n=go(n)){if(typeof Se!="function")throw Error(t(280));var i=n.stateNode;i&&(i=va(i),Se(n.stateNode,n.type,i))}}function de(n){Ae?Fe?Fe.push(n):Fe=[n]:Ae=n}function qe(){if(Ae){var n=Ae,i=Fe;if(Fe=Ae=null,xe(n),i)for(n=0;n<i.length;n++)xe(i[n])}}function ft(n,i){return n(i)}function Dt(){}var Mt=!1;function Xn(n,i,o){if(Mt)return n(i,o);Mt=!0;try{return ft(n,i,o)}finally{Mt=!1,(Ae!==null||Fe!==null)&&(Dt(),qe())}}function fn(n,i){var o=n.stateNode;if(o===null)return null;var u=va(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var es=!1;if(d)try{var In={};Object.defineProperty(In,"passive",{get:function(){es=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{es=!1}function Js(n,i,o,u,f,h,E,N,z){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ge){this.onError(ge)}}var qi=!1,Tr=null,Ri=!1,ts=null,ns={onError:function(n){qi=!0,Tr=n}};function Zo(n,i,o,u,f,h,E,N,z){qi=!1,Tr=null,Js.apply(ns,arguments)}function Jo(n,i,o,u,f,h,E,N,z){if(Zo.apply(this,arguments),qi){if(qi){var J=Tr;qi=!1,Tr=null}else throw Error(t(198));Ri||(Ri=!0,ts=J)}}function Ci(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Qo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ea(n){if(Ci(n)!==n)throw Error(t(188))}function jl(n){var i=n.alternate;if(!i){if(i=Ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return ea(f),n;if(h===u)return ea(f),i;h=h.sibling}throw Error(t(188))}if(o.return!==u.return)o=f,u=h;else{for(var E=!1,N=f.child;N;){if(N===o){E=!0,o=f,u=h;break}if(N===u){E=!0,u=f,o=h;break}N=N.sibling}if(!E){for(N=h.child;N;){if(N===o){E=!0,o=h,u=f;break}if(N===u){E=!0,u=h,o=f;break}N=N.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ta(n){return n=jl(n),n!==null?na(n):null}function na(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=na(n);if(i!==null)return i;n=n.sibling}return null}var w=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ee=e.unstable_shouldYield,te=e.unstable_requestPaint,W=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Le=e.unstable_ImmediatePriority,Xe=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,rt=e.unstable_LowPriority,at=e.unstable_IdlePriority,et=null,ut=null;function Lt(n){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:tt,Ot=Math.log,Nt=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(Ot(n)/Nt|0)|0}var Ut=64,_t=4194304;function Qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ti(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,h=n.pingedLanes,E=o&268435455;if(E!==0){var N=E&~f;N!==0?u=Qt(N):(h&=E,h!==0&&(u=Qt(h)))}else E=o&~f,E!==0?u=Qt(E):h!==0&&(u=Qt(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-wt(i),f=1<<o,u|=n[o],i&=~f;return u}function xn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,h=n.pendingLanes;0<h;){var E=31-wt(h),N=1<<E,z=f[E];z===-1?((N&o)===0||(N&u)!==0)&&(f[E]=xn(N,i)):z<=i&&(n.expiredLanes|=N),h&=~N}}function kt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=Ut;return Ut<<=1,(Ut&4194240)===0&&(Ut=64),n}function dn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Yt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-wt(i),n[i]=o}function hn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-wt(o),h=1<<f;i[f]=0,u[f]=-1,n[f]=-1,o&=~h}}function Rr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-wt(o),f=1<<u;f&i|n[u]&i&&(n[u]|=i),o&=~f}}var vt=0;function Td(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ad,ql,Rd,Cd,bd,Yl=!1,ia=[],Yi=null,$i=null,Ki=null,Qs=new Map,eo=new Map,Zi=[],$g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(n,i){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(i.pointerId)}}function to(n,i,o,u,f,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:h,targetContainers:[f]},i!==null&&(i=go(i),i!==null&&ql(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Kg(n,i,o,u,f){switch(i){case"focusin":return Yi=to(Yi,n,i,o,u,f),!0;case"dragenter":return $i=to($i,n,i,o,u,f),!0;case"mouseover":return Ki=to(Ki,n,i,o,u,f),!0;case"pointerover":var h=f.pointerId;return Qs.set(h,to(Qs.get(h)||null,n,i,o,u,f)),!0;case"gotpointercapture":return h=f.pointerId,eo.set(h,to(eo.get(h)||null,n,i,o,u,f)),!0}return!1}function Ld(n){var i=Cr(n.target);if(i!==null){var o=Ci(i);if(o!==null){if(i=o.tag,i===13){if(i=Qo(o),i!==null){n.blockedOn=i,bd(n.priority,function(){Rd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ra(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Kl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);dt=u,o.target.dispatchEvent(u),dt=null}else return i=go(o),i!==null&&ql(i),n.blockedOn=o,!1;i.shift()}return!0}function Dd(n,i,o){ra(n)&&o.delete(i)}function Zg(){Yl=!1,Yi!==null&&ra(Yi)&&(Yi=null),$i!==null&&ra($i)&&($i=null),Ki!==null&&ra(Ki)&&(Ki=null),Qs.forEach(Dd),eo.forEach(Dd)}function no(n,i){n.blockedOn===i&&(n.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function io(n){function i(f){return no(f,n)}if(0<ia.length){no(ia[0],n);for(var o=1;o<ia.length;o++){var u=ia[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Yi!==null&&no(Yi,n),$i!==null&&no($i,n),Ki!==null&&no(Ki,n),Qs.forEach(i),eo.forEach(i),o=0;o<Zi.length;o++)u=Zi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)Ld(o),o.blockedOn===null&&Zi.shift()}var is=T.ReactCurrentBatchConfig,sa=!0;function Jg(n,i,o,u){var f=vt,h=is.transition;is.transition=null;try{vt=1,$l(n,i,o,u)}finally{vt=f,is.transition=h}}function Qg(n,i,o,u){var f=vt,h=is.transition;is.transition=null;try{vt=4,$l(n,i,o,u)}finally{vt=f,is.transition=h}}function $l(n,i,o,u){if(sa){var f=Kl(n,i,o,u);if(f===null)hu(n,i,u,oa,o),Pd(n,u);else if(Kg(f,n,i,o,u))u.stopPropagation();else if(Pd(n,u),i&4&&-1<$g.indexOf(n)){for(;f!==null;){var h=go(f);if(h!==null&&Ad(h),h=Kl(n,i,o,u),h===null&&hu(n,i,u,oa,o),h===f)break;f=h}f!==null&&u.stopPropagation()}else hu(n,i,u,null,o)}}var oa=null;function Kl(n,i,o,u){if(oa=null,n=H(u),n=Cr(n),n!==null)if(i=Ci(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Qo(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return oa=n,null}function Nd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Le:return 1;case Xe:return 4;case Oe:case rt:return 16;case at:return 536870912;default:return 16}default:return 16}}var Ji=null,Zl=null,aa=null;function Ud(){if(aa)return aa;var n,i=Zl,o=i.length,u,f="value"in Ji?Ji.value:Ji.textContent,h=f.length;for(n=0;n<o&&i[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===f[h-u];u++);return aa=f.slice(n,1<u?1-u:void 0)}function la(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ua(){return!0}function Id(){return!1}function Fn(n){function i(o,u,f,h,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ua:Id,this.isPropagationStopped=Id,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=Fn(rs),ro=re({},rs,{view:0,detail:0}),e_=Fn(ro),Ql,eu,so,ca=re({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==so&&(so&&n.type==="mousemove"?(Ql=n.screenX-so.screenX,eu=n.screenY-so.screenY):eu=Ql=0,so=n),Ql)},movementY:function(n){return"movementY"in n?n.movementY:eu}}),Fd=Fn(ca),t_=re({},ca,{dataTransfer:0}),n_=Fn(t_),i_=re({},ro,{relatedTarget:0}),tu=Fn(i_),r_=re({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),s_=Fn(r_),o_=re({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),a_=Fn(o_),l_=re({},rs,{data:0}),Od=Fn(l_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=f_[n])?!!i[n]:!1}function nu(){return d_}var h_=re({},ro,{key:function(n){if(n.key){var i=u_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=la(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?c_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(n){return n.type==="keypress"?la(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?la(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p_=Fn(h_),m_=re({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Fn(m_),g_=re({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),__=Fn(g_),v_=re({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),y_=Fn(v_),x_=re({},ca,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),S_=Fn(x_),E_=[9,13,27,32],iu=d&&"CompositionEvent"in window,oo=null;d&&"documentMode"in document&&(oo=document.documentMode);var M_=d&&"TextEvent"in window&&!oo,Bd=d&&(!iu||oo&&8<oo&&11>=oo),zd=" ",Vd=!1;function Hd(n,i){switch(n){case"keyup":return E_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function w_(n,i){switch(n){case"compositionend":return Gd(i);case"keypress":return i.which!==32?null:(Vd=!0,zd);case"textInput":return n=i.data,n===zd&&Vd?null:n;default:return null}}function T_(n,i){if(ss)return n==="compositionend"||!iu&&Hd(n,i)?(n=Ud(),aa=Zl=Ji=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bd&&i.locale!=="ko"?null:i.data;default:return null}}var A_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!A_[n.type]:i==="textarea"}function Xd(n,i,o,u){de(u),i=ma(i,"onChange"),0<i.length&&(o=new Jl("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var ao=null,lo=null;function R_(n){uh(n,0)}function fa(n){var i=cs(n);if(Re(i))return n}function C_(n,i){if(n==="change")return i}var jd=!1;if(d){var ru;if(d){var su="oninput"in document;if(!su){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),su=typeof qd.oninput=="function"}ru=su}else ru=!1;jd=ru&&(!document.documentMode||9<document.documentMode)}function Yd(){ao&&(ao.detachEvent("onpropertychange",$d),lo=ao=null)}function $d(n){if(n.propertyName==="value"&&fa(lo)){var i=[];Xd(i,lo,n,H(n)),Xn(R_,i)}}function b_(n,i,o){n==="focusin"?(Yd(),ao=i,lo=o,ao.attachEvent("onpropertychange",$d)):n==="focusout"&&Yd()}function P_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fa(lo)}function L_(n,i){if(n==="click")return fa(i)}function D_(n,i){if(n==="input"||n==="change")return fa(i)}function N_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:N_;function uo(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!p.call(i,f)||!ni(n[f],i[f]))return!1}return!0}function Kd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zd(n,i){var o=Kd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kd(o)}}function Jd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Jd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qd(){for(var n=window,i=F();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=F(n.document)}return i}function ou(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function U_(n){var i=Qd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Jd(o.ownerDocument.documentElement,o)){if(u!==null&&ou(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,h=Math.min(u.start,f);u=u.end===void 0?h:Math.min(u.end,f),!n.extend&&h>u&&(f=u,u=h,h=f),f=Zd(o,h);var E=Zd(o,u);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),h>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var I_=d&&"documentMode"in document&&11>=document.documentMode,os=null,au=null,co=null,lu=!1;function eh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lu||os==null||os!==F(u)||(u=os,"selectionStart"in u&&ou(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),co&&uo(co,u)||(co=u,u=ma(au,"onSelect"),0<u.length&&(i=new Jl("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=os)))}function da(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var as={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},uu={},th={};d&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ha(n){if(uu[n])return uu[n];if(!as[n])return n;var i=as[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in th)return uu[n]=i[o];return n}var nh=ha("animationend"),ih=ha("animationiteration"),rh=ha("animationstart"),sh=ha("transitionend"),oh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(n,i){oh.set(n,i),l(i,[n])}for(var cu=0;cu<ah.length;cu++){var fu=ah[cu],F_=fu.toLowerCase(),O_=fu[0].toUpperCase()+fu.slice(1);Qi(F_,"on"+O_)}Qi(nh,"onAnimationEnd"),Qi(ih,"onAnimationIteration"),Qi(rh,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(sh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k_=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function lh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Jo(u,i,void 0,n),n.currentTarget=null}function uh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var E=u.length-1;0<=E;E--){var N=u[E],z=N.instance,J=N.currentTarget;if(N=N.listener,z!==h&&f.isPropagationStopped())break e;lh(f,N,J),h=z}else for(E=0;E<u.length;E++){if(N=u[E],z=N.instance,J=N.currentTarget,N=N.listener,z!==h&&f.isPropagationStopped())break e;lh(f,N,J),h=z}}}if(Ri)throw n=ts,Ri=!1,ts=null,n}function Vt(n,i){var o=i[yu];o===void 0&&(o=i[yu]=new Set);var u=n+"__bubble";o.has(u)||(ch(i,n,2,!1),o.add(u))}function du(n,i,o){var u=0;i&&(u|=4),ch(o,n,u,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function ho(n){if(!n[pa]){n[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(k_.has(o)||du(o,!1,n),du(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[pa]||(i[pa]=!0,du("selectionchange",!1,i))}}function ch(n,i,o,u){switch(Nd(i)){case 1:var f=Jg;break;case 4:f=Qg;break;default:f=$l}o=f.bind(null,i,o,n),f=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function hu(n,i,o,u,f){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var N=u.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;E=E.return}for(;N!==null;){if(E=Cr(N),E===null)return;if(z=E.tag,z===5||z===6){u=h=E;continue e}N=N.parentNode}}u=u.return}Xn(function(){var J=h,ge=H(o),ve=[];e:{var me=oh.get(n);if(me!==void 0){var ke=Jl,je=n;switch(n){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":ke=p_;break;case"focusin":je="focus",ke=tu;break;case"focusout":je="blur",ke=tu;break;case"beforeblur":case"afterblur":ke=tu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=n_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=__;break;case nh:case ih:case rh:ke=s_;break;case sh:ke=y_;break;case"scroll":ke=e_;break;case"wheel":ke=S_;break;case"copy":case"cut":case"paste":ke=a_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=kd}var $e=(i&4)!==0,$t=!$e&&n==="scroll",Y=$e?me!==null?me+"Capture":null:me;$e=[];for(var X=J,K;X!==null;){K=X;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,Y!==null&&(we=fn(X,Y),we!=null&&$e.push(po(X,we,K)))),$t)break;X=X.return}0<$e.length&&(me=new ke(me,je,null,o,ge),ve.push({event:me,listeners:$e}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",me&&o!==dt&&(je=o.relatedTarget||o.fromElement)&&(Cr(je)||je[bi]))break e;if((ke||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,ke?(je=o.relatedTarget||o.toElement,ke=J,je=je?Cr(je):null,je!==null&&($t=Ci(je),je!==$t||je.tag!==5&&je.tag!==6)&&(je=null)):(ke=null,je=J),ke!==je)){if($e=Fd,we="onMouseLeave",Y="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&($e=kd,we="onPointerLeave",Y="onPointerEnter",X="pointer"),$t=ke==null?me:cs(ke),K=je==null?me:cs(je),me=new $e(we,X+"leave",ke,o,ge),me.target=$t,me.relatedTarget=K,we=null,Cr(ge)===J&&($e=new $e(Y,X+"enter",je,o,ge),$e.target=K,$e.relatedTarget=$t,we=$e),$t=we,ke&&je)t:{for($e=ke,Y=je,X=0,K=$e;K;K=ls(K))X++;for(K=0,we=Y;we;we=ls(we))K++;for(;0<X-K;)$e=ls($e),X--;for(;0<K-X;)Y=ls(Y),K--;for(;X--;){if($e===Y||Y!==null&&$e===Y.alternate)break t;$e=ls($e),Y=ls(Y)}$e=null}else $e=null;ke!==null&&fh(ve,me,ke,$e,!1),je!==null&&$t!==null&&fh(ve,$t,je,$e,!0)}}e:{if(me=J?cs(J):window,ke=me.nodeName&&me.nodeName.toLowerCase(),ke==="select"||ke==="input"&&me.type==="file")var Ze=C_;else if(Wd(me))if(jd)Ze=D_;else{Ze=P_;var nt=b_}else(ke=me.nodeName)&&ke.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ze=L_);if(Ze&&(Ze=Ze(n,J))){Xd(ve,Ze,o,ge);break e}nt&&nt(n,me,J),n==="focusout"&&(nt=me._wrapperState)&&nt.controlled&&me.type==="number"&&Be(me,"number",me.value)}switch(nt=J?cs(J):window,n){case"focusin":(Wd(nt)||nt.contentEditable==="true")&&(os=nt,au=J,co=null);break;case"focusout":co=au=os=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,eh(ve,o,ge);break;case"selectionchange":if(I_)break;case"keydown":case"keyup":eh(ve,o,ge)}var it;if(iu)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else ss?Hd(n,o)&&(ct="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ct="onCompositionStart");ct&&(Bd&&o.locale!=="ko"&&(ss||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&ss&&(it=Ud()):(Ji=ge,Zl="value"in Ji?Ji.value:Ji.textContent,ss=!0)),nt=ma(J,ct),0<nt.length&&(ct=new Od(ct,n,null,o,ge),ve.push({event:ct,listeners:nt}),it?ct.data=it:(it=Gd(o),it!==null&&(ct.data=it)))),(it=M_?w_(n,o):T_(n,o))&&(J=ma(J,"onBeforeInput"),0<J.length&&(ge=new Od("onBeforeInput","beforeinput",null,o,ge),ve.push({event:ge,listeners:J}),ge.data=it))}uh(ve,i)})}function po(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ma(n,i){for(var o=i+"Capture",u=[];n!==null;){var f=n,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=fn(n,o),h!=null&&u.unshift(po(n,h,f)),h=fn(n,i),h!=null&&u.push(po(n,h,f))),n=n.return}return u}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fh(n,i,o,u,f){for(var h=i._reactName,E=[];o!==null&&o!==u;){var N=o,z=N.alternate,J=N.stateNode;if(z!==null&&z===u)break;N.tag===5&&J!==null&&(N=J,f?(z=fn(o,h),z!=null&&E.unshift(po(o,z,N))):f||(z=fn(o,h),z!=null&&E.push(po(o,z,N)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var B_=/\r\n?/g,z_=/\u0000|\uFFFD/g;function dh(n){return(typeof n=="string"?n:""+n).replace(B_,`
`).replace(z_,"")}function ga(n,i,o){if(i=dh(i),dh(n)!==i&&o)throw Error(t(425))}function _a(){}var pu=null,mu=null;function gu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,V_=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,H_=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(n){return hh.resolve(null).then(n).catch(G_)}:_u;function G_(n){setTimeout(function(){throw n})}function vu(n,i){var o=i,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),io(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);io(i)}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ph(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),mi="__reactFiber$"+us,mo="__reactProps$"+us,bi="__reactContainer$"+us,yu="__reactEvents$"+us,W_="__reactListeners$"+us,X_="__reactHandles$"+us;function Cr(n){var i=n[mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[bi]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=ph(n);n!==null;){if(o=n[mi])return o;n=ph(n)}return i}n=o,o=n.parentNode}return null}function go(n){return n=n[mi]||n[bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function va(n){return n[mo]||null}var xu=[],fs=-1;function tr(n){return{current:n}}function Ht(n){0>fs||(n.current=xu[fs],xu[fs]=null,fs--)}function Bt(n,i){fs++,xu[fs]=n.current,n.current=i}var nr={},pn=tr(nr),Tn=tr(!1),br=nr;function ds(n,i){var o=n.type.contextTypes;if(!o)return nr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function An(n){return n=n.childContextTypes,n!=null}function ya(){Ht(Tn),Ht(pn)}function mh(n,i,o){if(pn.current!==nr)throw Error(t(168));Bt(pn,i),Bt(Tn,o)}function gh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,he(n)||"Unknown",f));return re({},o,u)}function xa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,br=pn.current,Bt(pn,n),Bt(Tn,Tn.current),!0}function _h(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=gh(n,i,br),u.__reactInternalMemoizedMergedChildContext=n,Ht(Tn),Ht(pn),Bt(pn,n)):Ht(Tn),Bt(Tn,o)}var Pi=null,Sa=!1,Su=!1;function vh(n){Pi===null?Pi=[n]:Pi.push(n)}function j_(n){Sa=!0,vh(n)}function ir(){if(!Su&&Pi!==null){Su=!0;var n=0,i=vt;try{var o=Pi;for(vt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Pi=null,Sa=!1}catch(f){throw Pi!==null&&(Pi=Pi.slice(n+1)),w(Le,ir),f}finally{vt=i,Su=!1}}return null}var hs=[],ps=0,Ea=null,Ma=0,jn=[],qn=0,Pr=null,Li=1,Di="";function Lr(n,i){hs[ps++]=Ma,hs[ps++]=Ea,Ea=n,Ma=i}function yh(n,i,o){jn[qn++]=Li,jn[qn++]=Di,jn[qn++]=Pr,Pr=n;var u=Li;n=Di;var f=32-wt(u)-1;u&=~(1<<f),o+=1;var h=32-wt(i)+f;if(30<h){var E=f-f%5;h=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Li=1<<32-wt(i)+f|o<<f|u,Di=h+n}else Li=1<<h|o<<f|u,Di=n}function Eu(n){n.return!==null&&(Lr(n,1),yh(n,1,0))}function Mu(n){for(;n===Ea;)Ea=hs[--ps],hs[ps]=null,Ma=hs[--ps],hs[ps]=null;for(;n===Pr;)Pr=jn[--qn],jn[qn]=null,Di=jn[--qn],jn[qn]=null,Li=jn[--qn],jn[qn]=null}var On=null,kn=null,Gt=!1,ii=null;function xh(n,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Sh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,kn=er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Li,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,On=n,kn=null,!0):!1;default:return!1}}function wu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Tu(n){if(Gt){var i=kn;if(i){var o=i;if(!Sh(n,i)){if(wu(n))throw Error(t(418));i=er(o.nextSibling);var u=On;i&&Sh(n,i)?xh(u,o):(n.flags=n.flags&-4097|2,Gt=!1,On=n)}}else{if(wu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,On=n}}}function Eh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function wa(n){if(n!==On)return!1;if(!Gt)return Eh(n),Gt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!gu(n.type,n.memoizedProps)),i&&(i=kn)){if(wu(n))throw Mh(),Error(t(418));for(;i;)xh(n,i),i=er(i.nextSibling)}if(Eh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){kn=er(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=On?er(n.stateNode.nextSibling):null;return!0}function Mh(){for(var n=kn;n;)n=er(n.nextSibling)}function ms(){kn=On=null,Gt=!1}function Au(n){ii===null?ii=[n]:ii.push(n)}var q_=T.ReactCurrentBatchConfig;function _o(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var f=u,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var N=f.refs;E===null?delete N[h]:N[h]=E},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ta(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function wh(n){var i=n._init;return i(n._payload)}function Th(n){function i(Y,X){if(n){var K=Y.deletions;K===null?(Y.deletions=[X],Y.flags|=16):K.push(X)}}function o(Y,X){if(!n)return null;for(;X!==null;)i(Y,X),X=X.sibling;return null}function u(Y,X){for(Y=new Map;X!==null;)X.key!==null?Y.set(X.key,X):Y.set(X.index,X),X=X.sibling;return Y}function f(Y,X){return Y=fr(Y,X),Y.index=0,Y.sibling=null,Y}function h(Y,X,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<X?(Y.flags|=2,X):K):(Y.flags|=2,X)):(Y.flags|=1048576,X)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,X,K,we){return X===null||X.tag!==6?(X=_c(K,Y.mode,we),X.return=Y,X):(X=f(X,K),X.return=Y,X)}function z(Y,X,K,we){var Ze=K.type;return Ze===k?ge(Y,X,K.props.children,we,K.key):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ne&&wh(Ze)===X.type)?(we=f(X,K.props),we.ref=_o(Y,X,K),we.return=Y,we):(we=$a(K.type,K.key,K.props,null,Y.mode,we),we.ref=_o(Y,X,K),we.return=Y,we)}function J(Y,X,K,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=vc(K,Y.mode,we),X.return=Y,X):(X=f(X,K.children||[]),X.return=Y,X)}function ge(Y,X,K,we,Ze){return X===null||X.tag!==7?(X=Br(K,Y.mode,we,Ze),X.return=Y,X):(X=f(X,K),X.return=Y,X)}function ve(Y,X,K){if(typeof X=="string"&&X!==""||typeof X=="number")return X=_c(""+X,Y.mode,K),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case B:return K=$a(X.type,X.key,X.props,null,Y.mode,K),K.ref=_o(Y,null,X),K.return=Y,K;case O:return X=vc(X,Y.mode,K),X.return=Y,X;case ne:var we=X._init;return ve(Y,we(X._payload),K)}if(lt(X)||le(X))return X=Br(X,Y.mode,K,null),X.return=Y,X;Ta(Y,X)}return null}function me(Y,X,K,we){var Ze=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ze!==null?null:N(Y,X,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case B:return K.key===Ze?z(Y,X,K,we):null;case O:return K.key===Ze?J(Y,X,K,we):null;case ne:return Ze=K._init,me(Y,X,Ze(K._payload),we)}if(lt(K)||le(K))return Ze!==null?null:ge(Y,X,K,we,null);Ta(Y,K)}return null}function ke(Y,X,K,we,Ze){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(K)||null,N(X,Y,""+we,Ze);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case B:return Y=Y.get(we.key===null?K:we.key)||null,z(X,Y,we,Ze);case O:return Y=Y.get(we.key===null?K:we.key)||null,J(X,Y,we,Ze);case ne:var nt=we._init;return ke(Y,X,K,nt(we._payload),Ze)}if(lt(we)||le(we))return Y=Y.get(K)||null,ge(X,Y,we,Ze,null);Ta(X,we)}return null}function je(Y,X,K,we){for(var Ze=null,nt=null,it=X,ct=X=0,an=null;it!==null&&ct<K.length;ct++){it.index>ct?(an=it,it=null):an=it.sibling;var bt=me(Y,it,K[ct],we);if(bt===null){it===null&&(it=an);break}n&&it&&bt.alternate===null&&i(Y,it),X=h(bt,X,ct),nt===null?Ze=bt:nt.sibling=bt,nt=bt,it=an}if(ct===K.length)return o(Y,it),Gt&&Lr(Y,ct),Ze;if(it===null){for(;ct<K.length;ct++)it=ve(Y,K[ct],we),it!==null&&(X=h(it,X,ct),nt===null?Ze=it:nt.sibling=it,nt=it);return Gt&&Lr(Y,ct),Ze}for(it=u(Y,it);ct<K.length;ct++)an=ke(it,Y,ct,K[ct],we),an!==null&&(n&&an.alternate!==null&&it.delete(an.key===null?ct:an.key),X=h(an,X,ct),nt===null?Ze=an:nt.sibling=an,nt=an);return n&&it.forEach(function(dr){return i(Y,dr)}),Gt&&Lr(Y,ct),Ze}function $e(Y,X,K,we){var Ze=le(K);if(typeof Ze!="function")throw Error(t(150));if(K=Ze.call(K),K==null)throw Error(t(151));for(var nt=Ze=null,it=X,ct=X=0,an=null,bt=K.next();it!==null&&!bt.done;ct++,bt=K.next()){it.index>ct?(an=it,it=null):an=it.sibling;var dr=me(Y,it,bt.value,we);if(dr===null){it===null&&(it=an);break}n&&it&&dr.alternate===null&&i(Y,it),X=h(dr,X,ct),nt===null?Ze=dr:nt.sibling=dr,nt=dr,it=an}if(bt.done)return o(Y,it),Gt&&Lr(Y,ct),Ze;if(it===null){for(;!bt.done;ct++,bt=K.next())bt=ve(Y,bt.value,we),bt!==null&&(X=h(bt,X,ct),nt===null?Ze=bt:nt.sibling=bt,nt=bt);return Gt&&Lr(Y,ct),Ze}for(it=u(Y,it);!bt.done;ct++,bt=K.next())bt=ke(it,Y,ct,bt.value,we),bt!==null&&(n&&bt.alternate!==null&&it.delete(bt.key===null?ct:bt.key),X=h(bt,X,ct),nt===null?Ze=bt:nt.sibling=bt,nt=bt);return n&&it.forEach(function(Av){return i(Y,Av)}),Gt&&Lr(Y,ct),Ze}function $t(Y,X,K,we){if(typeof K=="object"&&K!==null&&K.type===k&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case B:e:{for(var Ze=K.key,nt=X;nt!==null;){if(nt.key===Ze){if(Ze=K.type,Ze===k){if(nt.tag===7){o(Y,nt.sibling),X=f(nt,K.props.children),X.return=Y,Y=X;break e}}else if(nt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ne&&wh(Ze)===nt.type){o(Y,nt.sibling),X=f(nt,K.props),X.ref=_o(Y,nt,K),X.return=Y,Y=X;break e}o(Y,nt);break}else i(Y,nt);nt=nt.sibling}K.type===k?(X=Br(K.props.children,Y.mode,we,K.key),X.return=Y,Y=X):(we=$a(K.type,K.key,K.props,null,Y.mode,we),we.ref=_o(Y,X,K),we.return=Y,Y=we)}return E(Y);case O:e:{for(nt=K.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){o(Y,X.sibling),X=f(X,K.children||[]),X.return=Y,Y=X;break e}else{o(Y,X);break}else i(Y,X);X=X.sibling}X=vc(K,Y.mode,we),X.return=Y,Y=X}return E(Y);case ne:return nt=K._init,$t(Y,X,nt(K._payload),we)}if(lt(K))return je(Y,X,K,we);if(le(K))return $e(Y,X,K,we);Ta(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,X!==null&&X.tag===6?(o(Y,X.sibling),X=f(X,K),X.return=Y,Y=X):(o(Y,X),X=_c(K,Y.mode,we),X.return=Y,Y=X),E(Y)):o(Y,X)}return $t}var gs=Th(!0),Ah=Th(!1),Aa=tr(null),Ra=null,_s=null,Ru=null;function Cu(){Ru=_s=Ra=null}function bu(n){var i=Aa.current;Ht(Aa),n._currentValue=i}function Pu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function vs(n,i){Ra=n,Ru=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function Yn(n){var i=n._currentValue;if(Ru!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Ra===null)throw Error(t(308));_s=n,Ra.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Dr=null;function Lu(n){Dr===null?Dr=[n]:Dr.push(n)}function Rh(n,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Lu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ni(n,u)}function Ni(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var rr=!1;function Du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ch(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Ni(n,o)}return f=u.interleaved,f===null?(i.next=i,Lu(u)):(i.next=f.next,f.next=i),u.interleaved=i,Ni(n,o)}function Ca(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Rr(n,o)}}function bh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function ba(n,i,o,u){var f=n.updateQueue;rr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var z=N,J=z.next;z.next=null,E===null?h=J:E.next=J,E=z;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,N=ge.lastBaseUpdate,N!==E&&(N===null?ge.firstBaseUpdate=J:N.next=J,ge.lastBaseUpdate=z))}if(h!==null){var ve=f.baseState;E=0,ge=J=z=null,N=h;do{var me=N.lane,ke=N.eventTime;if((u&me)===me){ge!==null&&(ge=ge.next={eventTime:ke,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var je=n,$e=N;switch(me=i,ke=o,$e.tag){case 1:if(je=$e.payload,typeof je=="function"){ve=je.call(ke,ve,me);break e}ve=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,me=typeof je=="function"?je.call(ke,ve,me):je,me==null)break e;ve=re({},ve,me);break e;case 2:rr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,me=f.effects,me===null?f.effects=[N]:me.push(N))}else ke={eventTime:ke,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ge===null?(J=ge=ke,z=ve):ge=ge.next=ke,E|=me;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;me=N,N=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(ge===null&&(z=ve),f.baseState=z,f.firstBaseUpdate=J,f.lastBaseUpdate=ge,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Ir|=E,n.lanes=E,n.memoizedState=ve}}function Ph(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var vo={},gi=tr(vo),yo=tr(vo),xo=tr(vo);function Nr(n){if(n===vo)throw Error(t(174));return n}function Nu(n,i){switch(Bt(xo,i),Bt(yo,n),Bt(gi,vo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_e(i,n)}Ht(gi),Bt(gi,i)}function ys(){Ht(gi),Ht(yo),Ht(xo)}function Lh(n){Nr(xo.current);var i=Nr(gi.current),o=_e(i,n.type);i!==o&&(Bt(yo,n),Bt(gi,o))}function Uu(n){yo.current===n&&(Ht(gi),Ht(yo))}var Wt=tr(0);function Pa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Iu=[];function Fu(){for(var n=0;n<Iu.length;n++)Iu[n]._workInProgressVersionPrimary=null;Iu.length=0}var La=T.ReactCurrentDispatcher,Ou=T.ReactCurrentBatchConfig,Ur=0,Xt=null,en=null,sn=null,Da=!1,So=!1,Eo=0,Y_=0;function mn(){throw Error(t(321))}function ku(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ni(n[o],i[o]))return!1;return!0}function Bu(n,i,o,u,f,h){if(Ur=h,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=n===null||n.memoizedState===null?J_:Q_,n=o(u,f),So){h=0;do{if(So=!1,Eo=0,25<=h)throw Error(t(301));h+=1,sn=en=null,i.updateQueue=null,La.current=ev,n=o(u,f)}while(So)}if(La.current=Ia,i=en!==null&&en.next!==null,Ur=0,sn=en=Xt=null,Da=!1,i)throw Error(t(300));return n}function zu(){var n=Eo!==0;return Eo=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Xt.memoizedState=sn=n:sn=sn.next=n,sn}function $n(){if(en===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=sn===null?Xt.memoizedState:sn.next;if(i!==null)sn=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},sn===null?Xt.memoizedState=sn=n:sn=sn.next=n}return sn}function Mo(n,i){return typeof i=="function"?i(n):i}function Vu(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=en,f=u.baseQueue,h=o.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}u.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,u=u.baseState;var N=E=null,z=null,J=h;do{var ge=J.lane;if((Ur&ge)===ge)z!==null&&(z=z.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:n(u,J.action);else{var ve={lane:ge,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};z===null?(N=z=ve,E=u):z=z.next=ve,Xt.lanes|=ge,Ir|=ge}J=J.next}while(J!==null&&J!==h);z===null?E=u:z.next=N,ni(u,i.memoizedState)||(Rn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=z,o.lastRenderedState=u}if(n=o.interleaved,n!==null){f=n;do h=f.lane,Xt.lanes|=h,Ir|=h,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hu(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do h=n(h,E.action),E=E.next;while(E!==f);ni(h,i.memoizedState)||(Rn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,u]}function Dh(){}function Nh(n,i){var o=Xt,u=$n(),f=i(),h=!ni(u.memoizedState,f);if(h&&(u.memoizedState=f,Rn=!0),u=u.queue,Gu(Fh.bind(null,o,u,n),[n]),u.getSnapshot!==i||h||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,wo(9,Ih.bind(null,o,u,f,i),void 0,null),on===null)throw Error(t(349));(Ur&30)!==0||Uh(o,i,f)}return f}function Uh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ih(n,i,o,u){i.value=o,i.getSnapshot=u,Oh(i)&&kh(n)}function Fh(n,i,o){return o(function(){Oh(i)&&kh(n)})}function Oh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ni(n,o)}catch{return!0}}function kh(n){var i=Ni(n,1);i!==null&&ai(i,n,1,-1)}function Bh(n){var i=_i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},i.queue=n,n=n.dispatch=Z_.bind(null,Xt,n),[i.memoizedState,n]}function wo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function zh(){return $n().memoizedState}function Na(n,i,o,u){var f=_i();Xt.flags|=n,f.memoizedState=wo(1|i,o,void 0,u===void 0?null:u)}function Ua(n,i,o,u){var f=$n();u=u===void 0?null:u;var h=void 0;if(en!==null){var E=en.memoizedState;if(h=E.destroy,u!==null&&ku(u,E.deps)){f.memoizedState=wo(i,o,h,u);return}}Xt.flags|=n,f.memoizedState=wo(1|i,o,h,u)}function Vh(n,i){return Na(8390656,8,n,i)}function Gu(n,i){return Ua(2048,8,n,i)}function Hh(n,i){return Ua(4,2,n,i)}function Gh(n,i){return Ua(4,4,n,i)}function Wh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xh(n,i,o){return o=o!=null?o.concat([n]):null,Ua(4,4,Wh.bind(null,i,n),o)}function Wu(){}function jh(n,i){var o=$n();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function qh(n,i){var o=$n();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Yh(n,i,o){return(Ur&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=o):(ni(o,i)||(o=Sn(),Xt.lanes|=o,Ir|=o,n.baseState=!0),i)}function $_(n,i){var o=vt;vt=o!==0&&4>o?o:4,n(!0);var u=Ou.transition;Ou.transition={};try{n(!1),i()}finally{vt=o,Ou.transition=u}}function $h(){return $n().memoizedState}function K_(n,i,o){var u=ur(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Kh(n))Zh(i,o);else if(o=Rh(n,i,o,u),o!==null){var f=Mn();ai(o,n,u,f),Jh(o,i,u)}}function Z_(n,i,o){var u=ur(n),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kh(n))Zh(i,f);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,N=h(E,o);if(f.hasEagerState=!0,f.eagerState=N,ni(N,E)){var z=i.interleaved;z===null?(f.next=f,Lu(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}o=Rh(n,i,f,u),o!==null&&(f=Mn(),ai(o,n,u,f),Jh(o,i,u))}}function Kh(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function Zh(n,i){So=Da=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Jh(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Rr(n,o)}}var Ia={readContext:Yn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},J_={readContext:Yn,useCallback:function(n,i){return _i().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:Vh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Na(4194308,4,Wh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Na(4194308,4,n,i)},useInsertionEffect:function(n,i){return Na(4,2,n,i)},useMemo:function(n,i){var o=_i();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=_i();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=K_.bind(null,Xt,n),[u.memoizedState,n]},useRef:function(n){var i=_i();return n={current:n},i.memoizedState=n},useState:Bh,useDebugValue:Wu,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=Bh(!1),i=n[0];return n=$_.bind(null,n[1]),_i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Xt,f=_i();if(Gt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));(Ur&30)!==0||Uh(u,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Vh(Fh.bind(null,u,h,n),[n]),u.flags|=2048,wo(9,Ih.bind(null,u,h,o,i),void 0,null),o},useId:function(){var n=_i(),i=on.identifierPrefix;if(Gt){var o=Di,u=Li;o=(u&~(1<<32-wt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Eo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Y_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Q_={readContext:Yn,useCallback:jh,useContext:Yn,useEffect:Gu,useImperativeHandle:Xh,useInsertionEffect:Hh,useLayoutEffect:Gh,useMemo:qh,useReducer:Vu,useRef:zh,useState:function(){return Vu(Mo)},useDebugValue:Wu,useDeferredValue:function(n){var i=$n();return Yh(i,en.memoizedState,n)},useTransition:function(){var n=Vu(Mo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Nh,useId:$h,unstable_isNewReconciler:!1},ev={readContext:Yn,useCallback:jh,useContext:Yn,useEffect:Gu,useImperativeHandle:Xh,useInsertionEffect:Hh,useLayoutEffect:Gh,useMemo:qh,useReducer:Hu,useRef:zh,useState:function(){return Hu(Mo)},useDebugValue:Wu,useDeferredValue:function(n){var i=$n();return en===null?i.memoizedState=n:Yh(i,en.memoizedState,n)},useTransition:function(){var n=Hu(Mo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Nh,useId:$h,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Xu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Fa={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),f=ur(n),h=Ui(u,f);h.payload=i,o!=null&&(h.callback=o),i=sr(n,h,f),i!==null&&(ai(i,n,f,u),Ca(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),f=ur(n),h=Ui(u,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=sr(n,h,f),i!==null&&(ai(i,n,f,u),Ca(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=ur(n),f=Ui(o,u);f.tag=2,i!=null&&(f.callback=i),i=sr(n,f,u),i!==null&&(ai(i,n,u,o),Ca(i,n,u))}};function Qh(n,i,o,u,f,h,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,h,E):i.prototype&&i.prototype.isPureReactComponent?!uo(o,u)||!uo(f,h):!0}function ep(n,i,o){var u=!1,f=nr,h=i.contextType;return typeof h=="object"&&h!==null?h=Yn(h):(f=An(i)?br:pn.current,u=i.contextTypes,h=(u=u!=null)?ds(n,f):nr),i=new i(o,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=h),i}function tp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Fa.enqueueReplaceState(i,i.state,null)}function ju(n,i,o,u){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Du(n);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Yn(h):(h=An(i)?br:pn.current,f.context=ds(n,h)),f.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Xu(n,i,h,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Fa.enqueueReplaceState(f,f.state,null),ba(n,o,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function xs(n,i){try{var o="",u=i;do o+=Z(u),u=u.return;while(u);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:f,digest:null}}function qu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Yu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function np(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ga||(Ga=!0,uc=u),Yu(n,i)},o}function ip(n,i,o){o=Ui(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Yu(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Yu(n,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function rp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new tv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),n=mv.bind(null,n,i,o),i.then(n,n))}function sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function op(n,i,o,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var nv=T.ReactCurrentOwner,Rn=!1;function En(n,i,o,u){i.child=n===null?Ah(i,null,o,u):gs(i,n.child,o,u)}function ap(n,i,o,u,f){o=o.render;var h=i.ref;return vs(i,f),u=Bu(n,i,o,u,h,f),o=zu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ii(n,i,f)):(Gt&&o&&Eu(i),i.flags|=1,En(n,i,u,f),i.child)}function lp(n,i,o,u,f){if(n===null){var h=o.type;return typeof h=="function"&&!gc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,up(n,i,h,u,f)):(n=$a(o.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&f)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:uo,o(E,u)&&n.ref===i.ref)return Ii(n,i,f)}return i.flags|=1,n=fr(h,u),n.ref=i.ref,n.return=i,i.child=n}function up(n,i,o,u,f){if(n!==null){var h=n.memoizedProps;if(uo(h,u)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=u=h,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,Ii(n,i,f)}return $u(n,i,o,u,f)}function cp(n,i,o){var u=i.pendingProps,f=u.children,h=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Es,Bn),Bn|=o;else{if((o&1073741824)===0)return n=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Es,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:o,Bt(Es,Bn),Bn|=u}else h!==null?(u=h.baseLanes|o,i.memoizedState=null):u=o,Bt(Es,Bn),Bn|=u;return En(n,i,f,o),i.child}function fp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function $u(n,i,o,u,f){var h=An(o)?br:pn.current;return h=ds(i,h),vs(i,f),o=Bu(n,i,o,u,h,f),u=zu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ii(n,i,f)):(Gt&&u&&Eu(i),i.flags|=1,En(n,i,o,f),i.child)}function dp(n,i,o,u,f){if(An(o)){var h=!0;xa(i)}else h=!1;if(vs(i,f),i.stateNode===null)ka(n,i),ep(i,o,u),ju(i,o,u,f),u=!0;else if(n===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var z=E.context,J=o.contextType;typeof J=="object"&&J!==null?J=Yn(J):(J=An(o)?br:pn.current,J=ds(i,J));var ge=o.getDerivedStateFromProps,ve=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";ve||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==u||z!==J)&&tp(i,E,u,J),rr=!1;var me=i.memoizedState;E.state=me,ba(i,u,E,f),z=i.memoizedState,N!==u||me!==z||Tn.current||rr?(typeof ge=="function"&&(Xu(i,o,ge,u),z=i.memoizedState),(N=rr||Qh(i,o,N,u,me,z,J))?(ve||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),E.props=u,E.state=z,E.context=J,u=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Ch(n,i),N=i.memoizedProps,J=i.type===i.elementType?N:ri(i.type,N),E.props=J,ve=i.pendingProps,me=E.context,z=o.contextType,typeof z=="object"&&z!==null?z=Yn(z):(z=An(o)?br:pn.current,z=ds(i,z));var ke=o.getDerivedStateFromProps;(ge=typeof ke=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==ve||me!==z)&&tp(i,E,u,z),rr=!1,me=i.memoizedState,E.state=me,ba(i,u,E,f);var je=i.memoizedState;N!==ve||me!==je||Tn.current||rr?(typeof ke=="function"&&(Xu(i,o,ke,u),je=i.memoizedState),(J=rr||Qh(i,o,J,u,me,je,z)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,je,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,je,z)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=je),E.props=u,E.state=je,E.context=z,u=J):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return Ku(n,i,o,u,h,f)}function Ku(n,i,o,u,f,h){fp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return f&&_h(i,o,!1),Ii(n,i,h);u=i.stateNode,nv.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=gs(i,n.child,null,h),i.child=gs(i,null,N,h)):En(n,i,N,h),i.memoizedState=u.state,f&&_h(i,o,!0),i.child}function hp(n){var i=n.stateNode;i.pendingContext?mh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&mh(n,i.context,!1),Nu(n,i.containerInfo)}function pp(n,i,o,u,f){return ms(),Au(f),i.flags|=256,En(n,i,o,u),i.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Ju(n){return{baseLanes:n,cachePool:null,transitions:null}}function mp(n,i,o){var u=i.pendingProps,f=Wt.current,h=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=n!==null&&n.memoizedState===null?!1:(f&2)!==0),N?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Bt(Wt,f&1),n===null)return Tu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,h?(u=i.mode,h=i.child,E={mode:"hidden",children:E},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ka(E,u,0,null),n=Br(n,u,o,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=Ju(o),i.memoizedState=Zu,n):Qu(i,E));if(f=n.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return iv(n,i,E,u,N,f,o);if(h){h=u.fallback,E=i.mode,f=n.child,N=f.sibling;var z={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=fr(f,z),u.subtreeFlags=f.subtreeFlags&14680064),N!==null?h=fr(N,h):(h=Br(h,E,o,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,E=n.child.memoizedState,E=E===null?Ju(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=n.childLanes&~o,i.memoizedState=Zu,u}return h=n.child,n=h.sibling,u=fr(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Qu(n,i){return i=Ka({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Oa(n,i,o,u){return u!==null&&Au(u),gs(i,n.child,null,o),n=Qu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function iv(n,i,o,u,f,h,E){if(o)return i.flags&256?(i.flags&=-257,u=qu(Error(t(422))),Oa(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=u.fallback,f=i.mode,u=Ka({mode:"visible",children:u.children},f,0,null),h=Br(h,f,E,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&gs(i,n.child,null,E),i.child.memoizedState=Ju(E),i.memoizedState=Zu,h);if((i.mode&1)===0)return Oa(n,i,E,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var N=u.dgst;return u=N,h=Error(t(419)),u=qu(h,u,void 0),Oa(n,i,E,u)}if(N=(E&n.childLanes)!==0,Rn||N){if(u=on,u!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Ni(n,f),ai(u,n,f,-1))}return mc(),u=qu(Error(t(421))),Oa(n,i,E,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=gv.bind(null,n),f._reactRetry=i,null):(n=h.treeContext,kn=er(f.nextSibling),On=i,Gt=!0,ii=null,n!==null&&(jn[qn++]=Li,jn[qn++]=Di,jn[qn++]=Pr,Li=n.id,Di=n.overflow,Pr=i),i=Qu(i,u.children),i.flags|=4096,i)}function gp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Pu(n.return,i,o)}function ec(n,i,o,u,f){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=o,h.tailMode=f)}function _p(n,i,o){var u=i.pendingProps,f=u.revealOrder,h=u.tail;if(En(n,i,u.children,o),u=Wt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gp(n,o,i);else if(n.tag===19)gp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Bt(Wt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Pa(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),ec(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Pa(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}ec(i,!0,o,null,h);break;case"together":ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=fr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=fr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function rv(n,i,o){switch(i.tag){case 3:hp(i),ms();break;case 5:Lh(i);break;case 1:An(i.type)&&xa(i);break;case 4:Nu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Bt(Aa,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Bt(Wt,Wt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?mp(n,i,o):(Bt(Wt,Wt.current&1),n=Ii(n,i,o),n!==null?n.sibling:null);Bt(Wt,Wt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return _p(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(Wt,Wt.current),u)break;return null;case 22:case 23:return i.lanes=0,cp(n,i,o)}return Ii(n,i,o)}var vp,tc,yp,xp;vp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},tc=function(){},yp=function(n,i,o,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,Nr(gi.current);var h=null;switch(o){case"input":f=ht(n,f),u=ht(n,u),h=[];break;case"select":f=re({},f,{value:void 0}),u=re({},u,{value:void 0}),h=[];break;case"textarea":f=zt(n,f),u=zt(n,u),h=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=_a)}Ke(o,u);var E;o=null;for(J in f)if(!u.hasOwnProperty(J)&&f.hasOwnProperty(J)&&f[J]!=null)if(J==="style"){var N=f[J];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in u){var z=u[J];if(N=f?.[J],u.hasOwnProperty(J)&&z!==N&&(z!=null||N!=null))if(J==="style")if(N){for(E in N)!N.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in z)z.hasOwnProperty(E)&&N[E]!==z[E]&&(o||(o={}),o[E]=z[E])}else o||(h||(h=[]),h.push(J,o)),o=z;else J==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,N=N?N.__html:void 0,z!=null&&N!==z&&(h=h||[]).push(J,z)):J==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(J,""+z):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(z!=null&&J==="onScroll"&&Vt("scroll",n),h||N===z||(h=[])):(h=h||[]).push(J,z))}o&&(h=h||[]).push("style",o);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},xp=function(n,i,o,u){o!==u&&(i.flags|=4)};function To(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function sv(n,i,o){var u=i.pendingProps;switch(Mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return An(i.type)&&ya(),gn(i),null;case 3:return u=i.stateNode,ys(),Ht(Tn),Ht(pn),Fu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(wa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(dc(ii),ii=null))),tc(n,i),gn(i),null;case 5:Uu(i);var f=Nr(xo.current);if(o=i.type,n!==null&&i.stateNode!=null)yp(n,i,o,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Nr(gi.current),wa(i)){u=i.stateNode,o=i.type;var h=i.memoizedProps;switch(u[mi]=i,u[mo]=h,n=(i.mode&1)!==0,o){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(f=0;f<fo.length;f++)Vt(fo[f],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":Ye(u,h),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Vt("invalid",u);break;case"textarea":L(u,h),Vt("invalid",u)}Ke(o,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var N=h[E];E==="children"?typeof N=="string"?u.textContent!==N&&(h.suppressHydrationWarning!==!0&&ga(u.textContent,N,n),f=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&ga(u.textContent,N,n),f=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Vt("scroll",u)}switch(o){case"input":Ie(u),yt(u,h,!0);break;case"textarea":Ie(u),$(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=_a)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[mi]=i,n[mo]=u,vp(n,i,!1,!1),i.stateNode=n;e:{switch(E=be(o,u),o){case"dialog":Vt("cancel",n),Vt("close",n),f=u;break;case"iframe":case"object":case"embed":Vt("load",n),f=u;break;case"video":case"audio":for(f=0;f<fo.length;f++)Vt(fo[f],n);f=u;break;case"source":Vt("error",n),f=u;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),f=u;break;case"details":Vt("toggle",n),f=u;break;case"input":Ye(n,u),f=ht(n,u),Vt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=re({},u,{value:void 0}),Vt("invalid",n);break;case"textarea":L(n,u),f=zt(n,u),Vt("invalid",n);break;default:f=u}Ke(o,f),N=f;for(h in N)if(N.hasOwnProperty(h)){var z=N[h];h==="style"?Ue(n,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Je(n,z)):h==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&Te(n,z):typeof z=="number"&&Te(n,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Vt("scroll",n):z!=null&&P(n,h,z,E))}switch(o){case"input":Ie(n),yt(n,u,!1);break;case"textarea":Ie(n),$(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ce(u.value));break;case"select":n.multiple=!!u.multiple,h=u.value,h!=null?Ct(n,!!u.multiple,h,!1):u.defaultValue!=null&&Ct(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)xp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Nr(xo.current),Nr(gi.current),wa(i)){if(u=i.stateNode,o=i.memoizedProps,u[mi]=i,(h=u.nodeValue!==o)&&(n=On,n!==null))switch(n.tag){case 3:ga(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ga(u.nodeValue,o,(n.mode&1)!==0)}h&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[mi]=i,i.stateNode=u}return gn(i),null;case 13:if(Ht(Wt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Mh(),ms(),i.flags|=98560,h=!1;else if(h=wa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[mi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),h=!1}else ii!==null&&(dc(ii),ii=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?tn===0&&(tn=3):mc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return ys(),tc(n,i),n===null&&ho(i.stateNode.containerInfo),gn(i),null;case 10:return bu(i.type._context),gn(i),null;case 17:return An(i.type)&&ya(),gn(i),null;case 19:if(Ht(Wt),h=i.memoizedState,h===null)return gn(i),null;if(u=(i.flags&128)!==0,E=h.rendering,E===null)if(u)To(h,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Pa(n),E!==null){for(i.flags|=128,To(h,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)h=o,n=u,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,n=E.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Bt(Wt,Wt.current&1|2),i.child}n=n.sibling}h.tail!==null&&W()>Ms&&(i.flags|=128,u=!0,To(h,!1),i.lanes=4194304)}else{if(!u)if(n=Pa(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Gt)return gn(i),null}else 2*W()-h.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,u=!0,To(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=W(),i.sibling=null,o=Wt.current,Bt(Wt,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return pc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ov(n,i){switch(Mu(i),i.tag){case 1:return An(i.type)&&ya(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),Ht(Tn),Ht(pn),Fu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Uu(i),null;case 13:if(Ht(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht(Wt),null;case 4:return ys(),null;case 10:return bu(i.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Ba=!1,_n=!1,av=typeof WeakSet=="function"?WeakSet:Set,He=null;function Ss(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){jt(n,i,u)}else o.current=null}function nc(n,i,o){try{o()}catch(u){jt(n,i,u)}}var Sp=!1;function lv(n,i){if(pu=sa,n=Qd(),ou(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,N=-1,z=-1,J=0,ge=0,ve=n,me=null;t:for(;;){for(var ke;ve!==o||f!==0&&ve.nodeType!==3||(N=E+f),ve!==h||u!==0&&ve.nodeType!==3||(z=E+u),ve.nodeType===3&&(E+=ve.nodeValue.length),(ke=ve.firstChild)!==null;)me=ve,ve=ke;for(;;){if(ve===n)break t;if(me===o&&++J===f&&(N=E),me===h&&++ge===u&&(z=E),(ke=ve.nextSibling)!==null)break;ve=me,me=ve.parentNode}ve=ke}o=N===-1||z===-1?null:{start:N,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(mu={focusedElem:n,selectionRange:o},sa=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var $e=je.memoizedProps,$t=je.memoizedState,Y=i.stateNode,X=Y.getSnapshotBeforeUpdate(i.elementType===i.type?$e:ri(i.type,$e),$t);Y.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){jt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return je=Sp,Sp=!1,je}function Ao(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var h=f.destroy;f.destroy=void 0,h!==void 0&&nc(i,o,h)}f=f.next}while(f!==u)}}function za(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function ic(n){var i=n.ref;if(i!==null){var o=n.stateNode;n.tag,n=o,typeof i=="function"?i(n):i.current=n}}function Ep(n){var i=n.alternate;i!==null&&(n.alternate=null,Ep(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[mo],delete i[yu],delete i[W_],delete i[X_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mp(n){return n.tag===5||n.tag===3||n.tag===4}function wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_a));else if(u!==4&&(n=n.child,n!==null))for(rc(n,i,o),n=n.sibling;n!==null;)rc(n,i,o),n=n.sibling}function sc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(sc(n,i,o),n=n.sibling;n!==null;)sc(n,i,o),n=n.sibling}var un=null,si=!1;function or(n,i,o){for(o=o.child;o!==null;)Tp(n,i,o),o=o.sibling}function Tp(n,i,o){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(et,o)}catch{}switch(o.tag){case 5:_n||Ss(o,i);case 6:var u=un,f=si;un=null,or(n,i,o),un=u,si=f,un!==null&&(si?(n=un,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):un.removeChild(o.stateNode));break;case 18:un!==null&&(si?(n=un,o=o.stateNode,n.nodeType===8?vu(n.parentNode,o):n.nodeType===1&&vu(n,o),io(n)):vu(un,o.stateNode));break;case 4:u=un,f=si,un=o.stateNode.containerInfo,si=!0,or(n,i,o),un=u,si=f;break;case 0:case 11:case 14:case 15:if(!_n&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&nc(o,i,E),f=f.next}while(f!==u)}or(n,i,o);break;case 1:if(!_n&&(Ss(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){jt(o,i,N)}or(n,i,o);break;case 21:or(n,i,o);break;case 22:o.mode&1?(_n=(u=_n)||o.memoizedState!==null,or(n,i,o),_n=u):or(n,i,o);break;default:or(n,i,o)}}function Ap(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new av),i.forEach(function(u){var f=_v.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}}function oi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var h=n,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:un=N.stateNode,si=!1;break e;case 3:un=N.stateNode.containerInfo,si=!0;break e;case 4:un=N.stateNode.containerInfo,si=!0;break e}N=N.return}if(un===null)throw Error(t(160));Tp(h,E,f),un=null,si=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(J){jt(f,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Rp(i,n),i=i.sibling}function Rp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),vi(n),u&4){try{Ao(3,n,n.return),za(3,n)}catch($e){jt(n,n.return,$e)}try{Ao(5,n,n.return)}catch($e){jt(n,n.return,$e)}}break;case 1:oi(i,n),vi(n),u&512&&o!==null&&Ss(o,o.return);break;case 5:if(oi(i,n),vi(n),u&512&&o!==null&&Ss(o,o.return),n.flags&32){var f=n.stateNode;try{Te(f,"")}catch($e){jt(n,n.return,$e)}}if(u&4&&(f=n.stateNode,f!=null)){var h=n.memoizedProps,E=o!==null?o.memoizedProps:h,N=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&st(f,h),be(N,E);var J=be(N,h);for(E=0;E<z.length;E+=2){var ge=z[E],ve=z[E+1];ge==="style"?Ue(f,ve):ge==="dangerouslySetInnerHTML"?Je(f,ve):ge==="children"?Te(f,ve):P(f,ge,ve,J)}switch(N){case"input":Ne(f,h);break;case"textarea":M(f,h);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var ke=h.value;ke!=null?Ct(f,!!h.multiple,ke,!1):me!==!!h.multiple&&(h.defaultValue!=null?Ct(f,!!h.multiple,h.defaultValue,!0):Ct(f,!!h.multiple,h.multiple?[]:"",!1))}f[mo]=h}catch($e){jt(n,n.return,$e)}}break;case 6:if(oi(i,n),vi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,h=n.memoizedProps;try{f.nodeValue=h}catch($e){jt(n,n.return,$e)}}break;case 3:if(oi(i,n),vi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{io(i.containerInfo)}catch($e){jt(n,n.return,$e)}break;case 4:oi(i,n),vi(n);break;case 13:oi(i,n),vi(n),f=n.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(lc=W())),u&4&&Ap(n);break;case 22:if(ge=o!==null&&o.memoizedState!==null,n.mode&1?(_n=(J=_n)||ge,oi(i,n),_n=J):oi(i,n),vi(n),u&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!ge&&(n.mode&1)!==0)for(He=n,ge=n.child;ge!==null;){for(ve=He=ge;He!==null;){switch(me=He,ke=me.child,me.tag){case 0:case 11:case 14:case 15:Ao(4,me,me.return);break;case 1:Ss(me,me.return);var je=me.stateNode;if(typeof je.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch($e){jt(u,o,$e)}}break;case 5:Ss(me,me.return);break;case 22:if(me.memoizedState!==null){Pp(ve);continue}}ke!==null?(ke.return=me,He=ke):Pp(ve)}ge=ge.sibling}e:for(ge=null,ve=n;;){if(ve.tag===5){if(ge===null){ge=ve;try{f=ve.stateNode,J?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=ve.stateNode,z=ve.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,N.style.display=Me("display",E))}catch($e){jt(n,n.return,$e)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=J?"":ve.memoizedProps}catch($e){jt(n,n.return,$e)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:oi(i,n),vi(n),u&4&&Ap(n);break;case 21:break;default:oi(i,n),vi(n)}}function vi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Mp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(Te(f,""),u.flags&=-33);var h=wp(n);sc(n,h,f);break;case 3:case 4:var E=u.stateNode.containerInfo,N=wp(n);rc(n,N,E);break;default:throw Error(t(161))}}catch(z){jt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function uv(n,i,o){He=n,Cp(n)}function Cp(n,i,o){for(var u=(n.mode&1)!==0;He!==null;){var f=He,h=f.child;if(f.tag===22&&u){var E=f.memoizedState!==null||Ba;if(!E){var N=f.alternate,z=N!==null&&N.memoizedState!==null||_n;N=Ba;var J=_n;if(Ba=E,(_n=z)&&!J)for(He=f;He!==null;)E=He,z=E.child,E.tag===22&&E.memoizedState!==null?Lp(f):z!==null?(z.return=E,He=z):Lp(f);for(;h!==null;)He=h,Cp(h),h=h.sibling;He=f,Ba=N,_n=J}bp(n)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,He=h):bp(n)}}function bp(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||za(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Ph(i,h,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ph(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ge=J.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&io(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&ic(i)}catch(me){jt(i,i.return,me)}}if(i===n){He=null;break}if(o=i.sibling,o!==null){o.return=i.return,He=o;break}He=i.return}}function Pp(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var o=i.sibling;if(o!==null){o.return=i.return,He=o;break}He=i.return}}function Lp(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{za(4,i)}catch(z){jt(i,o,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(z){jt(i,f,z)}}var h=i.return;try{ic(i)}catch(z){jt(i,h,z)}break;case 5:var E=i.return;try{ic(i)}catch(z){jt(i,E,z)}}}catch(z){jt(i,i.return,z)}if(i===n){He=null;break}var N=i.sibling;if(N!==null){N.return=i.return,He=N;break}He=i.return}}var cv=Math.ceil,Va=T.ReactCurrentDispatcher,oc=T.ReactCurrentOwner,Kn=T.ReactCurrentBatchConfig,Tt=0,on=null,Kt=null,cn=0,Bn=0,Es=tr(0),tn=0,Ro=null,Ir=0,Ha=0,ac=0,Co=null,Cn=null,lc=0,Ms=1/0,Fi=null,Ga=!1,uc=null,ar=null,Wa=!1,lr=null,Xa=0,bo=0,cc=null,ja=-1,qa=0;function Mn(){return(Tt&6)!==0?W():ja!==-1?ja:ja=W()}function ur(n){return(n.mode&1)===0?1:(Tt&2)!==0&&cn!==0?cn&-cn:q_.transition!==null?(qa===0&&(qa=Sn()),qa):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Nd(n.type)),n)}function ai(n,i,o,u){if(50<bo)throw bo=0,cc=null,Error(t(185));Yt(n,o,u),((Tt&2)===0||n!==on)&&(n===on&&((Tt&2)===0&&(Ha|=o),tn===4&&cr(n,cn)),bn(n,u),o===1&&Tt===0&&(i.mode&1)===0&&(Ms=W()+500,Sa&&ir()))}function bn(n,i){var o=n.callbackNode;Ar(n,i);var u=ti(n,n===on?cn:0);if(u===0)o!==null&&j(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&j(o),i===1)n.tag===0?j_(Np.bind(null,n)):vh(Np.bind(null,n)),H_(function(){(Tt&6)===0&&ir()}),o=null;else{switch(Td(u)){case 1:o=Le;break;case 4:o=Xe;break;case 16:o=Oe;break;case 536870912:o=at;break;default:o=Oe}o=Vp(o,Dp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Dp(n,i){if(ja=-1,qa=0,(Tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ws()&&n.callbackNode!==o)return null;var u=ti(n,n===on?cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ya(n,u);else{i=u;var f=Tt;Tt|=2;var h=Ip();(on!==n||cn!==i)&&(Fi=null,Ms=W()+500,Or(n,i));do try{hv();break}catch(N){Up(n,N)}while(!0);Cu(),Va.current=h,Tt=f,Kt!==null?i=0:(on=null,cn=0,i=tn)}if(i!==0){if(i===2&&(f=kt(n),f!==0&&(u=f,i=fc(n,f))),i===1)throw o=Ro,Or(n,0),cr(n,u),bn(n,W()),o;if(i===6)cr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!fv(f)&&(i=Ya(n,u),i===2&&(h=kt(n),h!==0&&(u=h,i=fc(n,h))),i===1))throw o=Ro,Or(n,0),cr(n,u),bn(n,W()),o;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Cn,Fi);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=lc+500-W(),10<i)){if(ti(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=_u(kr.bind(null,n,Cn,Fi),i);break}kr(n,Cn,Fi);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var E=31-wt(u);h=1<<E,E=i[E],E>f&&(f=E),u&=~h}if(u=f,u=W()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*cv(u/1960))-u,10<u){n.timeoutHandle=_u(kr.bind(null,n,Cn,Fi),u);break}kr(n,Cn,Fi);break;case 5:kr(n,Cn,Fi);break;default:throw Error(t(329))}}}return bn(n,W()),n.callbackNode===o?Dp.bind(null,n):null}function fc(n,i){var o=Co;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=Ya(n,i),n!==2&&(i=Cn,Cn=o,i!==null&&dc(i)),n}function dc(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function fv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],h=f.getSnapshot;f=f.value;try{if(!ni(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~ac,i&=~Ha,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-wt(i),u=1<<o;n[o]=-1,i&=~u}}function Np(n){if((Tt&6)!==0)throw Error(t(327));ws();var i=ti(n,0);if((i&1)===0)return bn(n,W()),null;var o=Ya(n,i);if(n.tag!==0&&o===2){var u=kt(n);u!==0&&(i=u,o=fc(n,u))}if(o===1)throw o=Ro,Or(n,0),cr(n,i),bn(n,W()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Cn,Fi),bn(n,W()),null}function hc(n,i){var o=Tt;Tt|=1;try{return n(i)}finally{Tt=o,Tt===0&&(Ms=W()+500,Sa&&ir())}}function Fr(n){lr!==null&&lr.tag===0&&(Tt&6)===0&&ws();var i=Tt;Tt|=1;var o=Kn.transition,u=vt;try{if(Kn.transition=null,vt=1,n)return n()}finally{vt=u,Kn.transition=o,Tt=i,(Tt&6)===0&&ir()}}function pc(){Bn=Es.current,Ht(Es)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,V_(o)),Kt!==null)for(o=Kt.return;o!==null;){var u=o;switch(Mu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ya();break;case 3:ys(),Ht(Tn),Ht(pn),Fu();break;case 5:Uu(u);break;case 4:ys();break;case 13:Ht(Wt);break;case 19:Ht(Wt);break;case 10:bu(u.type._context);break;case 22:case 23:pc()}o=o.return}if(on=n,Kt=n=fr(n.current,null),cn=Bn=i,tn=0,Ro=null,ac=Ha=Ir=0,Cn=Co=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,h=o.pending;if(h!==null){var E=h.next;h.next=f,u.next=E}o.pending=u}Dr=null}return n}function Up(n,i){do{var o=Kt;try{if(Cu(),La.current=Ia,Da){for(var u=Xt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Da=!1}if(Ur=0,sn=en=Xt=null,So=!1,Eo=0,oc.current=null,o===null||o.return===null){tn=1,Ro=i,Kt=null;break}e:{var h=n,E=o.return,N=o,z=i;if(i=cn,N.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var J=z,ge=N,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var ke=sp(E);if(ke!==null){ke.flags&=-257,op(ke,E,N,h,i),ke.mode&1&&rp(h,J,i),i=ke,z=J;var je=i.updateQueue;if(je===null){var $e=new Set;$e.add(z),i.updateQueue=$e}else je.add(z);break e}else{if((i&1)===0){rp(h,J,i),mc();break e}z=Error(t(426))}}else if(Gt&&N.mode&1){var $t=sp(E);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),op($t,E,N,h,i),Au(xs(z,N));break e}}h=z=xs(z,N),tn!==4&&(tn=2),Co===null?Co=[h]:Co.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=np(h,z,i);bh(h,Y);break e;case 1:N=z;var X=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ar===null||!ar.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=ip(h,N,i);bh(h,we);break e}}h=h.return}while(h!==null)}Op(o)}catch(Ze){i=Ze,Kt===o&&o!==null&&(Kt=o=o.return);continue}break}while(!0)}function Ip(){var n=Va.current;return Va.current=Ia,n===null?Ia:n}function mc(){(tn===0||tn===3||tn===2)&&(tn=4),on===null||(Ir&268435455)===0&&(Ha&268435455)===0||cr(on,cn)}function Ya(n,i){var o=Tt;Tt|=2;var u=Ip();(on!==n||cn!==i)&&(Fi=null,Or(n,i));do try{dv();break}catch(f){Up(n,f)}while(!0);if(Cu(),Tt=o,Va.current=u,Kt!==null)throw Error(t(261));return on=null,cn=0,tn}function dv(){for(;Kt!==null;)Fp(Kt)}function hv(){for(;Kt!==null&&!ee();)Fp(Kt)}function Fp(n){var i=zp(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?Op(n):Kt=i,oc.current=null}function Op(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=sv(o,i,Bn),o!==null){Kt=o;return}}else{if(o=ov(o,i),o!==null){o.flags&=32767,Kt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);tn===0&&(tn=5)}function kr(n,i,o){var u=vt,f=Kn.transition;try{Kn.transition=null,vt=1,pv(n,i,o,u)}finally{Kn.transition=f,vt=u}return null}function pv(n,i,o,u){do ws();while(lr!==null);if((Tt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=o.lanes|o.childLanes;if(hn(n,h),n===on&&(Kt=on=null,cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Wa||(Wa=!0,Vp(Oe,function(){return ws(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Kn.transition,Kn.transition=null;var E=vt;vt=1;var N=Tt;Tt|=4,oc.current=null,lv(n,o),Rp(o,n),U_(mu),sa=!!pu,mu=pu=null,n.current=o,uv(o),te(),Tt=N,vt=E,Kn.transition=h}else n.current=o;if(Wa&&(Wa=!1,lr=n,Xa=f),h=n.pendingLanes,h===0&&(ar=null),Lt(o.stateNode),bn(n,W()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(Ga)throw Ga=!1,n=uc,uc=null,n;return(Xa&1)!==0&&n.tag!==0&&ws(),h=n.pendingLanes,(h&1)!==0?n===cc?bo++:(bo=0,cc=n):bo=0,ir(),null}function ws(){if(lr!==null){var n=Td(Xa),i=Kn.transition,o=vt;try{if(Kn.transition=null,vt=16>n?16:n,lr===null)var u=!1;else{if(n=lr,lr=null,Xa=0,(Tt&6)!==0)throw Error(t(331));var f=Tt;for(Tt|=4,He=n.current;He!==null;){var h=He,E=h.child;if((He.flags&16)!==0){var N=h.deletions;if(N!==null){for(var z=0;z<N.length;z++){var J=N[z];for(He=J;He!==null;){var ge=He;switch(ge.tag){case 0:case 11:case 15:Ao(8,ge,h)}var ve=ge.child;if(ve!==null)ve.return=ge,He=ve;else for(;He!==null;){ge=He;var me=ge.sibling,ke=ge.return;if(Ep(ge),ge===J){He=null;break}if(me!==null){me.return=ke,He=me;break}He=ke}}}var je=h.alternate;if(je!==null){var $e=je.child;if($e!==null){je.child=null;do{var $t=$e.sibling;$e.sibling=null,$e=$t}while($e!==null)}}He=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,He=E;else e:for(;He!==null;){if(h=He,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ao(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,He=Y;break e}He=h.return}}var X=n.current;for(He=X;He!==null;){E=He;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,He=K;else e:for(E=X;He!==null;){if(N=He,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:za(9,N)}}catch(Ze){jt(N,N.return,Ze)}if(N===E){He=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,He=we;break e}He=N.return}}if(Tt=f,ir(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(et,n)}catch{}u=!0}return u}finally{vt=o,Kn.transition=i}}return!1}function kp(n,i,o){i=xs(o,i),i=np(n,i,1),n=sr(n,i,1),i=Mn(),n!==null&&(Yt(n,1,i),bn(n,i))}function jt(n,i,o){if(n.tag===3)kp(n,n,o);else for(;i!==null;){if(i.tag===3){kp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=xs(o,n),n=ip(i,n,1),i=sr(i,n,1),n=Mn(),i!==null&&(Yt(i,1,n),bn(i,n));break}}i=i.return}}function mv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(cn&o)===o&&(tn===4||tn===3&&(cn&130023424)===cn&&500>W()-lc?Or(n,0):ac|=o),bn(n,i)}function Bp(n,i){i===0&&((n.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var o=Mn();n=Ni(n,i),n!==null&&(Yt(n,i,o),bn(n,o))}function gv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Bp(n,o)}function _v(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Bp(n,o)}var zp;zp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)Rn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Rn=!1,rv(n,i,o);Rn=(n.flags&131072)!==0}else Rn=!1,Gt&&(i.flags&1048576)!==0&&yh(i,Ma,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ka(n,i),n=i.pendingProps;var f=ds(i,pn.current);vs(i,o),f=Bu(null,i,u,n,f,o);var h=zu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(h=!0,xa(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Du(i),f.updater=Fa,i.stateNode=f,f._reactInternals=i,ju(i,u,n,o),i=Ku(null,i,u,!0,h,o)):(i.tag=0,Gt&&h&&Eu(i),En(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ka(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=yv(u),n=ri(u,n),f){case 0:i=$u(null,i,u,n,o);break e;case 1:i=dp(null,i,u,n,o);break e;case 11:i=ap(null,i,u,n,o);break e;case 14:i=lp(null,i,u,ri(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ri(u,f),$u(n,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ri(u,f),dp(n,i,u,f,o);case 3:e:{if(hp(i),n===null)throw Error(t(387));u=i.pendingProps,h=i.memoizedState,f=h.element,Ch(n,i),ba(i,u,null,o);var E=i.memoizedState;if(u=E.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=xs(Error(t(423)),i),i=pp(n,i,u,o,f);break e}else if(u!==f){f=xs(Error(t(424)),i),i=pp(n,i,u,o,f);break e}else for(kn=er(i.stateNode.containerInfo.firstChild),On=i,Gt=!0,ii=null,o=Ah(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),u===f){i=Ii(n,i,o);break e}En(n,i,u,o)}i=i.child}return i;case 5:return Lh(i),n===null&&Tu(i),u=i.type,f=i.pendingProps,h=n!==null?n.memoizedProps:null,E=f.children,gu(u,f)?E=null:h!==null&&gu(u,h)&&(i.flags|=32),fp(n,i),En(n,i,E,o),i.child;case 6:return n===null&&Tu(i),null;case 13:return mp(n,i,o);case 4:return Nu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=gs(i,null,u,o):En(n,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ri(u,f),ap(n,i,u,f,o);case 7:return En(n,i,i.pendingProps,o),i.child;case 8:return En(n,i,i.pendingProps.children,o),i.child;case 12:return En(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,Bt(Aa,u._currentValue),u._currentValue=E,h!==null)if(ni(h.value,E)){if(h.children===f.children&&!Tn.current){i=Ii(n,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){E=h.child;for(var z=N.firstContext;z!==null;){if(z.context===u){if(h.tag===1){z=Ui(-1,o&-o),z.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var ge=J.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),J.pending=z}}h.lanes|=o,z=h.alternate,z!==null&&(z.lanes|=o),Pu(h.return,o,i),N.lanes|=o;break}z=z.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(t(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),Pu(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}En(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,vs(i,o),f=Yn(f),u=u(f),i.flags|=1,En(n,i,u,o),i.child;case 14:return u=i.type,f=ri(u,i.pendingProps),f=ri(u.type,f),lp(n,i,u,f,o);case 15:return up(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ri(u,f),ka(n,i),i.tag=1,An(u)?(n=!0,xa(i)):n=!1,vs(i,o),ep(i,u,f),ju(i,u,f,o),Ku(null,i,u,!0,n,o);case 19:return _p(n,i,o);case 22:return cp(n,i,o)}throw Error(t(156,i.tag))};function Vp(n,i){return w(n,i)}function vv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,o,u){return new vv(n,i,o,u)}function gc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yv(n){if(typeof n=="function")return gc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===fe)return 14}return 2}function fr(n,i){var o=n.alternate;return o===null?(o=Zn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function $a(n,i,o,u,f,h){var E=2;if(u=n,typeof n=="function")gc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case k:return Br(o.children,f,h,i);case G:E=8,f|=8;break;case b:return n=Zn(12,o,i,f|2),n.elementType=b,n.lanes=h,n;case ie:return n=Zn(13,o,i,f),n.elementType=ie,n.lanes=h,n;case oe:return n=Zn(19,o,i,f),n.elementType=oe,n.lanes=h,n;case ue:return Ka(o,f,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case I:E=9;break e;case se:E=11;break e;case fe:E=14;break e;case ne:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(E,o,i,f),i.elementType=n,i.type=u,i.lanes=h,i}function Br(n,i,o,u){return n=Zn(7,n,u,i),n.lanes=o,n}function Ka(n,i,o,u){return n=Zn(22,n,u,i),n.elementType=ue,n.lanes=o,n.stateNode={isHidden:!1},n}function _c(n,i,o){return n=Zn(6,n,null,i),n.lanes=o,n}function vc(n,i,o){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function xv(n,i,o,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function yc(n,i,o,u,f,h,E,N,z){return n=new xv(n,i,o,N,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Zn(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(h),n}function Sv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Hp(n){if(!n)return nr;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(An(o))return gh(n,o,i)}return i}function Gp(n,i,o,u,f,h,E,N,z){return n=yc(o,u,!0,n,f,h,E,N,z),n.context=Hp(null),o=n.current,u=Mn(),f=ur(o),h=Ui(u,f),h.callback=i??null,sr(o,h,f),n.current.lanes=f,Yt(n,f,u),bn(n,u),n}function Za(n,i,o,u){var f=i.current,h=Mn(),E=ur(f);return o=Hp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(h,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sr(f,i,E),n!==null&&(ai(n,f,E,h),Ca(n,f,E)),E}function Ja(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Wp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function xc(n,i){Wp(n,i),(n=n.alternate)&&Wp(n,i)}function Ev(){return null}var Xp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sc(n){this._internalRoot=n}Qa.prototype.render=Sc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Za(n,i,null,null)},Qa.prototype.unmount=Sc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){Za(null,n,null,null)}),i[bi]=null}};function Qa(n){this._internalRoot=n}Qa.prototype.unstable_scheduleHydration=function(n){if(n){var i=Cd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,n),o===0&&Ld(n)}};function Ec(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function el(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Mv(n,i,o,u,f){if(f){if(typeof u=="function"){var h=u;u=function(){var J=Ja(E);h.call(J)}}var E=Gp(i,u,n,0,null,!1,!1,"",jp);return n._reactRootContainer=E,n[bi]=E.current,ho(n.nodeType===8?n.parentNode:n),Fr(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var N=u;u=function(){var J=Ja(z);N.call(J)}}var z=yc(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=z,n[bi]=z.current,ho(n.nodeType===8?n.parentNode:n),Fr(function(){Za(i,z,o,u)}),z}function tl(n,i,o,u,f){var h=o._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var N=f;f=function(){var z=Ja(E);N.call(z)}}Za(i,E,n,f)}else E=Mv(o,i,n,f,u);return Ja(E)}Ad=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Qt(i.pendingLanes);o!==0&&(Rr(i,o|1),bn(i,W()),(Tt&6)===0&&(Ms=W()+500,ir()))}break;case 13:Fr(function(){var u=Ni(n,1);if(u!==null){var f=Mn();ai(u,n,1,f)}}),xc(n,1)}},ql=function(n){if(n.tag===13){var i=Ni(n,134217728);if(i!==null){var o=Mn();ai(i,n,134217728,o)}xc(n,134217728)}},Rd=function(n){if(n.tag===13){var i=ur(n),o=Ni(n,i);if(o!==null){var u=Mn();ai(o,n,i,u)}xc(n,i)}},Cd=function(){return vt},bd=function(n,i){var o=vt;try{return vt=n,i()}finally{vt=o}},Se=function(n,i,o){switch(i){case"input":if(Ne(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var f=va(u);if(!f)throw Error(t(90));Re(u),Ne(u,f)}}}break;case"textarea":M(n,o);break;case"select":i=o.value,i!=null&&Ct(n,!!o.multiple,i,!1)}},ft=hc,Dt=Fr;var wv={usingClientEntryPoint:!1,Events:[go,cs,va,de,qe,hc]},Po={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tv={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ta(n),n===null?null:n.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||Ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{et=nl.inject(Tv),ut=nl}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv,Pn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(i))throw Error(t(200));return Sv(n,i,null,o)},Pn.createRoot=function(n,i){if(!Ec(n))throw Error(t(299));var o=!1,u="",f=Xp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=yc(n,1,!1,null,null,o,!1,u,f),n[bi]=i.current,ho(n.nodeType===8?n.parentNode:n),new Sc(i)},Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ta(i),n=n===null?null:n.stateNode,n},Pn.flushSync=function(n){return Fr(n)},Pn.hydrate=function(n,i,o){if(!el(i))throw Error(t(200));return tl(null,n,i,!0,o)},Pn.hydrateRoot=function(n,i,o){if(!Ec(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,f=!1,h="",E=Xp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Gp(i,null,n,1,o??null,f,!1,h,E),n[bi]=i.current,ho(n),u)for(n=0;n<u.length;n++)o=u[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Qa(i)},Pn.render=function(n,i,o){if(!el(i))throw Error(t(200));return tl(null,n,i,!1,o)},Pn.unmountComponentAtNode=function(n){if(!el(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){tl(null,null,n,!1,function(){n._reactRootContainer=null,n[bi]=null})}),!0):!1},Pn.unstable_batchedUpdates=hc,Pn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!el(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tl(n,i,o,!1,u)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var em;function Nv(){if(em)return Tc.exports;em=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tc.exports=Dv(),Tc.exports}var tm;function Uv(){if(tm)return il;tm=1;var s=Nv();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var Iv=Uv();const sd="179",Fv=0,nm=1,Ov=2,sg=1,kv=2,Hi=3,Mr=0,Dn=1,Gi=2,xr=0,zs=1,im=2,rm=3,sm=4,Bv=5,Yr=100,zv=101,Vv=102,Hv=103,Gv=104,Wv=200,Xv=201,jv=202,qv=203,ff=204,df=205,Yv=206,$v=207,Kv=208,Zv=209,Jv=210,Qv=211,e0=212,t0=213,n0=214,hf=0,pf=1,mf=2,Gs=3,gf=4,_f=5,vf=6,yf=7,og=0,i0=1,r0=2,Sr=0,s0=1,o0=2,a0=3,l0=4,u0=5,c0=6,f0=7,ag=300,Ws=301,Xs=302,xf=303,Sf=304,Hl=306,Ef=1e3,Kr=1001,Mf=1002,pi=1003,d0=1004,rl=1005,xi=1006,Cc=1007,Zr=1008,wi=1009,lg=1010,ug=1011,Vo=1012,od=1013,Jr=1014,Wi=1015,Xo=1016,ad=1017,ld=1018,Ho=1020,cg=35902,fg=1021,dg=1022,hi=1023,Go=1026,Wo=1027,hg=1028,ud=1029,pg=1030,cd=1031,fd=1033,bl=33776,Pl=33777,Ll=33778,Dl=33779,wf=35840,Tf=35841,Af=35842,Rf=35843,Cf=36196,bf=37492,Pf=37496,Lf=37808,Df=37809,Nf=37810,Uf=37811,If=37812,Ff=37813,Of=37814,kf=37815,Bf=37816,zf=37817,Vf=37818,Hf=37819,Gf=37820,Wf=37821,Nl=36492,Xf=36494,jf=36495,mg=36283,qf=36284,Yf=36285,$f=36286,h0=3200,p0=3201,gg=0,m0=1,yr="",Qn="srgb",js="srgb-linear",Bl="linear",It="srgb",Ts=7680,om=519,g0=512,_0=513,v0=514,_g=515,y0=516,x0=517,S0=518,E0=519,am=35044,lm="300 es",Si=2e3,zl=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,Kf=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function M0(s,e){return(s%e+e)%e}function Pc(s,e,t){return(1-t)*s+t*e}function Do(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const y=l[c+0],S=l[c+1],A=l[c+2],R=l[c+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=S,e[t+2]=A,e[t+3]=R;return}if(v!==R||p!==y||m!==S||_!==A){let x=1-d;const g=p*y+m*S+_*A+v*R,D=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const B=Math.sqrt(P),O=Math.atan2(B,g*D);x=Math.sin(x*O)/B,d=Math.sin(d*O)/B}const T=d*D;if(p=p*x+y*T,m=m*x+S*T,_=_*x+A*T,v=v*x+R*T,x===1-d){const B=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=B,m*=B,_*=B,v*=B}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,c){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=l[c],y=l[c+1],S=l[c+2],A=l[c+3];return e[t]=d*A+_*v+p*S-m*y,e[t+1]=p*A+_*y+m*v-d*S,e[t+2]=m*A+_*S+d*y-p*v,e[t+3]=_*A-d*v-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(l/2),y=p(r/2),S=p(a/2),A=p(l/2);switch(c){case"XYZ":this._x=y*_*v+m*S*A,this._y=m*S*v-y*_*A,this._z=m*_*A+y*S*v,this._w=m*_*v-y*S*A;break;case"YXZ":this._x=y*_*v+m*S*A,this._y=m*S*v-y*_*A,this._z=m*_*A-y*S*v,this._w=m*_*v+y*S*A;break;case"ZXY":this._x=y*_*v-m*S*A,this._y=m*S*v+y*_*A,this._z=m*_*A+y*S*v,this._w=m*_*v-y*S*A;break;case"ZYX":this._x=y*_*v-m*S*A,this._y=m*S*v+y*_*A,this._z=m*_*A-y*S*v,this._w=m*_*v+y*S*A;break;case"YZX":this._x=y*_*v+m*S*A,this._y=m*S*v+y*_*A,this._z=m*_*A-y*S*v,this._w=m*_*v-y*S*A;break;case"XZY":this._x=y*_*v-m*S*A,this._y=m*S*v-y*_*A,this._z=m*_*A+y*S*v,this._w=m*_*v+y*S*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],d=t[5],p=t[9],m=t[2],_=t[6],v=t[10],y=r+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(l-m)*S,this._z=(c-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(c-a)/S,this._x=(l+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,d=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+c*d+a*m-l*p,this._y=a*_+c*p+l*d-r*m,this._z=l*_+c*m+r*p-a*d,this._w=c*_-r*d-a*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-t)*_)/m,y=Math.sin(t*_)/m;return this._w=c*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*a-d*r),_=2*(d*t-l*a),v=2*(l*r-c*t);return this.x=t+p*m+c*v-d*_,this.y=r+p*_+d*m-l*v,this.z=a+p*v+l*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,d=t.y,p=t.z;return this.x=a*p-l*d,this.y=l*c-r*p,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new q,um=new qo;class pt{constructor(e,t,r,a,l,c,d,p,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,p,m)}set(e,t,r,a,l,c,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=t,_[4]=l,_[5]=p,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],y=r[2],S=r[5],A=r[8],R=a[0],x=a[3],g=a[6],D=a[1],P=a[4],T=a[7],B=a[2],O=a[5],k=a[8];return l[0]=c*R+d*D+p*B,l[3]=c*x+d*P+p*O,l[6]=c*g+d*T+p*k,l[1]=m*R+_*D+v*B,l[4]=m*x+_*P+v*O,l[7]=m*g+_*T+v*k,l[2]=y*R+S*D+A*B,l[5]=y*x+S*P+A*O,l[8]=y*g+S*T+A*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return t*c*_-t*d*m-r*l*_+r*d*p+a*l*m-a*c*p}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*c-d*m,y=d*p-_*l,S=m*l-c*p,A=t*v+r*y+a*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*c)*R,e[3]=y*R,e[4]=(_*t-a*p)*R,e[5]=(a*l-d*t)*R,e[6]=S*R,e[7]=(r*p-m*t)*R,e[8]=(c*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-a*m,a*p,-a*(-m*c+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new pt;function vg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function w0(){const s=Vl("canvas");return s.style.display="block",s}const cm={};function Vs(s){s in cm||(cm[s]=!0,console.warn(s))}function T0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const fm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===It&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(a.r=Hs(a.r),a.g=Hs(a.g),a.b=Hs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?Bl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Vs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Vs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:r,transfer:Bl,toXYZ:fm,fromXYZ:dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:It,toXYZ:fm,fromXYZ:dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const Pt=A0();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class R0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=Vl("canvas")),As.width=e.width,As.height=e.height;const a=As.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Xi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C0=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(Nc(a[c].image)):l.push(Nc(a[c]))}else l=Nc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Nc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?R0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;const Uc=new q;class Nn extends Ys{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=Kr,a=Kr,l=xi,c=Zr,d=hi,p=wi,m=Nn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=jo(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ef:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ef:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=ag;Nn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,r=0,a=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const p=e.elements,m=p[0],_=p[4],v=p[8],y=p[1],S=p[5],A=p[9],R=p[2],x=p[6],g=p[10];if(Math.abs(_-y)<.01&&Math.abs(v-R)<.01&&Math.abs(A-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+R)<.1&&Math.abs(A+x)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(m+1)/2,T=(S+1)/2,B=(g+1)/2,O=(_+y)/4,k=(v+R)/4,G=(A+x)/4;return P>T&&P>B?P<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(P),a=O/r,l=k/r):T>B?T<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(T),r=O/a,l=G/a):B<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),r=k/l,a=G/l),this.set(r,a,l,t),this}let D=Math.sqrt((x-A)*(x-A)+(v-R)*(v-R)+(y-_)*(y-_));return Math.abs(D)<.001&&(D=1),this.x=(x-A)/D,this.y=(v-R)/D,this.z=(y-_)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P0 extends Ys{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const a={width:e,height:t,depth:r.depth},l=new Nn(a);this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new dd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends P0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class yg extends Nn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L0 extends Nn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),ol.subVectors(this.max,No),Rs.subVectors(e.a,No),Cs.subVectors(e.b,No),bs.subVectors(e.c,No),hr.subVectors(Cs,Rs),pr.subVectors(bs,Cs),zr.subVectors(Rs,bs);let t=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-zr.z,zr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,zr.z,0,-zr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-zr.y,zr.x,0];return!Ic(t,Rs,Cs,bs,ol)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,Rs,Cs,bs,ol))?!1:(al.crossVectors(hr,pr),t=[al.x,al.y,al.z],Ic(t,Rs,Cs,bs,ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new q,new q,new q,new q,new q,new q,new q,new q],li=new q,sl=new Yo,Rs=new q,Cs=new q,bs=new q,hr=new q,pr=new q,zr=new q,No=new q,ol=new q,al=new q,Vr=new q;function Ic(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Vr.fromArray(s,l);const d=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),p=e.dot(Vr),m=t.dot(Vr),_=r.dot(Vr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const D0=new Yo,Uo=new q,Fc=new q;class hd{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):D0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Fc)),this.expandByPoint(Uo.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new q,Oc=new q,ll=new q,mr=new q,kc=new q,ul=new q,Bc=new q;class N0{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Oc.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Oc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(ll),d=mr.dot(this.direction),p=-mr.dot(ll),m=mr.lengthSq(),_=Math.abs(1-c*c);let v,y,S,A;if(_>0)if(v=c*p-d,y=c*d-p,A=l*_,v>=0)if(y>=-A)if(y<=A){const R=1/_;v*=R,y*=R,S=v*(v+c*y+2*d)+y*(c*v+y+2*p)+m}else y=l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*p)+m;else y=-l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*p)+m;else y<=-A?(v=Math.max(0,-(-c*l+d)),y=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m):y<=A?(v=0,y=Math.min(Math.max(-l,-p),l),S=y*(y+2*p)+m):(v=Math.max(0,-(c*l+d)),y=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m);else y=c>0?-l:l,v=Math.max(0,-(c*y+d)),S=-v*v+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Oc).addScaledVector(ll,y),S}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),_>=0?(l=(e.min.y-y.y)*_,c=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,c=(e.min.y-y.y)*_),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,r,a,l){kc.subVectors(t,e),ul.subVectors(r,e),Bc.crossVectors(kc,ul);let c=this.direction.dot(Bc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;mr.subVectors(this.origin,e);const p=d*this.direction.dot(ul.crossVectors(mr,ul));if(p<0)return null;const m=d*this.direction.dot(kc.cross(mr));if(m<0||p+m>c)return null;const _=-d*mr.dot(Bc);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,r,a,l,c,d,p,m,_,v,y,S,A,R,x){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,p,m,_,v,y,S,A,R,x)}set(e,t,r,a,l,c,d,p,m,_,v,y,S,A,R,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=y,g[3]=S,g[7]=A,g[11]=R,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ps.setFromMatrixColumn(e,0).length(),l=1/Ps.setFromMatrixColumn(e,1).length(),c=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*_,S=c*v,A=d*_,R=d*v;t[0]=p*_,t[4]=-p*v,t[8]=m,t[1]=S+A*m,t[5]=y-R*m,t[9]=-d*p,t[2]=R-y*m,t[6]=A+S*m,t[10]=c*p}else if(e.order==="YXZ"){const y=p*_,S=p*v,A=m*_,R=m*v;t[0]=y+R*d,t[4]=A*d-S,t[8]=c*m,t[1]=c*v,t[5]=c*_,t[9]=-d,t[2]=S*d-A,t[6]=R+y*d,t[10]=c*p}else if(e.order==="ZXY"){const y=p*_,S=p*v,A=m*_,R=m*v;t[0]=y-R*d,t[4]=-c*v,t[8]=A+S*d,t[1]=S+A*d,t[5]=c*_,t[9]=R-y*d,t[2]=-c*m,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){const y=c*_,S=c*v,A=d*_,R=d*v;t[0]=p*_,t[4]=A*m-S,t[8]=y*m+R,t[1]=p*v,t[5]=R*m+y,t[9]=S*m-A,t[2]=-m,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){const y=c*p,S=c*m,A=d*p,R=d*m;t[0]=p*_,t[4]=R-y*v,t[8]=A*v+S,t[1]=v,t[5]=c*_,t[9]=-d*_,t[2]=-m*_,t[6]=S*v+A,t[10]=y-R*v}else if(e.order==="XZY"){const y=c*p,S=c*m,A=d*p,R=d*m;t[0]=p*_,t[4]=-v,t[8]=m*_,t[1]=y*v+R,t[5]=c*_,t[9]=S*v-A,t[2]=A*v-S,t[6]=d*_,t[10]=R*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,I0)}lookAt(e,t,r){const a=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),gr.crossVectors(r,zn),gr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),gr.crossVectors(r,zn)),gr.normalize(),cl.crossVectors(zn,gr),a[0]=gr.x,a[4]=cl.x,a[8]=zn.x,a[1]=gr.y,a[5]=cl.y,a[9]=zn.y,a[2]=gr.z,a[6]=cl.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],y=r[9],S=r[13],A=r[2],R=r[6],x=r[10],g=r[14],D=r[3],P=r[7],T=r[11],B=r[15],O=a[0],k=a[4],G=a[8],b=a[12],C=a[1],I=a[5],se=a[9],ie=a[13],oe=a[2],fe=a[6],ne=a[10],ue=a[14],V=a[3],le=a[7],re=a[11],U=a[15];return l[0]=c*O+d*C+p*oe+m*V,l[4]=c*k+d*I+p*fe+m*le,l[8]=c*G+d*se+p*ne+m*re,l[12]=c*b+d*ie+p*ue+m*U,l[1]=_*O+v*C+y*oe+S*V,l[5]=_*k+v*I+y*fe+S*le,l[9]=_*G+v*se+y*ne+S*re,l[13]=_*b+v*ie+y*ue+S*U,l[2]=A*O+R*C+x*oe+g*V,l[6]=A*k+R*I+x*fe+g*le,l[10]=A*G+R*se+x*ne+g*re,l[14]=A*b+R*ie+x*ue+g*U,l[3]=D*O+P*C+T*oe+B*V,l[7]=D*k+P*I+T*fe+B*le,l[11]=D*G+P*se+T*ne+B*re,l[15]=D*b+P*ie+T*ue+B*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],y=e[10],S=e[14],A=e[3],R=e[7],x=e[11],g=e[15];return A*(+l*p*v-a*m*v-l*d*y+r*m*y+a*d*S-r*p*S)+R*(+t*p*S-t*m*y+l*c*y-a*c*S+a*m*_-l*p*_)+x*(+t*m*v-t*d*S-l*c*v+r*c*S+l*d*_-r*m*_)+g*(-a*d*_-t*p*v+t*d*y+a*c*v-r*c*y+r*p*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],y=e[10],S=e[11],A=e[12],R=e[13],x=e[14],g=e[15],D=v*x*m-R*y*m+R*p*S-d*x*S-v*p*g+d*y*g,P=A*y*m-_*x*m-A*p*S+c*x*S+_*p*g-c*y*g,T=_*R*m-A*v*m+A*d*S-c*R*S-_*d*g+c*v*g,B=A*v*p-_*R*p-A*d*y+c*R*y+_*d*x-c*v*x,O=t*D+r*P+a*T+l*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=D*k,e[1]=(R*y*l-v*x*l-R*a*S+r*x*S+v*a*g-r*y*g)*k,e[2]=(d*x*l-R*p*l+R*a*m-r*x*m-d*a*g+r*p*g)*k,e[3]=(v*p*l-d*y*l-v*a*m+r*y*m+d*a*S-r*p*S)*k,e[4]=P*k,e[5]=(_*x*l-A*y*l+A*a*S-t*x*S-_*a*g+t*y*g)*k,e[6]=(A*p*l-c*x*l-A*a*m+t*x*m+c*a*g-t*p*g)*k,e[7]=(c*y*l-_*p*l+_*a*m-t*y*m-c*a*S+t*p*S)*k,e[8]=T*k,e[9]=(A*v*l-_*R*l-A*r*S+t*R*S+_*r*g-t*v*g)*k,e[10]=(c*R*l-A*d*l+A*r*m-t*R*m-c*r*g+t*d*g)*k,e[11]=(_*d*l-c*v*l-_*r*m+t*v*m+c*r*S-t*d*S)*k,e[12]=B*k,e[13]=(_*R*a-A*v*a+A*r*y-t*R*y-_*r*x+t*v*x)*k,e[14]=(A*d*a-c*R*a-A*r*p+t*R*p+c*r*x-t*d*x)*k,e[15]=(c*v*a-_*d*a+_*r*p-t*v*p-c*r*y+t*d*y)*k,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,d=e.y,p=e.z,m=l*c,_=l*d;return this.set(m*c+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*c,0,m*p-a*d,_*p+a*c,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,d=t._z,p=t._w,m=l+l,_=c+c,v=d+d,y=l*m,S=l*_,A=l*v,R=c*_,x=c*v,g=d*v,D=p*m,P=p*_,T=p*v,B=r.x,O=r.y,k=r.z;return a[0]=(1-(R+g))*B,a[1]=(S+T)*B,a[2]=(A-P)*B,a[3]=0,a[4]=(S-T)*O,a[5]=(1-(y+g))*O,a[6]=(x+D)*O,a[7]=0,a[8]=(A+P)*k,a[9]=(x-D)*k,a[10]=(1-(y+R))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ps.set(a[0],a[1],a[2]).length();const c=Ps.set(a[4],a[5],a[6]).length(),d=Ps.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const m=1/l,_=1/c,v=1/d;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=_,ui.elements[5]*=_,ui.elements[6]*=_,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),r.x=l,r.y=c,r.z=d,this}makePerspective(e,t,r,a,l,c,d=Si,p=!1){const m=this.elements,_=2*l/(t-e),v=2*l/(r-a),y=(t+e)/(t-e),S=(r+a)/(r-a);let A,R;if(p)A=l/(c-l),R=c*l/(c-l);else if(d===Si)A=-(c+l)/(c-l),R=-2*c*l/(c-l);else if(d===zl)A=-c/(c-l),R=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,a,l,c,d=Si,p=!1){const m=this.elements,_=2/(t-e),v=2/(r-a),y=-(t+e)/(t-e),S=-(r+a)/(r-a);let A,R;if(p)A=1/(c-l),R=c/(c-l);else if(d===Si)A=-2/(c-l),R=-(c+l)/(c-l);else if(d===zl)A=-1/(c-l),R=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=A,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ps=new q,ui=new qt,U0=new q(0,0,0),I0=new q(1,1,1),gr=new q,cl=new q,zn=new q,hm=new qt,pm=new qo;class Ti{constructor(e=0,t=0,r=0,a=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class xg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F0=0;const mm=new q,Ls=new qo,Bi=new qt,fl=new q,Io=new q,O0=new q,k0=new qo,gm=new q(1,0,0),_m=new q(0,1,0),vm=new q(0,0,1),ym={type:"added"},B0={type:"removed"},Ds={type:"childadded",child:null},zc={type:"childremoved",child:null};class Un extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new q,t=new Ti,r=new qo,a=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new pt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,t){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fl.copy(e):fl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Io,fl,this.up):Bi.lookAt(fl,Io,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B0),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(l(e.animations,p))}}if(t){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),y=c(e.skeletons),S=c(e.animations),A=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=a,r;function c(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Un.DEFAULT_UP=new q(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new q,zi=new q,Vc=new q,Vi=new q,Ns=new q,Us=new q,xm=new q,Hc=new q,Gc=new q,Wc=new q,Xc=new Ft,jc=new Ft,qc=new Ft;class di{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ci.subVectors(e,t),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ci.subVectors(a,t),zi.subVectors(r,t),Vc.subVectors(e,t);const c=ci.dot(ci),d=ci.dot(zi),p=ci.dot(Vc),m=zi.dot(zi),_=zi.dot(Vc),v=c*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*p-d*_)*y,A=(c*_-d*p)*y;return l.set(1-S-A,A,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,r,a,l,c,d,p){return this.getBarycoord(e,t,r,a,Vi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Vi.x),p.addScaledVector(c,Vi.y),p.addScaledVector(d,Vi.z),p)}static getInterpolatedAttribute(e,t,r,a,l,c){return Xc.setScalar(0),jc.setScalar(0),qc.setScalar(0),Xc.fromBufferAttribute(e,t),jc.fromBufferAttribute(e,r),qc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Xc,l.x),c.addScaledVector(jc,l.y),c.addScaledVector(qc,l.z),c}static isFrontFacing(e,t,r,a){return ci.subVectors(r,t),zi.subVectors(e,t),ci.cross(zi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ci.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return di.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,d;Ns.subVectors(a,r),Us.subVectors(l,r),Hc.subVectors(e,r);const p=Ns.dot(Hc),m=Us.dot(Hc);if(p<=0&&m<=0)return t.copy(r);Gc.subVectors(e,a);const _=Ns.dot(Gc),v=Us.dot(Gc);if(_>=0&&v<=_)return t.copy(a);const y=p*v-_*m;if(y<=0&&p>=0&&_<=0)return c=p/(p-_),t.copy(r).addScaledVector(Ns,c);Wc.subVectors(e,l);const S=Ns.dot(Wc),A=Us.dot(Wc);if(A>=0&&S<=A)return t.copy(l);const R=S*m-p*A;if(R<=0&&m>=0&&A<=0)return d=m/(m-A),t.copy(r).addScaledVector(Us,d);const x=_*A-S*v;if(x<=0&&v-_>=0&&S-A>=0)return xm.subVectors(l,a),d=(v-_)/(v-_+(S-A)),t.copy(a).addScaledVector(xm,d);const g=1/(x+R+y);return c=R*g,d=y*g,t.copy(r).addScaledVector(Ns,c).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Pt.workingColorSpace){if(e=M0(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Yc(c,l,e+1/3),this.g=Yc(c,l,e),this.b=Yc(c,l,e-1/3)}return Pt.colorSpaceToWorking(this,a),this}setStyle(e,t=Qn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const r=Sg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Pt.workingToColorSpace(yn.copy(this),e),Math.round(St(yn.r*255,0,255))*65536+Math.round(St(yn.g*255,0,255))*256+Math.round(St(yn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(yn.copy(this),t);const r=yn.r,a=yn.g,l=yn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let p,m;const _=(d+c)/2;if(d===c)p=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:p=(a-l)/v+(a<l?6:0);break;case a:p=(l-r)/v+2;break;case l:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Qn){Pt.workingToColorSpace(yn.copy(this),e);const t=yn.r,r=yn.g,a=yn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(dl);const r=Pc(_r.h,dl.h,t),a=Pc(_r.s,dl.s,t),l=Pc(_r.l,dl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Rt;Rt.NAMES=Sg;let z0=0;class $o extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=zs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=df,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ff&&(r.blendSrc=this.blendSrc),this.blendDst!==df&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const p=l[d];delete p.metadata,c.push(p)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Eg extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new q,hl=new Et;let V0=0;class Ei{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=am,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)hl.fromBufferAttribute(this,t),hl.applyMatrix3(e),this.setXY(t,hl.x,hl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Do(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Do(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Do(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Do(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Do(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),a=Ln(a,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class Mg extends Ei{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class wg extends Ei{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Wn extends Ei{constructor(e,t,r){super(new Float32Array(e),t,r)}}let H0=0;const Jn=new qt,$c=new Un,Is=new q,Vn=new Yo,Fo=new Yo,ln=new q;class ji extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vg(e)?wg:Mg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,r){return Jn.makeTranslation(e,t,r),this.applyMatrix4(Jn),this}scale(e,t,r){return Jn.makeScale(e,t,r),this.applyMatrix4(Jn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Vn.min,Fo.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Fo.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Fo.min),Vn.expandByPoint(Fo.max))}Vn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)ln.fromBufferAttribute(d,m),p&&(Is.fromBufferAttribute(e,m),ln.add(Is)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<r.count;G++)d[G]=new q,p[G]=new q;const m=new q,_=new q,v=new q,y=new Et,S=new Et,A=new Et,R=new q,x=new q;function g(G,b,C){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,b),v.fromBufferAttribute(r,C),y.fromBufferAttribute(l,G),S.fromBufferAttribute(l,b),A.fromBufferAttribute(l,C),_.sub(m),v.sub(m),S.sub(y),A.sub(y);const I=1/(S.x*A.y-A.x*S.y);isFinite(I)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(v,-S.y).multiplyScalar(I),x.copy(v).multiplyScalar(S.x).addScaledVector(_,-A.x).multiplyScalar(I),d[G].add(R),d[b].add(R),d[C].add(R),p[G].add(x),p[b].add(x),p[C].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let G=0,b=D.length;G<b;++G){const C=D[G],I=C.start,se=C.count;for(let ie=I,oe=I+se;ie<oe;ie+=3)g(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const P=new q,T=new q,B=new q,O=new q;function k(G){B.fromBufferAttribute(a,G),O.copy(B);const b=d[G];P.copy(b),P.sub(B.multiplyScalar(B.dot(b))).normalize(),T.crossVectors(O,b);const I=T.dot(p[G])<0?-1:1;c.setXYZW(G,P.x,P.y,P.z,I)}for(let G=0,b=D.length;G<b;++G){const C=D[G],I=C.start,se=C.count;for(let ie=I,oe=I+se;ie<oe;ie+=3)k(e.getX(ie+0)),k(e.getX(ie+1)),k(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new q,l=new q,c=new q,d=new q,p=new q,m=new q,_=new q,v=new q;if(e)for(let y=0,S=e.count;y<S;y+=3){const A=e.getX(y+0),R=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(t,A),l.fromBufferAttribute(t,R),c.fromBufferAttribute(t,x),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,x),d.add(_),p.add(_),m.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,y=new m.constructor(p.length*_);let S=0,A=0;for(let R=0,x=p.length;R<x;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)y[A++]=m[S++]}return new Ei(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ji,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let _=0,v=m.length;_<v;_++){const y=m[_],S=e(y,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(t))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let y=0,S=v.length;y<S;y++)_.push(v[y].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new qt,Hr=new N0,pl=new hd,Em=new q,ml=new q,gl=new q,_l=new q,Kc=new q,vl=new q,Mm=new q,yl=new q;class Gn extends Un{constructor(e=new ji,t=new Eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){vl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const _=d[p],v=l[p];_!==0&&(Kc.fromBufferAttribute(v,e),c?vl.addScaledVector(Kc,_):vl.addScaledVector(Kc.sub(t),_))}t.add(vl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(pl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(pl,Em)===null||Hr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Sm.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(Sm),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let A=0,R=y.length;A<R;A++){const x=y[A],g=c[x.materialIndex],D=Math.max(x.start,S.start),P=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let T=D,B=P;T<B;T+=3){const O=d.getX(T),k=d.getX(T+1),G=d.getX(T+2);a=xl(this,g,e,r,m,_,v,O,k,G),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const A=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let x=A,g=R;x<g;x+=3){const D=d.getX(x),P=d.getX(x+1),T=d.getX(x+2);a=xl(this,c,e,r,m,_,v,D,P,T),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let A=0,R=y.length;A<R;A++){const x=y[A],g=c[x.materialIndex],D=Math.max(x.start,S.start),P=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let T=D,B=P;T<B;T+=3){const O=T,k=T+1,G=T+2;a=xl(this,g,e,r,m,_,v,O,k,G),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const A=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let x=A,g=R;x<g;x+=3){const D=x,P=x+1,T=x+2;a=xl(this,c,e,r,m,_,v,D,P,T),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function G0(s,e,t,r,a,l,c,d){let p;if(e.side===Dn?p=r.intersectTriangle(c,l,a,!0,d):p=r.intersectTriangle(a,l,c,e.side===Mr,d),p===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(yl);return m<t.near||m>t.far?null:{distance:m,point:yl.clone(),object:s}}function xl(s,e,t,r,a,l,c,d,p,m){s.getVertexPosition(d,ml),s.getVertexPosition(p,gl),s.getVertexPosition(m,_l);const _=G0(s,e,t,r,ml,gl,_l,Mm);if(_){const v=new q;di.getBarycoord(Mm,ml,gl,_l,v),a&&(_.uv=di.getInterpolatedAttribute(a,d,p,m,v,new Et)),l&&(_.uv1=di.getInterpolatedAttribute(l,d,p,m,v,new Et)),c&&(_.normal=di.getInterpolatedAttribute(c,d,p,m,v,new q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new q,materialIndex:0};di.getNormal(ml,gl,_l,y.normal),_.face=y,_.barycoord=v}return _}class $s extends ji{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],m=[],_=[],v=[];let y=0,S=0;A("z","y","x",-1,-1,r,t,e,c,l,0),A("z","y","x",1,-1,r,t,-e,c,l,1),A("x","z","y",1,1,e,r,t,a,c,2),A("x","z","y",1,-1,e,r,-t,a,c,3),A("x","y","z",1,-1,e,t,r,a,l,4),A("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(v,2));function A(R,x,g,D,P,T,B,O,k,G,b){const C=T/k,I=B/G,se=T/2,ie=B/2,oe=O/2,fe=k+1,ne=G+1;let ue=0,V=0;const le=new q;for(let re=0;re<ne;re++){const U=re*I-ie;for(let Q=0;Q<fe;Q++){const Ve=Q*C-se;le[R]=Ve*D,le[x]=U*P,le[g]=oe,m.push(le.x,le.y,le.z),le[R]=0,le[x]=0,le[g]=O>0?1:-1,_.push(le.x,le.y,le.z),v.push(Q/k),v.push(1-re/G),ue+=1}}for(let re=0;re<G;re++)for(let U=0;U<k;U++){const Q=y+U+fe*re,Ve=y+U+fe*(re+1),ze=y+(U+1)+fe*(re+1),Z=y+(U+1)+fe*re;p.push(Q,Ve,Z),p.push(Ve,ze,Z),V+=6}d.addGroup(S,V,b),S+=V,y+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const r=qs(s[t]);for(const a in r)e[a]=r[a]}return e}function W0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Tg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const X0={clone:qs,merge:wn};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ag extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new q,wm=new Et,Tm=new Et;class Hn extends Ag{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kf*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,wm,Tm),t.subVectors(Tm,wm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/p,t-=c.offsetY*r/m,a*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class Y0 extends Un{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Hn(Fs,Os,e,t);a.layers=this.layers,this.add(a);const l=new Hn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const c=new Hn(Fs,Os,e,t);c.layers=this.layers,this.add(c);const d=new Hn(Fs,Os,e,t);d.layers=this.layers,this.add(d);const p=new Hn(Fs,Os,e,t);p.layers=this.layers,this.add(p);const m=new Hn(Fs,Os,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,d,p]=t;for(const m of t)this.remove(m);if(e===Si)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===zl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,p,m,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,p),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(v,y,S),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Rg extends Nn{constructor(e=[],t=Ws,r,a,l,c,d,p,m,_){super(e,t,r,a,l,c,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $0 extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Rg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new $s(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:xr});l.uniforms.tEquirect.value=t;const c=new Gn(a,l),d=t.minFilter;return t.minFilter===Zr&&(t.minFilter=xi),new Y0(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}class Sl extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,r),g=this._getHandJoint(m,R);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=_.position.distanceTo(v.position),S=.02,A=.005;m.inputState.pinching&&y>S+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class pd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Rt(e),this.near=t,this.far=r}clone(){return new pd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Z0 extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jc=new q,J0=new q,Q0=new pt;class jr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Jc.subVectors(r,t).cross(J0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Jc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Q0.getNormalMatrix(e),a=this.coplanarPoint(Jc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new hd,ey=new Et(.5,.5),El=new q;class md{constructor(e=new jr,t=new jr,r=new jr,a=new jr,l=new jr,c=new jr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Si,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],p=l[2],m=l[3],_=l[4],v=l[5],y=l[6],S=l[7],A=l[8],R=l[9],x=l[10],g=l[11],D=l[12],P=l[13],T=l[14],B=l[15];if(a[0].setComponents(m-c,S-_,g-A,B-D).normalize(),a[1].setComponents(m+c,S+_,g+A,B+D).normalize(),a[2].setComponents(m+d,S+v,g+R,B+P).normalize(),a[3].setComponents(m-d,S-v,g-R,B-P).normalize(),r)a[4].setComponents(p,y,x,T).normalize(),a[5].setComponents(m-p,S-y,g-x,B-T).normalize();else if(a[4].setComponents(m-p,S-y,g-x,B-T).normalize(),t===Si)a[5].setComponents(m+p,S+y,g+x,B+T).normalize();else if(t===zl)a[5].setComponents(p,y,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const t=ey.distanceTo(e.center);return Gr.radius=.7071067811865476+t,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(El.x=a.normal.x>0?e.max.x:e.min.x,El.y=a.normal.y>0?e.max.y:e.min.y,El.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cg extends Nn{constructor(e,t,r=Jr,a,l,c,d=pi,p=pi,m,_=Go,v=1){if(_!==Go&&_!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,a,l,c,d,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gd extends ji{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],c=[];d(a),m(r),_(),this.setAttribute("position",new Wn(l,3)),this.setAttribute("normal",new Wn(l.slice(),3)),this.setAttribute("uv",new Wn(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const P=new q,T=new q,B=new q;for(let O=0;O<t.length;O+=3)S(t[O+0],P),S(t[O+1],T),S(t[O+2],B),p(P,T,B,D)}function p(D,P,T,B){const O=B+1,k=[];for(let G=0;G<=O;G++){k[G]=[];const b=D.clone().lerp(T,G/O),C=P.clone().lerp(T,G/O),I=O-G;for(let se=0;se<=I;se++)se===0&&G===O?k[G][se]=b:k[G][se]=b.clone().lerp(C,se/I)}for(let G=0;G<O;G++)for(let b=0;b<2*(O-G)-1;b++){const C=Math.floor(b/2);b%2===0?(y(k[G][C+1]),y(k[G+1][C]),y(k[G][C])):(y(k[G][C+1]),y(k[G+1][C+1]),y(k[G+1][C]))}}function m(D){const P=new q;for(let T=0;T<l.length;T+=3)P.x=l[T+0],P.y=l[T+1],P.z=l[T+2],P.normalize().multiplyScalar(D),l[T+0]=P.x,l[T+1]=P.y,l[T+2]=P.z}function _(){const D=new q;for(let P=0;P<l.length;P+=3){D.x=l[P+0],D.y=l[P+1],D.z=l[P+2];const T=x(D)/2/Math.PI+.5,B=g(D)/Math.PI+.5;c.push(T,1-B)}A(),v()}function v(){for(let D=0;D<c.length;D+=6){const P=c[D+0],T=c[D+2],B=c[D+4],O=Math.max(P,T,B),k=Math.min(P,T,B);O>.9&&k<.1&&(P<.2&&(c[D+0]+=1),T<.2&&(c[D+2]+=1),B<.2&&(c[D+4]+=1))}}function y(D){l.push(D.x,D.y,D.z)}function S(D,P){const T=D*3;P.x=e[T+0],P.y=e[T+1],P.z=e[T+2]}function A(){const D=new q,P=new q,T=new q,B=new q,O=new Et,k=new Et,G=new Et;for(let b=0,C=0;b<l.length;b+=9,C+=6){D.set(l[b+0],l[b+1],l[b+2]),P.set(l[b+3],l[b+4],l[b+5]),T.set(l[b+6],l[b+7],l[b+8]),O.set(c[C+0],c[C+1]),k.set(c[C+2],c[C+3]),G.set(c[C+4],c[C+5]),B.copy(D).add(P).add(T).divideScalar(3);const I=x(B);R(O,C+0,D,I),R(k,C+2,P,I),R(G,C+4,T,I)}}function R(D,P,T,B){B<0&&D.x===1&&(c[P]=D.x-1),T.x===0&&T.z===0&&(c[P]=B/2/Math.PI+.5)}function x(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.vertices,e.indices,e.radius,e.details)}}class _d extends gd{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _d(e.radius,e.detail)}}class Ko extends ji{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,y=t/p,S=[],A=[],R=[],x=[];for(let g=0;g<_;g++){const D=g*y-c;for(let P=0;P<m;P++){const T=P*v-l;A.push(T,-D,0),R.push(0,0,1),x.push(P/d),x.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const P=D+m*g,T=D+m*(g+1),B=D+1+m*(g+1),O=D+1+m*g;S.push(P,T,O),S.push(T,B,O)}this.setIndex(S),this.setAttribute("position",new Wn(A,3)),this.setAttribute("normal",new Wn(R,3)),this.setAttribute("uv",new Wn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class vd extends ji{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(c+d,Math.PI);let m=0;const _=[],v=new q,y=new q,S=[],A=[],R=[],x=[];for(let g=0;g<=r;g++){const D=[],P=g/r;let T=0;g===0&&c===0?T=.5/t:g===r&&p===Math.PI&&(T=-.5/t);for(let B=0;B<=t;B++){const O=B/t;v.x=-e*Math.cos(a+O*l)*Math.sin(c+P*d),v.y=e*Math.cos(c+P*d),v.z=e*Math.sin(a+O*l)*Math.sin(c+P*d),A.push(v.x,v.y,v.z),y.copy(v).normalize(),R.push(y.x,y.y,y.z),x.push(O+T,1-P),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<t;D++){const P=_[g][D+1],T=_[g][D],B=_[g+1][D],O=_[g+1][D+1];(g!==0||c>0)&&S.push(P,T,O),(g!==r-1||p<Math.PI)&&S.push(T,B,O)}this.setIndex(S),this.setAttribute("position",new Wn(A,3)),this.setAttribute("normal",new Wn(R,3)),this.setAttribute("uv",new Wn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ml extends $o{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gg,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ty extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ny extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bg extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qc=new qt,Am=new q,Rm=new q;class iy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Am.setFromMatrixPosition(e.matrixWorld),t.position.copy(Am),Rm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rm),t.updateMatrixWorld(),Qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cm=new qt,Oo=new q,ef=new q;class ry extends iy{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Oo),ef.copy(r.position),ef.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(ef),r.updateMatrixWorld(),a.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Cm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cm,r.coordinateSystem,r.reversedDepth)}}class sy extends bg{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new ry}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oy extends Ag{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ay extends bg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ly extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function bm(s,e,t,r){const a=uy(r);switch(t){case fg:return s*e;case hg:return s*e/a.components*a.byteLength;case ud:return s*e/a.components*a.byteLength;case pg:return s*e*2/a.components*a.byteLength;case cd:return s*e*2/a.components*a.byteLength;case dg:return s*e*3/a.components*a.byteLength;case hi:return s*e*4/a.components*a.byteLength;case fd:return s*e*4/a.components*a.byteLength;case bl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:case Rf:return Math.max(s,16)*Math.max(e,8)/4;case wf:case Af:return Math.max(s,8)*Math.max(e,8)/2;case Cf:case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Xf:case jf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mg:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yf:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uy(s){switch(s){case wi:case lg:return{byteLength:1,components:1};case Vo:case ug:case Xo:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case Jr:case od:case Wi:return{byteLength:4,components:1};case cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);function Pg(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function cy(s){const e=new WeakMap;function t(d,p){const m=d.array,_=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,A)=>S.start-A.start);let y=0;for(let S=1;S<v.length;S++){const A=v[y],R=v[S];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++y,v[y]=R)}v.length=y+1;for(let S=0,A=v.length;S<A;S++){const R=v[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:l,update:c}}var fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dy=`#ifdef USE_ALPHAHASH
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
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
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
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
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
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ty=`#ifdef USE_BUMPMAP
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
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uy=`#define PI 3.141592653589793
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
} // validated`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fy=`vec3 transformedNormal = objectNormal;
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
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
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
}`,Qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
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
#endif`,ux=`struct PhysicalMaterial {
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
}`,cx=`
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$x=`float getShadowMask() {
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
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
}`,_S=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,vS=`#define DISTANCE
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
}`,yS=`#define DISTANCE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#define LAMBERT
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
}`,RS=`#define LAMBERT
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
}`,CS=`#define MATCAP
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
}`,bS=`#define MATCAP
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
}`,PS=`#define NORMAL
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
}`,LS=`#define NORMAL
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
}`,DS=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,US=`#define STANDARD
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
}`,IS=`#define STANDARD
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
}`,FS=`#define TOON
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
}`,OS=`#define TOON
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
}`,kS=`uniform float size;
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
}`,BS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,VS=`uniform vec3 color;
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
}`,HS=`uniform float rotation;
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
}`,GS=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:fy,alphahash_pars_fragment:dy,alphamap_fragment:hy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:_y,aomap_pars_fragment:vy,batching_pars_vertex:yy,batching_vertex:xy,begin_vertex:Sy,beginnormal_vertex:Ey,bsdfs:My,iridescence_fragment:wy,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:by,color_fragment:Py,color_pars_fragment:Ly,color_pars_vertex:Dy,color_vertex:Ny,common:Uy,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:Fy,displacementmap_pars_vertex:Oy,displacementmap_vertex:ky,emissivemap_fragment:By,emissivemap_pars_fragment:zy,colorspace_fragment:Vy,colorspace_pars_fragment:Hy,envmap_fragment:Gy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:Xy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:ix,envmap_vertex:qy,fog_vertex:Yy,fog_pars_vertex:$y,fog_fragment:Ky,fog_pars_fragment:Zy,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:Qy,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:rx,lights_toon_pars_fragment:sx,lights_phong_fragment:ox,lights_phong_pars_fragment:ax,lights_physical_fragment:lx,lights_physical_pars_fragment:ux,lights_fragment_begin:cx,lights_fragment_maps:fx,lights_fragment_end:dx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:_x,map_pars_fragment:vx,map_particle_fragment:yx,map_particle_pars_fragment:xx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Mx,morphcolor_vertex:wx,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ax,morphtarget_vertex:Rx,normal_fragment_begin:Cx,normal_fragment_maps:bx,normal_pars_fragment:Px,normal_pars_vertex:Lx,normal_vertex:Dx,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Fx,iridescence_pars_fragment:Ox,opaque_fragment:kx,packing:Bx,premultiplied_alpha_fragment:zx,project_vertex:Vx,dithering_fragment:Hx,dithering_pars_fragment:Gx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:$x,skinbase_vertex:Kx,skinning_pars_vertex:Zx,skinning_vertex:Jx,skinnormal_vertex:Qx,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:rS,transmission_pars_fragment:sS,uv_pars_fragment:oS,uv_pars_vertex:aS,uv_vertex:lS,worldpos_vertex:uS,background_vert:cS,background_frag:fS,backgroundCube_vert:dS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:_S,distanceRGBA_vert:vS,distanceRGBA_frag:yS,equirect_vert:xS,equirect_frag:SS,linedashed_vert:ES,linedashed_frag:MS,meshbasic_vert:wS,meshbasic_frag:TS,meshlambert_vert:AS,meshlambert_frag:RS,meshmatcap_vert:CS,meshmatcap_frag:bS,meshnormal_vert:PS,meshnormal_frag:LS,meshphong_vert:DS,meshphong_frag:NS,meshphysical_vert:US,meshphysical_frag:IS,meshtoon_vert:FS,meshtoon_frag:OS,points_vert:kS,points_frag:BS,shadow_vert:zS,shadow_frag:VS,sprite_vert:HS,sprite_frag:GS},De={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},yi={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Rt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Rt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};yi.physical={uniforms:wn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const wl={r:0,b:0,g:0},Wr=new Ti,WS=new qt;function XS(s,e,t,r,a,l,c){const d=new Rt(0);let p=l===!0?0:1,m,_,v=null,y=0,S=null;function A(P){let T=P.isScene===!0?P.background:null;return T&&T.isTexture&&(T=(P.backgroundBlurriness>0?t:e).get(T)),T}function R(P){let T=!1;const B=A(P);B===null?g(d,p):B&&B.isColor&&(g(B,1),T=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||T)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,T){const B=A(T);B&&(B.isCubeTexture||B.mapping===Hl)?(_===void 0&&(_=new Gn(new $s(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:qs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,k,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Wr.copy(T.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(Wr)),_.material.toneMapped=Pt.getTransfer(B.colorSpace)!==It,(v!==B||y!==B.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=B,y=B.version,S=s.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new Gn(new Ko(2,2),new wr({name:"BackgroundMaterial",uniforms:qs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(B.colorSpace)!==It,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||y!==B.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=B,y=B.version,S=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function g(P,T){P.getRGB(wl,Tg(s)),r.buffers.color.setClear(wl.r,wl.g,wl.b,T,c)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,T=1){d.set(P),p=T,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,g(d,p)},render:R,addToRenderList:x,dispose:D}}function jS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,c=!1;function d(C,I,se,ie,oe){let fe=!1;const ne=v(ie,se,I);l!==ne&&(l=ne,m(l.object)),fe=S(C,ie,se,oe),fe&&A(C,ie,se,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,T(C,I,se,ie),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function v(C,I,se){const ie=se.wireframe===!0;let oe=r[C.id];oe===void 0&&(oe={},r[C.id]=oe);let fe=oe[I.id];fe===void 0&&(fe={},oe[I.id]=fe);let ne=fe[ie];return ne===void 0&&(ne=y(p()),fe[ie]=ne),ne}function y(C){const I=[],se=[],ie=[];for(let oe=0;oe<t;oe++)I[oe]=0,se[oe]=0,ie[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:se,attributeDivisors:ie,object:C,attributes:{},index:null}}function S(C,I,se,ie){const oe=l.attributes,fe=I.attributes;let ne=0;const ue=se.getAttributes();for(const V in ue)if(ue[V].location>=0){const re=oe[V];let U=fe[V];if(U===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;ne++}return l.attributesNum!==ne||l.index!==ie}function A(C,I,se,ie){const oe={},fe=I.attributes;let ne=0;const ue=se.getAttributes();for(const V in ue)if(ue[V].location>=0){let re=fe[V];re===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),oe[V]=U,ne++}l.attributes=oe,l.attributesNum=ne,l.index=ie}function R(){const C=l.newAttributes;for(let I=0,se=C.length;I<se;I++)C[I]=0}function x(C){g(C,0)}function g(C,I){const se=l.newAttributes,ie=l.enabledAttributes,oe=l.attributeDivisors;se[C]=1,ie[C]===0&&(s.enableVertexAttribArray(C),ie[C]=1),oe[C]!==I&&(s.vertexAttribDivisor(C,I),oe[C]=I)}function D(){const C=l.newAttributes,I=l.enabledAttributes;for(let se=0,ie=I.length;se<ie;se++)I[se]!==C[se]&&(s.disableVertexAttribArray(se),I[se]=0)}function P(C,I,se,ie,oe,fe,ne){ne===!0?s.vertexAttribIPointer(C,I,se,oe,fe):s.vertexAttribPointer(C,I,se,ie,oe,fe)}function T(C,I,se,ie){R();const oe=ie.attributes,fe=se.getAttributes(),ne=I.defaultAttributeValues;for(const ue in fe){const V=fe[ue];if(V.location>=0){let le=oe[ue];if(le===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const re=le.normalized,U=le.itemSize,Q=e.get(le);if(Q===void 0)continue;const Ve=Q.buffer,ze=Q.type,Z=Q.bytesPerElement,pe=ze===s.INT||ze===s.UNSIGNED_INT||le.gpuType===od;if(le.isInterleavedBufferAttribute){const he=le.data,Ce=he.stride,Pe=le.offset;if(he.isInstancedInterleavedBuffer){for(let ye=0;ye<V.locationSize;ye++)g(V.location+ye,he.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<V.locationSize;ye++)x(V.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let ye=0;ye<V.locationSize;ye++)P(V.location+ye,U/V.locationSize,ze,re,Ce*Z,(Pe+U/V.locationSize*ye)*Z,pe)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)g(V.location+he,le.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<V.locationSize;he++)x(V.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let he=0;he<V.locationSize;he++)P(V.location+he,U/V.locationSize,ze,re,U*Z,U/V.locationSize*he*Z,pe)}}else if(ne!==void 0){const re=ne[ue];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(V.location,re);break;case 3:s.vertexAttrib3fv(V.location,re);break;case 4:s.vertexAttrib4fv(V.location,re);break;default:s.vertexAttrib1fv(V.location,re)}}}}D()}function B(){G();for(const C in r){const I=r[C];for(const se in I){const ie=I[se];for(const oe in ie)_(ie[oe].object),delete ie[oe];delete I[se]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const I=r[C.id];for(const se in I){const ie=I[se];for(const oe in ie)_(ie[oe].object),delete ie[oe];delete I[se]}delete r[C.id]}function k(C){for(const I in r){const se=r[I];if(se[C.id]===void 0)continue;const ie=se[C.id];for(const oe in ie)_(ie[oe].object),delete ie[oe];delete se[C.id]}}function G(){b(),c=!0,l!==a&&(l=a,m(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:G,resetDefaultState:b,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:x,disableUnusedAttributes:D}}function qS(s,e,t){let r;function a(m){r=m}function l(m,_){s.drawArrays(r,m,_),t.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),t.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let A=0;A<v;A++)S+=_[A];t.update(S,r,1)}function p(m,_,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<m.length;A++)c(m[A],_[A],y[A]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,y,0,v);let A=0;for(let R=0;R<v;R++)A+=_[R]*y[R];t.update(A,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function YS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(k){return!(k!==hi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const G=k===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==wi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Wi&&!G)}function p(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=A>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:T,vertexTextures:B,maxSamples:O}}function $S(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new jr,d=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||a;return a=y,r=v.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=_(v,y,0)},this.setState=function(v,y,S){const A=v.clippingPlanes,R=v.clipIntersection,x=v.clipShadows,g=s.get(v);if(!a||A===null||A.length===0||l&&!x)l?_(null):m();else{const D=l?0:r,P=D*4;let T=g.clippingState||null;p.value=T,T=_(A,y,P,S);for(let B=0;B!==P;++B)T[B]=t[B];g.clippingState=T,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,y,S,A){const R=v!==null?v.length:0;let x=null;if(R!==0){if(x=p.value,A!==!0||x===null){const g=S+R*4,D=y.matrixWorldInverse;d.getNormalMatrix(D),(x===null||x.length<g)&&(x=new Float32Array(g));for(let P=0,T=S;P!==R;++P,T+=4)c.copy(v[P]).applyMatrix4(D,d),c.normal.toArray(x,T),x[T+3]=c.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}function KS(s){let e=new WeakMap;function t(c,d){return d===xf?c.mapping=Ws:d===Sf&&(c.mapping=Xs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===xf||d===Sf)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const m=new $0(p.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),t(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Bs=4,Pm=[.125,.215,.35,.446,.526,.582],$r=20,tf=new oy,Lm=new Rt;let nf=null,rf=0,sf=0,of=!1;const qr=(1+Math.sqrt(5))/2,ks=1/qr,Dm=[new q(-qr,ks,0),new q(qr,ks,0),new q(-ks,0,qr),new q(ks,0,qr),new q(0,qr,-ks),new q(0,qr,ks),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],ZS=new q;class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:d=ZS}=l;nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nf,rf,sf),this._renderer.xr.enabled=of,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Xo,format:hi,colorSpace:js,depthBuffer:!1},a=Um(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JS(l)),this._blurMaterial=QS(l,e,t)}return a}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,tf)}_sceneToCubeUV(e,t,r,a,l){const p=new Hn(90,1,t,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Lm),v.toneMapping=Sr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null));const R=new Eg({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),x=new Gn(new $s,R);let g=!1;const D=e.background;D?D.isColor&&(R.color.copy(D),e.background=null,g=!0):(R.color.copy(Lm),g=!0);for(let P=0;P<6;P++){const T=P%3;T===0?(p.up.set(0,m[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[P],l.y,l.z)):T===1?(p.up.set(0,0,m[P]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[P],l.z)):(p.up.set(0,m[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[P]));const B=this._cubeSize;Tl(a,T*B,P>2?B:0,B,B),v.setRenderTarget(a),g&&v.render(x,p),v.render(e,p)}x.geometry.dispose(),x.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ws||e.mapping===Xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Gn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Tl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(c,tf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Dm[(a-l-1)%Dm.length];this._blur(e,l-1,l,c,d)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Gn(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),R=l/A,x=isFinite(l)?1+Math.floor(_*R):$r;x>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${$r}`);const g=[];let D=0;for(let k=0;k<$r;++k){const G=k/R,b=Math.exp(-G*G/2);g.push(b),k===0?D+=b:k<x&&(D+=2*b)}for(let k=0;k<g.length;k++)g[k]=g[k]/D;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=g,y.latitudinal.value=c==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=A,y.mipInt.value=P-r;const T=this._sizeLods[a],B=3*T*(a>P-Bs?a-P+Bs:0),O=4*(this._cubeSize-T);Tl(t,B,O,3*T,2*T),p.setRenderTarget(t),p.render(v,tf)}}function JS(s){const e=[],t=[],r=[];let a=s;const l=s-Bs+1+Pm.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);t.push(d);let p=1/d;c>s-Bs?p=Pm[c-s+Bs-1]:c===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,y=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,A=6,R=3,x=2,g=1,D=new Float32Array(R*A*S),P=new Float32Array(x*A*S),T=new Float32Array(g*A*S);for(let O=0;O<S;O++){const k=O%3*2/3-1,G=O>2?0:-1,b=[k,G,0,k+2/3,G,0,k+2/3,G+1,0,k,G,0,k+2/3,G+1,0,k,G+1,0];D.set(b,R*A*O),P.set(y,x*A*O);const C=[O,O,O,O,O,O];T.set(C,g*A*O)}const B=new ji;B.setAttribute("position",new Ei(D,R)),B.setAttribute("uv",new Ei(P,x)),B.setAttribute("faceIndex",new Ei(T,g)),e.push(B),a>Bs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Um(s,e,t){const r=new Qr(s,e,t);return r.texture.mapping=Hl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function QS(s,e,t){const r=new Float32Array($r),a=new q(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Im(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Fm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function yd(){return`

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
	`}function eE(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===xf||p===Sf,_=p===Ws||p===Xs;if(m||_){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Nm(s)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new Nm(s)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function tE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Vs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function nE(s,e,t,r){const a={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",c),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return a[y.id]===!0||(y.addEventListener("dispose",c),a[y.id]=!0,t.memory.geometries++),y}function p(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,A=v.attributes.position;let R=0;if(S!==null){const D=S.array;R=S.version;for(let P=0,T=D.length;P<T;P+=3){const B=D[P+0],O=D[P+1],k=D[P+2];y.push(B,O,O,k,k,B)}}else if(A!==void 0){const D=A.array;R=A.version;for(let P=0,T=D.length/3-1;P<T;P+=3){const B=P+0,O=P+1,k=P+2;y.push(B,O,O,k,k,B)}}else return;const x=new(vg(y)?wg:Mg)(y,1);x.version=R;const g=l.get(v);g&&e.remove(g),l.set(v,x)}function _(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function iE(s,e,t){let r;function a(y){r=y}let l,c;function d(y){l=y.type,c=y.bytesPerElement}function p(y,S){s.drawElements(r,S,l,y*c),t.update(S,r,1)}function m(y,S,A){A!==0&&(s.drawElementsInstanced(r,S,l,y*c,A),t.update(S,r,A))}function _(y,S,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,A);let x=0;for(let g=0;g<A;g++)x+=S[g];t.update(x,r,1)}function v(y,S,A,R){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<y.length;g++)m(y[g]/c,S[g],R[g]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,R,0,A);let g=0;for(let D=0;D<A;D++)g+=S[D]*R[D];t.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function rE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function sE(s,e,t){const r=new WeakMap,a=new Ft;function l(c,d,p){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let C=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let T=0;A===!0&&(T=1),R===!0&&(T=2),x===!0&&(T=3);let B=d.attributes.position.count*T,O=1;B>e.maxTextureSize&&(O=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const k=new Float32Array(B*O*4*v),G=new yg(k,B,O,v);G.type=Wi,G.needsUpdate=!0;const b=T*4;for(let I=0;I<v;I++){const se=g[I],ie=D[I],oe=P[I],fe=B*O*4*I;for(let ne=0;ne<se.count;ne++){const ue=ne*b;A===!0&&(a.fromBufferAttribute(se,ne),k[fe+ue+0]=a.x,k[fe+ue+1]=a.y,k[fe+ue+2]=a.z,k[fe+ue+3]=0),R===!0&&(a.fromBufferAttribute(ie,ne),k[fe+ue+4]=a.x,k[fe+ue+5]=a.y,k[fe+ue+6]=a.z,k[fe+ue+7]=0),x===!0&&(a.fromBufferAttribute(oe,ne),k[fe+ue+8]=a.x,k[fe+ue+9]=a.y,k[fe+ue+10]=a.z,k[fe+ue+11]=oe.itemSize===4?a.w:1)}}y={count:v,texture:G,size:new Et(B,O)},r.set(d,y),d.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let A=0;for(let x=0;x<m.length;x++)A+=m[x];const R=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function oE(s,e,t,r){let a=new WeakMap;function l(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return v}function c(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const Lg=new Nn,Om=new Cg(1,1),Dg=new yg,Ng=new L0,Ug=new Rg,km=[],Bm=[],zm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function Ks(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=km[a];if(l===void 0&&(l=new Float32Array(a),km[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(l,d)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Gl(s,e){let t=Bm[e];t===void 0&&(t=new Int32Array(e),Bm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function aE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function fE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),rn(t,r)}}function dE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Vm.set(r),s.uniformMatrix3fv(this.addr,!1,Vm),rn(t,r)}}function hE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;zm.set(r),s.uniformMatrix4fv(this.addr,!1,zm),rn(t,r)}}function pE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function gE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function _E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function vE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function xE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function EE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Om.compareFunction=_g,l=Om):l=Lg,t.setTexture2D(e||l,a)}function ME(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Ng,a)}function wE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Ug,a)}function TE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Dg,a)}function AE(s){switch(s){case 5126:return aE;case 35664:return lE;case 35665:return uE;case 35666:return cE;case 35674:return fE;case 35675:return dE;case 35676:return hE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return _E;case 5125:return vE;case 36294:return yE;case 36295:return xE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return TE}}function RE(s,e){s.uniform1fv(this.addr,e)}function CE(s,e){const t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function bE(s,e){const t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function PE(s,e){const t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function LE(s,e){const t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function DE(s,e){const t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function NE(s,e){const t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function UE(s,e){s.uniform1iv(this.addr,e)}function IE(s,e){s.uniform2iv(this.addr,e)}function FE(s,e){s.uniform3iv(this.addr,e)}function OE(s,e){s.uniform4iv(this.addr,e)}function kE(s,e){s.uniform1uiv(this.addr,e)}function BE(s,e){s.uniform2uiv(this.addr,e)}function zE(s,e){s.uniform3uiv(this.addr,e)}function VE(s,e){s.uniform4uiv(this.addr,e)}function HE(s,e,t){const r=this.cache,a=e.length,l=Gl(t,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Lg,l[c])}function GE(s,e,t){const r=this.cache,a=e.length,l=Gl(t,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Ng,l[c])}function WE(s,e,t){const r=this.cache,a=e.length,l=Gl(t,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Ug,l[c])}function XE(s,e,t){const r=this.cache,a=e.length,l=Gl(t,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Dg,l[c])}function jE(s){switch(s){case 5126:return RE;case 35664:return CE;case 35665:return bE;case 35666:return PE;case 35674:return LE;case 35675:return DE;case 35676:return NE;case 5124:case 35670:return UE;case 35667:case 35671:return IE;case 35668:case 35672:return FE;case 35669:case 35673:return OE;case 5125:return kE;case 36294:return BE;case 36295:return zE;case 36296:return VE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}class qE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=AE(t.type)}}class YE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jE(t.type)}}class $E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const af=/(\w+)(\])?(\[|\.)?/g;function Gm(s,e){s.seq.push(e),s.map[e.id]=e}function KE(s,e,t){const r=s.name,a=r.length;for(af.lastIndex=0;;){const l=af.exec(r),c=af.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===a){Gm(t,m===void 0?new qE(d,s,e):new YE(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new $E(d),Gm(t,v)),t=v}}}class Ul{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);KE(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Wm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const ZE=37297;let JE=0;function QE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Xm=new pt;function eM(s){Pt._getMatrix(Xm,Pt.workingColorSpace,s);const e=`mat3( ${Xm.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Bl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+QE(s.getShaderSource(e),d)}else return l}function tM(s,e){const t=eM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nM(s,e){let t;switch(e){case s0:t="Linear";break;case o0:t="Reinhard";break;case a0:t="Cineon";break;case l0:t="ACESFilmic";break;case c0:t="AgX";break;case f0:t="Neutral";break;case u0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Al=new q;function iM(){Pt.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function sM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function oM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function Bo(s){return s!==""}function qm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(s){return s.replace(aM,uM)}const lM=new Map;function uM(s,e){let t=mt[e];if(t===void 0){const r=lM.get(e);if(r!==void 0)t=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zf(t)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(cM,fM)}function fM(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function dM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pM(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Xs&&(e="ENVMAP_MODE_REFRACTION"),e}function mM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case og:e="ENVMAP_BLENDING_MULTIPLY";break;case i0:e="ENVMAP_BLENDING_MIX";break;case r0:e="ENVMAP_BLENDING_ADD";break}return e}function gM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function _M(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const p=dM(t),m=hM(t),_=pM(t),v=mM(t),y=gM(t),S=rM(t),A=sM(l),R=a.createProgram();let x,g,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Bo).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Bo).join(`
`),g.length>0&&(g+=`
`)):(x=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),g=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sr?"#define TONE_MAPPING":"",t.toneMapping!==Sr?mt.tonemapping_pars_fragment:"",t.toneMapping!==Sr?nM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,tM("linearToOutputTexel",t.outputColorSpace),iM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),c=Zf(c),c=qm(c,t),c=Ym(c,t),d=Zf(d),d=qm(d,t),d=Ym(d,t),c=$m(c),d=$m(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=D+x+c,T=D+g+d,B=Wm(a,a.VERTEX_SHADER,P),O=Wm(a,a.FRAGMENT_SHADER,T);a.attachShader(R,B),a.attachShader(R,O),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function k(I){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(R)||"",ie=a.getShaderInfoLog(B)||"",oe=a.getShaderInfoLog(O)||"",fe=se.trim(),ne=ie.trim(),ue=oe.trim();let V=!0,le=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,B,O);else{const re=jm(a,B,"vertex"),U=jm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+fe+`
`+re+`
`+U)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(ne===""||ue==="")&&(le=!1);le&&(I.diagnostics={runnable:V,programLog:fe,vertexShader:{log:ne,prefix:x},fragmentShader:{log:ue,prefix:g}})}a.deleteShader(B),a.deleteShader(O),G=new Ul(a,R),b=oM(a,R)}let G;this.getUniforms=function(){return G===void 0&&k(this),G};let b;this.getAttributes=function(){return b===void 0&&k(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(R,ZE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=O,this}let vM=0;class yM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new xM(e),t.set(e,r)),r}}class xM{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}}function SM(s,e,t,r,a,l,c){const d=new xg,p=new yM,m=new Set,_=[],v=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function x(b,C,I,se,ie){const oe=se.fog,fe=ie.geometry,ne=b.isMeshStandardMaterial?se.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||ne),V=ue&&ue.mapping===Hl?ue.image.height:null,le=A[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const re=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=re!==void 0?re.length:0;let Q=0;fe.morphAttributes.position!==void 0&&(Q=1),fe.morphAttributes.normal!==void 0&&(Q=2),fe.morphAttributes.color!==void 0&&(Q=3);let Ve,ze,Z,pe;if(le){const Mt=yi[le];Ve=Mt.vertexShader,ze=Mt.fragmentShader}else Ve=b.vertexShader,ze=b.fragmentShader,p.update(b),Z=p.getVertexShaderID(b),pe=p.getFragmentShaderID(b);const he=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Pe=ie.isInstancedMesh===!0,ye=ie.isBatchedMesh===!0,Ie=!!b.map,Re=!!b.matcap,F=!!ue,ht=!!b.aoMap,Ye=!!b.lightMap,st=!!b.bumpMap,Ne=!!b.normalMap,yt=!!b.displacementMap,Be=!!b.emissiveMap,lt=!!b.metalnessMap,Ct=!!b.roughnessMap,zt=b.anisotropy>0,L=b.clearcoat>0,M=b.dispersion>0,$=b.iridescence>0,ce=b.sheen>0,_e=b.transmission>0,ae=zt&&!!b.anisotropyMap,Je=L&&!!b.clearcoatMap,Te=L&&!!b.clearcoatNormalMap,We=L&&!!b.clearcoatRoughnessMap,Qe=$&&!!b.iridescenceMap,Me=$&&!!b.iridescenceThicknessMap,Ue=ce&&!!b.sheenColorMap,ot=ce&&!!b.sheenRoughnessMap,Ke=!!b.specularMap,be=!!b.specularColorMap,dt=!!b.specularIntensityMap,H=_e&&!!b.transmissionMap,Se=_e&&!!b.thicknessMap,Ae=!!b.gradientMap,Fe=!!b.alphaMap,xe=b.alphaTest>0,de=!!b.alphaHash,qe=!!b.extensions;let ft=Sr;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ft=s.toneMapping);const Dt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:ze,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:ye,batchingColor:ye&&ie._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&ie.instanceColor!==null,instancingMorph:Pe&&ie.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:js,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:Re,envMap:F,envMapMode:F&&ue.mapping,envMapCubeUVHeight:V,aoMap:ht,lightMap:Ye,bumpMap:st,normalMap:Ne,displacementMap:y&&yt,emissiveMap:Be,normalMapObjectSpace:Ne&&b.normalMapType===m0,normalMapTangentSpace:Ne&&b.normalMapType===gg,metalnessMap:lt,roughnessMap:Ct,anisotropy:zt,anisotropyMap:ae,clearcoat:L,clearcoatMap:Je,clearcoatNormalMap:Te,clearcoatRoughnessMap:We,dispersion:M,iridescence:$,iridescenceMap:Qe,iridescenceThicknessMap:Me,sheen:ce,sheenColorMap:Ue,sheenRoughnessMap:ot,specularMap:Ke,specularColorMap:be,specularIntensityMap:dt,transmission:_e,transmissionMap:H,thicknessMap:Se,gradientMap:Ae,opaque:b.transparent===!1&&b.blending===zs&&b.alphaToCoverage===!1,alphaMap:Fe,alphaTest:xe,alphaHash:de,combine:b.combine,mapUv:Ie&&R(b.map.channel),aoMapUv:ht&&R(b.aoMap.channel),lightMapUv:Ye&&R(b.lightMap.channel),bumpMapUv:st&&R(b.bumpMap.channel),normalMapUv:Ne&&R(b.normalMap.channel),displacementMapUv:yt&&R(b.displacementMap.channel),emissiveMapUv:Be&&R(b.emissiveMap.channel),metalnessMapUv:lt&&R(b.metalnessMap.channel),roughnessMapUv:Ct&&R(b.roughnessMap.channel),anisotropyMapUv:ae&&R(b.anisotropyMap.channel),clearcoatMapUv:Je&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:Te&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:ot&&R(b.sheenRoughnessMap.channel),specularMapUv:Ke&&R(b.specularMap.channel),specularColorMapUv:be&&R(b.specularColorMap.channel),specularIntensityMapUv:dt&&R(b.specularIntensityMap.channel),transmissionMapUv:H&&R(b.transmissionMap.channel),thicknessMapUv:Se&&R(b.thicknessMap.channel),alphaMapUv:Fe&&R(b.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Ne||zt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!fe.attributes.uv&&(Ie||Fe),fog:!!oe,useFog:b.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ce,skinning:ie.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===It,decodeVideoTextureEmissive:Be&&b.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(b.emissiveMap.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gi,flipSided:b.side===Dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=m.has(1),Dt.vertexUv2s=m.has(2),Dt.vertexUv3s=m.has(3),m.clear(),Dt}function g(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)C.push(I),C.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(D(C,b),P(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function D(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function P(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function T(b){const C=A[b.type];let I;if(C){const se=yi[C];I=X0.clone(se.uniforms)}else I=b.uniforms;return I}function B(b,C){let I;for(let se=0,ie=_.length;se<ie;se++){const oe=_[se];if(oe.cacheKey===C){I=oe,++I.usedTimes;break}}return I===void 0&&(I=new _M(s,C,b,l),_.push(I)),I}function O(b){if(--b.usedTimes===0){const C=_.indexOf(b);_[C]=_[_.length-1],_.pop(),b.destroy()}}function k(b){p.remove(b)}function G(){p.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:B,releaseProgram:O,releaseShaderCache:k,programs:_,dispose:G}}function EM(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,p){s.get(c)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function MM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(v,y,S,A,R,x){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:y,material:S,groupOrder:A,renderOrder:v.renderOrder,z:R,group:x},s[e]=g):(g.id=v.id,g.object=v,g.geometry=y,g.material=S,g.groupOrder=A,g.renderOrder=v.renderOrder,g.z=R,g.group=x),e++,g}function d(v,y,S,A,R,x){const g=c(v,y,S,A,R,x);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):t.push(g)}function p(v,y,S,A,R,x){const g=c(v,y,S,A,R,x);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function m(v,y){t.length>1&&t.sort(v||MM),r.length>1&&r.sort(y||Zm),a.length>1&&a.sort(y||Zm)}function _(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:p,finish:_,sort:m}}function wM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Jm,s.set(r,[c])):a>=l.length?(c=new Jm,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function TM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Rt};break;case"SpotLight":t={position:new q,direction:new q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function AM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let RM=0;function CM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bM(s){const e=new TM,t=AM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const a=new q,l=new qt,c=new qt;function d(m){let _=0,v=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,A=0,R=0,x=0,g=0,D=0,P=0,T=0,B=0,O=0,k=0;m.sort(CM);for(let b=0,C=m.length;b<C;b++){const I=m[b],se=I.color,ie=I.intensity,oe=I.distance,fe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=se.r*ie,v+=se.g*ie,y+=se.b*ie;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(I.sh.coefficients[ne],ie);k++}else if(I.isDirectionalLight){const ne=e.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ue=I.shadow,V=t.get(I);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=I.shadow.matrix,D++}r.directional[S]=ne,S++}else if(I.isSpotLight){const ne=e.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(se).multiplyScalar(ie),ne.distance=oe,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,r.spot[R]=ne;const ue=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,ue.updateMatrices(I),I.castShadow&&O++),r.spotLightMatrix[R]=ue.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,r.spotShadow[R]=V,r.spotShadowMap[R]=fe,T++}R++}else if(I.isRectAreaLight){const ne=e.get(I);ne.color.copy(se).multiplyScalar(ie),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),r.rectArea[x]=ne,x++}else if(I.isPointLight){const ne=e.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const ue=I.shadow,V=t.get(I);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,V.shadowCameraNear=ue.camera.near,V.shadowCameraFar=ue.camera.far,r.pointShadow[A]=V,r.pointShadowMap[A]=fe,r.pointShadowMatrix[A]=I.shadow.matrix,P++}r.point[A]=ne,A++}else if(I.isHemisphereLight){const ne=e.get(I);ne.skyColor.copy(I.color).multiplyScalar(ie),ne.groundColor.copy(I.groundColor).multiplyScalar(ie),r.hemi[g]=ne,g++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==S||G.pointLength!==A||G.spotLength!==R||G.rectAreaLength!==x||G.hemiLength!==g||G.numDirectionalShadows!==D||G.numPointShadows!==P||G.numSpotShadows!==T||G.numSpotMaps!==B||G.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=x,r.point.length=A,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=T+B-O,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=k,G.directionalLength=S,G.pointLength=A,G.spotLength=R,G.rectAreaLength=x,G.hemiLength=g,G.numDirectionalShadows=D,G.numPointShadows=P,G.numSpotShadows=T,G.numSpotMaps=B,G.numLightProbes=k,r.version=RM++)}function p(m,_){let v=0,y=0,S=0,A=0,R=0;const x=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const P=m[g];if(P.isDirectionalLight){const T=r.directional[v];T.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(x),v++}else if(P.isSpotLight){const T=r.spot[S];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const T=r.rectArea[A];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(x),c.identity(),l.copy(P.matrixWorld),l.premultiply(x),c.extractRotation(l),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),A++}else if(P.isPointLight){const T=r.point[y];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(x),y++}else if(P.isHemisphereLight){const T=r.hemi[R];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(x),R++}}}return{setup:d,setupView:p,state:r}}function Qm(s){const e=new bM(s),t=[],r=[];function a(_){m.camera=_,t.length=0,r.length=0}function l(_){t.push(_)}function c(_){r.push(_)}function d(){e.setup(t)}function p(_){e.setupView(t,_)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:c}}function PM(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new Qm(s),e.set(a,[d])):l>=c.length?(d=new Qm(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const LM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
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
}`;function NM(s,e,t){let r=new md;const a=new Et,l=new Et,c=new Ft,d=new ty({depthPacking:p0}),p=new ny,m={},_=t.maxTextureSize,v={[Mr]:Dn,[Dn]:Mr,[Gi]:Gi},y=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:LM,fragmentShader:DM}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const A=new ji;A.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Gn(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sg;let g=this.type;this.render=function(O,k,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),se=s.state;se.setBlending(xr),se.buffers.depth.getReversed()?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ie=g!==Hi&&this.type===Hi,oe=g===Hi&&this.type!==Hi;for(let fe=0,ne=O.length;fe<ne;fe++){const ue=O[fe],V=ue.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const le=V.getFrameExtents();if(a.multiply(le),l.copy(V.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/le.x),a.x=l.x*le.x,V.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/le.y),a.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||ie===!0||oe===!0){const U=this.type!==Hi?{minFilter:pi,magFilter:pi}:{};V.map!==null&&V.map.dispose(),V.map=new Qr(a.x,a.y,U),V.map.texture.name=ue.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const re=V.getViewportCount();for(let U=0;U<re;U++){const Q=V.getViewport(U);c.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),se.viewport(c),V.updateMatrices(ue,U),r=V.getFrustum(),T(k,G,V.camera,ue,this.type)}V.isPointLightShadow!==!0&&this.type===Hi&&D(V,G),V.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(b,C,I)};function D(O,k){const G=e.update(R);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Qr(a.x,a.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,G,y,R,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,G,S,R,null)}function P(O,k,G,b){let C=null;const I=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(I!==void 0)C=I;else if(C=G.isPointLight===!0?p:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const se=C.uuid,ie=k.uuid;let oe=m[se];oe===void 0&&(oe={},m[se]=oe);let fe=oe[ie];fe===void 0&&(fe=C.clone(),oe[ie]=fe,k.addEventListener("dispose",B)),C=fe}if(C.visible=k.visible,C.wireframe=k.wireframe,b===Hi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:v[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const se=s.properties.get(C);se.light=G}return C}function T(O,k,G,b,C){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Hi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const ie=e.update(O),oe=O.material;if(Array.isArray(oe)){const fe=ie.groups;for(let ne=0,ue=fe.length;ne<ue;ne++){const V=fe[ne],le=oe[V.materialIndex];if(le&&le.visible){const re=P(O,le,b,C);O.onBeforeShadow(s,O,k,G,ie,re,V),s.renderBufferDirect(G,null,ie,re,O,V),O.onAfterShadow(s,O,k,G,ie,re,V)}}}else if(oe.visible){const fe=P(O,oe,b,C);O.onBeforeShadow(s,O,k,G,ie,fe,null),s.renderBufferDirect(G,null,ie,fe,O,null),O.onAfterShadow(s,O,k,G,ie,fe,null)}}const se=O.children;for(let ie=0,oe=se.length;ie<oe;ie++)T(se[ie],k,G,b,C)}function B(O){O.target.removeEventListener("dispose",B);for(const G in m){const b=m[G],C=O.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const UM={[hf]:pf,[mf]:vf,[gf]:yf,[Gs]:_f,[pf]:hf,[vf]:mf,[yf]:gf,[_f]:Gs};function IM(s,e){function t(){let H=!1;const Se=new Ft;let Ae=null;const Fe=new Ft(0,0,0,0);return{setMask:function(xe){Ae!==xe&&!H&&(s.colorMask(xe,xe,xe,xe),Ae=xe)},setLocked:function(xe){H=xe},setClear:function(xe,de,qe,ft,Dt){Dt===!0&&(xe*=ft,de*=ft,qe*=ft),Se.set(xe,de,qe,ft),Fe.equals(Se)===!1&&(s.clearColor(xe,de,qe,ft),Fe.copy(Se))},reset:function(){H=!1,Ae=null,Fe.set(-1,0,0,0)}}}function r(){let H=!1,Se=!1,Ae=null,Fe=null,xe=null;return{setReversed:function(de){if(Se!==de){const qe=e.get("EXT_clip_control");de?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=de;const ft=xe;xe=null,this.setClear(ft)}},getReversed:function(){return Se},setTest:function(de){de?he(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(de){Ae!==de&&!H&&(s.depthMask(de),Ae=de)},setFunc:function(de){if(Se&&(de=UM[de]),Fe!==de){switch(de){case hf:s.depthFunc(s.NEVER);break;case pf:s.depthFunc(s.ALWAYS);break;case mf:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case gf:s.depthFunc(s.EQUAL);break;case _f:s.depthFunc(s.GEQUAL);break;case vf:s.depthFunc(s.GREATER);break;case yf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=de}},setLocked:function(de){H=de},setClear:function(de){xe!==de&&(Se&&(de=1-de),s.clearDepth(de),xe=de)},reset:function(){H=!1,Ae=null,Fe=null,xe=null,Se=!1}}}function a(){let H=!1,Se=null,Ae=null,Fe=null,xe=null,de=null,qe=null,ft=null,Dt=null;return{setTest:function(Mt){H||(Mt?he(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Mt){Se!==Mt&&!H&&(s.stencilMask(Mt),Se=Mt)},setFunc:function(Mt,Xn,fn){(Ae!==Mt||Fe!==Xn||xe!==fn)&&(s.stencilFunc(Mt,Xn,fn),Ae=Mt,Fe=Xn,xe=fn)},setOp:function(Mt,Xn,fn){(de!==Mt||qe!==Xn||ft!==fn)&&(s.stencilOp(Mt,Xn,fn),de=Mt,qe=Xn,ft=fn)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Dt!==Mt&&(s.clearStencil(Mt),Dt=Mt)},reset:function(){H=!1,Se=null,Ae=null,Fe=null,xe=null,de=null,qe=null,ft=null,Dt=null}}}const l=new t,c=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},y=new WeakMap,S=[],A=null,R=!1,x=null,g=null,D=null,P=null,T=null,B=null,O=null,k=new Rt(0,0,0),G=0,b=!1,C=null,I=null,se=null,ie=null,oe=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ue=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(V)[1]),ne=ue>=1):V.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ne=ue>=2);let le=null,re={};const U=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),Ve=new Ft().fromArray(U),ze=new Ft().fromArray(Q);function Z(H,Se,Ae,Fe){const xe=new Uint8Array(4),de=s.createTexture();s.bindTexture(H,de),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<Ae;qe++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Se+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return de}const pe={};pe[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),he(s.DEPTH_TEST),c.setFunc(Gs),st(!1),Ne(nm),he(s.CULL_FACE),ht(xr);function he(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Ce(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Pe(H,Se){return v[H]!==Se?(s.bindFramebuffer(H,Se),v[H]=Se,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Se),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function ye(H,Se){let Ae=S,Fe=!1;if(H){Ae=y.get(Se),Ae===void 0&&(Ae=[],y.set(Se,Ae));const xe=H.textures;if(Ae.length!==xe.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let de=0,qe=xe.length;de<qe;de++)Ae[de]=s.COLOR_ATTACHMENT0+de;Ae.length=xe.length,Fe=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(Ae)}function Ie(H){return A!==H?(s.useProgram(H),A=H,!0):!1}const Re={[Yr]:s.FUNC_ADD,[zv]:s.FUNC_SUBTRACT,[Vv]:s.FUNC_REVERSE_SUBTRACT};Re[Hv]=s.MIN,Re[Gv]=s.MAX;const F={[Wv]:s.ZERO,[Xv]:s.ONE,[jv]:s.SRC_COLOR,[ff]:s.SRC_ALPHA,[Jv]:s.SRC_ALPHA_SATURATE,[Kv]:s.DST_COLOR,[Yv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[df]:s.ONE_MINUS_SRC_ALPHA,[Zv]:s.ONE_MINUS_DST_COLOR,[$v]:s.ONE_MINUS_DST_ALPHA,[Qv]:s.CONSTANT_COLOR,[e0]:s.ONE_MINUS_CONSTANT_COLOR,[t0]:s.CONSTANT_ALPHA,[n0]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(H,Se,Ae,Fe,xe,de,qe,ft,Dt,Mt){if(H===xr){R===!0&&(Ce(s.BLEND),R=!1);return}if(R===!1&&(he(s.BLEND),R=!0),H!==Bv){if(H!==x||Mt!==b){if((g!==Yr||T!==Yr)&&(s.blendEquation(s.FUNC_ADD),g=Yr,T=Yr),Mt)switch(H){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case im:s.blendFunc(s.ONE,s.ONE);break;case rm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case im:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}D=null,P=null,B=null,O=null,k.set(0,0,0),G=0,x=H,b=Mt}return}xe=xe||Se,de=de||Ae,qe=qe||Fe,(Se!==g||xe!==T)&&(s.blendEquationSeparate(Re[Se],Re[xe]),g=Se,T=xe),(Ae!==D||Fe!==P||de!==B||qe!==O)&&(s.blendFuncSeparate(F[Ae],F[Fe],F[de],F[qe]),D=Ae,P=Fe,B=de,O=qe),(ft.equals(k)===!1||Dt!==G)&&(s.blendColor(ft.r,ft.g,ft.b,Dt),k.copy(ft),G=Dt),x=H,b=!1}function Ye(H,Se){H.side===Gi?Ce(s.CULL_FACE):he(s.CULL_FACE);let Ae=H.side===Dn;Se&&(Ae=!Ae),st(Ae),H.blending===zs&&H.transparent===!1?ht(xr):ht(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Fe=H.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Be(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function Ne(H){H!==Fv?(he(s.CULL_FACE),H!==I&&(H===nm?s.cullFace(s.BACK):H===Ov?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),I=H}function yt(H){H!==se&&(ne&&s.lineWidth(H),se=H)}function Be(H,Se,Ae){H?(he(s.POLYGON_OFFSET_FILL),(ie!==Se||oe!==Ae)&&(s.polygonOffset(Se,Ae),ie=Se,oe=Ae)):Ce(s.POLYGON_OFFSET_FILL)}function lt(H){H?he(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Ct(H){H===void 0&&(H=s.TEXTURE0+fe-1),le!==H&&(s.activeTexture(H),le=H)}function zt(H,Se,Ae){Ae===void 0&&(le===null?Ae=s.TEXTURE0+fe-1:Ae=le);let Fe=re[Ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},re[Ae]=Fe),(Fe.type!==H||Fe.texture!==Se)&&(le!==Ae&&(s.activeTexture(Ae),le=Ae),s.bindTexture(H,Se||pe[H]),Fe.type=H,Fe.texture=Se)}function L(){const H=re[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{s.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{s.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{s.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{s.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(H){Ve.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ve.copy(H))}function ot(H){ze.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),ze.copy(H))}function Ke(H,Se){let Ae=m.get(Se);Ae===void 0&&(Ae=new WeakMap,m.set(Se,Ae));let Fe=Ae.get(H);Fe===void 0&&(Fe=s.getUniformBlockIndex(Se,H.name),Ae.set(H,Fe))}function be(H,Se){const Fe=m.get(Se).get(H);p.get(Se)!==Fe&&(s.uniformBlockBinding(Se,Fe,H.__bindingPointIndex),p.set(Se,Fe))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,re={},v={},y=new WeakMap,S=[],A=null,R=!1,x=null,g=null,D=null,P=null,T=null,B=null,O=null,k=new Rt(0,0,0),G=0,b=!1,C=null,I=null,se=null,ie=null,oe=null,Ve.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:he,disable:Ce,bindFramebuffer:Pe,drawBuffers:ye,useProgram:Ie,setBlending:ht,setMaterial:Ye,setFlipSided:st,setCullFace:Ne,setLineWidth:yt,setPolygonOffset:Be,setScissorTest:lt,activeTexture:Ct,bindTexture:zt,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:$,texImage2D:Qe,texImage3D:Me,updateUBOMapping:Ke,uniformBlockBinding:be,texStorage2D:Te,texStorage3D:We,texSubImage2D:ce,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:Je,scissor:Ue,viewport:ot,reset:dt}}function FM(s,e,t,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,_=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,M){return S?new OffscreenCanvas(L,M):Vl("canvas")}function R(L,M,$){let ce=1;const _e=zt(L);if((_e.width>$||_e.height>$)&&(ce=$/Math.max(_e.width,_e.height)),ce<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ae=Math.floor(ce*_e.width),Je=Math.floor(ce*_e.height);v===void 0&&(v=A(ae,Je));const Te=M?A(ae,Je):v;return Te.width=ae,Te.height=Je,Te.getContext("2d").drawImage(L,0,0,ae,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ae+"x"+Je+")."),Te}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function x(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,M,$,ce,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=M;if(M===s.RED&&($===s.FLOAT&&(ae=s.R32F),$===s.HALF_FLOAT&&(ae=s.R16F),$===s.UNSIGNED_BYTE&&(ae=s.R8)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ae=s.R8UI),$===s.UNSIGNED_SHORT&&(ae=s.R16UI),$===s.UNSIGNED_INT&&(ae=s.R32UI),$===s.BYTE&&(ae=s.R8I),$===s.SHORT&&(ae=s.R16I),$===s.INT&&(ae=s.R32I)),M===s.RG&&($===s.FLOAT&&(ae=s.RG32F),$===s.HALF_FLOAT&&(ae=s.RG16F),$===s.UNSIGNED_BYTE&&(ae=s.RG8)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ae=s.RG8UI),$===s.UNSIGNED_SHORT&&(ae=s.RG16UI),$===s.UNSIGNED_INT&&(ae=s.RG32UI),$===s.BYTE&&(ae=s.RG8I),$===s.SHORT&&(ae=s.RG16I),$===s.INT&&(ae=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),$===s.UNSIGNED_INT&&(ae=s.RGB32UI),$===s.BYTE&&(ae=s.RGB8I),$===s.SHORT&&(ae=s.RGB16I),$===s.INT&&(ae=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),$===s.UNSIGNED_INT&&(ae=s.RGBA32UI),$===s.BYTE&&(ae=s.RGBA8I),$===s.SHORT&&(ae=s.RGBA16I),$===s.INT&&(ae=s.RGBA32I)),M===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),M===s.RGBA){const Je=_e?Bl:Pt.getTransfer(ce);$===s.FLOAT&&(ae=s.RGBA32F),$===s.HALF_FLOAT&&(ae=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ae=Je===It?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function T(L,M){let $;return L?M===null||M===Jr||M===Ho?$=s.DEPTH24_STENCIL8:M===Wi?$=s.DEPTH32F_STENCIL8:M===Vo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jr||M===Ho?$=s.DEPTH_COMPONENT24:M===Wi?$=s.DEPTH_COMPONENT32F:M===Vo&&($=s.DEPTH_COMPONENT16),$}function B(L,M){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==xi?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function O(L){const M=L.target;M.removeEventListener("dispose",O),G(M),M.isVideoTexture&&_.delete(M)}function k(L){const M=L.target;M.removeEventListener("dispose",k),C(M)}function G(L){const M=r.get(L);if(M.__webglInit===void 0)return;const $=L.source,ce=y.get($);if(ce){const _e=ce[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(L),Object.keys(ce).length===0&&y.delete($)}r.remove(L)}function b(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const $=L.source,ce=y.get($);delete ce[M.__cacheKey],c.memory.textures--}function C(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let _e=0;_e<M.__webglFramebuffer[ce].length;_e++)s.deleteFramebuffer(M.__webglFramebuffer[ce][_e]);else s.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)s.deleteFramebuffer(M.__webglFramebuffer[ce]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=L.textures;for(let ce=0,_e=$.length;ce<_e;ce++){const ae=r.get($[ce]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),c.memory.textures--),r.remove($[ce])}r.remove(L)}let I=0;function se(){I=0}function ie(){const L=I;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),I+=1,L}function oe(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function fe(L,M){const $=r.get(L);if(L.isVideoTexture&&lt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const ce=L.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe($,L,M);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function ne(L,M){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){pe($,L,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function ue(L,M){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){pe($,L,M);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function V(L,M){const $=r.get(L);if(L.version>0&&$.__version!==L.version){he($,L,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const le={[Ef]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[Mf]:s.MIRRORED_REPEAT},re={[pi]:s.NEAREST,[d0]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Cc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},U={[g0]:s.NEVER,[E0]:s.ALWAYS,[_0]:s.LESS,[_g]:s.LEQUAL,[v0]:s.EQUAL,[S0]:s.GEQUAL,[y0]:s.GREATER,[x0]:s.NOTEQUAL};function Q(L,M){if(M.type===Wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xi||M.magFilter===Cc||M.magFilter===rl||M.magFilter===Zr||M.minFilter===xi||M.minFilter===Cc||M.minFilter===rl||M.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,le[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,le[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,le[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pi||M.minFilter!==rl&&M.minFilter!==Zr||M.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ve(L,M){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",O));const ce=M.source;let _e=y.get(ce);_e===void 0&&(_e={},y.set(ce,_e));const ae=oe(M);if(ae!==L.__cacheKey){_e[ae]===void 0&&(_e[ae]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),_e[ae].usedTimes++;const Je=_e[L.__cacheKey];Je!==void 0&&(_e[L.__cacheKey].usedTimes--,Je.usedTimes===0&&b(M)),L.__cacheKey=ae,L.__webglTexture=_e[ae].texture}return $}function ze(L,M,$){return Math.floor(Math.floor(L/$)/M)}function Z(L,M,$,ce){const ae=L.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,$,ce,M.data);else{ae.sort((Me,Ue)=>Me.start-Ue.start);let Je=0;for(let Me=1;Me<ae.length;Me++){const Ue=ae[Je],ot=ae[Me],Ke=Ue.start+Ue.count,be=ze(ot.start,M.width,4),dt=ze(Ue.start,M.width,4);ot.start<=Ke+1&&be===dt&&ze(ot.start+ot.count-1,M.width,4)===be?Ue.count=Math.max(Ue.count,ot.start+ot.count-Ue.start):(++Je,ae[Je]=ot)}ae.length=Je+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),We=s.getParameter(s.UNPACK_SKIP_PIXELS),Qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Me=0,Ue=ae.length;Me<Ue;Me++){const ot=ae[Me],Ke=Math.floor(ot.start/4),be=Math.ceil(ot.count/4),dt=Ke%M.width,H=Math.floor(Ke/M.width),Se=be,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,dt,H,Se,Ae,$,ce,M.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qe)}}function pe(L,M,$){let ce=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=s.TEXTURE_3D);const _e=Ve(L,M),ae=M.source;t.bindTexture(ce,L.__webglTexture,s.TEXTURE0+$);const Je=r.get(ae);if(ae.version!==Je.__version||_e===!0){t.activeTexture(s.TEXTURE0+$);const Te=Pt.getPrimaries(Pt.workingColorSpace),We=M.colorSpace===yr?null:Pt.getPrimaries(M.colorSpace),Qe=M.colorSpace===yr||Te===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Me=R(M.image,!1,a.maxTextureSize);Me=Ct(M,Me);const Ue=l.convert(M.format,M.colorSpace),ot=l.convert(M.type);let Ke=P(M.internalFormat,Ue,ot,M.colorSpace,M.isVideoTexture);Q(ce,M);let be;const dt=M.mipmaps,H=M.isVideoTexture!==!0,Se=Je.__version===void 0||_e===!0,Ae=ae.dataReady,Fe=B(M,Me);if(M.isDepthTexture)Ke=T(M.format===Wo,M.type),Se&&(H?t.texStorage2D(s.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Ue,ot,null));else if(M.isDataTexture)if(dt.length>0){H&&Se&&t.texStorage2D(s.TEXTURE_2D,Fe,Ke,dt[0].width,dt[0].height);for(let xe=0,de=dt.length;xe<de;xe++)be=dt[xe],H?Ae&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ue,ot,be.data):t.texImage2D(s.TEXTURE_2D,xe,Ke,be.width,be.height,0,Ue,ot,be.data);M.generateMipmaps=!1}else H?(Se&&t.texStorage2D(s.TEXTURE_2D,Fe,Ke,Me.width,Me.height),Ae&&Z(M,Me,Ue,ot)):t.texImage2D(s.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Ue,ot,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ke,dt[0].width,dt[0].height,Me.depth);for(let xe=0,de=dt.length;xe<de;xe++)if(be=dt[xe],M.format!==hi)if(Ue!==null)if(H){if(Ae)if(M.layerUpdates.size>0){const qe=bm(be.width,be.height,M.format,M.type);for(const ft of M.layerUpdates){const Dt=be.data.subarray(ft*qe/be.data.BYTES_PER_ELEMENT,(ft+1)*qe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,ft,be.width,be.height,1,Ue,Dt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Me.depth,Ue,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Ke,be.width,be.height,Me.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Me.depth,Ue,ot,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Ke,be.width,be.height,Me.depth,0,Ue,ot,be.data)}else{H&&Se&&t.texStorage2D(s.TEXTURE_2D,Fe,Ke,dt[0].width,dt[0].height);for(let xe=0,de=dt.length;xe<de;xe++)be=dt[xe],M.format!==hi?Ue!==null?H?Ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ue,be.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ae&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ue,ot,be.data):t.texImage2D(s.TEXTURE_2D,xe,Ke,be.width,be.height,0,Ue,ot,be.data)}else if(M.isDataArrayTexture)if(H){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ke,Me.width,Me.height,Me.depth),Ae)if(M.layerUpdates.size>0){const xe=bm(Me.width,Me.height,M.format,M.type);for(const de of M.layerUpdates){const qe=Me.data.subarray(de*xe/Me.data.BYTES_PER_ELEMENT,(de+1)*xe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,Ue,ot,qe)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ue,ot,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,Ue,ot,Me.data);else if(M.isData3DTexture)H?(Se&&t.texStorage3D(s.TEXTURE_3D,Fe,Ke,Me.width,Me.height,Me.depth),Ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ue,ot,Me.data)):t.texImage3D(s.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,Ue,ot,Me.data);else if(M.isFramebufferTexture){if(Se)if(H)t.texStorage2D(s.TEXTURE_2D,Fe,Ke,Me.width,Me.height);else{let xe=Me.width,de=Me.height;for(let qe=0;qe<Fe;qe++)t.texImage2D(s.TEXTURE_2D,qe,Ke,xe,de,0,Ue,ot,null),xe>>=1,de>>=1}}else if(dt.length>0){if(H&&Se){const xe=zt(dt[0]);t.texStorage2D(s.TEXTURE_2D,Fe,Ke,xe.width,xe.height)}for(let xe=0,de=dt.length;xe<de;xe++)be=dt[xe],H?Ae&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ue,ot,be):t.texImage2D(s.TEXTURE_2D,xe,Ke,Ue,ot,be);M.generateMipmaps=!1}else if(H){if(Se){const xe=zt(Me);t.texStorage2D(s.TEXTURE_2D,Fe,Ke,xe.width,xe.height)}Ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,ot,Me)}else t.texImage2D(s.TEXTURE_2D,0,Ke,Ue,ot,Me);x(M)&&g(ce),Je.__version=ae.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function he(L,M,$){if(M.image.length!==6)return;const ce=Ve(L,M),_e=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+$);const ae=r.get(_e);if(_e.version!==ae.__version||ce===!0){t.activeTexture(s.TEXTURE0+$);const Je=Pt.getPrimaries(Pt.workingColorSpace),Te=M.colorSpace===yr?null:Pt.getPrimaries(M.colorSpace),We=M.colorSpace===yr||Je===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Qe=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,Ue=[];for(let de=0;de<6;de++)!Qe&&!Me?Ue[de]=R(M.image[de],!0,a.maxCubemapSize):Ue[de]=Me?M.image[de].image:M.image[de],Ue[de]=Ct(M,Ue[de]);const ot=Ue[0],Ke=l.convert(M.format,M.colorSpace),be=l.convert(M.type),dt=P(M.internalFormat,Ke,be,M.colorSpace),H=M.isVideoTexture!==!0,Se=ae.__version===void 0||ce===!0,Ae=_e.dataReady;let Fe=B(M,ot);Q(s.TEXTURE_CUBE_MAP,M);let xe;if(Qe){H&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,dt,ot.width,ot.height);for(let de=0;de<6;de++){xe=Ue[de].mipmaps;for(let qe=0;qe<xe.length;qe++){const ft=xe[qe];M.format!==hi?Ke!==null?H?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe,0,0,ft.width,ft.height,Ke,ft.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe,dt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe,0,0,ft.width,ft.height,Ke,be,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe,dt,ft.width,ft.height,0,Ke,be,ft.data)}}}else{if(xe=M.mipmaps,H&&Se){xe.length>0&&Fe++;const de=zt(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,dt,de.width,de.height)}for(let de=0;de<6;de++)if(Me){H?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue[de].width,Ue[de].height,Ke,be,Ue[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,Ue[de].width,Ue[de].height,0,Ke,be,Ue[de].data);for(let qe=0;qe<xe.length;qe++){const Dt=xe[qe].image[de].image;H?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe+1,0,0,Dt.width,Dt.height,Ke,be,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe+1,dt,Dt.width,Dt.height,0,Ke,be,Dt.data)}}else{H?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ke,be,Ue[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,Ke,be,Ue[de]);for(let qe=0;qe<xe.length;qe++){const ft=xe[qe];H?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe+1,0,0,Ke,be,ft.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe+1,dt,Ke,be,ft.image[de])}}}x(M)&&g(s.TEXTURE_CUBE_MAP),ae.__version=_e.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ce(L,M,$,ce,_e,ae){const Je=l.convert($.format,$.colorSpace),Te=l.convert($.type),We=P($.internalFormat,Je,Te,$.colorSpace),Qe=r.get(M),Me=r.get($);if(Me.__renderTarget=M,!Qe.__hasExternalTextures){const Ue=Math.max(1,M.width>>ae),ot=Math.max(1,M.height>>ae);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,ae,We,Ue,ot,M.depth,0,Je,Te,null):t.texImage2D(_e,ae,We,Ue,ot,0,Je,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Be(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,_e,Me.__webglTexture,0,yt(M)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,_e,Me.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(L,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const ce=M.depthTexture,_e=ce&&ce.isDepthTexture?ce.type:null,ae=T(M.stencilBuffer,_e),Je=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=yt(M);Be(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ae,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ae,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ae,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Je,s.RENDERBUFFER,L)}else{const ce=M.textures;for(let _e=0;_e<ce.length;_e++){const ae=ce[_e],Je=l.convert(ae.format,ae.colorSpace),Te=l.convert(ae.type),We=P(ae.internalFormat,Je,Te,ae.colorSpace),Qe=yt(M);$&&Be(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,We,M.width,M.height):Be(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,We,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,We,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=r.get(M.depthTexture);ce.__renderTarget=M,(!ce.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),fe(M.depthTexture,0);const _e=ce.__webglTexture,ae=yt(M);if(M.depthTexture.format===Go)Be(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(M.depthTexture.format===Wo)Be(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const M=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ce=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ce){const _e=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ce.removeEventListener("dispose",_e)};ce.addEventListener("dispose",_e),M.__depthDisposeCallback=_e}M.__boundDepthTexture=ce}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ce=L.texture.mipmaps;ce&&ce.length>0?ye(M.__webglFramebuffer[0],L):ye(M.__webglFramebuffer,L)}else if($){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]===void 0)M.__webglDepthbuffer[ce]=s.createRenderbuffer(),Pe(M.__webglDepthbuffer[ce],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ae)}}else{const ce=L.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Pe(M.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(L,M,$){const ce=r.get(L);M!==void 0&&Ce(ce.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ie(L)}function F(L){const M=L.texture,$=r.get(L),ce=r.get(M);L.addEventListener("dispose",k);const _e=L.textures,ae=L.isWebGLCubeRenderTarget===!0,Je=_e.length>1;if(Je||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=M.version,c.memory.textures++),ae){$.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Te]=[];for(let We=0;We<M.mipmaps.length;We++)$.__webglFramebuffer[Te][We]=s.createFramebuffer()}else $.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Te=0;Te<M.mipmaps.length;Te++)$.__webglFramebuffer[Te]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Je)for(let Te=0,We=_e.length;Te<We;Te++){const Qe=r.get(_e[Te]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&Be(L)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Te=0;Te<_e.length;Te++){const We=_e[Te];$.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Te]);const Qe=l.convert(We.format,We.colorSpace),Me=l.convert(We.type),Ue=P(We.internalFormat,Qe,Me,We.colorSpace,L.isXRRenderTarget===!0),ot=yt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Ue,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,$.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Q(s.TEXTURE_CUBE_MAP,M);for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0)for(let We=0;We<M.mipmaps.length;We++)Ce($.__webglFramebuffer[Te][We],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We);else Ce($.__webglFramebuffer[Te],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(M)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let Te=0,We=_e.length;Te<We;Te++){const Qe=_e[Te],Me=r.get(Qe);let Ue=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Me.__webglTexture),Q(Ue,Qe),Ce($.__webglFramebuffer,L,Qe,s.COLOR_ATTACHMENT0+Te,Ue,0),x(Qe)&&g(Ue)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,ce.__webglTexture),Q(Te,M),M.mipmaps&&M.mipmaps.length>0)for(let We=0;We<M.mipmaps.length;We++)Ce($.__webglFramebuffer[We],L,M,s.COLOR_ATTACHMENT0,Te,We);else Ce($.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,Te,0);x(M)&&g(Te),t.unbindTexture()}L.depthBuffer&&Ie(L)}function ht(L){const M=L.textures;for(let $=0,ce=M.length;$<ce;$++){const _e=M[$];if(x(_e)){const ae=D(L),Je=r.get(_e).__webglTexture;t.bindTexture(ae,Je),g(ae),t.unbindTexture()}}}const Ye=[],st=[];function Ne(L){if(L.samples>0){if(Be(L)===!1){const M=L.textures,$=L.width,ce=L.height;let _e=s.COLOR_BUFFER_BIT;const ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Je=r.get(L),Te=M.length>1;if(Te)for(let Qe=0;Qe<M.length;Qe++)t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const We=L.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Qe=0;Qe<M.length;Qe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Je.__webglColorRenderbuffer[Qe]);const Me=r.get(M[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,$,ce,0,0,$,ce,_e,s.NEAREST),p===!0&&(Ye.length=0,st.length=0,Ye.push(s.COLOR_ATTACHMENT0+Qe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ye.push(ae),st.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,st)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let Qe=0;Qe<M.length;Qe++){t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Je.__webglColorRenderbuffer[Qe]);const Me=r.get(M[Qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,Me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function yt(L){return Math.min(a.maxSamples,L.samples)}function Be(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(L){const M=c.render.frame;_.get(L)!==M&&(_.set(L,M),L.update())}function Ct(L,M){const $=L.colorSpace,ce=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==js&&$!==yr&&(Pt.getTransfer($)===It?(ce!==hi||_e!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ie,this.resetTextureUnits=se,this.setTexture2D=fe,this.setTexture2DArray=ne,this.setTexture3D=ue,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Be}function OM(s,e){function t(r,a=yr){let l;const c=Pt.getTransfer(a);if(r===wi)return s.UNSIGNED_BYTE;if(r===ad)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===cg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===lg)return s.BYTE;if(r===ug)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===od)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===Xo)return s.HALF_FLOAT;if(r===fg)return s.ALPHA;if(r===dg)return s.RGB;if(r===hi)return s.RGBA;if(r===Go)return s.DEPTH_COMPONENT;if(r===Wo)return s.DEPTH_STENCIL;if(r===hg)return s.RED;if(r===ud)return s.RED_INTEGER;if(r===pg)return s.RG;if(r===cd)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===bl||r===Pl||r===Ll||r===Dl)if(c===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wf||r===Tf||r===Af||r===Rf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===wf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Af)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cf||r===bf||r===Pf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Cf||r===bf)return c===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Pf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lf||r===Df||r===Nf||r===Uf||r===If||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Lf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Df)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===If)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ff)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Of)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===Xf||r===jf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Nl)return c===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mg||r===qf||r===Yf||r===$f)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Nl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===qf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$f)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class Ig extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
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

}`;class zM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ig(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new wr({vertexShader:kM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new Ko(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VM extends Ys{constructor(e,t){super();const r=this;let a=null,l=1,c=null,d="local-floor",p=1,m=null,_=null,v=null,y=null,S=null,A=null;const R=new zM,x={},g=t.getContextAttributes();let D=null,P=null;const T=[],B=[],O=new Et;let k=null;const G=new Hn;G.viewport=new Ft;const b=new Hn;b.viewport=new Ft;const C=[G,b],I=new ly;let se=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=T[Z];return pe===void 0&&(pe=new Zc,T[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=T[Z];return pe===void 0&&(pe=new Zc,T[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=T[Z];return pe===void 0&&(pe=new Zc,T[Z]=pe),pe.getHandSpace()};function oe(Z){const pe=B.indexOf(Z.inputSource);if(pe===-1)return;const he=T[pe];he!==void 0&&(he.update(Z.inputSource,Z.frame,m||c),he.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){a.removeEventListener("select",oe),a.removeEventListener("selectstart",oe),a.removeEventListener("selectend",oe),a.removeEventListener("squeeze",oe),a.removeEventListener("squeezestart",oe),a.removeEventListener("squeezeend",oe),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<T.length;Z++){const pe=B[Z];pe!==null&&(B[Z]=null,T[Z].disconnect(pe))}se=null,ie=null,R.reset();for(const Z in x)delete x[Z];e.setRenderTarget(D),S=null,y=null,v=null,a=null,P=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",oe),a.addEventListener("selectstart",oe),a.addEventListener("selectend",oe),a.addEventListener("squeeze",oe),a.addEventListener("squeezestart",oe),a.addEventListener("squeezeend",oe),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(a,t)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ce=null,Pe=null;g.depth&&(Pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?Wo:Go,Ce=g.stencil?Ho:Jr);const ye={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};y=v.createProjectionLayer(ye),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new Qr(y.textureWidth,y.textureHeight,{format:hi,type:wi,depthTexture:new Cg(y.textureWidth,y.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Qr(S.framebufferWidth,S.framebufferHeight,{format:hi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await a.requestReferenceSpace(d),ze.setContext(a),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ne(Z){for(let pe=0;pe<Z.removed.length;pe++){const he=Z.removed[pe],Ce=B.indexOf(he);Ce>=0&&(B[Ce]=null,T[Ce].disconnect(he))}for(let pe=0;pe<Z.added.length;pe++){const he=Z.added[pe];let Ce=B.indexOf(he);if(Ce===-1){for(let ye=0;ye<T.length;ye++)if(ye>=B.length){B.push(he),Ce=ye;break}else if(B[ye]===null){B[ye]=he,Ce=ye;break}if(Ce===-1)break}const Pe=T[Ce];Pe&&Pe.connect(he)}}const ue=new q,V=new q;function le(Z,pe,he){ue.setFromMatrixPosition(pe.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const Ce=ue.distanceTo(V),Pe=pe.projectionMatrix.elements,ye=he.projectionMatrix.elements,Ie=Pe[14]/(Pe[10]-1),Re=Pe[14]/(Pe[10]+1),F=(Pe[9]+1)/Pe[5],ht=(Pe[9]-1)/Pe[5],Ye=(Pe[8]-1)/Pe[0],st=(ye[8]+1)/ye[0],Ne=Ie*Ye,yt=Ie*st,Be=Ce/(-Ye+st),lt=Be*-Ye;if(pe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(lt),Z.translateZ(Be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ct=Ie+Be,zt=Re+Be,L=Ne-lt,M=yt+(Ce-lt),$=F*Re/zt*Ct,ce=ht*Re/zt*Ct;Z.projectionMatrix.makePerspective(L,M,$,ce,Ct,zt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let pe=Z.near,he=Z.far;R.texture!==null&&(R.depthNear>0&&(pe=R.depthNear),R.depthFar>0&&(he=R.depthFar)),I.near=b.near=G.near=pe,I.far=b.far=G.far=he,(se!==I.near||ie!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),se=I.near,ie=I.far),I.layers.mask=Z.layers.mask|6,G.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const Ce=Z.parent,Pe=I.cameras;re(I,Ce);for(let ye=0;ye<Pe.length;ye++)re(Pe[ye],Ce);Pe.length===2?le(I,G,b):I.projectionMatrix.copy(G.projectionMatrix),U(Z,I,Ce)};function U(Z,pe,he){he===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy(he.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Kf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(Z){p=Z,y!==null&&(y.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(I)},this.getCameraTexture=function(Z){return x[Z]};let Q=null;function Ve(Z,pe){if(_=pe.getViewerPose(m||c),A=pe,_!==null){const he=_.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ce=!1;he.length!==I.cameras.length&&(I.cameras.length=0,Ce=!0);for(let Re=0;Re<he.length;Re++){const F=he[Re];let ht=null;if(S!==null)ht=S.getViewport(F);else{const st=v.getViewSubImage(y,F);ht=st.viewport,Re===0&&(e.setRenderTargetTextures(P,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(P))}let Ye=C[Re];Ye===void 0&&(Ye=new Hn,Ye.layers.enable(Re),Ye.viewport=new Ft,C[Re]=Ye),Ye.matrix.fromArray(F.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(F.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ht.x,ht.y,ht.width,ht.height),Re===0&&(I.matrix.copy(Ye.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ce===!0&&I.cameras.push(Ye)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Re=v.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&R.init(Re,a.renderState)}if(Pe&&Pe.includes("camera-access")&&(e.state.unbindTexture(),v))for(let Re=0;Re<he.length;Re++){const F=he[Re].camera;if(F){let ht=x[F];ht||(ht=new Ig,x[F]=ht);const Ye=v.getCameraImage(F);ht.sourceTexture=Ye}}}for(let he=0;he<T.length;he++){const Ce=B[he],Pe=T[he];Ce!==null&&Pe!==void 0&&Pe.update(Ce,pe,m||c)}Q&&Q(Z,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),A=null}const ze=new Pg;ze.setAnimationLoop(Ve),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}}const Xr=new Ti,HM=new qt;function GM(s,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,Tg(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function a(x,g,D,P,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(x,g):g.isMeshToonMaterial?(l(x,g),v(x,g)):g.isMeshPhongMaterial?(l(x,g),_(x,g)):g.isMeshStandardMaterial?(l(x,g),y(x,g),g.isMeshPhysicalMaterial&&S(x,g,T)):g.isMeshMatcapMaterial?(l(x,g),A(x,g)):g.isMeshDepthMaterial?l(x,g):g.isMeshDistanceMaterial?(l(x,g),R(x,g)):g.isMeshNormalMaterial?l(x,g):g.isLineBasicMaterial?(c(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?p(x,g,D,P):g.isSpriteMaterial?m(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Dn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Dn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const D=e.get(g),P=D.envMap,T=D.envMapRotation;P&&(x.envMap.value=P,Xr.copy(T),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),x.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(Xr)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function p(x,g,D,P){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*D,x.scale.value=P*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function m(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function y(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function S(x,g,D){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,g){g.matcap&&(x.matcap.value=g.matcap)}function R(x,g){const D=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function WM(s,e,t,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,P){const T=P.program;r.uniformBlockBinding(D,T)}function m(D,P){let T=a[D.id];T===void 0&&(A(D),T=_(D),a[D.id]=T,D.addEventListener("dispose",x));const B=P.program;r.updateUBOMapping(D,B);const O=e.render.frame;l[D.id]!==O&&(y(D),l[D.id]=O)}function _(D){const P=v();D.__bindingPointIndex=P;const T=s.createBuffer(),B=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,B,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,T),T}function v(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const P=a[D.id],T=D.uniforms,B=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let O=0,k=T.length;O<k;O++){const G=Array.isArray(T[O])?T[O]:[T[O]];for(let b=0,C=G.length;b<C;b++){const I=G[b];if(S(I,O,b,B)===!0){const se=I.__offset,ie=Array.isArray(I.value)?I.value:[I.value];let oe=0;for(let fe=0;fe<ie.length;fe++){const ne=ie[fe],ue=R(ne);typeof ne=="number"||typeof ne=="boolean"?(I.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,se+oe,I.__data)):ne.isMatrix3?(I.__data[0]=ne.elements[0],I.__data[1]=ne.elements[1],I.__data[2]=ne.elements[2],I.__data[3]=0,I.__data[4]=ne.elements[3],I.__data[5]=ne.elements[4],I.__data[6]=ne.elements[5],I.__data[7]=0,I.__data[8]=ne.elements[6],I.__data[9]=ne.elements[7],I.__data[10]=ne.elements[8],I.__data[11]=0):(ne.toArray(I.__data,oe),oe+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,P,T,B){const O=D.value,k=P+"_"+T;if(B[k]===void 0)return typeof O=="number"||typeof O=="boolean"?B[k]=O:B[k]=O.clone(),!0;{const G=B[k];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return B[k]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function A(D){const P=D.uniforms;let T=0;const B=16;for(let k=0,G=P.length;k<G;k++){const b=Array.isArray(P[k])?P[k]:[P[k]];for(let C=0,I=b.length;C<I;C++){const se=b[C],ie=Array.isArray(se.value)?se.value:[se.value];for(let oe=0,fe=ie.length;oe<fe;oe++){const ne=ie[oe],ue=R(ne),V=T%B,le=V%ue.boundary,re=V+le;T+=le,re!==0&&B-re<ue.storage&&(T+=B-re),se.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=T,T+=ue.storage}}}const O=T%B;return O>0&&(T+=B-O),D.__size=T,D.__cache={},this}function R(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function x(D){const P=D.target;P.removeEventListener("dispose",x);const T=c.indexOf(P.__bindingPointIndex);c.splice(T,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:p,update:m,dispose:g}}class XM{constructor(e={}){const{canvas:t=w0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const A=new Uint32Array(4),R=new Int32Array(4);let x=null,g=null;const D=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let B=!1;this._outputColorSpace=Qn;let O=0,k=0,G=null,b=-1,C=null;const I=new Ft,se=new Ft;let ie=null;const oe=new Rt(0);let fe=0,ne=t.width,ue=t.height,V=1,le=null,re=null;const U=new Ft(0,0,ne,ue),Q=new Ft(0,0,ne,ue);let Ve=!1;const ze=new md;let Z=!1,pe=!1;const he=new qt,Ce=new q,Pe=new Ft,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Re(){return G===null?V:1}let F=r;function ht(w,j){return t.getContext(w,j)}try{const w={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sd}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),F===null){const j="webgl2";if(F=ht(j,w),F===null)throw ht(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ye,st,Ne,yt,Be,lt,Ct,zt,L,M,$,ce,_e,ae,Je,Te,We,Qe,Me,Ue,ot,Ke,be,dt;function H(){Ye=new tE(F),Ye.init(),Ke=new OM(F,Ye),st=new YS(F,Ye,e,Ke),Ne=new IM(F,Ye),st.reversedDepthBuffer&&y&&Ne.buffers.depth.setReversed(!0),yt=new rE(F),Be=new EM,lt=new FM(F,Ye,Ne,Be,st,Ke,yt),Ct=new KS(T),zt=new eE(T),L=new cy(F),be=new jS(F,L),M=new nE(F,L,yt,be),$=new oE(F,M,L,yt),Me=new sE(F,st,lt),Te=new $S(Be),ce=new SM(T,Ct,zt,Ye,st,be,Te),_e=new GM(T,Be),ae=new wM,Je=new PM(Ye),Qe=new XS(T,Ct,zt,Ne,$,S,p),We=new NM(T,$,st),dt=new WM(F,yt,st,Ne),Ue=new qS(F,Ye,yt),ot=new iE(F,Ye,yt),yt.programs=ce.programs,T.capabilities=st,T.extensions=Ye,T.properties=Be,T.renderLists=ae,T.shadowMap=We,T.state=Ne,T.info=yt}H();const Se=new VM(T,F);this.xr=Se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(ne,ue,!1))},this.getSize=function(w){return w.set(ne,ue)},this.setSize=function(w,j,ee=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=w,ue=j,t.width=Math.floor(w*V),t.height=Math.floor(j*V),ee===!0&&(t.style.width=w+"px",t.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(ne*V,ue*V).floor()},this.setDrawingBufferSize=function(w,j,ee){ne=w,ue=j,V=ee,t.width=Math.floor(w*ee),t.height=Math.floor(j*ee),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,j,ee,te){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,j,ee,te),Ne.viewport(I.copy(U).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,j,ee,te){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,j,ee,te),Ne.scissor(se.copy(Q).multiplyScalar(V).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(w){Ne.setScissorTest(Ve=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ee=!0){let te=0;if(w){let W=!1;if(G!==null){const Ee=G.texture.format;W=Ee===fd||Ee===cd||Ee===ud}if(W){const Ee=G.texture.type,Le=Ee===wi||Ee===Jr||Ee===Vo||Ee===Ho||Ee===ad||Ee===ld,Xe=Qe.getClearColor(),Oe=Qe.getClearAlpha(),rt=Xe.r,at=Xe.g,et=Xe.b;Le?(A[0]=rt,A[1]=at,A[2]=et,A[3]=Oe,F.clearBufferuiv(F.COLOR,0,A)):(R[0]=rt,R[1]=at,R[2]=et,R[3]=Oe,F.clearBufferiv(F.COLOR,0,R))}else te|=F.COLOR_BUFFER_BIT}j&&(te|=F.DEPTH_BUFFER_BIT),ee&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Qe.dispose(),ae.dispose(),Je.dispose(),Be.dispose(),Ct.dispose(),zt.dispose(),$.dispose(),be.dispose(),dt.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",fn),Se.removeEventListener("sessionend",es),In.stop()};function Ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const w=yt.autoReset,j=We.enabled,ee=We.autoUpdate,te=We.needsUpdate,W=We.type;H(),yt.autoReset=w,We.enabled=j,We.autoUpdate=ee,We.needsUpdate=te,We.type=W}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function de(w){const j=w.target;j.removeEventListener("dispose",de),qe(j)}function qe(w){ft(w),Be.remove(w)}function ft(w){const j=Be.get(w).programs;j!==void 0&&(j.forEach(function(ee){ce.releaseProgram(ee)}),w.isShaderMaterial&&ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ee,te,W,Ee){j===null&&(j=ye);const Le=W.isMesh&&W.matrixWorld.determinant()<0,Xe=Ci(w,j,ee,te,W);Ne.setMaterial(te,Le);let Oe=ee.index,rt=1;if(te.wireframe===!0){if(Oe=M.getWireframeAttribute(ee),Oe===void 0)return;rt=2}const at=ee.drawRange,et=ee.attributes.position;let ut=at.start*rt,Lt=(at.start+at.count)*rt;Ee!==null&&(ut=Math.max(ut,Ee.start*rt),Lt=Math.min(Lt,(Ee.start+Ee.count)*rt)),Oe!==null?(ut=Math.max(ut,0),Lt=Math.min(Lt,Oe.count)):et!=null&&(ut=Math.max(ut,0),Lt=Math.min(Lt,et.count));const wt=Lt-ut;if(wt<0||wt===1/0)return;be.setup(W,te,Xe,ee,Oe);let Ot,Nt=Ue;if(Oe!==null&&(Ot=L.get(Oe),Nt=ot,Nt.setIndex(Ot)),W.isMesh)te.wireframe===!0?(Ne.setLineWidth(te.wireframeLinewidth*Re()),Nt.setMode(F.LINES)):Nt.setMode(F.TRIANGLES);else if(W.isLine){let tt=te.linewidth;tt===void 0&&(tt=1),Ne.setLineWidth(tt*Re()),W.isLineSegments?Nt.setMode(F.LINES):W.isLineLoop?Nt.setMode(F.LINE_LOOP):Nt.setMode(F.LINE_STRIP)}else W.isPoints?Nt.setMode(F.POINTS):W.isSprite&&Nt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const tt=W._multiDrawStarts,Ut=W._multiDrawCounts,_t=W._multiDrawCount,Qt=Oe?L.get(Oe).bytesPerElement:1,ti=Be.get(te).currentProgram.getUniforms();for(let xn=0;xn<_t;xn++)ti.setValue(F,"_gl_DrawID",xn),Nt.render(tt[xn]/Qt,Ut[xn])}else if(W.isInstancedMesh)Nt.renderInstances(ut,wt,W.count);else if(ee.isInstancedBufferGeometry){const tt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ut=Math.min(ee.instanceCount,tt);Nt.renderInstances(ut,wt,Ut)}else Nt.render(ut,wt)};function Dt(w,j,ee){w.transparent===!0&&w.side===Gi&&w.forceSinglePass===!1?(w.side=Dn,w.needsUpdate=!0,ns(w,j,ee),w.side=Mr,w.needsUpdate=!0,ns(w,j,ee),w.side=Gi):ns(w,j,ee)}this.compile=function(w,j,ee=null){ee===null&&(ee=w),g=Je.get(ee),g.init(j),P.push(g),ee.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),w!==ee&&w.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const te=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Xe=Ee[Le];Dt(Xe,ee,W),te.add(Xe)}else Dt(Ee,ee,W),te.add(Ee)}),g=P.pop(),te},this.compileAsync=function(w,j,ee=null){const te=this.compile(w,j,ee);return new Promise(W=>{function Ee(){if(te.forEach(function(Le){Be.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){W(w);return}setTimeout(Ee,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Mt=null;function Xn(w){Mt&&Mt(w)}function fn(){In.stop()}function es(){In.start()}const In=new Pg;In.setAnimationLoop(Xn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(w){Mt=w,Se.setAnimationLoop(w),w===null?In.stop():In.start()},Se.addEventListener("sessionstart",fn),Se.addEventListener("sessionend",es),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(j),j=Se.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,j,G),g=Je.get(w,P.length),g.init(j),P.push(g),he.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ze.setFromProjectionMatrix(he,Si,j.reversedDepth),pe=this.localClippingEnabled,Z=Te.init(this.clippingPlanes,pe),x=ae.get(w,D.length),x.init(),D.push(x),Se.enabled===!0&&Se.isPresenting===!0){const Ee=T.xr.getDepthSensingMesh();Ee!==null&&Js(Ee,j,-1/0,T.sortObjects)}Js(w,j,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(le,re),Ie=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ie&&Qe.addToRenderList(x,w),this.info.render.frame++,Z===!0&&Te.beginShadows();const ee=g.state.shadowsArray;We.render(ee,w,j),Z===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=x.opaque,W=x.transmissive;if(g.setupLights(),j.isArrayCamera){const Ee=j.cameras;if(W.length>0)for(let Le=0,Xe=Ee.length;Le<Xe;Le++){const Oe=Ee[Le];Tr(te,W,w,Oe)}Ie&&Qe.render(w);for(let Le=0,Xe=Ee.length;Le<Xe;Le++){const Oe=Ee[Le];qi(x,w,Oe,Oe.viewport)}}else W.length>0&&Tr(te,W,w,j),Ie&&Qe.render(w),qi(x,w,j);G!==null&&k===0&&(lt.updateMultisampleRenderTarget(G),lt.updateRenderTargetMipmap(G)),w.isScene===!0&&w.onAfterRender(T,w,j),be.resetDefaultState(),b=-1,C=null,P.pop(),P.length>0?(g=P[P.length-1],Z===!0&&Te.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?x=D[D.length-1]:x=null};function Js(w,j,ee,te){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){te&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const Le=$.update(w),Xe=w.material;Xe.visible&&x.push(w,Le,Xe,ee,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const Le=$.update(w),Xe=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Pe.copy(Le.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(Xe)){const Oe=Le.groups;for(let rt=0,at=Oe.length;rt<at;rt++){const et=Oe[rt],ut=Xe[et.materialIndex];ut&&ut.visible&&x.push(w,Le,ut,ee,Pe.z,et)}}else Xe.visible&&x.push(w,Le,Xe,ee,Pe.z,null)}}const Ee=w.children;for(let Le=0,Xe=Ee.length;Le<Xe;Le++)Js(Ee[Le],j,ee,te)}function qi(w,j,ee,te){const W=w.opaque,Ee=w.transmissive,Le=w.transparent;g.setupLightsView(ee),Z===!0&&Te.setGlobalState(T.clippingPlanes,ee),te&&Ne.viewport(I.copy(te)),W.length>0&&Ri(W,j,ee),Ee.length>0&&Ri(Ee,j,ee),Le.length>0&&Ri(Le,j,ee),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Tr(w,j,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new Qr(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Xo:wi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[te.id],Le=te.viewport||I;Ee.setSize(Le.z*T.transmissionResolutionScale,Le.w*T.transmissionResolutionScale);const Xe=T.getRenderTarget(),Oe=T.getActiveCubeFace(),rt=T.getActiveMipmapLevel();T.setRenderTarget(Ee),T.getClearColor(oe),fe=T.getClearAlpha(),fe<1&&T.setClearColor(16777215,.5),T.clear(),Ie&&Qe.render(ee);const at=T.toneMapping;T.toneMapping=Sr;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),Z===!0&&Te.setGlobalState(T.clippingPlanes,te),Ri(w,ee,te),lt.updateMultisampleRenderTarget(Ee),lt.updateRenderTargetMipmap(Ee),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Lt=0,wt=j.length;Lt<wt;Lt++){const Ot=j[Lt],Nt=Ot.object,tt=Ot.geometry,Ut=Ot.material,_t=Ot.group;if(Ut.side===Gi&&Nt.layers.test(te.layers)){const Qt=Ut.side;Ut.side=Dn,Ut.needsUpdate=!0,ts(Nt,ee,te,tt,Ut,_t),Ut.side=Qt,Ut.needsUpdate=!0,ut=!0}}ut===!0&&(lt.updateMultisampleRenderTarget(Ee),lt.updateRenderTargetMipmap(Ee))}T.setRenderTarget(Xe,Oe,rt),T.setClearColor(oe,fe),et!==void 0&&(te.viewport=et),T.toneMapping=at}function Ri(w,j,ee){const te=j.isScene===!0?j.overrideMaterial:null;for(let W=0,Ee=w.length;W<Ee;W++){const Le=w[W],Xe=Le.object,Oe=Le.geometry,rt=Le.group;let at=Le.material;at.allowOverride===!0&&te!==null&&(at=te),Xe.layers.test(ee.layers)&&ts(Xe,j,ee,Oe,at,rt)}}function ts(w,j,ee,te,W,Ee){w.onBeforeRender(T,j,ee,te,W,Ee),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(T,j,ee,te,w,Ee),W.transparent===!0&&W.side===Gi&&W.forceSinglePass===!1?(W.side=Dn,W.needsUpdate=!0,T.renderBufferDirect(ee,j,te,W,w,Ee),W.side=Mr,W.needsUpdate=!0,T.renderBufferDirect(ee,j,te,W,w,Ee),W.side=Gi):T.renderBufferDirect(ee,j,te,W,w,Ee),w.onAfterRender(T,j,ee,te,W,Ee)}function ns(w,j,ee){j.isScene!==!0&&(j=ye);const te=Be.get(w),W=g.state.lights,Ee=g.state.shadowsArray,Le=W.state.version,Xe=ce.getParameters(w,W.state,Ee,j,ee),Oe=ce.getProgramCacheKey(Xe);let rt=te.programs;te.environment=w.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(w.isMeshStandardMaterial?zt:Ct).get(w.envMap||te.environment),te.envMapRotation=te.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,rt===void 0&&(w.addEventListener("dispose",de),rt=new Map,te.programs=rt);let at=rt.get(Oe);if(at!==void 0){if(te.currentProgram===at&&te.lightsStateVersion===Le)return Jo(w,Xe),at}else Xe.uniforms=ce.getUniforms(w),w.onBeforeCompile(Xe,T),at=ce.acquireProgram(Xe,Oe),rt.set(Oe,at),te.uniforms=Xe.uniforms;const et=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(et.clippingPlanes=Te.uniform),Jo(w,Xe),te.needsLights=ea(w),te.lightsStateVersion=Le,te.needsLights&&(et.ambientLightColor.value=W.state.ambient,et.lightProbe.value=W.state.probe,et.directionalLights.value=W.state.directional,et.directionalLightShadows.value=W.state.directionalShadow,et.spotLights.value=W.state.spot,et.spotLightShadows.value=W.state.spotShadow,et.rectAreaLights.value=W.state.rectArea,et.ltc_1.value=W.state.rectAreaLTC1,et.ltc_2.value=W.state.rectAreaLTC2,et.pointLights.value=W.state.point,et.pointLightShadows.value=W.state.pointShadow,et.hemisphereLights.value=W.state.hemi,et.directionalShadowMap.value=W.state.directionalShadowMap,et.directionalShadowMatrix.value=W.state.directionalShadowMatrix,et.spotShadowMap.value=W.state.spotShadowMap,et.spotLightMatrix.value=W.state.spotLightMatrix,et.spotLightMap.value=W.state.spotLightMap,et.pointShadowMap.value=W.state.pointShadowMap,et.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=at,te.uniformsList=null,at}function Zo(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Ul.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Jo(w,j){const ee=Be.get(w);ee.outputColorSpace=j.outputColorSpace,ee.batching=j.batching,ee.batchingColor=j.batchingColor,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.instancingMorph=j.instancingMorph,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function Ci(w,j,ee,te,W){j.isScene!==!0&&(j=ye),lt.resetTextureUnits();const Ee=j.fog,Le=te.isMeshStandardMaterial?j.environment:null,Xe=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:js,Oe=(te.isMeshStandardMaterial?zt:Ct).get(te.envMap||Le),rt=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,at=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),et=!!ee.morphAttributes.position,ut=!!ee.morphAttributes.normal,Lt=!!ee.morphAttributes.color;let wt=Sr;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(wt=T.toneMapping);const Ot=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Nt=Ot!==void 0?Ot.length:0,tt=Be.get(te),Ut=g.state.lights;if(Z===!0&&(pe===!0||w!==C)){const Yt=w===C&&te.id===b;Te.setState(te,w,Yt)}let _t=!1;te.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ut.state.version||tt.outputColorSpace!==Xe||W.isBatchedMesh&&tt.batching===!1||!W.isBatchedMesh&&tt.batching===!0||W.isBatchedMesh&&tt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&tt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&tt.instancing===!1||!W.isInstancedMesh&&tt.instancing===!0||W.isSkinnedMesh&&tt.skinning===!1||!W.isSkinnedMesh&&tt.skinning===!0||W.isInstancedMesh&&tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&tt.instancingMorph===!1&&W.morphTexture!==null||tt.envMap!==Oe||te.fog===!0&&tt.fog!==Ee||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Te.numPlanes||tt.numIntersection!==Te.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==at||tt.morphTargets!==et||tt.morphNormals!==ut||tt.morphColors!==Lt||tt.toneMapping!==wt||tt.morphTargetsCount!==Nt)&&(_t=!0):(_t=!0,tt.__version=te.version);let Qt=tt.currentProgram;_t===!0&&(Qt=ns(te,j,W));let ti=!1,xn=!1,Ar=!1;const kt=Qt.getUniforms(),Sn=tt.uniforms;if(Ne.useProgram(Qt.program)&&(ti=!0,xn=!0,Ar=!0),te.id!==b&&(b=te.id,xn=!0),ti||C!==w){Ne.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),kt.setValue(F,"projectionMatrix",w.projectionMatrix),kt.setValue(F,"viewMatrix",w.matrixWorldInverse);const hn=kt.map.cameraPosition;hn!==void 0&&hn.setValue(F,Ce.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&kt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&kt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,xn=!0,Ar=!0)}if(W.isSkinnedMesh){kt.setOptional(F,W,"bindMatrix"),kt.setOptional(F,W,"bindMatrixInverse");const Yt=W.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),kt.setValue(F,"boneTexture",Yt.boneTexture,lt))}W.isBatchedMesh&&(kt.setOptional(F,W,"batchingTexture"),kt.setValue(F,"batchingTexture",W._matricesTexture,lt),kt.setOptional(F,W,"batchingIdTexture"),kt.setValue(F,"batchingIdTexture",W._indirectTexture,lt),kt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&kt.setValue(F,"batchingColorTexture",W._colorsTexture,lt));const dn=ee.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Me.update(W,ee,Qt),(xn||tt.receiveShadow!==W.receiveShadow)&&(tt.receiveShadow=W.receiveShadow,kt.setValue(F,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Sn.envMap.value=Oe,Sn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(Sn.envMapIntensity.value=j.environmentIntensity),xn&&(kt.setValue(F,"toneMappingExposure",T.toneMappingExposure),tt.needsLights&&Qo(Sn,Ar),Ee&&te.fog===!0&&_e.refreshFogUniforms(Sn,Ee),_e.refreshMaterialUniforms(Sn,te,V,ue,g.state.transmissionRenderTarget[w.id]),Ul.upload(F,Zo(tt),Sn,lt)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ul.upload(F,Zo(tt),Sn,lt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&kt.setValue(F,"center",W.center),kt.setValue(F,"modelViewMatrix",W.modelViewMatrix),kt.setValue(F,"normalMatrix",W.normalMatrix),kt.setValue(F,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Yt=te.uniformsGroups;for(let hn=0,Rr=Yt.length;hn<Rr;hn++){const vt=Yt[hn];dt.update(vt,Qt),dt.bind(vt,Qt)}}return Qt}function Qo(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function ea(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,j,ee){const te=Be.get(w);te.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Be.get(w.texture).__webglTexture=j,Be.get(w.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ee=Be.get(w);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0};const jl=F.createFramebuffer();this.setRenderTarget=function(w,j=0,ee=0){G=w,O=j,k=ee;let te=!0,W=null,Ee=!1,Le=!1;if(w){const Oe=Be.get(w);if(Oe.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(F.FRAMEBUFFER,null),te=!1;else if(Oe.__webglFramebuffer===void 0)lt.setupRenderTarget(w);else if(Oe.__hasExternalTextures)lt.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&Be.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(w)}}const rt=w.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Le=!0);const at=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(at[j])?W=at[j][ee]:W=at[j],Ee=!0):w.samples>0&&lt.useMultisampledRTT(w)===!1?W=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(at)?W=at[ee]:W=at,I.copy(w.viewport),se.copy(w.scissor),ie=w.scissorTest}else I.copy(U).multiplyScalar(V).floor(),se.copy(Q).multiplyScalar(V).floor(),ie=Ve;if(ee!==0&&(W=jl),Ne.bindFramebuffer(F.FRAMEBUFFER,W)&&te&&Ne.drawBuffers(w,W),Ne.viewport(I),Ne.scissor(se),Ne.setScissorTest(ie),Ee){const Oe=Be.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,ee)}else if(Le){const Oe=j;for(let rt=0;rt<w.textures.length;rt++){const at=Be.get(w.textures[rt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+rt,at.__webglTexture,ee,Oe)}}else if(w!==null&&ee!==0){const Oe=Be.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(w,j,ee,te,W,Ee,Le,Xe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Ne.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const rt=w.textures[Xe],at=rt.format,et=rt.type;if(!st.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-te&&ee>=0&&ee<=w.height-W&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xe),F.readPixels(j,ee,te,W,Ke.convert(at),Ke.convert(et),Ee))}finally{const rt=G!==null?Be.get(G).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(w,j,ee,te,W,Ee,Le,Xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(j>=0&&j<=w.width-te&&ee>=0&&ee<=w.height-W){Ne.bindFramebuffer(F.FRAMEBUFFER,Oe);const rt=w.textures[Xe],at=rt.format,et=rt.type;if(!st.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.bufferData(F.PIXEL_PACK_BUFFER,Ee.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xe),F.readPixels(j,ee,te,W,Ke.convert(at),Ke.convert(et),0);const Lt=G!==null?Be.get(G).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,Lt);const wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await T0(F,wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ee),F.deleteBuffer(ut),F.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ee=0){const te=Math.pow(2,-ee),W=Math.floor(w.image.width*te),Ee=Math.floor(w.image.height*te),Le=j!==null?j.x:0,Xe=j!==null?j.y:0;lt.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,Le,Xe,W,Ee),Ne.unbindTexture()};const ta=F.createFramebuffer(),na=F.createFramebuffer();this.copyTextureToTexture=function(w,j,ee=null,te=null,W=0,Ee=null){Ee===null&&(W!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=W,W=0):Ee=0);let Le,Xe,Oe,rt,at,et,ut,Lt,wt;const Ot=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(ee!==null)Le=ee.max.x-ee.min.x,Xe=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,rt=ee.min.x,at=ee.min.y,et=ee.isBox3?ee.min.z:0;else{const dn=Math.pow(2,-W);Le=Math.floor(Ot.width*dn),Xe=Math.floor(Ot.height*dn),w.isDataArrayTexture?Oe=Ot.depth:w.isData3DTexture?Oe=Math.floor(Ot.depth*dn):Oe=1,rt=0,at=0,et=0}te!==null?(ut=te.x,Lt=te.y,wt=te.z):(ut=0,Lt=0,wt=0);const Nt=Ke.convert(j.format),tt=Ke.convert(j.type);let Ut;j.isData3DTexture?(lt.setTexture3D(j,0),Ut=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(lt.setTexture2DArray(j,0),Ut=F.TEXTURE_2D_ARRAY):(lt.setTexture2D(j,0),Ut=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=F.getParameter(F.UNPACK_ROW_LENGTH),Qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ti=F.getParameter(F.UNPACK_SKIP_PIXELS),xn=F.getParameter(F.UNPACK_SKIP_ROWS),Ar=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,at),F.pixelStorei(F.UNPACK_SKIP_IMAGES,et);const kt=w.isDataArrayTexture||w.isData3DTexture,Sn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const dn=Be.get(w),Yt=Be.get(j),hn=Be.get(dn.__renderTarget),Rr=Be.get(Yt.__renderTarget);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let vt=0;vt<Oe;vt++)kt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(w).__webglTexture,W,et+vt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(j).__webglTexture,Ee,wt+vt)),F.blitFramebuffer(rt,at,Le,Xe,ut,Lt,Le,Xe,F.DEPTH_BUFFER_BIT,F.NEAREST);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||Be.has(w)){const dn=Be.get(w),Yt=Be.get(j);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,ta),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,na);for(let hn=0;hn<Oe;hn++)kt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,W,et+hn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,W),Sn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.__webglTexture,Ee,wt+hn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yt.__webglTexture,Ee),W!==0?F.blitFramebuffer(rt,at,Le,Xe,ut,Lt,Le,Xe,F.COLOR_BUFFER_BIT,F.NEAREST):Sn?F.copyTexSubImage3D(Ut,Ee,ut,Lt,wt+hn,rt,at,Le,Xe):F.copyTexSubImage2D(Ut,Ee,ut,Lt,rt,at,Le,Xe);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Sn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ut,Ee,ut,Lt,wt,Le,Xe,Oe,Nt,tt,Ot.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(Ut,Ee,ut,Lt,wt,Le,Xe,Oe,Nt,Ot.data):F.texSubImage3D(Ut,Ee,ut,Lt,wt,Le,Xe,Oe,Nt,tt,Ot):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ee,ut,Lt,Le,Xe,Nt,tt,Ot.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ee,ut,Lt,Ot.width,Ot.height,Nt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,Ee,ut,Lt,Le,Xe,Nt,tt,Ot);F.pixelStorei(F.UNPACK_ROW_LENGTH,_t),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ti),F.pixelStorei(F.UNPACK_SKIP_ROWS,xn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ar),Ee===0&&j.generateMipmaps&&F.generateMipmap(Ut),Ne.unbindTexture()},this.copyTextureToTexture3D=function(w,j,ee=null,te=null,W=0){return Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,j,ee,te,W)},this.initRenderTarget=function(w){Be.get(w).__webglFramebuffer===void 0&&lt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?lt.setTextureCube(w,0):w.isData3DTexture?lt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?lt.setTexture2DArray(w,0):lt.setTexture2D(w,0),Ne.unbindTexture()},this.resetState=function(){O=0,k=0,G=null,Ne.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const Ai=Object.create(null);Ai.open="0";Ai.close="1";Ai.ping="2";Ai.pong="3";Ai.message="4";Ai.upgrade="5";Ai.noop="6";const Il=Object.create(null);Object.keys(Ai).forEach(s=>{Il[Ai[s]]=s});const Jf={type:"error",data:"parser error"},Fg=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Og=typeof ArrayBuffer=="function",kg=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,xd=({type:s,data:e},t,r)=>Fg&&e instanceof Blob?t?r(e):eg(e,r):Og&&(e instanceof ArrayBuffer||kg(e))?t?r(e):eg(new Blob([e]),r):r(Ai[s]+(e||"")),eg=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function tg(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let lf;function jM(s,e){if(Fg&&s.data instanceof Blob)return s.data.arrayBuffer().then(tg).then(e);if(Og&&(s.data instanceof ArrayBuffer||kg(s.data)))return e(tg(s.data));xd(s,!1,t=>{lf||(lf=new TextEncoder),e(lf.encode(t))})}const ng="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",zo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<ng.length;s++)zo[ng.charCodeAt(s)]=s;const qM=s=>{let e=s.length*.75,t=s.length,r,a=0,l,c,d,p;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const m=new ArrayBuffer(e),_=new Uint8Array(m);for(r=0;r<t;r+=4)l=zo[s.charCodeAt(r)],c=zo[s.charCodeAt(r+1)],d=zo[s.charCodeAt(r+2)],p=zo[s.charCodeAt(r+3)],_[a++]=l<<2|c>>4,_[a++]=(c&15)<<4|d>>2,_[a++]=(d&3)<<6|p&63;return m},YM=typeof ArrayBuffer=="function",Sd=(s,e)=>{if(typeof s!="string")return{type:"message",data:Bg(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:$M(s.substring(1),e)}:Il[t]?s.length>1?{type:Il[t],data:s.substring(1)}:{type:Il[t]}:Jf},$M=(s,e)=>{if(YM){const t=qM(s);return Bg(t,e)}else return{base64:!0,data:s}},Bg=(s,e)=>e==="blob"?s instanceof Blob?s:new Blob([s]):s instanceof ArrayBuffer?s:s.buffer,zg="",KM=(s,e)=>{const t=s.length,r=new Array(t);let a=0;s.forEach((l,c)=>{xd(l,!1,d=>{r[c]=d,++a===t&&e(r.join(zg))})})},ZM=(s,e)=>{const t=s.split(zg),r=[];for(let a=0;a<t.length;a++){const l=Sd(t[a],e);if(r.push(l),l.type==="error")break}return r};function JM(){return new TransformStream({transform(s,e){jM(s,t=>{const r=t.length;let a;if(r<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,r);else if(r<65536){a=new Uint8Array(3);const l=new DataView(a.buffer);l.setUint8(0,126),l.setUint16(1,r)}else{a=new Uint8Array(9);const l=new DataView(a.buffer);l.setUint8(0,127),l.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(a[0]|=128),e.enqueue(a),e.enqueue(t)})}})}let uf;function Rl(s){return s.reduce((e,t)=>e+t.length,0)}function Cl(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let a=0;a<e;a++)t[a]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function QM(s,e){uf||(uf=new TextDecoder);const t=[];let r=0,a=-1,l=!1;return new TransformStream({transform(c,d){for(t.push(c);;){if(r===0){if(Rl(t)<1)break;const p=Cl(t,1);l=(p[0]&128)===128,a=p[0]&127,a<126?r=3:a===126?r=1:r=2}else if(r===1){if(Rl(t)<2)break;const p=Cl(t,2);a=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),r=3}else if(r===2){if(Rl(t)<8)break;const p=Cl(t,8),m=new DataView(p.buffer,p.byteOffset,p.length),_=m.getUint32(0);if(_>Math.pow(2,21)-1){d.enqueue(Jf);break}a=_*Math.pow(2,32)+m.getUint32(4),r=3}else{if(Rl(t)<a)break;const p=Cl(t,a);d.enqueue(Sd(l?p:uf.decode(p),e)),r=0}if(a===0||a>s){d.enqueue(Jf);break}}}})}const Vg=4;function Jt(s){if(s)return ew(s)}function ew(s){for(var e in Jt.prototype)s[e]=Jt.prototype[e];return s}Jt.prototype.on=Jt.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};Jt.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};Jt.prototype.off=Jt.prototype.removeListener=Jt.prototype.removeAllListeners=Jt.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,a=0;a<t.length;a++)if(r=t[a],r===e||r.fn===e){t.splice(a,1);break}return t.length===0&&delete this._callbacks["$"+s],this};Jt.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,a=t.length;r<a;++r)t[r].apply(this,e)}return this};Jt.prototype.emitReserved=Jt.prototype.emit;Jt.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};Jt.prototype.hasListeners=function(s){return!!this.listeners(s).length};const Wl=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),ei=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),tw="arraybuffer";function Hg(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const nw=ei.setTimeout,iw=ei.clearTimeout;function Xl(s,e){e.useNativeTimers?(s.setTimeoutFn=nw.bind(ei),s.clearTimeoutFn=iw.bind(ei)):(s.setTimeoutFn=ei.setTimeout.bind(ei),s.clearTimeoutFn=ei.clearTimeout.bind(ei))}const rw=1.33;function sw(s){return typeof s=="string"?ow(s):Math.ceil((s.byteLength||s.size)*rw)}function ow(s){let e=0,t=0;for(let r=0,a=s.length;r<a;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function Gg(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function aw(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function lw(s){let e={},t=s.split("&");for(let r=0,a=t.length;r<a;r++){let l=t[r].split("=");e[decodeURIComponent(l[0])]=decodeURIComponent(l[1])}return e}class uw extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class Ed extends Jt{constructor(e){super(),this.writable=!1,Xl(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new uw(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Sd(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=aw(e);return t.length?"?"+t:""}}class cw extends Ed{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};ZM(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,KM(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Gg()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Wg=!1;try{Wg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const fw=Wg;function dw(){}class hw extends cw{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let r=location.port;r||(r=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(a,l)=>{this.onError("xhr post error",a,l)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class Mi extends Jt{constructor(e,t,r){super(),this.createRequest=e,Xl(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const t=Hg(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&r.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var a;r.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<"u"&&(this._index=Mi.requestsCount++,Mi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=dw,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Mi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Mi.requestsCount=0;Mi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ig);else if(typeof addEventListener=="function"){const s="onpagehide"in ei?"pagehide":"unload";addEventListener(s,ig,!1)}}function ig(){for(let s in Mi.requests)Mi.requests.hasOwnProperty(s)&&Mi.requests[s].abort()}const pw=(function(){const s=Xg({xdomain:!1});return s&&s.responseType!==null})();class mw extends hw{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=pw&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Mi(Xg,this.uri(),e)}}function Xg(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||fw))return new XMLHttpRequest}catch{}if(!e)try{return new ei[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const jg=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class gw extends Ed{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=jg?{}:Hg(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(a){return this.emitReserved("error",a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;xd(r,this.supportsBinary,l=>{try{this.doWrite(r,l)}catch{}a&&Wl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Gg()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const cf=ei.WebSocket||ei.MozWebSocket;class _w extends gw{createSocket(e,t,r){return jg?new cf(e,t,r):t?new cf(e,t):new cf(e)}doWrite(e,t){this.ws.send(t)}}class vw extends Ed{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=QM(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),a=JM();a.readable.pipeTo(e.writable),this._writer=a.writable.getWriter();const l=()=>{r.read().then(({done:d,value:p})=>{d||(this.onPacket(p),l())}).catch(d=>{})};l();const c={type:"open"};this.query.sid&&(c.data=`{"sid":"${this.query.sid}"}`),this._writer.write(c).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;this._writer.write(r).then(()=>{a&&Wl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const yw={websocket:_w,webtransport:vw,polling:mw},xw=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Sw=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Qf(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let a=xw.exec(s||""),l={},c=14;for(;c--;)l[Sw[c]]=a[c]||"";return t!=-1&&r!=-1&&(l.source=e,l.host=l.host.substring(1,l.host.length-1).replace(/;/g,":"),l.authority=l.authority.replace("[","").replace("]","").replace(/;/g,":"),l.ipv6uri=!0),l.pathNames=Ew(l,l.path),l.queryKey=Mw(l,l.query),l}function Ew(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Mw(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,a,l){a&&(t[a]=l)}),t}const ed=typeof addEventListener=="function"&&typeof removeEventListener=="function",Fl=[];ed&&addEventListener("offline",()=>{Fl.forEach(s=>s())},!1);class Er extends Jt{constructor(e,t){if(super(),this.binaryType=tw,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const r=Qf(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=Qf(t.host).host);Xl(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(r=>{const a=r.prototype.name;this.transports.push(a),this._transportsByName[a]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=lw(this.opts.query)),ed&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Fl.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Vg,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Er.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",Er.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const a=this.writeBuffer[r].data;if(a&&(t+=sw(a)),r>0&&t>this._maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Wl(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,a){if(typeof t=="function"&&(a=t,t=void 0),typeof r=="function"&&(a=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const l={type:e,data:t,options:r};this.emitReserved("packetCreate",l),this.writeBuffer.push(l),a&&this.once("flush",a),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Er.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ed&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Fl.indexOf(this._offlineEventListener);r!==-1&&Fl.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}Er.protocol=Vg;class ww extends Er{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),r=!1;Er.priorWebsocketSuccess=!1;const a=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",v=>{if(!r)if(v.type==="pong"&&v.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Er.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(_(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=t.name,this.emitReserved("upgradeError",y)}}))};function l(){r||(r=!0,_(),t.close(),t=null)}const c=v=>{const y=new Error("probe error: "+v);y.transport=t.name,l(),this.emitReserved("upgradeError",y)};function d(){c("transport closed")}function p(){c("socket closed")}function m(v){t&&v.name!==t.name&&l()}const _=()=>{t.removeListener("open",a),t.removeListener("error",c),t.removeListener("close",d),this.off("close",p),this.off("upgrading",m)};t.once("open",a),t.once("error",c),t.once("close",d),this.once("close",p),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}}let Tw=class extends ww{constructor(e,t={}){const r=typeof e=="object"?e:t;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(a=>yw[a]).filter(a=>!!a)),super(e,r)}};function Aw(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=Qf(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const l=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+l+":"+r.port+e,r.href=r.protocol+"://"+l+(t&&t.port===r.port?"":":"+r.port),r}const Rw=typeof ArrayBuffer=="function",Cw=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,qg=Object.prototype.toString,bw=typeof Blob=="function"||typeof Blob<"u"&&qg.call(Blob)==="[object BlobConstructor]",Pw=typeof File=="function"||typeof File<"u"&&qg.call(File)==="[object FileConstructor]";function Md(s){return Rw&&(s instanceof ArrayBuffer||Cw(s))||bw&&s instanceof Blob||Pw&&s instanceof File}function Ol(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(Ol(s[t]))return!0;return!1}if(Md(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Ol(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&Ol(s[t]))return!0;return!1}function Lw(s){const e=[],t=s.data,r=s;return r.data=td(t,e),r.attachments=e.length,{packet:r,buffers:e}}function td(s,e){if(!s)return s;if(Md(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let r=0;r<s.length;r++)t[r]=td(s[r],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=td(s[r],e));return t}return s}function Dw(s,e){return s.data=nd(s.data,e),delete s.attachments,s}function nd(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=nd(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=nd(s[t],e));return s}const Nw=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var xt;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(xt||(xt={}));class Uw{constructor(e){this.replacer=e}encode(e){return(e.type===xt.EVENT||e.type===xt.ACK)&&Ol(e)?this.encodeAsBinary({type:e.type===xt.EVENT?xt.BINARY_EVENT:xt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===xt.BINARY_EVENT||e.type===xt.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Lw(e),r=this.encodeAsString(t.packet),a=t.buffers;return a.unshift(r),a}}class wd extends Jt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===xt.BINARY_EVENT;r||t.type===xt.BINARY_ACK?(t.type=r?xt.EVENT:xt.ACK,this.reconstructor=new Iw(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Md(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(xt[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===xt.BINARY_EVENT||r.type===xt.BINARY_ACK){const l=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const c=e.substring(l,t);if(c!=Number(c)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const d=Number(c);if(!Fw(d)||d<0)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=d}if(e.charAt(t+1)==="/"){const l=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(l,t)}else r.nsp="/";const a=e.charAt(t+1);if(a!==""&&Number(a)==a){const l=t+1;for(;++t;){const c=e.charAt(t);if(c==null||Number(c)!=c){--t;break}if(t===e.length)break}r.id=Number(e.substring(l,t+1))}if(e.charAt(++t)){const l=this.tryParse(e.substr(t));if(wd.isPayloadValid(r.type,l))r.data=l;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case xt.CONNECT:return rg(t);case xt.DISCONNECT:return t===void 0;case xt.CONNECT_ERROR:return typeof t=="string"||rg(t);case xt.EVENT:case xt.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Nw.indexOf(t[0])===-1);case xt.ACK:case xt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Iw{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Dw(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Fw=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function rg(s){return Object.prototype.toString.call(s)==="[object Object]"}const Ow=Object.freeze(Object.defineProperty({__proto__:null,Decoder:wd,Encoder:Uw,get PacketType(){return xt}},Symbol.toStringTag,{value:"Module"}));function fi(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const kw=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Yg extends Jt{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[fi(e,"open",this.onopen.bind(this)),fi(e,"packet",this.onpacket.bind(this)),fi(e,"error",this.onerror.bind(this)),fi(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var r,a,l;if(kw.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const c={type:xt.EVENT,data:t};if(c.options={},c.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const _=this.ids++,v=t.pop();this._registerAckCallback(_,v),c.id=_}const d=(a=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||a===void 0?void 0:a.writable,p=this.connected&&!(!((l=this.io.engine)===null||l===void 0)&&l._hasPingExpired());return this.flags.volatile&&!d||(p?(this.notifyOutgoingListeners(c),this.packet(c)):this.sendBuffer.push(c)),this.flags={},this}_registerAckCallback(e,t){var r;const a=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(a===void 0){this.acks[e]=t;return}const l=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===e&&this.sendBuffer.splice(d,1);t.call(this,new Error("operation has timed out"))},a),c=(...d)=>{this.io.clearTimeoutFn(l),t.apply(this,d)};c.withError=!0,this.acks[e]=c}emitWithAck(e,...t){return new Promise((r,a)=>{const l=(c,d)=>c?a(c):r(d);l.withError=!0,t.push(l),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((a,...l)=>(this._queue[0],a!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(a)):(this._queue.shift(),t&&t(null,...l)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:xt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case xt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case xt.EVENT:case xt.BINARY_EVENT:this.onevent(e);break;case xt.ACK:case xt.BINARY_ACK:this.onack(e);break;case xt.DISCONNECT:this.ondisconnect();break;case xt.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...a){r||(r=!0,t.packet({type:xt.ACK,id:e,data:a}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:xt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function Zs(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}Zs.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};Zs.prototype.reset=function(){this.attempts=0};Zs.prototype.setMin=function(s){this.ms=s};Zs.prototype.setMax=function(s){this.max=s};Zs.prototype.setJitter=function(s){this.jitter=s};class id extends Jt{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Xl(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Zs({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const a=t.parser||Ow;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Tw(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const a=fi(t,"open",function(){r.onopen(),e&&e()}),l=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),e?e(d):this.maybeReconnectOnOpen()},c=fi(t,"error",l);if(this._timeout!==!1){const d=this._timeout,p=this.setTimeoutFn(()=>{a(),l(new Error("timeout")),t.close()},d);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(a),this.subs.push(c),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(fi(e,"ping",this.onping.bind(this)),fi(e,"data",this.ondata.bind(this)),fi(e,"error",this.onerror.bind(this)),fi(e,"close",this.onclose.bind(this)),fi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Wl(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Yg(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(a=>{a?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",a)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const ko={};function kl(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=Aw(s,e.path||"/socket.io"),r=t.source,a=t.id,l=t.path,c=ko[a]&&l in ko[a].nsps,d=e.forceNew||e["force new connection"]||e.multiplex===!1||c;let p;return d?p=new id(r,e):(ko[a]||(ko[a]=new id(r,e)),p=ko[a]),t.query&&!e.query&&(e.query=t.queryKey),p.socket(t.path,e)}Object.assign(kl,{Manager:id,Socket:Yg,io:kl,connect:kl});const Bw={gold_ore:"Gold Ore",oxygen_refill:"Oxygen Refill"};function zw(){const s=At.useRef(null),e=At.useRef(null),[t,r]=At.useState(!1),[a,l]=At.useState(""),[c,d]=At.useState({}),[p,m]=At.useState([]),[_,v]=At.useState(null),[y,S]=At.useState(null),[A,R]=At.useState(100),[x,g]=At.useState(100),[D,P]=At.useState(0),[T,B]=At.useState([]),[O,k]=At.useState(10),[G,b]=At.useState(!1),[C,I]=At.useState(!1),[se,ie]=At.useState(""),[oe,fe]=At.useState(!1),ne=At.useRef({forward:!1,backward:!1,left:!1,right:!1,crouch:!1,mine:!1}),ue=At.useRef(0),V=At.useRef(null),le=At.useRef(null),re=At.useRef(null);At.useRef(null);const U=At.useRef(new Map),Q=At.useRef(new Map),Ve=At.useRef([]);At.useEffect(()=>{if(!s.current)return;const ye=new Z0;ye.background=new Rt(1710638),ye.fog=new pd(1710638,10,80),V.current=ye;const Ie=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3);Ie.position.set(0,2,0),le.current=Ie;const Re=new XM({canvas:s.current,antialias:!0});Re.setSize(window.innerWidth,window.innerHeight),Re.shadowMap.enabled=!0,re.current=Re;const F=new ay(4210752,.5);ye.add(F);const ht=new sy(16755200,1,50);ht.position.set(0,10,0),ht.castShadow=!0,ye.add(ht);const Ye=new Ko(200,200),st=new Ml({color:2960685,roughness:.9}),Ne=new Gn(Ye,st);Ne.rotation.x=-Math.PI/2,Ne.receiveShadow=!0,ye.add(Ne);let yt;const Be=()=>{yt=requestAnimationFrame(Be);const Ct=c[a];Ct&&!Ct.isDead&&(Ie.position.x=Ct.position.x,Ie.position.z=Ct.position.z,Ie.position.y=Ct.isCrouching?1:1.8,Ie.rotation.y=-Ct.rotation),Re.render(ye,Ie)};Be();const lt=()=>{Ie.aspect=window.innerWidth/window.innerHeight,Ie.updateProjectionMatrix(),Re.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",lt),()=>{cancelAnimationFrame(yt),window.removeEventListener("resize",lt),Re.dispose()}},[a,c]),At.useEffect(()=>{const Ie=kl(window.location.hostname!=="localhost"?`https://${window.location.hostname}`:"http://localhost:3001");return e.current=Ie,Ie.on("connect",()=>{r(!0)}),Ie.on("init",Re=>{l(Re.playerId),S(Re.config),v(Re.cave),R(Re.player.health),g(Re.player.oxygen),P(Re.player.money),B(Re.player.backpack||[]),k(Re.shop.oxygenRefills),V.current&&Re.cave&&ze(Re.cave)}),Ie.on("gameState",Re=>{d(Re.players),m(Re.monsters),k(Re.shop.oxygenRefills),Re.players[a]&&(R(Re.players[a].health),g(Re.players[a].oxygen),P(Re.players[a].money))}),Ie.on("message",Re=>{ie(Re),setTimeout(()=>ie(""),3e3)}),Ie.on("moneyUpdate",Re=>{P(Re.money)}),Ie.on("shopUpdate",Re=>{k(Re.oxygenRefills)}),Ie.on("oreMined",Re=>{const F=U.current.get(Re.oreId);F&&V.current&&(V.current.remove(F),U.current.delete(Re.oreId))}),Ie.on("death",Re=>{fe(!0),ie(Re.message)}),()=>{Ie.disconnect()}},[a]);const ze=ye=>{if(!V.current)return;const Ie=new _d(.5),Re=new Ml({color:16766720,metalness:.8,roughness:.2,emissive:16753920,emissiveIntensity:.3});ye.ores.forEach(st=>{if(st.mined)return;const Ne=new Gn(Ie,Re);Ne.position.set(st.position.x,.5,st.position.z),Ne.castShadow=!0,V.current.add(Ne),U.current.set(st.id,Ne)});const F=new Ml({color:4868682,roughness:.9});ye.walls.forEach(st=>{const Ne=new $s(st.width,3,st.depth),yt=new Gn(Ne,F);yt.position.set(st.x,1.5,st.z),yt.castShadow=!0,yt.receiveShadow=!0,V.current.add(yt),Ve.current.push(yt)});const ht=new vd(1,16,16),Ye=new Ml({color:16711680,emissive:4456448,emissiveIntensity:.5});for(let st=0;st<5;st++){const Ne=new Gn(ht,Ye);Ne.position.set((Math.random()-.5)*60,1,(Math.random()-.5)*60),Ne.castShadow=!0,V.current.add(Ne),Q.current.set(`monster_${st}`,Ne)}};At.useEffect(()=>{_&&_.ores.forEach(ye=>{const Ie=U.current.get(ye.id);Ie&&(Ie.visible=!ye.mined)})},[_]),At.useEffect(()=>{p.forEach(ye=>{const Ie=Q.current.get(ye.id);if(Ie){Ie.position.set(ye.position.x,1,ye.position.z);const Re=Ie.material;ye.state==="chasing"?(Re.color.setHex(16711680),Re.emissiveIntensity=.8):(Re.color.setHex(8912896),Re.emissiveIntensity=.3)}})},[p]),At.useEffect(()=>{const ye=ht=>{if(!oe){switch(ht.key.toLowerCase()){case"w":ne.current.forward=!0;break;case"s":ne.current.backward=!0;break;case"a":ne.current.left=!0;break;case"d":ne.current.right=!0;break;case"c":ne.current.crouch=!0;break;case"o":ne.current.mine=!0;break;case"b":I(Ye=>!Ye);break;case"k":b(Ye=>!Ye);break}Z()}},Ie=ht=>{switch(ht.key.toLowerCase()){case"w":ne.current.forward=!1;break;case"s":ne.current.backward=!1;break;case"a":ne.current.left=!1;break;case"d":ne.current.right=!1;break;case"c":ne.current.crouch=!1;break;case"o":ne.current.mine=!1;break}Z()},Re=ht=>{document.pointerLockElement&&(ue.current+=ht.movementX*.002,Z())},F=()=>{oe||s.current?.requestPointerLock()};return window.addEventListener("keydown",ye),window.addEventListener("keyup",Ie),window.addEventListener("mousemove",Re),s.current?.addEventListener("click",F),()=>{window.removeEventListener("keydown",ye),window.removeEventListener("keyup",Ie),window.removeEventListener("mousemove",Re),s.current?.removeEventListener("click",F)}},[oe]);const Z=At.useCallback(()=>{!e.current||oe||(e.current.emit("input",{...ne.current,rotation:ue.current}),ne.current.mine&&e.current.emit("mine"))},[oe]),pe=ye=>{e.current?.emit("dropItem",ye)},he=ye=>{e.current?.emit("useItem",ye)},Ce=ye=>{e.current?.emit("sellOre",ye)},Pe=()=>{e.current?.emit("buyOxygenRefill")};return Ge.jsxs("div",{className:"relative w-full h-screen overflow-hidden","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDQ5OjQ","data-yw-s":!0,children:[Ge.jsx("canvas",{ref:s,className:"block","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDUxOjY","data-yw-s":!0}),!t&&Ge.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDU1Ojg","data-yw-s":!0,children:Ge.jsx("div",{className:"text-white text-2xl","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDU2OjEw","data-yw-t":!0,"data-yw-s":!0,children:"Connecting to server..."})}),oe&&Ge.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-red-900/90","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDYyOjg","data-yw-s":!0,children:[Ge.jsx("h1",{className:"text-5xl font-bold text-white mb-4","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDYzOjEw","data-yw-t":!0,"data-yw-s":!0,children:"YOU DIED"}),Ge.jsx("p",{className:"text-xl text-white/80","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDY0OjEw","data-yw-s":!0,children:se}),Ge.jsx("p",{className:"text-lg text-white/60 mt-4","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDY1OjEw","data-yw-t":!0,"data-yw-s":!0,children:"Refresh to respawn"})]}),Ge.jsxs("div",{className:"absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDcwOjY","data-yw-s":!0,children:[Ge.jsxs("div",{className:"flex flex-col gap-2","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDcyOjg","data-yw-s":!0,children:[Ge.jsxs("div",{className:"bg-black/60 rounded-lg p-3 min-w-[200px]","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDczOjEw","data-yw-s":!0,children:[Ge.jsx("div",{className:"text-white text-sm mb-1","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDc0OjEy","data-yw-t":!0,"data-yw-s":!0,children:"Health"}),Ge.jsx("div",{className:"h-4 bg-gray-700 rounded overflow-hidden","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDc1OjEy","data-yw-s":!0,children:Ge.jsx("div",{className:"h-full bg-red-500 transition-all duration-300",style:{width:`${A}%`},"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDc2OjE0"})})]}),Ge.jsxs("div",{className:"bg-black/60 rounded-lg p-3 min-w-[200px]","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDgyOjEw","data-yw-s":!0,children:[Ge.jsx("div",{className:"text-white text-sm mb-1","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDgzOjEy","data-yw-t":!0,"data-yw-s":!0,children:"Oxygen"}),Ge.jsx("div",{className:"h-4 bg-gray-700 rounded overflow-hidden","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDg0OjEy","data-yw-s":!0,children:Ge.jsx("div",{className:"h-full bg-blue-500 transition-all duration-300",style:{width:`${x}%`},"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDg1OjE0"})})]})]}),Ge.jsx("div",{className:"bg-black/60 rounded-lg p-3","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDk0Ojg","data-yw-s":!0,children:Ge.jsxs("div",{className:"text-yellow-400 text-xl font-bold","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDk1OjEw","data-yw-s":!0,children:[Ge.jsx("span",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDk1OjYx","data-yw-t":!0,"data-yw-auto":!0,children:"$"}),D]})}),Ge.jsxs("div",{className:"bg-black/60 rounded-lg p-3 text-white text-sm","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANDk5Ojg","data-yw-s":!0,children:[Ge.jsx("div",{className:"font-bold mb-2","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTAwOjEw","data-yw-t":!0,"data-yw-s":!0,children:"Controls"}),Ge.jsx("div",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTAxOjEw","data-yw-t":!0,"data-yw-s":!0,children:"WASD - Move"}),Ge.jsx("div",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTAyOjEw","data-yw-t":!0,"data-yw-s":!0,children:"C - Crouch (stealth)"}),Ge.jsx("div",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTAzOjEw","data-yw-t":!0,"data-yw-s":!0,children:"O - Mine ore"}),Ge.jsx("div",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTA0OjEw","data-yw-t":!0,"data-yw-s":!0,children:"B - Backpack"}),Ge.jsx("div",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTA1OjEw","data-yw-t":!0,"data-yw-s":!0,children:"K - Shop"}),Ge.jsx("div",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTA2OjEw","data-yw-t":!0,"data-yw-s":!0,children:"Click - Lock cursor"})]})]}),se&&Ge.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTEyOjg","data-yw-s":!0,children:Ge.jsx("div",{className:"bg-black/80 text-white px-6 py-3 rounded-lg text-lg animate-pulse","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTEzOjEw","data-yw-s":!0,children:se})}),C&&Ge.jsxs("div",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/95 rounded-lg p-4 w-80","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTIxOjg","data-yw-s":!0,children:[Ge.jsxs("div",{className:"flex justify-between items-center mb-4","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTIyOjEw","data-yw-s":!0,children:[Ge.jsx("h3",{className:"text-white text-xl font-bold","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTIzOjEy","data-yw-t":!0,"data-yw-s":!0,children:"Backpack"}),Ge.jsx("button",{onClick:()=>I(!1),className:"text-gray-400 hover:text-white","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTI0OjEy","data-yw-t":!0,"data-yw-s":!0,children:"✕"})]}),Ge.jsx("div",{className:"grid grid-cols-2 gap-2","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTMxOjEw","data-yw-s":!0,children:Array.from({length:10}).map((ye,Ie)=>Ge.jsx("div",{className:`h-16 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-colors ${T[Ie]?"bg-yellow-900/50 border-yellow-500 hover:bg-yellow-800/50":"bg-gray-800/50 border-gray-600"}`,onClick:()=>T[Ie]&&he(Ie),onContextMenu:Re=>{Re.preventDefault(),T[Ie]&&pe(Ie)},"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTMzOjE0","data-yw-s":!0,children:T[Ie]?Ge.jsxs("div",{className:"text-center","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTQ3OjE4","data-yw-s":!0,children:[Ge.jsx("div",{className:"text-yellow-400 text-xs","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTQ4OjIw","data-yw-s":!0,children:Bw[T[Ie].type]||T[Ie].type}),Ge.jsx("div",{className:"text-gray-400 text-[10px]","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTUxOjIw","data-yw-t":!0,"data-yw-s":!0,children:"Click: Use | Right: Drop"})]}):Ge.jsx("span",{className:"text-gray-500 text-xs","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTU0OjE4","data-yw-t":!0,"data-yw-s":!0,children:"Empty"})},Ie))})]}),G&&Ge.jsxs("div",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/95 rounded-lg p-6 w-96","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTY0Ojg","data-yw-s":!0,children:[Ge.jsxs("div",{className:"flex justify-between items-center mb-4","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTY1OjEw","data-yw-s":!0,children:[Ge.jsx("h3",{className:"text-white text-xl font-bold","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTY2OjEy","data-yw-t":!0,"data-yw-s":!0,children:"Cave Shop"}),Ge.jsx("button",{onClick:()=>b(!1),className:"text-gray-400 hover:text-white","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTY3OjEy","data-yw-t":!0,"data-yw-s":!0,children:"✕"})]}),Ge.jsxs("div",{className:"space-y-4","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTc1OjEw","data-yw-s":!0,children:[Ge.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTc3OjEy","data-yw-s":!0,children:[Ge.jsx("h4",{className:"text-yellow-400 font-bold mb-2","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTc4OjE0","data-yw-t":!0,"data-yw-s":!0,children:"Sell Ore"}),Ge.jsxs("div",{className:"grid grid-cols-2 gap-2 max-h-32 overflow-y-auto","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTc5OjE0","data-yw-s":!0,children:[T.filter(ye=>ye.type==="gold_ore").map((ye,Ie)=>Ge.jsx("button",{onClick:()=>Ce(T.indexOf(ye)),className:"bg-yellow-700 hover:bg-yellow-600 text-white py-2 px-3 rounded text-sm","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTgxOjE4","data-yw-t":!0,"data-yw-s":!0,children:"Sell Gold Ore ($50)"},ye.id)),T.filter(ye=>ye.type==="gold_ore").length===0&&Ge.jsx("p",{className:"text-gray-500 text-sm col-span-2","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTkwOjE4","data-yw-t":!0,"data-yw-s":!0,children:"No gold ore to sell"})]})]}),Ge.jsxs("div",{className:"bg-gray-800/50 rounded-lg p-4","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTk2OjEy","data-yw-s":!0,children:[Ge.jsx("h4",{className:"text-blue-400 font-bold mb-2","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTk3OjE0","data-yw-t":!0,"data-yw-s":!0,children:"Buy Supplies"}),Ge.jsxs("div",{className:"flex justify-between items-center","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTk4OjE0","data-yw-s":!0,children:[Ge.jsx("span",{className:"text-white","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANTk5OjE2","data-yw-t":!0,"data-yw-s":!0,children:"Oxygen Refill"}),Ge.jsxs("div",{className:"flex items-center gap-2","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANjAwOjE2","data-yw-s":!0,children:[Ge.jsxs("span",{className:"text-gray-400 text-sm","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANjAxOjE4","data-yw-s":!0,children:[Ge.jsx("span",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANjAxOjU4","data-yw-t":!0,"data-yw-auto":!0,children:"("}),O,Ge.jsx("span",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANjAxOjc4","data-yw-t":!0,"data-yw-auto":!0,children:" in stock)"})]}),Ge.jsx("button",{onClick:Pe,disabled:D<30||O<=0,className:`py-2 px-4 rounded ${D>=30&&O>0?"bg-blue-600 hover:bg-blue-500 text-white":"bg-gray-600 text-gray-400 cursor-not-allowed"}`,"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANjAyOjE4","data-yw-t":!0,"data-yw-s":!0,children:"Buy ($30)"})]})]})]})]}),Ge.jsx("div",{className:"mt-4 pt-4 border-t border-gray-700","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANjE4OjEw","data-yw-s":!0,children:Ge.jsxs("div",{className:"text-yellow-400 text-lg font-bold","data-yw":"c3JjL2dhbWUvR2FtZS50c3hANjE5OjEy","data-yw-s":!0,children:[Ge.jsx("span",{"data-yw":"c3JjL2dhbWUvR2FtZS50c3hANjE5OjYz","data-yw-t":!0,"data-yw-auto":!0,children:"Your Money: $"}),D]})})]})]})}function Vw(){return Ge.jsx(zw,{})}Iv.createRoot(document.getElementById("root")).render(Ge.jsx(At.StrictMode,{children:Ge.jsx(Vw,{})}));
//# sourceMappingURL=index-XYQaNuvv.js.map
