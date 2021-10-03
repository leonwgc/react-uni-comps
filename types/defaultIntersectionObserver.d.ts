import 'intersection-observer';
declare type Handler = (isIntersecting: boolean) => void;
/**
 * observe el
 *
 * @param {Element} el
 */
export declare const observe: (el: Element, action: Handler) => void;
/**
 * unobserve el
 *
 * @param {Element} el
 */
export declare const unobserve: (el: Element) => void;
export declare const disconnect: () => void;
export {};
