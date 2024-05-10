"use strict";var T=Object.create;var n=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var y=(t,s)=>{for(var o in s)n(t,o,{get:s[o],enumerable:!0})},b=(t,s,o,a)=>{if(s&&typeof s=="object"||typeof s=="function")for(let r of h(s))!x.call(t,r)&&r!==o&&n(t,r,{get:()=>s[r],enumerable:!(a=f(s,r))||a.enumerable});return t};var v=(t,s,o)=>(o=t!=null?T(g(t)):{},b(s||!t||!t.__esModule?n(o,"default",{value:t,enumerable:!0}):o,t)),w=t=>b(n({},"__esModule",{value:!0}),t);var S={};y(S,{ToastBox:()=>I,toast:()=>d});module.exports=w(S);var i=v(require("react"));var u=require("nanoid");var c=class{get globalToasts(){return this.toasts}constructor(){this.toasts=[],this.subscribers=[]}subscribe(s){this.subscribers.push(s)}createToast(s,o){let{description:a,title:r}=s,l={id:(0,u.nanoid)(),dismisable:!1,title:r,indicator:o,description:a,duration:1/0};this.toasts=[l,...this.toasts],this.subscribers.forEach(m=>{m(l)})}},p=new c,e=(t="info")=>s=>p.createToast(s,t),d=Object.assign(e(),{info:e("info"),warn:e("warn"),error:e("error"),success:e("success")});var I=function(){return i.default.createElement("section",{className:"absolute w-screen h-screen bg-transparent overflow-hidden top-0 left-0 bottom-0 right-0 z-[999] pointer-events-none"},i.default.createElement("div",{className:"relative w-screen h-screen"},i.default.createElement("ol",{className:"absolute bottom-0 right-0 p-4",id:"server-toast-container"},i.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
                const toastsContainer = document.getElementById("server-toast-container");
                const toasts = JSON.parse(\`${JSON.stringify(p.globalToasts)}\`); 

                toasts.map((toast) => {
                  toastsContainer.innerHTML += \`
                    <li data-toast-key=\${toast.id} className="toast">
                      \${toast.title}
                    </li>
                  \`
                })
              `}}))))};0&&(module.exports={ToastBox,toast});
//# sourceMappingURL=index.js.map