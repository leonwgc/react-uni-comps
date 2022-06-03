
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Pullup from '../src/Pullup';

const title = 'Pullup';

describe('Pullup test groups', () => {
    test('render', () => {
      render(<Pullup title="Pullup"/>);
      const el = screen.getByTitle('Pullup');
      expect(el).toBeDefined();
    });
});
