import React, { useRef, useLayoutEffect, useImperativeHandle } from 'react';
import FingerGesture, { Options } from './FingerGesture';

type Props = {
  /** 手势操作元素,如果是组件，需要forwardRef到dom */
  children: React.ReactElement;
} & Options;

const throwCheckError = () => {
  throw new Error('FingerGestureElement: 子元素必须是dom/forwardRef到dom的组件');
};

/** 给子元素添加手势操作 */
const FingerGestureElement = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, ...rest } = props;
  const elRef = useRef<HTMLElement>();

  useImperativeHandle(ref, () => elRef.current);

  useLayoutEffect(() => {
    const el = elRef.current;
    if (!(el instanceof HTMLElement)) {
      throwCheckError();
    }

    const fg = new FingerGesture(el, rest as Options);

    return () => {
      fg.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!React.isValidElement(children)) {
    throwCheckError();
  }

  return React.cloneElement(children, { ref: elRef });
});

FingerGestureElement.displayName = 'UC-FingerGestureElement';

export default FingerGestureElement;
