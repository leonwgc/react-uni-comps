import React from 'react';
import type { Placement } from './Popover';
import type { BaseProps } from './types';
declare type Offset = {
    x?: number;
    y?: number;
};
export declare type Props = {
    /** tooltip显示的内容 */
    title?: React.ReactNode;
    /** 显示箭头,默认显示 */
    arrow?: boolean;
    /** 显示位置 */
    placement?: Placement;
    /** 需要tooltip的子元素 */
    children: React.ReactElement;
    /** 弹框自定义偏移 */
    offset?: Offset;
    /**
     * hover触发显示，关闭的timeout时间
     * @default 100
     *  */
    hoverDelay?: number;
    /** visible状态变化回调 */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 展开动画
     * @default true
     *  */
    transition?: boolean;
} & BaseProps;
/** 文字提示气泡框, 基于Popover */
declare const Tooltip: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default Tooltip;
