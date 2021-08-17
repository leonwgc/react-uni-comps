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

import React, { useRef, useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/

var AnimationElement = function AnimationElement(_a) {
  var children = _a.children,
      _b = _a.duration,
      duration = _b === void 0 ? '1s' : _b,
      _c = _a.name,
      name = _c === void 0 ? 'none' : _c,
      _d = _a.timingFunc,
      timingFunc = _d === void 0 ? 'ease' : _d,
      _e = _a.delay,
      delay = _e === void 0 ? '0s' : _e,
      _f = _a.direction,
      direction = _f === void 0 ? 'normal' : _f,
      _g = _a.iterationCount,
      iterationCount = _g === void 0 ? 1 : _g,
      _h = _a.fillMode,
      fillMode = _h === void 0 ? 'backwards' : _h,
      //动画将在应用于目标时立即应用第一个关键帧中定义的值
  _j = _a.once
  /** 执行一次，还是每次从不可见到可见状态执行动画,默认执行一次 */
  ,
      //动画将在应用于目标时立即应用第一个关键帧中定义的值
  once = _j === void 0 ? true : _j
  /** 执行一次，还是每次从不可见到可见状态执行动画,默认执行一次 */
  ;
  var ref = useRef();
  var vRef = useRef();
  var isInViewport = useInViewport(ref);
  var _k = ((children === null || children === void 0 ? void 0 : children.props) || {}).style,
      style = _k === void 0 ? {} : _k;

  var newStyle = __assign(__assign({}, style), {
    animation: duration + " " + timingFunc + " " + delay + " " + iterationCount + " " + direction + " " + fillMode + " running " + name
  });

  useEffect(function () {
    if (ref.current) {
      var dom_1 = ref.current;
      dom_1.addEventListener('animationend', function () {
        dom_1.style.animationName = 'none';
      });
      dom_1.addEventListener('webkitAnimationEnd', function () {
        dom_1.style.webkitAnimationName = 'none';
      });
    }
  }, []);
  useEffect(function () {
    if (ref.current) {
      var dom = ref.current;

      if (!vRef.current && isInViewport && !once) {
        dom.style.webkitAnimationName = name;
        dom.style.animationName = name;
      }

      vRef.current = isInViewport;
    }
  }, [isInViewport, name, once]);
  var count = React.Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement can have only one ReactElement children');
  }

  if ( /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.cloneElement(children, {
      ref: ref,
      style: newStyle
    });
  } else {
    return children;
  }
};

export default AnimationElement;