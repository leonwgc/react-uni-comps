import { __assign, __rest } from "tslib";
import React, { useRef, useImperativeHandle, useLayoutEffect } from 'react';
import { observe, unobserve } from './defaultIntersectionObserver';
import clsx from 'clsx';
import useLatest from './hooks/useLatest';
/** 路标,可见性发生变化执行回调 */

var Waypoint = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var elRef = useRef();

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
      className = props.className,
      rest = __rest(props, ["onVisible", "onInVisible", "className"]);

  var vv = useLatest(onVisible);
  var vi = useLatest(onInVisible);
  useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      var _a, _b;

      if (visible) {
        (_a = vv.current) === null || _a === void 0 ? void 0 : _a.call(vv, elRef.current);
      } else {
        (_b = vi.current) === null || _b === void 0 ? void 0 : _b.call(vi, elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        unobserve(elRef.current);
      }
    };
  }, []);
  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React.createElement("span", __assign({}, rest, {
    className: clsx('uc-waypoint', className),
    ref: elRef
  }), props.children);
});
Waypoint.displayName = 'UC-Waypoint';
export default Waypoint;