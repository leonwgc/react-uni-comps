import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import useInterval from './hooks/useInterval';
import type { BaseProps } from './types';
import useLatest from './hooks/useLatest';

const getClassName = prefixClassName('uc-countdown');

type Props = {
  /**
   * 倒计时时间
   */
  value: Date;
  /**
   * 倒计时达到触发
   */
  onFinish?: () => void;
  /**
   * 是否返回毫秒
   *
   */
  millisec?: boolean;
  /**
   * 倒计时信息
   *
   */
  children?: (date: {
    day: number;
    hour: number;
    min: number;
    sec: number;
    millisec: number;
  }) => React.ReactNode;
} & BaseProps;

const getCountdown = (value: Date) => {
  if (!value) {
    return { day: 0, hour: 0, min: 0, sec: 0, millisec: 0 };
  }

  const diff = value.getTime() - Date.now();

  if (diff < 0) {
    return { day: 0, hour: 0, min: 0, sec: 0, millisec: 0 };
  }

  const day = Math.floor(diff / 86400000);
  const hour = Math.floor((diff % 86400000) / 3600000);
  const min = Math.floor((diff % 3600000) / 60000);
  const sec = Math.floor((diff % 60000) / 1000);
  const millisecond = Math.floor((diff % 60000) % 1000);

  return { day, hour, min, sec, millisec: millisecond };
};

/**
 * 倒计时
 * @param props
 * @returns
 */
const Countdown = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { millisec, value, onFinish, className, children, ...rest } = props;

  const [date, setDate] = useState(() => getCountdown(value));

  const onFinishRef = useLatest(onFinish);
  const valueRef = useLatest(value);
  const finishedRef = useRef(false);

  useInterval(
    () => {
      if (!valueRef.current || finishedRef.current) {
        return false; // clear timer
      }

      const diff = valueRef.current.getTime() - Date.now();

      if (diff < 0) {
        finishedRef.current = true;
        setDate({ day: 0, hour: 0, min: 0, sec: 0, millisec: 0 });
        onFinishRef.current?.();
        return;
      }
      setDate(getCountdown(valueRef.current));
    },
    millisec ? 1 : 1000
  );

  return (
    <div ref={ref} className={clsx(getClassName(), className)} {...rest}>
      {typeof children === 'function' && children(date)}
    </div>
  );
});

Countdown.displayName = 'Countdown';

export default Countdown;
