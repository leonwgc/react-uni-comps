import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import classNames from 'classnames';

const StyledTabHeaderWrap = styled.div`
  display: flex;
  height: 44px;
  position: relative;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-bottom: 1px solid #dcdcdc;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
    }
  }
`;

const StyledTabHeadItem = styled.div`
  flex: 1 0;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000d9;
  font-size: 14px;

  &.active {
    color: ${(props) => props.theme.color};
    font-weight: 500;
  }
  &.disabled {
    cursor: not-allowed;
    color: #bcbcbc;
  }
`;

const StyledLine = styled.div<{
  lineWidth: string | number;
  itemWidth: string;
  height: number;
  activeIndex: number;
}>`
  width: ${(props) => props.itemWidth};
  position: absolute;
  bottom: 0;
  left: 0;
  transition: transform 0.3s ease;
  transform: translate3d(${(props) => props.activeIndex * 100 + '%'}, 0px, 0px);
  display: flex;
  justify-content: center;
  > .line {
    width: ${(props) =>
      typeof props.lineWidth === 'number' ? props.lineWidth + 'px' : props.lineWidth};
    background-color: ${(props) => props.theme.color};
    height: ${(props) => props.height}px;
  }
`;

const StyledTabContentWrap = styled.div`
  overflow: hidden;
`;

type TabProp = {
  disabled?: boolean;
  title: React.ReactNode;
  children: React.ReactElement;
};

const Tab: React.FC<TabProp> = ({ children }) => {
  return children;
};

type TabsProp = {
  lineWidth?: number | string /** 下划线宽度 */;
  themeColor?: string /** 主题色， 影响active tab标题颜色，和下划线颜色 */;
  children: React.ReactElement[];
  defaultIndex?: number /** 默认选择的tab,默认0,第一个 */;
  [p: string]: unknown;
} & React.HTMLAttributes<HTMLElement>;

const isValidtTabElement = (el) => {
  return React.isValidElement(el) && el.type === Tab;
};

const Tabs: React.FC<TabsProp> & { Tab: typeof Tab } = ({
  children,
  themeColor = '#1890ff',
  lineWidth = '100%',
  defaultIndex = 0,
  ...otherProps
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const len = React.Children.count(children);
  const itemWidth = 100 / len + '%';

  return (
    <ThemeProvider theme={{ color: themeColor }}>
      <div {...otherProps}>
        <StyledTabHeaderWrap className={`tab-header-wrap`}>
          {React.Children.map(children, (child: React.ReactElement, index) => {
            if (isValidtTabElement(child)) {
              const { title = '', disabled = false } = child.props as TabProp;
              const itemCls = classNames('tab-header-item', {
                active: index === activeIndex,
                disabled: disabled,
              });
              return (
                <StyledTabHeadItem
                  key={index}
                  className={itemCls}
                  onClick={() => {
                    if (!disabled) {
                      setActiveIndex(index);
                    }
                  }}
                >
                  {title}
                </StyledTabHeadItem>
              );
            }
          })}
          <StyledLine
            itemWidth={itemWidth}
            lineWidth={lineWidth}
            height={2}
            activeIndex={activeIndex}
          >
            <div className="line" />
          </StyledLine>
        </StyledTabHeaderWrap>
        <StyledTabContentWrap className={`tab-content-wrap`}>
          {React.Children.map(children, (child: React.ReactElement, index) => {
            if (isValidtTabElement(child)) {
              const { children } = child.props as TabProp;
              const style: React.CSSProperties = {};
              if (index !== activeIndex) {
                style.display = 'none';
              }
              return (
                <div key={index} style={style}>
                  {children}
                </div>
              );
            } else {
              throw new Error('Tabs can only contain Tab element');
            }
          })}
        </StyledTabContentWrap>
      </div>
    </ThemeProvider>
  );
};

/** Tab直接子元素 */
Tabs.Tab = Tab;

export default Tabs;
