import React, { ReactNode } from 'react';
import type { ObjectType } from './types';
declare type Props = {
    /** 数据列表 */
    dataList?: Array<ObjectType>;
    /** 数据项渲染 */
    dataRender?: (data: ObjectType) => ReactNode;
    style?: React.CSSProperties;
    className?: string;
    /** 顺序改变回调 */
    onSort?: (list: Array<ObjectType>) => void;
    /** sortablejs 配置 */
    config?: ObjectType;
};
/**
 * 拖拽排序列表
 */
declare const SortableList: React.FC<Props>;
export default SortableList;