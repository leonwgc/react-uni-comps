import React from 'react';
import ReactDOM from 'react-dom';
import Popup, { Props as PopupProps } from './Popup';
import styled from 'styled-components';
import clsx from 'clsx';
import { isBrowser } from './dom';

const StyleToast = styled(Popup)`
  z-index: 1000;
  padding: 12px 16px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  border-radius: 2px;
  text-align: center;
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

const getContainer = () => {
  if (isBrowser) {
    let div = document.querySelector('.uc-toast-static') as HTMLElement;
    if (!div) {
      div = document.createElement('div');
      div.className = 'uc-toast-static';
      document.body.appendChild(div);
    }

    return div;
  }
  return null;
};

/** 黑背景提示 */
const Toast = (props: Props): React.ReactElement => {
  const { content, visible, modal, maskStyle, className, ...rest } = props;

  const toastProps: Partial<PopupProps> = {};
  if (modal) {
    toastProps.mask = true;
    toastProps.maskStyle = { opacity: 0, zIndex: 500, ...maskStyle };
  } else {
    toastProps.mask = false;
  }

  return (
    <StyleToast
      {...rest}
      position="center"
      visible={visible}
      className={clsx('uc-toast', className)}
      {...toastProps}
    >
      {content}
    </StyleToast>
  );
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
  /** toast style */
  style?: React.CSSProperties;
  /** 模态时 mask style */
  maskStyle: React.CSSProperties;
};

/** 黑背景提示,静态调用 */
Toast.show = (props: StaticToastProps) => {
  const { duration = 2000, ...rest } = props;
  const container = getContainer();

  ReactDOM.render(<Toast modal {...rest} visible />, container);

  window.setTimeout(() => {
    ReactDOM.unmountComponentAtNode(container);
  }, duration);
};

Toast.displayName = 'UC-Toast';

export default Toast;
