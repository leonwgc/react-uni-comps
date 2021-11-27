import React, { useRef, useImperativeHandle, useState } from 'react';
import { Transition } from 'react-transition-group';
import useVisibleObserve from './hooks/useVisibleObserve';
import clsx from 'clsx';
import { animationNormal } from './vars';

type Props = {
  /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
  children: React.ReactElement;
  /** 动画时间,默认220ms */
  duration?: number;
  /** transition动画开始执行的类名，默认from */
  fromClass?: string;
  /** transition动画执行结束的类名，默认to*/
  toClass?: string;
};

const getClassName = (state, fromClass = 'from', toClass = 'to') => {
  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return fromClass;
  }
};

/**
 *  子元素执行transition过渡动画
 *  fromClass定义初始状态类名，默认:from
 *  toClass 定义最终状态类名，默认:to
 *  执行时机:
 *  1.初次mount并在可视区域
 *  2.从不可见到可见状态
 */
const TransitionElement = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, duration = animationNormal, fromClass = 'from', toClass = 'to' } = props;
  const elRef = useRef<HTMLElement>();
  const [isInViewport, setIsInViewport] = useState<boolean>();

  useImperativeHandle(ref, () => elRef.current);

  useVisibleObserve(elRef, setIsInViewport);

  const count = React.Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement:只能包含一个子元素.');
  }

  if (React.isValidElement(children)) {
    return (
      <Transition in={isInViewport} timeout={duration}>
        {(state) =>
          React.cloneElement(children, {
            ref: elRef,
            className: clsx(children.props?.className, getClassName(state, fromClass, toClass)),
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
