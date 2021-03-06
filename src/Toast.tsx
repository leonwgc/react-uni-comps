import React from 'react';
import styled from 'styled-components';
import Mask from './Mask';
import clsx from 'clsx';
import { beforeDisposeGen, Dispose, renderElement } from './dom';
import type { BaseProps } from './types';

const StyledToast = styled.div`
  z-index: 2000;
  padding: 12px 16px;
  display: inline-block;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 4px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export type Props = {
  /** 内容 */
  content?: React.ReactNode;
  /**
   * 是否模态
   * @default true
   */
  modal?: boolean;
  visible?: boolean;
  /** mask 样式 */
  maskStyle?: React.CSSProperties;
} & BaseProps;

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
      /** 隐藏后的回调函数 */
      afterClose?: () => void;
    };

/** 轻提示 */
const Toast: React.FC<Props> & {
  /** 轻提示静态调用 */ show: (props: StaticToastProps) => void;
  /** 轻提示静态关闭 */ hide: () => void;
} = (props) => {
  const { content, visible, modal = true, maskStyle, className, ...rest } = props;

  return visible ? (
    <>
      <Mask visible={modal} style={{ opacity: 0, ...maskStyle }} />
      <StyledToast {...rest} className={clsx('uc-toast', className)}>
        {content}
      </StyledToast>
    </>
  ) : null;
};

const transitionDuration = 240;

let _hide = null;

let num = 0;

Toast.show = (props: StaticToastProps) => {
  if (num > 0) {
    // skip
    return;
  }
  num++;
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

  const dispose: Dispose = renderElement(<Toast {...toastProps} visible />, container);

  const hide = () => {
    num--;
    dispose(beforeDispose);
    if (isToastProps) {
      props.afterClose?.();
    }
  };
  window.setTimeout(() => {
    hide();
  }, _duration);

  _hide = hide;

  return hide;
};

Toast.hide = () => {
  _hide?.();
};

Toast.displayName = 'UC-Toast';

export default Toast;
