import React, { useEffect, useRef, useState } from 'react';
import Spinner from './Spinner';
import Space from './Space';
import useInViewport from 'react-use-lib/es/useInViewport';
import usePrevious from 'react-use-lib/es/usePrevious';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledPullupContainer = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  > .uc-pullup-footer {
    padding: 8px 0;
    display: flex;
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

    return bottom < brc.bottom && top > brc.top;
  }
}

export type Props = {
  dataList: Array<unknown> /** 数组数据 */;
  dataRender: (data: unknown, index: number) => React.ReactNode /** 数组数据项自定义render */;
  fetchData: () => Promise<unknown> /** ajax获取数据，返回Promise,当拉到底部，还有更多数据时调用 */;
  finished: boolean /** 指示是否还有更多数据,true没有更多,false还有 */;
  finishedText?: React.ReactNode /** 拉到底部，没有更多数据时显示的文本 */;
  loadingText?: React.ReactNode /** 加载中提示 */;
  style?: React.CSSProperties /** 容器 style */;
  className?: string /** 容器 class */;
};

/** 上拉加载更多数据, 注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器 */
const Pullup = (props: Props): React.ReactNode => {
  const {
    dataList = [],
    dataRender = () => null,
    fetchData,
    loadingText = (
      <Space>
        <Spinner />
        加载中...
      </Space>
    ),
    finishedText = '我是有底线的~',
    finished = false,
    className,
    ...restProps
  } = props;

  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const wrapRef = useRef();
  const isAtBottom = useInViewport(ref, wrapRef, { rootMargin: '0px 0px 0px 0px' });
  const lastIsAtBottom = usePrevious(isAtBottom);

  useEffect(() => {
    if (
      !loading &&
      !finished &&
      ((!lastIsAtBottom && isAtBottom) || isInViewport(ref.current, wrapRef.current))
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
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom]);

  return (
    <StyledPullupContainer
      className={clsx('uc-pullup-container', className)}
      ref={wrapRef}
      {...restProps}
    >
      <div className="uc-pullup-wrapper">
        {dataList.map((item, idx) => {
          return <React.Fragment key={idx}>{dataRender(item, idx)}</React.Fragment>;
        })}
      </div>

      <div className="uc-pullup-footer">
        {loading ? loadingText : finished ? finishedText : null}
      </div>
      <div className="uc-pullup-line" ref={ref} style={{ visibility: 'hidden', height: 1 }}></div>
    </StyledPullupContainer>
  );
};

export default Pullup;
