import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cell from '../src/Cell';

const title = 'Cell';

describe('Cell test groups', () => {
  test('render', () => {
    render(<Cell title="Cell" test-id="Cell" content="content" />);
    const el = screen.queryByTitle('Cell');
    expect(el).toBeDefined();
  });
});
