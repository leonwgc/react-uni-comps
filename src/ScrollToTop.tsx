import React, { HTMLAttributes, useLayoutEffect, useState } from 'react';
import { throttle } from './helper';

type Props = {
  /**
   * 滚动高度>visibilityHeight才显示子元素
   * @type {number}
   */
  visibilityHeight?: number;
  children?: React.ReactElement;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * 回到页面顶部
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
const ScrollToTop = (props: Props): React.ReactElement => {
  const { children, visibilityHeight = 100 } = props;
  const [visible, setVisible] = useState(false);
  const top = 0;

  useLayoutEffect(() => {
    const onScroll = throttle(() => {
      if (window.pageYOffset >= visibilityHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [visibilityHeight]);

  if (process.env.NODE_ENV !== 'production') {
    if (!React.isValidElement(children)) {
      throw new Error('ScrollTop:子元素必须为ReactElement');
    }
  }

  return visible
    ? React.cloneElement(children, {
        onClick: () => {
          children.props.onClick?.();
          const step = Math.abs(window.pageYOffset - top) / 20;
          const cb = () => {
            if (window.pageYOffset > top) {
              window.scrollTo(
                0,
                window.pageYOffset - step >= top ? window.pageYOffset - step : top
              );
              requestAnimationFrame(cb);
            }
          };
          requestAnimationFrame(cb);
        },
      })
    : null;
};
ScrollToTop.displayName = 'UC-ScrollToTop';

export default ScrollToTop;
