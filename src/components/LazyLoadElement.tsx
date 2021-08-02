import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

export type Props = {
  children: React.ReactElement;
  width?: string | number;
  height?: string | number;
  [p: string]: any;
};

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
