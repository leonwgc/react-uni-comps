import React from 'react';
declare type Config = {
    /**
     * spin 类型
     * @default ball
     */
    type?: 'ball' | 'spin' | 'round' | 'clock';
    /**
     * spin和内容间距
     * @default 6
     */
    gap?: number;
    /**
     * spin大小
     * @default 32
     */
    spinSize?: number;
    /**
     * 容器样式
     */
    containerStyle?: React.CSSProperties;
};
declare const _default: React.FC<{}> & {
    /** 显示loading */
    show: (text?: React.ReactNode, config?: Config) => void;
    /** 隐藏loading */
    hide: () => void;
};
export default _default;
