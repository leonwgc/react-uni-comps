import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import Divider from './Divider';
import Space from './Space';
import Icon from './Icon';
import * as colors from './colors';
import { Dispose, isMobile, renderElement, beforeDisposeGen } from './dom';
import { getThemeColorCss } from './themeHelper';
import TransitionElement from './TransitionElement';
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
  cancelText?: string;
  /** 确认回调 */
  onConfirm?: () => void;
  /** 取消，关闭默认调用onClose */
  onClose?: () => void;
  /** 取消回调 */
  onCancel?: () => void;
  /** 点击遮罩是否关闭,默认false*/
  closeOnMaskClick?: boolean;
  className?: string;
  /** 按钮间距，默认8 */
  buttonSpace?: number;
  /** 按钮宽度，默认62 */
  buttonWidth?: number;
  closable?: boolean;
  /** 弹框mount位置，默认为document.body */
  mountContainer?: () => HTMLElement;
  /** 是否显示遮罩，默认显示 */
  mask?: boolean;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 遮罩class*/
  maskClass?: string;
};

const StyledAlertDialog = styled(Popup)`
  z-index: 300;

  // effect
  &.from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
    &.pc {
      top: 200px;
      transform: translate(-50%, 0) scale(0.5);
    }
  }

  &.to {
    transform: translate(-50%, -50%) scale(1);
    &.pc {
      top: 200px;
      transform: translate(-50%, 0) scale(1);
    }
    opacity: 1;
  }
  // end effect

  &.mobile {
    .uc-alert-dialog-wrap {
      padding-bottom: 0;
      border-radius: 8px;
      width: 280px;

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
    width: 420px;

    .close {
      top: 16px;
      right: 16px;
      color: #999;
      position: absolute;
      display: inline-block;
      cursor: pointer;
      font-size: 16px;

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

type AlertDialogType = React.ForwardRefExoticComponent<Props> & {
  /**
   *  AlertDialog静态调用
   *
   * @param {*} title 标题
   * @param {*} content 内容
   * @param {string} [confirmText='确定'] 确定按钮文本
   * @param {*} onConfirm 确定回调
   * @param {*} cancelText 取消文本
   * @param {*} onCancel 取消回调
   * @return {*}
   */ show?: (
    title?: React.ReactNode,
    content?: React.ReactNode,
    confirmText?: string,
    onConfirm?: () => void,
    cancelText?: string,
    onCancel?: () => void
  ) => void;
};

/** 移动端/pc端两种风格的 alert/confirm弹窗 */
const AlertDialog: AlertDialogType = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    visible = true,
    title,
    content,
    onConfirm,
    onCancel,
    confirmText = '确定',
    cancelText,
    closeOnMaskClick = false,
    buttonSpace = 8,
    buttonWidth = 62,
    closable = false,
    mask = true,
    maskStyle,
    maskClass,
    onClose,
    className,
    ...rest
  } = props;

  return (
    <StyledAlertDialog
      {...rest}
      ref={ref}
      className={clsx('uc-alert-dialog', className, { mobile: isMobile })}
      visible={visible}
      onClose={onClose}
      position="center"
      mask={mask}
      maskStyle={maskStyle}
      maskClass={maskClass}
      closeOnMaskClick={closeOnMaskClick}
    >
      <div className={clsx('uc-alert-dialog-wrap')}>
        {closable && <Icon type="icon-guanbi" className="close" onClick={onClose} />}
        {title && <div className={clsx('title')}>{title}</div>}
        <div className={clsx('content')}>{content}</div>
        <div className={clsx('footer')}>
          {!isMobile ? (
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
});

AlertDialog.displayName = 'UC-AlertDialog';

const transitionDuration = 240;

AlertDialog.show = (title, content, confirmText = '确定', onConfirm, cancelText, onCancel) => {
  if (!content) return;

  const container = document.createElement('div');

  const beforeDispose = beforeDisposeGen(container, '.uc-popup-wrap', transitionDuration);

  const dispose: Dispose = renderElement(
    <TransitionElement duration={transitionDuration}>
      <AlertDialog
        title={title}
        content={content}
        visible
        confirmText={confirmText}
        cancelText={cancelText}
        onConfirm={() => {
          onConfirm?.();
          dispose(beforeDispose);
        }}
        onClose={() => {
          dispose(beforeDispose);
        }}
        onCancel={() => {
          onCancel?.();
          dispose(beforeDispose);
        }}
        mountContainer={() => container}
      />
    </TransitionElement>,
    container
  );
};

export default AlertDialog;
