import React, { useState } from 'react';
import styled from '../src/styled';
import { Spinner, AnimationElement, Tabs, Button, Divider, Toast, Space } from '../src';
import 'animate.css';
import './Tab.less';

const StyledApp = styled.div`
  .uc-tabs {
    margin: 10px 0;
  }
`;

const StyledTabs = styled(Tabs)`
  .uc-tabs-header-item {
    flex: none;
    width: 120px;
  }
`;

const StyledContent = styled.div`
  padding: 30px 20px;
  background-color: #eee;
`;

export default function App() {
  const [tabTitles, setTabTitles] = useState([{ title: 'tab' }, { title: 'tabx' }]);
  const maxCount = 5;
  const [value, setValue] = useState(0);

  return (
    <StyledApp>
      <Divider>controlled & extra & no content</Divider>
      <StyledTabs
        value={value}
        onChange={setValue}
        extra={
          <Space>
            {tabTitles.length > 1 && (
              <Button
                onClick={() => {
                  tabTitles.pop();
                  setTabTitles([...tabTitles]);
                  setValue(tabTitles.length - 1);
                }}
              >
                delete
              </Button>
            )}
            {tabTitles.length < maxCount && (
              <Button
                type="primary"
                onClick={() => {
                  setTabTitles((t) => [...t, { key: tabTitles.length }]);
                  setValue(tabTitles.length);
                }}
              >
                add
              </Button>
            )}
          </Space>
        }
      >
        {tabTitles.map((item, idx) => {
          return <Tabs.Tab title={item.title || 'tab' + idx} key={idx} />;
        })}
      </StyledTabs>

      <Divider> no underline</Divider>

      <Tabs underline={false} value={value} onChange={setValue}>
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

      <Divider>swipe controlled </Divider>

      <Tabs swipe value={value} onChange={setValue}>
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

      <Divider>swipe uncontrolled/defaultValue</Divider>

      <Tabs swipe defaultValue={2}>
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

      <Divider>uncontrolled swipe/onChange</Divider>
      <StyledTabs
        swipe
        underline="40px"
        defaultValue={2}
        style={{ marginTop: 30 }}
        onChange={(v) => Toast.show({ content: v })}
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
      </StyledTabs>
    </StyledApp>
  );
}
