import React from 'react';
/** 显示1px的边 */
declare type Position = 'top' | 'right' | 'bottom' | 'left' | 'all';
/** 包含1px的边的容器div */
declare const HairLineBox: React.ForwardRefExoticComponent<{
    position?: Position /** 显示1px的边，默认为 bottom 底部,为all则显示4条边 */;
    color?: string /** 1px边的颜色,默认 #dcdcdc 浅灰色 */;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default HairLineBox;
