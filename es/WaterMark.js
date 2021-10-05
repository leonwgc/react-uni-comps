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

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
var StyledWaterMark = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  pointer-events: none;\n  background-repeat: repeat;\n"], ["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  pointer-events: none;\n  background-repeat: repeat;\n"])));
/** 图片/文字水印 */

var WaterMark = function WaterMark(props) {
  var style = props.style,
      className = props.className,
      _a = props.zIndex,
      zIndex = _a === void 0 ? 2000 : _a,
      _b = props.gapX,
      gapX = _b === void 0 ? 24 : _b,
      _c = props.gapY,
      gapY = _c === void 0 ? 48 : _c,
      _d = props.width,
      width = _d === void 0 ? 120 : _d,
      _e = props.height,
      height = _e === void 0 ? 64 : _e,
      _f = props.rotate,
      rotate = _f === void 0 ? -22 : _f,
      image = props.image,
      _g = props.imageWidth,
      imageWidth = _g === void 0 ? 120 : _g,
      _h = props.imageHeight,
      imageHeight = _h === void 0 ? 64 : _h,
      content = props.content,
      _j = props.fontStyle,
      fontStyle = _j === void 0 ? 'normal' : _j,
      _k = props.fontWeight,
      fontWeight = _k === void 0 ? 'normal' : _k,
      _l = props.fontColor,
      fontColor = _l === void 0 ? 'rgba(0,0,0,.15)' : _l,
      _m = props.fontSize,
      fontSize = _m === void 0 ? 14 : _m,
      _o = props.fontFamily,
      fontFamily = _o === void 0 ? 'sans-serif' : _o;

  var _p = useState(''),
      base64Url = _p[0],
      setBase64Url = _p[1];

  useEffect(function () {
    var canvas = document.createElement('canvas');
    var ratio = window.devicePixelRatio;
    var ctx = canvas.getContext('2d');
    var canvasWidth = (gapX + width) * ratio + "px";
    var canvasHeight = (gapY + height) * ratio + "px";
    var markWidth = width * ratio;
    var markHeight = height * ratio;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var img_1 = new Image();
        img_1.crossOrigin = 'anonymous';
        img_1.referrerPolicy = 'no-referrer';
        img_1.src = image;

        img_1.onload = function () {
          ctx.drawImage(img_1, -imageWidth * ratio / 2, -imageHeight * ratio / 2, imageWidth * ratio, imageHeight * ratio);
          ctx.restore();
          setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center'; // 文字绕中间旋转

        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var markSize = Number(fontSize) * ratio;
        ctx.font = fontStyle + " normal " + fontWeight + " " + markSize + "px/" + markHeight + "px " + fontFamily;
        ctx.fillStyle = fontColor;
        ctx.fillText(content, 0, 0);
        ctx.restore();
        setBase64Url(canvas.toDataURL());
      }
    } else {
      throw new Error('当前环境不支持Canvas');
    }
  }, [gapX, gapY, rotate, fontStyle, fontWeight, width, height, fontFamily, fontColor, image, content, fontSize, imageHeight, imageWidth]);
  return /*#__PURE__*/React.createElement(StyledWaterMark, {
    className: clsx('uc-watermark', className),
    style: __assign({
      zIndex: zIndex,
      backgroundSize: gapX + width + "px",
      backgroundImage: "url('" + base64Url + "')"
    }, style)
  });
};

WaterMark.displayName = 'UC-WaterMark';
export default WaterMark;
var templateObject_1;