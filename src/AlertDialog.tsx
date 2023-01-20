import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import Divider from './Divider';
import Space from './Space';
import Icon from './Icon';
import * as vars from './vars';
import { Dispose, renderElement, beforeDisposeGen } from './dom';
import { getThemeColorCss } from './themeHelper';
import TransitionElement from './TransitionElement';
import clsx from 'clsx';
import { attachPropertiesToComponent } from './util';

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
  /** 点击确定回调，参数为关闭函数 */
  onConfirm?: (close: () => void) => void;
  /** 取消，关闭默认调用onClose */
  onClose?: () => void;
  /** 取消回调，参数为关闭函数 */
  onCancel?: (close: () => void) => void;
  /** 点击遮罩是否关闭,默认false*/
  closeOnMaskClick?: boolean;
  className?: string;
  /** 按钮间距，默认16 */
  buttonSpace?: number;
  closable?: boolean;
  /** 弹框mount位置，默认为document.body */
  mountContainer?: () => HTMLElement;
  /** 是否显示遮罩，默认显示 */
  mask?: boolean;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 遮罩class*/
  maskClass?: string;
  /** 弹框样式 */
  wrapStyle?: React.CSSProperties;
  /** 透传给 pc confirm button  */
  wait?: number | boolean;
  /** 关闭后卸载组件,默认true*/
  unmountOnExit?: boolean;
  /** ios弹框风格  */
  mobile?: boolean;
};

const StyledAlertDialog = styled(Popup)`
  overflow: hidden;
  // effect
  &.from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
    &.pc {
      top: 160px;
      transform: translate(-50%, 0) scale(0.5);
    }
  }

  &.to {
    transform: translate(-50%, -50%) scale(1);
    &.pc {
      top: 160px;
      transform: translate(-50%, 0) scale(1);
    }
    opacity: 1;
  }
  // end effect

  &.mobile {
    width: 280px;
    padding: 20px 0 0;

    .header {
      text-align: center;
    }

    .body {
      padding: 16px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
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

      .uc-btn {
        height: 48px;
        border: none;
        flex: 1;
      }

      &:after {
        content: '';
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-top: 1px solid ${vars.border};

        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
          width: 200%;
          height: 200%;
          transform: scale(0.5);
          transform-origin: 0 0;
        }
      }
    }
  }

  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: initial;
  border-radius: 8px;
  padding: 24px 24px 16px;
  box-sizing: border-box;
  white-space: normal;
  max-width: calc(100vw - 56px);
  max-height: calc(100vh - 112px);
  width: 420px;
  display: flex;
  flex-direction: column;

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

  .header {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    box-sizing: border-box;
    font-weight: 500;
  }
  .body {
    font-size: 14px;
    line-height: 20px;
    max-height: calc(100vh - 256px);
    padding: 24px 0 32px;
    flex: 1;

    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .footer {
    text-align: right;

    .uc-btn {
      min-width: 80px;
    }
  }
`;

type StaticProps = {
  /** 标题 */
  title?: React.ReactNode;
  /** 内容 */
  content?: React.ReactNode;
  /** 确定按钮文本 */
  confirmText?: string;
  /** 点击确定回调，参数为关闭函数 */
  onConfirm?: (close: () => void) => void;
  /** 取消文本 */
  cancelText?: string;
  /** 取消回调，参数为关闭函数 */
  onCancel?: (close: () => void) => void;
  /** 弹框样式 */
  wrapStyle?: React.CSSProperties;
  /** 透传给button  */
  wait?: number | boolean;
  /** 显示关闭按钮  */
  closable?: boolean;
  /** ios弹框风格  */
  mobile?: boolean;
};

/** 移动端/pc端两种风格的 alert/confirm弹窗 */
const AlertDialog = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    visible = true,
    title,
    content,
    onConfirm,
    onCancel,
    confirmText = '确定',
    cancelText,
    closeOnMaskClick = false,
    buttonSpace = 16,
    closable = false,
    mask = true,
    maskStyle,
    maskClass,
    onClose,
    className,
    wrapStyle,
    mobile,
    wait,
    ...rest
  } = props;

  return (
    <StyledAlertDialog
      {...rest}
      ref={ref}
      className={clsx('uc-alert-dialog', className, { mobile })}
      visible={visible}
      onClose={onClose}
      position="center"
      mask={mask}
      style={wrapStyle}
      maskStyle={maskStyle}
      maskClass={maskClass}
      closeOnMaskClick={closeOnMaskClick}
    >
      {closable && <Icon type="uc-icon-guanbi" className="close" onClick={onClose} />}
      {title && <div className={clsx('header')}>{title}</div>}
      <div className={clsx('body')}>{content}</div>
      <div className={clsx('footer')}>
        {!mobile ? (
          <Space size={buttonSpace}>
            {cancelText ? (
              <Button
                onClick={() => {
                  onCancel?.(onClose);
                  if (typeof onCancel !== 'function') {
                    onClose?.();
                  }
                }}
                className={clsx('cancel')}
              >
                {cancelText}
              </Button>
            ) : null}

            {confirmText && (
              <Button
                type="primary"
                wait={wait}
                className={clsx('confirm')}
                onClick={() => {
                  onConfirm?.(onClose);

                  if (typeof onConfirm !== 'function') {
                    onClose?.();
                  }
                }}
              >
                {confirmText}
              </Button>
            )}
          </Space>
        ) : (
          <>
            {cancelText ? (
              <>
                <Button
                  className={clsx('cancel')}
                  onClick={() => {
                    onCancel?.(onClose);

                    if (typeof onCancel !== 'function') {
                      onClose?.();
                    }
                  }}
                >
                  {cancelText}
                </Button>
                <Divider
                  type="vertical"
                  style={{ height: '100%', color: vars.border, margin: 0 }}
                />
              </>
            ) : null}
            <Button
              className={clsx('confirm')}
              wait={wait}
              onClick={() => {
                onConfirm?.(onClose);

                if (typeof onConfirm !== 'function') {
                  onClose?.();
                }
              }}
            >
              {confirmText}
            </Button>
          </>
        )}
      </div>
    </StyledAlertDialog>
  );
});

AlertDialog.displayName = 'UC-AlertDialog';

const transitionDuration = 240;

const show = (props: StaticProps) => {
  const {
    title,
    content,
    confirmText = '确定',
    onConfirm,
    cancelText,
    onCancel,
    mobile,
    wait,
    wrapStyle,
    ...rest
  } = props;

  const container = document.createElement('div');

  const beforeDispose = beforeDisposeGen(container, '.uc-popup', transitionDuration);

  const dispose: Dispose = renderElement(
    <TransitionElement duration={transitionDuration}>
      <AlertDialog
        {...rest}
        mobile={mobile}
        title={title}
        content={content}
        visible
        confirmText={confirmText}
        cancelText={cancelText}
        wrapStyle={wrapStyle}
        wait={wait}
        onConfirm={() => {
          onConfirm?.(() => dispose(beforeDispose));
        }}
        onClose={() => {
          dispose(beforeDispose);
        }}
        onCancel={() => {
          onCancel?.(() => dispose(beforeDispose));
        }}
        mountContainer={() => container}
      />
    </TransitionElement>,
    container
  );
};

export default attachPropertiesToComponent(AlertDialog, {
  show,
});
