import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import Spinner from './Spinner';
import Space from './Space';
import useInViewport from './hooks/useInViewport';
import usePrevious from 'react-use-lib/es/usePrevious';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledPullupContainer = styled.div`
  &.dom-scroll {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.window-scroll {
    .uc-pullup-footer {
      padding-bottom: 34px;
    }
  }

  .uc-pullup-footer {
    padding: 16px 0;
    display: flex;
    color: #909090;
    font-size: 14px;
    justify-content: center;
    align-items: center;
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
  /** 使用window滚动，默认true,设置为false请给Pullup组件加个固定高度,Pullup container将作为滚动容器  */
  useWindowScroll?: boolean;
};

/** 上拉加载更多数据, 注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器 */
const Pullup = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    dataList = [],
    dataRender = () => null,
    fetchData,
    loadingText = (
      <Space>
        <Spinner color="#999" />
        加载中
      </Space>
    ),
    finishedText = '我是有底线的',
    finished = false,
    className,
    useWindowScroll = true,
    ...rest
  } = props;

  const [loading, setLoading] = useState(false);
  const waypointRef = useRef();
  const containerRef = useRef();
  const isAtBottom = useInViewport(waypointRef, useWindowScroll ? null : containerRef);
  const lastIsAtBottom = usePrevious(isAtBottom);

  useImperativeHandle(ref, () => containerRef.current);

  useEffect(() => {
    if (
      !loading &&
      !finished &&
      ((!lastIsAtBottom && isAtBottom) ||
        isInViewport(waypointRef.current, useWindowScroll ? null : containerRef.current))
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
    <StyledPullupContainer
      {...rest}
      className={clsx('uc-pullup-container', className, {
        'dom-scroll': !useWindowScroll,
        'window-scroll': useWindowScroll,
      })}
      ref={containerRef}
    >
      <div className="uc-pullup-wrapper">
        {dataList.map((item, idx) => {
          return <React.Fragment key={idx}>{dataRender(item, idx)}</React.Fragment>;
        })}
      </div>
      <span className="uc-pullup-waypoint" style={{ fontSize: 0 }} ref={waypointRef}></span>
      <div className="uc-pullup-footer">
        {loading ? loadingText : finished ? finishedText : null}
      </div>
    </StyledPullupContainer>
  );
});

Pullup.displayName = 'UC-Pullup';

export default Pullup;
