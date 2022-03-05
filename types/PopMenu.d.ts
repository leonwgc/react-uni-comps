import React from 'react';
import type { Placement } from './Popover';
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
    /** 触发元素，如果是组件，需要forwardRef到dom */
    children: React.ReactElement;
    /** 弹框自定义偏移 */
    offset?: Offset;
    /** 触发方式, 默认click */
    trigger?: 'click' | 'hover';
    /** 点击内容区域关闭,默认true */
    closeOnClick?: boolean;
    /** hover触发显示，关闭的timeout时间，默认100 (ms) */
    hoverDelay?: number;
    /** visible状态变化回调 */
    onVisibleChange?: (visible: boolean) => void;
    /** 点击外部区域是否关闭*/
    closeOnClickOutside?: boolean;
    /** 展开动画, 默认true */
    animate?: boolean;
    style?: React.CSSProperties;
};
export interface PopMenuRefType {
    show: () => void;
    hide: () => void;
}
/**
 * click/hover 弹出菜单, 默认click, 基于Popover
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
declare const PopMenu: React.ForwardRefExoticComponent<Props & React.RefAttributes<PopMenuRefType>>;
export default PopMenu;
