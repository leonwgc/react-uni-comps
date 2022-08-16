import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useState, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import useForceUpdate from './hooks/useForceUpdate';
import useMount from './hooks/useMount';
import useEventListener from './hooks/useEventListener';
var getClassName = prefixClassName('uc-sudoku');
var seq = [0, 1, 2, 5, 8, 7, 6, 3]; // turn sequence
// key top-down,left-right ,value: prizeList seq

var map = {
  0: 0,
  1: 1,
  2: 2,
  3: 7,
  5: 3,
  6: 6,
  7: 5,
  8: 4
};
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n\n  .", " {\n    color: #fff;\n    background-color: #005cff;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 31%;\n    margin-bottom: 4px;\n    margin-right: 4px;\n\n    &.active {\n      background-size: 100% 100%;\n      background: rgba(0, 0, 0, 0.1);\n      color: #000;\n      font-weight: bolder;\n    }\n  }\n\n  .", " {\n    font-size: 14px;\n    text-align: center;\n\n    img {\n      width: 35px;\n    }\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .", " {\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n\n  .", " {\n    color: #fff;\n    background-color: #005cff;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 31%;\n    margin-bottom: 4px;\n    margin-right: 4px;\n\n    &.active {\n      background-size: 100% 100%;\n      background: rgba(0, 0, 0, 0.1);\n      color: #000;\n      font-weight: bolder;\n    }\n  }\n\n  .", " {\n    font-size: 14px;\n    text-align: center;\n\n    img {\n      width: 35px;\n    }\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .", " {\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n"])), getClassName('item'), getClassName('prize'), getClassName('pointer'));
/** 9宫格抽奖 */

var Sudoku = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      pointer = props.pointer,
      _a = props.prizeList,
      prizeList = _a === void 0 ? [] : _a,
      _b = props.round,
      round = _b === void 0 ? 30 : _b,
      _c = props.speed,
      speed = _c === void 0 ? 150 : _c,
      onStart = props.onStart,
      onEnd = props.onEnd,
      rest = __rest(props, ["className", "pointer", "prizeList", "round", "speed", "onStart", "onEnd"]);

  var forceUpdate = useForceUpdate();

  var _d = useState(),
      size = _d[0],
      setSize = _d[1];

  var lock = useRef(false); // 转动到的商品的index

  var index = useRef(-1); // 转动次数

  var steps = useRef(0); // 初始速度

  var speedRef = useRef(speed);
  var roundRef = useRef(round);
  var timer = useRef(0);
  var wrapElRef = useRef();
  useImperativeHandle(ref, function () {
    return wrapElRef.current;
  });
  var resize = useCallback(function () {
    var wrapEl = wrapElRef.current;
    var child = wrapEl.firstElementChild;

    if (child) {
      setSize(child.offsetWidth);
    }
  }, []);
  useMount(resize);
  useEventListener(function () {
    return window;
  }, 'resize', resize);

  var rollup = function rollup(winIndex) {
    if (winIndex >= 0 && winIndex < 8) {
      steps.current += 1;
      var idx = index.current;
      var count = seq.length;
      idx += 1;

      if (idx > count - 1) {
        idx = 0;
      }

      index.current = idx;
      forceUpdate();
      getPrize(winIndex);
    }
  };

  var getPrize = function getPrize(winIndex) {
    if (steps.current > roundRef.current && winIndex === index.current) {
      clearTimeout(timer.current); // reset

      index.current = -1;
      timer.current = 0;
      steps.current = 0;
      speedRef.current = speed;
      roundRef.current = round;
      setTimeout(function () {
        index.current = seq[winIndex];
        lock.current = false;
        onEnd === null || onEnd === void 0 ? void 0 : onEnd(winIndex);
      }, 100);
    } else {
      if (steps.current < roundRef.current) {
        speedRef.current -= 4;
      } else {
        speedRef.current += 20;
      } // start to roll


      timer.current = window.setTimeout(function () {
        return rollup(winIndex);
      }, speedRef.current);
    }
  };

  var start = function start() {
    if (!lock.current) {
      lock.current = true;
      onStart(rollup);
    }
  };

  var renderBlock = function renderBlock(index) {
    var item = prizeList[index];
    return /*#__PURE__*/React.createElement("div", {
      className: getClassName('prize')
    }, /*#__PURE__*/React.createElement("div", {
      className: getClassName('img')
    }, /*#__PURE__*/React.createElement("img", {
      alt: "prize",
      src: item.img
    })), /*#__PURE__*/React.createElement("div", {
      className: getClassName('name')
    }, item.name));
  };

  if (!prizeList || prizeList.length !== 8) {
    // bad data
    return null;
  }

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: (getClassName(), className),
    ref: wrapElRef
  }), [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (v) {
    return /*#__PURE__*/React.createElement("div", {
      key: v,
      style: {
        height: size
      },
      className: clsx(getClassName('item'), {
        active: v === seq[index.current]
      })
    }, v === 4 ? /*#__PURE__*/React.createElement("div", {
      className: getClassName('pointer'),
      onClick: start
    }, pointer) : renderBlock(map[v]));
  }));
});
Sudoku.displayName = 'UC-Sudoku';
export default Sudoku;
var templateObject_1;