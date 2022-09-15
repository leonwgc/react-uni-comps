import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tabs, styled, Icon, Badge } from 'react-uni-comps';

// 自定义
const StyledTabs = styled(Tabs)`
  .uc-tabs-header-item {
    &.active {
      background: rgba(0, 75, 204, 0.08);
      color: #005cff;
    }
  }
`;

const Tabs1 = styled(Tabs)`
  .uc-tabs-header-item {
    width: unset;
    padding: 0 20px;
  }
`;

// 标签栏
const StyledTabBar = styled(Tabs)`
  .uc-tabs-header-wrap {
    height: 52px;
    overflow-x: unset;
  }
  .tab-title {
    font-size: 11px;
    font-weight: normal;
    text-align: center;
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

      <DemoBlock title="下划线" padding={0}>
        <Tabs underline={20}>
          <Tabs.Tab title="标题1"></Tabs.Tab>
          <Tabs.Tab title="标题2"></Tabs.Tab>
          <Tabs.Tab title="标题3"></Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="水平滚动" padding={0}>
        <Tabs tabWidth={60} border={false} value={19}>
          {scrollTabs.map((item, index) => (
            <Tabs.Tab title={item.title} key={index}></Tabs.Tab>
          ))}
        </Tabs>
      </DemoBlock>

      <DemoBlock title="标签栏" padding={0}>
        <StyledTabBar underline={false} border={false} tabWidth="33.3%">
          <Tabs.Tab
            title={
              <div className="tab-title">
                <Icon type="uc-icon-shouye" style={{ fontSize: 20 }} />
                <div>首页</div>
              </div>
            }
          />
          <Tabs.Tab
            title={
              <div className="tab-title">
                <Icon type="uc-icon-avatar" style={{ fontSize: 20 }} />
                <div>我的</div>
              </div>
            }
          />
          <Tabs.Tab
            title={
              <Badge content="10">
                <div className="tab-title">
                  <Icon type="uc-icon-shezhi" style={{ fontSize: 20 }} />
                  <div>设置</div>
                </div>
              </Badge>
            }
          />
        </StyledTabBar>
      </DemoBlock>

      <DemoBlock title="不同宽度" padding={0}>
        <Tabs1 defaultValue={4} underline={30}>
          {['类别', '中秋月圆', '标题3', '我是很长的标题', '标题5', '标题66666666'].map(
            (item, index) => (
              <Tabs.Tab title={item} key={index}></Tabs.Tab>
            )
          )}
        </Tabs1>
      </DemoBlock>
    </PageWrap>
  );
}
