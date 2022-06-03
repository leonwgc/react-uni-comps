
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Stepper from '../src/Stepper';

const title = 'Stepper';

describe('Stepper test groups', () => {
    test('render', () => {
      render(<Stepper title="Stepper"/>);
      const el = screen.getByTitle('Stepper');
      expect(el).toBeDefined();
    });
});
