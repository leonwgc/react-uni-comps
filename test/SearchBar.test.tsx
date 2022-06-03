
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SearchBar from '../src/SearchBar';

const title = 'SearchBar';

describe('SearchBar test groups', () => {
    test('render', () => {
      render(<SearchBar title="SearchBar"/>);
      const el = screen.getByTitle('SearchBar');
      expect(el).toBeDefined();
    });
});
