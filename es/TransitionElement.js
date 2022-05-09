import { __assign } from "tslib";
import React, { useRef, useImperativeHandle, useState } from 'react';
import { Transition } from 'react-transition-group';
import useVisibleObserve from './hooks/useVisibleObserve';
import clsx from 'clsx';
import { animationNormal } from './vars';

var getClassName = function getClassName(state, fromClass, toClass) {
  if (fromClass === void 0) {
    fromClass = 'from';
  }

  if (toClass === void 0) {
    toClass = 'to';
  }

  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return fromClass;
  }
};
/**
 *  子元素执行transition过渡动画
 *  fromClass定义初始状态类名，默认:from
 *  toClass 定义最终状态类名，默认:to
 *  执行时机:
 *  1.初次mount并在可视区域
 *  2.从不可见到可见状态
 */


var TransitionElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      _a = props.duration,
      duration = _a === void 0 ? animationNormal : _a,
      _b = props.fromClass,
      fromClass = _b === void 0 ? 'from' : _b,
      _c = props.toClass,
      toClass = _c === void 0 ? 'to' : _c;
  var elRef = useRef();

  var _d = useState(),
      isInViewport = _d[0],
      setIsInViewport = _d[1];

  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useVisibleObserve(elRef, setIsInViewport);
  var count = React.Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement:只能包含一个子元素.');
  }

  if ( /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.createElement(Transition, {
      in: isInViewport,
      timeout: duration
    }, function (state) {
      var _a, _b;

      return /*#__PURE__*/React.cloneElement(children, {
        ref: elRef,
        className: clsx((_a = children.props) === null || _a === void 0 ? void 0 : _a.className, getClassName(state, fromClass, toClass)),
        style: __assign(__assign({}, (_b = children.props) === null || _b === void 0 ? void 0 : _b.style), {
          transitionDuration: duration + 'ms'
        })
      });
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('TransitionElement:子元素必须为ReactElement');
    }

    return children;
  }
});
TransitionElement.displayName = 'UC-TransitionElement';
export default TransitionElement;