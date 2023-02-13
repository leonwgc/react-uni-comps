import { __assign, __rest } from "tslib";
import * as React from 'react';
import Touch from 'w-touch';

var checkFailed = function checkFailed() {
  throw new Error('TouchElement: 子元素必须是dom/forwardRef到dom的组件');
};
/** 给子元素添加手势操作 */


var TouchElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      rest = __rest(props, ["children"]);

  var elRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  React.useLayoutEffect(function () {
    var el = elRef.current;

    if (!(el instanceof Element)) {
      checkFailed();
    }

    var fg = new Touch(el, rest);
    return function () {
      fg.destroy();
    };
  }, []);

  if (! /*#__PURE__*/React.isValidElement(children)) {
    checkFailed();
  }

  return /*#__PURE__*/React.createElement(children.type, __assign({}, children.props, {
    ref: elRef
  }));
});
TouchElement.displayName = 'TouchElement';
export default TouchElement;