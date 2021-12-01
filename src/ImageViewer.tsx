import React, { useEffect, useState, useMemo, useRef, SyntheticEvent } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Mask from './Mask';
import Slide, { SlideRefType } from './Slide';
import useCallbackRef from './hooks/useCallbackRef';
import Space from './Space';
import IconArrow from './IconArrow';
import Button from './Button';
import useUpdateEffect from './hooks/useUpdateEffect';
import Icon from './Icon';
import { isMobile } from './dom';

type Props = {
  /** 是否可见 */
  visible?: boolean;
  /**  关闭回调 */
  onClose?: () => void;
  /** 图片资源的 url 列表 */
  images?: string[] | string;
  /** 切换图片时触发 */
  onIndexChange?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
};

const StyledImageViewer = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  .text {
    position: fixed;
    left: 50%;
    top: 12px;
    transform: translateX(-50%);
    color: #e6e6e6;
    font-size: 18px;
  }

  .uc-icon-arrow {
    cursor: pointer;
  }
  .slide-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;

    img {
      object-position: center;
      max-width: 100%;
      touch-action: none;
    }
  }
`;

/** 图片查看器 */
const ImageViewer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, visible, onClose, images, onIndexChange, ...rest } = props;

  const [urls, setUrls] = useState(Array.isArray(images) ? images : [images]);
  const [index, setIndex] = useState<number>(0);

  const onIndexChangeRef = useCallbackRef(onIndexChange);
  const slideRef = useRef<SlideRefType>();

  useEffect(() => {
    setUrls(Array.isArray(images) ? images : [images]);
  }, [images]);

  useUpdateEffect(() => {
    if (!visible) {
      setIndex(0);
    }
  }, [visible]);

  const slides = useMemo(() => {
    return (
      <Slide
        ref={slideRef}
        showDot={false}
        style={{ zIndex: 101, width: '100%' }}
        direction="horizontal"
        height={'60vh'}
        onPageChange={(index) => {
          setIndex(index);
          onIndexChangeRef.current?.(index);
        }}
        loop={isMobile}
        autoPlay={false}
      >
        {urls.map((url) => (
          <div className="slide-page" key={url}>
            <img src={url} />
          </div>
        ))}
      </Slide>
    );
  }, [urls, onIndexChangeRef, slideRef]);

  const textRender = () => {
    if (urls.length > 1) {
      return (
        <div className={clsx('text')}>
          <Space>
            <Button
              style={{ border: 'none' }}
              ghost
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                slideRef.current?.prev();
              }}
              icon={<IconArrow direction="left" />}
            />
            <span>
              {index + 1} / {urls.length}
            </span>
            <Button
              ghost
              style={{ border: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                slideRef.current?.next();
              }}
              icon={<IconArrow direction="right" />}
            ></Button>
          </Space>
        </div>
      );
    }
  };

  return (
    visible && (
      <StyledImageViewer {...rest} ref={ref} className={clsx('uc-image-viewer', className)}>
        <Mask style={{ zIndex: 'auto' }} onClick={onClose} />
        <Icon
          type="uc-icon-clear"
          onClick={onClose}
          style={{
            position: 'fixed',

            right: 20,
            top: 20,
            cursor: 'pointer',
            fontSize: 30,
            opacity: 0.7,
          }}
        />
        {textRender()}
        {slides}
      </StyledImageViewer>
    )
  );
});

ImageViewer.displayName = 'UC-ImageViewer';

export default ImageViewer;
