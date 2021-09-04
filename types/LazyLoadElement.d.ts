import React from 'react';
declare type Props = {
    children: React.ReactElement /** 需要lazyload的组件 */;
    width?: string | number /** placeholder 宽度 */;
    height?: string | number /** placeholder 高度 */;
    style?: React.CSSProperties /** placeholder 样式 */;
    [p: string]: unknown;
};
/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
declare const LazyLoadElement: React.FC<Props>;
export default LazyLoadElement;
