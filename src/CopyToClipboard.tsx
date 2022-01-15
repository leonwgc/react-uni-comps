import React from 'react';

/**
 * https://github.com/sindresorhus/copy-text-to-clipboard
 *
 * @param {*} input
 * @param {*} [{ target = document.body }={}]
 * @return {*}
 */
function copy(input, { target = document.body } = {}) {
  const element = document.createElement('textarea');
  const previouslyFocusedElement: HTMLElement = document.activeElement as HTMLElement;

  element.value = input;

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
  element.selectionEnd = input.length;

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

type Props = {
  /** 要复制的文本 */
  text: string;
  /** 复制成功的回调 */
  onCopy?: () => void;
  /** 包裹的元素,只能一个 */
  children: React.ReactElement;
};

/** 复制文本*/
const CopyToClipboard = React.forwardRef<React.ReactElement, Props>(
  (props: Props, ref): React.ReactElement => {
    const { text, onCopy, children } = props;

    return React.cloneElement(children, {
      ref,
      onClick: () => {
        if (copy(text)) {
          onCopy?.();
        }
        children.props.onClick?.();
      },
    });
  }
);

CopyToClipboard.displayName = 'UC-CopyToClipboard';

export default CopyToClipboard;
