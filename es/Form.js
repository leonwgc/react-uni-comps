function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

import React, { useContext } from 'react';
import { Field, default as RcForm } from 'rc-field-form';
import clsx from 'clsx';
import Cell from './Cell';
import Space from './Space';
export var defaultContext = {
  layout: 'vertical',
  labelWidth: 80,
  gap: 16
};
export var FormContext = /*#__PURE__*/React.createContext(defaultContext);
/** 表单 */

var Form = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      _a = props.gap,
      gap = _a === void 0 ? 16 : _a,
      _b = props.labelWidth,
      labelWidth = _b === void 0 ? 80 : _b,
      _c = props.requiredMark,
      requiredMark = _c === void 0 ? true : _c,
      _d = props.layout,
      layout = _d === void 0 ? 'vertical' : _d,
      className = props.className,
      rest = __rest(props, ["children", "gap", "labelWidth", "requiredMark", "layout", "className"]);

  return /*#__PURE__*/React.createElement(RcForm, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-form', className)
  }), /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: {
      layout: layout,
      gap: gap,
      labelWidth: labelWidth,
      requiredMark: requiredMark
    }
  }, /*#__PURE__*/React.createElement(Space, {
    direction: layout,
    size: gap,
    style: {
      width: '100%'
    }
  }, children)));
});

var FormItem = function FormItem(props) {
  var _a = useContext(FormContext),
      labelWidth = _a.labelWidth,
      requiredMark = _a.requiredMark;

  var children = props.children,
      label = props.label,
      name = props.name,
      fieldProps = __rest(props, ["children", "label", "name"]);

  var required = false;

  if ('rules' in fieldProps) {
    var rules = fieldProps.rules;

    if (Array.isArray(rules)) {
      required = rules.some(function (rule) {
        if (rule && _typeof(rule) === 'object' && rule.required) {
          return true;
        }

        return false;
      });
    }
  }

  return /*#__PURE__*/React.createElement(Cell, {
    labelWidth: labelWidth,
    label: label,
    required: requiredMark && required
  }, /*#__PURE__*/React.createElement(Field, __assign({
    name: name
  }, fieldProps), children));
};

FormItem.displayName = 'UC-FormItem';
Form.displayName = 'UC-Form';
Form.Item = FormItem;
export default Form;