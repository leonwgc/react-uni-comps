import React, { useRef, useEffect, useImperativeHandle } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

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
  /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行动画*/
  once?: boolean;
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
    /** 执行一次，还是每次从不可见到可见状态执行动画,默认执行一次 */
    once = true,
  } = props;

  const innerRef = useRef();
  const vRef = useRef();
  const isInViewport = useInViewport(innerRef);
  useImperativeHandle(ref, () => innerRef.current);
  const { style = {} } = children?.props || {};

  const newStyle = {
    ...style,
    animation: `${duration} ${timingFunc} ${delay} ${iterationCount} ${direction} ${fillMode} running ${name}`,
  };

  useEffect(() => {
    if (innerRef.current) {
      const dom = innerRef.current as HTMLElement;
      dom.addEventListener('animationend', () => {
        dom.style.animationName = 'none';
      });
    }
  }, []);

  useEffect(() => {
    if (innerRef.current) {
      const dom = innerRef.current as HTMLElement;
      if (!vRef.current && isInViewport && !once) {
        dom.style.webkitAnimationName = name;
        dom.style.animationName = name;
      }
      vRef.current = isInViewport;
    }
  }, [isInViewport, name, once]);

  const count = React.Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement:只能包含一个子元素.');
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: innerRef,
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
