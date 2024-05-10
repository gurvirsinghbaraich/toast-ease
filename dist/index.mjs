import{a as o,b as s}from"./chunk-R2SCCU5A.mjs";import t from"react";var n=function(){return t.createElement("section",{className:"absolute w-screen h-screen bg-transparent overflow-hidden top-0 left-0 bottom-0 right-0 z-[999] pointer-events-none"},t.createElement("div",{className:"relative w-screen h-screen"},t.createElement("ol",{className:"absolute bottom-0 right-0 p-4",id:"server-toast-container"},t.createElement("script",{dangerouslySetInnerHTML:{__html:`
                const toastsContainer = document.getElementById("server-toast-container");
                const toasts = JSON.parse(\`${JSON.stringify(o.globalToasts)}\`); 

                toasts.map((toast) => {
                  toastsContainer.innerHTML += \`
                    <li data-toast-key=\${toast.id} className="toast">
                      \${toast.title}
                    </li>
                  \`
                })
              `}}))))};export{n as ToastBox,s as toast};
//# sourceMappingURL=index.mjs.map