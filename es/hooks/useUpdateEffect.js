/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var isMounted = useRef(false);
  useEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;