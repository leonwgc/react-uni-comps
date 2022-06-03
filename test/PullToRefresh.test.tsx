
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PullToRefresh from '../src/PullToRefresh';

const title = 'PullToRefresh';

describe('PullToRefresh test groups', () => {
    test('render', () => {
      render(<PullToRefresh title="PullToRefresh"/>);
      const el = screen.getByTitle('PullToRefresh');
      expect(el).toBeDefined();
    });
});
