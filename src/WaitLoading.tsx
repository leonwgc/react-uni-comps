import React, { useEffect, useState, useRef } from 'react';

export type Props = {
  wait?: number /** 渲染spinner前等待时间, default 600ms，时间到了并且visible为true才显示spinner子元素 */;
  visible: boolean /** 是否显示spinner */;
  children: React.ReactElement /** spinner 子元素 */;
};

/**  等待wait毫秒如果visible是true才渲染子元素,包裹spinner可以防止spinner闪烁 */
const WaitLoading: React.FC<Props> = ({ wait = 600, visible = false, children }) => {
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

  return show ? React.Children.only(children) : null;
};

export default WaitLoading;
