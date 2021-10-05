import React from 'react';
import { Placement } from './popovers/types';
export declare type Props = {
    title?: React.ReactNode;
    arrow?: boolean;
    bgColor?: string;
    placement?: Placement;
    children: React.ReactElement;
};
/** 文字提示 */
declare const Tooltip: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default Tooltip;
