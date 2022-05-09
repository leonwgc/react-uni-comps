import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledFileInputTrigger = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n\n  &.disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n\n  &.disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"])));
/** 触发文件上传 */

var FileInputTrigger = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var inputRef = useRef();

  var _onChange = props.onChange,
      disabled = props.disabled,
      multiple = props.multiple,
      accept = props.accept,
      capture = props.capture,
      children = props.children,
      className = props.className,
      rest = __rest(props, ["onChange", "disabled", "multiple", "accept", "capture", "children", "className"]);

  useImperativeHandle(ref, function () {
    return inputRef.current;
  });
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
});
FileInputTrigger.displayName = 'UC-FileInputTrigger';
export default FileInputTrigger;
var templateObject_1;