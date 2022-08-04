import React, { ReactNode } from 'react';
import type { ObjectType } from './types';
import { Options } from 'sortablejs';
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /** 数据列表 */
    dataList?: Array<ObjectType>;
    /** 数据项渲染 */
    dataRender?: (data: ObjectType) => ReactNode;
    /** 顺序改变回调 */
    onSort?: (list: Array<ObjectType>) => void;
    /** sortablejs 配置 http://www.sortablejs.com/options.html */
    config?: Options;
};
/**
 * 拖拽排序列表
 */
declare const SortableList: React.FC<Props>;
export default SortableList;
