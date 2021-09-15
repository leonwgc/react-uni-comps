import React, { useRef, useImperativeHandle } from 'react';
import useGesture from './hooks/useGesture';
import { Option } from './hooks/FingerGesture';

type Props = {
  children: React.ReactElement;
} & Partial<Option>;

/** 手势操作元素 */
const FingerGestureElement = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, ...rest } = props;
  const elRef = useRef();
  useImperativeHandle(ref, () => elRef.current);
  useGesture(elRef, rest as Option);

  return React.cloneElement(children, {
    ...rest,
    ref: elRef,
  });
});

FingerGestureElement.displayName = 'UC-FingerGestureElement';

export default FingerGestureElement;
