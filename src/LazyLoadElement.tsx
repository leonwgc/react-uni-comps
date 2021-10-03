import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import useInViewport from './hooks/useInViewport';

type Props = {
  /** 需要lazyload的组件 */
  children: React.ReactElement;
  /** placeholder 宽度 */
  width?: string | number;
  /** placeholder 高度 */
  height?: string | number;
  style?: React.CSSProperties;
};

/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
const LazyLoadElement = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { width, height, style, children, ...rest } = props;
  const elRef = useRef();
  const isInViewport = useInViewport(elRef);
  const [ready, setReady] = useState(false);

  useImperativeHandle(ref, () => elRef.current);

  useEffect(() => {
    if (isInViewport && !ready) {
      setReady(true);
    }
  }, [isInViewport, ready]);

  const newStyle = !ready
    ? {
        display: 'inline-block',
        width,
        height,
        ...style,
      }
    : style;

  return !ready ? (
    <span {...rest} ref={elRef} style={newStyle} />
  ) : (
    React.cloneElement(children, {
      ref: elRef,
    })
  );
});

LazyLoadElement.displayName = 'UC-LazyLoadElement';

export default LazyLoadElement;
