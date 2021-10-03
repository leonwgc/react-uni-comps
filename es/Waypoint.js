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

import React, { useRef, useEffect, useImperativeHandle } from 'react';
import useInViewport from './hooks/useInViewport';
/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */

var Waypoint = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var wpRef = useRef();
  var visible = useInViewport(wpRef);

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
      rest = __rest(props, ["onVisible", "onInVisible"]);

  var vv = useRef(onVisible);
  var vi = useRef(onInVisible);
  useEffect(function () {
    vv.current = onVisible;
  }, [onVisible]);
  useEffect(function () {
    vi.current = onInVisible;
  }, [onInVisible]);
  useEffect(function () {
    if (visible === true && typeof vv.current === 'function') {
      vv.current(wpRef.current);
    }

    if (visible === false && typeof vi.current === 'function') {
      vi.current(wpRef.current);
    }
  }, [visible]);
  useImperativeHandle(ref, function () {
    return wpRef.current;
  });
  return /*#__PURE__*/React.createElement("span", __assign({
    "data-role": "waypoint",
    style: {
      fontSize: 0
    },
    ref: wpRef
  }, rest));
});
Waypoint.displayName = 'UC-Waypoint';
export default Waypoint;