import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { AlertDialog, Button, Toast } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock>
        <Button
          type="primary"
          onClick={() =>
            AlertDialog.show({
              title: '提示',
              content: '确定要删除吗',
              closable: true,
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
      </DemoBlock>
    </PageWrap>
  );
}
