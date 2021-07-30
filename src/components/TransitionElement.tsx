import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import useInViewport from 'react-use-lib/es/useInViewport';
import useUpdateEffect from 'react-use-lib/es/useUpdateEffect';

export type Props = {
  children: React.ReactElement;
  duration?: number;
  timingFunc?: string;
  delay?: number;
  fromClass: 'from'; // 初始class
  toClass: 'to'; // 结束class
  once?: boolean; // 默认从第一次载入/不可见到可见会执行动画 | once=true 只会第一次载入执行动画
};

const getClassName = (state, c, fromClass = 'from', toClass = 'to') => {
  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return c ? fromClass : toClass; //exited
  }
};

// 子元素会分别添加from/to class， from代表初始状态，to代表动画最终状态
const TransitionElement: React.FC<Props> = ({
  children,
  duration = 200,
  timingFunc = 'ease-in-out',
  delay = 0,
  once = false,
  fromClass = 'from',
  toClass = 'to',
}) => {
  const ref = useRef();
  const ls = useRef(true);
  const isInViewport = useInViewport(ref);
  const { className = '', style = {} } = children?.props || {};
  const newStyle = { ...style, transition: `all ${duration}ms ${timingFunc} ${delay}ms` };

  useUpdateEffect(() => {
    if (once) {
      ls.current = false;
    }
  }, [isInViewport, once]);

  return (
    <span ref={ref}>
      <Transition in={isInViewport && ls.current} appear timeout={200}>
        {(state) =>
          React.cloneElement(children, {
            className: `${className} ${getClassName(state, ls.current, fromClass, toClass)}`,
            style: newStyle,
          })
        }
      </Transition>
    </span>
  );
};

export default TransitionElement;
