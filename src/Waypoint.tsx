import React from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
import { useRef } from 'react';
import { useEffect } from 'react';

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

  useEffect(() => {
    if (visible === true && typeof onVisible === 'function') {
      onVisible();
    }
    if (visible === false && typeof onInVisible === 'function') {
      onInVisible();
    }
  }, [visible, onVisible, onInVisible]);

  return <span data-role="waypoint" style={{ fontSize: 0 }} ref={spanRef}></span>;
});

Waypoint.displayName = 'uc-waypoint';

export default Waypoint;
