import React, { HTMLAttributes, ReactElement, useEffect, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { useInViewport } from 'react-use-lib';

const StyledAffix = styled.div`
  display: inline-block;
`;

export type Props = {
  /** 	距离窗口顶部达到指定偏移量后触发 */
  offsetTop?: number;
  offsetBottom?: number;
  /** 上层元素 */
  children?: ReactElement;
} & HTMLAttributes<HTMLDivElement>;

/** 遮罩层 */
const Affix = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { children, offsetTop = 0, offsetBottom, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>();
  const wpRef = useRef<HTMLSpanElement>();

  useImperativeHandle(ref, () => innerRef.current);

  const visible = useInViewport(wpRef, null, {
    rootMargin: `-${offsetTop || 0}px 0px 0px -${offsetBottom || 0}px`,
  });

  useEffect(() => {
    const affix = innerRef.current;
    if (!visible) {
      affix.style.position = 'fixed';
      affix.style.top = offsetTop + 'px';
    } else {
      affix.style.position = '';
    }
  }, [visible]);

  return (
    <>
      <span data-role="waypoint" ref={wpRef} style={{ fontSize: 0 }}></span>
      <StyledAffix className="uc-affix" ref={innerRef} {...rest}>
        {children}
      </StyledAffix>
    </>
  );
});

Affix.displayName = 'UC-Affix';

export default Affix;
