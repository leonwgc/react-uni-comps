import React, { useEffect, useRef } from 'react';
import styled from '../src/styled';
import { Divider, Waypoint } from '../src';

export default function App() {
  const ref = useRef();

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider color="#00bc8d" style={{ margin: '16px 0' }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider dashed style={{ margin: '10px 0' }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider dashed>Hello</Divider>
      <Divider color="red" style={{ margin: '20px 0' }}>
        Hello
      </Divider>
      <Divider textPosition="left">Hello left</Divider>
      <Divider textPosition="right">Hello right</Divider>
      <Divider>
        <span style={{ fontWeight: 500, fontSize: 16 }}>Hello waypoint</span>
      </Divider>
      <Divider dashed style={{ margin: '10px 0' }}>
        <span style={{ fontWeight: 500, fontSize: 16 }}>Hello</span>
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <div>
        <>
          Text
          <Divider type="vertical" />
          <a href="#">Link</a>
          <Divider type="vertical" />
          <a href="#">Link</a>
          <Divider type="vertical" color="red" style={{ margin: '0 20px' }} />
          <a href="#">Link</a>
        </>
      </div>
    </div>
  );
}
