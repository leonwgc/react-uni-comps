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
          left={
            <Button
              onClick={() => Toast.show('left', 200)}
              style={{ height: '100%', width: 100, borderRadius: 0, border: 0 }}
              type="primary"
            >
              left
            </Button>
          }
          right={
            <>
              <Button
                onClick={() => {
                  Toast.show('danger');
                }}
                style={{ height: '100%', borderRadius: 0, border: 0 }}
                danger
                type="primary"
              >
                right1
              </Button>
              <Button style={{ height: '100%', borderRadius: 0, border: 0 }} type="primary">
                right2
              </Button>
            </>
          }
        >
          左滑右滑都可以哦
        </SwipeAction>
      </HairLineBox>

      {/* <HairLineBox style={{ margin: '130px 0' }}>
        <SwipeAction
          onOpen={(p) => {
            console.log('open' + p);
          }}
          onClose={(p) => {
            console.log('close' + p);
          }}
          left={
            <Button
              onClick={() => Toast.show('left')}
              style={{ height: '100%', width: 100, borderRadius: 0, border: 0 }}
              type="primary"
            >
              left
            </Button>
          }
          right={
            <Button
              onClick={() => Toast.show('danger')}
              style={{ height: '100%', borderRadius: 0, border: 0 }}
              danger
              type="primary"
            >
              right1
            </Button>
          }
        >
          左滑右滑
        </SwipeAction>
      </HairLineBox> */}
    </div>
  );
}
