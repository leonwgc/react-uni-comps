import React, { ReactNode } from 'react';
import type { ObjectType } from './types';
declare type Props = {
    dataList?: Array<ObjectType>;
    dataRender?: (data: ObjectType) => ReactNode;
    style?: React.CSSProperties;
    className?: string;
    onSort?: (list: Array<ObjectType>) => void;
};
/**
 * 拖拽排序列表
 */
declare const SortableList: React.FC<Props>;
export default SortableList;
