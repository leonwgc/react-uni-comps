import React from 'react';
import styled from 'styled-components';
import { Spinner, AnimationElement, Tabs } from '../src';
import 'animate.css';
import './Tab.less';

const StyledContent = styled.div`
  padding: 20px;
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
  return (
    <div classNameName="app">
      <StyledTabs defaultIndex={2} onIndexChange={(index) => console.log(index)}>
        <Tabs.Tab title="title1"></Tabs.Tab>
        <Tabs.Tab title="title2"></Tabs.Tab>
        <Tabs.Tab title="title3"></Tabs.Tab>
      </StyledTabs>

      <Tabs onIndexChange={(index) => console.log(index)}>
        <Tabs.Tab title="title1"></Tabs.Tab>
        <Tabs.Tab title="title2"></Tabs.Tab>
        <Tabs.Tab title="title3"></Tabs.Tab>
      </Tabs>

      <Tabs defaultIndex={1} underlineWidth="40px" onIndexChange={(index) => console.log(index)}>
        <Tabs.Tab title="title1"></Tabs.Tab>
        <Tabs.Tab title="title2"></Tabs.Tab>
        <Tabs.Tab title="title3"></Tabs.Tab>
      </Tabs>

      <Tabs
        defaultIndex={1}
        color="#00bc8d"
        underlineWidth="50px"
        onIndexChange={(index) => console.log(index)}
      >
        <Tabs.Tab title="title1"></Tabs.Tab>
        <Tabs.Tab title="title2"></Tabs.Tab>
      </Tabs>
      <Tabs underlineWidth="40px" themeColor="#004bcc" style={{ marginTop: 30 }}>
        <Tabs.Tab title="title1">
          <StyledContent>content1</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title2">
          <StyledContent>content2</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title3">
          <StyledContent>
            <AnimationElement name="fadeInRight" duration=".24s">
              <Spinner color="#004bcc" size={48}></Spinner>
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
        <Tabs.Tab title="title6" disabled></Tabs.Tab>
        <Tabs.Tab title="title7">
          <StyledContent>content7</StyledContent>
        </Tabs.Tab>
      </Tabs>

      <Tabs
        underline={false}
        style={{ marginTop: 30 }}
        themeColor="#004bcc"
        defaultIndex={2}
        className="my-tab"
      >
        <Tabs.Tab title="title1">
          <StyledContent>content</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title2">
          <StyledContent>content2</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title3">
          <StyledContent>
            <AnimationElement name="fadeInRight" duration=".24s">
              <Spinner color="#004bcc" size={48}></Spinner>
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
        <Tabs.Tab title="title6" disabled></Tabs.Tab>
        <Tabs.Tab title="title7">
          <StyledContent>content7</StyledContent>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
