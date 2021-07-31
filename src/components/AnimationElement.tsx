import React, { useRef, useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

export type Props = {
  children: React.ReactElement;
  duration?: number;
  name: string;
  timingFunc?: string;
  direction?: string;
  delay?: number;
  fillMode?: string;
  iterationCount?: string | number;
};

const AnimationElement: React.FC<Props> = ({
  children,
  duration = 3000,
  name = '',
  timingFunc = 'ease',
  delay = 0,
  direction = 'normal',
  iterationCount = 'infinite',
  fillMode = 'none',
}) => {
  const ref = useRef();
  const isInViewport = useInViewport(ref);
  const { style = {} } = children?.props || {};
  const newStyle = {
    ...style,
    animation: `${duration}ms ${timingFunc} ${delay}ms ${iterationCount} ${direction} ${fillMode} ${
      isInViewport ? 'running' : 'paused'
    } ${name}`,
  };

  return (
    <span ref={ref}>
      {React.cloneElement(children, {
        style: newStyle,
      })}
    </span>
  );
};

export default AnimationElement;
