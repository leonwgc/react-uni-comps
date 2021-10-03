import clsx from 'clsx';
import React, { HTMLAttributes, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Space from './Space';
import IconCross from './IconCross';
import Text from './Text';

const StyledNoticeList = styled.div`
  font-size: 14px;
  padding: 0px 12px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(236, 146, 49, 0.1);
  color: rgb(236, 146, 49);

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

    .list {
      height: 100%;
      transition-property: transform;
      transition-duration: 0.8s;
      transition-timing-function: ease-in-out;
      .item {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
  .content-extra {
    display: inline-block;
    flex-shrink: 0;
    margin-left: 12px;
  }
`;

type Notice = {
  text: string;
  link: string;
};

type Props = {
  /** 公告内容 */
  list: Notice[];
  /** 一条公告展示时间，默认3000ms */
  stayTime?: number;
  /** 广播图标, 可以使用 SoundOutlined @ant-design/icons */
  icon?: React.ReactNode;
  /** 是否可关闭 ，默认false*/
  closeable?: boolean;
  /**额外操作区域，显示在关闭按钮左侧 */
  extra?: React.ReactNode;
  /** 关闭时的回调 */
  onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;

/** 多条信息垂直滚动通知栏  */
const NoticeList = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const {
    list = [],
    stayTime = 3000,
    icon,
    closeable = false,
    className,
    onClose,
    extra,
    ...rest
  } = props;
  const listRef = useRef<HTMLDivElement>();
  const wrapRef = useRef<HTMLDivElement>();
  const timerRef = useRef<number>();
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState(list);

  useEffect(() => {
    setData(list);
  }, [list]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const list = listRef.current;

    if (data.length > 1 && visible) {
      timerRef.current = window.setTimeout(() => {
        list.style.transitionProperty = 'transform';
        list.style.transform = `translateY(-${wrap.offsetHeight}px)`;
      }, stayTime);
      return () => {
        window.clearTimeout(timerRef.current);
      };
    }
  }, [stayTime, data, visible]);

  return (
    <StyledNoticeList
      ref={ref}
      className={clsx(className, 'uc-noticelist', { hide: !visible })}
      {...rest}
    >
      {icon && <div className="icon-part">{icon}</div>}
      <div className="content-wrap" ref={wrapRef}>
        <div
          className="list"
          ref={listRef}
          onTransitionEnd={() => {
            // move
            listRef.current.style.transitionProperty = 'none';
            listRef.current.style.transform = 'none';
            const lIndex = data.length - 1;
            if (lIndex > 0) {
              data.push(data[0]);
              data.shift();
              setData([...data]);
            }
          }}
        >
          {data.map((item) => {
            return (
              <div
                key={item.text}
                onClick={() => {
                  if (item.link) {
                    location.href = item.link;
                  }
                }}
                className={clsx('item')}
              >
                <Text>{item.text}</Text>
              </div>
            );
          })}
        </div>
      </div>
      {(closeable || extra) && (
        <div className={clsx('content-extra')}>
          <Space>
            {props.extra}
            {props.closeable && (
              <IconCross
                size={20}
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
    </StyledNoticeList>
  );
});

NoticeList.displayName = 'UC-NoticeList';

export default NoticeList;
