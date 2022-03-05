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

import React, { useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { useSpring, animated, easings } from '@react-spring/web';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  &.block {\n    display: block;\n  }\n  .ripple-el {\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: 50%;\n  }\n\n  > * {\n    position: relative;\n    z-index: 1;\n  }\n"], ["\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  &.block {\n    display: block;\n  }\n  .ripple-el {\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: 50%;\n  }\n\n  > * {\n    position: relative;\n    z-index: 1;\n  }\n"])));
/** 波纹效果,给子元素添加点击波纹效果 */

var Ripple = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.color,
      color = _a === void 0 ? '#ccc' : _a,
      _b = props.duration,
      duration = _b === void 0 ? 300 : _b,
      _c = props.startScale,
      startScale = _c === void 0 ? 0.3 : _c,
      children = props.children,
      block = props.block,
      rest = __rest(props, ["className", "color", "duration", "startScale", "children", "block"]);

  var elRef = useRef(null);
  var isRunningRef = useRef(false);
  useImperativeHandle(ref, function () {
    return elRef.current;
  });

  var _d = useSpring(function () {
    return {
      from: {
        scale: 1,
        opacity: 0,
        width: '',
        height: '',
        top: '',
        left: ''
      },
      config: {
        duration: duration,
        easing: easings.easeInOutQuart
      },
      onStart: function onStart() {
        isRunningRef.current = true;
      },
      onRest: function onRest() {
        isRunningRef.current = false;
        api.start({
          width: '',
          height: '',
          top: '',
          left: '',
          immediate: true
        });
      }
    };
  }),
      styles = _d[0],
      api = _d[1];

  var start = React.useCallback(function (event) {
    if (isRunningRef.current) {
      return;
    }

    var element = elRef.current;
    var rect = element.getBoundingClientRect();

    var _a = event.touches ? event.touches[0] : event,
        clientX = _a.clientX,
        clientY = _a.clientY;

    var rippleX = Math.round(clientX - rect.left);
    var rippleY = Math.round(clientY - rect.top);
    var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
    var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
    var rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    api.start({
      width: rippleSize + 'px',
      height: rippleSize + 'px',
      top: -(rippleSize / 2) + rippleY + 'px',
      left: -(rippleSize / 2) + rippleX + 'px',
      immediate: true,
      scale: startScale
    });
    api.start({
      scale: 1
    });
  }, [api, startScale]);
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    onClick: function onClick(e) {
      var _a, _b, _c;

      start(e);
      (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);

      if ( /*#__PURE__*/React.isValidElement(children)) {
        (_c = (_b = children.props).onClick) === null || _c === void 0 ? void 0 : _c.call(_b, e);
      }
    },
    ref: elRef,
    className: clsx('uc-ripple', className, {
      block: block
    })
  }), children, /*#__PURE__*/React.createElement(animated.div, {
    className: "ripple-el",
    style: __assign(__assign({}, styles), {
      opacity: styles.scale.to([0, 0.4, 0.9, 1], [0.1, 0.2, 0.3, 0]),
      backgroundColor: color
    })
  }));
});
Ripple.displayName = 'UC-Ripple';
export default Ripple;
var templateObject_1;