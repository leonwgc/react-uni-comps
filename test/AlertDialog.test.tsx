
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AlertDialog from '../src/AlertDialog';

const title = 'AlertDialog';

describe('AlertDialog test groups', () => {
    test('render', () => {
      render(<AlertDialog title="AlertDialog"/>);
      const el = screen.getByTitle('AlertDialog');
      expect(el).toBeDefined();
    });
});
