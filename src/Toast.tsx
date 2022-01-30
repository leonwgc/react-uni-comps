import React, { forwardRef, ReactNode } from 'react';
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

type StaticToastProps =
  | React.ReactNode
  | {
      /** 内容 */
      content: React.ReactNode;
      /** 持续显示时间，默认1500ms */
      duration?: number;
      /** 模态, 默认true */
      modal?: boolean;
      /** toast class */
      className?: string;
      /** 内容样式, 应用于StyledToast */
      style?: React.CSSProperties;
      /** 模态时 mask style */
      maskStyle: React.CSSProperties;
      /* Toast 隐藏后的回调函数 */
      afterClose?: () => void;
    };

/** 黑背景轻提示 */
const Toast: React.ForwardRefExoticComponent<Props> & {
  /** 黑背景提示,静态调用 */ show?: (
    props:
      | ReactNode
      | {
          /** 内容 */
          content: React.ReactNode;
          /** 持续显示时间，默认1500ms */
          duration?: number;
          /** 模态, 默认true */
          modal?: boolean;
          className?: string;
          /** 容器样式 */
          style?: React.CSSProperties;
          /** 模态时 mask style */
          maskStyle: React.CSSProperties;
          /* Toast 隐藏后的回调函数 */
          afterClose?: () => void;
        }
  ) => void;
} = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { content, visible, modal = true, maskStyle, className, ...rest } = props;

  return visible ? (
    <>
      <Mask visible={modal} style={{ opacity: 0, ...maskStyle }} />
      <StyledToast {...rest} ref={ref} className={clsx('uc-toast', className)}>
        {content}
      </StyledToast>
    </>
  ) : null;
});

const transitionDuration = 240;

/** 黑背景提示,静态调用 */
Toast.show = (props: StaticToastProps | React.ReactNode) => {
  let toastProps = {};
  let _duration = 1500;

  const isToastProps = typeof props === 'object' && 'content' in props;

  if (isToastProps) {
    const { duration = 1500, ...rest } = props;
    toastProps = rest;
    _duration = duration;
  } else {
    toastProps = {
      content: props,
    };
  }

  const container = document.createElement('div');

  const beforeDispose = beforeDisposeGen(container, '.uc-toast', transitionDuration);

  const dispose: Dispose = renderElement(
    <TransitionElement duration={transitionDuration}>
      <Toast {...toastProps} visible />
    </TransitionElement>,
    container
  );
  window.setTimeout(() => {
    dispose(beforeDispose);
    if (isToastProps) {
      props.afterClose?.();
    }
  }, _duration);
};

Toast.displayName = 'UC-Toast';

export default Toast;
