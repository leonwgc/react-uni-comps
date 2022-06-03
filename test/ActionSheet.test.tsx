
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ActionSheet from '../src/ActionSheet';

const title = 'ActionSheet';

describe('ActionSheet test groups', () => {
    test('render', () => {
      render(<ActionSheet title="ActionSheet"/>);
      const el = screen.getByTitle('ActionSheet');
      expect(el).toBeDefined();
    });
});
