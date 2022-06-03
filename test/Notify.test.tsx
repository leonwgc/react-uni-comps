
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Notify from '../src/Notify';

const title = 'Notify';

describe('Notify test groups', () => {
    test('render', () => {
      render(<Notify title="Notify"/>);
      const el = screen.getByTitle('Notify');
      expect(el).toBeDefined();
    });
});
