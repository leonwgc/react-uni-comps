import React from 'react';
/** 宽高比 */
declare const AspectRatio: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 宽高比
     * @default 4/3
     *  */
    ratio?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default AspectRatio;
