
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Result from '../src/Result';

const title = 'Result';

describe('Result test groups', () => {
    test('render', () => {
      render(<Result title="Result"/>);
      const el = screen.getByTitle('Result');
      expect(el).toBeDefined();
    });
});
