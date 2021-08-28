import React, { HTMLAttributes, ReactElement } from 'react';
export declare type Props = {
    /** 显示遮罩时，设置body.style.overflow为hidden,默认true */
    hideOverflow?: boolean;
    /** 上层元素 */
    children?: ReactElement;
} & HTMLAttributes<HTMLDivElement>;
/** 遮罩层 */
declare const Backdrop: React.ForwardRefExoticComponent<{
    /** 显示遮罩时，设置body.style.overflow为hidden,默认true */
    hideOverflow?: boolean;
    /** 上层元素 */
    children?: ReactElement;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Backdrop;
