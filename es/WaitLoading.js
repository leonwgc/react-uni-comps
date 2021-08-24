import React, { useEffect, useState, useRef } from 'react';
/**  等待wait毫秒如果visible是true才渲染子元素,包裹spinner可以防止spinner闪烁 */

var WaitLoading = function WaitLoading(_a) {
  var _b = _a.wait,
      wait = _b === void 0 ? 600 : _b,
      _c = _a.visible,
      visible = _c === void 0 ? false : _c,
      children = _a.children;

  var _d = useState(false),
      show = _d[0],
      setShow = _d[1];

  var ref = useRef();
  useEffect(function () {
    if (visible) {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      ref.current = window.setTimeout(function () {
        setShow(true);
      }, wait);
    } else {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setShow(false);
    }

    return function () {
      setShow(false);
      clearTimeout(ref.current);
    };
  }, [visible, wait]);
  return show ? React.Children.only(children) : null;
};

export default WaitLoading;