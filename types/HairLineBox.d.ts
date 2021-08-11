import React from 'react';
/** 显示1px的边 */
export declare type Position = 'top' | 'right' | 'bottom' | 'left' | 'all';
export declare type Props = {
    position?: Position /** 显示1px的边，默认为 bottom 底部,为all则显示4条边 */;
    color?: string /** 1px边的颜色,默认 #dcdcdc 浅灰色 */;
};
/** 包含1px的边的容器div */
declare const HairLineBox: React.FC<Props>;
export default HairLineBox;
