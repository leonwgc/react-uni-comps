import React, { useRef, useState, useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

export type Props = React.ImgHTMLAttributes<HTMLImageElement>;

/** 懒加载图片，当做img标签使用, 在视口才加载图片 */
const LazyLoadImage: React.FC<Props> = ({ width, height, src, ...props }) => {
  const ref = useRef();
  const isInViewport = useInViewport(ref);
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isInViewport && !ready) {
      setReady(true);
    }
  }, [isInViewport, ready]);

  const { style, ...otherProps } = props;

  const newStyle =
    !ready || !loaded
      ? {
          display: 'inline-block',
          filter: `blur(2px)`,
          width,
          height,
          ...style,
        }
      : style;

  const onImageLoaded = () => {
    setLoaded(true);
  };

  return !ready ? (
    <span ref={ref} style={newStyle} {...otherProps} />
  ) : (
    <img
      ref={ref}
      onLoad={onImageLoaded}
      width={width}
      height={height}
      src={src}
      style={newStyle}
      {...otherProps}
    />
  );
};

export default LazyLoadImage;
