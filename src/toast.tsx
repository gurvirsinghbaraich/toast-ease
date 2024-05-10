"use client";
import React, { useEffect, useRef, useState } from "react";
import { state, toast } from "./state";
import "./tailwind.css";
import { Toast, Toasts } from "./types";

const TOASTS_VISIBLE = 4; // The variable is used to control the numbers of toasts that would be visible.
const TOAST_LIFESPAN = 2; // 2 seconds

type ToastItemProps = Toast;

const ToastItem = function (toast: ToastItemProps) {
  const toastRef = useRef<HTMLLIElement>(null);

  useEffect(
    function () {
      if (!toastRef.current) return;

      const { height } = toastRef.current.getBoundingClientRect();
      toastRef.current.style.setProperty(
        "--toast-height",
        `${Number(height) * 2}px`
      );
    },
    [toastRef]
  );

  return (
    <li ref={toastRef} className="toast">
      {toast.title}
    </li>
  );
};

type ToastBoxProps = {
  duration: number;
  toastsVisible: number;
};

const ToastBox = function (props: Partial<ToastBoxProps>) {
  const { duration = TOAST_LIFESPAN, toastsVisible = TOASTS_VISIBLE } = props;

  const [toasts, setToasts] = useState<Toasts>(state.globalToasts);
  const [componentMounted, setComponentMounted] = useState<boolean>(false);

  // Once the component is loaded, marking the component has loaded.
  useEffect(function () {
    setComponentMounted(true);
  }, []);

  // Once the component has been loaded, subscribe to the changes in the state.
  useEffect(
    function () {
      if (!componentMounted) return;

      state.subscribe((toast) => {
        // Appending the recently added toast to the list.
        setToasts((toasts) => [toast, ...toasts]);
      });
    },
    [componentMounted]
  );

  // Setting up listeners to remove the toast, after a defined time interval.
  useEffect(
    function () {
      toasts.forEach((toast) => {
        if (toast.duration === Infinity && !toast.dismisable) {
          markToastDismisable(toast);

          setTimeout(() => {
            deleteToast(toast);
          }, duration * 1000);
        }
      });
    },
    [toasts]
  );

  const markToastDismisable = (target: Toast) => {
    setToasts((toasts) =>
      toasts.map((toast) => {
        if (toast.id === target.id) {
          return {
            ...toast,
            dismisable: true,
            duration: TOAST_LIFESPAN,
          };
        }

        return toast;
      })
    );
  };
  const deleteToast = (target: Toast) => {
    setToasts((toasts) =>
      toasts.filter((toast) => {
        if (toast.id !== target.id) {
          return true;
        }

        return false;
      })
    );
  };

  return (
    <section className="absolute w-screen h-screen bg-transparent overflow-hidden top-0 left-0 bottom-0 right-0 z-[999] pointer-events-none">
      <div className="relative w-screen h-screen">
        <ol className="absolute bottom-0 right-0 p-4">
          {toasts.slice(0, toastsVisible).map((toast) => (
            <ToastItem {...toast} key={toast.id} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export { ToastBox, ToastItem, toast };
