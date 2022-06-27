import { __assign, __makeTemplateObject, __rest } from "tslib"; //#region  imports & styles

import React, { useState, useRef, useCallback, useLayoutEffect, useEffect, useImperativeHandle } from 'react';
import styled from 'styled-components';
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
import Touch from 'w-touch';
import Space from './Space';
import useMount from './hooks/useMount';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-slide');
var StyledSlide = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n\n  .", " {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    touch-action: none;\n    width: 100%;\n    transform-style: preserve-3d;\n    transition-property: transform;\n\n    &.vertical {\n      flex-direction: column;\n    }\n  }\n  .", " {\n    width: 100%;\n    flex-shrink: 0;\n  }\n\n  .", " {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n    line-height: 4px;\n\n    .", " {\n      cursor: pointer;\n      display: inline-block;\n      width: 8px;\n      height: 4px;\n      /* border-radius: 2px; */\n      background-color: #fff;\n      opacity: 0.4;\n\n      &.active {\n        opacity: 1;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      bottom: unset;\n      transform: translate3d(0, -50%, 0);\n\n      .", " {\n        display: block;\n        width: 4px;\n        height: 8px;\n      }\n    }\n  }\n"], ["\n  overflow: hidden;\n  position: relative;\n\n  .", " {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    touch-action: none;\n    width: 100%;\n    transform-style: preserve-3d;\n    transition-property: transform;\n\n    &.vertical {\n      flex-direction: column;\n    }\n  }\n  .", " {\n    width: 100%;\n    flex-shrink: 0;\n  }\n\n  .", " {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n    line-height: 4px;\n\n    .", " {\n      cursor: pointer;\n      display: inline-block;\n      width: 8px;\n      height: 4px;\n      /* border-radius: 2px; */\n      background-color: #fff;\n      opacity: 0.4;\n\n      &.active {\n        opacity: 1;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      bottom: unset;\n      transform: translate3d(0, -50%, 0);\n\n      .", " {\n        display: block;\n        width: 4px;\n        height: 8px;\n      }\n    }\n  }\n"])), getClassName('wrap'), getClassName('page'), getClassName('indicator'), getClassName('item'), getClassName('item'));

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
      className: clsx(getClassName('page'), (_a = c.props) === null || _a === void 0 ? void 0 : _a.className),
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
      pageStyle = props.pageStyle,
      pageClassName = props.pageClassName,
      rest = __rest(props, ["autoPlay", "loop", "onPageChange", "direction", "interval", "duration", "children", "className", "height", "style", "showPageIndicator", "ratio", "pageStyle", "pageClassName"]);

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
  var propsRef = useLatest({
    exp: exp,
    ratio: ratio,
    direction: direction,
    pageIndex: pageIndex,
    len: len,
    min: min,
    max: max,
    count: count
  });
  var thisRef = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    isMoving: false,
    timer: 0
  });
  var slideToPageIndex = useCallback(function (newPageIndex, transition) {
    if (transition === void 0) {
      transition = true;
    }

    var _a = propsRef.current,
        direction = _a.direction,
        exp = _a.exp;
    var el = wrapElRef.current;

    if (el) {
      var _b = containerRef.current,
          wrapWidth = _b.offsetWidth,
          wrapHeight = _b.offsetHeight;
      el.style.transitionProperty = transition ? 'transform' : 'none';

      if (direction === 'horizontal') {
        var x = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapWidth;
        el.style.transform = "translate3d(".concat(x, "px, 0, 0)");
        thisRef.current.x = x;
      } else {
        var y = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapHeight;
        el.style.transform = "translate3d(0, ".concat(y, "px, 0)");
        thisRef.current.y = y;
      }

      setPageIndex(newPageIndex);
    }
  }, []);
  useImperativeHandle(ref, function () {
    return {
      prev: function prev() {
        slideToPageIndex(Math.max(min, pageIndex - 1));
      },
      next: function next() {
        slideToPageIndex(Math.min(max, pageIndex + 1));
      }
    };
  });
  useUpdateEffect(function () {
    setItems(getItems(children, loop, height));
    slideToPageIndex(0, false);
  }, [children, loop, height]);
  useUpdateEffect(function () {
    if (pageIndex >= 0 && pageIndex < len) {
      onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(pageIndex);
    }
  }, [pageIndex]);
  useMount(function () {
    slideToPageIndex(0, false);
  });
  useEffect(function () {
    if (autoPlay && len > 1 && !thisRef.current.isMoving) {
      thisRef.current.timer = window.setInterval(function (p) {
        if (!thisRef.current.isMoving) {
          slideToPageIndex(p + 1);
        }
      }, interval, pageIndex);
      return function () {
        window.clearInterval(thisRef.current.timer);
      };
    }
  }, [autoPlay, interval, len, pageIndex]);
  useLayoutEffect(function () {
    var el = wrapElRef.current;
    var _a = containerRef.current,
        wrapWidth = _a.offsetWidth,
        wrapHeight = _a.offsetHeight;
    var fg = new Touch(el, {
      onTouchStart: function onTouchStart(e) {
        e.preventDefault();
        el.style.transitionProperty = 'none';
        thisRef.current.isMoving = true;
        thisRef.current.lastX = thisRef.current.x;
        thisRef.current.lastY = thisRef.current.y;
      },
      onTouchEnd: function onTouchEnd() {
        if (!thisRef.current.isMoving) {
          return;
        }

        thisRef.current.isMoving = false;
        var _a = propsRef.current,
            ratio = _a.ratio,
            pageIndex = _a.pageIndex,
            max = _a.max,
            len = _a.len,
            exp = _a.exp;

        if (exp && (max === pageIndex || min === pageIndex)) {
          slideToPageIndex(pageIndex === max ? 0 : len - 1, false);
          return;
        }

        if (direction === 'horizontal' && Math.abs(thisRef.current.x - thisRef.current.lastX) > wrapWidth * ratio) {
          slideToPageIndex(pageIndex + (thisRef.current.x < thisRef.current.lastX ? 1 : -1));
        } else if (direction === 'vertical' && Math.abs(thisRef.current.y - thisRef.current.lastY) > wrapHeight * ratio) {
          slideToPageIndex(pageIndex + (thisRef.current.y < thisRef.current.lastY ? 1 : -1));
        } else {
          // reset
          slideToPageIndex(pageIndex);
        }
      },
      onPressMove: function onPressMove(e) {
        var _a = propsRef.current,
            pageIndex = _a.pageIndex,
            max = _a.max,
            exp = _a.exp,
            count = _a.count,
            direction = _a.direction;

        if (exp && (max === pageIndex || min === pageIndex)) {
          return;
        }

        if (direction === 'horizontal') {
          if (thisRef.current.x > 0 || thisRef.current.x < -1 * (count - 1) * wrapWidth) {
            return;
          }

          thisRef.current.x += e.deltaX;
          el.style.transform = "translate3d(".concat(thisRef.current.x, "px, 0, 0)");
        } else {
          if (thisRef.current.y > 0 || thisRef.current.y < -1 * (count - 1) * wrapHeight) {
            return;
          }

          thisRef.current.y += e.deltaY;
          el.style.transform = "translate3d(0, ".concat(thisRef.current.y, "px, 0)");
        }
      }
    });
    return function () {
      return fg.destroy();
    };
  }, []);
  return /*#__PURE__*/React.createElement(StyledSlide, __assign({
    ref: containerRef
  }, rest, {
    className: clsx(getClassName(), className),
    style: __assign(__assign({}, style), {
      height: height
    })
  }), /*#__PURE__*/React.createElement("div", {
    ref: wrapElRef,
    className: clsx(getClassName('wrap'), {
      vertical: direction === 'vertical'
    }),
    onTransitionEnd: function onTransitionEnd() {
      if (pageIndex >= len) {
        slideToPageIndex(0, false);
      } else if (pageIndex === -1) {
        slideToPageIndex(len - 1, false);
      }
    },
    style: {
      transitionDuration: "".concat(duration, "ms")
    }
  }, items), showPageIndicator && len > 1 && /*#__PURE__*/React.createElement(Space, {
    size: 4,
    direction: direction,
    ref: pageWrapElRef,
    className: clsx(getClassName('indicator'), pageClassName, {
      vertical: direction === 'vertical'
    }),
    style: pageStyle
  }, React.Children.map(children, function (c, idx) {
    return /*#__PURE__*/React.createElement("span", {
      key: idx,
      className: clsx(getClassName('item'), {
        active: pageIndex === idx
      }),
      onClick: function onClick() {
        return slideToPageIndex(idx);
      }
    });
  })));
});
Slide.displayName = 'UC-Slide';
export default Slide;
var templateObject_1;