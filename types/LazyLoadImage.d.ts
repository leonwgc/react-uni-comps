import React from 'react';
/** 懒加载图片，当做img标签使用, 在视口才加载图片 */
declare const LazyLoadImage: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
export default LazyLoadImage;
