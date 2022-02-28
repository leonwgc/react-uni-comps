import React from 'react';
import type { NoOnChangeHtmlElement } from './types';
/** 开关 */
declare const Switch: React.ForwardRefExoticComponent<{
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
} & NoOnChangeHtmlElement & React.RefAttributes<HTMLDivElement>>;
export default Switch;
