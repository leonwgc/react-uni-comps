import React, { useState } from 'react';
import { Text, Space, Tooltip } from '../src';

export default function App() {
  return (
    <div style={{ marginTop: 300, width: 400 }}>
      <div>
        <Tooltip
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </Text>
        </Tooltip>
      </div>

      <div style={{ marginTop: 30 }}>
        <Tooltip
          title={
            <div style={{ width: 240, padding: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </div>
          }
        >
          <Text lines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </Text>
        </Tooltip>
      </div>
    </div>
  );
}
