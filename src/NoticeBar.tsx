import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Space from './Space';
import Icon from './Icon';
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect';

const StyledNoticeBar = styled.div`
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(236, 146, 49, 0.1);
  color: rgb(236, 146, 49);
  overflow: hidden;

  &.hide {
    display: none;
  }

  .icon-part {
    flex-shrink: 0;
    margin-right: 8px;
  }

  .content-wrap {
    flex: 1 1;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;

    .content-text {
      transition-property: transform;
      transition-timing-function: linear;
      white-space: nowrap;
      flex: 1;
    }
  }
  .content-extra {
    display: inline-block;
    flex-shrink: 0;
    margin-left: 12px;
  }
`;

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 公告内容 */
  content: string;
  /**
   * 开始滚动的延迟，单位 ms
   * @default 2000
   *  */
  delay?: number;
  /** 广播图标 */
  icon?: React.ReactNode;
  /**
   * 滚动速度，单位 px/s
   * @default 50
   *  */
  speed?: number;
  /** 是否可关闭*/
  closeable?: boolean;
  /**额外操作区域，显示在关闭按钮左侧 */
  extra?: React.ReactNode;
  /** 关闭时的回调 */
  onClose?: () => void;
};

/** 通告栏  */
const NoticeBar = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const {
    content,
    delay = 2000,
    icon = <Icon type="uc-icon-horn" />,
    speed = 50,
    closeable = false,
    className,
    onClose,
    extra,
    ...rest
  } = props;
  const wrapRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();
  const [v, setV] = useState(0);
  const [visible, setVisible] = useState(true);

  useIsomorphicLayoutEffect(() => {
    const container = wrapRef.current;
    const text = contentRef.current;

    if (container.offsetWidth >= text.offsetWidth) return;
    const timeout = window.setTimeout(() => {
      text.style.transitionDuration = `${Math.round(text.offsetWidth / speed)}s`;
      text.style.transform = `translateX(-${text.offsetWidth}px)`;
    }, delay);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [delay, speed]);

  useIsomorphicLayoutEffect(() => {
    const container = wrapRef.current;
    const text = contentRef.current;
    if (container.offsetWidth >= text.offsetWidth || v === 0) {
      return;
    }
    text.style.transform = `translateX(${container.offsetWidth}px)`;
    text.style.transitionDuration = `${Math.round(
      (container.offsetWidth + text.offsetWidth) / speed
    )}s`;
    text.style.transform = `translateX(-${text.offsetWidth}px)`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v]);

  return (
    <StyledNoticeBar
      {...rest}
      ref={ref}
      className={clsx(className, 'uc-noticebar', { hide: !visible })}
    >
      {icon && <div className="icon-part">{icon}</div>}
      <div className="content-wrap" ref={wrapRef}>
        <div
          className="content-text"
          key={v}
          onTransitionEnd={() => {
            setV((v) => v + 1);
          }}
          ref={contentRef}
        >
          {content}
        </div>
      </div>
      {(closeable || extra) && (
        <div className={clsx('content-extra')}>
          <Space>
            {props.extra}
            {props.closeable && (
              <Icon
                type="uc-icon-guanbi"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setVisible(false);
                  onClose?.();
                }}
              />
            )}
          </Space>
        </div>
      )}
    </StyledNoticeBar>
  );
});

NoticeBar.displayName = 'UC-NoticeBar';

export default NoticeBar;
