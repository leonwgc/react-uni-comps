import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef } from 'react';
import styled from 'styled-components';
import { TouchElement } from 'w-touch';
import clsx from 'clsx';
import { getThemeColorCss } from './themeHelper';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  color:#fff;\n  overflow: hidden;\n  cursor: pointer;\n  user-select: none;\n  touch-action: none;\n  transition: all 0.15s ease;\n  -webkit-tap-highlight-color: transparent;\n"], ["\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  color:#fff;\n  overflow: hidden;\n  cursor: pointer;\n  user-select: none;\n  touch-action: none;\n  transition: all 0.15s ease;\n  -webkit-tap-highlight-color: transparent;\n"])), getThemeColorCss('background'));
/** 浮动气泡  */

var FloatingBubble = function FloatingBubble(props) {
  var _a = props.x,
      x = _a === void 0 ? true : _a,
      _b = props.y,
      y = _b === void 0 ? true : _b,
      className = props.className,
      children = props.children,
      onRelease = props.onRelease,
      rest = __rest(props, ["x", "y", "className", "children", "onRelease"]);

  var ref = /*#__PURE__*/React.createRef();
  var vRef = useRef({
    x: 0,
    y: 0
  });
  return /*#__PURE__*/React.createElement(TouchElement, {
    ref: ref,
    onTouchStart: function onTouchStart() {
      ref.current.style.opacity = '0.8';
      ref.current.style.transitionDuration = '0s';
    },
    onTouchEnd: function onTouchEnd() {
      ref.current.style.opacity = '1';
      ref.current.style.transitionDuration = '0.15s';

      if (!x) {
        vRef.current.x = 0;
      }

      if (!y) {
        vRef.current.y = 0;
      }

      if (!x || !y) {
        ref.current.style.transform = "translate3d(".concat(vRef.current.x, "px,").concat(vRef.current.y, "px,0)");
        setTimeout(function () {
          onRelease === null || onRelease === void 0 ? void 0 : onRelease(ref.current);
        }, 150);
      } else {
        onRelease === null || onRelease === void 0 ? void 0 : onRelease(ref.current);
      }
    },
    onPressMove: function onPressMove(_a) {
      var deltaX = _a.deltaX,
          deltaY = _a.deltaY;
      vRef.current.x += deltaX;
      vRef.current.y += deltaY;

      if (x || y) {
        ref.current.style.transform = "translate3d(".concat(vRef.current.x, "px,").concat(vRef.current.y, "px,0)");
      }
    }
  }, /*#__PURE__*/React.createElement(StyledWrap, __assign({
    className: clsx('uc-floating-bubble', className)
  }, rest), children));
};

FloatingBubble.displayName = 'UC-FloatingBubble';
export default FloatingBubble;
var templateObject_1;