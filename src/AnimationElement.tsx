import React, { useRef, useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

export type Props = {
  children: React.ReactElement /** 应用动画的元素 */;
  duration?: string /** animation动画的持续时间,默认1s */;
  name: string /** animation动画 keyframe name, 默认none无动画 */;
  timingFunc?: string /** animation动画 animation-timing-function,默认 ease */;
  direction?:
    | 'normal'
    | 'reverse'
    | 'alternate'
    | 'alternate-reverse' /** animation动画 animation-direction ，默认 normal*/;
  delay?: string /** animation动画animation-delay， 默认0s */;
  fillMode?:
    | 'none'
    | 'forwards'
    | 'backwards'
    | 'both' /** animation动画animation-fill-mode, 默认 backwards */;
  iterationCount?: 'infinite' | number /** animation动画 animation-iteration-count */;
  once?: boolean /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/;
};

/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
const AnimationElement: React.FC<Props> = ({
  children,
  duration = '1s',
  name = 'none',
  timingFunc = 'ease',
  delay = '0s',
  direction = 'normal',
  iterationCount = 1,
  fillMode = 'backwards', //动画将在应用于目标时立即应用第一个关键帧中定义的值
  once = true /** 执行一次，还是每次从不可见到可见状态执行动画,默认执行一次 */,
}) => {
  const ref = useRef();
  const vRef = useRef();
  const isInViewport = useInViewport(ref);
  const { style = {} } = children?.props || {};
  const newStyle = {
    ...style,
    animation: `${duration} ${timingFunc} ${delay} ${iterationCount} ${direction} ${fillMode} running ${name}`,
  };

  useEffect(() => {
    if (ref.current) {
      const dom = ref.current as HTMLElement;
      dom.addEventListener('animationend', () => {
        dom.style.animationName = 'none';
      });
      dom.addEventListener('webkitAnimationEnd', () => {
        dom.style.webkitAnimationName = 'none';
      });
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const dom = ref.current as HTMLElement;
      if (!vRef.current && isInViewport && !once) {
        dom.style.webkitAnimationName = name;
        dom.style.animationName = name;
      }
      vRef.current = isInViewport;
    }
  }, [isInViewport, name, once]);

  const count = React.Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement can have only one ReactElement children');
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      style: newStyle,
    });
  } else {
    return children;
  }
};

export default AnimationElement;
