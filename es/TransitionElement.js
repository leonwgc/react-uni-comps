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

import React, { useRef, useImperativeHandle, useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { observe, unobserve } from './defaultIntersectionObserver';
import clsx from 'clsx';

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
/** 子元素执行从from到to类名过渡 */


var TransitionElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      _a = props.duration,
      duration = _a === void 0 ? 240 : _a,
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
  useEffect(function () {
    observe(elRef.current, function (isIn) {
      setIsInViewport(isIn);

      if (isIn) {
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, []);
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
        className: clsx((_a = children.props) === null || _a === void 0 ? void 0 : _a.className, state, getClassName(state, fromClass, toClass)),
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