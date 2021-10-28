import { RefObject, useEffect, useState } from 'react';
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
function useInViewport(
  ref: RefObject<HTMLElement>,
  rootRef = null,
  options?: {
    rootMargin?: string;
    threshold?: number | number[];
  }
): boolean {
  const [inViewPort, setInViewport] = useState<boolean>();

  useEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line no-undef
      const opt = { ...options } as IntersectionObserverInit;
      if (rootRef) {
        opt.root = rootRef.current;
      }
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      }, opt);

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return inViewPort;
}

export default useInViewport;
