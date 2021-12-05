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

import * as React from 'react';
import { toArray } from './util';
import styled from 'styled-components';
import { detectFlexGapSupported } from './dom';
import clsx from 'clsx';

function SpaceItem(_a) {
  var _b;

  var className = _a.className,
      direction = _a.direction,
      index = _a.index,
      marginDirection = _a.marginDirection,
      children = _a.children,
      split = _a.split,
      wrap = _a.wrap;

  var _c = React.useContext(SpaceContext),
      horizontalSize = _c.horizontalSize,
      verticalSize = _c.verticalSize,
      latestIndex = _c.latestIndex,
      supportFlexGap = _c.supportFlexGap;

  var style = {};

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = {
          marginBottom: horizontalSize / (split ? 2 : 1)
        };
      }
    } else {
      style = __assign(__assign({}, index < latestIndex && (_b = {}, _b[marginDirection] = horizontalSize / (split ? 2 : 1), _b)), wrap && {
        paddingBottom: verticalSize
      });
    }
  }

  if (children === null || children === undefined) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/React.createElement("span", {
    className: "".concat(className, "-split"),
    style: style
  }, split));
}

var SpaceContext = /*#__PURE__*/React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
});
var flexDirectionMap = {
  horizontal: 'row',
  vertical: 'column'
};
var StyledSpace = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-direction: ", ";\n  align-items: ", ";\n"], ["\n  display: inline-flex;\n  flex-direction: ", ";\n  align-items: ", ";\n"])), function (_a) {
  var direction = _a.direction;
  return flexDirectionMap[direction];
}, function (_a) {
  var align = _a.align;
  return align;
});
/** 间距容器,参考 https://ant.design/components/space-cn/ */

var Space = function Space(props) {
  var _a = props.size,
      size = _a === void 0 ? 8 : _a,
      align = props.align,
      className = props.className,
      children = props.children,
      _b = props.direction,
      direction = _b === void 0 ? 'horizontal' : _b,
      split = props.split,
      style = props.style,
      _c = props.wrap,
      wrap = _c === void 0 ? false : _c,
      otherProps = __rest(props, ["size", "align", "className", "children", "direction", "split", "style", "wrap"]);

  var supportFlexGap = detectFlexGapSupported();

  var _d = React.useMemo(function () {
    return Array.isArray(size) ? size : [size, size];
  }, [size]),
      horizontalSize = _d[0],
      verticalSize = _d[1];

  var childNodes = toArray(children);
  var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  var marginDirection = 'marginRight'; // Calculate latest one

  var latestIndex = 0;
  var nodes = childNodes.map(function (child, i) {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    /* eslint-disable react/no-array-index-key */


    return /*#__PURE__*/React.createElement(SpaceItem, {
      className: className,
      key: i,
      direction: direction,
      index: i,
      marginDirection: marginDirection,
      split: split,
      wrap: wrap
    }, child);
    /* eslint-enable */
  });
  var spaceContext = React.useMemo(function () {
    return {
      horizontalSize: horizontalSize,
      verticalSize: verticalSize,
      latestIndex: latestIndex,
      supportFlexGap: supportFlexGap
    };
  }, [horizontalSize, verticalSize, latestIndex, supportFlexGap]);

  if (childNodes.length === 0) {
    return null;
  }

  var gapStyle = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap';

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }

  return /*#__PURE__*/React.createElement(StyledSpace, __assign({
    direction: direction,
    align: mergedAlign,
    className: clsx(className, 'uc-space'),
    style: __assign(__assign({}, gapStyle), style)
  }, otherProps), /*#__PURE__*/React.createElement(SpaceContext.Provider, {
    value: spaceContext
  }, nodes));
};

Space.displayName = 'UC-Space';
export default Space;
var templateObject_1;