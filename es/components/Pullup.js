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
import useInViewport from 'react-use-lib/es/useInViewport';
import usePrevious from 'react-use-lib/es/usePrevious';

var footerRender = function footerRender(isLoading, hasMoreData, spinner, endText, footerStyle) {
  return /*#__PURE__*/React.createElement("div", {
    style: __assign({
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }, footerStyle)
  }, isLoading ? spinner : !hasMoreData ? endText : null);
};

var Pullup = function Pullup(_a) {
  var _b = _a.dataList,
      dataList = _b === void 0 ? [] : _b,
      _c = _a.dataRender,
      dataRender = _c === void 0 ? function () {
    return null;
  } : _c,
      fetchData = _a.fetchData,
      _d = _a.spinner,
      spinner = _d === void 0 ? '加载中...' : _d,
      _e = _a.endText,
      endText = _e === void 0 ? '我是有底线的~' : _e,
      _f = _a.hasMoreData,
      hasMoreData = _f === void 0 ? true : _f,
      footerStyle = _a.footerStyle,
      otherProps = __rest(_a, ["dataList", "dataRender", "fetchData", "spinner", "endText", "hasMoreData", "footerStyle"]);

  var _g = useState(false),
      isLoading = _g[0],
      setLoading = _g[1];

  var ref = useRef();
  var wrapRef = useRef();
  var isAtBottom = useInViewport(ref, wrapRef);
  var lastIsAtBottom = usePrevious(isAtBottom);
  var style = otherProps.style,
      className = otherProps.className;
  useEffect(function () {
    if (!isLoading && isAtBottom && hasMoreData && !lastIsAtBottom) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    }
  }, [isLoading, isAtBottom, hasMoreData, setLoading, fetchData, lastIsAtBottom]);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style,
    ref: wrapRef
  }, dataList.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: idx
    }, dataRender(item, idx));
  }), /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, footerRender(isLoading, hasMoreData, spinner, endText, footerStyle)));
};

export default Pullup;