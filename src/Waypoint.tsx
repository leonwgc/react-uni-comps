import React, { useRef, useEffect, HTMLAttributes } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

export type Props = {
  /** 可见回调 */
  onVisible?: (el: HTMLElement) => void;
  /** 不可见回调 */
  onInVisible?: (el: HTMLElement) => void;
} & HTMLAttributes<HTMLSpanElement>;

/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
const Waypoint = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const innerRef = useRef<HTMLElement>();
  const spanRef = ref || innerRef;
  const visible = useInViewport(spanRef);
  const { onVisible, onInVisible, ...rest } = props;

  const vv = useRef(onVisible);
  const vi = useRef(onInVisible);

  useEffect(() => {
    if (visible === true && typeof vv.current === 'function') {
      vv.current(spanRef.current);
    }
    if (visible === false && typeof vi.current === 'function') {
      vi.current(spanRef.current);
    }
  }, [visible, spanRef]);

  return <span data-role="waypoint" style={{ fontSize: 0 }} ref={spanRef} {...rest}></span>;
});

Waypoint.displayName = 'uc-waypoint';

export default Waypoint;
