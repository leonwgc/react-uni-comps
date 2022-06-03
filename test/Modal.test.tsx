
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Modal from '../src/Modal';

const title = 'Modal';

describe('Modal test groups', () => {
    test('render', () => {
      render(<Modal title="Modal"/>);
      const el = screen.getByTitle('Modal');
      expect(el).toBeDefined();
    });
});
