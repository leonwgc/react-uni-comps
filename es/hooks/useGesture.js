/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import FingerGesture from './FingerGesture';

var useGesture = function useGesture(elRef, option) {
  useEffect(function () {
    if (elRef.current instanceof Element) {
      var fg_1 = new FingerGesture(elRef.current, option);
      return function () {
        fg_1.destroy();
      };
    }
  }, []);
};

export default useGesture;