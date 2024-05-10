import React from "react";
import { state } from "./state";

export const ToastBox = function () {
  return (
    <section className="absolute w-screen h-screen bg-transparent overflow-hidden top-0 left-0 bottom-0 right-0 z-[999] pointer-events-none">
      <div className="relative w-screen h-screen">
        <ol
          className="absolute bottom-0 right-0 p-4"
          id="server-toast-container"
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `
                const toastsContainer = document.getElementById("server-toast-container");
                const toasts = JSON.parse(\`${JSON.stringify(state.globalToasts)}\`); 

                toasts.map((toast) => {
                  toastsContainer.innerHTML += \`
                    <li data-toast-key=\${toast.id} className="toast">
                      \${toast.title}
                    </li>
                  \`
                })
              `,
            }}
          ></script>
        </ol>
      </div>
    </section>
  );
};
export { toast } from "./state";
