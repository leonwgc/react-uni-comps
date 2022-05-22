import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Icon from './Icon';
import type { BaseProps } from './types';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 尺寸
   * @default 40
   *  */
  size?: number;
  /**
   * 形状
   * @default circle
   *  */
  shape?: 'circle' | 'square';
  /** 文字/icon/img 不设置，则为默认头像icon */
  children?: React.ReactNode;
} & BaseProps;

const StyledAvatar = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-flex;
  overflow: hidden;
  color: #666;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  background: #ccc;

  &.circle {
    border-radius: 50%;
  }
  &.square {
    border-radius: 2px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

/** 头像 */
const Avatar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { size = 40, className, shape = 'circle', style, children, ...rest } = props;

  const s = { width: size, height: size, fontSize: size * 0.6, ...style };
  return (
    <StyledAvatar {...rest} ref={ref} style={s} className={clsx('uc-avatar', className, shape)}>
      {children || <Icon type="uc-icon-avatar" />}
    </StyledAvatar>
  );
});

Avatar.displayName = 'UC-Avatar';

export default Avatar;
