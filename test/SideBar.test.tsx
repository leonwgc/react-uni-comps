
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SideBar from '../src/SideBar';

const title = 'SideBar';

describe('SideBar test groups', () => {
    test('render', () => {
      render(<SideBar title="SideBar"/>);
      const el = screen.getByTitle('SideBar');
      expect(el).toBeDefined();
    });
});
