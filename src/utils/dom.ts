import { isString } from './is';

export const querySelector = (selectors: string, container?: Document | HTMLElement) => {
  return (container ?? document).querySelector<HTMLElement>(selectors) ?? undefined;
};

export const getElement = (
  target: string | HTMLElement | undefined,
  container?: Document | HTMLElement,
): HTMLElement | undefined => {
  if (isString(target)) {
    const selector = target[0] === '#' ? `[id='${target.slice(1)}']` : target;
    return querySelector(selector, container);
  }
  return target;
};

export const on = <K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window,
  event: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options: boolean | AddEventListenerOptions = false,
) => {
  element.addEventListener(event, handler as EventListenerOrEventListenerObject, options);
};

export const off = <K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window,
  type: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options: boolean | EventListenerOptions = false,
) => {
  element.removeEventListener(type, handler as EventListenerOrEventListenerObject, options);
};
