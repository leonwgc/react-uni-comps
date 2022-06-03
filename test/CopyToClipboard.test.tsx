
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CopyToClipboard from '../src/CopyToClipboard';

const title = 'CopyToClipboard';

describe('CopyToClipboard test groups', () => {
    test('render', () => {
      render(<CopyToClipboard title="CopyToClipboard"/>);
      const el = screen.getByTitle('CopyToClipboard');
      expect(el).toBeDefined();
    });
});
