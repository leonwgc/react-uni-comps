import React, { HTMLAttributes } from 'react';
import type { TargetElementType } from './types';
declare type Props = {
    target?: TargetElementType;
    /**
     * 滚动高度>visibilityHeight才显示子元素
     * @type {number}
     * @default 100
     */
    visibilityHeight?: number;
} & HTMLAttributes<HTMLSpanElement>;
/**
 * 回到页面顶部
 *
 */
declare const BackTop: {
    (props: Props): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    displayName: string;
};
export default BackTop;
