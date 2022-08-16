import React from 'react';
import styled from 'styled-components';
import SkeletonElement from './SkeletonElement';
import clsx from 'clsx';
import type { StringOrNumber } from './types';
import { prefixClassName } from './helper';

const getClassName = prefixClassName('uc-skeleton');

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 行数
   * @default 3
   *  */
  rowCount?: number;
  /**
   * 行宽
   *
   * @default ['40%', '100%', '60%']
   */
  rowWidth?: StringOrNumber | StringOrNumber[];
  /**
   * 行高
   * @default 12
   */
  rowHeight?: StringOrNumber;
  /**
   * 左侧显示圆形的尺寸，不设置不显示
   *  */
  round?: StringOrNumber;
};

const StyledSkeleton = styled.div`
  .uc-skeleton-element {
    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  &.${getClassName('round')} {
    display: flex;
  }

  .${getClassName('rows')} {
    flex: 1;
    margin-left: 16px;
  }
`;

/** 骨架屏, 包行两种风格, 基于SkeletonElement封装 */
const Skeleton: React.FC<Props> = (props) => {
  const {
    rowCount = 3,
    rowWidth = ['40%', '100%', '60%'],
    rowHeight = 12,
    round,
    className,
    ...rest
  } = props;

  if (rowCount < 1) {
    throw new Error('row必须大于等于1,默认4');
  }

  let rowWidthAr = [];

  if (Array.isArray(rowWidth)) {
    if (rowCount <= rowWidth.length) {
      rowWidthAr = rowWidth.slice(0, rowCount);
    } else {
      while (rowWidth.length < rowCount) {
        rowWidth.push('100%');
      }
      rowWidthAr = rowWidth;
    }
  } else {
    rowWidthAr = Array.from(new Array(rowCount), () => rowWidth);
  }

  return (
    <StyledSkeleton
      {...rest}
      className={clsx(getClassName(), { [getClassName('round')]: round }, className)}
    >
      {round && (
        <SkeletonElement
          shape="circle"
          className="round"
          style={{
            width: round,
            height: round,
          }}
        />
      )}
      <div className={getClassName('rows')}>
        {rowWidthAr.map((v, idx) => (
          <SkeletonElement key={idx} shape="rect" style={{ width: v, height: rowHeight }} />
        ))}
      </div>
    </StyledSkeleton>
  );
};

export default Skeleton;
