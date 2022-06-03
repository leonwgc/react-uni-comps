
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Slide from '../src/Slide';

const title = 'Slide';

describe('Slide test groups', () => {
    test('render', () => {
      render(<Slide title="Slide"/>);
      const el = screen.getByTitle('Slide');
      expect(el).toBeDefined();
    });
});
