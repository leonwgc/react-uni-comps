import React, { HTMLAttributes } from 'react';
declare type Props = {
    /**
     * 滚动高度>visibilityHeight才显示子元素
     * @type {number}
     */
    visibilityHeight?: number;
    children?: React.ReactElement;
} & HTMLAttributes<HTMLSpanElement>;
/**
 * 回到页面顶部
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
declare const ScrollToTop: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default ScrollToTop;
