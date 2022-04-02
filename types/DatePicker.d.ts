import React from 'react';
import { PickerViewRefType } from './PickerView';
import type { BaseProps } from './types';
/** 移动端日期选择 */
declare const DatePicker: React.ForwardRefExoticComponent<{
    /** 值 */
    value?: string | Date;
    /** 关闭回调 */
    onClose: () => void;
    /** 点击确定回调 */
    onOk?: (value: Date) => void;
    /** 值改变回调 */
    onChange?: (value: Date) => void;
    /** 是否显示 */
    visible?: boolean;
    /**
     * 确定文本
     * @default 确定
     *  */
    okText?: React.ReactNode;
    /**
     * 中间标题
     * @default 请选择
     *  */
    title?: React.ReactNode;
    /**
     * 最小年份
     * @default 1980
     *  */
    minYear?: number;
    /**
     * 最大年份
     * @default 2030
     *  */
    maxYear?: number;
    /**
     * 取消文本
     * @default 取消
     *  */
    cancelText?: React.ReactNode;
    /**
     * 语言
     * @default zh
     * */
    locale?: 'zh' | 'en';
} & BaseProps & React.RefAttributes<PickerViewRefType>>;
export default DatePicker;
