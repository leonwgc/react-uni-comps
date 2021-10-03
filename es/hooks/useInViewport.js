var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

import { useEffect, useState } from 'react';
import 'intersection-observer';

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