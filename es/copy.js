// https://github.com/sindresorhus/copy-text-to-clipboard

/**
 * 复制文本
 *
 * @param {string} text
 * @param {HTMLElement} [{ target = document.body }={}]
 * @return {boolean}
 */
export default function copy(text, _a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.target,
      target = _c === void 0 ? document.body : _c;

  var element = document.createElement('textarea');
  var previouslyFocusedElement = document.activeElement;
  element.value = text; // Prevent keyboard from showing on mobile

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
  element.selectionEnd = text.length;
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