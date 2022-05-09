import { __assign } from "tslib";
import React, { useRef, useImperativeHandle, useState } from 'react';
import useVisibleObserve from './hooks/useVisibleObserve';
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
      fillMode = _g === void 0 ? 'backwards' : _g;
  var elRef = useRef();

  var _h = useState(),
      isInViewport = _h[0],
      setIsInViewport = _h[1];

  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  var _j = ((children === null || children === void 0 ? void 0 : children.props) || {}).style,
      style = _j === void 0 ? {} : _j;
  useVisibleObserve(elRef, setIsInViewport);

  var newStyle = __assign(__assign({}, style), {
    animation: "".concat(duration, " ").concat(timingFunc, " ").concat(delay, " ").concat(iterationCount, " ").concat(direction, " ").concat(fillMode, " ").concat(isInViewport ? 'running' : 'paused', " ").concat(name)
  });

  var count = React.Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement:只能包含一个子元素.');
  }

  if ( /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.cloneElement(children, {
      ref: elRef,
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