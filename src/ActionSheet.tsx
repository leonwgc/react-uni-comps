import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import * as vars from './vars';
import clsx from 'clsx';
import type { BaseProps } from './types';

type Action = {
  /** 标题  */
  text?: React.ReactNode;
  /** 是否为禁用状态  */
  disabled?: boolean;
  /** 描述 */
  description?: React.ReactNode;
  /** 颜色 */
  color?: string;
  /** 点击回调 */
  onClick?: () => void;
};

type Props = {
  /** 显示隐藏   */
  visible: boolean;
  /** 面板选项列表   */
  actions: Action[];
  /** 顶部的额外区域   */
  extra?: React.ReactNode;
  /** 取消按钮文字，如果设置为空则不显示取消按钮   */
  cancelText?: string;
  /** 关闭时触发   */
  onClose?: () => void;
  /** 点击遮罩是否关闭,默认true*/
  closeOnMaskClick?: boolean;
} & BaseProps;

const StyledActionSheet = styled(Popup)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  width: 100%;

  .wrap {
    background-color: #fff;
  }

  .extra {
    display: flex;
    justify-content: center;
    color: #999;
    font-size: 15px;
    padding: 18px 16px;
    border-bottom: 1px solid ${vars.border};
  }

  .button-list {
    .wrapper {
      background-color: #ffffff;
      border-top: 1px solid ${vars.border};

      &.disabled {
        color: #999;

        &:active {
          background-color: unset;
        }
      }
      &:first-child {
        border-top: none;
      }
      &:active {
        background-color: rgba(0, 0, 0, 0.1);
      }

      button {
        width: 100%;
        padding: 14px;
        height: 55px;
        text-align: center;
        background-color: transparent;
        border: none;
        border-radius: 0;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        &:disabled {
          background-color: #fff;
          color: #999;
        }

        .button-item-name {
          color: #333;
          &.disabled {
            color: #999 !important;
          }
        }

        .button-item-description {
          font-size: 12px;
          margin-top: 4px;
          color: #999;
        }
      }
    }
  }

  .uc-actionsheet-cancel {
    background-color: #f5f5f5;
    padding-top: 8px;

    .wrapper {
      background-color: #fff;
      button {
        padding: 14px;
        text-align: center;
        border-radius: 0;
      }
    }
  }
`;

/** 动作面板 */
const ActionSheet: React.FC<Props> = (props) => {
  const {
    visible = false,
    actions = [],
    cancelText = '',
    closeOnMaskClick = true,
    onClose,
    className,
    extra,
    ...rest
  } = props;

  return (
    <StyledActionSheet
      {...rest}
      className={clsx('uc-actionsheet', className)}
      visible={visible}
      position="bottom"
      closeOnMaskClick={closeOnMaskClick}
      onClose={onClose}
    >
      <div className="wrap">
        {extra && <div className={`extra`}>{extra}</div>}
        <div className={`button-list`}>
          {actions.map((action, index) => (
            <div
              key={index}
              className={clsx('wrapper', { disabled: action.disabled })}
              onClick={() => {
                action.onClick?.();
              }}
            >
              <Button disabled={action.disabled}>
                <div
                  className={clsx('button-item-name', { disabled: action.disabled })}
                  style={{ color: action.color || '#333' }}
                >
                  {action.text}
                </div>
                {action.description && (
                  <div className={`button-item-description`}>{action.description}</div>
                )}
              </Button>
            </div>
          ))}
        </div>

        {cancelText && (
          <div className={`uc-actionsheet-cancel button-list`}>
            <div className={`wrapper`}>
              <Button
                className={`button-item`}
                onClick={() => {
                  onClose?.();
                }}
              >
                <div className={`button-item-name`}>{cancelText}</div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </StyledActionSheet>
  );
};

ActionSheet.displayName = 'UC-ActionSheet';

export default ActionSheet;
