import { RefObject } from 'react';
/**
 *  observe el's visibility & do sth then unobserve el
 *
 * @param {RefObject<HTMLElement>} elRef
 * @param {(v: boolean) => void} setVisible
 */
declare const useVisibleObserve: (elRef: RefObject<HTMLElement>, setVisible: (v: boolean) => void) => void;
export default useVisibleObserve;
