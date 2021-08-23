import React, { HTMLAttributes } from 'react';

export type Props = {
  children?: React.ReactElement;
} & HTMLAttributes<HTMLSpanElement>;

/** ScrollTo top */
const ScrollTop = (props: Props): React.ReactElement => {
  const { children } = props;
  const top = 0;
  return React.cloneElement(children, {
    onClick: () => {
      const step = Math.abs(window.pageYOffset - top) / 20;
      const cb = () => {
        if (window.pageYOffset > top) {
          window.scrollTo(0, window.pageYOffset - step >= top ? window.pageYOffset - step : top);
          requestAnimationFrame(cb);
        }
      };
      requestAnimationFrame(cb);
    },
  });
};
ScrollTop.displayName = 'UC-ScrollTop';

export default ScrollTop;
