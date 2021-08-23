import React from 'react';
/** ScrollTo top */

var ScrollTop = function ScrollTop(props) {
  var children = props.children;
  var top = 0;
  return /*#__PURE__*/React.cloneElement(children, {
    onClick: function onClick() {
      var step = Math.abs(window.pageYOffset - top) / 20;

      var cb = function cb() {
        if (window.pageYOffset > top) {
          window.scrollTo(0, window.pageYOffset - step >= top ? window.pageYOffset - step : top);
          requestAnimationFrame(cb);
        }
      };

      requestAnimationFrame(cb);
    }
  });
};

ScrollTop.displayName = 'UC-ScrollTop';
export default ScrollTop;