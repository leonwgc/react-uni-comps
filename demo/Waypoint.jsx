import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Divider, Waypoint, Button } from '../src';

export default function App() {
  const [index, setIndex] = useState(0);
  const ar = Array.from(new Array(10), (e, i) => i + 1);

  return (
    <div>
      {ar.map((item, idx) => (
        <div key={idx}>
          <Divider
            textPosition="center"
            style={{ margin: '1px 0', color: idx === index ? 'red' : 'unset' }}
          >
            <Waypoint
              onVisible={() => {
                console.log(idx);
                setIndex(idx);
              }}
            />
            段落 {idx}
          </Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
        </div>
      ))}
    </div>
  );
}
