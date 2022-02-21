import React from 'react';
declare type Props = {
    /** 可视按钮数量 */
    visiblePageCount?: number;
    /** 首页文本 */
    firstText?: string;
    /** 尾页文本 */
    lastText?: string;
    /** 只有一页时是否显示, false */
    showIfOnePage?: boolean;
    /** 是否显示首页尾页, false */
    showFirstLastText?: boolean;
    style?: React.CSSProperties;
    className?: string;
    /** 总页数 */
    pageCount?: number;
    /** 当前页,1~n */
    currentPage?: number;
    /** 当前页改变回调 */
    onPageChange?: (page: number) => void;
};
/** 分页 */
declare const Pagination: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Pagination;
