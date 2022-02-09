import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { AlertDialog, Button, Toast, Icon, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="只包含确定按钮, 代替window.alert">
        <Button
          onClick={() =>
            AlertDialog.show({
              title: '提示',
              content: '确定要这么做吗',
              confirmText: '决定了',
              onConfirm: (close) => {
                close();
              },
            })
          }
        >
          模拟window.alert
        </Button>
      </DemoBlock>

      <DemoBlock title="包含确认和取消按钮,代替window.confirm">
        <Button
          onClick={() =>
            AlertDialog.show({
              title: '提示',
              content: '确定要这么做吗',
              onConfirm: (close) => {
                Toast.show('你点击了确定');
                close();
              },
              cancelText: '取消',
              onCancel: (close) => {
                Toast.show('你点击了取消');
                close();
              },
            })
          }
        >
          模拟window.confirm
        </Button>
      </DemoBlock>

      <DemoBlock title="可关闭">
        <Button
          onClick={() =>
            AlertDialog.show({
              closable: true,
              title: '提示',
              content: '确定要这么做吗',
              confirmText: '确定',
              onConfirm: (close) => {
                close();
              },
            })
          }
        >
          模拟window.alert
        </Button>
      </DemoBlock>

      <DemoBlock title="按钮防重复点击">
        <Button
          onClick={() =>
            AlertDialog.show({
              title: '提示',
              content: '确定要这么做吗',
              confirmText: '决定了,2s后关闭',
              wait: 2000,
              onConfirm: (close) => {
                Toast.show('你点击了确定');
                setTimeout(() => {
                  close();
                }, 2000);
              },
            })
          }
        >
          模拟window.alert
        </Button>
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <Button
          onClick={() =>
            AlertDialog.show({
              title: '提示',
              content: (
                <Space style={{ textAlign: 'center', color: 'red', fontSize: 18 }}>
                  <Icon type="uc-icon-jinggao" />
                  确定要这么做吗
                </Space>
              ),
              confirmText: '决定了',
              onConfirm: (close) => {
                Toast.show('你点击了确定');
                setTimeout(() => {
                  close();
                }, 1000);
              },
              wrapStyle: { width: 300, height: 180, background: '#00bc8d' },
            })
          }
        >
          自定义样式
        </Button>
      </DemoBlock>
    </PageWrap>
  );
}
