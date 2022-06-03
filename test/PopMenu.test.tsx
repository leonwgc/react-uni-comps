
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PopMenu from '../src/PopMenu';

const title = 'PopMenu';

describe('PopMenu test groups', () => {
    test('render', () => {
      render(<PopMenu title="PopMenu"/>);
      const el = screen.getByTitle('PopMenu');
      expect(el).toBeDefined();
    });
});
