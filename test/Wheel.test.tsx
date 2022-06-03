
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Wheel from '../src/Wheel';

const title = 'Wheel';

describe('Wheel test groups', () => {
    test('render', () => {
      render(<Wheel title="Wheel"/>);
      const el = screen.getByTitle('Wheel');
      expect(el).toBeDefined();
    });
});
