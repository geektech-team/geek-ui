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
