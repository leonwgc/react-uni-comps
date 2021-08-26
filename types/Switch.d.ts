import React, { HTMLAttributes } from 'react';
export declare type Props = {
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
} & HTMLAttributes<HTMLElement>;
/** 开关 */
declare const Switch: (props: Props) => React.ReactElement;
export default Switch;
