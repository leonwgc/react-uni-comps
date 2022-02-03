import React, {
  useRef,
  useImperativeHandle,
  useCallback,
  useLayoutEffect,
  ReactNode,
  useState,
} from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import { animated, useSpring } from '@react-spring/web';
import { getScrollTop, isTouch } from './dom';
import Spin from './Spin';
import Space from './Space';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const StyledWrap = styled(animated.div)`
  color: #999;
  .head {
    overflow: hidden;
    position: relative;
    .status-text {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete';

type Props = {
  /** 触发刷新时的处理函数 */
  onRefresh?: () => Promise<any>;
  /** 下拉的提示文案 */
  pullingText?: ReactNode;
  /** 释放的提示文案 */
  canReleaseText?: ReactNode;
  /** 刷新时的提示文案 */
  refreshingText?: ReactNode;
  /** 完成时的提示文案 */
  completeText?: ReactNode;
  /** 完成后延迟消失的时间，单位为 ms,默认500ms */
  completeDelay?: number;
  /** 头部提示内容区的高度，单位为 px */
  headHeight?: number;
  /** 触发刷新需要下拉多少距离，单位为 px */
  threshold?: number;
  /** 根据下拉状态，自定义下拉提示文案 */
  renderText?: (status: PullStatus) => ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** 是否使用window滚动,默认 true  */
  useWindowScroll?: boolean;
};

/** 下拉刷新 */
const PullToRefresh = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    pullingText = '下拉刷新',
    canReleaseText = '释放立即刷新',
    refreshingText = (
      <Space>
        <Spin />
        加载中...
      </Space>
    ),
    completeText = '刷新成功',
    completeDelay = 500,
    useWindowScroll = true,
    onRefresh,
    headHeight = 40,
    threshold = 60,
    className,
    renderText,
    children,
    style,
    ...rest
  } = props;

  const [status, setStatus] = useState<PullStatus>('pulling');
  const dRef = useRef(0);

  const [springStyles, api] = useSpring(() => ({
    from: { height: 0 },
    config: {
      tension: 300,
      friction: 30,
      clamp: true,
    },
  }));

  const wrapRef = useRef<HTMLDivElement>(null);
  const isPullingRef = useRef(false);
  useImperativeHandle(ref, () => wrapRef.current);

  async function doRefresh() {
    api.start({ height: headHeight });
    setStatus('refreshing');
    try {
      await onRefresh?.();
      setStatus('complete');
    } catch (e) {
      api.start({
        to: async (next) => {
          await next({ height: 0 });
          setStatus('pulling');
        },
      });

      throw e;
    }
    if (completeDelay > 0) {
      await sleep(completeDelay);
    }
    api.start({
      to: async (next) => {
        await next({ height: 0 });
        setStatus('pulling');
      },
    });
  }

  const renderStatusText = () => {
    if (renderText) {
      return renderText(status);
    }

    if (status === 'pulling') return pullingText;
    if (status === 'canRelease') return canReleaseText;
    if (status === 'refreshing') return refreshingText;
    if (status === 'complete') return completeText;
  };

  const touchEnd = useCallback(async () => {
    dRef.current = 0;
    if (!isPullingRef.current) {
      return;
    }
    isPullingRef.current = false;

    if (status === 'refreshing' || status === 'complete') {
      return;
    }

    if (status === 'canRelease') {
      try {
        await doRefresh();
      } finally {
        setStatus('pulling');
      }
    } else {
      api.start({ height: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, status]);

  useLayoutEffect(() => {
    document.addEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);

    return () => {
      document.removeEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);
    };
  }, [touchEnd]);

  const evtProps: any = {};

  evtProps[isTouch ? 'onTouchStart' : 'onMouseDown'] = () => {
    dRef.current = 0;
  };

  return (
    <FingerGestureElement
      ref={wrapRef}
      onPressMove={(e) => {
        const el = wrapRef.current;

        const scrollTop = getScrollTop(useWindowScroll ? window : el);
        dRef.current = Math.min(threshold, dRef.current + e.deltaY);

        if (scrollTop <= 0 && dRef.current > 0) {
          isPullingRef.current = true;
        }

        if (!isPullingRef.current) {
          return;
        }

        api.start({ height: dRef.current });

        setStatus(dRef.current >= threshold ? 'canRelease' : 'pulling');
      }}
    >
      <StyledWrap
        {...rest}
        className={clsx(className, 'uc-pull-to-refresh')}
        style={{ ...style, touchAction: 'pan-y' }}
      >
        <animated.div style={springStyles} className={`head`}>
          <div className={`status-text`} style={{ height: headHeight }}>
            {renderStatusText()}
          </div>
        </animated.div>
        <div className={`content`}>{children}</div>
      </StyledWrap>
    </FingerGestureElement>
  );
});

PullToRefresh.displayName = 'UC-PullToRefresh';

export default PullToRefresh;
