import React, { useRef, useState } from 'react';
import { transform } from 'typescript';
import { FingerGestureElement, Toast } from '../src';
import bird from './images/bird.png';

export default function App() {
  const ref = useRef();
  const [data, setData] = useState();

  const xyRef = useRef({ x: 0, y: 0 });

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
        // pinch={(e) => {
        //   const t = e.target;
        //   transform(e.target);
        //   setData(e);
        //   t.scaleX = t.scaleY = e.zoom;
        // }}
        // rotate={(e) => {
        //   setData(e);
        //   const t = e.target;
        //   transform(e.target);
        //   t.rotate += e.angle;
        // }}
        swipe={(e) => {
          e.preventDefault();
          Toast.show('swipe' + e.direction);
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
