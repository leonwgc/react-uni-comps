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
import { isTouch } from './dom';
import { animationSlow } from './vars';
var StyledSlide = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    transition: transform ", "ms ease-in-out;\n    touch-action: none;\n\n    &.vertical {\n      flex-direction: column;\n    }\n\n    .uc-slide-page {\n      backface-visibility: hidden;\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .pager {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n\n    .item {\n      cursor: pointer;\n      display: inline-block;\n      width: 19px;\n      height: 4px;\n      background: rgba(255, 255, 255, 0.6);\n      transition: all ease-in-out ", "ms;\n\n      &:not(:last-child) {\n        margin-right: 4px;\n      }\n\n      &.active {\n        background: #fff;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translate3d(0, -50%, 0);\n\n      .item {\n        display: block;\n        width: 4px;\n        height: 19px;\n        &:not(:last-child) {\n          margin-bottom: 4px;\n        }\n      }\n    }\n  }\n"], ["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    transition: transform ", "ms ease-in-out;\n    touch-action: none;\n\n    &.vertical {\n      flex-direction: column;\n    }\n\n    .uc-slide-page {\n      backface-visibility: hidden;\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .pager {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n\n    .item {\n      cursor: pointer;\n      display: inline-block;\n      width: 19px;\n      height: 4px;\n      background: rgba(255, 255, 255, 0.6);\n      transition: all ease-in-out ", "ms;\n\n      &:not(:last-child) {\n        margin-right: 4px;\n      }\n\n      &.active {\n        background: #fff;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translate3d(0, -50%, 0);\n\n      .item {\n        display: block;\n        width: 4px;\n        height: 19px;\n        &:not(:last-child) {\n          margin-bottom: 4px;\n        }\n      }\n    }\n  }\n"])), animationSlow, animationSlow);

var getItems = function getItems(children, loop, height) {
  var items = [].concat(children),
      firstItem = items[0],
      lastItem = items[items.length - 1];

  if (loop && items.length > 1) {
    items.push(firstItem);
    items.unshift(lastItem);
  }

  return React.Children.map(items, function (c, index) {
    var _a, _b;

    return /*#__PURE__*/React.cloneElement(c, {
      key: index,
      className: clsx('uc-slide-page', (_a = c.props) === null || _a === void 0 ? void 0 : _a.className),
      style: __assign(__assign({}, (_b = c.props) === null || _b === void 0 ? void 0 : _b.style), {
        height: height
      })
    });
  });
};
/**
 *  轮播
 *
 *  ref: {
 *    prev: () => void;
 *    next: () => void;
 * }
 *
 *
 */


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
      _f = props.showPageIndicator,
      showPageIndicator = _f === void 0 ? true : _f,
      _g = props.ratio,
      ratio = _g === void 0 ? 0.1 : _g,
      rest = __rest(props, ["autoPlay", "loop", "onPageChange", "direction", "interval", "children", "className", "height", "style", "showPageIndicator", "ratio"]);

  var containerRef = useRef();
  var wrapElRef = useRef();

  var _h = useState(function () {
    return getItems(children, loop, height);
  }),
      items = _h[0],
      setItems = _h[1];

  var count = items.length;
  var len = React.Children.count(children);
  var thisRef = useRef({
    x: 0,
    lastX: 0,
    y: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    isMoving: false
  });

  var _j = useState(0),
      pageIndex = _j[0],
      setPageIndex = _j[1]; // !loop:0~len-1, loop: -1~len


  var exp = count > len; // expanded

  var slideToPageIndex = useCallback(function (newPageIndex, transition) {
    if (transition === void 0) {
      transition = true;
    }

    var s = thisRef.current;
    wrapElRef.current.style.transitionProperty = transition ? 'transform' : 'none';

    if (direction === 'horizontal') {
      var x = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapWidth;
      wrapElRef.current.style.transform = "translate3d(".concat(x, "px, 0, 0)");
      s.x = x;
    } else {
      var y = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapHeight;
      wrapElRef.current.style.transform = "translate3d(0, ".concat(y, "px, 0)");
      s.y = y;
    }

    setPageIndex(newPageIndex);
  }, [thisRef, direction, exp]);
  useImperativeHandle(ref, function () {
    return {
      prev: function prev() {
        var min = exp ? -1 : 0;
        slideToPageIndex(Math.max(min, pageIndex - 1));
      },
      next: function next() {
        var max = exp ? len : len - 1;
        slideToPageIndex(Math.min(max, pageIndex + 1));
      }
    };
  });
  var ensurePageIndex = useCallback(function () {
    if (pageIndex >= len) {
      slideToPageIndex(0, false);
    } else if (pageIndex === -1) {
      slideToPageIndex(len - 1, false);
    }
  }, [slideToPageIndex, len, pageIndex]);
  useUpdateEffect(function () {
    setItems(getItems(children, loop, height));
    slideToPageIndex(0, false);
  }, [children, loop, height, slideToPageIndex]);
  useUpdateEffect(function () {
    if (pageIndex >= 0 && pageIndex < len) {
      onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(pageIndex);
    }
  }, [pageIndex]);
  useLayoutEffect(function () {
    var s = thisRef.current;
    var container = containerRef.current;
    s.wrapWidth = container.offsetWidth;
    s.wrapHeight = container.offsetHeight;
    slideToPageIndex(0, false);
  }, [slideToPageIndex]);
  useEffect(function () {
    if (autoPlay && len > 1) {
      var timer_1 = window.setTimeout(function () {
        slideToPageIndex(pageIndex + 1);
      }, interval);
      return function () {
        window.clearTimeout(timer_1);
      };
    }
  }, [pageIndex, slideToPageIndex, autoPlay, interval, len, exp]);

  var pagerRender = function pagerRender() {
    if (!showPageIndicator || len <= 1) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: clsx('pager', {
        vertical: direction === 'vertical'
      })
    }, React.Children.map(children, function (c, idx) {
      return /*#__PURE__*/React.createElement("span", {
        key: idx,
        className: clsx('item', {
          active: pageIndex === idx
        }),
        onClick: function onClick() {
          return slideToPageIndex(idx);
        }
      });
    }));
  };

  var touchEnd = useCallback(function () {
    var s = thisRef.current;

    if (!s.isMoving) {
      return;
    }

    s.isMoving = false;

    if (direction === 'horizontal' && Math.abs(s.x - s.lastX) > s.wrapWidth * ratio) {
      slideToPageIndex(pageIndex + (s.x < s.lastX ? 1 : -1));
    } else if (direction === 'vertical' && Math.abs(s.y - s.lastY) > s.wrapHeight * ratio) {
      slideToPageIndex(pageIndex + (s.y < s.lastY ? 1 : -1));
    } else {
      // reset
      slideToPageIndex(pageIndex);
    }
  }, [direction, pageIndex, ratio, slideToPageIndex]);
  useLayoutEffect(function () {
    var el = wrapElRef.current;

    var touchStart = function touchStart(e) {
      e.preventDefault();
      var s = thisRef.current;
      s.isMoving = true;
      wrapElRef.current.style.transitionProperty = 'none';
      s.lastX = s.x;
      s.lastY = s.y;
    };

    el.addEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);

    if (!isTouch) {
      document.addEventListener('mouseup', touchEnd);
    } else {
      el.addEventListener('touchend', touchEnd);
    }

    return function () {
      el.removeEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);

      if (!isTouch) {
        document.removeEventListener('mouseup', touchEnd);
      } else {
        el.removeEventListener('touchend', touchEnd);
      }
    };
  }, [touchEnd]);
  return /*#__PURE__*/React.createElement(StyledSlide, __assign({
    ref: containerRef
  }, rest, {
    className: clsx('uc-slide', className),
    style: __assign(__assign({}, style), {
      height: height
    })
  }), /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: wrapElRef,
    onPressMove: function onPressMove(e) {
      e.preventDefault();
      var s = thisRef.current;

      if (direction === 'horizontal') {
        if (s.x > 0 || s.x < -1 * (count - 1) * s.wrapWidth) {
          return;
        }

        s.x += e.deltaX;
        wrapElRef.current.style.transform = "translate3d(".concat(s.x, "px, 0, 0)");
      } else {
        if (s.y > 0 || s.y < -1 * (count - 1) * s.wrapHeight) {
          return;
        }

        s.y += e.deltaY;
        wrapElRef.current.style.transform = "translate3d(0, ".concat(s.y, "px, 0)");
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx('wrap', {
      vertical: direction === 'vertical'
    }),
    onTransitionEnd: function onTransitionEnd() {
      ensurePageIndex();
    }
  }, items)), pagerRender());
});
Slide.displayName = 'UC-Slide';
export default Slide;
var templateObject_1;