import React from 'react';
import { Placement } from './types';
import { Offset } from './utils/getModalStyle';
export declare type Props = {
    /** 弹框位置,包含-的-后面指示arrow位置 */
    placement?: Placement;
    /** 触发元素 */
    children: React.ReactElement;
    /** 弹框内容 */
    content?: React.ReactNode;
    /** 弹框内容是否显示 */
    visible?: boolean;
    /** arrow是否显示 */
    arrow?: boolean;
    /** 关闭按钮是否显示 */
    closable?: boolean;
    /** container style */
    style?: React.CSSProperties;
    /**  关闭回调 */
    onClose?: () => void;
    className?: string;
    /** backdrop是否显示 */
    backdrop?: boolean;
    /** 弹框自定义偏移 */
    offset?: Offset;
} & React.HTMLAttributes<HTMLElement>;
/**
 * 点击/鼠标移入元素，弹出气泡式的卡片浮层
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
declare const Popover: (props: Props) => React.ReactElement;
export default Popover;
