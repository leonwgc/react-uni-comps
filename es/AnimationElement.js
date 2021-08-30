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

import React, { useRef, useEffect, useImperativeHandle } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/

var AnimationElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      _a = props.duration,
      duration = _a === void 0 ? '1s' : _a,
      _b = props.name,
      name = _b === void 0 ? 'none' : _b,
      _c = props.timingFunc,
      timingFunc = _c === void 0 ? 'ease' : _c,
      _d = props.delay,
      delay = _d === void 0 ? '0s' : _d,
      _e = props.direction,
      direction = _e === void 0 ? 'normal' : _e,
      _f = props.iterationCount,
      iterationCount = _f === void 0 ? 1 : _f,
      _g = props.fillMode,
      fillMode = _g === void 0 ? 'backwards' : _g,

  /** 执行一次，还是每次从不可见到可见状态执行动画,默认执行一次 */
  _h = props.once,

  /** 执行一次，还是每次从不可见到可见状态执行动画,默认执行一次 */
  once = _h === void 0 ? true : _h;
  var innerRef = useRef();
  var vRef = useRef();
  var isInViewport = useInViewport(innerRef);
  useImperativeHandle(ref, function () {
    return innerRef.current;
  });
  var _j = ((children === null || children === void 0 ? void 0 : children.props) || {}).style,
      style = _j === void 0 ? {} : _j;

  var newStyle = __assign(__assign({}, style), {
    animation: duration + " " + timingFunc + " " + delay + " " + iterationCount + " " + direction + " " + fillMode + " running " + name
  });

  useEffect(function () {
    if (innerRef.current) {
      var dom_1 = innerRef.current;
      dom_1.addEventListener('animationend', function () {
        dom_1.style.animationName = 'none';
      });
      dom_1.addEventListener('webkitAnimationEnd', function () {
        dom_1.style.webkitAnimationName = 'none';
      });
    }
  }, []);
  useEffect(function () {
    if (innerRef.current) {
      var dom = innerRef.current;

      if (!vRef.current && isInViewport && !once) {
        dom.style.webkitAnimationName = name;
        dom.style.animationName = name;
      }

      vRef.current = isInViewport;
    }
  }, [isInViewport, name, once]);
  var count = React.Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement:只能包含一个子元素.');
  }

  if ( /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.cloneElement(children, {
      ref: innerRef,
      style: newStyle
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('AnimationElement:子元素必须为ReactElement');
    }

    return children;
  }
});
AnimationElement.displayName = 'UC-AnimationElement';
export default AnimationElement;