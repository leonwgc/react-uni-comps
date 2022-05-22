import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import WaitLoading from './WaitLoading';
import type { BaseProps } from './types';

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  /**
   * 延迟显示等待时间，单位ms ,默认false ,如果是true ,默认延时700ms显示
   *  */
  wait?: boolean | number;
  /** 是否显示,搭配wait使用，默认 true */
  loading?: boolean;
} & BaseProps;

const StyledSpin = styled.div`
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

/** 加载中指示器,继承父容器颜色和字体大小 */
const Spin = React.forwardRef<HTMLDivElement, Props>(
  ({ wait, loading = true, className, ...rest }, ref) => {
    const waitTime =
      typeof wait === 'number' && wait > 0
        ? wait
        : typeof wait === 'boolean' && wait === true
        ? 700
        : 0;

    const el = <StyledSpin {...rest} ref={ref} className={clsx(className, 'uc-spin')}></StyledSpin>;

    return waitTime > 0 ? (
      <WaitLoading visible={loading} wait={waitTime}>
        {el}
      </WaitLoading>
    ) : (
      el
    );
  }
);

Spin.displayName = 'UC-Spin';

export default Spin;
