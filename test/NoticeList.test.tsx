
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NoticeList from '../src/NoticeList';

const title = 'NoticeList';

describe('NoticeList test groups', () => {
    test('render', () => {
      render(<NoticeList title="NoticeList"/>);
      const el = screen.getByTitle('NoticeList');
      expect(el).toBeDefined();
    });
});
