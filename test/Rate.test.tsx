
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Rate from '../src/Rate';

const title = 'Rate';

describe('Rate test groups', () => {
    test('render', () => {
      render(<Rate title="Rate"/>);
      const el = screen.getByTitle('Rate');
      expect(el).toBeDefined();
    });
});
