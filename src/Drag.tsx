import React, { useRef, useImperativeHandle, MutableRefObject } from 'react';
import useDrag, { Position } from './hooks/useDrag';

type Props = {
  /** drag开始回调 */
  onDragStart?: (e: MouseEvent | TouchEvent, position: Position) => void;
  /** drag结束回调 */
  onDragEnd?: (e: MouseEvent | TouchEvent, position: Position) => void;
  /** 拖拽限制范围 */
  boundRef?: MutableRefObject<HTMLElement>;
  /** 被拖拽元素 */
  children: React.ReactElement;
};
/** 拖拽 */
const Drag = React.forwardRef<HTMLElement, Props>((props: Props, ref) => {
  const { children, boundRef } = props;
  const elRef = useRef<HTMLElement>();

  if (process.env.NODE_ENV !== 'production') {
    if (!React.isValidElement(children)) {
      throw new Error('Drag:子元素必须为ReactElement');
    }
  }

  useDrag(
    elRef,
    boundRef,
    (e: MouseEvent | TouchEvent, position: Position) => {
      props.onDragStart?.(e, position);
    },
    (e: MouseEvent | TouchEvent, position: Position) => {
      props.onDragEnd?.(e, position);
    }
  );

  useImperativeHandle(ref, () => elRef.current);

  return React.cloneElement(children, {
    ref: elRef,
    style: { ...children.props.style, ...{ position: 'absolute' } },
  });
});

Drag.displayName = 'UC-Drag';

export default Drag;
