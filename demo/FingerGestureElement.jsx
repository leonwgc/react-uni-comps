import React, { useRef, useState } from 'react';
import { FingerGestureElement, Toast } from '../src';
import bird from './images/cat.gif';

export default function App() {
  const ref = useRef();
  const [data, setData] = useState();

  const thisRef = useRef({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  });

  return (
    <div className="app">
      <FingerGestureElement
        ref={ref}
        onDoubleTap={() => {
          Toast.show('doubleTap', 1000);
        }}
        onTouchEnd={() => {
          console.log('end');
        }}
        onTap={(e) => {
          console.log(e);
        }}
        onPinch={(e) => {
          e.preventDefault();
          thisRef.current.scale = e.scale;
          e.target.style.transform = `scale(${thisRef.current.scale}) rotate(${thisRef.current.rotate}deg) translate(${thisRef.current.x}px,${thisRef.current.y}px)`;
        }}
        onRotate={(e) => {
          e.preventDefault();

          thisRef.current.rotate += e.angle;
          e.target.style.transform = `scale(${thisRef.current.scale}) rotate(${thisRef.current.rotate}deg) translate(${thisRef.current.x}px,${thisRef.current.y}px)`;
        }}
        onSwipe={(e) => {
          e.preventDefault();
          console.log('swipe', e.direction);
        }}
        onPressMove={(e) => {
          e.preventDefault();
          thisRef.current.x += e.deltaX;
          thisRef.current.y += e.deltaY;
          e.target.style.transform = `scale(${thisRef.current.scale}) rotate(${thisRef.current.rotate}deg) translate(${thisRef.current.x}px,${thisRef.current.y}px)`;
        }}
      >
        <img
          src={bird}
          width={200}
          height={200}
          style={{ objectFit: 'scale-down', transformOrigin: 'center', border: '1px solid #eee' }}
        />
      </FingerGestureElement>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
