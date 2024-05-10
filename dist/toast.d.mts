import React from 'react';
import { T as Toast } from './state-C7j7gv9i.mjs';
export { t as toast } from './state-C7j7gv9i.mjs';

type ToastItemProps = Toast;
declare const ToastItem: (toast: ToastItemProps) => React.JSX.Element;
type ToastBoxProps = {
    duration: number;
    toastsVisible: number;
};
declare const ToastBox: (props: Partial<ToastBoxProps>) => React.JSX.Element;

export { ToastBox, ToastItem };
