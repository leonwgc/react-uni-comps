import 'intersection-observer';
import { isBrowser } from './dom';

// this is common viewport scope observer with default root margin.

let intersectionObserver;

type Handler = (isIntersecting: boolean) => void;

const handlers = new Map<Element, Handler>();

if (isBrowser) {
  intersectionObserver = new IntersectionObserver(function (entries) {
    for (const entry of entries) {
      const el = entry.target;
      if (handlers.has(el)) {
        handlers.get(el)?.(entry.isIntersecting);
      }
    }
  });
}

/**
 * observe el
 *
 * @param {Element} el
 */
export const observe = (el: Element, action: Handler): void => {
  intersectionObserver.observe?.(el);
  handlers.set(el, action);
};

/**
 * unobserve el
 *
 * @param {Element} el
 */
export const unobserve = (el: Element): void => {
  intersectionObserver.unobserve?.(el);
  handlers.delete(el);
};

export const disconnect = (): void => intersectionObserver.disconnect?.();
