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

import React, { useRef, useImperativeHandle, useLayoutEffect } from 'react';
import useUpdateLayoutEffect from './hooks/useUpdateLayoutEffect';
import clsx from 'clsx';
import QRCodeMaker from './tp/QRCode';
/** 二维码 */

var QRCode = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var text = props.text,
      _a = props.colorDark,
      colorDark = _a === void 0 ? '#000' : _a,
      _b = props.colorLight,
      colorLight = _b === void 0 ? '#fff' : _b,
      _c = props.size,
      size = _c === void 0 ? 128 : _c,
      className = props.className,
      style = props.style,
      rest = __rest(props, ["text", "colorDark", "colorLight", "size", "className", "style"]);

  var domRef = useRef();
  var qrRef = useRef();
  useImperativeHandle(ref, function () {
    return domRef.current;
  });
  useLayoutEffect(function () {
    qrRef.current = new QRCodeMaker(domRef.current, {
      text: text,
      width: size,
      height: size,
      colorDark: colorDark,
      colorLight: colorLight,
      correctLevel: QRCodeMaker.CorrectLevel.H
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useUpdateLayoutEffect(function () {
    if (qrRef.current) {
      qrRef.current.makeCode(text);
    }

    return function () {
      return qrRef.current.clear();
    };
  }, [text]);
  return /*#__PURE__*/React.createElement("div", __assign({}, rest, {
    ref: domRef,
    className: clsx('uc-qrcode', className),
    style: __assign({
      width: size,
      height: size
    }, style)
  }));
});
QRCode.displayName = 'UC-QRCode';
export default QRCode;