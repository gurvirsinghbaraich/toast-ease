import{nanoid as b}from"nanoid";var r=class{get globalToasts(){return this.toasts}constructor(){this.toasts=[],this.subscribers=[]}subscribe(s){this.subscribers.push(s)}createToast(s,i){let{description:a,title:n}=s,e={id:b(),dismisable:!1,title:n,indicator:i,description:a,duration:1/0};this.toasts.push(e),this.subscribers.forEach(c=>{c(e)})}},p=new r,t=(o="info")=>s=>p.createToast(s,o),g=Object.assign(t(),{info:t("info"),warn:t("warn"),error:t("error"),success:t("success")});export{p as a,g as b};
//# sourceMappingURL=chunk-LUO63MAU.mjs.map