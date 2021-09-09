import React, { useRef, useImperativeHandle } from 'react';
import { Transition } from 'react-transition-group';
import useInViewport from 'react-use-lib/es/useInViewport';
import useUpdateEffect from 'react-use-lib/es/useUpdateEffect';
import clsx from 'clsx';

type Props = {
  /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
  children: React.ReactElement;
  /** from到to动画执行的时间,单位ms,默认240ms */
  duration?: number;
  /** transition动画开始执行的类名，默认会给元素加上from class,可以自定义类名 */
  fromClass?: 'from';
  /** transition动画执行结束的类名，默认会给元素加上to class,可以自定义类名 */
  toClass?: 'to';
  /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/
  once?: boolean;
};

const getClassName = (state, c, fromClass = 'from', toClass = 'to') => {
  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return c ? fromClass : toClass; //exited
  }
};

/** 子元素执行从from到to类名过渡(过渡时间由duration定义),给子元素定义transition应用过渡 */
const TransitionElement = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, duration = 240, once = true, fromClass = 'from', toClass = 'to' } = props;
  const childrenRef = useRef();
  const lsRef = useRef(true);
  const isInViewport = useInViewport(childrenRef);

  useImperativeHandle(ref, () => childrenRef.current);

  useUpdateEffect(() => {
    lsRef.current = !once;
  }, [isInViewport, once]);

  const count = React.Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement:只能包含一个子元素.');
  }

  if (React.isValidElement(children)) {
    return (
      <Transition in={isInViewport && lsRef.current} appear timeout={duration}>
        {(state) =>
          React.cloneElement(children, {
            ref: childrenRef,
            className: clsx(
              children.props?.className,
              getClassName(state, lsRef.current, fromClass, toClass)
            ),
            style: {
              ...children.props?.style,
              transitionDuration: duration + 'ms',
            },
          })
        }
      </Transition>
    );
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('TransitionElement:子元素必须为ReactElement');
    }
    return children;
  }
});

TransitionElement.displayName = 'UC-TransitionElement';

export default TransitionElement;
