import React, { useRef, useImperativeHandle } from 'react';
import { observe, unobserve } from './defaultIntersectionObserver';
import clsx from 'clsx';
import useLatest from './hooks/useLatest';
import useIsomorphicLayoutEffect from './hooks/useisomorphicLayoutEffect';

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  /** 可见回调 */
  onVisible?: (el: HTMLElement) => void;
  /** 不可见回调 */
  onInVisible?: (el: HTMLElement) => void;
};

/** 路标,可见性发生变化执行回调 */
const Waypoint = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const elRef = useRef<HTMLSpanElement>();
  const { onVisible, onInVisible, className, ...rest } = props;

  const vv = useLatest(onVisible);
  const vi = useLatest(onInVisible);

  useIsomorphicLayoutEffect(() => {
    observe(elRef.current, (visible) => {
      if (visible) {
        vv.current?.(elRef.current);
      } else {
        vi.current?.(elRef.current);
      }
    });

    return () => {
      if (elRef.current) {
        unobserve(elRef.current);
      }
    };
  }, []);

  useImperativeHandle(ref, () => elRef.current);

  return (
    <span {...rest} className={clsx('uc-waypoint', className)} ref={elRef}>
      {props.children}
    </span>
  );
});

Waypoint.displayName = 'UC-Waypoint';

export default Waypoint;
