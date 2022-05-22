//#region  top

import React, { useRef, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import type { ObjectType } from './types';
import Sortable from 'sortablejs';
import { nanoid } from 'nanoid';
import type { BaseProps } from './types';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 数据列表 */
  dataList?: Array<ObjectType>;
  /** 数据项渲染 */
  dataRender?: (data: ObjectType) => ReactNode;
  /** 顺序改变回调 */
  onSort?: (list: Array<ObjectType>) => void;
  /** sortablejs 配置 */
  config?: ObjectType;
} & BaseProps;

const StyledWrapper = styled.div``;

//#endregion

const addKeyToList = (list: Array<ObjectType>) => {
  for (const item of list) {
    if (!item._key) {
      item._key = nanoid(6);
    }
  }

  return list;
};

/**
 * 拖拽排序列表
 */
const SortableList: React.FC<Props> = (props) => {
  const { dataList = [], dataRender, onSort, config, className, ...rest } = props;

  const wrapElRef = useRef<HTMLDivElement>();
  const keyedList = addKeyToList(dataList);
  const ref = useRef({
    list: keyedList,
    onSort: onSort,
    config: config,
  });

  ref.current = {
    list: keyedList,
    onSort: onSort,
    config: config,
  };

  useEffect(() => {
    const el = wrapElRef.current;
    let st;
    if (el) {
      st = Sortable.create(el, {
        ...ref.current.config,
        dataIdAttr: 'data-id',
        store: {
          set: function (ss) {
            const ar = ss.toArray();
            const newList = ref.current.list.sort(
              (a, b) => ar.indexOf(a._key) - ar.indexOf(b._key)
            );
            ref.current.onSort?.([...newList]);
          },
        },
      } as any);
    }
    return () => {
      st.destroy();
    };
  }, [ref]);

  return (
    <StyledWrapper {...rest} ref={wrapElRef} className={clsx('uc-sortable-list', className)}>
      {keyedList.map((item: any) => (
        <div key={item._key} data-id={item._key} className="uc-sortable-item">
          {dataRender(item)}
        </div>
      ))}
    </StyledWrapper>
  );
};

SortableList.displayName = 'UC-SortableList';

export default SortableList;
