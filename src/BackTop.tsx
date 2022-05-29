import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { getTargetElement } from './helper';
import useEventListener from './hooks/useEventListener';
import useThrottle from './hooks/useThrottle';
import type { TargetElementType } from './types';

type Props = {
  /** 监听滚动目标
   * @default window
   */
  target?: TargetElementType;
  /**
   * 滚动高度>visibilityHeight才显示子元素
   * @type {number}
   * @default 100
   */
  visibilityHeight?: number;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * 回到页面顶部
 *
 */
const BackTop = (props: Props) => {
  const { children, target, visibilityHeight = 100 } = props;
  const [visible, setVisible] = useState(false);
  const top = 0;

  const onScroll = useThrottle(() => {
    const targetEl = getTargetElement(target) || window;
    if (
      (targetEl === window && window.pageYOffset >= visibilityHeight) ||
      (targetEl as Element).scrollTop >= visibilityHeight
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  useEventListener(target, 'scroll', onScroll);

  if (process.env.NODE_ENV !== 'production') {
    if (!React.isValidElement(children)) {
      throw new Error('ScrollTop:子元素必须为ReactElement');
    }
  }

  return visible
    ? React.cloneElement(children as React.ReactElement, {
        onClick: () => {
          (children as ReactElement).props.onClick?.();
          const step = Math.abs(window.pageYOffset - top) / 20;
          const targetEl = getTargetElement(target) || window;
          const cb = () => {
            if (targetEl === window) {
              if (window.pageYOffset > top) {
                window.scrollTo(
                  0,
                  window.pageYOffset - step >= top ? window.pageYOffset - step : top
                );
                requestAnimationFrame(cb);
              }
            } else {
              targetEl.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }
          };
          requestAnimationFrame(cb);
        },
      })
    : null;
};
BackTop.displayName = 'UC-BackTop';

export default BackTop;
