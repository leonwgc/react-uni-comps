import React from 'react';
import styled, { keyframes } from 'styled-components';
import { prefixClassName } from './helper';
import clsx from 'clsx';

const spin = keyframes`
     0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
`;

const getClassName = prefixClassName('uc-flower-spin');

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 动画持续时间 (单位: ms)
   * @default 640
   */
  duration?: number;
};

const StyledLoader = styled.div`
  color: currentColor;
  display: inline-flex;
  position: relative;
  width: 80px;
  height: 80px;

  .${getClassName('item')} {
    transform-origin: 40px 40px;
    animation: ${spin} 1.2s linear infinite;

    &::after {
      content: ' ';
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: currentColor;
    }
    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    &:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    &:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    &:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    &:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    &:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    &:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    &:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    &:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    &:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    &:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    &:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
  }
`;

const items = new Array(12).fill(0);

/** 菊花spin */
const FlowerSpin = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <StyledLoader ref={ref} {...rest} className={clsx(getClassName(), className)}>
      {items.map((v, i) => (
        <div key={i} className={getClassName('item')} />
      ))}
    </StyledLoader>
  );
});

FlowerSpin.displayName = 'UC-FlowerSpin';

export default FlowerSpin;
