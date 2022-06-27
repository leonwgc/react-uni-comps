import React from 'react';
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /** 内容,没有内容则显示圆点 */
    content?: React.ReactNode;
    /** 徽标背景色 */
    color?: string;
    /** 自定义徽标样式 */
    badgeStyle?: React.CSSProperties;
};
/** 徽标:右上角添加标记 */
declare const Badge: React.FC<Props>;
export default Badge;
