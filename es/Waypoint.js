var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React, { useRef, useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */

var Waypoint = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var innerRef = useRef();
  var spanRef = ref || innerRef;
  var visible = useInViewport(spanRef);

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
      rest = __rest(props, ["onVisible", "onInVisible"]);

  var vv = useRef(onVisible);
  var vi = useRef(onInVisible);
  useEffect(function () {
    if (visible === true && typeof vv.current === 'function') {
      vv.current(spanRef.current);
    }

    if (visible === false && typeof vi.current === 'function') {
      vi.current(spanRef.current);
    }
  }, [visible, spanRef]);
  return /*#__PURE__*/React.createElement("span", __assign({
    "data-role": "waypoint",
    style: {
      fontSize: 0
    },
    ref: spanRef
  }, rest));
});
Waypoint.displayName = 'uc-waypoint';
export default Waypoint;