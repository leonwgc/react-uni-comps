
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import RollingNumber from '../src/RollingNumber';

const title = 'RollingNumber';

describe('RollingNumber test groups', () => {
    test('render', () => {
      render(<RollingNumber title="RollingNumber"/>);
      const el = screen.getByTitle('RollingNumber');
      expect(el).toBeDefined();
    });
});
