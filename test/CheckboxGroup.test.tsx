
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CheckboxGroup from '../src/CheckboxGroup';

const title = 'CheckboxGroup';

describe('CheckboxGroup test groups', () => {
    test('render', () => {
      render(<CheckboxGroup title="CheckboxGroup"/>);
      const el = screen.getByTitle('CheckboxGroup');
      expect(el).toBeDefined();
    });
});
