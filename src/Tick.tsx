import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useThemeColor from './hooks/useThemeColor';

export type Props = {
  size?: number /** 默认18 */;
  /** 勾勾颜色 */
  color?: string /** checked状态颜色 */;
};

const StyledTick = styled.div<{
  size: number;
  color: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  &::before {
    transform: rotate(45deg);
    opacity: 1;
    transition: transform 0.3s ease;
    content: '';
    width: calc(${({ size }) => size}px / 3.5);
    height: calc(${({ size }) => size}px / 2);
    border: calc(${({ size }) => size}px / 9) solid ${({ color }) => color};
    border-top: 0;
    border-left: 0;
    margin-top: calc(${({ size }) => size}px / -12);
    margin-left: calc(${({ size }) => size}px / ${({ size }) => size});
    border-color: ${(props) => props.color};
  }
`;

/** 勾勾 */
const Tick = (props: Props): React.ReactElement => {
  const { color, size = 18 } = props;

  const _color = useThemeColor();

  return <StyledTick className={clsx('uc-tick')} size={size} color={color || _color}></StyledTick>;
};

export default Tick;
