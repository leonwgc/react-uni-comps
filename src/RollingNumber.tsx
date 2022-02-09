import React from 'react';
import clsx from 'clsx';
import { useSpring, animated, config } from '@react-spring/web';

type Props = {
  /** 滚动数字 */
  number: number;
  /** 延迟开始时间,默认200ms */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

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
