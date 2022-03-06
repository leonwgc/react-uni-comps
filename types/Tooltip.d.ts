import React from 'react';
import type { Placement } from 'w-popover';
declare type Offset = {
    x?: number;
    y?: number;
};
export declare type Props = {
    className?: string;
    /** tooltip显示的内容 */
    title?: React.ReactNode;
    /** 显示箭头,默认显示 */
    arrow?: boolean;
    /** 显示位置,参考popover */
    placement?: Placement;
    /** 需要tooltip的子元素 */
    children: React.ReactElement;
    /** 弹框自定义偏移 */
    offset?: Offset;
    /** hover触发显示，关闭的timeout时间，默认100 (ms) */
    hoverDelay?: number;
    /** visible状态变化回调 */
    onVisibleChange?: (visible: boolean) => void;
    /** 展开动画, 默认true */
    animate?: boolean;
};
/** 文字提示气泡框, 基于Popover */
declare const Tooltip: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default Tooltip;
