
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProgressCircle from '../src/ProgressCircle';

const title = 'ProgressCircle';

describe('ProgressCircle test groups', () => {
    test('render', () => {
      render(<ProgressCircle title="ProgressCircle"/>);
      const el = screen.getByTitle('ProgressCircle');
      expect(el).toBeDefined();
    });
});
