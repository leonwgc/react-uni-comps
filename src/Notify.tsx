import React, { forwardRef, useLayoutEffect, useImperativeHandle, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import { renderElement, isMobile, Dispose, beforeDisposeGen } from './dom';
import TransitionElement from './TransitionElement';
import { boxShadow, animationNormal } from './vars';
import Mask from './Mask';

const transitionDuration = animationNormal;

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
    opacity: 0;
  }

  &.to {
    transform: none;
    opacity: 1;
  }

  .content {
    padding: 8px 12px;
  }

  &.pc {
    top: 16px;
    .content {
      box-shadow: ${boxShadow};
      background-color: #fff;
      border-radius: 2px;
    }
  }

  &.mobile {
    .content {
      ${getThemeColorCss('background-color')};
      color: #fff;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

type Props = {
  /** 内容 */
  content?: React.ReactNode;
  /** 内容样式 */
  style?: React.CSSProperties;
  /** wrap class */
  className?: string;
};

type StaticProps = {
  /** 内容 */
  content: React.ReactNode;
  /** 持续显示时间，默认2000ms */
  duration?: number;
  /** 内容样式 */
  style?: React.CSSProperties;
};

type Pos = { top: number; height: number };

const allNotifies: Array<Pos> = [];

/** 顶部全局消息通知 */
const Notify: React.ForwardRefExoticComponent<Props> & {
  /**顶部全局消息通知静态调用  */ show?: (props: StaticProps | ReactNode) => void;
} = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { content, style, className, ...rest } = props;
  const elRef = useRef<HTMLDivElement>();

  useImperativeHandle(ref, () => elRef.current);

  useLayoutEffect(() => {
    if (elRef.current) {
      if (allNotifies.length > 0) {
        const lastElPos = allNotifies[allNotifies.length - 1];
        elRef.current.style.top = lastElPos.top + lastElPos.height + 16 + 'px';
      }

      const css = window.getComputedStyle(elRef.current);

      allNotifies.push({
        top: parseInt(css.getPropertyValue('top'), 10),
        height: parseInt(css.getPropertyValue('height'), 10),
      });

      return () => {
        allNotifies.shift();
      };
    }
  }, []);

  return (
    <>
      {isMobile && <Mask style={{ background: 'transparent' }} />}
      <StyledNotify
        {...rest}
        ref={elRef}
        className={clsx('uc-notify', className, { mobile: isMobile, pc: !isMobile })}
      >
        <div className={clsx('content')} style={style}>
          {content}
        </div>
      </StyledNotify>
    </>
  );
});

/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */
Notify.show = (props: StaticProps | React.ReactNode) => {
  let notifyProps = {};
  let _duration = 1500;

  if (typeof props === 'object' && 'content' in props) {
    const { duration = 1500, ...rest } = props;
    notifyProps = rest;
    _duration = duration;
  } else {
    notifyProps = {
      content: props,
    };
  }

  const container = document.createElement('div');

  const beforeDispose = beforeDisposeGen(container, '.uc-notify', transitionDuration);

  const dispose: Dispose = renderElement(
    <TransitionElement duration={transitionDuration}>
      <Notify {...notifyProps} />
    </TransitionElement>,
    container
  );
  window.setTimeout(() => {
    dispose(beforeDispose);
  }, _duration);
};

Notify.displayName = 'UC-Notify';

export default Notify;
