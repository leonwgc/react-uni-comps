import React, { useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { FingerGestureElement, Toast, useMount, AutoCenter } from 'react-uni-comps';

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
      <DemoBlock title="当前值：" style={{ background: '#fff' }}>
        <AutoCenter>
          <div ref={statusElRef}></div>
        </AutoCenter>
      </DemoBlock>

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
          }}
          onRotate={(e) => {
            console.log('angle:', e.angle);
            ref.current.angle += e.angle;
            update(elRef.current, ref.current, statusElRef.current);
          }}
          onPressMove={(e) => {
            console.log(e.deltaX, e.deltaY);
            ref.current.x = ref.current.x + e.deltaX;
            ref.current.y = ref.current.y + e.deltaY;

            update(elRef.current, ref.current, statusElRef.current);
          }}
          ref={elRef}
        >
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              position: 'relative',
            }}
          />
        </FingerGestureElement>
      </DemoBlock>
    </PageWrap>
  );
}