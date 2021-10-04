import { RefObject } from 'react';
/**
 *  observe el's visibility ,when it's visible ,do sth then unobserve el
 *
 * @param {RefObject<HTMLElement>} elRef
 * @param {(v: boolean) => void} onVisibleChange
 */
declare const useVisibleObserve: (elRef: RefObject<HTMLElement>, onVisibleChange: (v: boolean) => void) => void;
export default useVisibleObserve;
