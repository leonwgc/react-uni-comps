import React, { useEffect, useRef, useState } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
import usePrevious from 'react-use-lib/es/usePrevious';

export type Props = {
  dataList: Array<unknown> /** 数组数据 */;
  dataRender: (data: unknown, index: number) => React.ReactNode /** 数组数据项自定义render */;
  fetchData: () => Promise<unknown> /** ajax获取数据，返回Promise,当拉到底部，还有更多数据时调用 */;
  hasMoreData: boolean /** 指示是否还有更多数据 */;
  spinner?: React.ReactNode /** 加载中 spinner */;
  endText?: React.ReactNode /** 拉到底部，没有更多数据时显示的文本 */;
  style?: React.CSSProperties /** 容器 style */;
  className?: string /** 容器 class */;
  footerStyle?: React.CSSProperties /** 容器底部包含spinner/endText容器的style */;
};

const footerRender = (
  isLoading: boolean,
  hasMoreData: boolean,
  spinner: React.ReactNode,
  endText: React.ReactNode,
  footerStyle: React.CSSProperties
) => {
  return (
    <div
      style={{
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...footerStyle,
      }}
    >
      {isLoading ? spinner : !hasMoreData ? endText : null}
    </div>
  );
};

/** 上滑加载更多数据 */
const Pullup: React.FC<Props> = ({
  dataList = [],
  dataRender = () => null,
  fetchData,
  spinner = '加载中...',
  endText = '我是有底线的~',
  hasMoreData = true,
  footerStyle,
  ...otherProps
}) => {
  const [isLoading, setLoading] = useState(false);
  const ref = useRef();
  const wrapRef = useRef();
  const isAtBottom = useInViewport(ref, wrapRef);
  const lastIsAtBottom = usePrevious(isAtBottom);
  const { style, className } = otherProps;

  useEffect(() => {
    if (!isLoading && isAtBottom && hasMoreData && !lastIsAtBottom) {
      setLoading(true);
      fetchData()
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [isLoading, isAtBottom, hasMoreData, setLoading, fetchData, lastIsAtBottom]);

  return (
    <div className={className} style={style} ref={wrapRef}>
      {dataList.map((item, idx) => {
        return <React.Fragment key={idx}>{dataRender(item, idx)}</React.Fragment>;
      })}
      <div ref={ref}>{footerRender(isLoading, hasMoreData, spinner, endText, footerStyle)}</div>
    </div>
  );
};

export default Pullup;
