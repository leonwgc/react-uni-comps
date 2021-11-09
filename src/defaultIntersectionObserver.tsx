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
 * 使用IntersectionObserver监视dom元素在文档视口的可见性
 *
 * @param {Element} el 监听dom元素
 * @param {Handler} action 元素isIntersecting状态变化回调
 */
export const observe = (el: Element, action: Handler): void => {
  if (el) {
    intersectionObserver.observe?.(el);
    handlers.set(el, action);
  }
};

/**
 * 取消监视
 *
 * @param {Element} el
 */
export const unobserve = (el: Element): void => {
  if (el) {
    intersectionObserver.unobserve?.(el);
    handlers.delete(el);
  }
};

export const disconnect = (): void => intersectionObserver.disconnect?.();
