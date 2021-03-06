import React from 'react';
import type { Placement } from './Popover';
import { PopMenuRefType } from './PopMenu';
declare type Offset = {
    x?: number;
    y?: number;
};
export declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 显示箭头
     * @default false
     * */
    arrow?: boolean;
    /**
     * 显示位置,默认top,参考popover
     * @default top
     *  */
    placement?: Placement;
    /** 触发元素，如果是组件，需要forwardRef到dom */
    children?: React.ReactElement;
    /** 弹框自定义偏移 */
    offset?: Offset;
    /**
     * 触发方式
     * @default click
     */
    trigger?: 'click' | 'hover';
    /** 点击内容区域关闭
     * @default true
     */
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
    animate?: boolean;
    style?: React.CSSProperties;
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
declare const PopConfirm: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 显示箭头
     * @default false
     * */
    arrow?: boolean;
    /**
     * 显示位置,默认top,参考popover
     * @default top
     *  */
    placement?: Placement;
    /** 触发元素，如果是组件，需要forwardRef到dom */
    children?: React.ReactElement;
    /** 弹框自定义偏移 */
    offset?: Offset;
    /**
     * 触发方式
     * @default click
     */
    trigger?: 'click' | 'hover';
    /** 点击内容区域关闭
     * @default true
     */
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
    animate?: boolean;
    style?: React.CSSProperties;
} & React.RefAttributes<PopMenuRefType>>;
export default PopConfirm;
