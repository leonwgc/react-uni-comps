import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useState, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { observe, unobserve } from './defaultIntersectionObserver';
import useIsomorphicLayoutEffect from './hooks/useisomorphicLayoutEffect';
var StyledPlaceholder = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"])));
/** 懒加载图片，当做img标签使用, 在视口才加载图片 */

var LazyLoadImage = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var width = props.width,
      height = props.height,
      style = props.style,
      src = props.src,
      rest = __rest(props, ["width", "height", "style", "src"]);

  var elRef = useRef();

  var _a = useState(false),
      ready = _a[0],
      setReady = _a[1];

  var _b = useState(false),
      loaded = _b[0],
      setLoaded = _b[1];

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
  var newStyle = !ready || !loaded ? __assign({
    width: width,
    height: height
  }, style) : style;

  var onImageLoaded = function onImageLoaded() {
    setLoaded(true);
  };

  return !ready ? /*#__PURE__*/React.createElement(StyledPlaceholder, __assign({}, rest, {
    ref: elRef,
    style: newStyle
  })) : /*#__PURE__*/React.createElement("img", __assign({}, rest, {
    ref: elRef,
    onLoad: onImageLoaded,
    width: width,
    height: height,
    src: src,
    style: newStyle
  }));
});
LazyLoadImage.displayName = 'UC-LazyLoadImage';
export default LazyLoadImage;
var templateObject_1;