import React, { useEffect, useState, useMemo, useRef, SyntheticEvent } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Mask from './Mask';
import Slide, { SlideRefType } from './Slide';
import useCallbackRef from './hooks/useCallbackRef';
import Space from './Space';
import IconArrow from './IconArrow';

type Props = {
  /** 是否可见 */
  visible?: boolean;
  /**  关闭回调 */
  onClose?: () => void;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 图片资源的 url 列表 */
  images?: string[] | string;
  /** 切换图片时触发 */
  onIndexChange?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
};

const StyledImageViewer = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  .text {
    z-index: 101;
    position: absolute;
    left: 50%;
    top: 12px;
    transform: translateX(-50%);
    color: #e6e6e6;
    font-size: 18px;
  }
  .slide-page {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .image {
    z-index: 101;
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
    object-position: center;
    touch-action: none;
  }
`;

/** 图片查看器 */
const ImageViewer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, visible, maskStyle, onClose, images, onIndexChange, ...rest } = props;

  const [urls, setUrls] = useState(Array.isArray(images) ? images : [images]);
  const [index, setIndex] = useState<number>(0);

  const onIndexChangeRef = useCallbackRef(onIndexChange);
  const slideRef = useRef<SlideRefType>();

  useEffect(() => {
    setUrls(Array.isArray(images) ? images : [images]);
  }, [images]);

  const slides = useMemo(() => {
    return (
      <Slide
        ref={slideRef}
        showDot={false}
        style={{ zIndex: 101, width: '100%' }}
        direction="horizontal"
        height="60vh"
        onPageChange={(index) => {
          setIndex(index);
          onIndexChangeRef.current?.(index);
        }}
        loop={false}
        autoPlay={false}
        ratio={0.1}
      >
        {urls.map((url) => (
          <div className="slide-page" key={url}>
            <img className="image" src={url} />
          </div>
        ))}
      </Slide>
    );
  }, [urls, onIndexChangeRef, slideRef]);

  const textRender = () => {
    if (urls.length > 1) {
      return (
        <div className={clsx('text')}>
          <Space size={20} align="flex-start">
            <IconArrow
              direction="left"
              title="上一张"
              style={{ cursor: 'pointer' }}
              size={24}
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                slideRef.current?.prev();
              }}
            />
            <span>
              {index + 1} / {urls.length}
            </span>
            <IconArrow
              direction="right"
              title="下一张"
              style={{ cursor: 'pointer' }}
              size={24}
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                slideRef.current?.next();
              }}
            />
          </Space>
        </div>
      );
    }
  };

  return (
    visible && (
      <StyledImageViewer
        {...rest}
        ref={ref}
        className={clsx('uc-image-viewer', className)}
        onClick={onClose}
      >
        <Mask style={maskStyle} />
        {textRender()}
        {urls.length > 1 && slides}
        {urls.length === 1 && <img className="image" src={urls[0]} />}
      </StyledImageViewer>
    )
  );
});

ImageViewer.displayName = 'UC-ImageViewer';

export default ImageViewer;
