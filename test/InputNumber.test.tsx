
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import InputNumber from '../src/InputNumber';

const title = 'InputNumber';

describe('InputNumber test groups', () => {
    test('render', () => {
      render(<InputNumber title="InputNumber"/>);
      const el = screen.getByTitle('InputNumber');
      expect(el).toBeDefined();
    });
});
