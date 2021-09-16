import React from 'react';
import { SwipeAction, HairLineBox, Toast } from '../src';

export default function App() {
  return (
    <div>
      <HairLineBox style={{ margin: '30px 0' }}>
        <SwipeAction
          onOpen={(p) => {
            console.log('open' + p);
          }}
          onClose={(p) => {
            console.log('close' + p);
          }}
          left={[
            {
              text: '收藏',
              onClick: () => {
                Toast.show('收藏', 1000);
              },
            },
          ]}
          right={[
            {
              text: '取消关注',
              color: '#ccc',
              onClick: () => {
                Toast.show('取消关注', 1000);
              },
            },
            {
              text: '免打扰',
              color: 'orange',
              onClick: () => {
                Toast.show('免打扰', 1000);
              },
            },
            {
              text: '删除',
              color: 'red',
              onClick: () => {
                Toast.show('删除', 1000);
              },
            },
          ]}
        >
          左滑右滑都可以哦
        </SwipeAction>
      </HairLineBox>

      <HairLineBox style={{ margin: '30px 0' }}>
        <SwipeAction
          onOpen={(p) => {
            console.log('open' + p);
          }}
          onClose={(p) => {
            console.log('close' + p);
          }}
          autoClose={false}
          closeOnClickOutside={false}
          right={[
            {
              text: '取消关注',
              color: '#ccc',
              onClick: () => {
                Toast.show('取消关注', 1000);
              },
            },
            {
              text: '免打扰',
              color: 'orange',
              onClick: () => {
                Toast.show('免打扰', 1000);
              },
            },
            {
              text: '删除',
              color: 'red',
              onClick: () => {
                Toast.show('删除', 1000);
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
