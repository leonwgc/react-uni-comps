import { __assign, __rest } from "tslib";
import React, { useRef, useImperativeHandle, useLayoutEffect } from 'react';
import { observe, unobserve } from './defaultIntersectionObserver';
import clsx from 'clsx';
import useLatest from './hooks/useLatest';
/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */

var Waypoint = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var elRef = useRef();

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
      style = props.style,
      className = props.className,
      rest = __rest(props, ["onVisible", "onInVisible", "style", "className"]);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, [vv, vi]);
  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React.createElement("span", __assign({}, rest, {
    "data-role": "waypoint",
    className: clsx('uc-waypoint', className),
    style: __assign({
      fontSize: 0
    }, style),
    ref: elRef
  }));
});
Waypoint.displayName = 'UC-Waypoint';
export default Waypoint;