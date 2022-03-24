import React from 'react';
import { Props as PopupProps } from './Popup';
declare type Props = Omit<PopupProps, 'position'> & {
    /** 头部 */
    header?: React.ReactNode;
    /** 尾部 */
    footer?: React.ReactNode;
    /**
     * 弹框弹出位置，从上，下，左，右 弹出
     * @default right
     */
    position?: 'top' | 'bottom' | 'left' | 'right';
};
/** 抽屉 */
declare const Drawer: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default Drawer;
