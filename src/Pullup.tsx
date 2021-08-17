import React, { useEffect, useRef, useState } from 'react';
import Spinner from './Spinner';
import Space from './Space';
import useInViewport from 'react-use-lib/es/useInViewport';
import usePrevious from 'react-use-lib/es/usePrevious';
import { useUpdateEffect } from 'react-use-lib';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledPullupWrapper = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
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
  finished: boolean /** 指示是否还有更多数据,true到底没有更多,false还有 */;
  finishedText?: React.ReactNode /** 拉到底部，没有更多数据时显示的文本 */;
  loadingText?: React.ReactNode /** 加载中提示 */;
  style?: React.CSSProperties /** 容器 style */;
  className?: string /** 容器 class */;
};

const footerRender = (
  isLoading: boolean,
  finished: boolean,
  loadingText: React.ReactNode,
  finishedText: React.ReactNode
) => {
  return (
    <div
      style={{
        padding: '8px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading ? loadingText : finished ? finishedText : null}
    </div>
  );
};

/** 上滑加载更多数据 */
const Pullup = (props: Props): React.ReactNode => {
  const {
    dataList = [],
    dataRender = () => null,
    fetchData,
    loadingText = (
      <Space>
        <Spinner />
        加载中
      </Space>
    ),
    finishedText = '我是有底线的~',
    finished = false,
    ...otherProps
  } = props;

  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const wrapRef = useRef();
  const itemListRef = useRef();
  const isAtBottom = useInViewport(ref, wrapRef, { rootMargin: '0px 0px 0px 0px' });
  const lastIsAtBottom = usePrevious(isAtBottom);
  const { style, className } = otherProps;

  useUpdateEffect(() => {
    if (!loading && isInViewport(ref.current, wrapRef.current)) {
      setLoading(true);
      fetchData()
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && isAtBottom && !finished && !lastIsAtBottom) {
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
    <StyledPullupWrapper className={clsx('uc-pullup', className)} style={style} ref={wrapRef}>
      <div className="uc-pullup-body" ref={itemListRef}>
        {dataList.map((item, idx) => {
          return <React.Fragment key={idx}>{dataRender(item, idx)}</React.Fragment>;
        })}
      </div>
      <div className="uc-pullup-footer">
        {footerRender(loading, finished, loadingText, finishedText)}
      </div>
      <div
        className="uc-pullup-line"
        ref={ref}
        style={{ visibility: 'visible', height: 1, background: 'red' }}
      ></div>
    </StyledPullupWrapper>
  );
};

export default Pullup;
