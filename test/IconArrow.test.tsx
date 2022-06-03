
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import IconArrow from '../src/IconArrow';

const title = 'IconArrow';

describe('IconArrow test groups', () => {
    test('render', () => {
      render(<IconArrow title="IconArrow"/>);
      const el = screen.getByTitle('IconArrow');
      expect(el).toBeDefined();
    });
});
