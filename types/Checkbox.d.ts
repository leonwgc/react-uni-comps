import React from 'react';
export declare type Props = {
    size?: number /** 默认18 */;
    color?: string /** checked状态颜色 */;
    borderRadius?: string /** 默认2px,圆形设置为50% */;
    onChange?: (checked: boolean) => void /** checked状态改变回调 */;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
};
/** Checkbox, Radiobox带checked状态的 */
declare const Checkbox: (props: Props) => React.ReactNode;
export default Checkbox;
