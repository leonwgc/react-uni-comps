import 'intersection-observer';
declare type Handler = (isIntersecting: boolean) => void;
/**
 * 使用IntersectionObserver监视dom元素在文档视口的可见性
 *
 * @param {Element} el 监听dom元素
 * @param {Handler} action 元素isIntersecting状态变化回调
 */
export declare const observe: (el: Element, action: Handler) => void;
/**
 * 取消监视
 *
 * @param {Element} el
 */
export declare const unobserve: (el: Element) => void;
export declare const disconnect: () => void;
export {};
