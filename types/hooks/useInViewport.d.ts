import { RefObject } from 'react';
import 'intersection-observer';
/**
 * 监听元素是否在视口内
 *
 * @param {RefObject<HTMLElement>} ref
 * @param {*} [rootRef=null]
 * @param {({
 *     rootMargin?: string;
 *     threshold?: number | number[];
 *   })} [options]
 * @return {*}  {boolean}
 */
declare function useInViewport(ref: RefObject<HTMLElement>, rootRef?: any, options?: {
    rootMargin?: string;
    threshold?: number | number[];
}): boolean;
export default useInViewport;
