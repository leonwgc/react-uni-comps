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
import useCallbackRef from './hooks/useCallbackRef';
import type { BaseProps } from './types';

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
  /** 触发下拉刷新的元素,比如Pull */
  children?: React.ReactElement;
} & BaseProps;

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
  const statusRef = useCallbackRef(status);
  const dRef = useRef(0);

  const [springStyles, api] = useSpring(() => ({
    from: { height: 0 },
  }));

  const wrapRef = useRef<HTMLDivElement>(null); // could be wrapper / children El instance
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
    dRef.current = 0;
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

  useLayoutEffect(() => {
    let y = 0;
    const el = wrapRef.current;

    const _touchStart = (e) => (y = e.touches[0].pageY);
    const _touchEnd = () => {
      y = 0;
      touchEnd();
    };

    const _touchMove = (e) => {
      const scrollTop = getScrollTop(el);
      const y1 = e.touches[0].pageY;
      if (y1 - y > 0 && scrollTop === 0 && e.cancelable) {
        e.preventDefault();
        isPullingRef.current = true;
        setStatus('pulling');
      }
    };

    const options: any = { passive: false };
    if (el) {
      el.addEventListener('touchstart', (e) => {
        y = e.touches[0].pageY;
      });
      el.addEventListener('touchmove', _touchMove, options);
      el.addEventListener('touchend', _touchEnd);
    }

    return () => {
      if (el) {
        el.removeEventListener('touchstart', _touchStart);
        el.removeEventListener('touchmove', _touchMove, options);
        el.removeEventListener('touchend', _touchEnd);
      }
    };
  }, [touchEnd]);

  const statusText = (
    <animated.div style={springStyles} className={`head`}>
      <div className={`status-text`} style={{ height: headHeight }}>
        {renderStatusText()}
      </div>
    </animated.div>
  );

  if (children && !React.isValidElement(children)) {
    throw Error('children must be a valid ReactElement');
  }

  useLayoutEffect(() => {
    const el = wrapRef.current;
    const fg = new Touch(el, {
      onPressMove: (e) => {
        if (
          !isPullingRef.current ||
          statusRef.current === 'refreshing' ||
          statusRef.current === 'complete'
        )
          return;
        dRef.current = Math.min(threshold + 30, dRef.current + e.deltaY);
        api.start({ height: dRef.current });

        setStatus(dRef.current > threshold ? 'canRelease' : 'pulling');
      },
    });

    return () => {
      fg?.destroy();
    };
  }, [api, threshold, statusRef]);

  return (
    <StyledWrap
      ref={wrapRef}
      {...rest}
      className={clsx('uc-pull-to-refresh', className)}
      style={{ ...style, touchAction: 'pan-y' }}
    >
      {statusText}
      {React.isValidElement(children) ? React.cloneElement(children, { ref: wrapRef }) : children}
    </StyledWrap>
  );
});

PullToRefresh.displayName = 'UC-PullToRefresh';

export default PullToRefresh;
