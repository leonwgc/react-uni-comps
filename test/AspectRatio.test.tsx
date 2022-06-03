
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AspectRatio from '../src/AspectRatio';

const title = 'AspectRatio';

describe('AspectRatio test groups', () => {
    test('render', () => {
      render(<AspectRatio title="AspectRatio"/>);
      const el = screen.getByTitle('AspectRatio');
      expect(el).toBeDefined();
    });
});
