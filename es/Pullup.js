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

import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import Spin from './Spin';
import Space from './Space';
import useInViewport from './hooks/useInViewport';
import usePrevious from './hooks/usePrevious';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n  position: relative;\n  &.dom-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  .loading {\n    color: #999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n  }\n"], ["\n  user-select: none;\n  position: relative;\n  &.dom-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  .loading {\n    color: #999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n  }\n"]))); // check isInViewport in vertical direction

function isInViewport(el, container) {
  var _a = el.getBoundingClientRect(),
      top = _a.top,
      bottom = _a.bottom;

  if (!container) {
    return bottom >= 0 && top < window.innerHeight;
  } else {
    var brc = container.getBoundingClientRect();
    return bottom <= brc.bottom && top >= brc.top;
  }
}

var DefaultLoadingText = /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Spin, null), "\u52A0\u8F7D\u4E2D");
/**
 *  上拉加载/下拉刷新
 *  注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器
 */

var Pullup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.dataList,
      dataList = _a === void 0 ? [] : _a,
      _b = props.dataRender,
      dataRender = _b === void 0 ? function () {
    return null;
  } : _b,
      fetchData = props.fetchData,
      _c = props.loadingText,
      loadingText = _c === void 0 ? DefaultLoadingText : _c,
      _d = props.finishedText,
      finishedText = _d === void 0 ? '我是有底线的' : _d,
      _e = props.finished,
      finished = _e === void 0 ? false : _e,
      className = props.className,
      useWindowScroll = props.useWindowScroll,
      children = props.children,
      footer = props.footer,
      rest = __rest(props, ["dataList", "dataRender", "fetchData", "loadingText", "finishedText", "finished", "className", "useWindowScroll", "children", "footer"]);

  var _f = useState(false),
      loading = _f[0],
      setLoading = _f[1];

  var waypointRef = useRef();
  var wrapRef = useRef();
  var isAtBottom = useInViewport(waypointRef, useWindowScroll ? null : wrapRef);
  var lastIsAtBottom = usePrevious(isAtBottom);
  useImperativeHandle(ref, function () {
    return wrapRef.current;
  });
  useEffect(function () {
    if (!loading && !finished && (!lastIsAtBottom && isAtBottom || isInViewport(waypointRef.current, useWindowScroll ? null : wrapRef.current))) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    }
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom, useWindowScroll]);
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({
    ref: wrapRef
  }, rest, {
    className: clsx('uc-pullup', className, {
      'dom-scroll': !useWindowScroll,
      'window-scroll': useWindowScroll
    })
  }), children, dataList.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: idx
    }, dataRender(item, idx));
  }), /*#__PURE__*/React.createElement("span", {
    className: "waypoint",
    style: {
      fontSize: 0
    },
    ref: waypointRef
  }), typeof footer === 'function' ? footer(loading, finished) : /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }, loading ? loadingText : finished ? finishedText : null));
});
Pullup.displayName = 'UC-Pullup';
export default Pullup;
var templateObject_1;