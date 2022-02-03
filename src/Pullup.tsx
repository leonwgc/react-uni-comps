import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import Spin from './Spin';
import Space from './Space';
import useInViewport from './hooks/useInViewport';
import usePrevious from './hooks/usePrevious';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledWrap = styled.div`
  user-select: none;
  position: relative;
  &.dom-scroll {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .loading {
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
`;

// check isInViewport in vertical direction
function isInViewport(el: HTMLElement, container: HTMLElement) {
  const { top, bottom } = el.getBoundingClientRect();
  if (!container) {
    return bottom >= 0 && top < window.innerHeight;
  } else {
    const brc = container.getBoundingClientRect();

    return bottom <= brc.bottom && top >= brc.top;
  }
}

type Props = {
  /** 数组数据 */
  dataList: Array<unknown>;
  /** 数组数据项自定义render */
  dataRender: (data: unknown, index: number) => React.ReactNode;
  /** ajax获取数据，返回Promise,当拉到底部，还有更多数据时调用 */
  fetchData: () => Promise<unknown>;
  /** 指示是否还有更多数据,true没有更多,false还有 */
  finished: boolean;
  /** 拉到底部，没有更多数据时显示的文本 */
  finishedText?: React.ReactNode;
  /** 加载中提示 */
  loadingText?: React.ReactNode;
  /** 容器 style */
  style?: React.CSSProperties;
  /** 容器 class */
  className?: string;
  /** 是否使用window滚动,默认false,如果为false wrap将作为滚动容器(需要设置wrap高度)  */
  useWindowScroll?: boolean;
  /** 自定义footer */
  footer?: (loading: boolean, finished: boolean) => React.ReactNode;
  children?: React.ReactNode;
};

const DefaultLoadingText = (
  <Space>
    <Spin />
    加载中
  </Space>
);

/**
 *  上拉加载/下拉刷新
 *  注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器
 */
const Pullup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    dataList = [],
    dataRender = () => null,
    fetchData,
    loadingText = DefaultLoadingText,
    finishedText = '我是有底线的',
    finished = false,
    className,
    useWindowScroll,
    children,
    footer,
    ...rest
  } = props;

  const [loading, setLoading] = useState(false);
  const waypointRef = useRef();
  const wrapRef = useRef<HTMLDivElement>();
  const isAtBottom = useInViewport(waypointRef, useWindowScroll ? null : wrapRef);
  const lastIsAtBottom = usePrevious(isAtBottom);

  useImperativeHandle(ref, () => wrapRef.current);

  useEffect(() => {
    if (
      !loading &&
      !finished &&
      ((!lastIsAtBottom && isAtBottom) ||
        isInViewport(waypointRef.current, useWindowScroll ? null : wrapRef.current))
    ) {
      setLoading(true);
      fetchData()
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom, useWindowScroll]);

  return (
    <StyledWrap
      ref={wrapRef}
      {...rest}
      className={clsx('uc-pullup', className, {
        'dom-scroll': !useWindowScroll,
        'window-scroll': useWindowScroll,
      })}
    >
      {children}
      {dataList.map((item, idx) => {
        return <React.Fragment key={idx}>{dataRender(item, idx)}</React.Fragment>;
      })}
      <span className="waypoint" style={{ fontSize: 0 }} ref={waypointRef}></span>
      {typeof footer === 'function' ? (
        footer(loading, finished)
      ) : (
        <div className="loading">{loading ? loadingText : finished ? finishedText : null}</div>
      )}
    </StyledWrap>
  );
});

Pullup.displayName = 'UC-Pullup';

export default Pullup;
