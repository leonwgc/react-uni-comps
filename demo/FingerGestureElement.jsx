import React, { useRef, useState } from 'react';
import { transform } from 'typescript';
import { FingerGestureElement, Toast } from '../src';
import bird from './images/bird.png';

export default function App() {
  const ref = useRef();
  const [data, setData] = useState();

  const xyRef = useRef({ x: 0, y: 0 });
  const rotateRef = useRef(0);

  useRef(() => {
    transform(ref.current);
  }, []);

  return (
    <div className="app">
      <FingerGestureElement
        ref={ref}
        doubleTap={() => {
          Toast.show('doubleTap', 1000);
        }}
        tap={(e) => {
          console.log(e);
        }}
        pinch={(e) => {
          e.preventDefault();
          e.target.style.transform = `scale(${e.zoom})`;
        }}
        rotate={(e) => {
          e.preventDefault();
          rotateRef.current += e.angle;
          e.target.style.transform = `rotate(${rotateRef.current}deg)`;
        }}
        swipe={(e) => {
          e.preventDefault();
          console.log('swipe', e.direction);
        }}
        pressMove={(e) => {
          e.preventDefault();
          xyRef.current.x += e.deltaX;
          xyRef.current.y += e.deltaY;
          e.target.style.transform = `translate(${xyRef.current.x}px,${xyRef.current.y}px)`;
        }}
      >
        <img src={bird} width={200} height={200} />
      </FingerGestureElement>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
