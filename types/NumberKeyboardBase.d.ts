import React from 'react';
declare type Props = {
    className?: string;
    /** 确定按钮文字,默认：确定 */
    okText?: React.ReactNode;
    /** 自定义按钮 ./X */
    customKey?: '.' | 'X' | '';
    onClick: (key: string) => void;
};
/** 数字键盘基础 */
declare const NumberKeyboardBase: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default NumberKeyboardBase;
