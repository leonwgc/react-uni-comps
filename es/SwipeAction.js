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

import React, { useRef, useImperativeHandle, useLayoutEffect, useCallback, useEffect } from 'react';
import FingerGestureElement from './FingerGestureElement';
import styled from 'styled-components';
import useThisRef from './hooks/useThisRef';
import * as vars from './vars';
import clsx from 'clsx';
import Button from './Button';
var StyledSwipeAction = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n  position: relative;\n  display: block;\n  overflow: hidden;\n\n  .wrap {\n    transition: transform 0.3s ease-in-out;\n    overflow: visible;\n    display: flex;\n    flex-wrap: nowrap;\n\n    .left-part,\n    .right-part {\n      position: absolute;\n      top: 0;\n      height: 100%;\n    }\n\n    .left-part {\n      left: 0px;\n      transform: translate(-100%);\n    }\n    .right-part {\n      right: 0px;\n      transform: translate(100%);\n    }\n    .center-part {\n      display: block;\n      line-height: 20px;\n      padding: 13px 16px;\n      background: #fff;\n      font-size: 14px;\n      color: #666;\n      box-sizing: border-box;\n    }\n  }\n"], ["\n  user-select: none;\n  position: relative;\n  display: block;\n  overflow: hidden;\n\n  .wrap {\n    transition: transform 0.3s ease-in-out;\n    overflow: visible;\n    display: flex;\n    flex-wrap: nowrap;\n\n    .left-part,\n    .right-part {\n      position: absolute;\n      top: 0;\n      height: 100%;\n    }\n\n    .left-part {\n      left: 0px;\n      transform: translate(-100%);\n    }\n    .right-part {\n      right: 0px;\n      transform: translate(100%);\n    }\n    .center-part {\n      display: block;\n      line-height: 20px;\n      padding: 13px 16px;\n      background: #fff;\n      font-size: 14px;\n      color: #666;\n      box-sizing: border-box;\n    }\n  }\n"])));
var StyledButton = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  color: #fff;\n  font-size: 15px;\n"], ["\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  color: #fff;\n  font-size: 15px;\n"])));
/** SwipeAction 滑动操作 */

var SwipeAction = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.left,
      left = _a === void 0 ? [] : _a,
      _b = props.right,
      right = _b === void 0 ? [] : _b,
      onClose = props.onClose,
      onOpen = props.onOpen,
      _c = props.autoClose,
      autoClose = _c === void 0 ? true : _c,
      _d = props.closeOnClickOutside,
      closeOnClickOutside = _d === void 0 ? true : _d,
      children = props.children;
  var elRef = useRef();
  var thisRef = useThisRef({
    x: 0,
    onClose: onClose,
    onOpen: onOpen,
    closeOnClickOutside: closeOnClickOutside,
    el: null,
    leftEl: null,
    rightEl: null,
    leftWidth: 0,
    rightWidth: 0,
    isOpen: 0
  });
  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useEffect(function () {
    var v = thisRef.current;

    if (v.closeOnClickOutside) {
      var closeHandler_1 = function closeHandler_1(e) {
        if (!v.isOpen) {
          return;
        }

        if (!v.el.contains(e.target)) {
          startTransform('translate3d(0,0,0)', 0);
          v.x = 0;
        }
      };

      window.addEventListener('click', closeHandler_1);
      return function () {
        window.removeEventListener('click', closeHandler_1);
      };
    }
  }, []);
  useLayoutEffect(function () {
    thisRef.current.el = elRef.current;
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;
  }, [thisRef]);
  var startTransform = useCallback(function (transformStr, x) {
    var v = thisRef.current;
    v.x = x;
    v.el.style.transitionProperty = 'transform';
    setTimeout(function () {
      v.el.style.transform = "" + transformStr;
    });
  }, [thisRef]);
  var renderAction = useCallback(function (item, idx) {
    return /*#__PURE__*/React.createElement(StyledButton, {
      onClick: item.onClick,
      key: idx,
      style: {
        backgroundColor: item.color || vars.primary
      }
    }, item.text);
  }, []);
  return /*#__PURE__*/React.createElement(StyledSwipeAction, {
    className: clsx('uc-swipe-action')
  }, /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: elRef,
    onTouchStart: function onTouchStart() {
      thisRef.current.el.style.transitionProperty = 'none';
    },
    onTouchEnd: function onTouchEnd() {
      var _a, _b, _c, _d;

      var v = thisRef.current;

      if (v.x < 0) {
        // open right
        if (Math.abs(v.x) < v.rightWidth / 2) {
          // no more than half way
          startTransform('translate3d(0,0,0)', 0); // v.x = 0;

          if (v.isOpen) {
            (_a = v.onClose) === null || _a === void 0 ? void 0 : _a.call(v, 'right');
            v.isOpen = 0;
          }
        } else {
          startTransform("translate3d(-" + v.rightWidth + "px,0,0)", -1 * v.rightWidth); // v.x = -1 * v.rightWidth;

          if (!v.isOpen) {
            (_b = v.onOpen) === null || _b === void 0 ? void 0 : _b.call(v, 'right');
            v.isOpen = 1;
          }
        }
      } else if (v.x > 0) {
        if (Math.abs(v.x) < v.leftWidth / 2) {
          // no more than half way
          startTransform('translate3d(0,0,0)', 0);
          v.x = 0;

          if (v.isOpen) {
            (_c = v.onClose) === null || _c === void 0 ? void 0 : _c.call(v, 'left');
            v.isOpen = 0;
          }
        } else {
          startTransform("translate3d(" + v.leftWidth + "px,0,0)", v.leftWidth); // v.x = v.leftWidth;

          if (!v.isOpen) {
            (_d = v.onOpen) === null || _d === void 0 ? void 0 : _d.call(v, 'left');
            v.isOpen = 1;
          }
        }
      }
    },
    onPressMove: function onPressMove(e) {
      var v = thisRef.current;
      v.x += e.deltaX; // x<0:swipe left & show right

      if (v.x < 0 && Math.abs(v.x) < v.rightWidth) {
        v.el.style.transform = "translate3d(" + v.x + "px,0,0)";
      } else if (v.x > 0 && Math.abs(v.x) < v.leftWidth) {
        v.el.style.transform = "translate3d(" + v.x + "px,0,0)";
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    onClick: function onClick() {
      if (autoClose) {
        startTransform('translate3d(0,0,0)', 0);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: function ref(_ref) {
      return thisRef.current.leftEl = _ref;
    },
    className: clsx('left-part')
  }, left.map(function (item, idx) {
    return renderAction(item, idx);
  })), /*#__PURE__*/React.createElement("div", {
    className: "center-part"
  }, children), /*#__PURE__*/React.createElement("div", {
    ref: function ref(_ref2) {
      return thisRef.current.rightEl = _ref2;
    },
    className: clsx('right-part')
  }, right.map(function (item, idx) {
    return renderAction(item, idx);
  })))));
});
SwipeAction.displayName = 'UC-SwipeAction';
export default SwipeAction;
var templateObject_1, templateObject_2;