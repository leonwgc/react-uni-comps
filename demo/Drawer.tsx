import React, { useCallback, useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Button, Drawer } from 'react-uni-comps';

export default function App() {
  const [visible, setVisible] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <PageWrap>
      <DemoBlock title="抽屉">
        <Button type="primary" onClick={() => setVisible(true)}>
          打开抽屉
        </Button>
      </DemoBlock>

      <Drawer onClose={onClose} visible={visible} style={{ width: '70%' }}>
        <div style={{ padding: 20 }}>抽屉，可以设置从上，下，左，右四个方向滑出</div>
      </Drawer>
    </PageWrap>
  );
}
