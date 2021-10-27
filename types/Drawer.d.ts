import React from 'react';
import { Props as PopupProps } from './Popup';
declare type Props = PopupProps & {
    /** 头部 */
    header?: React.ReactNode;
    /** 尾部 */
    footer?: React.ReactNode;
    /** 内容 */
    children?: React.ReactNode;
    /** 包裹元素样式 */
    wrapStyle?: React.CSSProperties;
    wrapClassName?: string;
};
/** 抽屉 */
declare const Drawer: {
    (props: Props): React.ReactNode;
    displayName: string;
};
export default Drawer;
