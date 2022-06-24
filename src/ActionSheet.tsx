import React from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import * as vars from './vars';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import type { Props as PopupProps } from './Popup';

const getClassName = prefixClassName('uc-actionsheet');

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
  /** 面板选项列表   */
  actions?: Action[];
  /** 顶部的额外区域   */
  extra?: React.ReactNode;
  /** 取消按钮文字，如果设置为空则不显示取消按钮   */
  cancelText?: string;
} & Omit<PopupProps, 'position' | 'flip' | 'children'>;

const StyledActionSheet = styled(Popup)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  width: 100%;
  background-color: #f5f5f5;
  user-select: none;

  .${getClassName('extra')} {
    background-color: #fff;
    display: flex;
    justify-content: center;
    color: #999;
    font-size: 15px;
    padding: 18px 16px;
    border-bottom: 1px solid ${vars.border};
  }

  .${getClassName('action-item')} {
    border-top: 1px solid ${vars.border};
    background-color: #fff;
    width: 100%;
    padding: 14px;
    height: 55px;
    text-align: center;
    border: none;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #333;

    &.disabled {
      opacity: 1;
      color: #999;
    }

    &.default.pc:hover {
      border-color: ${vars.border};
    }

    .${getClassName('action-item-description')} {
      font-size: 12px;
      margin-top: 4px;
      color: #999;
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${vars.border};
    }

    &.cancel {
      margin-top: 8px;
      border-bottom: none;
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
      className={clsx(getClassName(), className)}
      visible={visible}
      position="bottom"
      closeOnMaskClick={closeOnMaskClick}
      onClose={onClose}
    >
      <div className={getClassName('action-list')}>
        {extra && <div className={getClassName('extra')}>{extra}</div>}
        {actions.map((action, index) => (
          <Button
            key={index}
            disabled={action.disabled}
            style={{ color: action.color }}
            className={clsx(getClassName('action-item'), { disabled: action.disabled })}
            onClick={() => {
              action.onClick?.();
            }}
          >
            {action.text}
            {action.description && (
              <div className={getClassName('action-item-description')}>{action.description}</div>
            )}
          </Button>
        ))}
        {cancelText && (
          <Button
            className={clsx(getClassName('action-item'), 'cancel')}
            onClick={() => {
              onClose?.();
            }}
          >
            {cancelText}
          </Button>
        )}
      </div>
    </StyledActionSheet>
  );
};

ActionSheet.displayName = 'UC-ActionSheet';

export default ActionSheet;
