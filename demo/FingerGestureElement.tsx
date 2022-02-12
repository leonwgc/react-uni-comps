import React, { useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { FingerGestureElement, Toast, Affix, useMount } from 'react-uni-comps';

type Position = {
  x: number;
  y: number;
  angle: number;
  scale: number;
};

const update = (el, transform, statusEl) => {
  el.style.transform = `translate(${transform.x}px,${transform.y}px) rotate(${transform.angle}deg) scale(${transform.scale})`;

  updateStatus(statusEl, transform);
};

const updateStatus = (el, transform) => {
  el.innerText = `translate(${transform.x}px,${transform.y}px) rotate(${transform.angle}deg) scale(${transform.scale})`;
};

export default function App() {
  const ref = useRef<Position>({ x: 0, y: 0, angle: 0, scale: 1 });
  const elRef = useRef<HTMLDivElement>();

  const statusElRef = useRef<HTMLDivElement>();

  useMount(() => update(elRef.current, ref.current, statusElRef.current));

  return (
    <PageWrap>
      <Affix>
        <DemoBlock title="当前值：" style={{ background: '#fff' }}>
          <div ref={statusElRef}></div>
        </DemoBlock>
      </Affix>

      <DemoBlock title="基础分割线">
        <FingerGestureElement
          onDoubleTap={() => {
            Toast.show('doubleTap');
          }}
          onLongTap={() => {
            Toast.show('longTap');
          }}
          onTouchStart={() => {
            console.log('start');
          }}
          onTouchEnd={(e) => {
            console.log('end');
          }}
          onSwipe={(e) => {
            console.log('swipe', e.direction);
          }}
          onPinch={(e) => {
            console.log('scale:', e.scale);
            ref.current.scale = e.scale;
            update(elRef.current, ref.current, statusElRef.current);
            // elRef.current.style.transform = `translate(${ref.current.x}px,${ref.current.y}px) rotate(${ref.current.angle}) scale(${e.scale})`;
          }}
          onRotate={(e) => {
            console.log('angle:', e.angle);
            ref.current.angle += e.angle;
            update(elRef.current, ref.current, statusElRef.current);
            // elRef.current.style.transform = `translate(${ref.current.x}px,${ref.current.y}px) rotate(${ref.current.angle})`;
          }}
          onPressMove={(e) => {
            console.log(e.deltaX, e.deltaY);
            ref.current.x = ref.current.x + e.deltaX;
            ref.current.y = ref.current.y + e.deltaY;

            update(elRef.current, ref.current, statusElRef.current);

            // elRef.current.style.transform = `translate(${ref.current.x}px,${ref.current.y}px) rotate(${ref.current.angle})`;
          }}
          ref={elRef}
        >
          <div
            style={{
              width: 100,
              height: 100,
              border: '1px solid red',
              position: 'relative',
            }}
          />
        </FingerGestureElement>
      </DemoBlock>
    </PageWrap>
  );
}
