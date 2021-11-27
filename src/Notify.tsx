import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import { renderElement, isMobile, Dispose, beforeDisposeGen } from './dom';
import TransitionElement from './TransitionElement';
import { boxShadow } from './vars';

const transitionDuration = 240;

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
      box-shadow: ${boxShadow};
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
  /** 内容样式 */
  style?: React.CSSProperties;
  /** wrap class */
  className?: string;
};

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

/** 顶部全局消息通知 */
const Notify: React.ForwardRefExoticComponent<Props> & {
  /**顶部全局消息通知静态调用  */ show?: (props: StaticProps) => void;
} = forwardRef<HTMLDivElement, Props>((props, ref) => {
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

/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */
Notify.show = (props: StaticProps) => {
  const { duration = 2000, ...rest } = props;

  const container = document.createElement('div');

  const beforeDispose = beforeDisposeGen(container, '.uc-notify', transitionDuration);

  const dispose: Dispose = renderElement(
    <TransitionElement duration={transitionDuration}>
      <Notify {...rest} />
    </TransitionElement>,
    container
  );
  window.setTimeout(() => {
    dispose(beforeDispose);
  }, duration);
};

Notify.displayName = 'UC-Notify';

export default Notify;
