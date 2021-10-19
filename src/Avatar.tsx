import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

type Props = {
  /** 尺寸，默认40 */
  size?: number;
  /** 形状，默认circle */
  shape?: 'circle' | 'square';
  className?: string;
  style?: React.CSSProperties;
  /** 文字/icon/img */
  children?: React.ReactNode;
};

const StyledAvatar = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 16px;
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

  const s = { ...style, width: size, height: size };
  return (
    <StyledAvatar {...rest} ref={ref} style={s} className={clsx('uc-avatar', className, shape)}>
      {children}
    </StyledAvatar>
  );
});

Avatar.displayName = 'UC-Avatar';

export default Avatar;
