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

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors'; // import { isSupportStyleValue, isBrowser } from './dom';

import { useRef } from 'react';
import Waypoint from './Waypoint';
var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .uc-indexbar-side {\n    position: fixed;\n    top: 50%;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    transform: translateY(-50%);\n    cursor: pointer;\n    user-select: none;\n\n    .uc-indexbar-side-item {\n      padding: 0 8px 0 16px;\n      font-weight: 500;\n      font-size: 10px;\n      line-height: 14px;\n\n      &.active {\n        color: ", ";\n      }\n    }\n  }\n\n  .bar-title {\n    /* position: sticky; */\n    top: 0;\n    z-index: 1;\n    box-sizing: border-box;\n    color: #333;\n    font-size: 14px;\n    padding: 8px 16px;\n    background-color: #f5f5f5;\n    &.active {\n      color: ", ";\n    }\n  }\n\n  .bar-item {\n    color: #666;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 10px 16px;\n    overflow: hidden;\n    font-size: 14px;\n    background-color: #fff;\n    position: relative;\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n\n      border-bottom: 1px solid #e0e0e0;\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n"], ["\n  .uc-indexbar-side {\n    position: fixed;\n    top: 50%;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    transform: translateY(-50%);\n    cursor: pointer;\n    user-select: none;\n\n    .uc-indexbar-side-item {\n      padding: 0 8px 0 16px;\n      font-weight: 500;\n      font-size: 10px;\n      line-height: 14px;\n\n      &.active {\n        color: ", ";\n      }\n    }\n  }\n\n  .bar-title {\n    /* position: sticky; */\n    top: 0;\n    z-index: 1;\n    box-sizing: border-box;\n    color: #333;\n    font-size: 14px;\n    padding: 8px 16px;\n    background-color: #f5f5f5;\n    &.active {\n      color: ", ";\n    }\n  }\n\n  .bar-item {\n    color: #666;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 10px 16px;\n    overflow: hidden;\n    font-size: 14px;\n    background-color: #fff;\n    position: relative;\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n\n      border-bottom: 1px solid #e0e0e0;\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n"])), function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return color;
});

var setActiveIndex = function setActiveIndex(containerRef, setIndex) {
  var els = __spreadArray([], containerRef.current.querySelectorAll('.wp'));

  for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
    var el = els_1[_i];

    if (el.dataset.visible === '1') {
      setIndex(Number(el.dataset.index));
      break;
    }
  }
};

var renderItem = function renderItem(item, index, activeIndex, setIndex, containerRef, onChange) {
  var label = item.label,
      _a = item.subItems,
      subItems = _a === void 0 ? [] : _a;
  return /*#__PURE__*/React.createElement(React.Fragment, {
    key: index
  }, /*#__PURE__*/React.createElement("dt", {
    id: "index-bar-" + index,
    className: clsx('bar-title', {
      active: activeIndex === index
    })
  }, label, /*#__PURE__*/React.createElement(Waypoint, {
    className: "wp",
    "data-index": index,
    onVisible: function onVisible(p) {
      p.dataset.visible = '1';
      setActiveIndex(containerRef, setIndex);
    },
    onInVisible: function onInVisible(p) {
      p.dataset.visible = '0';
      setActiveIndex(containerRef, setIndex);
    }
  })), subItems.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("dt", {
      className: "bar-item",
      onClick: function onClick() {
        if (typeof onChange === 'function') {
          onChange(item);
        }
      },
      key: idx,
      "data-value": item.value
    }, item.label);
  }));
};
/** 索引列表 */


var IndexBar = function IndexBar(props) {
  var _a = props.data,
      data = _a === void 0 ? [] : _a,
      _b = props.color,
      color = _b === void 0 ? colors.primary : _b,
      onChange = props.onChange;
  var ref = useRef();

  var _c = useState(0),
      index = _c[0],
      setIndex = _c[1];

  return /*#__PURE__*/React.createElement(StyledContainer, {
    className: clsx('uc-indexbar'),
    color: color,
    ref: ref
  }, /*#__PURE__*/React.createElement("dl", null, data.map(function (item, idx) {
    return renderItem(item, idx, index, setIndex, ref, onChange);
  })), /*#__PURE__*/React.createElement("div", {
    className: "uc-indexbar-side"
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      className: clsx('uc-indexbar-side-item', {
        active: idx === index
      }),
      key: idx,
      onClick: function onClick() {
        var el = ref.current.querySelector('#index-bar-' + idx);
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, item.label);
  })));
};

IndexBar.displayName = 'uc-indexbar';
export default IndexBar;
var templateObject_1;