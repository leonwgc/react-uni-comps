
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Drawer from '../src/Drawer';

const title = 'Drawer';

describe('Drawer test groups', () => {
    test('render', () => {
      render(<Drawer title="Drawer"/>);
      const el = screen.getByTitle('Drawer');
      expect(el).toBeDefined();
    });
});
