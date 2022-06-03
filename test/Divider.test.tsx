
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Divider from '../src/Divider';

const title = 'Divider';

describe('Divider test groups', () => {
    test('render', () => {
      render(<Divider title="Divider"/>);
      const el = screen.getByTitle('Divider');
      expect(el).toBeDefined();
    });
});
