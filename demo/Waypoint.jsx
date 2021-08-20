import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Affix } from 'antd';
import { Divider, Waypoint, Button } from '../src';

export default function App() {
  const [index, setIndex] = useState(1);
  const ar = Array.from(new Array(10), (e, i) => i + 1);

  return (
    <div>
      <Affix offsetTop={20}>
        <Button type="primary" block>
          index + {index}
        </Button>
      </Affix>
      {ar.map((item, idx) => (
        <div key={item}>
          <Divider textPosition="center">段落 {item}</Divider>
          <Waypoint
            onEnter={() => {
              setIndex(item);
            }}
          />
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
