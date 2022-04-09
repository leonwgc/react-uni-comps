import * as React from 'react';
import { toArray } from './util';
import styled from 'styled-components';
import { detectFlexGapSupported } from './dom';
import clsx from 'clsx';
import type { BaseProps } from './types';

type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';

type ItemProps = {
  children: React.ReactNode;
  index: number;
  direction?: 'horizontal' | 'vertical';
  marginDirection: 'marginLeft' | 'marginRight';
  split?: React.ReactNode;
  wrap?: boolean;
};

function SpaceItem({ direction, index, marginDirection, children, split, wrap }: ItemProps) {
  const { horizontalSize, verticalSize, latestIndex, supportFlexGap } =
    React.useContext(SpaceContext);

  let style: React.CSSProperties = {};

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = { marginBottom: horizontalSize / (split ? 2 : 1) };
      }
    } else {
      style = {
        ...(index < latestIndex && { [marginDirection]: horizontalSize / (split ? 2 : 1) }),
        ...(wrap && { paddingBottom: verticalSize }),
      };
    }
  }

  if (children === null || children === undefined) {
    return null;
  }

  return (
    <>
      <div style={style}>{children}</div>
      {index < latestIndex && split && <span style={style}>{split}</span>}
    </>
  );
}

const SpaceContext = React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false,
});

const flexDirectionMap = {
  horizontal: 'row',
  vertical: 'column',
};

type SpaceProps = {
  /** 间距大小 */
  size?: number | [number, number];
  /** 间距方向 */
  direction?: 'horizontal' | 'vertical';
  /** 对齐方式 */
  align?: Align;
  /** 设置拆分 */
  split?: React.ReactNode;
  /** 是否自动换行，仅在 horizontal 时有效 */
  wrap?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  children?: React.ReactNode;
} & BaseProps;

const StyledSpace = styled.div<{
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline';
  direction?: 'horizontal' | 'vertical';
}>`
  display: inline-flex;
  flex-direction: ${({ direction }) => flexDirectionMap[direction]};
  align-items: ${({ align }) => align};
`;

/** 间距 */
const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    size = 8,
    align,
    className,
    children,
    direction = 'horizontal',
    split,
    style,
    wrap = false,
    ...otherProps
  } = props;

  const supportFlexGap = detectFlexGapSupported();

  const [horizontalSize, verticalSize] = React.useMemo(
    () => (Array.isArray(size) ? size : [size, size]),
    [size]
  );

  const childNodes = toArray(children as React.ReactElement[]);
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const marginDirection = 'marginRight';

  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }

    /* eslint-disable react/no-array-index-key */
    return (
      <SpaceItem
        key={i}
        direction={direction}
        index={i}
        marginDirection={marginDirection}
        split={split}
        wrap={wrap}
      >
        {child}
      </SpaceItem>
    );
    /* eslint-enable */
  });

  const spaceContext = React.useMemo(
    () => ({ horizontalSize, verticalSize, latestIndex, supportFlexGap }),
    [horizontalSize, verticalSize, latestIndex, supportFlexGap]
  );

  if (childNodes.length === 0) {
    return null;
  }

  const gapStyle: React.CSSProperties = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap';

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }

  return (
    <StyledSpace
      ref={ref}
      direction={direction}
      align={mergedAlign}
      className={clsx(className, 'uc-space')}
      style={{
        ...gapStyle,
        ...style,
      }}
      {...otherProps}
    >
      <SpaceContext.Provider value={spaceContext}>{nodes}</SpaceContext.Provider>
    </StyledSpace>
  );
});

Space.displayName = 'UC-Space';

export default Space;
