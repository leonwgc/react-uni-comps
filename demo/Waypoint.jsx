import React, { useEffect, useRef, useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Divider, Waypoint } from 'react-uni-comps';

export default function App() {
  const [index, setIndex] = useState(0);
  const ar = Array.from(new Array(10), (e, i) => i + 1);

  return (
    <PageWrap>
      <DemoBlock title="所经之处标题变红">
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
      </DemoBlock>
    </PageWrap>
  );
}
