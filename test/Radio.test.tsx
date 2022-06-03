
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Radio from '../src/Radio';

const title = 'Radio';

describe('Radio test groups', () => {
    test('render', () => {
      render(<Radio title="Radio"/>);
      const el = screen.getByTitle('Radio');
      expect(el).toBeDefined();
    });
});
