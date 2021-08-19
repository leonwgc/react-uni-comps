import React from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
import { useRef } from 'react';
import { useEffect } from 'react';
/** waypoint 路标 */

var Waypoint = function Waypoint(props) {
  var ref = useRef();
  var visible = useInViewport(ref);
  var onEnter = props.onEnter,
      onLeave = props.onLeave;
  useEffect(function () {
    if (visible === true && typeof onEnter === 'function') {
      onEnter(ref.current);
    }

    if (visible === false && typeof onLeave === 'function') {
      onLeave(ref.current);
    }
  }, [visible, onEnter, onLeave]);
  return /*#__PURE__*/React.createElement("span", {
    "data-role": "waypoint",
    style: {
      fontSize: 0
    },
    ref: ref
  });
};

export default Waypoint;