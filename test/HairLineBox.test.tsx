
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import HairLineBox from '../src/HairLineBox';

const title = 'HairLineBox';

describe('HairLineBox test groups', () => {
    test('render', () => {
      render(<HairLineBox title="HairLineBox"/>);
      const el = screen.getByTitle('HairLineBox');
      expect(el).toBeDefined();
    });
});
