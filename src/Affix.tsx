import React, { HTMLAttributes, ReactElement, useEffect, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import useCallbackRef from './hooks/useCallbackRef';
import { throttle } from './helper';

const StyledAffix = styled.div`
  display: inline-block;
  z-index: 10;
`;

export type Props = {
  /** 距离窗口顶部达到指定偏移量后触发 */
  offsetTop?: number;
  children?: ReactElement;
  /** 固定状态改变时触发的回调函数 */
  onChange?: (affixed) => void;
} & HTMLAttributes<HTMLDivElement>;

/** 将页面元素钉在可视范围,为了简单只支持window滚动和窗口顶部偏移量检测*/
const Affix = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { children, offsetTop = 0, onChange, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>();
  const scrollPosRef = useRef<number>();
  const onChangeRef = useCallbackRef(onChange);

  useImperativeHandle(ref, () => innerRef.current);

  useEffect(() => {
    const affix = innerRef.current;

    const updateScrollPos = throttle(() => {
      const affixPos = affix.getBoundingClientRect();
      const scrollTop = window.pageYOffset;
      if (
        affix.style.position === 'fixed' &&
        scrollPosRef.current &&
        scrollPosRef.current > scrollTop
      ) {
        affix.style.position = '';
        affix.style.top = 'unset';
        onChangeRef.current?.(false);
      } else if (affixPos.top < offsetTop) {
        affix.style.position = 'fixed';
        affix.style.top = offsetTop + 'px';
        scrollPosRef.current = scrollTop; // mark current scroll pos
        onChangeRef.current?.(true);
      }
    }, 17);
    window.addEventListener('scroll', updateScrollPos);

    return () => window.removeEventListener('scroll', updateScrollPos);
  }, [offsetTop, onChangeRef]);

  return (
    <StyledAffix className="uc-affix" ref={innerRef} {...rest}>
      {children}
    </StyledAffix>
  );
});

Affix.displayName = 'UC-Affix';

export default Affix;
