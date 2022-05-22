import React from 'react';
import type { BaseProps } from './types';
/** 分页 */
declare const Pagination: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
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
    /** 总页数 */
    pageCount?: number;
    /** 当前页,1~n */
    currentPage?: number;
    /** 当前页改变回调 */
    onPageChange?: (page: number) => void;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Pagination;
