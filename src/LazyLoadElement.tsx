import React, { useRef, useState, useLayoutEffect, useImperativeHandle } from 'react';
import { observe, unobserve } from './defaultIntersectionObserver';

type Props = {
  /** 需要lazyload的元素 */
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
  const [ready, setReady] = useState(false);

  useImperativeHandle(ref, () => elRef.current);

  useLayoutEffect(() => {
    observe(elRef.current, (visible) => {
      if (visible) {
        setReady(true);
        unobserve(elRef.current);
      }
    });

    return () => {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, []);

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
  ) : React.isValidElement(children) ? (
    React.cloneElement(children, {
      ref: elRef,
    })
  ) : (
    children
  );
});

LazyLoadElement.displayName = 'UC-LazyLoadElement';

export default LazyLoadElement;
