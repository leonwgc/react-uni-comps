
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SafeArea from '../src/SafeArea';

const title = 'SafeArea';

describe('SafeArea test groups', () => {
    test('render', () => {
      render(<SafeArea title="SafeArea"/>);
      const el = screen.getByTitle('SafeArea');
      expect(el).toBeDefined();
    });
});
