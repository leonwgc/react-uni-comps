import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// ref zarm design

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

  .icon-part {
    flex-shrink: 0;
    margin-right: 8px;
  }

  .content-wrap {
    flex: 1 1;
    overflow: hidden;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export type Props = {
  /** 公告内容 */
  content: string;
  /** 开始滚动的延迟，单位 ms */
  delay?: number;
  /** 广播图标 */
  icon?: React.ReactNode;
  speed?: number;
} & HTMLAttributes<HTMLDivElement>;

/** 通告栏  */
const NoticeBar = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { content, delay = 2000, icon, speed = 50, ...rest } = props;
  const [data, setData] = useState<any>({});
  const wrapRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const wrapWidth = wrapRef.current.getBoundingClientRect().width;
    const offsetWidth = contentRef.current.getBoundingClientRect().width;

    if (offsetWidth > wrapWidth) {
      // 完整的执行时间 = 前后停留时间 + 移动时间
      const animationDuration = Math.round(delay * 2 + (offsetWidth / speed) * 1000);

      // 计算停留时间占总时间的百分比
      const delayPercent = Math.round((delay * 100) / animationDuration);

      setData({ animationDuration, delayPercent, offsetWidth, wrapWidth });
    }
  }, []);

  const { animationDuration, delayPercent, offsetWidth, wrapWidth } = data;

  const StyledContent = styled.div`
    @keyframes move {
      0%,
      ${delayPercent}% {
        transform: translate3d(0, 0, 0);
      }
      ${100 - delayPercent}%,100% {
        transform: translate3d(-${offsetWidth - wrapWidth}px, 0, 0);
      }
    }
    position: absolute;
    padding: 0 4px;
    white-space: nowrap;
    animation: move ${animationDuration}ms linear infinite;
  `;

  return (
    <StyledNoticeBar ref={ref} {...rest}>
      <div className="icon-part">{icon}</div>
      <div className="content-wrap" ref={wrapRef}>
        <StyledContent ref={contentRef}>{content}</StyledContent>
      </div>
    </StyledNoticeBar>
  );
});

NoticeBar.displayName = 'UC-NoticeBar';

export default NoticeBar;
