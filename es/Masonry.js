import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Space from './Space';
import useForceUpdate from './hooks/useForceUpdate';
import { throttle } from './helper';
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect';
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
  useIsomorphicLayoutEffect(function () {
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
    }, items.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.key || idx,
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