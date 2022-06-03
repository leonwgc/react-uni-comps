
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import RadioGroup from '../src/RadioGroup';

const title = 'RadioGroup';

describe('RadioGroup test groups', () => {
    test('render', () => {
      render(<RadioGroup title="RadioGroup"/>);
      const el = screen.getByTitle('RadioGroup');
      expect(el).toBeDefined();
    });
});
