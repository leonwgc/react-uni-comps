import React, { useRef, useImperativeHandle } from 'react';
import useInViewport from './hooks/useInViewport';

type Props = {
  /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
  children: React.ReactElement;
  /** animation动画的持续时间,默认1s */
  duration?: string;
  /** keyframe name, 默认none无动画 */
  name: string;
  /** animation动画 animation-timing-function,默认 ease */
  timingFunc?: string;
  /** animation动画 animation-direction ，默认 normal*/
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  /** animation动画animation-delay， 默认0s */
  delay?: string;
  /** animation动画animation-fill-mode, 默认 backwards */
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
  /** animation动画 animation-iteration-count,默认1 */
  iterationCount?: 'infinite' | number;
};

/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
const AnimationElement = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const {
    children,
    duration = '1s',
    name = 'none',
    timingFunc = 'ease',
    delay = '0s',
    direction = 'normal',
    iterationCount = 1,
    fillMode = 'backwards',
  } = props;

  const elRef = useRef<HTMLElement>();
  const isInViewport = useInViewport(elRef);
  useImperativeHandle(ref, () => elRef.current);
  const { style = {} } = children?.props || {};

  const newStyle = {
    ...style,
    animation: `${duration} ${timingFunc} ${delay} ${iterationCount} ${direction} ${fillMode} ${
      isInViewport ? 'running' : 'paused'
    } ${name}`,
  };

  const count = React.Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement:只能包含一个子元素.');
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: elRef,
      style: newStyle,
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('AnimationElement:子元素必须为ReactElement');
    }
    return children;
  }
});

AnimationElement.displayName = 'UC-AnimationElement';

export default AnimationElement;
