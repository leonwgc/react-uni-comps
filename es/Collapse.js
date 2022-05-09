import { __assign, __makeTemplateObject, __rest, __spreadArray } from "tslib";
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
import IconArrow from './IconArrow';
import useMount from './hooks/useMount';
import useUpdateLayoutEffect from './hooks/useUpdateLayoutEffect';
import { animationNormal } from './vars';
import { attachPropertiesToComponent } from './util';
/**
 *  子项，放在Collapse里面
 *
 * @param {*}
 * @return {*}
 */

var Item = function Item(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.children);
};

var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-tap-highlight-color: transparent;\n\n  .item {\n    overflow: hidden;\n\n    &.disabled {\n      opacity: 0.4;\n    }\n\n    .header {\n      background: #fff;\n      height: 50px;\n      color: #333;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      cursor: pointer;\n    }\n\n    .content {\n      color: #999;\n    }\n  }\n"], ["\n  -webkit-tap-highlight-color: transparent;\n\n  .item {\n    overflow: hidden;\n\n    &.disabled {\n      opacity: 0.4;\n    }\n\n    .header {\n      background: #fff;\n      height: 50px;\n      color: #333;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      cursor: pointer;\n    }\n\n    .content {\n      color: #999;\n    }\n  }\n"])));
/**
 *  content renderer
 *
 * @param {*} props
 * @return {*}
 */

var ItemContent = function ItemContent(props) {
  var visible = props.visible,
      children = props.children;
  var innerRef = useRef(null);

  var _a = useSpring(function () {
    return {
      from: {
        height: 0,
        opacity: 0
      },
      config: {
        duration: animationNormal
      }
    };
  }),
      styles = _a[0],
      api = _a[1];

  useMount(function () {
    if (!visible) return;
    var inner = innerRef.current;
    if (!inner) return;
    api.start({
      height: inner.offsetHeight,
      opacity: 1,
      immediate: true
    });
  });
  useUpdateLayoutEffect(function () {
    var inner = innerRef.current;
    if (!inner) return;

    if (visible) {
      api.start({
        height: inner.offsetHeight,
        opacity: 1
      });
    } else {
      api.start({
        from: {
          height: inner.offsetHeight,
          opacity: 1
        },
        to: {
          height: 0,
          opacity: 0
        }
      });
    }
  }, [visible]);
  return /*#__PURE__*/React.createElement(animated.div, {
    className: "content",
    style: styles
  }, /*#__PURE__*/React.createElement("div", {
    ref: innerRef
  }, children));
};
/**
 * 折叠面板
 */


var Collapse = function Collapse(_a) {
  var children = _a.children,
      onChange = _a.onChange,
      className = _a.className,
      animated = _a.animated,
      _b = _a.keys,
      keys = _b === void 0 ? '' : _b,
      rest = __rest(_a, ["children", "onChange", "className", "animated", "keys"]);

  var count = React.Children.count(children); // 手风琴模式

  var isSingleMode = !Array.isArray(keys); // inner keys

  var _c = useState(keys),
      _keys = _c[0],
      _setKeys = _c[1];

  useUpdateEffect(function () {
    _setKeys(keys);
  }, [keys]);

  if (count === 0) {
    return null;
  }

  return /*#__PURE__*/React.createElement(StyledWrapper, __assign({}, rest, {
    className: clsx('uc-collapse', className)
  }), React.Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      var key_1 = child.key;
      key_1 = key_1 || index;
      var _a = child.props,
          _b = _a.title,
          title = _b === void 0 ? '' : _b,
          disabled_1 = _a.disabled,
          _c = _a.arrow,
          arrow = _c === void 0 ? true : _c,
          children_1 = _a.children;
      var active_1 = isSingleMode ? _keys === key_1 : _keys.indexOf(key_1) > -1;
      return /*#__PURE__*/React.createElement("div", {
        key: key_1,
        className: clsx('item', {
          active: active_1,
          disabled: disabled_1
        }),
        onClick: function onClick() {
          if (!disabled_1) {
            var keys_1;

            if (active_1) {
              if (isSingleMode) {
                keys_1 = '';
              } else {
                var idx = _keys.indexOf(key_1);

                _keys.splice(idx, 1);

                keys_1 = __spreadArray([], _keys, true);
              }
            } else {
              if (isSingleMode) {
                keys_1 = key_1;
              } else {
                keys_1 = __spreadArray(__spreadArray([], _keys, true), [key_1], false);
              }
            }

            _setKeys(keys_1);

            onChange === null || onChange === void 0 ? void 0 : onChange(keys_1);
          }
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: clsx('header', {
          disabled: disabled_1
        })
      }, /*#__PURE__*/React.createElement("span", null, typeof title === 'function' ? title(active_1, disabled_1) : title), /*#__PURE__*/React.createElement("span", null, arrow && /*#__PURE__*/React.createElement(IconArrow, {
        direction: active_1 ? 'top' : 'down'
      }))), animated ? /*#__PURE__*/React.createElement(ItemContent, {
        visible: active_1
      }, children_1) : active_1 && /*#__PURE__*/React.createElement("div", {
        className: clsx('content')
      }, children_1));
    }
  }));
};

Collapse.displayName = 'UC-Collapse';
export default attachPropertiesToComponent(Collapse, {
  Item: Item
});
var templateObject_1;