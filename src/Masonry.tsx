import React, { useLayoutEffect, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Space from './Space';
import useForceUpdate from './hooks/useForceUpdate';
import { throttle } from './helper';
import type { BaseProps } from './types';
import { nanoid } from 'nanoid';

const StyledWrap = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;

  .uc-masonry-col {
    display: flex;
    flex-direction: column;
  }
`;

type Props = {
  /**
   * 数据列之间的间隔
   *
   * @default 10
   */
  columnGap?: number;
  /**
   * 渲染的列数
   *
   * @default 2
   */
  columnCount?: number;
  /**
   * 数据行之间的间隔
   *
   * @default 10
   */
  rowGap?: number;
} & BaseProps;

/** 瀑布流布局 */
const Masonry = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, columnGap = 10, rowGap = 10, columnCount = 2, ...rest } = props;

  const wrapElRef = useRef<HTMLDivElement>();
  useImperativeHandle(ref, () => wrapElRef.current);
  const forceUpdate = useForceUpdate();

  const colRef = useRef<{ colWidth: number | string }>({
    colWidth: 'auto',
  });

  useLayoutEffect(() => {
    const getColWidth = () => {
      const wrapEl = wrapElRef.current;
      if (wrapEl) {
        colRef.current.colWidth =
          (wrapEl.offsetWidth - (columnCount - 1) * columnGap) / columnCount;
        forceUpdate();
      }
    };

    getColWidth();

    const tGetColWidth = throttle(getColWidth);
    window.addEventListener('resize', tGetColWidth);

    return () => {
      window.removeEventListener('resize', tGetColWidth);
    };
  }, [columnCount, columnGap, forceUpdate]);

  const columnCountArr = new Array(columnCount);
  const items = React.Children.toArray(children);

  for (let i = 0; i < items.length; i++) {
    const colIndex = i % columnCount;
    if (!columnCountArr[colIndex]) {
      columnCountArr[colIndex] = [];
    }

    columnCountArr[colIndex].push(items[i]);
  }

  return (
    <StyledWrap ref={wrapElRef} {...rest} className={clsx(className, 'uc-masonry')}>
      <Space align="flex-start" className="uc-masonry-col-wrap" size={columnGap}>
        {columnCountArr.map((items, i) => {
          return (
            <div className="uc-masonry-col" key={i} style={{ width: colRef.current.colWidth }}>
              {items.map((item) => (
                <div
                  key={item.key || nanoid()}
                  className={clsx('uc-masonry-item')}
                  style={{ marginBottom: rowGap }}
                >
                  {item}
                </div>
              ))}
            </div>
          );
        })}
      </Space>
    </StyledWrap>
  );
});

Masonry.displayName = 'UC-Masonry';

export default Masonry;
