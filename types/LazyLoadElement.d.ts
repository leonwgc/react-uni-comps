import React from 'react';
declare type Props = {
    /** 需要lazyload的元素 */
    children: React.ReactElement;
    /** placeholder 宽度 */
    width?: string | number;
    /** placeholder 高度 */
    height?: string | number;
    style?: React.CSSProperties;
};
/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
declare const LazyLoadElement: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default LazyLoadElement;
