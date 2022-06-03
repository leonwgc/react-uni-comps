
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NoticeBar from '../src/NoticeBar';

const title = 'NoticeBar';

describe('NoticeBar test groups', () => {
    test('render', () => {
      render(<NoticeBar title="NoticeBar"/>);
      const el = screen.getByTitle('NoticeBar');
      expect(el).toBeDefined();
    });
});
