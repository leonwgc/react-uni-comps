import React, { useRef, useImperativeHandle, useState } from 'react';
import { Transition } from 'react-transition-group';
import useVisibleObserve from './hooks/useVisibleObserve';
import clsx from 'clsx';

type Props = {
  /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
  children: React.ReactElement;
  /** from到to动画执行的时间,单位ms,默认240ms */
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

/** 子元素执行从from到to类名过渡 */
const TransitionElement = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, duration = 240, fromClass = 'from', toClass = 'to' } = props;
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
