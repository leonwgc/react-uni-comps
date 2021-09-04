import React from 'react';
import styled from 'styled-components';
import SkeletonBase from './SkeletonBase';
import clsx from 'clsx';

// ref to : https://vant-contrib.gitee.io/vant/#/en-US/skeleton

type Props = {
  children: React.ReactNode /** loading结束渲染的元素 */;
  animate?: boolean /** 是否显示动画效果，默认显示 */;
  row: number /** 几行，默认4行, 最小1行 */;
  rowWidth:
    | string
    | string[] /** 每一行宽度，默认 ['40%','100%','100%','60%']，设置为string,则每一行都一样长 */;
  rowHeight: number /** 矩形条高度,默认16px*/;
  avatar?: boolean /** 是否显示头像，默认不显示 */;
  avatarSize?: number /** 头像大小，默认32px */;
  loading?: boolean /** loading为true显示骨架，false则显示子元素*/;
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
const Skeleton = (props: Props): React.ReactNode => {
  const {
    animate = true,
    row = 4,
    rowWidth = ['40%', '100%', '100%', '60%'],
    rowHeight = 16,
    avatar = false,
    avatarSize = 32,
    children,
    loading,
    ...other
  } = props;

  if (row < 1) {
    throw new Error('row必须设置>=1,默认4');
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
  const { className = '', ...rest } = other;

  return loading ? (
    avatar ? (
      <StyledSkeleton className={clsx({ avatar: avatar }, className)} {...rest}>
        <SkeletonBase
          animate={animate}
          shape="circle"
          className="avatar"
          width={avatarSize}
          height={avatarSize}
        />
        <div className="rows">
          {rowWidthAr.map((v, idx) => (
            <SkeletonBase animate={animate} key={idx} shape="rect" width={v} height={rowHeight} />
          ))}
        </div>
      </StyledSkeleton>
    ) : (
      <StyledSkeleton
        style={{ display: 'block' }}
        className={clsx({ avatar: avatar }, className)}
        {...rest}
      >
        {rowWidthAr.map((v, idx) => (
          <SkeletonBase animate={animate} key={idx} shape="rect" width={v} height={rowHeight} />
        ))}
      </StyledSkeleton>
    )
  ) : (
    children
  );
};

export default Skeleton;
