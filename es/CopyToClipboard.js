import React from 'react';
/**
 * https://github.com/sindresorhus/copy-text-to-clipboard
 *
 * @param {*} input
 * @param {*} [{ target = document.body }={}]
 * @return {*}
 */

function copy(input, _a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.target,
      target = _c === void 0 ? document.body : _c;

  var element = document.createElement('textarea');
  var previouslyFocusedElement = document.activeElement;
  element.value = input; // Prevent keyboard from showing on mobile

  element.setAttribute('readonly', '');
  element.style.contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt'; // Prevent zooming on iOS

  var selection = document.getSelection();
  var originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);
  target.append(element);
  element.select(); // Explicit selection workaround for iOS

  element.selectionStart = 0;
  element.selectionEnd = input.length;
  var isSuccess = false;

  try {
    isSuccess = document.execCommand('copy');
  } catch (_d) {}

  element.remove();

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  } // Get the focus back on the previously focused element, if any


  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }

  return isSuccess;
}
/** 复制文本*/


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