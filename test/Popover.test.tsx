import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Popover from '../src/Popover';

const title = 'Popover';

describe('Popover test groups', () => {
  test('render', () => {
    // render(<Popover title="Popover"/>);
    // const el = screen.getByTitle('Popover');
    // expect(el).toBeDefined();
  });
});
