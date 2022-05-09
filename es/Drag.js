import { __assign } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import useDrag from './hooks/useDrag';
/** 拖拽 */

var Drag = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      boundRef = props.boundRef;
  var elRef = useRef();

  if (process.env.NODE_ENV !== 'production') {
    if (! /*#__PURE__*/React.isValidElement(children)) {
      throw new Error('Drag:子元素必须为ReactElement');
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
    style: __assign({
      position: 'absolute',
      cursor: 'move'
    }, children.props.style)
  });
});
Drag.displayName = 'UC-Drag';
export default Drag;