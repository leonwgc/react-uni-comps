import React from 'react';
import type { MountContainerType } from './types';
export declare type Props = {
    /** 是否可见 */
    visible?: boolean;
    /**  关闭回调 */
    onClose?: () => void;
    /**
     * 是否显示遮罩
     * @default true
     */
    mask?: boolean;
    /** 遮罩样式 */
    maskStyle?: React.CSSProperties;
    /** 遮罩class*/
    maskClass?: string;
    /** 弹框弹出位置，从上，下，左，右，中间 弹出 */
    position?: 'top' | 'bottom' | 'left' | 'center' | 'right';
    /**
     * 动画时间
     * @default 160ms
     */
    duration?: number;
    /**
     * 弹框挂载节点
     * @default document.body
     */
    mountContainer?: MountContainerType;
    /** 弹框里面的内容 */
    children?: React.ReactNode;
    /** 弹框样式 */
    style?: React.CSSProperties;
    /** 弹框类 */
    className?: string;
    /**
     * 点击遮罩是否关闭
     * @default true
     * */
    closeOnMaskClick?: boolean;
    /**
     * pc端从点击元素飞出动画效果
     * @default true
     */
    flip?: boolean;
    /**
     * 关闭后卸载组件
     * @default true
     */
    unmountOnExit?: boolean;
};
/**
 *
 * 弹层，从上，下，左，右，中间弹出
 *
 *  无须直接使用->
 *  对话框请使用 Modal
 *  上下左右滑出请使用 Drawer
 *
 */
declare const Popup: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Popup;
