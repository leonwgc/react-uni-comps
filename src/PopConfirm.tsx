import React, { useRef, useImperativeHandle } from 'react';
import { Placement } from './popovers/types';
import styled from 'styled-components';
import clsx from 'clsx';
import PopMenu, { PopMenuRefType } from './PopMenu';
import Icon from './Icon';
import Button from './Button';

type Offset = { x?: number; y?: number };

const StyledMenu = styled(PopMenu)`
  padding: 16px;

  .popconfirm-content {
    min-width: 120px;
    .title {
      display: flex;
      color: #1a1a1a;
      font-size: 14px;
      align-items: center;
      .pop-icon {
        margin-right: 8px;
        font-size: 20px;
        color: #fab20a;
      }
    }

    .ops {
      display: flex;
      justify-content: flex-end;
      margin-top: 24px;

      button {
        height: 28px;
        &:first-child {
          margin-right: 12px;
        }
      }
    }
  }
`;

export type Props = {
  className?: string;
  /** 显示箭头,默认不显示 */
  arrow?: boolean;
  /** 显示位置,默认top,参考popover */
  placement?: Placement;
  children: React.ReactElement;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /** 触发方式 */
  trigger: 'click' | 'hover';
  /** 点击内容区域关闭,默认true */
  closeOnClick?: boolean;
  hoverDelay?: number;
  /** visible状态变化回调 */
  onVisibleChange?: (visible: boolean) => void;
  icon?: React.ReactNode;
  /** 确认框的描述 */
  title?: React.ReactNode;
  /** 确认按钮文字 */
  okText?: string;
  /** 确认按钮 props*/
  okButtonProps?: Record<string, unknown>;
  /** 取消按钮文字 */
  cancelText?: string;
  /** 取消按钮 props*/
  cancelButtonProps?: Record<string, unknown>;
  /** 点击取消的回调*/
  onCancel?: () => void;
  /** 点击确认的回调*/
  onOk?: () => void;
  /** 点击外部区域是否关闭*/
  closeOnClickOutside?: boolean;
  /** 展开动画, 默认true */
  animated?: boolean;
};

/**
 * 点击元素，弹出气泡式的确认框。基于PopMenu
 *
 * target: pc
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
const PopConfirm = React.forwardRef<PopMenuRefType, Props>((props, ref) => {
  const {
    placement = 'top',
    icon = <Icon type="uc-icon-jinggao" />,
    className,
    children,
    title,
    okText = '确定',
    okButtonProps,
    cancelButtonProps,
    cancelText = '取消',
    arrow = true,
    onOk,
    closeOnClick = true,
    onCancel,
    ...popomenuRest
  } = props;

  const popmenuRef = useRef<PopMenuRefType>();

  useImperativeHandle(ref, () => popmenuRef.current);

  return (
    <StyledMenu
      ref={popmenuRef}
      {...popomenuRest}
      className={clsx('uc-popconfirm', className)}
      placement={placement}
      arrow={arrow}
      content={
        <div
          className={clsx('popconfirm-content')}
          onClick={(e) => {
            if (!closeOnClick) {
              e.stopPropagation();
            }
          }}
        >
          <div className="title">
            {icon && <span className="pop-icon">{icon}</span>} {title}
          </div>
          <div className="ops">
            <Button
              {...cancelButtonProps}
              onClick={() => {
                onCancel?.();
                popmenuRef.current?.hide();
              }}
            >
              {cancelText}
            </Button>
            <Button
              type="primary"
              {...okButtonProps}
              onClick={(e) => {
                if (!closeOnClick) {
                  e.stopPropagation(); // prevent popmenu closeOnClick in out wrapper
                }

                onOk?.();
              }}
            >
              {okText}
            </Button>
          </div>
        </div>
      }
    >
      {children}
    </StyledMenu>
  );
});

PopConfirm.displayName = 'UC-PopConfirm';

export default PopConfirm;
