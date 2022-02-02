import * as React from 'react';
declare type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';
declare type SpaceProps = {
    className?: string;
    style?: React.CSSProperties;
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
};
/** 间距 */
declare const Space: React.FC<SpaceProps>;
export default Space;
