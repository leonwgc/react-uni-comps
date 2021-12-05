import React from 'react';
import { SwipeAction, HairLineBox, Toast, Divider } from 'react-uni-comps';

export default function App() {
  return (
    <div>
      <Divider style={{ margin: 16 }}>左滑右滑</Divider>

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

      <Divider style={{ margin: 16 }}>只有右边</Divider>

      <HairLineBox>
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
      </HairLineBox>
    </div>
  );
}
