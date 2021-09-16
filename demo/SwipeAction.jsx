import React from 'react';
import { SwipeAction, Button, HairLineBox, Toast } from '../src';

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
              text: 'left',
              color: 'red',
              onClick: () => {
                Toast.show('left', 1000);
              },
            },
          ]}
          right={[
            {
              text: 'right1',
              color: 'red',
              onClick: () => {
                Toast.show('left', 1000);
              },
            },
            { text: 'right1' },
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
          right={[
            {
              text: 'delete',

              onClick: () => {
                Toast.show('left', 1000);
              },
            },
          ]}
        >
          swipe
        </SwipeAction>
      </HairLineBox>
    </div>
  );
}
