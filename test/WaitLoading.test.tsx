
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import WaitLoading from '../src/WaitLoading';

const title = 'WaitLoading';

describe('WaitLoading test groups', () => {
    test('render', () => {
      render(<WaitLoading title="WaitLoading"/>);
      const el = screen.getByTitle('WaitLoading');
      expect(el).toBeDefined();
    });
});
