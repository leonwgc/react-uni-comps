/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import FingerGesture, { supportedGestures } from './FingerGesture';
import { getProps } from '../helper';

var useGesture = function useGesture(elRef, option) {
  useEffect(function () {
    if (elRef.current instanceof Element) {
      var gestureProps = getProps(option, supportedGestures);
      var fg_1 = new FingerGesture(elRef.current, gestureProps);
      return function () {
        fg_1.destroy();
      };
    }
  }, [option]);
};

export default useGesture;