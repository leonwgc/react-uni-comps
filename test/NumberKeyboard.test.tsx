
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NumberKeyboard from '../src/NumberKeyboard';

const title = 'NumberKeyboard';

describe('NumberKeyboard test groups', () => {
    test('render', () => {
      render(<NumberKeyboard title="NumberKeyboard"/>);
      const el = screen.getByTitle('NumberKeyboard');
      expect(el).toBeDefined();
    });
});
