
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Collapse from '../src/Collapse';

const title = 'Collapse';

describe('Collapse test groups', () => {
    test('render', () => {
      render(<Collapse title="Collapse"/>);
      const el = screen.getByTitle('Collapse');
      expect(el).toBeDefined();
    });
});
