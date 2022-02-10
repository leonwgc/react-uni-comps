import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tabs, Button, Space, styled, Icon } from 'react-uni-comps';

const StyledTabsNew = styled(Tabs)`
  background-color: #fff;
  flex-basis: 56px;

  .uc-tabs-header-wrap {
    height: 56px;
  }
  .uc-tabs-header-item {
    flex: 0 0 128px;
    height: 40px;

    &.active {
      background: rgba(0, 75, 204, 0.08);
      color: #005cff;
      font-weight: normal;
    }
  }
`;

const StyledTabsNew1 = styled(Tabs)`
  background-color: #fff;
  .uc-tabs-header-wrap {
    height: 56px;
  }
  .uc-tabs-header-item {
    flex: 0 0 132px;

    &.active {
      background: rgba(0, 75, 204, 0.08);
      color: #005cff;
      border-bottom: 2px solid #005cff;
      font-weight: normal;
    }
  }
`;

const StyledTabs = styled(Tabs)`
  .uc-tabs-header-item {
    flex: none;
    width: 120px;
  }
`;

const StyledContent = styled.div`
  padding: 10px;
  background-color: #eee;
`;

const scrollTabs = Array.from(new Array(10), (v, i) => ({ title: 'title' + (i + 1) }));

export default function App() {
  const [tabTitles, setTabTitles] = useState<Array<{ title: string | number }>>([{ title: 'tab' }]);
  const maxCount = 5;
  const [value, setValue] = useState(0);

  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="默认">
        <Tabs value={value} onChange={(v) => setValue(v)}>
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
        <Tabs value={value} onChange={(v) => setValue(v)} underline="30px">
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

      <DemoBlock title="无下划线">
        <Tabs underline={false} value={value} onChange={(v) => setValue(v)}>
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

      <DemoBlock title="包含extra配置">
        <StyledTabs
          value={value}
          onChange={(v) => setValue(v)}
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
        </StyledTabs>
      </DemoBlock>

      <DemoBlock title="可滑动">
        <Tabs swipe value={value} onChange={(v) => setValue(v)}>
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

      <DemoBlock title="非受控">
        <Tabs swipe defaultValue={2} onChange={console.log}>
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
        <Tabs defaultValue={2} onChange={console.log}>
          {scrollTabs.map((item, index) => (
            <Tabs.Tab title={item.title} key={index}></Tabs.Tab>
          ))}
        </Tabs>
      </DemoBlock>

      <DemoBlock title="自定义风格1">
        <StyledTabsNew underline={false}>
          <Tabs.Tab title="title1"></Tabs.Tab>
          <Tabs.Tab title="title2"></Tabs.Tab>
        </StyledTabsNew>
      </DemoBlock>

      <DemoBlock title="自定义风格2">
        <StyledTabsNew1 underline={false}>
          <Tabs.Tab title="title1"></Tabs.Tab>
          <Tabs.Tab title="title2"></Tabs.Tab>
        </StyledTabsNew1>
      </DemoBlock>
    </PageWrap>
  );
}
