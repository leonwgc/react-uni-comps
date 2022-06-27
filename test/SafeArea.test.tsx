import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SafeArea from '../src/SafeArea';

const title = 'SafeArea';

describe('SafeArea test groups', () => {
  test('render', () => {
    render(<SafeArea title={title} />);
    const el = screen.getByTitle('SafeArea');
    expect(el).toBeDefined();
    expect(el).toHaveClass('uc-safe-area-bottom');
  });

  test('render top', () => {
    render(<SafeArea title={title} position="top" />);
    const el = screen.getByTitle('SafeArea');
    expect(el).toHaveClass('uc-safe-area-top');
  });
});
