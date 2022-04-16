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

import React, { useLayoutEffect, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Space from './Space';
import useForceUpdate from './hooks/useForceUpdate';
import { throttle } from './helper';
import { nanoid } from 'nanoid';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n\n  .uc-masonry-col {\n    display: flex;\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n\n  .uc-masonry-col {\n    display: flex;\n    flex-direction: column;\n  }\n"])));
/** 瀑布流布局 */

var Masonry = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      _a = props.columnGap,
      columnGap = _a === void 0 ? 10 : _a,
      _b = props.rowGap,
      rowGap = _b === void 0 ? 10 : _b,
      _c = props.columnCount,
      columnCount = _c === void 0 ? 2 : _c,
      rest = __rest(props, ["className", "children", "columnGap", "rowGap", "columnCount"]);

  var wrapElRef = useRef();
  useImperativeHandle(ref, function () {
    return wrapElRef.current;
  });
  var forceUpdate = useForceUpdate();
  var colRef = useRef({
    colWidth: 'auto'
  });
  useLayoutEffect(function () {
    var getColWidth = function getColWidth() {
      var wrapEl = wrapElRef.current;

      if (wrapEl) {
        colRef.current.colWidth = (wrapEl.offsetWidth - (columnCount - 1) * columnGap) / columnCount;
        forceUpdate();
      }
    };

    getColWidth();
    var tGetColWidth = throttle(getColWidth);
    window.addEventListener('resize', tGetColWidth);
    return function () {
      window.removeEventListener('resize', tGetColWidth);
    };
  }, [columnCount, columnGap, forceUpdate]);
  var columnCountArr = new Array(columnCount);
  var items = React.Children.toArray(children);

  for (var i = 0; i < items.length; i++) {
    var colIndex = i % columnCount;

    if (!columnCountArr[colIndex]) {
      columnCountArr[colIndex] = [];
    }

    columnCountArr[colIndex].push(items[i]);
  }

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({
    ref: wrapElRef
  }, rest, {
    className: clsx(className, 'uc-masonry')
  }), /*#__PURE__*/React.createElement(Space, {
    align: "flex-start",
    className: "uc-masonry-col-wrap",
    size: columnGap
  }, columnCountArr.map(function (items, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "uc-masonry-col",
      key: i,
      style: {
        width: colRef.current.colWidth
      }
    }, items.map(function (item) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.key || nanoid(),
        className: clsx('uc-masonry-item'),
        style: {
          marginBottom: rowGap
        }
      }, item);
    }));
  })));
});
Masonry.displayName = 'UC-Masonry';
export default Masonry;
var templateObject_1;