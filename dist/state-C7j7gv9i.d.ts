declare enum ToastIndicator {
    info = "info",
    warn = "warn",
    error = "error",
    success = "success"
}
type ToastInternalProperties = "id" | "indicator" | "expired" | "dismisable" | "duration";
interface Toast {
    id: string;
    dismisable: boolean;
    indicator: ToastIndicator;
    duration: number;
    title?: string;
    description?: string;
}

declare const toast: ((toast: Omit<Toast, ToastInternalProperties>) => void) & {
    info: (toast: Omit<Toast, ToastInternalProperties>) => void;
    warn: (toast: Omit<Toast, ToastInternalProperties>) => void;
    error: (toast: Omit<Toast, ToastInternalProperties>) => void;
    success: (toast: Omit<Toast, ToastInternalProperties>) => void;
};

export { type Toast as T, toast as t };
