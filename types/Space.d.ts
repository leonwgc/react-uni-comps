import * as React from 'react';
import type { BaseProps } from './types';
declare type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';
declare type SpaceProps = {
    /** 间距大小 */
    size?: number | [number, number];
    /** 间距方向 */
    direction?: 'horizontal' | 'vertical';
    /** 对齐方式 */
    align?: Align;
    /** 设置拆分 */
    split?: React.ReactNode;
    /** 是否自动换行，仅在 horizontal 时有效 */
    wrap?: boolean;
    onClick?: (e: React.SyntheticEvent) => void;
} & BaseProps;
/** 间距 */
declare const Space: React.FC<SpaceProps>;
export default Space;
