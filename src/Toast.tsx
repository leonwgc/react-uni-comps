import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Mask from './Mask';
import clsx from 'clsx';
import { beforeDisposeGen, Dispose, renderElement } from './dom';
import TransitionElement from './TransitionElement';

const StyledToast = styled.div`
  z-index: 1000;
  padding: 12px 16px;
  display: inline-block;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  border-radius: 2px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.from {
    opacity: 0;
  }

  &.to {
    opacity: 1;
  }
`;

type Props = {
  content?: React.ReactNode;
  /** 模态, 默认true */
  modal?: boolean;
  visible: boolean;
  /** toast style */
  style?: React.CSSProperties;
  /** modal mask 样式 */
  maskStyle?: React.CSSProperties;
  /** className */
  className?: string;
};

type StaticToastProps = {
  /** 内容 */
  content: React.ReactNode;
  /** 持续显示时间，默认2000ms */
  duration?: number;
  /** 模态, 默认true */
  modal?: boolean;
  /** toast class */
  className?: string;
  /** 内容样式, 应用于StyledToast */
  style?: React.CSSProperties;
  /** 模态时 mask style */
  maskStyle: React.CSSProperties;
};

/** 黑背景轻提示 */
const Toast: React.ForwardRefExoticComponent<Props> & {
  /** 黑背景提示,静态调用 */ show?: (props: StaticToastProps) => void;
} = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { content, visible, modal = true, maskStyle, className, ...rest } = props;

  return visible ? (
    <>
      {modal && visible && <Mask style={{ opacity: 0, ...maskStyle }} />}
      <StyledToast {...rest} ref={ref} className={clsx('uc-toast', className)}>
        {content}
      </StyledToast>
    </>
  ) : null;
});

const transitionDuration = 240;

/** 黑背景提示,静态调用 */
Toast.show = (props: StaticToastProps) => {
  const { duration = 2000, ...rest } = props;

  const container = document.createElement('div');

  const beforeDispose = beforeDisposeGen(container, '.uc-toast', transitionDuration);

  const dispose: Dispose = renderElement(
    <TransitionElement duration={transitionDuration}>
      <Toast {...rest} visible />
    </TransitionElement>,
    container
  );
  window.setTimeout(() => {
    dispose(beforeDispose);
  }, duration);
};

Toast.displayName = 'UC-Toast';

export default Toast;
