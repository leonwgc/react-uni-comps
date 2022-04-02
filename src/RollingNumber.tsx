import React from 'react';
import clsx from 'clsx';
import { useSpring, animated, config } from '@react-spring/web';
import type { BaseProps } from './types';

type Props = {
  /** 滚动数字 */
  number: number;
  /** 延迟开始时间
   *
   * @default 200
   */
  delay?: number;
} & BaseProps;

/** 滚动数字 */
const RollingNumber = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { number, delay = 200, className, ...rest } = props;

  const spring = useSpring({
    from: { number: 0 },
    number,
    delay,
    config: config.molasses,
  });

  return (
    <animated.span {...rest} ref={ref} className={clsx('uc-rolling-number', className)}>
      {spring.number.to((n) => ~~n)}
    </animated.span>
  );
});

RollingNumber.displayName = 'UC-RollingNumber';

export default RollingNumber;
