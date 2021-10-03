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

import React, { useRef, useImperativeHandle } from 'react';
import { Transition } from 'react-transition-group';
import useInViewport from './hooks/useInViewport';
import useUpdateEffect from 'react-use-lib/es/useUpdateEffect';
import clsx from 'clsx';

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
};
/** 子元素执行从from到to类名过渡(过渡时间由duration定义),给子元素定义transition应用过渡 */


var TransitionElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      _a = props.duration,
      duration = _a === void 0 ? 240 : _a,
      _b = props.once,
      once = _b === void 0 ? true : _b,
      _c = props.fromClass,
      fromClass = _c === void 0 ? 'from' : _c,
      _d = props.toClass,
      toClass = _d === void 0 ? 'to' : _d;
  var childrenRef = useRef();
  var lsRef = useRef(true);
  var isInViewport = useInViewport(childrenRef);
  useImperativeHandle(ref, function () {
    return childrenRef.current;
  });
  useUpdateEffect(function () {
    lsRef.current = !once;
  }, [isInViewport, once]);
  var count = React.Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement:只能包含一个子元素.');
  }

  if ( /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.createElement(Transition, {
      in: isInViewport && lsRef.current,
      appear: true,
      timeout: duration
    }, function (state) {
      var _a, _b;

      return /*#__PURE__*/React.cloneElement(children, {
        ref: childrenRef,
        className: clsx((_a = children.props) === null || _a === void 0 ? void 0 : _a.className, getClassName(state, lsRef.current, fromClass, toClass)),
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