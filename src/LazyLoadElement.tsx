import React, { useRef, useState, useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

type Props = {
  children: React.ReactElement /** 需要lazyload的组件 */;
  width?: string | number /** placeholder 宽度 */;
  height?: string | number /** placeholder 高度 */;
  style?: React.CSSProperties /** placeholder 样式 */;
  [p: string]: unknown;
};

/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
const LazyLoadElement: React.FC<Props> = ({ width, height, children, ...props }) => {
  const ref = useRef();
  const isInViewport = useInViewport(ref);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isInViewport && !ready) {
      setReady(true);
    }
  }, [isInViewport, ready]);

  const { style, ...otherProps } = props;

  const newStyle = !ready
    ? {
        display: 'inline-block',
        width,
        height,
        ...style,
      }
    : style;

  return !ready ? (
    <span ref={ref} style={newStyle} {...otherProps} />
  ) : (
    React.Children.only(children)
  );
};

export default LazyLoadElement;
