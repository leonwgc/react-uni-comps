import React from 'react';
import { Placement } from './popovers/types';
declare type Offset = {
    x?: number;
    y?: number;
};
export declare type Props = {
    className?: string;
    /** menu容器 */
    content?: React.ReactNode;
    /** 显示箭头,默认不显示 */
    arrow?: boolean;
    /** 显示位置,默认bottom-right底部,参考popover */
    placement?: Placement;
    /** 需要tooltip的子元素 */
    children: React.ReactElement;
    /** 弹框自定义偏移 */
    offset?: Offset;
    /** 触发方式 */
    trigger: 'click' | 'hover';
    /** 点击内容区域关闭,默认true */
    closeOnClick?: boolean;
    /** hover触发显示，关闭的timeout时间，默认100 (ms) */
    hoverDelay?: number;
    /** visible状态变化回调 */
    onVisibleChange?: (visible: boolean) => void;
};
/** click/hover 弹出菜单, 默认click, 基于Popover */
declare const PopMenu: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default PopMenu;