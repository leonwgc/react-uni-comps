/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, MutableRefObject, useRef } from 'react';
import FingerGesture, { Option, supportedGestures } from './FingerGesture';
import { getProps } from '../helper';
import useUnmount from './useUnmount';

const useGesture = (elRef: MutableRefObject<Element>, option: Option): void => {
  const fgRef = useRef<any>();

  useEffect(() => {
    if (elRef.current instanceof Element) {
      const gestureProps = getProps(option, supportedGestures);
      fgRef.current = new FingerGesture(elRef.current, gestureProps);
    }
  }, [option]);

  useUnmount(() => {
    if (fgRef.current) {
      fgRef.current.destroy();
    }
  });
};

export default useGesture;
