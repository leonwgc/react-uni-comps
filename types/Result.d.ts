import React from 'react';
export declare type ResultProps = React.HTMLAttributes<HTMLDivElement> & {
    /** 图片下方的描述文字 */
    desc?: React.ReactNode;
    /** 自定义图片, 节点/图片链接 */
    image?: React.ReactNode;
    /** 最下面的自定义节点 */
    extra?: React.ReactNode;
};
/** 结果 */
declare const Result: React.FC<ResultProps>;
export default Result;
