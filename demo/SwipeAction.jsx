import React from 'react';
import { SwipeAction, Button, Space } from '../src';

export default function App() {
  return (
    <div>
      <SwipeAction
        left={
          <Button style={{ height: '100%', borderRadius: 0 }} type="primary">
            left
          </Button>
        }
        right={
          <>
            <Button style={{ height: '100%', borderRadius: 0 }} danger>
              right1
            </Button>
            <Button style={{ height: '100%', borderRadius: 0 }} type="primary">
              right2
            </Button>
          </>
        }
      >
        左滑右滑都可以哦
      </SwipeAction>
    </div>
  );
}
