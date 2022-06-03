import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Loading from '../src/Loading';

const title = 'Loading';

describe('Loading test groups', () => {
  test('render (only has static fn)', () => {
    // render(<Loading title="Loading" />);
    // const el = screen.queryByTitle('Loading');
    // expect(el).toBeDefined();
  });
});
