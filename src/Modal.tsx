import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Icon from './Icon';
import Popup, { Props as PopupProps } from './Popup';

type Props = PopupProps & {
  /** 头部 */
  header?: React.ReactNode;
  /** 尾部 */
  footer?: React.ReactNode;
  /** 内容 */
  children?: React.ReactNode;
  /** 包裹元素样式 */
  wrapStyle?: React.CSSProperties;
  /** 是否显示右上角关闭 */
  closable?: boolean;
  wrapClassName?: string;
};

const StyledModal = styled(Popup)`
  .content {
    min-width: 60px;
    background-color: #fff;
    padding: 16px;
    position: relative;
    border-radius: 2px;

    .close {
      top: 16px;
      right: 16px;
      color: #999;
      position: absolute;
      display: inline-block;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        color: #666;
      }
    }

    .body {
      flex: 1;
    }
  }
`;

/** 对话框 */
const Modal = (props: Props): React.ReactNode => {
  const {
    wrapClassName,
    closable,
    visible,
    onClose,
    wrapStyle,
    className,
    header,
    children,
    footer,
    ...rest
  } = props;

  return (
    <StyledModal
      visible={visible}
      onClose={onClose}
      {...rest}
      className={clsx('uc-modal', className)}
      position={'center'}
    >
      <div className={clsx('content', wrapClassName)} style={{ ...wrapStyle }}>
        {closable && <Icon type="uc-icon-guanbi" className="close" onClick={onClose} />}
        {header && <div className="header">{header}</div>}
        <div className="body">{children}</div>
        {footer && <div className="footer">{footer}</div>}
      </div>
    </StyledModal>
  );
};

Modal.displayName = 'UC-Modal';

export default Modal;
