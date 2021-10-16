import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import { renderElement, isMobile } from './dom';
import TransitionElement from './TransitionElement';

const transitionDuration = 180;

const StyledNotify = styled.div`
  position: fixed;
  z-index: 1200;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: ${transitionDuration}ms;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  &.from {
    transform: translate(0, -100%);
  }

  &.to {
    transform: none;
  }

  .content {
    ${getThemeColorCss('background-color')};
    padding: 8px 12px;
    margin: 0 auto;
    .icon {
      margin-right: 8px;
    }

    &.mobile {
      color: #fff;
      width: 100%;
      text-align: center;
    }
    &.pc {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

type Props = {
  /** 图标*/
  icon?: React.ReactNode;
  /** 内容 */
  content?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

/** 顶部全局消息通知 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Notify: any = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { content, icon, style, className, ...rest } = props;

  return (
    <StyledNotify {...rest} ref={ref} className={clsx('uc-notify', className)}>
      <div className={clsx('content', { mobile: isMobile, pc: !isMobile })} style={style}>
        {icon && <span className="icon">{icon}</span>}
        {content}
      </div>
    </StyledNotify>
  );
});

type StaticProps = {
  /** 图标*/
  icon?: React.ReactNode;
  /** 内容 */
  content: React.ReactNode;
  /** 持续显示时间，默认2000ms */
  duration?: number;
  /** 内容样式 */
  style?: React.CSSProperties;
};

/** 黑背景提示,静态调用 */
Notify.show = (props: StaticProps) => {
  const { duration = 2000, ...rest } = props;
  const dispose = renderElement(
    <TransitionElement duration={transitionDuration}>
      <Notify {...rest} />
    </TransitionElement>
  );
  window.setTimeout(dispose, duration);
};

Notify.displayName = 'UC-Notify';

export default Notify;
