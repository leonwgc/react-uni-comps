import React, { useRef, HTMLAttributes, useImperativeHandle, useLayoutEffect } from 'react';
import useCallbackRef from './hooks/useCallbackRef';
import { observe, unobserve } from './defaultIntersectionObserver';

type Props = {
  /** 可见回调 */
  onVisible?: (el: HTMLElement) => void;
  /** 不可见回调 */
  onInVisible?: (el: HTMLElement) => void;
} & HTMLAttributes<HTMLSpanElement>;

/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
const Waypoint = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const elRef = useRef<HTMLElement>();
  const { onVisible, onInVisible, ...rest } = props;

  const vv = useCallbackRef(onVisible);
  const vi = useCallbackRef(onInVisible);

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
      className="uc-waypoint"
      style={{ fontSize: 0 }}
      ref={elRef}
    ></span>
  );
});

Waypoint.displayName = 'UC-Waypoint';

export default Waypoint;
