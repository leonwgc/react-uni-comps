
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Empty from '../src/Empty';

const title = 'Empty';

describe('Empty test groups', () => {
    test('render', () => {
      render(<Empty title="Empty"/>);
      const el = screen.getByTitle('Empty');
      expect(el).toBeDefined();
    });
});
