import{nanoid as e}from"nanoid";var r=class{get globalToasts(){return this.toasts}constructor(){this.toasts=[{id:e(),dismisable:!1,duration:1/0,indicator:"info",title:"Server"}],this.subscribers=[]}subscribe(s){this.subscribers.push(s)}createToast(s,a){console.log(s);let{description:n,title:c}=s,o={id:e(),dismisable:!1,title:c,indicator:a,description:n,duration:1/0};this.toasts.push(o),this.subscribers.forEach(b=>{b(o)})}},p=new r,t=(i="info")=>s=>p.createToast(s,i),g=Object.assign(t(),{info:t("info"),warn:t("warn"),error:t("error"),success:t("success")});export{p as a,g as b};
//# sourceMappingURL=chunk-FBPFPRUE.mjs.map