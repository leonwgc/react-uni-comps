import React, { useEffect, useRef, useState, useCallback } from 'react';
import useLatest from './hooks/useLatest';
import clsx from 'clsx';
import type { TargetElementType } from './types';
import useEventListener from './hooks/useEventListener';
import useThrottle from './hooks/useThrottle';
import { getTargetElement } from './helper';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 距离窗口顶部达到指定偏移量后触发 */
  offsetTop?: number;
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom?: number;
  /** 固定状态改变时触发的回调函数 */
  onChange?: (affixed: boolean) => void;
  /**设置 Affix 需要监听其滚动事件的元素 */
  target?: TargetElementType;
  /**
   * 固钉定位层级
   * @default 100
   */
  zIndex?: number;
};

type StateInfo = {
  affixed: boolean;
  width: number | string;
  height: number | string;
};

type OffsetInfo = {
  offsetBottom: number;
  offsetTop: number;
};

/** 将页面元素钉在可视范围*/
const Affix: React.FC<Props> = (props) => {
  const { children, offsetTop, offsetBottom, zIndex = 100, target, onChange, ...rest } = props;

  const [data, setData] = useState<StateInfo>({
    affixed: false,
    width: 0,
    height: 0,
  });

  const onChangeRef = useLatest(onChange);
  const targetRef = useRef(target);
  const wrapElRef = useRef<HTMLDivElement>();
  const fixedElRef = useRef<HTMLDivElement>();
  const targetRectRef = useRef<Partial<DOMRect>>({ top: 0, bottom: 0 });
  const wrapElTopRef = useRef<number>('offsetBottom' in props ? -10000 : 10000);

  const offsetRef = useRef<OffsetInfo>({
    offsetBottom,
    offsetTop: typeof offsetTop === 'number' ? offsetTop : typeof offsetBottom !== 'number' && 0,
  });

  const getAffixed = useCallback(() => {
    const targetRect = targetRectRef.current;
    const wrapElTop = wrapElTopRef.current;
    const { offsetTop, offsetBottom } = offsetRef.current;

    if (typeof offsetBottom === 'number' && wrapElTop + offsetBottom >= targetRect.bottom) {
      return true;
    }

    if (
      typeof offsetBottom !== 'number' &&
      typeof offsetTop === 'number' &&
      wrapElTop - offsetTop <= targetRect.top
    ) {
      return true;
    }

    return false;
  }, []);

  const getAffixeStyle = useCallback(() => {
    const targetRect = targetRectRef.current;
    const { offsetTop, offsetBottom } = offsetRef.current;
    const { width, height } = data;
    const affixed = getAffixed();

    if (affixed && typeof offsetBottom === 'number') {
      return {
        position: 'fixed',
        bottom: offsetBottom,
        width,
        height,
        zIndex: zIndex,
      };
    }

    if (affixed && typeof offsetTop === 'number') {
      return {
        position: 'fixed',
        top: targetRect.top + offsetTop,
        width,
        height,
        zIndex: zIndex,
      };
    }

    return {};
  }, [getAffixed, data, zIndex]);

  useEffect(() => {
    const t = getTargetElement(targetRef.current) || window;
    targetRectRef.current =
      t !== window
        ? (t as HTMLElement).getBoundingClientRect()
        : ({ top: 0, bottom: t.innerHeight, width: 0, height: 0 } as DOMRect);
  }, [targetRef, targetRectRef]);

  const onScrollUpdate = useCallback(() => {
    const { affixed } = data;
    const wrapEl = wrapElRef.current;
    if (!wrapEl) return;
    const { top, width, height } = wrapEl.getBoundingClientRect();

    wrapElTopRef.current = top;

    const currentAffixed = getAffixed();
    if (currentAffixed !== affixed) {
      setData({
        affixed: currentAffixed,
        width: width === 0 ? 'auto' : width,
        height: height === 0 ? 'auto' : height,
      });
      onChangeRef.current?.(currentAffixed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAffixed, data]);

  const onScroll = useThrottle(onScrollUpdate, 16);
  useEventListener(target, 'scroll', onScroll);

  const { affixed } = data;

  if (!affixed) {
    return (
      <div ref={wrapElRef} className="uc-affix">
        {children}
      </div>
    );
  }

  return (
    <div {...rest} ref={wrapElRef} className={clsx('uc-affix', 'affixed')}>
      <div ref={fixedElRef} style={getAffixeStyle() as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
};

Affix.displayName = 'UC-Affix';

export default Affix;
