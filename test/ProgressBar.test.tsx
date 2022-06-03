
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProgressBar from '../src/ProgressBar';

const title = 'ProgressBar';

describe('ProgressBar test groups', () => {
    test('render', () => {
      render(<ProgressBar title="ProgressBar"/>);
      const el = screen.getByTitle('ProgressBar');
      expect(el).toBeDefined();
    });
});
