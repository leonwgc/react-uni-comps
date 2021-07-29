import * as React from 'react';
declare type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
    size?: number | [number, number];
    direction?: 'horizontal' | 'vertical';
    align?: Align;
    split?: React.ReactNode;
    wrap?: boolean;
}
declare const Space: React.FC<SpaceProps>;
export default Space;
