import React, { useState } from 'react';
import styled from 'styled-components';
import { Spinner, AnimationElement, Tabs, Button, Divider, Toast } from '../src';
import 'animate.css';
import './Tab.less';

const StyledApp = styled.div`
  .uc-tabs {
    margin: 20px 0;
  }
`;

const StyledTabs1 = styled(Tabs)`
  .uc-tabs-header-item {
    flex: none;
    width: 120px;
  }
`;

const StyledContent = styled.div`
  padding: 30px 20px;
  background-color: #eee;
`;

const StyledTabs = styled(Tabs)`
  display: inline-block;

  .uc-tabs-header-wrap {
    border-bottom: none;

    .uc-tabs-header-item {
      background-color: #fff;
      color: #999;
      border-color: #e0e0e0;
      border-width: 1px;
      border-style: solid;
      min-width: 80px;

      &.active {
        border-color: #155bd4;
        background-color: #e6efff;
        color: #155bd4;
      }
    }

    .uc-tabs-header-line {
      display: none;
    }
  }
`;

export default function App() {
  const [tabTitles, setTabTitles] = useState([{ title: '默认欢迎语' }, { title: '默认欢迎语1' }]);
  const maxCount = 5;
  const [value, setValue] = useState(0);

  return (
    <StyledApp>
      <Divider>controlled & extra & no content</Divider>
      <StyledTabs1
        value={value}
        onChange={setValue}
        extra={
          tabTitles.length < maxCount ? (
            <Button
              onClick={() => {
                setTabTitles((t) => [...t, { key: tabTitles.length }]);
                setValue(tabTitles.length);
              }}
            >
              新增欢迎语
            </Button>
          ) : null
        }
      >
        {tabTitles.map((item, idx) => {
          return <Tabs.Tab title={item.title || '欢迎语模板' + idx} key={idx} />;
        })}
      </StyledTabs1>
      <StyledTabs underline="100%" value={value} onChange={setValue}>
        <Tabs.Tab title="title1"></Tabs.Tab>
        <Tabs.Tab title="title2"></Tabs.Tab>
        <Tabs.Tab title="title3"></Tabs.Tab>
      </StyledTabs>

      <Divider>swipe</Divider>

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

      <Divider>uncontrolled tab/scroll swipe</Divider>
      <Tabs
        swipe
        underline="40px"
        style={{ marginTop: 30 }}
        onChange={(v) => Toast.show(v + '', 1000)}
      >
        <Tabs.Tab title="title1">
          <StyledContent>content1</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title2">
          <StyledContent>content2</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title3">
          <StyledContent>
            <AnimationElement name="fadeInRight" duration=".24s">
              <Spinner color="red" size={48}></Spinner>
            </AnimationElement>
          </StyledContent>
        </Tabs.Tab>
        <Tabs.Tab
          title={
            <span>
              <Spinner></Spinner> loading...
            </span>
          }
        >
          <StyledContent> loading content</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title5">
          <StyledContent>content5</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title6" disabled>
          disabled
        </Tabs.Tab>
        <Tabs.Tab title="title7">
          <StyledContent>content7</StyledContent>
        </Tabs.Tab>
      </Tabs>
    </StyledApp>
  );
}
