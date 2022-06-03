
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LazyLoadElement from '../src/LazyLoadElement';

const title = 'LazyLoadElement';

describe('LazyLoadElement test groups', () => {
    test('render', () => {
      render(<LazyLoadElement title="LazyLoadElement"/>);
      const el = screen.getByTitle('LazyLoadElement');
      expect(el).toBeDefined();
    });
});
