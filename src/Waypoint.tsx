import React, { useRef, useImperativeHandle, useLayoutEffect } from 'react';
import { observe, unobserve } from './defaultIntersectionObserver';
import clsx from 'clsx';
import useLatest from './hooks/useLatest';

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  /** 可见回调 */
  onVisible?: (el: HTMLElement) => void;
  /** 不可见回调 */
  onInVisible?: (el: HTMLElement) => void;
};

/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
const Waypoint = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const elRef = useRef<HTMLSpanElement>();
  const { onVisible, onInVisible, style, className, ...rest } = props;

  const vv = useLatest(onVisible);
  const vi = useLatest(onInVisible);

  useLayoutEffect(() => {
    observe(elRef.current, (visible) => {
      if (visible) {
        vv.current?.(elRef.current);
      } else {
        vi.current?.(elRef.current);
      }
    });

    return () => {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, [vv, vi]);

  useImperativeHandle(ref, () => elRef.current);

  return (
    <span
      {...rest}
      data-role="waypoint"
      className={clsx('uc-waypoint', className)}
      style={{ fontSize: 0, ...style }}
      ref={elRef}
    ></span>
  );
});

Waypoint.displayName = 'UC-Waypoint';

export default Waypoint;
