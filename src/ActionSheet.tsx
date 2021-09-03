import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import * as colors from './colors';
import clsx from 'clsx';

export type Action = {
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
  onClose?: () => void;
  onMaskClick?: () => void;
  closeOnMaskClick?: boolean;
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
`;

/** 动作面板 */
const ActionSheet = (props: Props): React.ReactElement => {
  const {
    visible = false,
    actions = [],
    cancelText = '',
    closeOnMaskClick = true,
    onMaskClick,
    onClose,
    extra,
    ...rest
  } = props;

  return (
    <StyledActionSheet
      className={clsx('uc-actionsheet')}
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
            <div
              key={index}
              className={clsx('wrapper', { disabled: action.disabled })}
              onClick={() => {
                action.onClick?.();
              }}
            >
              <Button block disabled={action.disabled}>
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
