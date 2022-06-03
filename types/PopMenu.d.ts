import React from 'react';
import type { Placement } from './Popover';
declare type Offset = {
    x?: number;
    y?: number;
};
export declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /** 弹出内容 */
    content?: React.ReactNode;
    /**
     * 显示箭头
     * @default false
     *  */
    arrow?: boolean;
    /**
     *  显示位置,默认bottom-right底部,参考popover
     *  @default bottom-right
     *  */
    placement?: Placement;
    /** 触发元素，如果是组件，需要forwardRef到dom */
    children: React.ReactElement;
    /** 弹框自定义偏移 */
    offset?: Offset;
    /**
     * 触发方式
     * @default click
     */
    trigger?: 'click' | 'hover';
    /**
     * 点击内容区域关闭
     * @default true
     */
    closeOnClick?: boolean;
    /**
     * hover触发显示，关闭的timeout时间，默认100 (ms)
     * @default 100
     *  */
    hoverDelay?: number;
    /** visible状态变化回调 */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 点击外部区域是否关闭
     * @default true
     * */
    closeOnClickOutside?: boolean;
    /**
     * 展开动画
     * @default true
     *  */
    animate?: boolean;
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
declare const PopMenu: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /** 弹出内容 */
    content?: React.ReactNode;
    /**
     * 显示箭头
     * @default false
     *  */
    arrow?: boolean;
    /**
     *  显示位置,默认bottom-right底部,参考popover
     *  @default bottom-right
     *  */
    placement?: Placement;
    /** 触发元素，如果是组件，需要forwardRef到dom */
    children: React.ReactElement;
    /** 弹框自定义偏移 */
    offset?: Offset;
    /**
     * 触发方式
     * @default click
     */
    trigger?: 'click' | 'hover';
    /**
     * 点击内容区域关闭
     * @default true
     */
    closeOnClick?: boolean;
    /**
     * hover触发显示，关闭的timeout时间，默认100 (ms)
     * @default 100
     *  */
    hoverDelay?: number;
    /** visible状态变化回调 */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 点击外部区域是否关闭
     * @default true
     * */
    closeOnClickOutside?: boolean;
    /**
     * 展开动画
     * @default true
     *  */
    animate?: boolean;
} & React.RefAttributes<PopMenuRefType>>;
export default PopMenu;
