import React from 'react';
import type { BaseProps, TargetElementType } from './types';
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /** 距离窗口顶部达到指定偏移量后触发 */
    offsetTop?: number;
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom?: number;
    /** 固定状态改变时触发的回调函数 */
    onChange?: (affixed: boolean) => void;
    /**设置 Affix 需要监听其滚动事件的元素 */
    target?: TargetElementType;
    /**
     * 固钉定位层级
     * @default 100
     */
    zIndex?: number;
} & BaseProps;
/** 将页面元素钉在可视范围*/
declare const Affix: React.FC<Props>;
export default Affix;
