import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tabs, Button, Space, styled, Icon, Badge } from 'react-uni-comps';

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
    height: 52px;
    overflow-x: unset;
    .uc-tabs-header-item {
      width: 33%;

      .uc-icon {
        font-size: 28px;
      }
    }
  }
`;

const StyledContent = styled.div`
  padding: 10px;
  background-color: #fafafa;
`;

const scrollTabs = Array.from(new Array(20), (v, i) => ({ title: '标题' + (i + 1) }));

export default function App() {
  const [tabTitles, setTabTitles] = useState<Array<{ title: string | number }>>([
    { title: '标题' },
  ]);
  const maxCount = 4;
  const [value, setValue] = useState(0);

  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="默认">
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab title="标题1">
            <StyledContent>content1</StyledContent>
          </Tabs.Tab>
          <Tabs.Tab title="标题2">
            <StyledContent>content2</StyledContent>
          </Tabs.Tab>
          <Tabs.Tab title="标题3">
            <StyledContent>content3</StyledContent>
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="自定义下划线">
        <Tabs underline="10px">
          <Tabs.Tab title="标题1"></Tabs.Tab>
          <Tabs.Tab title="标题2"></Tabs.Tab>
          <Tabs.Tab title="标题3"></Tabs.Tab>
        </Tabs>

        <Tabs underline={false} style={{ marginTop: 20 }}>
          <Tabs.Tab title="标题1"></Tabs.Tab>
          <Tabs.Tab title="标题2"></Tabs.Tab>
          <Tabs.Tab title="标题3"></Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="包含extra配置">
        <Tabs
          value={value}
          onChange={setValue}
          extra={
            <Space align="center">
              {tabTitles.length > 1 && (
                <Button
                  danger
                  as="a"
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
                  as="a"
                  icon={<Icon type="uc-icon-jia2" />}
                  onClick={() => {
                    setTabTitles((t) => [...t, { title: '标题' + tabTitles.length }]);
                    setValue(tabTitles.length);
                  }}
                ></Button>
              )}
            </Space>
          }
        >
          {tabTitles.map((item, idx) => {
            return <Tabs.Tab title={item.title || '标题' + idx} key={idx} />;
          })}
        </Tabs>
      </DemoBlock>

      <DemoBlock title="滑动内容">
        <Tabs swipe>
          <Tabs.Tab title="标题1">
            <StyledContent>content1</StyledContent>
          </Tabs.Tab>
          <Tabs.Tab title="标题2">
            <StyledContent>content2</StyledContent>
          </Tabs.Tab>
          <Tabs.Tab title="标题3">
            <StyledContent>content3</StyledContent>
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="水平滚动">
        <StyledScroll defaultValue={8}>
          {scrollTabs.map((item, index) => (
            <Tabs.Tab title={item.title} key={index}></Tabs.Tab>
          ))}
        </StyledScroll>
      </DemoBlock>

      <DemoBlock title="标签栏">
        <StyledTabBar underline={false} border={false}>
          <Tabs.Tab
            title={
              <Space className="tab-title" size={2} direction="vertical">
                <Icon type="uc-icon-shouye" />
                <div className="name">首页</div>
              </Space>
            }
          />
          <Tabs.Tab
            title={
              <Space className="tab-title" size={2} direction="vertical">
                <Icon type="uc-icon-avatar" />
                <div className="name">我的</div>
              </Space>
            }
          />
          <Tabs.Tab
            title={
              <Badge content="666">
                <Space className="tab-title" size={2} direction="vertical">
                  <Icon type="uc-icon-shezhi" />
                  <div className="name">设置</div>
                </Space>
              </Badge>
            }
          />
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
