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
import { animated, useSpring } from '@react-spring/web';
import { getScrollTop } from './dom';
import Spin from './Spin';
import Space from './Space';
import { sleep } from './helper';
import Touch from 'w-touch';
import useLatest from './hooks/useLatest';

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

type PullStatus = 'init' | 'pulling' | 'canRelease' | 'refreshing' | 'complete';

type Props = React.HTMLAttributes<HTMLDivElement> & {
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
  /**
   * 完成后延迟消失的时间，单位为 ms
   * @default 500
   *  */
  completeDelay?: number;
  /**
   * 头部提示内容区的高度，单位px
   * @default 40
   *  */
  headHeight?: number;
  /**
   * 触发刷新需要下拉多少距离，单位px
   * @default 60
   */
  threshold?: number;
  /** 根据下拉状态，自定义下拉提示文案 */
  renderText?: (status: PullStatus) => ReactNode;
  /**
   * 触发下拉刷新的元素
   * 作为组件，请使用React.forwardRef 将ref引到dom
   *  */
  children?: React.ReactElement;
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
    onRefresh,
    headHeight = 40,
    threshold = 60,
    className,
    renderText,
    children,
    style,
    ...rest
  } = props;

  const [status, setStatus] = useState<PullStatus>('init');
  const statusRef = useLatest(status);

  const [springStyles, api] = useSpring(() => ({
    from: { height: 0 },
  }));

  const wrapRef = useRef<HTMLDivElement>(null);
  const elRef = useRef(null);

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
          await next({ height: 0, onRest: () => setStatus('init') });
        },
      });

      throw e;
    }
    if (completeDelay > 0) {
      await sleep(completeDelay);
    }
    api.start({
      to: async (next) => {
        await next({ height: 0, onRest: () => setStatus('init') });
      },
    });
  }

  const renderStatusText = () => {
    if (renderText) {
      return renderText(status);
    }

    if (status === 'init') return null;
    if (status === 'pulling') return pullingText;
    if (status === 'canRelease') return canReleaseText;
    if (status === 'refreshing') return refreshingText;
    if (status === 'complete') return completeText;
  };

  const touchEnd = useCallback(async () => {
    if (!isPullingRef.current) {
      return;
    }

    if (status === 'refreshing' || status === 'complete') {
      return;
    }

    if (status === 'canRelease') {
      try {
        await doRefresh();
      } finally {
      }
    } else {
      api.start({ height: 0 });
    }

    isPullingRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, status]);

  const touchEndRef = useLatest(touchEnd);

  const statusText = (
    <animated.div style={springStyles} className={`head`}>
      <div className={`status-text`} style={{ height: headHeight }}>
        {renderStatusText()}
      </div>
    </animated.div>
  );

  useLayoutEffect(() => {
    const wrapEl = wrapRef.current;
    const el = elRef.current;
    let y = 0;
    let d = 0;

    // touch cacl in children
    const childrenElFg = new Touch(el, {
      onTouchStart: (e: any) => {
        d = 0;
        if (e.touches) {
          y = e.touches[0].pageY;
        } else {
          y = e.pageY;
        }
      },
      onTouchMove: (e: any) => {
        let y1;
        if (e.touches) {
          y1 = e.touches[0].pageY;
        } else {
          y1 = e.pageY;
        }
        const scrollTop = getScrollTop(el);

        if (y1 - y > 0 && scrollTop === 0 && e.cancelable) {
          e.preventDefault();
          isPullingRef.current = true;
          setStatus('pulling');
        }
      },
      onTouchEnd: () => {
        y = 0;
        d = 0;
        touchEndRef.current?.();
      },
    });

    // press move in wrap
    const fg = new Touch(wrapEl, {
      onPressMove: (e) => {
        if (
          !isPullingRef.current ||
          statusRef.current === 'refreshing' ||
          statusRef.current === 'complete'
        )
          return;
        d = Math.min(threshold + 30, d + e.deltaY);
        api.start({ height: d });

        setStatus(d > threshold ? 'canRelease' : 'pulling');
      },
    });

    return () => {
      fg?.destroy();
      childrenElFg?.destroy();
    };
  }, [api, threshold, statusRef, touchEndRef]);

  if (children && !React.isValidElement(children)) {
    throw Error('children must be ReactElement');
  }

  return (
    <StyledWrap
      ref={wrapRef}
      {...rest}
      className={clsx('uc-pull-to-refresh', className)}
      style={{ ...style, touchAction: 'pan-y' }}
    >
      {statusText}
      {React.isValidElement(children) ? React.cloneElement(children, { ref: elRef }) : null}
    </StyledWrap>
  );
});

PullToRefresh.displayName = 'UC-PullToRefresh';

export default PullToRefresh;
