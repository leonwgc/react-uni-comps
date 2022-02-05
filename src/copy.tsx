// https://github.com/sindresorhus/copy-text-to-clipboard
/**
 * 复制文本
 *
 * @param {string} text
 * @param {HTMLElement} [{ target = document.body }={}]
 * @return {boolean}
 */
export default function copy(text, { target = document.body } = {}) {
  const element = document.createElement('textarea');
  const previouslyFocusedElement: HTMLElement = document.activeElement as HTMLElement;

  element.value = text;

  // Prevent keyboard from showing on mobile
  element.setAttribute('readonly', '');

  element.style.contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt'; // Prevent zooming on iOS

  const selection = document.getSelection();
  const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);

  target.append(element);
  element.select();

  // Explicit selection workaround for iOS
  element.selectionStart = 0;
  element.selectionEnd = text.length;

  let isSuccess = false;
  try {
    isSuccess = document.execCommand('copy');
  } catch {}

  element.remove();

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  // Get the focus back on the previously focused element, if any
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }

  return isSuccess;
}
