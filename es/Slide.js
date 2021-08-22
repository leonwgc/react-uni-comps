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

import React, { useEffect, useState, useRef, useMemo } from 'react';
import BScroll from '@better-scroll/core';
import SlidePlugin from '@better-scroll/slide';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledSlide = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n\n  .uc-slide-page {\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    width: 100%;\n  }\n\n  .uc-slide-dot-wrapper {\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .dot {\n      display: inline-block;\n      margin: 0 4px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #eee;\n      transition: all ease-in-out 0.3s;\n\n      &.active {\n        width: 20px;\n        border-radius: 5px;\n      }\n    }\n\n    &.vertial {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translateY(-50%);\n\n      .dot {\n        display: block;\n        margin: 4px 0;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #eee;\n\n        &.active {\n          width: 8px;\n          height: 20px;\n          border-radius: 5px;\n        }\n      }\n    }\n  }\n"], ["\n  overflow: hidden;\n  position: relative;\n\n  .uc-slide-page {\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    width: 100%;\n  }\n\n  .uc-slide-dot-wrapper {\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .dot {\n      display: inline-block;\n      margin: 0 4px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #eee;\n      transition: all ease-in-out 0.3s;\n\n      &.active {\n        width: 20px;\n        border-radius: 5px;\n      }\n    }\n\n    &.vertial {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translateY(-50%);\n\n      .dot {\n        display: block;\n        margin: 4px 0;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #eee;\n\n        &.active {\n          width: 8px;\n          height: 20px;\n          border-radius: 5px;\n        }\n      }\n    }\n  }\n"])));
/**  Slide */

var Slide = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.autoplay,
      autoplay = _a === void 0 ? true : _a,
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
      rest = __rest(props, ["autoplay", "loop", "defaultPageIndex", "onPageChange", "direction", "interval", "children", "className", "height", "style", "showDot"]);

  var containerRef = useRef();
  var bsRef = useRef();
  var onPageChangeRef = useRef(onPageChange);

  var _h = useState(defaultPageIndex),
      pageIndex = _h[0],
      setPageIndex = _h[1];

  var slide = useMemo(function () {
    var scrollX = direction === 'horizontal';
    var options = {
      autoplay: autoplay,
      loop: loop,
      threshold: 0.1,
      speed: 300,
      listenFlick: true,
      interval: interval
    };

    if (scrollX) {
      options.startPageXIndex = defaultPageIndex;
    } else {
      options.startPageYIndex = defaultPageIndex;
    }

    return options;
  }, [autoplay, interval, loop, direction, defaultPageIndex]);
  useEffect(function () {
    BScroll.use(SlidePlugin);
    var scrollX = direction === 'horizontal';
    var scrollY = !scrollX;
    bsRef.current = new BScroll(containerRef.current, {
      click: true,
      scrollX: scrollX,
      scrollY: scrollY,
      slide: slide,
      momentum: false,
      bounce: false,
      probeType: 3
    });
    bsRef.current.on('slideWillChange', function (page) {
      setPageIndex(page["page" + (scrollX ? 'X' : 'Y')]);
    });
    bsRef.current.on('slidePageChanged', function (page) {
      if (typeof onPageChangeRef.current === 'function') {
        onPageChangeRef.current(page["page" + (scrollX ? 'X' : 'Y')]);
      }
    });

    if (ref) {
      ref.current = {
        goToPage: function goToPage(pageIndex) {
          if (scrollX) {
            bsRef.current.goToPage(pageIndex, 0);
          } else {
            bsRef.current.goToPage(0, pageIndex);
          }
        },
        prev: function prev() {
          return bsRef.current.prev();
        },
        next: function next() {
          return bsRef.current.next();
        },
        bs: bsRef.current
      };
    }

    return function () {
      return bsRef.current.destroy();
    };
  }, [slide, direction, setPageIndex, ref]);

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

  return /*#__PURE__*/React.createElement(StyledSlide, __assign({
    className: clsx('uc-slide', className),
    style: __assign(__assign({}, style), {
      height: height
    }),
    ref: containerRef
  }, rest), /*#__PURE__*/React.createElement("div", null, React.Children.map(children, function (c, idx) {
    return /*#__PURE__*/React.cloneElement(c, {
      key: idx,
      className: clsx(c.props.className, 'uc-slide-page'),
      style: __assign(__assign({}, c.props.style), {
        height: height
      })
    });
  })), dotRender());
});
Slide.displayName = 'uc-slide';
export default Slide;
var templateObject_1;