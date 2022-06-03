
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ErrorBoundary from '../src/ErrorBoundary';

const title = 'ErrorBoundary';

describe('ErrorBoundary test groups', () => {
    test('render', () => {
      render(<ErrorBoundary title="ErrorBoundary"/>);
      const el = screen.getByTitle('ErrorBoundary');
      expect(el).toBeDefined();
    });
});
