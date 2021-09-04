import React from 'react';
import ReactDOM from 'react-dom';
import Popup, { Props as PopupProps } from './Popup';
import styled from 'styled-components';
import clsx from 'clsx';
import { isBrowser } from './dom';

const StyleToast = styled(Popup)`
  padding: 12px 16px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  border-radius: 2px;
  text-align: center;
`;

type Props = {
  content?: React.ReactNode;
  /** 模态 */
  modal?: boolean;
  visible: boolean;
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
  const { content, visible, modal } = props;

  const toastProps: Partial<PopupProps> = {};
  if (modal) {
    toastProps.mask = true;
    toastProps.maskStyle = { opacity: 0 };
  } else {
    toastProps.mask = false;
  }

  return (
    <StyleToast position="center" visible={visible} className={clsx('uc-toast')} {...toastProps}>
      {content}
    </StyleToast>
  );
};

/** 黑背景提示,静态调用 */
Toast.show = (content: string, duration = 3000, modal = true) => {
  if (!content) return;
  const container = getContainer();

  ReactDOM.render(<Toast content={content} visible modal={modal} />, container);

  window.setTimeout(() => {
    ReactDOM.render(<Toast content={content} visible={false} modal={modal} />, container);
  }, duration);
};

Toast.displayName = 'UC-Toast';

export default Toast;
