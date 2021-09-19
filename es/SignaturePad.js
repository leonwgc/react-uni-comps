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
import useSigPad from 'react-use-lib/es/useSigPad';
import clsx from 'clsx';
import * as colors from './colors';
var StyledSignaturePad = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  &.landscape {\n    transform: translate(-50%, -50%) rotate(90deg);\n  }\n"], ["\n  position: relative;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  &.landscape {\n    transform: translate(-50%, -50%) rotate(90deg);\n  }\n"])), colors.border);
/** 签名面板 */

var SignaturePad = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var padColor = props.padColor,
      penColor = props.penColor,
      _a = props.landscape,
      landscape = _a === void 0 ? false : _a,
      className = props.className,
      rest = __rest(props, ["padColor", "penColor", "landscape", "className"]);

  var elRef = useRef();
  var canvasRef = useRef();

  var _b = useSigPad(canvasRef, {
    useLandscape: !!landscape,
    penColor: penColor,
    backgroundColor: padColor
  }),
      padRef = _b.padRef,
      _clear = _b.clear;

  useImperativeHandle(ref, function () {
    return {
      getDataUrl: function getDataUrl() {
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
  return /*#__PURE__*/React.createElement(StyledSignaturePad, __assign({}, rest, {
    className: clsx('uc-sigpad', className, {
      landscape: landscape,
      portrait: !landscape
    }),
    ref: elRef
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef
  }));
});
SignaturePad.displayName = 'UC-SignaturePad';
export default SignaturePad;
var templateObject_1;