
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PasswordInput from '../src/PasswordInput';

const title = 'PasswordInput';

describe('PasswordInput test groups', () => {
    test('render', () => {
      render(<PasswordInput title="PasswordInput"/>);
      const el = screen.getByTitle('PasswordInput');
      expect(el).toBeDefined();
    });
});
