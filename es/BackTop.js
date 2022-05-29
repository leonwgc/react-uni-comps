import React, { useState } from 'react';
import { getTargetElement } from './helper';
import useEventListener from './hooks/useEventListener';
import useThrottle from './hooks/useThrottle';
/**
 * 回到页面顶部
 *
 */

var BackTop = function BackTop(props) {
  var children = props.children,
      target = props.target,
      _a = props.visibilityHeight,
      visibilityHeight = _a === void 0 ? 100 : _a;

  var _b = useState(false),
      visible = _b[0],
      setVisible = _b[1];

  var top = 0;
  var onScroll = useThrottle(function () {
    var targetEl = getTargetElement(target) || window;

    if (targetEl === window && window.pageYOffset >= visibilityHeight || targetEl.scrollTop >= visibilityHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  useEventListener(target, 'scroll', onScroll);

  if (process.env.NODE_ENV !== 'production') {
    if (! /*#__PURE__*/React.isValidElement(children)) {
      throw new Error('ScrollTop:子元素必须为ReactElement');
    }
  }

  return visible ? /*#__PURE__*/React.cloneElement(children, {
    onClick: function onClick() {
      var _a, _b;

      (_b = (_a = children.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
      var step = Math.abs(window.pageYOffset - top) / 20;
      var targetEl = getTargetElement(target) || window;

      var cb = function cb() {
        if (targetEl === window) {
          if (window.pageYOffset > top) {
            window.scrollTo(0, window.pageYOffset - step >= top ? window.pageYOffset - step : top);
            requestAnimationFrame(cb);
          }
        } else {
          targetEl.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      };

      requestAnimationFrame(cb);
    }
  }) : null;
};

BackTop.displayName = 'UC-BackTop';
export default BackTop;