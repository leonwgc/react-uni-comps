import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import SkeletonElement from './SkeletonElement';
import clsx from 'clsx';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-skeleton');
var StyledSkeleton = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .uc-skeleton-element {\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n  }\n\n  &.", " {\n    display: flex;\n  }\n\n  .", " {\n    flex: 1;\n    margin-left: 16px;\n  }\n"], ["\n  .uc-skeleton-element {\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n  }\n\n  &.", " {\n    display: flex;\n  }\n\n  .", " {\n    flex: 1;\n    margin-left: 16px;\n  }\n"])), getClassName('round'), getClassName('rows'));
/** 骨架屏, 包行两种风格, 基于SkeletonElement封装 */

var Skeleton = function Skeleton(props) {
  var _a;

  var _b = props.rowCount,
      rowCount = _b === void 0 ? 3 : _b,
      _c = props.rowWidth,
      rowWidth = _c === void 0 ? ['40%', '100%', '60%'] : _c,
      _d = props.rowHeight,
      rowHeight = _d === void 0 ? 12 : _d,
      round = props.round,
      className = props.className,
      rest = __rest(props, ["rowCount", "rowWidth", "rowHeight", "round", "className"]);

  if (rowCount < 1) {
    throw new Error('row必须大于等于1,默认4');
  }

  var rowWidthAr = [];

  if (Array.isArray(rowWidth)) {
    if (rowCount <= rowWidth.length) {
      rowWidthAr = rowWidth.slice(0, rowCount);
    } else {
      while (rowWidth.length < rowCount) {
        rowWidth.push('100%');
      }

      rowWidthAr = rowWidth;
    }
  } else {
    rowWidthAr = Array.from(new Array(rowCount), function () {
      return rowWidth;
    });
  }

  return /*#__PURE__*/React.createElement(StyledSkeleton, __assign({}, rest, {
    className: clsx(getClassName(), (_a = {}, _a[getClassName('round')] = round, _a), className)
  }), round && /*#__PURE__*/React.createElement(SkeletonElement, {
    shape: "circle",
    className: "round",
    style: {
      width: round,
      height: round
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: getClassName('rows')
  }, rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React.createElement(SkeletonElement, {
      key: idx,
      shape: "rect",
      style: {
        width: v,
        height: rowHeight
      }
    });
  })));
};

export default Skeleton;
var templateObject_1;