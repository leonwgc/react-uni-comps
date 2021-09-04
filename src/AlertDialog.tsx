import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import Space from './Space';
import IconCross from './IconCross';
import * as colors from './colors';
import clsx from 'clsx';

export type Props = {
  visible?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  confirmText?: string;
  cancelText?: boolean;
  onConfirm?: () => void;
  /** 取消，关闭默认调用onClose */
  onClose?: () => void;
  closeOnMaskClick?: boolean;
  className?: string;
  /** 按钮间距，默认8 */
  buttonSpace?: number;
  /** 按钮宽度，默认62 */
  buttonWidth?: number;
  closable?: boolean;
  modal?: boolean;
} & HTMLAttributes<HTMLElement>;

const StyledAlertDialog = styled(Popup)`
  width: 560px;
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
    min-width: 260px;
    max-width: calc(100vw - 56px);
    min-height: 190px;
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

/** alert/confirm弹窗 */
const AlertDialog = (props: Props): React.ReactElement => {
  const {
    visible = true,
    title,
    content,
    onConfirm,
    confirmText = '确定',
    cancelText,
    closeOnMaskClick = true,
    buttonSpace = 8,
    buttonWidth = 62,
    closable = false,
    onClose,
    ...rest
  } = props;

  return (
    <StyledAlertDialog
      className={clsx('uc-alert-dialog')}
      visible={visible}
      position="center"
      onMaskClick={() => {
        if (closeOnMaskClick) {
          onClose?.();
        }
      }}
      {...rest}
    >
      <div className={clsx('uc-alert-dialog-wrap')}>
        {closable && <IconCross className="close" size={20} onClick={onClose} />}
        <div className={clsx('title')}>{title}</div>
        <div className={clsx('content')}>{content}</div>
        <div className={clsx('footer')}>
          <Space size={buttonSpace}>
            {cancelText ? (
              <Button onClick={onClose} style={{ width: buttonWidth }}>
                {cancelText}
              </Button>
            ) : null}
            <Button type="primary" onClick={onConfirm} style={{ width: buttonWidth }}>
              {confirmText}
            </Button>
          </Space>
        </div>
      </div>
    </StyledAlertDialog>
  );
};

AlertDialog.displayName = 'UC-ActionSheet';

export default AlertDialog;
