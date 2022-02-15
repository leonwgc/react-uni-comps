import React from 'react';
import { Props } from './Toast';
declare type StaticProps = {
    /** 显示loading */ show: (content?: React.ReactNode) => void;
    /** 隐藏loading */ hide: () => void;
};
/** 加载Loading */
declare const Loading: React.FC<Props> & Partial<StaticProps>;
export default Loading;
