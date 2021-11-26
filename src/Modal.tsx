import React, { useLayoutEffect, useRef, useState } from 'react';
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
  /** 是否显示右上角关闭 */
  closable?: boolean;
  /** 是否显示遮罩，默认显示 */
  mask?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
};

const StyledModal = styled(Popup)`
  z-index: 300;
  display: flex;
  flex-direction: column;
  min-width: 30px;
  background-color: #fff;
  padding: 32px 32px 24px;
  position: relative;
  border-radius: 8px;

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
const Modal = (props: Props): React.ReactElement => {
  const {
    closable,
    mask = true,
    maskStyle,
    visible,
    onClose,
    className,
    header,
    children,
    footer,
    ...rest
  } = props;

  const popRef = useRef();

  const [_maskStyle, _setMaskStyle] = useState<any>(maskStyle);

  useLayoutEffect(() => {
    if (mask) {
      // update mask zIndex
      const popEl = popRef.current;
      const zIndex = window.getComputedStyle(popEl).getPropertyValue('z-index');
      _setMaskStyle((last) => ({ ...last, zIndex }));
    }
  }, [mask]);

  return (
    <StyledModal
      {...rest}
      ref={popRef}
      visible={visible}
      onClose={onClose}
      mask={mask}
      maskStyle={_maskStyle}
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
