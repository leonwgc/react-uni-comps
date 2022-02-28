import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tabs, Button, Space, styled, Icon } from 'react-uni-comps';

const StyledTabs = styled(Tabs)`
  .uc-tabs-header-item {
    width: 128px;

    &.active {
      background: rgba(0, 75, 204, 0.08);
      color: #005cff;
    }
  }
`;

const StyledScroll = styled(Tabs)`
  .uc-tabs-header-item {
    width: 60px;
  }
`;

const StyledTabBar = styled(Tabs)`
  .uc-tabs-header-wrap {
    height: 90px;
    .uc-tabs-header-item {
      width: 90px;

      .uc-icon {
        font-size: 28px;
      }
    }
  }
`;

const StyledContent = styled.div`
  padding: 10px;
  background-color: #eee;
`;

const scrollTabs = Array.from(new Array(20), (v, i) => ({ title: 'title' + (i + 1) }));

export default function App() {
  const [tabTitles, setTabTitles] = useState<Array<{ title: string | number }>>([{ title: 'tab' }]);
  const maxCount = 3;
  const [value, setValue] = useState(0);

  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="默认">
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab title="title1">
            <StyledContent>content1</StyledContent>
          </Tabs.Tab>
          <Tabs.Tab title="title2">
            <StyledContent>content2</StyledContent>
          </Tabs.Tab>
          <Tabs.Tab title="title3">
            <StyledContent>content3</StyledContent>
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>
      <DemoBlock title="自定义下划线">
        <Tabs underline="10px">
          <Tabs.Tab title="title1"></Tabs.Tab>
          <Tabs.Tab title="title2"></Tabs.Tab>
          <Tabs.Tab title="title3"></Tabs.Tab>
        </Tabs>

        <Tabs underline={false} style={{ marginTop: 20 }}>
          <Tabs.Tab title="title1"></Tabs.Tab>
          <Tabs.Tab title="title2"></Tabs.Tab>
          <Tabs.Tab title="title3"></Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="包含extra配置">
        <Tabs
          value={value}
          onChange={setValue}
          extra={
            <Space>
              {tabTitles.length > 1 && (
                <Button
                  danger
                  circle
                  icon={<Icon type="uc-icon-jian2" />}
                  onClick={() => {
                    tabTitles.pop();
                    setTabTitles([...tabTitles]);
                    setValue(tabTitles.length - 1);
                  }}
                ></Button>
              )}
              {tabTitles.length < maxCount && (
                <Button
                  active
                  circle
                  icon={<Icon type="uc-icon-jia2" />}
                  onClick={() => {
                    setTabTitles((t) => [...t, { title: tabTitles.length }]);
                    setValue(tabTitles.length);
                  }}
                ></Button>
              )}
            </Space>
          }
        >
          {tabTitles.map((item, idx) => {
            return <Tabs.Tab title={item.title || 'tab' + idx} key={idx} />;
          })}
        </Tabs>
      </DemoBlock>

      <DemoBlock title="可滑动">
        <Tabs swipe>
          <Tabs.Tab title="title1">
            <StyledContent>content1</StyledContent>
          </Tabs.Tab>
          <Tabs.Tab title="title2">
            <StyledContent>content2</StyledContent>
          </Tabs.Tab>
          <Tabs.Tab title="title3">
            <StyledContent>content3</StyledContent>
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="滚动">
        <StyledScroll defaultValue={8}>
          {scrollTabs.map((item, index) => (
            <Tabs.Tab title={item.title} key={index}></Tabs.Tab>
          ))}
        </StyledScroll>
      </DemoBlock>

      <DemoBlock title="TabBar" padding={0}>
        <StyledTabBar defaultValue={3}>
          {['Tab1', 'Tab2', 'Tab3', 'Tab4', 'Tab5', 'Tab6', 'Tab7'].map((item, index) => (
            <Tabs.Tab
              title={
                <Space
                  className="tab-title"
                  size={6}
                  direction="vertical"
                  onClick={() => console.log(item)}
                >
                  <Icon type="uc-icon-biaoqianlan_wode" />
                  <div className="name">{item}</div>
                </Space>
              }
              key={index}
            ></Tabs.Tab>
          ))}
        </StyledTabBar>
      </DemoBlock>

      <DemoBlock title="自定义风格1">
        <StyledTabs underline={false}>
          <Tabs.Tab title="title1"></Tabs.Tab>
          <Tabs.Tab title="title2"></Tabs.Tab>
        </StyledTabs>
      </DemoBlock>
    </PageWrap>
  );
}
