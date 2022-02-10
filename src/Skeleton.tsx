import React from 'react';
import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import clsx from 'clsx';

type Props = {
  /** loading结束渲染的元素 */
  children?: React.ReactElement;
  /** 是否显示动画效果，默认显示 */
  animated?: boolean;
  /** 几行，默认4行, 最小1行 */
  row?: number;
  /** 每一行宽度，默认 ['40%','100%','100%','60%']，设置为string,则每一行都一样长 */
  rowWidth?: string | string[];
  /** 矩形条高度,默认16px*/
  rowHeight?: number;
  /** 是否显示头像，默认不显示 */
  avatar?: boolean;
  /** 头像大小，默认32px */
  avatarSize?: number;
  /** loading为true显示骨架，false则显示子元素*/
  loading?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const StyledSkeleton = styled.div`
  .uc-skeleton {
    &:not(:first-child) {
      margin-top: 12px;
    }

    &:nth-child(2) {
      margin-top: 20px;
    }
  }

  &.avatar {
    display: flex;

    > .avatar {
      flex: none;
    }

    > .rows {
      flex: 1;
      margin-left: 16px;
      padding-top: 8px;
    }
  }
`;

/** 骨架屏 */
const Skeleton: React.FC<Props> = (props) => {
  const {
    animated = true,
    row = 4,
    rowWidth = ['40%', '100%', '100%', '60%'],
    rowHeight = 16,
    avatar,
    avatarSize = 32,
    className,
    children,
    loading,
    ...rest
  } = props;

  if (row < 1) {
    throw new Error('row必须大于等于1,默认4');
  }

  let rowWidthAr = [];

  if (Array.isArray(rowWidth)) {
    if (row <= rowWidth.length) {
      rowWidthAr = rowWidth.slice(0, row);
    } else {
      while (rowWidth.length < row) {
        rowWidth.push('100%');
      }
      rowWidthAr = rowWidth;
    }
  } else {
    rowWidthAr = Array.from(new Array(row), () => rowWidth);
  }

  return loading ? (
    avatar ? (
      <StyledSkeleton {...rest} className={clsx('uc-skeleton', { avatar: avatar }, className)}>
        <SkeletonBase
          animated={animated}
          shape="circle"
          className="avatar"
          width={avatarSize}
          height={avatarSize}
        />
        <div className="rows">
          {rowWidthAr.map((v, idx) => (
            <SkeletonBase animated={animated} key={idx} shape="rect" width={v} height={rowHeight} />
          ))}
        </div>
      </StyledSkeleton>
    ) : (
      <StyledSkeleton {...rest} className={clsx({ avatar: avatar }, className)}>
        {rowWidthAr.map((v, idx) => (
          <SkeletonBase animated={animated} key={idx} shape="rect" width={v} height={rowHeight} />
        ))}
      </StyledSkeleton>
    )
  ) : (
    <>{children}</>
  );
};

export default Skeleton;
