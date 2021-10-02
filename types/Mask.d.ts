import React, { ReactElement } from 'react';
/** 遮罩层 */
declare const Mask: React.ForwardRefExoticComponent<{
    /** 显示遮罩时，设置body.style.overflow为hidden,默认true */
    hideOverflow?: boolean;
    style?: React.CSSProperties;
    className?: string;
    /** 上层元素 */
    children?: ReactElement;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Mask;
