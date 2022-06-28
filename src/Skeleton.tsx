import React from 'react';
import styled from 'styled-components';
import SkeletonElement from './SkeletonElement';
import clsx from 'clsx';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * count of rows
   * @default 3
   *  */
  rowCount?: number;
  /**
   * row width，if set to string ,each row width set to the same
   *
   * @default ['40%', '100%', '60%']
   */
  rowWidth?: string | string[];
  /** height of row
   * @default 16
   */
  rowHeight?: number;
  /**
   * show avatar on the left side if avatar > 0
   * @default 0
   *  */
  avatar?: number;
};

const StyledSkeleton = styled.div`
  .uc-skeleton-element {
    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  &.avatar {
    display: flex;

    > .rows {
      flex: 1;
      margin-left: 16px;
    }
  }
`;

/** 骨架屏, 包行两种风格, 基于SkeletonElement封装 */
const Skeleton: React.FC<Props> = (props) => {
  const {
    rowCount = 3,
    rowWidth = ['40%', '100%', '60%'],
    rowHeight = 16,
    avatar,
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
    <StyledSkeleton {...rest} className={clsx('uc-skeleton', { avatar: avatar }, className)}>
      {avatar > 0 && (
        <SkeletonElement
          shape="circle"
          className="avatar"
          style={{
            width: avatar,
            height: avatar,
          }}
        />
      )}
      <div className="rows">
        {rowWidthAr.map((v, idx) => (
          <SkeletonElement key={idx} shape="rect" style={{ width: v, height: rowHeight }} />
        ))}
      </div>
    </StyledSkeleton>
  );
};

export default Skeleton;
