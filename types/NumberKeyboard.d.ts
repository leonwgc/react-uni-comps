import React from 'react';
declare type Props = {
    /** 是否弹出 */
    visible: boolean;
    /** 关闭 */
    onClose: () => void;
    className?: string;
    /** 自定义按钮 ./X */
    customKey?: '.' | 'X' | '';
    /** 按键回调,返回输入的字符串 */
    onChange: (str: string) => void;
    /** 确定按钮文字,默认：确定 */
    okText?: React.ReactNode;
    /** 点击遮罩是否关闭,默认true*/
    closeOnMaskClick?: boolean;
};
/** 数字键盘 */
declare const NumberKeyboard: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default NumberKeyboard;
