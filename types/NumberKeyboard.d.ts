import React from 'react';
declare type Props = {
    className?: string;
    /** 确定按钮文字,默认：确定 */
    okText?: React.ReactNode;
    onClick: (key: string) => void;
};
/** 数字/身份证键盘 */
declare const NumberKeyboard: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default NumberKeyboard;
