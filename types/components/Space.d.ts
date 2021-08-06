import * as React from 'react';
declare type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
    size?: number | [number, number] /** 间距大小 */;
    direction?: 'horizontal' | 'vertical' /** 间距方向 */;
    align?: Align /** 对齐方式 */;
    split?: React.ReactNode /** 设置拆分 */;
    wrap?: boolean /** 是否自动换行，仅在 horizontal 时有效 */;
}
/** 间距容器,参考 https://ant.design/components/space-cn/ */
declare const Space: React.FC<SpaceProps>;
export default Space;
