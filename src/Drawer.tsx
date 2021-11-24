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
  className?: string;
  style?: React.CSSProperties;
};

const StyledDrawer = styled(Popup)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;

  .body {
    flex: 1;
  }
`;

/** 抽屉 */
const Drawer = (props: Props): React.ReactNode => {
  const { className, style, header, children, footer, position = 'right', ...rest } = props;

  const _style =
    position === 'left' || position === 'right' ? { height: '100vh' } : { width: '100vw' };

  return (
    <StyledDrawer
      {...rest}
      className={clsx('uc-drawer', className)}
      style={{ ..._style, ...style }}
      position={position}
    >
      {header && <div className="header">{header}</div>}
      <div className="body">{children}</div>
      {footer && <div className="footer">{footer}</div>}
    </StyledDrawer>
  );
};

Drawer.displayName = 'UC-Drawer';

export default Drawer;
