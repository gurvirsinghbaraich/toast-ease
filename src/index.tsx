import React from "react";
import { state } from "./state";
export const ServerToastRegister = function () {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          window.toasts = JSON.parse(\`${JSON.stringify(state.globalToasts)}\`);
        `,
      }}
    ></script>
  );
};
export { toast } from "./state";
