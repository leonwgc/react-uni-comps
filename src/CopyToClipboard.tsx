import React from 'react';
import copy from 'copy-text-to-clipboard';

type Props = {
  /** 要复制的文本 */
  text: string;
  /** 复制成功的回调 */
  onCopy?: () => void;
  /** 包裹的元素,只能一个 */
  children: React.ReactElement;
};
/** 复制文本到剪贴板 */
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
