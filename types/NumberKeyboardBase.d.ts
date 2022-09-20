import React from 'react';
import type { BaseProps, StringOrNumber } from './types';
/** 数字键盘基础 */
declare const NumberKeyboardBase: React.ForwardRefExoticComponent<{
    /**
     * 确定按钮文字
     * @default 确定
     *  */
    okText?: React.ReactNode;
    /** 自定义按钮 */
    customKey?: '.' | 'X' | '';
    onClick: (key: string) => void;
    /**
     * 高度
     * @default 260
     * */
    height?: StringOrNumber;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default NumberKeyboardBase;
