
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import IndexList from '../src/IndexList';

const title = 'IndexList';

describe('IndexList test groups', () => {
    test('render', () => {
      render(<IndexList title="IndexList"/>);
      const el = screen.getByTitle('IndexList');
      expect(el).toBeDefined();
    });
});
