import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { SwipeAction, Toast } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="左滑右滑" padding={0}>
        <SwipeAction
          onOpen={() => {
            console.log('open');
          }}
          onClose={() => {
            console.log('close');
          }}
          left={[
            {
              text: '收藏',
              onClick: () => {
                Toast.show('收藏');
              },
            },
          ]}
          right={[
            {
              text: '取消关注',
              color: '#ccc',
              onClick: () => {
                Toast.show('取消关注');
              },
            },
            {
              text: '免打扰',
              color: 'orange',
              onClick: () => {
                Toast.show('免打扰');
              },
            },
            {
              text: '删除',
              color: 'red',
              onClick: () => {
                Toast.show('删除');
              },
            },
          ]}
        >
          左滑右滑都可以哦
        </SwipeAction>
      </DemoBlock>

      <DemoBlock title="只有右边" padding={0}>
        <SwipeAction
          right={[
            {
              text: '取消关注',
              color: '#ccc',
              onClick: () => {
                Toast.show('取消关注');
              },
            },
            {
              text: '免打扰',
              color: 'orange',
              onClick: () => {
                Toast.show('免打扰');
              },
            },
            {
              text: '删除',
              color: 'red',
              onClick: () => {
                Toast.show('删除');
              },
            },
          ]}
        >
          只有右边
        </SwipeAction>
      </DemoBlock>
    </PageWrap>
  );
}
