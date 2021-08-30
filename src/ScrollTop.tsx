import React, { HTMLAttributes, useEffect, useState } from 'react';
import { throttle } from './helper';

export type Props = {
  /**
   * 滚动高度达到此参数值才出现 ScrollTop,默认100
   * @type {number}
   */
  visibilityHeight?: number;
  children?: React.ReactElement;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * windows回到顶部
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
const ScrollTop = (props: Props): React.ReactElement => {
  const { children, visibilityHeight = 100 } = props;
  const [visible, setVisible] = useState(false);
  const top = 0;

  useEffect(() => {
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
ScrollTop.displayName = 'UC-ScrollTop';

export default ScrollTop;
