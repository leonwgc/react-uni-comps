import React from 'react';
import PageWrap from './common/PageWrap';
import MobileTip from './common/MobileTip';
import DemoBlock from './common/Block';
import { AlertDialog, Button, Toast, Divider, Icon, Space, ThemeProvider } from 'react-uni-comps';

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
              onConfirm: () => Toast.show('你点击了确定'),
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
              onConfirm: () => Toast.show('你点击了确定'),
              cancelText: '取消',
              onCancel: () => Toast.show('你点击了取消'),
            })
          }
        >
          模拟window.confirm
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
              onConfirm: () => Toast.show('你点击了确定'),
            })
          }
        >
          自定义样式
        </Button>
      </DemoBlock>
    </PageWrap>
  );
}
