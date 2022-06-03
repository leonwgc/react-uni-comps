
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NumberKeyboardBase from '../src/NumberKeyboardBase';

const title = 'NumberKeyboardBase';

describe('NumberKeyboardBase test groups', () => {
    test('render', () => {
      render(<NumberKeyboardBase title="NumberKeyboardBase"/>);
      const el = screen.getByTitle('NumberKeyboardBase');
      expect(el).toBeDefined();
    });
});
