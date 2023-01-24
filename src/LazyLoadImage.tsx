import React, { useRef, useState, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { observe, unobserve } from './defaultIntersectionObserver';
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect';

const StyledPlaceholder = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

/** 懒加载图片，当做img标签使用, 在视口才加载图片 */
const LazyLoadImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  (props, ref) => {
    const { width, height, style, src, ...rest } = props;
    const elRef = useRef();
    const [ready, setReady] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useImperativeHandle(ref, () => elRef.current);

    useIsomorphicLayoutEffect(() => {
      observe(elRef.current, (visible) => {
        if (visible) {
          setReady(true);
          unobserve(elRef.current);
        }
      });

      return () => {
        if (elRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          unobserve(elRef.current);
        }
      };
    }, []);

    const newStyle: React.CSSProperties =
      !ready || !loaded
        ? {
            width,
            height,
            ...style,
          }
        : style;

    const onImageLoaded = () => {
      setLoaded(true);
    };

    return !ready ? (
      <StyledPlaceholder {...rest} ref={elRef} style={newStyle} />
    ) : (
      <img
        {...rest}
        ref={elRef}
        onLoad={onImageLoaded}
        width={width}
        height={height}
        src={src}
        style={newStyle}
      />
    );
  }
);

LazyLoadImage.displayName = 'UC-LazyLoadImage';

export default LazyLoadImage;
