import React from 'react';
import copy from 'copy-text-to-clipboard';
/** 复制文本到剪贴板 */

var CopyToClipboard = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var text = props.text,
      onCopy = props.onCopy,
      children = props.children;
  return /*#__PURE__*/React.cloneElement(children, {
    ref: ref,
    onClick: function onClick() {
      var _a, _b;

      if (copy(text)) {
        onCopy === null || onCopy === void 0 ? void 0 : onCopy();
      }

      (_b = (_a = children.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
  });
});
CopyToClipboard.displayName = 'UC-CopyToClipboard';
export default CopyToClipboard;