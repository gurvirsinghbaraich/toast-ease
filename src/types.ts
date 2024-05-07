/* eslint-disable no-unused-vars */
export enum ToastIndicator {
  info = "info",
  warn = "warn",
  error = "error",
  success = "success",
}

export type ToastInternalProperties =
  | "id"
  | "indicator"
  | "expired"
  | "dismisable"
  | "duration";

export interface Toast {
  id: string;
  dismisable: boolean;
  indicator: ToastIndicator;
  duration: number;

  title?: string;
  description?: string;
}

export type Toasts = Array<Toast>;

export type SubscriberFn = (toast: Toast) => void;
