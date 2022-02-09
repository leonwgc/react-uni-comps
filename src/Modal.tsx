import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Icon from './Icon';
import Popup, { Props as PopupProps } from './Popup';
import { boxShadow } from './vars';

type Props = PopupProps & {
  /** 头部 */
  header?: React.ReactNode;
  /** 尾部 */
  footer?: React.ReactNode;
  /** 内容 */
  children?: React.ReactNode;
  /** 是否显示右上角关闭 */
  closable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** 关闭后卸载组件,默认true*/
  unmountOnExit?: boolean;
};

const StyledModal = styled(Popup)`
  display: flex;
  flex-direction: column;
  min-width: 30px;
  background-color: #fff;
  padding: 32px 32px 24px;
  position: relative;
  border-radius: 8px;
  box-shadow: ${boxShadow};

  .close {
    top: 16px;
    right: 16px;
    color: #999;
    position: absolute;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #666;
    }
  }

  .body {
    flex: 1;
  }
`;

/** 对话框,基于Popup */
const Modal: React.FC<Props> = (props) => {
  const { closable, visible, onClose, className, header, children, footer, ...rest } = props;

  return (
    <StyledModal
      {...rest}
      visible={visible}
      onClose={onClose}
      className={clsx('uc-modal', className)}
      position={'center'}
    >
      {closable && <Icon type="uc-icon-guanbi" className="close" onClick={onClose} />}
      {header && <div className="header">{header}</div>}
      <div className="body">{children}</div>
      {footer && <div className="footer">{footer}</div>}
    </StyledModal>
  );
};

Modal.displayName = 'UC-Modal';

export default Modal;
