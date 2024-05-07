/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { state } from "./state";
// import { ClientToastBox } from "./toast";

export const ToastBox = function () {
  console.log("Toasts", state.globalToasts);
  // return <ClientToastBox toasts={state.globalToasts} />;
  return state.globalToasts.map((t) => <p key={t.id}>{t.title}</p>);
};
