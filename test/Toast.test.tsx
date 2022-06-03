import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Toast from '../src/Toast';

const title = 'Toast';

describe('Toast test groups', () => {
  test('render', () => {
    // render(<Toast title="Toast"/>);
    // const el = screen.getByTitle('Toast');
    // expect(el).toBeDefined();
  });
});
