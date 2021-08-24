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
  var ls = useRef(true);
  var isInViewport = useInViewport(childrenRef);

  var _e = (children === null || children === void 0 ? void 0 : children.props) || {},
      _f = _e.className,
      className = _f === void 0 ? '' : _f,
      _g = _e.style,
      style = _g === void 0 ? {} : _g;

  useImperativeHandle(ref, function () {
    return childrenRef.current;
  });

  var newStyle = __assign(__assign({}, style), {
    //  transition: `${transitionProp} ${duration}ms ${timingFunc} ${delay}ms`,
    transitionDuration: duration + 'ms'
  });

  useUpdateEffect(function () {
    ls.current = !once;
  }, [isInViewport, once]);
  var count = React.Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement can have only one children');
  }

  if ( /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.createElement(Transition, {
      in: isInViewport && ls.current,
      appear: true,
      timeout: duration
    }, function (state) {
      return /*#__PURE__*/React.cloneElement(children, {
        ref: childrenRef,
        className: className + " " + getClassName(state, ls.current, fromClass, toClass),
        style: newStyle
      });
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('TransitionElement:children must be ReactElement');
    }

    return children;
  }
});
TransitionElement.displayName = 'UC-TransitionElement';
export default TransitionElement;