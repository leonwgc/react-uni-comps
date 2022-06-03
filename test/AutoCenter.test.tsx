
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AutoCenter from '../src/AutoCenter';

const title = 'AutoCenter';

describe('AutoCenter test groups', () => {
    test('render', () => {
      render(<AutoCenter title="AutoCenter"/>);
      const el = screen.getByTitle('AutoCenter');
      expect(el).toBeDefined();
    });
});
