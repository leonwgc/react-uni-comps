import React, { useLayoutEffect, useState } from 'react';
import { throttle } from './helper';
/**
 * 回到页面顶部
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */

var ScrollToTop = function ScrollToTop(props) {
  var children = props.children,
      _a = props.visibilityHeight,
      visibilityHeight = _a === void 0 ? 100 : _a;

  var _b = useState(false),
      visible = _b[0],
      setVisible = _b[1];

  var top = 0;
  useLayoutEffect(function () {
    var onScroll = throttle(function () {
      if (window.pageYOffset >= visibilityHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [visibilityHeight]);

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

      var cb = function cb() {
        if (window.pageYOffset > top) {
          window.scrollTo(0, window.pageYOffset - step >= top ? window.pageYOffset - step : top);
          requestAnimationFrame(cb);
        }
      };

      requestAnimationFrame(cb);
    }
  }) : null;
};

ScrollToTop.displayName = 'UC-ScrollToTop';
export default ScrollToTop;