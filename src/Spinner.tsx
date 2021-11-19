import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

type Props = {
  /** 圈圈大小,应用到font-size,默认16 */
  size?: number;
  /** 圈圈颜色*/
  color?: string;
  style?: React.CSSProperties;
  className?: string;
};

const StyledLoading = styled.div`
  @-webkit-keyframes loading {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
      -webkit-transform: rotate3d(0, 0, 1, 360deg);
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
      -webkit-transform: rotate3d(0, 0, 1, 360deg);
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }

  display: inline-flex;
  position: relative;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  animation: loading 1s steps(60, end) infinite;
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

/** Spinner 加载中 */
const Spinner = React.forwardRef<HTMLDivElement, Props>(
  ({ size = 16, color, className, style, ...rest }, ref) => {
    return (
      <StyledLoading
        {...rest}
        ref={ref}
        className={clsx(className, 'uc-spinner')}
        style={{ fontSize: size, color: color, ...style }}
      ></StyledLoading>
    );
  }
);

Spinner.displayName = 'UC-Spinner';

export default Spinner;
