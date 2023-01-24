import React, { forwardRef, useImperativeHandle, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import { renderElement, isMobile, Dispose, beforeDisposeGen } from './dom';
import TransitionElement from './TransitionElement';
import { boxShadow, animationNormal } from './vars';
import Mask from './Mask';
import type { BaseProps } from './types';
import useIsomorphicLayoutEffect from './hooks/useisomorphicLayoutEffect';

const transitionDuration = animationNormal;

const StyledNotify = styled.div`
  position: fixed;
  z-index: 600;
  transition: all ${transitionDuration}ms ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  &.from {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }

  &.to {
    transform: none;
    opacity: 1;
  }

  .content {
    padding: 8px 12px;
    height: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    }
  }
`;

type Props = {
  /** 内容 */
  content?: React.ReactNode;
} & BaseProps;

type StaticProps =
  | ReactNode
  | {
      /** 内容 */
      content: React.ReactNode;
      /** 持续显示时间，默认2000ms */
      duration?: number;
      /** 内容样式 */
      style?: React.CSSProperties;
    };

type Pos = { top: number; height: number; el: HTMLElement };

const allNotifies: Array<Pos> = [];

/** 顶部全局消息通知 */
const Notify: React.FC<Props> & {
  /**顶部全局消息通知静态调用  */ show?: (props: StaticProps) => void;
} = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { content, style, className, ...rest } = props;
  const elRef = useRef<HTMLDivElement>();

  useImperativeHandle(ref, () => elRef.current);

  useIsomorphicLayoutEffect(() => {
    if (!isMobile && elRef.current) {
      if (allNotifies.length > 0) {
        const lastElPos = allNotifies[allNotifies.length - 1];
        elRef.current.style.top = lastElPos.top + lastElPos.height + 16 + 'px';
      }

      const css = window.getComputedStyle(elRef.current);

      allNotifies.push({
        top: parseInt(css.getPropertyValue('top'), 10),
        height: parseInt(css.getPropertyValue('height'), 10),
        el: elRef.current,
      });

      return () => {
        const item = allNotifies.shift();
        if (allNotifies.length > 0 && item) {
          const h = item.height;
          allNotifies.map((n) => {
            n.el.style.top = parseInt(n.el.style.top, 10) - h + 'px';
          });
        }
      };
    }
  }, []);

  return (
    <StyledNotify
      {...rest}
      ref={elRef}
      className={clsx('uc-notify', className, { mobile: isMobile, pc: !isMobile })}
    >
      <Mask style={{ background: 'transparent' }} visible={isMobile} />
      <div className={clsx('content')} style={style}>
        {content}
      </div>
    </StyledNotify>
  );
});

let t = 0;

/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */
Notify.show = (props: StaticProps | React.ReactNode) => {
  if (isMobile && t > 0) {
    return;
  }
  t++;
  let notifyProps = {};
  let _duration = 2000;

  if (typeof props === 'object' && 'content' in props) {
    const { duration = 2000, ...rest } = props;
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
    if (t > 0) {
      t = 0;
    }
  }, _duration);
};

Notify.displayName = 'UC-Notify';

export default Notify;
