import React, { HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import Divider from './Divider';
import Space from './Space';
import IconCross from './IconCross';
import * as colors from './colors';
import { isBrowser, isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';

type Props = {
  /** 是否显示 */
  visible?: boolean;
  /** 标题 */
  title?: React.ReactNode;
  /** 内容  */
  content?: React.ReactNode;
  /** 确认文本 */
  confirmText?: string;
  /** 取消文本 */
  cancelText?: boolean;
  /** 确认回调 */
  onConfirm?: () => void;
  /** 取消，关闭默认调用onClose */
  onClose?: () => void;
  /** 取消回调 */
  onCancel?: () => void;
  closeOnMaskClick?: boolean;
  className?: string;
  /** 按钮间距，默认8 */
  buttonSpace?: number;
  /** 按钮宽度，默认62 */
  buttonWidth?: number;
  closable?: boolean;
} & HTMLAttributes<HTMLElement>;

const StyledAlertDialog = styled(Popup)`
  width: 560px;

  &.mobile {
    width: 280px;
    border-radius: 16x;

    .uc-alert-dialog-wrap {
      padding-bottom: 0;
      width: 100%;
      max-width: 100%;
      min-width: unset;
      min-height: unset;

      .title {
        text-align: center;
        border-bottom: none;
      }

      .footer {
        position: relative;
        display: flex;
        height: 48px;
        padding: 0;
        overflow: hidden;
        .confirm {
          ${getThemeColorCss('color')}
        }

        .m-btn {
          height: 48px;
          line-height: 48px;
          text-align: center;
          flex: 1;
          user-select: none;
          &:active {
            background-color: rgba(0, 0, 0, 0.1);
          }
        }

        &:after {
          content: '';
          pointer-events: none;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-top: 1px solid ${colors.border};

          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
            width: 200%;
            height: 200%;
            transform: scale(0.5);
            transform-origin: 0 0;
          }
        }
      }
    }
  }

  .uc-alert-dialog-wrap {
    background-color: #fff;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-align: initial;
    border-radius: 4px;
    padding: 16px 0;
    box-sizing: border-box;
    white-space: normal;
    max-width: calc(100vw - 56px);
    max-height: calc(100vh - 112px);

    .close {
      top: 16px;
      right: 12px;
      color: #999;
      position: absolute;
      display: inline-block;
      cursor: pointer;

      &:hover {
        color: #666;
      }
    }

    .title {
      font-size: 16px;
      line-height: 24px;
      border-bottom-color: ${colors.border};
      color: #333;
      padding: 0 16px 15px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      margin: 0;
      box-sizing: border-box;
      font-weight: 500;
    }
    .content {
      font-size: 14px;
      line-height: 20px;
      color: #333;
      padding: 16px;
      min-height: 46px;
      max-height: calc(100vh - 256px);

      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .footer {
      text-align: right;
      padding: 8px 16px 0;

      button {
        width: 62px;
      }
    }
  }
`;

/** 移动端/pc端两种风格的 alert/confirm弹窗 */
const AlertDialog = (props: Props): React.ReactElement => {
  const {
    visible = true,
    title,
    content,
    onConfirm,
    onCancel,
    confirmText = '确定',
    cancelText,
    closeOnMaskClick = true,
    buttonSpace = 8,
    buttonWidth = 62,
    closable = false,
    onClose,
    className,
    ...rest
  } = props;

  return (
    <StyledAlertDialog
      {...rest}
      className={clsx('uc-alert-dialog', className, { mobile: isMobile() })}
      visible={visible}
      position="center"
      onMaskClick={() => {
        if (closeOnMaskClick) {
          onClose?.();
        }
      }}
    >
      <div className={clsx('uc-alert-dialog-wrap')}>
        {closable && <IconCross className="close" size={24} onClick={onClose} />}
        {title && <div className={clsx('title')}>{title}</div>}
        <div className={clsx('content')}>{content}</div>
        <div className={clsx('footer')}>
          {!isMobile() ? (
            <Space size={buttonSpace}>
              {cancelText ? (
                <Button
                  onClick={() => {
                    onCancel?.();
                    if (typeof onCancel !== 'function') {
                      onClose?.();
                    }
                  }}
                  className={clsx('cancel')}
                  style={{ width: buttonWidth }}
                >
                  {cancelText}
                </Button>
              ) : null}
              <Button
                type="primary"
                className={clsx('confirm')}
                onClick={() => {
                  onConfirm?.();

                  if (typeof onConfirm !== 'function') {
                    onClose?.();
                  }
                }}
                style={{ width: buttonWidth }}
              >
                {confirmText}
              </Button>
            </Space>
          ) : (
            <>
              {cancelText ? (
                <>
                  <div
                    className={clsx('m-btn', 'cancel')}
                    onClick={() => {
                      onCancel?.();
                      if (typeof onCancel !== 'function') {
                        onClose?.();
                      }
                    }}
                  >
                    {cancelText}
                  </div>
                  <Divider
                    type="vertical"
                    style={{ height: '100%', color: colors.border, margin: 0 }}
                  />
                </>
              ) : null}
              <div
                className={clsx('m-btn', 'confirm')}
                onClick={() => {
                  onConfirm?.();

                  if (typeof onConfirm !== 'function') {
                    onClose?.();
                  }
                }}
              >
                {confirmText}
              </div>
            </>
          )}
        </div>
      </div>
    </StyledAlertDialog>
  );
};

AlertDialog.displayName = 'UC-AlertDialog';

const getContainer = () => {
  if (isBrowser) {
    let div = document.querySelector('.uc-alert-dialog-static') as HTMLElement;
    if (!div) {
      div = document.createElement('div');
      div.className = 'uc-alert-dialog-static';
      document.body.appendChild(div);
    }

    return div;
  }
  return null;
};
/**
 *
 *
 * @param {*} title
 * @param {*} content
 * @param {string} [confirmText='确定']
 * @param {*} onConfirm ()=>void
 * @param {*} cancelText
 * @return {*}
 */
AlertDialog.show = (title, content, confirmText = '确定', onConfirm, cancelText) => {
  if (!content) return;
  const container = getContainer();
  ReactDOM.unmountComponentAtNode(container);

  ReactDOM.render(
    <AlertDialog
      title={title}
      content={content}
      visible
      confirmText={confirmText}
      cancelText={cancelText}
      onConfirm={() => {
        onConfirm?.();
        ReactDOM.unmountComponentAtNode(container);
      }}
      onClose={() => {
        ReactDOM.unmountComponentAtNode(container);
      }}
    />,
    container
  );
};

export default AlertDialog;
