import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import * as colors from './colors';

export type Action = {
  key: string | number;
  text: string;
  disabled?: boolean;
  description?: string;
  color?: string;
  onClick?: () => void;
};

export type Props = {
  visible: boolean;
  actions: Action[];
  extra?: React.ReactNode;
  cancelText?: string;
  onAction?: (action: Action, index: number) => void;
  onClose?: () => void;
  afterClose?: () => void;
  onMaskClick?: () => void;
  closeOnAction?: boolean;
  closeOnMaskClick?: boolean;
  getContainer?: () => HTMLElement;
} & HTMLAttributes<HTMLElement>;

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
    border-bottom: 1px solid ${colors.border};
  }

  .button-list {
    .wrapper {
      background-color: #ffffff;
      border-top: 1px solid ${colors.border};
      padding: 14px;
      text-align: center;
      &:first-child {
        border-top: none;
      }
      &:active:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.1);
      }
      button {
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

        .button-item-description {
          font-size: 12px;
          margin-top: 4px;
          color: #999;
        }
      }
    }
  }
`;

/** 动作面板 */
const ActionSheet = (props: Props): React.ReactElement => {
  const {
    visible = false,
    actions = [],
    cancelText = '',
    closeOnAction = false,
    closeOnMaskClick = true,
    onMaskClick,
    onAction,
    onClose,
    extra,
    ...rest
  } = props;

  return (
    <StyledActionSheet
      visible={visible}
      position="bottom"
      onBackdropClick={() => {
        onMaskClick?.();
        if (closeOnMaskClick) {
          onClose?.();
        }
      }}
      {...rest}
    >
      <div className="wrap">
        {extra && <div className={`extra`}>{extra}</div>}
        <div className={`button-list`}>
          {actions.map((action, index) => (
            <div key={action.key} className={`wrapper`}>
              <Button
                block
                disabled={action.disabled}
                onClick={() => {
                  action.onClick?.();
                  onAction?.(action, index);
                  if (closeOnAction) {
                    onClose?.();
                  }
                }}
                style={{ color: action.color || '#333' }}
              >
                <div className={`button-item-name`}>{action.text}</div>
                {action.description && (
                  <div className={`button-item-description`}>{action.description}</div>
                )}
              </Button>
            </div>
          ))}
        </div>

        {cancelText && (
          <div className={`cancel`}>
            <div className={`button-item-wrapper`}>
              <Button
                block
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
