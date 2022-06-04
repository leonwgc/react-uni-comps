import { useEffect, useState } from 'react';
/** 延迟渲染子元素, 用于防止loading闪烁等问题 */

var WaitLoading = function WaitLoading(props) {
  var _a = props.wait,
      wait = _a === void 0 ? 400 : _a,
      children = props.children;

  var _b = useState(false),
      show = _b[0],
      setShow = _b[1];

  useEffect(function () {
    var timer = setTimeout(function () {
      setShow(true);
    }, wait);
    return function () {
      window.clearTimeout(timer);
    };
  }, [wait]);
  return show && children;
};

export default WaitLoading;