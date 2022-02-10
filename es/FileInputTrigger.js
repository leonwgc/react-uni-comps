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

import React, { useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledFileInputTrigger = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n\n  &.disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n\n  &.disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"])));
/** 触发文件上传 */

var FileInputTrigger = function FileInputTrigger(props) {
  var inputRef = useRef();

  var _onChange = props.onChange,
      disabled = props.disabled,
      multiple = props.multiple,
      accept = props.accept,
      capture = props.capture,
      children = props.children,
      className = props.className,
      rest = __rest(props, ["onChange", "disabled", "multiple", "accept", "capture", "children", "className"]);

  return /*#__PURE__*/React.createElement(StyledFileInputTrigger, __assign({}, rest, {
    onClick: function onClick() {
      inputRef.current.value = '';
      inputRef.current.click();
    },
    className: clsx('uc-file-input-trigger', className, {
      disabled: disabled
    })
  }), /*#__PURE__*/React.createElement("input", {
    style: {
      display: 'none'
    },
    type: "file",
    ref: inputRef,
    accept: accept,
    multiple: multiple,
    capture: capture,
    disabled: disabled,
    onChange: function onChange(e) {
      e.preventDefault();
      e.stopPropagation();

      if (e.target.files && typeof _onChange === 'function') {
        _onChange(e.target.files);
      }
    }
  }), children);
};

export default FileInputTrigger;
var templateObject_1;