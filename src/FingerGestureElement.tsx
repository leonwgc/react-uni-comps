import React, { useRef, useImperativeHandle, HTMLAttributes } from 'react';
import useGesture from './hooks/useGesture';
import { Option } from './hooks/FingerGesture';

type Props = {
  children: React.ReactElement;
} & Partial<Option> &
  HTMLAttributes<HTMLElement>;
// TODO: omit rest props from children
/** 手势操作元素, 非手势props透传到子元素 */
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
