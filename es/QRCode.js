import { __assign, __rest } from "tslib";
import React, { useRef, useImperativeHandle, useLayoutEffect } from 'react';
import useUpdateLayoutEffect from './hooks/useUpdateLayoutEffect';
import clsx from 'clsx';
import WQRCode from 'w-qrcode';
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
    qrRef.current = new WQRCode(domRef.current, {
      text: text,
      width: size,
      height: size,
      colorDark: colorDark,
      colorLight: colorLight,
      correctLevel: WQRCode.CorrectLevel.H
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