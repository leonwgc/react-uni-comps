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

import React, { useState, useRef, useCallback, useLayoutEffect, useEffect, useImperativeHandle } from 'react';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
var StyledSlide = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    transition: transform 0.3s ease-in-out;\n    touch-action: none;\n\n    &.vertical {\n      flex-direction: column;\n    }\n\n    .uc-slide-page {\n      backface-visibility: hidden;\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .uc-slide-dot-wrapper {\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .dot {\n      display: inline-block;\n      margin: 0 4px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #eee;\n      transition: all ease-in-out 0.3s;\n\n      &.active {\n        width: 20px;\n        border-radius: 5px;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translateY(-50%);\n\n      .dot {\n        display: block;\n        margin: 4px 0;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #eee;\n\n        &.active {\n          width: 8px;\n          height: 20px;\n          border-radius: 5px;\n        }\n      }\n    }\n  }\n"], ["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    transition: transform 0.3s ease-in-out;\n    touch-action: none;\n\n    &.vertical {\n      flex-direction: column;\n    }\n\n    .uc-slide-page {\n      backface-visibility: hidden;\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .uc-slide-dot-wrapper {\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .dot {\n      display: inline-block;\n      margin: 0 4px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #eee;\n      transition: all ease-in-out 0.3s;\n\n      &.active {\n        width: 20px;\n        border-radius: 5px;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translateY(-50%);\n\n      .dot {\n        display: block;\n        margin: 4px 0;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #eee;\n\n        &.active {\n          width: 8px;\n          height: 20px;\n          border-radius: 5px;\n        }\n      }\n    }\n  }\n"])));

var getItems = function getItems(children, loop, height) {
  var items = [].concat(children),
      firstItem = items[0],
      lastItem = items[items.length - 1];

  if (loop && items.length > 1) {
    items.push(firstItem);
    items.unshift(lastItem);
  }

  var newItems = React.Children.map(items, function (c, index) {
    var _a, _b;

    return /*#__PURE__*/React.cloneElement(c, {
      key: index,
      className: clsx('uc-slide-page', (_a = c.props) === null || _a === void 0 ? void 0 : _a.className),
      style: __assign(__assign({}, (_b = c.props) === null || _b === void 0 ? void 0 : _b.style), {
        height: height
      })
    });
  });
  return newItems;
};
/**  轮播 */


var Slide = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.autoPlay,
      autoPlay = _a === void 0 ? false : _a,
      _b = props.loop,
      loop = _b === void 0 ? true : _b,
      onPageChange = props.onPageChange,
      _c = props.direction,
      direction = _c === void 0 ? 'horizontal' : _c,
      _d = props.interval,
      interval = _d === void 0 ? 3000 : _d,
      children = props.children,
      className = props.className,
      _e = props.height,
      height = _e === void 0 ? 160 : _e,
      style = props.style,
      _f = props.showDot,
      showDot = _f === void 0 ? true : _f,
      _g = props.ratio,
      ratio = _g === void 0 ? 0.1 : _g,
      rest = __rest(props, ["autoPlay", "loop", "onPageChange", "direction", "interval", "children", "className", "height", "style", "showDot", "ratio"]);

  var containerRef = useRef();
  var wrapElRef = useRef();

  var _h = useState(function () {
    return getItems(children, loop, height);
  }),
      items = _h[0],
      setItems = _h[1];

  var count = items.length;
  var len = React.Children.count(children);
  var sRef = useRef({
    x: 0,
    lastX: 0,
    y: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    inTransition: false
  });

  var _j = useState(0),
      pageIndex = _j[0],
      setPageIndex = _j[1]; // !loop:0~len-1, loop: -1~len


  var slideToPageLoc = useCallback(function (newPageIndex, transition) {
    if (transition === void 0) {
      transition = true;
    }

    var s = sRef.current;
    wrapElRef.current.style.transitionProperty = transition ? 'transform' : 'none';

    if (direction === 'horizontal') {
      var x = (newPageIndex + (loop ? 1 : 0)) * -1 * s.wrapWidth;
      wrapElRef.current.style.transform = "translate3d(" + x + "px, 0, 0)";
      s.x = x;
    } else {
      var y = (newPageIndex + (loop ? 1 : 0)) * -1 * s.wrapHeight;
      wrapElRef.current.style.transform = "translate3d(0, " + y + "px, 0)";
      s.y = y;
    }

    s.inTransition = transition;
    setPageIndex(newPageIndex);
  }, [sRef, loop, direction]);
  var exp = count > len;
  useImperativeHandle(ref, function () {
    return {
      prev: function prev() {
        return slideToPageLoc(pageIndex > (exp ? -1 : 0) ? pageIndex - 1 : exp ? -1 : 0);
      },
      next: function next() {
        return slideToPageLoc(pageIndex < (exp ? len : len - 1) ? pageIndex + 1 : exp ? len : len - 1);
      }
    };
  });
  useUpdateEffect(function () {
    setItems(getItems(children, loop, height));
    slideToPageLoc(0, false);
  }, [children, loop, height, slideToPageLoc]);
  useUpdateEffect(function () {
    if (pageIndex === len) {
      onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(0);
    } else if (pageIndex === -1) {
      onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(len - 1);
    } else {
      onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(pageIndex);
    }
  }, [pageIndex, len]);
  useLayoutEffect(function () {
    var s = sRef.current;
    var container = containerRef.current;
    s.wrapWidth = container.offsetWidth;
    s.wrapHeight = container.offsetHeight;
    slideToPageLoc(0, false);
  }, [slideToPageLoc]);
  useEffect(function () {
    // auto play
    if (autoPlay) {
      var timer_1 = window.setTimeout(function () {
        slideToPageLoc(pageIndex + 1);
      }, interval);
      return function () {
        window.clearTimeout(timer_1);
      };
    }
  }, [pageIndex, slideToPageLoc, autoPlay, interval]);

  var dotRender = function dotRender() {
    if (!showDot) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: clsx('uc-slide-dot-wrapper', {
        vertical: direction === 'vertical'
      })
    }, React.Children.map(children, function (c, idx) {
      return /*#__PURE__*/React.createElement("span", {
        key: idx,
        className: clsx('dot', {
          active: pageIndex === idx
        }),
        onClick: function onClick() {
          return slideToPageLoc(idx);
        }
      });
    }));
  };

  return /*#__PURE__*/React.createElement(StyledSlide, __assign({
    ref: containerRef
  }, rest, {
    className: clsx('uc-slide', className),
    style: __assign(__assign({}, style), {
      height: height
    })
  }), /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: wrapElRef,
    onTouchStart: function onTouchStart() {
      var s = sRef.current;
      wrapElRef.current.style.transitionProperty = 'none';
      s.lastX = s.x;
      s.lastY = s.y;
    },
    onTouchEnd: function onTouchEnd() {
      var s = sRef.current;

      if (direction === 'horizontal' && Math.abs(s.x - s.lastX) > s.wrapWidth * ratio) {
        slideToPageLoc(pageIndex + (s.x < s.lastX ? 1 : -1));
      } else if (direction === 'vertical' && Math.abs(s.y - s.lastY) > s.wrapHeight * ratio) {
        slideToPageLoc(pageIndex + (s.y < s.lastY ? 1 : -1));
      } else {
        // reset
        slideToPageLoc(pageIndex);
      }
    },
    onPressMove: function onPressMove(e) {
      var s = sRef.current;

      if (s.inTransition) {
        return setTimeout(function () {
          s.inTransition = false;
        }, 300);
      }

      if (direction === 'horizontal') {
        if (s.x > 0 || s.x < -1 * (count - 1) * s.wrapWidth) {
          return;
        }

        s.x += e.deltaX;
        wrapElRef.current.style.transform = "translate3d(" + s.x + "px, 0, 0)";
      } else {
        if (s.y > 0 || s.y < -1 * (count - 1) * s.wrapHeight) {
          return;
        }

        s.y += e.deltaY;
        wrapElRef.current.style.transform = "translate3d(0, " + s.y + "px, 0)";
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx('wrap', {
      vertical: direction === 'vertical'
    }),
    onTransitionEnd: function onTransitionEnd() {
      sRef.current.inTransition = false; // loop

      if (pageIndex === len) {
        slideToPageLoc(0, false);
      } else if (pageIndex === -1) {
        slideToPageLoc(len - 1, false);
      }
    }
  }, items)), dotRender());
});
Slide.displayName = 'UC-Slide';
export default Slide;
var templateObject_1;