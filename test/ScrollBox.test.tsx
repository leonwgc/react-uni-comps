import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ScrollBox from '../src/ScrollBox';

const items = Array.from(new Array(10), (v, i) => i);

const title = 'ScrollBox';

describe('ScrollBox test groups', () => {
  test('render', () => {
    render(
      <ScrollBox title="ScrollBox" style={{ width: 100 }}>
        {items.map((i) => (
          <div style={{ width: 30 }} key={i}>
            {i}
          </div>
        ))}
      </ScrollBox>
    );
    const el = screen.queryByTitle('ScrollBox');
    expect(el).not.toBeNull();
  });
});
