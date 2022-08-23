import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import useMount from './hooks/useMount';
import useForceUpdate from './hooks/useForceUpdate';
var getClassName = prefixClassName('uc-turntable');
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n  .", " {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .", " {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 99;\n    transform: translate(-43.75%, -50%);\n  }\n  .", " {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    width: calc(100% - 20px);\n    font-size: 12px;\n    text-align: center;\n    color: #ff5722;\n  }\n  .", " {\n    position: absolute;\n    left: calc(50% - 30px / 2);\n    top: 60px;\n    width: 30px;\n    height: 30px;\n    img {\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  .", " {\n    position: absolute;\n    left: 25%;\n    top: 0;\n    width: 50%;\n    height: 50%;\n  }\n  .", " {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    transform-origin: center bottom;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n  .", " {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .", " {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 99;\n    transform: translate(-43.75%, -50%);\n  }\n  .", " {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    width: calc(100% - 20px);\n    font-size: 12px;\n    text-align: center;\n    color: #ff5722;\n  }\n  .", " {\n    position: absolute;\n    left: calc(50% - 30px / 2);\n    top: 60px;\n    width: 30px;\n    height: 30px;\n    img {\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  .", " {\n    position: absolute;\n    left: 25%;\n    top: 0;\n    width: 50%;\n    height: 50%;\n  }\n  .", " {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    transform-origin: center bottom;\n  }\n"])), getClassName('inner'), getClassName('pointer'), getClassName('name'), getClassName('img'), getClassName('prize'), getClassName('item'));
var prizeBgColors = ['rgb(255, 231, 149)', 'rgb(255, 247, 223)', 'rgb(255, 231, 149)', 'rgb(255, 247, 223)', 'rgb(255, 231, 149)', 'rgb(255, 247, 223)'];
/** 转盘抽奖 */

var Turntable = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.size,
      size = _a === void 0 ? 300 : _a,
      _b = props.prizeList,
      prizeList = _b === void 0 ? [] : _b,
      _c = props.round,
      round = _c === void 0 ? 5 : _c,
      _d = props.duration,
      duration = _d === void 0 ? 5 : _d,
      pointer = props.pointer,
      _e = props.borderColor,
      borderColor = _e === void 0 ? '#ff9800' : _e,
      onStart = props.onStart,
      onEnd = props.onEnd,
      rest = __rest(props, ["className", "size", "prizeList", "round", "duration", "pointer", "borderColor", "onStart", "onEnd"]); // 用来锁定转盘，避免同时多次点击转动


  var lock = useRef(false); // 开始转动的角度

  var startRotateDegree = useRef(0); // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上

  var rotateAngle = useRef(0);
  var rotateTransition = useRef('');
  var wrapRef = useRef();
  var innerRef = useRef();
  var canvasDomRef = useRef();
  var forceUpdate = useForceUpdate();
  useImperativeHandle(ref, function () {
    return wrapRef.current;
  }); // 根据index计算每一格要旋转的角度的样式

  var getRotateAngle = function getRotateAngle(index) {
    var angle = 360 / prizeList.length * index + 180 / prizeList.length;
    return {
      transform: "rotate(".concat(angle, "deg)")
    };
  };

  useMount(function () {
    var prizeNum = prizeList.length; // 开始绘画

    var canvas = canvasDomRef.current;
    var luckdraw = wrapRef.current;
    var dpr = window.devicePixelRatio || 1;
    dpr = dpr >= 1 ? Math.ceil(dpr) : 1;

    if (canvas && luckdraw) {
      var canvasW = dpr * size; // 画板的高度

      var canvasH = dpr * size; // 画板的宽度

      canvas.width = canvasW;
      canvas.height = canvasH;
      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';
      var ctx = canvas.getContext('2d'); // translate方法重新映射画布上的 (0,0) 位置

      ctx.translate(0, canvasH); // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的

      ctx.rotate(-90 * Math.PI / 180); // 圆环的外圆的半径,可用来调整圆盘大小来适应外部盒子的大小

      var outRadius = canvasW / 2 - 1; // 圆环的内圆的半径

      var innerRadius = 0;
      var baseAngle = Math.PI * 2 / prizeNum; // 每个奖项所占角度数

      ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认色

      ctx.strokeStyle = borderColor; // 设置画图线的颜色

      for (var index = 0; index < prizeNum; index++) {
        var angle = index * baseAngle;

        if (prizeList[index]['color']) {
          ctx.fillStyle = prizeList[index]['color'];
        } else {
          ctx.fillStyle = prizeBgColors[index];
        }

        ctx.beginPath();
        ctx.arc(canvasW * 0.5, canvasH * 0.5, outRadius, angle, angle + baseAngle, false);
        ctx.arc(canvasW * 0.5, canvasH * 0.5, innerRadius, angle + baseAngle, angle, true);
        ctx.stroke();
        ctx.fill();
        ctx.save();
      }

      ctx.scale(dpr, dpr);
    }
  }); // 转动起来

  var rotate = function rotate(index) {
    if (index >= 0 && index < prizeList.length) {
      var rotateAngleValue = startRotateDegree.current + round * 360 + 360 - (180 / prizeList.length + 360 / prizeList.length * index) - startRotateDegree.current % 360;
      startRotateDegree.current = rotateAngleValue;
      rotateAngle.current = "rotate(".concat(rotateAngleValue, "deg)");
      rotateTransition.current = "transform ".concat(duration, "s cubic-bezier(0.250, 0.460, 0.455, 0.995)");
      forceUpdate();
      setTimeout(function () {
        // end
        lock.current = false;
        onEnd === null || onEnd === void 0 ? void 0 : onEnd(index);
      }, duration * 1000 + 500);
    }
  };

  var startTurns = function startTurns() {
    if (lock.current) {
      return false;
    }

    lock.current = true;
    onStart(rotate);
  };

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx(getClassName(), className),
    ref: wrapRef,
    style: {
      width: size,
      height: size
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: getClassName('inner'),
    ref: innerRef,
    style: {
      transform: rotateAngle.current,
      transition: rotateTransition.current
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasDomRef
  }, "\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E"), /*#__PURE__*/React.createElement("div", {
    className: getClassName('prize')
  }, prizeList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: getClassName('item'),
      style: getRotateAngle(index)
    }, /*#__PURE__*/React.createElement("div", {
      className: getClassName('name')
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: getClassName('img')
    }, /*#__PURE__*/React.createElement("img", {
      src: item.img
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: getClassName('pointer'),
    onClick: startTurns
  }, pointer));
});
Turntable.displayName = 'UC-Turntable';
export default Turntable;
var templateObject_1;