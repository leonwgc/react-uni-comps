import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLDivElement>;

const StyledLoader = styled.div`
  @keyframes cp-eclipse-animate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  position: relative;
  width: 12px;
  height: 12px;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 50%;
  background: currentColor;
  margin: 12px;
  animation: cp-eclipse-animate 1s ease-out infinite;

  .circle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    background: #0d72ff;
    z-index: 1;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  :before {
    border-radius: 50%;
    content: ' ';
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-top: solid 6px transparent;
    border-right: solid 6px currentColor;
    border-bottom: solid 6px transparent;
    border-left: solid 6px transparent;
    position: absolute;
    top: -18px;
    left: -18px;
  }

  :after {
    border-radius: 50%;
    content: ' ';
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-top: solid 6px transparent;
    border-right: solid 6px transparent;
    border-bottom: solid 6px transparent;
    border-left: solid 6px currentColor;
    position: absolute;
    top: -18px;
    right: -18px;
  }
`;

/** yiyuan tech style loader */
const YYLoader = React.forwardRef<HTMLDivElement, Props>(({ className, ...rest }, ref) => {
  return (
    <StyledLoader {...rest} ref={ref} className={clsx(className, 'uc-spin')}>
      <div className="circle"></div>
    </StyledLoader>
  );
});

YYLoader.displayName = 'UC-YYLoader';

export default YYLoader;
