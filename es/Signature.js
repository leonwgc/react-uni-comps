import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import useSigPad from './hooks/useSigPad';
import clsx from 'clsx';
import * as vars from './vars';
import useIsomorphicLayoutEffect from './hooks/useisomorphicLayoutEffect';
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
      _clear = _a.clear,
      download = _a.download;

  useImperativeHandle(ref, function () {
    return {
      getData: function getData() {
        return padRef.current.toDataURL();
      },
      clear: function clear() {
        _clear();
      },
      download: download
    };
  });
  useIsomorphicLayoutEffect(function () {
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