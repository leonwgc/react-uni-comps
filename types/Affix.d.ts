import React, { ReactElement } from 'react';
/** 将页面元素钉在可视范围*/
declare const Affix: React.ForwardRefExoticComponent<{
    /** 距离窗口顶部达到指定偏移量后触发 */
    offsetTop?: number;
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom?: number;
    children?: ReactElement;
    /** 固定状态改变时触发的回调函数 */
    onChange?: (affixed: any) => void;
    /**设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target?: () => HTMLElement | Window;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Affix;
