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
    /** 关闭后卸载组件,默认true*/
    unmountOnExit?: boolean;
};
/** 抽屉 */
declare const Drawer: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default Drawer;
