import React from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
import { useRef } from 'react';
import { useEffect } from 'react';

export type Props = {
  onEnter?: () => void;
  onLeave?: () => void;
};

/** waypoint 路标 */
const Waypoint = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const innerRef = useRef<HTMLElement>();
  const spanRef = ref || innerRef;
  const visible = useInViewport(spanRef);
  const { onEnter, onLeave } = props;

  useEffect(() => {
    if (visible === true && typeof onEnter === 'function') {
      onEnter();
    }
    if (visible === false && typeof onLeave === 'function') {
      onLeave();
    }
  }, [visible, onEnter, onLeave, spanRef]);

  return <span data-role="waypoint" style={{ fontSize: 0 }} ref={spanRef}></span>;
});

Waypoint.displayName = 'uc-waypoint';

export default Waypoint;
