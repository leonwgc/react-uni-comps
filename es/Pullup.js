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

import React, { useEffect, useRef, useState } from 'react';
import Spinner from './Spinner';
import Space from './Space';
import useInViewport from 'react-use-lib/es/useInViewport';
import usePrevious from 'react-use-lib/es/usePrevious';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledPullupContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.div-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  > .uc-pullup-footer {\n    padding: 10px 0;\n    display: flex;\n    color: #909090;\n    font-size: 14px;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  &.div-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  > .uc-pullup-footer {\n    padding: 10px 0;\n    display: flex;\n    color: #909090;\n    font-size: 14px;\n    justify-content: center;\n    align-items: center;\n  }\n"]))); // check isInViewport in vertical direction

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
/** 上拉加载更多数据, 注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器 */


var Pullup = function Pullup(props) {
  var _a = props.dataList,
      dataList = _a === void 0 ? [] : _a,
      _b = props.dataRender,
      dataRender = _b === void 0 ? function () {
    return null;
  } : _b,
      fetchData = props.fetchData,
      _c = props.loadingText,
      loadingText = _c === void 0 ? /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Spinner, {
    color: "#909090"
  }), "\u52A0\u8F7D\u4E2D") : _c,
      _d = props.finishedText,
      finishedText = _d === void 0 ? '我是有底线的' : _d,
      _e = props.finished,
      finished = _e === void 0 ? false : _e,
      className = props.className,
      _f = props.useWindowScroll,
      useWindowScroll = _f === void 0 ? true : _f,
      restProps = __rest(props, ["dataList", "dataRender", "fetchData", "loadingText", "finishedText", "finished", "className", "useWindowScroll"]);

  var _g = useState(false),
      loading = _g[0],
      setLoading = _g[1];

  var ref = useRef();
  var wrapRef = useRef();
  var isAtBottom = useInViewport(ref, useWindowScroll ? null : wrapRef);
  var lastIsAtBottom = usePrevious(isAtBottom);
  useEffect(function () {
    if (!loading && !finished && (!lastIsAtBottom && isAtBottom || isInViewport(ref.current, useWindowScroll ? null : wrapRef.current))) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    }
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom, useWindowScroll]);
  return /*#__PURE__*/React.createElement(StyledPullupContainer, __assign({
    className: clsx('uc-pullup-container', className, {
      'div-scroll': !useWindowScroll
    }),
    ref: wrapRef
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "uc-pullup-wrapper"
  }, dataList.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: idx
    }, dataRender(item, idx));
  })), /*#__PURE__*/React.createElement("span", {
    className: "uc-pullup-waypoint",
    style: {
      fontSize: 0
    },
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "uc-pullup-footer"
  }, loading ? loadingText : finished ? finishedText : null));
};

export default Pullup;
var templateObject_1;