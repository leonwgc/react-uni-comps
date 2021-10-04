import React, { useRef, useState, useEffect } from 'react';
import { Space, Popover, Button } from '../src';

const places = [
  {
    title: 'placement: top,closeOnClickOutside',
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
  const [v, setV] = useState(false);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
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
    <div style={{ paddingLeft: '30vw' }}>
      <Popover
        placement="bottom-right"
        mask
        closable
        onClose={() => setV(false)}
        closeOnClickMask={false}
        visible={v}
        content={<div style={{ height: 200, width: 200, background: '#fff' }}>menus</div>}
      >
        <Button style={{ position: 'fixed', top: 200, left: 100 }} onClick={() => setV(true)}>
          back drop fixed
        </Button>
      </Popover>

      <Popover
        placement="bottom"
        mask
        maskStyle={{ opacity: 0.1 }}
        closable
        onClose={() => setV1(false)}
        visible={v1}
        content={<div style={{ height: 100, width: 300, background: '#fff' }}>menus</div>}
      >
        <Button type="primary" style={{ width: 50, margin: 30 }} onClick={() => setV1(true)}>
          test
        </Button>
      </Popover>

      <div style={{ width: '100vw', height: '100vh', border: '1px solid #eee' }}></div>

      <Space wrap direction="vertical">
        {Items.map((step, idx) => {
          const { placement, title, content } = step;
          return (
            <Popover
              placement={placement}
              visible={visible[placement]}
              closeOnClickOutside={idx === 0}
              closable
              key={idx}
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
