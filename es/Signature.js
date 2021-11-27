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

import React, { useRef, useLayoutEffect, useImperativeHandle } from 'react';
import styled from 'styled-components';
import useSigPad from './hooks/useSigPad';
import clsx from 'clsx';
import * as vars from './vars';
var StyledSignature = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n"], ["\n  position: relative;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n"])), vars.border);
/** 签名 */

var Signature = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var padColor = props.padColor,
      penColor = props.penColor,
      className = props.className,
      rest = __rest(props, ["padColor", "penColor", "className"]);

  var elRef = useRef();
  var canvasRef = useRef();

  var _a = useSigPad(canvasRef, {
    useLandscape: false,
    penColor: penColor,
    backgroundColor: padColor
  }),
      padRef = _a.padRef,
      _clear = _a.clear;

  useImperativeHandle(ref, function () {
    return {
      getData: function getData() {
        return padRef.current.toDataURL();
      },
      clear: function clear() {
        _clear();
      }
    };
  });
  useLayoutEffect(function () {
    // read size from container
    canvasRef.current.width = elRef.current.offsetWidth;
    canvasRef.current.height = elRef.current.offsetHeight;
  }, []);
  return /*#__PURE__*/React.createElement(StyledSignature, __assign({}, rest, {
    className: clsx('uc-signature', className),
    ref: elRef
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef
  }));
});
Signature.displayName = 'UC-Signature';
export default Signature;
var templateObject_1;