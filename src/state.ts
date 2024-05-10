import { nanoid } from "nanoid";
import {
  SubscriberFn,
  Toast,
  ToastIndicator,
  ToastInternalProperties,
  Toasts,
} from "./types";

class Observable {
  private toasts: Toasts;
  private subscribers: Array<SubscriberFn>;

  get globalToasts() {
    return this.toasts;
  }

  public constructor() {
    this.toasts = [];
    this.subscribers = [];
  }

  /**
   * The function allows entities to register a subscriber that
   * allows entities to listen to changes in state.
   */
  public subscribe(subscriberFn: SubscriberFn) {
    this.subscribers.push(subscriberFn);
  }

  /**
   * The function is responsible for notifying the subscriber
   * that a new toast has been added.
   *
   * NOTE: the state is managed by the subscribers and independent of the
   * global state.
   *
   */
  public createToast(
    toast: Omit<Toast, ToastInternalProperties>,
    indicator: ToastIndicator
  ) {
    const { description, title } = toast;

    const toastObject: Toast = {
      id: nanoid(),
      dismisable: false,

      title,
      indicator,
      description,
      duration: Infinity,
    };

    // Adding the toast to the global state.
    this.toasts = [toastObject, ...this.toasts];

    // Notifying the subscribers about the creation of the toast.
    this.subscribers.forEach((subscriber) => {
      subscriber(toastObject);
    });
  }
}
export const state = new Observable();

const basicCreateFn =
  (indicator: ToastIndicator = ToastIndicator.info) =>
  (toast: Omit<Toast, ToastInternalProperties>) =>
    state.createToast(toast, indicator);

export const toast = Object.assign(basicCreateFn(), {
  info: basicCreateFn(ToastIndicator.info),
  warn: basicCreateFn(ToastIndicator.warn),
  error: basicCreateFn(ToastIndicator.error),
  success: basicCreateFn(ToastIndicator.success),
});
