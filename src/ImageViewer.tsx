import React, { useEffect, useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Slide, { SlideRefType } from './Slide';
import useLatest from './hooks/useLatest';
import Space from './Space';
import useUpdateEffect from './hooks/useUpdateEffect';
import Icon from './Icon';
import Mask from './Mask';
import Button from './Button';
import IconArrow from './IconArrow';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 是否可见 */
  visible?: boolean;
  /**  关闭回调 */
  onClose?: () => void;
  /** 图片资源的 url 列表 */
  images?: string[] | string;
  /** 切换图片时触发 */
  onIndexChange?: (index: number) => void;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /**
   * 是否显示导航按钮
   * @default false
   */
  showPrevNextButton?: boolean;
  /**
   * 上一张文本
   *
   */
  prev?: React.ReactNode;
  /**
   * 下一张文本
   *
   */
  next?: React.ReactNode;
};

const StyledImageViewer = styled.div`
  position: fixed;
  z-index: 1200;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  touch-action: none;
  user-select: none;
  flex-direction: column;

  .page {
    position: absolute;
    left: 50%;
    top: 16px;
    transform: translate3d(-50%, 0, 0);
    color: #e6e6e6;
    font-size: 14px;
  }

  .close {
    position: absolute;
    right: 32px;
    top: 32px;
    color: #e6e6e6;
    font-size: 24px;
  }

  .close {
    position: fixed;
    right: 16px;
    top: 16px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
  }

  .uc-icon-arrow {
    cursor: pointer;
  }

  img {
    width: 100%;
    object-fit: scale-down;
  }
`;

/** 图片查看器 */
const ImageViewer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    visible,
    onClose,
    images,
    onIndexChange,
    prev = <IconArrow direction="left" />,
    next = <IconArrow direction="right" />,
    showPrevNextButton = false,
    maskStyle,
    ...rest
  } = props;

  const [urls, setUrls] = useState(Array.isArray(images) ? images : [images]);
  const [index, setIndex] = useState<number>(0);

  const onIndexChangeRef = useLatest(onIndexChange);
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
        showPageIndicator={false}
        style={{ width: '100%', display: 'flex', alignItems: 'center' }}
        direction="horizontal"
        height={'70vh'}
        onPageChange={(index) => {
          setIndex(index);
          onIndexChangeRef.current?.(index);
        }}
        autoPlay={false}
      >
        {urls.map((url) => (
          <img src={url} key={url} />
        ))}
      </Slide>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urls, slideRef]);

  return (
    <>
      <Mask visible={visible} style={maskStyle} duration={0} />
      {visible && (
        <StyledImageViewer
          onClick={(e: any) => {
            if (e.target.nodeName === 'IMG') {
              return;
            }
            onClose?.();
          }}
          {...rest}
          ref={ref}
          className={clsx('uc-image-viewer', className)}
        >
          {slides}

          {urls.length > 1 && showPrevNextButton && (
            <Space
              style={{
                display: 'flex',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 20,
                marginTop: 24,
              }}
            >
              <Button
                ghost
                onClick={(e) => {
                  e.stopPropagation();
                  slideRef.current.prev();
                }}
              >
                {prev}
              </Button>
              <Button
                ghost
                onClick={(e) => {
                  e.stopPropagation();
                  slideRef.current.next();
                }}
              >
                {next}
              </Button>
            </Space>
          )}

          {urls.length > 1 && (
            <div className={clsx('page')}>
              <Space size={4}>
                {index + 1} / {urls.length}
              </Space>
            </div>
          )}
          <div className="close" onClick={onClose}>
            <Icon type="uc-icon-guanbi" />
          </div>
        </StyledImageViewer>
      )}
    </>
  );
});

ImageViewer.displayName = 'UC-ImageViewer';

export default ImageViewer;
