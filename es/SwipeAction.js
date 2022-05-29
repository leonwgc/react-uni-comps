import { __makeTemplateObject } from "tslib";
import React, { useRef, useLayoutEffect, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as vars from './vars';
import clsx from 'clsx';
import Button from './Button';
import Touch from 'w-touch';
import useClickAway from './hooks/useClickAway';
var StyledSwipeAction = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  cursor: grab;\n  box-sizing: border-box;\n\n  .wrap {\n    transition: transform 0.3s ease-in-out;\n    overflow: visible;\n    display: flex;\n    flex-wrap: nowrap;\n\n    .left-part,\n    .right-part {\n      position: absolute;\n      top: 0;\n      height: 100%;\n    }\n\n    .left-part {\n      left: 0px;\n      transform: translate3d(-100%, 0, 0);\n    }\n    .right-part {\n      right: 0px;\n      transform: translate3d(100%, 0, 0);\n    }\n    .middle-part {\n      width: 100%;\n      box-sizing: border-box;\n      position: relative;\n      height: 44px;\n      padding: 0 16px;\n      display: flex;\n      align-items: center;\n      background: #fff;\n      color: #666;\n      box-sizing: border-box;\n    }\n\n    .swipe-action-item {\n      * {\n        pointer-events: none;\n      }\n    }\n  }\n"], ["\n  user-select: none;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  cursor: grab;\n  box-sizing: border-box;\n\n  .wrap {\n    transition: transform 0.3s ease-in-out;\n    overflow: visible;\n    display: flex;\n    flex-wrap: nowrap;\n\n    .left-part,\n    .right-part {\n      position: absolute;\n      top: 0;\n      height: 100%;\n    }\n\n    .left-part {\n      left: 0px;\n      transform: translate3d(-100%, 0, 0);\n    }\n    .right-part {\n      right: 0px;\n      transform: translate3d(100%, 0, 0);\n    }\n    .middle-part {\n      width: 100%;\n      box-sizing: border-box;\n      position: relative;\n      height: 44px;\n      padding: 0 16px;\n      display: flex;\n      align-items: center;\n      background: #fff;\n      color: #666;\n      box-sizing: border-box;\n    }\n\n    .swipe-action-item {\n      * {\n        pointer-events: none;\n      }\n    }\n  }\n"])));
var StyledButton = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  color: #fff;\n  font-size: 15px;\n"], ["\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  color: #fff;\n  font-size: 15px;\n"])));
/** SwipeAction 滑动操作 */

var SwipeAction = function SwipeAction(props) {
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

  var _e = useState(false),
      isOpen = _e[0],
      setIsOpen = _e[1];

  var thisRef = useRef({
    x: 0,
    el: null,
    leftEl: null,
    rightEl: null,
    leftWidth: 0,
    rightWidth: 0
  });
  useEffect(function () {
    if (isOpen) {
      onOpen === null || onOpen === void 0 ? void 0 : onOpen();
    } else {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, [isOpen, onOpen, onClose]);
  var startTransform = useCallback(function (transformStr, x) {
    var v = thisRef.current;
    v.x = x;
    v.el.style.transitionProperty = 'transform';
    v.el.style.transform = "".concat(transformStr);
  }, []);
  useClickAway(elRef, function () {
    if (closeOnClickOutside) {
      startTransform('translate3d(0,0,0)', 0);
      setIsOpen(false);
    }
  });
  useLayoutEffect(function () {
    thisRef.current.el = elRef.current;
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;
  }, [thisRef]);
  var renderAction = useCallback(function (item, idx) {
    return /*#__PURE__*/React.createElement(StyledButton, {
      onClick: item.onClick,
      key: idx,
      className: "swipe-action-item",
      style: {
        backgroundColor: item.color || vars.primary
      }
    }, item.text);
  }, []);
  useLayoutEffect(function () {
    var el = elRef.current;
    var fg = new Touch(el, {
      onPressMove: function onPressMove(e) {
        var v = thisRef.current;
        v.x += e.deltaX; // x<0:swipe left & show right

        if (v.x < 0 && Math.abs(v.x) < v.rightWidth) {
          v.el.style.transform = "translate3d(".concat(v.x, "px,0,0)");
        } else if (v.x > 0 && Math.abs(v.x) < v.leftWidth) {
          v.el.style.transform = "translate3d(".concat(v.x, "px,0,0)");
        }
      },
      onTouchStart: function onTouchStart() {
        thisRef.current.el.style.transitionProperty = 'none';
      },
      onTouchEnd: function onTouchEnd() {
        var v = thisRef.current;

        if (v.x < 0) {
          // open right
          if (Math.abs(v.x) < v.rightWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            setIsOpen(false);
          } else {
            startTransform("translate3d(-".concat(v.rightWidth, "px,0,0)"), -1 * v.rightWidth);
            setIsOpen(true);
          }
        } else if (v.x > 0) {
          if (Math.abs(v.x) < v.leftWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            v.x = 0;
            setIsOpen(false);
          } else {
            startTransform("translate3d(".concat(v.leftWidth, "px,0,0)"), v.leftWidth);
            setIsOpen(true);
          }
        }
      }
    });
    return function () {
      fg === null || fg === void 0 ? void 0 : fg.destroy();
    };
  }, [startTransform]);
  return /*#__PURE__*/React.createElement(StyledSwipeAction, {
    className: clsx('uc-swipe-action')
  }, /*#__PURE__*/React.createElement("div", {
    ref: elRef,
    className: "wrap",
    onClick: function onClick(e) {
      var _a, _b;

      if (autoClose && ((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.contains('swipe-action-item'))) {
        startTransform('translate3d(0,0,0)', 0);
        setIsOpen(false);
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
    className: "middle-part"
  }, children), /*#__PURE__*/React.createElement("div", {
    ref: function ref(_ref2) {
      return thisRef.current.rightEl = _ref2;
    },
    className: clsx('right-part')
  }, right.map(function (item, idx) {
    return renderAction(item, idx);
  }))));
};

SwipeAction.displayName = 'UC-SwipeAction';
export default SwipeAction;
var templateObject_1, templateObject_2;