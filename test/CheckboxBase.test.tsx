
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CheckboxBase from '../src/CheckboxBase';

const title = 'CheckboxBase';

describe('CheckboxBase test groups', () => {
    test('render', () => {
      render(<CheckboxBase title="CheckboxBase"/>);
      const el = screen.getByTitle('CheckboxBase');
      expect(el).toBeDefined();
    });
});
