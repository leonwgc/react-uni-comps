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
var StyledSlide = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n\n  .uc-slide-page {\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  position: relative;\n\n  .uc-slide-page {\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    width: 100%;\n  }\n"])));
/**  Slide */

var Slide = function Slide(props) {
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
      dotRender = props.dotRender,
      className = props.className,
      _f = props.height,
      height = _f === void 0 ? 160 : _f,
      style = props.style,
      rest = __rest(props, ["autoplay", "loop", "defaultPageIndex", "onPageChange", "direction", "interval", "children", "dotRender", "className", "height", "style"]);

  var ref = useRef();
  var slideRef = useRef();
  var onPageChangeRef = useRef(onPageChange);

  var _g = useState(defaultPageIndex),
      pageIndex = _g[0],
      setPageIndex = _g[1];

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
    slideRef.current = new BScroll(ref.current, {
      click: true,
      scrollX: scrollX,
      scrollY: scrollY,
      slide: slide,
      momentum: false,
      bounce: false,
      probeType: 3
    });
    slideRef.current.on('slideWillChange', function (page) {
      setPageIndex(page["page" + (scrollX ? 'X' : 'Y')]);
    });
    slideRef.current.on('slidePageChanged', function (page) {
      if (typeof onPageChangeRef.current === 'function') {
        onPageChangeRef.current(page["page" + (scrollX ? 'X' : 'Y')]);
      }
    });
    return function () {
      return slideRef.current.destroy();
    };
  }, [slide, direction, setPageIndex]);
  return /*#__PURE__*/React.createElement(StyledSlide, __assign({
    className: clsx('uc-slide', className),
    style: __assign(__assign({}, style), {
      height: height
    }),
    ref: ref
  }, rest), /*#__PURE__*/React.createElement("div", null, React.Children.map(children, function (c, idx) {
    return /*#__PURE__*/React.cloneElement(c, {
      key: idx,
      className: clsx(c.props.className, 'uc-slide-page'),
      style: __assign(__assign({}, c.props.style), {
        height: height
      })
    });
  })), dotRender ? dotRender(pageIndex) : null);
};

export default Slide;
var templateObject_1;