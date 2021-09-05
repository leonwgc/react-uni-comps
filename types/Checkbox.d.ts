import React from 'react';
/** Checkbox/Radiobox带checked状态的 */
declare const Checkbox: React.ForwardRefExoticComponent<{
    /** 默认18 */
    size?: number;
    /** checked状态改变回调 */
    onChange?: (checked: boolean) => void;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Checkbox;
