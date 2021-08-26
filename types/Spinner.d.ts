import React from 'react';
export declare type Props = {
    size?: number /** 圈圈大小,应用到font-size,默认16 */;
    color?: string /** 圈圈颜色*/;
};
/** Spinner 加载中 */
declare const Spinner: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Spinner;
