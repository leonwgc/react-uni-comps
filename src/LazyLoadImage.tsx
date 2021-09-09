import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
import styled from 'styled-components';
import Spinner from './Spinner';

const StyledPlaceholder = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

/** 懒加载图片，当做img标签使用, 在视口才加载图片 */
const LazyLoadImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  (props, ref) => {
    const { width, height, style, src, ...rest } = props;
    const elRef = useRef();
    const isInViewport = useInViewport(elRef);
    const [ready, setReady] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useImperativeHandle(ref, () => elRef.current);

    useEffect(() => {
      if (isInViewport && !ready) {
        setReady(true);
      }
    }, [isInViewport, ready]);

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
      <StyledPlaceholder {...rest} ref={elRef} style={newStyle}>
        <Spinner size={20} color="#999" />
      </StyledPlaceholder>
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
