import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Calendar from '../src/Calendar';

const title = 'Calendar';

describe('Calendar test groups', () => {
  test('render', () => {
    render(<Calendar title="Calendar" />);
    const el = screen.queryByTitle('Calendar');

    expect(el).not.toBeNull();
    debug();
  });
});
