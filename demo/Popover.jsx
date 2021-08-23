import React, { useRef, useState } from 'react';
import { Tooltip, Space, Popover, Button } from '../src';

const places = [
  {
    title: 'placement: top',
    content: 'modal放到内容的上面',
    placement: 'top',
    selector: '#top',
  },
  {
    title: 'placement: left',
    content: 'modal放到内容的左边',
    placement: 'left',
    selector: '#left',
  },
  {
    title: 'placement: bottom',
    content: 'modal放到内容的下面',
    placement: 'bottom',
    selector: '#bottom',
  },
  {
    title: 'placement: right',
    content: 'modal放到内容的右边',
    placement: 'right',
    selector: '#right',
  },
  {
    title: 'placement: top-right',
    content: 'modal的bottom-border紧贴内容的top-border，right-borders水平对齐',
    placement: 'top-right',
    selector: '#top-right',
  },
  {
    title: 'placement: top-left',
    content: 'modal的bottom-border紧贴内容的top-border，left-borders水平对齐',
    placement: 'top-left',
    selector: '#top-left',
  },
  {
    title: 'placement: bottom-right',
    content: 'modal的top-border紧贴内容的bottom-border，right-borders水平对齐',
    placement: 'bottom-right',
    selector: '#bottom-right',
  },
  {
    title: 'placement: bottom-left',
    content: 'modal的top-border紧贴内容的bottom-border，left-borders水平对齐',
    placement: 'bottom-left',
    selector: '#bottom-left',
  },
  {
    title: 'placement: right-top',
    content: 'modal的left-border紧贴内容的right-border，top-borders水平对齐',
    placement: 'right-top',
    selector: '#right-top',
  },
  {
    title: 'placement: left-top',
    content: 'modal的right-border紧贴内容的left-border，top-borders水平对齐',
    placement: 'left-top',
    selector: '#left-top',
  },
  {
    title: 'placement: right-bottom',
    content: 'modal的left-border紧贴内容的right-border，bottom-borders水平对齐',
    placement: 'right-bottom',
    selector: '#right-bottom',
  },
  {
    title: 'placement: left-bottom',
    content: 'modal的right-border紧贴内容的left-border，bottom-borders水平对齐',
    placement: 'left-bottom',
    selector: '#left-bottom',
  },
];

const Items = places.map(({ title, content, placement, selector }) => ({
  selector,
  title,
  content,
  placement,
}));

export default function App() {
  const [visible, setVisible] = useState({});

  const handleClick = (placement) => {
    const key = Object.keys(visible).find((key) => visible[key]);
    const copy = { ...visible };
    if (key) {
      copy[key] = false;
    }
    copy[placement] = true;
    setVisible(copy);
  };

  const renderButton = (placement) => (
    <Button
      id={placement}
      key={placement}
      onClick={() => {
        handleClick(placement);
      }}
    >
      {placement}
    </Button>
  );
  return (
    <div className="app">
      <Tooltip
        title={
          <div style={{ padding: 8, width: 160 }}>
            modal的bottom-border紧贴内容的top-border，right-borders水平对齐
          </div>
        }
        bgColor="#00bc8d"
      >
        <Button style={{ margin: '200px' }}>hello</Button>
      </Tooltip>
      <Space wrap direction="vertical">
        {Items.map((step) => {
          const { placement, title, content } = step;
          return (
            <Popover
              placement={placement}
              visible={visible[placement]}
              closable
              onClose={() => setVisible({ [placement]: false })}
              content={
                <div style={{ padding: 16, width: 260 }}>
                  <h5 style={{ fontSize: 16 }}>{title}</h5>
                  <p>{content}</p>
                </div>
              }
            >
              <Button onClick={() => handleClick(placement)}>{title}</Button>
            </Popover>
          );
        })}
      </Space>
    </div>
  );
}
