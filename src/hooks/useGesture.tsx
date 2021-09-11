/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, MutableRefObject } from 'react';
import FingerGesture, { Option } from './FingerGesture';

const useGesture = (elRef: MutableRefObject<Element>, option: Option): void => {
  useEffect(() => {
    if (elRef.current instanceof Element) {
      const fg = new FingerGesture(elRef.current, option);

      return () => {
        fg.destroy();
      };
    }
  }, []);
};

export default useGesture;
