import React from 'react';
import styled from 'styled-components';
import { Spinner, AnimationElement, Tabs } from 'react-uni-comps';
import 'animate.css';
import './Tab.less';

const StyledContent = styled.div`
  padding: 20px;
`;

export default function App() {
  return (
    <div classNameName="app">
      <Tabs defaultIndex={1} lineWidth={50} onIndexChange={(index) => console.log(index)}>
        <Tabs.Tab title="title1"></Tabs.Tab>
        <Tabs.Tab title="title2"></Tabs.Tab>
      </Tabs>
      <Tabs lineWidth={40} themeColor="#004bcc" style={{ marginTop: 30 }}>
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
        lineWidth={0}
        style={{ marginTop: 30 }}
        themeColor="#004bcc"
        defaultIndex={2}
        className="my-tab"
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
