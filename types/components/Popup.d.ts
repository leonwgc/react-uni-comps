import React from 'react';
export declare type Props = {
    visible?: boolean /** 是否可见 */;
    showMask?: boolean /** 是否显示遮罩 */;
    onMaskClick?: () => void /** 遮罩点击事件 */;
    position: 'top' | 'bottom' | 'left' | 'center' | 'right' /** 弹框弹出位置，从上，下，左，右，中间 弹出 */;
    duration?: number /** 弹出动画时间，默认240ms */;
    mountContainer?: () => HTMLElement /** 弹框mount位置，默认为document.body */;
    children?: React.ReactNode /** 弹框里面的内容 */;
    style?: React.CSSProperties /** 弹框style */;
    className?: string /** 弹框className */;
};
/** 弹框，可以从上，下，左，右，中间弹出 */
declare const Popup: React.FC<Props>;
export default Popup;
