import React, { useRef, useEffect, HTMLAttributes, useImperativeHandle } from 'react';
import useInViewport from './hooks/useInViewport';

type Props = {
  /** 可见回调 */
  onVisible?: (el: HTMLElement) => void;
  /** 不可见回调 */
  onInVisible?: (el: HTMLElement) => void;
} & HTMLAttributes<HTMLSpanElement>;

/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
const Waypoint = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const wpRef = useRef<HTMLElement>();
  const visible = useInViewport(wpRef);
  const { onVisible, onInVisible, ...rest } = props;

  const vv = useRef(onVisible);
  const vi = useRef(onInVisible);

  useEffect(() => {
    vv.current = onVisible;
  }, [onVisible]);

  useEffect(() => {
    vi.current = onInVisible;
  }, [onInVisible]);

  useEffect(() => {
    if (visible === true && typeof vv.current === 'function') {
      vv.current(wpRef.current);
    }
    if (visible === false && typeof vi.current === 'function') {
      vi.current(wpRef.current);
    }
  }, [visible]);

  useImperativeHandle(ref, () => wpRef.current);

  return <span data-role="waypoint" style={{ fontSize: 0 }} ref={wpRef} {...rest}></span>;
});

Waypoint.displayName = 'UC-Waypoint';

export default Waypoint;
