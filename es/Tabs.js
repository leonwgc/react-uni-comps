//#region  top
import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import { throttle, prefixClassName } from './helper';
import { attachPropertiesToComponent } from './util';
import usePrevious from './hooks/usePrevious';
import useMount from './hooks/useMount';
var getClassName = prefixClassName('uc-tabs');
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-tap-highlight-color: transparent;\n\n  .", " {\n    display: flex;\n    height: 44px;\n    box-sizing: border-box;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    overflow-x: scroll;\n    border-bottom: 1px solid ", ";\n    align-items: center;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n  }\n\n  .", " {\n    overflow: hidden;\n  }\n\n  .", " {\n  }\n\n  .", " {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    flex: none;\n    width: 56px;\n    padding: 0 12px;\n    user-select: none;\n    height: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n\n    &.active {\n      ", "\n      font-weight: 500;\n    }\n    &.disabled {\n      cursor: not-allowed;\n      color: ", ";\n    }\n  }\n\n  .", " {\n    position: absolute;\n    left: 0;\n    top: 0;\n    pointer-events: none;\n    transition: transform 0.3s ease;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n\n    .line {\n      position: absolute;\n      bottom: 0;\n      height: 2px;\n      ", "\n    }\n  }\n"], ["\n  -webkit-tap-highlight-color: transparent;\n\n  .", " {\n    display: flex;\n    height: 44px;\n    box-sizing: border-box;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    overflow-x: scroll;\n    border-bottom: 1px solid ", ";\n    align-items: center;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n  }\n\n  .", " {\n    overflow: hidden;\n  }\n\n  .", " {\n  }\n\n  .", " {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    flex: none;\n    width: 56px;\n    padding: 0 12px;\n    user-select: none;\n    height: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n\n    &.active {\n      ", "\n      font-weight: 500;\n    }\n    &.disabled {\n      cursor: not-allowed;\n      color: ", ";\n    }\n  }\n\n  .", " {\n    position: absolute;\n    left: 0;\n    top: 0;\n    pointer-events: none;\n    transition: transform 0.3s ease;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n\n    .line {\n      position: absolute;\n      bottom: 0;\n      height: 2px;\n      ", "\n    }\n  }\n"])), getClassName('header-wrap'), vars.border, getClassName('content-wrap'), getClassName('extra'), getClassName('header-item'), getThemeColorCss('color'), vars.disabledText, getClassName('header-line'), getThemeColorCss('background-color'));
/**
 *  选项卡项，放在Tabs里面
 *
 * @param {*} { children }
 * @return {*}
 */

var Tab = function Tab(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
}; //#endregion

/**
 * 选项卡切换
 */


var Tabs = function Tabs(_a) {
  var children = _a.children,
      _b = _a.underline,
      underline = _b === void 0 ? '50%' : _b,
      value = _a.value,
      _c = _a.defaultValue,
      defaultValue = _c === void 0 ? 0 : _c,
      _d = _a.border,
      border = _d === void 0 ? true : _d,
      onChange = _a.onChange,
      tabWidth = _a.tabWidth,
      extra = _a.extra,
      className = _a.className,
      rest = __rest(_a, ["children", "underline", "value", "defaultValue", "border", "onChange", "tabWidth", "extra", "className"]);

  var underlineElRef = useRef();
  var contentWrapElRef = useRef();
  var headerWrapElRef = useRef();

  var _e = useState(typeof value === 'undefined' ? defaultValue : value),
      _v = _e[0],
      _setV = _e[1];

  useUpdateEffect(function () {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);
  useLayoutEffect(function () {
    var setUnderlineSize = throttle(function () {
      var underlineEl = underlineElRef.current;

      if (underline && underlineEl) {
        var next = underlineEl.nextSibling;

        if (next) {
          underlineEl.style.width = next.offsetWidth + 'px';
        }
      }
    }, 34);

    if (underline) {
      window.addEventListener('resize', setUnderlineSize);
    }

    setUnderlineSize();
    return function () {
      if (underline) {
        window.removeEventListener('resize', setUnderlineSize);
      }
    };
  }, [underline]);
  var prevVal = usePrevious(_v);
  useEffect(function () {
    var headerWrapEl = headerWrapElRef.current;

    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      var itemEl = headerWrapEl.querySelector(".".concat(getClassName('header-item')));

      if (itemEl) {
        if (_v > prevVal) {
          // right
          headerWrapEl.scroll({
            left: (_v + 3) * itemEl.offsetWidth - headerWrapEl.offsetWidth,
            behavior: 'smooth'
          });
        } else {
          // left
          headerWrapEl.scroll({
            left: (_v - 2) * itemEl.offsetWidth,
            behavior: 'smooth'
          });
        }
      } else if (itemEl.offsetWidth * (_v + 1) <= headerWrapEl.offsetWidth && headerWrapEl.scrollLeft > 0) {
        headerWrapEl.scroll({
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }, [_v, prevVal]);
  useMount(function () {
    var headerWrapEl = headerWrapElRef.current;

    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      var itemEl = headerWrapEl.querySelector('.uc-tabs-header-item'); // scroll

      headerWrapEl.scroll({
        left: (_v - 2) * itemEl.offsetWidth
      });
    }
  });

  if (React.Children.count(children) === 0) {
    return null;
  }

  return /*#__PURE__*/React.createElement(StyledWrapper, __assign({}, rest, {
    className: clsx(getClassName(), className)
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx(getClassName('header-wrap'), {
      'no-border': !border
    }),
    ref: headerWrapElRef
  }, !!underline && /*#__PURE__*/React.createElement("div", {
    ref: underlineElRef,
    className: clsx(getClassName('header-line'), getClassName('header-item')),
    style: {
      transform: "translate3d(".concat(_v * 100 + '%', ", 0, 0)"),
      width: tabWidth
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "line",
    style: {
      width: typeof underline === 'boolean' ? '100%' : underline
    }
  })), React.Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      var _a = child.props,
          _b = _a.title,
          title = _b === void 0 ? '' : _b,
          disabled_1 = _a.disabled;
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: clsx(getClassName('header-item'), {
          active: index === _v,
          disabled: disabled_1
        }),
        style: {
          width: tabWidth
        },
        onClick: function onClick() {
          if (!disabled_1 && index !== _v) {
            onChange === null || onChange === void 0 ? void 0 : onChange(index);

            _setV(index);
          }
        }
      }, title);
    }
  }), extra && /*#__PURE__*/React.createElement("span", {
    className: clsx(getClassName('extra'))
  }, extra)), /*#__PURE__*/React.createElement("div", {
    className: getClassName('content-wrap'),
    ref: contentWrapElRef
  }, React.Children.map(children, function (child, index) {
    if (_v === index && /*#__PURE__*/React.isValidElement(child)) {
      return child;
    }
  })));
};

export default attachPropertiesToComponent(Tabs, {
  /** 子项 */
  Tab: Tab
});
var templateObject_1;