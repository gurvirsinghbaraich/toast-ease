import{a as i,b as o}from"./chunk-R2SCCU5A.mjs";import s from"isomorphic-dompurify";import e from"react";var n=function(t){if(t)return s.sanitize(t)},m=function(){let t=i.globalToasts.map(r=>({...r,title:n(r.title),description:n(r.description)}));return e.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`
          window.toasts = JSON.parse(\`${JSON.stringify(t)}\`);
        `}})};export{m as ServerToastRegister,o as toast};
//# sourceMappingURL=index.mjs.map