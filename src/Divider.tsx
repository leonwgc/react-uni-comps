import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';

// refer to https://ant.design/components/divider-cn/ antd Divider

type Props = {
  /** 分割线水平还是垂直 */
  type?: 'horizontal' | 'vertical';
  /** 分割线标题的位置 */
  textPosition?: 'left' | 'right' | 'center';
  className?: string;
  children?: React.ReactNode;
  /** 是否虚线 */
  dashed?: boolean;
  style?: React.CSSProperties;
  /**  分割线颜色，默认 #eee */
  color?: string;
};

const StyledDivider = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  border: none;
  border-top: 1px solid ${({ color }) => color};

  &.horizontal {
    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
  }

  &.dashed {
    border-top-style: dashed;
  }

  &.text {
    border-top: 0;
    .inner-text {
      display: inline-block;
      padding: 0 1em;
      white-space: nowrap;
      text-align: center;
    }

    &::before,
    &::after {
      width: 50%;
      border-top: 1px solid ${({ color }) => color};
      transform: translateY(50%);
      content: '';
    }

    &.dashed {
      &::before,
      &::after {
        border-top-style: dashed;
      }
    }

    &.left {
      &::before {
        width: 5%;
      }
      &::after {
        width: 95%;
      }
    }
    &.right {
      &::before {
        width: 95%;
      }
      &::after {
        width: 5%;
      }
    }
  }

  &.vertical {
    position: relative;
    top: -0.06em;
    display: inline-block;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
    border-top: 0;
    border-left: 1px solid ${({ color }) => color};
  }
`;

/** 分割线 */
const Divider = (props: Props): React.ReactElement => {
  const {
    type = 'horizontal',
    textPosition = 'center',
    className,
    dashed,
    color = colors.border,
    children,
    ...rest
  } = props;

  const hasText = !!children;

  return (
    <StyledDivider
      color={color}
      className={clsx('uc-divider', type, hasText ? textPosition : '', className, {
        dashed: dashed,
        text: hasText,
      })}
      {...rest}
    >
      {hasText ? <span className="inner-text">{children}</span> : null}
    </StyledDivider>
  );
};

export default Divider;
