import React, { useRef, useImperativeHandle } from 'react';
import { Transition } from 'react-transition-group';
import useInViewport from 'react-use-lib/es/useInViewport';
import useUpdateEffect from 'react-use-lib/es/useUpdateEffect';

export type Props = {
  children: React.ReactElement /** 应用transition动画的元素 */;
  /** transition动画的时间,单位ms,默认240ms */
  duration?: number;
  // transitionProp?: string /** transition动画prop */;
  // timingFunc?: string /** transition动画的时间函数 */;
  // delay?: number /** transition动画延时时间 ,单位ms*/;
  fromClass?: 'from' /** transition动画开始执行的类名，默认会给元素加上from class,可以自定义类名 */;
  toClass?: 'to' /** transition动画执行结束的类名，默认会给元素加上to class,可以自定义类名 */;
  once?: boolean /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/;
};

const getClassName = (state, c, fromClass = 'from', toClass = 'to') => {
  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return c ? fromClass : toClass; //exited
  }
};

/** 给子元素添加初始加载过渡动画/不可见到可见状态的过渡动画 */
const TransitionElement = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, duration = 240, once = true, fromClass = 'from', toClass = 'to' } = props;
  const childrenRef = useRef();

  useImperativeHandle(ref, () => childrenRef.current);
  const ls = useRef(true);
  const isInViewport = useInViewport(childrenRef);
  const { className = '', style = {} } = children?.props || {};

  // const newStyle = {
  //   ...style,
  //    transition: `${transitionProp} ${duration}ms ${timingFunc} ${delay}ms`,
  // };

  useUpdateEffect(() => {
    ls.current = !once;
  }, [isInViewport, once]);

  const count = React.Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement can have only one children');
  }

  // chidren 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement
  if (React.isValidElement(children)) {
    return (
      <Transition in={isInViewport && ls.current} appear timeout={duration}>
        {(state) =>
          React.cloneElement(children, {
            ref: childrenRef,
            className: `${className} ${getClassName(state, ls.current, fromClass, toClass)}`,
            style,
          })
        }
      </Transition>
    );
  } else {
    // console.warn('TransitionElement:children must be ReactElement');
    return children;
  }
});

TransitionElement.displayName = 'UC-TransitionElement';

export default TransitionElement;
