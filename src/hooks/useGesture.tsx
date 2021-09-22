/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, MutableRefObject } from 'react';
import FingerGesture, { Option, supportedGestures } from './FingerGesture';
import { getProps } from '../helper';

const useGesture = (elRef: MutableRefObject<Element>, option: Option): void => {
  useEffect(() => {
    if (elRef.current instanceof Element) {
      const gestureProps = getProps(option, supportedGestures);
      const fg = new FingerGesture(elRef.current, gestureProps);

      return () => {
        fg.destroy();
      };
    }
  }, [option]);
};

export default useGesture;
