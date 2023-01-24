import { __assign, __rest } from "tslib";
import React, { useRef, useState, useImperativeHandle } from 'react';
import { observe, unobserve } from './defaultIntersectionObserver';
import useIsomorphicLayoutEffect from './hooks/useisomorphicLayoutEffect';
/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */

var LazyLoadElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var width = props.width,
      height = props.height,
      style = props.style,
      children = props.children,
      rest = __rest(props, ["width", "height", "style", "children"]);

  var elRef = useRef();

  var _a = useState(false),
      ready = _a[0],
      setReady = _a[1];

  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useIsomorphicLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      if (visible) {
        setReady(true);
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
  var newStyle = !ready ? __assign({
    display: 'inline-block',
    width: width,
    height: height
  }, style) : style;
  return !ready ? /*#__PURE__*/React.createElement("span", __assign({}, rest, {
    ref: elRef,
    style: newStyle
  })) : /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, {
    ref: elRef
  }) : children;
});
LazyLoadElement.displayName = 'UC-LazyLoadElement';
export default LazyLoadElement;