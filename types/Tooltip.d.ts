import React from 'react';
import { Placement } from './Popover/types';
export declare type Props = {
    title?: React.ReactNode;
    arrow?: boolean;
    bgColor?: string;
    placement?: Placement;
    children: React.ReactElement;
};
/** Tooltip */
declare const Tooltip: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default Tooltip;
