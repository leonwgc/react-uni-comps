
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Switch from '../src/Switch';

const title = 'Switch';

describe('Switch test groups', () => {
    test('render', () => {
      render(<Switch title="Switch"/>);
      const el = screen.getByTitle('Switch');
      expect(el).toBeDefined();
    });
});
