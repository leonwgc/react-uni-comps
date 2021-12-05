import React, { useState } from 'react';
import { Space, Popover, Button } from 'react-uni-comps';

const places = [
  {
    title: '位置: left',
    content: `i'm here`,
    placement: 'left',
  },
  {
    title: '位置: bottom',
    content: `i'm here`,
    placement: 'bottom',
  },
  {
    title: '位置: right',
    content: `i'm here`,
    placement: 'right',
  },
  {
    title: '位置: top-right',
    content: `i'm here`,
    placement: 'top-right',
  },
  {
    title: '位置: top-left',
    content: `i'm here`,
    placement: 'top-left',
  },
  {
    title: '位置: bottom-right',
    content: `i'm here`,
    placement: 'bottom-right',
  },
  {
    title: '位置: bottom-left',
    content: `i'm here`,
    placement: 'bottom-left',
  },
  {
    title: '位置: right-top',
    content: `i'm here`,
    placement: 'right-top',
  },
  {
    title: '位置: left-top',
    content: `i'm here`,
    placement: 'left-top',
  },
  {
    title: '位置: right-bottom',
    content: `i'm here`,
    placement: 'right-bottom',
  },
  {
    title: '位置: left-bottom',
    content: `i'm here`,
    placement: 'left-bottom',
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

  return (
    <Space wrap style={{ margin: '100px auto', width: '70vw', display: 'flex' }}>
      {Items.map((step, idx) => {
        const { placement, title, content } = step;
        return (
          <Popover
            placement={placement}
            visible={visible[placement]}
            key={idx}
            onClose={() => setVisible({ [placement]: false })}
            content={<div style={{ padding: 16 }}>{content}</div>}
          >
            <Button onClick={() => handleClick(placement)}>{title}</Button>
          </Popover>
        );
      })}
    </Space>
  );
}
