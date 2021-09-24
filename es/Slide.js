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

var getChildrenElementCount = function getChildrenElementCount(children) {
  var count = 0;
  React.Children.map(children, function (c) {
    if ( /*#__PURE__*/React.isValidElement(c)) {
      count++;
    }
  });
  return count;
}; // Todo: vertical support

/**  轮播焦点图/全屏分页 */


var Slide = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.autoPlay,
      autoPlay = _a === void 0 ? true : _a,
      _b = props.loop,
      loop = _b === void 0 ? true : _b,
      _c = props.defaultPageIndex,
      defaultPageIndex = _c === void 0 ? 0 : _c,
      onPageChange = props.onPageChange,
      // direction = 'horizontal',
  _d = props.interval,
      // direction = 'horizontal',
  interval = _d === void 0 ? 3000 : _d,
      children = props.children,
      className = props.className,
      _e = props.height,
      height = _e === void 0 ? 160 : _e,
      style = props.style,
      _f = props.showDot,
      showDot = _f === void 0 ? true : _f,
      rest = __rest(props, ["autoPlay", "loop", "defaultPageIndex", "onPageChange", "interval", "children", "className", "height", "style", "showDot"]);

  var wrapElRef = useRef();

  var _g = useState(function () {
    return getChildrenElementCount(children);
  }),
      count = _g[0],
      setCount = _g[1];

  useEffect(function () {
    setCount(getChildrenElementCount(children));
  }, [children]);
  var thisRef = useThisRef({
    onPageChange: onPageChange
  });
  var sRef = useRef({
    x: 0,
    lastX: 0,
    wrapWidth: 0,
    timer: 0,
    lastPageIndex: -1
  });

  var _h = useState(defaultPageIndex),
      pageIndex = _h[0],
      setPageIndex = _h[1];

  useLayoutEffect(function () {
    var s = sRef.current;
    var wrapEl = wrapElRef.current;
    s.wrapWidth = wrapEl.offsetWidth;
  }, [thisRef]);
  var gotoPage = useCallback(function (newPageIndex, transition) {
    var _a, _b, _c, _d;

    if (transition === void 0) {
      transition = true;
    }

    var s = sRef.current;
    window.clearTimeout(s.timer);

    if (newPageIndex >= 0 && newPageIndex < count) {
      setPageIndex(newPageIndex);
      (_b = (_a = thisRef.current).onPageChange) === null || _b === void 0 ? void 0 : _b.call(_a, newPageIndex);
    }

    if (newPageIndex == count) {
      setPageIndex(0);
      (_d = (_c = thisRef.current).onPageChange) === null || _d === void 0 ? void 0 : _d.call(_c, 0);
    }

    wrapElRef.current.style.transitionProperty = transition ? 'transform' : 'none';
    s.timer = window.setTimeout(function () {
      wrapElRef.current.style.transform = "translate3d(-" + newPageIndex * s.wrapWidth + "px, 0, 0)";
      s.x = -newPageIndex * s.wrapWidth;
      s.lastPageIndex = newPageIndex;
    });
  }, [sRef, count, thisRef]);
  useEffect(function () {
    var s = sRef.current;

    if (autoPlay) {
      if (pageIndex === count - 1) {
        if (loop) {
          var wrap = wrapElRef.current;
          var firstEl = wrap.children[0];
          firstEl.style.transform = "translateX(" + s.wrapWidth * count + "px)";
          s.timer = window.setTimeout(function () {
            gotoPage(count);
          }, interval);
        }
      } else {
        s.timer = window.setTimeout(function () {
          gotoPage(pageIndex < count - 1 ? pageIndex + 1 : 0);
        }, interval);
      }
    }
  }, [thisRef, sRef, pageIndex, gotoPage, count, loop, autoPlay, interval]);

  var dotRender = function dotRender() {
    if (!showDot) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: clsx('uc-slide-dot-wrapper', {
        vertial: false
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

  return /*#__PURE__*/React.createElement(StyledSlide, __assign({
    ref: ref
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
    },
    onSwipe: function onSwipe(e) {
      var s = sRef.current;

      if (Math.abs(s.x - s.lastX) > s.wrapWidth / 2) {
        if (e.direction === 'left') {
          if (pageIndex === count - 1) {
            return gotoPage(count);
          } else {
            pageIndex < count - 1 && gotoPage(pageIndex + 1);
          }
        } else {
          pageIndex > 0 && gotoPage(pageIndex - 1);
        }
      } else {
        // back
        gotoPage(pageIndex);
      }
    },
    onPressMove: function onPressMove(e) {
      e.preventDefault();
      var s = sRef.current;

      if (loop && s.lastPageIndex === count) {
        // last trick frame
        return;
      }

      if (s.x > 0) return;
      if (s.x < -1 * (loop ? count : count - 1) * s.wrapWidth) return;
      s.x += e.deltaX;
      wrapElRef.current.style.transform = "translate3d(" + s.x + "px, 0, 0)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx('wrap'),
    onTransitionEnd: function onTransitionEnd() {
      // last & loop
      var wrap = wrapElRef.current;
      var firstEl = wrap.children[0];

      if (pageIndex == count - 1 && loop) {
        firstEl.style.transform = "translateX(" + sRef.current.wrapWidth * count + "px)";
      } else {
        firstEl.style.transform = 'none';
      }

      if (sRef.current.lastPageIndex === count) {
        // reset
        // gotoPage(0, false);
        wrapElRef.current.style.transitionProperty = 'none';
        wrapElRef.current.style.transform = "translate3d(0, 0, 0)";
        firstEl.style.transform = 'none';
      }
    }
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