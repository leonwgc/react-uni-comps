import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import useMount from './hooks/useMount';
import useForceUpdate from './hooks/useForceUpdate';
var getClassName = prefixClassName('uc-turntable');
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  overflow: hidden;\n  .pointer {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 99;\n    transform: translate(-43.75%, -50%);\n  }\n  .drawTable-name {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    width: calc(100% - 20px);\n    font-size: 12px;\n    text-align: center;\n    color: #ff5722;\n  }\n  .drawTable-img {\n    position: absolute;\n    left: calc(50% - 30px / 2);\n    top: 60px;\n    width: 30px;\n    height: 30px;\n    img {\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  .turntable {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    #canvasWx {\n      width: 200%;\n      height: 100%;\n    }\n    .mlcanvas {\n      margin-left: -50%;\n    }\n  }\n  .prize {\n    position: absolute;\n    left: 25%;\n    top: 0;\n    width: 50%;\n    height: 50%;\n    .item {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      transform-origin: center bottom;\n    }\n  }\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  overflow: hidden;\n  .pointer {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 99;\n    transform: translate(-43.75%, -50%);\n  }\n  .drawTable-name {\n    position: absolute;\n    left: 10px;\n    top: 20px;\n    width: calc(100% - 20px);\n    font-size: 12px;\n    text-align: center;\n    color: #ff5722;\n  }\n  .drawTable-img {\n    position: absolute;\n    left: calc(50% - 30px / 2);\n    top: 60px;\n    width: 30px;\n    height: 30px;\n    img {\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  .turntable {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    #canvasWx {\n      width: 200%;\n      height: 100%;\n    }\n    .mlcanvas {\n      margin-left: -50%;\n    }\n  }\n  .prize {\n    position: absolute;\n    left: 25%;\n    top: 0;\n    width: 50%;\n    height: 50%;\n    .item {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      transform-origin: center bottom;\n    }\n  }\n"])));
var prizeBgColors = ['rgb(255, 231, 149)', 'rgb(255, 247, 223)', 'rgb(255, 231, 149)', 'rgb(255, 247, 223)', 'rgb(255, 231, 149)', 'rgb(255, 247, 223)'];
/** turntable */

var Turntable = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.width,
      width = _a === void 0 ? 300 : _a,
      _b = props.height,
      height = _b === void 0 ? 300 : _b,
      _c = props.prizeList,
      prizeList = _c === void 0 ? [] : _c,
      _d = props.turnsNumber,
      turnsNumber = _d === void 0 ? 5 : _d,
      _e = props.turnsTime,
      turnsTime = _e === void 0 ? 5 : _e,
      pointer = props.pointer,
      _f = props.borderColor,
      borderColor = _f === void 0 ? '#ff9800' : _f,
      onStart = props.onStart,
      onEnd = props.onEnd,
      _g = props.times,
      times = _g === void 0 ? 1 : _g,
      onNoTimes = props.onNoTimes,
      rest = __rest(props, ["className", "width", "height", "prizeList", "turnsNumber", "turnsTime", "pointer", "borderColor", "onStart", "onEnd", "times", "onNoTimes"]); // 用来锁定转盘，避免同时多次点击转动


  var lock = useRef(false); // 剩余抽奖次数

  var num = useRef(times); // 开始转动的角度

  var startRotateDegree = useRef(0); // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上

  var rotateAngle = useRef(0);
  var rotateTransition = useRef('');
  var wrapRef = useRef();
  var innerRef = useRef();
  var canvasDomRef = useRef();
  var turnIndex = useRef(-1); // 保持结果

  var forceUpdate = useForceUpdate(); // 根据index计算每一格要旋转的角度的样式

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

    if (canvas && luckdraw) {
      var ctx = canvas.getContext('2d');

      if (ctx) {
        var canvasW = canvas.width = luckdraw.clientWidth; // 画板的高度

        var canvasH = canvas.height = luckdraw.clientHeight; // 画板的宽度
        // translate方法重新映射画布上的 (0,0) 位置

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
            ctx.fillStyle = prizeList[index]['color']; //设置每个扇形区域的颜色,根据每条数据中单独设置的优先
          } else {
            ctx.fillStyle = prizeBgColors[index]; //设置每个扇形区域的颜色
          }

          ctx.beginPath(); //开始绘制
          // 标准圆弧：arc(x,y,radius,startAngle,endAngle,anticlockwise)

          ctx.arc(canvasW * 0.5, canvasH * 0.5, outRadius, angle, angle + baseAngle, false);
          ctx.arc(canvasW * 0.5, canvasH * 0.5, innerRadius, angle + baseAngle, angle, true);
          ctx.stroke();
          ctx.fill();
          ctx.save();
        }
      }
    }
  }); // 判断是否可以转动

  var canBeRotated = function canBeRotated() {
    if (lock.current) {
      return false;
    }

    if (num.current <= 0) {
      onNoTimes === null || onNoTimes === void 0 ? void 0 : onNoTimes();
      return false;
    }

    return true;
  };

  var startTurns = function startTurns() {
    if (!canBeRotated()) {
      return false;
    }

    lock.current = true; // 设置在哪里停下，与后台交互，
    // const index = Math.floor(Math.random() * prizeList.length);

    turnIndex.current = -1; // reset

    onStart().then(function (index) {
      turnIndex.current = index;
      num.current--;
      rotate(index);
    });
  }; // 转动起来


  var rotate = function rotate(index) {
    var turnsTimeNum = turnsTime;
    var rotateAngleValue = startRotateDegree.current + turnsNumber * 360 + 360 - (180 / prizeList.length + 360 / prizeList.length * index) - startRotateDegree.current % 360;
    startRotateDegree.current = rotateAngleValue;
    rotateAngle.current = "rotate(".concat(rotateAngleValue, "deg)");
    rotateTransition.current = "transform ".concat(turnsTimeNum, "s cubic-bezier(0.250, 0.460, 0.455, 0.995)");
    forceUpdate();
    setTimeout(function () {
      // end
      lock.current = false;
      onEnd === null || onEnd === void 0 ? void 0 : onEnd(turnIndex.current);
    }, turnsTimeNum * 1000 + 500);
  };

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx(getClassName(), className),
    ref: wrapRef,
    style: {
      width: width,
      height: height
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "turntable",
    ref: innerRef,
    style: {
      transform: rotateAngle.current,
      transition: rotateTransition.current
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    id: "canvas",
    ref: canvasDomRef
  }, "\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E"), /*#__PURE__*/React.createElement("div", {
    className: "prize"
  }, prizeList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "item",
      style: getRotateAngle(index)
    }, /*#__PURE__*/React.createElement("div", {
      className: "drawTable-name"
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: "drawTable-img"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.img
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pointer",
    onClick: startTurns
  }, pointer));
});
Turntable.displayName = 'UC-Turntable';
export default Turntable;
var templateObject_1;