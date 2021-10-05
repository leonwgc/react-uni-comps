import React from 'react';
declare type Props = {
    className?: string;
    /** 确定按钮文字,默认：确定 */
    okText?: React.ReactNode;
    /** 自定义按钮 ./X */
    customKey?: '.' | 'X' | '';
    /** 显示小数点,默认false */
    dot?: boolean;
    onClick: (key: string) => void;
};
/** 数字键盘 */
declare const NumberKeyboard: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default NumberKeyboard;
