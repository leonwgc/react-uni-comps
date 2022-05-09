import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import clsx from 'clsx';
var StyledSkeleton = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .uc-skeleton {\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n\n    &:nth-child(2) {\n      margin-top: 20px;\n    }\n  }\n\n  &.avatar {\n    display: flex;\n\n    > .avatar {\n      flex: none;\n    }\n\n    > .rows {\n      flex: 1;\n      margin-left: 16px;\n      padding-top: 8px;\n    }\n  }\n"], ["\n  .uc-skeleton {\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n\n    &:nth-child(2) {\n      margin-top: 20px;\n    }\n  }\n\n  &.avatar {\n    display: flex;\n\n    > .avatar {\n      flex: none;\n    }\n\n    > .rows {\n      flex: 1;\n      margin-left: 16px;\n      padding-top: 8px;\n    }\n  }\n"])));
/** 骨架屏 */

var Skeleton = function Skeleton(props) {
  var _a = props.animated,
      animated = _a === void 0 ? true : _a,
      _b = props.row,
      row = _b === void 0 ? 4 : _b,
      _c = props.rowWidth,
      rowWidth = _c === void 0 ? ['40%', '100%', '100%', '60%'] : _c,
      _d = props.rowHeight,
      rowHeight = _d === void 0 ? 16 : _d,
      avatar = props.avatar,
      _e = props.avatarSize,
      avatarSize = _e === void 0 ? 32 : _e,
      className = props.className,
      children = props.children,
      loading = props.loading,
      rest = __rest(props, ["animated", "row", "rowWidth", "rowHeight", "avatar", "avatarSize", "className", "children", "loading"]);

  if (row < 1) {
    throw new Error('row必须大于等于1,默认4');
  }

  var rowWidthAr = [];

  if (Array.isArray(rowWidth)) {
    if (row <= rowWidth.length) {
      rowWidthAr = rowWidth.slice(0, row);
    } else {
      while (rowWidth.length < row) {
        rowWidth.push('100%');
      }

      rowWidthAr = rowWidth;
    }
  } else {
    rowWidthAr = Array.from(new Array(row), function () {
      return rowWidth;
    });
  }

  return loading ? avatar ? /*#__PURE__*/React.createElement(StyledSkeleton, __assign({}, rest, {
    className: clsx('uc-skeleton', {
      avatar: avatar
    }, className)
  }), /*#__PURE__*/React.createElement(SkeletonBase, {
    animated: animated,
    shape: "circle",
    className: "avatar",
    width: avatarSize,
    height: avatarSize
  }), /*#__PURE__*/React.createElement("div", {
    className: "rows"
  }, rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React.createElement(SkeletonBase, {
      animated: animated,
      key: idx,
      shape: "rect",
      width: v,
      height: rowHeight
    });
  }))) : /*#__PURE__*/React.createElement(StyledSkeleton, __assign({}, rest, {
    className: clsx({
      avatar: avatar
    }, className)
  }), rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React.createElement(SkeletonBase, {
      animated: animated,
      key: idx,
      shape: "rect",
      width: v,
      height: rowHeight
    });
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

export default Skeleton;
var templateObject_1;