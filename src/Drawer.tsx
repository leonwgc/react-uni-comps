import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Popup, { Props as PopupProps } from './Popup';

type Props = Omit<PopupProps, 'position'> & {
  /** 头部 */
  header?: React.ReactNode;
  /** 尾部 */
  footer?: React.ReactNode;
  /** 
   * 弹框弹出位置，从上，下，左，右 弹出
   * @default right
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
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
const Drawer = (props: Props): React.ReactElement => {
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
