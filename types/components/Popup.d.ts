import React from 'react';
export declare type Props = {
    visible?: boolean;
    width?: string | number;
    showMask?: boolean;
    onMaskClick?: () => void;
    position: 'top' | 'bottom' | 'left' | 'center' | 'right';
    duration?: number;
    mountContainer?: () => HTMLElement;
    children?: React.ReactNode;
    [p: string]: unknown;
};
declare const Popup: React.FC<Props>;
export default Popup;
