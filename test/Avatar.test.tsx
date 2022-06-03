
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Avatar from '../src/Avatar';

const title = 'Avatar';

describe('Avatar test groups', () => {
    test('render', () => {
      render(<Avatar title="Avatar"/>);
      const el = screen.getByTitle('Avatar');
      expect(el).toBeDefined();
    });
});
