
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import BackTop from '../src/BackTop';

const title = 'BackTop';

describe('BackTop test groups', () => {
    test('render', () => {
      render(<BackTop title="BackTop"/>);
      const el = screen.getByTitle('BackTop');
      expect(el).toBeDefined();
    });
});
