import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Collapse from '../src/Collapse';

const title = 'Collapse';

describe('Collapse test groups', () => {
  test('render', () => {
    render(
      <Collapse title={title}>
        <Collapse.Item title="Header of Item1">
          This is content of item1. This is content of item1. This is content of item1.
        </Collapse.Item>
        <Collapse.Item title="Header of Item2" disabled>
          This is content of item2. This is content of item2. This is content of item2.
        </Collapse.Item>
        <Collapse.Item title="Header of Item3">
          This is content of item3. This is content of item3. This is content of item3.
        </Collapse.Item>
      </Collapse>
    );
    const el = screen.getByTitle('Collapse');
    expect(el).toBeDefined();
  });
});
