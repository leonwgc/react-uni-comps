import React from 'react';
import type { BaseProps } from './types';
/** 开关 */
declare const Switch: React.ForwardRefExoticComponent<{
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    children?: React.ReactNode;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Switch;
