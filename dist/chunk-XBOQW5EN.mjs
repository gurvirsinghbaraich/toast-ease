var r=class{get globalToasts(){return this.toasts}constructor(){this.toasts=[],this.subscribers=[]}subscribe(s){this.subscribers.push(s)}createToast(s,i){console.log(s);let{description:a,title:n}=s,e={id:nanoid(),dismisable:!1,title:n,indicator:i,description:a,duration:1/0};this.toasts.push(e),this.subscribers.forEach(c=>{c(e)})}},b=new r,t=(o="info")=>s=>b.createToast(s,o),m=Object.assign(t(),{info:t("info"),warn:t("warn"),error:t("error"),success:t("success")});export{b as a,m as b};
//# sourceMappingURL=chunk-XBOQW5EN.mjs.map