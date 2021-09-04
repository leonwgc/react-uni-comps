import React, { useState } from 'react';
import { SoundOutlined } from '@ant-design/icons';
import { AlertDialog, Space } from '../src';

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="app">
      <AlertDialog
        closable
        buttonSpace={16}
        buttonWidth={80}
        confirmText="确定"
        cancelText="cancel"
        title={
          <span>
            <SoundOutlined /> 提示
          </span>
        }
        visible={visible}
        onClose={() => setVisible(false)}
        content="In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
        After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims touniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development."
      />
    </div>
  );
}
