import React, { useRef, useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

export type Props = {
  onVisible?: () => void /** 可见回调 */;
  onInVisible?: () => void /** 不可见回调 */;
};

/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
const Waypoint = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const innerRef = useRef<HTMLElement>();
  const spanRef = ref || innerRef;
  const visible = useInViewport(spanRef);
  const { onVisible, onInVisible } = props;

  const vv = useRef(onVisible);
  const vi = useRef(onInVisible);

  useEffect(() => {
    if (visible === true && typeof vv.current === 'function') {
      vv.current();
    }
    if (visible === false && typeof vi.current === 'function') {
      vi.current();
    }
  }, [visible]);

  return <span data-role="waypoint" style={{ fontSize: 0 }} ref={spanRef}></span>;
});

Waypoint.displayName = 'uc-waypoint';

export default Waypoint;
