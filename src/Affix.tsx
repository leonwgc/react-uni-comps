import React, {
  HTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
} from 'react';
import useCallbackRef from './hooks/useCallbackRef';
import { throttle } from './helper';
import clsx from 'clsx';

/**  port from zarm Affix & refactor  */

type Props = {
  /** 距离窗口顶部达到指定偏移量后触发 */
  offsetTop?: number;
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom?: number;
  children?: ReactElement;
  /** 固定状态改变时触发的回调函数 */
  onChange?: (affixed) => void;
  /**设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
  target?: () => HTMLElement | Window;
} & HTMLAttributes<HTMLDivElement>;

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
const Affix = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { children, offsetTop, offsetBottom, target, onChange, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>();
  useImperativeHandle(ref, () => innerRef.current);

  const [data, setData] = useState<StateInfo>({
    affixed: false,
    width: 0,
    height: 0,
  });

  const onChangeRef = useCallbackRef(onChange);
  const targetRef = useRef<() => HTMLElement | Window>(target);
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
        zIndex: 100,
      };
    }

    if (affixed && typeof offsetTop === 'number') {
      return {
        position: 'fixed',
        top: targetRect.top + offsetTop,
        width,
        height,
        zIndex: 100,
      };
    }

    return {};
  }, [getAffixed, data]);

  useEffect(() => {
    const t = targetRef.current?.() || window;
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
  }, [getAffixed, onChangeRef, data]);

  useEffect(() => {
    const onScroll = throttle(onScrollUpdate, 16, false);

    const t = targetRef.current?.() || window;

    t.addEventListener('scroll', onScroll);

    onScroll();

    return () => t.removeEventListener('scroll', onScroll);
  }, [offsetRef, onScrollUpdate]);

  const { affixed } = data;

  if (!affixed) {
    return (
      <div ref={wrapElRef}>
        {React.cloneElement(children, {
          ref: innerRef,
        })}
      </div>
    );
  }

  return (
    <div ref={wrapElRef} className={clsx('uc-affix-wrap')}>
      <div ref={fixedElRef} {...rest} style={getAffixeStyle() as React.CSSProperties}>
        {React.cloneElement(children, {
          ref: innerRef,
        })}
      </div>
    </div>
  );
});

Affix.displayName = 'UC-Affix';

export default Affix;
