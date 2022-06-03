
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Steps from '../src/Steps';

const title = 'Steps';

describe('Steps test groups', () => {
    test('render', () => {
      render(<Steps title="Steps"/>);
      const el = screen.getByTitle('Steps');
      expect(el).toBeDefined();
    });
});
