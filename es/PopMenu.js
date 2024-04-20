import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState, useRef, useCallback, useImperativeHandle } from 'react';
import Popover from './Popover';
import styled from 'styled-components';
import clsx from 'clsx';
import { boxShadow } from './vars';
var StyledPopover = styled(Popover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: ", ";\n"], ["\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: ", ";\n"])), boxShadow);
/**
 * click/hover 弹出菜单, 默认click, 基于Popover
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */

var PopMenu = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a;

  var content = props.content,
      _b = props.trigger,
      trigger = _b === void 0 ? 'click' : _b,
      _c = props.placement,
      placement = _c === void 0 ? 'bottom-right' : _c,
      _d = props.arrow,
      arrow = _d === void 0 ? false : _d,
      offset = props.offset,
      className = props.className,
      _e = props.closeOnClick,
      closeOnClick = _e === void 0 ? true : _e,
      _f = props.hoverDelay,
      hoverDelay = _f === void 0 ? 100 : _f,
      _g = props.closeOnClickOutside,
      closeOnClickOutside = _g === void 0 ? true : _g,
      children = props.children,
      popoverRest = __rest(props, ["content", "trigger", "placement", "arrow", "offset", "className", "closeOnClick", "hoverDelay", "closeOnClickOutside", "children"]);

  var timerRef = useRef(0);

  var _h = useState(false),
      visible = _h[0],
      setVisible = _h[1];

  useImperativeHandle(ref, function () {
    return {
      show: function show() {
        return setVisible(true);
      },
      hide: function hide() {
        return setVisible(false);
      }
    };
  });
  var actionProps = {};

  if (trigger === 'click') {
    actionProps = {
      onClick: function onClick() {
        setVisible(true);
      }
    };
  } else if (trigger === 'hover') {
    actionProps = {
      onMouseEnter: function onMouseEnter() {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        timerRef.current = window.setTimeout(function () {
          setVisible(false);
        }, hoverDelay);
      }
    };
  }

  var onClose = useCallback(function () {
    setVisible(false);
  }, []); // add active class to trigger el

  var otherProps = {
    className: clsx( /*#__PURE__*/React.isValidElement(children) ? (_a = children.props) === null || _a === void 0 ? void 0 : _a.className : '', {
      active: visible,
      visible: visible
    })
  };
  return /*#__PURE__*/React.createElement(StyledPopover, __assign({}, popoverRest, {
    className: clsx('uc-popmenu', className),
    visible: visible,
    transitionDuration: 350,
    onClose: onClose,
    placement: placement,
    closeOnClickOutside: closeOnClickOutside,
    content: /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        e.stopPropagation();

        if (closeOnClick) {
          onClose();
        }
      }
    }, content),
    arrow: arrow,
    offset: offset
  }, actionProps), /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, __assign(__assign({}, actionProps), otherProps)) : /*#__PURE__*/React.createElement("span", __assign({}, actionProps, otherProps), children));
});
PopMenu.displayName = 'UC-PopMenu';
export default PopMenu;
var templateObject_1;