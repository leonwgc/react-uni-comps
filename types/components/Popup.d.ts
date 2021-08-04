import React from 'react';
export declare type Props = {
    visible?: boolean;
    showMask?: boolean;
    onMaskClick?: () => void;
    position: 'top' | 'bottom' | 'left' | 'center' | 'right';
    duration?: number;
    mountContainer?: () => HTMLElement;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};
declare const Popup: React.FC<Props>;
export default Popup;
