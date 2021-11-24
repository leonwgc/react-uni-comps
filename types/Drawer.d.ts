import React from 'react';
import { Props as PopupProps } from './Popup';
declare type Props = PopupProps & {
    /** 头部 */
    header?: React.ReactNode;
    /** 尾部 */
    footer?: React.ReactNode;
    /** 内容 */
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
/** 抽屉 */
declare const Drawer: {
    (props: Props): React.ReactNode;
    displayName: string;
};
export default Drawer;
