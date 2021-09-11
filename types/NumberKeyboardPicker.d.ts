import React from 'react';
declare type Props = {
    /** 是否弹出 */
    visible: boolean;
    /** 关闭 */
    onClose: () => void;
    className?: string;
    /** 按键回调,返回输入的字符串 */
    onChange: (str: string) => void;
};
/** 数字/身份证键盘底部弹出 */
declare const NumberKeyboardPicker: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default NumberKeyboardPicker;
