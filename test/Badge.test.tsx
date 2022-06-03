
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Badge from '../src/Badge';

const title = 'Badge';

describe('Badge test groups', () => {
    test('render', () => {
      render(<Badge title="Badge"/>);
      const el = screen.getByTitle('Badge');
      expect(el).toBeDefined();
    });
});
