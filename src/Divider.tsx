import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

// refer to https://ant.design/components/divider-cn/ antd Divider

export type Props = {
  type?: 'horizontal' | 'vertical';
  orientation?: 'left' | 'right' | 'center';
  className?: string;
  children?: React.ReactNode;
  dashed?: boolean;
  style?: React.CSSProperties;
  plain?: boolean;
  color?: string /** 默认 rgba(0, 0, 0, 0.06) */;
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
    margin: 24px 0;
  }

  &.dashed {
    border-top-style: dashed;
  }

  &.text {
    border-top: 0;
    .inner-text {
      display: inline-block;
      padding: 0 1em;
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
const Divider = (props: Props): React.ReactNode => {
  const {
    type = 'horizontal',
    orientation = 'center',
    className,
    dashed,
    color = 'rgba(0, 0, 0, 0.06)',
    children,
    ...rest
  } = props;

  const hasText = !!children;

  return (
    <StyledDivider
      color={color}
      className={clsx('uc-divider', type, hasText ? orientation : '', className, {
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
