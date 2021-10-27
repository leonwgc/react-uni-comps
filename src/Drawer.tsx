import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
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
  wrapClassName?: string;
};

const StyledDrawerContent = styled(Popup)`
  .content {
    display: flex;
    flex-direction: column;
    background-color: #fff;

    .body {
      flex: 1;
    }
  }
`;

/** 抽屉 */
const Drawer = (props: Props): React.ReactNode => {
  const {
    wrapClassName,
    wrapStyle,
    className,
    header,
    children,
    footer,
    position = 'right',
    ...rest
  } = props;

  return (
    <StyledDrawerContent {...rest} className={clsx('uc-drawer', className)} position={position}>
      <div className={clsx('content', wrapClassName)} style={wrapStyle}>
        {header && <div className="header">{header}</div>}
        <div className="body">{children}</div>
        {footer && <div className="footer">{footer}</div>}
      </div>
    </StyledDrawerContent>
  );
};

Drawer.displayName = 'UC-Drawer';

export default Drawer;
