import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import { getThemeColorCss } from './themeHelper';
import useEventListener from './hooks/useEventListener';
import useMount from './hooks/useMount';
import useThrottle from './hooks/useThrottle';
import { animationFast } from './vars';
import useLatest from './hooks/useLatest';
var getClassName = prefixClassName('uc-scroll-box'); //#region  style

var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n\n  .", " {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: scroll;\n    height: 100%;\n    width: 100%;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    * {\n      flex: none;\n    }\n  }\n\n  .", " {\n    position: relative;\n    overflow: hidden;\n    border-radius: 2px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 10px;\n    height: 4px;\n    width: 30px;\n    background-color: #f0f0f0;\n    visibility: hidden;\n  }\n\n  .", " {\n    position: absolute;\n    left: 0;\n    width: 0;\n    border-radius: inherit;\n    height: 100%;\n    ", "\n    transition: left ", "ms ease;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n\n  .", " {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: scroll;\n    height: 100%;\n    width: 100%;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    * {\n      flex: none;\n    }\n  }\n\n  .", " {\n    position: relative;\n    overflow: hidden;\n    border-radius: 2px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 10px;\n    height: 4px;\n    width: 30px;\n    background-color: #f0f0f0;\n    visibility: hidden;\n  }\n\n  .", " {\n    position: absolute;\n    left: 0;\n    width: 0;\n    border-radius: inherit;\n    height: 100%;\n    ", "\n    transition: left ", "ms ease;\n  }\n"])), getClassName('body'), getClassName('track'), getClassName('fill'), getThemeColorCss('background-color'), animationFast); //#endregion

/** 带指示器的水平滚动盒子 */

var ScrollBox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      showIndicator = props.showIndicator,
      indicatorStyle = props.indicatorStyle,
      indicatorClass = props.indicatorClass,
      fillColor = props.fillColor,
      children = props.children,
      rest = __rest(props, ["className", "showIndicator", "indicatorStyle", "indicatorClass", "fillColor", "children"]);

  var bodyRef = useRef();
  var fillRef = useRef();
  var showIndicatorRef = useLatest(showIndicator);
  var onScroll = useThrottle(function () {
    if (!showIndicatorRef.current) {
      return;
    }

    var body = bodyRef.current;
    var fill = fillRef.current;
    var track = fill.parentNode;
    var trackWidth = track.offsetWidth;

    if (body.scrollWidth > body.offsetWidth) {
      track.style.display = '';
      track.style.visibility = 'unset';
      var distance = body.scrollWidth - body.offsetWidth;
      fill.style.width = Math.floor(body.offsetWidth * trackWidth / body.scrollWidth) + 'px';

      if (body.scrollLeft >= 0) {
        fill.style.left = body.scrollLeft * (trackWidth - fill.offsetWidth) / distance + 'px';
      }
    } else {
      track.style.display = 'none';
    }
  }, 16);
  useMount(onScroll);
  useEventListener(bodyRef, 'scroll', onScroll);
  useEventListener(function () {
    return window;
  }, 'resize', onScroll);
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: ref,
    className: clsx(getClassName(), className)
  }), /*#__PURE__*/React.createElement("div", {
    className: getClassName('body'),
    ref: bodyRef
  }, children), showIndicator && /*#__PURE__*/React.createElement("div", {
    className: clsx(getClassName('track'), indicatorClass),
    style: indicatorStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: getClassName('fill'),
    style: {
      backgroundColor: fillColor
    },
    ref: fillRef
  })));
});
ScrollBox.displayName = 'UC-ScrollBox';
export default ScrollBox;
var templateObject_1;