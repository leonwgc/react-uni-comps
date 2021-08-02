import React from 'react';
export declare type Props = {
    width?: string | number;
    height?: string | number;
    src: string;
    dataSrc: string;
    [p: string]: any;
};
declare const LazyLoadImage: React.FC<Props>;
export default LazyLoadImage;
