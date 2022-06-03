
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from '../src/Form';

const title = 'Form';

describe('Form test groups', () => {
    test('render', () => {
      render(<Form title="Form"/>);
      const el = screen.getByTitle('Form');
      expect(el).toBeDefined();
    });
});
