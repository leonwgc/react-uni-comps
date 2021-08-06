import React, { useRef } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

export type Props = {
  children: React.ReactElement /** 应用animation动画的元素 */;
  duration?: number /** animation动画的持续时间 */;
  name: string /** animation动画 keyframe name */;
  timingFunc?: string /** animation动画 animation-timing-function*/;
  direction?: string /** animation动画 animation-direction */;
  delay?: number /** animation动画animation-delay*/;
  fillMode?: string /** animation动画animation-fill-mode */;
  iterationCount?: string | number /** animation动画 animation-iteration-count */;
};

/** 子元素进入视口应用animation动画,不在视口则停止动画 */
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

  const count = React.Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement can have only one children');
  }

  const { type } = children;

  if (typeof type === 'string') {
    return React.cloneElement(children, {
      ref,
      style: newStyle,
    });
  } else {
    return (
      <span ref={ref}>
        {React.cloneElement(children, {
          style: newStyle,
        })}
      </span>
    );
  }
};

export default AnimationElement;
