import React, { useRef, useLayoutEffect } from 'react';
import FingerGesture, { Options } from './FingerGesture';

type Props = {
  /** 手势操作元素,如果是组件，需要forwardRef到dom */
  children: React.ReactElement;
} & Partial<Options>;

const throwCheckError = () => {
  throw new Error('FingerGestureElement: 子元素必须是dom/forwardRef到dom的组件');
};

/** 给子元素添加手势操作 */
const FingerGestureElement: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const elRef = useRef<HTMLElement>();

  useLayoutEffect(() => {
    const el = elRef.current;
    if (!(el instanceof HTMLElement)) {
      throwCheckError();
    }

    const fg = new FingerGesture(el, rest as Options);

    return () => {
      fg.destroy?.();
    };
  }, []);

  if (!React.isValidElement(children)) {
    throwCheckError();
  }

  return React.cloneElement(children, { ref: elRef });
};

FingerGestureElement.displayName = 'UC-FingerGestureElement';

export default FingerGestureElement;
