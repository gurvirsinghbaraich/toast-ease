"use strict";"use client";var z=Object.create;var w=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var P=(e,t)=>{for(var o in t)w(e,o,{get:t[o],enumerable:!0})},f=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of S(t))!E.call(e,a)&&a!==o&&w(e,a,{get:()=>t[a],enumerable:!(r=I(t,a))||r.enumerable});return e};var j=(e,t,o)=>(o=e!=null?z(C(e)):{},f(t||!e||!e.__esModule?w(o,"default",{value:e,enumerable:!0}):o,e)),N=e=>f(w({},"__esModule",{value:!0}),e);var F={};P(F,{ToastBox:()=>B,ToastItem:()=>x,toast:()=>g});module.exports=N(F);var i=j(require("react"));var h=require("nanoid");var u=class{get globalToasts(){return this.toasts}constructor(){this.toasts=[],this.subscribers=[]}subscribe(t){this.subscribers.push(t)}createToast(t,o){let{description:r,title:a}=t,s={id:(0,h.nanoid)(),dismisable:!1,title:a,indicator:o,description:r,duration:1/0};this.toasts=[s,...this.toasts],this.subscribers.forEach(c=>{c(s)})}},b=new u,p=(e="info")=>t=>b.createToast(t,e),g=Object.assign(p(),{info:p("info"),warn:p("warn"),error:p("error"),success:p("success")});function m(e,{insertAt:t}={}){if(!e||typeof document=="undefined")return;let o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}m(`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.\\!toast{--animation-duration: 3s !important}.toast{--animation-duration: 3s}.\\!toast,.toast{margin-left:auto;margin-top:.5rem;width:100%;max-width:20rem;border-radius:.25rem;border-width:1px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.75rem}.\\!toast{animation-name:toastAnimation!important;animation-fill-mode:forwards!important;animation-timing-function:ease-in-out!important;animation-duration:var(--animation-duration)!important}.toast{animation-name:toastAnimation;animation-fill-mode:forwards;animation-timing-function:ease-in-out;animation-duration:var(--animation-duration)}@keyframes toastAnimation{0%{opacity:0;max-height:.75rem}5%{opacity:1;max-height:100px}}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.z-\\[999\\]{z-index:999}.h-screen{height:100vh}.w-screen{width:100vw}.overflow-hidden{overflow:hidden}.bg-transparent{background-color:transparent}.p-4{padding:1rem}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}
`);var A=4,y=2,x=function(e){let t=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(!t.current)return;let{height:o}=t.current.getBoundingClientRect();t.current.style.setProperty("--toast-height",`${Number(o)*2}px`)},[t]),i.default.createElement("li",{ref:t,className:"toast"},e.title)},B=function(e){let{duration:t=y,toastsVisible:o=A}=e,r=typeof window!="undefined"?window:void 0,[a,s]=(0,i.useState)([]),[c,v]=(0,i.useState)(!1);(0,i.useEffect)(function(){v(!0)},[]),(0,i.useEffect)(function(){c&&s(typeof r!="undefined"?typeof r.toasts!="undefined"?r.toasts:[]:[])},[c]),(0,i.useEffect)(function(){c&&b.subscribe(n=>{s(d=>[n,...d])})},[c]),(0,i.useEffect)(function(){console.log(a),a.forEach(n=>{(n.duration===1/0||!n.dismisable)&&(k(n),setTimeout(()=>{T(n)},t*1e3))})},[a]);let k=n=>{s(d=>d.map(l=>l.id===n.id?{...l,dismisable:!0,duration:y}:l))},T=n=>{s(d=>d.filter(l=>l.id!==n.id))};return i.default.createElement("section",{className:"absolute w-screen h-screen bg-transparent overflow-hidden top-0 left-0 bottom-0 right-0 z-[999] pointer-events-none"},i.default.createElement("div",{className:"relative w-screen h-screen"},i.default.createElement("ol",{className:"absolute bottom-0 right-0 p-4"},a.slice(0,o).map(n=>i.default.createElement(x,{...n,key:n.id})))))};0&&(module.exports={ToastBox,ToastItem,toast});
//# sourceMappingURL=toast.js.map