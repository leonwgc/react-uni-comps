var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React, { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import clsx from 'clsx';
import useThisRef from './hooks/useThisRef';
var StyledSlide = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    transition: transform 0.3s ease-in-out;\n    .uc-slide-page {\n      backface-visibility: hidden;\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .uc-slide-dot-wrapper {\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .dot {\n      display: inline-block;\n      margin: 0 4px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #eee;\n      transition: all ease-in-out 0.3s;\n\n      &.active {\n        width: 20px;\n        border-radius: 5px;\n      }\n    }\n\n    &.vertial {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translateY(-50%);\n\n      .dot {\n        display: block;\n        margin: 4px 0;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #eee;\n\n        &.active {\n          width: 8px;\n          height: 20px;\n          border-radius: 5px;\n        }\n      }\n    }\n  }\n"], ["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    transition: transform 0.3s ease-in-out;\n    .uc-slide-page {\n      backface-visibility: hidden;\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .uc-slide-dot-wrapper {\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .dot {\n      display: inline-block;\n      margin: 0 4px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #eee;\n      transition: all ease-in-out 0.3s;\n\n      &.active {\n        width: 20px;\n        border-radius: 5px;\n      }\n    }\n\n    &.vertial {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translateY(-50%);\n\n      .dot {\n        display: block;\n        margin: 4px 0;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #eee;\n\n        &.active {\n          width: 8px;\n          height: 20px;\n          border-radius: 5px;\n        }\n      }\n    }\n  }\n"])));
/**  轮播焦点图/全屏分页 */

var Slide = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.autoPlay,
      autoPlay = _a === void 0 ? true : _a,
      _b = props.loop,
      loop = _b === void 0 ? true : _b,
      _c = props.defaultPageIndex,
      defaultPageIndex = _c === void 0 ? 0 : _c,
      onPageChange = props.onPageChange,
      _d = props.direction,
      direction = _d === void 0 ? 'horizontal' : _d,
      _e = props.interval,
      interval = _e === void 0 ? 3000 : _e,
      children = props.children,
      className = props.className,
      _f = props.height,
      height = _f === void 0 ? 160 : _f,
      style = props.style,
      _g = props.showDot,
      showDot = _g === void 0 ? true : _g,
      rest = __rest(props, ["autoPlay", "loop", "defaultPageIndex", "onPageChange", "direction", "interval", "children", "className", "height", "style", "showDot"]);

  var wrapElRef = useRef();
  var thisRef = useThisRef({
    autoPlay: autoPlay,
    loop: loop,
    onPageChange: onPageChange,
    interval: interval,
    children: children
  });
  var nRef = useRef({
    x: 0,
    lastX: 0,
    wrapWidth: 0,
    count: 0,
    timer: 0
  });

  var _h = useState(defaultPageIndex),
      pageIndex = _h[0],
      setPageIndex = _h[1];

  useLayoutEffect(function () {
    var v = thisRef.current;
    var s = nRef.current;
    var wrapEl = wrapElRef.current;
    s.wrapWidth = wrapEl.offsetWidth;
    var count = 0;
    React.Children.map(v.children, function (c) {
      if ( /*#__PURE__*/React.isValidElement(c)) {
        count++;
      }
    });
    s.count = count;
  }, [thisRef]);
  var startTransform = useCallback(function (newPageIndex, effect) {
    if (effect === void 0) {
      effect = true;
    }

    var s = nRef.current;
    wrapElRef.current.style.transitionProperty = effect ? 'transform' : 'none';
    window.clearTimeout(s.timer);
    setTimeout(function () {
      wrapElRef.current.style.transform = "translate3d(-" + newPageIndex * s.wrapWidth + "px, 0, 0)";
      s.x = -newPageIndex * s.wrapWidth;
    });
  }, [nRef]);
  useEffect(function () {
    var _a, _b;

    startTransform(pageIndex);
    (_b = (_a = thisRef.current).onPageChange) === null || _b === void 0 ? void 0 : _b.call(_a, pageIndex);
  }, [pageIndex, startTransform, thisRef]);
  useEffect(function () {
    var v = thisRef.current;
    var s = nRef.current;

    if (v.autoPlay) {
      if (pageIndex === s.count - 1) {
        s.timer = window.setTimeout(function () {
          wrapElRef.current.style.transitionProperty = 'none';
          wrapElRef.current.style.transform = 'none';
          setPageIndex(0);
        }, v.interval);
      } else {
        s.timer = window.setTimeout(function () {
          setPageIndex(pageIndex < s.count - 1 ? pageIndex + 1 : 0);
        }, v.interval);
      }
    }
  }, [thisRef, nRef, pageIndex, startTransform]);

  var dotRender = function dotRender() {
    if (!showDot) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: clsx('uc-slide-dot-wrapper', {
        vertial: direction === 'vertical'
      })
    }, React.Children.map(children, function (c, idx) {
      return /*#__PURE__*/React.createElement("span", {
        key: idx,
        className: clsx('dot', {
          active: pageIndex === idx
        })
      });
    }));
  };

  return /*#__PURE__*/React.createElement(StyledSlide, __assign({}, rest, {
    className: clsx('uc-slide', className),
    style: __assign(__assign({}, style), {
      height: height
    })
  }), /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: wrapElRef,
    onTouchStart: function onTouchStart() {
      var s = nRef.current;
      wrapElRef.current.style.transitionProperty = 'none';
      s.lastX = s.x;
    },
    onSwipe: function onSwipe(e) {
      var s = nRef.current;

      if (Math.abs(s.x - s.lastX) > s.wrapWidth / 2) {
        if (e.direction === 'left') {
          pageIndex < s.count - 1 && setPageIndex(pageIndex + 1);
        } else {
          pageIndex > 0 && setPageIndex(pageIndex - 1);
        }
      } else {
        // back
        startTransform(pageIndex);
      }
    },
    onPressMove: function onPressMove(e) {
      e.preventDefault();
      var s = nRef.current;
      if (s.x > 0) return;
      if (s.x < -1 * (s.count - 1) * s.wrapWidth) return;
      s.x += e.deltaX;
      wrapElRef.current.style.transform = "translate3d(" + s.x + "px, 0, 0)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx('wrap')
  }, React.Children.map(children, function (c, idx) {
    var _a, _b;

    return /*#__PURE__*/React.isValidElement(c) && /*#__PURE__*/React.cloneElement(c, {
      key: idx,
      className: clsx((_a = c.props) === null || _a === void 0 ? void 0 : _a.className, 'uc-slide-page'),
      style: __assign(__assign({}, (_b = c.props) === null || _b === void 0 ? void 0 : _b.style), {
        height: height
      })
    });
  }))), dotRender());
});
Slide.displayName = 'UC-Slide';
export default Slide;
var templateObject_1;