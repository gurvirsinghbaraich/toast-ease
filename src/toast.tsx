"use client";
import React, { useEffect, useState } from "react";
import { state, toast } from "./state";
import "./tailwind.css";
import { Toast, Toasts } from "./types";

const TOAST_LIFESPAN = 2 * 1000; // 2 seconds (in milliseconds).

const ClientToastBox = function (props: { toasts: Toasts }) {
  console.log(state.globalToasts);
  const [toasts, setToasts] = useState<Toasts>(props.toasts);
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
        setToasts((toasts) => [...toasts, toast]);
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
          }, TOAST_LIFESPAN);
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
        <ol className="absolute bottom-0 right-0">
          {toasts.map((toast) => (
            <div key={toast.id}>{toast.title}</div>
          ))}
        </ol>
      </div>
    </section>
  );
};

export { ClientToastBox, toast };
