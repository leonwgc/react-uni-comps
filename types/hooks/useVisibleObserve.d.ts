import { RefObject } from 'react';
/**
 * 监视元素在文档视口的可见性，可见性变化时触发回调
 *
 * @param {RefObject<HTMLElement>} elRef 监视元素ref
 * @param {(visible: boolean) => void} onVisibleChange 回调
 * @param {boolean} [unobserveWhenVisible=true] 元素可见时取消监控，默认true
 */
declare const useVisibleObserve: (elRef: RefObject<HTMLElement>, onVisibleChange: (visible: boolean) => void, unobserveWhenVisible?: boolean) => void;
export default useVisibleObserve;
