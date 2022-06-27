import React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';

type Props = React.HTMLAttributes<HTMLDivElement>;

const loading = keyframes`
   0% {
      transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
      transform: rotate3d(0, 0, 1, 360deg);
    }
`;

const StyledSpin = styled.div`
  display: inline-flex;
  position: relative;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  animation: ${loading} 1s steps(60, end) infinite;
  :before,
  :after {
    content: '';
    display: block;
    width: 0.5em;
    height: 1em;
    box-sizing: border-box;
    border: 0.125em solid;
    border-color: currentColor;
  }
  :before {
    border-right-width: 0;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);
    -webkit-mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);
  }
  :after {
    border-left-width: 0;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);
    -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);
  }
`;

/** 加载中 */
const Spin = React.forwardRef<HTMLDivElement, Props>(({ className, ...rest }, ref) => {
  return <StyledSpin {...rest} ref={ref} className={clsx(className, 'uc-spin')}></StyledSpin>;
});

Spin.displayName = 'UC-Spin';

export default Spin;
