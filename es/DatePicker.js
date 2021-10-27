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

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import clsx from 'clsx';
import Calendar from './Calendar';
import { getThemeColorCss } from './themeHelper';
import Popover from './Popover';
import Input from './Input';
import Popup from './Popup';
import useUpdateEffect from './hooks/useUpdateEffect';
import dayjs from 'dayjs';
var offset = {
  x: 86,
  y: 0
};

var formatDate = function formatDate(v, dateFormat) {
  if (Array.isArray(v)) {
    if (v.length === 2) {
      return dayjs(v[0]).format(dateFormat) + '~' + dayjs(v[1]).format(dateFormat);
    }
  } else {
    return v && dayjs(v).format(dateFormat);
  }
};

var StyledCalendar = styled(Calendar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .uc-calendar {\n    box-shadow: none;\n  }\n"], ["\n  .uc-calendar {\n    box-shadow: none;\n  }\n"]))); // header for mobile

var StyledHeader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  height: 45px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  width: 100%;\n  background-color: #f7f7f7;\n  font-size: 16px;\n  touch-action: none;\n\n  .ok {\n    ", "\n  }\n  .cancel {\n    color: #999;\n  }\n  .title {\n    color: #333;\n  }\n"], ["\n  display: flex;\n  height: 45px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  width: 100%;\n  background-color: #f7f7f7;\n  font-size: 16px;\n  touch-action: none;\n\n  .ok {\n    ", "\n  }\n  .cancel {\n    color: #999;\n  }\n  .title {\n    color: #333;\n  }\n"])), getThemeColorCss('color'));
var StyledToday = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 12px;\n  text-align: right;\n  span {\n    cursor: pointer;\n    ", "\n  }\n"], ["\n  padding: 12px;\n  text-align: right;\n  span {\n    cursor: pointer;\n    ", "\n  }\n"])), getThemeColorCss('color'));
var StyledMobileFooter = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 30px;\n"], ["\n  height: 30px;\n"])));
/** 日期选择  */

var DatePicker = function DatePicker(props) {
  var className = props.className,
      _a = props.okText,
      okText = _a === void 0 ? '确定' : _a,
      _b = props.cancelText,
      cancelText = _b === void 0 ? '取消' : _b,
      _c = props.title,
      title = _c === void 0 ? '日期选择' : _c,
      _d = props.todayText,
      todayText = _d === void 0 ? '今天' : _d,
      value = props.value,
      _onChange = props.onChange,
      onOk = props.onOk,
      style = props.style,
      prefix = props.prefix,
      suffix = props.suffix,
      _e = props.format,
      format = _e === void 0 ? 'YYYY-MM-DD' : _e,
      rest = __rest(props, ["className", "okText", "cancelText", "title", "todayText", "value", "onChange", "onOk", "style", "prefix", "suffix", "format"]);

  var cRef = useRef();

  var _f = useState(false),
      v = _f[0],
      setV = _f[1];

  var _g = useState(value),
      val = _g[0],
      setVal = _g[1];

  var onClose = function onClose() {
    return setV(false);
  };

  useUpdateEffect(function () {
    if (value !== val) {
      setVal(value);
    }
  }, [value]);
  var popHeader = isMobile && /*#__PURE__*/React.createElement(StyledHeader, null, /*#__PURE__*/React.createElement("div", {
    className: "cancel",
    onClick: onClose
  }, cancelText), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ok",
    onClick: function onClick() {
      var v = cRef.current.value;
      onOk === null || onOk === void 0 ? void 0 : onOk(v);
      setVal(v);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, okText));
  var todayFooter = !isMobile && /*#__PURE__*/React.createElement(StyledToday, null, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      setVal(new Date());
      onClose();
    }
  }, todayText));
  var inputRender = /*#__PURE__*/React.createElement(Input, {
    prefix: prefix,
    suffix: suffix,
    className: clsx('uc-datepick', className),
    style: style,
    readOnly: true,
    value: formatDate(val, format),
    onFocus: function onFocus() {
      return setV(true);
    }
  });

  var calendarProps = __assign(__assign({}, rest), {
    value: val,
    ref: cRef
  }); // mobile do't trigger onChange


  return isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, inputRender, /*#__PURE__*/React.createElement(Popup, {
    visible: v,
    onClose: onClose,
    position: "bottom"
  }, /*#__PURE__*/React.createElement(StyledCalendar, __assign({}, calendarProps, {
    header: popHeader,
    footer: /*#__PURE__*/React.createElement(StyledMobileFooter, null)
  })))) : /*#__PURE__*/React.createElement(Popover, {
    onClose: onClose,
    visible: v,
    arrow: false,
    offset: offset,
    closeOnMaskClick: true,
    mask: true,
    maskStyle: {
      backgroundColor: 'transparent'
    },
    content: /*#__PURE__*/React.createElement(StyledCalendar, __assign({}, calendarProps, {
      onChange: function onChange(v) {
        setVal(v);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(v);
        onClose();
      },
      footer: todayFooter
    }))
  }, inputRender);
};

DatePicker.displayName = 'UC-DatePicker';
export default DatePicker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;