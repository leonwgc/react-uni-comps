import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Mask from '../src/Mask';

const title = 'Mask';

describe('Mask test groups', () => {
  test('render', () => {
    render(<Mask title="Mask" visible />);
    const el = screen.getByTitle('Mask');
    expect(el).toBeDefined();
  });

  test('render invisible', () => {
    render(<Mask title="Mask" />);
    const el = screen.getByTitle('Mask');
    expect(el).not.toBeDefined();
  });
});
