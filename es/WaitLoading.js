import { useEffect, useState, useRef } from 'react';
/** 延迟渲染子元素, 一般用于防止loading闪烁等问题 */

var WaitLoading = function WaitLoading(props) {
  var _a = props.wait,
      wait = _a === void 0 ? 700 : _a,
      _b = props.visible,
      visible = _b === void 0 ? false : _b,
      children = props.children;

  var _c = useState(false),
      show = _c[0],
      setShow = _c[1];

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
  return show ? children : null;
};

export default WaitLoading;