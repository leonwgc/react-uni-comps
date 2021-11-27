import React, { useEffect, useState, useRef } from 'react';

type Props = {
  /** 渲染子元素等待时间，单位ms,默认600 */
  wait?: number;
  /** 是否显示子元素 */
  visible: boolean;
  /** 子元素 */
  children: React.ReactNode;
};

/**  等待wait毫秒且visible是true才渲染子元素, 一般用于防止loading闪烁等问题 */
const WaitLoading = (props: Props): React.ReactNode => {
  const { wait = 600, visible = false, children } = props;
  const [show, setShow] = useState(false);
  const ref = useRef<number>();

  useEffect(() => {
    if (visible) {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      ref.current = window.setTimeout(() => {
        setShow(true);
      }, wait);
    } else {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      setShow(false);
    }
    return () => {
      setShow(false);
      clearTimeout(ref.current);
    };
  }, [visible, wait]);

  return show ? children : null;
};

export default WaitLoading;
