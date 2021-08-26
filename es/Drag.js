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
import useDrag from './hooks/useDrag';
/** 拖拽包裹的元素 */

var Drag = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      boundRef = props.boundRef;
  var elRef = useRef();

  if (process.env.NODE_ENV !== 'production') {
    if (! /*#__PURE__*/React.isValidElement(children)) {
      throw new Error('Drag:children must be a valid react element');
    }
  }

  useDrag(elRef, boundRef, function (e, position) {
    var _a;

    (_a = props.onDragStart) === null || _a === void 0 ? void 0 : _a.call(props, e, position);
  }, function (e, position) {
    var _a;

    (_a = props.onDragEnd) === null || _a === void 0 ? void 0 : _a.call(props, e, position);
  });
  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React.cloneElement(children, {
    ref: elRef,
    style: __assign(__assign({}, children.props.style), {
      position: 'absolute'
    })
  });
});
Drag.displayName = 'UC-Drag';
export default Drag;