import { RefObject } from 'react';
import 'intersection-observer';
declare function useInViewport(ref: RefObject<HTMLElement>, rootRef?: any, options?: {
    rootMargin?: string;
    threshold?: number | number[];
}): boolean;
export default useInViewport;
