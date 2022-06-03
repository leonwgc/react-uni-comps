import React, { useEffect, useState } from 'react';

type Props = {
  /**
   * 延迟渲染时间
   * @default 400 ms
   * */
  wait?: number;
  children?: React.ReactElement;
};

/** 延迟渲染子元素, 用于防止loading闪烁等问题 */
const WaitLoading: React.FC<Props> = (props) => {
  const { wait = 500, children } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, wait);

    return () => {
      window.clearTimeout(timer);
    };
  }, [wait]);

  return show && children;
};

export default WaitLoading;
