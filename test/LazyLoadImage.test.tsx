
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LazyLoadImage from '../src/LazyLoadImage';

const title = 'LazyLoadImage';

describe('LazyLoadImage test groups', () => {
    test('render', () => {
      render(<LazyLoadImage title="LazyLoadImage"/>);
      const el = screen.getByTitle('LazyLoadImage');
      expect(el).toBeDefined();
    });
});
