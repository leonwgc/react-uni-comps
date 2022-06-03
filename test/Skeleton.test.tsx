
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Skeleton from '../src/Skeleton';

const title = 'Skeleton';

describe('Skeleton test groups', () => {
    test('render', () => {
      render(<Skeleton title="Skeleton"/>);
      const el = screen.getByTitle('Skeleton');
      expect(el).toBeDefined();
    });
});
