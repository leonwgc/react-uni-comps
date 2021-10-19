import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { getThemeColorCss } from './themeHelper';

type Props = {
  /** 内容,没有内容则显示圆点 */
  content?: React.ReactNode;
  /** 徽标背景色 */
  color?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  /** 自定义徽标样式 */
  badgeStyle?: React.CSSProperties;
};

const StyledBadge = styled.div`
  display: inline-block;
  position: relative;

  .badge {
    display: inline-block;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    border-radius: 100px;
    padding: 0 4px;
    font-size: 9px;
    line-height: 1.2;
    white-space: nowrap;
    position: absolute;
    z-index: 1;
    transform: translate(50%, -50%);
    top: 0;
    right: 0;
    ${getThemeColorCss('background-color')}

    &.dot {
      padding: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    &.without-children {
      position: static;
      transform: none;
    }
  }
`;

/** 徽标:右上角添加标记 */
const Badge = (props: Props): React.ReactNode => {
  const { children, className, content, badgeStyle, ...rest } = props;

  return (
    <StyledBadge {...rest} className={clsx('uc-badge', className)}>
      {children}
      <div
        className={clsx('badge', {
          'dot': !content,
          'without-children': !children,
        })}
        style={badgeStyle}
      >
        {content}
      </div>
    </StyledBadge>
  );
};

Badge.displayName = 'UC-Badge';

export default Badge;
