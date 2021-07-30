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

import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import useInViewport from 'react-use-lib/es/useInViewport';
import useUpdateEffect from 'react-use-lib/es/useUpdateEffect';

var getClassName = function getClassName(state, c, fromClass, toClass) {
  if (fromClass === void 0) {
    fromClass = 'from';
  }

  if (toClass === void 0) {
    toClass = 'to';
  }

  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return c ? fromClass : toClass; //exited
  }
}; // 子元素会分别添加from/to class， from代表初始状态，to代表动画最终状态


var TransitionElement = function TransitionElement(_a) {
  var children = _a.children,
      _b = _a.duration,
      duration = _b === void 0 ? 200 : _b,
      _c = _a.timingFunc,
      timingFunc = _c === void 0 ? 'ease-in-out' : _c,
      _d = _a.delay,
      delay = _d === void 0 ? 0 : _d,
      _e = _a.once,
      once = _e === void 0 ? false : _e,
      _f = _a.fromClass,
      fromClass = _f === void 0 ? 'from' : _f,
      _g = _a.toClass,
      toClass = _g === void 0 ? 'to' : _g;
  var ref = useRef();
  var ls = useRef(true);
  var isInViewport = useInViewport(ref);

  var _h = (children === null || children === void 0 ? void 0 : children.props) || {},
      _j = _h.className,
      className = _j === void 0 ? '' : _j,
      _k = _h.style,
      style = _k === void 0 ? {} : _k;

  var newStyle = __assign(__assign({}, style), {
    transition: "all " + duration + "ms " + timingFunc + " " + delay + "ms"
  });

  useUpdateEffect(function () {
    if (once) {
      ls.current = false;
    }
  }, [isInViewport, once]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, /*#__PURE__*/React.createElement(Transition, {
    in: isInViewport && ls.current,
    appear: true,
    timeout: 200
  }, function (state) {
    return /*#__PURE__*/React.cloneElement(children, {
      className: className + " " + getClassName(state, ls.current, fromClass, toClass),
      style: newStyle
    });
  }));
};

export default TransitionElement;