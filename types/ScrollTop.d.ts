import React, { HTMLAttributes } from 'react';
declare type Props = {
    /**
     * 滚动高度达到此参数值才出现 ScrollTop,默认100
     * @type {number}
     */
    visibilityHeight?: number;
    children?: React.ReactElement;
} & HTMLAttributes<HTMLSpanElement>;
/**
 * windows回到顶部
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
declare const ScrollTop: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default ScrollTop;
