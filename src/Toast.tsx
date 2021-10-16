import React from 'react';
import styled from 'styled-components';
import Mask from './Mask';
import clsx from 'clsx';
import { renderElement } from './dom';

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

/** 黑背景轻提示 */
const Toast = (props: Props): React.ReactElement => {
  const { content, visible, modal = true, maskStyle, className, ...rest } = props;

  return visible ? (
    <>
      {modal && visible && <Mask style={{ opacity: 0, ...maskStyle }} />}
      <StyledToast {...rest} className={clsx('uc-toast', className)}>
        {content}
      </StyledToast>
    </>
  ) : null;
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

/** 黑背景提示,静态调用 */
Toast.show = (props: StaticToastProps) => {
  const { duration = 2000, ...rest } = props;

  const dispose = renderElement(<Toast {...rest} visible />);
  window.setTimeout(dispose, duration);
};

Toast.displayName = 'UC-Toast';

export default Toast;
