
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SwipeAction from '../src/SwipeAction';

const title = 'SwipeAction';

describe('SwipeAction test groups', () => {
    test('render', () => {
      render(<SwipeAction title="SwipeAction"/>);
      const el = screen.getByTitle('SwipeAction');
      expect(el).toBeDefined();
    });
});
