import React from 'react';
declare type Props = {
    className?: string;
    onClick: (key: string) => void;
};
/** 数字/身份证键盘 */
declare const NumberKeyboard: React.ForwardRefExoticComponent<Props & React.RefAttributes<{
    focus: () => void;
}>>;
export default NumberKeyboard;
