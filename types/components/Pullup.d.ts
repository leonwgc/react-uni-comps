import React from 'react';
export declare type Props = {
    dataList: Array<unknown>;
    dataRender: (data: unknown, index: number) => React.ReactNode;
    fetchData: () => Promise<unknown>;
    hasMoreData: boolean;
    spinner?: React.ReactNode;
    endText?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    footerStyle?: React.CSSProperties;
};
declare const Pullup: React.FC<Props>;
export default Pullup;
