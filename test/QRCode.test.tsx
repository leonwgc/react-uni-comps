
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import QRCode from '../src/QRCode';

const title = 'QRCode';

describe('QRCode test groups', () => {
    test('render', () => {
      render(<QRCode title="QRCode"/>);
      const el = screen.getByTitle('QRCode');
      expect(el).toBeDefined();
    });
});
