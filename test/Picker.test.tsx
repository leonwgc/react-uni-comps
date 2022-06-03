
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Picker from '../src/Picker';

const title = 'Picker';

describe('Picker test groups', () => {
    test('render', () => {
      render(<Picker title="Picker"/>);
      const el = screen.getByTitle('Picker');
      expect(el).toBeDefined();
    });
});
