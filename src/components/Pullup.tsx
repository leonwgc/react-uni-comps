import React, { useEffect, useRef, useState } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
import usePrevious from 'react-use-lib/es/usePrevious';

// pullup to load more data

export type Props = {
  dataList: Array<unknown>;
  dataRender: (data: unknown, index: number) => React.ReactNode;
  fetchData: () => Promise<unknown>;
  hasMoreData: boolean;
  spinner?: React.ReactNode;
  endText?: React.ReactNode;
  style?: React.CSSProperties; // wrap style
  className?: string; // wrap class
  footerStyle?: React.CSSProperties;
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
