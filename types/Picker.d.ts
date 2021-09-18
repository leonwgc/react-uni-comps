import React from 'react';
declare type DataItem = {
    label: string;
    value: string;
    children?: DataItem[];
};
/** picker 选择器 */
declare const Picker: React.ForwardRefExoticComponent<{
    /** 几栏,默认1 */
    cols?: 1 | 2 | 3;
    data: DataItem[];
    value?: string[];
    onClose: () => void;
    onOk?: (value: string[]) => void;
    visible?: boolean;
    okText?: React.ReactNode;
    title?: React.ReactNode;
    cancelText?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLDivElement>>;
export default Picker;
