
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Ripple from '../src/Ripple';

const title = 'Ripple';

describe('Ripple test groups', () => {
    test('render', () => {
      render(<Ripple title="Ripple"/>);
      const el = screen.getByTitle('Ripple');
      expect(el).toBeDefined();
    });
});
