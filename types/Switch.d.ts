import React from 'react';
/** 开关 */
declare const Switch: React.ForwardRefExoticComponent<{
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLDivElement>>;
export default Switch;
