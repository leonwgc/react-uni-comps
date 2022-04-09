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
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
import Touch from 'w-touch';
import Space from './Space';
import useMount from './hooks/useMount';
var StyledSlide = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    touch-action: none;\n    width: 100%;\n    transform-style: preserve-3d;\n    transition-property: transform;\n\n    &.vertical {\n      flex-direction: column;\n    }\n\n    .uc-slide-page {\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .pager {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n    line-height: 4px;\n\n    .item {\n      cursor: pointer;\n      display: inline-block;\n      width: 8px;\n      height: 4px;\n      border-radius: 2px;\n      background-color: #fff;\n      opacity: 0.4;\n\n      &.active {\n        opacity: 1;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translate3d(0, -50%, 0);\n\n      .item {\n        display: block;\n        width: 4px;\n        height: 8px;\n      }\n    }\n  }\n"], ["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    touch-action: none;\n    width: 100%;\n    transform-style: preserve-3d;\n    transition-property: transform;\n\n    &.vertical {\n      flex-direction: column;\n    }\n\n    .uc-slide-page {\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .pager {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n    line-height: 4px;\n\n    .item {\n      cursor: pointer;\n      display: inline-block;\n      width: 8px;\n      height: 4px;\n      border-radius: 2px;\n      background-color: #fff;\n      opacity: 0.4;\n\n      &.active {\n        opacity: 1;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translate3d(0, -50%, 0);\n\n      .item {\n        display: block;\n        width: 4px;\n        height: 8px;\n      }\n    }\n  }\n"])));

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
      _e = props.duration,
      duration = _e === void 0 ? 280 : _e,
      children = props.children,
      className = props.className,
      _f = props.height,
      height = _f === void 0 ? 160 : _f,
      style = props.style,
      _g = props.showPageIndicator,
      showPageIndicator = _g === void 0 ? true : _g,
      _h = props.ratio,
      ratio = _h === void 0 ? 0.1 : _h,
      rest = __rest(props, ["autoPlay", "loop", "onPageChange", "direction", "interval", "duration", "children", "className", "height", "style", "showPageIndicator", "ratio"]);

  var containerRef = useRef(null);
  var wrapElRef = useRef();
  var pageWrapElRef = useRef();

  var _j = useState(function () {
    return getItems(children, loop, height);
  }),
      items = _j[0],
      setItems = _j[1];

  var count = items.length;
  var len = React.Children.count(children);

  var _k = useState(0),
      pageIndex = _k[0],
      setPageIndex = _k[1]; // !loop:0~len-1, loop: -1~len


  var exp = count > len; // expanded

  var min = exp ? -1 : 0;
  var max = exp ? len : len - 1;
  var thisRef = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    isMoving: false,
    pageIndex: pageIndex,
    min: min,
    max: max,
    exp: exp,
    len: len,
    ratio: ratio,
    direction: direction
  });
  thisRef.current = __assign(__assign({}, thisRef.current), {
    pageIndex: pageIndex,
    min: min,
    max: max,
    exp: exp,
    len: len,
    ratio: ratio,
    direction: direction
  });
  var slideToPageIndex = useCallback(function (newPageIndex, transition) {
    if (transition === void 0) {
      transition = true;
    }

    var $this = thisRef.current;
    var _a = thisRef.current,
        wrapWidth = _a.wrapWidth,
        wrapHeight = _a.wrapHeight,
        direction = _a.direction,
        exp = _a.exp;
    var el = wrapElRef.current;

    if (el) {
      el.style.transitionProperty = transition ? 'transform' : 'none';

      if (direction === 'horizontal') {
        var x = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapWidth;
        el.style.transform = "translate3d(".concat(x, "px, 0, 0)");
        $this.x = x;
      } else {
        var y = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapHeight;
        el.style.transform = "translate3d(0, ".concat(y, "px, 0)");
        $this.y = y;
      }

      setPageIndex(newPageIndex);
    }
  }, [thisRef]);
  useImperativeHandle(ref, function () {
    return {
      prev: function prev() {
        slideToPageIndex(Math.max(thisRef.current.min, pageIndex - 1));
      },
      next: function next() {
        slideToPageIndex(Math.min(thisRef.current.max, pageIndex + 1));
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
  useMount(function () {
    var $this = thisRef.current;
    var container = containerRef.current;
    $this.wrapWidth = container.offsetWidth;
    $this.wrapHeight = container.offsetHeight;
    slideToPageIndex(0, false);
  });
  useLayoutEffect(function () {
    if (showPageIndicator) {
      var pageWrapEl = pageWrapElRef.current;

      if (pageWrapEl) {
        pageWrapEl.parentElement.style.height = pageWrapEl.offsetHeight + 'px';
        pageWrapEl.parentElement.style.width = pageWrapEl.offsetWidth + 'px';
      }
    }
  }, [showPageIndicator, direction]);
  useEffect(function () {
    if (autoPlay && len > 1) {
      thisRef.current.timer = window.setInterval(function (p) {
        if (!thisRef.current.isMoving) {
          slideToPageIndex(p + 1);
        }
      }, interval, pageIndex);
      return function () {
        window.clearInterval(thisRef.current.timer);
      };
    }
  }, [slideToPageIndex, autoPlay, interval, len, pageIndex]);
  useLayoutEffect(function () {
    var wrapEl = wrapElRef.current;
    var fg = new Touch(wrapEl, {
      onTouchStart: function onTouchStart(e) {
        e.preventDefault();
        var $this = thisRef.current;
        $this.isMoving = true;
        wrapEl.style.transitionProperty = 'none';
        $this.lastX = $this.x;
        $this.lastY = $this.y;
      },
      onTouchEnd: function onTouchEnd() {
        var $this = thisRef.current;

        if (!$this.isMoving) {
          return;
        }

        $this.isMoving = false;
        var ratio = $this.ratio,
            pageIndex = $this.pageIndex,
            max = $this.max,
            len = $this.len;

        if ($this.exp && ($this.max === $this.pageIndex || $this.min === $this.pageIndex)) {
          slideToPageIndex($this.pageIndex === max ? 0 : len - 1, false);
          return;
        }

        if (direction === 'horizontal' && Math.abs($this.x - $this.lastX) > $this.wrapWidth * ratio) {
          slideToPageIndex(pageIndex + ($this.x < $this.lastX ? 1 : -1));
        } else if (direction === 'vertical' && Math.abs($this.y - $this.lastY) > $this.wrapHeight * ratio) {
          slideToPageIndex(pageIndex + ($this.y < $this.lastY ? 1 : -1));
        } else {
          // reset
          slideToPageIndex(pageIndex);
        }
      },
      onPressMove: function onPressMove(e) {
        var $this = thisRef.current;

        if ($this.exp && ($this.max === $this.pageIndex || $this.min === $this.pageIndex)) {
          return;
        }

        if (direction === 'horizontal') {
          if ($this.x > 0 || $this.x < -1 * (count - 1) * $this.wrapWidth) {
            return;
          }

          $this.x += e.deltaX;
          wrapElRef.current.style.transform = "translate3d(".concat($this.x, "px, 0, 0)");
        } else {
          if ($this.y > 0 || $this.y < -1 * (count - 1) * $this.wrapHeight) {
            return;
          }

          $this.y += e.deltaY;
          wrapElRef.current.style.transform = "translate3d(0, ".concat($this.y, "px, 0)");
        }
      }
    });
    return function () {
      return fg.destroy();
    };
  }, [count, direction, thisRef, slideToPageIndex]);
  return /*#__PURE__*/React.createElement(StyledSlide, __assign({
    ref: containerRef
  }, rest, {
    className: clsx('uc-slide', className),
    style: __assign(__assign({}, style), {
      height: height
    })
  }), /*#__PURE__*/React.createElement("div", {
    ref: wrapElRef,
    className: clsx('wrap', {
      vertical: direction === 'vertical'
    }),
    onTransitionEnd: function onTransitionEnd() {
      ensurePageIndex();
    },
    style: {
      transitionDuration: "".concat(duration, "ms")
    }
  }, items), showPageIndicator && len > 1 && /*#__PURE__*/React.createElement("div", {
    className: clsx('pager', {
      vertical: direction === 'vertical'
    })
  }, /*#__PURE__*/React.createElement(Space, {
    size: 6,
    direction: direction,
    ref: pageWrapElRef
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
  }))));
});
Slide.displayName = 'UC-Slide';
export default Slide;
var templateObject_1;