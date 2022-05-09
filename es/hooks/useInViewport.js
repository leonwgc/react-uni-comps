import { __assign } from "tslib";
import { useEffect, useState } from 'react';
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

function useInViewport(ref, rootRef, options) {
  if (rootRef === void 0) {
    rootRef = null;
  }

  var _a = useState(),
      inViewPort = _a[0],
      setInViewport = _a[1];

  useEffect(function () {
    if (ref.current) {
      // eslint-disable-next-line no-undef
      var opt = __assign({}, options);

      if (rootRef) {
        opt.root = rootRef.current;
      }

      var observer_1 = new IntersectionObserver(function (entries) {
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
          var entry = entries_1[_i];

          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      }, opt);
      observer_1.observe(ref.current);
      return function () {
        observer_1.disconnect();
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return inViewPort;
}

export default useInViewport;