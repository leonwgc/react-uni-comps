import React, { useEffect, useRef, useState, useImperativeHandle, useCallback } from 'react';
import Spin from './Spin';
import Space from './Space';
import useInViewport from './hooks/useInViewport';
import usePrevious from './hooks/usePrevious';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import clsx from 'clsx';
import { getScrollTop, isTouch } from './dom';
import { animationNormal, animationSlow } from './vars';
import useCallbackRef from './hooks/useCallbackRef';

const RefreshDistance = 30;

const StyledWrap = styled.div`
  &.dom-scroll {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  transition: transform ${animationSlow}ms ease-in-out;

  .loading {
    color: #909090;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    height: 50px;

    .uc-spin {
      font-size: 20px;
    }
  }

  .refresh {
    transition: height ${animationNormal}ms ease-in-out;
    height: 0;
    &.active {
      height: 40px;
    }
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
  /** 下拉刷新加载数据 */
  refresh?: () => Promise<unknown>;
  /** 下拉刷新文字提示*/
  refreshText?: React.ReactNode;
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
    refreshText = DefaultLoadingText,
    finished = false,
    className,
    style,
    useWindowScroll,
    refresh,
    footer,
    ...rest
  } = props;

  const [loading, setLoading] = useState(false);
  const waypointRef = useRef();
  const wrapRef = useRef<HTMLDivElement>();
  const isAtBottom = useInViewport(waypointRef, useWindowScroll ? null : wrapRef);
  const lastIsAtBottom = usePrevious(isAtBottom);
  const moveRef = useRef({
    isMoving: false,
    isRefreshing: false,
    y: 0,
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshRef = useCallbackRef(refresh);

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

  const resetRefreshStatus = useCallback(() => {
    const el = wrapRef.current;
    const moveInfo = moveRef.current;
    setIsRefreshing(false);
    moveInfo.isRefreshing = false;
    moveInfo.y = 0;
    el.style.transform = 'none';
    el.style.touchAction = 'auto';
  }, []);

  useEffect(() => {
    // no refresh no pulldown handle
    const supportRefresh = typeof refreshRef.current === 'function';
    if (!supportRefresh) return;

    const el = wrapRef.current;
    const moveInfo = moveRef.current;

    const touchStart = () => {
      el.style.transitionProperty = 'none';
      el.style.touchAction = 'none';
      document.body.offsetHeight;
      moveInfo.isMoving = true;
      moveInfo.y = 0;
    };

    const touchEnd = () => {
      if (moveInfo.isMoving) {
        moveInfo.isMoving = false;
        setTimeout(resetRefreshStatus, 300);
      }
    };

    el.addEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);

    if (!isTouch) {
      document.addEventListener('mouseup', touchEnd);
    } else {
      el.addEventListener('touchend', touchEnd);
    }

    return () => {
      if (!supportRefresh) return;

      el.removeEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);

      if (!isTouch) {
        document.removeEventListener('mouseup', touchEnd);
      } else {
        el.removeEventListener('touchend', touchEnd);
      }
    };
  }, [resetRefreshStatus, refreshRef]);

  const setRefreshStatus = useCallback(() => {
    const el = wrapRef.current;
    setIsRefreshing(true);
    moveRef.current.isRefreshing = true;
    el.style.transitionProperty = 'transform';
    refreshRef.current().then(resetRefreshStatus).catch(resetRefreshStatus);
  }, [resetRefreshStatus, refreshRef]);

  const supportRefresh = typeof refreshRef.current === 'function';

  const wrapStyle = {
    ...style,
  };

  if (supportRefresh) {
    wrapStyle.touchAction = 'auto';
  }

  const content = (
    <StyledWrap
      {...rest}
      style={wrapStyle}
      className={clsx('uc-pullup', className, {
        'dom-scroll': !useWindowScroll,
        'window-scroll': useWindowScroll,
      })}
    >
      <div className={clsx('loading refresh', { active: isRefreshing })}>
        {isRefreshing && refreshText}
      </div>
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

  return typeof refresh === 'function' ? (
    <FingerGestureElement
      ref={wrapRef}
      onPressMove={(e) => {
        // no refresh no pulldown handle
        if (typeof refreshRef.current !== 'function') return;

        const el = wrapRef.current;
        const moveInfo = moveRef.current;

        el.style.touchAction = e.deltaY > 0 ? 'none' : 'auto';
        if (!moveInfo.isMoving) {
          return resetRefreshStatus();
        }

        const scrollTop = getScrollTop(useWindowScroll ? window : el);

        moveInfo.y = Math.min(RefreshDistance, moveInfo.y + e.deltaY);

        if (moveInfo.y > 0 && moveInfo.y < RefreshDistance) {
          // down
          el.style.transform = `translate3d(0, ${moveInfo.y}px, 0)`;
        }

        if (scrollTop <= 0 && !moveInfo.isRefreshing && moveInfo.y === RefreshDistance) {
          setRefreshStatus();
        }

        // double check
        setTimeout(() => {
          if (!moveInfo.isRefreshing) {
            if (scrollTop <= 0 && moveInfo.y === RefreshDistance) {
              setRefreshStatus();
            } else {
              resetRefreshStatus();
            }
          }
        }, 1000);
      }}
    >
      {content}
    </FingerGestureElement>
  ) : (
    content
  );
});

Pullup.displayName = 'UC-Pullup';

export default Pullup;
