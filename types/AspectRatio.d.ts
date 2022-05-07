import React from 'react';
/** 宽高比 */
declare const AspectRatio: React.ForwardRefExoticComponent<{
    /**
     * 宽高比
     * @default 4/3
     *  */
    ratio?: number;
} & React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default AspectRatio;
