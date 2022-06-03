import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ThemeProvider from '../src/ThemeProvider';

const title = 'ThemeProvider';

describe('ThemeProvider test groups', () => {
  test('render', () => {
    // render(<ThemeProvider title="ThemeProvider" />);
    // const el = screen.getByTitle('ThemeProvider');
    // expect(el).toBeDefined();
  });
});
