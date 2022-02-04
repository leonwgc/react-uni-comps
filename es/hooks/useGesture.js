/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import FingerGesture, { supportedGestures } from '../FingerGesture';
import { getProps } from '../helper';
import useUnmount from './useUnmount';

var useGesture = function useGesture(elRef, option) {
  var fgRef = useRef();
  useEffect(function () {
    if (elRef.current instanceof Element) {
      var gestureProps = getProps(option, supportedGestures);
      fgRef.current = new FingerGesture(elRef.current, gestureProps);
    }
  }, [option]);
  useUnmount(function () {
    if (fgRef.current) {
      fgRef.current.destroy();
    }
  });
};

export default useGesture;