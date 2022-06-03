
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import DatePicker from '../src/DatePicker';

const title = 'DatePicker';

describe('DatePicker test groups', () => {
    test('render', () => {
      render(<DatePicker title="DatePicker"/>);
      const el = screen.getByTitle('DatePicker');
      expect(el).toBeDefined();
    });
});
