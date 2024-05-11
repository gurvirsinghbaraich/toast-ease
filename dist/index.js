"use strict";var h=Object.create;var n=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var I=(t,s)=>{for(var r in s)n(t,r,{get:s[r],enumerable:!0})},u=(t,s,r,e)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of y(s))!w.call(t,i)&&i!==r&&n(t,i,{get:()=>s[i],enumerable:!(e=x(s,i))||e.enumerable});return t};var b=(t,s,r)=>(r=t!=null?h(S(t)):{},u(s||!t||!t.__esModule?n(r,"default",{value:t,enumerable:!0}):r,t)),O=t=>u(n({},"__esModule",{value:!0}),t);var P={};I(P,{ServerToastRegister:()=>F,toast:()=>f});module.exports=O(P);var m=b(require("isomorphic-dompurify")),T=b(require("react"));var d=require("nanoid");var a=class{get globalToasts(){return this.toasts}constructor(){this.toasts=[],this.subscribers=[]}subscribe(s){this.subscribers.push(s)}createToast(s,r){let{description:e,title:i}=s,p={id:(0,d.nanoid)(),dismisable:!1,title:i,indicator:r,description:e,duration:1/0};this.toasts=[p,...this.toasts],this.subscribers.forEach(g=>{g(p)})}},c=new a,o=(t="info")=>s=>c.createToast(s,t),f=Object.assign(o(),{info:o("info"),warn:o("warn"),error:o("error"),success:o("success")});var l=function(t){if(t)return m.default.sanitize(t)},F=function(){let t=c.globalToasts.map(s=>({...s,title:l(s.title),description:l(s.description)}));return T.default.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`
          window.toasts = JSON.parse(\`${JSON.stringify(t)}\`);
        `}})};0&&(module.exports={ServerToastRegister,toast});
//# sourceMappingURL=index.js.map