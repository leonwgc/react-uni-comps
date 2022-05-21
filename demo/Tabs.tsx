import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tabs, Button, Space, styled, Icon, Badge } from 'react-uni-comps';

// 自定义
const StyledTabs = styled(Tabs)`
  .uc-tabs-header-item {
    &.active {
      background: rgba(0, 75, 204, 0.08);
      color: #005cff;
    }
  }
`;

// 标签栏
const StyledTabBar = styled(Tabs)`
  .uc-tabs-header-wrap {
    height: 52px;
    overflow-x: unset;
  }
`;

const StyledContent = styled.div`
  padding: 12px;
`;

const scrollTabs = Array.from(new Array(20), (v, i) => ({ title: '标题' + (i + 1) }));

export default function App() {
  const [tabTitles, setTabTitles] = useState<Array<{ title: string | number }>>([
    { title: '标题' },
  ]);
  const maxCount = 4;
  const [value, setValue] = useState(0);

  return (
    <PageWrap>
      <DemoBlock title="默认" padding={0}>
        <Tabs>
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

      <DemoBlock title="标题宽度" padding={0}>
        <Tabs tabWidth={100}>
          <Tabs.Tab title="很长的标题1"></Tabs.Tab>
          <Tabs.Tab title="短标题1"></Tabs.Tab>
          <Tabs.Tab title="很长的标题2"></Tabs.Tab>
          <Tabs.Tab title="短标题2"></Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="下划线" padding={0}>
        <Tabs underline={20}>
          <Tabs.Tab title="标题1"></Tabs.Tab>
          <Tabs.Tab title="标题2"></Tabs.Tab>
          <Tabs.Tab title="标题3"></Tabs.Tab>
        </Tabs>

        <Tabs underline={0} border={false}>
          <Tabs.Tab title="标题1"></Tabs.Tab>
          <Tabs.Tab title="标题2"></Tabs.Tab>
          <Tabs.Tab title="标题3"></Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="extra" padding={0}>
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

      <DemoBlock title="水平滚动" padding={0}>
        <Tabs tabWidth={60} border={false}>
          {scrollTabs.map((item, index) => (
            <Tabs.Tab title={item.title} key={index}></Tabs.Tab>
          ))}
        </Tabs>
      </DemoBlock>

      <DemoBlock title="标签栏" padding={0}>
        <StyledTabBar underline={false} border={false} tabWidth="33.3%">
          <Tabs.Tab
            title={
              <Space className="tab-title" size={2} direction="vertical">
                <Icon type="uc-icon-shouye" style={{ fontSize: 28 }} />
                <div className="name">首页</div>
              </Space>
            }
          />
          <Tabs.Tab
            title={
              <Space className="tab-title" size={2} direction="vertical">
                <Icon type="uc-icon-avatar" style={{ fontSize: 28 }} />
                <div className="name">我的</div>
              </Space>
            }
          />
          <Tabs.Tab
            title={
              <Badge content="666">
                <Space className="tab-title" size={2} direction="vertical">
                  <Icon type="uc-icon-shezhi" style={{ fontSize: 28 }} />
                  <div className="name">设置</div>
                </Space>
              </Badge>
            }
          />
        </StyledTabBar>
      </DemoBlock>

      <DemoBlock title="自定义" padding={0}>
        <StyledTabs underline={false} tabWidth={120} border={false}>
          <Tabs.Tab title="标题1"></Tabs.Tab>
          <Tabs.Tab title="标题2"></Tabs.Tab>
        </StyledTabs>
      </DemoBlock>
    </PageWrap>
  );
}
