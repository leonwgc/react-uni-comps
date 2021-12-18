import React from 'react';
import { AlertDialog, Button, Toast, Divider, Icon, Space } from 'react-uni-comps';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Divider textPosition="left">只包含确定按钮, 代替window.alert</Divider>
      <Button
        onClick={() =>
          AlertDialog.show('提示', '确定要这么做吗', '决定了', () => Toast.show('你点击了确定'))
        }
      >
        模拟window.alert
      </Button>

      <Divider textPosition="left">包含确认和取消按钮,代替window.confirm</Divider>
      <Button
        onClick={() =>
          AlertDialog.show(
            '提示',
            '确定要这么做吗',
            '决定了',
            () => Toast.show('你点击了确定'),
            '取消',
            () => Toast.show('你点击了取消')
          )
        }
      >
        模拟window.confirm
      </Button>

      <Divider textPosition="left">自定义样式</Divider>
      <Button
        onClick={() =>
          AlertDialog.show(
            '提示',
            <Space style={{ textAlign: 'center', color: 'red', fontSize: 18 }}>
              <Icon type="uc-icon-jinggao" />
              确定要这么做吗
            </Space>,
            '决定了',
            () => Toast.show('你点击了确定')
          )
        }
      >
        模拟window.alert
      </Button>
    </div>
  );
}
