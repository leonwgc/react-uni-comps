import * as React from 'react';
import type { BaseProps } from './types';
declare type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';
/** 间距 */
declare const Space: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 间距大小
     * @default 8
     */
    size?: number | [
        number,
        number
    ];
    /**
     * 排列方向
     * @default horizontal
     *  */
    direction?: 'horizontal' | 'vertical';
    /** 对齐方式 */
    align?: Align;
    /** 设置拆分 */
    split?: React.ReactNode;
    /** 是否自动换行，仅在 horizontal 时有效 */
    wrap?: boolean;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Space;
