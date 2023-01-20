import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { AlertDialog, Button, Toast, Switch, Cell } from 'react-uni-comps';

export default function App() {
  const [isMobile, setIsMoible] = React.useState(true);
  return (
    <PageWrap>
      <DemoBlock padding={0}>
        <Cell
          title="移动端iOS风格"
          content={<Switch checked={isMobile} onChange={setIsMoible}></Switch>}
        ></Cell>

        <div style={{ padding: '40px 12px' }}>
          <Button
            type="primary"
            onClick={() =>
              AlertDialog.show({
                title: '提示',
                mobile: isMobile,
                content: '确定要删除吗',
                closable: !isMobile,
                confirmText: '确定',
                wait: true,
                onConfirm: (close) => {
                  setTimeout(() => {
                    Toast.show('删除成功');
                    close();
                  }, 1000);
                },
                cancelText: '取消',
                onCancel: (close) => {
                  close();
                },
              })
            }
          >
            显示确认弹框
          </Button>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
