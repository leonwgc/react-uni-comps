import React, { useState } from 'react';
import { Space, Popover, Button } from 'react-uni-comps';

const places = [
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

  return (
    <div style={{ margin: '100px 0 0 300px' }}>
      <Space wrap direction="vertical">
        {Items.map((step, idx) => {
          const { placement, title, content } = step;
          return (
            <Popover
              placement={placement}
              visible={visible[placement]}
              closable
              key={idx}
              onClose={() => setVisible({ [placement]: false })}
              content={<div style={{ padding: 32, width: 160 }}>{content}</div>}
            >
              <Button onClick={() => handleClick(placement)}>{title}</Button>
            </Popover>
          );
        })}
      </Space>
    </div>
  );
}
