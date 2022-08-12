import React from 'react';
import styled, { keyframes } from 'styled-components';
import { prefixClassName } from './helper';
import clsx from 'clsx';
import { StringOrNumber } from './types';

const rotate = keyframes`
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
`;

const getClassName = prefixClassName('uc-flower-spin');

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 颜色
   * @default currentColor
   */
  color?: string;
  /**
   * 大小
   * @default 30
   */
  size?: StringOrNumber;
};

const StyledLoader = styled.div`
  display: inline-flex;
  vertical-align: middle;
  position: relative;
  animation: ${rotate} 0.8s steps(12) infinite;

  .${getClassName('item')} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::before {
      display: block;
      width: 2px;
      height: 25%;
      margin: 0 auto;
      background-color: currentColor;
      border-radius: 40%;
      content: ' ';
    }
    &:nth-child(1) {
      transform: rotate(0deg);
      opacity: 1;
    }
    &:nth-child(2) {
      transform: rotate(30deg);
      opacity: ${1 - 0.75 / 12};
    }
    &:nth-child(3) {
      transform: rotate(60deg);
      opacity: ${1 - (0.75 / 12) * 2};
    }
    &:nth-child(4) {
      transform: rotate(90deg);
      opacity: ${1 - (0.75 / 12) * 3};
    }
    &:nth-child(5) {
      transform: rotate(120deg);
      opacity: ${1 - (0.75 / 12) * 4};
    }
    &:nth-child(6) {
      transform: rotate(150deg);
      opacity: ${1 - (0.75 / 12) * 5};
    }
    &:nth-child(7) {
      transform: rotate(180deg);
      opacity: ${1 - (0.75 / 12) * 6};
    }
    &:nth-child(8) {
      transform: rotate(210deg);
      opacity: ${1 - (0.75 / 12) * 7};
    }
    &:nth-child(9) {
      transform: rotate(240deg);
      opacity: ${1 - (0.75 / 12) * 8};
    }
    &:nth-child(10) {
      transform: rotate(270deg);
      opacity: ${1 - (0.75 / 12) * 9};
    }
    &:nth-child(11) {
      transform: rotate(300deg);
      opacity: ${1 - (0.75 / 12) * 10};
    }
    &:nth-child(12) {
      transform: rotate(330deg);
      opacity: ${1 - (0.75 / 12) * 11};
    }
  }
`;

const items = new Array(12).fill(0);

/** 菊花spin */
const FlowerSpin = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, style, size = 30, color = 'currentColor', ...rest } = props;

  return (
    <StyledLoader
      style={{ color: color, width: size, height: size, ...style }}
      ref={ref}
      {...rest}
      className={clsx(getClassName(), className)}
    >
      {items.map((v, i) => (
        <div key={i} className={getClassName('item')} />
      ))}
    </StyledLoader>
  );
});

FlowerSpin.displayName = 'UC-FlowerSpin';

export default FlowerSpin;
