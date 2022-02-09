import React from 'react';
declare type Props = {
    /** 安全区的位置,默认bottom */
    position?: 'top' | 'bottom' | 'right' | 'left';
    className?: string;
    style?: React.CSSProperties;
};
/** 安全区 */
declare const SafeArea: React.FC<Props>;
export default SafeArea;
