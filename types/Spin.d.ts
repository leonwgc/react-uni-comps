import React from 'react';
declare type Props = {
    style?: React.CSSProperties;
    className?: string;
    /** 延迟显示等待时间，单位ms ,默认false ,如果是true ,默认延时700ms显示 */
    wait?: boolean | number;
    /** 是否显示,搭配wait使用，默认 true */
    loading?: boolean;
};
/** 加载中指示器,继承父容器颜色和字体大小 */
declare const Spin: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Spin;
