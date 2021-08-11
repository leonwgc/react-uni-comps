import React from 'react';
export declare type Props = {
    label?: React.ReactNode /** 标题 */;
    content?: React.ReactNode /** 内容 */;
    lineColor?: string /** 底部线条颜色,默认#dcdcdc,不想要线条，设置为透明 */;
};
/** 列表项，通常用于移动端 */
declare const Cell: React.FC<Props>;
export default Cell;
