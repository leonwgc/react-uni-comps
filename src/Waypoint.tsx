import React from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
import { useRef } from 'react';
import { useEffect } from 'react';

export type Props = {
  onEnter?: (el: HTMLSpanElement) => void;
  onLeave?: (el: HTMLSpanElement) => void;
};

/** waypoint 路标 */
const Waypoint = (props: Props): React.ReactElement => {
  const ref = useRef<HTMLSpanElement>();
  const visible = useInViewport(ref);
  const { onEnter, onLeave } = props;

  useEffect(() => {
    if (visible === true && typeof onEnter === 'function') {
      onEnter(ref.current);
    }
    if (visible === false && typeof onLeave === 'function') {
      onLeave(ref.current);
    }
  }, [visible, onEnter, onLeave]);

  return <span data-role="waypoint" style={{ fontSize: 0 }} ref={ref}></span>;
};

export default Waypoint;
