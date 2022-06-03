
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Checkbox from '../src/Checkbox';

const title = 'Checkbox';

describe('Checkbox test groups', () => {
    test('render', () => {
      render(<Checkbox title="Checkbox"/>);
      const el = screen.getByTitle('Checkbox');
      expect(el).toBeDefined();
    });
});
