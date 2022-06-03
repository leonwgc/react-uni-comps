
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import WaterMark from '../src/WaterMark';

const title = 'WaterMark';

describe('WaterMark test groups', () => {
    test('render', () => {
      render(<WaterMark title="WaterMark"/>);
      const el = screen.getByTitle('WaterMark');
      expect(el).toBeDefined();
    });
});
